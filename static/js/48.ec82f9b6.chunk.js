(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{475:function(n,o,t){var r=t(257);n.exports=function(){var n=["jan","feb","mar","apr","maj","jun","jul","a\u016dg","sep","okt","nov","dec"],o=["januaro","februaro","marto","aprilo","majo","junio","julio","a\u016dgusto","septembro","oktobro","novembro","decembro"],t=["di","lu","ma","me","\u0135a","ve","sa"],e=["dim","lun","mar","mer","\u0135a\u016d","ven","sab"],a=["diman\u0109o","lundo","mardo","merkredo","\u0135a\u016ddo","vendredo","sabato"],u=["A.T.M.","P.T.M."],d=["a.t.m.","p.t.m."],i=["anta\u016dtagmeze","posttagmeze"],m={MMM:function(o){return n[o.getMonth()]},MMMM:function(n){return o[n.getMonth()]},dd:function(n){return t[n.getDay()]},ddd:function(n){return e[n.getDay()]},dddd:function(n){return a[n.getDay()]},A:function(n){return n.getHours()/12>=1?u[1]:u[0]},a:function(n){return n.getHours()/12>=1?d[1]:d[0]},aa:function(n){return n.getHours()/12>=1?i[1]:i[0]}};return["M","D","DDD","d","Q","W"].forEach(function(n){m[n+"o"]=function(o,t){return t[n](o)+"-a"}}),{formatters:m,formattingTokensRegExp:r(m)}}}}]);