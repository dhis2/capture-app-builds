(this["webpackJsonp@dhis2/app-shell"]=this["webpackJsonp@dhis2/app-shell"]||[]).push([[17,51,68,86],{179:function(n,o){var e=["M","MM","Q","D","DD","DDD","DDDD","d","E","W","WW","YY","YYYY","GG","GGGG","H","HH","h","hh","m","mm","s","ss","S","SS","SSS","Z","ZZ","X","x"];n.exports=function(n){var o=[];for(var t in n)n.hasOwnProperty(t)&&o.push(t);var r=e.concat(o).sort().reverse();return new RegExp("(\\[[^\\[]*\\])|(\\\\)?("+r.join("|")+"|.)","g")}},414:function(n,o){n.exports=function(){var n={lessThanXSeconds:{one:"meno di un secondo",other:"meno di {{count}} secondi"},xSeconds:{one:"un secondo",other:"{{count}} secondi"},halfAMinute:"alcuni secondi",lessThanXMinutes:{one:"meno di un minuto",other:"meno di {{count}} minuti"},xMinutes:{one:"un minuto",other:"{{count}} minuti"},aboutXHours:{one:"circa un'ora",other:"circa {{count}} ore"},xHours:{one:"un'ora",other:"{{count}} ore"},xDays:{one:"un giorno",other:"{{count}} giorni"},aboutXMonths:{one:"circa un mese",other:"circa {{count}} mesi"},xMonths:{one:"un mese",other:"{{count}} mesi"},aboutXYears:{one:"circa un anno",other:"circa {{count}} anni"},xYears:{one:"un anno",other:"{{count}} anni"},overXYears:{one:"pi\xf9 di un anno",other:"pi\xf9 di {{count}} anni"},almostXYears:{one:"quasi un anno",other:"quasi {{count}} anni"}};return{localize:function(o,e,t){var r;return t=t||{},r="string"===typeof n[o]?n[o]:1===e?n[o].one:n[o].other.replace("{{count}}",e),t.addSuffix?t.comparison>0?"tra "+r:r+" fa":r}}}},415:function(n,o,e){var t=e(179);n.exports=function(){var n=["gen","feb","mar","apr","mag","giu","lug","ago","set","ott","nov","dic"],o=["gennaio","febbraio","marzo","aprile","maggio","giugno","luglio","agosto","settembre","ottobre","novembre","dicembre"],e=["do","lu","ma","me","gi","ve","sa"],r=["dom","lun","mar","mer","gio","ven","sab"],u=["domenica","luned\xec","marted\xec","mercoled\xec","gioved\xec","venerd\xec","sabato"],a=["AM","PM"],i=["am","pm"],c=["a.m.","p.m."],s={MMM:function(o){return n[o.getMonth()]},MMMM:function(n){return o[n.getMonth()]},dd:function(n){return e[n.getDay()]},ddd:function(n){return r[n.getDay()]},dddd:function(n){return u[n.getDay()]},A:function(n){return n.getHours()/12>=1?a[1]:a[0]},a:function(n){return n.getHours()/12>=1?i[1]:i[0]},aa:function(n){return n.getHours()/12>=1?c[1]:c[0]}};return["M","D","DDD","d","Q","W"].forEach((function(n){s[n+"o"]=function(o,e){return e[n](o)+"\xba"}})),{formatters:s,formattingTokensRegExp:t(s)}}},603:function(n,o,e){var t=e(414),r=e(415);n.exports={distanceInWords:t(),format:r()}}}]);