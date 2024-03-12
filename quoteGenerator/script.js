const quotes = [
    {
        quote: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
    },
    {
        quote: "Life is what happens when you're busy making other plans.",
        author: "John Lennon"
    },
    {
        quote: "In the end, we will remember not the words of our enemies, but the silence of our friends.",
        author: "Martin Luther King Jr."
    },
    {
        quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        author: "Winston Churchill"
    },
    {
        quote: "The only thing we have to fear is fear itself.",
        author: "Franklin D. Roosevelt"
    }
];

const quote = document.getElementById("quote");
const author = document.getElementById("author");
const button = document.getElementById("btn");


const quoteGen = () =>{
    let rand = Math.floor(Math.random() * 5);
    quote.innerHTML = quotes[rand].quote;
    author.innerHTML = quotes[rand].author;
    console.log(rand)
}

quoteGen();
button.addEventListener("click", quoteGen);