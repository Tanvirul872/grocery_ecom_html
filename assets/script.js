let menu = document.querySelector('#menu_bar')
let navbar = document.querySelector('.navbar')
let header = document.querySelector('.header-2')

menu.addEventListener('click',()=>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active2');
}); 

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active2');


    if(window.scrollY>160){
        header.classList.add('active3') ; 
    }else{
        header.classList.remove('active3') ; 

    }
}

let countDate = new Date('april 3, 2023 00:00:00').getTime(); 

function CountDown(){

    let now = new Date().getTime(); 
    gap = countDate.now; 

    let second = 1000;
    let minitue = second * 60;
    let hour = minitue * 60;
    let day = hour * 24;

    let d = Math.floor(gap/(day)); 
    let h = Math.floor(gap % (day)/(hour)); 
    let m = Math.floor(gap % (hour)/(minitue)); 
    let s = Math.floor(gap % (minitue)/(second)); 

    document.getElementById('day').innerText = d ;
    document.getElementById('hour').innerText = h ;
    document.getElementById('miniute').innerText = m ;
    document.getElementById('second').innerText = s ;

}
setInterval(function(){
   CountDown() ; 
},1000);