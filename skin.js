// Garden Gnome Software - Skin
// Pano2VR 5.2.1/15974
// Filename: temp.ggsk
// Generated 周五 十月 13 16:29:46 2017

function pano2vrSkin(player,base) {
	var ggSkinVars = [];
	var me=this;
	var flag=false;
	this.player=player;
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=me.player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown=[];
	this.elementMouseOver=[];
	var cssPrefix='';
	var domTransition='transition';
	var domTransform='transform';
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	var i;
	if (typeof document.body.style['transform'] == 'undefined') {
		for(var i=0;i<prefixes.length;i++) {
			if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
				cssPrefix='-' + prefixes[i].toLowerCase() + '-';
				domTransition=prefixes[i] + 'Transition';
				domTransform=prefixes[i] + 'Transform';
			}
		}
	}
	
	this.player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	parameterToTransform=function(p) {
		var hs='translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
		return hs;
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		this._rectangle_1=document.createElement('div');
		this._rectangle_1.ggId="Rectangle 1";
		this._rectangle_1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._rectangle_1.ggVisible=false;
		this._rectangle_1.className='ggskin ggskin_rectangle ';
		this._rectangle_1.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.392157);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 105px;';
		hs+='left : 0%;';
		hs+='position : absolute;';
		hs+='top : 75%;';
		hs+='visibility : hidden;';
		hs+='width : 1920px;';
		hs+='pointer-events:auto;';
		this._rectangle_1.setAttribute('style',hs);
		this._rectangle_1.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_1.ggIsActive=function() {
			return false;
		}
		me._rectangle_1.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._rectangle_1.ggActivate=function () {
			me._rectangle_1.scrollIntoView();
		}
		this._rectangle_1.ggUpdatePosition=function (useTransition) {
		}
		this._rectangle_40=document.createElement('div');
		this._rectangle_40.ggId="Rectangle 4";
		this._rectangle_40.ggLeft=-510;
		this._rectangle_40.ggTop=-48;
		this._rectangle_40.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._rectangle_40.ggVisible=true;
		this._rectangle_40.className='ggskin ggskin_rectangle ';
		this._rectangle_40.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 96px;';
		hs+='left : -510px;';
		hs+='position : absolute;';
		hs+='top : -48px;';
		hs+='visibility : inherit;';
		hs+='width : 96px;';
		hs+='pointer-events:auto;';
		this._rectangle_40.setAttribute('style',hs);
		this._rectangle_40.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_40.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._rectangle_40.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._rectangle_40.onmouseout=function (e) {
			me.elementMouseDown['rectangle_40']=false;
		}
		this._rectangle_40.onmousedown=function (e) {
			me.elementMouseDown['rectangle_40']=true;
		}
		this._rectangle_40.onmouseup=function (e) {
			me.elementMouseDown['rectangle_40']=false;
		}
		this._rectangle_40.ontouchend=function (e) {
			me.elementMouseDown['rectangle_40']=false;
		}
		this._rectangle_40.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
		}
		this._button_8=document.createElement('div');
		this._button_8__img=document.createElement('img');
		this._button_8__img.className='ggskin ggskin_button';
		this._button_8__img.setAttribute('src',basePath + 'images/button_8.png');
		this._button_8__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._button_8__img.className='ggskin ggskin_button';
		this._button_8__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._button_8__img);
		this._button_8.appendChild(this._button_8__img);
		this._button_8.ggId="Button 8";
		this._button_8.ggLeft=-45;
		this._button_8.ggTop=-45;
		this._button_8.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_8.ggVisible=true;
		this._button_8.className='ggskin ggskin_button ';
		this._button_8.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 90px;';
		hs+='left : -45px;';
		hs+='position : absolute;';
		hs+='top : -45px;';
		hs+='visibility : inherit;';
		hs+='width : 90px;';
		hs+='pointer-events:auto;';
		this._button_8.setAttribute('style',hs);
		this._button_8.style[domTransform + 'Origin']='50% 50%';
		me._button_8.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._button_8.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._button_8.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
		}
		this._rectangle_40.appendChild(this._button_8);
		this._rectangle_1.appendChild(this._rectangle_40);
		this._rectangle_3=document.createElement('div');
		this._rectangle_3.ggId="Rectangle 3";
		this._rectangle_3.ggLeft=-620;
		this._rectangle_3.ggTop=-48;
		this._rectangle_3.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._rectangle_3.ggVisible=true;
		this._rectangle_3.className='ggskin ggskin_rectangle ';
		this._rectangle_3.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 96px;';
		hs+='left : -620px;';
		hs+='position : absolute;';
		hs+='top : -48px;';
		hs+='visibility : inherit;';
		hs+='width : 96px;';
		hs+='pointer-events:auto;';
		this._rectangle_3.setAttribute('style',hs);
		this._rectangle_3.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._rectangle_3.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._rectangle_3.onmouseout=function (e) {
			me.elementMouseDown['rectangle_3']=false;
		}
		this._rectangle_3.onmousedown=function (e) {
			me.elementMouseDown['rectangle_3']=true;
		}
		this._rectangle_3.onmouseup=function (e) {
			me.elementMouseDown['rectangle_3']=false;
		}
		this._rectangle_3.ontouchend=function (e) {
			me.elementMouseDown['rectangle_3']=false;
		}
		this._rectangle_3.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
		}
		this._button_3=document.createElement('div');
		this._button_3__img=document.createElement('img');
		this._button_3__img.className='ggskin ggskin_button';
		this._button_3__img.setAttribute('src',basePath + 'images/button_3.png');
		this._button_3__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._button_3__img.className='ggskin ggskin_button';
		this._button_3__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._button_3__img);
		this._button_3.appendChild(this._button_3__img);
		this._button_3.ggId="Button 3";
		this._button_3.ggLeft=-45;
		this._button_3.ggTop=-45;
		this._button_3.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_3.ggVisible=true;
		this._button_3.className='ggskin ggskin_button ';
		this._button_3.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 90px;';
		hs+='left : -45px;';
		hs+='position : absolute;';
		hs+='top : -45px;';
		hs+='visibility : inherit;';
		hs+='width : 90px;';
		hs+='pointer-events:auto;';
		this._button_3.setAttribute('style',hs);
		this._button_3.style[domTransform + 'Origin']='50% 50%';
		me._button_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._button_3.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._button_3.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
		}
		this._rectangle_3.appendChild(this._button_3);
		this._rectangle_1.appendChild(this._rectangle_3);
		this._rectangle_2=document.createElement('div');
		this._rectangle_2.ggId="Rectangle 2";
		this._rectangle_2.ggLeft=-730;
		this._rectangle_2.ggTop=-48;
		this._rectangle_2.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._rectangle_2.ggVisible=true;
		this._rectangle_2.className='ggskin ggskin_rectangle ';
		this._rectangle_2.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 96px;';
		hs+='left : -730px;';
		hs+='position : absolute;';
		hs+='top : -48px;';
		hs+='visibility : inherit;';
		hs+='width : 96px;';
		hs+='pointer-events:auto;';
		this._rectangle_2.setAttribute('style',hs);
		this._rectangle_2.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._rectangle_2.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._rectangle_2.onmouseout=function (e) {
			me.elementMouseDown['rectangle_2']=false;
		}
		this._rectangle_2.onmousedown=function (e) {
			me.elementMouseDown['rectangle_2']=true;
		}
		this._rectangle_2.onmouseup=function (e) {
			me.elementMouseDown['rectangle_2']=false;
		}
		this._rectangle_2.ontouchend=function (e) {
			me.elementMouseDown['rectangle_2']=false;
		}
		this._rectangle_2.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
		}
		this._button_2=document.createElement('div');
		this._button_2__img=document.createElement('img');
		this._button_2__img.className='ggskin ggskin_button';
		this._button_2__img.setAttribute('src',basePath + 'images/button_2.png');
		this._button_2__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._button_2__img.className='ggskin ggskin_button';
		this._button_2__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._button_2__img);
		this._button_2.appendChild(this._button_2__img);
		this._button_2.ggId="Button 2";
		this._button_2.ggLeft=-45;
		this._button_2.ggTop=-46;
		this._button_2.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_2.ggVisible=true;
		this._button_2.className='ggskin ggskin_button ';
		this._button_2.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 90px;';
		hs+='left : -45px;';
		hs+='position : absolute;';
		hs+='top : -46px;';
		hs+='visibility : inherit;';
		hs+='width : 90px;';
		hs+='pointer-events:auto;';
		this._button_2.setAttribute('style',hs);
		this._button_2.style[domTransform + 'Origin']='50% 50%';
		me._button_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._button_2.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._button_2.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
		}
		this._rectangle_2.appendChild(this._button_2);
		this._rectangle_1.appendChild(this._rectangle_2);
		this._rectangle_4=document.createElement('div');
		this._rectangle_4.ggId="Rectangle 4";
		this._rectangle_4.ggLeft=-840;
		this._rectangle_4.ggTop=-48;
		this._rectangle_4.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._rectangle_4.ggVisible=true;
		this._rectangle_4.className='ggskin ggskin_rectangle ';
		this._rectangle_4.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 96px;';
		hs+='left : -840px;';
		hs+='position : absolute;';
		hs+='top : -48px;';
		hs+='visibility : inherit;';
		hs+='width : 96px;';
		hs+='pointer-events:auto;';
		this._rectangle_4.setAttribute('style',hs);
		this._rectangle_4.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._rectangle_4.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._rectangle_4.onmouseout=function (e) {
			me.elementMouseDown['rectangle_4']=false;
		}
		this._rectangle_4.onmousedown=function (e) {
			me.elementMouseDown['rectangle_4']=true;
		}
		this._rectangle_4.onmouseup=function (e) {
			me.elementMouseDown['rectangle_4']=false;
		}
		this._rectangle_4.ontouchend=function (e) {
			me.elementMouseDown['rectangle_4']=false;
		}
		this._rectangle_4.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
		}
		this._button_4=document.createElement('div');
		this._button_4__img=document.createElement('img');
		this._button_4__img.className='ggskin ggskin_button';
		this._button_4__img.setAttribute('src',basePath + 'images/button_4.png');
		this._button_4__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._button_4__img.className='ggskin ggskin_button';
		this._button_4__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._button_4__img);
		this._button_4.appendChild(this._button_4__img);
		this._button_4.ggId="Button 4";
		this._button_4.ggLeft=-45;
		this._button_4.ggTop=-45;
		this._button_4.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_4.ggVisible=true;
		this._button_4.className='ggskin ggskin_button ';
		this._button_4.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 90px;';
		hs+='left : -45px;';
		hs+='position : absolute;';
		hs+='top : -45px;';
		hs+='visibility : inherit;';
		hs+='width : 90px;';
		hs+='pointer-events:auto;';
		this._button_4.setAttribute('style',hs);
		this._button_4.style[domTransform + 'Origin']='50% 50%';
		me._button_4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._button_4.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._button_4.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
		}
		this._rectangle_4.appendChild(this._button_4);
		this._rectangle_1.appendChild(this._rectangle_4);
		this.divSkin.appendChild(this._rectangle_1);
		this._button_1=document.createElement('div');
		this._button_1__img=document.createElement('img');
		this._button_1__img.className='ggskin ggskin_button';
		this._button_1__img.setAttribute('src',basePath + 'images/button_1.png');
		this._button_1__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._button_1__img.className='ggskin ggskin_button';
		this._button_1__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._button_1__img);
		this._button_1.appendChild(this._button_1__img);
		this._button_1.ggId="Button 1";
		this._button_1.ggTop=-75;
		this._button_1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_1.ggVisible=true;
		this._button_1.className='ggskin ggskin_button ';
		this._button_1.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : 30px;';
		hs+='position : absolute;';
		hs+='top : -75px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		this._button_1.setAttribute('style',hs);
		this._button_1.style[domTransform + 'Origin']='50% 50%';
		me._button_1.ggIsActive=function() {
			return false;
		}
		me._button_1.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._button_1.onclick=function (e) {
			me._rectangle_1.ggVisible = !me._rectangle_1.ggVisible;
			var flag=me._rectangle_1.ggVisible;
			me._rectangle_1.style[domTransition]='none';
			me._rectangle_1.style.visibility=((flag)&&(Number(me._rectangle_1.style.opacity)>0||!me._rectangle_1.style.opacity))?'inherit':'hidden';
		}
		this._button_1.onmouseover=function (e) {
			me._text_1.style[domTransition]='none';
			me._text_1.style.visibility=(Number(me._text_1.style.opacity)>0||!me._text_1.style.opacity)?'inherit':'hidden';
			me._text_1.ggVisible=true;
		}
		this._button_1.onmouseout=function (e) {
			me._text_1.style[domTransition]='none';
			me._text_1.style.visibility='hidden';
			me._text_1.ggVisible=false;
		}
		this._button_1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this._text_1=document.createElement('div');
		this._text_1__text=document.createElement('div');
		this._text_1.className='ggskin ggskin_textdiv';
		this._text_1.ggTextDiv=this._text_1__text;
		this._text_1.ggId="Text 1";
		this._text_1.ggTop=-58;
		this._text_1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._text_1.ggVisible=false;
		this._text_1.className='ggskin ggskin_text ';
		this._text_1.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -28px;';
		hs+='position : absolute;';
		hs+='top : -58px;';
		hs+='visibility : hidden;';
		hs+='width : 98px;';
		hs+='pointer-events:auto;';
		this._text_1.setAttribute('style',hs);
		this._text_1.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 98px;';
		hs+='height: 20px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._text_1__text.setAttribute('style',hs);
		this._text_1__text.innerHTML="\u573a\u666f\u9009\u62e9";
		this._text_1.appendChild(this._text_1__text);
		me._text_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._text_1.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._text_1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this._button_1.appendChild(this._text_1);
		this.divSkin.appendChild(this._button_1);
		this._container_xfull=document.createElement('div');
		this._container_xfull.ggId="Container xFull";
		this._container_xfull.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._container_xfull.ggVisible=false;
		this._container_xfull.className='ggskin ggskin_container ';
		this._container_xfull.ggType='container';
		hs ='';
		hs+='height : 35px;';
		hs+='left : 20px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 20px;';
		hs+='visibility : hidden;';
		hs+='width : 37px;';
		hs+='pointer-events:none;';
		this._container_xfull.setAttribute('style',hs);
		this._container_xfull.style[domTransform + 'Origin']='50% 50%';
		me._container_xfull.ggIsActive=function() {
			return false;
		}
		me._container_xfull.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._container_xfull.onclick=function (e) {
			me._container_xfull.style[domTransition]='none';
			me._container_xfull.style.visibility='hidden';
			me._container_xfull.ggVisible=false;
			me.player.exitFullscreen();
			me._container_full.style[domTransition]='none';
			me._container_full.style.visibility=(Number(me._container_full.style.opacity)>0||!me._container_full.style.opacity)?'inherit':'hidden';
			me._container_full.ggVisible=true;
		}
		this._container_xfull.ggUpdatePosition=function (useTransition) {
		}
		this._button_52=document.createElement('div');
		this._button_52__img=document.createElement('img');
		this._button_52__img.className='ggskin ggskin_button';
		this._button_52__img.setAttribute('src',basePath + 'images/button_52.png');
		this._button_52__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._button_52__img.className='ggskin ggskin_button';
		this._button_52__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._button_52__img);
		this._button_52.appendChild(this._button_52__img);
		this._button_52.ggId="Button 5";
		this._button_52.ggLeft=-72;
		this._button_52.ggTop=-384;
		this._button_52.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_52.ggVisible=true;
		this._button_52.className='ggskin ggskin_button ';
		this._button_52.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 500px;';
		hs+='left : -72px;';
		hs+='position : absolute;';
		hs+='top : -384px;';
		hs+='visibility : inherit;';
		hs+='width : 500px;';
		hs+='pointer-events:auto;';
		this._button_52.setAttribute('style',hs);
		this._button_52.style[domTransform + 'Origin']='50% 50%';
		me._button_52.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._button_52.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._button_52.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
		}
		this._container_xfull.appendChild(this._button_52);
		this.divSkin.appendChild(this._container_xfull);
		this._container_full=document.createElement('div');
		this._container_full.ggId="Container full";
		this._container_full.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._container_full.ggVisible=true;
		this._container_full.className='ggskin ggskin_container ';
		this._container_full.ggType='container';
		hs ='';
		hs+='height : 35px;';
		hs+='left : 20px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 20px;';
		hs+='visibility : inherit;';
		hs+='width : 37px;';
		hs+='pointer-events:none;';
		this._container_full.setAttribute('style',hs);
		this._container_full.style[domTransform + 'Origin']='50% 50%';
		me._container_full.ggIsActive=function() {
			return false;
		}
		me._container_full.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._container_full.onclick=function (e) {
			me._container_full.style[domTransition]='none';
			me._container_full.style.visibility='hidden';
			me._container_full.ggVisible=false;
			me.player.enterFullscreen();
			me._container_xfull.style[domTransition]='none';
			me._container_xfull.style.visibility=(Number(me._container_xfull.style.opacity)>0||!me._container_xfull.style.opacity)?'inherit':'hidden';
			me._container_xfull.ggVisible=true;
		}
		this._container_full.ggUpdatePosition=function (useTransition) {
		}
		this._button_51=document.createElement('div');
		this._button_51__img=document.createElement('img');
		this._button_51__img.className='ggskin ggskin_button';
		this._button_51__img.setAttribute('src',basePath + 'images/button_51.png');
		this._button_51__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._button_51__img.className='ggskin ggskin_button';
		this._button_51__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._button_51__img);
		this._button_51.appendChild(this._button_51__img);
		this._button_51.ggId="Button 5";
		this._button_51.ggLeft=-72;
		this._button_51.ggTop=-345;
		this._button_51.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_51.ggVisible=true;
		this._button_51.className='ggskin ggskin_button ';
		this._button_51.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 500px;';
		hs+='left : -72px;';
		hs+='position : absolute;';
		hs+='top : -345px;';
		hs+='visibility : inherit;';
		hs+='width : 500px;';
		hs+='pointer-events:auto;';
		this._button_51.setAttribute('style',hs);
		this._button_51.style[domTransform + 'Origin']='50% 50%';
		me._button_51.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._button_51.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._button_51.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
		}
		this._container_full.appendChild(this._button_51);
		this.divSkin.appendChild(this._container_full);
		this._container_xvr=document.createElement('div');
		this._container_xvr.ggId="Container xVR";
		this._container_xvr.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._container_xvr.ggVisible=false;
		this._container_xvr.className='ggskin ggskin_container ';
		this._container_xvr.ggType='container';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 20px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 120px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		this._container_xvr.setAttribute('style',hs);
		this._container_xvr.style[domTransform + 'Origin']='50% 50%';
		me._container_xvr.ggIsActive=function() {
			return false;
		}
		me._container_xvr.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._container_xvr.onclick=function (e) {
			me.player.openUrl(".\/index.html","_self");
			me._container_xvr.style[domTransition]='none';
			me._container_xvr.style.visibility='hidden';
			me._container_xvr.ggVisible=false;
			me._container_vr.style[domTransition]='none';
			me._container_vr.style.visibility=(Number(me._container_vr.style.opacity)>0||!me._container_vr.style.opacity)?'inherit':'hidden';
			me._container_vr.ggVisible=true;
		}
		this._container_xvr.ggUpdatePosition=function (useTransition) {
		}
		this._button_60=document.createElement('div');
		this._button_60__img=document.createElement('img');
		this._button_60__img.className='ggskin ggskin_button';
		this._button_60__img.setAttribute('src',basePath + 'images/button_60.png');
		this._button_60__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._button_60__img.className='ggskin ggskin_button';
		this._button_60__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._button_60__img);
		this._button_60.appendChild(this._button_60__img);
		this._button_60.ggId="Button 6";
		this._button_60.ggLeft=-32;
		this._button_60.ggTop=-251;
		this._button_60.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_60.ggVisible=true;
		this._button_60.className='ggskin ggskin_button ';
		this._button_60.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 450px;';
		hs+='left : -32px;';
		hs+='position : absolute;';
		hs+='top : -251px;';
		hs+='visibility : inherit;';
		hs+='width : 450px;';
		hs+='pointer-events:auto;';
		this._button_60.setAttribute('style',hs);
		this._button_60.style[domTransform + 'Origin']='50% 50%';
		me._button_60.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._button_60.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._button_60.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
		}
		this._container_xvr.appendChild(this._button_60);
		this.divSkin.appendChild(this._container_xvr);
		this._container_vr=document.createElement('div');
		this._container_vr.ggId="Container VR";
		this._container_vr.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._container_vr.ggVisible=true;
		this._container_vr.className='ggskin ggskin_container ';
		this._container_vr.ggType='container';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 20px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 120px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		this._container_vr.setAttribute('style',hs);
		this._container_vr.style[domTransform + 'Origin']='50% 50%';
		me._container_vr.ggIsActive=function() {
			return false;
		}
		me._container_vr.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._container_vr.onclick=function (e) {
			me.player.openUrl("VR\/index.html","_self");
			me._container_vr.style[domTransition]='none';
			me._container_vr.style.visibility='hidden';
			me._container_vr.ggVisible=false;
			me._container_xvr.style[domTransition]='none';
			me._container_xvr.style.visibility=(Number(me._container_xvr.style.opacity)>0||!me._container_xvr.style.opacity)?'inherit':'hidden';
			me._container_xvr.ggVisible=true;
		}
		this._container_vr.ggUpdatePosition=function (useTransition) {
		}
		this._button_6=document.createElement('div');
		this._button_6__img=document.createElement('img');
		this._button_6__img.className='ggskin ggskin_button';
		this._button_6__img.setAttribute('src',basePath + 'images/button_6.png');
		this._button_6__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._button_6__img.className='ggskin ggskin_button';
		this._button_6__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._button_6__img);
		this._button_6.appendChild(this._button_6__img);
		this._button_6.ggId="Button 6";
		this._button_6.ggLeft=-32;
		this._button_6.ggTop=-311;
		this._button_6.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_6.ggVisible=true;
		this._button_6.className='ggskin ggskin_button ';
		this._button_6.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 450px;';
		hs+='left : -32px;';
		hs+='position : absolute;';
		hs+='top : -311px;';
		hs+='visibility : inherit;';
		hs+='width : 450px;';
		hs+='pointer-events:auto;';
		this._button_6.setAttribute('style',hs);
		this._button_6.style[domTransform + 'Origin']='50% 50%';
		me._button_6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._button_6.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._button_6.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
		}
		this._container_vr.appendChild(this._button_6);
		this.divSkin.appendChild(this._container_vr);
		this._container_xmusic=document.createElement('div');
		this._container_xmusic.ggId="Container Xmusic";
		this._container_xmusic.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._container_xmusic.ggVisible=false;
		this._container_xmusic.className='ggskin ggskin_container ';
		this._container_xmusic.ggType='container';
		hs ='';
		hs+='height : 35px;';
		hs+='left : 20px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 70px;';
		hs+='visibility : hidden;';
		hs+='width : 37px;';
		hs+='pointer-events:none;';
		this._container_xmusic.setAttribute('style',hs);
		this._container_xmusic.style[domTransform + 'Origin']='50% 50%';
		me._container_xmusic.ggIsActive=function() {
			return false;
		}
		me._container_xmusic.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._container_xmusic.onclick=function (e) {
			me.player.setVolume("_main",1);
			me._container_xmusic.style[domTransition]='none';
			me._container_xmusic.style.visibility='hidden';
			me._container_xmusic.ggVisible=false;
			me._container_music.style[domTransition]='none';
			me._container_music.style.visibility=(Number(me._container_music.style.opacity)>0||!me._container_music.style.opacity)?'inherit':'hidden';
			me._container_music.ggVisible=true;
		}
		this._container_xmusic.ggUpdatePosition=function (useTransition) {
		}
		this._button_50=document.createElement('div');
		this._button_50__img=document.createElement('img');
		this._button_50__img.className='ggskin ggskin_button';
		this._button_50__img.setAttribute('src',basePath + 'images/button_50.png');
		this._button_50__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._button_50__img.className='ggskin ggskin_button';
		this._button_50__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._button_50__img);
		this._button_50.appendChild(this._button_50__img);
		this._button_50.ggId="Button 5";
		this._button_50.ggLeft=-108;
		this._button_50.ggTop=-384;
		this._button_50.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_50.ggVisible=true;
		this._button_50.className='ggskin ggskin_button ';
		this._button_50.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 500px;';
		hs+='left : -108px;';
		hs+='position : absolute;';
		hs+='top : -384px;';
		hs+='visibility : inherit;';
		hs+='width : 500px;';
		hs+='pointer-events:auto;';
		this._button_50.setAttribute('style',hs);
		this._button_50.style[domTransform + 'Origin']='50% 50%';
		me._button_50.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._button_50.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._button_50.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
		}
		this._container_xmusic.appendChild(this._button_50);
		this.divSkin.appendChild(this._container_xmusic);
		this._container_music=document.createElement('div');
		this._container_music.ggId="Container music";
		this._container_music.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._container_music.ggVisible=true;
		this._container_music.className='ggskin ggskin_container ';
		this._container_music.ggType='container';
		hs ='';
		hs+='height : 35px;';
		hs+='left : 20px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 70px;';
		hs+='visibility : inherit;';
		hs+='width : 37px;';
		hs+='pointer-events:none;';
		this._container_music.setAttribute('style',hs);
		this._container_music.style[domTransform + 'Origin']='50% 50%';
		me._container_music.ggIsActive=function() {
			return false;
		}
		me._container_music.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._container_music.onclick=function (e) {
			me.player.setVolume("_main",0);
			me._container_music.style[domTransition]='none';
			me._container_music.style.visibility='hidden';
			me._container_music.ggVisible=false;
			me._container_xmusic.style[domTransition]='none';
			me._container_xmusic.style.visibility=(Number(me._container_xmusic.style.opacity)>0||!me._container_xmusic.style.opacity)?'inherit':'hidden';
			me._container_xmusic.ggVisible=true;
		}
		this._container_music.ggUpdatePosition=function (useTransition) {
		}
		this._button_5=document.createElement('div');
		this._button_5__img=document.createElement('img');
		this._button_5__img.className='ggskin ggskin_button';
		this._button_5__img.setAttribute('src',basePath + 'images/button_5.png');
		this._button_5__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._button_5__img.className='ggskin ggskin_button';
		this._button_5__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._button_5__img);
		this._button_5.appendChild(this._button_5__img);
		this._button_5.ggId="Button 5";
		this._button_5.ggLeft=-108;
		this._button_5.ggTop=-384;
		this._button_5.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_5.ggVisible=true;
		this._button_5.className='ggskin ggskin_button ';
		this._button_5.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 500px;';
		hs+='left : -108px;';
		hs+='position : absolute;';
		hs+='top : -384px;';
		hs+='visibility : inherit;';
		hs+='width : 500px;';
		hs+='pointer-events:auto;';
		this._button_5.setAttribute('style',hs);
		this._button_5.style[domTransform + 'Origin']='50% 50%';
		me._button_5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._button_5.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._button_5.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
		}
		this._container_music.appendChild(this._button_5);
		this.divSkin.appendChild(this._container_music);
		this.divSkin.ggUpdateSize=function(w,h) {
			me.updateSize(me.divSkin);
		}
		this.divSkin.ggViewerInit=function() {
		}
		this.divSkin.ggLoaded=function() {
		}
		this.divSkin.ggReLoaded=function() {
		}
		this.divSkin.ggLoadedLevels=function() {
		}
		this.divSkin.ggReLoadedLevels=function() {
		}
		this.divSkin.ggEnterFullscreen=function() {
		}
		this.divSkin.ggExitFullscreen=function() {
		}
		this.skinTimerEvent();
	};
	this.hotspotProxyClick=function(id) {
	}
	this.hotspotProxyOver=function(id) {
	}
	this.hotspotProxyOut=function(id) {
	}
	this.changeActiveNode=function(id) {
		me.ggUserdata=me.player.userdata;
	}
	this.skinTimerEvent=function() {
		setTimeout(function() { me.skinTimerEvent(); }, 10);
		me.ggCurrentTime=new Date().getTime();
		if (me.elementMouseDown['rectangle_40']) {
			me.player.openNext("{node4}","");
		}
		if (me.elementMouseDown['rectangle_3']) {
			me.player.openNext("{node3}","");
		}
		if (me.elementMouseDown['rectangle_2']) {
			me.player.openNext("{node2}","");
		}
		if (me.elementMouseDown['rectangle_4']) {
			me.player.openNext("{node1}","");
		}
	};
	function SkinHotspotClass(skinObj,hotspot) {
		var me=this;
		var flag=false;
		this.player=skinObj.player;
		this.skin=skinObj;
		this.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):'';
		this.ggUserdata=this.skin.player.getNodeUserdata(nodeId);
		this.elementMouseDown=[];
		this.elementMouseOver=[];
		
		this.findElements=function(id,regex) {
			return me.skin.findElements(id,regex);
		}
		
		if (hotspot.skinid=='HP_daba') {
			this.__div=document.createElement('div');
			this.__div.ggId="HP_daba";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 184px;';
			hs+='position : absolute;';
			hs+='top : 113px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			hs+='pointer-events:auto;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function (e) {
				me.player.openNext("{node3}","");
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function (e) {
				me.player.setActiveHotspot(me.hotspot);
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function (e) {
				me.player.setActiveHotspot(null);
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ggUpdatePosition=function (useTransition) {
			}
			this._button_72=document.createElement('div');
			this._button_72__img=document.createElement('img');
			this._button_72__img.className='ggskin ggskin_button';
			this._button_72__img.setAttribute('src',basePath + 'images/button_72.png');
			this._button_72__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._button_72__img.className='ggskin ggskin_button';
			this._button_72__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._button_72__img);
			this._button_72.appendChild(this._button_72__img);
			this._button_72.ggId="Button 7";
			this._button_72.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._button_72.ggVisible=true;
			this._button_72.className='ggskin ggskin_button ';
			this._button_72.ggType='button';
			hs ='';
			hs+='cursor : pointer;';
			hs+='height : 100px;';
			hs+='left : -41px;';
			hs+='position : absolute;';
			hs+='top : -46px;';
			hs+='visibility : inherit;';
			hs+='width : 100px;';
			hs+='pointer-events:auto;';
			this._button_72.setAttribute('style',hs);
			this._button_72.style[domTransform + 'Origin']='50% 50%';
			me._button_72.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._button_72.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._button_72.ggUpdatePosition=function (useTransition) {
			}
			this.__div.appendChild(this._button_72);
		} else
		if (hotspot.skinid=='HP_ShuiMian') {
			this.__div=document.createElement('div');
			this.__div.ggId="HP_ShuiMian";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 184px;';
			hs+='position : absolute;';
			hs+='top : 113px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			hs+='pointer-events:auto;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function (e) {
				me.player.openNext("{node2}","");
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function (e) {
				me.player.setActiveHotspot(me.hotspot);
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function (e) {
				me.player.setActiveHotspot(null);
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ggUpdatePosition=function (useTransition) {
			}
			this._button_71=document.createElement('div');
			this._button_71__img=document.createElement('img');
			this._button_71__img.className='ggskin ggskin_button';
			this._button_71__img.setAttribute('src',basePath + 'images/button_71.png');
			this._button_71__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._button_71__img.className='ggskin ggskin_button';
			this._button_71__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._button_71__img);
			this._button_71.appendChild(this._button_71__img);
			this._button_71.ggId="Button 7";
			this._button_71.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._button_71.ggVisible=true;
			this._button_71.className='ggskin ggskin_button ';
			this._button_71.ggType='button';
			hs ='';
			hs+='cursor : pointer;';
			hs+='height : 100px;';
			hs+='left : -41px;';
			hs+='position : absolute;';
			hs+='top : -46px;';
			hs+='visibility : inherit;';
			hs+='width : 100px;';
			hs+='pointer-events:auto;';
			this._button_71.setAttribute('style',hs);
			this._button_71.style[domTransform + 'Origin']='50% 50%';
			me._button_71.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._button_71.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._button_71.ggUpdatePosition=function (useTransition) {
			}
			this.__div.appendChild(this._button_71);
		} else
		if (hotspot.skinid=='HP_Init') {
			this.__div=document.createElement('div');
			this.__div.ggId="HP_Init";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 184px;';
			hs+='position : absolute;';
			hs+='top : 113px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			hs+='pointer-events:auto;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function (e) {
				me.player.openNext("{node1}","");
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function (e) {
				me.player.setActiveHotspot(me.hotspot);
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function (e) {
				me.player.setActiveHotspot(null);
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ggUpdatePosition=function (useTransition) {
			}
			this._button_70=document.createElement('div');
			this._button_70__img=document.createElement('img');
			this._button_70__img.className='ggskin ggskin_button';
			this._button_70__img.setAttribute('src',basePath + 'images/button_70.png');
			this._button_70__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._button_70__img.className='ggskin ggskin_button';
			this._button_70__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._button_70__img);
			this._button_70.appendChild(this._button_70__img);
			this._button_70.ggId="Button 7";
			this._button_70.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._button_70.ggVisible=true;
			this._button_70.className='ggskin ggskin_button ';
			this._button_70.ggType='button';
			hs ='';
			hs+='cursor : pointer;';
			hs+='height : 100px;';
			hs+='left : -41px;';
			hs+='position : absolute;';
			hs+='top : -46px;';
			hs+='visibility : inherit;';
			hs+='width : 100px;';
			hs+='pointer-events:auto;';
			this._button_70.setAttribute('style',hs);
			this._button_70.style[domTransform + 'Origin']='50% 50%';
			me._button_70.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._button_70.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._button_70.ggUpdatePosition=function (useTransition) {
			}
			this.__div.appendChild(this._button_70);
		} else
		{
			this.__div=document.createElement('div');
			this.__div.ggId="HP_YiHongDao";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 184px;';
			hs+='position : absolute;';
			hs+='top : 113px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			hs+='pointer-events:auto;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function (e) {
				me.player.openNext("{node4}","");
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function (e) {
				me.player.setActiveHotspot(me.hotspot);
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function (e) {
				me.player.setActiveHotspot(null);
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ggUpdatePosition=function (useTransition) {
			}
			this._button_7=document.createElement('div');
			this._button_7__img=document.createElement('img');
			this._button_7__img.className='ggskin ggskin_button';
			this._button_7__img.setAttribute('src',basePath + 'images/button_7.png');
			this._button_7__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._button_7__img.className='ggskin ggskin_button';
			this._button_7__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._button_7__img);
			this._button_7.appendChild(this._button_7__img);
			this._button_7.ggId="Button 7";
			this._button_7.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._button_7.ggVisible=true;
			this._button_7.className='ggskin ggskin_button ';
			this._button_7.ggType='button';
			hs ='';
			hs+='cursor : pointer;';
			hs+='height : 100px;';
			hs+='left : -41px;';
			hs+='position : absolute;';
			hs+='top : -46px;';
			hs+='visibility : inherit;';
			hs+='width : 100px;';
			hs+='pointer-events:auto;';
			this._button_7.setAttribute('style',hs);
			this._button_7.style[domTransform + 'Origin']='50% 50%';
			me._button_7.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._button_7.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._button_7.ggUpdatePosition=function (useTransition) {
			}
			this.__div.appendChild(this._button_7);
		}
	};
	this.addSkinHotspot=function(hotspot) {
		return new SkinHotspotClass(me,hotspot);
	}
	this.addSkin();
};