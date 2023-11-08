let menu = document.getElementById("menu");
let popbox =document.getElementById("popbox");
menu.onclick=()=>{
popbox.className="pop";
}
remove.onclick=()=>{
popbox.className="hide";
}
let scoreChange=document.querySelectorAll(".score-change");
scoreChange.forEach((e)=>{
    console.log("object");
    e.innerText=Number.parseInt(e.innerText)
    e.innerText=`${e.innerText -200}`
    // if(scoreChange[0].innerText<5000){
    //     setInterval(() => {   
    //         e.innerText=Number.parseInt(e.innerText)
    //         e.innerText++;
    //     }, 100);
    // }
})
for (let i = 0; i < 20; i++) {

    scoreChange[0].innerText++;
    
}

