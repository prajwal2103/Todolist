let input=document.querySelector("#input");
let btn=document.querySelector("#btn");
let taskContainer=document.querySelector(".taskContainer");
let All=document.querySelector("#All")
let Complete=document.querySelector("#Complete")
let InComplete=document.querySelector("#InComplete");
function addTask(){
 if(input.value===""){
    alert("You must write something")
 }
 else{
    let card=document.createElement("div");
 card.classList.add("card");
 let marked=document.createElement("div");
 let heading=document.createElement("h6");
  heading.innerHTML=input.value;
 let deleteBtn=document.createElement("button");
 deleteBtn.innerHTML="Delete";
 
 card.append(marked,heading,deleteBtn);
 marked.classList.add("marked");
 marked.addEventListener("click",(event)=>{
    heading.classList.toggle("checked");
    marked.classList.toggle("bg");
    showCard();
   
    
 })

 taskContainer.append(card);
 deleteBtn.addEventListener("click",()=>{
    card.remove();
 })
 }
 input.value="";
}
function showCard(type="All") {
   let cards = document.querySelectorAll(".card");
 
   cards.forEach(card => {
     let heading = card.querySelector("h6");
     if(type=="All"){
      card.style.display = "flex";
     }
     else if (type === "complete" && heading.classList.contains("checked")) {
       card.style.display = "flex";
     } else if (type === "incomplete" && !heading.classList.contains("checked")) {
       card.style.display = "flex";
     } else {
       card.style.display = "none";
     }
   });
 }
btn.addEventListener("click",addTask);
All.addEventListener("click", () => showCard("All"));
Complete.addEventListener("click", () => showCard("complete"));
InComplete.addEventListener("click", () => showCard("incomplete"));


showCard("All");