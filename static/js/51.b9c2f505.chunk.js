(this["webpackJsonp@dhis2/app-shell"]=this["webpackJsonp@dhis2/app-shell"]||[]).push([[51,68],{196:function(n,e){var r=["M","MM","Q","D","DD","DDD","DDDD","d","E","W","WW","YY","YYYY","GG","GGGG","H","HH","h","hh","m","mm","s","ss","S","SS","SSS","Z","ZZ","X","x"];n.exports=function(n){var e=[];for(var t in n)n.hasOwnProperty(t)&&e.push(t);var o=r.concat(e).sort().reverse();return new RegExp("(\\[[^\\[]*\\])|(\\\\)?("+o.join("|")+"|.)","g")}},464:function(n,e,r){var t=r(196);n.exports=function(){var n=["gen","feb","mar","apr","mag","giu","lug","ago","set","ott","nov","dic"],e=["gennaio","febbraio","marzo","aprile","maggio","giugno","luglio","agosto","settembre","ottobre","novembre","dicembre"],r=["do","lu","ma","me","gi","ve","sa"],o=["dom","lun","mar","mer","gio","ven","sab"],a=["domenica","luned\xec","marted\xec","mercoled\xec","gioved\xec","venerd\xec","sabato"],u=["AM","PM"],i=["am","pm"],s=["a.m.","p.m."],g={MMM:function(e){return n[e.getMonth()]},MMMM:function(n){return e[n.getMonth()]},dd:function(n){return r[n.getDay()]},ddd:function(n){return o[n.getDay()]},dddd:function(n){return a[n.getDay()]},A:function(n){return n.getHours()/12>=1?u[1]:u[0]},a:function(n){return n.getHours()/12>=1?i[1]:i[0]},aa:function(n){return n.getHours()/12>=1?s[1]:s[0]}};return["M","D","DDD","d","Q","W"].forEach((function(n){g[n+"o"]=function(e,r){return r[n](e)+"\xba"}})),{formatters:g,formattingTokensRegExp:t(g)}}}}]);