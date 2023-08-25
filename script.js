let currentQuote = '', currentAuthor = '';

const quotesData = [
  {quote: "You miss 100% of the shots you don’t take.", author:"Wayne Gretzky"},
  {quote: "Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do", author: "Mark Twain"},
  {quote: "The best time to plant a tree was 20 years ago. The second best time is now.", author:"Chinese Proverb"},
  {quote:"Either you run the day, or the day runs you.", author:"Jim Rohn"},
  {quote: "Do what you can, where you are, with what you have.", author: "Teddy Roosevelt"},
  {quote: "Everything you’ve ever wanted is on the other side of fear.", author: "George Addair"},
  {quote: "Believe you can and you’re halfway there.", author: "Lao Tzu"},
  {quote: "You can’t fall if you don’t climb. But there’s no joy in living your whole life on the ground.", author:"Unknown"},
  {quote: "We must believe that we are gifted for something, and that this thing, at whatever cost, must be attained.", author:"Marie Curie"},
  {quote: "Too many of us are not living our dreams because we are living our fears.", author:"Les Brown"},
  {quote: "In order to succeed, your desire for success should be greater than your fear of failure.", author:"Bill Cosby"},
  {quote: "A person who never made a mistake never tried anything new.", author:" Albert Einstein"},
  {quote: "There are no traffic jams along the extra mile.", author:"Roger Staubach"},
  {quote: "It is never too late to be what you might have been.", author: "George Eliot"},
  {quote: "Education costs money. But then so does ignorance.", author: "Sir Claus Moser"},
  {quote: "When one’s mind is made up, this diminishes fear.", author:"Rosa Parks"},
  {quote: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius"},
  {quote: "If you look at what you have in life, you’ll always have more. If you look at what you don’t have in life, you’ll never have enough.", author: "Oprah Winfrey"},
  {quote: "If you do what you’ve always done, you’ll get what you’ve always gotten.", author:"Tony Robbins"},
  {quote: "It’s your place in the world; it’s your life. Go on and do all you can with it, and make it the life you want to live.", author:"Mae Jemison"},
  {quote:"You may be disappointed if you fail, but you are doomed if you don’t try.", author: "Beverly Sills"},
]

const colors = [
  '#16a085',
  '#27ae60',
  '#2c3e50',
  '#f39c12',
  '#e74c3c',
  '#9b59b6',
  '#FB6964',
  '#342224',
  '#472E32',
  '#BDBB99',
  '#77B1A9',
  '#73A857'
];

//get quote text & author randomly
function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotesData.length)
  return quotesData[randomIndex]
}

function newQuote() {
  let randomQuote = getRandomQuote();
  currentQuote = randomQuote.quote;
  currentAuthor = randomQuote.author;
  
  $('.quote-text').animate({opacity: 0}, 500, function () {
    $(this).animate({opacity: 1}, 500);
    $('#text').text(currentQuote);
  })
  
  $('.quote-author').animate({opacity: 0}, 500, function() {
    $(this).animate({opacity: 1}, 500);
    $('#author').text(currentAuthor);
  })
  
  const colorIndex = Math.floor(Math.random() * colors.length);
  $('#quote-box').animate(
    { backgroundColor: colors[colorIndex], color: colors[colorIndex] },
    1000
  );
  $('.btn').animate(
    { backgroundColor: colors[colorIndex] }, 1000
  )
  
  $('#tweet-quote').attr(
    'href',
    'https://twitter.com/intent/tweet?hashtags=quotes&text=' +
      encodeURIComponent('"' + currentQuote + '" ' + currentAuthor)
  );
}

// assign event listener to newquoteBtn when clicked=
$(document).ready(function () {
  newQuote();
  $('#new-quote').on('click', newQuote);
})
