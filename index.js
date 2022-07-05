let convertBtn = document.getElementById("convert-btn")
let lengthEl = document.getElementById("length")
let volumeEl = document.getElementById("volume")
let massEl = document.getElementById("mass")

convertBtn.addEventListener("click", function(){
    let num = document.getElementById("input-box").value
    length(num)
    volume(num)
    mass(num)
})

function length(x){
    let feet = (x * 3.281).toFixed(3)
    let metres = (x / 3.281).toFixed(3)
    lengthEl.textContent = renderResult(x, "metres", "feet", feet, metres)
}

function volume(x){
    let litres = (x / 0.264).toFixed(3)
    let gallons = (x * 0.264).toFixed(3)
    volumeEl.textContent = renderResult(x, "litres", "gallons", gallons, litres)
}

function mass(x){
    let kg = (x / 2.204).toFixed(3)
    let pounds = (x * 2.204).toFixed(3)
    massEl.textContent = renderResult(x, "kilos", "pounds", pounds, kg)
}

function renderResult(num, unit1, unit2, x, y){
    let baseString = `
        ${num} ${unit1} = ${x} ${unit2} | ${num} ${unit2} = ${y} ${unit1}
    `
    return baseString
}