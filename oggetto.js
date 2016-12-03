/**
 * Oggetto è l'astrazione di ciò che finirà all'interno del contenitore
 */


/**
 * Oggetto - Costruttore dell'oggetto
 *
 * @param  {type} indice   numero dell'oggetto
 * @param  {type} peso     peso dell'oggetto
 * @param  {type} profitto profitto assegnato all'oggetto
 */

function Oggetto(indice, peso, profitto,copie) {
    this.profitto = profitto;
    this.indice = indice;
    this.peso = peso;
    this.copie = copie;
};


Oggetto.prototype.toString = function() {
    oggettoString = "Oggetto " + this.indice + ' con profitto ' + this.profitto
    + ' peso' + this.peso + ' e numero copie '+this.copie;
    return oggettoString;
}
module.exports = Oggetto;
