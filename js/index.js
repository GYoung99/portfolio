const up = document.querySelector(".up");
up.onclick = () => {
    window.scrollTo(0,0);
}

window.onscroll = () => {
    if(window.scrollY >= 500) {
        up.style.display="block";
    } else {
        up.style.display="none";
    }
}

const navbar=document.querySelector(".navbar");
window.onscroll =() => {
    if(window.scrollY >= 300) {
        navbar.classList.add("navbar-bg");
    } else {
        navbar.classList.remove("navbar-bg");
    }
}