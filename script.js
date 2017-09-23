

// Make tiles active on click
const tiles = document.querySelectorAll('.tile')

Array.from(tiles).forEach(tile => {
    tile.addEventListener('click', function (e) {
        e.preventDefault()

        this.classList.toggle('active')
    }, false)
})