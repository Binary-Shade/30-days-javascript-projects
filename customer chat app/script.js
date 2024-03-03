const chatbox = document.querySelector(".chatbox");
const result = document.querySelector('#result');
const button = document.querySelectorAll('.default-btns button');
const chatbotToggler = document.querySelector(".chatbot-toggler");
const closeBtn = document.querySelector(".close-btn");
const send_btn = document.getElementById('send-btn');

// function to create chat LI
const createChatLi = (result, className) => {
    console.log(result);
    console.log(className);
    if(className === 'outgoing'){
        console.log(result.response);
        const chatLi = document.createElement("li");
        chatLi.classList.add("chat", `${className}`);
        let chatContent = '<p></p>';
        chatLi.innerHTML = chatContent;
        chatLi.querySelector("p").textContent = result;
        return chatLi;
    }else if(className === 'incoming'){
        console.log(result.response);
        const chatLi = document.createElement("li");
        chatLi.classList.add("chat", `${className}`);
        let chatContent = '<span class="material-symbols-outlined">smart_toy</span><p></p>';
        chatLi.innerHTML = chatContent;
        chatLi.querySelector("p").textContent = result.response;
        return chatLi;
    }else if(className === 'error'){
        console.log(result.response);
        const chatLi = document.createElement("li");
        chatLi.classList.add("chat", 'incoming');
        let chatContent = '<span class="material-symbols-outlined">smart_toy</span><p></p>';
        chatLi.innerHTML = chatContent;
        chatLi.querySelector("p").textContent = result;
        return chatLi;
        }
}

// function to handle chat request
const handleRequest = (message) => {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', `http://localhost:8888/XpertBPOSolutions/bposervlet?chat=${encodeURIComponent(message)}`, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                var responseText = xhr.responseText;
                try {
                    var jsonResponse = JSON.parse(responseText);
                    chatbox.appendChild(createChatLi(jsonResponse, 'incoming'))
                } catch (e) {
                    result.innerHTML += "<br>Error parsing JSON response: " + e.message;
                }
            } else {
                result.innerHTML += "<br>Error: " + xhr.status;
            }
        }
    };
    xhr.send();
}


// event listeners for buttons to handle chat request
button.forEach((btn)=>{
    btn.addEventListener('click', (e)=>{
        const query = e.target.textContent;
        chatbox.appendChild(createChatLi(query, "outgoing"));
        chatbox.scrollTo(0, chatbox.scrollHeight);
        handleRequest(e.target.value);
    })
})

// handle advanced user input if needs
send_btn.onclick = () => {
    const txtInput = document.getElementById('inputVal').value;
    const message = 'I can\'t understand your query. Please contact customer service team [1234-4567-7890]. They will assist you soon .';
    chatbox.appendChild(createChatLi(txtInput, "outgoing"));
    chatbox.scrollTo(0, chatbox.scrollHeight);
    chatbox.appendChild(createChatLi(message, "error"));
    
    
};

closeBtn.addEventListener("click", () => document.body.classList.remove("show-chatbot"));
chatbotToggler.addEventListener("click", () => document.body.classList.toggle("show-chatbot"));




