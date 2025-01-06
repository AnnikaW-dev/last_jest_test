
let game = {
    currentGame: [],
    score: 0,
    playerMoves: [],
    choices: ["button1", "button2", "button3", "button4"],
};

function newGame() {
    game.currentGame = [];
    game.playerMoves = [];
    game.score = 0;
    showScore();
    addTurn();
};

function addTurn() {
    game.playerMoves = [];  // reset the players moves to 0 
    game.currentGame.push(game.choices[(Math.floor(Math.random() * 4))]);  // Randomly add a button ID to the currentGame array
    //showTurns();
}

function showScore() {
    document.getElementById("score").innerText = game.score;
};

function lightsOn(circ) {
    document.getElementById(circ).classList.add("light");
    setTimeout(() => {
        document.getElementById(circ).classList.remove("light");
    }, 400)
;}

module.exports = { game, newGame, showScore, addTurn, lightsOn};