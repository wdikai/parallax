(function () {
    var opacityStep = 1 / 400;
    var header = document.querySelector('.header');
    var parallax = document.querySelector('.parallax');

    parallax.addEventListener('scroll', function (e) {
        const scroll = parallax.scrollTop;

        header.style.opacity = 1 - scroll * opacityStep;
    });
})();