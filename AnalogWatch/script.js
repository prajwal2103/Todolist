let hour=document.querySelector("#hh")
let minutes=document.querySelector("#mm")
let seconds=document.querySelector("#ss")
function clock(){
    let time=new Date();
    hh=time.getHours();
    mm=time.getMinutes();
    ss=time.getSeconds();
    // console.log(ss);
    let hourRotation=30*hh+mm/2+(ss/120);
    // console.log((ss/120));
    let minRotation=6*mm+(ss/10);
    // console.log(ss/10);
    let secRotation=6*ss;
    hour.style.transform=`rotate(${hourRotation}deg)`;
    minutes.style.transform=`rotate(${minRotation}deg)`;
    seconds.style.transform=`rotate(${secRotation}deg)`;
}
setInterval(clock,1000);
