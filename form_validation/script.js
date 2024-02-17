const form = document.querySelector("form");
eField = form.querySelector(".email"),
eInput = eField.querySelector("input"),
pField = form.querySelector(".password"),
pInput = pField.querySelector("input");

form.onsubmit = (e) => {
    e.preventDefault();

    (eInput.value === "") ? eField.classList.add('shake', 'error') : checkEmail() ;
    (pInput.value === "") ? pField.classList.add('shake', 'error') : checkPass();

    setTimeout(()=> {
        eField.classList.remove('shake');
        pField.classList.remove('shake');
    }, 500)

    // eInput.onkeyup = () => {
    //     checkEmail();
    // }
}

function checkEmail() {
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if(!eInput.value.match(pattern)){
        eField.classList.add('error');
        eField.classList.remove('valid');

        let errorTxt = document.querySelector('.error-txt');
        (eInput.value!= '') ? errorTxt.innerHTML = "enter a valid email address" : errorTxt.innerHTML = "email can't be blank";
    }else {
        eField.classList.remove('error');
        eField.classList.add('valid');
    }
}

function checkPass() {
    if(pInput.value ===''){
        pField.classList.add('error');
        pField.classList.remove('valid');
    }else {
        pField.classList.remove('error');
        pField.classList.add('valid');
    }
}
