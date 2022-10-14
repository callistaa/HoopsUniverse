let form = document.forms['validationForm'];
let errorLabel = document.getElementById('errorLabel');
document.getElementById('submitBtn').addEventListener('click', onSubmit);

function onSubmit(event) {
    if (!checkName()) {
        event.preventDefault();
        return;
    }
    if (!checkPhone()) {
        event.preventDefault();
        return;
    }
    if (!checkEmail()) {
        event.preventDefault();
        return;
    }
    if (!checkGender()) {
        event.preventDefault();
        return;
    }
    if (!checkAge()) {
        event.preventDefault();
        return;
    }
    if (!checkDistrict()) {
        event.preventDefault();
        return;
    }
    if (!checkAddress()) {
        event.preventDefault();
        return;
    }
    if (!checkPostal()) {
        event.preventDefault();
        return;
    }
}

function checkName(){
    if(form['nama'].value == ""){
        errorLabel.innerHTML = "*Name must be filled";
        return false;
    }
    if(form['nama'].value.length < 3){
        errorLabel.innerHTML = "*Name length must be more than 2 letters"
        return false; 
    }
    if(!isAlpha(form['nama'].value)){
        errorLabel.innerHTML = "*Name must use letters";
        return false;
    }
    return true;
}

function checkPhone() {
    if (form['phone'].value == "") {
        errorLabel.innerHTML = "*Phone Number must be filled";
        return false;
    }
    if (isAlpha(form['phone'].value)) {
        errorLabel.innerHTML = "*Phone must use numbers";
        return false;
    }
    if (form['phone'].value.length < 10) {
        errorLabel.innerHTML = "*Phone Number length must be more than 9 numbers";
        return false;
    }
    return true;
}

function checkEmail(){
    if (form['email'].value == "") {
        errorLabel.innerHTML = "*Email must be filled";
        return false;
    }
    return true;
}

function checkGender() {
    let maleBtn = document.getElementById('laki-laki');
    let femaleBtn = document.getElementById('perempuan');

    if(!maleBtn.checked && !femaleBtn.checked){
        errorLabel.innerHTML = "*Gender must be choosen";
        return false;
    }
    return true;
}

function checkAge() {
    if (form['age'].value == "") {
        errorLabel.innerHTML = "*Age must be filled";
        return false;
    }
    if (form['age'].value < 17) {
        errorLabel.innerHTML = "*Age must be 17 years old or above";
        return false;
    }
    return true;
}

function checkDistrict() {
    if (form['district'].value == "") {
        errorLabel.innerHTML = "*District must be filled";
        return false;
    }
    if (form['district'].value.length < 4) {
        errorLabel.innerHTML = "*District length must be more than 3 letters"
        return false;
    }if(!isAlpha(form['district'].value)){
        errorLabel.innerHTML = "*District must use letters";
        return false;
    }
    return true;
}

function checkAddress(){
    let address = form['address'].value;
    let split = address.split(' ');

    if (address == "") {
        errorLabel.innerHTML = "*Address must be filled";
        return false;
    }
    else {
        let check = 0;
        for (let index = 0; index < split.length; index++) {
            if (split[index] != '') check += 1;
        }
        if (check < 2){
            errorLabel.innerHTML = "*Address must more than 1 word";
            return false;
        }
        else return true;
    }
}

function checkPostal() {
    if (form['postal'].value == "") {
        errorLabel.innerHTML = "*Postal Code must be filled";
        return false;
    }
    if (form['postal'].value.length < 5) {
        errorLabel.innerHTML = "*Postal Code length must be 5 numbers"
        return false;
    }
    if (isAlpha(form['postal'].value)) {
        errorLabel.innerHTML = "*Postal Code must use numbers";
        return false;
    }
    return true;
}

function isAlpha(inputText){
    for (let index = 0; index < inputText.length; index++) {
        if(inputText.charAt(index) == ' ') continue;
        else if(inputText.charAt(index) < 'a' || inputText.charAt(index) > 'z'){
            if(inputText.charAt(index) < 'A' || inputText.charAt(index) > 'Z'){
                return false;
            }
        }
    }
    return true;
}