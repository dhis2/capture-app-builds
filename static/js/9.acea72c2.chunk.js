(this["webpackJsonp@dhis2/app-shell"]=this["webpackJsonp@dhis2/app-shell"]||[]).push([[9,43,68,78],{197:function(e,o){var n=["M","MM","Q","D","DD","DDD","DDDD","d","E","W","WW","YY","YYYY","GG","GGGG","H","HH","h","hh","m","mm","s","ss","S","SS","SSS","Z","ZZ","X","x"];e.exports=function(e){var o=[];for(var r in e)e.hasOwnProperty(r)&&o.push(r);var t=n.concat(o).sort().reverse();return new RegExp("(\\[[^\\[]*\\])|(\\\\)?("+t.join("|")+"|.)","g")}},429:function(e,o){e.exports=function(){var e={lessThanXSeconds:{one:"menos de un segundo",other:"menos de {{count}} segundos"},xSeconds:{one:"1 segundo",other:"{{count}} segundos"},halfAMinute:"medio minuto",lessThanXMinutes:{one:"menos de un minuto",other:"menos de {{count}} minutos"},xMinutes:{one:"1 minuto",other:"{{count}} minutos"},aboutXHours:{one:"alrededor de 1 hora",other:"alrededor de {{count}} horas"},xHours:{one:"1 hora",other:"{{count}} horas"},xDays:{one:"1 d\xeda",other:"{{count}} d\xedas"},aboutXMonths:{one:"alrededor de 1 mes",other:"alrededor de {{count}} meses"},xMonths:{one:"1 mes",other:"{{count}} meses"},aboutXYears:{one:"alrededor de 1 a\xf1o",other:"alrededor de {{count}} a\xf1os"},xYears:{one:"1 a\xf1o",other:"{{count}} a\xf1os"},overXYears:{one:"m\xe1s de 1 a\xf1o",other:"m\xe1s de {{count}} a\xf1os"},almostXYears:{one:"casi 1 a\xf1o",other:"casi {{count}} a\xf1os"}};return{localize:function(o,n,r){var t;return r=r||{},t="string"===typeof e[o]?e[o]:1===n?e[o].one:e[o].other.replace("{{count}}",n),r.addSuffix?r.comparison>0?"en "+t:"hace "+t:t}}}},430:function(e,o,n){var r=n(197);e.exports=function(){var e=["ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic"],o=["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"],n=["do","lu","ma","mi","ju","vi","sa"],t=["dom","lun","mar","mi\xe9","jue","vie","s\xe1b"],s=["domingo","lunes","martes","mi\xe9rcoles","jueves","viernes","s\xe1bado"],u=["AM","PM"],a=["am","pm"],d=["a.m.","p.m."],i={MMM:function(o){return e[o.getMonth()]},MMMM:function(e){return o[e.getMonth()]},dd:function(e){return n[e.getDay()]},ddd:function(e){return t[e.getDay()]},dddd:function(e){return s[e.getDay()]},A:function(e){return e.getHours()/12>=1?u[1]:u[0]},a:function(e){return e.getHours()/12>=1?a[1]:a[0]},aa:function(e){return e.getHours()/12>=1?d[1]:d[0]}};return["M","D","DDD","d","Q","W"].forEach((function(e){i[e+"o"]=function(o,n){return n[e](o)+"\xba"}})),{formatters:i,formattingTokensRegExp:r(i)}}},657:function(e,o,n){var r=n(429),t=n(430);e.exports={distanceInWords:r(),format:t()}}}]);