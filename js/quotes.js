var copyright = "<p class=\"container copyright\">Copyright &copy; World Wide Slang 2015</p>";

//To Shuffle an array
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex ;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

var quotes = [];

quotes[0] = "\"Transformation is not a destination, it\'s a journey\"";
quotes[1] = "\"Your history does not determine your destiny\"";
quotes[2] = "\"If you talk to a man in his language you\'re not talking to his head, you\'re talking to his heart.\"";
quotes[3] = "\"Nutella\" = Exchange student\'s best friend.";
quotes[4] = "\"The limits of my language are the limits of my world.\"";
quotes[5] = "\"Learning is a treasure that will follow its owner everywhere.\"";
quotes[6] = "\"You can never understand one language until you understand at least two.\"";
quotes[7] = "\"Obstacles are those frightful things you see when you take your eyes off your goal.\"";
quotes[8] = "\"Well timed silence hath more eloquence than speech.\"";
quotes[9] = "\"It's wonderful what we can do if we're allways doing.\"";
quotes[10] = "\"Talent hits a target no one else can hit, genious hits a target no one else can see.\"";
quotes[11] = "\"The man who makes no mistakes does not usually make anything.\"";
quotes[12] = "\"As long as a man stands in his own way everything seems to be in his way\"";

//quotes[] = "\"\"";

var shuffleQuotes = shuffle(quotes);

var numOfQuotes = shuffleQuotes.length;

var quote = [];

function createQuotes (numOfQuotes){
  for (var i = 0; i <= numOfQuotes; i++) {
    quote[i] = "<small>" + shuffleQuotes[i] + "</small>";
  }
}
createQuotes(numOfQuotes);
