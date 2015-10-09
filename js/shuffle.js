  

//User constructor
var User = function User(what,name,contribution,done) {
  this.constructor;
  this.what = what;
  this.name = name;
  this.sentence = what + ", Contribution: " + contribution + " sentences";
  this.contribution = contribution;
  this.done = done;
}

//User Array
var user =[];

//Users
user[0] = new User("Exchange Student","Emilio",600,1);
user[1] = new User("Exchange Student","Aldo",200,1);
user[2] = new User("Exchange Student","Neele",000,0);
user[3] = new User("Exchange Student","László",400,1);
user[4] = new User("Exchange Student","Smilla",400,1);
user[5] = new User("Bilingual","Ákos",000,0);
user[6] = new User("Exchange Student","Natthakan",300,1);
user[7] = new User("Exchange Student","Mina",300,1);
//user[] = new User("","",000);

//User stats
var userStats = [];

//Total amount of members
var amountOfMembers = user.length - 1;

function getSentences (amountOfMembers) {
  for (var i = user.length - 1; i >= 0; i--) {
    if (user[i].done == true) {
      userStats[i] =  user[i].sentence ;
    } else {
      userStats[i] = "User currently doing the challenge"
    };
  };
}

getSentences(amountOfMembers);

/*************************************** Necessary functions **********************************/
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

//Array to store images of members
var members = [];

function createImagesOfMembers (numOfMembers){
  for (var i = 0; i <= numOfMembers; i++) {
    members[i] = "<img class=\"img-responsive\" src=\"img/members/member" + i + ".png\" alt=\"\" style=\"padding:0px;margin-top:0px;\">";
  }
}

createImagesOfMembers(amountOfMembers);

//Shuffle all the images
var shuffleMembers = shuffle(members);

//Grab only the first 5 of them all
var orderMembers = shuffleMembers.slice(0, 5);

//Create variables to put in the images (For later grabbing in HTML)
var photo = [];
var userNumber = [];

//How many users do you need?
var amountOfUsers = 5;
var realAmountOfUsers = amountOfUsers-1;

//Put images in an array called Photo and the user number for later use in the contribution(line 97)
function createPhoto (members){
  for (var i = 0; i <= members; i++) {
      photo[i] = orderMembers[i];
      userNumber[i] = orderMembers[i].slice(51,52);//*****************>>>>>>>
  }
}

createPhoto(realAmountOfUsers);

/*************************************** User Database **********************************/


//Find total amount of sentences
var totalNumber = 0;

for (var i = user.length - 1; i >= 0; i--) {
  totalNumber += user[i].contribution;
};

var total = "Members: " + amountOfMembers + ", Contribution: " + totalNumber + " sentences"

//Place sentence in HTML through the array notebook
var notebook = [];

var arrayOfDone = [];

function findDone (amountOfMembers){
  for (var i = user.length - 1; i >= 0; i--) {
    arrayOfDone[i] = user[i].done.toString();
  };
}

findDone(amountOfMembers);
//MAX 25
for (var i = 0; i <= amountOfMembers; i++){
    if (arrayOfDone[userNumber[i]] == true) {
    switch(userNumber[i]) {
        case "0":
            notebook[i] = user[0].sentence;
            break;
        case "1":
            notebook[i] = user[1].sentence;
            break;
        case "2":
            notebook[i] = user[2].sentence;
            break;
        case "3":
            notebook[i] = user[3].sentence;
            break;
        case "4":
            notebook[i] = user[4].sentence;
            break;
        case "5":
            notebook[i] = user[5].sentence;
            break;
        case "6":
            notebook[i] = user[6].sentence;
            break;
        case "7":
            notebook[i] = user[7].sentence;
            break;
        case "8":
            notebook[i] = user[8].sentence;
            break;
        case "9":
            notebook[i] = user[9].sentence;
            break;
        case "10":
            notebook[i] = user[10].sentence;
            break;
        case "11":
            notebook[i] = user[11].sentence;
            break;
        case "12":
            notebook[i] = user[12].sentence;
            break;
        case "13":
            notebook[i] = user[13].sentence;
            break;
        case "14":
            notebook[i] = user[14].sentence;
            break;
        case "15":
            notebook[i] = user[15].sentence;
            break;
        case "16":
            notebook[i] = user[16].sentence;
            break;
        case "17":
            notebook[i] = user[17].sentence;
            break;
        case "18":
            notebook[i] = user[18].sentence;
            break;
        case "19":
            notebook[i] = user[19].sentence;
            break;
        case "20":
            notebook[i] = user[20].sentence;
            break;
        case "21":
            notebook[i] = user[21].sentence;
            break;
        case "22":
            notebook[i] = user[22].sentence;
            break;
        case "23":
            notebook[i] = user[23].sentence;
            break;
        case "24":
            notebook[i] = user[24].sentence;
            break;
        case "25":
            notebook[i] = user[25].sentence;
            break; 
        
  };
} else {
  notebook[i] = "User currently doing the challenge";
};
}


/*************************************** Fresh notes code **********************************/


//This was made to have the possibility of not only 3 notes
var setNotesTo = 3; 
var howManyNotes = [];

function createNotes (numberOfNotes){
  for (var i = 0; i <= numberOfNotes - 1; i++) {
    howManyNotes[i] = i;
  }
}

createNotes(setNotesTo);

//Randomize the numbers inside of howManyNotes 
var shuffleNumOfNotes = shuffle(howManyNotes);

var notes = [];

function createFreshNotes (numberOfNotes){
  for (var i = 0; i <= numberOfNotes; i++) {
    notes[i] = "<a href=\"take25/" + shuffleNumOfNotes[i] + ".xls\" download=\"" + shuffleNumOfNotes[i] + ".xls\" title=\"" + "take25(" + shuffleNumOfNotes[i] + ").xls" + "\"> <img class=\"img-responsive img-portfolio\" src=\"img/freshNotes/" + shuffleNumOfNotes[i] + ".jpg\" alt=\"\" style=\"\"></a>";
  }
}

createFreshNotes(setNotesTo);

//Store them to grab them later in HTML
var fresh = [];

for (var i = notes.length - 1; i >= 0; i--) {
  fresh[i] = notes[i];
};

console.log(fresh);


