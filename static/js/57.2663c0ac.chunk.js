webpackJsonp([57],{650:function(n,r,t){function e(){var n=["jan.","feb.","mars","april","mai","juni","juli","aug.","sep.","okt.","nov.","des."],r=["januar","februar","mars","april","mai","juni","juli","august","september","oktober","november","desember"],t=["s\xf8","ma","ti","on","to","fr","l\xf8"],e=["s\xf8.","ma.","ti.","on.","to.","fr.","l\xf8."],u=["s\xf8ndag","mandag","tirsdag","onsdag","torsdag","fredag","l\xf8rdag"],i=["AM","PM"],f=["am","pm"],s=["a.m.","p.m."],d={MMM:function(r){return n[r.getMonth()]},MMMM:function(n){return r[n.getMonth()]},dd:function(n){return t[n.getDay()]},ddd:function(n){return e[n.getDay()]},dddd:function(n){return u[n.getDay()]},A:function(n){return n.getHours()/12>=1?i[1]:i[0]},a:function(n){return n.getHours()/12>=1?f[1]:f[0]},aa:function(n){return n.getHours()/12>=1?s[1]:s[0]}};return["M","D","DDD","d","Q","W"].forEach(function(n){d[n+"o"]=function(r,t){return a(t[n](r))}}),{formatters:d,formattingTokensRegExp:o(d)}}function a(n){return n+"."}var o=t(346);n.exports=e}});