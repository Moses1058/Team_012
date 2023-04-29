const menu = document.getElementById('nmenu');
const close = document.getElementById('nclose');
const nav = document.getElementsByTagName('nav');

function navbar(){

    if(menu.style.display == "block"){
        menu.style.display = "none";
        close.style.display = "block";
        nav[0].style.display = "flex";
    } 

    else {
        menu.style.display = "block";
        close.style.display = "none";
        nav[0].style.display = "none";;
    }  
}

