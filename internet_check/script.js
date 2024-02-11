const wrapper = document.querySelector('.wrapper'),
toaster = wrapper.querySelector('.toast'),
title = toaster.querySelector('span'),
subtitle = toaster.querySelector('p')
const wifiIcon = document.querySelector('.wifi-icon');
const closeIcon = document.getElementById('close-icon');

window.onload = () => {
    function ajax(){
        let ping = new XMLHttpRequest();
        ping.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);
        ping.onload = () => {
            if(ping.status === 200 && ping.status < 300){
                toaster.classList.add('online');
                console.log(ping.status);
                wrapper.classList.add('show');                
            }else{
                offline();
            }
        }
        ping.onerror = () => {
            offline();
        }
        ping.send();
    }
    function offline() {
        wrapper.classList.add('show');
        toaster.classList.add('offline');
        title.textContent = "You are offline";
        subtitle.textContent = "you are disconnected from internet !";
        wifiIcon.innerHTML = '<i class="uil uil-wifi-slash"> </i>';

    }
    setInterval(()=>{
        ajax()
    },1000)

    closeIcon.onclick = () => {
        wrapper.classList.add('hide');
    };
};
