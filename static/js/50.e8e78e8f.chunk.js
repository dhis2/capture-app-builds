(this["webpackJsonpcapture-app"]=this["webpackJsonpcapture-app"]||[]).push([[50],{470:function(e,n,r){var t=r(258);e.exports=function(){var e=["ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic"],n=["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"],r=["do","lu","ma","mi","ju","vi","sa"],o=["dom","lun","mar","mi\xe9","jue","vie","s\xe1b"],u=["domingo","lunes","martes","mi\xe9rcoles","jueves","viernes","s\xe1bado"],a=["AM","PM"],i=["am","pm"],c=["a.m.","p.m."],s={MMM:function(n){return e[n.getMonth()]},MMMM:function(e){return n[e.getMonth()]},dd:function(e){return r[e.getDay()]},ddd:function(e){return o[e.getDay()]},dddd:function(e){return u[e.getDay()]},A:function(e){return e.getHours()/12>=1?a[1]:a[0]},a:function(e){return e.getHours()/12>=1?i[1]:i[0]},aa:function(e){return e.getHours()/12>=1?c[1]:c[0]}};return["M","D","DDD","d","Q","W"].forEach((function(e){s[e+"o"]=function(n,r){return r[e](n)+"\xba"}})),{formatters:s,formattingTokensRegExp:t(s)}}}}]);