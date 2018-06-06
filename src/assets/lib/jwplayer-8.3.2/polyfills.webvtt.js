/*!
JW Player version 8.3.2
Copyright (c) 2018, JW Player, All Rights Reserved 
https://github.com/jwplayer/jwplayer/blob/v8.3.2/README.md

This source code and its use and distribution is subject to the terms and conditions of the applicable license agreement. 
https://www.jwplayer.com/tos/

This product includes portions of other software. For the full text of licenses, see below:

JW Player Third Party Software Notices and/or Additional Terms and Conditions

**************************************************************************************************
The following software is used under Apache License 2.0
**************************************************************************************************

vtt.js v0.13.0
Copyright (c) 2018 Mozilla (http://mozilla.org)
https://github.com/mozilla/vtt.js/blob/v0.13.0/LICENSE

* * *

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.

You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and
limitations under the License.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

**************************************************************************************************
The following software is used under MIT license
**************************************************************************************************

Underscore.js v1.6.0
Copyright (c) 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative
https://github.com/jashkenas/underscore/blob/1.6.0/LICENSE

Backbone backbone.events.js v1.1.2
Copyright (c) 2010-2014 Jeremy Ashkenas, DocumentCloud
https://github.com/jashkenas/backbone/blob/1.1.2/LICENSE

Promise Polyfill v7.1.1
Copyright (c) 2014 Taylor Hakes and Forbes Lindesay
https://github.com/taylorhakes/promise-polyfill/blob/v7.1.1/LICENSE

can-autoplay.js v3.0.0
Copyright (c) 2017 video-dev
https://github.com/video-dev/can-autoplay/blob/v3.0.0/LICENSE

* * *

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

**************************************************************************************************
The following software is used under W3C license
**************************************************************************************************

Intersection Observer v0.5.0
Copyright (c) 2016 Google Inc. (http://google.com)
https://github.com/w3c/IntersectionObserver/blob/v0.5.0/LICENSE.md

* * *

W3C SOFTWARE AND DOCUMENT NOTICE AND LICENSE
Status: This license takes effect 13 May, 2015.

This work is being provided by the copyright holders under the following license.

License
By obtaining and/or copying this work, you (the licensee) agree that you have read, understood, and will comply with the following terms and conditions.

Permission to copy, modify, and distribute this work, with or without modification, for any purpose and without fee or royalty is hereby granted, provided that you include the following on ALL copies of the work or portions thereof, including modifications:

The full text of this NOTICE in a location viewable to users of the redistributed or derivative work.

Any pre-existing intellectual property disclaimers, notices, or terms and conditions. If none exist, the W3C Software and Document Short Notice should be included.

Notice of any changes or modifications, through a copyright statement on the new code or document such as "This software or document includes material copied from or derived from [title and URI of the W3C document]. Copyright © [YEAR] W3C® (MIT, ERCIM, Keio, Beihang)."

Disclaimers
THIS WORK IS PROVIDED "AS IS," AND COPYRIGHT HOLDERS MAKE NO REPRESENTATIONS OR WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO, WARRANTIES OF MERCHANTABILITY OR FITNESS FOR ANY PARTICULAR PURPOSE OR THAT THE USE OF THE SOFTWARE OR DOCUMENT WILL NOT INFRINGE ANY THIRD PARTY PATENTS, COPYRIGHTS, TRADEMARKS OR OTHER RIGHTS.

COPYRIGHT HOLDERS WILL NOT BE LIABLE FOR ANY DIRECT, INDIRECT, SPECIAL OR CONSEQUENTIAL DAMAGES ARISING OUT OF ANY USE OF THE SOFTWARE OR DOCUMENT.

The name and trademarks of copyright holders may NOT be used in advertising or publicity pertaining to the work without specific, written prior permission. Title to copyright in this work will at all times remain with copyright holders.
*/
(window.webpackJsonpjwplayer=window.webpackJsonpjwplayer||[]).push([[8],{84:function(t,e,i){"use strict";function r(t,e){this.name="ParsingError",this.code=t.code,this.message=e||t.message}function o(t){function e(t,e,i,r){return 3600*(0|t)+60*(0|e)+(0|i)+(0|r)/1e3}var i=t.match(/^(\d+):(\d{2})(:\d{2})?\.(\d{3})/);return i?i[3]?e(i[1],i[2],i[3].replace(":",""),i[4]):i[1]>59?e(i[1],i[2],0,i[4]):e(0,i[1],i[2],i[4]):null}i.r(e),r.prototype=Object.create(Error.prototype),r.prototype.constructor=r,r.Errors={BadSignature:{code:0,message:"Malformed WebVTT signature."},BadTimeStamp:{code:1,message:"Malformed time stamp."}};var n={"&amp;":"&","&lt;":"<","&gt;":">","&lrm;":"‎","&rlm;":"‏","&nbsp;":" "},a={c:"span",i:"i",b:"b",u:"u",ruby:"ruby",rt:"rt",v:"span",lang:"span"},s={v:"title",lang:"lang"},h={rt:"ruby"};function l(t,e){function i(){if(!e)return null;var t,i=e.match(/^([^<]*)(<[^>]+>?)?/);return t=i[1]?i[1]:i[2],e=e.substr(t.length),t}function r(t){return n[t]}function l(t){for(var e=void 0;e=t.match(/&(amp|lt|gt|lrm|rlm|nbsp);/);)t=t.replace(e[0],r);return t}function c(t,e){return!h[e.localName]||h[e.localName]===t.localName}function p(e,i){var r=a[e];if(!r)return null;var o=t.document.createElement(r),n=s[e];return n&&i&&(o[n]=i.trim()),o}for(var d=t.document.createElement("div"),u=d,f=void 0,g=[];null!==(f=i());)if("<"!==f[0])u.appendChild(t.document.createTextNode(l(f)));else{if("/"===f[1]){g.length&&g[g.length-1]===f.substr(2).replace(">","")&&(g.pop(),u=u.parentNode);continue}var m=o(f.substr(1,f.length-2)),v=void 0;if(m){v=t.document.createProcessingInstruction("timestamp",m),u.appendChild(v);continue}var y=f.match(/^<([^.\s/0-9>]+)(\.[^\s\\>]+)?([^>\\]+)?(\\?)>?$/);if(!y)continue;if(!(v=p(y[1],y[3])))continue;if(!c(u,v))continue;y[2]&&(v.className=y[2].substr(1).replace("."," ")),g.push(y[1]),u.appendChild(v),u=v}return d}var c=[[1470,1470],[1472,1472],[1475,1475],[1478,1478],[1488,1514],[1520,1524],[1544,1544],[1547,1547],[1549,1549],[1563,1563],[1566,1610],[1645,1647],[1649,1749],[1765,1766],[1774,1775],[1786,1805],[1807,1808],[1810,1839],[1869,1957],[1969,1969],[1984,2026],[2036,2037],[2042,2042],[2048,2069],[2074,2074],[2084,2084],[2088,2088],[2096,2110],[2112,2136],[2142,2142],[2208,2208],[2210,2220],[8207,8207],[64285,64285],[64287,64296],[64298,64310],[64312,64316],[64318,64318],[64320,64321],[64323,64324],[64326,64449],[64467,64829],[64848,64911],[64914,64967],[65008,65020],[65136,65140],[65142,65276],[67584,67589],[67592,67592],[67594,67637],[67639,67640],[67644,67644],[67647,67669],[67671,67679],[67840,67867],[67872,67897],[67903,67903],[67968,68023],[68030,68031],[68096,68096],[68112,68115],[68117,68119],[68121,68147],[68160,68167],[68176,68184],[68192,68223],[68352,68405],[68416,68437],[68440,68466],[68472,68479],[68608,68680],[126464,126467],[126469,126495],[126497,126498],[126500,126500],[126503,126503],[126505,126514],[126516,126519],[126521,126521],[126523,126523],[126530,126530],[126535,126535],[126537,126537],[126539,126539],[126541,126543],[126545,126546],[126548,126548],[126551,126551],[126553,126553],[126555,126555],[126557,126557],[126559,126559],[126561,126562],[126564,126564],[126567,126570],[126572,126578],[126580,126583],[126585,126588],[126590,126590],[126592,126601],[126603,126619],[126625,126627],[126629,126633],[126635,126651],[1114109,1114109]];function p(t){for(var e=0;e<c.length;e++){var i=c[e];if(t>=i[0]&&t<=i[1])return!0}return!1}function d(t,e){for(var i=e.childNodes.length-1;i>=0;i--)t.push(e.childNodes[i])}function u(t){if(!t||!t.length)return null;var e=t.pop(),i=e.textContent||e.innerText;if(i){var r=i.match(/^.*(\n|\r)/);return r?(t.length=0,r[0]):i}return"ruby"===e.tagName?u(t):e.childNodes?(d(t,e),u(t)):void 0}function f(){}function g(t,e){f.call(this),this.cue=e,this.cueDiv=l(t,e.text),this.cueDiv.className="jw-text-track-cue jw-reset";var i="horizontal-tb";/^(lr|rl)$/.test(e.vertical)&&(i="vertical-"+e.vertical);var r={textShadow:"",position:"relative",paddingLeft:0,paddingRight:0,left:0,top:0,bottom:0,display:"inline",writingMode:i,unicodeBidi:"plaintext"};this.applyStyles(r,this.cueDiv),this.div=t.document.createElement("div"),r={textAlign:"middle"===e.align?"center":e.align,whiteSpace:"pre-line",position:"absolute",direction:function(t){if(!t||!t.childNodes)return"ltr";var e=[],i=void 0;for(d(e,t);i=u(e);)for(var r=0;r<i.length;r++)if(p(i.charCodeAt(r)))return"rtl";return"ltr"}(this.cueDiv),writingMode:i,unicodeBidi:"plaintext"},this.applyStyles(r),this.div.appendChild(this.cueDiv);var o=0;switch(e.align){case"start":case"left":o=e.position;break;case"middle":case"center":o=("auto"===e.position?50:e.position)-e.size/2;break;case"end":case"right":o=e.position-e.size}o=Math.max(Math.min(100,o),0),e.vertical?this.applyStyles({top:this.formatStyle(o,"%"),height:this.formatStyle(e.size,"%")}):this.applyStyles({left:this.formatStyle(o,"%"),width:this.formatStyle(e.size,"%")}),this.move=function(t){this.applyStyles({top:this.formatStyle(t.top,"px"),bottom:this.formatStyle(t.bottom,"px"),left:this.formatStyle(t.left,"px"),paddingRight:this.formatStyle(t.right,"px"),height:"auto",width:this.formatStyle(t.width,"px")})}}function m(t){var e=void 0,i=void 0,r=void 0,o=void 0;if(t.div){i=t.div.offsetHeight,r=t.div.offsetWidth,o=t.div.offsetTop;var n=(n=t.div.childNodes)&&(n=n[0])&&n.getClientRects&&n.getClientRects();t=t.div.getBoundingClientRect(),e=n?Math.max(n[0]&&n[0].height||0,t.height/n.length):0}this.left=t.left,this.right=t.right,this.top=t.top||o,this.height=t.height||i,this.bottom=t.bottom||o+(t.height||i),this.width=t.width||r,this.lineHeight=void 0!==e?e:t.lineHeight,this.width=Math.ceil(this.width+1)}function v(t,e,i,r,o){var n=new m(e),a=e.cue,s=function(t){if("number"==typeof t.line&&(t.snapToLines||t.line>=0&&t.line<=100))return t.line;if(!t.track||!t.track.textTrackList||!t.track.textTrackList.mediaElement)return-1;for(var e=t.track,i=e.textTrackList,r=0,o=0;o<i.length&&i[o]!==e;o++)"showing"===i[o].mode&&r++;return-1*++r}(a),h=[];if(a.snapToLines){var l=void 0;switch(a.vertical){case"":h=["+y","-y"],l="height";break;case"rl":h=["+x","-x"],l="width";break;case"lr":h=["-x","+x"],l="width"}var c=n.lineHeight,p=Math.floor(i[l]/c);s=Math.min(s,p-o);var d=c*Math.round(s),u=i[l]+c,f=h[0];if(Math.abs(d)>u&&(d=d<0?-1:1,d*=Math.ceil(u/c)*c),s<0)d+=a.vertical?i.width:i.height,d-=o*c,h=h.reverse();d-=o,n.move(f,d)}else{var g=n.lineHeight/i.height*100;switch(a.lineAlign){case"middle":s-=g/2;break;case"end":s-=g}switch(a.vertical){case"":e.applyStyles({top:e.formatStyle(s,"%")});break;case"rl":e.applyStyles({left:e.formatStyle(s,"%")});break;case"lr":e.applyStyles({paddingRight:e.formatStyle(s,"%")})}h=["+y","-x","+x","-y"],n=new m(e)}var v=function(t,e){for(var o=void 0,n=new m(t),a=1,s=0;s<e.length;s++){for(;t.overlapsOppositeAxis(i,e[s])||t.within(i)&&t.overlapsAny(r);)t.move(e[s]);if(t.within(i))return t;var h=t.intersectPercentage(i);a>h&&(o=new m(t),a=h),t=new m(n)}return o||n}(n,h);e.move(v.toCSSCompatValues(i))}function y(){}f.prototype.applyStyles=function(t,e){for(var i in e=e||this.div,t)t.hasOwnProperty(i)&&(e.style[i]=t[i])},f.prototype.formatStyle=function(t,e){return 0===t?0:t+e},g.prototype=Object.create(f.prototype),g.prototype.constructor=g,m.prototype.move=function(t,e){switch(e=void 0!==e?e:this.lineHeight,t){case"+x":this.left+=e,this.right+=e;break;case"-x":this.left-=e,this.right-=e;break;case"+y":this.top+=e,this.bottom+=e;break;case"-y":this.top-=e,this.bottom-=e}},m.prototype.overlaps=function(t){return this.left<t.right&&this.right>t.left&&this.top<t.bottom&&this.bottom>t.top},m.prototype.overlapsAny=function(t){for(var e=0;e<t.length;e++)if(this.overlaps(t[e]))return!0;return!1},m.prototype.within=function(t){return this.top>=t.top&&this.bottom<=t.bottom&&this.left>=t.left&&this.right<=t.right},m.prototype.overlapsOppositeAxis=function(t,e){switch(e){case"+x":return this.left<t.left;case"-x":return this.right>t.right;case"+y":return this.top<t.top;case"-y":return this.bottom>t.bottom}},m.prototype.intersectPercentage=function(t){return Math.max(0,Math.min(this.right,t.right)-Math.max(this.left,t.left))*Math.max(0,Math.min(this.bottom,t.bottom)-Math.max(this.top,t.top))/(this.height*this.width)},m.prototype.toCSSCompatValues=function(t){return{top:this.top-t.top,bottom:t.bottom-this.bottom,left:this.left-t.left,paddingRight:t.right-this.right,height:this.height,width:this.width}},m.getSimpleBoxPosition=function(t){var e=t.div?t.div.offsetHeight:t.tagName?t.offsetHeight:0,i=t.div?t.div.offsetWidth:t.tagName?t.offsetWidth:0,r=t.div?t.div.offsetTop:t.tagName?t.offsetTop:0;return{left:(t=t.div?t.div.getBoundingClientRect():t.tagName?t.getBoundingClientRect():t).left,right:t.right,top:t.top||r,height:t.height||e,bottom:t.bottom||r+(t.height||e),width:t.width||i}},y.StringDecoder=function(){return{decode:function(t){if(!t)return"";if("string"!=typeof t)throw new Error("Error - expected string data.");return decodeURIComponent(encodeURIComponent(t))}}},y.convertCueToDOMTree=function(t,e){return t&&e?l(t,e):null};y.processCues=function(t,e,i,r){if(!t||!e||!i)return null;for(;i.firstChild;)i.removeChild(i.firstChild);if(!e.length)return null;var o=t.document.createElement("div");if(o.className="jw-text-track-container jw-reset",o.style.position="absolute",o.style.left="0",o.style.right="0",o.style.top="0",o.style.bottom="0",o.style.margin="1.5%",i.appendChild(o),function(t){for(var e=0;e<t.length;e++)if(t[e].hasBeenReset||!t[e].displayState)return!0;return!1}(e)||r){var n=[],a=m.getSimpleBoxPosition(o),s=e.reduce(function(t,e){return t+e.text.split("\n").length},0);!function(){for(var i=0;i<e.length;i++){var r=e[i],h=new g(t,r);h.div.className="jw-text-track-display jw-reset",o.appendChild(h.div),v(0,h,a,n,s),s-=r.text.split("\n").length,r.displayState=h.div,n.push(m.getSimpleBoxPosition(h))}}()}else for(var h=0;h<e.length;h++)o.appendChild(e[h].displayState)};var w=window.WebVTT;w||(window.WebVTT=w=y),e.default=w}}]);