(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{475:function(n,o){n.exports=function(){var n={lessThanXSeconds:{one:"moins d\u2019une seconde",other:"moins de {{count}} secondes"},xSeconds:{one:"1 seconde",other:"{{count}} secondes"},halfAMinute:"30 secondes",lessThanXMinutes:{one:"moins d\u2019une minute",other:"moins de {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"environ 1 heure",other:"environ {{count}} heures"},xHours:{one:"1 heure",other:"{{count}} heures"},xDays:{one:"1 jour",other:"{{count}} jours"},aboutXMonths:{one:"environ 1 mois",other:"environ {{count}} mois"},xMonths:{one:"1 mois",other:"{{count}} mois"},aboutXYears:{one:"environ 1 an",other:"environ {{count}} ans"},xYears:{one:"1 an",other:"{{count}} ans"},overXYears:{one:"plus d\u2019un an",other:"plus de {{count}} ans"},almostXYears:{one:"presqu\u2019un an",other:"presque {{count}} ans"}};return{localize:function(o,e,s){var t;return s=s||{},t="string"===typeof n[o]?n[o]:1===e?n[o].one:n[o].other.replace("{{count}}",e),s.addSuffix?s.comparison>0?"dans "+t:"il y a "+t:t}}}}}]);