webpackJsonp([79],{629:function(u,t,n){function a(){function u(u){return u.getHours()<12?"AP":"IP"}var t=["tammi","helmi","maalis","huhti","touko","kes\xe4","hein\xe4","elo","syys","loka","marras","joulu"],n=["tammikuu","helmikuu","maaliskuu","huhtikuu","toukokuu","kes\xe4kuu","hein\xe4kuu","elokuu","syyskuu","lokakuu","marraskuu","joulukuu"],a=["su","ma","ti","ke","to","pe","la"],o=["sunnuntai","maanantai","tiistai","keskiviikko","torstai","perjantai","lauantai"],e={MMM:function(u){return t[u.getMonth()]},MMMM:function(u){return n[u.getMonth()]},dd:function(u){return a[u.getDay()]},ddd:function(u){return a[u.getDay()]},dddd:function(u){return o[u.getDay()]},A:u,a:u,aa:u};return["M","D","DDD","d","Q","W"].forEach(function(u){e[u+"o"]=function(t,n){return n[u](t).toString()+"."}}),{formatters:e,formattingTokensRegExp:i(e)}}var i=n(345);u.exports=a}});