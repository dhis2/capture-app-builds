webpackJsonp([8,49,50],{657:function(n,e){function o(){function n(n,o,t){t=t||{};var r;return r="string"===typeof e[n]?e[n]:1===o?e[n].one:e[n].other.replace("{{count}}",o),t.addSuffix?t.comparison>0?"\xeen "+r:r+" \xeen urm\u0103":r}var e={lessThanXSeconds:{one:"mai pu\u021bin de o secund\u0103",other:"mai pu\u021bin de {{count}} secunde"},xSeconds:{one:"1 secund\u0103",other:"{{count}} secunde"},halfAMinute:"jum\u0103tate de minut",lessThanXMinutes:{one:"mai pu\u021bin de un minut",other:"mai pu\u021bin de {{count}} minute"},xMinutes:{one:"1 minut",other:"{{count}} minute"},aboutXHours:{one:"circa 1 or\u0103",other:"circa {{count}} ore"},xHours:{one:"1 or\u0103",other:"{{count}} ore"},xDays:{one:"1 zi",other:"{{count}} zile"},aboutXMonths:{one:"circa 1 lun\u0103",other:"circa {{count}} luni"},xMonths:{one:"1 lun\u0103",other:"{{count}} luni"},aboutXYears:{one:"circa 1 an",other:"circa {{count}} ani"},xYears:{one:"1 an",other:"{{count}} ani"},overXYears:{one:"peste 1 an",other:"peste {{count}} ani"},almostXYears:{one:"aproape 1 an",other:"aproape {{count}} ani"}};return{localize:n}}n.exports=o},658:function(n,e,o){function t(){var n=["ian","feb","mar","apr","mai","iun","iul","aug","sep","oct","noi","dec"],e=["ianuarie","februarie","martie","aprilie","mai","iunie","iulie","august","septembrie","octombrie","noiembrie","decembrie"],o=["du","lu","ma","mi","jo","vi","s\xe2"],t=["dum","lun","mar","mie","joi","vin","s\xe2m"],i=["duminic\u0103","luni","mar\u021bi","miercuri","joi","vineri","s\xe2mb\u0103ta"],a=["AM","PM"],c=["am","pm"],s=["a.m.","p.m."],m={MMM:function(e){return n[e.getMonth()]},MMMM:function(n){return e[n.getMonth()]},dd:function(n){return o[n.getDay()]},ddd:function(n){return t[n.getDay()]},dddd:function(n){return i[n.getDay()]},A:function(n){return n.getHours()/12>=1?a[1]:a[0]},a:function(n){return n.getHours()/12>=1?c[1]:c[0]},aa:function(n){return n.getHours()/12>=1?s[1]:s[0]}};return["M","D","DDD","d","Q","W"].forEach(function(n){m[n+"o"]=function(e,o){return r(o[n](e))}}),{formatters:m,formattingTokensRegExp:u(m)}}function r(n){return n.toString()}var u=o(346);n.exports=t},699:function(n,e,o){var t=o(657),r=o(658);n.exports={distanceInWords:t(),format:r()}}});