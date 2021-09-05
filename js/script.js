//Get the Button
let myBtn = document.getElementById("my-btn");

window.onscroll = function() {scrollFunction()};
function scrollFunction(){
    if(document.body.scroll>20 || document.documentElement.scrollTop>20){
        myBtn.style.display = "block";
    }
    else{
        myBtn.style.display = "none";
    }
}

function topscroll(){
    document.documentElement.scrollTop = 0; // for chrome
    document.body.scrollTop = 0 // for safari
}