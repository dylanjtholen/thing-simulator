let thingsMade = 15
let totalThingsMade = 15
let thingMakers = 0
let makingThing = false
let frame = 0
let thingMakerMakers = 0
let thingMakerMakerMakers = 0

window.onload = () => {
    document.getElementById('currentthings').innerHTML = 'things made: ' + thingsMade
}

function update() {
    frame++
    document.getElementById('currentthings').innerHTML = 'things made: ' + thingsMade
    document.getElementById('AutoMakerCount').innerHTML = ' you have ' + thingMakers
    document.getElementById('AutoMakerMakerCount').innerHTML = ' you have ' + thingMakerMakers
    document.getElementById('AutoMakerMakerMakerCount').innerHTML = ' you have ' + thingMakerMakerMakers
    if (totalThingsMade >= 15 && document.getElementById('autoThingMakerDiv').style.display != 'block') {
        document.getElementById('autoThingMakerDiv').style.display = 'block'
    }
    if (totalThingsMade >= 1500 && document.getElementById('autoThingMakerMakerDiv').style.display != 'block') {
        document.getElementById('autoThingMakerMakerDiv').style.display = 'block'
    }
    if (totalThingsMade >= 15000000000000 && document.getElementById('autoThingMakerMakerMakerDiv').style.display != 'block') {
        document.getElementById('autoThingMakerMakerMakerDiv').style.display = 'block'
    }
    if (frame % 1000 == 0) {
        thingsMade += thingMakers
        totalThingsMade += thingMakers
        thingMakers += thingMakerMakers
        thingMakerMakers += thingMakerMakerMakers
    }
}

function makeThing() {
    if (!makingThing) {
        makingThing = true
        document.getElementById('thingsStatus').innerHTML = 'making thing...'
        setTimeout(() => {makingThing = false; thingsMade += 1; totalThingsMade += 1; update(); document.getElementById('thingsStatus').innerHTML = '';}, 1000)
    }
}

function buyAutoThingMaker() {
    if (thingsMade >= 15) {
    thingMakers += 1
    thingsMade -= 15
    }
}

function buyAutoThingMakerMaker() {
    if (thingsMade >= 1500) {
    thingMakerMakers += 1
    thingsMade -= 1500
    }
}

function buyAutoThingMakerMakerMaker() {
    if (thingsMade >= 15000000000000) {
    thingMakerMakerMakers += 1
    thingsMade -= 15000000000000
    }
}

setInterval(update, 1)