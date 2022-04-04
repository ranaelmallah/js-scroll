let stars = document.getElementById('stars');
let moon =document.getElementById("moon")
let mountains3 =document.getElementById("mountains3")
let mountains4 =document.getElementById("mountains4")
let river =document.getElementById("river5")
let boat =document.getElementById("boat6")
let hello =document.querySelector(".hello");
 window.onscroll = function(){
     let value = scrollY;
     stars.style.left = value + "px"
     moon.style.top =value*3 +"px"
     mountains3.style.top =value*2 +"px"
     mountains4.style.top =value*1 +"px"
     boat.style.left = value*5 + "px"
     river.style.top =value +"px"
     hello.style.fontSize = value +"px"
if( scrollY >= 80){
    hello.style.fontSize = 80 +"px"
    hello.style.position = 'fixed';
    if( scrollY >=340){
hello.style.display='none'
}
else{
hello.style.display='block'

}
if(screenY>=166){
    document.querySelector('.imgs').style.background ='linear-gradient(#176c95,#10001f)'
}
else{
 document.querySelector('.imgs').style.background='linear-gradient(#200016,#10001f)'

}
}
 

     
 
    }
