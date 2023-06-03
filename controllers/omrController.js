const axios = require('axios').default;
const fs = require('fs');

exports.handleLogout = (req, res) => {
    res.clearCookie('loggedIn');
    res.redirect('/login');
};

exports.getAnswer = async function (req, res) {
    const image_processing_api_test = "http://127.0.0.1:3000/response";
    const image_processing_api = "http://127.0.0.1:3000/predict";
    var bodyFormData = new FormData();
    bodyFormData.append('file', req.body.image);

    axios({
        method: "post",
        url: image_processing_api,
        data: bodyFormData,
        headers: { "Content-Type": "multipart/form-data" },
    })
        .then(function (response) {

            var answer_compare
            sheet_input = response.data;

            if (Object.keys(answer_compare.answer_data).length != Object.keys(sheet_input.answer).length) {
                res.send({ "error": "invalid" })
            }

            var score = 0;
            var total = Object.keys(answer_compare.answer_data).length;

            for (let i = 0; i < Object.keys(answer_compare.answer_data).length; i++) {
                if (answer_compare.answer_data[i]["answer"] == sheet_input.answer[i]["answer"] && sheet_input.answer[i]["answer"] != null) {
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
}