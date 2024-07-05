let player1=document.querySelector(".player1");
let player2=document.querySelector(".player2");
let cells=document.querySelectorAll(".box")
let currentPlayer='X';
let nextPlayer='0'
let playerTurn=currentPlayer;
let restartButton=document.querySelector('button')
player1.textContent=`Player1:${currentPlayer}`
player2.textContent=`Player2:${nextPlayer}`
// function for changeTurn
function changeTurn(){
    console.log("intiate");
    if(playerTurn===currentPlayer){
        playerTurn=nextPlayer
    }
    else{
        playerTurn=currentPlayer
    }
}
// function for start the Game.
function startGame(){
    cells.forEach(function(cell){
        cell.addEventListener("click",handleClick);
    })
}
startGame();
function handleClick(event){
    if(event.target.textContent===''){
        event.target.textContent=playerTurn;
      if(checkWin()){
       disable();
      }
     else if(checkTie()){
       disable();
     }
     else{
        changeTurn();
     }
    }

}
function disable(){
 cells.forEach(cell=>{
    cell.removeEventListener("click",handleClick);
 })
}
// function for win
function checkWin(){
    let win=[
        [0,1,2,150,-100,90],
        [3,4,5,150,-2,90],
        [6,7,8,150,100,90],
        [2,4,6,150,-3,45],
        [0,4,8,145,-3,-45],
        [0,3,6,48,10,0],
        [2,5,8,250,5,0],
        [1,4,7,150,5,0]
    ]
    let line=document.querySelector('.lineThrough')
    for(let i=0 ; i < win.length ; i++){
        let[pos1,pos2,pos3,x,y,angle]=win[i];
        if(cells[pos1].textContent!==''&&(cells[pos1].textContent==cells[pos2].textContent && cells[pos2].textContent==cells[pos3].textContent)){
            line.style.width='2px'
             line.style.transform=`translate(${x}px, ${y}px) rotate(${angle}deg)`;
            return true;
        }
    }
    return false;
}
// function for tie
function checkTie(){
    let count=0;
    if(cells.textContent==''){
        count++;
    }
    if(count==0 && checkWin==false){
       return true;
    }
    else{
        return false;
    }
}
restartButton.addEventListener('click',()=>{
    cells.forEach(cell=>{
        cell.textContent='';
    })
    document.querySelector('.lineThrough').style.width="0"
   startGame();

})

