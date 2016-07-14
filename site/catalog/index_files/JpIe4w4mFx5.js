if (self.CavalryLogger) { CavalryLogger.start_js(["ibqFL"]); }

__d('escapeJSQuotes',[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(i){if(typeof i=='undefined'||i==null||!i.valueOf())return '';return i.toString().replace(/\\/g,'\\\\').replace(/\n/g,'\\n').replace(/\r/g,'\\r').replace(/"/g,'\\x22').replace(/'/g,'\\\'').replace(/</g,'\\x3c').replace(/>/g,'\\x3e').replace(/&/g,'\\x26');}f.exports=h;},null);
__d('randomShuffle',['randomInt'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(i){for(var j=i.length-1;j>0;j--){var k=c('randomInt').call(this,j+1);if(k!=j){var l=i[k];i[k]=i[j];i[j]=l;}}return i;}f.exports=h;},null);
__d('ReactComponentRenderer',['React','ReactDOM','warning'],function a(b,c,d,e,f,g){'use strict';if(c.__markCompiled)c.__markCompiled();function h(i,j){this.klass=i;this.container=j;this.props={};this.component=null;}h.prototype.replaceProps=function(i,j){this.props={};this.setProps(i,j);};h.prototype.setProps=function(i,j){if(this.klass==null)return;Object.assign(this.props,i);var k=c('React').createElement(this.klass,this.props);this.component=c('ReactDOM').render(k,this.container,j);};h.prototype.unmount=function(){c('ReactDOM').unmountComponentAtNode(this.container);this.klass=null;};f.exports=h;},null);
__d('HistoryManager',['SessionName','Cookie','Env','Event','URI','UserAgent_DEPRECATED','isFacebookURI','emptyFunction','goOrReplace','isInIframe','setIntervalAcrossTransitions'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();c('SessionName').getName();var h={history:null,current:0,fragment:null,isInitialized:function(){return !!h._initialized;},init:function(){if(!c('Env').ALLOW_TRANSITION_IN_IFRAME&&c('isInIframe')())return;if(h._initialized)return h;var i=new (c('URI'))(window.location.href),j=i.getFragment()||'';if(j.charAt(0)==='!'){j=j.substr(1);i.setFragment(j);}Object.assign(h,{_initialized:true,fragment:j,orig_fragment:j,history:[i],callbacks:[],lastChanged:Date.now(),canonical:new (c('URI'))('#'),user:0,enabled:true,debug:c('emptyFunction')});if(window.history&&history.pushState){this.lastURI=document.URL;window.history.replaceState(this.lastURI,null);c('Event').listen(window,'popstate',function(k){var l=k&&k.state&&typeof k.state==='string';if(l&&h.lastURI!=k.state){h.lastURI=k.state;h.lastChanged=Date.now();h.notify(new (c('URI'))(k.state).getUnqualifiedURI().toString());}}.bind(h));if(c('UserAgent_DEPRECATED').webkit()<534||c('UserAgent_DEPRECATED').chrome()<=13){c('setIntervalAcrossTransitions')(h.checkURI,42);h._updateRefererURI(this.lastURI);}return h;}h._updateRefererURI(c('URI').getRequestURI(false));if(c('UserAgent_DEPRECATED').webkit()<500||c('UserAgent_DEPRECATED').firefox()<2){h.enabled=false;return h;}if('onhashchange' in window){c('Event').listen(window,'hashchange',function(){setTimeout(h.checkURI.bind(h),0);});}else c('setIntervalAcrossTransitions')(h.checkURI,42);return h;},registerURIHandler:function(i){h.callbacks.push(i);return h;},setCanonicalLocation:function(i){h.canonical=new (c('URI'))(i);return h;},notify:function(i){if(i==h.orig_fragment)i=h.canonical.getFragment();for(var j=0;j<h.callbacks.length;j++)try{if(h.callbacks[j](i))return true;}catch(k){}return false;},checkURI:function(){if(Date.now()-h.lastChanged<400)return;if(window.history&&history.pushState){var i=new (c('URI'))(document.URL).removeQueryData('ref').toString(),j=new (c('URI'))(h.lastURI).removeQueryData('ref').toString();if(i!=j){h.lastChanged=Date.now();h.lastURI=i;if(c('UserAgent_DEPRECATED').webkit()<534)h._updateRefererURI(i);h.notify(new (c('URI'))(i).getUnqualifiedURI().toString());}return;}if(c('UserAgent_DEPRECATED').webkit()&&window.history.length==200){if(!h.warned)h.warned=true;return;}var k=new (c('URI'))(window.location.href).getFragment();if(k.charAt(0)=='!')k=k.substr(1);k=k.replace(/%23/g,'#');if(k!=h.fragment.replace(/%23/g,'#')){h.debug([k,' vs ',h.fragment,'whl: ',window.history.length,'QHL: ',h.history.length].join(' '));for(var l=h.history.length-1;l>=0;--l)if(h.history[l].getFragment().replace(/%23/g,'#')==k)break;++h.user;if(l>=0){h.go(l-h.current);}else h.go('#'+k);--h.user;}},_updateRefererURI:function(i){i=i.toString();if(i.charAt(0)!='/'&&i.indexOf('//')==-1)return;var j=new (c('URI'))(window.location);if(c('isFacebookURI')(j)){var k=j.getPath()+window.location.search;}else var k='';var l=new (c('URI'))(i).getQualifiedURI().setFragment(k).toString(),m=2048;if(l.length>m)l=l.substring(0,m)+'...';c('Cookie').set('x-referer',l);},go:function(i,j,k){if(window.history&&history.pushState){j||typeof i=='number';var l=new (c('URI'))(i).removeQueryData('ref').toString();h.lastChanged=Date.now();this.lastURI=l;if(k){window.history.replaceState(i,null,l);}else window.history.pushState(i,null,l);if(c('UserAgent_DEPRECATED').webkit()<534)h._updateRefererURI(i);return false;}h.debug('go: '+i);if(j===undefined)j=true;if(!h.enabled)if(!j)return false;if(typeof i=='number'){if(!i)return false;var m=i+h.current,n=Math.max(0,Math.min(h.history.length-1,m));h.current=n;m=h.history[n].getFragment()||h.orig_fragment;m=new (c('URI'))(m).removeQueryData('ref').getUnqualifiedURI().toString();h.fragment=m;h.lastChanged=Date.now();if(!h.user)c('goOrReplace')(window.location,window.location.href.split('#')[0]+'#!'+m,k);if(j)h.notify(m);h._updateRefererURI(m);return false;}i=new (c('URI'))(i);if(i.getDomain()==new (c('URI'))(window.location.href).getDomain())i=new (c('URI'))('#'+i.getUnqualifiedURI());var o=h.history[h.current].getFragment(),p=i.getFragment();if(p==o||o==h.orig_fragment&&p==h.canonical.getFragment()){if(j)h.notify(p);h._updateRefererURI(p);return false;}if(k)h.current--;var q=h.history.length-h.current-1;h.history.splice(h.current+1,q);h.history.push(new (c('URI'))(i));return h.go(1,j,k);},getCurrentFragment:function(){var i=c('URI').getRequestURI(false).getFragment();return i==h.orig_fragment?h.canonical.getFragment():i;}};f.exports=h;},null);
__d('PageTransitions',['invariant','fbt','Arbiter','Bootloader','DOMQuery','DOMScroll','Env','Event','HistoryManager','JSLogger','LayerHideOnEscape','ModalLayer','PageHooks','PageTransitionsConfig','PageTransitionsRegistrar','React','ScriptPath','URI','Vector','areEqual','clickRefAction','escapeJSQuotes','ge','goOrReplace','isInIframe'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();var j=['mh_','killabyte'],k={};function l(q,r){k[q.getUnqualifiedURI()]=r;}function m(q){return k[q.getUnqualifiedURI()];}function n(q){delete k[q.getUnqualifiedURI()];}function o(){var q={};window.location.search.slice(1).split('&').forEach(function(r){var s=r.split('='),t=s[0],u=s[1];if(j.some(function(v){return t.startsWith(v);}))q[t]=u;});return q;}var p={_scroll_locked:false,_transitions_disabled:false,isInitialized:function(){return !!p._initialized;},_init:function(){if(!c('Env').ALLOW_TRANSITION_IN_IFRAME&&c('isInIframe')())return;if(p._initialized)return p;var q=c('PageTransitionsRegistrar').getMostRecentURI();p._current_uri=q;p._most_recent_uri=q;p._next_uri=q;p._initialized=true;var r,s=c('URI').getRequestURI(false);if(s.getFragment().startsWith('/')){r=s.getFragment();}else r=q;c('HistoryManager').init().setCanonicalLocation('#'+r).registerURIHandler(p._historyManagerHandler);c('Event').listen(window,'scroll',function(){if(!p._scroll_locked)l(p._current_uri,c('Vector').getScrollPosition());});return p;},registerHandler:c('PageTransitionsRegistrar').registerHandler,removeHandler:c('PageTransitionsRegistrar').removeHandler,getCurrentURI:function(q){this._init();if(!p._current_uri&&!q)return new (c('URI'))(p._most_recent_uri);return new (c('URI'))(p._current_uri);},getMostRecentURI:function(){this._init();return new (c('URI'))(p._most_recent_uri);},go:function(q,r){this._init();var s=o(),t=new (c('URI'))(q).removeQueryData('quickling').addQueryData(s).getQualifiedURI();c('JSLogger').create('pagetransition').debug('go',{uri:t.toString()});n(t);!r&&c('clickRefAction')('uri',{href:t.toString()},null,'INDIRECT');p._loadPage(t,function(u){if(u){c('ModalLayer').unfixed(function(){c('HistoryManager').go(t.toString(),false,r);});}else c('goOrReplace')(window.location,t,r);});},_historyManagerHandler:function(q){if(q.charAt(0)!='/')return false;c('clickRefAction')('h',{href:q});if(!c('ScriptPath').getClickPointInfo())c('ScriptPath').setClickPointInfo({click:'back'});p._loadPage(new (c('URI'))(q),function(r){if(!r)c('goOrReplace')(window.location,q,true);});return true;},_loadPage:function(q,r){if(new (c('URI'))(q).getFragment()&&c('areEqual')(new (c('URI'))(q).setFragment(null).getQualifiedURI(),new (c('URI'))(p._current_uri).setFragment(null).getQualifiedURI())){c('Arbiter').inform("pre_page_fragment_transition",{from:new (c('URI'))(p._current_uri).getFragment(),to:new (c('URI'))(q).getFragment()});if(p.restoreScrollPosition(q)){p._current_uri=p._most_recent_uri=q;c('Arbiter').inform("page_fragment_transition",{fragment:new (c('URI'))(q).getFragment()});return;}}var s;if(p._current_uri)s=m(p._current_uri);var t=function(){if(s&&p._current_uri)l(p._current_uri,s);p._current_uri=null;p._next_uri=q;if(s)c('DOMScroll').scrollTo(s,false);p._scroll_locked=true;var w=p._handleTransition(q);if(r)if(w===c('PageTransitionsRegistrar').DELAY_HISTORY){setTimeout(function(){return r(w);},0);}else r(w);},u=p._next_uri;p._next_uri=q;var v=c('PageHooks').runHooks('onbeforeleavehooks');p._next_uri=u;if(v){p._warnBeforeLeaving(v,t);}else t();},_handleTransition:function(q){window.onbeforeleavehooks=undefined;if(p._transitions_disabled||!q.isSameOrigin())return false;var r=c('PageTransitionsConfig').reloadOnBootloadError&&this._hasBootloadErrors();if(r)return false;var s,t=b.AsyncRequest;if(t)s=t.getLastID();c('Arbiter').inform("pre_page_transition",{from:p.getMostRecentURI(),to:q});var u=c('PageTransitionsRegistrar')._getTransitionHandlers();for(var v=u.length-1;v>=0;--v){var w=u[v];if(!w)continue;for(var x=w.length-1;x>=0;--x){var y=w[x](q);if(y===true||y===c('PageTransitionsRegistrar').DELAY_HISTORY){var z={sender:this,uri:q,id:s};try{c('Arbiter').inform("page_transition",z);}catch(aa){}return y;}else w.splice(x,1);}}return false;},disableTransitions:function(){p._transitions_disabled=true;},_hasBootloadErrors:function(){return c('Bootloader').getErrorUrls().length>0;},unifyURI:function(){this._init();p._current_uri=p._most_recent_uri=p._next_uri;},transitionComplete:function(q){this._init();p._scroll_locked=false;p._executeCompletionCallbacks();p.unifyURI();if(!q)p.restoreScrollPosition(p._current_uri);try{if(document.activeElement&&document.activeElement.nodeName==='A')document.activeElement.blur();}catch(r){}},_executeCompletionCallbacks:function(){var q=c('PageTransitionsRegistrar')._getCompletionCallbacks();if(q.length>0){c('PageTransitionsRegistrar')._resetCompletionCallbacks();q.forEach(function(r){return r();});}},registerCompletionCallback:c('PageTransitionsRegistrar').registerCompletionCallback,rewriteCurrentURI:function(q,r){this._init();var s=c('PageTransitionsRegistrar')._getTransitionHandlers(),t=s.length||1,u=false;c('PageTransitionsRegistrar').registerHandler(function(){if(q==p.getMostRecentURI().getUnqualifiedURI().toString()){p.transitionComplete();return true;}u=true;},t);p.go(r,true);!(s.length===t+1&&s[t].length===(u?0:1))?h(0):void 0;s.length=t;},_warnBeforeLeaving:function(q,r){c('Bootloader').loadModules(["DialogX","XUIDialogTitle.react","XUIDialogBody.react","XUIDialogButton.react","XUIDialogFooter.react","XUIGrayText.react"],function(s,t,u,v,w,x){var y=new s({width:450,addedBehaviors:[c('LayerHideOnEscape')]},c('React').createElement('div',null,c('React').createElement(t,{showCloseButton:false},i._("Leave Page?")),c('React').createElement(u,null,c('React').createElement(x,{shade:'medium',size:'medium'},q)),c('React').createElement(w,null,c('React').createElement(v,{action:'cancel',label:i._("Stay on This Page")}),c('React').createElement(v,{action:'confirm',use:'confirm',label:i._("Leave this page")}))));y.subscribe('confirm',function(){y.hide();r();});y.show();},'PageTransitions');},restoreScrollPosition:function(q){var r=m(q);if(r){c('DOMScroll').scrollTo(r,false);return true;}function s(v){if(!v)return null;var w="a[name='"+c('escapeJSQuotes')(v)+"']";return c('DOMQuery').scry(document.body,w)[0]||c('ge')(v);}var t=s(new (c('URI'))(q).getFragment());if(t){var u=c('Vector').getElementPosition(t);u.x=0;c('DOMScroll').scrollTo(u);return true;}return false;}};f.exports=p;b.PageTransitions=p;},null);
__d("XEventCreateDialogController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/ajax\/events\/create\/",{acontext:{type:"String",required:true},page_id:{type:"Int"},group_id:{type:"Int"},event_id_for_copy:{type:"Int"},invite_ids:{type:"IntVector"},default_theme_id:{type:"Int"},default_title:{type:"String"},default_start_time:{type:"Int"},friend_birthday_prompt_xout_id:{type:"FBID"},__asyncDialog:{type:"Int"}});},null);