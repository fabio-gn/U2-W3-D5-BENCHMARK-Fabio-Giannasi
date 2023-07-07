let card = document.querySelector('.card')


const populateSingleCard = function(imgUrl, prodName, descr, brand, price){
card.innerHTML= `
<img src="${imgUrl}" class="card-img-top" alt="Card Image">
            <div class="card-body d-flex flex-column">
              <h5 class="card-title"> ${prodName} </h5>
              <p class="card-text mb-4">${descr}</p>
              <span>${brand}</span>
              <span>${price}</span>
              
              <button onclick="frofri()" class="btn btn-danger text-white mt-auto align-self-start">Cancella</button>
              <a href="#" class="btn btn-outline-primary text-dark mt-auto align-self-start">Modifica</a>
            </div>
`

}
let addressBarContent = new URLSearchParams(location.search)
let eventId = addressBarContent.get('id')
let idUrl = myURL += eventId;

// fetch(idUrl, {
//     headers:{"Authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGE3ZjRmMjEyYjUwYzAwMTQ5ZTUxZDMiLCJpYXQiOjE2ODg3Mjg4MTgsImV4cCI6MTY4OTkzODQxOH0.sXaOCO04bmMgTuxYAtVauwOS0W1ya48Cm6unuqTr_tw"}

// })
//     .then(res => {
//         if(res.ok){
//             return res.json()
//         } else {
//             throw new Error('boh')
//         }
//     })
//     .then(data =>{
//         console.log(data)
//     })
//     .catch(err =>{
//         console.log(err)
//     })
fetchFunction(idUrl, getMethodArg, (data)=>{populateSingleCard(data.imageUrl, data.name, data.description, data.brand, data.price)})

deleteMethod = new FetchObjArg('DELETE')
delete deleteMethod.body;

let deleteElement = function(){
    fetchFunction(idUrl, deleteMethod, (data)=>{
        console.log('broooo')
    })
}

// let deleteButton = document.getElementById('delete-button')
// deleteButton.addEventListener('click', () => {
//     console.log('clicked')
//     fetchFunction(idUrl, deleteMethod, (data)=>{
//         console.log('deleted')
//     })
// })