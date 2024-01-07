// -*- coding: utf-8, tab-width: 2 -*-

import assert from 'assert';

import dict2bash from '../bonus/dict2bash.js';

const same = assert.deepStrictEqual;


(function sandwichTest() {
  const input = {
    bread: 2,
    tomatoSlices: 3,
    onionRings: false,
    mustard: true,
    sauce: 'BBQ',
  };
  const wantShLines = [
    '[bread]=2',
    '[tomatoSlices]=3',
    '[onionRings]=false',
    '[mustard]=true',
    '[sauce]=BBQ',
  ];
  const gotLines = dict2bash(input);
  same(gotLines.slice(), wantShLines);
  same(String(gotLines), wantShLines.join(' '));
}());


(function shellInjectionTest() {
  const input = {
    forks: '23 & halt & true',
    backticks: '23`halt`',
    quot: '23"; halt; true "',
    apos: "23'; halt; true '",
    childPipe: '<(head -c 16 /dev/zero)',
    '$(halt &)': 23,
  };
  const quotedApos = "\\'";
  const wantShLines = [
    "[forks]='23 & halt & true'",
    "[backticks]='23`halt`'",
    "[quot]='23\x22; halt; true \x22'",
    "[apos]='23'" + quotedApos + "'; halt; true '" + quotedApos,
    "[childPipe]='<(head -c 16 /dev/zero)'",
    "['$(halt &)']=23",
  ];
  const gotLines = dict2bash(input);
  same(gotLines.slice(), wantShLines);
  same(String(gotLines), wantShLines.join(' '));
}());





console.info('+OK bonus/dict2bash tests passed.');
