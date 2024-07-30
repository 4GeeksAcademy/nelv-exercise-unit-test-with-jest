// Declaramos una función con el nombre exacto "fromEuroToDollar"
const fromEuroToDollar = function (valueInEuro) {
    // Convertimos el valor a dólares usando el objeto oneEuroIs
    let valueInDollar = valueInEuro * oneEuroIs.USD;
    // Retornamos el valor en dólares
    return valueInDollar;
}

const fromDollarToYen = function (valueInDollar) {
    // Convertimos el valor a euros primero
    let valueInEuro = valueInDollar / oneEuroIs.USD;
    // Luego convertimos de euros a yenes
    let valueInYen = valueInEuro * oneEuroIs.JPY;
    // Retornamos el valor en yenes
    return valueInYen;
}

const fromYenToPound = function (valueInYen) {
    // Convertimos el valor a euros primero
    let valueInEuro = valueInYen / oneEuroIs.JPY;
    // Luego convertimos de euros a libras
    let valueInPound = valueInEuro * oneEuroIs.GBP;
    // Retornamos el valor en libras
    return valueInPound;
}

// one euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

// Esta es mi función que suma dos números
const sum = (a, b) => {
    return a + b
}

// Solo un registro en consola para nosotros
console.log(sum(7, 3))

// Exporta la función para usarla en otros archivos 
// (similar a la palabra clave "export" cuando se usa webpack)
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };