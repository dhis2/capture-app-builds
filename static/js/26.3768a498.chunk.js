(window.webpackJsonp=window.webpackJsonp||[]).push([[26,85,86],{501:function(t,n){function u(t,n,u){var o=function(t,n){return 1===n?t.one:n>=2&&n<=4?t.twoFour:t.other}(t,n);return(o[u]||o).replace("{{count}}",n)}function o(t){var n="";return"almost"===t&&(n="takmer"),"about"===t&&(n="pribli\u017ene"),n.length>0?n+" ":""}function r(t){var n="";return"lessThan"===t&&(n="menej ne\u017e"),"over"===t&&(n="viac ne\u017e"),n.length>0?n+" ":""}t.exports=function(){var t={xSeconds:{one:{regular:"sekunda",past:"sekundou",future:"sekundu"},twoFour:{regular:"{{count}} sekundy",past:"{{count}} sekundami",future:"{{count}} sekundy"},other:{regular:"{{count}} sek\xfand",past:"{{count}} sekundami",future:"{{count}} sek\xfand"}},halfAMinute:{other:{regular:"pol min\xfaty",past:"pol min\xfatou",future:"pol min\xfaty"}},xMinutes:{one:{regular:"min\xfata",past:"min\xfatou",future:"min\xfatu"},twoFour:{regular:"{{count}} min\xfaty",past:"{{count}} min\xfatami",future:"{{count}} min\xfaty"},other:{regular:"{{count}} min\xfat",past:"{{count}} min\xfatami",future:"{{count}} min\xfat"}},xHours:{one:{regular:"hodina",past:"hodinou",future:"hodinu"},twoFour:{regular:"{{count}} hodiny",past:"{{count}} hodinami",future:"{{count}} hodiny"},other:{regular:"{{count}} hod\xedn",past:"{{count}} hodinami",future:"{{count}} hod\xedn"}},xDays:{one:{regular:"de\u0148",past:"d\u0148om",future:"de\u0148"},twoFour:{regular:"{{count}} dni",past:"{{count}} d\u0148ami",future:"{{count}} dni"},other:{regular:"{{count}} dn\xed",past:"{{count}} d\u0148ami",future:"{{count}} dn\xed"}},xMonths:{one:{regular:"mesiac",past:"mesiacom",future:"mesiac"},twoFour:{regular:"{{count}} mesiace",past:"{{count}} mesiacmi",future:"{{count}} mesiace"},other:{regular:"{{count}} mesiacov",past:"{{count}} mesiacmi",future:"{{count}} mesiacov"}},xYears:{one:{regular:"rok",past:"rokom",future:"rok"},twoFour:{regular:"{{count}} roky",past:"{{count}} rokmi",future:"{{count}} roky"},other:{regular:"{{count}} rokov",past:"{{count}} rokmi",future:"{{count}} rokov"}}};return{localize:function(n,e,a){a=a||{};var c,i=function(t){return["lessThan","about","over","almost"].filter(function(n){return!!t.match(new RegExp("^"+n))})[0]}(n)||"",s=(c=n.substring(i.length)).charAt(0).toLowerCase()+c.slice(1),m=t[s];return a.addSuffix?a.comparison>0?o(i)+"za "+r(i)+u(m,e,"future"):o(i)+"pred "+r(i)+u(m,e,"past"):o(i)+r(i)+u(m,e,"regular")}}}},502:function(t,n,u){var o=u(258);t.exports=function(){var t=["jan","feb","mar","apr","m\xe1j","j\xfan","j\xfal","aug","sep","okt","nov","dec"],n=["janu\xe1r","febru\xe1r","marec","apr\xedl","m\xe1j","j\xfan","j\xfal","august","september","okt\xf3ber","november","december"],u=["ne","po","ut","st","\u0161t","pi","so"],r=["ne\u010f","pon","uto","str","\u0161tv","pia","sob"],e=["nede\u013ea","pondelok","utorok","streda","\u0161tvrtok","piatok","sobota"],a=["AM","PM"],c=["am","pm"],i=["a.m.","p.m."],s={MMM:function(n){return t[n.getMonth()]},MMMM:function(t){return n[t.getMonth()]},dd:function(t){return u[t.getDay()]},ddd:function(t){return r[t.getDay()]},dddd:function(t){return e[t.getDay()]},A:function(t){return t.getHours()/12>=1?a[1]:a[0]},a:function(t){return t.getHours()/12>=1?c[1]:c[0]},aa:function(t){return t.getHours()/12>=1?i[1]:i[0]}};return["M","D","DDD","d","Q","W"].forEach(function(t){s[t+"o"]=function(n,u){return u[t](n)+"."}}),{formatters:s,formattingTokensRegExp:o(s)}}},541:function(t,n,u){var o=u(501),r=u(502);t.exports={distanceInWords:o(),format:r()}}}]);