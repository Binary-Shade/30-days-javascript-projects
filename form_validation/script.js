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

    eInput.onkeyup = () => {
        checkEmail();
    }
}

function checkEmail() {

}

function checkPass() {

}