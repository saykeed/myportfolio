
let navbarExpandStatus = false;

let displayNav = function () {
    let getHiddenNavbar = document.querySelector("#toggle_nav");
    let getHiddenNavbarLinks = document.querySelectorAll("#toggle_nav ul li a");

    if (navbarExpandStatus === false) {
        getHiddenNavbar.style.display = "block";

        let arraylength = getHiddenNavbarLinks.length;
        for (let i = 0; i < arraylength; i++) {
            getHiddenNavbarLinks[i].style.transition = "1s";
            getHiddenNavbarLinks[i].style.opacity = "1"; 
        }
        navbarExpandStatus = true;

    } else if (navbarExpandStatus === true) {
        let arraylength = getHiddenNavbarLinks.length;
        for (let i = 0; i < arraylength; i++) {
            
            getHiddenNavbarLinks[i].style.opacity = "0";            
        }
        
        getHiddenNavbar.style.display = "none";
        navbarExpandStatus = false;
    }
}
