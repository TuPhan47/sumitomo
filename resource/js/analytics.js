/* ------------------------------------------------------------
 * [ GA Tag ]
 * ------------------------------------------------------------ */
var _gaq = _gaq || [];
_gaq.push(['_setAccount', '★★★']);
_gaq.push(['_trackPageview']);

(function() {
  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
  ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();


/* ------------------------------------------------------------
 * [ GA Functions 1.4.3 http://murak.net/ MIT License ]
 * ------------------------------------------------------------ */
var gaFunc=gaFunc||{};
jQuery(function(b){function h(){return parseInt(((new Date).getTime()-m)/1E3)}function f(e,b,c,f,d){if(e)_gaq.push([n+"_trackEvent",b,c,f,d]);else try{_gat._getTrackerByName(a.tracker)._trackEvent(b,c,f,d)}catch(g){}}function p(e,b){if(e)_gaq.push([n+"_trackPageview",b]);else try{_gat._getTrackerByName(a.tracker)._trackPageview(b)}catch(c){}}var a=b.extend({tracker:"",outbound:!0,outboundEvent:!0,outboundAsync:!1,outboundSelector:'a[href^="http"]:not([href*="//'+location.host+'"])',outboundPrefix:"/outbound/",
download:!0,downloadEvent:!0,downloadAsync:!1,downloadSelector:"a",downloadTypes:"pdf|zip|jpe?g|png|gif|mpd?|mpe?g|flv|wmv|docx?|pptx?|xlsx?",downloadPrefix:"/download/",mailto:!0,input:!0,inputSelector:"form",inputFocus:!1,inputChange:!0,inputClick:!0,inputReset:!0,stay:!1,staySec:60,scroll:!0,scrollAsync:!0,scrollClientRatio:150,xdomain:!1,xdomainDomain:"othersite1.com|othersite2.com",locationSearch:!1},gaFunc),n=a.tracker?a.tracker+".":"",k=location.pathname+(a.locationSearch?location.search:""),
m=(new Date).getTime(),q=m;if(a.outbound){var c=a.outboundSelector;if(a.outboundEvent)b(document).on("click",c,function(){var e=this.href.match(/\/\/([^\/]+)/)[1];f(a.outboundAsync,"Outbound",e,this.href,h())});else b(document).on("click",c,function(){var e=a.outboundPrefix+this.href.replace(/^.*\/\//,"");p(a.outboundAsync,e)})}if(a.download){var r=RegExp(".("+a.downloadTypes+")$","i");b(a.downloadSelector).each(function(){this.href.match(r)&&(a.downloadEvent?b(this).click(function(){var e=this.href.match(r)[1].toUpperCase();
f(a.downloadAsync,"Download",e,this.href,h())}):b(this).click(function(){var e=a.downloadPrefix+this.href.replace(/^.*\/\//,"");p(a.downloadAsync,e)}))})}if(a.mailto)b(document).on("click",'a[href^="mailto:"]',function(){f(!0,"Email","mailto",this.href)});if(a.input){var c=b(a.inputSelector),d=function(a,b,c){b=k+"#"+b.join("#");var d=(new Date).getTime(),g=parseInt((d-q)/1E3);q=d;f(c,"Input",a,b,g)};a.inputFocus&&c.find(":text,:password,:radio,:checkbox,:file,select,textarea").focus(function(){d("focus",
[b(this).attr("type")||this.tagName,this.id||this.name],!0)});a.inputChange&&c.find(":text,:password,:radio,:checkbox,:file,select,textarea").change(function(){d("change",[b(this).attr("type")||this.tagName,this.id||this.name],!0)});a.inputClick&&c.find(":submit,:image,:button").click(function(){d("click",[b(this).attr("type")||this.tagName,this.id||this.name],!0)});a.inputReset&&c.find(":reset").click(function(){d("reset",["reset",this.id||this.name],!0)})}a.stay&&0<a.staySec&&setTimeout(function(){f(!0,
"Reading","stay",k,h())},1E3*a.staySec);if(a.scroll){var g=0;b(window).scroll(function(){var a=b(window).scrollTop(),c=b("html").attr("clientHeight");c||(c=b(window).height());a+=c;a>g&&(g=a)});b(window).unload(function(){var c=b("html"),d=c.attr("clientHeight");d||(d=b(window).height());0<a.scrollClientRatio&&100*g>=d*a.scrollClientRatio&&((c=c.attr("scrollHeight"))||(c=b(document).height()),c&&(c=parseInt(100*(g/c)),f(a.scrollAsync,"Reading","scroll",k,c)))})}if(a.xdomain){for(var s=a.xdomainDomain.split("|"),
c=[],l=0;l<s.length;l++)c.push('a[href*="'+s[l]+'"]');var t=a.xdomainDomain.replace(/\./g,"\\.");b(document).on("click",c.join(","),function(){this.href.match(RegExp("^https?://[^/]*("+t+")"))&&(this.href=_gat._getTrackerByName(a.tracker)._getLinkerUrl(this.href))})}});

/* ------------------------------------------------------------
 * [ GA Functions Config ]
 * ------------------------------------------------------------ */
var gaFunc = {
    tracker:'',
    outbound:true,
    outboundEvent:true,
    outboundAsync:false,
    outboundSelector:'a[href^="http"]:not([href*="//' + location.host + '"])',
    outboundPrefix:'/outbound/',
    download:true,
    downloadEvent:true,
    downloadAsync:false,
    downloadSelector:'a',
    downloadTypes:'pdf|zip|mp\d?|mpe?g|flv|wmv|docx?|pptx?|xlsx?',
    //downloadTypes:'pdf|zip|jpe?g|png|gif|mp\d?|mpe?g|flv|wmv|docx?|pptx?|xlsx?',
    downloadPrefix:'/download/',
    mailto:true,
    input:false,
    inputSelector:'form',
    inputFocus:false,
    inputChange:false,
    inputClick:false,
    inputReset:false,
    stay:false,
    staySec:60,
    scroll:false,
    scrollAsync:false,
    scrollClientRatio:150,
    xdomain:false,
    //xdomainDomain:'ドメイン名',
    locationSearch:false
};
