(this["webpackJsonpcapture-app"]=this["webpackJsonpcapture-app"]||[]).push([[86],{510:function(t,n,r){var e=r(253);t.exports=function(){var t=["jan","feb","mar","apr","m\xe1j","j\xfan","j\xfal","aug","sep","okt","nov","dec"],n=["janu\xe1r","febru\xe1r","marec","apr\xedl","m\xe1j","j\xfan","j\xfal","august","september","okt\xf3ber","november","december"],r=["ne","po","ut","st","\u0161t","pi","so"],o=["ne\u010f","pon","uto","str","\u0161tv","pia","sob"],u=["nede\u013ea","pondelok","utorok","streda","\u0161tvrtok","piatok","sobota"],a=["AM","PM"],p=["am","pm"],c=["a.m.","p.m."],s={MMM:function(n){return t[n.getMonth()]},MMMM:function(t){return n[t.getMonth()]},dd:function(t){return r[t.getDay()]},ddd:function(t){return o[t.getDay()]},dddd:function(t){return u[t.getDay()]},A:function(t){return t.getHours()/12>=1?a[1]:a[0]},a:function(t){return t.getHours()/12>=1?p[1]:p[0]},aa:function(t){return t.getHours()/12>=1?c[1]:c[0]}};return["M","D","DDD","d","Q","W"].forEach((function(t){s[t+"o"]=function(n,r){return r[t](n)+"."}})),{formatters:s,formattingTokensRegExp:e(s)}}}}]);