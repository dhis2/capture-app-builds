webpackJsonp([29,91,92],{567:function(t,n){function u(t,n){return 1===n?t.one:n>=2&&n<=4?t.twoFour:t.other}function r(t,n,r){var o=u(t,n);return(o[r]||o).replace("{{count}}",n)}function o(t){return["lessThan","about","over","almost"].filter(function(n){return!!t.match(new RegExp("^"+n))})[0]}function e(t){var n="";return"almost"===t&&(n="skoro"),"about"===t&&(n="p\u0159ibli\u017en\u011b"),n.length>0?n+" ":""}function a(t){var n="";return"lessThan"===t&&(n="m\xe9n\u011b ne\u017e"),"over"===t&&(n="v\xedce ne\u017e"),n.length>0?n+" ":""}function c(t){return t.charAt(0).toLowerCase()+t.slice(1)}function i(){function t(t,u,i){i=i||{};var s=o(t)||"",f=c(t.substring(s.length)),d=n[f];return i.addSuffix?i.comparison>0?e(s)+"za "+a(s)+r(d,u,"future"):e(s)+"p\u0159ed "+a(s)+r(d,u,"past"):e(s)+a(s)+r(d,u,"regular")}var n={xSeconds:{one:{regular:"vte\u0159ina",past:"vte\u0159inou",future:"vte\u0159inu"},twoFour:{regular:"{{count}} vte\u0159iny",past:"{{count}} vte\u0159inami",future:"{{count}} vte\u0159iny"},other:{regular:"{{count}} vte\u0159in",past:"{{count}} vte\u0159inami",future:"{{count}} vte\u0159in"}},halfAMinute:{other:{regular:"p\u016fl minuty",past:"p\u016fl minutou",future:"p\u016fl minuty"}},xMinutes:{one:{regular:"minuta",past:"minutou",future:"minutu"},twoFour:{regular:"{{count}} minuty",past:"{{count}} minutami",future:"{{count}} minuty"},other:{regular:"{{count}} minut",past:"{{count}} minutami",future:"{{count}} minut"}},xHours:{one:{regular:"hodina",past:"hodinou",future:"hodinu"},twoFour:{regular:"{{count}} hodiny",past:"{{count}} hodinami",future:"{{count}} hodiny"},other:{regular:"{{count}} hodin",past:"{{count}} hodinami",future:"{{count}} hodin"}},xDays:{one:{regular:"den",past:"dnem",future:"den"},twoFour:{regular:"{{count}} dni",past:"{{count}} dny",future:"{{count}} dni"},other:{regular:"{{count}} dn\xed",past:"{{count}} dny",future:"{{count}} dn\xed"}},xMonths:{one:{regular:"m\u011bs\xedc",past:"m\u011bs\xedcem",future:"m\u011bs\xedc"},twoFour:{regular:"{{count}} m\u011bs\xedce",past:"{{count}} m\u011bs\xedci",future:"{{count}} m\u011bs\xedce"},other:{regular:"{{count}} m\u011bs\xedc\u016f",past:"{{count}} m\u011bs\xedci",future:"{{count}} m\u011bs\xedc\u016f"}},xYears:{one:{regular:"rok",past:"rokem",future:"rok"},twoFour:{regular:"{{count}} roky",past:"{{count}} roky",future:"{{count}} roky"},other:{regular:"{{count}} rok\u016f",past:"{{count}} roky",future:"{{count}} rok\u016f"}}};return{localize:t}}t.exports=i},568:function(t,n,u){function r(){var t=["led","\xfano","b\u0159e","dub","kv\u011b","\u010dvn","\u010dvc","srp","z\xe1\u0159","\u0159\xedj","lis","pro"],n=["leden","\xfanor","b\u0159ezen","duben","kv\u011bten","\u010derven","\u010dervenec","srpen","z\xe1\u0159\xed","\u0159\xedjen","listopad","prosinec"],u=["ne","po","\xfat","st","\u010dt","p\xe1","so"],r=["ned","pon","\xfate","st\u0159","\u010dtv","p\xe1t","sob"],a=["ned\u011ble","pond\u011bl\xed","\xfater\xfd","st\u0159eda","\u010dtvrtek","p\xe1tek","sobota"],c=["DOP.","ODP."],i=["dop.","odp."],s=["dopoledne","odpoledne"],f={MMM:function(n){return t[n.getMonth()]},MMMM:function(t){return n[t.getMonth()]},dd:function(t){return u[t.getDay()]},ddd:function(t){return r[t.getDay()]},dddd:function(t){return a[t.getDay()]},A:function(t){return t.getHours()/12>=1?c[1]:c[0]},a:function(t){return t.getHours()/12>=1?i[1]:i[0]},aa:function(t){return t.getHours()/12>=1?s[1]:s[0]}};return["M","D","DDD","d","Q","W"].forEach(function(t){f[t+"o"]=function(n,u){return o(u[t](n))}}),{formatters:f,formattingTokensRegExp:e(f)}}function o(t){return t+"."}var e=u(303);t.exports=r},630:function(t,n,u){var r=u(567),o=u(568);t.exports={distanceInWords:r(),format:o()}}});