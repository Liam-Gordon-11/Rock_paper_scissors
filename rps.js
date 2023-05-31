
let user_input = "";
let  rand_int = 0;
let user = 0;

// rock : 0
// scissors : 1
// paper : 2

for (let i = 0; i < 5; i++){

user_input = prompt("Play").toUpperCase();
rand_int = math.floor(math.random()*3);

switch(user_input){
    case "ROCK": user = 0;break;
    case "SCISSORS": user = 1;break;
    case "PAPER": user = 2;break;
    default : 
        i --;

if (user == rand_int){
    console.log("Draw");
}else if ((user == 0 && rand_int == 1) || (user == 1 && rand_int == 2) || (user == 2 && rand_int == 0)){
    console.log("You Win!!");
}else{
    console.log("You lose!!");
}
}
}