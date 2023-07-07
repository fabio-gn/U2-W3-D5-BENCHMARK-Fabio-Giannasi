const productForm = document.getElementById('product-form')
const productName = document.getElementById('name')
const productDescription = document.getElementById('description')
const productBrand = document.getElementById('brand')
const productImgUrl = document.getElementById('image-url')
const productPrice = document.getElementById('price')

//classe x creare oggetti product
class Sedia {
    constructor(name, description, brand, imageUrl, price){
        this.name = name
        this.description = description
        this.brand = brand
        this.imageUrl = imageUrl
        this.price = price
    }
}
// let contType = "application/json"


//classe per creare SECONDO argomento fetch
// class FetchObjArg {
//     constructor(method = 'GET', bodyObj,){
//         this.method = method
//         this.body = JSON.stringify(bodyObj)
//         this.headers = {
//             "Content-type": "application/json",
//             "Authorization" : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGE3ZjRmMjEyYjUwYzAwMTQ5ZTUxZDMiLCJpYXQiOjE2ODg3Mjg4MTgsImV4cCI6MTY4OTkzODQxOH0.sXaOCO04bmMgTuxYAtVauwOS0W1ya48Cm6unuqTr_tw"
//         }


//     }
        

//     }
        //definisco SECONDO argomento in caso di GET
// let getMethodArg = new FetchObjArg('GET')


// let myURL = "https://striveschool-api.herokuapp.com/api/product/"
// const fetchFunction = function(url, fetchObj){   
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
//         })
//         .catch(err => {
//             console.log(err);
//         })
//     } 


productForm.addEventListener('submit', function(e){
    e.preventDefault()

    let prod = new Sedia(
        productName.value,
        productDescription.value,
        productBrand.value,
        productImgUrl.value,
        productPrice.value
        )
    
    //Definisco SECONDO argomento in caso di POST
     let postMethodArg = new FetchObjArg('POST', prod);

    fetchFunction(myURL, postMethodArg)
    // .then(res =>{
    //     if (res.ok){
    //         return res.json()
    //     } else {
    //         throw new Error('error')
    //     }
    // })
    // .then(data => {
    //     console.log(data)
    // })
    // .catch(err => {
    //     console.log(err);
    // })

        

    
})