
 let menu = document.getElementById("menu");
 let y = document.getElementById("line");


function menuToggle() {
    if (menu.style.top === "74px") {

        console.log("hii");
        menu.style.top = "-100vh";
        y.classList.remove("close");
    } else {
        menu.style.top = "74px";
        y.classList.add("close");
    }
}