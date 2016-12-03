/**
 * Il Problema da risolvere attraverso la programmazione dinamica.
 * Nella sua costruzione si comprende quale tecnica utilizzare per la sua
 * risoluzione in base alle copie degli oggetti proposti.
 *
 * Ricordiamo i tre problemi di PD con il KNAPSACK: 0-1, intero capacitato,
 * intero non capacitato.
 */
var utils = require(__dirname + '/utils.js')
var programmazioneDinamica = require(__dirname + '/programmazioneDinamica.js');
/**
 * Problema -
 *
 * @param  {type} oggetti insieme di oggetti proposti
 */
function Problema(oggetti, capacità) {
    this.oggetti = oggetti;
    this.capacità = capacità;
    this.metodoRisolutivo = this.scegliMetodoRisolutivo();
};

Problema.prototype.risolvi = function() {
    if (this.metodoRisolutivo == 'PD-KNAPSACK-0-1')
        programmazioneDinamica.risolviKnapsackZeroOne(this);
    else if (this.metodoRisolutivo == 'PD-KNAPSACK-CAPAC')
        programmazioneDinamica.risolviKnapsackCapac(this);
    else if (this.metodoRisolutivo == 'PD-KNAPSACK-INFINITO')
        programmazioneDinamica.risolviKnapsackInfinito(this);
    else console.log('Non è stato possibile trovare un metodo risolutivo' +
        ' nella programmazione dinamica');
}

Problema.prototype.scegliMetodoRisolutivo = function() {
    var copie = [];
    for (oggetto in this.oggetti)
        copie.push(this.oggetti[oggetto].copie);
    var numeroCopieMassimo = utils.massimoDiUnInsieme(copie);
    if (numeroCopieMassimo == 0)
        return 'PD-KNAPSACK-0-1';
    if (numeroCopieMassimo > 0)
        return 'PD-KNAPSACK-CAPAC';
    return 'PD-KNAPSACK-INFINITO';
}

Problema.prototype.toString = function() {
    for (oggetto in oggetti)
        problemaString += oggetti[oggetto].toString() + '\n';
    return problemaString;
}

module.exports = Problema;
