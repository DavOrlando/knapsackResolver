var chai = require('chai')
var assert = chai.assert
var programmazioneDinamica = require(__dirname + '/../programmazioneDinamica.js')
var Problema = require(__dirname + '/../Problema.js')
var Oggetto = require(__dirname + '/../Oggetto.js')

describe('programmazioneDinamicaTest', function() {

    var problemaVuoto = new Problema([], 0);

    var oggetto1 = new Oggetto(1, 1, 1, 0);
    var oggetto2 = new Oggetto(1, 1, 1, 0);
    var knapsackZeroOne = new Problema([oggetto1, oggetto2], 3);


    it("Creazione tabella problema vuoto",
        function() {
            var tabella = programmazioneDinamica.creaTabella(problemaVuoto);
            assert.equal(1, tabella.length);
            assert.equal(1, tabella[0].length);
        })

    it("Creazione tabella problema KnapsackPD con capacità 3 e 2 oggetti",
        function() {
            var tabella = programmazioneDinamica.creaTabella(knapsackZeroOne);
            assert.equal(3, tabella.length);
            assert.equal(4, tabella[0].length);
        })

    it("Fase iniziale metodo risolutivo tabella problema KnapsackPD con capacità 3 e 2 oggetti",
        function() {
            var tabella = programmazioneDinamica.creaTabella(knapsackZeroOne);
            programmazioneDinamica.inizializzazione(tabella);
            assert.equal(0, tabella[0][0]);
            assert.equal(0, tabella[0][1]);
            assert.equal(0, tabella[0][2]);
            assert.equal(0, tabella[0][3]);
            assert.equal(0, tabella[1][0]);
            assert.equal(0, tabella[2][0]);

        })
    it("Risoluzione PD-KNAPSACK-0-1",
        function() {
            var oggetto1 = new Oggetto(1, 3, 7, 0);
            var oggetto2 = new Oggetto(2, 5, 15, 0);
            var oggetto3 = new Oggetto(3, 2, 6, 0);
            var oggetto4 = new Oggetto(4, 1, 2, 0);
            var problema = new Problema([oggetto1, oggetto2, oggetto3, oggetto4], 8);
            assert.equal(23, programmazioneDinamica.risolviKnapsackZeroOne(problema));

        })
    it("Risoluzione PD-KNAPSACK-CAPAC",
        function() {
            var oggetto1 = new Oggetto(1, 2, 8, 2);
            var oggetto2 = new Oggetto(2, 7, 16, 1);
            var oggetto3 = new Oggetto(3, 1, 2, 4);
            var oggetto4 = new Oggetto(4, 6, 15, 2);
            var problema = new Problema([oggetto1, oggetto2, oggetto3, oggetto4], 9);
            assert.equal(25, programmazioneDinamica.risolviKnapsackCapac(problema));

        })

    it("Risoluzione PD-KNAPSACK-CAPAC",
        function() {
            var oggetto1 = new Oggetto(1, 2, 8, -1);
            var oggetto2 = new Oggetto(2, 7, 16, -1);
            var oggetto3 = new Oggetto(3, 1, 2, -1);
            var oggetto4 = new Oggetto(4, 6, 15, -1);
            var problema = new Problema([oggetto1, oggetto2, oggetto3, oggetto4], 9);
            assert.equal(34, programmazioneDinamica.risolviKnapsackInfinito(problema));

        })
})
