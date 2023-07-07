// class FetchObjArg {
//     constructor(method = 'GET', bodyObj, contType){
//         this.method = method
//         this.body = JSON.stringify(bodyObj)
//         this.headers = {
//             "Content-type": "application/json",
//             "Authorization" : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGE3ZjRmMjEyYjUwYzAwMTQ5ZTUxZDMiLCJpYXQiOjE2ODg3Mjg4MTgsImV4cCI6MTY4OTkzODQxOH0.sXaOCO04bmMgTuxYAtVauwOS0W1ya48Cm6unuqTr_tw"
//         }


//     }
        

// }
// let getMethodArg = new FetchObjArg('GET')

// let myURL = "https://striveschool-api.herokuapp.com/api/product/"
// const fetchFunction = function(url, fetchObj, func){   
// fetch(url, fetchObj)
//         .then(res =>{
//             if (res.ok){
//                 return res.json()
//             } else {
//                 throw new Error('erroreeeee')
//             }
//         })
//         .then( data => {
//             console.log(data);
//             func(data)
//         })
//         .catch(err => {
//             console.log(err);
//         })
//     } 
let cardContainer = document.getElementById('card-row')
cardContainer.innerHTML = ``

const populateCards = function(imgUrl, prodName, descr, brand, price, id ){
    let card = document.createElement('div')
    card.classList.add('col-md-4', 'mb-3', 'd-flex', 'align-items-stretch')

card.innerHTML = `

          <div class="card">
            <img src="${imgUrl}" class="card-img-top" alt="Card Image">
            <div class="card-body d-flex flex-column">
              <h5 class="card-title"> ${prodName} </h5>
              <p class="card-text mb-4">${descr}</p>
              <span>${brand}</span>
              <span>${price}</span>
              <a href="./pages/detail.html?id=${id}" class="btn btn-primary text-white mt-auto align-self-start">Dettagli</a>
              <a href="#" class="btn btn-danger text-white mt-auto align-self-start">Cancella</a>
              <a href="#" class="btn btn-outline-primary text-dark mt-auto align-self-start">Modifica</a>
            </div>
          </div>
        
        `
    cardContainer.appendChild(card)
}






for(let i = 0; i < 6; i++){
    fetchFunction(myURL, getMethodArg, (data)=>{
        populateCards(data[i].imageUrl, data[i].name, data[i].description, data[i].brand, data[i].price, data[i]._id)
    })
}