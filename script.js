var mainNav = document.getElementById("main-nav");
var serviceIcon = document.querySelectorAll(".fa");

window.onscroll = function () {
    if (window.pageYOffset > 100)
        mainNav.classList.remove('navbar-default-stick');
    else
        mainNav.classList.add('navbar-default-stick');

    if (window.pageYOffset > 800)

        var i = 0;
        var howManyTimes = serviceIcon.length;

    function f() {
        serviceIcon[i].classList.add('zoom-in');
        i++;
        if (i < howManyTimes) {
            setTimeout(f, 150);
        }
    }
    f();
}
