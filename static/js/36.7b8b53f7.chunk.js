(window.webpackJsonp=window.webpackJsonp||[]).push([[36,68],{438:function(n,r){var e=["M","MM","Q","D","DD","DDD","DDDD","d","E","W","WW","YY","YYYY","GG","GGGG","H","HH","h","hh","m","mm","s","ss","S","SS","SSS","Z","ZZ","X","x"];n.exports=function(n){var r=[];for(var t in n)n.hasOwnProperty(t)&&r.push(t);var o=e.concat(r).sort().reverse();return new RegExp("(\\[[^\\[]*\\])|(\\\\)?("+o.join("|")+"|.)","g")}},446:function(n,r,e){var t=e(438);n.exports=function(){var n=["gen","feb","mar","abr","mai","jun","jul","ago","set","oct","nov","des"],r=["gener","febrer","mar\xe7","abril","maig","juny","juliol","agost","setembre","octobre","novembre","desembre"],e=["dg","dl","dt","dc","dj","dv","ds"],o=["dge","dls","dts","dcs","djs","dvs","dss"],u=["diumenge","dilluns","dimarts","dimecres","dijous","divendres","dissabte"],s=["AM","PM"],d=["am","pm"],a=["a.m.","p.m."],i={MMM:function(r){return n[r.getMonth()]},MMMM:function(n){return r[n.getMonth()]},dd:function(n){return e[n.getDay()]},ddd:function(n){return o[n.getDay()]},dddd:function(n){return u[n.getDay()]},A:function(n){return n.getHours()/12>=1?s[1]:s[0]},a:function(n){return n.getHours()/12>=1?d[1]:d[0]},aa:function(n){return n.getHours()/12>=1?a[1]:a[0]}};return["M","D","DDD","d","Q","W"].forEach(function(n){i[n+"o"]=function(r,e){return function(n){switch(n){case 1:return"1r";case 2:return"2n";case 3:return"3r";case 4:return"4t";default:return n+"\xe8"}}(e[n](r))}}),{formatters:i,formattingTokensRegExp:t(i)}}}}]);