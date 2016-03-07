# kingdomjs (v-2.0.0)

[![Build Status](https://travis-ci.org/viqueen/kingdomjs.svg?branch=master)](https://travis-ci.org/viqueen/kingdomjs)

experimenting with DOM and reflection, alternative fro xml2json conversions.

I also happen to be an expat who sometimes would rather not use xpath.

## Installation

```bash
npm install kindomjs --save
```

## Usage

```javascript
let KingDOM = require('kingdomjs');

let atomString = '<entry><id>someId</id><title type="text">some title</title></entry>';
let atomEntry = new KingDOM(atomString).entry[0];

console.log(atomEntry.id[0]['#text']);      // out : someId
console.log(atomEntry.title[0]['#text']);   // out : some title
console.log(atomEntry.title[0]['@type']);   // out : text


// serialize to string
console.log(atomEntry['@toString']);
```
