var utils = require(__dirname + '/utils.js')
module.exports = {

    /**
     * risolviKnapsackZeroOne - risoluzione di un problema di knapsack0-1
     *
     * @param  {type} problema problema di knapsack0-1
     */
    risolviKnapsackZeroOne: function(problema) {
        var tabella = this.creaTabella(problema);
        this.inizializzazione(tabella);
        for (i = 1; i < tabella.length; i++) {
            var oggettoNth = problema.oggetti[i - 1];
            for (j = 0; j < tabella[i].length; j++) {
                if (j < oggettoNth.peso)
                    tabella[i][j] = tabella[i - 1][j];
                else {
                    tabella[i][j] = utils.massimoDiUnInsieme([
                        tabella[i - 1][j],
                        (tabella[i - 1][(j - (oggettoNth.peso))] + oggettoNth.profitto)
                    ]);
                }
            }
        }
        tabella = utils.invertiMatrice(tabella);
        console.log(tabella);
        return tabella[problema.oggetti.length][problema.capacità];
    },

    risolviKnapsackCapac: function(problema) {
        var tabella = this.creaTabella(problema);
        this.inizializzazione(tabella);
        for (i = 1; i < tabella.length; i++) {
            var oggettoNth = problema.oggetti[i - 1];
            for (j = 0; j < tabella[i].length; j++) {
                if (j < oggettoNth.peso)
                    tabella[i][j] = tabella[i - 1][j];
                else {
                    var valori = [tabella[i - 1][j]];
                    var copie = oggettoNth.copie;
                    var moltiplicatoreCopie = 1;
                    for (h = j - (oggettoNth.peso); h >= 0 && copie > 0; h = h - (oggettoNth.peso)) {
                        valori.push(tabella[i - 1][h] + moltiplicatoreCopie * oggettoNth.profitto);
                        moltiplicatoreCopie++;
                        copie = copie - 1;
                    }
                    tabella[i][j] = utils.massimoDiUnInsieme(valori);
                }
            }
        }
        console.log(utils.invertiMatrice(tabella));
        return tabella[problema.oggetti.length][problema.capacità];
    },

    risolviKnapsackInfinito: function(problema) {
        var tabella = this.creaTabella(problema);
        this.inizializzazione(tabella);
        for (i = 1; i < tabella.length; i++) {
            var oggettoNth = problema.oggetti[i - 1];
            for (j = 0; j < tabella[i].length; j++) {
                if (j < oggettoNth.peso)
                    tabella[i][j] = tabella[i - 1][j];
                else {
                    var valori = [tabella[i - 1][j]];
                    var moltiplicatoreCopie = 1;
                    for (h = j - (oggettoNth.peso); h >= 0; h = h - (oggettoNth.peso)) {
                        valori.push(tabella[i][h] + moltiplicatoreCopie * oggettoNth.profitto);
                        moltiplicatoreCopie++;
                    }
                    tabella[i][j] = utils.massimoDiUnInsieme(valori);
                }
            }
        }
        console.log(utils.invertiMatrice(tabella));
        return tabella[problema.oggetti.length][problema.capacità];
    },

    creaTabella: function(problema) {
        var tabella = [];
        for (i = 0; i <= problema.oggetti.length; i++) {
            tabella.push([]);
            for (j = 0; j <= problema.capacità; j++)
                tabella[i].push(undefined);
        }
        //console.log(tabella);
        return tabella;
    },

    inizializzazione: function(tabella) {
        for (i = 0; i < tabella[0].length; i++)
            tabella[0][i] = 0;
        for (i = 0; i < tabella.length; i++)
            tabella[i][0] = 0;
        //console.log(tabella);
    }
}
