var mainNav = document.getElementById("main-nav");
var serviceIcon = document.querySelectorAll(".fa");
var element1 = document.getElementById("service-icon-1");
var element2 = document.getElementById("download-button");
var element3 = document.querySelectorAll(".anim-icon");
var elemRect1 = element1.getBoundingClientRect();
var elemRect2 = element2.getBoundingClientRect();
var elemRect3 = element3[0].getBoundingClientRect();

window.onscroll = function () {
    if (window.pageYOffset > 100)
        mainNav.classList.remove('navbar-default-stick');
    else
        mainNav.classList.add('navbar-default-stick');

    elemRect1 = element1.getBoundingClientRect();
    if (elemRect1.top - window.innerHeight < 0)

        var i = 0;
        var howManyTimes = 4;

    function f() {
        serviceIcon[i].classList.add('zoom-in');
        i++;
        if (i < howManyTimes) {
            setTimeout(f, 150);
        }
    }
    f();

    elemRect2 = element2.getBoundingClientRect();
    if (elemRect2.top - window.innerHeight < 0){
        element2.classList.add('zoom-in');
    }

    elemRect3 = element3[0].getBoundingClientRect();
    if (elemRect3.top - window.innerHeight < 0){
        element3[0].classList.add('zoom-in');
        setTimeout(function(){
            element3[1].classList.add('zoom-in');
        }, 150)
    }
}

