(this["webpackJsonpcapture-app"]=this["webpackJsonpcapture-app"]||[]).push([[80],{505:function(e,t,r){var n=r(252);e.exports=function(){var e=["jan","fev","mar","abr","mai","jun","jul","ago","set","out","nov","dez"],t=["janeiro","fevereiro","mar\xe7o","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"],r=["do","se","te","qa","qi","se","sa"],o=["dom","seg","ter","qua","qui","sex","s\xe1b"],a=["domingo","segunda-feira","ter\xe7a-feira","quarta-feira","quinta-feira","sexta-feira","s\xe1bado"],u=["AM","PM"],i=["am","pm"],s=["a.m.","p.m."],f={MMM:function(t){return e[t.getMonth()]},MMMM:function(e){return t[e.getMonth()]},dd:function(e){return r[e.getDay()]},ddd:function(e){return o[e.getDay()]},dddd:function(e){return a[e.getDay()]},A:function(e){return e.getHours()/12>=1?u[1]:u[0]},a:function(e){return e.getHours()/12>=1?i[1]:i[0]},aa:function(e){return e.getHours()/12>=1?s[1]:s[0]}};return["M","D","DDD","d","Q","W"].forEach((function(e){f[e+"o"]=function(t,r){return r[e](t)+"\xba"}})),{formatters:f,formattingTokensRegExp:n(f)}}}}]);