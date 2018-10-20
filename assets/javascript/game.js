var game = {
    "winCount": 0,
    "maxGuesses": 9,
    "guessesLeft": 0,
    "lettersGuessed": [],
    "chosenWord": [],
    "hasFinished": false,
    "chosenWordIndex": [],
    "words": [
        "monopoly",
        "sorry",
        "life",
        "candyland",
        "mastermind",
        "risk",
        "clue"
    ]
};

//Reset game
    function resetGame() {
        game.guessesLeft = game.maxGuesses;
        game.hasFinished = false;
        game.lettersGuessed = [];
        game.chosenWord = [];
        game.chosenWordIndex = Math.floor(Math.random() * (game.words.length));

        for (var i = 0; i < game.words[game.chosenWordIndex].length; i++) {
            game.chosenWord[i] = "_";
        };

        game.chosenWord.join(" ");
        document.getElementById("currentWord").innerHTML = game.chosenWord;

        updateDisplay();

    };

    //Add to HTML

    function updateDisplay() {
        document.getElementById("totalWins").innerHTML = game.winCount;
        document.getElementById("currentWord").innerHTML = "";
        for (var i = 0; i < this.chosenWord.length; i++); {
            document.getElementById("currentWord").innerHTML += game.chosenWord[i];
        };
        document.getElementById("guessesLeft").innerHTML = game.guessesLeft;
        document.getElementById("lettersGuessed").innerHTML = game.lettersGuessed;
        if (guessesLeft <= 0){
            hasFinished = true;
        };

    };

    //Letter assignment

    function letter() {
        var letter = document.getElementById("letter").value;
        if (letter.length > 0) {
            for (var i = 0; i < game.chosenWordIndex.length; i++){
                if (game.chosenWordIndex[i] === letter) {
                    chosenWord[i] = letter;
                }
            }
            winCount++;
            document.getElementById("currentWord").innerHTML = chosenWord.join(" ");
        };
    };

    

//Key functions

document.onkeyup = function (event) {
    var letter = event.key.toLowerCase();
    if (letter === game.chosenWordIndex) {
        updateDisplay();
    };

    if (letter != game.choseWordIndex) {
        updateDisplay();
    };



};