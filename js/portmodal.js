
let modalDiv = document.querySelector("#modal_section");
let topTitle = document.querySelector("#modal_title");
let innerHeading = document.querySelector("#modal_inner h3");
let innerImg = document.querySelector("#modal_Img");
let techPara = document.querySelector("p#tech");
let projectLink = document.querySelector("a#link");
let projectDesc = document.querySelector("p#description");


let modal_info

function ModalType(techUsed, liveSite, description, url) {
    this.techUsed = techUsed;
    this.liveSite = liveSite;
    this.description = description;
    this.url = url;
}



let callModal = function (modalName) {
    switch (modalName) {
        case "Portfolio":
            modal_info = new ModalType("css, bootstap, javascript", "visit portfolio", "to know more about me");
            break;
        case "Huddle-landpage":
            modal_info = new ModalType("css, bootstap", "visit huddle-landpage", "its a challenge from frontendmentor.io");
            break;
        case "Nimc":
            modal_info = new ModalType("css, bootstap", "visit nimc landpage", "my first responsive webpage");
            break;
        case "Testimonial-grids":
            modal_info = new ModalType("css grids", "visit testimonial-grids", "its a challenge from frontendmentor.io");
            break;
        case "Clipboard":
            modal_info = new ModalType("css, bootstap", "visit clipboard", "its a challenge from frontendmentor.io");
            break;
    }

    
    modalDiv.style.display = "block";
    topTitle.innerHTML = modalName;
    innerHeading.innerHTML = modalName + " Preview";
    innerImg.innerHTML = '<img src="images/' + modalName + '.jpg" class="modal_image">';
    techPara.innerHTML = modal_info.techUsed;
    projectLink.innerHTML = modal_info.liveSite;
    projectLink.setAttribute("href", "#");
    projectDesc.innerHTML = modal_info.description;

}

let closeModal = function () {
    modalDiv.style.display = "none";
} 




/*



*/