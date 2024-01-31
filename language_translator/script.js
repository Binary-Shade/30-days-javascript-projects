const btn = document.getElementById("generate");





const translate = async () => {
    const inputTxt = document.getElementById("input");
    const from = document.getElementById("from-dropdown");
    const to = document.getElementById("to-dropdown");
    const url = 'https://translate281.p.rapidapi.com/';
    const options = {
	method: 'POST',
	headers: {
		'content-type': 'application/x-www-form-urlencoded',
		'X-RapidAPI-Key': '6c02a74706mshfb4ff569faffd28p1a75b0jsn0cb884fa5e91',
		'X-RapidAPI-Host': 'translate281.p.rapidapi.com'
	},
	body: new URLSearchParams({
		text: inputTxt.value,
		from: from.value,
		to: to.value
	})
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	console.log(result);
    document.getElementById("output").textContent = result.response;
} catch (error) {
	console.error(error);
}
}

btn.addEventListener("click", ()=> {
    translate();
})

