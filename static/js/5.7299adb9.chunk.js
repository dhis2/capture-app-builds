webpackJsonp([5,43,44],{615:function(e,t){function o(){function e(e,o,n){n=n||{};var r;return r="string"===typeof t[e]?t[e]:1===o?t[e].one:2===o?t[e].two:3===o||4===o?t[e].three.replace("{{count}}",o):t[e].other.replace("{{count}}",o),n.addSuffix?(r=r.replace(/(minut|sekund|ur)(a)/,"$1o"),"xMonths"===e&&(r=r.replace(/(mesec)(i)/,"$1e")),n.comparison>0?"\u010dez "+r:r+" nazaj"):r}var t={lessThanXSeconds:{one:"manj kot sekunda",two:"manj kot 2 sekundi",three:"manj kot {{count}} sekunde",other:"manj kot {{count}} sekund"},xSeconds:{one:"1 sekunda",two:"2 sekundi",three:"{{count}} sekunde",other:"{{count}} sekund"},halfAMinute:"pol minute",lessThanXMinutes:{one:"manj kot minuta",two:"manj kot 2 minuti",three:"manj kot {{count}} minute",other:"manj kot {{count}} minut"},xMinutes:{one:"1 minuta",two:"2 minuti",three:"{{count}} minute",other:"{{count}} minut"},aboutXHours:{one:"pribli\u017eno 1 ura",two:"pribli\u017eno 2 uri",three:"pribli\u017eno {{count}} ure",other:"pribli\u017eno {{count}} ur"},xHours:{one:"1 ura",two:"2 uri",three:"{{count}} ure",other:"{{count}} ur"},xDays:{one:"1 dan",two:"2 dni",three:"{{count}} dni",other:"{{count}} dni"},aboutXMonths:{one:"pribli\u017eno 1 mesec",two:"pribli\u017eno 2 meseca",three:"pribli\u017eno {{count}} mesece",other:"pribli\u017eno {{count}} mesecev"},xMonths:{one:"1 mesec",two:"2 meseca",three:"{{count}} meseci",other:"{{count}} mesecev"},aboutXYears:{one:"pribli\u017eno 1 leto",two:"pribli\u017eno 2 leti",three:"pribli\u017eno {{count}} leta",other:"pribli\u017eno {{count}} let"},xYears:{one:"1 leto",two:"2 leti",three:"{{count}} leta",other:"{{count}} let"},overXYears:{one:"ve\u010d kot 1 leto",two:"ve\u010d kot 2 leti",three:"ve\u010d kot {{count}} leta",other:"ve\u010d kot {{count}} let"},almostXYears:{one:"skoraj 1 leto",two:"skoraj 2 leti",three:"skoraj {{count}} leta",other:"skoraj {{count}} let"}};return{localize:e}}e.exports=o},616:function(e,t,o){function n(){var e=["jan","feb","mar","apr","maj","jun","jul","avg","sep","okt","nov","dec"],t=["januar","februar","marec","april","maj","junij","julij","avgust","september","oktober","november","december"],o=["ne","po","to","sr","\u010de","pe","so"],n=["ned","pon","tor","sre","\u010det","pet","sob"],a=["nedelja","ponedeljek","torek","sreda","\u010detrtek","petek","sobota"],i=["AM","PM"],c=["am","pm"],s=["a.m.","p.m."],l={MMM:function(t){return e[t.getMonth()]},MMMM:function(e){return t[e.getMonth()]},dd:function(e){return o[e.getDay()]},ddd:function(e){return n[e.getDay()]},dddd:function(e){return a[e.getDay()]},A:function(e){return e.getHours()/12>=1?i[1]:i[0]},a:function(e){return e.getHours()/12>=1?c[1]:c[0]},aa:function(e){return e.getHours()/12>=1?s[1]:s[0]}};return["M","D","DDD","d","Q","W"].forEach(function(e){l[e+"o"]=function(t,o){return r(o[e](t))}}),{formatters:l,formattingTokensRegExp:u(l)}}function r(e){return e+"."}var u=o(303);e.exports=n},654:function(e,t,o){var n=o(615),r=o(616);e.exports={distanceInWords:n(),format:r()}}});