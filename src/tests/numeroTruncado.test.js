const numeroTruncado = require('../files/numeroTruncado');

test('Test', () => {
    expect(numeroTruncado(13.74)).toBe(13);
});