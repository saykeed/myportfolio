
let navbarExpandStatus = false;

let displayNav = function () {
    //grab d togglable box
    let getHiddenNavbar = document.querySelector("#toggle_nav");

    //grab d togglable box element
    let getHiddenNavbarLinks = document.querySelectorAll("#toggle_nav ul li a");

    if (navbarExpandStatus === false) {
        getHiddenNavbar.style.opacity = "1";
        getHiddenNavbar.style.height = "calc(100vh - 70px)";

        let arraylength = getHiddenNavbarLinks.length;
        for (let i = 0; i < arraylength; i++) {
            
            getHiddenNavbarLinks[i].style.opacity = "1"; 
        }
        navbarExpandStatus = true;

    } else if (navbarExpandStatus === true) {
        
        getHiddenNavbar.style.height = "20px";

        let arraylength = getHiddenNavbarLinks.length;
        for (let i = 0; i < arraylength; i++) {
            
            getHiddenNavbarLinks[i].style.opacity = "0";            
        }
        getHiddenNavbar.style.opacity = "0";
        navbarExpandStatus = false;
    }
}
