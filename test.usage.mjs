// -*- coding: utf-8, tab-width: 2 -*-

import assert from 'assert';

import shq from '.';

console.debug("printf '‹%s›\\n' \\");

function t(o, w) {
  const q = shq(o);
  console.debug('  ', q, '\\');
  assert.strictEqual(q, w);
}

t(`Hello`, `Hello`);
t(`Hello World`, `'Hello World'`);
t(`Hello World!`, `'Hello World!'`);

t(`setsid "$0" & setsid "$0" &`,
  `'setsid "$0" & setsid "$0" &'`);

t(`The "double" quotes`, `'The "double" quotes'`);
t(`The 'single' quotes`, `'The '\\''single'\\'' quotes'`);
t(`The ''double single'' quotes`,
  `'The '"''"'double single'"''"' quotes'`);

t('New\nLine', "'New\nLine'");

console.debug('  | nl -ba');
