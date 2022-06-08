
const TYPE = [
    "aparatamento",
    "Escritorio",
    "vivenda"
]

const ROOM = [
    "T0",
    "T1",
    "T2",
    "T3",
    "T4", 
    "T5"
]

const ENERGY = [
    "A",
    "B",
    "C",
    "D",
    "E", 
    "F"
]

function userPreferences(data){
    let array = []

    data.map((house) => {
        array.push(house.estate[0])
    })

    let priceMin = Math.min(...array.map((elemento) => elemento.price))
    let priceMax = Math.max(...array.map((elemento) => elemento.price))

    let sizeMin = Math.min(...array.map((elemento) => elemento.size))
    let sizeMax = Math.max(...array.map((elemento) => elemento.size))
    ///
    let typeMin = 1
    let typeMax = 2

    let roomMin = Math.max(...array.map((elemento) => elemento.price))
    let roomMax = Math.max(...array.map((elemento) => elemento.price))

    let wcMin = Math.max(...array.map((elemento) => elemento.wc))
    let wcMax = Math.max(...array.map((elemento) => elemento.wc))

    let energyMin = Math.max(...array.map((elemento) => elemento.price))
    let energyMax = Math.max(...array.map((elemento) => elemento.price))

    const perfect = {
        priceMin: priceMin,
        priceMax: priceMax,
        sizeMin: sizeMin,
        sizeMax: sizeMax,
        typeMin: typeMin,
        typeMax: typeMax,
        roomMin: 1,
        roomMax: 10000,
        wcMin: wcMin,
        wcMax: wcMax,
        energyMin: 1,
        energyMax: 10000,
    }

    return perfect
}

module.exports = {
    TYPE,
    ROOM,
    ENERGY,
    userPreferences
}