(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(s){if(s.ep)return;s.ep=!0;const n=e(s);fetch(s.href,n)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const U=globalThis,R=U.ShadowRoot&&(U.ShadyCSS===void 0||U.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,k=Symbol(),B=new WeakMap;let Q=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==k)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(R&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=B.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&B.set(e,t))}return t}toString(){return this.cssText}};const st=r=>new Q(typeof r=="string"?r:r+"",void 0,k),rt=(r,...t)=>{const e=r.length===1?r[0]:t.reduce((i,s,n)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+r[n+1],r[0]);return new Q(e,r,k)},nt=(r,t)=>{if(R)r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const i=document.createElement("style"),s=U.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=e.cssText,r.appendChild(i)}},I=R?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return st(e)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:ot,defineProperty:at,getOwnPropertyDescriptor:ct,getOwnPropertyNames:lt,getOwnPropertySymbols:ht,getPrototypeOf:dt}=Object,T=globalThis,q=T.trustedTypes,pt=q?q.emptyScript:"",ut=T.reactiveElementPolyfillSupport,E=(r,t)=>r,z={toAttribute(r,t){switch(t){case Boolean:r=r?pt:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},X=(r,t)=>!ot(r,t),V={attribute:!0,type:String,converter:z,reflect:!1,useDefault:!1,hasChanged:X};Symbol.metadata??=Symbol("metadata"),T.litPropertyMetadata??=new WeakMap;let y=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=V){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);s!==void 0&&at(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:n}=ct(this.prototype,t)??{get(){return this[e]},set(o){this[e]=o}};return{get:s,set(o){const l=s?.call(this);n?.call(this,o),this.requestUpdate(t,l,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??V}static _$Ei(){if(this.hasOwnProperty(E("elementProperties")))return;const t=dt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(E("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(E("properties"))){const e=this.properties,i=[...lt(e),...ht(e)];for(const s of i)this.createProperty(s,e[s])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[i,s]of e)this.elementProperties.set(i,s)}this._$Eh=new Map;for(const[e,i]of this.elementProperties){const s=this._$Eu(e,i);s!==void 0&&this._$Eh.set(s,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const s of i)e.unshift(I(s))}else t!==void 0&&e.push(I(t));return e}static _$Eu(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return nt(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(s!==void 0&&i.reflect===!0){const n=(i.converter?.toAttribute!==void 0?i.converter:z).toAttribute(e,i.type);this._$Em=t,n==null?this.removeAttribute(s):this.setAttribute(s,n),this._$Em=null}}_$AK(t,e){const i=this.constructor,s=i._$Eh.get(t);if(s!==void 0&&this._$Em!==s){const n=i.getPropertyOptions(s),o=typeof n.converter=="function"?{fromAttribute:n.converter}:n.converter?.fromAttribute!==void 0?n.converter:z;this._$Em=s;const l=o.fromAttribute(e,n.type);this[s]=l??this._$Ej?.get(s)??l,this._$Em=null}}requestUpdate(t,e,i){if(t!==void 0){const s=this.constructor,n=this[t];if(i??=s.getPropertyOptions(t),!((i.hasChanged??X)(n,e)||i.useDefault&&i.reflect&&n===this._$Ej?.get(t)&&!this.hasAttribute(s._$Eu(t,i))))return;this.C(t,e,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:s,wrapped:n},o){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,o??e??this[t]),n!==!0||o!==void 0)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),s===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[s,n]of this._$Ep)this[s]=n;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[s,n]of i){const{wrapped:o}=n,l=this[s];o!==!0||this._$AL.has(s)||l===void 0||this.C(s,void 0,n,l)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(i=>i.hostUpdate?.()),this.update(e)):this._$EM()}catch(i){throw t=!1,this._$EM(),i}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(t){}firstUpdated(t){}};y.elementStyles=[],y.shadowRootOptions={mode:"open"},y[E("elementProperties")]=new Map,y[E("finalized")]=new Map,ut?.({ReactiveElement:y}),(T.reactiveElementVersions??=[]).push("2.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const L=globalThis,H=L.trustedTypes,W=H?H.createPolicy("lit-html",{createHTML:r=>r}):void 0,Y="$lit$",m=`lit$${Math.random().toFixed(9).slice(2)}$`,tt="?"+m,ft=`<${tt}>`,_=document,S=()=>_.createComment(""),w=r=>r===null||typeof r!="object"&&typeof r!="function",j=Array.isArray,mt=r=>j(r)||typeof r?.[Symbol.iterator]=="function",M=`[ 	
\f\r]`,v=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,K=/-->/g,F=/>/g,$=RegExp(`>|${M}(?:([^\\s"'>=/]+)(${M}*=${M}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),J=/'/g,Z=/"/g,et=/^(?:script|style|textarea|title)$/i,$t=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),gt=$t(1),A=Symbol.for("lit-noChange"),d=Symbol.for("lit-nothing"),G=new WeakMap,g=_.createTreeWalker(_,129);function it(r,t){if(!j(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return W!==void 0?W.createHTML(t):t}const _t=(r,t)=>{const e=r.length-1,i=[];let s,n=t===2?"<svg>":t===3?"<math>":"",o=v;for(let l=0;l<e;l++){const a=r[l];let h,p,c=-1,u=0;for(;u<a.length&&(o.lastIndex=u,p=o.exec(a),p!==null);)u=o.lastIndex,o===v?p[1]==="!--"?o=K:p[1]!==void 0?o=F:p[2]!==void 0?(et.test(p[2])&&(s=RegExp("</"+p[2],"g")),o=$):p[3]!==void 0&&(o=$):o===$?p[0]===">"?(o=s??v,c=-1):p[1]===void 0?c=-2:(c=o.lastIndex-p[2].length,h=p[1],o=p[3]===void 0?$:p[3]==='"'?Z:J):o===Z||o===J?o=$:o===K||o===F?o=v:(o=$,s=void 0);const f=o===$&&r[l+1].startsWith("/>")?" ":"";n+=o===v?a+ft:c>=0?(i.push(h),a.slice(0,c)+Y+a.slice(c)+m+f):a+m+(c===-2?l:f)}return[it(r,n+(r[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),i]};class C{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let n=0,o=0;const l=t.length-1,a=this.parts,[h,p]=_t(t,e);if(this.el=C.createElement(h,i),g.currentNode=this.el.content,e===2||e===3){const c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(s=g.nextNode())!==null&&a.length<l;){if(s.nodeType===1){if(s.hasAttributes())for(const c of s.getAttributeNames())if(c.endsWith(Y)){const u=p[o++],f=s.getAttribute(c).split(m),O=/([.?@])?(.*)/.exec(u);a.push({type:1,index:n,name:O[2],strings:f,ctor:O[1]==="."?At:O[1]==="?"?bt:O[1]==="@"?vt:N}),s.removeAttribute(c)}else c.startsWith(m)&&(a.push({type:6,index:n}),s.removeAttribute(c));if(et.test(s.tagName)){const c=s.textContent.split(m),u=c.length-1;if(u>0){s.textContent=H?H.emptyScript:"";for(let f=0;f<u;f++)s.append(c[f],S()),g.nextNode(),a.push({type:2,index:++n});s.append(c[u],S())}}}else if(s.nodeType===8)if(s.data===tt)a.push({type:2,index:n});else{let c=-1;for(;(c=s.data.indexOf(m,c+1))!==-1;)a.push({type:7,index:n}),c+=m.length-1}n++}}static createElement(t,e){const i=_.createElement("template");return i.innerHTML=t,i}}function b(r,t,e=r,i){if(t===A)return t;let s=i!==void 0?e._$Co?.[i]:e._$Cl;const n=w(t)?void 0:t._$litDirective$;return s?.constructor!==n&&(s?._$AO?.(!1),n===void 0?s=void 0:(s=new n(r),s._$AT(r,e,i)),i!==void 0?(e._$Co??=[])[i]=s:e._$Cl=s),s!==void 0&&(t=b(r,s._$AS(r,t.values),s,i)),t}class yt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??_).importNode(e,!0);g.currentNode=s;let n=g.nextNode(),o=0,l=0,a=i[0];for(;a!==void 0;){if(o===a.index){let h;a.type===2?h=new P(n,n.nextSibling,this,t):a.type===1?h=new a.ctor(n,a.name,a.strings,this,t):a.type===6&&(h=new Et(n,this,t)),this._$AV.push(h),a=i[++l]}o!==a?.index&&(n=g.nextNode(),o++)}return g.currentNode=_,s}p(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class P{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=d,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=b(this,t,e),w(t)?t===d||t==null||t===""?(this._$AH!==d&&this._$AR(),this._$AH=d):t!==this._$AH&&t!==A&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):mt(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==d&&w(this._$AH)?this._$AA.nextSibling.data=t:this.T(_.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,s=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=C.createElement(it(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{const n=new yt(s,this),o=n.u(this.options);n.p(e),this.T(o),this._$AH=n}}_$AC(t){let e=G.get(t.strings);return e===void 0&&G.set(t.strings,e=new C(t)),e}k(t){j(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const n of t)s===e.length?e.push(i=new P(this.O(S()),this.O(S()),this,this.options)):i=e[s],i._$AI(n),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class N{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,n){this.type=1,this._$AH=d,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=d}_$AI(t,e=this,i,s){const n=this.strings;let o=!1;if(n===void 0)t=b(this,t,e,0),o=!w(t)||t!==this._$AH&&t!==A,o&&(this._$AH=t);else{const l=t;let a,h;for(t=n[0],a=0;a<n.length-1;a++)h=b(this,l[i+a],e,a),h===A&&(h=this._$AH[a]),o||=!w(h)||h!==this._$AH[a],h===d?t=d:t!==d&&(t+=(h??"")+n[a+1]),this._$AH[a]=h}o&&!s&&this.j(t)}j(t){t===d?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class At extends N{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===d?void 0:t}}class bt extends N{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==d)}}class vt extends N{constructor(t,e,i,s,n){super(t,e,i,s,n),this.type=5}_$AI(t,e=this){if((t=b(this,t,e,0)??d)===A)return;const i=this._$AH,s=t===d&&i!==d||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,n=t!==d&&(i===d||s);s&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class Et{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){b(this,t)}}const xt=L.litHtmlPolyfillSupport;xt?.(C,P),(L.litHtmlVersions??=[]).push("3.3.1");const St=(r,t,e)=>{const i=e?.renderBefore??t;let s=i._$litPart$;if(s===void 0){const n=e?.renderBefore??null;i._$litPart$=s=new P(t.insertBefore(S(),n),n,void 0,e??{})}return s._$AI(r),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const D=globalThis;class x extends y{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=St(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return A}}x._$litElement$=!0,x.finalized=!0,D.litElementHydrateSupport?.({LitElement:x});const wt=D.litElementPolyfillSupport;wt?.({LitElement:x});(D.litElementVersions??=[]).push("4.2.1");class Ct extends x{static properties={brand:{type:String},img:{type:String},productTitle:{type:String},productCollection:{type:String},productDescription:{type:String},price:{type:String}};static styles=rt`
        /* Usa :host para aplicar estilos al elemento personalizado en sí */
        :host {
            --primary-color: #5a6cb2;
            --secondary-color: #5161a0;
            margin: 0;
            padding: 0;
            font-size: 62.5%; /* Base para rem */
            box-sizing: border-box; /* Asegura que el padding y el border se incluyan en el ancho y alto total */
            display: inline-block; /* Los elementos personalizados son inline por defecto */
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            // max-width: 300px;
            margin: 1rem;
            font-family: sans-serif;
        }

        article.card-component {
            // display: flex;
            // flex-direction: column;
            // height: 100%;
            display: grid;
            grid-template-rows: 14rem 20rem;
            max-width: 500px; 
        }

        .card-component--brand-container { /* Contenedor para marca e imagen */
            position: relative;
            text-align: center;
            padding-bottom: 10px; /* Espacio para la marca */
            background-color: var(--primary-color);
        }

        .brand-container--brand { /* Nombre de la marca */
            position: absolute;
            left: 10px;
            border-radius: 4px;
            font-size: 100px;
            font-weight: 800;
            color: var(--secondary-color);
            z-index: 1;
        }

        .brand-container--image-container {
            position: absolute;
            top: 5rem;
            width: 100%;
            margin: 0 auto;
            overflow: hidden;
        }

        .brand-container--image-container img {
            width: 100%;
            max-width: 20rem;
            max-height: 100%;
            margin: 0 auto;
            object-fit: contain; /* Asegura que la imagen se ajuste sin recortar */
        }

        .card-component--details-container { /* Contenedor para los detalles del texto */
            padding: 1rem;
            display: flex;
            flex-direction: column;
            flex-grow: 1; /* Permite que esta sección ocupe el espacio restante */
            justify-content: space-around;
            background-color: #f9f9f9;
        }

        .details-container--text-info {
            margin-top: 1rem;
        }

        .text-info--product-title {
            display: inline;
            padding: 0;
            margin: 0;
            margin-right: 1rem;
            font-size: 1.8rem;
            color: #444444;
        }

        .text-info--product-collection {
            display: inline;
            padding: 0;
            margin: 0;
            font-size: 1.2rem;
            font-weight: 300;
            color: #a69999;
            letter-spacing: 0.1rem;
        }

        .details-container--product-description {
            margin: 0;
            font-size: 1rem;
            color: #444444;
        }

        .details-container--price-info { /* Contenedor de precio y botón */
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 10px; /* Espacio encima del precio/botón */
        }

        .price-info--price {
            font-size: 1.6rem;
            font-weight: bold;
            color: #a69999;
        }

        .price-info--price-button {
            background-color: var(--primary-color);
            color: white;
            padding: 8px 15px;
            border-radius: 2rem;
            cursor: pointer;
            font-size: 1rem;
            transition: background-color 0.2s ease;
        }

        .price-info--price-button:hover {
            background-color: #0056b3;
        }

        @media (min-width: 1024px) {
            article.card-component {
                position: relative;
                grid-template-rows: none;
                grid-template-columns: 1fr 1fr;
                max-width: 60rem;
                min-height: 38rem;
            }

            .brand-container--image-container {
                max-width: 48rem;
                top: 8rem;
                right: 24rem;
                transform: rotate(-30deg);
                z-index: 1;
            }

            .card-component--brand-container {
                position: static;
            }

            .card-component--details-container {
                justify-content: space-evenly;
                padding: 3rem;
            }
            
            .brand-container--brand {
                font-size: 8rem;
                z-index: 0;
            }

            .brand-container--image-container img {
                max-width: none;
            }
            
            .text-info--product-title {
                display: block;
                margin: 0;
                margin-bottom: 1rem;
                font-size: 2.8rem;
            }

            .text-info--product-collection {
                display: block;
                margin: 0;
                font-size: 1.4rem;
            }

            .details-container--product-description {
                margin-left: 3rem;
            }

            .price-info--price {
                font-size: 2.6rem;
            }

            .price-info--price-button {
                padding: 12px 20px;
                font-size: 1.4rem;
        }
    `;render(){return gt`
            <article class="card-component">
                <div class="card-component--brand-container">
                    <span class="brand-container--brand">${this.brand}</span>
                    <figure class="brand-container--image-container">
                        <img src=${this.img||""} alt="product image"/>
                    </figure>
                </div>

                <div class="card-component--details-container">
                    <div class="details-container--text-info">
                        <h1 class="text-info--product-title">${this.productTitle}</h1>
                        <h2 class="text-info--product-collection">${this.productCollection}</h2>
                    </div>
                    <p class="details-container--product-description">${this.productDescription}</p>
                    <div class="details-container--price-info">
                        <span class="price-info--price">${this.price}</span>
                        <button class="price-info--price-button" @click=${this.#t}>Comprar</button>
                    </div>
                </div>
            </article>
        `}#t(){console.log(`Has hecho click en el botón de ${this.productTitle}`)}connectedCallback(){super.connectedCallback()}}customElements.define("card-component",Ct);
