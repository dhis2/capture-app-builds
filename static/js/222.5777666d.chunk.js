(window.webpackJsonp=window.webpackJsonp||[]).push([[222],{1277:function(e,n,s){!function(e){"use strict";function n(e,n,s,a){var t=e+" ";switch(s){case"s":return n||a?"nekaj sekund":"nekaj sekundami";case"ss":return t+=1===e?n?"sekundo":"sekundi":2===e?n||a?"sekundi":"sekundah":e<5?n||a?"sekunde":"sekundah":"sekund";case"m":return n?"ena minuta":"eno minuto";case"mm":return t+=1===e?n?"minuta":"minuto":2===e?n||a?"minuti":"minutama":e<5?n||a?"minute":"minutami":n||a?"minut":"minutami";case"h":return n?"ena ura":"eno uro";case"hh":return t+=1===e?n?"ura":"uro":2===e?n||a?"uri":"urama":e<5?n||a?"ure":"urami":n||a?"ur":"urami";case"d":return n||a?"en dan":"enim dnem";case"dd":return t+=1===e?n||a?"dan":"dnem":2===e?n||a?"dni":"dnevoma":n||a?"dni":"dnevi";case"M":return n||a?"en mesec":"enim mesecem";case"MM":return t+=1===e?n||a?"mesec":"mesecem":2===e?n||a?"meseca":"mesecema":e<5?n||a?"mesece":"meseci":n||a?"mesecev":"meseci";case"y":return n||a?"eno leto":"enim letom";case"yy":return t+=1===e?n||a?"leto":"letom":2===e?n||a?"leti":"letoma":e<5?n||a?"leta":"leti":n||a?"let":"leti"}}e.defineLocale("sl",{months:"januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split("_"),monthsShort:"jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split("_"),monthsParseExact:!0,weekdays:"nedelja_ponedeljek_torek_sreda_\u010detrtek_petek_sobota".split("_"),weekdaysShort:"ned._pon._tor._sre._\u010det._pet._sob.".split("_"),weekdaysMin:"ne_po_to_sr_\u010de_pe_so".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd, D. MMMM YYYY H:mm"},calendar:{sameDay:"[danes ob] LT",nextDay:"[jutri ob] LT",nextWeek:function(){switch(this.day()){case 0:return"[v] [nedeljo] [ob] LT";case 3:return"[v] [sredo] [ob] LT";case 6:return"[v] [soboto] [ob] LT";case 1:case 2:case 4:case 5:return"[v] dddd [ob] LT"}},lastDay:"[v\u010deraj ob] LT",lastWeek:function(){switch(this.day()){case 0:return"[prej\u0161njo] [nedeljo] [ob] LT";case 3:return"[prej\u0161njo] [sredo] [ob] LT";case 6:return"[prej\u0161njo] [soboto] [ob] LT";case 1:case 2:case 4:case 5:return"[prej\u0161nji] dddd [ob] LT"}},sameElse:"L"},relativeTime:{future:"\u010dez %s",past:"pred %s",s:n,ss:n,m:n,mm:n,h:n,hh:n,d:n,dd:n,M:n,MM:n,y:n,yy:n},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}})}(s(63))}}]);