if (self.CavalryLogger) { CavalryLogger.start_js(["78IUM"]); }

__d('TabBarItem.react',['cx','React','ReactDOM','Focus','Event','Keys','joinClasses'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i=c('React').PropTypes,j=c('React').createClass({displayName:'TabBarItem',propTypes:{wrapper:i.func.isRequired,shouldWrapTab:i.bool,tabIndex:i.oneOf([-1,0]),selected:i.bool,focused:i.bool,hideFocusRing:i.bool,mockSpacebarClick:i.bool},getDefaultProps:function(){return {wrapper:c('React').createClass({displayName:'wrapper',render:function(){return c('React').createElement('li',this.props,this.props.children);}}),shouldWrapTab:true,tabIndex:-1,selected:false,focused:false,hideFocusRing:false,mockSpacebarClick:true};},render:function(){var k=this.props,l=k.selected,m=k.focused,n=k.hideFocusRing,o=k.shouldWrapTab,p="_45hc"+(l?' '+"_1hqh":''),q=m&&n?"_468f":'';if(o)return this._renderWrappedTabBarItem(p,q);return this._renderTabBarItem(c('joinClasses')(p,q));},_renderWrappedTabBarItem:function(k,l){var m=this.props,n=m.className,o=m.href,p=m.ajaxify,q=m.tabIndex,r=m.rel,s=m.target,t=m.selected,u=m.wrapper,v=m.mockSpacebarClick;o=o||'#';var w={};if(v)w.onKeyDown=this.onKeyDown;var x=c('React').createElement('a',{ref:'tab',ajaxify:p,href:o,role:'tab',rel:r,target:s,tabIndex:q,className:l,'aria-selected':t},this.props.children);return (c('React').createElement(u,babelHelpers['extends']({},this.props,{tabIndex:null,className:c('joinClasses')(n,k),role:'presentation'}),c('React').cloneElement(x,w)));},_renderTabBarItem:function(k){var l=this.props,m=l.className,n=l.href,o=l.selected,p=l.mockSpacebarClick;n=n||'#';var q={};if(p)q.onKeyDown=this.onKeyDown;var r=c('React').createElement('a',babelHelpers['extends']({},this.props,{href:n,ref:'tab',role:'tab',className:c('joinClasses')(m,k),'aria-selected':o}),this.props.children);return c('React').cloneElement(r,q);},componentDidMount:function(){this.focus();},componentDidUpdate:function(){this.focus();},focus:function(){if(this.props.focused)c('Focus').set(this.refs.tab);},onKeyDown:function(event){var k=c('Event').getKeyCode(event);if(k===c('Keys').SPACE&&this.refs.tab){c('ReactDOM').findDOMNode(this.refs.tab).click();c('Event').prevent(event);}}});f.exports=j;},null);
__d('TabBar.react',['cx','fbt','invariant','React','ReactDOM','TabBarItem.react','Event','RTLKeys','BootloadedComponent.react','JSResource','joinClasses','setTimeout','clearTimeout','emptyFunction'],function a(b,c,d,e,f,g,h,i,j){if(c.__markCompiled)c.__markCompiled();var k=c('React').PropTypes,l=i._("More"),m=c('React').createClass({displayName:'TabBarItemWrapper',statics:{getComponent:function(o){return o.component;}},render:function(){return this.props.component;}}),n=c('React').createClass({displayName:'TabBar',_blurTimeout:null,propTypes:{activeTabKey:k.string,alwaysShowActive:k.bool,defaultActiveTabKey:k.string,dropdownMenuClassName:k.string,maxTabsVisible:k.number.isRequired,moreLabel:k.string,onTabClick:k.func.isRequired,dropdownTabComponent:k.func.isRequired,onWidthCalculated:k.func.isRequired,shouldCalculateVisibleTabs:k.bool,maxDropdownHeight:k.number},getDefaultProps:function(){return {alwaysShowActive:true,dropdownTabComponent:c('TabBarItem.react'),maxTabsVisible:Infinity,moreLabel:l,onTabClick:c('emptyFunction').thatReturnsTrue,onWidthCalculated:c('emptyFunction'),shouldCalculateVisibleTabs:true};},getInitialState:function(){return {activeTabKey:this.props.activeTabKey||this.props.defaultActiveTabKey,focusedTabKey:null,previousFocusedTabKey:null,visibleTabsCount:0,shouldCalculateVisibleTabs:true,hideFocusRing:true};},setWidth:function(o){c('ReactDOM').findDOMNode(this).style.width=o;this.setState({shouldCalculateVisibleTabs:true});},render:function(){var o=this.getTabs(),p=o.length,q=this.getActiveTabIndex(),r=o[q],s=this.getActiveTabIndex(true),t,u,v;if(r)t=r.key;var w=this.props.dropdownTabComponent,x=c('React').createElement(w,{key:'_dropdown',ref:'more',className:"_45hd _2pik"},c('React').createElement('span',{className:"_1b0"},this.props.moreLabel));if(this.state.shouldCalculateVisibleTabs){u=o.map(function(ga,ha){return this._wrapTab(ga,ha,t,null,s,false,false);}.bind(this));if(p>2)u.push(x);}else{var y=this._groupTabsByVisibility();u=y.visibleTabs;v=y.extraTabs;var z=this._isDropdownSelected(),aa=this.state.visibleTabsCount,ba=this.state.focusedTabKey;ba=ba&&this.getFocusedTabIndex()===-1?n.MORE_TAB_KEY:ba;u=u.map(function(ga,ha){return this._wrapTab(ga,ha,t,ba,s,true,true);}.bind(this));v=v.map(function(ga,ha){return this._wrapTab(ga,ha,t,null,s,true,false);}.bind(this));if(v.length){var ca;if(aa===0&&r)ca=r;var da=ca&&ca.props.children||this.props.moreLabel,ea='_dropdown',fa=c('React').createElement(c('BootloadedComponent.react'),{bootloadLoader:c('JSResource')('TabBarDropdownItem.react').__setRef('TabBar.react'),bootloadPlaceholder:x,menuClassName:this.props.dropdownMenuClassName,selected:z,focused:ba===n.MORE_TAB_KEY,hideFocusRing:this.state.hideFocusRing,onMouseDown:this.onMouseDown,onFocus:this.onFocus.bind(this,ea),onBlur:this.onBlur,key:ea,ref:'more',label:da,tabComponent:this.props.dropdownTabComponent,maxDropdownHeight:this.props.maxDropdownHeight},v);if(aa===0){u=fa;}else u.push(fa);}}return (c('React').createElement('ul',babelHelpers['extends']({},this.props,{className:c('joinClasses')(this.props.className,"_43o4"),role:'tablist',onKeyDown:this.onKeyDown,onKeyUp:this.onKeyUp}),u));},componentDidMount:function(){this.calculateVisibleTabs();this.calculateWidth();},componentWillUnmount:function(){c('clearTimeout')(this._blurTimeout);},componentWillReceiveProps:function(o){this.setState({shouldCalculateVisibleTabs:true,activeTabKey:o.activeTabKey||this.state.activeTabKey});},shouldComponentUpdate:function(o,p){if(this.state.focusedTabKey&&!p.focusedTabKey)return false;if(!this.state.focusedTabKey&&!p.focusedTabKey&&this.state.previousFocusedTabKey&&!p.previousFocusedTabKey)return false;return true;},componentDidUpdate:function(){if(this.state.shouldCalculateVisibleTabs)this.calculateVisibleTabs();this.calculateWidth();},calculateWidth:function(){this.props.onWidthCalculated(c('ReactDOM').findDOMNode(this).clientWidth);},calculateVisibleTabs:function(){var o=this.getTabs(),p=o.length,q=Math.min(p,this.props.maxTabsVisible);if(!this.props.shouldCalculateVisibleTabs){this.setState({visibleTabsCount:q,shouldCalculateVisibleTabs:false});return;}var r=[];for(var s=0;s<p;s++)r.push(c('ReactDOM').findDOMNode(this.refs[s]).offsetWidth);var t=this.getActiveTabIndex();if(this.props.alwaysShowActive&&t!==-1){o.unshift(o.splice(t,1)[0]);r.unshift(r.splice(t,1)[0]);}var u=c('ReactDOM').findDOMNode(this).offsetWidth;q=0;var v=0;for(s=0;s<p;s++){var w=r[s];if(v+w>u){if(q>0&&p>2){var x=c('ReactDOM').findDOMNode(this.refs.more).offsetWidth;while(q>0&&(v+x>u||p-q<2)){q--;v-=r[q];}}else q=0;break;}q++;v+=w;}this.setState({visibleTabsCount:Math.min(q,this.props.maxTabsVisible),shouldCalculateVisibleTabs:false});},getActiveTabIndex:function(){var o=arguments.length<=0||arguments[0]===undefined?false:arguments[0],p=this.state.activeTabKey,q=[];if(o){var r=this._groupTabsByVisibility(),s=r.visibleTabs;q=s;}else q=this.getTabs();return q.findIndex(function(t){return t&&t.key===p;});},getFocusedTabIndex:function(){var o=this.state.focusedTabKey||this.state.previousFocusedTabKey,p=this._groupTabsByVisibility(),q=p.visibleTabs;return q.findIndex(function(r){return r&&r.key===o;});},getFocusedTab:function(){var o=this.state.focusedTabKey,p=this._groupTabsByVisibility(),q=p.visibleTabs,r=q.findIndex(function(s){return s&&s.key===o;});return q[r];},onClick:function(o,event){var p=this.props.onTabClick(o,event);if(p!==false&&this.isMounted())this.activateTab(o);},onMouseDown:function(){this.setState({hideFocusRing:true});},onKeyDown:function(event){var o=c('Event').getKeyCode(event);switch(o){case c('RTLKeys').UP:case c('RTLKeys').getRight():case c('RTLKeys').DOWN:case c('RTLKeys').getLeft():var p,q,r,s=this._groupTabsByVisibility(),t=s.visibleTabs,u=o===c('RTLKeys').UP||o===c('RTLKeys').getLeft(),v=u?-1:1,w=u?0:t.length-1,x=this.getFocusedTabIndex();if(x===-1&&v===-1)x=t.length;if(x===-1){r=null;}else if(x===w&&v===1){r=n.MORE_TAB_KEY;}else{p=u?Math.max:Math.min;q=p(x+v,w);r=t[q].key;}if(r)this.setState({focusedTabKey:r,hideFocusRing:false});break;case c('RTLKeys').RETURN:var y=this.getFocusedTab();if(y){var z=y.key,aa=this.props.onTabClick(z,event);if(aa!==false&&this.isMounted())this.activateTab(z);}break;}},onKeyUp:function(event){if(c('Event').getKeyCode(event)===c('RTLKeys').TAB&&this.state.hideFocusRing)this.setState({hideFocusRing:false});},onFocus:function(o,event){c('clearTimeout')(this._blurTimeout);if(o!==this.state.focusedTabKey){this.setState({focusedTabKey:o,previousFocusedTabKey:null});event.preventDefault();event.stopPropagation();}},onBlur:function(){this.setState({previousFocusedTabKey:this.state.focusedTabKey,focusedTabKey:null});this._blurTimeout=c('setTimeout')(function(){this.setState({previousFocusedTabKey:null});}.bind(this),n.BLUR_TIMEOUT);},_wrapTab:function(o,p,q,r,s,t,u){!(o.key!==n.MORE_TAB_KEY)?j(0):void 0;var v=q===o.key,w=r===o.key,x={selected:v,focused:w,tabIndex:v||s===-1&&p===0?0:-1,hideFocusRing:this.state.hideFocusRing};if(t){x.onClick=this.onClick.bind(this,o.key);x.onMouseDown=this.onMouseDown;}else x.mockSpacebarClick=false;if(u){x.onFocus=this.onFocus.bind(this,o.key);x.onBlur=this.onBlur;}o=c('React').cloneElement(o,x);return (c('React').createElement(m,{key:o.key,component:o,ref:p}));},activateTab:function(o){if(o)this.setState({activeTabKey:o,focusedTabKey:o,shouldCalculateVisibleTabs:true});},getTabs:function(){var o=[];c('React').Children.forEach(this.props.children,function(p){if(p)o.push(p);});return o;},_groupTabsByVisibility:function(){var o=this.state.visibleTabsCount,p=this.getTabs(),q=this.getActiveTabIndex(),r,s,t;if(!this.props.alwaysShowActive||q<o||o===0){t=p.slice(o);s=p.slice(0,o);}else{r=p.splice(q,1)[0];var u=o>0?o-1:0;t=p.slice(u);s=p.slice(0,u);s.push(r);}return {visibleTabs:s,extraTabs:t};},_isDropdownSelected:function(){var o=this.state.visibleTabsCount,p=this.getActiveTabIndex(),q=!this.props.alwaysShowActive&&p>=o||o===0&&p>-1;return q;}});n.MORE_TAB_KEY='_moreTab';n.BLUR_TIMEOUT=120;n.Tab=c('TabBarItem.react');f.exports=n;},null);
__d('XUIPageNavigationItem.react',['cx','fbt','React','TabBarItem.react','AsyncRequest','joinClasses'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();var j=c('React').PropTypes,k=c('React').createClass({displayName:'XUIPageNavigationItem',propTypes:{selected:j.bool},getDefaultProps:function(){return {selected:false};},onClick:function(l,event){if(this.props.ajaxify&&this.props.rel==='async')new (c('AsyncRequest'))(this.props.ajaxify).send();if(this.props.onClick)return this.props.onClick(l,event);return true;},render:function(){var l="_5vwz"+(this.props.selected?' '+"_5vwy":''),m=this.props;if(m.ajaxify&&m.rel==='async'){var n=m,o=n.ajaxify,p=n.rel,q=babelHelpers.objectWithoutProperties(n,['ajaxify','rel']);m=q;m.onClick=this.onClick;}return (c('React').createElement(c('TabBarItem.react'),babelHelpers['extends']({},m,{className:c('joinClasses')(this.props.className,l)}),c('React').createElement('div',{className:"_4jq5"},this.props.children),c('React').createElement('span',{className:"_13xf"})));}});f.exports=k;},null);
__d('XUIPageNavigationGroup.react',['React','TabBar.react','XUIPageNavigationItem.react'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=c('React').PropTypes,i=c('React').createClass({displayName:'XUIPageNavigationGroup',propTypes:{moreLabel:h.string,maxTabsVisible:function(j,k,l){var m=j[k];if(m!=null&&!(typeof m==='number'&&m>=0))return new Error('Invalid `'+k+'` supplied to `'+l+'`, '+'expected positive integer.');},width:h.string},getDefaultProps:function(){return {maxTabsVisible:Infinity};},componentDidUpdate:function(){this.refs.bar.setWidth(this.props.width);},componentDidMount:function(){this.refs.bar.setWidth(this.props.width);},render:function(){return c('React').createElement(c('TabBar.react'),babelHelpers['extends']({},this.props,{ref:'bar'}),this.props.children);}});i.Item=c('XUIPageNavigationItem.react');f.exports=i;},null);
__d('XUIPageNavigation.react',['csx','cx','invariant','Arbiter','CSS','DOMQuery','Event','LeftRight.react','React','ReactDOM','ReactComponentWithPureRenderMixin','SubscriptionsHandler','UITinyViewportAction','Vector','ViewportBounds','XUIPageNavigationGroup.react','joinClasses','throttle'],function a(b,c,d,e,f,g,h,i,j){if(c.__markCompiled)c.__markCompiled();var k=c('React').PropTypes,l=15,m='bluebar',n='caret',o=c('React').createClass({displayName:'XUIPageNavigation',mixins:[c('ReactComponentWithPureRenderMixin')],propTypes:{selectedIndicator:k.oneOf([n,m]),caretColor:k.oneOf(['bg-blue','fbui-desktop-wash','fbui-desktop-background-light','fbui-red','fbui-green','fbui-desktop-divider-dark','white']),onTabClick:k.func,size:k.oneOf(['small','medium']),scrollThreshold:k.number,floatDirection:k.oneOf(['left','right','both'])},getDefaultProps:function(){return {selectedIndicator:m,caretColor:'fbui-desktop-wash',size:'medium',scrollThreshold:0,floatDirection:'both'};},getInitialState:function(){return {activeTabKey:undefined,leftWidth:null};},componentDidMount:function(){this._subscriptions=new (c('SubscriptionsHandler'))();this.resizeNavbarGroups();this._listenForNavbarResize();var p="^.fixed_elem._5vx1";this.wrapper=c('DOMQuery').scry(c('ReactDOM').findDOMNode(this),p)[0];if(this.wrapper){this._setViewportBounds();this._subscriptions.addSubscriptions(c('UITinyViewportAction').subscribe('change',function(){if(c('UITinyViewportAction').isTiny()){this._bound.remove();}else this._setViewportBounds();}.bind(this)));}if((this.wrapper||c('DOMQuery').scry(c('ReactDOM').findDOMNode(this),"^._k").length)&&this.props.scrollThreshold!==null)this._showDropshadowOnScroll();},componentWillUnmount:function(){this._subscriptions.release();},onTabClick:function(p,event){if(this.props.onTabClick){var q=this.props.onTabClick(p,event);if(!q)return q;}if(event.button===0)this.setState({activeTabKey:p});},onWidthCalculated:function(p,q){this[p?'_rightWidth':'_leftWidth']=q;},render:function(){var p=this.props.selectedIndicator,q=this.props.size,r="_5vx2"+(q==='small'?' '+"_5vx3":'')+(q==='medium'?' '+"_5vx4":'')+(p===n?' '+"_5vx5":'')+(p===m?' '+"_5vx6":''),s=null;if(p===n){var t=this.props.caretColor;s=(t==='bg-blue'?"_2d2c":'')+(t==='fbui-desktop-wash'?' '+"_4_np":'')+(t==='fbui-desktop-background-light'?' '+"_4_nr":'')+(t==='fbui-red'?' '+"_4_ns":'')+(t==='fbui-green'?' '+"_4_nv":'')+(t==='fbui-desktop-divider-dark'?' '+"_4_nz":'')+(t==='white'?' '+"_5-f":'');}var u=c('joinClasses')(r,s,this.props.className),v=[],w=this.props.activeTabKey||this.state.activeTabKey||this.props.defaultActiveTabKey;c('React').Children.forEach(this.props.children,function(x,y){if(x===null)return;var z={onTabClick:this.onTabClick,activeTabKey:w,onWidthCalculated:this.onWidthCalculated.bind(this,y),ref:y?'right':'left',key:y};if(y===0)z.width=this.state.leftWidth;v.push(c('React').cloneElement(x,z));}.bind(this));!(v.length===1||v.length===2)?j(0):void 0;return (c('React').createElement('div',{className:u},c('React').createElement(c('LeftRight.react'),{className:"_5vx7",direction:this.props.floatDirection},v)));},_setViewportBounds:function(){var p=this.wrapper.offsetHeight,q=c('ViewportBounds').getTop();this._bound=c('ViewportBounds').addTop(q+p);c('Arbiter').subscribe('page_transition',function(){this._bound.remove();});},_listenForNavbarResize:function(){this._subscriptions.addSubscriptions(c('Event').listen(window,'resize',c('throttle')(this.resizeNavbarGroups,30)));},_showDropshadowOnScroll:function(){this._subscriptions.addSubscriptions(c('Event').listen(window,'scroll',function(){var p=c('Vector').getScrollPosition().y>this.props.scrollThreshold;if(this._hasDropshadow===p)return;this._hasDropshadow=p;c('CSS').conditionClass(c('ReactDOM').findDOMNode(this),"_51j8",p);}.bind(this)));},resizeNavbarGroups:function(){if(!this.refs.left)return;var p=c('ReactDOM').findDOMNode(this).clientWidth;if(isNaN(p))return;if(!isNaN(this._leftWidth)&&this.refs.right){var q;q=p-this._leftWidth-l;if(this._leftWidth<q)q=this._leftWidth-l;this.setState({rightWidth:q+'px'});}if(!isNaN(this._rightWidth)){var r;r=p-this._rightWidth-l;if(r<this._rightWidth)r=this._rightWidth+l;this.setState({leftWidth:r+'px'});}else if(!this.refs.right)this.setState({leftWidth:p+'px'});}});o.Group=c('XUIPageNavigationGroup.react');o.Item=c('XUIPageNavigationGroup.react').Item;o.Indicator={BlueBar:m,Caret:n};f.exports=o;},null);
__d('XUIPageNavigationShim',['DOMContainer.react','React','isNode'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=function(){var k=0;return function(){return 'XUIPageNavigationShim-'+k++;};}();function i(k){var l;if(k.children){l=k.children.map(function(n){if(typeof n==='object'&&typeof n.ctor==='function'){return i(n);}else if(c('isNode')(n)){return c('React').createElement(c('DOMContainer.react'),{key:h()},n);}else return n;});if(l.length===1)l=l[0];}var m=k.ctor;return (c('React').createElement(m,babelHelpers['extends']({key:h()},k.props),l));}var j=c('React').createClass({displayName:'XUIPageNavigationShim',render:function(){return i(this.props);}});f.exports=j;},null);