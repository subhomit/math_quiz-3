var player_1_name = localStorage.getItem("Player1_name");
var player_2_name = localStorage.getItem("Player2_name");
var player_1_score = 0;
var player_2_score = 0;
document.getElementById("player1_name").innerHTML = player_1_name + " : ";
document.getElementById("player2_name").innerHTML = player_2_name + " : ";
document.getElementById("player1_score").innerHTML = player_1_score;
document.getElementById("player2_score").innerHTML = player_2_score;
document.getElementById("player_question").innerHTML = "Question Turn - " + player_1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player_2_name;
function send(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value; 
    var question = document.getElementById("output").innerHTML = num1 + " X " + num2;
    var input_box = "<br> answer : <input type = 'text' id = 'input_answerBox'>";
    var check_button = "<br><br> <button class = 'btn btn-info' onclick = 'check()'> Check </button>"
    var row = question + input_box + check_button;
    document.getElementById("output").innerHTML = row;
}

var question_turn = "player1";
var answer_turn = "player2";

function check(){
    var real_answer = num1 * num2
    var get_answer = document.getElementById("input_answerBox").value;
    console.log(real_answer); 
    if(real_answer == get_answer){
        if(answer_turn == "player1"){
            player_1_score = player_1_score + 1;
            document.getElementById("player1_score").innerHTML = player_1_score;
        }
        else{
            player_2_score = player_2_score + 1;
            document.getElementById("player2_score").innerHTML = player_2_score;
        }
    }
    else{
        if(answer_turn == "player1"){
            player_1_score = player_1_score - 1;
            document.getElementById("player1_score").innerHTML = player_1_score;
        }
        else{
            player_2_score = player_2_score - 1;
            document.getElementById("player2_score").innerHTML = player_2_score;
        }
    }
    if(question_turn == "player1"){
        question_turn = "player2";
        document.getElementById("player_question").innerHTML = "Question Turn : " + player_2_name;
    }
    else{
        question_turn = "player1";
        document.getElementById("player_question").innerHTML = "Question Turn : " + player_1_name;
    }
    if(answer_turn == "player1"){
        answer_turn = "player2";
        document.getElementById("player_answer").innerHTML = "Answer Turn : " + player_2_name;
    }
    else{
        answer_turn = "player1";
        document.getElementById("player_answer").innerHTML = "Answer Turn : " + player_1_name;
    }
    document.getElementById("output").innerHTML = "";
    document.getElementById("num1").innerHTML = "";
    document.getElementById("num2").innerHTML = "";
}

