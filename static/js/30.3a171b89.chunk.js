webpackJsonp([30,93,94],{492:function(n,e){function o(){function n(n,o,t){t=t||{};var r;return r="string"===typeof e[n]?e[n]:1===o?e[n].one:e[n].other.replace("{{count}}",o),t.addSuffix?t.comparison>0?"en "+r:"fa "+r:r}var e={lessThanXSeconds:{one:"menys d'un segon",other:"menys de {{count}} segons"},xSeconds:{one:"1 segon",other:"{{count}} segons"},halfAMinute:"mig minut",lessThanXMinutes:{one:"menys d'un minut",other:"menys de {{count}} minuts"},xMinutes:{one:"1 minut",other:"{{count}} minuts"},aboutXHours:{one:"aproximadament una hora",other:"aproximadament {{count}} hores"},xHours:{one:"1 hora",other:"{{count}} hores"},xDays:{one:"1 dia",other:"{{count}} dies"},aboutXMonths:{one:"aproximadament un mes",other:"aproximadament {{count}} mesos"},xMonths:{one:"1 mes",other:"{{count}} mesos"},aboutXYears:{one:"aproximadament un any",other:"aproximadament {{count}} anys"},xYears:{one:"1 any",other:"{{count}} anys"},overXYears:{one:"m\xe9s d'un any",other:"m\xe9s de {{count}} anys"},almostXYears:{one:"gaireb\xe9 un any",other:"gaireb\xe9 {{count}} anys"}};return{localize:n}}n.exports=o},493:function(n,e,o){function t(){var n=["gen","feb","mar","abr","mai","jun","jul","ago","set","oct","nov","des"],e=["gener","febrer","mar\xe7","abril","maig","juny","juliol","agost","setembre","octobre","novembre","desembre"],o=["dg","dl","dt","dc","dj","dv","ds"],t=["dge","dls","dts","dcs","djs","dvs","dss"],s=["diumenge","dilluns","dimarts","dimecres","dijous","divendres","dissabte"],u=["AM","PM"],d=["am","pm"],i=["a.m.","p.m."],c={MMM:function(e){return n[e.getMonth()]},MMMM:function(n){return e[n.getMonth()]},dd:function(n){return o[n.getDay()]},ddd:function(n){return t[n.getDay()]},dddd:function(n){return s[n.getDay()]},A:function(n){return n.getHours()/12>=1?u[1]:u[0]},a:function(n){return n.getHours()/12>=1?d[1]:d[0]},aa:function(n){return n.getHours()/12>=1?i[1]:i[0]}};return["M","D","DDD","d","Q","W"].forEach(function(n){c[n+"o"]=function(e,o){return r(o[n](e))}}),{formatters:c,formattingTokensRegExp:a(c)}}function r(n){switch(n){case 1:return"1r";case 2:return"2n";case 3:return"3r";case 4:return"4t";default:return n+"\xe8"}}var a=o(256);n.exports=t},556:function(n,e,o){var t=o(492),r=o(493);n.exports={distanceInWords:t(),format:r()}}});
//# sourceMappingURL=30.3a171b89.chunk.js.map