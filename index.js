
setTimeout(ok1,2000) ;
setTimeout(ok2,2000) ;
setInterval(ok3 ,3000) ;


let expressions_array=["Welcome in The best food makers in Rabat","Do you like Sandwiches?" ,"Are you Hungry?","What's do you wait?","Pass your command!!" , "Al-Irfane Sandwiches"] ;



function ok3() {
    let x=expressions_array.length ;
    document.getElementById("expressions").textContent=expressions_array[Math.floor(x*Math.random())] ;
}

function ok1() {
    document.body.style.background='none' ;
}

function ok2() {
    document.getElementById("mn").style.display='flex';
    document.body.style.backgroundColor='rgb(210, 109, 109)' ;
    let elements = document.getElementsByClassName("bn");
    for(let  i = 0; i < elements.length; i++) {
        elements[i].style.cursor = 'pointer';
}
}


const cd = document.getElementById("cd-bn") ;
cd.addEventListener("click" , function(){
    document.getElementById("bg-main1").style.display='none' ;
    document.getElementById("bg-main2").style.display='block' ;
})

const fill1 =document.getElementById("fl1") ;
const fill2 =document.getElementById("fl2") ;
const fill3 =document.getElementById("fl3") ;

const y_spinash =document.getElementById("y") ;
const n_spinash =document.getElementById("n") ;

const y_tomato =document.getElementById("y1") ;
const n_tomato= document.getElementById("n1") ;

const y_ognion = document.getElementById("y2") ;
const n_ognion = document.getElementById("n2") ;

const y_cheese = document.getElementById("y3") ;
const n_cheese = document.getElementById("n3") ;

fill1.addEventListener("click" , function(){
    document.getElementsByClassName("filling1")[0].style.display='block' ;
    document.getElementsByClassName("filling2")[0].style.display='none' ;
    document.getElementsByClassName("filling3")[0].style.display='none' ;
    document.getElementsByClassName("filling1")[0].style.opacity=1 ;
    document.getElementById("choose_meat").style.display='none' ;
    document.getElementById("choose_spinash").style.display='flex' ;

})


fill2.addEventListener("click" , function(){
    document.getElementsByClassName("filling1")[0].style.display='none' ;
    document.getElementsByClassName("filling2")[0].style.display='block' ;
    document.getElementsByClassName("filling3")[0].style.display='none' ;
    document.getElementsByClassName("filling1")[0].style.opacity=1 ;
    document.getElementById("choose_meat").style.display='none' ;
    document.getElementById("choose_spinash").style.display='flex' ;

})

fill3.addEventListener("click" , function(){
    document.getElementsByClassName("filling1")[0].style.display='none' ;
    document.getElementsByClassName("filling2")[0].style.display='none' ;
    document.getElementsByClassName("filling3")[0].style.display='block' ;
    document.getElementsByClassName("filling1")[0].style.opacity=1 ;
    document.getElementById("choose_meat").style.display='none' ;
    document.getElementById("choose_spinash").style.display='flex' ;

})

y_spinash.addEventListener("click", function(){
    document.getElementsByClassName("spinash")[0].style.opacity=1 ;
    document.getElementsByClassName("spinash")[1].style.opacity=1 ;

    document.getElementById("choose_spinash").style.display='none' ;
    document.getElementById("choose_tomato").style.display='flex' ;
})

n_spinash.addEventListener("click" ,function(){
    document.getElementsByClassName("spinash")[0].style.display='none' ;
    document.getElementsByClassName("spinash")[1].style.display='none' ;
    document.getElementsByClassName("spinash")[0].style.opacity=0 ;
    document.getElementsByClassName("spinash")[1].style.opacity=0 ;
    document.getElementById("choose_spinash").style.display='none' ;
    document.getElementById("choose_tomato").style.display='flex' ;
})

y_tomato.addEventListener("click", function(){
    document.getElementsByClassName("tomato")[0].style.opacity=1 ;
    document.getElementsByClassName("tomato")[1].style.opacity=1 ;

    document.getElementById("choose_tomato").style.display='none' ;
    document.getElementById("choose_ognion").style.display='flex' ;
})

n_tomato.addEventListener("click" ,function(){
    document.getElementsByClassName("tomato")[0].style.display='none' ;
    document.getElementsByClassName("tomato")[1].style.display='none' ;

    document.getElementsByClassName("tomato")[0].style.opacity=0 ;
    document.getElementsByClassName("tomato")[1].style.opacity=0 ;

    document.getElementById("choose_tomato").style.display='none' ;
    document.getElementById("choose_ognion").style.display='flex' ;
})


y_ognion.addEventListener("click", function(){
    document.getElementsByClassName("ognion")[0].style.opacity=1 ;
    document.getElementsByClassName("ognion")[1].style.opacity=1 ;
    document.getElementById("choose_ognion").style.display='none' ;
    document.getElementById("choose_cheese").style.display='flex' ;
})

n_ognion.addEventListener("click" ,function(){
    document.getElementsByClassName("ognion")[0].style.display='none' ;
    document.getElementsByClassName("ognion")[1].style.display='none' ;
    document.getElementById("choose_ognion").style.display='none' ;
    document.getElementById("choose_cheese").style.display='flex' ;
})

y_cheese.addEventListener("click", function(){
    document.getElementsByClassName("cheese")[0].style.opacity=1 ;
    document.getElementsByClassName("cheese")[1].style.opacity=1 ;
    document.getElementById("choose_cheese").style.display='none' ;
    document.getElementById("command").style.display='flex'

    
    


})

n_cheese.addEventListener("click" ,function(){
    document.getElementsByClassName("cheese")[0].style.display='none' ;
    document.getElementsByClassName("cheese")[1].style.display='none' ;
    document.getElementsByClassName("cheese")[0].style.opacity=0 ;
    document.getElementsByClassName("cheese")[1].style.opacity=0 ;
    document.getElementById("choose_cheese").style.display='none' ;
    document.getElementById("command").style.display='flex' ;
    

   

}) 



