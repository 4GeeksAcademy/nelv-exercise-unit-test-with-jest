// Importar la función sum del archivo app.js
const { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

// Comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    // Dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // Esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", function() {
    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(dollars).toBe(expected); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
});

test("One dollar should be 146.26 yen", function() {
    // Uso la función como debe ser usada
    const yen = fromDollarToYen(3.5);

    // Primero convertimos dólares a euros, luego euros a yenes
    const valueInEuro = 3.5 / 1.07; // Convertimos 3.5 dólares a euros
    const expected = valueInEuro * 156.5; // Convertimos de euros a yenes

    // Hago mi comparación (la prueba)
    expect(yen).toBe(expected); // 3.5 dólares deberían convertirse correctamente a yenes
});

test("One yen should be 0.00557 pounds", function() {
    // Uso la función como debe ser usada
    const pounds = fromYenToPound(3.5);

    // Primero convertimos yenes a euros, luego euros a libras
    const valueInEuro = 3.5 / 156.5; // Convertimos 3.5 yenes a euros
    const expected = valueInEuro * 0.87; // Convertimos de euros a libras

    // Hago mi comparación (la prueba)
    expect(pounds).toBeCloseTo(expected, 5); // 3.5 yenes deberían convertirse correctamente a libras, usando toBeCloseTo para mayor precisión
});
