const btn = document.getElementById("calculate");

function showLoader(){
    document.querySelector(".loader").style.display = "block";
    document.querySelector(".love-calculator").classList.add("blur");
}

function hideLoader(){
    document.querySelector(".loader").style.display = "none";
    document.querySelector(".love-calculator").classList.remove("blur");
}


const loveCalculate = async (fname, lname) => {
    const url = `https://love-calculator.p.rapidapi.com/getPercentage?fname=${fname}&sname=${lname}`;
    const options = {
        method: 'GET',
        headers: {
        'X-RapidAPI-Key': '6c02a74706mshfb4ff569faffd28p1a75b0jsn0cb884fa5e91',
        'X-RapidAPI-Host': 'love-calculator.p.rapidapi.com'
    }
    };
    showLoader();
    const response = await fetch(url, options);
    const result = await response.json();
    hideLoader();
    console.log(result);
    document.getElementById("percent").textContent = result.percentage;
    document.getElementById("result").textContent = result.result;

}

btn.addEventListener("click", ()=> {
    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    loveCalculate(fname, lname);
})

