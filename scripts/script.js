const form = document.getElementById("form")
const firstNameInput = document.getElementById("firstNameInput")
const lastNameInput = document.getElementById("lastNameInput")
const dateInput = document.getElementById("dateInput")
const emailInput = document.getElementById("emailInput")
const phoneInput = document.getElementById("phoneInput")

const maskOptions = {
  mask: '(000)000-0000'
};
const mask = IMask(phoneInput, maskOptions);

const momentFormat = 'DD/MM/YYYY';
const momentMask = new IMask(dateInput, {
  mask: Date,
  pattern: 'd`/m`/00000',
  lazy: true,
});

const setExFor = (target) => {
    if(target.classList.contains('success')){
        target.classList.remove('success')
    }
    target.classList.add('ex')
}

const setSuccess = (target) => {
    if(target.classList.contains('ex')){
        target.classList.remove('ex')
    }
    target.classList.add('success')
}


form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInputSucces()
})

const checkInputSucces = () => {
    const firstNameValue = firstNameInput.value.trim()
    const lastNameValue = lastNameInput.value.trim()
    const dateValue = dateInput.value.trim()
    const emailValue = emailInput.value.trim()
    const phoneValue = phoneInput.value.trim()
    if(firstNameValue == ""){
        setExFor(firstNameInput)
    }else {
        setSuccess(firstNameInput)
    }
    if(lastNameValue == ""){
        setExFor(lastNameInput)
    }else {
        setSuccess(lastNameInput)
    }
    if(dateValue == ""){
        setExFor(dateInput)
    }else {
        setSuccess(dateInput)
    }
    if(emailValue == ""){
        setExFor(emailInput)
    }else {
        setSuccess(emailInput)
    }
    if(phoneValue == ""){
        setExFor(phoneInput)
    }else {
        setSuccess(phoneInput)
    }
}
