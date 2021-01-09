import request from "superagent";

const SubmitQuestions = {
  fetch: function () {
    const endPointUrl = `https://home-diary-58a7d.firebaseio.com/Questions.json`;
    return new Promise(function (resolve, reject) {
      request.get(endPointUrl).end((err, res) => {
        return err ? reject(err) : resolve(res);
      });
    });
  },
};

export default SubmitQuestions;
