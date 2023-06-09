

// rock : 0
// scissors : 1
// paper : 2
let score = [0,0];

let arrImages = ["images/rock.png","images/scissors.jpg","images/paper.png"];
function changeImg(user,imgId){
    if (user == 0){
        document.getElementById(imgId).src="images/rock.png";
        PlayRound(0);
    }else if(user == 1){
        document.getElementById(imgId).src="images/scissors.jpg";
        PlayRound(1);
    }else{
        document.getElementById(imgId).src="images/paper.png";
        PlayRound(2);
    }
}

function PlayRound(user){
    let  rand_int = 0;
    const imageElement = document.getElementById("computerImg"); // Get the image element
    const playerBorder = document.getElementById("playerSqr");
    const compBorder = document.getElementById("compSqr");
    const display = document.getElementById("score");

    rand_int = Math.floor(Math.random()*3);
    imageElement.src = arrImages[rand_int]; 
    if (user == rand_int){
        console.log("Draw");
        compBorder.style.border="10px solid orange";
        playerBorder.style.border="10px solid orange";
    }else if ((user == 0 && rand_int == 1) || (user == 1 && rand_int == 2) || (user == 2 && rand_int == 0)){
        console.log("You Win!!");
        score[1] = score[1] + 1;
        compBorder.style.border="10px solid red";
        playerBorder.style.border="10px solid green";
    }else{
        console.log("You lose!!");
        score[0] = score[0]+1;
        compBorder.style.border="10px solid green";
        playerBorder.style.border="10px solid red";
    }

    display.innerHTML= `${score[0]} : ${score[1]}`;
}

