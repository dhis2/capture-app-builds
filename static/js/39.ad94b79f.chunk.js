(this["webpackJsonp@dhis2/app-shell"]=this["webpackJsonp@dhis2/app-shell"]||[]).push([[39,68],{179:function(n,t){var r=["M","MM","Q","D","DD","DDD","DDDD","d","E","W","WW","YY","YYYY","GG","GGGG","H","HH","h","hh","m","mm","s","ss","S","SS","SSS","Z","ZZ","X","x"];n.exports=function(n){var t=[];for(var e in n)n.hasOwnProperty(e)&&t.push(e);var o=r.concat(t).sort().reverse();return new RegExp("(\\[[^\\[]*\\])|(\\\\)?("+o.join("|")+"|.)","g")}},405:function(n,t,r){var e=r(179);n.exports=function(){var n=["Jan","Feb","M\xe4r","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"],t=["Januar","Februar","M\xe4rz","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],r=["So","Mo","Di","Mi","Do","Fr","Sa"],o=["Son","Mon","Die","Mit","Don","Fre","Sam"],u=["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"],a=["AM","PM"],i=["am","pm"],s=["a.m.","p.m."],D={MMM:function(t){return n[t.getMonth()]},MMMM:function(n){return t[n.getMonth()]},dd:function(n){return r[n.getDay()]},ddd:function(n){return o[n.getDay()]},dddd:function(n){return u[n.getDay()]},A:function(n){return n.getHours()/12>=1?a[1]:a[0]},a:function(n){return n.getHours()/12>=1?i[1]:i[0]},aa:function(n){return n.getHours()/12>=1?s[1]:s[0]}};return["M","D","DDD","d","Q","W"].forEach((function(n){D[n+"o"]=function(t,r){return r[n](t)+"."}})),{formatters:D,formattingTokensRegExp:e(D)}}}}]);