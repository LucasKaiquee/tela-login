import { validateEmail, validatePassword } from "./utils.js";

const form = document.querySelector(".form-login")
const inputEmail = document.querySelector("#email")
const inputPassword = document.querySelector("#password")
const subimitForm = document.querySelectorAll(".btn")[0]

const spanError = document.querySelectorAll(".error-msg")
const loginSuccess = document.querySelector(".login-success")
const backForm = document.querySelectorAll(".btn")[1]

subimitForm.addEventListener("click", () => {
    const email = inputEmail.value
    const password = inputPassword.value

    // Validando email e senha usando as funções importadas do utils.js
    const isEmailValid = validateEmail(email);
    const isPasswordValid = validatePassword(password);

    // Atualizando visualização das mensagens de erro
    spanError[0].classList.toggle("hidden", isEmailValid);
    spanError[1].classList.toggle("hidden", isPasswordValid);

    // Se o email e a senha são válidos esconde o formulário e exibe a mensagem de sucesso
    if(isEmailValid && isPasswordValid) {
        form.classList.add("hidden")
        loginSuccess.classList.remove("hidden")

        inputEmail.value = ""
        inputPassword.value = ""
    }
})

// Ao clicar no botão voltar esconde a mensagem de sucesso e exibe o formulário de volta
backForm.addEventListener("click", () => {
    form.classList.remove("hidden")
    loginSuccess.classList.add("hidden")
})