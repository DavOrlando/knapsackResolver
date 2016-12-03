var chai = require('chai')
var assert = chai.assert
var Problema = require(__dirname + '/../Problema.js')
var Oggetto = require(__dirname + '/../Oggetto.js')

describe('ProblemaTest', function() {
    var oggetto1 = new Oggetto(1, 1, 1, 0);
    var oggetto2 = new Oggetto(1, 1, 1, 2);
    var oggetto3 = new Oggetto(1, 1, 1, -1);
    var knapsackZeroOne = new Problema([oggetto1], 10);
    var knapsackCapac = new Problema([oggetto2], 10);
    var knapsackInfinito = new Problema([oggetto3], 10);
    it("Creazione di un problema con un solo oggetto e con capacità 10",
        function() {
            assert.equal(10, knapsackZeroOne.capacità);
            assert.equal(oggetto1, knapsackZeroOne.oggetti[0]);
            //console.log(knapsackZeroOne);
        })

    it("Il metodo risolutivo per problemi con 0 copie è PD-KNAPSACK-0-1",
        function() {
            assert.equal("PD-KNAPSACK-0-1", knapsackZeroOne.metodoRisolutivo);
        })
    it("Il metodo risolutivo per problemi con 2 copie è PD-KNAPSACK-CAPAC",
        function() {
            assert.equal("PD-KNAPSACK-CAPAC", knapsackCapac.metodoRisolutivo);
        })

    it("Il metodo risolutivo per problemi con infinite copie è PD-KNAPSACK-INFINITO",
        function() {
            assert.equal("PD-KNAPSACK-INFINITO", knapsackInfinito.metodoRisolutivo);
        })
})
