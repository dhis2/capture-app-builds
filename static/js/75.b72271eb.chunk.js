webpackJsonp([75],{527:function(n,r,e){function t(){var n=["janv.","f\xe9vr.","mars","avr.","mai","juin","juill.","ao\xfbt","sept.","oct.","nov.","d\xe9c."],r=["janvier","f\xe9vrier","mars","avril","mai","juin","juillet","ao\xfbt","septembre","octobre","novembre","d\xe9cembre"],e=["di","lu","ma","me","je","ve","sa"],t=["dim.","lun.","mar.","mer.","jeu.","ven.","sam."],a=["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"],c=["AM","PM"],d=["am","pm"],f=["du matin","de l\u2019apr\xe8s-midi","du soir"],m={MMM:function(r){return n[r.getMonth()]},MMMM:function(n){return r[n.getMonth()]},dd:function(n){return e[n.getDay()]},ddd:function(n){return t[n.getDay()]},dddd:function(n){return a[n.getDay()]},A:function(n){return n.getHours()/12>=1?c[1]:c[0]},a:function(n){return n.getHours()/12>=1?d[1]:d[0]},aa:function(n){var r=n.getHours();return r<=12?f[0]:r<=16?f[1]:f[2]},Wo:function(n,r){return o(r.W(n))}};return["M","D","DDD","d","Q"].forEach(function(n){m[n+"o"]=function(r,e){return u(e[n](r))}}),["MMM","MMMM"].forEach(function(n){m["Do "+n]=function(r,e){var t=1===r.getDate()?"Do":"D";return(m[t]||e[t])(r,e)+" "+m[n](r)}}),{formatters:m,formattingTokensRegExp:i(m)}}function u(n){return 1===n?"1er":n+"e"}function o(n){return 1===n?"1re":n+"e"}var i=e(267);n.exports=t}});
//# sourceMappingURL=75.b72271eb.chunk.js.map