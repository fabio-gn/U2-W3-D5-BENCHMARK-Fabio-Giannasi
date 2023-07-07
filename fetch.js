class FetchObjArg {
  constructor(method = "GET", bodyObj, contType) {
    this.method = method;
    this.body = JSON.stringify(bodyObj);
    this.headers = {
      "Content-type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGE3ZjRmMjEyYjUwYzAwMTQ5ZTUxZDMiLCJpYXQiOjE2ODg3Mjg4MTgsImV4cCI6MTY4OTkzODQxOH0.sXaOCO04bmMgTuxYAtVauwOS0W1ya48Cm6unuqTr_tw",
    };
  }
}
let getMethodArg = new FetchObjArg("GET");

let myURL = "https://striveschool-api.herokuapp.com/api/product/";
const fetchFunction = function (url, fetchObj, func) {
  fetch(url, fetchObj)
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("erroreeeee");
      }
    })
    .then((data) => {
      console.log(data);
      func(data);
    })
    .catch((err) => {
      console.log(err);
    });
};
