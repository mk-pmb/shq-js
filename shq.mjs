// -*- coding: UTF-8, tab-width: 2 -*-

function q(m) { return (m.length === 1 ? "'\\''" : `'"${m}"'`); }

const n = /\x00+/g;
const b = /^[A-Za-z0-9,:=_\.\/\-]+$/;
const p = /'+/g;

function shq(x) {
  if (!x) { return "''"; }
  const s = String(x).replace(n, '');
  const m = b.exec(s);
  if (m && (m[0].length === s.length)) { return s; }
  return "'" + s.replace(p, q) + "'";
}

export default shq;
