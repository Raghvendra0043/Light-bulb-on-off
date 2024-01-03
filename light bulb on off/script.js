let isopen=false;
let btn=document.querySelector('.switch')
let bulbTop=document.querySelector('.bulb-top')
let bulbBottom=document.querySelector('.bulb-bottom')


btn.addEventListener("click",function(){
    if(isopen){
        btn.classList.remove("on");
        bulbTop.classList.remove("bulbOn");
        bulbBottom.classList.remove("bulbOn");
    }else{
        btn.classList.add("on");
        bulbTop.classList.add("bulbOn");
        bulbBottom.classList.add("bulbOn");
    }
    isopen = !isopen
})