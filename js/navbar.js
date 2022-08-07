const navBar = document.getElementById("nav");
const menu = document.getElementById("menu");
const servicesMenu = document.getElementById("servicesMenu");
const sidepanel = document.getElementById("sidepanel");
const sidepanelarrow = document.getElementById("sidepanel-arrow");
var sidepanelStatus = 0;
var navVar = 0;
var servicesVAr = 0;

function toggleMenu(){
    if(navVar%2 == 0){
        navBar.style.height = "45vh";
        menu.style.display = "flex";
        navVar = 1;
    }
    else{
        navBar.style.height = "10vh";
        navVar = 0;
        menu.style.display = "none";
        servicesMenu.style.display = "none";
        servicesVAr = 0;
    }
}

function openServices(){
    servicesMenu.style.display = "flex";
    servicesVAr = 1;
}

function closeServices(){
    servicesMenu.style.display = "none";
    servicesVAr = 0;
}

document.getElementById("hero").addEventListener("click", () =>{
    if(screen.width < 768){
        navBar.style.height = "10vh";
        navVar = 0;
        menu.style.display = "none";
    }
    servicesMenu.style.display = "none";
    servicesVAr = 0;
})

function toggleSidepanel(){
    if(sidepanelStatus == 0){
        sidepanel.style.left = "0";
        sidepanelStatus = 1;
        sidepanelarrow.style.transform = "rotate(180deg)"
    }
    else{
        sidepanel.style.left = "-80vw"
        sidepanelStatus = 0;
        sidepanelarrow.style.transform = "rotate(0)"
    }
}