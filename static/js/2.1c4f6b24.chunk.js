webpackJsonp([2,37,38],{663:function(n,a){function e(){function n(n,t,r){r=r||{};var o;if(o="string"===typeof a[n]?a[n]:1===t?a[n].one:a[n].other.replace("{{count}}",t),r.addSuffix){var u="";return e.indexOf(n)>-1&&(u=" bir s\xfcre"),r.comparison>0?o+u+" i\xe7inde":o+u+" \xf6nce"}return o}var a={lessThanXSeconds:{one:"bir saniyeden az",other:"{{count}} saniyeden az"},xSeconds:{one:"1 saniye",other:"{{count}} saniye"},halfAMinute:"yar\u0131m dakika",lessThanXMinutes:{one:"bir dakikadan az",other:"{{count}} dakikadan az"},xMinutes:{one:"1 dakika",other:"{{count}} dakika"},aboutXHours:{one:"yakla\u015f\u0131k 1 saat",other:"yakla\u015f\u0131k {{count}} saat"},xHours:{one:"1 saat",other:"{{count}} saat"},xDays:{one:"1 g\xfcn",other:"{{count}} g\xfcn"},aboutXMonths:{one:"yakla\u015f\u0131k 1 ay",other:"yakla\u015f\u0131k {{count}} ay"},xMonths:{one:"1 ay",other:"{{count}} ay"},aboutXYears:{one:"yakla\u015f\u0131k 1 y\u0131l",other:"yakla\u015f\u0131k {{count}} y\u0131l"},xYears:{one:"1 y\u0131l",other:"{{count}} y\u0131l"},overXYears:{one:"1 y\u0131ldan fazla",other:"{{count}} y\u0131ldan fazla"},almostXYears:{one:"neredeyse 1 y\u0131l",other:"neredeyse {{count}} y\u0131l"}},e=["lessThanXSeconds","lessThanXMinutes","overXYears"];return{localize:n}}n.exports=e},664:function(n,a,e){function t(){var n=["Oca","\u015eub","Mar","Nis","May","Haz","Tem","A\u011fu","Eyl","Eki","Kas","Ara"],a=["Ocak","\u015eubat","Mart","Nisan","May\u0131s","Haziran","Temmuz","A\u011fustos","Eyl\xfcl","Ekim","Kas\u0131m","Aral\u0131k"],e=["Pz","Pt","Sa","\xc7a","Pe","Cu","Ct"],t=["Paz","Pts","Sal","\xc7ar","Per","Cum","Cts"],u=["Pazar","Pazartesi","Sal\u0131","\xc7ar\u015famba","Per\u015fembe","Cuma","Cumartesi"],i=["\xd6\xd6","\xd6S"],c=["\xf6\xf6","\xf6s"],s=["\xf6.\xf6.","\xf6.s."],y={MMM:function(a){return n[a.getMonth()]},MMMM:function(n){return a[n.getMonth()]},dd:function(n){return e[n.getDay()]},ddd:function(n){return t[n.getDay()]},dddd:function(n){return u[n.getDay()]},A:function(n){return n.getHours()/12>=1?i[1]:i[0]},a:function(n){return n.getHours()/12>=1?c[1]:c[0]},aa:function(n){return n.getHours()/12>=1?s[1]:s[0]}};return["M","D","DDD","d","Q","W"].forEach(function(n){y[n+"o"]=function(a,e){return r(e[n](a))}}),{formatters:y,formattingTokensRegExp:o(y)}}function r(n){var a={1:"'inci",2:"'inci",3:"'\xfcnc\xfc",4:"'\xfcnc\xfc",5:"'inci",6:"'\u0131nc\u0131",7:"'inci",8:"'inci",9:"'uncu",10:"'uncu",20:"'inci",30:"'uncu",50:"'inci",60:"'\u0131nc\u0131",70:"'inci",80:"'inci",90:"'\u0131nc\u0131",100:"'\xfcnc\xfc"};if(0===n)return"0'\u0131nc\u0131";var e=n%10,t=n%100-e,r=n>=100?100:null;return n+(a[e]||a[t]||a[r])}var o=e(343);n.exports=t},699:function(n,a,e){var t=e(663),r=e(664);n.exports={distanceInWords:t(),format:r()}}});