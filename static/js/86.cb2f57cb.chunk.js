(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{506:function(n,t,r){var e=r(258);n.exports=function(){var n=["jan","feb","mar","apr","m\xe1j","j\xfan","j\xfal","aug","sep","okt","nov","dec"],t=["janu\xe1r","febru\xe1r","marec","apr\xedl","m\xe1j","j\xfan","j\xfal","august","september","okt\xf3ber","november","december"],r=["ne","po","ut","st","\u0161t","pi","so"],o=["ne\u010f","pon","uto","str","\u0161tv","pia","sob"],u=["nede\u013ea","pondelok","utorok","streda","\u0161tvrtok","piatok","sobota"],a=["AM","PM"],p=["am","pm"],c=["a.m.","p.m."],i={MMM:function(t){return n[t.getMonth()]},MMMM:function(n){return t[n.getMonth()]},dd:function(n){return r[n.getDay()]},ddd:function(n){return o[n.getDay()]},dddd:function(n){return u[n.getDay()]},A:function(n){return n.getHours()/12>=1?a[1]:a[0]},a:function(n){return n.getHours()/12>=1?p[1]:p[0]},aa:function(n){return n.getHours()/12>=1?c[1]:c[0]}};return["M","D","DDD","d","Q","W"].forEach(function(n){i[n+"o"]=function(t,r){return r[n](t)+"."}}),{formatters:i,formattingTokensRegExp:e(i)}}}}]);