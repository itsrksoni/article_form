const form = document.getElementById("form");
let email = document.getElementById("email-field");
let name = document.getElementById("name-field");
let uniqueIdField = document.getElementById("unique-id-field");
let articleNameField = document.getElementById("article-name-field");
let phoneField = document.getElementById("phone-no-field");
let button = document.getElementById("submit");
let error = false;

form.addEventListener('keyup', (e) => {
    e.preventDefault();
    checkValidation();
    });
    if(error){
    button.disabled=true;
    }else{
    button.disabled= false;
}

if(error){
button.setAttribute('disabled', '')
}else{
button.removeAttribute('disabled')
}


function checkValidation() {

let emailValue = email.value.trim();
let emailValidate = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
let nameValue = name.value.trim();
let uniqueValue = uniqueIdField.value;
let articleName = articleNameField.value;
let phoneNo = phoneField.value.trim();
let phoneValidate = /[0-9]/;



if (emailValue == "" || emailValue == null) {
    document.getElementById('email-error').style.display = 'block';
    document.getElementById('email-error').innerText = "Email Cannot be blank";
    document.getElementById('submit').disabled = true;
    error = true;
} else if (!emailValidate.test(emailValue)) {
    document.getElementById('email-error').style.display = 'block';
    document.getElementById('email-error').innerText = "Please Enter a Valid email";
    document.getElementById('submit').disabled = false;
} else {
    document.getElementById('email-error').style.display = 'none';

}
if (nameValue == "" || nameValue == null) {
    document.getElementById('name-error').style.display = 'block';
    document.getElementById('name-error').innerText = "Name Cannot be blank";
    document.getElementById('submit').disabled = false;
    error = true;
} else {
    document.getElementById('name-error').style.display = 'none';

}
if (uniqueValue == "" || uniqueValue == null) {
    document.getElementById('unique-id-error').style.display = 'block';
    document.getElementById('unique-id-error').innerText = "Unique Id Cannot be blank";
    document.getElementById('submit').disabled = false;
    error = true;
}else if (checkUnique(uniqueValue)===true) { 
    document.getElementById('unique-id-error').style.display = 'block';
    document.getElementById('unique-id-error').innerText = "Unique Id Already taken";
    document.getElementById('submit').disabled = false;
}
else {
    document.getElementById('unique-id-error').style.display = 'none';

}
if (articleName == "" || articleName == null) {
    document.getElementById('article-name-error').style.display = 'block';
    document.getElementById('article-name-error').innerText = "Article Name Cannot be blank";
    document.getElementById('submit').disabled = false;
    error = true;
} else {
    document.getElementById('article-name-error').style.display = 'none';

}
if (phoneNo == "" || phoneNo == null) {
    document.getElementById('phone-no-error').style.display = 'block';
    document.getElementById('phone-no-error').innerText = "Phone No Can't be blank";
    document.getElementById('submit').disabled = false;
    error = true;
}else if (!phoneValidate.test(phoneNo)) {
    document.getElementById('phone-no-error').style.display = 'block';
    document.getElementById('phone-no-error').innerText = "Please Enter 1 - 9 only ";
    document.getElementById('submit').disabled = false;

}else if (phoneNo.length < 10) {
    document.getElementById('phone-no-error').style.display = 'block';
    document.getElementById('phone-no-error').innerText = "Phone No Can't be less than 10 digit";
    document.getElementById('submit').disabled = false;
    error = true;
}

 else {
    document.getElementById('phone-no-error').style.display = 'none';
    document.getElementById('submit').disabled = false;

}

}

function checkUnique(num){
const uniqueData = [1,2,3,4,5];
if(uniqueData.includes(num)){
return true;
}

return false;

}