var current_turn = 1;
var board = {circle1:"NA",
             circle2:"NA",
             circle3:"NA",
             circle4:"NA",
             circle5:"NA",
             circle6:"NA",
             circle7:"NA",
             circle8:"NA",
             circle9:"NA"};
var player_turn = {player1: 0,
                   player2: 0
                  };

function error_message(someMessage) {
  //var element = document.getElementById("error-message");
  //element.style.visible = "hidden";
  //element.style.maxHeight = "10%";
  console.log('Error message ',document.getElementById("errorModal").getAttribute('data-modal'));
  document.getElementById("errorModal").setAttribute('data-modal','modal');
   console.log('Error message 2 ',document.getElementById("errorModal").getAttribute('data-modal'));
  //document.getElementById("alert-message").innerHTML = someMessage;
  //element.classList.add("visible");
}

function colorChange(circleName) {
    if (current_turn === 1 ) {
        if (player_turn["player1"] < 3){
            document.getElementById(circleName).style.fill = "#3e2723";
            this.crossToken("player1")
        } else {
            if (board[circleName] === 1){
                console.log('you can move this piece')
                this.checkWinner(1);
            } else {
                console.log('this square ',board[circleName]);
                this.error_message("You must select one of your tokens and move to a unused location");
                return;
            }
        }

        current_turn = 2;
        board[circleName] = 1;

    } else {
        if (player_turn["player2"] < 3){
            document.getElementById(circleName).style.fill = "#e65100";
            this.crossToken("player2")
        } else {
            this.checkWinner(2);
        }

        current_turn = 1;
        board[circleName] = 2;

    }

    this.playerChange();

 }

 function crossToken(setTurn) {
    player_turn[setTurn]++;
    console.log('player 1 ', player_turn["player1"])
    console.log('player 2 ', player_turn["player2"])
 }

 function playerChange() {
    var p1 = ['p1','p1-token'];
    var p2 = ['p2','p2-token'];
    var t1 = ['turn10', 'turn11', 'turn12'];
    var t2 = ['turn20', 'turn21', 'turn22'];
    var setColor = ['#fafafa', '#b0bec5']

    var i
    for (i = 0; i < p1.length; i++) {
        document.getElementById(p1[i]).style.backgroundColor = setColor[Math.abs(current_turn - 2)];
        document.getElementById(p2[i]).style.backgroundColor = setColor[current_turn - 1];
    }

    for (var t = 0; t < t1.length; t++) {
        if (current_turn === 2 ) {
            if (document.getElementById(t1[t]).style.display === "none") {
                document.getElementById(t1[t]).style.display = "block"
                break;
            }
        } else {
            if (document.getElementById(t2[t]).style.display === "none") {
                document.getElementById(t2[t]).style.display = "block"
                break;
            }
        }
    }
 }

 function checkWinner(player) {
    //Object.keys(board).forEach(key => {
    //  let value = board[key];
    //});
    if ((board["circle1"]=== player && board["circle2"]=== player && board["circle3"]=== player) ||
        (board["circle4"]=== player && board["circle5"]=== player && board["circle6"]=== player) ||
        (board["circle7"]=== player && board["circle8"]=== player && board["circle9"]=== player)) {
         console.log("You won")
    }

    if ((board["circle1"]=== player && board["circle5"]=== player && board["circle9"]=== player) ||
        (board["circle3"]=== player && board["circle5"]=== player && board["circle7"]=== player) ) {
         console.log("You won")
    }

   if ((board["circle1"]=== player && board["circle4"]=== player && board["circle7"]=== player) ||
       (board["circle2"]=== player && board["circle5"]=== player && board["circle8"]=== player) ||
       (board["circle3"]=== player && board["circle6"]=== player && board["circle9"]=== player)) {
        console.log("You won")
    }
 }