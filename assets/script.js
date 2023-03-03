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