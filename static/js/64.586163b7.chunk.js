(this["webpackJsonpcapture-app"]=this["webpackJsonpcapture-app"]||[]).push([[64],{483:function(n,r,t){var a=t(252);n.exports=function(){var n=["jan","feb","mar","apr","ma\xed","j\xfan","j\xfal","\xe1g\xfa","sep","okt","n\xf3v","des"],r=["jan\xfaar","febr\xfaar","mars","apr\xedl","ma\xed","j\xfan\xed","j\xfal\xed","\xe1g\xfast","september","okt\xf3ber","n\xf3vember","desember"],t=["su","m\xe1","\xfer","mi","fi","f\xf6","la"],e=["sun","m\xe1n","\xferi","mi\xf0","fim","f\xf6s","lau"],u=["sunnudaginn","m\xe1nudaginn","\xferi\xf0judaginn","mi\xf0vikudaginn","fimmtudaginn","f\xf6studaginn","laugardaginn"],i=["AM","PM"],o=["am","pm"],f=["a.m.","p.m."],m={MMM:function(r){return n[r.getMonth()]},MMMM:function(n){return r[n.getMonth()]},dd:function(n){return t[n.getDay()]},ddd:function(n){return e[n.getDay()]},dddd:function(n){return u[n.getDay()]},A:function(n){return n.getHours()/12>=1?i[1]:i[0]},a:function(n){return n.getHours()/12>=1?o[1]:o[0]},aa:function(n){return n.getHours()/12>=1?f[1]:f[0]}};return["M","D","DDD","d","Q","W"].forEach((function(n){m[n+"o"]=function(r,t){return""+t[n](r)}})),{formatters:m,formattingTokensRegExp:a(m)}}}}]);