const axios = require('axios').default;
const fs = require('fs');
const FormData = require('form-data');
const db = require("../config/dbconnection");

exports.handleLogout = (req, res) => {
    res.clearCookie('loggedIn');
    res.redirect('/login');
};

exports.getAnswer = async function (req, res) {
    const image_processing_api = "http://127.0.0.1:4000/predict";

    if (!req.file) {
        return res.status(400).send('กรุณาอัปโหลดไฟล์รูปภาพ');
    }

    const { topic, year, term, subterm, section, group } = req.body;

    const imagePath = req.file.path;
    const imageData = fs.readFileSync(imagePath);

    const formData = new FormData();
    formData.append("file", imageData, { filename: req.file.originalname });


    const query = `
        SELECT ans
        FROM ans WHERE topic = ?  AND year = ? AND term = ? AND sub_term = ?
    `;
    const params = [topic, year, term, subterm];

    const [result] = await db.execute(query, params);

    const answer = JSON.parse(result[0].ans)


    axios({
        method: "post",
        url: image_processing_api,
        data: formData,
        headers: { ...formData.getHeaders() },
    })
        .then(async function (response) {



            var answerData = response.data.answer;
            if (!Array.isArray(answerData)) {
                return res.status(400).send({ "error": "invalid" });
            }


            var score = 0;
            for (let i = 0; i < answerData.length; i++) {
                const responseAnswer = answerData[i].answer;
                const correctAnswers = answer[`${i + 1}`];
                

                if (correctAnswers && (correctAnswers.includes(convertAnswer(responseAnswer)))) {
                    score++;
                }
            }

            const correctAnswersCount = Object.values(answer).filter(Array.isArray).filter(arr => arr.length === 3).length;
            if (correctAnswersCount >= 1) {
                score += 1;
            }

            const querycheckdub = `SELECT username FROM user_exam WHERE username = ?  AND year = ? AND term = ? AND sub_term = ?`;

            const [isDub] = await db.execute(querycheckdub, [response.data.id, year, term, subterm]);


            if (isDub[0] == undefined){
                const query = `
                INSERT INTO user_exam (username, section, groupCPE, user_score, year, term, sub_term)
                VALUES (?, ?, ?, ?, ?, ?, ?)
                `;
                const params = [response.data.id, section, group, score, year, term, subterm]
            
                const [result] = await db.execute(query, params, subterm);

                if (result){
                    res.json({ status: "Success", message: `ตรวจสอบรหัสนักศึกษา ${response.data.id} เรียบร้อยได้คะแนน ${score}` });
                } 
            } else {
                res.json({ status: "Faild", message: `รหัสนักศึกษา ${response.data.id} มีการตรวจสอบไปแล้วได้คะแนน ${score}` });
            }

        })
        .catch(function (error) {
            console.log(error);
        });
}

function convertAnswer(ans){
    if (ans == "ก") {
        ans = "a"
    } else if (ans == "ข"){
        ans = "b"
    } else if (ans == "ค"){
        ans = "c"
    } else if(ans == "ง"){
        ans = "d"
    }
    return ans
}