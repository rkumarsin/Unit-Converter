/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const unit = document.getElementById("unit")
const convertBtn = document.getElementById("convert-btn")
const lengthConv = document.getElementById("length-conv")
const massConv = document.getElementById("mass-conv")
const volumeConv = document.getElementById("volume-conv")
const darkMode = document.getElementById("dark-mode-btn")
const result = document.getElementById("results")
const app = document.getElementById("app")
console.log(unit);
convertBtn.addEventListener('click', function(){
    let lengthMeter = unit.value * 3.281
    let lengthFeet = unit.value * 0.3048
    lengthConv.textContent = `${unit.value} meters = ${lengthMeter.toFixed(3)} feet |
                             ${unit.value} feet = ${lengthFeet.toFixed(3)} meters`
    
    let liter = unit.value * 0.264
    let gallon = unit.value * 4.54609188
    volumeConv.textContent = `${unit.value} liter = ${liter.toFixed(3)} gallon |
                            ${unit.value} gallon = ${gallon.toFixed(3)} liter`
    let kilo = unit.value * 2.204
    let pounds = unit.value * 0.45359237                                            
    massConv.textContent = `${unit.value} Kilograms = ${kilo.toFixed(3)} Punds |
                             ${unit.value} Punds = ${pounds.toFixed(3)} Kilograms`
})
darkMode.addEventListener('click', function() {
        result.classList.toggle("dark-mode")
        app.classList.toggle("dark-mode")
})