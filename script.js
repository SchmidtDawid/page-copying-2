var mainNav = document.getElementById("main-nav");

window.onscroll = function () {
    if (window.pageYOffset > 100)
        mainNav.className = "navbar navbar-default navbar-fixed-top"
    else
        mainNav.className += " navbar-default-stick"
}
