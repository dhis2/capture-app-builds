(this["webpackJsonpcapture-app"]=this["webpackJsonpcapture-app"]||[]).push([[62],{481:function(e,t,n){var r=n(252);e.exports=function(){var e=["Jan","Feb","Mar","Apr","Mei","Jun","Jul","Agu","Sep","Okt","Nov","Des"],t=["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"],n=["Mi","Sn","Sl","Ra","Ka","Ju","Sa"],u=["Min","Sen","Sel","Rab","Kam","Jum","Sab"],a=["Minggu","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu"],i=["AM","PM"],o=["am","pm"],c=["a.m.","p.m."],s={MMM:function(t){return e[t.getMonth()]},MMMM:function(e){return t[e.getMonth()]},dd:function(e){return n[e.getDay()]},ddd:function(e){return u[e.getDay()]},dddd:function(e){return a[e.getDay()]},A:function(e){return e.getHours()/12>=1?i[1]:i[0]},a:function(e){return e.getHours()/12>=1?o[1]:o[0]},aa:function(e){return e.getHours()/12>=1?c[1]:c[0]}};return["M","D","DDD","d","Q","W"].forEach((function(e){s[e+"o"]=function(t,n){return function(e){switch(e){case 1:return"pertama";case 2:return"kedua";case 3:return"ketiga";default:return"ke-"+e}}(n[e](t))}})),{formatters:s,formattingTokensRegExp:r(s)}}}}]);