let formInput = document.querySelector(".form__input")
let pwOne = document.querySelector("#pw__one")
let pwTwo = document.querySelector("#pw__two")
let pwThree = document.querySelector("#pw__three")
let pwFour = document.querySelector("#pw__four")
let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&'
formInput.value = 15

function randomStr() {
    let pw = ''
    for (let i = 0; i <= formInput.value - 1; i++) {
        let randomPass = Math.floor(Math.random() * str.length)
        pw += str.charAt(randomPass)
    }
        return pw
} 

function switchClass() {
    pwOne.classList.remove('pw__output--dots')
    pwOne.classList.add('pw__output--copy')
    pwTwo.classList.remove('pw__output--dots')
    pwTwo.classList.add('pw__output--copy')
    pwThree.classList.remove('pw__output--dots')
    pwThree.classList.add('pw__output--copy')
    pwFour.classList.remove('pw__output--dots')
    pwFour.classList.add('pw__output--copy')
}  

function generate() {
    switchClass()
    pwOne.textContent = randomStr()
    pwTwo.textContent = randomStr()
    pwThree.textContent = randomStr()
    pwFour.textContent = randomStr()
}

function copy() {
    alert('password copied to clipboard')
}