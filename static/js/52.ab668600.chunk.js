(this["webpackJsonpcapture-app"]=this["webpackJsonpcapture-app"]||[]).push([[52],{472:function(u,t,a){var n=a(254);u.exports=function(){var u=["tammi","helmi","maalis","huhti","touko","kes\xe4","hein\xe4","elo","syys","loka","marras","joulu"],t=["tammikuu","helmikuu","maaliskuu","huhtikuu","toukokuu","kes\xe4kuu","hein\xe4kuu","elokuu","syyskuu","lokakuu","marraskuu","joulukuu"],a=["su","ma","ti","ke","to","pe","la"],i=["sunnuntai","maanantai","tiistai","keskiviikko","torstai","perjantai","lauantai"];function o(u){return u.getHours()<12?"AP":"IP"}var e={MMM:function(t){return u[t.getMonth()]},MMMM:function(u){return t[u.getMonth()]},dd:function(u){return a[u.getDay()]},ddd:function(u){return a[u.getDay()]},dddd:function(u){return i[u.getDay()]},A:o,a:o,aa:o};return["M","D","DDD","d","Q","W"].forEach((function(u){e[u+"o"]=function(t,a){return a[u](t).toString()+"."}})),{formatters:e,formattingTokensRegExp:n(e)}}}}]);