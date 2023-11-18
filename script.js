const eurInput = document.querySelector('.euro')
const rublInput = document.querySelector('.rubl')
const hrnInput = document.querySelector('.hrivnya')
const usdInput = document.querySelector('.dollar')
const price12 = document.querySelector('.price12')
const price6 = document.querySelector('.price6')
const price3 = document.querySelector('.price3')
const btn1 = document.querySelector('.btn1')
const btn2 = document.querySelector('.btn2')
const btn3 = document.querySelector('.btn3')
const rem1 = document.querySelector('span1')
const rem2 = document.querySelector('span2')
const rem3 = document.querySelector('span3')
const slider1 = document.querySelector('#as1')
const slider2 = document.querySelector('#as2')
const slider3 = document.querySelector('#as3')
const progress = document.querySelector('.progress')
const progressbar = document.querySelector('.progress-bar')

slider1.value = slider1.max
slider2.value = slider2.max
slider3.value = slider3.max
progressbar.style.width = 100%
eurInput.addEventListener('mouseenter', () => {
    price12.textContent = '12€'
    price6.textContent = '7€'
    price3.textContent = '4.5€'
})
rublInput.addEventListener('mouseenter', () => {
    price12.textContent = '1200₽'
    price6.textContent = '700₽'
    price3.textContent = '400₽'
})
hrnInput.addEventListener('mouseenter', () => {
    price12.textContent = '480₴'
    price6.textContent = '280₴'
    price3.textContent = '160₴'
})
usdInput.addEventListener('mouseenter', () => {
    price12.textContent = '13$'
    price6.textContent = '8$'
    price3.textContent = '5$'
})

btn1.addEventListener('mousedown', () => {
    if (slider1.value >= 1) {
        slider1.value -= 1
    }
})
btn2.addEventListener('mousedown', () => {
    if (slider2.value >= 1) {
        slider2.value -= 1
    }
})
btn3.addEventListener('mousedown', () => {
    if (slider3.value >= 1) {
        slider3.value -= 1
    }
})
btn3.addEventListener('mousedown', () => {
    progress.width -= 5%
{}})