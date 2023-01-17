// This is just allowing us to use the dataset from the other file. You can ignore this line.
const UFO_SIGHTINGS = require("./nyc-ufo-sightings.json");


function calculateMinutes(seconds) {
    let x = parseInt(seconds)
    return minutes = Math.floor( x / 60)
}

function getRandomSighting(array) {
    return array[Math.floor(Math.random() * array.length)]
}

function getRandomSightings(number) {
    let x = []
    for (i = 0; i < number; i++) {
        let y = getRandomSighting(UFO_SIGHTINGS)
        x.push(y)
    }
    return x

}



console.log(getRandomSightings(2))