webpackJsonp([17,67,68],{637:function(n,t){function r(){function n(n,r,e){e=e||{};var u;return u="string"===typeof t[n]?t[n]:1===r?t[n].one:t[n].other.replace("{{count}}",r),e.addSuffix?e.comparison>0?"\xed "+u:u+" s\xed\xf0an":u}var t={lessThanXSeconds:{one:"minna en 1 sek\xfanda",other:"minna en {{count}} sek\xfandur"},xSeconds:{one:"1 sek\xfanda",other:"{{count}} sek\xfandur"},halfAMinute:"h\xe1lf m\xedn\xfata",lessThanXMinutes:{one:"minna en 1 m\xedn\xfata",other:"minna en {{count}} m\xedn\xfatur"},xMinutes:{one:"1 m\xedn\xfata",other:"{{count}} m\xedn\xfatur"},aboutXHours:{one:"u.\xfe.b. 1 klukkustund",other:"u.\xfe.b. {{count}} klukkustundir"},xHours:{one:"1 klukkustund",other:"{{count}} klukkustundir"},xDays:{one:"1 dagur",other:"{{count}} dagar"},aboutXMonths:{one:"u.\xfe.b. 1 m\xe1nu\xf0ur",other:"u.\xfe.b. {{count}} m\xe1nu\xf0ir"},xMonths:{one:"1 m\xe1nu\xf0ur",other:"{{count}} m\xe1nu\xf0ir"},aboutXYears:{one:"u.\xfe.b. 1 \xe1r",other:"u.\xfe.b. {{count}} \xe1r"},xYears:{one:"1 \xe1r",other:"{{count}} \xe1r"},overXYears:{one:"meira en 1 \xe1r",other:"meira en {{count}} \xe1r"},almostXYears:{one:"n\xe6stum 1 \xe1r",other:"n\xe6stum {{count}} \xe1r"}};return{localize:n}}n.exports=r},638:function(n,t,r){function e(){var n=["jan","feb","mar","apr","ma\xed","j\xfan","j\xfal","\xe1g\xfa","sep","okt","n\xf3v","des"],t=["jan\xfaar","febr\xfaar","mars","apr\xedl","ma\xed","j\xfan\xed","j\xfal\xed","\xe1g\xfast","september","okt\xf3ber","n\xf3vember","desember"],r=["su","m\xe1","\xfer","mi","fi","f\xf6","la"],e=["sun","m\xe1n","\xferi","mi\xf0","fim","f\xf6s","lau"],a=["sunnudaginn","m\xe1nudaginn","\xferi\xf0judaginn","mi\xf0vikudaginn","fimmtudaginn","f\xf6studaginn","laugardaginn"],s=["AM","PM"],i=["am","pm"],m=["a.m.","p.m."],c={MMM:function(t){return n[t.getMonth()]},MMMM:function(n){return t[n.getMonth()]},dd:function(n){return r[n.getDay()]},ddd:function(n){return e[n.getDay()]},dddd:function(n){return a[n.getDay()]},A:function(n){return n.getHours()/12>=1?s[1]:s[0]},a:function(n){return n.getHours()/12>=1?i[1]:i[0]},aa:function(n){return n.getHours()/12>=1?m[1]:m[0]}};return["M","D","DDD","d","Q","W"].forEach(function(n){c[n+"o"]=function(t,r){return u(r[n](t))}}),{formatters:c,formattingTokensRegExp:o(c)}}function u(n){return""+n}var o=r(344);n.exports=e},688:function(n,t,r){var e=r(637),u=r(638);n.exports={distanceInWords:e(),format:u()}}});