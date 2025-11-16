function generateRamdomNumber (){
let ramdomPassowrd = "kwoiddwkdiwbaiwoubd"
let password = ""
for (let i = 0 ;i < 12 ; i++){
    let ramdomNumber = Math.floor(Math.random() * ramdomPassowrd.length )
    password = password + ramdomPassowrd[ramdomNumber]

}
console.log("password -->", password)
let passwordBox =document.getElementById("password")
passwordBox.innerText = `The password is ${password} and the length is ${password.length}`;

}

