const wrapper = document.querySelector(".wrapper");
const acceptBtn = document.getElementById('accept');

// function to set the cookie 
acceptBtn.onclick = () => {
    document.cookie = "name=binaryshade; expires=" + (60*60*24*30);
    if (document.cookie) {
        wrapper.classList.add('hide');
    }else{
        // alert the user if cookie is not set
        alert("cookie not set! check the browser cookie settings");
    }
}

// let checkCookie = document.cookie.indexOf('name=binaryshade');
// optional code to check the cookie 

// checkCookie != -1 ? wrapper.classList.add('hide') : wrapper.classList.remove('.hide');