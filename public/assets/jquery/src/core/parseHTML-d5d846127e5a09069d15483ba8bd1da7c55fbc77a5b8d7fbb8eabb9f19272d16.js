define(["../core","./var/rsingleTag","../manipulation"],function(e,t){return e.parseHTML=function(n,r,i){if(!n||"string"!=typeof n)return null;"boolean"==typeof r&&(i=r,r=!1),r=r||document;var a=t.exec(n),o=!i&&[];return a?[r.createElement(a[1])]:(a=e.buildFragment([n],r,o),o&&o.length&&e(o).remove(),e.merge([],a.childNodes))},e.parseHTML});