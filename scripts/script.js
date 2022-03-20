let submit = document.querySelector(".submit"); 
submit.addEventListener('click', function enviar(enviar) {
    let error = document.querySelector(".error_name");
    error.classList.add("error");
    let alert = document.querySelector(".alert_name");
    alert.classList.add("display");

    enviar.preventDefault();
})

