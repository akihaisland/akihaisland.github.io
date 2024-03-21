(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();function ol(n,e){const t=Object.create(null),r=n.split(",");for(let i=0;i<r.length;i++)t[r[i]]=!0;return e?i=>!!t[i.toLowerCase()]:i=>!!t[i]}const at={},Cr=[],rn=()=>{},Hm=()=>!1,Gm=/^on[^a-z]/,so=n=>Gm.test(n),al=n=>n.startsWith("onUpdate:"),Et=Object.assign,ll=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Km=Object.prototype.hasOwnProperty,We=(n,e)=>Km.call(n,e),Me=Array.isArray,Lr=n=>oo(n)==="[object Map]",Vu=n=>oo(n)==="[object Set]",Ue=n=>typeof n=="function",vt=n=>typeof n=="string",cl=n=>typeof n=="symbol",ct=n=>n!==null&&typeof n=="object",Wu=n=>ct(n)&&Ue(n.then)&&Ue(n.catch),Yu=Object.prototype.toString,oo=n=>Yu.call(n),zm=n=>oo(n).slice(8,-1),Qu=n=>oo(n)==="[object Object]",dl=n=>vt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Ts=ol(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ao=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},qm=/-(\w)/g,Dr=ao(n=>n.replace(qm,(e,t)=>t?t.toUpperCase():"")),jm=/\B([A-Z])/g,zr=ao(n=>n.replace(jm,"-$1").toLowerCase()),Xu=ao(n=>n.charAt(0).toUpperCase()+n.slice(1)),Ko=ao(n=>n?`on${Xu(n)}`:""),Oi=(n,e)=>!Object.is(n,e),Cs=(n,e)=>{for(let t=0;t<n.length;t++)n[t](e)},Hs=(n,e,t)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,value:t})},_a=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let Ic;const wa=()=>Ic||(Ic=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Vt(n){if(Me(n)){const e={};for(let t=0;t<n.length;t++){const r=n[t],i=vt(r)?Qm(r):Vt(r);if(i)for(const s in i)e[s]=i[s]}return e}else{if(vt(n))return n;if(ct(n))return n}}const Vm=/;(?![^(]*\))/g,Wm=/:([^]+)/,Ym=/\/\*[^]*?\*\//g;function Qm(n){const e={};return n.replace(Ym,"").split(Vm).forEach(t=>{if(t){const r=t.split(Wm);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Mt(n){let e="";if(vt(n))e=n;else if(Me(n))for(let t=0;t<n.length;t++){const r=Mt(n[t]);r&&(e+=r+" ")}else if(ct(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const Xm="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Zm=ol(Xm);function Zu(n){return!!n||n===""}const ke=n=>vt(n)?n:n==null?"":Me(n)||ct(n)&&(n.toString===Yu||!Ue(n.toString))?JSON.stringify(n,Ju,2):String(n),Ju=(n,e)=>e&&e.__v_isRef?Ju(n,e.value):Lr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[r,i])=>(t[`${r} =>`]=i,t),{})}:Vu(e)?{[`Set(${e.size})`]:[...e.values()]}:ct(e)&&!Me(e)&&!Qu(e)?String(e):e;let zt;class eh{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=zt,!e&&zt&&(this.index=(zt.scopes||(zt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const t=zt;try{return zt=this,e()}finally{zt=t}}}on(){zt=this}off(){zt=this.parent}stop(e){if(this._active){let t,r;for(t=0,r=this.effects.length;t<r;t++)this.effects[t].stop();for(t=0,r=this.cleanups.length;t<r;t++)this.cleanups[t]();if(this.scopes)for(t=0,r=this.scopes.length;t<r;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function th(n){return new eh(n)}function Jm(n,e=zt){e&&e.active&&e.effects.push(n)}function nh(){return zt}function eg(n){zt&&zt.cleanups.push(n)}const ul=n=>{const e=new Set(n);return e.w=0,e.n=0,e},rh=n=>(n.w&Yn)>0,ih=n=>(n.n&Yn)>0,tg=({deps:n})=>{if(n.length)for(let e=0;e<n.length;e++)n[e].w|=Yn},ng=n=>{const{deps:e}=n;if(e.length){let t=0;for(let r=0;r<e.length;r++){const i=e[r];rh(i)&&!ih(i)?i.delete(n):e[t++]=i,i.w&=~Yn,i.n&=~Yn}e.length=t}},Gs=new WeakMap;let Si=0,Yn=1;const Sa=30;let tn;const ar=Symbol(""),Ta=Symbol("");class hl{constructor(e,t=null,r){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,Jm(this,r)}run(){if(!this.active)return this.fn();let e=tn,t=jn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=tn,tn=this,jn=!0,Yn=1<<++Si,Si<=Sa?tg(this):Dc(this),this.fn()}finally{Si<=Sa&&ng(this),Yn=1<<--Si,tn=this.parent,jn=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){tn===this?this.deferStop=!0:this.active&&(Dc(this),this.onStop&&this.onStop(),this.active=!1)}}function Dc(n){const{deps:e}=n;if(e.length){for(let t=0;t<e.length;t++)e[t].delete(n);e.length=0}}let jn=!0;const sh=[];function qr(){sh.push(jn),jn=!1}function jr(){const n=sh.pop();jn=n===void 0?!0:n}function Ht(n,e,t){if(jn&&tn){let r=Gs.get(n);r||Gs.set(n,r=new Map);let i=r.get(t);i||r.set(t,i=ul()),oh(i)}}function oh(n,e){let t=!1;Si<=Sa?ih(n)||(n.n|=Yn,t=!rh(n)):t=!n.has(tn),t&&(n.add(tn),tn.deps.push(n))}function Dn(n,e,t,r,i,s){const o=Gs.get(n);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(t==="length"&&Me(n)){const l=Number(r);o.forEach((c,d)=>{(d==="length"||d>=l)&&a.push(c)})}else switch(t!==void 0&&a.push(o.get(t)),e){case"add":Me(n)?dl(t)&&a.push(o.get("length")):(a.push(o.get(ar)),Lr(n)&&a.push(o.get(Ta)));break;case"delete":Me(n)||(a.push(o.get(ar)),Lr(n)&&a.push(o.get(Ta)));break;case"set":Lr(n)&&a.push(o.get(ar));break}if(a.length===1)a[0]&&Ca(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);Ca(ul(l))}}function Ca(n,e){const t=Me(n)?n:[...n];for(const r of t)r.computed&&Bc(r);for(const r of t)r.computed||Bc(r)}function Bc(n,e){(n!==tn||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}function rg(n,e){var t;return(t=Gs.get(n))==null?void 0:t.get(e)}const ig=ol("__proto__,__v_isRef,__isVue"),ah=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(cl)),sg=fl(),og=fl(!1,!0),ag=fl(!0),Pc=lg();function lg(){const n={};return["includes","indexOf","lastIndexOf"].forEach(e=>{n[e]=function(...t){const r=Ye(this);for(let s=0,o=this.length;s<o;s++)Ht(r,"get",s+"");const i=r[e](...t);return i===-1||i===!1?r[e](...t.map(Ye)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{n[e]=function(...t){qr();const r=Ye(this)[e].apply(this,t);return jr(),r}}),n}function cg(n){const e=Ye(this);return Ht(e,"has",n),e.hasOwnProperty(n)}function fl(n=!1,e=!1){return function(r,i,s){if(i==="__v_isReactive")return!n;if(i==="__v_isReadonly")return n;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&s===(n?e?Sg:hh:e?uh:dh).get(r))return r;const o=Me(r);if(!n){if(o&&We(Pc,i))return Reflect.get(Pc,i,s);if(i==="hasOwnProperty")return cg}const a=Reflect.get(r,i,s);return(cl(i)?ah.has(i):ig(i))||(n||Ht(r,"get",i),e)?a:ft(a)?o&&dl(i)?a:a.value:ct(a)?n?ph(a):Wi(a):a}}const dg=lh(),ug=lh(!0);function lh(n=!1){return function(t,r,i,s){let o=t[r];if(Br(o)&&ft(o)&&!ft(i))return!1;if(!n&&(!Ks(i)&&!Br(i)&&(o=Ye(o),i=Ye(i)),!Me(t)&&ft(o)&&!ft(i)))return o.value=i,!0;const a=Me(t)&&dl(r)?Number(r)<t.length:We(t,r),l=Reflect.set(t,r,i,s);return t===Ye(s)&&(a?Oi(i,o)&&Dn(t,"set",r,i):Dn(t,"add",r,i)),l}}function hg(n,e){const t=We(n,e);n[e];const r=Reflect.deleteProperty(n,e);return r&&t&&Dn(n,"delete",e,void 0),r}function fg(n,e){const t=Reflect.has(n,e);return(!cl(e)||!ah.has(e))&&Ht(n,"has",e),t}function pg(n){return Ht(n,"iterate",Me(n)?"length":ar),Reflect.ownKeys(n)}const ch={get:sg,set:dg,deleteProperty:hg,has:fg,ownKeys:pg},mg={get:ag,set(n,e){return!0},deleteProperty(n,e){return!0}},gg=Et({},ch,{get:og,set:ug}),pl=n=>n,lo=n=>Reflect.getPrototypeOf(n);function ds(n,e,t=!1,r=!1){n=n.__v_raw;const i=Ye(n),s=Ye(e);t||(e!==s&&Ht(i,"get",e),Ht(i,"get",s));const{has:o}=lo(i),a=r?pl:t?yl:Mi;if(o.call(i,e))return a(n.get(e));if(o.call(i,s))return a(n.get(s));n!==i&&n.get(e)}function us(n,e=!1){const t=this.__v_raw,r=Ye(t),i=Ye(n);return e||(n!==i&&Ht(r,"has",n),Ht(r,"has",i)),n===i?t.has(n):t.has(n)||t.has(i)}function hs(n,e=!1){return n=n.__v_raw,!e&&Ht(Ye(n),"iterate",ar),Reflect.get(n,"size",n)}function Oc(n){n=Ye(n);const e=Ye(this);return lo(e).has.call(e,n)||(e.add(n),Dn(e,"add",n,n)),this}function Mc(n,e){e=Ye(e);const t=Ye(this),{has:r,get:i}=lo(t);let s=r.call(t,n);s||(n=Ye(n),s=r.call(t,n));const o=i.call(t,n);return t.set(n,e),s?Oi(e,o)&&Dn(t,"set",n,e):Dn(t,"add",n,e),this}function Fc(n){const e=Ye(this),{has:t,get:r}=lo(e);let i=t.call(e,n);i||(n=Ye(n),i=t.call(e,n)),r&&r.call(e,n);const s=e.delete(n);return i&&Dn(e,"delete",n,void 0),s}function Nc(){const n=Ye(this),e=n.size!==0,t=n.clear();return e&&Dn(n,"clear",void 0,void 0),t}function fs(n,e){return function(r,i){const s=this,o=s.__v_raw,a=Ye(o),l=e?pl:n?yl:Mi;return!n&&Ht(a,"iterate",ar),o.forEach((c,d)=>r.call(i,l(c),l(d),s))}}function ps(n,e,t){return function(...r){const i=this.__v_raw,s=Ye(i),o=Lr(s),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=i[n](...r),d=t?pl:e?yl:Mi;return!e&&Ht(s,"iterate",l?Ta:ar),{next(){const{value:u,done:h}=c.next();return h?{value:u,done:h}:{value:a?[d(u[0]),d(u[1])]:d(u),done:h}},[Symbol.iterator](){return this}}}}function Nn(n){return function(...e){return n==="delete"?!1:this}}function yg(){const n={get(s){return ds(this,s)},get size(){return hs(this)},has:us,add:Oc,set:Mc,delete:Fc,clear:Nc,forEach:fs(!1,!1)},e={get(s){return ds(this,s,!1,!0)},get size(){return hs(this)},has:us,add:Oc,set:Mc,delete:Fc,clear:Nc,forEach:fs(!1,!0)},t={get(s){return ds(this,s,!0)},get size(){return hs(this,!0)},has(s){return us.call(this,s,!0)},add:Nn("add"),set:Nn("set"),delete:Nn("delete"),clear:Nn("clear"),forEach:fs(!0,!1)},r={get(s){return ds(this,s,!0,!0)},get size(){return hs(this,!0)},has(s){return us.call(this,s,!0)},add:Nn("add"),set:Nn("set"),delete:Nn("delete"),clear:Nn("clear"),forEach:fs(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=ps(s,!1,!1),t[s]=ps(s,!0,!1),e[s]=ps(s,!1,!0),r[s]=ps(s,!0,!0)}),[n,t,e,r]}const[Ag,vg,bg,xg]=yg();function ml(n,e){const t=e?n?xg:bg:n?vg:Ag;return(r,i,s)=>i==="__v_isReactive"?!n:i==="__v_isReadonly"?n:i==="__v_raw"?r:Reflect.get(We(t,i)&&i in r?t:r,i,s)}const Eg={get:ml(!1,!1)},_g={get:ml(!1,!0)},wg={get:ml(!0,!1)},dh=new WeakMap,uh=new WeakMap,hh=new WeakMap,Sg=new WeakMap;function Tg(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Cg(n){return n.__v_skip||!Object.isExtensible(n)?0:Tg(zm(n))}function Wi(n){return Br(n)?n:gl(n,!1,ch,Eg,dh)}function fh(n){return gl(n,!1,gg,_g,uh)}function ph(n){return gl(n,!0,mg,wg,hh)}function gl(n,e,t,r,i){if(!ct(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=i.get(n);if(s)return s;const o=Cg(n);if(o===0)return n;const a=new Proxy(n,o===2?r:t);return i.set(n,a),a}function Vn(n){return Br(n)?Vn(n.__v_raw):!!(n&&n.__v_isReactive)}function Br(n){return!!(n&&n.__v_isReadonly)}function Ks(n){return!!(n&&n.__v_isShallow)}function mh(n){return Vn(n)||Br(n)}function Ye(n){const e=n&&n.__v_raw;return e?Ye(e):n}function co(n){return Hs(n,"__v_skip",!0),n}const Mi=n=>ct(n)?Wi(n):n,yl=n=>ct(n)?ph(n):n;function gh(n){jn&&tn&&(n=Ye(n),oh(n.dep||(n.dep=ul())))}function yh(n,e){n=Ye(n);const t=n.dep;t&&Ca(t)}function ft(n){return!!(n&&n.__v_isRef===!0)}function Tt(n){return Ah(n,!1)}function Lg(n){return Ah(n,!0)}function Ah(n,e){return ft(n)?n:new kg(n,e)}class kg{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:Ye(e),this._value=t?e:Mi(e)}get value(){return gh(this),this._value}set value(e){const t=this.__v_isShallow||Ks(e)||Br(e);e=t?e:Ye(e),Oi(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:Mi(e),yh(this))}}function Bt(n){return ft(n)?n.value:n}const Rg={get:(n,e,t)=>Bt(Reflect.get(n,e,t)),set:(n,e,t,r)=>{const i=n[e];return ft(i)&&!ft(t)?(i.value=t,!0):Reflect.set(n,e,t,r)}};function vh(n){return Vn(n)?n:new Proxy(n,Rg)}function Ig(n){const e=Me(n)?new Array(n.length):{};for(const t in n)e[t]=Bg(n,t);return e}class Dg{constructor(e,t,r){this._object=e,this._key=t,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return rg(Ye(this._object),this._key)}}function Bg(n,e,t){const r=n[e];return ft(r)?r:new Dg(n,e,t)}class Pg{constructor(e,t,r,i){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new hl(e,()=>{this._dirty||(this._dirty=!0,yh(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=r}get value(){const e=Ye(this);return gh(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Og(n,e,t=!1){let r,i;const s=Ue(n);return s?(r=n,i=rn):(r=n.get,i=n.set),new Pg(r,i,s||!i,t)}function Wn(n,e,t,r){let i;try{i=r?n(...r):n()}catch(s){uo(s,e,t)}return i}function sn(n,e,t,r){if(Ue(n)){const s=Wn(n,e,t,r);return s&&Wu(s)&&s.catch(o=>{uo(o,e,t)}),s}const i=[];for(let s=0;s<n.length;s++)i.push(sn(n[s],e,t,r));return i}function uo(n,e,t,r=!0){const i=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=t;for(;s;){const c=s.ec;if(c){for(let d=0;d<c.length;d++)if(c[d](n,o,a)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){Wn(l,null,10,[n,o,a]);return}}Mg(n,t,i,r)}function Mg(n,e,t,r=!0){console.error(n)}let Fi=!1,La=!1;const Dt=[];let mn=0;const kr=[];let Ln=null,rr=0;const bh=Promise.resolve();let Al=null;function Ni(n){const e=Al||bh;return n?e.then(this?n.bind(this):n):e}function Fg(n){let e=mn+1,t=Dt.length;for(;e<t;){const r=e+t>>>1;Ui(Dt[r])<n?e=r+1:t=r}return e}function vl(n){(!Dt.length||!Dt.includes(n,Fi&&n.allowRecurse?mn+1:mn))&&(n.id==null?Dt.push(n):Dt.splice(Fg(n.id),0,n),xh())}function xh(){!Fi&&!La&&(La=!0,Al=bh.then(_h))}function Ng(n){const e=Dt.indexOf(n);e>mn&&Dt.splice(e,1)}function Ug(n){Me(n)?kr.push(...n):(!Ln||!Ln.includes(n,n.allowRecurse?rr+1:rr))&&kr.push(n),xh()}function Uc(n,e=Fi?mn+1:0){for(;e<Dt.length;e++){const t=Dt[e];t&&t.pre&&(Dt.splice(e,1),e--,t())}}function Eh(n){if(kr.length){const e=[...new Set(kr)];if(kr.length=0,Ln){Ln.push(...e);return}for(Ln=e,Ln.sort((t,r)=>Ui(t)-Ui(r)),rr=0;rr<Ln.length;rr++)Ln[rr]();Ln=null,rr=0}}const Ui=n=>n.id==null?1/0:n.id,$g=(n,e)=>{const t=Ui(n)-Ui(e);if(t===0){if(n.pre&&!e.pre)return-1;if(e.pre&&!n.pre)return 1}return t};function _h(n){La=!1,Fi=!0,Dt.sort($g);const e=rn;try{for(mn=0;mn<Dt.length;mn++){const t=Dt[mn];t&&t.active!==!1&&Wn(t,null,14)}}finally{mn=0,Dt.length=0,Eh(),Fi=!1,Al=null,(Dt.length||kr.length)&&_h()}}function Hg(n,e,...t){if(n.isUnmounted)return;const r=n.vnode.props||at;let i=t;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in r){const d=`${o==="modelValue"?"model":o}Modifiers`,{number:u,trim:h}=r[d]||at;h&&(i=t.map(y=>vt(y)?y.trim():y)),u&&(i=t.map(_a))}let a,l=r[a=Ko(e)]||r[a=Ko(Dr(e))];!l&&s&&(l=r[a=Ko(zr(e))]),l&&sn(l,n,6,i);const c=r[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,sn(c,n,6,i)}}function wh(n,e,t=!1){const r=e.emitsCache,i=r.get(n);if(i!==void 0)return i;const s=n.emits;let o={},a=!1;if(!Ue(n)){const l=c=>{const d=wh(c,e,!0);d&&(a=!0,Et(o,d))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!a?(ct(n)&&r.set(n,null),null):(Me(s)?s.forEach(l=>o[l]=null):Et(o,s),ct(n)&&r.set(n,o),o)}function ho(n,e){return!n||!so(e)?!1:(e=e.slice(2).replace(/Once$/,""),We(n,e[0].toLowerCase()+e.slice(1))||We(n,zr(e))||We(n,e))}let Pt=null,fo=null;function zs(n){const e=Pt;return Pt=n,fo=n&&n.type.__scopeId||null,e}function Yi(n){fo=n}function Qi(){fo=null}function Rt(n,e=Pt,t){if(!e||n._n)return n;const r=(...i)=>{r._d&&Qc(-1);const s=zs(e);let o;try{o=n(...i)}finally{zs(s),r._d&&Qc(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function zo(n){const{type:e,vnode:t,proxy:r,withProxy:i,props:s,propsOptions:[o],slots:a,attrs:l,emit:c,render:d,renderCache:u,data:h,setupState:y,ctx:m,inheritAttrs:A}=n;let b,S;const C=zs(n);try{if(t.shapeFlag&4){const D=i||r;b=fn(d.call(D,D,u,s,y,h,m)),S=l}else{const D=e;b=fn(D.length>1?D(s,{attrs:l,slots:a,emit:c}):D(s,null)),S=e.props?l:Gg(l)}}catch(D){ki.length=0,uo(D,n,1),b=qe(Qn)}let R=b;if(S&&A!==!1){const D=Object.keys(S),{shapeFlag:B}=R;D.length&&B&7&&(o&&D.some(al)&&(S=Kg(S,o)),R=Pr(R,S))}return t.dirs&&(R=Pr(R),R.dirs=R.dirs?R.dirs.concat(t.dirs):t.dirs),t.transition&&(R.transition=t.transition),b=R,zs(C),b}const Gg=n=>{let e;for(const t in n)(t==="class"||t==="style"||so(t))&&((e||(e={}))[t]=n[t]);return e},Kg=(n,e)=>{const t={};for(const r in n)(!al(r)||!(r.slice(9)in e))&&(t[r]=n[r]);return t};function zg(n,e,t){const{props:r,children:i,component:s}=n,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return r?$c(r,o,c):!!o;if(l&8){const d=e.dynamicProps;for(let u=0;u<d.length;u++){const h=d[u];if(o[h]!==r[h]&&!ho(c,h))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?$c(r,o,c):!0:!!o;return!1}function $c(n,e,t){const r=Object.keys(e);if(r.length!==Object.keys(n).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(e[s]!==n[s]&&!ho(t,s))return!0}return!1}function qg({vnode:n,parent:e},t){for(;e&&e.subTree===n;)(n=e.vnode).el=t,e=e.parent}const jg=n=>n.__isSuspense;function Vg(n,e){e&&e.pendingBranch?Me(n)?e.effects.push(...n):e.effects.push(n):Ug(n)}const ms={};function on(n,e,t){return Sh(n,e,t)}function Sh(n,e,{immediate:t,deep:r,flush:i,onTrack:s,onTrigger:o}=at){var a;const l=nh()===((a=Ct)==null?void 0:a.scope)?Ct:null;let c,d=!1,u=!1;if(ft(n)?(c=()=>n.value,d=Ks(n)):Vn(n)?(c=()=>n,r=!0):Me(n)?(u=!0,d=n.some(D=>Vn(D)||Ks(D)),c=()=>n.map(D=>{if(ft(D))return D.value;if(Vn(D))return sr(D);if(Ue(D))return Wn(D,l,2)})):Ue(n)?e?c=()=>Wn(n,l,2):c=()=>{if(!(l&&l.isUnmounted))return h&&h(),sn(n,l,3,[y])}:c=rn,e&&r){const D=c;c=()=>sr(D())}let h,y=D=>{h=C.onStop=()=>{Wn(D,l,4)}},m;if(Gi)if(y=rn,e?t&&sn(e,l,3,[c(),u?[]:void 0,y]):c(),i==="sync"){const D=Ny();m=D.__watcherHandles||(D.__watcherHandles=[])}else return rn;let A=u?new Array(n.length).fill(ms):ms;const b=()=>{if(C.active)if(e){const D=C.run();(r||d||(u?D.some((B,K)=>Oi(B,A[K])):Oi(D,A)))&&(h&&h(),sn(e,l,3,[D,A===ms?void 0:u&&A[0]===ms?[]:A,y]),A=D)}else C.run()};b.allowRecurse=!!e;let S;i==="sync"?S=b:i==="post"?S=()=>Ut(b,l&&l.suspense):(b.pre=!0,l&&(b.id=l.uid),S=()=>vl(b));const C=new hl(c,S);e?t?b():A=C.run():i==="post"?Ut(C.run.bind(C),l&&l.suspense):C.run();const R=()=>{C.stop(),l&&l.scope&&ll(l.scope.effects,C)};return m&&m.push(R),R}function Wg(n,e,t){const r=this.proxy,i=vt(n)?n.includes(".")?Th(r,n):()=>r[n]:n.bind(r,r);let s;Ue(e)?s=e:(s=e.handler,t=e);const o=Ct;Mr(this);const a=Sh(i,s.bind(r),t);return o?Mr(o):lr(),a}function Th(n,e){const t=e.split(".");return()=>{let r=n;for(let i=0;i<t.length&&r;i++)r=r[t[i]];return r}}function sr(n,e){if(!ct(n)||n.__v_skip||(e=e||new Set,e.has(n)))return n;if(e.add(n),ft(n))sr(n.value,e);else if(Me(n))for(let t=0;t<n.length;t++)sr(n[t],e);else if(Vu(n)||Lr(n))n.forEach(t=>{sr(t,e)});else if(Qu(n))for(const t in n)sr(n[t],e);return n}function Hc(n,e){const t=Pt;if(t===null)return n;const r=yo(t)||t.proxy,i=n.dirs||(n.dirs=[]);for(let s=0;s<e.length;s++){let[o,a,l,c=at]=e[s];o&&(Ue(o)&&(o={mounted:o,updated:o}),o.deep&&sr(a),i.push({dir:o,instance:r,value:a,oldValue:void 0,arg:l,modifiers:c}))}return n}function Jn(n,e,t,r){const i=n.dirs,s=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];s&&(a.oldValue=s[o].value);let l=a.dir[r];l&&(qr(),sn(l,t,8,[n.el,a,n,e]),jr())}}function Gt(n,e){return Ue(n)?(()=>Et({name:n.name},e,{setup:n}))():n}const Ci=n=>!!n.type.__asyncLoader,Ch=n=>n.type.__isKeepAlive;function Yg(n,e){Lh(n,"a",e)}function Qg(n,e){Lh(n,"da",e)}function Lh(n,e,t=Ct){const r=n.__wdc||(n.__wdc=()=>{let i=t;for(;i;){if(i.isDeactivated)return;i=i.parent}return n()});if(po(e,r,t),t){let i=t.parent;for(;i&&i.parent;)Ch(i.parent.vnode)&&Xg(r,e,t,i),i=i.parent}}function Xg(n,e,t,r){const i=po(e,n,r,!0);kh(()=>{ll(r[e],i)},t)}function po(n,e,t=Ct,r=!1){if(t){const i=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...o)=>{if(t.isUnmounted)return;qr(),Mr(t);const a=sn(e,t,n,o);return lr(),jr(),a});return r?i.unshift(s):i.push(s),s}}const Bn=n=>(e,t=Ct)=>(!Gi||n==="sp")&&po(n,(...r)=>e(...r),t),Zg=Bn("bm"),Xi=Bn("m"),Jg=Bn("bu"),ey=Bn("u"),ty=Bn("bum"),kh=Bn("um"),ny=Bn("sp"),ry=Bn("rtg"),iy=Bn("rtc");function sy(n,e=Ct){po("ec",n,e)}const oy=Symbol.for("v-ndc");function st(n,e,t,r){let i;const s=t&&t[r];if(Me(n)||vt(n)){i=new Array(n.length);for(let o=0,a=n.length;o<a;o++)i[o]=e(n[o],o,void 0,s&&s[o])}else if(typeof n=="number"){i=new Array(n);for(let o=0;o<n;o++)i[o]=e(o+1,o,void 0,s&&s[o])}else if(ct(n))if(n[Symbol.iterator])i=Array.from(n,(o,a)=>e(o,a,void 0,s&&s[a]));else{const o=Object.keys(n);i=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];i[a]=e(n[c],c,a,s&&s[a])}}else i=[];return t&&(t[r]=i),i}function qo(n,e,t={},r,i){if(Pt.isCE||Pt.parent&&Ci(Pt.parent)&&Pt.parent.isCE)return e!=="default"&&(t.name=e),qe("slot",t,r&&r());let s=n[e];s&&s._c&&(s._d=!1),oe();const o=s&&Rh(s(t)),a=El(Ke,{key:t.key||o&&o.key||`_${e}`},o||(r?r():[]),o&&n._===1?64:-2);return!i&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),s&&s._c&&(s._d=!0),a}function Rh(n){return n.some(e=>js(e)?!(e.type===Qn||e.type===Ke&&!Rh(e.children)):!0)?n:null}const ka=n=>n?Hh(n)?yo(n)||n.proxy:ka(n.parent):null,Li=Et(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>ka(n.parent),$root:n=>ka(n.root),$emit:n=>n.emit,$options:n=>bl(n),$forceUpdate:n=>n.f||(n.f=()=>vl(n.update)),$nextTick:n=>n.n||(n.n=Ni.bind(n.proxy)),$watch:n=>Wg.bind(n)}),jo=(n,e)=>n!==at&&!n.__isScriptSetup&&We(n,e),ay={get({_:n},e){const{ctx:t,setupState:r,data:i,props:s,accessCache:o,type:a,appContext:l}=n;let c;if(e[0]!=="$"){const y=o[e];if(y!==void 0)switch(y){case 1:return r[e];case 2:return i[e];case 4:return t[e];case 3:return s[e]}else{if(jo(r,e))return o[e]=1,r[e];if(i!==at&&We(i,e))return o[e]=2,i[e];if((c=n.propsOptions[0])&&We(c,e))return o[e]=3,s[e];if(t!==at&&We(t,e))return o[e]=4,t[e];Ra&&(o[e]=0)}}const d=Li[e];let u,h;if(d)return e==="$attrs"&&Ht(n,"get",e),d(n);if((u=a.__cssModules)&&(u=u[e]))return u;if(t!==at&&We(t,e))return o[e]=4,t[e];if(h=l.config.globalProperties,We(h,e))return h[e]},set({_:n},e,t){const{data:r,setupState:i,ctx:s}=n;return jo(i,e)?(i[e]=t,!0):r!==at&&We(r,e)?(r[e]=t,!0):We(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:r,appContext:i,propsOptions:s}},o){let a;return!!t[o]||n!==at&&We(n,o)||jo(e,o)||(a=s[0])&&We(a,o)||We(r,o)||We(Li,o)||We(i.config.globalProperties,o)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:We(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function Gc(n){return Me(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Ra=!0;function ly(n){const e=bl(n),t=n.proxy,r=n.ctx;Ra=!1,e.beforeCreate&&Kc(e.beforeCreate,n,"bc");const{data:i,computed:s,methods:o,watch:a,provide:l,inject:c,created:d,beforeMount:u,mounted:h,beforeUpdate:y,updated:m,activated:A,deactivated:b,beforeDestroy:S,beforeUnmount:C,destroyed:R,unmounted:D,render:B,renderTracked:K,renderTriggered:N,errorCaptured:z,serverPrefetch:Z,expose:O,inheritAttrs:ee,components:_e,directives:ce,filters:Y}=e;if(c&&cy(c,r,null),o)for(const Q in o){const ae=o[Q];Ue(ae)&&(r[Q]=ae.bind(t))}if(i){const Q=i.call(t,t);ct(Q)&&(n.data=Wi(Q))}if(Ra=!0,s)for(const Q in s){const ae=s[Q],j=Ue(ae)?ae.bind(t,t):Ue(ae.get)?ae.get.bind(t,t):rn,de=!Ue(ae)&&Ue(ae.set)?ae.set.bind(t):rn,Re=rt({get:j,set:de});Object.defineProperty(r,Q,{enumerable:!0,configurable:!0,get:()=>Re.value,set:Se=>Re.value=Se})}if(a)for(const Q in a)Ih(a[Q],r,t,Q);if(l){const Q=Ue(l)?l.call(t):l;Reflect.ownKeys(Q).forEach(ae=>{Ls(ae,Q[ae])})}d&&Kc(d,n,"c");function H(Q,ae){Me(ae)?ae.forEach(j=>Q(j.bind(t))):ae&&Q(ae.bind(t))}if(H(Zg,u),H(Xi,h),H(Jg,y),H(ey,m),H(Yg,A),H(Qg,b),H(sy,z),H(iy,K),H(ry,N),H(ty,C),H(kh,D),H(ny,Z),Me(O))if(O.length){const Q=n.exposed||(n.exposed={});O.forEach(ae=>{Object.defineProperty(Q,ae,{get:()=>t[ae],set:j=>t[ae]=j})})}else n.exposed||(n.exposed={});B&&n.render===rn&&(n.render=B),ee!=null&&(n.inheritAttrs=ee),_e&&(n.components=_e),ce&&(n.directives=ce)}function cy(n,e,t=rn){Me(n)&&(n=Ia(n));for(const r in n){const i=n[r];let s;ct(i)?"default"in i?s=an(i.from||r,i.default,!0):s=an(i.from||r):s=an(i),ft(s)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[r]=s}}function Kc(n,e,t){sn(Me(n)?n.map(r=>r.bind(e.proxy)):n.bind(e.proxy),e,t)}function Ih(n,e,t,r){const i=r.includes(".")?Th(t,r):()=>t[r];if(vt(n)){const s=e[n];Ue(s)&&on(i,s)}else if(Ue(n))on(i,n.bind(t));else if(ct(n))if(Me(n))n.forEach(s=>Ih(s,e,t,r));else{const s=Ue(n.handler)?n.handler.bind(t):e[n.handler];Ue(s)&&on(i,s,n)}}function bl(n){const e=n.type,{mixins:t,extends:r}=e,{mixins:i,optionsCache:s,config:{optionMergeStrategies:o}}=n.appContext,a=s.get(e);let l;return a?l=a:!i.length&&!t&&!r?l=e:(l={},i.length&&i.forEach(c=>qs(l,c,o,!0)),qs(l,e,o)),ct(e)&&s.set(e,l),l}function qs(n,e,t,r=!1){const{mixins:i,extends:s}=e;s&&qs(n,s,t,!0),i&&i.forEach(o=>qs(n,o,t,!0));for(const o in e)if(!(r&&o==="expose")){const a=dy[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const dy={data:zc,props:qc,emits:qc,methods:Ti,computed:Ti,beforeCreate:Ot,created:Ot,beforeMount:Ot,mounted:Ot,beforeUpdate:Ot,updated:Ot,beforeDestroy:Ot,beforeUnmount:Ot,destroyed:Ot,unmounted:Ot,activated:Ot,deactivated:Ot,errorCaptured:Ot,serverPrefetch:Ot,components:Ti,directives:Ti,watch:hy,provide:zc,inject:uy};function zc(n,e){return e?n?function(){return Et(Ue(n)?n.call(this,this):n,Ue(e)?e.call(this,this):e)}:e:n}function uy(n,e){return Ti(Ia(n),Ia(e))}function Ia(n){if(Me(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Ot(n,e){return n?[...new Set([].concat(n,e))]:e}function Ti(n,e){return n?Et(Object.create(null),n,e):e}function qc(n,e){return n?Me(n)&&Me(e)?[...new Set([...n,...e])]:Et(Object.create(null),Gc(n),Gc(e??{})):e}function hy(n,e){if(!n)return e;if(!e)return n;const t=Et(Object.create(null),n);for(const r in e)t[r]=Ot(n[r],e[r]);return t}function Dh(){return{app:null,config:{isNativeTag:Hm,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let fy=0;function py(n,e){return function(r,i=null){Ue(r)||(r=Et({},r)),i!=null&&!ct(i)&&(i=null);const s=Dh(),o=new Set;let a=!1;const l=s.app={_uid:fy++,_component:r,_props:i,_container:null,_context:s,_instance:null,version:Uy,get config(){return s.config},set config(c){},use(c,...d){return o.has(c)||(c&&Ue(c.install)?(o.add(c),c.install(l,...d)):Ue(c)&&(o.add(c),c(l,...d))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,d){return d?(s.components[c]=d,l):s.components[c]},directive(c,d){return d?(s.directives[c]=d,l):s.directives[c]},mount(c,d,u){if(!a){const h=qe(r,i);return h.appContext=s,d&&e?e(h,c):n(h,c,u),a=!0,l._container=c,c.__vue_app__=l,yo(h.component)||h.component.proxy}},unmount(){a&&(n(null,l._container),delete l._container.__vue_app__)},provide(c,d){return s.provides[c]=d,l},runWithContext(c){$i=l;try{return c()}finally{$i=null}}};return l}}let $i=null;function Ls(n,e){if(Ct){let t=Ct.provides;const r=Ct.parent&&Ct.parent.provides;r===t&&(t=Ct.provides=Object.create(r)),t[n]=e}}function an(n,e,t=!1){const r=Ct||Pt;if(r||$i){const i=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:$i._context.provides;if(i&&n in i)return i[n];if(arguments.length>1)return t&&Ue(e)?e.call(r&&r.proxy):e}}function my(){return!!(Ct||Pt||$i)}function gy(n,e,t,r=!1){const i={},s={};Hs(s,go,1),n.propsDefaults=Object.create(null),Bh(n,e,i,s);for(const o in n.propsOptions[0])o in i||(i[o]=void 0);t?n.props=r?i:fh(i):n.type.props?n.props=i:n.props=s,n.attrs=s}function yy(n,e,t,r){const{props:i,attrs:s,vnode:{patchFlag:o}}=n,a=Ye(i),[l]=n.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=n.vnode.dynamicProps;for(let u=0;u<d.length;u++){let h=d[u];if(ho(n.emitsOptions,h))continue;const y=e[h];if(l)if(We(s,h))y!==s[h]&&(s[h]=y,c=!0);else{const m=Dr(h);i[m]=Da(l,a,m,y,n,!1)}else y!==s[h]&&(s[h]=y,c=!0)}}}else{Bh(n,e,i,s)&&(c=!0);let d;for(const u in a)(!e||!We(e,u)&&((d=zr(u))===u||!We(e,d)))&&(l?t&&(t[u]!==void 0||t[d]!==void 0)&&(i[u]=Da(l,a,u,void 0,n,!0)):delete i[u]);if(s!==a)for(const u in s)(!e||!We(e,u))&&(delete s[u],c=!0)}c&&Dn(n,"set","$attrs")}function Bh(n,e,t,r){const[i,s]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(Ts(l))continue;const c=e[l];let d;i&&We(i,d=Dr(l))?!s||!s.includes(d)?t[d]=c:(a||(a={}))[d]=c:ho(n.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(s){const l=Ye(t),c=a||at;for(let d=0;d<s.length;d++){const u=s[d];t[u]=Da(i,l,u,c[u],n,!We(c,u))}}return o}function Da(n,e,t,r,i,s){const o=n[t];if(o!=null){const a=We(o,"default");if(a&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Ue(l)){const{propsDefaults:c}=i;t in c?r=c[t]:(Mr(i),r=c[t]=l.call(null,e),lr())}else r=l}o[0]&&(s&&!a?r=!1:o[1]&&(r===""||r===zr(t))&&(r=!0))}return r}function Ph(n,e,t=!1){const r=e.propsCache,i=r.get(n);if(i)return i;const s=n.props,o={},a=[];let l=!1;if(!Ue(n)){const d=u=>{l=!0;const[h,y]=Ph(u,e,!0);Et(o,h),y&&a.push(...y)};!t&&e.mixins.length&&e.mixins.forEach(d),n.extends&&d(n.extends),n.mixins&&n.mixins.forEach(d)}if(!s&&!l)return ct(n)&&r.set(n,Cr),Cr;if(Me(s))for(let d=0;d<s.length;d++){const u=Dr(s[d]);jc(u)&&(o[u]=at)}else if(s)for(const d in s){const u=Dr(d);if(jc(u)){const h=s[d],y=o[u]=Me(h)||Ue(h)?{type:h}:Et({},h);if(y){const m=Yc(Boolean,y.type),A=Yc(String,y.type);y[0]=m>-1,y[1]=A<0||m<A,(m>-1||We(y,"default"))&&a.push(u)}}}const c=[o,a];return ct(n)&&r.set(n,c),c}function jc(n){return n[0]!=="$"}function Vc(n){const e=n&&n.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:n===null?"null":""}function Wc(n,e){return Vc(n)===Vc(e)}function Yc(n,e){return Me(e)?e.findIndex(t=>Wc(t,n)):Ue(e)&&Wc(e,n)?0:-1}const Oh=n=>n[0]==="_"||n==="$stable",xl=n=>Me(n)?n.map(fn):[fn(n)],Ay=(n,e,t)=>{if(e._n)return e;const r=Rt((...i)=>xl(e(...i)),t);return r._c=!1,r},Mh=(n,e,t)=>{const r=n._ctx;for(const i in n){if(Oh(i))continue;const s=n[i];if(Ue(s))e[i]=Ay(i,s,r);else if(s!=null){const o=xl(s);e[i]=()=>o}}},Fh=(n,e)=>{const t=xl(e);n.slots.default=()=>t},vy=(n,e)=>{if(n.vnode.shapeFlag&32){const t=e._;t?(n.slots=Ye(e),Hs(e,"_",t)):Mh(e,n.slots={})}else n.slots={},e&&Fh(n,e);Hs(n.slots,go,1)},by=(n,e,t)=>{const{vnode:r,slots:i}=n;let s=!0,o=at;if(r.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:(Et(i,e),!t&&a===1&&delete i._):(s=!e.$stable,Mh(e,i)),o=e}else e&&(Fh(n,e),o={default:1});if(s)for(const a in i)!Oh(a)&&!(a in o)&&delete i[a]};function Ba(n,e,t,r,i=!1){if(Me(n)){n.forEach((h,y)=>Ba(h,e&&(Me(e)?e[y]:e),t,r,i));return}if(Ci(r)&&!i)return;const s=r.shapeFlag&4?yo(r.component)||r.component.proxy:r.el,o=i?null:s,{i:a,r:l}=n,c=e&&e.r,d=a.refs===at?a.refs={}:a.refs,u=a.setupState;if(c!=null&&c!==l&&(vt(c)?(d[c]=null,We(u,c)&&(u[c]=null)):ft(c)&&(c.value=null)),Ue(l))Wn(l,a,12,[o,d]);else{const h=vt(l),y=ft(l);if(h||y){const m=()=>{if(n.f){const A=h?We(u,l)?u[l]:d[l]:l.value;i?Me(A)&&ll(A,s):Me(A)?A.includes(s)||A.push(s):h?(d[l]=[s],We(u,l)&&(u[l]=d[l])):(l.value=[s],n.k&&(d[n.k]=l.value))}else h?(d[l]=o,We(u,l)&&(u[l]=o)):y&&(l.value=o,n.k&&(d[n.k]=o))};o?(m.id=-1,Ut(m,t)):m()}}}const Ut=Vg;function xy(n){return Ey(n)}function Ey(n,e){const t=wa();t.__VUE__=!0;const{insert:r,remove:i,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:d,parentNode:u,nextSibling:h,setScopeId:y=rn,insertStaticContent:m}=n,A=(I,P,F,W=null,te=null,se=null,ve=!1,he=null,me=!!P.dynamicChildren)=>{if(I===P)return;I&&!bi(I,P)&&(W=V(I),Se(I,te,se,!0),I=null),P.patchFlag===-2&&(me=!1,P.dynamicChildren=null);const{type:ie,ref:Ce,shapeFlag:Ee}=P;switch(ie){case mo:b(I,P,F,W);break;case Qn:S(I,P,F,W);break;case ks:I==null&&C(P,F,W,ve);break;case Ke:_e(I,P,F,W,te,se,ve,he,me);break;default:Ee&1?B(I,P,F,W,te,se,ve,he,me):Ee&6?ce(I,P,F,W,te,se,ve,he,me):(Ee&64||Ee&128)&&ie.process(I,P,F,W,te,se,ve,he,me,ue)}Ce!=null&&te&&Ba(Ce,I&&I.ref,se,P||I,!P)},b=(I,P,F,W)=>{if(I==null)r(P.el=a(P.children),F,W);else{const te=P.el=I.el;P.children!==I.children&&c(te,P.children)}},S=(I,P,F,W)=>{I==null?r(P.el=l(P.children||""),F,W):P.el=I.el},C=(I,P,F,W)=>{[I.el,I.anchor]=m(I.children,P,F,W,I.el,I.anchor)},R=({el:I,anchor:P},F,W)=>{let te;for(;I&&I!==P;)te=h(I),r(I,F,W),I=te;r(P,F,W)},D=({el:I,anchor:P})=>{let F;for(;I&&I!==P;)F=h(I),i(I),I=F;i(P)},B=(I,P,F,W,te,se,ve,he,me)=>{ve=ve||P.type==="svg",I==null?K(P,F,W,te,se,ve,he,me):Z(I,P,te,se,ve,he,me)},K=(I,P,F,W,te,se,ve,he)=>{let me,ie;const{type:Ce,props:Ee,shapeFlag:Le,transition:Pe,dirs:He}=I;if(me=I.el=o(I.type,se,Ee&&Ee.is,Ee),Le&8?d(me,I.children):Le&16&&z(I.children,me,null,W,te,se&&Ce!=="foreignObject",ve,he),He&&Jn(I,null,W,"created"),N(me,I,I.scopeId,ve,W),Ee){for(const Ze in Ee)Ze!=="value"&&!Ts(Ze)&&s(me,Ze,null,Ee[Ze],se,I.children,W,te,Fe);"value"in Ee&&s(me,"value",null,Ee.value),(ie=Ee.onVnodeBeforeMount)&&dn(ie,W,I)}He&&Jn(I,null,W,"beforeMount");const tt=(!te||te&&!te.pendingBranch)&&Pe&&!Pe.persisted;tt&&Pe.beforeEnter(me),r(me,P,F),((ie=Ee&&Ee.onVnodeMounted)||tt||He)&&Ut(()=>{ie&&dn(ie,W,I),tt&&Pe.enter(me),He&&Jn(I,null,W,"mounted")},te)},N=(I,P,F,W,te)=>{if(F&&y(I,F),W)for(let se=0;se<W.length;se++)y(I,W[se]);if(te){let se=te.subTree;if(P===se){const ve=te.vnode;N(I,ve,ve.scopeId,ve.slotScopeIds,te.parent)}}},z=(I,P,F,W,te,se,ve,he,me=0)=>{for(let ie=me;ie<I.length;ie++){const Ce=I[ie]=he?Kn(I[ie]):fn(I[ie]);A(null,Ce,P,F,W,te,se,ve,he)}},Z=(I,P,F,W,te,se,ve)=>{const he=P.el=I.el;let{patchFlag:me,dynamicChildren:ie,dirs:Ce}=P;me|=I.patchFlag&16;const Ee=I.props||at,Le=P.props||at;let Pe;F&&er(F,!1),(Pe=Le.onVnodeBeforeUpdate)&&dn(Pe,F,P,I),Ce&&Jn(P,I,F,"beforeUpdate"),F&&er(F,!0);const He=te&&P.type!=="foreignObject";if(ie?O(I.dynamicChildren,ie,he,F,W,He,se):ve||ae(I,P,he,null,F,W,He,se,!1),me>0){if(me&16)ee(he,P,Ee,Le,F,W,te);else if(me&2&&Ee.class!==Le.class&&s(he,"class",null,Le.class,te),me&4&&s(he,"style",Ee.style,Le.style,te),me&8){const tt=P.dynamicProps;for(let Ze=0;Ze<tt.length;Ze++){const dt=tt[Ze],Kt=Ee[dt],_n=Le[dt];(_n!==Kt||dt==="value")&&s(he,dt,Kt,_n,te,I.children,F,W,Fe)}}me&1&&I.children!==P.children&&d(he,P.children)}else!ve&&ie==null&&ee(he,P,Ee,Le,F,W,te);((Pe=Le.onVnodeUpdated)||Ce)&&Ut(()=>{Pe&&dn(Pe,F,P,I),Ce&&Jn(P,I,F,"updated")},W)},O=(I,P,F,W,te,se,ve)=>{for(let he=0;he<P.length;he++){const me=I[he],ie=P[he],Ce=me.el&&(me.type===Ke||!bi(me,ie)||me.shapeFlag&70)?u(me.el):F;A(me,ie,Ce,null,W,te,se,ve,!0)}},ee=(I,P,F,W,te,se,ve)=>{if(F!==W){if(F!==at)for(const he in F)!Ts(he)&&!(he in W)&&s(I,he,F[he],null,ve,P.children,te,se,Fe);for(const he in W){if(Ts(he))continue;const me=W[he],ie=F[he];me!==ie&&he!=="value"&&s(I,he,ie,me,ve,P.children,te,se,Fe)}"value"in W&&s(I,"value",F.value,W.value)}},_e=(I,P,F,W,te,se,ve,he,me)=>{const ie=P.el=I?I.el:a(""),Ce=P.anchor=I?I.anchor:a("");let{patchFlag:Ee,dynamicChildren:Le,slotScopeIds:Pe}=P;Pe&&(he=he?he.concat(Pe):Pe),I==null?(r(ie,F,W),r(Ce,F,W),z(P.children,F,Ce,te,se,ve,he,me)):Ee>0&&Ee&64&&Le&&I.dynamicChildren?(O(I.dynamicChildren,Le,F,te,se,ve,he),(P.key!=null||te&&P===te.subTree)&&Nh(I,P,!0)):ae(I,P,F,Ce,te,se,ve,he,me)},ce=(I,P,F,W,te,se,ve,he,me)=>{P.slotScopeIds=he,I==null?P.shapeFlag&512?te.ctx.activate(P,F,W,ve,me):Y(P,F,W,te,se,ve,me):re(I,P,me)},Y=(I,P,F,W,te,se,ve)=>{const he=I.component=Iy(I,W,te);if(Ch(I)&&(he.ctx.renderer=ue),Dy(he),he.asyncDep){if(te&&te.registerDep(he,H),!I.el){const me=he.subTree=qe(Qn);S(null,me,P,F)}return}H(he,I,P,F,te,se,ve)},re=(I,P,F)=>{const W=P.component=I.component;if(zg(I,P,F))if(W.asyncDep&&!W.asyncResolved){Q(W,P,F);return}else W.next=P,Ng(W.update),W.update();else P.el=I.el,W.vnode=P},H=(I,P,F,W,te,se,ve)=>{const he=()=>{if(I.isMounted){let{next:Ce,bu:Ee,u:Le,parent:Pe,vnode:He}=I,tt=Ce,Ze;er(I,!1),Ce?(Ce.el=He.el,Q(I,Ce,ve)):Ce=He,Ee&&Cs(Ee),(Ze=Ce.props&&Ce.props.onVnodeBeforeUpdate)&&dn(Ze,Pe,Ce,He),er(I,!0);const dt=zo(I),Kt=I.subTree;I.subTree=dt,A(Kt,dt,u(Kt.el),V(Kt),I,te,se),Ce.el=dt.el,tt===null&&qg(I,dt.el),Le&&Ut(Le,te),(Ze=Ce.props&&Ce.props.onVnodeUpdated)&&Ut(()=>dn(Ze,Pe,Ce,He),te)}else{let Ce;const{el:Ee,props:Le}=P,{bm:Pe,m:He,parent:tt}=I,Ze=Ci(P);if(er(I,!1),Pe&&Cs(Pe),!Ze&&(Ce=Le&&Le.onVnodeBeforeMount)&&dn(Ce,tt,P),er(I,!0),Ee&&Qe){const dt=()=>{I.subTree=zo(I),Qe(Ee,I.subTree,I,te,null)};Ze?P.type.__asyncLoader().then(()=>!I.isUnmounted&&dt()):dt()}else{const dt=I.subTree=zo(I);A(null,dt,F,W,I,te,se),P.el=dt.el}if(He&&Ut(He,te),!Ze&&(Ce=Le&&Le.onVnodeMounted)){const dt=P;Ut(()=>dn(Ce,tt,dt),te)}(P.shapeFlag&256||tt&&Ci(tt.vnode)&&tt.vnode.shapeFlag&256)&&I.a&&Ut(I.a,te),I.isMounted=!0,P=F=W=null}},me=I.effect=new hl(he,()=>vl(ie),I.scope),ie=I.update=()=>me.run();ie.id=I.uid,er(I,!0),ie()},Q=(I,P,F)=>{P.component=I;const W=I.vnode.props;I.vnode=P,I.next=null,yy(I,P.props,W,F),by(I,P.children,F),qr(),Uc(),jr()},ae=(I,P,F,W,te,se,ve,he,me=!1)=>{const ie=I&&I.children,Ce=I?I.shapeFlag:0,Ee=P.children,{patchFlag:Le,shapeFlag:Pe}=P;if(Le>0){if(Le&128){de(ie,Ee,F,W,te,se,ve,he,me);return}else if(Le&256){j(ie,Ee,F,W,te,se,ve,he,me);return}}Pe&8?(Ce&16&&Fe(ie,te,se),Ee!==ie&&d(F,Ee)):Ce&16?Pe&16?de(ie,Ee,F,W,te,se,ve,he,me):Fe(ie,te,se,!0):(Ce&8&&d(F,""),Pe&16&&z(Ee,F,W,te,se,ve,he,me))},j=(I,P,F,W,te,se,ve,he,me)=>{I=I||Cr,P=P||Cr;const ie=I.length,Ce=P.length,Ee=Math.min(ie,Ce);let Le;for(Le=0;Le<Ee;Le++){const Pe=P[Le]=me?Kn(P[Le]):fn(P[Le]);A(I[Le],Pe,F,null,te,se,ve,he,me)}ie>Ce?Fe(I,te,se,!0,!1,Ee):z(P,F,W,te,se,ve,he,me,Ee)},de=(I,P,F,W,te,se,ve,he,me)=>{let ie=0;const Ce=P.length;let Ee=I.length-1,Le=Ce-1;for(;ie<=Ee&&ie<=Le;){const Pe=I[ie],He=P[ie]=me?Kn(P[ie]):fn(P[ie]);if(bi(Pe,He))A(Pe,He,F,null,te,se,ve,he,me);else break;ie++}for(;ie<=Ee&&ie<=Le;){const Pe=I[Ee],He=P[Le]=me?Kn(P[Le]):fn(P[Le]);if(bi(Pe,He))A(Pe,He,F,null,te,se,ve,he,me);else break;Ee--,Le--}if(ie>Ee){if(ie<=Le){const Pe=Le+1,He=Pe<Ce?P[Pe].el:W;for(;ie<=Le;)A(null,P[ie]=me?Kn(P[ie]):fn(P[ie]),F,He,te,se,ve,he,me),ie++}}else if(ie>Le)for(;ie<=Ee;)Se(I[ie],te,se,!0),ie++;else{const Pe=ie,He=ie,tt=new Map;for(ie=He;ie<=Le;ie++){const kt=P[ie]=me?Kn(P[ie]):fn(P[ie]);kt.key!=null&&tt.set(kt.key,ie)}let Ze,dt=0;const Kt=Le-He+1;let _n=!1,X=0;const qt=new Array(Kt);for(ie=0;ie<Kt;ie++)qt[ie]=0;for(ie=Pe;ie<=Ee;ie++){const kt=I[ie];if(dt>=Kt){Se(kt,te,se,!0);continue}let Ge;if(kt.key!=null)Ge=tt.get(kt.key);else for(Ze=He;Ze<=Le;Ze++)if(qt[Ze-He]===0&&bi(kt,P[Ze])){Ge=Ze;break}Ge===void 0?Se(kt,te,se,!0):(qt[Ge-He]=ie+1,Ge>=X?X=Ge:_n=!0,A(kt,P[Ge],F,null,te,se,ve,he,me),dt++)}const Qr=_n?_y(qt):Cr;for(Ze=Qr.length-1,ie=Kt-1;ie>=0;ie--){const kt=He+ie,Ge=P[kt],ts=kt+1<Ce?P[kt+1].el:W;qt[ie]===0?A(null,Ge,F,ts,te,se,ve,he,me):_n&&(Ze<0||ie!==Qr[Ze]?Re(Ge,F,ts,2):Ze--)}}},Re=(I,P,F,W,te=null)=>{const{el:se,type:ve,transition:he,children:me,shapeFlag:ie}=I;if(ie&6){Re(I.component.subTree,P,F,W);return}if(ie&128){I.suspense.move(P,F,W);return}if(ie&64){ve.move(I,P,F,ue);return}if(ve===Ke){r(se,P,F);for(let Ee=0;Ee<me.length;Ee++)Re(me[Ee],P,F,W);r(I.anchor,P,F);return}if(ve===ks){R(I,P,F);return}if(W!==2&&ie&1&&he)if(W===0)he.beforeEnter(se),r(se,P,F),Ut(()=>he.enter(se),te);else{const{leave:Ee,delayLeave:Le,afterLeave:Pe}=he,He=()=>r(se,P,F),tt=()=>{Ee(se,()=>{He(),Pe&&Pe()})};Le?Le(se,He,tt):tt()}else r(se,P,F)},Se=(I,P,F,W=!1,te=!1)=>{const{type:se,props:ve,ref:he,children:me,dynamicChildren:ie,shapeFlag:Ce,patchFlag:Ee,dirs:Le}=I;if(he!=null&&Ba(he,null,F,I,!0),Ce&256){P.ctx.deactivate(I);return}const Pe=Ce&1&&Le,He=!Ci(I);let tt;if(He&&(tt=ve&&ve.onVnodeBeforeUnmount)&&dn(tt,P,I),Ce&6)it(I.component,F,W);else{if(Ce&128){I.suspense.unmount(F,W);return}Pe&&Jn(I,null,P,"beforeUnmount"),Ce&64?I.type.remove(I,P,F,te,ue,W):ie&&(se!==Ke||Ee>0&&Ee&64)?Fe(ie,P,F,!1,!0):(se===Ke&&Ee&384||!te&&Ce&16)&&Fe(me,P,F),W&&$e(I)}(He&&(tt=ve&&ve.onVnodeUnmounted)||Pe)&&Ut(()=>{tt&&dn(tt,P,I),Pe&&Jn(I,null,P,"unmounted")},F)},$e=I=>{const{type:P,el:F,anchor:W,transition:te}=I;if(P===Ke){Xe(F,W);return}if(P===ks){D(I);return}const se=()=>{i(F),te&&!te.persisted&&te.afterLeave&&te.afterLeave()};if(I.shapeFlag&1&&te&&!te.persisted){const{leave:ve,delayLeave:he}=te,me=()=>ve(F,se);he?he(I.el,se,me):me()}else se()},Xe=(I,P)=>{let F;for(;I!==P;)F=h(I),i(I),I=F;i(P)},it=(I,P,F)=>{const{bum:W,scope:te,update:se,subTree:ve,um:he}=I;W&&Cs(W),te.stop(),se&&(se.active=!1,Se(ve,I,P,F)),he&&Ut(he,P),Ut(()=>{I.isUnmounted=!0},P),P&&P.pendingBranch&&!P.isUnmounted&&I.asyncDep&&!I.asyncResolved&&I.suspenseId===P.pendingId&&(P.deps--,P.deps===0&&P.resolve())},Fe=(I,P,F,W=!1,te=!1,se=0)=>{for(let ve=se;ve<I.length;ve++)Se(I[ve],P,F,W,te)},V=I=>I.shapeFlag&6?V(I.component.subTree):I.shapeFlag&128?I.suspense.next():h(I.anchor||I.el),ge=(I,P,F)=>{I==null?P._vnode&&Se(P._vnode,null,null,!0):A(P._vnode||null,I,P,null,null,null,F),Uc(),Eh(),P._vnode=I},ue={p:A,um:Se,m:Re,r:$e,mt:Y,mc:z,pc:ae,pbc:O,n:V,o:n};let Te,Qe;return e&&([Te,Qe]=e(ue)),{render:ge,hydrate:Te,createApp:py(ge,Te)}}function er({effect:n,update:e},t){n.allowRecurse=e.allowRecurse=t}function Nh(n,e,t=!1){const r=n.children,i=e.children;if(Me(r)&&Me(i))for(let s=0;s<r.length;s++){const o=r[s];let a=i[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[s]=Kn(i[s]),a.el=o.el),t||Nh(o,a)),a.type===mo&&(a.el=o.el)}}function _y(n){const e=n.slice(),t=[0];let r,i,s,o,a;const l=n.length;for(r=0;r<l;r++){const c=n[r];if(c!==0){if(i=t[t.length-1],n[i]<c){e[r]=i,t.push(r);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,n[t[a]]<c?s=a+1:o=a;c<n[t[s]]&&(s>0&&(e[r]=t[s-1]),t[s]=r)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}const wy=n=>n.__isTeleport,Ke=Symbol.for("v-fgt"),mo=Symbol.for("v-txt"),Qn=Symbol.for("v-cmt"),ks=Symbol.for("v-stc"),ki=[];let nn=null;function oe(n=!1){ki.push(nn=n?null:[])}function Sy(){ki.pop(),nn=ki[ki.length-1]||null}let Hi=1;function Qc(n){Hi+=n}function Uh(n){return n.dynamicChildren=Hi>0?nn||Cr:null,Sy(),Hi>0&&nn&&nn.push(n),n}function le(n,e,t,r,i,s){return Uh(T(n,e,t,r,i,s,!0))}function El(n,e,t,r,i){return Uh(qe(n,e,t,r,i,!0))}function js(n){return n?n.__v_isVNode===!0:!1}function bi(n,e){return n.type===e.type&&n.key===e.key}const go="__vInternal",$h=({key:n})=>n??null,Rs=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?vt(n)||ft(n)||Ue(n)?{i:Pt,r:n,k:e,f:!!t}:n:null);function T(n,e=null,t=null,r=0,i=null,s=n===Ke?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&$h(e),ref:e&&Rs(e),scopeId:fo,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Pt};return a?(_l(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=vt(t)?8:16),Hi>0&&!o&&nn&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&nn.push(l),l}const qe=Ty;function Ty(n,e=null,t=null,r=0,i=null,s=!1){if((!n||n===oy)&&(n=Qn),js(n)){const a=Pr(n,e,!0);return t&&_l(a,t),Hi>0&&!s&&nn&&(a.shapeFlag&6?nn[nn.indexOf(n)]=a:nn.push(a)),a.patchFlag|=-2,a}if(My(n)&&(n=n.__vccOpts),e){e=Cy(e);let{class:a,style:l}=e;a&&!vt(a)&&(e.class=Mt(a)),ct(l)&&(mh(l)&&!Me(l)&&(l=Et({},l)),e.style=Vt(l))}const o=vt(n)?1:jg(n)?128:wy(n)?64:ct(n)?4:Ue(n)?2:0;return T(n,e,t,r,i,o,s,!0)}function Cy(n){return n?mh(n)||go in n?Et({},n):n:null}function Pr(n,e,t=!1){const{props:r,ref:i,patchFlag:s,children:o}=n,a=e?Ly(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:n.type,props:a,key:a&&$h(a),ref:e&&e.ref?t&&i?Me(i)?i.concat(Rs(e)):[i,Rs(e)]:Rs(e):i,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:o,target:n.target,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Ke?s===-1?16:s|16:s,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:n.transition,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Pr(n.ssContent),ssFallback:n.ssFallback&&Pr(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce}}function Ve(n=" ",e=0){return qe(mo,null,n,e)}function Vr(n,e){const t=qe(ks,null,n);return t.staticCount=e,t}function Or(n="",e=!1){return e?(oe(),El(Qn,null,n)):qe(Qn,null,n)}function fn(n){return n==null||typeof n=="boolean"?qe(Qn):Me(n)?qe(Ke,null,n.slice()):typeof n=="object"?Kn(n):qe(mo,null,String(n))}function Kn(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Pr(n)}function _l(n,e){let t=0;const{shapeFlag:r}=n;if(e==null)e=null;else if(Me(e))t=16;else if(typeof e=="object")if(r&65){const i=e.default;i&&(i._c&&(i._d=!1),_l(n,i()),i._c&&(i._d=!0));return}else{t=32;const i=e._;!i&&!(go in e)?e._ctx=Pt:i===3&&Pt&&(Pt.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else Ue(e)?(e={default:e,_ctx:Pt},t=32):(e=String(e),r&64?(t=16,e=[Ve(e)]):t=8);n.children=e,n.shapeFlag|=t}function Ly(...n){const e={};for(let t=0;t<n.length;t++){const r=n[t];for(const i in r)if(i==="class")e.class!==r.class&&(e.class=Mt([e.class,r.class]));else if(i==="style")e.style=Vt([e.style,r.style]);else if(so(i)){const s=e[i],o=r[i];o&&s!==o&&!(Me(s)&&s.includes(o))&&(e[i]=s?[].concat(s,o):o)}else i!==""&&(e[i]=r[i])}return e}function dn(n,e,t,r=null){sn(n,e,7,[t,r])}const ky=Dh();let Ry=0;function Iy(n,e,t){const r=n.type,i=(e?e.appContext:n.appContext)||ky,s={uid:Ry++,vnode:n,type:r,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new eh(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ph(r,i),emitsOptions:wh(r,i),emit:null,emitted:null,propsDefaults:at,inheritAttrs:r.inheritAttrs,ctx:at,data:at,props:at,attrs:at,slots:at,refs:at,setupState:at,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=Hg.bind(null,s),n.ce&&n.ce(s),s}let Ct=null,wl,mr,Xc="__VUE_INSTANCE_SETTERS__";(mr=wa()[Xc])||(mr=wa()[Xc]=[]),mr.push(n=>Ct=n),wl=n=>{mr.length>1?mr.forEach(e=>e(n)):mr[0](n)};const Mr=n=>{wl(n),n.scope.on()},lr=()=>{Ct&&Ct.scope.off(),wl(null)};function Hh(n){return n.vnode.shapeFlag&4}let Gi=!1;function Dy(n,e=!1){Gi=e;const{props:t,children:r}=n.vnode,i=Hh(n);gy(n,t,i,e),vy(n,r);const s=i?By(n,e):void 0;return Gi=!1,s}function By(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=co(new Proxy(n.ctx,ay));const{setup:r}=t;if(r){const i=n.setupContext=r.length>1?Oy(n):null;Mr(n),qr();const s=Wn(r,n,0,[n.props,i]);if(jr(),lr(),Wu(s)){if(s.then(lr,lr),e)return s.then(o=>{Zc(n,o,e)}).catch(o=>{uo(o,n,0)});n.asyncDep=s}else Zc(n,s,e)}else Gh(n,e)}function Zc(n,e,t){Ue(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:ct(e)&&(n.setupState=vh(e)),Gh(n,t)}let Jc;function Gh(n,e,t){const r=n.type;if(!n.render){if(!e&&Jc&&!r.render){const i=r.template||bl(n).template;if(i){const{isCustomElement:s,compilerOptions:o}=n.appContext.config,{delimiters:a,compilerOptions:l}=r,c=Et(Et({isCustomElement:s,delimiters:a},o),l);r.render=Jc(i,c)}}n.render=r.render||rn}Mr(n),qr(),ly(n),jr(),lr()}function Py(n){return n.attrsProxy||(n.attrsProxy=new Proxy(n.attrs,{get(e,t){return Ht(n,"get","$attrs"),e[t]}}))}function Oy(n){const e=t=>{n.exposed=t||{}};return{get attrs(){return Py(n)},slots:n.slots,emit:n.emit,expose:e}}function yo(n){if(n.exposed)return n.exposeProxy||(n.exposeProxy=new Proxy(vh(co(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Li)return Li[t](n)},has(e,t){return t in e||t in Li}}))}function My(n){return Ue(n)&&"__vccOpts"in n}const rt=(n,e)=>Og(n,e,Gi);function Kh(n,e,t){const r=arguments.length;return r===2?ct(e)&&!Me(e)?js(e)?qe(n,null,[e]):qe(n,e):qe(n,null,e):(r>3?t=Array.prototype.slice.call(arguments,2):r===3&&js(t)&&(t=[t]),qe(n,e,t))}const Fy=Symbol.for("v-scx"),Ny=()=>an(Fy),Uy="3.3.4",$y="http://www.w3.org/2000/svg",ir=typeof document<"u"?document:null,ed=ir&&ir.createElement("template"),Hy={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,r)=>{const i=e?ir.createElementNS($y,n):ir.createElement(n,t?{is:t}:void 0);return n==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:n=>ir.createTextNode(n),createComment:n=>ir.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>ir.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,r,i,s){const o=t?t.previousSibling:e.lastChild;if(i&&(i===s||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),t),!(i===s||!(i=i.nextSibling)););else{ed.innerHTML=r?`<svg>${n}</svg>`:n;const a=ed.content;if(r){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}};function Gy(n,e,t){const r=n._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}function Ky(n,e,t){const r=n.style,i=vt(t);if(t&&!i){if(e&&!vt(e))for(const s in e)t[s]==null&&Pa(r,s,"");for(const s in t)Pa(r,s,t[s])}else{const s=r.display;i?e!==t&&(r.cssText=t):e&&n.removeAttribute("style"),"_vod"in n&&(r.display=s)}}const td=/\s*!important$/;function Pa(n,e,t){if(Me(t))t.forEach(r=>Pa(n,e,r));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const r=zy(n,e);td.test(t)?n.setProperty(zr(r),t.replace(td,""),"important"):n[r]=t}}const nd=["Webkit","Moz","ms"],Vo={};function zy(n,e){const t=Vo[e];if(t)return t;let r=Dr(e);if(r!=="filter"&&r in n)return Vo[e]=r;r=Xu(r);for(let i=0;i<nd.length;i++){const s=nd[i]+r;if(s in n)return Vo[e]=s}return e}const rd="http://www.w3.org/1999/xlink";function qy(n,e,t,r,i){if(r&&e.startsWith("xlink:"))t==null?n.removeAttributeNS(rd,e.slice(6,e.length)):n.setAttributeNS(rd,e,t);else{const s=Zm(e);t==null||s&&!Zu(t)?n.removeAttribute(e):n.setAttribute(e,s?"":t)}}function jy(n,e,t,r,i,s,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,i,s),n[e]=t??"";return}const a=n.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){n._value=t;const c=a==="OPTION"?n.getAttribute("value"):n.value,d=t??"";c!==d&&(n.value=d),t==null&&n.removeAttribute(e);return}let l=!1;if(t===""||t==null){const c=typeof n[e];c==="boolean"?t=Zu(t):t==null&&c==="string"?(t="",l=!0):c==="number"&&(t=0,l=!0)}try{n[e]=t}catch{}l&&n.removeAttribute(e)}function _r(n,e,t,r){n.addEventListener(e,t,r)}function Vy(n,e,t,r){n.removeEventListener(e,t,r)}function Wy(n,e,t,r,i=null){const s=n._vei||(n._vei={}),o=s[e];if(r&&o)o.value=r;else{const[a,l]=Yy(e);if(r){const c=s[e]=Zy(r,i);_r(n,a,c,l)}else o&&(Vy(n,a,o,l),s[e]=void 0)}}const id=/(?:Once|Passive|Capture)$/;function Yy(n){let e;if(id.test(n)){e={};let r;for(;r=n.match(id);)n=n.slice(0,n.length-r[0].length),e[r[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):zr(n.slice(2)),e]}let Wo=0;const Qy=Promise.resolve(),Xy=()=>Wo||(Qy.then(()=>Wo=0),Wo=Date.now());function Zy(n,e){const t=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=t.attached)return;sn(Jy(r,t.value),e,5,[r])};return t.value=n,t.attached=Xy(),t}function Jy(n,e){if(Me(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(r=>i=>!i._stopped&&r&&r(i))}else return e}const sd=/^on[a-z]/,e1=(n,e,t,r,i=!1,s,o,a,l)=>{e==="class"?Gy(n,r,i):e==="style"?Ky(n,t,r):so(e)?al(e)||Wy(n,e,t,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):t1(n,e,r,i))?jy(n,e,r,s,o,a,l):(e==="true-value"?n._trueValue=r:e==="false-value"&&(n._falseValue=r),qy(n,e,r,i))};function t1(n,e,t,r){return r?!!(e==="innerHTML"||e==="textContent"||e in n&&sd.test(e)&&Ue(t)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA"||sd.test(e)&&vt(t)?!1:e in n}const od=n=>{const e=n.props["onUpdate:modelValue"]||!1;return Me(e)?t=>Cs(e,t):e};function n1(n){n.target.composing=!0}function ad(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const ld={created(n,{modifiers:{lazy:e,trim:t,number:r}},i){n._assign=od(i);const s=r||i.props&&i.props.type==="number";_r(n,e?"change":"input",o=>{if(o.target.composing)return;let a=n.value;t&&(a=a.trim()),s&&(a=_a(a)),n._assign(a)}),t&&_r(n,"change",()=>{n.value=n.value.trim()}),e||(_r(n,"compositionstart",n1),_r(n,"compositionend",ad),_r(n,"change",ad))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,modifiers:{lazy:t,trim:r,number:i}},s){if(n._assign=od(s),n.composing||document.activeElement===n&&n.type!=="range"&&(t||r&&n.value.trim()===e||(i||n.type==="number")&&_a(n.value)===e))return;const o=e??"";n.value!==o&&(n.value=o)}},r1=Et({patchProp:e1},Hy);let cd;function i1(){return cd||(cd=xy(r1))}const s1=(...n)=>{const e=i1().createApp(...n),{mount:t}=e;return e.mount=r=>{const i=o1(r);if(!i)return;const s=e._component;!Ue(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.innerHTML="";const o=t(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function o1(n){return vt(n)?document.querySelector(n):n}var a1=!1;/*!
 * pinia v2.1.6
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let zh;const Ao=n=>zh=n,qh=Symbol();function Oa(n){return n&&typeof n=="object"&&Object.prototype.toString.call(n)==="[object Object]"&&typeof n.toJSON!="function"}var Ri;(function(n){n.direct="direct",n.patchObject="patch object",n.patchFunction="patch function"})(Ri||(Ri={}));function l1(){const n=th(!0),e=n.run(()=>Tt({}));let t=[],r=[];const i=co({install(s){Ao(i),i._a=s,s.provide(qh,i),s.config.globalProperties.$pinia=i,r.forEach(o=>t.push(o)),r=[]},use(s){return!this._a&&!a1?r.push(s):t.push(s),this},_p:t,_a:null,_e:n,_s:new Map,state:e});return i}const jh=()=>{};function dd(n,e,t,r=jh){n.push(e);const i=()=>{const s=n.indexOf(e);s>-1&&(n.splice(s,1),r())};return!t&&nh()&&eg(i),i}function gr(n,...e){n.slice().forEach(t=>{t(...e)})}const c1=n=>n();function Ma(n,e){n instanceof Map&&e instanceof Map&&e.forEach((t,r)=>n.set(r,t)),n instanceof Set&&e instanceof Set&&e.forEach(n.add,n);for(const t in e){if(!e.hasOwnProperty(t))continue;const r=e[t],i=n[t];Oa(i)&&Oa(r)&&n.hasOwnProperty(t)&&!ft(r)&&!Vn(r)?n[t]=Ma(i,r):n[t]=r}return n}const d1=Symbol();function u1(n){return!Oa(n)||!n.hasOwnProperty(d1)}const{assign:Gn}=Object;function h1(n){return!!(ft(n)&&n.effect)}function f1(n,e,t,r){const{state:i,actions:s,getters:o}=e,a=t.state.value[n];let l;function c(){a||(t.state.value[n]=i?i():{});const d=Ig(t.state.value[n]);return Gn(d,s,Object.keys(o||{}).reduce((u,h)=>(u[h]=co(rt(()=>{Ao(t);const y=t._s.get(n);return o[h].call(y,y)})),u),{}))}return l=Vh(n,c,e,t,r,!0),l}function Vh(n,e,t={},r,i,s){let o;const a=Gn({actions:{}},t),l={deep:!0};let c,d,u=[],h=[],y;const m=r.state.value[n];!s&&!m&&(r.state.value[n]={}),Tt({});let A;function b(z){let Z;c=d=!1,typeof z=="function"?(z(r.state.value[n]),Z={type:Ri.patchFunction,storeId:n,events:y}):(Ma(r.state.value[n],z),Z={type:Ri.patchObject,payload:z,storeId:n,events:y});const O=A=Symbol();Ni().then(()=>{A===O&&(c=!0)}),d=!0,gr(u,Z,r.state.value[n])}const S=s?function(){const{state:Z}=t,O=Z?Z():{};this.$patch(ee=>{Gn(ee,O)})}:jh;function C(){o.stop(),u=[],h=[],r._s.delete(n)}function R(z,Z){return function(){Ao(r);const O=Array.from(arguments),ee=[],_e=[];function ce(H){ee.push(H)}function Y(H){_e.push(H)}gr(h,{args:O,name:z,store:B,after:ce,onError:Y});let re;try{re=Z.apply(this&&this.$id===n?this:B,O)}catch(H){throw gr(_e,H),H}return re instanceof Promise?re.then(H=>(gr(ee,H),H)).catch(H=>(gr(_e,H),Promise.reject(H))):(gr(ee,re),re)}}const D={_p:r,$id:n,$onAction:dd.bind(null,h),$patch:b,$reset:S,$subscribe(z,Z={}){const O=dd(u,z,Z.detached,()=>ee()),ee=o.run(()=>on(()=>r.state.value[n],_e=>{(Z.flush==="sync"?d:c)&&z({storeId:n,type:Ri.direct,events:y},_e)},Gn({},l,Z)));return O},$dispose:C},B=Wi(D);r._s.set(n,B);const K=r._a&&r._a.runWithContext||c1,N=r._e.run(()=>(o=th(),K(()=>o.run(e))));for(const z in N){const Z=N[z];if(ft(Z)&&!h1(Z)||Vn(Z))s||(m&&u1(Z)&&(ft(Z)?Z.value=m[z]:Ma(Z,m[z])),r.state.value[n][z]=Z);else if(typeof Z=="function"){const O=R(z,Z);N[z]=O,a.actions[z]=Z}}return Gn(B,N),Gn(Ye(B),N),Object.defineProperty(B,"$state",{get:()=>r.state.value[n],set:z=>{b(Z=>{Gn(Z,z)})}}),r._p.forEach(z=>{Gn(B,o.run(()=>z({store:B,app:r._a,pinia:r,options:a})))}),m&&s&&t.hydrate&&t.hydrate(B.$state,m),c=!0,d=!0,B}function Wh(n,e,t){let r,i;const s=typeof e=="function";typeof n=="string"?(r=n,i=s?t:e):(i=n,r=n.id);function o(a,l){const c=my();return a=a||(c?an(qh,null):null),a&&Ao(a),a=zh,a._s.has(r)||(s?Vh(r,e,i,a):f1(r,i,a)),a._s.get(r)}return o.$id=r,o}function p1(n){return typeof n=="object"&&n!==null}function ud(n,e){return n=p1(n)?n:Object.create(null),new Proxy(n,{get(t,r,i){return r==="key"?Reflect.get(t,r,i):Reflect.get(t,r,i)||Reflect.get(e,r,i)}})}function m1(n,e){return e.reduce((t,r)=>t==null?void 0:t[r],n)}function g1(n,e,t){return e.slice(0,-1).reduce((r,i)=>/^(__proto__)$/.test(i)?{}:r[i]=r[i]||{},n)[e[e.length-1]]=t,n}function y1(n,e){return e.reduce((t,r)=>{const i=r.split(".");return g1(t,i,m1(n,i))},{})}function A1(n,e){return t=>{var r;try{const{storage:i=localStorage,beforeRestore:s=void 0,afterRestore:o=void 0,serializer:a={serialize:JSON.stringify,deserialize:JSON.parse},key:l=e.$id,paths:c=null,debug:d=!1}=t;return{storage:i,beforeRestore:s,afterRestore:o,serializer:a,key:((r=n.key)!=null?r:u=>u)(typeof l=="string"?l:l(e.$id)),paths:c,debug:d}}catch(i){return t.debug&&console.error("[pinia-plugin-persistedstate]",i),null}}}function hd(n,{storage:e,serializer:t,key:r,debug:i}){try{const s=e==null?void 0:e.getItem(r);s&&n.$patch(t==null?void 0:t.deserialize(s))}catch(s){i&&console.error("[pinia-plugin-persistedstate]",s)}}function fd(n,{storage:e,serializer:t,key:r,paths:i,debug:s}){try{const o=Array.isArray(i)?y1(n,i):n;e.setItem(r,t.serialize(o))}catch(o){s&&console.error("[pinia-plugin-persistedstate]",o)}}function v1(n={}){return e=>{const{auto:t=!1}=n,{options:{persist:r=t},store:i,pinia:s}=e;if(!r)return;if(!(i.$id in s.state.value)){const a=s._s.get(i.$id.replace("__hot:",""));a&&Promise.resolve().then(()=>a.$persist());return}const o=(Array.isArray(r)?r.map(a=>ud(a,n)):[ud(r,n)]).map(A1(n,i)).filter(Boolean);i.$persist=()=>{o.forEach(a=>{fd(i.$state,a)})},i.$hydrate=({runHooks:a=!0}={})=>{o.forEach(l=>{const{beforeRestore:c,afterRestore:d}=l;a&&(c==null||c(e)),hd(i,l),a&&(d==null||d(e))})},o.forEach(a=>{const{beforeRestore:l,afterRestore:c}=a;l==null||l(e),hd(i,a),c==null||c(e),i.$subscribe((d,u)=>{fd(u,a)},{detached:!0})})}}var b1=v1();/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const wr=typeof window<"u";function x1(n){return n.__esModule||n[Symbol.toStringTag]==="Module"}const Je=Object.assign;function Yo(n,e){const t={};for(const r in e){const i=e[r];t[r]=ln(i)?i.map(n):n(i)}return t}const Ii=()=>{},ln=Array.isArray,E1=/\/$/,_1=n=>n.replace(E1,"");function Qo(n,e,t="/"){let r,i={},s="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(r=e.slice(0,l),s=e.slice(l+1,a>-1?a:e.length),i=n(s)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=C1(r??e,t),{fullPath:r+(s&&"?")+s+o,path:r,query:i,hash:o}}function w1(n,e){const t=e.query?n(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function pd(n,e){return!e||!n.toLowerCase().startsWith(e.toLowerCase())?n:n.slice(e.length)||"/"}function S1(n,e,t){const r=e.matched.length-1,i=t.matched.length-1;return r>-1&&r===i&&Fr(e.matched[r],t.matched[i])&&Yh(e.params,t.params)&&n(e.query)===n(t.query)&&e.hash===t.hash}function Fr(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function Yh(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(const t in n)if(!T1(n[t],e[t]))return!1;return!0}function T1(n,e){return ln(n)?md(n,e):ln(e)?md(e,n):n===e}function md(n,e){return ln(e)?n.length===e.length&&n.every((t,r)=>t===e[r]):n.length===1&&n[0]===e}function C1(n,e){if(n.startsWith("/"))return n;if(!n)return e;const t=e.split("/"),r=n.split("/"),i=r[r.length-1];(i===".."||i===".")&&r.push("");let s=t.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")s>1&&s--;else break;return t.slice(0,s).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var Ki;(function(n){n.pop="pop",n.push="push"})(Ki||(Ki={}));var Di;(function(n){n.back="back",n.forward="forward",n.unknown=""})(Di||(Di={}));function L1(n){if(!n)if(wr){const e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),_1(n)}const k1=/^[^#]+#/;function R1(n,e){return n.replace(k1,"#")+e}function I1(n,e){const t=document.documentElement.getBoundingClientRect(),r=n.getBoundingClientRect();return{behavior:e.behavior,left:r.left-t.left-(e.left||0),top:r.top-t.top-(e.top||0)}}const vo=()=>({left:window.pageXOffset,top:window.pageYOffset});function D1(n){let e;if("el"in n){const t=n.el,r=typeof t=="string"&&t.startsWith("#"),i=typeof t=="string"?r?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!i)return;e=I1(i,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function gd(n,e){return(history.state?history.state.position-e:-1)+n}const Fa=new Map;function B1(n,e){Fa.set(n,e)}function P1(n){const e=Fa.get(n);return Fa.delete(n),e}let O1=()=>location.protocol+"//"+location.host;function Qh(n,e){const{pathname:t,search:r,hash:i}=e,s=n.indexOf("#");if(s>-1){let a=i.includes(n.slice(s))?n.slice(s).length:1,l=i.slice(a);return l[0]!=="/"&&(l="/"+l),pd(l,"")}return pd(t,n)+r+i}function M1(n,e,t,r){let i=[],s=[],o=null;const a=({state:h})=>{const y=Qh(n,location),m=t.value,A=e.value;let b=0;if(h){if(t.value=y,e.value=h,o&&o===m){o=null;return}b=A?h.position-A.position:0}else r(y);i.forEach(S=>{S(t.value,m,{delta:b,type:Ki.pop,direction:b?b>0?Di.forward:Di.back:Di.unknown})})};function l(){o=t.value}function c(h){i.push(h);const y=()=>{const m=i.indexOf(h);m>-1&&i.splice(m,1)};return s.push(y),y}function d(){const{history:h}=window;h.state&&h.replaceState(Je({},h.state,{scroll:vo()}),"")}function u(){for(const h of s)h();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",d,{passive:!0}),{pauseListeners:l,listen:c,destroy:u}}function yd(n,e,t,r=!1,i=!1){return{back:n,current:e,forward:t,replaced:r,position:window.history.length,scroll:i?vo():null}}function F1(n){const{history:e,location:t}=window,r={value:Qh(n,t)},i={value:e.state};i.value||s(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,c,d){const u=n.indexOf("#"),h=u>-1?(t.host&&document.querySelector("base")?n:n.slice(u))+l:O1()+n+l;try{e[d?"replaceState":"pushState"](c,"",h),i.value=c}catch(y){console.error(y),t[d?"replace":"assign"](h)}}function o(l,c){const d=Je({},e.state,yd(i.value.back,l,i.value.forward,!0),c,{position:i.value.position});s(l,d,!0),r.value=l}function a(l,c){const d=Je({},i.value,e.state,{forward:l,scroll:vo()});s(d.current,d,!0);const u=Je({},yd(r.value,l,null),{position:d.position+1},c);s(l,u,!1),r.value=l}return{location:r,state:i,push:a,replace:o}}function N1(n){n=L1(n);const e=F1(n),t=M1(n,e.state,e.location,e.replace);function r(s,o=!0){o||t.pauseListeners(),history.go(s)}const i=Je({location:"",base:n,go:r,createHref:R1.bind(null,n)},e,t);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function U1(n){return typeof n=="string"||n&&typeof n=="object"}function Xh(n){return typeof n=="string"||typeof n=="symbol"}const Un={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Zh=Symbol("");var Ad;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(Ad||(Ad={}));function Nr(n,e){return Je(new Error,{type:n,[Zh]:!0},e)}function Sn(n,e){return n instanceof Error&&Zh in n&&(e==null||!!(n.type&e))}const vd="[^/]+?",$1={sensitive:!1,strict:!1,start:!0,end:!0},H1=/[.+*?^${}()[\]/\\]/g;function G1(n,e){const t=Je({},$1,e),r=[];let i=t.start?"^":"";const s=[];for(const c of n){const d=c.length?[]:[90];t.strict&&!c.length&&(i+="/");for(let u=0;u<c.length;u++){const h=c[u];let y=40+(t.sensitive?.25:0);if(h.type===0)u||(i+="/"),i+=h.value.replace(H1,"\\$&"),y+=40;else if(h.type===1){const{value:m,repeatable:A,optional:b,regexp:S}=h;s.push({name:m,repeatable:A,optional:b});const C=S||vd;if(C!==vd){y+=10;try{new RegExp(`(${C})`)}catch(D){throw new Error(`Invalid custom RegExp for param "${m}" (${C}): `+D.message)}}let R=A?`((?:${C})(?:/(?:${C}))*)`:`(${C})`;u||(R=b&&c.length<2?`(?:/${R})`:"/"+R),b&&(R+="?"),i+=R,y+=20,b&&(y+=-8),A&&(y+=-20),C===".*"&&(y+=-50)}d.push(y)}r.push(d)}if(t.strict&&t.end){const c=r.length-1;r[c][r[c].length-1]+=.7000000000000001}t.strict||(i+="/?"),t.end?i+="$":t.strict&&(i+="(?:/|$)");const o=new RegExp(i,t.sensitive?"":"i");function a(c){const d=c.match(o),u={};if(!d)return null;for(let h=1;h<d.length;h++){const y=d[h]||"",m=s[h-1];u[m.name]=y&&m.repeatable?y.split("/"):y}return u}function l(c){let d="",u=!1;for(const h of n){(!u||!d.endsWith("/"))&&(d+="/"),u=!1;for(const y of h)if(y.type===0)d+=y.value;else if(y.type===1){const{value:m,repeatable:A,optional:b}=y,S=m in c?c[m]:"";if(ln(S)&&!A)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const C=ln(S)?S.join("/"):S;if(!C)if(b)h.length<2&&(d.endsWith("/")?d=d.slice(0,-1):u=!0);else throw new Error(`Missing required param "${m}"`);d+=C}}return d||"/"}return{re:o,score:r,keys:s,parse:a,stringify:l}}function K1(n,e){let t=0;for(;t<n.length&&t<e.length;){const r=e[t]-n[t];if(r)return r;t++}return n.length<e.length?n.length===1&&n[0]===40+40?-1:1:n.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function z1(n,e){let t=0;const r=n.score,i=e.score;for(;t<r.length&&t<i.length;){const s=K1(r[t],i[t]);if(s)return s;t++}if(Math.abs(i.length-r.length)===1){if(bd(r))return 1;if(bd(i))return-1}return i.length-r.length}function bd(n){const e=n[n.length-1];return n.length>0&&e[e.length-1]<0}const q1={type:0,value:""},j1=/[a-zA-Z0-9_]/;function V1(n){if(!n)return[[]];if(n==="/")return[[q1]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(y){throw new Error(`ERR (${t})/"${c}": ${y}`)}let t=0,r=t;const i=[];let s;function o(){s&&i.push(s),s=[]}let a=0,l,c="",d="";function u(){c&&(t===0?s.push({type:0,value:c}):t===1||t===2||t===3?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:d,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function h(){c+=l}for(;a<n.length;){if(l=n[a++],l==="\\"&&t!==2){r=t,t=4;continue}switch(t){case 0:l==="/"?(c&&u(),o()):l===":"?(u(),t=1):h();break;case 4:h(),t=r;break;case 1:l==="("?t=2:j1.test(l)?h():(u(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+l:t=3:d+=l;break;case 3:u(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,d="";break;default:e("Unknown state");break}}return t===2&&e(`Unfinished custom RegExp for param "${c}"`),u(),o(),i}function W1(n,e,t){const r=G1(V1(n.path),t),i=Je(r,{record:n,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function Y1(n,e){const t=[],r=new Map;e=_d({strict:!1,end:!0,sensitive:!1},e);function i(d){return r.get(d)}function s(d,u,h){const y=!h,m=Q1(d);m.aliasOf=h&&h.record;const A=_d(e,d),b=[m];if("alias"in d){const R=typeof d.alias=="string"?[d.alias]:d.alias;for(const D of R)b.push(Je({},m,{components:h?h.record.components:m.components,path:D,aliasOf:h?h.record:m}))}let S,C;for(const R of b){const{path:D}=R;if(u&&D[0]!=="/"){const B=u.record.path,K=B[B.length-1]==="/"?"":"/";R.path=u.record.path+(D&&K+D)}if(S=W1(R,u,A),h?h.alias.push(S):(C=C||S,C!==S&&C.alias.push(S),y&&d.name&&!Ed(S)&&o(d.name)),m.children){const B=m.children;for(let K=0;K<B.length;K++)s(B[K],S,h&&h.children[K])}h=h||S,(S.record.components&&Object.keys(S.record.components).length||S.record.name||S.record.redirect)&&l(S)}return C?()=>{o(C)}:Ii}function o(d){if(Xh(d)){const u=r.get(d);u&&(r.delete(d),t.splice(t.indexOf(u),1),u.children.forEach(o),u.alias.forEach(o))}else{const u=t.indexOf(d);u>-1&&(t.splice(u,1),d.record.name&&r.delete(d.record.name),d.children.forEach(o),d.alias.forEach(o))}}function a(){return t}function l(d){let u=0;for(;u<t.length&&z1(d,t[u])>=0&&(d.record.path!==t[u].record.path||!Jh(d,t[u]));)u++;t.splice(u,0,d),d.record.name&&!Ed(d)&&r.set(d.record.name,d)}function c(d,u){let h,y={},m,A;if("name"in d&&d.name){if(h=r.get(d.name),!h)throw Nr(1,{location:d});A=h.record.name,y=Je(xd(u.params,h.keys.filter(C=>!C.optional).map(C=>C.name)),d.params&&xd(d.params,h.keys.map(C=>C.name))),m=h.stringify(y)}else if("path"in d)m=d.path,h=t.find(C=>C.re.test(m)),h&&(y=h.parse(m),A=h.record.name);else{if(h=u.name?r.get(u.name):t.find(C=>C.re.test(u.path)),!h)throw Nr(1,{location:d,currentLocation:u});A=h.record.name,y=Je({},u.params,d.params),m=h.stringify(y)}const b=[];let S=h;for(;S;)b.unshift(S.record),S=S.parent;return{name:A,path:m,params:y,matched:b,meta:Z1(b)}}return n.forEach(d=>s(d)),{addRoute:s,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function xd(n,e){const t={};for(const r of e)r in n&&(t[r]=n[r]);return t}function Q1(n){return{path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:void 0,beforeEnter:n.beforeEnter,props:X1(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}}}function X1(n){const e={},t=n.props||!1;if("component"in n)e.default=t;else for(const r in n.components)e[r]=typeof t=="object"?t[r]:t;return e}function Ed(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function Z1(n){return n.reduce((e,t)=>Je(e,t.meta),{})}function _d(n,e){const t={};for(const r in n)t[r]=r in e?e[r]:n[r];return t}function Jh(n,e){return e.children.some(t=>t===n||Jh(n,t))}const ef=/#/g,J1=/&/g,eA=/\//g,tA=/=/g,nA=/\?/g,tf=/\+/g,rA=/%5B/g,iA=/%5D/g,nf=/%5E/g,sA=/%60/g,rf=/%7B/g,oA=/%7C/g,sf=/%7D/g,aA=/%20/g;function Sl(n){return encodeURI(""+n).replace(oA,"|").replace(rA,"[").replace(iA,"]")}function lA(n){return Sl(n).replace(rf,"{").replace(sf,"}").replace(nf,"^")}function Na(n){return Sl(n).replace(tf,"%2B").replace(aA,"+").replace(ef,"%23").replace(J1,"%26").replace(sA,"`").replace(rf,"{").replace(sf,"}").replace(nf,"^")}function cA(n){return Na(n).replace(tA,"%3D")}function dA(n){return Sl(n).replace(ef,"%23").replace(nA,"%3F")}function uA(n){return n==null?"":dA(n).replace(eA,"%2F")}function Vs(n){try{return decodeURIComponent(""+n)}catch{}return""+n}function hA(n){const e={};if(n===""||n==="?")return e;const r=(n[0]==="?"?n.slice(1):n).split("&");for(let i=0;i<r.length;++i){const s=r[i].replace(tf," "),o=s.indexOf("="),a=Vs(o<0?s:s.slice(0,o)),l=o<0?null:Vs(s.slice(o+1));if(a in e){let c=e[a];ln(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function wd(n){let e="";for(let t in n){const r=n[t];if(t=cA(t),r==null){r!==void 0&&(e+=(e.length?"&":"")+t);continue}(ln(r)?r.map(s=>s&&Na(s)):[r&&Na(r)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+t,s!=null&&(e+="="+s))})}return e}function fA(n){const e={};for(const t in n){const r=n[t];r!==void 0&&(e[t]=ln(r)?r.map(i=>i==null?null:""+i):r==null?r:""+r)}return e}const pA=Symbol(""),Sd=Symbol(""),Tl=Symbol(""),Cl=Symbol(""),Ua=Symbol("");function xi(){let n=[];function e(r){return n.push(r),()=>{const i=n.indexOf(r);i>-1&&n.splice(i,1)}}function t(){n=[]}return{add:e,list:()=>n.slice(),reset:t}}function zn(n,e,t,r,i){const s=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((o,a)=>{const l=u=>{u===!1?a(Nr(4,{from:t,to:e})):u instanceof Error?a(u):U1(u)?a(Nr(2,{from:e,to:u})):(s&&r.enterCallbacks[i]===s&&typeof u=="function"&&s.push(u),o())},c=n.call(r&&r.instances[i],e,t,l);let d=Promise.resolve(c);n.length<3&&(d=d.then(l)),d.catch(u=>a(u))})}function Xo(n,e,t,r){const i=[];for(const s of n)for(const o in s.components){let a=s.components[o];if(!(e!=="beforeRouteEnter"&&!s.instances[o]))if(mA(a)){const c=(a.__vccOpts||a)[e];c&&i.push(zn(c,t,r,s,o))}else{let l=a();i.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${s.path}"`));const d=x1(c)?c.default:c;s.components[o]=d;const h=(d.__vccOpts||d)[e];return h&&zn(h,t,r,s,o)()}))}}return i}function mA(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function Td(n){const e=an(Tl),t=an(Cl),r=rt(()=>e.resolve(Bt(n.to))),i=rt(()=>{const{matched:l}=r.value,{length:c}=l,d=l[c-1],u=t.matched;if(!d||!u.length)return-1;const h=u.findIndex(Fr.bind(null,d));if(h>-1)return h;const y=Cd(l[c-2]);return c>1&&Cd(d)===y&&u[u.length-1].path!==y?u.findIndex(Fr.bind(null,l[c-2])):h}),s=rt(()=>i.value>-1&&vA(t.params,r.value.params)),o=rt(()=>i.value>-1&&i.value===t.matched.length-1&&Yh(t.params,r.value.params));function a(l={}){return AA(l)?e[Bt(n.replace)?"replace":"push"](Bt(n.to)).catch(Ii):Promise.resolve()}return{route:r,href:rt(()=>r.value.href),isActive:s,isExactActive:o,navigate:a}}const gA=Gt({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Td,setup(n,{slots:e}){const t=Wi(Td(n)),{options:r}=an(Tl),i=rt(()=>({[Ld(n.activeClass,r.linkActiveClass,"router-link-active")]:t.isActive,[Ld(n.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const s=e.default&&e.default(t);return n.custom?s:Kh("a",{"aria-current":t.isExactActive?n.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:i.value},s)}}}),yA=gA;function AA(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function vA(n,e){for(const t in e){const r=e[t],i=n[t];if(typeof r=="string"){if(r!==i)return!1}else if(!ln(i)||i.length!==r.length||r.some((s,o)=>s!==i[o]))return!1}return!0}function Cd(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const Ld=(n,e,t)=>n??e??t,bA=Gt({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:e,slots:t}){const r=an(Ua),i=rt(()=>n.route||r.value),s=an(Sd,0),o=rt(()=>{let c=Bt(s);const{matched:d}=i.value;let u;for(;(u=d[c])&&!u.components;)c++;return c}),a=rt(()=>i.value.matched[o.value]);Ls(Sd,rt(()=>o.value+1)),Ls(pA,a),Ls(Ua,i);const l=Tt();return on(()=>[l.value,a.value,n.name],([c,d,u],[h,y,m])=>{d&&(d.instances[u]=c,y&&y!==d&&c&&c===h&&(d.leaveGuards.size||(d.leaveGuards=y.leaveGuards),d.updateGuards.size||(d.updateGuards=y.updateGuards))),c&&d&&(!y||!Fr(d,y)||!h)&&(d.enterCallbacks[u]||[]).forEach(A=>A(c))},{flush:"post"}),()=>{const c=i.value,d=n.name,u=a.value,h=u&&u.components[d];if(!h)return kd(t.default,{Component:h,route:c});const y=u.props[d],m=y?y===!0?c.params:typeof y=="function"?y(c):y:null,b=Kh(h,Je({},m,e,{onVnodeUnmounted:S=>{S.component.isUnmounted&&(u.instances[d]=null)},ref:l}));return kd(t.default,{Component:b,route:c})||b}}});function kd(n,e){if(!n)return null;const t=n(e);return t.length===1?t[0]:t}const of=bA;function xA(n){const e=Y1(n.routes,n),t=n.parseQuery||hA,r=n.stringifyQuery||wd,i=n.history,s=xi(),o=xi(),a=xi(),l=Lg(Un);let c=Un;wr&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=Yo.bind(null,V=>""+V),u=Yo.bind(null,uA),h=Yo.bind(null,Vs);function y(V,ge){let ue,Te;return Xh(V)?(ue=e.getRecordMatcher(V),Te=ge):Te=V,e.addRoute(Te,ue)}function m(V){const ge=e.getRecordMatcher(V);ge&&e.removeRoute(ge)}function A(){return e.getRoutes().map(V=>V.record)}function b(V){return!!e.getRecordMatcher(V)}function S(V,ge){if(ge=Je({},ge||l.value),typeof V=="string"){const F=Qo(t,V,ge.path),W=e.resolve({path:F.path},ge),te=i.createHref(F.fullPath);return Je(F,W,{params:h(W.params),hash:Vs(F.hash),redirectedFrom:void 0,href:te})}let ue;if("path"in V)ue=Je({},V,{path:Qo(t,V.path,ge.path).path});else{const F=Je({},V.params);for(const W in F)F[W]==null&&delete F[W];ue=Je({},V,{params:u(F)}),ge.params=u(ge.params)}const Te=e.resolve(ue,ge),Qe=V.hash||"";Te.params=d(h(Te.params));const I=w1(r,Je({},V,{hash:lA(Qe),path:Te.path})),P=i.createHref(I);return Je({fullPath:I,hash:Qe,query:r===wd?fA(V.query):V.query||{}},Te,{redirectedFrom:void 0,href:P})}function C(V){return typeof V=="string"?Qo(t,V,l.value.path):Je({},V)}function R(V,ge){if(c!==V)return Nr(8,{from:ge,to:V})}function D(V){return N(V)}function B(V){return D(Je(C(V),{replace:!0}))}function K(V){const ge=V.matched[V.matched.length-1];if(ge&&ge.redirect){const{redirect:ue}=ge;let Te=typeof ue=="function"?ue(V):ue;return typeof Te=="string"&&(Te=Te.includes("?")||Te.includes("#")?Te=C(Te):{path:Te},Te.params={}),Je({query:V.query,hash:V.hash,params:"path"in Te?{}:V.params},Te)}}function N(V,ge){const ue=c=S(V),Te=l.value,Qe=V.state,I=V.force,P=V.replace===!0,F=K(ue);if(F)return N(Je(C(F),{state:typeof F=="object"?Je({},Qe,F.state):Qe,force:I,replace:P}),ge||ue);const W=ue;W.redirectedFrom=ge;let te;return!I&&S1(r,Te,ue)&&(te=Nr(16,{to:W,from:Te}),Re(Te,Te,!0,!1)),(te?Promise.resolve(te):O(W,Te)).catch(se=>Sn(se)?Sn(se,2)?se:de(se):ae(se,W,Te)).then(se=>{if(se){if(Sn(se,2))return N(Je({replace:P},C(se.to),{state:typeof se.to=="object"?Je({},Qe,se.to.state):Qe,force:I}),ge||W)}else se=_e(W,Te,!0,P,Qe);return ee(W,Te,se),se})}function z(V,ge){const ue=R(V,ge);return ue?Promise.reject(ue):Promise.resolve()}function Z(V){const ge=Xe.values().next().value;return ge&&typeof ge.runWithContext=="function"?ge.runWithContext(V):V()}function O(V,ge){let ue;const[Te,Qe,I]=EA(V,ge);ue=Xo(Te.reverse(),"beforeRouteLeave",V,ge);for(const F of Te)F.leaveGuards.forEach(W=>{ue.push(zn(W,V,ge))});const P=z.bind(null,V,ge);return ue.push(P),Fe(ue).then(()=>{ue=[];for(const F of s.list())ue.push(zn(F,V,ge));return ue.push(P),Fe(ue)}).then(()=>{ue=Xo(Qe,"beforeRouteUpdate",V,ge);for(const F of Qe)F.updateGuards.forEach(W=>{ue.push(zn(W,V,ge))});return ue.push(P),Fe(ue)}).then(()=>{ue=[];for(const F of I)if(F.beforeEnter)if(ln(F.beforeEnter))for(const W of F.beforeEnter)ue.push(zn(W,V,ge));else ue.push(zn(F.beforeEnter,V,ge));return ue.push(P),Fe(ue)}).then(()=>(V.matched.forEach(F=>F.enterCallbacks={}),ue=Xo(I,"beforeRouteEnter",V,ge),ue.push(P),Fe(ue))).then(()=>{ue=[];for(const F of o.list())ue.push(zn(F,V,ge));return ue.push(P),Fe(ue)}).catch(F=>Sn(F,8)?F:Promise.reject(F))}function ee(V,ge,ue){a.list().forEach(Te=>Z(()=>Te(V,ge,ue)))}function _e(V,ge,ue,Te,Qe){const I=R(V,ge);if(I)return I;const P=ge===Un,F=wr?history.state:{};ue&&(Te||P?i.replace(V.fullPath,Je({scroll:P&&F&&F.scroll},Qe)):i.push(V.fullPath,Qe)),l.value=V,Re(V,ge,ue,P),de()}let ce;function Y(){ce||(ce=i.listen((V,ge,ue)=>{if(!it.listening)return;const Te=S(V),Qe=K(Te);if(Qe){N(Je(Qe,{replace:!0}),Te).catch(Ii);return}c=Te;const I=l.value;wr&&B1(gd(I.fullPath,ue.delta),vo()),O(Te,I).catch(P=>Sn(P,12)?P:Sn(P,2)?(N(P.to,Te).then(F=>{Sn(F,20)&&!ue.delta&&ue.type===Ki.pop&&i.go(-1,!1)}).catch(Ii),Promise.reject()):(ue.delta&&i.go(-ue.delta,!1),ae(P,Te,I))).then(P=>{P=P||_e(Te,I,!1),P&&(ue.delta&&!Sn(P,8)?i.go(-ue.delta,!1):ue.type===Ki.pop&&Sn(P,20)&&i.go(-1,!1)),ee(Te,I,P)}).catch(Ii)}))}let re=xi(),H=xi(),Q;function ae(V,ge,ue){de(V);const Te=H.list();return Te.length?Te.forEach(Qe=>Qe(V,ge,ue)):console.error(V),Promise.reject(V)}function j(){return Q&&l.value!==Un?Promise.resolve():new Promise((V,ge)=>{re.add([V,ge])})}function de(V){return Q||(Q=!V,Y(),re.list().forEach(([ge,ue])=>V?ue(V):ge()),re.reset()),V}function Re(V,ge,ue,Te){const{scrollBehavior:Qe}=n;if(!wr||!Qe)return Promise.resolve();const I=!ue&&P1(gd(V.fullPath,0))||(Te||!ue)&&history.state&&history.state.scroll||null;return Ni().then(()=>Qe(V,ge,I)).then(P=>P&&D1(P)).catch(P=>ae(P,V,ge))}const Se=V=>i.go(V);let $e;const Xe=new Set,it={currentRoute:l,listening:!0,addRoute:y,removeRoute:m,hasRoute:b,getRoutes:A,resolve:S,options:n,push:D,replace:B,go:Se,back:()=>Se(-1),forward:()=>Se(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:H.add,isReady:j,install(V){const ge=this;V.component("RouterLink",yA),V.component("RouterView",of),V.config.globalProperties.$router=ge,Object.defineProperty(V.config.globalProperties,"$route",{enumerable:!0,get:()=>Bt(l)}),wr&&!$e&&l.value===Un&&($e=!0,D(i.location).catch(Qe=>{}));const ue={};for(const Qe in Un)Object.defineProperty(ue,Qe,{get:()=>l.value[Qe],enumerable:!0});V.provide(Tl,ge),V.provide(Cl,fh(ue)),V.provide(Ua,l);const Te=V.unmount;Xe.add(V),V.unmount=function(){Xe.delete(V),Xe.size<1&&(c=Un,ce&&ce(),ce=null,l.value=Un,$e=!1,Q=!1),Te()}}};function Fe(V){return V.reduce((ge,ue)=>ge.then(()=>Z(ue)),Promise.resolve())}return it}function EA(n,e){const t=[],r=[],i=[],s=Math.max(e.matched.length,n.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(n.matched.find(c=>Fr(c,a))?r.push(a):t.push(a));const l=n.matched[o];l&&(e.matched.find(c=>Fr(c,l))||i.push(l))}return[t,r,i]}function Zi(){return an(Cl)}const Ft=(n,e)=>{const t=n.__vccOpts||n;for(const[r,i]of e)t[r]=i;return t},_A=Gt({__name:"App",setup(n){return(e,t)=>(oe(),El(Bt(of),{id:"allContent"}))}});const wA=Ft(_A,[["__scopeId","data-v-62d918d6"]]),SA="modulepreload",TA=function(n,e){return new URL(n,e).href},Rd={},CA=function(e,t,r){if(!t||t.length===0)return e();const i=document.getElementsByTagName("link");return Promise.all(t.map(s=>{if(s=TA(s,r),s in Rd)return;Rd[s]=!0;const o=s.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!r)for(let d=i.length-1;d>=0;d--){const u=i[d];if(u.href===s&&(!o||u.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${a}`))return;const c=document.createElement("link");if(c.rel=o?"stylesheet":SA,o||(c.as="script",c.crossOrigin=""),c.href=s,document.head.appendChild(c),o)return new Promise((d,u)=>{c.addEventListener("load",d),c.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e()).catch(s=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=s,window.dispatchEvent(o),!o.defaultPrevented)throw s})};const LA={},kA={class:"item"},RA={class:"details"};function IA(n,e){return oe(),le("div",kA,[T("i",null,[qo(n.$slots,"icon",{},void 0,!0)]),T("div",RA,[T("h3",null,[qo(n.$slots,"heading",{},void 0,!0)]),qo(n.$slots,"default",{},void 0,!0)])])}const Ei=Ft(LA,[["render",IA],["__scopeId","data-v-fd0742eb"]]),DA={},BA={xmlns:"http://www.w3.org/2000/svg",width:"20",height:"17",fill:"currentColor"},PA=T("path",{d:"M11 2.253a1 1 0 1 0-2 0h2zm-2 13a1 1 0 1 0 2 0H9zm.447-12.167a1 1 0 1 0 1.107-1.666L9.447 3.086zM1 2.253L.447 1.42A1 1 0 0 0 0 2.253h1zm0 13H0a1 1 0 0 0 1.553.833L1 15.253zm8.447.833a1 1 0 1 0 1.107-1.666l-1.107 1.666zm0-14.666a1 1 0 1 0 1.107 1.666L9.447 1.42zM19 2.253h1a1 1 0 0 0-.447-.833L19 2.253zm0 13l-.553.833A1 1 0 0 0 20 15.253h-1zm-9.553-.833a1 1 0 1 0 1.107 1.666L9.447 14.42zM9 2.253v13h2v-13H9zm1.553-.833C9.203.523 7.42 0 5.5 0v2c1.572 0 2.961.431 3.947 1.086l1.107-1.666zM5.5 0C3.58 0 1.797.523.447 1.42l1.107 1.666C2.539 2.431 3.928 2 5.5 2V0zM0 2.253v13h2v-13H0zm1.553 13.833C2.539 15.431 3.928 15 5.5 15v-2c-1.92 0-3.703.523-5.053 1.42l1.107 1.666zM5.5 15c1.572 0 2.961.431 3.947 1.086l1.107-1.666C9.203 13.523 7.42 13 5.5 13v2zm5.053-11.914C11.539 2.431 12.928 2 14.5 2V0c-1.92 0-3.703.523-5.053 1.42l1.107 1.666zM14.5 2c1.573 0 2.961.431 3.947 1.086l1.107-1.666C18.203.523 16.421 0 14.5 0v2zm3.5.253v13h2v-13h-2zm1.553 12.167C18.203 13.523 16.421 13 14.5 13v2c1.573 0 2.961.431 3.947 1.086l1.107-1.666zM14.5 13c-1.92 0-3.703.523-5.053 1.42l1.107 1.666C11.539 15.431 12.928 15 14.5 15v-2z"},null,-1),OA=[PA];function MA(n,e){return oe(),le("svg",BA,OA)}const FA=Ft(DA,[["render",MA]]),NA={},UA={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":"true",role:"img",class:"iconify iconify--mdi",width:"24",height:"24",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},$A=T("path",{d:"M20 18v-4h-3v1h-2v-1H9v1H7v-1H4v4h16M6.33 8l-1.74 4H7v-1h2v1h6v-1h2v1h2.41l-1.74-4H6.33M9 5v1h6V5H9m12.84 7.61c.1.22.16.48.16.8V18c0 .53-.21 1-.6 1.41c-.4.4-.85.59-1.4.59H4c-.55 0-1-.19-1.4-.59C2.21 19 2 18.53 2 18v-4.59c0-.32.06-.58.16-.8L4.5 7.22C4.84 6.41 5.45 6 6.33 6H7V5c0-.55.18-1 .57-1.41C7.96 3.2 8.44 3 9 3h6c.56 0 1.04.2 1.43.59c.39.41.57.86.57 1.41v1h.67c.88 0 1.49.41 1.83 1.22l2.34 5.39z",fill:"currentColor"},null,-1),HA=[$A];function GA(n,e){return oe(),le("svg",UA,HA)}const KA=Ft(NA,[["render",GA]]),zA={},qA={xmlns:"http://www.w3.org/2000/svg",width:"18",height:"20",fill:"currentColor"},jA=T("path",{d:"M11.447 8.894a1 1 0 1 0-.894-1.789l.894 1.789zm-2.894-.789a1 1 0 1 0 .894 1.789l-.894-1.789zm0 1.789a1 1 0 1 0 .894-1.789l-.894 1.789zM7.447 7.106a1 1 0 1 0-.894 1.789l.894-1.789zM10 9a1 1 0 1 0-2 0h2zm-2 2.5a1 1 0 1 0 2 0H8zm9.447-5.606a1 1 0 1 0-.894-1.789l.894 1.789zm-2.894-.789a1 1 0 1 0 .894 1.789l-.894-1.789zm2 .789a1 1 0 1 0 .894-1.789l-.894 1.789zm-1.106-2.789a1 1 0 1 0-.894 1.789l.894-1.789zM18 5a1 1 0 1 0-2 0h2zm-2 2.5a1 1 0 1 0 2 0h-2zm-5.447-4.606a1 1 0 1 0 .894-1.789l-.894 1.789zM9 1l.447-.894a1 1 0 0 0-.894 0L9 1zm-2.447.106a1 1 0 1 0 .894 1.789l-.894-1.789zm-6 3a1 1 0 1 0 .894 1.789L.553 4.106zm2.894.789a1 1 0 1 0-.894-1.789l.894 1.789zm-2-.789a1 1 0 1 0-.894 1.789l.894-1.789zm1.106 2.789a1 1 0 1 0 .894-1.789l-.894 1.789zM2 5a1 1 0 1 0-2 0h2zM0 7.5a1 1 0 1 0 2 0H0zm8.553 12.394a1 1 0 1 0 .894-1.789l-.894 1.789zm-1.106-2.789a1 1 0 1 0-.894 1.789l.894-1.789zm1.106 1a1 1 0 1 0 .894 1.789l-.894-1.789zm2.894.789a1 1 0 1 0-.894-1.789l.894 1.789zM8 19a1 1 0 1 0 2 0H8zm2-2.5a1 1 0 1 0-2 0h2zm-7.447.394a1 1 0 1 0 .894-1.789l-.894 1.789zM1 15H0a1 1 0 0 0 .553.894L1 15zm1-2.5a1 1 0 1 0-2 0h2zm12.553 2.606a1 1 0 1 0 .894 1.789l-.894-1.789zM17 15l.447.894A1 1 0 0 0 18 15h-1zm1-2.5a1 1 0 1 0-2 0h2zm-7.447-5.394l-2 1 .894 1.789 2-1-.894-1.789zm-1.106 1l-2-1-.894 1.789 2 1 .894-1.789zM8 9v2.5h2V9H8zm8.553-4.894l-2 1 .894 1.789 2-1-.894-1.789zm.894 0l-2-1-.894 1.789 2 1 .894-1.789zM16 5v2.5h2V5h-2zm-4.553-3.894l-2-1-.894 1.789 2 1 .894-1.789zm-2.894-1l-2 1 .894 1.789 2-1L8.553.106zM1.447 5.894l2-1-.894-1.789-2 1 .894 1.789zm-.894 0l2 1 .894-1.789-2-1-.894 1.789zM0 5v2.5h2V5H0zm9.447 13.106l-2-1-.894 1.789 2 1 .894-1.789zm0 1.789l2-1-.894-1.789-2 1 .894 1.789zM10 19v-2.5H8V19h2zm-6.553-3.894l-2-1-.894 1.789 2 1 .894-1.789zM2 15v-2.5H0V15h2zm13.447 1.894l2-1-.894-1.789-2 1 .894 1.789zM18 15v-2.5h-2V15h2z"},null,-1),VA=[jA];function WA(n,e){return oe(),le("svg",qA,VA)}const YA=Ft(zA,[["render",WA]]),QA={},XA={xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor"},ZA=T("path",{d:"M15 4a1 1 0 1 0 0 2V4zm0 11v-1a1 1 0 0 0-1 1h1zm0 4l-.707.707A1 1 0 0 0 16 19h-1zm-4-4l.707-.707A1 1 0 0 0 11 14v1zm-4.707-1.293a1 1 0 0 0-1.414 1.414l1.414-1.414zm-.707.707l-.707-.707.707.707zM9 11v-1a1 1 0 0 0-.707.293L9 11zm-4 0h1a1 1 0 0 0-1-1v1zm0 4H4a1 1 0 0 0 1.707.707L5 15zm10-9h2V4h-2v2zm2 0a1 1 0 0 1 1 1h2a3 3 0 0 0-3-3v2zm1 1v6h2V7h-2zm0 6a1 1 0 0 1-1 1v2a3 3 0 0 0 3-3h-2zm-1 1h-2v2h2v-2zm-3 1v4h2v-4h-2zm1.707 3.293l-4-4-1.414 1.414 4 4 1.414-1.414zM11 14H7v2h4v-2zm-4 0c-.276 0-.525-.111-.707-.293l-1.414 1.414C5.42 15.663 6.172 16 7 16v-2zm-.707 1.121l3.414-3.414-1.414-1.414-3.414 3.414 1.414 1.414zM9 12h4v-2H9v2zm4 0a3 3 0 0 0 3-3h-2a1 1 0 0 1-1 1v2zm3-3V3h-2v6h2zm0-6a3 3 0 0 0-3-3v2a1 1 0 0 1 1 1h2zm-3-3H3v2h10V0zM3 0a3 3 0 0 0-3 3h2a1 1 0 0 1 1-1V0zM0 3v6h2V3H0zm0 6a3 3 0 0 0 3 3v-2a1 1 0 0 1-1-1H0zm3 3h2v-2H3v2zm1-1v4h2v-4H4zm1.707 4.707l.586-.586-1.414-1.414-.586.586 1.414 1.414z"},null,-1),JA=[ZA];function ev(n,e){return oe(),le("svg",XA,JA)}const tv=Ft(QA,[["render",ev]]),nv={},rv={xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor"},iv=T("path",{d:"M10 3.22l-.61-.6a5.5 5.5 0 0 0-7.666.105 5.5 5.5 0 0 0-.114 7.665L10 18.78l8.39-8.4a5.5 5.5 0 0 0-.114-7.665 5.5 5.5 0 0 0-7.666-.105l-.61.61z"},null,-1),sv=[iv];function ov(n,e){return oe(),le("svg",rv,sv)}const av=Ft(nv,[["render",ov]]),lv=T("a",{href:"https://vuejs.org/",target:"_blank",rel:"noopener"},"official documentation",-1),cv=T("a",{href:"https://vitejs.dev/guide/features.html",target:"_blank",rel:"noopener"},"Vite",-1),dv=T("a",{href:"https://code.visualstudio.com/",target:"_blank",rel:"noopener"},"VSCode",-1),uv=T("a",{href:"https://github.com/johnsoncodehk/volar",target:"_blank",rel:"noopener"},"Volar",-1),hv=T("a",{href:"https://www.cypress.io/",target:"_blank",rel:"noopener"},"Cypress",-1),fv=T("a",{href:"https://on.cypress.io/component",target:"_blank",rel:"noopener"},"Cypress Component Testing",-1),pv=T("br",null,null,-1),mv=T("code",null,"README.md",-1),gv=T("a",{href:"https://pinia.vuejs.org/",target:"_blank",rel:"noopener"},"Pinia",-1),yv=T("a",{href:"https://router.vuejs.org/",target:"_blank",rel:"noopener"},"Vue Router",-1),Av=T("a",{href:"https://test-utils.vuejs.org/",target:"_blank",rel:"noopener"},"Vue Test Utils",-1),vv=T("a",{href:"https://github.com/vuejs/devtools",target:"_blank",rel:"noopener"},"Vue Dev Tools",-1),bv=T("a",{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"},"Awesome Vue",-1),xv=T("a",{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"},"Vue Land",-1),Ev=T("a",{href:"https://stackoverflow.com/questions/tagged/vue.js",target:"_blank",rel:"noopener"},"StackOverflow",-1),_v=T("a",{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"},"our mailing list",-1),wv=T("a",{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"},"@vuejs",-1),Sv=T("a",{href:"https://vuejs.org/sponsor/",target:"_blank",rel:"noopener"},"becoming a sponsor",-1),Tv=Gt({__name:"TheWelcome",setup(n){return(e,t)=>(oe(),le(Ke,null,[qe(Ei,null,{icon:Rt(()=>[qe(FA)]),heading:Rt(()=>[Ve("Documentation")]),default:Rt(()=>[Ve(" Vue’s "),lv,Ve(" provides you with all information you need to get started. ")]),_:1}),qe(Ei,null,{icon:Rt(()=>[qe(KA)]),heading:Rt(()=>[Ve("Tooling")]),default:Rt(()=>[Ve(" This project is served and bundled with "),cv,Ve(". The recommended IDE setup is "),dv,Ve(" + "),uv,Ve(". If you need to test your components and web pages, check out "),hv,Ve(" and "),fv,Ve(". "),pv,Ve(" More instructions are available in "),mv,Ve(". ")]),_:1}),qe(Ei,null,{icon:Rt(()=>[qe(YA)]),heading:Rt(()=>[Ve("Ecosystem")]),default:Rt(()=>[Ve(" Get official tools and libraries for your project: "),gv,Ve(", "),yv,Ve(", "),Av,Ve(", and "),vv,Ve(". If you need more resources, we suggest paying "),bv,Ve(" a visit. ")]),_:1}),qe(Ei,null,{icon:Rt(()=>[qe(tv)]),heading:Rt(()=>[Ve("Community")]),default:Rt(()=>[Ve(" Got stuck? Ask your question on "),xv,Ve(", our official Discord server, or "),Ev,Ve(". You should also subscribe to "),_v,Ve(" and follow the official "),wv,Ve(" twitter account for latest news in the Vue world. ")]),_:1}),qe(Ei,null,{icon:Rt(()=>[qe(av)]),heading:Rt(()=>[Ve("Support Vue")]),default:Rt(()=>[Ve(" As an independent project, Vue relies on community backing for its sustainability. You can help us by "),Sv,Ve(". ")]),_:1})],64))}}),Cv=Gt({__name:"HomeView",setup(n){return(e,t)=>(oe(),le("main",null,[qe(Tv)]))}}),Lv=""+new URL("logo0-b9af3892.png",import.meta.url).href;const kv={},Rv=n=>(Yi("data-v-8be6e8b9"),n=n(),Qi(),n),Iv={class:"pageBox"},Dv=Rv(()=>T("div",{class:"contentBox"},[T("div",{class:"logoBox"},[T("img",{src:Lv,alt:"",srcset:""})]),T("div",{class:"enterRouter"}," 点击进入 ")],-1)),Bv=[Dv];function Pv(n,e){return oe(),le("div",Iv,Bv)}const Ov=Ft(kv,[["render",Pv],["__scopeId","data-v-8be6e8b9"]]);const Mv={},Fv={class:"pageBox"},Nv=Vr('<div class="contentBox" data-v-913b33e6><div class="window_container" id="login_window" data-v-913b33e6><form id="login_form" data-v-913b33e6><h2 data-v-913b33e6>登陆</h2><div class="input-box mgb32" data-v-913b33e6><div data-v-913b33e6></div><input type="text" name="username" required="true" data-v-913b33e6><label for="username" data-v-913b33e6>用户名</label></div><div class="input-box mgb12" data-v-913b33e6><div data-v-913b33e6></div><input type="password" name="password" required="true" data-v-913b33e6><label for="password" data-v-913b33e6>密码</label></div><div class="forget mgb24" data-v-913b33e6><input type="checkbox" name="readAuth" data-v-913b33e6><a href="JavaScript:turnToForget()" id="forget_pw_link" data-v-913b33e6>同意用户协议及隐私政策</a></div><input class="login-btn" type="submit" value="进入" id="login_btn" data-v-913b33e6><div class="signup-box" data-v-913b33e6><div id="pwChange" data-v-913b33e6><a href="#" data-v-913b33e6>忘记密码</a></div><div id="registerTo" data-v-913b33e6> 没有账号？<a href="#" data-v-913b33e6>注册</a></div></div></form></div></div>',1),Uv=[Nv];function $v(n,e){return oe(),le("div",Fv,Uv)}const Hv=Ft(Mv,[["render",$v],["__scopeId","data-v-913b33e6"]]);function af(n,e){return function(){return n.apply(e,arguments)}}const{toString:Gv}=Object.prototype,{getPrototypeOf:Ll}=Object,bo=(n=>e=>{const t=Gv.call(e);return n[t]||(n[t]=t.slice(8,-1).toLowerCase())})(Object.create(null)),En=n=>(n=n.toLowerCase(),e=>bo(e)===n),xo=n=>e=>typeof e===n,{isArray:Wr}=Array,zi=xo("undefined");function Kv(n){return n!==null&&!zi(n)&&n.constructor!==null&&!zi(n.constructor)&&Yt(n.constructor.isBuffer)&&n.constructor.isBuffer(n)}const lf=En("ArrayBuffer");function zv(n){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(n):e=n&&n.buffer&&lf(n.buffer),e}const qv=xo("string"),Yt=xo("function"),cf=xo("number"),Eo=n=>n!==null&&typeof n=="object",jv=n=>n===!0||n===!1,Is=n=>{if(bo(n)!=="object")return!1;const e=Ll(n);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in n)&&!(Symbol.iterator in n)},Vv=En("Date"),Wv=En("File"),Yv=En("Blob"),Qv=En("FileList"),Xv=n=>Eo(n)&&Yt(n.pipe),Zv=n=>{let e;return n&&(typeof FormData=="function"&&n instanceof FormData||Yt(n.append)&&((e=bo(n))==="formdata"||e==="object"&&Yt(n.toString)&&n.toString()==="[object FormData]"))},Jv=En("URLSearchParams"),eb=n=>n.trim?n.trim():n.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Ji(n,e,{allOwnKeys:t=!1}={}){if(n===null||typeof n>"u")return;let r,i;if(typeof n!="object"&&(n=[n]),Wr(n))for(r=0,i=n.length;r<i;r++)e.call(null,n[r],r,n);else{const s=t?Object.getOwnPropertyNames(n):Object.keys(n),o=s.length;let a;for(r=0;r<o;r++)a=s[r],e.call(null,n[a],a,n)}}function df(n,e){e=e.toLowerCase();const t=Object.keys(n);let r=t.length,i;for(;r-- >0;)if(i=t[r],e===i.toLowerCase())return i;return null}const uf=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),hf=n=>!zi(n)&&n!==uf;function $a(){const{caseless:n}=hf(this)&&this||{},e={},t=(r,i)=>{const s=n&&df(e,i)||i;Is(e[s])&&Is(r)?e[s]=$a(e[s],r):Is(r)?e[s]=$a({},r):Wr(r)?e[s]=r.slice():e[s]=r};for(let r=0,i=arguments.length;r<i;r++)arguments[r]&&Ji(arguments[r],t);return e}const tb=(n,e,t,{allOwnKeys:r}={})=>(Ji(e,(i,s)=>{t&&Yt(i)?n[s]=af(i,t):n[s]=i},{allOwnKeys:r}),n),nb=n=>(n.charCodeAt(0)===65279&&(n=n.slice(1)),n),rb=(n,e,t,r)=>{n.prototype=Object.create(e.prototype,r),n.prototype.constructor=n,Object.defineProperty(n,"super",{value:e.prototype}),t&&Object.assign(n.prototype,t)},ib=(n,e,t,r)=>{let i,s,o;const a={};if(e=e||{},n==null)return e;do{for(i=Object.getOwnPropertyNames(n),s=i.length;s-- >0;)o=i[s],(!r||r(o,n,e))&&!a[o]&&(e[o]=n[o],a[o]=!0);n=t!==!1&&Ll(n)}while(n&&(!t||t(n,e))&&n!==Object.prototype);return e},sb=(n,e,t)=>{n=String(n),(t===void 0||t>n.length)&&(t=n.length),t-=e.length;const r=n.indexOf(e,t);return r!==-1&&r===t},ob=n=>{if(!n)return null;if(Wr(n))return n;let e=n.length;if(!cf(e))return null;const t=new Array(e);for(;e-- >0;)t[e]=n[e];return t},ab=(n=>e=>n&&e instanceof n)(typeof Uint8Array<"u"&&Ll(Uint8Array)),lb=(n,e)=>{const r=(n&&n[Symbol.iterator]).call(n);let i;for(;(i=r.next())&&!i.done;){const s=i.value;e.call(n,s[0],s[1])}},cb=(n,e)=>{let t;const r=[];for(;(t=n.exec(e))!==null;)r.push(t);return r},db=En("HTMLFormElement"),ub=n=>n.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(t,r,i){return r.toUpperCase()+i}),Id=(({hasOwnProperty:n})=>(e,t)=>n.call(e,t))(Object.prototype),hb=En("RegExp"),ff=(n,e)=>{const t=Object.getOwnPropertyDescriptors(n),r={};Ji(t,(i,s)=>{let o;(o=e(i,s,n))!==!1&&(r[s]=o||i)}),Object.defineProperties(n,r)},fb=n=>{ff(n,(e,t)=>{if(Yt(n)&&["arguments","caller","callee"].indexOf(t)!==-1)return!1;const r=n[t];if(Yt(r)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+t+"'")})}})},pb=(n,e)=>{const t={},r=i=>{i.forEach(s=>{t[s]=!0})};return Wr(n)?r(n):r(String(n).split(e)),t},mb=()=>{},gb=(n,e)=>(n=+n,Number.isFinite(n)?n:e),Zo="abcdefghijklmnopqrstuvwxyz",Dd="0123456789",pf={DIGIT:Dd,ALPHA:Zo,ALPHA_DIGIT:Zo+Zo.toUpperCase()+Dd},yb=(n=16,e=pf.ALPHA_DIGIT)=>{let t="";const{length:r}=e;for(;n--;)t+=e[Math.random()*r|0];return t};function Ab(n){return!!(n&&Yt(n.append)&&n[Symbol.toStringTag]==="FormData"&&n[Symbol.iterator])}const vb=n=>{const e=new Array(10),t=(r,i)=>{if(Eo(r)){if(e.indexOf(r)>=0)return;if(!("toJSON"in r)){e[i]=r;const s=Wr(r)?[]:{};return Ji(r,(o,a)=>{const l=t(o,i+1);!zi(l)&&(s[a]=l)}),e[i]=void 0,s}}return r};return t(n,0)},bb=En("AsyncFunction"),xb=n=>n&&(Eo(n)||Yt(n))&&Yt(n.then)&&Yt(n.catch),J={isArray:Wr,isArrayBuffer:lf,isBuffer:Kv,isFormData:Zv,isArrayBufferView:zv,isString:qv,isNumber:cf,isBoolean:jv,isObject:Eo,isPlainObject:Is,isUndefined:zi,isDate:Vv,isFile:Wv,isBlob:Yv,isRegExp:hb,isFunction:Yt,isStream:Xv,isURLSearchParams:Jv,isTypedArray:ab,isFileList:Qv,forEach:Ji,merge:$a,extend:tb,trim:eb,stripBOM:nb,inherits:rb,toFlatObject:ib,kindOf:bo,kindOfTest:En,endsWith:sb,toArray:ob,forEachEntry:lb,matchAll:cb,isHTMLForm:db,hasOwnProperty:Id,hasOwnProp:Id,reduceDescriptors:ff,freezeMethods:fb,toObjectSet:pb,toCamelCase:ub,noop:mb,toFiniteNumber:gb,findKey:df,global:uf,isContextDefined:hf,ALPHABET:pf,generateString:yb,isSpecCompliantForm:Ab,toJSONObject:vb,isAsyncFn:bb,isThenable:xb};function je(n,e,t,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=n,this.name="AxiosError",e&&(this.code=e),t&&(this.config=t),r&&(this.request=r),i&&(this.response=i)}J.inherits(je,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:J.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const mf=je.prototype,gf={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(n=>{gf[n]={value:n}});Object.defineProperties(je,gf);Object.defineProperty(mf,"isAxiosError",{value:!0});je.from=(n,e,t,r,i,s)=>{const o=Object.create(mf);return J.toFlatObject(n,o,function(l){return l!==Error.prototype},a=>a!=="isAxiosError"),je.call(o,n.message,e,t,r,i),o.cause=n,o.name=n.name,s&&Object.assign(o,s),o};const Eb=null;function Ha(n){return J.isPlainObject(n)||J.isArray(n)}function yf(n){return J.endsWith(n,"[]")?n.slice(0,-2):n}function Bd(n,e,t){return n?n.concat(e).map(function(i,s){return i=yf(i),!t&&s?"["+i+"]":i}).join(t?".":""):e}function _b(n){return J.isArray(n)&&!n.some(Ha)}const wb=J.toFlatObject(J,{},null,function(e){return/^is[A-Z]/.test(e)});function _o(n,e,t){if(!J.isObject(n))throw new TypeError("target must be an object");e=e||new FormData,t=J.toFlatObject(t,{metaTokens:!0,dots:!1,indexes:!1},!1,function(A,b){return!J.isUndefined(b[A])});const r=t.metaTokens,i=t.visitor||d,s=t.dots,o=t.indexes,l=(t.Blob||typeof Blob<"u"&&Blob)&&J.isSpecCompliantForm(e);if(!J.isFunction(i))throw new TypeError("visitor must be a function");function c(m){if(m===null)return"";if(J.isDate(m))return m.toISOString();if(!l&&J.isBlob(m))throw new je("Blob is not supported. Use a Buffer instead.");return J.isArrayBuffer(m)||J.isTypedArray(m)?l&&typeof Blob=="function"?new Blob([m]):Buffer.from(m):m}function d(m,A,b){let S=m;if(m&&!b&&typeof m=="object"){if(J.endsWith(A,"{}"))A=r?A:A.slice(0,-2),m=JSON.stringify(m);else if(J.isArray(m)&&_b(m)||(J.isFileList(m)||J.endsWith(A,"[]"))&&(S=J.toArray(m)))return A=yf(A),S.forEach(function(R,D){!(J.isUndefined(R)||R===null)&&e.append(o===!0?Bd([A],D,s):o===null?A:A+"[]",c(R))}),!1}return Ha(m)?!0:(e.append(Bd(b,A,s),c(m)),!1)}const u=[],h=Object.assign(wb,{defaultVisitor:d,convertValue:c,isVisitable:Ha});function y(m,A){if(!J.isUndefined(m)){if(u.indexOf(m)!==-1)throw Error("Circular reference detected in "+A.join("."));u.push(m),J.forEach(m,function(S,C){(!(J.isUndefined(S)||S===null)&&i.call(e,S,J.isString(C)?C.trim():C,A,h))===!0&&y(S,A?A.concat(C):[C])}),u.pop()}}if(!J.isObject(n))throw new TypeError("data must be an object");return y(n),e}function Pd(n){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(n).replace(/[!'()~]|%20|%00/g,function(r){return e[r]})}function kl(n,e){this._pairs=[],n&&_o(n,this,e)}const Af=kl.prototype;Af.append=function(e,t){this._pairs.push([e,t])};Af.toString=function(e){const t=e?function(r){return e.call(this,r,Pd)}:Pd;return this._pairs.map(function(i){return t(i[0])+"="+t(i[1])},"").join("&")};function Sb(n){return encodeURIComponent(n).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function vf(n,e,t){if(!e)return n;const r=t&&t.encode||Sb,i=t&&t.serialize;let s;if(i?s=i(e,t):s=J.isURLSearchParams(e)?e.toString():new kl(e,t).toString(r),s){const o=n.indexOf("#");o!==-1&&(n=n.slice(0,o)),n+=(n.indexOf("?")===-1?"?":"&")+s}return n}class Tb{constructor(){this.handlers=[]}use(e,t,r){return this.handlers.push({fulfilled:e,rejected:t,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){J.forEach(this.handlers,function(r){r!==null&&e(r)})}}const Od=Tb,bf={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Cb=typeof URLSearchParams<"u"?URLSearchParams:kl,Lb=typeof FormData<"u"?FormData:null,kb=typeof Blob<"u"?Blob:null,Rb={isBrowser:!0,classes:{URLSearchParams:Cb,FormData:Lb,Blob:kb},protocols:["http","https","file","blob","url","data"]},xf=typeof window<"u"&&typeof document<"u",Ib=(n=>xf&&["ReactNative","NativeScript","NS"].indexOf(n)<0)(typeof navigator<"u"&&navigator.product),Db=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),Bb=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:xf,hasStandardBrowserEnv:Ib,hasStandardBrowserWebWorkerEnv:Db},Symbol.toStringTag,{value:"Module"})),gn={...Bb,...Rb};function Pb(n,e){return _o(n,new gn.classes.URLSearchParams,Object.assign({visitor:function(t,r,i,s){return gn.isNode&&J.isBuffer(t)?(this.append(r,t.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)}},e))}function Ob(n){return J.matchAll(/\w+|\[(\w*)]/g,n).map(e=>e[0]==="[]"?"":e[1]||e[0])}function Mb(n){const e={},t=Object.keys(n);let r;const i=t.length;let s;for(r=0;r<i;r++)s=t[r],e[s]=n[s];return e}function Ef(n){function e(t,r,i,s){let o=t[s++];if(o==="__proto__")return!0;const a=Number.isFinite(+o),l=s>=t.length;return o=!o&&J.isArray(i)?i.length:o,l?(J.hasOwnProp(i,o)?i[o]=[i[o],r]:i[o]=r,!a):((!i[o]||!J.isObject(i[o]))&&(i[o]=[]),e(t,r,i[o],s)&&J.isArray(i[o])&&(i[o]=Mb(i[o])),!a)}if(J.isFormData(n)&&J.isFunction(n.entries)){const t={};return J.forEachEntry(n,(r,i)=>{e(Ob(r),i,t,0)}),t}return null}function Fb(n,e,t){if(J.isString(n))try{return(e||JSON.parse)(n),J.trim(n)}catch(r){if(r.name!=="SyntaxError")throw r}return(t||JSON.stringify)(n)}const Rl={transitional:bf,adapter:["xhr","http"],transformRequest:[function(e,t){const r=t.getContentType()||"",i=r.indexOf("application/json")>-1,s=J.isObject(e);if(s&&J.isHTMLForm(e)&&(e=new FormData(e)),J.isFormData(e))return i?JSON.stringify(Ef(e)):e;if(J.isArrayBuffer(e)||J.isBuffer(e)||J.isStream(e)||J.isFile(e)||J.isBlob(e))return e;if(J.isArrayBufferView(e))return e.buffer;if(J.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(s){if(r.indexOf("application/x-www-form-urlencoded")>-1)return Pb(e,this.formSerializer).toString();if((a=J.isFileList(e))||r.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return _o(a?{"files[]":e}:e,l&&new l,this.formSerializer)}}return s||i?(t.setContentType("application/json",!1),Fb(e)):e}],transformResponse:[function(e){const t=this.transitional||Rl.transitional,r=t&&t.forcedJSONParsing,i=this.responseType==="json";if(e&&J.isString(e)&&(r&&!this.responseType||i)){const o=!(t&&t.silentJSONParsing)&&i;try{return JSON.parse(e)}catch(a){if(o)throw a.name==="SyntaxError"?je.from(a,je.ERR_BAD_RESPONSE,this,null,this.response):a}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:gn.classes.FormData,Blob:gn.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};J.forEach(["delete","get","head","post","put","patch"],n=>{Rl.headers[n]={}});const Il=Rl,Nb=J.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Ub=n=>{const e={};let t,r,i;return n&&n.split(`
`).forEach(function(o){i=o.indexOf(":"),t=o.substring(0,i).trim().toLowerCase(),r=o.substring(i+1).trim(),!(!t||e[t]&&Nb[t])&&(t==="set-cookie"?e[t]?e[t].push(r):e[t]=[r]:e[t]=e[t]?e[t]+", "+r:r)}),e},Md=Symbol("internals");function _i(n){return n&&String(n).trim().toLowerCase()}function Ds(n){return n===!1||n==null?n:J.isArray(n)?n.map(Ds):String(n)}function $b(n){const e=Object.create(null),t=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=t.exec(n);)e[r[1]]=r[2];return e}const Hb=n=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(n.trim());function Jo(n,e,t,r,i){if(J.isFunction(r))return r.call(this,e,t);if(i&&(e=t),!!J.isString(e)){if(J.isString(r))return e.indexOf(r)!==-1;if(J.isRegExp(r))return r.test(e)}}function Gb(n){return n.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,t,r)=>t.toUpperCase()+r)}function Kb(n,e){const t=J.toCamelCase(" "+e);["get","set","has"].forEach(r=>{Object.defineProperty(n,r+t,{value:function(i,s,o){return this[r].call(this,e,i,s,o)},configurable:!0})})}class wo{constructor(e){e&&this.set(e)}set(e,t,r){const i=this;function s(a,l,c){const d=_i(l);if(!d)throw new Error("header name must be a non-empty string");const u=J.findKey(i,d);(!u||i[u]===void 0||c===!0||c===void 0&&i[u]!==!1)&&(i[u||l]=Ds(a))}const o=(a,l)=>J.forEach(a,(c,d)=>s(c,d,l));return J.isPlainObject(e)||e instanceof this.constructor?o(e,t):J.isString(e)&&(e=e.trim())&&!Hb(e)?o(Ub(e),t):e!=null&&s(t,e,r),this}get(e,t){if(e=_i(e),e){const r=J.findKey(this,e);if(r){const i=this[r];if(!t)return i;if(t===!0)return $b(i);if(J.isFunction(t))return t.call(this,i,r);if(J.isRegExp(t))return t.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=_i(e),e){const r=J.findKey(this,e);return!!(r&&this[r]!==void 0&&(!t||Jo(this,this[r],r,t)))}return!1}delete(e,t){const r=this;let i=!1;function s(o){if(o=_i(o),o){const a=J.findKey(r,o);a&&(!t||Jo(r,r[a],a,t))&&(delete r[a],i=!0)}}return J.isArray(e)?e.forEach(s):s(e),i}clear(e){const t=Object.keys(this);let r=t.length,i=!1;for(;r--;){const s=t[r];(!e||Jo(this,this[s],s,e,!0))&&(delete this[s],i=!0)}return i}normalize(e){const t=this,r={};return J.forEach(this,(i,s)=>{const o=J.findKey(r,s);if(o){t[o]=Ds(i),delete t[s];return}const a=e?Gb(s):String(s).trim();a!==s&&delete t[s],t[a]=Ds(i),r[a]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return J.forEach(this,(r,i)=>{r!=null&&r!==!1&&(t[i]=e&&J.isArray(r)?r.join(", "):r)}),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,t])=>e+": "+t).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const r=new this(e);return t.forEach(i=>r.set(i)),r}static accessor(e){const r=(this[Md]=this[Md]={accessors:{}}).accessors,i=this.prototype;function s(o){const a=_i(o);r[a]||(Kb(i,o),r[a]=!0)}return J.isArray(e)?e.forEach(s):s(e),this}}wo.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);J.reduceDescriptors(wo.prototype,({value:n},e)=>{let t=e[0].toUpperCase()+e.slice(1);return{get:()=>n,set(r){this[t]=r}}});J.freezeMethods(wo);const In=wo;function ea(n,e){const t=this||Il,r=e||t,i=In.from(r.headers);let s=r.data;return J.forEach(n,function(a){s=a.call(t,s,i.normalize(),e?e.status:void 0)}),i.normalize(),s}function _f(n){return!!(n&&n.__CANCEL__)}function es(n,e,t){je.call(this,n??"canceled",je.ERR_CANCELED,e,t),this.name="CanceledError"}J.inherits(es,je,{__CANCEL__:!0});function zb(n,e,t){const r=t.config.validateStatus;!t.status||!r||r(t.status)?n(t):e(new je("Request failed with status code "+t.status,[je.ERR_BAD_REQUEST,je.ERR_BAD_RESPONSE][Math.floor(t.status/100)-4],t.config,t.request,t))}const qb=gn.hasStandardBrowserEnv?{write(n,e,t,r,i,s){const o=[n+"="+encodeURIComponent(e)];J.isNumber(t)&&o.push("expires="+new Date(t).toGMTString()),J.isString(r)&&o.push("path="+r),J.isString(i)&&o.push("domain="+i),s===!0&&o.push("secure"),document.cookie=o.join("; ")},read(n){const e=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove(n){this.write(n,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function jb(n){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(n)}function Vb(n,e){return e?n.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):n}function wf(n,e){return n&&!jb(e)?Vb(n,e):e}const Wb=gn.hasStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a");let r;function i(s){let o=s;return e&&(t.setAttribute("href",o),o=t.href),t.setAttribute("href",o),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:t.pathname.charAt(0)==="/"?t.pathname:"/"+t.pathname}}return r=i(window.location.href),function(o){const a=J.isString(o)?i(o):o;return a.protocol===r.protocol&&a.host===r.host}}():function(){return function(){return!0}}();function Yb(n){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(n);return e&&e[1]||""}function Qb(n,e){n=n||10;const t=new Array(n),r=new Array(n);let i=0,s=0,o;return e=e!==void 0?e:1e3,function(l){const c=Date.now(),d=r[s];o||(o=c),t[i]=l,r[i]=c;let u=s,h=0;for(;u!==i;)h+=t[u++],u=u%n;if(i=(i+1)%n,i===s&&(s=(s+1)%n),c-o<e)return;const y=d&&c-d;return y?Math.round(h*1e3/y):void 0}}function Fd(n,e){let t=0;const r=Qb(50,250);return i=>{const s=i.loaded,o=i.lengthComputable?i.total:void 0,a=s-t,l=r(a),c=s<=o;t=s;const d={loaded:s,total:o,progress:o?s/o:void 0,bytes:a,rate:l||void 0,estimated:l&&o&&c?(o-s)/l:void 0,event:i};d[e?"download":"upload"]=!0,n(d)}}const Xb=typeof XMLHttpRequest<"u",Zb=Xb&&function(n){return new Promise(function(t,r){let i=n.data;const s=In.from(n.headers).normalize();let{responseType:o,withXSRFToken:a}=n,l;function c(){n.cancelToken&&n.cancelToken.unsubscribe(l),n.signal&&n.signal.removeEventListener("abort",l)}let d;if(J.isFormData(i)){if(gn.hasStandardBrowserEnv||gn.hasStandardBrowserWebWorkerEnv)s.setContentType(!1);else if((d=s.getContentType())!==!1){const[A,...b]=d?d.split(";").map(S=>S.trim()).filter(Boolean):[];s.setContentType([A||"multipart/form-data",...b].join("; "))}}let u=new XMLHttpRequest;if(n.auth){const A=n.auth.username||"",b=n.auth.password?unescape(encodeURIComponent(n.auth.password)):"";s.set("Authorization","Basic "+btoa(A+":"+b))}const h=wf(n.baseURL,n.url);u.open(n.method.toUpperCase(),vf(h,n.params,n.paramsSerializer),!0),u.timeout=n.timeout;function y(){if(!u)return;const A=In.from("getAllResponseHeaders"in u&&u.getAllResponseHeaders()),S={data:!o||o==="text"||o==="json"?u.responseText:u.response,status:u.status,statusText:u.statusText,headers:A,config:n,request:u};zb(function(R){t(R),c()},function(R){r(R),c()},S),u=null}if("onloadend"in u?u.onloadend=y:u.onreadystatechange=function(){!u||u.readyState!==4||u.status===0&&!(u.responseURL&&u.responseURL.indexOf("file:")===0)||setTimeout(y)},u.onabort=function(){u&&(r(new je("Request aborted",je.ECONNABORTED,n,u)),u=null)},u.onerror=function(){r(new je("Network Error",je.ERR_NETWORK,n,u)),u=null},u.ontimeout=function(){let b=n.timeout?"timeout of "+n.timeout+"ms exceeded":"timeout exceeded";const S=n.transitional||bf;n.timeoutErrorMessage&&(b=n.timeoutErrorMessage),r(new je(b,S.clarifyTimeoutError?je.ETIMEDOUT:je.ECONNABORTED,n,u)),u=null},gn.hasStandardBrowserEnv&&(a&&J.isFunction(a)&&(a=a(n)),a||a!==!1&&Wb(h))){const A=n.xsrfHeaderName&&n.xsrfCookieName&&qb.read(n.xsrfCookieName);A&&s.set(n.xsrfHeaderName,A)}i===void 0&&s.setContentType(null),"setRequestHeader"in u&&J.forEach(s.toJSON(),function(b,S){u.setRequestHeader(S,b)}),J.isUndefined(n.withCredentials)||(u.withCredentials=!!n.withCredentials),o&&o!=="json"&&(u.responseType=n.responseType),typeof n.onDownloadProgress=="function"&&u.addEventListener("progress",Fd(n.onDownloadProgress,!0)),typeof n.onUploadProgress=="function"&&u.upload&&u.upload.addEventListener("progress",Fd(n.onUploadProgress)),(n.cancelToken||n.signal)&&(l=A=>{u&&(r(!A||A.type?new es(null,n,u):A),u.abort(),u=null)},n.cancelToken&&n.cancelToken.subscribe(l),n.signal&&(n.signal.aborted?l():n.signal.addEventListener("abort",l)));const m=Yb(h);if(m&&gn.protocols.indexOf(m)===-1){r(new je("Unsupported protocol "+m+":",je.ERR_BAD_REQUEST,n));return}u.send(i||null)})},Ga={http:Eb,xhr:Zb};J.forEach(Ga,(n,e)=>{if(n){try{Object.defineProperty(n,"name",{value:e})}catch{}Object.defineProperty(n,"adapterName",{value:e})}});const Nd=n=>`- ${n}`,Jb=n=>J.isFunction(n)||n===null||n===!1,Sf={getAdapter:n=>{n=J.isArray(n)?n:[n];const{length:e}=n;let t,r;const i={};for(let s=0;s<e;s++){t=n[s];let o;if(r=t,!Jb(t)&&(r=Ga[(o=String(t)).toLowerCase()],r===void 0))throw new je(`Unknown adapter '${o}'`);if(r)break;i[o||"#"+s]=r}if(!r){const s=Object.entries(i).map(([a,l])=>`adapter ${a} `+(l===!1?"is not supported by the environment":"is not available in the build"));let o=e?s.length>1?`since :
`+s.map(Nd).join(`
`):" "+Nd(s[0]):"as no adapter specified";throw new je("There is no suitable adapter to dispatch the request "+o,"ERR_NOT_SUPPORT")}return r},adapters:Ga};function ta(n){if(n.cancelToken&&n.cancelToken.throwIfRequested(),n.signal&&n.signal.aborted)throw new es(null,n)}function Ud(n){return ta(n),n.headers=In.from(n.headers),n.data=ea.call(n,n.transformRequest),["post","put","patch"].indexOf(n.method)!==-1&&n.headers.setContentType("application/x-www-form-urlencoded",!1),Sf.getAdapter(n.adapter||Il.adapter)(n).then(function(r){return ta(n),r.data=ea.call(n,n.transformResponse,r),r.headers=In.from(r.headers),r},function(r){return _f(r)||(ta(n),r&&r.response&&(r.response.data=ea.call(n,n.transformResponse,r.response),r.response.headers=In.from(r.response.headers))),Promise.reject(r)})}const $d=n=>n instanceof In?n.toJSON():n;function Ur(n,e){e=e||{};const t={};function r(c,d,u){return J.isPlainObject(c)&&J.isPlainObject(d)?J.merge.call({caseless:u},c,d):J.isPlainObject(d)?J.merge({},d):J.isArray(d)?d.slice():d}function i(c,d,u){if(J.isUndefined(d)){if(!J.isUndefined(c))return r(void 0,c,u)}else return r(c,d,u)}function s(c,d){if(!J.isUndefined(d))return r(void 0,d)}function o(c,d){if(J.isUndefined(d)){if(!J.isUndefined(c))return r(void 0,c)}else return r(void 0,d)}function a(c,d,u){if(u in e)return r(c,d);if(u in n)return r(void 0,c)}const l={url:s,method:s,data:s,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(c,d)=>i($d(c),$d(d),!0)};return J.forEach(Object.keys(Object.assign({},n,e)),function(d){const u=l[d]||i,h=u(n[d],e[d],d);J.isUndefined(h)&&u!==a||(t[d]=h)}),t}const Tf="1.6.7",Dl={};["object","boolean","number","function","string","symbol"].forEach((n,e)=>{Dl[n]=function(r){return typeof r===n||"a"+(e<1?"n ":" ")+n}});const Hd={};Dl.transitional=function(e,t,r){function i(s,o){return"[Axios v"+Tf+"] Transitional option '"+s+"'"+o+(r?". "+r:"")}return(s,o,a)=>{if(e===!1)throw new je(i(o," has been removed"+(t?" in "+t:"")),je.ERR_DEPRECATED);return t&&!Hd[o]&&(Hd[o]=!0,console.warn(i(o," has been deprecated since v"+t+" and will be removed in the near future"))),e?e(s,o,a):!0}};function ex(n,e,t){if(typeof n!="object")throw new je("options must be an object",je.ERR_BAD_OPTION_VALUE);const r=Object.keys(n);let i=r.length;for(;i-- >0;){const s=r[i],o=e[s];if(o){const a=n[s],l=a===void 0||o(a,s,n);if(l!==!0)throw new je("option "+s+" must be "+l,je.ERR_BAD_OPTION_VALUE);continue}if(t!==!0)throw new je("Unknown option "+s,je.ERR_BAD_OPTION)}}const Ka={assertOptions:ex,validators:Dl},$n=Ka.validators;class Ws{constructor(e){this.defaults=e,this.interceptors={request:new Od,response:new Od}}async request(e,t){try{return await this._request(e,t)}catch(r){if(r instanceof Error){let i;Error.captureStackTrace?Error.captureStackTrace(i={}):i=new Error;const s=i.stack?i.stack.replace(/^.+\n/,""):"";r.stack?s&&!String(r.stack).endsWith(s.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+s):r.stack=s}throw r}}_request(e,t){typeof e=="string"?(t=t||{},t.url=e):t=e||{},t=Ur(this.defaults,t);const{transitional:r,paramsSerializer:i,headers:s}=t;r!==void 0&&Ka.assertOptions(r,{silentJSONParsing:$n.transitional($n.boolean),forcedJSONParsing:$n.transitional($n.boolean),clarifyTimeoutError:$n.transitional($n.boolean)},!1),i!=null&&(J.isFunction(i)?t.paramsSerializer={serialize:i}:Ka.assertOptions(i,{encode:$n.function,serialize:$n.function},!0)),t.method=(t.method||this.defaults.method||"get").toLowerCase();let o=s&&J.merge(s.common,s[t.method]);s&&J.forEach(["delete","get","head","post","put","patch","common"],m=>{delete s[m]}),t.headers=In.concat(o,s);const a=[];let l=!0;this.interceptors.request.forEach(function(A){typeof A.runWhen=="function"&&A.runWhen(t)===!1||(l=l&&A.synchronous,a.unshift(A.fulfilled,A.rejected))});const c=[];this.interceptors.response.forEach(function(A){c.push(A.fulfilled,A.rejected)});let d,u=0,h;if(!l){const m=[Ud.bind(this),void 0];for(m.unshift.apply(m,a),m.push.apply(m,c),h=m.length,d=Promise.resolve(t);u<h;)d=d.then(m[u++],m[u++]);return d}h=a.length;let y=t;for(u=0;u<h;){const m=a[u++],A=a[u++];try{y=m(y)}catch(b){A.call(this,b);break}}try{d=Ud.call(this,y)}catch(m){return Promise.reject(m)}for(u=0,h=c.length;u<h;)d=d.then(c[u++],c[u++]);return d}getUri(e){e=Ur(this.defaults,e);const t=wf(e.baseURL,e.url);return vf(t,e.params,e.paramsSerializer)}}J.forEach(["delete","get","head","options"],function(e){Ws.prototype[e]=function(t,r){return this.request(Ur(r||{},{method:e,url:t,data:(r||{}).data}))}});J.forEach(["post","put","patch"],function(e){function t(r){return function(s,o,a){return this.request(Ur(a||{},{method:e,headers:r?{"Content-Type":"multipart/form-data"}:{},url:s,data:o}))}}Ws.prototype[e]=t(),Ws.prototype[e+"Form"]=t(!0)});const Bs=Ws;class Bl{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let t;this.promise=new Promise(function(s){t=s});const r=this;this.promise.then(i=>{if(!r._listeners)return;let s=r._listeners.length;for(;s-- >0;)r._listeners[s](i);r._listeners=null}),this.promise.then=i=>{let s;const o=new Promise(a=>{r.subscribe(a),s=a}).then(i);return o.cancel=function(){r.unsubscribe(s)},o},e(function(s,o,a){r.reason||(r.reason=new es(s,o,a),t(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);t!==-1&&this._listeners.splice(t,1)}static source(){let e;return{token:new Bl(function(i){e=i}),cancel:e}}}const tx=Bl;function nx(n){return function(t){return n.apply(null,t)}}function rx(n){return J.isObject(n)&&n.isAxiosError===!0}const za={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(za).forEach(([n,e])=>{za[e]=n});const ix=za;function Cf(n){const e=new Bs(n),t=af(Bs.prototype.request,e);return J.extend(t,Bs.prototype,e,{allOwnKeys:!0}),J.extend(t,e,null,{allOwnKeys:!0}),t.create=function(i){return Cf(Ur(n,i))},t}const pt=Cf(Il);pt.Axios=Bs;pt.CanceledError=es;pt.CancelToken=tx;pt.isCancel=_f;pt.VERSION=Tf;pt.toFormData=_o;pt.AxiosError=je;pt.Cancel=pt.CanceledError;pt.all=function(e){return Promise.all(e)};pt.spread=nx;pt.isAxiosError=rx;pt.mergeConfig=Ur;pt.AxiosHeaders=In;pt.formToJSON=n=>Ef(J.isHTMLForm(n)?new FormData(n):n);pt.getAdapter=Sf.getAdapter;pt.HttpStatusCode=ix;pt.default=pt;const Sr=pt,So=Wh("animesHistory",{state:()=>({history_list:[],max_history_len:100,history_page_item_num:2,search_history:[],max_search_hists:50,max_show_search_hists:10}),getters:{show_last_search_hist(n){const e=[];for(let t=n.search_history.length-1;t>=0&&(e.push(n.search_history[t]),!(e.length>=n.max_show_search_hists));t-=1);return e},history_len(n){return n.history_list.length},history_page_num(n){return Math.ceil(n.history_list.length/n.history_page_item_num)}},actions:{reverse_hist(n){const e=[];let t=0,r=this.history_list.length-1;for(let i=1;i<n;i++)r-=this.history_page_item_num;for(let i=r;i>=0&&(e.push(this.history_list[i]),t+=1,!(t>=this.history_page_item_num));i-=1);return e},play_anime(n,e,t,r,i){for(let a=0;a<this.history_list.length;a++)if(this.history_list[a].name_cn==n){this.history_list.splice(a,1);break}this.history_list.length>=this.max_history_len&&this.history_list.splice(0,this.history_list.length-this.max_history_len-1);const s=Date.now(),o={name_cn:n,play_time:s,play_progress:{ep_title:r,ep_idx:t},play_src_idx:e,img_link:i};this.history_list.push(o)},search_anime(n){if(n!=null&&n!=null&&n!=""){const e=this.search_history.indexOf(n);e!==-1&&this.search_history.splice(e,1),this.search_history.push(n),this.search_history.length>this.max_search_hists&&this.search_history.splice(0,this.search_history.length-this.max_search_hists)}},clear_search_list(){this.search_history.length>0&&(this.search_history=[])}},persist:!0});const sx={class:"history_show"},ox={class:"history_item_list"},ax=T("div",{class:"page_title"}," 历史记录 ",-1),lx=["onClick"],cx={class:"history_img_box"},dx=["src"],ux={class:"history_info_box"},hx={class:"item_title"},fx={class:"item_progress"},px={class:"item_play_time"},mx={class:"page_router_box"},gx={class:"page_sel_btn_box"},yx=T("svg",{version:"1.0",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},[T("path",{d:"M5 0, L5 20",fill:"transparent",stroke:"red","stroke-width":"1.5"}),T("path",{d:"M15 0, L5 10, L15 20",fill:"transparent",stroke:"red","stroke-width":"1.5"})],-1),Ax=[yx],vx=["title","onClick"],bx=T("svg",{version:"1.0",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},[T("path",{d:"M15 0, L15 20",fill:"transparent",stroke:"red","stroke-width":"1.5"}),T("path",{d:"M5 0, L15 10, L5 20",fill:"transparent",stroke:"red","stroke-width":"1.5"})],-1),xx=[bx],Ex=Gt({__name:"AnimeHistory",setup(n){function e(d,u,h){Xn.push("/anime/play?animeName="+d+"&srcIdx="+u+"&epIdx="+h)}const t=So();function r(d){const u=new Date,h=new Date(d),y=h.getHours(),m=h.getMinutes();if(i(u,h))return`昨天 ${y}:${m}`;if(s(u,h))return`${y}:${m}`;const A=h.getFullYear(),b=h.getMonth()+1,S=h.getDate();return`${A}年${b}月${S}日 ${y}:${m}`}function i(d,u){const h=d.getFullYear(),y=d.getMonth(),m=d.getDate(),A=u.getFullYear(),b=u.getMonth(),S=u.getDate();return h===A&&y===b&&m-S===1}function s(d,u){const h=d.getFullYear(),y=d.getMonth(),m=d.getDate(),A=u.getFullYear(),b=u.getMonth(),S=u.getDate();return h===A&&y===b&&m===S}const o=Zi(),a=rt(()=>"page"in o.query?Number(o.query.page):1),l=rt(()=>{let d=1,u=!0,h=!0;"page"in o.query&&(d=Number(o.query.page)),d==1&&(u=!1),d==t.history_page_num&&(h=!1),t.history_page_num==0&&(u=!1,h=!1);const y=[];if(t.history_page_num<=5)for(let m=1;m<=t.history_page_num;m++)y.push(m);else if(d<=3)for(let m=1;m<=5;m++)y.push(m);else if(d+2>t.history_page_num)for(let m=t.history_page_num-4;m<=t.history_page_num;m++)y.push(m);else for(let m=d-2;m<=d+2;m++)y.push(m);return{first_page:u,last_page:h,pages2show:y}});function c(d){d>=1&&d<=t.history_page_num&&Xn.push("/anime/history?page="+d)}return(d,u)=>(oe(),le("div",sx,[T("div",ox,[ax,(oe(!0),le(Ke,null,st(Bt(t).reverse_hist(a.value),(h,y)=>(oe(),le("div",{class:"history_item",key:y,onClick:m=>e(h.name_cn,h.play_src_idx,h.play_progress.ep_idx)},[T("div",cx,[T("img",{src:h.img_link,alt:""},null,8,dx)]),T("div",ux,[T("div",hx,ke(h.name_cn),1),T("div",fx," 观看到 "+ke(h.play_progress.ep_title),1),T("div",px,ke(r(h.play_time)),1)])],8,lx))),128)),T("div",mx,[T("div",gx,[l.value.first_page?(oe(),le("button",{key:0,class:"page_sel_btn",title:"First Page",onClick:u[0]||(u[0]=h=>c(0))},Ax)):Or("",!0),(oe(!0),le(Ke,null,st(l.value.pages2show,(h,y)=>(oe(),le("button",{class:Mt(["page_sel_btn",{now_page:h==a.value}]),key:y,title:"Page "+h,onClick:m=>c(h)},ke(h),11,vx))),128)),l.value.last_page?(oe(),le("button",{key:1,class:"page_sel_btn",title:"Last page",onClick:u[1]||(u[1]=h=>c(Bt(t).history_len))},xx)):Or("",!0)])])])]))}}),Gd="http://121.89.219.65:5656/",To=Wh("animesSrc",{state:()=>({animes_search_res:[],anime_class_list:[],anime_srcs_list:["天空","非凡","飞速"],search_res_page_num:0}),getters:{},actions:{get_anime_types(n){const e=[];for(let t=0;t<n.length;t++){e.push([]);for(let r=0;r<n[t].length;r++)e[t].push({type_id:n[t][r].type_id,type_name:n[t][r].type_name})}return e},set_anime_types(n){this.anime_class_list=this.get_anime_types(n)},set_anime_srcs(n){this.animes_search_res=[];for(let e=0;e<n.length;e++){this.animes_search_res.push([]);for(let t=0;t<n[e].srcs_val.length;t++)this.animes_search_res[e].push({srcs:{vod_id:n[e].srcs_val[t].vod_id,type_id:n[e].srcs_val[t].type_id,vod_name:n[e].srcs_val[t].vod_name,vod_sub:n[e].srcs_val[t].vod_sub,vod_class:n[e].srcs_val[t].vod_class,vod_pic:n[e].srcs_val[t].vod_pic,vod_actor:n[e].srcs_val[t].vod_actor,vod_director:n[e].srcs_val[t].vod_director,vod_writer:n[e].srcs_val[t].vod_writer,vod_blurb:n[e].srcs_val[t].vod_blurb,vod_remarks:n[e].srcs_val[t].vod_remarks,vod_pubdate:n[e].srcs_val[t].vod_pubdate,vod_serial:n[e].srcs_val[t].vod_serial,vod_area:n[e].srcs_val[t].vod_area,vod_lang:n[e].srcs_val[t].vod_lang,vod_year:n[e].srcs_val[t].vod_year,type_name:n[e].srcs_val[t].type_name,vod_douban_id:n[e].srcs_val[t].vod_douban_id,vod_douban_score:n[e].srcs_val[t].vod_douban_score,vod_play_url:n[e].srcs_val[t].vod_play_url,vod_time:n[e].srcs_val[t].vod_time},srcs_idx:n[e].srcs_idx[t]})}},get_anime_srcs(n){const e=[];for(let t=0;t<n.srcs_val.length;t++)e.push({srcs:{vod_id:n.srcs_val[t].vod_id,type_id:n.srcs_val[t].type_id,vod_name:n.srcs_val[t].vod_name,vod_sub:n.srcs_val[t].vod_sub,vod_class:n.srcs_val[t].vod_class,vod_pic:n.srcs_val[t].vod_pic,vod_actor:n.srcs_val[t].vod_actor,vod_director:n.srcs_val[t].vod_director,vod_writer:n.srcs_val[t].vod_writer,vod_blurb:n.srcs_val[t].vod_blurb,vod_remarks:n.srcs_val[t].vod_remarks,vod_pubdate:n.srcs_val[t].vod_pubdate,vod_serial:n.srcs_val[t].vod_serial,vod_area:n.srcs_val[t].vod_area,vod_lang:n.srcs_val[t].vod_lang,vod_year:n.srcs_val[t].vod_year,type_name:n.srcs_val[t].type_name,vod_douban_id:n.srcs_val[t].vod_douban_id,vod_douban_score:n.srcs_val[t].vod_douban_score,vod_play_url:n.srcs_val[t].vod_play_url,vod_time:n.srcs_val[t].vod_time},srcs_idx:n.srcs_idx[t]});return e},async search_animes(n,e){const r=(await Sr.get(Gd+"api/animes/list?msg="+n+"&pg="+e)).data;this.set_anime_types(r.srcs_classes),this.set_anime_srcs(r.animes),this.search_res_page_num=r.res_page_num},async obtain_anime_detail(n){return(await Sr.get(Gd+"api/animes/play?animeName="+n)).data},async obtain_anime_bgm_detail(n){const t=(await Sr.get("https://api.bgm.tv/search/subject/"+n+"?start=0&responseGroup=large&max_results=1&type=2")).data,i=(await Sr.get("https://api.bgm.tv/v0/subjects/"+t.list[0].id)).data;return{date:i.date,images:i.images,summary:i.summary,name:i.name,name_cn:i.name_cn,tags:i.tags,infobox:i.infobox,rating:i.rating,total_episodes:i.total_episodes}},async pre_obtain_commend_keys(n){const t=(await Sr.get("https://api.bgm.tv/search/subject/"+n+"?start=0&responseGroup=large&max_results=10&type=2")).data,r=[];for(let i=0;i<t.list.length;i++)r.push(t.list[i].name_cn);return r}}}),wt=n=>(Yi("data-v-9f633dc3"),n=n(),Qi(),n),_x={class:"main_content"},wx={class:"pc_search_bar"},Sx={class:"left_board"},Tx={class:"left_content"},Cx={href:"",class:"logo_box content_box"},Lx={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",version:"1.0",viewBox:"0 0 245 83",preserveAspectRatio:"xMidYMid meet","color-interpolation-filters":"sRGB",style:{margin:"auto"}},kx={xmlns:"http://www.w3.org/2000/svg","data-v-0dd9719b":"",fill:"#333",class:"icon-text-wrapper icon-svg-group iconsvg"},Rx={class:"iconsvg-imagesvg",transform:"translate(0,0)"},Ix=wt(()=>T("rect",{fill:"#333","fill-opacity":"0","stroke-width":"2",x:"0",y:"0",width:"60",height:"82.7848834802765",class:"image-rect"},null,-1)),Dx={x:"0",y:"0",width:"60",height:"82.7848834802765",filtersec:"colorsb3131168052",class:"image-svg-svg primary",style:{overflow:"visible"}},Bx=Vr('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -0.011011754162609577 72.48161315917969 100.0059585571289" data-v-9f633dc3><path d="M0 5l2.39 62.59a3.89 3.89 0 0 0 4.18 3.74l62.32-4.72a3.9 3.9 0 0 0 3.59-4L70.24 3.74A3.89 3.89 0 0 0 66.06 0L0 5" fill="#44e9be" opacity=".8" data-v-9f633dc3></path><path fill="#3bbbf0" opacity=".8" d="M0 5.01l2.54 66.62 59.52 5.43-2.54-66.62L0 5.01" data-v-9f633dc3></path><path fill="#1580fd" opacity=".8" d="M0 5.01l2.54 66.62 49.17 18.21-2.54-66.62L0 5.01" data-v-9f633dc3></path><path d="M0 5l2.5 65.65a2.27 2.27 0 0 0 .79 1.62l31.56 26.82a3.8 3.8 0 0 0 6.26-3L39 39.74A3.82 3.82 0 0 0 37.62 37L0 5" fill="#413ef2" data-v-9f633dc3></path></svg>',1),Px=[Bx],Ox=wt(()=>T("g",{transform:"translate(67,20.172441482543945)"},[T("g",{"data-gra":"path-name",class:"tp-name iconsvg-namesvg"},[T("g",{transform:"scale(1)"},[T("g",null,[T("path",{d:"M29.79-28.3L29.79-32.27 12.91-32.27 12.91-28.3 29.79-28.3ZM12.91-27L12.91-22.99 29.79-22.99 29.79-27 12.91-27ZM12.91-18.04L36.09-18.04Q36.27-21.29 40-21.29L40-21.29Q43.78-20.7 43.6-17.46L43.6-17.46Q43.42-16.74 42.39-16.74L42.39-16.74 12.91-16.74 12.91-12.96 35.73-12.96Q36.13-15.16 39.38-15.16L39.38-15.16Q42.57-13.95 42.16-11.74L42.16-11.74Q41.71-11.21 40.41-11.03L40.41-11.03Q40.09-4.77 39.38-1.67 38.66 1.44 37.17 2.56L37.17 2.56Q35.32 3.96 32.31 3.96L32.31 3.96Q32.31 1.8 31.68 1.03L31.68 1.03Q30.96 0.22 28.89-0.27L28.89-0.27Q28.53 0.04 27.54 0.36 26.55 0.67 25.65 0.67L25.65 0.67 24.97 0.67 24.97-0.72 8.46-0.72Q8.46 1.26 5.44 1.26L5.44 1.26Q2.43 0.72 2.43-1.26L2.43-1.26Q3.1-1.93 4.14-2.52L4.14-2.52 4.14-9 8.1-8.46 8.1-2.02 14.45-2.02 14.45-10.44 18.5-9.9 18.5-2.02 24.97-2.02 24.97-8.91 28.98-8.41 28.98-0.99Q31.59-0.72 32.85-0.72L32.85-0.72Q33.8-0.72 34.24-1.13L34.24-1.13Q35.55-2.25 36.09-11.65L36.09-11.65 12.91-11.65 12.91-11.21Q12.91-10.8 11.74-10.26L11.74-10.26Q10.57-9.76 9.31-9.76L9.31-9.76 8.64-9.76 8.64-33.57 17.14-33.57Q17.82-36.27 18.22-38.3L18.22-38.3 24.61-37.17Q24.34-36.09 22.9-36.09L22.9-36.09Q22.5-35.77 21.42-34.88L21.42-34.88Q20.38-34.02 19.84-33.57L19.84-33.57 29.34-33.57Q29.61-35.87 32.94-35.87L32.94-35.87Q36.23-34.74 35.95-32.45L35.95-32.45Q35.32-31.72 34.06-31.5L34.06-31.5 34.06-20.7Q34.02-20.43 32.76-19.93L32.76-19.93Q31.5-19.48 30.51-19.48L30.51-19.48 29.79-19.48 29.79-21.69 12.91-21.69 12.91-18.04ZM69.66-26.95L69.66-14.98 81.05-14.98 81.05-26.95 69.66-26.95ZM53.77-26.95L53.77-14.98 65.16-14.98 65.16-26.95 53.77-26.95ZM84.33-30.69L84.33-30.69Q87.7-29.56 87.44-27.13L87.44-27.13Q86.81-26.41 85.55-26.19L85.55-26.19 85.55-11.07Q85.5-10.8 84.15-10.35L84.15-10.35Q82.84-9.95 81.81-9.95L81.81-9.95 81.05-9.95 81.05-13.68 69.66-13.68 69.66 2.21Q69.66 2.61 68.44 3.19L68.44 3.19Q67.23 3.82 66.02 3.82L66.02 3.82 65.16 3.82 65.16-13.68 53.77-13.68 53.77-10.75Q53.77-10.39 52.52-9.86L52.52-9.86Q51.3-9.31 50.04-9.31L50.04-9.31 49.37-9.31 49.37-28.26 65.16-28.26 65.16-38.02 69.66-37.39 69.66-28.26 80.59-28.26Q80.87-30.69 84.33-30.69ZM102.96-3.82L102.96-0.04 121.81-0.04 121.81-3.82 102.96-3.82ZM121.81-5.13L121.81-8.73 102.96-8.73 102.96-5.13 121.81-5.13ZM98.78-9.99L121.36-9.99Q121.63-12.29 124.97-12.29L124.97-12.29Q128.25-11.21 127.98-8.91L127.98-8.91Q127.35-8.19 126.09-7.96L126.09-7.96 126.09 2.56Q126.05 2.79 124.78 3.19 123.53 3.6 122.53 3.6L122.53 3.6 121.81 3.6 121.81 1.26 102.96 1.26 102.96 2.48Q102.96 2.83 101.75 3.28L101.75 3.28Q100.58 3.78 99.36 3.78L99.36 3.78 98.78 3.78 98.78-9.99ZM114.16-27.81L114.16-24.12 121.72-24.12 121.72-27.81 114.16-27.81ZM121.72-32.71L114.16-32.71 114.16-29.07 121.72-29.07 121.72-32.71ZM122.4-21.11L122.4-21.11 121.72-21.11 121.72-22.81 114.16-22.81 114.16-19.35 123.66-19.35 125.95-22.14Q125.78-22.09 124.56-21.6 123.34-21.11 122.4-21.11ZM125.78-27.81L125.78-22.36Q128.56-20.2 130.19-18.77L130.19-18.77Q130.05-18.04 129.01-18.04L129.01-18.04 114.16-18.04 114.16-14.49 126.36-14.49Q126.54-17.37 129.91-17.37L129.91-17.37Q133.29-16.79 133.11-13.9L133.11-13.9Q132.93-13.18 131.89-13.18L131.89-13.18 92.2-13.18 91.8-14.49 109.98-14.49 109.98-18.04 95.72-18.04 95.36-19.35 109.98-19.35 109.98-22.81 97.2-22.81 96.8-24.12 109.98-24.12 109.98-27.81 92.03-27.81 91.62-29.07 109.98-29.07 109.98-32.71 97.47-32.71 97.06-34.02 109.98-34.02 109.98-37.98 114.16-37.44 114.16-34.02 121.28-34.02Q121.55-36.18 124.74-36.18L124.74-36.18Q127.84-35.1 127.57-32.94L127.57-32.94Q127.08-32.31 125.78-32.04L125.78-32.04 125.78-29.07 127.44-29.07Q127.48-31.9 130.5-31.9L130.5-31.9Q133.51-31.36 133.47-28.53L133.47-28.53Q133.29-27.81 132.3-27.81L132.3-27.81 125.78-27.81ZM162.31-38.07L162.31-38.07 162.72-38.34Q167.76-37.62 168.8-35.1L168.8-35.1Q169.43-33.48 168.21-32.4L168.21-32.4Q166.86-31.23 165.19-32.27L165.19-32.27Q165.01-32.35 164.88-32.49L164.88-32.49Q164.75-35.37 162.31-38.07ZM149.4-21.69L143.41-21.69 143.41-17.82 149.4-17.82 149.4-21.69ZM143.41-16.52L143.41-12.38 149.4-12.38 149.4-16.52 143.41-16.52ZM147.47-8.41L147.47-8.41 147.96-8.59Q153.45-6.43 154.71-3.01L154.71-3.01Q155.47-0.85 154.26 0.32L154.26 0.32Q153.09 1.48 151.51 0.32L151.51 0.32Q151.11-1.75 150.03-3.96L150.03-3.96Q143.69 0.63 141.53 2.07L141.53 2.07Q141.07 3.01 140.26 3.42L140.26 3.42 138.06-0.85Q139.05-1.44 139.32-1.8 139.59-2.16 139.59-2.88L139.59-2.88 139.59-22.9 149-22.9Q149.26-24.84 152.1-24.84L152.1-24.84Q154.94-23.85 154.66-21.91L154.66-21.91Q154.22-21.38 153.18-21.2L153.18-21.2 153.18-10.93Q153.13-10.66 152.01-10.21L152.01-10.21Q150.93-9.76 150.03-9.76L150.03-9.76 149.4-9.76 149.4-11.07 143.41-11.07 143.41-2.56Q144.36-2.92 146.47-3.69 148.59-4.46 149.63-4.86L149.63-4.86Q148.59-6.88 147.47-8.41ZM170.41-16.74L170.41-23.54 161.46-23.54 161.46-16.74 170.41-16.74ZM171.76-1.17L171.76-9.09 161.46-9.09 161.46-1.17 171.76-1.17ZM173.3-25.92L173.3-25.92 172.75-26.19Q172.98-27.77 173.2-30.29L173.2-30.29 158.94-30.29Q159.12-27.86 158.09-26.41L158.09-26.41 161.69-24.84 170.01-24.84Q170.28-26.82 173.25-26.82L173.25-26.82Q176.13-25.79 175.86-23.8L175.86-23.8Q175.32-23.18 174.24-22.99L174.24-22.99 174.24-14.58Q174.19-14.35 173.03-13.95L173.03-13.95Q171.9-13.59 171.05-13.59L171.05-13.59 170.41-13.59 170.41-15.43 161.46-15.43 161.46-10.39 171.31-10.39Q171.59-12.46 174.56-12.46L174.56-12.46Q177.53-11.43 177.25-9.36L177.25-9.36Q176.85-8.78 175.59-8.5L175.59-8.5 175.59 1.93Q175.55 2.21 174.42 2.61 173.3 3.01 172.39 3.01L172.39 3.01 171.76 3.01 171.76 0.14 161.46 0.14 161.46 2.34Q161.46 2.7 160.43 3.19 159.39 3.69 158.22 3.69L158.22 3.69 157.59 3.69 157.59-25.96Q156.78-25.38 155.75-25.52L155.75-25.52Q154.71-25.7 154.4-26.64L154.4-26.64Q153.81-28.35 155.75-29.47L155.75-29.47Q156.47-30.06 156.96-31.27L156.96-31.27Q157.5-32.53 157.32-33.66L157.32-33.66 158.04-33.66Q158.49-32.45 158.67-31.59L158.67-31.59 172.8-31.59Q173.12-33.88 176.31-33.88L176.31-33.88Q179.32-32.31 179.01-30.02L179.01-30.02Q178.65-29.61 177.34-29.52L177.34-29.52Q175.23-27.4 173.3-25.92ZM139.59-24.57L139.59-24.57Q138.38-23.31 136.71-21.96L136.71-21.96 136.22-22.36Q138.38-25.38 140.22-30.06L140.22-30.06Q142.11-34.74 142.88-38.48L142.88-38.48 149.31-37.08Q149.09-36.27 147.56-36.09L147.56-36.09Q153.81-33.98 154.8-30.82L154.8-30.82Q155.38-29.11 154.13-28.13L154.13-28.13Q152.91-27.18 151.6-28.21L151.6-28.21Q150.44-32.04 147.24-35.37L147.24-35.37Q145.53-31.59 142.34-27.63L142.34-27.63 146.75-27.63Q146.79-30.15 149.58-30.15L149.58-30.15Q152.37-29.56 152.32-27.04L152.32-27.04Q152.19-26.32 151.2-26.32L151.2-26.32 142.11-26.32 141.88-27.09Q140.99-25.88 139.59-24.57Z",transform:"translate(-2.430000066757202, 38.47999954223633)"})])])])],-1)),Mx={href:"/anime/calendar",class:"logo_box content_box"},Fx={version:"1.0",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 200 60",class:"test02"},Nx={"data-v-0dd9719b":"",fill:"#333",class:"icon-text-wrapper icon-svg-group iconsvg"},Ux={class:"iconsvg-imagesvg",transform:"translate(0,0)"},$x=wt(()=>T("rect",{fill:"#333","fill-opacity":"0","stroke-width":"2",x:"0",y:"0",width:"60",height:"59.99940000599994",class:"image-rect"},null,-1)),Hx={x:"0",y:"0",width:"60",height:"59.99940000599994",filtersec:"colorsb942110291",class:"image-svg-svg primary",style:{overflow:"visible"}},Gx=wt(()=>T("svg",{xmlns:"http://www.w3.org/2000/svg",xlink:"http://www.w3.org/1999/xlink",viewBox:"-0.0005651116371154785 0 92.24056243896484 92.2393798828125"},[T("defs",null,[T("linearGradient",{id:"ac032779a-c0c1-42ff-9900-4b286f8482bd",x1:"-1.91",y1:"52.17",x2:"56.6",y2:"-6.35",gradientUnits:"userSpaceOnUse"},[T("stop",{offset:"0","stop-color":"#e37315"}),T("stop",{offset:"1","stop-color":"#ff0"})]),T("linearGradient",{id:"d818fa1a7-94cc-477d-84d5-f35844fa4281",x1:"8.59",y1:"38.17",x2:"52.62",y2:"-5.86",href:"#ac032779a-c0c1-42ff-9900-4b286f8482bd"}),T("linearGradient",{id:"bad5572ee-3e1f-427d-bf0e-465d26fcb0c7",x1:"40.07",y1:"94.15",x2:"98.58",y2:"35.63",gradientUnits:"userSpaceOnUse"},[T("stop",{offset:"0","stop-color":"#039"}),T("stop",{offset:"1","stop-color":"#65e0ff"})]),T("linearGradient",{id:"eec189f9f-5b4a-4a63-aaad-ee3f4750dd0b",x1:"54.07",y1:"83.65",x2:"98.1",y2:"39.62",href:"#bad5572ee-3e1f-427d-bf0e-465d26fcb0c7"}),T("linearGradient",{id:"ccc2c952f-50be-4b41-98b6-e9e5f6997628",x1:"13.57",y1:"78.67",x2:"78.94",y2:"13.3",gradientUnits:"userSpaceOnUse"},[T("stop",{offset:"0","stop-color":"#016737"}),T("stop",{offset:"1","stop-color":"#9f0"})]),T("linearGradient",{id:"fe808c7b1-fc9e-40dd-9af7-b64378811e90",x1:"20.84",y1:"85.95",x2:"86.21",y2:"20.58",href:"#ccc2c952f-50be-4b41-98b6-e9e5f6997628"})]),T("g",{"fill-rule":"evenodd"},[T("path",{d:"M50.91 0L21.1 29.81a4.31 4.31 0 0 1-7-2.92c-.55-5.59 4.51-14.48 8.38-18.35A28.72 28.72 0 0 1 37.12.67 46.25 46.25 0 0 0 .35 40.51c-.87 7.37-.9 19.37 9.49 19.37a9.41 9.41 0 0 0 6.7-2.78L68.3 5.35A46.17 46.17 0 0 0 50.91 0",fill:"url(#ac032779a-c0c1-42ff-9900-4b286f8482bd)"}),T("path",{d:"M50.91 0L21.1 29.81a4.31 4.31 0 0 1-7-2.92c-.51-5.23 3.9-13.35 7.63-17.54-5.48 5.09-9.79 10.93-11.4 16.94-5 18.81 5.77 20.1 19.29 6.58L60.49 2a46.52 46.52 0 0 0-9.58-2",fill:"url(#d818fa1a7-94cc-477d-84d5-f35844fa4281)"}),T("path",{d:"M92.24 41.33L62.43 71.14a4.31 4.31 0 0 0 2.92 7c5.59.55 14.48-4.52 18.34-8.38a28.74 28.74 0 0 0 7.88-14.63 46.25 46.25 0 0 1-39.85 36.76c-7.37.87-19.36.89-19.36-9.49a9.49 9.49 0 0 1 2.77-6.71l51.76-51.75a46.17 46.17 0 0 1 5.35 17.39",fill:"url(#bad5572ee-3e1f-427d-bf0e-465d26fcb0c7)"}),T("path",{d:"M92.24 41.33L62.43 71.14a4.31 4.31 0 0 0 2.92 7c5.23.51 13.34-3.89 17.53-7.62C77.8 76 72 80.3 66 81.91c-18.81 5-20.1-5.78-6.58-19.3l30.81-30.86a46.54 46.54 0 0 1 2 9.58",fill:"url(#eec189f9f-5b4a-4a63-aaad-ee3f4750dd0b)"}),T("path",{d:"M84.13 19.48L30.85 72.76c-4.86 4.86-3.81 14.57.68 17a45.49 45.49 0 0 1-11.78-6A46.52 46.52 0 0 1 8.38 72.49 45.83 45.83 0 0 1 2.43 60.7c2.47 4.49 12.15 5.54 17 .71l53.33-53.3a46.32 46.32 0 0 1 6.18 5.19 47.88 47.88 0 0 1 5.19 6.18",fill:"url(#ccc2c952f-50be-4b41-98b6-e9e5f6997628)"}),T("path",{d:"M84.13 19.48L30.85 72.76c-4.86 4.86-3.81 14.57.68 17a45.49 45.49 0 0 1-11.78-6 46.32 46.32 0 0 1-6.18-5.19L78.94 13.3a47.09 47.09 0 0 1 5.19 6.18",fill:"url(#fe808c7b1-fc9e-40dd-9af7-b64378811e90)"})])],-1)),Kx=[Gx],zx=wt(()=>T("g",{transform:"translate(67,11.079700469970703)"},[T("g",{"data-gra":"path-name",class:"tp-name iconsvg-namesvg"},[T("g",{transform:"scale(1)"},[T("g",null,[T("path",{d:"M9.81 0.04L3.19 0.04 3.15 0 3.15 0 13.28-31.45 13.32-31.5 19.93-31.5 19.93-31.45 30.06 0 30.06 0 30.06 0.04 23.45 0.04 23.4 0 22-4.27 11.21-4.27 9.81 0 9.81 0.04ZM13.23-10.62L19.98-10.62 16.61-21.11 13.23-10.62ZM95.4-31.5L102.78-31.5Q102.82-31.5 102.82-31.45L102.82-31.45 102.82 0Q102.82 0.04 102.78 0.04L102.78 0.04 96.48 0.04Q96.44 0.04 96.44 0L96.44 0 96.44-21.2 86.22-4.63Q86.17-4.59 86.17-4.63L86.17-4.63 75.91-21.2 75.91 0Q75.91 0.04 75.87 0.04L75.87 0.04 69.57 0.04Q69.57 0.04 69.57 0L69.57 0 69.57-31.45 63.31-31.45 63.31 0Q63.31 0.04 63.31 0.04L63.31 0.04 55.89 0.04 55.89 0 42.75-21.2 42.75 0Q42.75 0.04 42.7 0.04L42.7 0.04 36.45 0.04Q36.4 0.04 36.4 0L36.4 0 36.4-31.45Q36.4-31.5 36.45-31.5L36.45-31.5 43.83-31.5 43.87-31.5 56.97-10.3 56.97-31.45Q56.97-31.5 57.01-31.5L57.01-31.5 63.27-31.5 63.27-37.75Q63.27-37.8 63.31-37.8L63.31-37.8 69.57-37.8Q69.61-37.8 69.61-37.75L69.61-37.75 69.61-31.5 76.99-31.5 76.99-31.5 86.17-16.65 95.35-31.5 95.4-31.5ZM136.03 0.04L109.17 0.04Q109.13 0.04 109.13 0L109.13 0 109.13-31.45Q109.13-31.5 109.17-31.5L109.17-31.5 136.03-31.5Q136.03-31.5 136.03-31.45L136.03-31.45 136.03-25.15Q136.03-25.15 136.03-25.15L136.03-25.15 115.47-25.15 115.47-18.9 129.73-18.9Q129.78-18.9 129.78-18.9L129.78-18.9 129.78-12.6Q129.78-12.55 129.73-12.55L129.73-12.55 115.47-12.55 115.47-6.34 136.03-6.34Q136.03-6.34 136.03-6.3L136.03-6.3 136.03 0Q136.03 0.04 136.03 0.04L136.03 0.04Z",transform:"translate(-3.1500000953674316, 37.79999923706055)"})])])])],-1)),qx={class:"center_board"},jx={class:"search_cont"},Vx={action:"/anime/search"},Wx={class:"search_history_box"},Yx=wt(()=>T("div",{class:"former_input_pos"},null,-1)),Qx={class:"history_btn_box"},Xx={class:"history_items_box"},Zx=["onClick"],Jx={class:"search_list_box"},eE=wt(()=>T("div",{class:"former_input_pos"},null,-1)),tE={class:"search_items_box"},nE=["onClick"],rE={class:"search_box"},iE={class:"input_box"},sE=wt(()=>T("svg",{xmlns:"http://www.w3.org/2000/svg",id:"Outline",viewBox:"0 0 24 24"},[T("path",{d:"M18,6h0a1,1,0,0,0-1.414,0L12,10.586,7.414,6A1,1,0,0,0,6,6H6A1,1,0,0,0,6,7.414L10.586,12,6,16.586A1,1,0,0,0,6,18H6a1,1,0,0,0,1.414,0L12,13.414,16.586,18A1,1,0,0,0,18,18h0a1,1,0,0,0,0-1.414L13.414,12,18,7.414A1,1,0,0,0,18,6Z"})],-1)),oE=[sE],aE={class:"search_btn"},lE={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",version:"1.1",id:"Capa_1",x:"0px",y:"0px",viewBox:"0 0 513.749 513.749",style:{"enable-background":"new 0 0 513.749 513.749"},"xml:space":"preserve"},cE=wt(()=>T("g",null,[T("path",{d:"M504.352,459.061l-99.435-99.477c74.402-99.427,54.115-240.344-45.312-314.746S119.261-9.277,44.859,90.15   S-9.256,330.494,90.171,404.896c79.868,59.766,189.565,59.766,269.434,0l99.477,99.477c12.501,12.501,32.769,12.501,45.269,0   c12.501-12.501,12.501-32.769,0-45.269L504.352,459.061z M225.717,385.696c-88.366,0-160-71.634-160-160s71.634-160,160-160   s160,71.634,160,160C385.623,314.022,314.044,385.602,225.717,385.696z"})],-1)),dE=[cE],uE=Vr('<div class="right_board" data-v-9f633dc3><div class="right_content" data-v-9f633dc3><div class="content_box" data-v-9f633dc3><a href="/anime/history" data-v-9f633dc3><svg xmlns="http://www.w3.org/2000/svg" id="Filled" viewBox="0 0 24 24" data-v-9f633dc3><path d="M12,0A11.972,11.972,0,0,0,4,3.073V1A1,1,0,0,0,2,1V4A3,3,0,0,0,5,7H8A1,1,0,0,0,8,5H5a.854.854,0,0,1-.1-.021A9.987,9.987,0,1,1,2,12a1,1,0,0,0-2,0A12,12,0,1,0,12,0Z" data-v-9f633dc3></path><path d="M12,6a1,1,0,0,0-1,1v5a1,1,0,0,0,.293.707l3,3a1,1,0,0,0,1.414-1.414L13,11.586V7A1,1,0,0,0,12,6Z" data-v-9f633dc3></path></svg><div class="content_title" data-v-9f633dc3> 历史记录 </div></a></div><div class="content_box user_btn_box" data-v-9f633dc3><img src="https://img1.baidu.com/it/u=3209385239,1838858752&amp;fm=253&amp;fmt=auto&amp;app=120&amp;f=JPEG?w=608&amp;h=342" alt="" srcset="" data-v-9f633dc3></div></div></div>',1),hE={class:"mobile_search_bar"},fE={class:"search_history_box"},pE=wt(()=>T("div",{class:"former_input_pos"},null,-1)),mE={class:"history_btn_box"},gE={class:"history_items_box"},yE=["onClick"],AE={class:"search_list_box"},vE=wt(()=>T("div",{class:"former_input_pos"},null,-1)),bE={class:"search_items_box"},xE=["onClick"],EE={class:"left_board"},_E={class:"left_content"},wE={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},SE=["d"],TE=["d"],CE={class:"center_board"},LE={class:"center_content"},kE={action:""},RE={class:"search_box"},IE={class:"input_box"},DE=wt(()=>T("svg",{xmlns:"http://www.w3.org/2000/svg",id:"Outline",viewBox:"0 0 24 24"},[T("path",{d:"M18,6h0a1,1,0,0,0-1.414,0L12,10.586,7.414,6A1,1,0,0,0,6,6H6A1,1,0,0,0,6,7.414L10.586,12,6,16.586A1,1,0,0,0,6,18H6a1,1,0,0,0,1.414,0L12,13.414,16.586,18A1,1,0,0,0,18,18h0a1,1,0,0,0,0-1.414L13.414,12,18,7.414A1,1,0,0,0,18,6Z"})],-1)),BE=[DE],PE={class:"search_btn2"},OE={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",version:"1.1",id:"Capa_1",x:"0px",y:"0px",viewBox:"0 0 513.749 513.749",style:{"enable-background":"new 0 0 513.749 513.749"},"xml:space":"preserve"},ME=wt(()=>T("g",null,[T("path",{d:"M504.352,459.061l-99.435-99.477c74.402-99.427,54.115-240.344-45.312-314.746S119.261-9.277,44.859,90.15   S-9.256,330.494,90.171,404.896c79.868,59.766,189.565,59.766,269.434,0l99.477,99.477c12.501,12.501,32.769,12.501,45.269,0   c12.501-12.501,12.501-32.769,0-45.269L504.352,459.061z M225.717,385.696c-88.366,0-160-71.634-160-160s71.634-160,160-160   s160,71.634,160,160C385.623,314.022,314.044,385.602,225.717,385.696z"})],-1)),FE=[ME],NE={class:"other_menu_item logo_raw"},UE={href:""},$E={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",version:"1.0",viewBox:"0 0 245 83",preserveAspectRatio:"xMidYMid meet","color-interpolation-filters":"sRGB",style:{margin:"auto"}},HE={xmlns:"http://www.w3.org/2000/svg","data-v-0dd9719b":"",fill:"#333",class:"icon-text-wrapper icon-svg-group iconsvg"},GE={class:"iconsvg-imagesvg",transform:"translate(0,0)"},KE=wt(()=>T("rect",{fill:"#333","fill-opacity":"0","stroke-width":"2",x:"0",y:"0",width:"60",height:"82.7848834802765",class:"image-rect"},null,-1)),zE={x:"0",y:"0",width:"60",height:"82.7848834802765",filtersec:"colorsb3131168052",class:"image-svg-svg primary",style:{overflow:"visible"}},qE=Vr('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -0.011011754162609577 72.48161315917969 100.0059585571289" data-v-9f633dc3><path d="M0 5l2.39 62.59a3.89 3.89 0 0 0 4.18 3.74l62.32-4.72a3.9 3.9 0 0 0 3.59-4L70.24 3.74A3.89 3.89 0 0 0 66.06 0L0 5" fill="#44e9be" opacity=".8" data-v-9f633dc3></path><path fill="#3bbbf0" opacity=".8" d="M0 5.01l2.54 66.62 59.52 5.43-2.54-66.62L0 5.01" data-v-9f633dc3></path><path fill="#1580fd" opacity=".8" d="M0 5.01l2.54 66.62 49.17 18.21-2.54-66.62L0 5.01" data-v-9f633dc3></path><path d="M0 5l2.5 65.65a2.27 2.27 0 0 0 .79 1.62l31.56 26.82a3.8 3.8 0 0 0 6.26-3L39 39.74A3.82 3.82 0 0 0 37.62 37L0 5" fill="#413ef2" data-v-9f633dc3></path></svg>',1),jE=[qE],VE=wt(()=>T("g",{transform:"translate(67,20.172441482543945)"},[T("g",{"data-gra":"path-name",class:"tp-name iconsvg-namesvg"},[T("g",{transform:"scale(1)"},[T("g",null,[T("path",{d:"M29.79-28.3L29.79-32.27 12.91-32.27 12.91-28.3 29.79-28.3ZM12.91-27L12.91-22.99 29.79-22.99 29.79-27 12.91-27ZM12.91-18.04L36.09-18.04Q36.27-21.29 40-21.29L40-21.29Q43.78-20.7 43.6-17.46L43.6-17.46Q43.42-16.74 42.39-16.74L42.39-16.74 12.91-16.74 12.91-12.96 35.73-12.96Q36.13-15.16 39.38-15.16L39.38-15.16Q42.57-13.95 42.16-11.74L42.16-11.74Q41.71-11.21 40.41-11.03L40.41-11.03Q40.09-4.77 39.38-1.67 38.66 1.44 37.17 2.56L37.17 2.56Q35.32 3.96 32.31 3.96L32.31 3.96Q32.31 1.8 31.68 1.03L31.68 1.03Q30.96 0.22 28.89-0.27L28.89-0.27Q28.53 0.04 27.54 0.36 26.55 0.67 25.65 0.67L25.65 0.67 24.97 0.67 24.97-0.72 8.46-0.72Q8.46 1.26 5.44 1.26L5.44 1.26Q2.43 0.72 2.43-1.26L2.43-1.26Q3.1-1.93 4.14-2.52L4.14-2.52 4.14-9 8.1-8.46 8.1-2.02 14.45-2.02 14.45-10.44 18.5-9.9 18.5-2.02 24.97-2.02 24.97-8.91 28.98-8.41 28.98-0.99Q31.59-0.72 32.85-0.72L32.85-0.72Q33.8-0.72 34.24-1.13L34.24-1.13Q35.55-2.25 36.09-11.65L36.09-11.65 12.91-11.65 12.91-11.21Q12.91-10.8 11.74-10.26L11.74-10.26Q10.57-9.76 9.31-9.76L9.31-9.76 8.64-9.76 8.64-33.57 17.14-33.57Q17.82-36.27 18.22-38.3L18.22-38.3 24.61-37.17Q24.34-36.09 22.9-36.09L22.9-36.09Q22.5-35.77 21.42-34.88L21.42-34.88Q20.38-34.02 19.84-33.57L19.84-33.57 29.34-33.57Q29.61-35.87 32.94-35.87L32.94-35.87Q36.23-34.74 35.95-32.45L35.95-32.45Q35.32-31.72 34.06-31.5L34.06-31.5 34.06-20.7Q34.02-20.43 32.76-19.93L32.76-19.93Q31.5-19.48 30.51-19.48L30.51-19.48 29.79-19.48 29.79-21.69 12.91-21.69 12.91-18.04ZM69.66-26.95L69.66-14.98 81.05-14.98 81.05-26.95 69.66-26.95ZM53.77-26.95L53.77-14.98 65.16-14.98 65.16-26.95 53.77-26.95ZM84.33-30.69L84.33-30.69Q87.7-29.56 87.44-27.13L87.44-27.13Q86.81-26.41 85.55-26.19L85.55-26.19 85.55-11.07Q85.5-10.8 84.15-10.35L84.15-10.35Q82.84-9.95 81.81-9.95L81.81-9.95 81.05-9.95 81.05-13.68 69.66-13.68 69.66 2.21Q69.66 2.61 68.44 3.19L68.44 3.19Q67.23 3.82 66.02 3.82L66.02 3.82 65.16 3.82 65.16-13.68 53.77-13.68 53.77-10.75Q53.77-10.39 52.52-9.86L52.52-9.86Q51.3-9.31 50.04-9.31L50.04-9.31 49.37-9.31 49.37-28.26 65.16-28.26 65.16-38.02 69.66-37.39 69.66-28.26 80.59-28.26Q80.87-30.69 84.33-30.69ZM102.96-3.82L102.96-0.04 121.81-0.04 121.81-3.82 102.96-3.82ZM121.81-5.13L121.81-8.73 102.96-8.73 102.96-5.13 121.81-5.13ZM98.78-9.99L121.36-9.99Q121.63-12.29 124.97-12.29L124.97-12.29Q128.25-11.21 127.98-8.91L127.98-8.91Q127.35-8.19 126.09-7.96L126.09-7.96 126.09 2.56Q126.05 2.79 124.78 3.19 123.53 3.6 122.53 3.6L122.53 3.6 121.81 3.6 121.81 1.26 102.96 1.26 102.96 2.48Q102.96 2.83 101.75 3.28L101.75 3.28Q100.58 3.78 99.36 3.78L99.36 3.78 98.78 3.78 98.78-9.99ZM114.16-27.81L114.16-24.12 121.72-24.12 121.72-27.81 114.16-27.81ZM121.72-32.71L114.16-32.71 114.16-29.07 121.72-29.07 121.72-32.71ZM122.4-21.11L122.4-21.11 121.72-21.11 121.72-22.81 114.16-22.81 114.16-19.35 123.66-19.35 125.95-22.14Q125.78-22.09 124.56-21.6 123.34-21.11 122.4-21.11ZM125.78-27.81L125.78-22.36Q128.56-20.2 130.19-18.77L130.19-18.77Q130.05-18.04 129.01-18.04L129.01-18.04 114.16-18.04 114.16-14.49 126.36-14.49Q126.54-17.37 129.91-17.37L129.91-17.37Q133.29-16.79 133.11-13.9L133.11-13.9Q132.93-13.18 131.89-13.18L131.89-13.18 92.2-13.18 91.8-14.49 109.98-14.49 109.98-18.04 95.72-18.04 95.36-19.35 109.98-19.35 109.98-22.81 97.2-22.81 96.8-24.12 109.98-24.12 109.98-27.81 92.03-27.81 91.62-29.07 109.98-29.07 109.98-32.71 97.47-32.71 97.06-34.02 109.98-34.02 109.98-37.98 114.16-37.44 114.16-34.02 121.28-34.02Q121.55-36.18 124.74-36.18L124.74-36.18Q127.84-35.1 127.57-32.94L127.57-32.94Q127.08-32.31 125.78-32.04L125.78-32.04 125.78-29.07 127.44-29.07Q127.48-31.9 130.5-31.9L130.5-31.9Q133.51-31.36 133.47-28.53L133.47-28.53Q133.29-27.81 132.3-27.81L132.3-27.81 125.78-27.81ZM162.31-38.07L162.31-38.07 162.72-38.34Q167.76-37.62 168.8-35.1L168.8-35.1Q169.43-33.48 168.21-32.4L168.21-32.4Q166.86-31.23 165.19-32.27L165.19-32.27Q165.01-32.35 164.88-32.49L164.88-32.49Q164.75-35.37 162.31-38.07ZM149.4-21.69L143.41-21.69 143.41-17.82 149.4-17.82 149.4-21.69ZM143.41-16.52L143.41-12.38 149.4-12.38 149.4-16.52 143.41-16.52ZM147.47-8.41L147.47-8.41 147.96-8.59Q153.45-6.43 154.71-3.01L154.71-3.01Q155.47-0.85 154.26 0.32L154.26 0.32Q153.09 1.48 151.51 0.32L151.51 0.32Q151.11-1.75 150.03-3.96L150.03-3.96Q143.69 0.63 141.53 2.07L141.53 2.07Q141.07 3.01 140.26 3.42L140.26 3.42 138.06-0.85Q139.05-1.44 139.32-1.8 139.59-2.16 139.59-2.88L139.59-2.88 139.59-22.9 149-22.9Q149.26-24.84 152.1-24.84L152.1-24.84Q154.94-23.85 154.66-21.91L154.66-21.91Q154.22-21.38 153.18-21.2L153.18-21.2 153.18-10.93Q153.13-10.66 152.01-10.21L152.01-10.21Q150.93-9.76 150.03-9.76L150.03-9.76 149.4-9.76 149.4-11.07 143.41-11.07 143.41-2.56Q144.36-2.92 146.47-3.69 148.59-4.46 149.63-4.86L149.63-4.86Q148.59-6.88 147.47-8.41ZM170.41-16.74L170.41-23.54 161.46-23.54 161.46-16.74 170.41-16.74ZM171.76-1.17L171.76-9.09 161.46-9.09 161.46-1.17 171.76-1.17ZM173.3-25.92L173.3-25.92 172.75-26.19Q172.98-27.77 173.2-30.29L173.2-30.29 158.94-30.29Q159.12-27.86 158.09-26.41L158.09-26.41 161.69-24.84 170.01-24.84Q170.28-26.82 173.25-26.82L173.25-26.82Q176.13-25.79 175.86-23.8L175.86-23.8Q175.32-23.18 174.24-22.99L174.24-22.99 174.24-14.58Q174.19-14.35 173.03-13.95L173.03-13.95Q171.9-13.59 171.05-13.59L171.05-13.59 170.41-13.59 170.41-15.43 161.46-15.43 161.46-10.39 171.31-10.39Q171.59-12.46 174.56-12.46L174.56-12.46Q177.53-11.43 177.25-9.36L177.25-9.36Q176.85-8.78 175.59-8.5L175.59-8.5 175.59 1.93Q175.55 2.21 174.42 2.61 173.3 3.01 172.39 3.01L172.39 3.01 171.76 3.01 171.76 0.14 161.46 0.14 161.46 2.34Q161.46 2.7 160.43 3.19 159.39 3.69 158.22 3.69L158.22 3.69 157.59 3.69 157.59-25.96Q156.78-25.38 155.75-25.52L155.75-25.52Q154.71-25.7 154.4-26.64L154.4-26.64Q153.81-28.35 155.75-29.47L155.75-29.47Q156.47-30.06 156.96-31.27L156.96-31.27Q157.5-32.53 157.32-33.66L157.32-33.66 158.04-33.66Q158.49-32.45 158.67-31.59L158.67-31.59 172.8-31.59Q173.12-33.88 176.31-33.88L176.31-33.88Q179.32-32.31 179.01-30.02L179.01-30.02Q178.65-29.61 177.34-29.52L177.34-29.52Q175.23-27.4 173.3-25.92ZM139.59-24.57L139.59-24.57Q138.38-23.31 136.71-21.96L136.71-21.96 136.22-22.36Q138.38-25.38 140.22-30.06L140.22-30.06Q142.11-34.74 142.88-38.48L142.88-38.48 149.31-37.08Q149.09-36.27 147.56-36.09L147.56-36.09Q153.81-33.98 154.8-30.82L154.8-30.82Q155.38-29.11 154.13-28.13L154.13-28.13Q152.91-27.18 151.6-28.21L151.6-28.21Q150.44-32.04 147.24-35.37L147.24-35.37Q145.53-31.59 142.34-27.63L142.34-27.63 146.75-27.63Q146.79-30.15 149.58-30.15L149.58-30.15Q152.37-29.56 152.32-27.04L152.32-27.04Q152.19-26.32 151.2-26.32L151.2-26.32 142.11-26.32 141.88-27.09Q140.99-25.88 139.59-24.57Z",transform:"translate(-2.430000066757202, 38.47999954223633)"})])])])],-1)),WE={class:"other_menu_item logo_raw"},YE={href:"/anime/calendar"},QE={version:"1.0",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 200 60","xmlns:xlink":"http://www.w3.org/1999/xlink",preserveAspectRatio:"xMidYMid meet","color-interpolation-filters":"sRGB",fill:"#333",class:"icon-text-wrapper icon-svg-group iconsvg"},XE={class:"iconsvg-imagesvg",transform:"translate(0,0)"},ZE=wt(()=>T("rect",{fill:"#333","fill-opacity":"0","stroke-width":"2",x:"0",y:"0",width:"60",height:"59.99940000599994",class:"image-rect"},null,-1)),JE={x:"0",y:"0",width:"60",height:"59.99940000599994",filtersec:"colorsb942110291",class:"image-svg-svg primary",style:{overflow:"visible"},xmlns:"http://www.w3.org/2000/svg"},e2=wt(()=>T("svg",{xmlns:"http://www.w3.org/2000/svg",xlink:"http://www.w3.org/1999/xlink",viewBox:"-0.0005651116371154785 0 92.24056243896484 92.2393798828125"},[T("defs",null,[T("linearGradient",{id:"ac032779a-c0c1-42ff-9900-4b286f8482df",x1:"-1.91",y1:"52.17",x2:"56.6",y2:"-6.35",gradientUnits:"userSpaceOnUse"},[T("stop",{offset:"0","stop-color":"#e37315"}),T("stop",{offset:"1","stop-color":"#ff0"})]),T("linearGradient",{id:"d818fa1a7-94cc-477d-84d5-f35844fa42ed",x1:"8.59",y1:"38.17",x2:"52.62",y2:"-5.86",href:"#ac032779a-c0c1-42ff-9900-4b286f8482df"}),T("linearGradient",{id:"bad5572ee-3e1f-427d-bf0e-465d26fcb0an",x1:"40.07",y1:"94.15",x2:"98.58",y2:"35.63",gradientUnits:"userSpaceOnUse"},[T("stop",{offset:"0","stop-color":"#039"}),T("stop",{offset:"1","stop-color":"#65e0ff"})]),T("linearGradient",{id:"eec189f9f-5b4a-4a63-aaad-ee3f4750ddl3",x1:"54.07",y1:"83.65",x2:"98.1",y2:"39.62",href:"#bad5572ee-3e1f-427d-bf0e-465d26fcb0an"}),T("linearGradient",{id:"ccc2c952f-50be-4b41-98b6-e9e5f69976g0",x1:"13.57",y1:"78.67",x2:"78.94",y2:"13.3",gradientUnits:"userSpaceOnUse"},[T("stop",{offset:"0","stop-color":"#016737"}),T("stop",{offset:"1","stop-color":"#9f0"})]),T("linearGradient",{id:"fe808c7b1-fc9e-40dd-9af7-b64378811e2o",x1:"20.84",y1:"85.95",x2:"86.21",y2:"20.58",href:"#ccc2c952f-50be-4b41-98b6-e9e5f69976g0"})]),T("g",{"fill-rule":"evenodd"},[T("path",{d:"M50.91 0L21.1 29.81a4.31 4.31 0 0 1-7-2.92c-.55-5.59 4.51-14.48 8.38-18.35A28.72 28.72 0 0 1 37.12.67 46.25 46.25 0 0 0 .35 40.51c-.87 7.37-.9 19.37 9.49 19.37a9.41 9.41 0 0 0 6.7-2.78L68.3 5.35A46.17 46.17 0 0 0 50.91 0",fill:"url(#ac032779a-c0c1-42ff-9900-4b286f8482df)"}),T("path",{d:"M50.91 0L21.1 29.81a4.31 4.31 0 0 1-7-2.92c-.51-5.23 3.9-13.35 7.63-17.54-5.48 5.09-9.79 10.93-11.4 16.94-5 18.81 5.77 20.1 19.29 6.58L60.49 2a46.52 46.52 0 0 0-9.58-2",fill:"url(#d818fa1a7-94cc-477d-84d5-f35844fa42ed)"}),T("path",{d:"M92.24 41.33L62.43 71.14a4.31 4.31 0 0 0 2.92 7c5.59.55 14.48-4.52 18.34-8.38a28.74 28.74 0 0 0 7.88-14.63 46.25 46.25 0 0 1-39.85 36.76c-7.37.87-19.36.89-19.36-9.49a9.49 9.49 0 0 1 2.77-6.71l51.76-51.75a46.17 46.17 0 0 1 5.35 17.39",fill:"url(#bad5572ee-3e1f-427d-bf0e-465d26fcb0an)"}),T("path",{d:"M92.24 41.33L62.43 71.14a4.31 4.31 0 0 0 2.92 7c5.23.51 13.34-3.89 17.53-7.62C77.8 76 72 80.3 66 81.91c-18.81 5-20.1-5.78-6.58-19.3l30.81-30.86a46.54 46.54 0 0 1 2 9.58",fill:"url(#eec189f9f-5b4a-4a63-aaad-ee3f4750ddl3)"}),T("path",{d:"M84.13 19.48L30.85 72.76c-4.86 4.86-3.81 14.57.68 17a45.49 45.49 0 0 1-11.78-6A46.52 46.52 0 0 1 8.38 72.49 45.83 45.83 0 0 1 2.43 60.7c2.47 4.49 12.15 5.54 17 .71l53.33-53.3a46.32 46.32 0 0 1 6.18 5.19 47.88 47.88 0 0 1 5.19 6.18",fill:"url(#ccc2c952f-50be-4b41-98b6-e9e5f69976g0)"}),T("path",{d:"M84.13 19.48L30.85 72.76c-4.86 4.86-3.81 14.57.68 17a45.49 45.49 0 0 1-11.78-6 46.32 46.32 0 0 1-6.18-5.19L78.94 13.3a47.09 47.09 0 0 1 5.19 6.18",fill:"url(#fe808c7b1-fc9e-40dd-9af7-b64378811e2o)"})])],-1)),t2=[e2],n2=wt(()=>T("g",{transform:"translate(67,11.079700469970703)"},[T("g",{"data-gra":"path-name",class:"tp-name iconsvg-namesvg"},[T("g",{transform:"scale(1)"},[T("g",null,[T("path",{d:"M9.81 0.04L3.19 0.04 3.15 0 3.15 0 13.28-31.45 13.32-31.5 19.93-31.5 19.93-31.45 30.06 0 30.06 0 30.06 0.04 23.45 0.04 23.4 0 22-4.27 11.21-4.27 9.81 0 9.81 0.04ZM13.23-10.62L19.98-10.62 16.61-21.11 13.23-10.62ZM95.4-31.5L102.78-31.5Q102.82-31.5 102.82-31.45L102.82-31.45 102.82 0Q102.82 0.04 102.78 0.04L102.78 0.04 96.48 0.04Q96.44 0.04 96.44 0L96.44 0 96.44-21.2 86.22-4.63Q86.17-4.59 86.17-4.63L86.17-4.63 75.91-21.2 75.91 0Q75.91 0.04 75.87 0.04L75.87 0.04 69.57 0.04Q69.57 0.04 69.57 0L69.57 0 69.57-31.45 63.31-31.45 63.31 0Q63.31 0.04 63.31 0.04L63.31 0.04 55.89 0.04 55.89 0 42.75-21.2 42.75 0Q42.75 0.04 42.7 0.04L42.7 0.04 36.45 0.04Q36.4 0.04 36.4 0L36.4 0 36.4-31.45Q36.4-31.5 36.45-31.5L36.45-31.5 43.83-31.5 43.87-31.5 56.97-10.3 56.97-31.45Q56.97-31.5 57.01-31.5L57.01-31.5 63.27-31.5 63.27-37.75Q63.27-37.8 63.31-37.8L63.31-37.8 69.57-37.8Q69.61-37.8 69.61-37.75L69.61-37.75 69.61-31.5 76.99-31.5 76.99-31.5 86.17-16.65 95.35-31.5 95.4-31.5ZM136.03 0.04L109.17 0.04Q109.13 0.04 109.13 0L109.13 0 109.13-31.45Q109.13-31.5 109.17-31.5L109.17-31.5 136.03-31.5Q136.03-31.5 136.03-31.45L136.03-31.45 136.03-25.15Q136.03-25.15 136.03-25.15L136.03-25.15 115.47-25.15 115.47-18.9 129.73-18.9Q129.78-18.9 129.78-18.9L129.78-18.9 129.78-12.6Q129.78-12.55 129.73-12.55L129.73-12.55 115.47-12.55 115.47-6.34 136.03-6.34Q136.03-6.34 136.03-6.3L136.03-6.3 136.03 0Q136.03 0.04 136.03 0.04L136.03 0.04Z",transform:"translate(-3.1500000953674316, 37.79999923706055)"})])])])],-1)),r2=Vr('<li class="other_menu_item" data-v-9f633dc3><a href="" data-v-9f633dc3> 放送时间 </a></li><li class="other_menu_item" data-v-9f633dc3><a href="/anime/history" data-v-9f633dc3> 历史记录 </a></li><li class="other_menu_item" data-v-9f633dc3><a href="" data-v-9f633dc3> 我的账户 </a></li>',3),i2=Gt({__name:"InfoHead",setup(n){const e=Zi(),t=So(),r=To(),i=Tt(""),s=Tt([]);function o(){i.value==""?alert("请输入搜索内容"):Xn.push("/anime/search?animeName="+i.value)}function a(){"animeName"in e.query?i.value=e.query.animeName:i.value=""}function l(m){console.log("search_anime: ",m),m!=null&&m!=null&&m!=""&&(i.value=m,Xn.push("/anime/search?animeName="+i.value))}function c(){i.value=""}on(()=>e.query,()=>{a()}),Xi(()=>{a()});const d=Tt(!1);function u(m=void 0){m==null?d.value=!d.value:d.value=m}const h=rt(()=>d.value?["M5 19, L19 5","M5 5, L19 19"]:["M2 9, L22 9","M2 15, L22 15"]);let y;return on(()=>i.value,async()=>{if(i.value==""||i.value==null||i.value==null){clearTimeout(y);return}y!=null&&clearTimeout(y),y=setTimeout(async()=>{s.value=[];const m=await r.pre_obtain_commend_keys(i.value);for(let A=m.length-1;A>=0;A-=1)s.value.push(m[A])},500)}),(m,A)=>(oe(),le("div",_x,[T("div",wx,[T("div",Sx,[T("div",Tx,[T("a",Cx,[(oe(),le("svg",Lx,[T("g",kx,[T("g",Rx,[T("g",null,[Ix,(oe(),le("svg",Dx,Px))])]),Ox])]))]),T("a",Mx,[(oe(),le("svg",Fx,[T("g",Nx,[T("g",Ux,[T("g",null,[$x,(oe(),le("svg",Hx,Kx))])]),zx])]))])])]),T("div",qx,[T("div",jx,[T("form",Vx,[T("div",Wx,[Yx,T("div",Qx,[T("span",{class:"history_btn",onClick:A[0]||(A[0]=b=>Bt(t).clear_search_list())}," 清空 ")]),T("div",Xx,[(oe(!0),le(Ke,null,st(Bt(t).show_last_search_hist,(b,S)=>(oe(),le("div",{class:"history_item",key:S,onClick:C=>l(b)},ke(b),9,Zx))),128))])]),T("div",Jx,[eE,T("div",tE,[(oe(!0),le(Ke,null,st(s.value,(b,S)=>(oe(),le("div",{class:"search_item",key:S,onClick:C=>l(b)},ke(b),9,nE))),128))])]),T("div",rE,[T("div",iE,[Hc(T("input",{type:"text",placeholder:"请输入搜索内容","onUpdate:modelValue":A[1]||(A[1]=b=>i.value=b),name:"animeName"},null,512),[[ld,i.value]])]),T("div",{class:"search_btn"},[T("div",{class:"img_box clear_btn",onClick:c},oE)]),T("div",aE,[T("div",{class:"img_box start_search_btn",onClick:o},[(oe(),le("svg",lE,dE))])])])])])]),uE]),T("div",hE,[T("div",fE,[pE,T("div",mE,[T("span",{class:"history_btn",onClick:A[2]||(A[2]=b=>Bt(t).clear_search_list())}," 清空 ")]),T("div",gE,[(oe(!0),le(Ke,null,st(Bt(t).show_last_search_hist,(b,S)=>(oe(),le("div",{class:"history_item",key:S,onClick:C=>l(b)},ke(b),9,yE))),128))])]),T("div",AE,[vE,T("div",bE,[(oe(!0),le(Ke,null,st(s.value,(b,S)=>(oe(),le("div",{class:"search_item",key:S,onClick:C=>l(b)},ke(b),9,xE))),128))])]),T("div",EE,[T("div",_E,[T("div",{class:"search_bar_btn",onClick:A[3]||(A[3]=b=>u(void 0))},[(oe(),le("svg",wE,[T("path",{d:h.value[0],"stroke-width":"2",stroke:"#515757","stroke-linecap":"round"},null,8,SE),T("path",{d:h.value[1],"stroke-width":"2",stroke:"#515757","stroke-linecap":"round"},null,8,TE)]))])])]),T("div",CE,[T("div",LE,[T("form",kE,[T("div",RE,[T("div",IE,[Hc(T("input",{type:"text",placeholder:"请输入搜索内容","onUpdate:modelValue":A[4]||(A[4]=b=>i.value=b)},null,512),[[ld,i.value]])]),T("div",{class:"search_btn1"},[T("div",{class:"img_box clear_btn",onClick:c},BE)])]),T("div",PE,[T("div",{class:"img_box start_search_btn",onClick:o},[(oe(),le("svg",OE,FE))])])])])]),T("div",{class:Mt(["other_sum_menu",{need_show:d.value}])},[T("ul",null,[T("li",NE,[T("a",UE,[(oe(),le("svg",$E,[T("g",HE,[T("g",GE,[T("g",null,[KE,(oe(),le("svg",zE,jE))])]),VE])]))])]),T("li",WE,[T("a",YE,[(oe(),le("svg",QE,[T("g",XE,[T("g",null,[ZE,(oe(),le("svg",JE,t2))])]),n2]))])]),r2])],2)])]))}});const Co=Ft(i2,[["__scopeId","data-v-9f633dc3"]]);const Lf=n=>(Yi("data-v-aa7c250f"),n=n(),Qi(),n),s2={class:"search_res_show"},o2={class:"search_res_list"},a2={class:"search_item_box"},l2={class:"img_box"},c2=["src"],d2={class:"detail_box"},u2=["href"],h2={class:"search_item_volumn"},f2={class:"search_item_type"},p2={class:"search_item_desc"},m2={class:"page_router_box"},g2={class:"page_sel_btn_box"},y2=Lf(()=>T("svg",{version:"1.0",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},[T("path",{d:"M5 0, L5 20",fill:"transparent",stroke:"red","stroke-width":"1.5"}),T("path",{d:"M15 0, L5 10, L15 20",fill:"transparent",stroke:"red","stroke-width":"1.5"})],-1)),A2=[y2],v2=["title","onClick"],b2=Lf(()=>T("svg",{version:"1.0",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},[T("path",{d:"M15 0, L15 20",fill:"transparent",stroke:"red","stroke-width":"1.5"}),T("path",{d:"M5 0, L15 10, L5 20",fill:"transparent",stroke:"red","stroke-width":"1.5"})],-1)),x2=[b2],E2=Gt({__name:"SearchBoard",setup(n){const e=Zi(),t=To(),r=rt(()=>"page"in e.query?Number(e.query.page):1),i=rt(()=>{const a=[];for(let l=0;l<t.animes_search_res.length;l++){const c=t.animes_search_res[l][0],d={name:c.srcs.vod_name,img:c.srcs.vod_pic,vod_time:c.srcs.vod_pubdate,vod_remarks:c.srcs.vod_remarks,vod_blurb:c.srcs.vod_blurb,vod_class:c.srcs.vod_class};d.vod_time==""&&(d.vod_time=c.srcs.vod_year),a.push(d)}return a}),s=rt(()=>{let a=1,l=!0,c=!0;"page"in e.query&&(a=Number(e.query.page)),a==1&&(l=!1),a==t.search_res_page_num&&(c=!1),t.search_res_page_num==0&&(l=!1,c=!1);const d=[];if(t.search_res_page_num<=5)for(let u=1;u<=t.search_res_page_num;u++)d.push(u);else if(a<=3)for(let u=1;u<=5;u++)d.push(u);else if(a+2>t.search_res_page_num)for(let u=t.search_res_page_num-4;u<=t.search_res_page_num;u++)d.push(u);else for(let u=a-2;u<=a+2;u++)d.push(u);return{first_page:l,last_page:c,pages2show:d}});function o(a){if(a>=1&&a<=t.search_res_page_num){let l="";"animeName"in e.query&&(l=e.query.animeName),Xn.push("/anime/search?animeName="+l+"&page="+a)}}return(a,l)=>(oe(),le("div",s2,[T("div",o2,[T("div",a2,[(oe(!0),le(Ke,null,st(i.value,(c,d)=>(oe(),le("div",{class:"search_item",key:d},[T("div",l2,[T("img",{src:c.img,alt:"",srcset:""},null,8,c2)]),T("div",d2,[T("a",{href:"/anime/play?animeName="+c.name,class:"search_item_title"},ke(c.name),9,u2),T("div",h2,ke(c.vod_time)+" | "+ke(c.vod_remarks),1),T("div",f2,ke(c.vod_class),1),T("div",p2,ke(c.vod_blurb),1)])]))),128))]),T("div",m2,[T("div",g2,[s.value.first_page?(oe(),le("button",{key:0,class:"page_sel_btn",title:"First Page",onClick:l[0]||(l[0]=c=>o(1))},A2)):Or("",!0),(oe(!0),le(Ke,null,st(s.value.pages2show,(c,d)=>(oe(),le("button",{class:Mt(["page_sel_btn",{now_page:c==r.value}]),key:d,title:"Page "+c,onClick:u=>o(c)},ke(c),11,v2))),128)),s.value.last_page?(oe(),le("button",{key:1,class:"page_sel_btn",title:"Last page",onClick:l[1]||(l[1]=c=>o(Bt(t).search_res_page_num))},x2)):Or("",!0)])])])]))}});const _2=Ft(E2,[["__scopeId","data-v-aa7c250f"]]),w2={class:"page_content"},S2={class:"head_box"},T2={class:"search_content_place"},C2=Gt({__name:"AnimeSearch",setup(n){const e=Zi(),t=To(),r=So();function i(){const s=e.query;if("animeName"in s){const o=s.animeName;if(o=="")return;let a=1;"page"in s?a=Number(s.page):r.search_anime(o),t.search_animes(o,a)}}return on(()=>e.query,()=>{i()},{deep:!0}),Xi(()=>{i()}),(s,o)=>(oe(),le("div",w2,[T("div",S2,[qe(Co)]),T("div",T2,[qe(_2)])]))}});var L2=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function k2(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var kf={exports:{}};(function(n,e){(function(t,r){n.exports=r()})(self,()=>(()=>{var t={916:(o,a,l)=>{var c=l(471);o.exports=function(d){var u,h="",y=(d=d||{}).video,m=d.options,A=c.$escape,b=d.tran,S=d.icons,C=d.index,R=c.$each;return d.$value,d.$index,h+=`<div class="dplayer-mask"></div>
<div class="dplayer-video-wrap">
    `,u=l(568)(y),h+=u,h+=`
    `,m.logo&&(h+=`
    <div class="dplayer-logo">
        <img src="`,h+=A(m.logo),h+=`">
    </div>
    `),h+=`
    <div class="dplayer-danmaku"`,m.danmaku&&m.danmaku.bottom&&(h+=' style="margin-bottom:',h+=A(m.danmaku.bottom),h+='"'),h+=`>
        <div class="dplayer-danmaku-item dplayer-danmaku-item--demo"></div>
    </div>
    <div class="dplayer-subtitle"></div>
    <div class="dplayer-bezel">
        <span class="dplayer-bezel-icon"></span>
        `,m.danmaku&&(h+=`
        <span class="dplayer-danloading">`,h+=A(b("danmaku-loading")),h+=`</span>
        `),h+=`
        <span class="diplayer-loading-icon">`,h+=S.loading,h+=`</span>
    </div>
</div>
<div class="dplayer-controller-mask"></div>
<div class="dplayer-controller">
    <div class="dplayer-icons dplayer-comment-box">
        <button class="dplayer-icon dplayer-comment-setting-icon" data-balloon="`,h+=A(b("setting")),h+=`" data-balloon-pos="up">
            <span class="dplayer-icon-content">`,h+=S.pallette,h+=`</span>
        </button>
        <div class="dplayer-comment-setting-box">
            <div class="dplayer-comment-setting-color">
                <div class="dplayer-comment-setting-title">`,h+=A(b("set-danmaku-color")),h+=`</div>
                <label>
                    <input type="radio" name="dplayer-danmaku-color-`,h+=A(C),h+=`" value="#fff" checked>
                    <span style="background: #fff;"></span>
                </label>
                <label>
                    <input type="radio" name="dplayer-danmaku-color-`,h+=A(C),h+=`" value="#e54256">
                    <span style="background: #e54256"></span>
                </label>
                <label>
                    <input type="radio" name="dplayer-danmaku-color-`,h+=A(C),h+=`" value="#ffe133">
                    <span style="background: #ffe133"></span>
                </label>
                <label>
                    <input type="radio" name="dplayer-danmaku-color-`,h+=A(C),h+=`" value="#64DD17">
                    <span style="background: #64DD17"></span>
                </label>
                <label>
                    <input type="radio" name="dplayer-danmaku-color-`,h+=A(C),h+=`" value="#39ccff">
                    <span style="background: #39ccff"></span>
                </label>
                <label>
                    <input type="radio" name="dplayer-danmaku-color-`,h+=A(C),h+=`" value="#D500F9">
                    <span style="background: #D500F9"></span>
                </label>
            </div>
            <div class="dplayer-comment-setting-type">
                <div class="dplayer-comment-setting-title">`,h+=A(b("set-danmaku-type")),h+=`</div>
                <label>
                    <input type="radio" name="dplayer-danmaku-type-`,h+=A(C),h+=`" value="1">
                    <span>`,h+=A(b("top")),h+=`</span>
                </label>
                <label>
                    <input type="radio" name="dplayer-danmaku-type-`,h+=A(C),h+=`" value="0" checked>
                    <span>`,h+=A(b("rolling")),h+=`</span>
                </label>
                <label>
                    <input type="radio" name="dplayer-danmaku-type-`,h+=A(C),h+=`" value="2">
                    <span>`,h+=A(b("bottom")),h+=`</span>
                </label>
            </div>
        </div>
        <input class="dplayer-comment-input" type="text" placeholder="`,h+=A(b("input-danmaku-enter")),h+=`" maxlength="30">
        <button class="dplayer-icon dplayer-send-icon" data-balloon="`,h+=A(b("send")),h+=`" data-balloon-pos="up">
            <span class="dplayer-icon-content">`,h+=S.send,h+=`</span>
        </button>
    </div>
    <div class="dplayer-icons dplayer-icons-left">
        <button class="dplayer-icon dplayer-play-icon">
            <span class="dplayer-icon-content">`,h+=S.play,h+=`</span>
        </button>
        <div class="dplayer-volume">
            <button class="dplayer-icon dplayer-volume-icon">
                <span class="dplayer-icon-content">`,h+=S.volumeDown,h+=`</span>
            </button>
            <div class="dplayer-volume-bar-wrap" data-balloon-pos="up">
                <div class="dplayer-volume-bar">
                    <div class="dplayer-volume-bar-inner" style="background: `,h+=A(m.theme),h+=`;">
                        <span class="dplayer-thumb" style="background: `,h+=A(m.theme),h+=`"></span>
                    </div>
                </div>
            </div>
        </div>
        <span class="dplayer-time">
            <span class="dplayer-ptime">0:00</span> /
            <span class="dplayer-dtime">0:00</span>
        </span>
        `,m.live&&(h+=`
        <span class="dplayer-live-badge"><span class="dplayer-live-dot" style="background: `,h+=A(m.theme),h+=';"></span>',h+=A(b("live")),h+=`</span>
        `),h+=`
    </div>
    <div class="dplayer-icons dplayer-icons-right">
        `,m.video.quality&&(h+=`
        <div class="dplayer-quality">
            <button class="dplayer-icon dplayer-quality-icon">`,h+=A(m.video.quality[m.video.defaultQuality].name),h+=`</button>
            <div class="dplayer-quality-mask">
                <div class="dplayer-quality-list">
                `,R(m.video.quality,function(D,B){h+=`
                    <div class="dplayer-quality-item" data-index="`,h+=A(B),h+='">',h+=A(D.name),h+=`</div>
                `}),h+=`
                </div>
            </div>
        </div>
        `),h+=`
        `,m.screenshot&&(h+=`
        <div class="dplayer-icon dplayer-camera-icon" data-balloon="`,h+=A(b("screenshot")),h+=`" data-balloon-pos="up">
            <span class="dplayer-icon-content">`,h+=S.camera,h+=`</span>
        </div>
        `),h+=`
        `,m.airplay&&(h+=`
        <div class="dplayer-icon dplayer-airplay-icon" data-balloon="`,h+=A(b("airplay")),h+=`" data-balloon-pos="up">
            <span class="dplayer-icon-content">`,h+=S.airplay,h+=`</span>
        </div>
        `),h+=`
        `,m.chromecast&&(h+=`
        <div class="dplayer-icon dplayer-chromecast-icon" data-balloon="`,h+=A(b("chromecast")),h+=`" data-balloon-pos="up">
            <span class="dplayer-icon-content">`,h+=S.chromecast,h+=`</span>
        </div>
        `),h+=`
        <div class="dplayer-comment">
            <button class="dplayer-icon dplayer-comment-icon" data-balloon="`,h+=A(b("send-danmaku")),h+=`" data-balloon-pos="up">
                <span class="dplayer-icon-content">`,h+=S.comment,h+=`</span>
            </button>
        </div>
        `,m.subtitle&&(h+=`
        `,typeof m.subtitle.url=="string"?(h+=`
        <div class="dplayer-subtitle-btn">
            <button class="dplayer-icon dplayer-subtitle-icon" data-balloon="`,h+=A(b("hide-subs")),h+=`" data-balloon-pos="up">
                <span class="dplayer-icon-content">`,h+=S.subtitle,h+=`</span>
            </button>
        </div>
        `):(h+=`
        <div class="dplayer-subtitles">
            <button class="dplayer-icon dplayer-subtitles-icon" data-balloon="`,h+=A(b("subtitle")),h+=`" data-balloon-pos="up">
                <span class="dplayer-icon-content">`,h+=S.subtitle,h+=`</span>
            </button>
            <div class="dplayer-subtitles-box">
                <div class="dplayer-subtitles-panel">
                    `,R(m.subtitle.url,function(D,B){h+=`
                        <div class="dplayer-subtitles-item" data-subtitle="`,h+=A(D.url),h+=`">
                            <!-- if lang, show tran(lang). if lang and name, show name + (tran(lang)). if name, show name. off option use lang for translation. -->
                            <span class="dplayer-label">`,h+=A(D.lang?D.name?D.name+" ("+b(D.lang)+")":b(D.lang):D.name),h+=`</span>
                        </div>
                    `}),h+=`
                </div>
            </div>
        </div>
        `),h+=`
        `),h+=`
        <div class="dplayer-setting">
            <button class="dplayer-icon dplayer-setting-icon" data-balloon="`,h+=A(b("setting")),h+=`" data-balloon-pos="up">
                <span class="dplayer-icon-content">`,h+=S.setting,h+=`</span>
            </button>
            <div class="dplayer-setting-box">
                <div class="dplayer-setting-origin-panel">
                    <div class="dplayer-setting-item dplayer-setting-speed">
                        <span class="dplayer-label">`,h+=A(b("speed")),h+=`</span>
                        <div class="dplayer-toggle">`,h+=S.right,h+=`</div>
                    </div>
                    <div class="dplayer-setting-item dplayer-setting-loop">
                        <span class="dplayer-label">`,h+=A(b("loop")),h+=`</span>
                        <div class="dplayer-toggle">
                            <input class="dplayer-toggle-setting-input" type="checkbox" name="dplayer-toggle">
                            <label for="dplayer-toggle"></label>
                        </div>
                    </div>
                    <div class="dplayer-setting-item dplayer-setting-showdan">
                        <span class="dplayer-label">`,h+=A(b("show-danmaku")),h+=`</span>
                        <div class="dplayer-toggle">
                            <input class="dplayer-showdan-setting-input" type="checkbox" name="dplayer-toggle-dan">
                            <label for="dplayer-toggle-dan"></label>
                        </div>
                    </div>
                    <div class="dplayer-setting-item dplayer-setting-danunlimit">
                        <span class="dplayer-label">`,h+=A(b("unlimited-danmaku")),h+=`</span>
                        <div class="dplayer-toggle">
                            <input class="dplayer-danunlimit-setting-input" type="checkbox" name="dplayer-toggle-danunlimit">
                            <label for="dplayer-toggle-danunlimit"></label>
                        </div>
                    </div>
                    <div class="dplayer-setting-item dplayer-setting-danmaku">
                        <span class="dplayer-label">`,h+=A(b("opacity-danmaku")),h+=`</span>
                        <div class="dplayer-danmaku-bar-wrap">
                            <div class="dplayer-danmaku-bar">
                                <div class="dplayer-danmaku-bar-inner">
                                    <span class="dplayer-thumb"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="dplayer-setting-speed-panel">
                    `,R(m.playbackSpeed,function(D,B){h+=`
                        <div class="dplayer-setting-speed-item" data-speed="`,h+=A(D),h+=`">
                            <span class="dplayer-label">`,h+=A(D===1?b("normal"):D),h+=`</span>
                        </div>
                    `}),h+=`
                </div>
            </div>
        </div>
        <div class="dplayer-full">
            <button class="dplayer-icon dplayer-full-in-icon" data-balloon="`,h+=A(b("web-fullscreen")),h+=`" data-balloon-pos="up">
                <span class="dplayer-icon-content">`,h+=S.fullWeb,h+=`</span>
            </button>
            <button class="dplayer-icon dplayer-full-icon" data-balloon="`,h+=A(b("fullscreen")),h+=`" data-balloon-pos="up">
                <span class="dplayer-icon-content">`,h+=S.full,h+=`</span>
            </button>
        </div>
    </div>
    <div class="dplayer-bar-wrap">
        <div class="dplayer-bar-time hidden">00:00</div>
        <div class="dplayer-bar-preview"></div>
        <div class="dplayer-bar">
            <div class="dplayer-loaded" style="width: 0;"></div>
            <div class="dplayer-played" style="width: 0; background: `,h+=A(m.theme),h+=`">
                <span class="dplayer-thumb" style="background: `,h+=A(m.theme),h+=`"></span>
            </div>
        </div>
    </div>
</div>
<div class="dplayer-info-panel dplayer-info-panel-hide">
    <div class="dplayer-info-panel-close">[x]</div>
    <div class="dplayer-info-panel-item dplayer-info-panel-item-version">
        <span class="dplayer-info-panel-item-title">Player version</span>
        <span class="dplayer-info-panel-item-data"></span>
    </div>
    <div class="dplayer-info-panel-item dplayer-info-panel-item-fps">
        <span class="dplayer-info-panel-item-title">Player FPS</span>
        <span class="dplayer-info-panel-item-data"></span>
    </div>
    <div class="dplayer-info-panel-item dplayer-info-panel-item-type">
        <span class="dplayer-info-panel-item-title">Video type</span>
        <span class="dplayer-info-panel-item-data"></span>
    </div>
    <div class="dplayer-info-panel-item dplayer-info-panel-item-url">
        <span class="dplayer-info-panel-item-title">Video url</span>
        <span class="dplayer-info-panel-item-data"></span>
    </div>
    <div class="dplayer-info-panel-item dplayer-info-panel-item-resolution">
        <span class="dplayer-info-panel-item-title">Video resolution</span>
        <span class="dplayer-info-panel-item-data"></span>
    </div>
    <div class="dplayer-info-panel-item dplayer-info-panel-item-duration">
        <span class="dplayer-info-panel-item-title">Video duration</span>
        <span class="dplayer-info-panel-item-data"></span>
    </div>
    `,m.danmaku&&(h+=`
    <div class="dplayer-info-panel-item dplayer-info-panel-item-danmaku-id">
        <span class="dplayer-info-panel-item-title">Danmaku id</span>
        <span class="dplayer-info-panel-item-data"></span>
    </div>
    <div class="dplayer-info-panel-item dplayer-info-panel-item-danmaku-api">
        <span class="dplayer-info-panel-item-title">Danmaku api</span>
        <span class="dplayer-info-panel-item-data"></span>
    </div>
    <div class="dplayer-info-panel-item dplayer-info-panel-item-danmaku-amount">
        <span class="dplayer-info-panel-item-title">Danmaku amount</span>
        <span class="dplayer-info-panel-item-data"></span>
    </div>
    `),h+=`
</div>
<div class="dplayer-menu">
    `,R(m.contextmenu,function(D,B){h+=`
        <div class="dplayer-menu-item">
            <a`,D.link&&(h+=' target="_blank"'),h+=' href="',h+=A(D.link||"javascript:void(0);"),h+='">',D.key&&(h+=" ",h+=A(b(D.key))),D.text&&(h+=" ",h+=A(D.text)),h+=`</a>
        </div>
    `}),h+=`
</div>
<div class="dplayer-notice-list"></div>
<button class="dplayer-mobile-play">
    `,h+=S.play,h+=`
</button>`}},568:(o,a,l)=>{var c=l(471);o.exports=function(d){var u="",h=(d=d||{}).enableSubtitle,y=d.subtitle,m=d.current,A=d.airplay,b=d.pic,S=c.$escape,C=d.screenshot,R=d.preload,D=d.url;return h=y&&y.type==="webvtt",u+=`
<video
    class="dplayer-video `,m&&(u+="dplayer-video-current"),u+=`"
    webkit-playsinline
    `,A&&(u+=' x-webkit-airplay="allow" '),u+=`
    playsinline
    `,b&&(u+='poster="',u+=S(b),u+='"'),u+=`
    `,(C||h)&&(u+='crossorigin="anonymous"'),u+=`
    `,R&&(u+='preload="',u+=S(R),u+='"'),u+=`
    `,A?u+=`
    nosrc
    `:D&&(u+=`
    src="`,u+=S(D),u+=`"
    `),u+=`
    >
    `,A&&(u+=`
    <source src="`,u+=S(D),u+=`">
    `),u+=`
    `,h&&(u+=`
    <track class="dplayer-subtrack" kind="metadata" default src="`,u+=S(typeof y.url=="string"?y.url:y.url[y.index].url),u+=`"></track>
    `),u+`
</video>`}},49:(o,a,l)=>{l.d(a,{Z:()=>y});var c=l(415),d=l.n(c),u=l(352),h=l.n(u)()(d());h.push([o.id,`:root {
  --balloon-border-radius: 2px;
  --balloon-color: rgba(16, 16, 16, 0.95);
  --balloon-text-color: #fff;
  --balloon-font-size: 12px;
  --balloon-move: 4px; }

button[aria-label][data-balloon-pos] {
  overflow: visible; }

[aria-label][data-balloon-pos] {
  position: relative;
  cursor: pointer; }
  [aria-label][data-balloon-pos]:after {
    opacity: 0;
    pointer-events: none;
    transition: all 0.18s ease-out 0.18s;
    text-indent: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-weight: normal;
    font-style: normal;
    text-shadow: none;
    font-size: 12px;
    font-size: var(--balloon-font-size);
    background: rgba(16, 16, 16, 0.95);
    background: var(--balloon-color);
    border-radius: 2px;
    color: #fff;
    color: var(--balloon-text-color);
    border-radius: var(--balloon-border-radius);
    content: attr(aria-label);
    padding: .5em 1em;
    position: absolute;
    white-space: nowrap;
    z-index: 10; }
  [aria-label][data-balloon-pos]:before {
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-top-color: rgba(16, 16, 16, 0.95);
    border-top-color: var(--balloon-color);
    opacity: 0;
    pointer-events: none;
    transition: all 0.18s ease-out 0.18s;
    content: "";
    position: absolute;
    z-index: 10; }
  [aria-label][data-balloon-pos]:hover:before, [aria-label][data-balloon-pos]:hover:after, [aria-label][data-balloon-pos][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-visible]:after, [aria-label][data-balloon-pos]:not([data-balloon-nofocus]):focus:before, [aria-label][data-balloon-pos]:not([data-balloon-nofocus]):focus:after {
    opacity: 1;
    pointer-events: none; }
  [aria-label][data-balloon-pos].font-awesome:after {
    font-family: FontAwesome, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; }
  [aria-label][data-balloon-pos][data-balloon-break]:after {
    white-space: pre; }
  [aria-label][data-balloon-pos][data-balloon-break][data-balloon-length]:after {
    white-space: pre-line;
    word-break: break-word; }
  [aria-label][data-balloon-pos][data-balloon-blunt]:before, [aria-label][data-balloon-pos][data-balloon-blunt]:after {
    transition: none; }
  [aria-label][data-balloon-pos][data-balloon-pos="up"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos="up"][data-balloon-visible]:after, [aria-label][data-balloon-pos][data-balloon-pos="down"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos="down"][data-balloon-visible]:after {
    transform: translate(-50%, 0); }
  [aria-label][data-balloon-pos][data-balloon-pos="up"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos="up"][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-pos="down"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos="down"][data-balloon-visible]:before {
    transform: translate(-50%, 0); }
  [aria-label][data-balloon-pos][data-balloon-pos*="-left"]:after {
    left: 0; }
  [aria-label][data-balloon-pos][data-balloon-pos*="-left"]:before {
    left: 5px; }
  [aria-label][data-balloon-pos][data-balloon-pos*="-right"]:after {
    right: 0; }
  [aria-label][data-balloon-pos][data-balloon-pos*="-right"]:before {
    right: 5px; }
  [aria-label][data-balloon-pos][data-balloon-po*="-left"]:hover:after, [aria-label][data-balloon-pos][data-balloon-po*="-left"][data-balloon-visible]:after, [aria-label][data-balloon-pos][data-balloon-pos*="-right"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos*="-right"][data-balloon-visible]:after {
    transform: translate(0, 0); }
  [aria-label][data-balloon-pos][data-balloon-po*="-left"]:hover:before, [aria-label][data-balloon-pos][data-balloon-po*="-left"][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-pos*="-right"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos*="-right"][data-balloon-visible]:before {
    transform: translate(0, 0); }
  [aria-label][data-balloon-pos][data-balloon-pos^="up"]:before, [aria-label][data-balloon-pos][data-balloon-pos^="up"]:after {
    bottom: 100%;
    transform-origin: top;
    transform: translate(0, 4px);
    transform: translate(0, var(--balloon-move)); }
  [aria-label][data-balloon-pos][data-balloon-pos^="up"]:after {
    margin-bottom: 10px; }
  [aria-label][data-balloon-pos][data-balloon-pos="up"]:before, [aria-label][data-balloon-pos][data-balloon-pos="up"]:after {
    left: 50%;
    transform: translate(-50%, 4px);
    transform: translate(-50%, var(--balloon-move)); }
  [aria-label][data-balloon-pos][data-balloon-pos^="down"]:before, [aria-label][data-balloon-pos][data-balloon-pos^="down"]:after {
    top: 100%;
    transform: translate(0, calc(4px * -1));
    transform: translate(0, calc(var(--balloon-move) * -1)); }
  [aria-label][data-balloon-pos][data-balloon-pos^="down"]:after {
    margin-top: 10px; }
  [aria-label][data-balloon-pos][data-balloon-pos^="down"]:before {
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-bottom-color: rgba(16, 16, 16, 0.95);
    border-bottom-color: var(--balloon-color); }
  [aria-label][data-balloon-pos][data-balloon-pos="down"]:after, [aria-label][data-balloon-pos][data-balloon-pos="down"]:before {
    left: 50%;
    transform: translate(-50%, calc(4px * -1));
    transform: translate(-50%, calc(var(--balloon-move) * -1)); }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos="left"][data-balloon-visible]:after, [aria-label][data-balloon-pos][data-balloon-pos="right"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos="right"][data-balloon-visible]:after {
    transform: translate(0, -50%); }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos="left"][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-pos="right"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos="right"][data-balloon-visible]:before {
    transform: translate(0, -50%); }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:after, [aria-label][data-balloon-pos][data-balloon-pos="left"]:before {
    right: 100%;
    top: 50%;
    transform: translate(4px, -50%);
    transform: translate(var(--balloon-move), -50%); }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:after {
    margin-right: 10px; }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:before {
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-left-color: rgba(16, 16, 16, 0.95);
    border-left-color: var(--balloon-color); }
  [aria-label][data-balloon-pos][data-balloon-pos="right"]:after, [aria-label][data-balloon-pos][data-balloon-pos="right"]:before {
    left: 100%;
    top: 50%;
    transform: translate(calc(4px * -1), -50%);
    transform: translate(calc(var(--balloon-move) * -1), -50%); }
  [aria-label][data-balloon-pos][data-balloon-pos="right"]:after {
    margin-left: 10px; }
  [aria-label][data-balloon-pos][data-balloon-pos="right"]:before {
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-right-color: rgba(16, 16, 16, 0.95);
    border-right-color: var(--balloon-color); }
  [aria-label][data-balloon-pos][data-balloon-length]:after {
    white-space: normal; }
  [aria-label][data-balloon-pos][data-balloon-length="small"]:after {
    width: 80px; }
  [aria-label][data-balloon-pos][data-balloon-length="medium"]:after {
    width: 150px; }
  [aria-label][data-balloon-pos][data-balloon-length="large"]:after {
    width: 260px; }
  [aria-label][data-balloon-pos][data-balloon-length="xlarge"]:after {
    width: 380px; }
    @media screen and (max-width: 768px) {
      [aria-label][data-balloon-pos][data-balloon-length="xlarge"]:after {
        width: 90vw; } }
  [aria-label][data-balloon-pos][data-balloon-length="fit"]:after {
    width: 100%; }
`,"",{version:3,sources:["webpack://./node_modules/.pnpm/balloon-css@1.2.0/node_modules/balloon-css/balloon.css"],names:[],mappings:"AAAA;EACE,4BAA4B;EAC5B,uCAAuC;EACvC,0BAA0B;EAC1B,yBAAyB;EACzB,mBAAmB,EAAE;;AAEvB;EACE,iBAAiB,EAAE;;AAErB;EACE,kBAAkB;EAClB,eAAe,EAAE;EACjB;IACE,UAAU;IACV,oBAAoB;IACpB,oCAAoC;IACpC,cAAc;IACd,wIAAwI;IACxI,mBAAmB;IACnB,kBAAkB;IAClB,iBAAiB;IACjB,eAAmC;IAAnC,mCAAmC;IACnC,kCAAgC;IAAhC,gCAAgC;IAChC,kBAAkB;IAClB,WAAgC;IAAhC,gCAAgC;IAChC,2CAA2C;IAC3C,yBAAyB;IACzB,iBAAiB;IACjB,kBAAkB;IAClB,mBAAmB;IACnB,WAAW,EAAE;EACf;IACE,QAAQ;IACR,SAAS;IACT,6BAA6B;IAC7B,wCAAsC;IAAtC,sCAAsC;IACtC,UAAU;IACV,oBAAoB;IACpB,oCAAoC;IACpC,WAAW;IACX,kBAAkB;IAClB,WAAW,EAAE;EACf;IACE,UAAU;IACV,oBAAoB,EAAE;EACxB;IACE,qJAAqJ,EAAE;EACzJ;IACE,gBAAgB,EAAE;EACpB;IACE,qBAAqB;IACrB,sBAAsB,EAAE;EAC1B;IACE,gBAAgB,EAAE;EACpB;IACE,6BAA6B,EAAE;EACjC;IACE,6BAA6B,EAAE;EACjC;IACE,OAAO,EAAE;EACX;IACE,SAAS,EAAE;EACb;IACE,QAAQ,EAAE;EACZ;IACE,UAAU,EAAE;EACd;IACE,0BAA0B,EAAE;EAC9B;IACE,0BAA0B,EAAE;EAC9B;IACE,YAAY;IACZ,qBAAqB;IACrB,4BAA4C;IAA5C,4CAA4C,EAAE;EAChD;IACE,mBAAmB,EAAE;EACvB;IACE,SAAS;IACT,+BAA+C;IAA/C,+CAA+C,EAAE;EACnD;IACE,SAAS;IACT,uCAAuD;IAAvD,uDAAuD,EAAE;EAC3D;IACE,gBAAgB,EAAE;EACpB;IACE,QAAQ;IACR,SAAS;IACT,6BAA6B;IAC7B,2CAAyC;IAAzC,yCAAyC,EAAE;EAC7C;IACE,SAAS;IACT,0CAA0D;IAA1D,0DAA0D,EAAE;EAC9D;IACE,6BAA6B,EAAE;EACjC;IACE,6BAA6B,EAAE;EACjC;IACE,WAAW;IACX,QAAQ;IACR,+BAA+C;IAA/C,+CAA+C,EAAE;EACnD;IACE,kBAAkB,EAAE;EACtB;IACE,QAAQ;IACR,SAAS;IACT,6BAA6B;IAC7B,yCAAuC;IAAvC,uCAAuC,EAAE;EAC3C;IACE,UAAU;IACV,QAAQ;IACR,0CAA0D;IAA1D,0DAA0D,EAAE;EAC9D;IACE,iBAAiB,EAAE;EACrB;IACE,QAAQ;IACR,SAAS;IACT,6BAA6B;IAC7B,0CAAwC;IAAxC,wCAAwC,EAAE;EAC5C;IACE,mBAAmB,EAAE;EACvB;IACE,WAAW,EAAE;EACf;IACE,YAAY,EAAE;EAChB;IACE,YAAY,EAAE;EAChB;IACE,YAAY,EAAE;IACd;MACE;QACE,WAAW,EAAE,EAAE;EACrB;IACE,WAAW,EAAE",sourcesContent:[`:root {
  --balloon-border-radius: 2px;
  --balloon-color: rgba(16, 16, 16, 0.95);
  --balloon-text-color: #fff;
  --balloon-font-size: 12px;
  --balloon-move: 4px; }

button[aria-label][data-balloon-pos] {
  overflow: visible; }

[aria-label][data-balloon-pos] {
  position: relative;
  cursor: pointer; }
  [aria-label][data-balloon-pos]:after {
    opacity: 0;
    pointer-events: none;
    transition: all 0.18s ease-out 0.18s;
    text-indent: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-weight: normal;
    font-style: normal;
    text-shadow: none;
    font-size: var(--balloon-font-size);
    background: var(--balloon-color);
    border-radius: 2px;
    color: var(--balloon-text-color);
    border-radius: var(--balloon-border-radius);
    content: attr(aria-label);
    padding: .5em 1em;
    position: absolute;
    white-space: nowrap;
    z-index: 10; }
  [aria-label][data-balloon-pos]:before {
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-top-color: var(--balloon-color);
    opacity: 0;
    pointer-events: none;
    transition: all 0.18s ease-out 0.18s;
    content: "";
    position: absolute;
    z-index: 10; }
  [aria-label][data-balloon-pos]:hover:before, [aria-label][data-balloon-pos]:hover:after, [aria-label][data-balloon-pos][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-visible]:after, [aria-label][data-balloon-pos]:not([data-balloon-nofocus]):focus:before, [aria-label][data-balloon-pos]:not([data-balloon-nofocus]):focus:after {
    opacity: 1;
    pointer-events: none; }
  [aria-label][data-balloon-pos].font-awesome:after {
    font-family: FontAwesome, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; }
  [aria-label][data-balloon-pos][data-balloon-break]:after {
    white-space: pre; }
  [aria-label][data-balloon-pos][data-balloon-break][data-balloon-length]:after {
    white-space: pre-line;
    word-break: break-word; }
  [aria-label][data-balloon-pos][data-balloon-blunt]:before, [aria-label][data-balloon-pos][data-balloon-blunt]:after {
    transition: none; }
  [aria-label][data-balloon-pos][data-balloon-pos="up"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos="up"][data-balloon-visible]:after, [aria-label][data-balloon-pos][data-balloon-pos="down"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos="down"][data-balloon-visible]:after {
    transform: translate(-50%, 0); }
  [aria-label][data-balloon-pos][data-balloon-pos="up"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos="up"][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-pos="down"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos="down"][data-balloon-visible]:before {
    transform: translate(-50%, 0); }
  [aria-label][data-balloon-pos][data-balloon-pos*="-left"]:after {
    left: 0; }
  [aria-label][data-balloon-pos][data-balloon-pos*="-left"]:before {
    left: 5px; }
  [aria-label][data-balloon-pos][data-balloon-pos*="-right"]:after {
    right: 0; }
  [aria-label][data-balloon-pos][data-balloon-pos*="-right"]:before {
    right: 5px; }
  [aria-label][data-balloon-pos][data-balloon-po*="-left"]:hover:after, [aria-label][data-balloon-pos][data-balloon-po*="-left"][data-balloon-visible]:after, [aria-label][data-balloon-pos][data-balloon-pos*="-right"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos*="-right"][data-balloon-visible]:after {
    transform: translate(0, 0); }
  [aria-label][data-balloon-pos][data-balloon-po*="-left"]:hover:before, [aria-label][data-balloon-pos][data-balloon-po*="-left"][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-pos*="-right"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos*="-right"][data-balloon-visible]:before {
    transform: translate(0, 0); }
  [aria-label][data-balloon-pos][data-balloon-pos^="up"]:before, [aria-label][data-balloon-pos][data-balloon-pos^="up"]:after {
    bottom: 100%;
    transform-origin: top;
    transform: translate(0, var(--balloon-move)); }
  [aria-label][data-balloon-pos][data-balloon-pos^="up"]:after {
    margin-bottom: 10px; }
  [aria-label][data-balloon-pos][data-balloon-pos="up"]:before, [aria-label][data-balloon-pos][data-balloon-pos="up"]:after {
    left: 50%;
    transform: translate(-50%, var(--balloon-move)); }
  [aria-label][data-balloon-pos][data-balloon-pos^="down"]:before, [aria-label][data-balloon-pos][data-balloon-pos^="down"]:after {
    top: 100%;
    transform: translate(0, calc(var(--balloon-move) * -1)); }
  [aria-label][data-balloon-pos][data-balloon-pos^="down"]:after {
    margin-top: 10px; }
  [aria-label][data-balloon-pos][data-balloon-pos^="down"]:before {
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-bottom-color: var(--balloon-color); }
  [aria-label][data-balloon-pos][data-balloon-pos="down"]:after, [aria-label][data-balloon-pos][data-balloon-pos="down"]:before {
    left: 50%;
    transform: translate(-50%, calc(var(--balloon-move) * -1)); }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos="left"][data-balloon-visible]:after, [aria-label][data-balloon-pos][data-balloon-pos="right"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos="right"][data-balloon-visible]:after {
    transform: translate(0, -50%); }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos="left"][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-pos="right"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos="right"][data-balloon-visible]:before {
    transform: translate(0, -50%); }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:after, [aria-label][data-balloon-pos][data-balloon-pos="left"]:before {
    right: 100%;
    top: 50%;
    transform: translate(var(--balloon-move), -50%); }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:after {
    margin-right: 10px; }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:before {
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-left-color: var(--balloon-color); }
  [aria-label][data-balloon-pos][data-balloon-pos="right"]:after, [aria-label][data-balloon-pos][data-balloon-pos="right"]:before {
    left: 100%;
    top: 50%;
    transform: translate(calc(var(--balloon-move) * -1), -50%); }
  [aria-label][data-balloon-pos][data-balloon-pos="right"]:after {
    margin-left: 10px; }
  [aria-label][data-balloon-pos][data-balloon-pos="right"]:before {
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-right-color: var(--balloon-color); }
  [aria-label][data-balloon-pos][data-balloon-length]:after {
    white-space: normal; }
  [aria-label][data-balloon-pos][data-balloon-length="small"]:after {
    width: 80px; }
  [aria-label][data-balloon-pos][data-balloon-length="medium"]:after {
    width: 150px; }
  [aria-label][data-balloon-pos][data-balloon-length="large"]:after {
    width: 260px; }
  [aria-label][data-balloon-pos][data-balloon-length="xlarge"]:after {
    width: 380px; }
    @media screen and (max-width: 768px) {
      [aria-label][data-balloon-pos][data-balloon-length="xlarge"]:after {
        width: 90vw; } }
  [aria-label][data-balloon-pos][data-balloon-length="fit"]:after {
    width: 100%; }
`],sourceRoot:""}]);const y=h},685:(o,a,l)=>{l.d(a,{Z:()=>R});var c=l(415),d=l.n(c),u=l(352),h=l.n(u),y=l(49),m=l(80),A=l.n(m),b=new URL(l(831),l.b),S=h()(d());S.i(y.Z);var C=A()(b);S.push([o.id,`@keyframes my-face {
  2% {
    transform: translate(0, 1.5px) rotate(1.5deg);
  }
  4% {
    transform: translate(0, -1.5px) rotate(-0.5deg);
  }
  6% {
    transform: translate(0, 1.5px) rotate(-1.5deg);
  }
  8% {
    transform: translate(0, -1.5px) rotate(-1.5deg);
  }
  10% {
    transform: translate(0, 2.5px) rotate(1.5deg);
  }
  12% {
    transform: translate(0, -0.5px) rotate(1.5deg);
  }
  14% {
    transform: translate(0, -1.5px) rotate(1.5deg);
  }
  16% {
    transform: translate(0, -0.5px) rotate(-1.5deg);
  }
  18% {
    transform: translate(0, 0.5px) rotate(-1.5deg);
  }
  20% {
    transform: translate(0, -1.5px) rotate(2.5deg);
  }
  22% {
    transform: translate(0, 0.5px) rotate(-1.5deg);
  }
  24% {
    transform: translate(0, 1.5px) rotate(1.5deg);
  }
  26% {
    transform: translate(0, 0.5px) rotate(0.5deg);
  }
  28% {
    transform: translate(0, 0.5px) rotate(1.5deg);
  }
  30% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  32% {
    transform: translate(0, 1.5px) rotate(-0.5deg);
  }
  34% {
    transform: translate(0, 1.5px) rotate(-0.5deg);
  }
  36% {
    transform: translate(0, -1.5px) rotate(2.5deg);
  }
  38% {
    transform: translate(0, 1.5px) rotate(-1.5deg);
  }
  40% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  42% {
    transform: translate(0, 2.5px) rotate(-1.5deg);
  }
  44% {
    transform: translate(0, 1.5px) rotate(0.5deg);
  }
  46% {
    transform: translate(0, -1.5px) rotate(2.5deg);
  }
  48% {
    transform: translate(0, -0.5px) rotate(0.5deg);
  }
  50% {
    transform: translate(0, 0.5px) rotate(0.5deg);
  }
  52% {
    transform: translate(0, 2.5px) rotate(2.5deg);
  }
  54% {
    transform: translate(0, -1.5px) rotate(1.5deg);
  }
  56% {
    transform: translate(0, 2.5px) rotate(2.5deg);
  }
  58% {
    transform: translate(0, 0.5px) rotate(2.5deg);
  }
  60% {
    transform: translate(0, 2.5px) rotate(2.5deg);
  }
  62% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  64% {
    transform: translate(0, -0.5px) rotate(1.5deg);
  }
  66% {
    transform: translate(0, 1.5px) rotate(-0.5deg);
  }
  68% {
    transform: translate(0, -1.5px) rotate(-0.5deg);
  }
  70% {
    transform: translate(0, 1.5px) rotate(0.5deg);
  }
  72% {
    transform: translate(0, 2.5px) rotate(1.5deg);
  }
  74% {
    transform: translate(0, -0.5px) rotate(0.5deg);
  }
  76% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  78% {
    transform: translate(0, -0.5px) rotate(1.5deg);
  }
  80% {
    transform: translate(0, 1.5px) rotate(1.5deg);
  }
  82% {
    transform: translate(0, -0.5px) rotate(0.5deg);
  }
  84% {
    transform: translate(0, 1.5px) rotate(2.5deg);
  }
  86% {
    transform: translate(0, -1.5px) rotate(-1.5deg);
  }
  88% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  90% {
    transform: translate(0, 2.5px) rotate(-0.5deg);
  }
  92% {
    transform: translate(0, 0.5px) rotate(-0.5deg);
  }
  94% {
    transform: translate(0, 2.5px) rotate(0.5deg);
  }
  96% {
    transform: translate(0, -0.5px) rotate(1.5deg);
  }
  98% {
    transform: translate(0, -1.5px) rotate(-0.5deg);
  }
  0%,
  100% {
    transform: translate(0, 0) rotate(0deg);
  }
}
.dplayer {
  position: relative;
  overflow: hidden;
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
  line-height: 1;
}
.dplayer * {
  box-sizing: content-box;
}
.dplayer svg {
  width: 100%;
  height: 100%;
}
.dplayer svg path,
.dplayer svg circle {
  fill: #fff;
}
.dplayer:-webkit-full-screen {
  width: 100%;
  height: 100%;
  background: #000;
  position: fixed;
  z-index: 100000;
  left: 0;
  top: 0;
  margin: 0;
  padding: 0;
  transform: translate(0, 0);
}
.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box .dplayer-setting-showdan,
.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box .dplayer-setting-danmaku,
.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box .dplayer-setting-danunlimit {
  display: none;
}
.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-comment {
  display: none;
}
.dplayer.dplayer-no-danmaku .dplayer-danmaku {
  display: none;
}
.dplayer.dplayer-live .dplayer-time {
  display: none;
}
.dplayer.dplayer-live .dplayer-bar-wrap {
  display: none;
}
.dplayer.dplayer-live .dplayer-setting-speed {
  display: none;
}
.dplayer.dplayer-live .dplayer-setting-loop {
  display: none;
}
.dplayer.dplayer-live.dplayer-no-danmaku .dplayer-setting {
  display: none;
}
.dplayer.dplayer-arrow .dplayer-danmaku {
  font-size: 18px;
}
.dplayer.dplayer-arrow .dplayer-icon {
  margin: 0 -3px;
}
.dplayer.dplayer-playing .dplayer-danmaku .dplayer-danmaku-move {
  animation-play-state: running;
}
@media (min-width: 900px) {
  .dplayer.dplayer-playing .dplayer-controller-mask {
    opacity: 0;
  }
  .dplayer.dplayer-playing .dplayer-controller {
    opacity: 0;
  }
  .dplayer.dplayer-playing:hover .dplayer-controller-mask {
    opacity: 1;
  }
  .dplayer.dplayer-playing:hover .dplayer-controller {
    opacity: 1;
  }
}
.dplayer.dplayer-loading .dplayer-bezel .diplayer-loading-icon {
  display: block;
}
.dplayer.dplayer-loading .dplayer-danmaku,
.dplayer.dplayer-paused .dplayer-danmaku,
.dplayer.dplayer-loading .dplayer-danmaku-move,
.dplayer.dplayer-paused .dplayer-danmaku-move {
  animation-play-state: paused;
}
.dplayer.dplayer-hide-controller {
  cursor: none;
}
.dplayer.dplayer-hide-controller .dplayer-controller-mask {
  opacity: 0;
  transform: translateY(100%);
}
.dplayer.dplayer-hide-controller .dplayer-controller {
  opacity: 0;
  transform: translateY(100%);
}
.dplayer.dplayer-show-controller .dplayer-controller-mask {
  opacity: 1;
}
.dplayer.dplayer-show-controller .dplayer-controller {
  opacity: 1;
}
.dplayer.dplayer-fulled {
  width: 100% !important;
  height: 100% !important;
}
.dplayer.dplayer-fulled {
  position: fixed;
  z-index: 100000;
  left: 0;
  top: 0;
}
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-volume,
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-camera-icon,
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-airplay-icon,
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-chromecast-icon,
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-play-icon {
  display: none;
}
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-full .dplayer-full-in-icon {
  position: static;
  display: inline-block;
}
.dplayer.dplayer-mobile .dplayer-bar-time {
  display: none;
}
.dplayer.dplayer-mobile.dplayer-hide-controller .dplayer-mobile-play {
  display: none;
}
.dplayer.dplayer-mobile .dplayer-mobile-play {
  display: block;
}
.dplayer-web-fullscreen-fix {
  position: fixed;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
}
[data-balloon]:before {
  display: none;
}
[data-balloon]:after {
  padding: 0.3em 0.7em;
  background: rgba(17, 17, 17, 0.7);
}
[data-balloon][data-balloon-pos="up"]:after {
  margin-bottom: 0;
}
.dplayer-bezel {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  font-size: 22px;
  color: #fff;
  pointer-events: none;
}
.dplayer-bezel .dplayer-bezel-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -26px 0 0 -26px;
  height: 52px;
  width: 52px;
  padding: 12px;
  box-sizing: border-box;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  opacity: 0;
  pointer-events: none;
}
.dplayer-bezel .dplayer-bezel-icon.dplayer-bezel-transition {
  animation: bezel-hide 0.5s linear;
}
@keyframes bezel-hide {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(2);
  }
}
.dplayer-bezel .dplayer-danloading {
  position: absolute;
  top: 50%;
  margin-top: -7px;
  width: 100%;
  text-align: center;
  font-size: 14px;
  line-height: 14px;
  animation: my-face 5s infinite ease-in-out;
}
.dplayer-bezel .diplayer-loading-icon {
  display: none;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -18px 0 0 -18px;
  height: 36px;
  width: 36px;
  pointer-events: none;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-hide {
  display: none;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot {
  animation: diplayer-loading-dot-fade 0.8s ease infinite;
  opacity: 0;
  transform-origin: 4px 4px;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-1 {
  animation-delay: 0.1s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-2 {
  animation-delay: 0.2s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-3 {
  animation-delay: 0.3s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-4 {
  animation-delay: 0.4s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-5 {
  animation-delay: 0.5s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-6 {
  animation-delay: 0.6s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-7 {
  animation-delay: 0.7s;
}
@keyframes diplayer-loading-dot-fade {
  0% {
    opacity: 0.7;
    transform: scale(1.2, 1.2);
  }
  50% {
    opacity: 0.25;
    transform: scale(0.9, 0.9);
  }
  to {
    opacity: 0.25;
    transform: scale(0.85, 0.85);
  }
}
.dplayer-controller-mask {
  background: url(`+C+`) repeat-x bottom;
  height: 98px;
  width: 100%;
  position: absolute;
  bottom: 0;
  transition: all 0.3s ease;
}
.dplayer-controller {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 41px;
  padding: 0 20px;
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
  transition: all 0.3s ease;
}
.dplayer-controller.dplayer-controller-comment .dplayer-icons {
  display: none;
}
.dplayer-controller.dplayer-controller-comment .dplayer-icons.dplayer-comment-box {
  display: block;
}
.dplayer-controller .dplayer-bar-wrap {
  padding: 5px 0;
  cursor: pointer;
  position: absolute;
  bottom: 33px;
  width: calc(100% - 40px);
  height: 3px;
}
.dplayer-controller .dplayer-bar-wrap:hover .dplayer-bar .dplayer-played .dplayer-thumb {
  transform: scale(1);
}
.dplayer-controller .dplayer-bar-wrap:hover .dplayer-highlight {
  display: block;
  width: 8px;
  transform: translateX(-4px);
  top: 4px;
  height: 40%;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight {
  z-index: 12;
  position: absolute;
  top: 5px;
  width: 6px;
  height: 20%;
  border-radius: 6px;
  background-color: #fff;
  text-align: center;
  transform: translateX(-3px);
  transition: all 0.2s ease-in-out;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight:hover .dplayer-highlight-text {
  display: block;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight:hover ~ .dplayer-bar-preview {
  opacity: 0;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight:hover ~ .dplayer-bar-time {
  opacity: 0;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight .dplayer-highlight-text {
  display: none;
  position: absolute;
  left: 50%;
  top: -24px;
  padding: 5px 8px;
  background-color: rgba(0, 0, 0, 0.62);
  color: #fff;
  border-radius: 4px;
  font-size: 12px;
  white-space: nowrap;
  transform: translateX(-50%);
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar-preview {
  position: absolute;
  background: #fff;
  pointer-events: none;
  display: none;
  background-size: 16000px 100%;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar-preview-canvas {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  pointer-events: none;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar-time {
  position: absolute;
  left: 0px;
  top: -20px;
  border-radius: 4px;
  padding: 5px 7px;
  background-color: rgba(0, 0, 0, 0.62);
  color: #fff;
  font-size: 12px;
  text-align: center;
  opacity: 1;
  transition: opacity 0.1s ease-in-out;
  word-wrap: normal;
  word-break: normal;
  z-index: 2;
  pointer-events: none;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar-time.hidden {
  opacity: 0;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar {
  position: relative;
  height: 3px;
  width: 100%;
  background: rgba(255, 255, 255, 0.2);
  cursor: pointer;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar .dplayer-loaded {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.4);
  height: 3px;
  transition: all 0.5s ease;
  will-change: width;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar .dplayer-played {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  height: 3px;
  will-change: width;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar .dplayer-played .dplayer-thumb {
  position: absolute;
  top: 0;
  right: 5px;
  margin-top: -4px;
  margin-right: -10px;
  height: 11px;
  width: 11px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  transform: scale(0);
}
.dplayer-controller .dplayer-icons {
  height: 38px;
  position: absolute;
  bottom: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box {
  display: none;
  position: absolute;
  transition: all 0.3s ease-in-out;
  z-index: 2;
  height: 38px;
  bottom: 0;
  left: 20px;
  right: 20px;
  color: #fff;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-icon {
  padding: 7px;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-icon {
  position: absolute;
  left: 0;
  top: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-send-icon {
  position: absolute;
  right: 0;
  top: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box {
  position: absolute;
  background: rgba(28, 28, 28, 0.9);
  bottom: 41px;
  left: 0;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  padding: 10px 10px 16px;
  font-size: 14px;
  width: 204px;
  transition: all 0.3s ease-in-out;
  transform: scale(0);
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box.dplayer-comment-setting-open {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box input[type=radio] {
  display: none;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box label {
  cursor: pointer;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-title {
  font-size: 13px;
  color: #fff;
  line-height: 30px;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type {
  font-size: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type .dplayer-comment-setting-title {
  margin-bottom: 6px;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type label:nth-child(2) span {
  border-radius: 4px 0 0 4px;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type label:nth-child(4) span {
  border-radius: 0 4px 4px 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type span {
  width: 33%;
  padding: 4px 6px;
  line-height: 16px;
  display: inline-block;
  font-size: 12px;
  color: #fff;
  border: 1px solid #fff;
  margin-right: -1px;
  box-sizing: border-box;
  text-align: center;
  cursor: pointer;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type input:checked + span {
  background: #E4E4E6;
  color: #1c1c1c;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color {
  font-size: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color label {
  font-size: 0;
  padding: 6px;
  display: inline-block;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color span {
  width: 22px;
  height: 22px;
  display: inline-block;
  border-radius: 50%;
  box-sizing: border-box;
  cursor: pointer;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color span:hover {
  animation: my-face 5s infinite ease-in-out;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input {
  outline: none;
  border: none;
  padding: 8px 31px;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  border-radius: 4px;
  background: none;
  margin: 0;
  height: 100%;
  box-sizing: border-box;
  width: 100%;
  color: #fff;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input::-moz-placeholder {
  color: #fff;
  opacity: 0.8;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input::placeholder {
  color: #fff;
  opacity: 0.8;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input::-ms-clear {
  display: none;
}
.dplayer-controller .dplayer-icons.dplayer-icons-left .dplayer-icon {
  padding: 7px;
}
.dplayer-controller .dplayer-icons.dplayer-icons-right {
  right: 20px;
}
.dplayer-controller .dplayer-icons.dplayer-icons-right .dplayer-icon {
  padding: 8px;
}
.dplayer-controller .dplayer-icons .dplayer-time,
.dplayer-controller .dplayer-icons .dplayer-live-badge {
  line-height: 38px;
  color: #eee;
  text-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
  vertical-align: middle;
  font-size: 13px;
  cursor: default;
}
.dplayer-controller .dplayer-icons .dplayer-live-dot {
  display: inline-block;
  width: 6px;
  height: 6px;
  vertical-align: 4%;
  margin-right: 5px;
  content: '';
  border-radius: 6px;
}
.dplayer-controller .dplayer-icons .dplayer-icon {
  width: 40px;
  height: 100%;
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  vertical-align: middle;
  box-sizing: border-box;
  display: inline-block;
}
.dplayer-controller .dplayer-icons .dplayer-icon .dplayer-icon-content {
  transition: all 0.2s ease-in-out;
  opacity: 0.8;
}
.dplayer-controller .dplayer-icons .dplayer-icon:hover .dplayer-icon-content {
  opacity: 1;
}
.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-quality-icon {
  color: #fff;
  width: auto;
  line-height: 22px;
  font-size: 14px;
}
.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-comment-icon {
  padding: 10px 9px 9px;
}
.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-setting-icon {
  padding-top: 8.5px;
}
.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-volume-icon {
  width: 43px;
}
.dplayer-controller .dplayer-icons .dplayer-volume {
  position: relative;
  display: inline-block;
  cursor: pointer;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-volume:hover .dplayer-volume-bar-wrap .dplayer-volume-bar {
  width: 45px;
}
.dplayer-controller .dplayer-icons .dplayer-volume:hover .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons .dplayer-volume.dplayer-volume-active .dplayer-volume-bar-wrap .dplayer-volume-bar {
  width: 45px;
}
.dplayer-controller .dplayer-icons .dplayer-volume.dplayer-volume-active .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap {
  display: inline-block;
  margin: 0 10px 0 -5px;
  vertical-align: middle;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap .dplayer-volume-bar {
  position: relative;
  top: 17px;
  width: 0;
  height: 3px;
  background: #aaa;
  transition: all 0.3s ease-in-out;
}
.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 100%;
  transition: all 0.1s ease;
  will-change: width;
}
.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {
  position: absolute;
  top: 0;
  right: 5px;
  margin-top: -4px;
  margin-right: -10px;
  height: 11px;
  width: 11px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  transform: scale(0);
}
.dplayer-controller .dplayer-icons .dplayer-subtitle-btn {
  display: inline-block;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles {
  display: inline-block;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-box {
  position: absolute;
  right: 0;
  bottom: 50px;
  transform: scale(0);
  width: -moz-fit-content;
  width: fit-content;
  max-width: 240px;
  min-width: 120px;
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.9);
  padding: 7px 0;
  transition: all 0.3s ease-in-out;
  overflow: auto;
  z-index: 2;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-box.dplayer-subtitles-panel {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-box.dplayer-subtitles-box-open {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-item {
  height: 30px;
  padding: 5px 10px;
  box-sizing: border-box;
  cursor: pointer;
  position: relative;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.dplayer-controller .dplayer-icons .dplayer-setting {
  display: inline-block;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box {
  position: absolute;
  right: 0;
  bottom: 50px;
  transform: scale(0);
  width: 150px;
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.9);
  padding: 7px 0;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  z-index: 2;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box > div {
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box > div.dplayer-setting-origin-panel {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-open {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-narrow {
  width: 70px;
  text-align: center;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-speed .dplayer-setting-origin-panel {
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-speed .dplayer-setting-speed-panel {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-item,
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-speed-item {
  height: 30px;
  padding: 5px 10px;
  box-sizing: border-box;
  cursor: pointer;
  position: relative;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-item:hover,
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-speed-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku {
  padding: 5px 0;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-label {
  padding: 0 10px;
  display: inline;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku:hover .dplayer-label {
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku:hover .dplayer-danmaku-bar-wrap {
  display: inline-block;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku.dplayer-setting-danmaku-active .dplayer-label {
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku.dplayer-setting-danmaku-active .dplayer-danmaku-bar-wrap {
  display: inline-block;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap {
  padding: 0 10px;
  box-sizing: border-box;
  display: none;
  vertical-align: middle;
  height: 100%;
  width: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap .dplayer-danmaku-bar {
  position: relative;
  top: 8.5px;
  width: 100%;
  height: 3px;
  background: #fff;
  transition: all 0.3s ease-in-out;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap .dplayer-danmaku-bar .dplayer-danmaku-bar-inner {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 100%;
  transition: all 0.1s ease;
  background: #aaa;
  will-change: width;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap .dplayer-danmaku-bar .dplayer-danmaku-bar-inner .dplayer-thumb {
  position: absolute;
  top: 0;
  right: 5px;
  margin-top: -4px;
  margin-right: -10px;
  height: 11px;
  width: 11px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  background: #aaa;
}
.dplayer-controller .dplayer-icons .dplayer-full {
  display: inline-block;
  height: 100%;
  position: relative;
}
.dplayer-controller .dplayer-icons .dplayer-full:hover .dplayer-full-in-icon {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-full .dplayer-full-in-icon {
  position: absolute;
  top: -30px;
  z-index: 1;
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-quality {
  position: relative;
  display: inline-block;
  height: 100%;
  z-index: 2;
}
.dplayer-controller .dplayer-icons .dplayer-quality:hover .dplayer-quality-list {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-quality:hover .dplayer-quality-mask {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-mask {
  display: none;
  position: absolute;
  bottom: 38px;
  left: -18px;
  width: 80px;
  padding-bottom: 12px;
}
.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-list {
  display: none;
  font-size: 12px;
  width: 80px;
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.9);
  padding: 5px 0;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  color: #fff;
  text-align: center;
}
.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-item {
  height: 25px;
  box-sizing: border-box;
  cursor: pointer;
  line-height: 25px;
}
.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.dplayer-controller .dplayer-icons .dplayer-comment {
  display: inline-block;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-label {
  color: #eee;
  font-size: 13px;
  display: inline-block;
  vertical-align: middle;
  white-space: nowrap;
}
.dplayer-controller .dplayer-icons .dplayer-toggle {
  width: 32px;
  height: 20px;
  text-align: center;
  font-size: 0;
  vertical-align: middle;
  position: absolute;
  top: 5px;
  right: 10px;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input {
  max-height: 0;
  max-width: 0;
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input + label {
  display: inline-block;
  position: relative;
  box-shadow: #dfdfdf 0 0 0 0 inset;
  border: 1px solid #dfdfdf;
  height: 20px;
  width: 32px;
  border-radius: 10px;
  box-sizing: border-box;
  cursor: pointer;
  transition: 0.2s ease-in-out;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input + label:before {
  content: "";
  position: absolute;
  display: block;
  height: 18px;
  width: 18px;
  top: 0;
  left: 0;
  border-radius: 15px;
  transition: 0.2s ease-in-out;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input + label:after {
  content: "";
  position: absolute;
  display: block;
  left: 0;
  top: 0;
  border-radius: 15px;
  background: #fff;
  transition: 0.2s ease-in-out;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
  height: 18px;
  width: 18px;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input:checked + label {
  border-color: rgba(255, 255, 255, 0.5);
}
.dplayer-controller .dplayer-icons .dplayer-toggle input:checked + label:before {
  width: 30px;
  background: rgba(255, 255, 255, 0.5);
}
.dplayer-controller .dplayer-icons .dplayer-toggle input:checked + label:after {
  left: 12px;
}
.dplayer-mobile-play {
  display: none;
  width: 50px;
  height: 50px;
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  box-sizing: border-box;
  bottom: 0;
  opacity: 0.8;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.dplayer-danmaku {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  font-size: 22px;
  color: #fff;
}
.dplayer-danmaku .dplayer-danmaku-item {
  display: inline-block;
  pointer-events: none;
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
  cursor: default;
  white-space: nowrap;
  text-shadow: 0.5px 0.5px 0.5px rgba(0, 0, 0, 0.5);
}
.dplayer-danmaku .dplayer-danmaku-item--demo {
  position: absolute;
  visibility: hidden;
}
.dplayer-danmaku .dplayer-danmaku-right {
  position: absolute;
  right: 0;
  transform: translateX(100%);
}
.dplayer-danmaku .dplayer-danmaku-right.dplayer-danmaku-move {
  will-change: transform;
  animation-name: 'danmaku';
  animation-timing-function: linear;
  animation-play-state: paused;
}
@keyframes danmaku {
  from {
    transform: translateX(100%);
  }
}
.dplayer-danmaku .dplayer-danmaku-top,
.dplayer-danmaku .dplayer-danmaku-bottom {
  position: absolute;
  width: 100%;
  text-align: center;
  visibility: hidden;
}
.dplayer-danmaku .dplayer-danmaku-top.dplayer-danmaku-move,
.dplayer-danmaku .dplayer-danmaku-bottom.dplayer-danmaku-move {
  will-change: visibility;
  animation-name: 'danmaku-center';
  animation-timing-function: linear;
  animation-play-state: paused;
}
@keyframes danmaku-center {
  from {
    visibility: visible;
  }
  to {
    visibility: visible;
  }
}
.dplayer-logo {
  pointer-events: none;
  position: absolute;
  left: 20px;
  top: 20px;
  max-width: 50px;
  max-height: 50px;
}
.dplayer-logo img {
  max-width: 100%;
  max-height: 100%;
  background: none;
}
.dplayer-menu {
  position: absolute;
  width: 170px;
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.85);
  padding: 5px 0;
  overflow: hidden;
  z-index: 3;
  display: none;
}
.dplayer-menu.dplayer-menu-show {
  display: block;
}
.dplayer-menu .dplayer-menu-item {
  height: 30px;
  box-sizing: border-box;
  cursor: pointer;
}
.dplayer-menu .dplayer-menu-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.dplayer-menu .dplayer-menu-item a {
  padding: 0 10px;
  line-height: 30px;
  color: #eee;
  font-size: 13px;
  display: inline-block;
  vertical-align: middle;
  width: 100%;
  box-sizing: border-box;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.dplayer-menu .dplayer-menu-item a:hover {
  text-decoration: none;
}
.dplayer-notice-list {
  position: absolute;
  bottom: 60px;
  left: 20px;
}
.dplayer-notice-list .dplayer-notice {
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.9);
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  color: #fff;
  display: table;
  pointer-events: none;
  animation: showNotice 0.3s ease 1 forwards;
}
.dplayer-notice-list .remove-notice {
  animation: removeNotice 0.3s ease 1 forwards;
}
@keyframes showNotice {
  from {
    padding: 0;
    font-size: 0;
    margin-top: 0;
  }
  to {
    padding: 7px 20px;
    font-size: 14px;
    margin-top: 5px;
  }
}
@keyframes removeNotice {
  0% {
    padding: 7px 20px;
    font-size: 14px;
    margin-top: 5px;
  }
  20% {
    font-size: 12px;
  }
  21% {
    font-size: 0;
    padding: 7px 10px;
  }
  100% {
    padding: 0;
    margin-top: 0;
    font-size: 0;
  }
}
.dplayer-subtitle {
  position: absolute;
  bottom: 40px;
  width: 90%;
  left: 5%;
  text-align: center;
  color: #fff;
  text-shadow: 0.5px 0.5px 0.5px rgba(0, 0, 0, 0.5);
  font-size: 20px;
}
.dplayer-subtitle.dplayer-subtitle-hide {
  display: none;
}
.dplayer-mask {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  display: none;
}
.dplayer-mask.dplayer-mask-show {
  display: block;
}
.dplayer-video-wrap {
  position: relative;
  background: #000;
  font-size: 0;
  width: 100%;
  height: 100%;
}
.dplayer-video-wrap .dplayer-video {
  width: 100%;
  height: 100%;
  display: none;
}
.dplayer-video-wrap .dplayer-video-current {
  display: block;
}
.dplayer-video-wrap .dplayer-video-prepare {
  display: none;
}
.dplayer-info-panel {
  position: absolute;
  top: 10px;
  left: 10px;
  width: 400px;
  background: rgba(28, 28, 28, 0.8);
  padding: 10px;
  color: #fff;
  font-size: 12px;
  border-radius: 2px;
}
.dplayer-info-panel-hide {
  display: none;
}
.dplayer-info-panel .dplayer-info-panel-close {
  cursor: pointer;
  position: absolute;
  right: 10px;
  top: 10px;
}
.dplayer-info-panel .dplayer-info-panel-item > span {
  display: inline-block;
  vertical-align: middle;
  line-height: 15px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.dplayer-info-panel .dplayer-info-panel-item-title {
  width: 100px;
  text-align: right;
  margin-right: 10px;
}
.dplayer-info-panel .dplayer-info-panel-item-data {
  width: 260px;
}
`,"",{version:3,sources:["webpack://./src/css/global.less","webpack://./src/css/index.less","webpack://./src/css/player.less","webpack://./src/css/balloon.less","webpack://./src/css/bezel.less","webpack://./src/css/notice.less","webpack://./src/css/controller.less","webpack://./src/css/danmaku.less","webpack://./src/css/logo.less","webpack://./src/css/menu.less","webpack://./src/css/subtitle.less","webpack://./src/css/video.less","webpack://./src/css/info-panel.less"],names:[],mappings:"AAAA;EACI;IACI,6CAAA;ECEN;EDAE;IACI,+CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,+CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,+CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,+CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,+CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,+CAAA;ECEN;EDAE;;IAEI,uCAAA;ECEN;AACF;ACzJA;EACI,kBAAA;EACA,gBAAA;EACA,yBAAA;KAAA,sBAAA;UAAA,iBAAA;EACA,cAAA;AD2JJ;AC/JA;EAOQ,uBAAA;AD2JR;AClKA;EAWQ,WAAA;EACA,YAAA;AD0JR;ACtKA;;EAgBY,UAAA;AD0JZ;ACtJI;EACI,WAAA;EACA,YAAA;EACA,gBAAA;EACA,eAAA;EACA,eAAA;EACA,OAAA;EACA,MAAA;EACA,SAAA;EACA,UAAA;EACA,0BAAA;ADwJR;ACpJI;;;EAKY,aAAA;ADoJhB;ACzJI;EAUQ,aAAA;ADkJZ;AC5JI;EAcQ,aAAA;ADiJZ;AC7II;EAEQ,aAAA;AD8IZ;AChJI;EAKQ,aAAA;AD8IZ;ACnJI;EAQQ,aAAA;AD8IZ;ACtJI;EAWQ,aAAA;AD8IZ;AC3IQ;EAEQ,aAAA;AD4IhB;ACvII;EAEQ,eAAA;ADwIZ;AC1II;EAKQ,cAAA;ADwIZ;ACpII;EAEQ,6BAAA;ADqIZ;AClIQ;EAAA;IAEQ,UAAA;EDoId;ECtIM;IAKQ,UAAA;EDoId;ECjIU;IAEQ,UAAA;EDkIlB;ECpIU;IAKQ,UAAA;EDkIlB;AACF;AC7HI;EAEQ,cAAA;AD8HZ;AC1HI;;;;EAIQ,4BAAA;AD4HZ;ACxHI;EACI,YAAA;AD0HR;AC3HI;EAIQ,UAAA;EACA,2BAAA;AD0HZ;AC/HI;EAQQ,UAAA;EACA,2BAAA;AD0HZ;ACvHI;EAEQ,UAAA;ADwHZ;AC1HI;EAKQ,UAAA;ADwHZ;ACrHI;EAKI,sBAAA;EACA,uBAAA;ADuHR;AC7HI;EACI,eAAA;EACA,eAAA;EACA,OAAA;EACA,MAAA;ADyHR;ACrHI;;;;;EAOY,aAAA;ADqHhB;AC5HI;EAUY,gBAAA;EACA,qBAAA;ADqHhB;AChII;EAgBQ,aAAA;ADmHZ;AChHQ;EAEQ,aAAA;ADiHhB;ACtII;EA0BQ,cAAA;AD+GZ;ACzGA;EACI,eAAA;EACA,MAAA;EACA,OAAA;EACA,SAAA;EACA,UAAA;AD2GJ;AElSA;EACI,aAAA;AFoSJ;AEjSA;EACI,oBAAA;EACA,iCAAA;AFmSJ;AEhSA;EACI,gBAAA;AFkSJ;AG9SA;EACI,kBAAA;EACA,OAAA;EACA,QAAA;EACA,MAAA;EACA,SAAA;EACA,eAAA;EACA,WAAA;EACA,oBAAA;AHgTJ;AGxTA;EAUQ,kBAAA;EACA,QAAA;EACA,SAAA;EACA,uBAAA;EACA,YAAA;EACA,WAAA;EACA,aAAA;EACA,sBAAA;EACA,8BAAA;EACA,kBAAA;EACA,UAAA;EACA,oBAAA;AHiTR;AGhTQ;EACI,iCAAA;AHkTZ;AGhTQ;EACI;IACI,UAAA;IACA,mBAAA;EHkTd;EGhTU;IACI,UAAA;IACA,mBAAA;EHkTd;AACF;AGnVA;EAqCQ,kBAAA;EACA,QAAA;EACA,gBAAA;EACA,WAAA;EACA,kBAAA;EACA,eAAA;EACA,iBAAA;EACA,0CAAA;AHiTR;AG7VA;EA+CQ,aAAA;EACA,kBAAA;EACA,QAAA;EACA,SAAA;EACA,uBAAA;EACA,YAAA;EACA,WAAA;EACA,oBAAA;AHiTR;AGvWA;EAwDY,aAAA;AHkTZ;AG1WA;EA2DY,uDAAA;EACA,UAAA;EACA,yBAAA;AHkTZ;AI/WC;EDgEmB,qBAAA;AHkTpB;AIlXC;EDgEmB,qBAAA;AHqTpB;AIrXC;EDgEmB,qBAAA;AHwTpB;AIxXC;EDgEmB,qBAAA;AH2TpB;AI3XC;EDgEmB,qBAAA;AH8TpB;AI9XC;EDgEmB,qBAAA;AHiUpB;AIjYC;EDgEmB,qBAAA;AHoUpB;AGhUQ;EACI;IACI,YAAA;IACA,0BAAA;EHkUd;EGhUU;IACI,aAAA;IACA,0BAAA;EHkUd;EGhUU;IACI,aAAA;IACA,4BAAA;EHkUd;AACF;AKlZA;EACI,mEAAA;EACA,YAAA;EACA,WAAA;EACA,kBAAA;EACA,SAAA;EACA,yBAAA;ALoZJ;AKjZA;EACI,kBAAA;EACA,SAAA;EACA,OAAA;EACA,QAAA;EACA,YAAA;EACA,eAAA;EACA,yBAAA;KAAA,sBAAA;UAAA,iBAAA;EACA,yBAAA;ALmZJ;AKlZI;EAEQ,aAAA;ALmZZ;AKrZI;EAKQ,cAAA;ALmZZ;AKjaA;EAkBQ,cAAA;EACA,eAAA;EACA,kBAAA;EACA,YAAA;EACA,wBAAA;EACA,WAAA;ALkZR;AKjZQ;EAEQ,mBAAA;ALkZhB;AKpZQ;EAKQ,cAAA;EACA,UAAA;EACA,2BAAA;EACA,QAAA;EACA,WAAA;ALkZhB;AKnbA;EAqCY,WAAA;EACA,kBAAA;EACA,QAAA;EACA,UAAA;EACA,WAAA;EACA,kBAAA;EACA,sBAAA;EACA,kBAAA;EACA,2BAAA;EACA,gCAAA;ALiZZ;AKhZY;EAEQ,cAAA;ALiZpB;AK/YgB;EACI,UAAA;ALiZpB;AK/YgB;EACI,UAAA;ALiZpB;AKxcA;EA2DgB,aAAA;EACA,kBAAA;EACA,SAAA;EACA,UAAA;EACA,gBAAA;EACA,qCAAA;EACA,WAAA;EACA,kBAAA;EACA,eAAA;EACA,mBAAA;EACA,2BAAA;ALgZhB;AKrdA;EAyEY,kBAAA;EACA,gBAAA;EACA,oBAAA;EACA,aAAA;EACA,6BAAA;AL+YZ;AK5dA;EAgFY,kBAAA;EACA,WAAA;EACA,YAAA;EACA,UAAA;EACA,oBAAA;AL+YZ;AKneA;EA0FY,kBAAA;EACA,SAAA;EACA,UAAA;EACA,kBAAA;EACA,gBAAA;EACA,qCAAA;EACA,WAAA;EACA,eAAA;EACA,kBAAA;EACA,UAAA;EACA,oCAAA;EACA,iBAAA;EACA,kBAAA;EACA,UAAA;EACA,oBAAA;AL4YZ;AK7ZY;EACI,UAAA;AL+ZhB;AKvfA;EA2GY,kBAAA;EACA,WAAA;EACA,WAAA;EACA,oCAAA;EACA,eAAA;AL+YZ;AK9fA;EAiHgB,kBAAA;EACA,OAAA;EACA,MAAA;EACA,SAAA;EACA,oCAAA;EACA,WAAA;EACA,yBAAA;EACA,kBAAA;ALgZhB;AKxgBA;EA2HgB,kBAAA;EACA,OAAA;EACA,MAAA;EACA,SAAA;EACA,WAAA;EACA,kBAAA;ALgZhB;AKhhBA;EAkIoB,kBAAA;EACA,MAAA;EACA,UAAA;EACA,gBAAA;EACA,mBAAA;EACA,YAAA;EACA,WAAA;EACA,kBAAA;EACA,eAAA;EACA,gCAAA;EACA,mBAAA;ALiZpB;AK7hBA;EAkJQ,YAAA;EACA,kBAAA;EACA,SAAA;AL8YR;AK7YQ;EACI,aAAA;EACA,kBAAA;EACA,gCAAA;EACA,UAAA;EACA,YAAA;EACA,SAAA;EACA,UAAA;EACA,WAAA;EACA,WAAA;AL+YZ;AKxZQ;EAWQ,YAAA;ALgZhB;AK3ZQ;EAcQ,kBAAA;EACA,OAAA;EACA,MAAA;ALgZhB;AKhaQ;EAmBQ,kBAAA;EACA,QAAA;EACA,MAAA;ALgZhB;AKraQ;EAwBQ,kBAAA;EACA,iCAAA;EACA,YAAA;EACA,OAAA;EACA,uCAAA;EACA,kBAAA;EACA,uBAAA;EACA,eAAA;EACA,YAAA;EACA,gCAAA;EACA,mBAAA;ALgZhB;AK/YgB;EACI,mBAAA;ALiZpB;AKrbQ;EAuCY,aAAA;ALiZpB;AKxbQ;EA0CY,eAAA;ALiZpB;AK3bQ;EA6CY,eAAA;EACA,WAAA;EACA,iBAAA;ALiZpB;AKhcQ;EAkDY,YAAA;ALiZpB;AKncQ;EAoDgB,kBAAA;ALkZxB;AK/YwB;EAEQ,0BAAA;ALgZhC;AK7YwB;EAEQ,0BAAA;AL8YhC;AK5cQ;EAmEgB,UAAA;EACA,gBAAA;EACA,iBAAA;EACA,qBAAA;EACA,eAAA;EACA,WAAA;EACA,sBAAA;EACA,kBAAA;EACA,sBAAA;EACA,kBAAA;EACA,eAAA;AL4YxB;AKzdQ;EAgFgB,mBAAA;EACA,cAAA;AL4YxB;AK7dQ;EAqFY,YAAA;AL2YpB;AKheQ;EAuFgB,YAAA;EACA,YAAA;EACA,qBAAA;AL4YxB;AKreQ;EA4FgB,WAAA;EACA,YAAA;EACA,qBAAA;EACA,kBAAA;EACA,sBAAA;EACA,eAAA;AL4YxB;AK3YwB;EACI,0CAAA;AL6Y5B;AKhfQ;EAyGQ,aAAA;EACA,YAAA;EACA,iBAAA;EACA,eAAA;EACA,iBAAA;EACA,kBAAA;EACA,kBAAA;EACA,gBAAA;EACA,SAAA;EACA,YAAA;EACA,sBAAA;EACA,WAAA;EACA,WAAA;AL0YhB;AKzYgB;EACI,WAAA;EACA,YAAA;AL2YpB;AK7YgB;EACI,WAAA;EACA,YAAA;AL2YpB;AKzYgB;EACI,aAAA;AL2YpB;AKvYQ;EAEQ,YAAA;ALwYhB;AKrYQ;EACI,WAAA;ALuYZ;AKxYQ;EAGQ,YAAA;ALwYhB;AKpqBA;;EAiSY,iBAAA;EACA,WAAA;EACA,uCAAA;EACA,sBAAA;EACA,eAAA;EACA,eAAA;ALuYZ;AK7qBA;EAySY,qBAAA;EACA,UAAA;EACA,WAAA;EACA,kBAAA;EACA,iBAAA;EACA,WAAA;EACA,kBAAA;ALuYZ;AKtrBA;EAkTY,WAAA;EACA,YAAA;EACA,YAAA;EACA,6BAAA;EACA,aAAA;EACA,eAAA;EACA,sBAAA;EACA,sBAAA;EACA,qBAAA;ALuYZ;AKjsBA;EA4TgB,gCAAA;EACA,YAAA;ALwYhB;AKtYY;EAEQ,UAAA;ALuYpB;AKpYY;EACI,WAAA;EACA,WAAA;EACA,iBAAA;EACA,eAAA;ALsYhB;AKpYY;EACI,qBAAA;ALsYhB;AKpYY;EACI,kBAAA;ALsYhB;AKpYY;EACI,WAAA;ALsYhB;AKvtBA;EAqVY,kBAAA;EACA,qBAAA;EACA,eAAA;EACA,YAAA;ALqYZ;AKpYY;EAEQ,WAAA;ALqYpB;AKvYY;EAKQ,mBAAA;ALqYpB;AKlYY;EAEQ,WAAA;ALmYpB;AKrYY;EAKQ,mBAAA;ALmYpB;AKzuBA;EA0WgB,qBAAA;EACA,qBAAA;EACA,sBAAA;EACA,YAAA;ALkYhB;AK/uBA;EA+WoB,kBAAA;EACA,SAAA;EACA,QAAA;EACA,WAAA;EACA,gBAAA;EACA,gCAAA;ALmYpB;AKvvBA;EAsXwB,kBAAA;EACA,SAAA;EACA,OAAA;EACA,YAAA;EACA,yBAAA;EACA,kBAAA;ALoYxB;AK/vBA;EA6X4B,kBAAA;EACA,MAAA;EACA,UAAA;EACA,gBAAA;EACA,mBAAA;EACA,YAAA;EACA,WAAA;EACA,kBAAA;EACA,eAAA;EACA,gCAAA;EACA,mBAAA;ALqY5B;AK5wBA;EA8YY,qBAAA;EACA,YAAA;ALiYZ;AKhxBA;EAkZY,qBAAA;EACA,YAAA;ALiYZ;AKpxBA;EAqZgB,kBAAA;EACA,QAAA;EACA,YAAA;EACA,mBAAA;EACA,uBAAA;EAAA,kBAAA;EACA,gBAAA;EACA,gBAAA;EACA,kBAAA;EACA,iCAAA;EACA,cAAA;EACA,gCAAA;EACA,cAAA;EACA,UAAA;ALkYhB;AKjYgB;EACI,cAAA;ALmYpB;AKjYgB;EACI,mBAAA;ALmYpB;AKzyBA;EA0agB,YAAA;EACA,iBAAA;EACA,sBAAA;EACA,eAAA;EACA,kBAAA;ALkYhB;AKjYgB;EACI,0CAAA;ALmYpB;AKnzBA;EAqbY,qBAAA;EACA,YAAA;ALiYZ;AKvzBA;EAwbgB,kBAAA;EACA,QAAA;EACA,YAAA;EACA,mBAAA;EACA,YAAA;EACA,kBAAA;EACA,iCAAA;EACA,cAAA;EACA,gCAAA;EACA,gBAAA;EACA,UAAA;ALkYhB;AKjYgB;EACI,aAAA;ALmYpB;AKlYoB;EACI,cAAA;ALoYxB;AKjYgB;EACI,mBAAA;ALmYpB;AKjYgB;EACI,WAAA;EACA,kBAAA;ALmYpB;AKjYgB;EAEQ,aAAA;ALkYxB;AKpYgB;EAKQ,cAAA;ALkYxB;AKv1BA;;EA2dgB,YAAA;EACA,iBAAA;EACA,sBAAA;EACA,eAAA;EACA,kBAAA;ALgYhB;AK/XgB;;EACI,0CAAA;ALkYpB;AKn2BA;EAqegB,cAAA;ALiYhB;AKt2BA;EAueoB,eAAA;EACA,eAAA;ALkYpB;AKhYgB;EAEQ,aAAA;ALiYxB;AKnYgB;EAKQ,qBAAA;ALiYxB;AK9XgB;EAEQ,aAAA;AL+XxB;AKjYgB;EAKQ,qBAAA;AL+XxB;AKt3BA;EA2foB,eAAA;EACA,sBAAA;EACA,aAAA;EACA,sBAAA;EACA,YAAA;EACA,WAAA;AL8XpB;AK93BA;EAkgBwB,kBAAA;EACA,UAAA;EACA,WAAA;EACA,WAAA;EACA,gBAAA;EACA,gCAAA;AL+XxB;AKt4BA;EAygB4B,kBAAA;EACA,SAAA;EACA,OAAA;EACA,YAAA;EACA,yBAAA;EACA,gBAAA;EACA,kBAAA;ALgY5B;AK/4BA;EAihBgC,kBAAA;EACA,MAAA;EACA,UAAA;EACA,gBAAA;EACA,mBAAA;EACA,YAAA;EACA,WAAA;EACA,kBAAA;EACA,eAAA;EACA,gCAAA;EACA,gBAAA;ALiYhC;AK55BA;EAmiBY,qBAAA;EACA,YAAA;EACA,kBAAA;AL4XZ;AK3XY;EAEQ,cAAA;AL4XpB;AKp6BA;EA4iBgB,kBAAA;EACA,UAAA;EACA,UAAA;EACA,aAAA;AL2XhB;AK16BA;EAmjBY,kBAAA;EACA,qBAAA;EACA,YAAA;EACA,UAAA;AL0XZ;AKzXY;EAEQ,cAAA;AL0XpB;AK5XY;EAKQ,cAAA;AL0XpB;AKt7BA;EAgkBgB,aAAA;EACA,kBAAA;EACA,YAAA;EACA,WAAA;EACA,WAAA;EACA,oBAAA;ALyXhB;AK97BA;EAwkBgB,aAAA;EACA,eAAA;EACA,WAAA;EACA,kBAAA;EACA,iCAAA;EACA,cAAA;EACA,gCAAA;EACA,gBAAA;EACA,WAAA;EACA,kBAAA;ALyXhB;AK18BA;EAolBgB,YAAA;EACA,sBAAA;EACA,eAAA;EACA,iBAAA;ALyXhB;AKxXgB;EACI,0CAAA;AL0XpB;AKn9BA;EA8lBY,qBAAA;EACA,YAAA;ALwXZ;AKv9BA;EAkmBY,WAAA;EACA,eAAA;EACA,qBAAA;EACA,sBAAA;EACA,mBAAA;ALwXZ;AK99BA;EAymBY,WAAA;EACA,YAAA;EACA,kBAAA;EACA,YAAA;EACA,sBAAA;EACA,kBAAA;EACA,QAAA;EACA,WAAA;ALwXZ;AKx+BA;EAknBgB,aAAA;EACA,YAAA;EACA,aAAA;ALyXhB;AK7+BA;EAunBgB,qBAAA;EACA,kBAAA;EACA,iCAAA;EACA,yBAAA;EACA,YAAA;EACA,WAAA;EACA,mBAAA;EACA,sBAAA;EACA,eAAA;EACA,4BAAA;ALyXhB;AKz/BA;EAmoBgB,WAAA;EACA,kBAAA;EACA,cAAA;EACA,YAAA;EACA,WAAA;EACA,MAAA;EACA,OAAA;EACA,mBAAA;EACA,4BAAA;ALyXhB;AKpgCA;EA8oBgB,WAAA;EACA,kBAAA;EACA,cAAA;EACA,OAAA;EACA,MAAA;EACA,mBAAA;EACA,gBAAA;EACA,4BAAA;EACA,wCAAA;EACA,YAAA;EACA,WAAA;ALyXhB;AKjhCA;EA2pBgB,sCAAA;ALyXhB;AKphCA;EA8pBgB,WAAA;EACA,oCAAA;ALyXhB;AKxhCA;EAkqBgB,UAAA;ALyXhB;AKnXA;EACI,aAAA;EACA,WAAA;EACA,YAAA;EACA,YAAA;EACA,6BAAA;EACA,aAAA;EACA,eAAA;EACA,sBAAA;EAEA,SAAA;EACA,YAAA;EACA,kBAAA;EACA,SAAA;EACA,QAAA;EACA,gCAAA;ALoXJ;AMpjCA;EACI,kBAAA;EACA,OAAA;EACA,QAAA;EACA,MAAA;EACA,SAAA;EACA,eAAA;EACA,WAAA;ANsjCJ;AM7jCA;EASQ,qBAAA;EACA,oBAAA;EACA,yBAAA;KAAA,sBAAA;UAAA,iBAAA;EACA,eAAA;EACA,mBAAA;EACA,iDAAA;ANujCR;AMtjCQ;EACI,kBAAA;EACA,kBAAA;ANwjCZ;AMzkCA;EAqBQ,kBAAA;EACA,QAAA;EACA,2BAAA;ANujCR;AMtjCQ;EACI,sBAAA;EACA,yBAAA;EACA,iCAAA;EACA,4BAAA;ANwjCZ;AMrjCI;EACI;IACI,2BAAA;ENujCV;AACF;AMzlCA;;EAsCQ,kBAAA;EACA,WAAA;EACA,kBAAA;EACA,kBAAA;ANujCR;AMtjCQ;;EACI,uBAAA;EACA,gCAAA;EACA,iCAAA;EACA,4BAAA;ANyjCZ;AMtjCI;EACI;IACI,mBAAA;ENwjCV;EMtjCM;IACI,mBAAA;ENwjCV;AACF;AO/mCA;EACI,oBAAA;EACA,kBAAA;EACA,UAAA;EACA,SAAA;EACA,eAAA;EACA,gBAAA;APinCJ;AOvnCA;EAQQ,eAAA;EACA,gBAAA;EACA,gBAAA;APknCR;AQ5nCA;EACI,kBAAA;EACA,YAAA;EACA,kBAAA;EACA,kCAAA;EACA,cAAA;EACA,gBAAA;EACA,UAAA;EACA,aAAA;AR8nCJ;AQ7nCI;EACI,cAAA;AR+nCR;AQzoCA;EAaQ,YAAA;EACA,sBAAA;EACA,eAAA;AR+nCR;AQ9nCQ;EACI,0CAAA;ARgoCZ;AQjpCA;EAqBY,eAAA;EACA,iBAAA;EACA,WAAA;EACA,eAAA;EACA,qBAAA;EACA,sBAAA;EACA,WAAA;EACA,sBAAA;EACA,mBAAA;EACA,uBAAA;EACA,gBAAA;AR+nCZ;AQ9nCY;EACI,qBAAA;ARgoChB;AIjqCA;EACI,kBAAA;EACA,YAAA;EACA,UAAA;AJmqCJ;AItqCA;EAMQ,kBAAA;EACA,iCAAA;EACA,gCAAA;EACA,gBAAA;EACA,WAAA;EACA,cAAA;EACA,oBAAA;EACA,0CAAA;AJmqCR;AIhrCA;EAiBQ,4CAAA;AJkqCR;AI9pCA;EACI;IACI,UAAA;IACA,YAAA;IACA,aAAA;EJgqCN;EI9pCE;IACI,iBAAA;IACA,eAAA;IACA,eAAA;EJgqCN;AACF;AI7pCA;EACI;IACI,iBAAA;IACA,eAAA;IACA,eAAA;EJ+pCN;EI7pCE;IACI,eAAA;EJ+pCN;EI7pCE;IACI,YAAA;IACA,iBAAA;EJ+pCN;EI7pCE;IACI,UAAA;IACA,aAAA;IACA,YAAA;EJ+pCN;AACF;ASltCA;EACI,kBAAA;EACA,YAAA;EACA,UAAA;EACA,QAAA;EACA,kBAAA;EACA,WAAA;EACA,iDAAA;EACA,eAAA;ATotCJ;ASntCI;EACI,aAAA;ATqtCR;AU/tCA;EACI,kBAAA;EACA,MAAA;EACA,SAAA;EACA,OAAA;EACA,QAAA;EACA,UAAA;EACA,aAAA;AViuCJ;AUhuCI;EACI,cAAA;AVkuCR;AU9tCA;EACI,kBAAA;EACA,gBAAA;EACA,YAAA;EACA,WAAA;EACA,YAAA;AVguCJ;AUruCA;EAOQ,WAAA;EACA,YAAA;EACA,aAAA;AViuCR;AU1uCA;EAYQ,cAAA;AViuCR;AU7uCA;EAeQ,aAAA;AViuCR;AW7vCA;EACI,kBAAA;EACA,SAAA;EACA,UAAA;EACA,YAAA;EACA,iCAAA;EACA,aAAA;EACA,WAAA;EACA,eAAA;EACA,kBAAA;AX+vCJ;AW7vCI;EACI,aAAA;AX+vCR;AW3wCA;EAgBQ,eAAA;EACA,kBAAA;EACA,WAAA;EACA,SAAA;AX8vCR;AW1vCQ;EACI,qBAAA;EACA,sBAAA;EACA,iBAAA;EACA,mBAAA;EACA,uBAAA;EACA,gBAAA;AX4vCZ;AWzxCA;EAkCQ,YAAA;EACA,iBAAA;EACA,kBAAA;AX0vCR;AW9xCA;EAwCQ,YAAA;AXyvCR",sourcesContent:[`@keyframes my-face {
    2% {
        transform: translate(0, 1.5px) rotate(1.5deg);
    }
    4% {
        transform: translate(0, -1.5px) rotate(-0.5deg);
    }
    6% {
        transform: translate(0, 1.5px) rotate(-1.5deg);
    }
    8% {
        transform: translate(0, -1.5px) rotate(-1.5deg);
    }
    10% {
        transform: translate(0, 2.5px) rotate(1.5deg);
    }
    12% {
        transform: translate(0, -0.5px) rotate(1.5deg);
    }
    14% {
        transform: translate(0, -1.5px) rotate(1.5deg);
    }
    16% {
        transform: translate(0, -0.5px) rotate(-1.5deg);
    }
    18% {
        transform: translate(0, 0.5px) rotate(-1.5deg);
    }
    20% {
        transform: translate(0, -1.5px) rotate(2.5deg);
    }
    22% {
        transform: translate(0, 0.5px) rotate(-1.5deg);
    }
    24% {
        transform: translate(0, 1.5px) rotate(1.5deg);
    }
    26% {
        transform: translate(0, 0.5px) rotate(0.5deg);
    }
    28% {
        transform: translate(0, 0.5px) rotate(1.5deg);
    }
    30% {
        transform: translate(0, -0.5px) rotate(2.5deg);
    }
    32% {
        transform: translate(0, 1.5px) rotate(-0.5deg);
    }
    34% {
        transform: translate(0, 1.5px) rotate(-0.5deg);
    }
    36% {
        transform: translate(0, -1.5px) rotate(2.5deg);
    }
    38% {
        transform: translate(0, 1.5px) rotate(-1.5deg);
    }
    40% {
        transform: translate(0, -0.5px) rotate(2.5deg);
    }
    42% {
        transform: translate(0, 2.5px) rotate(-1.5deg);
    }
    44% {
        transform: translate(0, 1.5px) rotate(0.5deg);
    }
    46% {
        transform: translate(0, -1.5px) rotate(2.5deg);
    }
    48% {
        transform: translate(0, -0.5px) rotate(0.5deg);
    }
    50% {
        transform: translate(0, 0.5px) rotate(0.5deg);
    }
    52% {
        transform: translate(0, 2.5px) rotate(2.5deg);
    }
    54% {
        transform: translate(0, -1.5px) rotate(1.5deg);
    }
    56% {
        transform: translate(0, 2.5px) rotate(2.5deg);
    }
    58% {
        transform: translate(0, 0.5px) rotate(2.5deg);
    }
    60% {
        transform: translate(0, 2.5px) rotate(2.5deg);
    }
    62% {
        transform: translate(0, -0.5px) rotate(2.5deg);
    }
    64% {
        transform: translate(0, -0.5px) rotate(1.5deg);
    }
    66% {
        transform: translate(0, 1.5px) rotate(-0.5deg);
    }
    68% {
        transform: translate(0, -1.5px) rotate(-0.5deg);
    }
    70% {
        transform: translate(0, 1.5px) rotate(0.5deg);
    }
    72% {
        transform: translate(0, 2.5px) rotate(1.5deg);
    }
    74% {
        transform: translate(0, -0.5px) rotate(0.5deg);
    }
    76% {
        transform: translate(0, -0.5px) rotate(2.5deg);
    }
    78% {
        transform: translate(0, -0.5px) rotate(1.5deg);
    }
    80% {
        transform: translate(0, 1.5px) rotate(1.5deg);
    }
    82% {
        transform: translate(0, -0.5px) rotate(0.5deg);
    }
    84% {
        transform: translate(0, 1.5px) rotate(2.5deg);
    }
    86% {
        transform: translate(0, -1.5px) rotate(-1.5deg);
    }
    88% {
        transform: translate(0, -0.5px) rotate(2.5deg);
    }
    90% {
        transform: translate(0, 2.5px) rotate(-0.5deg);
    }
    92% {
        transform: translate(0, 0.5px) rotate(-0.5deg);
    }
    94% {
        transform: translate(0, 2.5px) rotate(0.5deg);
    }
    96% {
        transform: translate(0, -0.5px) rotate(1.5deg);
    }
    98% {
        transform: translate(0, -1.5px) rotate(-0.5deg);
    }
    0%,
    100% {
        transform: translate(0, 0) rotate(0deg);
    }
}`,`@import '../../node_modules/balloon-css/balloon.css';
@keyframes my-face {
  2% {
    transform: translate(0, 1.5px) rotate(1.5deg);
  }
  4% {
    transform: translate(0, -1.5px) rotate(-0.5deg);
  }
  6% {
    transform: translate(0, 1.5px) rotate(-1.5deg);
  }
  8% {
    transform: translate(0, -1.5px) rotate(-1.5deg);
  }
  10% {
    transform: translate(0, 2.5px) rotate(1.5deg);
  }
  12% {
    transform: translate(0, -0.5px) rotate(1.5deg);
  }
  14% {
    transform: translate(0, -1.5px) rotate(1.5deg);
  }
  16% {
    transform: translate(0, -0.5px) rotate(-1.5deg);
  }
  18% {
    transform: translate(0, 0.5px) rotate(-1.5deg);
  }
  20% {
    transform: translate(0, -1.5px) rotate(2.5deg);
  }
  22% {
    transform: translate(0, 0.5px) rotate(-1.5deg);
  }
  24% {
    transform: translate(0, 1.5px) rotate(1.5deg);
  }
  26% {
    transform: translate(0, 0.5px) rotate(0.5deg);
  }
  28% {
    transform: translate(0, 0.5px) rotate(1.5deg);
  }
  30% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  32% {
    transform: translate(0, 1.5px) rotate(-0.5deg);
  }
  34% {
    transform: translate(0, 1.5px) rotate(-0.5deg);
  }
  36% {
    transform: translate(0, -1.5px) rotate(2.5deg);
  }
  38% {
    transform: translate(0, 1.5px) rotate(-1.5deg);
  }
  40% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  42% {
    transform: translate(0, 2.5px) rotate(-1.5deg);
  }
  44% {
    transform: translate(0, 1.5px) rotate(0.5deg);
  }
  46% {
    transform: translate(0, -1.5px) rotate(2.5deg);
  }
  48% {
    transform: translate(0, -0.5px) rotate(0.5deg);
  }
  50% {
    transform: translate(0, 0.5px) rotate(0.5deg);
  }
  52% {
    transform: translate(0, 2.5px) rotate(2.5deg);
  }
  54% {
    transform: translate(0, -1.5px) rotate(1.5deg);
  }
  56% {
    transform: translate(0, 2.5px) rotate(2.5deg);
  }
  58% {
    transform: translate(0, 0.5px) rotate(2.5deg);
  }
  60% {
    transform: translate(0, 2.5px) rotate(2.5deg);
  }
  62% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  64% {
    transform: translate(0, -0.5px) rotate(1.5deg);
  }
  66% {
    transform: translate(0, 1.5px) rotate(-0.5deg);
  }
  68% {
    transform: translate(0, -1.5px) rotate(-0.5deg);
  }
  70% {
    transform: translate(0, 1.5px) rotate(0.5deg);
  }
  72% {
    transform: translate(0, 2.5px) rotate(1.5deg);
  }
  74% {
    transform: translate(0, -0.5px) rotate(0.5deg);
  }
  76% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  78% {
    transform: translate(0, -0.5px) rotate(1.5deg);
  }
  80% {
    transform: translate(0, 1.5px) rotate(1.5deg);
  }
  82% {
    transform: translate(0, -0.5px) rotate(0.5deg);
  }
  84% {
    transform: translate(0, 1.5px) rotate(2.5deg);
  }
  86% {
    transform: translate(0, -1.5px) rotate(-1.5deg);
  }
  88% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  90% {
    transform: translate(0, 2.5px) rotate(-0.5deg);
  }
  92% {
    transform: translate(0, 0.5px) rotate(-0.5deg);
  }
  94% {
    transform: translate(0, 2.5px) rotate(0.5deg);
  }
  96% {
    transform: translate(0, -0.5px) rotate(1.5deg);
  }
  98% {
    transform: translate(0, -1.5px) rotate(-0.5deg);
  }
  0%,
  100% {
    transform: translate(0, 0) rotate(0deg);
  }
}
.dplayer {
  position: relative;
  overflow: hidden;
  user-select: none;
  line-height: 1;
}
.dplayer * {
  box-sizing: content-box;
}
.dplayer svg {
  width: 100%;
  height: 100%;
}
.dplayer svg path,
.dplayer svg circle {
  fill: #fff;
}
.dplayer:-webkit-full-screen {
  width: 100%;
  height: 100%;
  background: #000;
  position: fixed;
  z-index: 100000;
  left: 0;
  top: 0;
  margin: 0;
  padding: 0;
  transform: translate(0, 0);
}
.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box .dplayer-setting-showdan,
.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box .dplayer-setting-danmaku,
.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box .dplayer-setting-danunlimit {
  display: none;
}
.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-comment {
  display: none;
}
.dplayer.dplayer-no-danmaku .dplayer-danmaku {
  display: none;
}
.dplayer.dplayer-live .dplayer-time {
  display: none;
}
.dplayer.dplayer-live .dplayer-bar-wrap {
  display: none;
}
.dplayer.dplayer-live .dplayer-setting-speed {
  display: none;
}
.dplayer.dplayer-live .dplayer-setting-loop {
  display: none;
}
.dplayer.dplayer-live.dplayer-no-danmaku .dplayer-setting {
  display: none;
}
.dplayer.dplayer-arrow .dplayer-danmaku {
  font-size: 18px;
}
.dplayer.dplayer-arrow .dplayer-icon {
  margin: 0 -3px;
}
.dplayer.dplayer-playing .dplayer-danmaku .dplayer-danmaku-move {
  animation-play-state: running;
}
@media (min-width: 900px) {
  .dplayer.dplayer-playing .dplayer-controller-mask {
    opacity: 0;
  }
  .dplayer.dplayer-playing .dplayer-controller {
    opacity: 0;
  }
  .dplayer.dplayer-playing:hover .dplayer-controller-mask {
    opacity: 1;
  }
  .dplayer.dplayer-playing:hover .dplayer-controller {
    opacity: 1;
  }
}
.dplayer.dplayer-loading .dplayer-bezel .diplayer-loading-icon {
  display: block;
}
.dplayer.dplayer-loading .dplayer-danmaku,
.dplayer.dplayer-paused .dplayer-danmaku,
.dplayer.dplayer-loading .dplayer-danmaku-move,
.dplayer.dplayer-paused .dplayer-danmaku-move {
  animation-play-state: paused;
}
.dplayer.dplayer-hide-controller {
  cursor: none;
}
.dplayer.dplayer-hide-controller .dplayer-controller-mask {
  opacity: 0;
  transform: translateY(100%);
}
.dplayer.dplayer-hide-controller .dplayer-controller {
  opacity: 0;
  transform: translateY(100%);
}
.dplayer.dplayer-show-controller .dplayer-controller-mask {
  opacity: 1;
}
.dplayer.dplayer-show-controller .dplayer-controller {
  opacity: 1;
}
.dplayer.dplayer-fulled {
  position: fixed;
  z-index: 100000;
  left: 0;
  top: 0;
  width: 100% !important;
  height: 100% !important;
}
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-volume,
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-camera-icon,
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-airplay-icon,
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-chromecast-icon,
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-play-icon {
  display: none;
}
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-full .dplayer-full-in-icon {
  position: static;
  display: inline-block;
}
.dplayer.dplayer-mobile .dplayer-bar-time {
  display: none;
}
.dplayer.dplayer-mobile.dplayer-hide-controller .dplayer-mobile-play {
  display: none;
}
.dplayer.dplayer-mobile .dplayer-mobile-play {
  display: block;
}
.dplayer-web-fullscreen-fix {
  position: fixed;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
}
[data-balloon]:before {
  display: none;
}
[data-balloon]:after {
  padding: 0.3em 0.7em;
  background: rgba(17, 17, 17, 0.7);
}
[data-balloon][data-balloon-pos="up"]:after {
  margin-bottom: 0;
}
.dplayer-bezel {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  font-size: 22px;
  color: #fff;
  pointer-events: none;
}
.dplayer-bezel .dplayer-bezel-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -26px 0 0 -26px;
  height: 52px;
  width: 52px;
  padding: 12px;
  box-sizing: border-box;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  opacity: 0;
  pointer-events: none;
}
.dplayer-bezel .dplayer-bezel-icon.dplayer-bezel-transition {
  animation: bezel-hide 0.5s linear;
}
@keyframes bezel-hide {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(2);
  }
}
.dplayer-bezel .dplayer-danloading {
  position: absolute;
  top: 50%;
  margin-top: -7px;
  width: 100%;
  text-align: center;
  font-size: 14px;
  line-height: 14px;
  animation: my-face 5s infinite ease-in-out;
}
.dplayer-bezel .diplayer-loading-icon {
  display: none;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -18px 0 0 -18px;
  height: 36px;
  width: 36px;
  pointer-events: none;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-hide {
  display: none;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot {
  animation: diplayer-loading-dot-fade 0.8s ease infinite;
  opacity: 0;
  transform-origin: 4px 4px;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-1 {
  animation-delay: 0.1s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-2 {
  animation-delay: 0.2s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-3 {
  animation-delay: 0.3s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-4 {
  animation-delay: 0.4s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-5 {
  animation-delay: 0.5s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-6 {
  animation-delay: 0.6s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-7 {
  animation-delay: 0.7s;
}
@keyframes diplayer-loading-dot-fade {
  0% {
    opacity: 0.7;
    transform: scale(1.2, 1.2);
  }
  50% {
    opacity: 0.25;
    transform: scale(0.9, 0.9);
  }
  to {
    opacity: 0.25;
    transform: scale(0.85, 0.85);
  }
}
.dplayer-controller-mask {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAADGCAYAAAAT+OqFAAAAdklEQVQoz42QQQ7AIAgEF/T/D+kbq/RWAlnQyyazA4aoAB4FsBSA/bFjuF1EOL7VbrIrBuusmrt4ZZORfb6ehbWdnRHEIiITaEUKa5EJqUakRSaEYBJSCY2dEstQY7AuxahwXFrvZmWl2rh4JZ07z9dLtesfNj5q0FU3A5ObbwAAAABJRU5ErkJggg==) repeat-x bottom;
  height: 98px;
  width: 100%;
  position: absolute;
  bottom: 0;
  transition: all 0.3s ease;
}
.dplayer-controller {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 41px;
  padding: 0 20px;
  user-select: none;
  transition: all 0.3s ease;
}
.dplayer-controller.dplayer-controller-comment .dplayer-icons {
  display: none;
}
.dplayer-controller.dplayer-controller-comment .dplayer-icons.dplayer-comment-box {
  display: block;
}
.dplayer-controller .dplayer-bar-wrap {
  padding: 5px 0;
  cursor: pointer;
  position: absolute;
  bottom: 33px;
  width: calc(100% - 40px);
  height: 3px;
}
.dplayer-controller .dplayer-bar-wrap:hover .dplayer-bar .dplayer-played .dplayer-thumb {
  transform: scale(1);
}
.dplayer-controller .dplayer-bar-wrap:hover .dplayer-highlight {
  display: block;
  width: 8px;
  transform: translateX(-4px);
  top: 4px;
  height: 40%;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight {
  z-index: 12;
  position: absolute;
  top: 5px;
  width: 6px;
  height: 20%;
  border-radius: 6px;
  background-color: #fff;
  text-align: center;
  transform: translateX(-3px);
  transition: all 0.2s ease-in-out;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight:hover .dplayer-highlight-text {
  display: block;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight:hover ~ .dplayer-bar-preview {
  opacity: 0;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight:hover ~ .dplayer-bar-time {
  opacity: 0;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight .dplayer-highlight-text {
  display: none;
  position: absolute;
  left: 50%;
  top: -24px;
  padding: 5px 8px;
  background-color: rgba(0, 0, 0, 0.62);
  color: #fff;
  border-radius: 4px;
  font-size: 12px;
  white-space: nowrap;
  transform: translateX(-50%);
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar-preview {
  position: absolute;
  background: #fff;
  pointer-events: none;
  display: none;
  background-size: 16000px 100%;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar-preview-canvas {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  pointer-events: none;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar-time {
  position: absolute;
  left: 0px;
  top: -20px;
  border-radius: 4px;
  padding: 5px 7px;
  background-color: rgba(0, 0, 0, 0.62);
  color: #fff;
  font-size: 12px;
  text-align: center;
  opacity: 1;
  transition: opacity 0.1s ease-in-out;
  word-wrap: normal;
  word-break: normal;
  z-index: 2;
  pointer-events: none;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar-time.hidden {
  opacity: 0;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar {
  position: relative;
  height: 3px;
  width: 100%;
  background: rgba(255, 255, 255, 0.2);
  cursor: pointer;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar .dplayer-loaded {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.4);
  height: 3px;
  transition: all 0.5s ease;
  will-change: width;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar .dplayer-played {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  height: 3px;
  will-change: width;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar .dplayer-played .dplayer-thumb {
  position: absolute;
  top: 0;
  right: 5px;
  margin-top: -4px;
  margin-right: -10px;
  height: 11px;
  width: 11px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  transform: scale(0);
}
.dplayer-controller .dplayer-icons {
  height: 38px;
  position: absolute;
  bottom: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box {
  display: none;
  position: absolute;
  transition: all 0.3s ease-in-out;
  z-index: 2;
  height: 38px;
  bottom: 0;
  left: 20px;
  right: 20px;
  color: #fff;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-icon {
  padding: 7px;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-icon {
  position: absolute;
  left: 0;
  top: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-send-icon {
  position: absolute;
  right: 0;
  top: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box {
  position: absolute;
  background: rgba(28, 28, 28, 0.9);
  bottom: 41px;
  left: 0;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  padding: 10px 10px 16px;
  font-size: 14px;
  width: 204px;
  transition: all 0.3s ease-in-out;
  transform: scale(0);
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box.dplayer-comment-setting-open {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box input[type=radio] {
  display: none;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box label {
  cursor: pointer;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-title {
  font-size: 13px;
  color: #fff;
  line-height: 30px;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type {
  font-size: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type .dplayer-comment-setting-title {
  margin-bottom: 6px;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type label:nth-child(2) span {
  border-radius: 4px 0 0 4px;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type label:nth-child(4) span {
  border-radius: 0 4px 4px 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type span {
  width: 33%;
  padding: 4px 6px;
  line-height: 16px;
  display: inline-block;
  font-size: 12px;
  color: #fff;
  border: 1px solid #fff;
  margin-right: -1px;
  box-sizing: border-box;
  text-align: center;
  cursor: pointer;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type input:checked + span {
  background: #E4E4E6;
  color: #1c1c1c;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color {
  font-size: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color label {
  font-size: 0;
  padding: 6px;
  display: inline-block;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color span {
  width: 22px;
  height: 22px;
  display: inline-block;
  border-radius: 50%;
  box-sizing: border-box;
  cursor: pointer;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color span:hover {
  animation: my-face 5s infinite ease-in-out;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input {
  outline: none;
  border: none;
  padding: 8px 31px;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  border-radius: 4px;
  background: none;
  margin: 0;
  height: 100%;
  box-sizing: border-box;
  width: 100%;
  color: #fff;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input::placeholder {
  color: #fff;
  opacity: 0.8;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input::-ms-clear {
  display: none;
}
.dplayer-controller .dplayer-icons.dplayer-icons-left .dplayer-icon {
  padding: 7px;
}
.dplayer-controller .dplayer-icons.dplayer-icons-right {
  right: 20px;
}
.dplayer-controller .dplayer-icons.dplayer-icons-right .dplayer-icon {
  padding: 8px;
}
.dplayer-controller .dplayer-icons .dplayer-time,
.dplayer-controller .dplayer-icons .dplayer-live-badge {
  line-height: 38px;
  color: #eee;
  text-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
  vertical-align: middle;
  font-size: 13px;
  cursor: default;
}
.dplayer-controller .dplayer-icons .dplayer-live-dot {
  display: inline-block;
  width: 6px;
  height: 6px;
  vertical-align: 4%;
  margin-right: 5px;
  content: '';
  border-radius: 6px;
}
.dplayer-controller .dplayer-icons .dplayer-icon {
  width: 40px;
  height: 100%;
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  vertical-align: middle;
  box-sizing: border-box;
  display: inline-block;
}
.dplayer-controller .dplayer-icons .dplayer-icon .dplayer-icon-content {
  transition: all 0.2s ease-in-out;
  opacity: 0.8;
}
.dplayer-controller .dplayer-icons .dplayer-icon:hover .dplayer-icon-content {
  opacity: 1;
}
.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-quality-icon {
  color: #fff;
  width: auto;
  line-height: 22px;
  font-size: 14px;
}
.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-comment-icon {
  padding: 10px 9px 9px;
}
.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-setting-icon {
  padding-top: 8.5px;
}
.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-volume-icon {
  width: 43px;
}
.dplayer-controller .dplayer-icons .dplayer-volume {
  position: relative;
  display: inline-block;
  cursor: pointer;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-volume:hover .dplayer-volume-bar-wrap .dplayer-volume-bar {
  width: 45px;
}
.dplayer-controller .dplayer-icons .dplayer-volume:hover .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons .dplayer-volume.dplayer-volume-active .dplayer-volume-bar-wrap .dplayer-volume-bar {
  width: 45px;
}
.dplayer-controller .dplayer-icons .dplayer-volume.dplayer-volume-active .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap {
  display: inline-block;
  margin: 0 10px 0 -5px;
  vertical-align: middle;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap .dplayer-volume-bar {
  position: relative;
  top: 17px;
  width: 0;
  height: 3px;
  background: #aaa;
  transition: all 0.3s ease-in-out;
}
.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 100%;
  transition: all 0.1s ease;
  will-change: width;
}
.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {
  position: absolute;
  top: 0;
  right: 5px;
  margin-top: -4px;
  margin-right: -10px;
  height: 11px;
  width: 11px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  transform: scale(0);
}
.dplayer-controller .dplayer-icons .dplayer-subtitle-btn {
  display: inline-block;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles {
  display: inline-block;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-box {
  position: absolute;
  right: 0;
  bottom: 50px;
  transform: scale(0);
  width: fit-content;
  max-width: 240px;
  min-width: 120px;
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.9);
  padding: 7px 0;
  transition: all 0.3s ease-in-out;
  overflow: auto;
  z-index: 2;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-box.dplayer-subtitles-panel {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-box.dplayer-subtitles-box-open {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-item {
  height: 30px;
  padding: 5px 10px;
  box-sizing: border-box;
  cursor: pointer;
  position: relative;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.dplayer-controller .dplayer-icons .dplayer-setting {
  display: inline-block;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box {
  position: absolute;
  right: 0;
  bottom: 50px;
  transform: scale(0);
  width: 150px;
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.9);
  padding: 7px 0;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  z-index: 2;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box > div {
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box > div.dplayer-setting-origin-panel {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-open {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-narrow {
  width: 70px;
  text-align: center;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-speed .dplayer-setting-origin-panel {
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-speed .dplayer-setting-speed-panel {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-item,
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-speed-item {
  height: 30px;
  padding: 5px 10px;
  box-sizing: border-box;
  cursor: pointer;
  position: relative;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-item:hover,
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-speed-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku {
  padding: 5px 0;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-label {
  padding: 0 10px;
  display: inline;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku:hover .dplayer-label {
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku:hover .dplayer-danmaku-bar-wrap {
  display: inline-block;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku.dplayer-setting-danmaku-active .dplayer-label {
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku.dplayer-setting-danmaku-active .dplayer-danmaku-bar-wrap {
  display: inline-block;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap {
  padding: 0 10px;
  box-sizing: border-box;
  display: none;
  vertical-align: middle;
  height: 100%;
  width: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap .dplayer-danmaku-bar {
  position: relative;
  top: 8.5px;
  width: 100%;
  height: 3px;
  background: #fff;
  transition: all 0.3s ease-in-out;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap .dplayer-danmaku-bar .dplayer-danmaku-bar-inner {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 100%;
  transition: all 0.1s ease;
  background: #aaa;
  will-change: width;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap .dplayer-danmaku-bar .dplayer-danmaku-bar-inner .dplayer-thumb {
  position: absolute;
  top: 0;
  right: 5px;
  margin-top: -4px;
  margin-right: -10px;
  height: 11px;
  width: 11px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  background: #aaa;
}
.dplayer-controller .dplayer-icons .dplayer-full {
  display: inline-block;
  height: 100%;
  position: relative;
}
.dplayer-controller .dplayer-icons .dplayer-full:hover .dplayer-full-in-icon {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-full .dplayer-full-in-icon {
  position: absolute;
  top: -30px;
  z-index: 1;
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-quality {
  position: relative;
  display: inline-block;
  height: 100%;
  z-index: 2;
}
.dplayer-controller .dplayer-icons .dplayer-quality:hover .dplayer-quality-list {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-quality:hover .dplayer-quality-mask {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-mask {
  display: none;
  position: absolute;
  bottom: 38px;
  left: -18px;
  width: 80px;
  padding-bottom: 12px;
}
.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-list {
  display: none;
  font-size: 12px;
  width: 80px;
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.9);
  padding: 5px 0;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  color: #fff;
  text-align: center;
}
.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-item {
  height: 25px;
  box-sizing: border-box;
  cursor: pointer;
  line-height: 25px;
}
.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.dplayer-controller .dplayer-icons .dplayer-comment {
  display: inline-block;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-label {
  color: #eee;
  font-size: 13px;
  display: inline-block;
  vertical-align: middle;
  white-space: nowrap;
}
.dplayer-controller .dplayer-icons .dplayer-toggle {
  width: 32px;
  height: 20px;
  text-align: center;
  font-size: 0;
  vertical-align: middle;
  position: absolute;
  top: 5px;
  right: 10px;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input {
  max-height: 0;
  max-width: 0;
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input + label {
  display: inline-block;
  position: relative;
  box-shadow: #dfdfdf 0 0 0 0 inset;
  border: 1px solid #dfdfdf;
  height: 20px;
  width: 32px;
  border-radius: 10px;
  box-sizing: border-box;
  cursor: pointer;
  transition: 0.2s ease-in-out;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input + label:before {
  content: "";
  position: absolute;
  display: block;
  height: 18px;
  width: 18px;
  top: 0;
  left: 0;
  border-radius: 15px;
  transition: 0.2s ease-in-out;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input + label:after {
  content: "";
  position: absolute;
  display: block;
  left: 0;
  top: 0;
  border-radius: 15px;
  background: #fff;
  transition: 0.2s ease-in-out;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
  height: 18px;
  width: 18px;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input:checked + label {
  border-color: rgba(255, 255, 255, 0.5);
}
.dplayer-controller .dplayer-icons .dplayer-toggle input:checked + label:before {
  width: 30px;
  background: rgba(255, 255, 255, 0.5);
}
.dplayer-controller .dplayer-icons .dplayer-toggle input:checked + label:after {
  left: 12px;
}
.dplayer-mobile-play {
  display: none;
  width: 50px;
  height: 50px;
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  box-sizing: border-box;
  bottom: 0;
  opacity: 0.8;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.dplayer-danmaku {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  font-size: 22px;
  color: #fff;
}
.dplayer-danmaku .dplayer-danmaku-item {
  display: inline-block;
  pointer-events: none;
  user-select: none;
  cursor: default;
  white-space: nowrap;
  text-shadow: 0.5px 0.5px 0.5px rgba(0, 0, 0, 0.5);
}
.dplayer-danmaku .dplayer-danmaku-item--demo {
  position: absolute;
  visibility: hidden;
}
.dplayer-danmaku .dplayer-danmaku-right {
  position: absolute;
  right: 0;
  transform: translateX(100%);
}
.dplayer-danmaku .dplayer-danmaku-right.dplayer-danmaku-move {
  will-change: transform;
  animation-name: 'danmaku';
  animation-timing-function: linear;
  animation-play-state: paused;
}
@keyframes danmaku {
  from {
    transform: translateX(100%);
  }
}
.dplayer-danmaku .dplayer-danmaku-top,
.dplayer-danmaku .dplayer-danmaku-bottom {
  position: absolute;
  width: 100%;
  text-align: center;
  visibility: hidden;
}
.dplayer-danmaku .dplayer-danmaku-top.dplayer-danmaku-move,
.dplayer-danmaku .dplayer-danmaku-bottom.dplayer-danmaku-move {
  will-change: visibility;
  animation-name: 'danmaku-center';
  animation-timing-function: linear;
  animation-play-state: paused;
}
@keyframes danmaku-center {
  from {
    visibility: visible;
  }
  to {
    visibility: visible;
  }
}
.dplayer-logo {
  pointer-events: none;
  position: absolute;
  left: 20px;
  top: 20px;
  max-width: 50px;
  max-height: 50px;
}
.dplayer-logo img {
  max-width: 100%;
  max-height: 100%;
  background: none;
}
.dplayer-menu {
  position: absolute;
  width: 170px;
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.85);
  padding: 5px 0;
  overflow: hidden;
  z-index: 3;
  display: none;
}
.dplayer-menu.dplayer-menu-show {
  display: block;
}
.dplayer-menu .dplayer-menu-item {
  height: 30px;
  box-sizing: border-box;
  cursor: pointer;
}
.dplayer-menu .dplayer-menu-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.dplayer-menu .dplayer-menu-item a {
  padding: 0 10px;
  line-height: 30px;
  color: #eee;
  font-size: 13px;
  display: inline-block;
  vertical-align: middle;
  width: 100%;
  box-sizing: border-box;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.dplayer-menu .dplayer-menu-item a:hover {
  text-decoration: none;
}
.dplayer-notice-list {
  position: absolute;
  bottom: 60px;
  left: 20px;
}
.dplayer-notice-list .dplayer-notice {
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.9);
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  color: #fff;
  display: table;
  pointer-events: none;
  animation: showNotice 0.3s ease 1 forwards;
}
.dplayer-notice-list .remove-notice {
  animation: removeNotice 0.3s ease 1 forwards;
}
@keyframes showNotice {
  from {
    padding: 0;
    font-size: 0;
    margin-top: 0;
  }
  to {
    padding: 7px 20px;
    font-size: 14px;
    margin-top: 5px;
  }
}
@keyframes removeNotice {
  0% {
    padding: 7px 20px;
    font-size: 14px;
    margin-top: 5px;
  }
  20% {
    font-size: 12px;
  }
  21% {
    font-size: 0;
    padding: 7px 10px;
  }
  100% {
    padding: 0;
    margin-top: 0;
    font-size: 0;
  }
}
.dplayer-subtitle {
  position: absolute;
  bottom: 40px;
  width: 90%;
  left: 5%;
  text-align: center;
  color: #fff;
  text-shadow: 0.5px 0.5px 0.5px rgba(0, 0, 0, 0.5);
  font-size: 20px;
}
.dplayer-subtitle.dplayer-subtitle-hide {
  display: none;
}
.dplayer-mask {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  display: none;
}
.dplayer-mask.dplayer-mask-show {
  display: block;
}
.dplayer-video-wrap {
  position: relative;
  background: #000;
  font-size: 0;
  width: 100%;
  height: 100%;
}
.dplayer-video-wrap .dplayer-video {
  width: 100%;
  height: 100%;
  display: none;
}
.dplayer-video-wrap .dplayer-video-current {
  display: block;
}
.dplayer-video-wrap .dplayer-video-prepare {
  display: none;
}
.dplayer-info-panel {
  position: absolute;
  top: 10px;
  left: 10px;
  width: 400px;
  background: rgba(28, 28, 28, 0.8);
  padding: 10px;
  color: #fff;
  font-size: 12px;
  border-radius: 2px;
}
.dplayer-info-panel-hide {
  display: none;
}
.dplayer-info-panel .dplayer-info-panel-close {
  cursor: pointer;
  position: absolute;
  right: 10px;
  top: 10px;
}
.dplayer-info-panel .dplayer-info-panel-item > span {
  display: inline-block;
  vertical-align: middle;
  line-height: 15px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.dplayer-info-panel .dplayer-info-panel-item-title {
  width: 100px;
  text-align: right;
  margin-right: 10px;
}
.dplayer-info-panel .dplayer-info-panel-item-data {
  width: 260px;
}
`,`.dplayer {
    position: relative;
    overflow: hidden;
    user-select: none;
    line-height: 1;

    * {
        box-sizing: content-box;
    }

    svg {
        width: 100%;
        height: 100%;

        path,
        circle {
            fill: #fff;
        }
    }

    &:-webkit-full-screen {
        width: 100%;
        height: 100%;
        background: #000;
        position: fixed;
        z-index: 100000;
        left: 0;
        top: 0;
        margin: 0;
        padding: 0;
        transform: translate(0, 0);
        
    }

    &.dplayer-no-danmaku {
        .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box {
            .dplayer-setting-showdan,
            .dplayer-setting-danmaku,
            .dplayer-setting-danunlimit {
                display: none;
            }
        }

        .dplayer-controller .dplayer-icons .dplayer-comment {
            display: none;
        }

        .dplayer-danmaku {
            display: none;
        }
    }

    &.dplayer-live {
        .dplayer-time {
            display: none;
        }
        .dplayer-bar-wrap {
            display: none;
        }
        .dplayer-setting-speed {
            display: none;
        }
        .dplayer-setting-loop {
            display: none;
        }

        &.dplayer-no-danmaku {
            .dplayer-setting {
                display: none;
            }
        }
    }

    &.dplayer-arrow {
        .dplayer-danmaku {
            font-size: 18px;
        }
        .dplayer-icon {
            margin: 0 -3px;
        }
    }

    &.dplayer-playing {
        .dplayer-danmaku .dplayer-danmaku-move {
            animation-play-state: running;
        }

        @media (min-width: 900px) {
            .dplayer-controller-mask {
                opacity: 0;
            }
            .dplayer-controller {
                opacity: 0;
            }

            &:hover {
                .dplayer-controller-mask {
                    opacity: 1;
                }
                .dplayer-controller {
                    opacity: 1;
                }
            }
        }
    }

    &.dplayer-loading {
        .dplayer-bezel .diplayer-loading-icon {
            display: block;
        }
    }

    &.dplayer-loading,
    &.dplayer-paused {
        .dplayer-danmaku,
        .dplayer-danmaku-move {
            animation-play-state: paused;
        }
    }

    &.dplayer-hide-controller {
        cursor: none;

        .dplayer-controller-mask {
            opacity: 0;
            transform: translateY(100%);
        }
        .dplayer-controller {
            opacity: 0;
            transform: translateY(100%);
        }
    }
    &.dplayer-show-controller {
        .dplayer-controller-mask {
            opacity: 1;
        }
        .dplayer-controller {
            opacity: 1;
        }
    }
    &.dplayer-fulled {
        position: fixed;
        z-index: 100000;
        left: 0;
        top: 0;
        width: 100% !important;
        height: 100% !important;
    }
    &.dplayer-mobile {
        .dplayer-controller .dplayer-icons {
            .dplayer-volume,
            .dplayer-camera-icon,
            .dplayer-airplay-icon,
            .dplayer-chromecast-icon,
            .dplayer-play-icon {
                display: none;
            }
            .dplayer-full .dplayer-full-in-icon {
                position: static;
                display: inline-block;
            }
        }

        .dplayer-bar-time {
            display: none;
        }

        &.dplayer-hide-controller {
            .dplayer-mobile-play {
                display: none;
            }
        }

        .dplayer-mobile-play {
            display: block;
        }
    }
}

// To hide scroll bar, apply this class to <body>
.dplayer-web-fullscreen-fix {
    position: fixed;
    top: 0;
    left: 0;
    margin: 0;
    padding: 0;
}
`,`@import '../../node_modules/balloon-css/balloon.css';

[data-balloon]:before {
    display: none;
}

[data-balloon]:after {
    padding: 0.3em 0.7em;
    background: rgba(17, 17, 17, 0.7);
}

[data-balloon][data-balloon-pos="up"]:after {
    margin-bottom: 0;
}`,`.dplayer-bezel {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    font-size: 22px;
    color: #fff;
    pointer-events: none;
    .dplayer-bezel-icon {
        position: absolute;
        top: 50%;
        left: 50%;
        margin: -26px 0 0 -26px;
        height: 52px;
        width: 52px;
        padding: 12px;
        box-sizing: border-box;
        background: rgba(0, 0, 0, .5);
        border-radius: 50%;
        opacity: 0;
        pointer-events: none;
        &.dplayer-bezel-transition {
            animation: bezel-hide .5s linear;
        }
        @keyframes bezel-hide {
            from {
                opacity: 1;
                transform: scale(1);
            }
            to {
                opacity: 0;
                transform: scale(2);
            }
        }
    }
    .dplayer-danloading {
        position: absolute;
        top: 50%;
        margin-top: -7px;
        width: 100%;
        text-align: center;
        font-size: 14px;
        line-height: 14px;
        animation: my-face 5s infinite ease-in-out;
    }
    .diplayer-loading-icon {
        display: none;
        position: absolute;
        top: 50%;
        left: 50%;
        margin: -18px 0 0 -18px;
        height: 36px;
        width: 36px;
        pointer-events: none;
        .diplayer-loading-hide {
            display: none;
        }
        .diplayer-loading-dot {
            animation: diplayer-loading-dot-fade .8s ease infinite;
            opacity: 0;
            transform-origin: 4px 4px;
            each(range(7), {
                &.diplayer-loading-dot-@{value} {
                    animation-delay: (@value * 0.1s);
                }
            });
        }
        @keyframes diplayer-loading-dot-fade {
            0% {
                opacity: .7;
                transform: scale(1.2, 1.2)
            }
            50% {
                opacity: .25;
                transform: scale(.9, .9)
            }
            to {
                opacity: .25;
                transform: scale(.85, .85)
            }
        }
    }
}`,`.dplayer-notice-list{
    position: absolute;
    bottom: 60px;
    left: 20px;

    .dplayer-notice {
        border-radius: 2px;
        background: rgba(28, 28, 28, 0.9);
        transition: all .3s ease-in-out;
        overflow: hidden;
        color: #fff;
        display: table;
        pointer-events: none;
        animation: showNotice .3s ease 1 forwards;
    }

    .remove-notice{
        animation: removeNotice .3s ease 1 forwards;
    }
}

@keyframes showNotice {
    from {
        padding: 0;
        font-size: 0;
        margin-top: 0;
    }
    to {
        padding: 7px 20px;
        font-size: 14px;
        margin-top: 5px;
    }
}

@keyframes removeNotice {
    0%{
        padding: 7px 20px;
        font-size: 14px;
        margin-top: 5px;
    }
    20%{
        font-size: 12px;
    }
    21%{
        font-size: 0;
        padding: 7px 10px;
    }
    100%{
        padding: 0;
        margin-top: 0;
        font-size: 0;
    }
}
`,`.dplayer-controller-mask {
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAADGCAYAAAAT+OqFAAAAdklEQVQoz42QQQ7AIAgEF/T/D+kbq/RWAlnQyyazA4aoAB4FsBSA/bFjuF1EOL7VbrIrBuusmrt4ZZORfb6ehbWdnRHEIiITaEUKa5EJqUakRSaEYBJSCY2dEstQY7AuxahwXFrvZmWl2rh4JZ07z9dLtesfNj5q0FU3A5ObbwAAAABJRU5ErkJggg==) repeat-x bottom;
    height: 98px;
    width: 100%;
    position: absolute;
    bottom: 0;
    transition: all 0.3s ease;
}

.dplayer-controller {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 41px;
    padding: 0 20px;
    user-select: none;
    transition: all 0.3s ease;
    &.dplayer-controller-comment {
        .dplayer-icons {
            display: none;
        }
        .dplayer-icons.dplayer-comment-box {
            display: block;
        }
    }
    .dplayer-bar-wrap {
        padding: 5px 0;
        cursor: pointer;
        position: absolute;
        bottom: 33px;
        width: calc(100% - 40px);
        height: 3px;
        &:hover {
            .dplayer-bar .dplayer-played .dplayer-thumb {
                transform: scale(1);
            }
            .dplayer-highlight {
                display: block;
                width: 8px;
                transform: translateX(-4px);
                top: 4px;
                height: 40%;
            }
        }
        .dplayer-highlight {
            z-index: 12;
            position: absolute;
            top: 5px;
            width: 6px;
            height: 20%;
            border-radius: 6px;
            background-color: #fff;
            text-align: center;
            transform: translateX(-3px);
            transition: all .2s ease-in-out;
            &:hover {
                .dplayer-highlight-text {
                    display: block;
                }
                &~.dplayer-bar-preview {
                    opacity: 0;
                }
                &~.dplayer-bar-time {
                    opacity: 0;
                }
            }
            .dplayer-highlight-text {
                display: none;
                position: absolute;
                left: 50%;
                top: -24px;
                padding: 5px 8px;
                background-color: rgba(0, 0, 0, .62);
                color: #fff;
                border-radius: 4px;
                font-size: 12px;
                white-space: nowrap;
                transform: translateX(-50%);
            }
        }
        .dplayer-bar-preview {
            position: absolute;
            background: #fff;
            pointer-events: none;
            display: none;
            background-size: 16000px 100%;
        }
        .dplayer-bar-preview-canvas {
            position: absolute;
            width: 100%;
            height: 100%;
            z-index: 1;
            pointer-events: none;
        }
        .dplayer-bar-time {
            &.hidden {
                opacity: 0;
            }
            position: absolute;
            left: 0px;
            top: -20px;
            border-radius: 4px;
            padding: 5px 7px;
            background-color: rgba(0, 0, 0, 0.62);
            color: #fff;
            font-size: 12px;
            text-align: center;
            opacity: 1;
            transition: opacity .1s ease-in-out;
            word-wrap: normal;
            word-break: normal;
            z-index: 2;
            pointer-events: none;
        }
        .dplayer-bar {
            position: relative;
            height: 3px;
            width: 100%;
            background: rgba(255, 255, 255, .2);
            cursor: pointer;
            .dplayer-loaded {
                position: absolute;
                left: 0;
                top: 0;
                bottom: 0;
                background: rgba(255, 255, 255, .4);
                height: 3px;
                transition: all 0.5s ease;
                will-change: width;
            }
            .dplayer-played {
                position: absolute;
                left: 0;
                top: 0;
                bottom: 0;
                height: 3px;
                will-change: width;
                .dplayer-thumb {
                    position: absolute;
                    top: 0;
                    right: 5px;
                    margin-top: -4px;
                    margin-right: -10px;
                    height: 11px;
                    width: 11px;
                    border-radius: 50%;
                    cursor: pointer;
                    transition: all .3s ease-in-out;
                    transform: scale(0);
                }
            }
        }
    }
    .dplayer-icons {
        height: 38px;
        position: absolute;
        bottom: 0;
        &.dplayer-comment-box {
            display: none;
            position: absolute;
            transition: all .3s ease-in-out;
            z-index: 2;
            height: 38px;
            bottom: 0;
            left: 20px;
            right: 20px;
            color: #fff;
            .dplayer-icon {
                padding: 7px;
            }
            .dplayer-comment-setting-icon {
                position: absolute;
                left: 0;
                top: 0;
            }
            .dplayer-send-icon {
                position: absolute;
                right: 0;
                top: 0;
            }
            .dplayer-comment-setting-box {
                position: absolute;
                background: rgba(28, 28, 28, 0.9);
                bottom: 41px;
                left: 0;
                box-shadow: 0 0 25px rgba(0, 0, 0, .3);
                border-radius: 4px;
                padding: 10px 10px 16px;
                font-size: 14px;
                width: 204px;
                transition: all .3s ease-in-out;
                transform: scale(0);
                &.dplayer-comment-setting-open {
                    transform: scale(1);
                }
                input[type=radio] {
                    display: none;
                }
                label {
                    cursor: pointer;
                }
                .dplayer-comment-setting-title {
                    font-size: 13px;
                    color: #fff;
                    line-height: 30px;
                }
                .dplayer-comment-setting-type {
                    font-size: 0;
                    .dplayer-comment-setting-title {
                        margin-bottom: 6px;
                    }
                    label {
                        &:nth-child(2) {
                            span {
                                border-radius: 4px 0 0 4px;
                            }
                        }
                        &:nth-child(4) {
                            span {
                                border-radius: 0 4px 4px 0;
                            }
                        }
                    }
                    span {
                        width: 33%;
                        padding: 4px 6px;
                        line-height: 16px;
                        display: inline-block;
                        font-size: 12px;
                        color: #fff;
                        border: 1px solid #fff;
                        margin-right: -1px;
                        box-sizing: border-box;
                        text-align: center;
                        cursor: pointer;
                    }
                    input:checked+span {
                        background: #E4E4E6;
                        color: #1c1c1c;
                    }
                }
                .dplayer-comment-setting-color {
                    font-size: 0;
                    label {
                        font-size: 0;
                        padding: 6px;
                        display: inline-block;
                    }
                    span {
                        width: 22px;
                        height: 22px;
                        display: inline-block;
                        border-radius: 50%;
                        box-sizing: border-box;
                        cursor: pointer;
                        &:hover {
                            animation: my-face 5s infinite ease-in-out;
                        }
                    }
                }
            }
            .dplayer-comment-input {
                outline: none;
                border: none;
                padding: 8px 31px;
                font-size: 14px;
                line-height: 18px;
                text-align: center;
                border-radius: 4px;
                background: none;
                margin: 0;
                height: 100%;
                box-sizing: border-box;
                width: 100%;
                color: #fff;
                &::placeholder {
                    color: #fff;
                    opacity: 0.8;
                }
                &::-ms-clear {
                    display: none;
                }
            }
        }
        &.dplayer-icons-left {
            .dplayer-icon {
                padding: 7px;
            }
        }
        &.dplayer-icons-right {
            right: 20px;
            .dplayer-icon {
                padding: 8px;
            }
        }
        .dplayer-time,
        .dplayer-live-badge {
            line-height: 38px;
            color: #eee;
            text-shadow: 0 0 2px rgba(0, 0, 0, .5);
            vertical-align: middle;
            font-size: 13px;
            cursor: default;
        }
        .dplayer-live-dot {
            display: inline-block;
            width: 6px;
            height: 6px;
            vertical-align: 4%;
            margin-right: 5px;
            content: '';
            border-radius: 6px;
        }
        .dplayer-icon {
            width: 40px;
            height: 100%;
            border: none;
            background-color: transparent;
            outline: none;
            cursor: pointer;
            vertical-align: middle;
            box-sizing: border-box;
            display: inline-block;
            .dplayer-icon-content {
                transition: all .2s ease-in-out;
                opacity: .8;
            }
            &:hover {
                .dplayer-icon-content {
                    opacity: 1;
                }
            }
            &.dplayer-quality-icon {
                color: #fff;
                width: auto;
                line-height: 22px;
                font-size: 14px;
            }
            &.dplayer-comment-icon {
                padding: 10px 9px 9px;
            }
            &.dplayer-setting-icon {
                padding-top: 8.5px;
            }
            &.dplayer-volume-icon {
                width: 43px;
            }
        }
        .dplayer-volume {
            position: relative;
            display: inline-block;
            cursor: pointer;
            height: 100%;
            &:hover {
                .dplayer-volume-bar-wrap .dplayer-volume-bar {
                    width: 45px;
                }
                .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {
                    transform: scale(1);
                }
            }
            &.dplayer-volume-active {
                .dplayer-volume-bar-wrap .dplayer-volume-bar {
                    width: 45px;
                }
                .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {
                    transform: scale(1);
                }
            }
            .dplayer-volume-bar-wrap {
                display: inline-block;
                margin: 0 10px 0 -5px;
                vertical-align: middle;
                height: 100%;
                .dplayer-volume-bar {
                    position: relative;
                    top: 17px;
                    width: 0;
                    height: 3px;
                    background: #aaa;
                    transition: all 0.3s ease-in-out;
                    .dplayer-volume-bar-inner {
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        height: 100%;
                        transition: all 0.1s ease;
                        will-change: width;
                        .dplayer-thumb {
                            position: absolute;
                            top: 0;
                            right: 5px;
                            margin-top: -4px;
                            margin-right: -10px;
                            height: 11px;
                            width: 11px;
                            border-radius: 50%;
                            cursor: pointer;
                            transition: all .3s ease-in-out;
                            transform: scale(0);
                        }
                    }
                }
            }
        }
        .dplayer-subtitle-btn {
            display: inline-block;
            height: 100%;
        }
        .dplayer-subtitles {
            display: inline-block;
            height: 100%;
            .dplayer-subtitles-box {
                position: absolute;
                right: 0;
                bottom: 50px;
                transform: scale(0);
                width: fit-content;
                max-width: 240px;
                min-width: 120px;
                border-radius: 2px;
                background: rgba(28, 28, 28, 0.9);
                padding: 7px 0;
                transition: all .3s ease-in-out;
                overflow: auto;
                z-index: 2;
                &.dplayer-subtitles-panel {
                    display: block;
                }
                &.dplayer-subtitles-box-open {
                    transform: scale(1);
                }
            }
            .dplayer-subtitles-item {
                height: 30px;
                padding: 5px 10px;
                box-sizing: border-box;
                cursor: pointer;
                position: relative;
                &:hover {
                    background-color: rgba(255, 255, 255, .1);
                }
            }
        }
        .dplayer-setting {
            display: inline-block;
            height: 100%;
            .dplayer-setting-box {
                position: absolute;
                right: 0;
                bottom: 50px;
                transform: scale(0);
                width: 150px;
                border-radius: 2px;
                background: rgba(28, 28, 28, 0.9);
                padding: 7px 0;
                transition: all .3s ease-in-out;
                overflow: hidden;
                z-index: 2;
                &>div {
                    display: none;
                    &.dplayer-setting-origin-panel {
                        display: block;
                    }
                }
                &.dplayer-setting-box-open {
                    transform: scale(1);
                }
                &.dplayer-setting-box-narrow {
                    width: 70px;
                    text-align: center;
                }
                &.dplayer-setting-box-speed {
                    .dplayer-setting-origin-panel {
                        display: none;
                    }
                    .dplayer-setting-speed-panel {
                        display: block;
                    }
                }
            }
            .dplayer-setting-item,
            .dplayer-setting-speed-item {
                height: 30px;
                padding: 5px 10px;
                box-sizing: border-box;
                cursor: pointer;
                position: relative;
                &:hover {
                    background-color: rgba(255, 255, 255, .1);
                }
            }
            .dplayer-setting-danmaku {
                padding: 5px 0;
                .dplayer-label {
                    padding: 0 10px;
                    display: inline;
                }
                &:hover {
                    .dplayer-label {
                        display: none;
                    }
                    .dplayer-danmaku-bar-wrap {
                        display: inline-block;
                    }
                }
                &.dplayer-setting-danmaku-active {
                    .dplayer-label {
                        display: none;
                    }
                    .dplayer-danmaku-bar-wrap {
                        display: inline-block;
                    }
                }
                .dplayer-danmaku-bar-wrap {
                    padding: 0 10px;
                    box-sizing: border-box;
                    display: none;
                    vertical-align: middle;
                    height: 100%;
                    width: 100%;
                    .dplayer-danmaku-bar {
                        position: relative;
                        top: 8.5px;
                        width: 100%;
                        height: 3px;
                        background: #fff;
                        transition: all 0.3s ease-in-out;
                        .dplayer-danmaku-bar-inner {
                            position: absolute;
                            bottom: 0;
                            left: 0;
                            height: 100%;
                            transition: all 0.1s ease;
                            background: #aaa;
                            will-change: width;
                            .dplayer-thumb {
                                position: absolute;
                                top: 0;
                                right: 5px;
                                margin-top: -4px;
                                margin-right: -10px;
                                height: 11px;
                                width: 11px;
                                border-radius: 50%;
                                cursor: pointer;
                                transition: all .3s ease-in-out;
                                background: #aaa;
                            }
                        }
                    }
                }
            }
        }
        .dplayer-full {
            display: inline-block;
            height: 100%;
            position: relative;
            &:hover {
                .dplayer-full-in-icon {
                    display: block;
                }
            }
            .dplayer-full-in-icon {
                position: absolute;
                top: -30px;
                z-index: 1;
                display: none;
            }
        }
        .dplayer-quality {
            position: relative;
            display: inline-block;
            height: 100%;
            z-index: 2;
            &:hover {
                .dplayer-quality-list {
                    display: block;
                }
                .dplayer-quality-mask {
                    display: block;
                }
            }
            .dplayer-quality-mask {
                display: none;
                position: absolute;
                bottom: 38px;
                left: -18px;
                width: 80px;
                padding-bottom: 12px;
            }
            .dplayer-quality-list {
                display: none;
                font-size: 12px;
                width: 80px;
                border-radius: 2px;
                background: rgba(28, 28, 28, 0.9);
                padding: 5px 0;
                transition: all .3s ease-in-out;
                overflow: hidden;
                color: #fff;
                text-align: center;
            }
            .dplayer-quality-item {
                height: 25px;
                box-sizing: border-box;
                cursor: pointer;
                line-height: 25px;
                &:hover {
                    background-color: rgba(255, 255, 255, .1);
                }
            }
        }
        .dplayer-comment {
            display: inline-block;
            height: 100%;
        }
        .dplayer-label {
            color: #eee;
            font-size: 13px;
            display: inline-block;
            vertical-align: middle;
            white-space: nowrap;
        }
        .dplayer-toggle {
            width: 32px;
            height: 20px;
            text-align: center;
            font-size: 0;
            vertical-align: middle;
            position: absolute;
            top: 5px;
            right: 10px;
            input {
                max-height: 0;
                max-width: 0;
                display: none;
            }
            input+label {
                display: inline-block;
                position: relative;
                box-shadow: rgb(223, 223, 223) 0 0 0 0 inset;
                border: 1px solid rgb(223, 223, 223);
                height: 20px;
                width: 32px;
                border-radius: 10px;
                box-sizing: border-box;
                cursor: pointer;
                transition: .2s ease-in-out;
            }
            input+label:before {
                content: "";
                position: absolute;
                display: block;
                height: 18px;
                width: 18px;
                top: 0;
                left: 0;
                border-radius: 15px;
                transition: .2s ease-in-out;
            }
            input+label:after {
                content: "";
                position: absolute;
                display: block;
                left: 0;
                top: 0;
                border-radius: 15px;
                background: #fff;
                transition: .2s ease-in-out;
                box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
                height: 18px;
                width: 18px;
            }
            input:checked+label {
                border-color: rgba(255, 255, 255, 0.5);
            }
            input:checked+label:before {
                width: 30px;
                background: rgba(255, 255, 255, 0.5);
            }
            input:checked+label:after {
                left: 12px;
            }
        }
    }
}

.dplayer-mobile-play {
    display: none;
    width: 50px;
    height: 50px;
    border: none;
    background-color: transparent;
    outline: none;
    cursor: pointer;
    box-sizing: border-box;
    position: absolute;
    bottom: 0;
    opacity: 0.8;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}`,`.dplayer-danmaku {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    font-size: 22px;
    color: #fff;
    .dplayer-danmaku-item {
        display: inline-block;
        pointer-events: none;
        user-select: none;
        cursor: default;
        white-space: nowrap;
        text-shadow: .5px .5px .5px rgba(0, 0, 0, .5);
        &--demo {
            position: absolute;
            visibility: hidden;
        }
    }
    .dplayer-danmaku-right {
        position: absolute;
        right: 0;
        transform: translateX(100%);
        &.dplayer-danmaku-move {
            will-change: transform;
            animation-name: 'danmaku';
            animation-timing-function: linear;
            animation-play-state: paused;
        }
    }
    @keyframes danmaku {
        from {
            transform: translateX(100%);
        }
    }
    .dplayer-danmaku-top,
    .dplayer-danmaku-bottom {
        position: absolute;
        width: 100%;
        text-align: center;
        visibility: hidden;
        &.dplayer-danmaku-move {
            will-change: visibility;
            animation-name: 'danmaku-center';
            animation-timing-function: linear;
            animation-play-state: paused;
        }
    }
    @keyframes danmaku-center {
        from {
            visibility: visible;
        }
        to {
            visibility: visible;
        }
    }
}`,`.dplayer-logo {
    pointer-events: none;
    position: absolute;
    left: 20px;
    top: 20px;
    max-width: 50px;
    max-height: 50px;
    img {
        max-width: 100%;
        max-height: 100%;
        background: none;
    }
}`,`.dplayer-menu {
    position: absolute;
    width: 170px;
    border-radius: 2px;
    background: rgba(28, 28, 28, 0.85);
    padding: 5px 0;
    overflow: hidden;
    z-index: 3;
    display: none;
    &.dplayer-menu-show {
        display: block;
    }
    .dplayer-menu-item {
        height: 30px;
        box-sizing: border-box;
        cursor: pointer;
        &:hover {
            background-color: rgba(255, 255, 255, .1);
        }
        a {
            display: inline-block;
            padding: 0 10px;
            line-height: 30px;
            color: #eee;
            font-size: 13px;
            display: inline-block;
            vertical-align: middle;
            width: 100%;
            box-sizing: border-box;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            &:hover {
                text-decoration: none;
            }
        }
    }
}`,`.dplayer-subtitle {
    position: absolute;
    bottom: 40px;
    width: 90%;
    left: 5%;
    text-align: center;
    color: #fff;
    text-shadow: 0.5px 0.5px 0.5px rgba(0, 0, 0, 0.5);
    font-size: 20px;
    &.dplayer-subtitle-hide {
        display: none;
    }
}`,`.dplayer-mask {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
    display: none;
    &.dplayer-mask-show {
        display: block;
    }
}

.dplayer-video-wrap {
    position: relative;
    background: #000;
    font-size: 0;
    width: 100%;
    height: 100%;
    .dplayer-video {
        width: 100%;
        height: 100%;
        display: none;
    }
    .dplayer-video-current {
        display: block;
    }
    .dplayer-video-prepare {
        display: none;
    }
}`,`.dplayer-info-panel {
    position: absolute;
    top: 10px;
    left: 10px;
    width: 400px;
    background: rgba(28, 28, 28, 0.8);
    padding: 10px;
    color: #fff;
    font-size: 12px;
    border-radius: 2px;

    &-hide {
        display: none;
    }

    .dplayer-info-panel-close {
        cursor: pointer;
        position: absolute;
        right: 10px;
        top: 10px;
    }

    .dplayer-info-panel-item {
        & > span {
            display: inline-block;
            vertical-align: middle;
            line-height: 15px;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
        }
    }

    .dplayer-info-panel-item-title {
        width: 100px;
        text-align: right;
        margin-right: 10px;
    }
    
    .dplayer-info-panel-item-data {
        width: 260px;
    }
}`],sourceRoot:""}]);const R=S},856:o=>{var a=[];function l(u){for(var h=-1,y=0;y<a.length;y++)if(a[y].identifier===u){h=y;break}return h}function c(u,h){for(var y={},m=[],A=0;A<u.length;A++){var b=u[A],S=h.base?b[0]+h.base:b[0],C=y[S]||0,R="".concat(S," ").concat(C);y[S]=C+1;var D=l(R),B={css:b[1],media:b[2],sourceMap:b[3],supports:b[4],layer:b[5]};if(D!==-1)a[D].references++,a[D].updater(B);else{var K=d(B,h);h.byIndex=A,a.splice(A,0,{identifier:R,updater:K,references:1})}m.push(R)}return m}function d(u,h){var y=h.domAPI(h);return y.update(u),function(m){if(m){if(m.css===u.css&&m.media===u.media&&m.sourceMap===u.sourceMap&&m.supports===u.supports&&m.layer===u.layer)return;y.update(u=m)}else y.remove()}}o.exports=function(u,h){var y=c(u=u||[],h=h||{});return function(m){m=m||[];for(var A=0;A<y.length;A++){var b=l(y[A]);a[b].references--}for(var S=c(m,h),C=0;C<y.length;C++){var R=l(y[C]);a[R].references===0&&(a[R].updater(),a.splice(R,1))}y=S}}},370:o=>{var a={};o.exports=function(l,c){var d=function(u){if(a[u]===void 0){var h=document.querySelector(u);if(window.HTMLIFrameElement&&h instanceof window.HTMLIFrameElement)try{h=h.contentDocument.head}catch{h=null}a[u]=h}return a[u]}(l);if(!d)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");d.appendChild(c)}},278:o=>{o.exports=function(a){var l=document.createElement("style");return a.setAttributes(l,a.attributes),a.insert(l,a.options),l}},458:(o,a,l)=>{o.exports=function(c){var d=l.nc;d&&c.setAttribute("nonce",d)}},470:o=>{o.exports=function(a){var l=a.insertStyleElement(a);return{update:function(c){(function(d,u,h){var y="";h.supports&&(y+="@supports (".concat(h.supports,") {")),h.media&&(y+="@media ".concat(h.media," {"));var m=h.layer!==void 0;m&&(y+="@layer".concat(h.layer.length>0?" ".concat(h.layer):""," {")),y+=h.css,m&&(y+="}"),h.media&&(y+="}"),h.supports&&(y+="}");var A=h.sourceMap;A&&typeof btoa<"u"&&(y+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(A))))," */")),u.styleTagTransform(y,d,u.options)})(l,a,c)},remove:function(){(function(c){if(c.parentNode===null)return!1;c.parentNode.removeChild(c)})(l)}}}},488:o=>{o.exports=function(a,l){if(l.styleSheet)l.styleSheet.cssText=a;else{for(;l.firstChild;)l.removeChild(l.firstChild);l.appendChild(document.createTextNode(a))}}},251:o=>{o.exports='<svg viewBox="0 0 288 288" xmlns="http://www.w3.org/2000/svg"><path d="M288 90v96c0 20-16 36-36 36h-10c-16 0-16-24 0-24h10c7 0 12-5 12-12V90c0-7-5-12-12-12H36c-7 0-12 5-12 12v96c0 7 5 12 12 12h10c16 0 16 24 0 24H36c-20 0-36-16-36-36V90c0-20 16-36 36-36h216c20 0 36 16 36 36zm-120 62l48 68c14 20 1 38-20 38H92c-21 0-34-18-20-38l48-68c13-18 35-18 48 0z"></path></svg>'},113:o=>{o.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M16 23c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6-2.691 6-6 6zM16 13c-2.206 0-4 1.794-4 4s1.794 4 4 4c2.206 0 4-1.794 4-4s-1.794-4-4-4zM27 28h-22c-1.654 0-3-1.346-3-3v-16c0-1.654 1.346-3 3-3h3c0.552 0 1 0.448 1 1s-0.448 1-1 1h-3c-0.551 0-1 0.449-1 1v16c0 0.552 0.449 1 1 1h22c0.552 0 1-0.448 1-1v-16c0-0.551-0.448-1-1-1h-11c-0.552 0-1-0.448-1-1s0.448-1 1-1h11c1.654 0 3 1.346 3 3v16c0 1.654-1.346 3-3 3zM24 10.5c0 0.828 0.672 1.5 1.5 1.5s1.5-0.672 1.5-1.5c0-0.828-0.672-1.5-1.5-1.5s-1.5 0.672-1.5 1.5zM15 4c0 0.552-0.448 1-1 1h-4c-0.552 0-1-0.448-1-1v0c0-0.552 0.448-1 1-1h4c0.552 0 1 0.448 1 1v0z"></path></svg>'},193:o=>{o.exports='<svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="chromecast" class="svg-inline--fa fa-chromecast fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M447.8,64H64c-23.6,0-42.7,19.1-42.7,42.7v63.9H64v-63.9h383.8v298.6H298.6V448H448c23.6,0,42.7-19.1,42.7-42.7V106.7 C490.7,83.1,471.4,64,447.8,64z M21.3,383.6L21.3,383.6l0,63.9h63.9C85.2,412.2,56.6,383.6,21.3,383.6L21.3,383.6z M21.3,298.6V341 c58.9,0,106.6,48.1,106.6,107h42.7C170.7,365.6,103.7,298.7,21.3,298.6z M213.4,448h42.7c-0.5-129.5-105.3-234.3-234.8-234.6l0,42.4 C127.3,255.6,213.3,342,213.4,448z"></path></svg>'},338:o=>{o.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M27.090 0.131h-22.731c-2.354 0-4.262 1.839-4.262 4.109v16.401c0 2.269 1.908 4.109 4.262 4.109h4.262v-2.706h8.469l-8.853 8.135 1.579 1.451 7.487-6.88h9.787c2.353 0 4.262-1.84 4.262-4.109v-16.401c0-2.27-1.909-4.109-4.262-4.109v0zM28.511 19.304c0 1.512-1.272 2.738-2.841 2.738h-8.425l-0.076-0.070-0.076 0.070h-11.311c-1.569 0-2.841-1.226-2.841-2.738v-13.696c0-1.513 1.272-2.739 2.841-2.739h19.889c1.569 0 2.841-0.142 2.841 1.37v15.064z"></path></svg>'},807:o=>{o.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M27.128 0.38h-22.553c-2.336 0-4.229 1.825-4.229 4.076v16.273c0 2.251 1.893 4.076 4.229 4.076h4.229v-2.685h8.403l-8.784 8.072 1.566 1.44 7.429-6.827h9.71c2.335 0 4.229-1.825 4.229-4.076v-16.273c0-2.252-1.894-4.076-4.229-4.076zM28.538 19.403c0 1.5-1.262 2.717-2.819 2.717h-8.36l-0.076-0.070-0.076 0.070h-11.223c-1.557 0-2.819-1.217-2.819-2.717v-13.589c0-1.501 1.262-2.718 2.819-2.718h19.734c1.557 0 2.819-0.141 2.819 1.359v14.947zM9.206 10.557c-1.222 0-2.215 0.911-2.215 2.036s0.992 2.035 2.215 2.035c1.224 0 2.216-0.911 2.216-2.035s-0.992-2.036-2.216-2.036zM22.496 10.557c-1.224 0-2.215 0.911-2.215 2.036s0.991 2.035 2.215 2.035c1.224 0 2.215-0.911 2.215-2.035s-0.991-2.036-2.215-2.036zM15.852 10.557c-1.224 0-2.215 0.911-2.215 2.036s0.991 2.035 2.215 2.035c1.222 0 2.215-0.911 2.215-2.035s-0.992-2.036-2.215-2.036z"></path></svg>'},300:o=>{o.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 33"><path d="M24.965 24.38h-18.132c-1.366 0-2.478-1.113-2.478-2.478v-11.806c0-1.364 1.111-2.478 2.478-2.478h18.132c1.366 0 2.478 1.113 2.478 2.478v11.806c0 1.364-1.11 2.478-2.478 2.478zM6.833 10.097v11.806h18.134l-0.002-11.806h-18.132zM2.478 28.928h5.952c0.684 0 1.238-0.554 1.238-1.239 0-0.684-0.554-1.238-1.238-1.238h-5.952v-5.802c0-0.684-0.554-1.239-1.238-1.239s-1.239 0.556-1.239 1.239v5.802c0 1.365 1.111 2.478 2.478 2.478zM30.761 19.412c-0.684 0-1.238 0.554-1.238 1.238v5.801h-5.951c-0.686 0-1.239 0.554-1.239 1.238 0 0.686 0.554 1.239 1.239 1.239h5.951c1.366 0 2.478-1.111 2.478-2.478v-5.801c0-0.683-0.554-1.238-1.239-1.238zM0 5.55v5.802c0 0.683 0.554 1.238 1.238 1.238s1.238-0.555 1.238-1.238v-5.802h5.952c0.684 0 1.238-0.554 1.238-1.238s-0.554-1.238-1.238-1.238h-5.951c-1.366-0.001-2.478 1.111-2.478 2.476zM32 11.35v-5.801c0-1.365-1.11-2.478-2.478-2.478h-5.951c-0.686 0-1.239 0.554-1.239 1.238s0.554 1.238 1.239 1.238h5.951v5.801c0 0.683 0.554 1.237 1.238 1.237 0.686 0.002 1.239-0.553 1.239-1.236z"></path></svg>'},574:o=>{o.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 33"><path d="M6.667 28h-5.333c-0.8 0-1.333-0.533-1.333-1.333v-5.333c0-0.8 0.533-1.333 1.333-1.333s1.333 0.533 1.333 1.333v4h4c0.8 0 1.333 0.533 1.333 1.333s-0.533 1.333-1.333 1.333zM30.667 28h-5.333c-0.8 0-1.333-0.533-1.333-1.333s0.533-1.333 1.333-1.333h4v-4c0-0.8 0.533-1.333 1.333-1.333s1.333 0.533 1.333 1.333v5.333c0 0.8-0.533 1.333-1.333 1.333zM30.667 12c-0.8 0-1.333-0.533-1.333-1.333v-4h-4c-0.8 0-1.333-0.533-1.333-1.333s0.533-1.333 1.333-1.333h5.333c0.8 0 1.333 0.533 1.333 1.333v5.333c0 0.8-0.533 1.333-1.333 1.333zM1.333 12c-0.8 0-1.333-0.533-1.333-1.333v-5.333c0-0.8 0.533-1.333 1.333-1.333h5.333c0.8 0 1.333 0.533 1.333 1.333s-0.533 1.333-1.333 1.333h-4v4c0 0.8-0.533 1.333-1.333 1.333z"></path></svg>'},182:o=>{o.exports='<svg version="1.1" viewBox="0 0 22 22"><svg x="7" y="1"><circle class="diplayer-loading-dot diplayer-loading-dot-0" cx="4" cy="4" r="2"></circle></svg><svg x="11" y="3"><circle class="diplayer-loading-dot diplayer-loading-dot-1" cx="4" cy="4" r="2"></circle></svg><svg x="13" y="7"><circle class="diplayer-loading-dot diplayer-loading-dot-2" cx="4" cy="4" r="2"></circle></svg><svg x="11" y="11"><circle class="diplayer-loading-dot diplayer-loading-dot-3" cx="4" cy="4" r="2"></circle></svg><svg x="7" y="13"><circle class="diplayer-loading-dot diplayer-loading-dot-4" cx="4" cy="4" r="2"></circle></svg><svg x="3" y="11"><circle class="diplayer-loading-dot diplayer-loading-dot-5" cx="4" cy="4" r="2"></circle></svg><svg x="1" y="7"><circle class="diplayer-loading-dot diplayer-loading-dot-6" cx="4" cy="4" r="2"></circle></svg><svg x="3" y="3"><circle class="diplayer-loading-dot diplayer-loading-dot-7" cx="4" cy="4" r="2"></circle></svg></svg>'},965:o=>{o.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M19.357 2.88c1.749 0 3.366 0.316 4.851 0.946 1.485 0.632 2.768 1.474 3.845 2.533s1.922 2.279 2.532 3.661c0.611 1.383 0.915 2.829 0.915 4.334 0 1.425-0.304 2.847-0.915 4.271-0.611 1.425-1.587 2.767-2.928 4.028-0.855 0.813-1.811 1.607-2.869 2.38s-2.136 1.465-3.233 2.075c-1.099 0.61-2.198 1.098-3.296 1.465-1.098 0.366-2.115 0.549-3.051 0.549-1.343 0-2.441-0.438-3.296-1.311-0.854-0.876-1.281-2.41-1.281-4.608 0-0.366 0.020-0.773 0.060-1.221s0.062-0.895 0.062-1.343c0-0.773-0.183-1.353-0.55-1.738-0.366-0.387-0.793-0.58-1.281-0.58-0.652 0-1.21 0.295-1.678 0.886s-0.926 1.23-1.373 1.921c-0.447 0.693-0.905 1.334-1.372 1.923s-1.028 0.886-1.679 0.886c-0.529 0-1.048-0.427-1.556-1.282s-0.763-2.259-0.763-4.212c0-2.197 0.529-4.241 1.587-6.133s2.462-3.529 4.21-4.912c1.75-1.383 3.762-2.471 6.041-3.264 2.277-0.796 4.617-1.212 7.018-1.253zM7.334 15.817c0.569 0 1.047-0.204 1.434-0.611s0.579-0.875 0.579-1.404c0-0.569-0.193-1.047-0.579-1.434s-0.864-0.579-1.434-0.579c-0.529 0-0.987 0.193-1.373 0.579s-0.58 0.864-0.58 1.434c0 0.53 0.194 0.998 0.58 1.404 0.388 0.407 0.845 0.611 1.373 0.611zM12.216 11.79c0.691 0 1.292-0.254 1.8-0.763s0.762-1.107 0.762-1.8c0-0.732-0.255-1.343-0.762-1.831-0.509-0.489-1.109-0.732-1.8-0.732-0.732 0-1.342 0.244-1.831 0.732-0.488 0.488-0.732 1.098-0.732 1.831 0 0.693 0.244 1.292 0.732 1.8s1.099 0.763 1.831 0.763zM16.366 25.947c0.692 0 1.282-0.214 1.77-0.64s0.732-0.987 0.732-1.678-0.244-1.261-0.732-1.709c-0.489-0.448-1.078-0.671-1.77-0.671-0.65 0-1.21 0.223-1.678 0.671s-0.702 1.018-0.702 1.709c0 0.692 0.234 1.25 0.702 1.678s1.027 0.64 1.678 0.64zM19.113 9.592c0.651 0 1.129-0.203 1.433-0.611 0.305-0.406 0.459-0.874 0.459-1.404 0-0.488-0.154-0.947-0.459-1.373-0.304-0.427-0.782-0.641-1.433-0.641-0.529 0-1.008 0.193-1.434 0.58s-0.64 0.865-0.64 1.434c0 0.571 0.213 1.049 0.64 1.434 0.427 0.389 0.905 0.581 1.434 0.581zM24.848 12.826c0.57 0 1.067-0.213 1.495-0.64 0.427-0.427 0.64-0.947 0.64-1.556 0-0.57-0.214-1.068-0.64-1.495-0.428-0.427-0.927-0.64-1.495-0.64-0.611 0-1.129 0.213-1.555 0.64-0.428 0.427-0.642 0.926-0.642 1.495 0 0.611 0.213 1.129 0.642 1.556s0.947 0.64 1.555 0.64z"></path></svg>'},74:o=>{o.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 17 32"><path d="M14.080 4.8q2.88 0 2.88 2.048v18.24q0 2.112-2.88 2.112t-2.88-2.112v-18.24q0-2.048 2.88-2.048zM2.88 4.8q2.88 0 2.88 2.048v18.24q0 2.112-2.88 2.112t-2.88-2.112v-18.24q0-2.048 2.88-2.048z"></path></svg>'},730:o=>{o.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 16 32"><path d="M15.552 15.168q0.448 0.32 0.448 0.832 0 0.448-0.448 0.768l-13.696 8.512q-0.768 0.512-1.312 0.192t-0.544-1.28v-16.448q0-0.96 0.544-1.28t1.312 0.192z"></path></svg>'},428:o=>{o.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M22 16l-10.105-10.6-1.895 1.987 8.211 8.613-8.211 8.612 1.895 1.988 8.211-8.613z"></path></svg>'},254:o=>{o.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M13.725 30l3.9-5.325-3.9-1.125v6.45zM0 17.5l11.050 3.35 13.6-11.55-10.55 12.425 11.8 3.65 6.1-23.375-32 15.5z"></path></svg>'},934:o=>{o.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 28"><path d="M28.633 17.104c0.035 0.21 0.026 0.463-0.026 0.76s-0.14 0.598-0.262 0.904c-0.122 0.306-0.271 0.581-0.445 0.825s-0.367 0.419-0.576 0.524c-0.209 0.105-0.393 0.157-0.55 0.157s-0.332-0.035-0.524-0.105c-0.175-0.052-0.393-0.1-0.655-0.144s-0.528-0.052-0.799-0.026c-0.271 0.026-0.541 0.083-0.812 0.17s-0.502 0.236-0.694 0.445c-0.419 0.437-0.664 0.934-0.734 1.493s0.009 1.092 0.236 1.598c0.175 0.349 0.148 0.699-0.079 1.048-0.105 0.14-0.271 0.284-0.498 0.432s-0.476 0.284-0.747 0.406-0.555 0.218-0.851 0.288c-0.297 0.070-0.559 0.105-0.786 0.105-0.157 0-0.306-0.061-0.445-0.183s-0.236-0.253-0.288-0.393h-0.026c-0.192-0.541-0.52-1.009-0.982-1.402s-1-0.589-1.611-0.589c-0.594 0-1.131 0.197-1.611 0.589s-0.816 0.851-1.009 1.375c-0.087 0.21-0.218 0.362-0.393 0.458s-0.367 0.144-0.576 0.144c-0.244 0-0.52-0.044-0.825-0.131s-0.611-0.197-0.917-0.327c-0.306-0.131-0.581-0.284-0.825-0.458s-0.428-0.349-0.55-0.524c-0.087-0.122-0.135-0.266-0.144-0.432s0.057-0.397 0.197-0.694c0.192-0.402 0.266-0.86 0.223-1.375s-0.266-0.991-0.668-1.428c-0.244-0.262-0.541-0.432-0.891-0.511s-0.681-0.109-0.995-0.092c-0.367 0.017-0.742 0.087-1.127 0.21-0.244 0.070-0.489 0.052-0.734-0.052-0.192-0.070-0.371-0.231-0.537-0.485s-0.314-0.533-0.445-0.838c-0.131-0.306-0.231-0.62-0.301-0.943s-0.087-0.59-0.052-0.799c0.052-0.384 0.227-0.629 0.524-0.734 0.524-0.21 0.995-0.555 1.415-1.035s0.629-1.017 0.629-1.611c0-0.611-0.21-1.144-0.629-1.598s-0.891-0.786-1.415-0.996c-0.157-0.052-0.288-0.179-0.393-0.38s-0.157-0.406-0.157-0.616c0-0.227 0.035-0.48 0.105-0.76s0.162-0.55 0.275-0.812 0.244-0.502 0.393-0.72c0.148-0.218 0.31-0.38 0.485-0.485 0.14-0.087 0.275-0.122 0.406-0.105s0.275 0.052 0.432 0.105c0.524 0.21 1.070 0.275 1.637 0.197s1.070-0.327 1.506-0.747c0.21-0.209 0.362-0.467 0.458-0.773s0.157-0.607 0.183-0.904c0.026-0.297 0.026-0.568 0-0.812s-0.048-0.419-0.065-0.524c-0.035-0.105-0.066-0.227-0.092-0.367s-0.013-0.262 0.039-0.367c0.105-0.244 0.293-0.458 0.563-0.642s0.563-0.336 0.878-0.458c0.314-0.122 0.62-0.214 0.917-0.275s0.533-0.092 0.707-0.092c0.227 0 0.406 0.074 0.537 0.223s0.223 0.301 0.275 0.458c0.192 0.471 0.507 0.886 0.943 1.244s0.952 0.537 1.546 0.537c0.611 0 1.153-0.17 1.624-0.511s0.803-0.773 0.996-1.297c0.070-0.14 0.179-0.284 0.327-0.432s0.301-0.223 0.458-0.223c0.244 0 0.511 0.035 0.799 0.105s0.572 0.166 0.851 0.288c0.279 0.122 0.537 0.279 0.773 0.472s0.423 0.402 0.563 0.629c0.087 0.14 0.113 0.293 0.079 0.458s-0.070 0.284-0.105 0.354c-0.227 0.506-0.297 1.039-0.21 1.598s0.341 1.048 0.76 1.467c0.419 0.419 0.934 0.651 1.546 0.694s1.179-0.057 1.703-0.301c0.14-0.087 0.31-0.122 0.511-0.105s0.371 0.096 0.511 0.236c0.262 0.244 0.493 0.616 0.694 1.113s0.336 1 0.406 1.506c0.035 0.297-0.013 0.528-0.144 0.694s-0.266 0.275-0.406 0.327c-0.542 0.192-1.004 0.528-1.388 1.009s-0.576 1.026-0.576 1.637c0 0.594 0.162 1.113 0.485 1.559s0.747 0.764 1.27 0.956c0.122 0.070 0.227 0.14 0.314 0.21 0.192 0.157 0.323 0.358 0.393 0.602v0zM16.451 19.462c0.786 0 1.528-0.149 2.227-0.445s1.305-0.707 1.821-1.231c0.515-0.524 0.921-1.131 1.218-1.821s0.445-1.428 0.445-2.214c0-0.786-0.148-1.524-0.445-2.214s-0.703-1.292-1.218-1.808c-0.515-0.515-1.122-0.921-1.821-1.218s-1.441-0.445-2.227-0.445c-0.786 0-1.524 0.148-2.214 0.445s-1.292 0.703-1.808 1.218c-0.515 0.515-0.921 1.118-1.218 1.808s-0.445 1.428-0.445 2.214c0 0.786 0.149 1.524 0.445 2.214s0.703 1.297 1.218 1.821c0.515 0.524 1.118 0.934 1.808 1.231s1.428 0.445 2.214 0.445v0z"></path></svg>'},410:o=>{o.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M26.667 5.333h-21.333c-0 0-0.001 0-0.001 0-1.472 0-2.666 1.194-2.666 2.666 0 0 0 0.001 0 0.001v-0 16c0 0 0 0.001 0 0.001 0 1.472 1.194 2.666 2.666 2.666 0 0 0.001 0 0.001 0h21.333c0 0 0.001 0 0.001 0 1.472 0 2.666-1.194 2.666-2.666 0-0 0-0.001 0-0.001v0-16c0-0 0-0.001 0-0.001 0-1.472-1.194-2.666-2.666-2.666-0 0-0.001 0-0.001 0h0zM5.333 16h5.333v2.667h-5.333v-2.667zM18.667 24h-13.333v-2.667h13.333v2.667zM26.667 24h-5.333v-2.667h5.333v2.667zM26.667 18.667h-13.333v-2.667h13.333v2.667z"></path></svg>'},644:o=>{o.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 21 32"><path d="M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8zM20.576 16q0 1.344-0.768 2.528t-2.016 1.664q-0.16 0.096-0.448 0.096-0.448 0-0.8-0.32t-0.32-0.832q0-0.384 0.192-0.64t0.544-0.448 0.608-0.384 0.512-0.64 0.192-1.024-0.192-1.024-0.512-0.64-0.608-0.384-0.544-0.448-0.192-0.64q0-0.48 0.32-0.832t0.8-0.32q0.288 0 0.448 0.096 1.248 0.48 2.016 1.664t0.768 2.528z"></path></svg>'},324:o=>{o.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 21 32"><path d="M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8z"></path></svg>'},437:o=>{o.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 21 32"><path d="M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8zM20.576 16q0 1.344-0.768 2.528t-2.016 1.664q-0.16 0.096-0.448 0.096-0.448 0-0.8-0.32t-0.32-0.832q0-0.384 0.192-0.64t0.544-0.448 0.608-0.384 0.512-0.64 0.192-1.024-0.192-1.024-0.512-0.64-0.608-0.384-0.544-0.448-0.192-0.64q0-0.48 0.32-0.832t0.8-0.32q0.288 0 0.448 0.096 1.248 0.48 2.016 1.664t0.768 2.528zM25.152 16q0 2.72-1.536 5.056t-4 3.36q-0.256 0.096-0.448 0.096-0.48 0-0.832-0.352t-0.32-0.8q0-0.704 0.672-1.056 1.024-0.512 1.376-0.8 1.312-0.96 2.048-2.4t0.736-3.104-0.736-3.104-2.048-2.4q-0.352-0.288-1.376-0.8-0.672-0.352-0.672-1.056 0-0.448 0.32-0.8t0.8-0.352q0.224 0 0.48 0.096 2.496 1.056 4 3.36t1.536 5.056z"></path></svg>'},897:(o,a,l)=>{var c=typeof self<"u"?self:typeof window<"u"?window:l.g!==void 0?l.g:{},d=Object.create(c),u=/["&'<>]/;function h(y){return typeof y!="string"&&(y=y==null?"":typeof y=="function"?h(y.call(y)):JSON.stringify(y)),y}d.$escape=function(y){return function(m){var A=""+m,b=u.exec(A);if(!b)return m;var S="",C=void 0,R=void 0,D=void 0;for(C=b.index,R=0;C<A.length;C++){switch(A.charCodeAt(C)){case 34:D="&#34;";break;case 38:D="&#38;";break;case 39:D="&#39;";break;case 60:D="&#60;";break;case 62:D="&#62;";break;default:continue}R!==C&&(S+=A.substring(R,C)),R=C+1,S+=D}return R!==C?S+A.substring(R,C):S}(h(y))},d.$each=function(y,m){if(Array.isArray(y))for(var A=0,b=y.length;A<b;A++)m(y[A],A);else for(var S in y)m(y[S],S)},o.exports=d},471:(o,a,l)=>{o.exports=l(897)},352:o=>{o.exports=function(a){var l=[];return l.toString=function(){return this.map(function(c){var d="",u=c[5]!==void 0;return c[4]&&(d+="@supports (".concat(c[4],") {")),c[2]&&(d+="@media ".concat(c[2]," {")),u&&(d+="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {")),d+=a(c),u&&(d+="}"),c[2]&&(d+="}"),c[4]&&(d+="}"),d}).join("")},l.i=function(c,d,u,h,y){typeof c=="string"&&(c=[[null,c,void 0]]);var m={};if(u)for(var A=0;A<this.length;A++){var b=this[A][0];b!=null&&(m[b]=!0)}for(var S=0;S<c.length;S++){var C=[].concat(c[S]);u&&m[C[0]]||(y!==void 0&&(C[5]===void 0||(C[1]="@layer".concat(C[5].length>0?" ".concat(C[5]):""," {").concat(C[1],"}")),C[5]=y),d&&(C[2]&&(C[1]="@media ".concat(C[2]," {").concat(C[1],"}")),C[2]=d),h&&(C[4]?(C[1]="@supports (".concat(C[4],") {").concat(C[1],"}"),C[4]=h):C[4]="".concat(h)),l.push(C))}},l}},80:o=>{o.exports=function(a,l){return l||(l={}),a&&(a=String(a.__esModule?a.default:a),/^['"].*['"]$/.test(a)&&(a=a.slice(1,-1)),l.hash&&(a+=l.hash),/["'() \t\n]|(%20)/.test(a)||l.needQuotes?'"'.concat(a.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):a)}},415:o=>{o.exports=function(a){var l=a[1],c=a[3];if(!c)return l;if(typeof btoa=="function"){var d=btoa(unescape(encodeURIComponent(JSON.stringify(c)))),u="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(d),h="/*# ".concat(u," */");return[l].concat([h]).join(`
`)}return[l].join(`
`)}},937:o=>{function a(l){return a=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(c){return typeof c}:function(c){return c&&typeof Symbol=="function"&&c.constructor===Symbol&&c!==Symbol.prototype?"symbol":typeof c},a(l)}o.exports=(typeof self>"u"?"undefined":a(self))=="object"?self.FormData:window.FormData},831:o=>{o.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAADGCAYAAAAT+OqFAAAAdklEQVQoz42QQQ7AIAgEF/T/D+kbq/RWAlnQyyazA4aoAB4FsBSA/bFjuF1EOL7VbrIrBuusmrt4ZZORfb6ehbWdnRHEIiITaEUKa5EJqUakRSaEYBJSCY2dEstQY7AuxahwXFrvZmWl2rh4JZ07z9dLtesfNj5q0FU3A5ObbwAAAABJRU5ErkJggg=="}},r={};function i(o){var a=r[o];if(a!==void 0)return a.exports;var l=r[o]={id:o,exports:{}};return t[o](l,l.exports,i),l.exports}i.m=t,i.n=o=>{var a=o&&o.__esModule?()=>o.default:()=>o;return i.d(a,{a}),a},i.d=(o,a)=>{for(var l in a)i.o(a,l)&&!i.o(o,l)&&Object.defineProperty(o,l,{enumerable:!0,get:a[l]})},i.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}}(),i.o=(o,a)=>Object.prototype.hasOwnProperty.call(o,a),i.b=document.baseURI||self.location.href,i.nc=void 0;var s={};return(()=>{i.d(s,{default:()=>$m});var o=i(856),a=i.n(o),l=i(470),c=i.n(l),d=i(370),u=i.n(d),h=i(458),y=i.n(h),m=i(278),A=i.n(m),b=i(488),S=i.n(b),C=i(685),R={};R.styleTagTransform=S(),R.setAttributes=y(),R.insert=u().bind(null,"head"),R.domAPI=c(),R.insertStyleElement=A(),a()(C.Z,R),C.Z&&C.Z.locals&&C.Z.locals;function D(p){return D=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(g){return typeof g}:function(g){return g&&typeof Symbol=="function"&&g.constructor===Symbol&&g!==Symbol.prototype?"symbol":typeof g},D(p)}function B(p,g){this.name="AggregateError",this.errors=p,this.message=g||""}B.prototype=Error.prototype;function K(p){return K=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(g){return typeof g}:function(g){return g&&typeof Symbol=="function"&&g.constructor===Symbol&&g!==Symbol.prototype?"symbol":typeof g},K(p)}var N=setTimeout;function z(p){return!!(p&&p.length!==void 0)}function Z(){}function O(p){if(!(this instanceof O))throw new TypeError("Promises must be constructed via new");if(typeof p!="function")throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],H(p,this)}function ee(p,g){for(;p._state===3;)p=p._value;p._state!==0?(p._handled=!0,O._immediateFn(function(){var E=p._state===1?g.onFulfilled:g.onRejected;if(E!==null){var f;try{f=E(p._value)}catch(v){return void ce(g.promise,v)}_e(g.promise,f)}else(p._state===1?_e:ce)(g.promise,p._value)})):p._deferreds.push(g)}function _e(p,g){try{if(g===p)throw new TypeError("A promise cannot be resolved with itself.");if(g&&(K(g)==="object"||typeof g=="function")){var E=g.then;if(g instanceof O)return p._state=3,p._value=g,void Y(p);if(typeof E=="function")return void H((f=E,v=g,function(){f.apply(v,arguments)}),p)}p._state=1,p._value=g,Y(p)}catch(x){ce(p,x)}var f,v}function ce(p,g){p._state=2,p._value=g,Y(p)}function Y(p){p._state===2&&p._deferreds.length===0&&O._immediateFn(function(){p._handled||O._unhandledRejectionFn(p._value)});for(var g=0,E=p._deferreds.length;g<E;g++)ee(p,p._deferreds[g]);p._deferreds=null}function re(p,g,E){this.onFulfilled=typeof p=="function"?p:null,this.onRejected=typeof g=="function"?g:null,this.promise=E}function H(p,g){var E=!1;try{p(function(f){E||(E=!0,_e(g,f))},function(f){E||(E=!0,ce(g,f))})}catch(f){if(E)return;E=!0,ce(g,f)}}O.prototype.catch=function(p){return this.then(null,p)},O.prototype.then=function(p,g){var E=new this.constructor(Z);return ee(this,new re(p,g,E)),E},O.prototype.finally=function(p){var g=this.constructor;return this.then(function(E){return g.resolve(p()).then(function(){return E})},function(E){return g.resolve(p()).then(function(){return g.reject(E)})})},O.all=function(p){return new O(function(g,E){if(!z(p))return E(new TypeError("Promise.all accepts an array"));var f=Array.prototype.slice.call(p);if(f.length===0)return g([]);var v=f.length;function x(L,k){try{if(k&&(K(k)==="object"||typeof k=="function")){var $=k.then;if(typeof $=="function")return void $.call(k,function(q){x(L,q)},E)}f[L]=k,--v==0&&g(f)}catch(q){E(q)}}for(var _=0;_<f.length;_++)x(_,f[_])})},O.any=function(p){var g=this;return new g(function(E,f){if(!p||p.length===void 0)return f(new TypeError("Promise.any accepts an array"));var v=Array.prototype.slice.call(p);if(v.length===0)return f();for(var x=[],_=0;_<v.length;_++)try{g.resolve(v[_]).then(E).catch(function(L){x.push(L),x.length===v.length&&f(new B(x,"All promises were rejected"))})}catch(L){f(L)}})},O.allSettled=function(p){return new this(function(g,E){if(!p||p.length===void 0)return E(new TypeError(D(p)+" "+p+" is not iterable(cannot read property Symbol(Symbol.iterator))"));var f=Array.prototype.slice.call(p);if(f.length===0)return g([]);var v=f.length;function x(L,k){if(k&&(D(k)==="object"||typeof k=="function")){var $=k.then;if(typeof $=="function")return void $.call(k,function(q){x(L,q)},function(q){f[L]={status:"rejected",reason:q},--v==0&&g(f)})}f[L]={status:"fulfilled",value:k},--v==0&&g(f)}for(var _=0;_<f.length;_++)x(_,f[_])})},O.resolve=function(p){return p&&K(p)==="object"&&p.constructor===O?p:new O(function(g){g(p)})},O.reject=function(p){return new O(function(g,E){E(p)})},O.race=function(p){return new O(function(g,E){if(!z(p))return E(new TypeError("Promise.race accepts an array"));for(var f=0,v=p.length;f<v;f++)O.resolve(p[f]).then(g,E)})},O._immediateFn=typeof setImmediate=="function"&&function(p){setImmediate(p)}||function(p){N(p,0)},O._unhandledRejectionFn=function(p){typeof console<"u"&&console&&console.warn("Possible Unhandled Promise Rejection:",p)};const Q=O;var ae=/mobile/i.test(window.navigator.userAgent);const j={secondToTime:function(p){if((p=p||0)===0||p===1/0||p.toString()==="NaN")return"00:00";var g=Math.floor(p/3600),E=Math.floor((p-3600*g)/60),f=Math.floor(p-3600*g-60*E);return(g>0?[g,E,f]:[E,f]).map(function(v){return v<10?"0"+v:""+v}).join(":")},getElementViewLeft:function(p){var g=p.offsetLeft,E=p.offsetParent,f=document.body.scrollLeft+document.documentElement.scrollLeft;if(document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement)for(;E!==null&&E!==p;)g+=E.offsetLeft,E=E.offsetParent;else for(;E!==null;)g+=E.offsetLeft,E=E.offsetParent;return g-f},getBoundingClientRectViewLeft:function(p){var g=window.scrollY||window.pageYOffset||document.body.scrollTop+(document.documentElement&&document.documentElement.scrollTop||0);if(p.getBoundingClientRect){if(typeof this.getBoundingClientRectViewLeft.offset!="number"){var E=document.createElement("div");E.style.cssText="position:absolute;top:0;left:0;",document.body.appendChild(E),this.getBoundingClientRectViewLeft.offset=-E.getBoundingClientRect().top-g,document.body.removeChild(E),E=null}var f=p.getBoundingClientRect(),v=this.getBoundingClientRectViewLeft.offset;return f.left+v}return this.getElementViewLeft(p)},getScrollPosition:function(){return{left:window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0,top:window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0}},setScrollPosition:function(p){var g=p.left,E=g===void 0?0:g,f=p.top,v=f===void 0?0:f;this.isFirefox?(document.documentElement.scrollLeft=E,document.documentElement.scrollTop=v):window.scrollTo(E,v)},isMobile:ae,isFirefox:/firefox/i.test(window.navigator.userAgent),isChrome:/chrome/i.test(window.navigator.userAgent),isSafari:/safari/i.test(window.navigator.userAgent),storage:{set:function(p,g){localStorage.setItem(p,g)},get:function(p){return localStorage.getItem(p)}},nameMap:{dragStart:ae?"touchstart":"mousedown",dragMove:ae?"touchmove":"mousemove",dragEnd:ae?"touchend":"mouseup"},color2Number:function(p){return p[0]==="#"&&(p=p.substr(1)),p.length===3&&(p="".concat(p[0]).concat(p[0]).concat(p[1]).concat(p[1]).concat(p[2]).concat(p[2])),parseInt(p,16)+0&16777215},number2Color:function(p){return"#"+("00000"+p.toString(16)).slice(-6)},number2Type:function(p){switch(p){case 0:default:return"right";case 1:return"top";case 2:return"bottom"}}};function de(p,g){return function(){return p.apply(g,arguments)}}function Re(p){return Re=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(g){return typeof g}:function(g){return g&&typeof Symbol=="function"&&g.constructor===Symbol&&g!==Symbol.prototype?"symbol":typeof g},Re(p)}var Se,$e=Object.prototype.toString,Xe=Object.getPrototypeOf,it=(Se=Object.create(null),function(p){var g=$e.call(p);return Se[g]||(Se[g]=g.slice(8,-1).toLowerCase())}),Fe=function(p){return p=p.toLowerCase(),function(g){return it(g)===p}},V=function(p){return function(g){return Re(g)===p}},ge=Array.isArray,ue=V("undefined"),Te=Fe("ArrayBuffer"),Qe=V("string"),I=V("function"),P=V("number"),F=function(p){return p!==null&&Re(p)==="object"},W=function(p){if(it(p)!=="object")return!1;var g=Xe(p);return!(g!==null&&g!==Object.prototype&&Object.getPrototypeOf(g)!==null||Symbol.toStringTag in p||Symbol.iterator in p)},te=Fe("Date"),se=Fe("File"),ve=Fe("Blob"),he=Fe("FileList"),me=Fe("URLSearchParams");function ie(p,g){var E,f,v=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},x=v.allOwnKeys,_=x!==void 0&&x;if(p!=null)if(Re(p)!=="object"&&(p=[p]),ge(p))for(E=0,f=p.length;E<f;E++)g.call(null,p[E],E,p);else{var L,k=_?Object.getOwnPropertyNames(p):Object.keys(p),$=k.length;for(E=0;E<$;E++)L=k[E],g.call(null,p[L],L,p)}}function Ce(p,g){g=g.toLowerCase();for(var E,f=Object.keys(p),v=f.length;v-- >0;)if(g===(E=f[v]).toLowerCase())return E;return null}var Ee,Le,Pe=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:L2,He=function(p){return!ue(p)&&p!==Pe},tt=(Ee=typeof Uint8Array<"u"&&Xe(Uint8Array),function(p){return Ee&&p instanceof Ee}),Ze=Fe("HTMLFormElement"),dt=(Le=Object.prototype.hasOwnProperty,function(p,g){return Le.call(p,g)}),Kt=Fe("RegExp"),_n=function(p,g){var E=Object.getOwnPropertyDescriptors(p),f={};ie(E,function(v,x){g(v,x,p)!==!1&&(f[x]=v)}),Object.defineProperties(p,f)};const X={isArray:ge,isArrayBuffer:Te,isBuffer:function(p){return p!==null&&!ue(p)&&p.constructor!==null&&!ue(p.constructor)&&I(p.constructor.isBuffer)&&p.constructor.isBuffer(p)},isFormData:function(p){var g="[object FormData]";return p&&(typeof FormData=="function"&&p instanceof FormData||$e.call(p)===g||I(p.toString)&&p.toString()===g)},isArrayBufferView:function(p){return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?ArrayBuffer.isView(p):p&&p.buffer&&Te(p.buffer)},isString:Qe,isNumber:P,isBoolean:function(p){return p===!0||p===!1},isObject:F,isPlainObject:W,isUndefined:ue,isDate:te,isFile:se,isBlob:ve,isRegExp:Kt,isFunction:I,isStream:function(p){return F(p)&&I(p.pipe)},isURLSearchParams:me,isTypedArray:tt,isFileList:he,forEach:ie,merge:function p(){for(var g=He(this)&&this||{},E=g.caseless,f={},v=function(L,k){var $=E&&Ce(f,k)||k;W(f[$])&&W(L)?f[$]=p(f[$],L):W(L)?f[$]=p({},L):ge(L)?f[$]=L.slice():f[$]=L},x=0,_=arguments.length;x<_;x++)arguments[x]&&ie(arguments[x],v);return f},extend:function(p,g,E){var f=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},v=f.allOwnKeys;return ie(g,function(x,_){E&&I(x)?p[_]=de(x,E):p[_]=x},{allOwnKeys:v}),p},trim:function(p){return p.trim?p.trim():p.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")},stripBOM:function(p){return p.charCodeAt(0)===65279&&(p=p.slice(1)),p},inherits:function(p,g,E,f){p.prototype=Object.create(g.prototype,f),p.prototype.constructor=p,Object.defineProperty(p,"super",{value:g.prototype}),E&&Object.assign(p.prototype,E)},toFlatObject:function(p,g,E,f){var v,x,_,L={};if(g=g||{},p==null)return g;do{for(x=(v=Object.getOwnPropertyNames(p)).length;x-- >0;)_=v[x],f&&!f(_,p,g)||L[_]||(g[_]=p[_],L[_]=!0);p=E!==!1&&Xe(p)}while(p&&(!E||E(p,g))&&p!==Object.prototype);return g},kindOf:it,kindOfTest:Fe,endsWith:function(p,g,E){p=String(p),(E===void 0||E>p.length)&&(E=p.length),E-=g.length;var f=p.indexOf(g,E);return f!==-1&&f===E},toArray:function(p){if(!p)return null;if(ge(p))return p;var g=p.length;if(!P(g))return null;for(var E=new Array(g);g-- >0;)E[g]=p[g];return E},forEachEntry:function(p,g){for(var E,f=(p&&p[Symbol.iterator]).call(p);(E=f.next())&&!E.done;){var v=E.value;g.call(p,v[0],v[1])}},matchAll:function(p,g){for(var E,f=[];(E=p.exec(g))!==null;)f.push(E);return f},isHTMLForm:Ze,hasOwnProperty:dt,hasOwnProp:dt,reduceDescriptors:_n,freezeMethods:function(p){_n(p,function(g,E){if(I(p)&&["arguments","caller","callee"].indexOf(E)!==-1)return!1;var f=p[E];I(f)&&(g.enumerable=!1,"writable"in g?g.writable=!1:g.set||(g.set=function(){throw Error("Can not rewrite read-only method '"+E+"'")}))})},toObjectSet:function(p,g){var E={},f=function(v){v.forEach(function(x){E[x]=!0})};return ge(p)?f(p):f(String(p).split(g)),E},toCamelCase:function(p){return p.toLowerCase().replace(/[_-\s]([a-z\d])(\w*)/g,function(g,E,f){return E.toUpperCase()+f})},noop:function(){},toFiniteNumber:function(p,g){return p=+p,Number.isFinite(p)?p:g},findKey:Ce,global:Pe,isContextDefined:He,toJSONObject:function(p){var g=new Array(10);return function E(f,v){if(F(f)){if(g.indexOf(f)>=0)return;if(!("toJSON"in f)){g[v]=f;var x=ge(f)?[]:{};return ie(f,function(_,L){var k=E(_,v+1);!ue(k)&&(x[L]=k)}),g[v]=void 0,x}}return f}(p,0)}};function qt(p,g,E,f,v){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=p,this.name="AxiosError",g&&(this.code=g),E&&(this.config=E),f&&(this.request=f),v&&(this.response=v)}X.inherits(qt,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:X.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var Qr=qt.prototype,kt={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(function(p){kt[p]={value:p}}),Object.defineProperties(qt,kt),Object.defineProperty(Qr,"isAxiosError",{value:!0}),qt.from=function(p,g,E,f,v,x){var _=Object.create(Qr);return X.toFlatObject(p,_,function(L){return L!==Error.prototype},function(L){return L!=="isAxiosError"}),qt.call(_,p.message,g,E,f,v),_.cause=p,_.name=p.name,x&&Object.assign(_,x),_};const Ge=qt,ts=i(937);function Ro(p){return Ro=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(g){return typeof g}:function(g){return g&&typeof Symbol=="function"&&g.constructor===Symbol&&g!==Symbol.prototype?"symbol":typeof g},Ro(p)}function Io(p){return X.isPlainObject(p)||X.isArray(p)}function Jl(p){return X.endsWith(p,"[]")?p.slice(0,-2):p}function ec(p,g,E){return p?p.concat(g).map(function(f,v){return f=Jl(f),!E&&v?"["+f+"]":f}).join(E?".":""):g}var $p=X.toFlatObject(X,{},null,function(p){return/^is[A-Z]/.test(p)});const ns=function(p,g,E){if(!X.isObject(p))throw new TypeError("target must be an object");g=g||new(ts||FormData);var f,v=(E=X.toFlatObject(E,{metaTokens:!0,dots:!1,indexes:!1},!1,function(be,Ae){return!X.isUndefined(Ae[be])})).metaTokens,x=E.visitor||q,_=E.dots,L=E.indexes,k=(E.Blob||typeof Blob<"u"&&Blob)&&(f=g)&&X.isFunction(f.append)&&f[Symbol.toStringTag]==="FormData"&&f[Symbol.iterator];if(!X.isFunction(x))throw new TypeError("visitor must be a function");function $(be){if(be===null)return"";if(X.isDate(be))return be.toISOString();if(!k&&X.isBlob(be))throw new Ge("Blob is not supported. Use a Buffer instead.");return X.isArrayBuffer(be)||X.isTypedArray(be)?k&&typeof Blob=="function"?new Blob([be]):Buffer.from(be):be}function q(be,Ae,pe){var we=be;if(be&&!pe&&Ro(be)==="object"){if(X.endsWith(Ae,"{}"))Ae=v?Ae:Ae.slice(0,-2),be=JSON.stringify(be);else if(X.isArray(be)&&function(Oe){return X.isArray(Oe)&&!Oe.some(Io)}(be)||X.isFileList(be)||X.endsWith(Ae,"[]")&&(we=X.toArray(be)))return Ae=Jl(Ae),we.forEach(function(Oe,yt){!X.isUndefined(Oe)&&Oe!==null&&g.append(L===!0?ec([Ae],yt,_):L===null?Ae:Ae+"[]",$(Oe))}),!1}return!!Io(be)||(g.append(ec(pe,Ae,_),$(be)),!1)}var fe=[],ye=Object.assign($p,{defaultVisitor:q,convertValue:$,isVisitable:Io});if(!X.isObject(p))throw new TypeError("data must be an object");return function be(Ae,pe){if(!X.isUndefined(Ae)){if(fe.indexOf(Ae)!==-1)throw Error("Circular reference detected in "+pe.join("."));fe.push(Ae),X.forEach(Ae,function(we,Oe){(!(X.isUndefined(we)||we===null)&&x.call(g,we,X.isString(Oe)?Oe.trim():Oe,pe,ye))===!0&&be(we,pe?pe.concat(Oe):[Oe])}),fe.pop()}}(p),g};function tc(p){var g={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(p).replace(/[!'()~]|%20|%00/g,function(E){return g[E]})}function nc(p,g){this._pairs=[],p&&ns(p,this,g)}var rc=nc.prototype;rc.append=function(p,g){this._pairs.push([p,g])},rc.toString=function(p){var g=p?function(E){return p.call(this,E,tc)}:tc;return this._pairs.map(function(E){return g(E[0])+"="+g(E[1])},"").join("&")};const ic=nc;function Hp(p){return encodeURIComponent(p).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function sc(p,g,E){if(!g)return p;var f,v=E&&E.encode||Hp,x=E&&E.serialize;if(f=x?x(g,E):X.isURLSearchParams(g)?g.toString():new ic(g,E).toString(v)){var _=p.indexOf("#");_!==-1&&(p=p.slice(0,_)),p+=(p.indexOf("?")===-1?"?":"&")+f}return p}function Xr(p){return Xr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(g){return typeof g}:function(g){return g&&typeof Symbol=="function"&&g.constructor===Symbol&&g!==Symbol.prototype?"symbol":typeof g},Xr(p)}function Gp(p,g){for(var E=0;E<g.length;E++){var f=g[E];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(p,(v=function(x,_){if(Xr(x)!=="object"||x===null)return x;var L=x[Symbol.toPrimitive];if(L!==void 0){var k=L.call(x,"string");if(Xr(k)!=="object")return k;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(x)}(f.key),Xr(v)==="symbol"?v:String(v)),f)}var v}var Kp=function(){function p(){(function(f,v){if(!(f instanceof v))throw new TypeError("Cannot call a class as a function")})(this,p),this.handlers=[]}var g,E;return g=p,E=[{key:"use",value:function(f,v,x){return this.handlers.push({fulfilled:f,rejected:v,synchronous:!!x&&x.synchronous,runWhen:x?x.runWhen:null}),this.handlers.length-1}},{key:"eject",value:function(f){this.handlers[f]&&(this.handlers[f]=null)}},{key:"clear",value:function(){this.handlers&&(this.handlers=[])}},{key:"forEach",value:function(f){X.forEach(this.handlers,function(v){v!==null&&f(v)})}}],E&&Gp(g.prototype,E),Object.defineProperty(g,"prototype",{writable:!1}),p}();const oc=Kp,ac={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},zp=typeof URLSearchParams<"u"?URLSearchParams:ic,qp=FormData;var Do,jp=(typeof navigator>"u"||(Do=navigator.product)!=="ReactNative"&&Do!=="NativeScript"&&Do!=="NS")&&typeof window<"u"&&typeof document<"u",Vp=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function";const cn={isBrowser:!0,classes:{URLSearchParams:zp,FormData:qp,Blob},isStandardBrowserEnv:jp,isStandardBrowserWebWorkerEnv:Vp,protocols:["http","https","file","blob","url","data"]},lc=function(p){function g(f,v,x,_){var L=f[_++],k=Number.isFinite(+L),$=_>=f.length;return L=!L&&X.isArray(x)?x.length:L,$?(X.hasOwnProp(x,L)?x[L]=[x[L],v]:x[L]=v,!k):(x[L]&&X.isObject(x[L])||(x[L]=[]),g(f,v,x[L],_)&&X.isArray(x[L])&&(x[L]=function(q){var fe,ye,be={},Ae=Object.keys(q),pe=Ae.length;for(fe=0;fe<pe;fe++)be[ye=Ae[fe]]=q[ye];return be}(x[L])),!k)}if(X.isFormData(p)&&X.isFunction(p.entries)){var E={};return X.forEachEntry(p,function(f,v){g(function(x){return X.matchAll(/\w+|\[(\w*)]/g,x).map(function(_){return _[0]==="[]"?"":_[1]||_[0]})}(f),v,E,0)}),E}return null};var Wp={"Content-Type":void 0},rs={transitional:ac,adapter:["xhr","http"],transformRequest:[function(p,g){var E,f=g.getContentType()||"",v=f.indexOf("application/json")>-1,x=X.isObject(p);if(x&&X.isHTMLForm(p)&&(p=new FormData(p)),X.isFormData(p))return v&&v?JSON.stringify(lc(p)):p;if(X.isArrayBuffer(p)||X.isBuffer(p)||X.isStream(p)||X.isFile(p)||X.isBlob(p))return p;if(X.isArrayBufferView(p))return p.buffer;if(X.isURLSearchParams(p))return g.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),p.toString();if(x){if(f.indexOf("application/x-www-form-urlencoded")>-1)return function(L,k){return ns(L,new cn.classes.URLSearchParams,Object.assign({visitor:function($,q,fe,ye){return cn.isNode&&X.isBuffer($)?(this.append(q,$.toString("base64")),!1):ye.defaultVisitor.apply(this,arguments)}},k))}(p,this.formSerializer).toString();if((E=X.isFileList(p))||f.indexOf("multipart/form-data")>-1){var _=this.env&&this.env.FormData;return ns(E?{"files[]":p}:p,_&&new _,this.formSerializer)}}return x||v?(g.setContentType("application/json",!1),function(L,k,$){if(X.isString(L))try{return(0,JSON.parse)(L),X.trim(L)}catch(q){if(q.name!=="SyntaxError")throw q}return(0,JSON.stringify)(L)}(p)):p}],transformResponse:[function(p){var g=this.transitional||rs.transitional,E=g&&g.forcedJSONParsing,f=this.responseType==="json";if(p&&X.isString(p)&&(E&&!this.responseType||f)){var v=!(g&&g.silentJSONParsing)&&f;try{return JSON.parse(p)}catch(x){if(v)throw x.name==="SyntaxError"?Ge.from(x,Ge.ERR_BAD_RESPONSE,this,null,this.response):x}}return p}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:cn.classes.FormData,Blob:cn.classes.Blob},validateStatus:function(p){return p>=200&&p<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};X.forEach(["delete","get","head"],function(p){rs.headers[p]={}}),X.forEach(["post","put","patch"],function(p){rs.headers[p]=X.merge(Wp)});const Bo=rs;var Yp=X.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]);function Zr(p){return Zr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(g){return typeof g}:function(g){return g&&typeof Symbol=="function"&&g.constructor===Symbol&&g!==Symbol.prototype?"symbol":typeof g},Zr(p)}function cc(p,g){(g==null||g>p.length)&&(g=p.length);for(var E=0,f=new Array(g);E<g;E++)f[E]=p[E];return f}function dc(p,g){for(var E=0;E<g.length;E++){var f=g[E];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(p,(v=function(x,_){if(Zr(x)!=="object"||x===null)return x;var L=x[Symbol.toPrimitive];if(L!==void 0){var k=L.call(x,"string");if(Zr(k)!=="object")return k;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(x)}(f.key),Zr(v)==="symbol"?v:String(v)),f)}var v}var uc=Symbol("internals");function Jr(p){return p&&String(p).trim().toLowerCase()}function is(p){return p===!1||p==null?p:X.isArray(p)?p.map(is):String(p)}function hc(p,g,E,f){return X.isFunction(f)?f.call(this,g,E):X.isString(g)?X.isString(f)?g.indexOf(f)!==-1:X.isRegExp(f)?f.test(g):void 0:void 0}var ss=function(p,g){function E(_){(function(L,k){if(!(L instanceof k))throw new TypeError("Cannot call a class as a function")})(this,E),_&&this.set(_)}var f,v,x;return f=E,v=[{key:"set",value:function(_,L,k){var $=this;function q(Oe,yt,ht){var nt=Jr(yt);if(!nt)throw new Error("header name must be a non-empty string");var Fn=X.findKey($,nt);(!Fn||$[Fn]===void 0||ht===!0||ht===void 0&&$[Fn]!==!1)&&($[Fn||yt]=is(Oe))}var fe,ye,be,Ae,pe,we=function(Oe,yt){return X.forEach(Oe,function(ht,nt){return q(ht,nt,yt)})};return X.isPlainObject(_)||_ instanceof this.constructor?we(_,L):X.isString(_)&&(_=_.trim())&&!/^[-_a-zA-Z]+$/.test(_.trim())?we((pe={},(fe=_)&&fe.split(`
`).forEach(function(Oe){Ae=Oe.indexOf(":"),ye=Oe.substring(0,Ae).trim().toLowerCase(),be=Oe.substring(Ae+1).trim(),!ye||pe[ye]&&Yp[ye]||(ye==="set-cookie"?pe[ye]?pe[ye].push(be):pe[ye]=[be]:pe[ye]=pe[ye]?pe[ye]+", "+be:be)}),pe),L):_!=null&&q(L,_,k),this}},{key:"get",value:function(_,L){if(_=Jr(_)){var k=X.findKey(this,_);if(k){var $=this[k];if(!L)return $;if(L===!0)return function(q){for(var fe,ye=Object.create(null),be=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;fe=be.exec(q);)ye[fe[1]]=fe[2];return ye}($);if(X.isFunction(L))return L.call(this,$,k);if(X.isRegExp(L))return L.exec($);throw new TypeError("parser must be boolean|regexp|function")}}}},{key:"has",value:function(_,L){if(_=Jr(_)){var k=X.findKey(this,_);return!(!k||L&&!hc(0,this[k],k,L))}return!1}},{key:"delete",value:function(_,L){var k=this,$=!1;function q(fe){if(fe=Jr(fe)){var ye=X.findKey(k,fe);!ye||L&&!hc(0,k[ye],ye,L)||(delete k[ye],$=!0)}}return X.isArray(_)?_.forEach(q):q(_),$}},{key:"clear",value:function(){return Object.keys(this).forEach(this.delete.bind(this))}},{key:"normalize",value:function(_){var L=this,k={};return X.forEach(this,function($,q){var fe=X.findKey(k,q);if(fe)return L[fe]=is($),void delete L[q];var ye=_?function(be){return be.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,function(Ae,pe,we){return pe.toUpperCase()+we})}(q):String(q).trim();ye!==q&&delete L[q],L[ye]=is($),k[ye]=!0}),this}},{key:"concat",value:function(){for(var _,L=arguments.length,k=new Array(L),$=0;$<L;$++)k[$]=arguments[$];return(_=this.constructor).concat.apply(_,[this].concat(k))}},{key:"toJSON",value:function(_){var L=Object.create(null);return X.forEach(this,function(k,$){k!=null&&k!==!1&&(L[$]=_&&X.isArray(k)?k.join(", "):k)}),L}},{key:Symbol.iterator,value:function(){return Object.entries(this.toJSON())[Symbol.iterator]()}},{key:"toString",value:function(){return Object.entries(this.toJSON()).map(function(_){var L,k,$=(k=2,function(q){if(Array.isArray(q))return q}(L=_)||function(q,fe){var ye=q==null?null:typeof Symbol<"u"&&q[Symbol.iterator]||q["@@iterator"];if(ye!=null){var be,Ae,pe,we,Oe=[],yt=!0,ht=!1;try{if(pe=(ye=ye.call(q)).next,fe===0){if(Object(ye)!==ye)return;yt=!1}else for(;!(yt=(be=pe.call(ye)).done)&&(Oe.push(be.value),Oe.length!==fe);yt=!0);}catch(nt){ht=!0,Ae=nt}finally{try{if(!yt&&ye.return!=null&&(we=ye.return(),Object(we)!==we))return}finally{if(ht)throw Ae}}return Oe}}(L,k)||function(q,fe){if(q){if(typeof q=="string")return cc(q,fe);var ye=Object.prototype.toString.call(q).slice(8,-1);return ye==="Object"&&q.constructor&&(ye=q.constructor.name),ye==="Map"||ye==="Set"?Array.from(q):ye==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(ye)?cc(q,fe):void 0}}(L,k)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}());return $[0]+": "+$[1]}).join(`
`)}},{key:Symbol.toStringTag,get:function(){return"AxiosHeaders"}}],x=[{key:"from",value:function(_){return _ instanceof this?_:new this(_)}},{key:"concat",value:function(_){for(var L=new this(_),k=arguments.length,$=new Array(k>1?k-1:0),q=1;q<k;q++)$[q-1]=arguments[q];return $.forEach(function(fe){return L.set(fe)}),L}},{key:"accessor",value:function(_){var L=(this[uc]=this[uc]={accessors:{}}).accessors,k=this.prototype;function $(q){var fe=Jr(q);L[fe]||(function(ye,be){var Ae=X.toCamelCase(" "+be);["get","set","has"].forEach(function(pe){Object.defineProperty(ye,pe+Ae,{value:function(we,Oe,yt){return this[pe].call(this,be,we,Oe,yt)},configurable:!0})})}(k,q),L[fe]=!0)}return X.isArray(_)?_.forEach($):$(_),this}}],v&&dc(f.prototype,v),x&&dc(f,x),Object.defineProperty(f,"prototype",{writable:!1}),E}();ss.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent"]),X.freezeMethods(ss.prototype),X.freezeMethods(ss);const wn=ss;function Po(p,g){var E=this||Bo,f=g||E,v=wn.from(f.headers),x=f.data;return X.forEach(p,function(_){x=_.call(E,x,v.normalize(),g?g.status:void 0)}),v.normalize(),x}function fc(p){return!(!p||!p.__CANCEL__)}function pc(p,g,E){Ge.call(this,p??"canceled",Ge.ERR_CANCELED,g,E),this.name="CanceledError"}X.inherits(pc,Ge,{__CANCEL__:!0});const os=pc,Qp=cn.isStandardBrowserEnv?{write:function(p,g,E,f,v,x){var _=[];_.push(p+"="+encodeURIComponent(g)),X.isNumber(E)&&_.push("expires="+new Date(E).toGMTString()),X.isString(f)&&_.push("path="+f),X.isString(v)&&_.push("domain="+v),x===!0&&_.push("secure"),document.cookie=_.join("; ")},read:function(p){var g=document.cookie.match(new RegExp("(^|;\\s*)("+p+")=([^;]*)"));return g?decodeURIComponent(g[3]):null},remove:function(p){this.write(p,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}};function mc(p,g){return p&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(g)?function(E,f){return f?E.replace(/\/+$/,"")+"/"+f.replace(/^\/+/,""):E}(p,g):g}const Xp=cn.isStandardBrowserEnv?function(){var p,g=/(msie|trident)/i.test(navigator.userAgent),E=document.createElement("a");function f(v){var x=v;return g&&(E.setAttribute("href",x),x=E.href),E.setAttribute("href",x),{href:E.href,protocol:E.protocol?E.protocol.replace(/:$/,""):"",host:E.host,search:E.search?E.search.replace(/^\?/,""):"",hash:E.hash?E.hash.replace(/^#/,""):"",hostname:E.hostname,port:E.port,pathname:E.pathname.charAt(0)==="/"?E.pathname:"/"+E.pathname}}return p=f(window.location.href),function(v){var x=X.isString(v)?f(v):v;return x.protocol===p.protocol&&x.host===p.host}}():function(){return!0};function gc(p,g){var E=0,f=function(v,x){v=v||10;var _,L=new Array(v),k=new Array(v),$=0,q=0;return x=x!==void 0?x:1e3,function(fe){var ye=Date.now(),be=k[q];_||(_=ye),L[$]=fe,k[$]=ye;for(var Ae=q,pe=0;Ae!==$;)pe+=L[Ae++],Ae%=v;if(($=($+1)%v)===q&&(q=(q+1)%v),!(ye-_<x)){var we=be&&ye-be;return we?Math.round(1e3*pe/we):void 0}}}(50,250);return function(v){var x=v.loaded,_=v.lengthComputable?v.total:void 0,L=x-E,k=f(L);E=x;var $={loaded:x,total:_,progress:_?x/_:void 0,bytes:L,rate:k||void 0,estimated:k&&_&&x<=_?(_-x)/k:void 0,event:v};$[g?"download":"upload"]=!0,p($)}}var Oo={http:null,xhr:typeof XMLHttpRequest<"u"&&function(p){return new Promise(function(g,E){var f,v=p.data,x=wn.from(p.headers).normalize(),_=p.responseType;function L(){p.cancelToken&&p.cancelToken.unsubscribe(f),p.signal&&p.signal.removeEventListener("abort",f)}X.isFormData(v)&&(cn.isStandardBrowserEnv||cn.isStandardBrowserWebWorkerEnv)&&x.setContentType(!1);var k=new XMLHttpRequest;if(p.auth){var $=p.auth.username||"",q=p.auth.password?unescape(encodeURIComponent(p.auth.password)):"";x.set("Authorization","Basic "+btoa($+":"+q))}var fe=mc(p.baseURL,p.url);function ye(){if(k){var we=wn.from("getAllResponseHeaders"in k&&k.getAllResponseHeaders());(function(Oe,yt,ht){var nt=ht.config.validateStatus;ht.status&&nt&&!nt(ht.status)?yt(new Ge("Request failed with status code "+ht.status,[Ge.ERR_BAD_REQUEST,Ge.ERR_BAD_RESPONSE][Math.floor(ht.status/100)-4],ht.config,ht.request,ht)):Oe(ht)})(function(Oe){g(Oe),L()},function(Oe){E(Oe),L()},{data:_&&_!=="text"&&_!=="json"?k.response:k.responseText,status:k.status,statusText:k.statusText,headers:we,config:p,request:k}),k=null}}if(k.open(p.method.toUpperCase(),sc(fe,p.params,p.paramsSerializer),!0),k.timeout=p.timeout,"onloadend"in k?k.onloadend=ye:k.onreadystatechange=function(){k&&k.readyState===4&&(k.status!==0||k.responseURL&&k.responseURL.indexOf("file:")===0)&&setTimeout(ye)},k.onabort=function(){k&&(E(new Ge("Request aborted",Ge.ECONNABORTED,p,k)),k=null)},k.onerror=function(){E(new Ge("Network Error",Ge.ERR_NETWORK,p,k)),k=null},k.ontimeout=function(){var we=p.timeout?"timeout of "+p.timeout+"ms exceeded":"timeout exceeded",Oe=p.transitional||ac;p.timeoutErrorMessage&&(we=p.timeoutErrorMessage),E(new Ge(we,Oe.clarifyTimeoutError?Ge.ETIMEDOUT:Ge.ECONNABORTED,p,k)),k=null},cn.isStandardBrowserEnv){var be=(p.withCredentials||Xp(fe))&&p.xsrfCookieName&&Qp.read(p.xsrfCookieName);be&&x.set(p.xsrfHeaderName,be)}v===void 0&&x.setContentType(null),"setRequestHeader"in k&&X.forEach(x.toJSON(),function(we,Oe){k.setRequestHeader(Oe,we)}),X.isUndefined(p.withCredentials)||(k.withCredentials=!!p.withCredentials),_&&_!=="json"&&(k.responseType=p.responseType),typeof p.onDownloadProgress=="function"&&k.addEventListener("progress",gc(p.onDownloadProgress,!0)),typeof p.onUploadProgress=="function"&&k.upload&&k.upload.addEventListener("progress",gc(p.onUploadProgress)),(p.cancelToken||p.signal)&&(f=function(we){k&&(E(!we||we.type?new os(null,p,k):we),k.abort(),k=null)},p.cancelToken&&p.cancelToken.subscribe(f),p.signal&&(p.signal.aborted?f():p.signal.addEventListener("abort",f)));var Ae,pe=(Ae=/^([-+\w]{1,25})(:?\/\/|:)/.exec(fe))&&Ae[1]||"";pe&&cn.protocols.indexOf(pe)===-1?E(new Ge("Unsupported protocol "+pe+":",Ge.ERR_BAD_REQUEST,p)):k.send(v||null)})}};X.forEach(Oo,function(p,g){if(p){try{Object.defineProperty(p,"name",{value:g})}catch{}Object.defineProperty(p,"adapterName",{value:g})}});function Mo(p){if(p.cancelToken&&p.cancelToken.throwIfRequested(),p.signal&&p.signal.aborted)throw new os(null,p)}function yc(p){return Mo(p),p.headers=wn.from(p.headers),p.data=Po.call(p,p.transformRequest),["post","put","patch"].indexOf(p.method)!==-1&&p.headers.setContentType("application/x-www-form-urlencoded",!1),function(g){for(var E,f,v=(g=X.isArray(g)?g:[g]).length,x=0;x<v&&(E=g[x],!(f=X.isString(E)?Oo[E.toLowerCase()]:E));x++);if(!f)throw f===!1?new Ge("Adapter ".concat(E," is not supported by the environment"),"ERR_NOT_SUPPORT"):new Error(X.hasOwnProp(Oo,E)?"Adapter '".concat(E,"' is not available in the build"):"Unknown adapter '".concat(E,"'"));if(!X.isFunction(f))throw new TypeError("adapter is not a function");return f}(p.adapter||Bo.adapter)(p).then(function(g){return Mo(p),g.data=Po.call(p,p.transformResponse,g),g.headers=wn.from(g.headers),g},function(g){return fc(g)||(Mo(p),g&&g.response&&(g.response.data=Po.call(p,p.transformResponse,g.response),g.response.headers=wn.from(g.response.headers))),Promise.reject(g)})}var Ac=function(p){return p instanceof wn?p.toJSON():p};function dr(p,g){g=g||{};var E={};function f($,q,fe){return X.isPlainObject($)&&X.isPlainObject(q)?X.merge.call({caseless:fe},$,q):X.isPlainObject(q)?X.merge({},q):X.isArray(q)?q.slice():q}function v($,q,fe){return X.isUndefined(q)?X.isUndefined($)?void 0:f(void 0,$,fe):f($,q,fe)}function x($,q){if(!X.isUndefined(q))return f(void 0,q)}function _($,q){return X.isUndefined(q)?X.isUndefined($)?void 0:f(void 0,$):f(void 0,q)}function L($,q,fe){return fe in g?f($,q):fe in p?f(void 0,$):void 0}var k={url:x,method:x,data:x,baseURL:_,transformRequest:_,transformResponse:_,paramsSerializer:_,timeout:_,timeoutMessage:_,withCredentials:_,adapter:_,responseType:_,xsrfCookieName:_,xsrfHeaderName:_,onUploadProgress:_,onDownloadProgress:_,decompress:_,maxContentLength:_,maxBodyLength:_,beforeRedirect:_,transport:_,httpAgent:_,httpsAgent:_,cancelToken:_,socketPath:_,responseEncoding:_,validateStatus:L,headers:function($,q){return v(Ac($),Ac(q),!0)}};return X.forEach(Object.keys(p).concat(Object.keys(g)),function($){var q=k[$]||v,fe=q(p[$],g[$],$);X.isUndefined(fe)&&q!==L||(E[$]=fe)}),E}function as(p){return as=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(g){return typeof g}:function(g){return g&&typeof Symbol=="function"&&g.constructor===Symbol&&g!==Symbol.prototype?"symbol":typeof g},as(p)}var Fo={};["object","boolean","number","function","string","symbol"].forEach(function(p,g){Fo[p]=function(E){return as(E)===p||"a"+(g<1?"n ":" ")+p}});var vc={};Fo.transitional=function(p,g,E){function f(v,x){return"[Axios v1.2.3] Transitional option '"+v+"'"+x+(E?". "+E:"")}return function(v,x,_){if(p===!1)throw new Ge(f(x," has been removed"+(g?" in "+g:"")),Ge.ERR_DEPRECATED);return g&&!vc[x]&&(vc[x]=!0,console.warn(f(x," has been deprecated since v"+g+" and will be removed in the near future"))),!p||p(v,x,_)}};const No={assertOptions:function(p,g,E){if(as(p)!=="object")throw new Ge("options must be an object",Ge.ERR_BAD_OPTION_VALUE);for(var f=Object.keys(p),v=f.length;v-- >0;){var x=f[v],_=g[x];if(_){var L=p[x],k=L===void 0||_(L,x,p);if(k!==!0)throw new Ge("option "+x+" must be "+k,Ge.ERR_BAD_OPTION_VALUE)}else if(E!==!0)throw new Ge("Unknown option "+x,Ge.ERR_BAD_OPTION)}},validators:Fo};function ei(p){return ei=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(g){return typeof g}:function(g){return g&&typeof Symbol=="function"&&g.constructor===Symbol&&g!==Symbol.prototype?"symbol":typeof g},ei(p)}function Zp(p,g){for(var E=0;E<g.length;E++){var f=g[E];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(p,(v=function(x,_){if(ei(x)!=="object"||x===null)return x;var L=x[Symbol.toPrimitive];if(L!==void 0){var k=L.call(x,"string");if(ei(k)!=="object")return k;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(x)}(f.key),ei(v)==="symbol"?v:String(v)),f)}var v}var On=No.validators,ls=function(){function p(f){(function(v,x){if(!(v instanceof x))throw new TypeError("Cannot call a class as a function")})(this,p),this.defaults=f,this.interceptors={request:new oc,response:new oc}}var g,E;return g=p,(E=[{key:"request",value:function(f,v){typeof f=="string"?(v=v||{}).url=f:v=f||{};var x,_=v=dr(this.defaults,v),L=_.transitional,k=_.paramsSerializer,$=_.headers;L!==void 0&&No.assertOptions(L,{silentJSONParsing:On.transitional(On.boolean),forcedJSONParsing:On.transitional(On.boolean),clarifyTimeoutError:On.transitional(On.boolean)},!1),k!==void 0&&No.assertOptions(k,{encode:On.function,serialize:On.function},!0),v.method=(v.method||this.defaults.method||"get").toLowerCase(),(x=$&&X.merge($.common,$[v.method]))&&X.forEach(["delete","get","head","post","put","patch","common"],function(nt){delete $[nt]}),v.headers=wn.concat(x,$);var q=[],fe=!0;this.interceptors.request.forEach(function(nt){typeof nt.runWhen=="function"&&nt.runWhen(v)===!1||(fe=fe&&nt.synchronous,q.unshift(nt.fulfilled,nt.rejected))});var ye,be=[];this.interceptors.response.forEach(function(nt){be.push(nt.fulfilled,nt.rejected)});var Ae,pe=0;if(!fe){var we=[yc.bind(this),void 0];for(we.unshift.apply(we,q),we.push.apply(we,be),Ae=we.length,ye=Promise.resolve(v);pe<Ae;)ye=ye.then(we[pe++],we[pe++]);return ye}Ae=q.length;var Oe=v;for(pe=0;pe<Ae;){var yt=q[pe++],ht=q[pe++];try{Oe=yt(Oe)}catch(nt){ht.call(this,nt);break}}try{ye=yc.call(this,Oe)}catch(nt){return Promise.reject(nt)}for(pe=0,Ae=be.length;pe<Ae;)ye=ye.then(be[pe++],be[pe++]);return ye}},{key:"getUri",value:function(f){return sc(mc((f=dr(this.defaults,f)).baseURL,f.url),f.params,f.paramsSerializer)}}])&&Zp(g.prototype,E),Object.defineProperty(g,"prototype",{writable:!1}),p}();X.forEach(["delete","get","head","options"],function(p){ls.prototype[p]=function(g,E){return this.request(dr(E||{},{method:p,url:g,data:(E||{}).data}))}}),X.forEach(["post","put","patch"],function(p){function g(E){return function(f,v,x){return this.request(dr(x||{},{method:p,headers:E?{"Content-Type":"multipart/form-data"}:{},url:f,data:v}))}}ls.prototype[p]=g(),ls.prototype[p+"Form"]=g(!0)});const cs=ls;function ti(p){return ti=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(g){return typeof g}:function(g){return g&&typeof Symbol=="function"&&g.constructor===Symbol&&g!==Symbol.prototype?"symbol":typeof g},ti(p)}function bc(p,g){for(var E=0;E<g.length;E++){var f=g[E];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(p,(v=function(x,_){if(ti(x)!=="object"||x===null)return x;var L=x[Symbol.toPrimitive];if(L!==void 0){var k=L.call(x,"string");if(ti(k)!=="object")return k;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(x)}(f.key),ti(v)==="symbol"?v:String(v)),f)}var v}var Jp=function(){function p(v){if(function(L,k){if(!(L instanceof k))throw new TypeError("Cannot call a class as a function")}(this,p),typeof v!="function")throw new TypeError("executor must be a function.");var x;this.promise=new Promise(function(L){x=L});var _=this;this.promise.then(function(L){if(_._listeners){for(var k=_._listeners.length;k-- >0;)_._listeners[k](L);_._listeners=null}}),this.promise.then=function(L){var k,$=new Promise(function(q){_.subscribe(q),k=q}).then(L);return $.cancel=function(){_.unsubscribe(k)},$},v(function(L,k,$){_.reason||(_.reason=new os(L,k,$),x(_.reason))})}var g,E,f;return g=p,E=[{key:"throwIfRequested",value:function(){if(this.reason)throw this.reason}},{key:"subscribe",value:function(v){this.reason?v(this.reason):this._listeners?this._listeners.push(v):this._listeners=[v]}},{key:"unsubscribe",value:function(v){if(this._listeners){var x=this._listeners.indexOf(v);x!==-1&&this._listeners.splice(x,1)}}}],f=[{key:"source",value:function(){var v;return{token:new p(function(x){v=x}),cancel:v}}}],E&&bc(g.prototype,E),f&&bc(g,f),Object.defineProperty(g,"prototype",{writable:!1}),p}();const e0=Jp;function xc(p,g){(g==null||g>p.length)&&(g=p.length);for(var E=0,f=new Array(g);E<g;E++)f[E]=p[E];return f}var Uo={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Uo).forEach(function(p){var g,E,f=(E=2,function(_){if(Array.isArray(_))return _}(g=p)||function(_,L){var k=_==null?null:typeof Symbol<"u"&&_[Symbol.iterator]||_["@@iterator"];if(k!=null){var $,q,fe,ye,be=[],Ae=!0,pe=!1;try{if(fe=(k=k.call(_)).next,L===0){if(Object(k)!==k)return;Ae=!1}else for(;!(Ae=($=fe.call(k)).done)&&(be.push($.value),be.length!==L);Ae=!0);}catch(we){pe=!0,q=we}finally{try{if(!Ae&&k.return!=null&&(ye=k.return(),Object(ye)!==ye))return}finally{if(pe)throw q}}return be}}(g,E)||function(_,L){if(_){if(typeof _=="string")return xc(_,L);var k=Object.prototype.toString.call(_).slice(8,-1);return k==="Object"&&_.constructor&&(k=_.constructor.name),k==="Map"||k==="Set"?Array.from(_):k==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(k)?xc(_,L):void 0}}(g,E)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()),v=f[0],x=f[1];Uo[x]=v});const t0=Uo;var gt=function p(g){var E=new cs(g),f=de(cs.prototype.request,E);return X.extend(f,cs.prototype,E,{allOwnKeys:!0}),X.extend(f,E,null,{allOwnKeys:!0}),f.create=function(v){return p(dr(g,v))},f}(Bo);gt.Axios=cs,gt.CanceledError=os,gt.CancelToken=e0,gt.isCancel=fc,gt.VERSION="1.2.3",gt.toFormData=ns,gt.AxiosError=Ge,gt.Cancel=gt.CanceledError,gt.all=function(p){return Promise.all(p)},gt.spread=function(p){return function(g){return p.apply(null,g)}},gt.isAxiosError=function(p){return X.isObject(p)&&p.isAxiosError===!0},gt.mergeConfig=dr,gt.AxiosHeaders=wn,gt.formToJSON=function(p){return lc(X.isHTMLForm(p)?new FormData(p):p)},gt.HttpStatusCode=t0,gt.default=gt;const Ec=gt,n0={send:function(p){Ec.post(p.url,p.data).then(function(g){var E=g.data;E&&E.code===0?p.success&&p.success(E):p.error&&p.error(E&&E.msg)}).catch(function(g){console.error(g),p.error&&p.error()})},read:function(p){Ec.get(p.url).then(function(g){var E=g.data;E&&E.code===0?p.success&&p.success(E.data.map(function(f){return{time:f[0],type:f[1],color:f[2],author:f[3],text:f[4]}})):p.error&&p.error(E&&E.msg)}).catch(function(g){console.error(g),p.error&&p.error()})}};function $o(p){return $o=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(g){return typeof g}:function(g){return g&&typeof Symbol=="function"&&g.constructor===Symbol&&g!==Symbol.prototype?"symbol":typeof g},$o(p)}function r0(p){var g=this;this.lang=p,this.fallbackLang=this.lang.includes("-")?this.lang.split("-")[0]:this.lang,this.tran=function(E){return E=E.toLowerCase(),ur[g.lang]&&ur[g.lang][E]?ur[g.lang][E]:ur[g.fallbackLang]&&ur[g.fallbackLang][E]?ur[g.fallbackLang][E]:Ho[E]?Ho[E]:E}}var Ho={"danmaku-loading":"Danmaku is loading",top:"Top",bottom:"Bottom",rolling:"Rolling","input-danmaku-enter":"Input danmaku, hit Enter","about-author":"About author","dplayer-feedback":"DPlayer feedback","about-dplayer":"About DPlayer",loop:"Loop",speed:"Speed","opacity-danmaku":"Opacity for danmaku",normal:"Normal","please-input-danmaku":"Please input danmaku content!","set-danmaku-color":"Set danmaku color","set-danmaku-type":"Set danmaku type","show-danmaku":"Show danmaku","video-failed":"Video load failed","danmaku-failed":"Danmaku load failed","danmaku-send-failed":"Danmaku send failed","switching-quality":"Switching to %q quality","switched-quality":"Switched to %q quality",ff:"FF %s s",rew:"REW %s s","unlimited-danmaku":"Unlimited danmaku","send-danmaku":"Send danmaku",setting:"Setting",fullscreen:"Full screen","web-fullscreen":"Web full screen",send:"Send",screenshot:"Screenshot",airplay:"AirPlay",chromecast:"ChromeCast",subtitle:"Subtitle",off:"Off","show-subs":"Show subtitle","hide-subs":"Hide subtitle",volume:"Volume",live:"Live","video-info":"Video info"},ur={en:Ho,"zh-cn":{"danmaku-loading":"弹幕加载中",top:"顶部",bottom:"底部",rolling:"滚动","input-danmaku-enter":"输入弹幕，回车发送","about-author":"关于作者","dplayer-feedback":"播放器意见反馈","about-dplayer":"关于 DPlayer 播放器",loop:"洗脑循环",speed:"速度","opacity-danmaku":"弹幕透明度",normal:"正常","please-input-danmaku":"要输入弹幕内容啊喂！","set-danmaku-color":"设置弹幕颜色","set-danmaku-type":"设置弹幕类型","show-danmaku":"显示弹幕","video-failed":"视频加载失败","danmaku-failed":"弹幕加载失败","danmaku-send-failed":"弹幕发送失败","switching-quality":"正在切换至 %q 画质","switched-quality":"已经切换至 %q 画质",ff:"快进 %s 秒",rew:"快退 %s 秒","unlimited-danmaku":"海量弹幕","send-danmaku":"发送弹幕",setting:"设置",fullscreen:"全屏","web-fullscreen":"页面全屏",send:"发送",screenshot:"截图",airplay:"无线投屏",chromecast:"ChromeCast",subtitle:"字幕",off:"关闭","show-subs":"显示字幕","hide-subs":"隐藏字幕",volume:"音量",live:"直播","video-info":"视频统计信息"},"zh-tw":{"danmaku-loading":"彈幕載入中",top:"頂部",bottom:"底部",rolling:"滾動","input-danmaku-enter":"輸入彈幕，Enter 發送","about-author":"關於作者","dplayer-feedback":"播放器意見回饋","about-dplayer":"關於 DPlayer 播放器",loop:"循環播放",speed:"速度","opacity-danmaku":"彈幕透明度",normal:"正常","please-input-danmaku":"請輸入彈幕內容啊！","set-danmaku-color":"設定彈幕顏色","set-danmaku-type":"設定彈幕類型","show-danmaku":"顯示彈幕","video-failed":"影片載入失敗","danmaku-failed":"彈幕載入失敗","danmaku-send-failed":"彈幕發送失敗","switching-quality":"正在切換至 %q 畫質","switched-quality":"已經切換至 %q 畫質",ff:"快進 %s 秒",rew:"快退 %s 秒","unlimited-danmaku":"巨量彈幕","send-danmaku":"發送彈幕",setting:"設定",fullscreen:"全螢幕","web-fullscreen":"頁面全螢幕",send:"發送",screenshot:"截圖",airplay:"無線投屏",chromecast:"ChromeCast",subtitle:"字幕",off:"關閉","show-subs":"顯示字幕","hide-subs":"隱藏字幕",volume:"音量",live:"直播","video-info":"影片統計訊息"},"ko-kr":{"danmaku-loading":"Danmaku를 불러오는 중입니다.",top:"Top",bottom:"Bottom",rolling:"Rolling","input-danmaku-enter":"Danmaku를 입력하고 Enter를 누르세요.","about-author":"만든이","dplayer-feedback":"피드백 보내기","about-dplayer":"DPlayer 정보",loop:"반복",speed:"배속","opacity-danmaku":"Danmaku 불투명도",normal:"표준","please-input-danmaku":"Danmaku를 입력하세요!","set-danmaku-color":"Danmaku 색상","set-danmaku-type":"Danmaku 설정","show-danmaku":"Danmaku 표시","video-failed":"비디오를 불러오지 못했습니다.","danmaku-failed":"Danmaku를 불러오지 못했습니다.","danmaku-send-failed":"Danmaku 전송에 실패했습니다.","Switching to":"","Switched to":"","switching-quality":"전환 %q 화질","switched-quality":"전환 됨 %q 화질",ff:"앞으로 %s 초",rew:"뒤로 %s 초","unlimited-danmaku":"끝없는 Danmaku","send-danmaku":"Danmaku 보내기",setting:"설정",fullscreen:"전체 화면","web-fullscreen":"웹 내 전체화면",send:"보내기",screenshot:"화면 캡쳐",airplay:"에어플레이",chromecast:"ChromeCast",subtitle:"부제",off:"끄다","show-subs":"자막 보이기","hide-subs":"자막 숨기기",Volume:"볼륨",live:"생방송","video-info":"비디오 정보"},de:{"danmaku-loading":"Danmaku lädt...",top:"Oben",bottom:"Unten",rolling:"Rollend","input-danmaku-enter":"Drücke Enter nach dem Einfügen vom Danmaku","about-author":"Über den Autor","dplayer-feedback":"DPlayer Feedback","about-dplayer":"Über DPlayer",loop:"Wiederholen",speed:"Geschwindigkeit","opacity-danmaku":"Transparenz für Danmaku",normal:"Normal","please-input-danmaku":"Bitte Danmaku Inhalt eingeben!","set-danmaku-color":"Danmaku Farbe festlegen","set-danmaku-type":"Danmaku Typ festlegen","show-danmaku":"Zeige Danmaku","video-failed":"Das Video konnte nicht geladen werden","danmaku-failed":"Danmaku konnte nicht geladen werden","danmaku-send-failed":"Das senden von Danmaku ist fehgeschlagen","switching-quality":"Wechsle zur %q Qualität","switched-quality":"Zur %q Qualität gewechselt",ff:"%s s Vorwärts",rew:"%s s Zurück","unlimited-danmaku":"Unlimitiertes Danmaku","send-danmaku":"Sende Danmaku",setting:"Einstellungen",fullscreen:"Vollbild","web-fullscreen":"Browser Vollbild",send:"Senden",screenshot:"Screenshot",airplay:"AirPlay","show-subs":"Zeige Untertitel",chromecast:"ChromeCast",subtitle:"Untertitel",off:"Schließung","hide-subs":"Verstecke Untertitel",volume:"Lautstärke",live:"Live","video-info":"Video Info"}},i0=i(730),s0=i.n(i0),o0=i(74),a0=i.n(o0),l0=i(437),c0=i.n(l0),d0=i(644),u0=i.n(d0),h0=i(324),f0=i.n(h0),p0=i(574),m0=i.n(p0),g0=i(300),y0=i.n(g0),A0=i(934),v0=i.n(A0),b0=i(428),x0=i.n(b0),E0=i(807),_0=i.n(E0),w0=i(338),S0=i.n(w0),T0=i(254),C0=i.n(T0),L0=i(965),k0=i.n(L0),R0=i(113),I0=i.n(R0),D0=i(251),B0=i.n(D0),P0=i(410),O0=i.n(P0),M0=i(182),F0=i.n(M0),N0=i(193),U0=i.n(N0);const Xt={play:s0(),pause:a0(),volumeUp:c0(),volumeDown:u0(),volumeOff:f0(),full:m0(),fullWeb:y0(),setting:v0(),right:x0(),comment:_0(),commentOff:S0(),send:C0(),pallette:k0(),camera:I0(),subtitle:O0(),loading:F0(),airplay:B0(),chromecast:U0()};var $0=i(916),H0=i.n($0);function ni(p){return ni=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(g){return typeof g}:function(g){return g&&typeof Symbol=="function"&&g.constructor===Symbol&&g!==Symbol.prototype?"symbol":typeof g},ni(p)}function _c(p,g){for(var E=0;E<g.length;E++){var f=g[E];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(p,(v=function(x,_){if(ni(x)!=="object"||x===null)return x;var L=x[Symbol.toPrimitive];if(L!==void 0){var k=L.call(x,"string");if(ni(k)!=="object")return k;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(x)}(f.key),ni(v)==="symbol"?v:String(v)),f)}var v}var G0=function(){function p(v){(function(x,_){if(!(x instanceof _))throw new TypeError("Cannot call a class as a function")})(this,p),this.container=v.container,this.options=v.options,this.index=v.index,this.tran=v.tran,this.init()}var g,E,f;return g=p,f=[{key:"NewNotice",value:function(v,x,_){var L=document.createElement("div");return L.classList.add("dplayer-notice"),L.style.opacity=x,L.innerText=v,_&&(L.id="dplayer-notice-".concat(_)),L}}],(E=[{key:"init",value:function(){this.container.innerHTML=H0()({options:this.options,index:this.index,tran:this.tran,icons:Xt,mobile:j.isMobile,video:{current:!0,pic:this.options.video.pic,screenshot:this.options.screenshot,airplay:!(!j.isSafari||j.isChrome)&&this.options.airplay,chromecast:this.options.chromecast,preload:this.options.preload,url:this.options.video.url,subtitle:this.options.subtitle}}),this.volumeBar=this.container.querySelector(".dplayer-volume-bar-inner"),this.volumeBarWrap=this.container.querySelector(".dplayer-volume-bar"),this.volumeBarWrapWrap=this.container.querySelector(".dplayer-volume-bar-wrap"),this.volumeButton=this.container.querySelector(".dplayer-volume"),this.volumeButtonIcon=this.container.querySelector(".dplayer-volume-icon"),this.volumeIcon=this.container.querySelector(".dplayer-volume-icon .dplayer-icon-content"),this.playedBar=this.container.querySelector(".dplayer-played"),this.loadedBar=this.container.querySelector(".dplayer-loaded"),this.playedBarWrap=this.container.querySelector(".dplayer-bar-wrap"),this.playedBarTime=this.container.querySelector(".dplayer-bar-time"),this.danmaku=this.container.querySelector(".dplayer-danmaku"),this.danmakuLoading=this.container.querySelector(".dplayer-danloading"),this.video=this.container.querySelector(".dplayer-video-current"),this.bezel=this.container.querySelector(".dplayer-bezel-icon"),this.playButton=this.container.querySelector(".dplayer-play-icon"),this.mobilePlayButton=this.container.querySelector(".dplayer-mobile-play"),this.videoWrap=this.container.querySelector(".dplayer-video-wrap"),this.controllerMask=this.container.querySelector(".dplayer-controller-mask"),this.ptime=this.container.querySelector(".dplayer-ptime"),this.settingButton=this.container.querySelector(".dplayer-setting-icon"),this.settingBox=this.container.querySelector(".dplayer-setting-box"),this.mask=this.container.querySelector(".dplayer-mask"),this.loop=this.container.querySelector(".dplayer-setting-loop"),this.loopToggle=this.container.querySelector(".dplayer-setting-loop .dplayer-toggle-setting-input"),this.showDanmaku=this.container.querySelector(".dplayer-setting-showdan"),this.showDanmakuToggle=this.container.querySelector(".dplayer-showdan-setting-input"),this.unlimitDanmaku=this.container.querySelector(".dplayer-setting-danunlimit"),this.unlimitDanmakuToggle=this.container.querySelector(".dplayer-danunlimit-setting-input"),this.speed=this.container.querySelector(".dplayer-setting-speed"),this.speedItem=this.container.querySelectorAll(".dplayer-setting-speed-item"),this.danmakuOpacityBar=this.container.querySelector(".dplayer-danmaku-bar-inner"),this.danmakuOpacityBarWrap=this.container.querySelector(".dplayer-danmaku-bar"),this.danmakuOpacityBarWrapWrap=this.container.querySelector(".dplayer-danmaku-bar-wrap"),this.danmakuOpacityBox=this.container.querySelector(".dplayer-setting-danmaku"),this.dtime=this.container.querySelector(".dplayer-dtime"),this.controller=this.container.querySelector(".dplayer-controller"),this.commentInput=this.container.querySelector(".dplayer-comment-input"),this.commentButton=this.container.querySelector(".dplayer-comment-icon"),this.commentSettingBox=this.container.querySelector(".dplayer-comment-setting-box"),this.commentSettingButton=this.container.querySelector(".dplayer-comment-setting-icon"),this.commentSettingFill=this.container.querySelector(".dplayer-comment-setting-icon path"),this.commentSendButton=this.container.querySelector(".dplayer-send-icon"),this.commentSendFill=this.container.querySelector(".dplayer-send-icon path"),this.commentColorSettingBox=this.container.querySelector(".dplayer-comment-setting-color"),this.browserFullButton=this.container.querySelector(".dplayer-full-icon"),this.webFullButton=this.container.querySelector(".dplayer-full-in-icon"),this.menu=this.container.querySelector(".dplayer-menu"),this.menuItem=this.container.querySelectorAll(".dplayer-menu-item"),this.qualityList=this.container.querySelector(".dplayer-quality-list"),this.camareButton=this.container.querySelector(".dplayer-camera-icon"),this.airplayButton=this.container.querySelector(".dplayer-airplay-icon"),this.chromecastButton=this.container.querySelector(".dplayer-chromecast-icon"),this.subtitleButton=this.container.querySelector(".dplayer-subtitle-icon"),this.subtitleButtonInner=this.container.querySelector(".dplayer-subtitle-icon .dplayer-icon-content"),this.subtitlesButton=this.container.querySelector(".dplayer-subtitles-icon"),this.subtitlesBox=this.container.querySelector(".dplayer-subtitles-box"),this.subtitlesItem=this.container.querySelectorAll(".dplayer-subtitles-item"),this.subtitle=this.container.querySelector(".dplayer-subtitle"),this.subtrack=this.container.querySelector(".dplayer-subtrack"),this.qualityButton=this.container.querySelector(".dplayer-quality-icon"),this.barPreview=this.container.querySelector(".dplayer-bar-preview"),this.barWrap=this.container.querySelector(".dplayer-bar-wrap"),this.noticeList=this.container.querySelector(".dplayer-notice-list"),this.infoPanel=this.container.querySelector(".dplayer-info-panel"),this.infoPanelClose=this.container.querySelector(".dplayer-info-panel-close"),this.infoVersion=this.container.querySelector(".dplayer-info-panel-item-version .dplayer-info-panel-item-data"),this.infoFPS=this.container.querySelector(".dplayer-info-panel-item-fps .dplayer-info-panel-item-data"),this.infoType=this.container.querySelector(".dplayer-info-panel-item-type .dplayer-info-panel-item-data"),this.infoUrl=this.container.querySelector(".dplayer-info-panel-item-url .dplayer-info-panel-item-data"),this.infoResolution=this.container.querySelector(".dplayer-info-panel-item-resolution .dplayer-info-panel-item-data"),this.infoDuration=this.container.querySelector(".dplayer-info-panel-item-duration .dplayer-info-panel-item-data"),this.infoDanmakuId=this.container.querySelector(".dplayer-info-panel-item-danmaku-id .dplayer-info-panel-item-data"),this.infoDanmakuApi=this.container.querySelector(".dplayer-info-panel-item-danmaku-api .dplayer-info-panel-item-data"),this.infoDanmakuAmount=this.container.querySelector(".dplayer-info-panel-item-danmaku-amount .dplayer-info-panel-item-data")}}])&&_c(g.prototype,E),f&&_c(g,f),Object.defineProperty(g,"prototype",{writable:!1}),p}();const wc=G0;function hr(p){return hr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(g){return typeof g}:function(g){return g&&typeof Symbol=="function"&&g.constructor===Symbol&&g!==Symbol.prototype?"symbol":typeof g},hr(p)}function K0(p,g){for(var E=0;E<g.length;E++){var f=g[E];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(p,(v=function(x,_){if(hr(x)!=="object"||x===null)return x;var L=x[Symbol.toPrimitive];if(L!==void 0){var k=L.call(x,"string");if(hr(k)!=="object")return k;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(x)}(f.key),hr(v)==="symbol"?v:String(v)),f)}var v}var z0=function(){function p(f){(function(v,x){if(!(v instanceof x))throw new TypeError("Cannot call a class as a function")})(this,p),this.options=f,this.player=this.options.player,this.container=this.options.container,this.danTunnel={right:{},top:{},bottom:{}},this.danIndex=0,this.dan=[],this.showing=!0,this._opacity=this.options.opacity,this.events=this.options.events,this.unlimited=this.options.unlimited,this._measure(""),this.load()}var g,E;return g=p,E=[{key:"load",value:function(){var f,v=this;f=this.options.api.maximum?"".concat(this.options.api.address,"v3/?id=").concat(this.options.api.id,"&max=").concat(this.options.api.maximum):"".concat(this.options.api.address,"v3/?id=").concat(this.options.api.id);var x=(this.options.api.addition||[]).slice(0);x.push(f),this.events&&this.events.trigger("danmaku_load_start",x),this._readAllEndpoints(x,function(_){v.dan=[].concat.apply([],_).sort(function(L,k){return L.time-k.time}),window.requestAnimationFrame(function(){v.frame()}),v.options.callback(),v.events&&v.events.trigger("danmaku_load_end")})}},{key:"reload",value:function(f){this.options.api=f,this.dan=[],this.clear(),this.load()}},{key:"_readAllEndpoints",value:function(f,v){for(var x=this,_=[],L=0,k=function(q){x.options.apiBackend.read({url:f[q],success:function(fe){_[q]=fe,++L===f.length&&v(_)},error:function(fe){x.options.error(fe||x.options.tran("danmaku-failed")),_[q]=[],++L===f.length&&v(_)}})},$=0;$<f.length;++$)k($)}},{key:"send",value:function(f,v){var x=this,_={token:this.options.api.token,id:this.options.api.id,author:this.options.api.user,time:this.options.time(),text:f.text,color:f.color,type:f.type};this.options.apiBackend.send({url:this.options.api.address+"v3/",data:_,success:v,error:function(k){x.options.error(k||x.options.tran("danmaku-failed"))}}),this.dan.splice(this.danIndex,0,_),this.danIndex++;var L={text:this.htmlEncode(_.text),color:_.color,type:_.type,border:"2px solid ".concat(this.options.borderColor)};this.draw(L),this.events&&this.events.trigger("danmaku_send",_)}},{key:"frame",value:function(){var f=this;if(this.dan.length&&!this.paused&&this.showing){for(var v=this.dan[this.danIndex],x=[];v&&this.options.time()>parseFloat(v.time);)x.push(v),v=this.dan[++this.danIndex];this.draw(x)}window.requestAnimationFrame(function(){f.frame()})}},{key:"opacity",value:function(f){if(f!==void 0){for(var v=this.container.getElementsByClassName("dplayer-danmaku-item"),x=0;x<v.length;x++)v[x].style.opacity=f;this._opacity=f,this.events&&this.events.trigger("danmaku_opacity",this._opacity)}return this._opacity}},{key:"draw",value:function(f){var v=this;if(this.showing){var x=this.options.height,_=this.container.offsetWidth,L=this.container.offsetHeight,k=parseInt(L/x),$=function(pe){var we=pe.offsetWidth||parseInt(pe.style.width),Oe=pe.getBoundingClientRect().right||v.container.getBoundingClientRect().right+we;return v.container.getBoundingClientRect().right-Oe},q=function(pe){return(_+pe)/5},fe=function(pe,we,Oe){for(var yt=_/q(Oe),ht=function(Zn){var pr=v.danTunnel[we][Zn+""];if(!pr||!pr.length)return v.danTunnel[we][Zn+""]=[pe],pe.addEventListener("animationend",function(){v.danTunnel[we][Zn+""].splice(0,1)}),{v:Zn%k};if(we!=="right")return"continue";for(var vi=0;vi<pr.length;vi++){var Rc=$(pr[vi])-10;if(Rc<=_-yt*q(parseInt(pr[vi].style.width))||Rc<=0)break;if(vi===pr.length-1)return v.danTunnel[we][Zn+""].push(pe),pe.addEventListener("animationend",function(){v.danTunnel[we][Zn+""].splice(0,1)}),{v:Zn%k}}},nt=0;v.unlimited||nt<k;nt++){var Fn=ht(nt);if(Fn!=="continue"&&hr(Fn)==="object")return Fn.v}return-1};Object.prototype.toString.call(f)!=="[object Array]"&&(f=[f]);for(var ye=document.createDocumentFragment(),be=function(){f[Ae].type=j.number2Type(f[Ae].type),f[Ae].color||(f[Ae].color=16777215);var pe=document.createElement("div");pe.classList.add("dplayer-danmaku-item"),pe.classList.add("dplayer-danmaku-".concat(f[Ae].type)),f[Ae].border?pe.innerHTML='<span style="border:'.concat(f[Ae].border,'">').concat(f[Ae].text,"</span>"):pe.innerHTML=f[Ae].text,pe.style.opacity=v._opacity,pe.style.color=j.number2Color(f[Ae].color),pe.addEventListener("animationend",function(){v.container.removeChild(pe)});var we,Oe=v._measure(f[Ae].text);switch(f[Ae].type){case"right":(we=fe(pe,f[Ae].type,Oe))>=0&&(pe.style.width=Oe+1+"px",pe.style.top=x*we+"px",pe.style.transform="translateX(-".concat(_,"px)"));break;case"top":(we=fe(pe,f[Ae].type))>=0&&(pe.style.top=x*we+"px");break;case"bottom":(we=fe(pe,f[Ae].type))>=0&&(pe.style.bottom=x*we+"px");break;default:console.error("Can't handled danmaku type: ".concat(f[Ae].type))}we>=0&&(pe.classList.add("dplayer-danmaku-move"),pe.style.animationDuration=v._danAnimation(f[Ae].type),ye.appendChild(pe))},Ae=0;Ae<f.length;Ae++)be();return this.container.appendChild(ye),ye}}},{key:"play",value:function(){this.paused=!1}},{key:"pause",value:function(){this.paused=!0}},{key:"_measure",value:function(f){if(!this.context){var v=getComputedStyle(this.container.getElementsByClassName("dplayer-danmaku-item")[0],null);this.context=document.createElement("canvas").getContext("2d"),this.context.font=v.getPropertyValue("font")}return this.context.measureText(f).width}},{key:"seek",value:function(){this.clear();for(var f=0;f<this.dan.length;f++){if(this.dan[f].time>=this.options.time()){this.danIndex=f;break}this.danIndex=this.dan.length}}},{key:"clear",value:function(){this.danTunnel={right:{},top:{},bottom:{}},this.danIndex=0,this.options.container.innerHTML="",this.events&&this.events.trigger("danmaku_clear")}},{key:"htmlEncode",value:function(f){return f.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2f;")}},{key:"resize",value:function(){for(var f=this.container.offsetWidth,v=this.container.getElementsByClassName("dplayer-danmaku-item"),x=0;x<v.length;x++)v[x].style.transform="translateX(-".concat(f,"px)")}},{key:"hide",value:function(){this.showing=!1,this.pause(),this.clear(),this.events&&this.events.trigger("danmaku_hide")}},{key:"show",value:function(){this.seek(),this.showing=!0,this.play(),this.events&&this.events.trigger("danmaku_show")}},{key:"unlimit",value:function(f){this.unlimited=f}},{key:"speed",value:function(f){this.options.api.speedRate=f}},{key:"_danAnimation",value:function(f){var v=this.options.api.speedRate||1,x=!!this.player.fullScreen.isFullScreen();return{top:"".concat((x?6:4)/v,"s"),right:"".concat((x?8:5)/v,"s"),bottom:"".concat((x?6:4)/v,"s")}[f]}}],E&&K0(g.prototype,E),Object.defineProperty(g,"prototype",{writable:!1}),p}();const q0=z0;function ri(p){return ri=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(g){return typeof g}:function(g){return g&&typeof Symbol=="function"&&g.constructor===Symbol&&g!==Symbol.prototype?"symbol":typeof g},ri(p)}function j0(p,g){for(var E=0;E<g.length;E++){var f=g[E];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(p,(v=function(x,_){if(ri(x)!=="object"||x===null)return x;var L=x[Symbol.toPrimitive];if(L!==void 0){var k=L.call(x,"string");if(ri(k)!=="object")return k;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(x)}(f.key),ri(v)==="symbol"?v:String(v)),f)}var v}const V0=function(){function p(){(function(f,v){if(!(f instanceof v))throw new TypeError("Cannot call a class as a function")})(this,p),this.events={},this.videoEvents=["abort","canplay","canplaythrough","durationchange","emptied","ended","error","loadeddata","loadedmetadata","loadstart","mozaudioavailable","pause","play","playing","progress","ratechange","seeked","seeking","stalled","suspend","timeupdate","volumechange","waiting"],this.playerEvents=["screenshot","thumbnails_show","thumbnails_hide","danmaku_show","danmaku_hide","danmaku_clear","danmaku_loaded","danmaku_send","danmaku_opacity","contextmenu_show","contextmenu_hide","notice_show","notice_hide","quality_start","quality_end","destroy","resize","fullscreen","fullscreen_cancel","webfullscreen","webfullscreen_cancel","subtitle_show","subtitle_hide","subtitle_change"]}var g,E;return g=p,(E=[{key:"on",value:function(f,v){this.type(f)&&typeof v=="function"&&(this.events[f]||(this.events[f]=[]),this.events[f].push(v))}},{key:"trigger",value:function(f,v){if(this.events[f]&&this.events[f].length)for(var x=0;x<this.events[f].length;x++)this.events[f][x](v)}},{key:"type",value:function(f){return this.playerEvents.indexOf(f)!==-1?"player":this.videoEvents.indexOf(f)!==-1?"video":(console.error("Unknown event name: ".concat(f)),null)}}])&&j0(g.prototype,E),Object.defineProperty(g,"prototype",{writable:!1}),p}();function ii(p){return ii=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(g){return typeof g}:function(g){return g&&typeof Symbol=="function"&&g.constructor===Symbol&&g!==Symbol.prototype?"symbol":typeof g},ii(p)}function W0(p,g){for(var E=0;E<g.length;E++){var f=g[E];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(p,(v=function(x,_){if(ii(x)!=="object"||x===null)return x;var L=x[Symbol.toPrimitive];if(L!==void 0){var k=L.call(x,"string");if(ii(k)!=="object")return k;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(x)}(f.key),ii(v)==="symbol"?v:String(v)),f)}var v}var Y0=function(){function p(f){var v=this;(function(x,_){if(!(x instanceof _))throw new TypeError("Cannot call a class as a function")})(this,p),this.player=f,this.lastScrollPosition={left:0,top:0},this.player.events.on("webfullscreen",function(){v.player.resize()}),this.player.events.on("webfullscreen_cancel",function(){v.player.resize(),j.setScrollPosition(v.lastScrollPosition)}),this.fullscreenchange=function(){v.player.resize(),v.isFullScreen("browser")?v.player.events.trigger("fullscreen"):(j.setScrollPosition(v.lastScrollPosition),v.player.events.trigger("fullscreen_cancel"))},this.docfullscreenchange=function(){var x=document.fullscreenElement||document.mozFullScreenElement||document.msFullscreenElement;x&&x!==v.player.container||(v.player.resize(),x?v.player.events.trigger("fullscreen"):(j.setScrollPosition(v.lastScrollPosition),v.player.events.trigger("fullscreen_cancel")))},/Firefox/.test(navigator.userAgent)?(document.addEventListener("mozfullscreenchange",this.docfullscreenchange),document.addEventListener("fullscreenchange",this.docfullscreenchange)):(this.player.container.addEventListener("fullscreenchange",this.fullscreenchange),this.player.container.addEventListener("webkitfullscreenchange",this.fullscreenchange),document.addEventListener("msfullscreenchange",this.docfullscreenchange),document.addEventListener("MSFullscreenChange",this.docfullscreenchange))}var g,E;return g=p,E=[{key:"isFullScreen",value:function(){var f=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"browser";switch(f){case"browser":return document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement||document.msFullscreenElement;case"web":return this.player.container.classList.contains("dplayer-fulled")}}},{key:"request",value:function(){var f=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"browser",v=f==="browser"?"web":"browser",x=this.isFullScreen(v);switch(x||(this.lastScrollPosition=j.getScrollPosition()),f){case"browser":this.player.container.requestFullscreen?this.player.container.requestFullscreen():this.player.container.mozRequestFullScreen?this.player.container.mozRequestFullScreen():this.player.container.webkitRequestFullscreen?this.player.container.webkitRequestFullscreen():this.player.video.webkitEnterFullscreen?this.player.video.webkitEnterFullscreen():this.player.video.webkitEnterFullScreen?this.player.video.webkitEnterFullScreen():this.player.container.msRequestFullscreen&&this.player.container.msRequestFullscreen();break;case"web":this.player.container.classList.add("dplayer-fulled"),document.body.classList.add("dplayer-web-fullscreen-fix"),this.player.events.trigger("webfullscreen")}x&&this.cancel(v)}},{key:"cancel",value:function(){var f=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"browser";switch(f){case"browser":document.cancelFullScreen?document.cancelFullScreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitCancelFullScreen?document.webkitCancelFullScreen():document.webkitCancelFullscreen?document.webkitCancelFullscreen():document.msCancelFullScreen?document.msCancelFullScreen():document.msExitFullscreen&&document.msExitFullscreen();break;case"web":this.player.container.classList.remove("dplayer-fulled"),document.body.classList.remove("dplayer-web-fullscreen-fix"),this.player.events.trigger("webfullscreen_cancel")}}},{key:"toggle",value:function(){var f=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"browser";this.isFullScreen(f)?this.cancel(f):this.request(f)}},{key:"destroy",value:function(){/Firefox/.test(navigator.userAgent)?(document.removeEventListener("mozfullscreenchange",this.docfullscreenchange),document.removeEventListener("fullscreenchange",this.docfullscreenchange)):(this.player.container.removeEventListener("fullscreenchange",this.fullscreenchange),this.player.container.removeEventListener("webkitfullscreenchange",this.fullscreenchange),document.removeEventListener("msfullscreenchange",this.docfullscreenchange),document.removeEventListener("MSFullscreenChange",this.docfullscreenchange))}}],E&&W0(g.prototype,E),Object.defineProperty(g,"prototype",{writable:!1}),p}();const Q0=Y0;function si(p){return si=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(g){return typeof g}:function(g){return g&&typeof Symbol=="function"&&g.constructor===Symbol&&g!==Symbol.prototype?"symbol":typeof g},si(p)}function X0(p,g){for(var E=0;E<g.length;E++){var f=g[E];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(p,(v=function(x,_){if(si(x)!=="object"||x===null)return x;var L=x[Symbol.toPrimitive];if(L!==void 0){var k=L.call(x,"string");if(si(k)!=="object")return k;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(x)}(f.key),si(v)==="symbol"?v:String(v)),f)}var v}var Z0=function(){function p(f){(function(v,x){if(!(v instanceof x))throw new TypeError("Cannot call a class as a function")})(this,p),this.storageName={opacity:"dplayer-danmaku-opacity",volume:"dplayer-volume",unlimited:"dplayer-danmaku-unlimited",danmaku:"dplayer-danmaku-show",subtitle:"dplayer-subtitle-show"},this.default={opacity:.7,volume:f.options.hasOwnProperty("volume")?f.options.volume:.7,unlimited:(f.options.danmaku&&f.options.danmaku.unlimited?1:0)||0,danmaku:1,subtitle:1},this.data={},this.init()}var g,E;return g=p,(E=[{key:"init",value:function(){for(var f in this.storageName){var v=this.storageName[f];this.data[f]=parseFloat(j.storage.get(v)||this.default[f])}}},{key:"get",value:function(f){return this.data[f]}},{key:"set",value:function(f,v){this.data[f]=v,j.storage.set(this.storageName[f],v)}}])&&X0(g.prototype,E),Object.defineProperty(g,"prototype",{writable:!1}),p}();const J0=Z0;function oi(p){return oi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(g){return typeof g}:function(g){return g&&typeof Symbol=="function"&&g.constructor===Symbol&&g!==Symbol.prototype?"symbol":typeof g},oi(p)}function em(p,g){for(var E=0;E<g.length;E++){var f=g[E];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(p,(v=function(x,_){if(oi(x)!=="object"||x===null)return x;var L=x[Symbol.toPrimitive];if(L!==void 0){var k=L.call(x,"string");if(oi(k)!=="object")return k;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(x)}(f.key),oi(v)==="symbol"?v:String(v)),f)}var v}var tm=function(){function p(f,v,x,_){(function(L,k){if(!(L instanceof k))throw new TypeError("Cannot call a class as a function")})(this,p),this.container=f,this.video=v,this.options=x,this.events=_,this.init()}var g,E;return g=p,E=[{key:"init",value:function(){var f=this;if(this.container.style.fontSize=this.options.fontSize,this.container.style.bottom=this.options.bottom,this.container.style.color=this.options.color,this.video.textTracks&&this.video.textTracks[0]){var v=this.video.textTracks[0];v.oncuechange=function(){var x=v.activeCues[v.activeCues.length-1];if(f.container.innerHTML="",x){var _=document.createElement("div");_.appendChild(x.getCueAsHTML());var L=_.innerHTML.split(/\r?\n/).map(function(k){return"<p>".concat(k,"</p>")}).join("");f.container.innerHTML=L}f.events.trigger("subtitle_change")}}}},{key:"show",value:function(){this.container.classList.remove("dplayer-subtitle-hide"),this.events.trigger("subtitle_show")}},{key:"hide",value:function(){this.container.classList.add("dplayer-subtitle-hide"),this.events.trigger("subtitle_hide")}},{key:"toggle",value:function(){this.container.classList.contains("dplayer-subtitle-hide")?this.show():this.hide()}}],E&&em(g.prototype,E),Object.defineProperty(g,"prototype",{writable:!1}),p}();const nm=tm;function ai(p){return ai=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(g){return typeof g}:function(g){return g&&typeof Symbol=="function"&&g.constructor===Symbol&&g!==Symbol.prototype?"symbol":typeof g},ai(p)}function rm(p,g){for(var E=0;E<g.length;E++){var f=g[E];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(p,(v=function(x,_){if(ai(x)!=="object"||x===null)return x;var L=x[Symbol.toPrimitive];if(L!==void 0){var k=L.call(x,"string");if(ai(k)!=="object")return k;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(x)}(f.key),ai(v)==="symbol"?v:String(v)),f)}var v}var im=function(){function p(f){var v=this;(function(k,$){if(!(k instanceof $))throw new TypeError("Cannot call a class as a function")})(this,p),this.player=f,this.player.template.mask.addEventListener("click",function(){v.hide()}),this.player.template.subtitlesButton.addEventListener("click",function(){v.adaptiveHeight(),v.show()});for(var x=this.player.template.subtitlesItem.length-1,_=function(k){v.player.template.subtitlesItem[k].addEventListener("click",function(){v.hide(),v.player.options.subtitle.index!==k&&(v.player.template.subtitle.innerHTML="<p></p>",v.player.template.subtrack.src=v.player.template.subtitlesItem[k].dataset.subtitle,v.player.options.subtitle.index=k,v.player.template.subtitle.classList.contains("dplayer-subtitle-hide")&&v.subContainerShow())})},L=0;L<x;L++)_(L);this.player.template.subtitlesItem[x].addEventListener("click",function(){v.hide(),v.player.options.subtitle.index!==x&&(v.player.template.subtitle.innerHTML="<p></p>",v.player.template.subtrack.src="",v.player.options.subtitle.index=x,v.subContainerHide())})}var g,E;return g=p,(E=[{key:"subContainerShow",value:function(){this.player.template.subtitle.classList.remove("dplayer-subtitle-hide"),this.player.events.trigger("subtitle_show")}},{key:"subContainerHide",value:function(){this.player.template.subtitle.classList.add("dplayer-subtitle-hide"),this.player.events.trigger("subtitle_hide")}},{key:"hide",value:function(){this.player.template.subtitlesBox.classList.remove("dplayer-subtitles-box-open"),this.player.template.mask.classList.remove("dplayer-mask-show"),this.player.controller.disableAutoHide=!1}},{key:"show",value:function(){this.player.template.subtitlesBox.classList.add("dplayer-subtitles-box-open"),this.player.template.mask.classList.add("dplayer-mask-show"),this.player.controller.disableAutoHide=!0}},{key:"adaptiveHeight",value:function(){var f=30*this.player.template.subtitlesItem.length+14,v=.8*this.player.template.videoWrap.offsetHeight;f>=v-50?(this.player.template.subtitlesBox.style.bottom="8px",this.player.template.subtitlesBox.style["max-height"]=v-8+"px"):(this.player.template.subtitlesBox.style.bottom="50px",this.player.template.subtitlesBox.style["max-height"]=v-50+"px")}}])&&rm(g.prototype,E),Object.defineProperty(g,"prototype",{writable:!1}),p}();const sm=im;function li(p){return li=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(g){return typeof g}:function(g){return g&&typeof Symbol=="function"&&g.constructor===Symbol&&g!==Symbol.prototype?"symbol":typeof g},li(p)}function om(p,g){for(var E=0;E<g.length;E++){var f=g[E];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(p,(v=function(x,_){if(li(x)!=="object"||x===null)return x;var L=x[Symbol.toPrimitive];if(L!==void 0){var k=L.call(x,"string");if(li(k)!=="object")return k;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(x)}(f.key),li(v)==="symbol"?v:String(v)),f)}var v}var am=function(){function p(f){(function(v,x){if(!(v instanceof x))throw new TypeError("Cannot call a class as a function")})(this,p),this.elements={},this.elements.volume=f.volumeBar,this.elements.played=f.playedBar,this.elements.loaded=f.loadedBar,this.elements.danmaku=f.danmakuOpacityBar}var g,E;return g=p,(E=[{key:"set",value:function(f,v,x){v=Math.max(v,0),v=Math.min(v,1),this.elements[f].style[x]=100*v+"%"}},{key:"get",value:function(f){return parseFloat(this.elements[f].style.width)/100}}])&&om(g.prototype,E),Object.defineProperty(g,"prototype",{writable:!1}),p}();const lm=am;function ci(p){return ci=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(g){return typeof g}:function(g){return g&&typeof Symbol=="function"&&g.constructor===Symbol&&g!==Symbol.prototype?"symbol":typeof g},ci(p)}function cm(p,g){for(var E=0;E<g.length;E++){var f=g[E];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(p,(v=function(x,_){if(ci(x)!=="object"||x===null)return x;var L=x[Symbol.toPrimitive];if(L!==void 0){var k=L.call(x,"string");if(ci(k)!=="object")return k;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(x)}(f.key),ci(v)==="symbol"?v:String(v)),f)}var v}var dm=function(){function p(f){(function(v,x){if(!(v instanceof x))throw new TypeError("Cannot call a class as a function")})(this,p),this.player=f,window.requestAnimationFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(v){window.setTimeout(v,1e3/60)},this.types=["loading","info","fps"],this.init()}var g,E;return g=p,(E=[{key:"init",value:function(){var f=this;this.types.map(function(v){return v!=="fps"&&f["init".concat(v,"Checker")](),v})}},{key:"initloadingChecker",value:function(){var f=this,v=0,x=0,_=!1;this.loadingChecker=setInterval(function(){f.enableloadingChecker&&(x=f.player.video.currentTime,_||x!==v||f.player.video.paused||(f.player.container.classList.add("dplayer-loading"),_=!0),_&&x>v&&!f.player.video.paused&&(f.player.container.classList.remove("dplayer-loading"),_=!1),v=x)},100)}},{key:"initfpsChecker",value:function(){var f=this;window.requestAnimationFrame(function(){if(f.enablefpsChecker)if(f.initfpsChecker(),f.fpsStart){f.fpsIndex++;var v=new Date;v-f.fpsStart>1e3&&(f.player.infoPanel.fps(f.fpsIndex/(v-f.fpsStart)*1e3),f.fpsStart=new Date,f.fpsIndex=0)}else f.fpsStart=new Date,f.fpsIndex=0;else f.fpsStart=0,f.fpsIndex=0})}},{key:"initinfoChecker",value:function(){var f=this;this.infoChecker=setInterval(function(){f.enableinfoChecker&&f.player.infoPanel.update()},1e3)}},{key:"enable",value:function(f){this["enable".concat(f,"Checker")]=!0,f==="fps"&&this.initfpsChecker()}},{key:"disable",value:function(f){this["enable".concat(f,"Checker")]=!1}},{key:"destroy",value:function(){var f=this;this.types.map(function(v){return f["enable".concat(v,"Checker")]=!1,f["".concat(v,"Checker")]&&clearInterval(f["".concat(v,"Checker")]),v})}}])&&cm(g.prototype,E),Object.defineProperty(g,"prototype",{writable:!1}),p}();const um=dm;function di(p){return di=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(g){return typeof g}:function(g){return g&&typeof Symbol=="function"&&g.constructor===Symbol&&g!==Symbol.prototype?"symbol":typeof g},di(p)}function hm(p,g){for(var E=0;E<g.length;E++){var f=g[E];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(p,(v=function(x,_){if(di(x)!=="object"||x===null)return x;var L=x[Symbol.toPrimitive];if(L!==void 0){var k=L.call(x,"string");if(di(k)!=="object")return k;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(x)}(f.key),di(v)==="symbol"?v:String(v)),f)}var v}const fm=function(){function p(f){var v=this;(function(x,_){if(!(x instanceof _))throw new TypeError("Cannot call a class as a function")})(this,p),this.container=f,this.container.addEventListener("animationend",function(){v.container.classList.remove("dplayer-bezel-transition")})}var g,E;return g=p,(E=[{key:"switch",value:function(f){this.container.innerHTML=f,this.container.classList.add("dplayer-bezel-transition")}}])&&hm(g.prototype,E),Object.defineProperty(g,"prototype",{writable:!1}),p}();function ui(p){return ui=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(g){return typeof g}:function(g){return g&&typeof Symbol=="function"&&g.constructor===Symbol&&g!==Symbol.prototype?"symbol":typeof g},ui(p)}function pm(p,g){for(var E=0;E<g.length;E++){var f=g[E];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(p,(v=function(x,_){if(ui(x)!=="object"||x===null)return x;var L=x[Symbol.toPrimitive];if(L!==void 0){var k=L.call(x,"string");if(ui(k)!=="object")return k;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(x)}(f.key),ui(v)==="symbol"?v:String(v)),f)}var v}var mm=function(){function p(f){(function(v,x){if(!(v instanceof x))throw new TypeError("Cannot call a class as a function")})(this,p),this.container=f.container,this.barWidth=f.barWidth,this.container.style.backgroundImage="url('".concat(f.url,"')"),this.events=f.events}var g,E;return g=p,(E=[{key:"resize",value:function(f,v,x){this.container.style.width="".concat(f,"px"),this.container.style.height="".concat(v,"px"),this.container.style.top="".concat(2-v,"px"),this.barWidth=x}},{key:"show",value:function(){this.container.style.display="block",this.events&&this.events.trigger("thumbnails_show")}},{key:"move",value:function(f){this.container.style.backgroundPosition="-".concat(160*(Math.ceil(f/this.barWidth*100)-1),"px 0"),this.container.style.left="".concat(Math.min(Math.max(f-this.container.offsetWidth/2,-10),this.barWidth-150),"px")}},{key:"hide",value:function(){this.container.style.display="none",this.events&&this.events.trigger("thumbnails_hide")}}])&&pm(g.prototype,E),Object.defineProperty(g,"prototype",{writable:!1}),p}();const gm=mm;function hi(p){return hi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(g){return typeof g}:function(g){return g&&typeof Symbol=="function"&&g.constructor===Symbol&&g!==Symbol.prototype?"symbol":typeof g},hi(p)}function ym(p,g){for(var E=0;E<g.length;E++){var f=g[E];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(p,(v=function(x,_){if(hi(x)!=="object"||x===null)return x;var L=x[Symbol.toPrimitive];if(L!==void 0){var k=L.call(x,"string");if(hi(k)!=="object")return k;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(x)}(f.key),hi(v)==="symbol"?v:String(v)),f)}var v}var Mn,Sc=!0,Go=!1,Am=function(){function p(f){(function(v,x){if(!(v instanceof x))throw new TypeError("Cannot call a class as a function")})(this,p),this.player=f,this.autoHideTimer=0,j.isMobile||(this.setAutoHideHandler=this.setAutoHide.bind(this),this.player.container.addEventListener("mousemove",this.setAutoHideHandler),this.player.container.addEventListener("click",this.setAutoHideHandler),this.player.on("play",this.setAutoHideHandler),this.player.on("pause",this.setAutoHideHandler)),this.initPlayButton(),this.initThumbnails(),this.initPlayedBar(),this.initFullButton(),this.initQualityButton(),this.initScreenshotButton(),this.player.options.subtitle&&typeof this.player.options.subtitle.url=="string"&&this.initSubtitleButton(),this.initHighlights(),this.initAirplayButton(),this.initChromecastButton(),j.isMobile||this.initVolumeButton()}var g,E;return g=p,(E=[{key:"initPlayButton",value:function(){var f=this;this.player.template.playButton.addEventListener("click",function(){f.player.toggle()}),this.player.template.mobilePlayButton.addEventListener("click",function(){f.player.toggle()}),j.isMobile?(this.player.template.videoWrap.addEventListener("click",function(){f.toggle()}),this.player.template.controllerMask.addEventListener("click",function(){f.toggle()})):this.player.options.preventClickToggle||(this.player.template.videoWrap.addEventListener("click",function(){f.player.toggle()}),this.player.template.controllerMask.addEventListener("click",function(){f.player.toggle()}))}},{key:"initHighlights",value:function(){var f=this;this.player.on("durationchange",function(){if(f.player.video.duration!==1&&f.player.video.duration!==1/0&&f.player.options.highlight){var v=f.player.template.playedBarWrap.querySelectorAll(".dplayer-highlight");[].slice.call(v,0).forEach(function(L){f.player.template.playedBarWrap.removeChild(L)});for(var x=0;x<f.player.options.highlight.length;x++)if(f.player.options.highlight[x].text&&f.player.options.highlight[x].time){var _=document.createElement("div");_.classList.add("dplayer-highlight"),_.style.left=f.player.options.highlight[x].time/f.player.video.duration*100+"%",_.innerHTML='<span class="dplayer-highlight-text">'+f.player.options.highlight[x].text+"</span>",f.player.template.playedBarWrap.insertBefore(_,f.player.template.playedBarTime)}}})}},{key:"initThumbnails",value:function(){var f=this;this.player.options.video.thumbnails&&(this.thumbnails=new gm({container:this.player.template.barPreview,barWidth:this.player.template.barWrap.offsetWidth,url:this.player.options.video.thumbnails,events:this.player.events}),this.player.on("loadedmetadata",function(){f.thumbnails.resize(160,f.player.video.videoHeight/f.player.video.videoWidth*160,f.player.template.barWrap.offsetWidth)}))}},{key:"initPlayedBar",value:function(){var f=this,v=function(_){var L=((_.clientX||_.changedTouches[0].clientX)-j.getBoundingClientRectViewLeft(f.player.template.playedBarWrap))/f.player.template.playedBarWrap.clientWidth;L=Math.max(L,0),L=Math.min(L,1),f.player.bar.set("played",L,"width"),f.player.template.ptime.innerHTML=j.secondToTime(L*f.player.video.duration)},x=function _(L){document.removeEventListener(j.nameMap.dragEnd,_),document.removeEventListener(j.nameMap.dragMove,v);var k=((L.clientX||L.changedTouches[0].clientX)-j.getBoundingClientRectViewLeft(f.player.template.playedBarWrap))/f.player.template.playedBarWrap.clientWidth;k=Math.max(k,0),k=Math.min(k,1),f.player.bar.set("played",k,"width"),f.player.seek(f.player.bar.get("played")*f.player.video.duration),f.player.timer.enable("progress")};this.player.template.playedBarWrap.addEventListener(j.nameMap.dragStart,function(){f.player.timer.disable("progress"),document.addEventListener(j.nameMap.dragMove,v),document.addEventListener(j.nameMap.dragEnd,x)}),this.player.template.playedBarWrap.addEventListener(j.nameMap.dragMove,function(_){if(f.player.video.duration){var L=f.player.template.playedBarWrap.getBoundingClientRect().left,k=(_.clientX||_.changedTouches[0].clientX)-L;if(k<0||k>f.player.template.playedBarWrap.offsetWidth)return;var $=f.player.video.duration*(k/f.player.template.playedBarWrap.offsetWidth);j.isMobile&&f.thumbnails&&f.thumbnails.show(),f.thumbnails&&f.thumbnails.move(k),f.player.template.playedBarTime.style.left="".concat(k-($>=3600?25:20),"px"),f.player.template.playedBarTime.innerText=j.secondToTime($),f.player.template.playedBarTime.classList.remove("hidden")}}),this.player.template.playedBarWrap.addEventListener(j.nameMap.dragEnd,function(){j.isMobile&&f.thumbnails&&f.thumbnails.hide()}),j.isMobile||(this.player.template.playedBarWrap.addEventListener("mouseenter",function(){f.player.video.duration&&(f.thumbnails&&f.thumbnails.show(),f.player.template.playedBarTime.classList.remove("hidden"))}),this.player.template.playedBarWrap.addEventListener("mouseleave",function(){f.player.video.duration&&(f.thumbnails&&f.thumbnails.hide(),f.player.template.playedBarTime.classList.add("hidden"))}))}},{key:"initFullButton",value:function(){var f=this;this.player.template.browserFullButton.addEventListener("click",function(){f.player.fullScreen.toggle("browser")}),this.player.template.webFullButton.addEventListener("click",function(){f.player.fullScreen.toggle("web")})}},{key:"initVolumeButton",value:function(){var f=this,v=function(_){var L=_||window.event,k=((L.clientX||L.changedTouches[0].clientX)-j.getBoundingClientRectViewLeft(f.player.template.volumeBarWrap)-5.5)/35;f.player.volume(k)},x=function _(){document.removeEventListener(j.nameMap.dragEnd,_),document.removeEventListener(j.nameMap.dragMove,v),f.player.template.volumeButton.classList.remove("dplayer-volume-active")};this.player.template.volumeBarWrapWrap.addEventListener("click",function(_){var L=_||window.event,k=((L.clientX||L.changedTouches[0].clientX)-j.getBoundingClientRectViewLeft(f.player.template.volumeBarWrap)-5.5)/35;f.player.volume(k)}),this.player.template.volumeBarWrapWrap.addEventListener(j.nameMap.dragStart,function(){document.addEventListener(j.nameMap.dragMove,v),document.addEventListener(j.nameMap.dragEnd,x),f.player.template.volumeButton.classList.add("dplayer-volume-active")}),this.player.template.volumeButtonIcon.addEventListener("click",function(){f.player.video.muted?(f.player.video.muted=!1,f.player.switchVolumeIcon(),f.player.bar.set("volume",f.player.volume(),"width")):(f.player.video.muted=!0,f.player.template.volumeIcon.innerHTML=Xt.volumeOff,f.player.bar.set("volume",0,"width"))})}},{key:"initQualityButton",value:function(){var f=this;this.player.options.video.quality&&this.player.template.qualityList.addEventListener("click",function(v){v.target.classList.contains("dplayer-quality-item")&&f.player.switchQuality(v.target.dataset.index)})}},{key:"initScreenshotButton",value:function(){var f=this;this.player.options.screenshot&&this.player.template.camareButton.addEventListener("click",function(){var v,x=document.createElement("canvas");x.width=f.player.video.videoWidth,x.height=f.player.video.videoHeight,x.getContext("2d").drawImage(f.player.video,0,0,x.width,x.height),x.toBlob(function(_){v=URL.createObjectURL(_);var L=document.createElement("a");L.href=v,L.download="DPlayer.png",L.style.display="none",document.body.appendChild(L),L.click(),document.body.removeChild(L),URL.revokeObjectURL(v),f.player.events.trigger("screenshot",v)})})}},{key:"initAirplayButton",value:function(){this.player.options.airplay&&(window.WebKitPlaybackTargetAvailabilityEvent?this.player.video.addEventListener("webkitplaybacktargetavailabilitychanged",(function(f){f.availability==="available"?this.template.airplayButton.disable=!1:this.template.airplayButton.disable=!0,this.template.airplayButton.addEventListener("click",(function(){this.video.webkitShowPlaybackTargetPicker()}).bind(this))}).bind(this.player)):this.player.template.airplayButton.style.display="none")}},{key:"initChromecast",value:function(){var f=window.document.createElement("script");f.setAttribute("type","text/javascript"),f.setAttribute("src","https://www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1"),window.document.body.appendChild(f),window.__onGCastApiAvailable=function(v){if(v){var x=new(Mn=window.chrome.cast).SessionRequest(Mn.media.DEFAULT_MEDIA_RECEIVER_APP_ID),_=new Mn.ApiConfig(x,function(){},function(L){L===Mn.ReceiverAvailability.AVAILABLE&&console.log("chromecast: ",L)});Mn.initialize(_,function(){})}}}},{key:"initChromecastButton",value:function(){var f=this;if(this.player.options.chromecast){Sc&&(Sc=!1,this.initChromecast());var v=function(_,L){f.currentMedia=L},x=function(_){console.error("Error launching media",_)};this.player.template.chromecastButton.addEventListener("click",function(){Go?(Go=!1,f.currentMedia.stop(),f.session.stop(),f.initChromecast()):(Go=!0,Mn.requestSession(function(_){var L,k,$;f.session=_,L=f.player.options.video.url,k=new Mn.media.MediaInfo(L),$=new Mn.media.LoadRequest(k),f.session?f.session.loadMedia($,v.bind(f,"loadMedia"),x).play():window.open(L)},function(_){_.code==="cancel"?f.session=void 0:console.error("Error selecting a cast device",_)}))})}}},{key:"initSubtitleButton",value:function(){var f=this;this.player.events.on("subtitle_show",function(){f.player.template.subtitleButton.dataset.balloon=f.player.tran("hide-subs"),f.player.template.subtitleButtonInner.style.opacity="",f.player.user.set("subtitle",1)}),this.player.events.on("subtitle_hide",function(){f.player.template.subtitleButton.dataset.balloon=f.player.tran("show-subs"),f.player.template.subtitleButtonInner.style.opacity="0.4",f.player.user.set("subtitle",0)}),this.player.template.subtitleButton.addEventListener("click",function(){f.player.subtitle.toggle()})}},{key:"setAutoHide",value:function(){var f=this;this.show(),clearTimeout(this.autoHideTimer),this.autoHideTimer=setTimeout(function(){!f.player.video.played.length||f.player.paused||f.disableAutoHide||f.hide()},3e3)}},{key:"show",value:function(){this.player.container.classList.remove("dplayer-hide-controller")}},{key:"hide",value:function(){this.player.container.classList.add("dplayer-hide-controller"),this.player.setting.hide(),this.player.comment&&this.player.comment.hide()}},{key:"isShow",value:function(){return!this.player.container.classList.contains("dplayer-hide-controller")}},{key:"toggle",value:function(){this.isShow()?this.hide():this.show()}},{key:"destroy",value:function(){j.isMobile||(this.player.container.removeEventListener("mousemove",this.setAutoHideHandler),this.player.container.removeEventListener("click",this.setAutoHideHandler)),clearTimeout(this.autoHideTimer)}}])&&ym(g.prototype,E),Object.defineProperty(g,"prototype",{writable:!1}),p}();const vm=Am;function fi(p){return fi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(g){return typeof g}:function(g){return g&&typeof Symbol=="function"&&g.constructor===Symbol&&g!==Symbol.prototype?"symbol":typeof g},fi(p)}function bm(p,g){for(var E=0;E<g.length;E++){var f=g[E];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(p,(v=function(x,_){if(fi(x)!=="object"||x===null)return x;var L=x[Symbol.toPrimitive];if(L!==void 0){var k=L.call(x,"string");if(fi(k)!=="object")return k;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(x)}(f.key),fi(v)==="symbol"?v:String(v)),f)}var v}var xm=function(){function p(f){var v=this;(function($,q){if(!($ instanceof q))throw new TypeError("Cannot call a class as a function")})(this,p),this.player=f,this.player.template.mask.addEventListener("click",function(){v.hide()}),this.player.template.settingButton.addEventListener("click",function(){v.show()}),this.loop=this.player.options.loop,this.player.template.loopToggle.checked=this.loop,this.player.template.loop.addEventListener("click",function(){v.player.template.loopToggle.checked=!v.player.template.loopToggle.checked,v.player.template.loopToggle.checked?v.loop=!0:v.loop=!1,v.hide()}),this.showDanmaku=this.player.user.get("danmaku"),this.showDanmaku||this.player.danmaku&&this.player.danmaku.hide(),this.player.template.showDanmakuToggle.checked=this.showDanmaku,this.player.template.showDanmaku.addEventListener("click",function(){v.player.template.showDanmakuToggle.checked=!v.player.template.showDanmakuToggle.checked,v.player.template.showDanmakuToggle.checked?(v.showDanmaku=!0,v.player.danmaku.show()):(v.showDanmaku=!1,v.player.danmaku.hide()),v.player.user.set("danmaku",v.showDanmaku?1:0),v.hide()}),this.unlimitDanmaku=this.player.user.get("unlimited"),this.player.template.unlimitDanmakuToggle.checked=this.unlimitDanmaku,this.player.template.unlimitDanmaku.addEventListener("click",function(){v.player.template.unlimitDanmakuToggle.checked=!v.player.template.unlimitDanmakuToggle.checked,v.player.template.unlimitDanmakuToggle.checked?(v.unlimitDanmaku=!0,v.player.danmaku.unlimit(!0)):(v.unlimitDanmaku=!1,v.player.danmaku.unlimit(!1)),v.player.user.set("unlimited",v.unlimitDanmaku?1:0),v.hide()}),this.player.template.speed.addEventListener("click",function(){v.player.template.settingBox.classList.add("dplayer-setting-box-narrow"),v.player.template.settingBox.classList.add("dplayer-setting-box-speed")});for(var x=function($){v.player.template.speedItem[$].addEventListener("click",function(){v.player.speed(v.player.template.speedItem[$].dataset.speed),v.hide()})},_=0;_<this.player.template.speedItem.length;_++)x(_);if(this.player.danmaku){this.player.on("danmaku_opacity",function($){v.player.bar.set("danmaku",$,"width"),v.player.user.set("opacity",$)}),this.player.danmaku.opacity(this.player.user.get("opacity"));var L=function($){var q=$||window.event,fe=((q.clientX||q.changedTouches[0].clientX)-j.getBoundingClientRectViewLeft(v.player.template.danmakuOpacityBarWrap))/130;fe=Math.max(fe,0),fe=Math.min(fe,1),v.player.danmaku.opacity(fe)},k=function $(){document.removeEventListener(j.nameMap.dragEnd,$),document.removeEventListener(j.nameMap.dragMove,L),v.player.template.danmakuOpacityBox.classList.remove("dplayer-setting-danmaku-active")};this.player.template.danmakuOpacityBarWrapWrap.addEventListener("click",function($){var q=$||window.event,fe=((q.clientX||q.changedTouches[0].clientX)-j.getBoundingClientRectViewLeft(v.player.template.danmakuOpacityBarWrap))/130;fe=Math.max(fe,0),fe=Math.min(fe,1),v.player.danmaku.opacity(fe)}),this.player.template.danmakuOpacityBarWrapWrap.addEventListener(j.nameMap.dragStart,function(){document.addEventListener(j.nameMap.dragMove,L),document.addEventListener(j.nameMap.dragEnd,k),v.player.template.danmakuOpacityBox.classList.add("dplayer-setting-danmaku-active")})}}var g,E;return g=p,(E=[{key:"hide",value:function(){var f=this;this.player.template.settingBox.classList.remove("dplayer-setting-box-open"),this.player.template.mask.classList.remove("dplayer-mask-show"),setTimeout(function(){f.player.template.settingBox.classList.remove("dplayer-setting-box-narrow"),f.player.template.settingBox.classList.remove("dplayer-setting-box-speed")},300),this.player.controller.disableAutoHide=!1}},{key:"show",value:function(){this.player.template.settingBox.classList.add("dplayer-setting-box-open"),this.player.template.mask.classList.add("dplayer-mask-show"),this.player.controller.disableAutoHide=!0}}])&&bm(g.prototype,E),Object.defineProperty(g,"prototype",{writable:!1}),p}();const Em=xm;function pi(p){return pi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(g){return typeof g}:function(g){return g&&typeof Symbol=="function"&&g.constructor===Symbol&&g!==Symbol.prototype?"symbol":typeof g},pi(p)}function _m(p,g){for(var E=0;E<g.length;E++){var f=g[E];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(p,(v=function(x,_){if(pi(x)!=="object"||x===null)return x;var L=x[Symbol.toPrimitive];if(L!==void 0){var k=L.call(x,"string");if(pi(k)!=="object")return k;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(x)}(f.key),pi(v)==="symbol"?v:String(v)),f)}var v}var wm=function(){function p(f){var v=this;(function(x,_){if(!(x instanceof _))throw new TypeError("Cannot call a class as a function")})(this,p),this.player=f,this.player.template.mask.addEventListener("click",function(){v.hide()}),this.player.template.commentButton.addEventListener("click",function(){v.show()}),this.player.template.commentSettingButton.addEventListener("click",function(){v.toggleSetting()}),this.player.template.commentColorSettingBox.addEventListener("click",function(){if(v.player.template.commentColorSettingBox.querySelector("input:checked+span")){var x=v.player.template.commentColorSettingBox.querySelector("input:checked").value;v.player.template.commentSettingFill.style.fill=x,v.player.template.commentInput.style.color=x,v.player.template.commentSendFill.style.fill=x}}),this.player.template.commentInput.addEventListener("click",function(){v.hideSetting()}),this.player.template.commentInput.addEventListener("keydown",function(x){(x||window.event).keyCode===13&&v.send()}),this.player.template.commentSendButton.addEventListener("click",function(){v.send()})}var g,E;return g=p,(E=[{key:"show",value:function(){this.player.controller.disableAutoHide=!0,this.player.template.controller.classList.add("dplayer-controller-comment"),this.player.template.mask.classList.add("dplayer-mask-show"),this.player.container.classList.add("dplayer-show-controller"),this.player.template.commentInput.focus()}},{key:"hide",value:function(){this.player.template.controller.classList.remove("dplayer-controller-comment"),this.player.template.mask.classList.remove("dplayer-mask-show"),this.player.container.classList.remove("dplayer-show-controller"),this.player.controller.disableAutoHide=!1,this.hideSetting()}},{key:"showSetting",value:function(){this.player.template.commentSettingBox.classList.add("dplayer-comment-setting-open")}},{key:"hideSetting",value:function(){this.player.template.commentSettingBox.classList.remove("dplayer-comment-setting-open")}},{key:"toggleSetting",value:function(){this.player.template.commentSettingBox.classList.contains("dplayer-comment-setting-open")?this.hideSetting():this.showSetting()}},{key:"send",value:function(){var f=this;this.player.template.commentInput.blur(),this.player.template.commentInput.value.replace(/^\s+|\s+$/g,"")?this.player.danmaku.send({text:this.player.template.commentInput.value,color:j.color2Number(this.player.container.querySelector(".dplayer-comment-setting-color input:checked").value),type:parseInt(this.player.container.querySelector(".dplayer-comment-setting-type input:checked").value)},function(){f.player.template.commentInput.value="",f.hide()}):this.player.notice(this.player.tran("please-input-danmaku"))}}])&&_m(g.prototype,E),Object.defineProperty(g,"prototype",{writable:!1}),p}();const Sm=wm;function mi(p){return mi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(g){return typeof g}:function(g){return g&&typeof Symbol=="function"&&g.constructor===Symbol&&g!==Symbol.prototype?"symbol":typeof g},mi(p)}function Tm(p,g){for(var E=0;E<g.length;E++){var f=g[E];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(p,(v=function(x,_){if(mi(x)!=="object"||x===null)return x;var L=x[Symbol.toPrimitive];if(L!==void 0){var k=L.call(x,"string");if(mi(k)!=="object")return k;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(x)}(f.key),mi(v)==="symbol"?v:String(v)),f)}var v}var Cm=function(){function p(f){(function(v,x){if(!(v instanceof x))throw new TypeError("Cannot call a class as a function")})(this,p),this.player=f,this.doHotKeyHandler=this.doHotKey.bind(this),this.cancelFullScreenHandler=this.cancelFullScreen.bind(this),this.player.options.hotkey&&document.addEventListener("keydown",this.doHotKeyHandler),document.addEventListener("keydown",this.cancelFullScreenHandler)}var g,E;return g=p,(E=[{key:"doHotKey",value:function(f){if(this.player.focus){var v=document.activeElement.tagName.toUpperCase(),x=document.activeElement.getAttribute("contenteditable");if(v!=="INPUT"&&v!=="TEXTAREA"&&x!==""&&x!=="true"){var _,L=f||window.event;switch(L.keyCode){case 32:L.preventDefault(),this.player.toggle();break;case 37:if(L.preventDefault(),this.player.options.live)break;this.player.seek(this.player.video.currentTime-5),this.player.controller.setAutoHide();break;case 39:if(L.preventDefault(),this.player.options.live)break;this.player.seek(this.player.video.currentTime+5),this.player.controller.setAutoHide();break;case 38:L.preventDefault(),_=this.player.volume()+.1,this.player.volume(_);break;case 40:L.preventDefault(),_=this.player.volume()-.1,this.player.volume(_)}}}}},{key:"cancelFullScreen",value:function(f){(f||window.event).keyCode===27&&this.player.fullScreen.isFullScreen("web")&&this.player.fullScreen.cancel("web")}},{key:"destroy",value:function(){this.player.options.hotkey&&document.removeEventListener("keydown",this.doHotKeyHandler),document.removeEventListener("keydown",this.cancelFullScreenHandler)}}])&&Tm(g.prototype,E),Object.defineProperty(g,"prototype",{writable:!1}),p}();const Lm=Cm;function gi(p){return gi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(g){return typeof g}:function(g){return g&&typeof Symbol=="function"&&g.constructor===Symbol&&g!==Symbol.prototype?"symbol":typeof g},gi(p)}function km(p,g){for(var E=0;E<g.length;E++){var f=g[E];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(p,(v=function(x,_){if(gi(x)!=="object"||x===null)return x;var L=x[Symbol.toPrimitive];if(L!==void 0){var k=L.call(x,"string");if(gi(k)!=="object")return k;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(x)}(f.key),gi(v)==="symbol"?v:String(v)),f)}var v}var Rm=function(){function p(f){var v=this;(function(x,_){if(!(x instanceof _))throw new TypeError("Cannot call a class as a function")})(this,p),this.player=f,this.shown=!1,Array.prototype.slice.call(this.player.template.menuItem).forEach(function(x,_){v.player.options.contextmenu[_].click&&x.addEventListener("click",function(){v.player.options.contextmenu[_].click(v.player),v.hide()})}),this.contextmenuHandler=function(x){if(v.shown)v.hide();else{var _=x||window.event;_.preventDefault();var L=v.player.container.getBoundingClientRect();v.show(_.clientX-L.left,_.clientY-L.top),v.player.template.mask.addEventListener("click",function(){v.hide()})}},this.player.container.addEventListener("contextmenu",this.contextmenuHandler)}var g,E;return g=p,(E=[{key:"show",value:function(f,v){this.player.template.menu.classList.add("dplayer-menu-show");var x=this.player.container.getBoundingClientRect();f+this.player.template.menu.offsetWidth>=x.width?(this.player.template.menu.style.right=x.width-f+"px",this.player.template.menu.style.left="initial"):(this.player.template.menu.style.left=f+"px",this.player.template.menu.style.right="initial"),v+this.player.template.menu.offsetHeight>=x.height?(this.player.template.menu.style.bottom=x.height-v+"px",this.player.template.menu.style.top="initial"):(this.player.template.menu.style.top=v+"px",this.player.template.menu.style.bottom="initial"),this.player.template.mask.classList.add("dplayer-mask-show"),this.shown=!0,this.player.events.trigger("contextmenu_show")}},{key:"hide",value:function(){this.player.template.mask.classList.remove("dplayer-mask-show"),this.player.template.menu.classList.remove("dplayer-menu-show"),this.shown=!1,this.player.events.trigger("contextmenu_hide")}},{key:"destroy",value:function(){this.player.container.removeEventListener("contextmenu",this.contextmenuHandler)}}])&&km(g.prototype,E),Object.defineProperty(g,"prototype",{writable:!1}),p}();const Im=Rm;function yi(p){return yi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(g){return typeof g}:function(g){return g&&typeof Symbol=="function"&&g.constructor===Symbol&&g!==Symbol.prototype?"symbol":typeof g},yi(p)}function Dm(p,g){for(var E=0;E<g.length;E++){var f=g[E];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(p,(v=function(x,_){if(yi(x)!=="object"||x===null)return x;var L=x[Symbol.toPrimitive];if(L!==void 0){var k=L.call(x,"string");if(yi(k)!=="object")return k;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(x)}(f.key),yi(v)==="symbol"?v:String(v)),f)}var v}var Bm=function(){function p(f){var v=this;(function(x,_){if(!(x instanceof _))throw new TypeError("Cannot call a class as a function")})(this,p),this.container=f.template.infoPanel,this.template=f.template,this.video=f.video,this.player=f,this.template.infoPanelClose.addEventListener("click",function(){v.hide()})}var g,E;return g=p,(E=[{key:"show",value:function(){this.beginTime=Date.now(),this.update(),this.player.timer.enable("info"),this.player.timer.enable("fps"),this.container.classList.remove("dplayer-info-panel-hide")}},{key:"hide",value:function(){this.player.timer.disable("info"),this.player.timer.disable("fps"),this.container.classList.add("dplayer-info-panel-hide")}},{key:"triggle",value:function(){this.container.classList.contains("dplayer-info-panel-hide")?this.show():this.hide()}},{key:"update",value:function(){this.template.infoVersion.innerHTML="v".concat("1.27.1"," ").concat("v1.27.0-12-g4f61091"),this.template.infoType.innerHTML=this.player.type,this.template.infoUrl.innerHTML=this.player.options.video.url,this.template.infoResolution.innerHTML="".concat(this.player.video.videoWidth," x ").concat(this.player.video.videoHeight),this.template.infoDuration.innerHTML=this.player.video.duration,this.player.options.danmaku&&(this.template.infoDanmakuId.innerHTML=this.player.options.danmaku.id,this.template.infoDanmakuApi.innerHTML=this.player.options.danmaku.api,this.template.infoDanmakuAmount.innerHTML=this.player.danmaku.dan.length)}},{key:"fps",value:function(f){this.template.infoFPS.innerHTML="".concat(f.toFixed(1))}}])&&Dm(g.prototype,E),Object.defineProperty(g,"prototype",{writable:!1}),p}();const Pm=Bm;var Om=i(568),Mm=i.n(Om);function Ai(p){return Ai=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(g){return typeof g}:function(g){return g&&typeof Symbol=="function"&&g.constructor===Symbol&&g!==Symbol.prototype?"symbol":typeof g},Ai(p)}function Tc(p,g){var E=Object.keys(p);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(p);g&&(f=f.filter(function(v){return Object.getOwnPropertyDescriptor(p,v).enumerable})),E.push.apply(E,f)}return E}function Fm(p,g,E){return(g=Lc(g))in p?Object.defineProperty(p,g,{value:E,enumerable:!0,configurable:!0,writable:!0}):p[g]=E,p}function Cc(p,g){for(var E=0;E<g.length;E++){var f=g[E];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(p,Lc(f.key),f)}}function Lc(p){var g=function(E,f){if(Ai(E)!=="object"||E===null)return E;var v=E[Symbol.toPrimitive];if(v!==void 0){var x=v.call(E,"string");if(Ai(x)!=="object")return x;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(E)}(p);return Ai(g)==="symbol"?g:String(g)}var kc=0,fr=[],Nm=function(){function p(v){var x=this;(function(_,L){if(!(_ instanceof L))throw new TypeError("Cannot call a class as a function")})(this,p),this.options=function(_){var L={container:_.element||document.getElementsByClassName("dplayer")[0],live:!1,autoplay:!1,theme:"#b7daff",loop:!1,lang:(navigator.language||navigator.browserLanguage).toLowerCase(),screenshot:!1,airplay:!0,chromecast:!1,hotkey:!0,preload:"metadata",volume:.7,playbackSpeed:[.5,.75,1,1.25,1.5,2],apiBackend:n0,video:{},contextmenu:[],mutex:!0,pluginOptions:{hls:{},flv:{},dash:{},webtorrent:{}},preventClickToggle:!1};for(var k in L)L.hasOwnProperty(k)&&!_.hasOwnProperty(k)&&(_[k]=L[k]);return _.video&&!_.video.type&&(_.video.type="auto"),$o(_.danmaku)==="object"&&_.danmaku&&!_.danmaku.user&&(_.danmaku.user="DIYgod"),_.subtitle&&(!_.subtitle.type&&(_.subtitle.type="webvtt"),!_.subtitle.fontSize&&(_.subtitle.fontSize="20px"),!_.subtitle.bottom&&(_.subtitle.bottom="40px"),!_.subtitle.color&&(_.subtitle.color="#fff")),_.video.quality&&(_.video.url=_.video.quality[_.video.defaultQuality].url),_.lang&&(_.lang=_.lang.toLowerCase()),_.contextmenu=_.contextmenu.concat([{key:"video-info",click:function($){$.infoPanel.triggle()}},{key:"about-author",link:"https://diygod.me"},{text:"DPlayer v".concat("1.27.1"),link:"https://github.com/MoePlayer/DPlayer"}]),_}(function(_){for(var L=1;L<arguments.length;L++){var k=arguments[L]!=null?arguments[L]:{};L%2?Tc(Object(k),!0).forEach(function($){Fm(_,$,k[$])}):Object.getOwnPropertyDescriptors?Object.defineProperties(_,Object.getOwnPropertyDescriptors(k)):Tc(Object(k)).forEach(function($){Object.defineProperty(_,$,Object.getOwnPropertyDescriptor(k,$))})}return _}({preload:v.video.type==="webtorrent"?"none":"metadata"},v)),this.options.video.quality&&(this.qualityIndex=this.options.video.defaultQuality,this.quality=this.options.video.quality[this.options.video.defaultQuality]),this.tran=new r0(this.options.lang).tran,this.events=new V0,this.user=new J0(this),this.container=this.options.container,this.noticeList={},this.container.classList.add("dplayer"),this.options.danmaku||this.container.classList.add("dplayer-no-danmaku"),this.options.live?this.container.classList.add("dplayer-live"):this.container.classList.remove("dplayer-live"),j.isMobile&&this.container.classList.add("dplayer-mobile"),this.arrow=this.container.offsetWidth<=500,this.arrow&&this.container.classList.add("dplayer-arrow"),this.options.subtitle&&Array.isArray(this.options.subtitle.url)&&(this.options.subtitle.url.push({subtitle:"",lang:"off"}),this.options.subtitle.defaultSubtitle&&(typeof this.options.subtitle.defaultSubtitle=="string"?this.options.subtitle.index=this.options.subtitle.url.findIndex(function(_){return _.lang===x.options.subtitle.defaultSubtitle||_.name===x.options.subtitle.defaultSubtitle}):typeof this.options.subtitle.defaultSubtitle=="number"&&(this.options.subtitle.index=this.options.subtitle.defaultSubtitle)),(this.options.subtitle.index===-1||!this.options.subtitle.index||this.options.subtitle.index>this.options.subtitle.url.length-1)&&(this.options.subtitle.index=this.options.subtitle.url.findIndex(function(_){return _.lang===x.options.lang})),this.options.subtitle.index===-1&&(this.options.subtitle.index=this.options.subtitle.url.length-1)),this.template=new wc({container:this.container,options:this.options,index:kc,tran:this.tran}),this.video=this.template.video,this.bar=new lm(this.template),this.bezel=new fm(this.template.bezel),this.fullScreen=new Q0(this),this.controller=new vm(this),this.options.danmaku&&(this.danmaku=new q0({player:this,container:this.template.danmaku,opacity:this.user.get("opacity"),callback:function(){setTimeout(function(){x.template.danmakuLoading.style.display="none",x.options.autoplay&&x.play()},0)},error:function(_){x.notice(_)},apiBackend:this.options.apiBackend,borderColor:this.options.theme,height:this.arrow?24:30,time:function(){return x.video.currentTime},unlimited:this.user.get("unlimited"),api:{id:this.options.danmaku.id,address:this.options.danmaku.api,token:this.options.danmaku.token,maximum:this.options.danmaku.maximum,addition:this.options.danmaku.addition,user:this.options.danmaku.user,speedRate:this.options.danmaku.speedRate},events:this.events,tran:function(_){return x.tran(_)}}),this.comment=new Sm(this)),this.setting=new Em(this),this.plugins={},this.docClickFun=function(){x.focus=!1},this.containerClickFun=function(){x.focus=!0},document.addEventListener("click",this.docClickFun,!0),this.container.addEventListener("click",this.containerClickFun,!0),this.paused=!0,this.timer=new um(this),this.hotkey=new Lm(this),this.contextmenu=new Im(this),this.initVideo(this.video,this.quality&&this.quality.type||this.options.video.type),this.infoPanel=new Pm(this),!this.danmaku&&this.options.autoplay&&this.play(),kc++,fr.push(this)}var g,E,f;return g=p,E=[{key:"seek",value:function(v){v=Math.max(v,0),this.video.duration&&(v=Math.min(v,this.video.duration)),this.video.currentTime<v?this.notice("".concat(this.tran("ff").replace("%s",(v-this.video.currentTime).toFixed(0)))):this.video.currentTime>v&&this.notice("".concat(this.tran("rew").replace("%s",(this.video.currentTime-v).toFixed(0)))),this.video.currentTime=v,this.danmaku&&this.danmaku.seek(),this.bar.set("played",v/this.video.duration,"width"),this.template.ptime.innerHTML=j.secondToTime(v)}},{key:"play",value:function(v){var x=this;if(this.paused=!1,this.video.paused&&!j.isMobile&&this.bezel.switch(Xt.play),this.template.playButton.innerHTML=Xt.pause,this.template.mobilePlayButton.innerHTML=Xt.pause,v||Q.resolve(this.video.play()).catch(function(){x.pause()}).then(function(){}),this.timer.enable("loading"),this.container.classList.remove("dplayer-paused"),this.container.classList.add("dplayer-playing"),this.danmaku&&this.danmaku.play(),this.options.mutex)for(var _=0;_<fr.length;_++)this!==fr[_]&&fr[_].pause()}},{key:"pause",value:function(v){this.paused=!0,this.container.classList.remove("dplayer-loading"),this.video.paused||j.isMobile||this.bezel.switch(Xt.pause),this.template.playButton.innerHTML=Xt.play,this.template.mobilePlayButton.innerHTML=Xt.play,v||this.video.pause(),this.timer.disable("loading"),this.container.classList.remove("dplayer-playing"),this.container.classList.add("dplayer-paused"),this.danmaku&&this.danmaku.pause()}},{key:"switchVolumeIcon",value:function(){this.volume()>=.95?this.template.volumeIcon.innerHTML=Xt.volumeUp:this.volume()>0?this.template.volumeIcon.innerHTML=Xt.volumeDown:this.template.volumeIcon.innerHTML=Xt.volumeOff}},{key:"volume",value:function(v,x,_){if(v=parseFloat(v),!isNaN(v)){v=Math.max(v,0),v=Math.min(v,1),this.bar.set("volume",v,"width");var L="".concat((100*v).toFixed(0),"%");this.template.volumeBarWrapWrap.dataset.balloon=L,x||this.user.set("volume",v),_||this.notice("".concat(this.tran("volume")," ").concat((100*v).toFixed(0),"%"),void 0,void 0,"volume"),this.video.volume=v,this.video.muted&&(this.video.muted=!1),this.switchVolumeIcon()}return this.video.volume}},{key:"toggle",value:function(){this.video.paused?this.play():this.pause()}},{key:"on",value:function(v,x){this.events.on(v,x)}},{key:"switchVideo",value:function(v,x){this.pause(),this.video.poster=v.pic?v.pic:"",this.video.src=v.url,this.initMSE(this.video,v.type||"auto"),x&&(this.template.danmakuLoading.style.display="block",this.bar.set("played",0,"width"),this.bar.set("loaded",0,"width"),this.template.ptime.innerHTML="00:00",this.template.danmaku.innerHTML="",this.danmaku&&this.danmaku.reload({id:x.id,address:x.api,token:x.token,maximum:x.maximum,addition:x.addition,user:x.user}))}},{key:"initMSE",value:function(v,x){var _=this;if(this.type=x,this.options.video.customType&&this.options.video.customType[x])Object.prototype.toString.call(this.options.video.customType[x])==="[object Function]"?this.options.video.customType[x](this.video,this):console.error("Illegal customType: ".concat(x));else switch(this.type==="auto"&&(/m3u8(#|\?|$)/i.exec(v.src)?this.type="hls":/.flv(#|\?|$)/i.exec(v.src)?this.type="flv":/.mpd(#|\?|$)/i.exec(v.src)?this.type="dash":this.type="normal"),this.type==="hls"&&(v.canPlayType("application/x-mpegURL")||v.canPlayType("application/vnd.apple.mpegURL"))&&(this.type="normal"),this.type){case"hls":if(window.Hls)if(window.Hls.isSupported()){var L=this.options.pluginOptions.hls,k=new window.Hls(L);this.plugins.hls=k,k.loadSource(v.src),k.attachMedia(v),this.events.on("destroy",function(){k.destroy(),delete _.plugins.hls})}else this.notice("Error: Hls is not supported.");else this.notice("Error: Can't find Hls.");break;case"flv":if(window.flvjs)if(window.flvjs.isSupported()){var $=window.flvjs.createPlayer(Object.assign(this.options.pluginOptions.flv.mediaDataSource||{},{type:"flv",url:v.src}),this.options.pluginOptions.flv.config);this.plugins.flvjs=$,$.attachMediaElement(v),$.load(),this.events.on("destroy",function(){$.unload(),$.detachMediaElement(),$.destroy(),delete _.plugins.flvjs})}else this.notice("Error: flvjs is not supported.");else this.notice("Error: Can't find flvjs.");break;case"dash":if(window.dashjs){var q=window.dashjs.MediaPlayer().create().initialize(v,v.src,!1),fe=this.options.pluginOptions.dash;q.updateSettings(fe),this.plugins.dash=q,this.events.on("destroy",function(){window.dashjs.MediaPlayer().reset(),delete _.plugins.dash})}else this.notice("Error: Can't find dashjs.");break;case"webtorrent":if(window.WebTorrent)if(window.WebTorrent.WEBRTC_SUPPORT){this.container.classList.add("dplayer-loading");var ye=this.options.pluginOptions.webtorrent,be=new window.WebTorrent(ye);this.plugins.webtorrent=be;var Ae=v.src;v.src="",v.preload="metadata",v.addEventListener("durationchange",function(){return _.container.classList.remove("dplayer-loading")},{once:!0}),be.add(Ae,function(pe){pe.files.find(function(we){return we.name.endsWith(".mp4")}).renderTo(_.video,{autoplay:_.options.autoplay,controls:!1})}),this.events.on("destroy",function(){be.remove(Ae),be.destroy(),delete _.plugins.webtorrent})}else this.notice("Error: Webtorrent is not supported.");else this.notice("Error: Can't find Webtorrent.")}}},{key:"initVideo",value:function(v,x){var _=this;this.initMSE(v,x),this.on("durationchange",function(){v.duration!==1&&v.duration!==1/0&&(_.template.dtime.innerHTML=j.secondToTime(v.duration))}),this.on("progress",function(){var $=v.buffered.length?v.buffered.end(v.buffered.length-1)/v.duration:0;_.bar.set("loaded",$,"width")}),this.on("error",function(){_.video.error&&_.tran&&_.notice&&_.type!=="webtorrent"&&_.notice(_.tran("video-failed"))}),this.on("ended",function(){_.bar.set("played",1,"width"),_.setting.loop?(_.seek(0),_.play()):_.pause(),_.danmaku&&(_.danmaku.danIndex=0)}),this.on("play",function(){_.paused&&_.play(!0)}),this.on("pause",function(){_.paused||_.pause(!0)}),this.on("timeupdate",function(){_.bar.set("played",_.video.currentTime/_.video.duration,"width");var $=j.secondToTime(_.video.currentTime);_.template.ptime.innerHTML!==$&&(_.template.ptime.innerHTML=$)});for(var L=function($){v.addEventListener(_.events.videoEvents[$],function(q){_.events.trigger(_.events.videoEvents[$],q)})},k=0;k<this.events.videoEvents.length;k++)L(k);this.volume(this.user.get("volume"),!0,!0),this.options.subtitle&&(this.subtitle=new nm(this.template.subtitle,this.video,this.options.subtitle,this.events),Array.isArray(this.options.subtitle.url)&&(this.subtitles=new sm(this)),this.user.get("subtitle")||this.subtitle.hide())}},{key:"switchQuality",value:function(v){var x=this;if(v=typeof v=="string"?parseInt(v):v,this.qualityIndex!==v&&!this.switchingQuality){this.prevIndex=this.qualityIndex,this.qualityIndex=v,this.switchingQuality=!0,this.quality=this.options.video.quality[v],this.template.qualityButton.innerHTML=this.quality.name;var _=this.video.paused;this.video.pause();var L=Mm()({current:!1,pic:null,screenshot:this.options.screenshot,preload:"auto",url:this.quality.url,subtitle:this.options.subtitle}),k=new DOMParser().parseFromString(L,"text/html").body.firstChild;this.template.videoWrap.insertBefore(k,this.template.videoWrap.getElementsByTagName("div")[0]),this.prevVideo=this.video,this.video=k,this.initVideo(this.video,this.quality.type||this.options.video.type),this.seek(this.prevVideo.currentTime),this.notice("".concat(this.tran("switching-quality").replace("%q",this.quality.name)),-1,void 0,"switch-quality"),this.events.trigger("quality_start",this.quality),this.on("canplay",function(){if(x.prevVideo){if(x.video.currentTime!==x.prevVideo.currentTime)return void x.seek(x.prevVideo.currentTime);x.template.videoWrap.removeChild(x.prevVideo),x.video.classList.add("dplayer-video-current"),_||x.video.play(),x.prevVideo=null,x.notice("".concat(x.tran("switched-quality").replace("%q",x.quality.name)),void 0,void 0,"switch-quality"),x.switchingQuality=!1,x.events.trigger("quality_end")}}),this.on("error",function(){x.video.error&&x.prevVideo&&(x.template.videoWrap.removeChild(x.video),x.video=x.prevVideo,_||x.video.play(),x.qualityIndex=x.prevIndex,x.quality=x.options.video.quality[x.qualityIndex],x.noticeTime=setTimeout(function(){x.template.notice.style.opacity=0,x.events.trigger("notice_hide")},3e3),x.prevVideo=null,x.switchingQuality=!1)})}}},{key:"notice",value:function(v){var x,_,L,k=arguments.length>1&&arguments[1]!==void 0?arguments[1]:2e3,$=arguments.length>2&&arguments[2]!==void 0?arguments[2]:.8,q=arguments.length>3?arguments[3]:void 0;if(q&&((x=document.getElementById("dplayer-notice-".concat(q)))&&(x.innerHTML=v),this.noticeList[q]&&(clearTimeout(this.noticeList[q]),this.noticeList[q]=null)),!x){var fe=wc.NewNotice(v,$,q);this.template.noticeList.appendChild(fe),x=fe}this.events.trigger("notice_show",x),k>0&&(this.noticeList[q]=setTimeout((_=x,L=this,function(){_.addEventListener("animationend",function(){L.template.noticeList.removeChild(_)}),_.classList.add("remove-notice"),L.events.trigger("notice_hide"),L.noticeList[q]=null}),k))}},{key:"resize",value:function(){this.danmaku&&this.danmaku.resize(),this.controller.thumbnails&&this.controller.thumbnails.resize(160,this.video.videoHeight/this.video.videoWidth*160,this.template.barWrap.offsetWidth),this.events.trigger("resize")}},{key:"speed",value:function(v){this.video.playbackRate=v}},{key:"destroy",value:function(){fr.splice(fr.indexOf(this),1),this.pause(),document.removeEventListener("click",this.docClickFun,!0),this.container.removeEventListener("click",this.containerClickFun,!0),this.fullScreen.destroy(),this.hotkey.destroy(),this.contextmenu.destroy(),this.controller.destroy(),this.timer.destroy(),this.video.src="",this.container.innerHTML="",this.events.trigger("destroy")}}],f=[{key:"version",get:function(){return"1.27.1"}}],E&&Cc(g.prototype,E),f&&Cc(g,f),Object.defineProperty(g,"prototype",{writable:!1}),p}();const Um=Nm;console.log(`
`.concat(" %c DPlayer v","1.27.1"," ").concat("v1.27.0-12-g4f61091"," %c https://dplayer.diygod.dev ",`
`,`
`),"color: #fadfa3; background: #030307; padding:5px 0;","background: #fadfa3; padding:5px 0;");const $m=Um})(),s.default})())})(kf);var R2=kf.exports;const I2=k2(R2);function D2(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Rf={exports:{}};(function(n,e){(function(t){var r=/^(?=((?:[a-zA-Z0-9+\-.]+:)?))\1(?=((?:\/\/[^\/?#]*)?))\2(?=((?:(?:[^?#\/]*\/)*[^;?#\/]*)?))\3((?:;[^?#]*)?)(\?[^#]*)?(#[^]*)?$/,i=/^(?=([^\/?#]*))\1([^]*)$/,s=/(?:\/|^)\.(?=\/)/g,o=/(?:\/|^)\.\.\/(?!\.\.\/)[^\/]*(?=\/)/g,a={buildAbsoluteURL:function(l,c,d){if(d=d||{},l=l.trim(),c=c.trim(),!c){if(!d.alwaysNormalize)return l;var u=a.parseURL(l);if(!u)throw new Error("Error trying to parse base URL.");return u.path=a.normalizePath(u.path),a.buildURLFromParts(u)}var h=a.parseURL(c);if(!h)throw new Error("Error trying to parse relative URL.");if(h.scheme)return d.alwaysNormalize?(h.path=a.normalizePath(h.path),a.buildURLFromParts(h)):c;var y=a.parseURL(l);if(!y)throw new Error("Error trying to parse base URL.");if(!y.netLoc&&y.path&&y.path[0]!=="/"){var m=i.exec(y.path);y.netLoc=m[1],y.path=m[2]}y.netLoc&&!y.path&&(y.path="/");var A={scheme:y.scheme,netLoc:h.netLoc,path:null,params:h.params,query:h.query,fragment:h.fragment};if(!h.netLoc&&(A.netLoc=y.netLoc,h.path[0]!=="/"))if(!h.path)A.path=y.path,h.params||(A.params=y.params,h.query||(A.query=y.query));else{var b=y.path,S=b.substring(0,b.lastIndexOf("/")+1)+h.path;A.path=a.normalizePath(S)}return A.path===null&&(A.path=d.alwaysNormalize?a.normalizePath(h.path):h.path),a.buildURLFromParts(A)},parseURL:function(l){var c=r.exec(l);return c?{scheme:c[1]||"",netLoc:c[2]||"",path:c[3]||"",params:c[4]||"",query:c[5]||"",fragment:c[6]||""}:null},normalizePath:function(l){for(l=l.split("").reverse().join("").replace(s,"");l.length!==(l=l.replace(o,"")).length;);return l.split("").reverse().join("")},buildURLFromParts:function(l){return l.scheme+l.netLoc+l.path+l.params+l.query+l.fragment}};n.exports=a})()})(Rf);var Pl=Rf.exports;function Kd(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(n,i).enumerable})),t.push.apply(t,r)}return t}function _t(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Kd(Object(t),!0).forEach(function(r){O2(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):Kd(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function B2(n,e){if(typeof n!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function P2(n){var e=B2(n,"string");return typeof e=="symbol"?e:String(e)}function O2(n,e,t){return e=P2(e),e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function mt(){return mt=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},mt.apply(this,arguments)}const xe=Number.isFinite||function(n){return typeof n=="number"&&isFinite(n)},M2=Number.isSafeInteger||function(n){return typeof n=="number"&&Math.abs(n)<=F2},F2=Number.MAX_SAFE_INTEGER||9007199254740991;let w=function(n){return n.MEDIA_ATTACHING="hlsMediaAttaching",n.MEDIA_ATTACHED="hlsMediaAttached",n.MEDIA_DETACHING="hlsMediaDetaching",n.MEDIA_DETACHED="hlsMediaDetached",n.BUFFER_RESET="hlsBufferReset",n.BUFFER_CODECS="hlsBufferCodecs",n.BUFFER_CREATED="hlsBufferCreated",n.BUFFER_APPENDING="hlsBufferAppending",n.BUFFER_APPENDED="hlsBufferAppended",n.BUFFER_EOS="hlsBufferEos",n.BUFFER_FLUSHING="hlsBufferFlushing",n.BUFFER_FLUSHED="hlsBufferFlushed",n.MANIFEST_LOADING="hlsManifestLoading",n.MANIFEST_LOADED="hlsManifestLoaded",n.MANIFEST_PARSED="hlsManifestParsed",n.LEVEL_SWITCHING="hlsLevelSwitching",n.LEVEL_SWITCHED="hlsLevelSwitched",n.LEVEL_LOADING="hlsLevelLoading",n.LEVEL_LOADED="hlsLevelLoaded",n.LEVEL_UPDATED="hlsLevelUpdated",n.LEVEL_PTS_UPDATED="hlsLevelPtsUpdated",n.LEVELS_UPDATED="hlsLevelsUpdated",n.AUDIO_TRACKS_UPDATED="hlsAudioTracksUpdated",n.AUDIO_TRACK_SWITCHING="hlsAudioTrackSwitching",n.AUDIO_TRACK_SWITCHED="hlsAudioTrackSwitched",n.AUDIO_TRACK_LOADING="hlsAudioTrackLoading",n.AUDIO_TRACK_LOADED="hlsAudioTrackLoaded",n.SUBTITLE_TRACKS_UPDATED="hlsSubtitleTracksUpdated",n.SUBTITLE_TRACKS_CLEARED="hlsSubtitleTracksCleared",n.SUBTITLE_TRACK_SWITCH="hlsSubtitleTrackSwitch",n.SUBTITLE_TRACK_LOADING="hlsSubtitleTrackLoading",n.SUBTITLE_TRACK_LOADED="hlsSubtitleTrackLoaded",n.SUBTITLE_FRAG_PROCESSED="hlsSubtitleFragProcessed",n.CUES_PARSED="hlsCuesParsed",n.NON_NATIVE_TEXT_TRACKS_FOUND="hlsNonNativeTextTracksFound",n.INIT_PTS_FOUND="hlsInitPtsFound",n.FRAG_LOADING="hlsFragLoading",n.FRAG_LOAD_EMERGENCY_ABORTED="hlsFragLoadEmergencyAborted",n.FRAG_LOADED="hlsFragLoaded",n.FRAG_DECRYPTED="hlsFragDecrypted",n.FRAG_PARSING_INIT_SEGMENT="hlsFragParsingInitSegment",n.FRAG_PARSING_USERDATA="hlsFragParsingUserdata",n.FRAG_PARSING_METADATA="hlsFragParsingMetadata",n.FRAG_PARSED="hlsFragParsed",n.FRAG_BUFFERED="hlsFragBuffered",n.FRAG_CHANGED="hlsFragChanged",n.FPS_DROP="hlsFpsDrop",n.FPS_DROP_LEVEL_CAPPING="hlsFpsDropLevelCapping",n.MAX_AUTO_LEVEL_UPDATED="hlsMaxAutoLevelUpdated",n.ERROR="hlsError",n.DESTROYING="hlsDestroying",n.KEY_LOADING="hlsKeyLoading",n.KEY_LOADED="hlsKeyLoaded",n.LIVE_BACK_BUFFER_REACHED="hlsLiveBackBufferReached",n.BACK_BUFFER_REACHED="hlsBackBufferReached",n.STEERING_MANIFEST_LOADED="hlsSteeringManifestLoaded",n}({}),Be=function(n){return n.NETWORK_ERROR="networkError",n.MEDIA_ERROR="mediaError",n.KEY_SYSTEM_ERROR="keySystemError",n.MUX_ERROR="muxError",n.OTHER_ERROR="otherError",n}({}),G=function(n){return n.KEY_SYSTEM_NO_KEYS="keySystemNoKeys",n.KEY_SYSTEM_NO_ACCESS="keySystemNoAccess",n.KEY_SYSTEM_NO_SESSION="keySystemNoSession",n.KEY_SYSTEM_NO_CONFIGURED_LICENSE="keySystemNoConfiguredLicense",n.KEY_SYSTEM_LICENSE_REQUEST_FAILED="keySystemLicenseRequestFailed",n.KEY_SYSTEM_SERVER_CERTIFICATE_REQUEST_FAILED="keySystemServerCertificateRequestFailed",n.KEY_SYSTEM_SERVER_CERTIFICATE_UPDATE_FAILED="keySystemServerCertificateUpdateFailed",n.KEY_SYSTEM_SESSION_UPDATE_FAILED="keySystemSessionUpdateFailed",n.KEY_SYSTEM_STATUS_OUTPUT_RESTRICTED="keySystemStatusOutputRestricted",n.KEY_SYSTEM_STATUS_INTERNAL_ERROR="keySystemStatusInternalError",n.MANIFEST_LOAD_ERROR="manifestLoadError",n.MANIFEST_LOAD_TIMEOUT="manifestLoadTimeOut",n.MANIFEST_PARSING_ERROR="manifestParsingError",n.MANIFEST_INCOMPATIBLE_CODECS_ERROR="manifestIncompatibleCodecsError",n.LEVEL_EMPTY_ERROR="levelEmptyError",n.LEVEL_LOAD_ERROR="levelLoadError",n.LEVEL_LOAD_TIMEOUT="levelLoadTimeOut",n.LEVEL_PARSING_ERROR="levelParsingError",n.LEVEL_SWITCH_ERROR="levelSwitchError",n.AUDIO_TRACK_LOAD_ERROR="audioTrackLoadError",n.AUDIO_TRACK_LOAD_TIMEOUT="audioTrackLoadTimeOut",n.SUBTITLE_LOAD_ERROR="subtitleTrackLoadError",n.SUBTITLE_TRACK_LOAD_TIMEOUT="subtitleTrackLoadTimeOut",n.FRAG_LOAD_ERROR="fragLoadError",n.FRAG_LOAD_TIMEOUT="fragLoadTimeOut",n.FRAG_DECRYPT_ERROR="fragDecryptError",n.FRAG_PARSING_ERROR="fragParsingError",n.FRAG_GAP="fragGap",n.REMUX_ALLOC_ERROR="remuxAllocError",n.KEY_LOAD_ERROR="keyLoadError",n.KEY_LOAD_TIMEOUT="keyLoadTimeOut",n.BUFFER_ADD_CODEC_ERROR="bufferAddCodecError",n.BUFFER_INCOMPATIBLE_CODECS_ERROR="bufferIncompatibleCodecsError",n.BUFFER_APPEND_ERROR="bufferAppendError",n.BUFFER_APPENDING_ERROR="bufferAppendingError",n.BUFFER_STALLED_ERROR="bufferStalledError",n.BUFFER_FULL_ERROR="bufferFullError",n.BUFFER_SEEK_OVER_HOLE="bufferSeekOverHole",n.BUFFER_NUDGE_ON_STALL="bufferNudgeOnStall",n.INTERNAL_EXCEPTION="internalException",n.INTERNAL_ABORTED="aborted",n.UNKNOWN="unknown",n}({});const nr=function(){},qa={trace:nr,debug:nr,log:nr,warn:nr,info:nr,error:nr};let Bi=qa;function N2(n){const e=self.console[n];return e?e.bind(self.console,`[${n}] >`):nr}function U2(n,...e){e.forEach(function(t){Bi[t]=n[t]?n[t].bind(n):N2(t)})}function $2(n,e){if(typeof console=="object"&&n===!0||typeof n=="object"){U2(n,"debug","log","info","warn","error");try{Bi.log(`Debug logs enabled for "${e}" in hls.js version 1.5.7`)}catch{Bi=qa}}else Bi=qa}const M=Bi,H2=/^(\d+)x(\d+)$/,zd=/(.+?)=(".*?"|.*?)(?:,|$)/g;class ut{constructor(e){typeof e=="string"&&(e=ut.parseAttrList(e)),mt(this,e)}get clientAttrs(){return Object.keys(this).filter(e=>e.substring(0,2)==="X-")}decimalInteger(e){const t=parseInt(this[e],10);return t>Number.MAX_SAFE_INTEGER?1/0:t}hexadecimalInteger(e){if(this[e]){let t=(this[e]||"0x").slice(2);t=(t.length&1?"0":"")+t;const r=new Uint8Array(t.length/2);for(let i=0;i<t.length/2;i++)r[i]=parseInt(t.slice(i*2,i*2+2),16);return r}else return null}hexadecimalIntegerAsNumber(e){const t=parseInt(this[e],16);return t>Number.MAX_SAFE_INTEGER?1/0:t}decimalFloatingPoint(e){return parseFloat(this[e])}optionalFloat(e,t){const r=this[e];return r?parseFloat(r):t}enumeratedString(e){return this[e]}bool(e){return this[e]==="YES"}decimalResolution(e){const t=H2.exec(this[e]);if(t!==null)return{width:parseInt(t[1],10),height:parseInt(t[2],10)}}static parseAttrList(e){let t;const r={},i='"';for(zd.lastIndex=0;(t=zd.exec(e))!==null;){let s=t[2];s.indexOf(i)===0&&s.lastIndexOf(i)===s.length-1&&(s=s.slice(1,-1));const o=t[1].trim();r[o]=s}return r}}function G2(n){return n!=="ID"&&n!=="CLASS"&&n!=="START-DATE"&&n!=="DURATION"&&n!=="END-DATE"&&n!=="END-ON-NEXT"}function K2(n){return n==="SCTE35-OUT"||n==="SCTE35-IN"}class If{constructor(e,t){if(this.attr=void 0,this._startDate=void 0,this._endDate=void 0,this._badValueForSameId=void 0,t){const r=t.attr;for(const i in r)if(Object.prototype.hasOwnProperty.call(e,i)&&e[i]!==r[i]){M.warn(`DATERANGE tag attribute: "${i}" does not match for tags with ID: "${e.ID}"`),this._badValueForSameId=i;break}e=mt(new ut({}),r,e)}if(this.attr=e,this._startDate=new Date(e["START-DATE"]),"END-DATE"in this.attr){const r=new Date(this.attr["END-DATE"]);xe(r.getTime())&&(this._endDate=r)}}get id(){return this.attr.ID}get class(){return this.attr.CLASS}get startDate(){return this._startDate}get endDate(){if(this._endDate)return this._endDate;const e=this.duration;return e!==null?new Date(this._startDate.getTime()+e*1e3):null}get duration(){if("DURATION"in this.attr){const e=this.attr.decimalFloatingPoint("DURATION");if(xe(e))return e}else if(this._endDate)return(this._endDate.getTime()-this._startDate.getTime())/1e3;return null}get plannedDuration(){return"PLANNED-DURATION"in this.attr?this.attr.decimalFloatingPoint("PLANNED-DURATION"):null}get endOnNext(){return this.attr.bool("END-ON-NEXT")}get isValid(){return!!this.id&&!this._badValueForSameId&&xe(this.startDate.getTime())&&(this.duration===null||this.duration>=0)&&(!this.endOnNext||!!this.class)}}class Lo{constructor(){this.aborted=!1,this.loaded=0,this.retry=0,this.total=0,this.chunkCount=0,this.bwEstimate=0,this.loading={start:0,first:0,end:0},this.parsing={start:0,end:0},this.buffering={start:0,first:0,end:0}}}var et={AUDIO:"audio",VIDEO:"video",AUDIOVIDEO:"audiovideo"};class Df{constructor(e){this._byteRange=null,this._url=null,this.baseurl=void 0,this.relurl=void 0,this.elementaryStreams={[et.AUDIO]:null,[et.VIDEO]:null,[et.AUDIOVIDEO]:null},this.baseurl=e}setByteRange(e,t){const r=e.split("@",2);let i;r.length===1?i=(t==null?void 0:t.byteRangeEndOffset)||0:i=parseInt(r[1]),this._byteRange=[i,parseInt(r[0])+i]}get byteRange(){return this._byteRange?this._byteRange:[]}get byteRangeStartOffset(){return this.byteRange[0]}get byteRangeEndOffset(){return this.byteRange[1]}get url(){return!this._url&&this.baseurl&&this.relurl&&(this._url=Pl.buildAbsoluteURL(this.baseurl,this.relurl,{alwaysNormalize:!0})),this._url||""}set url(e){this._url=e}}class na extends Df{constructor(e,t){super(t),this._decryptdata=null,this.rawProgramDateTime=null,this.programDateTime=null,this.tagList=[],this.duration=0,this.sn=0,this.levelkeys=void 0,this.type=void 0,this.loader=null,this.keyLoader=null,this.level=-1,this.cc=0,this.startPTS=void 0,this.endPTS=void 0,this.startDTS=void 0,this.endDTS=void 0,this.start=0,this.deltaPTS=void 0,this.maxStartPTS=void 0,this.minEndPTS=void 0,this.stats=new Lo,this.data=void 0,this.bitrateTest=!1,this.title=null,this.initSegment=null,this.endList=void 0,this.gap=void 0,this.urlId=0,this.type=e}get decryptdata(){const{levelkeys:e}=this;if(!e&&!this._decryptdata)return null;if(!this._decryptdata&&this.levelkeys&&!this.levelkeys.NONE){const t=this.levelkeys.identity;if(t)this._decryptdata=t.getDecryptData(this.sn);else{const r=Object.keys(this.levelkeys);if(r.length===1)return this._decryptdata=this.levelkeys[r[0]].getDecryptData(this.sn)}}return this._decryptdata}get end(){return this.start+this.duration}get endProgramDateTime(){if(this.programDateTime===null||!xe(this.programDateTime))return null;const e=xe(this.duration)?this.duration:0;return this.programDateTime+e*1e3}get encrypted(){var e;if((e=this._decryptdata)!=null&&e.encrypted)return!0;if(this.levelkeys){const t=Object.keys(this.levelkeys),r=t.length;if(r>1||r===1&&this.levelkeys[t[0]].encrypted)return!0}return!1}setKeyFormat(e){if(this.levelkeys){const t=this.levelkeys[e];t&&!this._decryptdata&&(this._decryptdata=t.getDecryptData(this.sn))}}abortRequests(){var e,t;(e=this.loader)==null||e.abort(),(t=this.keyLoader)==null||t.abort()}setElementaryStreamInfo(e,t,r,i,s,o=!1){const{elementaryStreams:a}=this,l=a[e];if(!l){a[e]={startPTS:t,endPTS:r,startDTS:i,endDTS:s,partial:o};return}l.startPTS=Math.min(l.startPTS,t),l.endPTS=Math.max(l.endPTS,r),l.startDTS=Math.min(l.startDTS,i),l.endDTS=Math.max(l.endDTS,s)}clearElementaryStreamInfo(){const{elementaryStreams:e}=this;e[et.AUDIO]=null,e[et.VIDEO]=null,e[et.AUDIOVIDEO]=null}}class z2 extends Df{constructor(e,t,r,i,s){super(r),this.fragOffset=0,this.duration=0,this.gap=!1,this.independent=!1,this.relurl=void 0,this.fragment=void 0,this.index=void 0,this.stats=new Lo,this.duration=e.decimalFloatingPoint("DURATION"),this.gap=e.bool("GAP"),this.independent=e.bool("INDEPENDENT"),this.relurl=e.enumeratedString("URI"),this.fragment=t,this.index=i;const o=e.enumeratedString("BYTERANGE");o&&this.setByteRange(o,s),s&&(this.fragOffset=s.fragOffset+s.duration)}get start(){return this.fragment.start+this.fragOffset}get end(){return this.start+this.duration}get loaded(){const{elementaryStreams:e}=this;return!!(e.audio||e.video||e.audiovideo)}}const q2=10;class j2{constructor(e){this.PTSKnown=!1,this.alignedSliding=!1,this.averagetargetduration=void 0,this.endCC=0,this.endSN=0,this.fragments=void 0,this.fragmentHint=void 0,this.partList=null,this.dateRanges=void 0,this.live=!0,this.ageHeader=0,this.advancedDateTime=void 0,this.updated=!0,this.advanced=!0,this.availabilityDelay=void 0,this.misses=0,this.startCC=0,this.startSN=0,this.startTimeOffset=null,this.targetduration=0,this.totalduration=0,this.type=null,this.url=void 0,this.m3u8="",this.version=null,this.canBlockReload=!1,this.canSkipUntil=0,this.canSkipDateRanges=!1,this.skippedSegments=0,this.recentlyRemovedDateranges=void 0,this.partHoldBack=0,this.holdBack=0,this.partTarget=0,this.preloadHint=void 0,this.renditionReports=void 0,this.tuneInGoal=0,this.deltaUpdateFailed=void 0,this.driftStartTime=0,this.driftEndTime=0,this.driftStart=0,this.driftEnd=0,this.encryptedFragments=void 0,this.playlistParsingError=null,this.variableList=null,this.hasVariableRefs=!1,this.fragments=[],this.encryptedFragments=[],this.dateRanges={},this.url=e}reloaded(e){if(!e){this.advanced=!0,this.updated=!0;return}const t=this.lastPartSn-e.lastPartSn,r=this.lastPartIndex-e.lastPartIndex;this.updated=this.endSN!==e.endSN||!!r||!!t||!this.live,this.advanced=this.endSN>e.endSN||t>0||t===0&&r>0,this.updated||this.advanced?this.misses=Math.floor(e.misses*.6):this.misses=e.misses+1,this.availabilityDelay=e.availabilityDelay}get hasProgramDateTime(){return this.fragments.length?xe(this.fragments[this.fragments.length-1].programDateTime):!1}get levelTargetDuration(){return this.averagetargetduration||this.targetduration||q2}get drift(){const e=this.driftEndTime-this.driftStartTime;return e>0?(this.driftEnd-this.driftStart)*1e3/e:1}get edge(){return this.partEnd||this.fragmentEnd}get partEnd(){var e;return(e=this.partList)!=null&&e.length?this.partList[this.partList.length-1].end:this.fragmentEnd}get fragmentEnd(){var e;return(e=this.fragments)!=null&&e.length?this.fragments[this.fragments.length-1].end:0}get age(){return this.advancedDateTime?Math.max(Date.now()-this.advancedDateTime,0)/1e3:0}get lastPartIndex(){var e;return(e=this.partList)!=null&&e.length?this.partList[this.partList.length-1].index:-1}get lastPartSn(){var e;return(e=this.partList)!=null&&e.length?this.partList[this.partList.length-1].fragment.sn:this.endSN}}function Ol(n){return Uint8Array.from(atob(n),e=>e.charCodeAt(0))}function V2(n){const e=ja(n).subarray(0,16),t=new Uint8Array(16);return t.set(e,16-e.length),t}function W2(n){const e=function(r,i,s){const o=r[i];r[i]=r[s],r[s]=o};e(n,0,3),e(n,1,2),e(n,4,5),e(n,6,7)}function Y2(n){const e=n.split(":");let t=null;if(e[0]==="data"&&e.length===2){const r=e[1].split(";"),i=r[r.length-1].split(",");if(i.length===2){const s=i[0]==="base64",o=i[1];s?(r.splice(-1,1),t=Ol(o)):t=V2(o)}}return t}function ja(n){return Uint8Array.from(unescape(encodeURIComponent(n)),e=>e.charCodeAt(0))}const $r=typeof self<"u"?self:void 0;var lt={CLEARKEY:"org.w3.clearkey",FAIRPLAY:"com.apple.fps",PLAYREADY:"com.microsoft.playready",WIDEVINE:"com.widevine.alpha"},$t={CLEARKEY:"org.w3.clearkey",FAIRPLAY:"com.apple.streamingkeydelivery",PLAYREADY:"com.microsoft.playready",WIDEVINE:"urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed"};function qd(n){switch(n){case $t.FAIRPLAY:return lt.FAIRPLAY;case $t.PLAYREADY:return lt.PLAYREADY;case $t.WIDEVINE:return lt.WIDEVINE;case $t.CLEARKEY:return lt.CLEARKEY}}var Bf={WIDEVINE:"edef8ba979d64acea3c827dcd51d21ed"};function Q2(n){if(n===Bf.WIDEVINE)return lt.WIDEVINE}function jd(n){switch(n){case lt.FAIRPLAY:return $t.FAIRPLAY;case lt.PLAYREADY:return $t.PLAYREADY;case lt.WIDEVINE:return $t.WIDEVINE;case lt.CLEARKEY:return $t.CLEARKEY}}function ra(n){const{drmSystems:e,widevineLicenseUrl:t}=n,r=e?[lt.FAIRPLAY,lt.WIDEVINE,lt.PLAYREADY,lt.CLEARKEY].filter(i=>!!e[i]):[];return!r[lt.WIDEVINE]&&t&&r.push(lt.WIDEVINE),r}const Pf=function(n){return $r!=null&&(n=$r.navigator)!=null&&n.requestMediaKeySystemAccess?self.navigator.requestMediaKeySystemAccess.bind(self.navigator):null}();function X2(n,e,t,r){let i;switch(n){case lt.FAIRPLAY:i=["cenc","sinf"];break;case lt.WIDEVINE:case lt.PLAYREADY:i=["cenc"];break;case lt.CLEARKEY:i=["cenc","keyids"];break;default:throw new Error(`Unknown key-system: ${n}`)}return Z2(i,e,t,r)}function Z2(n,e,t,r){return[{initDataTypes:n,persistentState:r.persistentState||"optional",distinctiveIdentifier:r.distinctiveIdentifier||"optional",sessionTypes:r.sessionTypes||[r.sessionType||"temporary"],audioCapabilities:e.map(s=>({contentType:`audio/mp4; codecs="${s}"`,robustness:r.audioRobustness||"",encryptionScheme:r.audioEncryptionScheme||null})),videoCapabilities:t.map(s=>({contentType:`video/mp4; codecs="${s}"`,robustness:r.videoRobustness||"",encryptionScheme:r.videoEncryptionScheme||null}))}]}function cr(n,e,t){return Uint8Array.prototype.slice?n.slice(e,t):new Uint8Array(Array.prototype.slice.call(n,e,t))}const Ml=(n,e)=>e+10<=n.length&&n[e]===73&&n[e+1]===68&&n[e+2]===51&&n[e+3]<255&&n[e+4]<255&&n[e+6]<128&&n[e+7]<128&&n[e+8]<128&&n[e+9]<128,Of=(n,e)=>e+10<=n.length&&n[e]===51&&n[e+1]===68&&n[e+2]===73&&n[e+3]<255&&n[e+4]<255&&n[e+6]<128&&n[e+7]<128&&n[e+8]<128&&n[e+9]<128,qi=(n,e)=>{const t=e;let r=0;for(;Ml(n,e);){r+=10;const i=ko(n,e+6);r+=i,Of(n,e+10)&&(r+=10),e+=r}if(r>0)return n.subarray(t,t+r)},ko=(n,e)=>{let t=0;return t=(n[e]&127)<<21,t|=(n[e+1]&127)<<14,t|=(n[e+2]&127)<<7,t|=n[e+3]&127,t},J2=(n,e)=>Ml(n,e)&&ko(n,e+6)+10<=n.length-e,Fl=n=>{const e=Ff(n);for(let t=0;t<e.length;t++){const r=e[t];if(Mf(r))return s_(r)}},Mf=n=>n&&n.key==="PRIV"&&n.info==="com.apple.streaming.transportStreamTimestamp",e_=n=>{const e=String.fromCharCode(n[0],n[1],n[2],n[3]),t=ko(n,4),r=10;return{type:e,size:t,data:n.subarray(r,r+t)}},Ff=n=>{let e=0;const t=[];for(;Ml(n,e);){const r=ko(n,e+6);e+=10;const i=e+r;for(;e+8<i;){const s=e_(n.subarray(e)),o=t_(s);o&&t.push(o),e+=s.size+10}Of(n,e)&&(e+=10)}return t},t_=n=>n.type==="PRIV"?n_(n):n.type[0]==="W"?i_(n):r_(n),n_=n=>{if(n.size<2)return;const e=bn(n.data,!0),t=new Uint8Array(n.data.subarray(e.length+1));return{key:n.type,info:e,data:t.buffer}},r_=n=>{if(n.size<2)return;if(n.type==="TXXX"){let t=1;const r=bn(n.data.subarray(t),!0);t+=r.length+1;const i=bn(n.data.subarray(t));return{key:n.type,info:r,data:i}}const e=bn(n.data.subarray(1));return{key:n.type,data:e}},i_=n=>{if(n.type==="WXXX"){if(n.size<2)return;let t=1;const r=bn(n.data.subarray(t),!0);t+=r.length+1;const i=bn(n.data.subarray(t));return{key:n.type,info:r,data:i}}const e=bn(n.data);return{key:n.type,data:e}},s_=n=>{if(n.data.byteLength===8){const e=new Uint8Array(n.data),t=e[3]&1;let r=(e[4]<<23)+(e[5]<<15)+(e[6]<<7)+e[7];return r/=45,t&&(r+=4772185884e-2),Math.round(r)}},bn=(n,e=!1)=>{const t=o_();if(t){const c=t.decode(n);if(e){const d=c.indexOf("\0");return d!==-1?c.substring(0,d):c}return c.replace(/\0/g,"")}const r=n.length;let i,s,o,a="",l=0;for(;l<r;){if(i=n[l++],i===0&&e)return a;if(i===0||i===3)continue;switch(i>>4){case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:a+=String.fromCharCode(i);break;case 12:case 13:s=n[l++],a+=String.fromCharCode((i&31)<<6|s&63);break;case 14:s=n[l++],o=n[l++],a+=String.fromCharCode((i&15)<<12|(s&63)<<6|(o&63)<<0);break}}return a};let ia;function o_(){if(!navigator.userAgent.includes("PlayStation 4"))return!ia&&typeof self.TextDecoder<"u"&&(ia=new self.TextDecoder("utf-8")),ia}const hn={hexDump:function(n){let e="";for(let t=0;t<n.length;t++){let r=n[t].toString(16);r.length<2&&(r="0"+r),e+=r}return e}},Ys=Math.pow(2,32)-1,a_=[].push,Nf={video:1,audio:2,id3:3,text:4};function At(n){return String.fromCharCode.apply(null,n)}function Uf(n,e){const t=n[e]<<8|n[e+1];return t<0?65536+t:t}function Ie(n,e){const t=$f(n,e);return t<0?4294967296+t:t}function Vd(n,e){let t=Ie(n,e);return t*=Math.pow(2,32),t+=Ie(n,e+4),t}function $f(n,e){return n[e]<<24|n[e+1]<<16|n[e+2]<<8|n[e+3]}function sa(n,e,t){n[e]=t>>24,n[e+1]=t>>16&255,n[e+2]=t>>8&255,n[e+3]=t&255}function l_(n){const e=n.byteLength;for(let t=0;t<e;){const r=Ie(n,t);if(r>8&&n[t+4]===109&&n[t+5]===111&&n[t+6]===111&&n[t+7]===102)return!0;t=r>1?t+r:e}return!1}function Ne(n,e){const t=[];if(!e.length)return t;const r=n.byteLength;for(let i=0;i<r;){const s=Ie(n,i),o=At(n.subarray(i+4,i+8)),a=s>1?i+s:r;if(o===e[0])if(e.length===1)t.push(n.subarray(i+8,a));else{const l=Ne(n.subarray(i+8,a),e.slice(1));l.length&&a_.apply(t,l)}i=a}return t}function c_(n){const e=[],t=n[0];let r=8;const i=Ie(n,r);r+=4;let s=0,o=0;t===0?(s=Ie(n,r),o=Ie(n,r+4),r+=8):(s=Vd(n,r),o=Vd(n,r+8),r+=16),r+=2;let a=n.length+o;const l=Uf(n,r);r+=2;for(let c=0;c<l;c++){let d=r;const u=Ie(n,d);d+=4;const h=u&2147483647;if((u&2147483648)>>>31===1)return M.warn("SIDX has hierarchical references (not supported)"),null;const m=Ie(n,d);d+=4,e.push({referenceSize:h,subsegmentDuration:m,info:{duration:m/i,start:a,end:a+h-1}}),a+=h,d+=4,r=d}return{earliestPresentationTime:s,timescale:i,version:t,referencesCount:l,references:e}}function Hf(n){const e=[],t=Ne(n,["moov","trak"]);for(let i=0;i<t.length;i++){const s=t[i],o=Ne(s,["tkhd"])[0];if(o){let a=o[0];const l=Ie(o,a===0?12:20),c=Ne(s,["mdia","mdhd"])[0];if(c){a=c[0];const d=Ie(c,a===0?12:20),u=Ne(s,["mdia","hdlr"])[0];if(u){const h=At(u.subarray(8,12)),y={soun:et.AUDIO,vide:et.VIDEO}[h];if(y){const m=Ne(s,["mdia","minf","stbl","stsd"])[0],A=d_(m);e[l]={timescale:d,type:y},e[y]=_t({timescale:d,id:l},A)}}}}}return Ne(n,["moov","mvex","trex"]).forEach(i=>{const s=Ie(i,4),o=e[s];o&&(o.default={duration:Ie(i,12),flags:Ie(i,20)})}),e}function d_(n){const e=n.subarray(8),t=e.subarray(8+78),r=At(e.subarray(4,8));let i=r;const s=r==="enca"||r==="encv";if(s){const a=Ne(e,[r])[0].subarray(r==="enca"?28:78);Ne(a,["sinf"]).forEach(c=>{const d=Ne(c,["schm"])[0];if(d){const u=At(d.subarray(4,8));if(u==="cbcs"||u==="cenc"){const h=Ne(c,["frma"])[0];h&&(i=At(h))}}})}switch(i){case"avc1":case"avc2":case"avc3":case"avc4":{const o=Ne(t,["avcC"])[0];i+="."+gs(o[1])+gs(o[2])+gs(o[3]);break}case"mp4a":{const o=Ne(e,[r])[0],a=Ne(o.subarray(28),["esds"])[0];if(a&&a.length>12){let l=4;if(a[l++]!==3)break;l=oa(a,l),l+=2;const c=a[l++];if(c&128&&(l+=2),c&64&&(l+=a[l++]),a[l++]!==4)break;l=oa(a,l);const d=a[l++];if(d===64)i+="."+gs(d);else break;if(l+=12,a[l++]!==5)break;l=oa(a,l);const u=a[l++];let h=(u&248)>>3;h===31&&(h+=1+((u&7)<<3)+((a[l]&224)>>5)),i+="."+h}break}case"hvc1":case"hev1":{const o=Ne(t,["hvcC"])[0],a=o[1],l=["","A","B","C"][a>>6],c=a&31,d=Ie(o,2),u=(a&32)>>5?"H":"L",h=o[12],y=o.subarray(6,12);i+="."+l+c,i+="."+d.toString(16).toUpperCase(),i+="."+u+h;let m="";for(let A=y.length;A--;){const b=y[A];(b||m)&&(m="."+b.toString(16).toUpperCase()+m)}i+=m;break}case"dvh1":case"dvhe":{const o=Ne(t,["dvcC"])[0],a=o[2]>>1&127,l=o[2]<<5&32|o[3]>>3&31;i+="."+un(a)+"."+un(l);break}case"vp09":{const o=Ne(t,["vpcC"])[0],a=o[4],l=o[5],c=o[6]>>4&15;i+="."+un(a)+"."+un(l)+"."+un(c);break}case"av01":{const o=Ne(t,["av1C"])[0],a=o[1]>>>5,l=o[1]&31,c=o[2]>>>7?"H":"M",d=(o[2]&64)>>6,u=(o[2]&32)>>5,h=a===2&&d?u?12:10:d?10:8,y=(o[2]&16)>>4,m=(o[2]&8)>>3,A=(o[2]&4)>>2,b=o[2]&3,S=1,C=1,R=1,D=0;i+="."+a+"."+un(l)+c+"."+un(h)+"."+y+"."+m+A+b+"."+un(S)+"."+un(C)+"."+un(R)+"."+D;break}}return{codec:i,encrypted:s}}function oa(n,e){const t=e+5;for(;n[e++]&128&&e<t;);return e}function gs(n){return("0"+n.toString(16).toUpperCase()).slice(-2)}function un(n){return(n<10?"0":"")+n}function u_(n,e){if(!n||!e)return n;const t=e.keyId;return t&&e.isCommonEncryption&&Ne(n,["moov","trak"]).forEach(i=>{const o=Ne(i,["mdia","minf","stbl","stsd"])[0].subarray(8);let a=Ne(o,["enca"]);const l=a.length>0;l||(a=Ne(o,["encv"])),a.forEach(c=>{const d=l?c.subarray(28):c.subarray(78);Ne(d,["sinf"]).forEach(h=>{const y=Gf(h);if(y){const m=y.subarray(8,24);m.some(A=>A!==0)||(M.log(`[eme] Patching keyId in 'enc${l?"a":"v"}>sinf>>tenc' box: ${hn.hexDump(m)} -> ${hn.hexDump(t)}`),y.set(t,8))}})})}),n}function Gf(n){const e=Ne(n,["schm"])[0];if(e){const t=At(e.subarray(4,8));if(t==="cbcs"||t==="cenc")return Ne(n,["schi","tenc"])[0]}return M.error("[eme] missing 'schm' box"),null}function h_(n,e){return Ne(e,["moof","traf"]).reduce((t,r)=>{const i=Ne(r,["tfdt"])[0],s=i[0],o=Ne(r,["tfhd"]).reduce((a,l)=>{const c=Ie(l,4),d=n[c];if(d){let u=Ie(i,4);if(s===1){if(u===Ys)return M.warn("[mp4-demuxer]: Ignoring assumed invalid signed 64-bit track fragment decode time"),a;u*=Ys+1,u+=Ie(i,8)}const h=d.timescale||9e4,y=u/h;if(xe(y)&&(a===null||y<a))return y}return a},null);return o!==null&&xe(o)&&(t===null||o<t)?o:t},null)}function f_(n,e){let t=0,r=0,i=0;const s=Ne(n,["moof","traf"]);for(let o=0;o<s.length;o++){const a=s[o],l=Ne(a,["tfhd"])[0],c=Ie(l,4),d=e[c];if(!d)continue;const u=d.default,h=Ie(l,0)|(u==null?void 0:u.flags);let y=u==null?void 0:u.duration;h&8&&(h&2?y=Ie(l,12):y=Ie(l,8));const m=d.timescale||9e4,A=Ne(a,["trun"]);for(let b=0;b<A.length;b++){if(t=p_(A[b]),!t&&y){const S=Ie(A[b],4);t=y*S}d.type===et.VIDEO?r+=t/m:d.type===et.AUDIO&&(i+=t/m)}}if(r===0&&i===0){let o=1/0,a=0,l=0;const c=Ne(n,["sidx"]);for(let d=0;d<c.length;d++){const u=c_(c[d]);if(u!=null&&u.references){o=Math.min(o,u.earliestPresentationTime/u.timescale);const h=u.references.reduce((y,m)=>y+m.info.duration||0,0);a=Math.max(a,h+u.earliestPresentationTime/u.timescale),l=a-o}}if(l&&xe(l))return l}return r||i}function p_(n){const e=Ie(n,0);let t=8;e&1&&(t+=4),e&4&&(t+=4);let r=0;const i=Ie(n,4);for(let s=0;s<i;s++){if(e&256){const o=Ie(n,t);r+=o,t+=4}e&512&&(t+=4),e&1024&&(t+=4),e&2048&&(t+=4)}return r}function m_(n,e,t){Ne(e,["moof","traf"]).forEach(r=>{Ne(r,["tfhd"]).forEach(i=>{const s=Ie(i,4),o=n[s];if(!o)return;const a=o.timescale||9e4;Ne(r,["tfdt"]).forEach(l=>{const c=l[0],d=t*a;if(d){let u=Ie(l,4);if(c===0)u-=d,u=Math.max(u,0),sa(l,4,u);else{u*=Math.pow(2,32),u+=Ie(l,8),u-=d,u=Math.max(u,0);const h=Math.floor(u/(Ys+1)),y=Math.floor(u%(Ys+1));sa(l,4,h),sa(l,8,y)}}})})})}function g_(n){const e={valid:null,remainder:null},t=Ne(n,["moof"]);if(t.length<2)return e.remainder=n,e;const r=t[t.length-1];return e.valid=cr(n,0,r.byteOffset-8),e.remainder=cr(n,r.byteOffset-8),e}function Qt(n,e){const t=new Uint8Array(n.length+e.length);return t.set(n),t.set(e,n.length),t}function Wd(n,e){const t=[],r=e.samples,i=e.timescale,s=e.id;let o=!1;return Ne(r,["moof"]).map(l=>{const c=l.byteOffset-8;Ne(l,["traf"]).map(u=>{const h=Ne(u,["tfdt"]).map(y=>{const m=y[0];let A=Ie(y,4);return m===1&&(A*=Math.pow(2,32),A+=Ie(y,8)),A/i})[0];return h!==void 0&&(n=h),Ne(u,["tfhd"]).map(y=>{const m=Ie(y,4),A=Ie(y,0)&16777215,b=(A&1)!==0,S=(A&2)!==0,C=(A&8)!==0;let R=0;const D=(A&16)!==0;let B=0;const K=(A&32)!==0;let N=8;m===s&&(b&&(N+=8),S&&(N+=4),C&&(R=Ie(y,N),N+=4),D&&(B=Ie(y,N),N+=4),K&&(N+=4),e.type==="video"&&(o=y_(e.codec)),Ne(u,["trun"]).map(z=>{const Z=z[0],O=Ie(z,0)&16777215,ee=(O&1)!==0;let _e=0;const ce=(O&4)!==0,Y=(O&256)!==0;let re=0;const H=(O&512)!==0;let Q=0;const ae=(O&1024)!==0,j=(O&2048)!==0;let de=0;const Re=Ie(z,4);let Se=8;ee&&(_e=Ie(z,Se),Se+=4),ce&&(Se+=4);let $e=_e+c;for(let Xe=0;Xe<Re;Xe++){if(Y?(re=Ie(z,Se),Se+=4):re=R,H?(Q=Ie(z,Se),Se+=4):Q=B,ae&&(Se+=4),j&&(Z===0?de=Ie(z,Se):de=$f(z,Se),Se+=4),e.type===et.VIDEO){let it=0;for(;it<Q;){const Fe=Ie(r,$e);if($e+=4,A_(o,r[$e])){const V=r.subarray($e,$e+Fe);Kf(V,o?2:1,n+de/i,t)}$e+=Fe,it+=Fe+4}}n+=re/i}}))})})}),t}function y_(n){if(!n)return!1;const e=n.indexOf("."),t=e<0?n:n.substring(0,e);return t==="hvc1"||t==="hev1"||t==="dvh1"||t==="dvhe"}function A_(n,e){if(n){const t=e>>1&63;return t===39||t===40}else return(e&31)===6}function Kf(n,e,t,r){const i=zf(n);let s=0;s+=e;let o=0,a=0,l=0;for(;s<i.length;){o=0;do{if(s>=i.length)break;l=i[s++],o+=l}while(l===255);a=0;do{if(s>=i.length)break;l=i[s++],a+=l}while(l===255);const c=i.length-s;let d=s;if(a<c)s+=a;else if(a>c){M.error(`Malformed SEI payload. ${a} is too small, only ${c} bytes left to parse.`);break}if(o===4){if(i[d++]===181){const h=Uf(i,d);if(d+=2,h===49){const y=Ie(i,d);if(d+=4,y===1195456820){const m=i[d++];if(m===3){const A=i[d++],b=31&A,S=64&A,C=S?2+b*3:0,R=new Uint8Array(C);if(S){R[0]=A;for(let D=1;D<C;D++)R[D]=i[d++]}r.push({type:m,payloadType:o,pts:t,bytes:R})}}}}}else if(o===5&&a>16){const u=[];for(let m=0;m<16;m++){const A=i[d++].toString(16);u.push(A.length==1?"0"+A:A),(m===3||m===5||m===7||m===9)&&u.push("-")}const h=a-16,y=new Uint8Array(h);for(let m=0;m<h;m++)y[m]=i[d++];r.push({payloadType:o,pts:t,uuid:u.join(""),userData:bn(y),userDataBytes:y})}}}function zf(n){const e=n.byteLength,t=[];let r=1;for(;r<e-2;)n[r]===0&&n[r+1]===0&&n[r+2]===3?(t.push(r+2),r+=2):r++;if(t.length===0)return n;const i=e-t.length,s=new Uint8Array(i);let o=0;for(r=0;r<i;o++,r++)o===t[0]&&(o++,t.shift()),s[r]=n[o];return s}function v_(n){const e=n[0];let t="",r="",i=0,s=0,o=0,a=0,l=0,c=0;if(e===0){for(;At(n.subarray(c,c+1))!=="\0";)t+=At(n.subarray(c,c+1)),c+=1;for(t+=At(n.subarray(c,c+1)),c+=1;At(n.subarray(c,c+1))!=="\0";)r+=At(n.subarray(c,c+1)),c+=1;r+=At(n.subarray(c,c+1)),c+=1,i=Ie(n,12),s=Ie(n,16),a=Ie(n,20),l=Ie(n,24),c=28}else if(e===1){c+=4,i=Ie(n,c),c+=4;const u=Ie(n,c);c+=4;const h=Ie(n,c);for(c+=4,o=2**32*u+h,M2(o)||(o=Number.MAX_SAFE_INTEGER,M.warn("Presentation time exceeds safe integer limit and wrapped to max safe integer in parsing emsg box")),a=Ie(n,c),c+=4,l=Ie(n,c),c+=4;At(n.subarray(c,c+1))!=="\0";)t+=At(n.subarray(c,c+1)),c+=1;for(t+=At(n.subarray(c,c+1)),c+=1;At(n.subarray(c,c+1))!=="\0";)r+=At(n.subarray(c,c+1)),c+=1;r+=At(n.subarray(c,c+1)),c+=1}const d=n.subarray(c,n.byteLength);return{schemeIdUri:t,value:r,timeScale:i,presentationTime:o,presentationTimeDelta:s,eventDuration:a,id:l,payload:d}}function b_(n,...e){const t=e.length;let r=8,i=t;for(;i--;)r+=e[i].byteLength;const s=new Uint8Array(r);for(s[0]=r>>24&255,s[1]=r>>16&255,s[2]=r>>8&255,s[3]=r&255,s.set(n,4),i=0,r=8;i<t;i++)s.set(e[i],r),r+=e[i].byteLength;return s}function x_(n,e,t){if(n.byteLength!==16)throw new RangeError("Invalid system id");let r,i;if(e){r=1,i=new Uint8Array(e.length*16);for(let a=0;a<e.length;a++){const l=e[a];if(l.byteLength!==16)throw new RangeError("Invalid key");i.set(l,a*16)}}else r=0,i=new Uint8Array;let s;r>0?(s=new Uint8Array(4),e.length>0&&new DataView(s.buffer).setUint32(0,e.length,!1)):s=new Uint8Array;const o=new Uint8Array(4);return t&&t.byteLength>0&&new DataView(o.buffer).setUint32(0,t.byteLength,!1),b_([112,115,115,104],new Uint8Array([r,0,0,0]),n,s,i,o,t||new Uint8Array)}function E_(n){if(!(n instanceof ArrayBuffer)||n.byteLength<32)return null;const e={version:0,systemId:"",kids:null,data:null},t=new DataView(n),r=t.getUint32(0);if(n.byteLength!==r&&r>44||t.getUint32(4)!==1886614376||(e.version=t.getUint32(8)>>>24,e.version>1))return null;e.systemId=hn.hexDump(new Uint8Array(n,12,16));const s=t.getUint32(28);if(e.version===0){if(r-32<s)return null;e.data=new Uint8Array(n,32,s)}else if(e.version===1){e.kids=[];for(let o=0;o<s;o++)e.kids.push(new Uint8Array(n,32+o*16,16))}return e}let ys={};class ji{static clearKeyUriToKeyIdMap(){ys={}}constructor(e,t,r,i=[1],s=null){this.uri=void 0,this.method=void 0,this.keyFormat=void 0,this.keyFormatVersions=void 0,this.encrypted=void 0,this.isCommonEncryption=void 0,this.iv=null,this.key=null,this.keyId=null,this.pssh=null,this.method=e,this.uri=t,this.keyFormat=r,this.keyFormatVersions=i,this.iv=s,this.encrypted=e?e!=="NONE":!1,this.isCommonEncryption=this.encrypted&&e!=="AES-128"}isSupported(){if(this.method){if(this.method==="AES-128"||this.method==="NONE")return!0;if(this.keyFormat==="identity")return this.method==="SAMPLE-AES";switch(this.keyFormat){case $t.FAIRPLAY:case $t.WIDEVINE:case $t.PLAYREADY:case $t.CLEARKEY:return["ISO-23001-7","SAMPLE-AES","SAMPLE-AES-CENC","SAMPLE-AES-CTR"].indexOf(this.method)!==-1}}return!1}getDecryptData(e){if(!this.encrypted||!this.uri)return null;if(this.method==="AES-128"&&this.uri&&!this.iv){typeof e!="number"&&(this.method==="AES-128"&&!this.iv&&M.warn(`missing IV for initialization segment with method="${this.method}" - compliance issue`),e=0);const r=__(e);return new ji(this.method,this.uri,"identity",this.keyFormatVersions,r)}const t=Y2(this.uri);if(t)switch(this.keyFormat){case $t.WIDEVINE:this.pssh=t,t.length>=22&&(this.keyId=t.subarray(t.length-22,t.length-6));break;case $t.PLAYREADY:{const r=new Uint8Array([154,4,240,121,152,64,66,134,171,146,230,91,224,136,95,149]);this.pssh=x_(r,null,t);const i=new Uint16Array(t.buffer,t.byteOffset,t.byteLength/2),s=String.fromCharCode.apply(null,Array.from(i)),o=s.substring(s.indexOf("<"),s.length),c=new DOMParser().parseFromString(o,"text/xml").getElementsByTagName("KID")[0];if(c){const d=c.childNodes[0]?c.childNodes[0].nodeValue:c.getAttribute("VALUE");if(d){const u=Ol(d).subarray(0,16);W2(u),this.keyId=u}}break}default:{let r=t.subarray(0,16);if(r.length!==16){const i=new Uint8Array(16);i.set(r,16-r.length),r=i}this.keyId=r;break}}if(!this.keyId||this.keyId.byteLength!==16){let r=ys[this.uri];if(!r){const i=Object.keys(ys).length%Number.MAX_SAFE_INTEGER;r=new Uint8Array(16),new DataView(r.buffer,12,4).setUint32(0,i),ys[this.uri]=r}this.keyId=r}return this}}function __(n){const e=new Uint8Array(16);for(let t=12;t<16;t++)e[t]=n>>8*(15-t)&255;return e}const qf=/\{\$([a-zA-Z0-9-_]+)\}/g;function Yd(n){return qf.test(n)}function Nt(n,e,t){if(n.variableList!==null||n.hasVariableRefs)for(let r=t.length;r--;){const i=t[r],s=e[i];s&&(e[i]=Va(n,s))}}function Va(n,e){if(n.variableList!==null||n.hasVariableRefs){const t=n.variableList;return e.replace(qf,r=>{const i=r.substring(2,r.length-1),s=t==null?void 0:t[i];return s===void 0?(n.playlistParsingError||(n.playlistParsingError=new Error(`Missing preceding EXT-X-DEFINE tag for Variable Reference: "${i}"`)),r):s})}return e}function Qd(n,e,t){let r=n.variableList;r||(n.variableList=r={});let i,s;if("QUERYPARAM"in e){i=e.QUERYPARAM;try{const o=new self.URL(t).searchParams;if(o.has(i))s=o.get(i);else throw new Error(`"${i}" does not match any query parameter in URI: "${t}"`)}catch(o){n.playlistParsingError||(n.playlistParsingError=new Error(`EXT-X-DEFINE QUERYPARAM: ${o.message}`))}}else i=e.NAME,s=e.VALUE;i in r?n.playlistParsingError||(n.playlistParsingError=new Error(`EXT-X-DEFINE duplicate Variable Name declarations: "${i}"`)):r[i]=s||""}function w_(n,e,t){const r=e.IMPORT;if(t&&r in t){let i=n.variableList;i||(n.variableList=i={}),i[r]=t[r]}else n.playlistParsingError||(n.playlistParsingError=new Error(`EXT-X-DEFINE IMPORT attribute not found in Multivariant Playlist: "${r}"`))}function Yr(n=!0){return typeof self>"u"?void 0:(n||!self.MediaSource)&&self.ManagedMediaSource||self.MediaSource||self.WebKitMediaSource}const Qs={audio:{a3ds:1,"ac-3":.95,"ac-4":1,alac:.9,alaw:1,dra1:1,"dts+":1,"dts-":1,dtsc:1,dtse:1,dtsh:1,"ec-3":.9,enca:1,fLaC:.9,flac:.9,FLAC:.9,g719:1,g726:1,m4ae:1,mha1:1,mha2:1,mhm1:1,mhm2:1,mlpa:1,mp4a:1,"raw ":1,Opus:1,opus:1,samr:1,sawb:1,sawp:1,sevc:1,sqcp:1,ssmv:1,twos:1,ulaw:1},video:{avc1:1,avc2:1,avc3:1,avc4:1,avcp:1,av01:.8,drac:1,dva1:1,dvav:1,dvh1:.7,dvhe:.7,encv:1,hev1:.75,hvc1:.75,mjp2:1,mp4v:1,mvc1:1,mvc2:1,mvc3:1,mvc4:1,resv:1,rv60:1,s263:1,svc1:1,svc2:1,"vc-1":1,vp08:1,vp09:.9},text:{stpp:1,wvtt:1}};function S_(n,e){const t=Qs[e];return!!t&&!!t[n.slice(0,4)]}function aa(n,e,t=!0){return!n.split(",").some(r=>!jf(r,e,t))}function jf(n,e,t=!0){var r;const i=Yr(t);return(r=i==null?void 0:i.isTypeSupported(Vi(n,e)))!=null?r:!1}function Vi(n,e){return`${e}/mp4;codecs="${n}"`}function Xd(n){if(n){const e=n.substring(0,4);return Qs.video[e]}return 2}function Xs(n){return n.split(",").reduce((e,t)=>{const r=Qs.video[t];return r?(r*2+e)/(e?3:2):(Qs.audio[t]+e)/(e?2:1)},0)}const la={};function T_(n,e=!0){if(la[n])return la[n];const t={flac:["flac","fLaC","FLAC"],opus:["opus","Opus"]}[n];for(let r=0;r<t.length;r++)if(jf(t[r],"audio",e))return la[n]=t[r],t[r];return n}const C_=/flac|opus/i;function Zs(n,e=!0){return n.replace(C_,t=>T_(t.toLowerCase(),e))}function Zd(n,e){return n&&n!=="mp4a"?n:e}function L_(n){const e=n.split(".");if(e.length>2){let t=e.shift()+".";return t+=parseInt(e.shift()).toString(16),t+=("000"+parseInt(e.shift()).toString(16)).slice(-4),t}return n}const Jd=/#EXT-X-STREAM-INF:([^\r\n]*)(?:[\r\n](?:#[^\r\n]*)?)*([^\r\n]+)|#EXT-X-(SESSION-DATA|SESSION-KEY|DEFINE|CONTENT-STEERING|START):([^\r\n]*)[\r\n]+/g,eu=/#EXT-X-MEDIA:(.*)/g,k_=/^#EXT(?:INF|-X-TARGETDURATION):/m,tu=new RegExp([/#EXTINF:\s*(\d*(?:\.\d+)?)(?:,(.*)\s+)?/.source,/(?!#) *(\S[\S ]*)/.source,/#EXT-X-BYTERANGE:*(.+)/.source,/#EXT-X-PROGRAM-DATE-TIME:(.+)/.source,/#.*/.source].join("|"),"g"),R_=new RegExp([/#(EXTM3U)/.source,/#EXT-X-(DATERANGE|DEFINE|KEY|MAP|PART|PART-INF|PLAYLIST-TYPE|PRELOAD-HINT|RENDITION-REPORT|SERVER-CONTROL|SKIP|START):(.+)/.source,/#EXT-X-(BITRATE|DISCONTINUITY-SEQUENCE|MEDIA-SEQUENCE|TARGETDURATION|VERSION): *(\d+)/.source,/#EXT-X-(DISCONTINUITY|ENDLIST|GAP|INDEPENDENT-SEGMENTS)/.source,/(#)([^:]*):(.*)/.source,/(#)(.*)(?:.*)\r?\n?/.source].join("|"));class yn{static findGroup(e,t){for(let r=0;r<e.length;r++){const i=e[r];if(i.id===t)return i}}static resolve(e,t){return Pl.buildAbsoluteURL(t,e,{alwaysNormalize:!0})}static isMediaPlaylist(e){return k_.test(e)}static parseMasterPlaylist(e,t){const r=Yd(e),i={contentSteering:null,levels:[],playlistParsingError:null,sessionData:null,sessionKeys:null,startTimeOffset:null,variableList:null,hasVariableRefs:r},s=[];Jd.lastIndex=0;let o;for(;(o=Jd.exec(e))!=null;)if(o[1]){var a;const c=new ut(o[1]);Nt(i,c,["CODECS","SUPPLEMENTAL-CODECS","ALLOWED-CPC","PATHWAY-ID","STABLE-VARIANT-ID","AUDIO","VIDEO","SUBTITLES","CLOSED-CAPTIONS","NAME"]);const d=Va(i,o[2]),u={attrs:c,bitrate:c.decimalInteger("BANDWIDTH")||c.decimalInteger("AVERAGE-BANDWIDTH"),name:c.NAME,url:yn.resolve(d,t)},h=c.decimalResolution("RESOLUTION");h&&(u.width=h.width,u.height=h.height),I_(c.CODECS,u),(a=u.unknownCodecs)!=null&&a.length||s.push(u),i.levels.push(u)}else if(o[3]){const c=o[3],d=o[4];switch(c){case"SESSION-DATA":{const u=new ut(d);Nt(i,u,["DATA-ID","LANGUAGE","VALUE","URI"]);const h=u["DATA-ID"];h&&(i.sessionData===null&&(i.sessionData={}),i.sessionData[h]=u);break}case"SESSION-KEY":{const u=nu(d,t,i);u.encrypted&&u.isSupported()?(i.sessionKeys===null&&(i.sessionKeys=[]),i.sessionKeys.push(u)):M.warn(`[Keys] Ignoring invalid EXT-X-SESSION-KEY tag: "${d}"`);break}case"DEFINE":{{const u=new ut(d);Nt(i,u,["NAME","VALUE","QUERYPARAM"]),Qd(i,u,t)}break}case"CONTENT-STEERING":{const u=new ut(d);Nt(i,u,["SERVER-URI","PATHWAY-ID"]),i.contentSteering={uri:yn.resolve(u["SERVER-URI"],t),pathwayId:u["PATHWAY-ID"]||"."};break}case"START":{i.startTimeOffset=ru(d);break}}}const l=s.length>0&&s.length<i.levels.length;return i.levels=l?s:i.levels,i.levels.length===0&&(i.playlistParsingError=new Error("no levels found in manifest")),i}static parseMasterPlaylistMedia(e,t,r){let i;const s={},o=r.levels,a={AUDIO:o.map(c=>({id:c.attrs.AUDIO,audioCodec:c.audioCodec})),SUBTITLES:o.map(c=>({id:c.attrs.SUBTITLES,textCodec:c.textCodec})),"CLOSED-CAPTIONS":[]};let l=0;for(eu.lastIndex=0;(i=eu.exec(e))!==null;){const c=new ut(i[1]),d=c.TYPE;if(d){const u=a[d],h=s[d]||[];s[d]=h,Nt(r,c,["URI","GROUP-ID","LANGUAGE","ASSOC-LANGUAGE","STABLE-RENDITION-ID","NAME","INSTREAM-ID","CHARACTERISTICS","CHANNELS"]);const y=c.LANGUAGE,m=c["ASSOC-LANGUAGE"],A=c.CHANNELS,b=c.CHARACTERISTICS,S=c["INSTREAM-ID"],C={attrs:c,bitrate:0,id:l++,groupId:c["GROUP-ID"]||"",name:c.NAME||y||"",type:d,default:c.bool("DEFAULT"),autoselect:c.bool("AUTOSELECT"),forced:c.bool("FORCED"),lang:y,url:c.URI?yn.resolve(c.URI,t):""};if(m&&(C.assocLang=m),A&&(C.channels=A),b&&(C.characteristics=b),S&&(C.instreamId=S),u!=null&&u.length){const R=yn.findGroup(u,C.groupId)||u[0];iu(C,R,"audioCodec"),iu(C,R,"textCodec")}h.push(C)}}return s}static parseLevelPlaylist(e,t,r,i,s,o){const a=new j2(t),l=a.fragments;let c=null,d=0,u=0,h=0,y=0,m=null,A=new na(i,t),b,S,C,R=-1,D=!1,B=null;for(tu.lastIndex=0,a.m3u8=e,a.hasVariableRefs=Yd(e);(b=tu.exec(e))!==null;){D&&(D=!1,A=new na(i,t),A.start=h,A.sn=d,A.cc=y,A.level=r,c&&(A.initSegment=c,A.rawProgramDateTime=c.rawProgramDateTime,c.rawProgramDateTime=null,B&&(A.setByteRange(B),B=null)));const Z=b[1];if(Z){A.duration=parseFloat(Z);const O=(" "+b[2]).slice(1);A.title=O||null,A.tagList.push(O?["INF",Z,O]:["INF",Z])}else if(b[3]){if(xe(A.duration)){A.start=h,C&&au(A,C,a),A.sn=d,A.level=r,A.cc=y,l.push(A);const O=(" "+b[3]).slice(1);A.relurl=Va(a,O),su(A,m),m=A,h+=A.duration,d++,u=0,D=!0}}else if(b[4]){const O=(" "+b[4]).slice(1);m?A.setByteRange(O,m):A.setByteRange(O)}else if(b[5])A.rawProgramDateTime=(" "+b[5]).slice(1),A.tagList.push(["PROGRAM-DATE-TIME",A.rawProgramDateTime]),R===-1&&(R=l.length);else{if(b=b[0].match(R_),!b){M.warn("No matches on slow regex match for level playlist!");continue}for(S=1;S<b.length&&!(typeof b[S]<"u");S++);const O=(" "+b[S]).slice(1),ee=(" "+b[S+1]).slice(1),_e=b[S+2]?(" "+b[S+2]).slice(1):"";switch(O){case"PLAYLIST-TYPE":a.type=ee.toUpperCase();break;case"MEDIA-SEQUENCE":d=a.startSN=parseInt(ee);break;case"SKIP":{const ce=new ut(ee);Nt(a,ce,["RECENTLY-REMOVED-DATERANGES"]);const Y=ce.decimalInteger("SKIPPED-SEGMENTS");if(xe(Y)){a.skippedSegments=Y;for(let H=Y;H--;)l.unshift(null);d+=Y}const re=ce.enumeratedString("RECENTLY-REMOVED-DATERANGES");re&&(a.recentlyRemovedDateranges=re.split("	"));break}case"TARGETDURATION":a.targetduration=Math.max(parseInt(ee),1);break;case"VERSION":a.version=parseInt(ee);break;case"INDEPENDENT-SEGMENTS":case"EXTM3U":break;case"ENDLIST":a.live=!1;break;case"#":(ee||_e)&&A.tagList.push(_e?[ee,_e]:[ee]);break;case"DISCONTINUITY":y++,A.tagList.push(["DIS"]);break;case"GAP":A.gap=!0,A.tagList.push([O]);break;case"BITRATE":A.tagList.push([O,ee]);break;case"DATERANGE":{const ce=new ut(ee);Nt(a,ce,["ID","CLASS","START-DATE","END-DATE","SCTE35-CMD","SCTE35-OUT","SCTE35-IN"]),Nt(a,ce,ce.clientAttrs);const Y=new If(ce,a.dateRanges[ce.ID]);Y.isValid||a.skippedSegments?a.dateRanges[Y.id]=Y:M.warn(`Ignoring invalid DATERANGE tag: "${ee}"`),A.tagList.push(["EXT-X-DATERANGE",ee]);break}case"DEFINE":{{const ce=new ut(ee);Nt(a,ce,["NAME","VALUE","IMPORT","QUERYPARAM"]),"IMPORT"in ce?w_(a,ce,o):Qd(a,ce,t)}break}case"DISCONTINUITY-SEQUENCE":y=parseInt(ee);break;case"KEY":{const ce=nu(ee,t,a);if(ce.isSupported()){if(ce.method==="NONE"){C=void 0;break}C||(C={}),C[ce.keyFormat]&&(C=mt({},C)),C[ce.keyFormat]=ce}else M.warn(`[Keys] Ignoring invalid EXT-X-KEY tag: "${ee}"`);break}case"START":a.startTimeOffset=ru(ee);break;case"MAP":{const ce=new ut(ee);if(Nt(a,ce,["BYTERANGE","URI"]),A.duration){const Y=new na(i,t);ou(Y,ce,r,C),c=Y,A.initSegment=c,c.rawProgramDateTime&&!A.rawProgramDateTime&&(A.rawProgramDateTime=c.rawProgramDateTime)}else{const Y=A.byteRangeEndOffset;if(Y){const re=A.byteRangeStartOffset;B=`${Y-re}@${re}`}else B=null;ou(A,ce,r,C),c=A,D=!0}break}case"SERVER-CONTROL":{const ce=new ut(ee);a.canBlockReload=ce.bool("CAN-BLOCK-RELOAD"),a.canSkipUntil=ce.optionalFloat("CAN-SKIP-UNTIL",0),a.canSkipDateRanges=a.canSkipUntil>0&&ce.bool("CAN-SKIP-DATERANGES"),a.partHoldBack=ce.optionalFloat("PART-HOLD-BACK",0),a.holdBack=ce.optionalFloat("HOLD-BACK",0);break}case"PART-INF":{const ce=new ut(ee);a.partTarget=ce.decimalFloatingPoint("PART-TARGET");break}case"PART":{let ce=a.partList;ce||(ce=a.partList=[]);const Y=u>0?ce[ce.length-1]:void 0,re=u++,H=new ut(ee);Nt(a,H,["BYTERANGE","URI"]);const Q=new z2(H,A,t,re,Y);ce.push(Q),A.duration+=Q.duration;break}case"PRELOAD-HINT":{const ce=new ut(ee);Nt(a,ce,["URI"]),a.preloadHint=ce;break}case"RENDITION-REPORT":{const ce=new ut(ee);Nt(a,ce,["URI"]),a.renditionReports=a.renditionReports||[],a.renditionReports.push(ce);break}default:M.warn(`line parsed but not handled: ${b}`);break}}}m&&!m.relurl?(l.pop(),h-=m.duration,a.partList&&(a.fragmentHint=m)):a.partList&&(su(A,m),A.cc=y,a.fragmentHint=A,C&&au(A,C,a));const K=l.length,N=l[0],z=l[K-1];if(h+=a.skippedSegments*a.targetduration,h>0&&K&&z){a.averagetargetduration=h/K;const Z=z.sn;a.endSN=Z!=="initSegment"?Z:0,a.live||(z.endList=!0),N&&(a.startCC=N.cc)}else a.endSN=0,a.startCC=0;return a.fragmentHint&&(h+=a.fragmentHint.duration),a.totalduration=h,a.endCC=y,R>0&&D_(l,R),a}}function nu(n,e,t){var r,i;const s=new ut(n);Nt(t,s,["KEYFORMAT","KEYFORMATVERSIONS","URI","IV","URI"]);const o=(r=s.METHOD)!=null?r:"",a=s.URI,l=s.hexadecimalInteger("IV"),c=s.KEYFORMATVERSIONS,d=(i=s.KEYFORMAT)!=null?i:"identity";a&&s.IV&&!l&&M.error(`Invalid IV: ${s.IV}`);const u=a?yn.resolve(a,e):"",h=(c||"1").split("/").map(Number).filter(Number.isFinite);return new ji(o,u,d,h,l)}function ru(n){const t=new ut(n).decimalFloatingPoint("TIME-OFFSET");return xe(t)?t:null}function I_(n,e){let t=(n||"").split(/[ ,]+/).filter(r=>r);["video","audio","text"].forEach(r=>{const i=t.filter(s=>S_(s,r));i.length&&(e[`${r}Codec`]=i.join(","),t=t.filter(s=>i.indexOf(s)===-1))}),e.unknownCodecs=t}function iu(n,e,t){const r=e[t];r&&(n[t]=r)}function D_(n,e){let t=n[e];for(let r=e;r--;){const i=n[r];if(!i)return;i.programDateTime=t.programDateTime-i.duration*1e3,t=i}}function su(n,e){n.rawProgramDateTime?n.programDateTime=Date.parse(n.rawProgramDateTime):e!=null&&e.programDateTime&&(n.programDateTime=e.endProgramDateTime),xe(n.programDateTime)||(n.programDateTime=null,n.rawProgramDateTime=null)}function ou(n,e,t,r){n.relurl=e.URI,e.BYTERANGE&&n.setByteRange(e.BYTERANGE),n.level=t,n.sn="initSegment",r&&(n.levelkeys=r),n.initSegment=null}function au(n,e,t){n.levelkeys=e;const{encryptedFragments:r}=t;(!r.length||r[r.length-1].levelkeys!==e)&&Object.keys(e).some(i=>e[i].isCommonEncryption)&&r.push(n)}var ze={MANIFEST:"manifest",LEVEL:"level",AUDIO_TRACK:"audioTrack",SUBTITLE_TRACK:"subtitleTrack"},De={MAIN:"main",AUDIO:"audio",SUBTITLE:"subtitle"};function lu(n){const{type:e}=n;switch(e){case ze.AUDIO_TRACK:return De.AUDIO;case ze.SUBTITLE_TRACK:return De.SUBTITLE;default:return De.MAIN}}function ca(n,e){let t=n.url;return(t===void 0||t.indexOf("data:")===0)&&(t=e.url),t}class B_{constructor(e){this.hls=void 0,this.loaders=Object.create(null),this.variableList=null,this.hls=e,this.registerListeners()}startLoad(e){}stopLoad(){this.destroyInternalLoaders()}registerListeners(){const{hls:e}=this;e.on(w.MANIFEST_LOADING,this.onManifestLoading,this),e.on(w.LEVEL_LOADING,this.onLevelLoading,this),e.on(w.AUDIO_TRACK_LOADING,this.onAudioTrackLoading,this),e.on(w.SUBTITLE_TRACK_LOADING,this.onSubtitleTrackLoading,this)}unregisterListeners(){const{hls:e}=this;e.off(w.MANIFEST_LOADING,this.onManifestLoading,this),e.off(w.LEVEL_LOADING,this.onLevelLoading,this),e.off(w.AUDIO_TRACK_LOADING,this.onAudioTrackLoading,this),e.off(w.SUBTITLE_TRACK_LOADING,this.onSubtitleTrackLoading,this)}createInternalLoader(e){const t=this.hls.config,r=t.pLoader,i=t.loader,s=r||i,o=new s(t);return this.loaders[e.type]=o,o}getInternalLoader(e){return this.loaders[e.type]}resetInternalLoader(e){this.loaders[e]&&delete this.loaders[e]}destroyInternalLoaders(){for(const e in this.loaders){const t=this.loaders[e];t&&t.destroy(),this.resetInternalLoader(e)}}destroy(){this.variableList=null,this.unregisterListeners(),this.destroyInternalLoaders()}onManifestLoading(e,t){const{url:r}=t;this.variableList=null,this.load({id:null,level:0,responseType:"text",type:ze.MANIFEST,url:r,deliveryDirectives:null})}onLevelLoading(e,t){const{id:r,level:i,pathwayId:s,url:o,deliveryDirectives:a}=t;this.load({id:r,level:i,pathwayId:s,responseType:"text",type:ze.LEVEL,url:o,deliveryDirectives:a})}onAudioTrackLoading(e,t){const{id:r,groupId:i,url:s,deliveryDirectives:o}=t;this.load({id:r,groupId:i,level:null,responseType:"text",type:ze.AUDIO_TRACK,url:s,deliveryDirectives:o})}onSubtitleTrackLoading(e,t){const{id:r,groupId:i,url:s,deliveryDirectives:o}=t;this.load({id:r,groupId:i,level:null,responseType:"text",type:ze.SUBTITLE_TRACK,url:s,deliveryDirectives:o})}load(e){var t;const r=this.hls.config;let i=this.getInternalLoader(e);if(i){const c=i.context;if(c&&c.url===e.url&&c.level===e.level){M.trace("[playlist-loader]: playlist request ongoing");return}M.log(`[playlist-loader]: aborting previous loader for type: ${e.type}`),i.abort()}let s;if(e.type===ze.MANIFEST?s=r.manifestLoadPolicy.default:s=mt({},r.playlistLoadPolicy.default,{timeoutRetry:null,errorRetry:null}),i=this.createInternalLoader(e),xe((t=e.deliveryDirectives)==null?void 0:t.part)){let c;if(e.type===ze.LEVEL&&e.level!==null?c=this.hls.levels[e.level].details:e.type===ze.AUDIO_TRACK&&e.id!==null?c=this.hls.audioTracks[e.id].details:e.type===ze.SUBTITLE_TRACK&&e.id!==null&&(c=this.hls.subtitleTracks[e.id].details),c){const d=c.partTarget,u=c.targetduration;if(d&&u){const h=Math.max(d*3,u*.8)*1e3;s=mt({},s,{maxTimeToFirstByteMs:Math.min(h,s.maxTimeToFirstByteMs),maxLoadTimeMs:Math.min(h,s.maxTimeToFirstByteMs)})}}}const o=s.errorRetry||s.timeoutRetry||{},a={loadPolicy:s,timeout:s.maxLoadTimeMs,maxRetry:o.maxNumRetry||0,retryDelay:o.retryDelayMs||0,maxRetryDelay:o.maxRetryDelayMs||0},l={onSuccess:(c,d,u,h)=>{const y=this.getInternalLoader(u);this.resetInternalLoader(u.type);const m=c.data;if(m.indexOf("#EXTM3U")!==0){this.handleManifestParsingError(c,u,new Error("no EXTM3U delimiter"),h||null,d);return}d.parsing.start=performance.now(),yn.isMediaPlaylist(m)?this.handleTrackOrLevelPlaylist(c,d,u,h||null,y):this.handleMasterPlaylist(c,d,u,h)},onError:(c,d,u,h)=>{this.handleNetworkError(d,u,!1,c,h)},onTimeout:(c,d,u)=>{this.handleNetworkError(d,u,!0,void 0,c)}};i.load(e,a,l)}handleMasterPlaylist(e,t,r,i){const s=this.hls,o=e.data,a=ca(e,r),l=yn.parseMasterPlaylist(o,a);if(l.playlistParsingError){this.handleManifestParsingError(e,r,l.playlistParsingError,i,t);return}const{contentSteering:c,levels:d,sessionData:u,sessionKeys:h,startTimeOffset:y,variableList:m}=l;this.variableList=m;const{AUDIO:A=[],SUBTITLES:b,"CLOSED-CAPTIONS":S}=yn.parseMasterPlaylistMedia(o,a,l);A.length&&!A.some(R=>!R.url)&&d[0].audioCodec&&!d[0].attrs.AUDIO&&(M.log("[playlist-loader]: audio codec signaled in quality level, but no embedded audio track signaled, create one"),A.unshift({type:"main",name:"main",groupId:"main",default:!1,autoselect:!1,forced:!1,id:-1,attrs:new ut({}),bitrate:0,url:""})),s.trigger(w.MANIFEST_LOADED,{levels:d,audioTracks:A,subtitles:b,captions:S,contentSteering:c,url:a,stats:t,networkDetails:i,sessionData:u,sessionKeys:h,startTimeOffset:y,variableList:m})}handleTrackOrLevelPlaylist(e,t,r,i,s){const o=this.hls,{id:a,level:l,type:c}=r,d=ca(e,r),u=0,h=xe(l)?l:xe(a)?a:0,y=lu(r),m=yn.parseLevelPlaylist(e.data,d,h,y,u,this.variableList);if(c===ze.MANIFEST){const A={attrs:new ut({}),bitrate:0,details:m,name:"",url:d};o.trigger(w.MANIFEST_LOADED,{levels:[A],audioTracks:[],url:d,stats:t,networkDetails:i,sessionData:null,sessionKeys:null,contentSteering:null,startTimeOffset:null,variableList:null})}t.parsing.end=performance.now(),r.levelDetails=m,this.handlePlaylistLoaded(m,e,t,r,i,s)}handleManifestParsingError(e,t,r,i,s){this.hls.trigger(w.ERROR,{type:Be.NETWORK_ERROR,details:G.MANIFEST_PARSING_ERROR,fatal:t.type===ze.MANIFEST,url:e.url,err:r,error:r,reason:r.message,response:e,context:t,networkDetails:i,stats:s})}handleNetworkError(e,t,r=!1,i,s){let o=`A network ${r?"timeout":"error"+(i?" (status "+i.code+")":"")} occurred while loading ${e.type}`;e.type===ze.LEVEL?o+=`: ${e.level} id: ${e.id}`:(e.type===ze.AUDIO_TRACK||e.type===ze.SUBTITLE_TRACK)&&(o+=` id: ${e.id} group-id: "${e.groupId}"`);const a=new Error(o);M.warn(`[playlist-loader]: ${o}`);let l=G.UNKNOWN,c=!1;const d=this.getInternalLoader(e);switch(e.type){case ze.MANIFEST:l=r?G.MANIFEST_LOAD_TIMEOUT:G.MANIFEST_LOAD_ERROR,c=!0;break;case ze.LEVEL:l=r?G.LEVEL_LOAD_TIMEOUT:G.LEVEL_LOAD_ERROR,c=!1;break;case ze.AUDIO_TRACK:l=r?G.AUDIO_TRACK_LOAD_TIMEOUT:G.AUDIO_TRACK_LOAD_ERROR,c=!1;break;case ze.SUBTITLE_TRACK:l=r?G.SUBTITLE_TRACK_LOAD_TIMEOUT:G.SUBTITLE_LOAD_ERROR,c=!1;break}d&&this.resetInternalLoader(e.type);const u={type:Be.NETWORK_ERROR,details:l,fatal:c,url:e.url,loader:d,context:e,error:a,networkDetails:t,stats:s};if(i){const h=(t==null?void 0:t.url)||e.url;u.response=_t({url:h,data:void 0},i)}this.hls.trigger(w.ERROR,u)}handlePlaylistLoaded(e,t,r,i,s,o){const a=this.hls,{type:l,level:c,id:d,groupId:u,deliveryDirectives:h}=i,y=ca(t,i),m=lu(i),A=typeof i.level=="number"&&m===De.MAIN?c:void 0;if(!e.fragments.length){const S=new Error("No Segments found in Playlist");a.trigger(w.ERROR,{type:Be.NETWORK_ERROR,details:G.LEVEL_EMPTY_ERROR,fatal:!1,url:y,error:S,reason:S.message,response:t,context:i,level:A,parent:m,networkDetails:s,stats:r});return}e.targetduration||(e.playlistParsingError=new Error("Missing Target Duration"));const b=e.playlistParsingError;if(b){a.trigger(w.ERROR,{type:Be.NETWORK_ERROR,details:G.LEVEL_PARSING_ERROR,fatal:!1,url:y,error:b,reason:b.message,response:t,context:i,level:A,parent:m,networkDetails:s,stats:r});return}switch(e.live&&o&&(o.getCacheAge&&(e.ageHeader=o.getCacheAge()||0),(!o.getCacheAge||isNaN(e.ageHeader))&&(e.ageHeader=0)),l){case ze.MANIFEST:case ze.LEVEL:a.trigger(w.LEVEL_LOADED,{details:e,level:A||0,id:d||0,stats:r,networkDetails:s,deliveryDirectives:h});break;case ze.AUDIO_TRACK:a.trigger(w.AUDIO_TRACK_LOADED,{details:e,id:d||0,groupId:u||"",stats:r,networkDetails:s,deliveryDirectives:h});break;case ze.SUBTITLE_TRACK:a.trigger(w.SUBTITLE_TRACK_LOADED,{details:e,id:d||0,groupId:u||"",stats:r,networkDetails:s,deliveryDirectives:h});break}}}function Vf(n,e){let t;try{t=new Event("addtrack")}catch{t=document.createEvent("Event"),t.initEvent("addtrack",!1,!1)}t.track=n,e.dispatchEvent(t)}function Wf(n,e){const t=n.mode;if(t==="disabled"&&(n.mode="hidden"),n.cues&&!n.cues.getCueById(e.id))try{if(n.addCue(e),!n.cues.getCueById(e.id))throw new Error(`addCue is failed for: ${e}`)}catch(r){M.debug(`[texttrack-utils]: ${r}`);try{const i=new self.TextTrackCue(e.startTime,e.endTime,e.text);i.id=e.id,n.addCue(i)}catch(i){M.debug(`[texttrack-utils]: Legacy TextTrackCue fallback failed: ${i}`)}}t==="disabled"&&(n.mode=t)}function Tr(n){const e=n.mode;if(e==="disabled"&&(n.mode="hidden"),n.cues)for(let t=n.cues.length;t--;)n.removeCue(n.cues[t]);e==="disabled"&&(n.mode=e)}function Wa(n,e,t,r){const i=n.mode;if(i==="disabled"&&(n.mode="hidden"),n.cues&&n.cues.length>0){const s=O_(n.cues,e,t);for(let o=0;o<s.length;o++)(!r||r(s[o]))&&n.removeCue(s[o])}i==="disabled"&&(n.mode=i)}function P_(n,e){if(e<n[0].startTime)return 0;const t=n.length-1;if(e>n[t].endTime)return-1;let r=0,i=t;for(;r<=i;){const s=Math.floor((i+r)/2);if(e<n[s].startTime)i=s-1;else if(e>n[s].startTime&&r<t)r=s+1;else return s}return n[r].startTime-e<e-n[i].startTime?r:i}function O_(n,e,t){const r=[],i=P_(n,e);if(i>-1)for(let s=i,o=n.length;s<o;s++){const a=n[s];if(a.startTime>=e&&a.endTime<=t)r.push(a);else if(a.startTime>t)return r}return r}function Ps(n){const e=[];for(let t=0;t<n.length;t++){const r=n[t];(r.kind==="subtitles"||r.kind==="captions")&&r.label&&e.push(n[t])}return e}var en={audioId3:"org.id3",dateRange:"com.apple.quicktime.HLS",emsg:"https://aomedia.org/emsg/ID3"};const M_=.25;function Ya(){if(!(typeof self>"u"))return self.VTTCue||self.TextTrackCue}function cu(n,e,t,r,i){let s=new n(e,t,"");try{s.value=r,i&&(s.type=i)}catch{s=new n(e,t,JSON.stringify(i?_t({type:i},r):r))}return s}const As=(()=>{const n=Ya();try{n&&new n(0,Number.POSITIVE_INFINITY,"")}catch{return Number.MAX_VALUE}return Number.POSITIVE_INFINITY})();function da(n,e){return n.getTime()/1e3-e}function F_(n){return Uint8Array.from(n.replace(/^0x/,"").replace(/([\da-fA-F]{2}) ?/g,"0x$1 ").replace(/ +$/,"").split(" ")).buffer}class N_{constructor(e){this.hls=void 0,this.id3Track=null,this.media=null,this.dateRangeCuesAppended={},this.hls=e,this._registerListeners()}destroy(){this._unregisterListeners(),this.id3Track=null,this.media=null,this.dateRangeCuesAppended={},this.hls=null}_registerListeners(){const{hls:e}=this;e.on(w.MEDIA_ATTACHED,this.onMediaAttached,this),e.on(w.MEDIA_DETACHING,this.onMediaDetaching,this),e.on(w.MANIFEST_LOADING,this.onManifestLoading,this),e.on(w.FRAG_PARSING_METADATA,this.onFragParsingMetadata,this),e.on(w.BUFFER_FLUSHING,this.onBufferFlushing,this),e.on(w.LEVEL_UPDATED,this.onLevelUpdated,this)}_unregisterListeners(){const{hls:e}=this;e.off(w.MEDIA_ATTACHED,this.onMediaAttached,this),e.off(w.MEDIA_DETACHING,this.onMediaDetaching,this),e.off(w.MANIFEST_LOADING,this.onManifestLoading,this),e.off(w.FRAG_PARSING_METADATA,this.onFragParsingMetadata,this),e.off(w.BUFFER_FLUSHING,this.onBufferFlushing,this),e.off(w.LEVEL_UPDATED,this.onLevelUpdated,this)}onMediaAttached(e,t){this.media=t.media}onMediaDetaching(){this.id3Track&&(Tr(this.id3Track),this.id3Track=null,this.media=null,this.dateRangeCuesAppended={})}onManifestLoading(){this.dateRangeCuesAppended={}}createTrack(e){const t=this.getID3Track(e.textTracks);return t.mode="hidden",t}getID3Track(e){if(this.media){for(let t=0;t<e.length;t++){const r=e[t];if(r.kind==="metadata"&&r.label==="id3")return Vf(r,this.media),r}return this.media.addTextTrack("metadata","id3")}}onFragParsingMetadata(e,t){if(!this.media)return;const{hls:{config:{enableEmsgMetadataCues:r,enableID3MetadataCues:i}}}=this;if(!r&&!i)return;const{samples:s}=t;this.id3Track||(this.id3Track=this.createTrack(this.media));const o=Ya();if(o)for(let a=0;a<s.length;a++){const l=s[a].type;if(l===en.emsg&&!r||!i)continue;const c=Ff(s[a].data);if(c){const d=s[a].pts;let u=d+s[a].duration;u>As&&(u=As),u-d<=0&&(u=d+M_);for(let y=0;y<c.length;y++){const m=c[y];if(!Mf(m)){this.updateId3CueEnds(d,l);const A=cu(o,d,u,m,l);A&&this.id3Track.addCue(A)}}}}}updateId3CueEnds(e,t){var r;const i=(r=this.id3Track)==null?void 0:r.cues;if(i)for(let s=i.length;s--;){const o=i[s];o.type===t&&o.startTime<e&&o.endTime===As&&(o.endTime=e)}}onBufferFlushing(e,{startOffset:t,endOffset:r,type:i}){const{id3Track:s,hls:o}=this;if(!o)return;const{config:{enableEmsgMetadataCues:a,enableID3MetadataCues:l}}=o;if(s&&(a||l)){let c;i==="audio"?c=d=>d.type===en.audioId3&&l:i==="video"?c=d=>d.type===en.emsg&&a:c=d=>d.type===en.audioId3&&l||d.type===en.emsg&&a,Wa(s,t,r,c)}}onLevelUpdated(e,{details:t}){if(!this.media||!t.hasProgramDateTime||!this.hls.config.enableDateRangeMetadataCues)return;const{dateRangeCuesAppended:r,id3Track:i}=this,{dateRanges:s}=t,o=Object.keys(s);if(i){const d=Object.keys(r).filter(u=>!o.includes(u));for(let u=d.length;u--;){const h=d[u];Object.keys(r[h].cues).forEach(y=>{i.removeCue(r[h].cues[y])}),delete r[h]}}const a=t.fragments[t.fragments.length-1];if(o.length===0||!xe(a==null?void 0:a.programDateTime))return;this.id3Track||(this.id3Track=this.createTrack(this.media));const l=a.programDateTime/1e3-a.start,c=Ya();for(let d=0;d<o.length;d++){const u=o[d],h=s[u],y=da(h.startDate,l),m=r[u],A=(m==null?void 0:m.cues)||{};let b=(m==null?void 0:m.durationKnown)||!1,S=As;const C=h.endDate;if(C)S=da(C,l),b=!0;else if(h.endOnNext&&!b){const D=o.reduce((B,K)=>{if(K!==h.id){const N=s[K];if(N.class===h.class&&N.startDate>h.startDate&&(!B||h.startDate<B.startDate))return N}return B},null);D&&(S=da(D.startDate,l),b=!0)}const R=Object.keys(h.attr);for(let D=0;D<R.length;D++){const B=R[D];if(!G2(B))continue;const K=A[B];if(K)b&&!m.durationKnown&&(K.endTime=S);else if(c){let N=h.attr[B];K2(B)&&(N=F_(N));const z=cu(c,y,S,{key:B,data:N},en.dateRange);z&&(z.id=u,this.id3Track.addCue(z),A[B]=z)}}r[u]={cues:A,dateRange:h,durationKnown:b}}}}class U_{constructor(e){this.hls=void 0,this.config=void 0,this.media=null,this.levelDetails=null,this.currentTime=0,this.stallCount=0,this._latency=null,this.timeupdateHandler=()=>this.timeupdate(),this.hls=e,this.config=e.config,this.registerListeners()}get latency(){return this._latency||0}get maxLatency(){const{config:e,levelDetails:t}=this;return e.liveMaxLatencyDuration!==void 0?e.liveMaxLatencyDuration:t?e.liveMaxLatencyDurationCount*t.targetduration:0}get targetLatency(){const{levelDetails:e}=this;if(e===null)return null;const{holdBack:t,partHoldBack:r,targetduration:i}=e,{liveSyncDuration:s,liveSyncDurationCount:o,lowLatencyMode:a}=this.config,l=this.hls.userConfig;let c=a&&r||t;(l.liveSyncDuration||l.liveSyncDurationCount||c===0)&&(c=s!==void 0?s:o*i);const d=i,u=1;return c+Math.min(this.stallCount*u,d)}get liveSyncPosition(){const e=this.estimateLiveEdge(),t=this.targetLatency,r=this.levelDetails;if(e===null||t===null||r===null)return null;const i=r.edge,s=e-t-this.edgeStalled,o=i-r.totalduration,a=i-(this.config.lowLatencyMode&&r.partTarget||r.targetduration);return Math.min(Math.max(o,s),a)}get drift(){const{levelDetails:e}=this;return e===null?1:e.drift}get edgeStalled(){const{levelDetails:e}=this;if(e===null)return 0;const t=(this.config.lowLatencyMode&&e.partTarget||e.targetduration)*3;return Math.max(e.age-t,0)}get forwardBufferLength(){const{media:e,levelDetails:t}=this;if(!e||!t)return 0;const r=e.buffered.length;return(r?e.buffered.end(r-1):t.edge)-this.currentTime}destroy(){this.unregisterListeners(),this.onMediaDetaching(),this.levelDetails=null,this.hls=this.timeupdateHandler=null}registerListeners(){this.hls.on(w.MEDIA_ATTACHED,this.onMediaAttached,this),this.hls.on(w.MEDIA_DETACHING,this.onMediaDetaching,this),this.hls.on(w.MANIFEST_LOADING,this.onManifestLoading,this),this.hls.on(w.LEVEL_UPDATED,this.onLevelUpdated,this),this.hls.on(w.ERROR,this.onError,this)}unregisterListeners(){this.hls.off(w.MEDIA_ATTACHED,this.onMediaAttached,this),this.hls.off(w.MEDIA_DETACHING,this.onMediaDetaching,this),this.hls.off(w.MANIFEST_LOADING,this.onManifestLoading,this),this.hls.off(w.LEVEL_UPDATED,this.onLevelUpdated,this),this.hls.off(w.ERROR,this.onError,this)}onMediaAttached(e,t){this.media=t.media,this.media.addEventListener("timeupdate",this.timeupdateHandler)}onMediaDetaching(){this.media&&(this.media.removeEventListener("timeupdate",this.timeupdateHandler),this.media=null)}onManifestLoading(){this.levelDetails=null,this._latency=null,this.stallCount=0}onLevelUpdated(e,{details:t}){this.levelDetails=t,t.advanced&&this.timeupdate(),!t.live&&this.media&&this.media.removeEventListener("timeupdate",this.timeupdateHandler)}onError(e,t){var r;t.details===G.BUFFER_STALLED_ERROR&&(this.stallCount++,(r=this.levelDetails)!=null&&r.live&&M.warn("[playback-rate-controller]: Stall detected, adjusting target latency"))}timeupdate(){const{media:e,levelDetails:t}=this;if(!e||!t)return;this.currentTime=e.currentTime;const r=this.computeLatency();if(r===null)return;this._latency=r;const{lowLatencyMode:i,maxLiveSyncPlaybackRate:s}=this.config;if(!i||s===1||!t.live)return;const o=this.targetLatency;if(o===null)return;const a=r-o,l=Math.min(this.maxLatency,o+t.targetduration);if(a<l&&a>.05&&this.forwardBufferLength>1){const d=Math.min(2,Math.max(1,s)),u=Math.round(2/(1+Math.exp(-.75*a-this.edgeStalled))*20)/20;e.playbackRate=Math.min(d,Math.max(1,u))}else e.playbackRate!==1&&e.playbackRate!==0&&(e.playbackRate=1)}estimateLiveEdge(){const{levelDetails:e}=this;return e===null?null:e.edge+e.age}computeLatency(){const e=this.estimateLiveEdge();return e===null?null:e-this.currentTime}}const Qa=["NONE","TYPE-0","TYPE-1",null];function $_(n){return Qa.indexOf(n)>-1}const Js=["SDR","PQ","HLG"];function H_(n){return!!n&&Js.indexOf(n)>-1}var Pi={No:"",Yes:"YES",v2:"v2"};function G_(n,e){const{canSkipUntil:t,canSkipDateRanges:r,endSN:i}=n,s=e!==void 0?e-i:0;return t&&s<t?r?Pi.v2:Pi.Yes:Pi.No}class du{constructor(e,t,r){this.msn=void 0,this.part=void 0,this.skip=void 0,this.msn=e,this.part=t,this.skip=r}addDirectives(e){const t=new self.URL(e);return this.msn!==void 0&&t.searchParams.set("_HLS_msn",this.msn.toString()),this.part!==void 0&&t.searchParams.set("_HLS_part",this.part.toString()),this.skip&&t.searchParams.set("_HLS_skip",this.skip),t.href}}class Hr{constructor(e){this._attrs=void 0,this.audioCodec=void 0,this.bitrate=void 0,this.codecSet=void 0,this.url=void 0,this.frameRate=void 0,this.height=void 0,this.id=void 0,this.name=void 0,this.videoCodec=void 0,this.width=void 0,this.details=void 0,this.fragmentError=0,this.loadError=0,this.loaded=void 0,this.realBitrate=0,this.supportedPromise=void 0,this.supportedResult=void 0,this._avgBitrate=0,this._audioGroups=void 0,this._subtitleGroups=void 0,this._urlId=0,this.url=[e.url],this._attrs=[e.attrs],this.bitrate=e.bitrate,e.details&&(this.details=e.details),this.id=e.id||0,this.name=e.name,this.width=e.width||0,this.height=e.height||0,this.frameRate=e.attrs.optionalFloat("FRAME-RATE",0),this._avgBitrate=e.attrs.decimalInteger("AVERAGE-BANDWIDTH"),this.audioCodec=e.audioCodec,this.videoCodec=e.videoCodec,this.codecSet=[e.videoCodec,e.audioCodec].filter(t=>!!t).map(t=>t.substring(0,4)).join(","),this.addGroupId("audio",e.attrs.AUDIO),this.addGroupId("text",e.attrs.SUBTITLES)}get maxBitrate(){return Math.max(this.realBitrate,this.bitrate)}get averageBitrate(){return this._avgBitrate||this.realBitrate||this.bitrate}get attrs(){return this._attrs[0]}get codecs(){return this.attrs.CODECS||""}get pathwayId(){return this.attrs["PATHWAY-ID"]||"."}get videoRange(){return this.attrs["VIDEO-RANGE"]||"SDR"}get score(){return this.attrs.optionalFloat("SCORE",0)}get uri(){return this.url[0]||""}hasAudioGroup(e){return uu(this._audioGroups,e)}hasSubtitleGroup(e){return uu(this._subtitleGroups,e)}get audioGroups(){return this._audioGroups}get subtitleGroups(){return this._subtitleGroups}addGroupId(e,t){if(t){if(e==="audio"){let r=this._audioGroups;r||(r=this._audioGroups=[]),r.indexOf(t)===-1&&r.push(t)}else if(e==="text"){let r=this._subtitleGroups;r||(r=this._subtitleGroups=[]),r.indexOf(t)===-1&&r.push(t)}}}get urlId(){return 0}set urlId(e){}get audioGroupIds(){return this.audioGroups?[this.audioGroupId]:void 0}get textGroupIds(){return this.subtitleGroups?[this.textGroupId]:void 0}get audioGroupId(){var e;return(e=this.audioGroups)==null?void 0:e[0]}get textGroupId(){var e;return(e=this.subtitleGroups)==null?void 0:e[0]}addFallback(){}}function uu(n,e){return!e||!n?!1:n.indexOf(e)!==-1}function ua(n,e){const t=e.startPTS;if(xe(t)){let r=0,i;e.sn>n.sn?(r=t-n.start,i=n):(r=n.start-t,i=e),i.duration!==r&&(i.duration=r)}else e.sn>n.sn?n.cc===e.cc&&n.minEndPTS?e.start=n.start+(n.minEndPTS-n.start):e.start=n.start+n.duration:e.start=Math.max(n.start-e.duration,0)}function Yf(n,e,t,r,i,s){r-t<=0&&(M.warn("Fragment should have a positive duration",e),r=t+e.duration,s=i+e.duration);let a=t,l=r;const c=e.startPTS,d=e.endPTS;if(xe(c)){const b=Math.abs(c-t);xe(e.deltaPTS)?e.deltaPTS=Math.max(b,e.deltaPTS):e.deltaPTS=b,a=Math.max(t,c),t=Math.min(t,c),i=Math.min(i,e.startDTS),l=Math.min(r,d),r=Math.max(r,d),s=Math.max(s,e.endDTS)}const u=t-e.start;e.start!==0&&(e.start=t),e.duration=r-e.start,e.startPTS=t,e.maxStartPTS=a,e.startDTS=i,e.endPTS=r,e.minEndPTS=l,e.endDTS=s;const h=e.sn;if(!n||h<n.startSN||h>n.endSN)return 0;let y;const m=h-n.startSN,A=n.fragments;for(A[m]=e,y=m;y>0;y--)ua(A[y],A[y-1]);for(y=m;y<A.length-1;y++)ua(A[y],A[y+1]);return n.fragmentHint&&ua(A[A.length-1],n.fragmentHint),n.PTSKnown=n.alignedSliding=!0,u}function K_(n,e){let t=null;const r=n.fragments;for(let l=r.length-1;l>=0;l--){const c=r[l].initSegment;if(c){t=c;break}}n.fragmentHint&&delete n.fragmentHint.endPTS;let i=0,s;if(j_(n,e,(l,c)=>{l.relurl&&(i=l.cc-c.cc),xe(l.startPTS)&&xe(l.endPTS)&&(c.start=c.startPTS=l.startPTS,c.startDTS=l.startDTS,c.maxStartPTS=l.maxStartPTS,c.endPTS=l.endPTS,c.endDTS=l.endDTS,c.minEndPTS=l.minEndPTS,c.duration=l.endPTS-l.startPTS,c.duration&&(s=c),e.PTSKnown=e.alignedSliding=!0),c.elementaryStreams=l.elementaryStreams,c.loader=l.loader,c.stats=l.stats,l.initSegment&&(c.initSegment=l.initSegment,t=l.initSegment)}),t&&(e.fragmentHint?e.fragments.concat(e.fragmentHint):e.fragments).forEach(c=>{var d;c&&(!c.initSegment||c.initSegment.relurl===((d=t)==null?void 0:d.relurl))&&(c.initSegment=t)}),e.skippedSegments)if(e.deltaUpdateFailed=e.fragments.some(l=>!l),e.deltaUpdateFailed){M.warn("[level-helper] Previous playlist missing segments skipped in delta playlist");for(let l=e.skippedSegments;l--;)e.fragments.shift();e.startSN=e.fragments[0].sn,e.startCC=e.fragments[0].cc}else e.canSkipDateRanges&&(e.dateRanges=z_(n.dateRanges,e.dateRanges,e.recentlyRemovedDateranges));const o=e.fragments;if(i){M.warn("discontinuity sliding from playlist, take drift into account");for(let l=0;l<o.length;l++)o[l].cc+=i}e.skippedSegments&&(e.startCC=e.fragments[0].cc),q_(n.partList,e.partList,(l,c)=>{c.elementaryStreams=l.elementaryStreams,c.stats=l.stats}),s?Yf(e,s,s.startPTS,s.endPTS,s.startDTS,s.endDTS):Qf(n,e),o.length&&(e.totalduration=e.edge-o[0].start),e.driftStartTime=n.driftStartTime,e.driftStart=n.driftStart;const a=e.advancedDateTime;if(e.advanced&&a){const l=e.edge;e.driftStart||(e.driftStartTime=a,e.driftStart=l),e.driftEndTime=a,e.driftEnd=l}else e.driftEndTime=n.driftEndTime,e.driftEnd=n.driftEnd,e.advancedDateTime=n.advancedDateTime}function z_(n,e,t){const r=mt({},n);return t&&t.forEach(i=>{delete r[i]}),Object.keys(e).forEach(i=>{const s=new If(e[i].attr,r[i]);s.isValid?r[i]=s:M.warn(`Ignoring invalid Playlist Delta Update DATERANGE tag: "${JSON.stringify(e[i].attr)}"`)}),r}function q_(n,e,t){if(n&&e){let r=0;for(let i=0,s=n.length;i<=s;i++){const o=n[i],a=e[i+r];o&&a&&o.index===a.index&&o.fragment.sn===a.fragment.sn?t(o,a):r--}}}function j_(n,e,t){const r=e.skippedSegments,i=Math.max(n.startSN,e.startSN)-e.startSN,s=(n.fragmentHint?1:0)+(r?e.endSN:Math.min(n.endSN,e.endSN))-e.startSN,o=e.startSN-n.startSN,a=e.fragmentHint?e.fragments.concat(e.fragmentHint):e.fragments,l=n.fragmentHint?n.fragments.concat(n.fragmentHint):n.fragments;for(let c=i;c<=s;c++){const d=l[o+c];let u=a[c];r&&!u&&c<r&&(u=e.fragments[c]=d),d&&u&&t(d,u)}}function Qf(n,e){const t=e.startSN+e.skippedSegments-n.startSN,r=n.fragments;t<0||t>=r.length||Xa(e,r[t].start)}function Xa(n,e){if(e){const t=n.fragments;for(let r=n.skippedSegments;r<t.length;r++)t[r].start+=e;n.fragmentHint&&(n.fragmentHint.start+=e)}}function V_(n,e=1/0){let t=1e3*n.targetduration;if(n.updated){const r=n.fragments,i=4;if(r.length&&t*i>e){const s=r[r.length-1].duration*1e3;s<t&&(t=s)}}else t/=2;return Math.round(t)}function W_(n,e,t){if(!(n!=null&&n.details))return null;const r=n.details;let i=r.fragments[e-r.startSN];return i||(i=r.fragmentHint,i&&i.sn===e)?i:e<r.startSN&&t&&t.sn===e?t:null}function hu(n,e,t){var r;return n!=null&&n.details?Xf((r=n.details)==null?void 0:r.partList,e,t):null}function Xf(n,e,t){if(n)for(let r=n.length;r--;){const i=n[r];if(i.index===t&&i.fragment.sn===e)return i}return null}function Zf(n){n.forEach((e,t)=>{const{details:r}=e;r!=null&&r.fragments&&r.fragments.forEach(i=>{i.level=t})})}function eo(n){switch(n.details){case G.FRAG_LOAD_TIMEOUT:case G.KEY_LOAD_TIMEOUT:case G.LEVEL_LOAD_TIMEOUT:case G.MANIFEST_LOAD_TIMEOUT:return!0}return!1}function fu(n,e){const t=eo(e);return n.default[`${t?"timeout":"error"}Retry`]}function Nl(n,e){const t=n.backoff==="linear"?1:Math.pow(2,e);return Math.min(t*n.retryDelayMs,n.maxRetryDelayMs)}function pu(n){return _t(_t({},n),{errorRetry:null,timeoutRetry:null})}function to(n,e,t,r){if(!n)return!1;const i=r==null?void 0:r.code,s=e<n.maxNumRetry&&(Y_(i)||!!t);return n.shouldRetry?n.shouldRetry(n,e,t,r,s):s}function Y_(n){return n===0&&navigator.onLine===!1||!!n&&(n<400||n>499)}const Jf={search:function(n,e){let t=0,r=n.length-1,i=null,s=null;for(;t<=r;){i=(t+r)/2|0,s=n[i];const o=e(s);if(o>0)t=i+1;else if(o<0)r=i-1;else return s}return null}};function Q_(n,e,t){if(e===null||!Array.isArray(n)||!n.length||!xe(e))return null;const r=n[0].programDateTime;if(e<(r||0))return null;const i=n[n.length-1].endProgramDateTime;if(e>=(i||0))return null;t=t||0;for(let s=0;s<n.length;++s){const o=n[s];if(X_(e,t,o))return o}return null}function no(n,e,t=0,r=0){let i=null;if(n){i=e[n.sn-e[0].sn+1]||null;const o=n.endDTS-t;o>0&&o<15e-7&&(t+=15e-7)}else t===0&&e[0].start===0&&(i=e[0]);if(i&&(!n||n.level===i.level)&&Za(t,r,i)===0)return i;const s=Jf.search(e,Za.bind(null,t,r));return s&&(s!==n||!i)?s:i}function Za(n=0,e=0,t){if(t.start<=n&&t.start+t.duration>n)return 0;const r=Math.min(e,t.duration+(t.deltaPTS?t.deltaPTS:0));return t.start+t.duration-r<=n?1:t.start-r>n&&t.start?-1:0}function X_(n,e,t){const r=Math.min(e,t.duration+(t.deltaPTS?t.deltaPTS:0))*1e3;return(t.endProgramDateTime||0)-r>n}function Z_(n,e){return Jf.search(n,t=>t.cc<e?1:t.cc>e?-1:0)}var St={DoNothing:0,SendEndCallback:1,SendAlternateToPenaltyBox:2,RemoveAlternatePermanently:3,InsertDiscontinuity:4,RetryRequest:5},Zt={None:0,MoveAllAlternatesMatchingHost:1,MoveAllAlternatesMatchingHDCP:2,SwitchToSDR:4};class J_{constructor(e){this.hls=void 0,this.playlistError=0,this.penalizedRenditions={},this.log=void 0,this.warn=void 0,this.error=void 0,this.hls=e,this.log=M.log.bind(M,"[info]:"),this.warn=M.warn.bind(M,"[warning]:"),this.error=M.error.bind(M,"[error]:"),this.registerListeners()}registerListeners(){const e=this.hls;e.on(w.ERROR,this.onError,this),e.on(w.MANIFEST_LOADING,this.onManifestLoading,this),e.on(w.LEVEL_UPDATED,this.onLevelUpdated,this)}unregisterListeners(){const e=this.hls;e&&(e.off(w.ERROR,this.onError,this),e.off(w.ERROR,this.onErrorOut,this),e.off(w.MANIFEST_LOADING,this.onManifestLoading,this),e.off(w.LEVEL_UPDATED,this.onLevelUpdated,this))}destroy(){this.unregisterListeners(),this.hls=null,this.penalizedRenditions={}}startLoad(e){}stopLoad(){this.playlistError=0}getVariantLevelIndex(e){return(e==null?void 0:e.type)===De.MAIN?e.level:this.hls.loadLevel}onManifestLoading(){this.playlistError=0,this.penalizedRenditions={}}onLevelUpdated(){this.playlistError=0}onError(e,t){var r,i;if(t.fatal)return;const s=this.hls,o=t.context;switch(t.details){case G.FRAG_LOAD_ERROR:case G.FRAG_LOAD_TIMEOUT:case G.KEY_LOAD_ERROR:case G.KEY_LOAD_TIMEOUT:t.errorAction=this.getFragRetryOrSwitchAction(t);return;case G.FRAG_PARSING_ERROR:if((r=t.frag)!=null&&r.gap){t.errorAction={action:St.DoNothing,flags:Zt.None};return}case G.FRAG_GAP:case G.FRAG_DECRYPT_ERROR:{t.errorAction=this.getFragRetryOrSwitchAction(t),t.errorAction.action=St.SendAlternateToPenaltyBox;return}case G.LEVEL_EMPTY_ERROR:case G.LEVEL_PARSING_ERROR:{var a,l;const c=t.parent===De.MAIN?t.level:s.loadLevel;t.details===G.LEVEL_EMPTY_ERROR&&((a=t.context)!=null&&(l=a.levelDetails)!=null&&l.live)?t.errorAction=this.getPlaylistRetryOrSwitchAction(t,c):(t.levelRetry=!1,t.errorAction=this.getLevelSwitchAction(t,c))}return;case G.LEVEL_LOAD_ERROR:case G.LEVEL_LOAD_TIMEOUT:typeof(o==null?void 0:o.level)=="number"&&(t.errorAction=this.getPlaylistRetryOrSwitchAction(t,o.level));return;case G.AUDIO_TRACK_LOAD_ERROR:case G.AUDIO_TRACK_LOAD_TIMEOUT:case G.SUBTITLE_LOAD_ERROR:case G.SUBTITLE_TRACK_LOAD_TIMEOUT:if(o){const c=s.levels[s.loadLevel];if(c&&(o.type===ze.AUDIO_TRACK&&c.hasAudioGroup(o.groupId)||o.type===ze.SUBTITLE_TRACK&&c.hasSubtitleGroup(o.groupId))){t.errorAction=this.getPlaylistRetryOrSwitchAction(t,s.loadLevel),t.errorAction.action=St.SendAlternateToPenaltyBox,t.errorAction.flags=Zt.MoveAllAlternatesMatchingHost;return}}return;case G.KEY_SYSTEM_STATUS_OUTPUT_RESTRICTED:{const c=s.levels[s.loadLevel],d=c==null?void 0:c.attrs["HDCP-LEVEL"];d?t.errorAction={action:St.SendAlternateToPenaltyBox,flags:Zt.MoveAllAlternatesMatchingHDCP,hdcpLevel:d}:this.keySystemError(t)}return;case G.BUFFER_ADD_CODEC_ERROR:case G.REMUX_ALLOC_ERROR:case G.BUFFER_APPEND_ERROR:t.errorAction=this.getLevelSwitchAction(t,(i=t.level)!=null?i:s.loadLevel);return;case G.INTERNAL_EXCEPTION:case G.BUFFER_APPENDING_ERROR:case G.BUFFER_FULL_ERROR:case G.LEVEL_SWITCH_ERROR:case G.BUFFER_STALLED_ERROR:case G.BUFFER_SEEK_OVER_HOLE:case G.BUFFER_NUDGE_ON_STALL:t.errorAction={action:St.DoNothing,flags:Zt.None};return}t.type===Be.KEY_SYSTEM_ERROR&&this.keySystemError(t)}keySystemError(e){const t=this.getVariantLevelIndex(e.frag);e.levelRetry=!1,e.errorAction=this.getLevelSwitchAction(e,t)}getPlaylistRetryOrSwitchAction(e,t){const r=this.hls,i=fu(r.config.playlistLoadPolicy,e),s=this.playlistError++;if(to(i,s,eo(e),e.response))return{action:St.RetryRequest,flags:Zt.None,retryConfig:i,retryCount:s};const a=this.getLevelSwitchAction(e,t);return i&&(a.retryConfig=i,a.retryCount=s),a}getFragRetryOrSwitchAction(e){const t=this.hls,r=this.getVariantLevelIndex(e.frag),i=t.levels[r],{fragLoadPolicy:s,keyLoadPolicy:o}=t.config,a=fu(e.details.startsWith("key")?o:s,e),l=t.levels.reduce((d,u)=>d+u.fragmentError,0);if(i&&(e.details!==G.FRAG_GAP&&i.fragmentError++,to(a,l,eo(e),e.response)))return{action:St.RetryRequest,flags:Zt.None,retryConfig:a,retryCount:l};const c=this.getLevelSwitchAction(e,r);return a&&(c.retryConfig=a,c.retryCount=l),c}getLevelSwitchAction(e,t){const r=this.hls;t==null&&(t=r.loadLevel);const i=this.hls.levels[t];if(i){var s,o;const c=e.details;i.loadError++,c===G.BUFFER_APPEND_ERROR&&i.fragmentError++;let d=-1;const{levels:u,loadLevel:h,minAutoLevel:y,maxAutoLevel:m}=r;r.autoLevelEnabled||(r.loadLevel=-1);const A=(s=e.frag)==null?void 0:s.type,S=(A===De.AUDIO&&c===G.FRAG_PARSING_ERROR||e.sourceBufferName==="audio"&&(c===G.BUFFER_ADD_CODEC_ERROR||c===G.BUFFER_APPEND_ERROR))&&u.some(({audioCodec:K})=>i.audioCodec!==K),R=e.sourceBufferName==="video"&&(c===G.BUFFER_ADD_CODEC_ERROR||c===G.BUFFER_APPEND_ERROR)&&u.some(({codecSet:K,audioCodec:N})=>i.codecSet!==K&&i.audioCodec===N),{type:D,groupId:B}=(o=e.context)!=null?o:{};for(let K=u.length;K--;){const N=(K+h)%u.length;if(N!==h&&N>=y&&N<=m&&u[N].loadError===0){var a,l;const z=u[N];if(c===G.FRAG_GAP&&e.frag){const Z=u[N].details;if(Z){const O=no(e.frag,Z.fragments,e.frag.start);if(O!=null&&O.gap)continue}}else{if(D===ze.AUDIO_TRACK&&z.hasAudioGroup(B)||D===ze.SUBTITLE_TRACK&&z.hasSubtitleGroup(B))continue;if(A===De.AUDIO&&(a=i.audioGroups)!=null&&a.some(Z=>z.hasAudioGroup(Z))||A===De.SUBTITLE&&(l=i.subtitleGroups)!=null&&l.some(Z=>z.hasSubtitleGroup(Z))||S&&i.audioCodec===z.audioCodec||!S&&i.audioCodec!==z.audioCodec||R&&i.codecSet===z.codecSet)continue}d=N;break}}if(d>-1&&r.loadLevel!==d)return e.levelRetry=!0,this.playlistError=0,{action:St.SendAlternateToPenaltyBox,flags:Zt.None,nextAutoLevel:d}}return{action:St.SendAlternateToPenaltyBox,flags:Zt.MoveAllAlternatesMatchingHost}}onErrorOut(e,t){var r;switch((r=t.errorAction)==null?void 0:r.action){case St.DoNothing:break;case St.SendAlternateToPenaltyBox:this.sendAlternateToPenaltyBox(t),!t.errorAction.resolved&&t.details!==G.FRAG_GAP?t.fatal=!0:/MediaSource readyState: ended/.test(t.error.message)&&(this.warn(`MediaSource ended after "${t.sourceBufferName}" sourceBuffer append error. Attempting to recover from media error.`),this.hls.recoverMediaError());break}if(t.fatal){this.hls.stopLoad();return}}sendAlternateToPenaltyBox(e){const t=this.hls,r=e.errorAction;if(!r)return;const{flags:i,hdcpLevel:s,nextAutoLevel:o}=r;switch(i){case Zt.None:this.switchLevel(e,o);break;case Zt.MoveAllAlternatesMatchingHDCP:s&&(t.maxHdcpLevel=Qa[Qa.indexOf(s)-1],r.resolved=!0),this.warn(`Restricting playback to HDCP-LEVEL of "${t.maxHdcpLevel}" or lower`);break}r.resolved||this.switchLevel(e,o)}switchLevel(e,t){t!==void 0&&e.errorAction&&(this.warn(`switching to level ${t} after ${e.details}`),this.hls.nextAutoLevel=t,e.errorAction.resolved=!0,this.hls.nextLoadLevel=this.hls.nextAutoLevel)}}class Ul{constructor(e,t){this.hls=void 0,this.timer=-1,this.requestScheduled=-1,this.canLoad=!1,this.log=void 0,this.warn=void 0,this.log=M.log.bind(M,`${t}:`),this.warn=M.warn.bind(M,`${t}:`),this.hls=e}destroy(){this.clearTimer(),this.hls=this.log=this.warn=null}clearTimer(){this.timer!==-1&&(self.clearTimeout(this.timer),this.timer=-1)}startLoad(){this.canLoad=!0,this.requestScheduled=-1,this.loadPlaylist()}stopLoad(){this.canLoad=!1,this.clearTimer()}switchParams(e,t){const r=t==null?void 0:t.renditionReports;if(r){let i=-1;for(let s=0;s<r.length;s++){const o=r[s];let a;try{a=new self.URL(o.URI,t.url).href}catch(l){M.warn(`Could not construct new URL for Rendition Report: ${l}`),a=o.URI||""}if(a===e){i=s;break}else a===e.substring(0,a.length)&&(i=s)}if(i!==-1){const s=r[i],o=parseInt(s["LAST-MSN"])||(t==null?void 0:t.lastPartSn);let a=parseInt(s["LAST-PART"])||(t==null?void 0:t.lastPartIndex);if(this.hls.config.lowLatencyMode){const l=Math.min(t.age-t.partTarget,t.targetduration);a>=0&&l>t.partTarget&&(a+=1)}return new du(o,a>=0?a:void 0,Pi.No)}}}loadPlaylist(e){this.requestScheduled===-1&&(this.requestScheduled=self.performance.now())}shouldLoadPlaylist(e){return this.canLoad&&!!e&&!!e.url&&(!e.details||e.details.live)}shouldReloadPlaylist(e){return this.timer===-1&&this.requestScheduled===-1&&this.shouldLoadPlaylist(e)}playlistLoaded(e,t,r){const{details:i,stats:s}=t,o=self.performance.now(),a=s.loading.first?Math.max(0,o-s.loading.first):0;if(i.advancedDateTime=Date.now()-a,i.live||r!=null&&r.live){if(i.reloaded(r),r&&this.log(`live playlist ${e} ${i.advanced?"REFRESHED "+i.lastPartSn+"-"+i.lastPartIndex:i.updated?"UPDATED":"MISSED"}`),r&&i.fragments.length>0&&K_(r,i),!this.canLoad||!i.live)return;let l,c,d;if(i.canBlockReload&&i.endSN&&i.advanced){const b=this.hls.config.lowLatencyMode,S=i.lastPartSn,C=i.endSN,R=i.lastPartIndex,D=R!==-1,B=S===C,K=b?0:R;D?(c=B?C+1:S,d=B?K:R+1):c=C+1;const N=i.age,z=N+i.ageHeader;let Z=Math.min(z-i.partTarget,i.targetduration*1.5);if(Z>0){if(r&&Z>r.tuneInGoal)this.warn(`CDN Tune-in goal increased from: ${r.tuneInGoal} to: ${Z} with playlist age: ${i.age}`),Z=0;else{const O=Math.floor(Z/i.targetduration);if(c+=O,d!==void 0){const ee=Math.round(Z%i.targetduration/i.partTarget);d+=ee}this.log(`CDN Tune-in age: ${i.ageHeader}s last advanced ${N.toFixed(2)}s goal: ${Z} skip sn ${O} to part ${d}`)}i.tuneInGoal=Z}if(l=this.getDeliveryDirectives(i,t.deliveryDirectives,c,d),b||!B){this.loadPlaylist(l);return}}else(i.canBlockReload||i.canSkipUntil)&&(l=this.getDeliveryDirectives(i,t.deliveryDirectives,c,d));const u=this.hls.mainForwardBufferInfo,h=u?u.end-u.len:0,y=(i.edge-h)*1e3,m=V_(i,y);i.updated&&o>this.requestScheduled+m&&(this.requestScheduled=s.loading.start),c!==void 0&&i.canBlockReload?this.requestScheduled=s.loading.first+m-(i.partTarget*1e3||1e3):this.requestScheduled===-1||this.requestScheduled+m<o?this.requestScheduled=o:this.requestScheduled-o<=0&&(this.requestScheduled+=m);let A=this.requestScheduled-o;A=Math.max(0,A),this.log(`reload live playlist ${e} in ${Math.round(A)} ms`),this.timer=self.setTimeout(()=>this.loadPlaylist(l),A)}else this.clearTimer()}getDeliveryDirectives(e,t,r,i){let s=G_(e,r);return t!=null&&t.skip&&e.deltaUpdateFailed&&(r=t.msn,i=t.part,s=Pi.No),new du(r,i,s)}checkRetry(e){const t=e.details,r=eo(e),i=e.errorAction,{action:s,retryCount:o=0,retryConfig:a}=i||{},l=!!i&&!!a&&(s===St.RetryRequest||!i.resolved&&s===St.SendAlternateToPenaltyBox);if(l){var c;if(this.requestScheduled=-1,o>=a.maxNumRetry)return!1;if(r&&(c=e.context)!=null&&c.deliveryDirectives)this.warn(`Retrying playlist loading ${o+1}/${a.maxNumRetry} after "${t}" without delivery-directives`),this.loadPlaylist();else{const d=Nl(a,o);this.timer=self.setTimeout(()=>this.loadPlaylist(),d),this.warn(`Retrying playlist loading ${o+1}/${a.maxNumRetry} after "${t}" in ${d}ms`)}e.levelRetry=!0,i.resolved=!0}return l}}class yr{constructor(e,t=0,r=0){this.halfLife=void 0,this.alpha_=void 0,this.estimate_=void 0,this.totalWeight_=void 0,this.halfLife=e,this.alpha_=e?Math.exp(Math.log(.5)/e):0,this.estimate_=t,this.totalWeight_=r}sample(e,t){const r=Math.pow(this.alpha_,e);this.estimate_=t*(1-r)+r*this.estimate_,this.totalWeight_+=e}getTotalWeight(){return this.totalWeight_}getEstimate(){if(this.alpha_){const e=1-Math.pow(this.alpha_,this.totalWeight_);if(e)return this.estimate_/e}return this.estimate_}}class e3{constructor(e,t,r,i=100){this.defaultEstimate_=void 0,this.minWeight_=void 0,this.minDelayMs_=void 0,this.slow_=void 0,this.fast_=void 0,this.defaultTTFB_=void 0,this.ttfb_=void 0,this.defaultEstimate_=r,this.minWeight_=.001,this.minDelayMs_=50,this.slow_=new yr(e),this.fast_=new yr(t),this.defaultTTFB_=i,this.ttfb_=new yr(e)}update(e,t){const{slow_:r,fast_:i,ttfb_:s}=this;r.halfLife!==e&&(this.slow_=new yr(e,r.getEstimate(),r.getTotalWeight())),i.halfLife!==t&&(this.fast_=new yr(t,i.getEstimate(),i.getTotalWeight())),s.halfLife!==e&&(this.ttfb_=new yr(e,s.getEstimate(),s.getTotalWeight()))}sample(e,t){e=Math.max(e,this.minDelayMs_);const r=8*t,i=e/1e3,s=r/i;this.fast_.sample(i,s),this.slow_.sample(i,s)}sampleTTFB(e){const t=e/1e3,r=Math.sqrt(2)*Math.exp(-Math.pow(t,2)/2);this.ttfb_.sample(r,Math.max(e,5))}canEstimate(){return this.fast_.getTotalWeight()>=this.minWeight_}getEstimate(){return this.canEstimate()?Math.min(this.fast_.getEstimate(),this.slow_.getEstimate()):this.defaultEstimate_}getEstimateTTFB(){return this.ttfb_.getTotalWeight()>=this.minWeight_?this.ttfb_.getEstimate():this.defaultTTFB_}destroy(){}}const ep={supported:!0,configurations:[],decodingInfoResults:[{supported:!0,powerEfficient:!0,smooth:!0}]},mu={};function t3(n,e,t,r,i,s){const o=n.audioCodec?n.audioGroups:null,a=s==null?void 0:s.audioCodec,l=s==null?void 0:s.channels,c=l?parseInt(l):a?1/0:2;let d=null;if(o!=null&&o.length)try{o.length===1&&o[0]?d=e.groups[o[0]].channels:d=o.reduce((u,h)=>{if(h){const y=e.groups[h];if(!y)throw new Error(`Audio track group ${h} not found`);Object.keys(y.channels).forEach(m=>{u[m]=(u[m]||0)+y.channels[m]})}return u},{2:0})}catch{return!0}return n.videoCodec!==void 0&&(n.width>1920&&n.height>1088||n.height>1920&&n.width>1088||n.frameRate>Math.max(r,30)||n.videoRange!=="SDR"&&n.videoRange!==t||n.bitrate>Math.max(i,8e6))||!!d&&xe(c)&&Object.keys(d).some(u=>parseInt(u)>c)}function n3(n,e,t){const r=n.videoCodec,i=n.audioCodec;if(!r||!i||!t)return Promise.resolve(ep);const s={width:n.width,height:n.height,bitrate:Math.ceil(Math.max(n.bitrate*.9,n.averageBitrate)),framerate:n.frameRate||30},o=n.videoRange;o!=="SDR"&&(s.transferFunction=o.toLowerCase());const a=r.split(",").map(l=>({type:"media-source",video:_t(_t({},s),{},{contentType:Vi(l,"video")})}));return i&&n.audioGroups&&n.audioGroups.forEach(l=>{var c;l&&((c=e.groups[l])==null||c.tracks.forEach(d=>{if(d.groupId===l){const u=d.channels||"",h=parseFloat(u);xe(h)&&h>2&&a.push.apply(a,i.split(",").map(y=>({type:"media-source",audio:{contentType:Vi(y,"audio"),channels:""+h}})))}}))}),Promise.all(a.map(l=>{const c=r3(l);return mu[c]||(mu[c]=t.decodingInfo(l))})).then(l=>({supported:!l.some(c=>!c.supported),configurations:a,decodingInfoResults:l})).catch(l=>({supported:!1,configurations:a,decodingInfoResults:[],error:l}))}function r3(n){const{audio:e,video:t}=n,r=t||e;if(r){const i=r.contentType.split('"')[1];if(t)return`r${t.height}x${t.width}f${Math.ceil(t.framerate)}${t.transferFunction||"sd"}_${i}_${Math.ceil(t.bitrate/1e5)}`;if(e)return`c${e.channels}${e.spatialRendering?"s":"n"}_${i}`}return""}function i3(){if(typeof matchMedia=="function"){const n=matchMedia("(dynamic-range: high)"),e=matchMedia("bad query");if(n.media!==e.media)return n.matches===!0}return!1}function s3(n,e){let t=!1,r=[];return n&&(t=n!=="SDR",r=[n]),e&&(r=e.allowedVideoRanges||Js.slice(0),t=e.preferHDR!==void 0?e.preferHDR:i3(),t?r=r.filter(i=>i!=="SDR"):r=["SDR"]),{preferHDR:t,allowedVideoRanges:r}}function o3(n,e,t,r,i){const s=Object.keys(n),o=r==null?void 0:r.channels,a=r==null?void 0:r.audioCodec,l=o&&parseInt(o)===2;let c=!0,d=!1,u=1/0,h=1/0,y=1/0,m=0,A=[];const{preferHDR:b,allowedVideoRanges:S}=s3(e,i);for(let B=s.length;B--;){const K=n[s[B]];c=K.channels[2]>0,u=Math.min(u,K.minHeight),h=Math.min(h,K.minFramerate),y=Math.min(y,K.minBitrate);const N=S.filter(z=>K.videoRanges[z]>0);N.length>0&&(d=!0,A=N)}u=xe(u)?u:0,h=xe(h)?h:0;const C=Math.max(1080,u),R=Math.max(30,h);return y=xe(y)?y:t,t=Math.max(y,t),d||(e=void 0,A=[]),{codecSet:s.reduce((B,K)=>{const N=n[K];if(K===B)return B;if(N.minBitrate>t)return Tn(K,`min bitrate of ${N.minBitrate} > current estimate of ${t}`),B;if(!N.hasDefaultAudio)return Tn(K,"no renditions with default or auto-select sound found"),B;if(a&&K.indexOf(a.substring(0,4))%5!==0)return Tn(K,`audio codec preference "${a}" not found`),B;if(o&&!l){if(!N.channels[o])return Tn(K,`no renditions with ${o} channel sound found (channels options: ${Object.keys(N.channels)})`),B}else if((!a||l)&&c&&N.channels[2]===0)return Tn(K,"no renditions with stereo sound found"),B;return N.minHeight>C?(Tn(K,`min resolution of ${N.minHeight} > maximum of ${C}`),B):N.minFramerate>R?(Tn(K,`min framerate of ${N.minFramerate} > maximum of ${R}`),B):A.some(z=>N.videoRanges[z]>0)?N.maxScore<m?(Tn(K,`max score of ${N.maxScore} < selected max of ${m}`),B):B&&(Xs(K)>=Xs(B)||N.fragmentError>n[B].fragmentError)?B:(m=N.maxScore,K):(Tn(K,`no variants with VIDEO-RANGE of ${JSON.stringify(A)} found`),B)},void 0),videoRanges:A,preferHDR:b,minFramerate:h,minBitrate:y}}function Tn(n,e){M.log(`[abr] start candidates with "${n}" ignored because ${e}`)}function a3(n){return n.reduce((e,t)=>{let r=e.groups[t.groupId];r||(r=e.groups[t.groupId]={tracks:[],channels:{2:0},hasDefault:!1,hasAutoSelect:!1}),r.tracks.push(t);const i=t.channels||"2";return r.channels[i]=(r.channels[i]||0)+1,r.hasDefault=r.hasDefault||t.default,r.hasAutoSelect=r.hasAutoSelect||t.autoselect,r.hasDefault&&(e.hasDefaultAudio=!0),r.hasAutoSelect&&(e.hasAutoSelectAudio=!0),e},{hasDefaultAudio:!1,hasAutoSelectAudio:!1,groups:{}})}function l3(n,e,t,r){return n.slice(t,r+1).reduce((i,s)=>{if(!s.codecSet)return i;const o=s.audioGroups;let a=i[s.codecSet];a||(i[s.codecSet]=a={minBitrate:1/0,minHeight:1/0,minFramerate:1/0,maxScore:0,videoRanges:{SDR:0},channels:{2:0},hasDefaultAudio:!o,fragmentError:0}),a.minBitrate=Math.min(a.minBitrate,s.bitrate);const l=Math.min(s.height,s.width);return a.minHeight=Math.min(a.minHeight,l),a.minFramerate=Math.min(a.minFramerate,s.frameRate),a.maxScore=Math.max(a.maxScore,s.score),a.fragmentError+=s.fragmentError,a.videoRanges[s.videoRange]=(a.videoRanges[s.videoRange]||0)+1,o&&o.forEach(c=>{if(!c)return;const d=e.groups[c];a.hasDefaultAudio=a.hasDefaultAudio||e.hasDefaultAudio?d.hasDefault:d.hasAutoSelect||!e.hasDefaultAudio&&!e.hasAutoSelectAudio,Object.keys(d.channels).forEach(u=>{a.channels[u]=(a.channels[u]||0)+d.channels[u]})}),i},{})}function An(n,e,t){if("attrs"in n){const r=e.indexOf(n);if(r!==-1)return r}for(let r=0;r<e.length;r++){const i=e[r];if(Rr(n,i,t))return r}return-1}function Rr(n,e,t){const{groupId:r,name:i,lang:s,assocLang:o,characteristics:a,default:l}=n,c=n.forced;return(r===void 0||e.groupId===r)&&(i===void 0||e.name===i)&&(s===void 0||e.lang===s)&&(s===void 0||e.assocLang===o)&&(l===void 0||e.default===l)&&(c===void 0||e.forced===c)&&(a===void 0||c3(a,e.characteristics))&&(t===void 0||t(n,e))}function c3(n,e=""){const t=n.split(","),r=e.split(",");return t.length===r.length&&!t.some(i=>r.indexOf(i)===-1)}function Ar(n,e){const{audioCodec:t,channels:r}=n;return(t===void 0||(e.audioCodec||"").substring(0,4)===t.substring(0,4))&&(r===void 0||r===(e.channels||"2"))}function d3(n,e,t,r,i){const s=e[r],a=e.reduce((h,y,m)=>{const A=y.uri;return(h[A]||(h[A]=[])).push(m),h},{})[s.uri];a.length>1&&(r=Math.max.apply(Math,a));const l=s.videoRange,c=s.frameRate,d=s.codecSet.substring(0,4),u=gu(e,r,h=>{if(h.videoRange!==l||h.frameRate!==c||h.codecSet.substring(0,4)!==d)return!1;const y=h.audioGroups,m=t.filter(A=>!y||y.indexOf(A.groupId)!==-1);return An(n,m,i)>-1});return u>-1?u:gu(e,r,h=>{const y=h.audioGroups,m=t.filter(A=>!y||y.indexOf(A.groupId)!==-1);return An(n,m,i)>-1})}function gu(n,e,t){for(let r=e;r;r--)if(t(n[r]))return r;for(let r=e+1;r<n.length;r++)if(t(n[r]))return r;return-1}class u3{constructor(e){this.hls=void 0,this.lastLevelLoadSec=0,this.lastLoadedFragLevel=-1,this.firstSelection=-1,this._nextAutoLevel=-1,this.nextAutoLevelKey="",this.audioTracksByGroup=null,this.codecTiers=null,this.timer=-1,this.fragCurrent=null,this.partCurrent=null,this.bitrateTestDelay=0,this.bwEstimator=void 0,this._abandonRulesCheck=()=>{const{fragCurrent:t,partCurrent:r,hls:i}=this,{autoLevelEnabled:s,media:o}=i;if(!t||!o)return;const a=performance.now(),l=r?r.stats:t.stats,c=r?r.duration:t.duration,d=a-l.loading.start,u=i.minAutoLevel;if(l.aborted||l.loaded&&l.loaded===l.total||t.level<=u){this.clearTimer(),this._nextAutoLevel=-1;return}if(!s||o.paused||!o.playbackRate||!o.readyState)return;const h=i.mainForwardBufferInfo;if(h===null)return;const y=this.bwEstimator.getEstimateTTFB(),m=Math.abs(o.playbackRate);if(d<=Math.max(y,1e3*(c/(m*2))))return;const A=h.len/m,b=l.loading.first?l.loading.first-l.loading.start:-1,S=l.loaded&&b>-1,C=this.getBwEstimate(),R=i.levels,D=R[t.level],B=l.total||Math.max(l.loaded,Math.round(c*D.averageBitrate/8));let K=S?d-b:d;K<1&&S&&(K=Math.min(d,l.loaded*8/C));const N=S?l.loaded*1e3/K:0,z=N?(B-l.loaded)/N:B*8/C+y/1e3;if(z<=A)return;const Z=N?N*8:C;let O=Number.POSITIVE_INFINITY,ee;for(ee=t.level-1;ee>u;ee--){const ce=R[ee].maxBitrate;if(O=this.getTimeToLoadFrag(y/1e3,Z,c*ce,!R[ee].details),O<A)break}if(O>=z||O>c*10)return;i.nextLoadLevel=i.nextAutoLevel=ee,S?this.bwEstimator.sample(d-Math.min(y,b),l.loaded):this.bwEstimator.sampleTTFB(d);const _e=R[ee].maxBitrate;this.getBwEstimate()*this.hls.config.abrBandWidthUpFactor>_e&&this.resetEstimator(_e),this.clearTimer(),M.warn(`[abr] Fragment ${t.sn}${r?" part "+r.index:""} of level ${t.level} is loading too slowly;
      Time to underbuffer: ${A.toFixed(3)} s
      Estimated load time for current fragment: ${z.toFixed(3)} s
      Estimated load time for down switch fragment: ${O.toFixed(3)} s
      TTFB estimate: ${b|0} ms
      Current BW estimate: ${xe(C)?C|0:"Unknown"} bps
      New BW estimate: ${this.getBwEstimate()|0} bps
      Switching to level ${ee} @ ${_e|0} bps`),i.trigger(w.FRAG_LOAD_EMERGENCY_ABORTED,{frag:t,part:r,stats:l})},this.hls=e,this.bwEstimator=this.initEstimator(),this.registerListeners()}resetEstimator(e){e&&(M.log(`setting initial bwe to ${e}`),this.hls.config.abrEwmaDefaultEstimate=e),this.firstSelection=-1,this.bwEstimator=this.initEstimator()}initEstimator(){const e=this.hls.config;return new e3(e.abrEwmaSlowVoD,e.abrEwmaFastVoD,e.abrEwmaDefaultEstimate)}registerListeners(){const{hls:e}=this;e.on(w.MANIFEST_LOADING,this.onManifestLoading,this),e.on(w.FRAG_LOADING,this.onFragLoading,this),e.on(w.FRAG_LOADED,this.onFragLoaded,this),e.on(w.FRAG_BUFFERED,this.onFragBuffered,this),e.on(w.LEVEL_SWITCHING,this.onLevelSwitching,this),e.on(w.LEVEL_LOADED,this.onLevelLoaded,this),e.on(w.LEVELS_UPDATED,this.onLevelsUpdated,this),e.on(w.MAX_AUTO_LEVEL_UPDATED,this.onMaxAutoLevelUpdated,this),e.on(w.ERROR,this.onError,this)}unregisterListeners(){const{hls:e}=this;e&&(e.off(w.MANIFEST_LOADING,this.onManifestLoading,this),e.off(w.FRAG_LOADING,this.onFragLoading,this),e.off(w.FRAG_LOADED,this.onFragLoaded,this),e.off(w.FRAG_BUFFERED,this.onFragBuffered,this),e.off(w.LEVEL_SWITCHING,this.onLevelSwitching,this),e.off(w.LEVEL_LOADED,this.onLevelLoaded,this),e.off(w.LEVELS_UPDATED,this.onLevelsUpdated,this),e.off(w.MAX_AUTO_LEVEL_UPDATED,this.onMaxAutoLevelUpdated,this),e.off(w.ERROR,this.onError,this))}destroy(){this.unregisterListeners(),this.clearTimer(),this.hls=this._abandonRulesCheck=null,this.fragCurrent=this.partCurrent=null}onManifestLoading(e,t){this.lastLoadedFragLevel=-1,this.firstSelection=-1,this.lastLevelLoadSec=0,this.fragCurrent=this.partCurrent=null,this.onLevelsUpdated(),this.clearTimer()}onLevelsUpdated(){this.lastLoadedFragLevel>-1&&this.fragCurrent&&(this.lastLoadedFragLevel=this.fragCurrent.level),this._nextAutoLevel=-1,this.onMaxAutoLevelUpdated(),this.codecTiers=null,this.audioTracksByGroup=null}onMaxAutoLevelUpdated(){this.firstSelection=-1,this.nextAutoLevelKey=""}onFragLoading(e,t){const r=t.frag;if(!this.ignoreFragment(r)){if(!r.bitrateTest){var i;this.fragCurrent=r,this.partCurrent=(i=t.part)!=null?i:null}this.clearTimer(),this.timer=self.setInterval(this._abandonRulesCheck,100)}}onLevelSwitching(e,t){this.clearTimer()}onError(e,t){if(!t.fatal)switch(t.details){case G.BUFFER_ADD_CODEC_ERROR:case G.BUFFER_APPEND_ERROR:this.lastLoadedFragLevel=-1,this.firstSelection=-1;break;case G.FRAG_LOAD_TIMEOUT:{const r=t.frag,{fragCurrent:i,partCurrent:s}=this;if(r&&i&&r.sn===i.sn&&r.level===i.level){const o=performance.now(),a=s?s.stats:r.stats,l=o-a.loading.start,c=a.loading.first?a.loading.first-a.loading.start:-1;if(a.loaded&&c>-1){const u=this.bwEstimator.getEstimateTTFB();this.bwEstimator.sample(l-Math.min(u,c),a.loaded)}else this.bwEstimator.sampleTTFB(l)}break}}}getTimeToLoadFrag(e,t,r,i){const s=e+r/t,o=i?this.lastLevelLoadSec:0;return s+o}onLevelLoaded(e,t){const r=this.hls.config,{loading:i}=t.stats,s=i.end-i.start;xe(s)&&(this.lastLevelLoadSec=s/1e3),t.details.live?this.bwEstimator.update(r.abrEwmaSlowLive,r.abrEwmaFastLive):this.bwEstimator.update(r.abrEwmaSlowVoD,r.abrEwmaFastVoD)}onFragLoaded(e,{frag:t,part:r}){const i=r?r.stats:t.stats;if(t.type===De.MAIN&&this.bwEstimator.sampleTTFB(i.loading.first-i.loading.start),!this.ignoreFragment(t)){if(this.clearTimer(),t.level===this._nextAutoLevel&&(this._nextAutoLevel=-1),this.firstSelection=-1,this.hls.config.abrMaxWithRealBitrate){const s=r?r.duration:t.duration,o=this.hls.levels[t.level],a=(o.loaded?o.loaded.bytes:0)+i.loaded,l=(o.loaded?o.loaded.duration:0)+s;o.loaded={bytes:a,duration:l},o.realBitrate=Math.round(8*a/l)}if(t.bitrateTest){const s={stats:i,frag:t,part:r,id:t.type};this.onFragBuffered(w.FRAG_BUFFERED,s),t.bitrateTest=!1}else this.lastLoadedFragLevel=t.level}}onFragBuffered(e,t){const{frag:r,part:i}=t,s=i!=null&&i.stats.loaded?i.stats:r.stats;if(s.aborted||this.ignoreFragment(r))return;const o=s.parsing.end-s.loading.start-Math.min(s.loading.first-s.loading.start,this.bwEstimator.getEstimateTTFB());this.bwEstimator.sample(o,s.loaded),s.bwEstimate=this.getBwEstimate(),r.bitrateTest?this.bitrateTestDelay=o/1e3:this.bitrateTestDelay=0}ignoreFragment(e){return e.type!==De.MAIN||e.sn==="initSegment"}clearTimer(){this.timer>-1&&(self.clearInterval(this.timer),this.timer=-1)}get firstAutoLevel(){const{maxAutoLevel:e,minAutoLevel:t}=this.hls,r=this.getBwEstimate(),i=this.hls.config.maxStarvationDelay,s=this.findBestLevel(r,t,e,0,i,1,1);if(s>-1)return s;const o=this.hls.firstLevel,a=Math.min(Math.max(o,t),e);return M.warn(`[abr] Could not find best starting auto level. Defaulting to first in playlist ${o} clamped to ${a}`),a}get forcedAutoLevel(){return this.nextAutoLevelKey?-1:this._nextAutoLevel}get nextAutoLevel(){const e=this.forcedAutoLevel,r=this.bwEstimator.canEstimate(),i=this.lastLoadedFragLevel>-1;if(e!==-1&&(!r||!i||this.nextAutoLevelKey===this.getAutoLevelKey()))return e;const s=r&&i?this.getNextABRAutoLevel():this.firstAutoLevel;if(e!==-1){const o=this.hls.levels;if(o.length>Math.max(e,s)&&o[e].loadError<=o[s].loadError)return e}return this._nextAutoLevel=s,this.nextAutoLevelKey=this.getAutoLevelKey(),s}getAutoLevelKey(){return`${this.getBwEstimate()}_${this.getStarvationDelay().toFixed(2)}`}getNextABRAutoLevel(){const{fragCurrent:e,partCurrent:t,hls:r}=this,{maxAutoLevel:i,config:s,minAutoLevel:o}=r,a=t?t.duration:e?e.duration:0,l=this.getBwEstimate(),c=this.getStarvationDelay();let d=s.abrBandWidthFactor,u=s.abrBandWidthUpFactor;if(c){const b=this.findBestLevel(l,o,i,c,0,d,u);if(b>=0)return b}let h=a?Math.min(a,s.maxStarvationDelay):s.maxStarvationDelay;if(!c){const b=this.bitrateTestDelay;b&&(h=(a?Math.min(a,s.maxLoadingDelay):s.maxLoadingDelay)-b,M.info(`[abr] bitrate test took ${Math.round(1e3*b)}ms, set first fragment max fetchDuration to ${Math.round(1e3*h)} ms`),d=u=1)}const y=this.findBestLevel(l,o,i,c,h,d,u);if(M.info(`[abr] ${c?"rebuffering expected":"buffer is empty"}, optimal quality level ${y}`),y>-1)return y;const m=r.levels[o],A=r.levels[r.loadLevel];return(m==null?void 0:m.bitrate)<(A==null?void 0:A.bitrate)?o:r.loadLevel}getStarvationDelay(){const e=this.hls,t=e.media;if(!t)return 1/0;const r=t&&t.playbackRate!==0?Math.abs(t.playbackRate):1,i=e.mainForwardBufferInfo;return(i?i.len:0)/r}getBwEstimate(){return this.bwEstimator.canEstimate()?this.bwEstimator.getEstimate():this.hls.config.abrEwmaDefaultEstimate}findBestLevel(e,t,r,i,s,o,a){var l;const c=i+s,d=this.lastLoadedFragLevel,u=d===-1?this.hls.firstLevel:d,{fragCurrent:h,partCurrent:y}=this,{levels:m,allAudioTracks:A,loadLevel:b,config:S}=this.hls;if(m.length===1)return 0;const C=m[u],R=!!(C!=null&&(l=C.details)!=null&&l.live),D=b===-1||d===-1;let B,K="SDR",N=(C==null?void 0:C.frameRate)||0;const{audioPreference:z,videoPreference:Z}=S,O=this.audioTracksByGroup||(this.audioTracksByGroup=a3(A));if(D){if(this.firstSelection!==-1)return this.firstSelection;const re=this.codecTiers||(this.codecTiers=l3(m,O,t,r)),H=o3(re,K,e,z,Z),{codecSet:Q,videoRanges:ae,minFramerate:j,minBitrate:de,preferHDR:Re}=H;B=Q,K=Re?ae[ae.length-1]:ae[0],N=j,e=Math.max(e,de),M.log(`[abr] picked start tier ${JSON.stringify(H)}`)}else B=C==null?void 0:C.codecSet,K=C==null?void 0:C.videoRange;const ee=y?y.duration:h?h.duration:0,_e=this.bwEstimator.getEstimateTTFB()/1e3,ce=[];for(let re=r;re>=t;re--){var Y;const H=m[re],Q=re>u;if(!H)continue;if(S.useMediaCapabilities&&!H.supportedResult&&!H.supportedPromise){const Xe=navigator.mediaCapabilities;typeof(Xe==null?void 0:Xe.decodingInfo)=="function"&&t3(H,O,K,N,e,z)?(H.supportedPromise=n3(H,O,Xe),H.supportedPromise.then(it=>{if(!this.hls)return;H.supportedResult=it;const Fe=this.hls.levels,V=Fe.indexOf(H);it.error?M.warn(`[abr] MediaCapabilities decodingInfo error: "${it.error}" for level ${V} ${JSON.stringify(it)}`):it.supported||(M.warn(`[abr] Unsupported MediaCapabilities decodingInfo result for level ${V} ${JSON.stringify(it)}`),V>-1&&Fe.length>1&&(M.log(`[abr] Removing unsupported level ${V}`),this.hls.removeLevel(V)))})):H.supportedResult=ep}if(B&&H.codecSet!==B||K&&H.videoRange!==K||Q&&N>H.frameRate||!Q&&N>0&&N<H.frameRate||H.supportedResult&&!((Y=H.supportedResult.decodingInfoResults)!=null&&Y[0].smooth)){ce.push(re);continue}const ae=H.details,j=(y?ae==null?void 0:ae.partTarget:ae==null?void 0:ae.averagetargetduration)||ee;let de;Q?de=a*e:de=o*e;const Re=ee&&i>=ee*2&&s===0?m[re].averageBitrate:m[re].maxBitrate,Se=this.getTimeToLoadFrag(_e,de,Re*j,ae===void 0);if(de>=Re&&(re===d||H.loadError===0&&H.fragmentError===0)&&(Se<=_e||!xe(Se)||R&&!this.bitrateTestDelay||Se<c)){const Xe=this.forcedAutoLevel;return re!==b&&(Xe===-1||Xe!==b)&&(ce.length&&M.trace(`[abr] Skipped level(s) ${ce.join(",")} of ${r} max with CODECS and VIDEO-RANGE:"${m[ce[0]].codecs}" ${m[ce[0]].videoRange}; not compatible with "${C.codecs}" ${K}`),M.info(`[abr] switch candidate:${u}->${re} adjustedbw(${Math.round(de)})-bitrate=${Math.round(de-Re)} ttfb:${_e.toFixed(1)} avgDuration:${j.toFixed(1)} maxFetchDuration:${c.toFixed(1)} fetchDuration:${Se.toFixed(1)} firstSelection:${D} codecSet:${B} videoRange:${K} hls.loadLevel:${b}`)),D&&(this.firstSelection=re),re}}return-1}set nextAutoLevel(e){const{maxAutoLevel:t,minAutoLevel:r}=this.hls,i=Math.min(Math.max(e,r),t);this._nextAutoLevel!==i&&(this.nextAutoLevelKey="",this._nextAutoLevel=i)}}class h3{constructor(){this._boundTick=void 0,this._tickTimer=null,this._tickInterval=null,this._tickCallCount=0,this._boundTick=this.tick.bind(this)}destroy(){this.onHandlerDestroying(),this.onHandlerDestroyed()}onHandlerDestroying(){this.clearNextTick(),this.clearInterval()}onHandlerDestroyed(){}hasInterval(){return!!this._tickInterval}hasNextTick(){return!!this._tickTimer}setInterval(e){return this._tickInterval?!1:(this._tickCallCount=0,this._tickInterval=self.setInterval(this._boundTick,e),!0)}clearInterval(){return this._tickInterval?(self.clearInterval(this._tickInterval),this._tickInterval=null,!0):!1}clearNextTick(){return this._tickTimer?(self.clearTimeout(this._tickTimer),this._tickTimer=null,!0):!1}tick(){this._tickCallCount++,this._tickCallCount===1&&(this.doTick(),this._tickCallCount>1&&this.tickImmediate(),this._tickCallCount=0)}tickImmediate(){this.clearNextTick(),this._tickTimer=self.setTimeout(this._boundTick,0)}doTick(){}}var xt={NOT_LOADED:"NOT_LOADED",APPENDING:"APPENDING",PARTIAL:"PARTIAL",OK:"OK"};class f3{constructor(e){this.activePartLists=Object.create(null),this.endListFragments=Object.create(null),this.fragments=Object.create(null),this.timeRanges=Object.create(null),this.bufferPadding=.2,this.hls=void 0,this.hasGaps=!1,this.hls=e,this._registerListeners()}_registerListeners(){const{hls:e}=this;e.on(w.BUFFER_APPENDED,this.onBufferAppended,this),e.on(w.FRAG_BUFFERED,this.onFragBuffered,this),e.on(w.FRAG_LOADED,this.onFragLoaded,this)}_unregisterListeners(){const{hls:e}=this;e.off(w.BUFFER_APPENDED,this.onBufferAppended,this),e.off(w.FRAG_BUFFERED,this.onFragBuffered,this),e.off(w.FRAG_LOADED,this.onFragLoaded,this)}destroy(){this._unregisterListeners(),this.fragments=this.activePartLists=this.endListFragments=this.timeRanges=null}getAppendedFrag(e,t){const r=this.activePartLists[t];if(r)for(let i=r.length;i--;){const s=r[i];if(!s)break;const o=s.end;if(s.start<=e&&o!==null&&e<=o)return s}return this.getBufferedFrag(e,t)}getBufferedFrag(e,t){const{fragments:r}=this,i=Object.keys(r);for(let s=i.length;s--;){const o=r[i[s]];if((o==null?void 0:o.body.type)===t&&o.buffered){const a=o.body;if(a.start<=e&&e<=a.end)return a}}return null}detectEvictedFragments(e,t,r,i){this.timeRanges&&(this.timeRanges[e]=t);const s=(i==null?void 0:i.fragment.sn)||-1;Object.keys(this.fragments).forEach(o=>{const a=this.fragments[o];if(!a||s>=a.body.sn)return;if(!a.buffered&&!a.loaded){a.body.type===r&&this.removeFragment(a.body);return}const l=a.range[e];l&&l.time.some(c=>{const d=!this.isTimeBuffered(c.startPTS,c.endPTS,t);return d&&this.removeFragment(a.body),d})})}detectPartialFragments(e){const t=this.timeRanges,{frag:r,part:i}=e;if(!t||r.sn==="initSegment")return;const s=vr(r),o=this.fragments[s];if(!o||o.buffered&&r.gap)return;const a=!r.relurl;Object.keys(t).forEach(l=>{const c=r.elementaryStreams[l];if(!c)return;const d=t[l],u=a||c.partial===!0;o.range[l]=this.getBufferedTimes(r,i,u,d)}),o.loaded=null,Object.keys(o.range).length?(o.buffered=!0,(o.body.endList=r.endList||o.body.endList)&&(this.endListFragments[o.body.type]=o),vs(o)||this.removeParts(r.sn-1,r.type)):this.removeFragment(o.body)}removeParts(e,t){const r=this.activePartLists[t];r&&(this.activePartLists[t]=r.filter(i=>i.fragment.sn>=e))}fragBuffered(e,t){const r=vr(e);let i=this.fragments[r];!i&&t&&(i=this.fragments[r]={body:e,appendedPTS:null,loaded:null,buffered:!1,range:Object.create(null)},e.gap&&(this.hasGaps=!0)),i&&(i.loaded=null,i.buffered=!0)}getBufferedTimes(e,t,r,i){const s={time:[],partial:r},o=e.start,a=e.end,l=e.minEndPTS||a,c=e.maxStartPTS||o;for(let d=0;d<i.length;d++){const u=i.start(d)-this.bufferPadding,h=i.end(d)+this.bufferPadding;if(c>=u&&l<=h){s.time.push({startPTS:Math.max(o,i.start(d)),endPTS:Math.min(a,i.end(d))});break}else if(o<h&&a>u){const y=Math.max(o,i.start(d)),m=Math.min(a,i.end(d));m>y&&(s.partial=!0,s.time.push({startPTS:y,endPTS:m}))}else if(a<=u)break}return s}getPartialFragment(e){let t=null,r,i,s,o=0;const{bufferPadding:a,fragments:l}=this;return Object.keys(l).forEach(c=>{const d=l[c];d&&vs(d)&&(i=d.body.start-a,s=d.body.end+a,e>=i&&e<=s&&(r=Math.min(e-i,s-e),o<=r&&(t=d.body,o=r)))}),t}isEndListAppended(e){const t=this.endListFragments[e];return t!==void 0&&(t.buffered||vs(t))}getState(e){const t=vr(e),r=this.fragments[t];return r?r.buffered?vs(r)?xt.PARTIAL:xt.OK:xt.APPENDING:xt.NOT_LOADED}isTimeBuffered(e,t,r){let i,s;for(let o=0;o<r.length;o++){if(i=r.start(o)-this.bufferPadding,s=r.end(o)+this.bufferPadding,e>=i&&t<=s)return!0;if(t<=i)return!1}return!1}onFragLoaded(e,t){const{frag:r,part:i}=t;if(r.sn==="initSegment"||r.bitrateTest)return;const s=i?null:t,o=vr(r);this.fragments[o]={body:r,appendedPTS:null,loaded:s,buffered:!1,range:Object.create(null)}}onBufferAppended(e,t){const{frag:r,part:i,timeRanges:s}=t;if(r.sn==="initSegment")return;const o=r.type;if(i){let a=this.activePartLists[o];a||(this.activePartLists[o]=a=[]),a.push(i)}this.timeRanges=s,Object.keys(s).forEach(a=>{const l=s[a];this.detectEvictedFragments(a,l,o,i)})}onFragBuffered(e,t){this.detectPartialFragments(t)}hasFragment(e){const t=vr(e);return!!this.fragments[t]}hasParts(e){var t;return!!((t=this.activePartLists[e])!=null&&t.length)}removeFragmentsInRange(e,t,r,i,s){i&&!this.hasGaps||Object.keys(this.fragments).forEach(o=>{const a=this.fragments[o];if(!a)return;const l=a.body;l.type!==r||i&&!l.gap||l.start<t&&l.end>e&&(a.buffered||s)&&this.removeFragment(l)})}removeFragment(e){const t=vr(e);e.stats.loaded=0,e.clearElementaryStreamInfo();const r=this.activePartLists[e.type];if(r){const i=e.sn;this.activePartLists[e.type]=r.filter(s=>s.fragment.sn!==i)}delete this.fragments[t],e.endList&&delete this.endListFragments[e.type]}removeAllFragments(){this.fragments=Object.create(null),this.endListFragments=Object.create(null),this.activePartLists=Object.create(null),this.hasGaps=!1}}function vs(n){var e,t,r;return n.buffered&&(n.body.gap||((e=n.range.video)==null?void 0:e.partial)||((t=n.range.audio)==null?void 0:t.partial)||((r=n.range.audiovideo)==null?void 0:r.partial))}function vr(n){return`${n.type}_${n.level}_${n.sn}`}const p3={length:0,start:()=>0,end:()=>0};class ot{static isBuffered(e,t){try{if(e){const r=ot.getBuffered(e);for(let i=0;i<r.length;i++)if(t>=r.start(i)&&t<=r.end(i))return!0}}catch{}return!1}static bufferInfo(e,t,r){try{if(e){const i=ot.getBuffered(e),s=[];let o;for(o=0;o<i.length;o++)s.push({start:i.start(o),end:i.end(o)});return this.bufferedInfo(s,t,r)}}catch{}return{len:0,start:t,end:t,nextStart:void 0}}static bufferedInfo(e,t,r){t=Math.max(0,t),e.sort(function(c,d){const u=c.start-d.start;return u||d.end-c.end});let i=[];if(r)for(let c=0;c<e.length;c++){const d=i.length;if(d){const u=i[d-1].end;e[c].start-u<r?e[c].end>u&&(i[d-1].end=e[c].end):i.push(e[c])}else i.push(e[c])}else i=e;let s=0,o,a=t,l=t;for(let c=0;c<i.length;c++){const d=i[c].start,u=i[c].end;if(t+r>=d&&t<u)a=d,l=u,s=l-t;else if(t+r<d){o=d;break}}return{len:s,start:a||0,end:l||0,nextStart:o}}static getBuffered(e){try{return e.buffered}catch(t){return M.log("failed to get media.buffered",t),p3}}}class $l{constructor(e,t,r,i=0,s=-1,o=!1){this.level=void 0,this.sn=void 0,this.part=void 0,this.id=void 0,this.size=void 0,this.partial=void 0,this.transmuxing=bs(),this.buffering={audio:bs(),video:bs(),audiovideo:bs()},this.level=e,this.sn=t,this.id=r,this.size=i,this.part=s,this.partial=o}}function bs(){return{start:0,executeStart:0,executeEnd:0,end:0}}function Os(n,e){for(let r=0,i=n.length;r<i;r++){var t;if(((t=n[r])==null?void 0:t.cc)===e)return n[r]}return null}function m3(n,e,t){return!!(e&&(t.endCC>t.startCC||n&&n.cc<t.startCC))}function g3(n,e){const t=n.fragments,r=e.fragments;if(!r.length||!t.length){M.log("No fragments to align");return}const i=Os(t,r[0].cc);if(!i||i&&!i.startPTS){M.log("No frag in previous level to align on");return}return i}function yu(n,e){if(n){const t=n.start+e;n.start=n.startPTS=t,n.endPTS=t+n.duration}}function tp(n,e){const t=e.fragments;for(let r=0,i=t.length;r<i;r++)yu(t[r],n);e.fragmentHint&&yu(e.fragmentHint,n),e.alignedSliding=!0}function y3(n,e,t){e&&(A3(n,t,e),!t.alignedSliding&&e&&ro(t,e),!t.alignedSliding&&e&&!t.skippedSegments&&Qf(e,t))}function A3(n,e,t){if(m3(n,t,e)){const r=g3(t,e);r&&xe(r.start)&&(M.log(`Adjusting PTS using last level due to CC increase within current level ${e.url}`),tp(r.start,e))}}function ro(n,e){if(!n.hasProgramDateTime||!e.hasProgramDateTime)return;const t=n.fragments,r=e.fragments;if(!t.length||!r.length)return;let i,s;const o=Math.min(e.endCC,n.endCC);e.startCC<o&&n.startCC<o&&(i=Os(r,o),s=Os(t,o)),(!i||!s)&&(i=r[Math.floor(r.length/2)],s=Os(t,i.cc)||t[Math.floor(t.length/2)]);const a=i.programDateTime,l=s.programDateTime;if(!a||!l)return;const c=(l-a)/1e3-(s.start-i.start);tp(c,n)}const Au=Math.pow(2,17);class v3{constructor(e){this.config=void 0,this.loader=null,this.partLoadTimeout=-1,this.config=e}destroy(){this.loader&&(this.loader.destroy(),this.loader=null)}abort(){this.loader&&this.loader.abort()}load(e,t){const r=e.url;if(!r)return Promise.reject(new kn({type:Be.NETWORK_ERROR,details:G.FRAG_LOAD_ERROR,fatal:!1,frag:e,error:new Error(`Fragment does not have a ${r?"part list":"url"}`),networkDetails:null}));this.abort();const i=this.config,s=i.fLoader,o=i.loader;return new Promise((a,l)=>{if(this.loader&&this.loader.destroy(),e.gap)if(e.tagList.some(y=>y[0]==="GAP")){l(bu(e));return}else e.gap=!1;const c=this.loader=e.loader=s?new s(i):new o(i),d=vu(e),u=pu(i.fragLoadPolicy.default),h={loadPolicy:u,timeout:u.maxLoadTimeMs,maxRetry:0,retryDelay:0,maxRetryDelay:0,highWaterMark:e.sn==="initSegment"?1/0:Au};e.stats=c.stats,c.load(d,h,{onSuccess:(y,m,A,b)=>{this.resetLoader(e,c);let S=y.data;A.resetIV&&e.decryptdata&&(e.decryptdata.iv=new Uint8Array(S.slice(0,16)),S=S.slice(16)),a({frag:e,part:null,payload:S,networkDetails:b})},onError:(y,m,A,b)=>{this.resetLoader(e,c),l(new kn({type:Be.NETWORK_ERROR,details:G.FRAG_LOAD_ERROR,fatal:!1,frag:e,response:_t({url:r,data:void 0},y),error:new Error(`HTTP Error ${y.code} ${y.text}`),networkDetails:A,stats:b}))},onAbort:(y,m,A)=>{this.resetLoader(e,c),l(new kn({type:Be.NETWORK_ERROR,details:G.INTERNAL_ABORTED,fatal:!1,frag:e,error:new Error("Aborted"),networkDetails:A,stats:y}))},onTimeout:(y,m,A)=>{this.resetLoader(e,c),l(new kn({type:Be.NETWORK_ERROR,details:G.FRAG_LOAD_TIMEOUT,fatal:!1,frag:e,error:new Error(`Timeout after ${h.timeout}ms`),networkDetails:A,stats:y}))},onProgress:(y,m,A,b)=>{t&&t({frag:e,part:null,payload:A,networkDetails:b})}})})}loadPart(e,t,r){this.abort();const i=this.config,s=i.fLoader,o=i.loader;return new Promise((a,l)=>{if(this.loader&&this.loader.destroy(),e.gap||t.gap){l(bu(e,t));return}const c=this.loader=e.loader=s?new s(i):new o(i),d=vu(e,t),u=pu(i.fragLoadPolicy.default),h={loadPolicy:u,timeout:u.maxLoadTimeMs,maxRetry:0,retryDelay:0,maxRetryDelay:0,highWaterMark:Au};t.stats=c.stats,c.load(d,h,{onSuccess:(y,m,A,b)=>{this.resetLoader(e,c),this.updateStatsFromPart(e,t);const S={frag:e,part:t,payload:y.data,networkDetails:b};r(S),a(S)},onError:(y,m,A,b)=>{this.resetLoader(e,c),l(new kn({type:Be.NETWORK_ERROR,details:G.FRAG_LOAD_ERROR,fatal:!1,frag:e,part:t,response:_t({url:d.url,data:void 0},y),error:new Error(`HTTP Error ${y.code} ${y.text}`),networkDetails:A,stats:b}))},onAbort:(y,m,A)=>{e.stats.aborted=t.stats.aborted,this.resetLoader(e,c),l(new kn({type:Be.NETWORK_ERROR,details:G.INTERNAL_ABORTED,fatal:!1,frag:e,part:t,error:new Error("Aborted"),networkDetails:A,stats:y}))},onTimeout:(y,m,A)=>{this.resetLoader(e,c),l(new kn({type:Be.NETWORK_ERROR,details:G.FRAG_LOAD_TIMEOUT,fatal:!1,frag:e,part:t,error:new Error(`Timeout after ${h.timeout}ms`),networkDetails:A,stats:y}))}})})}updateStatsFromPart(e,t){const r=e.stats,i=t.stats,s=i.total;if(r.loaded+=i.loaded,s){const l=Math.round(e.duration/t.duration),c=Math.min(Math.round(r.loaded/s),l),u=(l-c)*Math.round(r.loaded/c);r.total=r.loaded+u}else r.total=Math.max(r.loaded,r.total);const o=r.loading,a=i.loading;o.start?o.first+=a.first-a.start:(o.start=a.start,o.first=a.first),o.end=a.end}resetLoader(e,t){e.loader=null,this.loader===t&&(self.clearTimeout(this.partLoadTimeout),this.loader=null),t.destroy()}}function vu(n,e=null){const t=e||n,r={frag:n,part:e,responseType:"arraybuffer",url:t.url,headers:{},rangeStart:0,rangeEnd:0},i=t.byteRangeStartOffset,s=t.byteRangeEndOffset;if(xe(i)&&xe(s)){var o;let a=i,l=s;if(n.sn==="initSegment"&&((o=n.decryptdata)==null?void 0:o.method)==="AES-128"){const c=s-i;c%16&&(l=s+(16-c%16)),i!==0&&(r.resetIV=!0,a=i-16)}r.rangeStart=a,r.rangeEnd=l}return r}function bu(n,e){const t=new Error(`GAP ${n.gap?"tag":"attribute"} found`),r={type:Be.MEDIA_ERROR,details:G.FRAG_GAP,fatal:!1,frag:n,error:t,networkDetails:null};return e&&(r.part=e),(e||n).stats.aborted=!0,new kn(r)}class kn extends Error{constructor(e){super(e.error.message),this.data=void 0,this.data=e}}class b3{constructor(e,t){this.subtle=void 0,this.aesIV=void 0,this.subtle=e,this.aesIV=t}decrypt(e,t){return this.subtle.decrypt({name:"AES-CBC",iv:this.aesIV},t,e)}}class x3{constructor(e,t){this.subtle=void 0,this.key=void 0,this.subtle=e,this.key=t}expandKey(){return this.subtle.importKey("raw",this.key,{name:"AES-CBC"},!1,["encrypt","decrypt"])}}function E3(n){const e=n.byteLength,t=e&&new DataView(n.buffer).getUint8(e-1);return t?cr(n,0,e-t):n}class _3{constructor(){this.rcon=[0,1,2,4,8,16,32,64,128,27,54],this.subMix=[new Uint32Array(256),new Uint32Array(256),new Uint32Array(256),new Uint32Array(256)],this.invSubMix=[new Uint32Array(256),new Uint32Array(256),new Uint32Array(256),new Uint32Array(256)],this.sBox=new Uint32Array(256),this.invSBox=new Uint32Array(256),this.key=new Uint32Array(0),this.ksRows=0,this.keySize=0,this.keySchedule=void 0,this.invKeySchedule=void 0,this.initTable()}uint8ArrayToUint32Array_(e){const t=new DataView(e),r=new Uint32Array(4);for(let i=0;i<4;i++)r[i]=t.getUint32(i*4);return r}initTable(){const e=this.sBox,t=this.invSBox,r=this.subMix,i=r[0],s=r[1],o=r[2],a=r[3],l=this.invSubMix,c=l[0],d=l[1],u=l[2],h=l[3],y=new Uint32Array(256);let m=0,A=0,b=0;for(b=0;b<256;b++)b<128?y[b]=b<<1:y[b]=b<<1^283;for(b=0;b<256;b++){let S=A^A<<1^A<<2^A<<3^A<<4;S=S>>>8^S&255^99,e[m]=S,t[S]=m;const C=y[m],R=y[C],D=y[R];let B=y[S]*257^S*16843008;i[m]=B<<24|B>>>8,s[m]=B<<16|B>>>16,o[m]=B<<8|B>>>24,a[m]=B,B=D*16843009^R*65537^C*257^m*16843008,c[S]=B<<24|B>>>8,d[S]=B<<16|B>>>16,u[S]=B<<8|B>>>24,h[S]=B,m?(m=C^y[y[y[D^C]]],A^=y[y[A]]):m=A=1}}expandKey(e){const t=this.uint8ArrayToUint32Array_(e);let r=!0,i=0;for(;i<t.length&&r;)r=t[i]===this.key[i],i++;if(r)return;this.key=t;const s=this.keySize=t.length;if(s!==4&&s!==6&&s!==8)throw new Error("Invalid aes key size="+s);const o=this.ksRows=(s+6+1)*4;let a,l;const c=this.keySchedule=new Uint32Array(o),d=this.invKeySchedule=new Uint32Array(o),u=this.sBox,h=this.rcon,y=this.invSubMix,m=y[0],A=y[1],b=y[2],S=y[3];let C,R;for(a=0;a<o;a++){if(a<s){C=c[a]=t[a];continue}R=C,a%s===0?(R=R<<8|R>>>24,R=u[R>>>24]<<24|u[R>>>16&255]<<16|u[R>>>8&255]<<8|u[R&255],R^=h[a/s|0]<<24):s>6&&a%s===4&&(R=u[R>>>24]<<24|u[R>>>16&255]<<16|u[R>>>8&255]<<8|u[R&255]),c[a]=C=(c[a-s]^R)>>>0}for(l=0;l<o;l++)a=o-l,l&3?R=c[a]:R=c[a-4],l<4||a<=4?d[l]=R:d[l]=m[u[R>>>24]]^A[u[R>>>16&255]]^b[u[R>>>8&255]]^S[u[R&255]],d[l]=d[l]>>>0}networkToHostOrderSwap(e){return e<<24|(e&65280)<<8|(e&16711680)>>8|e>>>24}decrypt(e,t,r){const i=this.keySize+6,s=this.invKeySchedule,o=this.invSBox,a=this.invSubMix,l=a[0],c=a[1],d=a[2],u=a[3],h=this.uint8ArrayToUint32Array_(r);let y=h[0],m=h[1],A=h[2],b=h[3];const S=new Int32Array(e),C=new Int32Array(S.length);let R,D,B,K,N,z,Z,O,ee,_e,ce,Y,re,H;const Q=this.networkToHostOrderSwap;for(;t<S.length;){for(ee=Q(S[t]),_e=Q(S[t+1]),ce=Q(S[t+2]),Y=Q(S[t+3]),N=ee^s[0],z=Y^s[1],Z=ce^s[2],O=_e^s[3],re=4,H=1;H<i;H++)R=l[N>>>24]^c[z>>16&255]^d[Z>>8&255]^u[O&255]^s[re],D=l[z>>>24]^c[Z>>16&255]^d[O>>8&255]^u[N&255]^s[re+1],B=l[Z>>>24]^c[O>>16&255]^d[N>>8&255]^u[z&255]^s[re+2],K=l[O>>>24]^c[N>>16&255]^d[z>>8&255]^u[Z&255]^s[re+3],N=R,z=D,Z=B,O=K,re=re+4;R=o[N>>>24]<<24^o[z>>16&255]<<16^o[Z>>8&255]<<8^o[O&255]^s[re],D=o[z>>>24]<<24^o[Z>>16&255]<<16^o[O>>8&255]<<8^o[N&255]^s[re+1],B=o[Z>>>24]<<24^o[O>>16&255]<<16^o[N>>8&255]<<8^o[z&255]^s[re+2],K=o[O>>>24]<<24^o[N>>16&255]<<16^o[z>>8&255]<<8^o[Z&255]^s[re+3],C[t]=Q(R^y),C[t+1]=Q(K^m),C[t+2]=Q(B^A),C[t+3]=Q(D^b),y=ee,m=_e,A=ce,b=Y,t=t+4}return C.buffer}}const w3=16;class Hl{constructor(e,{removePKCS7Padding:t=!0}={}){if(this.logEnabled=!0,this.removePKCS7Padding=void 0,this.subtle=null,this.softwareDecrypter=null,this.key=null,this.fastAesKey=null,this.remainderData=null,this.currentIV=null,this.currentResult=null,this.useSoftware=void 0,this.useSoftware=e.enableSoftwareAES,this.removePKCS7Padding=t,t)try{const r=self.crypto;r&&(this.subtle=r.subtle||r.webkitSubtle)}catch{}this.subtle===null&&(this.useSoftware=!0)}destroy(){this.subtle=null,this.softwareDecrypter=null,this.key=null,this.fastAesKey=null,this.remainderData=null,this.currentIV=null,this.currentResult=null}isSync(){return this.useSoftware}flush(){const{currentResult:e,remainderData:t}=this;if(!e||t)return this.reset(),null;const r=new Uint8Array(e);return this.reset(),this.removePKCS7Padding?E3(r):r}reset(){this.currentResult=null,this.currentIV=null,this.remainderData=null,this.softwareDecrypter&&(this.softwareDecrypter=null)}decrypt(e,t,r){return this.useSoftware?new Promise((i,s)=>{this.softwareDecrypt(new Uint8Array(e),t,r);const o=this.flush();o?i(o.buffer):s(new Error("[softwareDecrypt] Failed to decrypt data"))}):this.webCryptoDecrypt(new Uint8Array(e),t,r)}softwareDecrypt(e,t,r){const{currentIV:i,currentResult:s,remainderData:o}=this;this.logOnce("JS AES decrypt"),o&&(e=Qt(o,e),this.remainderData=null);const a=this.getValidChunk(e);if(!a.length)return null;i&&(r=i);let l=this.softwareDecrypter;l||(l=this.softwareDecrypter=new _3),l.expandKey(t);const c=s;return this.currentResult=l.decrypt(a.buffer,0,r),this.currentIV=cr(a,-16).buffer,c||null}webCryptoDecrypt(e,t,r){const i=this.subtle;return(this.key!==t||!this.fastAesKey)&&(this.key=t,this.fastAesKey=new x3(i,t)),this.fastAesKey.expandKey().then(s=>i?(this.logOnce("WebCrypto AES decrypt"),new b3(i,new Uint8Array(r)).decrypt(e.buffer,s)):Promise.reject(new Error("web crypto not initialized"))).catch(s=>(M.warn(`[decrypter]: WebCrypto Error, disable WebCrypto API, ${s.name}: ${s.message}`),this.onWebCryptoError(e,t,r)))}onWebCryptoError(e,t,r){this.useSoftware=!0,this.logEnabled=!0,this.softwareDecrypt(e,t,r);const i=this.flush();if(i)return i.buffer;throw new Error("WebCrypto and softwareDecrypt: failed to decrypt data")}getValidChunk(e){let t=e;const r=e.length-e.length%w3;return r!==e.length&&(t=cr(e,0,r),this.remainderData=cr(e,r)),t}logOnce(e){this.logEnabled&&(M.log(`[decrypter]: ${e}`),this.logEnabled=!1)}}const S3={toString:function(n){let e="";const t=n.length;for(let r=0;r<t;r++)e+=`[${n.start(r).toFixed(3)}-${n.end(r).toFixed(3)}]`;return e}},ne={STOPPED:"STOPPED",IDLE:"IDLE",KEY_LOADING:"KEY_LOADING",FRAG_LOADING:"FRAG_LOADING",FRAG_LOADING_WAITING_RETRY:"FRAG_LOADING_WAITING_RETRY",WAITING_TRACK:"WAITING_TRACK",PARSING:"PARSING",PARSED:"PARSED",ENDED:"ENDED",ERROR:"ERROR",WAITING_INIT_PTS:"WAITING_INIT_PTS",WAITING_LEVEL:"WAITING_LEVEL"};class Gl extends h3{constructor(e,t,r,i,s){super(),this.hls=void 0,this.fragPrevious=null,this.fragCurrent=null,this.fragmentTracker=void 0,this.transmuxer=null,this._state=ne.STOPPED,this.playlistType=void 0,this.media=null,this.mediaBuffer=null,this.config=void 0,this.bitrateTest=!1,this.lastCurrentTime=0,this.nextLoadPosition=0,this.startPosition=0,this.startTimeOffset=null,this.loadedmetadata=!1,this.retryDate=0,this.levels=null,this.fragmentLoader=void 0,this.keyLoader=void 0,this.levelLastLoaded=null,this.startFragRequested=!1,this.decrypter=void 0,this.initPTS=[],this.onvseeking=null,this.onvended=null,this.logPrefix="",this.log=void 0,this.warn=void 0,this.playlistType=s,this.logPrefix=i,this.log=M.log.bind(M,`${i}:`),this.warn=M.warn.bind(M,`${i}:`),this.hls=e,this.fragmentLoader=new v3(e.config),this.keyLoader=r,this.fragmentTracker=t,this.config=e.config,this.decrypter=new Hl(e.config),e.on(w.MANIFEST_LOADED,this.onManifestLoaded,this)}doTick(){this.onTickEnd()}onTickEnd(){}startLoad(e){}stopLoad(){this.fragmentLoader.abort(),this.keyLoader.abort(this.playlistType);const e=this.fragCurrent;e!=null&&e.loader&&(e.abortRequests(),this.fragmentTracker.removeFragment(e)),this.resetTransmuxer(),this.fragCurrent=null,this.fragPrevious=null,this.clearInterval(),this.clearNextTick(),this.state=ne.STOPPED}_streamEnded(e,t){if(t.live||e.nextStart||!e.end||!this.media)return!1;const r=t.partList;if(r!=null&&r.length){const s=r[r.length-1];return ot.isBuffered(this.media,s.start+s.duration/2)}const i=t.fragments[t.fragments.length-1].type;return this.fragmentTracker.isEndListAppended(i)}getLevelDetails(){if(this.levels&&this.levelLastLoaded!==null){var e;return(e=this.levelLastLoaded)==null?void 0:e.details}}onMediaAttached(e,t){const r=this.media=this.mediaBuffer=t.media;this.onvseeking=this.onMediaSeeking.bind(this),this.onvended=this.onMediaEnded.bind(this),r.addEventListener("seeking",this.onvseeking),r.addEventListener("ended",this.onvended);const i=this.config;this.levels&&i.autoStartLoad&&this.state===ne.STOPPED&&this.startLoad(i.startPosition)}onMediaDetaching(){const e=this.media;e!=null&&e.ended&&(this.log("MSE detaching and video ended, reset startPosition"),this.startPosition=this.lastCurrentTime=0),e&&this.onvseeking&&this.onvended&&(e.removeEventListener("seeking",this.onvseeking),e.removeEventListener("ended",this.onvended),this.onvseeking=this.onvended=null),this.keyLoader&&this.keyLoader.detach(),this.media=this.mediaBuffer=null,this.loadedmetadata=!1,this.fragmentTracker.removeAllFragments(),this.stopLoad()}onMediaSeeking(){const{config:e,fragCurrent:t,media:r,mediaBuffer:i,state:s}=this,o=r?r.currentTime:0,a=ot.bufferInfo(i||r,o,e.maxBufferHole);if(this.log(`media seeking to ${xe(o)?o.toFixed(3):o}, state: ${s}`),this.state===ne.ENDED)this.resetLoadingState();else if(t){const l=e.maxFragLookUpTolerance,c=t.start-l,d=t.start+t.duration+l;if(!a.len||d<a.start||c>a.end){const u=o>d;(o<c||u)&&(u&&t.loader&&(this.log("seeking outside of buffer while fragment load in progress, cancel fragment load"),t.abortRequests(),this.resetLoadingState()),this.fragPrevious=null)}}r&&(this.fragmentTracker.removeFragmentsInRange(o,1/0,this.playlistType,!0),this.lastCurrentTime=o),!this.loadedmetadata&&!a.len&&(this.nextLoadPosition=this.startPosition=o),this.tickImmediate()}onMediaEnded(){this.startPosition=this.lastCurrentTime=0}onManifestLoaded(e,t){this.startTimeOffset=t.startTimeOffset,this.initPTS=[]}onHandlerDestroying(){this.hls.off(w.MANIFEST_LOADED,this.onManifestLoaded,this),this.stopLoad(),super.onHandlerDestroying(),this.hls=null}onHandlerDestroyed(){this.state=ne.STOPPED,this.fragmentLoader&&this.fragmentLoader.destroy(),this.keyLoader&&this.keyLoader.destroy(),this.decrypter&&this.decrypter.destroy(),this.hls=this.log=this.warn=this.decrypter=this.keyLoader=this.fragmentLoader=this.fragmentTracker=null,super.onHandlerDestroyed()}loadFragment(e,t,r){this._loadFragForPlayback(e,t,r)}_loadFragForPlayback(e,t,r){const i=s=>{if(this.fragContextChanged(e)){this.warn(`Fragment ${e.sn}${s.part?" p: "+s.part.index:""} of level ${e.level} was dropped during download.`),this.fragmentTracker.removeFragment(e);return}e.stats.chunkCount++,this._handleFragmentLoadProgress(s)};this._doFragLoad(e,t,r,i).then(s=>{if(!s)return;const o=this.state;if(this.fragContextChanged(e)){(o===ne.FRAG_LOADING||!this.fragCurrent&&o===ne.PARSING)&&(this.fragmentTracker.removeFragment(e),this.state=ne.IDLE);return}"payload"in s&&(this.log(`Loaded fragment ${e.sn} of level ${e.level}`),this.hls.trigger(w.FRAG_LOADED,s)),this._handleFragmentLoadComplete(s)}).catch(s=>{this.state===ne.STOPPED||this.state===ne.ERROR||(this.warn(s),this.resetFragmentLoading(e))})}clearTrackerIfNeeded(e){var t;const{fragmentTracker:r}=this;if(r.getState(e)===xt.APPENDING){const s=e.type,o=this.getFwdBufferInfo(this.mediaBuffer,s),a=Math.max(e.duration,o?o.len:this.config.maxBufferLength);this.reduceMaxBufferLength(a)&&r.removeFragment(e)}else((t=this.mediaBuffer)==null?void 0:t.buffered.length)===0?r.removeAllFragments():r.hasParts(e.type)&&(r.detectPartialFragments({frag:e,part:null,stats:e.stats,id:e.type}),r.getState(e)===xt.PARTIAL&&r.removeFragment(e))}checkLiveUpdate(e){if(e.updated&&!e.live){const t=e.fragments[e.fragments.length-1];this.fragmentTracker.detectPartialFragments({frag:t,part:null,stats:t.stats,id:t.type})}e.fragments[0]||(e.deltaUpdateFailed=!0)}flushMainBuffer(e,t,r=null){if(!(e-t))return;const i={startOffset:e,endOffset:t,type:r};this.hls.trigger(w.BUFFER_FLUSHING,i)}_loadInitSegment(e,t){this._doFragLoad(e,t).then(r=>{if(!r||this.fragContextChanged(e)||!this.levels)throw new Error("init load aborted");return r}).then(r=>{const{hls:i}=this,{payload:s}=r,o=e.decryptdata;if(s&&s.byteLength>0&&o!=null&&o.key&&o.iv&&o.method==="AES-128"){const a=self.performance.now();return this.decrypter.decrypt(new Uint8Array(s),o.key.buffer,o.iv.buffer).catch(l=>{throw i.trigger(w.ERROR,{type:Be.MEDIA_ERROR,details:G.FRAG_DECRYPT_ERROR,fatal:!1,error:l,reason:l.message,frag:e}),l}).then(l=>{const c=self.performance.now();return i.trigger(w.FRAG_DECRYPTED,{frag:e,payload:l,stats:{tstart:a,tdecrypt:c}}),r.payload=l,this.completeInitSegmentLoad(r)})}return this.completeInitSegmentLoad(r)}).catch(r=>{this.state===ne.STOPPED||this.state===ne.ERROR||(this.warn(r),this.resetFragmentLoading(e))})}completeInitSegmentLoad(e){const{levels:t}=this;if(!t)throw new Error("init load aborted, missing levels");const r=e.frag.stats;this.state=ne.IDLE,e.frag.data=new Uint8Array(e.payload),r.parsing.start=r.buffering.start=self.performance.now(),r.parsing.end=r.buffering.end=self.performance.now(),this.tick()}fragContextChanged(e){const{fragCurrent:t}=this;return!e||!t||e.sn!==t.sn||e.level!==t.level}fragBufferedComplete(e,t){var r,i,s,o;const a=this.mediaBuffer?this.mediaBuffer:this.media;if(this.log(`Buffered ${e.type} sn: ${e.sn}${t?" part: "+t.index:""} of ${this.playlistType===De.MAIN?"level":"track"} ${e.level} (frag:[${((r=e.startPTS)!=null?r:NaN).toFixed(3)}-${((i=e.endPTS)!=null?i:NaN).toFixed(3)}] > buffer:${a?S3.toString(ot.getBuffered(a)):"(detached)"})`),e.sn!=="initSegment"){var l;if(e.type!==De.SUBTITLE){const d=e.elementaryStreams;if(!Object.keys(d).some(u=>!!d[u])){this.state=ne.IDLE;return}}const c=(l=this.levels)==null?void 0:l[e.level];c!=null&&c.fragmentError&&(this.log(`Resetting level fragment error count of ${c.fragmentError} on frag buffered`),c.fragmentError=0)}this.state=ne.IDLE,a&&(!this.loadedmetadata&&e.type==De.MAIN&&a.buffered.length&&((s=this.fragCurrent)==null?void 0:s.sn)===((o=this.fragPrevious)==null?void 0:o.sn)&&(this.loadedmetadata=!0,this.seekToStartPos()),this.tick())}seekToStartPos(){}_handleFragmentLoadComplete(e){const{transmuxer:t}=this;if(!t)return;const{frag:r,part:i,partsLoaded:s}=e,o=!s||s.length===0||s.some(l=>!l),a=new $l(r.level,r.sn,r.stats.chunkCount+1,0,i?i.index:-1,!o);t.flush(a)}_handleFragmentLoadProgress(e){}_doFragLoad(e,t,r=null,i){var s;const o=t==null?void 0:t.details;if(!this.levels||!o)throw new Error(`frag load aborted, missing level${o?"":" detail"}s`);let a=null;if(e.encrypted&&!((s=e.decryptdata)!=null&&s.key)?(this.log(`Loading key for ${e.sn} of [${o.startSN}-${o.endSN}], ${this.logPrefix==="[stream-controller]"?"level":"track"} ${e.level}`),this.state=ne.KEY_LOADING,this.fragCurrent=e,a=this.keyLoader.load(e).then(d=>{if(!this.fragContextChanged(d.frag))return this.hls.trigger(w.KEY_LOADED,d),this.state===ne.KEY_LOADING&&(this.state=ne.IDLE),d}),this.hls.trigger(w.KEY_LOADING,{frag:e}),this.fragCurrent===null&&(a=Promise.reject(new Error("frag load aborted, context changed in KEY_LOADING")))):!e.encrypted&&o.encryptedFragments.length&&this.keyLoader.loadClear(e,o.encryptedFragments),r=Math.max(e.start,r||0),this.config.lowLatencyMode&&e.sn!=="initSegment"){const d=o.partList;if(d&&i){r>e.end&&o.fragmentHint&&(e=o.fragmentHint);const u=this.getNextPart(d,e,r);if(u>-1){const h=d[u];this.log(`Loading part sn: ${e.sn} p: ${h.index} cc: ${e.cc} of playlist [${o.startSN}-${o.endSN}] parts [0-${u}-${d.length-1}] ${this.logPrefix==="[stream-controller]"?"level":"track"}: ${e.level}, target: ${parseFloat(r.toFixed(3))}`),this.nextLoadPosition=h.start+h.duration,this.state=ne.FRAG_LOADING;let y;return a?y=a.then(m=>!m||this.fragContextChanged(m.frag)?null:this.doFragPartsLoad(e,h,t,i)).catch(m=>this.handleFragLoadError(m)):y=this.doFragPartsLoad(e,h,t,i).catch(m=>this.handleFragLoadError(m)),this.hls.trigger(w.FRAG_LOADING,{frag:e,part:h,targetBufferTime:r}),this.fragCurrent===null?Promise.reject(new Error("frag load aborted, context changed in FRAG_LOADING parts")):y}else if(!e.url||this.loadedEndOfParts(d,r))return Promise.resolve(null)}}this.log(`Loading fragment ${e.sn} cc: ${e.cc} ${o?"of ["+o.startSN+"-"+o.endSN+"] ":""}${this.logPrefix==="[stream-controller]"?"level":"track"}: ${e.level}, target: ${parseFloat(r.toFixed(3))}`),xe(e.sn)&&!this.bitrateTest&&(this.nextLoadPosition=e.start+e.duration),this.state=ne.FRAG_LOADING;const l=this.config.progressive;let c;return l&&a?c=a.then(d=>!d||this.fragContextChanged(d==null?void 0:d.frag)?null:this.fragmentLoader.load(e,i)).catch(d=>this.handleFragLoadError(d)):c=Promise.all([this.fragmentLoader.load(e,l?i:void 0),a]).then(([d])=>(!l&&d&&i&&i(d),d)).catch(d=>this.handleFragLoadError(d)),this.hls.trigger(w.FRAG_LOADING,{frag:e,targetBufferTime:r}),this.fragCurrent===null?Promise.reject(new Error("frag load aborted, context changed in FRAG_LOADING")):c}doFragPartsLoad(e,t,r,i){return new Promise((s,o)=>{var a;const l=[],c=(a=r.details)==null?void 0:a.partList,d=u=>{this.fragmentLoader.loadPart(e,u,i).then(h=>{l[u.index]=h;const y=h.part;this.hls.trigger(w.FRAG_LOADED,h);const m=hu(r,e.sn,u.index+1)||Xf(c,e.sn,u.index+1);if(m)d(m);else return s({frag:e,part:y,partsLoaded:l})}).catch(o)};d(t)})}handleFragLoadError(e){if("data"in e){const t=e.data;e.data&&t.details===G.INTERNAL_ABORTED?this.handleFragLoadAborted(t.frag,t.part):this.hls.trigger(w.ERROR,t)}else this.hls.trigger(w.ERROR,{type:Be.OTHER_ERROR,details:G.INTERNAL_EXCEPTION,err:e,error:e,fatal:!0});return null}_handleTransmuxerFlush(e){const t=this.getCurrentContext(e);if(!t||this.state!==ne.PARSING){!this.fragCurrent&&this.state!==ne.STOPPED&&this.state!==ne.ERROR&&(this.state=ne.IDLE);return}const{frag:r,part:i,level:s}=t,o=self.performance.now();r.stats.parsing.end=o,i&&(i.stats.parsing.end=o),this.updateLevelTiming(r,i,s,e.partial)}getCurrentContext(e){const{levels:t,fragCurrent:r}=this,{level:i,sn:s,part:o}=e;if(!(t!=null&&t[i]))return this.warn(`Levels object was unset while buffering fragment ${s} of level ${i}. The current chunk will not be buffered.`),null;const a=t[i],l=o>-1?hu(a,s,o):null,c=l?l.fragment:W_(a,s,r);return c?(r&&r!==c&&(c.stats=r.stats),{frag:c,part:l,level:a}):null}bufferFragmentData(e,t,r,i,s){var o;if(!e||this.state!==ne.PARSING)return;const{data1:a,data2:l}=e;let c=a;if(a&&l&&(c=Qt(a,l)),!((o=c)!=null&&o.length))return;const d={type:e.type,frag:t,part:r,chunkMeta:i,parent:t.type,data:c};if(this.hls.trigger(w.BUFFER_APPENDING,d),e.dropped&&e.independent&&!r){if(s)return;this.flushBufferGap(t)}}flushBufferGap(e){const t=this.media;if(!t)return;if(!ot.isBuffered(t,t.currentTime)){this.flushMainBuffer(0,e.start);return}const r=t.currentTime,i=ot.bufferInfo(t,r,0),s=e.duration,o=Math.min(this.config.maxFragLookUpTolerance*2,s*.25),a=Math.max(Math.min(e.start-o,i.end-o),r+o);e.start-a>o&&this.flushMainBuffer(a,e.start)}getFwdBufferInfo(e,t){const r=this.getLoadPosition();return xe(r)?this.getFwdBufferInfoAtPos(e,r,t):null}getFwdBufferInfoAtPos(e,t,r){const{config:{maxBufferHole:i}}=this,s=ot.bufferInfo(e,t,i);if(s.len===0&&s.nextStart!==void 0){const o=this.fragmentTracker.getBufferedFrag(t,r);if(o&&s.nextStart<o.end)return ot.bufferInfo(e,t,Math.max(s.nextStart,i))}return s}getMaxBufferLength(e){const{config:t}=this;let r;return e?r=Math.max(8*t.maxBufferSize/e,t.maxBufferLength):r=t.maxBufferLength,Math.min(r,t.maxMaxBufferLength)}reduceMaxBufferLength(e){const t=this.config,r=e||t.maxBufferLength;return t.maxMaxBufferLength>=r?(t.maxMaxBufferLength/=2,this.warn(`Reduce max buffer length to ${t.maxMaxBufferLength}s`),!0):!1}getAppendedFrag(e,t=De.MAIN){const r=this.fragmentTracker.getAppendedFrag(e,De.MAIN);return r&&"fragment"in r?r.fragment:r}getNextFragment(e,t){const r=t.fragments,i=r.length;if(!i)return null;const{config:s}=this,o=r[0].start;let a;if(t.live){const l=s.initialLiveManifestSize;if(i<l)return this.warn(`Not enough fragments to start playback (have: ${i}, need: ${l})`),null;(!t.PTSKnown&&!this.startFragRequested&&this.startPosition===-1||e<o)&&(a=this.getInitialLiveFragment(t,r),this.startPosition=this.nextLoadPosition=a?this.hls.liveSyncPosition||a.start:e)}else e<=o&&(a=r[0]);if(!a){const l=s.lowLatencyMode?t.partEnd:t.fragmentEnd;a=this.getFragmentAtPosition(e,l,t)}return this.mapToInitFragWhenRequired(a)}isLoopLoading(e,t){const r=this.fragmentTracker.getState(e);return(r===xt.OK||r===xt.PARTIAL&&!!e.gap)&&this.nextLoadPosition>t}getNextFragmentLoopLoading(e,t,r,i,s){const o=e.gap,a=this.getNextFragment(this.nextLoadPosition,t);if(a===null)return a;if(e=a,o&&e&&!e.gap&&r.nextStart){const l=this.getFwdBufferInfoAtPos(this.mediaBuffer?this.mediaBuffer:this.media,r.nextStart,i);if(l!==null&&r.len+l.len>=s)return this.log(`buffer full after gaps in "${i}" playlist starting at sn: ${e.sn}`),null}return e}mapToInitFragWhenRequired(e){return e!=null&&e.initSegment&&!(e!=null&&e.initSegment.data)&&!this.bitrateTest?e.initSegment:e}getNextPart(e,t,r){let i=-1,s=!1,o=!0;for(let a=0,l=e.length;a<l;a++){const c=e[a];if(o=o&&!c.independent,i>-1&&r<c.start)break;const d=c.loaded;d?i=-1:(s||c.independent||o)&&c.fragment===t&&(i=a),s=d}return i}loadedEndOfParts(e,t){const r=e[e.length-1];return r&&t>r.start&&r.loaded}getInitialLiveFragment(e,t){const r=this.fragPrevious;let i=null;if(r){if(e.hasProgramDateTime&&(this.log(`Live playlist, switching playlist, load frag with same PDT: ${r.programDateTime}`),i=Q_(t,r.endProgramDateTime,this.config.maxFragLookUpTolerance)),!i){const s=r.sn+1;if(s>=e.startSN&&s<=e.endSN){const o=t[s-e.startSN];r.cc===o.cc&&(i=o,this.log(`Live playlist, switching playlist, load frag with next SN: ${i.sn}`))}i||(i=Z_(t,r.cc),i&&this.log(`Live playlist, switching playlist, load frag with same CC: ${i.sn}`))}}else{const s=this.hls.liveSyncPosition;s!==null&&(i=this.getFragmentAtPosition(s,this.bitrateTest?e.fragmentEnd:e.edge,e))}return i}getFragmentAtPosition(e,t,r){const{config:i}=this;let{fragPrevious:s}=this,{fragments:o,endSN:a}=r;const{fragmentHint:l}=r,c=i.maxFragLookUpTolerance,d=r.partList,u=!!(i.lowLatencyMode&&d!=null&&d.length&&l);u&&l&&!this.bitrateTest&&(o=o.concat(l),a=l.sn);let h;if(e<t){const y=e>t-c?0:c;h=no(s,o,e,y)}else h=o[o.length-1];if(h){const y=h.sn-r.startSN,m=this.fragmentTracker.getState(h);if((m===xt.OK||m===xt.PARTIAL&&h.gap)&&(s=h),s&&h.sn===s.sn&&(!u||d[0].fragment.sn>h.sn)&&s&&h.level===s.level){const b=o[y+1];h.sn<a&&this.fragmentTracker.getState(b)!==xt.OK?h=b:h=null}}return h}synchronizeToLiveEdge(e){const{config:t,media:r}=this;if(!r)return;const i=this.hls.liveSyncPosition,s=r.currentTime,o=e.fragments[0].start,a=e.edge,l=s>=o-t.maxFragLookUpTolerance&&s<=a;if(i!==null&&r.duration>i&&(s<i||!l)){const c=t.liveMaxLatencyDuration!==void 0?t.liveMaxLatencyDuration:t.liveMaxLatencyDurationCount*e.targetduration;(!l&&r.readyState<4||s<a-c)&&(this.loadedmetadata||(this.nextLoadPosition=i),r.readyState&&(this.warn(`Playback: ${s.toFixed(3)} is located too far from the end of live sliding playlist: ${a}, reset currentTime to : ${i.toFixed(3)}`),r.currentTime=i))}}alignPlaylists(e,t,r){const i=e.fragments.length;if(!i)return this.warn("No fragments in live playlist"),0;const s=e.fragments[0].start,o=!t,a=e.alignedSliding&&xe(s);if(o||!a&&!s){const{fragPrevious:l}=this;y3(l,r,e);const c=e.fragments[0].start;return this.log(`Live playlist sliding: ${c.toFixed(2)} start-sn: ${t?t.startSN:"na"}->${e.startSN} prev-sn: ${l?l.sn:"na"} fragments: ${i}`),c}return s}waitForCdnTuneIn(e){return e.live&&e.canBlockReload&&e.partTarget&&e.tuneInGoal>Math.max(e.partHoldBack,e.partTarget*3)}setStartPosition(e,t){let r=this.startPosition;if(r<t&&(r=-1),r===-1||this.lastCurrentTime===-1){const i=this.startTimeOffset!==null,s=i?this.startTimeOffset:e.startTimeOffset;s!==null&&xe(s)?(r=t+s,s<0&&(r+=e.totalduration),r=Math.min(Math.max(t,r),t+e.totalduration),this.log(`Start time offset ${s} found in ${i?"multivariant":"media"} playlist, adjust startPosition to ${r}`),this.startPosition=r):e.live?r=this.hls.liveSyncPosition||t:this.startPosition=r=0,this.lastCurrentTime=r}this.nextLoadPosition=r}getLoadPosition(){const{media:e}=this;let t=0;return this.loadedmetadata&&e?t=e.currentTime:this.nextLoadPosition&&(t=this.nextLoadPosition),t}handleFragLoadAborted(e,t){this.transmuxer&&e.sn!=="initSegment"&&e.stats.aborted&&(this.warn(`Fragment ${e.sn}${t?" part "+t.index:""} of level ${e.level} was aborted`),this.resetFragmentLoading(e))}resetFragmentLoading(e){(!this.fragCurrent||!this.fragContextChanged(e)&&this.state!==ne.FRAG_LOADING_WAITING_RETRY)&&(this.state=ne.IDLE)}onFragmentOrKeyLoadError(e,t){if(t.chunkMeta&&!t.frag){const d=this.getCurrentContext(t.chunkMeta);d&&(t.frag=d.frag)}const r=t.frag;if(!r||r.type!==e||!this.levels)return;if(this.fragContextChanged(r)){var i;this.warn(`Frag load error must match current frag to retry ${r.url} > ${(i=this.fragCurrent)==null?void 0:i.url}`);return}const s=t.details===G.FRAG_GAP;s&&this.fragmentTracker.fragBuffered(r,!0);const o=t.errorAction,{action:a,retryCount:l=0,retryConfig:c}=o||{};if(o&&a===St.RetryRequest&&c){this.resetStartWhenNotLoaded(this.levelLastLoaded);const d=Nl(c,l);this.warn(`Fragment ${r.sn} of ${e} ${r.level} errored with ${t.details}, retrying loading ${l+1}/${c.maxNumRetry} in ${d}ms`),o.resolved=!0,this.retryDate=self.performance.now()+d,this.state=ne.FRAG_LOADING_WAITING_RETRY}else if(c&&o)if(this.resetFragmentErrors(e),l<c.maxNumRetry)!s&&a!==St.RemoveAlternatePermanently&&(o.resolved=!0);else{M.warn(`${t.details} reached or exceeded max retry (${l})`);return}else(o==null?void 0:o.action)===St.SendAlternateToPenaltyBox?this.state=ne.WAITING_LEVEL:this.state=ne.ERROR;this.tickImmediate()}reduceLengthAndFlushBuffer(e){if(this.state===ne.PARSING||this.state===ne.PARSED){const t=e.parent,r=this.getFwdBufferInfo(this.mediaBuffer,t),i=r&&r.len>.5;i&&this.reduceMaxBufferLength(r.len);const s=!i;return s&&this.warn(`Buffer full error while media.currentTime is not buffered, flush ${t} buffer`),e.frag&&(this.fragmentTracker.removeFragment(e.frag),this.nextLoadPosition=e.frag.start),this.resetLoadingState(),s}return!1}resetFragmentErrors(e){e===De.AUDIO&&(this.fragCurrent=null),this.loadedmetadata||(this.startFragRequested=!1),this.state!==ne.STOPPED&&(this.state=ne.IDLE)}afterBufferFlushed(e,t,r){if(!e)return;const i=ot.getBuffered(e);this.fragmentTracker.detectEvictedFragments(t,i,r),this.state===ne.ENDED&&this.resetLoadingState()}resetLoadingState(){this.log("Reset loading state"),this.fragCurrent=null,this.fragPrevious=null,this.state=ne.IDLE}resetStartWhenNotLoaded(e){if(!this.loadedmetadata){this.startFragRequested=!1;const t=e?e.details:null;t!=null&&t.live?(this.startPosition=-1,this.setStartPosition(t,0),this.resetLoadingState()):this.nextLoadPosition=this.startPosition}}resetWhenMissingContext(e){this.warn(`The loading context changed while buffering fragment ${e.sn} of level ${e.level}. This chunk will not be buffered.`),this.removeUnbufferedFrags(),this.resetStartWhenNotLoaded(this.levelLastLoaded),this.resetLoadingState()}removeUnbufferedFrags(e=0){this.fragmentTracker.removeFragmentsInRange(e,1/0,this.playlistType,!1,!0)}updateLevelTiming(e,t,r,i){var s;const o=r.details;if(!o){this.warn("level.details undefined");return}if(!Object.keys(e.elementaryStreams).reduce((l,c)=>{const d=e.elementaryStreams[c];if(d){const u=d.endPTS-d.startPTS;if(u<=0)return this.warn(`Could not parse fragment ${e.sn} ${c} duration reliably (${u})`),l||!1;const h=i?0:Yf(o,e,d.startPTS,d.endPTS,d.startDTS,d.endDTS);return this.hls.trigger(w.LEVEL_PTS_UPDATED,{details:o,level:r,drift:h,type:c,frag:e,start:d.startPTS,end:d.endPTS}),!0}return l},!1)&&((s=this.transmuxer)==null?void 0:s.error)===null){const l=new Error(`Found no media in fragment ${e.sn} of level ${e.level} resetting transmuxer to fallback to playlist timing`);if(r.fragmentError===0&&(r.fragmentError++,e.gap=!0,this.fragmentTracker.removeFragment(e),this.fragmentTracker.fragBuffered(e,!0)),this.warn(l.message),this.hls.trigger(w.ERROR,{type:Be.MEDIA_ERROR,details:G.FRAG_PARSING_ERROR,fatal:!1,error:l,frag:e,reason:`Found no media in msn ${e.sn} of level "${r.url}"`}),!this.hls)return;this.resetTransmuxer()}this.state=ne.PARSED,this.hls.trigger(w.FRAG_PARSED,{frag:e,part:t})}resetTransmuxer(){this.transmuxer&&(this.transmuxer.destroy(),this.transmuxer=null)}recoverWorkerError(e){e.event==="demuxerWorker"&&(this.fragmentTracker.removeAllFragments(),this.resetTransmuxer(),this.resetStartWhenNotLoaded(this.levelLastLoaded),this.resetLoadingState())}set state(e){const t=this._state;t!==e&&(this._state=e,this.log(`${t}->${e}`))}get state(){return this._state}}class np{constructor(){this.chunks=[],this.dataLength=0}push(e){this.chunks.push(e),this.dataLength+=e.length}flush(){const{chunks:e,dataLength:t}=this;let r;if(e.length)e.length===1?r=e[0]:r=T3(e,t);else return new Uint8Array(0);return this.reset(),r}reset(){this.chunks.length=0,this.dataLength=0}}function T3(n,e){const t=new Uint8Array(e);let r=0;for(let i=0;i<n.length;i++){const s=n[i];t.set(s,r),r+=s.length}return t}function C3(){return typeof __HLS_WORKER_BUNDLE__=="function"}function L3(){const n=new self.Blob([`var exports={};var module={exports:exports};function define(f){f()};define.amd=true;(${__HLS_WORKER_BUNDLE__.toString()})(true);`],{type:"text/javascript"}),e=self.URL.createObjectURL(n);return{worker:new self.Worker(e),objectURL:e}}function k3(n){const e=new self.URL(n,self.location.href).href;return{worker:new self.Worker(e),scriptURL:e}}function pn(n="",e=9e4){return{type:n,id:-1,pid:-1,inputTimeScale:e,sequenceNumber:-1,samples:[],dropped:0}}class Kl{constructor(){this._audioTrack=void 0,this._id3Track=void 0,this.frameIndex=0,this.cachedData=null,this.basePTS=null,this.initPTS=null,this.lastPTS=null}resetInitSegment(e,t,r,i){this._id3Track={type:"id3",id:3,pid:-1,inputTimeScale:9e4,sequenceNumber:0,samples:[],dropped:0}}resetTimeStamp(e){this.initPTS=e,this.resetContiguity()}resetContiguity(){this.basePTS=null,this.lastPTS=null,this.frameIndex=0}canParse(e,t){return!1}appendFrame(e,t,r){}demux(e,t){this.cachedData&&(e=Qt(this.cachedData,e),this.cachedData=null);let r=qi(e,0),i=r?r.length:0,s;const o=this._audioTrack,a=this._id3Track,l=r?Fl(r):void 0,c=e.length;for((this.basePTS===null||this.frameIndex===0&&xe(l))&&(this.basePTS=R3(l,t,this.initPTS),this.lastPTS=this.basePTS),this.lastPTS===null&&(this.lastPTS=this.basePTS),r&&r.length>0&&a.samples.push({pts:this.lastPTS,dts:this.lastPTS,data:r,type:en.audioId3,duration:Number.POSITIVE_INFINITY});i<c;){if(this.canParse(e,i)){const d=this.appendFrame(o,e,i);d?(this.frameIndex++,this.lastPTS=d.sample.pts,i+=d.length,s=i):i=c}else J2(e,i)?(r=qi(e,i),a.samples.push({pts:this.lastPTS,dts:this.lastPTS,data:r,type:en.audioId3,duration:Number.POSITIVE_INFINITY}),i+=r.length,s=i):i++;if(i===c&&s!==c){const d=cr(e,s);this.cachedData?this.cachedData=Qt(this.cachedData,d):this.cachedData=d}}return{audioTrack:o,videoTrack:pn(),id3Track:a,textTrack:pn()}}demuxSampleAes(e,t,r){return Promise.reject(new Error(`[${this}] This demuxer does not support Sample-AES decryption`))}flush(e){const t=this.cachedData;return t&&(this.cachedData=null,this.demux(t,0)),{audioTrack:this._audioTrack,videoTrack:pn(),id3Track:this._id3Track,textTrack:pn()}}destroy(){}}const R3=(n,e,t)=>{if(xe(n))return n*90;const r=t?t.baseTime*9e4/t.timescale:0;return e*9e4+r};function I3(n,e,t,r){let i,s,o,a;const l=navigator.userAgent.toLowerCase(),c=r,d=[96e3,88200,64e3,48e3,44100,32e3,24e3,22050,16e3,12e3,11025,8e3,7350];i=((e[t+2]&192)>>>6)+1;const u=(e[t+2]&60)>>>2;if(u>d.length-1){const h=new Error(`invalid ADTS sampling index:${u}`);n.emit(w.ERROR,w.ERROR,{type:Be.MEDIA_ERROR,details:G.FRAG_PARSING_ERROR,fatal:!0,error:h,reason:h.message});return}return o=(e[t+2]&1)<<2,o|=(e[t+3]&192)>>>6,M.log(`manifest codec:${r}, ADTS type:${i}, samplingIndex:${u}`),/firefox/i.test(l)?u>=6?(i=5,a=new Array(4),s=u-3):(i=2,a=new Array(2),s=u):l.indexOf("android")!==-1?(i=2,a=new Array(2),s=u):(i=5,a=new Array(4),r&&(r.indexOf("mp4a.40.29")!==-1||r.indexOf("mp4a.40.5")!==-1)||!r&&u>=6?s=u-3:((r&&r.indexOf("mp4a.40.2")!==-1&&(u>=6&&o===1||/vivaldi/i.test(l))||!r&&o===1)&&(i=2,a=new Array(2)),s=u)),a[0]=i<<3,a[0]|=(u&14)>>1,a[1]|=(u&1)<<7,a[1]|=o<<3,i===5&&(a[1]|=(s&14)>>1,a[2]=(s&1)<<7,a[2]|=8,a[3]=0),{config:a,samplerate:d[u],channelCount:o,codec:"mp4a.40."+i,manifestCodec:c}}function rp(n,e){return n[e]===255&&(n[e+1]&246)===240}function ip(n,e){return n[e+1]&1?7:9}function zl(n,e){return(n[e+3]&3)<<11|n[e+4]<<3|(n[e+5]&224)>>>5}function D3(n,e){return e+5<n.length}function io(n,e){return e+1<n.length&&rp(n,e)}function B3(n,e){return D3(n,e)&&rp(n,e)&&zl(n,e)<=n.length-e}function P3(n,e){if(io(n,e)){const t=ip(n,e);if(e+t>=n.length)return!1;const r=zl(n,e);if(r<=t)return!1;const i=e+r;return i===n.length||io(n,i)}return!1}function sp(n,e,t,r,i){if(!n.samplerate){const s=I3(e,t,r,i);if(!s)return;n.config=s.config,n.samplerate=s.samplerate,n.channelCount=s.channelCount,n.codec=s.codec,n.manifestCodec=s.manifestCodec,M.log(`parsed codec:${n.codec}, rate:${s.samplerate}, channels:${s.channelCount}`)}}function op(n){return 1024*9e4/n}function O3(n,e){const t=ip(n,e);if(e+t<=n.length){const r=zl(n,e)-t;if(r>0)return{headerLength:t,frameLength:r}}}function ap(n,e,t,r,i){const s=op(n.samplerate),o=r+i*s,a=O3(e,t);let l;if(a){const{frameLength:u,headerLength:h}=a,y=h+u,m=Math.max(0,t+y-e.length);m?(l=new Uint8Array(y-h),l.set(e.subarray(t+h,e.length),0)):l=e.subarray(t+h,t+y);const A={unit:l,pts:o};return m||n.samples.push(A),{sample:A,length:y,missing:m}}const c=e.length-t;return l=new Uint8Array(c),l.set(e.subarray(t,e.length),0),{sample:{unit:l,pts:o},length:c,missing:-1}}let xs=null;const M3=[32,64,96,128,160,192,224,256,288,320,352,384,416,448,32,48,56,64,80,96,112,128,160,192,224,256,320,384,32,40,48,56,64,80,96,112,128,160,192,224,256,320,32,48,56,64,80,96,112,128,144,160,176,192,224,256,8,16,24,32,40,48,56,64,80,96,112,128,144,160],F3=[44100,48e3,32e3,22050,24e3,16e3,11025,12e3,8e3],N3=[[0,72,144,12],[0,0,0,0],[0,72,144,12],[0,144,144,12]],U3=[0,1,1,4];function lp(n,e,t,r,i){if(t+24>e.length)return;const s=cp(e,t);if(s&&t+s.frameLength<=e.length){const o=s.samplesPerFrame*9e4/s.sampleRate,a=r+i*o,l={unit:e.subarray(t,t+s.frameLength),pts:a,dts:a};return n.config=[],n.channelCount=s.channelCount,n.samplerate=s.sampleRate,n.samples.push(l),{sample:l,length:s.frameLength,missing:0}}}function cp(n,e){const t=n[e+1]>>3&3,r=n[e+1]>>1&3,i=n[e+2]>>4&15,s=n[e+2]>>2&3;if(t!==1&&i!==0&&i!==15&&s!==3){const o=n[e+2]>>1&1,a=n[e+3]>>6,l=t===3?3-r:r===3?3:4,c=M3[l*14+i-1]*1e3,u=F3[(t===3?0:t===2?1:2)*3+s],h=a===3?1:2,y=N3[t][r],m=U3[r],A=y*8*m,b=Math.floor(y*c/u+o)*m;if(xs===null){const R=(navigator.userAgent||"").match(/Chrome\/(\d+)/i);xs=R?parseInt(R[1]):0}return!!xs&&xs<=87&&r===2&&c>=224e3&&a===0&&(n[e+3]=n[e+3]|128),{sampleRate:u,channelCount:h,frameLength:b,samplesPerFrame:A}}}function ql(n,e){return n[e]===255&&(n[e+1]&224)===224&&(n[e+1]&6)!==0}function dp(n,e){return e+1<n.length&&ql(n,e)}function $3(n,e){return ql(n,e)&&4<=n.length-e}function up(n,e){if(e+1<n.length&&ql(n,e)){const r=cp(n,e);let i=4;r!=null&&r.frameLength&&(i=r.frameLength);const s=e+i;return s===n.length||dp(n,s)}return!1}class H3 extends Kl{constructor(e,t){super(),this.observer=void 0,this.config=void 0,this.observer=e,this.config=t}resetInitSegment(e,t,r,i){super.resetInitSegment(e,t,r,i),this._audioTrack={container:"audio/adts",type:"audio",id:2,pid:-1,sequenceNumber:0,segmentCodec:"aac",samples:[],manifestCodec:t,duration:i,inputTimeScale:9e4,dropped:0}}static probe(e){if(!e)return!1;const t=qi(e,0);let r=(t==null?void 0:t.length)||0;if(up(e,r))return!1;for(let i=e.length;r<i;r++)if(P3(e,r))return M.log("ADTS sync word found !"),!0;return!1}canParse(e,t){return B3(e,t)}appendFrame(e,t,r){sp(e,this.observer,t,r,e.manifestCodec);const i=ap(e,t,r,this.basePTS,this.frameIndex);if(i&&i.missing===0)return i}}const G3=/\/emsg[-/]ID3/i;class K3{constructor(e,t){this.remainderData=null,this.timeOffset=0,this.config=void 0,this.videoTrack=void 0,this.audioTrack=void 0,this.id3Track=void 0,this.txtTrack=void 0,this.config=t}resetTimeStamp(){}resetInitSegment(e,t,r,i){const s=this.videoTrack=pn("video",1),o=this.audioTrack=pn("audio",1),a=this.txtTrack=pn("text",1);if(this.id3Track=pn("id3",1),this.timeOffset=0,!(e!=null&&e.byteLength))return;const l=Hf(e);if(l.video){const{id:c,timescale:d,codec:u}=l.video;s.id=c,s.timescale=a.timescale=d,s.codec=u}if(l.audio){const{id:c,timescale:d,codec:u}=l.audio;o.id=c,o.timescale=d,o.codec=u}a.id=Nf.text,s.sampleDuration=0,s.duration=o.duration=i}resetContiguity(){this.remainderData=null}static probe(e){return l_(e)}demux(e,t){this.timeOffset=t;let r=e;const i=this.videoTrack,s=this.txtTrack;if(this.config.progressive){this.remainderData&&(r=Qt(this.remainderData,e));const a=g_(r);this.remainderData=a.remainder,i.samples=a.valid||new Uint8Array}else i.samples=r;const o=this.extractID3Track(i,t);return s.samples=Wd(t,i),{videoTrack:i,audioTrack:this.audioTrack,id3Track:o,textTrack:this.txtTrack}}flush(){const e=this.timeOffset,t=this.videoTrack,r=this.txtTrack;t.samples=this.remainderData||new Uint8Array,this.remainderData=null;const i=this.extractID3Track(t,this.timeOffset);return r.samples=Wd(e,t),{videoTrack:t,audioTrack:pn(),id3Track:i,textTrack:pn()}}extractID3Track(e,t){const r=this.id3Track;if(e.samples.length){const i=Ne(e.samples,["emsg"]);i&&i.forEach(s=>{const o=v_(s);if(G3.test(o.schemeIdUri)){const a=xe(o.presentationTime)?o.presentationTime/o.timeScale:t+o.presentationTimeDelta/o.timeScale;let l=o.eventDuration===4294967295?Number.POSITIVE_INFINITY:o.eventDuration/o.timeScale;l<=.001&&(l=Number.POSITIVE_INFINITY);const c=o.payload;r.samples.push({data:c,len:c.byteLength,dts:a,pts:a,type:en.emsg,duration:l})}})}return r}demuxSampleAes(e,t,r){return Promise.reject(new Error("The MP4 demuxer does not support SAMPLE-AES decryption"))}destroy(){}}const hp=(n,e)=>{let t=0,r=5;e+=r;const i=new Uint32Array(1),s=new Uint32Array(1),o=new Uint8Array(1);for(;r>0;){o[0]=n[e];const a=Math.min(r,8),l=8-a;s[0]=4278190080>>>24+l<<l,i[0]=(o[0]&s[0])>>l,t=t?t<<a|i[0]:i[0],e+=1,r-=a}return t};class z3 extends Kl{constructor(e){super(),this.observer=void 0,this.observer=e}resetInitSegment(e,t,r,i){super.resetInitSegment(e,t,r,i),this._audioTrack={container:"audio/ac-3",type:"audio",id:2,pid:-1,sequenceNumber:0,segmentCodec:"ac3",samples:[],manifestCodec:t,duration:i,inputTimeScale:9e4,dropped:0}}canParse(e,t){return t+64<e.length}appendFrame(e,t,r){const i=fp(e,t,r,this.basePTS,this.frameIndex);if(i!==-1)return{sample:e.samples[e.samples.length-1],length:i,missing:0}}static probe(e){if(!e)return!1;const t=qi(e,0);if(!t)return!1;const r=t.length;return e[r]===11&&e[r+1]===119&&Fl(t)!==void 0&&hp(e,r)<16}}function fp(n,e,t,r,i){if(t+8>e.length||e[t]!==11||e[t+1]!==119)return-1;const s=e[t+4]>>6;if(s>=3)return-1;const a=[48e3,44100,32e3][s],l=e[t+4]&63,d=[64,69,96,64,70,96,80,87,120,80,88,120,96,104,144,96,105,144,112,121,168,112,122,168,128,139,192,128,140,192,160,174,240,160,175,240,192,208,288,192,209,288,224,243,336,224,244,336,256,278,384,256,279,384,320,348,480,320,349,480,384,417,576,384,418,576,448,487,672,448,488,672,512,557,768,512,558,768,640,696,960,640,697,960,768,835,1152,768,836,1152,896,975,1344,896,976,1344,1024,1114,1536,1024,1115,1536,1152,1253,1728,1152,1254,1728,1280,1393,1920,1280,1394,1920][l*3+s]*2;if(t+d>e.length)return-1;const u=e[t+6]>>5;let h=0;u===2?h+=2:(u&1&&u!==1&&(h+=2),u&4&&(h+=2));const y=(e[t+6]<<8|e[t+7])>>12-h&1,A=[2,1,2,3,3,4,4,5][u]+y,b=e[t+5]>>3,S=e[t+5]&7,C=new Uint8Array([s<<6|b<<1|S>>2,(S&3)<<6|u<<3|y<<2|l>>4,l<<4&224]),R=1536/a*9e4,D=r+i*R,B=e.subarray(t,t+d);return n.config=C,n.channelCount=A,n.samplerate=a,n.samples.push({unit:B,pts:D}),d}class q3{constructor(){this.VideoSample=null}createVideoSample(e,t,r,i){return{key:e,frame:!1,pts:t,dts:r,units:[],debug:i,length:0}}getLastNalUnit(e){var t;let r=this.VideoSample,i;if((!r||r.units.length===0)&&(r=e[e.length-1]),(t=r)!=null&&t.units){const s=r.units;i=s[s.length-1]}return i}pushAccessUnit(e,t){if(e.units.length&&e.frame){if(e.pts===void 0){const r=t.samples,i=r.length;if(i){const s=r[i-1];e.pts=s.pts,e.dts=s.dts}else{t.dropped++;return}}t.samples.push(e)}e.debug.length&&M.log(e.pts+"/"+e.dts+":"+e.debug)}}class xu{constructor(e){this.data=void 0,this.bytesAvailable=void 0,this.word=void 0,this.bitsAvailable=void 0,this.data=e,this.bytesAvailable=e.byteLength,this.word=0,this.bitsAvailable=0}loadWord(){const e=this.data,t=this.bytesAvailable,r=e.byteLength-t,i=new Uint8Array(4),s=Math.min(4,t);if(s===0)throw new Error("no bytes available");i.set(e.subarray(r,r+s)),this.word=new DataView(i.buffer).getUint32(0),this.bitsAvailable=s*8,this.bytesAvailable-=s}skipBits(e){let t;e=Math.min(e,this.bytesAvailable*8+this.bitsAvailable),this.bitsAvailable>e?(this.word<<=e,this.bitsAvailable-=e):(e-=this.bitsAvailable,t=e>>3,e-=t<<3,this.bytesAvailable-=t,this.loadWord(),this.word<<=e,this.bitsAvailable-=e)}readBits(e){let t=Math.min(this.bitsAvailable,e);const r=this.word>>>32-t;if(e>32&&M.error("Cannot read more than 32 bits at a time"),this.bitsAvailable-=t,this.bitsAvailable>0)this.word<<=t;else if(this.bytesAvailable>0)this.loadWord();else throw new Error("no bits available");return t=e-t,t>0&&this.bitsAvailable?r<<t|this.readBits(t):r}skipLZ(){let e;for(e=0;e<this.bitsAvailable;++e)if(this.word&2147483648>>>e)return this.word<<=e,this.bitsAvailable-=e,e;return this.loadWord(),e+this.skipLZ()}skipUEG(){this.skipBits(1+this.skipLZ())}skipEG(){this.skipBits(1+this.skipLZ())}readUEG(){const e=this.skipLZ();return this.readBits(e+1)-1}readEG(){const e=this.readUEG();return 1&e?1+e>>>1:-1*(e>>>1)}readBoolean(){return this.readBits(1)===1}readUByte(){return this.readBits(8)}readUShort(){return this.readBits(16)}readUInt(){return this.readBits(32)}skipScalingList(e){let t=8,r=8,i;for(let s=0;s<e;s++)r!==0&&(i=this.readEG(),r=(t+i+256)%256),t=r===0?t:r}readSPS(){let e=0,t=0,r=0,i=0,s,o,a;const l=this.readUByte.bind(this),c=this.readBits.bind(this),d=this.readUEG.bind(this),u=this.readBoolean.bind(this),h=this.skipBits.bind(this),y=this.skipEG.bind(this),m=this.skipUEG.bind(this),A=this.skipScalingList.bind(this);l();const b=l();if(c(5),h(3),l(),m(),b===100||b===110||b===122||b===244||b===44||b===83||b===86||b===118||b===128){const K=d();if(K===3&&h(1),m(),m(),h(1),u())for(o=K!==3?8:12,a=0;a<o;a++)u()&&(a<6?A(16):A(64))}m();const S=d();if(S===0)d();else if(S===1)for(h(1),y(),y(),s=d(),a=0;a<s;a++)y();m(),h(1);const C=d(),R=d(),D=c(1);D===0&&h(1),h(1),u()&&(e=d(),t=d(),r=d(),i=d());let B=[1,1];if(u()&&u())switch(l()){case 1:B=[1,1];break;case 2:B=[12,11];break;case 3:B=[10,11];break;case 4:B=[16,11];break;case 5:B=[40,33];break;case 6:B=[24,11];break;case 7:B=[20,11];break;case 8:B=[32,11];break;case 9:B=[80,33];break;case 10:B=[18,11];break;case 11:B=[15,11];break;case 12:B=[64,33];break;case 13:B=[160,99];break;case 14:B=[4,3];break;case 15:B=[3,2];break;case 16:B=[2,1];break;case 255:{B=[l()<<8|l(),l()<<8|l()];break}}return{width:Math.ceil((C+1)*16-e*2-t*2),height:(2-D)*(R+1)*16-(D?2:4)*(r+i),pixelRatio:B}}readSliceType(){return this.readUByte(),this.readUEG(),this.readUEG()}}class j3 extends q3{parseAVCPES(e,t,r,i,s){const o=this.parseAVCNALu(e,r.data);let a=this.VideoSample,l,c=!1;r.data=null,a&&o.length&&!e.audFound&&(this.pushAccessUnit(a,e),a=this.VideoSample=this.createVideoSample(!1,r.pts,r.dts,"")),o.forEach(d=>{var u;switch(d.type){case 1:{let A=!1;l=!0;const b=d.data;if(c&&b.length>4){const S=new xu(b).readSliceType();(S===2||S===4||S===7||S===9)&&(A=!0)}if(A){var h;(h=a)!=null&&h.frame&&!a.key&&(this.pushAccessUnit(a,e),a=this.VideoSample=null)}a||(a=this.VideoSample=this.createVideoSample(!0,r.pts,r.dts,"")),a.frame=!0,a.key=A;break}case 5:l=!0,(u=a)!=null&&u.frame&&!a.key&&(this.pushAccessUnit(a,e),a=this.VideoSample=null),a||(a=this.VideoSample=this.createVideoSample(!0,r.pts,r.dts,"")),a.key=!0,a.frame=!0;break;case 6:{l=!0,Kf(d.data,1,r.pts,t.samples);break}case 7:{var y,m;l=!0,c=!0;const A=d.data,S=new xu(A).readSPS();if(!e.sps||e.width!==S.width||e.height!==S.height||((y=e.pixelRatio)==null?void 0:y[0])!==S.pixelRatio[0]||((m=e.pixelRatio)==null?void 0:m[1])!==S.pixelRatio[1]){e.width=S.width,e.height=S.height,e.pixelRatio=S.pixelRatio,e.sps=[A],e.duration=s;const C=A.subarray(1,4);let R="avc1.";for(let D=0;D<3;D++){let B=C[D].toString(16);B.length<2&&(B="0"+B),R+=B}e.codec=R}break}case 8:l=!0,e.pps=[d.data];break;case 9:l=!0,e.audFound=!0,a&&this.pushAccessUnit(a,e),a=this.VideoSample=this.createVideoSample(!1,r.pts,r.dts,"");break;case 12:l=!0;break;default:l=!1,a&&(a.debug+="unknown NAL "+d.type+" ");break}a&&l&&a.units.push(d)}),i&&a&&(this.pushAccessUnit(a,e),this.VideoSample=null)}parseAVCNALu(e,t){const r=t.byteLength;let i=e.naluState||0;const s=i,o=[];let a=0,l,c,d,u=-1,h=0;for(i===-1&&(u=0,h=t[0]&31,i=0,a=1);a<r;){if(l=t[a++],!i){i=l?0:1;continue}if(i===1){i=l?0:2;continue}if(!l)i=3;else if(l===1){if(c=a-i-1,u>=0){const y={data:t.subarray(u,c),type:h};o.push(y)}else{const y=this.getLastNalUnit(e.samples);y&&(s&&a<=4-s&&y.state&&(y.data=y.data.subarray(0,y.data.byteLength-s)),c>0&&(y.data=Qt(y.data,t.subarray(0,c)),y.state=0))}a<r?(d=t[a]&31,u=a,h=d,i=0):i=-1}else i=0}if(u>=0&&i>=0){const y={data:t.subarray(u,r),type:h,state:i};o.push(y)}if(o.length===0){const y=this.getLastNalUnit(e.samples);y&&(y.data=Qt(y.data,t))}return e.naluState=i,o}}class V3{constructor(e,t,r){this.keyData=void 0,this.decrypter=void 0,this.keyData=r,this.decrypter=new Hl(t,{removePKCS7Padding:!1})}decryptBuffer(e){return this.decrypter.decrypt(e,this.keyData.key.buffer,this.keyData.iv.buffer)}decryptAacSample(e,t,r){const i=e[t].unit;if(i.length<=16)return;const s=i.subarray(16,i.length-i.length%16),o=s.buffer.slice(s.byteOffset,s.byteOffset+s.length);this.decryptBuffer(o).then(a=>{const l=new Uint8Array(a);i.set(l,16),this.decrypter.isSync()||this.decryptAacSamples(e,t+1,r)})}decryptAacSamples(e,t,r){for(;;t++){if(t>=e.length){r();return}if(!(e[t].unit.length<32)&&(this.decryptAacSample(e,t,r),!this.decrypter.isSync()))return}}getAvcEncryptedData(e){const t=Math.floor((e.length-48)/160)*16+16,r=new Int8Array(t);let i=0;for(let s=32;s<e.length-16;s+=160,i+=16)r.set(e.subarray(s,s+16),i);return r}getAvcDecryptedUnit(e,t){const r=new Uint8Array(t);let i=0;for(let s=32;s<e.length-16;s+=160,i+=16)e.set(r.subarray(i,i+16),s);return e}decryptAvcSample(e,t,r,i,s){const o=zf(s.data),a=this.getAvcEncryptedData(o);this.decryptBuffer(a.buffer).then(l=>{s.data=this.getAvcDecryptedUnit(o,l),this.decrypter.isSync()||this.decryptAvcSamples(e,t,r+1,i)})}decryptAvcSamples(e,t,r,i){if(e instanceof Uint8Array)throw new Error("Cannot decrypt samples of type Uint8Array");for(;;t++,r=0){if(t>=e.length){i();return}const s=e[t].units;for(;!(r>=s.length);r++){const o=s[r];if(!(o.data.length<=48||o.type!==1&&o.type!==5)&&(this.decryptAvcSample(e,t,r,i,o),!this.decrypter.isSync()))return}}}}const bt=188;class qn{constructor(e,t,r){this.observer=void 0,this.config=void 0,this.typeSupported=void 0,this.sampleAes=null,this.pmtParsed=!1,this.audioCodec=void 0,this.videoCodec=void 0,this._duration=0,this._pmtId=-1,this._videoTrack=void 0,this._audioTrack=void 0,this._id3Track=void 0,this._txtTrack=void 0,this.aacOverFlow=null,this.remainderData=null,this.videoParser=void 0,this.observer=e,this.config=t,this.typeSupported=r,this.videoParser=new j3}static probe(e){const t=qn.syncOffset(e);return t>0&&M.warn(`MPEG2-TS detected but first sync word found @ offset ${t}`),t!==-1}static syncOffset(e){const t=e.length;let r=Math.min(bt*5,t-bt)+1,i=0;for(;i<r;){let s=!1,o=-1,a=0;for(let l=i;l<t;l+=bt)if(e[l]===71&&(t-l===bt||e[l+bt]===71)){if(a++,o===-1&&(o=l,o!==0&&(r=Math.min(o+bt*99,e.length-bt)+1)),s||(s=Ja(e,l)===0),s&&a>1&&(o===0&&a>2||l+bt>r))return o}else{if(a)return-1;break}i++}return-1}static createTrack(e,t){return{container:e==="video"||e==="audio"?"video/mp2t":void 0,type:e,id:Nf[e],pid:-1,inputTimeScale:9e4,sequenceNumber:0,samples:[],dropped:0,duration:e==="audio"?t:void 0}}resetInitSegment(e,t,r,i){this.pmtParsed=!1,this._pmtId=-1,this._videoTrack=qn.createTrack("video"),this._audioTrack=qn.createTrack("audio",i),this._id3Track=qn.createTrack("id3"),this._txtTrack=qn.createTrack("text"),this._audioTrack.segmentCodec="aac",this.aacOverFlow=null,this.remainderData=null,this.audioCodec=t,this.videoCodec=r,this._duration=i}resetTimeStamp(){}resetContiguity(){const{_audioTrack:e,_videoTrack:t,_id3Track:r}=this;e&&(e.pesData=null),t&&(t.pesData=null),r&&(r.pesData=null),this.aacOverFlow=null,this.remainderData=null}demux(e,t,r=!1,i=!1){r||(this.sampleAes=null);let s;const o=this._videoTrack,a=this._audioTrack,l=this._id3Track,c=this._txtTrack;let d=o.pid,u=o.pesData,h=a.pid,y=l.pid,m=a.pesData,A=l.pesData,b=null,S=this.pmtParsed,C=this._pmtId,R=e.length;if(this.remainderData&&(e=Qt(this.remainderData,e),R=e.length,this.remainderData=null),R<bt&&!i)return this.remainderData=e,{audioTrack:a,videoTrack:o,id3Track:l,textTrack:c};const D=Math.max(0,qn.syncOffset(e));R-=(R-D)%bt,R<e.byteLength&&!i&&(this.remainderData=new Uint8Array(e.buffer,R,e.buffer.byteLength-R));let B=0;for(let N=D;N<R;N+=bt)if(e[N]===71){const z=!!(e[N+1]&64),Z=Ja(e,N),O=(e[N+3]&48)>>4;let ee;if(O>1){if(ee=N+5+e[N+4],ee===N+bt)continue}else ee=N+4;switch(Z){case d:z&&(u&&(s=br(u))&&this.videoParser.parseAVCPES(o,c,s,!1,this._duration),u={data:[],size:0}),u&&(u.data.push(e.subarray(ee,N+bt)),u.size+=N+bt-ee);break;case h:if(z){if(m&&(s=br(m)))switch(a.segmentCodec){case"aac":this.parseAACPES(a,s);break;case"mp3":this.parseMPEGPES(a,s);break;case"ac3":this.parseAC3PES(a,s);break}m={data:[],size:0}}m&&(m.data.push(e.subarray(ee,N+bt)),m.size+=N+bt-ee);break;case y:z&&(A&&(s=br(A))&&this.parseID3PES(l,s),A={data:[],size:0}),A&&(A.data.push(e.subarray(ee,N+bt)),A.size+=N+bt-ee);break;case 0:z&&(ee+=e[ee]+1),C=this._pmtId=W3(e,ee);break;case C:{z&&(ee+=e[ee]+1);const _e=Y3(e,ee,this.typeSupported,r);d=_e.videoPid,d>0&&(o.pid=d,o.segmentCodec=_e.segmentVideoCodec),h=_e.audioPid,h>0&&(a.pid=h,a.segmentCodec=_e.segmentAudioCodec),y=_e.id3Pid,y>0&&(l.pid=y),b!==null&&!S&&(M.warn(`MPEG-TS PMT found at ${N} after unknown PID '${b}'. Backtracking to sync byte @${D} to parse all TS packets.`),b=null,N=D-188),S=this.pmtParsed=!0;break}case 17:case 8191:break;default:b=Z;break}}else B++;if(B>0){const N=new Error(`Found ${B} TS packet/s that do not start with 0x47`);this.observer.emit(w.ERROR,w.ERROR,{type:Be.MEDIA_ERROR,details:G.FRAG_PARSING_ERROR,fatal:!1,error:N,reason:N.message})}o.pesData=u,a.pesData=m,l.pesData=A;const K={audioTrack:a,videoTrack:o,id3Track:l,textTrack:c};return i&&this.extractRemainingSamples(K),K}flush(){const{remainderData:e}=this;this.remainderData=null;let t;return e?t=this.demux(e,-1,!1,!0):t={videoTrack:this._videoTrack,audioTrack:this._audioTrack,id3Track:this._id3Track,textTrack:this._txtTrack},this.extractRemainingSamples(t),this.sampleAes?this.decrypt(t,this.sampleAes):t}extractRemainingSamples(e){const{audioTrack:t,videoTrack:r,id3Track:i,textTrack:s}=e,o=r.pesData,a=t.pesData,l=i.pesData;let c;if(o&&(c=br(o))?(this.videoParser.parseAVCPES(r,s,c,!0,this._duration),r.pesData=null):r.pesData=o,a&&(c=br(a))){switch(t.segmentCodec){case"aac":this.parseAACPES(t,c);break;case"mp3":this.parseMPEGPES(t,c);break;case"ac3":this.parseAC3PES(t,c);break}t.pesData=null}else a!=null&&a.size&&M.log("last AAC PES packet truncated,might overlap between fragments"),t.pesData=a;l&&(c=br(l))?(this.parseID3PES(i,c),i.pesData=null):i.pesData=l}demuxSampleAes(e,t,r){const i=this.demux(e,r,!0,!this.config.progressive),s=this.sampleAes=new V3(this.observer,this.config,t);return this.decrypt(i,s)}decrypt(e,t){return new Promise(r=>{const{audioTrack:i,videoTrack:s}=e;i.samples&&i.segmentCodec==="aac"?t.decryptAacSamples(i.samples,0,()=>{s.samples?t.decryptAvcSamples(s.samples,0,0,()=>{r(e)}):r(e)}):s.samples&&t.decryptAvcSamples(s.samples,0,0,()=>{r(e)})})}destroy(){this._duration=0}parseAACPES(e,t){let r=0;const i=this.aacOverFlow;let s=t.data;if(i){this.aacOverFlow=null;const u=i.missing,h=i.sample.unit.byteLength;if(u===-1)s=Qt(i.sample.unit,s);else{const y=h-u;i.sample.unit.set(s.subarray(0,u),y),e.samples.push(i.sample),r=i.missing}}let o,a;for(o=r,a=s.length;o<a-1&&!io(s,o);o++);if(o!==r){let u;const h=o<a-1;h?u=`AAC PES did not start with ADTS header,offset:${o}`:u="No ADTS header found in AAC PES";const y=new Error(u);if(M.warn(`parsing error: ${u}`),this.observer.emit(w.ERROR,w.ERROR,{type:Be.MEDIA_ERROR,details:G.FRAG_PARSING_ERROR,fatal:!1,levelRetry:h,error:y,reason:u}),!h)return}sp(e,this.observer,s,o,this.audioCodec);let l;if(t.pts!==void 0)l=t.pts;else if(i){const u=op(e.samplerate);l=i.sample.pts+u}else{M.warn("[tsdemuxer]: AAC PES unknown PTS");return}let c=0,d;for(;o<a;)if(d=ap(e,s,o,l,c),o+=d.length,d.missing){this.aacOverFlow=d;break}else for(c++;o<a-1&&!io(s,o);o++);}parseMPEGPES(e,t){const r=t.data,i=r.length;let s=0,o=0;const a=t.pts;if(a===void 0){M.warn("[tsdemuxer]: MPEG PES unknown PTS");return}for(;o<i;)if(dp(r,o)){const l=lp(e,r,o,a,s);if(l)o+=l.length,s++;else break}else o++}parseAC3PES(e,t){{const r=t.data,i=t.pts;if(i===void 0){M.warn("[tsdemuxer]: AC3 PES unknown PTS");return}const s=r.length;let o=0,a=0,l;for(;a<s&&(l=fp(e,r,a,i,o++))>0;)a+=l}}parseID3PES(e,t){if(t.pts===void 0){M.warn("[tsdemuxer]: ID3 PES unknown PTS");return}const r=mt({},t,{type:this._videoTrack?en.emsg:en.audioId3,duration:Number.POSITIVE_INFINITY});e.samples.push(r)}}function Ja(n,e){return((n[e+1]&31)<<8)+n[e+2]}function W3(n,e){return(n[e+10]&31)<<8|n[e+11]}function Y3(n,e,t,r){const i={audioPid:-1,videoPid:-1,id3Pid:-1,segmentVideoCodec:"avc",segmentAudioCodec:"aac"},s=(n[e+1]&15)<<8|n[e+2],o=e+3+s-4,a=(n[e+10]&15)<<8|n[e+11];for(e+=12+a;e<o;){const l=Ja(n,e),c=(n[e+3]&15)<<8|n[e+4];switch(n[e]){case 207:if(!r){ha("ADTS AAC");break}case 15:i.audioPid===-1&&(i.audioPid=l);break;case 21:i.id3Pid===-1&&(i.id3Pid=l);break;case 219:if(!r){ha("H.264");break}case 27:i.videoPid===-1&&(i.videoPid=l,i.segmentVideoCodec="avc");break;case 3:case 4:!t.mpeg&&!t.mp3?M.log("MPEG audio found, not supported in this browser"):i.audioPid===-1&&(i.audioPid=l,i.segmentAudioCodec="mp3");break;case 193:if(!r){ha("AC-3");break}case 129:t.ac3?i.audioPid===-1&&(i.audioPid=l,i.segmentAudioCodec="ac3"):M.log("AC-3 audio found, not supported in this browser");break;case 6:if(i.audioPid===-1&&c>0){let d=e+5,u=c;for(;u>2;){switch(n[d]){case 106:t.ac3!==!0?M.log("AC-3 audio found, not supported in this browser for now"):(i.audioPid=l,i.segmentAudioCodec="ac3");break}const y=n[d+1]+2;d+=y,u-=y}}break;case 194:case 135:M.warn("Unsupported EC-3 in M2TS found");break;case 36:M.warn("Unsupported HEVC in M2TS found");break}e+=c+5}return i}function ha(n){M.log(`${n} with AES-128-CBC encryption found in unencrypted stream`)}function br(n){let e=0,t,r,i,s,o;const a=n.data;if(!n||n.size===0)return null;for(;a[0].length<19&&a.length>1;)a[0]=Qt(a[0],a[1]),a.splice(1,1);if(t=a[0],(t[0]<<16)+(t[1]<<8)+t[2]===1){if(r=(t[4]<<8)+t[5],r&&r>n.size-6)return null;const c=t[7];c&192&&(s=(t[9]&14)*536870912+(t[10]&255)*4194304+(t[11]&254)*16384+(t[12]&255)*128+(t[13]&254)/2,c&64?(o=(t[14]&14)*536870912+(t[15]&255)*4194304+(t[16]&254)*16384+(t[17]&255)*128+(t[18]&254)/2,s-o>60*9e4&&(M.warn(`${Math.round((s-o)/9e4)}s delta between PTS and DTS, align them`),s=o)):o=s),i=t[8];let d=i+9;if(n.size<=d)return null;n.size-=d;const u=new Uint8Array(n.size);for(let h=0,y=a.length;h<y;h++){t=a[h];let m=t.byteLength;if(d)if(d>m){d-=m;continue}else t=t.subarray(d),m-=d,d=0;u.set(t,e),e+=m}return r&&(r-=i+3),{data:u,pts:s,dts:o,len:r}}return null}class Q3 extends Kl{resetInitSegment(e,t,r,i){super.resetInitSegment(e,t,r,i),this._audioTrack={container:"audio/mpeg",type:"audio",id:2,pid:-1,sequenceNumber:0,segmentCodec:"mp3",samples:[],manifestCodec:t,duration:i,inputTimeScale:9e4,dropped:0}}static probe(e){if(!e)return!1;const t=qi(e,0);let r=(t==null?void 0:t.length)||0;if(t&&e[r]===11&&e[r+1]===119&&Fl(t)!==void 0&&hp(e,r)<=16)return!1;for(let i=e.length;r<i;r++)if(up(e,r))return M.log("MPEG Audio sync word found !"),!0;return!1}canParse(e,t){return $3(e,t)}appendFrame(e,t,r){if(this.basePTS!==null)return lp(e,t,r,this.basePTS,this.frameIndex)}}class Eu{static getSilentFrame(e,t){switch(e){case"mp4a.40.2":if(t===1)return new Uint8Array([0,200,0,128,35,128]);if(t===2)return new Uint8Array([33,0,73,144,2,25,0,35,128]);if(t===3)return new Uint8Array([0,200,0,128,32,132,1,38,64,8,100,0,142]);if(t===4)return new Uint8Array([0,200,0,128,32,132,1,38,64,8,100,0,128,44,128,8,2,56]);if(t===5)return new Uint8Array([0,200,0,128,32,132,1,38,64,8,100,0,130,48,4,153,0,33,144,2,56]);if(t===6)return new Uint8Array([0,200,0,128,32,132,1,38,64,8,100,0,130,48,4,153,0,33,144,2,0,178,0,32,8,224]);break;default:if(t===1)return new Uint8Array([1,64,34,128,163,78,230,128,186,8,0,0,0,28,6,241,193,10,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,94]);if(t===2)return new Uint8Array([1,64,34,128,163,94,230,128,186,8,0,0,0,0,149,0,6,241,161,10,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,94]);if(t===3)return new Uint8Array([1,64,34,128,163,94,230,128,186,8,0,0,0,0,149,0,6,241,161,10,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,94]);break}}}const Hn=Math.pow(2,32)-1;class U{static init(){U.types={avc1:[],avcC:[],btrt:[],dinf:[],dref:[],esds:[],ftyp:[],hdlr:[],mdat:[],mdhd:[],mdia:[],mfhd:[],minf:[],moof:[],moov:[],mp4a:[],".mp3":[],dac3:[],"ac-3":[],mvex:[],mvhd:[],pasp:[],sdtp:[],stbl:[],stco:[],stsc:[],stsd:[],stsz:[],stts:[],tfdt:[],tfhd:[],traf:[],trak:[],trun:[],trex:[],tkhd:[],vmhd:[],smhd:[]};let e;for(e in U.types)U.types.hasOwnProperty(e)&&(U.types[e]=[e.charCodeAt(0),e.charCodeAt(1),e.charCodeAt(2),e.charCodeAt(3)]);const t=new Uint8Array([0,0,0,0,0,0,0,0,118,105,100,101,0,0,0,0,0,0,0,0,0,0,0,0,86,105,100,101,111,72,97,110,100,108,101,114,0]),r=new Uint8Array([0,0,0,0,0,0,0,0,115,111,117,110,0,0,0,0,0,0,0,0,0,0,0,0,83,111,117,110,100,72,97,110,100,108,101,114,0]);U.HDLR_TYPES={video:t,audio:r};const i=new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,12,117,114,108,32,0,0,0,1]),s=new Uint8Array([0,0,0,0,0,0,0,0]);U.STTS=U.STSC=U.STCO=s,U.STSZ=new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0]),U.VMHD=new Uint8Array([0,0,0,1,0,0,0,0,0,0,0,0]),U.SMHD=new Uint8Array([0,0,0,0,0,0,0,0]),U.STSD=new Uint8Array([0,0,0,0,0,0,0,1]);const o=new Uint8Array([105,115,111,109]),a=new Uint8Array([97,118,99,49]),l=new Uint8Array([0,0,0,1]);U.FTYP=U.box(U.types.ftyp,o,l,o,a),U.DINF=U.box(U.types.dinf,U.box(U.types.dref,i))}static box(e,...t){let r=8,i=t.length;const s=i;for(;i--;)r+=t[i].byteLength;const o=new Uint8Array(r);for(o[0]=r>>24&255,o[1]=r>>16&255,o[2]=r>>8&255,o[3]=r&255,o.set(e,4),i=0,r=8;i<s;i++)o.set(t[i],r),r+=t[i].byteLength;return o}static hdlr(e){return U.box(U.types.hdlr,U.HDLR_TYPES[e])}static mdat(e){return U.box(U.types.mdat,e)}static mdhd(e,t){t*=e;const r=Math.floor(t/(Hn+1)),i=Math.floor(t%(Hn+1));return U.box(U.types.mdhd,new Uint8Array([1,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,3,e>>24&255,e>>16&255,e>>8&255,e&255,r>>24,r>>16&255,r>>8&255,r&255,i>>24,i>>16&255,i>>8&255,i&255,85,196,0,0]))}static mdia(e){return U.box(U.types.mdia,U.mdhd(e.timescale,e.duration),U.hdlr(e.type),U.minf(e))}static mfhd(e){return U.box(U.types.mfhd,new Uint8Array([0,0,0,0,e>>24,e>>16&255,e>>8&255,e&255]))}static minf(e){return e.type==="audio"?U.box(U.types.minf,U.box(U.types.smhd,U.SMHD),U.DINF,U.stbl(e)):U.box(U.types.minf,U.box(U.types.vmhd,U.VMHD),U.DINF,U.stbl(e))}static moof(e,t,r){return U.box(U.types.moof,U.mfhd(e),U.traf(r,t))}static moov(e){let t=e.length;const r=[];for(;t--;)r[t]=U.trak(e[t]);return U.box.apply(null,[U.types.moov,U.mvhd(e[0].timescale,e[0].duration)].concat(r).concat(U.mvex(e)))}static mvex(e){let t=e.length;const r=[];for(;t--;)r[t]=U.trex(e[t]);return U.box.apply(null,[U.types.mvex,...r])}static mvhd(e,t){t*=e;const r=Math.floor(t/(Hn+1)),i=Math.floor(t%(Hn+1)),s=new Uint8Array([1,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,3,e>>24&255,e>>16&255,e>>8&255,e&255,r>>24,r>>16&255,r>>8&255,r&255,i>>24,i>>16&255,i>>8&255,i&255,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,64,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,255,255,255,255]);return U.box(U.types.mvhd,s)}static sdtp(e){const t=e.samples||[],r=new Uint8Array(4+t.length);let i,s;for(i=0;i<t.length;i++)s=t[i].flags,r[i+4]=s.dependsOn<<4|s.isDependedOn<<2|s.hasRedundancy;return U.box(U.types.sdtp,r)}static stbl(e){return U.box(U.types.stbl,U.stsd(e),U.box(U.types.stts,U.STTS),U.box(U.types.stsc,U.STSC),U.box(U.types.stsz,U.STSZ),U.box(U.types.stco,U.STCO))}static avc1(e){let t=[],r=[],i,s,o;for(i=0;i<e.sps.length;i++)s=e.sps[i],o=s.byteLength,t.push(o>>>8&255),t.push(o&255),t=t.concat(Array.prototype.slice.call(s));for(i=0;i<e.pps.length;i++)s=e.pps[i],o=s.byteLength,r.push(o>>>8&255),r.push(o&255),r=r.concat(Array.prototype.slice.call(s));const a=U.box(U.types.avcC,new Uint8Array([1,t[3],t[4],t[5],255,224|e.sps.length].concat(t).concat([e.pps.length]).concat(r))),l=e.width,c=e.height,d=e.pixelRatio[0],u=e.pixelRatio[1];return U.box(U.types.avc1,new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,l>>8&255,l&255,c>>8&255,c&255,0,72,0,0,0,72,0,0,0,0,0,0,0,1,18,100,97,105,108,121,109,111,116,105,111,110,47,104,108,115,46,106,115,0,0,0,0,0,0,0,0,0,0,0,0,0,0,24,17,17]),a,U.box(U.types.btrt,new Uint8Array([0,28,156,128,0,45,198,192,0,45,198,192])),U.box(U.types.pasp,new Uint8Array([d>>24,d>>16&255,d>>8&255,d&255,u>>24,u>>16&255,u>>8&255,u&255])))}static esds(e){const t=e.config.length;return new Uint8Array([0,0,0,0,3,23+t,0,1,0,4,15+t,64,21,0,0,0,0,0,0,0,0,0,0,0,5].concat([t]).concat(e.config).concat([6,1,2]))}static audioStsd(e){const t=e.samplerate;return new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,e.channelCount,0,16,0,0,0,0,t>>8&255,t&255,0,0])}static mp4a(e){return U.box(U.types.mp4a,U.audioStsd(e),U.box(U.types.esds,U.esds(e)))}static mp3(e){return U.box(U.types[".mp3"],U.audioStsd(e))}static ac3(e){return U.box(U.types["ac-3"],U.audioStsd(e),U.box(U.types.dac3,e.config))}static stsd(e){return e.type==="audio"?e.segmentCodec==="mp3"&&e.codec==="mp3"?U.box(U.types.stsd,U.STSD,U.mp3(e)):e.segmentCodec==="ac3"?U.box(U.types.stsd,U.STSD,U.ac3(e)):U.box(U.types.stsd,U.STSD,U.mp4a(e)):U.box(U.types.stsd,U.STSD,U.avc1(e))}static tkhd(e){const t=e.id,r=e.duration*e.timescale,i=e.width,s=e.height,o=Math.floor(r/(Hn+1)),a=Math.floor(r%(Hn+1));return U.box(U.types.tkhd,new Uint8Array([1,0,0,7,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,3,t>>24&255,t>>16&255,t>>8&255,t&255,0,0,0,0,o>>24,o>>16&255,o>>8&255,o&255,a>>24,a>>16&255,a>>8&255,a&255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,64,0,0,0,i>>8&255,i&255,0,0,s>>8&255,s&255,0,0]))}static traf(e,t){const r=U.sdtp(e),i=e.id,s=Math.floor(t/(Hn+1)),o=Math.floor(t%(Hn+1));return U.box(U.types.traf,U.box(U.types.tfhd,new Uint8Array([0,0,0,0,i>>24,i>>16&255,i>>8&255,i&255])),U.box(U.types.tfdt,new Uint8Array([1,0,0,0,s>>24,s>>16&255,s>>8&255,s&255,o>>24,o>>16&255,o>>8&255,o&255])),U.trun(e,r.length+16+20+8+16+8+8),r)}static trak(e){return e.duration=e.duration||4294967295,U.box(U.types.trak,U.tkhd(e),U.mdia(e))}static trex(e){const t=e.id;return U.box(U.types.trex,new Uint8Array([0,0,0,0,t>>24,t>>16&255,t>>8&255,t&255,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1]))}static trun(e,t){const r=e.samples||[],i=r.length,s=12+16*i,o=new Uint8Array(s);let a,l,c,d,u,h;for(t+=8+s,o.set([e.type==="video"?1:0,0,15,1,i>>>24&255,i>>>16&255,i>>>8&255,i&255,t>>>24&255,t>>>16&255,t>>>8&255,t&255],0),a=0;a<i;a++)l=r[a],c=l.duration,d=l.size,u=l.flags,h=l.cts,o.set([c>>>24&255,c>>>16&255,c>>>8&255,c&255,d>>>24&255,d>>>16&255,d>>>8&255,d&255,u.isLeading<<2|u.dependsOn,u.isDependedOn<<6|u.hasRedundancy<<4|u.paddingValue<<1|u.isNonSync,u.degradPrio&61440,u.degradPrio&15,h>>>24&255,h>>>16&255,h>>>8&255,h&255],12+16*a);return U.box(U.types.trun,o)}static initSegment(e){U.types||U.init();const t=U.moov(e);return Qt(U.FTYP,t)}}U.types=void 0;U.HDLR_TYPES=void 0;U.STTS=void 0;U.STSC=void 0;U.STCO=void 0;U.STSZ=void 0;U.VMHD=void 0;U.SMHD=void 0;U.STSD=void 0;U.FTYP=void 0;U.DINF=void 0;const pp=9e4;function jl(n,e,t=1,r=!1){const i=n*e*t;return r?Math.round(i):i}function X3(n,e,t=1,r=!1){return jl(n,e,1/t,r)}function wi(n,e=!1){return jl(n,1e3,1/pp,e)}function Z3(n,e=1){return jl(n,pp,1/e)}const J3=10*1e3,_u=1024,ew=1152,tw=1536;let xr=null,fa=null;class Ms{constructor(e,t,r,i=""){if(this.observer=void 0,this.config=void 0,this.typeSupported=void 0,this.ISGenerated=!1,this._initPTS=null,this._initDTS=null,this.nextAvcDts=null,this.nextAudioPts=null,this.videoSampleDuration=null,this.isAudioContiguous=!1,this.isVideoContiguous=!1,this.videoTrackConfig=void 0,this.observer=e,this.config=t,this.typeSupported=r,this.ISGenerated=!1,xr===null){const o=(navigator.userAgent||"").match(/Chrome\/(\d+)/i);xr=o?parseInt(o[1]):0}if(fa===null){const s=navigator.userAgent.match(/Safari\/(\d+)/i);fa=s?parseInt(s[1]):0}}destroy(){this.config=this.videoTrackConfig=this._initPTS=this._initDTS=null}resetTimeStamp(e){M.log("[mp4-remuxer]: initPTS & initDTS reset"),this._initPTS=this._initDTS=e}resetNextTimestamp(){M.log("[mp4-remuxer]: reset next timestamp"),this.isVideoContiguous=!1,this.isAudioContiguous=!1}resetInitSegment(){M.log("[mp4-remuxer]: ISGenerated flag reset"),this.ISGenerated=!1,this.videoTrackConfig=void 0}getVideoStartPts(e){let t=!1;const r=e.reduce((i,s)=>{const o=s.pts-i;return o<-4294967296?(t=!0,Wt(i,s.pts)):o>0?i:s.pts},e[0].pts);return t&&M.debug("PTS rollover detected"),r}remux(e,t,r,i,s,o,a,l){let c,d,u,h,y,m,A=s,b=s;const S=e.pid>-1,C=t.pid>-1,R=t.samples.length,D=e.samples.length>0,B=a&&R>0||R>1;if((!S||D)&&(!C||B)||this.ISGenerated||a){if(this.ISGenerated){var N,z,Z,O;const Y=this.videoTrackConfig;Y&&(t.width!==Y.width||t.height!==Y.height||((N=t.pixelRatio)==null?void 0:N[0])!==((z=Y.pixelRatio)==null?void 0:z[0])||((Z=t.pixelRatio)==null?void 0:Z[1])!==((O=Y.pixelRatio)==null?void 0:O[1]))&&this.resetInitSegment()}else u=this.generateIS(e,t,s,o);const ee=this.isVideoContiguous;let _e=-1,ce;if(B&&(_e=nw(t.samples),!ee&&this.config.forceKeyFrameOnDiscontinuity))if(m=!0,_e>0){M.warn(`[mp4-remuxer]: Dropped ${_e} out of ${R} video samples due to a missing keyframe`);const Y=this.getVideoStartPts(t.samples);t.samples=t.samples.slice(_e),t.dropped+=_e,b+=(t.samples[0].pts-Y)/t.inputTimeScale,ce=b}else _e===-1&&(M.warn(`[mp4-remuxer]: No keyframe found out of ${R} video samples`),m=!1);if(this.ISGenerated){if(D&&B){const Y=this.getVideoStartPts(t.samples),H=(Wt(e.samples[0].pts,Y)-Y)/t.inputTimeScale;A+=Math.max(0,H),b+=Math.max(0,-H)}if(D){if(e.samplerate||(M.warn("[mp4-remuxer]: regenerate InitSegment as audio detected"),u=this.generateIS(e,t,s,o)),d=this.remuxAudio(e,A,this.isAudioContiguous,o,C||B||l===De.AUDIO?b:void 0),B){const Y=d?d.endPTS-d.startPTS:0;t.inputTimeScale||(M.warn("[mp4-remuxer]: regenerate InitSegment as video detected"),u=this.generateIS(e,t,s,o)),c=this.remuxVideo(t,b,ee,Y)}}else B&&(c=this.remuxVideo(t,b,ee,0));c&&(c.firstKeyFrame=_e,c.independent=_e!==-1,c.firstKeyFramePTS=ce)}}return this.ISGenerated&&this._initPTS&&this._initDTS&&(r.samples.length&&(y=mp(r,s,this._initPTS,this._initDTS)),i.samples.length&&(h=gp(i,s,this._initPTS))),{audio:d,video:c,initSegment:u,independent:m,text:h,id3:y}}generateIS(e,t,r,i){const s=e.samples,o=t.samples,a=this.typeSupported,l={},c=this._initPTS;let d=!c||i,u="audio/mp4",h,y,m;if(d&&(h=y=1/0),e.config&&s.length){switch(e.timescale=e.samplerate,e.segmentCodec){case"mp3":a.mpeg?(u="audio/mpeg",e.codec=""):a.mp3&&(e.codec="mp3");break;case"ac3":e.codec="ac-3";break}l.audio={id:"audio",container:u,codec:e.codec,initSegment:e.segmentCodec==="mp3"&&a.mpeg?new Uint8Array(0):U.initSegment([e]),metadata:{channelCount:e.channelCount}},d&&(m=e.inputTimeScale,!c||m!==c.timescale?h=y=s[0].pts-Math.round(m*r):d=!1)}if(t.sps&&t.pps&&o.length){if(t.timescale=t.inputTimeScale,l.video={id:"main",container:"video/mp4",codec:t.codec,initSegment:U.initSegment([t]),metadata:{width:t.width,height:t.height}},d)if(m=t.inputTimeScale,!c||m!==c.timescale){const A=this.getVideoStartPts(o),b=Math.round(m*r);y=Math.min(y,Wt(o[0].dts,A)-b),h=Math.min(h,A-b)}else d=!1;this.videoTrackConfig={width:t.width,height:t.height,pixelRatio:t.pixelRatio}}if(Object.keys(l).length)return this.ISGenerated=!0,d?(this._initPTS={baseTime:h,timescale:m},this._initDTS={baseTime:y,timescale:m}):h=m=void 0,{tracks:l,initPTS:h,timescale:m}}remuxVideo(e,t,r,i){const s=e.inputTimeScale,o=e.samples,a=[],l=o.length,c=this._initPTS;let d=this.nextAvcDts,u=8,h=this.videoSampleDuration,y,m,A=Number.POSITIVE_INFINITY,b=Number.NEGATIVE_INFINITY,S=!1;if(!r||d===null){const j=t*s,de=o[0].pts-Wt(o[0].dts,o[0].pts);xr&&d!==null&&Math.abs(j-de-d)<15e3?r=!0:d=j-de}const C=c.baseTime*s/c.timescale;for(let j=0;j<l;j++){const de=o[j];de.pts=Wt(de.pts-C,d),de.dts=Wt(de.dts-C,d),de.dts<o[j>0?j-1:j].dts&&(S=!0)}S&&o.sort(function(j,de){const Re=j.dts-de.dts,Se=j.pts-de.pts;return Re||Se}),y=o[0].dts,m=o[o.length-1].dts;const R=m-y,D=R?Math.round(R/(l-1)):h||e.inputTimeScale/30;if(r){const j=y-d,de=j>D,Re=j<-1;if((de||Re)&&(de?M.warn(`AVC: ${wi(j,!0)} ms (${j}dts) hole between fragments detected at ${t.toFixed(3)}`):M.warn(`AVC: ${wi(-j,!0)} ms (${j}dts) overlapping between fragments detected at ${t.toFixed(3)}`),!Re||d>=o[0].pts||xr)){y=d;const Se=o[0].pts-j;if(de)o[0].dts=y,o[0].pts=Se;else for(let $e=0;$e<o.length&&!(o[$e].dts>Se);$e++)o[$e].dts-=j,o[$e].pts-=j;M.log(`Video: Initial PTS/DTS adjusted: ${wi(Se,!0)}/${wi(y,!0)}, delta: ${wi(j,!0)} ms`)}}y=Math.max(0,y);let B=0,K=0,N=y;for(let j=0;j<l;j++){const de=o[j],Re=de.units,Se=Re.length;let $e=0;for(let Xe=0;Xe<Se;Xe++)$e+=Re[Xe].data.length;K+=$e,B+=Se,de.length=$e,de.dts<N?(de.dts=N,N+=D/4|0||1):N=de.dts,A=Math.min(de.pts,A),b=Math.max(de.pts,b)}m=o[l-1].dts;const z=K+4*B+8;let Z;try{Z=new Uint8Array(z)}catch(j){this.observer.emit(w.ERROR,w.ERROR,{type:Be.MUX_ERROR,details:G.REMUX_ALLOC_ERROR,fatal:!1,error:j,bytes:z,reason:`fail allocating video mdat ${z}`});return}const O=new DataView(Z.buffer);O.setUint32(0,z),Z.set(U.types.mdat,4);let ee=!1,_e=Number.POSITIVE_INFINITY,ce=Number.POSITIVE_INFINITY,Y=Number.NEGATIVE_INFINITY,re=Number.NEGATIVE_INFINITY;for(let j=0;j<l;j++){const de=o[j],Re=de.units;let Se=0;for(let it=0,Fe=Re.length;it<Fe;it++){const V=Re[it],ge=V.data,ue=V.data.byteLength;O.setUint32(u,ue),u+=4,Z.set(ge,u),u+=ue,Se+=4+ue}let $e;if(j<l-1)h=o[j+1].dts-de.dts,$e=o[j+1].pts-de.pts;else{const it=this.config,Fe=j>0?de.dts-o[j-1].dts:D;if($e=j>0?de.pts-o[j-1].pts:D,it.stretchShortVideoTrack&&this.nextAudioPts!==null){const V=Math.floor(it.maxBufferHole*s),ge=(i?A+i*s:this.nextAudioPts)-de.pts;ge>V?(h=ge-Fe,h<0?h=Fe:ee=!0,M.log(`[mp4-remuxer]: It is approximately ${ge/90} ms to the next segment; using duration ${h/90} ms for the last video frame.`)):h=Fe}else h=Fe}const Xe=Math.round(de.pts-de.dts);_e=Math.min(_e,h),Y=Math.max(Y,h),ce=Math.min(ce,$e),re=Math.max(re,$e),a.push(new wu(de.key,h,Se,Xe))}if(a.length){if(xr){if(xr<70){const j=a[0].flags;j.dependsOn=2,j.isNonSync=0}}else if(fa&&re-ce<Y-_e&&D/Y<.025&&a[0].cts===0){M.warn("Found irregular gaps in sample duration. Using PTS instead of DTS to determine MP4 sample duration.");let j=y;for(let de=0,Re=a.length;de<Re;de++){const Se=j+a[de].duration,$e=j+a[de].cts;if(de<Re-1){const Xe=Se+a[de+1].cts;a[de].duration=Xe-$e}else a[de].duration=de?a[de-1].duration:D;a[de].cts=0,j=Se}}}h=ee||!h?D:h,this.nextAvcDts=d=m+h,this.videoSampleDuration=h,this.isVideoContiguous=!0;const H=U.moof(e.sequenceNumber++,y,mt({},e,{samples:a})),Q="video",ae={data1:H,data2:Z,startPTS:A/s,endPTS:(b+h)/s,startDTS:y/s,endDTS:d/s,type:Q,hasAudio:!1,hasVideo:!0,nb:a.length,dropped:e.dropped};return e.samples=[],e.dropped=0,ae}getSamplesPerFrame(e){switch(e.segmentCodec){case"mp3":return ew;case"ac3":return tw;default:return _u}}remuxAudio(e,t,r,i,s){const o=e.inputTimeScale,a=e.samplerate?e.samplerate:o,l=o/a,c=this.getSamplesPerFrame(e),d=c*l,u=this._initPTS,h=e.segmentCodec==="mp3"&&this.typeSupported.mpeg,y=[],m=s!==void 0;let A=e.samples,b=h?0:8,S=this.nextAudioPts||-1;const C=t*o,R=u.baseTime*o/u.timescale;if(this.isAudioContiguous=r=r||A.length&&S>0&&(i&&Math.abs(C-S)<9e3||Math.abs(Wt(A[0].pts-R,C)-S)<20*d),A.forEach(function(H){H.pts=Wt(H.pts-R,C)}),!r||S<0){if(A=A.filter(H=>H.pts>=0),!A.length)return;s===0?S=0:i&&!m?S=Math.max(0,C):S=A[0].pts}if(e.segmentCodec==="aac"){const H=this.config.maxAudioFramesDrift;for(let Q=0,ae=S;Q<A.length;Q++){const j=A[Q],de=j.pts,Re=de-ae,Se=Math.abs(1e3*Re/o);if(Re<=-H*d&&m)Q===0&&(M.warn(`Audio frame @ ${(de/o).toFixed(3)}s overlaps nextAudioPts by ${Math.round(1e3*Re/o)} ms.`),this.nextAudioPts=S=ae=de);else if(Re>=H*d&&Se<J3&&m){let $e=Math.round(Re/d);ae=de-$e*d,ae<0&&($e--,ae+=d),Q===0&&(this.nextAudioPts=S=ae),M.warn(`[mp4-remuxer]: Injecting ${$e} audio frame @ ${(ae/o).toFixed(3)}s due to ${Math.round(1e3*Re/o)} ms gap.`);for(let Xe=0;Xe<$e;Xe++){const it=Math.max(ae,0);let Fe=Eu.getSilentFrame(e.manifestCodec||e.codec,e.channelCount);Fe||(M.log("[mp4-remuxer]: Unable to get silent frame for given audio codec; duplicating last frame instead."),Fe=j.unit.subarray()),A.splice(Q,0,{unit:Fe,pts:it}),ae+=d,Q++}}j.pts=ae,ae+=d}}let D=null,B=null,K,N=0,z=A.length;for(;z--;)N+=A[z].unit.byteLength;for(let H=0,Q=A.length;H<Q;H++){const ae=A[H],j=ae.unit;let de=ae.pts;if(B!==null){const Se=y[H-1];Se.duration=Math.round((de-B)/l)}else if(r&&e.segmentCodec==="aac"&&(de=S),D=de,N>0){N+=b;try{K=new Uint8Array(N)}catch(Se){this.observer.emit(w.ERROR,w.ERROR,{type:Be.MUX_ERROR,details:G.REMUX_ALLOC_ERROR,fatal:!1,error:Se,bytes:N,reason:`fail allocating audio mdat ${N}`});return}h||(new DataView(K.buffer).setUint32(0,N),K.set(U.types.mdat,4))}else return;K.set(j,b);const Re=j.byteLength;b+=Re,y.push(new wu(!0,c,Re,0)),B=de}const Z=y.length;if(!Z)return;const O=y[y.length-1];this.nextAudioPts=S=B+l*O.duration;const ee=h?new Uint8Array(0):U.moof(e.sequenceNumber++,D/l,mt({},e,{samples:y}));e.samples=[];const _e=D/o,ce=S/o,re={data1:ee,data2:K,startPTS:_e,endPTS:ce,startDTS:_e,endDTS:ce,type:"audio",hasAudio:!0,hasVideo:!1,nb:Z};return this.isAudioContiguous=!0,re}remuxEmptyAudio(e,t,r,i){const s=e.inputTimeScale,o=e.samplerate?e.samplerate:s,a=s/o,l=this.nextAudioPts,c=this._initDTS,d=c.baseTime*9e4/c.timescale,u=(l!==null?l:i.startDTS*s)+d,h=i.endDTS*s+d,y=a*_u,m=Math.ceil((h-u)/y),A=Eu.getSilentFrame(e.manifestCodec||e.codec,e.channelCount);if(M.warn("[mp4-remuxer]: remux empty Audio"),!A){M.trace("[mp4-remuxer]: Unable to remuxEmptyAudio since we were unable to get a silent frame for given audio codec");return}const b=[];for(let S=0;S<m;S++){const C=u+S*y;b.push({unit:A,pts:C,dts:C})}return e.samples=b,this.remuxAudio(e,t,r,!1)}}function Wt(n,e){let t;if(e===null)return n;for(e<n?t=-8589934592:t=8589934592;Math.abs(n-e)>4294967296;)n+=t;return n}function nw(n){for(let e=0;e<n.length;e++)if(n[e].key)return e;return-1}function mp(n,e,t,r){const i=n.samples.length;if(!i)return;const s=n.inputTimeScale;for(let a=0;a<i;a++){const l=n.samples[a];l.pts=Wt(l.pts-t.baseTime*s/t.timescale,e*s)/s,l.dts=Wt(l.dts-r.baseTime*s/r.timescale,e*s)/s}const o=n.samples;return n.samples=[],{samples:o}}function gp(n,e,t){const r=n.samples.length;if(!r)return;const i=n.inputTimeScale;for(let o=0;o<r;o++){const a=n.samples[o];a.pts=Wt(a.pts-t.baseTime*i/t.timescale,e*i)/i}n.samples.sort((o,a)=>o.pts-a.pts);const s=n.samples;return n.samples=[],{samples:s}}class wu{constructor(e,t,r,i){this.size=void 0,this.duration=void 0,this.cts=void 0,this.flags=void 0,this.duration=t,this.size=r,this.cts=i,this.flags={isLeading:0,isDependedOn:0,hasRedundancy:0,degradPrio:0,dependsOn:e?2:1,isNonSync:e?0:1}}}class rw{constructor(){this.emitInitSegment=!1,this.audioCodec=void 0,this.videoCodec=void 0,this.initData=void 0,this.initPTS=null,this.initTracks=void 0,this.lastEndTime=null}destroy(){}resetTimeStamp(e){this.initPTS=e,this.lastEndTime=null}resetNextTimestamp(){this.lastEndTime=null}resetInitSegment(e,t,r,i){this.audioCodec=t,this.videoCodec=r,this.generateInitSegment(u_(e,i)),this.emitInitSegment=!0}generateInitSegment(e){let{audioCodec:t,videoCodec:r}=this;if(!(e!=null&&e.byteLength)){this.initTracks=void 0,this.initData=void 0;return}const i=this.initData=Hf(e);i.audio&&(t=Su(i.audio,et.AUDIO)),i.video&&(r=Su(i.video,et.VIDEO));const s={};i.audio&&i.video?s.audiovideo={container:"video/mp4",codec:t+","+r,initSegment:e,id:"main"}:i.audio?s.audio={container:"audio/mp4",codec:t,initSegment:e,id:"audio"}:i.video?s.video={container:"video/mp4",codec:r,initSegment:e,id:"main"}:M.warn("[passthrough-remuxer.ts]: initSegment does not contain moov or trak boxes."),this.initTracks=s}remux(e,t,r,i,s,o){var a,l;let{initPTS:c,lastEndTime:d}=this;const u={audio:void 0,video:void 0,text:i,id3:r,initSegment:void 0};xe(d)||(d=this.lastEndTime=s||0);const h=t.samples;if(!(h!=null&&h.length))return u;const y={initPTS:void 0,timescale:1};let m=this.initData;if((a=m)!=null&&a.length||(this.generateInitSegment(h),m=this.initData),!((l=m)!=null&&l.length))return M.warn("[passthrough-remuxer.ts]: Failed to generate initSegment."),u;this.emitInitSegment&&(y.tracks=this.initTracks,this.emitInitSegment=!1);const A=f_(h,m),b=h_(m,h),S=b===null?s:b;(iw(c,S,s,A)||y.timescale!==c.timescale&&o)&&(y.initPTS=S-s,c&&c.timescale===1&&M.warn(`Adjusting initPTS by ${y.initPTS-c.baseTime}`),this.initPTS=c={baseTime:y.initPTS,timescale:1});const C=e?S-c.baseTime/c.timescale:d,R=C+A;m_(m,h,c.baseTime/c.timescale),A>0?this.lastEndTime=R:(M.warn("Duration parsed from mp4 should be greater than zero"),this.resetNextTimestamp());const D=!!m.audio,B=!!m.video;let K="";D&&(K+="audio"),B&&(K+="video");const N={data1:h,startPTS:C,startDTS:C,endPTS:R,endDTS:R,type:K,hasAudio:D,hasVideo:B,nb:1,dropped:0};return u.audio=N.type==="audio"?N:void 0,u.video=N.type!=="audio"?N:void 0,u.initSegment=y,u.id3=mp(r,s,c,c),i.samples.length&&(u.text=gp(i,s,c)),u}}function iw(n,e,t,r){if(n===null)return!0;const i=Math.max(r,1),s=e-n.baseTime/n.timescale;return Math.abs(s-t)>i}function Su(n,e){const t=n==null?void 0:n.codec;if(t&&t.length>4)return t;if(e===et.AUDIO){if(t==="ec-3"||t==="ac-3"||t==="alac")return t;if(t==="fLaC"||t==="Opus")return Zs(t,!1);const r="mp4a.40.5";return M.info(`Parsed audio codec "${t}" or audio object type not handled. Using "${r}"`),r}return M.warn(`Unhandled video codec "${t}"`),t==="hvc1"||t==="hev1"?"hvc1.1.6.L120.90":t==="av01"?"av01.0.04M.08":"avc1.42e01e"}let Rn;try{Rn=self.performance.now.bind(self.performance)}catch{M.debug("Unable to use Performance API on this environment"),Rn=$r==null?void 0:$r.Date.now}const Fs=[{demux:K3,remux:rw},{demux:qn,remux:Ms},{demux:H3,remux:Ms},{demux:Q3,remux:Ms}];Fs.splice(2,0,{demux:z3,remux:Ms});class Tu{constructor(e,t,r,i,s){this.async=!1,this.observer=void 0,this.typeSupported=void 0,this.config=void 0,this.vendor=void 0,this.id=void 0,this.demuxer=void 0,this.remuxer=void 0,this.decrypter=void 0,this.probe=void 0,this.decryptionPromise=null,this.transmuxConfig=void 0,this.currentTransmuxState=void 0,this.observer=e,this.typeSupported=t,this.config=r,this.vendor=i,this.id=s}configure(e){this.transmuxConfig=e,this.decrypter&&this.decrypter.reset()}push(e,t,r,i){const s=r.transmuxing;s.executeStart=Rn();let o=new Uint8Array(e);const{currentTransmuxState:a,transmuxConfig:l}=this;i&&(this.currentTransmuxState=i);const{contiguous:c,discontinuity:d,trackSwitch:u,accurateTimeOffset:h,timeOffset:y,initSegmentChange:m}=i||a,{audioCodec:A,videoCodec:b,defaultInitPts:S,duration:C,initSegmentData:R}=l,D=sw(o,t);if(D&&D.method==="AES-128"){const z=this.getDecrypter();if(z.isSync()){let Z=z.softwareDecrypt(o,D.key.buffer,D.iv.buffer);if(r.part>-1&&(Z=z.flush()),!Z)return s.executeEnd=Rn(),pa(r);o=new Uint8Array(Z)}else return this.decryptionPromise=z.webCryptoDecrypt(o,D.key.buffer,D.iv.buffer).then(Z=>{const O=this.push(Z,null,r);return this.decryptionPromise=null,O}),this.decryptionPromise}const B=this.needsProbing(d,u);if(B){const z=this.configureTransmuxer(o);if(z)return M.warn(`[transmuxer] ${z.message}`),this.observer.emit(w.ERROR,w.ERROR,{type:Be.MEDIA_ERROR,details:G.FRAG_PARSING_ERROR,fatal:!1,error:z,reason:z.message}),s.executeEnd=Rn(),pa(r)}(d||u||m||B)&&this.resetInitSegment(R,A,b,C,t),(d||m||B)&&this.resetInitialTimestamp(S),c||this.resetContiguity();const K=this.transmux(o,D,y,h,r),N=this.currentTransmuxState;return N.contiguous=!0,N.discontinuity=!1,N.trackSwitch=!1,s.executeEnd=Rn(),K}flush(e){const t=e.transmuxing;t.executeStart=Rn();const{decrypter:r,currentTransmuxState:i,decryptionPromise:s}=this;if(s)return s.then(()=>this.flush(e));const o=[],{timeOffset:a}=i;if(r){const u=r.flush();u&&o.push(this.push(u,null,e))}const{demuxer:l,remuxer:c}=this;if(!l||!c)return t.executeEnd=Rn(),[pa(e)];const d=l.flush(a);return Ns(d)?d.then(u=>(this.flushRemux(o,u,e),o)):(this.flushRemux(o,d,e),o)}flushRemux(e,t,r){const{audioTrack:i,videoTrack:s,id3Track:o,textTrack:a}=t,{accurateTimeOffset:l,timeOffset:c}=this.currentTransmuxState;M.log(`[transmuxer.ts]: Flushed fragment ${r.sn}${r.part>-1?" p: "+r.part:""} of level ${r.level}`);const d=this.remuxer.remux(i,s,o,a,c,l,!0,this.id);e.push({remuxResult:d,chunkMeta:r}),r.transmuxing.executeEnd=Rn()}resetInitialTimestamp(e){const{demuxer:t,remuxer:r}=this;!t||!r||(t.resetTimeStamp(e),r.resetTimeStamp(e))}resetContiguity(){const{demuxer:e,remuxer:t}=this;!e||!t||(e.resetContiguity(),t.resetNextTimestamp())}resetInitSegment(e,t,r,i,s){const{demuxer:o,remuxer:a}=this;!o||!a||(o.resetInitSegment(e,t,r,i),a.resetInitSegment(e,t,r,s))}destroy(){this.demuxer&&(this.demuxer.destroy(),this.demuxer=void 0),this.remuxer&&(this.remuxer.destroy(),this.remuxer=void 0)}transmux(e,t,r,i,s){let o;return t&&t.method==="SAMPLE-AES"?o=this.transmuxSampleAes(e,t,r,i,s):o=this.transmuxUnencrypted(e,r,i,s),o}transmuxUnencrypted(e,t,r,i){const{audioTrack:s,videoTrack:o,id3Track:a,textTrack:l}=this.demuxer.demux(e,t,!1,!this.config.progressive);return{remuxResult:this.remuxer.remux(s,o,a,l,t,r,!1,this.id),chunkMeta:i}}transmuxSampleAes(e,t,r,i,s){return this.demuxer.demuxSampleAes(e,t,r).then(o=>({remuxResult:this.remuxer.remux(o.audioTrack,o.videoTrack,o.id3Track,o.textTrack,r,i,!1,this.id),chunkMeta:s}))}configureTransmuxer(e){const{config:t,observer:r,typeSupported:i,vendor:s}=this;let o;for(let h=0,y=Fs.length;h<y;h++){var a;if((a=Fs[h].demux)!=null&&a.probe(e)){o=Fs[h];break}}if(!o)return new Error("Failed to find demuxer by probing fragment data");const l=this.demuxer,c=this.remuxer,d=o.remux,u=o.demux;(!c||!(c instanceof d))&&(this.remuxer=new d(r,t,i,s)),(!l||!(l instanceof u))&&(this.demuxer=new u(r,t,i),this.probe=u.probe)}needsProbing(e,t){return!this.demuxer||!this.remuxer||e||t}getDecrypter(){let e=this.decrypter;return e||(e=this.decrypter=new Hl(this.config)),e}}function sw(n,e){let t=null;return n.byteLength>0&&(e==null?void 0:e.key)!=null&&e.iv!==null&&e.method!=null&&(t=e),t}const pa=n=>({remuxResult:{},chunkMeta:n});function Ns(n){return"then"in n&&n.then instanceof Function}class ow{constructor(e,t,r,i,s){this.audioCodec=void 0,this.videoCodec=void 0,this.initSegmentData=void 0,this.duration=void 0,this.defaultInitPts=void 0,this.audioCodec=e,this.videoCodec=t,this.initSegmentData=r,this.duration=i,this.defaultInitPts=s||null}}class aw{constructor(e,t,r,i,s,o){this.discontinuity=void 0,this.contiguous=void 0,this.accurateTimeOffset=void 0,this.trackSwitch=void 0,this.timeOffset=void 0,this.initSegmentChange=void 0,this.discontinuity=e,this.contiguous=t,this.accurateTimeOffset=r,this.trackSwitch=i,this.timeOffset=s,this.initSegmentChange=o}}var yp={exports:{}};(function(n){var e=Object.prototype.hasOwnProperty,t="~";function r(){}Object.create&&(r.prototype=Object.create(null),new r().__proto__||(t=!1));function i(l,c,d){this.fn=l,this.context=c,this.once=d||!1}function s(l,c,d,u,h){if(typeof d!="function")throw new TypeError("The listener must be a function");var y=new i(d,u||l,h),m=t?t+c:c;return l._events[m]?l._events[m].fn?l._events[m]=[l._events[m],y]:l._events[m].push(y):(l._events[m]=y,l._eventsCount++),l}function o(l,c){--l._eventsCount===0?l._events=new r:delete l._events[c]}function a(){this._events=new r,this._eventsCount=0}a.prototype.eventNames=function(){var c=[],d,u;if(this._eventsCount===0)return c;for(u in d=this._events)e.call(d,u)&&c.push(t?u.slice(1):u);return Object.getOwnPropertySymbols?c.concat(Object.getOwnPropertySymbols(d)):c},a.prototype.listeners=function(c){var d=t?t+c:c,u=this._events[d];if(!u)return[];if(u.fn)return[u.fn];for(var h=0,y=u.length,m=new Array(y);h<y;h++)m[h]=u[h].fn;return m},a.prototype.listenerCount=function(c){var d=t?t+c:c,u=this._events[d];return u?u.fn?1:u.length:0},a.prototype.emit=function(c,d,u,h,y,m){var A=t?t+c:c;if(!this._events[A])return!1;var b=this._events[A],S=arguments.length,C,R;if(b.fn){switch(b.once&&this.removeListener(c,b.fn,void 0,!0),S){case 1:return b.fn.call(b.context),!0;case 2:return b.fn.call(b.context,d),!0;case 3:return b.fn.call(b.context,d,u),!0;case 4:return b.fn.call(b.context,d,u,h),!0;case 5:return b.fn.call(b.context,d,u,h,y),!0;case 6:return b.fn.call(b.context,d,u,h,y,m),!0}for(R=1,C=new Array(S-1);R<S;R++)C[R-1]=arguments[R];b.fn.apply(b.context,C)}else{var D=b.length,B;for(R=0;R<D;R++)switch(b[R].once&&this.removeListener(c,b[R].fn,void 0,!0),S){case 1:b[R].fn.call(b[R].context);break;case 2:b[R].fn.call(b[R].context,d);break;case 3:b[R].fn.call(b[R].context,d,u);break;case 4:b[R].fn.call(b[R].context,d,u,h);break;default:if(!C)for(B=1,C=new Array(S-1);B<S;B++)C[B-1]=arguments[B];b[R].fn.apply(b[R].context,C)}}return!0},a.prototype.on=function(c,d,u){return s(this,c,d,u,!1)},a.prototype.once=function(c,d,u){return s(this,c,d,u,!0)},a.prototype.removeListener=function(c,d,u,h){var y=t?t+c:c;if(!this._events[y])return this;if(!d)return o(this,y),this;var m=this._events[y];if(m.fn)m.fn===d&&(!h||m.once)&&(!u||m.context===u)&&o(this,y);else{for(var A=0,b=[],S=m.length;A<S;A++)(m[A].fn!==d||h&&!m[A].once||u&&m[A].context!==u)&&b.push(m[A]);b.length?this._events[y]=b.length===1?b[0]:b:o(this,y)}return this},a.prototype.removeAllListeners=function(c){var d;return c?(d=t?t+c:c,this._events[d]&&o(this,d)):(this._events=new r,this._eventsCount=0),this},a.prototype.off=a.prototype.removeListener,a.prototype.addListener=a.prototype.on,a.prefixed=t,a.EventEmitter=a,n.exports=a})(yp);var lw=yp.exports,Vl=D2(lw);class Ap{constructor(e,t,r,i){this.error=null,this.hls=void 0,this.id=void 0,this.observer=void 0,this.frag=null,this.part=null,this.useWorker=void 0,this.workerContext=null,this.onwmsg=void 0,this.transmuxer=null,this.onTransmuxComplete=void 0,this.onFlush=void 0;const s=e.config;this.hls=e,this.id=t,this.useWorker=!!s.enableWorker,this.onTransmuxComplete=r,this.onFlush=i;const o=(d,u)=>{u=u||{},u.frag=this.frag,u.id=this.id,d===w.ERROR&&(this.error=u.error),this.hls.trigger(d,u)};this.observer=new Vl,this.observer.on(w.FRAG_DECRYPTED,o),this.observer.on(w.ERROR,o);const a=Yr(s.preferManagedMediaSource)||{isTypeSupported:()=>!1},l={mpeg:a.isTypeSupported("audio/mpeg"),mp3:a.isTypeSupported('audio/mp4; codecs="mp3"'),ac3:a.isTypeSupported('audio/mp4; codecs="ac-3"')},c=navigator.vendor;if(this.useWorker&&typeof Worker<"u"&&(s.workerPath||C3())){try{s.workerPath?(M.log(`loading Web Worker ${s.workerPath} for "${t}"`),this.workerContext=k3(s.workerPath)):(M.log(`injecting Web Worker for "${t}"`),this.workerContext=L3()),this.onwmsg=h=>this.onWorkerMessage(h);const{worker:u}=this.workerContext;u.addEventListener("message",this.onwmsg),u.onerror=h=>{const y=new Error(`${h.message}  (${h.filename}:${h.lineno})`);s.enableWorker=!1,M.warn(`Error in "${t}" Web Worker, fallback to inline`),this.hls.trigger(w.ERROR,{type:Be.OTHER_ERROR,details:G.INTERNAL_EXCEPTION,fatal:!1,event:"demuxerWorker",error:y})},u.postMessage({cmd:"init",typeSupported:l,vendor:c,id:t,config:JSON.stringify(s)})}catch(u){M.warn(`Error setting up "${t}" Web Worker, fallback to inline`,u),this.resetWorker(),this.error=null,this.transmuxer=new Tu(this.observer,l,s,c,t)}return}this.transmuxer=new Tu(this.observer,l,s,c,t)}resetWorker(){if(this.workerContext){const{worker:e,objectURL:t}=this.workerContext;t&&self.URL.revokeObjectURL(t),e.removeEventListener("message",this.onwmsg),e.onerror=null,e.terminate(),this.workerContext=null}}destroy(){if(this.workerContext)this.resetWorker(),this.onwmsg=void 0;else{const t=this.transmuxer;t&&(t.destroy(),this.transmuxer=null)}const e=this.observer;e&&e.removeAllListeners(),this.frag=null,this.observer=null,this.hls=null}push(e,t,r,i,s,o,a,l,c,d){var u,h;c.transmuxing.start=self.performance.now();const{transmuxer:y}=this,m=o?o.start:s.start,A=s.decryptdata,b=this.frag,S=!(b&&s.cc===b.cc),C=!(b&&c.level===b.level),R=b?c.sn-b.sn:-1,D=this.part?c.part-this.part.index:-1,B=R===0&&c.id>1&&c.id===(b==null?void 0:b.stats.chunkCount),K=!C&&(R===1||R===0&&(D===1||B&&D<=0)),N=self.performance.now();(C||R||s.stats.parsing.start===0)&&(s.stats.parsing.start=N),o&&(D||!K)&&(o.stats.parsing.start=N);const z=!(b&&((u=s.initSegment)==null?void 0:u.url)===((h=b.initSegment)==null?void 0:h.url)),Z=new aw(S,K,l,C,m,z);if(!K||S||z){M.log(`[transmuxer-interface, ${s.type}]: Starting new transmux session for sn: ${c.sn} p: ${c.part} level: ${c.level} id: ${c.id}
        discontinuity: ${S}
        trackSwitch: ${C}
        contiguous: ${K}
        accurateTimeOffset: ${l}
        timeOffset: ${m}
        initSegmentChange: ${z}`);const O=new ow(r,i,t,a,d);this.configureTransmuxer(O)}if(this.frag=s,this.part=o,this.workerContext)this.workerContext.worker.postMessage({cmd:"demux",data:e,decryptdata:A,chunkMeta:c,state:Z},e instanceof ArrayBuffer?[e]:[]);else if(y){const O=y.push(e,A,c,Z);Ns(O)?(y.async=!0,O.then(ee=>{this.handleTransmuxComplete(ee)}).catch(ee=>{this.transmuxerError(ee,c,"transmuxer-interface push error")})):(y.async=!1,this.handleTransmuxComplete(O))}}flush(e){e.transmuxing.start=self.performance.now();const{transmuxer:t}=this;if(this.workerContext)this.workerContext.worker.postMessage({cmd:"flush",chunkMeta:e});else if(t){let r=t.flush(e);Ns(r)||t.async?(Ns(r)||(r=Promise.resolve(r)),r.then(s=>{this.handleFlushResult(s,e)}).catch(s=>{this.transmuxerError(s,e,"transmuxer-interface flush error")})):this.handleFlushResult(r,e)}}transmuxerError(e,t,r){this.hls&&(this.error=e,this.hls.trigger(w.ERROR,{type:Be.MEDIA_ERROR,details:G.FRAG_PARSING_ERROR,chunkMeta:t,fatal:!1,error:e,err:e,reason:r}))}handleFlushResult(e,t){e.forEach(r=>{this.handleTransmuxComplete(r)}),this.onFlush(t)}onWorkerMessage(e){const t=e.data,r=this.hls;switch(t.event){case"init":{var i;const s=(i=this.workerContext)==null?void 0:i.objectURL;s&&self.URL.revokeObjectURL(s);break}case"transmuxComplete":{this.handleTransmuxComplete(t.data);break}case"flush":{this.onFlush(t.data);break}case"workerLog":M[t.data.logType]&&M[t.data.logType](t.data.message);break;default:{t.data=t.data||{},t.data.frag=this.frag,t.data.id=this.id,r.trigger(t.event,t.data);break}}}configureTransmuxer(e){const{transmuxer:t}=this;this.workerContext?this.workerContext.worker.postMessage({cmd:"configure",config:e}):t&&t.configure(e)}handleTransmuxComplete(e){e.chunkMeta.transmuxing.end=self.performance.now(),this.onTransmuxComplete(e)}}function vp(n,e){if(n.length!==e.length)return!1;for(let t=0;t<n.length;t++)if(!Gr(n[t].attrs,e[t].attrs))return!1;return!0}function Gr(n,e,t){const r=n["STABLE-RENDITION-ID"];return r&&!t?r===e["STABLE-RENDITION-ID"]:!(t||["LANGUAGE","NAME","CHARACTERISTICS","AUTOSELECT","DEFAULT","FORCED","ASSOC-LANGUAGE"]).some(i=>n[i]!==e[i])}function el(n,e){return e.label.toLowerCase()===n.name.toLowerCase()&&(!e.language||e.language.toLowerCase()===(n.lang||"").toLowerCase())}const Cu=100;class cw extends Gl{constructor(e,t,r){super(e,t,r,"[audio-stream-controller]",De.AUDIO),this.videoBuffer=null,this.videoTrackCC=-1,this.waitingVideoCC=-1,this.bufferedTrack=null,this.switchingTrack=null,this.trackId=-1,this.waitingData=null,this.mainDetails=null,this.flushing=!1,this.bufferFlushed=!1,this.cachedTrackLoadedData=null,this._registerListeners()}onHandlerDestroying(){this._unregisterListeners(),super.onHandlerDestroying(),this.mainDetails=null,this.bufferedTrack=null,this.switchingTrack=null}_registerListeners(){const{hls:e}=this;e.on(w.MEDIA_ATTACHED,this.onMediaAttached,this),e.on(w.MEDIA_DETACHING,this.onMediaDetaching,this),e.on(w.MANIFEST_LOADING,this.onManifestLoading,this),e.on(w.LEVEL_LOADED,this.onLevelLoaded,this),e.on(w.AUDIO_TRACKS_UPDATED,this.onAudioTracksUpdated,this),e.on(w.AUDIO_TRACK_SWITCHING,this.onAudioTrackSwitching,this),e.on(w.AUDIO_TRACK_LOADED,this.onAudioTrackLoaded,this),e.on(w.ERROR,this.onError,this),e.on(w.BUFFER_RESET,this.onBufferReset,this),e.on(w.BUFFER_CREATED,this.onBufferCreated,this),e.on(w.BUFFER_FLUSHING,this.onBufferFlushing,this),e.on(w.BUFFER_FLUSHED,this.onBufferFlushed,this),e.on(w.INIT_PTS_FOUND,this.onInitPtsFound,this),e.on(w.FRAG_BUFFERED,this.onFragBuffered,this)}_unregisterListeners(){const{hls:e}=this;e.off(w.MEDIA_ATTACHED,this.onMediaAttached,this),e.off(w.MEDIA_DETACHING,this.onMediaDetaching,this),e.off(w.MANIFEST_LOADING,this.onManifestLoading,this),e.off(w.LEVEL_LOADED,this.onLevelLoaded,this),e.off(w.AUDIO_TRACKS_UPDATED,this.onAudioTracksUpdated,this),e.off(w.AUDIO_TRACK_SWITCHING,this.onAudioTrackSwitching,this),e.off(w.AUDIO_TRACK_LOADED,this.onAudioTrackLoaded,this),e.off(w.ERROR,this.onError,this),e.off(w.BUFFER_RESET,this.onBufferReset,this),e.off(w.BUFFER_CREATED,this.onBufferCreated,this),e.off(w.BUFFER_FLUSHING,this.onBufferFlushing,this),e.off(w.BUFFER_FLUSHED,this.onBufferFlushed,this),e.off(w.INIT_PTS_FOUND,this.onInitPtsFound,this),e.off(w.FRAG_BUFFERED,this.onFragBuffered,this)}onInitPtsFound(e,{frag:t,id:r,initPTS:i,timescale:s}){if(r==="main"){const o=t.cc;this.initPTS[t.cc]={baseTime:i,timescale:s},this.log(`InitPTS for cc: ${o} found from main: ${i}`),this.videoTrackCC=o,this.state===ne.WAITING_INIT_PTS&&this.tick()}}startLoad(e){if(!this.levels){this.startPosition=e,this.state=ne.STOPPED;return}const t=this.lastCurrentTime;this.stopLoad(),this.setInterval(Cu),t>0&&e===-1?(this.log(`Override startPosition with lastCurrentTime @${t.toFixed(3)}`),e=t,this.state=ne.IDLE):(this.loadedmetadata=!1,this.state=ne.WAITING_TRACK),this.nextLoadPosition=this.startPosition=this.lastCurrentTime=e,this.tick()}doTick(){switch(this.state){case ne.IDLE:this.doTickIdle();break;case ne.WAITING_TRACK:{var e;const{levels:r,trackId:i}=this,s=r==null||(e=r[i])==null?void 0:e.details;if(s){if(this.waitForCdnTuneIn(s))break;this.state=ne.WAITING_INIT_PTS}break}case ne.FRAG_LOADING_WAITING_RETRY:{var t;const r=performance.now(),i=this.retryDate;if(!i||r>=i||(t=this.media)!=null&&t.seeking){const{levels:s,trackId:o}=this;this.log("RetryDate reached, switch back to IDLE state"),this.resetStartWhenNotLoaded((s==null?void 0:s[o])||null),this.state=ne.IDLE}break}case ne.WAITING_INIT_PTS:{const r=this.waitingData;if(r){const{frag:i,part:s,cache:o,complete:a}=r;if(this.initPTS[i.cc]!==void 0){this.waitingData=null,this.waitingVideoCC=-1,this.state=ne.FRAG_LOADING;const l=o.flush(),c={frag:i,part:s,payload:l,networkDetails:null};this._handleFragmentLoadProgress(c),a&&super._handleFragmentLoadComplete(c)}else if(this.videoTrackCC!==this.waitingVideoCC)this.log(`Waiting fragment cc (${i.cc}) cancelled because video is at cc ${this.videoTrackCC}`),this.clearWaitingFragment();else{const l=this.getLoadPosition(),c=ot.bufferInfo(this.mediaBuffer,l,this.config.maxBufferHole);Za(c.end,this.config.maxFragLookUpTolerance,i)<0&&(this.log(`Waiting fragment cc (${i.cc}) @ ${i.start} cancelled because another fragment at ${c.end} is needed`),this.clearWaitingFragment())}}else this.state=ne.IDLE}}this.onTickEnd()}clearWaitingFragment(){const e=this.waitingData;e&&(this.fragmentTracker.removeFragment(e.frag),this.waitingData=null,this.waitingVideoCC=-1,this.state=ne.IDLE)}resetLoadingState(){this.clearWaitingFragment(),super.resetLoadingState()}onTickEnd(){const{media:e}=this;e!=null&&e.readyState&&(this.lastCurrentTime=e.currentTime)}doTickIdle(){const{hls:e,levels:t,media:r,trackId:i}=this,s=e.config;if(!r&&(this.startFragRequested||!s.startFragPrefetch)||!(t!=null&&t[i]))return;const o=t[i],a=o.details;if(!a||a.live&&this.levelLastLoaded!==o||this.waitForCdnTuneIn(a)){this.state=ne.WAITING_TRACK;return}const l=this.mediaBuffer?this.mediaBuffer:this.media;this.bufferFlushed&&l&&(this.bufferFlushed=!1,this.afterBufferFlushed(l,et.AUDIO,De.AUDIO));const c=this.getFwdBufferInfo(l,De.AUDIO);if(c===null)return;const{bufferedTrack:d,switchingTrack:u}=this;if(!u&&this._streamEnded(c,a)){e.trigger(w.BUFFER_EOS,{type:"audio"}),this.state=ne.ENDED;return}const h=this.getFwdBufferInfo(this.videoBuffer?this.videoBuffer:this.media,De.MAIN),y=c.len,m=this.getMaxBufferLength(h==null?void 0:h.len),A=a.fragments,b=A[0].start;let S=this.flushing?this.getLoadPosition():c.end;if(u&&r){const B=this.getLoadPosition();d&&!Gr(u.attrs,d.attrs)&&(S=B),a.PTSKnown&&B<b&&(c.end>b||c.nextStart)&&(this.log("Alt audio track ahead of main track, seek to start of alt audio track"),r.currentTime=b+.05)}if(y>=m&&!u&&S<A[A.length-1].start)return;let C=this.getNextFragment(S,a),R=!1;if(C&&this.isLoopLoading(C,S)&&(R=!!C.gap,C=this.getNextFragmentLoopLoading(C,a,c,De.MAIN,m)),!C){this.bufferFlushed=!0;return}const D=h&&C.start>h.end+a.targetduration;if(D||!(h!=null&&h.len)&&c.len){const B=this.getAppendedFrag(C.start,De.MAIN);if(B===null||(R||(R=!!B.gap||!!D&&h.len===0),D&&!R||R&&c.nextStart&&c.nextStart<B.end))return}this.loadFragment(C,o,S)}getMaxBufferLength(e){const t=super.getMaxBufferLength();return e?Math.min(Math.max(t,e),this.config.maxMaxBufferLength):t}onMediaDetaching(){this.videoBuffer=null,this.bufferFlushed=this.flushing=!1,super.onMediaDetaching()}onAudioTracksUpdated(e,{audioTracks:t}){this.resetTransmuxer(),this.levels=t.map(r=>new Hr(r))}onAudioTrackSwitching(e,t){const r=!!t.url;this.trackId=t.id;const{fragCurrent:i}=this;i&&(i.abortRequests(),this.removeUnbufferedFrags(i.start)),this.resetLoadingState(),r?this.setInterval(Cu):this.resetTransmuxer(),r?(this.switchingTrack=t,this.state=ne.IDLE,this.flushAudioIfNeeded(t)):(this.switchingTrack=null,this.bufferedTrack=t,this.state=ne.STOPPED),this.tick()}onManifestLoading(){this.fragmentTracker.removeAllFragments(),this.startPosition=this.lastCurrentTime=0,this.bufferFlushed=this.flushing=!1,this.levels=this.mainDetails=this.waitingData=this.bufferedTrack=this.cachedTrackLoadedData=this.switchingTrack=null,this.startFragRequested=!1,this.trackId=this.videoTrackCC=this.waitingVideoCC=-1}onLevelLoaded(e,t){this.mainDetails=t.details,this.cachedTrackLoadedData!==null&&(this.hls.trigger(w.AUDIO_TRACK_LOADED,this.cachedTrackLoadedData),this.cachedTrackLoadedData=null)}onAudioTrackLoaded(e,t){var r;if(this.mainDetails==null){this.cachedTrackLoadedData=t;return}const{levels:i}=this,{details:s,id:o}=t;if(!i){this.warn(`Audio tracks were reset while loading level ${o}`);return}this.log(`Audio track ${o} loaded [${s.startSN},${s.endSN}]${s.lastPartSn?`[part-${s.lastPartSn}-${s.lastPartIndex}]`:""},duration:${s.totalduration}`);const a=i[o];let l=0;if(s.live||(r=a.details)!=null&&r.live){this.checkLiveUpdate(s);const d=this.mainDetails;if(s.deltaUpdateFailed||!d)return;if(!a.details&&s.hasProgramDateTime&&d.hasProgramDateTime)ro(s,d),l=s.fragments[0].start;else{var c;l=this.alignPlaylists(s,a.details,(c=this.levelLastLoaded)==null?void 0:c.details)}}a.details=s,this.levelLastLoaded=a,!this.startFragRequested&&(this.mainDetails||!s.live)&&this.setStartPosition(this.mainDetails||s,l),this.state===ne.WAITING_TRACK&&!this.waitForCdnTuneIn(s)&&(this.state=ne.IDLE),this.tick()}_handleFragmentLoadProgress(e){var t;const{frag:r,part:i,payload:s}=e,{config:o,trackId:a,levels:l}=this;if(!l){this.warn(`Audio tracks were reset while fragment load was in progress. Fragment ${r.sn} of level ${r.level} will not be buffered`);return}const c=l[a];if(!c){this.warn("Audio track is undefined on fragment load progress");return}const d=c.details;if(!d){this.warn("Audio track details undefined on fragment load progress"),this.removeUnbufferedFrags(r.start);return}const u=o.defaultAudioCodec||c.audioCodec||"mp4a.40.2";let h=this.transmuxer;h||(h=this.transmuxer=new Ap(this.hls,De.AUDIO,this._handleTransmuxComplete.bind(this),this._handleTransmuxerFlush.bind(this)));const y=this.initPTS[r.cc],m=(t=r.initSegment)==null?void 0:t.data;if(y!==void 0){const b=i?i.index:-1,S=b!==-1,C=new $l(r.level,r.sn,r.stats.chunkCount,s.byteLength,b,S);h.push(s,m,u,"",r,i,d.totalduration,!1,C,y)}else{this.log(`Unknown video PTS for cc ${r.cc}, waiting for video PTS before demuxing audio frag ${r.sn} of [${d.startSN} ,${d.endSN}],track ${a}`);const{cache:A}=this.waitingData=this.waitingData||{frag:r,part:i,cache:new np,complete:!1};A.push(new Uint8Array(s)),this.waitingVideoCC=this.videoTrackCC,this.state=ne.WAITING_INIT_PTS}}_handleFragmentLoadComplete(e){if(this.waitingData){this.waitingData.complete=!0;return}super._handleFragmentLoadComplete(e)}onBufferReset(){this.mediaBuffer=this.videoBuffer=null,this.loadedmetadata=!1}onBufferCreated(e,t){const r=t.tracks.audio;r&&(this.mediaBuffer=r.buffer||null),t.tracks.video&&(this.videoBuffer=t.tracks.video.buffer||null)}onFragBuffered(e,t){const{frag:r,part:i}=t;if(r.type!==De.AUDIO){if(!this.loadedmetadata&&r.type===De.MAIN){const s=this.videoBuffer||this.media;s&&ot.getBuffered(s).length&&(this.loadedmetadata=!0)}return}if(this.fragContextChanged(r)){this.warn(`Fragment ${r.sn}${i?" p: "+i.index:""} of level ${r.level} finished buffering, but was aborted. state: ${this.state}, audioSwitch: ${this.switchingTrack?this.switchingTrack.name:"false"}`);return}if(r.sn!=="initSegment"){this.fragPrevious=r;const s=this.switchingTrack;s&&(this.bufferedTrack=s,this.switchingTrack=null,this.hls.trigger(w.AUDIO_TRACK_SWITCHED,_t({},s)))}this.fragBufferedComplete(r,i)}onError(e,t){var r;if(t.fatal){this.state=ne.ERROR;return}switch(t.details){case G.FRAG_GAP:case G.FRAG_PARSING_ERROR:case G.FRAG_DECRYPT_ERROR:case G.FRAG_LOAD_ERROR:case G.FRAG_LOAD_TIMEOUT:case G.KEY_LOAD_ERROR:case G.KEY_LOAD_TIMEOUT:this.onFragmentOrKeyLoadError(De.AUDIO,t);break;case G.AUDIO_TRACK_LOAD_ERROR:case G.AUDIO_TRACK_LOAD_TIMEOUT:case G.LEVEL_PARSING_ERROR:!t.levelRetry&&this.state===ne.WAITING_TRACK&&((r=t.context)==null?void 0:r.type)===ze.AUDIO_TRACK&&(this.state=ne.IDLE);break;case G.BUFFER_APPEND_ERROR:case G.BUFFER_FULL_ERROR:if(!t.parent||t.parent!=="audio")return;if(t.details===G.BUFFER_APPEND_ERROR){this.resetLoadingState();return}this.reduceLengthAndFlushBuffer(t)&&(this.bufferedTrack=null,super.flushMainBuffer(0,Number.POSITIVE_INFINITY,"audio"));break;case G.INTERNAL_EXCEPTION:this.recoverWorkerError(t);break}}onBufferFlushing(e,{type:t}){t!==et.VIDEO&&(this.flushing=!0)}onBufferFlushed(e,{type:t}){if(t!==et.VIDEO){this.flushing=!1,this.bufferFlushed=!0,this.state===ne.ENDED&&(this.state=ne.IDLE);const r=this.mediaBuffer||this.media;r&&(this.afterBufferFlushed(r,t,De.AUDIO),this.tick())}}_handleTransmuxComplete(e){var t;const r="audio",{hls:i}=this,{remuxResult:s,chunkMeta:o}=e,a=this.getCurrentContext(o);if(!a){this.resetWhenMissingContext(o);return}const{frag:l,part:c,level:d}=a,{details:u}=d,{audio:h,text:y,id3:m,initSegment:A}=s;if(this.fragContextChanged(l)||!u){this.fragmentTracker.removeFragment(l);return}if(this.state=ne.PARSING,this.switchingTrack&&h&&this.completeAudioSwitch(this.switchingTrack),A!=null&&A.tracks){const b=l.initSegment||l;this._bufferInitSegment(d,A.tracks,b,o),i.trigger(w.FRAG_PARSING_INIT_SEGMENT,{frag:b,id:r,tracks:A.tracks})}if(h){const{startPTS:b,endPTS:S,startDTS:C,endDTS:R}=h;c&&(c.elementaryStreams[et.AUDIO]={startPTS:b,endPTS:S,startDTS:C,endDTS:R}),l.setElementaryStreamInfo(et.AUDIO,b,S,C,R),this.bufferFragmentData(h,l,c,o)}if(m!=null&&(t=m.samples)!=null&&t.length){const b=mt({id:r,frag:l,details:u},m);i.trigger(w.FRAG_PARSING_METADATA,b)}if(y){const b=mt({id:r,frag:l,details:u},y);i.trigger(w.FRAG_PARSING_USERDATA,b)}}_bufferInitSegment(e,t,r,i){if(this.state!==ne.PARSING)return;t.video&&delete t.video;const s=t.audio;if(!s)return;s.id="audio";const o=e.audioCodec;this.log(`Init audio buffer, container:${s.container}, codecs[level/parsed]=[${o}/${s.codec}]`),o&&o.split(",").length===1&&(s.levelCodec=o),this.hls.trigger(w.BUFFER_CODECS,t);const a=s.initSegment;if(a!=null&&a.byteLength){const l={type:"audio",frag:r,part:null,chunkMeta:i,parent:r.type,data:a};this.hls.trigger(w.BUFFER_APPENDING,l)}this.tickImmediate()}loadFragment(e,t,r){const i=this.fragmentTracker.getState(e);if(this.fragCurrent=e,this.switchingTrack||i===xt.NOT_LOADED||i===xt.PARTIAL){var s;if(e.sn==="initSegment")this._loadInitSegment(e,t);else if((s=t.details)!=null&&s.live&&!this.initPTS[e.cc]){this.log(`Waiting for video PTS in continuity counter ${e.cc} of live stream before loading audio fragment ${e.sn} of level ${this.trackId}`),this.state=ne.WAITING_INIT_PTS;const o=this.mainDetails;o&&o.fragments[0].start!==t.details.fragments[0].start&&ro(t.details,o)}else this.startFragRequested=!0,super.loadFragment(e,t,r)}else this.clearTrackerIfNeeded(e)}flushAudioIfNeeded(e){const{media:t,bufferedTrack:r}=this,i=r==null?void 0:r.attrs,s=e.attrs;t&&i&&(i.CHANNELS!==s.CHANNELS||r.name!==e.name||r.lang!==e.lang)&&(this.log("Switching audio track : flushing all audio"),super.flushMainBuffer(0,Number.POSITIVE_INFINITY,"audio"),this.bufferedTrack=null)}completeAudioSwitch(e){const{hls:t}=this;this.flushAudioIfNeeded(e),this.bufferedTrack=e,this.switchingTrack=null,t.trigger(w.AUDIO_TRACK_SWITCHED,_t({},e))}}class dw extends Ul{constructor(e){super(e,"[audio-track-controller]"),this.tracks=[],this.groupIds=null,this.tracksInGroup=[],this.trackId=-1,this.currentTrack=null,this.selectDefaultTrack=!0,this.registerListeners()}registerListeners(){const{hls:e}=this;e.on(w.MANIFEST_LOADING,this.onManifestLoading,this),e.on(w.MANIFEST_PARSED,this.onManifestParsed,this),e.on(w.LEVEL_LOADING,this.onLevelLoading,this),e.on(w.LEVEL_SWITCHING,this.onLevelSwitching,this),e.on(w.AUDIO_TRACK_LOADED,this.onAudioTrackLoaded,this),e.on(w.ERROR,this.onError,this)}unregisterListeners(){const{hls:e}=this;e.off(w.MANIFEST_LOADING,this.onManifestLoading,this),e.off(w.MANIFEST_PARSED,this.onManifestParsed,this),e.off(w.LEVEL_LOADING,this.onLevelLoading,this),e.off(w.LEVEL_SWITCHING,this.onLevelSwitching,this),e.off(w.AUDIO_TRACK_LOADED,this.onAudioTrackLoaded,this),e.off(w.ERROR,this.onError,this)}destroy(){this.unregisterListeners(),this.tracks.length=0,this.tracksInGroup.length=0,this.currentTrack=null,super.destroy()}onManifestLoading(){this.tracks=[],this.tracksInGroup=[],this.groupIds=null,this.currentTrack=null,this.trackId=-1,this.selectDefaultTrack=!0}onManifestParsed(e,t){this.tracks=t.audioTracks||[]}onAudioTrackLoaded(e,t){const{id:r,groupId:i,details:s}=t,o=this.tracksInGroup[r];if(!o||o.groupId!==i){this.warn(`Audio track with id:${r} and group:${i} not found in active group ${o==null?void 0:o.groupId}`);return}const a=o.details;o.details=t.details,this.log(`Audio track ${r} "${o.name}" lang:${o.lang} group:${i} loaded [${s.startSN}-${s.endSN}]`),r===this.trackId&&this.playlistLoaded(r,t,a)}onLevelLoading(e,t){this.switchLevel(t.level)}onLevelSwitching(e,t){this.switchLevel(t.level)}switchLevel(e){const t=this.hls.levels[e];if(!t)return;const r=t.audioGroups||null,i=this.groupIds;let s=this.currentTrack;if(!r||(i==null?void 0:i.length)!==(r==null?void 0:r.length)||r!=null&&r.some(a=>(i==null?void 0:i.indexOf(a))===-1)){this.groupIds=r,this.trackId=-1,this.currentTrack=null;const a=this.tracks.filter(h=>!r||r.indexOf(h.groupId)!==-1);if(a.length)this.selectDefaultTrack&&!a.some(h=>h.default)&&(this.selectDefaultTrack=!1),a.forEach((h,y)=>{h.id=y});else if(!s&&!this.tracksInGroup.length)return;this.tracksInGroup=a;const l=this.hls.config.audioPreference;if(!s&&l){const h=An(l,a,Ar);if(h>-1)s=a[h];else{const y=An(l,this.tracks);s=this.tracks[y]}}let c=this.findTrackId(s);c===-1&&s&&(c=this.findTrackId(null));const d={audioTracks:a};this.log(`Updating audio tracks, ${a.length} track(s) found in group(s): ${r==null?void 0:r.join(",")}`),this.hls.trigger(w.AUDIO_TRACKS_UPDATED,d);const u=this.trackId;if(c!==-1&&u===-1)this.setAudioTrack(c);else if(a.length&&u===-1){var o;const h=new Error(`No audio track selected for current audio group-ID(s): ${(o=this.groupIds)==null?void 0:o.join(",")} track count: ${a.length}`);this.warn(h.message),this.hls.trigger(w.ERROR,{type:Be.MEDIA_ERROR,details:G.AUDIO_TRACK_LOAD_ERROR,fatal:!0,error:h})}}else this.shouldReloadPlaylist(s)&&this.setAudioTrack(this.trackId)}onError(e,t){t.fatal||!t.context||t.context.type===ze.AUDIO_TRACK&&t.context.id===this.trackId&&(!this.groupIds||this.groupIds.indexOf(t.context.groupId)!==-1)&&(this.requestScheduled=-1,this.checkRetry(t))}get allAudioTracks(){return this.tracks}get audioTracks(){return this.tracksInGroup}get audioTrack(){return this.trackId}set audioTrack(e){this.selectDefaultTrack=!1,this.setAudioTrack(e)}setAudioOption(e){const t=this.hls;if(t.config.audioPreference=e,e){const r=this.allAudioTracks;if(this.selectDefaultTrack=!1,r.length){const i=this.currentTrack;if(i&&Rr(e,i,Ar))return i;const s=An(e,this.tracksInGroup,Ar);if(s>-1){const o=this.tracksInGroup[s];return this.setAudioTrack(s),o}else if(i){let o=t.loadLevel;o===-1&&(o=t.firstAutoLevel);const a=d3(e,t.levels,r,o,Ar);if(a===-1)return null;t.nextLoadLevel=a}if(e.channels||e.audioCodec){const o=An(e,r);if(o>-1)return r[o]}}}return null}setAudioTrack(e){const t=this.tracksInGroup;if(e<0||e>=t.length){this.warn(`Invalid audio track id: ${e}`);return}this.clearTimer(),this.selectDefaultTrack=!1;const r=this.currentTrack,i=t[e],s=i.details&&!i.details.live;if(e===this.trackId&&i===r&&s||(this.log(`Switching to audio-track ${e} "${i.name}" lang:${i.lang} group:${i.groupId} channels:${i.channels}`),this.trackId=e,this.currentTrack=i,this.hls.trigger(w.AUDIO_TRACK_SWITCHING,_t({},i)),s))return;const o=this.switchParams(i.url,r==null?void 0:r.details);this.loadPlaylist(o)}findTrackId(e){const t=this.tracksInGroup;for(let r=0;r<t.length;r++){const i=t[r];if(!(this.selectDefaultTrack&&!i.default)&&(!e||Rr(e,i,Ar)))return r}if(e){const{name:r,lang:i,assocLang:s,characteristics:o,audioCodec:a,channels:l}=e;for(let c=0;c<t.length;c++){const d=t[c];if(Rr({name:r,lang:i,assocLang:s,characteristics:o,audioCodec:a,channels:l},d,Ar))return c}for(let c=0;c<t.length;c++){const d=t[c];if(Gr(e.attrs,d.attrs,["LANGUAGE","ASSOC-LANGUAGE","CHARACTERISTICS"]))return c}for(let c=0;c<t.length;c++){const d=t[c];if(Gr(e.attrs,d.attrs,["LANGUAGE"]))return c}}return-1}loadPlaylist(e){const t=this.currentTrack;if(this.shouldLoadPlaylist(t)&&t){super.loadPlaylist();const r=t.id,i=t.groupId;let s=t.url;if(e)try{s=e.addDirectives(s)}catch(o){this.warn(`Could not construct new URL with HLS Delivery Directives: ${o}`)}this.log(`loading audio-track playlist ${r} "${t.name}" lang:${t.lang} group:${i}`),this.clearTimer(),this.hls.trigger(w.AUDIO_TRACK_LOADING,{url:s,id:r,groupId:i,deliveryDirectives:e||null})}}}const Lu=500;class uw extends Gl{constructor(e,t,r){super(e,t,r,"[subtitle-stream-controller]",De.SUBTITLE),this.currentTrackId=-1,this.tracksBuffered=[],this.mainDetails=null,this._registerListeners()}onHandlerDestroying(){this._unregisterListeners(),super.onHandlerDestroying(),this.mainDetails=null}_registerListeners(){const{hls:e}=this;e.on(w.MEDIA_ATTACHED,this.onMediaAttached,this),e.on(w.MEDIA_DETACHING,this.onMediaDetaching,this),e.on(w.MANIFEST_LOADING,this.onManifestLoading,this),e.on(w.LEVEL_LOADED,this.onLevelLoaded,this),e.on(w.ERROR,this.onError,this),e.on(w.SUBTITLE_TRACKS_UPDATED,this.onSubtitleTracksUpdated,this),e.on(w.SUBTITLE_TRACK_SWITCH,this.onSubtitleTrackSwitch,this),e.on(w.SUBTITLE_TRACK_LOADED,this.onSubtitleTrackLoaded,this),e.on(w.SUBTITLE_FRAG_PROCESSED,this.onSubtitleFragProcessed,this),e.on(w.BUFFER_FLUSHING,this.onBufferFlushing,this),e.on(w.FRAG_BUFFERED,this.onFragBuffered,this)}_unregisterListeners(){const{hls:e}=this;e.off(w.MEDIA_ATTACHED,this.onMediaAttached,this),e.off(w.MEDIA_DETACHING,this.onMediaDetaching,this),e.off(w.MANIFEST_LOADING,this.onManifestLoading,this),e.off(w.LEVEL_LOADED,this.onLevelLoaded,this),e.off(w.ERROR,this.onError,this),e.off(w.SUBTITLE_TRACKS_UPDATED,this.onSubtitleTracksUpdated,this),e.off(w.SUBTITLE_TRACK_SWITCH,this.onSubtitleTrackSwitch,this),e.off(w.SUBTITLE_TRACK_LOADED,this.onSubtitleTrackLoaded,this),e.off(w.SUBTITLE_FRAG_PROCESSED,this.onSubtitleFragProcessed,this),e.off(w.BUFFER_FLUSHING,this.onBufferFlushing,this),e.off(w.FRAG_BUFFERED,this.onFragBuffered,this)}startLoad(e){this.stopLoad(),this.state=ne.IDLE,this.setInterval(Lu),this.nextLoadPosition=this.startPosition=this.lastCurrentTime=e,this.tick()}onManifestLoading(){this.mainDetails=null,this.fragmentTracker.removeAllFragments()}onMediaDetaching(){this.tracksBuffered=[],super.onMediaDetaching()}onLevelLoaded(e,t){this.mainDetails=t.details}onSubtitleFragProcessed(e,t){const{frag:r,success:i}=t;if(this.fragPrevious=r,this.state=ne.IDLE,!i)return;const s=this.tracksBuffered[this.currentTrackId];if(!s)return;let o;const a=r.start;for(let c=0;c<s.length;c++)if(a>=s[c].start&&a<=s[c].end){o=s[c];break}const l=r.start+r.duration;o?o.end=l:(o={start:a,end:l},s.push(o)),this.fragmentTracker.fragBuffered(r),this.fragBufferedComplete(r,null)}onBufferFlushing(e,t){const{startOffset:r,endOffset:i}=t;if(r===0&&i!==Number.POSITIVE_INFINITY){const s=i-1;if(s<=0)return;t.endOffsetSubtitles=Math.max(0,s),this.tracksBuffered.forEach(o=>{for(let a=0;a<o.length;){if(o[a].end<=s){o.shift();continue}else if(o[a].start<s)o[a].start=s;else break;a++}}),this.fragmentTracker.removeFragmentsInRange(r,s,De.SUBTITLE)}}onFragBuffered(e,t){if(!this.loadedmetadata&&t.frag.type===De.MAIN){var r;(r=this.media)!=null&&r.buffered.length&&(this.loadedmetadata=!0)}}onError(e,t){const r=t.frag;(r==null?void 0:r.type)===De.SUBTITLE&&(this.fragCurrent&&this.fragCurrent.abortRequests(),this.state!==ne.STOPPED&&(this.state=ne.IDLE))}onSubtitleTracksUpdated(e,{subtitleTracks:t}){if(this.levels&&vp(this.levels,t)){this.levels=t.map(r=>new Hr(r));return}this.tracksBuffered=[],this.levels=t.map(r=>{const i=new Hr(r);return this.tracksBuffered[i.id]=[],i}),this.fragmentTracker.removeFragmentsInRange(0,Number.POSITIVE_INFINITY,De.SUBTITLE),this.fragPrevious=null,this.mediaBuffer=null}onSubtitleTrackSwitch(e,t){var r;if(this.currentTrackId=t.id,!((r=this.levels)!=null&&r.length)||this.currentTrackId===-1){this.clearInterval();return}const i=this.levels[this.currentTrackId];i!=null&&i.details?this.mediaBuffer=this.mediaBufferTimeRanges:this.mediaBuffer=null,i&&this.setInterval(Lu)}onSubtitleTrackLoaded(e,t){var r;const{currentTrackId:i,levels:s}=this,{details:o,id:a}=t;if(!s){this.warn(`Subtitle tracks were reset while loading level ${a}`);return}const l=s[i];if(a>=s.length||a!==i||!l)return;this.log(`Subtitle track ${a} loaded [${o.startSN},${o.endSN}]${o.lastPartSn?`[part-${o.lastPartSn}-${o.lastPartIndex}]`:""},duration:${o.totalduration}`),this.mediaBuffer=this.mediaBufferTimeRanges;let c=0;if(o.live||(r=l.details)!=null&&r.live){const u=this.mainDetails;if(o.deltaUpdateFailed||!u)return;const h=u.fragments[0];if(!l.details)o.hasProgramDateTime&&u.hasProgramDateTime?(ro(o,u),c=o.fragments[0].start):h&&(c=h.start,Xa(o,c));else{var d;c=this.alignPlaylists(o,l.details,(d=this.levelLastLoaded)==null?void 0:d.details),c===0&&h&&(c=h.start,Xa(o,c))}}l.details=o,this.levelLastLoaded=l,!this.startFragRequested&&(this.mainDetails||!o.live)&&this.setStartPosition(this.mainDetails||o,c),this.tick(),o.live&&!this.fragCurrent&&this.media&&this.state===ne.IDLE&&(no(null,o.fragments,this.media.currentTime,0)||(this.warn("Subtitle playlist not aligned with playback"),l.details=void 0))}_handleFragmentLoadComplete(e){const{frag:t,payload:r}=e,i=t.decryptdata,s=this.hls;if(!this.fragContextChanged(t)&&r&&r.byteLength>0&&i!=null&&i.key&&i.iv&&i.method==="AES-128"){const o=performance.now();this.decrypter.decrypt(new Uint8Array(r),i.key.buffer,i.iv.buffer).catch(a=>{throw s.trigger(w.ERROR,{type:Be.MEDIA_ERROR,details:G.FRAG_DECRYPT_ERROR,fatal:!1,error:a,reason:a.message,frag:t}),a}).then(a=>{const l=performance.now();s.trigger(w.FRAG_DECRYPTED,{frag:t,payload:a,stats:{tstart:o,tdecrypt:l}})}).catch(a=>{this.warn(`${a.name}: ${a.message}`),this.state=ne.IDLE})}}doTick(){if(!this.media){this.state=ne.IDLE;return}if(this.state===ne.IDLE){const{currentTrackId:e,levels:t}=this,r=t==null?void 0:t[e];if(!r||!t.length||!r.details)return;const{config:i}=this,s=this.getLoadPosition(),o=ot.bufferedInfo(this.tracksBuffered[this.currentTrackId]||[],s,i.maxBufferHole),{end:a,len:l}=o,c=this.getFwdBufferInfo(this.media,De.MAIN),d=r.details,u=this.getMaxBufferLength(c==null?void 0:c.len)+d.levelTargetDuration;if(l>u)return;const h=d.fragments,y=h.length,m=d.edge;let A=null;const b=this.fragPrevious;if(a<m){const S=i.maxFragLookUpTolerance,C=a>m-S?0:S;A=no(b,h,Math.max(h[0].start,a),C),!A&&b&&b.start<h[0].start&&(A=h[0])}else A=h[y-1];if(!A)return;if(A=this.mapToInitFragWhenRequired(A),A.sn!=="initSegment"){const S=A.sn-d.startSN,C=h[S-1];C&&C.cc===A.cc&&this.fragmentTracker.getState(C)===xt.NOT_LOADED&&(A=C)}this.fragmentTracker.getState(A)===xt.NOT_LOADED&&this.loadFragment(A,r,a)}}getMaxBufferLength(e){const t=super.getMaxBufferLength();return e?Math.max(t,e):t}loadFragment(e,t,r){this.fragCurrent=e,e.sn==="initSegment"?this._loadInitSegment(e,t):(this.startFragRequested=!0,super.loadFragment(e,t,r))}get mediaBufferTimeRanges(){return new hw(this.tracksBuffered[this.currentTrackId]||[])}}class hw{constructor(e){this.buffered=void 0;const t=(r,i,s)=>{if(i=i>>>0,i>s-1)throw new DOMException(`Failed to execute '${r}' on 'TimeRanges': The index provided (${i}) is greater than the maximum bound (${s})`);return e[i][r]};this.buffered={get length(){return e.length},end(r){return t("end",r,e.length)},start(r){return t("start",r,e.length)}}}}class fw extends Ul{constructor(e){super(e,"[subtitle-track-controller]"),this.media=null,this.tracks=[],this.groupIds=null,this.tracksInGroup=[],this.trackId=-1,this.currentTrack=null,this.selectDefaultTrack=!0,this.queuedDefaultTrack=-1,this.asyncPollTrackChange=()=>this.pollTrackChange(0),this.useTextTrackPolling=!1,this.subtitlePollingInterval=-1,this._subtitleDisplay=!0,this.onTextTracksChanged=()=>{if(this.useTextTrackPolling||self.clearInterval(this.subtitlePollingInterval),!this.media||!this.hls.config.renderTextTracksNatively)return;let t=null;const r=Ps(this.media.textTracks);for(let s=0;s<r.length;s++)if(r[s].mode==="hidden")t=r[s];else if(r[s].mode==="showing"){t=r[s];break}const i=this.findTrackForTextTrack(t);this.subtitleTrack!==i&&this.setSubtitleTrack(i)},this.registerListeners()}destroy(){this.unregisterListeners(),this.tracks.length=0,this.tracksInGroup.length=0,this.currentTrack=null,this.onTextTracksChanged=this.asyncPollTrackChange=null,super.destroy()}get subtitleDisplay(){return this._subtitleDisplay}set subtitleDisplay(e){this._subtitleDisplay=e,this.trackId>-1&&this.toggleTrackModes()}registerListeners(){const{hls:e}=this;e.on(w.MEDIA_ATTACHED,this.onMediaAttached,this),e.on(w.MEDIA_DETACHING,this.onMediaDetaching,this),e.on(w.MANIFEST_LOADING,this.onManifestLoading,this),e.on(w.MANIFEST_PARSED,this.onManifestParsed,this),e.on(w.LEVEL_LOADING,this.onLevelLoading,this),e.on(w.LEVEL_SWITCHING,this.onLevelSwitching,this),e.on(w.SUBTITLE_TRACK_LOADED,this.onSubtitleTrackLoaded,this),e.on(w.ERROR,this.onError,this)}unregisterListeners(){const{hls:e}=this;e.off(w.MEDIA_ATTACHED,this.onMediaAttached,this),e.off(w.MEDIA_DETACHING,this.onMediaDetaching,this),e.off(w.MANIFEST_LOADING,this.onManifestLoading,this),e.off(w.MANIFEST_PARSED,this.onManifestParsed,this),e.off(w.LEVEL_LOADING,this.onLevelLoading,this),e.off(w.LEVEL_SWITCHING,this.onLevelSwitching,this),e.off(w.SUBTITLE_TRACK_LOADED,this.onSubtitleTrackLoaded,this),e.off(w.ERROR,this.onError,this)}onMediaAttached(e,t){this.media=t.media,this.media&&(this.queuedDefaultTrack>-1&&(this.subtitleTrack=this.queuedDefaultTrack,this.queuedDefaultTrack=-1),this.useTextTrackPolling=!(this.media.textTracks&&"onchange"in this.media.textTracks),this.useTextTrackPolling?this.pollTrackChange(500):this.media.textTracks.addEventListener("change",this.asyncPollTrackChange))}pollTrackChange(e){self.clearInterval(this.subtitlePollingInterval),this.subtitlePollingInterval=self.setInterval(this.onTextTracksChanged,e)}onMediaDetaching(){if(!this.media)return;self.clearInterval(this.subtitlePollingInterval),this.useTextTrackPolling||this.media.textTracks.removeEventListener("change",this.asyncPollTrackChange),this.trackId>-1&&(this.queuedDefaultTrack=this.trackId),Ps(this.media.textTracks).forEach(t=>{Tr(t)}),this.subtitleTrack=-1,this.media=null}onManifestLoading(){this.tracks=[],this.groupIds=null,this.tracksInGroup=[],this.trackId=-1,this.currentTrack=null,this.selectDefaultTrack=!0}onManifestParsed(e,t){this.tracks=t.subtitleTracks}onSubtitleTrackLoaded(e,t){const{id:r,groupId:i,details:s}=t,o=this.tracksInGroup[r];if(!o||o.groupId!==i){this.warn(`Subtitle track with id:${r} and group:${i} not found in active group ${o==null?void 0:o.groupId}`);return}const a=o.details;o.details=t.details,this.log(`Subtitle track ${r} "${o.name}" lang:${o.lang} group:${i} loaded [${s.startSN}-${s.endSN}]`),r===this.trackId&&this.playlistLoaded(r,t,a)}onLevelLoading(e,t){this.switchLevel(t.level)}onLevelSwitching(e,t){this.switchLevel(t.level)}switchLevel(e){const t=this.hls.levels[e];if(!t)return;const r=t.subtitleGroups||null,i=this.groupIds;let s=this.currentTrack;if(!r||(i==null?void 0:i.length)!==(r==null?void 0:r.length)||r!=null&&r.some(o=>(i==null?void 0:i.indexOf(o))===-1)){this.groupIds=r,this.trackId=-1,this.currentTrack=null;const o=this.tracks.filter(d=>!r||r.indexOf(d.groupId)!==-1);if(o.length)this.selectDefaultTrack&&!o.some(d=>d.default)&&(this.selectDefaultTrack=!1),o.forEach((d,u)=>{d.id=u});else if(!s&&!this.tracksInGroup.length)return;this.tracksInGroup=o;const a=this.hls.config.subtitlePreference;if(!s&&a){this.selectDefaultTrack=!1;const d=An(a,o);if(d>-1)s=o[d];else{const u=An(a,this.tracks);s=this.tracks[u]}}let l=this.findTrackId(s);l===-1&&s&&(l=this.findTrackId(null));const c={subtitleTracks:o};this.log(`Updating subtitle tracks, ${o.length} track(s) found in "${r==null?void 0:r.join(",")}" group-id`),this.hls.trigger(w.SUBTITLE_TRACKS_UPDATED,c),l!==-1&&this.trackId===-1&&this.setSubtitleTrack(l)}else this.shouldReloadPlaylist(s)&&this.setSubtitleTrack(this.trackId)}findTrackId(e){const t=this.tracksInGroup,r=this.selectDefaultTrack;for(let i=0;i<t.length;i++){const s=t[i];if(!(r&&!s.default||!r&&!e)&&(!e||Rr(s,e)))return i}if(e){for(let i=0;i<t.length;i++){const s=t[i];if(Gr(e.attrs,s.attrs,["LANGUAGE","ASSOC-LANGUAGE","CHARACTERISTICS"]))return i}for(let i=0;i<t.length;i++){const s=t[i];if(Gr(e.attrs,s.attrs,["LANGUAGE"]))return i}}return-1}findTrackForTextTrack(e){if(e){const t=this.tracksInGroup;for(let r=0;r<t.length;r++){const i=t[r];if(el(i,e))return r}}return-1}onError(e,t){t.fatal||!t.context||t.context.type===ze.SUBTITLE_TRACK&&t.context.id===this.trackId&&(!this.groupIds||this.groupIds.indexOf(t.context.groupId)!==-1)&&this.checkRetry(t)}get allSubtitleTracks(){return this.tracks}get subtitleTracks(){return this.tracksInGroup}get subtitleTrack(){return this.trackId}set subtitleTrack(e){this.selectDefaultTrack=!1,this.setSubtitleTrack(e)}setSubtitleOption(e){if(this.hls.config.subtitlePreference=e,e){const t=this.allSubtitleTracks;if(this.selectDefaultTrack=!1,t.length){const r=this.currentTrack;if(r&&Rr(e,r))return r;const i=An(e,this.tracksInGroup);if(i>-1){const s=this.tracksInGroup[i];return this.setSubtitleTrack(i),s}else{if(r)return null;{const s=An(e,t);if(s>-1)return t[s]}}}}return null}loadPlaylist(e){super.loadPlaylist();const t=this.currentTrack;if(this.shouldLoadPlaylist(t)&&t){const r=t.id,i=t.groupId;let s=t.url;if(e)try{s=e.addDirectives(s)}catch(o){this.warn(`Could not construct new URL with HLS Delivery Directives: ${o}`)}this.log(`Loading subtitle playlist for id ${r}`),this.hls.trigger(w.SUBTITLE_TRACK_LOADING,{url:s,id:r,groupId:i,deliveryDirectives:e||null})}}toggleTrackModes(){const{media:e}=this;if(!e)return;const t=Ps(e.textTracks),r=this.currentTrack;let i;if(r&&(i=t.filter(s=>el(r,s))[0],i||this.warn(`Unable to find subtitle TextTrack with name "${r.name}" and language "${r.lang}"`)),[].slice.call(t).forEach(s=>{s.mode!=="disabled"&&s!==i&&(s.mode="disabled")}),i){const s=this.subtitleDisplay?"showing":"hidden";i.mode!==s&&(i.mode=s)}}setSubtitleTrack(e){const t=this.tracksInGroup;if(!this.media){this.queuedDefaultTrack=e;return}if(e<-1||e>=t.length||!xe(e)){this.warn(`Invalid subtitle track id: ${e}`);return}this.clearTimer(),this.selectDefaultTrack=!1;const r=this.currentTrack,i=t[e]||null;if(this.trackId=e,this.currentTrack=i,this.toggleTrackModes(),!i){this.hls.trigger(w.SUBTITLE_TRACK_SWITCH,{id:e});return}const s=!!i.details&&!i.details.live;if(e===this.trackId&&i===r&&s)return;this.log(`Switching to subtitle-track ${e}`+(i?` "${i.name}" lang:${i.lang} group:${i.groupId}`:""));const{id:o,groupId:a="",name:l,type:c,url:d}=i;this.hls.trigger(w.SUBTITLE_TRACK_SWITCH,{id:o,groupId:a,name:l,type:c,url:d});const u=this.switchParams(i.url,r==null?void 0:r.details);this.loadPlaylist(u)}}class pw{constructor(e){this.buffers=void 0,this.queues={video:[],audio:[],audiovideo:[]},this.buffers=e}append(e,t,r){const i=this.queues[t];i.push(e),i.length===1&&!r&&this.executeNext(t)}insertAbort(e,t){this.queues[t].unshift(e),this.executeNext(t)}appendBlocker(e){let t;const r=new Promise(s=>{t=s}),i={execute:t,onStart:()=>{},onComplete:()=>{},onError:()=>{}};return this.append(i,e),r}executeNext(e){const t=this.queues[e];if(t.length){const r=t[0];try{r.execute()}catch(i){M.warn(`[buffer-operation-queue]: Exception executing "${e}" SourceBuffer operation: ${i}`),r.onError(i);const s=this.buffers[e];s!=null&&s.updating||this.shiftAndExecuteNext(e)}}}shiftAndExecuteNext(e){this.queues[e].shift(),this.executeNext(e)}current(e){return this.queues[e][0]}}const ku=/(avc[1234]|hvc1|hev1|dvh[1e]|vp09|av01)(?:\.[^.,]+)+/;class mw{constructor(e){this.details=null,this._objectUrl=null,this.operationQueue=void 0,this.listeners=void 0,this.hls=void 0,this.bufferCodecEventsExpected=0,this._bufferCodecEventsTotal=0,this.media=null,this.mediaSource=null,this.lastMpegAudioChunk=null,this.appendSource=void 0,this.appendErrors={audio:0,video:0,audiovideo:0},this.tracks={},this.pendingTracks={},this.sourceBuffer=void 0,this.log=void 0,this.warn=void 0,this.error=void 0,this._onEndStreaming=r=>{this.hls&&this.hls.pauseBuffering()},this._onStartStreaming=r=>{this.hls&&this.hls.resumeBuffering()},this._onMediaSourceOpen=()=>{const{media:r,mediaSource:i}=this;this.log("Media source opened"),r&&(r.removeEventListener("emptied",this._onMediaEmptied),this.updateMediaElementDuration(),this.hls.trigger(w.MEDIA_ATTACHED,{media:r,mediaSource:i})),i&&i.removeEventListener("sourceopen",this._onMediaSourceOpen),this.checkPendingTracks()},this._onMediaSourceClose=()=>{this.log("Media source closed")},this._onMediaSourceEnded=()=>{this.log("Media source ended")},this._onMediaEmptied=()=>{const{mediaSrc:r,_objectUrl:i}=this;r!==i&&M.error(`Media element src was set while attaching MediaSource (${i} > ${r})`)},this.hls=e;const t="[buffer-controller]";this.appendSource=e.config.preferManagedMediaSource&&typeof self<"u"&&self.ManagedMediaSource,this.log=M.log.bind(M,t),this.warn=M.warn.bind(M,t),this.error=M.error.bind(M,t),this._initSourceBuffer(),this.registerListeners()}hasSourceTypes(){return this.getSourceBufferTypes().length>0||Object.keys(this.pendingTracks).length>0}destroy(){this.unregisterListeners(),this.details=null,this.lastMpegAudioChunk=null,this.hls=null}registerListeners(){const{hls:e}=this;e.on(w.MEDIA_ATTACHING,this.onMediaAttaching,this),e.on(w.MEDIA_DETACHING,this.onMediaDetaching,this),e.on(w.MANIFEST_LOADING,this.onManifestLoading,this),e.on(w.MANIFEST_PARSED,this.onManifestParsed,this),e.on(w.BUFFER_RESET,this.onBufferReset,this),e.on(w.BUFFER_APPENDING,this.onBufferAppending,this),e.on(w.BUFFER_CODECS,this.onBufferCodecs,this),e.on(w.BUFFER_EOS,this.onBufferEos,this),e.on(w.BUFFER_FLUSHING,this.onBufferFlushing,this),e.on(w.LEVEL_UPDATED,this.onLevelUpdated,this),e.on(w.FRAG_PARSED,this.onFragParsed,this),e.on(w.FRAG_CHANGED,this.onFragChanged,this)}unregisterListeners(){const{hls:e}=this;e.off(w.MEDIA_ATTACHING,this.onMediaAttaching,this),e.off(w.MEDIA_DETACHING,this.onMediaDetaching,this),e.off(w.MANIFEST_LOADING,this.onManifestLoading,this),e.off(w.MANIFEST_PARSED,this.onManifestParsed,this),e.off(w.BUFFER_RESET,this.onBufferReset,this),e.off(w.BUFFER_APPENDING,this.onBufferAppending,this),e.off(w.BUFFER_CODECS,this.onBufferCodecs,this),e.off(w.BUFFER_EOS,this.onBufferEos,this),e.off(w.BUFFER_FLUSHING,this.onBufferFlushing,this),e.off(w.LEVEL_UPDATED,this.onLevelUpdated,this),e.off(w.FRAG_PARSED,this.onFragParsed,this),e.off(w.FRAG_CHANGED,this.onFragChanged,this)}_initSourceBuffer(){this.sourceBuffer={},this.operationQueue=new pw(this.sourceBuffer),this.listeners={audio:[],video:[],audiovideo:[]},this.appendErrors={audio:0,video:0,audiovideo:0},this.lastMpegAudioChunk=null}onManifestLoading(){this.bufferCodecEventsExpected=this._bufferCodecEventsTotal=0,this.details=null}onManifestParsed(e,t){let r=2;(t.audio&&!t.video||!t.altAudio)&&(r=1),this.bufferCodecEventsExpected=this._bufferCodecEventsTotal=r,this.log(`${this.bufferCodecEventsExpected} bufferCodec event(s) expected`)}onMediaAttaching(e,t){const r=this.media=t.media,i=Yr(this.appendSource);if(r&&i){var s;const o=this.mediaSource=new i;this.log(`created media source: ${(s=o.constructor)==null?void 0:s.name}`),o.addEventListener("sourceopen",this._onMediaSourceOpen),o.addEventListener("sourceended",this._onMediaSourceEnded),o.addEventListener("sourceclose",this._onMediaSourceClose),this.appendSource&&(o.addEventListener("startstreaming",this._onStartStreaming),o.addEventListener("endstreaming",this._onEndStreaming));const a=this._objectUrl=self.URL.createObjectURL(o);if(this.appendSource)try{r.removeAttribute("src");const l=self.ManagedMediaSource;r.disableRemotePlayback=r.disableRemotePlayback||l&&o instanceof l,Ru(r),gw(r,a),r.load()}catch{r.src=a}else r.src=a;r.addEventListener("emptied",this._onMediaEmptied)}}onMediaDetaching(){const{media:e,mediaSource:t,_objectUrl:r}=this;if(t){if(this.log("media source detaching"),t.readyState==="open")try{t.endOfStream()}catch(i){this.warn(`onMediaDetaching: ${i.message} while calling endOfStream`)}this.onBufferReset(),t.removeEventListener("sourceopen",this._onMediaSourceOpen),t.removeEventListener("sourceended",this._onMediaSourceEnded),t.removeEventListener("sourceclose",this._onMediaSourceClose),this.appendSource&&(t.removeEventListener("startstreaming",this._onStartStreaming),t.removeEventListener("endstreaming",this._onEndStreaming)),e&&(e.removeEventListener("emptied",this._onMediaEmptied),r&&self.URL.revokeObjectURL(r),this.mediaSrc===r?(e.removeAttribute("src"),this.appendSource&&Ru(e),e.load()):this.warn("media|source.src was changed by a third party - skip cleanup")),this.mediaSource=null,this.media=null,this._objectUrl=null,this.bufferCodecEventsExpected=this._bufferCodecEventsTotal,this.pendingTracks={},this.tracks={}}this.hls.trigger(w.MEDIA_DETACHED,void 0)}onBufferReset(){this.getSourceBufferTypes().forEach(e=>{this.resetBuffer(e)}),this._initSourceBuffer()}resetBuffer(e){const t=this.sourceBuffer[e];try{if(t){var r;this.removeBufferListeners(e),this.sourceBuffer[e]=void 0,(r=this.mediaSource)!=null&&r.sourceBuffers.length&&this.mediaSource.removeSourceBuffer(t)}}catch(i){this.warn(`onBufferReset ${e}`,i)}}onBufferCodecs(e,t){const r=this.getSourceBufferTypes().length,i=Object.keys(t);if(i.forEach(o=>{if(r){const l=this.tracks[o];if(l&&typeof l.buffer.changeType=="function"){var a;const{id:c,codec:d,levelCodec:u,container:h,metadata:y}=t[o],m=Zd(l.codec,l.levelCodec),A=m==null?void 0:m.replace(ku,"$1");let b=Zd(d,u);const S=(a=b)==null?void 0:a.replace(ku,"$1");if(b&&A!==S){o.slice(0,5)==="audio"&&(b=Zs(b,this.appendSource));const C=`${h};codecs=${b}`;this.appendChangeType(o,C),this.log(`switching codec ${m} to ${b}`),this.tracks[o]={buffer:l.buffer,codec:d,container:h,levelCodec:u,metadata:y,id:c}}}}else this.pendingTracks[o]=t[o]}),r)return;const s=Math.max(this.bufferCodecEventsExpected-1,0);this.bufferCodecEventsExpected!==s&&(this.log(`${s} bufferCodec event(s) expected ${i.join(",")}`),this.bufferCodecEventsExpected=s),this.mediaSource&&this.mediaSource.readyState==="open"&&this.checkPendingTracks()}appendChangeType(e,t){const{operationQueue:r}=this,i={execute:()=>{const s=this.sourceBuffer[e];s&&(this.log(`changing ${e} sourceBuffer type to ${t}`),s.changeType(t)),r.shiftAndExecuteNext(e)},onStart:()=>{},onComplete:()=>{},onError:s=>{this.warn(`Failed to change ${e} SourceBuffer type`,s)}};r.append(i,e,!!this.pendingTracks[e])}onBufferAppending(e,t){const{hls:r,operationQueue:i,tracks:s}=this,{data:o,type:a,frag:l,part:c,chunkMeta:d}=t,u=d.buffering[a],h=self.performance.now();u.start=h;const y=l.stats.buffering,m=c?c.stats.buffering:null;y.start===0&&(y.start=h),m&&m.start===0&&(m.start=h);const A=s.audio;let b=!1;a==="audio"&&(A==null?void 0:A.container)==="audio/mpeg"&&(b=!this.lastMpegAudioChunk||d.id===1||this.lastMpegAudioChunk.sn!==d.sn,this.lastMpegAudioChunk=d);const S=l.start,C={execute:()=>{if(u.executeStart=self.performance.now(),b){const R=this.sourceBuffer[a];if(R){const D=S-R.timestampOffset;Math.abs(D)>=.1&&(this.log(`Updating audio SourceBuffer timestampOffset to ${S} (delta: ${D}) sn: ${l.sn})`),R.timestampOffset=S)}}this.appendExecutor(o,a)},onStart:()=>{},onComplete:()=>{const R=self.performance.now();u.executeEnd=u.end=R,y.first===0&&(y.first=R),m&&m.first===0&&(m.first=R);const{sourceBuffer:D}=this,B={};for(const K in D)B[K]=ot.getBuffered(D[K]);this.appendErrors[a]=0,a==="audio"||a==="video"?this.appendErrors.audiovideo=0:(this.appendErrors.audio=0,this.appendErrors.video=0),this.hls.trigger(w.BUFFER_APPENDED,{type:a,frag:l,part:c,chunkMeta:d,parent:l.type,timeRanges:B})},onError:R=>{const D={type:Be.MEDIA_ERROR,parent:l.type,details:G.BUFFER_APPEND_ERROR,sourceBufferName:a,frag:l,part:c,chunkMeta:d,error:R,err:R,fatal:!1};if(R.code===DOMException.QUOTA_EXCEEDED_ERR)D.details=G.BUFFER_FULL_ERROR;else{const B=++this.appendErrors[a];D.details=G.BUFFER_APPEND_ERROR,this.warn(`Failed ${B}/${r.config.appendErrorMaxRetry} times to append segment in "${a}" sourceBuffer`),B>=r.config.appendErrorMaxRetry&&(D.fatal=!0)}r.trigger(w.ERROR,D)}};i.append(C,a,!!this.pendingTracks[a])}onBufferFlushing(e,t){const{operationQueue:r}=this,i=s=>({execute:this.removeExecutor.bind(this,s,t.startOffset,t.endOffset),onStart:()=>{},onComplete:()=>{this.hls.trigger(w.BUFFER_FLUSHED,{type:s})},onError:o=>{this.warn(`Failed to remove from ${s} SourceBuffer`,o)}});t.type?r.append(i(t.type),t.type):this.getSourceBufferTypes().forEach(s=>{r.append(i(s),s)})}onFragParsed(e,t){const{frag:r,part:i}=t,s=[],o=i?i.elementaryStreams:r.elementaryStreams;o[et.AUDIOVIDEO]?s.push("audiovideo"):(o[et.AUDIO]&&s.push("audio"),o[et.VIDEO]&&s.push("video"));const a=()=>{const l=self.performance.now();r.stats.buffering.end=l,i&&(i.stats.buffering.end=l);const c=i?i.stats:r.stats;this.hls.trigger(w.FRAG_BUFFERED,{frag:r,part:i,stats:c,id:r.type})};s.length===0&&this.warn(`Fragments must have at least one ElementaryStreamType set. type: ${r.type} level: ${r.level} sn: ${r.sn}`),this.blockBuffers(a,s)}onFragChanged(e,t){this.trimBuffers()}onBufferEos(e,t){this.getSourceBufferTypes().reduce((i,s)=>{const o=this.sourceBuffer[s];return o&&(!t.type||t.type===s)&&(o.ending=!0,o.ended||(o.ended=!0,this.log(`${s} sourceBuffer now EOS`))),i&&!!(!o||o.ended)},!0)&&(this.log("Queueing mediaSource.endOfStream()"),this.blockBuffers(()=>{this.getSourceBufferTypes().forEach(s=>{const o=this.sourceBuffer[s];o&&(o.ending=!1)});const{mediaSource:i}=this;if(!i||i.readyState!=="open"){i&&this.log(`Could not call mediaSource.endOfStream(). mediaSource.readyState: ${i.readyState}`);return}this.log("Calling mediaSource.endOfStream()"),i.endOfStream()}))}onLevelUpdated(e,{details:t}){t.fragments.length&&(this.details=t,this.getSourceBufferTypes().length?this.blockBuffers(this.updateMediaElementDuration.bind(this)):this.updateMediaElementDuration())}trimBuffers(){const{hls:e,details:t,media:r}=this;if(!r||t===null||!this.getSourceBufferTypes().length)return;const s=e.config,o=r.currentTime,a=t.levelTargetDuration,l=t.live&&s.liveBackBufferLength!==null?s.liveBackBufferLength:s.backBufferLength;if(xe(l)&&l>0){const c=Math.max(l,a),d=Math.floor(o/a)*a-c;this.flushBackBuffer(o,a,d)}if(xe(s.frontBufferFlushThreshold)&&s.frontBufferFlushThreshold>0){const c=Math.max(s.maxBufferLength,s.frontBufferFlushThreshold),d=Math.max(c,a),u=Math.floor(o/a)*a+d;this.flushFrontBuffer(o,a,u)}}flushBackBuffer(e,t,r){const{details:i,sourceBuffer:s}=this;this.getSourceBufferTypes().forEach(a=>{const l=s[a];if(l){const c=ot.getBuffered(l);if(c.length>0&&r>c.start(0)){if(this.hls.trigger(w.BACK_BUFFER_REACHED,{bufferEnd:r}),i!=null&&i.live)this.hls.trigger(w.LIVE_BACK_BUFFER_REACHED,{bufferEnd:r});else if(l.ended&&c.end(c.length-1)-e<t*2){this.log(`Cannot flush ${a} back buffer while SourceBuffer is in ended state`);return}this.hls.trigger(w.BUFFER_FLUSHING,{startOffset:0,endOffset:r,type:a})}}})}flushFrontBuffer(e,t,r){const{sourceBuffer:i}=this;this.getSourceBufferTypes().forEach(o=>{const a=i[o];if(a){const l=ot.getBuffered(a),c=l.length;if(c<2)return;const d=l.start(c-1),u=l.end(c-1);if(r>d||e>=d&&e<=u)return;if(a.ended&&e-u<2*t){this.log(`Cannot flush ${o} front buffer while SourceBuffer is in ended state`);return}this.hls.trigger(w.BUFFER_FLUSHING,{startOffset:d,endOffset:1/0,type:o})}})}updateMediaElementDuration(){if(!this.details||!this.media||!this.mediaSource||this.mediaSource.readyState!=="open")return;const{details:e,hls:t,media:r,mediaSource:i}=this,s=e.fragments[0].start+e.totalduration,o=r.duration,a=xe(i.duration)?i.duration:0;e.live&&t.config.liveDurationInfinity?(i.duration=1/0,this.updateSeekableRange(e)):(s>a&&s>o||!xe(o))&&(this.log(`Updating Media Source duration to ${s.toFixed(3)}`),i.duration=s)}updateSeekableRange(e){const t=this.mediaSource,r=e.fragments;if(r.length&&e.live&&t!=null&&t.setLiveSeekableRange){const s=Math.max(0,r[0].start),o=Math.max(s,s+e.totalduration);this.log(`Media Source duration is set to ${t.duration}. Setting seekable range to ${s}-${o}.`),t.setLiveSeekableRange(s,o)}}checkPendingTracks(){const{bufferCodecEventsExpected:e,operationQueue:t,pendingTracks:r}=this,i=Object.keys(r).length;if(i&&(!e||i===2||"audiovideo"in r)){this.createSourceBuffers(r),this.pendingTracks={};const s=this.getSourceBufferTypes();if(s.length)this.hls.trigger(w.BUFFER_CREATED,{tracks:this.tracks}),s.forEach(o=>{t.executeNext(o)});else{const o=new Error("could not create source buffer for media codec(s)");this.hls.trigger(w.ERROR,{type:Be.MEDIA_ERROR,details:G.BUFFER_INCOMPATIBLE_CODECS_ERROR,fatal:!0,error:o,reason:o.message})}}}createSourceBuffers(e){const{sourceBuffer:t,mediaSource:r}=this;if(!r)throw Error("createSourceBuffers called when mediaSource was null");for(const i in e)if(!t[i]){const s=e[i];if(!s)throw Error(`source buffer exists for track ${i}, however track does not`);let o=s.levelCodec||s.codec;o&&i.slice(0,5)==="audio"&&(o=Zs(o,this.appendSource));const a=`${s.container};codecs=${o}`;this.log(`creating sourceBuffer(${a})`);try{const l=t[i]=r.addSourceBuffer(a),c=i;this.addBufferListener(c,"updatestart",this._onSBUpdateStart),this.addBufferListener(c,"updateend",this._onSBUpdateEnd),this.addBufferListener(c,"error",this._onSBUpdateError),this.appendSource&&this.addBufferListener(c,"bufferedchange",(d,u)=>{const h=u.removedRanges;h!=null&&h.length&&this.hls.trigger(w.BUFFER_FLUSHED,{type:i})}),this.tracks[i]={buffer:l,codec:o,container:s.container,levelCodec:s.levelCodec,metadata:s.metadata,id:s.id}}catch(l){this.error(`error while trying to add sourceBuffer: ${l.message}`),this.hls.trigger(w.ERROR,{type:Be.MEDIA_ERROR,details:G.BUFFER_ADD_CODEC_ERROR,fatal:!1,error:l,sourceBufferName:i,mimeType:a})}}}get mediaSrc(){var e;const t=((e=this.media)==null?void 0:e.firstChild)||this.media;return t==null?void 0:t.src}_onSBUpdateStart(e){const{operationQueue:t}=this;t.current(e).onStart()}_onSBUpdateEnd(e){var t;if(((t=this.mediaSource)==null?void 0:t.readyState)==="closed"){this.resetBuffer(e);return}const{operationQueue:r}=this;r.current(e).onComplete(),r.shiftAndExecuteNext(e)}_onSBUpdateError(e,t){var r;const i=new Error(`${e} SourceBuffer error. MediaSource readyState: ${(r=this.mediaSource)==null?void 0:r.readyState}`);this.error(`${i}`,t),this.hls.trigger(w.ERROR,{type:Be.MEDIA_ERROR,details:G.BUFFER_APPENDING_ERROR,sourceBufferName:e,error:i,fatal:!1});const s=this.operationQueue.current(e);s&&s.onError(i)}removeExecutor(e,t,r){const{media:i,mediaSource:s,operationQueue:o,sourceBuffer:a}=this,l=a[e];if(!i||!s||!l){this.warn(`Attempting to remove from the ${e} SourceBuffer, but it does not exist`),o.shiftAndExecuteNext(e);return}const c=xe(i.duration)?i.duration:1/0,d=xe(s.duration)?s.duration:1/0,u=Math.max(0,t),h=Math.min(r,c,d);h>u&&(!l.ending||l.ended)?(l.ended=!1,this.log(`Removing [${u},${h}] from the ${e} SourceBuffer`),l.remove(u,h)):o.shiftAndExecuteNext(e)}appendExecutor(e,t){const r=this.sourceBuffer[t];if(!r){if(!this.pendingTracks[t])throw new Error(`Attempting to append to the ${t} SourceBuffer, but it does not exist`);return}r.ended=!1,r.appendBuffer(e)}blockBuffers(e,t=this.getSourceBufferTypes()){if(!t.length){this.log("Blocking operation requested, but no SourceBuffers exist"),Promise.resolve().then(e);return}const{operationQueue:r}=this,i=t.map(s=>r.appendBlocker(s));Promise.all(i).then(()=>{e(),t.forEach(s=>{const o=this.sourceBuffer[s];o!=null&&o.updating||r.shiftAndExecuteNext(s)})})}getSourceBufferTypes(){return Object.keys(this.sourceBuffer)}addBufferListener(e,t,r){const i=this.sourceBuffer[e];if(!i)return;const s=r.bind(this,e);this.listeners[e].push({event:t,listener:s}),i.addEventListener(t,s)}removeBufferListeners(e){const t=this.sourceBuffer[e];t&&this.listeners[e].forEach(r=>{t.removeEventListener(r.event,r.listener)})}}function Ru(n){const e=n.querySelectorAll("source");[].slice.call(e).forEach(t=>{n.removeChild(t)})}function gw(n,e){const t=self.document.createElement("source");t.type="video/mp4",t.src=e,n.appendChild(t)}const Iu={42:225,92:233,94:237,95:243,96:250,123:231,124:247,125:209,126:241,127:9608,128:174,129:176,130:189,131:191,132:8482,133:162,134:163,135:9834,136:224,137:32,138:232,139:226,140:234,141:238,142:244,143:251,144:193,145:201,146:211,147:218,148:220,149:252,150:8216,151:161,152:42,153:8217,154:9473,155:169,156:8480,157:8226,158:8220,159:8221,160:192,161:194,162:199,163:200,164:202,165:203,166:235,167:206,168:207,169:239,170:212,171:217,172:249,173:219,174:171,175:187,176:195,177:227,178:205,179:204,180:236,181:210,182:242,183:213,184:245,185:123,186:125,187:92,188:94,189:95,190:124,191:8764,192:196,193:228,194:214,195:246,196:223,197:165,198:164,199:9475,200:197,201:229,202:216,203:248,204:9487,205:9491,206:9495,207:9499},bp=function(e){let t=e;return Iu.hasOwnProperty(e)&&(t=Iu[e]),String.fromCharCode(t)},Jt=15,Cn=100,yw={17:1,18:3,21:5,22:7,23:9,16:11,19:12,20:14},Aw={17:2,18:4,21:6,22:8,23:10,19:13,20:15},vw={25:1,26:3,29:5,30:7,31:9,24:11,27:12,28:14},bw={25:2,26:4,29:6,30:8,31:10,27:13,28:15},xw=["white","green","blue","cyan","red","yellow","magenta","black","transparent"];class Ew{constructor(){this.time=null,this.verboseLevel=0}log(e,t){if(this.verboseLevel>=e){const r=typeof t=="function"?t():t;M.log(`${this.time} [${e}] ${r}`)}}}const tr=function(e){const t=[];for(let r=0;r<e.length;r++)t.push(e[r].toString(16));return t};class xp{constructor(){this.foreground="white",this.underline=!1,this.italics=!1,this.background="black",this.flash=!1}reset(){this.foreground="white",this.underline=!1,this.italics=!1,this.background="black",this.flash=!1}setStyles(e){const t=["foreground","underline","italics","background","flash"];for(let r=0;r<t.length;r++){const i=t[r];e.hasOwnProperty(i)&&(this[i]=e[i])}}isDefault(){return this.foreground==="white"&&!this.underline&&!this.italics&&this.background==="black"&&!this.flash}equals(e){return this.foreground===e.foreground&&this.underline===e.underline&&this.italics===e.italics&&this.background===e.background&&this.flash===e.flash}copy(e){this.foreground=e.foreground,this.underline=e.underline,this.italics=e.italics,this.background=e.background,this.flash=e.flash}toString(){return"color="+this.foreground+", underline="+this.underline+", italics="+this.italics+", background="+this.background+", flash="+this.flash}}class _w{constructor(){this.uchar=" ",this.penState=new xp}reset(){this.uchar=" ",this.penState.reset()}setChar(e,t){this.uchar=e,this.penState.copy(t)}setPenState(e){this.penState.copy(e)}equals(e){return this.uchar===e.uchar&&this.penState.equals(e.penState)}copy(e){this.uchar=e.uchar,this.penState.copy(e.penState)}isEmpty(){return this.uchar===" "&&this.penState.isDefault()}}class ww{constructor(e){this.chars=[],this.pos=0,this.currPenState=new xp,this.cueStartTime=null,this.logger=void 0;for(let t=0;t<Cn;t++)this.chars.push(new _w);this.logger=e}equals(e){for(let t=0;t<Cn;t++)if(!this.chars[t].equals(e.chars[t]))return!1;return!0}copy(e){for(let t=0;t<Cn;t++)this.chars[t].copy(e.chars[t])}isEmpty(){let e=!0;for(let t=0;t<Cn;t++)if(!this.chars[t].isEmpty()){e=!1;break}return e}setCursor(e){this.pos!==e&&(this.pos=e),this.pos<0?(this.logger.log(3,"Negative cursor position "+this.pos),this.pos=0):this.pos>Cn&&(this.logger.log(3,"Too large cursor position "+this.pos),this.pos=Cn)}moveCursor(e){const t=this.pos+e;if(e>1)for(let r=this.pos+1;r<t+1;r++)this.chars[r].setPenState(this.currPenState);this.setCursor(t)}backSpace(){this.moveCursor(-1),this.chars[this.pos].setChar(" ",this.currPenState)}insertChar(e){e>=144&&this.backSpace();const t=bp(e);if(this.pos>=Cn){this.logger.log(0,()=>"Cannot insert "+e.toString(16)+" ("+t+") at position "+this.pos+". Skipping it!");return}this.chars[this.pos].setChar(t,this.currPenState),this.moveCursor(1)}clearFromPos(e){let t;for(t=e;t<Cn;t++)this.chars[t].reset()}clear(){this.clearFromPos(0),this.pos=0,this.currPenState.reset()}clearToEndOfRow(){this.clearFromPos(this.pos)}getTextString(){const e=[];let t=!0;for(let r=0;r<Cn;r++){const i=this.chars[r].uchar;i!==" "&&(t=!1),e.push(i)}return t?"":e.join("")}setPenStyles(e){this.currPenState.setStyles(e),this.chars[this.pos].setPenState(this.currPenState)}}class ma{constructor(e){this.rows=[],this.currRow=Jt-1,this.nrRollUpRows=null,this.lastOutputScreen=null,this.logger=void 0;for(let t=0;t<Jt;t++)this.rows.push(new ww(e));this.logger=e}reset(){for(let e=0;e<Jt;e++)this.rows[e].clear();this.currRow=Jt-1}equals(e){let t=!0;for(let r=0;r<Jt;r++)if(!this.rows[r].equals(e.rows[r])){t=!1;break}return t}copy(e){for(let t=0;t<Jt;t++)this.rows[t].copy(e.rows[t])}isEmpty(){let e=!0;for(let t=0;t<Jt;t++)if(!this.rows[t].isEmpty()){e=!1;break}return e}backSpace(){this.rows[this.currRow].backSpace()}clearToEndOfRow(){this.rows[this.currRow].clearToEndOfRow()}insertChar(e){this.rows[this.currRow].insertChar(e)}setPen(e){this.rows[this.currRow].setPenStyles(e)}moveCursor(e){this.rows[this.currRow].moveCursor(e)}setCursor(e){this.logger.log(2,"setCursor: "+e),this.rows[this.currRow].setCursor(e)}setPAC(e){this.logger.log(2,()=>"pacData = "+JSON.stringify(e));let t=e.row-1;if(this.nrRollUpRows&&t<this.nrRollUpRows-1&&(t=this.nrRollUpRows-1),this.nrRollUpRows&&this.currRow!==t){for(let a=0;a<Jt;a++)this.rows[a].clear();const s=this.currRow+1-this.nrRollUpRows,o=this.lastOutputScreen;if(o){const a=o.rows[s].cueStartTime,l=this.logger.time;if(a!==null&&l!==null&&a<l)for(let c=0;c<this.nrRollUpRows;c++)this.rows[t-this.nrRollUpRows+c+1].copy(o.rows[s+c])}}this.currRow=t;const r=this.rows[this.currRow];if(e.indent!==null){const s=e.indent,o=Math.max(s-1,0);r.setCursor(e.indent),e.color=r.chars[o].penState.foreground}const i={foreground:e.color,underline:e.underline,italics:e.italics,background:"black",flash:!1};this.setPen(i)}setBkgData(e){this.logger.log(2,()=>"bkgData = "+JSON.stringify(e)),this.backSpace(),this.setPen(e),this.insertChar(32)}setRollUpRows(e){this.nrRollUpRows=e}rollUp(){if(this.nrRollUpRows===null){this.logger.log(3,"roll_up but nrRollUpRows not set yet");return}this.logger.log(1,()=>this.getDisplayText());const e=this.currRow+1-this.nrRollUpRows,t=this.rows.splice(e,1)[0];t.clear(),this.rows.splice(this.currRow,0,t),this.logger.log(2,"Rolling up")}getDisplayText(e){e=e||!1;const t=[];let r="",i=-1;for(let s=0;s<Jt;s++){const o=this.rows[s].getTextString();o&&(i=s+1,e?t.push("Row "+i+": '"+o+"'"):t.push(o.trim()))}return t.length>0&&(e?r="["+t.join(" | ")+"]":r=t.join(`
`)),r}getTextAndFormat(){return this.rows}}class Du{constructor(e,t,r){this.chNr=void 0,this.outputFilter=void 0,this.mode=void 0,this.verbose=void 0,this.displayedMemory=void 0,this.nonDisplayedMemory=void 0,this.lastOutputScreen=void 0,this.currRollUpRow=void 0,this.writeScreen=void 0,this.cueStartTime=void 0,this.logger=void 0,this.chNr=e,this.outputFilter=t,this.mode=null,this.verbose=0,this.displayedMemory=new ma(r),this.nonDisplayedMemory=new ma(r),this.lastOutputScreen=new ma(r),this.currRollUpRow=this.displayedMemory.rows[Jt-1],this.writeScreen=this.displayedMemory,this.mode=null,this.cueStartTime=null,this.logger=r}reset(){this.mode=null,this.displayedMemory.reset(),this.nonDisplayedMemory.reset(),this.lastOutputScreen.reset(),this.outputFilter.reset(),this.currRollUpRow=this.displayedMemory.rows[Jt-1],this.writeScreen=this.displayedMemory,this.mode=null,this.cueStartTime=null}getHandler(){return this.outputFilter}setHandler(e){this.outputFilter=e}setPAC(e){this.writeScreen.setPAC(e)}setBkgData(e){this.writeScreen.setBkgData(e)}setMode(e){e!==this.mode&&(this.mode=e,this.logger.log(2,()=>"MODE="+e),this.mode==="MODE_POP-ON"?this.writeScreen=this.nonDisplayedMemory:(this.writeScreen=this.displayedMemory,this.writeScreen.reset()),this.mode!=="MODE_ROLL-UP"&&(this.displayedMemory.nrRollUpRows=null,this.nonDisplayedMemory.nrRollUpRows=null),this.mode=e)}insertChars(e){for(let r=0;r<e.length;r++)this.writeScreen.insertChar(e[r]);const t=this.writeScreen===this.displayedMemory?"DISP":"NON_DISP";this.logger.log(2,()=>t+": "+this.writeScreen.getDisplayText(!0)),(this.mode==="MODE_PAINT-ON"||this.mode==="MODE_ROLL-UP")&&(this.logger.log(1,()=>"DISPLAYED: "+this.displayedMemory.getDisplayText(!0)),this.outputDataUpdate())}ccRCL(){this.logger.log(2,"RCL - Resume Caption Loading"),this.setMode("MODE_POP-ON")}ccBS(){this.logger.log(2,"BS - BackSpace"),this.mode!=="MODE_TEXT"&&(this.writeScreen.backSpace(),this.writeScreen===this.displayedMemory&&this.outputDataUpdate())}ccAOF(){}ccAON(){}ccDER(){this.logger.log(2,"DER- Delete to End of Row"),this.writeScreen.clearToEndOfRow(),this.outputDataUpdate()}ccRU(e){this.logger.log(2,"RU("+e+") - Roll Up"),this.writeScreen=this.displayedMemory,this.setMode("MODE_ROLL-UP"),this.writeScreen.setRollUpRows(e)}ccFON(){this.logger.log(2,"FON - Flash On"),this.writeScreen.setPen({flash:!0})}ccRDC(){this.logger.log(2,"RDC - Resume Direct Captioning"),this.setMode("MODE_PAINT-ON")}ccTR(){this.logger.log(2,"TR"),this.setMode("MODE_TEXT")}ccRTD(){this.logger.log(2,"RTD"),this.setMode("MODE_TEXT")}ccEDM(){this.logger.log(2,"EDM - Erase Displayed Memory"),this.displayedMemory.reset(),this.outputDataUpdate(!0)}ccCR(){this.logger.log(2,"CR - Carriage Return"),this.writeScreen.rollUp(),this.outputDataUpdate(!0)}ccENM(){this.logger.log(2,"ENM - Erase Non-displayed Memory"),this.nonDisplayedMemory.reset()}ccEOC(){if(this.logger.log(2,"EOC - End Of Caption"),this.mode==="MODE_POP-ON"){const e=this.displayedMemory;this.displayedMemory=this.nonDisplayedMemory,this.nonDisplayedMemory=e,this.writeScreen=this.nonDisplayedMemory,this.logger.log(1,()=>"DISP: "+this.displayedMemory.getDisplayText())}this.outputDataUpdate(!0)}ccTO(e){this.logger.log(2,"TO("+e+") - Tab Offset"),this.writeScreen.moveCursor(e)}ccMIDROW(e){const t={flash:!1};if(t.underline=e%2===1,t.italics=e>=46,t.italics)t.foreground="white";else{const r=Math.floor(e/2)-16,i=["white","green","blue","cyan","red","yellow","magenta"];t.foreground=i[r]}this.logger.log(2,"MIDROW: "+JSON.stringify(t)),this.writeScreen.setPen(t)}outputDataUpdate(e=!1){const t=this.logger.time;t!==null&&this.outputFilter&&(this.cueStartTime===null&&!this.displayedMemory.isEmpty()?this.cueStartTime=t:this.displayedMemory.equals(this.lastOutputScreen)||(this.outputFilter.newCue(this.cueStartTime,t,this.lastOutputScreen),e&&this.outputFilter.dispatchCue&&this.outputFilter.dispatchCue(),this.cueStartTime=this.displayedMemory.isEmpty()?null:t),this.lastOutputScreen.copy(this.displayedMemory))}cueSplitAtTime(e){this.outputFilter&&(this.displayedMemory.isEmpty()||(this.outputFilter.newCue&&this.outputFilter.newCue(this.cueStartTime,e,this.displayedMemory),this.cueStartTime=e))}}class Bu{constructor(e,t,r){this.channels=void 0,this.currentChannel=0,this.cmdHistory=Ou(),this.logger=void 0;const i=this.logger=new Ew;this.channels=[null,new Du(e,t,i),new Du(e+1,r,i)]}getHandler(e){return this.channels[e].getHandler()}setHandler(e,t){this.channels[e].setHandler(t)}addData(e,t){let r,i,s,o=!1;this.logger.time=e;for(let a=0;a<t.length;a+=2)if(i=t[a]&127,s=t[a+1]&127,!(i===0&&s===0)){if(this.logger.log(3,"["+tr([t[a],t[a+1]])+"] -> ("+tr([i,s])+")"),r=this.parseCmd(i,s),r||(r=this.parseMidrow(i,s)),r||(r=this.parsePAC(i,s)),r||(r=this.parseBackgroundAttributes(i,s)),!r&&(o=this.parseChars(i,s),o)){const l=this.currentChannel;l&&l>0?this.channels[l].insertChars(o):this.logger.log(2,"No channel found yet. TEXT-MODE?")}!r&&!o&&this.logger.log(2,"Couldn't parse cleaned data "+tr([i,s])+" orig: "+tr([t[a],t[a+1]]))}}parseCmd(e,t){const{cmdHistory:r}=this,i=(e===20||e===28||e===21||e===29)&&t>=32&&t<=47,s=(e===23||e===31)&&t>=33&&t<=35;if(!(i||s))return!1;if(Pu(e,t,r))return Er(null,null,r),this.logger.log(3,"Repeated command ("+tr([e,t])+") is dropped"),!0;const o=e===20||e===21||e===23?1:2,a=this.channels[o];return e===20||e===21||e===28||e===29?t===32?a.ccRCL():t===33?a.ccBS():t===34?a.ccAOF():t===35?a.ccAON():t===36?a.ccDER():t===37?a.ccRU(2):t===38?a.ccRU(3):t===39?a.ccRU(4):t===40?a.ccFON():t===41?a.ccRDC():t===42?a.ccTR():t===43?a.ccRTD():t===44?a.ccEDM():t===45?a.ccCR():t===46?a.ccENM():t===47&&a.ccEOC():a.ccTO(t-32),Er(e,t,r),this.currentChannel=o,!0}parseMidrow(e,t){let r=0;if((e===17||e===25)&&t>=32&&t<=47){if(e===17?r=1:r=2,r!==this.currentChannel)return this.logger.log(0,"Mismatch channel in midrow parsing"),!1;const i=this.channels[r];return i?(i.ccMIDROW(t),this.logger.log(3,"MIDROW ("+tr([e,t])+")"),!0):!1}return!1}parsePAC(e,t){let r;const i=this.cmdHistory,s=(e>=17&&e<=23||e>=25&&e<=31)&&t>=64&&t<=127,o=(e===16||e===24)&&t>=64&&t<=95;if(!(s||o))return!1;if(Pu(e,t,i))return Er(null,null,i),!0;const a=e<=23?1:2;t>=64&&t<=95?r=a===1?yw[e]:vw[e]:r=a===1?Aw[e]:bw[e];const l=this.channels[a];return l?(l.setPAC(this.interpretPAC(r,t)),Er(e,t,i),this.currentChannel=a,!0):!1}interpretPAC(e,t){let r;const i={color:null,italics:!1,indent:null,underline:!1,row:e};return t>95?r=t-96:r=t-64,i.underline=(r&1)===1,r<=13?i.color=["white","green","blue","cyan","red","yellow","magenta","white"][Math.floor(r/2)]:r<=15?(i.italics=!0,i.color="white"):i.indent=Math.floor((r-16)/2)*4,i}parseChars(e,t){let r,i=null,s=null;if(e>=25?(r=2,s=e-8):(r=1,s=e),s>=17&&s<=19){let o;s===17?o=t+80:s===18?o=t+112:o=t+144,this.logger.log(2,"Special char '"+bp(o)+"' in channel "+r),i=[o]}else e>=32&&e<=127&&(i=t===0?[e]:[e,t]);if(i){const o=tr(i);this.logger.log(3,"Char codes =  "+o.join(",")),Er(e,t,this.cmdHistory)}return i}parseBackgroundAttributes(e,t){const r=(e===16||e===24)&&t>=32&&t<=47,i=(e===23||e===31)&&t>=45&&t<=47;if(!(r||i))return!1;let s;const o={};e===16||e===24?(s=Math.floor((t-32)/2),o.background=xw[s],t%2===1&&(o.background=o.background+"_semi")):t===45?o.background="transparent":(o.foreground="black",t===47&&(o.underline=!0));const a=e<=23?1:2;return this.channels[a].setBkgData(o),Er(e,t,this.cmdHistory),!0}reset(){for(let e=0;e<Object.keys(this.channels).length;e++){const t=this.channels[e];t&&t.reset()}this.cmdHistory=Ou()}cueSplitAtTime(e){for(let t=0;t<this.channels.length;t++){const r=this.channels[t];r&&r.cueSplitAtTime(e)}}}function Er(n,e,t){t.a=n,t.b=e}function Pu(n,e,t){return t.a===n&&t.b===e}function Ou(){return{a:null,b:null}}class Es{constructor(e,t){this.timelineController=void 0,this.cueRanges=[],this.trackName=void 0,this.startTime=null,this.endTime=null,this.screen=null,this.timelineController=e,this.trackName=t}dispatchCue(){this.startTime!==null&&(this.timelineController.addCues(this.trackName,this.startTime,this.endTime,this.screen,this.cueRanges),this.startTime=null)}newCue(e,t,r){(this.startTime===null||this.startTime>e)&&(this.startTime=e),this.endTime=t,this.screen=r,this.timelineController.createCaptionsTrack(this.trackName)}reset(){this.cueRanges=[],this.startTime=null}}var Wl=function(){if($r!=null&&$r.VTTCue)return self.VTTCue;const n=["","lr","rl"],e=["start","middle","end","left","right"];function t(a,l){if(typeof l!="string"||!Array.isArray(a))return!1;const c=l.toLowerCase();return~a.indexOf(c)?c:!1}function r(a){return t(n,a)}function i(a){return t(e,a)}function s(a,...l){let c=1;for(;c<arguments.length;c++){const d=arguments[c];for(const u in d)a[u]=d[u]}return a}function o(a,l,c){const d=this,u={enumerable:!0};d.hasBeenReset=!1;let h="",y=!1,m=a,A=l,b=c,S=null,C="",R=!0,D="auto",B="start",K=50,N="middle",z=50,Z="middle";Object.defineProperty(d,"id",s({},u,{get:function(){return h},set:function(O){h=""+O}})),Object.defineProperty(d,"pauseOnExit",s({},u,{get:function(){return y},set:function(O){y=!!O}})),Object.defineProperty(d,"startTime",s({},u,{get:function(){return m},set:function(O){if(typeof O!="number")throw new TypeError("Start time must be set to a number.");m=O,this.hasBeenReset=!0}})),Object.defineProperty(d,"endTime",s({},u,{get:function(){return A},set:function(O){if(typeof O!="number")throw new TypeError("End time must be set to a number.");A=O,this.hasBeenReset=!0}})),Object.defineProperty(d,"text",s({},u,{get:function(){return b},set:function(O){b=""+O,this.hasBeenReset=!0}})),Object.defineProperty(d,"region",s({},u,{get:function(){return S},set:function(O){S=O,this.hasBeenReset=!0}})),Object.defineProperty(d,"vertical",s({},u,{get:function(){return C},set:function(O){const ee=r(O);if(ee===!1)throw new SyntaxError("An invalid or illegal string was specified.");C=ee,this.hasBeenReset=!0}})),Object.defineProperty(d,"snapToLines",s({},u,{get:function(){return R},set:function(O){R=!!O,this.hasBeenReset=!0}})),Object.defineProperty(d,"line",s({},u,{get:function(){return D},set:function(O){if(typeof O!="number"&&O!=="auto")throw new SyntaxError("An invalid number or illegal string was specified.");D=O,this.hasBeenReset=!0}})),Object.defineProperty(d,"lineAlign",s({},u,{get:function(){return B},set:function(O){const ee=i(O);if(!ee)throw new SyntaxError("An invalid or illegal string was specified.");B=ee,this.hasBeenReset=!0}})),Object.defineProperty(d,"position",s({},u,{get:function(){return K},set:function(O){if(O<0||O>100)throw new Error("Position must be between 0 and 100.");K=O,this.hasBeenReset=!0}})),Object.defineProperty(d,"positionAlign",s({},u,{get:function(){return N},set:function(O){const ee=i(O);if(!ee)throw new SyntaxError("An invalid or illegal string was specified.");N=ee,this.hasBeenReset=!0}})),Object.defineProperty(d,"size",s({},u,{get:function(){return z},set:function(O){if(O<0||O>100)throw new Error("Size must be between 0 and 100.");z=O,this.hasBeenReset=!0}})),Object.defineProperty(d,"align",s({},u,{get:function(){return Z},set:function(O){const ee=i(O);if(!ee)throw new SyntaxError("An invalid or illegal string was specified.");Z=ee,this.hasBeenReset=!0}})),d.displayState=void 0}return o.prototype.getCueAsHTML=function(){return self.WebVTT.convertCueToDOMTree(self,this.text)},o}();class Sw{decode(e,t){if(!e)return"";if(typeof e!="string")throw new Error("Error - expected string data.");return decodeURIComponent(encodeURIComponent(e))}}function Ep(n){function e(r,i,s,o){return(r|0)*3600+(i|0)*60+(s|0)+parseFloat(o||0)}const t=n.match(/^(?:(\d+):)?(\d{2}):(\d{2})(\.\d+)?/);return t?parseFloat(t[2])>59?e(t[2],t[3],0,t[4]):e(t[1],t[2],t[3],t[4]):null}class Tw{constructor(){this.values=Object.create(null)}set(e,t){!this.get(e)&&t!==""&&(this.values[e]=t)}get(e,t,r){return r?this.has(e)?this.values[e]:t[r]:this.has(e)?this.values[e]:t}has(e){return e in this.values}alt(e,t,r){for(let i=0;i<r.length;++i)if(t===r[i]){this.set(e,t);break}}integer(e,t){/^-?\d+$/.test(t)&&this.set(e,parseInt(t,10))}percent(e,t){if(/^([\d]{1,3})(\.[\d]*)?%$/.test(t)){const r=parseFloat(t);if(r>=0&&r<=100)return this.set(e,r),!0}return!1}}function _p(n,e,t,r){const i=r?n.split(r):[n];for(const s in i){if(typeof i[s]!="string")continue;const o=i[s].split(t);if(o.length!==2)continue;const a=o[0],l=o[1];e(a,l)}}const tl=new Wl(0,0,""),_s=tl.align==="middle"?"middle":"center";function Cw(n,e,t){const r=n;function i(){const a=Ep(n);if(a===null)throw new Error("Malformed timestamp: "+r);return n=n.replace(/^[^\sa-zA-Z-]+/,""),a}function s(a,l){const c=new Tw;_p(a,function(h,y){let m;switch(h){case"region":for(let A=t.length-1;A>=0;A--)if(t[A].id===y){c.set(h,t[A].region);break}break;case"vertical":c.alt(h,y,["rl","lr"]);break;case"line":m=y.split(","),c.integer(h,m[0]),c.percent(h,m[0])&&c.set("snapToLines",!1),c.alt(h,m[0],["auto"]),m.length===2&&c.alt("lineAlign",m[1],["start",_s,"end"]);break;case"position":m=y.split(","),c.percent(h,m[0]),m.length===2&&c.alt("positionAlign",m[1],["start",_s,"end","line-left","line-right","auto"]);break;case"size":c.percent(h,y);break;case"align":c.alt(h,y,["start",_s,"end","left","right"]);break}},/:/,/\s/),l.region=c.get("region",null),l.vertical=c.get("vertical","");let d=c.get("line","auto");d==="auto"&&tl.line===-1&&(d=-1),l.line=d,l.lineAlign=c.get("lineAlign","start"),l.snapToLines=c.get("snapToLines",!0),l.size=c.get("size",100),l.align=c.get("align",_s);let u=c.get("position","auto");u==="auto"&&tl.position===50&&(u=l.align==="start"||l.align==="left"?0:l.align==="end"||l.align==="right"?100:50),l.position=u}function o(){n=n.replace(/^\s+/,"")}if(o(),e.startTime=i(),o(),n.slice(0,3)!=="-->")throw new Error("Malformed time stamp (time stamps must be separated by '-->'): "+r);n=n.slice(3),o(),e.endTime=i(),o(),s(n,e)}function wp(n){return n.replace(/<br(?: \/)?>/gi,`
`)}class Lw{constructor(){this.state="INITIAL",this.buffer="",this.decoder=new Sw,this.regionList=[],this.cue=null,this.oncue=void 0,this.onparsingerror=void 0,this.onflush=void 0}parse(e){const t=this;e&&(t.buffer+=t.decoder.decode(e,{stream:!0}));function r(){let s=t.buffer,o=0;for(s=wp(s);o<s.length&&s[o]!=="\r"&&s[o]!==`
`;)++o;const a=s.slice(0,o);return s[o]==="\r"&&++o,s[o]===`
`&&++o,t.buffer=s.slice(o),a}function i(s){_p(s,function(o,a){},/:/)}try{let s="";if(t.state==="INITIAL"){if(!/\r\n|\n/.test(t.buffer))return this;s=r();const a=s.match(/^(ï»¿)?WEBVTT([ \t].*)?$/);if(!(a!=null&&a[0]))throw new Error("Malformed WebVTT signature.");t.state="HEADER"}let o=!1;for(;t.buffer;){if(!/\r\n|\n/.test(t.buffer))return this;switch(o?o=!1:s=r(),t.state){case"HEADER":/:/.test(s)?i(s):s||(t.state="ID");continue;case"NOTE":s||(t.state="ID");continue;case"ID":if(/^NOTE($|[ \t])/.test(s)){t.state="NOTE";break}if(!s)continue;if(t.cue=new Wl(0,0,""),t.state="CUE",s.indexOf("-->")===-1){t.cue.id=s;continue}case"CUE":if(!t.cue){t.state="BADCUE";continue}try{Cw(s,t.cue,t.regionList)}catch{t.cue=null,t.state="BADCUE";continue}t.state="CUETEXT";continue;case"CUETEXT":{const a=s.indexOf("-->")!==-1;if(!s||a&&(o=!0)){t.oncue&&t.cue&&t.oncue(t.cue),t.cue=null,t.state="ID";continue}if(t.cue===null)continue;t.cue.text&&(t.cue.text+=`
`),t.cue.text+=s}continue;case"BADCUE":s||(t.state="ID")}}}catch{t.state==="CUETEXT"&&t.cue&&t.oncue&&t.oncue(t.cue),t.cue=null,t.state=t.state==="INITIAL"?"BADWEBVTT":"BADCUE"}return this}flush(){const e=this;try{if((e.cue||e.state==="HEADER")&&(e.buffer+=`

`,e.parse()),e.state==="INITIAL"||e.state==="BADWEBVTT")throw new Error("Malformed WebVTT signature.")}catch(t){e.onparsingerror&&e.onparsingerror(t)}return e.onflush&&e.onflush(),this}}const kw=/\r\n|\n\r|\n|\r/g,ga=function(e,t,r=0){return e.slice(r,r+t.length)===t},Rw=function(e){let t=parseInt(e.slice(-3));const r=parseInt(e.slice(-6,-4)),i=parseInt(e.slice(-9,-7)),s=e.length>9?parseInt(e.substring(0,e.indexOf(":"))):0;if(!xe(t)||!xe(r)||!xe(i)||!xe(s))throw Error(`Malformed X-TIMESTAMP-MAP: Local:${e}`);return t+=1e3*r,t+=60*1e3*i,t+=60*60*1e3*s,t},ya=function(e){let t=5381,r=e.length;for(;r;)t=t*33^e.charCodeAt(--r);return(t>>>0).toString()};function Yl(n,e,t){return ya(n.toString())+ya(e.toString())+ya(t)}const Iw=function(e,t,r){let i=e[t],s=e[i.prevCC];if(!s||!s.new&&i.new){e.ccOffset=e.presentationOffset=i.start,i.new=!1;return}for(;(o=s)!=null&&o.new;){var o;e.ccOffset+=i.start-s.start,i.new=!1,i=s,s=e[i.prevCC]}e.presentationOffset=r};function Dw(n,e,t,r,i,s,o){const a=new Lw,l=bn(new Uint8Array(n)).trim().replace(kw,`
`).split(`
`),c=[],d=e?Z3(e.baseTime,e.timescale):0;let u="00:00.000",h=0,y=0,m,A=!0;a.oncue=function(b){const S=t[r];let C=t.ccOffset;const R=(h-d)/9e4;if(S!=null&&S.new&&(y!==void 0?C=t.ccOffset=S.start:Iw(t,r,R)),R){if(!e){m=new Error("Missing initPTS for VTT MPEGTS");return}C=R-t.presentationOffset}const D=b.endTime-b.startTime,B=Wt((b.startTime+C-y)*9e4,i*9e4)/9e4;b.startTime=Math.max(B,0),b.endTime=Math.max(B+D,0);const K=b.text.trim();b.text=decodeURIComponent(encodeURIComponent(K)),b.id||(b.id=Yl(b.startTime,b.endTime,K)),b.endTime>0&&c.push(b)},a.onparsingerror=function(b){m=b},a.onflush=function(){if(m){o(m);return}s(c)},l.forEach(b=>{if(A)if(ga(b,"X-TIMESTAMP-MAP=")){A=!1,b.slice(16).split(",").forEach(S=>{ga(S,"LOCAL:")?u=S.slice(6):ga(S,"MPEGTS:")&&(h=parseInt(S.slice(7)))});try{y=Rw(u)/1e3}catch(S){m=S}return}else b===""&&(A=!1);a.parse(b+`
`)}),a.flush()}const Aa="stpp.ttml.im1t",Sp=/^(\d{2,}):(\d{2}):(\d{2}):(\d{2})\.?(\d+)?$/,Tp=/^(\d*(?:\.\d*)?)(h|m|s|ms|f|t)$/,Bw={left:"start",center:"center",right:"end",start:"start",end:"end"};function Mu(n,e,t,r){const i=Ne(new Uint8Array(n),["mdat"]);if(i.length===0){r(new Error("Could not parse IMSC1 mdat"));return}const s=i.map(a=>bn(a)),o=X3(e.baseTime,1,e.timescale);try{s.forEach(a=>t(Pw(a,o)))}catch(a){r(a)}}function Pw(n,e){const i=new DOMParser().parseFromString(n,"text/xml").getElementsByTagName("tt")[0];if(!i)throw new Error("Invalid ttml");const s={frameRate:30,subFrameRate:1,frameRateMultiplier:0,tickRate:0},o=Object.keys(s).reduce((u,h)=>(u[h]=i.getAttribute(`ttp:${h}`)||s[h],u),{}),a=i.getAttribute("xml:space")!=="preserve",l=Fu(va(i,"styling","style")),c=Fu(va(i,"layout","region")),d=va(i,"body","[begin]");return[].map.call(d,u=>{const h=Cp(u,a);if(!h||!u.hasAttribute("begin"))return null;const y=xa(u.getAttribute("begin"),o),m=xa(u.getAttribute("dur"),o);let A=xa(u.getAttribute("end"),o);if(y===null)throw Nu(u);if(A===null){if(m===null)throw Nu(u);A=y+m}const b=new Wl(y-e,A-e,h);b.id=Yl(b.startTime,b.endTime,b.text);const S=c[u.getAttribute("region")],C=l[u.getAttribute("style")],R=Ow(S,C,l),{textAlign:D}=R;if(D){const B=Bw[D];B&&(b.lineAlign=B),b.align=D}return mt(b,R),b}).filter(u=>u!==null)}function va(n,e,t){const r=n.getElementsByTagName(e)[0];return r?[].slice.call(r.querySelectorAll(t)):[]}function Fu(n){return n.reduce((e,t)=>{const r=t.getAttribute("xml:id");return r&&(e[r]=t),e},{})}function Cp(n,e){return[].slice.call(n.childNodes).reduce((t,r,i)=>{var s;return r.nodeName==="br"&&i?t+`
`:(s=r.childNodes)!=null&&s.length?Cp(r,e):e?t+r.textContent.trim().replace(/\s+/g," "):t+r.textContent},"")}function Ow(n,e,t){const r="http://www.w3.org/ns/ttml#styling";let i=null;const s=["displayAlign","textAlign","color","backgroundColor","fontSize","fontFamily"],o=n!=null&&n.hasAttribute("style")?n.getAttribute("style"):null;return o&&t.hasOwnProperty(o)&&(i=t[o]),s.reduce((a,l)=>{const c=ba(e,r,l)||ba(n,r,l)||ba(i,r,l);return c&&(a[l]=c),a},{})}function ba(n,e,t){return n&&n.hasAttributeNS(e,t)?n.getAttributeNS(e,t):null}function Nu(n){return new Error(`Could not parse ttml timestamp ${n}`)}function xa(n,e){if(!n)return null;let t=Ep(n);return t===null&&(Sp.test(n)?t=Mw(n,e):Tp.test(n)&&(t=Fw(n,e))),t}function Mw(n,e){const t=Sp.exec(n),r=(t[4]|0)+(t[5]|0)/e.subFrameRate;return(t[1]|0)*3600+(t[2]|0)*60+(t[3]|0)+r/e.frameRate}function Fw(n,e){const t=Tp.exec(n),r=Number(t[1]);switch(t[2]){case"h":return r*3600;case"m":return r*60;case"ms":return r*1e3;case"f":return r/e.frameRate;case"t":return r/e.tickRate}return r}class Nw{constructor(e){this.hls=void 0,this.media=null,this.config=void 0,this.enabled=!0,this.Cues=void 0,this.textTracks=[],this.tracks=[],this.initPTS=[],this.unparsedVttFrags=[],this.captionsTracks={},this.nonNativeCaptionsTracks={},this.cea608Parser1=void 0,this.cea608Parser2=void 0,this.lastCc=-1,this.lastSn=-1,this.lastPartIndex=-1,this.prevCC=-1,this.vttCCs=$u(),this.captionsProperties=void 0,this.hls=e,this.config=e.config,this.Cues=e.config.cueHandler,this.captionsProperties={textTrack1:{label:this.config.captionsTextTrack1Label,languageCode:this.config.captionsTextTrack1LanguageCode},textTrack2:{label:this.config.captionsTextTrack2Label,languageCode:this.config.captionsTextTrack2LanguageCode},textTrack3:{label:this.config.captionsTextTrack3Label,languageCode:this.config.captionsTextTrack3LanguageCode},textTrack4:{label:this.config.captionsTextTrack4Label,languageCode:this.config.captionsTextTrack4LanguageCode}},e.on(w.MEDIA_ATTACHING,this.onMediaAttaching,this),e.on(w.MEDIA_DETACHING,this.onMediaDetaching,this),e.on(w.MANIFEST_LOADING,this.onManifestLoading,this),e.on(w.MANIFEST_LOADED,this.onManifestLoaded,this),e.on(w.SUBTITLE_TRACKS_UPDATED,this.onSubtitleTracksUpdated,this),e.on(w.FRAG_LOADING,this.onFragLoading,this),e.on(w.FRAG_LOADED,this.onFragLoaded,this),e.on(w.FRAG_PARSING_USERDATA,this.onFragParsingUserdata,this),e.on(w.FRAG_DECRYPTED,this.onFragDecrypted,this),e.on(w.INIT_PTS_FOUND,this.onInitPtsFound,this),e.on(w.SUBTITLE_TRACKS_CLEARED,this.onSubtitleTracksCleared,this),e.on(w.BUFFER_FLUSHING,this.onBufferFlushing,this)}destroy(){const{hls:e}=this;e.off(w.MEDIA_ATTACHING,this.onMediaAttaching,this),e.off(w.MEDIA_DETACHING,this.onMediaDetaching,this),e.off(w.MANIFEST_LOADING,this.onManifestLoading,this),e.off(w.MANIFEST_LOADED,this.onManifestLoaded,this),e.off(w.SUBTITLE_TRACKS_UPDATED,this.onSubtitleTracksUpdated,this),e.off(w.FRAG_LOADING,this.onFragLoading,this),e.off(w.FRAG_LOADED,this.onFragLoaded,this),e.off(w.FRAG_PARSING_USERDATA,this.onFragParsingUserdata,this),e.off(w.FRAG_DECRYPTED,this.onFragDecrypted,this),e.off(w.INIT_PTS_FOUND,this.onInitPtsFound,this),e.off(w.SUBTITLE_TRACKS_CLEARED,this.onSubtitleTracksCleared,this),e.off(w.BUFFER_FLUSHING,this.onBufferFlushing,this),this.hls=this.config=null,this.cea608Parser1=this.cea608Parser2=void 0}initCea608Parsers(){if(this.config.enableCEA708Captions&&(!this.cea608Parser1||!this.cea608Parser2)){const e=new Es(this,"textTrack1"),t=new Es(this,"textTrack2"),r=new Es(this,"textTrack3"),i=new Es(this,"textTrack4");this.cea608Parser1=new Bu(1,e,t),this.cea608Parser2=new Bu(3,r,i)}}addCues(e,t,r,i,s){let o=!1;for(let a=s.length;a--;){const l=s[a],c=Uw(l[0],l[1],t,r);if(c>=0&&(l[0]=Math.min(l[0],t),l[1]=Math.max(l[1],r),o=!0,c/(r-t)>.5))return}if(o||s.push([t,r]),this.config.renderTextTracksNatively){const a=this.captionsTracks[e];this.Cues.newCue(a,t,r,i)}else{const a=this.Cues.newCue(null,t,r,i);this.hls.trigger(w.CUES_PARSED,{type:"captions",cues:a,track:e})}}onInitPtsFound(e,{frag:t,id:r,initPTS:i,timescale:s}){const{unparsedVttFrags:o}=this;r==="main"&&(this.initPTS[t.cc]={baseTime:i,timescale:s}),o.length&&(this.unparsedVttFrags=[],o.forEach(a=>{this.onFragLoaded(w.FRAG_LOADED,a)}))}getExistingTrack(e,t){const{media:r}=this;if(r)for(let i=0;i<r.textTracks.length;i++){const s=r.textTracks[i];if(Uu(s,{name:e,lang:t,attrs:{}}))return s}return null}createCaptionsTrack(e){this.config.renderTextTracksNatively?this.createNativeTrack(e):this.createNonNativeTrack(e)}createNativeTrack(e){if(this.captionsTracks[e])return;const{captionsProperties:t,captionsTracks:r,media:i}=this,{label:s,languageCode:o}=t[e],a=this.getExistingTrack(s,o);if(a)r[e]=a,Tr(r[e]),Vf(r[e],i);else{const l=this.createTextTrack("captions",s,o);l&&(l[e]=!0,r[e]=l)}}createNonNativeTrack(e){if(this.nonNativeCaptionsTracks[e])return;const t=this.captionsProperties[e];if(!t)return;const r=t.label,i={_id:e,label:r,kind:"captions",default:t.media?!!t.media.default:!1,closedCaptions:t.media};this.nonNativeCaptionsTracks[e]=i,this.hls.trigger(w.NON_NATIVE_TEXT_TRACKS_FOUND,{tracks:[i]})}createTextTrack(e,t,r){const i=this.media;if(i)return i.addTextTrack(e,t,r)}onMediaAttaching(e,t){this.media=t.media,this._cleanTracks()}onMediaDetaching(){const{captionsTracks:e}=this;Object.keys(e).forEach(t=>{Tr(e[t]),delete e[t]}),this.nonNativeCaptionsTracks={}}onManifestLoading(){this.lastCc=-1,this.lastSn=-1,this.lastPartIndex=-1,this.prevCC=-1,this.vttCCs=$u(),this._cleanTracks(),this.tracks=[],this.captionsTracks={},this.nonNativeCaptionsTracks={},this.textTracks=[],this.unparsedVttFrags=[],this.initPTS=[],this.cea608Parser1&&this.cea608Parser2&&(this.cea608Parser1.reset(),this.cea608Parser2.reset())}_cleanTracks(){const{media:e}=this;if(!e)return;const t=e.textTracks;if(t)for(let r=0;r<t.length;r++)Tr(t[r])}onSubtitleTracksUpdated(e,t){const r=t.subtitleTracks||[],i=r.some(s=>s.textCodec===Aa);if(this.config.enableWebVTT||i&&this.config.enableIMSC1){if(vp(this.tracks,r)){this.tracks=r;return}if(this.textTracks=[],this.tracks=r,this.config.renderTextTracksNatively){const o=this.media,a=o?Ps(o.textTracks):null;if(this.tracks.forEach((l,c)=>{let d;if(a){let u=null;for(let h=0;h<a.length;h++)if(a[h]&&Uu(a[h],l)){u=a[h],a[h]=null;break}u&&(d=u)}if(d)Tr(d);else{const u=Lp(l);d=this.createTextTrack(u,l.name,l.lang),d&&(d.mode="disabled")}d&&this.textTracks.push(d)}),a!=null&&a.length){const l=a.filter(c=>c!==null).map(c=>c.label);l.length&&M.warn(`Media element contains unused subtitle tracks: ${l.join(", ")}. Replace media element for each source to clear TextTracks and captions menu.`)}}else if(this.tracks.length){const o=this.tracks.map(a=>({label:a.name,kind:a.type.toLowerCase(),default:a.default,subtitleTrack:a}));this.hls.trigger(w.NON_NATIVE_TEXT_TRACKS_FOUND,{tracks:o})}}}onManifestLoaded(e,t){this.config.enableCEA708Captions&&t.captions&&t.captions.forEach(r=>{const i=/(?:CC|SERVICE)([1-4])/.exec(r.instreamId);if(!i)return;const s=`textTrack${i[1]}`,o=this.captionsProperties[s];o&&(o.label=r.name,r.lang&&(o.languageCode=r.lang),o.media=r)})}closedCaptionsForLevel(e){const t=this.hls.levels[e.level];return t==null?void 0:t.attrs["CLOSED-CAPTIONS"]}onFragLoading(e,t){this.initCea608Parsers();const{cea608Parser1:r,cea608Parser2:i,lastCc:s,lastSn:o,lastPartIndex:a}=this;if(!(!this.enabled||!r||!i)&&t.frag.type===De.MAIN){var l,c;const{cc:d,sn:u}=t.frag,h=(l=t==null||(c=t.part)==null?void 0:c.index)!=null?l:-1;u===o+1||u===o&&h===a+1||d===s||(r.reset(),i.reset()),this.lastCc=d,this.lastSn=u,this.lastPartIndex=h}}onFragLoaded(e,t){const{frag:r,payload:i}=t;if(r.type===De.SUBTITLE)if(i.byteLength){const s=r.decryptdata,o="stats"in t;if(s==null||!s.encrypted||o){const a=this.tracks[r.level],l=this.vttCCs;l[r.cc]||(l[r.cc]={start:r.start,prevCC:this.prevCC,new:!0},this.prevCC=r.cc),a&&a.textCodec===Aa?this._parseIMSC1(r,i):this._parseVTTs(t)}}else this.hls.trigger(w.SUBTITLE_FRAG_PROCESSED,{success:!1,frag:r,error:new Error("Empty subtitle payload")})}_parseIMSC1(e,t){const r=this.hls;Mu(t,this.initPTS[e.cc],i=>{this._appendCues(i,e.level),r.trigger(w.SUBTITLE_FRAG_PROCESSED,{success:!0,frag:e})},i=>{M.log(`Failed to parse IMSC1: ${i}`),r.trigger(w.SUBTITLE_FRAG_PROCESSED,{success:!1,frag:e,error:i})})}_parseVTTs(e){var t;const{frag:r,payload:i}=e,{initPTS:s,unparsedVttFrags:o}=this,a=s.length-1;if(!s[r.cc]&&a===-1){o.push(e);return}const l=this.hls,c=(t=r.initSegment)!=null&&t.data?Qt(r.initSegment.data,new Uint8Array(i)):i;Dw(c,this.initPTS[r.cc],this.vttCCs,r.cc,r.start,d=>{this._appendCues(d,r.level),l.trigger(w.SUBTITLE_FRAG_PROCESSED,{success:!0,frag:r})},d=>{const u=d.message==="Missing initPTS for VTT MPEGTS";u?o.push(e):this._fallbackToIMSC1(r,i),M.log(`Failed to parse VTT cue: ${d}`),!(u&&a>r.cc)&&l.trigger(w.SUBTITLE_FRAG_PROCESSED,{success:!1,frag:r,error:d})})}_fallbackToIMSC1(e,t){const r=this.tracks[e.level];r.textCodec||Mu(t,this.initPTS[e.cc],()=>{r.textCodec=Aa,this._parseIMSC1(e,t)},()=>{r.textCodec="wvtt"})}_appendCues(e,t){const r=this.hls;if(this.config.renderTextTracksNatively){const i=this.textTracks[t];if(!i||i.mode==="disabled")return;e.forEach(s=>Wf(i,s))}else{const i=this.tracks[t];if(!i)return;const s=i.default?"default":"subtitles"+t;r.trigger(w.CUES_PARSED,{type:"subtitles",cues:e,track:s})}}onFragDecrypted(e,t){const{frag:r}=t;r.type===De.SUBTITLE&&this.onFragLoaded(w.FRAG_LOADED,t)}onSubtitleTracksCleared(){this.tracks=[],this.captionsTracks={}}onFragParsingUserdata(e,t){this.initCea608Parsers();const{cea608Parser1:r,cea608Parser2:i}=this;if(!this.enabled||!r||!i)return;const{frag:s,samples:o}=t;if(!(s.type===De.MAIN&&this.closedCaptionsForLevel(s)==="NONE"))for(let a=0;a<o.length;a++){const l=o[a].bytes;if(l){const c=this.extractCea608Data(l);r.addData(o[a].pts,c[0]),i.addData(o[a].pts,c[1])}}}onBufferFlushing(e,{startOffset:t,endOffset:r,endOffsetSubtitles:i,type:s}){const{media:o}=this;if(!(!o||o.currentTime<r)){if(!s||s==="video"){const{captionsTracks:a}=this;Object.keys(a).forEach(l=>Wa(a[l],t,r))}if(this.config.renderTextTracksNatively&&t===0&&i!==void 0){const{textTracks:a}=this;Object.keys(a).forEach(l=>Wa(a[l],t,i))}}}extractCea608Data(e){const t=[[],[]],r=e[0]&31;let i=2;for(let s=0;s<r;s++){const o=e[i++],a=127&e[i++],l=127&e[i++];if(a===0&&l===0)continue;if((4&o)!==0){const d=3&o;(d===0||d===1)&&(t[d].push(a),t[d].push(l))}}return t}}function Lp(n){return n.characteristics&&/transcribes-spoken-dialog/gi.test(n.characteristics)&&/describes-music-and-sound/gi.test(n.characteristics)?"captions":"subtitles"}function Uu(n,e){return!!n&&n.kind===Lp(e)&&el(e,n)}function Uw(n,e,t,r){return Math.min(e,r)-Math.max(n,t)}function $u(){return{ccOffset:0,presentationOffset:0,0:{start:0,prevCC:-1,new:!0}}}class Ql{constructor(e){this.hls=void 0,this.autoLevelCapping=void 0,this.firstLevel=void 0,this.media=void 0,this.restrictedLevels=void 0,this.timer=void 0,this.clientRect=void 0,this.streamController=void 0,this.hls=e,this.autoLevelCapping=Number.POSITIVE_INFINITY,this.firstLevel=-1,this.media=null,this.restrictedLevels=[],this.timer=void 0,this.clientRect=null,this.registerListeners()}setStreamController(e){this.streamController=e}destroy(){this.hls&&this.unregisterListener(),this.timer&&this.stopCapping(),this.media=null,this.clientRect=null,this.hls=this.streamController=null}registerListeners(){const{hls:e}=this;e.on(w.FPS_DROP_LEVEL_CAPPING,this.onFpsDropLevelCapping,this),e.on(w.MEDIA_ATTACHING,this.onMediaAttaching,this),e.on(w.MANIFEST_PARSED,this.onManifestParsed,this),e.on(w.LEVELS_UPDATED,this.onLevelsUpdated,this),e.on(w.BUFFER_CODECS,this.onBufferCodecs,this),e.on(w.MEDIA_DETACHING,this.onMediaDetaching,this)}unregisterListener(){const{hls:e}=this;e.off(w.FPS_DROP_LEVEL_CAPPING,this.onFpsDropLevelCapping,this),e.off(w.MEDIA_ATTACHING,this.onMediaAttaching,this),e.off(w.MANIFEST_PARSED,this.onManifestParsed,this),e.off(w.LEVELS_UPDATED,this.onLevelsUpdated,this),e.off(w.BUFFER_CODECS,this.onBufferCodecs,this),e.off(w.MEDIA_DETACHING,this.onMediaDetaching,this)}onFpsDropLevelCapping(e,t){const r=this.hls.levels[t.droppedLevel];this.isLevelAllowed(r)&&this.restrictedLevels.push({bitrate:r.bitrate,height:r.height,width:r.width})}onMediaAttaching(e,t){this.media=t.media instanceof HTMLVideoElement?t.media:null,this.clientRect=null,this.timer&&this.hls.levels.length&&this.detectPlayerSize()}onManifestParsed(e,t){const r=this.hls;this.restrictedLevels=[],this.firstLevel=t.firstLevel,r.config.capLevelToPlayerSize&&t.video&&this.startCapping()}onLevelsUpdated(e,t){this.timer&&xe(this.autoLevelCapping)&&this.detectPlayerSize()}onBufferCodecs(e,t){this.hls.config.capLevelToPlayerSize&&t.video&&this.startCapping()}onMediaDetaching(){this.stopCapping()}detectPlayerSize(){if(this.media){if(this.mediaHeight<=0||this.mediaWidth<=0){this.clientRect=null;return}const e=this.hls.levels;if(e.length){const t=this.hls,r=this.getMaxLevel(e.length-1);r!==this.autoLevelCapping&&M.log(`Setting autoLevelCapping to ${r}: ${e[r].height}p@${e[r].bitrate} for media ${this.mediaWidth}x${this.mediaHeight}`),t.autoLevelCapping=r,t.autoLevelCapping>this.autoLevelCapping&&this.streamController&&this.streamController.nextLevelSwitch(),this.autoLevelCapping=t.autoLevelCapping}}}getMaxLevel(e){const t=this.hls.levels;if(!t.length)return-1;const r=t.filter((i,s)=>this.isLevelAllowed(i)&&s<=e);return this.clientRect=null,Ql.getMaxLevelByMediaSize(r,this.mediaWidth,this.mediaHeight)}startCapping(){this.timer||(this.autoLevelCapping=Number.POSITIVE_INFINITY,self.clearInterval(this.timer),this.timer=self.setInterval(this.detectPlayerSize.bind(this),1e3),this.detectPlayerSize())}stopCapping(){this.restrictedLevels=[],this.firstLevel=-1,this.autoLevelCapping=Number.POSITIVE_INFINITY,this.timer&&(self.clearInterval(this.timer),this.timer=void 0)}getDimensions(){if(this.clientRect)return this.clientRect;const e=this.media,t={width:0,height:0};if(e){const r=e.getBoundingClientRect();t.width=r.width,t.height=r.height,!t.width&&!t.height&&(t.width=r.right-r.left||e.width||0,t.height=r.bottom-r.top||e.height||0)}return this.clientRect=t,t}get mediaWidth(){return this.getDimensions().width*this.contentScaleFactor}get mediaHeight(){return this.getDimensions().height*this.contentScaleFactor}get contentScaleFactor(){let e=1;if(!this.hls.config.ignoreDevicePixelRatio)try{e=self.devicePixelRatio}catch{}return e}isLevelAllowed(e){return!this.restrictedLevels.some(r=>e.bitrate===r.bitrate&&e.width===r.width&&e.height===r.height)}static getMaxLevelByMediaSize(e,t,r){if(!(e!=null&&e.length))return-1;const i=(a,l)=>l?a.width!==l.width||a.height!==l.height:!0;let s=e.length-1;const o=Math.max(t,r);for(let a=0;a<e.length;a+=1){const l=e[a];if((l.width>=o||l.height>=o)&&i(l,e[a+1])){s=a;break}}return s}}class $w{constructor(e){this.hls=void 0,this.isVideoPlaybackQualityAvailable=!1,this.timer=void 0,this.media=null,this.lastTime=void 0,this.lastDroppedFrames=0,this.lastDecodedFrames=0,this.streamController=void 0,this.hls=e,this.registerListeners()}setStreamController(e){this.streamController=e}registerListeners(){this.hls.on(w.MEDIA_ATTACHING,this.onMediaAttaching,this)}unregisterListeners(){this.hls.off(w.MEDIA_ATTACHING,this.onMediaAttaching,this)}destroy(){this.timer&&clearInterval(this.timer),this.unregisterListeners(),this.isVideoPlaybackQualityAvailable=!1,this.media=null}onMediaAttaching(e,t){const r=this.hls.config;if(r.capLevelOnFPSDrop){const i=t.media instanceof self.HTMLVideoElement?t.media:null;this.media=i,i&&typeof i.getVideoPlaybackQuality=="function"&&(this.isVideoPlaybackQualityAvailable=!0),self.clearInterval(this.timer),this.timer=self.setInterval(this.checkFPSInterval.bind(this),r.fpsDroppedMonitoringPeriod)}}checkFPS(e,t,r){const i=performance.now();if(t){if(this.lastTime){const s=i-this.lastTime,o=r-this.lastDroppedFrames,a=t-this.lastDecodedFrames,l=1e3*o/s,c=this.hls;if(c.trigger(w.FPS_DROP,{currentDropped:o,currentDecoded:a,totalDroppedFrames:r}),l>0&&o>c.config.fpsDroppedMonitoringThreshold*a){let d=c.currentLevel;M.warn("drop FPS ratio greater than max allowed value for currentLevel: "+d),d>0&&(c.autoLevelCapping===-1||c.autoLevelCapping>=d)&&(d=d-1,c.trigger(w.FPS_DROP_LEVEL_CAPPING,{level:d,droppedLevel:c.currentLevel}),c.autoLevelCapping=d,this.streamController.nextLevelSwitch())}}this.lastTime=i,this.lastDroppedFrames=r,this.lastDecodedFrames=t}}checkFPSInterval(){const e=this.media;if(e)if(this.isVideoPlaybackQualityAvailable){const t=e.getVideoPlaybackQuality();this.checkFPS(e,t.totalVideoFrames,t.droppedVideoFrames)}else this.checkFPS(e,e.webkitDecodedFrameCount,e.webkitDroppedFrameCount)}}const ws="[eme]";class Ir{constructor(e){this.hls=void 0,this.config=void 0,this.media=null,this.keyFormatPromise=null,this.keySystemAccessPromises={},this._requestLicenseFailureCount=0,this.mediaKeySessions=[],this.keyIdToKeySessionPromise={},this.setMediaKeysQueue=Ir.CDMCleanupPromise?[Ir.CDMCleanupPromise]:[],this.onMediaEncrypted=this._onMediaEncrypted.bind(this),this.onWaitingForKey=this._onWaitingForKey.bind(this),this.debug=M.debug.bind(M,ws),this.log=M.log.bind(M,ws),this.warn=M.warn.bind(M,ws),this.error=M.error.bind(M,ws),this.hls=e,this.config=e.config,this.registerListeners()}destroy(){this.unregisterListeners(),this.onMediaDetached();const e=this.config;e.requestMediaKeySystemAccessFunc=null,e.licenseXhrSetup=e.licenseResponseCallback=void 0,e.drmSystems=e.drmSystemOptions={},this.hls=this.onMediaEncrypted=this.onWaitingForKey=this.keyIdToKeySessionPromise=null,this.config=null}registerListeners(){this.hls.on(w.MEDIA_ATTACHED,this.onMediaAttached,this),this.hls.on(w.MEDIA_DETACHED,this.onMediaDetached,this),this.hls.on(w.MANIFEST_LOADING,this.onManifestLoading,this),this.hls.on(w.MANIFEST_LOADED,this.onManifestLoaded,this)}unregisterListeners(){this.hls.off(w.MEDIA_ATTACHED,this.onMediaAttached,this),this.hls.off(w.MEDIA_DETACHED,this.onMediaDetached,this),this.hls.off(w.MANIFEST_LOADING,this.onManifestLoading,this),this.hls.off(w.MANIFEST_LOADED,this.onManifestLoaded,this)}getLicenseServerUrl(e){const{drmSystems:t,widevineLicenseUrl:r}=this.config,i=t[e];if(i)return i.licenseUrl;if(e===lt.WIDEVINE&&r)return r;throw new Error(`no license server URL configured for key-system "${e}"`)}getServerCertificateUrl(e){const{drmSystems:t}=this.config,r=t[e];if(r)return r.serverCertificateUrl;this.log(`No Server Certificate in config.drmSystems["${e}"]`)}attemptKeySystemAccess(e){const t=this.hls.levels,r=(o,a,l)=>!!o&&l.indexOf(o)===a,i=t.map(o=>o.audioCodec).filter(r),s=t.map(o=>o.videoCodec).filter(r);return i.length+s.length===0&&s.push("avc1.42e01e"),new Promise((o,a)=>{const l=c=>{const d=c.shift();this.getMediaKeysPromise(d,i,s).then(u=>o({keySystem:d,mediaKeys:u})).catch(u=>{c.length?l(c):u instanceof jt?a(u):a(new jt({type:Be.KEY_SYSTEM_ERROR,details:G.KEY_SYSTEM_NO_ACCESS,error:u,fatal:!0},u.message))})};l(e)})}requestMediaKeySystemAccess(e,t){const{requestMediaKeySystemAccessFunc:r}=this.config;if(typeof r!="function"){let i=`Configured requestMediaKeySystemAccess is not a function ${r}`;return Pf===null&&self.location.protocol==="http:"&&(i=`navigator.requestMediaKeySystemAccess is not available over insecure protocol ${location.protocol}`),Promise.reject(new Error(i))}return r(e,t)}getMediaKeysPromise(e,t,r){const i=X2(e,t,r,this.config.drmSystemOptions),s=this.keySystemAccessPromises[e];let o=s==null?void 0:s.keySystemAccess;if(!o){this.log(`Requesting encrypted media "${e}" key-system access with config: ${JSON.stringify(i)}`),o=this.requestMediaKeySystemAccess(e,i);const a=this.keySystemAccessPromises[e]={keySystemAccess:o};return o.catch(l=>{this.log(`Failed to obtain access to key-system "${e}": ${l}`)}),o.then(l=>{this.log(`Access for key-system "${l.keySystem}" obtained`);const c=this.fetchServerCertificate(e);return this.log(`Create media-keys for "${e}"`),a.mediaKeys=l.createMediaKeys().then(d=>(this.log(`Media-keys created for "${e}"`),c.then(u=>u?this.setMediaKeysServerCertificate(d,e,u):d))),a.mediaKeys.catch(d=>{this.error(`Failed to create media-keys for "${e}"}: ${d}`)}),a.mediaKeys})}return o.then(()=>s.mediaKeys)}createMediaKeySessionContext({decryptdata:e,keySystem:t,mediaKeys:r}){this.log(`Creating key-system session "${t}" keyId: ${hn.hexDump(e.keyId||[])}`);const i=r.createSession(),s={decryptdata:e,keySystem:t,mediaKeys:r,mediaKeysSession:i,keyStatus:"status-pending"};return this.mediaKeySessions.push(s),s}renewKeySession(e){const t=e.decryptdata;if(t.pssh){const r=this.createMediaKeySessionContext(e),i=this.getKeyIdString(t),s="cenc";this.keyIdToKeySessionPromise[i]=this.generateRequestWithPreferredKeySession(r,s,t.pssh,"expired")}else this.warn("Could not renew expired session. Missing pssh initData.");this.removeSession(e)}getKeyIdString(e){if(!e)throw new Error("Could not read keyId of undefined decryptdata");if(e.keyId===null)throw new Error("keyId is null");return hn.hexDump(e.keyId)}updateKeySession(e,t){var r;const i=e.mediaKeysSession;return this.log(`Updating key-session "${i.sessionId}" for keyID ${hn.hexDump(((r=e.decryptdata)==null?void 0:r.keyId)||[])}
      } (data length: ${t&&t.byteLength})`),i.update(t)}selectKeySystemFormat(e){const t=Object.keys(e.levelkeys||{});return this.keyFormatPromise||(this.log(`Selecting key-system from fragment (sn: ${e.sn} ${e.type}: ${e.level}) key formats ${t.join(", ")}`),this.keyFormatPromise=this.getKeyFormatPromise(t)),this.keyFormatPromise}getKeyFormatPromise(e){return new Promise((t,r)=>{const i=ra(this.config),s=e.map(qd).filter(o=>!!o&&i.indexOf(o)!==-1);return this.getKeySystemSelectionPromise(s).then(({keySystem:o})=>{const a=jd(o);a?t(a):r(new Error(`Unable to find format for key-system "${o}"`))}).catch(r)})}loadKey(e){const t=e.keyInfo.decryptdata,r=this.getKeyIdString(t),i=`(keyId: ${r} format: "${t.keyFormat}" method: ${t.method} uri: ${t.uri})`;this.log(`Starting session for key ${i}`);let s=this.keyIdToKeySessionPromise[r];return s||(s=this.keyIdToKeySessionPromise[r]=this.getKeySystemForKeyPromise(t).then(({keySystem:o,mediaKeys:a})=>(this.throwIfDestroyed(),this.log(`Handle encrypted media sn: ${e.frag.sn} ${e.frag.type}: ${e.frag.level} using key ${i}`),this.attemptSetMediaKeys(o,a).then(()=>{this.throwIfDestroyed();const l=this.createMediaKeySessionContext({keySystem:o,mediaKeys:a,decryptdata:t}),c="cenc";return this.generateRequestWithPreferredKeySession(l,c,t.pssh,"playlist-key")}))),s.catch(o=>this.handleError(o))),s}throwIfDestroyed(e="Invalid state"){if(!this.hls)throw new Error("invalid state")}handleError(e){this.hls&&(this.error(e.message),e instanceof jt?this.hls.trigger(w.ERROR,e.data):this.hls.trigger(w.ERROR,{type:Be.KEY_SYSTEM_ERROR,details:G.KEY_SYSTEM_NO_KEYS,error:e,fatal:!0}))}getKeySystemForKeyPromise(e){const t=this.getKeyIdString(e),r=this.keyIdToKeySessionPromise[t];if(!r){const i=qd(e.keyFormat),s=i?[i]:ra(this.config);return this.attemptKeySystemAccess(s)}return r}getKeySystemSelectionPromise(e){if(e.length||(e=ra(this.config)),e.length===0)throw new jt({type:Be.KEY_SYSTEM_ERROR,details:G.KEY_SYSTEM_NO_CONFIGURED_LICENSE,fatal:!0},`Missing key-system license configuration options ${JSON.stringify({drmSystems:this.config.drmSystems})}`);return this.attemptKeySystemAccess(e)}_onMediaEncrypted(e){const{initDataType:t,initData:r}=e;if(this.debug(`"${e.type}" event: init data type: "${t}"`),r===null)return;let i,s;if(t==="sinf"&&this.config.drmSystems[lt.FAIRPLAY]){const d=At(new Uint8Array(r));try{const u=Ol(JSON.parse(d).sinf),h=Gf(new Uint8Array(u));if(!h)return;i=h.subarray(8,24),s=lt.FAIRPLAY}catch{this.warn('Failed to parse sinf "encrypted" event message initData');return}}else{const d=E_(r);if(d===null)return;d.version===0&&d.systemId===Bf.WIDEVINE&&d.data&&(i=d.data.subarray(8,24)),s=Q2(d.systemId)}if(!s||!i)return;const o=hn.hexDump(i),{keyIdToKeySessionPromise:a,mediaKeySessions:l}=this;let c=a[o];for(let d=0;d<l.length;d++){const u=l[d],h=u.decryptdata;if(h.pssh||!h.keyId)continue;const y=hn.hexDump(h.keyId);if(o===y||h.uri.replace(/-/g,"").indexOf(o)!==-1){c=a[y],delete a[y],h.pssh=new Uint8Array(r),h.keyId=i,c=a[o]=c.then(()=>this.generateRequestWithPreferredKeySession(u,t,r,"encrypted-event-key-match"));break}}c||(c=a[o]=this.getKeySystemSelectionPromise([s]).then(({keySystem:d,mediaKeys:u})=>{var h;this.throwIfDestroyed();const y=new ji("ISO-23001-7",o,(h=jd(d))!=null?h:"");return y.pssh=new Uint8Array(r),y.keyId=i,this.attemptSetMediaKeys(d,u).then(()=>{this.throwIfDestroyed();const m=this.createMediaKeySessionContext({decryptdata:y,keySystem:d,mediaKeys:u});return this.generateRequestWithPreferredKeySession(m,t,r,"encrypted-event-no-match")})})),c.catch(d=>this.handleError(d))}_onWaitingForKey(e){this.log(`"${e.type}" event`)}attemptSetMediaKeys(e,t){const r=this.setMediaKeysQueue.slice();this.log(`Setting media-keys for "${e}"`);const i=Promise.all(r).then(()=>{if(!this.media)throw new Error("Attempted to set mediaKeys without media element attached");return this.media.setMediaKeys(t)});return this.setMediaKeysQueue.push(i),i.then(()=>{this.log(`Media-keys set for "${e}"`),r.push(i),this.setMediaKeysQueue=this.setMediaKeysQueue.filter(s=>r.indexOf(s)===-1)})}generateRequestWithPreferredKeySession(e,t,r,i){var s,o;const a=(s=this.config.drmSystems)==null||(o=s[e.keySystem])==null?void 0:o.generateRequest;if(a)try{const m=a.call(this.hls,t,r,e);if(!m)throw new Error("Invalid response from configured generateRequest filter");t=m.initDataType,r=e.decryptdata.pssh=m.initData?new Uint8Array(m.initData):null}catch(m){var l;if(this.warn(m.message),(l=this.hls)!=null&&l.config.debug)throw m}if(r===null)return this.log(`Skipping key-session request for "${i}" (no initData)`),Promise.resolve(e);const c=this.getKeyIdString(e.decryptdata);this.log(`Generating key-session request for "${i}": ${c} (init data type: ${t} length: ${r?r.byteLength:null})`);const d=new Vl,u=e._onmessage=m=>{const A=e.mediaKeysSession;if(!A){d.emit("error",new Error("invalid state"));return}const{messageType:b,message:S}=m;this.log(`"${b}" message event for session "${A.sessionId}" message size: ${S.byteLength}`),b==="license-request"||b==="license-renewal"?this.renewLicense(e,S).catch(C=>{this.handleError(C),d.emit("error",C)}):b==="license-release"?e.keySystem===lt.FAIRPLAY&&(this.updateKeySession(e,ja("acknowledged")),this.removeSession(e)):this.warn(`unhandled media key message type "${b}"`)},h=e._onkeystatuseschange=m=>{if(!e.mediaKeysSession){d.emit("error",new Error("invalid state"));return}this.onKeyStatusChange(e);const b=e.keyStatus;d.emit("keyStatus",b),b==="expired"&&(this.warn(`${e.keySystem} expired for key ${c}`),this.renewKeySession(e))};e.mediaKeysSession.addEventListener("message",u),e.mediaKeysSession.addEventListener("keystatuseschange",h);const y=new Promise((m,A)=>{d.on("error",A),d.on("keyStatus",b=>{b.startsWith("usable")?m():b==="output-restricted"?A(new jt({type:Be.KEY_SYSTEM_ERROR,details:G.KEY_SYSTEM_STATUS_OUTPUT_RESTRICTED,fatal:!1},"HDCP level output restricted")):b==="internal-error"?A(new jt({type:Be.KEY_SYSTEM_ERROR,details:G.KEY_SYSTEM_STATUS_INTERNAL_ERROR,fatal:!0},`key status changed to "${b}"`)):b==="expired"?A(new Error("key expired while generating request")):this.warn(`unhandled key status change "${b}"`)})});return e.mediaKeysSession.generateRequest(t,r).then(()=>{var m;this.log(`Request generated for key-session "${(m=e.mediaKeysSession)==null?void 0:m.sessionId}" keyId: ${c}`)}).catch(m=>{throw new jt({type:Be.KEY_SYSTEM_ERROR,details:G.KEY_SYSTEM_NO_SESSION,error:m,fatal:!1},`Error generating key-session request: ${m}`)}).then(()=>y).catch(m=>{throw d.removeAllListeners(),this.removeSession(e),m}).then(()=>(d.removeAllListeners(),e))}onKeyStatusChange(e){e.mediaKeysSession.keyStatuses.forEach((t,r)=>{this.log(`key status change "${t}" for keyStatuses keyId: ${hn.hexDump("buffer"in r?new Uint8Array(r.buffer,r.byteOffset,r.byteLength):new Uint8Array(r))} session keyId: ${hn.hexDump(new Uint8Array(e.decryptdata.keyId||[]))} uri: ${e.decryptdata.uri}`),e.keyStatus=t})}fetchServerCertificate(e){const t=this.config,r=t.loader,i=new r(t),s=this.getServerCertificateUrl(e);return s?(this.log(`Fetching server certificate for "${e}"`),new Promise((o,a)=>{const l={responseType:"arraybuffer",url:s},c=t.certLoadPolicy.default,d={loadPolicy:c,timeout:c.maxLoadTimeMs,maxRetry:0,retryDelay:0,maxRetryDelay:0},u={onSuccess:(h,y,m,A)=>{o(h.data)},onError:(h,y,m,A)=>{a(new jt({type:Be.KEY_SYSTEM_ERROR,details:G.KEY_SYSTEM_SERVER_CERTIFICATE_REQUEST_FAILED,fatal:!0,networkDetails:m,response:_t({url:l.url,data:void 0},h)},`"${e}" certificate request failed (${s}). Status: ${h.code} (${h.text})`))},onTimeout:(h,y,m)=>{a(new jt({type:Be.KEY_SYSTEM_ERROR,details:G.KEY_SYSTEM_SERVER_CERTIFICATE_REQUEST_FAILED,fatal:!0,networkDetails:m,response:{url:l.url,data:void 0}},`"${e}" certificate request timed out (${s})`))},onAbort:(h,y,m)=>{a(new Error("aborted"))}};i.load(l,d,u)})):Promise.resolve()}setMediaKeysServerCertificate(e,t,r){return new Promise((i,s)=>{e.setServerCertificate(r).then(o=>{this.log(`setServerCertificate ${o?"success":"not supported by CDM"} (${r==null?void 0:r.byteLength}) on "${t}"`),i(e)}).catch(o=>{s(new jt({type:Be.KEY_SYSTEM_ERROR,details:G.KEY_SYSTEM_SERVER_CERTIFICATE_UPDATE_FAILED,error:o,fatal:!0},o.message))})})}renewLicense(e,t){return this.requestLicense(e,new Uint8Array(t)).then(r=>this.updateKeySession(e,new Uint8Array(r)).catch(i=>{throw new jt({type:Be.KEY_SYSTEM_ERROR,details:G.KEY_SYSTEM_SESSION_UPDATE_FAILED,error:i,fatal:!0},i.message)}))}unpackPlayReadyKeyMessage(e,t){const r=String.fromCharCode.apply(null,new Uint16Array(t.buffer));if(!r.includes("PlayReadyKeyMessage"))return e.setRequestHeader("Content-Type","text/xml; charset=utf-8"),t;const i=new DOMParser().parseFromString(r,"application/xml"),s=i.querySelectorAll("HttpHeader");if(s.length>0){let d;for(let u=0,h=s.length;u<h;u++){var o,a;d=s[u];const y=(o=d.querySelector("name"))==null?void 0:o.textContent,m=(a=d.querySelector("value"))==null?void 0:a.textContent;y&&m&&e.setRequestHeader(y,m)}}const l=i.querySelector("Challenge"),c=l==null?void 0:l.textContent;if(!c)throw new Error("Cannot find <Challenge> in key message");return ja(atob(c))}setupLicenseXHR(e,t,r,i){const s=this.config.licenseXhrSetup;return s?Promise.resolve().then(()=>{if(!r.decryptdata)throw new Error("Key removed");return s.call(this.hls,e,t,r,i)}).catch(o=>{if(!r.decryptdata)throw o;return e.open("POST",t,!0),s.call(this.hls,e,t,r,i)}).then(o=>(e.readyState||e.open("POST",t,!0),{xhr:e,licenseChallenge:o||i})):(e.open("POST",t,!0),Promise.resolve({xhr:e,licenseChallenge:i}))}requestLicense(e,t){const r=this.config.keyLoadPolicy.default;return new Promise((i,s)=>{const o=this.getLicenseServerUrl(e.keySystem);this.log(`Sending license request to URL: ${o}`);const a=new XMLHttpRequest;a.responseType="arraybuffer",a.onreadystatechange=()=>{if(!this.hls||!e.mediaKeysSession)return s(new Error("invalid state"));if(a.readyState===4)if(a.status===200){this._requestLicenseFailureCount=0;let l=a.response;this.log(`License received ${l instanceof ArrayBuffer?l.byteLength:l}`);const c=this.config.licenseResponseCallback;if(c)try{l=c.call(this.hls,a,o,e)}catch(d){this.error(d)}i(l)}else{const l=r.errorRetry,c=l?l.maxNumRetry:0;if(this._requestLicenseFailureCount++,this._requestLicenseFailureCount>c||a.status>=400&&a.status<500)s(new jt({type:Be.KEY_SYSTEM_ERROR,details:G.KEY_SYSTEM_LICENSE_REQUEST_FAILED,fatal:!0,networkDetails:a,response:{url:o,data:void 0,code:a.status,text:a.statusText}},`License Request XHR failed (${o}). Status: ${a.status} (${a.statusText})`));else{const d=c-this._requestLicenseFailureCount+1;this.warn(`Retrying license request, ${d} attempts left`),this.requestLicense(e,t).then(i,s)}}},e.licenseXhr&&e.licenseXhr.readyState!==XMLHttpRequest.DONE&&e.licenseXhr.abort(),e.licenseXhr=a,this.setupLicenseXHR(a,o,e,t).then(({xhr:l,licenseChallenge:c})=>{e.keySystem==lt.PLAYREADY&&(c=this.unpackPlayReadyKeyMessage(l,c)),l.send(c)})})}onMediaAttached(e,t){if(!this.config.emeEnabled)return;const r=t.media;this.media=r,r.addEventListener("encrypted",this.onMediaEncrypted),r.addEventListener("waitingforkey",this.onWaitingForKey)}onMediaDetached(){const e=this.media,t=this.mediaKeySessions;e&&(e.removeEventListener("encrypted",this.onMediaEncrypted),e.removeEventListener("waitingforkey",this.onWaitingForKey),this.media=null),this._requestLicenseFailureCount=0,this.setMediaKeysQueue=[],this.mediaKeySessions=[],this.keyIdToKeySessionPromise={},ji.clearKeyUriToKeyIdMap();const r=t.length;Ir.CDMCleanupPromise=Promise.all(t.map(i=>this.removeSession(i)).concat(e==null?void 0:e.setMediaKeys(null).catch(i=>{this.log(`Could not clear media keys: ${i}`)}))).then(()=>{r&&(this.log("finished closing key sessions and clearing media keys"),t.length=0)}).catch(i=>{this.log(`Could not close sessions and clear media keys: ${i}`)})}onManifestLoading(){this.keyFormatPromise=null}onManifestLoaded(e,{sessionKeys:t}){if(!(!t||!this.config.emeEnabled)&&!this.keyFormatPromise){const r=t.reduce((i,s)=>(i.indexOf(s.keyFormat)===-1&&i.push(s.keyFormat),i),[]);this.log(`Selecting key-system from session-keys ${r.join(", ")}`),this.keyFormatPromise=this.getKeyFormatPromise(r)}}removeSession(e){const{mediaKeysSession:t,licenseXhr:r}=e;if(t){this.log(`Remove licenses and keys and close session ${t.sessionId}`),e._onmessage&&(t.removeEventListener("message",e._onmessage),e._onmessage=void 0),e._onkeystatuseschange&&(t.removeEventListener("keystatuseschange",e._onkeystatuseschange),e._onkeystatuseschange=void 0),r&&r.readyState!==XMLHttpRequest.DONE&&r.abort(),e.mediaKeysSession=e.decryptdata=e.licenseXhr=void 0;const i=this.mediaKeySessions.indexOf(e);return i>-1&&this.mediaKeySessions.splice(i,1),t.remove().catch(s=>{this.log(`Could not remove session: ${s}`)}).then(()=>t.close()).catch(s=>{this.log(`Could not close session: ${s}`)})}}}Ir.CDMCleanupPromise=void 0;class jt extends Error{constructor(e,t){super(t),this.data=void 0,e.error||(e.error=new Error(t)),this.data=e,e.err=e.error}}var It;(function(n){n.MANIFEST="m",n.AUDIO="a",n.VIDEO="v",n.MUXED="av",n.INIT="i",n.CAPTION="c",n.TIMED_TEXT="tt",n.KEY="k",n.OTHER="o"})(It||(It={}));var nl;(function(n){n.DASH="d",n.HLS="h",n.SMOOTH="s",n.OTHER="o"})(nl||(nl={}));var or;(function(n){n.OBJECT="CMCD-Object",n.REQUEST="CMCD-Request",n.SESSION="CMCD-Session",n.STATUS="CMCD-Status"})(or||(or={}));const Hw={[or.OBJECT]:["br","d","ot","tb"],[or.REQUEST]:["bl","dl","mtp","nor","nrr","su"],[or.SESSION]:["cid","pr","sf","sid","st","v"],[or.STATUS]:["bs","rtp"]};class Kr{constructor(e,t){this.value=void 0,this.params=void 0,Array.isArray(e)&&(e=e.map(r=>r instanceof Kr?r:new Kr(r))),this.value=e,this.params=t}}class kp{constructor(e){this.description=void 0,this.description=e}}const Gw="Dict";function Kw(n){return Array.isArray(n)?JSON.stringify(n):n instanceof Map?"Map{}":n instanceof Set?"Set{}":typeof n=="object"?JSON.stringify(n):String(n)}function zw(n,e,t,r){return new Error(`failed to ${n} "${Kw(e)}" as ${t}`,{cause:r})}const Hu="Bare Item",qw="Boolean",jw="Byte Sequence",Vw="Decimal",Ww="Integer";function Yw(n){return n<-999999999999999||999999999999999<n}const Qw=/[\x00-\x1f\x7f]+/,Xw="Token",Zw="Key";function xn(n,e,t){return zw("serialize",n,e,t)}function Jw(n){if(typeof n!="boolean")throw xn(n,qw);return n?"?1":"?0"}function eS(n){return btoa(String.fromCharCode(...n))}function tS(n){if(ArrayBuffer.isView(n)===!1)throw xn(n,jw);return`:${eS(n)}:`}function Rp(n){if(Yw(n))throw xn(n,Ww);return n.toString()}function nS(n){return`@${Rp(n.getTime()/1e3)}`}function Ip(n,e){if(n<0)return-Ip(-n,e);const t=Math.pow(10,e);if(Math.abs(n*t%1-.5)<Number.EPSILON){const i=Math.floor(n*t);return(i%2===0?i:i+1)/t}else return Math.round(n*t)/t}function rS(n){const e=Ip(n,3);if(Math.floor(Math.abs(e)).toString().length>12)throw xn(n,Vw);const t=e.toString();return t.includes(".")?t:`${t}.0`}const iS="String";function sS(n){if(Qw.test(n))throw xn(n,iS);return`"${n.replace(/\\/g,"\\\\").replace(/"/g,'\\"')}"`}function oS(n){return n.description||n.toString().slice(7,-1)}function Gu(n){const e=oS(n);if(/^([a-zA-Z*])([!#$%&'*+\-.^_`|~\w:/]*)$/.test(e)===!1)throw xn(e,Xw);return e}function rl(n){switch(typeof n){case"number":if(!xe(n))throw xn(n,Hu);return Number.isInteger(n)?Rp(n):rS(n);case"string":return sS(n);case"symbol":return Gu(n);case"boolean":return Jw(n);case"object":if(n instanceof Date)return nS(n);if(n instanceof Uint8Array)return tS(n);if(n instanceof kp)return Gu(n);default:throw xn(n,Hu)}}function il(n){if(/^[a-z*][a-z0-9\-_.*]*$/.test(n)===!1)throw xn(n,Zw);return n}function Xl(n){return n==null?"":Object.entries(n).map(([e,t])=>t===!0?`;${il(e)}`:`;${il(e)}=${rl(t)}`).join("")}function Dp(n){return n instanceof Kr?`${rl(n.value)}${Xl(n.params)}`:rl(n)}function aS(n){return`(${n.value.map(Dp).join(" ")})${Xl(n.params)}`}function lS(n,e={whitespace:!0}){if(typeof n!="object")throw xn(n,Gw);const t=n instanceof Map?n.entries():Object.entries(n),r=e!=null&&e.whitespace?" ":"";return Array.from(t).map(([i,s])=>{s instanceof Kr||(s=new Kr(s));let o=il(i);return s.value===!0?o+=Xl(s.params):(o+="=",Array.isArray(s.value)?o+=aS(s):o+=Dp(s)),o}).join(`,${r}`)}function cS(n,e){return lS(n,e)}const dS=n=>n==="ot"||n==="sf"||n==="st",uS=n=>typeof n=="number"?xe(n):n!=null&&n!==""&&n!==!1;function hS(n,e){const t=new URL(n),r=new URL(e);if(t.origin!==r.origin)return n;const i=t.pathname.split("/").slice(1),s=r.pathname.split("/").slice(1,-1);for(;i[0]===s[0];)i.shift(),s.shift();for(;s.length;)s.shift(),i.unshift("..");return i.join("/")}function fS(){try{return crypto.randomUUID()}catch{try{const e=URL.createObjectURL(new Blob),t=e.toString();return URL.revokeObjectURL(e),t.slice(t.lastIndexOf("/")+1)}catch{let t=new Date().getTime();return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,i=>{const s=(t+Math.random()*16)%16|0;return t=Math.floor(t/16),(i=="x"?s:s&3|8).toString(16)})}}}const Us=n=>Math.round(n),pS=(n,e)=>(e!=null&&e.baseUrl&&(n=hS(n,e.baseUrl)),encodeURIComponent(n)),Ss=n=>Us(n/100)*100,mS={br:Us,d:Us,bl:Ss,dl:Ss,mtp:Ss,nor:pS,rtp:Ss,tb:Us};function gS(n,e){const t={};if(n==null||typeof n!="object")return t;const r=Object.keys(n).sort(),i=mt({},mS,e==null?void 0:e.formatters),s=e==null?void 0:e.filter;return r.forEach(o=>{if(s!=null&&s(o))return;let a=n[o];const l=i[o];l&&(a=l(a,e)),!(o==="v"&&a===1)&&(o=="pr"&&a===1||uS(a)&&(dS(o)&&typeof a=="string"&&(a=new kp(a)),t[o]=a))}),t}function Bp(n,e={}){return n?cS(gS(n,e),mt({whitespace:!1},e)):""}function yS(n,e={}){if(!n)return{};const t=Object.entries(n),r=Object.entries(Hw).concat(Object.entries((e==null?void 0:e.customHeaderMap)||{})),i=t.reduce((s,o)=>{var a,l;const[c,d]=o,u=((a=r.find(h=>h[1].includes(c)))==null?void 0:a[0])||or.REQUEST;return(l=s[u])!=null||(s[u]={}),s[u][c]=d,s},{});return Object.entries(i).reduce((s,[o,a])=>(s[o]=Bp(a,e),s),{})}function AS(n,e,t){return mt(n,yS(e,t))}const vS="CMCD";function bS(n,e={}){if(!n)return"";const t=Bp(n,e);return`${vS}=${encodeURIComponent(t)}`}const Ku=/CMCD=[^&#]+/;function xS(n,e,t){const r=bS(e,t);if(!r)return n;if(Ku.test(n))return n.replace(Ku,r);const i=n.includes("?")?"&":"?";return`${n}${i}${r}`}class ES{constructor(e){this.hls=void 0,this.config=void 0,this.media=void 0,this.sid=void 0,this.cid=void 0,this.useHeaders=!1,this.includeKeys=void 0,this.initialized=!1,this.starved=!1,this.buffering=!0,this.audioBuffer=void 0,this.videoBuffer=void 0,this.onWaiting=()=>{this.initialized&&(this.starved=!0),this.buffering=!0},this.onPlaying=()=>{this.initialized||(this.initialized=!0),this.buffering=!1},this.applyPlaylistData=i=>{try{this.apply(i,{ot:It.MANIFEST,su:!this.initialized})}catch(s){M.warn("Could not generate manifest CMCD data.",s)}},this.applyFragmentData=i=>{try{const s=i.frag,o=this.hls.levels[s.level],a=this.getObjectType(s),l={d:s.duration*1e3,ot:a};(a===It.VIDEO||a===It.AUDIO||a==It.MUXED)&&(l.br=o.bitrate/1e3,l.tb=this.getTopBandwidth(a)/1e3,l.bl=this.getBufferLength(a)),this.apply(i,l)}catch(s){M.warn("Could not generate segment CMCD data.",s)}},this.hls=e;const t=this.config=e.config,{cmcd:r}=t;r!=null&&(t.pLoader=this.createPlaylistLoader(),t.fLoader=this.createFragmentLoader(),this.sid=r.sessionId||fS(),this.cid=r.contentId,this.useHeaders=r.useHeaders===!0,this.includeKeys=r.includeKeys,this.registerListeners())}registerListeners(){const e=this.hls;e.on(w.MEDIA_ATTACHED,this.onMediaAttached,this),e.on(w.MEDIA_DETACHED,this.onMediaDetached,this),e.on(w.BUFFER_CREATED,this.onBufferCreated,this)}unregisterListeners(){const e=this.hls;e.off(w.MEDIA_ATTACHED,this.onMediaAttached,this),e.off(w.MEDIA_DETACHED,this.onMediaDetached,this),e.off(w.BUFFER_CREATED,this.onBufferCreated,this)}destroy(){this.unregisterListeners(),this.onMediaDetached(),this.hls=this.config=this.audioBuffer=this.videoBuffer=null,this.onWaiting=this.onPlaying=null}onMediaAttached(e,t){this.media=t.media,this.media.addEventListener("waiting",this.onWaiting),this.media.addEventListener("playing",this.onPlaying)}onMediaDetached(){this.media&&(this.media.removeEventListener("waiting",this.onWaiting),this.media.removeEventListener("playing",this.onPlaying),this.media=null)}onBufferCreated(e,t){var r,i;this.audioBuffer=(r=t.tracks.audio)==null?void 0:r.buffer,this.videoBuffer=(i=t.tracks.video)==null?void 0:i.buffer}createData(){var e;return{v:1,sf:nl.HLS,sid:this.sid,cid:this.cid,pr:(e=this.media)==null?void 0:e.playbackRate,mtp:this.hls.bandwidthEstimate/1e3}}apply(e,t={}){mt(t,this.createData());const r=t.ot===It.INIT||t.ot===It.VIDEO||t.ot===It.MUXED;this.starved&&r&&(t.bs=!0,t.su=!0,this.starved=!1),t.su==null&&(t.su=this.buffering);const{includeKeys:i}=this;i&&(t=Object.keys(t).reduce((s,o)=>(i.includes(o)&&(s[o]=t[o]),s),{})),this.useHeaders?(e.headers||(e.headers={}),AS(e.headers,t)):e.url=xS(e.url,t)}getObjectType(e){const{type:t}=e;if(t==="subtitle")return It.TIMED_TEXT;if(e.sn==="initSegment")return It.INIT;if(t==="audio")return It.AUDIO;if(t==="main")return this.hls.audioTracks.length?It.VIDEO:It.MUXED}getTopBandwidth(e){let t=0,r;const i=this.hls;if(e===It.AUDIO)r=i.audioTracks;else{const s=i.maxAutoLevel,o=s>-1?s+1:i.levels.length;r=i.levels.slice(0,o)}for(const s of r)s.bitrate>t&&(t=s.bitrate);return t>0?t:NaN}getBufferLength(e){const t=this.hls.media,r=e===It.AUDIO?this.audioBuffer:this.videoBuffer;return!r||!t?NaN:ot.bufferInfo(r,t.currentTime,this.config.maxBufferHole).len*1e3}createPlaylistLoader(){const{pLoader:e}=this.config,t=this.applyPlaylistData,r=e||this.config.loader;return class{constructor(s){this.loader=void 0,this.loader=new r(s)}get stats(){return this.loader.stats}get context(){return this.loader.context}destroy(){this.loader.destroy()}abort(){this.loader.abort()}load(s,o,a){t(s),this.loader.load(s,o,a)}}}createFragmentLoader(){const{fLoader:e}=this.config,t=this.applyFragmentData,r=e||this.config.loader;return class{constructor(s){this.loader=void 0,this.loader=new r(s)}get stats(){return this.loader.stats}get context(){return this.loader.context}destroy(){this.loader.destroy()}abort(){this.loader.abort()}load(s,o,a){t(s),this.loader.load(s,o,a)}}}}const _S=3e5;class wS{constructor(e){this.hls=void 0,this.log=void 0,this.loader=null,this.uri=null,this.pathwayId=".",this.pathwayPriority=null,this.timeToLoad=300,this.reloadTimer=-1,this.updated=0,this.started=!1,this.enabled=!0,this.levels=null,this.audioTracks=null,this.subtitleTracks=null,this.penalizedPathways={},this.hls=e,this.log=M.log.bind(M,"[content-steering]:"),this.registerListeners()}registerListeners(){const e=this.hls;e.on(w.MANIFEST_LOADING,this.onManifestLoading,this),e.on(w.MANIFEST_LOADED,this.onManifestLoaded,this),e.on(w.MANIFEST_PARSED,this.onManifestParsed,this),e.on(w.ERROR,this.onError,this)}unregisterListeners(){const e=this.hls;e&&(e.off(w.MANIFEST_LOADING,this.onManifestLoading,this),e.off(w.MANIFEST_LOADED,this.onManifestLoaded,this),e.off(w.MANIFEST_PARSED,this.onManifestParsed,this),e.off(w.ERROR,this.onError,this))}startLoad(){if(this.started=!0,this.clearTimeout(),this.enabled&&this.uri){if(this.updated){const e=this.timeToLoad*1e3-(performance.now()-this.updated);if(e>0){this.scheduleRefresh(this.uri,e);return}}this.loadSteeringManifest(this.uri)}}stopLoad(){this.started=!1,this.loader&&(this.loader.destroy(),this.loader=null),this.clearTimeout()}clearTimeout(){this.reloadTimer!==-1&&(self.clearTimeout(this.reloadTimer),this.reloadTimer=-1)}destroy(){this.unregisterListeners(),this.stopLoad(),this.hls=null,this.levels=this.audioTracks=this.subtitleTracks=null}removeLevel(e){const t=this.levels;t&&(this.levels=t.filter(r=>r!==e))}onManifestLoading(){this.stopLoad(),this.enabled=!0,this.timeToLoad=300,this.updated=0,this.uri=null,this.pathwayId=".",this.levels=this.audioTracks=this.subtitleTracks=null}onManifestLoaded(e,t){const{contentSteering:r}=t;r!==null&&(this.pathwayId=r.pathwayId,this.uri=r.uri,this.started&&this.startLoad())}onManifestParsed(e,t){this.audioTracks=t.audioTracks,this.subtitleTracks=t.subtitleTracks}onError(e,t){const{errorAction:r}=t;if((r==null?void 0:r.action)===St.SendAlternateToPenaltyBox&&r.flags===Zt.MoveAllAlternatesMatchingHost){const i=this.levels;let s=this.pathwayPriority,o=this.pathwayId;if(t.context){const{groupId:a,pathwayId:l,type:c}=t.context;a&&i?o=this.getPathwayForGroupId(a,c,o):l&&(o=l)}o in this.penalizedPathways||(this.penalizedPathways[o]=performance.now()),!s&&i&&(s=i.reduce((a,l)=>(a.indexOf(l.pathwayId)===-1&&a.push(l.pathwayId),a),[])),s&&s.length>1&&(this.updatePathwayPriority(s),r.resolved=this.pathwayId!==o),r.resolved||M.warn(`Could not resolve ${t.details} ("${t.error.message}") with content-steering for Pathway: ${o} levels: ${i&&i.length} priorities: ${JSON.stringify(s)} penalized: ${JSON.stringify(this.penalizedPathways)}`)}}filterParsedLevels(e){this.levels=e;let t=this.getLevelsForPathway(this.pathwayId);if(t.length===0){const r=e[0].pathwayId;this.log(`No levels found in Pathway ${this.pathwayId}. Setting initial Pathway to "${r}"`),t=this.getLevelsForPathway(r),this.pathwayId=r}return t.length!==e.length?(this.log(`Found ${t.length}/${e.length} levels in Pathway "${this.pathwayId}"`),t):e}getLevelsForPathway(e){return this.levels===null?[]:this.levels.filter(t=>e===t.pathwayId)}updatePathwayPriority(e){this.pathwayPriority=e;let t;const r=this.penalizedPathways,i=performance.now();Object.keys(r).forEach(s=>{i-r[s]>_S&&delete r[s]});for(let s=0;s<e.length;s++){const o=e[s];if(o in r)continue;if(o===this.pathwayId)return;const a=this.hls.nextLoadLevel,l=this.hls.levels[a];if(t=this.getLevelsForPathway(o),t.length>0){this.log(`Setting Pathway to "${o}"`),this.pathwayId=o,Zf(t),this.hls.trigger(w.LEVELS_UPDATED,{levels:t});const c=this.hls.levels[a];l&&c&&this.levels&&(c.attrs["STABLE-VARIANT-ID"]!==l.attrs["STABLE-VARIANT-ID"]&&c.bitrate!==l.bitrate&&this.log(`Unstable Pathways change from bitrate ${l.bitrate} to ${c.bitrate}`),this.hls.nextLoadLevel=a);break}}}getPathwayForGroupId(e,t,r){const i=this.getLevelsForPathway(r).concat(this.levels||[]);for(let s=0;s<i.length;s++)if(t===ze.AUDIO_TRACK&&i[s].hasAudioGroup(e)||t===ze.SUBTITLE_TRACK&&i[s].hasSubtitleGroup(e))return i[s].pathwayId;return r}clonePathways(e){const t=this.levels;if(!t)return;const r={},i={};e.forEach(s=>{const{ID:o,"BASE-ID":a,"URI-REPLACEMENT":l}=s;if(t.some(d=>d.pathwayId===o))return;const c=this.getLevelsForPathway(a).map(d=>{const u=new ut(d.attrs);u["PATHWAY-ID"]=o;const h=u.AUDIO&&`${u.AUDIO}_clone_${o}`,y=u.SUBTITLES&&`${u.SUBTITLES}_clone_${o}`;h&&(r[u.AUDIO]=h,u.AUDIO=h),y&&(i[u.SUBTITLES]=y,u.SUBTITLES=y);const m=Pp(d.uri,u["STABLE-VARIANT-ID"],"PER-VARIANT-URIS",l),A=new Hr({attrs:u,audioCodec:d.audioCodec,bitrate:d.bitrate,height:d.height,name:d.name,url:m,videoCodec:d.videoCodec,width:d.width});if(d.audioGroups)for(let b=1;b<d.audioGroups.length;b++)A.addGroupId("audio",`${d.audioGroups[b]}_clone_${o}`);if(d.subtitleGroups)for(let b=1;b<d.subtitleGroups.length;b++)A.addGroupId("text",`${d.subtitleGroups[b]}_clone_${o}`);return A});t.push(...c),zu(this.audioTracks,r,l,o),zu(this.subtitleTracks,i,l,o)})}loadSteeringManifest(e){const t=this.hls.config,r=t.loader;this.loader&&this.loader.destroy(),this.loader=new r(t);let i;try{i=new self.URL(e)}catch{this.enabled=!1,this.log(`Failed to parse Steering Manifest URI: ${e}`);return}if(i.protocol!=="data:"){const d=(this.hls.bandwidthEstimate||t.abrEwmaDefaultEstimate)|0;i.searchParams.set("_HLS_pathway",this.pathwayId),i.searchParams.set("_HLS_throughput",""+d)}const s={responseType:"json",url:i.href},o=t.steeringManifestLoadPolicy.default,a=o.errorRetry||o.timeoutRetry||{},l={loadPolicy:o,timeout:o.maxLoadTimeMs,maxRetry:a.maxNumRetry||0,retryDelay:a.retryDelayMs||0,maxRetryDelay:a.maxRetryDelayMs||0},c={onSuccess:(d,u,h,y)=>{this.log(`Loaded steering manifest: "${i}"`);const m=d.data;if(m.VERSION!==1){this.log(`Steering VERSION ${m.VERSION} not supported!`);return}this.updated=performance.now(),this.timeToLoad=m.TTL;const{"RELOAD-URI":A,"PATHWAY-CLONES":b,"PATHWAY-PRIORITY":S}=m;if(A)try{this.uri=new self.URL(A,i).href}catch{this.enabled=!1,this.log(`Failed to parse Steering Manifest RELOAD-URI: ${A}`);return}this.scheduleRefresh(this.uri||h.url),b&&this.clonePathways(b);const C={steeringManifest:m,url:i.toString()};this.hls.trigger(w.STEERING_MANIFEST_LOADED,C),S&&this.updatePathwayPriority(S)},onError:(d,u,h,y)=>{if(this.log(`Error loading steering manifest: ${d.code} ${d.text} (${u.url})`),this.stopLoad(),d.code===410){this.enabled=!1,this.log(`Steering manifest ${u.url} no longer available`);return}let m=this.timeToLoad*1e3;if(d.code===429){const A=this.loader;if(typeof(A==null?void 0:A.getResponseHeader)=="function"){const b=A.getResponseHeader("Retry-After");b&&(m=parseFloat(b)*1e3)}this.log(`Steering manifest ${u.url} rate limited`);return}this.scheduleRefresh(this.uri||u.url,m)},onTimeout:(d,u,h)=>{this.log(`Timeout loading steering manifest (${u.url})`),this.scheduleRefresh(this.uri||u.url)}};this.log(`Requesting steering manifest: ${i}`),this.loader.load(s,l,c)}scheduleRefresh(e,t=this.timeToLoad*1e3){this.clearTimeout(),this.reloadTimer=self.setTimeout(()=>{var r;const i=(r=this.hls)==null?void 0:r.media;if(i&&!i.ended){this.loadSteeringManifest(e);return}this.scheduleRefresh(e,this.timeToLoad*1e3)},t)}}function zu(n,e,t,r){n&&Object.keys(e).forEach(i=>{const s=n.filter(o=>o.groupId===i).map(o=>{const a=mt({},o);return a.details=void 0,a.attrs=new ut(a.attrs),a.url=a.attrs.URI=Pp(o.url,o.attrs["STABLE-RENDITION-ID"],"PER-RENDITION-URIS",t),a.groupId=a.attrs["GROUP-ID"]=e[i],a.attrs["PATHWAY-ID"]=r,a});n.push(...s)})}function Pp(n,e,t,r){const{HOST:i,PARAMS:s,[t]:o}=r;let a;e&&(a=o==null?void 0:o[e],a&&(n=a));const l=new self.URL(n);return i&&!a&&(l.host=i),s&&Object.keys(s).sort().forEach(c=>{c&&l.searchParams.set(c,s[c])}),l.href}const SS=/^age:\s*[\d.]+\s*$/im;class Op{constructor(e){this.xhrSetup=void 0,this.requestTimeout=void 0,this.retryTimeout=void 0,this.retryDelay=void 0,this.config=null,this.callbacks=null,this.context=null,this.loader=null,this.stats=void 0,this.xhrSetup=e&&e.xhrSetup||null,this.stats=new Lo,this.retryDelay=0}destroy(){this.callbacks=null,this.abortInternal(),this.loader=null,this.config=null,this.context=null,this.xhrSetup=null,this.stats=null}abortInternal(){const e=this.loader;self.clearTimeout(this.requestTimeout),self.clearTimeout(this.retryTimeout),e&&(e.onreadystatechange=null,e.onprogress=null,e.readyState!==4&&(this.stats.aborted=!0,e.abort()))}abort(){var e;this.abortInternal(),(e=this.callbacks)!=null&&e.onAbort&&this.callbacks.onAbort(this.stats,this.context,this.loader)}load(e,t,r){if(this.stats.loading.start)throw new Error("Loader can only be used once.");this.stats.loading.start=self.performance.now(),this.context=e,this.config=t,this.callbacks=r,this.loadInternal()}loadInternal(){const{config:e,context:t}=this;if(!e||!t)return;const r=this.loader=new self.XMLHttpRequest,i=this.stats;i.loading.first=0,i.loaded=0,i.aborted=!1;const s=this.xhrSetup;s?Promise.resolve().then(()=>{if(!this.stats.aborted)return s(r,t.url)}).catch(o=>(r.open("GET",t.url,!0),s(r,t.url))).then(()=>{this.stats.aborted||this.openAndSendXhr(r,t,e)}).catch(o=>{this.callbacks.onError({code:r.status,text:o.message},t,r,i)}):this.openAndSendXhr(r,t,e)}openAndSendXhr(e,t,r){e.readyState||e.open("GET",t.url,!0);const i=t.headers,{maxTimeToFirstByteMs:s,maxLoadTimeMs:o}=r.loadPolicy;if(i)for(const a in i)e.setRequestHeader(a,i[a]);t.rangeEnd&&e.setRequestHeader("Range","bytes="+t.rangeStart+"-"+(t.rangeEnd-1)),e.onreadystatechange=this.readystatechange.bind(this),e.onprogress=this.loadprogress.bind(this),e.responseType=t.responseType,self.clearTimeout(this.requestTimeout),r.timeout=s&&xe(s)?s:o,this.requestTimeout=self.setTimeout(this.loadtimeout.bind(this),r.timeout),e.send()}readystatechange(){const{context:e,loader:t,stats:r}=this;if(!e||!t)return;const i=t.readyState,s=this.config;if(!r.aborted&&i>=2&&(r.loading.first===0&&(r.loading.first=Math.max(self.performance.now(),r.loading.start),s.timeout!==s.loadPolicy.maxLoadTimeMs&&(self.clearTimeout(this.requestTimeout),s.timeout=s.loadPolicy.maxLoadTimeMs,this.requestTimeout=self.setTimeout(this.loadtimeout.bind(this),s.loadPolicy.maxLoadTimeMs-(r.loading.first-r.loading.start)))),i===4)){self.clearTimeout(this.requestTimeout),t.onreadystatechange=null,t.onprogress=null;const o=t.status,a=t.responseType!=="text";if(o>=200&&o<300&&(a&&t.response||t.responseText!==null)){r.loading.end=Math.max(self.performance.now(),r.loading.first);const l=a?t.response:t.responseText,c=t.responseType==="arraybuffer"?l.byteLength:l.length;if(r.loaded=r.total=c,r.bwEstimate=r.total*8e3/(r.loading.end-r.loading.first),!this.callbacks)return;const d=this.callbacks.onProgress;if(d&&d(r,e,l,t),!this.callbacks)return;const u={url:t.responseURL,data:l,code:o};this.callbacks.onSuccess(u,r,e,t)}else{const l=s.loadPolicy.errorRetry,c=r.retry,d={url:e.url,data:void 0,code:o};to(l,c,!1,d)?this.retry(l):(M.error(`${o} while loading ${e.url}`),this.callbacks.onError({code:o,text:t.statusText},e,t,r))}}}loadtimeout(){var e;const t=(e=this.config)==null?void 0:e.loadPolicy.timeoutRetry,r=this.stats.retry;if(to(t,r,!0))this.retry(t);else{var i;M.warn(`timeout while loading ${(i=this.context)==null?void 0:i.url}`);const s=this.callbacks;s&&(this.abortInternal(),s.onTimeout(this.stats,this.context,this.loader))}}retry(e){const{context:t,stats:r}=this;this.retryDelay=Nl(e,r.retry),r.retry++,M.warn(`${status?"HTTP Status "+status:"Timeout"} while loading ${t==null?void 0:t.url}, retrying ${r.retry}/${e.maxNumRetry} in ${this.retryDelay}ms`),this.abortInternal(),this.loader=null,self.clearTimeout(this.retryTimeout),this.retryTimeout=self.setTimeout(this.loadInternal.bind(this),this.retryDelay)}loadprogress(e){const t=this.stats;t.loaded=e.loaded,e.lengthComputable&&(t.total=e.total)}getCacheAge(){let e=null;if(this.loader&&SS.test(this.loader.getAllResponseHeaders())){const t=this.loader.getResponseHeader("age");e=t?parseFloat(t):null}return e}getResponseHeader(e){return this.loader&&new RegExp(`^${e}:\\s*[\\d.]+\\s*$`,"im").test(this.loader.getAllResponseHeaders())?this.loader.getResponseHeader(e):null}}function TS(){if(self.fetch&&self.AbortController&&self.ReadableStream&&self.Request)try{return new self.ReadableStream({}),!0}catch{}return!1}const CS=/(\d+)-(\d+)\/(\d+)/;class qu{constructor(e){this.fetchSetup=void 0,this.requestTimeout=void 0,this.request=null,this.response=null,this.controller=void 0,this.context=null,this.config=null,this.callbacks=null,this.stats=void 0,this.loader=null,this.fetchSetup=e.fetchSetup||IS,this.controller=new self.AbortController,this.stats=new Lo}destroy(){this.loader=this.callbacks=this.context=this.config=this.request=null,this.abortInternal(),this.response=null,this.fetchSetup=this.controller=this.stats=null}abortInternal(){this.controller&&!this.stats.loading.end&&(this.stats.aborted=!0,this.controller.abort())}abort(){var e;this.abortInternal(),(e=this.callbacks)!=null&&e.onAbort&&this.callbacks.onAbort(this.stats,this.context,this.response)}load(e,t,r){const i=this.stats;if(i.loading.start)throw new Error("Loader can only be used once.");i.loading.start=self.performance.now();const s=LS(e,this.controller.signal),o=r.onProgress,a=e.responseType==="arraybuffer",l=a?"byteLength":"length",{maxTimeToFirstByteMs:c,maxLoadTimeMs:d}=t.loadPolicy;this.context=e,this.config=t,this.callbacks=r,this.request=this.fetchSetup(e,s),self.clearTimeout(this.requestTimeout),t.timeout=c&&xe(c)?c:d,this.requestTimeout=self.setTimeout(()=>{this.abortInternal(),r.onTimeout(i,e,this.response)},t.timeout),self.fetch(this.request).then(u=>{this.response=this.loader=u;const h=Math.max(self.performance.now(),i.loading.start);if(self.clearTimeout(this.requestTimeout),t.timeout=d,this.requestTimeout=self.setTimeout(()=>{this.abortInternal(),r.onTimeout(i,e,this.response)},d-(h-i.loading.start)),!u.ok){const{status:y,statusText:m}=u;throw new DS(m||"fetch, bad network response",y,u)}return i.loading.first=h,i.total=RS(u.headers)||i.total,o&&xe(t.highWaterMark)?this.loadProgressively(u,i,e,t.highWaterMark,o):a?u.arrayBuffer():e.responseType==="json"?u.json():u.text()}).then(u=>{const h=this.response;if(!h)throw new Error("loader destroyed");self.clearTimeout(this.requestTimeout),i.loading.end=Math.max(self.performance.now(),i.loading.first);const y=u[l];y&&(i.loaded=i.total=y);const m={url:h.url,data:u,code:h.status};o&&!xe(t.highWaterMark)&&o(i,e,u,h),r.onSuccess(m,i,e,h)}).catch(u=>{if(self.clearTimeout(this.requestTimeout),i.aborted)return;const h=u&&u.code||0,y=u?u.message:null;r.onError({code:h,text:y},e,u?u.details:null,i)})}getCacheAge(){let e=null;if(this.response){const t=this.response.headers.get("age");e=t?parseFloat(t):null}return e}getResponseHeader(e){return this.response?this.response.headers.get(e):null}loadProgressively(e,t,r,i=0,s){const o=new np,a=e.body.getReader(),l=()=>a.read().then(c=>{if(c.done)return o.dataLength&&s(t,r,o.flush(),e),Promise.resolve(new ArrayBuffer(0));const d=c.value,u=d.length;return t.loaded+=u,u<i||o.dataLength?(o.push(d),o.dataLength>=i&&s(t,r,o.flush(),e)):s(t,r,d,e),l()}).catch(()=>Promise.reject());return l()}}function LS(n,e){const t={method:"GET",mode:"cors",credentials:"same-origin",signal:e,headers:new self.Headers(mt({},n.headers))};return n.rangeEnd&&t.headers.set("Range","bytes="+n.rangeStart+"-"+String(n.rangeEnd-1)),t}function kS(n){const e=CS.exec(n);if(e)return parseInt(e[2])-parseInt(e[1])+1}function RS(n){const e=n.get("Content-Range");if(e){const r=kS(e);if(xe(r))return r}const t=n.get("Content-Length");if(t)return parseInt(t)}function IS(n,e){return new self.Request(n.url,e)}class DS extends Error{constructor(e,t,r){super(e),this.code=void 0,this.details=void 0,this.code=t,this.details=r}}const BS=/\s/,PS={newCue(n,e,t,r){const i=[];let s,o,a,l,c;const d=self.VTTCue||self.TextTrackCue;for(let h=0;h<r.rows.length;h++)if(s=r.rows[h],a=!0,l=0,c="",!s.isEmpty()){var u;for(let A=0;A<s.chars.length;A++)BS.test(s.chars[A].uchar)&&a?l++:(c+=s.chars[A].uchar,a=!1);s.cueStartTime=e,e===t&&(t+=1e-4),l>=16?l--:l++;const y=wp(c.trim()),m=Yl(e,t,y);n!=null&&(u=n.cues)!=null&&u.getCueById(m)||(o=new d(e,t,y),o.id=m,o.line=h+1,o.align="left",o.position=10+Math.min(80,Math.floor(l*8/32)*10),i.push(o))}return n&&i.length&&(i.sort((h,y)=>h.line==="auto"||y.line==="auto"?0:h.line>8&&y.line>8?y.line-h.line:h.line-y.line),i.forEach(h=>Wf(n,h))),i}},OS={maxTimeToFirstByteMs:8e3,maxLoadTimeMs:2e4,timeoutRetry:null,errorRetry:null},Mp=_t(_t({autoStartLoad:!0,startPosition:-1,defaultAudioCodec:void 0,debug:!1,capLevelOnFPSDrop:!1,capLevelToPlayerSize:!1,ignoreDevicePixelRatio:!1,preferManagedMediaSource:!0,initialLiveManifestSize:1,maxBufferLength:30,backBufferLength:1/0,frontBufferFlushThreshold:1/0,maxBufferSize:60*1e3*1e3,maxBufferHole:.1,highBufferWatchdogPeriod:2,nudgeOffset:.1,nudgeMaxRetry:3,maxFragLookUpTolerance:.25,liveSyncDurationCount:3,liveMaxLatencyDurationCount:1/0,liveSyncDuration:void 0,liveMaxLatencyDuration:void 0,maxLiveSyncPlaybackRate:1,liveDurationInfinity:!1,liveBackBufferLength:null,maxMaxBufferLength:600,enableWorker:!0,workerPath:null,enableSoftwareAES:!0,startLevel:void 0,startFragPrefetch:!1,fpsDroppedMonitoringPeriod:5e3,fpsDroppedMonitoringThreshold:.2,appendErrorMaxRetry:3,loader:Op,fLoader:void 0,pLoader:void 0,xhrSetup:void 0,licenseXhrSetup:void 0,licenseResponseCallback:void 0,abrController:u3,bufferController:mw,capLevelController:Ql,errorController:J_,fpsController:$w,stretchShortVideoTrack:!1,maxAudioFramesDrift:1,forceKeyFrameOnDiscontinuity:!0,abrEwmaFastLive:3,abrEwmaSlowLive:9,abrEwmaFastVoD:3,abrEwmaSlowVoD:9,abrEwmaDefaultEstimate:5e5,abrEwmaDefaultEstimateMax:5e6,abrBandWidthFactor:.95,abrBandWidthUpFactor:.7,abrMaxWithRealBitrate:!1,maxStarvationDelay:4,maxLoadingDelay:4,minAutoBitrate:0,emeEnabled:!1,widevineLicenseUrl:void 0,drmSystems:{},drmSystemOptions:{},requestMediaKeySystemAccessFunc:Pf,testBandwidth:!0,progressive:!1,lowLatencyMode:!0,cmcd:void 0,enableDateRangeMetadataCues:!0,enableEmsgMetadataCues:!0,enableID3MetadataCues:!0,useMediaCapabilities:!0,certLoadPolicy:{default:OS},keyLoadPolicy:{default:{maxTimeToFirstByteMs:8e3,maxLoadTimeMs:2e4,timeoutRetry:{maxNumRetry:1,retryDelayMs:1e3,maxRetryDelayMs:2e4,backoff:"linear"},errorRetry:{maxNumRetry:8,retryDelayMs:1e3,maxRetryDelayMs:2e4,backoff:"linear"}}},manifestLoadPolicy:{default:{maxTimeToFirstByteMs:1/0,maxLoadTimeMs:2e4,timeoutRetry:{maxNumRetry:2,retryDelayMs:0,maxRetryDelayMs:0},errorRetry:{maxNumRetry:1,retryDelayMs:1e3,maxRetryDelayMs:8e3}}},playlistLoadPolicy:{default:{maxTimeToFirstByteMs:1e4,maxLoadTimeMs:2e4,timeoutRetry:{maxNumRetry:2,retryDelayMs:0,maxRetryDelayMs:0},errorRetry:{maxNumRetry:2,retryDelayMs:1e3,maxRetryDelayMs:8e3}}},fragLoadPolicy:{default:{maxTimeToFirstByteMs:1e4,maxLoadTimeMs:12e4,timeoutRetry:{maxNumRetry:4,retryDelayMs:0,maxRetryDelayMs:0},errorRetry:{maxNumRetry:6,retryDelayMs:1e3,maxRetryDelayMs:8e3}}},steeringManifestLoadPolicy:{default:{maxTimeToFirstByteMs:1e4,maxLoadTimeMs:2e4,timeoutRetry:{maxNumRetry:2,retryDelayMs:0,maxRetryDelayMs:0},errorRetry:{maxNumRetry:1,retryDelayMs:1e3,maxRetryDelayMs:8e3}}},manifestLoadingTimeOut:1e4,manifestLoadingMaxRetry:1,manifestLoadingRetryDelay:1e3,manifestLoadingMaxRetryTimeout:64e3,levelLoadingTimeOut:1e4,levelLoadingMaxRetry:4,levelLoadingRetryDelay:1e3,levelLoadingMaxRetryTimeout:64e3,fragLoadingTimeOut:2e4,fragLoadingMaxRetry:6,fragLoadingRetryDelay:1e3,fragLoadingMaxRetryTimeout:64e3},MS()),{},{subtitleStreamController:uw,subtitleTrackController:fw,timelineController:Nw,audioStreamController:cw,audioTrackController:dw,emeController:Ir,cmcdController:ES,contentSteeringController:wS});function MS(){return{cueHandler:PS,enableWebVTT:!0,enableIMSC1:!0,enableCEA708Captions:!0,captionsTextTrack1Label:"English",captionsTextTrack1LanguageCode:"en",captionsTextTrack2Label:"Spanish",captionsTextTrack2LanguageCode:"es",captionsTextTrack3Label:"Unknown CC",captionsTextTrack3LanguageCode:"",captionsTextTrack4Label:"Unknown CC",captionsTextTrack4LanguageCode:"",renderTextTracksNatively:!0}}function FS(n,e){if((e.liveSyncDurationCount||e.liveMaxLatencyDurationCount)&&(e.liveSyncDuration||e.liveMaxLatencyDuration))throw new Error("Illegal hls.js config: don't mix up liveSyncDurationCount/liveMaxLatencyDurationCount and liveSyncDuration/liveMaxLatencyDuration");if(e.liveMaxLatencyDurationCount!==void 0&&(e.liveSyncDurationCount===void 0||e.liveMaxLatencyDurationCount<=e.liveSyncDurationCount))throw new Error('Illegal hls.js config: "liveMaxLatencyDurationCount" must be greater than "liveSyncDurationCount"');if(e.liveMaxLatencyDuration!==void 0&&(e.liveSyncDuration===void 0||e.liveMaxLatencyDuration<=e.liveSyncDuration))throw new Error('Illegal hls.js config: "liveMaxLatencyDuration" must be greater than "liveSyncDuration"');const t=sl(n),r=["manifest","level","frag"],i=["TimeOut","MaxRetry","RetryDelay","MaxRetryTimeout"];return r.forEach(s=>{const o=`${s==="level"?"playlist":s}LoadPolicy`,a=e[o]===void 0,l=[];i.forEach(c=>{const d=`${s}Loading${c}`,u=e[d];if(u!==void 0&&a){l.push(d);const h=t[o].default;switch(e[o]={default:h},c){case"TimeOut":h.maxLoadTimeMs=u,h.maxTimeToFirstByteMs=u;break;case"MaxRetry":h.errorRetry.maxNumRetry=u,h.timeoutRetry.maxNumRetry=u;break;case"RetryDelay":h.errorRetry.retryDelayMs=u,h.timeoutRetry.retryDelayMs=u;break;case"MaxRetryTimeout":h.errorRetry.maxRetryDelayMs=u,h.timeoutRetry.maxRetryDelayMs=u;break}}}),l.length&&M.warn(`hls.js config: "${l.join('", "')}" setting(s) are deprecated, use "${o}": ${JSON.stringify(e[o])}`)}),_t(_t({},t),e)}function sl(n){return n&&typeof n=="object"?Array.isArray(n)?n.map(sl):Object.keys(n).reduce((e,t)=>(e[t]=sl(n[t]),e),{}):n}function NS(n){const e=n.loader;e!==qu&&e!==Op?(M.log("[config]: Custom loader detected, cannot enable progressive streaming"),n.progressive=!1):TS()&&(n.loader=qu,n.progressive=!0,n.enableSoftwareAES=!0,M.log("[config]: Progressive streaming enabled, using FetchLoader"))}let Ea;class US extends Ul{constructor(e,t){super(e,"[level-controller]"),this._levels=[],this._firstLevel=-1,this._maxAutoLevel=-1,this._startLevel=void 0,this.currentLevel=null,this.currentLevelIndex=-1,this.manualLevelIndex=-1,this.steering=void 0,this.onParsedComplete=void 0,this.steering=t,this._registerListeners()}_registerListeners(){const{hls:e}=this;e.on(w.MANIFEST_LOADING,this.onManifestLoading,this),e.on(w.MANIFEST_LOADED,this.onManifestLoaded,this),e.on(w.LEVEL_LOADED,this.onLevelLoaded,this),e.on(w.LEVELS_UPDATED,this.onLevelsUpdated,this),e.on(w.FRAG_BUFFERED,this.onFragBuffered,this),e.on(w.ERROR,this.onError,this)}_unregisterListeners(){const{hls:e}=this;e.off(w.MANIFEST_LOADING,this.onManifestLoading,this),e.off(w.MANIFEST_LOADED,this.onManifestLoaded,this),e.off(w.LEVEL_LOADED,this.onLevelLoaded,this),e.off(w.LEVELS_UPDATED,this.onLevelsUpdated,this),e.off(w.FRAG_BUFFERED,this.onFragBuffered,this),e.off(w.ERROR,this.onError,this)}destroy(){this._unregisterListeners(),this.steering=null,this.resetLevels(),super.destroy()}stopLoad(){this._levels.forEach(t=>{t.loadError=0,t.fragmentError=0}),super.stopLoad()}resetLevels(){this._startLevel=void 0,this.manualLevelIndex=-1,this.currentLevelIndex=-1,this.currentLevel=null,this._levels=[],this._maxAutoLevel=-1}onManifestLoading(e,t){this.resetLevels()}onManifestLoaded(e,t){const r=this.hls.config.preferManagedMediaSource,i=[],s={},o={};let a=!1,l=!1,c=!1;t.levels.forEach(d=>{var u,h;const y=d.attrs;let{audioCodec:m,videoCodec:A}=d;((u=m)==null?void 0:u.indexOf("mp4a.40.34"))!==-1&&(Ea||(Ea=/chrome|firefox/i.test(navigator.userAgent)),Ea&&(d.audioCodec=m=void 0)),m&&(d.audioCodec=m=Zs(m,r)),((h=A)==null?void 0:h.indexOf("avc1"))===0&&(A=d.videoCodec=L_(A));const{width:b,height:S,unknownCodecs:C}=d;if(a||(a=!!(b&&S)),l||(l=!!A),c||(c=!!m),C!=null&&C.length||m&&!aa(m,"audio",r)||A&&!aa(A,"video",r))return;const{CODECS:R,"FRAME-RATE":D,"HDCP-LEVEL":B,"PATHWAY-ID":K,RESOLUTION:N,"VIDEO-RANGE":z}=y,O=`${`${K||"."}-`}${d.bitrate}-${N}-${D}-${R}-${z}-${B}`;if(s[O])if(s[O].uri!==d.url&&!d.attrs["PATHWAY-ID"]){const ee=o[O]+=1;d.attrs["PATHWAY-ID"]=new Array(ee+1).join(".");const _e=new Hr(d);s[O]=_e,i.push(_e)}else s[O].addGroupId("audio",y.AUDIO),s[O].addGroupId("text",y.SUBTITLES);else{const ee=new Hr(d);s[O]=ee,o[O]=1,i.push(ee)}}),this.filterAndSortMediaOptions(i,t,a,l,c)}filterAndSortMediaOptions(e,t,r,i,s){let o=[],a=[],l=e;if((r||i)&&s&&(l=l.filter(({videoCodec:m,videoRange:A,width:b,height:S})=>(!!m||!!(b&&S))&&H_(A))),l.length===0){Promise.resolve().then(()=>{if(this.hls){t.levels.length&&this.warn(`One or more CODECS in variant not supported: ${JSON.stringify(t.levels[0].attrs)}`);const m=new Error("no level with compatible codecs found in manifest");this.hls.trigger(w.ERROR,{type:Be.MEDIA_ERROR,details:G.MANIFEST_INCOMPATIBLE_CODECS_ERROR,fatal:!0,url:t.url,error:m,reason:m.message})}});return}if(t.audioTracks){const{preferManagedMediaSource:m}=this.hls.config;o=t.audioTracks.filter(A=>!A.audioCodec||aa(A.audioCodec,"audio",m)),ju(o)}t.subtitles&&(a=t.subtitles,ju(a));const c=l.slice(0);l.sort((m,A)=>{if(m.attrs["HDCP-LEVEL"]!==A.attrs["HDCP-LEVEL"])return(m.attrs["HDCP-LEVEL"]||"")>(A.attrs["HDCP-LEVEL"]||"")?1:-1;if(r&&m.height!==A.height)return m.height-A.height;if(m.frameRate!==A.frameRate)return m.frameRate-A.frameRate;if(m.videoRange!==A.videoRange)return Js.indexOf(m.videoRange)-Js.indexOf(A.videoRange);if(m.videoCodec!==A.videoCodec){const b=Xd(m.videoCodec),S=Xd(A.videoCodec);if(b!==S)return S-b}if(m.uri===A.uri&&m.codecSet!==A.codecSet){const b=Xs(m.codecSet),S=Xs(A.codecSet);if(b!==S)return S-b}return m.averageBitrate!==A.averageBitrate?m.averageBitrate-A.averageBitrate:0});let d=c[0];if(this.steering&&(l=this.steering.filterParsedLevels(l),l.length!==c.length)){for(let m=0;m<c.length;m++)if(c[m].pathwayId===l[0].pathwayId){d=c[m];break}}this._levels=l;for(let m=0;m<l.length;m++)if(l[m]===d){var u;this._firstLevel=m;const A=d.bitrate,b=this.hls.bandwidthEstimate;if(this.log(`manifest loaded, ${l.length} level(s) found, first bitrate: ${A}`),((u=this.hls.userConfig)==null?void 0:u.abrEwmaDefaultEstimate)===void 0){const S=Math.min(A,this.hls.config.abrEwmaDefaultEstimateMax);S>b&&b===Mp.abrEwmaDefaultEstimate&&(this.hls.bandwidthEstimate=S)}break}const h=s&&!i,y={levels:l,audioTracks:o,subtitleTracks:a,sessionData:t.sessionData,sessionKeys:t.sessionKeys,firstLevel:this._firstLevel,stats:t.stats,audio:s,video:i,altAudio:!h&&o.some(m=>!!m.url)};this.hls.trigger(w.MANIFEST_PARSED,y),(this.hls.config.autoStartLoad||this.hls.forceStartLoad)&&this.hls.startLoad(this.hls.config.startPosition)}get levels(){return this._levels.length===0?null:this._levels}get level(){return this.currentLevelIndex}set level(e){const t=this._levels;if(t.length===0)return;if(e<0||e>=t.length){const d=new Error("invalid level idx"),u=e<0;if(this.hls.trigger(w.ERROR,{type:Be.OTHER_ERROR,details:G.LEVEL_SWITCH_ERROR,level:e,fatal:u,error:d,reason:d.message}),u)return;e=Math.min(e,t.length-1)}const r=this.currentLevelIndex,i=this.currentLevel,s=i?i.attrs["PATHWAY-ID"]:void 0,o=t[e],a=o.attrs["PATHWAY-ID"];if(this.currentLevelIndex=e,this.currentLevel=o,r===e&&o.details&&i&&s===a)return;this.log(`Switching to level ${e} (${o.height?o.height+"p ":""}${o.videoRange?o.videoRange+" ":""}${o.codecSet?o.codecSet+" ":""}@${o.bitrate})${a?" with Pathway "+a:""} from level ${r}${s?" with Pathway "+s:""}`);const l={level:e,attrs:o.attrs,details:o.details,bitrate:o.bitrate,averageBitrate:o.averageBitrate,maxBitrate:o.maxBitrate,realBitrate:o.realBitrate,width:o.width,height:o.height,codecSet:o.codecSet,audioCodec:o.audioCodec,videoCodec:o.videoCodec,audioGroups:o.audioGroups,subtitleGroups:o.subtitleGroups,loaded:o.loaded,loadError:o.loadError,fragmentError:o.fragmentError,name:o.name,id:o.id,uri:o.uri,url:o.url,urlId:0,audioGroupIds:o.audioGroupIds,textGroupIds:o.textGroupIds};this.hls.trigger(w.LEVEL_SWITCHING,l);const c=o.details;if(!c||c.live){const d=this.switchParams(o.uri,i==null?void 0:i.details);this.loadPlaylist(d)}}get manualLevel(){return this.manualLevelIndex}set manualLevel(e){this.manualLevelIndex=e,this._startLevel===void 0&&(this._startLevel=e),e!==-1&&(this.level=e)}get firstLevel(){return this._firstLevel}set firstLevel(e){this._firstLevel=e}get startLevel(){if(this._startLevel===void 0){const e=this.hls.config.startLevel;return e!==void 0?e:this.hls.firstAutoLevel}return this._startLevel}set startLevel(e){this._startLevel=e}onError(e,t){t.fatal||!t.context||t.context.type===ze.LEVEL&&t.context.level===this.level&&this.checkRetry(t)}onFragBuffered(e,{frag:t}){if(t!==void 0&&t.type===De.MAIN){const r=t.elementaryStreams;if(!Object.keys(r).some(s=>!!r[s]))return;const i=this._levels[t.level];i!=null&&i.loadError&&(this.log(`Resetting level error count of ${i.loadError} on frag buffered`),i.loadError=0)}}onLevelLoaded(e,t){var r;const{level:i,details:s}=t,o=this._levels[i];if(!o){var a;this.warn(`Invalid level index ${i}`),(a=t.deliveryDirectives)!=null&&a.skip&&(s.deltaUpdateFailed=!0);return}i===this.currentLevelIndex?(o.fragmentError===0&&(o.loadError=0),this.playlistLoaded(i,t,o.details)):(r=t.deliveryDirectives)!=null&&r.skip&&(s.deltaUpdateFailed=!0)}loadPlaylist(e){super.loadPlaylist();const t=this.currentLevelIndex,r=this.currentLevel;if(r&&this.shouldLoadPlaylist(r)){let i=r.uri;if(e)try{i=e.addDirectives(i)}catch(o){this.warn(`Could not construct new URL with HLS Delivery Directives: ${o}`)}const s=r.attrs["PATHWAY-ID"];this.log(`Loading level index ${t}${(e==null?void 0:e.msn)!==void 0?" at sn "+e.msn+" part "+e.part:""} with${s?" Pathway "+s:""} ${i}`),this.clearTimer(),this.hls.trigger(w.LEVEL_LOADING,{url:i,level:t,pathwayId:r.attrs["PATHWAY-ID"],id:0,deliveryDirectives:e||null})}}get nextLoadLevel(){return this.manualLevelIndex!==-1?this.manualLevelIndex:this.hls.nextAutoLevel}set nextLoadLevel(e){this.level=e,this.manualLevelIndex===-1&&(this.hls.nextAutoLevel=e)}removeLevel(e){var t;const r=this._levels.filter((i,s)=>s!==e?!0:(this.steering&&this.steering.removeLevel(i),i===this.currentLevel&&(this.currentLevel=null,this.currentLevelIndex=-1,i.details&&i.details.fragments.forEach(o=>o.level=-1)),!1));Zf(r),this._levels=r,this.currentLevelIndex>-1&&(t=this.currentLevel)!=null&&t.details&&(this.currentLevelIndex=this.currentLevel.details.fragments[0].level),this.hls.trigger(w.LEVELS_UPDATED,{levels:r})}onLevelsUpdated(e,{levels:t}){this._levels=t}checkMaxAutoUpdated(){const{autoLevelCapping:e,maxAutoLevel:t,maxHdcpLevel:r}=this.hls;this._maxAutoLevel!==t&&(this._maxAutoLevel=t,this.hls.trigger(w.MAX_AUTO_LEVEL_UPDATED,{autoLevelCapping:e,levels:this.levels,maxAutoLevel:t,minAutoLevel:this.hls.minAutoLevel,maxHdcpLevel:r}))}}function ju(n){const e={};n.forEach(t=>{const r=t.groupId||"";t.id=e[r]=e[r]||0,e[r]++})}class $S{constructor(e){this.config=void 0,this.keyUriToKeyInfo={},this.emeController=null,this.config=e}abort(e){for(const r in this.keyUriToKeyInfo){const i=this.keyUriToKeyInfo[r].loader;if(i){var t;if(e&&e!==((t=i.context)==null?void 0:t.frag.type))return;i.abort()}}}detach(){for(const e in this.keyUriToKeyInfo){const t=this.keyUriToKeyInfo[e];(t.mediaKeySessionContext||t.decryptdata.isCommonEncryption)&&delete this.keyUriToKeyInfo[e]}}destroy(){this.detach();for(const e in this.keyUriToKeyInfo){const t=this.keyUriToKeyInfo[e].loader;t&&t.destroy()}this.keyUriToKeyInfo={}}createKeyLoadError(e,t=G.KEY_LOAD_ERROR,r,i,s){return new kn({type:Be.NETWORK_ERROR,details:t,fatal:!1,frag:e,response:s,error:r,networkDetails:i})}loadClear(e,t){if(this.emeController&&this.config.emeEnabled){const{sn:r,cc:i}=e;for(let s=0;s<t.length;s++){const o=t[s];if(i<=o.cc&&(r==="initSegment"||o.sn==="initSegment"||r<o.sn)){this.emeController.selectKeySystemFormat(o).then(a=>{o.setKeyFormat(a)});break}}}}load(e){return!e.decryptdata&&e.encrypted&&this.emeController?this.emeController.selectKeySystemFormat(e).then(t=>this.loadInternal(e,t)):this.loadInternal(e)}loadInternal(e,t){var r,i;t&&e.setKeyFormat(t);const s=e.decryptdata;if(!s){const c=new Error(t?`Expected frag.decryptdata to be defined after setting format ${t}`:"Missing decryption data on fragment in onKeyLoading");return Promise.reject(this.createKeyLoadError(e,G.KEY_LOAD_ERROR,c))}const o=s.uri;if(!o)return Promise.reject(this.createKeyLoadError(e,G.KEY_LOAD_ERROR,new Error(`Invalid key URI: "${o}"`)));let a=this.keyUriToKeyInfo[o];if((r=a)!=null&&r.decryptdata.key)return s.key=a.decryptdata.key,Promise.resolve({frag:e,keyInfo:a});if((i=a)!=null&&i.keyLoadPromise){var l;switch((l=a.mediaKeySessionContext)==null?void 0:l.keyStatus){case void 0:case"status-pending":case"usable":case"usable-in-future":return a.keyLoadPromise.then(c=>(s.key=c.keyInfo.decryptdata.key,{frag:e,keyInfo:a}))}}switch(a=this.keyUriToKeyInfo[o]={decryptdata:s,keyLoadPromise:null,loader:null,mediaKeySessionContext:null},s.method){case"ISO-23001-7":case"SAMPLE-AES":case"SAMPLE-AES-CENC":case"SAMPLE-AES-CTR":return s.keyFormat==="identity"?this.loadKeyHTTP(a,e):this.loadKeyEME(a,e);case"AES-128":return this.loadKeyHTTP(a,e);default:return Promise.reject(this.createKeyLoadError(e,G.KEY_LOAD_ERROR,new Error(`Key supplied with unsupported METHOD: "${s.method}"`)))}}loadKeyEME(e,t){const r={frag:t,keyInfo:e};if(this.emeController&&this.config.emeEnabled){const i=this.emeController.loadKey(r);if(i)return(e.keyLoadPromise=i.then(s=>(e.mediaKeySessionContext=s,r))).catch(s=>{throw e.keyLoadPromise=null,s})}return Promise.resolve(r)}loadKeyHTTP(e,t){const r=this.config,i=r.loader,s=new i(r);return t.keyLoader=e.loader=s,e.keyLoadPromise=new Promise((o,a)=>{const l={keyInfo:e,frag:t,responseType:"arraybuffer",url:e.decryptdata.uri},c=r.keyLoadPolicy.default,d={loadPolicy:c,timeout:c.maxLoadTimeMs,maxRetry:0,retryDelay:0,maxRetryDelay:0},u={onSuccess:(h,y,m,A)=>{const{frag:b,keyInfo:S,url:C}=m;if(!b.decryptdata||S!==this.keyUriToKeyInfo[C])return a(this.createKeyLoadError(b,G.KEY_LOAD_ERROR,new Error("after key load, decryptdata unset or changed"),A));S.decryptdata.key=b.decryptdata.key=new Uint8Array(h.data),b.keyLoader=null,S.loader=null,o({frag:b,keyInfo:S})},onError:(h,y,m,A)=>{this.resetLoader(y),a(this.createKeyLoadError(t,G.KEY_LOAD_ERROR,new Error(`HTTP Error ${h.code} loading key ${h.text}`),m,_t({url:l.url,data:void 0},h)))},onTimeout:(h,y,m)=>{this.resetLoader(y),a(this.createKeyLoadError(t,G.KEY_LOAD_TIMEOUT,new Error("key loading timed out"),m))},onAbort:(h,y,m)=>{this.resetLoader(y),a(this.createKeyLoadError(t,G.INTERNAL_ABORTED,new Error("key loading aborted"),m))}};s.load(l,d,u)})}resetLoader(e){const{frag:t,keyInfo:r,url:i}=e,s=r.loader;t.keyLoader===s&&(t.keyLoader=null,r.loader=null),delete this.keyUriToKeyInfo[i],s&&s.destroy()}}function Fp(){return self.SourceBuffer||self.WebKitSourceBuffer}function Np(){if(!Yr())return!1;const e=Fp();return!e||e.prototype&&typeof e.prototype.appendBuffer=="function"&&typeof e.prototype.remove=="function"}function HS(){if(!Np())return!1;const n=Yr();return typeof(n==null?void 0:n.isTypeSupported)=="function"&&(["avc1.42E01E,mp4a.40.2","av01.0.01M.08","vp09.00.50.08"].some(e=>n.isTypeSupported(Vi(e,"video")))||["mp4a.40.2","fLaC"].some(e=>n.isTypeSupported(Vi(e,"audio"))))}function GS(){var n;const e=Fp();return typeof(e==null||(n=e.prototype)==null?void 0:n.changeType)=="function"}const KS=250,$s=2,zS=.1,qS=.05;class jS{constructor(e,t,r,i){this.config=void 0,this.media=null,this.fragmentTracker=void 0,this.hls=void 0,this.nudgeRetry=0,this.stallReported=!1,this.stalled=null,this.moved=!1,this.seeking=!1,this.config=e,this.media=t,this.fragmentTracker=r,this.hls=i}destroy(){this.media=null,this.hls=this.fragmentTracker=null}poll(e,t){const{config:r,media:i,stalled:s}=this;if(i===null)return;const{currentTime:o,seeking:a}=i,l=this.seeking&&!a,c=!this.seeking&&a;if(this.seeking=a,o!==e){if(this.moved=!0,a||(this.nudgeRetry=0),s!==null){if(this.stallReported){const b=self.performance.now()-s;M.warn(`playback not stuck anymore @${o}, after ${Math.round(b)}ms`),this.stallReported=!1}this.stalled=null}return}if(c||l){this.stalled=null;return}if(i.paused&&!a||i.ended||i.playbackRate===0||!ot.getBuffered(i).length){this.nudgeRetry=0;return}const d=ot.bufferInfo(i,o,0),u=d.nextStart||0;if(a){const b=d.len>$s,S=!u||t&&t.start<=o||u-o>$s&&!this.fragmentTracker.getPartialFragment(o);if(b||S)return;this.moved=!1}if(!this.moved&&this.stalled!==null){var h;if(!(d.len>0)&&!u)return;const S=Math.max(u,d.start||0)-o,C=this.hls.levels?this.hls.levels[this.hls.currentLevel]:null,D=(C==null||(h=C.details)==null?void 0:h.live)?C.details.targetduration*2:$s,B=this.fragmentTracker.getPartialFragment(o);if(S>0&&(S<=D||B)){i.paused||this._trySkipBufferHole(B);return}}const y=self.performance.now();if(s===null){this.stalled=y;return}const m=y-s;if(!a&&m>=KS&&(this._reportStall(d),!this.media))return;const A=ot.bufferInfo(i,o,r.maxBufferHole);this._tryFixBufferStall(A,m)}_tryFixBufferStall(e,t){const{config:r,fragmentTracker:i,media:s}=this;if(s===null)return;const o=s.currentTime,a=i.getPartialFragment(o);a&&(this._trySkipBufferHole(a)||!this.media)||(e.len>r.maxBufferHole||e.nextStart&&e.nextStart-o<r.maxBufferHole)&&t>r.highBufferWatchdogPeriod*1e3&&(M.warn("Trying to nudge playhead over buffer-hole"),this.stalled=null,this._tryNudgeBuffer())}_reportStall(e){const{hls:t,media:r,stallReported:i}=this;if(!i&&r){this.stallReported=!0;const s=new Error(`Playback stalling at @${r.currentTime} due to low buffer (${JSON.stringify(e)})`);M.warn(s.message),t.trigger(w.ERROR,{type:Be.MEDIA_ERROR,details:G.BUFFER_STALLED_ERROR,fatal:!1,error:s,buffer:e.len})}}_trySkipBufferHole(e){const{config:t,hls:r,media:i}=this;if(i===null)return 0;const s=i.currentTime,o=ot.bufferInfo(i,s,0),a=s<o.start?o.start:o.nextStart;if(a){const l=o.len<=t.maxBufferHole,c=o.len>0&&o.len<1&&i.readyState<3,d=a-s;if(d>0&&(l||c)){if(d>t.maxBufferHole){const{fragmentTracker:h}=this;let y=!1;if(s===0){const m=h.getAppendedFrag(0,De.MAIN);m&&a<m.end&&(y=!0)}if(!y){const m=e||h.getAppendedFrag(s,De.MAIN);if(m){let A=!1,b=m.end;for(;b<a;){const S=h.getPartialFragment(b);if(S)b+=S.duration;else{A=!0;break}}if(A)return 0}}}const u=Math.max(a+qS,s+zS);if(M.warn(`skipping hole, adjusting currentTime from ${s} to ${u}`),this.moved=!0,this.stalled=null,i.currentTime=u,e&&!e.gap){const h=new Error(`fragment loaded with buffer holes, seeking from ${s} to ${u}`);r.trigger(w.ERROR,{type:Be.MEDIA_ERROR,details:G.BUFFER_SEEK_OVER_HOLE,fatal:!1,error:h,reason:h.message,frag:e})}return u}}return 0}_tryNudgeBuffer(){const{config:e,hls:t,media:r,nudgeRetry:i}=this;if(r===null)return;const s=r.currentTime;if(this.nudgeRetry++,i<e.nudgeMaxRetry){const o=s+(i+1)*e.nudgeOffset,a=new Error(`Nudging 'currentTime' from ${s} to ${o}`);M.warn(a.message),r.currentTime=o,t.trigger(w.ERROR,{type:Be.MEDIA_ERROR,details:G.BUFFER_NUDGE_ON_STALL,error:a,fatal:!1})}else{const o=new Error(`Playhead still not moving while enough data buffered @${s} after ${e.nudgeMaxRetry} nudges`);M.error(o.message),t.trigger(w.ERROR,{type:Be.MEDIA_ERROR,details:G.BUFFER_STALLED_ERROR,error:o,fatal:!0})}}}const VS=100;class WS extends Gl{constructor(e,t,r){super(e,t,r,"[stream-controller]",De.MAIN),this.audioCodecSwap=!1,this.gapController=null,this.level=-1,this._forceStartLoad=!1,this.altAudio=!1,this.audioOnly=!1,this.fragPlaying=null,this.onvplaying=null,this.onvseeked=null,this.fragLastKbps=0,this.couldBacktrack=!1,this.backtrackFragment=null,this.audioCodecSwitch=!1,this.videoBuffer=null,this._registerListeners()}_registerListeners(){const{hls:e}=this;e.on(w.MEDIA_ATTACHED,this.onMediaAttached,this),e.on(w.MEDIA_DETACHING,this.onMediaDetaching,this),e.on(w.MANIFEST_LOADING,this.onManifestLoading,this),e.on(w.MANIFEST_PARSED,this.onManifestParsed,this),e.on(w.LEVEL_LOADING,this.onLevelLoading,this),e.on(w.LEVEL_LOADED,this.onLevelLoaded,this),e.on(w.FRAG_LOAD_EMERGENCY_ABORTED,this.onFragLoadEmergencyAborted,this),e.on(w.ERROR,this.onError,this),e.on(w.AUDIO_TRACK_SWITCHING,this.onAudioTrackSwitching,this),e.on(w.AUDIO_TRACK_SWITCHED,this.onAudioTrackSwitched,this),e.on(w.BUFFER_CREATED,this.onBufferCreated,this),e.on(w.BUFFER_FLUSHED,this.onBufferFlushed,this),e.on(w.LEVELS_UPDATED,this.onLevelsUpdated,this),e.on(w.FRAG_BUFFERED,this.onFragBuffered,this)}_unregisterListeners(){const{hls:e}=this;e.off(w.MEDIA_ATTACHED,this.onMediaAttached,this),e.off(w.MEDIA_DETACHING,this.onMediaDetaching,this),e.off(w.MANIFEST_LOADING,this.onManifestLoading,this),e.off(w.MANIFEST_PARSED,this.onManifestParsed,this),e.off(w.LEVEL_LOADED,this.onLevelLoaded,this),e.off(w.FRAG_LOAD_EMERGENCY_ABORTED,this.onFragLoadEmergencyAborted,this),e.off(w.ERROR,this.onError,this),e.off(w.AUDIO_TRACK_SWITCHING,this.onAudioTrackSwitching,this),e.off(w.AUDIO_TRACK_SWITCHED,this.onAudioTrackSwitched,this),e.off(w.BUFFER_CREATED,this.onBufferCreated,this),e.off(w.BUFFER_FLUSHED,this.onBufferFlushed,this),e.off(w.LEVELS_UPDATED,this.onLevelsUpdated,this),e.off(w.FRAG_BUFFERED,this.onFragBuffered,this)}onHandlerDestroying(){this._unregisterListeners(),super.onHandlerDestroying()}startLoad(e){if(this.levels){const{lastCurrentTime:t,hls:r}=this;if(this.stopLoad(),this.setInterval(VS),this.level=-1,!this.startFragRequested){let i=r.startLevel;i===-1&&(r.config.testBandwidth&&this.levels.length>1?(i=0,this.bitrateTest=!0):i=r.firstAutoLevel),r.nextLoadLevel=i,this.level=r.loadLevel,this.loadedmetadata=!1}t>0&&e===-1&&(this.log(`Override startPosition with lastCurrentTime @${t.toFixed(3)}`),e=t),this.state=ne.IDLE,this.nextLoadPosition=this.startPosition=this.lastCurrentTime=e,this.tick()}else this._forceStartLoad=!0,this.state=ne.STOPPED}stopLoad(){this._forceStartLoad=!1,super.stopLoad()}doTick(){switch(this.state){case ne.WAITING_LEVEL:{const{levels:t,level:r}=this,i=t==null?void 0:t[r],s=i==null?void 0:i.details;if(s&&(!s.live||this.levelLastLoaded===i)){if(this.waitForCdnTuneIn(s))break;this.state=ne.IDLE;break}else if(this.hls.nextLoadLevel!==this.level){this.state=ne.IDLE;break}break}case ne.FRAG_LOADING_WAITING_RETRY:{var e;const t=self.performance.now(),r=this.retryDate;if(!r||t>=r||(e=this.media)!=null&&e.seeking){const{levels:i,level:s}=this,o=i==null?void 0:i[s];this.resetStartWhenNotLoaded(o||null),this.state=ne.IDLE}}break}this.state===ne.IDLE&&this.doTickIdle(),this.onTickEnd()}onTickEnd(){super.onTickEnd(),this.checkBuffer(),this.checkFragmentChanged()}doTickIdle(){const{hls:e,levelLastLoaded:t,levels:r,media:i}=this;if(t===null||!i&&(this.startFragRequested||!e.config.startFragPrefetch)||this.altAudio&&this.audioOnly)return;const s=e.nextLoadLevel;if(!(r!=null&&r[s]))return;const o=r[s],a=this.getMainFwdBufferInfo();if(a===null)return;const l=this.getLevelDetails();if(l&&this._streamEnded(a,l)){const A={};this.altAudio&&(A.type="video"),this.hls.trigger(w.BUFFER_EOS,A),this.state=ne.ENDED;return}e.loadLevel!==s&&e.manualLevel===-1&&this.log(`Adapting to level ${s} from level ${this.level}`),this.level=e.nextLoadLevel=s;const c=o.details;if(!c||this.state===ne.WAITING_LEVEL||c.live&&this.levelLastLoaded!==o){this.level=s,this.state=ne.WAITING_LEVEL;return}const d=a.len,u=this.getMaxBufferLength(o.maxBitrate);if(d>=u)return;this.backtrackFragment&&this.backtrackFragment.start>a.end&&(this.backtrackFragment=null);const h=this.backtrackFragment?this.backtrackFragment.start:a.end;let y=this.getNextFragment(h,c);if(this.couldBacktrack&&!this.fragPrevious&&y&&y.sn!=="initSegment"&&this.fragmentTracker.getState(y)!==xt.OK){var m;const b=((m=this.backtrackFragment)!=null?m:y).sn-c.startSN,S=c.fragments[b-1];S&&y.cc===S.cc&&(y=S,this.fragmentTracker.removeFragment(S))}else this.backtrackFragment&&a.len&&(this.backtrackFragment=null);if(y&&this.isLoopLoading(y,h)){if(!y.gap){const b=this.audioOnly&&!this.altAudio?et.AUDIO:et.VIDEO,S=(b===et.VIDEO?this.videoBuffer:this.mediaBuffer)||this.media;S&&this.afterBufferFlushed(S,b,De.MAIN)}y=this.getNextFragmentLoopLoading(y,c,a,De.MAIN,u)}y&&(y.initSegment&&!y.initSegment.data&&!this.bitrateTest&&(y=y.initSegment),this.loadFragment(y,o,h))}loadFragment(e,t,r){const i=this.fragmentTracker.getState(e);this.fragCurrent=e,i===xt.NOT_LOADED||i===xt.PARTIAL?e.sn==="initSegment"?this._loadInitSegment(e,t):this.bitrateTest?(this.log(`Fragment ${e.sn} of level ${e.level} is being downloaded to test bitrate and will not be buffered`),this._loadBitrateTestFrag(e,t)):(this.startFragRequested=!0,super.loadFragment(e,t,r)):this.clearTrackerIfNeeded(e)}getBufferedFrag(e){return this.fragmentTracker.getBufferedFrag(e,De.MAIN)}followingBufferedFrag(e){return e?this.getBufferedFrag(e.end+.5):null}immediateLevelSwitch(){this.abortCurrentFrag(),this.flushMainBuffer(0,Number.POSITIVE_INFINITY)}nextLevelSwitch(){const{levels:e,media:t}=this;if(t!=null&&t.readyState){let r;const i=this.getAppendedFrag(t.currentTime);i&&i.start>1&&this.flushMainBuffer(0,i.start-1);const s=this.getLevelDetails();if(s!=null&&s.live){const a=this.getMainFwdBufferInfo();if(!a||a.len<s.targetduration*2)return}if(!t.paused&&e){const a=this.hls.nextLoadLevel,l=e[a],c=this.fragLastKbps;c&&this.fragCurrent?r=this.fragCurrent.duration*l.maxBitrate/(1e3*c)+1:r=0}else r=0;const o=this.getBufferedFrag(t.currentTime+r);if(o){const a=this.followingBufferedFrag(o);if(a){this.abortCurrentFrag();const l=a.maxStartPTS?a.maxStartPTS:a.start,c=a.duration,d=Math.max(o.end,l+Math.min(Math.max(c-this.config.maxFragLookUpTolerance,c*(this.couldBacktrack?.5:.125)),c*(this.couldBacktrack?.75:.25)));this.flushMainBuffer(d,Number.POSITIVE_INFINITY)}}}}abortCurrentFrag(){const e=this.fragCurrent;switch(this.fragCurrent=null,this.backtrackFragment=null,e&&(e.abortRequests(),this.fragmentTracker.removeFragment(e)),this.state){case ne.KEY_LOADING:case ne.FRAG_LOADING:case ne.FRAG_LOADING_WAITING_RETRY:case ne.PARSING:case ne.PARSED:this.state=ne.IDLE;break}this.nextLoadPosition=this.getLoadPosition()}flushMainBuffer(e,t){super.flushMainBuffer(e,t,this.altAudio?"video":null)}onMediaAttached(e,t){super.onMediaAttached(e,t);const r=t.media;this.onvplaying=this.onMediaPlaying.bind(this),this.onvseeked=this.onMediaSeeked.bind(this),r.addEventListener("playing",this.onvplaying),r.addEventListener("seeked",this.onvseeked),this.gapController=new jS(this.config,r,this.fragmentTracker,this.hls)}onMediaDetaching(){const{media:e}=this;e&&this.onvplaying&&this.onvseeked&&(e.removeEventListener("playing",this.onvplaying),e.removeEventListener("seeked",this.onvseeked),this.onvplaying=this.onvseeked=null,this.videoBuffer=null),this.fragPlaying=null,this.gapController&&(this.gapController.destroy(),this.gapController=null),super.onMediaDetaching()}onMediaPlaying(){this.tick()}onMediaSeeked(){const e=this.media,t=e?e.currentTime:null;xe(t)&&this.log(`Media seeked to ${t.toFixed(3)}`);const r=this.getMainFwdBufferInfo();if(r===null||r.len===0){this.warn(`Main forward buffer length on "seeked" event ${r?r.len:"empty"})`);return}this.tick()}onManifestLoading(){this.log("Trigger BUFFER_RESET"),this.hls.trigger(w.BUFFER_RESET,void 0),this.fragmentTracker.removeAllFragments(),this.couldBacktrack=!1,this.startPosition=this.lastCurrentTime=this.fragLastKbps=0,this.levels=this.fragPlaying=this.backtrackFragment=this.levelLastLoaded=null,this.altAudio=this.audioOnly=this.startFragRequested=!1}onManifestParsed(e,t){let r=!1,i=!1;t.levels.forEach(s=>{const o=s.audioCodec;o&&(r=r||o.indexOf("mp4a.40.2")!==-1,i=i||o.indexOf("mp4a.40.5")!==-1)}),this.audioCodecSwitch=r&&i&&!GS(),this.audioCodecSwitch&&this.log("Both AAC/HE-AAC audio found in levels; declaring level codec as HE-AAC"),this.levels=t.levels,this.startFragRequested=!1}onLevelLoading(e,t){const{levels:r}=this;if(!r||this.state!==ne.IDLE)return;const i=r[t.level];(!i.details||i.details.live&&this.levelLastLoaded!==i||this.waitForCdnTuneIn(i.details))&&(this.state=ne.WAITING_LEVEL)}onLevelLoaded(e,t){var r;const{levels:i}=this,s=t.level,o=t.details,a=o.totalduration;if(!i){this.warn(`Levels were reset while loading level ${s}`);return}this.log(`Level ${s} loaded [${o.startSN},${o.endSN}]${o.lastPartSn?`[part-${o.lastPartSn}-${o.lastPartIndex}]`:""}, cc [${o.startCC}, ${o.endCC}] duration:${a}`);const l=i[s],c=this.fragCurrent;c&&(this.state===ne.FRAG_LOADING||this.state===ne.FRAG_LOADING_WAITING_RETRY)&&c.level!==t.level&&c.loader&&this.abortCurrentFrag();let d=0;if(o.live||(r=l.details)!=null&&r.live){var u;if(this.checkLiveUpdate(o),o.deltaUpdateFailed)return;d=this.alignPlaylists(o,l.details,(u=this.levelLastLoaded)==null?void 0:u.details)}if(l.details=o,this.levelLastLoaded=l,this.hls.trigger(w.LEVEL_UPDATED,{details:o,level:s}),this.state===ne.WAITING_LEVEL){if(this.waitForCdnTuneIn(o))return;this.state=ne.IDLE}this.startFragRequested?o.live&&this.synchronizeToLiveEdge(o):this.setStartPosition(o,d),this.tick()}_handleFragmentLoadProgress(e){var t;const{frag:r,part:i,payload:s}=e,{levels:o}=this;if(!o){this.warn(`Levels were reset while fragment load was in progress. Fragment ${r.sn} of level ${r.level} will not be buffered`);return}const a=o[r.level],l=a.details;if(!l){this.warn(`Dropping fragment ${r.sn} of level ${r.level} after level details were reset`),this.fragmentTracker.removeFragment(r);return}const c=a.videoCodec,d=l.PTSKnown||!l.live,u=(t=r.initSegment)==null?void 0:t.data,h=this._getAudioCodec(a),y=this.transmuxer=this.transmuxer||new Ap(this.hls,De.MAIN,this._handleTransmuxComplete.bind(this),this._handleTransmuxerFlush.bind(this)),m=i?i.index:-1,A=m!==-1,b=new $l(r.level,r.sn,r.stats.chunkCount,s.byteLength,m,A),S=this.initPTS[r.cc];y.push(s,u,h,c,r,i,l.totalduration,d,b,S)}onAudioTrackSwitching(e,t){const r=this.altAudio;if(!!!t.url){if(this.mediaBuffer!==this.media){this.log("Switching on main audio, use media.buffered to schedule main fragment loading"),this.mediaBuffer=this.media;const o=this.fragCurrent;o&&(this.log("Switching to main audio track, cancel main fragment load"),o.abortRequests(),this.fragmentTracker.removeFragment(o)),this.resetTransmuxer(),this.resetLoadingState()}else this.audioOnly&&this.resetTransmuxer();const s=this.hls;r&&(s.trigger(w.BUFFER_FLUSHING,{startOffset:0,endOffset:Number.POSITIVE_INFINITY,type:null}),this.fragmentTracker.removeAllFragments()),s.trigger(w.AUDIO_TRACK_SWITCHED,t)}}onAudioTrackSwitched(e,t){const r=t.id,i=!!this.hls.audioTracks[r].url;if(i){const s=this.videoBuffer;s&&this.mediaBuffer!==s&&(this.log("Switching on alternate audio, use video.buffered to schedule main fragment loading"),this.mediaBuffer=s)}this.altAudio=i,this.tick()}onBufferCreated(e,t){const r=t.tracks;let i,s,o=!1;for(const a in r){const l=r[a];if(l.id==="main"){if(s=a,i=l,a==="video"){const c=r[a];c&&(this.videoBuffer=c.buffer)}}else o=!0}o&&i?(this.log(`Alternate track found, use ${s}.buffered to schedule main fragment loading`),this.mediaBuffer=i.buffer):this.mediaBuffer=this.media}onFragBuffered(e,t){const{frag:r,part:i}=t;if(r&&r.type!==De.MAIN)return;if(this.fragContextChanged(r)){this.warn(`Fragment ${r.sn}${i?" p: "+i.index:""} of level ${r.level} finished buffering, but was aborted. state: ${this.state}`),this.state===ne.PARSED&&(this.state=ne.IDLE);return}const s=i?i.stats:r.stats;this.fragLastKbps=Math.round(8*s.total/(s.buffering.end-s.loading.first)),r.sn!=="initSegment"&&(this.fragPrevious=r),this.fragBufferedComplete(r,i)}onError(e,t){var r;if(t.fatal){this.state=ne.ERROR;return}switch(t.details){case G.FRAG_GAP:case G.FRAG_PARSING_ERROR:case G.FRAG_DECRYPT_ERROR:case G.FRAG_LOAD_ERROR:case G.FRAG_LOAD_TIMEOUT:case G.KEY_LOAD_ERROR:case G.KEY_LOAD_TIMEOUT:this.onFragmentOrKeyLoadError(De.MAIN,t);break;case G.LEVEL_LOAD_ERROR:case G.LEVEL_LOAD_TIMEOUT:case G.LEVEL_PARSING_ERROR:!t.levelRetry&&this.state===ne.WAITING_LEVEL&&((r=t.context)==null?void 0:r.type)===ze.LEVEL&&(this.state=ne.IDLE);break;case G.BUFFER_APPEND_ERROR:case G.BUFFER_FULL_ERROR:if(!t.parent||t.parent!=="main")return;if(t.details===G.BUFFER_APPEND_ERROR){this.resetLoadingState();return}this.reduceLengthAndFlushBuffer(t)&&this.flushMainBuffer(0,Number.POSITIVE_INFINITY);break;case G.INTERNAL_EXCEPTION:this.recoverWorkerError(t);break}}checkBuffer(){const{media:e,gapController:t}=this;if(!(!e||!t||!e.readyState)){if(this.loadedmetadata||!ot.getBuffered(e).length){const r=this.state!==ne.IDLE?this.fragCurrent:null;t.poll(this.lastCurrentTime,r)}this.lastCurrentTime=e.currentTime}}onFragLoadEmergencyAborted(){this.state=ne.IDLE,this.loadedmetadata||(this.startFragRequested=!1,this.nextLoadPosition=this.startPosition),this.tickImmediate()}onBufferFlushed(e,{type:t}){if(t!==et.AUDIO||this.audioOnly&&!this.altAudio){const r=(t===et.VIDEO?this.videoBuffer:this.mediaBuffer)||this.media;this.afterBufferFlushed(r,t,De.MAIN),this.tick()}}onLevelsUpdated(e,t){this.level>-1&&this.fragCurrent&&(this.level=this.fragCurrent.level),this.levels=t.levels}swapAudioCodec(){this.audioCodecSwap=!this.audioCodecSwap}seekToStartPos(){const{media:e}=this;if(!e)return;const t=e.currentTime;let r=this.startPosition;if(r>=0&&t<r){if(e.seeking){this.log(`could not seek to ${r}, already seeking at ${t}`);return}const i=ot.getBuffered(e),o=(i.length?i.start(0):0)-r;o>0&&(o<this.config.maxBufferHole||o<this.config.maxFragLookUpTolerance)&&(this.log(`adjusting start position by ${o} to match buffer start`),r+=o,this.startPosition=r),this.log(`seek to target start position ${r} from current time ${t}`),e.currentTime=r}}_getAudioCodec(e){let t=this.config.defaultAudioCodec||e.audioCodec;return this.audioCodecSwap&&t&&(this.log("Swapping audio codec"),t.indexOf("mp4a.40.5")!==-1?t="mp4a.40.2":t="mp4a.40.5"),t}_loadBitrateTestFrag(e,t){e.bitrateTest=!0,this._doFragLoad(e,t).then(r=>{const{hls:i}=this;if(!r||this.fragContextChanged(e))return;t.fragmentError=0,this.state=ne.IDLE,this.startFragRequested=!1,this.bitrateTest=!1;const s=e.stats;s.parsing.start=s.parsing.end=s.buffering.start=s.buffering.end=self.performance.now(),i.trigger(w.FRAG_LOADED,r),e.bitrateTest=!1})}_handleTransmuxComplete(e){var t;const r="main",{hls:i}=this,{remuxResult:s,chunkMeta:o}=e,a=this.getCurrentContext(o);if(!a){this.resetWhenMissingContext(o);return}const{frag:l,part:c,level:d}=a,{video:u,text:h,id3:y,initSegment:m}=s,{details:A}=d,b=this.altAudio?void 0:s.audio;if(this.fragContextChanged(l)){this.fragmentTracker.removeFragment(l);return}if(this.state=ne.PARSING,m){if(m!=null&&m.tracks){const R=l.initSegment||l;this._bufferInitSegment(d,m.tracks,R,o),i.trigger(w.FRAG_PARSING_INIT_SEGMENT,{frag:R,id:r,tracks:m.tracks})}const S=m.initPTS,C=m.timescale;xe(S)&&(this.initPTS[l.cc]={baseTime:S,timescale:C},i.trigger(w.INIT_PTS_FOUND,{frag:l,id:r,initPTS:S,timescale:C}))}if(u&&A&&l.sn!=="initSegment"){const S=A.fragments[l.sn-1-A.startSN],C=l.sn===A.startSN,R=!S||l.cc>S.cc;if(s.independent!==!1){const{startPTS:D,endPTS:B,startDTS:K,endDTS:N}=u;if(c)c.elementaryStreams[u.type]={startPTS:D,endPTS:B,startDTS:K,endDTS:N};else if(u.firstKeyFrame&&u.independent&&o.id===1&&!R&&(this.couldBacktrack=!0),u.dropped&&u.independent){const z=this.getMainFwdBufferInfo(),Z=(z?z.end:this.getLoadPosition())+this.config.maxBufferHole,O=u.firstKeyFramePTS?u.firstKeyFramePTS:D;if(!C&&Z<O-this.config.maxBufferHole&&!R){this.backtrack(l);return}else R&&(l.gap=!0);l.setElementaryStreamInfo(u.type,l.start,B,l.start,N,!0)}else C&&D>$s&&(l.gap=!0);l.setElementaryStreamInfo(u.type,D,B,K,N),this.backtrackFragment&&(this.backtrackFragment=l),this.bufferFragmentData(u,l,c,o,C||R)}else if(C||R)l.gap=!0;else{this.backtrack(l);return}}if(b){const{startPTS:S,endPTS:C,startDTS:R,endDTS:D}=b;c&&(c.elementaryStreams[et.AUDIO]={startPTS:S,endPTS:C,startDTS:R,endDTS:D}),l.setElementaryStreamInfo(et.AUDIO,S,C,R,D),this.bufferFragmentData(b,l,c,o)}if(A&&y!=null&&(t=y.samples)!=null&&t.length){const S={id:r,frag:l,details:A,samples:y.samples};i.trigger(w.FRAG_PARSING_METADATA,S)}if(A&&h){const S={id:r,frag:l,details:A,samples:h.samples};i.trigger(w.FRAG_PARSING_USERDATA,S)}}_bufferInitSegment(e,t,r,i){if(this.state!==ne.PARSING)return;this.audioOnly=!!t.audio&&!t.video,this.altAudio&&!this.audioOnly&&delete t.audio;const{audio:s,video:o,audiovideo:a}=t;if(s){let l=e.audioCodec;const c=navigator.userAgent.toLowerCase();this.audioCodecSwitch&&(l&&(l.indexOf("mp4a.40.5")!==-1?l="mp4a.40.2":l="mp4a.40.5"),s.metadata.channelCount!==1&&c.indexOf("firefox")===-1&&(l="mp4a.40.5")),l&&l.indexOf("mp4a.40.5")!==-1&&c.indexOf("android")!==-1&&s.container!=="audio/mpeg"&&(l="mp4a.40.2",this.log(`Android: force audio codec to ${l}`)),e.audioCodec&&e.audioCodec!==l&&this.log(`Swapping manifest audio codec "${e.audioCodec}" for "${l}"`),s.levelCodec=l,s.id="main",this.log(`Init audio buffer, container:${s.container}, codecs[selected/level/parsed]=[${l||""}/${e.audioCodec||""}/${s.codec}]`)}o&&(o.levelCodec=e.videoCodec,o.id="main",this.log(`Init video buffer, container:${o.container}, codecs[level/parsed]=[${e.videoCodec||""}/${o.codec}]`)),a&&this.log(`Init audiovideo buffer, container:${a.container}, codecs[level/parsed]=[${e.codecs}/${a.codec}]`),this.hls.trigger(w.BUFFER_CODECS,t),Object.keys(t).forEach(l=>{const d=t[l].initSegment;d!=null&&d.byteLength&&this.hls.trigger(w.BUFFER_APPENDING,{type:l,data:d,frag:r,part:null,chunkMeta:i,parent:r.type})}),this.tickImmediate()}getMainFwdBufferInfo(){return this.getFwdBufferInfo(this.mediaBuffer?this.mediaBuffer:this.media,De.MAIN)}backtrack(e){this.couldBacktrack=!0,this.backtrackFragment=e,this.resetTransmuxer(),this.flushBufferGap(e),this.fragmentTracker.removeFragment(e),this.fragPrevious=null,this.nextLoadPosition=e.start,this.state=ne.IDLE}checkFragmentChanged(){const e=this.media;let t=null;if(e&&e.readyState>1&&e.seeking===!1){const r=e.currentTime;if(ot.isBuffered(e,r)?t=this.getAppendedFrag(r):ot.isBuffered(e,r+.1)&&(t=this.getAppendedFrag(r+.1)),t){this.backtrackFragment=null;const i=this.fragPlaying,s=t.level;(!i||t.sn!==i.sn||i.level!==s)&&(this.fragPlaying=t,this.hls.trigger(w.FRAG_CHANGED,{frag:t}),(!i||i.level!==s)&&this.hls.trigger(w.LEVEL_SWITCHED,{level:s}))}}}get nextLevel(){const e=this.nextBufferedFrag;return e?e.level:-1}get currentFrag(){const e=this.media;return e?this.fragPlaying||this.getAppendedFrag(e.currentTime):null}get currentProgramDateTime(){const e=this.media;if(e){const t=e.currentTime,r=this.currentFrag;if(r&&xe(t)&&xe(r.programDateTime)){const i=r.programDateTime+(t-r.start)*1e3;return new Date(i)}}return null}get currentLevel(){const e=this.currentFrag;return e?e.level:-1}get nextBufferedFrag(){const e=this.currentFrag;return e?this.followingBufferedFrag(e):null}get forceStartLoad(){return this._forceStartLoad}}class vn{static get version(){return"1.5.7"}static isMSESupported(){return Np()}static isSupported(){return HS()}static getMediaSource(){return Yr()}static get Events(){return w}static get ErrorTypes(){return Be}static get ErrorDetails(){return G}static get DefaultConfig(){return vn.defaultConfig?vn.defaultConfig:Mp}static set DefaultConfig(e){vn.defaultConfig=e}constructor(e={}){this.config=void 0,this.userConfig=void 0,this.coreComponents=void 0,this.networkControllers=void 0,this.started=!1,this._emitter=new Vl,this._autoLevelCapping=-1,this._maxHdcpLevel=null,this.abrController=void 0,this.bufferController=void 0,this.capLevelController=void 0,this.latencyController=void 0,this.levelController=void 0,this.streamController=void 0,this.audioTrackController=void 0,this.subtitleTrackController=void 0,this.emeController=void 0,this.cmcdController=void 0,this._media=null,this.url=null,this.triggeringException=void 0,$2(e.debug||!1,"Hls instance");const t=this.config=FS(vn.DefaultConfig,e);this.userConfig=e,t.progressive&&NS(t);const{abrController:r,bufferController:i,capLevelController:s,errorController:o,fpsController:a}=t,l=new o(this),c=this.abrController=new r(this),d=this.bufferController=new i(this),u=this.capLevelController=new s(this),h=new a(this),y=new B_(this),m=new N_(this),A=t.contentSteeringController,b=A?new A(this):null,S=this.levelController=new US(this,b),C=new f3(this),R=new $S(this.config),D=this.streamController=new WS(this,C,R);u.setStreamController(D),h.setStreamController(D);const B=[y,S,D];b&&B.splice(1,0,b),this.networkControllers=B;const K=[c,d,u,h,m,C];this.audioTrackController=this.createController(t.audioTrackController,B);const N=t.audioStreamController;N&&B.push(new N(this,C,R)),this.subtitleTrackController=this.createController(t.subtitleTrackController,B);const z=t.subtitleStreamController;z&&B.push(new z(this,C,R)),this.createController(t.timelineController,K),R.emeController=this.emeController=this.createController(t.emeController,K),this.cmcdController=this.createController(t.cmcdController,K),this.latencyController=this.createController(U_,K),this.coreComponents=K,B.push(l);const Z=l.onErrorOut;typeof Z=="function"&&this.on(w.ERROR,Z,l)}createController(e,t){if(e){const r=new e(this);return t&&t.push(r),r}return null}on(e,t,r=this){this._emitter.on(e,t,r)}once(e,t,r=this){this._emitter.once(e,t,r)}removeAllListeners(e){this._emitter.removeAllListeners(e)}off(e,t,r=this,i){this._emitter.off(e,t,r,i)}listeners(e){return this._emitter.listeners(e)}emit(e,t,r){return this._emitter.emit(e,t,r)}trigger(e,t){if(this.config.debug)return this.emit(e,e,t);try{return this.emit(e,e,t)}catch(r){if(M.error("An internal error happened while handling event "+e+'. Error message: "'+r.message+'". Here is a stacktrace:',r),!this.triggeringException){this.triggeringException=!0;const i=e===w.ERROR;this.trigger(w.ERROR,{type:Be.OTHER_ERROR,details:G.INTERNAL_EXCEPTION,fatal:i,event:e,error:r}),this.triggeringException=!1}}return!1}listenerCount(e){return this._emitter.listenerCount(e)}destroy(){M.log("destroy"),this.trigger(w.DESTROYING,void 0),this.detachMedia(),this.removeAllListeners(),this._autoLevelCapping=-1,this.url=null,this.networkControllers.forEach(t=>t.destroy()),this.networkControllers.length=0,this.coreComponents.forEach(t=>t.destroy()),this.coreComponents.length=0;const e=this.config;e.xhrSetup=e.fetchSetup=void 0,this.userConfig=null}attachMedia(e){M.log("attachMedia"),this._media=e,this.trigger(w.MEDIA_ATTACHING,{media:e})}detachMedia(){M.log("detachMedia"),this.trigger(w.MEDIA_DETACHING,void 0),this._media=null}loadSource(e){this.stopLoad();const t=this.media,r=this.url,i=this.url=Pl.buildAbsoluteURL(self.location.href,e,{alwaysNormalize:!0});this._autoLevelCapping=-1,this._maxHdcpLevel=null,M.log(`loadSource:${i}`),t&&r&&(r!==i||this.bufferController.hasSourceTypes())&&(this.detachMedia(),this.attachMedia(t)),this.trigger(w.MANIFEST_LOADING,{url:e})}startLoad(e=-1){M.log(`startLoad(${e})`),this.started=!0,this.networkControllers.forEach(t=>{t.startLoad(e)})}stopLoad(){M.log("stopLoad"),this.started=!1,this.networkControllers.forEach(e=>{e.stopLoad()})}resumeBuffering(){this.started&&this.networkControllers.forEach(e=>{"fragmentLoader"in e&&e.startLoad(-1)})}pauseBuffering(){this.networkControllers.forEach(e=>{"fragmentLoader"in e&&e.stopLoad()})}swapAudioCodec(){M.log("swapAudioCodec"),this.streamController.swapAudioCodec()}recoverMediaError(){M.log("recoverMediaError");const e=this._media;this.detachMedia(),e&&this.attachMedia(e)}removeLevel(e){this.levelController.removeLevel(e)}get levels(){const e=this.levelController.levels;return e||[]}get currentLevel(){return this.streamController.currentLevel}set currentLevel(e){M.log(`set currentLevel:${e}`),this.levelController.manualLevel=e,this.streamController.immediateLevelSwitch()}get nextLevel(){return this.streamController.nextLevel}set nextLevel(e){M.log(`set nextLevel:${e}`),this.levelController.manualLevel=e,this.streamController.nextLevelSwitch()}get loadLevel(){return this.levelController.level}set loadLevel(e){M.log(`set loadLevel:${e}`),this.levelController.manualLevel=e}get nextLoadLevel(){return this.levelController.nextLoadLevel}set nextLoadLevel(e){this.levelController.nextLoadLevel=e}get firstLevel(){return Math.max(this.levelController.firstLevel,this.minAutoLevel)}set firstLevel(e){M.log(`set firstLevel:${e}`),this.levelController.firstLevel=e}get startLevel(){const e=this.levelController.startLevel;return e===-1&&this.abrController.forcedAutoLevel>-1?this.abrController.forcedAutoLevel:e}set startLevel(e){M.log(`set startLevel:${e}`),e!==-1&&(e=Math.max(e,this.minAutoLevel)),this.levelController.startLevel=e}get capLevelToPlayerSize(){return this.config.capLevelToPlayerSize}set capLevelToPlayerSize(e){const t=!!e;t!==this.config.capLevelToPlayerSize&&(t?this.capLevelController.startCapping():(this.capLevelController.stopCapping(),this.autoLevelCapping=-1,this.streamController.nextLevelSwitch()),this.config.capLevelToPlayerSize=t)}get autoLevelCapping(){return this._autoLevelCapping}get bandwidthEstimate(){const{bwEstimator:e}=this.abrController;return e?e.getEstimate():NaN}set bandwidthEstimate(e){this.abrController.resetEstimator(e)}get ttfbEstimate(){const{bwEstimator:e}=this.abrController;return e?e.getEstimateTTFB():NaN}set autoLevelCapping(e){this._autoLevelCapping!==e&&(M.log(`set autoLevelCapping:${e}`),this._autoLevelCapping=e,this.levelController.checkMaxAutoUpdated())}get maxHdcpLevel(){return this._maxHdcpLevel}set maxHdcpLevel(e){$_(e)&&this._maxHdcpLevel!==e&&(this._maxHdcpLevel=e,this.levelController.checkMaxAutoUpdated())}get autoLevelEnabled(){return this.levelController.manualLevel===-1}get manualLevel(){return this.levelController.manualLevel}get minAutoLevel(){const{levels:e,config:{minAutoBitrate:t}}=this;if(!e)return 0;const r=e.length;for(let i=0;i<r;i++)if(e[i].maxBitrate>=t)return i;return 0}get maxAutoLevel(){const{levels:e,autoLevelCapping:t,maxHdcpLevel:r}=this;let i;if(t===-1&&e!=null&&e.length?i=e.length-1:i=t,r)for(let s=i;s--;){const o=e[s].attrs["HDCP-LEVEL"];if(o&&o<=r)return s}return i}get firstAutoLevel(){return this.abrController.firstAutoLevel}get nextAutoLevel(){return this.abrController.nextAutoLevel}set nextAutoLevel(e){this.abrController.nextAutoLevel=e}get playingDate(){return this.streamController.currentProgramDateTime}get mainForwardBufferInfo(){return this.streamController.getMainFwdBufferInfo()}setAudioOption(e){var t;return(t=this.audioTrackController)==null?void 0:t.setAudioOption(e)}setSubtitleOption(e){var t;return(t=this.subtitleTrackController)==null||t.setSubtitleOption(e),null}get allAudioTracks(){const e=this.audioTrackController;return e?e.allAudioTracks:[]}get audioTracks(){const e=this.audioTrackController;return e?e.audioTracks:[]}get audioTrack(){const e=this.audioTrackController;return e?e.audioTrack:-1}set audioTrack(e){const t=this.audioTrackController;t&&(t.audioTrack=e)}get allSubtitleTracks(){const e=this.subtitleTrackController;return e?e.allSubtitleTracks:[]}get subtitleTracks(){const e=this.subtitleTrackController;return e?e.subtitleTracks:[]}get subtitleTrack(){const e=this.subtitleTrackController;return e?e.subtitleTrack:-1}get media(){return this._media}set subtitleTrack(e){const t=this.subtitleTrackController;t&&(t.subtitleTrack=e)}get subtitleDisplay(){const e=this.subtitleTrackController;return e?e.subtitleDisplay:!1}set subtitleDisplay(e){const t=this.subtitleTrackController;t&&(t.subtitleDisplay=e)}get lowLatencyMode(){return this.config.lowLatencyMode}set lowLatencyMode(e){this.config.lowLatencyMode=e}get liveSyncPosition(){return this.latencyController.liveSyncPosition}get latency(){return this.latencyController.latency}get maxLatency(){return this.latencyController.maxLatency}get targetLatency(){return this.latencyController.targetLatency}get drift(){return this.latencyController.drift}get forceStartLoad(){return this.streamController.forceStartLoad}}vn.defaultConfig=void 0;const Lt=n=>(Yi("data-v-76a46a43"),n=n(),Qi(),n),YS={class:"anime_play_area"},QS={class:"video_page_pc_cont"},XS={class:"main_cont_place"},ZS={class:"left_col"},JS={class:"col_content"},eT={class:"video_outer_box"},tT={class:"video_inner_box"},nT={key:0,id:"pc_player",ref:"pc_player"},rT={class:"video_desc_box"},iT={class:"video_title"},sT={class:"video_blurb"},oT={class:"anime_srcs_select_box"},aT=["onClick"],lT={class:"select_episode_box"},cT=["onClick"],dT={class:"right_col"},uT={class:"col_content"},hT={class:"score_box"},fT={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 36 36"},pT=["stroke-dasharray","stroke"],mT={class:"score_data"},gT={class:"score_dig"},yT={class:"rank_dig"},AT={class:"tags_box"},vT={class:"attr_pair"},bT=Lt(()=>T("span",{class:"attr_title"}," 片名: ",-1)),xT={class:"attr_pair"},ET=Lt(()=>T("span",{class:"attr_title"}," 简介: ",-1)),_T={class:"attr_pair"},wT=Lt(()=>T("span",{class:"attr_title"}," 总集数: ",-1)),ST={class:"attr_title"},TT={class:"video_page_mobile_cont"},CT={class:"video_inner_box"},LT={key:0,id:"pc_player",ref:"pc_player"},kT={class:"video_info_bar"},RT={class:"video_desc_box"},IT={class:"video_btn_box"},DT=Vr('<div class="video_btn" data-v-76a46a43><svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="512" height="512" data-v-76a46a43><path d="M17,12h-4v-2h4v2Zm0,3h-6v2h6v-2Zm4,6V2h-5.171c-.413-1.164-1.525-2-2.829-2h-2c-1.304,0-2.416,.836-2.829,2H3V21c0,1.654,1.346,3,3,3h12c1.654,0,3-1.346,3-3ZM10,4v-1c0-.551,.449-1,1-1h2c.551,0,1,.449,1,1v1h5V21c0,.551-.449,1-1,1H6c-.551,0-1-.449-1-1V4h5Zm-1,11h-2v2h2v-2Zm.838-3.481l2.759-2.702-1.399-1.429-2.533,2.48-1.241-1.192-1.386,1.442,1.45,1.393c.326,.326,.754,.488,1.181,.488,.425,0,.848-.161,1.168-.481Z" data-v-76a46a43></path></svg></div><div class="video_btn" data-v-76a46a43><svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" data-v-76a46a43><path d="m24,5.917l-3.3,1.909,1.326,4.029-.75.523-3.261-2.521-3.275,2.532-.721-.543,1.304-4.076-3.323-1.848v-.922h4.35l1.178-4.5h.97l1.176,4.5h4.326v.917Zm-19-.917v2h5v-2h-5Zm7,4h-7v2h7v-2Zm-7,6h7v-2h-7v2Zm14,3h3v3c0,1.654-1.346,3-3,3H3.5c-1.93,0-3.5-1.57-3.5-3.5V3C0,1.346,1.346,0,3,0h11.13c-.915.507-1.716,1.189-2.366,2H3c-.551,0-1,.448-1,1v17.5c0,.827.673,1.5,1.5,1.5s1.5-.673,1.5-1.5v-2.5h12v-3.067c.327.043.661.067,1,.067s.672-.028,1-.069v3.069Zm1,2H7v.5c0,.536-.122,1.045-.338,1.5h12.338c.551,0,1-.448,1-1v-1Z" data-v-76a46a43></path></svg></div>',2),BT={class:"video_btn score_btn"},PT=Lt(()=>T("svg",{xmlns:"http://www.w3.org/2000/svg",id:"Layer_1","data-name":"Layer 1",viewBox:"0 0 24 24"},[T("g",{style:{translate:"0 3px"}},[T("path",{d:"m20.5,11h-2c-.539,0-1.044.133-1.5.351v-4.851c0-1.93-1.57-3.5-3.5-3.5h-3c-1.93,0-3.5,1.57-3.5,3.5v2.851c-.456-.219-.961-.351-1.5-.351h-2c-1.93,0-3.5,1.57-3.5,3.5v5c0,1.93,1.57,3.5,3.5,3.5h17c1.93,0,3.5-1.57,3.5-3.5v-3c0-1.93-1.57-3.5-3.5-3.5ZM2,17.5v-5c0-.827.673-1.5,1.5-1.5h2c.827,0,1.5.673,1.5,1.5v6.5h-3.5c-.827,0-1.5-.673-1.5-1.5Zm7-11c0-.827.673-1.5,1.5-1.5h3c.827,0,1.5.673,1.5,1.5v12.5h-6V6.5Zm13,11c0,.827-.673,1.5-1.5,1.5h-3.5v-4.5c0-.827.673-1.5,1.5-1.5h2c.827,0,1.5.673,1.5,1.5v3Z"})])],-1)),OT={class:"score_digit"},MT={class:"sel_srcs_box"},FT=Lt(()=>T("div",{class:"playing_bar"},null,-1)),NT=Lt(()=>T("div",{class:"playing_bar"},null,-1)),UT=Lt(()=>T("div",{class:"playing_bar"},null,-1)),$T=[FT,NT,UT],HT={class:"select_episode_area"},GT={class:"select_episode_board"},KT={class:"select_episode_box"},zT=["onClick"],qT=Lt(()=>T("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},[T("path",{d:"M7 0 L13 10 L7 20",style:{"stroke-width":"2",fill:"transparent"}})],-1)),jT=[qT],VT={class:"show_title"},WT=Lt(()=>T("div",{class:"show_title_content"}," 选择集数 ",-1)),YT=Lt(()=>T("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},[T("path",{d:"M0 15 L10 5 L20 15",style:{stroke:"#61666D","stroke-width":"2",fill:"transparent"}})],-1)),QT=[YT],XT={class:"full_select_episode_board"},ZT=["onClick"],JT={class:"show_title"},eC=Lt(()=>T("div",{class:"show_title_content"}," 视频详情 ",-1)),tC=Lt(()=>T("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},[T("path",{d:"M0 15 L10 5 L20 15",style:{stroke:"#61666D","stroke-width":"2",fill:"transparent"}})],-1)),nC=[tC],rC={class:"video_detail_content"},iC={class:"score_box"},sC={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 36 36"},oC=["stroke-dasharray","stroke"],aC={class:"score_data"},lC={class:"score_dig"},cC={class:"rank_dig"},dC={class:"attr_pair"},uC=Lt(()=>T("div",{class:"attr_title"}," 片名 ",-1)),hC={class:"attr_val"},fC={class:"attr_pair"},pC=Lt(()=>T("div",{class:"attr_title"}," 简介 ",-1)),mC={class:"attr_val"},gC={class:"attr_pair"},yC=Lt(()=>T("div",{class:"attr_title"}," 总集数 ",-1)),AC={class:"attr_val"},vC={class:"attr_title"},bC={class:"attr_val"},xC={class:"show_title"},EC=Lt(()=>T("div",{class:"show_title_content"}," 选择资源 ",-1)),_C=Lt(()=>T("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},[T("path",{d:"M0 15 L10 5 L20 15",style:{stroke:"#61666D","stroke-width":"2",fill:"transparent"}})],-1)),wC=[_C],SC={class:"full_select_src_board"},TC=["onClick"],CC=Gt({__name:"AnimePlay",setup(n){const e=Zi(),t=To(),r=So();let i;const s=Tt(""),o=Tt([]),a=Tt([]),l=Tt({}),c=Tt(0),d=Tt(0),u=rt(()=>d.value<a.value.length&&d.value>=0?a.value[d.value].srcs.vod_play_url:[]),h=rt(()=>d.value<a.value.length&&d.value>=0?a.value[d.value].srcs:{vod_name:"正在载入",vod_year:"正在载入",vod_area:"正在载入",vod_class:"正在载入",vod_blurb:"正在载入"}),y=rt(()=>{if(d.value<a.value.length&&d.value>=0){const Y=a.value[d.value].srcs_idx;return t.anime_srcs_list[Y]}else return"正在载入..."}),m=rt(()=>{const Y=[];for(let re=0;re<a.value.length;re++){const H=t.anime_srcs_list[a.value[re].srcs_idx];Y.push(H)}return Y});function A(Y){Y>=0&&Y<m.value.length&&(d.value=Y),(c.value>=u.value.length||c.value<0)&&(c.value=0)}function b(Y){Y<u.value.length&&Y>=0&&(c.value=Y)}async function S(){i!=null&&i!=null?(console.log("url: ",u.value[c.value].ep_link),i.switchVideo({url:u.value[c.value].ep_link,type:"hls",customType:{hls:function(Y,re){if(vn.isSupported()){const H=new vn;H.loadSource(Y.src),H.attachMedia(Y)}else Y.canPlayType("application/vnd.apple.mpegurl")}}},void 0)):(await Ni(),i=new I2({container:document.getElementById("pc_player"),screenshot:!0,video:{url:u.value[c.value].ep_link,type:"hls",customType:{hls:function(Y,re){if(vn.isSupported()){const H=new vn;H.loadSource(Y.src),H.attachMedia(Y)}else Y.canPlayType("application/vnd.apple.mpegurl")}}}})),s.value!=""&&r.play_anime(s.value,d.value,c.value,u.value[c.value].ep_name,a.value[0].srcs.vod_pic)}on(()=>e.query,()=>{S()}),on(()=>c.value,()=>{S()}),on(()=>d.value,()=>{S()});const C=rt(()=>{const Y=[];let re=0;if(l.value.tags!=null&&l.value.tags!=null){for(let Q=0;Q<l.value.tags.length;Q++)re+=l.value.tags[Q].count;let H=0;re>0&&(H=re/l.value.tags.length);for(let Q=0;Q<l.value.tags.length;Q++)if(l.value.tags[Q].count>=H){let ae=l.value.tags[Q].name;l.value.tags[Q].count>0&&(ae+="("+l.value.tags[Q].count+")"),Y.push({name:l.value.tags[Q].name,count:l.value.tags[Q].count,show:ae})}}return Y}),R=rt(()=>{let Y="";return l.value.summary!=null&&l.value.summary!=null&&(Y=l.value.summary),Y}),D=rt(()=>{let Y="";return l.value.name!=null&&l.value.name!=null&&(Y=l.value.name),Y}),B=rt(()=>{let Y="";return l.value.total_episodes!=null&&l.value.total_episodes!=null&&(Y+=l.value.total_episodes),Y}),K=rt(()=>{const Y=[];if(l.value.infobox!=null&&l.value.infobox!=null)for(let re=0;re<l.value.infobox.length;re++){const H=l.value.infobox[re],Q={title:H.key,value:""};if(typeof H.value=="string")Q.value=H.value;else for(let ae=0;ae<H.value.length;ae++)ae>0&&(Q.value+=", "),Q.value+=H.value[ae].v;Y.push(Q)}return Y}),N=["rgba(255,128,102,1)","rgba(255.0,156.22222222222223,102.0,1.0)","rgba(255.0,184.44444444444446,102.0,1.0)","rgba(255.0,212.66666666666666,102.0,1.0)","rgba(255.0,240.88888888888889,102.0,1.0)","rgba(240.88888888888889,255.0,102.0,1.0)","rgba(212.66666666666669,255.0,102.0,1.0)","rgba(184.44444444444446,255.0,102.0,1.0)","rgba(156.22222222222223,255.0,102.0,1.0)","rgba(128.0,255.0,102.0,1.0)"],z=rt(()=>{let Y=0,re=0,H=[];if(l.value.rating!=null&&l.value.rating!=null){const ae=l.value.rating;Y=ae.score,re=ae.rank;let j=0,de=0;if(ae.total!=0)for(const Re of Object.values(ae.count)){de+=1;let Se=10;ae.total!=0&&(Se=Re/ae.total*100),H.push({stroke:"0,"+j+",100",color:N[de-1]}),j+=Se}else{for(let Re=0;Re<9;Re++)H.push({stroke:"0,0,100",color:N[de-1]});H.push({stroke:"1",color:N[de-1]})}}let Q="#"+re;return re==0&&(Q="No Rank Info"),{score:Y,rank:Q,score_pie:H}}),Z=Tt(0);function O(Y){Z.value=Y}function ee(Y){const re=[];for(let ae=0;ae<Y.length;ae++){const j=Y[ae].srcs.vod_class.split(",");for(let de=0;de<j.length;de++)j[de]!=""&&re.push(j[de])}const H=Array.from(new Set(re)),Q=[];for(let ae=0;ae<H.length;ae++)Q.push({name:H[ae],count:0});return Q}async function _e(Y){let re=!1;for(let Q=0;Q<Y.length;Q++)if(Y[Q].srcs.vod_class.includes("动画")){re=!0;break}if(re)try{l.value=await t.obtain_anime_bgm_detail(s.value);return}catch{console.log("[Error] No Bangumi Data!")}const H={date:Y[0].srcs.vod_time,images:{small:Y[0].srcs.vod_pic,grid:Y[0].srcs.vod_pic,large:Y[0].srcs.vod_pic,medium:Y[0].srcs.vod_pic,common:Y[0].srcs.vod_pic},summary:Y[0].srcs.vod_blurb,name:Y[0].srcs.vod_name,name_cn:Y[0].srcs.vod_name,tags:ee(Y),rating:{rank:0,total:0,count:{1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0},score:Y[0].srcs.vod_douban_score},total_episodes:Y[0].srcs.vod_serial,infobox:[{key:"演员",value:Y[0].srcs.vod_actor},{key:"导演",value:Y[0].srcs.vod_director},{key:"编剧",value:Y[0].srcs.vod_writer}]};l.value=H}let ce=!0;return Xi(async()=>{window.innerWidth<780&&(ce=!1),"animeName"in e.query?s.value=e.query.animeName:s.value="",s.value==""&&Xn.push("/anime/search");const Y=await t.obtain_anime_detail(s.value);a.value=t.get_anime_srcs(Y.anime),o.value=Y.srcs_classes,_e(a.value),"srcIdx"in e.query&&A(Number(e.query.srcIdx)),"epIdx"in e.query&&b(Number(e.query.epIdx)),await Ni(),S()}),(Y,re)=>(oe(),le("div",YS,[T("div",QS,[T("div",XS,[T("div",ZS,[T("div",JS,[T("div",eT,[T("div",tT,[Bt(ce)?(oe(),le("div",nT,null,512)):Or("",!0)])]),T("div",rT,[T("h2",iT,ke(h.value.vod_name),1),T("div",sT,ke(h.value.vod_year)+" | "+ke(h.value.vod_area)+" | "+ke(h.value.vod_class)+" | "+ke(h.value.vod_blurb)+" ",1)]),T("div",oT,[(oe(!0),le(Ke,null,st(m.value,(H,Q)=>(oe(),le("span",{class:Mt(["anime_src_item",{select_item:d.value==Q}]),key:Q,onClick:ae=>A(Q)},ke(H),11,aT))),128))]),T("div",lT,[(oe(!0),le(Ke,null,st(u.value,(H,Q)=>(oe(),le("span",{class:Mt(["episode_item",{select_item:c.value==Q}]),key:Q,onClick:ae=>b(Q)},ke(H.ep_name),11,cT))),128))])])]),T("div",dT,[T("div",uT,[T("div",hT,[(oe(),le("svg",fT,[(oe(!0),le(Ke,null,st(z.value.score_pie,(H,Q)=>(oe(),le("circle",{cx:"18",cy:"18",r:"16","stroke-width":"4",key:Q,"stroke-dasharray":H.stroke,fill:"transparent",stroke:H.color},null,8,pT))),128))])),T("div",mT,[T("div",gT,ke(z.value.score),1),T("div",yT,ke(z.value.rank),1)])]),T("div",AT,[(oe(!0),le(Ke,null,st(C.value,(H,Q)=>(oe(),le("span",{class:"tag_item",key:Q},ke(H.show),1))),128))]),T("div",vT,[bT,Ve(" "+ke(D.value),1)]),T("div",xT,[ET,Ve(" "+ke(R.value),1)]),T("div",_T,[wT,Ve(" "+ke(B.value),1)]),(oe(!0),le(Ke,null,st(K.value,(H,Q)=>(oe(),le("div",{class:"attr_pair",key:Q},[T("span",ST,ke(H.title)+": ",1),Ve(" "+ke(H.value),1)]))),128))])])])]),T("div",TT,[T("div",{class:"video_outer_box",onClick:re[0]||(re[0]=H=>O(0))},[T("div",CT,[Bt(ce)?Or("",!0):(oe(),le("div",LT,null,512))])]),T("div",kT,[T("div",RT,[T("h2",{class:"video_title",onClick:re[1]||(re[1]=H=>O(3))},ke(h.value.vod_name),1),T("div",{class:"video_blurb",onClick:re[2]||(re[2]=H=>O(3))},ke(h.value.vod_year)+" | "+ke(h.value.vod_area)+" | "+ke(h.value.vod_class)+" | "+ke(h.value.vod_blurb),1)]),T("div",IT,[DT,T("div",BT,[PT,T("div",OT,ke(z.value.score),1)])]),T("div",MT,[T("div",{class:"sel_src_title",onClick:re[3]||(re[3]=H=>O(2))},ke(y.value),1),T("div",{class:"now_play_anime",onClick:re[4]||(re[4]=H=>O(2))},$T)]),T("div",HT,[T("div",GT,[T("div",KT,[(oe(!0),le(Ke,null,st(u.value,(H,Q)=>(oe(),le("span",{class:Mt(["episode_item",{select_item:c.value==Q}]),key:Q,onClick:ae=>b(Q)},ke(H.ep_name),11,zT))),128))])]),T("div",{class:"episodes_complete_show_btn",onClick:re[5]||(re[5]=H=>O(1))},jT)]),T("div",{class:Mt(["episodes_complete_show",{c_show:Z.value==1}])},[T("div",VT,[WT,T("div",{class:"show_title_btn",onClick:re[6]||(re[6]=H=>O(0))},QT)]),T("div",XT,[(oe(!0),le(Ke,null,st(u.value,(H,Q)=>(oe(),le("div",{class:Mt(["full_episode_item",{select_item:c.value==Q}]),key:Q,onClick:ae=>b(Q)},ke(H.ep_name),11,ZT))),128))])],2),T("div",{class:Mt(["video_detail_show",{c_show:Z.value==3}])},[T("div",JT,[eC,T("div",{class:"show_title_btn",onClick:re[7]||(re[7]=H=>O(0))},nC)]),T("div",rC,[T("div",iC,[(oe(),le("svg",sC,[(oe(!0),le(Ke,null,st(z.value.score_pie,(H,Q)=>(oe(),le("circle",{cx:"18",cy:"18",r:"16","stroke-width":"4",key:Q,"stroke-dasharray":H.stroke,fill:"transparent",stroke:H.color},null,8,oC))),128))])),T("div",aC,[T("div",lC,ke(z.value.score),1),T("div",cC," # "+ke(z.value.rank),1)])]),T("div",dC,[uC,T("div",hC,ke(D.value),1)]),T("div",fC,[pC,T("div",mC,ke(R.value),1)]),T("div",gC,[yC,T("div",AC,ke(B.value),1)]),(oe(!0),le(Ke,null,st(K.value,(H,Q)=>(oe(),le("div",{class:"attr_pair",key:Q},[T("div",vC,ke(H.title),1),T("div",bC,ke(H.value),1)]))),128))])],2),T("div",{class:Mt(["srcs_complete_show",{c_show:Z.value==2}])},[T("div",xC,[EC,T("div",{class:"show_title_btn",onClick:re[8]||(re[8]=H=>O(0))},wC)]),T("div",SC,[(oe(!0),le(Ke,null,st(m.value,(H,Q)=>(oe(),le("div",{class:Mt(["full_src_item",{select_item:d.value==Q}]),key:Q,onClick:ae=>A(Q)},ke(H),11,TC))),128))])],2)])])]))}});const LC=Ft(CC,[["__scopeId","data-v-76a46a43"]]),kC={class:"page_box"},RC={class:"head_where"},IC={class:"page_where"},DC=Gt({__name:"AnimePlayPage",setup(n){return(e,t)=>(oe(),le("div",kC,[T("div",RC,[qe(Co)]),T("div",IC,[qe(LC)])]))}});const BC=Ft(DC,[["__scopeId","data-v-dd9a528e"]]);const Pn=n=>(Yi("data-v-13a5ce4f"),n=n(),Qi(),n),PC={class:"calendar_area"},OC={class:"animates_calendar_pc_cont"},MC={class:"main_content_place"},FC=Pn(()=>T("div",{class:"page_title"},[T("div",{class:"page_title_content"}," 放送时间表 ")],-1)),NC={class:"calendar_show"},UC={class:"calendar_box"},$C={class:"week_in_calendar"},HC=Pn(()=>T("dt",{class:"week_title"},[T("div",{class:"en_bg"}," Sunday "),T("div",{class:"ch_bg"}," 星期日 ")],-1)),GC=["onClick"],KC=["title"],zC={class:"week_in_calendar"},qC=Pn(()=>T("dt",{class:"week_title"},[T("div",{class:"en_bg"}," Monday "),T("div",{class:"ch_bg"}," 星期一 ")],-1)),jC=["onClick"],VC=["title"],WC={class:"week_in_calendar"},YC=Pn(()=>T("dt",{class:"week_title"},[T("div",{class:"en_bg"}," Tuesday "),T("div",{class:"ch_bg"}," 星期二 ")],-1)),QC=["onClick"],XC=["title"],ZC={class:"week_in_calendar"},JC=Pn(()=>T("dt",{class:"week_title"},[T("div",{class:"en_bg"}," Wednesday "),T("div",{class:"ch_bg"}," 星期三 ")],-1)),e5=["onClick"],t5=["title"],n5={class:"week_in_calendar"},r5=Pn(()=>T("dt",{class:"week_title"},[T("div",{class:"en_bg"}," Thursday "),T("div",{class:"ch_bg"}," 星期四 ")],-1)),i5=["onClick"],s5=["title"],o5={class:"week_in_calendar"},a5=Pn(()=>T("dt",{class:"week_title"},[T("div",{class:"en_bg"}," Friday "),T("div",{class:"ch_bg"}," 星期五 ")],-1)),l5=["onClick"],c5=["title"],d5={class:"week_in_calendar"},u5=Pn(()=>T("dt",{class:"week_title"},[T("div",{class:"en_bg"}," Saturday "),T("div",{class:"ch_bg"}," 星期六 ")],-1)),h5=["onClick"],f5=["title"],p5={class:"animates_calendar_mobile_cont"},m5={class:"main_content_place"},g5=Pn(()=>T("div",{class:"page_title"}," 放送时间表 ",-1)),y5={class:"weekdays_selection"},A5=["onClick"],v5={class:"animates_box"},b5=["onClick"],x5={class:"animate_score"},E5={class:"animate_title"},_5=Gt({__name:"AnimeCalendar",setup(n){const e=Tt(0),t=Tt(5),r=Tt([0,0,0,0,0,0,0]);function i(){const h=new Date;e.value=h.getDay(),t.value=e.value;const y=h.getDate();r.value[e.value]=y;for(let m=1;m<=6;m++){const A=new Date;A.setDate(h.getDate()+m);const b=A.getDate();r.value[A.getDay()]=b}}function s(h){return h.images==null?"":h.images.common!=null?h.images.common:""}function o(h){let y="";return h.score==-1||h.score==null||h.score==null?y="暂无评分":y=h.score.toFixed(1),y+=" | ▷ ",h.collection_num==0||h.collection_num==null||h.collection_num==null?y+="无人收藏":y+=h.collection_num,y}const a=Tt([]);async function l(){i();const y=(await Sr.get("https://api.bgm.tv/calendar")).data;a.value=[];for(let m=0;m<7;m++)a.value.push([]);for(let m=0;m<y.length;m++){let A=y[m].weekday.id;A==7&&(A=0);const b=y[m].items;for(let S=0;S<b.length;S++){const C=b[S];let R=-1,D=0;C.rating!=null&&C.rating.score!=null&&(R=C.rating.score),C.collection!=null&&C.collection.doing!=null&&(D=C.collection.doing);const B={name:C.name,name_cn:C.name_cn,images:C.images,score:R,collection_num:D};(B.name_cn==null||B.name_cn=="")&&(B.name_cn=B.name),a.value[A].push(B)}}}Xi(()=>{l()});function c(h){}function d(h){t.value=h}function u(h){Xn.push("/anime/search?animeName="+h)}return(h,y)=>(oe(),le("div",PC,[T("div",OC,[T("div",MC,[FC,T("div",NC,[T("ul",UC,[T("li",$C,[T("dl",null,[HC,T("dd",null,[T("ul",null,[(oe(!0),le(Ke,null,st(a.value[0],(m,A)=>(oe(),le("li",{class:"animate_in_calendar",key:A,style:Vt({backgroundImage:"url("+s(m)+")"}),onClick:b=>u(m.name_cn)},[T("div",{class:"animate_title",title:m.name_cn},ke(m.name_cn),9,KC)],12,GC))),128))])])])]),T("li",zC,[T("dl",null,[qC,T("dd",null,[T("ul",null,[(oe(!0),le(Ke,null,st(a.value[1],(m,A)=>(oe(),le("li",{class:"animate_in_calendar",key:A,style:Vt({backgroundImage:"url("+s(m)+")"}),onClick:b=>u(m.name_cn)},[T("div",{class:"animate_title",title:m.name_cn},ke(m.name_cn),9,VC)],12,jC))),128))])])])]),T("li",WC,[T("dl",null,[YC,T("dd",null,[T("ul",null,[(oe(!0),le(Ke,null,st(a.value[2],(m,A)=>(oe(),le("li",{class:"animate_in_calendar",key:A,style:Vt({backgroundImage:"url("+s(m)+")"}),onClick:b=>u(m.name_cn)},[T("div",{class:"animate_title",title:m.name_cn},ke(m.name_cn),9,XC)],12,QC))),128))])])])]),T("li",ZC,[T("dl",null,[JC,T("dd",null,[T("ul",null,[(oe(!0),le(Ke,null,st(a.value[3],(m,A)=>(oe(),le("li",{class:"animate_in_calendar",key:A,style:Vt({backgroundImage:"url("+s(m)+")"}),onClick:b=>u(m.name_cn)},[T("div",{class:"animate_title",title:m.name_cn},ke(m.name_cn),9,t5)],12,e5))),128))])])])]),T("li",n5,[T("dl",null,[r5,T("dd",null,[T("ul",null,[(oe(!0),le(Ke,null,st(a.value[4],(m,A)=>(oe(),le("li",{class:"animate_in_calendar",key:A,style:Vt({backgroundImage:"url("+s(m)+")"}),onClick:b=>u(m.name_cn)},[T("div",{class:"animate_title",title:m.name_cn},ke(m.name_cn),9,s5)],12,i5))),128))])])])]),T("li",o5,[T("dl",null,[a5,T("dd",null,[T("ul",null,[(oe(!0),le(Ke,null,st(a.value[5],(m,A)=>(oe(),le("li",{class:"animate_in_calendar",key:A,style:Vt({backgroundImage:"url("+s(m)+")"}),onClick:b=>u(m.name_cn)},[T("div",{class:"animate_title",title:m.name_cn},ke(m.name_cn),9,c5)],12,l5))),128))])])])]),T("li",d5,[T("dl",null,[u5,T("dd",null,[T("ul",null,[(oe(!0),le(Ke,null,st(a.value[6],(m,A)=>(oe(),le("li",{class:"animate_in_calendar",key:A,style:Vt({backgroundImage:"url("+s(m)+")"}),onClick:b=>u(m.name_cn)},[T("div",{class:"animate_title",title:m.name_cn},ke(m.name_cn),9,f5)],12,h5))),128))])])])])])])])]),T("div",p5,[T("div",m5,[g5,T("div",{class:"calendar_box",onTouchmove:c},[T("div",y5,[T("div",{class:"weekday_item_selection",style:Vt({left:"calc(100% / 14 - 25px + 100% / 7 * "+t.value+")"})},null,4),(oe(!0),le(Ke,null,st(r.value,(m,A)=>(oe(),le("div",{class:Mt(["weekday_item",{sel_weekday:A==t.value}]),key:A,onClick:b=>d(A)},ke(m),11,A5))),128))]),T("div",v5,[(oe(!0),le(Ke,null,st(a.value[t.value],(m,A)=>(oe(),le("div",{class:"animate_item",key:A,onClick:b=>u(m.name_cn)},[T("div",{class:"animate_img_box",style:Vt({backgroundImage:"url("+s(m)+")"})},[T("div",x5,ke(o(m)),1)],4),T("div",E5,ke(m.name_cn),1)],8,b5))),128))])],32)])])]))}});const w5=Ft(_5,[["__scopeId","data-v-13a5ce4f"]]),S5={class:"page_box"},T5={class:"head_where"},C5={class:"page_where"},L5=Gt({__name:"AnimeCalendarPage",setup(n){return(e,t)=>(oe(),le("div",S5,[T("div",T5,[qe(Co)]),T("div",C5,[qe(w5)])]))}});const k5=Ft(L5,[["__scopeId","data-v-867db6f3"]]),R5={class:"page_content"},I5={class:"head_box"},D5={class:"history_content_place"},B5=Gt({__name:"AnimeHistoryPage",setup(n){return(e,t)=>(oe(),le("div",R5,[T("div",I5,[qe(Co)]),T("div",D5,[qe(Ex)])]))}});const Xn=xA({history:N1("./"),routes:[{path:"/",name:"home",component:Cv},{path:"/new/about",name:"about",component:()=>CA(()=>import("./AboutView-ebb327d2.js"),["./AboutView-ebb327d2.js","./AboutView-4d995ba2.css"],import.meta.url)},{path:"/cover",name:"cover",component:Ov},{path:"/login",name:"login",component:Hv},{path:"/anime/search",component:C2},{path:"/anime/play",component:BC},{path:"/anime/calendar",component:k5},{path:"/anime/history",component:B5}]}),Up=l1();Up.use(b1);const Zl=s1(wA);Zl.use(Up);Zl.use(Xn);Zl.mount("#app");export{Ft as _,T as a,le as c,oe as o};
