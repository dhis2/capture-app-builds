(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{545:function(t,n,r){var e=r(293);t.exports=function(){var t=["Jan","Feb","M\xe1r","\xc1pr","M\xe1j","J\xfan","J\xfal","Aug","Sze","Okt","Nov","Dec"],n=["Janu\xe1r","Febru\xe1r","M\xe1rcius","\xc1prilis","M\xe1jus","J\xfanius","J\xfalius","Augusztus","Szeptember","Okt\xf3ber","November","December"],r=["Va","H\xe9","Ke","Sze","Cs","P\xe9","Szo"],u=["Vas","H\xe9t","Ked","Sze","Cs\xfc","P\xe9n","Szo"],o=["Vas\xe1rnap","H\xe9tf\u0151","Kedd","Szerda","Cs\xfct\xf6rt\xf6k","P\xe9ntek","Szombat"],s=["DE","DU"],a=["de","du"],c=["d\xe9lel\u0151tt","d\xe9lut\xe1n"],i={MMM:function(n){return t[n.getMonth()]},MMMM:function(t){return n[t.getMonth()]},dd:function(t){return r[t.getDay()]},ddd:function(t){return u[t.getDay()]},dddd:function(t){return o[t.getDay()]},A:function(t){return t.getHours()/12>=1?s[1]:s[0]},a:function(t){return t.getHours()/12>=1?a[1]:a[0]},aa:function(t){return t.getHours()/12>=1?c[1]:c[0]}};return["M","D","DDD","d","Q","W"].forEach(function(t){i[t+"o"]=function(n,r){return function(t){var n=t%100;if(n>20||n<10)switch(n%10){case 1:return t+"st";case 2:return t+"nd";case 3:return t+"rd"}return t+"th"}(r[t](n))}}),{formatters:i,formattingTokensRegExp:e(i)}}}}]);