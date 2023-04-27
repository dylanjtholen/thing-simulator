let thingsMade = BigInt(15)
let totalThingsMade = BigInt(15)
let thingMakers = BigInt(0)
let makingThing = false
let frame = 0
let thingMakerMakers = BigInt(0)
let thingMakerMakerMakers = BigInt(0)
let timeIdled = 0
let prestigeLevel = BigInt(0)
let toPrestigeLevel = BigInt(0)
const tickTime = 1000

//big numbers are hard
const trillion = 1000000000000n
const quadrillion = 1000000000000000n

let untilNextLevel = trillion

window.onload = () => {
    setInterval(update, 1)
    requestAnimationFrame(draw)
    load()
}

function update() {
    frame++
    if (frame % tickTime == 0) {
        thingsMade += thingMakers
        totalThingsMade += thingMakers
        thingMakers += thingMakerMakers
        thingMakerMakers += thingMakerMakerMakers
    }
    while (thingsMade >= (toPrestigeLevel + prestigeLevel + 1n) ** 3n * trillion) {
        toPrestigeLevel += 1n
    }
}

function draw() {
    document.getElementById('currentthings').innerHTML = 'things made: ' + thingsMade.toLocaleString('en-US')
    document.getElementById('AutoMakerCount').innerHTML = ' you have ' + thingMakers.toLocaleString('en-US')
    document.getElementById('AutoMakerMakerCount').innerHTML = ' you have ' + thingMakerMakers.toLocaleString('en-US')
    document.getElementById('AutoMakerMakerMakerCount').innerHTML = ' you have ' + thingMakerMakerMakers.toLocaleString('en-US')
    if (totalThingsMade >= 15n && document.getElementById('autoThingMakerDiv').style.display != 'block') {
        document.getElementById('autoThingMakerDiv').style.display = 'block'
    }
    if (totalThingsMade >= 1500n && document.getElementById('autoThingMakerMakerDiv').style.display != 'block') {
        document.getElementById('autoThingMakerMakerDiv').style.display = 'block'
    }
    if (totalThingsMade >= 15000000n && document.getElementById('autoThingMakerMakerMakerDiv').style.display != 'block') {
        document.getElementById('autoThingMakerMakerMakerDiv').style.display = 'block'
    }
    document.getElementById('prestigeProgressBar').value = Number(((totalThingsMade - (toPrestigeLevel + prestigeLevel) ** 3n * trillion) * 100n) / (1n * ((((toPrestigeLevel + prestigeLevel + 1n) ** 3n * trillion) - (toPrestigeLevel + prestigeLevel) ** 3n * trillion))))
    //alert(Number(((totalThingsMade - (toPrestigeLevel + prestigeLevel) ** 3n * trillion) * 100n) / ((totalThingsMade + 1n - (toPrestigeLevel + prestigeLevel) ** 3n * trillion) * 10n)))
    if (toPrestigeLevel != 0n) {
        document.getElementById('toPrestigeLevelSpan').innerHTML = '+' + toPrestigeLevel
    }
    requestAnimationFrame(draw)
}

function makeThing() {
    if (!makingThing) {
        makingThing = true
        document.getElementById('thingsStatus').innerHTML = 'making thing...'
        setTimeout(() => {makingThing = false; thingsMade += BigInt(1); totalThingsMade += BigInt(1); document.getElementById('thingsStatus').innerHTML = '';}, 1000)
    }
}

function buyAutoThingMaker() {
    if (thingsMade >= BigInt(15)) {
    thingMakers += BigInt(1)
    thingsMade -= BigInt(15)
    }
}

function buyAutoThingMakerMaker() {
    if (thingsMade >= BigInt(1500)) {
    thingMakerMakers += BigInt(1)
    thingsMade -= BigInt(1500)
    }
}

function buyAutoThingMakerMakerMaker() {
    if (thingsMade >= BigInt(15000000)) {
    thingMakerMakerMakers += BigInt(1)
    thingsMade -= BigInt(15000000)
    }
}

function ascend() {
    
}

document.addEventListener("visibilitychange", function() {
    if (document.hidden) {
        timeIdled = Date.now()
    } else {
        let now = Date.now()
        if (now - timeIdled != 0) {
        for (let i=1; i<=now-timeIdled; i++) {
            if (i % tickTime == 0) {
                thingsMade += thingMakers
                totalThingsMade += thingMakers
                thingMakers += thingMakerMakers
                thingMakerMakers += thingMakerMakerMakers
            }
        }
    }
    }
  });

  setInterval(() => {
    save()
  }, 60000);

  function save() {
    localStorage.setItem('thingsMade', thingsMade)
    localStorage.setItem('totalThingsMade', totalThingsMade)
    localStorage.setItem('thingMakers', thingMakers)
    localStorage.setItem('thingMakerMakers', thingMakerMakers)
    localStorage.setItem('thingMakerMakerMakers', thingMakerMakerMakers)
  }

  function load() {
    if (localStorage.getItem('thingsMade')) {
    thingsMade = BigInt(parseInt(localStorage.getItem('thingsMade'), 10))
    }
    if (localStorage.getItem('totalThingsMade')){
    totalThingsMade = BigInt(parseInt(localStorage.getItem('totalThingsMade'), 10))
    }
    if (localStorage.getItem('thingMakers')) {
    thingMakers = BigInt(parseInt(localStorage.getItem('thingMakers')))
    }
    if (localStorage.getItem('thingMakerMakers')) {
    thingMakerMakers = BigInt(parseInt(localStorage.getItem('thingMakerMakers'), 10))
    }
    if (localStorage.getItem('thingMakerMakerMakers')) {
    thingMakerMakerMakers = BigInt(parseInt(localStorage.getItem('thingMakerMakerMakers'), 10))
    }
  }

  document.addEventListener('keydown', e => {
    if (e.ctrlKey && e.key === 's') {
      // Prevent the Save dialog to open
      e.preventDefault();
      save()
      alert('game saved')
    }
    if (e.ctrlKey && e.key === 'l') {
        e.preventDefault();
        confirmWipe()
      }
      
      if (e.ctrlKey && e.key === 'i') {
        e.preventDefault();
        document.head.innerHTML += '<script src="https://kylemit.github.io/firebug-console/firebug-lite-debug.js"></script>'
      }

  });

  const confirmWipe = () => {
    const response = confirm("Are you sure you want to permanently wipe your save?");
    if (response) {
        localStorage.clear()
        alert('save wiped')
        thingsMade = BigInt(15)
        totalThingsMade = BigInt(15)
        thingMakers = BigInt(0)
        makingThing = false
        frame = 0
        thingMakerMakers = BigInt(0)
        thingMakerMakerMakers = BigInt(0)
        timeIdled = 0
        prestigeLevel = BigInt(0)
        toPrestigeLevel = BigInt(0)
        document.getElementById('toPrestigeLevelSpan').innerHTML = ''
        document.getElementById('autoThingMakerDiv').style.display = 'none'
        document.getElementById('autoThingMakerMakerDiv').style.display = 'none'
        document.getElementById('autoThingMakerMakerMakerDiv').style.display = 'none'
    } else {
        alert('Save NOT wiped')
    }
}
