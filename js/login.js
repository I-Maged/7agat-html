const loginForm = document.getElementById('login-form')
const registerForm = document.getElementById('register-form')
const loginSubmit = document.getElementById('login-submit')
const registerSubmit = document.getElementById('register-submit')
const toggleLogin = document.getElementById('login-toggle-btn')
const toggleRegister = document.getElementById('register-toggle-btn')

loginSubmit.addEventListener('click', (e) => {
  //Prevent auto submit
  e.preventDefault()
})
registerSubmit.addEventListener('click', (e) => {
  //Prevent auto submit
  e.preventDefault()
})
toggleLogin.addEventListener('click', (e) => {
  //Prevent auto submit
  e.preventDefault()
  loginForm.style.display = 'none'
  registerForm.style.display = 'block'
})
toggleRegister.addEventListener('click', (e) => {
  //Prevent auto submit
  e.preventDefault()
  registerForm.style.display = 'none'
  loginForm.style.display = 'block'
})
