const assert = require('chai').assert;

// Función a probar
function suma(a, b) {
  return a + b;
}

describe('Función de Suma', function() {
  it('debería sumar dos números correctamente', function() {
    assert.equal(suma(2, 3), 5);
  });
});
