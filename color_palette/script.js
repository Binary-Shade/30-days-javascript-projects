const container = document.querySelector(".container");
const btn = document.getElementById("refreshBtn");

const maxPaletterBoxes = 24;

const generatePalette = () => {
    container.innerHTML = "";
    for(let i=0; i<maxPaletterBoxes;i++){
        const hexValue = Math.floor(Math.random() * 0xffffff).toString(16);
        const colorVal = `#${hexValue.padStart(6, '0')}`;
        console.log(colorVal);
        const box = document.createElement("li");
        box.classList.add('color');
        box.innerHTML = `<div class='rect-box' style = 'background-color:${colorVal}'; </div> <span class='hex-value'> ${colorVal}</span>`;
        container.appendChild(box);
        box.addEventListener("click", ()=>copycolorVal(colorVal, box));
    }
}
generatePalette();

const copycolorVal = (hexVal, boxElement) => {
    const copyVal = boxElement.querySelector('.hex-value');
    navigator.clipboard.writeText(hexVal).then(
        ()=>{
            copyVal.innerHTML = "copied";
            setTimeout(()=>{
                copyVal.innerHTML = hexVal;
            },1000);
        }
    ).catch(()=>alert("failed to copy color value !"));
}



btn.addEventListener("click",() => generatePalette());