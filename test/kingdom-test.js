'use strict'

let assert  = require('assert');
let KingDOM = require('../lib/kingdom');

describe('kingdom-get', () => {
    it('should parse the xml', () => {
        let xmlString = '<kingdom version="2.0"><a>one</a><a>two</a><b attr="value">onlyone</b></kingdom>';
        let xml       = new KingDOM(xmlString);
        assert.equal(xml.kingdom[0].a.length, 2);
        assert.equal(xml.kingdom[0].b[0]['@attr'], 'value');
    });
});