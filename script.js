let nav = document.querySelector("nav");
let downloadBtn =document.querySelectorAll(".downloadBtn")
let link =document.querySelectorAll(".nav_tag_a")

window.onscroll = function() {
      if(document.documentElement.scrollTop > 20){
        nav.classList.add("sticky");
      }else {
        nav.classList.remove("sticky");
      }
}
let dynamicText =document.querySelector(".typing")
let dynamicText2 =document.querySelector(".typing-2")
const words =["Frontend Developer","Artist","Programmer","Designer"];
let wordIndex=0;
let charIndex=1;
let isDeleting =false;
const typeEffect=()=>{
    const currentWords=words[wordIndex];
    const currentChar = currentWords.substring(0,charIndex);
    if(dynamicText!=null){
        dynamicText.textContent=currentChar;
    }
    dynamicText2.textContent=currentChar;
    if(!isDeleting && charIndex<currentWords.length){
        charIndex++;
        setTimeout(typeEffect, 250);
    }
    else if(isDeleting && charIndex>0){
        charIndex--;
        setTimeout(typeEffect, 200);
    }
    else{
        isDeleting=!isDeleting
        wordIndex=!isDeleting?(wordIndex+1)%words.length:wordIndex;
        setTimeout(typeEffect,1200)
    }
}
typeEffect()

downloadBtn.forEach(e=>{
    e.addEventListener('click',()=>{
        let atag=document.createElement("a"); 
        atag.href="suraj sakhare.pdf";
        atag.download=`suraj_sakhare_PortFolio`;
        document.body.appendChild(atag);
        atag.click();
        atag.remove();
        URL.revokeObjectURL("suraj sakhare.pdf")
        
    })
})
linkdin.onclick=()=>{
    location.href="https://www.linkedin.com/in/suraj-sakhare10/"
}
github.onclick=()=>{
    location.href="https://github.com/SurajSakhare100"
}
// Array(link).forEach(e=>{
//     e[0].addEventListener('click',()=>{
//         console.log("satisfies");
//         document.documentElement.scrollTop=1280;
//     })
//     // e[1].addEventListener('click',()=>{
//     //     document.documentElement.scrollTop=680;
//     // })
//     // e[2].addEventListener('click',()=>{
//     //     document.documentElement.scrollTop=680;
//     // })
//     // e[3].addEventListener('click',()=>{
//     //     document.documentElement.scrollTop=680;
//     // })
// })
link[0].onclick=()=>{
    document.documentElement.scrollBottom="1280";
    console.log("object");
}