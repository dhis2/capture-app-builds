(this["webpackJsonpcapture-app"]=this["webpackJsonpcapture-app"]||[]).push([[74],{499:function(n,t,r){var a=r(252);n.exports=function(){var n=["jan.","feb.","mars","april","mai","juni","juli","aug.","sep.","okt.","nov.","des."],t=["januar","februar","mars","april","mai","juni","juli","august","september","oktober","november","desember"],r=["s\xf8","ma","ti","on","to","fr","l\xf8"],e=["s\xf8.","ma.","ti.","on.","to.","fr.","l\xf8."],u=["s\xf8ndag","mandag","tirsdag","onsdag","torsdag","fredag","l\xf8rdag"],o=["AM","PM"],i=["am","pm"],s=["a.m.","p.m."],f={MMM:function(t){return n[t.getMonth()]},MMMM:function(n){return t[n.getMonth()]},dd:function(n){return r[n.getDay()]},ddd:function(n){return e[n.getDay()]},dddd:function(n){return u[n.getDay()]},A:function(n){return n.getHours()/12>=1?o[1]:o[0]},a:function(n){return n.getHours()/12>=1?i[1]:i[0]},aa:function(n){return n.getHours()/12>=1?s[1]:s[0]}};return["M","D","DDD","d","Q","W"].forEach((function(n){f[n+"o"]=function(t,r){return r[n](t)+"."}})),{formatters:f,formattingTokensRegExp:a(f)}}}}]);