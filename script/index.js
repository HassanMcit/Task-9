var btn = document.getElementById("button");
var txt = document.getElementById("txt");
var author = document.getElementById("author");
var display = document.getElementById("display");

var quote = [
    {
        text: `"Be yourself; everyone else is already taken"`,
        author: "Oscar Wilde",
    },
    {
        text: `"I'm selfish, impatient and a little insecure. I make mistakes,
                I am out of control and at times hard to handle. But if you can't handle me at my worst, 
                then you sure as hell don't deserve me at my best."`,
        author: "Marilyn Monroe",
    },
    {
        text: `"So many books, so little time."`,
        author: "Frank Zappa",
    },
    {
        text: `"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe."`,
        author: "Albert Einstein",
    },
    {
        text: `"A room without books is like a body without a soul."`,
        author: "Marcus Cicero",
    },
    {
        text: `"Be the change that you wish to see in the world."`,
        author: "Gandhi",
    },
];

var i = 0;
var iOld = -1;

function createQuote() {
    display.classList.remove("d-none");
    do {
        i = Math.floor(Math.random() * quote.length);
    } while (i === iOld);
    iOld = i;
    txt.innerHTML = quote[iOld].text;
    author.innerHTML = `-- ${quote[iOld].author} --`;
}