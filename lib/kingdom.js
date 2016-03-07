'use strict';

let Reflect         = require('harmony-reflect');

let DOMParser       = require('xmldom').DOMParser;
let XMLSerializer   = require('xmldom').XMLSerializer;
let _               = require('underscore');

class KingDOM {

    constructor(xml) {
        let dom = xml;
        if (typeof xml === 'string') {
            dom = new DOMParser().parseFromString(xml, 'application/xml');
        }
        return new Proxy(dom
            , {
                get : this.lookup
            }
        );
    }

    lookup (dom, property) {
        // existing DOM property
        if (property in dom) {
            return dom[property];
        }
        // attribute
        if (property.indexOf('@') === 0) {
            return dom.getAttribute(property.substring(1));
        }
        // textContent
        if (property === '#text') {
            return dom.textContent;
        }
        // toString
        if (property === '$toString') {
            return new XMLSerializer().serializeToString(dom);
        }
        // childnodes
        var children = _.filter(dom.childNodes, function (child) {
            return child.tagName === property;
        }).map(function (child) {
            if (child instanceof KingDOM) {
                return child;
            } else {
                return new KingDOM(child);
            }
        });

        return children;
    }
}

module.exports = KingDOM;
