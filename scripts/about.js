// navbar dropdown menu
const toggleBtn = document.getElementById('toggle-btn');
const menu = document.getElementById('dropdown-menu');

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
});

// hobby1
const pin01 = document.getElementById("pin1");
const x01 = document.getElementById("x1");
const map01 = document.getElementById("map1");
const hobby01 = document.getElementById("hobby1");
const currentSrc = map01.src;

pin01.addEventListener('click', () => {
    if (mediaQuery.matches) {
        map01.src = hobby01.src;
        pin01.classList.toggle('active');
        pin02.classList.toggle('active');
        pin03.classList.toggle('active');
        x01.classList.toggle('active');
    } else {
        map01.src = hobby01.src;
        pin01.classList.toggle('active');
        x01.classList.toggle('active');
    }
})

x01.addEventListener('click', () => {
    if (mediaQuery.matches) {
        map01.src = currentSrc;
        pin01.classList.toggle('active');
        pin02.classList.toggle('active');
        pin03.classList.toggle('active');
        x01.classList.toggle('active');
    } else {
        map01.src = currentSrc02;
        pin01.classList.toggle('active');
        x01.classList.toggle('active');
    }
})

// hobby2
const pin02 = document.getElementById("pin2");
const x02 = document.getElementById("x2");
const map02 = document.getElementById("map2");
const hobby02 = document.getElementById("hobby2");
const currentSrc02 = map02.src;
const mediaQuery = window.matchMedia("(min-width:800px)");

pin02.addEventListener('click', () => {
    if (mediaQuery.matches) {
        map01.src = hobby02.src;
        pin01.classList.toggle('active');
        pin02.classList.toggle('active');
        pin03.classList.toggle('active');
        x02.classList.toggle('active');
    } else {
        map02.src = hobby02.src;
        pin02.classList.toggle('active');
        x02.classList.toggle('active');
    }

})

x02.addEventListener('click', () => {
    if (mediaQuery.matches) {
        map01.src = currentSrc;
        pin01.classList.toggle('active');
        pin02.classList.toggle('active');
        pin03.classList.toggle('active');
        x02.classList.toggle('active');
    } else {
        map02.src = currentSrc02;
        pin02.classList.toggle('active');
        x02.classList.toggle('active');
    }
})


// hobby3
const pin03 = document.getElementById("pin3");
const x03 = document.getElementById("x3");
const map03 = document.getElementById("map3");
const hobby03 = document.getElementById("hobby3");
const currentSrc03 = map03.src;

pin03.addEventListener('click', () => {
    if (mediaQuery.matches) {
        map01.src = hobby03.src;
        pin01.classList.toggle('active');
        pin02.classList.toggle('active');
        pin03.classList.toggle('active');
        x03.classList.toggle('active');
    } else {
        map03.src = hobby03.src;
        pin03.classList.toggle('active');
        x03.classList.toggle('active');
    }
})

x03.addEventListener('click', () => {
    if (mediaQuery.matches) {
        map01.src = currentSrc;
        pin01.classList.toggle('active');
        pin02.classList.toggle('active');
        pin03.classList.toggle('active');
        x03.classList.toggle('active');
    } else {
        map02.src = currentSrc02;
        pin02.classList.toggle('active');
        x02.classList.toggle('active');
    }
})




// pins ticking
const pinTick = anime({
    targets: '.pin1, .pin2, .pin3',
    translateY: 10,
    direction: 'alternate',
    loop: true,
    easing: 'easeInOutQuad',
    autoplay: false
});

function loop(t) {
    pinTick.tick(t);
    customRAF = requestAnimationFrame(loop);
}
requestAnimationFrame(loop);
