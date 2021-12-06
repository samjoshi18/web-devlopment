const loadText = document.querySelector('.Loading-text')
const bg = document.querySelector('.bg')

let load  = 0
let int = setInterval(blurring, 30)
 function blurring() {
    load++

    if (load > 99) {
        clearInterval(int)
    }

 loadText.innerText = `${load}%`
loadText.style.opacity = scale(load, 0, 100, 1, 0)
bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}

//https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers

const scale = (number, in_Min, in_Max, out_Min, out_Max) => {
    return (number - in_Min) * (out_Max - out_Min) / (in_Max - in_Min) + out_Min 
}