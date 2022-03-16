var quote = document.getElementById("quote");
var author = document.getElementById("author");
var btn = document.getElementById("btn");

var url = "https://api.quotable.io/random";

var getQuote = () => {
  fetch(url)
    .then((data) => data.json())
   .then ((item) => {
       console.log(item.content);
       console.log(item.author);
       quote.innerHTML = item.content;
       author.innerHTML = item.author;
   })
};

window.addEventListener("load", getQuote);
btn.addEventListener("click", getQuote);
