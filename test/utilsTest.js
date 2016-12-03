var chai = require('chai')
var assert = chai.assert
var utils = require(__dirname + '/../utils.js')

describe('utilsTest', function() {
    var singleton = [1];
    it("Il massimo di [] è undefined",
        function() {
            assert.equal(undefined, utils.massimoDiUnInsieme([]));
        })
    it("Il massimo di [1] è 1",
        function() {
            assert.equal(1, utils.massimoDiUnInsieme(singleton));
        })
    it("Il massimo di un [1] U [2] è 2",
        function() {
            singleton.push(2);
            assert.equal(2, utils.massimoDiUnInsieme(singleton));
        })
})
