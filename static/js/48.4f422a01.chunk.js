(window.webpackJsonp=window.webpackJsonp||[]).push([[48,68],{438:function(n,r){var t=["M","MM","Q","D","DD","DDD","DDDD","d","E","W","WW","YY","YYYY","GG","GGGG","H","HH","h","hh","m","mm","s","ss","S","SS","SSS","Z","ZZ","X","x"];n.exports=function(n){var r=[];for(var e in n)n.hasOwnProperty(e)&&r.push(e);var u=t.concat(r).sort().reverse();return new RegExp("(\\[[^\\[]*\\])|(\\\\)?("+u.join("|")+"|.)","g")}},468:function(n,r,t){var e=t(438);n.exports=function(){var n=["Jan","Feb","M\xe1r","\xc1pr","M\xe1j","J\xfan","J\xfal","Aug","Sze","Okt","Nov","Dec"],r=["Janu\xe1r","Febru\xe1r","M\xe1rcius","\xc1prilis","M\xe1jus","J\xfanius","J\xfalius","Augusztus","Szeptember","Okt\xf3ber","November","December"],t=["Va","H\xe9","Ke","Sze","Cs","P\xe9","Szo"],u=["Vas","H\xe9t","Ked","Sze","Cs\xfc","P\xe9n","Szo"],o=["Vas\xe1rnap","H\xe9tf\u0151","Kedd","Szerda","Cs\xfct\xf6rt\xf6k","P\xe9ntek","Szombat"],s=["DE","DU"],a=["de","du"],c=["d\xe9lel\u0151tt","d\xe9lut\xe1n"],i={MMM:function(r){return n[r.getMonth()]},MMMM:function(n){return r[n.getMonth()]},dd:function(n){return t[n.getDay()]},ddd:function(n){return u[n.getDay()]},dddd:function(n){return o[n.getDay()]},A:function(n){return n.getHours()/12>=1?s[1]:s[0]},a:function(n){return n.getHours()/12>=1?a[1]:a[0]},aa:function(n){return n.getHours()/12>=1?c[1]:c[0]}};return["M","D","DDD","d","Q","W"].forEach(function(n){i[n+"o"]=function(r,t){return function(n){var r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"}(t[n](r))}}),{formatters:i,formattingTokensRegExp:e(i)}}}}]);