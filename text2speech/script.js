const textArea = document.getElementById("ip-text");
const btn = document.getElementById("speak");
let isSpeaking = true;

btn.addEventListener("click", ()=> {
    const synth = window.speechSynthesis;
    let text = textArea.value;
    // console.log(synth.getVoices());  
    if(!synth.speaking && textArea){
        const utterance = new SpeechSynthesisUtterance(text);
        const male = synth.getVoices();
        utterance.voice = male[32];
        synth.speak(utterance);
    }
    
})












