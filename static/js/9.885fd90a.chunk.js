webpackJsonp([9,51,52],{653:function(o,e){function n(){function o(o,n,t){t=t||{};var a;return a="string"===typeof e[o]?e[o]:1===n?e[o].one:e[o].other.replace("{{count}}",n),t.addSuffix?t.comparison>0?"daqui a "+a:"h\xe1 "+a:a}var e={lessThanXSeconds:{one:"menos de um segundo",other:"menos de {{count}} segundos"},xSeconds:{one:"1 segundo",other:"{{count}} segundos"},halfAMinute:"meio minuto",lessThanXMinutes:{one:"menos de um minuto",other:"menos de {{count}} minutos"},xMinutes:{one:"1 minuto",other:"{{count}} minutos"},aboutXHours:{one:"aproximadamente 1 hora",other:"aproximadamente {{count}} horas"},xHours:{one:"1 hora",other:"{{count}} horas"},xDays:{one:"1 dia",other:"{{count}} dias"},aboutXMonths:{one:"aproximadamente 1 m\xeas",other:"aproximadamente {{count}} meses"},xMonths:{one:"1 m\xeas",other:"{{count}} meses"},aboutXYears:{one:"aproximadamente 1 ano",other:"aproximadamente {{count}} anos"},xYears:{one:"1 ano",other:"{{count}} anos"},overXYears:{one:"mais de 1 ano",other:"mais de {{count}} anos"},almostXYears:{one:"quase 1 ano",other:"quase {{count}} anos"}};return{localize:o}}o.exports=n},654:function(o,e,n){function t(){var o=["jan","fev","mar","abr","mai","jun","jul","ago","set","out","nov","dez"],e=["janeiro","fevereiro","mar\xe7o","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"],n=["do","se","te","qa","qi","se","sa"],t=["dom","seg","ter","qua","qui","sex","s\xe1b"],u=["domingo","segunda-feira","ter\xe7a-feira","quarta-feira","quinta-feira","sexta-feira","s\xe1bado"],s=["AM","PM"],i=["am","pm"],m=["a.m.","p.m."],d={MMM:function(e){return o[e.getMonth()]},MMMM:function(o){return e[o.getMonth()]},dd:function(o){return n[o.getDay()]},ddd:function(o){return t[o.getDay()]},dddd:function(o){return u[o.getDay()]},A:function(o){return o.getHours()/12>=1?s[1]:s[0]},a:function(o){return o.getHours()/12>=1?i[1]:i[0]},aa:function(o){return o.getHours()/12>=1?m[1]:m[0]}};return["M","D","DDD","d","Q","W"].forEach(function(o){d[o+"o"]=function(e,n){return a(n[o](e))}}),{formatters:d,formattingTokensRegExp:r(d)}}function a(o){return o+"\xba"}var r=n(344);o.exports=t},696:function(o,e,n){var t=n(653),a=n(654);o.exports={distanceInWords:t(),format:a()}}});