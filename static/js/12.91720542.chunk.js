webpackJsonp([12,57,58],{595:function(n,t){function e(){function n(n,e,r){r=r||{};var o;return o="string"===typeof t[n]?t[n]:1===e?t[n].one:t[n].other.replace("{{count}}",e),r.addSuffix?r.comparison>0?"om "+o:o+" siden":o}var t={lessThanXSeconds:{one:"mindre enn ett sekund",other:"mindre enn {{count}} sekunder"},xSeconds:{one:"ett sekund",other:"{{count}} sekunder"},halfAMinute:"et halvt minutt",lessThanXMinutes:{one:"mindre enn ett minutt",other:"mindre enn {{count}} minutter"},xMinutes:{one:"ett minutt",other:"{{count}} minutter"},aboutXHours:{one:"rundt en time",other:"rundt {{count}} timer"},xHours:{one:"en time",other:"{{count}} timer"},xDays:{one:"en dag",other:"{{count}} dager"},aboutXMonths:{one:"rundt en m\xe5ned",other:"rundt {{count}} m\xe5neder"},xMonths:{one:"en m\xe5ned",other:"{{count}} m\xe5neder"},aboutXYears:{one:"rundt ett \xe5r",other:"rundt {{count}} \xe5r"},xYears:{one:"ett \xe5r",other:"{{count}} \xe5r"},overXYears:{one:"over ett \xe5r",other:"over {{count}} \xe5r"},almostXYears:{one:"nesten ett \xe5r",other:"nesten {{count}} \xe5r"}};return{localize:n}}n.exports=e},596:function(n,t,e){function r(){var n=["jan.","feb.","mars","april","mai","juni","juli","aug.","sep.","okt.","nov.","des."],t=["januar","februar","mars","april","mai","juni","juli","august","september","oktober","november","desember"],e=["s\xf8","ma","ti","on","to","fr","l\xf8"],r=["s\xf8.","ma.","ti.","on.","to.","fr.","l\xf8."],a=["s\xf8ndag","mandag","tirsdag","onsdag","torsdag","fredag","l\xf8rdag"],i=["AM","PM"],s=["am","pm"],d=["a.m.","p.m."],c={MMM:function(t){return n[t.getMonth()]},MMMM:function(n){return t[n.getMonth()]},dd:function(n){return e[n.getDay()]},ddd:function(n){return r[n.getDay()]},dddd:function(n){return a[n.getDay()]},A:function(n){return n.getHours()/12>=1?i[1]:i[0]},a:function(n){return n.getHours()/12>=1?s[1]:s[0]},aa:function(n){return n.getHours()/12>=1?d[1]:d[0]}};return["M","D","DDD","d","Q","W"].forEach(function(n){c[n+"o"]=function(t,e){return o(e[n](t))}}),{formatters:c,formattingTokensRegExp:u(c)}}function o(n){return n+"."}var u=e(305);n.exports=r},641:function(n,t,e){var r=e(595),o=e(596);n.exports={distanceInWords:r(),format:o()}}});