// -*- coding: utf-8, tab-width: 2 -*-
'use strict';

const shq = require('../shq.js');


const EX = function toBashDict(jsDict, origOpt) {
  const opt = origOpt || false;
  const shDict = Object.entries(jsDict || false).map(EX.oneEntry.bind(null,
    opt)).filter(Boolean);
  if (opt) {
    const { glue } = opt;
    if (glue || (glue === '')) { return shDict.join(glue); }
  }
  Object.assign(shDict, EX.api);
  return shDict;
};


Object.assign(EX, {

  oneEntry(opt, ent) {
    const key = ent[0];
    let val = ent[1];
    if (val === undefined) { val = ''; }
    val = String(val);
    if (opt.skipEmpty && (!val)) { return ''; }
    return ((opt.dictName || '')
      + '[' + (opt.keyPrefix || '') + shq(key) + (opt.keySuffix || '')
      + ']=' + shq(val)
      + (opt.dictName ? ';' : '')
    );
  },

  api: {
    toString() { return this.join(' '); },
  },


});


module.exports = EX;
