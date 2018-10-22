// var game = {
//     winCount: 0,
//     maxGuesses: 9,
//     guessesLeft: 0,
//     lettersGuessed: [],
//     chosenWord: [],
//     hasFinished: false,
//     chosenWordIndex: [],
//     words: [
//         "monopoly",
//         "sorry",
//         "life",
//         "candyland",
//         "mastermind",
//         "risk",
//         "clue"
//     ]
// };

// //Reset game
//     function resetGame() {
//         game.guessesLeft = game.maxGuesses;
//         game.hasFinished = false;
//         game.lettersGuessed = [];
//         game.chosenWord = [];
//         game.chosenWordIndex = Math.floor(Math.random() * (game.words.length));

//         for (var i = 0; i < game.words[game.chosenWordIndex].length; i++) {
//             game.chosenWord[i] = "_";
//         };

//         game.chosenWord.push("_");
//         document.getElementById("currentWord").innerHTML = game.chosenWord;

//         updateDisplay();

//     };

//     //Add to HTML

//     function updateDisplay() {
//         document.getElementById("totalWins").innerHTML = game.winCount;
//         document.getElementById("currentWord").innerHTML = "";
//         for (var j = 0; j < chosenWordIndex.length; j++); {
//             document.getElementById("currentWord").innerHTML += game.chosenWordIndex[j];
//         };
//         document.getElementById("guessesLeft").innerHTML = game.guessesLeft;
//         document.getElementById("lettersGuessed").innerHTML = game.lettersGuessed;
//         if (guessesLeft <= 0){
//             hasFinished = true;
//         };

//     };

//     //Letter assignment

//     function letter() {
//         var letter = document.getElementById("letter").value;
//         if (letter.length > 0) {
//             for (var k = 0; k < game.chosenWordIndex.length; k++){
//                 if (game.chosenWordIndex[k] === letter) {
//                     chosenWord[k] = letter;
//                 }
//             }
//             winCount++;
//             document.getElementById("currentWord").innerHTML = chosenWord.join(" ");
//         };
//     };

    

// //Key functions

// document.onkeyup = function (event) {
//     var letter = event.key.toLowerCase();
//     if (letter === game.chosenWordIndex) {
//         updateDisplay();
//     };

//     if (letter != game.choseWordIndex) {
//         updateDisplay();
//     };



// };

var game = {
    winCount: 0,
    maxGuesses: 9,
    guessesLeft: 0,
    lettersGuessed: [],
    guessWord: [],
    hasFinished: false,
    words: [
        "monopoly",
        "risk",
        "life",
        "clue",
        "settlers of catan",
        "cones of dunshire"
    ]
};

//Reset Game

var resetGame = function () {
    game.guessesLeft = game.maxGuesses;
    game.hasFinished = false;
    game.lettersGuessed = [];
    game.guessWord = [];
    
}