(this["webpackJsonpcapture-app"]=this["webpackJsonpcapture-app"]||[]).push([[89],{507:function(n,r){n.exports=function(){var n={lessThanXSeconds:{singular:"mindre \xe4n en sekund",plural:"mindre \xe4n {{count}} sekunder"},xSeconds:{singular:"en sekund",plural:"{{count}} sekunder"},halfAMinute:"en halv minut",lessThanXMinutes:{singular:"mindre \xe4n en minut",plural:"mindre \xe4n {{count}} minuter"},xMinutes:{singular:"en minut",plural:"{{count}} minuter"},aboutXHours:{singular:"ungef\xe4r en timme",plural:"ungef\xe4r {{count}} timmar"},xHours:{singular:"en timme",plural:"{{count}} timmar"},xDays:{singular:"en dag",plural:"{{count}} dagar"},aboutXMonths:{singular:"ungef\xe4r en m\xe5nad",plural:"ungef\xe4r {{count}} m\xe5nader"},xMonths:{singular:"en m\xe5nad",plural:"{{count}} m\xe5nader"},aboutXYears:{singular:"ungef\xe4r ett \xe5r",plural:"ungef\xe4r {{count}} \xe5r"},xYears:{singular:"ett \xe5r",plural:"{{count}} \xe5r"},overXYears:{singular:"\xf6ver ett \xe5r",plural:"\xf6ver {{count}} \xe5r"},almostXYears:{singular:"n\xe4stan ett \xe5r",plural:"n\xe4stan {{count}} \xe5r"}},r=["noll","en","tv\xe5","tre","fyra","fem","sex","sju","\xe5tta","nio","tio","elva","tolv"];return{localize:function(u,a,e){e=e||{};var t,l=n[u];return t="string"===typeof l?l:0===a||a>1?l.plural.replace("{{count}}",a<13?r[a]:a):l.singular,e.addSuffix?e.comparison>0?"om "+t:t+" sedan":t}}}}}]);