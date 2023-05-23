const openNavbar = document.querySelector(".open");
const Navbar = document.querySelector(".ul");
const closeNavs = document.querySelector(".close")
function openNav(){
    Navbar.style.position = "absolute"
    Navbar.style.left = "0%";
    Navbar.style.transition = "1s"
}

openNavbar.onclick = openNav;

function closeNav(){
    Navbar.style.position = "absolute";
    Navbar.style.left="-60%";
    Navbar.style.transition = "1s"
}

closeNavs.onclick = closeNav
