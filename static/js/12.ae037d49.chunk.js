(this["webpackJsonp@dhis2/app-shell"]=this["webpackJsonp@dhis2/app-shell"]||[]).push([[12,46,68,81],{174:function(n,e){var o=["M","MM","Q","D","DD","DDD","DDDD","d","E","W","WW","YY","YYYY","GG","GGGG","H","HH","h","hh","m","mm","s","ss","S","SS","SSS","Z","ZZ","X","x"];n.exports=function(n){var e=[];for(var r in n)n.hasOwnProperty(r)&&e.push(r);var t=o.concat(e).sort().reverse();return new RegExp("(\\[[^\\[]*\\])|(\\\\)?("+t.join("|")+"|.)","g")}},383:function(n,e){n.exports=function(){var n={lessThanXSeconds:{one:"moins d\u2019une seconde",other:"moins de {{count}} secondes"},xSeconds:{one:"1 seconde",other:"{{count}} secondes"},halfAMinute:"30 secondes",lessThanXMinutes:{one:"moins d\u2019une minute",other:"moins de {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"environ 1 heure",other:"environ {{count}} heures"},xHours:{one:"1 heure",other:"{{count}} heures"},xDays:{one:"1 jour",other:"{{count}} jours"},aboutXMonths:{one:"environ 1 mois",other:"environ {{count}} mois"},xMonths:{one:"1 mois",other:"{{count}} mois"},aboutXYears:{one:"environ 1 an",other:"environ {{count}} ans"},xYears:{one:"1 an",other:"{{count}} ans"},overXYears:{one:"plus d\u2019un an",other:"plus de {{count}} ans"},almostXYears:{one:"presqu\u2019un an",other:"presque {{count}} ans"}};return{localize:function(e,o,r){var t;return r=r||{},t="string"===typeof n[e]?n[e]:1===o?n[e].one:n[e].other.replace("{{count}}",o),r.addSuffix?r.comparison>0?"dans "+t:"il y a "+t:t}}}},384:function(n,e,o){var r=o(174);n.exports=function(){var n=["janv.","f\xe9vr.","mars","avr.","mai","juin","juill.","ao\xfbt","sept.","oct.","nov.","d\xe9c."],e=["janvier","f\xe9vrier","mars","avril","mai","juin","juillet","ao\xfbt","septembre","octobre","novembre","d\xe9cembre"],o=["di","lu","ma","me","je","ve","sa"],t=["dim.","lun.","mar.","mer.","jeu.","ven.","sam."],u=["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"],s=["AM","PM"],i=["am","pm"],a=["du matin","de l\u2019apr\xe8s-midi","du soir"],c={MMM:function(e){return n[e.getMonth()]},MMMM:function(n){return e[n.getMonth()]},dd:function(n){return o[n.getDay()]},ddd:function(n){return t[n.getDay()]},dddd:function(n){return u[n.getDay()]},A:function(n){return n.getHours()/12>=1?s[1]:s[0]},a:function(n){return n.getHours()/12>=1?i[1]:i[0]},aa:function(n){var e=n.getHours();return e<=12?a[0]:e<=16?a[1]:a[2]},Wo:function(n,e){return function(n){if(1===n)return"1re";return n+"e"}(e.W(n))}};return["M","D","DDD","d","Q"].forEach((function(n){c[n+"o"]=function(e,o){return function(n){if(1===n)return"1er";return n+"e"}(o[n](e))}})),["MMM","MMMM"].forEach((function(n){c["Do "+n]=function(e,o){var r=1===e.getDate()?"Do":"D";return(c[r]||o[r])(e,o)+" "+c[n](e)}})),{formatters:c,formattingTokensRegExp:r(c)}}},566:function(n,e,o){var r=o(383),t=o(384);n.exports={distanceInWords:r(),format:t()}}}]);