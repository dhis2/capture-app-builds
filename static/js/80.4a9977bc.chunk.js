webpackJsonp([80],{624:function(u,e){function n(){function u(u){return u.replace(/sekuntia?/,"sekunnin")}function e(u){return u.replace(/minuuttia?/,"minuutin")}function n(u){return u.replace(/tuntia?/,"tunnin")}function t(u){return u.replace(/p\xe4iv\xe4\xe4?/,"p\xe4iv\xe4n")}function o(u){return u.replace(/(kuukausi|kuukautta)/,"kuukauden")}function i(u){return u.replace(/(vuosi|vuotta)/,"vuoden")}function r(u,e,n){n=n||{};var t=a[u],o=1===e?t.one:t.other.replace("{{count}}",e);return n.addSuffix?n.comparison>0?t.futureTense(o)+" kuluttua":o+" sitten":o}var a={lessThanXSeconds:{one:"alle sekunti",other:"alle {{count}} sekuntia",futureTense:u},xSeconds:{one:"sekunti",other:"{{count}} sekuntia",futureTense:u},halfAMinute:{one:"puoli minuuttia",other:"puoli minuuttia",futureTense:function(u){return"puolen minuutin"}},lessThanXMinutes:{one:"alle minuutti",other:"alle {{count}} minuuttia",futureTense:e},xMinutes:{one:"minuutti",other:"{{count}} minuuttia",futureTense:e},aboutXHours:{one:"noin tunti",other:"noin {{count}} tuntia",futureTense:n},xHours:{one:"tunti",other:"{{count}} tuntia",futureTense:n},xDays:{one:"p\xe4iv\xe4",other:"{{count}} p\xe4iv\xe4\xe4",futureTense:t},aboutXMonths:{one:"noin kuukausi",other:"noin {{count}} kuukautta",futureTense:o},xMonths:{one:"kuukausi",other:"{{count}} kuukautta",futureTense:o},aboutXYears:{one:"noin vuosi",other:"noin {{count}} vuotta",futureTense:i},xYears:{one:"vuosi",other:"{{count}} vuotta",futureTense:i},overXYears:{one:"yli vuosi",other:"yli {{count}} vuotta",futureTense:i},almostXYears:{one:"l\xe4hes vuosi",other:"l\xe4hes {{count}} vuotta",futureTense:i}};return{localize:r}}u.exports=n}});