(this["webpackJsonp@dhis2/app-shell"]=this["webpackJsonp@dhis2/app-shell"]||[]).push([[58,68],{176:function(r,e){var n=["M","MM","Q","D","DD","DDD","DDDD","d","E","W","WW","YY","YYYY","GG","GGGG","H","HH","h","hh","m","mm","s","ss","S","SS","SSS","Z","ZZ","X","x"];r.exports=function(r){var e=[];for(var t in r)r.hasOwnProperty(t)&&e.push(t);var o=n.concat(e).sort().reverse();return new RegExp("(\\[[^\\[]*\\])|(\\\\)?("+o.join("|")+"|.)","g")}},408:function(r,e,n){var t=n(176);r.exports=function(){var r=["jan","fev","mar","abr","mai","jun","jul","ago","set","out","nov","dez"],e=["janeiro","fevereiro","mar\xe7o","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"],n=["do","se","te","qa","qi","se","sa"],o=["dom","seg","ter","qua","qui","sex","s\xe1b"],a=["domingo","segunda-feira","ter\xe7a-feira","quarta-feira","quinta-feira","sexta-feira","s\xe1bado"],u=["AM","PM"],i=["am","pm"],s=["a.m.","p.m."],f={MMM:function(e){return r[e.getMonth()]},MMMM:function(r){return e[r.getMonth()]},dd:function(r){return n[r.getDay()]},ddd:function(r){return o[r.getDay()]},dddd:function(r){return a[r.getDay()]},A:function(r){return r.getHours()/12>=1?u[1]:u[0]},a:function(r){return r.getHours()/12>=1?i[1]:i[0]},aa:function(r){return r.getHours()/12>=1?s[1]:s[0]}};return["M","D","DDD","d","Q","W"].forEach((function(r){f[r+"o"]=function(e,n){return n[r](e)+"\xba"}})),{formatters:f,formattingTokensRegExp:t(f)}}}}]);