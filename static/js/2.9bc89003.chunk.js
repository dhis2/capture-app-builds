(this["webpackJsonpcapture-app"]=this["webpackJsonpcapture-app"]||[]).push([[2,35,68,70],{448:function(n,t){var o=["M","MM","Q","D","DD","DDD","DDDD","d","E","W","WW","YY","YYYY","GG","GGGG","H","HH","h","hh","m","mm","s","ss","S","SS","SSS","Z","ZZ","X","x"];n.exports=function(n){var t=[];for(var e in n)n.hasOwnProperty(e)&&t.push(e);var r=o.concat(t).sort().reverse();return new RegExp("(\\[[^\\[]*\\])|(\\\\)?("+r.join("|")+"|.)","g")}},453:function(n,t){n.exports=function(){var n={lessThanXSeconds:{one:"\u043f\u043e-\u043c\u0430\u043b\u043a\u043e \u043e\u0442 \u0441\u0435\u043a\u0443\u043d\u0434\u0430",other:"\u043f\u043e-\u043c\u0430\u043b\u043a\u043e \u043e\u0442 {{count}} \u0441\u0435\u043a\u0443\u043d\u0434\u0438"},xSeconds:{one:"1 \u0441\u0435\u043a\u0443\u043d\u0434\u0430",other:"{{count}} \u0441\u0435\u043a\u0443\u043d\u0434\u0438"},halfAMinute:"\u043f\u043e\u043b\u043e\u0432\u0438\u043d \u043c\u0438\u043d\u0443\u0442\u0430",lessThanXMinutes:{one:"\u043f\u043e-\u043c\u0430\u043b\u043a\u043e \u043e\u0442 \u043c\u0438\u043d\u0443\u0442\u0430",other:"\u043f\u043e-\u043c\u0430\u043b\u043a\u043e \u043e\u0442 {{count}} \u043c\u0438\u043d\u0443\u0442\u0438"},xMinutes:{one:"1 \u043c\u0438\u043d\u0443\u0442\u0430",other:"{{count}} \u043c\u0438\u043d\u0443\u0442\u0438"},aboutXHours:{one:"\u043e\u043a\u043e\u043b\u043e \u0447\u0430\u0441",other:"\u043e\u043a\u043e\u043b\u043e {{count}} \u0447\u0430\u0441\u0430"},xHours:{one:"1 \u0447\u0430\u0441",other:"{{count}} \u0447\u0430\u0441\u0430"},xDays:{one:"1 \u0434\u0435\u043d",other:"{{count}} \u0434\u043d\u0438"},aboutXMonths:{one:"\u043e\u043a\u043e\u043b\u043e \u043c\u0435\u0441\u0435\u0446",other:"\u043e\u043a\u043e\u043b\u043e {{count}} \u043c\u0435\u0441\u0435\u0446\u0430"},xMonths:{one:"1 \u043c\u0435\u0441\u0435\u0446",other:"{{count}} \u043c\u0435\u0441\u0435\u0446\u0430"},aboutXYears:{one:"\u043e\u043a\u043e\u043b\u043e \u0433\u043e\u0434\u0438\u043d\u0430",other:"\u043e\u043a\u043e\u043b\u043e {{count}} \u0433\u043e\u0434\u0438\u043d\u0438"},xYears:{one:"1 \u0433\u043e\u0434\u0438\u043d\u0430",other:"{{count}} \u0433\u043e\u0434\u0438\u043d\u0438"},overXYears:{one:"\u043d\u0430\u0434 \u0433\u043e\u0434\u0438\u043d\u0430",other:"\u043d\u0430\u0434 {{count}} \u0433\u043e\u0434\u0438\u043d\u0438"},almostXYears:{one:"\u043f\u043e\u0447\u0442\u0438 \u0433\u043e\u0434\u0438\u043d\u0430",other:"\u043f\u043e\u0447\u0442\u0438 {{count}} \u0433\u043e\u0434\u0438\u043d\u0438"}};return{localize:function(t,o,e){var r;return e=e||{},r="string"===typeof n[t]?n[t]:1===o?n[t].one:n[t].other.replace("{{count}}",o),e.addSuffix?e.comparison>0?"\u0441\u043b\u0435\u0434 "+r:"\u043f\u0440\u0435\u0434\u0438 "+r:r}}}},454:function(n,t,o){var e=o(448);n.exports=function(){var n=["\u044f\u043d\u0443","\u0444\u0435\u0432","\u043c\u0430\u0440","\u0430\u043f\u0440","\u043c\u0430\u0439","\u044e\u043d\u0438","\u044e\u043b\u0438","\u0430\u0432\u0433","\u0441\u0435\u043f","\u043e\u043a\u0442","\u043d\u043e\u0435","\u0434\u0435\u043a"],t=["\u044f\u043d\u0443\u0430\u0440\u0438","\u0444\u0435\u0432\u0440\u0443\u0430\u0440\u0438","\u043c\u0430\u0440\u0442","\u0430\u043f\u0440\u0438\u043b","\u043c\u0430\u0439","\u044e\u043d\u0438","\u044e\u043b\u0438","\u0430\u0432\u0433\u0443\u0441\u0442","\u0441\u0435\u043f\u0442\u0435\u043c\u0432\u0440\u0438","\u043e\u043a\u0442\u043e\u043c\u0432\u0440\u0438","\u043d\u043e\u0435\u043c\u0432\u0440\u0438","\u0434\u0435\u043a\u0435\u043c\u0432\u0440\u0438"],o=["\u043d\u0434","\u043f\u043d","\u0432\u0442","\u0441\u0440","\u0447\u0442","\u043f\u0442","\u0441\u0431"],r=["\u043d\u0435\u0434","\u043f\u043e\u043d","\u0432\u0442\u043e","\u0441\u0440\u044f","\u0447\u0435\u0442","\u043f\u0435\u0442","\u0441\u044a\u0431"],u=["\u043d\u0435\u0434\u0435\u043b\u044f","\u043f\u043e\u043d\u0435\u0434\u0435\u043b\u043d\u0438\u043a","\u0432\u0442\u043e\u0440\u043d\u0438\u043a","\u0441\u0440\u044f\u0434\u0430","\u0447\u0435\u0442\u0432\u044a\u0440\u0442\u044a\u043a","\u043f\u0435\u0442\u044a\u043a","\u0441\u044a\u0431\u043e\u0442\u0430"],a=["\u0441\u0443\u0442\u0440\u0438\u043d\u0442\u0430","\u043d\u0430 \u043e\u0431\u044f\u0434","\u0441\u043b\u0435\u0434\u043e\u0431\u0435\u0434","\u0432\u0435\u0447\u0435\u0440\u0442\u0430"],c=function(n){var t=n.getHours();return t>=4&&t<12?a[0]:t>=12&&t<14?a[1]:t>=14&&t<17?a[2]:a[3]},s={MMM:function(t){return n[t.getMonth()]},MMMM:function(n){return t[n.getMonth()]},dd:function(n){return o[n.getDay()]},ddd:function(n){return r[n.getDay()]},dddd:function(n){return u[n.getDay()]},A:c,a:c,aa:c};return["M","D","DDD","d","Q","W"].forEach((function(n){s[n+"o"]=function(t,o){return function(n){var t=n%100;if(t>20||t<10)switch(t%10){case 1:return n+"-\u0432\u0438";case 2:return n+"-\u0440\u0438"}return n+"-\u0438"}(o[n](t))}})),{formatters:s,formattingTokensRegExp:e(s)}}},519:function(n,t,o){var e=o(453),r=o(454);n.exports={distanceInWords:e(),format:r()}}}]);