const data = {
    firstname: "",
    lastname: "",
    email: "",
    password: ""
}

const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const email = document.getElementById("email");
const password = document.getElementById("password");
const mail = document.querySelector('.error_email')
let alert = document.querySelector('.alert')

firstname.addEventListener('input', alldata);
lastname.addEventListener('input', alldata);
email.addEventListener('input', alldata);
password.addEventListener('input', alldata);

function alldata(e) {
    data[e.target.id] = e.target.value;
    console.log(data)
}

const btn = document.querySelector(".submit");
btn.addEventListener('click', function send(e) {
        firstname.classList.add('error');
        lastname.classList.add('error');
        email.classList.add('alert');
        mail.classList.add('display')
        password.classList.add('error');
        alert.classList.add('error');
    e.preventDefault();

})

