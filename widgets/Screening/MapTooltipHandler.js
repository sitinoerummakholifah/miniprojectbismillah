// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/_base/declare dijit/_WidgetBase dojo/_base/lang dojo/Evented dojo/dom-style dojo/dom-construct dojo/on".split(" "),function(f,g,c,h,b,k,l){return f([g,h],{baseClass:"jimu-widget-screening-MapTooltipHandler",_mapTooltip:null,_mapMoveHandler:null,_mapClickHandler:null,map:null,handleClickFor:null,constructor:function(a){this.handleClickFor=this.map=this._mapClickHandler=this._mapMoveHandler=this._mapTooltip=null;c.mixin(this,a)},startup:function(){this.handleClickFor||(this.handleClickFor=
this.map);this._createTooltip()},connectEventHandler:function(a){a&&this.updateTooltip(a);this._disableWebMapPopup();this._mapClickHandler=this.own(l(this.handleClickFor,"click",c.hitch(this,function(d){this._clicked(d)})))[0];"ontouchstart"in document.documentElement?b.set(this._mapTooltip,"display","none"):(this._mapMoveHandler=this.own(this.map.on("mouse-move",c.hitch(this,this._onMapMouseMove)))[0],this.own(this.map.on("mouse-out",c.hitch(this,function(){b.set(this._mapTooltip,"display","none")}))))},
disconnectEventHandler:function(){this._enableWebMapPopup();this._mapClickHandler&&this._mapClickHandler.remove();this._mapMoveHandler&&(this._mapMoveHandler.remove(),this._mapTooltip.style.display="none")},_createTooltip:function(){this._mapTooltip=k.create("div",{"class":"tooltip",innerHTML:this.toolTipText},this.map.container);b.set(this._mapTooltip,"position","fixed");b.set(this._mapTooltip,"display","none")},_enableWebMapPopup:function(){this.map&&(this.map.infoWindow.hide(),this.map.setInfoWindowOnClick(!0))},
_disableWebMapPopup:function(){this.map&&(this.map.infoWindow.hide(),this.map.setInfoWindowOnClick(!1))},_onMapMouseMove:function(a){if(a.clientX||a.pageY){var d=a.clientX;var e=a.clientY}else d=a.clientX+document.body.scrollLeft-document.body.clientLeft,e=a.clientY+document.body.scrollTop-document.body.clientTop;b.set(this._mapTooltip,"display","none");b.set(this._mapTooltip,{left:d+15+"px",top:e+"px"});b.set(this._mapTooltip,"display","");this._onMoving(a)},_clicked:function(a){this.emit("clicked",
a)},_onMoving:function(a){this.emit("moving",a)},updateTooltip:function(a){this.toolTipText=a;this._mapTooltip.innerHTML=this.toolTipText}})});