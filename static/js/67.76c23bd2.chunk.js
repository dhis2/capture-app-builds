webpackJsonp([67],{519:function(n,r,t){function u(){var n=["jan","feb","mar","apr","ma\xed","j\xfan","j\xfal","\xe1g\xfa","sep","okt","n\xf3v","des"],r=["jan\xfaar","febr\xfaar","mars","apr\xedl","ma\xed","j\xfan\xed","j\xfal\xed","\xe1g\xfast","september","okt\xf3ber","n\xf3vember","desember"],t=["su","m\xe1","\xfer","mi","fi","f\xf6","la"],u=["sun","m\xe1n","\xferi","mi\xf0","fim","f\xf6s","lau"],i=["sunnudaginn","m\xe1nudaginn","\xferi\xf0judaginn","mi\xf0vikudaginn","fimmtudaginn","f\xf6studaginn","laugardaginn"],o=["AM","PM"],f=["am","pm"],m=["a.m.","p.m."],g={MMM:function(r){return n[r.getMonth()]},MMMM:function(n){return r[n.getMonth()]},dd:function(n){return t[n.getDay()]},ddd:function(n){return u[n.getDay()]},dddd:function(n){return i[n.getDay()]},A:function(n){return n.getHours()/12>=1?o[1]:o[0]},a:function(n){return n.getHours()/12>=1?f[1]:f[0]},aa:function(n){return n.getHours()/12>=1?m[1]:m[0]}};return["M","D","DDD","d","Q","W"].forEach(function(n){g[n+"o"]=function(r,t){return e(t[n](r))}}),{formatters:g,formattingTokensRegExp:a(g)}}function e(n){return""+n}var a=t(256);n.exports=u}});
//# sourceMappingURL=67.76c23bd2.chunk.js.map