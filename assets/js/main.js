'use strict';

/**
* add eventListenter on multiple elements
*/

const addEventOnElements = function(elements , eventType , callback){
    for (let i = 0, len = elements.length; i < len; i++ ) {

        elements[i].addEventListener(eventType , callback)
        
    }
}


/**
* PRELOADER
*/
const preloader = document.querySelector("[data-preloader]");
const circle = document.querySelector("[data-circle]");

window.addEventListener("load" , function(){
    preloader.classList.add("loaded");
    circle.style.animation = "none";
    document.body.classList.add("loaded");
});