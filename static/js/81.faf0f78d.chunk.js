webpackJsonp([81],{505:function(n,e,r){function o(){var n=["ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic"],e=["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"],r=["do","lu","ma","mi","ju","vi","sa"],o=["dom","lun","mar","mi\xe9","jue","vie","s\xe1b"],i=["domingo","lunes","martes","mi\xe9rcoles","jueves","viernes","s\xe1bado"],a=["AM","PM"],m=["am","pm"],c=["a.m.","p.m."],f={MMM:function(e){return n[e.getMonth()]},MMMM:function(n){return e[n.getMonth()]},dd:function(n){return r[n.getDay()]},ddd:function(n){return o[n.getDay()]},dddd:function(n){return i[n.getDay()]},A:function(n){return n.getHours()/12>=1?a[1]:a[0]},a:function(n){return n.getHours()/12>=1?m[1]:m[0]},aa:function(n){return n.getHours()/12>=1?c[1]:c[0]}};return["M","D","DDD","d","Q","W"].forEach(function(n){f[n+"o"]=function(e,r){return t(r[n](e))}}),{formatters:f,formattingTokensRegExp:u(f)}}function t(n){return n+"\xba"}var u=r(255);n.exports=o}});
//# sourceMappingURL=81.faf0f78d.chunk.js.map