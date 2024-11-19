var quotes=["“Be yourself; everyone else is already taken.”",
"“So many books, so little time.”",
"“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
"“A friend is someone who knows all about you and still loves you.”",
"“To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.”"
];

var quoteButton = document.getElementById('quoteButton');
var quoteDisplay = document.getElementById('quote');

function getQuote() {
    var random = Math.floor(Math.random() * quotes.length);
    return quotes[random];
}

function display(){
   quoteDisplay.textContent = getQuote();
}