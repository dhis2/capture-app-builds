(this["webpackJsonpcapture-app"]=this["webpackJsonpcapture-app"]||[]).push([[38],{458:function(e,t,r){var n=r(253);e.exports=function(){var e=["gen","feb","mar","abr","mai","jun","jul","ago","set","oct","nov","des"],t=["gener","febrer","mar\xe7","abril","maig","juny","juliol","agost","setembre","octobre","novembre","desembre"],r=["dg","dl","dt","dc","dj","dv","ds"],u=["dge","dls","dts","dcs","djs","dvs","dss"],s=["diumenge","dilluns","dimarts","dimecres","dijous","divendres","dissabte"],d=["AM","PM"],o=["am","pm"],a=["a.m.","p.m."],c={MMM:function(t){return e[t.getMonth()]},MMMM:function(e){return t[e.getMonth()]},dd:function(e){return r[e.getDay()]},ddd:function(e){return u[e.getDay()]},dddd:function(e){return s[e.getDay()]},A:function(e){return e.getHours()/12>=1?d[1]:d[0]},a:function(e){return e.getHours()/12>=1?o[1]:o[0]},aa:function(e){return e.getHours()/12>=1?a[1]:a[0]}};return["M","D","DDD","d","Q","W"].forEach((function(e){c[e+"o"]=function(t,r){return function(e){switch(e){case 1:return"1r";case 2:return"2n";case 3:return"3r";case 4:return"4t";default:return e+"\xe8"}}(r[e](t))}})),{formatters:c,formattingTokensRegExp:n(c)}}}}]);