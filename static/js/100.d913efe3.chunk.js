(this["webpackJsonp@dhis2/app-shell"]=this["webpackJsonp@dhis2/app-shell"]||[]).push([[100],{443:function(a,e){a.exports=function(){var a={lessThanXSeconds:{one:"bir saniyeden az",other:"{{count}} saniyeden az"},xSeconds:{one:"1 saniye",other:"{{count}} saniye"},halfAMinute:"yar\u0131m dakika",lessThanXMinutes:{one:"bir dakikadan az",other:"{{count}} dakikadan az"},xMinutes:{one:"1 dakika",other:"{{count}} dakika"},aboutXHours:{one:"yakla\u015f\u0131k 1 saat",other:"yakla\u015f\u0131k {{count}} saat"},xHours:{one:"1 saat",other:"{{count}} saat"},xDays:{one:"1 g\xfcn",other:"{{count}} g\xfcn"},aboutXMonths:{one:"yakla\u015f\u0131k 1 ay",other:"yakla\u015f\u0131k {{count}} ay"},xMonths:{one:"1 ay",other:"{{count}} ay"},aboutXYears:{one:"yakla\u015f\u0131k 1 y\u0131l",other:"yakla\u015f\u0131k {{count}} y\u0131l"},xYears:{one:"1 y\u0131l",other:"{{count}} y\u0131l"},overXYears:{one:"1 y\u0131ldan fazla",other:"{{count}} y\u0131ldan fazla"},almostXYears:{one:"neredeyse 1 y\u0131l",other:"neredeyse {{count}} y\u0131l"}},e=["lessThanXSeconds","lessThanXMinutes","overXYears"];return{localize:function(n,o,t){var s;if(t=t||{},s="string"===typeof a[n]?a[n]:1===o?a[n].one:a[n].other.replace("{{count}}",o),t.addSuffix){var r="";return e.indexOf(n)>-1&&(r=" bir s\xfcre"),t.comparison>0?s+r+" i\xe7inde":s+r+" \xf6nce"}return s}}}}}]);