// Make tiles active on click
const tiles = document.querySelectorAll('.tile')

Array.from(tiles).forEach(tile => {
    tile.addEventListener('click', function(e) {
        e.preventDefault()

        this.classList.toggle('active')
    }, false)
})

// Scrolling
const screens = document.querySelector('.screens')
const screenStyle = document.querySelector('.screen--style')
const screenLocation = document.querySelector('.screen--location')
const screenArtists = document.querySelector('.screen--artists')
const triggerLocation = document.getElementById('goto-location')
const triggerArtists = document.getElementById('goto-artists')

triggerLocation.addEventListener('click', function (e) {
    e.preventDefault()

    screenLocation.style.transform = 'translate3d(-100%,0,0)'
    screenStyle.style.opacity = 0
}, false)

triggerArtists.addEventListener('click', function (e) {
    e.preventDefault()

    screenArtists.style.transform = 'translate3d(-200%,0,0)'
    screenLocation.style.opacity = 0
}, false)
