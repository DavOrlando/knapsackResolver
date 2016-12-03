module.exports = {

    /**
     * massimoDiUnInsieme - Massimo di un insieme di naturali
     *
     * @param  {type} insieme insiemi di naturali
     */
    massimoDiUnInsieme: function(insieme) {
        massimo = insieme[0];
        for (elemento in insieme) {
            if (massimo < insieme[elemento])
                massimo = insieme[elemento];
        }
        return massimo;
    },

    invertiMatrice: function(arr) {
        var newArray = arr[0].map(function(col, i) {
            return arr.map(function(row) {
                return row[i]
            });
        });
        return newArray;
    }
}
