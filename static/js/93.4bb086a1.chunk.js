webpackJsonp([93],{509:function(e,n,r){function t(){var e=["gen","feb","mar","abr","mai","jun","jul","ago","set","oct","nov","des"],n=["gener","febrer","mar\xe7","abril","maig","juny","juliol","agost","setembre","octobre","novembre","desembre"],r=["dg","dl","dt","dc","dj","dv","ds"],t=["dge","dls","dts","dcs","djs","dvs","dss"],o=["diumenge","dilluns","dimarts","dimecres","dijous","divendres","dissabte"],s=["AM","PM"],a=["am","pm"],i=["a.m.","p.m."],c={MMM:function(n){return e[n.getMonth()]},MMMM:function(e){return n[e.getMonth()]},dd:function(e){return r[e.getDay()]},ddd:function(e){return t[e.getDay()]},dddd:function(e){return o[e.getDay()]},A:function(e){return e.getHours()/12>=1?s[1]:s[0]},a:function(e){return e.getHours()/12>=1?a[1]:a[0]},aa:function(e){return e.getHours()/12>=1?i[1]:i[0]}};return["M","D","DDD","d","Q","W"].forEach(function(e){c[e+"o"]=function(n,r){return u(r[e](n))}}),{formatters:c,formattingTokensRegExp:d(c)}}function u(e){switch(e){case 1:return"1r";case 2:return"2n";case 3:return"3r";case 4:return"4t";default:return e+"\xe8"}}var d=r(267);e.exports=t}});
//# sourceMappingURL=93.4bb086a1.chunk.js.map