(this["webpackJsonpcapture-app"]=this["webpackJsonpcapture-app"]||[]).push([[20,73,74],{495:function(n,t){n.exports=function(){var n={lessThanXSeconds:{one:"mindre enn ett sekund",other:"mindre enn {{count}} sekunder"},xSeconds:{one:"ett sekund",other:"{{count}} sekunder"},halfAMinute:"et halvt minutt",lessThanXMinutes:{one:"mindre enn ett minutt",other:"mindre enn {{count}} minutter"},xMinutes:{one:"ett minutt",other:"{{count}} minutter"},aboutXHours:{one:"rundt en time",other:"rundt {{count}} timer"},xHours:{one:"en time",other:"{{count}} timer"},xDays:{one:"en dag",other:"{{count}} dager"},aboutXMonths:{one:"rundt en m\xe5ned",other:"rundt {{count}} m\xe5neder"},xMonths:{one:"en m\xe5ned",other:"{{count}} m\xe5neder"},aboutXYears:{one:"rundt ett \xe5r",other:"rundt {{count}} \xe5r"},xYears:{one:"ett \xe5r",other:"{{count}} \xe5r"},overXYears:{one:"over ett \xe5r",other:"over {{count}} \xe5r"},almostXYears:{one:"nesten ett \xe5r",other:"nesten {{count}} \xe5r"}};return{localize:function(t,e,r){var o;return r=r||{},o="string"===typeof n[t]?n[t]:1===e?n[t].one:n[t].other.replace("{{count}}",e),r.addSuffix?r.comparison>0?"om "+o:o+" siden":o}}}},496:function(n,t,e){var r=e(253);n.exports=function(){var n=["jan.","feb.","mars","april","mai","juni","juli","aug.","sep.","okt.","nov.","des."],t=["januar","februar","mars","april","mai","juni","juli","august","september","oktober","november","desember"],e=["s\xf8","ma","ti","on","to","fr","l\xf8"],o=["s\xf8.","ma.","ti.","on.","to.","fr.","l\xf8."],u=["s\xf8ndag","mandag","tirsdag","onsdag","torsdag","fredag","l\xf8rdag"],a=["AM","PM"],s=["am","pm"],i=["a.m.","p.m."],d={MMM:function(t){return n[t.getMonth()]},MMMM:function(n){return t[n.getMonth()]},dd:function(n){return e[n.getDay()]},ddd:function(n){return o[n.getDay()]},dddd:function(n){return u[n.getDay()]},A:function(n){return n.getHours()/12>=1?a[1]:a[0]},a:function(n){return n.getHours()/12>=1?s[1]:s[0]},aa:function(n){return n.getHours()/12>=1?i[1]:i[0]}};return["M","D","DDD","d","Q","W"].forEach((function(n){d[n+"o"]=function(t,e){return e[n](t)+"."}})),{formatters:d,formattingTokensRegExp:r(d)}}},541:function(n,t,e){var r=e(495),o=e(496);n.exports={distanceInWords:r(),format:o()}}}]);