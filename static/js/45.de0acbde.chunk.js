webpackJsonp([45],{605:function(t,n,r){function e(){var t=["jan","feb","mar","apr","m\xe1j","j\xfan","j\xfal","aug","sep","okt","nov","dec"],n=["janu\xe1r","febru\xe1r","marec","apr\xedl","m\xe1j","j\xfan","j\xfal","august","september","okt\xf3ber","november","december"],r=["ne","po","ut","st","\u0161t","pi","so"],e=["ne\u010f","pon","uto","str","\u0161tv","pia","sob"],a=["nede\u013ea","pondelok","utorok","streda","\u0161tvrtok","piatok","sobota"],c=["AM","PM"],f=["am","pm"],i=["a.m.","p.m."],p={MMM:function(n){return t[n.getMonth()]},MMMM:function(t){return n[t.getMonth()]},dd:function(t){return r[t.getDay()]},ddd:function(t){return e[t.getDay()]},dddd:function(t){return a[t.getDay()]},A:function(t){return t.getHours()/12>=1?c[1]:c[0]},a:function(t){return t.getHours()/12>=1?f[1]:f[0]},aa:function(t){return t.getHours()/12>=1?i[1]:i[0]}};return["M","D","DDD","d","Q","W"].forEach(function(t){p[t+"o"]=function(n,r){return o(r[t](n))}}),{formatters:p,formattingTokensRegExp:u(p)}}function o(t){return t+"."}var u=r(300);t.exports=e}});