let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg")

let turn_O = true; // player O

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8],
];
let c=1;
boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{        
        if(turn_O){ //player O turn
            box.innerText="O";
            turn_O = false;
        } else { //player X turn
            box.innerText = "X";
            turn_O = true;
        }
        box.disabled = true;
        checkWineer();
        c=c+1; 
        if (c===10){
            msg.innerText = `Ohh... Hard Luck, Match is Draw, Better luck next time....!!`;
            msgContainer.classList.remove("hide");
            disableBoxes();
        }       
    })
})
 
const resetGame = ()=>{
    turn_O = true;
    enableBoxes();
    msgContainer.classList.add("hide");
    c=1;
}

const disableBoxes = ()=>{
    for (let box of boxes) {
        box.disabled = true;
    }
}
const enableBoxes = ()=>{
    for (let box of boxes) {
        box.disabled = false;
        box.innerText="";
    }
}
const showWinner =(winner)=>{
    msg.innerText = `Congratulations...!!, Winner is Player ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}
const checkWineer=()=>{
      for(pattern of winPatterns){
        // console.log(pattern[0], pattern[1], pattern[2]);
        // console.log(
        //     boxes[pattern[0]].innerText,
        //     boxes[pattern[1]].innerText, 
        //     boxes[pattern[2]].innerText
        // );
       
            let pos1Val = boxes[pattern[0]].innerText;
            let pos2Val = boxes[pattern[1]].innerText;
            let pos3Val = boxes[pattern[2]].innerText;

            if(pos1Val !="" && pos2Val !="", pos3Val !="") {
                if(pos1Val === pos2Val && pos2Val===pos3Val){
                console.log("Winner is Player ", pos1Val);   
                showWinner(pos1Val);             
                }
            } 
       
        }   
    }
newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);