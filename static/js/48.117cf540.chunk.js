(this["webpackJsonpcapture-app"]=this["webpackJsonpcapture-app"]||[]).push([[48],{468:function(t,n,o){var r=o(254);t.exports=function(){var t=["jan","feb","mar","apr","maj","jun","jul","a\u016dg","sep","okt","nov","dec"],n=["januaro","februaro","marto","aprilo","majo","junio","julio","a\u016dgusto","septembro","oktobro","novembro","decembro"],o=["di","lu","ma","me","\u0135a","ve","sa"],e=["dim","lun","mar","mer","\u0135a\u016d","ven","sab"],a=["diman\u0109o","lundo","mardo","merkredo","\u0135a\u016ddo","vendredo","sabato"],u=["A.T.M.","P.T.M."],d=["a.t.m.","p.t.m."],i=["anta\u016dtagmeze","posttagmeze"],m={MMM:function(n){return t[n.getMonth()]},MMMM:function(t){return n[t.getMonth()]},dd:function(t){return o[t.getDay()]},ddd:function(t){return e[t.getDay()]},dddd:function(t){return a[t.getDay()]},A:function(t){return t.getHours()/12>=1?u[1]:u[0]},a:function(t){return t.getHours()/12>=1?d[1]:d[0]},aa:function(t){return t.getHours()/12>=1?i[1]:i[0]}};return["M","D","DDD","d","Q","W"].forEach((function(t){m[t+"o"]=function(n,o){return o[t](n)+"-a"}})),{formatters:m,formattingTokensRegExp:r(m)}}}}]);