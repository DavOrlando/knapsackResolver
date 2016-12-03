var chai = require('chai')
var assert = chai.assert
var Oggetto = require(__dirname + '/../oggetto.js')

describe('oggettoTest', function() {
    var oggettoZero = new Oggetto();
    it("La costruzione dell'oggetto zero crea un oggetto con indice, peso e profitto a zero",
        function() {
            assert.equal(undefined, oggettoZero.peso);
            assert.equal(undefined, oggettoZero.indice);
            assert.equal(undefined, oggettoZero.profitto);
        })

    it("La costruzione dell'oggetto uno crea un oggetto con indice, peso e profitto a uno",
        function() {
            var oggettoUno = new Oggetto(1,1,1,1);
            assert.equal(1, oggettoUno.peso);
            assert.equal(1, oggettoUno.indice);
            assert.equal(1, oggettoUno.profitto);
            assert.equal(1, oggettoUno.copie);
            //console.log(oggettoUno);
        })
})
