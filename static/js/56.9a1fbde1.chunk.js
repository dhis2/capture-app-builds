(this["webpackJsonpcapture-app"]=this["webpackJsonpcapture-app"]||[]).push([[56],{476:function(r,n,e){var t=e(258);r.exports=function(){var r=["janv.","f\xe9vr.","mars","avr.","mai","juin","juill.","ao\xfbt","sept.","oct.","nov.","d\xe9c."],n=["janvier","f\xe9vrier","mars","avril","mai","juin","juillet","ao\xfbt","septembre","octobre","novembre","d\xe9cembre"],e=["di","lu","ma","me","je","ve","sa"],u=["dim.","lun.","mar.","mer.","jeu.","ven.","sam."],i=["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"],o=["AM","PM"],a=["am","pm"],c=["du matin","de l\u2019apr\xe8s-midi","du soir"],d={MMM:function(n){return r[n.getMonth()]},MMMM:function(r){return n[r.getMonth()]},dd:function(r){return e[r.getDay()]},ddd:function(r){return u[r.getDay()]},dddd:function(r){return i[r.getDay()]},A:function(r){return r.getHours()/12>=1?o[1]:o[0]},a:function(r){return r.getHours()/12>=1?a[1]:a[0]},aa:function(r){var n=r.getHours();return n<=12?c[0]:n<=16?c[1]:c[2]},Wo:function(r,n){return function(r){if(1===r)return"1re";return r+"e"}(n.W(r))}};return["M","D","DDD","d","Q"].forEach((function(r){d[r+"o"]=function(n,e){return function(r){if(1===r)return"1er";return r+"e"}(e[r](n))}})),["MMM","MMMM"].forEach((function(r){d["Do "+r]=function(n,e){var t=1===n.getDate()?"Do":"D";return(d[t]||e[t])(n,e)+" "+d[r](n)}})),{formatters:d,formattingTokensRegExp:t(d)}}}}]);