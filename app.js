let body = document.querySelector('body')
let boll = document.querySelector('#boll')
let jon = document.querySelector('#jon')
let reset = document.querySelector('#reset')
let imgRestart = document.querySelector('#img-restart')
let minMax = document.querySelector('#minMax')
let btnHelp = document.querySelector('#btn-help')
let help = document.querySelector('#help')

function helpp() {
    btnHelp.style.display = 'none'
    help.style.display = 'block'
    boll.style.marginRight='0'
    boll.style.marginTop='50px'
}

function exit(){
    btnHelp.style.display = 'block'
    help.style.display = 'none'
}

body.addEventListener('keydown', function (event) {
    if (event.code === 'KeyD' || event.key === 'd' || event.key === 'ArrowRight') {
        boll.style.marginRight = '0px'
    }
});

body.addEventListener('keydown', function (event) {
    if (event.code === 'KeyA' || event.key === 'a' || event.key === 'ArrowLeft') {
        boll.style.marginRight = '1400px'
    }
});

body.addEventListener('keydown', function (event) {
    if (event.code === 'KeyS' || event.key === 's' || event.key === 'ArrowDown') {
        boll.style.marginTop = '550px';
    }
});

body.addEventListener('keydown', function (event) {
    if (event.code === 'KeyW' || event.key === 'w' || event.key === 'ArrowUp') {
        boll.style.marginTop = '50px'
    }
});

jon.innerHTML = 5

function bezanesh() {
    boll.style.backgroundColor = 'red'
    let x = jon.innerHTML -= 1
    if (x == 0) {
        reset.style.display = 'flex'
    }
}

function abiSho() {
    boll.style.backgroundColor = '#39acff'
}

imgRestart.addEventListener('click', iconRestart)
function iconRestart() {
    reset.style.display = 'none'
    boll.style.backgroundColor = '#39acff'
    jon.innerHTML = 5
    minMax.value = 3
}

minMax.addEventListener('click', function () {
    let x = minMax.value
    if (x == 1) {
        boll.style.transitionDuration = '8s'
    }
    if (x == 2) {
        boll.style.transitionDuration = '6s'
    }
    if (x == 3) {
        boll.style.transitionDuration = '4s'
    }
    if (x == 4) {
        boll.style.transitionDuration = '2s'
    }
    if (x == 5) {
        boll.style.transitionDuration = '1s'
    }
})