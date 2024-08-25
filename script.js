let boxes=document.querySelectorAll(".box");
let winmsg=document.querySelector(".start");
let reset=document.querySelector(".reset");
let turnO=true;
const winPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
boxes.forEach((box)=>{
    box.addEventListener("click", () =>{
       console.log("box was clicked");
       if(turnO){
        box.innerText="O";
        turnO=false;
       }else{
        box.innerText="X";
        turnO=true;
       }
       box.disabled=true;
       checkWinner();
    });
});
const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const showWinner=(winner =>{
    winmsg.innerText=` Winner is  ${winner}`;
    winmsg.style.paddingLeft="3rem";
    winmsg.style.backgroundColor="darkgreen";
    disableBoxes();
    
})

const enable = () =>{
     for(let box of boxes){
        box.disabled=false;
        box.innerText="";
     }
}
const resetg = () =>{
    turnO=true;
    enable();
    winmsg.style.backgroundColor="black";
    winmsg.style.paddingLeft="1rem";
    winmsg.innerText="Start the Game!"
}
const checkWinner=()=>{
    for(let patt of winPattern){
        let patval1=boxes[patt[0]].innerText;
        let patval2=boxes[patt[1]].innerText;
        let patval3=boxes[patt[2]].innerText;
        if(patval1!="" && patval2!="" && patval3!=""){
            if(patval1===patval2 && patval2===patval3){
                showWinner(patval1);
            }
        }
    }
}
reset.addEventListener("click",resetg);