//this js file is for the content of the portfolio page only

let GalleryBoxTextarea = document.querySelector("#gallery_textarea");
let getButtons = document.querySelectorAll("#port_prev_btn a");
let portWork = document.querySelector("#port_work");
let huddleWork = document.querySelector("#huddle_work");
let nimcWork = document.querySelector("#nimc_work");
let testiWork = document.querySelector("#testimony_work");
let clipWork = document.querySelector("#clipboard_work");

let allStack = function () {
    
    buttonsLength = getButtons.length;
    for (let i = 0; i < buttonsLength; i++) {
        getButtons[i].style.backgroundColor = "rgba(255, 255, 255, 0.07";
    }

    let getTheAllButton = document.querySelector(".allbut");

    portWork.style.display = "block";
    huddleWork.style.display = "block";
    nimcWork.style.display = "block";
    testiWork.style.display = "block";
    clipWork.style.display = "block";
    GalleryBoxTextarea.style.display = "none";

    getTheAllButton.style.backgroundColor = "green";
}


let css = function () {
    
    buttonsLength = getButtons.length;
    for (let i = 0; i < buttonsLength; i++) {
        getButtons[i].style.backgroundColor = "rgba(255, 255, 255, 0.07";
    }

    let getCssButton = document.querySelector(".cssbut");

    portWork.style.display = "block";
    huddleWork.style.display = "block";
    nimcWork.style.display = "block";
    testiWork.style.display = "block";
    clipWork.style.display = "block";
    GalleryBoxTextarea.style.display = "none";

    getCssButton.style.backgroundColor = "green";
}

let bootStrap = function () {
    
    buttonsLength = getButtons.length;
    for (let i = 0; i < buttonsLength; i++) {
        getButtons[i].style.backgroundColor = "rgba(255, 255, 255, 0.07";
    }

    let getBootButton = document.querySelector(".bootbut");

    portWork.style.display = "block";
    huddleWork.style.display = "block";
    nimcWork.style.display = "block";
    testiWork.style.display = "none";
    clipWork.style.display = "block";
    GalleryBoxTextarea.style.display = "none";

    getBootButton.style.backgroundColor = "green";
}

let js = function () {
    
    buttonsLength = getButtons.length;
    for (let i = 0; i < buttonsLength; i++) {
        getButtons[i].style.backgroundColor = "rgba(255, 255, 255, 0.07";
    }

    let getJsButton = document.querySelector(".jsbut");

    portWork.style.display = "block";
    huddleWork.style.display = "none";
    nimcWork.style.display = "none";
    testiWork.style.display = "none";
    clipWork.style.display = "none";
    GalleryBoxTextarea.style.display = "none";

    getJsButton.style.backgroundColor = "green";
}

let vue = function () {
    
    buttonsLength = getButtons.length;
    for (let i = 0; i < buttonsLength; i++) {
        getButtons[i].style.backgroundColor = "rgba(255, 255, 255, 0.07";
    }

    let getVueButton = document.querySelector(".vuebut");

    GalleryBoxTextarea.style.display = "block";
    portWork.style.display = "none";
    huddleWork.style.display = "none";
    nimcWork.style.display = "none";
    testiWork.style.display = "none";
    clipWork.style.display = "none";

    let vueText = document.querySelector("#gallery_textarea h3");
    vueText.innerHTML = "I dont have any project using vue js, i'm still studying vanilla javascript";
    getVueButton.style.backgroundColor = "green";
}

let react = function () {
    
    buttonsLength = getButtons.length;
    for (let i = 0; i < buttonsLength; i++) {
        getButtons[i].style.backgroundColor = "rgba(255, 255, 255, 0.07";
    }

    let getReactButton = document.querySelector(".reactbut");

    GalleryBoxTextarea.style.display = "block";
    portWork.style.display = "none";
    huddleWork.style.display = "none";
    nimcWork.style.display = "none";
    testiWork.style.display = "none";
    clipWork.style.display = "none";

    let reactText = document.querySelector("#gallery_textarea h3");
    reactText.innerHTML = "I dont have any project using react js, i'm still studying vanilla javascript";

    getReactButton.style.backgroundColor = "green";
}


//to display all the work once the page loads 
window.onload = allStack;





