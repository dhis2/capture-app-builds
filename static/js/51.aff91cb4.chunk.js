(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{536:function(u,n){u.exports=function(){function u(u){return u.replace(/sekuntia?/,"sekunnin")}function n(u){return u.replace(/minuuttia?/,"minuutin")}function e(u){return u.replace(/tuntia?/,"tunnin")}function t(u){return u.replace(/(kuukausi|kuukautta)/,"kuukauden")}function o(u){return u.replace(/(vuosi|vuotta)/,"vuoden")}var i={lessThanXSeconds:{one:"alle sekunti",other:"alle {{count}} sekuntia",futureTense:u},xSeconds:{one:"sekunti",other:"{{count}} sekuntia",futureTense:u},halfAMinute:{one:"puoli minuuttia",other:"puoli minuuttia",futureTense:function(u){return"puolen minuutin"}},lessThanXMinutes:{one:"alle minuutti",other:"alle {{count}} minuuttia",futureTense:n},xMinutes:{one:"minuutti",other:"{{count}} minuuttia",futureTense:n},aboutXHours:{one:"noin tunti",other:"noin {{count}} tuntia",futureTense:e},xHours:{one:"tunti",other:"{{count}} tuntia",futureTense:e},xDays:{one:"p\xe4iv\xe4",other:"{{count}} p\xe4iv\xe4\xe4",futureTense:function(u){return u.replace(/p\xe4iv\xe4\xe4?/,"p\xe4iv\xe4n")}},aboutXMonths:{one:"noin kuukausi",other:"noin {{count}} kuukautta",futureTense:t},xMonths:{one:"kuukausi",other:"{{count}} kuukautta",futureTense:t},aboutXYears:{one:"noin vuosi",other:"noin {{count}} vuotta",futureTense:o},xYears:{one:"vuosi",other:"{{count}} vuotta",futureTense:o},overXYears:{one:"yli vuosi",other:"yli {{count}} vuotta",futureTense:o},almostXYears:{one:"l\xe4hes vuosi",other:"l\xe4hes {{count}} vuotta",futureTense:o}};return{localize:function(u,n,e){e=e||{};var t=i[u],o=1===n?t.one:t.other.replace("{{count}}",n);return e.addSuffix?e.comparison>0?t.futureTense(o)+" kuluttua":o+" sitten":o}}}}}]);