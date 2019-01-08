window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("siden vises");
    document.querySelector("#start").classList.remove("hide");
    document.querySelector("#myTopnav").classList.add("hide");
    document.querySelector("#title").classList.add("hide");
    document.querySelector("#play").addEventListener("click", hideStart);

}

function hideStart() {
    console.log("hide start");
    document.querySelector("#start").classList.remove("hide");
    document.querySelector("#start").classList.add("fade_out");
    document.querySelector("#start").addEventListener("animationend", showProjects);
}

function showProjects() {
    console.log("show projects");
    document.querySelector("#start").classList.add("hide");
    document.querySelector("#project_mainpage").classList.remove("hide");
    document.querySelector("#myTopnav").classList.remove("hide");
    document.querySelector("#title").classList.remove("hide");
}
