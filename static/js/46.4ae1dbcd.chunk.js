webpackJsonp([46],{540:function(u,t){function n(u,t){return 1===t?u.one:t>=2&&t<=4?u.twoFour:u.other}function o(u,t,o){var r=n(u,t);return(r[o]||r).replace("{{count}}",t)}function r(u){return["lessThan","about","over","almost"].filter(function(t){return!!u.match(new RegExp("^"+t))})[0]}function e(u){var t="";return"almost"===u&&(t="takmer"),"about"===u&&(t="pribli\u017ene"),t.length>0?t+" ":""}function a(u){var t="";return"lessThan"===u&&(t="menej ne\u017e"),"over"===u&&(t="viac ne\u017e"),t.length>0?t+" ":""}function c(u){return u.charAt(0).toLowerCase()+u.slice(1)}function i(){function u(u,n,i){i=i||{};var s=r(u)||"",m=c(u.substring(s.length)),l=t[m];return i.addSuffix?i.comparison>0?e(s)+"za "+a(s)+o(l,n,"future"):e(s)+"pred "+a(s)+o(l,n,"past"):e(s)+a(s)+o(l,n,"regular")}var t={xSeconds:{one:{regular:"sekunda",past:"sekundou",future:"sekundu"},twoFour:{regular:"{{count}} sekundy",past:"{{count}} sekundami",future:"{{count}} sekundy"},other:{regular:"{{count}} sek\xfand",past:"{{count}} sekundami",future:"{{count}} sek\xfand"}},halfAMinute:{other:{regular:"pol min\xfaty",past:"pol min\xfatou",future:"pol min\xfaty"}},xMinutes:{one:{regular:"min\xfata",past:"min\xfatou",future:"min\xfatu"},twoFour:{regular:"{{count}} min\xfaty",past:"{{count}} min\xfatami",future:"{{count}} min\xfaty"},other:{regular:"{{count}} min\xfat",past:"{{count}} min\xfatami",future:"{{count}} min\xfat"}},xHours:{one:{regular:"hodina",past:"hodinou",future:"hodinu"},twoFour:{regular:"{{count}} hodiny",past:"{{count}} hodinami",future:"{{count}} hodiny"},other:{regular:"{{count}} hod\xedn",past:"{{count}} hodinami",future:"{{count}} hod\xedn"}},xDays:{one:{regular:"de\u0148",past:"d\u0148om",future:"de\u0148"},twoFour:{regular:"{{count}} dni",past:"{{count}} d\u0148ami",future:"{{count}} dni"},other:{regular:"{{count}} dn\xed",past:"{{count}} d\u0148ami",future:"{{count}} dn\xed"}},xMonths:{one:{regular:"mesiac",past:"mesiacom",future:"mesiac"},twoFour:{regular:"{{count}} mesiace",past:"{{count}} mesiacmi",future:"{{count}} mesiace"},other:{regular:"{{count}} mesiacov",past:"{{count}} mesiacmi",future:"{{count}} mesiacov"}},xYears:{one:{regular:"rok",past:"rokom",future:"rok"},twoFour:{regular:"{{count}} roky",past:"{{count}} rokmi",future:"{{count}} roky"},other:{regular:"{{count}} rokov",past:"{{count}} rokmi",future:"{{count}} rokov"}}};return{localize:u}}u.exports=i}});
//# sourceMappingURL=46.4ae1dbcd.chunk.js.map