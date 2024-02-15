/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ie=window,He=ie.ShadowRoot&&(ie.ShadyCSS===void 0||ie.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Oe=Symbol(),Re=new WeakMap;let Ye=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==Oe)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(He&&e===void 0){const n=t!==void 0&&t.length===1;n&&(e=Re.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&Re.set(t,e))}return e}toString(){return this.cssText}};const bt=i=>new Ye(typeof i=="string"?i:i+"",void 0,Oe),ae=(i,...e)=>{const t=i.length===1?i[0]:e.reduce((n,s,o)=>n+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+i[o+1],i[0]);return new Ye(t,i,Oe)},wt=(i,e)=>{He?i.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(t=>{const n=document.createElement("style"),s=ie.litNonce;s!==void 0&&n.setAttribute("nonce",s),n.textContent=t.cssText,i.appendChild(n)})},Le=He?i=>i:i=>i instanceof CSSStyleSheet?(e=>{let t="";for(const n of e.cssRules)t+=n.cssText;return bt(t)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ue;const ne=window,ze=ne.trustedTypes,kt=ze?ze.emptyScript:"",Be=ne.reactiveElementPolyfillSupport,je={toAttribute(i,e){switch(e){case Boolean:i=i?kt:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,e){let t=i;switch(e){case Boolean:t=i!==null;break;case Number:t=i===null?null:Number(i);break;case Object:case Array:try{t=JSON.parse(i)}catch{t=null}}return t}},Xe=(i,e)=>e!==i&&(e==e||i==i),pe={attribute:!0,type:String,converter:je,reflect:!1,hasChanged:Xe},Ee="finalized";let B=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(e){var t;this.finalize(),((t=this.h)!==null&&t!==void 0?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,n)=>{const s=this._$Ep(n,t);s!==void 0&&(this._$Ev.set(s,n),e.push(s))}),e}static createProperty(e,t=pe){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const n=typeof e=="symbol"?Symbol():"__"+e,s=this.getPropertyDescriptor(e,n,t);s!==void 0&&Object.defineProperty(this.prototype,e,s)}}static getPropertyDescriptor(e,t,n){return{get(){return this[t]},set(s){const o=this[e];this[t]=s,this.requestUpdate(e,o,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||pe}static finalize(){if(this.hasOwnProperty(Ee))return!1;this[Ee]=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,n=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of n)this.createProperty(s,t[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const n=new Set(e.flat(1/0).reverse());for(const s of n)t.unshift(Le(s))}else e!==void 0&&t.push(Le(e));return t}static _$Ep(e,t){const n=t.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}_$Eu(){var e;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,n;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((n=e.hostConnected)===null||n===void 0||n.call(e))}removeController(e){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return wt(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(t=>{var n;return(n=t.hostConnected)===null||n===void 0?void 0:n.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(t=>{var n;return(n=t.hostDisconnected)===null||n===void 0?void 0:n.call(t)})}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$EO(e,t,n=pe){var s;const o=this.constructor._$Ep(e,n);if(o!==void 0&&n.reflect===!0){const r=(((s=n.converter)===null||s===void 0?void 0:s.toAttribute)!==void 0?n.converter:je).toAttribute(t,n.type);this._$El=e,r==null?this.removeAttribute(o):this.setAttribute(o,r),this._$El=null}}_$AK(e,t){var n;const s=this.constructor,o=s._$Ev.get(e);if(o!==void 0&&this._$El!==o){const r=s.getPropertyOptions(o),a=typeof r.converter=="function"?{fromAttribute:r.converter}:((n=r.converter)===null||n===void 0?void 0:n.fromAttribute)!==void 0?r.converter:je;this._$El=o,this[o]=a.fromAttribute(t,r.type),this._$El=null}}requestUpdate(e,t,n){let s=!0;e!==void 0&&(((n=n||this.constructor.getPropertyOptions(e)).hasChanged||Xe)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),n.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,n))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((s,o)=>this[o]=s),this._$Ei=void 0);let t=!1;const n=this._$AL;try{t=this.shouldUpdate(n),t?(this.willUpdate(n),(e=this._$ES)===null||e===void 0||e.forEach(s=>{var o;return(o=s.hostUpdate)===null||o===void 0?void 0:o.call(s)}),this.update(n)):this._$Ek()}catch(s){throw t=!1,this._$Ek(),s}t&&this._$AE(n)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)===null||t===void 0||t.forEach(n=>{var s;return(s=n.hostUpdated)===null||s===void 0?void 0:s.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,n)=>this._$EO(n,this[n],t)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};B[Ee]=!0,B.elementProperties=new Map,B.elementStyles=[],B.shadowRootOptions={mode:"open"},Be?.({ReactiveElement:B}),((ue=ne.reactiveElementVersions)!==null&&ue!==void 0?ue:ne.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var fe;const se=window,U=se.trustedTypes,Ue=U?U.createPolicy("lit-html",{createHTML:i=>i}):void 0,oe="$lit$",S=`lit$${(Math.random()+"").slice(9)}$`,Te="?"+S,At=`<${Te}>`,P=document,G=()=>P.createComment(""),q=i=>i===null||typeof i!="object"&&typeof i!="function",et=Array.isArray,tt=i=>et(i)||typeof i?.[Symbol.iterator]=="function",ve=`[ 	
\f\r]`,K=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ne=/-->/g,Ie=/>/g,H=RegExp(`>|${ve}(?:([^\\s"'>=/]+)(${ve}*=${ve}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ke=/'/g,De=/"/g,it=/^(?:script|style|textarea|title)$/i,xt=i=>(e,...t)=>({_$litType$:i,strings:e,values:t}),A=xt(1),x=Symbol.for("lit-noChange"),m=Symbol.for("lit-nothing"),Ve=new WeakMap,T=P.createTreeWalker(P,129,null,!1);function nt(i,e){if(!Array.isArray(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ue!==void 0?Ue.createHTML(e):e}const st=(i,e)=>{const t=i.length-1,n=[];let s,o=e===2?"<svg>":"",r=K;for(let a=0;a<t;a++){const l=i[a];let c,d,u=-1,h=0;for(;h<l.length&&(r.lastIndex=h,d=r.exec(l),d!==null);)h=r.lastIndex,r===K?d[1]==="!--"?r=Ne:d[1]!==void 0?r=Ie:d[2]!==void 0?(it.test(d[2])&&(s=RegExp("</"+d[2],"g")),r=H):d[3]!==void 0&&(r=H):r===H?d[0]===">"?(r=s??K,u=-1):d[1]===void 0?u=-2:(u=r.lastIndex-d[2].length,c=d[1],r=d[3]===void 0?H:d[3]==='"'?De:Ke):r===De||r===Ke?r=H:r===Ne||r===Ie?r=K:(r=H,s=void 0);const p=r===H&&i[a+1].startsWith("/>")?" ":"";o+=r===K?l+At:u>=0?(n.push(c),l.slice(0,u)+oe+l.slice(u)+S+p):l+S+(u===-2?(n.push(void 0),a):p)}return[nt(i,o+(i[t]||"<?>")+(e===2?"</svg>":"")),n]};class J{constructor({strings:e,_$litType$:t},n){let s;this.parts=[];let o=0,r=0;const a=e.length-1,l=this.parts,[c,d]=st(e,t);if(this.el=J.createElement(c,n),T.currentNode=this.el.content,t===2){const u=this.el.content,h=u.firstChild;h.remove(),u.append(...h.childNodes)}for(;(s=T.nextNode())!==null&&l.length<a;){if(s.nodeType===1){if(s.hasAttributes()){const u=[];for(const h of s.getAttributeNames())if(h.endsWith(oe)||h.startsWith(S)){const p=d[r++];if(u.push(h),p!==void 0){const f=s.getAttribute(p.toLowerCase()+oe).split(S),$=/([.?@])?(.*)/.exec(p);l.push({type:1,index:o,name:$[2],strings:f,ctor:$[1]==="."?rt:$[1]==="?"?at:$[1]==="@"?lt:F})}else l.push({type:6,index:o})}for(const h of u)s.removeAttribute(h)}if(it.test(s.tagName)){const u=s.textContent.split(S),h=u.length-1;if(h>0){s.textContent=U?U.emptyScript:"";for(let p=0;p<h;p++)s.append(u[p],G()),T.nextNode(),l.push({type:2,index:++o});s.append(u[h],G())}}}else if(s.nodeType===8)if(s.data===Te)l.push({type:2,index:o});else{let u=-1;for(;(u=s.data.indexOf(S,u+1))!==-1;)l.push({type:7,index:o}),u+=S.length-1}o++}}static createElement(e,t){const n=P.createElement("template");return n.innerHTML=e,n}}function R(i,e,t=i,n){var s,o,r,a;if(e===x)return e;let l=n!==void 0?(s=t._$Co)===null||s===void 0?void 0:s[n]:t._$Cl;const c=q(e)?void 0:e._$litDirective$;return l?.constructor!==c&&((o=l?._$AO)===null||o===void 0||o.call(l,!1),c===void 0?l=void 0:(l=new c(i),l._$AT(i,t,n)),n!==void 0?((r=(a=t)._$Co)!==null&&r!==void 0?r:a._$Co=[])[n]=l:t._$Cl=l),l!==void 0&&(e=R(i,l._$AS(i,e.values),l,n)),e}class ot{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;const{el:{content:n},parts:s}=this._$AD,o=((t=e?.creationScope)!==null&&t!==void 0?t:P).importNode(n,!0);T.currentNode=o;let r=T.nextNode(),a=0,l=0,c=s[0];for(;c!==void 0;){if(a===c.index){let d;c.type===2?d=new I(r,r.nextSibling,this,e):c.type===1?d=new c.ctor(r,c.name,c.strings,this,e):c.type===6&&(d=new ct(r,this,e)),this._$AV.push(d),c=s[++l]}a!==c?.index&&(r=T.nextNode(),a++)}return T.currentNode=P,o}v(e){let t=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}}class I{constructor(e,t,n,s){var o;this.type=2,this._$AH=m,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=s,this._$Cp=(o=s?.isConnected)===null||o===void 0||o}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=R(this,e,t),q(e)?e===m||e==null||e===""?(this._$AH!==m&&this._$AR(),this._$AH=m):e!==this._$AH&&e!==x&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):tt(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==m&&q(this._$AH)?this._$AA.nextSibling.data=e:this.$(P.createTextNode(e)),this._$AH=e}g(e){var t;const{values:n,_$litType$:s}=e,o=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=J.createElement(nt(s.h,s.h[0]),this.options)),s);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===o)this._$AH.v(n);else{const r=new ot(o,this),a=r.u(this.options);r.v(n),this.$(a),this._$AH=r}}_$AC(e){let t=Ve.get(e.strings);return t===void 0&&Ve.set(e.strings,t=new J(e)),t}T(e){et(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let n,s=0;for(const o of e)s===t.length?t.push(n=new I(this.k(G()),this.k(G()),this,this.options)):n=t[s],n._$AI(o),s++;s<t.length&&(this._$AR(n&&n._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){var n;for((n=this._$AP)===null||n===void 0||n.call(this,!1,!0,t);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var t;this._$AM===void 0&&(this._$Cp=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}}let F=class{constructor(e,t,n,s,o){this.type=1,this._$AH=m,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=o,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=m}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,n,s){const o=this.strings;let r=!1;if(o===void 0)e=R(this,e,t,0),r=!q(e)||e!==this._$AH&&e!==x,r&&(this._$AH=e);else{const a=e;let l,c;for(e=o[0],l=0;l<o.length-1;l++)c=R(this,a[n+l],t,l),c===x&&(c=this._$AH[l]),r||(r=!q(c)||c!==this._$AH[l]),c===m?e=m:e!==m&&(e+=(c??"")+o[l+1]),this._$AH[l]=c}r&&!s&&this.j(e)}j(e){e===m?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}};class rt extends F{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===m?void 0:e}}const jt=U?U.emptyScript:"";class at extends F{constructor(){super(...arguments),this.type=4}j(e){e&&e!==m?this.element.setAttribute(this.name,jt):this.element.removeAttribute(this.name)}}class lt extends F{constructor(e,t,n,s,o){super(e,t,n,s,o),this.type=5}_$AI(e,t=this){var n;if((e=(n=R(this,e,t,0))!==null&&n!==void 0?n:m)===x)return;const s=this._$AH,o=e===m&&s!==m||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,r=e!==m&&(s===m||o);o&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,n;typeof this._$AH=="function"?this._$AH.call((n=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&n!==void 0?n:this.element,e):this._$AH.handleEvent(e)}}class ct{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){R(this,e)}}const Et={O:oe,P:S,A:Te,C:1,M:st,L:ot,R:tt,D:R,I,V:F,H:at,N:lt,U:rt,F:ct},Ge=se.litHtmlPolyfillSupport;Ge?.(J,I),((fe=se.litHtmlVersions)!==null&&fe!==void 0?fe:se.litHtmlVersions=[]).push("2.8.0");const St=(i,e,t)=>{var n,s;const o=(n=t?.renderBefore)!==null&&n!==void 0?n:e;let r=o._$litPart$;if(r===void 0){const a=(s=t?.renderBefore)!==null&&s!==void 0?s:null;o._$litPart$=r=new I(e.insertBefore(G(),a),a,void 0,t??{})}return r._$AI(i),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var me,ye;let C=class extends B{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const n=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=n.firstChild),n}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=St(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return x}};C.finalized=!0,C._$litElement$=!0,(me=globalThis.litElementHydrateSupport)===null||me===void 0||me.call(globalThis,{LitElement:C});const qe=globalThis.litElementPolyfillSupport;qe?.({LitElement:C});((ye=globalThis.litElementVersions)!==null&&ye!==void 0?ye:globalThis.litElementVersions=[]).push("3.3.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const le=i=>e=>typeof e=="function"?((t,n)=>(customElements.define(t,n),n))(i,e):((t,n)=>{const{kind:s,elements:o}=n;return{kind:s,elements:o,finisher(r){customElements.define(t,r)}}})(i,e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ct=(i,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(t){t.createProperty(e.key,i)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(t){t.createProperty(e.key,i)}},Mt=(i,e,t)=>{e.constructor.createProperty(t,i)};function b(i){return(e,t)=>t!==void 0?Mt(i,e,t):Ct(i,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function M(i){return b({...i,state:!0})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ge;((ge=window.HTMLSlotElement)===null||ge===void 0?void 0:ge.prototype.assignedElements)!=null;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const j={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Z=i=>(...e)=>({_$litDirective$:i,values:e});class Q{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:Ht}=Et,dt=i=>i.strings===void 0,Je=()=>document.createComment(""),D=(i,e,t)=>{var n;const s=i._$AA.parentNode,o=e===void 0?i._$AB:e._$AA;if(t===void 0){const r=s.insertBefore(Je(),o),a=s.insertBefore(Je(),o);t=new Ht(r,a,i,i.options)}else{const r=t._$AB.nextSibling,a=t._$AM,l=a!==i;if(l){let c;(n=t._$AQ)===null||n===void 0||n.call(t,i),t._$AM=i,t._$AP!==void 0&&(c=i._$AU)!==a._$AU&&t._$AP(c)}if(r!==o||l){let c=t._$AA;for(;c!==r;){const d=c.nextSibling;s.insertBefore(c,o),c=d}}}return t},O=(i,e,t=i)=>(i._$AI(e,t),i),Ot={},ht=(i,e=Ot)=>i._$AH=e,Tt=i=>i._$AH,_e=i=>{var e;(e=i._$AP)===null||e===void 0||e.call(i,!1,!0);let t=i._$AA;const n=i._$AB.nextSibling;for(;t!==n;){const s=t.nextSibling;t.remove(),t=s}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const We=(i,e,t)=>{const n=new Map;for(let s=e;s<=t;s++)n.set(i[s],s);return n},Pt=Z(class extends Q{constructor(i){if(super(i),i.type!==j.CHILD)throw Error("repeat() can only be used in text expressions")}ct(i,e,t){let n;t===void 0?t=e:e!==void 0&&(n=e);const s=[],o=[];let r=0;for(const a of i)s[r]=n?n(a,r):r,o[r]=t(a,r),r++;return{values:o,keys:s}}render(i,e,t){return this.ct(i,e,t).values}update(i,[e,t,n]){var s;const o=Tt(i),{values:r,keys:a}=this.ct(e,t,n);if(!Array.isArray(o))return this.ut=a,r;const l=(s=this.ut)!==null&&s!==void 0?s:this.ut=[],c=[];let d,u,h=0,p=o.length-1,f=0,$=r.length-1;for(;h<=p&&f<=$;)if(o[h]===null)h++;else if(o[p]===null)p--;else if(l[h]===a[f])c[f]=O(o[h],r[f]),h++,f++;else if(l[p]===a[$])c[$]=O(o[p],r[$]),p--,$--;else if(l[h]===a[$])c[$]=O(o[h],r[$]),D(i,c[$+1],o[h]),h++,$--;else if(l[p]===a[f])c[f]=O(o[p],r[f]),D(i,o[h],o[p]),p--,f++;else if(d===void 0&&(d=We(a,f,$),u=We(l,h,p)),d.has(l[h]))if(d.has(l[p])){const E=u.get(a[f]),he=E!==void 0?o[E]:null;if(he===null){const Pe=D(i,o[h]);O(Pe,r[f]),c[f]=Pe}else c[f]=O(he,r[f]),D(i,o[h],he),o[E]=null;f++}else _e(o[p]),p--;else _e(o[h]),h++;for(;f<=$;){const E=D(i,c[$+1]);O(E,r[f]),c[f++]=E}for(;h<=p;){const E=o[h++];E!==null&&_e(E)}return this.ut=a,ht(i,c),x}});/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Rt=Z(class extends Q{constructor(i){if(super(i),i.type!==j.PROPERTY&&i.type!==j.ATTRIBUTE&&i.type!==j.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!dt(i))throw Error("`live` bindings can only contain a single expression")}render(i){return i}update(i,[e]){if(e===x||e===m)return e;const t=i.element,n=i.name;if(i.type===j.PROPERTY){if(e===t[n])return x}else if(i.type===j.BOOLEAN_ATTRIBUTE){if(!!e===t.hasAttribute(n))return x}else if(i.type===j.ATTRIBUTE&&t.getAttribute(n)===e+"")return x;return ht(i),e}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const V=(i,e)=>{var t,n;const s=i._$AN;if(s===void 0)return!1;for(const o of s)(n=(t=o)._$AO)===null||n===void 0||n.call(t,e,!1),V(o,e);return!0},re=i=>{let e,t;do{if((e=i._$AM)===void 0)break;t=e._$AN,t.delete(i),i=e}while(t?.size===0)},ut=i=>{for(let e;e=i._$AM;i=e){let t=e._$AN;if(t===void 0)e._$AN=t=new Set;else if(t.has(i))break;t.add(i),Bt(e)}};function Lt(i){this._$AN!==void 0?(re(this),this._$AM=i,ut(this)):this._$AM=i}function zt(i,e=!1,t=0){const n=this._$AH,s=this._$AN;if(s!==void 0&&s.size!==0)if(e)if(Array.isArray(n))for(let o=t;o<n.length;o++)V(n[o],!1),re(n[o]);else n!=null&&(V(n,!1),re(n));else V(this,i)}const Bt=i=>{var e,t,n,s;i.type==j.CHILD&&((e=(n=i)._$AP)!==null&&e!==void 0||(n._$AP=zt),(t=(s=i)._$AQ)!==null&&t!==void 0||(s._$AQ=Lt))};class Ut extends Q{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,n){super._$AT(e,t,n),ut(this),this.isConnected=e._$AU}_$AO(e,t=!0){var n,s;e!==this.isConnected&&(this.isConnected=e,e?(n=this.reconnected)===null||n===void 0||n.call(this):(s=this.disconnected)===null||s===void 0||s.call(this)),t&&(V(this,e),re(this))}setValue(e){if(dt(this._$Ct))this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const pt=()=>new Nt;let Nt=class{};const $e=new WeakMap,ft=Z(class extends Ut{render(i){return m}update(i,[e]){var t;const n=e!==this.G;return n&&this.G!==void 0&&this.ot(void 0),(n||this.rt!==this.lt)&&(this.G=e,this.dt=(t=i.options)===null||t===void 0?void 0:t.host,this.ot(this.lt=i.element)),m}ot(i){var e;if(typeof this.G=="function"){const t=(e=this.dt)!==null&&e!==void 0?e:globalThis;let n=$e.get(t);n===void 0&&(n=new WeakMap,$e.set(t,n)),n.get(this.G)!==void 0&&this.G.call(this.dt,void 0),n.set(this.G,i),i!==void 0&&this.G.call(this.dt,i)}else this.G.value=i}get rt(){var i,e,t;return typeof this.G=="function"?(e=$e.get((i=this.dt)!==null&&i!==void 0?i:globalThis))===null||e===void 0?void 0:e.get(this.G):(t=this.G)===null||t===void 0?void 0:t.value}disconnected(){this.rt===this.lt&&this.ot(void 0)}reconnected(){this.ot(this.lt)}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Se=Z(class extends Q{constructor(i){var e;if(super(i),i.type!==j.ATTRIBUTE||i.name!=="class"||((e=i.strings)===null||e===void 0?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(i){return" "+Object.keys(i).filter(e=>i[e]).join(" ")+" "}update(i,[e]){var t,n;if(this.it===void 0){this.it=new Set,i.strings!==void 0&&(this.nt=new Set(i.strings.join(" ").split(/\s/).filter(o=>o!=="")));for(const o in e)e[o]&&!(!((t=this.nt)===null||t===void 0)&&t.has(o))&&this.it.add(o);return this.render(e)}const s=i.element.classList;this.it.forEach(o=>{o in e||(s.remove(o),this.it.delete(o))});for(const o in e){const r=!!e[o];r===this.it.has(o)||!((n=this.nt)===null||n===void 0)&&n.has(o)||(r?(s.add(o),this.it.add(o)):(s.remove(o),this.it.delete(o)))}return x}});/*!
 * hotkeys-js v3.8.7
 * A simple micro-library for defining and dispatching keyboard shortcuts. It has no dependencies.
 * 
 * Copyright (c) 2021 kenny wong <wowohoo@qq.com>
 * http://jaywcjlove.github.io/hotkeys
 * 
 * Licensed under the MIT license.
 */var be=typeof navigator<"u"?navigator.userAgent.toLowerCase().indexOf("firefox")>0:!1;function we(i,e,t){i.addEventListener?i.addEventListener(e,t,!1):i.attachEvent&&i.attachEvent("on".concat(e),function(){t(window.event)})}function vt(i,e){for(var t=e.slice(0,e.length-1),n=0;n<t.length;n++)t[n]=i[t[n].toLowerCase()];return t}function mt(i){typeof i!="string"&&(i=""),i=i.replace(/\s/g,"");for(var e=i.split(","),t=e.lastIndexOf("");t>=0;)e[t-1]+=",",e.splice(t,1),t=e.lastIndexOf("");return e}function It(i,e){for(var t=i.length>=e.length?i:e,n=i.length>=e.length?e:i,s=!0,o=0;o<t.length;o++)n.indexOf(t[o])===-1&&(s=!1);return s}var yt={backspace:8,tab:9,clear:12,enter:13,return:13,esc:27,escape:27,space:32,left:37,up:38,right:39,down:40,del:46,delete:46,ins:45,insert:45,home:36,end:35,pageup:33,pagedown:34,capslock:20,num_0:96,num_1:97,num_2:98,num_3:99,num_4:100,num_5:101,num_6:102,num_7:103,num_8:104,num_9:105,num_multiply:106,num_add:107,num_enter:108,num_subtract:109,num_decimal:110,num_divide:111,"⇪":20,",":188,".":190,"/":191,"`":192,"-":be?173:189,"=":be?61:187,";":be?59:186,"'":222,"[":219,"]":221,"\\":220},L={"⇧":16,shift:16,"⌥":18,alt:18,option:18,"⌃":17,ctrl:17,control:17,"⌘":91,cmd:91,command:91},Fe={16:"shiftKey",18:"altKey",17:"ctrlKey",91:"metaKey",shiftKey:16,ctrlKey:17,altKey:18,metaKey:91},k={16:!1,18:!1,17:!1,91:!1},w={};for(var X=1;X<20;X++)yt["f".concat(X)]=111+X;var v=[],gt="all",_t=[],ce=function(e){return yt[e.toLowerCase()]||L[e.toLowerCase()]||e.toUpperCase().charCodeAt(0)};function $t(i){gt=i||"all"}function W(){return gt||"all"}function Kt(){return v.slice(0)}function Dt(i){var e=i.target||i.srcElement,t=e.tagName,n=!0;return(e.isContentEditable||(t==="INPUT"||t==="TEXTAREA"||t==="SELECT")&&!e.readOnly)&&(n=!1),n}function Vt(i){return typeof i=="string"&&(i=ce(i)),v.indexOf(i)!==-1}function Gt(i,e){var t,n;i||(i=W());for(var s in w)if(Object.prototype.hasOwnProperty.call(w,s))for(t=w[s],n=0;n<t.length;)t[n].scope===i?t.splice(n,1):n++;W()===i&&$t(e||"all")}function qt(i){var e=i.keyCode||i.which||i.charCode,t=v.indexOf(e);if(t>=0&&v.splice(t,1),i.key&&i.key.toLowerCase()==="meta"&&v.splice(0,v.length),(e===93||e===224)&&(e=91),e in k){k[e]=!1;for(var n in L)L[n]===e&&(g[n]=!1)}}function Jt(i){if(!i)Object.keys(w).forEach(function(r){return delete w[r]});else if(Array.isArray(i))i.forEach(function(r){r.key&&ke(r)});else if(typeof i=="object")i.key&&ke(i);else if(typeof i=="string"){for(var e=arguments.length,t=new Array(e>1?e-1:0),n=1;n<e;n++)t[n-1]=arguments[n];var s=t[0],o=t[1];typeof s=="function"&&(o=s,s=""),ke({key:i,scope:s,method:o,splitKey:"+"})}}var ke=function(e){var t=e.key,n=e.scope,s=e.method,o=e.splitKey,r=o===void 0?"+":o,a=mt(t);a.forEach(function(l){var c=l.split(r),d=c.length,u=c[d-1],h=u==="*"?"*":ce(u);if(w[h]){n||(n=W());var p=d>1?vt(L,c):[];w[h]=w[h].map(function(f){var $=s?f.method===s:!0;return $&&f.scope===n&&It(f.mods,p)?{}:f})}})};function Ze(i,e,t){var n;if(e.scope===t||e.scope==="all"){n=e.mods.length>0;for(var s in k)Object.prototype.hasOwnProperty.call(k,s)&&(!k[s]&&e.mods.indexOf(+s)>-1||k[s]&&e.mods.indexOf(+s)===-1)&&(n=!1);(e.mods.length===0&&!k[16]&&!k[18]&&!k[17]&&!k[91]||n||e.shortcut==="*")&&e.method(i,e)===!1&&(i.preventDefault?i.preventDefault():i.returnValue=!1,i.stopPropagation&&i.stopPropagation(),i.cancelBubble&&(i.cancelBubble=!0))}}function Qe(i){var e=w["*"],t=i.keyCode||i.which||i.charCode;if(g.filter.call(this,i)){if((t===93||t===224)&&(t=91),v.indexOf(t)===-1&&t!==229&&v.push(t),["ctrlKey","altKey","shiftKey","metaKey"].forEach(function(p){var f=Fe[p];i[p]&&v.indexOf(f)===-1?v.push(f):!i[p]&&v.indexOf(f)>-1?v.splice(v.indexOf(f),1):p==="metaKey"&&i[p]&&v.length===3&&(i.ctrlKey||i.shiftKey||i.altKey||(v=v.slice(v.indexOf(f))))}),t in k){k[t]=!0;for(var n in L)L[n]===t&&(g[n]=!0);if(!e)return}for(var s in k)Object.prototype.hasOwnProperty.call(k,s)&&(k[s]=i[Fe[s]]);i.getModifierState&&!(i.altKey&&!i.ctrlKey)&&i.getModifierState("AltGraph")&&(v.indexOf(17)===-1&&v.push(17),v.indexOf(18)===-1&&v.push(18),k[17]=!0,k[18]=!0);var o=W();if(e)for(var r=0;r<e.length;r++)e[r].scope===o&&(i.type==="keydown"&&e[r].keydown||i.type==="keyup"&&e[r].keyup)&&Ze(i,e[r],o);if(t in w){for(var a=0;a<w[t].length;a++)if((i.type==="keydown"&&w[t][a].keydown||i.type==="keyup"&&w[t][a].keyup)&&w[t][a].key){for(var l=w[t][a],c=l.splitKey,d=l.key.split(c),u=[],h=0;h<d.length;h++)u.push(ce(d[h]));u.sort().join("")===v.sort().join("")&&Ze(i,l,o)}}}}function Wt(i){return _t.indexOf(i)>-1}function g(i,e,t){v=[];var n=mt(i),s=[],o="all",r=document,a=0,l=!1,c=!0,d="+";for(t===void 0&&typeof e=="function"&&(t=e),Object.prototype.toString.call(e)==="[object Object]"&&(e.scope&&(o=e.scope),e.element&&(r=e.element),e.keyup&&(l=e.keyup),e.keydown!==void 0&&(c=e.keydown),typeof e.splitKey=="string"&&(d=e.splitKey)),typeof e=="string"&&(o=e);a<n.length;a++)i=n[a].split(d),s=[],i.length>1&&(s=vt(L,i)),i=i[i.length-1],i=i==="*"?"*":ce(i),i in w||(w[i]=[]),w[i].push({keyup:l,keydown:c,scope:o,mods:s,shortcut:n[a],method:t,key:n[a],splitKey:d});typeof r<"u"&&!Wt(r)&&window&&(_t.push(r),we(r,"keydown",function(u){Qe(u)}),we(window,"focus",function(){v=[]}),we(r,"keyup",function(u){Qe(u),qt(u)}))}var Ae={setScope:$t,getScope:W,deleteScope:Gt,getPressedKeyCodes:Kt,isPressed:Vt,filter:Dt,unbind:Jt};for(var xe in Ae)Object.prototype.hasOwnProperty.call(Ae,xe)&&(g[xe]=Ae[xe]);if(typeof window<"u"){var Ft=window.hotkeys;g.noConflict=function(i){return i&&window.hotkeys===g&&(window.hotkeys=Ft),g},window.hotkeys=g}var Y=function(i,e,t,n){var s=arguments.length,o=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(r=i[a])&&(o=(s<3?r(o):s>3?r(e,t,o):r(e,t))||o);return s>3&&o&&Object.defineProperty(e,t,o),o};let z=class extends C{constructor(){super(...arguments),this.placeholder="",this.hideBreadcrumbs=!1,this.breadcrumbHome="Home",this.breadcrumbs=[],this._inputRef=pt()}render(){let e="";if(!this.hideBreadcrumbs){const t=[];for(const n of this.breadcrumbs)t.push(A`<button
            tabindex="-1"
            @click=${()=>this.selectParent(n)}
            class="breadcrumb"
          >
            ${n}
          </button>`);e=A`<div class="breadcrumb-list">
        <button
          tabindex="-1"
          @click=${()=>this.selectParent()}
          class="breadcrumb"
        >
          ${this.breadcrumbHome}
        </button>
        ${t}
      </div>`}return A`
      ${e}
      <div part="ninja-input-wrapper" class="search-wrapper">
        <input
          part="ninja-input"
          type="text"
          id="search"
          spellcheck="false"
          autocomplete="off"
          @input="${this._handleInput}"
          ${ft(this._inputRef)}
          placeholder="${this.placeholder}"
          class="search"
        />
      </div>
    `}setSearch(e){this._inputRef.value&&(this._inputRef.value.value=e)}focusSearch(){requestAnimationFrame(()=>this._inputRef.value.focus())}_handleInput(e){const t=e.target;this.dispatchEvent(new CustomEvent("change",{detail:{search:t.value},bubbles:!1,composed:!1}))}selectParent(e){this.dispatchEvent(new CustomEvent("setParent",{detail:{parent:e},bubbles:!0,composed:!0}))}firstUpdated(){this.focusSearch()}_close(){this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0}))}};z.styles=ae`
    :host {
      flex: 1;
      position: relative;
    }
    .search {
      padding: 1.25em;
      flex-grow: 1;
      flex-shrink: 0;
      margin: 0px;
      border: none;
      appearance: none;
      font-size: 1.125em;
      background: transparent;
      caret-color: var(--ninja-accent-color);
      color: var(--ninja-text-color);
      outline: none;
      font-family: var(--ninja-font-family);
    }
    .search::placeholder {
      color: var(--ninja-placeholder-color);
    }
    .breadcrumb-list {
      padding: 1em 4em 0 1em;
      display: flex;
      flex-direction: row;
      align-items: stretch;
      justify-content: flex-start;
      flex: initial;
    }

    .breadcrumb {
      background: var(--ninja-secondary-background-color);
      text-align: center;
      line-height: 1.2em;
      border-radius: var(--ninja-key-border-radius);
      border: 0;
      cursor: pointer;
      padding: 0.1em 0.5em;
      color: var(--ninja-secondary-text-color);
      margin-right: 0.5em;
      outline: none;
      font-family: var(--ninja-font-family);
    }

    .search-wrapper {
      display: flex;
      border-bottom: var(--ninja-separate-border);
    }
  `;Y([b()],z.prototype,"placeholder",void 0);Y([b({type:Boolean})],z.prototype,"hideBreadcrumbs",void 0);Y([b()],z.prototype,"breadcrumbHome",void 0);Y([b({type:Array})],z.prototype,"breadcrumbs",void 0);z=Y([le("ninja-header")],z);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Ce extends Q{constructor(e){if(super(e),this.et=m,e.type!==j.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===m||e==null)return this.ft=void 0,this.et=e;if(e===x)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.et)return this.ft;this.et=e;const t=[e];return t.raw=t,this.ft={_$litType$:this.constructor.resultType,strings:t,values:[]}}}Ce.directiveName="unsafeHTML",Ce.resultType=1;const Zt=Z(Ce);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*Qt(i,e){const t=typeof e=="function";if(i!==void 0){let n=-1;for(const s of i)n>-1&&(yield t?e(n):e),n++,yield s}}function Yt(i,e,t,n){var s=arguments.length,o=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(r=i[a])&&(o=(s<3?r(o):s>3?r(e,t,o):r(e,t))||o);return s>3&&o&&Object.defineProperty(e,t,o),o}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */const Xt=ae`:host{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}`;/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let Me=class extends C{render(){return A`<span><slot></slot></span>`}};Me.styles=[Xt];Me=Yt([le("mwc-icon")],Me);var de=function(i,e,t,n){var s=arguments.length,o=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(r=i[a])&&(o=(s<3?r(o):s>3?r(e,t,o):r(e,t))||o);return s>3&&o&&Object.defineProperty(e,t,o),o};let N=class extends C{constructor(){super(),this.selected=!1,this.hotKeysJoinedView=!0,this.addEventListener("click",this.click)}ensureInView(){requestAnimationFrame(()=>this.scrollIntoView({block:"nearest"}))}click(){this.dispatchEvent(new CustomEvent("actionsSelected",{detail:this.action,bubbles:!0,composed:!0}))}updated(e){e.has("selected")&&this.selected&&this.ensureInView()}render(){let e;this.action.mdIcon?e=A`<mwc-icon part="ninja-icon" class="ninja-icon"
        >${this.action.mdIcon}</mwc-icon
      >`:this.action.icon&&(e=Zt(this.action.icon||""));let t;this.action.hotkey&&(this.hotKeysJoinedView?t=this.action.hotkey.split(",").map(s=>{const o=s.split("+"),r=A`${Qt(o.map(a=>A`<kbd>${a}</kbd>`),"+")}`;return A`<div class="ninja-hotkey ninja-hotkeys">
            ${r}
          </div>`}):t=this.action.hotkey.split(",").map(s=>{const r=s.split("+").map(a=>A`<kbd class="ninja-hotkey">${a}</kbd>`);return A`<kbd class="ninja-hotkeys">${r}</kbd>`}));const n={selected:this.selected,"ninja-action":!0};return A`
      <div
        class="ninja-action"
        part="ninja-action ${this.selected?"ninja-selected":""}"
        class=${Se(n)}
      >
        ${e}
        <div class="ninja-title">${this.action.title}</div>
        ${t}
      </div>
    `}};N.styles=ae`
    :host {
      display: flex;
      width: 100%;
    }
    .ninja-action {
      padding: 0.75em 1em;
      display: flex;
      border-left: 2px solid transparent;
      align-items: center;
      justify-content: start;
      outline: none;
      transition: color 0s ease 0s;
      width: 100%;
    }
    .ninja-action.selected {
      cursor: pointer;
      color: var(--ninja-selected-text-color);
      background-color: var(--ninja-selected-background);
      border-left: 2px solid var(--ninja-accent-color);
      outline: none;
    }
    .ninja-action.selected .ninja-icon {
      color: var(--ninja-selected-text-color);
    }
    .ninja-icon {
      font-size: var(--ninja-icon-size);
      max-width: var(--ninja-icon-size);
      max-height: var(--ninja-icon-size);
      margin-right: 1em;
      color: var(--ninja-icon-color);
      margin-right: 1em;
      position: relative;
    }

    .ninja-title {
      flex-shrink: 0.01;
      margin-right: 0.5em;
      flex-grow: 1;
      font-size: 0.8125em;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .ninja-hotkeys {
      flex-shrink: 0;
      width: min-content;
      display: flex;
    }

    .ninja-hotkeys kbd {
      font-family: inherit;
    }
    .ninja-hotkey {
      background: var(--ninja-secondary-background-color);
      padding: 0.06em 0.25em;
      border-radius: var(--ninja-key-border-radius);
      text-transform: capitalize;
      color: var(--ninja-secondary-text-color);
      font-size: 0.75em;
      font-family: inherit;
    }

    .ninja-hotkey + .ninja-hotkey {
      margin-left: 0.5em;
    }
    .ninja-hotkeys + .ninja-hotkeys {
      margin-left: 1em;
    }
  `;de([b({type:Object})],N.prototype,"action",void 0);de([b({type:Boolean})],N.prototype,"selected",void 0);de([b({type:Boolean})],N.prototype,"hotKeysJoinedView",void 0);N=de([le("ninja-action")],N);const ei=A` <div class="modal-footer" slot="footer">
  <span class="help">
    <svg
      version="1.0"
      class="ninja-examplekey"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1280 1280"
    >
      <path
        d="M1013 376c0 73.4-.4 113.3-1.1 120.2a159.9 159.9 0 0 1-90.2 127.3c-20 9.6-36.7 14-59.2 15.5-7.1.5-121.9.9-255 1h-242l95.5-95.5 95.5-95.5-38.3-38.2-38.2-38.3-160 160c-88 88-160 160.4-160 161 0 .6 72 73 160 161l160 160 38.2-38.3 38.3-38.2-95.5-95.5-95.5-95.5h251.1c252.9 0 259.8-.1 281.4-3.6 72.1-11.8 136.9-54.1 178.5-116.4 8.6-12.9 22.6-40.5 28-55.4 4.4-12 10.7-36.1 13.1-50.6 1.6-9.6 1.8-21 2.1-132.8l.4-122.2H1013v110z"
      />
    </svg>

    to select
  </span>
  <span class="help">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="ninja-examplekey"
      viewBox="0 0 24 24"
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path
        d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"
      />
    </svg>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="ninja-examplekey"
      viewBox="0 0 24 24"
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z" />
    </svg>
    to navigate
  </span>
  <span class="help">
    <span class="ninja-examplekey esc">esc</span>
    to close
  </span>
  <span class="help">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="ninja-examplekey backspace"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fill-rule="evenodd"
        d="M6.707 4.879A3 3 0 018.828 4H15a3 3 0 013 3v6a3 3 0 01-3 3H8.828a3 3 0 01-2.12-.879l-4.415-4.414a1 1 0 010-1.414l4.414-4.414zm4 2.414a1 1 0 00-1.414 1.414L10.586 10l-1.293 1.293a1 1 0 101.414 1.414L12 11.414l1.293 1.293a1 1 0 001.414-1.414L13.414 10l1.293-1.293a1 1 0 00-1.414-1.414L12 8.586l-1.293-1.293z"
        clip-rule="evenodd"
      />
    </svg>
    move to parent
  </span>
</div>`,ti=ae`
  :host {
    --ninja-width: 640px;
    --ninja-backdrop-filter: none;
    --ninja-overflow-background: rgba(255, 255, 255, 0.5);
    --ninja-text-color: rgb(60, 65, 73);
    --ninja-font-size: 16px;
    --ninja-top: 20%;

    --ninja-key-border-radius: 0.25em;
    --ninja-accent-color: rgb(110, 94, 210);
    --ninja-secondary-background-color: rgb(239, 241, 244);
    --ninja-secondary-text-color: rgb(107, 111, 118);

    --ninja-selected-background: rgb(248, 249, 251);

    --ninja-icon-color: var(--ninja-secondary-text-color);
    --ninja-icon-size: 1.2em;
    --ninja-separate-border: 1px solid var(--ninja-secondary-background-color);

    --ninja-modal-background: #fff;
    --ninja-modal-shadow: rgb(0 0 0 / 50%) 0px 16px 70px;

    --ninja-actions-height: 300px;
    --ninja-group-text-color: rgb(144, 149, 157);

    --ninja-footer-background: rgba(242, 242, 242, 0.4);

    --ninja-placeholder-color: #8e8e8e;

    font-size: var(--ninja-font-size);

    --ninja-z-index: 1;
  }

  :host(.dark) {
    --ninja-backdrop-filter: none;
    --ninja-overflow-background: rgba(0, 0, 0, 0.7);
    --ninja-text-color: #7d7d7d;

    --ninja-modal-background: rgba(17, 17, 17, 0.85);
    --ninja-accent-color: rgb(110, 94, 210);
    --ninja-secondary-background-color: rgba(51, 51, 51, 0.44);
    --ninja-secondary-text-color: #888;

    --ninja-selected-text-color: #eaeaea;
    --ninja-selected-background: rgba(51, 51, 51, 0.44);

    --ninja-icon-color: var(--ninja-secondary-text-color);
    --ninja-separate-border: 1px solid var(--ninja-secondary-background-color);

    --ninja-modal-shadow: 0 16px 70px rgba(0, 0, 0, 0.2);

    --ninja-group-text-color: rgb(144, 149, 157);

    --ninja-footer-background: rgba(30, 30, 30, 85%);
  }

  .modal {
    display: none;
    position: fixed;
    z-index: var(--ninja-z-index);
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background: var(--ninja-overflow-background);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-backdrop-filter: var(--ninja-backdrop-filter);
    backdrop-filter: var(--ninja-backdrop-filter);
    text-align: left;
    color: var(--ninja-text-color);
    font-family: var(--ninja-font-family);
  }
  .modal.visible {
    display: block;
  }

  .modal-content {
    position: relative;
    top: var(--ninja-top);
    margin: auto;
    padding: 0;
    display: flex;
    flex-direction: column;
    flex-shrink: 1;
    -webkit-box-flex: 1;
    flex-grow: 1;
    min-width: 0px;
    will-change: transform;
    background: var(--ninja-modal-background);
    border-radius: 0.5em;
    box-shadow: var(--ninja-modal-shadow);
    max-width: var(--ninja-width);
    overflow: hidden;
  }

  .bump {
    animation: zoom-in-zoom-out 0.2s ease;
  }

  @keyframes zoom-in-zoom-out {
    0% {
      transform: scale(0.99);
    }
    50% {
      transform: scale(1.01, 1.01);
    }
    100% {
      transform: scale(1, 1);
    }
  }

  .ninja-github {
    color: var(--ninja-keys-text-color);
    font-weight: normal;
    text-decoration: none;
  }

  .actions-list {
    max-height: var(--ninja-actions-height);
    overflow: auto;
    scroll-behavior: smooth;
    position: relative;
    margin: 0;
    padding: 0.5em 0;
    list-style: none;
    scroll-behavior: smooth;
  }

  .group-header {
    height: 1.375em;
    line-height: 1.375em;
    padding-left: 1.25em;
    padding-top: 0.5em;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    font-size: 0.75em;
    line-height: 1em;
    color: var(--ninja-group-text-color);
    margin: 1px 0;
  }

  .modal-footer {
    background: var(--ninja-footer-background);
    padding: 0.5em 1em;
    display: flex;
    /* font-size: 0.75em; */
    border-top: var(--ninja-separate-border);
    color: var(--ninja-secondary-text-color);
  }

  .modal-footer .help {
    display: flex;
    margin-right: 1em;
    align-items: center;
    font-size: 0.75em;
  }

  .ninja-examplekey {
    background: var(--ninja-secondary-background-color);
    padding: 0.06em 0.25em;
    border-radius: var(--ninja-key-border-radius);
    color: var(--ninja-secondary-text-color);
    width: 1em;
    height: 1em;
    margin-right: 0.5em;
    font-size: 1.25em;
    fill: currentColor;
  }
  .ninja-examplekey.esc {
    width: auto;
    height: auto;
    font-size: 1.1em;
  }
  .ninja-examplekey.backspace {
    opacity: 0.7;
  }
`;var _=function(i,e,t,n){var s=arguments.length,o=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(r=i[a])&&(o=(s<3?r(o):s>3?r(e,t,o):r(e,t))||o);return s>3&&o&&Object.defineProperty(e,t,o),o};let y=class extends C{constructor(){super(...arguments),this.placeholder="Type a command or search...",this.disableHotkeys=!1,this.hideBreadcrumbs=!1,this.openHotkey="cmd+k,ctrl+k",this.navigationUpHotkey="up,shift+tab",this.navigationDownHotkey="down,tab",this.closeHotkey="esc",this.goBackHotkey="backspace",this.selectHotkey="enter",this.hotKeysJoinedView=!1,this.noAutoLoadMdIcons=!1,this.data=[],this.visible=!1,this._bump=!0,this._actionMatches=[],this._search="",this._flatData=[],this._headerRef=pt()}open(e={}){this._bump=!0,this.visible=!0,this._headerRef.value.focusSearch(),this._actionMatches.length>0&&(this._selected=this._actionMatches[0]),this.setParent(e.parent)}close(){this._bump=!1,this.visible=!1}setParent(e){e?this._currentRoot=e:this._currentRoot=void 0,this._selected=void 0,this._search="",this._headerRef.value.setSearch("")}get breadcrumbs(){var e;const t=[];let n=(e=this._selected)===null||e===void 0?void 0:e.parent;if(n)for(t.push(n);n;){const s=this._flatData.find(o=>o.id===n);s?.parent&&t.push(s.parent),n=s?s.parent:void 0}return t.reverse()}connectedCallback(){super.connectedCallback(),this.noAutoLoadMdIcons||document.fonts.load("24px Material Icons","apps").then(()=>{}),this._registerInternalHotkeys()}disconnectedCallback(){super.disconnectedCallback(),this._unregisterInternalHotkeys()}_flattern(e,t){let n=[];return e||(e=[]),e.map(s=>{const o=s.children&&s.children.some(a=>typeof a=="string"),r={...s,parent:s.parent||t};return o||(r.children&&r.children.length&&(t=s.id,n=[...n,...r.children]),r.children=r.children?r.children.map(a=>a.id):[]),r}).concat(n.length?this._flattern(n,t):n)}update(e){e.has("data")&&!this.disableHotkeys&&(this._flatData=this._flattern(this.data),this._flatData.filter(t=>!!t.hotkey).forEach(t=>{g(t.hotkey,n=>{n.preventDefault(),t.handler&&t.handler(t)})})),super.update(e)}_registerInternalHotkeys(){this.openHotkey&&g(this.openHotkey,e=>{e.preventDefault(),this.visible?this.close():this.open()}),this.selectHotkey&&g(this.selectHotkey,e=>{this.visible&&(e.preventDefault(),this._actionSelected(this._actionMatches[this._selectedIndex]))}),this.goBackHotkey&&g(this.goBackHotkey,e=>{this.visible&&(this._search||(e.preventDefault(),this._goBack()))}),this.navigationDownHotkey&&g(this.navigationDownHotkey,e=>{this.visible&&(e.preventDefault(),this._selectedIndex>=this._actionMatches.length-1?this._selected=this._actionMatches[0]:this._selected=this._actionMatches[this._selectedIndex+1])}),this.navigationUpHotkey&&g(this.navigationUpHotkey,e=>{this.visible&&(e.preventDefault(),this._selectedIndex===0?this._selected=this._actionMatches[this._actionMatches.length-1]:this._selected=this._actionMatches[this._selectedIndex-1])}),this.closeHotkey&&g(this.closeHotkey,()=>{this.visible&&this.close()})}_unregisterInternalHotkeys(){this.openHotkey&&g.unbind(this.openHotkey),this.selectHotkey&&g.unbind(this.selectHotkey),this.goBackHotkey&&g.unbind(this.goBackHotkey),this.navigationDownHotkey&&g.unbind(this.navigationDownHotkey),this.navigationUpHotkey&&g.unbind(this.navigationUpHotkey),this.closeHotkey&&g.unbind(this.closeHotkey)}_actionFocused(e,t){this._selected=e,t.target.ensureInView()}_onTransitionEnd(){this._bump=!1}_goBack(){const e=this.breadcrumbs.length>1?this.breadcrumbs[this.breadcrumbs.length-2]:void 0;this.setParent(e)}render(){const e={bump:this._bump,"modal-content":!0},t={visible:this.visible,modal:!0},s=this._flatData.filter(a=>{var l;const c=new RegExp(this._search,"gi"),d=a.title.match(c)||((l=a.keywords)===null||l===void 0?void 0:l.match(c));return(!this._currentRoot&&this._search||a.parent===this._currentRoot)&&d}).reduce((a,l)=>a.set(l.section,[...a.get(l.section)||[],l]),new Map);this._actionMatches=[...s.values()].flat(),this._actionMatches.length>0&&this._selectedIndex===-1&&(this._selected=this._actionMatches[0]),this._actionMatches.length===0&&(this._selected=void 0);const o=a=>A` ${Pt(a,l=>l.id,l=>{var c;return A`<ninja-action
            exportparts="ninja-action,ninja-selected,ninja-icon"
            .selected=${Rt(l.id===((c=this._selected)===null||c===void 0?void 0:c.id))}
            .hotKeysJoinedView=${this.hotKeysJoinedView}
            @mouseover=${d=>this._actionFocused(l,d)}
            @actionsSelected=${d=>this._actionSelected(d.detail)}
            .action=${l}
          ></ninja-action>`})}`,r=[];return s.forEach((a,l)=>{const c=l?A`<div class="group-header">${l}</div>`:void 0;r.push(A`${c}${o(a)}`)}),A`
      <div @click=${this._overlayClick} class=${Se(t)}>
        <div class=${Se(e)} @animationend=${this._onTransitionEnd}>
          <ninja-header
            exportparts="ninja-input,ninja-input-wrapper"
            ${ft(this._headerRef)}
            .placeholder=${this.placeholder}
            .hideBreadcrumbs=${this.hideBreadcrumbs}
            .breadcrumbs=${this.breadcrumbs}
            @change=${this._handleInput}
            @setParent=${a=>this.setParent(a.detail.parent)}
            @close=${this.close}
          >
          </ninja-header>
          <div class="modal-body">
            <div class="actions-list" part="actions-list">${r}</div>
          </div>
          <slot name="footer"> ${ei} </slot>
        </div>
      </div>
    `}get _selectedIndex(){return this._selected?this._actionMatches.indexOf(this._selected):-1}_actionSelected(e){var t;if(this.dispatchEvent(new CustomEvent("selected",{detail:{search:this._search,action:e},bubbles:!0,composed:!0})),!!e){if(e.children&&((t=e.children)===null||t===void 0?void 0:t.length)>0&&(this._currentRoot=e.id,this._search=""),this._headerRef.value.setSearch(""),this._headerRef.value.focusSearch(),e.handler){const n=e.handler(e);n?.keepOpen||this.close()}this._bump=!0}}async _handleInput(e){this._search=e.detail.search,await this.updateComplete,this.dispatchEvent(new CustomEvent("change",{detail:{search:this._search,actions:this._actionMatches},bubbles:!0,composed:!0}))}_overlayClick(e){var t;!((t=e.target)===null||t===void 0)&&t.classList.contains("modal")&&this.close()}};y.styles=[ti];_([b({type:String})],y.prototype,"placeholder",void 0);_([b({type:Boolean})],y.prototype,"disableHotkeys",void 0);_([b({type:Boolean})],y.prototype,"hideBreadcrumbs",void 0);_([b()],y.prototype,"openHotkey",void 0);_([b()],y.prototype,"navigationUpHotkey",void 0);_([b()],y.prototype,"navigationDownHotkey",void 0);_([b()],y.prototype,"closeHotkey",void 0);_([b()],y.prototype,"goBackHotkey",void 0);_([b()],y.prototype,"selectHotkey",void 0);_([b({type:Boolean})],y.prototype,"hotKeysJoinedView",void 0);_([b({type:Boolean})],y.prototype,"noAutoLoadMdIcons",void 0);_([b({type:Array,hasChanged(){return!0}})],y.prototype,"data",void 0);_([M()],y.prototype,"visible",void 0);_([M()],y.prototype,"_bump",void 0);_([M()],y.prototype,"_actionMatches",void 0);_([M()],y.prototype,"_search",void 0);_([M()],y.prototype,"_currentRoot",void 0);_([M()],y.prototype,"_flatData",void 0);_([M()],y.prototype,"breadcrumbs",null);_([M()],y.prototype,"_selected",void 0);y=_([le("ninja-keys")],y);const ee='style="margin-right: 8px" width="16" height="16"',te=document.querySelector("ninja-keys"),ii=document.getElementById("footer-button");ii?.addEventListener("click",()=>{var i=new KeyboardEvent("keydown",{key:"K",code:"KeyK",keyCode:75,which:75,ctrlKey:!0,altKey:!1,shiftKey:!1,metaKey:!1});document.dispatchEvent(i)});if(te!=null){const i=te.getAttribute("data-info")??"[]",t=JSON.parse(i).map(({url:n,hotkey:s,icon:o,id:r,section:a,title:l})=>({id:r,title:l,icon:o,hotkey:s,section:a,handler:()=>{window.open(n,"_blank")}}));te.data=[{id:"print",title:"Imprimir",icon:`<svg ${ee} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0 1 10.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0 .229 2.523a1.125 1.125 0 0 1-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0 0 21 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 0 0-1.913-.247M6.34 18H5.25A2.25 2.25 0 0 1 3 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 0 1 1.913-.247m10.5 0a48.536 48.536 0 0 0-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5Zm-3 0h.008v.008H15V10.5Z" />
</svg>`,hotkey:"ctrl+P",section:"Acciones",handler:()=>{window.print()}},{id:"Tema",title:"Cambiar Tema",icon:`<svg ${ee} xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-sunset-2" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M3 13h1" />
  <path d="M20 13h1" />
  <path d="M5.6 6.6l.7 .7" />
  <path d="M18.4 6.6l-.7 .7" />
  <path d="M8 13a4 4 0 1 1 8 0" />
  <path d="M3 17h18" />
  <path d="M7 20h5" />
  <path d="M16 20h1" />
  <path d="M12 5v-1" />
</svg>`,children:["Light Mode","Dark Mode"],hotkey:"ctrl+M",section:"Acciones",handler:()=>(te.open({parent:"Theme"}),{keepOpen:!0})},{id:"Light Mode",title:"Light Mode",icon:`<svg ${ee} xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-sun-filled" width="60" height="60" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M12 19a1 1 0 0 1 .993 .883l.007 .117v1a1 1 0 0 1 -1.993 .117l-.007 -.117v-1a1 1 0 0 1 1 -1z" stroke-width="0" fill="currentColor" />
        <path d="M18.313 16.91l.094 .083l.7 .7a1 1 0 0 1 -1.32 1.497l-.094 -.083l-.7 -.7a1 1 0 0 1 1.218 -1.567l.102 .07z" stroke-width="0" fill="currentColor" />
        <path d="M7.007 16.993a1 1 0 0 1 .083 1.32l-.083 .094l-.7 .7a1 1 0 0 1 -1.497 -1.32l.083 -.094l.7 -.7a1 1 0 0 1 1.414 0z" stroke-width="0" fill="currentColor" />
        <path d="M4 11a1 1 0 0 1 .117 1.993l-.117 .007h-1a1 1 0 0 1 -.117 -1.993l.117 -.007h1z" stroke-width="0" fill="currentColor" />
        <path d="M21 11a1 1 0 0 1 .117 1.993l-.117 .007h-1a1 1 0 0 1 -.117 -1.993l.117 -.007h1z" stroke-width="0" fill="currentColor" />
        <path d="M6.213 4.81l.094 .083l.7 .7a1 1 0 0 1 -1.32 1.497l-.094 -.083l-.7 -.7a1 1 0 0 1 1.217 -1.567l.102 .07z" stroke-width="0" fill="currentColor" />
        <path d="M19.107 4.893a1 1 0 0 1 .083 1.32l-.083 .094l-.7 .7a1 1 0 0 1 -1.497 -1.32l.083 -.094l.7 -.7a1 1 0 0 1 1.414 0z" stroke-width="0" fill="currentColor" />
        <path d="M12 2a1 1 0 0 1 .993 .883l.007 .117v1a1 1 0 0 1 -1.993 .117l-.007 -.117v-1a1 1 0 0 1 1 -1z" stroke-width="0" fill="currentColor" />
        <path d="M12 7a5 5 0 1 1 -4.995 5.217l-.005 -.217l.005 -.217a5 5 0 0 1 4.995 -4.783z" stroke-width="0" fill="currentColor" />
      </svg>`,parent:"Theme",handler:()=>{document.querySelector("ninja-keys")?.classList.remove("dark"),document.documentElement.classList.remove("dark")}},{id:"Dark Mode",title:"Dark Mode",icon:`<svg ${ee} xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-moon-filled" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M12 1.992a10 10 0 1 0 9.236 13.838c.341 -.82 -.476 -1.644 -1.298 -1.31a6.5 6.5 0 0 1 -6.864 -10.787l.077 -.08c.551 -.63 .113 -1.653 -.758 -1.653h-.266l-.068 -.006l-.06 -.002z" stroke-width="0" fill="currentColor" />
      </svg>`,parent:"Theme",handler:()=>{document.querySelector("ninja-keys")?.classList.add("dark"),document.documentElement.classList.add("dark")}},{id:"Spanish Mode",title:"Spanish Mode",parent:"Language",handler:()=>{document.querySelector("ninja-keys")?.classList.remove("dark"),document.documentElement.classList.remove("dark")}},{id:"English Mode",title:"English Mode",parent:"Language",handler:()=>{document.querySelector("ninja-keys")?.classList.add("dark"),document.documentElement.classList.add("dark")}},...t]}
