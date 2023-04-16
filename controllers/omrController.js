const axios = require('axios').default;
const fs = require('fs');

module.exports = {

    getAnswer : async function (req, res)  {

        const image_processing_api = "http://127.0.0.1:3000/response";

        /*---------------------------- เทสผลลัพธ์ (เฉลยมาจาก assets ไฟล์ [answer_example.json]) ----------------------------*/ 
        axios.get(image_processing_api)
        .then(function (response) {

            var answer_compare = JSON.parse(fs.readFileSync('./assets/json/answer_example.json', 'utf8'));
            sheet_input = response.data;

            if(Object.keys(answer_compare.answer_data).length != Object.keys(sheet_input.answer).length){
                res.send({"error":"invalid"})
            }

            var score = 0 ;
            var total = Object.keys(answer_compare.answer_data).length;

            for (let i = 0; i < Object.keys(answer_compare.answer_data).length; i++) {
                if(answer_compare.answer_data[i]["answer"] == sheet_input.answer[i]["answer"] && sheet_input.answer[i]["answer"]!= null){
                    score++;
                }
            }

            sheet_input["score"] = score;
            sheet_input["total"] = total;
            res.send(sheet_input)

        })
        .catch(function (error) {
            res.send(error)
        })
        /*---------------------------- เทสผลลัพธ์  ----------------------------*/ 

        /*---------------------------- ใช้งานจริง (เฉลยมาจาก Database) ----------------------------*/ 
        var bodyFormData = new FormData();
        bodyFormData.append('image', imageFile); 

        axios({
            method: "post",
            url: image_processing_api,
            data: bodyFormData,
            headers: { "Content-Type": "multipart/form-data" },
          })
            .then(function (response) {

                var answer_compare // <-- ไปเรียกเฉลยจาก database ปั้นเป็น object (หน้าตา object ตามไฟล์ใน ./assets/json/answer_example.json)
                sheet_input = response.data;
    
                if(Object.keys(answer_compare.answer_data).length != Object.keys(sheet_input.answer).length){
                    res.send({"error":"invalid"})
                }
    
                var score = 0 ;
                var total = Object.keys(answer_compare.answer_data).length;
    
                for (let i = 0; i < Object.keys(answer_compare.answer_data).length; i++) {
                    if(answer_compare.answer_data[i]["answer"] == sheet_input.answer[i]["answer"] && sheet_input.answer[i]["answer"]!= null){
                        score++;
                    }
                }
    
                sheet_input["score"] = score;
                sheet_input["total"] = total;
                res.send(sheet_input)
            })
            .catch(function (error) {
              //handle error
              res.send(error)
            });
        /*---------------------------- ใช้งานจริง ----------------------------*/ 

    },
}