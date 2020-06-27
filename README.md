
<!--#echo json="package.json" key="name" underline="=" -->
shq
===
<!--/#echo -->

<!--#echo json="package.json" key="description" -->
Quote a string for safe use as a shell argument. Strips null characters.
<!--/#echo -->


API
---

This module ESM-exports one function:

### shq(x)

* Stringify `x`,
* remove all U+0000 null characters, because all too often, some C program
  in the pipeline will screw it up even if properly quoted,
* and in case it contains special characters, quote it.



Usage
-----

see [test.usage.js](test.usage.js).


<!--#toc stop="scan" -->



Known issues
------------

* Needs more/better tests and docs.




&nbsp;


License
-------
<!--#echo json="package.json" key=".license" -->
ISC
<!--/#echo -->
