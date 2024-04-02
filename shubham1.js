let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn0 = true;

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],

];
const resetGame=()=>{
    turn0=true;
    enableBoxes();
    msgContainer.classList.add("hide");
    
}

boxes.forEach((box) => {
    box.addEventListener("click",() =>{
        console.log("Box was clicked");
        //box.innerText ="Mia";
        if(turn0){ //player X
            box.innerText = "X";
            turn0 = false; //we set to false so that it will not be true again for next time 
        }
        else{ //player 0
        box.innerText = "O";
        turn0 = true;
        }
        box.disabled = true;
        checkWinner();
    });
});
const disableBoxes =  () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}
const enableBoxes =  () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText="";
    }
}
const showWinner=(Winner) =>{
    msg.innerText=Congratulations , Winner is ${Winner};
    msgContainer.classList.remove("hide");
    disableBoxes();

}
const checkWinner = () => {
     for(let pattern of winPatterns){

        let pos1value = boxes[pattern[0]].innerText;
        let pos2value = boxes[pattern[1]].innerText;
        let pos3value = boxes[pattern[2]].innerText;

        if(pos1value != "" && pos2value != ""&& pos3value !=""){
            if(pos1value===pos2value &&pos2value ===pos3value){
            console.log("Winner",pos1value); 
            showWinner(pos1value);

            }
        }
     }
};

newGameBtn.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame)














/*if (pos1value !== "" && pos2value !== "" && pos3value !== "") {
    if (pos1value === pos2value && pos2value === pos3value) {
        console.log("Winner", pos1value);
        showWinner(pos1value);
    }
}


boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("Box was clicked");
        if (turn0) { // player X
            box.innerText = "X";
            turn0 = false;
        } else { // player O
            box.innerText = "O";
            turn0 = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

*/