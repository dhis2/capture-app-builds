(this["webpackJsonp@dhis2/app-shell"]=this["webpackJsonp@dhis2/app-shell"]||[]).push([[21,55,68,90],{197:function(n,e){var t=["M","MM","Q","D","DD","DDD","DDDD","d","E","W","WW","YY","YYYY","GG","GGGG","H","HH","h","hh","m","mm","s","ss","S","SS","SSS","Z","ZZ","X","x"];n.exports=function(n){var e=[];for(var r in n)n.hasOwnProperty(r)&&e.push(r);var o=t.concat(e).sort().reverse();return new RegExp("(\\[[^\\[]*\\])|(\\\\)?("+o.join("|")+"|.)","g")}},476:function(n,e){n.exports=function(){var n={lessThanXSeconds:{one:"mindre enn ett sekund",other:"mindre enn {{count}} sekunder"},xSeconds:{one:"ett sekund",other:"{{count}} sekunder"},halfAMinute:"et halvt minutt",lessThanXMinutes:{one:"mindre enn ett minutt",other:"mindre enn {{count}} minutter"},xMinutes:{one:"ett minutt",other:"{{count}} minutter"},aboutXHours:{one:"rundt en time",other:"rundt {{count}} timer"},xHours:{one:"en time",other:"{{count}} timer"},xDays:{one:"en dag",other:"{{count}} dager"},aboutXMonths:{one:"rundt en m\xe5ned",other:"rundt {{count}} m\xe5neder"},xMonths:{one:"en m\xe5ned",other:"{{count}} m\xe5neder"},aboutXYears:{one:"rundt ett \xe5r",other:"rundt {{count}} \xe5r"},xYears:{one:"ett \xe5r",other:"{{count}} \xe5r"},overXYears:{one:"over ett \xe5r",other:"over {{count}} \xe5r"},almostXYears:{one:"nesten ett \xe5r",other:"nesten {{count}} \xe5r"}};return{localize:function(e,t,r){var o;return r=r||{},o="string"===typeof n[e]?n[e]:1===t?n[e].one:n[e].other.replace("{{count}}",t),r.addSuffix?r.comparison>0?"om "+o:o+" siden":o}}}},477:function(n,e,t){var r=t(197);n.exports=function(){var n=["jan.","feb.","mars","april","mai","juni","juli","aug.","sep.","okt.","nov.","des."],e=["januar","februar","mars","april","mai","juni","juli","august","september","oktober","november","desember"],t=["s\xf8","ma","ti","on","to","fr","l\xf8"],o=["s\xf8.","ma.","ti.","on.","to.","fr.","l\xf8."],u=["s\xf8ndag","mandag","tirsdag","onsdag","torsdag","fredag","l\xf8rdag"],a=["AM","PM"],s=["am","pm"],i=["a.m.","p.m."],d={MMM:function(e){return n[e.getMonth()]},MMMM:function(n){return e[n.getMonth()]},dd:function(n){return t[n.getDay()]},ddd:function(n){return o[n.getDay()]},dddd:function(n){return u[n.getDay()]},A:function(n){return n.getHours()/12>=1?a[1]:a[0]},a:function(n){return n.getHours()/12>=1?s[1]:s[0]},aa:function(n){return n.getHours()/12>=1?i[1]:i[0]}};return["M","D","DDD","d","Q","W"].forEach((function(n){d[n+"o"]=function(e,t){return t[n](e)+"."}})),{formatters:d,formattingTokensRegExp:r(d)}}},691:function(n,e,t){var r=t(476),o=t(477);n.exports={distanceInWords:r(),format:o()}}}]);