(this["webpackJsonp@dhis2/app-shell"]=this["webpackJsonp@dhis2/app-shell"]||[]).push([[36,68],{197:function(e,r){var n=["M","MM","Q","D","DD","DDD","DDDD","d","E","W","WW","YY","YYYY","GG","GGGG","H","HH","h","hh","m","mm","s","ss","S","SS","SSS","Z","ZZ","X","x"];e.exports=function(e){var r=[];for(var t in e)e.hasOwnProperty(t)&&r.push(t);var s=n.concat(r).sort().reverse();return new RegExp("(\\[[^\\[]*\\])|(\\\\)?("+s.join("|")+"|.)","g")}},422:function(e,r,n){var t=n(197);e.exports=function(){var e=["gen","feb","mar","abr","mai","jun","jul","ago","set","oct","nov","des"],r=["gener","febrer","mar\xe7","abril","maig","juny","juliol","agost","setembre","octobre","novembre","desembre"],n=["dg","dl","dt","dc","dj","dv","ds"],s=["dge","dls","dts","dcs","djs","dvs","dss"],u=["diumenge","dilluns","dimarts","dimecres","dijous","divendres","dissabte"],o=["AM","PM"],a=["am","pm"],d=["a.m.","p.m."],i={MMM:function(r){return e[r.getMonth()]},MMMM:function(e){return r[e.getMonth()]},dd:function(e){return n[e.getDay()]},ddd:function(e){return s[e.getDay()]},dddd:function(e){return u[e.getDay()]},A:function(e){return e.getHours()/12>=1?o[1]:o[0]},a:function(e){return e.getHours()/12>=1?a[1]:a[0]},aa:function(e){return e.getHours()/12>=1?d[1]:d[0]}};return["M","D","DDD","d","Q","W"].forEach((function(e){i[e+"o"]=function(r,n){return function(e){switch(e){case 1:return"1r";case 2:return"2n";case 3:return"3r";case 4:return"4t";default:return e+"\xe8"}}(n[e](r))}})),{formatters:i,formattingTokensRegExp:t(i)}}}}]);