(this["webpackJsonpcapture-app"]=this["webpackJsonpcapture-app"]||[]).push([[175],{1289:function(a,u,e){!function(a){"use strict";var u="nolla yksi kaksi kolme nelj\xe4 viisi kuusi seitsem\xe4n kahdeksan yhdeks\xe4n".split(" "),e=["nolla","yhden","kahden","kolmen","nelj\xe4n","viiden","kuuden",u[7],u[8],u[9]];function n(a,n,t,s){var i="";switch(t){case"s":return s?"muutaman sekunnin":"muutama sekunti";case"ss":return s?"sekunnin":"sekuntia";case"m":return s?"minuutin":"minuutti";case"mm":i=s?"minuutin":"minuuttia";break;case"h":return s?"tunnin":"tunti";case"hh":i=s?"tunnin":"tuntia";break;case"d":return s?"p\xe4iv\xe4n":"p\xe4iv\xe4";case"dd":i=s?"p\xe4iv\xe4n":"p\xe4iv\xe4\xe4";break;case"M":return s?"kuukauden":"kuukausi";case"MM":i=s?"kuukauden":"kuukautta";break;case"y":return s?"vuoden":"vuosi";case"yy":i=s?"vuoden":"vuotta"}return i=function(a,n){return a<10?n?e[a]:u[a]:a}(a,s)+" "+i}a.defineLocale("fi",{months:"tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kes\xe4kuu_hein\xe4kuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split("_"),monthsShort:"tammi_helmi_maalis_huhti_touko_kes\xe4_hein\xe4_elo_syys_loka_marras_joulu".split("_"),weekdays:"sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split("_"),weekdaysShort:"su_ma_ti_ke_to_pe_la".split("_"),weekdaysMin:"su_ma_ti_ke_to_pe_la".split("_"),longDateFormat:{LT:"HH.mm",LTS:"HH.mm.ss",L:"DD.MM.YYYY",LL:"Do MMMM[ta] YYYY",LLL:"Do MMMM[ta] YYYY, [klo] HH.mm",LLLL:"dddd, Do MMMM[ta] YYYY, [klo] HH.mm",l:"D.M.YYYY",ll:"Do MMM YYYY",lll:"Do MMM YYYY, [klo] HH.mm",llll:"ddd, Do MMM YYYY, [klo] HH.mm"},calendar:{sameDay:"[t\xe4n\xe4\xe4n] [klo] LT",nextDay:"[huomenna] [klo] LT",nextWeek:"dddd [klo] LT",lastDay:"[eilen] [klo] LT",lastWeek:"[viime] dddd[na] [klo] LT",sameElse:"L"},relativeTime:{future:"%s p\xe4\xe4st\xe4",past:"%s sitten",s:n,ss:n,m:n,mm:n,h:n,hh:n,d:n,dd:n,M:n,MM:n,y:n,yy:n},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})}(e(56))}}]);