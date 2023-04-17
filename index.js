let thingsMade = 15
let totalThingsMade = 15
let thingMakers = 0
let makingThing = false
let frame = 0
let thingMakerMakers = 0
let thingMakerMakerMakers = 0
let timeIdled = 0
const tickTime = 1000

window.onload = () => {
    load()
}

function update() {
    frame++
    if (frame % 1000 == 0) {
        thingsMade += thingMakers
        totalThingsMade += thingMakers
        thingMakers += thingMakerMakers
        thingMakerMakers += thingMakerMakerMakers
    }
}

function draw() {
    document.getElementById('currentthings').innerHTML = 'things made: ' + thingsMade.toLocaleString('en-US')
    document.getElementById('AutoMakerCount').innerHTML = ' you have ' + thingMakers.toLocaleString('en-US')
    document.getElementById('AutoMakerMakerCount').innerHTML = ' you have ' + thingMakerMakers.toLocaleString('en-US')
    document.getElementById('AutoMakerMakerMakerCount').innerHTML = ' you have ' + thingMakerMakerMakers.toLocaleString('en-US')
    if (totalThingsMade >= 15 && document.getElementById('autoThingMakerDiv').style.display != 'block') {
        document.getElementById('autoThingMakerDiv').style.display = 'block'
    }
    if (totalThingsMade >= 1500 && document.getElementById('autoThingMakerMakerDiv').style.display != 'block') {
        document.getElementById('autoThingMakerMakerDiv').style.display = 'block'
    }
    if (totalThingsMade >= 15000000 && document.getElementById('autoThingMakerMakerMakerDiv').style.display != 'block') {
        document.getElementById('autoThingMakerMakerMakerDiv').style.display = 'block'
    }
    requestAnimationFrame(draw)
}

function makeThing() {
    if (!makingThing) {
        makingThing = true
        document.getElementById('thingsStatus').innerHTML = 'making thing...'
        setTimeout(() => {makingThing = false; thingsMade += 1; totalThingsMade += 1; document.getElementById('thingsStatus').innerHTML = '';}, 1000)
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
    if (thingsMade >= 15000000) {
    thingMakerMakerMakers += 1
    thingsMade -= 15000000
    }
}

setInterval(update, 1)
requestAnimationFrame(draw)

document.addEventListener("visibilitychange", function() {
    if (document.hidden) {
        timeIdled = Date.now()
    } else {
        if (Date.now() - timeIdled != 0) {
        for (let i=0; i<=Date.now()-timeIdled; i++) {
            if (i % 1000 == 0) {
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
    thingsMade = parseInt(localStorage.getItem('thingsMade'), 10)
    }
    if (localStorage.getItem('totalThingsMade')){
    totalThingsMade = parseInt(localStorage.getItem('totalThingsMade'), 10)
    }
    if (localStorage.getItem('thingMakers')) {
    thingMakers = parseInt(localStorage.getItem('thingMakers'))
    }
    if (localStorage.getItem('thingMakerMakers')) {
    thingMakerMakers = parseInt(localStorage.getItem('thingMakerMakers'), 10)
    }
    if (localStorage.getItem('thingMakerMakerMakers')) {
    thingMakerMakerMakers = parseInt(localStorage.getItem('thingMakerMakerMakers'), 10)
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
  });

  const confirmWipe = () => {
    const response = confirm("Are you sure you want to permanently wipe your save?");
    if (response) {
        localStorage.clear()
        alert('save wiped')
        location.reload()
    } else {
        alert('Save NOT wiped')
    }
}