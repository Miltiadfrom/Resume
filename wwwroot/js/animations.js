(function () {
    'use strict';

    var orbs = [];

    function refreshOrbs() {
        orbs = Array.prototype.slice.call(document.querySelectorAll('.gradient-orb'));
        return orbs.length;
    }

    // Blazor рендерит компоненты асинхронно — ждём появления шаров
    var timer = setInterval(function () {
        if (refreshOrbs()) {
            clearInterval(timer);
        }
    }, 300);

    window.addEventListener('mousemove', function (e) {
        if (!orbs.length && !refreshOrbs()) return;

        var cx = e.clientX - window.innerWidth / 2;
        var cy = e.clientY - window.innerHeight / 2;

        if (orbs[0]) orbs[0].style.transform = 'translate(' + (cx * 0.05) + 'px, ' + (cy * 0.05) + 'px)';
        if (orbs[1]) orbs[1].style.transform = 'translate(' + (cx * -0.08) + 'px, ' + (cy * -0.08) + 'px)';
        if (orbs[2]) orbs[2].style.transform = 'translate(' + (cx * 0.12) + 'px, ' + (cy * 0.12) + 'px)';
    });
})();