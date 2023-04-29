const menu = document.getElementById('nmenu');
const close = document.getElementById('nclose');
const nav = document.getElementsByTagName('nav');

function navbar(){

    if(menu.style.visibility == "visible"){
        menu.style.visibility = "hidden";
        close.style.display = "block";
        nav[0].style.display = "flex";
    } 

    else {
        menu.style.visibility = "visible";
        close.style.display = "none";
        nav[0].style.display = "none";;
    }  
}

