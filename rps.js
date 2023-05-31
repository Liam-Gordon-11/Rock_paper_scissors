
let user_input = "";
let  rand_int = 0;
let user = 0;

// rock : 0
// scissors : 1
// paper : 2

for (let i = 0; i < 5; i++){

input_user = prompt("Play").toUpperCase();
rand_int = Math.floor(Math.random()*3);

    if (input_user =="ROCK"){ user = 0;}
    else if (input_user =="SCISSORS"){ user = 1;}
    else if (input_user == "PAPER"){ user = 2;}
    else{
        i --;
    }
if (user == rand_int){
    console.log("Draw");
}else if ((user == 0 && rand_int == 1) || (user == 1 && rand_int == 2) || (user == 2 && rand_int == 0)){
    console.log("You Win!!");
}else{
    console.log("You lose!!");
}
}
