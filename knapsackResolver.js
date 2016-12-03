var prompt = require('prompt');

var Oggetto = require(__dirname + '/oggetto.js');
var Problema = require(__dirname + '/problema.js');
var utils = require(__dirname + '/utils.js');
var programmazioneDinamica = require(__dirname + '/programmazioneDinamica.js')

//
// Start the prompt
//
//
// Disable prompt's built-in SIGINT handling:
//
prompt.start();
var schema = {
    properties: {
        oggetti: {
            pattern: /^[0-9],[1-9][0-9]*,[1-9][0-9]*,-*[0-9](; [0-9],[1-9][0-9]*,[1-9][0-9]*,-*[0-9])*$/,
            message: 'Esempio di inserimento: indice1,peso1,profitto1,copie1; indice2,peso2,profitto2,copie2' +
                '. Per le copie infinite mettere -1.',
            required: true
        },
        capacità: {
            pattern: /^[1-9][0-9]*$/,
            message: 'Esempio di inserimento: 9',
            required: true
        }
    }
};


//
// Get two properties from the user: username and email
//
prompt.get(schema,
    function(err, result) {
        var oggetti = result.oggetti.split("; ");
        var oggettiKnap = [];
        for (oggetto in oggetti) {
            var arrayCampi = oggetti[oggetto].split(",");
            oggettiKnap.push(new Oggetto(1*arrayCampi[0],
                1*arrayCampi[1], 1*arrayCampi[2],
                1*arrayCampi[3]));
        }
        // console.log(oggettiKnap);
        // console.log(oggetti);
        var problema = new Problema(oggettiKnap, result.capacità);
        problema.risolvi();
    });
