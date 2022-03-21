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
let alert_name = document.querySelector('.alert_name')
let alert_lname = document.querySelector('.alert_lname')
let alert_email = document.querySelector('.alert_email')
let alert_password = document.querySelector('.alert_password')

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
        alert_name.classList.add('display')
        alert_lname.classList.add('display')
        alert_email.classList.add('display')
        alert_password.classList.add('display')
    e.preventDefault();

})

