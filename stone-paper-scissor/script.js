const buttons = document.querySelectorAll("button");
const display = document.getElementById("display");
const userimg = document.getElementById("userimg");
const botImg = document.getElementById("pcimg");

buttons.forEach(button => {
    button.addEventListener("click", (e)=> {
        calculate(e.target.dataset.value);
    })
})

function calculate(userChoice){
    const random = Math.floor((Math.random()*3)+1);
    const options = {
        1: "rock",
        2: "paper",
        3: "scissors"
    };
    const computerChoice = options[random];
    const result = computerChoice === "paper" && userChoice === "rock" || computerChoice === "rock" && userChoice === "scissors" || computerChoice === "scissors" && userChoice === "paper" ? "you lose" : computerChoice === "rock" && userChoice === "paper" || computerChoice === "scissors" && userChoice === "rock" || computerChoice === "paper" && userChoice === "scissors" ? "you won!": "match draw" ;
    display.innerHTML = result;
    console.log(result);
    userimageChange(userChoice);
    botimageChange(computerChoice);
}

function userimageChange(userChoice){
    if(userChoice === "rock"){
    userimg.src = "/rockpaper/icons/rock.png";   
}else if (userChoice === "paper") {
    userimg.src = "/rockpaper/icons/paper.png"
} else {
    userimg.src = "/rockpaper/icons/scissors.png"                
};

}
function botimageChange(botChoice){
    if(botChoice === "rock"){
        botImg.src = "/rockpaper/icons/rock.png";   
    }else if (botChoice === "paper") {
        botImg.src = "/rockpaper/icons/paper.png"
    } else {
        botImg.src = "/rockpaper/icons/scissors.png"                
    };
}