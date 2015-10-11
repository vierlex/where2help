define(["./core","./var/rnotwhite","./ajax/var/nonce","./ajax/var/rquery","./core/init","./ajax/parseJSON","./ajax/parseXML","./deferred"],function(e,t,n,r){function i(n){return function(r,i){"string"!=typeof r&&(i=r,r="*");var a,o=0,s=r.toLowerCase().match(t)||[];if(e.isFunction(i))for(;a=s[o++];)"+"===a[0]?(a=a.slice(1)||"*",(n[a]=n[a]||[]).unshift(i)):(n[a]=n[a]||[]).push(i)}}function a(t,n,r,i){function a(u){var l;return o[u]=!0,e.each(t[u]||[],function(e,t){var u=t(n,r,i);return"string"!=typeof u||s||o[u]?s?!(l=u):void 0:(n.dataTypes.unshift(u),a(u),!1)}),l}var o={},s=t===v;return a(n.dataTypes[0])||!o["*"]&&a("*")}function o(t,n){var r,i,a=e.ajaxSettings.flatOptions||{};for(r in n)void 0!==n[r]&&((a[r]?t:i||(i={}))[r]=n[r]);return i&&e.extend(!0,t,i),t}function s(e,t,n){for(var r,i,a,o,s=e.contents,u=e.dataTypes;"*"===u[0];)u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)a=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){a=i;break}o||(o=i)}a=a||o}return a?(a!==u[0]&&u.unshift(a),n[a]):void 0}function u(e,t,n,r){var i,a,o,s,u,l={},c=e.dataTypes.slice();if(c[1])for(o in e.converters)l[o.toLowerCase()]=e.converters[o];for(a=c.shift();a;)if(e.responseFields[a]&&(n[e.responseFields[a]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=a,a=c.shift())if("*"===a)a=u;else if("*"!==u&&u!==a){if(o=l[u+" "+a]||l["* "+a],!o)for(i in l)if(s=i.split(" "),s[1]===a&&(o=l[u+" "+s[0]]||l["* "+s[0]])){o===!0?o=l[i]:l[i]!==!0&&(a=s[0],c.unshift(s[1]));break}if(o!==!0)if(o&&e["throws"])t=o(t);else try{t=o(t)}catch(d){return{state:"parsererror",error:o?d:"No conversion from "+u+" to "+a}}}return{state:"success",data:t}}var l=/#.*$/,c=/([?&])_=[^&]*/,d=/^(.*?):[ \t]*([^\r\n]*)$/gm,f=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,h=/^(?:GET|HEAD)$/,p=/^\/\//,m=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,g={},v={},y="*/".concat("*"),_=window.location.href,T=m.exec(_.toLowerCase())||[];return e.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:_,type:"GET",isLocal:f.test(T[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":y,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":e.parseJSON,"text xml":e.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(t,n){return n?o(o(t,e.ajaxSettings),n):o(e.ajaxSettings,t)},ajaxPrefilter:i(g),ajaxTransport:i(v),ajax:function(i,o){function f(t,n,r,i){var a,o,l,c,d,f=n;2!==F&&(F=2,M&&clearTimeout(M),b=void 0,w=i||"",O.readyState=t>0?4:0,a=t>=200&&300>t||304===t,r&&(c=s(D,O,r)),c=u(D,c,O,a),a?(D.ifModified&&(d=O.getResponseHeader("Last-Modified"),d&&(e.lastModified[$]=d),d=O.getResponseHeader("etag"),d&&(e.etag[$]=d)),204===t||"HEAD"===D.type?f="nocontent":304===t?f="notmodified":(f=c.state,o=c.data,l=c.error,a=!l)):(l=f,(t||!f)&&(f="error",0>t&&(t=0))),O.status=t,O.statusText=(n||f)+"",a?Y.resolveWith(C,[o,f,O]):Y.rejectWith(C,[O,f,l]),O.statusCode(j),j=void 0,S&&E.trigger(a?"ajaxSuccess":"ajaxError",[O,D,a?o:l]),N.fireWith(C,[O,f]),S&&(E.trigger("ajaxComplete",[O,D]),--e.active||e.event.trigger("ajaxStop")))}"object"==typeof i&&(o=i,i=void 0),o=o||{};var b,$,w,x,M,L,S,k,D=e.ajaxSetup({},o),C=D.context||D,E=D.context&&(C.nodeType||C.jquery)?e(C):e.event,Y=e.Deferred(),N=e.Callbacks("once memory"),j=D.statusCode||{},A={},H={},F=0,R="canceled",O={readyState:0,getResponseHeader:function(e){var t;if(2===F){if(!x)for(x={};t=d.exec(w);)x[t[1].toLowerCase()]=t[2];t=x[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===F?w:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return F||(e=H[n]=H[n]||e,A[e]=t),this},overrideMimeType:function(e){return F||(D.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>F)for(t in e)j[t]=[j[t],e[t]];else O.always(e[O.status]);return this},abort:function(e){var t=e||R;return b&&b.abort(t),f(0,t),this}};if(Y.promise(O).complete=N.add,O.success=O.done,O.error=O.fail,D.url=((i||D.url||_)+"").replace(l,"").replace(p,T[1]+"//"),D.type=o.method||o.type||D.method||D.type,D.dataTypes=e.trim(D.dataType||"*").toLowerCase().match(t)||[""],null==D.crossDomain&&(L=m.exec(D.url.toLowerCase()),D.crossDomain=!(!L||L[1]===T[1]&&L[2]===T[2]&&(L[3]||("http:"===L[1]?"80":"443"))===(T[3]||("http:"===T[1]?"80":"443")))),D.data&&D.processData&&"string"!=typeof D.data&&(D.data=e.param(D.data,D.traditional)),a(g,D,o,O),2===F)return O;S=e.event&&D.global,S&&0===e.active++&&e.event.trigger("ajaxStart"),D.type=D.type.toUpperCase(),D.hasContent=!h.test(D.type),$=D.url,D.hasContent||(D.data&&($=D.url+=(r.test($)?"&":"?")+D.data,delete D.data),D.cache===!1&&(D.url=c.test($)?$.replace(c,"$1_="+n++):$+(r.test($)?"&":"?")+"_="+n++)),D.ifModified&&(e.lastModified[$]&&O.setRequestHeader("If-Modified-Since",e.lastModified[$]),e.etag[$]&&O.setRequestHeader("If-None-Match",e.etag[$])),(D.data&&D.hasContent&&D.contentType!==!1||o.contentType)&&O.setRequestHeader("Content-Type",D.contentType),O.setRequestHeader("Accept",D.dataTypes[0]&&D.accepts[D.dataTypes[0]]?D.accepts[D.dataTypes[0]]+("*"!==D.dataTypes[0]?", "+y+"; q=0.01":""):D.accepts["*"]);for(k in D.headers)O.setRequestHeader(k,D.headers[k]);if(D.beforeSend&&(D.beforeSend.call(C,O,D)===!1||2===F))return O.abort();R="abort";for(k in{success:1,error:1,complete:1})O[k](D[k]);if(b=a(v,D,o,O)){O.readyState=1,S&&E.trigger("ajaxSend",[O,D]),D.async&&D.timeout>0&&(M=setTimeout(function(){O.abort("timeout")},D.timeout));try{F=1,b.send(A,f)}catch(P){if(!(2>F))throw P;f(-1,P)}}else f(-1,"No Transport");return O},getJSON:function(t,n,r){return e.get(t,n,r,"json")},getScript:function(t,n){return e.get(t,void 0,n,"script")}}),e.each(["get","post"],function(t,n){e[n]=function(t,r,i,a){return e.isFunction(r)&&(a=a||i,i=r,r=void 0),e.ajax({url:t,type:n,dataType:a,data:r,success:i})}}),e});