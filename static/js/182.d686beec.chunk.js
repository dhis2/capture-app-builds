webpackJsonp([182],{1754:function(u,e,a){!function(u,e){e(a(174))}(0,function(u){"use strict";function e(u,e,n,t){var i="";switch(n){case"s":return t?"muutaman sekunnin":"muutama sekunti";case"ss":return t?"sekunnin":"sekuntia";case"m":return t?"minuutin":"minuutti";case"mm":i=t?"minuutin":"minuuttia";break;case"h":return t?"tunnin":"tunti";case"hh":i=t?"tunnin":"tuntia";break;case"d":return t?"p\xe4iv\xe4n":"p\xe4iv\xe4";case"dd":i=t?"p\xe4iv\xe4n":"p\xe4iv\xe4\xe4";break;case"M":return t?"kuukauden":"kuukausi";case"MM":i=t?"kuukauden":"kuukautta";break;case"y":return t?"vuoden":"vuosi";case"yy":i=t?"vuoden":"vuotta"}return i=a(u,t)+" "+i}function a(u,e){return u<10?e?t[u]:n[u]:u}var n="nolla yksi kaksi kolme nelj\xe4 viisi kuusi seitsem\xe4n kahdeksan yhdeks\xe4n".split(" "),t=["nolla","yhden","kahden","kolmen","nelj\xe4n","viiden","kuuden",n[7],n[8],n[9]];return u.defineLocale("fi",{months:"tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kes\xe4kuu_hein\xe4kuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split("_"),monthsShort:"tammi_helmi_maalis_huhti_touko_kes\xe4_hein\xe4_elo_syys_loka_marras_joulu".split("_"),weekdays:"sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split("_"),weekdaysShort:"su_ma_ti_ke_to_pe_la".split("_"),weekdaysMin:"su_ma_ti_ke_to_pe_la".split("_"),longDateFormat:{LT:"HH.mm",LTS:"HH.mm.ss",L:"DD.MM.YYYY",LL:"Do MMMM[ta] YYYY",LLL:"Do MMMM[ta] YYYY, [klo] HH.mm",LLLL:"dddd, Do MMMM[ta] YYYY, [klo] HH.mm",l:"D.M.YYYY",ll:"Do MMM YYYY",lll:"Do MMM YYYY, [klo] HH.mm",llll:"ddd, Do MMM YYYY, [klo] HH.mm"},calendar:{sameDay:"[t\xe4n\xe4\xe4n] [klo] LT",nextDay:"[huomenna] [klo] LT",nextWeek:"dddd [klo] LT",lastDay:"[eilen] [klo] LT",lastWeek:"[viime] dddd[na] [klo] LT",sameElse:"L"},relativeTime:{future:"%s p\xe4\xe4st\xe4",past:"%s sitten",s:e,ss:e,m:e,mm:e,h:e,hh:e,d:e,dd:e,M:e,MM:e,y:e,yy:e},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})})}});