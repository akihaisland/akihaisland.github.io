(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();function Pa(n,e){const t=Object.create(null),r=n.split(",");for(let i=0;i<r.length;i++)t[r[i]]=!0;return e?i=>!!t[i.toLowerCase()]:i=>!!t[i]}const Je={},dr=[],Ht=()=>{},ym=()=>!1,Am=/^on[^a-z]/,Os=n=>Am.test(n),Ba=n=>n.startsWith("onUpdate:"),ft=Object.assign,Oa=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},bm=Object.prototype.hasOwnProperty,He=(n,e)=>bm.call(n,e),De=Array.isArray,ur=n=>Fs(n)==="[object Map]",xu=n=>Fs(n)==="[object Set]",Oe=n=>typeof n=="function",dt=n=>typeof n=="string",Fa=n=>typeof n=="symbol",et=n=>n!==null&&typeof n=="object",Su=n=>et(n)&&Oe(n.then)&&Oe(n.catch),Tu=Object.prototype.toString,Fs=n=>Tu.call(n),vm=n=>Fs(n).slice(8,-1),Cu=n=>Fs(n)==="[object Object]",Ma=n=>dt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,ns=Pa(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ms=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},Em=/-(\w)/g,mr=Ms(n=>n.replace(Em,(e,t)=>t?t.toUpperCase():"")),xm=/\B([A-Z])/g,wr=Ms(n=>n.replace(xm,"-$1").toLowerCase()),wu=Ms(n=>n.charAt(0).toUpperCase()+n.slice(1)),go=Ms(n=>n?`on${wu(n)}`:""),gi=(n,e)=>!Object.is(n,e),rs=(n,e)=>{for(let t=0;t<n.length;t++)n[t](e)},As=(n,e,t)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,value:t})},Yo=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let lc;const Qo=()=>lc||(lc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Na(n){if(De(n)){const e={};for(let t=0;t<n.length;t++){const r=n[t],i=dt(r)?wm(r):Na(r);if(i)for(const s in i)e[s]=i[s]}return e}else{if(dt(n))return n;if(et(n))return n}}const Sm=/;(?![^(]*\))/g,Tm=/:([^]+)/,Cm=/\/\*[^]*?\*\//g;function wm(n){const e={};return n.replace(Cm,"").split(Sm).forEach(t=>{if(t){const r=t.split(Tm);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Ua(n){let e="";if(dt(n))e=n;else if(De(n))for(let t=0;t<n.length;t++){const r=Ua(n[t]);r&&(e+=r+" ")}else if(et(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const km="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Lm=Pa(km);function ku(n){return!!n||n===""}const VS=n=>dt(n)?n:n==null?"":De(n)||et(n)&&(n.toString===Tu||!Oe(n.toString))?JSON.stringify(n,Lu,2):String(n),Lu=(n,e)=>e&&e.__v_isRef?Lu(n,e.value):ur(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[r,i])=>(t[`${r} =>`]=i,t),{})}:xu(e)?{[`Set(${e.size})`]:[...e.values()]}:et(e)&&!De(e)&&!Cu(e)?String(e):e;let kt;class Ru{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=kt,!e&&kt&&(this.index=(kt.scopes||(kt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const t=kt;try{return kt=this,e()}finally{kt=t}}}on(){kt=this}off(){kt=this.parent}stop(e){if(this._active){let t,r;for(t=0,r=this.effects.length;t<r;t++)this.effects[t].stop();for(t=0,r=this.cleanups.length;t<r;t++)this.cleanups[t]();if(this.scopes)for(t=0,r=this.scopes.length;t<r;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function Iu(n){return new Ru(n)}function Rm(n,e=kt){e&&e.active&&e.effects.push(n)}function _u(){return kt}function Im(n){kt&&kt.cleanups.push(n)}const $a=n=>{const e=new Set(n);return e.w=0,e.n=0,e},Du=n=>(n.w&_n)>0,Pu=n=>(n.n&_n)>0,_m=({deps:n})=>{if(n.length)for(let e=0;e<n.length;e++)n[e].w|=_n},Dm=n=>{const{deps:e}=n;if(e.length){let t=0;for(let r=0;r<e.length;r++){const i=e[r];Du(i)&&!Pu(i)?i.delete(n):e[t++]=i,i.w&=~_n,i.n&=~_n}e.length=t}},bs=new WeakMap;let oi=0,_n=1;const Xo=30;let Ut;const Gn=Symbol(""),Jo=Symbol("");class Ha{constructor(e,t=null,r){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,Rm(this,r)}run(){if(!this.active)return this.fn();let e=Ut,t=Ln;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Ut,Ut=this,Ln=!0,_n=1<<++oi,oi<=Xo?_m(this):cc(this),this.fn()}finally{oi<=Xo&&Dm(this),_n=1<<--oi,Ut=this.parent,Ln=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Ut===this?this.deferStop=!0:this.active&&(cc(this),this.onStop&&this.onStop(),this.active=!1)}}function cc(n){const{deps:e}=n;if(e.length){for(let t=0;t<e.length;t++)e[t].delete(n);e.length=0}}let Ln=!0;const Bu=[];function kr(){Bu.push(Ln),Ln=!1}function Lr(){const n=Bu.pop();Ln=n===void 0?!0:n}function Ct(n,e,t){if(Ln&&Ut){let r=bs.get(n);r||bs.set(n,r=new Map);let i=r.get(t);i||r.set(t,i=$a()),Ou(i)}}function Ou(n,e){let t=!1;oi<=Xo?Pu(n)||(n.n|=_n,t=!Du(n)):t=!n.has(Ut),t&&(n.add(Ut),Ut.deps.push(n))}function mn(n,e,t,r,i,s){const o=bs.get(n);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(t==="length"&&De(n)){const l=Number(r);o.forEach((c,d)=>{(d==="length"||d>=l)&&a.push(c)})}else switch(t!==void 0&&a.push(o.get(t)),e){case"add":De(n)?Ma(t)&&a.push(o.get("length")):(a.push(o.get(Gn)),ur(n)&&a.push(o.get(Jo)));break;case"delete":De(n)||(a.push(o.get(Gn)),ur(n)&&a.push(o.get(Jo)));break;case"set":ur(n)&&a.push(o.get(Gn));break}if(a.length===1)a[0]&&Zo(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);Zo($a(l))}}function Zo(n,e){const t=De(n)?n:[...n];for(const r of t)r.computed&&dc(r);for(const r of t)r.computed||dc(r)}function dc(n,e){(n!==Ut||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}function Pm(n,e){var t;return(t=bs.get(n))==null?void 0:t.get(e)}const Bm=Pa("__proto__,__v_isRef,__isVue"),Fu=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Fa)),Om=Ga(),Fm=Ga(!1,!0),Mm=Ga(!0),uc=Nm();function Nm(){const n={};return["includes","indexOf","lastIndexOf"].forEach(e=>{n[e]=function(...t){const r=Ge(this);for(let s=0,o=this.length;s<o;s++)Ct(r,"get",s+"");const i=r[e](...t);return i===-1||i===!1?r[e](...t.map(Ge)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{n[e]=function(...t){kr();const r=Ge(this)[e].apply(this,t);return Lr(),r}}),n}function Um(n){const e=Ge(this);return Ct(e,"has",n),e.hasOwnProperty(n)}function Ga(n=!1,e=!1){return function(r,i,s){if(i==="__v_isReactive")return!n;if(i==="__v_isReadonly")return n;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&s===(n?e?tg:Hu:e?$u:Uu).get(r))return r;const o=De(r);if(!n){if(o&&He(uc,i))return Reflect.get(uc,i,s);if(i==="hasOwnProperty")return Um}const a=Reflect.get(r,i,s);return(Fa(i)?Fu.has(i):Bm(i))||(n||Ct(r,"get",i),e)?a:it(a)?o&&Ma(i)?a:a.value:et(a)?n?Ku(a):Li(a):a}}const $m=Mu(),Hm=Mu(!0);function Mu(n=!1){return function(t,r,i,s){let o=t[r];if(gr(o)&&it(o)&&!it(i))return!1;if(!n&&(!vs(i)&&!gr(i)&&(o=Ge(o),i=Ge(i)),!De(t)&&it(o)&&!it(i)))return o.value=i,!0;const a=De(t)&&Ma(r)?Number(r)<t.length:He(t,r),l=Reflect.set(t,r,i,s);return t===Ge(s)&&(a?gi(i,o)&&mn(t,"set",r,i):mn(t,"add",r,i)),l}}function Gm(n,e){const t=He(n,e);n[e];const r=Reflect.deleteProperty(n,e);return r&&t&&mn(n,"delete",e,void 0),r}function Km(n,e){const t=Reflect.has(n,e);return(!Fa(e)||!Fu.has(e))&&Ct(n,"has",e),t}function jm(n){return Ct(n,"iterate",De(n)?"length":Gn),Reflect.ownKeys(n)}const Nu={get:Om,set:$m,deleteProperty:Gm,has:Km,ownKeys:jm},qm={get:Mm,set(n,e){return!0},deleteProperty(n,e){return!0}},zm=ft({},Nu,{get:Fm,set:Hm}),Ka=n=>n,Ns=n=>Reflect.getPrototypeOf(n);function $i(n,e,t=!1,r=!1){n=n.__v_raw;const i=Ge(n),s=Ge(e);t||(e!==s&&Ct(i,"get",e),Ct(i,"get",s));const{has:o}=Ns(i),a=r?Ka:t?za:yi;if(o.call(i,e))return a(n.get(e));if(o.call(i,s))return a(n.get(s));n!==i&&n.get(e)}function Hi(n,e=!1){const t=this.__v_raw,r=Ge(t),i=Ge(n);return e||(n!==i&&Ct(r,"has",n),Ct(r,"has",i)),n===i?t.has(n):t.has(n)||t.has(i)}function Gi(n,e=!1){return n=n.__v_raw,!e&&Ct(Ge(n),"iterate",Gn),Reflect.get(n,"size",n)}function hc(n){n=Ge(n);const e=Ge(this);return Ns(e).has.call(e,n)||(e.add(n),mn(e,"add",n,n)),this}function fc(n,e){e=Ge(e);const t=Ge(this),{has:r,get:i}=Ns(t);let s=r.call(t,n);s||(n=Ge(n),s=r.call(t,n));const o=i.call(t,n);return t.set(n,e),s?gi(e,o)&&mn(t,"set",n,e):mn(t,"add",n,e),this}function pc(n){const e=Ge(this),{has:t,get:r}=Ns(e);let i=t.call(e,n);i||(n=Ge(n),i=t.call(e,n)),r&&r.call(e,n);const s=e.delete(n);return i&&mn(e,"delete",n,void 0),s}function mc(){const n=Ge(this),e=n.size!==0,t=n.clear();return e&&mn(n,"clear",void 0,void 0),t}function Ki(n,e){return function(r,i){const s=this,o=s.__v_raw,a=Ge(o),l=e?Ka:n?za:yi;return!n&&Ct(a,"iterate",Gn),o.forEach((c,d)=>r.call(i,l(c),l(d),s))}}function ji(n,e,t){return function(...r){const i=this.__v_raw,s=Ge(i),o=ur(s),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=i[n](...r),d=t?Ka:e?za:yi;return!e&&Ct(s,"iterate",l?Jo:Gn),{next(){const{value:u,done:h}=c.next();return h?{value:u,done:h}:{value:a?[d(u[0]),d(u[1])]:d(u),done:h}},[Symbol.iterator](){return this}}}}function vn(n){return function(...e){return n==="delete"?!1:this}}function Vm(){const n={get(s){return $i(this,s)},get size(){return Gi(this)},has:Hi,add:hc,set:fc,delete:pc,clear:mc,forEach:Ki(!1,!1)},e={get(s){return $i(this,s,!1,!0)},get size(){return Gi(this)},has:Hi,add:hc,set:fc,delete:pc,clear:mc,forEach:Ki(!1,!0)},t={get(s){return $i(this,s,!0)},get size(){return Gi(this,!0)},has(s){return Hi.call(this,s,!0)},add:vn("add"),set:vn("set"),delete:vn("delete"),clear:vn("clear"),forEach:Ki(!0,!1)},r={get(s){return $i(this,s,!0,!0)},get size(){return Gi(this,!0)},has(s){return Hi.call(this,s,!0)},add:vn("add"),set:vn("set"),delete:vn("delete"),clear:vn("clear"),forEach:Ki(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=ji(s,!1,!1),t[s]=ji(s,!0,!1),e[s]=ji(s,!1,!0),r[s]=ji(s,!0,!0)}),[n,t,e,r]}const[Wm,Ym,Qm,Xm]=Vm();function ja(n,e){const t=e?n?Xm:Qm:n?Ym:Wm;return(r,i,s)=>i==="__v_isReactive"?!n:i==="__v_isReadonly"?n:i==="__v_raw"?r:Reflect.get(He(t,i)&&i in r?t:r,i,s)}const Jm={get:ja(!1,!1)},Zm={get:ja(!1,!0)},eg={get:ja(!0,!1)},Uu=new WeakMap,$u=new WeakMap,Hu=new WeakMap,tg=new WeakMap;function ng(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function rg(n){return n.__v_skip||!Object.isExtensible(n)?0:ng(vm(n))}function Li(n){return gr(n)?n:qa(n,!1,Nu,Jm,Uu)}function Gu(n){return qa(n,!1,zm,Zm,$u)}function Ku(n){return qa(n,!0,qm,eg,Hu)}function qa(n,e,t,r,i){if(!et(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=i.get(n);if(s)return s;const o=rg(n);if(o===0)return n;const a=new Proxy(n,o===2?r:t);return i.set(n,a),a}function Rn(n){return gr(n)?Rn(n.__v_raw):!!(n&&n.__v_isReactive)}function gr(n){return!!(n&&n.__v_isReadonly)}function vs(n){return!!(n&&n.__v_isShallow)}function ju(n){return Rn(n)||gr(n)}function Ge(n){const e=n&&n.__v_raw;return e?Ge(e):n}function Us(n){return As(n,"__v_skip",!0),n}const yi=n=>et(n)?Li(n):n,za=n=>et(n)?Ku(n):n;function qu(n){Ln&&Ut&&(n=Ge(n),Ou(n.dep||(n.dep=$a())))}function zu(n,e){n=Ge(n);const t=n.dep;t&&Zo(t)}function it(n){return!!(n&&n.__v_isRef===!0)}function Va(n){return Vu(n,!1)}function ig(n){return Vu(n,!0)}function Vu(n,e){return it(n)?n:new sg(n,e)}class sg{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:Ge(e),this._value=t?e:yi(e)}get value(){return qu(this),this._value}set value(e){const t=this.__v_isShallow||vs(e)||gr(e);e=t?e:Ge(e),gi(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:yi(e),zu(this))}}function Kn(n){return it(n)?n.value:n}const og={get:(n,e,t)=>Kn(Reflect.get(n,e,t)),set:(n,e,t,r)=>{const i=n[e];return it(i)&&!it(t)?(i.value=t,!0):Reflect.set(n,e,t,r)}};function Wu(n){return Rn(n)?n:new Proxy(n,og)}function ag(n){const e=De(n)?new Array(n.length):{};for(const t in n)e[t]=cg(n,t);return e}class lg{constructor(e,t,r){this._object=e,this._key=t,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return Pm(Ge(this._object),this._key)}}function cg(n,e,t){const r=n[e];return it(r)?r:new lg(n,e,t)}class dg{constructor(e,t,r,i){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Ha(e,()=>{this._dirty||(this._dirty=!0,zu(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=r}get value(){const e=Ge(this);return qu(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function ug(n,e,t=!1){let r,i;const s=Oe(n);return s?(r=n,i=Ht):(r=n.get,i=n.set),new dg(r,i,s||!i,t)}function In(n,e,t,r){let i;try{i=r?n(...r):n()}catch(s){$s(s,e,t)}return i}function Gt(n,e,t,r){if(Oe(n)){const s=In(n,e,t,r);return s&&Su(s)&&s.catch(o=>{$s(o,e,t)}),s}const i=[];for(let s=0;s<n.length;s++)i.push(Gt(n[s],e,t,r));return i}function $s(n,e,t,r=!0){const i=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=t;for(;s;){const c=s.ec;if(c){for(let d=0;d<c.length;d++)if(c[d](n,o,a)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){In(l,null,10,[n,o,a]);return}}hg(n,t,i,r)}function hg(n,e,t,r=!0){console.error(n)}let Ai=!1,ea=!1;const bt=[];let Xt=0;const hr=[];let dn=null,Nn=0;const Yu=Promise.resolve();let Wa=null;function Ya(n){const e=Wa||Yu;return n?e.then(this?n.bind(this):n):e}function fg(n){let e=Xt+1,t=bt.length;for(;e<t;){const r=e+t>>>1;bi(bt[r])<n?e=r+1:t=r}return e}function Qa(n){(!bt.length||!bt.includes(n,Ai&&n.allowRecurse?Xt+1:Xt))&&(n.id==null?bt.push(n):bt.splice(fg(n.id),0,n),Qu())}function Qu(){!Ai&&!ea&&(ea=!0,Wa=Yu.then(Ju))}function pg(n){const e=bt.indexOf(n);e>Xt&&bt.splice(e,1)}function mg(n){De(n)?hr.push(...n):(!dn||!dn.includes(n,n.allowRecurse?Nn+1:Nn))&&hr.push(n),Qu()}function gc(n,e=Ai?Xt+1:0){for(;e<bt.length;e++){const t=bt[e];t&&t.pre&&(bt.splice(e,1),e--,t())}}function Xu(n){if(hr.length){const e=[...new Set(hr)];if(hr.length=0,dn){dn.push(...e);return}for(dn=e,dn.sort((t,r)=>bi(t)-bi(r)),Nn=0;Nn<dn.length;Nn++)dn[Nn]();dn=null,Nn=0}}const bi=n=>n.id==null?1/0:n.id,gg=(n,e)=>{const t=bi(n)-bi(e);if(t===0){if(n.pre&&!e.pre)return-1;if(e.pre&&!n.pre)return 1}return t};function Ju(n){ea=!1,Ai=!0,bt.sort(gg);const e=Ht;try{for(Xt=0;Xt<bt.length;Xt++){const t=bt[Xt];t&&t.active!==!1&&In(t,null,14)}}finally{Xt=0,bt.length=0,Xu(),Ai=!1,Wa=null,(bt.length||hr.length)&&Ju()}}function yg(n,e,...t){if(n.isUnmounted)return;const r=n.vnode.props||Je;let i=t;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in r){const d=`${o==="modelValue"?"model":o}Modifiers`,{number:u,trim:h}=r[d]||Je;h&&(i=t.map(g=>dt(g)?g.trim():g)),u&&(i=t.map(Yo))}let a,l=r[a=go(e)]||r[a=go(mr(e))];!l&&s&&(l=r[a=go(wr(e))]),l&&Gt(l,n,6,i);const c=r[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,Gt(c,n,6,i)}}function Zu(n,e,t=!1){const r=e.emitsCache,i=r.get(n);if(i!==void 0)return i;const s=n.emits;let o={},a=!1;if(!Oe(n)){const l=c=>{const d=Zu(c,e,!0);d&&(a=!0,ft(o,d))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!a?(et(n)&&r.set(n,null),null):(De(s)?s.forEach(l=>o[l]=null):ft(o,s),et(n)&&r.set(n,o),o)}function Hs(n,e){return!n||!Os(e)?!1:(e=e.slice(2).replace(/Once$/,""),He(n,e[0].toLowerCase()+e.slice(1))||He(n,wr(e))||He(n,e))}let Dt=null,Gs=null;function Es(n){const e=Dt;return Dt=n,Gs=n&&n.type.__scopeId||null,e}function WS(n){Gs=n}function YS(){Gs=null}function Ag(n,e=Dt,t){if(!e||n._n)return n;const r=(...i)=>{r._d&&wc(-1);const s=Es(e);let o;try{o=n(...i)}finally{Es(s),r._d&&wc(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function yo(n){const{type:e,vnode:t,proxy:r,withProxy:i,props:s,propsOptions:[o],slots:a,attrs:l,emit:c,render:d,renderCache:u,data:h,setupState:g,ctx:y,inheritAttrs:b}=n;let E,C;const w=Es(n);try{if(t.shapeFlag&4){const _=i||r;E=Yt(d.call(_,_,u,s,g,h,y)),C=l}else{const _=e;E=Yt(_.length>1?_(s,{attrs:l,slots:a,emit:c}):_(s,null)),C=e.props?l:bg(l)}}catch(_){di.length=0,$s(_,n,1),E=Tt(zn)}let R=E;if(C&&b!==!1){const _=Object.keys(C),{shapeFlag:P}=R;_.length&&P&7&&(o&&_.some(Ba)&&(C=vg(C,o)),R=yr(R,C))}return t.dirs&&(R=yr(R),R.dirs=R.dirs?R.dirs.concat(t.dirs):t.dirs),t.transition&&(R.transition=t.transition),E=R,Es(w),E}const bg=n=>{let e;for(const t in n)(t==="class"||t==="style"||Os(t))&&((e||(e={}))[t]=n[t]);return e},vg=(n,e)=>{const t={};for(const r in n)(!Ba(r)||!(r.slice(9)in e))&&(t[r]=n[r]);return t};function Eg(n,e,t){const{props:r,children:i,component:s}=n,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return r?yc(r,o,c):!!o;if(l&8){const d=e.dynamicProps;for(let u=0;u<d.length;u++){const h=d[u];if(o[h]!==r[h]&&!Hs(c,h))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?yc(r,o,c):!0:!!o;return!1}function yc(n,e,t){const r=Object.keys(e);if(r.length!==Object.keys(n).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(e[s]!==n[s]&&!Hs(t,s))return!0}return!1}function xg({vnode:n,parent:e},t){for(;e&&e.subTree===n;)(n=e.vnode).el=t,e=e.parent}const Sg=n=>n.__isSuspense;function Tg(n,e){e&&e.pendingBranch?De(n)?e.effects.push(...n):e.effects.push(n):mg(n)}const qi={};function li(n,e,t){return eh(n,e,t)}function eh(n,e,{immediate:t,deep:r,flush:i,onTrack:s,onTrigger:o}=Je){var a;const l=_u()===((a=gt)==null?void 0:a.scope)?gt:null;let c,d=!1,u=!1;if(it(n)?(c=()=>n.value,d=vs(n)):Rn(n)?(c=()=>n,r=!0):De(n)?(u=!0,d=n.some(_=>Rn(_)||vs(_)),c=()=>n.map(_=>{if(it(_))return _.value;if(Rn(_))return $n(_);if(Oe(_))return In(_,l,2)})):Oe(n)?e?c=()=>In(n,l,2):c=()=>{if(!(l&&l.isUnmounted))return h&&h(),Gt(n,l,3,[g])}:c=Ht,e&&r){const _=c;c=()=>$n(_())}let h,g=_=>{h=w.onStop=()=>{In(_,l,4)}},y;if(xi)if(g=Ht,e?t&&Gt(e,l,3,[c(),u?[]:void 0,g]):c(),i==="sync"){const _=yy();y=_.__watcherHandles||(_.__watcherHandles=[])}else return Ht;let b=u?new Array(n.length).fill(qi):qi;const E=()=>{if(w.active)if(e){const _=w.run();(r||d||(u?_.some((P,H)=>gi(P,b[H])):gi(_,b)))&&(h&&h(),Gt(e,l,3,[_,b===qi?void 0:u&&b[0]===qi?[]:b,g]),b=_)}else w.run()};E.allowRecurse=!!e;let C;i==="sync"?C=E:i==="post"?C=()=>xt(E,l&&l.suspense):(E.pre=!0,l&&(E.id=l.uid),C=()=>Qa(E));const w=new Ha(c,C);e?t?E():b=w.run():i==="post"?xt(w.run.bind(w),l&&l.suspense):w.run();const R=()=>{w.stop(),l&&l.scope&&Oa(l.scope.effects,w)};return y&&y.push(R),R}function Cg(n,e,t){const r=this.proxy,i=dt(n)?n.includes(".")?th(r,n):()=>r[n]:n.bind(r,r);let s;Oe(e)?s=e:(s=e.handler,t=e);const o=gt;Ar(this);const a=eh(i,s.bind(r),t);return o?Ar(o):jn(),a}function th(n,e){const t=e.split(".");return()=>{let r=n;for(let i=0;i<t.length&&r;i++)r=r[t[i]];return r}}function $n(n,e){if(!et(n)||n.__v_skip||(e=e||new Set,e.has(n)))return n;if(e.add(n),it(n))$n(n.value,e);else if(De(n))for(let t=0;t<n.length;t++)$n(n[t],e);else if(xu(n)||ur(n))n.forEach(t=>{$n(t,e)});else if(Cu(n))for(const t in n)$n(n[t],e);return n}function QS(n,e){const t=Dt;if(t===null)return n;const r=zs(t)||t.proxy,i=n.dirs||(n.dirs=[]);for(let s=0;s<e.length;s++){let[o,a,l,c=Je]=e[s];o&&(Oe(o)&&(o={mounted:o,updated:o}),o.deep&&$n(a),i.push({dir:o,instance:r,value:a,oldValue:void 0,arg:l,modifiers:c}))}return n}function Pn(n,e,t,r){const i=n.dirs,s=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];s&&(a.oldValue=s[o].value);let l=a.dir[r];l&&(kr(),Gt(l,t,8,[n.el,a,n,e]),Lr())}}function Xa(n,e){return Oe(n)?(()=>ft({name:n.name},e,{setup:n}))():n}const is=n=>!!n.type.__asyncLoader,nh=n=>n.type.__isKeepAlive;function wg(n,e){rh(n,"a",e)}function kg(n,e){rh(n,"da",e)}function rh(n,e,t=gt){const r=n.__wdc||(n.__wdc=()=>{let i=t;for(;i;){if(i.isDeactivated)return;i=i.parent}return n()});if(Ks(e,r,t),t){let i=t.parent;for(;i&&i.parent;)nh(i.parent.vnode)&&Lg(r,e,t,i),i=i.parent}}function Lg(n,e,t,r){const i=Ks(e,n,r,!0);ih(()=>{Oa(r[e],i)},t)}function Ks(n,e,t=gt,r=!1){if(t){const i=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...o)=>{if(t.isUnmounted)return;kr(),Ar(t);const a=Gt(e,t,n,o);return jn(),Lr(),a});return r?i.unshift(s):i.push(s),s}}const gn=n=>(e,t=gt)=>(!xi||n==="sp")&&Ks(n,(...r)=>e(...r),t),Rg=gn("bm"),Ig=gn("m"),_g=gn("bu"),Dg=gn("u"),Pg=gn("bum"),ih=gn("um"),Bg=gn("sp"),Og=gn("rtg"),Fg=gn("rtc");function Mg(n,e=gt){Ks("ec",n,e)}const Ng=Symbol.for("v-ndc");function XS(n,e,t,r){let i;const s=t&&t[r];if(De(n)||dt(n)){i=new Array(n.length);for(let o=0,a=n.length;o<a;o++)i[o]=e(n[o],o,void 0,s&&s[o])}else if(typeof n=="number"){i=new Array(n);for(let o=0;o<n;o++)i[o]=e(o+1,o,void 0,s&&s[o])}else if(et(n))if(n[Symbol.iterator])i=Array.from(n,(o,a)=>e(o,a,void 0,s&&s[a]));else{const o=Object.keys(n);i=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];i[a]=e(n[c],c,a,s&&s[a])}}else i=[];return t&&(t[r]=i),i}const ta=n=>n?Ah(n)?zs(n)||n.proxy:ta(n.parent):null,ci=ft(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>ta(n.parent),$root:n=>ta(n.root),$emit:n=>n.emit,$options:n=>Ja(n),$forceUpdate:n=>n.f||(n.f=()=>Qa(n.update)),$nextTick:n=>n.n||(n.n=Ya.bind(n.proxy)),$watch:n=>Cg.bind(n)}),Ao=(n,e)=>n!==Je&&!n.__isScriptSetup&&He(n,e),Ug={get({_:n},e){const{ctx:t,setupState:r,data:i,props:s,accessCache:o,type:a,appContext:l}=n;let c;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return r[e];case 2:return i[e];case 4:return t[e];case 3:return s[e]}else{if(Ao(r,e))return o[e]=1,r[e];if(i!==Je&&He(i,e))return o[e]=2,i[e];if((c=n.propsOptions[0])&&He(c,e))return o[e]=3,s[e];if(t!==Je&&He(t,e))return o[e]=4,t[e];na&&(o[e]=0)}}const d=ci[e];let u,h;if(d)return e==="$attrs"&&Ct(n,"get",e),d(n);if((u=a.__cssModules)&&(u=u[e]))return u;if(t!==Je&&He(t,e))return o[e]=4,t[e];if(h=l.config.globalProperties,He(h,e))return h[e]},set({_:n},e,t){const{data:r,setupState:i,ctx:s}=n;return Ao(i,e)?(i[e]=t,!0):r!==Je&&He(r,e)?(r[e]=t,!0):He(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:r,appContext:i,propsOptions:s}},o){let a;return!!t[o]||n!==Je&&He(n,o)||Ao(e,o)||(a=s[0])&&He(a,o)||He(r,o)||He(ci,o)||He(i.config.globalProperties,o)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:He(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function Ac(n){return De(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let na=!0;function $g(n){const e=Ja(n),t=n.proxy,r=n.ctx;na=!1,e.beforeCreate&&bc(e.beforeCreate,n,"bc");const{data:i,computed:s,methods:o,watch:a,provide:l,inject:c,created:d,beforeMount:u,mounted:h,beforeUpdate:g,updated:y,activated:b,deactivated:E,beforeDestroy:C,beforeUnmount:w,destroyed:R,unmounted:_,render:P,renderTracked:H,renderTriggered:U,errorCaptured:j,serverPrefetch:Q,expose:F,inheritAttrs:Y,components:Ae,directives:te,filters:Se}=e;if(c&&Hg(c,r,null),o)for(const ye in o){const me=o[ye];Oe(me)&&(r[ye]=me.bind(t))}if(i){const ye=i.call(t,t);et(ye)&&(n.data=Li(ye))}if(na=!0,s)for(const ye in s){const me=s[ye],z=Oe(me)?me.bind(t,t):Oe(me.get)?me.get.bind(t,t):Ht,ae=!Oe(me)&&Oe(me.set)?me.set.bind(t):Ht,Re=_t({get:z,set:ae});Object.defineProperty(r,ye,{enumerable:!0,configurable:!0,get:()=>Re.value,set:xe=>Re.value=xe})}if(a)for(const ye in a)sh(a[ye],r,t,ye);if(l){const ye=Oe(l)?l.call(t):l;Reflect.ownKeys(ye).forEach(me=>{ss(me,ye[me])})}d&&bc(d,n,"c");function ne(ye,me){De(me)?me.forEach(z=>ye(z.bind(t))):me&&ye(me.bind(t))}if(ne(Rg,u),ne(Ig,h),ne(_g,g),ne(Dg,y),ne(wg,b),ne(kg,E),ne(Mg,j),ne(Fg,H),ne(Og,U),ne(Pg,w),ne(ih,_),ne(Bg,Q),De(F))if(F.length){const ye=n.exposed||(n.exposed={});F.forEach(me=>{Object.defineProperty(ye,me,{get:()=>t[me],set:z=>t[me]=z})})}else n.exposed||(n.exposed={});P&&n.render===Ht&&(n.render=P),Y!=null&&(n.inheritAttrs=Y),Ae&&(n.components=Ae),te&&(n.directives=te)}function Hg(n,e,t=Ht){De(n)&&(n=ra(n));for(const r in n){const i=n[r];let s;et(i)?"default"in i?s=Kt(i.from||r,i.default,!0):s=Kt(i.from||r):s=Kt(i),it(s)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[r]=s}}function bc(n,e,t){Gt(De(n)?n.map(r=>r.bind(e.proxy)):n.bind(e.proxy),e,t)}function sh(n,e,t,r){const i=r.includes(".")?th(t,r):()=>t[r];if(dt(n)){const s=e[n];Oe(s)&&li(i,s)}else if(Oe(n))li(i,n.bind(t));else if(et(n))if(De(n))n.forEach(s=>sh(s,e,t,r));else{const s=Oe(n.handler)?n.handler.bind(t):e[n.handler];Oe(s)&&li(i,s,n)}}function Ja(n){const e=n.type,{mixins:t,extends:r}=e,{mixins:i,optionsCache:s,config:{optionMergeStrategies:o}}=n.appContext,a=s.get(e);let l;return a?l=a:!i.length&&!t&&!r?l=e:(l={},i.length&&i.forEach(c=>xs(l,c,o,!0)),xs(l,e,o)),et(e)&&s.set(e,l),l}function xs(n,e,t,r=!1){const{mixins:i,extends:s}=e;s&&xs(n,s,t,!0),i&&i.forEach(o=>xs(n,o,t,!0));for(const o in e)if(!(r&&o==="expose")){const a=Gg[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const Gg={data:vc,props:Ec,emits:Ec,methods:ai,computed:ai,beforeCreate:vt,created:vt,beforeMount:vt,mounted:vt,beforeUpdate:vt,updated:vt,beforeDestroy:vt,beforeUnmount:vt,destroyed:vt,unmounted:vt,activated:vt,deactivated:vt,errorCaptured:vt,serverPrefetch:vt,components:ai,directives:ai,watch:jg,provide:vc,inject:Kg};function vc(n,e){return e?n?function(){return ft(Oe(n)?n.call(this,this):n,Oe(e)?e.call(this,this):e)}:e:n}function Kg(n,e){return ai(ra(n),ra(e))}function ra(n){if(De(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function vt(n,e){return n?[...new Set([].concat(n,e))]:e}function ai(n,e){return n?ft(Object.create(null),n,e):e}function Ec(n,e){return n?De(n)&&De(e)?[...new Set([...n,...e])]:ft(Object.create(null),Ac(n),Ac(e??{})):e}function jg(n,e){if(!n)return e;if(!e)return n;const t=ft(Object.create(null),n);for(const r in e)t[r]=vt(n[r],e[r]);return t}function oh(){return{app:null,config:{isNativeTag:ym,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let qg=0;function zg(n,e){return function(r,i=null){Oe(r)||(r=ft({},r)),i!=null&&!et(i)&&(i=null);const s=oh(),o=new Set;let a=!1;const l=s.app={_uid:qg++,_component:r,_props:i,_container:null,_context:s,_instance:null,version:Ay,get config(){return s.config},set config(c){},use(c,...d){return o.has(c)||(c&&Oe(c.install)?(o.add(c),c.install(l,...d)):Oe(c)&&(o.add(c),c(l,...d))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,d){return d?(s.components[c]=d,l):s.components[c]},directive(c,d){return d?(s.directives[c]=d,l):s.directives[c]},mount(c,d,u){if(!a){const h=Tt(r,i);return h.appContext=s,d&&e?e(h,c):n(h,c,u),a=!0,l._container=c,c.__vue_app__=l,zs(h.component)||h.component.proxy}},unmount(){a&&(n(null,l._container),delete l._container.__vue_app__)},provide(c,d){return s.provides[c]=d,l},runWithContext(c){vi=l;try{return c()}finally{vi=null}}};return l}}let vi=null;function ss(n,e){if(gt){let t=gt.provides;const r=gt.parent&&gt.parent.provides;r===t&&(t=gt.provides=Object.create(r)),t[n]=e}}function Kt(n,e,t=!1){const r=gt||Dt;if(r||vi){const i=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:vi._context.provides;if(i&&n in i)return i[n];if(arguments.length>1)return t&&Oe(e)?e.call(r&&r.proxy):e}}function Vg(){return!!(gt||Dt||vi)}function Wg(n,e,t,r=!1){const i={},s={};As(s,qs,1),n.propsDefaults=Object.create(null),ah(n,e,i,s);for(const o in n.propsOptions[0])o in i||(i[o]=void 0);t?n.props=r?i:Gu(i):n.type.props?n.props=i:n.props=s,n.attrs=s}function Yg(n,e,t,r){const{props:i,attrs:s,vnode:{patchFlag:o}}=n,a=Ge(i),[l]=n.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=n.vnode.dynamicProps;for(let u=0;u<d.length;u++){let h=d[u];if(Hs(n.emitsOptions,h))continue;const g=e[h];if(l)if(He(s,h))g!==s[h]&&(s[h]=g,c=!0);else{const y=mr(h);i[y]=ia(l,a,y,g,n,!1)}else g!==s[h]&&(s[h]=g,c=!0)}}}else{ah(n,e,i,s)&&(c=!0);let d;for(const u in a)(!e||!He(e,u)&&((d=wr(u))===u||!He(e,d)))&&(l?t&&(t[u]!==void 0||t[d]!==void 0)&&(i[u]=ia(l,a,u,void 0,n,!0)):delete i[u]);if(s!==a)for(const u in s)(!e||!He(e,u))&&(delete s[u],c=!0)}c&&mn(n,"set","$attrs")}function ah(n,e,t,r){const[i,s]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(ns(l))continue;const c=e[l];let d;i&&He(i,d=mr(l))?!s||!s.includes(d)?t[d]=c:(a||(a={}))[d]=c:Hs(n.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(s){const l=Ge(t),c=a||Je;for(let d=0;d<s.length;d++){const u=s[d];t[u]=ia(i,l,u,c[u],n,!He(c,u))}}return o}function ia(n,e,t,r,i,s){const o=n[t];if(o!=null){const a=He(o,"default");if(a&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Oe(l)){const{propsDefaults:c}=i;t in c?r=c[t]:(Ar(i),r=c[t]=l.call(null,e),jn())}else r=l}o[0]&&(s&&!a?r=!1:o[1]&&(r===""||r===wr(t))&&(r=!0))}return r}function lh(n,e,t=!1){const r=e.propsCache,i=r.get(n);if(i)return i;const s=n.props,o={},a=[];let l=!1;if(!Oe(n)){const d=u=>{l=!0;const[h,g]=lh(u,e,!0);ft(o,h),g&&a.push(...g)};!t&&e.mixins.length&&e.mixins.forEach(d),n.extends&&d(n.extends),n.mixins&&n.mixins.forEach(d)}if(!s&&!l)return et(n)&&r.set(n,dr),dr;if(De(s))for(let d=0;d<s.length;d++){const u=mr(s[d]);xc(u)&&(o[u]=Je)}else if(s)for(const d in s){const u=mr(d);if(xc(u)){const h=s[d],g=o[u]=De(h)||Oe(h)?{type:h}:ft({},h);if(g){const y=Cc(Boolean,g.type),b=Cc(String,g.type);g[0]=y>-1,g[1]=b<0||y<b,(y>-1||He(g,"default"))&&a.push(u)}}}const c=[o,a];return et(n)&&r.set(n,c),c}function xc(n){return n[0]!=="$"}function Sc(n){const e=n&&n.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:n===null?"null":""}function Tc(n,e){return Sc(n)===Sc(e)}function Cc(n,e){return De(e)?e.findIndex(t=>Tc(t,n)):Oe(e)&&Tc(e,n)?0:-1}const ch=n=>n[0]==="_"||n==="$stable",Za=n=>De(n)?n.map(Yt):[Yt(n)],Qg=(n,e,t)=>{if(e._n)return e;const r=Ag((...i)=>Za(e(...i)),t);return r._c=!1,r},dh=(n,e,t)=>{const r=n._ctx;for(const i in n){if(ch(i))continue;const s=n[i];if(Oe(s))e[i]=Qg(i,s,r);else if(s!=null){const o=Za(s);e[i]=()=>o}}},uh=(n,e)=>{const t=Za(e);n.slots.default=()=>t},Xg=(n,e)=>{if(n.vnode.shapeFlag&32){const t=e._;t?(n.slots=Ge(e),As(e,"_",t)):dh(e,n.slots={})}else n.slots={},e&&uh(n,e);As(n.slots,qs,1)},Jg=(n,e,t)=>{const{vnode:r,slots:i}=n;let s=!0,o=Je;if(r.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:(ft(i,e),!t&&a===1&&delete i._):(s=!e.$stable,dh(e,i)),o=e}else e&&(uh(n,e),o={default:1});if(s)for(const a in i)!ch(a)&&!(a in o)&&delete i[a]};function sa(n,e,t,r,i=!1){if(De(n)){n.forEach((h,g)=>sa(h,e&&(De(e)?e[g]:e),t,r,i));return}if(is(r)&&!i)return;const s=r.shapeFlag&4?zs(r.component)||r.component.proxy:r.el,o=i?null:s,{i:a,r:l}=n,c=e&&e.r,d=a.refs===Je?a.refs={}:a.refs,u=a.setupState;if(c!=null&&c!==l&&(dt(c)?(d[c]=null,He(u,c)&&(u[c]=null)):it(c)&&(c.value=null)),Oe(l))In(l,a,12,[o,d]);else{const h=dt(l),g=it(l);if(h||g){const y=()=>{if(n.f){const b=h?He(u,l)?u[l]:d[l]:l.value;i?De(b)&&Oa(b,s):De(b)?b.includes(s)||b.push(s):h?(d[l]=[s],He(u,l)&&(u[l]=d[l])):(l.value=[s],n.k&&(d[n.k]=l.value))}else h?(d[l]=o,He(u,l)&&(u[l]=o)):g&&(l.value=o,n.k&&(d[n.k]=o))};o?(y.id=-1,xt(y,t)):y()}}}const xt=Tg;function Zg(n){return ey(n)}function ey(n,e){const t=Qo();t.__VUE__=!0;const{insert:r,remove:i,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:d,parentNode:u,nextSibling:h,setScopeId:g=Ht,insertStaticContent:y}=n,b=(I,D,O,q=null,X=null,ee=null,he=!1,ie=null,le=!!D.dynamicChildren)=>{if(I===D)return;I&&!ti(I,D)&&(q=K(I),xe(I,X,ee,!0),I=null),D.patchFlag===-2&&(le=!1,D.dynamicChildren=null);const{type:Z,ref:Te,shapeFlag:ge}=D;switch(Z){case js:E(I,D,O,q);break;case zn:C(I,D,O,q);break;case os:I==null&&w(D,O,q,he);break;case fn:Ae(I,D,O,q,X,ee,he,ie,le);break;default:ge&1?P(I,D,O,q,X,ee,he,ie,le):ge&6?te(I,D,O,q,X,ee,he,ie,le):(ge&64||ge&128)&&Z.process(I,D,O,q,X,ee,he,ie,le,re)}Te!=null&&X&&sa(Te,I&&I.ref,ee,D||I,!D)},E=(I,D,O,q)=>{if(I==null)r(D.el=a(D.children),O,q);else{const X=D.el=I.el;D.children!==I.children&&c(X,D.children)}},C=(I,D,O,q)=>{I==null?r(D.el=l(D.children||""),O,q):D.el=I.el},w=(I,D,O,q)=>{[I.el,I.anchor]=y(I.children,D,O,q,I.el,I.anchor)},R=({el:I,anchor:D},O,q)=>{let X;for(;I&&I!==D;)X=h(I),r(I,O,q),I=X;r(D,O,q)},_=({el:I,anchor:D})=>{let O;for(;I&&I!==D;)O=h(I),i(I),I=O;i(D)},P=(I,D,O,q,X,ee,he,ie,le)=>{he=he||D.type==="svg",I==null?H(D,O,q,X,ee,he,ie,le):Q(I,D,X,ee,he,ie,le)},H=(I,D,O,q,X,ee,he,ie)=>{let le,Z;const{type:Te,props:ge,shapeFlag:Ce,transition:Ie,dirs:Me}=I;if(le=I.el=o(I.type,ee,ge&&ge.is,ge),Ce&8?d(le,I.children):Ce&16&&j(I.children,le,null,q,X,ee&&Te!=="foreignObject",he,ie),Me&&Pn(I,null,q,"created"),U(le,I,I.scopeId,he,q),ge){for(const qe in ge)qe!=="value"&&!ns(qe)&&s(le,qe,null,ge[qe],ee,I.children,q,X,Pe);"value"in ge&&s(le,"value",null,ge.value),(Z=ge.onVnodeBeforeMount)&&zt(Z,q,I)}Me&&Pn(I,null,q,"beforeMount");const We=(!X||X&&!X.pendingBranch)&&Ie&&!Ie.persisted;We&&Ie.beforeEnter(le),r(le,D,O),((Z=ge&&ge.onVnodeMounted)||We||Me)&&xt(()=>{Z&&zt(Z,q,I),We&&Ie.enter(le),Me&&Pn(I,null,q,"mounted")},X)},U=(I,D,O,q,X)=>{if(O&&g(I,O),q)for(let ee=0;ee<q.length;ee++)g(I,q[ee]);if(X){let ee=X.subTree;if(D===ee){const he=X.vnode;U(I,he,he.scopeId,he.slotScopeIds,X.parent)}}},j=(I,D,O,q,X,ee,he,ie,le=0)=>{for(let Z=le;Z<I.length;Z++){const Te=I[Z]=ie?Cn(I[Z]):Yt(I[Z]);b(null,Te,D,O,q,X,ee,he,ie)}},Q=(I,D,O,q,X,ee,he)=>{const ie=D.el=I.el;let{patchFlag:le,dynamicChildren:Z,dirs:Te}=D;le|=I.patchFlag&16;const ge=I.props||Je,Ce=D.props||Je;let Ie;O&&Bn(O,!1),(Ie=Ce.onVnodeBeforeUpdate)&&zt(Ie,O,D,I),Te&&Pn(D,I,O,"beforeUpdate"),O&&Bn(O,!0);const Me=X&&D.type!=="foreignObject";if(Z?F(I.dynamicChildren,Z,ie,O,q,Me,ee):he||me(I,D,ie,null,O,q,Me,ee,!1),le>0){if(le&16)Y(ie,D,ge,Ce,O,q,X);else if(le&2&&ge.class!==Ce.class&&s(ie,"class",null,Ce.class,X),le&4&&s(ie,"style",ge.style,Ce.style,X),le&8){const We=D.dynamicProps;for(let qe=0;qe<We.length;qe++){const tt=We[qe],wt=ge[tt],sn=Ce[tt];(sn!==wt||tt==="value")&&s(ie,tt,wt,sn,X,I.children,O,q,Pe)}}le&1&&I.children!==D.children&&d(ie,D.children)}else!he&&Z==null&&Y(ie,D,ge,Ce,O,q,X);((Ie=Ce.onVnodeUpdated)||Te)&&xt(()=>{Ie&&zt(Ie,O,D,I),Te&&Pn(D,I,O,"updated")},q)},F=(I,D,O,q,X,ee,he)=>{for(let ie=0;ie<D.length;ie++){const le=I[ie],Z=D[ie],Te=le.el&&(le.type===fn||!ti(le,Z)||le.shapeFlag&70)?u(le.el):O;b(le,Z,Te,null,q,X,ee,he,!0)}},Y=(I,D,O,q,X,ee,he)=>{if(O!==q){if(O!==Je)for(const ie in O)!ns(ie)&&!(ie in q)&&s(I,ie,O[ie],null,he,D.children,X,ee,Pe);for(const ie in q){if(ns(ie))continue;const le=q[ie],Z=O[ie];le!==Z&&ie!=="value"&&s(I,ie,Z,le,he,D.children,X,ee,Pe)}"value"in q&&s(I,"value",O.value,q.value)}},Ae=(I,D,O,q,X,ee,he,ie,le)=>{const Z=D.el=I?I.el:a(""),Te=D.anchor=I?I.anchor:a("");let{patchFlag:ge,dynamicChildren:Ce,slotScopeIds:Ie}=D;Ie&&(ie=ie?ie.concat(Ie):Ie),I==null?(r(Z,O,q),r(Te,O,q),j(D.children,O,Te,X,ee,he,ie,le)):ge>0&&ge&64&&Ce&&I.dynamicChildren?(F(I.dynamicChildren,Ce,O,X,ee,he,ie),(D.key!=null||X&&D===X.subTree)&&hh(I,D,!0)):me(I,D,O,Te,X,ee,he,ie,le)},te=(I,D,O,q,X,ee,he,ie,le)=>{D.slotScopeIds=ie,I==null?D.shapeFlag&512?X.ctx.activate(D,O,q,he,le):Se(D,O,q,X,ee,he,le):ve(I,D,le)},Se=(I,D,O,q,X,ee,he)=>{const ie=I.component=dy(I,q,X);if(nh(I)&&(ie.ctx.renderer=re),uy(ie),ie.asyncDep){if(X&&X.registerDep(ie,ne),!I.el){const le=ie.subTree=Tt(zn);C(null,le,D,O)}return}ne(ie,I,D,O,X,ee,he)},ve=(I,D,O)=>{const q=D.component=I.component;if(Eg(I,D,O))if(q.asyncDep&&!q.asyncResolved){ye(q,D,O);return}else q.next=D,pg(q.update),q.update();else D.el=I.el,q.vnode=D},ne=(I,D,O,q,X,ee,he)=>{const ie=()=>{if(I.isMounted){let{next:Te,bu:ge,u:Ce,parent:Ie,vnode:Me}=I,We=Te,qe;Bn(I,!1),Te?(Te.el=Me.el,ye(I,Te,he)):Te=Me,ge&&rs(ge),(qe=Te.props&&Te.props.onVnodeBeforeUpdate)&&zt(qe,Ie,Te,Me),Bn(I,!0);const tt=yo(I),wt=I.subTree;I.subTree=tt,b(wt,tt,u(wt.el),K(wt),I,X,ee),Te.el=tt.el,We===null&&xg(I,tt.el),Ce&&xt(Ce,X),(qe=Te.props&&Te.props.onVnodeUpdated)&&xt(()=>zt(qe,Ie,Te,Me),X)}else{let Te;const{el:ge,props:Ce}=D,{bm:Ie,m:Me,parent:We}=I,qe=is(D);if(Bn(I,!1),Ie&&rs(Ie),!qe&&(Te=Ce&&Ce.onVnodeBeforeMount)&&zt(Te,We,D),Bn(I,!0),ge&&Ke){const tt=()=>{I.subTree=yo(I),Ke(ge,I.subTree,I,X,null)};qe?D.type.__asyncLoader().then(()=>!I.isUnmounted&&tt()):tt()}else{const tt=I.subTree=yo(I);b(null,tt,O,q,I,X,ee),D.el=tt.el}if(Me&&xt(Me,X),!qe&&(Te=Ce&&Ce.onVnodeMounted)){const tt=D;xt(()=>zt(Te,We,tt),X)}(D.shapeFlag&256||We&&is(We.vnode)&&We.vnode.shapeFlag&256)&&I.a&&xt(I.a,X),I.isMounted=!0,D=O=q=null}},le=I.effect=new Ha(ie,()=>Qa(Z),I.scope),Z=I.update=()=>le.run();Z.id=I.uid,Bn(I,!0),Z()},ye=(I,D,O)=>{D.component=I;const q=I.vnode.props;I.vnode=D,I.next=null,Yg(I,D.props,q,O),Jg(I,D.children,O),kr(),gc(),Lr()},me=(I,D,O,q,X,ee,he,ie,le=!1)=>{const Z=I&&I.children,Te=I?I.shapeFlag:0,ge=D.children,{patchFlag:Ce,shapeFlag:Ie}=D;if(Ce>0){if(Ce&128){ae(Z,ge,O,q,X,ee,he,ie,le);return}else if(Ce&256){z(Z,ge,O,q,X,ee,he,ie,le);return}}Ie&8?(Te&16&&Pe(Z,X,ee),ge!==Z&&d(O,ge)):Te&16?Ie&16?ae(Z,ge,O,q,X,ee,he,ie,le):Pe(Z,X,ee,!0):(Te&8&&d(O,""),Ie&16&&j(ge,O,q,X,ee,he,ie,le))},z=(I,D,O,q,X,ee,he,ie,le)=>{I=I||dr,D=D||dr;const Z=I.length,Te=D.length,ge=Math.min(Z,Te);let Ce;for(Ce=0;Ce<ge;Ce++){const Ie=D[Ce]=le?Cn(D[Ce]):Yt(D[Ce]);b(I[Ce],Ie,O,null,X,ee,he,ie,le)}Z>Te?Pe(I,X,ee,!0,!1,ge):j(D,O,q,X,ee,he,ie,le,ge)},ae=(I,D,O,q,X,ee,he,ie,le)=>{let Z=0;const Te=D.length;let ge=I.length-1,Ce=Te-1;for(;Z<=ge&&Z<=Ce;){const Ie=I[Z],Me=D[Z]=le?Cn(D[Z]):Yt(D[Z]);if(ti(Ie,Me))b(Ie,Me,O,null,X,ee,he,ie,le);else break;Z++}for(;Z<=ge&&Z<=Ce;){const Ie=I[ge],Me=D[Ce]=le?Cn(D[Ce]):Yt(D[Ce]);if(ti(Ie,Me))b(Ie,Me,O,null,X,ee,he,ie,le);else break;ge--,Ce--}if(Z>ge){if(Z<=Ce){const Ie=Ce+1,Me=Ie<Te?D[Ie].el:q;for(;Z<=Ce;)b(null,D[Z]=le?Cn(D[Z]):Yt(D[Z]),O,Me,X,ee,he,ie,le),Z++}}else if(Z>Ce)for(;Z<=ge;)xe(I[Z],X,ee,!0),Z++;else{const Ie=Z,Me=Z,We=new Map;for(Z=Me;Z<=Ce;Z++){const yt=D[Z]=le?Cn(D[Z]):Yt(D[Z]);yt.key!=null&&We.set(yt.key,Z)}let qe,tt=0;const wt=Ce-Me+1;let sn=!1,V=0;const Lt=new Array(wt);for(Z=0;Z<wt;Z++)Lt[Z]=0;for(Z=Ie;Z<=ge;Z++){const yt=I[Z];if(tt>=wt){xe(yt,X,ee,!0);continue}let Ne;if(yt.key!=null)Ne=We.get(yt.key);else for(qe=Me;qe<=Ce;qe++)if(Lt[qe-Me]===0&&ti(yt,D[qe])){Ne=qe;break}Ne===void 0?xe(yt,X,ee,!0):(Lt[Ne-Me]=Z+1,Ne>=V?V=Ne:sn=!0,b(yt,D[Ne],O,null,X,ee,he,ie,le),tt++)}const _r=sn?ty(Lt):dr;for(qe=_r.length-1,Z=wt-1;Z>=0;Z--){const yt=Me+Z,Ne=D[yt],_i=yt+1<Te?D[yt+1].el:q;Lt[Z]===0?b(null,Ne,O,_i,X,ee,he,ie,le):sn&&(qe<0||Z!==_r[qe]?Re(Ne,O,_i,2):qe--)}}},Re=(I,D,O,q,X=null)=>{const{el:ee,type:he,transition:ie,children:le,shapeFlag:Z}=I;if(Z&6){Re(I.component.subTree,D,O,q);return}if(Z&128){I.suspense.move(D,O,q);return}if(Z&64){he.move(I,D,O,re);return}if(he===fn){r(ee,D,O);for(let ge=0;ge<le.length;ge++)Re(le[ge],D,O,q);r(I.anchor,D,O);return}if(he===os){R(I,D,O);return}if(q!==2&&Z&1&&ie)if(q===0)ie.beforeEnter(ee),r(ee,D,O),xt(()=>ie.enter(ee),X);else{const{leave:ge,delayLeave:Ce,afterLeave:Ie}=ie,Me=()=>r(ee,D,O),We=()=>{ge(ee,()=>{Me(),Ie&&Ie()})};Ce?Ce(ee,Me,We):We()}else r(ee,D,O)},xe=(I,D,O,q=!1,X=!1)=>{const{type:ee,props:he,ref:ie,children:le,dynamicChildren:Z,shapeFlag:Te,patchFlag:ge,dirs:Ce}=I;if(ie!=null&&sa(ie,null,O,I,!0),Te&256){D.ctx.deactivate(I);return}const Ie=Te&1&&Ce,Me=!is(I);let We;if(Me&&(We=he&&he.onVnodeBeforeUnmount)&&zt(We,D,I),Te&6)Qe(I.component,O,q);else{if(Te&128){I.suspense.unmount(O,q);return}Ie&&Pn(I,null,D,"beforeUnmount"),Te&64?I.type.remove(I,D,O,X,re,q):Z&&(ee!==fn||ge>0&&ge&64)?Pe(Z,D,O,!1,!0):(ee===fn&&ge&384||!X&&Te&16)&&Pe(le,D,O),q&&Fe(I)}(Me&&(We=he&&he.onVnodeUnmounted)||Ie)&&xt(()=>{We&&zt(We,D,I),Ie&&Pn(I,null,D,"unmounted")},O)},Fe=I=>{const{type:D,el:O,anchor:q,transition:X}=I;if(D===fn){je(O,q);return}if(D===os){_(I);return}const ee=()=>{i(O),X&&!X.persisted&&X.afterLeave&&X.afterLeave()};if(I.shapeFlag&1&&X&&!X.persisted){const{leave:he,delayLeave:ie}=X,le=()=>he(O,ee);ie?ie(I.el,ee,le):le()}else ee()},je=(I,D)=>{let O;for(;I!==D;)O=h(I),i(I),I=O;i(D)},Qe=(I,D,O)=>{const{bum:q,scope:X,update:ee,subTree:he,um:ie}=I;q&&rs(q),X.stop(),ee&&(ee.active=!1,xe(he,I,D,O)),ie&&xt(ie,D),xt(()=>{I.isUnmounted=!0},D),D&&D.pendingBranch&&!D.isUnmounted&&I.asyncDep&&!I.asyncResolved&&I.suspenseId===D.pendingId&&(D.deps--,D.deps===0&&D.resolve())},Pe=(I,D,O,q=!1,X=!1,ee=0)=>{for(let he=ee;he<I.length;he++)xe(I[he],D,O,q,X)},K=I=>I.shapeFlag&6?K(I.component.subTree):I.shapeFlag&128?I.suspense.next():h(I.anchor||I.el),ce=(I,D,O)=>{I==null?D._vnode&&xe(D._vnode,null,null,!0):b(D._vnode||null,I,D,null,null,null,O),gc(),Xu(),D._vnode=I},re={p:b,um:xe,m:Re,r:Fe,mt:Se,mc:j,pc:me,pbc:F,n:K,o:n};let Ee,Ke;return e&&([Ee,Ke]=e(re)),{render:ce,hydrate:Ee,createApp:zg(ce,Ee)}}function Bn({effect:n,update:e},t){n.allowRecurse=e.allowRecurse=t}function hh(n,e,t=!1){const r=n.children,i=e.children;if(De(r)&&De(i))for(let s=0;s<r.length;s++){const o=r[s];let a=i[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[s]=Cn(i[s]),a.el=o.el),t||hh(o,a)),a.type===js&&(a.el=o.el)}}function ty(n){const e=n.slice(),t=[0];let r,i,s,o,a;const l=n.length;for(r=0;r<l;r++){const c=n[r];if(c!==0){if(i=t[t.length-1],n[i]<c){e[r]=i,t.push(r);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,n[t[a]]<c?s=a+1:o=a;c<n[t[s]]&&(s>0&&(e[r]=t[s-1]),t[s]=r)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}const ny=n=>n.__isTeleport,fn=Symbol.for("v-fgt"),js=Symbol.for("v-txt"),zn=Symbol.for("v-cmt"),os=Symbol.for("v-stc"),di=[];let $t=null;function fh(n=!1){di.push($t=n?null:[])}function ry(){di.pop(),$t=di[di.length-1]||null}let Ei=1;function wc(n){Ei+=n}function ph(n){return n.dynamicChildren=Ei>0?$t||dr:null,ry(),Ei>0&&$t&&$t.push(n),n}function JS(n,e,t,r,i,s){return ph(yh(n,e,t,r,i,s,!0))}function mh(n,e,t,r,i){return ph(Tt(n,e,t,r,i,!0))}function oa(n){return n?n.__v_isVNode===!0:!1}function ti(n,e){return n.type===e.type&&n.key===e.key}const qs="__vInternal",gh=({key:n})=>n??null,as=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?dt(n)||it(n)||Oe(n)?{i:Dt,r:n,k:e,f:!!t}:n:null);function yh(n,e=null,t=null,r=0,i=null,s=n===fn?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&gh(e),ref:e&&as(e),scopeId:Gs,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Dt};return a?(el(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=dt(t)?8:16),Ei>0&&!o&&$t&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&$t.push(l),l}const Tt=iy;function iy(n,e=null,t=null,r=0,i=null,s=!1){if((!n||n===Ng)&&(n=zn),oa(n)){const a=yr(n,e,!0);return t&&el(a,t),Ei>0&&!s&&$t&&(a.shapeFlag&6?$t[$t.indexOf(n)]=a:$t.push(a)),a.patchFlag|=-2,a}if(my(n)&&(n=n.__vccOpts),e){e=sy(e);let{class:a,style:l}=e;a&&!dt(a)&&(e.class=Ua(a)),et(l)&&(ju(l)&&!De(l)&&(l=ft({},l)),e.style=Na(l))}const o=dt(n)?1:Sg(n)?128:ny(n)?64:et(n)?4:Oe(n)?2:0;return yh(n,e,t,r,i,o,s,!0)}function sy(n){return n?ju(n)||qs in n?ft({},n):n:null}function yr(n,e,t=!1){const{props:r,ref:i,patchFlag:s,children:o}=n,a=e?ay(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:n.type,props:a,key:a&&gh(a),ref:e&&e.ref?t&&i?De(i)?i.concat(as(e)):[i,as(e)]:as(e):i,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:o,target:n.target,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==fn?s===-1?16:s|16:s,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:n.transition,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&yr(n.ssContent),ssFallback:n.ssFallback&&yr(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce}}function oy(n=" ",e=0){return Tt(js,null,n,e)}function ZS(n,e){const t=Tt(os,null,n);return t.staticCount=e,t}function eT(n="",e=!1){return e?(fh(),mh(zn,null,n)):Tt(zn,null,n)}function Yt(n){return n==null||typeof n=="boolean"?Tt(zn):De(n)?Tt(fn,null,n.slice()):typeof n=="object"?Cn(n):Tt(js,null,String(n))}function Cn(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:yr(n)}function el(n,e){let t=0;const{shapeFlag:r}=n;if(e==null)e=null;else if(De(e))t=16;else if(typeof e=="object")if(r&65){const i=e.default;i&&(i._c&&(i._d=!1),el(n,i()),i._c&&(i._d=!0));return}else{t=32;const i=e._;!i&&!(qs in e)?e._ctx=Dt:i===3&&Dt&&(Dt.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else Oe(e)?(e={default:e,_ctx:Dt},t=32):(e=String(e),r&64?(t=16,e=[oy(e)]):t=8);n.children=e,n.shapeFlag|=t}function ay(...n){const e={};for(let t=0;t<n.length;t++){const r=n[t];for(const i in r)if(i==="class")e.class!==r.class&&(e.class=Ua([e.class,r.class]));else if(i==="style")e.style=Na([e.style,r.style]);else if(Os(i)){const s=e[i],o=r[i];o&&s!==o&&!(De(s)&&s.includes(o))&&(e[i]=s?[].concat(s,o):o)}else i!==""&&(e[i]=r[i])}return e}function zt(n,e,t,r=null){Gt(n,e,7,[t,r])}const ly=oh();let cy=0;function dy(n,e,t){const r=n.type,i=(e?e.appContext:n.appContext)||ly,s={uid:cy++,vnode:n,type:r,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new Ru(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:lh(r,i),emitsOptions:Zu(r,i),emit:null,emitted:null,propsDefaults:Je,inheritAttrs:r.inheritAttrs,ctx:Je,data:Je,props:Je,attrs:Je,slots:Je,refs:Je,setupState:Je,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=yg.bind(null,s),n.ce&&n.ce(s),s}let gt=null,tl,Jn,kc="__VUE_INSTANCE_SETTERS__";(Jn=Qo()[kc])||(Jn=Qo()[kc]=[]),Jn.push(n=>gt=n),tl=n=>{Jn.length>1?Jn.forEach(e=>e(n)):Jn[0](n)};const Ar=n=>{tl(n),n.scope.on()},jn=()=>{gt&&gt.scope.off(),tl(null)};function Ah(n){return n.vnode.shapeFlag&4}let xi=!1;function uy(n,e=!1){xi=e;const{props:t,children:r}=n.vnode,i=Ah(n);Wg(n,t,i,e),Xg(n,r);const s=i?hy(n,e):void 0;return xi=!1,s}function hy(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=Us(new Proxy(n.ctx,Ug));const{setup:r}=t;if(r){const i=n.setupContext=r.length>1?py(n):null;Ar(n),kr();const s=In(r,n,0,[n.props,i]);if(Lr(),jn(),Su(s)){if(s.then(jn,jn),e)return s.then(o=>{Lc(n,o,e)}).catch(o=>{$s(o,n,0)});n.asyncDep=s}else Lc(n,s,e)}else bh(n,e)}function Lc(n,e,t){Oe(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:et(e)&&(n.setupState=Wu(e)),bh(n,t)}let Rc;function bh(n,e,t){const r=n.type;if(!n.render){if(!e&&Rc&&!r.render){const i=r.template||Ja(n).template;if(i){const{isCustomElement:s,compilerOptions:o}=n.appContext.config,{delimiters:a,compilerOptions:l}=r,c=ft(ft({isCustomElement:s,delimiters:a},o),l);r.render=Rc(i,c)}}n.render=r.render||Ht}Ar(n),kr(),$g(n),Lr(),jn()}function fy(n){return n.attrsProxy||(n.attrsProxy=new Proxy(n.attrs,{get(e,t){return Ct(n,"get","$attrs"),e[t]}}))}function py(n){const e=t=>{n.exposed=t||{}};return{get attrs(){return fy(n)},slots:n.slots,emit:n.emit,expose:e}}function zs(n){if(n.exposed)return n.exposeProxy||(n.exposeProxy=new Proxy(Wu(Us(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in ci)return ci[t](n)},has(e,t){return t in e||t in ci}}))}function my(n){return Oe(n)&&"__vccOpts"in n}const _t=(n,e)=>ug(n,e,xi);function vh(n,e,t){const r=arguments.length;return r===2?et(e)&&!De(e)?oa(e)?Tt(n,null,[e]):Tt(n,e):Tt(n,null,e):(r>3?t=Array.prototype.slice.call(arguments,2):r===3&&oa(t)&&(t=[t]),Tt(n,e,t))}const gy=Symbol.for("v-scx"),yy=()=>Kt(gy),Ay="3.3.4",by="http://www.w3.org/2000/svg",Un=typeof document<"u"?document:null,Ic=Un&&Un.createElement("template"),vy={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,r)=>{const i=e?Un.createElementNS(by,n):Un.createElement(n,t?{is:t}:void 0);return n==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:n=>Un.createTextNode(n),createComment:n=>Un.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Un.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,r,i,s){const o=t?t.previousSibling:e.lastChild;if(i&&(i===s||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),t),!(i===s||!(i=i.nextSibling)););else{Ic.innerHTML=r?`<svg>${n}</svg>`:n;const a=Ic.content;if(r){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}};function Ey(n,e,t){const r=n._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}function xy(n,e,t){const r=n.style,i=dt(t);if(t&&!i){if(e&&!dt(e))for(const s in e)t[s]==null&&aa(r,s,"");for(const s in t)aa(r,s,t[s])}else{const s=r.display;i?e!==t&&(r.cssText=t):e&&n.removeAttribute("style"),"_vod"in n&&(r.display=s)}}const _c=/\s*!important$/;function aa(n,e,t){if(De(t))t.forEach(r=>aa(n,e,r));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const r=Sy(n,e);_c.test(t)?n.setProperty(wr(r),t.replace(_c,""),"important"):n[r]=t}}const Dc=["Webkit","Moz","ms"],bo={};function Sy(n,e){const t=bo[e];if(t)return t;let r=mr(e);if(r!=="filter"&&r in n)return bo[e]=r;r=wu(r);for(let i=0;i<Dc.length;i++){const s=Dc[i]+r;if(s in n)return bo[e]=s}return e}const Pc="http://www.w3.org/1999/xlink";function Ty(n,e,t,r,i){if(r&&e.startsWith("xlink:"))t==null?n.removeAttributeNS(Pc,e.slice(6,e.length)):n.setAttributeNS(Pc,e,t);else{const s=Lm(e);t==null||s&&!ku(t)?n.removeAttribute(e):n.setAttribute(e,s?"":t)}}function Cy(n,e,t,r,i,s,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,i,s),n[e]=t??"";return}const a=n.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){n._value=t;const c=a==="OPTION"?n.getAttribute("value"):n.value,d=t??"";c!==d&&(n.value=d),t==null&&n.removeAttribute(e);return}let l=!1;if(t===""||t==null){const c=typeof n[e];c==="boolean"?t=ku(t):t==null&&c==="string"?(t="",l=!0):c==="number"&&(t=0,l=!0)}try{n[e]=t}catch{}l&&n.removeAttribute(e)}function or(n,e,t,r){n.addEventListener(e,t,r)}function wy(n,e,t,r){n.removeEventListener(e,t,r)}function ky(n,e,t,r,i=null){const s=n._vei||(n._vei={}),o=s[e];if(r&&o)o.value=r;else{const[a,l]=Ly(e);if(r){const c=s[e]=_y(r,i);or(n,a,c,l)}else o&&(wy(n,a,o,l),s[e]=void 0)}}const Bc=/(?:Once|Passive|Capture)$/;function Ly(n){let e;if(Bc.test(n)){e={};let r;for(;r=n.match(Bc);)n=n.slice(0,n.length-r[0].length),e[r[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):wr(n.slice(2)),e]}let vo=0;const Ry=Promise.resolve(),Iy=()=>vo||(Ry.then(()=>vo=0),vo=Date.now());function _y(n,e){const t=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=t.attached)return;Gt(Dy(r,t.value),e,5,[r])};return t.value=n,t.attached=Iy(),t}function Dy(n,e){if(De(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(r=>i=>!i._stopped&&r&&r(i))}else return e}const Oc=/^on[a-z]/,Py=(n,e,t,r,i=!1,s,o,a,l)=>{e==="class"?Ey(n,r,i):e==="style"?xy(n,t,r):Os(e)?Ba(e)||ky(n,e,t,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):By(n,e,r,i))?Cy(n,e,r,s,o,a,l):(e==="true-value"?n._trueValue=r:e==="false-value"&&(n._falseValue=r),Ty(n,e,r,i))};function By(n,e,t,r){return r?!!(e==="innerHTML"||e==="textContent"||e in n&&Oc.test(e)&&Oe(t)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA"||Oc.test(e)&&dt(t)?!1:e in n}const Fc=n=>{const e=n.props["onUpdate:modelValue"]||!1;return De(e)?t=>rs(e,t):e};function Oy(n){n.target.composing=!0}function Mc(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const tT={created(n,{modifiers:{lazy:e,trim:t,number:r}},i){n._assign=Fc(i);const s=r||i.props&&i.props.type==="number";or(n,e?"change":"input",o=>{if(o.target.composing)return;let a=n.value;t&&(a=a.trim()),s&&(a=Yo(a)),n._assign(a)}),t&&or(n,"change",()=>{n.value=n.value.trim()}),e||(or(n,"compositionstart",Oy),or(n,"compositionend",Mc),or(n,"change",Mc))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,modifiers:{lazy:t,trim:r,number:i}},s){if(n._assign=Fc(s),n.composing||document.activeElement===n&&n.type!=="range"&&(t||r&&n.value.trim()===e||(i||n.type==="number")&&Yo(n.value)===e))return;const o=e??"";n.value!==o&&(n.value=o)}},Fy=ft({patchProp:Py},vy);let Nc;function My(){return Nc||(Nc=Zg(Fy))}const Ny=(...n)=>{const e=My().createApp(...n),{mount:t}=e;return e.mount=r=>{const i=Uy(r);if(!i)return;const s=e._component;!Oe(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.innerHTML="";const o=t(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function Uy(n){return dt(n)?document.querySelector(n):n}var $y=!1;/*!
 * pinia v2.1.6
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let Eh;const Vs=n=>Eh=n,xh=Symbol();function la(n){return n&&typeof n=="object"&&Object.prototype.toString.call(n)==="[object Object]"&&typeof n.toJSON!="function"}var ui;(function(n){n.direct="direct",n.patchObject="patch object",n.patchFunction="patch function"})(ui||(ui={}));function Hy(){const n=Iu(!0),e=n.run(()=>Va({}));let t=[],r=[];const i=Us({install(s){Vs(i),i._a=s,s.provide(xh,i),s.config.globalProperties.$pinia=i,r.forEach(o=>t.push(o)),r=[]},use(s){return!this._a&&!$y?r.push(s):t.push(s),this},_p:t,_a:null,_e:n,_s:new Map,state:e});return i}const Sh=()=>{};function Uc(n,e,t,r=Sh){n.push(e);const i=()=>{const s=n.indexOf(e);s>-1&&(n.splice(s,1),r())};return!t&&_u()&&Im(i),i}function Zn(n,...e){n.slice().forEach(t=>{t(...e)})}const Gy=n=>n();function ca(n,e){n instanceof Map&&e instanceof Map&&e.forEach((t,r)=>n.set(r,t)),n instanceof Set&&e instanceof Set&&e.forEach(n.add,n);for(const t in e){if(!e.hasOwnProperty(t))continue;const r=e[t],i=n[t];la(i)&&la(r)&&n.hasOwnProperty(t)&&!it(r)&&!Rn(r)?n[t]=ca(i,r):n[t]=r}return n}const Ky=Symbol();function jy(n){return!la(n)||!n.hasOwnProperty(Ky)}const{assign:Tn}=Object;function qy(n){return!!(it(n)&&n.effect)}function zy(n,e,t,r){const{state:i,actions:s,getters:o}=e,a=t.state.value[n];let l;function c(){a||(t.state.value[n]=i?i():{});const d=ag(t.state.value[n]);return Tn(d,s,Object.keys(o||{}).reduce((u,h)=>(u[h]=Us(_t(()=>{Vs(t);const g=t._s.get(n);return o[h].call(g,g)})),u),{}))}return l=Th(n,c,e,t,r,!0),l}function Th(n,e,t={},r,i,s){let o;const a=Tn({actions:{}},t),l={deep:!0};let c,d,u=[],h=[],g;const y=r.state.value[n];!s&&!y&&(r.state.value[n]={}),Va({});let b;function E(j){let Q;c=d=!1,typeof j=="function"?(j(r.state.value[n]),Q={type:ui.patchFunction,storeId:n,events:g}):(ca(r.state.value[n],j),Q={type:ui.patchObject,payload:j,storeId:n,events:g});const F=b=Symbol();Ya().then(()=>{b===F&&(c=!0)}),d=!0,Zn(u,Q,r.state.value[n])}const C=s?function(){const{state:Q}=t,F=Q?Q():{};this.$patch(Y=>{Tn(Y,F)})}:Sh;function w(){o.stop(),u=[],h=[],r._s.delete(n)}function R(j,Q){return function(){Vs(r);const F=Array.from(arguments),Y=[],Ae=[];function te(ne){Y.push(ne)}function Se(ne){Ae.push(ne)}Zn(h,{args:F,name:j,store:P,after:te,onError:Se});let ve;try{ve=Q.apply(this&&this.$id===n?this:P,F)}catch(ne){throw Zn(Ae,ne),ne}return ve instanceof Promise?ve.then(ne=>(Zn(Y,ne),ne)).catch(ne=>(Zn(Ae,ne),Promise.reject(ne))):(Zn(Y,ve),ve)}}const _={_p:r,$id:n,$onAction:Uc.bind(null,h),$patch:E,$reset:C,$subscribe(j,Q={}){const F=Uc(u,j,Q.detached,()=>Y()),Y=o.run(()=>li(()=>r.state.value[n],Ae=>{(Q.flush==="sync"?d:c)&&j({storeId:n,type:ui.direct,events:g},Ae)},Tn({},l,Q)));return F},$dispose:w},P=Li(_);r._s.set(n,P);const H=r._a&&r._a.runWithContext||Gy,U=r._e.run(()=>(o=Iu(),H(()=>o.run(e))));for(const j in U){const Q=U[j];if(it(Q)&&!qy(Q)||Rn(Q))s||(y&&jy(Q)&&(it(Q)?Q.value=y[j]:ca(Q,y[j])),r.state.value[n][j]=Q);else if(typeof Q=="function"){const F=R(j,Q);U[j]=F,a.actions[j]=Q}}return Tn(P,U),Tn(Ge(P),U),Object.defineProperty(P,"$state",{get:()=>r.state.value[n],set:j=>{E(Q=>{Tn(Q,j)})}}),r._p.forEach(j=>{Tn(P,o.run(()=>j({store:P,app:r._a,pinia:r,options:a})))}),y&&s&&t.hydrate&&t.hydrate(P.$state,y),c=!0,d=!0,P}function Ch(n,e,t){let r,i;const s=typeof e=="function";typeof n=="string"?(r=n,i=s?t:e):(i=n,r=n.id);function o(a,l){const c=Vg();return a=a||(c?Kt(xh,null):null),a&&Vs(a),a=Eh,a._s.has(r)||(s?Th(r,e,i,a):zy(r,i,a)),a._s.get(r)}return o.$id=r,o}function Vy(n){return typeof n=="object"&&n!==null}function $c(n,e){return n=Vy(n)?n:Object.create(null),new Proxy(n,{get(t,r,i){return r==="key"?Reflect.get(t,r,i):Reflect.get(t,r,i)||Reflect.get(e,r,i)}})}function Wy(n,e){return e.reduce((t,r)=>t==null?void 0:t[r],n)}function Yy(n,e,t){return e.slice(0,-1).reduce((r,i)=>/^(__proto__)$/.test(i)?{}:r[i]=r[i]||{},n)[e[e.length-1]]=t,n}function Qy(n,e){return e.reduce((t,r)=>{const i=r.split(".");return Yy(t,i,Wy(n,i))},{})}function Xy(n,e){return t=>{var r;try{const{storage:i=localStorage,beforeRestore:s=void 0,afterRestore:o=void 0,serializer:a={serialize:JSON.stringify,deserialize:JSON.parse},key:l=e.$id,paths:c=null,debug:d=!1}=t;return{storage:i,beforeRestore:s,afterRestore:o,serializer:a,key:((r=n.key)!=null?r:u=>u)(typeof l=="string"?l:l(e.$id)),paths:c,debug:d}}catch(i){return t.debug&&console.error("[pinia-plugin-persistedstate]",i),null}}}function Hc(n,{storage:e,serializer:t,key:r,debug:i}){try{const s=e==null?void 0:e.getItem(r);s&&n.$patch(t==null?void 0:t.deserialize(s))}catch(s){i&&console.error("[pinia-plugin-persistedstate]",s)}}function Gc(n,{storage:e,serializer:t,key:r,paths:i,debug:s}){try{const o=Array.isArray(i)?Qy(n,i):n;e.setItem(r,t.serialize(o))}catch(o){s&&console.error("[pinia-plugin-persistedstate]",o)}}function Jy(n={}){return e=>{const{auto:t=!1}=n,{options:{persist:r=t},store:i,pinia:s}=e;if(!r)return;if(!(i.$id in s.state.value)){const a=s._s.get(i.$id.replace("__hot:",""));a&&Promise.resolve().then(()=>a.$persist());return}const o=(Array.isArray(r)?r.map(a=>$c(a,n)):[$c(r,n)]).map(Xy(n,i)).filter(Boolean);i.$persist=()=>{o.forEach(a=>{Gc(i.$state,a)})},i.$hydrate=({runHooks:a=!0}={})=>{o.forEach(l=>{const{beforeRestore:c,afterRestore:d}=l;a&&(c==null||c(e)),Hc(i,l),a&&(d==null||d(e))})},o.forEach(a=>{const{beforeRestore:l,afterRestore:c}=a;l==null||l(e),Hc(i,a),c==null||c(e),i.$subscribe((d,u)=>{Gc(u,a)},{detached:!0})})}}var Zy=Jy();/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const ar=typeof window<"u";function eA(n){return n.__esModule||n[Symbol.toStringTag]==="Module"}const ze=Object.assign;function Eo(n,e){const t={};for(const r in e){const i=e[r];t[r]=jt(i)?i.map(n):n(i)}return t}const hi=()=>{},jt=Array.isArray,tA=/\/$/,nA=n=>n.replace(tA,"");function xo(n,e,t="/"){let r,i={},s="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(r=e.slice(0,l),s=e.slice(l+1,a>-1?a:e.length),i=n(s)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=oA(r??e,t),{fullPath:r+(s&&"?")+s+o,path:r,query:i,hash:o}}function rA(n,e){const t=e.query?n(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function Kc(n,e){return!e||!n.toLowerCase().startsWith(e.toLowerCase())?n:n.slice(e.length)||"/"}function iA(n,e,t){const r=e.matched.length-1,i=t.matched.length-1;return r>-1&&r===i&&br(e.matched[r],t.matched[i])&&wh(e.params,t.params)&&n(e.query)===n(t.query)&&e.hash===t.hash}function br(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function wh(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(const t in n)if(!sA(n[t],e[t]))return!1;return!0}function sA(n,e){return jt(n)?jc(n,e):jt(e)?jc(e,n):n===e}function jc(n,e){return jt(e)?n.length===e.length&&n.every((t,r)=>t===e[r]):n.length===1&&n[0]===e}function oA(n,e){if(n.startsWith("/"))return n;if(!n)return e;const t=e.split("/"),r=n.split("/"),i=r[r.length-1];(i===".."||i===".")&&r.push("");let s=t.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")s>1&&s--;else break;return t.slice(0,s).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var Si;(function(n){n.pop="pop",n.push="push"})(Si||(Si={}));var fi;(function(n){n.back="back",n.forward="forward",n.unknown=""})(fi||(fi={}));function aA(n){if(!n)if(ar){const e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),nA(n)}const lA=/^[^#]+#/;function cA(n,e){return n.replace(lA,"#")+e}function dA(n,e){const t=document.documentElement.getBoundingClientRect(),r=n.getBoundingClientRect();return{behavior:e.behavior,left:r.left-t.left-(e.left||0),top:r.top-t.top-(e.top||0)}}const Ws=()=>({left:window.pageXOffset,top:window.pageYOffset});function uA(n){let e;if("el"in n){const t=n.el,r=typeof t=="string"&&t.startsWith("#"),i=typeof t=="string"?r?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!i)return;e=dA(i,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function qc(n,e){return(history.state?history.state.position-e:-1)+n}const da=new Map;function hA(n,e){da.set(n,e)}function fA(n){const e=da.get(n);return da.delete(n),e}let pA=()=>location.protocol+"//"+location.host;function kh(n,e){const{pathname:t,search:r,hash:i}=e,s=n.indexOf("#");if(s>-1){let a=i.includes(n.slice(s))?n.slice(s).length:1,l=i.slice(a);return l[0]!=="/"&&(l="/"+l),Kc(l,"")}return Kc(t,n)+r+i}function mA(n,e,t,r){let i=[],s=[],o=null;const a=({state:h})=>{const g=kh(n,location),y=t.value,b=e.value;let E=0;if(h){if(t.value=g,e.value=h,o&&o===y){o=null;return}E=b?h.position-b.position:0}else r(g);i.forEach(C=>{C(t.value,y,{delta:E,type:Si.pop,direction:E?E>0?fi.forward:fi.back:fi.unknown})})};function l(){o=t.value}function c(h){i.push(h);const g=()=>{const y=i.indexOf(h);y>-1&&i.splice(y,1)};return s.push(g),g}function d(){const{history:h}=window;h.state&&h.replaceState(ze({},h.state,{scroll:Ws()}),"")}function u(){for(const h of s)h();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",d,{passive:!0}),{pauseListeners:l,listen:c,destroy:u}}function zc(n,e,t,r=!1,i=!1){return{back:n,current:e,forward:t,replaced:r,position:window.history.length,scroll:i?Ws():null}}function gA(n){const{history:e,location:t}=window,r={value:kh(n,t)},i={value:e.state};i.value||s(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,c,d){const u=n.indexOf("#"),h=u>-1?(t.host&&document.querySelector("base")?n:n.slice(u))+l:pA()+n+l;try{e[d?"replaceState":"pushState"](c,"",h),i.value=c}catch(g){console.error(g),t[d?"replace":"assign"](h)}}function o(l,c){const d=ze({},e.state,zc(i.value.back,l,i.value.forward,!0),c,{position:i.value.position});s(l,d,!0),r.value=l}function a(l,c){const d=ze({},i.value,e.state,{forward:l,scroll:Ws()});s(d.current,d,!0);const u=ze({},zc(r.value,l,null),{position:d.position+1},c);s(l,u,!1),r.value=l}return{location:r,state:i,push:a,replace:o}}function yA(n){n=aA(n);const e=gA(n),t=mA(n,e.state,e.location,e.replace);function r(s,o=!0){o||t.pauseListeners(),history.go(s)}const i=ze({location:"",base:n,go:r,createHref:cA.bind(null,n)},e,t);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function AA(n){return n=location.host?n||location.pathname+location.search:"",n.includes("#")||(n+="#"),yA(n)}function bA(n){return typeof n=="string"||n&&typeof n=="object"}function Lh(n){return typeof n=="string"||typeof n=="symbol"}const En={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Rh=Symbol("");var Vc;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(Vc||(Vc={}));function vr(n,e){return ze(new Error,{type:n,[Rh]:!0},e)}function an(n,e){return n instanceof Error&&Rh in n&&(e==null||!!(n.type&e))}const Wc="[^/]+?",vA={sensitive:!1,strict:!1,start:!0,end:!0},EA=/[.+*?^${}()[\]/\\]/g;function xA(n,e){const t=ze({},vA,e),r=[];let i=t.start?"^":"";const s=[];for(const c of n){const d=c.length?[]:[90];t.strict&&!c.length&&(i+="/");for(let u=0;u<c.length;u++){const h=c[u];let g=40+(t.sensitive?.25:0);if(h.type===0)u||(i+="/"),i+=h.value.replace(EA,"\\$&"),g+=40;else if(h.type===1){const{value:y,repeatable:b,optional:E,regexp:C}=h;s.push({name:y,repeatable:b,optional:E});const w=C||Wc;if(w!==Wc){g+=10;try{new RegExp(`(${w})`)}catch(_){throw new Error(`Invalid custom RegExp for param "${y}" (${w}): `+_.message)}}let R=b?`((?:${w})(?:/(?:${w}))*)`:`(${w})`;u||(R=E&&c.length<2?`(?:/${R})`:"/"+R),E&&(R+="?"),i+=R,g+=20,E&&(g+=-8),b&&(g+=-20),w===".*"&&(g+=-50)}d.push(g)}r.push(d)}if(t.strict&&t.end){const c=r.length-1;r[c][r[c].length-1]+=.7000000000000001}t.strict||(i+="/?"),t.end?i+="$":t.strict&&(i+="(?:/|$)");const o=new RegExp(i,t.sensitive?"":"i");function a(c){const d=c.match(o),u={};if(!d)return null;for(let h=1;h<d.length;h++){const g=d[h]||"",y=s[h-1];u[y.name]=g&&y.repeatable?g.split("/"):g}return u}function l(c){let d="",u=!1;for(const h of n){(!u||!d.endsWith("/"))&&(d+="/"),u=!1;for(const g of h)if(g.type===0)d+=g.value;else if(g.type===1){const{value:y,repeatable:b,optional:E}=g,C=y in c?c[y]:"";if(jt(C)&&!b)throw new Error(`Provided param "${y}" is an array but it is not repeatable (* or + modifiers)`);const w=jt(C)?C.join("/"):C;if(!w)if(E)h.length<2&&(d.endsWith("/")?d=d.slice(0,-1):u=!0);else throw new Error(`Missing required param "${y}"`);d+=w}}return d||"/"}return{re:o,score:r,keys:s,parse:a,stringify:l}}function SA(n,e){let t=0;for(;t<n.length&&t<e.length;){const r=e[t]-n[t];if(r)return r;t++}return n.length<e.length?n.length===1&&n[0]===40+40?-1:1:n.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function TA(n,e){let t=0;const r=n.score,i=e.score;for(;t<r.length&&t<i.length;){const s=SA(r[t],i[t]);if(s)return s;t++}if(Math.abs(i.length-r.length)===1){if(Yc(r))return 1;if(Yc(i))return-1}return i.length-r.length}function Yc(n){const e=n[n.length-1];return n.length>0&&e[e.length-1]<0}const CA={type:0,value:""},wA=/[a-zA-Z0-9_]/;function kA(n){if(!n)return[[]];if(n==="/")return[[CA]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(g){throw new Error(`ERR (${t})/"${c}": ${g}`)}let t=0,r=t;const i=[];let s;function o(){s&&i.push(s),s=[]}let a=0,l,c="",d="";function u(){c&&(t===0?s.push({type:0,value:c}):t===1||t===2||t===3?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:d,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function h(){c+=l}for(;a<n.length;){if(l=n[a++],l==="\\"&&t!==2){r=t,t=4;continue}switch(t){case 0:l==="/"?(c&&u(),o()):l===":"?(u(),t=1):h();break;case 4:h(),t=r;break;case 1:l==="("?t=2:wA.test(l)?h():(u(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+l:t=3:d+=l;break;case 3:u(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,d="";break;default:e("Unknown state");break}}return t===2&&e(`Unfinished custom RegExp for param "${c}"`),u(),o(),i}function LA(n,e,t){const r=xA(kA(n.path),t),i=ze(r,{record:n,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function RA(n,e){const t=[],r=new Map;e=Jc({strict:!1,end:!0,sensitive:!1},e);function i(d){return r.get(d)}function s(d,u,h){const g=!h,y=IA(d);y.aliasOf=h&&h.record;const b=Jc(e,d),E=[y];if("alias"in d){const R=typeof d.alias=="string"?[d.alias]:d.alias;for(const _ of R)E.push(ze({},y,{components:h?h.record.components:y.components,path:_,aliasOf:h?h.record:y}))}let C,w;for(const R of E){const{path:_}=R;if(u&&_[0]!=="/"){const P=u.record.path,H=P[P.length-1]==="/"?"":"/";R.path=u.record.path+(_&&H+_)}if(C=LA(R,u,b),h?h.alias.push(C):(w=w||C,w!==C&&w.alias.push(C),g&&d.name&&!Xc(C)&&o(d.name)),y.children){const P=y.children;for(let H=0;H<P.length;H++)s(P[H],C,h&&h.children[H])}h=h||C,(C.record.components&&Object.keys(C.record.components).length||C.record.name||C.record.redirect)&&l(C)}return w?()=>{o(w)}:hi}function o(d){if(Lh(d)){const u=r.get(d);u&&(r.delete(d),t.splice(t.indexOf(u),1),u.children.forEach(o),u.alias.forEach(o))}else{const u=t.indexOf(d);u>-1&&(t.splice(u,1),d.record.name&&r.delete(d.record.name),d.children.forEach(o),d.alias.forEach(o))}}function a(){return t}function l(d){let u=0;for(;u<t.length&&TA(d,t[u])>=0&&(d.record.path!==t[u].record.path||!Ih(d,t[u]));)u++;t.splice(u,0,d),d.record.name&&!Xc(d)&&r.set(d.record.name,d)}function c(d,u){let h,g={},y,b;if("name"in d&&d.name){if(h=r.get(d.name),!h)throw vr(1,{location:d});b=h.record.name,g=ze(Qc(u.params,h.keys.filter(w=>!w.optional).map(w=>w.name)),d.params&&Qc(d.params,h.keys.map(w=>w.name))),y=h.stringify(g)}else if("path"in d)y=d.path,h=t.find(w=>w.re.test(y)),h&&(g=h.parse(y),b=h.record.name);else{if(h=u.name?r.get(u.name):t.find(w=>w.re.test(u.path)),!h)throw vr(1,{location:d,currentLocation:u});b=h.record.name,g=ze({},u.params,d.params),y=h.stringify(g)}const E=[];let C=h;for(;C;)E.unshift(C.record),C=C.parent;return{name:b,path:y,params:g,matched:E,meta:DA(E)}}return n.forEach(d=>s(d)),{addRoute:s,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function Qc(n,e){const t={};for(const r of e)r in n&&(t[r]=n[r]);return t}function IA(n){return{path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:void 0,beforeEnter:n.beforeEnter,props:_A(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}}}function _A(n){const e={},t=n.props||!1;if("component"in n)e.default=t;else for(const r in n.components)e[r]=typeof t=="object"?t[r]:t;return e}function Xc(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function DA(n){return n.reduce((e,t)=>ze(e,t.meta),{})}function Jc(n,e){const t={};for(const r in n)t[r]=r in e?e[r]:n[r];return t}function Ih(n,e){return e.children.some(t=>t===n||Ih(n,t))}const _h=/#/g,PA=/&/g,BA=/\//g,OA=/=/g,FA=/\?/g,Dh=/\+/g,MA=/%5B/g,NA=/%5D/g,Ph=/%5E/g,UA=/%60/g,Bh=/%7B/g,$A=/%7C/g,Oh=/%7D/g,HA=/%20/g;function nl(n){return encodeURI(""+n).replace($A,"|").replace(MA,"[").replace(NA,"]")}function GA(n){return nl(n).replace(Bh,"{").replace(Oh,"}").replace(Ph,"^")}function ua(n){return nl(n).replace(Dh,"%2B").replace(HA,"+").replace(_h,"%23").replace(PA,"%26").replace(UA,"`").replace(Bh,"{").replace(Oh,"}").replace(Ph,"^")}function KA(n){return ua(n).replace(OA,"%3D")}function jA(n){return nl(n).replace(_h,"%23").replace(FA,"%3F")}function qA(n){return n==null?"":jA(n).replace(BA,"%2F")}function Ss(n){try{return decodeURIComponent(""+n)}catch{}return""+n}function zA(n){const e={};if(n===""||n==="?")return e;const r=(n[0]==="?"?n.slice(1):n).split("&");for(let i=0;i<r.length;++i){const s=r[i].replace(Dh," "),o=s.indexOf("="),a=Ss(o<0?s:s.slice(0,o)),l=o<0?null:Ss(s.slice(o+1));if(a in e){let c=e[a];jt(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function Zc(n){let e="";for(let t in n){const r=n[t];if(t=KA(t),r==null){r!==void 0&&(e+=(e.length?"&":"")+t);continue}(jt(r)?r.map(s=>s&&ua(s)):[r&&ua(r)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+t,s!=null&&(e+="="+s))})}return e}function VA(n){const e={};for(const t in n){const r=n[t];r!==void 0&&(e[t]=jt(r)?r.map(i=>i==null?null:""+i):r==null?r:""+r)}return e}const WA=Symbol(""),ed=Symbol(""),rl=Symbol(""),il=Symbol(""),ha=Symbol("");function ni(){let n=[];function e(r){return n.push(r),()=>{const i=n.indexOf(r);i>-1&&n.splice(i,1)}}function t(){n=[]}return{add:e,list:()=>n.slice(),reset:t}}function wn(n,e,t,r,i){const s=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((o,a)=>{const l=u=>{u===!1?a(vr(4,{from:t,to:e})):u instanceof Error?a(u):bA(u)?a(vr(2,{from:e,to:u})):(s&&r.enterCallbacks[i]===s&&typeof u=="function"&&s.push(u),o())},c=n.call(r&&r.instances[i],e,t,l);let d=Promise.resolve(c);n.length<3&&(d=d.then(l)),d.catch(u=>a(u))})}function So(n,e,t,r){const i=[];for(const s of n)for(const o in s.components){let a=s.components[o];if(!(e!=="beforeRouteEnter"&&!s.instances[o]))if(YA(a)){const c=(a.__vccOpts||a)[e];c&&i.push(wn(c,t,r,s,o))}else{let l=a();i.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${s.path}"`));const d=eA(c)?c.default:c;s.components[o]=d;const h=(d.__vccOpts||d)[e];return h&&wn(h,t,r,s,o)()}))}}return i}function YA(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function td(n){const e=Kt(rl),t=Kt(il),r=_t(()=>e.resolve(Kn(n.to))),i=_t(()=>{const{matched:l}=r.value,{length:c}=l,d=l[c-1],u=t.matched;if(!d||!u.length)return-1;const h=u.findIndex(br.bind(null,d));if(h>-1)return h;const g=nd(l[c-2]);return c>1&&nd(d)===g&&u[u.length-1].path!==g?u.findIndex(br.bind(null,l[c-2])):h}),s=_t(()=>i.value>-1&&ZA(t.params,r.value.params)),o=_t(()=>i.value>-1&&i.value===t.matched.length-1&&wh(t.params,r.value.params));function a(l={}){return JA(l)?e[Kn(n.replace)?"replace":"push"](Kn(n.to)).catch(hi):Promise.resolve()}return{route:r,href:_t(()=>r.value.href),isActive:s,isExactActive:o,navigate:a}}const QA=Xa({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:td,setup(n,{slots:e}){const t=Li(td(n)),{options:r}=Kt(rl),i=_t(()=>({[rd(n.activeClass,r.linkActiveClass,"router-link-active")]:t.isActive,[rd(n.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const s=e.default&&e.default(t);return n.custom?s:vh("a",{"aria-current":t.isExactActive?n.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:i.value},s)}}}),XA=QA;function JA(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function ZA(n,e){for(const t in e){const r=e[t],i=n[t];if(typeof r=="string"){if(r!==i)return!1}else if(!jt(i)||i.length!==r.length||r.some((s,o)=>s!==i[o]))return!1}return!0}function nd(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const rd=(n,e,t)=>n??e??t,eb=Xa({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:e,slots:t}){const r=Kt(ha),i=_t(()=>n.route||r.value),s=Kt(ed,0),o=_t(()=>{let c=Kn(s);const{matched:d}=i.value;let u;for(;(u=d[c])&&!u.components;)c++;return c}),a=_t(()=>i.value.matched[o.value]);ss(ed,_t(()=>o.value+1)),ss(WA,a),ss(ha,i);const l=Va();return li(()=>[l.value,a.value,n.name],([c,d,u],[h,g,y])=>{d&&(d.instances[u]=c,g&&g!==d&&c&&c===h&&(d.leaveGuards.size||(d.leaveGuards=g.leaveGuards),d.updateGuards.size||(d.updateGuards=g.updateGuards))),c&&d&&(!g||!br(d,g)||!h)&&(d.enterCallbacks[u]||[]).forEach(b=>b(c))},{flush:"post"}),()=>{const c=i.value,d=n.name,u=a.value,h=u&&u.components[d];if(!h)return id(t.default,{Component:h,route:c});const g=u.props[d],y=g?g===!0?c.params:typeof g=="function"?g(c):g:null,E=vh(h,ze({},y,e,{onVnodeUnmounted:C=>{C.component.isUnmounted&&(u.instances[d]=null)},ref:l}));return id(t.default,{Component:E,route:c})||E}}});function id(n,e){if(!n)return null;const t=n(e);return t.length===1?t[0]:t}const Fh=eb;function tb(n){const e=RA(n.routes,n),t=n.parseQuery||zA,r=n.stringifyQuery||Zc,i=n.history,s=ni(),o=ni(),a=ni(),l=ig(En);let c=En;ar&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=Eo.bind(null,K=>""+K),u=Eo.bind(null,qA),h=Eo.bind(null,Ss);function g(K,ce){let re,Ee;return Lh(K)?(re=e.getRecordMatcher(K),Ee=ce):Ee=K,e.addRoute(Ee,re)}function y(K){const ce=e.getRecordMatcher(K);ce&&e.removeRoute(ce)}function b(){return e.getRoutes().map(K=>K.record)}function E(K){return!!e.getRecordMatcher(K)}function C(K,ce){if(ce=ze({},ce||l.value),typeof K=="string"){const O=xo(t,K,ce.path),q=e.resolve({path:O.path},ce),X=i.createHref(O.fullPath);return ze(O,q,{params:h(q.params),hash:Ss(O.hash),redirectedFrom:void 0,href:X})}let re;if("path"in K)re=ze({},K,{path:xo(t,K.path,ce.path).path});else{const O=ze({},K.params);for(const q in O)O[q]==null&&delete O[q];re=ze({},K,{params:u(O)}),ce.params=u(ce.params)}const Ee=e.resolve(re,ce),Ke=K.hash||"";Ee.params=d(h(Ee.params));const I=rA(r,ze({},K,{hash:GA(Ke),path:Ee.path})),D=i.createHref(I);return ze({fullPath:I,hash:Ke,query:r===Zc?VA(K.query):K.query||{}},Ee,{redirectedFrom:void 0,href:D})}function w(K){return typeof K=="string"?xo(t,K,l.value.path):ze({},K)}function R(K,ce){if(c!==K)return vr(8,{from:ce,to:K})}function _(K){return U(K)}function P(K){return _(ze(w(K),{replace:!0}))}function H(K){const ce=K.matched[K.matched.length-1];if(ce&&ce.redirect){const{redirect:re}=ce;let Ee=typeof re=="function"?re(K):re;return typeof Ee=="string"&&(Ee=Ee.includes("?")||Ee.includes("#")?Ee=w(Ee):{path:Ee},Ee.params={}),ze({query:K.query,hash:K.hash,params:"path"in Ee?{}:K.params},Ee)}}function U(K,ce){const re=c=C(K),Ee=l.value,Ke=K.state,I=K.force,D=K.replace===!0,O=H(re);if(O)return U(ze(w(O),{state:typeof O=="object"?ze({},Ke,O.state):Ke,force:I,replace:D}),ce||re);const q=re;q.redirectedFrom=ce;let X;return!I&&iA(r,Ee,re)&&(X=vr(16,{to:q,from:Ee}),Re(Ee,Ee,!0,!1)),(X?Promise.resolve(X):F(q,Ee)).catch(ee=>an(ee)?an(ee,2)?ee:ae(ee):me(ee,q,Ee)).then(ee=>{if(ee){if(an(ee,2))return U(ze({replace:D},w(ee.to),{state:typeof ee.to=="object"?ze({},Ke,ee.to.state):Ke,force:I}),ce||q)}else ee=Ae(q,Ee,!0,D,Ke);return Y(q,Ee,ee),ee})}function j(K,ce){const re=R(K,ce);return re?Promise.reject(re):Promise.resolve()}function Q(K){const ce=je.values().next().value;return ce&&typeof ce.runWithContext=="function"?ce.runWithContext(K):K()}function F(K,ce){let re;const[Ee,Ke,I]=nb(K,ce);re=So(Ee.reverse(),"beforeRouteLeave",K,ce);for(const O of Ee)O.leaveGuards.forEach(q=>{re.push(wn(q,K,ce))});const D=j.bind(null,K,ce);return re.push(D),Pe(re).then(()=>{re=[];for(const O of s.list())re.push(wn(O,K,ce));return re.push(D),Pe(re)}).then(()=>{re=So(Ke,"beforeRouteUpdate",K,ce);for(const O of Ke)O.updateGuards.forEach(q=>{re.push(wn(q,K,ce))});return re.push(D),Pe(re)}).then(()=>{re=[];for(const O of I)if(O.beforeEnter)if(jt(O.beforeEnter))for(const q of O.beforeEnter)re.push(wn(q,K,ce));else re.push(wn(O.beforeEnter,K,ce));return re.push(D),Pe(re)}).then(()=>(K.matched.forEach(O=>O.enterCallbacks={}),re=So(I,"beforeRouteEnter",K,ce),re.push(D),Pe(re))).then(()=>{re=[];for(const O of o.list())re.push(wn(O,K,ce));return re.push(D),Pe(re)}).catch(O=>an(O,8)?O:Promise.reject(O))}function Y(K,ce,re){a.list().forEach(Ee=>Q(()=>Ee(K,ce,re)))}function Ae(K,ce,re,Ee,Ke){const I=R(K,ce);if(I)return I;const D=ce===En,O=ar?history.state:{};re&&(Ee||D?i.replace(K.fullPath,ze({scroll:D&&O&&O.scroll},Ke)):i.push(K.fullPath,Ke)),l.value=K,Re(K,ce,re,D),ae()}let te;function Se(){te||(te=i.listen((K,ce,re)=>{if(!Qe.listening)return;const Ee=C(K),Ke=H(Ee);if(Ke){U(ze(Ke,{replace:!0}),Ee).catch(hi);return}c=Ee;const I=l.value;ar&&hA(qc(I.fullPath,re.delta),Ws()),F(Ee,I).catch(D=>an(D,12)?D:an(D,2)?(U(D.to,Ee).then(O=>{an(O,20)&&!re.delta&&re.type===Si.pop&&i.go(-1,!1)}).catch(hi),Promise.reject()):(re.delta&&i.go(-re.delta,!1),me(D,Ee,I))).then(D=>{D=D||Ae(Ee,I,!1),D&&(re.delta&&!an(D,8)?i.go(-re.delta,!1):re.type===Si.pop&&an(D,20)&&i.go(-1,!1)),Y(Ee,I,D)}).catch(hi)}))}let ve=ni(),ne=ni(),ye;function me(K,ce,re){ae(K);const Ee=ne.list();return Ee.length?Ee.forEach(Ke=>Ke(K,ce,re)):console.error(K),Promise.reject(K)}function z(){return ye&&l.value!==En?Promise.resolve():new Promise((K,ce)=>{ve.add([K,ce])})}function ae(K){return ye||(ye=!K,Se(),ve.list().forEach(([ce,re])=>K?re(K):ce()),ve.reset()),K}function Re(K,ce,re,Ee){const{scrollBehavior:Ke}=n;if(!ar||!Ke)return Promise.resolve();const I=!re&&fA(qc(K.fullPath,0))||(Ee||!re)&&history.state&&history.state.scroll||null;return Ya().then(()=>Ke(K,ce,I)).then(D=>D&&uA(D)).catch(D=>me(D,K,ce))}const xe=K=>i.go(K);let Fe;const je=new Set,Qe={currentRoute:l,listening:!0,addRoute:g,removeRoute:y,hasRoute:E,getRoutes:b,resolve:C,options:n,push:_,replace:P,go:xe,back:()=>xe(-1),forward:()=>xe(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:ne.add,isReady:z,install(K){const ce=this;K.component("RouterLink",XA),K.component("RouterView",Fh),K.config.globalProperties.$router=ce,Object.defineProperty(K.config.globalProperties,"$route",{enumerable:!0,get:()=>Kn(l)}),ar&&!Fe&&l.value===En&&(Fe=!0,_(i.location).catch(Ke=>{}));const re={};for(const Ke in En)Object.defineProperty(re,Ke,{get:()=>l.value[Ke],enumerable:!0});K.provide(rl,ce),K.provide(il,Gu(re)),K.provide(ha,l);const Ee=K.unmount;je.add(K),K.unmount=function(){je.delete(K),je.size<1&&(c=En,te&&te(),te=null,l.value=En,Fe=!1,ye=!1),Ee()}}};function Pe(K){return K.reduce((ce,re)=>ce.then(()=>Q(re)),Promise.resolve())}return Qe}function nb(n,e){const t=[],r=[],i=[],s=Math.max(e.matched.length,n.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(n.matched.find(c=>br(c,a))?r.push(a):t.push(a));const l=n.matched[o];l&&(e.matched.find(c=>br(c,l))||i.push(l))}return[t,r,i]}function nT(){return Kt(il)}const rb=(n,e)=>{const t=n.__vccOpts||n;for(const[r,i]of e)t[r]=i;return t},ib=Xa({__name:"App",setup(n){return(e,t)=>(fh(),mh(Kn(Fh),{id:"allContent"}))}});const sb=rb(ib,[["__scopeId","data-v-62d918d6"]]),ob="modulepreload",ab=function(n,e){return new URL(n,e).href},sd={},On=function(e,t,r){if(!t||t.length===0)return e();const i=document.getElementsByTagName("link");return Promise.all(t.map(s=>{if(s=ab(s,r),s in sd)return;sd[s]=!0;const o=s.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!r)for(let d=i.length-1;d>=0;d--){const u=i[d];if(u.href===s&&(!o||u.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${a}`))return;const c=document.createElement("link");if(c.rel=o?"stylesheet":ob,o||(c.as="script",c.crossOrigin=""),c.href=s,document.head.appendChild(c),o)return new Promise((d,u)=>{c.addEventListener("load",d),c.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e()).catch(s=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=s,window.dispatchEvent(o),!o.defaultPrevented)throw s})};function Mh(n,e){return function(){return n.apply(e,arguments)}}const{toString:lb}=Object.prototype,{getPrototypeOf:sl}=Object,Ys=(n=>e=>{const t=lb.call(e);return n[t]||(n[t]=t.slice(8,-1).toLowerCase())})(Object.create(null)),rn=n=>(n=n.toLowerCase(),e=>Ys(e)===n),Qs=n=>e=>typeof e===n,{isArray:Rr}=Array,Ti=Qs("undefined");function cb(n){return n!==null&&!Ti(n)&&n.constructor!==null&&!Ti(n.constructor)&&Pt(n.constructor.isBuffer)&&n.constructor.isBuffer(n)}const Nh=rn("ArrayBuffer");function db(n){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(n):e=n&&n.buffer&&Nh(n.buffer),e}const ub=Qs("string"),Pt=Qs("function"),Uh=Qs("number"),Xs=n=>n!==null&&typeof n=="object",hb=n=>n===!0||n===!1,ls=n=>{if(Ys(n)!=="object")return!1;const e=sl(n);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in n)&&!(Symbol.iterator in n)},fb=rn("Date"),pb=rn("File"),mb=rn("Blob"),gb=rn("FileList"),yb=n=>Xs(n)&&Pt(n.pipe),Ab=n=>{let e;return n&&(typeof FormData=="function"&&n instanceof FormData||Pt(n.append)&&((e=Ys(n))==="formdata"||e==="object"&&Pt(n.toString)&&n.toString()==="[object FormData]"))},bb=rn("URLSearchParams"),vb=n=>n.trim?n.trim():n.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Ri(n,e,{allOwnKeys:t=!1}={}){if(n===null||typeof n>"u")return;let r,i;if(typeof n!="object"&&(n=[n]),Rr(n))for(r=0,i=n.length;r<i;r++)e.call(null,n[r],r,n);else{const s=t?Object.getOwnPropertyNames(n):Object.keys(n),o=s.length;let a;for(r=0;r<o;r++)a=s[r],e.call(null,n[a],a,n)}}function $h(n,e){e=e.toLowerCase();const t=Object.keys(n);let r=t.length,i;for(;r-- >0;)if(i=t[r],e===i.toLowerCase())return i;return null}const Hh=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),Gh=n=>!Ti(n)&&n!==Hh;function fa(){const{caseless:n}=Gh(this)&&this||{},e={},t=(r,i)=>{const s=n&&$h(e,i)||i;ls(e[s])&&ls(r)?e[s]=fa(e[s],r):ls(r)?e[s]=fa({},r):Rr(r)?e[s]=r.slice():e[s]=r};for(let r=0,i=arguments.length;r<i;r++)arguments[r]&&Ri(arguments[r],t);return e}const Eb=(n,e,t,{allOwnKeys:r}={})=>(Ri(e,(i,s)=>{t&&Pt(i)?n[s]=Mh(i,t):n[s]=i},{allOwnKeys:r}),n),xb=n=>(n.charCodeAt(0)===65279&&(n=n.slice(1)),n),Sb=(n,e,t,r)=>{n.prototype=Object.create(e.prototype,r),n.prototype.constructor=n,Object.defineProperty(n,"super",{value:e.prototype}),t&&Object.assign(n.prototype,t)},Tb=(n,e,t,r)=>{let i,s,o;const a={};if(e=e||{},n==null)return e;do{for(i=Object.getOwnPropertyNames(n),s=i.length;s-- >0;)o=i[s],(!r||r(o,n,e))&&!a[o]&&(e[o]=n[o],a[o]=!0);n=t!==!1&&sl(n)}while(n&&(!t||t(n,e))&&n!==Object.prototype);return e},Cb=(n,e,t)=>{n=String(n),(t===void 0||t>n.length)&&(t=n.length),t-=e.length;const r=n.indexOf(e,t);return r!==-1&&r===t},wb=n=>{if(!n)return null;if(Rr(n))return n;let e=n.length;if(!Uh(e))return null;const t=new Array(e);for(;e-- >0;)t[e]=n[e];return t},kb=(n=>e=>n&&e instanceof n)(typeof Uint8Array<"u"&&sl(Uint8Array)),Lb=(n,e)=>{const r=(n&&n[Symbol.iterator]).call(n);let i;for(;(i=r.next())&&!i.done;){const s=i.value;e.call(n,s[0],s[1])}},Rb=(n,e)=>{let t;const r=[];for(;(t=n.exec(e))!==null;)r.push(t);return r},Ib=rn("HTMLFormElement"),_b=n=>n.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(t,r,i){return r.toUpperCase()+i}),od=(({hasOwnProperty:n})=>(e,t)=>n.call(e,t))(Object.prototype),Db=rn("RegExp"),Kh=(n,e)=>{const t=Object.getOwnPropertyDescriptors(n),r={};Ri(t,(i,s)=>{let o;(o=e(i,s,n))!==!1&&(r[s]=o||i)}),Object.defineProperties(n,r)},Pb=n=>{Kh(n,(e,t)=>{if(Pt(n)&&["arguments","caller","callee"].indexOf(t)!==-1)return!1;const r=n[t];if(Pt(r)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+t+"'")})}})},Bb=(n,e)=>{const t={},r=i=>{i.forEach(s=>{t[s]=!0})};return Rr(n)?r(n):r(String(n).split(e)),t},Ob=()=>{},Fb=(n,e)=>(n=+n,Number.isFinite(n)?n:e),To="abcdefghijklmnopqrstuvwxyz",ad="0123456789",jh={DIGIT:ad,ALPHA:To,ALPHA_DIGIT:To+To.toUpperCase()+ad},Mb=(n=16,e=jh.ALPHA_DIGIT)=>{let t="";const{length:r}=e;for(;n--;)t+=e[Math.random()*r|0];return t};function Nb(n){return!!(n&&Pt(n.append)&&n[Symbol.toStringTag]==="FormData"&&n[Symbol.iterator])}const Ub=n=>{const e=new Array(10),t=(r,i)=>{if(Xs(r)){if(e.indexOf(r)>=0)return;if(!("toJSON"in r)){e[i]=r;const s=Rr(r)?[]:{};return Ri(r,(o,a)=>{const l=t(o,i+1);!Ti(l)&&(s[a]=l)}),e[i]=void 0,s}}return r};return t(n,0)},$b=rn("AsyncFunction"),Hb=n=>n&&(Xs(n)||Pt(n))&&Pt(n.then)&&Pt(n.catch),W={isArray:Rr,isArrayBuffer:Nh,isBuffer:cb,isFormData:Ab,isArrayBufferView:db,isString:ub,isNumber:Uh,isBoolean:hb,isObject:Xs,isPlainObject:ls,isUndefined:Ti,isDate:fb,isFile:pb,isBlob:mb,isRegExp:Db,isFunction:Pt,isStream:yb,isURLSearchParams:bb,isTypedArray:kb,isFileList:gb,forEach:Ri,merge:fa,extend:Eb,trim:vb,stripBOM:xb,inherits:Sb,toFlatObject:Tb,kindOf:Ys,kindOfTest:rn,endsWith:Cb,toArray:wb,forEachEntry:Lb,matchAll:Rb,isHTMLForm:Ib,hasOwnProperty:od,hasOwnProp:od,reduceDescriptors:Kh,freezeMethods:Pb,toObjectSet:Bb,toCamelCase:_b,noop:Ob,toFiniteNumber:Fb,findKey:$h,global:Hh,isContextDefined:Gh,ALPHABET:jh,generateString:Mb,isSpecCompliantForm:Nb,toJSONObject:Ub,isAsyncFn:$b,isThenable:Hb};function $e(n,e,t,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=n,this.name="AxiosError",e&&(this.code=e),t&&(this.config=t),r&&(this.request=r),i&&(this.response=i)}W.inherits($e,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:W.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const qh=$e.prototype,zh={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(n=>{zh[n]={value:n}});Object.defineProperties($e,zh);Object.defineProperty(qh,"isAxiosError",{value:!0});$e.from=(n,e,t,r,i,s)=>{const o=Object.create(qh);return W.toFlatObject(n,o,function(l){return l!==Error.prototype},a=>a!=="isAxiosError"),$e.call(o,n.message,e,t,r,i),o.cause=n,o.name=n.name,s&&Object.assign(o,s),o};const Gb=null;function pa(n){return W.isPlainObject(n)||W.isArray(n)}function Vh(n){return W.endsWith(n,"[]")?n.slice(0,-2):n}function ld(n,e,t){return n?n.concat(e).map(function(i,s){return i=Vh(i),!t&&s?"["+i+"]":i}).join(t?".":""):e}function Kb(n){return W.isArray(n)&&!n.some(pa)}const jb=W.toFlatObject(W,{},null,function(e){return/^is[A-Z]/.test(e)});function Js(n,e,t){if(!W.isObject(n))throw new TypeError("target must be an object");e=e||new FormData,t=W.toFlatObject(t,{metaTokens:!0,dots:!1,indexes:!1},!1,function(b,E){return!W.isUndefined(E[b])});const r=t.metaTokens,i=t.visitor||d,s=t.dots,o=t.indexes,l=(t.Blob||typeof Blob<"u"&&Blob)&&W.isSpecCompliantForm(e);if(!W.isFunction(i))throw new TypeError("visitor must be a function");function c(y){if(y===null)return"";if(W.isDate(y))return y.toISOString();if(!l&&W.isBlob(y))throw new $e("Blob is not supported. Use a Buffer instead.");return W.isArrayBuffer(y)||W.isTypedArray(y)?l&&typeof Blob=="function"?new Blob([y]):Buffer.from(y):y}function d(y,b,E){let C=y;if(y&&!E&&typeof y=="object"){if(W.endsWith(b,"{}"))b=r?b:b.slice(0,-2),y=JSON.stringify(y);else if(W.isArray(y)&&Kb(y)||(W.isFileList(y)||W.endsWith(b,"[]"))&&(C=W.toArray(y)))return b=Vh(b),C.forEach(function(R,_){!(W.isUndefined(R)||R===null)&&e.append(o===!0?ld([b],_,s):o===null?b:b+"[]",c(R))}),!1}return pa(y)?!0:(e.append(ld(E,b,s),c(y)),!1)}const u=[],h=Object.assign(jb,{defaultVisitor:d,convertValue:c,isVisitable:pa});function g(y,b){if(!W.isUndefined(y)){if(u.indexOf(y)!==-1)throw Error("Circular reference detected in "+b.join("."));u.push(y),W.forEach(y,function(C,w){(!(W.isUndefined(C)||C===null)&&i.call(e,C,W.isString(w)?w.trim():w,b,h))===!0&&g(C,b?b.concat(w):[w])}),u.pop()}}if(!W.isObject(n))throw new TypeError("data must be an object");return g(n),e}function cd(n){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(n).replace(/[!'()~]|%20|%00/g,function(r){return e[r]})}function ol(n,e){this._pairs=[],n&&Js(n,this,e)}const Wh=ol.prototype;Wh.append=function(e,t){this._pairs.push([e,t])};Wh.toString=function(e){const t=e?function(r){return e.call(this,r,cd)}:cd;return this._pairs.map(function(i){return t(i[0])+"="+t(i[1])},"").join("&")};function qb(n){return encodeURIComponent(n).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Yh(n,e,t){if(!e)return n;const r=t&&t.encode||qb,i=t&&t.serialize;let s;if(i?s=i(e,t):s=W.isURLSearchParams(e)?e.toString():new ol(e,t).toString(r),s){const o=n.indexOf("#");o!==-1&&(n=n.slice(0,o)),n+=(n.indexOf("?")===-1?"?":"&")+s}return n}class zb{constructor(){this.handlers=[]}use(e,t,r){return this.handlers.push({fulfilled:e,rejected:t,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){W.forEach(this.handlers,function(r){r!==null&&e(r)})}}const dd=zb,Qh={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Vb=typeof URLSearchParams<"u"?URLSearchParams:ol,Wb=typeof FormData<"u"?FormData:null,Yb=typeof Blob<"u"?Blob:null,Qb={isBrowser:!0,classes:{URLSearchParams:Vb,FormData:Wb,Blob:Yb},protocols:["http","https","file","blob","url","data"]},Xh=typeof window<"u"&&typeof document<"u",Xb=(n=>Xh&&["ReactNative","NativeScript","NS"].indexOf(n)<0)(typeof navigator<"u"&&navigator.product),Jb=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),Zb=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Xh,hasStandardBrowserEnv:Xb,hasStandardBrowserWebWorkerEnv:Jb},Symbol.toStringTag,{value:"Module"})),Jt={...Zb,...Qb};function ev(n,e){return Js(n,new Jt.classes.URLSearchParams,Object.assign({visitor:function(t,r,i,s){return Jt.isNode&&W.isBuffer(t)?(this.append(r,t.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)}},e))}function tv(n){return W.matchAll(/\w+|\[(\w*)]/g,n).map(e=>e[0]==="[]"?"":e[1]||e[0])}function nv(n){const e={},t=Object.keys(n);let r;const i=t.length;let s;for(r=0;r<i;r++)s=t[r],e[s]=n[s];return e}function Jh(n){function e(t,r,i,s){let o=t[s++];if(o==="__proto__")return!0;const a=Number.isFinite(+o),l=s>=t.length;return o=!o&&W.isArray(i)?i.length:o,l?(W.hasOwnProp(i,o)?i[o]=[i[o],r]:i[o]=r,!a):((!i[o]||!W.isObject(i[o]))&&(i[o]=[]),e(t,r,i[o],s)&&W.isArray(i[o])&&(i[o]=nv(i[o])),!a)}if(W.isFormData(n)&&W.isFunction(n.entries)){const t={};return W.forEachEntry(n,(r,i)=>{e(tv(r),i,t,0)}),t}return null}function rv(n,e,t){if(W.isString(n))try{return(e||JSON.parse)(n),W.trim(n)}catch(r){if(r.name!=="SyntaxError")throw r}return(t||JSON.stringify)(n)}const al={transitional:Qh,adapter:["xhr","http"],transformRequest:[function(e,t){const r=t.getContentType()||"",i=r.indexOf("application/json")>-1,s=W.isObject(e);if(s&&W.isHTMLForm(e)&&(e=new FormData(e)),W.isFormData(e))return i?JSON.stringify(Jh(e)):e;if(W.isArrayBuffer(e)||W.isBuffer(e)||W.isStream(e)||W.isFile(e)||W.isBlob(e))return e;if(W.isArrayBufferView(e))return e.buffer;if(W.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(s){if(r.indexOf("application/x-www-form-urlencoded")>-1)return ev(e,this.formSerializer).toString();if((a=W.isFileList(e))||r.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return Js(a?{"files[]":e}:e,l&&new l,this.formSerializer)}}return s||i?(t.setContentType("application/json",!1),rv(e)):e}],transformResponse:[function(e){const t=this.transitional||al.transitional,r=t&&t.forcedJSONParsing,i=this.responseType==="json";if(e&&W.isString(e)&&(r&&!this.responseType||i)){const o=!(t&&t.silentJSONParsing)&&i;try{return JSON.parse(e)}catch(a){if(o)throw a.name==="SyntaxError"?$e.from(a,$e.ERR_BAD_RESPONSE,this,null,this.response):a}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Jt.classes.FormData,Blob:Jt.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};W.forEach(["delete","get","head","post","put","patch"],n=>{al.headers[n]={}});const ll=al,iv=W.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),sv=n=>{const e={};let t,r,i;return n&&n.split(`
`).forEach(function(o){i=o.indexOf(":"),t=o.substring(0,i).trim().toLowerCase(),r=o.substring(i+1).trim(),!(!t||e[t]&&iv[t])&&(t==="set-cookie"?e[t]?e[t].push(r):e[t]=[r]:e[t]=e[t]?e[t]+", "+r:r)}),e},ud=Symbol("internals");function ri(n){return n&&String(n).trim().toLowerCase()}function cs(n){return n===!1||n==null?n:W.isArray(n)?n.map(cs):String(n)}function ov(n){const e=Object.create(null),t=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=t.exec(n);)e[r[1]]=r[2];return e}const av=n=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(n.trim());function Co(n,e,t,r,i){if(W.isFunction(r))return r.call(this,e,t);if(i&&(e=t),!!W.isString(e)){if(W.isString(r))return e.indexOf(r)!==-1;if(W.isRegExp(r))return r.test(e)}}function lv(n){return n.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,t,r)=>t.toUpperCase()+r)}function cv(n,e){const t=W.toCamelCase(" "+e);["get","set","has"].forEach(r=>{Object.defineProperty(n,r+t,{value:function(i,s,o){return this[r].call(this,e,i,s,o)},configurable:!0})})}class Zs{constructor(e){e&&this.set(e)}set(e,t,r){const i=this;function s(a,l,c){const d=ri(l);if(!d)throw new Error("header name must be a non-empty string");const u=W.findKey(i,d);(!u||i[u]===void 0||c===!0||c===void 0&&i[u]!==!1)&&(i[u||l]=cs(a))}const o=(a,l)=>W.forEach(a,(c,d)=>s(c,d,l));return W.isPlainObject(e)||e instanceof this.constructor?o(e,t):W.isString(e)&&(e=e.trim())&&!av(e)?o(sv(e),t):e!=null&&s(t,e,r),this}get(e,t){if(e=ri(e),e){const r=W.findKey(this,e);if(r){const i=this[r];if(!t)return i;if(t===!0)return ov(i);if(W.isFunction(t))return t.call(this,i,r);if(W.isRegExp(t))return t.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=ri(e),e){const r=W.findKey(this,e);return!!(r&&this[r]!==void 0&&(!t||Co(this,this[r],r,t)))}return!1}delete(e,t){const r=this;let i=!1;function s(o){if(o=ri(o),o){const a=W.findKey(r,o);a&&(!t||Co(r,r[a],a,t))&&(delete r[a],i=!0)}}return W.isArray(e)?e.forEach(s):s(e),i}clear(e){const t=Object.keys(this);let r=t.length,i=!1;for(;r--;){const s=t[r];(!e||Co(this,this[s],s,e,!0))&&(delete this[s],i=!0)}return i}normalize(e){const t=this,r={};return W.forEach(this,(i,s)=>{const o=W.findKey(r,s);if(o){t[o]=cs(i),delete t[s];return}const a=e?lv(s):String(s).trim();a!==s&&delete t[s],t[a]=cs(i),r[a]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return W.forEach(this,(r,i)=>{r!=null&&r!==!1&&(t[i]=e&&W.isArray(r)?r.join(", "):r)}),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,t])=>e+": "+t).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const r=new this(e);return t.forEach(i=>r.set(i)),r}static accessor(e){const r=(this[ud]=this[ud]={accessors:{}}).accessors,i=this.prototype;function s(o){const a=ri(o);r[a]||(cv(i,o),r[a]=!0)}return W.isArray(e)?e.forEach(s):s(e),this}}Zs.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);W.reduceDescriptors(Zs.prototype,({value:n},e)=>{let t=e[0].toUpperCase()+e.slice(1);return{get:()=>n,set(r){this[t]=r}}});W.freezeMethods(Zs);const pn=Zs;function wo(n,e){const t=this||ll,r=e||t,i=pn.from(r.headers);let s=r.data;return W.forEach(n,function(a){s=a.call(t,s,i.normalize(),e?e.status:void 0)}),i.normalize(),s}function Zh(n){return!!(n&&n.__CANCEL__)}function Ii(n,e,t){$e.call(this,n??"canceled",$e.ERR_CANCELED,e,t),this.name="CanceledError"}W.inherits(Ii,$e,{__CANCEL__:!0});function dv(n,e,t){const r=t.config.validateStatus;!t.status||!r||r(t.status)?n(t):e(new $e("Request failed with status code "+t.status,[$e.ERR_BAD_REQUEST,$e.ERR_BAD_RESPONSE][Math.floor(t.status/100)-4],t.config,t.request,t))}const uv=Jt.hasStandardBrowserEnv?{write(n,e,t,r,i,s){const o=[n+"="+encodeURIComponent(e)];W.isNumber(t)&&o.push("expires="+new Date(t).toGMTString()),W.isString(r)&&o.push("path="+r),W.isString(i)&&o.push("domain="+i),s===!0&&o.push("secure"),document.cookie=o.join("; ")},read(n){const e=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove(n){this.write(n,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function hv(n){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(n)}function fv(n,e){return e?n.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):n}function ef(n,e){return n&&!hv(e)?fv(n,e):e}const pv=Jt.hasStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a");let r;function i(s){let o=s;return e&&(t.setAttribute("href",o),o=t.href),t.setAttribute("href",o),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:t.pathname.charAt(0)==="/"?t.pathname:"/"+t.pathname}}return r=i(window.location.href),function(o){const a=W.isString(o)?i(o):o;return a.protocol===r.protocol&&a.host===r.host}}():function(){return function(){return!0}}();function mv(n){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(n);return e&&e[1]||""}function gv(n,e){n=n||10;const t=new Array(n),r=new Array(n);let i=0,s=0,o;return e=e!==void 0?e:1e3,function(l){const c=Date.now(),d=r[s];o||(o=c),t[i]=l,r[i]=c;let u=s,h=0;for(;u!==i;)h+=t[u++],u=u%n;if(i=(i+1)%n,i===s&&(s=(s+1)%n),c-o<e)return;const g=d&&c-d;return g?Math.round(h*1e3/g):void 0}}function hd(n,e){let t=0;const r=gv(50,250);return i=>{const s=i.loaded,o=i.lengthComputable?i.total:void 0,a=s-t,l=r(a),c=s<=o;t=s;const d={loaded:s,total:o,progress:o?s/o:void 0,bytes:a,rate:l||void 0,estimated:l&&o&&c?(o-s)/l:void 0,event:i};d[e?"download":"upload"]=!0,n(d)}}const yv=typeof XMLHttpRequest<"u",Av=yv&&function(n){return new Promise(function(t,r){let i=n.data;const s=pn.from(n.headers).normalize();let{responseType:o,withXSRFToken:a}=n,l;function c(){n.cancelToken&&n.cancelToken.unsubscribe(l),n.signal&&n.signal.removeEventListener("abort",l)}let d;if(W.isFormData(i)){if(Jt.hasStandardBrowserEnv||Jt.hasStandardBrowserWebWorkerEnv)s.setContentType(!1);else if((d=s.getContentType())!==!1){const[b,...E]=d?d.split(";").map(C=>C.trim()).filter(Boolean):[];s.setContentType([b||"multipart/form-data",...E].join("; "))}}let u=new XMLHttpRequest;if(n.auth){const b=n.auth.username||"",E=n.auth.password?unescape(encodeURIComponent(n.auth.password)):"";s.set("Authorization","Basic "+btoa(b+":"+E))}const h=ef(n.baseURL,n.url);u.open(n.method.toUpperCase(),Yh(h,n.params,n.paramsSerializer),!0),u.timeout=n.timeout;function g(){if(!u)return;const b=pn.from("getAllResponseHeaders"in u&&u.getAllResponseHeaders()),C={data:!o||o==="text"||o==="json"?u.responseText:u.response,status:u.status,statusText:u.statusText,headers:b,config:n,request:u};dv(function(R){t(R),c()},function(R){r(R),c()},C),u=null}if("onloadend"in u?u.onloadend=g:u.onreadystatechange=function(){!u||u.readyState!==4||u.status===0&&!(u.responseURL&&u.responseURL.indexOf("file:")===0)||setTimeout(g)},u.onabort=function(){u&&(r(new $e("Request aborted",$e.ECONNABORTED,n,u)),u=null)},u.onerror=function(){r(new $e("Network Error",$e.ERR_NETWORK,n,u)),u=null},u.ontimeout=function(){let E=n.timeout?"timeout of "+n.timeout+"ms exceeded":"timeout exceeded";const C=n.transitional||Qh;n.timeoutErrorMessage&&(E=n.timeoutErrorMessage),r(new $e(E,C.clarifyTimeoutError?$e.ETIMEDOUT:$e.ECONNABORTED,n,u)),u=null},Jt.hasStandardBrowserEnv&&(a&&W.isFunction(a)&&(a=a(n)),a||a!==!1&&pv(h))){const b=n.xsrfHeaderName&&n.xsrfCookieName&&uv.read(n.xsrfCookieName);b&&s.set(n.xsrfHeaderName,b)}i===void 0&&s.setContentType(null),"setRequestHeader"in u&&W.forEach(s.toJSON(),function(E,C){u.setRequestHeader(C,E)}),W.isUndefined(n.withCredentials)||(u.withCredentials=!!n.withCredentials),o&&o!=="json"&&(u.responseType=n.responseType),typeof n.onDownloadProgress=="function"&&u.addEventListener("progress",hd(n.onDownloadProgress,!0)),typeof n.onUploadProgress=="function"&&u.upload&&u.upload.addEventListener("progress",hd(n.onUploadProgress)),(n.cancelToken||n.signal)&&(l=b=>{u&&(r(!b||b.type?new Ii(null,n,u):b),u.abort(),u=null)},n.cancelToken&&n.cancelToken.subscribe(l),n.signal&&(n.signal.aborted?l():n.signal.addEventListener("abort",l)));const y=mv(h);if(y&&Jt.protocols.indexOf(y)===-1){r(new $e("Unsupported protocol "+y+":",$e.ERR_BAD_REQUEST,n));return}u.send(i||null)})},ma={http:Gb,xhr:Av};W.forEach(ma,(n,e)=>{if(n){try{Object.defineProperty(n,"name",{value:e})}catch{}Object.defineProperty(n,"adapterName",{value:e})}});const fd=n=>`- ${n}`,bv=n=>W.isFunction(n)||n===null||n===!1,tf={getAdapter:n=>{n=W.isArray(n)?n:[n];const{length:e}=n;let t,r;const i={};for(let s=0;s<e;s++){t=n[s];let o;if(r=t,!bv(t)&&(r=ma[(o=String(t)).toLowerCase()],r===void 0))throw new $e(`Unknown adapter '${o}'`);if(r)break;i[o||"#"+s]=r}if(!r){const s=Object.entries(i).map(([a,l])=>`adapter ${a} `+(l===!1?"is not supported by the environment":"is not available in the build"));let o=e?s.length>1?`since :
`+s.map(fd).join(`
`):" "+fd(s[0]):"as no adapter specified";throw new $e("There is no suitable adapter to dispatch the request "+o,"ERR_NOT_SUPPORT")}return r},adapters:ma};function ko(n){if(n.cancelToken&&n.cancelToken.throwIfRequested(),n.signal&&n.signal.aborted)throw new Ii(null,n)}function pd(n){return ko(n),n.headers=pn.from(n.headers),n.data=wo.call(n,n.transformRequest),["post","put","patch"].indexOf(n.method)!==-1&&n.headers.setContentType("application/x-www-form-urlencoded",!1),tf.getAdapter(n.adapter||ll.adapter)(n).then(function(r){return ko(n),r.data=wo.call(n,n.transformResponse,r),r.headers=pn.from(r.headers),r},function(r){return Zh(r)||(ko(n),r&&r.response&&(r.response.data=wo.call(n,n.transformResponse,r.response),r.response.headers=pn.from(r.response.headers))),Promise.reject(r)})}const md=n=>n instanceof pn?n.toJSON():n;function Er(n,e){e=e||{};const t={};function r(c,d,u){return W.isPlainObject(c)&&W.isPlainObject(d)?W.merge.call({caseless:u},c,d):W.isPlainObject(d)?W.merge({},d):W.isArray(d)?d.slice():d}function i(c,d,u){if(W.isUndefined(d)){if(!W.isUndefined(c))return r(void 0,c,u)}else return r(c,d,u)}function s(c,d){if(!W.isUndefined(d))return r(void 0,d)}function o(c,d){if(W.isUndefined(d)){if(!W.isUndefined(c))return r(void 0,c)}else return r(void 0,d)}function a(c,d,u){if(u in e)return r(c,d);if(u in n)return r(void 0,c)}const l={url:s,method:s,data:s,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(c,d)=>i(md(c),md(d),!0)};return W.forEach(Object.keys(Object.assign({},n,e)),function(d){const u=l[d]||i,h=u(n[d],e[d],d);W.isUndefined(h)&&u!==a||(t[d]=h)}),t}const nf="1.6.7",cl={};["object","boolean","number","function","string","symbol"].forEach((n,e)=>{cl[n]=function(r){return typeof r===n||"a"+(e<1?"n ":" ")+n}});const gd={};cl.transitional=function(e,t,r){function i(s,o){return"[Axios v"+nf+"] Transitional option '"+s+"'"+o+(r?". "+r:"")}return(s,o,a)=>{if(e===!1)throw new $e(i(o," has been removed"+(t?" in "+t:"")),$e.ERR_DEPRECATED);return t&&!gd[o]&&(gd[o]=!0,console.warn(i(o," has been deprecated since v"+t+" and will be removed in the near future"))),e?e(s,o,a):!0}};function vv(n,e,t){if(typeof n!="object")throw new $e("options must be an object",$e.ERR_BAD_OPTION_VALUE);const r=Object.keys(n);let i=r.length;for(;i-- >0;){const s=r[i],o=e[s];if(o){const a=n[s],l=a===void 0||o(a,s,n);if(l!==!0)throw new $e("option "+s+" must be "+l,$e.ERR_BAD_OPTION_VALUE);continue}if(t!==!0)throw new $e("Unknown option "+s,$e.ERR_BAD_OPTION)}}const ga={assertOptions:vv,validators:cl},xn=ga.validators;class Ts{constructor(e){this.defaults=e,this.interceptors={request:new dd,response:new dd}}async request(e,t){try{return await this._request(e,t)}catch(r){if(r instanceof Error){let i;Error.captureStackTrace?Error.captureStackTrace(i={}):i=new Error;const s=i.stack?i.stack.replace(/^.+\n/,""):"";r.stack?s&&!String(r.stack).endsWith(s.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+s):r.stack=s}throw r}}_request(e,t){typeof e=="string"?(t=t||{},t.url=e):t=e||{},t=Er(this.defaults,t);const{transitional:r,paramsSerializer:i,headers:s}=t;r!==void 0&&ga.assertOptions(r,{silentJSONParsing:xn.transitional(xn.boolean),forcedJSONParsing:xn.transitional(xn.boolean),clarifyTimeoutError:xn.transitional(xn.boolean)},!1),i!=null&&(W.isFunction(i)?t.paramsSerializer={serialize:i}:ga.assertOptions(i,{encode:xn.function,serialize:xn.function},!0)),t.method=(t.method||this.defaults.method||"get").toLowerCase();let o=s&&W.merge(s.common,s[t.method]);s&&W.forEach(["delete","get","head","post","put","patch","common"],y=>{delete s[y]}),t.headers=pn.concat(o,s);const a=[];let l=!0;this.interceptors.request.forEach(function(b){typeof b.runWhen=="function"&&b.runWhen(t)===!1||(l=l&&b.synchronous,a.unshift(b.fulfilled,b.rejected))});const c=[];this.interceptors.response.forEach(function(b){c.push(b.fulfilled,b.rejected)});let d,u=0,h;if(!l){const y=[pd.bind(this),void 0];for(y.unshift.apply(y,a),y.push.apply(y,c),h=y.length,d=Promise.resolve(t);u<h;)d=d.then(y[u++],y[u++]);return d}h=a.length;let g=t;for(u=0;u<h;){const y=a[u++],b=a[u++];try{g=y(g)}catch(E){b.call(this,E);break}}try{d=pd.call(this,g)}catch(y){return Promise.reject(y)}for(u=0,h=c.length;u<h;)d=d.then(c[u++],c[u++]);return d}getUri(e){e=Er(this.defaults,e);const t=ef(e.baseURL,e.url);return Yh(t,e.params,e.paramsSerializer)}}W.forEach(["delete","get","head","options"],function(e){Ts.prototype[e]=function(t,r){return this.request(Er(r||{},{method:e,url:t,data:(r||{}).data}))}});W.forEach(["post","put","patch"],function(e){function t(r){return function(s,o,a){return this.request(Er(a||{},{method:e,headers:r?{"Content-Type":"multipart/form-data"}:{},url:s,data:o}))}}Ts.prototype[e]=t(),Ts.prototype[e+"Form"]=t(!0)});const ds=Ts;class dl{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let t;this.promise=new Promise(function(s){t=s});const r=this;this.promise.then(i=>{if(!r._listeners)return;let s=r._listeners.length;for(;s-- >0;)r._listeners[s](i);r._listeners=null}),this.promise.then=i=>{let s;const o=new Promise(a=>{r.subscribe(a),s=a}).then(i);return o.cancel=function(){r.unsubscribe(s)},o},e(function(s,o,a){r.reason||(r.reason=new Ii(s,o,a),t(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);t!==-1&&this._listeners.splice(t,1)}static source(){let e;return{token:new dl(function(i){e=i}),cancel:e}}}const Ev=dl;function xv(n){return function(t){return n.apply(null,t)}}function Sv(n){return W.isObject(n)&&n.isAxiosError===!0}const ya={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(ya).forEach(([n,e])=>{ya[e]=n});const Tv=ya;function rf(n){const e=new ds(n),t=Mh(ds.prototype.request,e);return W.extend(t,ds.prototype,e,{allOwnKeys:!0}),W.extend(t,e,null,{allOwnKeys:!0}),t.create=function(i){return rf(Er(n,i))},t}const st=rf(ll);st.Axios=ds;st.CanceledError=Ii;st.CancelToken=Ev;st.isCancel=Zh;st.VERSION=nf;st.toFormData=Js;st.AxiosError=$e;st.Cancel=st.CanceledError;st.all=function(e){return Promise.all(e)};st.spread=xv;st.isAxiosError=Sv;st.mergeConfig=Er;st.AxiosHeaders=pn;st.formToJSON=n=>Jh(W.isHTMLForm(n)?new FormData(n):n);st.getAdapter=tf.getAdapter;st.HttpStatusCode=Tv;st.default=st;const ii=st,rT=Ch("animesHistory",{state:()=>({history_list:[],max_history_len:100,history_page_item_num:2,search_history:[],max_search_hists:50,max_show_search_hists:10}),getters:{show_last_search_hist(n){const e=[];for(let t=n.search_history.length-1;t>=0&&(e.push(n.search_history[t]),!(e.length>=n.max_show_search_hists));t-=1);return e},history_len(n){return n.history_list.length},history_page_num(n){return Math.ceil(n.history_list.length/n.history_page_item_num)}},actions:{reverse_hist(n){const e=[];let t=0,r=this.history_list.length-1;for(let i=1;i<n;i++)r-=this.history_page_item_num;for(let i=r;i>=0&&(e.push(this.history_list[i]),t+=1,!(t>=this.history_page_item_num));i-=1);return e},play_anime(n,e,t,r,i){for(let a=0;a<this.history_list.length;a++)if(this.history_list[a].name_cn==n){this.history_list.splice(a,1);break}this.history_list.length>=this.max_history_len&&this.history_list.splice(0,this.history_list.length-this.max_history_len-1);const s=Date.now(),o={name_cn:n,play_time:s,play_progress:{ep_title:r,ep_idx:t},play_src_idx:e,img_link:i};this.history_list.push(o)},search_anime(n){if(n!=null&&n!=null&&n!=""){const e=this.search_history.indexOf(n);e!==-1&&this.search_history.splice(e,1),this.search_history.push(n),this.search_history.length>this.max_search_hists&&this.search_history.splice(0,this.search_history.length-this.max_search_hists)}},clear_search_list(){this.search_history.length>0&&(this.search_history=[])}},persist:!0});const yd="http://121.89.219.65:5656/",iT=Ch("animesSrc",{state:()=>({animes_search_res:[],anime_class_list:[],anime_srcs_list:["天空","非凡","飞速"],search_res_page_num:0}),getters:{},actions:{get_anime_types(n){const e=[];for(let t=0;t<n.length;t++){e.push([]);for(let r=0;r<n[t].length;r++)e[t].push({type_id:n[t][r].type_id,type_name:n[t][r].type_name})}return e},set_anime_types(n){this.anime_class_list=this.get_anime_types(n)},set_anime_srcs(n){this.animes_search_res=[];for(let e=0;e<n.length;e++){this.animes_search_res.push([]);for(let t=0;t<n[e].srcs_val.length;t++)this.animes_search_res[e].push({srcs:{vod_id:n[e].srcs_val[t].vod_id,type_id:n[e].srcs_val[t].type_id,vod_name:n[e].srcs_val[t].vod_name,vod_sub:n[e].srcs_val[t].vod_sub,vod_class:n[e].srcs_val[t].vod_class,vod_pic:n[e].srcs_val[t].vod_pic,vod_actor:n[e].srcs_val[t].vod_actor,vod_director:n[e].srcs_val[t].vod_director,vod_writer:n[e].srcs_val[t].vod_writer,vod_blurb:n[e].srcs_val[t].vod_blurb,vod_remarks:n[e].srcs_val[t].vod_remarks,vod_pubdate:n[e].srcs_val[t].vod_pubdate,vod_serial:n[e].srcs_val[t].vod_serial,vod_area:n[e].srcs_val[t].vod_area,vod_lang:n[e].srcs_val[t].vod_lang,vod_year:n[e].srcs_val[t].vod_year,type_name:n[e].srcs_val[t].type_name,vod_douban_id:n[e].srcs_val[t].vod_douban_id,vod_douban_score:n[e].srcs_val[t].vod_douban_score,vod_play_url:n[e].srcs_val[t].vod_play_url,vod_time:n[e].srcs_val[t].vod_time},srcs_idx:n[e].srcs_idx[t]})}},get_anime_srcs(n){const e=[];for(let t=0;t<n.srcs_val.length;t++)e.push({srcs:{vod_id:n.srcs_val[t].vod_id,type_id:n.srcs_val[t].type_id,vod_name:n.srcs_val[t].vod_name,vod_sub:n.srcs_val[t].vod_sub,vod_class:n.srcs_val[t].vod_class,vod_pic:n.srcs_val[t].vod_pic,vod_actor:n.srcs_val[t].vod_actor,vod_director:n.srcs_val[t].vod_director,vod_writer:n.srcs_val[t].vod_writer,vod_blurb:n.srcs_val[t].vod_blurb,vod_remarks:n.srcs_val[t].vod_remarks,vod_pubdate:n.srcs_val[t].vod_pubdate,vod_serial:n.srcs_val[t].vod_serial,vod_area:n.srcs_val[t].vod_area,vod_lang:n.srcs_val[t].vod_lang,vod_year:n.srcs_val[t].vod_year,type_name:n.srcs_val[t].type_name,vod_douban_id:n.srcs_val[t].vod_douban_id,vod_douban_score:n.srcs_val[t].vod_douban_score,vod_play_url:n.srcs_val[t].vod_play_url,vod_time:n.srcs_val[t].vod_time},srcs_idx:n.srcs_idx[t]});return e},async search_animes(n,e){const r=(await ii.get(yd+"api/animes/list?msg="+n+"&pg="+e)).data;this.set_anime_types(r.srcs_classes),this.set_anime_srcs(r.animes),this.search_res_page_num=r.res_page_num},async obtain_anime_detail(n){return(await ii.get(yd+"api/animes/play?animeName="+n)).data},async obtain_anime_bgm_detail(n){const t=(await ii.get("https://api.bgm.tv/search/subject/"+n+"?start=0&responseGroup=large&max_results=1&type=2")).data,i=(await ii.get("https://api.bgm.tv/v0/subjects/"+t.list[0].id)).data;return{date:i.date,images:i.images,summary:i.summary,name:i.name,name_cn:i.name_cn,tags:i.tags,infobox:i.infobox,rating:i.rating,total_episodes:i.total_episodes}},async pre_obtain_commend_keys(n){const t=(await ii.get("https://api.bgm.tv/search/subject/"+n+"?start=0&responseGroup=large&max_results=10&type=2")).data,r=[];for(let i=0;i<t.list.length;i++)r.push(t.list[i].name_cn);return r}}});var Cv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function wv(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var sf={exports:{}};(function(n,e){(function(t,r){n.exports=r()})(self,()=>(()=>{var t={916:(o,a,l)=>{var c=l(471);o.exports=function(d){var u,h="",g=(d=d||{}).video,y=d.options,b=c.$escape,E=d.tran,C=d.icons,w=d.index,R=c.$each;return d.$value,d.$index,h+=`<div class="dplayer-mask"></div>
<div class="dplayer-video-wrap">
    `,u=l(568)(g),h+=u,h+=`
    `,y.logo&&(h+=`
    <div class="dplayer-logo">
        <img src="`,h+=b(y.logo),h+=`">
    </div>
    `),h+=`
    <div class="dplayer-danmaku"`,y.danmaku&&y.danmaku.bottom&&(h+=' style="margin-bottom:',h+=b(y.danmaku.bottom),h+='"'),h+=`>
        <div class="dplayer-danmaku-item dplayer-danmaku-item--demo"></div>
    </div>
    <div class="dplayer-subtitle"></div>
    <div class="dplayer-bezel">
        <span class="dplayer-bezel-icon"></span>
        `,y.danmaku&&(h+=`
        <span class="dplayer-danloading">`,h+=b(E("danmaku-loading")),h+=`</span>
        `),h+=`
        <span class="diplayer-loading-icon">`,h+=C.loading,h+=`</span>
    </div>
</div>
<div class="dplayer-controller-mask"></div>
<div class="dplayer-controller">
    <div class="dplayer-icons dplayer-comment-box">
        <button class="dplayer-icon dplayer-comment-setting-icon" data-balloon="`,h+=b(E("setting")),h+=`" data-balloon-pos="up">
            <span class="dplayer-icon-content">`,h+=C.pallette,h+=`</span>
        </button>
        <div class="dplayer-comment-setting-box">
            <div class="dplayer-comment-setting-color">
                <div class="dplayer-comment-setting-title">`,h+=b(E("set-danmaku-color")),h+=`</div>
                <label>
                    <input type="radio" name="dplayer-danmaku-color-`,h+=b(w),h+=`" value="#fff" checked>
                    <span style="background: #fff;"></span>
                </label>
                <label>
                    <input type="radio" name="dplayer-danmaku-color-`,h+=b(w),h+=`" value="#e54256">
                    <span style="background: #e54256"></span>
                </label>
                <label>
                    <input type="radio" name="dplayer-danmaku-color-`,h+=b(w),h+=`" value="#ffe133">
                    <span style="background: #ffe133"></span>
                </label>
                <label>
                    <input type="radio" name="dplayer-danmaku-color-`,h+=b(w),h+=`" value="#64DD17">
                    <span style="background: #64DD17"></span>
                </label>
                <label>
                    <input type="radio" name="dplayer-danmaku-color-`,h+=b(w),h+=`" value="#39ccff">
                    <span style="background: #39ccff"></span>
                </label>
                <label>
                    <input type="radio" name="dplayer-danmaku-color-`,h+=b(w),h+=`" value="#D500F9">
                    <span style="background: #D500F9"></span>
                </label>
            </div>
            <div class="dplayer-comment-setting-type">
                <div class="dplayer-comment-setting-title">`,h+=b(E("set-danmaku-type")),h+=`</div>
                <label>
                    <input type="radio" name="dplayer-danmaku-type-`,h+=b(w),h+=`" value="1">
                    <span>`,h+=b(E("top")),h+=`</span>
                </label>
                <label>
                    <input type="radio" name="dplayer-danmaku-type-`,h+=b(w),h+=`" value="0" checked>
                    <span>`,h+=b(E("rolling")),h+=`</span>
                </label>
                <label>
                    <input type="radio" name="dplayer-danmaku-type-`,h+=b(w),h+=`" value="2">
                    <span>`,h+=b(E("bottom")),h+=`</span>
                </label>
            </div>
        </div>
        <input class="dplayer-comment-input" type="text" placeholder="`,h+=b(E("input-danmaku-enter")),h+=`" maxlength="30">
        <button class="dplayer-icon dplayer-send-icon" data-balloon="`,h+=b(E("send")),h+=`" data-balloon-pos="up">
            <span class="dplayer-icon-content">`,h+=C.send,h+=`</span>
        </button>
    </div>
    <div class="dplayer-icons dplayer-icons-left">
        <button class="dplayer-icon dplayer-play-icon">
            <span class="dplayer-icon-content">`,h+=C.play,h+=`</span>
        </button>
        <div class="dplayer-volume">
            <button class="dplayer-icon dplayer-volume-icon">
                <span class="dplayer-icon-content">`,h+=C.volumeDown,h+=`</span>
            </button>
            <div class="dplayer-volume-bar-wrap" data-balloon-pos="up">
                <div class="dplayer-volume-bar">
                    <div class="dplayer-volume-bar-inner" style="background: `,h+=b(y.theme),h+=`;">
                        <span class="dplayer-thumb" style="background: `,h+=b(y.theme),h+=`"></span>
                    </div>
                </div>
            </div>
        </div>
        <span class="dplayer-time">
            <span class="dplayer-ptime">0:00</span> /
            <span class="dplayer-dtime">0:00</span>
        </span>
        `,y.live&&(h+=`
        <span class="dplayer-live-badge"><span class="dplayer-live-dot" style="background: `,h+=b(y.theme),h+=';"></span>',h+=b(E("live")),h+=`</span>
        `),h+=`
    </div>
    <div class="dplayer-icons dplayer-icons-right">
        `,y.video.quality&&(h+=`
        <div class="dplayer-quality">
            <button class="dplayer-icon dplayer-quality-icon">`,h+=b(y.video.quality[y.video.defaultQuality].name),h+=`</button>
            <div class="dplayer-quality-mask">
                <div class="dplayer-quality-list">
                `,R(y.video.quality,function(_,P){h+=`
                    <div class="dplayer-quality-item" data-index="`,h+=b(P),h+='">',h+=b(_.name),h+=`</div>
                `}),h+=`
                </div>
            </div>
        </div>
        `),h+=`
        `,y.screenshot&&(h+=`
        <div class="dplayer-icon dplayer-camera-icon" data-balloon="`,h+=b(E("screenshot")),h+=`" data-balloon-pos="up">
            <span class="dplayer-icon-content">`,h+=C.camera,h+=`</span>
        </div>
        `),h+=`
        `,y.airplay&&(h+=`
        <div class="dplayer-icon dplayer-airplay-icon" data-balloon="`,h+=b(E("airplay")),h+=`" data-balloon-pos="up">
            <span class="dplayer-icon-content">`,h+=C.airplay,h+=`</span>
        </div>
        `),h+=`
        `,y.chromecast&&(h+=`
        <div class="dplayer-icon dplayer-chromecast-icon" data-balloon="`,h+=b(E("chromecast")),h+=`" data-balloon-pos="up">
            <span class="dplayer-icon-content">`,h+=C.chromecast,h+=`</span>
        </div>
        `),h+=`
        <div class="dplayer-comment">
            <button class="dplayer-icon dplayer-comment-icon" data-balloon="`,h+=b(E("send-danmaku")),h+=`" data-balloon-pos="up">
                <span class="dplayer-icon-content">`,h+=C.comment,h+=`</span>
            </button>
        </div>
        `,y.subtitle&&(h+=`
        `,typeof y.subtitle.url=="string"?(h+=`
        <div class="dplayer-subtitle-btn">
            <button class="dplayer-icon dplayer-subtitle-icon" data-balloon="`,h+=b(E("hide-subs")),h+=`" data-balloon-pos="up">
                <span class="dplayer-icon-content">`,h+=C.subtitle,h+=`</span>
            </button>
        </div>
        `):(h+=`
        <div class="dplayer-subtitles">
            <button class="dplayer-icon dplayer-subtitles-icon" data-balloon="`,h+=b(E("subtitle")),h+=`" data-balloon-pos="up">
                <span class="dplayer-icon-content">`,h+=C.subtitle,h+=`</span>
            </button>
            <div class="dplayer-subtitles-box">
                <div class="dplayer-subtitles-panel">
                    `,R(y.subtitle.url,function(_,P){h+=`
                        <div class="dplayer-subtitles-item" data-subtitle="`,h+=b(_.url),h+=`">
                            <!-- if lang, show tran(lang). if lang and name, show name + (tran(lang)). if name, show name. off option use lang for translation. -->
                            <span class="dplayer-label">`,h+=b(_.lang?_.name?_.name+" ("+E(_.lang)+")":E(_.lang):_.name),h+=`</span>
                        </div>
                    `}),h+=`
                </div>
            </div>
        </div>
        `),h+=`
        `),h+=`
        <div class="dplayer-setting">
            <button class="dplayer-icon dplayer-setting-icon" data-balloon="`,h+=b(E("setting")),h+=`" data-balloon-pos="up">
                <span class="dplayer-icon-content">`,h+=C.setting,h+=`</span>
            </button>
            <div class="dplayer-setting-box">
                <div class="dplayer-setting-origin-panel">
                    <div class="dplayer-setting-item dplayer-setting-speed">
                        <span class="dplayer-label">`,h+=b(E("speed")),h+=`</span>
                        <div class="dplayer-toggle">`,h+=C.right,h+=`</div>
                    </div>
                    <div class="dplayer-setting-item dplayer-setting-loop">
                        <span class="dplayer-label">`,h+=b(E("loop")),h+=`</span>
                        <div class="dplayer-toggle">
                            <input class="dplayer-toggle-setting-input" type="checkbox" name="dplayer-toggle">
                            <label for="dplayer-toggle"></label>
                        </div>
                    </div>
                    <div class="dplayer-setting-item dplayer-setting-showdan">
                        <span class="dplayer-label">`,h+=b(E("show-danmaku")),h+=`</span>
                        <div class="dplayer-toggle">
                            <input class="dplayer-showdan-setting-input" type="checkbox" name="dplayer-toggle-dan">
                            <label for="dplayer-toggle-dan"></label>
                        </div>
                    </div>
                    <div class="dplayer-setting-item dplayer-setting-danunlimit">
                        <span class="dplayer-label">`,h+=b(E("unlimited-danmaku")),h+=`</span>
                        <div class="dplayer-toggle">
                            <input class="dplayer-danunlimit-setting-input" type="checkbox" name="dplayer-toggle-danunlimit">
                            <label for="dplayer-toggle-danunlimit"></label>
                        </div>
                    </div>
                    <div class="dplayer-setting-item dplayer-setting-danmaku">
                        <span class="dplayer-label">`,h+=b(E("opacity-danmaku")),h+=`</span>
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
                    `,R(y.playbackSpeed,function(_,P){h+=`
                        <div class="dplayer-setting-speed-item" data-speed="`,h+=b(_),h+=`">
                            <span class="dplayer-label">`,h+=b(_===1?E("normal"):_),h+=`</span>
                        </div>
                    `}),h+=`
                </div>
            </div>
        </div>
        <div class="dplayer-full">
            <button class="dplayer-icon dplayer-full-in-icon" data-balloon="`,h+=b(E("web-fullscreen")),h+=`" data-balloon-pos="up">
                <span class="dplayer-icon-content">`,h+=C.fullWeb,h+=`</span>
            </button>
            <button class="dplayer-icon dplayer-full-icon" data-balloon="`,h+=b(E("fullscreen")),h+=`" data-balloon-pos="up">
                <span class="dplayer-icon-content">`,h+=C.full,h+=`</span>
            </button>
        </div>
    </div>
    <div class="dplayer-bar-wrap">
        <div class="dplayer-bar-time hidden">00:00</div>
        <div class="dplayer-bar-preview"></div>
        <div class="dplayer-bar">
            <div class="dplayer-loaded" style="width: 0;"></div>
            <div class="dplayer-played" style="width: 0; background: `,h+=b(y.theme),h+=`">
                <span class="dplayer-thumb" style="background: `,h+=b(y.theme),h+=`"></span>
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
    `,y.danmaku&&(h+=`
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
    `,R(y.contextmenu,function(_,P){h+=`
        <div class="dplayer-menu-item">
            <a`,_.link&&(h+=' target="_blank"'),h+=' href="',h+=b(_.link||"javascript:void(0);"),h+='">',_.key&&(h+=" ",h+=b(E(_.key))),_.text&&(h+=" ",h+=b(_.text)),h+=`</a>
        </div>
    `}),h+=`
</div>
<div class="dplayer-notice-list"></div>
<button class="dplayer-mobile-play">
    `,h+=C.play,h+=`
</button>`}},568:(o,a,l)=>{var c=l(471);o.exports=function(d){var u="",h=(d=d||{}).enableSubtitle,g=d.subtitle,y=d.current,b=d.airplay,E=d.pic,C=c.$escape,w=d.screenshot,R=d.preload,_=d.url;return h=g&&g.type==="webvtt",u+=`
<video
    class="dplayer-video `,y&&(u+="dplayer-video-current"),u+=`"
    webkit-playsinline
    `,b&&(u+=' x-webkit-airplay="allow" '),u+=`
    playsinline
    `,E&&(u+='poster="',u+=C(E),u+='"'),u+=`
    `,(w||h)&&(u+='crossorigin="anonymous"'),u+=`
    `,R&&(u+='preload="',u+=C(R),u+='"'),u+=`
    `,b?u+=`
    nosrc
    `:_&&(u+=`
    src="`,u+=C(_),u+=`"
    `),u+=`
    >
    `,b&&(u+=`
    <source src="`,u+=C(_),u+=`">
    `),u+=`
    `,h&&(u+=`
    <track class="dplayer-subtrack" kind="metadata" default src="`,u+=C(typeof g.url=="string"?g.url:g.url[g.index].url),u+=`"></track>
    `),u+`
</video>`}},49:(o,a,l)=>{l.d(a,{Z:()=>g});var c=l(415),d=l.n(c),u=l(352),h=l.n(u)()(d());h.push([o.id,`:root {
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
`],sourceRoot:""}]);const g=h},685:(o,a,l)=>{l.d(a,{Z:()=>R});var c=l(415),d=l.n(c),u=l(352),h=l.n(u),g=l(49),y=l(80),b=l.n(y),E=new URL(l(831),l.b),C=h()(d());C.i(g.Z);var w=b()(E);C.push([o.id,`@keyframes my-face {
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
  background: url(`+w+`) repeat-x bottom;
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
}`],sourceRoot:""}]);const R=C},856:o=>{var a=[];function l(u){for(var h=-1,g=0;g<a.length;g++)if(a[g].identifier===u){h=g;break}return h}function c(u,h){for(var g={},y=[],b=0;b<u.length;b++){var E=u[b],C=h.base?E[0]+h.base:E[0],w=g[C]||0,R="".concat(C," ").concat(w);g[C]=w+1;var _=l(R),P={css:E[1],media:E[2],sourceMap:E[3],supports:E[4],layer:E[5]};if(_!==-1)a[_].references++,a[_].updater(P);else{var H=d(P,h);h.byIndex=b,a.splice(b,0,{identifier:R,updater:H,references:1})}y.push(R)}return y}function d(u,h){var g=h.domAPI(h);return g.update(u),function(y){if(y){if(y.css===u.css&&y.media===u.media&&y.sourceMap===u.sourceMap&&y.supports===u.supports&&y.layer===u.layer)return;g.update(u=y)}else g.remove()}}o.exports=function(u,h){var g=c(u=u||[],h=h||{});return function(y){y=y||[];for(var b=0;b<g.length;b++){var E=l(g[b]);a[E].references--}for(var C=c(y,h),w=0;w<g.length;w++){var R=l(g[w]);a[R].references===0&&(a[R].updater(),a.splice(R,1))}g=C}}},370:o=>{var a={};o.exports=function(l,c){var d=function(u){if(a[u]===void 0){var h=document.querySelector(u);if(window.HTMLIFrameElement&&h instanceof window.HTMLIFrameElement)try{h=h.contentDocument.head}catch{h=null}a[u]=h}return a[u]}(l);if(!d)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");d.appendChild(c)}},278:o=>{o.exports=function(a){var l=document.createElement("style");return a.setAttributes(l,a.attributes),a.insert(l,a.options),l}},458:(o,a,l)=>{o.exports=function(c){var d=l.nc;d&&c.setAttribute("nonce",d)}},470:o=>{o.exports=function(a){var l=a.insertStyleElement(a);return{update:function(c){(function(d,u,h){var g="";h.supports&&(g+="@supports (".concat(h.supports,") {")),h.media&&(g+="@media ".concat(h.media," {"));var y=h.layer!==void 0;y&&(g+="@layer".concat(h.layer.length>0?" ".concat(h.layer):""," {")),g+=h.css,y&&(g+="}"),h.media&&(g+="}"),h.supports&&(g+="}");var b=h.sourceMap;b&&typeof btoa<"u"&&(g+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(b))))," */")),u.styleTagTransform(g,d,u.options)})(l,a,c)},remove:function(){(function(c){if(c.parentNode===null)return!1;c.parentNode.removeChild(c)})(l)}}}},488:o=>{o.exports=function(a,l){if(l.styleSheet)l.styleSheet.cssText=a;else{for(;l.firstChild;)l.removeChild(l.firstChild);l.appendChild(document.createTextNode(a))}}},251:o=>{o.exports='<svg viewBox="0 0 288 288" xmlns="http://www.w3.org/2000/svg"><path d="M288 90v96c0 20-16 36-36 36h-10c-16 0-16-24 0-24h10c7 0 12-5 12-12V90c0-7-5-12-12-12H36c-7 0-12 5-12 12v96c0 7 5 12 12 12h10c16 0 16 24 0 24H36c-20 0-36-16-36-36V90c0-20 16-36 36-36h216c20 0 36 16 36 36zm-120 62l48 68c14 20 1 38-20 38H92c-21 0-34-18-20-38l48-68c13-18 35-18 48 0z"></path></svg>'},113:o=>{o.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M16 23c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6-2.691 6-6 6zM16 13c-2.206 0-4 1.794-4 4s1.794 4 4 4c2.206 0 4-1.794 4-4s-1.794-4-4-4zM27 28h-22c-1.654 0-3-1.346-3-3v-16c0-1.654 1.346-3 3-3h3c0.552 0 1 0.448 1 1s-0.448 1-1 1h-3c-0.551 0-1 0.449-1 1v16c0 0.552 0.449 1 1 1h22c0.552 0 1-0.448 1-1v-16c0-0.551-0.448-1-1-1h-11c-0.552 0-1-0.448-1-1s0.448-1 1-1h11c1.654 0 3 1.346 3 3v16c0 1.654-1.346 3-3 3zM24 10.5c0 0.828 0.672 1.5 1.5 1.5s1.5-0.672 1.5-1.5c0-0.828-0.672-1.5-1.5-1.5s-1.5 0.672-1.5 1.5zM15 4c0 0.552-0.448 1-1 1h-4c-0.552 0-1-0.448-1-1v0c0-0.552 0.448-1 1-1h4c0.552 0 1 0.448 1 1v0z"></path></svg>'},193:o=>{o.exports='<svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="chromecast" class="svg-inline--fa fa-chromecast fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M447.8,64H64c-23.6,0-42.7,19.1-42.7,42.7v63.9H64v-63.9h383.8v298.6H298.6V448H448c23.6,0,42.7-19.1,42.7-42.7V106.7 C490.7,83.1,471.4,64,447.8,64z M21.3,383.6L21.3,383.6l0,63.9h63.9C85.2,412.2,56.6,383.6,21.3,383.6L21.3,383.6z M21.3,298.6V341 c58.9,0,106.6,48.1,106.6,107h42.7C170.7,365.6,103.7,298.7,21.3,298.6z M213.4,448h42.7c-0.5-129.5-105.3-234.3-234.8-234.6l0,42.4 C127.3,255.6,213.3,342,213.4,448z"></path></svg>'},338:o=>{o.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M27.090 0.131h-22.731c-2.354 0-4.262 1.839-4.262 4.109v16.401c0 2.269 1.908 4.109 4.262 4.109h4.262v-2.706h8.469l-8.853 8.135 1.579 1.451 7.487-6.88h9.787c2.353 0 4.262-1.84 4.262-4.109v-16.401c0-2.27-1.909-4.109-4.262-4.109v0zM28.511 19.304c0 1.512-1.272 2.738-2.841 2.738h-8.425l-0.076-0.070-0.076 0.070h-11.311c-1.569 0-2.841-1.226-2.841-2.738v-13.696c0-1.513 1.272-2.739 2.841-2.739h19.889c1.569 0 2.841-0.142 2.841 1.37v15.064z"></path></svg>'},807:o=>{o.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M27.128 0.38h-22.553c-2.336 0-4.229 1.825-4.229 4.076v16.273c0 2.251 1.893 4.076 4.229 4.076h4.229v-2.685h8.403l-8.784 8.072 1.566 1.44 7.429-6.827h9.71c2.335 0 4.229-1.825 4.229-4.076v-16.273c0-2.252-1.894-4.076-4.229-4.076zM28.538 19.403c0 1.5-1.262 2.717-2.819 2.717h-8.36l-0.076-0.070-0.076 0.070h-11.223c-1.557 0-2.819-1.217-2.819-2.717v-13.589c0-1.501 1.262-2.718 2.819-2.718h19.734c1.557 0 2.819-0.141 2.819 1.359v14.947zM9.206 10.557c-1.222 0-2.215 0.911-2.215 2.036s0.992 2.035 2.215 2.035c1.224 0 2.216-0.911 2.216-2.035s-0.992-2.036-2.216-2.036zM22.496 10.557c-1.224 0-2.215 0.911-2.215 2.036s0.991 2.035 2.215 2.035c1.224 0 2.215-0.911 2.215-2.035s-0.991-2.036-2.215-2.036zM15.852 10.557c-1.224 0-2.215 0.911-2.215 2.036s0.991 2.035 2.215 2.035c1.222 0 2.215-0.911 2.215-2.035s-0.992-2.036-2.215-2.036z"></path></svg>'},300:o=>{o.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 33"><path d="M24.965 24.38h-18.132c-1.366 0-2.478-1.113-2.478-2.478v-11.806c0-1.364 1.111-2.478 2.478-2.478h18.132c1.366 0 2.478 1.113 2.478 2.478v11.806c0 1.364-1.11 2.478-2.478 2.478zM6.833 10.097v11.806h18.134l-0.002-11.806h-18.132zM2.478 28.928h5.952c0.684 0 1.238-0.554 1.238-1.239 0-0.684-0.554-1.238-1.238-1.238h-5.952v-5.802c0-0.684-0.554-1.239-1.238-1.239s-1.239 0.556-1.239 1.239v5.802c0 1.365 1.111 2.478 2.478 2.478zM30.761 19.412c-0.684 0-1.238 0.554-1.238 1.238v5.801h-5.951c-0.686 0-1.239 0.554-1.239 1.238 0 0.686 0.554 1.239 1.239 1.239h5.951c1.366 0 2.478-1.111 2.478-2.478v-5.801c0-0.683-0.554-1.238-1.239-1.238zM0 5.55v5.802c0 0.683 0.554 1.238 1.238 1.238s1.238-0.555 1.238-1.238v-5.802h5.952c0.684 0 1.238-0.554 1.238-1.238s-0.554-1.238-1.238-1.238h-5.951c-1.366-0.001-2.478 1.111-2.478 2.476zM32 11.35v-5.801c0-1.365-1.11-2.478-2.478-2.478h-5.951c-0.686 0-1.239 0.554-1.239 1.238s0.554 1.238 1.239 1.238h5.951v5.801c0 0.683 0.554 1.237 1.238 1.237 0.686 0.002 1.239-0.553 1.239-1.236z"></path></svg>'},574:o=>{o.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 33"><path d="M6.667 28h-5.333c-0.8 0-1.333-0.533-1.333-1.333v-5.333c0-0.8 0.533-1.333 1.333-1.333s1.333 0.533 1.333 1.333v4h4c0.8 0 1.333 0.533 1.333 1.333s-0.533 1.333-1.333 1.333zM30.667 28h-5.333c-0.8 0-1.333-0.533-1.333-1.333s0.533-1.333 1.333-1.333h4v-4c0-0.8 0.533-1.333 1.333-1.333s1.333 0.533 1.333 1.333v5.333c0 0.8-0.533 1.333-1.333 1.333zM30.667 12c-0.8 0-1.333-0.533-1.333-1.333v-4h-4c-0.8 0-1.333-0.533-1.333-1.333s0.533-1.333 1.333-1.333h5.333c0.8 0 1.333 0.533 1.333 1.333v5.333c0 0.8-0.533 1.333-1.333 1.333zM1.333 12c-0.8 0-1.333-0.533-1.333-1.333v-5.333c0-0.8 0.533-1.333 1.333-1.333h5.333c0.8 0 1.333 0.533 1.333 1.333s-0.533 1.333-1.333 1.333h-4v4c0 0.8-0.533 1.333-1.333 1.333z"></path></svg>'},182:o=>{o.exports='<svg version="1.1" viewBox="0 0 22 22"><svg x="7" y="1"><circle class="diplayer-loading-dot diplayer-loading-dot-0" cx="4" cy="4" r="2"></circle></svg><svg x="11" y="3"><circle class="diplayer-loading-dot diplayer-loading-dot-1" cx="4" cy="4" r="2"></circle></svg><svg x="13" y="7"><circle class="diplayer-loading-dot diplayer-loading-dot-2" cx="4" cy="4" r="2"></circle></svg><svg x="11" y="11"><circle class="diplayer-loading-dot diplayer-loading-dot-3" cx="4" cy="4" r="2"></circle></svg><svg x="7" y="13"><circle class="diplayer-loading-dot diplayer-loading-dot-4" cx="4" cy="4" r="2"></circle></svg><svg x="3" y="11"><circle class="diplayer-loading-dot diplayer-loading-dot-5" cx="4" cy="4" r="2"></circle></svg><svg x="1" y="7"><circle class="diplayer-loading-dot diplayer-loading-dot-6" cx="4" cy="4" r="2"></circle></svg><svg x="3" y="3"><circle class="diplayer-loading-dot diplayer-loading-dot-7" cx="4" cy="4" r="2"></circle></svg></svg>'},965:o=>{o.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M19.357 2.88c1.749 0 3.366 0.316 4.851 0.946 1.485 0.632 2.768 1.474 3.845 2.533s1.922 2.279 2.532 3.661c0.611 1.383 0.915 2.829 0.915 4.334 0 1.425-0.304 2.847-0.915 4.271-0.611 1.425-1.587 2.767-2.928 4.028-0.855 0.813-1.811 1.607-2.869 2.38s-2.136 1.465-3.233 2.075c-1.099 0.61-2.198 1.098-3.296 1.465-1.098 0.366-2.115 0.549-3.051 0.549-1.343 0-2.441-0.438-3.296-1.311-0.854-0.876-1.281-2.41-1.281-4.608 0-0.366 0.020-0.773 0.060-1.221s0.062-0.895 0.062-1.343c0-0.773-0.183-1.353-0.55-1.738-0.366-0.387-0.793-0.58-1.281-0.58-0.652 0-1.21 0.295-1.678 0.886s-0.926 1.23-1.373 1.921c-0.447 0.693-0.905 1.334-1.372 1.923s-1.028 0.886-1.679 0.886c-0.529 0-1.048-0.427-1.556-1.282s-0.763-2.259-0.763-4.212c0-2.197 0.529-4.241 1.587-6.133s2.462-3.529 4.21-4.912c1.75-1.383 3.762-2.471 6.041-3.264 2.277-0.796 4.617-1.212 7.018-1.253zM7.334 15.817c0.569 0 1.047-0.204 1.434-0.611s0.579-0.875 0.579-1.404c0-0.569-0.193-1.047-0.579-1.434s-0.864-0.579-1.434-0.579c-0.529 0-0.987 0.193-1.373 0.579s-0.58 0.864-0.58 1.434c0 0.53 0.194 0.998 0.58 1.404 0.388 0.407 0.845 0.611 1.373 0.611zM12.216 11.79c0.691 0 1.292-0.254 1.8-0.763s0.762-1.107 0.762-1.8c0-0.732-0.255-1.343-0.762-1.831-0.509-0.489-1.109-0.732-1.8-0.732-0.732 0-1.342 0.244-1.831 0.732-0.488 0.488-0.732 1.098-0.732 1.831 0 0.693 0.244 1.292 0.732 1.8s1.099 0.763 1.831 0.763zM16.366 25.947c0.692 0 1.282-0.214 1.77-0.64s0.732-0.987 0.732-1.678-0.244-1.261-0.732-1.709c-0.489-0.448-1.078-0.671-1.77-0.671-0.65 0-1.21 0.223-1.678 0.671s-0.702 1.018-0.702 1.709c0 0.692 0.234 1.25 0.702 1.678s1.027 0.64 1.678 0.64zM19.113 9.592c0.651 0 1.129-0.203 1.433-0.611 0.305-0.406 0.459-0.874 0.459-1.404 0-0.488-0.154-0.947-0.459-1.373-0.304-0.427-0.782-0.641-1.433-0.641-0.529 0-1.008 0.193-1.434 0.58s-0.64 0.865-0.64 1.434c0 0.571 0.213 1.049 0.64 1.434 0.427 0.389 0.905 0.581 1.434 0.581zM24.848 12.826c0.57 0 1.067-0.213 1.495-0.64 0.427-0.427 0.64-0.947 0.64-1.556 0-0.57-0.214-1.068-0.64-1.495-0.428-0.427-0.927-0.64-1.495-0.64-0.611 0-1.129 0.213-1.555 0.64-0.428 0.427-0.642 0.926-0.642 1.495 0 0.611 0.213 1.129 0.642 1.556s0.947 0.64 1.555 0.64z"></path></svg>'},74:o=>{o.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 17 32"><path d="M14.080 4.8q2.88 0 2.88 2.048v18.24q0 2.112-2.88 2.112t-2.88-2.112v-18.24q0-2.048 2.88-2.048zM2.88 4.8q2.88 0 2.88 2.048v18.24q0 2.112-2.88 2.112t-2.88-2.112v-18.24q0-2.048 2.88-2.048z"></path></svg>'},730:o=>{o.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 16 32"><path d="M15.552 15.168q0.448 0.32 0.448 0.832 0 0.448-0.448 0.768l-13.696 8.512q-0.768 0.512-1.312 0.192t-0.544-1.28v-16.448q0-0.96 0.544-1.28t1.312 0.192z"></path></svg>'},428:o=>{o.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M22 16l-10.105-10.6-1.895 1.987 8.211 8.613-8.211 8.612 1.895 1.988 8.211-8.613z"></path></svg>'},254:o=>{o.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M13.725 30l3.9-5.325-3.9-1.125v6.45zM0 17.5l11.050 3.35 13.6-11.55-10.55 12.425 11.8 3.65 6.1-23.375-32 15.5z"></path></svg>'},934:o=>{o.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 28"><path d="M28.633 17.104c0.035 0.21 0.026 0.463-0.026 0.76s-0.14 0.598-0.262 0.904c-0.122 0.306-0.271 0.581-0.445 0.825s-0.367 0.419-0.576 0.524c-0.209 0.105-0.393 0.157-0.55 0.157s-0.332-0.035-0.524-0.105c-0.175-0.052-0.393-0.1-0.655-0.144s-0.528-0.052-0.799-0.026c-0.271 0.026-0.541 0.083-0.812 0.17s-0.502 0.236-0.694 0.445c-0.419 0.437-0.664 0.934-0.734 1.493s0.009 1.092 0.236 1.598c0.175 0.349 0.148 0.699-0.079 1.048-0.105 0.14-0.271 0.284-0.498 0.432s-0.476 0.284-0.747 0.406-0.555 0.218-0.851 0.288c-0.297 0.070-0.559 0.105-0.786 0.105-0.157 0-0.306-0.061-0.445-0.183s-0.236-0.253-0.288-0.393h-0.026c-0.192-0.541-0.52-1.009-0.982-1.402s-1-0.589-1.611-0.589c-0.594 0-1.131 0.197-1.611 0.589s-0.816 0.851-1.009 1.375c-0.087 0.21-0.218 0.362-0.393 0.458s-0.367 0.144-0.576 0.144c-0.244 0-0.52-0.044-0.825-0.131s-0.611-0.197-0.917-0.327c-0.306-0.131-0.581-0.284-0.825-0.458s-0.428-0.349-0.55-0.524c-0.087-0.122-0.135-0.266-0.144-0.432s0.057-0.397 0.197-0.694c0.192-0.402 0.266-0.86 0.223-1.375s-0.266-0.991-0.668-1.428c-0.244-0.262-0.541-0.432-0.891-0.511s-0.681-0.109-0.995-0.092c-0.367 0.017-0.742 0.087-1.127 0.21-0.244 0.070-0.489 0.052-0.734-0.052-0.192-0.070-0.371-0.231-0.537-0.485s-0.314-0.533-0.445-0.838c-0.131-0.306-0.231-0.62-0.301-0.943s-0.087-0.59-0.052-0.799c0.052-0.384 0.227-0.629 0.524-0.734 0.524-0.21 0.995-0.555 1.415-1.035s0.629-1.017 0.629-1.611c0-0.611-0.21-1.144-0.629-1.598s-0.891-0.786-1.415-0.996c-0.157-0.052-0.288-0.179-0.393-0.38s-0.157-0.406-0.157-0.616c0-0.227 0.035-0.48 0.105-0.76s0.162-0.55 0.275-0.812 0.244-0.502 0.393-0.72c0.148-0.218 0.31-0.38 0.485-0.485 0.14-0.087 0.275-0.122 0.406-0.105s0.275 0.052 0.432 0.105c0.524 0.21 1.070 0.275 1.637 0.197s1.070-0.327 1.506-0.747c0.21-0.209 0.362-0.467 0.458-0.773s0.157-0.607 0.183-0.904c0.026-0.297 0.026-0.568 0-0.812s-0.048-0.419-0.065-0.524c-0.035-0.105-0.066-0.227-0.092-0.367s-0.013-0.262 0.039-0.367c0.105-0.244 0.293-0.458 0.563-0.642s0.563-0.336 0.878-0.458c0.314-0.122 0.62-0.214 0.917-0.275s0.533-0.092 0.707-0.092c0.227 0 0.406 0.074 0.537 0.223s0.223 0.301 0.275 0.458c0.192 0.471 0.507 0.886 0.943 1.244s0.952 0.537 1.546 0.537c0.611 0 1.153-0.17 1.624-0.511s0.803-0.773 0.996-1.297c0.070-0.14 0.179-0.284 0.327-0.432s0.301-0.223 0.458-0.223c0.244 0 0.511 0.035 0.799 0.105s0.572 0.166 0.851 0.288c0.279 0.122 0.537 0.279 0.773 0.472s0.423 0.402 0.563 0.629c0.087 0.14 0.113 0.293 0.079 0.458s-0.070 0.284-0.105 0.354c-0.227 0.506-0.297 1.039-0.21 1.598s0.341 1.048 0.76 1.467c0.419 0.419 0.934 0.651 1.546 0.694s1.179-0.057 1.703-0.301c0.14-0.087 0.31-0.122 0.511-0.105s0.371 0.096 0.511 0.236c0.262 0.244 0.493 0.616 0.694 1.113s0.336 1 0.406 1.506c0.035 0.297-0.013 0.528-0.144 0.694s-0.266 0.275-0.406 0.327c-0.542 0.192-1.004 0.528-1.388 1.009s-0.576 1.026-0.576 1.637c0 0.594 0.162 1.113 0.485 1.559s0.747 0.764 1.27 0.956c0.122 0.070 0.227 0.14 0.314 0.21 0.192 0.157 0.323 0.358 0.393 0.602v0zM16.451 19.462c0.786 0 1.528-0.149 2.227-0.445s1.305-0.707 1.821-1.231c0.515-0.524 0.921-1.131 1.218-1.821s0.445-1.428 0.445-2.214c0-0.786-0.148-1.524-0.445-2.214s-0.703-1.292-1.218-1.808c-0.515-0.515-1.122-0.921-1.821-1.218s-1.441-0.445-2.227-0.445c-0.786 0-1.524 0.148-2.214 0.445s-1.292 0.703-1.808 1.218c-0.515 0.515-0.921 1.118-1.218 1.808s-0.445 1.428-0.445 2.214c0 0.786 0.149 1.524 0.445 2.214s0.703 1.297 1.218 1.821c0.515 0.524 1.118 0.934 1.808 1.231s1.428 0.445 2.214 0.445v0z"></path></svg>'},410:o=>{o.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M26.667 5.333h-21.333c-0 0-0.001 0-0.001 0-1.472 0-2.666 1.194-2.666 2.666 0 0 0 0.001 0 0.001v-0 16c0 0 0 0.001 0 0.001 0 1.472 1.194 2.666 2.666 2.666 0 0 0.001 0 0.001 0h21.333c0 0 0.001 0 0.001 0 1.472 0 2.666-1.194 2.666-2.666 0-0 0-0.001 0-0.001v0-16c0-0 0-0.001 0-0.001 0-1.472-1.194-2.666-2.666-2.666-0 0-0.001 0-0.001 0h0zM5.333 16h5.333v2.667h-5.333v-2.667zM18.667 24h-13.333v-2.667h13.333v2.667zM26.667 24h-5.333v-2.667h5.333v2.667zM26.667 18.667h-13.333v-2.667h13.333v2.667z"></path></svg>'},644:o=>{o.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 21 32"><path d="M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8zM20.576 16q0 1.344-0.768 2.528t-2.016 1.664q-0.16 0.096-0.448 0.096-0.448 0-0.8-0.32t-0.32-0.832q0-0.384 0.192-0.64t0.544-0.448 0.608-0.384 0.512-0.64 0.192-1.024-0.192-1.024-0.512-0.64-0.608-0.384-0.544-0.448-0.192-0.64q0-0.48 0.32-0.832t0.8-0.32q0.288 0 0.448 0.096 1.248 0.48 2.016 1.664t0.768 2.528z"></path></svg>'},324:o=>{o.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 21 32"><path d="M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8z"></path></svg>'},437:o=>{o.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 21 32"><path d="M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8zM20.576 16q0 1.344-0.768 2.528t-2.016 1.664q-0.16 0.096-0.448 0.096-0.448 0-0.8-0.32t-0.32-0.832q0-0.384 0.192-0.64t0.544-0.448 0.608-0.384 0.512-0.64 0.192-1.024-0.192-1.024-0.512-0.64-0.608-0.384-0.544-0.448-0.192-0.64q0-0.48 0.32-0.832t0.8-0.32q0.288 0 0.448 0.096 1.248 0.48 2.016 1.664t0.768 2.528zM25.152 16q0 2.72-1.536 5.056t-4 3.36q-0.256 0.096-0.448 0.096-0.48 0-0.832-0.352t-0.32-0.8q0-0.704 0.672-1.056 1.024-0.512 1.376-0.8 1.312-0.96 2.048-2.4t0.736-3.104-0.736-3.104-2.048-2.4q-0.352-0.288-1.376-0.8-0.672-0.352-0.672-1.056 0-0.448 0.32-0.8t0.8-0.352q0.224 0 0.48 0.096 2.496 1.056 4 3.36t1.536 5.056z"></path></svg>'},897:(o,a,l)=>{var c=typeof self<"u"?self:typeof window<"u"?window:l.g!==void 0?l.g:{},d=Object.create(c),u=/["&'<>]/;function h(g){return typeof g!="string"&&(g=g==null?"":typeof g=="function"?h(g.call(g)):JSON.stringify(g)),g}d.$escape=function(g){return function(y){var b=""+y,E=u.exec(b);if(!E)return y;var C="",w=void 0,R=void 0,_=void 0;for(w=E.index,R=0;w<b.length;w++){switch(b.charCodeAt(w)){case 34:_="&#34;";break;case 38:_="&#38;";break;case 39:_="&#39;";break;case 60:_="&#60;";break;case 62:_="&#62;";break;default:continue}R!==w&&(C+=b.substring(R,w)),R=w+1,C+=_}return R!==w?C+b.substring(R,w):C}(h(g))},d.$each=function(g,y){if(Array.isArray(g))for(var b=0,E=g.length;b<E;b++)y(g[b],b);else for(var C in g)y(g[C],C)},o.exports=d},471:(o,a,l)=>{o.exports=l(897)},352:o=>{o.exports=function(a){var l=[];return l.toString=function(){return this.map(function(c){var d="",u=c[5]!==void 0;return c[4]&&(d+="@supports (".concat(c[4],") {")),c[2]&&(d+="@media ".concat(c[2]," {")),u&&(d+="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {")),d+=a(c),u&&(d+="}"),c[2]&&(d+="}"),c[4]&&(d+="}"),d}).join("")},l.i=function(c,d,u,h,g){typeof c=="string"&&(c=[[null,c,void 0]]);var y={};if(u)for(var b=0;b<this.length;b++){var E=this[b][0];E!=null&&(y[E]=!0)}for(var C=0;C<c.length;C++){var w=[].concat(c[C]);u&&y[w[0]]||(g!==void 0&&(w[5]===void 0||(w[1]="@layer".concat(w[5].length>0?" ".concat(w[5]):""," {").concat(w[1],"}")),w[5]=g),d&&(w[2]&&(w[1]="@media ".concat(w[2]," {").concat(w[1],"}")),w[2]=d),h&&(w[4]?(w[1]="@supports (".concat(w[4],") {").concat(w[1],"}"),w[4]=h):w[4]="".concat(h)),l.push(w))}},l}},80:o=>{o.exports=function(a,l){return l||(l={}),a&&(a=String(a.__esModule?a.default:a),/^['"].*['"]$/.test(a)&&(a=a.slice(1,-1)),l.hash&&(a+=l.hash),/["'() \t\n]|(%20)/.test(a)||l.needQuotes?'"'.concat(a.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):a)}},415:o=>{o.exports=function(a){var l=a[1],c=a[3];if(!c)return l;if(typeof btoa=="function"){var d=btoa(unescape(encodeURIComponent(JSON.stringify(c)))),u="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(d),h="/*# ".concat(u," */");return[l].concat([h]).join(`
`)}return[l].join(`
`)}},937:o=>{function a(l){return a=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(c){return typeof c}:function(c){return c&&typeof Symbol=="function"&&c.constructor===Symbol&&c!==Symbol.prototype?"symbol":typeof c},a(l)}o.exports=(typeof self>"u"?"undefined":a(self))=="object"?self.FormData:window.FormData},831:o=>{o.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAADGCAYAAAAT+OqFAAAAdklEQVQoz42QQQ7AIAgEF/T/D+kbq/RWAlnQyyazA4aoAB4FsBSA/bFjuF1EOL7VbrIrBuusmrt4ZZORfb6ehbWdnRHEIiITaEUKa5EJqUakRSaEYBJSCY2dEstQY7AuxahwXFrvZmWl2rh4JZ07z9dLtesfNj5q0FU3A5ObbwAAAABJRU5ErkJggg=="}},r={};function i(o){var a=r[o];if(a!==void 0)return a.exports;var l=r[o]={id:o,exports:{}};return t[o](l,l.exports,i),l.exports}i.m=t,i.n=o=>{var a=o&&o.__esModule?()=>o.default:()=>o;return i.d(a,{a}),a},i.d=(o,a)=>{for(var l in a)i.o(a,l)&&!i.o(o,l)&&Object.defineProperty(o,l,{enumerable:!0,get:a[l]})},i.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}}(),i.o=(o,a)=>Object.prototype.hasOwnProperty.call(o,a),i.b=document.baseURI||self.location.href,i.nc=void 0;var s={};return(()=>{i.d(s,{default:()=>gm});var o=i(856),a=i.n(o),l=i(470),c=i.n(l),d=i(370),u=i.n(d),h=i(458),g=i.n(h),y=i(278),b=i.n(y),E=i(488),C=i.n(E),w=i(685),R={};R.styleTagTransform=C(),R.setAttributes=g(),R.insert=u().bind(null,"head"),R.domAPI=c(),R.insertStyleElement=b(),a()(w.Z,R),w.Z&&w.Z.locals&&w.Z.locals;function _(p){return _=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(m){return typeof m}:function(m){return m&&typeof Symbol=="function"&&m.constructor===Symbol&&m!==Symbol.prototype?"symbol":typeof m},_(p)}function P(p,m){this.name="AggregateError",this.errors=p,this.message=m||""}P.prototype=Error.prototype;function H(p){return H=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(m){return typeof m}:function(m){return m&&typeof Symbol=="function"&&m.constructor===Symbol&&m!==Symbol.prototype?"symbol":typeof m},H(p)}var U=setTimeout;function j(p){return!!(p&&p.length!==void 0)}function Q(){}function F(p){if(!(this instanceof F))throw new TypeError("Promises must be constructed via new");if(typeof p!="function")throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],ne(p,this)}function Y(p,m){for(;p._state===3;)p=p._value;p._state!==0?(p._handled=!0,F._immediateFn(function(){var x=p._state===1?m.onFulfilled:m.onRejected;if(x!==null){var f;try{f=x(p._value)}catch(A){return void te(m.promise,A)}Ae(m.promise,f)}else(p._state===1?Ae:te)(m.promise,p._value)})):p._deferreds.push(m)}function Ae(p,m){try{if(m===p)throw new TypeError("A promise cannot be resolved with itself.");if(m&&(H(m)==="object"||typeof m=="function")){var x=m.then;if(m instanceof F)return p._state=3,p._value=m,void Se(p);if(typeof x=="function")return void ne((f=x,A=m,function(){f.apply(A,arguments)}),p)}p._state=1,p._value=m,Se(p)}catch(v){te(p,v)}var f,A}function te(p,m){p._state=2,p._value=m,Se(p)}function Se(p){p._state===2&&p._deferreds.length===0&&F._immediateFn(function(){p._handled||F._unhandledRejectionFn(p._value)});for(var m=0,x=p._deferreds.length;m<x;m++)Y(p,p._deferreds[m]);p._deferreds=null}function ve(p,m,x){this.onFulfilled=typeof p=="function"?p:null,this.onRejected=typeof m=="function"?m:null,this.promise=x}function ne(p,m){var x=!1;try{p(function(f){x||(x=!0,Ae(m,f))},function(f){x||(x=!0,te(m,f))})}catch(f){if(x)return;x=!0,te(m,f)}}F.prototype.catch=function(p){return this.then(null,p)},F.prototype.then=function(p,m){var x=new this.constructor(Q);return Y(this,new ve(p,m,x)),x},F.prototype.finally=function(p){var m=this.constructor;return this.then(function(x){return m.resolve(p()).then(function(){return x})},function(x){return m.resolve(p()).then(function(){return m.reject(x)})})},F.all=function(p){return new F(function(m,x){if(!j(p))return x(new TypeError("Promise.all accepts an array"));var f=Array.prototype.slice.call(p);if(f.length===0)return m([]);var A=f.length;function v(k,L){try{if(L&&(H(L)==="object"||typeof L=="function")){var N=L.then;if(typeof N=="function")return void N.call(L,function(G){v(k,G)},x)}f[k]=L,--A==0&&m(f)}catch(G){x(G)}}for(var S=0;S<f.length;S++)v(S,f[S])})},F.any=function(p){var m=this;return new m(function(x,f){if(!p||p.length===void 0)return f(new TypeError("Promise.any accepts an array"));var A=Array.prototype.slice.call(p);if(A.length===0)return f();for(var v=[],S=0;S<A.length;S++)try{m.resolve(A[S]).then(x).catch(function(k){v.push(k),v.length===A.length&&f(new P(v,"All promises were rejected"))})}catch(k){f(k)}})},F.allSettled=function(p){return new this(function(m,x){if(!p||p.length===void 0)return x(new TypeError(_(p)+" "+p+" is not iterable(cannot read property Symbol(Symbol.iterator))"));var f=Array.prototype.slice.call(p);if(f.length===0)return m([]);var A=f.length;function v(k,L){if(L&&(_(L)==="object"||typeof L=="function")){var N=L.then;if(typeof N=="function")return void N.call(L,function(G){v(k,G)},function(G){f[k]={status:"rejected",reason:G},--A==0&&m(f)})}f[k]={status:"fulfilled",value:L},--A==0&&m(f)}for(var S=0;S<f.length;S++)v(S,f[S])})},F.resolve=function(p){return p&&H(p)==="object"&&p.constructor===F?p:new F(function(m){m(p)})},F.reject=function(p){return new F(function(m,x){x(p)})},F.race=function(p){return new F(function(m,x){if(!j(p))return x(new TypeError("Promise.race accepts an array"));for(var f=0,A=p.length;f<A;f++)F.resolve(p[f]).then(m,x)})},F._immediateFn=typeof setImmediate=="function"&&function(p){setImmediate(p)}||function(p){U(p,0)},F._unhandledRejectionFn=function(p){typeof console<"u"&&console&&console.warn("Possible Unhandled Promise Rejection:",p)};const ye=F;var me=/mobile/i.test(window.navigator.userAgent);const z={secondToTime:function(p){if((p=p||0)===0||p===1/0||p.toString()==="NaN")return"00:00";var m=Math.floor(p/3600),x=Math.floor((p-3600*m)/60),f=Math.floor(p-3600*m-60*x);return(m>0?[m,x,f]:[x,f]).map(function(A){return A<10?"0"+A:""+A}).join(":")},getElementViewLeft:function(p){var m=p.offsetLeft,x=p.offsetParent,f=document.body.scrollLeft+document.documentElement.scrollLeft;if(document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement)for(;x!==null&&x!==p;)m+=x.offsetLeft,x=x.offsetParent;else for(;x!==null;)m+=x.offsetLeft,x=x.offsetParent;return m-f},getBoundingClientRectViewLeft:function(p){var m=window.scrollY||window.pageYOffset||document.body.scrollTop+(document.documentElement&&document.documentElement.scrollTop||0);if(p.getBoundingClientRect){if(typeof this.getBoundingClientRectViewLeft.offset!="number"){var x=document.createElement("div");x.style.cssText="position:absolute;top:0;left:0;",document.body.appendChild(x),this.getBoundingClientRectViewLeft.offset=-x.getBoundingClientRect().top-m,document.body.removeChild(x),x=null}var f=p.getBoundingClientRect(),A=this.getBoundingClientRectViewLeft.offset;return f.left+A}return this.getElementViewLeft(p)},getScrollPosition:function(){return{left:window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0,top:window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0}},setScrollPosition:function(p){var m=p.left,x=m===void 0?0:m,f=p.top,A=f===void 0?0:f;this.isFirefox?(document.documentElement.scrollLeft=x,document.documentElement.scrollTop=A):window.scrollTo(x,A)},isMobile:me,isFirefox:/firefox/i.test(window.navigator.userAgent),isChrome:/chrome/i.test(window.navigator.userAgent),isSafari:/safari/i.test(window.navigator.userAgent),storage:{set:function(p,m){localStorage.setItem(p,m)},get:function(p){return localStorage.getItem(p)}},nameMap:{dragStart:me?"touchstart":"mousedown",dragMove:me?"touchmove":"mousemove",dragEnd:me?"touchend":"mouseup"},color2Number:function(p){return p[0]==="#"&&(p=p.substr(1)),p.length===3&&(p="".concat(p[0]).concat(p[0]).concat(p[1]).concat(p[1]).concat(p[2]).concat(p[2])),parseInt(p,16)+0&16777215},number2Color:function(p){return"#"+("00000"+p.toString(16)).slice(-6)},number2Type:function(p){switch(p){case 0:default:return"right";case 1:return"top";case 2:return"bottom"}}};function ae(p,m){return function(){return p.apply(m,arguments)}}function Re(p){return Re=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(m){return typeof m}:function(m){return m&&typeof Symbol=="function"&&m.constructor===Symbol&&m!==Symbol.prototype?"symbol":typeof m},Re(p)}var xe,Fe=Object.prototype.toString,je=Object.getPrototypeOf,Qe=(xe=Object.create(null),function(p){var m=Fe.call(p);return xe[m]||(xe[m]=m.slice(8,-1).toLowerCase())}),Pe=function(p){return p=p.toLowerCase(),function(m){return Qe(m)===p}},K=function(p){return function(m){return Re(m)===p}},ce=Array.isArray,re=K("undefined"),Ee=Pe("ArrayBuffer"),Ke=K("string"),I=K("function"),D=K("number"),O=function(p){return p!==null&&Re(p)==="object"},q=function(p){if(Qe(p)!=="object")return!1;var m=je(p);return!(m!==null&&m!==Object.prototype&&Object.getPrototypeOf(m)!==null||Symbol.toStringTag in p||Symbol.iterator in p)},X=Pe("Date"),ee=Pe("File"),he=Pe("Blob"),ie=Pe("FileList"),le=Pe("URLSearchParams");function Z(p,m){var x,f,A=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},v=A.allOwnKeys,S=v!==void 0&&v;if(p!=null)if(Re(p)!=="object"&&(p=[p]),ce(p))for(x=0,f=p.length;x<f;x++)m.call(null,p[x],x,p);else{var k,L=S?Object.getOwnPropertyNames(p):Object.keys(p),N=L.length;for(x=0;x<N;x++)k=L[x],m.call(null,p[k],k,p)}}function Te(p,m){m=m.toLowerCase();for(var x,f=Object.keys(p),A=f.length;A-- >0;)if(m===(x=f[A]).toLowerCase())return x;return null}var ge,Ce,Ie=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:Cv,Me=function(p){return!re(p)&&p!==Ie},We=(ge=typeof Uint8Array<"u"&&je(Uint8Array),function(p){return ge&&p instanceof ge}),qe=Pe("HTMLFormElement"),tt=(Ce=Object.prototype.hasOwnProperty,function(p,m){return Ce.call(p,m)}),wt=Pe("RegExp"),sn=function(p,m){var x=Object.getOwnPropertyDescriptors(p),f={};Z(x,function(A,v){m(A,v,p)!==!1&&(f[v]=A)}),Object.defineProperties(p,f)};const V={isArray:ce,isArrayBuffer:Ee,isBuffer:function(p){return p!==null&&!re(p)&&p.constructor!==null&&!re(p.constructor)&&I(p.constructor.isBuffer)&&p.constructor.isBuffer(p)},isFormData:function(p){var m="[object FormData]";return p&&(typeof FormData=="function"&&p instanceof FormData||Fe.call(p)===m||I(p.toString)&&p.toString()===m)},isArrayBufferView:function(p){return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?ArrayBuffer.isView(p):p&&p.buffer&&Ee(p.buffer)},isString:Ke,isNumber:D,isBoolean:function(p){return p===!0||p===!1},isObject:O,isPlainObject:q,isUndefined:re,isDate:X,isFile:ee,isBlob:he,isRegExp:wt,isFunction:I,isStream:function(p){return O(p)&&I(p.pipe)},isURLSearchParams:le,isTypedArray:We,isFileList:ie,forEach:Z,merge:function p(){for(var m=Me(this)&&this||{},x=m.caseless,f={},A=function(k,L){var N=x&&Te(f,L)||L;q(f[N])&&q(k)?f[N]=p(f[N],k):q(k)?f[N]=p({},k):ce(k)?f[N]=k.slice():f[N]=k},v=0,S=arguments.length;v<S;v++)arguments[v]&&Z(arguments[v],A);return f},extend:function(p,m,x){var f=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},A=f.allOwnKeys;return Z(m,function(v,S){x&&I(v)?p[S]=ae(v,x):p[S]=v},{allOwnKeys:A}),p},trim:function(p){return p.trim?p.trim():p.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")},stripBOM:function(p){return p.charCodeAt(0)===65279&&(p=p.slice(1)),p},inherits:function(p,m,x,f){p.prototype=Object.create(m.prototype,f),p.prototype.constructor=p,Object.defineProperty(p,"super",{value:m.prototype}),x&&Object.assign(p.prototype,x)},toFlatObject:function(p,m,x,f){var A,v,S,k={};if(m=m||{},p==null)return m;do{for(v=(A=Object.getOwnPropertyNames(p)).length;v-- >0;)S=A[v],f&&!f(S,p,m)||k[S]||(m[S]=p[S],k[S]=!0);p=x!==!1&&je(p)}while(p&&(!x||x(p,m))&&p!==Object.prototype);return m},kindOf:Qe,kindOfTest:Pe,endsWith:function(p,m,x){p=String(p),(x===void 0||x>p.length)&&(x=p.length),x-=m.length;var f=p.indexOf(m,x);return f!==-1&&f===x},toArray:function(p){if(!p)return null;if(ce(p))return p;var m=p.length;if(!D(m))return null;for(var x=new Array(m);m-- >0;)x[m]=p[m];return x},forEachEntry:function(p,m){for(var x,f=(p&&p[Symbol.iterator]).call(p);(x=f.next())&&!x.done;){var A=x.value;m.call(p,A[0],A[1])}},matchAll:function(p,m){for(var x,f=[];(x=p.exec(m))!==null;)f.push(x);return f},isHTMLForm:qe,hasOwnProperty:tt,hasOwnProp:tt,reduceDescriptors:sn,freezeMethods:function(p){sn(p,function(m,x){if(I(p)&&["arguments","caller","callee"].indexOf(x)!==-1)return!1;var f=p[x];I(f)&&(m.enumerable=!1,"writable"in m?m.writable=!1:m.set||(m.set=function(){throw Error("Can not rewrite read-only method '"+x+"'")}))})},toObjectSet:function(p,m){var x={},f=function(A){A.forEach(function(v){x[v]=!0})};return ce(p)?f(p):f(String(p).split(m)),x},toCamelCase:function(p){return p.toLowerCase().replace(/[_-\s]([a-z\d])(\w*)/g,function(m,x,f){return x.toUpperCase()+f})},noop:function(){},toFiniteNumber:function(p,m){return p=+p,Number.isFinite(p)?p:m},findKey:Te,global:Ie,isContextDefined:Me,toJSONObject:function(p){var m=new Array(10);return function x(f,A){if(O(f)){if(m.indexOf(f)>=0)return;if(!("toJSON"in f)){m[A]=f;var v=ce(f)?[]:{};return Z(f,function(S,k){var L=x(S,A+1);!re(L)&&(v[k]=L)}),m[A]=void 0,v}}return f}(p,0)}};function Lt(p,m,x,f,A){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=p,this.name="AxiosError",m&&(this.code=m),x&&(this.config=x),f&&(this.request=f),A&&(this.response=A)}V.inherits(Lt,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:V.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var _r=Lt.prototype,yt={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(function(p){yt[p]={value:p}}),Object.defineProperties(Lt,yt),Object.defineProperty(_r,"isAxiosError",{value:!0}),Lt.from=function(p,m,x,f,A,v){var S=Object.create(_r);return V.toFlatObject(p,S,function(k){return k!==Error.prototype},function(k){return k!=="isAxiosError"}),Lt.call(S,p.message,m,x,f,A),S.cause=p,S.name=p.name,v&&Object.assign(S,v),S};const Ne=Lt,_i=i(937);function no(p){return no=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(m){return typeof m}:function(m){return m&&typeof Symbol=="function"&&m.constructor===Symbol&&m!==Symbol.prototype?"symbol":typeof m},no(p)}function ro(p){return V.isPlainObject(p)||V.isArray(p)}function Il(p){return V.endsWith(p,"[]")?p.slice(0,-2):p}function _l(p,m,x){return p?p.concat(m).map(function(f,A){return f=Il(f),!x&&A?"["+f+"]":f}).join(x?".":""):m}var gp=V.toFlatObject(V,{},null,function(p){return/^is[A-Z]/.test(p)});const Di=function(p,m,x){if(!V.isObject(p))throw new TypeError("target must be an object");m=m||new(_i||FormData);var f,A=(x=V.toFlatObject(x,{metaTokens:!0,dots:!1,indexes:!1},!1,function(fe,ue){return!V.isUndefined(ue[fe])})).metaTokens,v=x.visitor||G,S=x.dots,k=x.indexes,L=(x.Blob||typeof Blob<"u"&&Blob)&&(f=m)&&V.isFunction(f.append)&&f[Symbol.toStringTag]==="FormData"&&f[Symbol.iterator];if(!V.isFunction(v))throw new TypeError("visitor must be a function");function N(fe){if(fe===null)return"";if(V.isDate(fe))return fe.toISOString();if(!L&&V.isBlob(fe))throw new Ne("Blob is not supported. Use a Buffer instead.");return V.isArrayBuffer(fe)||V.isTypedArray(fe)?L&&typeof Blob=="function"?new Blob([fe]):Buffer.from(fe):fe}function G(fe,ue,oe){var be=fe;if(fe&&!oe&&no(fe)==="object"){if(V.endsWith(ue,"{}"))ue=A?ue:ue.slice(0,-2),fe=JSON.stringify(fe);else if(V.isArray(fe)&&function(_e){return V.isArray(_e)&&!_e.some(ro)}(fe)||V.isFileList(fe)||V.endsWith(ue,"[]")&&(be=V.toArray(fe)))return ue=Il(ue),be.forEach(function(_e,lt){!V.isUndefined(_e)&&_e!==null&&m.append(k===!0?_l([ue],lt,S):k===null?ue:ue+"[]",N(_e))}),!1}return!!ro(fe)||(m.append(_l(oe,ue,S),N(fe)),!1)}var se=[],de=Object.assign(gp,{defaultVisitor:G,convertValue:N,isVisitable:ro});if(!V.isObject(p))throw new TypeError("data must be an object");return function fe(ue,oe){if(!V.isUndefined(ue)){if(se.indexOf(ue)!==-1)throw Error("Circular reference detected in "+oe.join("."));se.push(ue),V.forEach(ue,function(be,_e){(!(V.isUndefined(be)||be===null)&&v.call(m,be,V.isString(_e)?_e.trim():_e,oe,de))===!0&&fe(be,oe?oe.concat(_e):[_e])}),se.pop()}}(p),m};function Dl(p){var m={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(p).replace(/[!'()~]|%20|%00/g,function(x){return m[x]})}function Pl(p,m){this._pairs=[],p&&Di(p,this,m)}var Bl=Pl.prototype;Bl.append=function(p,m){this._pairs.push([p,m])},Bl.toString=function(p){var m=p?function(x){return p.call(this,x,Dl)}:Dl;return this._pairs.map(function(x){return m(x[0])+"="+m(x[1])},"").join("&")};const Ol=Pl;function yp(p){return encodeURIComponent(p).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Fl(p,m,x){if(!m)return p;var f,A=x&&x.encode||yp,v=x&&x.serialize;if(f=v?v(m,x):V.isURLSearchParams(m)?m.toString():new Ol(m,x).toString(A)){var S=p.indexOf("#");S!==-1&&(p=p.slice(0,S)),p+=(p.indexOf("?")===-1?"?":"&")+f}return p}function Dr(p){return Dr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(m){return typeof m}:function(m){return m&&typeof Symbol=="function"&&m.constructor===Symbol&&m!==Symbol.prototype?"symbol":typeof m},Dr(p)}function Ap(p,m){for(var x=0;x<m.length;x++){var f=m[x];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(p,(A=function(v,S){if(Dr(v)!=="object"||v===null)return v;var k=v[Symbol.toPrimitive];if(k!==void 0){var L=k.call(v,"string");if(Dr(L)!=="object")return L;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(v)}(f.key),Dr(A)==="symbol"?A:String(A)),f)}var A}var bp=function(){function p(){(function(f,A){if(!(f instanceof A))throw new TypeError("Cannot call a class as a function")})(this,p),this.handlers=[]}var m,x;return m=p,x=[{key:"use",value:function(f,A,v){return this.handlers.push({fulfilled:f,rejected:A,synchronous:!!v&&v.synchronous,runWhen:v?v.runWhen:null}),this.handlers.length-1}},{key:"eject",value:function(f){this.handlers[f]&&(this.handlers[f]=null)}},{key:"clear",value:function(){this.handlers&&(this.handlers=[])}},{key:"forEach",value:function(f){V.forEach(this.handlers,function(A){A!==null&&f(A)})}}],x&&Ap(m.prototype,x),Object.defineProperty(m,"prototype",{writable:!1}),p}();const Ml=bp,Nl={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},vp=typeof URLSearchParams<"u"?URLSearchParams:Ol,Ep=FormData;var io,xp=(typeof navigator>"u"||(io=navigator.product)!=="ReactNative"&&io!=="NativeScript"&&io!=="NS")&&typeof window<"u"&&typeof document<"u",Sp=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function";const qt={isBrowser:!0,classes:{URLSearchParams:vp,FormData:Ep,Blob},isStandardBrowserEnv:xp,isStandardBrowserWebWorkerEnv:Sp,protocols:["http","https","file","blob","url","data"]},Ul=function(p){function m(f,A,v,S){var k=f[S++],L=Number.isFinite(+k),N=S>=f.length;return k=!k&&V.isArray(v)?v.length:k,N?(V.hasOwnProp(v,k)?v[k]=[v[k],A]:v[k]=A,!L):(v[k]&&V.isObject(v[k])||(v[k]=[]),m(f,A,v[k],S)&&V.isArray(v[k])&&(v[k]=function(G){var se,de,fe={},ue=Object.keys(G),oe=ue.length;for(se=0;se<oe;se++)fe[de=ue[se]]=G[de];return fe}(v[k])),!L)}if(V.isFormData(p)&&V.isFunction(p.entries)){var x={};return V.forEachEntry(p,function(f,A){m(function(v){return V.matchAll(/\w+|\[(\w*)]/g,v).map(function(S){return S[0]==="[]"?"":S[1]||S[0]})}(f),A,x,0)}),x}return null};var Tp={"Content-Type":void 0},Pi={transitional:Nl,adapter:["xhr","http"],transformRequest:[function(p,m){var x,f=m.getContentType()||"",A=f.indexOf("application/json")>-1,v=V.isObject(p);if(v&&V.isHTMLForm(p)&&(p=new FormData(p)),V.isFormData(p))return A&&A?JSON.stringify(Ul(p)):p;if(V.isArrayBuffer(p)||V.isBuffer(p)||V.isStream(p)||V.isFile(p)||V.isBlob(p))return p;if(V.isArrayBufferView(p))return p.buffer;if(V.isURLSearchParams(p))return m.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),p.toString();if(v){if(f.indexOf("application/x-www-form-urlencoded")>-1)return function(k,L){return Di(k,new qt.classes.URLSearchParams,Object.assign({visitor:function(N,G,se,de){return qt.isNode&&V.isBuffer(N)?(this.append(G,N.toString("base64")),!1):de.defaultVisitor.apply(this,arguments)}},L))}(p,this.formSerializer).toString();if((x=V.isFileList(p))||f.indexOf("multipart/form-data")>-1){var S=this.env&&this.env.FormData;return Di(x?{"files[]":p}:p,S&&new S,this.formSerializer)}}return v||A?(m.setContentType("application/json",!1),function(k,L,N){if(V.isString(k))try{return(0,JSON.parse)(k),V.trim(k)}catch(G){if(G.name!=="SyntaxError")throw G}return(0,JSON.stringify)(k)}(p)):p}],transformResponse:[function(p){var m=this.transitional||Pi.transitional,x=m&&m.forcedJSONParsing,f=this.responseType==="json";if(p&&V.isString(p)&&(x&&!this.responseType||f)){var A=!(m&&m.silentJSONParsing)&&f;try{return JSON.parse(p)}catch(v){if(A)throw v.name==="SyntaxError"?Ne.from(v,Ne.ERR_BAD_RESPONSE,this,null,this.response):v}}return p}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:qt.classes.FormData,Blob:qt.classes.Blob},validateStatus:function(p){return p>=200&&p<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};V.forEach(["delete","get","head"],function(p){Pi.headers[p]={}}),V.forEach(["post","put","patch"],function(p){Pi.headers[p]=V.merge(Tp)});const so=Pi;var Cp=V.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]);function Pr(p){return Pr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(m){return typeof m}:function(m){return m&&typeof Symbol=="function"&&m.constructor===Symbol&&m!==Symbol.prototype?"symbol":typeof m},Pr(p)}function $l(p,m){(m==null||m>p.length)&&(m=p.length);for(var x=0,f=new Array(m);x<m;x++)f[x]=p[x];return f}function Hl(p,m){for(var x=0;x<m.length;x++){var f=m[x];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(p,(A=function(v,S){if(Pr(v)!=="object"||v===null)return v;var k=v[Symbol.toPrimitive];if(k!==void 0){var L=k.call(v,"string");if(Pr(L)!=="object")return L;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(v)}(f.key),Pr(A)==="symbol"?A:String(A)),f)}var A}var Gl=Symbol("internals");function Br(p){return p&&String(p).trim().toLowerCase()}function Bi(p){return p===!1||p==null?p:V.isArray(p)?p.map(Bi):String(p)}function Kl(p,m,x,f){return V.isFunction(f)?f.call(this,m,x):V.isString(m)?V.isString(f)?m.indexOf(f)!==-1:V.isRegExp(f)?f.test(m):void 0:void 0}var Oi=function(p,m){function x(S){(function(k,L){if(!(k instanceof L))throw new TypeError("Cannot call a class as a function")})(this,x),S&&this.set(S)}var f,A,v;return f=x,A=[{key:"set",value:function(S,k,L){var N=this;function G(_e,lt,rt){var Ye=Br(lt);if(!Ye)throw new Error("header name must be a non-empty string");var bn=V.findKey(N,Ye);(!bn||N[bn]===void 0||rt===!0||rt===void 0&&N[bn]!==!1)&&(N[bn||lt]=Bi(_e))}var se,de,fe,ue,oe,be=function(_e,lt){return V.forEach(_e,function(rt,Ye){return G(rt,Ye,lt)})};return V.isPlainObject(S)||S instanceof this.constructor?be(S,k):V.isString(S)&&(S=S.trim())&&!/^[-_a-zA-Z]+$/.test(S.trim())?be((oe={},(se=S)&&se.split(`
`).forEach(function(_e){ue=_e.indexOf(":"),de=_e.substring(0,ue).trim().toLowerCase(),fe=_e.substring(ue+1).trim(),!de||oe[de]&&Cp[de]||(de==="set-cookie"?oe[de]?oe[de].push(fe):oe[de]=[fe]:oe[de]=oe[de]?oe[de]+", "+fe:fe)}),oe),k):S!=null&&G(k,S,L),this}},{key:"get",value:function(S,k){if(S=Br(S)){var L=V.findKey(this,S);if(L){var N=this[L];if(!k)return N;if(k===!0)return function(G){for(var se,de=Object.create(null),fe=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;se=fe.exec(G);)de[se[1]]=se[2];return de}(N);if(V.isFunction(k))return k.call(this,N,L);if(V.isRegExp(k))return k.exec(N);throw new TypeError("parser must be boolean|regexp|function")}}}},{key:"has",value:function(S,k){if(S=Br(S)){var L=V.findKey(this,S);return!(!L||k&&!Kl(0,this[L],L,k))}return!1}},{key:"delete",value:function(S,k){var L=this,N=!1;function G(se){if(se=Br(se)){var de=V.findKey(L,se);!de||k&&!Kl(0,L[de],de,k)||(delete L[de],N=!0)}}return V.isArray(S)?S.forEach(G):G(S),N}},{key:"clear",value:function(){return Object.keys(this).forEach(this.delete.bind(this))}},{key:"normalize",value:function(S){var k=this,L={};return V.forEach(this,function(N,G){var se=V.findKey(L,G);if(se)return k[se]=Bi(N),void delete k[G];var de=S?function(fe){return fe.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,function(ue,oe,be){return oe.toUpperCase()+be})}(G):String(G).trim();de!==G&&delete k[G],k[de]=Bi(N),L[de]=!0}),this}},{key:"concat",value:function(){for(var S,k=arguments.length,L=new Array(k),N=0;N<k;N++)L[N]=arguments[N];return(S=this.constructor).concat.apply(S,[this].concat(L))}},{key:"toJSON",value:function(S){var k=Object.create(null);return V.forEach(this,function(L,N){L!=null&&L!==!1&&(k[N]=S&&V.isArray(L)?L.join(", "):L)}),k}},{key:Symbol.iterator,value:function(){return Object.entries(this.toJSON())[Symbol.iterator]()}},{key:"toString",value:function(){return Object.entries(this.toJSON()).map(function(S){var k,L,N=(L=2,function(G){if(Array.isArray(G))return G}(k=S)||function(G,se){var de=G==null?null:typeof Symbol<"u"&&G[Symbol.iterator]||G["@@iterator"];if(de!=null){var fe,ue,oe,be,_e=[],lt=!0,rt=!1;try{if(oe=(de=de.call(G)).next,se===0){if(Object(de)!==de)return;lt=!1}else for(;!(lt=(fe=oe.call(de)).done)&&(_e.push(fe.value),_e.length!==se);lt=!0);}catch(Ye){rt=!0,ue=Ye}finally{try{if(!lt&&de.return!=null&&(be=de.return(),Object(be)!==be))return}finally{if(rt)throw ue}}return _e}}(k,L)||function(G,se){if(G){if(typeof G=="string")return $l(G,se);var de=Object.prototype.toString.call(G).slice(8,-1);return de==="Object"&&G.constructor&&(de=G.constructor.name),de==="Map"||de==="Set"?Array.from(G):de==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(de)?$l(G,se):void 0}}(k,L)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}());return N[0]+": "+N[1]}).join(`
`)}},{key:Symbol.toStringTag,get:function(){return"AxiosHeaders"}}],v=[{key:"from",value:function(S){return S instanceof this?S:new this(S)}},{key:"concat",value:function(S){for(var k=new this(S),L=arguments.length,N=new Array(L>1?L-1:0),G=1;G<L;G++)N[G-1]=arguments[G];return N.forEach(function(se){return k.set(se)}),k}},{key:"accessor",value:function(S){var k=(this[Gl]=this[Gl]={accessors:{}}).accessors,L=this.prototype;function N(G){var se=Br(G);k[se]||(function(de,fe){var ue=V.toCamelCase(" "+fe);["get","set","has"].forEach(function(oe){Object.defineProperty(de,oe+ue,{value:function(be,_e,lt){return this[oe].call(this,fe,be,_e,lt)},configurable:!0})})}(L,G),k[se]=!0)}return V.isArray(S)?S.forEach(N):N(S),this}}],A&&Hl(f.prototype,A),v&&Hl(f,v),Object.defineProperty(f,"prototype",{writable:!1}),x}();Oi.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent"]),V.freezeMethods(Oi.prototype),V.freezeMethods(Oi);const on=Oi;function oo(p,m){var x=this||so,f=m||x,A=on.from(f.headers),v=f.data;return V.forEach(p,function(S){v=S.call(x,v,A.normalize(),m?m.status:void 0)}),A.normalize(),v}function jl(p){return!(!p||!p.__CANCEL__)}function ql(p,m,x){Ne.call(this,p??"canceled",Ne.ERR_CANCELED,m,x),this.name="CanceledError"}V.inherits(ql,Ne,{__CANCEL__:!0});const Fi=ql,wp=qt.isStandardBrowserEnv?{write:function(p,m,x,f,A,v){var S=[];S.push(p+"="+encodeURIComponent(m)),V.isNumber(x)&&S.push("expires="+new Date(x).toGMTString()),V.isString(f)&&S.push("path="+f),V.isString(A)&&S.push("domain="+A),v===!0&&S.push("secure"),document.cookie=S.join("; ")},read:function(p){var m=document.cookie.match(new RegExp("(^|;\\s*)("+p+")=([^;]*)"));return m?decodeURIComponent(m[3]):null},remove:function(p){this.write(p,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}};function zl(p,m){return p&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(m)?function(x,f){return f?x.replace(/\/+$/,"")+"/"+f.replace(/^\/+/,""):x}(p,m):m}const kp=qt.isStandardBrowserEnv?function(){var p,m=/(msie|trident)/i.test(navigator.userAgent),x=document.createElement("a");function f(A){var v=A;return m&&(x.setAttribute("href",v),v=x.href),x.setAttribute("href",v),{href:x.href,protocol:x.protocol?x.protocol.replace(/:$/,""):"",host:x.host,search:x.search?x.search.replace(/^\?/,""):"",hash:x.hash?x.hash.replace(/^#/,""):"",hostname:x.hostname,port:x.port,pathname:x.pathname.charAt(0)==="/"?x.pathname:"/"+x.pathname}}return p=f(window.location.href),function(A){var v=V.isString(A)?f(A):A;return v.protocol===p.protocol&&v.host===p.host}}():function(){return!0};function Vl(p,m){var x=0,f=function(A,v){A=A||10;var S,k=new Array(A),L=new Array(A),N=0,G=0;return v=v!==void 0?v:1e3,function(se){var de=Date.now(),fe=L[G];S||(S=de),k[N]=se,L[N]=de;for(var ue=G,oe=0;ue!==N;)oe+=k[ue++],ue%=A;if((N=(N+1)%A)===G&&(G=(G+1)%A),!(de-S<v)){var be=fe&&de-fe;return be?Math.round(1e3*oe/be):void 0}}}(50,250);return function(A){var v=A.loaded,S=A.lengthComputable?A.total:void 0,k=v-x,L=f(k);x=v;var N={loaded:v,total:S,progress:S?v/S:void 0,bytes:k,rate:L||void 0,estimated:L&&S&&v<=S?(S-v)/L:void 0,event:A};N[m?"download":"upload"]=!0,p(N)}}var ao={http:null,xhr:typeof XMLHttpRequest<"u"&&function(p){return new Promise(function(m,x){var f,A=p.data,v=on.from(p.headers).normalize(),S=p.responseType;function k(){p.cancelToken&&p.cancelToken.unsubscribe(f),p.signal&&p.signal.removeEventListener("abort",f)}V.isFormData(A)&&(qt.isStandardBrowserEnv||qt.isStandardBrowserWebWorkerEnv)&&v.setContentType(!1);var L=new XMLHttpRequest;if(p.auth){var N=p.auth.username||"",G=p.auth.password?unescape(encodeURIComponent(p.auth.password)):"";v.set("Authorization","Basic "+btoa(N+":"+G))}var se=zl(p.baseURL,p.url);function de(){if(L){var be=on.from("getAllResponseHeaders"in L&&L.getAllResponseHeaders());(function(_e,lt,rt){var Ye=rt.config.validateStatus;rt.status&&Ye&&!Ye(rt.status)?lt(new Ne("Request failed with status code "+rt.status,[Ne.ERR_BAD_REQUEST,Ne.ERR_BAD_RESPONSE][Math.floor(rt.status/100)-4],rt.config,rt.request,rt)):_e(rt)})(function(_e){m(_e),k()},function(_e){x(_e),k()},{data:S&&S!=="text"&&S!=="json"?L.response:L.responseText,status:L.status,statusText:L.statusText,headers:be,config:p,request:L}),L=null}}if(L.open(p.method.toUpperCase(),Fl(se,p.params,p.paramsSerializer),!0),L.timeout=p.timeout,"onloadend"in L?L.onloadend=de:L.onreadystatechange=function(){L&&L.readyState===4&&(L.status!==0||L.responseURL&&L.responseURL.indexOf("file:")===0)&&setTimeout(de)},L.onabort=function(){L&&(x(new Ne("Request aborted",Ne.ECONNABORTED,p,L)),L=null)},L.onerror=function(){x(new Ne("Network Error",Ne.ERR_NETWORK,p,L)),L=null},L.ontimeout=function(){var be=p.timeout?"timeout of "+p.timeout+"ms exceeded":"timeout exceeded",_e=p.transitional||Nl;p.timeoutErrorMessage&&(be=p.timeoutErrorMessage),x(new Ne(be,_e.clarifyTimeoutError?Ne.ETIMEDOUT:Ne.ECONNABORTED,p,L)),L=null},qt.isStandardBrowserEnv){var fe=(p.withCredentials||kp(se))&&p.xsrfCookieName&&wp.read(p.xsrfCookieName);fe&&v.set(p.xsrfHeaderName,fe)}A===void 0&&v.setContentType(null),"setRequestHeader"in L&&V.forEach(v.toJSON(),function(be,_e){L.setRequestHeader(_e,be)}),V.isUndefined(p.withCredentials)||(L.withCredentials=!!p.withCredentials),S&&S!=="json"&&(L.responseType=p.responseType),typeof p.onDownloadProgress=="function"&&L.addEventListener("progress",Vl(p.onDownloadProgress,!0)),typeof p.onUploadProgress=="function"&&L.upload&&L.upload.addEventListener("progress",Vl(p.onUploadProgress)),(p.cancelToken||p.signal)&&(f=function(be){L&&(x(!be||be.type?new Fi(null,p,L):be),L.abort(),L=null)},p.cancelToken&&p.cancelToken.subscribe(f),p.signal&&(p.signal.aborted?f():p.signal.addEventListener("abort",f)));var ue,oe=(ue=/^([-+\w]{1,25})(:?\/\/|:)/.exec(se))&&ue[1]||"";oe&&qt.protocols.indexOf(oe)===-1?x(new Ne("Unsupported protocol "+oe+":",Ne.ERR_BAD_REQUEST,p)):L.send(A||null)})}};V.forEach(ao,function(p,m){if(p){try{Object.defineProperty(p,"name",{value:m})}catch{}Object.defineProperty(p,"adapterName",{value:m})}});function lo(p){if(p.cancelToken&&p.cancelToken.throwIfRequested(),p.signal&&p.signal.aborted)throw new Fi(null,p)}function Wl(p){return lo(p),p.headers=on.from(p.headers),p.data=oo.call(p,p.transformRequest),["post","put","patch"].indexOf(p.method)!==-1&&p.headers.setContentType("application/x-www-form-urlencoded",!1),function(m){for(var x,f,A=(m=V.isArray(m)?m:[m]).length,v=0;v<A&&(x=m[v],!(f=V.isString(x)?ao[x.toLowerCase()]:x));v++);if(!f)throw f===!1?new Ne("Adapter ".concat(x," is not supported by the environment"),"ERR_NOT_SUPPORT"):new Error(V.hasOwnProp(ao,x)?"Adapter '".concat(x,"' is not available in the build"):"Unknown adapter '".concat(x,"'"));if(!V.isFunction(f))throw new TypeError("adapter is not a function");return f}(p.adapter||so.adapter)(p).then(function(m){return lo(p),m.data=oo.call(p,p.transformResponse,m),m.headers=on.from(m.headers),m},function(m){return jl(m)||(lo(p),m&&m.response&&(m.response.data=oo.call(p,p.transformResponse,m.response),m.response.headers=on.from(m.response.headers))),Promise.reject(m)})}var Yl=function(p){return p instanceof on?p.toJSON():p};function Vn(p,m){m=m||{};var x={};function f(N,G,se){return V.isPlainObject(N)&&V.isPlainObject(G)?V.merge.call({caseless:se},N,G):V.isPlainObject(G)?V.merge({},G):V.isArray(G)?G.slice():G}function A(N,G,se){return V.isUndefined(G)?V.isUndefined(N)?void 0:f(void 0,N,se):f(N,G,se)}function v(N,G){if(!V.isUndefined(G))return f(void 0,G)}function S(N,G){return V.isUndefined(G)?V.isUndefined(N)?void 0:f(void 0,N):f(void 0,G)}function k(N,G,se){return se in m?f(N,G):se in p?f(void 0,N):void 0}var L={url:v,method:v,data:v,baseURL:S,transformRequest:S,transformResponse:S,paramsSerializer:S,timeout:S,timeoutMessage:S,withCredentials:S,adapter:S,responseType:S,xsrfCookieName:S,xsrfHeaderName:S,onUploadProgress:S,onDownloadProgress:S,decompress:S,maxContentLength:S,maxBodyLength:S,beforeRedirect:S,transport:S,httpAgent:S,httpsAgent:S,cancelToken:S,socketPath:S,responseEncoding:S,validateStatus:k,headers:function(N,G){return A(Yl(N),Yl(G),!0)}};return V.forEach(Object.keys(p).concat(Object.keys(m)),function(N){var G=L[N]||A,se=G(p[N],m[N],N);V.isUndefined(se)&&G!==k||(x[N]=se)}),x}function Mi(p){return Mi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(m){return typeof m}:function(m){return m&&typeof Symbol=="function"&&m.constructor===Symbol&&m!==Symbol.prototype?"symbol":typeof m},Mi(p)}var co={};["object","boolean","number","function","string","symbol"].forEach(function(p,m){co[p]=function(x){return Mi(x)===p||"a"+(m<1?"n ":" ")+p}});var Ql={};co.transitional=function(p,m,x){function f(A,v){return"[Axios v1.2.3] Transitional option '"+A+"'"+v+(x?". "+x:"")}return function(A,v,S){if(p===!1)throw new Ne(f(v," has been removed"+(m?" in "+m:"")),Ne.ERR_DEPRECATED);return m&&!Ql[v]&&(Ql[v]=!0,console.warn(f(v," has been deprecated since v"+m+" and will be removed in the near future"))),!p||p(A,v,S)}};const uo={assertOptions:function(p,m,x){if(Mi(p)!=="object")throw new Ne("options must be an object",Ne.ERR_BAD_OPTION_VALUE);for(var f=Object.keys(p),A=f.length;A-- >0;){var v=f[A],S=m[v];if(S){var k=p[v],L=k===void 0||S(k,v,p);if(L!==!0)throw new Ne("option "+v+" must be "+L,Ne.ERR_BAD_OPTION_VALUE)}else if(x!==!0)throw new Ne("Unknown option "+v,Ne.ERR_BAD_OPTION)}},validators:co};function Or(p){return Or=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(m){return typeof m}:function(m){return m&&typeof Symbol=="function"&&m.constructor===Symbol&&m!==Symbol.prototype?"symbol":typeof m},Or(p)}function Lp(p,m){for(var x=0;x<m.length;x++){var f=m[x];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(p,(A=function(v,S){if(Or(v)!=="object"||v===null)return v;var k=v[Symbol.toPrimitive];if(k!==void 0){var L=k.call(v,"string");if(Or(L)!=="object")return L;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(v)}(f.key),Or(A)==="symbol"?A:String(A)),f)}var A}var yn=uo.validators,Ni=function(){function p(f){(function(A,v){if(!(A instanceof v))throw new TypeError("Cannot call a class as a function")})(this,p),this.defaults=f,this.interceptors={request:new Ml,response:new Ml}}var m,x;return m=p,(x=[{key:"request",value:function(f,A){typeof f=="string"?(A=A||{}).url=f:A=f||{};var v,S=A=Vn(this.defaults,A),k=S.transitional,L=S.paramsSerializer,N=S.headers;k!==void 0&&uo.assertOptions(k,{silentJSONParsing:yn.transitional(yn.boolean),forcedJSONParsing:yn.transitional(yn.boolean),clarifyTimeoutError:yn.transitional(yn.boolean)},!1),L!==void 0&&uo.assertOptions(L,{encode:yn.function,serialize:yn.function},!0),A.method=(A.method||this.defaults.method||"get").toLowerCase(),(v=N&&V.merge(N.common,N[A.method]))&&V.forEach(["delete","get","head","post","put","patch","common"],function(Ye){delete N[Ye]}),A.headers=on.concat(v,N);var G=[],se=!0;this.interceptors.request.forEach(function(Ye){typeof Ye.runWhen=="function"&&Ye.runWhen(A)===!1||(se=se&&Ye.synchronous,G.unshift(Ye.fulfilled,Ye.rejected))});var de,fe=[];this.interceptors.response.forEach(function(Ye){fe.push(Ye.fulfilled,Ye.rejected)});var ue,oe=0;if(!se){var be=[Wl.bind(this),void 0];for(be.unshift.apply(be,G),be.push.apply(be,fe),ue=be.length,de=Promise.resolve(A);oe<ue;)de=de.then(be[oe++],be[oe++]);return de}ue=G.length;var _e=A;for(oe=0;oe<ue;){var lt=G[oe++],rt=G[oe++];try{_e=lt(_e)}catch(Ye){rt.call(this,Ye);break}}try{de=Wl.call(this,_e)}catch(Ye){return Promise.reject(Ye)}for(oe=0,ue=fe.length;oe<ue;)de=de.then(fe[oe++],fe[oe++]);return de}},{key:"getUri",value:function(f){return Fl(zl((f=Vn(this.defaults,f)).baseURL,f.url),f.params,f.paramsSerializer)}}])&&Lp(m.prototype,x),Object.defineProperty(m,"prototype",{writable:!1}),p}();V.forEach(["delete","get","head","options"],function(p){Ni.prototype[p]=function(m,x){return this.request(Vn(x||{},{method:p,url:m,data:(x||{}).data}))}}),V.forEach(["post","put","patch"],function(p){function m(x){return function(f,A,v){return this.request(Vn(v||{},{method:p,headers:x?{"Content-Type":"multipart/form-data"}:{},url:f,data:A}))}}Ni.prototype[p]=m(),Ni.prototype[p+"Form"]=m(!0)});const Ui=Ni;function Fr(p){return Fr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(m){return typeof m}:function(m){return m&&typeof Symbol=="function"&&m.constructor===Symbol&&m!==Symbol.prototype?"symbol":typeof m},Fr(p)}function Xl(p,m){for(var x=0;x<m.length;x++){var f=m[x];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(p,(A=function(v,S){if(Fr(v)!=="object"||v===null)return v;var k=v[Symbol.toPrimitive];if(k!==void 0){var L=k.call(v,"string");if(Fr(L)!=="object")return L;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(v)}(f.key),Fr(A)==="symbol"?A:String(A)),f)}var A}var Rp=function(){function p(A){if(function(k,L){if(!(k instanceof L))throw new TypeError("Cannot call a class as a function")}(this,p),typeof A!="function")throw new TypeError("executor must be a function.");var v;this.promise=new Promise(function(k){v=k});var S=this;this.promise.then(function(k){if(S._listeners){for(var L=S._listeners.length;L-- >0;)S._listeners[L](k);S._listeners=null}}),this.promise.then=function(k){var L,N=new Promise(function(G){S.subscribe(G),L=G}).then(k);return N.cancel=function(){S.unsubscribe(L)},N},A(function(k,L,N){S.reason||(S.reason=new Fi(k,L,N),v(S.reason))})}var m,x,f;return m=p,x=[{key:"throwIfRequested",value:function(){if(this.reason)throw this.reason}},{key:"subscribe",value:function(A){this.reason?A(this.reason):this._listeners?this._listeners.push(A):this._listeners=[A]}},{key:"unsubscribe",value:function(A){if(this._listeners){var v=this._listeners.indexOf(A);v!==-1&&this._listeners.splice(v,1)}}}],f=[{key:"source",value:function(){var A;return{token:new p(function(v){A=v}),cancel:A}}}],x&&Xl(m.prototype,x),f&&Xl(m,f),Object.defineProperty(m,"prototype",{writable:!1}),p}();const Ip=Rp;function Jl(p,m){(m==null||m>p.length)&&(m=p.length);for(var x=0,f=new Array(m);x<m;x++)f[x]=p[x];return f}var ho={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(ho).forEach(function(p){var m,x,f=(x=2,function(S){if(Array.isArray(S))return S}(m=p)||function(S,k){var L=S==null?null:typeof Symbol<"u"&&S[Symbol.iterator]||S["@@iterator"];if(L!=null){var N,G,se,de,fe=[],ue=!0,oe=!1;try{if(se=(L=L.call(S)).next,k===0){if(Object(L)!==L)return;ue=!1}else for(;!(ue=(N=se.call(L)).done)&&(fe.push(N.value),fe.length!==k);ue=!0);}catch(be){oe=!0,G=be}finally{try{if(!ue&&L.return!=null&&(de=L.return(),Object(de)!==de))return}finally{if(oe)throw G}}return fe}}(m,x)||function(S,k){if(S){if(typeof S=="string")return Jl(S,k);var L=Object.prototype.toString.call(S).slice(8,-1);return L==="Object"&&S.constructor&&(L=S.constructor.name),L==="Map"||L==="Set"?Array.from(S):L==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(L)?Jl(S,k):void 0}}(m,x)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()),A=f[0],v=f[1];ho[v]=A});const _p=ho;var at=function p(m){var x=new Ui(m),f=ae(Ui.prototype.request,x);return V.extend(f,Ui.prototype,x,{allOwnKeys:!0}),V.extend(f,x,null,{allOwnKeys:!0}),f.create=function(A){return p(Vn(m,A))},f}(so);at.Axios=Ui,at.CanceledError=Fi,at.CancelToken=Ip,at.isCancel=jl,at.VERSION="1.2.3",at.toFormData=Di,at.AxiosError=Ne,at.Cancel=at.CanceledError,at.all=function(p){return Promise.all(p)},at.spread=function(p){return function(m){return p.apply(null,m)}},at.isAxiosError=function(p){return V.isObject(p)&&p.isAxiosError===!0},at.mergeConfig=Vn,at.AxiosHeaders=on,at.formToJSON=function(p){return Ul(V.isHTMLForm(p)?new FormData(p):p)},at.HttpStatusCode=_p,at.default=at;const Zl=at,Dp={send:function(p){Zl.post(p.url,p.data).then(function(m){var x=m.data;x&&x.code===0?p.success&&p.success(x):p.error&&p.error(x&&x.msg)}).catch(function(m){console.error(m),p.error&&p.error()})},read:function(p){Zl.get(p.url).then(function(m){var x=m.data;x&&x.code===0?p.success&&p.success(x.data.map(function(f){return{time:f[0],type:f[1],color:f[2],author:f[3],text:f[4]}})):p.error&&p.error(x&&x.msg)}).catch(function(m){console.error(m),p.error&&p.error()})}};function fo(p){return fo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(m){return typeof m}:function(m){return m&&typeof Symbol=="function"&&m.constructor===Symbol&&m!==Symbol.prototype?"symbol":typeof m},fo(p)}function Pp(p){var m=this;this.lang=p,this.fallbackLang=this.lang.includes("-")?this.lang.split("-")[0]:this.lang,this.tran=function(x){return x=x.toLowerCase(),Wn[m.lang]&&Wn[m.lang][x]?Wn[m.lang][x]:Wn[m.fallbackLang]&&Wn[m.fallbackLang][x]?Wn[m.fallbackLang][x]:po[x]?po[x]:x}}var po={"danmaku-loading":"Danmaku is loading",top:"Top",bottom:"Bottom",rolling:"Rolling","input-danmaku-enter":"Input danmaku, hit Enter","about-author":"About author","dplayer-feedback":"DPlayer feedback","about-dplayer":"About DPlayer",loop:"Loop",speed:"Speed","opacity-danmaku":"Opacity for danmaku",normal:"Normal","please-input-danmaku":"Please input danmaku content!","set-danmaku-color":"Set danmaku color","set-danmaku-type":"Set danmaku type","show-danmaku":"Show danmaku","video-failed":"Video load failed","danmaku-failed":"Danmaku load failed","danmaku-send-failed":"Danmaku send failed","switching-quality":"Switching to %q quality","switched-quality":"Switched to %q quality",ff:"FF %s s",rew:"REW %s s","unlimited-danmaku":"Unlimited danmaku","send-danmaku":"Send danmaku",setting:"Setting",fullscreen:"Full screen","web-fullscreen":"Web full screen",send:"Send",screenshot:"Screenshot",airplay:"AirPlay",chromecast:"ChromeCast",subtitle:"Subtitle",off:"Off","show-subs":"Show subtitle","hide-subs":"Hide subtitle",volume:"Volume",live:"Live","video-info":"Video info"},Wn={en:po,"zh-cn":{"danmaku-loading":"弹幕加载中",top:"顶部",bottom:"底部",rolling:"滚动","input-danmaku-enter":"输入弹幕，回车发送","about-author":"关于作者","dplayer-feedback":"播放器意见反馈","about-dplayer":"关于 DPlayer 播放器",loop:"洗脑循环",speed:"速度","opacity-danmaku":"弹幕透明度",normal:"正常","please-input-danmaku":"要输入弹幕内容啊喂！","set-danmaku-color":"设置弹幕颜色","set-danmaku-type":"设置弹幕类型","show-danmaku":"显示弹幕","video-failed":"视频加载失败","danmaku-failed":"弹幕加载失败","danmaku-send-failed":"弹幕发送失败","switching-quality":"正在切换至 %q 画质","switched-quality":"已经切换至 %q 画质",ff:"快进 %s 秒",rew:"快退 %s 秒","unlimited-danmaku":"海量弹幕","send-danmaku":"发送弹幕",setting:"设置",fullscreen:"全屏","web-fullscreen":"页面全屏",send:"发送",screenshot:"截图",airplay:"无线投屏",chromecast:"ChromeCast",subtitle:"字幕",off:"关闭","show-subs":"显示字幕","hide-subs":"隐藏字幕",volume:"音量",live:"直播","video-info":"视频统计信息"},"zh-tw":{"danmaku-loading":"彈幕載入中",top:"頂部",bottom:"底部",rolling:"滾動","input-danmaku-enter":"輸入彈幕，Enter 發送","about-author":"關於作者","dplayer-feedback":"播放器意見回饋","about-dplayer":"關於 DPlayer 播放器",loop:"循環播放",speed:"速度","opacity-danmaku":"彈幕透明度",normal:"正常","please-input-danmaku":"請輸入彈幕內容啊！","set-danmaku-color":"設定彈幕顏色","set-danmaku-type":"設定彈幕類型","show-danmaku":"顯示彈幕","video-failed":"影片載入失敗","danmaku-failed":"彈幕載入失敗","danmaku-send-failed":"彈幕發送失敗","switching-quality":"正在切換至 %q 畫質","switched-quality":"已經切換至 %q 畫質",ff:"快進 %s 秒",rew:"快退 %s 秒","unlimited-danmaku":"巨量彈幕","send-danmaku":"發送彈幕",setting:"設定",fullscreen:"全螢幕","web-fullscreen":"頁面全螢幕",send:"發送",screenshot:"截圖",airplay:"無線投屏",chromecast:"ChromeCast",subtitle:"字幕",off:"關閉","show-subs":"顯示字幕","hide-subs":"隱藏字幕",volume:"音量",live:"直播","video-info":"影片統計訊息"},"ko-kr":{"danmaku-loading":"Danmaku를 불러오는 중입니다.",top:"Top",bottom:"Bottom",rolling:"Rolling","input-danmaku-enter":"Danmaku를 입력하고 Enter를 누르세요.","about-author":"만든이","dplayer-feedback":"피드백 보내기","about-dplayer":"DPlayer 정보",loop:"반복",speed:"배속","opacity-danmaku":"Danmaku 불투명도",normal:"표준","please-input-danmaku":"Danmaku를 입력하세요!","set-danmaku-color":"Danmaku 색상","set-danmaku-type":"Danmaku 설정","show-danmaku":"Danmaku 표시","video-failed":"비디오를 불러오지 못했습니다.","danmaku-failed":"Danmaku를 불러오지 못했습니다.","danmaku-send-failed":"Danmaku 전송에 실패했습니다.","Switching to":"","Switched to":"","switching-quality":"전환 %q 화질","switched-quality":"전환 됨 %q 화질",ff:"앞으로 %s 초",rew:"뒤로 %s 초","unlimited-danmaku":"끝없는 Danmaku","send-danmaku":"Danmaku 보내기",setting:"설정",fullscreen:"전체 화면","web-fullscreen":"웹 내 전체화면",send:"보내기",screenshot:"화면 캡쳐",airplay:"에어플레이",chromecast:"ChromeCast",subtitle:"부제",off:"끄다","show-subs":"자막 보이기","hide-subs":"자막 숨기기",Volume:"볼륨",live:"생방송","video-info":"비디오 정보"},de:{"danmaku-loading":"Danmaku lädt...",top:"Oben",bottom:"Unten",rolling:"Rollend","input-danmaku-enter":"Drücke Enter nach dem Einfügen vom Danmaku","about-author":"Über den Autor","dplayer-feedback":"DPlayer Feedback","about-dplayer":"Über DPlayer",loop:"Wiederholen",speed:"Geschwindigkeit","opacity-danmaku":"Transparenz für Danmaku",normal:"Normal","please-input-danmaku":"Bitte Danmaku Inhalt eingeben!","set-danmaku-color":"Danmaku Farbe festlegen","set-danmaku-type":"Danmaku Typ festlegen","show-danmaku":"Zeige Danmaku","video-failed":"Das Video konnte nicht geladen werden","danmaku-failed":"Danmaku konnte nicht geladen werden","danmaku-send-failed":"Das senden von Danmaku ist fehgeschlagen","switching-quality":"Wechsle zur %q Qualität","switched-quality":"Zur %q Qualität gewechselt",ff:"%s s Vorwärts",rew:"%s s Zurück","unlimited-danmaku":"Unlimitiertes Danmaku","send-danmaku":"Sende Danmaku",setting:"Einstellungen",fullscreen:"Vollbild","web-fullscreen":"Browser Vollbild",send:"Senden",screenshot:"Screenshot",airplay:"AirPlay","show-subs":"Zeige Untertitel",chromecast:"ChromeCast",subtitle:"Untertitel",off:"Schließung","hide-subs":"Verstecke Untertitel",volume:"Lautstärke",live:"Live","video-info":"Video Info"}},Bp=i(730),Op=i.n(Bp),Fp=i(74),Mp=i.n(Fp),Np=i(437),Up=i.n(Np),$p=i(644),Hp=i.n($p),Gp=i(324),Kp=i.n(Gp),jp=i(574),qp=i.n(jp),zp=i(300),Vp=i.n(zp),Wp=i(934),Yp=i.n(Wp),Qp=i(428),Xp=i.n(Qp),Jp=i(807),Zp=i.n(Jp),e0=i(338),t0=i.n(e0),n0=i(254),r0=i.n(n0),i0=i(965),s0=i.n(i0),o0=i(113),a0=i.n(o0),l0=i(251),c0=i.n(l0),d0=i(410),u0=i.n(d0),h0=i(182),f0=i.n(h0),p0=i(193),m0=i.n(p0);const Ot={play:Op(),pause:Mp(),volumeUp:Up(),volumeDown:Hp(),volumeOff:Kp(),full:qp(),fullWeb:Vp(),setting:Yp(),right:Xp(),comment:Zp(),commentOff:t0(),send:r0(),pallette:s0(),camera:a0(),subtitle:u0(),loading:f0(),airplay:c0(),chromecast:m0()};var g0=i(916),y0=i.n(g0);function Mr(p){return Mr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(m){return typeof m}:function(m){return m&&typeof Symbol=="function"&&m.constructor===Symbol&&m!==Symbol.prototype?"symbol":typeof m},Mr(p)}function ec(p,m){for(var x=0;x<m.length;x++){var f=m[x];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(p,(A=function(v,S){if(Mr(v)!=="object"||v===null)return v;var k=v[Symbol.toPrimitive];if(k!==void 0){var L=k.call(v,"string");if(Mr(L)!=="object")return L;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(v)}(f.key),Mr(A)==="symbol"?A:String(A)),f)}var A}var A0=function(){function p(A){(function(v,S){if(!(v instanceof S))throw new TypeError("Cannot call a class as a function")})(this,p),this.container=A.container,this.options=A.options,this.index=A.index,this.tran=A.tran,this.init()}var m,x,f;return m=p,f=[{key:"NewNotice",value:function(A,v,S){var k=document.createElement("div");return k.classList.add("dplayer-notice"),k.style.opacity=v,k.innerText=A,S&&(k.id="dplayer-notice-".concat(S)),k}}],(x=[{key:"init",value:function(){this.container.innerHTML=y0()({options:this.options,index:this.index,tran:this.tran,icons:Ot,mobile:z.isMobile,video:{current:!0,pic:this.options.video.pic,screenshot:this.options.screenshot,airplay:!(!z.isSafari||z.isChrome)&&this.options.airplay,chromecast:this.options.chromecast,preload:this.options.preload,url:this.options.video.url,subtitle:this.options.subtitle}}),this.volumeBar=this.container.querySelector(".dplayer-volume-bar-inner"),this.volumeBarWrap=this.container.querySelector(".dplayer-volume-bar"),this.volumeBarWrapWrap=this.container.querySelector(".dplayer-volume-bar-wrap"),this.volumeButton=this.container.querySelector(".dplayer-volume"),this.volumeButtonIcon=this.container.querySelector(".dplayer-volume-icon"),this.volumeIcon=this.container.querySelector(".dplayer-volume-icon .dplayer-icon-content"),this.playedBar=this.container.querySelector(".dplayer-played"),this.loadedBar=this.container.querySelector(".dplayer-loaded"),this.playedBarWrap=this.container.querySelector(".dplayer-bar-wrap"),this.playedBarTime=this.container.querySelector(".dplayer-bar-time"),this.danmaku=this.container.querySelector(".dplayer-danmaku"),this.danmakuLoading=this.container.querySelector(".dplayer-danloading"),this.video=this.container.querySelector(".dplayer-video-current"),this.bezel=this.container.querySelector(".dplayer-bezel-icon"),this.playButton=this.container.querySelector(".dplayer-play-icon"),this.mobilePlayButton=this.container.querySelector(".dplayer-mobile-play"),this.videoWrap=this.container.querySelector(".dplayer-video-wrap"),this.controllerMask=this.container.querySelector(".dplayer-controller-mask"),this.ptime=this.container.querySelector(".dplayer-ptime"),this.settingButton=this.container.querySelector(".dplayer-setting-icon"),this.settingBox=this.container.querySelector(".dplayer-setting-box"),this.mask=this.container.querySelector(".dplayer-mask"),this.loop=this.container.querySelector(".dplayer-setting-loop"),this.loopToggle=this.container.querySelector(".dplayer-setting-loop .dplayer-toggle-setting-input"),this.showDanmaku=this.container.querySelector(".dplayer-setting-showdan"),this.showDanmakuToggle=this.container.querySelector(".dplayer-showdan-setting-input"),this.unlimitDanmaku=this.container.querySelector(".dplayer-setting-danunlimit"),this.unlimitDanmakuToggle=this.container.querySelector(".dplayer-danunlimit-setting-input"),this.speed=this.container.querySelector(".dplayer-setting-speed"),this.speedItem=this.container.querySelectorAll(".dplayer-setting-speed-item"),this.danmakuOpacityBar=this.container.querySelector(".dplayer-danmaku-bar-inner"),this.danmakuOpacityBarWrap=this.container.querySelector(".dplayer-danmaku-bar"),this.danmakuOpacityBarWrapWrap=this.container.querySelector(".dplayer-danmaku-bar-wrap"),this.danmakuOpacityBox=this.container.querySelector(".dplayer-setting-danmaku"),this.dtime=this.container.querySelector(".dplayer-dtime"),this.controller=this.container.querySelector(".dplayer-controller"),this.commentInput=this.container.querySelector(".dplayer-comment-input"),this.commentButton=this.container.querySelector(".dplayer-comment-icon"),this.commentSettingBox=this.container.querySelector(".dplayer-comment-setting-box"),this.commentSettingButton=this.container.querySelector(".dplayer-comment-setting-icon"),this.commentSettingFill=this.container.querySelector(".dplayer-comment-setting-icon path"),this.commentSendButton=this.container.querySelector(".dplayer-send-icon"),this.commentSendFill=this.container.querySelector(".dplayer-send-icon path"),this.commentColorSettingBox=this.container.querySelector(".dplayer-comment-setting-color"),this.browserFullButton=this.container.querySelector(".dplayer-full-icon"),this.webFullButton=this.container.querySelector(".dplayer-full-in-icon"),this.menu=this.container.querySelector(".dplayer-menu"),this.menuItem=this.container.querySelectorAll(".dplayer-menu-item"),this.qualityList=this.container.querySelector(".dplayer-quality-list"),this.camareButton=this.container.querySelector(".dplayer-camera-icon"),this.airplayButton=this.container.querySelector(".dplayer-airplay-icon"),this.chromecastButton=this.container.querySelector(".dplayer-chromecast-icon"),this.subtitleButton=this.container.querySelector(".dplayer-subtitle-icon"),this.subtitleButtonInner=this.container.querySelector(".dplayer-subtitle-icon .dplayer-icon-content"),this.subtitlesButton=this.container.querySelector(".dplayer-subtitles-icon"),this.subtitlesBox=this.container.querySelector(".dplayer-subtitles-box"),this.subtitlesItem=this.container.querySelectorAll(".dplayer-subtitles-item"),this.subtitle=this.container.querySelector(".dplayer-subtitle"),this.subtrack=this.container.querySelector(".dplayer-subtrack"),this.qualityButton=this.container.querySelector(".dplayer-quality-icon"),this.barPreview=this.container.querySelector(".dplayer-bar-preview"),this.barWrap=this.container.querySelector(".dplayer-bar-wrap"),this.noticeList=this.container.querySelector(".dplayer-notice-list"),this.infoPanel=this.container.querySelector(".dplayer-info-panel"),this.infoPanelClose=this.container.querySelector(".dplayer-info-panel-close"),this.infoVersion=this.container.querySelector(".dplayer-info-panel-item-version .dplayer-info-panel-item-data"),this.infoFPS=this.container.querySelector(".dplayer-info-panel-item-fps .dplayer-info-panel-item-data"),this.infoType=this.container.querySelector(".dplayer-info-panel-item-type .dplayer-info-panel-item-data"),this.infoUrl=this.container.querySelector(".dplayer-info-panel-item-url .dplayer-info-panel-item-data"),this.infoResolution=this.container.querySelector(".dplayer-info-panel-item-resolution .dplayer-info-panel-item-data"),this.infoDuration=this.container.querySelector(".dplayer-info-panel-item-duration .dplayer-info-panel-item-data"),this.infoDanmakuId=this.container.querySelector(".dplayer-info-panel-item-danmaku-id .dplayer-info-panel-item-data"),this.infoDanmakuApi=this.container.querySelector(".dplayer-info-panel-item-danmaku-api .dplayer-info-panel-item-data"),this.infoDanmakuAmount=this.container.querySelector(".dplayer-info-panel-item-danmaku-amount .dplayer-info-panel-item-data")}}])&&ec(m.prototype,x),f&&ec(m,f),Object.defineProperty(m,"prototype",{writable:!1}),p}();const tc=A0;function Yn(p){return Yn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(m){return typeof m}:function(m){return m&&typeof Symbol=="function"&&m.constructor===Symbol&&m!==Symbol.prototype?"symbol":typeof m},Yn(p)}function b0(p,m){for(var x=0;x<m.length;x++){var f=m[x];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(p,(A=function(v,S){if(Yn(v)!=="object"||v===null)return v;var k=v[Symbol.toPrimitive];if(k!==void 0){var L=k.call(v,"string");if(Yn(L)!=="object")return L;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(v)}(f.key),Yn(A)==="symbol"?A:String(A)),f)}var A}var v0=function(){function p(f){(function(A,v){if(!(A instanceof v))throw new TypeError("Cannot call a class as a function")})(this,p),this.options=f,this.player=this.options.player,this.container=this.options.container,this.danTunnel={right:{},top:{},bottom:{}},this.danIndex=0,this.dan=[],this.showing=!0,this._opacity=this.options.opacity,this.events=this.options.events,this.unlimited=this.options.unlimited,this._measure(""),this.load()}var m,x;return m=p,x=[{key:"load",value:function(){var f,A=this;f=this.options.api.maximum?"".concat(this.options.api.address,"v3/?id=").concat(this.options.api.id,"&max=").concat(this.options.api.maximum):"".concat(this.options.api.address,"v3/?id=").concat(this.options.api.id);var v=(this.options.api.addition||[]).slice(0);v.push(f),this.events&&this.events.trigger("danmaku_load_start",v),this._readAllEndpoints(v,function(S){A.dan=[].concat.apply([],S).sort(function(k,L){return k.time-L.time}),window.requestAnimationFrame(function(){A.frame()}),A.options.callback(),A.events&&A.events.trigger("danmaku_load_end")})}},{key:"reload",value:function(f){this.options.api=f,this.dan=[],this.clear(),this.load()}},{key:"_readAllEndpoints",value:function(f,A){for(var v=this,S=[],k=0,L=function(G){v.options.apiBackend.read({url:f[G],success:function(se){S[G]=se,++k===f.length&&A(S)},error:function(se){v.options.error(se||v.options.tran("danmaku-failed")),S[G]=[],++k===f.length&&A(S)}})},N=0;N<f.length;++N)L(N)}},{key:"send",value:function(f,A){var v=this,S={token:this.options.api.token,id:this.options.api.id,author:this.options.api.user,time:this.options.time(),text:f.text,color:f.color,type:f.type};this.options.apiBackend.send({url:this.options.api.address+"v3/",data:S,success:A,error:function(L){v.options.error(L||v.options.tran("danmaku-failed"))}}),this.dan.splice(this.danIndex,0,S),this.danIndex++;var k={text:this.htmlEncode(S.text),color:S.color,type:S.type,border:"2px solid ".concat(this.options.borderColor)};this.draw(k),this.events&&this.events.trigger("danmaku_send",S)}},{key:"frame",value:function(){var f=this;if(this.dan.length&&!this.paused&&this.showing){for(var A=this.dan[this.danIndex],v=[];A&&this.options.time()>parseFloat(A.time);)v.push(A),A=this.dan[++this.danIndex];this.draw(v)}window.requestAnimationFrame(function(){f.frame()})}},{key:"opacity",value:function(f){if(f!==void 0){for(var A=this.container.getElementsByClassName("dplayer-danmaku-item"),v=0;v<A.length;v++)A[v].style.opacity=f;this._opacity=f,this.events&&this.events.trigger("danmaku_opacity",this._opacity)}return this._opacity}},{key:"draw",value:function(f){var A=this;if(this.showing){var v=this.options.height,S=this.container.offsetWidth,k=this.container.offsetHeight,L=parseInt(k/v),N=function(oe){var be=oe.offsetWidth||parseInt(oe.style.width),_e=oe.getBoundingClientRect().right||A.container.getBoundingClientRect().right+be;return A.container.getBoundingClientRect().right-_e},G=function(oe){return(S+oe)/5},se=function(oe,be,_e){for(var lt=S/G(_e),rt=function(Dn){var Xn=A.danTunnel[be][Dn+""];if(!Xn||!Xn.length)return A.danTunnel[be][Dn+""]=[oe],oe.addEventListener("animationend",function(){A.danTunnel[be][Dn+""].splice(0,1)}),{v:Dn%L};if(be!=="right")return"continue";for(var ei=0;ei<Xn.length;ei++){var ac=N(Xn[ei])-10;if(ac<=S-lt*G(parseInt(Xn[ei].style.width))||ac<=0)break;if(ei===Xn.length-1)return A.danTunnel[be][Dn+""].push(oe),oe.addEventListener("animationend",function(){A.danTunnel[be][Dn+""].splice(0,1)}),{v:Dn%L}}},Ye=0;A.unlimited||Ye<L;Ye++){var bn=rt(Ye);if(bn!=="continue"&&Yn(bn)==="object")return bn.v}return-1};Object.prototype.toString.call(f)!=="[object Array]"&&(f=[f]);for(var de=document.createDocumentFragment(),fe=function(){f[ue].type=z.number2Type(f[ue].type),f[ue].color||(f[ue].color=16777215);var oe=document.createElement("div");oe.classList.add("dplayer-danmaku-item"),oe.classList.add("dplayer-danmaku-".concat(f[ue].type)),f[ue].border?oe.innerHTML='<span style="border:'.concat(f[ue].border,'">').concat(f[ue].text,"</span>"):oe.innerHTML=f[ue].text,oe.style.opacity=A._opacity,oe.style.color=z.number2Color(f[ue].color),oe.addEventListener("animationend",function(){A.container.removeChild(oe)});var be,_e=A._measure(f[ue].text);switch(f[ue].type){case"right":(be=se(oe,f[ue].type,_e))>=0&&(oe.style.width=_e+1+"px",oe.style.top=v*be+"px",oe.style.transform="translateX(-".concat(S,"px)"));break;case"top":(be=se(oe,f[ue].type))>=0&&(oe.style.top=v*be+"px");break;case"bottom":(be=se(oe,f[ue].type))>=0&&(oe.style.bottom=v*be+"px");break;default:console.error("Can't handled danmaku type: ".concat(f[ue].type))}be>=0&&(oe.classList.add("dplayer-danmaku-move"),oe.style.animationDuration=A._danAnimation(f[ue].type),de.appendChild(oe))},ue=0;ue<f.length;ue++)fe();return this.container.appendChild(de),de}}},{key:"play",value:function(){this.paused=!1}},{key:"pause",value:function(){this.paused=!0}},{key:"_measure",value:function(f){if(!this.context){var A=getComputedStyle(this.container.getElementsByClassName("dplayer-danmaku-item")[0],null);this.context=document.createElement("canvas").getContext("2d"),this.context.font=A.getPropertyValue("font")}return this.context.measureText(f).width}},{key:"seek",value:function(){this.clear();for(var f=0;f<this.dan.length;f++){if(this.dan[f].time>=this.options.time()){this.danIndex=f;break}this.danIndex=this.dan.length}}},{key:"clear",value:function(){this.danTunnel={right:{},top:{},bottom:{}},this.danIndex=0,this.options.container.innerHTML="",this.events&&this.events.trigger("danmaku_clear")}},{key:"htmlEncode",value:function(f){return f.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2f;")}},{key:"resize",value:function(){for(var f=this.container.offsetWidth,A=this.container.getElementsByClassName("dplayer-danmaku-item"),v=0;v<A.length;v++)A[v].style.transform="translateX(-".concat(f,"px)")}},{key:"hide",value:function(){this.showing=!1,this.pause(),this.clear(),this.events&&this.events.trigger("danmaku_hide")}},{key:"show",value:function(){this.seek(),this.showing=!0,this.play(),this.events&&this.events.trigger("danmaku_show")}},{key:"unlimit",value:function(f){this.unlimited=f}},{key:"speed",value:function(f){this.options.api.speedRate=f}},{key:"_danAnimation",value:function(f){var A=this.options.api.speedRate||1,v=!!this.player.fullScreen.isFullScreen();return{top:"".concat((v?6:4)/A,"s"),right:"".concat((v?8:5)/A,"s"),bottom:"".concat((v?6:4)/A,"s")}[f]}}],x&&b0(m.prototype,x),Object.defineProperty(m,"prototype",{writable:!1}),p}();const E0=v0;function Nr(p){return Nr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(m){return typeof m}:function(m){return m&&typeof Symbol=="function"&&m.constructor===Symbol&&m!==Symbol.prototype?"symbol":typeof m},Nr(p)}function x0(p,m){for(var x=0;x<m.length;x++){var f=m[x];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(p,(A=function(v,S){if(Nr(v)!=="object"||v===null)return v;var k=v[Symbol.toPrimitive];if(k!==void 0){var L=k.call(v,"string");if(Nr(L)!=="object")return L;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(v)}(f.key),Nr(A)==="symbol"?A:String(A)),f)}var A}const S0=function(){function p(){(function(f,A){if(!(f instanceof A))throw new TypeError("Cannot call a class as a function")})(this,p),this.events={},this.videoEvents=["abort","canplay","canplaythrough","durationchange","emptied","ended","error","loadeddata","loadedmetadata","loadstart","mozaudioavailable","pause","play","playing","progress","ratechange","seeked","seeking","stalled","suspend","timeupdate","volumechange","waiting"],this.playerEvents=["screenshot","thumbnails_show","thumbnails_hide","danmaku_show","danmaku_hide","danmaku_clear","danmaku_loaded","danmaku_send","danmaku_opacity","contextmenu_show","contextmenu_hide","notice_show","notice_hide","quality_start","quality_end","destroy","resize","fullscreen","fullscreen_cancel","webfullscreen","webfullscreen_cancel","subtitle_show","subtitle_hide","subtitle_change"]}var m,x;return m=p,(x=[{key:"on",value:function(f,A){this.type(f)&&typeof A=="function"&&(this.events[f]||(this.events[f]=[]),this.events[f].push(A))}},{key:"trigger",value:function(f,A){if(this.events[f]&&this.events[f].length)for(var v=0;v<this.events[f].length;v++)this.events[f][v](A)}},{key:"type",value:function(f){return this.playerEvents.indexOf(f)!==-1?"player":this.videoEvents.indexOf(f)!==-1?"video":(console.error("Unknown event name: ".concat(f)),null)}}])&&x0(m.prototype,x),Object.defineProperty(m,"prototype",{writable:!1}),p}();function Ur(p){return Ur=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(m){return typeof m}:function(m){return m&&typeof Symbol=="function"&&m.constructor===Symbol&&m!==Symbol.prototype?"symbol":typeof m},Ur(p)}function T0(p,m){for(var x=0;x<m.length;x++){var f=m[x];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(p,(A=function(v,S){if(Ur(v)!=="object"||v===null)return v;var k=v[Symbol.toPrimitive];if(k!==void 0){var L=k.call(v,"string");if(Ur(L)!=="object")return L;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(v)}(f.key),Ur(A)==="symbol"?A:String(A)),f)}var A}var C0=function(){function p(f){var A=this;(function(v,S){if(!(v instanceof S))throw new TypeError("Cannot call a class as a function")})(this,p),this.player=f,this.lastScrollPosition={left:0,top:0},this.player.events.on("webfullscreen",function(){A.player.resize()}),this.player.events.on("webfullscreen_cancel",function(){A.player.resize(),z.setScrollPosition(A.lastScrollPosition)}),this.fullscreenchange=function(){A.player.resize(),A.isFullScreen("browser")?A.player.events.trigger("fullscreen"):(z.setScrollPosition(A.lastScrollPosition),A.player.events.trigger("fullscreen_cancel"))},this.docfullscreenchange=function(){var v=document.fullscreenElement||document.mozFullScreenElement||document.msFullscreenElement;v&&v!==A.player.container||(A.player.resize(),v?A.player.events.trigger("fullscreen"):(z.setScrollPosition(A.lastScrollPosition),A.player.events.trigger("fullscreen_cancel")))},/Firefox/.test(navigator.userAgent)?(document.addEventListener("mozfullscreenchange",this.docfullscreenchange),document.addEventListener("fullscreenchange",this.docfullscreenchange)):(this.player.container.addEventListener("fullscreenchange",this.fullscreenchange),this.player.container.addEventListener("webkitfullscreenchange",this.fullscreenchange),document.addEventListener("msfullscreenchange",this.docfullscreenchange),document.addEventListener("MSFullscreenChange",this.docfullscreenchange))}var m,x;return m=p,x=[{key:"isFullScreen",value:function(){var f=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"browser";switch(f){case"browser":return document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement||document.msFullscreenElement;case"web":return this.player.container.classList.contains("dplayer-fulled")}}},{key:"request",value:function(){var f=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"browser",A=f==="browser"?"web":"browser",v=this.isFullScreen(A);switch(v||(this.lastScrollPosition=z.getScrollPosition()),f){case"browser":this.player.container.requestFullscreen?this.player.container.requestFullscreen():this.player.container.mozRequestFullScreen?this.player.container.mozRequestFullScreen():this.player.container.webkitRequestFullscreen?this.player.container.webkitRequestFullscreen():this.player.video.webkitEnterFullscreen?this.player.video.webkitEnterFullscreen():this.player.video.webkitEnterFullScreen?this.player.video.webkitEnterFullScreen():this.player.container.msRequestFullscreen&&this.player.container.msRequestFullscreen();break;case"web":this.player.container.classList.add("dplayer-fulled"),document.body.classList.add("dplayer-web-fullscreen-fix"),this.player.events.trigger("webfullscreen")}v&&this.cancel(A)}},{key:"cancel",value:function(){var f=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"browser";switch(f){case"browser":document.cancelFullScreen?document.cancelFullScreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitCancelFullScreen?document.webkitCancelFullScreen():document.webkitCancelFullscreen?document.webkitCancelFullscreen():document.msCancelFullScreen?document.msCancelFullScreen():document.msExitFullscreen&&document.msExitFullscreen();break;case"web":this.player.container.classList.remove("dplayer-fulled"),document.body.classList.remove("dplayer-web-fullscreen-fix"),this.player.events.trigger("webfullscreen_cancel")}}},{key:"toggle",value:function(){var f=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"browser";this.isFullScreen(f)?this.cancel(f):this.request(f)}},{key:"destroy",value:function(){/Firefox/.test(navigator.userAgent)?(document.removeEventListener("mozfullscreenchange",this.docfullscreenchange),document.removeEventListener("fullscreenchange",this.docfullscreenchange)):(this.player.container.removeEventListener("fullscreenchange",this.fullscreenchange),this.player.container.removeEventListener("webkitfullscreenchange",this.fullscreenchange),document.removeEventListener("msfullscreenchange",this.docfullscreenchange),document.removeEventListener("MSFullscreenChange",this.docfullscreenchange))}}],x&&T0(m.prototype,x),Object.defineProperty(m,"prototype",{writable:!1}),p}();const w0=C0;function $r(p){return $r=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(m){return typeof m}:function(m){return m&&typeof Symbol=="function"&&m.constructor===Symbol&&m!==Symbol.prototype?"symbol":typeof m},$r(p)}function k0(p,m){for(var x=0;x<m.length;x++){var f=m[x];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(p,(A=function(v,S){if($r(v)!=="object"||v===null)return v;var k=v[Symbol.toPrimitive];if(k!==void 0){var L=k.call(v,"string");if($r(L)!=="object")return L;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(v)}(f.key),$r(A)==="symbol"?A:String(A)),f)}var A}var L0=function(){function p(f){(function(A,v){if(!(A instanceof v))throw new TypeError("Cannot call a class as a function")})(this,p),this.storageName={opacity:"dplayer-danmaku-opacity",volume:"dplayer-volume",unlimited:"dplayer-danmaku-unlimited",danmaku:"dplayer-danmaku-show",subtitle:"dplayer-subtitle-show"},this.default={opacity:.7,volume:f.options.hasOwnProperty("volume")?f.options.volume:.7,unlimited:(f.options.danmaku&&f.options.danmaku.unlimited?1:0)||0,danmaku:1,subtitle:1},this.data={},this.init()}var m,x;return m=p,(x=[{key:"init",value:function(){for(var f in this.storageName){var A=this.storageName[f];this.data[f]=parseFloat(z.storage.get(A)||this.default[f])}}},{key:"get",value:function(f){return this.data[f]}},{key:"set",value:function(f,A){this.data[f]=A,z.storage.set(this.storageName[f],A)}}])&&k0(m.prototype,x),Object.defineProperty(m,"prototype",{writable:!1}),p}();const R0=L0;function Hr(p){return Hr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(m){return typeof m}:function(m){return m&&typeof Symbol=="function"&&m.constructor===Symbol&&m!==Symbol.prototype?"symbol":typeof m},Hr(p)}function I0(p,m){for(var x=0;x<m.length;x++){var f=m[x];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(p,(A=function(v,S){if(Hr(v)!=="object"||v===null)return v;var k=v[Symbol.toPrimitive];if(k!==void 0){var L=k.call(v,"string");if(Hr(L)!=="object")return L;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(v)}(f.key),Hr(A)==="symbol"?A:String(A)),f)}var A}var _0=function(){function p(f,A,v,S){(function(k,L){if(!(k instanceof L))throw new TypeError("Cannot call a class as a function")})(this,p),this.container=f,this.video=A,this.options=v,this.events=S,this.init()}var m,x;return m=p,x=[{key:"init",value:function(){var f=this;if(this.container.style.fontSize=this.options.fontSize,this.container.style.bottom=this.options.bottom,this.container.style.color=this.options.color,this.video.textTracks&&this.video.textTracks[0]){var A=this.video.textTracks[0];A.oncuechange=function(){var v=A.activeCues[A.activeCues.length-1];if(f.container.innerHTML="",v){var S=document.createElement("div");S.appendChild(v.getCueAsHTML());var k=S.innerHTML.split(/\r?\n/).map(function(L){return"<p>".concat(L,"</p>")}).join("");f.container.innerHTML=k}f.events.trigger("subtitle_change")}}}},{key:"show",value:function(){this.container.classList.remove("dplayer-subtitle-hide"),this.events.trigger("subtitle_show")}},{key:"hide",value:function(){this.container.classList.add("dplayer-subtitle-hide"),this.events.trigger("subtitle_hide")}},{key:"toggle",value:function(){this.container.classList.contains("dplayer-subtitle-hide")?this.show():this.hide()}}],x&&I0(m.prototype,x),Object.defineProperty(m,"prototype",{writable:!1}),p}();const D0=_0;function Gr(p){return Gr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(m){return typeof m}:function(m){return m&&typeof Symbol=="function"&&m.constructor===Symbol&&m!==Symbol.prototype?"symbol":typeof m},Gr(p)}function P0(p,m){for(var x=0;x<m.length;x++){var f=m[x];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(p,(A=function(v,S){if(Gr(v)!=="object"||v===null)return v;var k=v[Symbol.toPrimitive];if(k!==void 0){var L=k.call(v,"string");if(Gr(L)!=="object")return L;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(v)}(f.key),Gr(A)==="symbol"?A:String(A)),f)}var A}var B0=function(){function p(f){var A=this;(function(L,N){if(!(L instanceof N))throw new TypeError("Cannot call a class as a function")})(this,p),this.player=f,this.player.template.mask.addEventListener("click",function(){A.hide()}),this.player.template.subtitlesButton.addEventListener("click",function(){A.adaptiveHeight(),A.show()});for(var v=this.player.template.subtitlesItem.length-1,S=function(L){A.player.template.subtitlesItem[L].addEventListener("click",function(){A.hide(),A.player.options.subtitle.index!==L&&(A.player.template.subtitle.innerHTML="<p></p>",A.player.template.subtrack.src=A.player.template.subtitlesItem[L].dataset.subtitle,A.player.options.subtitle.index=L,A.player.template.subtitle.classList.contains("dplayer-subtitle-hide")&&A.subContainerShow())})},k=0;k<v;k++)S(k);this.player.template.subtitlesItem[v].addEventListener("click",function(){A.hide(),A.player.options.subtitle.index!==v&&(A.player.template.subtitle.innerHTML="<p></p>",A.player.template.subtrack.src="",A.player.options.subtitle.index=v,A.subContainerHide())})}var m,x;return m=p,(x=[{key:"subContainerShow",value:function(){this.player.template.subtitle.classList.remove("dplayer-subtitle-hide"),this.player.events.trigger("subtitle_show")}},{key:"subContainerHide",value:function(){this.player.template.subtitle.classList.add("dplayer-subtitle-hide"),this.player.events.trigger("subtitle_hide")}},{key:"hide",value:function(){this.player.template.subtitlesBox.classList.remove("dplayer-subtitles-box-open"),this.player.template.mask.classList.remove("dplayer-mask-show"),this.player.controller.disableAutoHide=!1}},{key:"show",value:function(){this.player.template.subtitlesBox.classList.add("dplayer-subtitles-box-open"),this.player.template.mask.classList.add("dplayer-mask-show"),this.player.controller.disableAutoHide=!0}},{key:"adaptiveHeight",value:function(){var f=30*this.player.template.subtitlesItem.length+14,A=.8*this.player.template.videoWrap.offsetHeight;f>=A-50?(this.player.template.subtitlesBox.style.bottom="8px",this.player.template.subtitlesBox.style["max-height"]=A-8+"px"):(this.player.template.subtitlesBox.style.bottom="50px",this.player.template.subtitlesBox.style["max-height"]=A-50+"px")}}])&&P0(m.prototype,x),Object.defineProperty(m,"prototype",{writable:!1}),p}();const O0=B0;function Kr(p){return Kr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(m){return typeof m}:function(m){return m&&typeof Symbol=="function"&&m.constructor===Symbol&&m!==Symbol.prototype?"symbol":typeof m},Kr(p)}function F0(p,m){for(var x=0;x<m.length;x++){var f=m[x];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(p,(A=function(v,S){if(Kr(v)!=="object"||v===null)return v;var k=v[Symbol.toPrimitive];if(k!==void 0){var L=k.call(v,"string");if(Kr(L)!=="object")return L;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(v)}(f.key),Kr(A)==="symbol"?A:String(A)),f)}var A}var M0=function(){function p(f){(function(A,v){if(!(A instanceof v))throw new TypeError("Cannot call a class as a function")})(this,p),this.elements={},this.elements.volume=f.volumeBar,this.elements.played=f.playedBar,this.elements.loaded=f.loadedBar,this.elements.danmaku=f.danmakuOpacityBar}var m,x;return m=p,(x=[{key:"set",value:function(f,A,v){A=Math.max(A,0),A=Math.min(A,1),this.elements[f].style[v]=100*A+"%"}},{key:"get",value:function(f){return parseFloat(this.elements[f].style.width)/100}}])&&F0(m.prototype,x),Object.defineProperty(m,"prototype",{writable:!1}),p}();const N0=M0;function jr(p){return jr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(m){return typeof m}:function(m){return m&&typeof Symbol=="function"&&m.constructor===Symbol&&m!==Symbol.prototype?"symbol":typeof m},jr(p)}function U0(p,m){for(var x=0;x<m.length;x++){var f=m[x];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(p,(A=function(v,S){if(jr(v)!=="object"||v===null)return v;var k=v[Symbol.toPrimitive];if(k!==void 0){var L=k.call(v,"string");if(jr(L)!=="object")return L;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(v)}(f.key),jr(A)==="symbol"?A:String(A)),f)}var A}var $0=function(){function p(f){(function(A,v){if(!(A instanceof v))throw new TypeError("Cannot call a class as a function")})(this,p),this.player=f,window.requestAnimationFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(A){window.setTimeout(A,1e3/60)},this.types=["loading","info","fps"],this.init()}var m,x;return m=p,(x=[{key:"init",value:function(){var f=this;this.types.map(function(A){return A!=="fps"&&f["init".concat(A,"Checker")](),A})}},{key:"initloadingChecker",value:function(){var f=this,A=0,v=0,S=!1;this.loadingChecker=setInterval(function(){f.enableloadingChecker&&(v=f.player.video.currentTime,S||v!==A||f.player.video.paused||(f.player.container.classList.add("dplayer-loading"),S=!0),S&&v>A&&!f.player.video.paused&&(f.player.container.classList.remove("dplayer-loading"),S=!1),A=v)},100)}},{key:"initfpsChecker",value:function(){var f=this;window.requestAnimationFrame(function(){if(f.enablefpsChecker)if(f.initfpsChecker(),f.fpsStart){f.fpsIndex++;var A=new Date;A-f.fpsStart>1e3&&(f.player.infoPanel.fps(f.fpsIndex/(A-f.fpsStart)*1e3),f.fpsStart=new Date,f.fpsIndex=0)}else f.fpsStart=new Date,f.fpsIndex=0;else f.fpsStart=0,f.fpsIndex=0})}},{key:"initinfoChecker",value:function(){var f=this;this.infoChecker=setInterval(function(){f.enableinfoChecker&&f.player.infoPanel.update()},1e3)}},{key:"enable",value:function(f){this["enable".concat(f,"Checker")]=!0,f==="fps"&&this.initfpsChecker()}},{key:"disable",value:function(f){this["enable".concat(f,"Checker")]=!1}},{key:"destroy",value:function(){var f=this;this.types.map(function(A){return f["enable".concat(A,"Checker")]=!1,f["".concat(A,"Checker")]&&clearInterval(f["".concat(A,"Checker")]),A})}}])&&U0(m.prototype,x),Object.defineProperty(m,"prototype",{writable:!1}),p}();const H0=$0;function qr(p){return qr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(m){return typeof m}:function(m){return m&&typeof Symbol=="function"&&m.constructor===Symbol&&m!==Symbol.prototype?"symbol":typeof m},qr(p)}function G0(p,m){for(var x=0;x<m.length;x++){var f=m[x];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(p,(A=function(v,S){if(qr(v)!=="object"||v===null)return v;var k=v[Symbol.toPrimitive];if(k!==void 0){var L=k.call(v,"string");if(qr(L)!=="object")return L;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(v)}(f.key),qr(A)==="symbol"?A:String(A)),f)}var A}const K0=function(){function p(f){var A=this;(function(v,S){if(!(v instanceof S))throw new TypeError("Cannot call a class as a function")})(this,p),this.container=f,this.container.addEventListener("animationend",function(){A.container.classList.remove("dplayer-bezel-transition")})}var m,x;return m=p,(x=[{key:"switch",value:function(f){this.container.innerHTML=f,this.container.classList.add("dplayer-bezel-transition")}}])&&G0(m.prototype,x),Object.defineProperty(m,"prototype",{writable:!1}),p}();function zr(p){return zr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(m){return typeof m}:function(m){return m&&typeof Symbol=="function"&&m.constructor===Symbol&&m!==Symbol.prototype?"symbol":typeof m},zr(p)}function j0(p,m){for(var x=0;x<m.length;x++){var f=m[x];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(p,(A=function(v,S){if(zr(v)!=="object"||v===null)return v;var k=v[Symbol.toPrimitive];if(k!==void 0){var L=k.call(v,"string");if(zr(L)!=="object")return L;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(v)}(f.key),zr(A)==="symbol"?A:String(A)),f)}var A}var q0=function(){function p(f){(function(A,v){if(!(A instanceof v))throw new TypeError("Cannot call a class as a function")})(this,p),this.container=f.container,this.barWidth=f.barWidth,this.container.style.backgroundImage="url('".concat(f.url,"')"),this.events=f.events}var m,x;return m=p,(x=[{key:"resize",value:function(f,A,v){this.container.style.width="".concat(f,"px"),this.container.style.height="".concat(A,"px"),this.container.style.top="".concat(2-A,"px"),this.barWidth=v}},{key:"show",value:function(){this.container.style.display="block",this.events&&this.events.trigger("thumbnails_show")}},{key:"move",value:function(f){this.container.style.backgroundPosition="-".concat(160*(Math.ceil(f/this.barWidth*100)-1),"px 0"),this.container.style.left="".concat(Math.min(Math.max(f-this.container.offsetWidth/2,-10),this.barWidth-150),"px")}},{key:"hide",value:function(){this.container.style.display="none",this.events&&this.events.trigger("thumbnails_hide")}}])&&j0(m.prototype,x),Object.defineProperty(m,"prototype",{writable:!1}),p}();const z0=q0;function Vr(p){return Vr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(m){return typeof m}:function(m){return m&&typeof Symbol=="function"&&m.constructor===Symbol&&m!==Symbol.prototype?"symbol":typeof m},Vr(p)}function V0(p,m){for(var x=0;x<m.length;x++){var f=m[x];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(p,(A=function(v,S){if(Vr(v)!=="object"||v===null)return v;var k=v[Symbol.toPrimitive];if(k!==void 0){var L=k.call(v,"string");if(Vr(L)!=="object")return L;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(v)}(f.key),Vr(A)==="symbol"?A:String(A)),f)}var A}var An,nc=!0,mo=!1,W0=function(){function p(f){(function(A,v){if(!(A instanceof v))throw new TypeError("Cannot call a class as a function")})(this,p),this.player=f,this.autoHideTimer=0,z.isMobile||(this.setAutoHideHandler=this.setAutoHide.bind(this),this.player.container.addEventListener("mousemove",this.setAutoHideHandler),this.player.container.addEventListener("click",this.setAutoHideHandler),this.player.on("play",this.setAutoHideHandler),this.player.on("pause",this.setAutoHideHandler)),this.initPlayButton(),this.initThumbnails(),this.initPlayedBar(),this.initFullButton(),this.initQualityButton(),this.initScreenshotButton(),this.player.options.subtitle&&typeof this.player.options.subtitle.url=="string"&&this.initSubtitleButton(),this.initHighlights(),this.initAirplayButton(),this.initChromecastButton(),z.isMobile||this.initVolumeButton()}var m,x;return m=p,(x=[{key:"initPlayButton",value:function(){var f=this;this.player.template.playButton.addEventListener("click",function(){f.player.toggle()}),this.player.template.mobilePlayButton.addEventListener("click",function(){f.player.toggle()}),z.isMobile?(this.player.template.videoWrap.addEventListener("click",function(){f.toggle()}),this.player.template.controllerMask.addEventListener("click",function(){f.toggle()})):this.player.options.preventClickToggle||(this.player.template.videoWrap.addEventListener("click",function(){f.player.toggle()}),this.player.template.controllerMask.addEventListener("click",function(){f.player.toggle()}))}},{key:"initHighlights",value:function(){var f=this;this.player.on("durationchange",function(){if(f.player.video.duration!==1&&f.player.video.duration!==1/0&&f.player.options.highlight){var A=f.player.template.playedBarWrap.querySelectorAll(".dplayer-highlight");[].slice.call(A,0).forEach(function(k){f.player.template.playedBarWrap.removeChild(k)});for(var v=0;v<f.player.options.highlight.length;v++)if(f.player.options.highlight[v].text&&f.player.options.highlight[v].time){var S=document.createElement("div");S.classList.add("dplayer-highlight"),S.style.left=f.player.options.highlight[v].time/f.player.video.duration*100+"%",S.innerHTML='<span class="dplayer-highlight-text">'+f.player.options.highlight[v].text+"</span>",f.player.template.playedBarWrap.insertBefore(S,f.player.template.playedBarTime)}}})}},{key:"initThumbnails",value:function(){var f=this;this.player.options.video.thumbnails&&(this.thumbnails=new z0({container:this.player.template.barPreview,barWidth:this.player.template.barWrap.offsetWidth,url:this.player.options.video.thumbnails,events:this.player.events}),this.player.on("loadedmetadata",function(){f.thumbnails.resize(160,f.player.video.videoHeight/f.player.video.videoWidth*160,f.player.template.barWrap.offsetWidth)}))}},{key:"initPlayedBar",value:function(){var f=this,A=function(S){var k=((S.clientX||S.changedTouches[0].clientX)-z.getBoundingClientRectViewLeft(f.player.template.playedBarWrap))/f.player.template.playedBarWrap.clientWidth;k=Math.max(k,0),k=Math.min(k,1),f.player.bar.set("played",k,"width"),f.player.template.ptime.innerHTML=z.secondToTime(k*f.player.video.duration)},v=function S(k){document.removeEventListener(z.nameMap.dragEnd,S),document.removeEventListener(z.nameMap.dragMove,A);var L=((k.clientX||k.changedTouches[0].clientX)-z.getBoundingClientRectViewLeft(f.player.template.playedBarWrap))/f.player.template.playedBarWrap.clientWidth;L=Math.max(L,0),L=Math.min(L,1),f.player.bar.set("played",L,"width"),f.player.seek(f.player.bar.get("played")*f.player.video.duration),f.player.timer.enable("progress")};this.player.template.playedBarWrap.addEventListener(z.nameMap.dragStart,function(){f.player.timer.disable("progress"),document.addEventListener(z.nameMap.dragMove,A),document.addEventListener(z.nameMap.dragEnd,v)}),this.player.template.playedBarWrap.addEventListener(z.nameMap.dragMove,function(S){if(f.player.video.duration){var k=f.player.template.playedBarWrap.getBoundingClientRect().left,L=(S.clientX||S.changedTouches[0].clientX)-k;if(L<0||L>f.player.template.playedBarWrap.offsetWidth)return;var N=f.player.video.duration*(L/f.player.template.playedBarWrap.offsetWidth);z.isMobile&&f.thumbnails&&f.thumbnails.show(),f.thumbnails&&f.thumbnails.move(L),f.player.template.playedBarTime.style.left="".concat(L-(N>=3600?25:20),"px"),f.player.template.playedBarTime.innerText=z.secondToTime(N),f.player.template.playedBarTime.classList.remove("hidden")}}),this.player.template.playedBarWrap.addEventListener(z.nameMap.dragEnd,function(){z.isMobile&&f.thumbnails&&f.thumbnails.hide()}),z.isMobile||(this.player.template.playedBarWrap.addEventListener("mouseenter",function(){f.player.video.duration&&(f.thumbnails&&f.thumbnails.show(),f.player.template.playedBarTime.classList.remove("hidden"))}),this.player.template.playedBarWrap.addEventListener("mouseleave",function(){f.player.video.duration&&(f.thumbnails&&f.thumbnails.hide(),f.player.template.playedBarTime.classList.add("hidden"))}))}},{key:"initFullButton",value:function(){var f=this;this.player.template.browserFullButton.addEventListener("click",function(){f.player.fullScreen.toggle("browser")}),this.player.template.webFullButton.addEventListener("click",function(){f.player.fullScreen.toggle("web")})}},{key:"initVolumeButton",value:function(){var f=this,A=function(S){var k=S||window.event,L=((k.clientX||k.changedTouches[0].clientX)-z.getBoundingClientRectViewLeft(f.player.template.volumeBarWrap)-5.5)/35;f.player.volume(L)},v=function S(){document.removeEventListener(z.nameMap.dragEnd,S),document.removeEventListener(z.nameMap.dragMove,A),f.player.template.volumeButton.classList.remove("dplayer-volume-active")};this.player.template.volumeBarWrapWrap.addEventListener("click",function(S){var k=S||window.event,L=((k.clientX||k.changedTouches[0].clientX)-z.getBoundingClientRectViewLeft(f.player.template.volumeBarWrap)-5.5)/35;f.player.volume(L)}),this.player.template.volumeBarWrapWrap.addEventListener(z.nameMap.dragStart,function(){document.addEventListener(z.nameMap.dragMove,A),document.addEventListener(z.nameMap.dragEnd,v),f.player.template.volumeButton.classList.add("dplayer-volume-active")}),this.player.template.volumeButtonIcon.addEventListener("click",function(){f.player.video.muted?(f.player.video.muted=!1,f.player.switchVolumeIcon(),f.player.bar.set("volume",f.player.volume(),"width")):(f.player.video.muted=!0,f.player.template.volumeIcon.innerHTML=Ot.volumeOff,f.player.bar.set("volume",0,"width"))})}},{key:"initQualityButton",value:function(){var f=this;this.player.options.video.quality&&this.player.template.qualityList.addEventListener("click",function(A){A.target.classList.contains("dplayer-quality-item")&&f.player.switchQuality(A.target.dataset.index)})}},{key:"initScreenshotButton",value:function(){var f=this;this.player.options.screenshot&&this.player.template.camareButton.addEventListener("click",function(){var A,v=document.createElement("canvas");v.width=f.player.video.videoWidth,v.height=f.player.video.videoHeight,v.getContext("2d").drawImage(f.player.video,0,0,v.width,v.height),v.toBlob(function(S){A=URL.createObjectURL(S);var k=document.createElement("a");k.href=A,k.download="DPlayer.png",k.style.display="none",document.body.appendChild(k),k.click(),document.body.removeChild(k),URL.revokeObjectURL(A),f.player.events.trigger("screenshot",A)})})}},{key:"initAirplayButton",value:function(){this.player.options.airplay&&(window.WebKitPlaybackTargetAvailabilityEvent?this.player.video.addEventListener("webkitplaybacktargetavailabilitychanged",(function(f){f.availability==="available"?this.template.airplayButton.disable=!1:this.template.airplayButton.disable=!0,this.template.airplayButton.addEventListener("click",(function(){this.video.webkitShowPlaybackTargetPicker()}).bind(this))}).bind(this.player)):this.player.template.airplayButton.style.display="none")}},{key:"initChromecast",value:function(){var f=window.document.createElement("script");f.setAttribute("type","text/javascript"),f.setAttribute("src","https://www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1"),window.document.body.appendChild(f),window.__onGCastApiAvailable=function(A){if(A){var v=new(An=window.chrome.cast).SessionRequest(An.media.DEFAULT_MEDIA_RECEIVER_APP_ID),S=new An.ApiConfig(v,function(){},function(k){k===An.ReceiverAvailability.AVAILABLE&&console.log("chromecast: ",k)});An.initialize(S,function(){})}}}},{key:"initChromecastButton",value:function(){var f=this;if(this.player.options.chromecast){nc&&(nc=!1,this.initChromecast());var A=function(S,k){f.currentMedia=k},v=function(S){console.error("Error launching media",S)};this.player.template.chromecastButton.addEventListener("click",function(){mo?(mo=!1,f.currentMedia.stop(),f.session.stop(),f.initChromecast()):(mo=!0,An.requestSession(function(S){var k,L,N;f.session=S,k=f.player.options.video.url,L=new An.media.MediaInfo(k),N=new An.media.LoadRequest(L),f.session?f.session.loadMedia(N,A.bind(f,"loadMedia"),v).play():window.open(k)},function(S){S.code==="cancel"?f.session=void 0:console.error("Error selecting a cast device",S)}))})}}},{key:"initSubtitleButton",value:function(){var f=this;this.player.events.on("subtitle_show",function(){f.player.template.subtitleButton.dataset.balloon=f.player.tran("hide-subs"),f.player.template.subtitleButtonInner.style.opacity="",f.player.user.set("subtitle",1)}),this.player.events.on("subtitle_hide",function(){f.player.template.subtitleButton.dataset.balloon=f.player.tran("show-subs"),f.player.template.subtitleButtonInner.style.opacity="0.4",f.player.user.set("subtitle",0)}),this.player.template.subtitleButton.addEventListener("click",function(){f.player.subtitle.toggle()})}},{key:"setAutoHide",value:function(){var f=this;this.show(),clearTimeout(this.autoHideTimer),this.autoHideTimer=setTimeout(function(){!f.player.video.played.length||f.player.paused||f.disableAutoHide||f.hide()},3e3)}},{key:"show",value:function(){this.player.container.classList.remove("dplayer-hide-controller")}},{key:"hide",value:function(){this.player.container.classList.add("dplayer-hide-controller"),this.player.setting.hide(),this.player.comment&&this.player.comment.hide()}},{key:"isShow",value:function(){return!this.player.container.classList.contains("dplayer-hide-controller")}},{key:"toggle",value:function(){this.isShow()?this.hide():this.show()}},{key:"destroy",value:function(){z.isMobile||(this.player.container.removeEventListener("mousemove",this.setAutoHideHandler),this.player.container.removeEventListener("click",this.setAutoHideHandler)),clearTimeout(this.autoHideTimer)}}])&&V0(m.prototype,x),Object.defineProperty(m,"prototype",{writable:!1}),p}();const Y0=W0;function Wr(p){return Wr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(m){return typeof m}:function(m){return m&&typeof Symbol=="function"&&m.constructor===Symbol&&m!==Symbol.prototype?"symbol":typeof m},Wr(p)}function Q0(p,m){for(var x=0;x<m.length;x++){var f=m[x];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(p,(A=function(v,S){if(Wr(v)!=="object"||v===null)return v;var k=v[Symbol.toPrimitive];if(k!==void 0){var L=k.call(v,"string");if(Wr(L)!=="object")return L;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(v)}(f.key),Wr(A)==="symbol"?A:String(A)),f)}var A}var X0=function(){function p(f){var A=this;(function(N,G){if(!(N instanceof G))throw new TypeError("Cannot call a class as a function")})(this,p),this.player=f,this.player.template.mask.addEventListener("click",function(){A.hide()}),this.player.template.settingButton.addEventListener("click",function(){A.show()}),this.loop=this.player.options.loop,this.player.template.loopToggle.checked=this.loop,this.player.template.loop.addEventListener("click",function(){A.player.template.loopToggle.checked=!A.player.template.loopToggle.checked,A.player.template.loopToggle.checked?A.loop=!0:A.loop=!1,A.hide()}),this.showDanmaku=this.player.user.get("danmaku"),this.showDanmaku||this.player.danmaku&&this.player.danmaku.hide(),this.player.template.showDanmakuToggle.checked=this.showDanmaku,this.player.template.showDanmaku.addEventListener("click",function(){A.player.template.showDanmakuToggle.checked=!A.player.template.showDanmakuToggle.checked,A.player.template.showDanmakuToggle.checked?(A.showDanmaku=!0,A.player.danmaku.show()):(A.showDanmaku=!1,A.player.danmaku.hide()),A.player.user.set("danmaku",A.showDanmaku?1:0),A.hide()}),this.unlimitDanmaku=this.player.user.get("unlimited"),this.player.template.unlimitDanmakuToggle.checked=this.unlimitDanmaku,this.player.template.unlimitDanmaku.addEventListener("click",function(){A.player.template.unlimitDanmakuToggle.checked=!A.player.template.unlimitDanmakuToggle.checked,A.player.template.unlimitDanmakuToggle.checked?(A.unlimitDanmaku=!0,A.player.danmaku.unlimit(!0)):(A.unlimitDanmaku=!1,A.player.danmaku.unlimit(!1)),A.player.user.set("unlimited",A.unlimitDanmaku?1:0),A.hide()}),this.player.template.speed.addEventListener("click",function(){A.player.template.settingBox.classList.add("dplayer-setting-box-narrow"),A.player.template.settingBox.classList.add("dplayer-setting-box-speed")});for(var v=function(N){A.player.template.speedItem[N].addEventListener("click",function(){A.player.speed(A.player.template.speedItem[N].dataset.speed),A.hide()})},S=0;S<this.player.template.speedItem.length;S++)v(S);if(this.player.danmaku){this.player.on("danmaku_opacity",function(N){A.player.bar.set("danmaku",N,"width"),A.player.user.set("opacity",N)}),this.player.danmaku.opacity(this.player.user.get("opacity"));var k=function(N){var G=N||window.event,se=((G.clientX||G.changedTouches[0].clientX)-z.getBoundingClientRectViewLeft(A.player.template.danmakuOpacityBarWrap))/130;se=Math.max(se,0),se=Math.min(se,1),A.player.danmaku.opacity(se)},L=function N(){document.removeEventListener(z.nameMap.dragEnd,N),document.removeEventListener(z.nameMap.dragMove,k),A.player.template.danmakuOpacityBox.classList.remove("dplayer-setting-danmaku-active")};this.player.template.danmakuOpacityBarWrapWrap.addEventListener("click",function(N){var G=N||window.event,se=((G.clientX||G.changedTouches[0].clientX)-z.getBoundingClientRectViewLeft(A.player.template.danmakuOpacityBarWrap))/130;se=Math.max(se,0),se=Math.min(se,1),A.player.danmaku.opacity(se)}),this.player.template.danmakuOpacityBarWrapWrap.addEventListener(z.nameMap.dragStart,function(){document.addEventListener(z.nameMap.dragMove,k),document.addEventListener(z.nameMap.dragEnd,L),A.player.template.danmakuOpacityBox.classList.add("dplayer-setting-danmaku-active")})}}var m,x;return m=p,(x=[{key:"hide",value:function(){var f=this;this.player.template.settingBox.classList.remove("dplayer-setting-box-open"),this.player.template.mask.classList.remove("dplayer-mask-show"),setTimeout(function(){f.player.template.settingBox.classList.remove("dplayer-setting-box-narrow"),f.player.template.settingBox.classList.remove("dplayer-setting-box-speed")},300),this.player.controller.disableAutoHide=!1}},{key:"show",value:function(){this.player.template.settingBox.classList.add("dplayer-setting-box-open"),this.player.template.mask.classList.add("dplayer-mask-show"),this.player.controller.disableAutoHide=!0}}])&&Q0(m.prototype,x),Object.defineProperty(m,"prototype",{writable:!1}),p}();const J0=X0;function Yr(p){return Yr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(m){return typeof m}:function(m){return m&&typeof Symbol=="function"&&m.constructor===Symbol&&m!==Symbol.prototype?"symbol":typeof m},Yr(p)}function Z0(p,m){for(var x=0;x<m.length;x++){var f=m[x];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(p,(A=function(v,S){if(Yr(v)!=="object"||v===null)return v;var k=v[Symbol.toPrimitive];if(k!==void 0){var L=k.call(v,"string");if(Yr(L)!=="object")return L;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(v)}(f.key),Yr(A)==="symbol"?A:String(A)),f)}var A}var em=function(){function p(f){var A=this;(function(v,S){if(!(v instanceof S))throw new TypeError("Cannot call a class as a function")})(this,p),this.player=f,this.player.template.mask.addEventListener("click",function(){A.hide()}),this.player.template.commentButton.addEventListener("click",function(){A.show()}),this.player.template.commentSettingButton.addEventListener("click",function(){A.toggleSetting()}),this.player.template.commentColorSettingBox.addEventListener("click",function(){if(A.player.template.commentColorSettingBox.querySelector("input:checked+span")){var v=A.player.template.commentColorSettingBox.querySelector("input:checked").value;A.player.template.commentSettingFill.style.fill=v,A.player.template.commentInput.style.color=v,A.player.template.commentSendFill.style.fill=v}}),this.player.template.commentInput.addEventListener("click",function(){A.hideSetting()}),this.player.template.commentInput.addEventListener("keydown",function(v){(v||window.event).keyCode===13&&A.send()}),this.player.template.commentSendButton.addEventListener("click",function(){A.send()})}var m,x;return m=p,(x=[{key:"show",value:function(){this.player.controller.disableAutoHide=!0,this.player.template.controller.classList.add("dplayer-controller-comment"),this.player.template.mask.classList.add("dplayer-mask-show"),this.player.container.classList.add("dplayer-show-controller"),this.player.template.commentInput.focus()}},{key:"hide",value:function(){this.player.template.controller.classList.remove("dplayer-controller-comment"),this.player.template.mask.classList.remove("dplayer-mask-show"),this.player.container.classList.remove("dplayer-show-controller"),this.player.controller.disableAutoHide=!1,this.hideSetting()}},{key:"showSetting",value:function(){this.player.template.commentSettingBox.classList.add("dplayer-comment-setting-open")}},{key:"hideSetting",value:function(){this.player.template.commentSettingBox.classList.remove("dplayer-comment-setting-open")}},{key:"toggleSetting",value:function(){this.player.template.commentSettingBox.classList.contains("dplayer-comment-setting-open")?this.hideSetting():this.showSetting()}},{key:"send",value:function(){var f=this;this.player.template.commentInput.blur(),this.player.template.commentInput.value.replace(/^\s+|\s+$/g,"")?this.player.danmaku.send({text:this.player.template.commentInput.value,color:z.color2Number(this.player.container.querySelector(".dplayer-comment-setting-color input:checked").value),type:parseInt(this.player.container.querySelector(".dplayer-comment-setting-type input:checked").value)},function(){f.player.template.commentInput.value="",f.hide()}):this.player.notice(this.player.tran("please-input-danmaku"))}}])&&Z0(m.prototype,x),Object.defineProperty(m,"prototype",{writable:!1}),p}();const tm=em;function Qr(p){return Qr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(m){return typeof m}:function(m){return m&&typeof Symbol=="function"&&m.constructor===Symbol&&m!==Symbol.prototype?"symbol":typeof m},Qr(p)}function nm(p,m){for(var x=0;x<m.length;x++){var f=m[x];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(p,(A=function(v,S){if(Qr(v)!=="object"||v===null)return v;var k=v[Symbol.toPrimitive];if(k!==void 0){var L=k.call(v,"string");if(Qr(L)!=="object")return L;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(v)}(f.key),Qr(A)==="symbol"?A:String(A)),f)}var A}var rm=function(){function p(f){(function(A,v){if(!(A instanceof v))throw new TypeError("Cannot call a class as a function")})(this,p),this.player=f,this.doHotKeyHandler=this.doHotKey.bind(this),this.cancelFullScreenHandler=this.cancelFullScreen.bind(this),this.player.options.hotkey&&document.addEventListener("keydown",this.doHotKeyHandler),document.addEventListener("keydown",this.cancelFullScreenHandler)}var m,x;return m=p,(x=[{key:"doHotKey",value:function(f){if(this.player.focus){var A=document.activeElement.tagName.toUpperCase(),v=document.activeElement.getAttribute("contenteditable");if(A!=="INPUT"&&A!=="TEXTAREA"&&v!==""&&v!=="true"){var S,k=f||window.event;switch(k.keyCode){case 32:k.preventDefault(),this.player.toggle();break;case 37:if(k.preventDefault(),this.player.options.live)break;this.player.seek(this.player.video.currentTime-5),this.player.controller.setAutoHide();break;case 39:if(k.preventDefault(),this.player.options.live)break;this.player.seek(this.player.video.currentTime+5),this.player.controller.setAutoHide();break;case 38:k.preventDefault(),S=this.player.volume()+.1,this.player.volume(S);break;case 40:k.preventDefault(),S=this.player.volume()-.1,this.player.volume(S)}}}}},{key:"cancelFullScreen",value:function(f){(f||window.event).keyCode===27&&this.player.fullScreen.isFullScreen("web")&&this.player.fullScreen.cancel("web")}},{key:"destroy",value:function(){this.player.options.hotkey&&document.removeEventListener("keydown",this.doHotKeyHandler),document.removeEventListener("keydown",this.cancelFullScreenHandler)}}])&&nm(m.prototype,x),Object.defineProperty(m,"prototype",{writable:!1}),p}();const im=rm;function Xr(p){return Xr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(m){return typeof m}:function(m){return m&&typeof Symbol=="function"&&m.constructor===Symbol&&m!==Symbol.prototype?"symbol":typeof m},Xr(p)}function sm(p,m){for(var x=0;x<m.length;x++){var f=m[x];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(p,(A=function(v,S){if(Xr(v)!=="object"||v===null)return v;var k=v[Symbol.toPrimitive];if(k!==void 0){var L=k.call(v,"string");if(Xr(L)!=="object")return L;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(v)}(f.key),Xr(A)==="symbol"?A:String(A)),f)}var A}var om=function(){function p(f){var A=this;(function(v,S){if(!(v instanceof S))throw new TypeError("Cannot call a class as a function")})(this,p),this.player=f,this.shown=!1,Array.prototype.slice.call(this.player.template.menuItem).forEach(function(v,S){A.player.options.contextmenu[S].click&&v.addEventListener("click",function(){A.player.options.contextmenu[S].click(A.player),A.hide()})}),this.contextmenuHandler=function(v){if(A.shown)A.hide();else{var S=v||window.event;S.preventDefault();var k=A.player.container.getBoundingClientRect();A.show(S.clientX-k.left,S.clientY-k.top),A.player.template.mask.addEventListener("click",function(){A.hide()})}},this.player.container.addEventListener("contextmenu",this.contextmenuHandler)}var m,x;return m=p,(x=[{key:"show",value:function(f,A){this.player.template.menu.classList.add("dplayer-menu-show");var v=this.player.container.getBoundingClientRect();f+this.player.template.menu.offsetWidth>=v.width?(this.player.template.menu.style.right=v.width-f+"px",this.player.template.menu.style.left="initial"):(this.player.template.menu.style.left=f+"px",this.player.template.menu.style.right="initial"),A+this.player.template.menu.offsetHeight>=v.height?(this.player.template.menu.style.bottom=v.height-A+"px",this.player.template.menu.style.top="initial"):(this.player.template.menu.style.top=A+"px",this.player.template.menu.style.bottom="initial"),this.player.template.mask.classList.add("dplayer-mask-show"),this.shown=!0,this.player.events.trigger("contextmenu_show")}},{key:"hide",value:function(){this.player.template.mask.classList.remove("dplayer-mask-show"),this.player.template.menu.classList.remove("dplayer-menu-show"),this.shown=!1,this.player.events.trigger("contextmenu_hide")}},{key:"destroy",value:function(){this.player.container.removeEventListener("contextmenu",this.contextmenuHandler)}}])&&sm(m.prototype,x),Object.defineProperty(m,"prototype",{writable:!1}),p}();const am=om;function Jr(p){return Jr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(m){return typeof m}:function(m){return m&&typeof Symbol=="function"&&m.constructor===Symbol&&m!==Symbol.prototype?"symbol":typeof m},Jr(p)}function lm(p,m){for(var x=0;x<m.length;x++){var f=m[x];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(p,(A=function(v,S){if(Jr(v)!=="object"||v===null)return v;var k=v[Symbol.toPrimitive];if(k!==void 0){var L=k.call(v,"string");if(Jr(L)!=="object")return L;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(v)}(f.key),Jr(A)==="symbol"?A:String(A)),f)}var A}var cm=function(){function p(f){var A=this;(function(v,S){if(!(v instanceof S))throw new TypeError("Cannot call a class as a function")})(this,p),this.container=f.template.infoPanel,this.template=f.template,this.video=f.video,this.player=f,this.template.infoPanelClose.addEventListener("click",function(){A.hide()})}var m,x;return m=p,(x=[{key:"show",value:function(){this.beginTime=Date.now(),this.update(),this.player.timer.enable("info"),this.player.timer.enable("fps"),this.container.classList.remove("dplayer-info-panel-hide")}},{key:"hide",value:function(){this.player.timer.disable("info"),this.player.timer.disable("fps"),this.container.classList.add("dplayer-info-panel-hide")}},{key:"triggle",value:function(){this.container.classList.contains("dplayer-info-panel-hide")?this.show():this.hide()}},{key:"update",value:function(){this.template.infoVersion.innerHTML="v".concat("1.27.1"," ").concat("v1.27.0-12-g4f61091"),this.template.infoType.innerHTML=this.player.type,this.template.infoUrl.innerHTML=this.player.options.video.url,this.template.infoResolution.innerHTML="".concat(this.player.video.videoWidth," x ").concat(this.player.video.videoHeight),this.template.infoDuration.innerHTML=this.player.video.duration,this.player.options.danmaku&&(this.template.infoDanmakuId.innerHTML=this.player.options.danmaku.id,this.template.infoDanmakuApi.innerHTML=this.player.options.danmaku.api,this.template.infoDanmakuAmount.innerHTML=this.player.danmaku.dan.length)}},{key:"fps",value:function(f){this.template.infoFPS.innerHTML="".concat(f.toFixed(1))}}])&&lm(m.prototype,x),Object.defineProperty(m,"prototype",{writable:!1}),p}();const dm=cm;var um=i(568),hm=i.n(um);function Zr(p){return Zr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(m){return typeof m}:function(m){return m&&typeof Symbol=="function"&&m.constructor===Symbol&&m!==Symbol.prototype?"symbol":typeof m},Zr(p)}function rc(p,m){var x=Object.keys(p);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(p);m&&(f=f.filter(function(A){return Object.getOwnPropertyDescriptor(p,A).enumerable})),x.push.apply(x,f)}return x}function fm(p,m,x){return(m=sc(m))in p?Object.defineProperty(p,m,{value:x,enumerable:!0,configurable:!0,writable:!0}):p[m]=x,p}function ic(p,m){for(var x=0;x<m.length;x++){var f=m[x];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(p,sc(f.key),f)}}function sc(p){var m=function(x,f){if(Zr(x)!=="object"||x===null)return x;var A=x[Symbol.toPrimitive];if(A!==void 0){var v=A.call(x,"string");if(Zr(v)!=="object")return v;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(x)}(p);return Zr(m)==="symbol"?m:String(m)}var oc=0,Qn=[],pm=function(){function p(A){var v=this;(function(S,k){if(!(S instanceof k))throw new TypeError("Cannot call a class as a function")})(this,p),this.options=function(S){var k={container:S.element||document.getElementsByClassName("dplayer")[0],live:!1,autoplay:!1,theme:"#b7daff",loop:!1,lang:(navigator.language||navigator.browserLanguage).toLowerCase(),screenshot:!1,airplay:!0,chromecast:!1,hotkey:!0,preload:"metadata",volume:.7,playbackSpeed:[.5,.75,1,1.25,1.5,2],apiBackend:Dp,video:{},contextmenu:[],mutex:!0,pluginOptions:{hls:{},flv:{},dash:{},webtorrent:{}},preventClickToggle:!1};for(var L in k)k.hasOwnProperty(L)&&!S.hasOwnProperty(L)&&(S[L]=k[L]);return S.video&&!S.video.type&&(S.video.type="auto"),fo(S.danmaku)==="object"&&S.danmaku&&!S.danmaku.user&&(S.danmaku.user="DIYgod"),S.subtitle&&(!S.subtitle.type&&(S.subtitle.type="webvtt"),!S.subtitle.fontSize&&(S.subtitle.fontSize="20px"),!S.subtitle.bottom&&(S.subtitle.bottom="40px"),!S.subtitle.color&&(S.subtitle.color="#fff")),S.video.quality&&(S.video.url=S.video.quality[S.video.defaultQuality].url),S.lang&&(S.lang=S.lang.toLowerCase()),S.contextmenu=S.contextmenu.concat([{key:"video-info",click:function(N){N.infoPanel.triggle()}},{key:"about-author",link:"https://diygod.me"},{text:"DPlayer v".concat("1.27.1"),link:"https://github.com/MoePlayer/DPlayer"}]),S}(function(S){for(var k=1;k<arguments.length;k++){var L=arguments[k]!=null?arguments[k]:{};k%2?rc(Object(L),!0).forEach(function(N){fm(S,N,L[N])}):Object.getOwnPropertyDescriptors?Object.defineProperties(S,Object.getOwnPropertyDescriptors(L)):rc(Object(L)).forEach(function(N){Object.defineProperty(S,N,Object.getOwnPropertyDescriptor(L,N))})}return S}({preload:A.video.type==="webtorrent"?"none":"metadata"},A)),this.options.video.quality&&(this.qualityIndex=this.options.video.defaultQuality,this.quality=this.options.video.quality[this.options.video.defaultQuality]),this.tran=new Pp(this.options.lang).tran,this.events=new S0,this.user=new R0(this),this.container=this.options.container,this.noticeList={},this.container.classList.add("dplayer"),this.options.danmaku||this.container.classList.add("dplayer-no-danmaku"),this.options.live?this.container.classList.add("dplayer-live"):this.container.classList.remove("dplayer-live"),z.isMobile&&this.container.classList.add("dplayer-mobile"),this.arrow=this.container.offsetWidth<=500,this.arrow&&this.container.classList.add("dplayer-arrow"),this.options.subtitle&&Array.isArray(this.options.subtitle.url)&&(this.options.subtitle.url.push({subtitle:"",lang:"off"}),this.options.subtitle.defaultSubtitle&&(typeof this.options.subtitle.defaultSubtitle=="string"?this.options.subtitle.index=this.options.subtitle.url.findIndex(function(S){return S.lang===v.options.subtitle.defaultSubtitle||S.name===v.options.subtitle.defaultSubtitle}):typeof this.options.subtitle.defaultSubtitle=="number"&&(this.options.subtitle.index=this.options.subtitle.defaultSubtitle)),(this.options.subtitle.index===-1||!this.options.subtitle.index||this.options.subtitle.index>this.options.subtitle.url.length-1)&&(this.options.subtitle.index=this.options.subtitle.url.findIndex(function(S){return S.lang===v.options.lang})),this.options.subtitle.index===-1&&(this.options.subtitle.index=this.options.subtitle.url.length-1)),this.template=new tc({container:this.container,options:this.options,index:oc,tran:this.tran}),this.video=this.template.video,this.bar=new N0(this.template),this.bezel=new K0(this.template.bezel),this.fullScreen=new w0(this),this.controller=new Y0(this),this.options.danmaku&&(this.danmaku=new E0({player:this,container:this.template.danmaku,opacity:this.user.get("opacity"),callback:function(){setTimeout(function(){v.template.danmakuLoading.style.display="none",v.options.autoplay&&v.play()},0)},error:function(S){v.notice(S)},apiBackend:this.options.apiBackend,borderColor:this.options.theme,height:this.arrow?24:30,time:function(){return v.video.currentTime},unlimited:this.user.get("unlimited"),api:{id:this.options.danmaku.id,address:this.options.danmaku.api,token:this.options.danmaku.token,maximum:this.options.danmaku.maximum,addition:this.options.danmaku.addition,user:this.options.danmaku.user,speedRate:this.options.danmaku.speedRate},events:this.events,tran:function(S){return v.tran(S)}}),this.comment=new tm(this)),this.setting=new J0(this),this.plugins={},this.docClickFun=function(){v.focus=!1},this.containerClickFun=function(){v.focus=!0},document.addEventListener("click",this.docClickFun,!0),this.container.addEventListener("click",this.containerClickFun,!0),this.paused=!0,this.timer=new H0(this),this.hotkey=new im(this),this.contextmenu=new am(this),this.initVideo(this.video,this.quality&&this.quality.type||this.options.video.type),this.infoPanel=new dm(this),!this.danmaku&&this.options.autoplay&&this.play(),oc++,Qn.push(this)}var m,x,f;return m=p,x=[{key:"seek",value:function(A){A=Math.max(A,0),this.video.duration&&(A=Math.min(A,this.video.duration)),this.video.currentTime<A?this.notice("".concat(this.tran("ff").replace("%s",(A-this.video.currentTime).toFixed(0)))):this.video.currentTime>A&&this.notice("".concat(this.tran("rew").replace("%s",(this.video.currentTime-A).toFixed(0)))),this.video.currentTime=A,this.danmaku&&this.danmaku.seek(),this.bar.set("played",A/this.video.duration,"width"),this.template.ptime.innerHTML=z.secondToTime(A)}},{key:"play",value:function(A){var v=this;if(this.paused=!1,this.video.paused&&!z.isMobile&&this.bezel.switch(Ot.play),this.template.playButton.innerHTML=Ot.pause,this.template.mobilePlayButton.innerHTML=Ot.pause,A||ye.resolve(this.video.play()).catch(function(){v.pause()}).then(function(){}),this.timer.enable("loading"),this.container.classList.remove("dplayer-paused"),this.container.classList.add("dplayer-playing"),this.danmaku&&this.danmaku.play(),this.options.mutex)for(var S=0;S<Qn.length;S++)this!==Qn[S]&&Qn[S].pause()}},{key:"pause",value:function(A){this.paused=!0,this.container.classList.remove("dplayer-loading"),this.video.paused||z.isMobile||this.bezel.switch(Ot.pause),this.template.playButton.innerHTML=Ot.play,this.template.mobilePlayButton.innerHTML=Ot.play,A||this.video.pause(),this.timer.disable("loading"),this.container.classList.remove("dplayer-playing"),this.container.classList.add("dplayer-paused"),this.danmaku&&this.danmaku.pause()}},{key:"switchVolumeIcon",value:function(){this.volume()>=.95?this.template.volumeIcon.innerHTML=Ot.volumeUp:this.volume()>0?this.template.volumeIcon.innerHTML=Ot.volumeDown:this.template.volumeIcon.innerHTML=Ot.volumeOff}},{key:"volume",value:function(A,v,S){if(A=parseFloat(A),!isNaN(A)){A=Math.max(A,0),A=Math.min(A,1),this.bar.set("volume",A,"width");var k="".concat((100*A).toFixed(0),"%");this.template.volumeBarWrapWrap.dataset.balloon=k,v||this.user.set("volume",A),S||this.notice("".concat(this.tran("volume")," ").concat((100*A).toFixed(0),"%"),void 0,void 0,"volume"),this.video.volume=A,this.video.muted&&(this.video.muted=!1),this.switchVolumeIcon()}return this.video.volume}},{key:"toggle",value:function(){this.video.paused?this.play():this.pause()}},{key:"on",value:function(A,v){this.events.on(A,v)}},{key:"switchVideo",value:function(A,v){this.pause(),this.video.poster=A.pic?A.pic:"",this.video.src=A.url,this.initMSE(this.video,A.type||"auto"),v&&(this.template.danmakuLoading.style.display="block",this.bar.set("played",0,"width"),this.bar.set("loaded",0,"width"),this.template.ptime.innerHTML="00:00",this.template.danmaku.innerHTML="",this.danmaku&&this.danmaku.reload({id:v.id,address:v.api,token:v.token,maximum:v.maximum,addition:v.addition,user:v.user}))}},{key:"initMSE",value:function(A,v){var S=this;if(this.type=v,this.options.video.customType&&this.options.video.customType[v])Object.prototype.toString.call(this.options.video.customType[v])==="[object Function]"?this.options.video.customType[v](this.video,this):console.error("Illegal customType: ".concat(v));else switch(this.type==="auto"&&(/m3u8(#|\?|$)/i.exec(A.src)?this.type="hls":/.flv(#|\?|$)/i.exec(A.src)?this.type="flv":/.mpd(#|\?|$)/i.exec(A.src)?this.type="dash":this.type="normal"),this.type==="hls"&&(A.canPlayType("application/x-mpegURL")||A.canPlayType("application/vnd.apple.mpegURL"))&&(this.type="normal"),this.type){case"hls":if(window.Hls)if(window.Hls.isSupported()){var k=this.options.pluginOptions.hls,L=new window.Hls(k);this.plugins.hls=L,L.loadSource(A.src),L.attachMedia(A),this.events.on("destroy",function(){L.destroy(),delete S.plugins.hls})}else this.notice("Error: Hls is not supported.");else this.notice("Error: Can't find Hls.");break;case"flv":if(window.flvjs)if(window.flvjs.isSupported()){var N=window.flvjs.createPlayer(Object.assign(this.options.pluginOptions.flv.mediaDataSource||{},{type:"flv",url:A.src}),this.options.pluginOptions.flv.config);this.plugins.flvjs=N,N.attachMediaElement(A),N.load(),this.events.on("destroy",function(){N.unload(),N.detachMediaElement(),N.destroy(),delete S.plugins.flvjs})}else this.notice("Error: flvjs is not supported.");else this.notice("Error: Can't find flvjs.");break;case"dash":if(window.dashjs){var G=window.dashjs.MediaPlayer().create().initialize(A,A.src,!1),se=this.options.pluginOptions.dash;G.updateSettings(se),this.plugins.dash=G,this.events.on("destroy",function(){window.dashjs.MediaPlayer().reset(),delete S.plugins.dash})}else this.notice("Error: Can't find dashjs.");break;case"webtorrent":if(window.WebTorrent)if(window.WebTorrent.WEBRTC_SUPPORT){this.container.classList.add("dplayer-loading");var de=this.options.pluginOptions.webtorrent,fe=new window.WebTorrent(de);this.plugins.webtorrent=fe;var ue=A.src;A.src="",A.preload="metadata",A.addEventListener("durationchange",function(){return S.container.classList.remove("dplayer-loading")},{once:!0}),fe.add(ue,function(oe){oe.files.find(function(be){return be.name.endsWith(".mp4")}).renderTo(S.video,{autoplay:S.options.autoplay,controls:!1})}),this.events.on("destroy",function(){fe.remove(ue),fe.destroy(),delete S.plugins.webtorrent})}else this.notice("Error: Webtorrent is not supported.");else this.notice("Error: Can't find Webtorrent.")}}},{key:"initVideo",value:function(A,v){var S=this;this.initMSE(A,v),this.on("durationchange",function(){A.duration!==1&&A.duration!==1/0&&(S.template.dtime.innerHTML=z.secondToTime(A.duration))}),this.on("progress",function(){var N=A.buffered.length?A.buffered.end(A.buffered.length-1)/A.duration:0;S.bar.set("loaded",N,"width")}),this.on("error",function(){S.video.error&&S.tran&&S.notice&&S.type!=="webtorrent"&&S.notice(S.tran("video-failed"))}),this.on("ended",function(){S.bar.set("played",1,"width"),S.setting.loop?(S.seek(0),S.play()):S.pause(),S.danmaku&&(S.danmaku.danIndex=0)}),this.on("play",function(){S.paused&&S.play(!0)}),this.on("pause",function(){S.paused||S.pause(!0)}),this.on("timeupdate",function(){S.bar.set("played",S.video.currentTime/S.video.duration,"width");var N=z.secondToTime(S.video.currentTime);S.template.ptime.innerHTML!==N&&(S.template.ptime.innerHTML=N)});for(var k=function(N){A.addEventListener(S.events.videoEvents[N],function(G){S.events.trigger(S.events.videoEvents[N],G)})},L=0;L<this.events.videoEvents.length;L++)k(L);this.volume(this.user.get("volume"),!0,!0),this.options.subtitle&&(this.subtitle=new D0(this.template.subtitle,this.video,this.options.subtitle,this.events),Array.isArray(this.options.subtitle.url)&&(this.subtitles=new O0(this)),this.user.get("subtitle")||this.subtitle.hide())}},{key:"switchQuality",value:function(A){var v=this;if(A=typeof A=="string"?parseInt(A):A,this.qualityIndex!==A&&!this.switchingQuality){this.prevIndex=this.qualityIndex,this.qualityIndex=A,this.switchingQuality=!0,this.quality=this.options.video.quality[A],this.template.qualityButton.innerHTML=this.quality.name;var S=this.video.paused;this.video.pause();var k=hm()({current:!1,pic:null,screenshot:this.options.screenshot,preload:"auto",url:this.quality.url,subtitle:this.options.subtitle}),L=new DOMParser().parseFromString(k,"text/html").body.firstChild;this.template.videoWrap.insertBefore(L,this.template.videoWrap.getElementsByTagName("div")[0]),this.prevVideo=this.video,this.video=L,this.initVideo(this.video,this.quality.type||this.options.video.type),this.seek(this.prevVideo.currentTime),this.notice("".concat(this.tran("switching-quality").replace("%q",this.quality.name)),-1,void 0,"switch-quality"),this.events.trigger("quality_start",this.quality),this.on("canplay",function(){if(v.prevVideo){if(v.video.currentTime!==v.prevVideo.currentTime)return void v.seek(v.prevVideo.currentTime);v.template.videoWrap.removeChild(v.prevVideo),v.video.classList.add("dplayer-video-current"),S||v.video.play(),v.prevVideo=null,v.notice("".concat(v.tran("switched-quality").replace("%q",v.quality.name)),void 0,void 0,"switch-quality"),v.switchingQuality=!1,v.events.trigger("quality_end")}}),this.on("error",function(){v.video.error&&v.prevVideo&&(v.template.videoWrap.removeChild(v.video),v.video=v.prevVideo,S||v.video.play(),v.qualityIndex=v.prevIndex,v.quality=v.options.video.quality[v.qualityIndex],v.noticeTime=setTimeout(function(){v.template.notice.style.opacity=0,v.events.trigger("notice_hide")},3e3),v.prevVideo=null,v.switchingQuality=!1)})}}},{key:"notice",value:function(A){var v,S,k,L=arguments.length>1&&arguments[1]!==void 0?arguments[1]:2e3,N=arguments.length>2&&arguments[2]!==void 0?arguments[2]:.8,G=arguments.length>3?arguments[3]:void 0;if(G&&((v=document.getElementById("dplayer-notice-".concat(G)))&&(v.innerHTML=A),this.noticeList[G]&&(clearTimeout(this.noticeList[G]),this.noticeList[G]=null)),!v){var se=tc.NewNotice(A,N,G);this.template.noticeList.appendChild(se),v=se}this.events.trigger("notice_show",v),L>0&&(this.noticeList[G]=setTimeout((S=v,k=this,function(){S.addEventListener("animationend",function(){k.template.noticeList.removeChild(S)}),S.classList.add("remove-notice"),k.events.trigger("notice_hide"),k.noticeList[G]=null}),L))}},{key:"resize",value:function(){this.danmaku&&this.danmaku.resize(),this.controller.thumbnails&&this.controller.thumbnails.resize(160,this.video.videoHeight/this.video.videoWidth*160,this.template.barWrap.offsetWidth),this.events.trigger("resize")}},{key:"speed",value:function(A){this.video.playbackRate=A}},{key:"destroy",value:function(){Qn.splice(Qn.indexOf(this),1),this.pause(),document.removeEventListener("click",this.docClickFun,!0),this.container.removeEventListener("click",this.containerClickFun,!0),this.fullScreen.destroy(),this.hotkey.destroy(),this.contextmenu.destroy(),this.controller.destroy(),this.timer.destroy(),this.video.src="",this.container.innerHTML="",this.events.trigger("destroy")}}],f=[{key:"version",get:function(){return"1.27.1"}}],x&&ic(m.prototype,x),f&&ic(m,f),Object.defineProperty(m,"prototype",{writable:!1}),p}();const mm=pm;console.log(`
`.concat(" %c DPlayer v","1.27.1"," ").concat("v1.27.0-12-g4f61091"," %c https://dplayer.diygod.dev ",`
`,`
`),"color: #fadfa3; background: #030307; padding:5px 0;","background: #fadfa3; padding:5px 0;");const gm=mm})(),s.default})())})(sf);var kv=sf.exports;const sT=wv(kv);function Lv(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var of={exports:{}};(function(n,e){(function(t){var r=/^(?=((?:[a-zA-Z0-9+\-.]+:)?))\1(?=((?:\/\/[^\/?#]*)?))\2(?=((?:(?:[^?#\/]*\/)*[^;?#\/]*)?))\3((?:;[^?#]*)?)(\?[^#]*)?(#[^]*)?$/,i=/^(?=([^\/?#]*))\1([^]*)$/,s=/(?:\/|^)\.(?=\/)/g,o=/(?:\/|^)\.\.\/(?!\.\.\/)[^\/]*(?=\/)/g,a={buildAbsoluteURL:function(l,c,d){if(d=d||{},l=l.trim(),c=c.trim(),!c){if(!d.alwaysNormalize)return l;var u=a.parseURL(l);if(!u)throw new Error("Error trying to parse base URL.");return u.path=a.normalizePath(u.path),a.buildURLFromParts(u)}var h=a.parseURL(c);if(!h)throw new Error("Error trying to parse relative URL.");if(h.scheme)return d.alwaysNormalize?(h.path=a.normalizePath(h.path),a.buildURLFromParts(h)):c;var g=a.parseURL(l);if(!g)throw new Error("Error trying to parse base URL.");if(!g.netLoc&&g.path&&g.path[0]!=="/"){var y=i.exec(g.path);g.netLoc=y[1],g.path=y[2]}g.netLoc&&!g.path&&(g.path="/");var b={scheme:g.scheme,netLoc:h.netLoc,path:null,params:h.params,query:h.query,fragment:h.fragment};if(!h.netLoc&&(b.netLoc=g.netLoc,h.path[0]!=="/"))if(!h.path)b.path=g.path,h.params||(b.params=g.params,h.query||(b.query=g.query));else{var E=g.path,C=E.substring(0,E.lastIndexOf("/")+1)+h.path;b.path=a.normalizePath(C)}return b.path===null&&(b.path=d.alwaysNormalize?a.normalizePath(h.path):h.path),a.buildURLFromParts(b)},parseURL:function(l){var c=r.exec(l);return c?{scheme:c[1]||"",netLoc:c[2]||"",path:c[3]||"",params:c[4]||"",query:c[5]||"",fragment:c[6]||""}:null},normalizePath:function(l){for(l=l.split("").reverse().join("").replace(s,"");l.length!==(l=l.replace(o,"")).length;);return l.split("").reverse().join("")},buildURLFromParts:function(l){return l.scheme+l.netLoc+l.path+l.params+l.query+l.fragment}};n.exports=a})()})(of);var ul=of.exports;function Ad(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(n,i).enumerable})),t.push.apply(t,r)}return t}function pt(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Ad(Object(t),!0).forEach(function(r){_v(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):Ad(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function Rv(n,e){if(typeof n!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function Iv(n){var e=Rv(n,"string");return typeof e=="symbol"?e:String(e)}function _v(n,e,t){return e=Iv(e),e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function ot(){return ot=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},ot.apply(this,arguments)}const pe=Number.isFinite||function(n){return typeof n=="number"&&isFinite(n)},Dv=Number.isSafeInteger||function(n){return typeof n=="number"&&Math.abs(n)<=Pv},Pv=Number.MAX_SAFE_INTEGER||9007199254740991;let T=function(n){return n.MEDIA_ATTACHING="hlsMediaAttaching",n.MEDIA_ATTACHED="hlsMediaAttached",n.MEDIA_DETACHING="hlsMediaDetaching",n.MEDIA_DETACHED="hlsMediaDetached",n.BUFFER_RESET="hlsBufferReset",n.BUFFER_CODECS="hlsBufferCodecs",n.BUFFER_CREATED="hlsBufferCreated",n.BUFFER_APPENDING="hlsBufferAppending",n.BUFFER_APPENDED="hlsBufferAppended",n.BUFFER_EOS="hlsBufferEos",n.BUFFER_FLUSHING="hlsBufferFlushing",n.BUFFER_FLUSHED="hlsBufferFlushed",n.MANIFEST_LOADING="hlsManifestLoading",n.MANIFEST_LOADED="hlsManifestLoaded",n.MANIFEST_PARSED="hlsManifestParsed",n.LEVEL_SWITCHING="hlsLevelSwitching",n.LEVEL_SWITCHED="hlsLevelSwitched",n.LEVEL_LOADING="hlsLevelLoading",n.LEVEL_LOADED="hlsLevelLoaded",n.LEVEL_UPDATED="hlsLevelUpdated",n.LEVEL_PTS_UPDATED="hlsLevelPtsUpdated",n.LEVELS_UPDATED="hlsLevelsUpdated",n.AUDIO_TRACKS_UPDATED="hlsAudioTracksUpdated",n.AUDIO_TRACK_SWITCHING="hlsAudioTrackSwitching",n.AUDIO_TRACK_SWITCHED="hlsAudioTrackSwitched",n.AUDIO_TRACK_LOADING="hlsAudioTrackLoading",n.AUDIO_TRACK_LOADED="hlsAudioTrackLoaded",n.SUBTITLE_TRACKS_UPDATED="hlsSubtitleTracksUpdated",n.SUBTITLE_TRACKS_CLEARED="hlsSubtitleTracksCleared",n.SUBTITLE_TRACK_SWITCH="hlsSubtitleTrackSwitch",n.SUBTITLE_TRACK_LOADING="hlsSubtitleTrackLoading",n.SUBTITLE_TRACK_LOADED="hlsSubtitleTrackLoaded",n.SUBTITLE_FRAG_PROCESSED="hlsSubtitleFragProcessed",n.CUES_PARSED="hlsCuesParsed",n.NON_NATIVE_TEXT_TRACKS_FOUND="hlsNonNativeTextTracksFound",n.INIT_PTS_FOUND="hlsInitPtsFound",n.FRAG_LOADING="hlsFragLoading",n.FRAG_LOAD_EMERGENCY_ABORTED="hlsFragLoadEmergencyAborted",n.FRAG_LOADED="hlsFragLoaded",n.FRAG_DECRYPTED="hlsFragDecrypted",n.FRAG_PARSING_INIT_SEGMENT="hlsFragParsingInitSegment",n.FRAG_PARSING_USERDATA="hlsFragParsingUserdata",n.FRAG_PARSING_METADATA="hlsFragParsingMetadata",n.FRAG_PARSED="hlsFragParsed",n.FRAG_BUFFERED="hlsFragBuffered",n.FRAG_CHANGED="hlsFragChanged",n.FPS_DROP="hlsFpsDrop",n.FPS_DROP_LEVEL_CAPPING="hlsFpsDropLevelCapping",n.MAX_AUTO_LEVEL_UPDATED="hlsMaxAutoLevelUpdated",n.ERROR="hlsError",n.DESTROYING="hlsDestroying",n.KEY_LOADING="hlsKeyLoading",n.KEY_LOADED="hlsKeyLoaded",n.LIVE_BACK_BUFFER_REACHED="hlsLiveBackBufferReached",n.BACK_BUFFER_REACHED="hlsBackBufferReached",n.STEERING_MANIFEST_LOADED="hlsSteeringManifestLoaded",n}({}),Le=function(n){return n.NETWORK_ERROR="networkError",n.MEDIA_ERROR="mediaError",n.KEY_SYSTEM_ERROR="keySystemError",n.MUX_ERROR="muxError",n.OTHER_ERROR="otherError",n}({}),$=function(n){return n.KEY_SYSTEM_NO_KEYS="keySystemNoKeys",n.KEY_SYSTEM_NO_ACCESS="keySystemNoAccess",n.KEY_SYSTEM_NO_SESSION="keySystemNoSession",n.KEY_SYSTEM_NO_CONFIGURED_LICENSE="keySystemNoConfiguredLicense",n.KEY_SYSTEM_LICENSE_REQUEST_FAILED="keySystemLicenseRequestFailed",n.KEY_SYSTEM_SERVER_CERTIFICATE_REQUEST_FAILED="keySystemServerCertificateRequestFailed",n.KEY_SYSTEM_SERVER_CERTIFICATE_UPDATE_FAILED="keySystemServerCertificateUpdateFailed",n.KEY_SYSTEM_SESSION_UPDATE_FAILED="keySystemSessionUpdateFailed",n.KEY_SYSTEM_STATUS_OUTPUT_RESTRICTED="keySystemStatusOutputRestricted",n.KEY_SYSTEM_STATUS_INTERNAL_ERROR="keySystemStatusInternalError",n.MANIFEST_LOAD_ERROR="manifestLoadError",n.MANIFEST_LOAD_TIMEOUT="manifestLoadTimeOut",n.MANIFEST_PARSING_ERROR="manifestParsingError",n.MANIFEST_INCOMPATIBLE_CODECS_ERROR="manifestIncompatibleCodecsError",n.LEVEL_EMPTY_ERROR="levelEmptyError",n.LEVEL_LOAD_ERROR="levelLoadError",n.LEVEL_LOAD_TIMEOUT="levelLoadTimeOut",n.LEVEL_PARSING_ERROR="levelParsingError",n.LEVEL_SWITCH_ERROR="levelSwitchError",n.AUDIO_TRACK_LOAD_ERROR="audioTrackLoadError",n.AUDIO_TRACK_LOAD_TIMEOUT="audioTrackLoadTimeOut",n.SUBTITLE_LOAD_ERROR="subtitleTrackLoadError",n.SUBTITLE_TRACK_LOAD_TIMEOUT="subtitleTrackLoadTimeOut",n.FRAG_LOAD_ERROR="fragLoadError",n.FRAG_LOAD_TIMEOUT="fragLoadTimeOut",n.FRAG_DECRYPT_ERROR="fragDecryptError",n.FRAG_PARSING_ERROR="fragParsingError",n.FRAG_GAP="fragGap",n.REMUX_ALLOC_ERROR="remuxAllocError",n.KEY_LOAD_ERROR="keyLoadError",n.KEY_LOAD_TIMEOUT="keyLoadTimeOut",n.BUFFER_ADD_CODEC_ERROR="bufferAddCodecError",n.BUFFER_INCOMPATIBLE_CODECS_ERROR="bufferIncompatibleCodecsError",n.BUFFER_APPEND_ERROR="bufferAppendError",n.BUFFER_APPENDING_ERROR="bufferAppendingError",n.BUFFER_STALLED_ERROR="bufferStalledError",n.BUFFER_FULL_ERROR="bufferFullError",n.BUFFER_SEEK_OVER_HOLE="bufferSeekOverHole",n.BUFFER_NUDGE_ON_STALL="bufferNudgeOnStall",n.INTERNAL_EXCEPTION="internalException",n.INTERNAL_ABORTED="aborted",n.UNKNOWN="unknown",n}({});const Mn=function(){},Aa={trace:Mn,debug:Mn,log:Mn,warn:Mn,info:Mn,error:Mn};let pi=Aa;function Bv(n){const e=self.console[n];return e?e.bind(self.console,`[${n}] >`):Mn}function Ov(n,...e){e.forEach(function(t){pi[t]=n[t]?n[t].bind(n):Bv(t)})}function Fv(n,e){if(typeof console=="object"&&n===!0||typeof n=="object"){Ov(n,"debug","log","info","warn","error");try{pi.log(`Debug logs enabled for "${e}" in hls.js version 1.5.7`)}catch{pi=Aa}}else pi=Aa}const B=pi,Mv=/^(\d+)x(\d+)$/,bd=/(.+?)=(".*?"|.*?)(?:,|$)/g;class nt{constructor(e){typeof e=="string"&&(e=nt.parseAttrList(e)),ot(this,e)}get clientAttrs(){return Object.keys(this).filter(e=>e.substring(0,2)==="X-")}decimalInteger(e){const t=parseInt(this[e],10);return t>Number.MAX_SAFE_INTEGER?1/0:t}hexadecimalInteger(e){if(this[e]){let t=(this[e]||"0x").slice(2);t=(t.length&1?"0":"")+t;const r=new Uint8Array(t.length/2);for(let i=0;i<t.length/2;i++)r[i]=parseInt(t.slice(i*2,i*2+2),16);return r}else return null}hexadecimalIntegerAsNumber(e){const t=parseInt(this[e],16);return t>Number.MAX_SAFE_INTEGER?1/0:t}decimalFloatingPoint(e){return parseFloat(this[e])}optionalFloat(e,t){const r=this[e];return r?parseFloat(r):t}enumeratedString(e){return this[e]}bool(e){return this[e]==="YES"}decimalResolution(e){const t=Mv.exec(this[e]);if(t!==null)return{width:parseInt(t[1],10),height:parseInt(t[2],10)}}static parseAttrList(e){let t;const r={},i='"';for(bd.lastIndex=0;(t=bd.exec(e))!==null;){let s=t[2];s.indexOf(i)===0&&s.lastIndexOf(i)===s.length-1&&(s=s.slice(1,-1));const o=t[1].trim();r[o]=s}return r}}function Nv(n){return n!=="ID"&&n!=="CLASS"&&n!=="START-DATE"&&n!=="DURATION"&&n!=="END-DATE"&&n!=="END-ON-NEXT"}function Uv(n){return n==="SCTE35-OUT"||n==="SCTE35-IN"}class af{constructor(e,t){if(this.attr=void 0,this._startDate=void 0,this._endDate=void 0,this._badValueForSameId=void 0,t){const r=t.attr;for(const i in r)if(Object.prototype.hasOwnProperty.call(e,i)&&e[i]!==r[i]){B.warn(`DATERANGE tag attribute: "${i}" does not match for tags with ID: "${e.ID}"`),this._badValueForSameId=i;break}e=ot(new nt({}),r,e)}if(this.attr=e,this._startDate=new Date(e["START-DATE"]),"END-DATE"in this.attr){const r=new Date(this.attr["END-DATE"]);pe(r.getTime())&&(this._endDate=r)}}get id(){return this.attr.ID}get class(){return this.attr.CLASS}get startDate(){return this._startDate}get endDate(){if(this._endDate)return this._endDate;const e=this.duration;return e!==null?new Date(this._startDate.getTime()+e*1e3):null}get duration(){if("DURATION"in this.attr){const e=this.attr.decimalFloatingPoint("DURATION");if(pe(e))return e}else if(this._endDate)return(this._endDate.getTime()-this._startDate.getTime())/1e3;return null}get plannedDuration(){return"PLANNED-DURATION"in this.attr?this.attr.decimalFloatingPoint("PLANNED-DURATION"):null}get endOnNext(){return this.attr.bool("END-ON-NEXT")}get isValid(){return!!this.id&&!this._badValueForSameId&&pe(this.startDate.getTime())&&(this.duration===null||this.duration>=0)&&(!this.endOnNext||!!this.class)}}class eo{constructor(){this.aborted=!1,this.loaded=0,this.retry=0,this.total=0,this.chunkCount=0,this.bwEstimate=0,this.loading={start:0,first:0,end:0},this.parsing={start:0,end:0},this.buffering={start:0,first:0,end:0}}}var Ve={AUDIO:"audio",VIDEO:"video",AUDIOVIDEO:"audiovideo"};class lf{constructor(e){this._byteRange=null,this._url=null,this.baseurl=void 0,this.relurl=void 0,this.elementaryStreams={[Ve.AUDIO]:null,[Ve.VIDEO]:null,[Ve.AUDIOVIDEO]:null},this.baseurl=e}setByteRange(e,t){const r=e.split("@",2);let i;r.length===1?i=(t==null?void 0:t.byteRangeEndOffset)||0:i=parseInt(r[1]),this._byteRange=[i,parseInt(r[0])+i]}get byteRange(){return this._byteRange?this._byteRange:[]}get byteRangeStartOffset(){return this.byteRange[0]}get byteRangeEndOffset(){return this.byteRange[1]}get url(){return!this._url&&this.baseurl&&this.relurl&&(this._url=ul.buildAbsoluteURL(this.baseurl,this.relurl,{alwaysNormalize:!0})),this._url||""}set url(e){this._url=e}}class Lo extends lf{constructor(e,t){super(t),this._decryptdata=null,this.rawProgramDateTime=null,this.programDateTime=null,this.tagList=[],this.duration=0,this.sn=0,this.levelkeys=void 0,this.type=void 0,this.loader=null,this.keyLoader=null,this.level=-1,this.cc=0,this.startPTS=void 0,this.endPTS=void 0,this.startDTS=void 0,this.endDTS=void 0,this.start=0,this.deltaPTS=void 0,this.maxStartPTS=void 0,this.minEndPTS=void 0,this.stats=new eo,this.data=void 0,this.bitrateTest=!1,this.title=null,this.initSegment=null,this.endList=void 0,this.gap=void 0,this.urlId=0,this.type=e}get decryptdata(){const{levelkeys:e}=this;if(!e&&!this._decryptdata)return null;if(!this._decryptdata&&this.levelkeys&&!this.levelkeys.NONE){const t=this.levelkeys.identity;if(t)this._decryptdata=t.getDecryptData(this.sn);else{const r=Object.keys(this.levelkeys);if(r.length===1)return this._decryptdata=this.levelkeys[r[0]].getDecryptData(this.sn)}}return this._decryptdata}get end(){return this.start+this.duration}get endProgramDateTime(){if(this.programDateTime===null||!pe(this.programDateTime))return null;const e=pe(this.duration)?this.duration:0;return this.programDateTime+e*1e3}get encrypted(){var e;if((e=this._decryptdata)!=null&&e.encrypted)return!0;if(this.levelkeys){const t=Object.keys(this.levelkeys),r=t.length;if(r>1||r===1&&this.levelkeys[t[0]].encrypted)return!0}return!1}setKeyFormat(e){if(this.levelkeys){const t=this.levelkeys[e];t&&!this._decryptdata&&(this._decryptdata=t.getDecryptData(this.sn))}}abortRequests(){var e,t;(e=this.loader)==null||e.abort(),(t=this.keyLoader)==null||t.abort()}setElementaryStreamInfo(e,t,r,i,s,o=!1){const{elementaryStreams:a}=this,l=a[e];if(!l){a[e]={startPTS:t,endPTS:r,startDTS:i,endDTS:s,partial:o};return}l.startPTS=Math.min(l.startPTS,t),l.endPTS=Math.max(l.endPTS,r),l.startDTS=Math.min(l.startDTS,i),l.endDTS=Math.max(l.endDTS,s)}clearElementaryStreamInfo(){const{elementaryStreams:e}=this;e[Ve.AUDIO]=null,e[Ve.VIDEO]=null,e[Ve.AUDIOVIDEO]=null}}class $v extends lf{constructor(e,t,r,i,s){super(r),this.fragOffset=0,this.duration=0,this.gap=!1,this.independent=!1,this.relurl=void 0,this.fragment=void 0,this.index=void 0,this.stats=new eo,this.duration=e.decimalFloatingPoint("DURATION"),this.gap=e.bool("GAP"),this.independent=e.bool("INDEPENDENT"),this.relurl=e.enumeratedString("URI"),this.fragment=t,this.index=i;const o=e.enumeratedString("BYTERANGE");o&&this.setByteRange(o,s),s&&(this.fragOffset=s.fragOffset+s.duration)}get start(){return this.fragment.start+this.fragOffset}get end(){return this.start+this.duration}get loaded(){const{elementaryStreams:e}=this;return!!(e.audio||e.video||e.audiovideo)}}const Hv=10;class Gv{constructor(e){this.PTSKnown=!1,this.alignedSliding=!1,this.averagetargetduration=void 0,this.endCC=0,this.endSN=0,this.fragments=void 0,this.fragmentHint=void 0,this.partList=null,this.dateRanges=void 0,this.live=!0,this.ageHeader=0,this.advancedDateTime=void 0,this.updated=!0,this.advanced=!0,this.availabilityDelay=void 0,this.misses=0,this.startCC=0,this.startSN=0,this.startTimeOffset=null,this.targetduration=0,this.totalduration=0,this.type=null,this.url=void 0,this.m3u8="",this.version=null,this.canBlockReload=!1,this.canSkipUntil=0,this.canSkipDateRanges=!1,this.skippedSegments=0,this.recentlyRemovedDateranges=void 0,this.partHoldBack=0,this.holdBack=0,this.partTarget=0,this.preloadHint=void 0,this.renditionReports=void 0,this.tuneInGoal=0,this.deltaUpdateFailed=void 0,this.driftStartTime=0,this.driftEndTime=0,this.driftStart=0,this.driftEnd=0,this.encryptedFragments=void 0,this.playlistParsingError=null,this.variableList=null,this.hasVariableRefs=!1,this.fragments=[],this.encryptedFragments=[],this.dateRanges={},this.url=e}reloaded(e){if(!e){this.advanced=!0,this.updated=!0;return}const t=this.lastPartSn-e.lastPartSn,r=this.lastPartIndex-e.lastPartIndex;this.updated=this.endSN!==e.endSN||!!r||!!t||!this.live,this.advanced=this.endSN>e.endSN||t>0||t===0&&r>0,this.updated||this.advanced?this.misses=Math.floor(e.misses*.6):this.misses=e.misses+1,this.availabilityDelay=e.availabilityDelay}get hasProgramDateTime(){return this.fragments.length?pe(this.fragments[this.fragments.length-1].programDateTime):!1}get levelTargetDuration(){return this.averagetargetduration||this.targetduration||Hv}get drift(){const e=this.driftEndTime-this.driftStartTime;return e>0?(this.driftEnd-this.driftStart)*1e3/e:1}get edge(){return this.partEnd||this.fragmentEnd}get partEnd(){var e;return(e=this.partList)!=null&&e.length?this.partList[this.partList.length-1].end:this.fragmentEnd}get fragmentEnd(){var e;return(e=this.fragments)!=null&&e.length?this.fragments[this.fragments.length-1].end:0}get age(){return this.advancedDateTime?Math.max(Date.now()-this.advancedDateTime,0)/1e3:0}get lastPartIndex(){var e;return(e=this.partList)!=null&&e.length?this.partList[this.partList.length-1].index:-1}get lastPartSn(){var e;return(e=this.partList)!=null&&e.length?this.partList[this.partList.length-1].fragment.sn:this.endSN}}function hl(n){return Uint8Array.from(atob(n),e=>e.charCodeAt(0))}function Kv(n){const e=ba(n).subarray(0,16),t=new Uint8Array(16);return t.set(e,16-e.length),t}function jv(n){const e=function(r,i,s){const o=r[i];r[i]=r[s],r[s]=o};e(n,0,3),e(n,1,2),e(n,4,5),e(n,6,7)}function qv(n){const e=n.split(":");let t=null;if(e[0]==="data"&&e.length===2){const r=e[1].split(";"),i=r[r.length-1].split(",");if(i.length===2){const s=i[0]==="base64",o=i[1];s?(r.splice(-1,1),t=hl(o)):t=Kv(o)}}return t}function ba(n){return Uint8Array.from(unescape(encodeURIComponent(n)),e=>e.charCodeAt(0))}const xr=typeof self<"u"?self:void 0;var Ze={CLEARKEY:"org.w3.clearkey",FAIRPLAY:"com.apple.fps",PLAYREADY:"com.microsoft.playready",WIDEVINE:"com.widevine.alpha"},St={CLEARKEY:"org.w3.clearkey",FAIRPLAY:"com.apple.streamingkeydelivery",PLAYREADY:"com.microsoft.playready",WIDEVINE:"urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed"};function vd(n){switch(n){case St.FAIRPLAY:return Ze.FAIRPLAY;case St.PLAYREADY:return Ze.PLAYREADY;case St.WIDEVINE:return Ze.WIDEVINE;case St.CLEARKEY:return Ze.CLEARKEY}}var cf={WIDEVINE:"edef8ba979d64acea3c827dcd51d21ed"};function zv(n){if(n===cf.WIDEVINE)return Ze.WIDEVINE}function Ed(n){switch(n){case Ze.FAIRPLAY:return St.FAIRPLAY;case Ze.PLAYREADY:return St.PLAYREADY;case Ze.WIDEVINE:return St.WIDEVINE;case Ze.CLEARKEY:return St.CLEARKEY}}function Ro(n){const{drmSystems:e,widevineLicenseUrl:t}=n,r=e?[Ze.FAIRPLAY,Ze.WIDEVINE,Ze.PLAYREADY,Ze.CLEARKEY].filter(i=>!!e[i]):[];return!r[Ze.WIDEVINE]&&t&&r.push(Ze.WIDEVINE),r}const df=function(n){return xr!=null&&(n=xr.navigator)!=null&&n.requestMediaKeySystemAccess?self.navigator.requestMediaKeySystemAccess.bind(self.navigator):null}();function Vv(n,e,t,r){let i;switch(n){case Ze.FAIRPLAY:i=["cenc","sinf"];break;case Ze.WIDEVINE:case Ze.PLAYREADY:i=["cenc"];break;case Ze.CLEARKEY:i=["cenc","keyids"];break;default:throw new Error(`Unknown key-system: ${n}`)}return Wv(i,e,t,r)}function Wv(n,e,t,r){return[{initDataTypes:n,persistentState:r.persistentState||"optional",distinctiveIdentifier:r.distinctiveIdentifier||"optional",sessionTypes:r.sessionTypes||[r.sessionType||"temporary"],audioCapabilities:e.map(s=>({contentType:`audio/mp4; codecs="${s}"`,robustness:r.audioRobustness||"",encryptionScheme:r.audioEncryptionScheme||null})),videoCapabilities:t.map(s=>({contentType:`video/mp4; codecs="${s}"`,robustness:r.videoRobustness||"",encryptionScheme:r.videoEncryptionScheme||null}))}]}function qn(n,e,t){return Uint8Array.prototype.slice?n.slice(e,t):new Uint8Array(Array.prototype.slice.call(n,e,t))}const fl=(n,e)=>e+10<=n.length&&n[e]===73&&n[e+1]===68&&n[e+2]===51&&n[e+3]<255&&n[e+4]<255&&n[e+6]<128&&n[e+7]<128&&n[e+8]<128&&n[e+9]<128,uf=(n,e)=>e+10<=n.length&&n[e]===51&&n[e+1]===68&&n[e+2]===73&&n[e+3]<255&&n[e+4]<255&&n[e+6]<128&&n[e+7]<128&&n[e+8]<128&&n[e+9]<128,Ci=(n,e)=>{const t=e;let r=0;for(;fl(n,e);){r+=10;const i=to(n,e+6);r+=i,uf(n,e+10)&&(r+=10),e+=r}if(r>0)return n.subarray(t,t+r)},to=(n,e)=>{let t=0;return t=(n[e]&127)<<21,t|=(n[e+1]&127)<<14,t|=(n[e+2]&127)<<7,t|=n[e+3]&127,t},Yv=(n,e)=>fl(n,e)&&to(n,e+6)+10<=n.length-e,pl=n=>{const e=ff(n);for(let t=0;t<e.length;t++){const r=e[t];if(hf(r))return tE(r)}},hf=n=>n&&n.key==="PRIV"&&n.info==="com.apple.streaming.transportStreamTimestamp",Qv=n=>{const e=String.fromCharCode(n[0],n[1],n[2],n[3]),t=to(n,4),r=10;return{type:e,size:t,data:n.subarray(r,r+t)}},ff=n=>{let e=0;const t=[];for(;fl(n,e);){const r=to(n,e+6);e+=10;const i=e+r;for(;e+8<i;){const s=Qv(n.subarray(e)),o=Xv(s);o&&t.push(o),e+=s.size+10}uf(n,e)&&(e+=10)}return t},Xv=n=>n.type==="PRIV"?Jv(n):n.type[0]==="W"?eE(n):Zv(n),Jv=n=>{if(n.size<2)return;const e=tn(n.data,!0),t=new Uint8Array(n.data.subarray(e.length+1));return{key:n.type,info:e,data:t.buffer}},Zv=n=>{if(n.size<2)return;if(n.type==="TXXX"){let t=1;const r=tn(n.data.subarray(t),!0);t+=r.length+1;const i=tn(n.data.subarray(t));return{key:n.type,info:r,data:i}}const e=tn(n.data.subarray(1));return{key:n.type,data:e}},eE=n=>{if(n.type==="WXXX"){if(n.size<2)return;let t=1;const r=tn(n.data.subarray(t),!0);t+=r.length+1;const i=tn(n.data.subarray(t));return{key:n.type,info:r,data:i}}const e=tn(n.data);return{key:n.type,data:e}},tE=n=>{if(n.data.byteLength===8){const e=new Uint8Array(n.data),t=e[3]&1;let r=(e[4]<<23)+(e[5]<<15)+(e[6]<<7)+e[7];return r/=45,t&&(r+=4772185884e-2),Math.round(r)}},tn=(n,e=!1)=>{const t=nE();if(t){const c=t.decode(n);if(e){const d=c.indexOf("\0");return d!==-1?c.substring(0,d):c}return c.replace(/\0/g,"")}const r=n.length;let i,s,o,a="",l=0;for(;l<r;){if(i=n[l++],i===0&&e)return a;if(i===0||i===3)continue;switch(i>>4){case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:a+=String.fromCharCode(i);break;case 12:case 13:s=n[l++],a+=String.fromCharCode((i&31)<<6|s&63);break;case 14:s=n[l++],o=n[l++],a+=String.fromCharCode((i&15)<<12|(s&63)<<6|(o&63)<<0);break}}return a};let Io;function nE(){if(!navigator.userAgent.includes("PlayStation 4"))return!Io&&typeof self.TextDecoder<"u"&&(Io=new self.TextDecoder("utf-8")),Io}const Wt={hexDump:function(n){let e="";for(let t=0;t<n.length;t++){let r=n[t].toString(16);r.length<2&&(r="0"+r),e+=r}return e}},Cs=Math.pow(2,32)-1,rE=[].push,pf={video:1,audio:2,id3:3,text:4};function ct(n){return String.fromCharCode.apply(null,n)}function mf(n,e){const t=n[e]<<8|n[e+1];return t<0?65536+t:t}function we(n,e){const t=gf(n,e);return t<0?4294967296+t:t}function xd(n,e){let t=we(n,e);return t*=Math.pow(2,32),t+=we(n,e+4),t}function gf(n,e){return n[e]<<24|n[e+1]<<16|n[e+2]<<8|n[e+3]}function _o(n,e,t){n[e]=t>>24,n[e+1]=t>>16&255,n[e+2]=t>>8&255,n[e+3]=t&255}function iE(n){const e=n.byteLength;for(let t=0;t<e;){const r=we(n,t);if(r>8&&n[t+4]===109&&n[t+5]===111&&n[t+6]===111&&n[t+7]===102)return!0;t=r>1?t+r:e}return!1}function Be(n,e){const t=[];if(!e.length)return t;const r=n.byteLength;for(let i=0;i<r;){const s=we(n,i),o=ct(n.subarray(i+4,i+8)),a=s>1?i+s:r;if(o===e[0])if(e.length===1)t.push(n.subarray(i+8,a));else{const l=Be(n.subarray(i+8,a),e.slice(1));l.length&&rE.apply(t,l)}i=a}return t}function sE(n){const e=[],t=n[0];let r=8;const i=we(n,r);r+=4;let s=0,o=0;t===0?(s=we(n,r),o=we(n,r+4),r+=8):(s=xd(n,r),o=xd(n,r+8),r+=16),r+=2;let a=n.length+o;const l=mf(n,r);r+=2;for(let c=0;c<l;c++){let d=r;const u=we(n,d);d+=4;const h=u&2147483647;if((u&2147483648)>>>31===1)return B.warn("SIDX has hierarchical references (not supported)"),null;const y=we(n,d);d+=4,e.push({referenceSize:h,subsegmentDuration:y,info:{duration:y/i,start:a,end:a+h-1}}),a+=h,d+=4,r=d}return{earliestPresentationTime:s,timescale:i,version:t,referencesCount:l,references:e}}function yf(n){const e=[],t=Be(n,["moov","trak"]);for(let i=0;i<t.length;i++){const s=t[i],o=Be(s,["tkhd"])[0];if(o){let a=o[0];const l=we(o,a===0?12:20),c=Be(s,["mdia","mdhd"])[0];if(c){a=c[0];const d=we(c,a===0?12:20),u=Be(s,["mdia","hdlr"])[0];if(u){const h=ct(u.subarray(8,12)),g={soun:Ve.AUDIO,vide:Ve.VIDEO}[h];if(g){const y=Be(s,["mdia","minf","stbl","stsd"])[0],b=oE(y);e[l]={timescale:d,type:g},e[g]=pt({timescale:d,id:l},b)}}}}}return Be(n,["moov","mvex","trex"]).forEach(i=>{const s=we(i,4),o=e[s];o&&(o.default={duration:we(i,12),flags:we(i,20)})}),e}function oE(n){const e=n.subarray(8),t=e.subarray(8+78),r=ct(e.subarray(4,8));let i=r;const s=r==="enca"||r==="encv";if(s){const a=Be(e,[r])[0].subarray(r==="enca"?28:78);Be(a,["sinf"]).forEach(c=>{const d=Be(c,["schm"])[0];if(d){const u=ct(d.subarray(4,8));if(u==="cbcs"||u==="cenc"){const h=Be(c,["frma"])[0];h&&(i=ct(h))}}})}switch(i){case"avc1":case"avc2":case"avc3":case"avc4":{const o=Be(t,["avcC"])[0];i+="."+zi(o[1])+zi(o[2])+zi(o[3]);break}case"mp4a":{const o=Be(e,[r])[0],a=Be(o.subarray(28),["esds"])[0];if(a&&a.length>12){let l=4;if(a[l++]!==3)break;l=Do(a,l),l+=2;const c=a[l++];if(c&128&&(l+=2),c&64&&(l+=a[l++]),a[l++]!==4)break;l=Do(a,l);const d=a[l++];if(d===64)i+="."+zi(d);else break;if(l+=12,a[l++]!==5)break;l=Do(a,l);const u=a[l++];let h=(u&248)>>3;h===31&&(h+=1+((u&7)<<3)+((a[l]&224)>>5)),i+="."+h}break}case"hvc1":case"hev1":{const o=Be(t,["hvcC"])[0],a=o[1],l=["","A","B","C"][a>>6],c=a&31,d=we(o,2),u=(a&32)>>5?"H":"L",h=o[12],g=o.subarray(6,12);i+="."+l+c,i+="."+d.toString(16).toUpperCase(),i+="."+u+h;let y="";for(let b=g.length;b--;){const E=g[b];(E||y)&&(y="."+E.toString(16).toUpperCase()+y)}i+=y;break}case"dvh1":case"dvhe":{const o=Be(t,["dvcC"])[0],a=o[2]>>1&127,l=o[2]<<5&32|o[3]>>3&31;i+="."+Vt(a)+"."+Vt(l);break}case"vp09":{const o=Be(t,["vpcC"])[0],a=o[4],l=o[5],c=o[6]>>4&15;i+="."+Vt(a)+"."+Vt(l)+"."+Vt(c);break}case"av01":{const o=Be(t,["av1C"])[0],a=o[1]>>>5,l=o[1]&31,c=o[2]>>>7?"H":"M",d=(o[2]&64)>>6,u=(o[2]&32)>>5,h=a===2&&d?u?12:10:d?10:8,g=(o[2]&16)>>4,y=(o[2]&8)>>3,b=(o[2]&4)>>2,E=o[2]&3,C=1,w=1,R=1,_=0;i+="."+a+"."+Vt(l)+c+"."+Vt(h)+"."+g+"."+y+b+E+"."+Vt(C)+"."+Vt(w)+"."+Vt(R)+"."+_;break}}return{codec:i,encrypted:s}}function Do(n,e){const t=e+5;for(;n[e++]&128&&e<t;);return e}function zi(n){return("0"+n.toString(16).toUpperCase()).slice(-2)}function Vt(n){return(n<10?"0":"")+n}function aE(n,e){if(!n||!e)return n;const t=e.keyId;return t&&e.isCommonEncryption&&Be(n,["moov","trak"]).forEach(i=>{const o=Be(i,["mdia","minf","stbl","stsd"])[0].subarray(8);let a=Be(o,["enca"]);const l=a.length>0;l||(a=Be(o,["encv"])),a.forEach(c=>{const d=l?c.subarray(28):c.subarray(78);Be(d,["sinf"]).forEach(h=>{const g=Af(h);if(g){const y=g.subarray(8,24);y.some(b=>b!==0)||(B.log(`[eme] Patching keyId in 'enc${l?"a":"v"}>sinf>>tenc' box: ${Wt.hexDump(y)} -> ${Wt.hexDump(t)}`),g.set(t,8))}})})}),n}function Af(n){const e=Be(n,["schm"])[0];if(e){const t=ct(e.subarray(4,8));if(t==="cbcs"||t==="cenc")return Be(n,["schi","tenc"])[0]}return B.error("[eme] missing 'schm' box"),null}function lE(n,e){return Be(e,["moof","traf"]).reduce((t,r)=>{const i=Be(r,["tfdt"])[0],s=i[0],o=Be(r,["tfhd"]).reduce((a,l)=>{const c=we(l,4),d=n[c];if(d){let u=we(i,4);if(s===1){if(u===Cs)return B.warn("[mp4-demuxer]: Ignoring assumed invalid signed 64-bit track fragment decode time"),a;u*=Cs+1,u+=we(i,8)}const h=d.timescale||9e4,g=u/h;if(pe(g)&&(a===null||g<a))return g}return a},null);return o!==null&&pe(o)&&(t===null||o<t)?o:t},null)}function cE(n,e){let t=0,r=0,i=0;const s=Be(n,["moof","traf"]);for(let o=0;o<s.length;o++){const a=s[o],l=Be(a,["tfhd"])[0],c=we(l,4),d=e[c];if(!d)continue;const u=d.default,h=we(l,0)|(u==null?void 0:u.flags);let g=u==null?void 0:u.duration;h&8&&(h&2?g=we(l,12):g=we(l,8));const y=d.timescale||9e4,b=Be(a,["trun"]);for(let E=0;E<b.length;E++){if(t=dE(b[E]),!t&&g){const C=we(b[E],4);t=g*C}d.type===Ve.VIDEO?r+=t/y:d.type===Ve.AUDIO&&(i+=t/y)}}if(r===0&&i===0){let o=1/0,a=0,l=0;const c=Be(n,["sidx"]);for(let d=0;d<c.length;d++){const u=sE(c[d]);if(u!=null&&u.references){o=Math.min(o,u.earliestPresentationTime/u.timescale);const h=u.references.reduce((g,y)=>g+y.info.duration||0,0);a=Math.max(a,h+u.earliestPresentationTime/u.timescale),l=a-o}}if(l&&pe(l))return l}return r||i}function dE(n){const e=we(n,0);let t=8;e&1&&(t+=4),e&4&&(t+=4);let r=0;const i=we(n,4);for(let s=0;s<i;s++){if(e&256){const o=we(n,t);r+=o,t+=4}e&512&&(t+=4),e&1024&&(t+=4),e&2048&&(t+=4)}return r}function uE(n,e,t){Be(e,["moof","traf"]).forEach(r=>{Be(r,["tfhd"]).forEach(i=>{const s=we(i,4),o=n[s];if(!o)return;const a=o.timescale||9e4;Be(r,["tfdt"]).forEach(l=>{const c=l[0],d=t*a;if(d){let u=we(l,4);if(c===0)u-=d,u=Math.max(u,0),_o(l,4,u);else{u*=Math.pow(2,32),u+=we(l,8),u-=d,u=Math.max(u,0);const h=Math.floor(u/(Cs+1)),g=Math.floor(u%(Cs+1));_o(l,4,h),_o(l,8,g)}}})})})}function hE(n){const e={valid:null,remainder:null},t=Be(n,["moof"]);if(t.length<2)return e.remainder=n,e;const r=t[t.length-1];return e.valid=qn(n,0,r.byteOffset-8),e.remainder=qn(n,r.byteOffset-8),e}function Bt(n,e){const t=new Uint8Array(n.length+e.length);return t.set(n),t.set(e,n.length),t}function Sd(n,e){const t=[],r=e.samples,i=e.timescale,s=e.id;let o=!1;return Be(r,["moof"]).map(l=>{const c=l.byteOffset-8;Be(l,["traf"]).map(u=>{const h=Be(u,["tfdt"]).map(g=>{const y=g[0];let b=we(g,4);return y===1&&(b*=Math.pow(2,32),b+=we(g,8)),b/i})[0];return h!==void 0&&(n=h),Be(u,["tfhd"]).map(g=>{const y=we(g,4),b=we(g,0)&16777215,E=(b&1)!==0,C=(b&2)!==0,w=(b&8)!==0;let R=0;const _=(b&16)!==0;let P=0;const H=(b&32)!==0;let U=8;y===s&&(E&&(U+=8),C&&(U+=4),w&&(R=we(g,U),U+=4),_&&(P=we(g,U),U+=4),H&&(U+=4),e.type==="video"&&(o=fE(e.codec)),Be(u,["trun"]).map(j=>{const Q=j[0],F=we(j,0)&16777215,Y=(F&1)!==0;let Ae=0;const te=(F&4)!==0,Se=(F&256)!==0;let ve=0;const ne=(F&512)!==0;let ye=0;const me=(F&1024)!==0,z=(F&2048)!==0;let ae=0;const Re=we(j,4);let xe=8;Y&&(Ae=we(j,xe),xe+=4),te&&(xe+=4);let Fe=Ae+c;for(let je=0;je<Re;je++){if(Se?(ve=we(j,xe),xe+=4):ve=R,ne?(ye=we(j,xe),xe+=4):ye=P,me&&(xe+=4),z&&(Q===0?ae=we(j,xe):ae=gf(j,xe),xe+=4),e.type===Ve.VIDEO){let Qe=0;for(;Qe<ye;){const Pe=we(r,Fe);if(Fe+=4,pE(o,r[Fe])){const K=r.subarray(Fe,Fe+Pe);bf(K,o?2:1,n+ae/i,t)}Fe+=Pe,Qe+=Pe+4}}n+=ve/i}}))})})}),t}function fE(n){if(!n)return!1;const e=n.indexOf("."),t=e<0?n:n.substring(0,e);return t==="hvc1"||t==="hev1"||t==="dvh1"||t==="dvhe"}function pE(n,e){if(n){const t=e>>1&63;return t===39||t===40}else return(e&31)===6}function bf(n,e,t,r){const i=vf(n);let s=0;s+=e;let o=0,a=0,l=0;for(;s<i.length;){o=0;do{if(s>=i.length)break;l=i[s++],o+=l}while(l===255);a=0;do{if(s>=i.length)break;l=i[s++],a+=l}while(l===255);const c=i.length-s;let d=s;if(a<c)s+=a;else if(a>c){B.error(`Malformed SEI payload. ${a} is too small, only ${c} bytes left to parse.`);break}if(o===4){if(i[d++]===181){const h=mf(i,d);if(d+=2,h===49){const g=we(i,d);if(d+=4,g===1195456820){const y=i[d++];if(y===3){const b=i[d++],E=31&b,C=64&b,w=C?2+E*3:0,R=new Uint8Array(w);if(C){R[0]=b;for(let _=1;_<w;_++)R[_]=i[d++]}r.push({type:y,payloadType:o,pts:t,bytes:R})}}}}}else if(o===5&&a>16){const u=[];for(let y=0;y<16;y++){const b=i[d++].toString(16);u.push(b.length==1?"0"+b:b),(y===3||y===5||y===7||y===9)&&u.push("-")}const h=a-16,g=new Uint8Array(h);for(let y=0;y<h;y++)g[y]=i[d++];r.push({payloadType:o,pts:t,uuid:u.join(""),userData:tn(g),userDataBytes:g})}}}function vf(n){const e=n.byteLength,t=[];let r=1;for(;r<e-2;)n[r]===0&&n[r+1]===0&&n[r+2]===3?(t.push(r+2),r+=2):r++;if(t.length===0)return n;const i=e-t.length,s=new Uint8Array(i);let o=0;for(r=0;r<i;o++,r++)o===t[0]&&(o++,t.shift()),s[r]=n[o];return s}function mE(n){const e=n[0];let t="",r="",i=0,s=0,o=0,a=0,l=0,c=0;if(e===0){for(;ct(n.subarray(c,c+1))!=="\0";)t+=ct(n.subarray(c,c+1)),c+=1;for(t+=ct(n.subarray(c,c+1)),c+=1;ct(n.subarray(c,c+1))!=="\0";)r+=ct(n.subarray(c,c+1)),c+=1;r+=ct(n.subarray(c,c+1)),c+=1,i=we(n,12),s=we(n,16),a=we(n,20),l=we(n,24),c=28}else if(e===1){c+=4,i=we(n,c),c+=4;const u=we(n,c);c+=4;const h=we(n,c);for(c+=4,o=2**32*u+h,Dv(o)||(o=Number.MAX_SAFE_INTEGER,B.warn("Presentation time exceeds safe integer limit and wrapped to max safe integer in parsing emsg box")),a=we(n,c),c+=4,l=we(n,c),c+=4;ct(n.subarray(c,c+1))!=="\0";)t+=ct(n.subarray(c,c+1)),c+=1;for(t+=ct(n.subarray(c,c+1)),c+=1;ct(n.subarray(c,c+1))!=="\0";)r+=ct(n.subarray(c,c+1)),c+=1;r+=ct(n.subarray(c,c+1)),c+=1}const d=n.subarray(c,n.byteLength);return{schemeIdUri:t,value:r,timeScale:i,presentationTime:o,presentationTimeDelta:s,eventDuration:a,id:l,payload:d}}function gE(n,...e){const t=e.length;let r=8,i=t;for(;i--;)r+=e[i].byteLength;const s=new Uint8Array(r);for(s[0]=r>>24&255,s[1]=r>>16&255,s[2]=r>>8&255,s[3]=r&255,s.set(n,4),i=0,r=8;i<t;i++)s.set(e[i],r),r+=e[i].byteLength;return s}function yE(n,e,t){if(n.byteLength!==16)throw new RangeError("Invalid system id");let r,i;if(e){r=1,i=new Uint8Array(e.length*16);for(let a=0;a<e.length;a++){const l=e[a];if(l.byteLength!==16)throw new RangeError("Invalid key");i.set(l,a*16)}}else r=0,i=new Uint8Array;let s;r>0?(s=new Uint8Array(4),e.length>0&&new DataView(s.buffer).setUint32(0,e.length,!1)):s=new Uint8Array;const o=new Uint8Array(4);return t&&t.byteLength>0&&new DataView(o.buffer).setUint32(0,t.byteLength,!1),gE([112,115,115,104],new Uint8Array([r,0,0,0]),n,s,i,o,t||new Uint8Array)}function AE(n){if(!(n instanceof ArrayBuffer)||n.byteLength<32)return null;const e={version:0,systemId:"",kids:null,data:null},t=new DataView(n),r=t.getUint32(0);if(n.byteLength!==r&&r>44||t.getUint32(4)!==1886614376||(e.version=t.getUint32(8)>>>24,e.version>1))return null;e.systemId=Wt.hexDump(new Uint8Array(n,12,16));const s=t.getUint32(28);if(e.version===0){if(r-32<s)return null;e.data=new Uint8Array(n,32,s)}else if(e.version===1){e.kids=[];for(let o=0;o<s;o++)e.kids.push(new Uint8Array(n,32+o*16,16))}return e}let Vi={};class wi{static clearKeyUriToKeyIdMap(){Vi={}}constructor(e,t,r,i=[1],s=null){this.uri=void 0,this.method=void 0,this.keyFormat=void 0,this.keyFormatVersions=void 0,this.encrypted=void 0,this.isCommonEncryption=void 0,this.iv=null,this.key=null,this.keyId=null,this.pssh=null,this.method=e,this.uri=t,this.keyFormat=r,this.keyFormatVersions=i,this.iv=s,this.encrypted=e?e!=="NONE":!1,this.isCommonEncryption=this.encrypted&&e!=="AES-128"}isSupported(){if(this.method){if(this.method==="AES-128"||this.method==="NONE")return!0;if(this.keyFormat==="identity")return this.method==="SAMPLE-AES";switch(this.keyFormat){case St.FAIRPLAY:case St.WIDEVINE:case St.PLAYREADY:case St.CLEARKEY:return["ISO-23001-7","SAMPLE-AES","SAMPLE-AES-CENC","SAMPLE-AES-CTR"].indexOf(this.method)!==-1}}return!1}getDecryptData(e){if(!this.encrypted||!this.uri)return null;if(this.method==="AES-128"&&this.uri&&!this.iv){typeof e!="number"&&(this.method==="AES-128"&&!this.iv&&B.warn(`missing IV for initialization segment with method="${this.method}" - compliance issue`),e=0);const r=bE(e);return new wi(this.method,this.uri,"identity",this.keyFormatVersions,r)}const t=qv(this.uri);if(t)switch(this.keyFormat){case St.WIDEVINE:this.pssh=t,t.length>=22&&(this.keyId=t.subarray(t.length-22,t.length-6));break;case St.PLAYREADY:{const r=new Uint8Array([154,4,240,121,152,64,66,134,171,146,230,91,224,136,95,149]);this.pssh=yE(r,null,t);const i=new Uint16Array(t.buffer,t.byteOffset,t.byteLength/2),s=String.fromCharCode.apply(null,Array.from(i)),o=s.substring(s.indexOf("<"),s.length),c=new DOMParser().parseFromString(o,"text/xml").getElementsByTagName("KID")[0];if(c){const d=c.childNodes[0]?c.childNodes[0].nodeValue:c.getAttribute("VALUE");if(d){const u=hl(d).subarray(0,16);jv(u),this.keyId=u}}break}default:{let r=t.subarray(0,16);if(r.length!==16){const i=new Uint8Array(16);i.set(r,16-r.length),r=i}this.keyId=r;break}}if(!this.keyId||this.keyId.byteLength!==16){let r=Vi[this.uri];if(!r){const i=Object.keys(Vi).length%Number.MAX_SAFE_INTEGER;r=new Uint8Array(16),new DataView(r.buffer,12,4).setUint32(0,i),Vi[this.uri]=r}this.keyId=r}return this}}function bE(n){const e=new Uint8Array(16);for(let t=12;t<16;t++)e[t]=n>>8*(15-t)&255;return e}const Ef=/\{\$([a-zA-Z0-9-_]+)\}/g;function Td(n){return Ef.test(n)}function Et(n,e,t){if(n.variableList!==null||n.hasVariableRefs)for(let r=t.length;r--;){const i=t[r],s=e[i];s&&(e[i]=va(n,s))}}function va(n,e){if(n.variableList!==null||n.hasVariableRefs){const t=n.variableList;return e.replace(Ef,r=>{const i=r.substring(2,r.length-1),s=t==null?void 0:t[i];return s===void 0?(n.playlistParsingError||(n.playlistParsingError=new Error(`Missing preceding EXT-X-DEFINE tag for Variable Reference: "${i}"`)),r):s})}return e}function Cd(n,e,t){let r=n.variableList;r||(n.variableList=r={});let i,s;if("QUERYPARAM"in e){i=e.QUERYPARAM;try{const o=new self.URL(t).searchParams;if(o.has(i))s=o.get(i);else throw new Error(`"${i}" does not match any query parameter in URI: "${t}"`)}catch(o){n.playlistParsingError||(n.playlistParsingError=new Error(`EXT-X-DEFINE QUERYPARAM: ${o.message}`))}}else i=e.NAME,s=e.VALUE;i in r?n.playlistParsingError||(n.playlistParsingError=new Error(`EXT-X-DEFINE duplicate Variable Name declarations: "${i}"`)):r[i]=s||""}function vE(n,e,t){const r=e.IMPORT;if(t&&r in t){let i=n.variableList;i||(n.variableList=i={}),i[r]=t[r]}else n.playlistParsingError||(n.playlistParsingError=new Error(`EXT-X-DEFINE IMPORT attribute not found in Multivariant Playlist: "${r}"`))}function Ir(n=!0){return typeof self>"u"?void 0:(n||!self.MediaSource)&&self.ManagedMediaSource||self.MediaSource||self.WebKitMediaSource}const ws={audio:{a3ds:1,"ac-3":.95,"ac-4":1,alac:.9,alaw:1,dra1:1,"dts+":1,"dts-":1,dtsc:1,dtse:1,dtsh:1,"ec-3":.9,enca:1,fLaC:.9,flac:.9,FLAC:.9,g719:1,g726:1,m4ae:1,mha1:1,mha2:1,mhm1:1,mhm2:1,mlpa:1,mp4a:1,"raw ":1,Opus:1,opus:1,samr:1,sawb:1,sawp:1,sevc:1,sqcp:1,ssmv:1,twos:1,ulaw:1},video:{avc1:1,avc2:1,avc3:1,avc4:1,avcp:1,av01:.8,drac:1,dva1:1,dvav:1,dvh1:.7,dvhe:.7,encv:1,hev1:.75,hvc1:.75,mjp2:1,mp4v:1,mvc1:1,mvc2:1,mvc3:1,mvc4:1,resv:1,rv60:1,s263:1,svc1:1,svc2:1,"vc-1":1,vp08:1,vp09:.9},text:{stpp:1,wvtt:1}};function EE(n,e){const t=ws[e];return!!t&&!!t[n.slice(0,4)]}function Po(n,e,t=!0){return!n.split(",").some(r=>!xf(r,e,t))}function xf(n,e,t=!0){var r;const i=Ir(t);return(r=i==null?void 0:i.isTypeSupported(ki(n,e)))!=null?r:!1}function ki(n,e){return`${e}/mp4;codecs="${n}"`}function wd(n){if(n){const e=n.substring(0,4);return ws.video[e]}return 2}function ks(n){return n.split(",").reduce((e,t)=>{const r=ws.video[t];return r?(r*2+e)/(e?3:2):(ws.audio[t]+e)/(e?2:1)},0)}const Bo={};function xE(n,e=!0){if(Bo[n])return Bo[n];const t={flac:["flac","fLaC","FLAC"],opus:["opus","Opus"]}[n];for(let r=0;r<t.length;r++)if(xf(t[r],"audio",e))return Bo[n]=t[r],t[r];return n}const SE=/flac|opus/i;function Ls(n,e=!0){return n.replace(SE,t=>xE(t.toLowerCase(),e))}function kd(n,e){return n&&n!=="mp4a"?n:e}function TE(n){const e=n.split(".");if(e.length>2){let t=e.shift()+".";return t+=parseInt(e.shift()).toString(16),t+=("000"+parseInt(e.shift()).toString(16)).slice(-4),t}return n}const Ld=/#EXT-X-STREAM-INF:([^\r\n]*)(?:[\r\n](?:#[^\r\n]*)?)*([^\r\n]+)|#EXT-X-(SESSION-DATA|SESSION-KEY|DEFINE|CONTENT-STEERING|START):([^\r\n]*)[\r\n]+/g,Rd=/#EXT-X-MEDIA:(.*)/g,CE=/^#EXT(?:INF|-X-TARGETDURATION):/m,Id=new RegExp([/#EXTINF:\s*(\d*(?:\.\d+)?)(?:,(.*)\s+)?/.source,/(?!#) *(\S[\S ]*)/.source,/#EXT-X-BYTERANGE:*(.+)/.source,/#EXT-X-PROGRAM-DATE-TIME:(.+)/.source,/#.*/.source].join("|"),"g"),wE=new RegExp([/#(EXTM3U)/.source,/#EXT-X-(DATERANGE|DEFINE|KEY|MAP|PART|PART-INF|PLAYLIST-TYPE|PRELOAD-HINT|RENDITION-REPORT|SERVER-CONTROL|SKIP|START):(.+)/.source,/#EXT-X-(BITRATE|DISCONTINUITY-SEQUENCE|MEDIA-SEQUENCE|TARGETDURATION|VERSION): *(\d+)/.source,/#EXT-X-(DISCONTINUITY|ENDLIST|GAP|INDEPENDENT-SEGMENTS)/.source,/(#)([^:]*):(.*)/.source,/(#)(.*)(?:.*)\r?\n?/.source].join("|"));class Zt{static findGroup(e,t){for(let r=0;r<e.length;r++){const i=e[r];if(i.id===t)return i}}static resolve(e,t){return ul.buildAbsoluteURL(t,e,{alwaysNormalize:!0})}static isMediaPlaylist(e){return CE.test(e)}static parseMasterPlaylist(e,t){const r=Td(e),i={contentSteering:null,levels:[],playlistParsingError:null,sessionData:null,sessionKeys:null,startTimeOffset:null,variableList:null,hasVariableRefs:r},s=[];Ld.lastIndex=0;let o;for(;(o=Ld.exec(e))!=null;)if(o[1]){var a;const c=new nt(o[1]);Et(i,c,["CODECS","SUPPLEMENTAL-CODECS","ALLOWED-CPC","PATHWAY-ID","STABLE-VARIANT-ID","AUDIO","VIDEO","SUBTITLES","CLOSED-CAPTIONS","NAME"]);const d=va(i,o[2]),u={attrs:c,bitrate:c.decimalInteger("BANDWIDTH")||c.decimalInteger("AVERAGE-BANDWIDTH"),name:c.NAME,url:Zt.resolve(d,t)},h=c.decimalResolution("RESOLUTION");h&&(u.width=h.width,u.height=h.height),kE(c.CODECS,u),(a=u.unknownCodecs)!=null&&a.length||s.push(u),i.levels.push(u)}else if(o[3]){const c=o[3],d=o[4];switch(c){case"SESSION-DATA":{const u=new nt(d);Et(i,u,["DATA-ID","LANGUAGE","VALUE","URI"]);const h=u["DATA-ID"];h&&(i.sessionData===null&&(i.sessionData={}),i.sessionData[h]=u);break}case"SESSION-KEY":{const u=_d(d,t,i);u.encrypted&&u.isSupported()?(i.sessionKeys===null&&(i.sessionKeys=[]),i.sessionKeys.push(u)):B.warn(`[Keys] Ignoring invalid EXT-X-SESSION-KEY tag: "${d}"`);break}case"DEFINE":{{const u=new nt(d);Et(i,u,["NAME","VALUE","QUERYPARAM"]),Cd(i,u,t)}break}case"CONTENT-STEERING":{const u=new nt(d);Et(i,u,["SERVER-URI","PATHWAY-ID"]),i.contentSteering={uri:Zt.resolve(u["SERVER-URI"],t),pathwayId:u["PATHWAY-ID"]||"."};break}case"START":{i.startTimeOffset=Dd(d);break}}}const l=s.length>0&&s.length<i.levels.length;return i.levels=l?s:i.levels,i.levels.length===0&&(i.playlistParsingError=new Error("no levels found in manifest")),i}static parseMasterPlaylistMedia(e,t,r){let i;const s={},o=r.levels,a={AUDIO:o.map(c=>({id:c.attrs.AUDIO,audioCodec:c.audioCodec})),SUBTITLES:o.map(c=>({id:c.attrs.SUBTITLES,textCodec:c.textCodec})),"CLOSED-CAPTIONS":[]};let l=0;for(Rd.lastIndex=0;(i=Rd.exec(e))!==null;){const c=new nt(i[1]),d=c.TYPE;if(d){const u=a[d],h=s[d]||[];s[d]=h,Et(r,c,["URI","GROUP-ID","LANGUAGE","ASSOC-LANGUAGE","STABLE-RENDITION-ID","NAME","INSTREAM-ID","CHARACTERISTICS","CHANNELS"]);const g=c.LANGUAGE,y=c["ASSOC-LANGUAGE"],b=c.CHANNELS,E=c.CHARACTERISTICS,C=c["INSTREAM-ID"],w={attrs:c,bitrate:0,id:l++,groupId:c["GROUP-ID"]||"",name:c.NAME||g||"",type:d,default:c.bool("DEFAULT"),autoselect:c.bool("AUTOSELECT"),forced:c.bool("FORCED"),lang:g,url:c.URI?Zt.resolve(c.URI,t):""};if(y&&(w.assocLang=y),b&&(w.channels=b),E&&(w.characteristics=E),C&&(w.instreamId=C),u!=null&&u.length){const R=Zt.findGroup(u,w.groupId)||u[0];Pd(w,R,"audioCodec"),Pd(w,R,"textCodec")}h.push(w)}}return s}static parseLevelPlaylist(e,t,r,i,s,o){const a=new Gv(t),l=a.fragments;let c=null,d=0,u=0,h=0,g=0,y=null,b=new Lo(i,t),E,C,w,R=-1,_=!1,P=null;for(Id.lastIndex=0,a.m3u8=e,a.hasVariableRefs=Td(e);(E=Id.exec(e))!==null;){_&&(_=!1,b=new Lo(i,t),b.start=h,b.sn=d,b.cc=g,b.level=r,c&&(b.initSegment=c,b.rawProgramDateTime=c.rawProgramDateTime,c.rawProgramDateTime=null,P&&(b.setByteRange(P),P=null)));const Q=E[1];if(Q){b.duration=parseFloat(Q);const F=(" "+E[2]).slice(1);b.title=F||null,b.tagList.push(F?["INF",Q,F]:["INF",Q])}else if(E[3]){if(pe(b.duration)){b.start=h,w&&Fd(b,w,a),b.sn=d,b.level=r,b.cc=g,l.push(b);const F=(" "+E[3]).slice(1);b.relurl=va(a,F),Bd(b,y),y=b,h+=b.duration,d++,u=0,_=!0}}else if(E[4]){const F=(" "+E[4]).slice(1);y?b.setByteRange(F,y):b.setByteRange(F)}else if(E[5])b.rawProgramDateTime=(" "+E[5]).slice(1),b.tagList.push(["PROGRAM-DATE-TIME",b.rawProgramDateTime]),R===-1&&(R=l.length);else{if(E=E[0].match(wE),!E){B.warn("No matches on slow regex match for level playlist!");continue}for(C=1;C<E.length&&!(typeof E[C]<"u");C++);const F=(" "+E[C]).slice(1),Y=(" "+E[C+1]).slice(1),Ae=E[C+2]?(" "+E[C+2]).slice(1):"";switch(F){case"PLAYLIST-TYPE":a.type=Y.toUpperCase();break;case"MEDIA-SEQUENCE":d=a.startSN=parseInt(Y);break;case"SKIP":{const te=new nt(Y);Et(a,te,["RECENTLY-REMOVED-DATERANGES"]);const Se=te.decimalInteger("SKIPPED-SEGMENTS");if(pe(Se)){a.skippedSegments=Se;for(let ne=Se;ne--;)l.unshift(null);d+=Se}const ve=te.enumeratedString("RECENTLY-REMOVED-DATERANGES");ve&&(a.recentlyRemovedDateranges=ve.split("	"));break}case"TARGETDURATION":a.targetduration=Math.max(parseInt(Y),1);break;case"VERSION":a.version=parseInt(Y);break;case"INDEPENDENT-SEGMENTS":case"EXTM3U":break;case"ENDLIST":a.live=!1;break;case"#":(Y||Ae)&&b.tagList.push(Ae?[Y,Ae]:[Y]);break;case"DISCONTINUITY":g++,b.tagList.push(["DIS"]);break;case"GAP":b.gap=!0,b.tagList.push([F]);break;case"BITRATE":b.tagList.push([F,Y]);break;case"DATERANGE":{const te=new nt(Y);Et(a,te,["ID","CLASS","START-DATE","END-DATE","SCTE35-CMD","SCTE35-OUT","SCTE35-IN"]),Et(a,te,te.clientAttrs);const Se=new af(te,a.dateRanges[te.ID]);Se.isValid||a.skippedSegments?a.dateRanges[Se.id]=Se:B.warn(`Ignoring invalid DATERANGE tag: "${Y}"`),b.tagList.push(["EXT-X-DATERANGE",Y]);break}case"DEFINE":{{const te=new nt(Y);Et(a,te,["NAME","VALUE","IMPORT","QUERYPARAM"]),"IMPORT"in te?vE(a,te,o):Cd(a,te,t)}break}case"DISCONTINUITY-SEQUENCE":g=parseInt(Y);break;case"KEY":{const te=_d(Y,t,a);if(te.isSupported()){if(te.method==="NONE"){w=void 0;break}w||(w={}),w[te.keyFormat]&&(w=ot({},w)),w[te.keyFormat]=te}else B.warn(`[Keys] Ignoring invalid EXT-X-KEY tag: "${Y}"`);break}case"START":a.startTimeOffset=Dd(Y);break;case"MAP":{const te=new nt(Y);if(Et(a,te,["BYTERANGE","URI"]),b.duration){const Se=new Lo(i,t);Od(Se,te,r,w),c=Se,b.initSegment=c,c.rawProgramDateTime&&!b.rawProgramDateTime&&(b.rawProgramDateTime=c.rawProgramDateTime)}else{const Se=b.byteRangeEndOffset;if(Se){const ve=b.byteRangeStartOffset;P=`${Se-ve}@${ve}`}else P=null;Od(b,te,r,w),c=b,_=!0}break}case"SERVER-CONTROL":{const te=new nt(Y);a.canBlockReload=te.bool("CAN-BLOCK-RELOAD"),a.canSkipUntil=te.optionalFloat("CAN-SKIP-UNTIL",0),a.canSkipDateRanges=a.canSkipUntil>0&&te.bool("CAN-SKIP-DATERANGES"),a.partHoldBack=te.optionalFloat("PART-HOLD-BACK",0),a.holdBack=te.optionalFloat("HOLD-BACK",0);break}case"PART-INF":{const te=new nt(Y);a.partTarget=te.decimalFloatingPoint("PART-TARGET");break}case"PART":{let te=a.partList;te||(te=a.partList=[]);const Se=u>0?te[te.length-1]:void 0,ve=u++,ne=new nt(Y);Et(a,ne,["BYTERANGE","URI"]);const ye=new $v(ne,b,t,ve,Se);te.push(ye),b.duration+=ye.duration;break}case"PRELOAD-HINT":{const te=new nt(Y);Et(a,te,["URI"]),a.preloadHint=te;break}case"RENDITION-REPORT":{const te=new nt(Y);Et(a,te,["URI"]),a.renditionReports=a.renditionReports||[],a.renditionReports.push(te);break}default:B.warn(`line parsed but not handled: ${E}`);break}}}y&&!y.relurl?(l.pop(),h-=y.duration,a.partList&&(a.fragmentHint=y)):a.partList&&(Bd(b,y),b.cc=g,a.fragmentHint=b,w&&Fd(b,w,a));const H=l.length,U=l[0],j=l[H-1];if(h+=a.skippedSegments*a.targetduration,h>0&&H&&j){a.averagetargetduration=h/H;const Q=j.sn;a.endSN=Q!=="initSegment"?Q:0,a.live||(j.endList=!0),U&&(a.startCC=U.cc)}else a.endSN=0,a.startCC=0;return a.fragmentHint&&(h+=a.fragmentHint.duration),a.totalduration=h,a.endCC=g,R>0&&LE(l,R),a}}function _d(n,e,t){var r,i;const s=new nt(n);Et(t,s,["KEYFORMAT","KEYFORMATVERSIONS","URI","IV","URI"]);const o=(r=s.METHOD)!=null?r:"",a=s.URI,l=s.hexadecimalInteger("IV"),c=s.KEYFORMATVERSIONS,d=(i=s.KEYFORMAT)!=null?i:"identity";a&&s.IV&&!l&&B.error(`Invalid IV: ${s.IV}`);const u=a?Zt.resolve(a,e):"",h=(c||"1").split("/").map(Number).filter(Number.isFinite);return new wi(o,u,d,h,l)}function Dd(n){const t=new nt(n).decimalFloatingPoint("TIME-OFFSET");return pe(t)?t:null}function kE(n,e){let t=(n||"").split(/[ ,]+/).filter(r=>r);["video","audio","text"].forEach(r=>{const i=t.filter(s=>EE(s,r));i.length&&(e[`${r}Codec`]=i.join(","),t=t.filter(s=>i.indexOf(s)===-1))}),e.unknownCodecs=t}function Pd(n,e,t){const r=e[t];r&&(n[t]=r)}function LE(n,e){let t=n[e];for(let r=e;r--;){const i=n[r];if(!i)return;i.programDateTime=t.programDateTime-i.duration*1e3,t=i}}function Bd(n,e){n.rawProgramDateTime?n.programDateTime=Date.parse(n.rawProgramDateTime):e!=null&&e.programDateTime&&(n.programDateTime=e.endProgramDateTime),pe(n.programDateTime)||(n.programDateTime=null,n.rawProgramDateTime=null)}function Od(n,e,t,r){n.relurl=e.URI,e.BYTERANGE&&n.setByteRange(e.BYTERANGE),n.level=t,n.sn="initSegment",r&&(n.levelkeys=r),n.initSegment=null}function Fd(n,e,t){n.levelkeys=e;const{encryptedFragments:r}=t;(!r.length||r[r.length-1].levelkeys!==e)&&Object.keys(e).some(i=>e[i].isCommonEncryption)&&r.push(n)}var Ue={MANIFEST:"manifest",LEVEL:"level",AUDIO_TRACK:"audioTrack",SUBTITLE_TRACK:"subtitleTrack"},ke={MAIN:"main",AUDIO:"audio",SUBTITLE:"subtitle"};function Md(n){const{type:e}=n;switch(e){case Ue.AUDIO_TRACK:return ke.AUDIO;case Ue.SUBTITLE_TRACK:return ke.SUBTITLE;default:return ke.MAIN}}function Oo(n,e){let t=n.url;return(t===void 0||t.indexOf("data:")===0)&&(t=e.url),t}class RE{constructor(e){this.hls=void 0,this.loaders=Object.create(null),this.variableList=null,this.hls=e,this.registerListeners()}startLoad(e){}stopLoad(){this.destroyInternalLoaders()}registerListeners(){const{hls:e}=this;e.on(T.MANIFEST_LOADING,this.onManifestLoading,this),e.on(T.LEVEL_LOADING,this.onLevelLoading,this),e.on(T.AUDIO_TRACK_LOADING,this.onAudioTrackLoading,this),e.on(T.SUBTITLE_TRACK_LOADING,this.onSubtitleTrackLoading,this)}unregisterListeners(){const{hls:e}=this;e.off(T.MANIFEST_LOADING,this.onManifestLoading,this),e.off(T.LEVEL_LOADING,this.onLevelLoading,this),e.off(T.AUDIO_TRACK_LOADING,this.onAudioTrackLoading,this),e.off(T.SUBTITLE_TRACK_LOADING,this.onSubtitleTrackLoading,this)}createInternalLoader(e){const t=this.hls.config,r=t.pLoader,i=t.loader,s=r||i,o=new s(t);return this.loaders[e.type]=o,o}getInternalLoader(e){return this.loaders[e.type]}resetInternalLoader(e){this.loaders[e]&&delete this.loaders[e]}destroyInternalLoaders(){for(const e in this.loaders){const t=this.loaders[e];t&&t.destroy(),this.resetInternalLoader(e)}}destroy(){this.variableList=null,this.unregisterListeners(),this.destroyInternalLoaders()}onManifestLoading(e,t){const{url:r}=t;this.variableList=null,this.load({id:null,level:0,responseType:"text",type:Ue.MANIFEST,url:r,deliveryDirectives:null})}onLevelLoading(e,t){const{id:r,level:i,pathwayId:s,url:o,deliveryDirectives:a}=t;this.load({id:r,level:i,pathwayId:s,responseType:"text",type:Ue.LEVEL,url:o,deliveryDirectives:a})}onAudioTrackLoading(e,t){const{id:r,groupId:i,url:s,deliveryDirectives:o}=t;this.load({id:r,groupId:i,level:null,responseType:"text",type:Ue.AUDIO_TRACK,url:s,deliveryDirectives:o})}onSubtitleTrackLoading(e,t){const{id:r,groupId:i,url:s,deliveryDirectives:o}=t;this.load({id:r,groupId:i,level:null,responseType:"text",type:Ue.SUBTITLE_TRACK,url:s,deliveryDirectives:o})}load(e){var t;const r=this.hls.config;let i=this.getInternalLoader(e);if(i){const c=i.context;if(c&&c.url===e.url&&c.level===e.level){B.trace("[playlist-loader]: playlist request ongoing");return}B.log(`[playlist-loader]: aborting previous loader for type: ${e.type}`),i.abort()}let s;if(e.type===Ue.MANIFEST?s=r.manifestLoadPolicy.default:s=ot({},r.playlistLoadPolicy.default,{timeoutRetry:null,errorRetry:null}),i=this.createInternalLoader(e),pe((t=e.deliveryDirectives)==null?void 0:t.part)){let c;if(e.type===Ue.LEVEL&&e.level!==null?c=this.hls.levels[e.level].details:e.type===Ue.AUDIO_TRACK&&e.id!==null?c=this.hls.audioTracks[e.id].details:e.type===Ue.SUBTITLE_TRACK&&e.id!==null&&(c=this.hls.subtitleTracks[e.id].details),c){const d=c.partTarget,u=c.targetduration;if(d&&u){const h=Math.max(d*3,u*.8)*1e3;s=ot({},s,{maxTimeToFirstByteMs:Math.min(h,s.maxTimeToFirstByteMs),maxLoadTimeMs:Math.min(h,s.maxTimeToFirstByteMs)})}}}const o=s.errorRetry||s.timeoutRetry||{},a={loadPolicy:s,timeout:s.maxLoadTimeMs,maxRetry:o.maxNumRetry||0,retryDelay:o.retryDelayMs||0,maxRetryDelay:o.maxRetryDelayMs||0},l={onSuccess:(c,d,u,h)=>{const g=this.getInternalLoader(u);this.resetInternalLoader(u.type);const y=c.data;if(y.indexOf("#EXTM3U")!==0){this.handleManifestParsingError(c,u,new Error("no EXTM3U delimiter"),h||null,d);return}d.parsing.start=performance.now(),Zt.isMediaPlaylist(y)?this.handleTrackOrLevelPlaylist(c,d,u,h||null,g):this.handleMasterPlaylist(c,d,u,h)},onError:(c,d,u,h)=>{this.handleNetworkError(d,u,!1,c,h)},onTimeout:(c,d,u)=>{this.handleNetworkError(d,u,!0,void 0,c)}};i.load(e,a,l)}handleMasterPlaylist(e,t,r,i){const s=this.hls,o=e.data,a=Oo(e,r),l=Zt.parseMasterPlaylist(o,a);if(l.playlistParsingError){this.handleManifestParsingError(e,r,l.playlistParsingError,i,t);return}const{contentSteering:c,levels:d,sessionData:u,sessionKeys:h,startTimeOffset:g,variableList:y}=l;this.variableList=y;const{AUDIO:b=[],SUBTITLES:E,"CLOSED-CAPTIONS":C}=Zt.parseMasterPlaylistMedia(o,a,l);b.length&&!b.some(R=>!R.url)&&d[0].audioCodec&&!d[0].attrs.AUDIO&&(B.log("[playlist-loader]: audio codec signaled in quality level, but no embedded audio track signaled, create one"),b.unshift({type:"main",name:"main",groupId:"main",default:!1,autoselect:!1,forced:!1,id:-1,attrs:new nt({}),bitrate:0,url:""})),s.trigger(T.MANIFEST_LOADED,{levels:d,audioTracks:b,subtitles:E,captions:C,contentSteering:c,url:a,stats:t,networkDetails:i,sessionData:u,sessionKeys:h,startTimeOffset:g,variableList:y})}handleTrackOrLevelPlaylist(e,t,r,i,s){const o=this.hls,{id:a,level:l,type:c}=r,d=Oo(e,r),u=0,h=pe(l)?l:pe(a)?a:0,g=Md(r),y=Zt.parseLevelPlaylist(e.data,d,h,g,u,this.variableList);if(c===Ue.MANIFEST){const b={attrs:new nt({}),bitrate:0,details:y,name:"",url:d};o.trigger(T.MANIFEST_LOADED,{levels:[b],audioTracks:[],url:d,stats:t,networkDetails:i,sessionData:null,sessionKeys:null,contentSteering:null,startTimeOffset:null,variableList:null})}t.parsing.end=performance.now(),r.levelDetails=y,this.handlePlaylistLoaded(y,e,t,r,i,s)}handleManifestParsingError(e,t,r,i,s){this.hls.trigger(T.ERROR,{type:Le.NETWORK_ERROR,details:$.MANIFEST_PARSING_ERROR,fatal:t.type===Ue.MANIFEST,url:e.url,err:r,error:r,reason:r.message,response:e,context:t,networkDetails:i,stats:s})}handleNetworkError(e,t,r=!1,i,s){let o=`A network ${r?"timeout":"error"+(i?" (status "+i.code+")":"")} occurred while loading ${e.type}`;e.type===Ue.LEVEL?o+=`: ${e.level} id: ${e.id}`:(e.type===Ue.AUDIO_TRACK||e.type===Ue.SUBTITLE_TRACK)&&(o+=` id: ${e.id} group-id: "${e.groupId}"`);const a=new Error(o);B.warn(`[playlist-loader]: ${o}`);let l=$.UNKNOWN,c=!1;const d=this.getInternalLoader(e);switch(e.type){case Ue.MANIFEST:l=r?$.MANIFEST_LOAD_TIMEOUT:$.MANIFEST_LOAD_ERROR,c=!0;break;case Ue.LEVEL:l=r?$.LEVEL_LOAD_TIMEOUT:$.LEVEL_LOAD_ERROR,c=!1;break;case Ue.AUDIO_TRACK:l=r?$.AUDIO_TRACK_LOAD_TIMEOUT:$.AUDIO_TRACK_LOAD_ERROR,c=!1;break;case Ue.SUBTITLE_TRACK:l=r?$.SUBTITLE_TRACK_LOAD_TIMEOUT:$.SUBTITLE_LOAD_ERROR,c=!1;break}d&&this.resetInternalLoader(e.type);const u={type:Le.NETWORK_ERROR,details:l,fatal:c,url:e.url,loader:d,context:e,error:a,networkDetails:t,stats:s};if(i){const h=(t==null?void 0:t.url)||e.url;u.response=pt({url:h,data:void 0},i)}this.hls.trigger(T.ERROR,u)}handlePlaylistLoaded(e,t,r,i,s,o){const a=this.hls,{type:l,level:c,id:d,groupId:u,deliveryDirectives:h}=i,g=Oo(t,i),y=Md(i),b=typeof i.level=="number"&&y===ke.MAIN?c:void 0;if(!e.fragments.length){const C=new Error("No Segments found in Playlist");a.trigger(T.ERROR,{type:Le.NETWORK_ERROR,details:$.LEVEL_EMPTY_ERROR,fatal:!1,url:g,error:C,reason:C.message,response:t,context:i,level:b,parent:y,networkDetails:s,stats:r});return}e.targetduration||(e.playlistParsingError=new Error("Missing Target Duration"));const E=e.playlistParsingError;if(E){a.trigger(T.ERROR,{type:Le.NETWORK_ERROR,details:$.LEVEL_PARSING_ERROR,fatal:!1,url:g,error:E,reason:E.message,response:t,context:i,level:b,parent:y,networkDetails:s,stats:r});return}switch(e.live&&o&&(o.getCacheAge&&(e.ageHeader=o.getCacheAge()||0),(!o.getCacheAge||isNaN(e.ageHeader))&&(e.ageHeader=0)),l){case Ue.MANIFEST:case Ue.LEVEL:a.trigger(T.LEVEL_LOADED,{details:e,level:b||0,id:d||0,stats:r,networkDetails:s,deliveryDirectives:h});break;case Ue.AUDIO_TRACK:a.trigger(T.AUDIO_TRACK_LOADED,{details:e,id:d||0,groupId:u||"",stats:r,networkDetails:s,deliveryDirectives:h});break;case Ue.SUBTITLE_TRACK:a.trigger(T.SUBTITLE_TRACK_LOADED,{details:e,id:d||0,groupId:u||"",stats:r,networkDetails:s,deliveryDirectives:h});break}}}function Sf(n,e){let t;try{t=new Event("addtrack")}catch{t=document.createEvent("Event"),t.initEvent("addtrack",!1,!1)}t.track=n,e.dispatchEvent(t)}function Tf(n,e){const t=n.mode;if(t==="disabled"&&(n.mode="hidden"),n.cues&&!n.cues.getCueById(e.id))try{if(n.addCue(e),!n.cues.getCueById(e.id))throw new Error(`addCue is failed for: ${e}`)}catch(r){B.debug(`[texttrack-utils]: ${r}`);try{const i=new self.TextTrackCue(e.startTime,e.endTime,e.text);i.id=e.id,n.addCue(i)}catch(i){B.debug(`[texttrack-utils]: Legacy TextTrackCue fallback failed: ${i}`)}}t==="disabled"&&(n.mode=t)}function lr(n){const e=n.mode;if(e==="disabled"&&(n.mode="hidden"),n.cues)for(let t=n.cues.length;t--;)n.removeCue(n.cues[t]);e==="disabled"&&(n.mode=e)}function Ea(n,e,t,r){const i=n.mode;if(i==="disabled"&&(n.mode="hidden"),n.cues&&n.cues.length>0){const s=_E(n.cues,e,t);for(let o=0;o<s.length;o++)(!r||r(s[o]))&&n.removeCue(s[o])}i==="disabled"&&(n.mode=i)}function IE(n,e){if(e<n[0].startTime)return 0;const t=n.length-1;if(e>n[t].endTime)return-1;let r=0,i=t;for(;r<=i;){const s=Math.floor((i+r)/2);if(e<n[s].startTime)i=s-1;else if(e>n[s].startTime&&r<t)r=s+1;else return s}return n[r].startTime-e<e-n[i].startTime?r:i}function _E(n,e,t){const r=[],i=IE(n,e);if(i>-1)for(let s=i,o=n.length;s<o;s++){const a=n[s];if(a.startTime>=e&&a.endTime<=t)r.push(a);else if(a.startTime>t)return r}return r}function us(n){const e=[];for(let t=0;t<n.length;t++){const r=n[t];(r.kind==="subtitles"||r.kind==="captions")&&r.label&&e.push(n[t])}return e}var Nt={audioId3:"org.id3",dateRange:"com.apple.quicktime.HLS",emsg:"https://aomedia.org/emsg/ID3"};const DE=.25;function xa(){if(!(typeof self>"u"))return self.VTTCue||self.TextTrackCue}function Nd(n,e,t,r,i){let s=new n(e,t,"");try{s.value=r,i&&(s.type=i)}catch{s=new n(e,t,JSON.stringify(i?pt({type:i},r):r))}return s}const Wi=(()=>{const n=xa();try{n&&new n(0,Number.POSITIVE_INFINITY,"")}catch{return Number.MAX_VALUE}return Number.POSITIVE_INFINITY})();function Fo(n,e){return n.getTime()/1e3-e}function PE(n){return Uint8Array.from(n.replace(/^0x/,"").replace(/([\da-fA-F]{2}) ?/g,"0x$1 ").replace(/ +$/,"").split(" ")).buffer}class BE{constructor(e){this.hls=void 0,this.id3Track=null,this.media=null,this.dateRangeCuesAppended={},this.hls=e,this._registerListeners()}destroy(){this._unregisterListeners(),this.id3Track=null,this.media=null,this.dateRangeCuesAppended={},this.hls=null}_registerListeners(){const{hls:e}=this;e.on(T.MEDIA_ATTACHED,this.onMediaAttached,this),e.on(T.MEDIA_DETACHING,this.onMediaDetaching,this),e.on(T.MANIFEST_LOADING,this.onManifestLoading,this),e.on(T.FRAG_PARSING_METADATA,this.onFragParsingMetadata,this),e.on(T.BUFFER_FLUSHING,this.onBufferFlushing,this),e.on(T.LEVEL_UPDATED,this.onLevelUpdated,this)}_unregisterListeners(){const{hls:e}=this;e.off(T.MEDIA_ATTACHED,this.onMediaAttached,this),e.off(T.MEDIA_DETACHING,this.onMediaDetaching,this),e.off(T.MANIFEST_LOADING,this.onManifestLoading,this),e.off(T.FRAG_PARSING_METADATA,this.onFragParsingMetadata,this),e.off(T.BUFFER_FLUSHING,this.onBufferFlushing,this),e.off(T.LEVEL_UPDATED,this.onLevelUpdated,this)}onMediaAttached(e,t){this.media=t.media}onMediaDetaching(){this.id3Track&&(lr(this.id3Track),this.id3Track=null,this.media=null,this.dateRangeCuesAppended={})}onManifestLoading(){this.dateRangeCuesAppended={}}createTrack(e){const t=this.getID3Track(e.textTracks);return t.mode="hidden",t}getID3Track(e){if(this.media){for(let t=0;t<e.length;t++){const r=e[t];if(r.kind==="metadata"&&r.label==="id3")return Sf(r,this.media),r}return this.media.addTextTrack("metadata","id3")}}onFragParsingMetadata(e,t){if(!this.media)return;const{hls:{config:{enableEmsgMetadataCues:r,enableID3MetadataCues:i}}}=this;if(!r&&!i)return;const{samples:s}=t;this.id3Track||(this.id3Track=this.createTrack(this.media));const o=xa();if(o)for(let a=0;a<s.length;a++){const l=s[a].type;if(l===Nt.emsg&&!r||!i)continue;const c=ff(s[a].data);if(c){const d=s[a].pts;let u=d+s[a].duration;u>Wi&&(u=Wi),u-d<=0&&(u=d+DE);for(let g=0;g<c.length;g++){const y=c[g];if(!hf(y)){this.updateId3CueEnds(d,l);const b=Nd(o,d,u,y,l);b&&this.id3Track.addCue(b)}}}}}updateId3CueEnds(e,t){var r;const i=(r=this.id3Track)==null?void 0:r.cues;if(i)for(let s=i.length;s--;){const o=i[s];o.type===t&&o.startTime<e&&o.endTime===Wi&&(o.endTime=e)}}onBufferFlushing(e,{startOffset:t,endOffset:r,type:i}){const{id3Track:s,hls:o}=this;if(!o)return;const{config:{enableEmsgMetadataCues:a,enableID3MetadataCues:l}}=o;if(s&&(a||l)){let c;i==="audio"?c=d=>d.type===Nt.audioId3&&l:i==="video"?c=d=>d.type===Nt.emsg&&a:c=d=>d.type===Nt.audioId3&&l||d.type===Nt.emsg&&a,Ea(s,t,r,c)}}onLevelUpdated(e,{details:t}){if(!this.media||!t.hasProgramDateTime||!this.hls.config.enableDateRangeMetadataCues)return;const{dateRangeCuesAppended:r,id3Track:i}=this,{dateRanges:s}=t,o=Object.keys(s);if(i){const d=Object.keys(r).filter(u=>!o.includes(u));for(let u=d.length;u--;){const h=d[u];Object.keys(r[h].cues).forEach(g=>{i.removeCue(r[h].cues[g])}),delete r[h]}}const a=t.fragments[t.fragments.length-1];if(o.length===0||!pe(a==null?void 0:a.programDateTime))return;this.id3Track||(this.id3Track=this.createTrack(this.media));const l=a.programDateTime/1e3-a.start,c=xa();for(let d=0;d<o.length;d++){const u=o[d],h=s[u],g=Fo(h.startDate,l),y=r[u],b=(y==null?void 0:y.cues)||{};let E=(y==null?void 0:y.durationKnown)||!1,C=Wi;const w=h.endDate;if(w)C=Fo(w,l),E=!0;else if(h.endOnNext&&!E){const _=o.reduce((P,H)=>{if(H!==h.id){const U=s[H];if(U.class===h.class&&U.startDate>h.startDate&&(!P||h.startDate<P.startDate))return U}return P},null);_&&(C=Fo(_.startDate,l),E=!0)}const R=Object.keys(h.attr);for(let _=0;_<R.length;_++){const P=R[_];if(!Nv(P))continue;const H=b[P];if(H)E&&!y.durationKnown&&(H.endTime=C);else if(c){let U=h.attr[P];Uv(P)&&(U=PE(U));const j=Nd(c,g,C,{key:P,data:U},Nt.dateRange);j&&(j.id=u,this.id3Track.addCue(j),b[P]=j)}}r[u]={cues:b,dateRange:h,durationKnown:E}}}}class OE{constructor(e){this.hls=void 0,this.config=void 0,this.media=null,this.levelDetails=null,this.currentTime=0,this.stallCount=0,this._latency=null,this.timeupdateHandler=()=>this.timeupdate(),this.hls=e,this.config=e.config,this.registerListeners()}get latency(){return this._latency||0}get maxLatency(){const{config:e,levelDetails:t}=this;return e.liveMaxLatencyDuration!==void 0?e.liveMaxLatencyDuration:t?e.liveMaxLatencyDurationCount*t.targetduration:0}get targetLatency(){const{levelDetails:e}=this;if(e===null)return null;const{holdBack:t,partHoldBack:r,targetduration:i}=e,{liveSyncDuration:s,liveSyncDurationCount:o,lowLatencyMode:a}=this.config,l=this.hls.userConfig;let c=a&&r||t;(l.liveSyncDuration||l.liveSyncDurationCount||c===0)&&(c=s!==void 0?s:o*i);const d=i,u=1;return c+Math.min(this.stallCount*u,d)}get liveSyncPosition(){const e=this.estimateLiveEdge(),t=this.targetLatency,r=this.levelDetails;if(e===null||t===null||r===null)return null;const i=r.edge,s=e-t-this.edgeStalled,o=i-r.totalduration,a=i-(this.config.lowLatencyMode&&r.partTarget||r.targetduration);return Math.min(Math.max(o,s),a)}get drift(){const{levelDetails:e}=this;return e===null?1:e.drift}get edgeStalled(){const{levelDetails:e}=this;if(e===null)return 0;const t=(this.config.lowLatencyMode&&e.partTarget||e.targetduration)*3;return Math.max(e.age-t,0)}get forwardBufferLength(){const{media:e,levelDetails:t}=this;if(!e||!t)return 0;const r=e.buffered.length;return(r?e.buffered.end(r-1):t.edge)-this.currentTime}destroy(){this.unregisterListeners(),this.onMediaDetaching(),this.levelDetails=null,this.hls=this.timeupdateHandler=null}registerListeners(){this.hls.on(T.MEDIA_ATTACHED,this.onMediaAttached,this),this.hls.on(T.MEDIA_DETACHING,this.onMediaDetaching,this),this.hls.on(T.MANIFEST_LOADING,this.onManifestLoading,this),this.hls.on(T.LEVEL_UPDATED,this.onLevelUpdated,this),this.hls.on(T.ERROR,this.onError,this)}unregisterListeners(){this.hls.off(T.MEDIA_ATTACHED,this.onMediaAttached,this),this.hls.off(T.MEDIA_DETACHING,this.onMediaDetaching,this),this.hls.off(T.MANIFEST_LOADING,this.onManifestLoading,this),this.hls.off(T.LEVEL_UPDATED,this.onLevelUpdated,this),this.hls.off(T.ERROR,this.onError,this)}onMediaAttached(e,t){this.media=t.media,this.media.addEventListener("timeupdate",this.timeupdateHandler)}onMediaDetaching(){this.media&&(this.media.removeEventListener("timeupdate",this.timeupdateHandler),this.media=null)}onManifestLoading(){this.levelDetails=null,this._latency=null,this.stallCount=0}onLevelUpdated(e,{details:t}){this.levelDetails=t,t.advanced&&this.timeupdate(),!t.live&&this.media&&this.media.removeEventListener("timeupdate",this.timeupdateHandler)}onError(e,t){var r;t.details===$.BUFFER_STALLED_ERROR&&(this.stallCount++,(r=this.levelDetails)!=null&&r.live&&B.warn("[playback-rate-controller]: Stall detected, adjusting target latency"))}timeupdate(){const{media:e,levelDetails:t}=this;if(!e||!t)return;this.currentTime=e.currentTime;const r=this.computeLatency();if(r===null)return;this._latency=r;const{lowLatencyMode:i,maxLiveSyncPlaybackRate:s}=this.config;if(!i||s===1||!t.live)return;const o=this.targetLatency;if(o===null)return;const a=r-o,l=Math.min(this.maxLatency,o+t.targetduration);if(a<l&&a>.05&&this.forwardBufferLength>1){const d=Math.min(2,Math.max(1,s)),u=Math.round(2/(1+Math.exp(-.75*a-this.edgeStalled))*20)/20;e.playbackRate=Math.min(d,Math.max(1,u))}else e.playbackRate!==1&&e.playbackRate!==0&&(e.playbackRate=1)}estimateLiveEdge(){const{levelDetails:e}=this;return e===null?null:e.edge+e.age}computeLatency(){const e=this.estimateLiveEdge();return e===null?null:e-this.currentTime}}const Sa=["NONE","TYPE-0","TYPE-1",null];function FE(n){return Sa.indexOf(n)>-1}const Rs=["SDR","PQ","HLG"];function ME(n){return!!n&&Rs.indexOf(n)>-1}var mi={No:"",Yes:"YES",v2:"v2"};function NE(n,e){const{canSkipUntil:t,canSkipDateRanges:r,endSN:i}=n,s=e!==void 0?e-i:0;return t&&s<t?r?mi.v2:mi.Yes:mi.No}class Ud{constructor(e,t,r){this.msn=void 0,this.part=void 0,this.skip=void 0,this.msn=e,this.part=t,this.skip=r}addDirectives(e){const t=new self.URL(e);return this.msn!==void 0&&t.searchParams.set("_HLS_msn",this.msn.toString()),this.part!==void 0&&t.searchParams.set("_HLS_part",this.part.toString()),this.skip&&t.searchParams.set("_HLS_skip",this.skip),t.href}}class Sr{constructor(e){this._attrs=void 0,this.audioCodec=void 0,this.bitrate=void 0,this.codecSet=void 0,this.url=void 0,this.frameRate=void 0,this.height=void 0,this.id=void 0,this.name=void 0,this.videoCodec=void 0,this.width=void 0,this.details=void 0,this.fragmentError=0,this.loadError=0,this.loaded=void 0,this.realBitrate=0,this.supportedPromise=void 0,this.supportedResult=void 0,this._avgBitrate=0,this._audioGroups=void 0,this._subtitleGroups=void 0,this._urlId=0,this.url=[e.url],this._attrs=[e.attrs],this.bitrate=e.bitrate,e.details&&(this.details=e.details),this.id=e.id||0,this.name=e.name,this.width=e.width||0,this.height=e.height||0,this.frameRate=e.attrs.optionalFloat("FRAME-RATE",0),this._avgBitrate=e.attrs.decimalInteger("AVERAGE-BANDWIDTH"),this.audioCodec=e.audioCodec,this.videoCodec=e.videoCodec,this.codecSet=[e.videoCodec,e.audioCodec].filter(t=>!!t).map(t=>t.substring(0,4)).join(","),this.addGroupId("audio",e.attrs.AUDIO),this.addGroupId("text",e.attrs.SUBTITLES)}get maxBitrate(){return Math.max(this.realBitrate,this.bitrate)}get averageBitrate(){return this._avgBitrate||this.realBitrate||this.bitrate}get attrs(){return this._attrs[0]}get codecs(){return this.attrs.CODECS||""}get pathwayId(){return this.attrs["PATHWAY-ID"]||"."}get videoRange(){return this.attrs["VIDEO-RANGE"]||"SDR"}get score(){return this.attrs.optionalFloat("SCORE",0)}get uri(){return this.url[0]||""}hasAudioGroup(e){return $d(this._audioGroups,e)}hasSubtitleGroup(e){return $d(this._subtitleGroups,e)}get audioGroups(){return this._audioGroups}get subtitleGroups(){return this._subtitleGroups}addGroupId(e,t){if(t){if(e==="audio"){let r=this._audioGroups;r||(r=this._audioGroups=[]),r.indexOf(t)===-1&&r.push(t)}else if(e==="text"){let r=this._subtitleGroups;r||(r=this._subtitleGroups=[]),r.indexOf(t)===-1&&r.push(t)}}}get urlId(){return 0}set urlId(e){}get audioGroupIds(){return this.audioGroups?[this.audioGroupId]:void 0}get textGroupIds(){return this.subtitleGroups?[this.textGroupId]:void 0}get audioGroupId(){var e;return(e=this.audioGroups)==null?void 0:e[0]}get textGroupId(){var e;return(e=this.subtitleGroups)==null?void 0:e[0]}addFallback(){}}function $d(n,e){return!e||!n?!1:n.indexOf(e)!==-1}function Mo(n,e){const t=e.startPTS;if(pe(t)){let r=0,i;e.sn>n.sn?(r=t-n.start,i=n):(r=n.start-t,i=e),i.duration!==r&&(i.duration=r)}else e.sn>n.sn?n.cc===e.cc&&n.minEndPTS?e.start=n.start+(n.minEndPTS-n.start):e.start=n.start+n.duration:e.start=Math.max(n.start-e.duration,0)}function Cf(n,e,t,r,i,s){r-t<=0&&(B.warn("Fragment should have a positive duration",e),r=t+e.duration,s=i+e.duration);let a=t,l=r;const c=e.startPTS,d=e.endPTS;if(pe(c)){const E=Math.abs(c-t);pe(e.deltaPTS)?e.deltaPTS=Math.max(E,e.deltaPTS):e.deltaPTS=E,a=Math.max(t,c),t=Math.min(t,c),i=Math.min(i,e.startDTS),l=Math.min(r,d),r=Math.max(r,d),s=Math.max(s,e.endDTS)}const u=t-e.start;e.start!==0&&(e.start=t),e.duration=r-e.start,e.startPTS=t,e.maxStartPTS=a,e.startDTS=i,e.endPTS=r,e.minEndPTS=l,e.endDTS=s;const h=e.sn;if(!n||h<n.startSN||h>n.endSN)return 0;let g;const y=h-n.startSN,b=n.fragments;for(b[y]=e,g=y;g>0;g--)Mo(b[g],b[g-1]);for(g=y;g<b.length-1;g++)Mo(b[g],b[g+1]);return n.fragmentHint&&Mo(b[b.length-1],n.fragmentHint),n.PTSKnown=n.alignedSliding=!0,u}function UE(n,e){let t=null;const r=n.fragments;for(let l=r.length-1;l>=0;l--){const c=r[l].initSegment;if(c){t=c;break}}n.fragmentHint&&delete n.fragmentHint.endPTS;let i=0,s;if(GE(n,e,(l,c)=>{l.relurl&&(i=l.cc-c.cc),pe(l.startPTS)&&pe(l.endPTS)&&(c.start=c.startPTS=l.startPTS,c.startDTS=l.startDTS,c.maxStartPTS=l.maxStartPTS,c.endPTS=l.endPTS,c.endDTS=l.endDTS,c.minEndPTS=l.minEndPTS,c.duration=l.endPTS-l.startPTS,c.duration&&(s=c),e.PTSKnown=e.alignedSliding=!0),c.elementaryStreams=l.elementaryStreams,c.loader=l.loader,c.stats=l.stats,l.initSegment&&(c.initSegment=l.initSegment,t=l.initSegment)}),t&&(e.fragmentHint?e.fragments.concat(e.fragmentHint):e.fragments).forEach(c=>{var d;c&&(!c.initSegment||c.initSegment.relurl===((d=t)==null?void 0:d.relurl))&&(c.initSegment=t)}),e.skippedSegments)if(e.deltaUpdateFailed=e.fragments.some(l=>!l),e.deltaUpdateFailed){B.warn("[level-helper] Previous playlist missing segments skipped in delta playlist");for(let l=e.skippedSegments;l--;)e.fragments.shift();e.startSN=e.fragments[0].sn,e.startCC=e.fragments[0].cc}else e.canSkipDateRanges&&(e.dateRanges=$E(n.dateRanges,e.dateRanges,e.recentlyRemovedDateranges));const o=e.fragments;if(i){B.warn("discontinuity sliding from playlist, take drift into account");for(let l=0;l<o.length;l++)o[l].cc+=i}e.skippedSegments&&(e.startCC=e.fragments[0].cc),HE(n.partList,e.partList,(l,c)=>{c.elementaryStreams=l.elementaryStreams,c.stats=l.stats}),s?Cf(e,s,s.startPTS,s.endPTS,s.startDTS,s.endDTS):wf(n,e),o.length&&(e.totalduration=e.edge-o[0].start),e.driftStartTime=n.driftStartTime,e.driftStart=n.driftStart;const a=e.advancedDateTime;if(e.advanced&&a){const l=e.edge;e.driftStart||(e.driftStartTime=a,e.driftStart=l),e.driftEndTime=a,e.driftEnd=l}else e.driftEndTime=n.driftEndTime,e.driftEnd=n.driftEnd,e.advancedDateTime=n.advancedDateTime}function $E(n,e,t){const r=ot({},n);return t&&t.forEach(i=>{delete r[i]}),Object.keys(e).forEach(i=>{const s=new af(e[i].attr,r[i]);s.isValid?r[i]=s:B.warn(`Ignoring invalid Playlist Delta Update DATERANGE tag: "${JSON.stringify(e[i].attr)}"`)}),r}function HE(n,e,t){if(n&&e){let r=0;for(let i=0,s=n.length;i<=s;i++){const o=n[i],a=e[i+r];o&&a&&o.index===a.index&&o.fragment.sn===a.fragment.sn?t(o,a):r--}}}function GE(n,e,t){const r=e.skippedSegments,i=Math.max(n.startSN,e.startSN)-e.startSN,s=(n.fragmentHint?1:0)+(r?e.endSN:Math.min(n.endSN,e.endSN))-e.startSN,o=e.startSN-n.startSN,a=e.fragmentHint?e.fragments.concat(e.fragmentHint):e.fragments,l=n.fragmentHint?n.fragments.concat(n.fragmentHint):n.fragments;for(let c=i;c<=s;c++){const d=l[o+c];let u=a[c];r&&!u&&c<r&&(u=e.fragments[c]=d),d&&u&&t(d,u)}}function wf(n,e){const t=e.startSN+e.skippedSegments-n.startSN,r=n.fragments;t<0||t>=r.length||Ta(e,r[t].start)}function Ta(n,e){if(e){const t=n.fragments;for(let r=n.skippedSegments;r<t.length;r++)t[r].start+=e;n.fragmentHint&&(n.fragmentHint.start+=e)}}function KE(n,e=1/0){let t=1e3*n.targetduration;if(n.updated){const r=n.fragments,i=4;if(r.length&&t*i>e){const s=r[r.length-1].duration*1e3;s<t&&(t=s)}}else t/=2;return Math.round(t)}function jE(n,e,t){if(!(n!=null&&n.details))return null;const r=n.details;let i=r.fragments[e-r.startSN];return i||(i=r.fragmentHint,i&&i.sn===e)?i:e<r.startSN&&t&&t.sn===e?t:null}function Hd(n,e,t){var r;return n!=null&&n.details?kf((r=n.details)==null?void 0:r.partList,e,t):null}function kf(n,e,t){if(n)for(let r=n.length;r--;){const i=n[r];if(i.index===t&&i.fragment.sn===e)return i}return null}function Lf(n){n.forEach((e,t)=>{const{details:r}=e;r!=null&&r.fragments&&r.fragments.forEach(i=>{i.level=t})})}function Is(n){switch(n.details){case $.FRAG_LOAD_TIMEOUT:case $.KEY_LOAD_TIMEOUT:case $.LEVEL_LOAD_TIMEOUT:case $.MANIFEST_LOAD_TIMEOUT:return!0}return!1}function Gd(n,e){const t=Is(e);return n.default[`${t?"timeout":"error"}Retry`]}function ml(n,e){const t=n.backoff==="linear"?1:Math.pow(2,e);return Math.min(t*n.retryDelayMs,n.maxRetryDelayMs)}function Kd(n){return pt(pt({},n),{errorRetry:null,timeoutRetry:null})}function _s(n,e,t,r){if(!n)return!1;const i=r==null?void 0:r.code,s=e<n.maxNumRetry&&(qE(i)||!!t);return n.shouldRetry?n.shouldRetry(n,e,t,r,s):s}function qE(n){return n===0&&navigator.onLine===!1||!!n&&(n<400||n>499)}const Rf={search:function(n,e){let t=0,r=n.length-1,i=null,s=null;for(;t<=r;){i=(t+r)/2|0,s=n[i];const o=e(s);if(o>0)t=i+1;else if(o<0)r=i-1;else return s}return null}};function zE(n,e,t){if(e===null||!Array.isArray(n)||!n.length||!pe(e))return null;const r=n[0].programDateTime;if(e<(r||0))return null;const i=n[n.length-1].endProgramDateTime;if(e>=(i||0))return null;t=t||0;for(let s=0;s<n.length;++s){const o=n[s];if(VE(e,t,o))return o}return null}function Ds(n,e,t=0,r=0){let i=null;if(n){i=e[n.sn-e[0].sn+1]||null;const o=n.endDTS-t;o>0&&o<15e-7&&(t+=15e-7)}else t===0&&e[0].start===0&&(i=e[0]);if(i&&(!n||n.level===i.level)&&Ca(t,r,i)===0)return i;const s=Rf.search(e,Ca.bind(null,t,r));return s&&(s!==n||!i)?s:i}function Ca(n=0,e=0,t){if(t.start<=n&&t.start+t.duration>n)return 0;const r=Math.min(e,t.duration+(t.deltaPTS?t.deltaPTS:0));return t.start+t.duration-r<=n?1:t.start-r>n&&t.start?-1:0}function VE(n,e,t){const r=Math.min(e,t.duration+(t.deltaPTS?t.deltaPTS:0))*1e3;return(t.endProgramDateTime||0)-r>n}function WE(n,e){return Rf.search(n,t=>t.cc<e?1:t.cc>e?-1:0)}var mt={DoNothing:0,SendEndCallback:1,SendAlternateToPenaltyBox:2,RemoveAlternatePermanently:3,InsertDiscontinuity:4,RetryRequest:5},Ft={None:0,MoveAllAlternatesMatchingHost:1,MoveAllAlternatesMatchingHDCP:2,SwitchToSDR:4};class YE{constructor(e){this.hls=void 0,this.playlistError=0,this.penalizedRenditions={},this.log=void 0,this.warn=void 0,this.error=void 0,this.hls=e,this.log=B.log.bind(B,"[info]:"),this.warn=B.warn.bind(B,"[warning]:"),this.error=B.error.bind(B,"[error]:"),this.registerListeners()}registerListeners(){const e=this.hls;e.on(T.ERROR,this.onError,this),e.on(T.MANIFEST_LOADING,this.onManifestLoading,this),e.on(T.LEVEL_UPDATED,this.onLevelUpdated,this)}unregisterListeners(){const e=this.hls;e&&(e.off(T.ERROR,this.onError,this),e.off(T.ERROR,this.onErrorOut,this),e.off(T.MANIFEST_LOADING,this.onManifestLoading,this),e.off(T.LEVEL_UPDATED,this.onLevelUpdated,this))}destroy(){this.unregisterListeners(),this.hls=null,this.penalizedRenditions={}}startLoad(e){}stopLoad(){this.playlistError=0}getVariantLevelIndex(e){return(e==null?void 0:e.type)===ke.MAIN?e.level:this.hls.loadLevel}onManifestLoading(){this.playlistError=0,this.penalizedRenditions={}}onLevelUpdated(){this.playlistError=0}onError(e,t){var r,i;if(t.fatal)return;const s=this.hls,o=t.context;switch(t.details){case $.FRAG_LOAD_ERROR:case $.FRAG_LOAD_TIMEOUT:case $.KEY_LOAD_ERROR:case $.KEY_LOAD_TIMEOUT:t.errorAction=this.getFragRetryOrSwitchAction(t);return;case $.FRAG_PARSING_ERROR:if((r=t.frag)!=null&&r.gap){t.errorAction={action:mt.DoNothing,flags:Ft.None};return}case $.FRAG_GAP:case $.FRAG_DECRYPT_ERROR:{t.errorAction=this.getFragRetryOrSwitchAction(t),t.errorAction.action=mt.SendAlternateToPenaltyBox;return}case $.LEVEL_EMPTY_ERROR:case $.LEVEL_PARSING_ERROR:{var a,l;const c=t.parent===ke.MAIN?t.level:s.loadLevel;t.details===$.LEVEL_EMPTY_ERROR&&((a=t.context)!=null&&(l=a.levelDetails)!=null&&l.live)?t.errorAction=this.getPlaylistRetryOrSwitchAction(t,c):(t.levelRetry=!1,t.errorAction=this.getLevelSwitchAction(t,c))}return;case $.LEVEL_LOAD_ERROR:case $.LEVEL_LOAD_TIMEOUT:typeof(o==null?void 0:o.level)=="number"&&(t.errorAction=this.getPlaylistRetryOrSwitchAction(t,o.level));return;case $.AUDIO_TRACK_LOAD_ERROR:case $.AUDIO_TRACK_LOAD_TIMEOUT:case $.SUBTITLE_LOAD_ERROR:case $.SUBTITLE_TRACK_LOAD_TIMEOUT:if(o){const c=s.levels[s.loadLevel];if(c&&(o.type===Ue.AUDIO_TRACK&&c.hasAudioGroup(o.groupId)||o.type===Ue.SUBTITLE_TRACK&&c.hasSubtitleGroup(o.groupId))){t.errorAction=this.getPlaylistRetryOrSwitchAction(t,s.loadLevel),t.errorAction.action=mt.SendAlternateToPenaltyBox,t.errorAction.flags=Ft.MoveAllAlternatesMatchingHost;return}}return;case $.KEY_SYSTEM_STATUS_OUTPUT_RESTRICTED:{const c=s.levels[s.loadLevel],d=c==null?void 0:c.attrs["HDCP-LEVEL"];d?t.errorAction={action:mt.SendAlternateToPenaltyBox,flags:Ft.MoveAllAlternatesMatchingHDCP,hdcpLevel:d}:this.keySystemError(t)}return;case $.BUFFER_ADD_CODEC_ERROR:case $.REMUX_ALLOC_ERROR:case $.BUFFER_APPEND_ERROR:t.errorAction=this.getLevelSwitchAction(t,(i=t.level)!=null?i:s.loadLevel);return;case $.INTERNAL_EXCEPTION:case $.BUFFER_APPENDING_ERROR:case $.BUFFER_FULL_ERROR:case $.LEVEL_SWITCH_ERROR:case $.BUFFER_STALLED_ERROR:case $.BUFFER_SEEK_OVER_HOLE:case $.BUFFER_NUDGE_ON_STALL:t.errorAction={action:mt.DoNothing,flags:Ft.None};return}t.type===Le.KEY_SYSTEM_ERROR&&this.keySystemError(t)}keySystemError(e){const t=this.getVariantLevelIndex(e.frag);e.levelRetry=!1,e.errorAction=this.getLevelSwitchAction(e,t)}getPlaylistRetryOrSwitchAction(e,t){const r=this.hls,i=Gd(r.config.playlistLoadPolicy,e),s=this.playlistError++;if(_s(i,s,Is(e),e.response))return{action:mt.RetryRequest,flags:Ft.None,retryConfig:i,retryCount:s};const a=this.getLevelSwitchAction(e,t);return i&&(a.retryConfig=i,a.retryCount=s),a}getFragRetryOrSwitchAction(e){const t=this.hls,r=this.getVariantLevelIndex(e.frag),i=t.levels[r],{fragLoadPolicy:s,keyLoadPolicy:o}=t.config,a=Gd(e.details.startsWith("key")?o:s,e),l=t.levels.reduce((d,u)=>d+u.fragmentError,0);if(i&&(e.details!==$.FRAG_GAP&&i.fragmentError++,_s(a,l,Is(e),e.response)))return{action:mt.RetryRequest,flags:Ft.None,retryConfig:a,retryCount:l};const c=this.getLevelSwitchAction(e,r);return a&&(c.retryConfig=a,c.retryCount=l),c}getLevelSwitchAction(e,t){const r=this.hls;t==null&&(t=r.loadLevel);const i=this.hls.levels[t];if(i){var s,o;const c=e.details;i.loadError++,c===$.BUFFER_APPEND_ERROR&&i.fragmentError++;let d=-1;const{levels:u,loadLevel:h,minAutoLevel:g,maxAutoLevel:y}=r;r.autoLevelEnabled||(r.loadLevel=-1);const b=(s=e.frag)==null?void 0:s.type,C=(b===ke.AUDIO&&c===$.FRAG_PARSING_ERROR||e.sourceBufferName==="audio"&&(c===$.BUFFER_ADD_CODEC_ERROR||c===$.BUFFER_APPEND_ERROR))&&u.some(({audioCodec:H})=>i.audioCodec!==H),R=e.sourceBufferName==="video"&&(c===$.BUFFER_ADD_CODEC_ERROR||c===$.BUFFER_APPEND_ERROR)&&u.some(({codecSet:H,audioCodec:U})=>i.codecSet!==H&&i.audioCodec===U),{type:_,groupId:P}=(o=e.context)!=null?o:{};for(let H=u.length;H--;){const U=(H+h)%u.length;if(U!==h&&U>=g&&U<=y&&u[U].loadError===0){var a,l;const j=u[U];if(c===$.FRAG_GAP&&e.frag){const Q=u[U].details;if(Q){const F=Ds(e.frag,Q.fragments,e.frag.start);if(F!=null&&F.gap)continue}}else{if(_===Ue.AUDIO_TRACK&&j.hasAudioGroup(P)||_===Ue.SUBTITLE_TRACK&&j.hasSubtitleGroup(P))continue;if(b===ke.AUDIO&&(a=i.audioGroups)!=null&&a.some(Q=>j.hasAudioGroup(Q))||b===ke.SUBTITLE&&(l=i.subtitleGroups)!=null&&l.some(Q=>j.hasSubtitleGroup(Q))||C&&i.audioCodec===j.audioCodec||!C&&i.audioCodec!==j.audioCodec||R&&i.codecSet===j.codecSet)continue}d=U;break}}if(d>-1&&r.loadLevel!==d)return e.levelRetry=!0,this.playlistError=0,{action:mt.SendAlternateToPenaltyBox,flags:Ft.None,nextAutoLevel:d}}return{action:mt.SendAlternateToPenaltyBox,flags:Ft.MoveAllAlternatesMatchingHost}}onErrorOut(e,t){var r;switch((r=t.errorAction)==null?void 0:r.action){case mt.DoNothing:break;case mt.SendAlternateToPenaltyBox:this.sendAlternateToPenaltyBox(t),!t.errorAction.resolved&&t.details!==$.FRAG_GAP?t.fatal=!0:/MediaSource readyState: ended/.test(t.error.message)&&(this.warn(`MediaSource ended after "${t.sourceBufferName}" sourceBuffer append error. Attempting to recover from media error.`),this.hls.recoverMediaError());break}if(t.fatal){this.hls.stopLoad();return}}sendAlternateToPenaltyBox(e){const t=this.hls,r=e.errorAction;if(!r)return;const{flags:i,hdcpLevel:s,nextAutoLevel:o}=r;switch(i){case Ft.None:this.switchLevel(e,o);break;case Ft.MoveAllAlternatesMatchingHDCP:s&&(t.maxHdcpLevel=Sa[Sa.indexOf(s)-1],r.resolved=!0),this.warn(`Restricting playback to HDCP-LEVEL of "${t.maxHdcpLevel}" or lower`);break}r.resolved||this.switchLevel(e,o)}switchLevel(e,t){t!==void 0&&e.errorAction&&(this.warn(`switching to level ${t} after ${e.details}`),this.hls.nextAutoLevel=t,e.errorAction.resolved=!0,this.hls.nextLoadLevel=this.hls.nextAutoLevel)}}class gl{constructor(e,t){this.hls=void 0,this.timer=-1,this.requestScheduled=-1,this.canLoad=!1,this.log=void 0,this.warn=void 0,this.log=B.log.bind(B,`${t}:`),this.warn=B.warn.bind(B,`${t}:`),this.hls=e}destroy(){this.clearTimer(),this.hls=this.log=this.warn=null}clearTimer(){this.timer!==-1&&(self.clearTimeout(this.timer),this.timer=-1)}startLoad(){this.canLoad=!0,this.requestScheduled=-1,this.loadPlaylist()}stopLoad(){this.canLoad=!1,this.clearTimer()}switchParams(e,t){const r=t==null?void 0:t.renditionReports;if(r){let i=-1;for(let s=0;s<r.length;s++){const o=r[s];let a;try{a=new self.URL(o.URI,t.url).href}catch(l){B.warn(`Could not construct new URL for Rendition Report: ${l}`),a=o.URI||""}if(a===e){i=s;break}else a===e.substring(0,a.length)&&(i=s)}if(i!==-1){const s=r[i],o=parseInt(s["LAST-MSN"])||(t==null?void 0:t.lastPartSn);let a=parseInt(s["LAST-PART"])||(t==null?void 0:t.lastPartIndex);if(this.hls.config.lowLatencyMode){const l=Math.min(t.age-t.partTarget,t.targetduration);a>=0&&l>t.partTarget&&(a+=1)}return new Ud(o,a>=0?a:void 0,mi.No)}}}loadPlaylist(e){this.requestScheduled===-1&&(this.requestScheduled=self.performance.now())}shouldLoadPlaylist(e){return this.canLoad&&!!e&&!!e.url&&(!e.details||e.details.live)}shouldReloadPlaylist(e){return this.timer===-1&&this.requestScheduled===-1&&this.shouldLoadPlaylist(e)}playlistLoaded(e,t,r){const{details:i,stats:s}=t,o=self.performance.now(),a=s.loading.first?Math.max(0,o-s.loading.first):0;if(i.advancedDateTime=Date.now()-a,i.live||r!=null&&r.live){if(i.reloaded(r),r&&this.log(`live playlist ${e} ${i.advanced?"REFRESHED "+i.lastPartSn+"-"+i.lastPartIndex:i.updated?"UPDATED":"MISSED"}`),r&&i.fragments.length>0&&UE(r,i),!this.canLoad||!i.live)return;let l,c,d;if(i.canBlockReload&&i.endSN&&i.advanced){const E=this.hls.config.lowLatencyMode,C=i.lastPartSn,w=i.endSN,R=i.lastPartIndex,_=R!==-1,P=C===w,H=E?0:R;_?(c=P?w+1:C,d=P?H:R+1):c=w+1;const U=i.age,j=U+i.ageHeader;let Q=Math.min(j-i.partTarget,i.targetduration*1.5);if(Q>0){if(r&&Q>r.tuneInGoal)this.warn(`CDN Tune-in goal increased from: ${r.tuneInGoal} to: ${Q} with playlist age: ${i.age}`),Q=0;else{const F=Math.floor(Q/i.targetduration);if(c+=F,d!==void 0){const Y=Math.round(Q%i.targetduration/i.partTarget);d+=Y}this.log(`CDN Tune-in age: ${i.ageHeader}s last advanced ${U.toFixed(2)}s goal: ${Q} skip sn ${F} to part ${d}`)}i.tuneInGoal=Q}if(l=this.getDeliveryDirectives(i,t.deliveryDirectives,c,d),E||!P){this.loadPlaylist(l);return}}else(i.canBlockReload||i.canSkipUntil)&&(l=this.getDeliveryDirectives(i,t.deliveryDirectives,c,d));const u=this.hls.mainForwardBufferInfo,h=u?u.end-u.len:0,g=(i.edge-h)*1e3,y=KE(i,g);i.updated&&o>this.requestScheduled+y&&(this.requestScheduled=s.loading.start),c!==void 0&&i.canBlockReload?this.requestScheduled=s.loading.first+y-(i.partTarget*1e3||1e3):this.requestScheduled===-1||this.requestScheduled+y<o?this.requestScheduled=o:this.requestScheduled-o<=0&&(this.requestScheduled+=y);let b=this.requestScheduled-o;b=Math.max(0,b),this.log(`reload live playlist ${e} in ${Math.round(b)} ms`),this.timer=self.setTimeout(()=>this.loadPlaylist(l),b)}else this.clearTimer()}getDeliveryDirectives(e,t,r,i){let s=NE(e,r);return t!=null&&t.skip&&e.deltaUpdateFailed&&(r=t.msn,i=t.part,s=mi.No),new Ud(r,i,s)}checkRetry(e){const t=e.details,r=Is(e),i=e.errorAction,{action:s,retryCount:o=0,retryConfig:a}=i||{},l=!!i&&!!a&&(s===mt.RetryRequest||!i.resolved&&s===mt.SendAlternateToPenaltyBox);if(l){var c;if(this.requestScheduled=-1,o>=a.maxNumRetry)return!1;if(r&&(c=e.context)!=null&&c.deliveryDirectives)this.warn(`Retrying playlist loading ${o+1}/${a.maxNumRetry} after "${t}" without delivery-directives`),this.loadPlaylist();else{const d=ml(a,o);this.timer=self.setTimeout(()=>this.loadPlaylist(),d),this.warn(`Retrying playlist loading ${o+1}/${a.maxNumRetry} after "${t}" in ${d}ms`)}e.levelRetry=!0,i.resolved=!0}return l}}class er{constructor(e,t=0,r=0){this.halfLife=void 0,this.alpha_=void 0,this.estimate_=void 0,this.totalWeight_=void 0,this.halfLife=e,this.alpha_=e?Math.exp(Math.log(.5)/e):0,this.estimate_=t,this.totalWeight_=r}sample(e,t){const r=Math.pow(this.alpha_,e);this.estimate_=t*(1-r)+r*this.estimate_,this.totalWeight_+=e}getTotalWeight(){return this.totalWeight_}getEstimate(){if(this.alpha_){const e=1-Math.pow(this.alpha_,this.totalWeight_);if(e)return this.estimate_/e}return this.estimate_}}class QE{constructor(e,t,r,i=100){this.defaultEstimate_=void 0,this.minWeight_=void 0,this.minDelayMs_=void 0,this.slow_=void 0,this.fast_=void 0,this.defaultTTFB_=void 0,this.ttfb_=void 0,this.defaultEstimate_=r,this.minWeight_=.001,this.minDelayMs_=50,this.slow_=new er(e),this.fast_=new er(t),this.defaultTTFB_=i,this.ttfb_=new er(e)}update(e,t){const{slow_:r,fast_:i,ttfb_:s}=this;r.halfLife!==e&&(this.slow_=new er(e,r.getEstimate(),r.getTotalWeight())),i.halfLife!==t&&(this.fast_=new er(t,i.getEstimate(),i.getTotalWeight())),s.halfLife!==e&&(this.ttfb_=new er(e,s.getEstimate(),s.getTotalWeight()))}sample(e,t){e=Math.max(e,this.minDelayMs_);const r=8*t,i=e/1e3,s=r/i;this.fast_.sample(i,s),this.slow_.sample(i,s)}sampleTTFB(e){const t=e/1e3,r=Math.sqrt(2)*Math.exp(-Math.pow(t,2)/2);this.ttfb_.sample(r,Math.max(e,5))}canEstimate(){return this.fast_.getTotalWeight()>=this.minWeight_}getEstimate(){return this.canEstimate()?Math.min(this.fast_.getEstimate(),this.slow_.getEstimate()):this.defaultEstimate_}getEstimateTTFB(){return this.ttfb_.getTotalWeight()>=this.minWeight_?this.ttfb_.getEstimate():this.defaultTTFB_}destroy(){}}const If={supported:!0,configurations:[],decodingInfoResults:[{supported:!0,powerEfficient:!0,smooth:!0}]},jd={};function XE(n,e,t,r,i,s){const o=n.audioCodec?n.audioGroups:null,a=s==null?void 0:s.audioCodec,l=s==null?void 0:s.channels,c=l?parseInt(l):a?1/0:2;let d=null;if(o!=null&&o.length)try{o.length===1&&o[0]?d=e.groups[o[0]].channels:d=o.reduce((u,h)=>{if(h){const g=e.groups[h];if(!g)throw new Error(`Audio track group ${h} not found`);Object.keys(g.channels).forEach(y=>{u[y]=(u[y]||0)+g.channels[y]})}return u},{2:0})}catch{return!0}return n.videoCodec!==void 0&&(n.width>1920&&n.height>1088||n.height>1920&&n.width>1088||n.frameRate>Math.max(r,30)||n.videoRange!=="SDR"&&n.videoRange!==t||n.bitrate>Math.max(i,8e6))||!!d&&pe(c)&&Object.keys(d).some(u=>parseInt(u)>c)}function JE(n,e,t){const r=n.videoCodec,i=n.audioCodec;if(!r||!i||!t)return Promise.resolve(If);const s={width:n.width,height:n.height,bitrate:Math.ceil(Math.max(n.bitrate*.9,n.averageBitrate)),framerate:n.frameRate||30},o=n.videoRange;o!=="SDR"&&(s.transferFunction=o.toLowerCase());const a=r.split(",").map(l=>({type:"media-source",video:pt(pt({},s),{},{contentType:ki(l,"video")})}));return i&&n.audioGroups&&n.audioGroups.forEach(l=>{var c;l&&((c=e.groups[l])==null||c.tracks.forEach(d=>{if(d.groupId===l){const u=d.channels||"",h=parseFloat(u);pe(h)&&h>2&&a.push.apply(a,i.split(",").map(g=>({type:"media-source",audio:{contentType:ki(g,"audio"),channels:""+h}})))}}))}),Promise.all(a.map(l=>{const c=ZE(l);return jd[c]||(jd[c]=t.decodingInfo(l))})).then(l=>({supported:!l.some(c=>!c.supported),configurations:a,decodingInfoResults:l})).catch(l=>({supported:!1,configurations:a,decodingInfoResults:[],error:l}))}function ZE(n){const{audio:e,video:t}=n,r=t||e;if(r){const i=r.contentType.split('"')[1];if(t)return`r${t.height}x${t.width}f${Math.ceil(t.framerate)}${t.transferFunction||"sd"}_${i}_${Math.ceil(t.bitrate/1e5)}`;if(e)return`c${e.channels}${e.spatialRendering?"s":"n"}_${i}`}return""}function ex(){if(typeof matchMedia=="function"){const n=matchMedia("(dynamic-range: high)"),e=matchMedia("bad query");if(n.media!==e.media)return n.matches===!0}return!1}function tx(n,e){let t=!1,r=[];return n&&(t=n!=="SDR",r=[n]),e&&(r=e.allowedVideoRanges||Rs.slice(0),t=e.preferHDR!==void 0?e.preferHDR:ex(),t?r=r.filter(i=>i!=="SDR"):r=["SDR"]),{preferHDR:t,allowedVideoRanges:r}}function nx(n,e,t,r,i){const s=Object.keys(n),o=r==null?void 0:r.channels,a=r==null?void 0:r.audioCodec,l=o&&parseInt(o)===2;let c=!0,d=!1,u=1/0,h=1/0,g=1/0,y=0,b=[];const{preferHDR:E,allowedVideoRanges:C}=tx(e,i);for(let P=s.length;P--;){const H=n[s[P]];c=H.channels[2]>0,u=Math.min(u,H.minHeight),h=Math.min(h,H.minFramerate),g=Math.min(g,H.minBitrate);const U=C.filter(j=>H.videoRanges[j]>0);U.length>0&&(d=!0,b=U)}u=pe(u)?u:0,h=pe(h)?h:0;const w=Math.max(1080,u),R=Math.max(30,h);return g=pe(g)?g:t,t=Math.max(g,t),d||(e=void 0,b=[]),{codecSet:s.reduce((P,H)=>{const U=n[H];if(H===P)return P;if(U.minBitrate>t)return ln(H,`min bitrate of ${U.minBitrate} > current estimate of ${t}`),P;if(!U.hasDefaultAudio)return ln(H,"no renditions with default or auto-select sound found"),P;if(a&&H.indexOf(a.substring(0,4))%5!==0)return ln(H,`audio codec preference "${a}" not found`),P;if(o&&!l){if(!U.channels[o])return ln(H,`no renditions with ${o} channel sound found (channels options: ${Object.keys(U.channels)})`),P}else if((!a||l)&&c&&U.channels[2]===0)return ln(H,"no renditions with stereo sound found"),P;return U.minHeight>w?(ln(H,`min resolution of ${U.minHeight} > maximum of ${w}`),P):U.minFramerate>R?(ln(H,`min framerate of ${U.minFramerate} > maximum of ${R}`),P):b.some(j=>U.videoRanges[j]>0)?U.maxScore<y?(ln(H,`max score of ${U.maxScore} < selected max of ${y}`),P):P&&(ks(H)>=ks(P)||U.fragmentError>n[P].fragmentError)?P:(y=U.maxScore,H):(ln(H,`no variants with VIDEO-RANGE of ${JSON.stringify(b)} found`),P)},void 0),videoRanges:b,preferHDR:E,minFramerate:h,minBitrate:g}}function ln(n,e){B.log(`[abr] start candidates with "${n}" ignored because ${e}`)}function rx(n){return n.reduce((e,t)=>{let r=e.groups[t.groupId];r||(r=e.groups[t.groupId]={tracks:[],channels:{2:0},hasDefault:!1,hasAutoSelect:!1}),r.tracks.push(t);const i=t.channels||"2";return r.channels[i]=(r.channels[i]||0)+1,r.hasDefault=r.hasDefault||t.default,r.hasAutoSelect=r.hasAutoSelect||t.autoselect,r.hasDefault&&(e.hasDefaultAudio=!0),r.hasAutoSelect&&(e.hasAutoSelectAudio=!0),e},{hasDefaultAudio:!1,hasAutoSelectAudio:!1,groups:{}})}function ix(n,e,t,r){return n.slice(t,r+1).reduce((i,s)=>{if(!s.codecSet)return i;const o=s.audioGroups;let a=i[s.codecSet];a||(i[s.codecSet]=a={minBitrate:1/0,minHeight:1/0,minFramerate:1/0,maxScore:0,videoRanges:{SDR:0},channels:{2:0},hasDefaultAudio:!o,fragmentError:0}),a.minBitrate=Math.min(a.minBitrate,s.bitrate);const l=Math.min(s.height,s.width);return a.minHeight=Math.min(a.minHeight,l),a.minFramerate=Math.min(a.minFramerate,s.frameRate),a.maxScore=Math.max(a.maxScore,s.score),a.fragmentError+=s.fragmentError,a.videoRanges[s.videoRange]=(a.videoRanges[s.videoRange]||0)+1,o&&o.forEach(c=>{if(!c)return;const d=e.groups[c];a.hasDefaultAudio=a.hasDefaultAudio||e.hasDefaultAudio?d.hasDefault:d.hasAutoSelect||!e.hasDefaultAudio&&!e.hasAutoSelectAudio,Object.keys(d.channels).forEach(u=>{a.channels[u]=(a.channels[u]||0)+d.channels[u]})}),i},{})}function en(n,e,t){if("attrs"in n){const r=e.indexOf(n);if(r!==-1)return r}for(let r=0;r<e.length;r++){const i=e[r];if(fr(n,i,t))return r}return-1}function fr(n,e,t){const{groupId:r,name:i,lang:s,assocLang:o,characteristics:a,default:l}=n,c=n.forced;return(r===void 0||e.groupId===r)&&(i===void 0||e.name===i)&&(s===void 0||e.lang===s)&&(s===void 0||e.assocLang===o)&&(l===void 0||e.default===l)&&(c===void 0||e.forced===c)&&(a===void 0||sx(a,e.characteristics))&&(t===void 0||t(n,e))}function sx(n,e=""){const t=n.split(","),r=e.split(",");return t.length===r.length&&!t.some(i=>r.indexOf(i)===-1)}function tr(n,e){const{audioCodec:t,channels:r}=n;return(t===void 0||(e.audioCodec||"").substring(0,4)===t.substring(0,4))&&(r===void 0||r===(e.channels||"2"))}function ox(n,e,t,r,i){const s=e[r],a=e.reduce((h,g,y)=>{const b=g.uri;return(h[b]||(h[b]=[])).push(y),h},{})[s.uri];a.length>1&&(r=Math.max.apply(Math,a));const l=s.videoRange,c=s.frameRate,d=s.codecSet.substring(0,4),u=qd(e,r,h=>{if(h.videoRange!==l||h.frameRate!==c||h.codecSet.substring(0,4)!==d)return!1;const g=h.audioGroups,y=t.filter(b=>!g||g.indexOf(b.groupId)!==-1);return en(n,y,i)>-1});return u>-1?u:qd(e,r,h=>{const g=h.audioGroups,y=t.filter(b=>!g||g.indexOf(b.groupId)!==-1);return en(n,y,i)>-1})}function qd(n,e,t){for(let r=e;r;r--)if(t(n[r]))return r;for(let r=e+1;r<n.length;r++)if(t(n[r]))return r;return-1}class ax{constructor(e){this.hls=void 0,this.lastLevelLoadSec=0,this.lastLoadedFragLevel=-1,this.firstSelection=-1,this._nextAutoLevel=-1,this.nextAutoLevelKey="",this.audioTracksByGroup=null,this.codecTiers=null,this.timer=-1,this.fragCurrent=null,this.partCurrent=null,this.bitrateTestDelay=0,this.bwEstimator=void 0,this._abandonRulesCheck=()=>{const{fragCurrent:t,partCurrent:r,hls:i}=this,{autoLevelEnabled:s,media:o}=i;if(!t||!o)return;const a=performance.now(),l=r?r.stats:t.stats,c=r?r.duration:t.duration,d=a-l.loading.start,u=i.minAutoLevel;if(l.aborted||l.loaded&&l.loaded===l.total||t.level<=u){this.clearTimer(),this._nextAutoLevel=-1;return}if(!s||o.paused||!o.playbackRate||!o.readyState)return;const h=i.mainForwardBufferInfo;if(h===null)return;const g=this.bwEstimator.getEstimateTTFB(),y=Math.abs(o.playbackRate);if(d<=Math.max(g,1e3*(c/(y*2))))return;const b=h.len/y,E=l.loading.first?l.loading.first-l.loading.start:-1,C=l.loaded&&E>-1,w=this.getBwEstimate(),R=i.levels,_=R[t.level],P=l.total||Math.max(l.loaded,Math.round(c*_.averageBitrate/8));let H=C?d-E:d;H<1&&C&&(H=Math.min(d,l.loaded*8/w));const U=C?l.loaded*1e3/H:0,j=U?(P-l.loaded)/U:P*8/w+g/1e3;if(j<=b)return;const Q=U?U*8:w;let F=Number.POSITIVE_INFINITY,Y;for(Y=t.level-1;Y>u;Y--){const te=R[Y].maxBitrate;if(F=this.getTimeToLoadFrag(g/1e3,Q,c*te,!R[Y].details),F<b)break}if(F>=j||F>c*10)return;i.nextLoadLevel=i.nextAutoLevel=Y,C?this.bwEstimator.sample(d-Math.min(g,E),l.loaded):this.bwEstimator.sampleTTFB(d);const Ae=R[Y].maxBitrate;this.getBwEstimate()*this.hls.config.abrBandWidthUpFactor>Ae&&this.resetEstimator(Ae),this.clearTimer(),B.warn(`[abr] Fragment ${t.sn}${r?" part "+r.index:""} of level ${t.level} is loading too slowly;
      Time to underbuffer: ${b.toFixed(3)} s
      Estimated load time for current fragment: ${j.toFixed(3)} s
      Estimated load time for down switch fragment: ${F.toFixed(3)} s
      TTFB estimate: ${E|0} ms
      Current BW estimate: ${pe(w)?w|0:"Unknown"} bps
      New BW estimate: ${this.getBwEstimate()|0} bps
      Switching to level ${Y} @ ${Ae|0} bps`),i.trigger(T.FRAG_LOAD_EMERGENCY_ABORTED,{frag:t,part:r,stats:l})},this.hls=e,this.bwEstimator=this.initEstimator(),this.registerListeners()}resetEstimator(e){e&&(B.log(`setting initial bwe to ${e}`),this.hls.config.abrEwmaDefaultEstimate=e),this.firstSelection=-1,this.bwEstimator=this.initEstimator()}initEstimator(){const e=this.hls.config;return new QE(e.abrEwmaSlowVoD,e.abrEwmaFastVoD,e.abrEwmaDefaultEstimate)}registerListeners(){const{hls:e}=this;e.on(T.MANIFEST_LOADING,this.onManifestLoading,this),e.on(T.FRAG_LOADING,this.onFragLoading,this),e.on(T.FRAG_LOADED,this.onFragLoaded,this),e.on(T.FRAG_BUFFERED,this.onFragBuffered,this),e.on(T.LEVEL_SWITCHING,this.onLevelSwitching,this),e.on(T.LEVEL_LOADED,this.onLevelLoaded,this),e.on(T.LEVELS_UPDATED,this.onLevelsUpdated,this),e.on(T.MAX_AUTO_LEVEL_UPDATED,this.onMaxAutoLevelUpdated,this),e.on(T.ERROR,this.onError,this)}unregisterListeners(){const{hls:e}=this;e&&(e.off(T.MANIFEST_LOADING,this.onManifestLoading,this),e.off(T.FRAG_LOADING,this.onFragLoading,this),e.off(T.FRAG_LOADED,this.onFragLoaded,this),e.off(T.FRAG_BUFFERED,this.onFragBuffered,this),e.off(T.LEVEL_SWITCHING,this.onLevelSwitching,this),e.off(T.LEVEL_LOADED,this.onLevelLoaded,this),e.off(T.LEVELS_UPDATED,this.onLevelsUpdated,this),e.off(T.MAX_AUTO_LEVEL_UPDATED,this.onMaxAutoLevelUpdated,this),e.off(T.ERROR,this.onError,this))}destroy(){this.unregisterListeners(),this.clearTimer(),this.hls=this._abandonRulesCheck=null,this.fragCurrent=this.partCurrent=null}onManifestLoading(e,t){this.lastLoadedFragLevel=-1,this.firstSelection=-1,this.lastLevelLoadSec=0,this.fragCurrent=this.partCurrent=null,this.onLevelsUpdated(),this.clearTimer()}onLevelsUpdated(){this.lastLoadedFragLevel>-1&&this.fragCurrent&&(this.lastLoadedFragLevel=this.fragCurrent.level),this._nextAutoLevel=-1,this.onMaxAutoLevelUpdated(),this.codecTiers=null,this.audioTracksByGroup=null}onMaxAutoLevelUpdated(){this.firstSelection=-1,this.nextAutoLevelKey=""}onFragLoading(e,t){const r=t.frag;if(!this.ignoreFragment(r)){if(!r.bitrateTest){var i;this.fragCurrent=r,this.partCurrent=(i=t.part)!=null?i:null}this.clearTimer(),this.timer=self.setInterval(this._abandonRulesCheck,100)}}onLevelSwitching(e,t){this.clearTimer()}onError(e,t){if(!t.fatal)switch(t.details){case $.BUFFER_ADD_CODEC_ERROR:case $.BUFFER_APPEND_ERROR:this.lastLoadedFragLevel=-1,this.firstSelection=-1;break;case $.FRAG_LOAD_TIMEOUT:{const r=t.frag,{fragCurrent:i,partCurrent:s}=this;if(r&&i&&r.sn===i.sn&&r.level===i.level){const o=performance.now(),a=s?s.stats:r.stats,l=o-a.loading.start,c=a.loading.first?a.loading.first-a.loading.start:-1;if(a.loaded&&c>-1){const u=this.bwEstimator.getEstimateTTFB();this.bwEstimator.sample(l-Math.min(u,c),a.loaded)}else this.bwEstimator.sampleTTFB(l)}break}}}getTimeToLoadFrag(e,t,r,i){const s=e+r/t,o=i?this.lastLevelLoadSec:0;return s+o}onLevelLoaded(e,t){const r=this.hls.config,{loading:i}=t.stats,s=i.end-i.start;pe(s)&&(this.lastLevelLoadSec=s/1e3),t.details.live?this.bwEstimator.update(r.abrEwmaSlowLive,r.abrEwmaFastLive):this.bwEstimator.update(r.abrEwmaSlowVoD,r.abrEwmaFastVoD)}onFragLoaded(e,{frag:t,part:r}){const i=r?r.stats:t.stats;if(t.type===ke.MAIN&&this.bwEstimator.sampleTTFB(i.loading.first-i.loading.start),!this.ignoreFragment(t)){if(this.clearTimer(),t.level===this._nextAutoLevel&&(this._nextAutoLevel=-1),this.firstSelection=-1,this.hls.config.abrMaxWithRealBitrate){const s=r?r.duration:t.duration,o=this.hls.levels[t.level],a=(o.loaded?o.loaded.bytes:0)+i.loaded,l=(o.loaded?o.loaded.duration:0)+s;o.loaded={bytes:a,duration:l},o.realBitrate=Math.round(8*a/l)}if(t.bitrateTest){const s={stats:i,frag:t,part:r,id:t.type};this.onFragBuffered(T.FRAG_BUFFERED,s),t.bitrateTest=!1}else this.lastLoadedFragLevel=t.level}}onFragBuffered(e,t){const{frag:r,part:i}=t,s=i!=null&&i.stats.loaded?i.stats:r.stats;if(s.aborted||this.ignoreFragment(r))return;const o=s.parsing.end-s.loading.start-Math.min(s.loading.first-s.loading.start,this.bwEstimator.getEstimateTTFB());this.bwEstimator.sample(o,s.loaded),s.bwEstimate=this.getBwEstimate(),r.bitrateTest?this.bitrateTestDelay=o/1e3:this.bitrateTestDelay=0}ignoreFragment(e){return e.type!==ke.MAIN||e.sn==="initSegment"}clearTimer(){this.timer>-1&&(self.clearInterval(this.timer),this.timer=-1)}get firstAutoLevel(){const{maxAutoLevel:e,minAutoLevel:t}=this.hls,r=this.getBwEstimate(),i=this.hls.config.maxStarvationDelay,s=this.findBestLevel(r,t,e,0,i,1,1);if(s>-1)return s;const o=this.hls.firstLevel,a=Math.min(Math.max(o,t),e);return B.warn(`[abr] Could not find best starting auto level. Defaulting to first in playlist ${o} clamped to ${a}`),a}get forcedAutoLevel(){return this.nextAutoLevelKey?-1:this._nextAutoLevel}get nextAutoLevel(){const e=this.forcedAutoLevel,r=this.bwEstimator.canEstimate(),i=this.lastLoadedFragLevel>-1;if(e!==-1&&(!r||!i||this.nextAutoLevelKey===this.getAutoLevelKey()))return e;const s=r&&i?this.getNextABRAutoLevel():this.firstAutoLevel;if(e!==-1){const o=this.hls.levels;if(o.length>Math.max(e,s)&&o[e].loadError<=o[s].loadError)return e}return this._nextAutoLevel=s,this.nextAutoLevelKey=this.getAutoLevelKey(),s}getAutoLevelKey(){return`${this.getBwEstimate()}_${this.getStarvationDelay().toFixed(2)}`}getNextABRAutoLevel(){const{fragCurrent:e,partCurrent:t,hls:r}=this,{maxAutoLevel:i,config:s,minAutoLevel:o}=r,a=t?t.duration:e?e.duration:0,l=this.getBwEstimate(),c=this.getStarvationDelay();let d=s.abrBandWidthFactor,u=s.abrBandWidthUpFactor;if(c){const E=this.findBestLevel(l,o,i,c,0,d,u);if(E>=0)return E}let h=a?Math.min(a,s.maxStarvationDelay):s.maxStarvationDelay;if(!c){const E=this.bitrateTestDelay;E&&(h=(a?Math.min(a,s.maxLoadingDelay):s.maxLoadingDelay)-E,B.info(`[abr] bitrate test took ${Math.round(1e3*E)}ms, set first fragment max fetchDuration to ${Math.round(1e3*h)} ms`),d=u=1)}const g=this.findBestLevel(l,o,i,c,h,d,u);if(B.info(`[abr] ${c?"rebuffering expected":"buffer is empty"}, optimal quality level ${g}`),g>-1)return g;const y=r.levels[o],b=r.levels[r.loadLevel];return(y==null?void 0:y.bitrate)<(b==null?void 0:b.bitrate)?o:r.loadLevel}getStarvationDelay(){const e=this.hls,t=e.media;if(!t)return 1/0;const r=t&&t.playbackRate!==0?Math.abs(t.playbackRate):1,i=e.mainForwardBufferInfo;return(i?i.len:0)/r}getBwEstimate(){return this.bwEstimator.canEstimate()?this.bwEstimator.getEstimate():this.hls.config.abrEwmaDefaultEstimate}findBestLevel(e,t,r,i,s,o,a){var l;const c=i+s,d=this.lastLoadedFragLevel,u=d===-1?this.hls.firstLevel:d,{fragCurrent:h,partCurrent:g}=this,{levels:y,allAudioTracks:b,loadLevel:E,config:C}=this.hls;if(y.length===1)return 0;const w=y[u],R=!!(w!=null&&(l=w.details)!=null&&l.live),_=E===-1||d===-1;let P,H="SDR",U=(w==null?void 0:w.frameRate)||0;const{audioPreference:j,videoPreference:Q}=C,F=this.audioTracksByGroup||(this.audioTracksByGroup=rx(b));if(_){if(this.firstSelection!==-1)return this.firstSelection;const ve=this.codecTiers||(this.codecTiers=ix(y,F,t,r)),ne=nx(ve,H,e,j,Q),{codecSet:ye,videoRanges:me,minFramerate:z,minBitrate:ae,preferHDR:Re}=ne;P=ye,H=Re?me[me.length-1]:me[0],U=z,e=Math.max(e,ae),B.log(`[abr] picked start tier ${JSON.stringify(ne)}`)}else P=w==null?void 0:w.codecSet,H=w==null?void 0:w.videoRange;const Y=g?g.duration:h?h.duration:0,Ae=this.bwEstimator.getEstimateTTFB()/1e3,te=[];for(let ve=r;ve>=t;ve--){var Se;const ne=y[ve],ye=ve>u;if(!ne)continue;if(C.useMediaCapabilities&&!ne.supportedResult&&!ne.supportedPromise){const je=navigator.mediaCapabilities;typeof(je==null?void 0:je.decodingInfo)=="function"&&XE(ne,F,H,U,e,j)?(ne.supportedPromise=JE(ne,F,je),ne.supportedPromise.then(Qe=>{if(!this.hls)return;ne.supportedResult=Qe;const Pe=this.hls.levels,K=Pe.indexOf(ne);Qe.error?B.warn(`[abr] MediaCapabilities decodingInfo error: "${Qe.error}" for level ${K} ${JSON.stringify(Qe)}`):Qe.supported||(B.warn(`[abr] Unsupported MediaCapabilities decodingInfo result for level ${K} ${JSON.stringify(Qe)}`),K>-1&&Pe.length>1&&(B.log(`[abr] Removing unsupported level ${K}`),this.hls.removeLevel(K)))})):ne.supportedResult=If}if(P&&ne.codecSet!==P||H&&ne.videoRange!==H||ye&&U>ne.frameRate||!ye&&U>0&&U<ne.frameRate||ne.supportedResult&&!((Se=ne.supportedResult.decodingInfoResults)!=null&&Se[0].smooth)){te.push(ve);continue}const me=ne.details,z=(g?me==null?void 0:me.partTarget:me==null?void 0:me.averagetargetduration)||Y;let ae;ye?ae=a*e:ae=o*e;const Re=Y&&i>=Y*2&&s===0?y[ve].averageBitrate:y[ve].maxBitrate,xe=this.getTimeToLoadFrag(Ae,ae,Re*z,me===void 0);if(ae>=Re&&(ve===d||ne.loadError===0&&ne.fragmentError===0)&&(xe<=Ae||!pe(xe)||R&&!this.bitrateTestDelay||xe<c)){const je=this.forcedAutoLevel;return ve!==E&&(je===-1||je!==E)&&(te.length&&B.trace(`[abr] Skipped level(s) ${te.join(",")} of ${r} max with CODECS and VIDEO-RANGE:"${y[te[0]].codecs}" ${y[te[0]].videoRange}; not compatible with "${w.codecs}" ${H}`),B.info(`[abr] switch candidate:${u}->${ve} adjustedbw(${Math.round(ae)})-bitrate=${Math.round(ae-Re)} ttfb:${Ae.toFixed(1)} avgDuration:${z.toFixed(1)} maxFetchDuration:${c.toFixed(1)} fetchDuration:${xe.toFixed(1)} firstSelection:${_} codecSet:${P} videoRange:${H} hls.loadLevel:${E}`)),_&&(this.firstSelection=ve),ve}}return-1}set nextAutoLevel(e){const{maxAutoLevel:t,minAutoLevel:r}=this.hls,i=Math.min(Math.max(e,r),t);this._nextAutoLevel!==i&&(this.nextAutoLevelKey="",this._nextAutoLevel=i)}}class lx{constructor(){this._boundTick=void 0,this._tickTimer=null,this._tickInterval=null,this._tickCallCount=0,this._boundTick=this.tick.bind(this)}destroy(){this.onHandlerDestroying(),this.onHandlerDestroyed()}onHandlerDestroying(){this.clearNextTick(),this.clearInterval()}onHandlerDestroyed(){}hasInterval(){return!!this._tickInterval}hasNextTick(){return!!this._tickTimer}setInterval(e){return this._tickInterval?!1:(this._tickCallCount=0,this._tickInterval=self.setInterval(this._boundTick,e),!0)}clearInterval(){return this._tickInterval?(self.clearInterval(this._tickInterval),this._tickInterval=null,!0):!1}clearNextTick(){return this._tickTimer?(self.clearTimeout(this._tickTimer),this._tickTimer=null,!0):!1}tick(){this._tickCallCount++,this._tickCallCount===1&&(this.doTick(),this._tickCallCount>1&&this.tickImmediate(),this._tickCallCount=0)}tickImmediate(){this.clearNextTick(),this._tickTimer=self.setTimeout(this._boundTick,0)}doTick(){}}var ht={NOT_LOADED:"NOT_LOADED",APPENDING:"APPENDING",PARTIAL:"PARTIAL",OK:"OK"};class cx{constructor(e){this.activePartLists=Object.create(null),this.endListFragments=Object.create(null),this.fragments=Object.create(null),this.timeRanges=Object.create(null),this.bufferPadding=.2,this.hls=void 0,this.hasGaps=!1,this.hls=e,this._registerListeners()}_registerListeners(){const{hls:e}=this;e.on(T.BUFFER_APPENDED,this.onBufferAppended,this),e.on(T.FRAG_BUFFERED,this.onFragBuffered,this),e.on(T.FRAG_LOADED,this.onFragLoaded,this)}_unregisterListeners(){const{hls:e}=this;e.off(T.BUFFER_APPENDED,this.onBufferAppended,this),e.off(T.FRAG_BUFFERED,this.onFragBuffered,this),e.off(T.FRAG_LOADED,this.onFragLoaded,this)}destroy(){this._unregisterListeners(),this.fragments=this.activePartLists=this.endListFragments=this.timeRanges=null}getAppendedFrag(e,t){const r=this.activePartLists[t];if(r)for(let i=r.length;i--;){const s=r[i];if(!s)break;const o=s.end;if(s.start<=e&&o!==null&&e<=o)return s}return this.getBufferedFrag(e,t)}getBufferedFrag(e,t){const{fragments:r}=this,i=Object.keys(r);for(let s=i.length;s--;){const o=r[i[s]];if((o==null?void 0:o.body.type)===t&&o.buffered){const a=o.body;if(a.start<=e&&e<=a.end)return a}}return null}detectEvictedFragments(e,t,r,i){this.timeRanges&&(this.timeRanges[e]=t);const s=(i==null?void 0:i.fragment.sn)||-1;Object.keys(this.fragments).forEach(o=>{const a=this.fragments[o];if(!a||s>=a.body.sn)return;if(!a.buffered&&!a.loaded){a.body.type===r&&this.removeFragment(a.body);return}const l=a.range[e];l&&l.time.some(c=>{const d=!this.isTimeBuffered(c.startPTS,c.endPTS,t);return d&&this.removeFragment(a.body),d})})}detectPartialFragments(e){const t=this.timeRanges,{frag:r,part:i}=e;if(!t||r.sn==="initSegment")return;const s=nr(r),o=this.fragments[s];if(!o||o.buffered&&r.gap)return;const a=!r.relurl;Object.keys(t).forEach(l=>{const c=r.elementaryStreams[l];if(!c)return;const d=t[l],u=a||c.partial===!0;o.range[l]=this.getBufferedTimes(r,i,u,d)}),o.loaded=null,Object.keys(o.range).length?(o.buffered=!0,(o.body.endList=r.endList||o.body.endList)&&(this.endListFragments[o.body.type]=o),Yi(o)||this.removeParts(r.sn-1,r.type)):this.removeFragment(o.body)}removeParts(e,t){const r=this.activePartLists[t];r&&(this.activePartLists[t]=r.filter(i=>i.fragment.sn>=e))}fragBuffered(e,t){const r=nr(e);let i=this.fragments[r];!i&&t&&(i=this.fragments[r]={body:e,appendedPTS:null,loaded:null,buffered:!1,range:Object.create(null)},e.gap&&(this.hasGaps=!0)),i&&(i.loaded=null,i.buffered=!0)}getBufferedTimes(e,t,r,i){const s={time:[],partial:r},o=e.start,a=e.end,l=e.minEndPTS||a,c=e.maxStartPTS||o;for(let d=0;d<i.length;d++){const u=i.start(d)-this.bufferPadding,h=i.end(d)+this.bufferPadding;if(c>=u&&l<=h){s.time.push({startPTS:Math.max(o,i.start(d)),endPTS:Math.min(a,i.end(d))});break}else if(o<h&&a>u){const g=Math.max(o,i.start(d)),y=Math.min(a,i.end(d));y>g&&(s.partial=!0,s.time.push({startPTS:g,endPTS:y}))}else if(a<=u)break}return s}getPartialFragment(e){let t=null,r,i,s,o=0;const{bufferPadding:a,fragments:l}=this;return Object.keys(l).forEach(c=>{const d=l[c];d&&Yi(d)&&(i=d.body.start-a,s=d.body.end+a,e>=i&&e<=s&&(r=Math.min(e-i,s-e),o<=r&&(t=d.body,o=r)))}),t}isEndListAppended(e){const t=this.endListFragments[e];return t!==void 0&&(t.buffered||Yi(t))}getState(e){const t=nr(e),r=this.fragments[t];return r?r.buffered?Yi(r)?ht.PARTIAL:ht.OK:ht.APPENDING:ht.NOT_LOADED}isTimeBuffered(e,t,r){let i,s;for(let o=0;o<r.length;o++){if(i=r.start(o)-this.bufferPadding,s=r.end(o)+this.bufferPadding,e>=i&&t<=s)return!0;if(t<=i)return!1}return!1}onFragLoaded(e,t){const{frag:r,part:i}=t;if(r.sn==="initSegment"||r.bitrateTest)return;const s=i?null:t,o=nr(r);this.fragments[o]={body:r,appendedPTS:null,loaded:s,buffered:!1,range:Object.create(null)}}onBufferAppended(e,t){const{frag:r,part:i,timeRanges:s}=t;if(r.sn==="initSegment")return;const o=r.type;if(i){let a=this.activePartLists[o];a||(this.activePartLists[o]=a=[]),a.push(i)}this.timeRanges=s,Object.keys(s).forEach(a=>{const l=s[a];this.detectEvictedFragments(a,l,o,i)})}onFragBuffered(e,t){this.detectPartialFragments(t)}hasFragment(e){const t=nr(e);return!!this.fragments[t]}hasParts(e){var t;return!!((t=this.activePartLists[e])!=null&&t.length)}removeFragmentsInRange(e,t,r,i,s){i&&!this.hasGaps||Object.keys(this.fragments).forEach(o=>{const a=this.fragments[o];if(!a)return;const l=a.body;l.type!==r||i&&!l.gap||l.start<t&&l.end>e&&(a.buffered||s)&&this.removeFragment(l)})}removeFragment(e){const t=nr(e);e.stats.loaded=0,e.clearElementaryStreamInfo();const r=this.activePartLists[e.type];if(r){const i=e.sn;this.activePartLists[e.type]=r.filter(s=>s.fragment.sn!==i)}delete this.fragments[t],e.endList&&delete this.endListFragments[e.type]}removeAllFragments(){this.fragments=Object.create(null),this.endListFragments=Object.create(null),this.activePartLists=Object.create(null),this.hasGaps=!1}}function Yi(n){var e,t,r;return n.buffered&&(n.body.gap||((e=n.range.video)==null?void 0:e.partial)||((t=n.range.audio)==null?void 0:t.partial)||((r=n.range.audiovideo)==null?void 0:r.partial))}function nr(n){return`${n.type}_${n.level}_${n.sn}`}const dx={length:0,start:()=>0,end:()=>0};class Xe{static isBuffered(e,t){try{if(e){const r=Xe.getBuffered(e);for(let i=0;i<r.length;i++)if(t>=r.start(i)&&t<=r.end(i))return!0}}catch{}return!1}static bufferInfo(e,t,r){try{if(e){const i=Xe.getBuffered(e),s=[];let o;for(o=0;o<i.length;o++)s.push({start:i.start(o),end:i.end(o)});return this.bufferedInfo(s,t,r)}}catch{}return{len:0,start:t,end:t,nextStart:void 0}}static bufferedInfo(e,t,r){t=Math.max(0,t),e.sort(function(c,d){const u=c.start-d.start;return u||d.end-c.end});let i=[];if(r)for(let c=0;c<e.length;c++){const d=i.length;if(d){const u=i[d-1].end;e[c].start-u<r?e[c].end>u&&(i[d-1].end=e[c].end):i.push(e[c])}else i.push(e[c])}else i=e;let s=0,o,a=t,l=t;for(let c=0;c<i.length;c++){const d=i[c].start,u=i[c].end;if(t+r>=d&&t<u)a=d,l=u,s=l-t;else if(t+r<d){o=d;break}}return{len:s,start:a||0,end:l||0,nextStart:o}}static getBuffered(e){try{return e.buffered}catch(t){return B.log("failed to get media.buffered",t),dx}}}class yl{constructor(e,t,r,i=0,s=-1,o=!1){this.level=void 0,this.sn=void 0,this.part=void 0,this.id=void 0,this.size=void 0,this.partial=void 0,this.transmuxing=Qi(),this.buffering={audio:Qi(),video:Qi(),audiovideo:Qi()},this.level=e,this.sn=t,this.id=r,this.size=i,this.part=s,this.partial=o}}function Qi(){return{start:0,executeStart:0,executeEnd:0,end:0}}function hs(n,e){for(let r=0,i=n.length;r<i;r++){var t;if(((t=n[r])==null?void 0:t.cc)===e)return n[r]}return null}function ux(n,e,t){return!!(e&&(t.endCC>t.startCC||n&&n.cc<t.startCC))}function hx(n,e){const t=n.fragments,r=e.fragments;if(!r.length||!t.length){B.log("No fragments to align");return}const i=hs(t,r[0].cc);if(!i||i&&!i.startPTS){B.log("No frag in previous level to align on");return}return i}function zd(n,e){if(n){const t=n.start+e;n.start=n.startPTS=t,n.endPTS=t+n.duration}}function _f(n,e){const t=e.fragments;for(let r=0,i=t.length;r<i;r++)zd(t[r],n);e.fragmentHint&&zd(e.fragmentHint,n),e.alignedSliding=!0}function fx(n,e,t){e&&(px(n,t,e),!t.alignedSliding&&e&&Ps(t,e),!t.alignedSliding&&e&&!t.skippedSegments&&wf(e,t))}function px(n,e,t){if(ux(n,t,e)){const r=hx(t,e);r&&pe(r.start)&&(B.log(`Adjusting PTS using last level due to CC increase within current level ${e.url}`),_f(r.start,e))}}function Ps(n,e){if(!n.hasProgramDateTime||!e.hasProgramDateTime)return;const t=n.fragments,r=e.fragments;if(!t.length||!r.length)return;let i,s;const o=Math.min(e.endCC,n.endCC);e.startCC<o&&n.startCC<o&&(i=hs(r,o),s=hs(t,o)),(!i||!s)&&(i=r[Math.floor(r.length/2)],s=hs(t,i.cc)||t[Math.floor(t.length/2)]);const a=i.programDateTime,l=s.programDateTime;if(!a||!l)return;const c=(l-a)/1e3-(s.start-i.start);_f(c,n)}const Vd=Math.pow(2,17);class mx{constructor(e){this.config=void 0,this.loader=null,this.partLoadTimeout=-1,this.config=e}destroy(){this.loader&&(this.loader.destroy(),this.loader=null)}abort(){this.loader&&this.loader.abort()}load(e,t){const r=e.url;if(!r)return Promise.reject(new un({type:Le.NETWORK_ERROR,details:$.FRAG_LOAD_ERROR,fatal:!1,frag:e,error:new Error(`Fragment does not have a ${r?"part list":"url"}`),networkDetails:null}));this.abort();const i=this.config,s=i.fLoader,o=i.loader;return new Promise((a,l)=>{if(this.loader&&this.loader.destroy(),e.gap)if(e.tagList.some(g=>g[0]==="GAP")){l(Yd(e));return}else e.gap=!1;const c=this.loader=e.loader=s?new s(i):new o(i),d=Wd(e),u=Kd(i.fragLoadPolicy.default),h={loadPolicy:u,timeout:u.maxLoadTimeMs,maxRetry:0,retryDelay:0,maxRetryDelay:0,highWaterMark:e.sn==="initSegment"?1/0:Vd};e.stats=c.stats,c.load(d,h,{onSuccess:(g,y,b,E)=>{this.resetLoader(e,c);let C=g.data;b.resetIV&&e.decryptdata&&(e.decryptdata.iv=new Uint8Array(C.slice(0,16)),C=C.slice(16)),a({frag:e,part:null,payload:C,networkDetails:E})},onError:(g,y,b,E)=>{this.resetLoader(e,c),l(new un({type:Le.NETWORK_ERROR,details:$.FRAG_LOAD_ERROR,fatal:!1,frag:e,response:pt({url:r,data:void 0},g),error:new Error(`HTTP Error ${g.code} ${g.text}`),networkDetails:b,stats:E}))},onAbort:(g,y,b)=>{this.resetLoader(e,c),l(new un({type:Le.NETWORK_ERROR,details:$.INTERNAL_ABORTED,fatal:!1,frag:e,error:new Error("Aborted"),networkDetails:b,stats:g}))},onTimeout:(g,y,b)=>{this.resetLoader(e,c),l(new un({type:Le.NETWORK_ERROR,details:$.FRAG_LOAD_TIMEOUT,fatal:!1,frag:e,error:new Error(`Timeout after ${h.timeout}ms`),networkDetails:b,stats:g}))},onProgress:(g,y,b,E)=>{t&&t({frag:e,part:null,payload:b,networkDetails:E})}})})}loadPart(e,t,r){this.abort();const i=this.config,s=i.fLoader,o=i.loader;return new Promise((a,l)=>{if(this.loader&&this.loader.destroy(),e.gap||t.gap){l(Yd(e,t));return}const c=this.loader=e.loader=s?new s(i):new o(i),d=Wd(e,t),u=Kd(i.fragLoadPolicy.default),h={loadPolicy:u,timeout:u.maxLoadTimeMs,maxRetry:0,retryDelay:0,maxRetryDelay:0,highWaterMark:Vd};t.stats=c.stats,c.load(d,h,{onSuccess:(g,y,b,E)=>{this.resetLoader(e,c),this.updateStatsFromPart(e,t);const C={frag:e,part:t,payload:g.data,networkDetails:E};r(C),a(C)},onError:(g,y,b,E)=>{this.resetLoader(e,c),l(new un({type:Le.NETWORK_ERROR,details:$.FRAG_LOAD_ERROR,fatal:!1,frag:e,part:t,response:pt({url:d.url,data:void 0},g),error:new Error(`HTTP Error ${g.code} ${g.text}`),networkDetails:b,stats:E}))},onAbort:(g,y,b)=>{e.stats.aborted=t.stats.aborted,this.resetLoader(e,c),l(new un({type:Le.NETWORK_ERROR,details:$.INTERNAL_ABORTED,fatal:!1,frag:e,part:t,error:new Error("Aborted"),networkDetails:b,stats:g}))},onTimeout:(g,y,b)=>{this.resetLoader(e,c),l(new un({type:Le.NETWORK_ERROR,details:$.FRAG_LOAD_TIMEOUT,fatal:!1,frag:e,part:t,error:new Error(`Timeout after ${h.timeout}ms`),networkDetails:b,stats:g}))}})})}updateStatsFromPart(e,t){const r=e.stats,i=t.stats,s=i.total;if(r.loaded+=i.loaded,s){const l=Math.round(e.duration/t.duration),c=Math.min(Math.round(r.loaded/s),l),u=(l-c)*Math.round(r.loaded/c);r.total=r.loaded+u}else r.total=Math.max(r.loaded,r.total);const o=r.loading,a=i.loading;o.start?o.first+=a.first-a.start:(o.start=a.start,o.first=a.first),o.end=a.end}resetLoader(e,t){e.loader=null,this.loader===t&&(self.clearTimeout(this.partLoadTimeout),this.loader=null),t.destroy()}}function Wd(n,e=null){const t=e||n,r={frag:n,part:e,responseType:"arraybuffer",url:t.url,headers:{},rangeStart:0,rangeEnd:0},i=t.byteRangeStartOffset,s=t.byteRangeEndOffset;if(pe(i)&&pe(s)){var o;let a=i,l=s;if(n.sn==="initSegment"&&((o=n.decryptdata)==null?void 0:o.method)==="AES-128"){const c=s-i;c%16&&(l=s+(16-c%16)),i!==0&&(r.resetIV=!0,a=i-16)}r.rangeStart=a,r.rangeEnd=l}return r}function Yd(n,e){const t=new Error(`GAP ${n.gap?"tag":"attribute"} found`),r={type:Le.MEDIA_ERROR,details:$.FRAG_GAP,fatal:!1,frag:n,error:t,networkDetails:null};return e&&(r.part=e),(e||n).stats.aborted=!0,new un(r)}class un extends Error{constructor(e){super(e.error.message),this.data=void 0,this.data=e}}class gx{constructor(e,t){this.subtle=void 0,this.aesIV=void 0,this.subtle=e,this.aesIV=t}decrypt(e,t){return this.subtle.decrypt({name:"AES-CBC",iv:this.aesIV},t,e)}}class yx{constructor(e,t){this.subtle=void 0,this.key=void 0,this.subtle=e,this.key=t}expandKey(){return this.subtle.importKey("raw",this.key,{name:"AES-CBC"},!1,["encrypt","decrypt"])}}function Ax(n){const e=n.byteLength,t=e&&new DataView(n.buffer).getUint8(e-1);return t?qn(n,0,e-t):n}class bx{constructor(){this.rcon=[0,1,2,4,8,16,32,64,128,27,54],this.subMix=[new Uint32Array(256),new Uint32Array(256),new Uint32Array(256),new Uint32Array(256)],this.invSubMix=[new Uint32Array(256),new Uint32Array(256),new Uint32Array(256),new Uint32Array(256)],this.sBox=new Uint32Array(256),this.invSBox=new Uint32Array(256),this.key=new Uint32Array(0),this.ksRows=0,this.keySize=0,this.keySchedule=void 0,this.invKeySchedule=void 0,this.initTable()}uint8ArrayToUint32Array_(e){const t=new DataView(e),r=new Uint32Array(4);for(let i=0;i<4;i++)r[i]=t.getUint32(i*4);return r}initTable(){const e=this.sBox,t=this.invSBox,r=this.subMix,i=r[0],s=r[1],o=r[2],a=r[3],l=this.invSubMix,c=l[0],d=l[1],u=l[2],h=l[3],g=new Uint32Array(256);let y=0,b=0,E=0;for(E=0;E<256;E++)E<128?g[E]=E<<1:g[E]=E<<1^283;for(E=0;E<256;E++){let C=b^b<<1^b<<2^b<<3^b<<4;C=C>>>8^C&255^99,e[y]=C,t[C]=y;const w=g[y],R=g[w],_=g[R];let P=g[C]*257^C*16843008;i[y]=P<<24|P>>>8,s[y]=P<<16|P>>>16,o[y]=P<<8|P>>>24,a[y]=P,P=_*16843009^R*65537^w*257^y*16843008,c[C]=P<<24|P>>>8,d[C]=P<<16|P>>>16,u[C]=P<<8|P>>>24,h[C]=P,y?(y=w^g[g[g[_^w]]],b^=g[g[b]]):y=b=1}}expandKey(e){const t=this.uint8ArrayToUint32Array_(e);let r=!0,i=0;for(;i<t.length&&r;)r=t[i]===this.key[i],i++;if(r)return;this.key=t;const s=this.keySize=t.length;if(s!==4&&s!==6&&s!==8)throw new Error("Invalid aes key size="+s);const o=this.ksRows=(s+6+1)*4;let a,l;const c=this.keySchedule=new Uint32Array(o),d=this.invKeySchedule=new Uint32Array(o),u=this.sBox,h=this.rcon,g=this.invSubMix,y=g[0],b=g[1],E=g[2],C=g[3];let w,R;for(a=0;a<o;a++){if(a<s){w=c[a]=t[a];continue}R=w,a%s===0?(R=R<<8|R>>>24,R=u[R>>>24]<<24|u[R>>>16&255]<<16|u[R>>>8&255]<<8|u[R&255],R^=h[a/s|0]<<24):s>6&&a%s===4&&(R=u[R>>>24]<<24|u[R>>>16&255]<<16|u[R>>>8&255]<<8|u[R&255]),c[a]=w=(c[a-s]^R)>>>0}for(l=0;l<o;l++)a=o-l,l&3?R=c[a]:R=c[a-4],l<4||a<=4?d[l]=R:d[l]=y[u[R>>>24]]^b[u[R>>>16&255]]^E[u[R>>>8&255]]^C[u[R&255]],d[l]=d[l]>>>0}networkToHostOrderSwap(e){return e<<24|(e&65280)<<8|(e&16711680)>>8|e>>>24}decrypt(e,t,r){const i=this.keySize+6,s=this.invKeySchedule,o=this.invSBox,a=this.invSubMix,l=a[0],c=a[1],d=a[2],u=a[3],h=this.uint8ArrayToUint32Array_(r);let g=h[0],y=h[1],b=h[2],E=h[3];const C=new Int32Array(e),w=new Int32Array(C.length);let R,_,P,H,U,j,Q,F,Y,Ae,te,Se,ve,ne;const ye=this.networkToHostOrderSwap;for(;t<C.length;){for(Y=ye(C[t]),Ae=ye(C[t+1]),te=ye(C[t+2]),Se=ye(C[t+3]),U=Y^s[0],j=Se^s[1],Q=te^s[2],F=Ae^s[3],ve=4,ne=1;ne<i;ne++)R=l[U>>>24]^c[j>>16&255]^d[Q>>8&255]^u[F&255]^s[ve],_=l[j>>>24]^c[Q>>16&255]^d[F>>8&255]^u[U&255]^s[ve+1],P=l[Q>>>24]^c[F>>16&255]^d[U>>8&255]^u[j&255]^s[ve+2],H=l[F>>>24]^c[U>>16&255]^d[j>>8&255]^u[Q&255]^s[ve+3],U=R,j=_,Q=P,F=H,ve=ve+4;R=o[U>>>24]<<24^o[j>>16&255]<<16^o[Q>>8&255]<<8^o[F&255]^s[ve],_=o[j>>>24]<<24^o[Q>>16&255]<<16^o[F>>8&255]<<8^o[U&255]^s[ve+1],P=o[Q>>>24]<<24^o[F>>16&255]<<16^o[U>>8&255]<<8^o[j&255]^s[ve+2],H=o[F>>>24]<<24^o[U>>16&255]<<16^o[j>>8&255]<<8^o[Q&255]^s[ve+3],w[t]=ye(R^g),w[t+1]=ye(H^y),w[t+2]=ye(P^b),w[t+3]=ye(_^E),g=Y,y=Ae,b=te,E=Se,t=t+4}return w.buffer}}const vx=16;class Al{constructor(e,{removePKCS7Padding:t=!0}={}){if(this.logEnabled=!0,this.removePKCS7Padding=void 0,this.subtle=null,this.softwareDecrypter=null,this.key=null,this.fastAesKey=null,this.remainderData=null,this.currentIV=null,this.currentResult=null,this.useSoftware=void 0,this.useSoftware=e.enableSoftwareAES,this.removePKCS7Padding=t,t)try{const r=self.crypto;r&&(this.subtle=r.subtle||r.webkitSubtle)}catch{}this.subtle===null&&(this.useSoftware=!0)}destroy(){this.subtle=null,this.softwareDecrypter=null,this.key=null,this.fastAesKey=null,this.remainderData=null,this.currentIV=null,this.currentResult=null}isSync(){return this.useSoftware}flush(){const{currentResult:e,remainderData:t}=this;if(!e||t)return this.reset(),null;const r=new Uint8Array(e);return this.reset(),this.removePKCS7Padding?Ax(r):r}reset(){this.currentResult=null,this.currentIV=null,this.remainderData=null,this.softwareDecrypter&&(this.softwareDecrypter=null)}decrypt(e,t,r){return this.useSoftware?new Promise((i,s)=>{this.softwareDecrypt(new Uint8Array(e),t,r);const o=this.flush();o?i(o.buffer):s(new Error("[softwareDecrypt] Failed to decrypt data"))}):this.webCryptoDecrypt(new Uint8Array(e),t,r)}softwareDecrypt(e,t,r){const{currentIV:i,currentResult:s,remainderData:o}=this;this.logOnce("JS AES decrypt"),o&&(e=Bt(o,e),this.remainderData=null);const a=this.getValidChunk(e);if(!a.length)return null;i&&(r=i);let l=this.softwareDecrypter;l||(l=this.softwareDecrypter=new bx),l.expandKey(t);const c=s;return this.currentResult=l.decrypt(a.buffer,0,r),this.currentIV=qn(a,-16).buffer,c||null}webCryptoDecrypt(e,t,r){const i=this.subtle;return(this.key!==t||!this.fastAesKey)&&(this.key=t,this.fastAesKey=new yx(i,t)),this.fastAesKey.expandKey().then(s=>i?(this.logOnce("WebCrypto AES decrypt"),new gx(i,new Uint8Array(r)).decrypt(e.buffer,s)):Promise.reject(new Error("web crypto not initialized"))).catch(s=>(B.warn(`[decrypter]: WebCrypto Error, disable WebCrypto API, ${s.name}: ${s.message}`),this.onWebCryptoError(e,t,r)))}onWebCryptoError(e,t,r){this.useSoftware=!0,this.logEnabled=!0,this.softwareDecrypt(e,t,r);const i=this.flush();if(i)return i.buffer;throw new Error("WebCrypto and softwareDecrypt: failed to decrypt data")}getValidChunk(e){let t=e;const r=e.length-e.length%vx;return r!==e.length&&(t=qn(e,0,r),this.remainderData=qn(e,r)),t}logOnce(e){this.logEnabled&&(B.log(`[decrypter]: ${e}`),this.logEnabled=!1)}}const Ex={toString:function(n){let e="";const t=n.length;for(let r=0;r<t;r++)e+=`[${n.start(r).toFixed(3)}-${n.end(r).toFixed(3)}]`;return e}},J={STOPPED:"STOPPED",IDLE:"IDLE",KEY_LOADING:"KEY_LOADING",FRAG_LOADING:"FRAG_LOADING",FRAG_LOADING_WAITING_RETRY:"FRAG_LOADING_WAITING_RETRY",WAITING_TRACK:"WAITING_TRACK",PARSING:"PARSING",PARSED:"PARSED",ENDED:"ENDED",ERROR:"ERROR",WAITING_INIT_PTS:"WAITING_INIT_PTS",WAITING_LEVEL:"WAITING_LEVEL"};class bl extends lx{constructor(e,t,r,i,s){super(),this.hls=void 0,this.fragPrevious=null,this.fragCurrent=null,this.fragmentTracker=void 0,this.transmuxer=null,this._state=J.STOPPED,this.playlistType=void 0,this.media=null,this.mediaBuffer=null,this.config=void 0,this.bitrateTest=!1,this.lastCurrentTime=0,this.nextLoadPosition=0,this.startPosition=0,this.startTimeOffset=null,this.loadedmetadata=!1,this.retryDate=0,this.levels=null,this.fragmentLoader=void 0,this.keyLoader=void 0,this.levelLastLoaded=null,this.startFragRequested=!1,this.decrypter=void 0,this.initPTS=[],this.onvseeking=null,this.onvended=null,this.logPrefix="",this.log=void 0,this.warn=void 0,this.playlistType=s,this.logPrefix=i,this.log=B.log.bind(B,`${i}:`),this.warn=B.warn.bind(B,`${i}:`),this.hls=e,this.fragmentLoader=new mx(e.config),this.keyLoader=r,this.fragmentTracker=t,this.config=e.config,this.decrypter=new Al(e.config),e.on(T.MANIFEST_LOADED,this.onManifestLoaded,this)}doTick(){this.onTickEnd()}onTickEnd(){}startLoad(e){}stopLoad(){this.fragmentLoader.abort(),this.keyLoader.abort(this.playlistType);const e=this.fragCurrent;e!=null&&e.loader&&(e.abortRequests(),this.fragmentTracker.removeFragment(e)),this.resetTransmuxer(),this.fragCurrent=null,this.fragPrevious=null,this.clearInterval(),this.clearNextTick(),this.state=J.STOPPED}_streamEnded(e,t){if(t.live||e.nextStart||!e.end||!this.media)return!1;const r=t.partList;if(r!=null&&r.length){const s=r[r.length-1];return Xe.isBuffered(this.media,s.start+s.duration/2)}const i=t.fragments[t.fragments.length-1].type;return this.fragmentTracker.isEndListAppended(i)}getLevelDetails(){if(this.levels&&this.levelLastLoaded!==null){var e;return(e=this.levelLastLoaded)==null?void 0:e.details}}onMediaAttached(e,t){const r=this.media=this.mediaBuffer=t.media;this.onvseeking=this.onMediaSeeking.bind(this),this.onvended=this.onMediaEnded.bind(this),r.addEventListener("seeking",this.onvseeking),r.addEventListener("ended",this.onvended);const i=this.config;this.levels&&i.autoStartLoad&&this.state===J.STOPPED&&this.startLoad(i.startPosition)}onMediaDetaching(){const e=this.media;e!=null&&e.ended&&(this.log("MSE detaching and video ended, reset startPosition"),this.startPosition=this.lastCurrentTime=0),e&&this.onvseeking&&this.onvended&&(e.removeEventListener("seeking",this.onvseeking),e.removeEventListener("ended",this.onvended),this.onvseeking=this.onvended=null),this.keyLoader&&this.keyLoader.detach(),this.media=this.mediaBuffer=null,this.loadedmetadata=!1,this.fragmentTracker.removeAllFragments(),this.stopLoad()}onMediaSeeking(){const{config:e,fragCurrent:t,media:r,mediaBuffer:i,state:s}=this,o=r?r.currentTime:0,a=Xe.bufferInfo(i||r,o,e.maxBufferHole);if(this.log(`media seeking to ${pe(o)?o.toFixed(3):o}, state: ${s}`),this.state===J.ENDED)this.resetLoadingState();else if(t){const l=e.maxFragLookUpTolerance,c=t.start-l,d=t.start+t.duration+l;if(!a.len||d<a.start||c>a.end){const u=o>d;(o<c||u)&&(u&&t.loader&&(this.log("seeking outside of buffer while fragment load in progress, cancel fragment load"),t.abortRequests(),this.resetLoadingState()),this.fragPrevious=null)}}r&&(this.fragmentTracker.removeFragmentsInRange(o,1/0,this.playlistType,!0),this.lastCurrentTime=o),!this.loadedmetadata&&!a.len&&(this.nextLoadPosition=this.startPosition=o),this.tickImmediate()}onMediaEnded(){this.startPosition=this.lastCurrentTime=0}onManifestLoaded(e,t){this.startTimeOffset=t.startTimeOffset,this.initPTS=[]}onHandlerDestroying(){this.hls.off(T.MANIFEST_LOADED,this.onManifestLoaded,this),this.stopLoad(),super.onHandlerDestroying(),this.hls=null}onHandlerDestroyed(){this.state=J.STOPPED,this.fragmentLoader&&this.fragmentLoader.destroy(),this.keyLoader&&this.keyLoader.destroy(),this.decrypter&&this.decrypter.destroy(),this.hls=this.log=this.warn=this.decrypter=this.keyLoader=this.fragmentLoader=this.fragmentTracker=null,super.onHandlerDestroyed()}loadFragment(e,t,r){this._loadFragForPlayback(e,t,r)}_loadFragForPlayback(e,t,r){const i=s=>{if(this.fragContextChanged(e)){this.warn(`Fragment ${e.sn}${s.part?" p: "+s.part.index:""} of level ${e.level} was dropped during download.`),this.fragmentTracker.removeFragment(e);return}e.stats.chunkCount++,this._handleFragmentLoadProgress(s)};this._doFragLoad(e,t,r,i).then(s=>{if(!s)return;const o=this.state;if(this.fragContextChanged(e)){(o===J.FRAG_LOADING||!this.fragCurrent&&o===J.PARSING)&&(this.fragmentTracker.removeFragment(e),this.state=J.IDLE);return}"payload"in s&&(this.log(`Loaded fragment ${e.sn} of level ${e.level}`),this.hls.trigger(T.FRAG_LOADED,s)),this._handleFragmentLoadComplete(s)}).catch(s=>{this.state===J.STOPPED||this.state===J.ERROR||(this.warn(s),this.resetFragmentLoading(e))})}clearTrackerIfNeeded(e){var t;const{fragmentTracker:r}=this;if(r.getState(e)===ht.APPENDING){const s=e.type,o=this.getFwdBufferInfo(this.mediaBuffer,s),a=Math.max(e.duration,o?o.len:this.config.maxBufferLength);this.reduceMaxBufferLength(a)&&r.removeFragment(e)}else((t=this.mediaBuffer)==null?void 0:t.buffered.length)===0?r.removeAllFragments():r.hasParts(e.type)&&(r.detectPartialFragments({frag:e,part:null,stats:e.stats,id:e.type}),r.getState(e)===ht.PARTIAL&&r.removeFragment(e))}checkLiveUpdate(e){if(e.updated&&!e.live){const t=e.fragments[e.fragments.length-1];this.fragmentTracker.detectPartialFragments({frag:t,part:null,stats:t.stats,id:t.type})}e.fragments[0]||(e.deltaUpdateFailed=!0)}flushMainBuffer(e,t,r=null){if(!(e-t))return;const i={startOffset:e,endOffset:t,type:r};this.hls.trigger(T.BUFFER_FLUSHING,i)}_loadInitSegment(e,t){this._doFragLoad(e,t).then(r=>{if(!r||this.fragContextChanged(e)||!this.levels)throw new Error("init load aborted");return r}).then(r=>{const{hls:i}=this,{payload:s}=r,o=e.decryptdata;if(s&&s.byteLength>0&&o!=null&&o.key&&o.iv&&o.method==="AES-128"){const a=self.performance.now();return this.decrypter.decrypt(new Uint8Array(s),o.key.buffer,o.iv.buffer).catch(l=>{throw i.trigger(T.ERROR,{type:Le.MEDIA_ERROR,details:$.FRAG_DECRYPT_ERROR,fatal:!1,error:l,reason:l.message,frag:e}),l}).then(l=>{const c=self.performance.now();return i.trigger(T.FRAG_DECRYPTED,{frag:e,payload:l,stats:{tstart:a,tdecrypt:c}}),r.payload=l,this.completeInitSegmentLoad(r)})}return this.completeInitSegmentLoad(r)}).catch(r=>{this.state===J.STOPPED||this.state===J.ERROR||(this.warn(r),this.resetFragmentLoading(e))})}completeInitSegmentLoad(e){const{levels:t}=this;if(!t)throw new Error("init load aborted, missing levels");const r=e.frag.stats;this.state=J.IDLE,e.frag.data=new Uint8Array(e.payload),r.parsing.start=r.buffering.start=self.performance.now(),r.parsing.end=r.buffering.end=self.performance.now(),this.tick()}fragContextChanged(e){const{fragCurrent:t}=this;return!e||!t||e.sn!==t.sn||e.level!==t.level}fragBufferedComplete(e,t){var r,i,s,o;const a=this.mediaBuffer?this.mediaBuffer:this.media;if(this.log(`Buffered ${e.type} sn: ${e.sn}${t?" part: "+t.index:""} of ${this.playlistType===ke.MAIN?"level":"track"} ${e.level} (frag:[${((r=e.startPTS)!=null?r:NaN).toFixed(3)}-${((i=e.endPTS)!=null?i:NaN).toFixed(3)}] > buffer:${a?Ex.toString(Xe.getBuffered(a)):"(detached)"})`),e.sn!=="initSegment"){var l;if(e.type!==ke.SUBTITLE){const d=e.elementaryStreams;if(!Object.keys(d).some(u=>!!d[u])){this.state=J.IDLE;return}}const c=(l=this.levels)==null?void 0:l[e.level];c!=null&&c.fragmentError&&(this.log(`Resetting level fragment error count of ${c.fragmentError} on frag buffered`),c.fragmentError=0)}this.state=J.IDLE,a&&(!this.loadedmetadata&&e.type==ke.MAIN&&a.buffered.length&&((s=this.fragCurrent)==null?void 0:s.sn)===((o=this.fragPrevious)==null?void 0:o.sn)&&(this.loadedmetadata=!0,this.seekToStartPos()),this.tick())}seekToStartPos(){}_handleFragmentLoadComplete(e){const{transmuxer:t}=this;if(!t)return;const{frag:r,part:i,partsLoaded:s}=e,o=!s||s.length===0||s.some(l=>!l),a=new yl(r.level,r.sn,r.stats.chunkCount+1,0,i?i.index:-1,!o);t.flush(a)}_handleFragmentLoadProgress(e){}_doFragLoad(e,t,r=null,i){var s;const o=t==null?void 0:t.details;if(!this.levels||!o)throw new Error(`frag load aborted, missing level${o?"":" detail"}s`);let a=null;if(e.encrypted&&!((s=e.decryptdata)!=null&&s.key)?(this.log(`Loading key for ${e.sn} of [${o.startSN}-${o.endSN}], ${this.logPrefix==="[stream-controller]"?"level":"track"} ${e.level}`),this.state=J.KEY_LOADING,this.fragCurrent=e,a=this.keyLoader.load(e).then(d=>{if(!this.fragContextChanged(d.frag))return this.hls.trigger(T.KEY_LOADED,d),this.state===J.KEY_LOADING&&(this.state=J.IDLE),d}),this.hls.trigger(T.KEY_LOADING,{frag:e}),this.fragCurrent===null&&(a=Promise.reject(new Error("frag load aborted, context changed in KEY_LOADING")))):!e.encrypted&&o.encryptedFragments.length&&this.keyLoader.loadClear(e,o.encryptedFragments),r=Math.max(e.start,r||0),this.config.lowLatencyMode&&e.sn!=="initSegment"){const d=o.partList;if(d&&i){r>e.end&&o.fragmentHint&&(e=o.fragmentHint);const u=this.getNextPart(d,e,r);if(u>-1){const h=d[u];this.log(`Loading part sn: ${e.sn} p: ${h.index} cc: ${e.cc} of playlist [${o.startSN}-${o.endSN}] parts [0-${u}-${d.length-1}] ${this.logPrefix==="[stream-controller]"?"level":"track"}: ${e.level}, target: ${parseFloat(r.toFixed(3))}`),this.nextLoadPosition=h.start+h.duration,this.state=J.FRAG_LOADING;let g;return a?g=a.then(y=>!y||this.fragContextChanged(y.frag)?null:this.doFragPartsLoad(e,h,t,i)).catch(y=>this.handleFragLoadError(y)):g=this.doFragPartsLoad(e,h,t,i).catch(y=>this.handleFragLoadError(y)),this.hls.trigger(T.FRAG_LOADING,{frag:e,part:h,targetBufferTime:r}),this.fragCurrent===null?Promise.reject(new Error("frag load aborted, context changed in FRAG_LOADING parts")):g}else if(!e.url||this.loadedEndOfParts(d,r))return Promise.resolve(null)}}this.log(`Loading fragment ${e.sn} cc: ${e.cc} ${o?"of ["+o.startSN+"-"+o.endSN+"] ":""}${this.logPrefix==="[stream-controller]"?"level":"track"}: ${e.level}, target: ${parseFloat(r.toFixed(3))}`),pe(e.sn)&&!this.bitrateTest&&(this.nextLoadPosition=e.start+e.duration),this.state=J.FRAG_LOADING;const l=this.config.progressive;let c;return l&&a?c=a.then(d=>!d||this.fragContextChanged(d==null?void 0:d.frag)?null:this.fragmentLoader.load(e,i)).catch(d=>this.handleFragLoadError(d)):c=Promise.all([this.fragmentLoader.load(e,l?i:void 0),a]).then(([d])=>(!l&&d&&i&&i(d),d)).catch(d=>this.handleFragLoadError(d)),this.hls.trigger(T.FRAG_LOADING,{frag:e,targetBufferTime:r}),this.fragCurrent===null?Promise.reject(new Error("frag load aborted, context changed in FRAG_LOADING")):c}doFragPartsLoad(e,t,r,i){return new Promise((s,o)=>{var a;const l=[],c=(a=r.details)==null?void 0:a.partList,d=u=>{this.fragmentLoader.loadPart(e,u,i).then(h=>{l[u.index]=h;const g=h.part;this.hls.trigger(T.FRAG_LOADED,h);const y=Hd(r,e.sn,u.index+1)||kf(c,e.sn,u.index+1);if(y)d(y);else return s({frag:e,part:g,partsLoaded:l})}).catch(o)};d(t)})}handleFragLoadError(e){if("data"in e){const t=e.data;e.data&&t.details===$.INTERNAL_ABORTED?this.handleFragLoadAborted(t.frag,t.part):this.hls.trigger(T.ERROR,t)}else this.hls.trigger(T.ERROR,{type:Le.OTHER_ERROR,details:$.INTERNAL_EXCEPTION,err:e,error:e,fatal:!0});return null}_handleTransmuxerFlush(e){const t=this.getCurrentContext(e);if(!t||this.state!==J.PARSING){!this.fragCurrent&&this.state!==J.STOPPED&&this.state!==J.ERROR&&(this.state=J.IDLE);return}const{frag:r,part:i,level:s}=t,o=self.performance.now();r.stats.parsing.end=o,i&&(i.stats.parsing.end=o),this.updateLevelTiming(r,i,s,e.partial)}getCurrentContext(e){const{levels:t,fragCurrent:r}=this,{level:i,sn:s,part:o}=e;if(!(t!=null&&t[i]))return this.warn(`Levels object was unset while buffering fragment ${s} of level ${i}. The current chunk will not be buffered.`),null;const a=t[i],l=o>-1?Hd(a,s,o):null,c=l?l.fragment:jE(a,s,r);return c?(r&&r!==c&&(c.stats=r.stats),{frag:c,part:l,level:a}):null}bufferFragmentData(e,t,r,i,s){var o;if(!e||this.state!==J.PARSING)return;const{data1:a,data2:l}=e;let c=a;if(a&&l&&(c=Bt(a,l)),!((o=c)!=null&&o.length))return;const d={type:e.type,frag:t,part:r,chunkMeta:i,parent:t.type,data:c};if(this.hls.trigger(T.BUFFER_APPENDING,d),e.dropped&&e.independent&&!r){if(s)return;this.flushBufferGap(t)}}flushBufferGap(e){const t=this.media;if(!t)return;if(!Xe.isBuffered(t,t.currentTime)){this.flushMainBuffer(0,e.start);return}const r=t.currentTime,i=Xe.bufferInfo(t,r,0),s=e.duration,o=Math.min(this.config.maxFragLookUpTolerance*2,s*.25),a=Math.max(Math.min(e.start-o,i.end-o),r+o);e.start-a>o&&this.flushMainBuffer(a,e.start)}getFwdBufferInfo(e,t){const r=this.getLoadPosition();return pe(r)?this.getFwdBufferInfoAtPos(e,r,t):null}getFwdBufferInfoAtPos(e,t,r){const{config:{maxBufferHole:i}}=this,s=Xe.bufferInfo(e,t,i);if(s.len===0&&s.nextStart!==void 0){const o=this.fragmentTracker.getBufferedFrag(t,r);if(o&&s.nextStart<o.end)return Xe.bufferInfo(e,t,Math.max(s.nextStart,i))}return s}getMaxBufferLength(e){const{config:t}=this;let r;return e?r=Math.max(8*t.maxBufferSize/e,t.maxBufferLength):r=t.maxBufferLength,Math.min(r,t.maxMaxBufferLength)}reduceMaxBufferLength(e){const t=this.config,r=e||t.maxBufferLength;return t.maxMaxBufferLength>=r?(t.maxMaxBufferLength/=2,this.warn(`Reduce max buffer length to ${t.maxMaxBufferLength}s`),!0):!1}getAppendedFrag(e,t=ke.MAIN){const r=this.fragmentTracker.getAppendedFrag(e,ke.MAIN);return r&&"fragment"in r?r.fragment:r}getNextFragment(e,t){const r=t.fragments,i=r.length;if(!i)return null;const{config:s}=this,o=r[0].start;let a;if(t.live){const l=s.initialLiveManifestSize;if(i<l)return this.warn(`Not enough fragments to start playback (have: ${i}, need: ${l})`),null;(!t.PTSKnown&&!this.startFragRequested&&this.startPosition===-1||e<o)&&(a=this.getInitialLiveFragment(t,r),this.startPosition=this.nextLoadPosition=a?this.hls.liveSyncPosition||a.start:e)}else e<=o&&(a=r[0]);if(!a){const l=s.lowLatencyMode?t.partEnd:t.fragmentEnd;a=this.getFragmentAtPosition(e,l,t)}return this.mapToInitFragWhenRequired(a)}isLoopLoading(e,t){const r=this.fragmentTracker.getState(e);return(r===ht.OK||r===ht.PARTIAL&&!!e.gap)&&this.nextLoadPosition>t}getNextFragmentLoopLoading(e,t,r,i,s){const o=e.gap,a=this.getNextFragment(this.nextLoadPosition,t);if(a===null)return a;if(e=a,o&&e&&!e.gap&&r.nextStart){const l=this.getFwdBufferInfoAtPos(this.mediaBuffer?this.mediaBuffer:this.media,r.nextStart,i);if(l!==null&&r.len+l.len>=s)return this.log(`buffer full after gaps in "${i}" playlist starting at sn: ${e.sn}`),null}return e}mapToInitFragWhenRequired(e){return e!=null&&e.initSegment&&!(e!=null&&e.initSegment.data)&&!this.bitrateTest?e.initSegment:e}getNextPart(e,t,r){let i=-1,s=!1,o=!0;for(let a=0,l=e.length;a<l;a++){const c=e[a];if(o=o&&!c.independent,i>-1&&r<c.start)break;const d=c.loaded;d?i=-1:(s||c.independent||o)&&c.fragment===t&&(i=a),s=d}return i}loadedEndOfParts(e,t){const r=e[e.length-1];return r&&t>r.start&&r.loaded}getInitialLiveFragment(e,t){const r=this.fragPrevious;let i=null;if(r){if(e.hasProgramDateTime&&(this.log(`Live playlist, switching playlist, load frag with same PDT: ${r.programDateTime}`),i=zE(t,r.endProgramDateTime,this.config.maxFragLookUpTolerance)),!i){const s=r.sn+1;if(s>=e.startSN&&s<=e.endSN){const o=t[s-e.startSN];r.cc===o.cc&&(i=o,this.log(`Live playlist, switching playlist, load frag with next SN: ${i.sn}`))}i||(i=WE(t,r.cc),i&&this.log(`Live playlist, switching playlist, load frag with same CC: ${i.sn}`))}}else{const s=this.hls.liveSyncPosition;s!==null&&(i=this.getFragmentAtPosition(s,this.bitrateTest?e.fragmentEnd:e.edge,e))}return i}getFragmentAtPosition(e,t,r){const{config:i}=this;let{fragPrevious:s}=this,{fragments:o,endSN:a}=r;const{fragmentHint:l}=r,c=i.maxFragLookUpTolerance,d=r.partList,u=!!(i.lowLatencyMode&&d!=null&&d.length&&l);u&&l&&!this.bitrateTest&&(o=o.concat(l),a=l.sn);let h;if(e<t){const g=e>t-c?0:c;h=Ds(s,o,e,g)}else h=o[o.length-1];if(h){const g=h.sn-r.startSN,y=this.fragmentTracker.getState(h);if((y===ht.OK||y===ht.PARTIAL&&h.gap)&&(s=h),s&&h.sn===s.sn&&(!u||d[0].fragment.sn>h.sn)&&s&&h.level===s.level){const E=o[g+1];h.sn<a&&this.fragmentTracker.getState(E)!==ht.OK?h=E:h=null}}return h}synchronizeToLiveEdge(e){const{config:t,media:r}=this;if(!r)return;const i=this.hls.liveSyncPosition,s=r.currentTime,o=e.fragments[0].start,a=e.edge,l=s>=o-t.maxFragLookUpTolerance&&s<=a;if(i!==null&&r.duration>i&&(s<i||!l)){const c=t.liveMaxLatencyDuration!==void 0?t.liveMaxLatencyDuration:t.liveMaxLatencyDurationCount*e.targetduration;(!l&&r.readyState<4||s<a-c)&&(this.loadedmetadata||(this.nextLoadPosition=i),r.readyState&&(this.warn(`Playback: ${s.toFixed(3)} is located too far from the end of live sliding playlist: ${a}, reset currentTime to : ${i.toFixed(3)}`),r.currentTime=i))}}alignPlaylists(e,t,r){const i=e.fragments.length;if(!i)return this.warn("No fragments in live playlist"),0;const s=e.fragments[0].start,o=!t,a=e.alignedSliding&&pe(s);if(o||!a&&!s){const{fragPrevious:l}=this;fx(l,r,e);const c=e.fragments[0].start;return this.log(`Live playlist sliding: ${c.toFixed(2)} start-sn: ${t?t.startSN:"na"}->${e.startSN} prev-sn: ${l?l.sn:"na"} fragments: ${i}`),c}return s}waitForCdnTuneIn(e){return e.live&&e.canBlockReload&&e.partTarget&&e.tuneInGoal>Math.max(e.partHoldBack,e.partTarget*3)}setStartPosition(e,t){let r=this.startPosition;if(r<t&&(r=-1),r===-1||this.lastCurrentTime===-1){const i=this.startTimeOffset!==null,s=i?this.startTimeOffset:e.startTimeOffset;s!==null&&pe(s)?(r=t+s,s<0&&(r+=e.totalduration),r=Math.min(Math.max(t,r),t+e.totalduration),this.log(`Start time offset ${s} found in ${i?"multivariant":"media"} playlist, adjust startPosition to ${r}`),this.startPosition=r):e.live?r=this.hls.liveSyncPosition||t:this.startPosition=r=0,this.lastCurrentTime=r}this.nextLoadPosition=r}getLoadPosition(){const{media:e}=this;let t=0;return this.loadedmetadata&&e?t=e.currentTime:this.nextLoadPosition&&(t=this.nextLoadPosition),t}handleFragLoadAborted(e,t){this.transmuxer&&e.sn!=="initSegment"&&e.stats.aborted&&(this.warn(`Fragment ${e.sn}${t?" part "+t.index:""} of level ${e.level} was aborted`),this.resetFragmentLoading(e))}resetFragmentLoading(e){(!this.fragCurrent||!this.fragContextChanged(e)&&this.state!==J.FRAG_LOADING_WAITING_RETRY)&&(this.state=J.IDLE)}onFragmentOrKeyLoadError(e,t){if(t.chunkMeta&&!t.frag){const d=this.getCurrentContext(t.chunkMeta);d&&(t.frag=d.frag)}const r=t.frag;if(!r||r.type!==e||!this.levels)return;if(this.fragContextChanged(r)){var i;this.warn(`Frag load error must match current frag to retry ${r.url} > ${(i=this.fragCurrent)==null?void 0:i.url}`);return}const s=t.details===$.FRAG_GAP;s&&this.fragmentTracker.fragBuffered(r,!0);const o=t.errorAction,{action:a,retryCount:l=0,retryConfig:c}=o||{};if(o&&a===mt.RetryRequest&&c){this.resetStartWhenNotLoaded(this.levelLastLoaded);const d=ml(c,l);this.warn(`Fragment ${r.sn} of ${e} ${r.level} errored with ${t.details}, retrying loading ${l+1}/${c.maxNumRetry} in ${d}ms`),o.resolved=!0,this.retryDate=self.performance.now()+d,this.state=J.FRAG_LOADING_WAITING_RETRY}else if(c&&o)if(this.resetFragmentErrors(e),l<c.maxNumRetry)!s&&a!==mt.RemoveAlternatePermanently&&(o.resolved=!0);else{B.warn(`${t.details} reached or exceeded max retry (${l})`);return}else(o==null?void 0:o.action)===mt.SendAlternateToPenaltyBox?this.state=J.WAITING_LEVEL:this.state=J.ERROR;this.tickImmediate()}reduceLengthAndFlushBuffer(e){if(this.state===J.PARSING||this.state===J.PARSED){const t=e.parent,r=this.getFwdBufferInfo(this.mediaBuffer,t),i=r&&r.len>.5;i&&this.reduceMaxBufferLength(r.len);const s=!i;return s&&this.warn(`Buffer full error while media.currentTime is not buffered, flush ${t} buffer`),e.frag&&(this.fragmentTracker.removeFragment(e.frag),this.nextLoadPosition=e.frag.start),this.resetLoadingState(),s}return!1}resetFragmentErrors(e){e===ke.AUDIO&&(this.fragCurrent=null),this.loadedmetadata||(this.startFragRequested=!1),this.state!==J.STOPPED&&(this.state=J.IDLE)}afterBufferFlushed(e,t,r){if(!e)return;const i=Xe.getBuffered(e);this.fragmentTracker.detectEvictedFragments(t,i,r),this.state===J.ENDED&&this.resetLoadingState()}resetLoadingState(){this.log("Reset loading state"),this.fragCurrent=null,this.fragPrevious=null,this.state=J.IDLE}resetStartWhenNotLoaded(e){if(!this.loadedmetadata){this.startFragRequested=!1;const t=e?e.details:null;t!=null&&t.live?(this.startPosition=-1,this.setStartPosition(t,0),this.resetLoadingState()):this.nextLoadPosition=this.startPosition}}resetWhenMissingContext(e){this.warn(`The loading context changed while buffering fragment ${e.sn} of level ${e.level}. This chunk will not be buffered.`),this.removeUnbufferedFrags(),this.resetStartWhenNotLoaded(this.levelLastLoaded),this.resetLoadingState()}removeUnbufferedFrags(e=0){this.fragmentTracker.removeFragmentsInRange(e,1/0,this.playlistType,!1,!0)}updateLevelTiming(e,t,r,i){var s;const o=r.details;if(!o){this.warn("level.details undefined");return}if(!Object.keys(e.elementaryStreams).reduce((l,c)=>{const d=e.elementaryStreams[c];if(d){const u=d.endPTS-d.startPTS;if(u<=0)return this.warn(`Could not parse fragment ${e.sn} ${c} duration reliably (${u})`),l||!1;const h=i?0:Cf(o,e,d.startPTS,d.endPTS,d.startDTS,d.endDTS);return this.hls.trigger(T.LEVEL_PTS_UPDATED,{details:o,level:r,drift:h,type:c,frag:e,start:d.startPTS,end:d.endPTS}),!0}return l},!1)&&((s=this.transmuxer)==null?void 0:s.error)===null){const l=new Error(`Found no media in fragment ${e.sn} of level ${e.level} resetting transmuxer to fallback to playlist timing`);if(r.fragmentError===0&&(r.fragmentError++,e.gap=!0,this.fragmentTracker.removeFragment(e),this.fragmentTracker.fragBuffered(e,!0)),this.warn(l.message),this.hls.trigger(T.ERROR,{type:Le.MEDIA_ERROR,details:$.FRAG_PARSING_ERROR,fatal:!1,error:l,frag:e,reason:`Found no media in msn ${e.sn} of level "${r.url}"`}),!this.hls)return;this.resetTransmuxer()}this.state=J.PARSED,this.hls.trigger(T.FRAG_PARSED,{frag:e,part:t})}resetTransmuxer(){this.transmuxer&&(this.transmuxer.destroy(),this.transmuxer=null)}recoverWorkerError(e){e.event==="demuxerWorker"&&(this.fragmentTracker.removeAllFragments(),this.resetTransmuxer(),this.resetStartWhenNotLoaded(this.levelLastLoaded),this.resetLoadingState())}set state(e){const t=this._state;t!==e&&(this._state=e,this.log(`${t}->${e}`))}get state(){return this._state}}class Df{constructor(){this.chunks=[],this.dataLength=0}push(e){this.chunks.push(e),this.dataLength+=e.length}flush(){const{chunks:e,dataLength:t}=this;let r;if(e.length)e.length===1?r=e[0]:r=xx(e,t);else return new Uint8Array(0);return this.reset(),r}reset(){this.chunks.length=0,this.dataLength=0}}function xx(n,e){const t=new Uint8Array(e);let r=0;for(let i=0;i<n.length;i++){const s=n[i];t.set(s,r),r+=s.length}return t}function Sx(){return typeof __HLS_WORKER_BUNDLE__=="function"}function Tx(){const n=new self.Blob([`var exports={};var module={exports:exports};function define(f){f()};define.amd=true;(${__HLS_WORKER_BUNDLE__.toString()})(true);`],{type:"text/javascript"}),e=self.URL.createObjectURL(n);return{worker:new self.Worker(e),objectURL:e}}function Cx(n){const e=new self.URL(n,self.location.href).href;return{worker:new self.Worker(e),scriptURL:e}}function Qt(n="",e=9e4){return{type:n,id:-1,pid:-1,inputTimeScale:e,sequenceNumber:-1,samples:[],dropped:0}}class vl{constructor(){this._audioTrack=void 0,this._id3Track=void 0,this.frameIndex=0,this.cachedData=null,this.basePTS=null,this.initPTS=null,this.lastPTS=null}resetInitSegment(e,t,r,i){this._id3Track={type:"id3",id:3,pid:-1,inputTimeScale:9e4,sequenceNumber:0,samples:[],dropped:0}}resetTimeStamp(e){this.initPTS=e,this.resetContiguity()}resetContiguity(){this.basePTS=null,this.lastPTS=null,this.frameIndex=0}canParse(e,t){return!1}appendFrame(e,t,r){}demux(e,t){this.cachedData&&(e=Bt(this.cachedData,e),this.cachedData=null);let r=Ci(e,0),i=r?r.length:0,s;const o=this._audioTrack,a=this._id3Track,l=r?pl(r):void 0,c=e.length;for((this.basePTS===null||this.frameIndex===0&&pe(l))&&(this.basePTS=wx(l,t,this.initPTS),this.lastPTS=this.basePTS),this.lastPTS===null&&(this.lastPTS=this.basePTS),r&&r.length>0&&a.samples.push({pts:this.lastPTS,dts:this.lastPTS,data:r,type:Nt.audioId3,duration:Number.POSITIVE_INFINITY});i<c;){if(this.canParse(e,i)){const d=this.appendFrame(o,e,i);d?(this.frameIndex++,this.lastPTS=d.sample.pts,i+=d.length,s=i):i=c}else Yv(e,i)?(r=Ci(e,i),a.samples.push({pts:this.lastPTS,dts:this.lastPTS,data:r,type:Nt.audioId3,duration:Number.POSITIVE_INFINITY}),i+=r.length,s=i):i++;if(i===c&&s!==c){const d=qn(e,s);this.cachedData?this.cachedData=Bt(this.cachedData,d):this.cachedData=d}}return{audioTrack:o,videoTrack:Qt(),id3Track:a,textTrack:Qt()}}demuxSampleAes(e,t,r){return Promise.reject(new Error(`[${this}] This demuxer does not support Sample-AES decryption`))}flush(e){const t=this.cachedData;return t&&(this.cachedData=null,this.demux(t,0)),{audioTrack:this._audioTrack,videoTrack:Qt(),id3Track:this._id3Track,textTrack:Qt()}}destroy(){}}const wx=(n,e,t)=>{if(pe(n))return n*90;const r=t?t.baseTime*9e4/t.timescale:0;return e*9e4+r};function kx(n,e,t,r){let i,s,o,a;const l=navigator.userAgent.toLowerCase(),c=r,d=[96e3,88200,64e3,48e3,44100,32e3,24e3,22050,16e3,12e3,11025,8e3,7350];i=((e[t+2]&192)>>>6)+1;const u=(e[t+2]&60)>>>2;if(u>d.length-1){const h=new Error(`invalid ADTS sampling index:${u}`);n.emit(T.ERROR,T.ERROR,{type:Le.MEDIA_ERROR,details:$.FRAG_PARSING_ERROR,fatal:!0,error:h,reason:h.message});return}return o=(e[t+2]&1)<<2,o|=(e[t+3]&192)>>>6,B.log(`manifest codec:${r}, ADTS type:${i}, samplingIndex:${u}`),/firefox/i.test(l)?u>=6?(i=5,a=new Array(4),s=u-3):(i=2,a=new Array(2),s=u):l.indexOf("android")!==-1?(i=2,a=new Array(2),s=u):(i=5,a=new Array(4),r&&(r.indexOf("mp4a.40.29")!==-1||r.indexOf("mp4a.40.5")!==-1)||!r&&u>=6?s=u-3:((r&&r.indexOf("mp4a.40.2")!==-1&&(u>=6&&o===1||/vivaldi/i.test(l))||!r&&o===1)&&(i=2,a=new Array(2)),s=u)),a[0]=i<<3,a[0]|=(u&14)>>1,a[1]|=(u&1)<<7,a[1]|=o<<3,i===5&&(a[1]|=(s&14)>>1,a[2]=(s&1)<<7,a[2]|=8,a[3]=0),{config:a,samplerate:d[u],channelCount:o,codec:"mp4a.40."+i,manifestCodec:c}}function Pf(n,e){return n[e]===255&&(n[e+1]&246)===240}function Bf(n,e){return n[e+1]&1?7:9}function El(n,e){return(n[e+3]&3)<<11|n[e+4]<<3|(n[e+5]&224)>>>5}function Lx(n,e){return e+5<n.length}function Bs(n,e){return e+1<n.length&&Pf(n,e)}function Rx(n,e){return Lx(n,e)&&Pf(n,e)&&El(n,e)<=n.length-e}function Ix(n,e){if(Bs(n,e)){const t=Bf(n,e);if(e+t>=n.length)return!1;const r=El(n,e);if(r<=t)return!1;const i=e+r;return i===n.length||Bs(n,i)}return!1}function Of(n,e,t,r,i){if(!n.samplerate){const s=kx(e,t,r,i);if(!s)return;n.config=s.config,n.samplerate=s.samplerate,n.channelCount=s.channelCount,n.codec=s.codec,n.manifestCodec=s.manifestCodec,B.log(`parsed codec:${n.codec}, rate:${s.samplerate}, channels:${s.channelCount}`)}}function Ff(n){return 1024*9e4/n}function _x(n,e){const t=Bf(n,e);if(e+t<=n.length){const r=El(n,e)-t;if(r>0)return{headerLength:t,frameLength:r}}}function Mf(n,e,t,r,i){const s=Ff(n.samplerate),o=r+i*s,a=_x(e,t);let l;if(a){const{frameLength:u,headerLength:h}=a,g=h+u,y=Math.max(0,t+g-e.length);y?(l=new Uint8Array(g-h),l.set(e.subarray(t+h,e.length),0)):l=e.subarray(t+h,t+g);const b={unit:l,pts:o};return y||n.samples.push(b),{sample:b,length:g,missing:y}}const c=e.length-t;return l=new Uint8Array(c),l.set(e.subarray(t,e.length),0),{sample:{unit:l,pts:o},length:c,missing:-1}}let Xi=null;const Dx=[32,64,96,128,160,192,224,256,288,320,352,384,416,448,32,48,56,64,80,96,112,128,160,192,224,256,320,384,32,40,48,56,64,80,96,112,128,160,192,224,256,320,32,48,56,64,80,96,112,128,144,160,176,192,224,256,8,16,24,32,40,48,56,64,80,96,112,128,144,160],Px=[44100,48e3,32e3,22050,24e3,16e3,11025,12e3,8e3],Bx=[[0,72,144,12],[0,0,0,0],[0,72,144,12],[0,144,144,12]],Ox=[0,1,1,4];function Nf(n,e,t,r,i){if(t+24>e.length)return;const s=Uf(e,t);if(s&&t+s.frameLength<=e.length){const o=s.samplesPerFrame*9e4/s.sampleRate,a=r+i*o,l={unit:e.subarray(t,t+s.frameLength),pts:a,dts:a};return n.config=[],n.channelCount=s.channelCount,n.samplerate=s.sampleRate,n.samples.push(l),{sample:l,length:s.frameLength,missing:0}}}function Uf(n,e){const t=n[e+1]>>3&3,r=n[e+1]>>1&3,i=n[e+2]>>4&15,s=n[e+2]>>2&3;if(t!==1&&i!==0&&i!==15&&s!==3){const o=n[e+2]>>1&1,a=n[e+3]>>6,l=t===3?3-r:r===3?3:4,c=Dx[l*14+i-1]*1e3,u=Px[(t===3?0:t===2?1:2)*3+s],h=a===3?1:2,g=Bx[t][r],y=Ox[r],b=g*8*y,E=Math.floor(g*c/u+o)*y;if(Xi===null){const R=(navigator.userAgent||"").match(/Chrome\/(\d+)/i);Xi=R?parseInt(R[1]):0}return!!Xi&&Xi<=87&&r===2&&c>=224e3&&a===0&&(n[e+3]=n[e+3]|128),{sampleRate:u,channelCount:h,frameLength:E,samplesPerFrame:b}}}function xl(n,e){return n[e]===255&&(n[e+1]&224)===224&&(n[e+1]&6)!==0}function $f(n,e){return e+1<n.length&&xl(n,e)}function Fx(n,e){return xl(n,e)&&4<=n.length-e}function Hf(n,e){if(e+1<n.length&&xl(n,e)){const r=Uf(n,e);let i=4;r!=null&&r.frameLength&&(i=r.frameLength);const s=e+i;return s===n.length||$f(n,s)}return!1}class Mx extends vl{constructor(e,t){super(),this.observer=void 0,this.config=void 0,this.observer=e,this.config=t}resetInitSegment(e,t,r,i){super.resetInitSegment(e,t,r,i),this._audioTrack={container:"audio/adts",type:"audio",id:2,pid:-1,sequenceNumber:0,segmentCodec:"aac",samples:[],manifestCodec:t,duration:i,inputTimeScale:9e4,dropped:0}}static probe(e){if(!e)return!1;const t=Ci(e,0);let r=(t==null?void 0:t.length)||0;if(Hf(e,r))return!1;for(let i=e.length;r<i;r++)if(Ix(e,r))return B.log("ADTS sync word found !"),!0;return!1}canParse(e,t){return Rx(e,t)}appendFrame(e,t,r){Of(e,this.observer,t,r,e.manifestCodec);const i=Mf(e,t,r,this.basePTS,this.frameIndex);if(i&&i.missing===0)return i}}const Nx=/\/emsg[-/]ID3/i;class Ux{constructor(e,t){this.remainderData=null,this.timeOffset=0,this.config=void 0,this.videoTrack=void 0,this.audioTrack=void 0,this.id3Track=void 0,this.txtTrack=void 0,this.config=t}resetTimeStamp(){}resetInitSegment(e,t,r,i){const s=this.videoTrack=Qt("video",1),o=this.audioTrack=Qt("audio",1),a=this.txtTrack=Qt("text",1);if(this.id3Track=Qt("id3",1),this.timeOffset=0,!(e!=null&&e.byteLength))return;const l=yf(e);if(l.video){const{id:c,timescale:d,codec:u}=l.video;s.id=c,s.timescale=a.timescale=d,s.codec=u}if(l.audio){const{id:c,timescale:d,codec:u}=l.audio;o.id=c,o.timescale=d,o.codec=u}a.id=pf.text,s.sampleDuration=0,s.duration=o.duration=i}resetContiguity(){this.remainderData=null}static probe(e){return iE(e)}demux(e,t){this.timeOffset=t;let r=e;const i=this.videoTrack,s=this.txtTrack;if(this.config.progressive){this.remainderData&&(r=Bt(this.remainderData,e));const a=hE(r);this.remainderData=a.remainder,i.samples=a.valid||new Uint8Array}else i.samples=r;const o=this.extractID3Track(i,t);return s.samples=Sd(t,i),{videoTrack:i,audioTrack:this.audioTrack,id3Track:o,textTrack:this.txtTrack}}flush(){const e=this.timeOffset,t=this.videoTrack,r=this.txtTrack;t.samples=this.remainderData||new Uint8Array,this.remainderData=null;const i=this.extractID3Track(t,this.timeOffset);return r.samples=Sd(e,t),{videoTrack:t,audioTrack:Qt(),id3Track:i,textTrack:Qt()}}extractID3Track(e,t){const r=this.id3Track;if(e.samples.length){const i=Be(e.samples,["emsg"]);i&&i.forEach(s=>{const o=mE(s);if(Nx.test(o.schemeIdUri)){const a=pe(o.presentationTime)?o.presentationTime/o.timeScale:t+o.presentationTimeDelta/o.timeScale;let l=o.eventDuration===4294967295?Number.POSITIVE_INFINITY:o.eventDuration/o.timeScale;l<=.001&&(l=Number.POSITIVE_INFINITY);const c=o.payload;r.samples.push({data:c,len:c.byteLength,dts:a,pts:a,type:Nt.emsg,duration:l})}})}return r}demuxSampleAes(e,t,r){return Promise.reject(new Error("The MP4 demuxer does not support SAMPLE-AES decryption"))}destroy(){}}const Gf=(n,e)=>{let t=0,r=5;e+=r;const i=new Uint32Array(1),s=new Uint32Array(1),o=new Uint8Array(1);for(;r>0;){o[0]=n[e];const a=Math.min(r,8),l=8-a;s[0]=4278190080>>>24+l<<l,i[0]=(o[0]&s[0])>>l,t=t?t<<a|i[0]:i[0],e+=1,r-=a}return t};class $x extends vl{constructor(e){super(),this.observer=void 0,this.observer=e}resetInitSegment(e,t,r,i){super.resetInitSegment(e,t,r,i),this._audioTrack={container:"audio/ac-3",type:"audio",id:2,pid:-1,sequenceNumber:0,segmentCodec:"ac3",samples:[],manifestCodec:t,duration:i,inputTimeScale:9e4,dropped:0}}canParse(e,t){return t+64<e.length}appendFrame(e,t,r){const i=Kf(e,t,r,this.basePTS,this.frameIndex);if(i!==-1)return{sample:e.samples[e.samples.length-1],length:i,missing:0}}static probe(e){if(!e)return!1;const t=Ci(e,0);if(!t)return!1;const r=t.length;return e[r]===11&&e[r+1]===119&&pl(t)!==void 0&&Gf(e,r)<16}}function Kf(n,e,t,r,i){if(t+8>e.length||e[t]!==11||e[t+1]!==119)return-1;const s=e[t+4]>>6;if(s>=3)return-1;const a=[48e3,44100,32e3][s],l=e[t+4]&63,d=[64,69,96,64,70,96,80,87,120,80,88,120,96,104,144,96,105,144,112,121,168,112,122,168,128,139,192,128,140,192,160,174,240,160,175,240,192,208,288,192,209,288,224,243,336,224,244,336,256,278,384,256,279,384,320,348,480,320,349,480,384,417,576,384,418,576,448,487,672,448,488,672,512,557,768,512,558,768,640,696,960,640,697,960,768,835,1152,768,836,1152,896,975,1344,896,976,1344,1024,1114,1536,1024,1115,1536,1152,1253,1728,1152,1254,1728,1280,1393,1920,1280,1394,1920][l*3+s]*2;if(t+d>e.length)return-1;const u=e[t+6]>>5;let h=0;u===2?h+=2:(u&1&&u!==1&&(h+=2),u&4&&(h+=2));const g=(e[t+6]<<8|e[t+7])>>12-h&1,b=[2,1,2,3,3,4,4,5][u]+g,E=e[t+5]>>3,C=e[t+5]&7,w=new Uint8Array([s<<6|E<<1|C>>2,(C&3)<<6|u<<3|g<<2|l>>4,l<<4&224]),R=1536/a*9e4,_=r+i*R,P=e.subarray(t,t+d);return n.config=w,n.channelCount=b,n.samplerate=a,n.samples.push({unit:P,pts:_}),d}class Hx{constructor(){this.VideoSample=null}createVideoSample(e,t,r,i){return{key:e,frame:!1,pts:t,dts:r,units:[],debug:i,length:0}}getLastNalUnit(e){var t;let r=this.VideoSample,i;if((!r||r.units.length===0)&&(r=e[e.length-1]),(t=r)!=null&&t.units){const s=r.units;i=s[s.length-1]}return i}pushAccessUnit(e,t){if(e.units.length&&e.frame){if(e.pts===void 0){const r=t.samples,i=r.length;if(i){const s=r[i-1];e.pts=s.pts,e.dts=s.dts}else{t.dropped++;return}}t.samples.push(e)}e.debug.length&&B.log(e.pts+"/"+e.dts+":"+e.debug)}}class Qd{constructor(e){this.data=void 0,this.bytesAvailable=void 0,this.word=void 0,this.bitsAvailable=void 0,this.data=e,this.bytesAvailable=e.byteLength,this.word=0,this.bitsAvailable=0}loadWord(){const e=this.data,t=this.bytesAvailable,r=e.byteLength-t,i=new Uint8Array(4),s=Math.min(4,t);if(s===0)throw new Error("no bytes available");i.set(e.subarray(r,r+s)),this.word=new DataView(i.buffer).getUint32(0),this.bitsAvailable=s*8,this.bytesAvailable-=s}skipBits(e){let t;e=Math.min(e,this.bytesAvailable*8+this.bitsAvailable),this.bitsAvailable>e?(this.word<<=e,this.bitsAvailable-=e):(e-=this.bitsAvailable,t=e>>3,e-=t<<3,this.bytesAvailable-=t,this.loadWord(),this.word<<=e,this.bitsAvailable-=e)}readBits(e){let t=Math.min(this.bitsAvailable,e);const r=this.word>>>32-t;if(e>32&&B.error("Cannot read more than 32 bits at a time"),this.bitsAvailable-=t,this.bitsAvailable>0)this.word<<=t;else if(this.bytesAvailable>0)this.loadWord();else throw new Error("no bits available");return t=e-t,t>0&&this.bitsAvailable?r<<t|this.readBits(t):r}skipLZ(){let e;for(e=0;e<this.bitsAvailable;++e)if(this.word&2147483648>>>e)return this.word<<=e,this.bitsAvailable-=e,e;return this.loadWord(),e+this.skipLZ()}skipUEG(){this.skipBits(1+this.skipLZ())}skipEG(){this.skipBits(1+this.skipLZ())}readUEG(){const e=this.skipLZ();return this.readBits(e+1)-1}readEG(){const e=this.readUEG();return 1&e?1+e>>>1:-1*(e>>>1)}readBoolean(){return this.readBits(1)===1}readUByte(){return this.readBits(8)}readUShort(){return this.readBits(16)}readUInt(){return this.readBits(32)}skipScalingList(e){let t=8,r=8,i;for(let s=0;s<e;s++)r!==0&&(i=this.readEG(),r=(t+i+256)%256),t=r===0?t:r}readSPS(){let e=0,t=0,r=0,i=0,s,o,a;const l=this.readUByte.bind(this),c=this.readBits.bind(this),d=this.readUEG.bind(this),u=this.readBoolean.bind(this),h=this.skipBits.bind(this),g=this.skipEG.bind(this),y=this.skipUEG.bind(this),b=this.skipScalingList.bind(this);l();const E=l();if(c(5),h(3),l(),y(),E===100||E===110||E===122||E===244||E===44||E===83||E===86||E===118||E===128){const H=d();if(H===3&&h(1),y(),y(),h(1),u())for(o=H!==3?8:12,a=0;a<o;a++)u()&&(a<6?b(16):b(64))}y();const C=d();if(C===0)d();else if(C===1)for(h(1),g(),g(),s=d(),a=0;a<s;a++)g();y(),h(1);const w=d(),R=d(),_=c(1);_===0&&h(1),h(1),u()&&(e=d(),t=d(),r=d(),i=d());let P=[1,1];if(u()&&u())switch(l()){case 1:P=[1,1];break;case 2:P=[12,11];break;case 3:P=[10,11];break;case 4:P=[16,11];break;case 5:P=[40,33];break;case 6:P=[24,11];break;case 7:P=[20,11];break;case 8:P=[32,11];break;case 9:P=[80,33];break;case 10:P=[18,11];break;case 11:P=[15,11];break;case 12:P=[64,33];break;case 13:P=[160,99];break;case 14:P=[4,3];break;case 15:P=[3,2];break;case 16:P=[2,1];break;case 255:{P=[l()<<8|l(),l()<<8|l()];break}}return{width:Math.ceil((w+1)*16-e*2-t*2),height:(2-_)*(R+1)*16-(_?2:4)*(r+i),pixelRatio:P}}readSliceType(){return this.readUByte(),this.readUEG(),this.readUEG()}}class Gx extends Hx{parseAVCPES(e,t,r,i,s){const o=this.parseAVCNALu(e,r.data);let a=this.VideoSample,l,c=!1;r.data=null,a&&o.length&&!e.audFound&&(this.pushAccessUnit(a,e),a=this.VideoSample=this.createVideoSample(!1,r.pts,r.dts,"")),o.forEach(d=>{var u;switch(d.type){case 1:{let b=!1;l=!0;const E=d.data;if(c&&E.length>4){const C=new Qd(E).readSliceType();(C===2||C===4||C===7||C===9)&&(b=!0)}if(b){var h;(h=a)!=null&&h.frame&&!a.key&&(this.pushAccessUnit(a,e),a=this.VideoSample=null)}a||(a=this.VideoSample=this.createVideoSample(!0,r.pts,r.dts,"")),a.frame=!0,a.key=b;break}case 5:l=!0,(u=a)!=null&&u.frame&&!a.key&&(this.pushAccessUnit(a,e),a=this.VideoSample=null),a||(a=this.VideoSample=this.createVideoSample(!0,r.pts,r.dts,"")),a.key=!0,a.frame=!0;break;case 6:{l=!0,bf(d.data,1,r.pts,t.samples);break}case 7:{var g,y;l=!0,c=!0;const b=d.data,C=new Qd(b).readSPS();if(!e.sps||e.width!==C.width||e.height!==C.height||((g=e.pixelRatio)==null?void 0:g[0])!==C.pixelRatio[0]||((y=e.pixelRatio)==null?void 0:y[1])!==C.pixelRatio[1]){e.width=C.width,e.height=C.height,e.pixelRatio=C.pixelRatio,e.sps=[b],e.duration=s;const w=b.subarray(1,4);let R="avc1.";for(let _=0;_<3;_++){let P=w[_].toString(16);P.length<2&&(P="0"+P),R+=P}e.codec=R}break}case 8:l=!0,e.pps=[d.data];break;case 9:l=!0,e.audFound=!0,a&&this.pushAccessUnit(a,e),a=this.VideoSample=this.createVideoSample(!1,r.pts,r.dts,"");break;case 12:l=!0;break;default:l=!1,a&&(a.debug+="unknown NAL "+d.type+" ");break}a&&l&&a.units.push(d)}),i&&a&&(this.pushAccessUnit(a,e),this.VideoSample=null)}parseAVCNALu(e,t){const r=t.byteLength;let i=e.naluState||0;const s=i,o=[];let a=0,l,c,d,u=-1,h=0;for(i===-1&&(u=0,h=t[0]&31,i=0,a=1);a<r;){if(l=t[a++],!i){i=l?0:1;continue}if(i===1){i=l?0:2;continue}if(!l)i=3;else if(l===1){if(c=a-i-1,u>=0){const g={data:t.subarray(u,c),type:h};o.push(g)}else{const g=this.getLastNalUnit(e.samples);g&&(s&&a<=4-s&&g.state&&(g.data=g.data.subarray(0,g.data.byteLength-s)),c>0&&(g.data=Bt(g.data,t.subarray(0,c)),g.state=0))}a<r?(d=t[a]&31,u=a,h=d,i=0):i=-1}else i=0}if(u>=0&&i>=0){const g={data:t.subarray(u,r),type:h,state:i};o.push(g)}if(o.length===0){const g=this.getLastNalUnit(e.samples);g&&(g.data=Bt(g.data,t))}return e.naluState=i,o}}class Kx{constructor(e,t,r){this.keyData=void 0,this.decrypter=void 0,this.keyData=r,this.decrypter=new Al(t,{removePKCS7Padding:!1})}decryptBuffer(e){return this.decrypter.decrypt(e,this.keyData.key.buffer,this.keyData.iv.buffer)}decryptAacSample(e,t,r){const i=e[t].unit;if(i.length<=16)return;const s=i.subarray(16,i.length-i.length%16),o=s.buffer.slice(s.byteOffset,s.byteOffset+s.length);this.decryptBuffer(o).then(a=>{const l=new Uint8Array(a);i.set(l,16),this.decrypter.isSync()||this.decryptAacSamples(e,t+1,r)})}decryptAacSamples(e,t,r){for(;;t++){if(t>=e.length){r();return}if(!(e[t].unit.length<32)&&(this.decryptAacSample(e,t,r),!this.decrypter.isSync()))return}}getAvcEncryptedData(e){const t=Math.floor((e.length-48)/160)*16+16,r=new Int8Array(t);let i=0;for(let s=32;s<e.length-16;s+=160,i+=16)r.set(e.subarray(s,s+16),i);return r}getAvcDecryptedUnit(e,t){const r=new Uint8Array(t);let i=0;for(let s=32;s<e.length-16;s+=160,i+=16)e.set(r.subarray(i,i+16),s);return e}decryptAvcSample(e,t,r,i,s){const o=vf(s.data),a=this.getAvcEncryptedData(o);this.decryptBuffer(a.buffer).then(l=>{s.data=this.getAvcDecryptedUnit(o,l),this.decrypter.isSync()||this.decryptAvcSamples(e,t,r+1,i)})}decryptAvcSamples(e,t,r,i){if(e instanceof Uint8Array)throw new Error("Cannot decrypt samples of type Uint8Array");for(;;t++,r=0){if(t>=e.length){i();return}const s=e[t].units;for(;!(r>=s.length);r++){const o=s[r];if(!(o.data.length<=48||o.type!==1&&o.type!==5)&&(this.decryptAvcSample(e,t,r,i,o),!this.decrypter.isSync()))return}}}}const ut=188;class kn{constructor(e,t,r){this.observer=void 0,this.config=void 0,this.typeSupported=void 0,this.sampleAes=null,this.pmtParsed=!1,this.audioCodec=void 0,this.videoCodec=void 0,this._duration=0,this._pmtId=-1,this._videoTrack=void 0,this._audioTrack=void 0,this._id3Track=void 0,this._txtTrack=void 0,this.aacOverFlow=null,this.remainderData=null,this.videoParser=void 0,this.observer=e,this.config=t,this.typeSupported=r,this.videoParser=new Gx}static probe(e){const t=kn.syncOffset(e);return t>0&&B.warn(`MPEG2-TS detected but first sync word found @ offset ${t}`),t!==-1}static syncOffset(e){const t=e.length;let r=Math.min(ut*5,t-ut)+1,i=0;for(;i<r;){let s=!1,o=-1,a=0;for(let l=i;l<t;l+=ut)if(e[l]===71&&(t-l===ut||e[l+ut]===71)){if(a++,o===-1&&(o=l,o!==0&&(r=Math.min(o+ut*99,e.length-ut)+1)),s||(s=wa(e,l)===0),s&&a>1&&(o===0&&a>2||l+ut>r))return o}else{if(a)return-1;break}i++}return-1}static createTrack(e,t){return{container:e==="video"||e==="audio"?"video/mp2t":void 0,type:e,id:pf[e],pid:-1,inputTimeScale:9e4,sequenceNumber:0,samples:[],dropped:0,duration:e==="audio"?t:void 0}}resetInitSegment(e,t,r,i){this.pmtParsed=!1,this._pmtId=-1,this._videoTrack=kn.createTrack("video"),this._audioTrack=kn.createTrack("audio",i),this._id3Track=kn.createTrack("id3"),this._txtTrack=kn.createTrack("text"),this._audioTrack.segmentCodec="aac",this.aacOverFlow=null,this.remainderData=null,this.audioCodec=t,this.videoCodec=r,this._duration=i}resetTimeStamp(){}resetContiguity(){const{_audioTrack:e,_videoTrack:t,_id3Track:r}=this;e&&(e.pesData=null),t&&(t.pesData=null),r&&(r.pesData=null),this.aacOverFlow=null,this.remainderData=null}demux(e,t,r=!1,i=!1){r||(this.sampleAes=null);let s;const o=this._videoTrack,a=this._audioTrack,l=this._id3Track,c=this._txtTrack;let d=o.pid,u=o.pesData,h=a.pid,g=l.pid,y=a.pesData,b=l.pesData,E=null,C=this.pmtParsed,w=this._pmtId,R=e.length;if(this.remainderData&&(e=Bt(this.remainderData,e),R=e.length,this.remainderData=null),R<ut&&!i)return this.remainderData=e,{audioTrack:a,videoTrack:o,id3Track:l,textTrack:c};const _=Math.max(0,kn.syncOffset(e));R-=(R-_)%ut,R<e.byteLength&&!i&&(this.remainderData=new Uint8Array(e.buffer,R,e.buffer.byteLength-R));let P=0;for(let U=_;U<R;U+=ut)if(e[U]===71){const j=!!(e[U+1]&64),Q=wa(e,U),F=(e[U+3]&48)>>4;let Y;if(F>1){if(Y=U+5+e[U+4],Y===U+ut)continue}else Y=U+4;switch(Q){case d:j&&(u&&(s=rr(u))&&this.videoParser.parseAVCPES(o,c,s,!1,this._duration),u={data:[],size:0}),u&&(u.data.push(e.subarray(Y,U+ut)),u.size+=U+ut-Y);break;case h:if(j){if(y&&(s=rr(y)))switch(a.segmentCodec){case"aac":this.parseAACPES(a,s);break;case"mp3":this.parseMPEGPES(a,s);break;case"ac3":this.parseAC3PES(a,s);break}y={data:[],size:0}}y&&(y.data.push(e.subarray(Y,U+ut)),y.size+=U+ut-Y);break;case g:j&&(b&&(s=rr(b))&&this.parseID3PES(l,s),b={data:[],size:0}),b&&(b.data.push(e.subarray(Y,U+ut)),b.size+=U+ut-Y);break;case 0:j&&(Y+=e[Y]+1),w=this._pmtId=jx(e,Y);break;case w:{j&&(Y+=e[Y]+1);const Ae=qx(e,Y,this.typeSupported,r);d=Ae.videoPid,d>0&&(o.pid=d,o.segmentCodec=Ae.segmentVideoCodec),h=Ae.audioPid,h>0&&(a.pid=h,a.segmentCodec=Ae.segmentAudioCodec),g=Ae.id3Pid,g>0&&(l.pid=g),E!==null&&!C&&(B.warn(`MPEG-TS PMT found at ${U} after unknown PID '${E}'. Backtracking to sync byte @${_} to parse all TS packets.`),E=null,U=_-188),C=this.pmtParsed=!0;break}case 17:case 8191:break;default:E=Q;break}}else P++;if(P>0){const U=new Error(`Found ${P} TS packet/s that do not start with 0x47`);this.observer.emit(T.ERROR,T.ERROR,{type:Le.MEDIA_ERROR,details:$.FRAG_PARSING_ERROR,fatal:!1,error:U,reason:U.message})}o.pesData=u,a.pesData=y,l.pesData=b;const H={audioTrack:a,videoTrack:o,id3Track:l,textTrack:c};return i&&this.extractRemainingSamples(H),H}flush(){const{remainderData:e}=this;this.remainderData=null;let t;return e?t=this.demux(e,-1,!1,!0):t={videoTrack:this._videoTrack,audioTrack:this._audioTrack,id3Track:this._id3Track,textTrack:this._txtTrack},this.extractRemainingSamples(t),this.sampleAes?this.decrypt(t,this.sampleAes):t}extractRemainingSamples(e){const{audioTrack:t,videoTrack:r,id3Track:i,textTrack:s}=e,o=r.pesData,a=t.pesData,l=i.pesData;let c;if(o&&(c=rr(o))?(this.videoParser.parseAVCPES(r,s,c,!0,this._duration),r.pesData=null):r.pesData=o,a&&(c=rr(a))){switch(t.segmentCodec){case"aac":this.parseAACPES(t,c);break;case"mp3":this.parseMPEGPES(t,c);break;case"ac3":this.parseAC3PES(t,c);break}t.pesData=null}else a!=null&&a.size&&B.log("last AAC PES packet truncated,might overlap between fragments"),t.pesData=a;l&&(c=rr(l))?(this.parseID3PES(i,c),i.pesData=null):i.pesData=l}demuxSampleAes(e,t,r){const i=this.demux(e,r,!0,!this.config.progressive),s=this.sampleAes=new Kx(this.observer,this.config,t);return this.decrypt(i,s)}decrypt(e,t){return new Promise(r=>{const{audioTrack:i,videoTrack:s}=e;i.samples&&i.segmentCodec==="aac"?t.decryptAacSamples(i.samples,0,()=>{s.samples?t.decryptAvcSamples(s.samples,0,0,()=>{r(e)}):r(e)}):s.samples&&t.decryptAvcSamples(s.samples,0,0,()=>{r(e)})})}destroy(){this._duration=0}parseAACPES(e,t){let r=0;const i=this.aacOverFlow;let s=t.data;if(i){this.aacOverFlow=null;const u=i.missing,h=i.sample.unit.byteLength;if(u===-1)s=Bt(i.sample.unit,s);else{const g=h-u;i.sample.unit.set(s.subarray(0,u),g),e.samples.push(i.sample),r=i.missing}}let o,a;for(o=r,a=s.length;o<a-1&&!Bs(s,o);o++);if(o!==r){let u;const h=o<a-1;h?u=`AAC PES did not start with ADTS header,offset:${o}`:u="No ADTS header found in AAC PES";const g=new Error(u);if(B.warn(`parsing error: ${u}`),this.observer.emit(T.ERROR,T.ERROR,{type:Le.MEDIA_ERROR,details:$.FRAG_PARSING_ERROR,fatal:!1,levelRetry:h,error:g,reason:u}),!h)return}Of(e,this.observer,s,o,this.audioCodec);let l;if(t.pts!==void 0)l=t.pts;else if(i){const u=Ff(e.samplerate);l=i.sample.pts+u}else{B.warn("[tsdemuxer]: AAC PES unknown PTS");return}let c=0,d;for(;o<a;)if(d=Mf(e,s,o,l,c),o+=d.length,d.missing){this.aacOverFlow=d;break}else for(c++;o<a-1&&!Bs(s,o);o++);}parseMPEGPES(e,t){const r=t.data,i=r.length;let s=0,o=0;const a=t.pts;if(a===void 0){B.warn("[tsdemuxer]: MPEG PES unknown PTS");return}for(;o<i;)if($f(r,o)){const l=Nf(e,r,o,a,s);if(l)o+=l.length,s++;else break}else o++}parseAC3PES(e,t){{const r=t.data,i=t.pts;if(i===void 0){B.warn("[tsdemuxer]: AC3 PES unknown PTS");return}const s=r.length;let o=0,a=0,l;for(;a<s&&(l=Kf(e,r,a,i,o++))>0;)a+=l}}parseID3PES(e,t){if(t.pts===void 0){B.warn("[tsdemuxer]: ID3 PES unknown PTS");return}const r=ot({},t,{type:this._videoTrack?Nt.emsg:Nt.audioId3,duration:Number.POSITIVE_INFINITY});e.samples.push(r)}}function wa(n,e){return((n[e+1]&31)<<8)+n[e+2]}function jx(n,e){return(n[e+10]&31)<<8|n[e+11]}function qx(n,e,t,r){const i={audioPid:-1,videoPid:-1,id3Pid:-1,segmentVideoCodec:"avc",segmentAudioCodec:"aac"},s=(n[e+1]&15)<<8|n[e+2],o=e+3+s-4,a=(n[e+10]&15)<<8|n[e+11];for(e+=12+a;e<o;){const l=wa(n,e),c=(n[e+3]&15)<<8|n[e+4];switch(n[e]){case 207:if(!r){No("ADTS AAC");break}case 15:i.audioPid===-1&&(i.audioPid=l);break;case 21:i.id3Pid===-1&&(i.id3Pid=l);break;case 219:if(!r){No("H.264");break}case 27:i.videoPid===-1&&(i.videoPid=l,i.segmentVideoCodec="avc");break;case 3:case 4:!t.mpeg&&!t.mp3?B.log("MPEG audio found, not supported in this browser"):i.audioPid===-1&&(i.audioPid=l,i.segmentAudioCodec="mp3");break;case 193:if(!r){No("AC-3");break}case 129:t.ac3?i.audioPid===-1&&(i.audioPid=l,i.segmentAudioCodec="ac3"):B.log("AC-3 audio found, not supported in this browser");break;case 6:if(i.audioPid===-1&&c>0){let d=e+5,u=c;for(;u>2;){switch(n[d]){case 106:t.ac3!==!0?B.log("AC-3 audio found, not supported in this browser for now"):(i.audioPid=l,i.segmentAudioCodec="ac3");break}const g=n[d+1]+2;d+=g,u-=g}}break;case 194:case 135:B.warn("Unsupported EC-3 in M2TS found");break;case 36:B.warn("Unsupported HEVC in M2TS found");break}e+=c+5}return i}function No(n){B.log(`${n} with AES-128-CBC encryption found in unencrypted stream`)}function rr(n){let e=0,t,r,i,s,o;const a=n.data;if(!n||n.size===0)return null;for(;a[0].length<19&&a.length>1;)a[0]=Bt(a[0],a[1]),a.splice(1,1);if(t=a[0],(t[0]<<16)+(t[1]<<8)+t[2]===1){if(r=(t[4]<<8)+t[5],r&&r>n.size-6)return null;const c=t[7];c&192&&(s=(t[9]&14)*536870912+(t[10]&255)*4194304+(t[11]&254)*16384+(t[12]&255)*128+(t[13]&254)/2,c&64?(o=(t[14]&14)*536870912+(t[15]&255)*4194304+(t[16]&254)*16384+(t[17]&255)*128+(t[18]&254)/2,s-o>60*9e4&&(B.warn(`${Math.round((s-o)/9e4)}s delta between PTS and DTS, align them`),s=o)):o=s),i=t[8];let d=i+9;if(n.size<=d)return null;n.size-=d;const u=new Uint8Array(n.size);for(let h=0,g=a.length;h<g;h++){t=a[h];let y=t.byteLength;if(d)if(d>y){d-=y;continue}else t=t.subarray(d),y-=d,d=0;u.set(t,e),e+=y}return r&&(r-=i+3),{data:u,pts:s,dts:o,len:r}}return null}class zx extends vl{resetInitSegment(e,t,r,i){super.resetInitSegment(e,t,r,i),this._audioTrack={container:"audio/mpeg",type:"audio",id:2,pid:-1,sequenceNumber:0,segmentCodec:"mp3",samples:[],manifestCodec:t,duration:i,inputTimeScale:9e4,dropped:0}}static probe(e){if(!e)return!1;const t=Ci(e,0);let r=(t==null?void 0:t.length)||0;if(t&&e[r]===11&&e[r+1]===119&&pl(t)!==void 0&&Gf(e,r)<=16)return!1;for(let i=e.length;r<i;r++)if(Hf(e,r))return B.log("MPEG Audio sync word found !"),!0;return!1}canParse(e,t){return Fx(e,t)}appendFrame(e,t,r){if(this.basePTS!==null)return Nf(e,t,r,this.basePTS,this.frameIndex)}}class Xd{static getSilentFrame(e,t){switch(e){case"mp4a.40.2":if(t===1)return new Uint8Array([0,200,0,128,35,128]);if(t===2)return new Uint8Array([33,0,73,144,2,25,0,35,128]);if(t===3)return new Uint8Array([0,200,0,128,32,132,1,38,64,8,100,0,142]);if(t===4)return new Uint8Array([0,200,0,128,32,132,1,38,64,8,100,0,128,44,128,8,2,56]);if(t===5)return new Uint8Array([0,200,0,128,32,132,1,38,64,8,100,0,130,48,4,153,0,33,144,2,56]);if(t===6)return new Uint8Array([0,200,0,128,32,132,1,38,64,8,100,0,130,48,4,153,0,33,144,2,0,178,0,32,8,224]);break;default:if(t===1)return new Uint8Array([1,64,34,128,163,78,230,128,186,8,0,0,0,28,6,241,193,10,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,94]);if(t===2)return new Uint8Array([1,64,34,128,163,94,230,128,186,8,0,0,0,0,149,0,6,241,161,10,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,94]);if(t===3)return new Uint8Array([1,64,34,128,163,94,230,128,186,8,0,0,0,0,149,0,6,241,161,10,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,94]);break}}}const Sn=Math.pow(2,32)-1;class M{static init(){M.types={avc1:[],avcC:[],btrt:[],dinf:[],dref:[],esds:[],ftyp:[],hdlr:[],mdat:[],mdhd:[],mdia:[],mfhd:[],minf:[],moof:[],moov:[],mp4a:[],".mp3":[],dac3:[],"ac-3":[],mvex:[],mvhd:[],pasp:[],sdtp:[],stbl:[],stco:[],stsc:[],stsd:[],stsz:[],stts:[],tfdt:[],tfhd:[],traf:[],trak:[],trun:[],trex:[],tkhd:[],vmhd:[],smhd:[]};let e;for(e in M.types)M.types.hasOwnProperty(e)&&(M.types[e]=[e.charCodeAt(0),e.charCodeAt(1),e.charCodeAt(2),e.charCodeAt(3)]);const t=new Uint8Array([0,0,0,0,0,0,0,0,118,105,100,101,0,0,0,0,0,0,0,0,0,0,0,0,86,105,100,101,111,72,97,110,100,108,101,114,0]),r=new Uint8Array([0,0,0,0,0,0,0,0,115,111,117,110,0,0,0,0,0,0,0,0,0,0,0,0,83,111,117,110,100,72,97,110,100,108,101,114,0]);M.HDLR_TYPES={video:t,audio:r};const i=new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,12,117,114,108,32,0,0,0,1]),s=new Uint8Array([0,0,0,0,0,0,0,0]);M.STTS=M.STSC=M.STCO=s,M.STSZ=new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0]),M.VMHD=new Uint8Array([0,0,0,1,0,0,0,0,0,0,0,0]),M.SMHD=new Uint8Array([0,0,0,0,0,0,0,0]),M.STSD=new Uint8Array([0,0,0,0,0,0,0,1]);const o=new Uint8Array([105,115,111,109]),a=new Uint8Array([97,118,99,49]),l=new Uint8Array([0,0,0,1]);M.FTYP=M.box(M.types.ftyp,o,l,o,a),M.DINF=M.box(M.types.dinf,M.box(M.types.dref,i))}static box(e,...t){let r=8,i=t.length;const s=i;for(;i--;)r+=t[i].byteLength;const o=new Uint8Array(r);for(o[0]=r>>24&255,o[1]=r>>16&255,o[2]=r>>8&255,o[3]=r&255,o.set(e,4),i=0,r=8;i<s;i++)o.set(t[i],r),r+=t[i].byteLength;return o}static hdlr(e){return M.box(M.types.hdlr,M.HDLR_TYPES[e])}static mdat(e){return M.box(M.types.mdat,e)}static mdhd(e,t){t*=e;const r=Math.floor(t/(Sn+1)),i=Math.floor(t%(Sn+1));return M.box(M.types.mdhd,new Uint8Array([1,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,3,e>>24&255,e>>16&255,e>>8&255,e&255,r>>24,r>>16&255,r>>8&255,r&255,i>>24,i>>16&255,i>>8&255,i&255,85,196,0,0]))}static mdia(e){return M.box(M.types.mdia,M.mdhd(e.timescale,e.duration),M.hdlr(e.type),M.minf(e))}static mfhd(e){return M.box(M.types.mfhd,new Uint8Array([0,0,0,0,e>>24,e>>16&255,e>>8&255,e&255]))}static minf(e){return e.type==="audio"?M.box(M.types.minf,M.box(M.types.smhd,M.SMHD),M.DINF,M.stbl(e)):M.box(M.types.minf,M.box(M.types.vmhd,M.VMHD),M.DINF,M.stbl(e))}static moof(e,t,r){return M.box(M.types.moof,M.mfhd(e),M.traf(r,t))}static moov(e){let t=e.length;const r=[];for(;t--;)r[t]=M.trak(e[t]);return M.box.apply(null,[M.types.moov,M.mvhd(e[0].timescale,e[0].duration)].concat(r).concat(M.mvex(e)))}static mvex(e){let t=e.length;const r=[];for(;t--;)r[t]=M.trex(e[t]);return M.box.apply(null,[M.types.mvex,...r])}static mvhd(e,t){t*=e;const r=Math.floor(t/(Sn+1)),i=Math.floor(t%(Sn+1)),s=new Uint8Array([1,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,3,e>>24&255,e>>16&255,e>>8&255,e&255,r>>24,r>>16&255,r>>8&255,r&255,i>>24,i>>16&255,i>>8&255,i&255,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,64,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,255,255,255,255]);return M.box(M.types.mvhd,s)}static sdtp(e){const t=e.samples||[],r=new Uint8Array(4+t.length);let i,s;for(i=0;i<t.length;i++)s=t[i].flags,r[i+4]=s.dependsOn<<4|s.isDependedOn<<2|s.hasRedundancy;return M.box(M.types.sdtp,r)}static stbl(e){return M.box(M.types.stbl,M.stsd(e),M.box(M.types.stts,M.STTS),M.box(M.types.stsc,M.STSC),M.box(M.types.stsz,M.STSZ),M.box(M.types.stco,M.STCO))}static avc1(e){let t=[],r=[],i,s,o;for(i=0;i<e.sps.length;i++)s=e.sps[i],o=s.byteLength,t.push(o>>>8&255),t.push(o&255),t=t.concat(Array.prototype.slice.call(s));for(i=0;i<e.pps.length;i++)s=e.pps[i],o=s.byteLength,r.push(o>>>8&255),r.push(o&255),r=r.concat(Array.prototype.slice.call(s));const a=M.box(M.types.avcC,new Uint8Array([1,t[3],t[4],t[5],255,224|e.sps.length].concat(t).concat([e.pps.length]).concat(r))),l=e.width,c=e.height,d=e.pixelRatio[0],u=e.pixelRatio[1];return M.box(M.types.avc1,new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,l>>8&255,l&255,c>>8&255,c&255,0,72,0,0,0,72,0,0,0,0,0,0,0,1,18,100,97,105,108,121,109,111,116,105,111,110,47,104,108,115,46,106,115,0,0,0,0,0,0,0,0,0,0,0,0,0,0,24,17,17]),a,M.box(M.types.btrt,new Uint8Array([0,28,156,128,0,45,198,192,0,45,198,192])),M.box(M.types.pasp,new Uint8Array([d>>24,d>>16&255,d>>8&255,d&255,u>>24,u>>16&255,u>>8&255,u&255])))}static esds(e){const t=e.config.length;return new Uint8Array([0,0,0,0,3,23+t,0,1,0,4,15+t,64,21,0,0,0,0,0,0,0,0,0,0,0,5].concat([t]).concat(e.config).concat([6,1,2]))}static audioStsd(e){const t=e.samplerate;return new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,e.channelCount,0,16,0,0,0,0,t>>8&255,t&255,0,0])}static mp4a(e){return M.box(M.types.mp4a,M.audioStsd(e),M.box(M.types.esds,M.esds(e)))}static mp3(e){return M.box(M.types[".mp3"],M.audioStsd(e))}static ac3(e){return M.box(M.types["ac-3"],M.audioStsd(e),M.box(M.types.dac3,e.config))}static stsd(e){return e.type==="audio"?e.segmentCodec==="mp3"&&e.codec==="mp3"?M.box(M.types.stsd,M.STSD,M.mp3(e)):e.segmentCodec==="ac3"?M.box(M.types.stsd,M.STSD,M.ac3(e)):M.box(M.types.stsd,M.STSD,M.mp4a(e)):M.box(M.types.stsd,M.STSD,M.avc1(e))}static tkhd(e){const t=e.id,r=e.duration*e.timescale,i=e.width,s=e.height,o=Math.floor(r/(Sn+1)),a=Math.floor(r%(Sn+1));return M.box(M.types.tkhd,new Uint8Array([1,0,0,7,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,3,t>>24&255,t>>16&255,t>>8&255,t&255,0,0,0,0,o>>24,o>>16&255,o>>8&255,o&255,a>>24,a>>16&255,a>>8&255,a&255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,64,0,0,0,i>>8&255,i&255,0,0,s>>8&255,s&255,0,0]))}static traf(e,t){const r=M.sdtp(e),i=e.id,s=Math.floor(t/(Sn+1)),o=Math.floor(t%(Sn+1));return M.box(M.types.traf,M.box(M.types.tfhd,new Uint8Array([0,0,0,0,i>>24,i>>16&255,i>>8&255,i&255])),M.box(M.types.tfdt,new Uint8Array([1,0,0,0,s>>24,s>>16&255,s>>8&255,s&255,o>>24,o>>16&255,o>>8&255,o&255])),M.trun(e,r.length+16+20+8+16+8+8),r)}static trak(e){return e.duration=e.duration||4294967295,M.box(M.types.trak,M.tkhd(e),M.mdia(e))}static trex(e){const t=e.id;return M.box(M.types.trex,new Uint8Array([0,0,0,0,t>>24,t>>16&255,t>>8&255,t&255,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1]))}static trun(e,t){const r=e.samples||[],i=r.length,s=12+16*i,o=new Uint8Array(s);let a,l,c,d,u,h;for(t+=8+s,o.set([e.type==="video"?1:0,0,15,1,i>>>24&255,i>>>16&255,i>>>8&255,i&255,t>>>24&255,t>>>16&255,t>>>8&255,t&255],0),a=0;a<i;a++)l=r[a],c=l.duration,d=l.size,u=l.flags,h=l.cts,o.set([c>>>24&255,c>>>16&255,c>>>8&255,c&255,d>>>24&255,d>>>16&255,d>>>8&255,d&255,u.isLeading<<2|u.dependsOn,u.isDependedOn<<6|u.hasRedundancy<<4|u.paddingValue<<1|u.isNonSync,u.degradPrio&61440,u.degradPrio&15,h>>>24&255,h>>>16&255,h>>>8&255,h&255],12+16*a);return M.box(M.types.trun,o)}static initSegment(e){M.types||M.init();const t=M.moov(e);return Bt(M.FTYP,t)}}M.types=void 0;M.HDLR_TYPES=void 0;M.STTS=void 0;M.STSC=void 0;M.STCO=void 0;M.STSZ=void 0;M.VMHD=void 0;M.SMHD=void 0;M.STSD=void 0;M.FTYP=void 0;M.DINF=void 0;const jf=9e4;function Sl(n,e,t=1,r=!1){const i=n*e*t;return r?Math.round(i):i}function Vx(n,e,t=1,r=!1){return Sl(n,e,1/t,r)}function si(n,e=!1){return Sl(n,1e3,1/jf,e)}function Wx(n,e=1){return Sl(n,jf,1/e)}const Yx=10*1e3,Jd=1024,Qx=1152,Xx=1536;let ir=null,Uo=null;class fs{constructor(e,t,r,i=""){if(this.observer=void 0,this.config=void 0,this.typeSupported=void 0,this.ISGenerated=!1,this._initPTS=null,this._initDTS=null,this.nextAvcDts=null,this.nextAudioPts=null,this.videoSampleDuration=null,this.isAudioContiguous=!1,this.isVideoContiguous=!1,this.videoTrackConfig=void 0,this.observer=e,this.config=t,this.typeSupported=r,this.ISGenerated=!1,ir===null){const o=(navigator.userAgent||"").match(/Chrome\/(\d+)/i);ir=o?parseInt(o[1]):0}if(Uo===null){const s=navigator.userAgent.match(/Safari\/(\d+)/i);Uo=s?parseInt(s[1]):0}}destroy(){this.config=this.videoTrackConfig=this._initPTS=this._initDTS=null}resetTimeStamp(e){B.log("[mp4-remuxer]: initPTS & initDTS reset"),this._initPTS=this._initDTS=e}resetNextTimestamp(){B.log("[mp4-remuxer]: reset next timestamp"),this.isVideoContiguous=!1,this.isAudioContiguous=!1}resetInitSegment(){B.log("[mp4-remuxer]: ISGenerated flag reset"),this.ISGenerated=!1,this.videoTrackConfig=void 0}getVideoStartPts(e){let t=!1;const r=e.reduce((i,s)=>{const o=s.pts-i;return o<-4294967296?(t=!0,It(i,s.pts)):o>0?i:s.pts},e[0].pts);return t&&B.debug("PTS rollover detected"),r}remux(e,t,r,i,s,o,a,l){let c,d,u,h,g,y,b=s,E=s;const C=e.pid>-1,w=t.pid>-1,R=t.samples.length,_=e.samples.length>0,P=a&&R>0||R>1;if((!C||_)&&(!w||P)||this.ISGenerated||a){if(this.ISGenerated){var U,j,Q,F;const Se=this.videoTrackConfig;Se&&(t.width!==Se.width||t.height!==Se.height||((U=t.pixelRatio)==null?void 0:U[0])!==((j=Se.pixelRatio)==null?void 0:j[0])||((Q=t.pixelRatio)==null?void 0:Q[1])!==((F=Se.pixelRatio)==null?void 0:F[1]))&&this.resetInitSegment()}else u=this.generateIS(e,t,s,o);const Y=this.isVideoContiguous;let Ae=-1,te;if(P&&(Ae=Jx(t.samples),!Y&&this.config.forceKeyFrameOnDiscontinuity))if(y=!0,Ae>0){B.warn(`[mp4-remuxer]: Dropped ${Ae} out of ${R} video samples due to a missing keyframe`);const Se=this.getVideoStartPts(t.samples);t.samples=t.samples.slice(Ae),t.dropped+=Ae,E+=(t.samples[0].pts-Se)/t.inputTimeScale,te=E}else Ae===-1&&(B.warn(`[mp4-remuxer]: No keyframe found out of ${R} video samples`),y=!1);if(this.ISGenerated){if(_&&P){const Se=this.getVideoStartPts(t.samples),ne=(It(e.samples[0].pts,Se)-Se)/t.inputTimeScale;b+=Math.max(0,ne),E+=Math.max(0,-ne)}if(_){if(e.samplerate||(B.warn("[mp4-remuxer]: regenerate InitSegment as audio detected"),u=this.generateIS(e,t,s,o)),d=this.remuxAudio(e,b,this.isAudioContiguous,o,w||P||l===ke.AUDIO?E:void 0),P){const Se=d?d.endPTS-d.startPTS:0;t.inputTimeScale||(B.warn("[mp4-remuxer]: regenerate InitSegment as video detected"),u=this.generateIS(e,t,s,o)),c=this.remuxVideo(t,E,Y,Se)}}else P&&(c=this.remuxVideo(t,E,Y,0));c&&(c.firstKeyFrame=Ae,c.independent=Ae!==-1,c.firstKeyFramePTS=te)}}return this.ISGenerated&&this._initPTS&&this._initDTS&&(r.samples.length&&(g=qf(r,s,this._initPTS,this._initDTS)),i.samples.length&&(h=zf(i,s,this._initPTS))),{audio:d,video:c,initSegment:u,independent:y,text:h,id3:g}}generateIS(e,t,r,i){const s=e.samples,o=t.samples,a=this.typeSupported,l={},c=this._initPTS;let d=!c||i,u="audio/mp4",h,g,y;if(d&&(h=g=1/0),e.config&&s.length){switch(e.timescale=e.samplerate,e.segmentCodec){case"mp3":a.mpeg?(u="audio/mpeg",e.codec=""):a.mp3&&(e.codec="mp3");break;case"ac3":e.codec="ac-3";break}l.audio={id:"audio",container:u,codec:e.codec,initSegment:e.segmentCodec==="mp3"&&a.mpeg?new Uint8Array(0):M.initSegment([e]),metadata:{channelCount:e.channelCount}},d&&(y=e.inputTimeScale,!c||y!==c.timescale?h=g=s[0].pts-Math.round(y*r):d=!1)}if(t.sps&&t.pps&&o.length){if(t.timescale=t.inputTimeScale,l.video={id:"main",container:"video/mp4",codec:t.codec,initSegment:M.initSegment([t]),metadata:{width:t.width,height:t.height}},d)if(y=t.inputTimeScale,!c||y!==c.timescale){const b=this.getVideoStartPts(o),E=Math.round(y*r);g=Math.min(g,It(o[0].dts,b)-E),h=Math.min(h,b-E)}else d=!1;this.videoTrackConfig={width:t.width,height:t.height,pixelRatio:t.pixelRatio}}if(Object.keys(l).length)return this.ISGenerated=!0,d?(this._initPTS={baseTime:h,timescale:y},this._initDTS={baseTime:g,timescale:y}):h=y=void 0,{tracks:l,initPTS:h,timescale:y}}remuxVideo(e,t,r,i){const s=e.inputTimeScale,o=e.samples,a=[],l=o.length,c=this._initPTS;let d=this.nextAvcDts,u=8,h=this.videoSampleDuration,g,y,b=Number.POSITIVE_INFINITY,E=Number.NEGATIVE_INFINITY,C=!1;if(!r||d===null){const z=t*s,ae=o[0].pts-It(o[0].dts,o[0].pts);ir&&d!==null&&Math.abs(z-ae-d)<15e3?r=!0:d=z-ae}const w=c.baseTime*s/c.timescale;for(let z=0;z<l;z++){const ae=o[z];ae.pts=It(ae.pts-w,d),ae.dts=It(ae.dts-w,d),ae.dts<o[z>0?z-1:z].dts&&(C=!0)}C&&o.sort(function(z,ae){const Re=z.dts-ae.dts,xe=z.pts-ae.pts;return Re||xe}),g=o[0].dts,y=o[o.length-1].dts;const R=y-g,_=R?Math.round(R/(l-1)):h||e.inputTimeScale/30;if(r){const z=g-d,ae=z>_,Re=z<-1;if((ae||Re)&&(ae?B.warn(`AVC: ${si(z,!0)} ms (${z}dts) hole between fragments detected at ${t.toFixed(3)}`):B.warn(`AVC: ${si(-z,!0)} ms (${z}dts) overlapping between fragments detected at ${t.toFixed(3)}`),!Re||d>=o[0].pts||ir)){g=d;const xe=o[0].pts-z;if(ae)o[0].dts=g,o[0].pts=xe;else for(let Fe=0;Fe<o.length&&!(o[Fe].dts>xe);Fe++)o[Fe].dts-=z,o[Fe].pts-=z;B.log(`Video: Initial PTS/DTS adjusted: ${si(xe,!0)}/${si(g,!0)}, delta: ${si(z,!0)} ms`)}}g=Math.max(0,g);let P=0,H=0,U=g;for(let z=0;z<l;z++){const ae=o[z],Re=ae.units,xe=Re.length;let Fe=0;for(let je=0;je<xe;je++)Fe+=Re[je].data.length;H+=Fe,P+=xe,ae.length=Fe,ae.dts<U?(ae.dts=U,U+=_/4|0||1):U=ae.dts,b=Math.min(ae.pts,b),E=Math.max(ae.pts,E)}y=o[l-1].dts;const j=H+4*P+8;let Q;try{Q=new Uint8Array(j)}catch(z){this.observer.emit(T.ERROR,T.ERROR,{type:Le.MUX_ERROR,details:$.REMUX_ALLOC_ERROR,fatal:!1,error:z,bytes:j,reason:`fail allocating video mdat ${j}`});return}const F=new DataView(Q.buffer);F.setUint32(0,j),Q.set(M.types.mdat,4);let Y=!1,Ae=Number.POSITIVE_INFINITY,te=Number.POSITIVE_INFINITY,Se=Number.NEGATIVE_INFINITY,ve=Number.NEGATIVE_INFINITY;for(let z=0;z<l;z++){const ae=o[z],Re=ae.units;let xe=0;for(let Qe=0,Pe=Re.length;Qe<Pe;Qe++){const K=Re[Qe],ce=K.data,re=K.data.byteLength;F.setUint32(u,re),u+=4,Q.set(ce,u),u+=re,xe+=4+re}let Fe;if(z<l-1)h=o[z+1].dts-ae.dts,Fe=o[z+1].pts-ae.pts;else{const Qe=this.config,Pe=z>0?ae.dts-o[z-1].dts:_;if(Fe=z>0?ae.pts-o[z-1].pts:_,Qe.stretchShortVideoTrack&&this.nextAudioPts!==null){const K=Math.floor(Qe.maxBufferHole*s),ce=(i?b+i*s:this.nextAudioPts)-ae.pts;ce>K?(h=ce-Pe,h<0?h=Pe:Y=!0,B.log(`[mp4-remuxer]: It is approximately ${ce/90} ms to the next segment; using duration ${h/90} ms for the last video frame.`)):h=Pe}else h=Pe}const je=Math.round(ae.pts-ae.dts);Ae=Math.min(Ae,h),Se=Math.max(Se,h),te=Math.min(te,Fe),ve=Math.max(ve,Fe),a.push(new Zd(ae.key,h,xe,je))}if(a.length){if(ir){if(ir<70){const z=a[0].flags;z.dependsOn=2,z.isNonSync=0}}else if(Uo&&ve-te<Se-Ae&&_/Se<.025&&a[0].cts===0){B.warn("Found irregular gaps in sample duration. Using PTS instead of DTS to determine MP4 sample duration.");let z=g;for(let ae=0,Re=a.length;ae<Re;ae++){const xe=z+a[ae].duration,Fe=z+a[ae].cts;if(ae<Re-1){const je=xe+a[ae+1].cts;a[ae].duration=je-Fe}else a[ae].duration=ae?a[ae-1].duration:_;a[ae].cts=0,z=xe}}}h=Y||!h?_:h,this.nextAvcDts=d=y+h,this.videoSampleDuration=h,this.isVideoContiguous=!0;const ne=M.moof(e.sequenceNumber++,g,ot({},e,{samples:a})),ye="video",me={data1:ne,data2:Q,startPTS:b/s,endPTS:(E+h)/s,startDTS:g/s,endDTS:d/s,type:ye,hasAudio:!1,hasVideo:!0,nb:a.length,dropped:e.dropped};return e.samples=[],e.dropped=0,me}getSamplesPerFrame(e){switch(e.segmentCodec){case"mp3":return Qx;case"ac3":return Xx;default:return Jd}}remuxAudio(e,t,r,i,s){const o=e.inputTimeScale,a=e.samplerate?e.samplerate:o,l=o/a,c=this.getSamplesPerFrame(e),d=c*l,u=this._initPTS,h=e.segmentCodec==="mp3"&&this.typeSupported.mpeg,g=[],y=s!==void 0;let b=e.samples,E=h?0:8,C=this.nextAudioPts||-1;const w=t*o,R=u.baseTime*o/u.timescale;if(this.isAudioContiguous=r=r||b.length&&C>0&&(i&&Math.abs(w-C)<9e3||Math.abs(It(b[0].pts-R,w)-C)<20*d),b.forEach(function(ne){ne.pts=It(ne.pts-R,w)}),!r||C<0){if(b=b.filter(ne=>ne.pts>=0),!b.length)return;s===0?C=0:i&&!y?C=Math.max(0,w):C=b[0].pts}if(e.segmentCodec==="aac"){const ne=this.config.maxAudioFramesDrift;for(let ye=0,me=C;ye<b.length;ye++){const z=b[ye],ae=z.pts,Re=ae-me,xe=Math.abs(1e3*Re/o);if(Re<=-ne*d&&y)ye===0&&(B.warn(`Audio frame @ ${(ae/o).toFixed(3)}s overlaps nextAudioPts by ${Math.round(1e3*Re/o)} ms.`),this.nextAudioPts=C=me=ae);else if(Re>=ne*d&&xe<Yx&&y){let Fe=Math.round(Re/d);me=ae-Fe*d,me<0&&(Fe--,me+=d),ye===0&&(this.nextAudioPts=C=me),B.warn(`[mp4-remuxer]: Injecting ${Fe} audio frame @ ${(me/o).toFixed(3)}s due to ${Math.round(1e3*Re/o)} ms gap.`);for(let je=0;je<Fe;je++){const Qe=Math.max(me,0);let Pe=Xd.getSilentFrame(e.manifestCodec||e.codec,e.channelCount);Pe||(B.log("[mp4-remuxer]: Unable to get silent frame for given audio codec; duplicating last frame instead."),Pe=z.unit.subarray()),b.splice(ye,0,{unit:Pe,pts:Qe}),me+=d,ye++}}z.pts=me,me+=d}}let _=null,P=null,H,U=0,j=b.length;for(;j--;)U+=b[j].unit.byteLength;for(let ne=0,ye=b.length;ne<ye;ne++){const me=b[ne],z=me.unit;let ae=me.pts;if(P!==null){const xe=g[ne-1];xe.duration=Math.round((ae-P)/l)}else if(r&&e.segmentCodec==="aac"&&(ae=C),_=ae,U>0){U+=E;try{H=new Uint8Array(U)}catch(xe){this.observer.emit(T.ERROR,T.ERROR,{type:Le.MUX_ERROR,details:$.REMUX_ALLOC_ERROR,fatal:!1,error:xe,bytes:U,reason:`fail allocating audio mdat ${U}`});return}h||(new DataView(H.buffer).setUint32(0,U),H.set(M.types.mdat,4))}else return;H.set(z,E);const Re=z.byteLength;E+=Re,g.push(new Zd(!0,c,Re,0)),P=ae}const Q=g.length;if(!Q)return;const F=g[g.length-1];this.nextAudioPts=C=P+l*F.duration;const Y=h?new Uint8Array(0):M.moof(e.sequenceNumber++,_/l,ot({},e,{samples:g}));e.samples=[];const Ae=_/o,te=C/o,ve={data1:Y,data2:H,startPTS:Ae,endPTS:te,startDTS:Ae,endDTS:te,type:"audio",hasAudio:!0,hasVideo:!1,nb:Q};return this.isAudioContiguous=!0,ve}remuxEmptyAudio(e,t,r,i){const s=e.inputTimeScale,o=e.samplerate?e.samplerate:s,a=s/o,l=this.nextAudioPts,c=this._initDTS,d=c.baseTime*9e4/c.timescale,u=(l!==null?l:i.startDTS*s)+d,h=i.endDTS*s+d,g=a*Jd,y=Math.ceil((h-u)/g),b=Xd.getSilentFrame(e.manifestCodec||e.codec,e.channelCount);if(B.warn("[mp4-remuxer]: remux empty Audio"),!b){B.trace("[mp4-remuxer]: Unable to remuxEmptyAudio since we were unable to get a silent frame for given audio codec");return}const E=[];for(let C=0;C<y;C++){const w=u+C*g;E.push({unit:b,pts:w,dts:w})}return e.samples=E,this.remuxAudio(e,t,r,!1)}}function It(n,e){let t;if(e===null)return n;for(e<n?t=-8589934592:t=8589934592;Math.abs(n-e)>4294967296;)n+=t;return n}function Jx(n){for(let e=0;e<n.length;e++)if(n[e].key)return e;return-1}function qf(n,e,t,r){const i=n.samples.length;if(!i)return;const s=n.inputTimeScale;for(let a=0;a<i;a++){const l=n.samples[a];l.pts=It(l.pts-t.baseTime*s/t.timescale,e*s)/s,l.dts=It(l.dts-r.baseTime*s/r.timescale,e*s)/s}const o=n.samples;return n.samples=[],{samples:o}}function zf(n,e,t){const r=n.samples.length;if(!r)return;const i=n.inputTimeScale;for(let o=0;o<r;o++){const a=n.samples[o];a.pts=It(a.pts-t.baseTime*i/t.timescale,e*i)/i}n.samples.sort((o,a)=>o.pts-a.pts);const s=n.samples;return n.samples=[],{samples:s}}class Zd{constructor(e,t,r,i){this.size=void 0,this.duration=void 0,this.cts=void 0,this.flags=void 0,this.duration=t,this.size=r,this.cts=i,this.flags={isLeading:0,isDependedOn:0,hasRedundancy:0,degradPrio:0,dependsOn:e?2:1,isNonSync:e?0:1}}}class Zx{constructor(){this.emitInitSegment=!1,this.audioCodec=void 0,this.videoCodec=void 0,this.initData=void 0,this.initPTS=null,this.initTracks=void 0,this.lastEndTime=null}destroy(){}resetTimeStamp(e){this.initPTS=e,this.lastEndTime=null}resetNextTimestamp(){this.lastEndTime=null}resetInitSegment(e,t,r,i){this.audioCodec=t,this.videoCodec=r,this.generateInitSegment(aE(e,i)),this.emitInitSegment=!0}generateInitSegment(e){let{audioCodec:t,videoCodec:r}=this;if(!(e!=null&&e.byteLength)){this.initTracks=void 0,this.initData=void 0;return}const i=this.initData=yf(e);i.audio&&(t=eu(i.audio,Ve.AUDIO)),i.video&&(r=eu(i.video,Ve.VIDEO));const s={};i.audio&&i.video?s.audiovideo={container:"video/mp4",codec:t+","+r,initSegment:e,id:"main"}:i.audio?s.audio={container:"audio/mp4",codec:t,initSegment:e,id:"audio"}:i.video?s.video={container:"video/mp4",codec:r,initSegment:e,id:"main"}:B.warn("[passthrough-remuxer.ts]: initSegment does not contain moov or trak boxes."),this.initTracks=s}remux(e,t,r,i,s,o){var a,l;let{initPTS:c,lastEndTime:d}=this;const u={audio:void 0,video:void 0,text:i,id3:r,initSegment:void 0};pe(d)||(d=this.lastEndTime=s||0);const h=t.samples;if(!(h!=null&&h.length))return u;const g={initPTS:void 0,timescale:1};let y=this.initData;if((a=y)!=null&&a.length||(this.generateInitSegment(h),y=this.initData),!((l=y)!=null&&l.length))return B.warn("[passthrough-remuxer.ts]: Failed to generate initSegment."),u;this.emitInitSegment&&(g.tracks=this.initTracks,this.emitInitSegment=!1);const b=cE(h,y),E=lE(y,h),C=E===null?s:E;(e1(c,C,s,b)||g.timescale!==c.timescale&&o)&&(g.initPTS=C-s,c&&c.timescale===1&&B.warn(`Adjusting initPTS by ${g.initPTS-c.baseTime}`),this.initPTS=c={baseTime:g.initPTS,timescale:1});const w=e?C-c.baseTime/c.timescale:d,R=w+b;uE(y,h,c.baseTime/c.timescale),b>0?this.lastEndTime=R:(B.warn("Duration parsed from mp4 should be greater than zero"),this.resetNextTimestamp());const _=!!y.audio,P=!!y.video;let H="";_&&(H+="audio"),P&&(H+="video");const U={data1:h,startPTS:w,startDTS:w,endPTS:R,endDTS:R,type:H,hasAudio:_,hasVideo:P,nb:1,dropped:0};return u.audio=U.type==="audio"?U:void 0,u.video=U.type!=="audio"?U:void 0,u.initSegment=g,u.id3=qf(r,s,c,c),i.samples.length&&(u.text=zf(i,s,c)),u}}function e1(n,e,t,r){if(n===null)return!0;const i=Math.max(r,1),s=e-n.baseTime/n.timescale;return Math.abs(s-t)>i}function eu(n,e){const t=n==null?void 0:n.codec;if(t&&t.length>4)return t;if(e===Ve.AUDIO){if(t==="ec-3"||t==="ac-3"||t==="alac")return t;if(t==="fLaC"||t==="Opus")return Ls(t,!1);const r="mp4a.40.5";return B.info(`Parsed audio codec "${t}" or audio object type not handled. Using "${r}"`),r}return B.warn(`Unhandled video codec "${t}"`),t==="hvc1"||t==="hev1"?"hvc1.1.6.L120.90":t==="av01"?"av01.0.04M.08":"avc1.42e01e"}let hn;try{hn=self.performance.now.bind(self.performance)}catch{B.debug("Unable to use Performance API on this environment"),hn=xr==null?void 0:xr.Date.now}const ps=[{demux:Ux,remux:Zx},{demux:kn,remux:fs},{demux:Mx,remux:fs},{demux:zx,remux:fs}];ps.splice(2,0,{demux:$x,remux:fs});class tu{constructor(e,t,r,i,s){this.async=!1,this.observer=void 0,this.typeSupported=void 0,this.config=void 0,this.vendor=void 0,this.id=void 0,this.demuxer=void 0,this.remuxer=void 0,this.decrypter=void 0,this.probe=void 0,this.decryptionPromise=null,this.transmuxConfig=void 0,this.currentTransmuxState=void 0,this.observer=e,this.typeSupported=t,this.config=r,this.vendor=i,this.id=s}configure(e){this.transmuxConfig=e,this.decrypter&&this.decrypter.reset()}push(e,t,r,i){const s=r.transmuxing;s.executeStart=hn();let o=new Uint8Array(e);const{currentTransmuxState:a,transmuxConfig:l}=this;i&&(this.currentTransmuxState=i);const{contiguous:c,discontinuity:d,trackSwitch:u,accurateTimeOffset:h,timeOffset:g,initSegmentChange:y}=i||a,{audioCodec:b,videoCodec:E,defaultInitPts:C,duration:w,initSegmentData:R}=l,_=t1(o,t);if(_&&_.method==="AES-128"){const j=this.getDecrypter();if(j.isSync()){let Q=j.softwareDecrypt(o,_.key.buffer,_.iv.buffer);if(r.part>-1&&(Q=j.flush()),!Q)return s.executeEnd=hn(),$o(r);o=new Uint8Array(Q)}else return this.decryptionPromise=j.webCryptoDecrypt(o,_.key.buffer,_.iv.buffer).then(Q=>{const F=this.push(Q,null,r);return this.decryptionPromise=null,F}),this.decryptionPromise}const P=this.needsProbing(d,u);if(P){const j=this.configureTransmuxer(o);if(j)return B.warn(`[transmuxer] ${j.message}`),this.observer.emit(T.ERROR,T.ERROR,{type:Le.MEDIA_ERROR,details:$.FRAG_PARSING_ERROR,fatal:!1,error:j,reason:j.message}),s.executeEnd=hn(),$o(r)}(d||u||y||P)&&this.resetInitSegment(R,b,E,w,t),(d||y||P)&&this.resetInitialTimestamp(C),c||this.resetContiguity();const H=this.transmux(o,_,g,h,r),U=this.currentTransmuxState;return U.contiguous=!0,U.discontinuity=!1,U.trackSwitch=!1,s.executeEnd=hn(),H}flush(e){const t=e.transmuxing;t.executeStart=hn();const{decrypter:r,currentTransmuxState:i,decryptionPromise:s}=this;if(s)return s.then(()=>this.flush(e));const o=[],{timeOffset:a}=i;if(r){const u=r.flush();u&&o.push(this.push(u,null,e))}const{demuxer:l,remuxer:c}=this;if(!l||!c)return t.executeEnd=hn(),[$o(e)];const d=l.flush(a);return ms(d)?d.then(u=>(this.flushRemux(o,u,e),o)):(this.flushRemux(o,d,e),o)}flushRemux(e,t,r){const{audioTrack:i,videoTrack:s,id3Track:o,textTrack:a}=t,{accurateTimeOffset:l,timeOffset:c}=this.currentTransmuxState;B.log(`[transmuxer.ts]: Flushed fragment ${r.sn}${r.part>-1?" p: "+r.part:""} of level ${r.level}`);const d=this.remuxer.remux(i,s,o,a,c,l,!0,this.id);e.push({remuxResult:d,chunkMeta:r}),r.transmuxing.executeEnd=hn()}resetInitialTimestamp(e){const{demuxer:t,remuxer:r}=this;!t||!r||(t.resetTimeStamp(e),r.resetTimeStamp(e))}resetContiguity(){const{demuxer:e,remuxer:t}=this;!e||!t||(e.resetContiguity(),t.resetNextTimestamp())}resetInitSegment(e,t,r,i,s){const{demuxer:o,remuxer:a}=this;!o||!a||(o.resetInitSegment(e,t,r,i),a.resetInitSegment(e,t,r,s))}destroy(){this.demuxer&&(this.demuxer.destroy(),this.demuxer=void 0),this.remuxer&&(this.remuxer.destroy(),this.remuxer=void 0)}transmux(e,t,r,i,s){let o;return t&&t.method==="SAMPLE-AES"?o=this.transmuxSampleAes(e,t,r,i,s):o=this.transmuxUnencrypted(e,r,i,s),o}transmuxUnencrypted(e,t,r,i){const{audioTrack:s,videoTrack:o,id3Track:a,textTrack:l}=this.demuxer.demux(e,t,!1,!this.config.progressive);return{remuxResult:this.remuxer.remux(s,o,a,l,t,r,!1,this.id),chunkMeta:i}}transmuxSampleAes(e,t,r,i,s){return this.demuxer.demuxSampleAes(e,t,r).then(o=>({remuxResult:this.remuxer.remux(o.audioTrack,o.videoTrack,o.id3Track,o.textTrack,r,i,!1,this.id),chunkMeta:s}))}configureTransmuxer(e){const{config:t,observer:r,typeSupported:i,vendor:s}=this;let o;for(let h=0,g=ps.length;h<g;h++){var a;if((a=ps[h].demux)!=null&&a.probe(e)){o=ps[h];break}}if(!o)return new Error("Failed to find demuxer by probing fragment data");const l=this.demuxer,c=this.remuxer,d=o.remux,u=o.demux;(!c||!(c instanceof d))&&(this.remuxer=new d(r,t,i,s)),(!l||!(l instanceof u))&&(this.demuxer=new u(r,t,i),this.probe=u.probe)}needsProbing(e,t){return!this.demuxer||!this.remuxer||e||t}getDecrypter(){let e=this.decrypter;return e||(e=this.decrypter=new Al(this.config)),e}}function t1(n,e){let t=null;return n.byteLength>0&&(e==null?void 0:e.key)!=null&&e.iv!==null&&e.method!=null&&(t=e),t}const $o=n=>({remuxResult:{},chunkMeta:n});function ms(n){return"then"in n&&n.then instanceof Function}class n1{constructor(e,t,r,i,s){this.audioCodec=void 0,this.videoCodec=void 0,this.initSegmentData=void 0,this.duration=void 0,this.defaultInitPts=void 0,this.audioCodec=e,this.videoCodec=t,this.initSegmentData=r,this.duration=i,this.defaultInitPts=s||null}}class r1{constructor(e,t,r,i,s,o){this.discontinuity=void 0,this.contiguous=void 0,this.accurateTimeOffset=void 0,this.trackSwitch=void 0,this.timeOffset=void 0,this.initSegmentChange=void 0,this.discontinuity=e,this.contiguous=t,this.accurateTimeOffset=r,this.trackSwitch=i,this.timeOffset=s,this.initSegmentChange=o}}var Vf={exports:{}};(function(n){var e=Object.prototype.hasOwnProperty,t="~";function r(){}Object.create&&(r.prototype=Object.create(null),new r().__proto__||(t=!1));function i(l,c,d){this.fn=l,this.context=c,this.once=d||!1}function s(l,c,d,u,h){if(typeof d!="function")throw new TypeError("The listener must be a function");var g=new i(d,u||l,h),y=t?t+c:c;return l._events[y]?l._events[y].fn?l._events[y]=[l._events[y],g]:l._events[y].push(g):(l._events[y]=g,l._eventsCount++),l}function o(l,c){--l._eventsCount===0?l._events=new r:delete l._events[c]}function a(){this._events=new r,this._eventsCount=0}a.prototype.eventNames=function(){var c=[],d,u;if(this._eventsCount===0)return c;for(u in d=this._events)e.call(d,u)&&c.push(t?u.slice(1):u);return Object.getOwnPropertySymbols?c.concat(Object.getOwnPropertySymbols(d)):c},a.prototype.listeners=function(c){var d=t?t+c:c,u=this._events[d];if(!u)return[];if(u.fn)return[u.fn];for(var h=0,g=u.length,y=new Array(g);h<g;h++)y[h]=u[h].fn;return y},a.prototype.listenerCount=function(c){var d=t?t+c:c,u=this._events[d];return u?u.fn?1:u.length:0},a.prototype.emit=function(c,d,u,h,g,y){var b=t?t+c:c;if(!this._events[b])return!1;var E=this._events[b],C=arguments.length,w,R;if(E.fn){switch(E.once&&this.removeListener(c,E.fn,void 0,!0),C){case 1:return E.fn.call(E.context),!0;case 2:return E.fn.call(E.context,d),!0;case 3:return E.fn.call(E.context,d,u),!0;case 4:return E.fn.call(E.context,d,u,h),!0;case 5:return E.fn.call(E.context,d,u,h,g),!0;case 6:return E.fn.call(E.context,d,u,h,g,y),!0}for(R=1,w=new Array(C-1);R<C;R++)w[R-1]=arguments[R];E.fn.apply(E.context,w)}else{var _=E.length,P;for(R=0;R<_;R++)switch(E[R].once&&this.removeListener(c,E[R].fn,void 0,!0),C){case 1:E[R].fn.call(E[R].context);break;case 2:E[R].fn.call(E[R].context,d);break;case 3:E[R].fn.call(E[R].context,d,u);break;case 4:E[R].fn.call(E[R].context,d,u,h);break;default:if(!w)for(P=1,w=new Array(C-1);P<C;P++)w[P-1]=arguments[P];E[R].fn.apply(E[R].context,w)}}return!0},a.prototype.on=function(c,d,u){return s(this,c,d,u,!1)},a.prototype.once=function(c,d,u){return s(this,c,d,u,!0)},a.prototype.removeListener=function(c,d,u,h){var g=t?t+c:c;if(!this._events[g])return this;if(!d)return o(this,g),this;var y=this._events[g];if(y.fn)y.fn===d&&(!h||y.once)&&(!u||y.context===u)&&o(this,g);else{for(var b=0,E=[],C=y.length;b<C;b++)(y[b].fn!==d||h&&!y[b].once||u&&y[b].context!==u)&&E.push(y[b]);E.length?this._events[g]=E.length===1?E[0]:E:o(this,g)}return this},a.prototype.removeAllListeners=function(c){var d;return c?(d=t?t+c:c,this._events[d]&&o(this,d)):(this._events=new r,this._eventsCount=0),this},a.prototype.off=a.prototype.removeListener,a.prototype.addListener=a.prototype.on,a.prefixed=t,a.EventEmitter=a,n.exports=a})(Vf);var i1=Vf.exports,Tl=Lv(i1);class Wf{constructor(e,t,r,i){this.error=null,this.hls=void 0,this.id=void 0,this.observer=void 0,this.frag=null,this.part=null,this.useWorker=void 0,this.workerContext=null,this.onwmsg=void 0,this.transmuxer=null,this.onTransmuxComplete=void 0,this.onFlush=void 0;const s=e.config;this.hls=e,this.id=t,this.useWorker=!!s.enableWorker,this.onTransmuxComplete=r,this.onFlush=i;const o=(d,u)=>{u=u||{},u.frag=this.frag,u.id=this.id,d===T.ERROR&&(this.error=u.error),this.hls.trigger(d,u)};this.observer=new Tl,this.observer.on(T.FRAG_DECRYPTED,o),this.observer.on(T.ERROR,o);const a=Ir(s.preferManagedMediaSource)||{isTypeSupported:()=>!1},l={mpeg:a.isTypeSupported("audio/mpeg"),mp3:a.isTypeSupported('audio/mp4; codecs="mp3"'),ac3:a.isTypeSupported('audio/mp4; codecs="ac-3"')},c=navigator.vendor;if(this.useWorker&&typeof Worker<"u"&&(s.workerPath||Sx())){try{s.workerPath?(B.log(`loading Web Worker ${s.workerPath} for "${t}"`),this.workerContext=Cx(s.workerPath)):(B.log(`injecting Web Worker for "${t}"`),this.workerContext=Tx()),this.onwmsg=h=>this.onWorkerMessage(h);const{worker:u}=this.workerContext;u.addEventListener("message",this.onwmsg),u.onerror=h=>{const g=new Error(`${h.message}  (${h.filename}:${h.lineno})`);s.enableWorker=!1,B.warn(`Error in "${t}" Web Worker, fallback to inline`),this.hls.trigger(T.ERROR,{type:Le.OTHER_ERROR,details:$.INTERNAL_EXCEPTION,fatal:!1,event:"demuxerWorker",error:g})},u.postMessage({cmd:"init",typeSupported:l,vendor:c,id:t,config:JSON.stringify(s)})}catch(u){B.warn(`Error setting up "${t}" Web Worker, fallback to inline`,u),this.resetWorker(),this.error=null,this.transmuxer=new tu(this.observer,l,s,c,t)}return}this.transmuxer=new tu(this.observer,l,s,c,t)}resetWorker(){if(this.workerContext){const{worker:e,objectURL:t}=this.workerContext;t&&self.URL.revokeObjectURL(t),e.removeEventListener("message",this.onwmsg),e.onerror=null,e.terminate(),this.workerContext=null}}destroy(){if(this.workerContext)this.resetWorker(),this.onwmsg=void 0;else{const t=this.transmuxer;t&&(t.destroy(),this.transmuxer=null)}const e=this.observer;e&&e.removeAllListeners(),this.frag=null,this.observer=null,this.hls=null}push(e,t,r,i,s,o,a,l,c,d){var u,h;c.transmuxing.start=self.performance.now();const{transmuxer:g}=this,y=o?o.start:s.start,b=s.decryptdata,E=this.frag,C=!(E&&s.cc===E.cc),w=!(E&&c.level===E.level),R=E?c.sn-E.sn:-1,_=this.part?c.part-this.part.index:-1,P=R===0&&c.id>1&&c.id===(E==null?void 0:E.stats.chunkCount),H=!w&&(R===1||R===0&&(_===1||P&&_<=0)),U=self.performance.now();(w||R||s.stats.parsing.start===0)&&(s.stats.parsing.start=U),o&&(_||!H)&&(o.stats.parsing.start=U);const j=!(E&&((u=s.initSegment)==null?void 0:u.url)===((h=E.initSegment)==null?void 0:h.url)),Q=new r1(C,H,l,w,y,j);if(!H||C||j){B.log(`[transmuxer-interface, ${s.type}]: Starting new transmux session for sn: ${c.sn} p: ${c.part} level: ${c.level} id: ${c.id}
        discontinuity: ${C}
        trackSwitch: ${w}
        contiguous: ${H}
        accurateTimeOffset: ${l}
        timeOffset: ${y}
        initSegmentChange: ${j}`);const F=new n1(r,i,t,a,d);this.configureTransmuxer(F)}if(this.frag=s,this.part=o,this.workerContext)this.workerContext.worker.postMessage({cmd:"demux",data:e,decryptdata:b,chunkMeta:c,state:Q},e instanceof ArrayBuffer?[e]:[]);else if(g){const F=g.push(e,b,c,Q);ms(F)?(g.async=!0,F.then(Y=>{this.handleTransmuxComplete(Y)}).catch(Y=>{this.transmuxerError(Y,c,"transmuxer-interface push error")})):(g.async=!1,this.handleTransmuxComplete(F))}}flush(e){e.transmuxing.start=self.performance.now();const{transmuxer:t}=this;if(this.workerContext)this.workerContext.worker.postMessage({cmd:"flush",chunkMeta:e});else if(t){let r=t.flush(e);ms(r)||t.async?(ms(r)||(r=Promise.resolve(r)),r.then(s=>{this.handleFlushResult(s,e)}).catch(s=>{this.transmuxerError(s,e,"transmuxer-interface flush error")})):this.handleFlushResult(r,e)}}transmuxerError(e,t,r){this.hls&&(this.error=e,this.hls.trigger(T.ERROR,{type:Le.MEDIA_ERROR,details:$.FRAG_PARSING_ERROR,chunkMeta:t,fatal:!1,error:e,err:e,reason:r}))}handleFlushResult(e,t){e.forEach(r=>{this.handleTransmuxComplete(r)}),this.onFlush(t)}onWorkerMessage(e){const t=e.data,r=this.hls;switch(t.event){case"init":{var i;const s=(i=this.workerContext)==null?void 0:i.objectURL;s&&self.URL.revokeObjectURL(s);break}case"transmuxComplete":{this.handleTransmuxComplete(t.data);break}case"flush":{this.onFlush(t.data);break}case"workerLog":B[t.data.logType]&&B[t.data.logType](t.data.message);break;default:{t.data=t.data||{},t.data.frag=this.frag,t.data.id=this.id,r.trigger(t.event,t.data);break}}}configureTransmuxer(e){const{transmuxer:t}=this;this.workerContext?this.workerContext.worker.postMessage({cmd:"configure",config:e}):t&&t.configure(e)}handleTransmuxComplete(e){e.chunkMeta.transmuxing.end=self.performance.now(),this.onTransmuxComplete(e)}}function Yf(n,e){if(n.length!==e.length)return!1;for(let t=0;t<n.length;t++)if(!Tr(n[t].attrs,e[t].attrs))return!1;return!0}function Tr(n,e,t){const r=n["STABLE-RENDITION-ID"];return r&&!t?r===e["STABLE-RENDITION-ID"]:!(t||["LANGUAGE","NAME","CHARACTERISTICS","AUTOSELECT","DEFAULT","FORCED","ASSOC-LANGUAGE"]).some(i=>n[i]!==e[i])}function ka(n,e){return e.label.toLowerCase()===n.name.toLowerCase()&&(!e.language||e.language.toLowerCase()===(n.lang||"").toLowerCase())}const nu=100;class s1 extends bl{constructor(e,t,r){super(e,t,r,"[audio-stream-controller]",ke.AUDIO),this.videoBuffer=null,this.videoTrackCC=-1,this.waitingVideoCC=-1,this.bufferedTrack=null,this.switchingTrack=null,this.trackId=-1,this.waitingData=null,this.mainDetails=null,this.flushing=!1,this.bufferFlushed=!1,this.cachedTrackLoadedData=null,this._registerListeners()}onHandlerDestroying(){this._unregisterListeners(),super.onHandlerDestroying(),this.mainDetails=null,this.bufferedTrack=null,this.switchingTrack=null}_registerListeners(){const{hls:e}=this;e.on(T.MEDIA_ATTACHED,this.onMediaAttached,this),e.on(T.MEDIA_DETACHING,this.onMediaDetaching,this),e.on(T.MANIFEST_LOADING,this.onManifestLoading,this),e.on(T.LEVEL_LOADED,this.onLevelLoaded,this),e.on(T.AUDIO_TRACKS_UPDATED,this.onAudioTracksUpdated,this),e.on(T.AUDIO_TRACK_SWITCHING,this.onAudioTrackSwitching,this),e.on(T.AUDIO_TRACK_LOADED,this.onAudioTrackLoaded,this),e.on(T.ERROR,this.onError,this),e.on(T.BUFFER_RESET,this.onBufferReset,this),e.on(T.BUFFER_CREATED,this.onBufferCreated,this),e.on(T.BUFFER_FLUSHING,this.onBufferFlushing,this),e.on(T.BUFFER_FLUSHED,this.onBufferFlushed,this),e.on(T.INIT_PTS_FOUND,this.onInitPtsFound,this),e.on(T.FRAG_BUFFERED,this.onFragBuffered,this)}_unregisterListeners(){const{hls:e}=this;e.off(T.MEDIA_ATTACHED,this.onMediaAttached,this),e.off(T.MEDIA_DETACHING,this.onMediaDetaching,this),e.off(T.MANIFEST_LOADING,this.onManifestLoading,this),e.off(T.LEVEL_LOADED,this.onLevelLoaded,this),e.off(T.AUDIO_TRACKS_UPDATED,this.onAudioTracksUpdated,this),e.off(T.AUDIO_TRACK_SWITCHING,this.onAudioTrackSwitching,this),e.off(T.AUDIO_TRACK_LOADED,this.onAudioTrackLoaded,this),e.off(T.ERROR,this.onError,this),e.off(T.BUFFER_RESET,this.onBufferReset,this),e.off(T.BUFFER_CREATED,this.onBufferCreated,this),e.off(T.BUFFER_FLUSHING,this.onBufferFlushing,this),e.off(T.BUFFER_FLUSHED,this.onBufferFlushed,this),e.off(T.INIT_PTS_FOUND,this.onInitPtsFound,this),e.off(T.FRAG_BUFFERED,this.onFragBuffered,this)}onInitPtsFound(e,{frag:t,id:r,initPTS:i,timescale:s}){if(r==="main"){const o=t.cc;this.initPTS[t.cc]={baseTime:i,timescale:s},this.log(`InitPTS for cc: ${o} found from main: ${i}`),this.videoTrackCC=o,this.state===J.WAITING_INIT_PTS&&this.tick()}}startLoad(e){if(!this.levels){this.startPosition=e,this.state=J.STOPPED;return}const t=this.lastCurrentTime;this.stopLoad(),this.setInterval(nu),t>0&&e===-1?(this.log(`Override startPosition with lastCurrentTime @${t.toFixed(3)}`),e=t,this.state=J.IDLE):(this.loadedmetadata=!1,this.state=J.WAITING_TRACK),this.nextLoadPosition=this.startPosition=this.lastCurrentTime=e,this.tick()}doTick(){switch(this.state){case J.IDLE:this.doTickIdle();break;case J.WAITING_TRACK:{var e;const{levels:r,trackId:i}=this,s=r==null||(e=r[i])==null?void 0:e.details;if(s){if(this.waitForCdnTuneIn(s))break;this.state=J.WAITING_INIT_PTS}break}case J.FRAG_LOADING_WAITING_RETRY:{var t;const r=performance.now(),i=this.retryDate;if(!i||r>=i||(t=this.media)!=null&&t.seeking){const{levels:s,trackId:o}=this;this.log("RetryDate reached, switch back to IDLE state"),this.resetStartWhenNotLoaded((s==null?void 0:s[o])||null),this.state=J.IDLE}break}case J.WAITING_INIT_PTS:{const r=this.waitingData;if(r){const{frag:i,part:s,cache:o,complete:a}=r;if(this.initPTS[i.cc]!==void 0){this.waitingData=null,this.waitingVideoCC=-1,this.state=J.FRAG_LOADING;const l=o.flush(),c={frag:i,part:s,payload:l,networkDetails:null};this._handleFragmentLoadProgress(c),a&&super._handleFragmentLoadComplete(c)}else if(this.videoTrackCC!==this.waitingVideoCC)this.log(`Waiting fragment cc (${i.cc}) cancelled because video is at cc ${this.videoTrackCC}`),this.clearWaitingFragment();else{const l=this.getLoadPosition(),c=Xe.bufferInfo(this.mediaBuffer,l,this.config.maxBufferHole);Ca(c.end,this.config.maxFragLookUpTolerance,i)<0&&(this.log(`Waiting fragment cc (${i.cc}) @ ${i.start} cancelled because another fragment at ${c.end} is needed`),this.clearWaitingFragment())}}else this.state=J.IDLE}}this.onTickEnd()}clearWaitingFragment(){const e=this.waitingData;e&&(this.fragmentTracker.removeFragment(e.frag),this.waitingData=null,this.waitingVideoCC=-1,this.state=J.IDLE)}resetLoadingState(){this.clearWaitingFragment(),super.resetLoadingState()}onTickEnd(){const{media:e}=this;e!=null&&e.readyState&&(this.lastCurrentTime=e.currentTime)}doTickIdle(){const{hls:e,levels:t,media:r,trackId:i}=this,s=e.config;if(!r&&(this.startFragRequested||!s.startFragPrefetch)||!(t!=null&&t[i]))return;const o=t[i],a=o.details;if(!a||a.live&&this.levelLastLoaded!==o||this.waitForCdnTuneIn(a)){this.state=J.WAITING_TRACK;return}const l=this.mediaBuffer?this.mediaBuffer:this.media;this.bufferFlushed&&l&&(this.bufferFlushed=!1,this.afterBufferFlushed(l,Ve.AUDIO,ke.AUDIO));const c=this.getFwdBufferInfo(l,ke.AUDIO);if(c===null)return;const{bufferedTrack:d,switchingTrack:u}=this;if(!u&&this._streamEnded(c,a)){e.trigger(T.BUFFER_EOS,{type:"audio"}),this.state=J.ENDED;return}const h=this.getFwdBufferInfo(this.videoBuffer?this.videoBuffer:this.media,ke.MAIN),g=c.len,y=this.getMaxBufferLength(h==null?void 0:h.len),b=a.fragments,E=b[0].start;let C=this.flushing?this.getLoadPosition():c.end;if(u&&r){const P=this.getLoadPosition();d&&!Tr(u.attrs,d.attrs)&&(C=P),a.PTSKnown&&P<E&&(c.end>E||c.nextStart)&&(this.log("Alt audio track ahead of main track, seek to start of alt audio track"),r.currentTime=E+.05)}if(g>=y&&!u&&C<b[b.length-1].start)return;let w=this.getNextFragment(C,a),R=!1;if(w&&this.isLoopLoading(w,C)&&(R=!!w.gap,w=this.getNextFragmentLoopLoading(w,a,c,ke.MAIN,y)),!w){this.bufferFlushed=!0;return}const _=h&&w.start>h.end+a.targetduration;if(_||!(h!=null&&h.len)&&c.len){const P=this.getAppendedFrag(w.start,ke.MAIN);if(P===null||(R||(R=!!P.gap||!!_&&h.len===0),_&&!R||R&&c.nextStart&&c.nextStart<P.end))return}this.loadFragment(w,o,C)}getMaxBufferLength(e){const t=super.getMaxBufferLength();return e?Math.min(Math.max(t,e),this.config.maxMaxBufferLength):t}onMediaDetaching(){this.videoBuffer=null,this.bufferFlushed=this.flushing=!1,super.onMediaDetaching()}onAudioTracksUpdated(e,{audioTracks:t}){this.resetTransmuxer(),this.levels=t.map(r=>new Sr(r))}onAudioTrackSwitching(e,t){const r=!!t.url;this.trackId=t.id;const{fragCurrent:i}=this;i&&(i.abortRequests(),this.removeUnbufferedFrags(i.start)),this.resetLoadingState(),r?this.setInterval(nu):this.resetTransmuxer(),r?(this.switchingTrack=t,this.state=J.IDLE,this.flushAudioIfNeeded(t)):(this.switchingTrack=null,this.bufferedTrack=t,this.state=J.STOPPED),this.tick()}onManifestLoading(){this.fragmentTracker.removeAllFragments(),this.startPosition=this.lastCurrentTime=0,this.bufferFlushed=this.flushing=!1,this.levels=this.mainDetails=this.waitingData=this.bufferedTrack=this.cachedTrackLoadedData=this.switchingTrack=null,this.startFragRequested=!1,this.trackId=this.videoTrackCC=this.waitingVideoCC=-1}onLevelLoaded(e,t){this.mainDetails=t.details,this.cachedTrackLoadedData!==null&&(this.hls.trigger(T.AUDIO_TRACK_LOADED,this.cachedTrackLoadedData),this.cachedTrackLoadedData=null)}onAudioTrackLoaded(e,t){var r;if(this.mainDetails==null){this.cachedTrackLoadedData=t;return}const{levels:i}=this,{details:s,id:o}=t;if(!i){this.warn(`Audio tracks were reset while loading level ${o}`);return}this.log(`Audio track ${o} loaded [${s.startSN},${s.endSN}]${s.lastPartSn?`[part-${s.lastPartSn}-${s.lastPartIndex}]`:""},duration:${s.totalduration}`);const a=i[o];let l=0;if(s.live||(r=a.details)!=null&&r.live){this.checkLiveUpdate(s);const d=this.mainDetails;if(s.deltaUpdateFailed||!d)return;if(!a.details&&s.hasProgramDateTime&&d.hasProgramDateTime)Ps(s,d),l=s.fragments[0].start;else{var c;l=this.alignPlaylists(s,a.details,(c=this.levelLastLoaded)==null?void 0:c.details)}}a.details=s,this.levelLastLoaded=a,!this.startFragRequested&&(this.mainDetails||!s.live)&&this.setStartPosition(this.mainDetails||s,l),this.state===J.WAITING_TRACK&&!this.waitForCdnTuneIn(s)&&(this.state=J.IDLE),this.tick()}_handleFragmentLoadProgress(e){var t;const{frag:r,part:i,payload:s}=e,{config:o,trackId:a,levels:l}=this;if(!l){this.warn(`Audio tracks were reset while fragment load was in progress. Fragment ${r.sn} of level ${r.level} will not be buffered`);return}const c=l[a];if(!c){this.warn("Audio track is undefined on fragment load progress");return}const d=c.details;if(!d){this.warn("Audio track details undefined on fragment load progress"),this.removeUnbufferedFrags(r.start);return}const u=o.defaultAudioCodec||c.audioCodec||"mp4a.40.2";let h=this.transmuxer;h||(h=this.transmuxer=new Wf(this.hls,ke.AUDIO,this._handleTransmuxComplete.bind(this),this._handleTransmuxerFlush.bind(this)));const g=this.initPTS[r.cc],y=(t=r.initSegment)==null?void 0:t.data;if(g!==void 0){const E=i?i.index:-1,C=E!==-1,w=new yl(r.level,r.sn,r.stats.chunkCount,s.byteLength,E,C);h.push(s,y,u,"",r,i,d.totalduration,!1,w,g)}else{this.log(`Unknown video PTS for cc ${r.cc}, waiting for video PTS before demuxing audio frag ${r.sn} of [${d.startSN} ,${d.endSN}],track ${a}`);const{cache:b}=this.waitingData=this.waitingData||{frag:r,part:i,cache:new Df,complete:!1};b.push(new Uint8Array(s)),this.waitingVideoCC=this.videoTrackCC,this.state=J.WAITING_INIT_PTS}}_handleFragmentLoadComplete(e){if(this.waitingData){this.waitingData.complete=!0;return}super._handleFragmentLoadComplete(e)}onBufferReset(){this.mediaBuffer=this.videoBuffer=null,this.loadedmetadata=!1}onBufferCreated(e,t){const r=t.tracks.audio;r&&(this.mediaBuffer=r.buffer||null),t.tracks.video&&(this.videoBuffer=t.tracks.video.buffer||null)}onFragBuffered(e,t){const{frag:r,part:i}=t;if(r.type!==ke.AUDIO){if(!this.loadedmetadata&&r.type===ke.MAIN){const s=this.videoBuffer||this.media;s&&Xe.getBuffered(s).length&&(this.loadedmetadata=!0)}return}if(this.fragContextChanged(r)){this.warn(`Fragment ${r.sn}${i?" p: "+i.index:""} of level ${r.level} finished buffering, but was aborted. state: ${this.state}, audioSwitch: ${this.switchingTrack?this.switchingTrack.name:"false"}`);return}if(r.sn!=="initSegment"){this.fragPrevious=r;const s=this.switchingTrack;s&&(this.bufferedTrack=s,this.switchingTrack=null,this.hls.trigger(T.AUDIO_TRACK_SWITCHED,pt({},s)))}this.fragBufferedComplete(r,i)}onError(e,t){var r;if(t.fatal){this.state=J.ERROR;return}switch(t.details){case $.FRAG_GAP:case $.FRAG_PARSING_ERROR:case $.FRAG_DECRYPT_ERROR:case $.FRAG_LOAD_ERROR:case $.FRAG_LOAD_TIMEOUT:case $.KEY_LOAD_ERROR:case $.KEY_LOAD_TIMEOUT:this.onFragmentOrKeyLoadError(ke.AUDIO,t);break;case $.AUDIO_TRACK_LOAD_ERROR:case $.AUDIO_TRACK_LOAD_TIMEOUT:case $.LEVEL_PARSING_ERROR:!t.levelRetry&&this.state===J.WAITING_TRACK&&((r=t.context)==null?void 0:r.type)===Ue.AUDIO_TRACK&&(this.state=J.IDLE);break;case $.BUFFER_APPEND_ERROR:case $.BUFFER_FULL_ERROR:if(!t.parent||t.parent!=="audio")return;if(t.details===$.BUFFER_APPEND_ERROR){this.resetLoadingState();return}this.reduceLengthAndFlushBuffer(t)&&(this.bufferedTrack=null,super.flushMainBuffer(0,Number.POSITIVE_INFINITY,"audio"));break;case $.INTERNAL_EXCEPTION:this.recoverWorkerError(t);break}}onBufferFlushing(e,{type:t}){t!==Ve.VIDEO&&(this.flushing=!0)}onBufferFlushed(e,{type:t}){if(t!==Ve.VIDEO){this.flushing=!1,this.bufferFlushed=!0,this.state===J.ENDED&&(this.state=J.IDLE);const r=this.mediaBuffer||this.media;r&&(this.afterBufferFlushed(r,t,ke.AUDIO),this.tick())}}_handleTransmuxComplete(e){var t;const r="audio",{hls:i}=this,{remuxResult:s,chunkMeta:o}=e,a=this.getCurrentContext(o);if(!a){this.resetWhenMissingContext(o);return}const{frag:l,part:c,level:d}=a,{details:u}=d,{audio:h,text:g,id3:y,initSegment:b}=s;if(this.fragContextChanged(l)||!u){this.fragmentTracker.removeFragment(l);return}if(this.state=J.PARSING,this.switchingTrack&&h&&this.completeAudioSwitch(this.switchingTrack),b!=null&&b.tracks){const E=l.initSegment||l;this._bufferInitSegment(d,b.tracks,E,o),i.trigger(T.FRAG_PARSING_INIT_SEGMENT,{frag:E,id:r,tracks:b.tracks})}if(h){const{startPTS:E,endPTS:C,startDTS:w,endDTS:R}=h;c&&(c.elementaryStreams[Ve.AUDIO]={startPTS:E,endPTS:C,startDTS:w,endDTS:R}),l.setElementaryStreamInfo(Ve.AUDIO,E,C,w,R),this.bufferFragmentData(h,l,c,o)}if(y!=null&&(t=y.samples)!=null&&t.length){const E=ot({id:r,frag:l,details:u},y);i.trigger(T.FRAG_PARSING_METADATA,E)}if(g){const E=ot({id:r,frag:l,details:u},g);i.trigger(T.FRAG_PARSING_USERDATA,E)}}_bufferInitSegment(e,t,r,i){if(this.state!==J.PARSING)return;t.video&&delete t.video;const s=t.audio;if(!s)return;s.id="audio";const o=e.audioCodec;this.log(`Init audio buffer, container:${s.container}, codecs[level/parsed]=[${o}/${s.codec}]`),o&&o.split(",").length===1&&(s.levelCodec=o),this.hls.trigger(T.BUFFER_CODECS,t);const a=s.initSegment;if(a!=null&&a.byteLength){const l={type:"audio",frag:r,part:null,chunkMeta:i,parent:r.type,data:a};this.hls.trigger(T.BUFFER_APPENDING,l)}this.tickImmediate()}loadFragment(e,t,r){const i=this.fragmentTracker.getState(e);if(this.fragCurrent=e,this.switchingTrack||i===ht.NOT_LOADED||i===ht.PARTIAL){var s;if(e.sn==="initSegment")this._loadInitSegment(e,t);else if((s=t.details)!=null&&s.live&&!this.initPTS[e.cc]){this.log(`Waiting for video PTS in continuity counter ${e.cc} of live stream before loading audio fragment ${e.sn} of level ${this.trackId}`),this.state=J.WAITING_INIT_PTS;const o=this.mainDetails;o&&o.fragments[0].start!==t.details.fragments[0].start&&Ps(t.details,o)}else this.startFragRequested=!0,super.loadFragment(e,t,r)}else this.clearTrackerIfNeeded(e)}flushAudioIfNeeded(e){const{media:t,bufferedTrack:r}=this,i=r==null?void 0:r.attrs,s=e.attrs;t&&i&&(i.CHANNELS!==s.CHANNELS||r.name!==e.name||r.lang!==e.lang)&&(this.log("Switching audio track : flushing all audio"),super.flushMainBuffer(0,Number.POSITIVE_INFINITY,"audio"),this.bufferedTrack=null)}completeAudioSwitch(e){const{hls:t}=this;this.flushAudioIfNeeded(e),this.bufferedTrack=e,this.switchingTrack=null,t.trigger(T.AUDIO_TRACK_SWITCHED,pt({},e))}}class o1 extends gl{constructor(e){super(e,"[audio-track-controller]"),this.tracks=[],this.groupIds=null,this.tracksInGroup=[],this.trackId=-1,this.currentTrack=null,this.selectDefaultTrack=!0,this.registerListeners()}registerListeners(){const{hls:e}=this;e.on(T.MANIFEST_LOADING,this.onManifestLoading,this),e.on(T.MANIFEST_PARSED,this.onManifestParsed,this),e.on(T.LEVEL_LOADING,this.onLevelLoading,this),e.on(T.LEVEL_SWITCHING,this.onLevelSwitching,this),e.on(T.AUDIO_TRACK_LOADED,this.onAudioTrackLoaded,this),e.on(T.ERROR,this.onError,this)}unregisterListeners(){const{hls:e}=this;e.off(T.MANIFEST_LOADING,this.onManifestLoading,this),e.off(T.MANIFEST_PARSED,this.onManifestParsed,this),e.off(T.LEVEL_LOADING,this.onLevelLoading,this),e.off(T.LEVEL_SWITCHING,this.onLevelSwitching,this),e.off(T.AUDIO_TRACK_LOADED,this.onAudioTrackLoaded,this),e.off(T.ERROR,this.onError,this)}destroy(){this.unregisterListeners(),this.tracks.length=0,this.tracksInGroup.length=0,this.currentTrack=null,super.destroy()}onManifestLoading(){this.tracks=[],this.tracksInGroup=[],this.groupIds=null,this.currentTrack=null,this.trackId=-1,this.selectDefaultTrack=!0}onManifestParsed(e,t){this.tracks=t.audioTracks||[]}onAudioTrackLoaded(e,t){const{id:r,groupId:i,details:s}=t,o=this.tracksInGroup[r];if(!o||o.groupId!==i){this.warn(`Audio track with id:${r} and group:${i} not found in active group ${o==null?void 0:o.groupId}`);return}const a=o.details;o.details=t.details,this.log(`Audio track ${r} "${o.name}" lang:${o.lang} group:${i} loaded [${s.startSN}-${s.endSN}]`),r===this.trackId&&this.playlistLoaded(r,t,a)}onLevelLoading(e,t){this.switchLevel(t.level)}onLevelSwitching(e,t){this.switchLevel(t.level)}switchLevel(e){const t=this.hls.levels[e];if(!t)return;const r=t.audioGroups||null,i=this.groupIds;let s=this.currentTrack;if(!r||(i==null?void 0:i.length)!==(r==null?void 0:r.length)||r!=null&&r.some(a=>(i==null?void 0:i.indexOf(a))===-1)){this.groupIds=r,this.trackId=-1,this.currentTrack=null;const a=this.tracks.filter(h=>!r||r.indexOf(h.groupId)!==-1);if(a.length)this.selectDefaultTrack&&!a.some(h=>h.default)&&(this.selectDefaultTrack=!1),a.forEach((h,g)=>{h.id=g});else if(!s&&!this.tracksInGroup.length)return;this.tracksInGroup=a;const l=this.hls.config.audioPreference;if(!s&&l){const h=en(l,a,tr);if(h>-1)s=a[h];else{const g=en(l,this.tracks);s=this.tracks[g]}}let c=this.findTrackId(s);c===-1&&s&&(c=this.findTrackId(null));const d={audioTracks:a};this.log(`Updating audio tracks, ${a.length} track(s) found in group(s): ${r==null?void 0:r.join(",")}`),this.hls.trigger(T.AUDIO_TRACKS_UPDATED,d);const u=this.trackId;if(c!==-1&&u===-1)this.setAudioTrack(c);else if(a.length&&u===-1){var o;const h=new Error(`No audio track selected for current audio group-ID(s): ${(o=this.groupIds)==null?void 0:o.join(",")} track count: ${a.length}`);this.warn(h.message),this.hls.trigger(T.ERROR,{type:Le.MEDIA_ERROR,details:$.AUDIO_TRACK_LOAD_ERROR,fatal:!0,error:h})}}else this.shouldReloadPlaylist(s)&&this.setAudioTrack(this.trackId)}onError(e,t){t.fatal||!t.context||t.context.type===Ue.AUDIO_TRACK&&t.context.id===this.trackId&&(!this.groupIds||this.groupIds.indexOf(t.context.groupId)!==-1)&&(this.requestScheduled=-1,this.checkRetry(t))}get allAudioTracks(){return this.tracks}get audioTracks(){return this.tracksInGroup}get audioTrack(){return this.trackId}set audioTrack(e){this.selectDefaultTrack=!1,this.setAudioTrack(e)}setAudioOption(e){const t=this.hls;if(t.config.audioPreference=e,e){const r=this.allAudioTracks;if(this.selectDefaultTrack=!1,r.length){const i=this.currentTrack;if(i&&fr(e,i,tr))return i;const s=en(e,this.tracksInGroup,tr);if(s>-1){const o=this.tracksInGroup[s];return this.setAudioTrack(s),o}else if(i){let o=t.loadLevel;o===-1&&(o=t.firstAutoLevel);const a=ox(e,t.levels,r,o,tr);if(a===-1)return null;t.nextLoadLevel=a}if(e.channels||e.audioCodec){const o=en(e,r);if(o>-1)return r[o]}}}return null}setAudioTrack(e){const t=this.tracksInGroup;if(e<0||e>=t.length){this.warn(`Invalid audio track id: ${e}`);return}this.clearTimer(),this.selectDefaultTrack=!1;const r=this.currentTrack,i=t[e],s=i.details&&!i.details.live;if(e===this.trackId&&i===r&&s||(this.log(`Switching to audio-track ${e} "${i.name}" lang:${i.lang} group:${i.groupId} channels:${i.channels}`),this.trackId=e,this.currentTrack=i,this.hls.trigger(T.AUDIO_TRACK_SWITCHING,pt({},i)),s))return;const o=this.switchParams(i.url,r==null?void 0:r.details);this.loadPlaylist(o)}findTrackId(e){const t=this.tracksInGroup;for(let r=0;r<t.length;r++){const i=t[r];if(!(this.selectDefaultTrack&&!i.default)&&(!e||fr(e,i,tr)))return r}if(e){const{name:r,lang:i,assocLang:s,characteristics:o,audioCodec:a,channels:l}=e;for(let c=0;c<t.length;c++){const d=t[c];if(fr({name:r,lang:i,assocLang:s,characteristics:o,audioCodec:a,channels:l},d,tr))return c}for(let c=0;c<t.length;c++){const d=t[c];if(Tr(e.attrs,d.attrs,["LANGUAGE","ASSOC-LANGUAGE","CHARACTERISTICS"]))return c}for(let c=0;c<t.length;c++){const d=t[c];if(Tr(e.attrs,d.attrs,["LANGUAGE"]))return c}}return-1}loadPlaylist(e){const t=this.currentTrack;if(this.shouldLoadPlaylist(t)&&t){super.loadPlaylist();const r=t.id,i=t.groupId;let s=t.url;if(e)try{s=e.addDirectives(s)}catch(o){this.warn(`Could not construct new URL with HLS Delivery Directives: ${o}`)}this.log(`loading audio-track playlist ${r} "${t.name}" lang:${t.lang} group:${i}`),this.clearTimer(),this.hls.trigger(T.AUDIO_TRACK_LOADING,{url:s,id:r,groupId:i,deliveryDirectives:e||null})}}}const ru=500;class a1 extends bl{constructor(e,t,r){super(e,t,r,"[subtitle-stream-controller]",ke.SUBTITLE),this.currentTrackId=-1,this.tracksBuffered=[],this.mainDetails=null,this._registerListeners()}onHandlerDestroying(){this._unregisterListeners(),super.onHandlerDestroying(),this.mainDetails=null}_registerListeners(){const{hls:e}=this;e.on(T.MEDIA_ATTACHED,this.onMediaAttached,this),e.on(T.MEDIA_DETACHING,this.onMediaDetaching,this),e.on(T.MANIFEST_LOADING,this.onManifestLoading,this),e.on(T.LEVEL_LOADED,this.onLevelLoaded,this),e.on(T.ERROR,this.onError,this),e.on(T.SUBTITLE_TRACKS_UPDATED,this.onSubtitleTracksUpdated,this),e.on(T.SUBTITLE_TRACK_SWITCH,this.onSubtitleTrackSwitch,this),e.on(T.SUBTITLE_TRACK_LOADED,this.onSubtitleTrackLoaded,this),e.on(T.SUBTITLE_FRAG_PROCESSED,this.onSubtitleFragProcessed,this),e.on(T.BUFFER_FLUSHING,this.onBufferFlushing,this),e.on(T.FRAG_BUFFERED,this.onFragBuffered,this)}_unregisterListeners(){const{hls:e}=this;e.off(T.MEDIA_ATTACHED,this.onMediaAttached,this),e.off(T.MEDIA_DETACHING,this.onMediaDetaching,this),e.off(T.MANIFEST_LOADING,this.onManifestLoading,this),e.off(T.LEVEL_LOADED,this.onLevelLoaded,this),e.off(T.ERROR,this.onError,this),e.off(T.SUBTITLE_TRACKS_UPDATED,this.onSubtitleTracksUpdated,this),e.off(T.SUBTITLE_TRACK_SWITCH,this.onSubtitleTrackSwitch,this),e.off(T.SUBTITLE_TRACK_LOADED,this.onSubtitleTrackLoaded,this),e.off(T.SUBTITLE_FRAG_PROCESSED,this.onSubtitleFragProcessed,this),e.off(T.BUFFER_FLUSHING,this.onBufferFlushing,this),e.off(T.FRAG_BUFFERED,this.onFragBuffered,this)}startLoad(e){this.stopLoad(),this.state=J.IDLE,this.setInterval(ru),this.nextLoadPosition=this.startPosition=this.lastCurrentTime=e,this.tick()}onManifestLoading(){this.mainDetails=null,this.fragmentTracker.removeAllFragments()}onMediaDetaching(){this.tracksBuffered=[],super.onMediaDetaching()}onLevelLoaded(e,t){this.mainDetails=t.details}onSubtitleFragProcessed(e,t){const{frag:r,success:i}=t;if(this.fragPrevious=r,this.state=J.IDLE,!i)return;const s=this.tracksBuffered[this.currentTrackId];if(!s)return;let o;const a=r.start;for(let c=0;c<s.length;c++)if(a>=s[c].start&&a<=s[c].end){o=s[c];break}const l=r.start+r.duration;o?o.end=l:(o={start:a,end:l},s.push(o)),this.fragmentTracker.fragBuffered(r),this.fragBufferedComplete(r,null)}onBufferFlushing(e,t){const{startOffset:r,endOffset:i}=t;if(r===0&&i!==Number.POSITIVE_INFINITY){const s=i-1;if(s<=0)return;t.endOffsetSubtitles=Math.max(0,s),this.tracksBuffered.forEach(o=>{for(let a=0;a<o.length;){if(o[a].end<=s){o.shift();continue}else if(o[a].start<s)o[a].start=s;else break;a++}}),this.fragmentTracker.removeFragmentsInRange(r,s,ke.SUBTITLE)}}onFragBuffered(e,t){if(!this.loadedmetadata&&t.frag.type===ke.MAIN){var r;(r=this.media)!=null&&r.buffered.length&&(this.loadedmetadata=!0)}}onError(e,t){const r=t.frag;(r==null?void 0:r.type)===ke.SUBTITLE&&(this.fragCurrent&&this.fragCurrent.abortRequests(),this.state!==J.STOPPED&&(this.state=J.IDLE))}onSubtitleTracksUpdated(e,{subtitleTracks:t}){if(this.levels&&Yf(this.levels,t)){this.levels=t.map(r=>new Sr(r));return}this.tracksBuffered=[],this.levels=t.map(r=>{const i=new Sr(r);return this.tracksBuffered[i.id]=[],i}),this.fragmentTracker.removeFragmentsInRange(0,Number.POSITIVE_INFINITY,ke.SUBTITLE),this.fragPrevious=null,this.mediaBuffer=null}onSubtitleTrackSwitch(e,t){var r;if(this.currentTrackId=t.id,!((r=this.levels)!=null&&r.length)||this.currentTrackId===-1){this.clearInterval();return}const i=this.levels[this.currentTrackId];i!=null&&i.details?this.mediaBuffer=this.mediaBufferTimeRanges:this.mediaBuffer=null,i&&this.setInterval(ru)}onSubtitleTrackLoaded(e,t){var r;const{currentTrackId:i,levels:s}=this,{details:o,id:a}=t;if(!s){this.warn(`Subtitle tracks were reset while loading level ${a}`);return}const l=s[i];if(a>=s.length||a!==i||!l)return;this.log(`Subtitle track ${a} loaded [${o.startSN},${o.endSN}]${o.lastPartSn?`[part-${o.lastPartSn}-${o.lastPartIndex}]`:""},duration:${o.totalduration}`),this.mediaBuffer=this.mediaBufferTimeRanges;let c=0;if(o.live||(r=l.details)!=null&&r.live){const u=this.mainDetails;if(o.deltaUpdateFailed||!u)return;const h=u.fragments[0];if(!l.details)o.hasProgramDateTime&&u.hasProgramDateTime?(Ps(o,u),c=o.fragments[0].start):h&&(c=h.start,Ta(o,c));else{var d;c=this.alignPlaylists(o,l.details,(d=this.levelLastLoaded)==null?void 0:d.details),c===0&&h&&(c=h.start,Ta(o,c))}}l.details=o,this.levelLastLoaded=l,!this.startFragRequested&&(this.mainDetails||!o.live)&&this.setStartPosition(this.mainDetails||o,c),this.tick(),o.live&&!this.fragCurrent&&this.media&&this.state===J.IDLE&&(Ds(null,o.fragments,this.media.currentTime,0)||(this.warn("Subtitle playlist not aligned with playback"),l.details=void 0))}_handleFragmentLoadComplete(e){const{frag:t,payload:r}=e,i=t.decryptdata,s=this.hls;if(!this.fragContextChanged(t)&&r&&r.byteLength>0&&i!=null&&i.key&&i.iv&&i.method==="AES-128"){const o=performance.now();this.decrypter.decrypt(new Uint8Array(r),i.key.buffer,i.iv.buffer).catch(a=>{throw s.trigger(T.ERROR,{type:Le.MEDIA_ERROR,details:$.FRAG_DECRYPT_ERROR,fatal:!1,error:a,reason:a.message,frag:t}),a}).then(a=>{const l=performance.now();s.trigger(T.FRAG_DECRYPTED,{frag:t,payload:a,stats:{tstart:o,tdecrypt:l}})}).catch(a=>{this.warn(`${a.name}: ${a.message}`),this.state=J.IDLE})}}doTick(){if(!this.media){this.state=J.IDLE;return}if(this.state===J.IDLE){const{currentTrackId:e,levels:t}=this,r=t==null?void 0:t[e];if(!r||!t.length||!r.details)return;const{config:i}=this,s=this.getLoadPosition(),o=Xe.bufferedInfo(this.tracksBuffered[this.currentTrackId]||[],s,i.maxBufferHole),{end:a,len:l}=o,c=this.getFwdBufferInfo(this.media,ke.MAIN),d=r.details,u=this.getMaxBufferLength(c==null?void 0:c.len)+d.levelTargetDuration;if(l>u)return;const h=d.fragments,g=h.length,y=d.edge;let b=null;const E=this.fragPrevious;if(a<y){const C=i.maxFragLookUpTolerance,w=a>y-C?0:C;b=Ds(E,h,Math.max(h[0].start,a),w),!b&&E&&E.start<h[0].start&&(b=h[0])}else b=h[g-1];if(!b)return;if(b=this.mapToInitFragWhenRequired(b),b.sn!=="initSegment"){const C=b.sn-d.startSN,w=h[C-1];w&&w.cc===b.cc&&this.fragmentTracker.getState(w)===ht.NOT_LOADED&&(b=w)}this.fragmentTracker.getState(b)===ht.NOT_LOADED&&this.loadFragment(b,r,a)}}getMaxBufferLength(e){const t=super.getMaxBufferLength();return e?Math.max(t,e):t}loadFragment(e,t,r){this.fragCurrent=e,e.sn==="initSegment"?this._loadInitSegment(e,t):(this.startFragRequested=!0,super.loadFragment(e,t,r))}get mediaBufferTimeRanges(){return new l1(this.tracksBuffered[this.currentTrackId]||[])}}class l1{constructor(e){this.buffered=void 0;const t=(r,i,s)=>{if(i=i>>>0,i>s-1)throw new DOMException(`Failed to execute '${r}' on 'TimeRanges': The index provided (${i}) is greater than the maximum bound (${s})`);return e[i][r]};this.buffered={get length(){return e.length},end(r){return t("end",r,e.length)},start(r){return t("start",r,e.length)}}}}class c1 extends gl{constructor(e){super(e,"[subtitle-track-controller]"),this.media=null,this.tracks=[],this.groupIds=null,this.tracksInGroup=[],this.trackId=-1,this.currentTrack=null,this.selectDefaultTrack=!0,this.queuedDefaultTrack=-1,this.asyncPollTrackChange=()=>this.pollTrackChange(0),this.useTextTrackPolling=!1,this.subtitlePollingInterval=-1,this._subtitleDisplay=!0,this.onTextTracksChanged=()=>{if(this.useTextTrackPolling||self.clearInterval(this.subtitlePollingInterval),!this.media||!this.hls.config.renderTextTracksNatively)return;let t=null;const r=us(this.media.textTracks);for(let s=0;s<r.length;s++)if(r[s].mode==="hidden")t=r[s];else if(r[s].mode==="showing"){t=r[s];break}const i=this.findTrackForTextTrack(t);this.subtitleTrack!==i&&this.setSubtitleTrack(i)},this.registerListeners()}destroy(){this.unregisterListeners(),this.tracks.length=0,this.tracksInGroup.length=0,this.currentTrack=null,this.onTextTracksChanged=this.asyncPollTrackChange=null,super.destroy()}get subtitleDisplay(){return this._subtitleDisplay}set subtitleDisplay(e){this._subtitleDisplay=e,this.trackId>-1&&this.toggleTrackModes()}registerListeners(){const{hls:e}=this;e.on(T.MEDIA_ATTACHED,this.onMediaAttached,this),e.on(T.MEDIA_DETACHING,this.onMediaDetaching,this),e.on(T.MANIFEST_LOADING,this.onManifestLoading,this),e.on(T.MANIFEST_PARSED,this.onManifestParsed,this),e.on(T.LEVEL_LOADING,this.onLevelLoading,this),e.on(T.LEVEL_SWITCHING,this.onLevelSwitching,this),e.on(T.SUBTITLE_TRACK_LOADED,this.onSubtitleTrackLoaded,this),e.on(T.ERROR,this.onError,this)}unregisterListeners(){const{hls:e}=this;e.off(T.MEDIA_ATTACHED,this.onMediaAttached,this),e.off(T.MEDIA_DETACHING,this.onMediaDetaching,this),e.off(T.MANIFEST_LOADING,this.onManifestLoading,this),e.off(T.MANIFEST_PARSED,this.onManifestParsed,this),e.off(T.LEVEL_LOADING,this.onLevelLoading,this),e.off(T.LEVEL_SWITCHING,this.onLevelSwitching,this),e.off(T.SUBTITLE_TRACK_LOADED,this.onSubtitleTrackLoaded,this),e.off(T.ERROR,this.onError,this)}onMediaAttached(e,t){this.media=t.media,this.media&&(this.queuedDefaultTrack>-1&&(this.subtitleTrack=this.queuedDefaultTrack,this.queuedDefaultTrack=-1),this.useTextTrackPolling=!(this.media.textTracks&&"onchange"in this.media.textTracks),this.useTextTrackPolling?this.pollTrackChange(500):this.media.textTracks.addEventListener("change",this.asyncPollTrackChange))}pollTrackChange(e){self.clearInterval(this.subtitlePollingInterval),this.subtitlePollingInterval=self.setInterval(this.onTextTracksChanged,e)}onMediaDetaching(){if(!this.media)return;self.clearInterval(this.subtitlePollingInterval),this.useTextTrackPolling||this.media.textTracks.removeEventListener("change",this.asyncPollTrackChange),this.trackId>-1&&(this.queuedDefaultTrack=this.trackId),us(this.media.textTracks).forEach(t=>{lr(t)}),this.subtitleTrack=-1,this.media=null}onManifestLoading(){this.tracks=[],this.groupIds=null,this.tracksInGroup=[],this.trackId=-1,this.currentTrack=null,this.selectDefaultTrack=!0}onManifestParsed(e,t){this.tracks=t.subtitleTracks}onSubtitleTrackLoaded(e,t){const{id:r,groupId:i,details:s}=t,o=this.tracksInGroup[r];if(!o||o.groupId!==i){this.warn(`Subtitle track with id:${r} and group:${i} not found in active group ${o==null?void 0:o.groupId}`);return}const a=o.details;o.details=t.details,this.log(`Subtitle track ${r} "${o.name}" lang:${o.lang} group:${i} loaded [${s.startSN}-${s.endSN}]`),r===this.trackId&&this.playlistLoaded(r,t,a)}onLevelLoading(e,t){this.switchLevel(t.level)}onLevelSwitching(e,t){this.switchLevel(t.level)}switchLevel(e){const t=this.hls.levels[e];if(!t)return;const r=t.subtitleGroups||null,i=this.groupIds;let s=this.currentTrack;if(!r||(i==null?void 0:i.length)!==(r==null?void 0:r.length)||r!=null&&r.some(o=>(i==null?void 0:i.indexOf(o))===-1)){this.groupIds=r,this.trackId=-1,this.currentTrack=null;const o=this.tracks.filter(d=>!r||r.indexOf(d.groupId)!==-1);if(o.length)this.selectDefaultTrack&&!o.some(d=>d.default)&&(this.selectDefaultTrack=!1),o.forEach((d,u)=>{d.id=u});else if(!s&&!this.tracksInGroup.length)return;this.tracksInGroup=o;const a=this.hls.config.subtitlePreference;if(!s&&a){this.selectDefaultTrack=!1;const d=en(a,o);if(d>-1)s=o[d];else{const u=en(a,this.tracks);s=this.tracks[u]}}let l=this.findTrackId(s);l===-1&&s&&(l=this.findTrackId(null));const c={subtitleTracks:o};this.log(`Updating subtitle tracks, ${o.length} track(s) found in "${r==null?void 0:r.join(",")}" group-id`),this.hls.trigger(T.SUBTITLE_TRACKS_UPDATED,c),l!==-1&&this.trackId===-1&&this.setSubtitleTrack(l)}else this.shouldReloadPlaylist(s)&&this.setSubtitleTrack(this.trackId)}findTrackId(e){const t=this.tracksInGroup,r=this.selectDefaultTrack;for(let i=0;i<t.length;i++){const s=t[i];if(!(r&&!s.default||!r&&!e)&&(!e||fr(s,e)))return i}if(e){for(let i=0;i<t.length;i++){const s=t[i];if(Tr(e.attrs,s.attrs,["LANGUAGE","ASSOC-LANGUAGE","CHARACTERISTICS"]))return i}for(let i=0;i<t.length;i++){const s=t[i];if(Tr(e.attrs,s.attrs,["LANGUAGE"]))return i}}return-1}findTrackForTextTrack(e){if(e){const t=this.tracksInGroup;for(let r=0;r<t.length;r++){const i=t[r];if(ka(i,e))return r}}return-1}onError(e,t){t.fatal||!t.context||t.context.type===Ue.SUBTITLE_TRACK&&t.context.id===this.trackId&&(!this.groupIds||this.groupIds.indexOf(t.context.groupId)!==-1)&&this.checkRetry(t)}get allSubtitleTracks(){return this.tracks}get subtitleTracks(){return this.tracksInGroup}get subtitleTrack(){return this.trackId}set subtitleTrack(e){this.selectDefaultTrack=!1,this.setSubtitleTrack(e)}setSubtitleOption(e){if(this.hls.config.subtitlePreference=e,e){const t=this.allSubtitleTracks;if(this.selectDefaultTrack=!1,t.length){const r=this.currentTrack;if(r&&fr(e,r))return r;const i=en(e,this.tracksInGroup);if(i>-1){const s=this.tracksInGroup[i];return this.setSubtitleTrack(i),s}else{if(r)return null;{const s=en(e,t);if(s>-1)return t[s]}}}}return null}loadPlaylist(e){super.loadPlaylist();const t=this.currentTrack;if(this.shouldLoadPlaylist(t)&&t){const r=t.id,i=t.groupId;let s=t.url;if(e)try{s=e.addDirectives(s)}catch(o){this.warn(`Could not construct new URL with HLS Delivery Directives: ${o}`)}this.log(`Loading subtitle playlist for id ${r}`),this.hls.trigger(T.SUBTITLE_TRACK_LOADING,{url:s,id:r,groupId:i,deliveryDirectives:e||null})}}toggleTrackModes(){const{media:e}=this;if(!e)return;const t=us(e.textTracks),r=this.currentTrack;let i;if(r&&(i=t.filter(s=>ka(r,s))[0],i||this.warn(`Unable to find subtitle TextTrack with name "${r.name}" and language "${r.lang}"`)),[].slice.call(t).forEach(s=>{s.mode!=="disabled"&&s!==i&&(s.mode="disabled")}),i){const s=this.subtitleDisplay?"showing":"hidden";i.mode!==s&&(i.mode=s)}}setSubtitleTrack(e){const t=this.tracksInGroup;if(!this.media){this.queuedDefaultTrack=e;return}if(e<-1||e>=t.length||!pe(e)){this.warn(`Invalid subtitle track id: ${e}`);return}this.clearTimer(),this.selectDefaultTrack=!1;const r=this.currentTrack,i=t[e]||null;if(this.trackId=e,this.currentTrack=i,this.toggleTrackModes(),!i){this.hls.trigger(T.SUBTITLE_TRACK_SWITCH,{id:e});return}const s=!!i.details&&!i.details.live;if(e===this.trackId&&i===r&&s)return;this.log(`Switching to subtitle-track ${e}`+(i?` "${i.name}" lang:${i.lang} group:${i.groupId}`:""));const{id:o,groupId:a="",name:l,type:c,url:d}=i;this.hls.trigger(T.SUBTITLE_TRACK_SWITCH,{id:o,groupId:a,name:l,type:c,url:d});const u=this.switchParams(i.url,r==null?void 0:r.details);this.loadPlaylist(u)}}class d1{constructor(e){this.buffers=void 0,this.queues={video:[],audio:[],audiovideo:[]},this.buffers=e}append(e,t,r){const i=this.queues[t];i.push(e),i.length===1&&!r&&this.executeNext(t)}insertAbort(e,t){this.queues[t].unshift(e),this.executeNext(t)}appendBlocker(e){let t;const r=new Promise(s=>{t=s}),i={execute:t,onStart:()=>{},onComplete:()=>{},onError:()=>{}};return this.append(i,e),r}executeNext(e){const t=this.queues[e];if(t.length){const r=t[0];try{r.execute()}catch(i){B.warn(`[buffer-operation-queue]: Exception executing "${e}" SourceBuffer operation: ${i}`),r.onError(i);const s=this.buffers[e];s!=null&&s.updating||this.shiftAndExecuteNext(e)}}}shiftAndExecuteNext(e){this.queues[e].shift(),this.executeNext(e)}current(e){return this.queues[e][0]}}const iu=/(avc[1234]|hvc1|hev1|dvh[1e]|vp09|av01)(?:\.[^.,]+)+/;class u1{constructor(e){this.details=null,this._objectUrl=null,this.operationQueue=void 0,this.listeners=void 0,this.hls=void 0,this.bufferCodecEventsExpected=0,this._bufferCodecEventsTotal=0,this.media=null,this.mediaSource=null,this.lastMpegAudioChunk=null,this.appendSource=void 0,this.appendErrors={audio:0,video:0,audiovideo:0},this.tracks={},this.pendingTracks={},this.sourceBuffer=void 0,this.log=void 0,this.warn=void 0,this.error=void 0,this._onEndStreaming=r=>{this.hls&&this.hls.pauseBuffering()},this._onStartStreaming=r=>{this.hls&&this.hls.resumeBuffering()},this._onMediaSourceOpen=()=>{const{media:r,mediaSource:i}=this;this.log("Media source opened"),r&&(r.removeEventListener("emptied",this._onMediaEmptied),this.updateMediaElementDuration(),this.hls.trigger(T.MEDIA_ATTACHED,{media:r,mediaSource:i})),i&&i.removeEventListener("sourceopen",this._onMediaSourceOpen),this.checkPendingTracks()},this._onMediaSourceClose=()=>{this.log("Media source closed")},this._onMediaSourceEnded=()=>{this.log("Media source ended")},this._onMediaEmptied=()=>{const{mediaSrc:r,_objectUrl:i}=this;r!==i&&B.error(`Media element src was set while attaching MediaSource (${i} > ${r})`)},this.hls=e;const t="[buffer-controller]";this.appendSource=e.config.preferManagedMediaSource&&typeof self<"u"&&self.ManagedMediaSource,this.log=B.log.bind(B,t),this.warn=B.warn.bind(B,t),this.error=B.error.bind(B,t),this._initSourceBuffer(),this.registerListeners()}hasSourceTypes(){return this.getSourceBufferTypes().length>0||Object.keys(this.pendingTracks).length>0}destroy(){this.unregisterListeners(),this.details=null,this.lastMpegAudioChunk=null,this.hls=null}registerListeners(){const{hls:e}=this;e.on(T.MEDIA_ATTACHING,this.onMediaAttaching,this),e.on(T.MEDIA_DETACHING,this.onMediaDetaching,this),e.on(T.MANIFEST_LOADING,this.onManifestLoading,this),e.on(T.MANIFEST_PARSED,this.onManifestParsed,this),e.on(T.BUFFER_RESET,this.onBufferReset,this),e.on(T.BUFFER_APPENDING,this.onBufferAppending,this),e.on(T.BUFFER_CODECS,this.onBufferCodecs,this),e.on(T.BUFFER_EOS,this.onBufferEos,this),e.on(T.BUFFER_FLUSHING,this.onBufferFlushing,this),e.on(T.LEVEL_UPDATED,this.onLevelUpdated,this),e.on(T.FRAG_PARSED,this.onFragParsed,this),e.on(T.FRAG_CHANGED,this.onFragChanged,this)}unregisterListeners(){const{hls:e}=this;e.off(T.MEDIA_ATTACHING,this.onMediaAttaching,this),e.off(T.MEDIA_DETACHING,this.onMediaDetaching,this),e.off(T.MANIFEST_LOADING,this.onManifestLoading,this),e.off(T.MANIFEST_PARSED,this.onManifestParsed,this),e.off(T.BUFFER_RESET,this.onBufferReset,this),e.off(T.BUFFER_APPENDING,this.onBufferAppending,this),e.off(T.BUFFER_CODECS,this.onBufferCodecs,this),e.off(T.BUFFER_EOS,this.onBufferEos,this),e.off(T.BUFFER_FLUSHING,this.onBufferFlushing,this),e.off(T.LEVEL_UPDATED,this.onLevelUpdated,this),e.off(T.FRAG_PARSED,this.onFragParsed,this),e.off(T.FRAG_CHANGED,this.onFragChanged,this)}_initSourceBuffer(){this.sourceBuffer={},this.operationQueue=new d1(this.sourceBuffer),this.listeners={audio:[],video:[],audiovideo:[]},this.appendErrors={audio:0,video:0,audiovideo:0},this.lastMpegAudioChunk=null}onManifestLoading(){this.bufferCodecEventsExpected=this._bufferCodecEventsTotal=0,this.details=null}onManifestParsed(e,t){let r=2;(t.audio&&!t.video||!t.altAudio)&&(r=1),this.bufferCodecEventsExpected=this._bufferCodecEventsTotal=r,this.log(`${this.bufferCodecEventsExpected} bufferCodec event(s) expected`)}onMediaAttaching(e,t){const r=this.media=t.media,i=Ir(this.appendSource);if(r&&i){var s;const o=this.mediaSource=new i;this.log(`created media source: ${(s=o.constructor)==null?void 0:s.name}`),o.addEventListener("sourceopen",this._onMediaSourceOpen),o.addEventListener("sourceended",this._onMediaSourceEnded),o.addEventListener("sourceclose",this._onMediaSourceClose),this.appendSource&&(o.addEventListener("startstreaming",this._onStartStreaming),o.addEventListener("endstreaming",this._onEndStreaming));const a=this._objectUrl=self.URL.createObjectURL(o);if(this.appendSource)try{r.removeAttribute("src");const l=self.ManagedMediaSource;r.disableRemotePlayback=r.disableRemotePlayback||l&&o instanceof l,su(r),h1(r,a),r.load()}catch{r.src=a}else r.src=a;r.addEventListener("emptied",this._onMediaEmptied)}}onMediaDetaching(){const{media:e,mediaSource:t,_objectUrl:r}=this;if(t){if(this.log("media source detaching"),t.readyState==="open")try{t.endOfStream()}catch(i){this.warn(`onMediaDetaching: ${i.message} while calling endOfStream`)}this.onBufferReset(),t.removeEventListener("sourceopen",this._onMediaSourceOpen),t.removeEventListener("sourceended",this._onMediaSourceEnded),t.removeEventListener("sourceclose",this._onMediaSourceClose),this.appendSource&&(t.removeEventListener("startstreaming",this._onStartStreaming),t.removeEventListener("endstreaming",this._onEndStreaming)),e&&(e.removeEventListener("emptied",this._onMediaEmptied),r&&self.URL.revokeObjectURL(r),this.mediaSrc===r?(e.removeAttribute("src"),this.appendSource&&su(e),e.load()):this.warn("media|source.src was changed by a third party - skip cleanup")),this.mediaSource=null,this.media=null,this._objectUrl=null,this.bufferCodecEventsExpected=this._bufferCodecEventsTotal,this.pendingTracks={},this.tracks={}}this.hls.trigger(T.MEDIA_DETACHED,void 0)}onBufferReset(){this.getSourceBufferTypes().forEach(e=>{this.resetBuffer(e)}),this._initSourceBuffer()}resetBuffer(e){const t=this.sourceBuffer[e];try{if(t){var r;this.removeBufferListeners(e),this.sourceBuffer[e]=void 0,(r=this.mediaSource)!=null&&r.sourceBuffers.length&&this.mediaSource.removeSourceBuffer(t)}}catch(i){this.warn(`onBufferReset ${e}`,i)}}onBufferCodecs(e,t){const r=this.getSourceBufferTypes().length,i=Object.keys(t);if(i.forEach(o=>{if(r){const l=this.tracks[o];if(l&&typeof l.buffer.changeType=="function"){var a;const{id:c,codec:d,levelCodec:u,container:h,metadata:g}=t[o],y=kd(l.codec,l.levelCodec),b=y==null?void 0:y.replace(iu,"$1");let E=kd(d,u);const C=(a=E)==null?void 0:a.replace(iu,"$1");if(E&&b!==C){o.slice(0,5)==="audio"&&(E=Ls(E,this.appendSource));const w=`${h};codecs=${E}`;this.appendChangeType(o,w),this.log(`switching codec ${y} to ${E}`),this.tracks[o]={buffer:l.buffer,codec:d,container:h,levelCodec:u,metadata:g,id:c}}}}else this.pendingTracks[o]=t[o]}),r)return;const s=Math.max(this.bufferCodecEventsExpected-1,0);this.bufferCodecEventsExpected!==s&&(this.log(`${s} bufferCodec event(s) expected ${i.join(",")}`),this.bufferCodecEventsExpected=s),this.mediaSource&&this.mediaSource.readyState==="open"&&this.checkPendingTracks()}appendChangeType(e,t){const{operationQueue:r}=this,i={execute:()=>{const s=this.sourceBuffer[e];s&&(this.log(`changing ${e} sourceBuffer type to ${t}`),s.changeType(t)),r.shiftAndExecuteNext(e)},onStart:()=>{},onComplete:()=>{},onError:s=>{this.warn(`Failed to change ${e} SourceBuffer type`,s)}};r.append(i,e,!!this.pendingTracks[e])}onBufferAppending(e,t){const{hls:r,operationQueue:i,tracks:s}=this,{data:o,type:a,frag:l,part:c,chunkMeta:d}=t,u=d.buffering[a],h=self.performance.now();u.start=h;const g=l.stats.buffering,y=c?c.stats.buffering:null;g.start===0&&(g.start=h),y&&y.start===0&&(y.start=h);const b=s.audio;let E=!1;a==="audio"&&(b==null?void 0:b.container)==="audio/mpeg"&&(E=!this.lastMpegAudioChunk||d.id===1||this.lastMpegAudioChunk.sn!==d.sn,this.lastMpegAudioChunk=d);const C=l.start,w={execute:()=>{if(u.executeStart=self.performance.now(),E){const R=this.sourceBuffer[a];if(R){const _=C-R.timestampOffset;Math.abs(_)>=.1&&(this.log(`Updating audio SourceBuffer timestampOffset to ${C} (delta: ${_}) sn: ${l.sn})`),R.timestampOffset=C)}}this.appendExecutor(o,a)},onStart:()=>{},onComplete:()=>{const R=self.performance.now();u.executeEnd=u.end=R,g.first===0&&(g.first=R),y&&y.first===0&&(y.first=R);const{sourceBuffer:_}=this,P={};for(const H in _)P[H]=Xe.getBuffered(_[H]);this.appendErrors[a]=0,a==="audio"||a==="video"?this.appendErrors.audiovideo=0:(this.appendErrors.audio=0,this.appendErrors.video=0),this.hls.trigger(T.BUFFER_APPENDED,{type:a,frag:l,part:c,chunkMeta:d,parent:l.type,timeRanges:P})},onError:R=>{const _={type:Le.MEDIA_ERROR,parent:l.type,details:$.BUFFER_APPEND_ERROR,sourceBufferName:a,frag:l,part:c,chunkMeta:d,error:R,err:R,fatal:!1};if(R.code===DOMException.QUOTA_EXCEEDED_ERR)_.details=$.BUFFER_FULL_ERROR;else{const P=++this.appendErrors[a];_.details=$.BUFFER_APPEND_ERROR,this.warn(`Failed ${P}/${r.config.appendErrorMaxRetry} times to append segment in "${a}" sourceBuffer`),P>=r.config.appendErrorMaxRetry&&(_.fatal=!0)}r.trigger(T.ERROR,_)}};i.append(w,a,!!this.pendingTracks[a])}onBufferFlushing(e,t){const{operationQueue:r}=this,i=s=>({execute:this.removeExecutor.bind(this,s,t.startOffset,t.endOffset),onStart:()=>{},onComplete:()=>{this.hls.trigger(T.BUFFER_FLUSHED,{type:s})},onError:o=>{this.warn(`Failed to remove from ${s} SourceBuffer`,o)}});t.type?r.append(i(t.type),t.type):this.getSourceBufferTypes().forEach(s=>{r.append(i(s),s)})}onFragParsed(e,t){const{frag:r,part:i}=t,s=[],o=i?i.elementaryStreams:r.elementaryStreams;o[Ve.AUDIOVIDEO]?s.push("audiovideo"):(o[Ve.AUDIO]&&s.push("audio"),o[Ve.VIDEO]&&s.push("video"));const a=()=>{const l=self.performance.now();r.stats.buffering.end=l,i&&(i.stats.buffering.end=l);const c=i?i.stats:r.stats;this.hls.trigger(T.FRAG_BUFFERED,{frag:r,part:i,stats:c,id:r.type})};s.length===0&&this.warn(`Fragments must have at least one ElementaryStreamType set. type: ${r.type} level: ${r.level} sn: ${r.sn}`),this.blockBuffers(a,s)}onFragChanged(e,t){this.trimBuffers()}onBufferEos(e,t){this.getSourceBufferTypes().reduce((i,s)=>{const o=this.sourceBuffer[s];return o&&(!t.type||t.type===s)&&(o.ending=!0,o.ended||(o.ended=!0,this.log(`${s} sourceBuffer now EOS`))),i&&!!(!o||o.ended)},!0)&&(this.log("Queueing mediaSource.endOfStream()"),this.blockBuffers(()=>{this.getSourceBufferTypes().forEach(s=>{const o=this.sourceBuffer[s];o&&(o.ending=!1)});const{mediaSource:i}=this;if(!i||i.readyState!=="open"){i&&this.log(`Could not call mediaSource.endOfStream(). mediaSource.readyState: ${i.readyState}`);return}this.log("Calling mediaSource.endOfStream()"),i.endOfStream()}))}onLevelUpdated(e,{details:t}){t.fragments.length&&(this.details=t,this.getSourceBufferTypes().length?this.blockBuffers(this.updateMediaElementDuration.bind(this)):this.updateMediaElementDuration())}trimBuffers(){const{hls:e,details:t,media:r}=this;if(!r||t===null||!this.getSourceBufferTypes().length)return;const s=e.config,o=r.currentTime,a=t.levelTargetDuration,l=t.live&&s.liveBackBufferLength!==null?s.liveBackBufferLength:s.backBufferLength;if(pe(l)&&l>0){const c=Math.max(l,a),d=Math.floor(o/a)*a-c;this.flushBackBuffer(o,a,d)}if(pe(s.frontBufferFlushThreshold)&&s.frontBufferFlushThreshold>0){const c=Math.max(s.maxBufferLength,s.frontBufferFlushThreshold),d=Math.max(c,a),u=Math.floor(o/a)*a+d;this.flushFrontBuffer(o,a,u)}}flushBackBuffer(e,t,r){const{details:i,sourceBuffer:s}=this;this.getSourceBufferTypes().forEach(a=>{const l=s[a];if(l){const c=Xe.getBuffered(l);if(c.length>0&&r>c.start(0)){if(this.hls.trigger(T.BACK_BUFFER_REACHED,{bufferEnd:r}),i!=null&&i.live)this.hls.trigger(T.LIVE_BACK_BUFFER_REACHED,{bufferEnd:r});else if(l.ended&&c.end(c.length-1)-e<t*2){this.log(`Cannot flush ${a} back buffer while SourceBuffer is in ended state`);return}this.hls.trigger(T.BUFFER_FLUSHING,{startOffset:0,endOffset:r,type:a})}}})}flushFrontBuffer(e,t,r){const{sourceBuffer:i}=this;this.getSourceBufferTypes().forEach(o=>{const a=i[o];if(a){const l=Xe.getBuffered(a),c=l.length;if(c<2)return;const d=l.start(c-1),u=l.end(c-1);if(r>d||e>=d&&e<=u)return;if(a.ended&&e-u<2*t){this.log(`Cannot flush ${o} front buffer while SourceBuffer is in ended state`);return}this.hls.trigger(T.BUFFER_FLUSHING,{startOffset:d,endOffset:1/0,type:o})}})}updateMediaElementDuration(){if(!this.details||!this.media||!this.mediaSource||this.mediaSource.readyState!=="open")return;const{details:e,hls:t,media:r,mediaSource:i}=this,s=e.fragments[0].start+e.totalduration,o=r.duration,a=pe(i.duration)?i.duration:0;e.live&&t.config.liveDurationInfinity?(i.duration=1/0,this.updateSeekableRange(e)):(s>a&&s>o||!pe(o))&&(this.log(`Updating Media Source duration to ${s.toFixed(3)}`),i.duration=s)}updateSeekableRange(e){const t=this.mediaSource,r=e.fragments;if(r.length&&e.live&&t!=null&&t.setLiveSeekableRange){const s=Math.max(0,r[0].start),o=Math.max(s,s+e.totalduration);this.log(`Media Source duration is set to ${t.duration}. Setting seekable range to ${s}-${o}.`),t.setLiveSeekableRange(s,o)}}checkPendingTracks(){const{bufferCodecEventsExpected:e,operationQueue:t,pendingTracks:r}=this,i=Object.keys(r).length;if(i&&(!e||i===2||"audiovideo"in r)){this.createSourceBuffers(r),this.pendingTracks={};const s=this.getSourceBufferTypes();if(s.length)this.hls.trigger(T.BUFFER_CREATED,{tracks:this.tracks}),s.forEach(o=>{t.executeNext(o)});else{const o=new Error("could not create source buffer for media codec(s)");this.hls.trigger(T.ERROR,{type:Le.MEDIA_ERROR,details:$.BUFFER_INCOMPATIBLE_CODECS_ERROR,fatal:!0,error:o,reason:o.message})}}}createSourceBuffers(e){const{sourceBuffer:t,mediaSource:r}=this;if(!r)throw Error("createSourceBuffers called when mediaSource was null");for(const i in e)if(!t[i]){const s=e[i];if(!s)throw Error(`source buffer exists for track ${i}, however track does not`);let o=s.levelCodec||s.codec;o&&i.slice(0,5)==="audio"&&(o=Ls(o,this.appendSource));const a=`${s.container};codecs=${o}`;this.log(`creating sourceBuffer(${a})`);try{const l=t[i]=r.addSourceBuffer(a),c=i;this.addBufferListener(c,"updatestart",this._onSBUpdateStart),this.addBufferListener(c,"updateend",this._onSBUpdateEnd),this.addBufferListener(c,"error",this._onSBUpdateError),this.appendSource&&this.addBufferListener(c,"bufferedchange",(d,u)=>{const h=u.removedRanges;h!=null&&h.length&&this.hls.trigger(T.BUFFER_FLUSHED,{type:i})}),this.tracks[i]={buffer:l,codec:o,container:s.container,levelCodec:s.levelCodec,metadata:s.metadata,id:s.id}}catch(l){this.error(`error while trying to add sourceBuffer: ${l.message}`),this.hls.trigger(T.ERROR,{type:Le.MEDIA_ERROR,details:$.BUFFER_ADD_CODEC_ERROR,fatal:!1,error:l,sourceBufferName:i,mimeType:a})}}}get mediaSrc(){var e;const t=((e=this.media)==null?void 0:e.firstChild)||this.media;return t==null?void 0:t.src}_onSBUpdateStart(e){const{operationQueue:t}=this;t.current(e).onStart()}_onSBUpdateEnd(e){var t;if(((t=this.mediaSource)==null?void 0:t.readyState)==="closed"){this.resetBuffer(e);return}const{operationQueue:r}=this;r.current(e).onComplete(),r.shiftAndExecuteNext(e)}_onSBUpdateError(e,t){var r;const i=new Error(`${e} SourceBuffer error. MediaSource readyState: ${(r=this.mediaSource)==null?void 0:r.readyState}`);this.error(`${i}`,t),this.hls.trigger(T.ERROR,{type:Le.MEDIA_ERROR,details:$.BUFFER_APPENDING_ERROR,sourceBufferName:e,error:i,fatal:!1});const s=this.operationQueue.current(e);s&&s.onError(i)}removeExecutor(e,t,r){const{media:i,mediaSource:s,operationQueue:o,sourceBuffer:a}=this,l=a[e];if(!i||!s||!l){this.warn(`Attempting to remove from the ${e} SourceBuffer, but it does not exist`),o.shiftAndExecuteNext(e);return}const c=pe(i.duration)?i.duration:1/0,d=pe(s.duration)?s.duration:1/0,u=Math.max(0,t),h=Math.min(r,c,d);h>u&&(!l.ending||l.ended)?(l.ended=!1,this.log(`Removing [${u},${h}] from the ${e} SourceBuffer`),l.remove(u,h)):o.shiftAndExecuteNext(e)}appendExecutor(e,t){const r=this.sourceBuffer[t];if(!r){if(!this.pendingTracks[t])throw new Error(`Attempting to append to the ${t} SourceBuffer, but it does not exist`);return}r.ended=!1,r.appendBuffer(e)}blockBuffers(e,t=this.getSourceBufferTypes()){if(!t.length){this.log("Blocking operation requested, but no SourceBuffers exist"),Promise.resolve().then(e);return}const{operationQueue:r}=this,i=t.map(s=>r.appendBlocker(s));Promise.all(i).then(()=>{e(),t.forEach(s=>{const o=this.sourceBuffer[s];o!=null&&o.updating||r.shiftAndExecuteNext(s)})})}getSourceBufferTypes(){return Object.keys(this.sourceBuffer)}addBufferListener(e,t,r){const i=this.sourceBuffer[e];if(!i)return;const s=r.bind(this,e);this.listeners[e].push({event:t,listener:s}),i.addEventListener(t,s)}removeBufferListeners(e){const t=this.sourceBuffer[e];t&&this.listeners[e].forEach(r=>{t.removeEventListener(r.event,r.listener)})}}function su(n){const e=n.querySelectorAll("source");[].slice.call(e).forEach(t=>{n.removeChild(t)})}function h1(n,e){const t=self.document.createElement("source");t.type="video/mp4",t.src=e,n.appendChild(t)}const ou={42:225,92:233,94:237,95:243,96:250,123:231,124:247,125:209,126:241,127:9608,128:174,129:176,130:189,131:191,132:8482,133:162,134:163,135:9834,136:224,137:32,138:232,139:226,140:234,141:238,142:244,143:251,144:193,145:201,146:211,147:218,148:220,149:252,150:8216,151:161,152:42,153:8217,154:9473,155:169,156:8480,157:8226,158:8220,159:8221,160:192,161:194,162:199,163:200,164:202,165:203,166:235,167:206,168:207,169:239,170:212,171:217,172:249,173:219,174:171,175:187,176:195,177:227,178:205,179:204,180:236,181:210,182:242,183:213,184:245,185:123,186:125,187:92,188:94,189:95,190:124,191:8764,192:196,193:228,194:214,195:246,196:223,197:165,198:164,199:9475,200:197,201:229,202:216,203:248,204:9487,205:9491,206:9495,207:9499},Qf=function(e){let t=e;return ou.hasOwnProperty(e)&&(t=ou[e]),String.fromCharCode(t)},Mt=15,cn=100,f1={17:1,18:3,21:5,22:7,23:9,16:11,19:12,20:14},p1={17:2,18:4,21:6,22:8,23:10,19:13,20:15},m1={25:1,26:3,29:5,30:7,31:9,24:11,27:12,28:14},g1={25:2,26:4,29:6,30:8,31:10,27:13,28:15},y1=["white","green","blue","cyan","red","yellow","magenta","black","transparent"];class A1{constructor(){this.time=null,this.verboseLevel=0}log(e,t){if(this.verboseLevel>=e){const r=typeof t=="function"?t():t;B.log(`${this.time} [${e}] ${r}`)}}}const Fn=function(e){const t=[];for(let r=0;r<e.length;r++)t.push(e[r].toString(16));return t};class Xf{constructor(){this.foreground="white",this.underline=!1,this.italics=!1,this.background="black",this.flash=!1}reset(){this.foreground="white",this.underline=!1,this.italics=!1,this.background="black",this.flash=!1}setStyles(e){const t=["foreground","underline","italics","background","flash"];for(let r=0;r<t.length;r++){const i=t[r];e.hasOwnProperty(i)&&(this[i]=e[i])}}isDefault(){return this.foreground==="white"&&!this.underline&&!this.italics&&this.background==="black"&&!this.flash}equals(e){return this.foreground===e.foreground&&this.underline===e.underline&&this.italics===e.italics&&this.background===e.background&&this.flash===e.flash}copy(e){this.foreground=e.foreground,this.underline=e.underline,this.italics=e.italics,this.background=e.background,this.flash=e.flash}toString(){return"color="+this.foreground+", underline="+this.underline+", italics="+this.italics+", background="+this.background+", flash="+this.flash}}class b1{constructor(){this.uchar=" ",this.penState=new Xf}reset(){this.uchar=" ",this.penState.reset()}setChar(e,t){this.uchar=e,this.penState.copy(t)}setPenState(e){this.penState.copy(e)}equals(e){return this.uchar===e.uchar&&this.penState.equals(e.penState)}copy(e){this.uchar=e.uchar,this.penState.copy(e.penState)}isEmpty(){return this.uchar===" "&&this.penState.isDefault()}}class v1{constructor(e){this.chars=[],this.pos=0,this.currPenState=new Xf,this.cueStartTime=null,this.logger=void 0;for(let t=0;t<cn;t++)this.chars.push(new b1);this.logger=e}equals(e){for(let t=0;t<cn;t++)if(!this.chars[t].equals(e.chars[t]))return!1;return!0}copy(e){for(let t=0;t<cn;t++)this.chars[t].copy(e.chars[t])}isEmpty(){let e=!0;for(let t=0;t<cn;t++)if(!this.chars[t].isEmpty()){e=!1;break}return e}setCursor(e){this.pos!==e&&(this.pos=e),this.pos<0?(this.logger.log(3,"Negative cursor position "+this.pos),this.pos=0):this.pos>cn&&(this.logger.log(3,"Too large cursor position "+this.pos),this.pos=cn)}moveCursor(e){const t=this.pos+e;if(e>1)for(let r=this.pos+1;r<t+1;r++)this.chars[r].setPenState(this.currPenState);this.setCursor(t)}backSpace(){this.moveCursor(-1),this.chars[this.pos].setChar(" ",this.currPenState)}insertChar(e){e>=144&&this.backSpace();const t=Qf(e);if(this.pos>=cn){this.logger.log(0,()=>"Cannot insert "+e.toString(16)+" ("+t+") at position "+this.pos+". Skipping it!");return}this.chars[this.pos].setChar(t,this.currPenState),this.moveCursor(1)}clearFromPos(e){let t;for(t=e;t<cn;t++)this.chars[t].reset()}clear(){this.clearFromPos(0),this.pos=0,this.currPenState.reset()}clearToEndOfRow(){this.clearFromPos(this.pos)}getTextString(){const e=[];let t=!0;for(let r=0;r<cn;r++){const i=this.chars[r].uchar;i!==" "&&(t=!1),e.push(i)}return t?"":e.join("")}setPenStyles(e){this.currPenState.setStyles(e),this.chars[this.pos].setPenState(this.currPenState)}}class Ho{constructor(e){this.rows=[],this.currRow=Mt-1,this.nrRollUpRows=null,this.lastOutputScreen=null,this.logger=void 0;for(let t=0;t<Mt;t++)this.rows.push(new v1(e));this.logger=e}reset(){for(let e=0;e<Mt;e++)this.rows[e].clear();this.currRow=Mt-1}equals(e){let t=!0;for(let r=0;r<Mt;r++)if(!this.rows[r].equals(e.rows[r])){t=!1;break}return t}copy(e){for(let t=0;t<Mt;t++)this.rows[t].copy(e.rows[t])}isEmpty(){let e=!0;for(let t=0;t<Mt;t++)if(!this.rows[t].isEmpty()){e=!1;break}return e}backSpace(){this.rows[this.currRow].backSpace()}clearToEndOfRow(){this.rows[this.currRow].clearToEndOfRow()}insertChar(e){this.rows[this.currRow].insertChar(e)}setPen(e){this.rows[this.currRow].setPenStyles(e)}moveCursor(e){this.rows[this.currRow].moveCursor(e)}setCursor(e){this.logger.log(2,"setCursor: "+e),this.rows[this.currRow].setCursor(e)}setPAC(e){this.logger.log(2,()=>"pacData = "+JSON.stringify(e));let t=e.row-1;if(this.nrRollUpRows&&t<this.nrRollUpRows-1&&(t=this.nrRollUpRows-1),this.nrRollUpRows&&this.currRow!==t){for(let a=0;a<Mt;a++)this.rows[a].clear();const s=this.currRow+1-this.nrRollUpRows,o=this.lastOutputScreen;if(o){const a=o.rows[s].cueStartTime,l=this.logger.time;if(a!==null&&l!==null&&a<l)for(let c=0;c<this.nrRollUpRows;c++)this.rows[t-this.nrRollUpRows+c+1].copy(o.rows[s+c])}}this.currRow=t;const r=this.rows[this.currRow];if(e.indent!==null){const s=e.indent,o=Math.max(s-1,0);r.setCursor(e.indent),e.color=r.chars[o].penState.foreground}const i={foreground:e.color,underline:e.underline,italics:e.italics,background:"black",flash:!1};this.setPen(i)}setBkgData(e){this.logger.log(2,()=>"bkgData = "+JSON.stringify(e)),this.backSpace(),this.setPen(e),this.insertChar(32)}setRollUpRows(e){this.nrRollUpRows=e}rollUp(){if(this.nrRollUpRows===null){this.logger.log(3,"roll_up but nrRollUpRows not set yet");return}this.logger.log(1,()=>this.getDisplayText());const e=this.currRow+1-this.nrRollUpRows,t=this.rows.splice(e,1)[0];t.clear(),this.rows.splice(this.currRow,0,t),this.logger.log(2,"Rolling up")}getDisplayText(e){e=e||!1;const t=[];let r="",i=-1;for(let s=0;s<Mt;s++){const o=this.rows[s].getTextString();o&&(i=s+1,e?t.push("Row "+i+": '"+o+"'"):t.push(o.trim()))}return t.length>0&&(e?r="["+t.join(" | ")+"]":r=t.join(`
`)),r}getTextAndFormat(){return this.rows}}class au{constructor(e,t,r){this.chNr=void 0,this.outputFilter=void 0,this.mode=void 0,this.verbose=void 0,this.displayedMemory=void 0,this.nonDisplayedMemory=void 0,this.lastOutputScreen=void 0,this.currRollUpRow=void 0,this.writeScreen=void 0,this.cueStartTime=void 0,this.logger=void 0,this.chNr=e,this.outputFilter=t,this.mode=null,this.verbose=0,this.displayedMemory=new Ho(r),this.nonDisplayedMemory=new Ho(r),this.lastOutputScreen=new Ho(r),this.currRollUpRow=this.displayedMemory.rows[Mt-1],this.writeScreen=this.displayedMemory,this.mode=null,this.cueStartTime=null,this.logger=r}reset(){this.mode=null,this.displayedMemory.reset(),this.nonDisplayedMemory.reset(),this.lastOutputScreen.reset(),this.outputFilter.reset(),this.currRollUpRow=this.displayedMemory.rows[Mt-1],this.writeScreen=this.displayedMemory,this.mode=null,this.cueStartTime=null}getHandler(){return this.outputFilter}setHandler(e){this.outputFilter=e}setPAC(e){this.writeScreen.setPAC(e)}setBkgData(e){this.writeScreen.setBkgData(e)}setMode(e){e!==this.mode&&(this.mode=e,this.logger.log(2,()=>"MODE="+e),this.mode==="MODE_POP-ON"?this.writeScreen=this.nonDisplayedMemory:(this.writeScreen=this.displayedMemory,this.writeScreen.reset()),this.mode!=="MODE_ROLL-UP"&&(this.displayedMemory.nrRollUpRows=null,this.nonDisplayedMemory.nrRollUpRows=null),this.mode=e)}insertChars(e){for(let r=0;r<e.length;r++)this.writeScreen.insertChar(e[r]);const t=this.writeScreen===this.displayedMemory?"DISP":"NON_DISP";this.logger.log(2,()=>t+": "+this.writeScreen.getDisplayText(!0)),(this.mode==="MODE_PAINT-ON"||this.mode==="MODE_ROLL-UP")&&(this.logger.log(1,()=>"DISPLAYED: "+this.displayedMemory.getDisplayText(!0)),this.outputDataUpdate())}ccRCL(){this.logger.log(2,"RCL - Resume Caption Loading"),this.setMode("MODE_POP-ON")}ccBS(){this.logger.log(2,"BS - BackSpace"),this.mode!=="MODE_TEXT"&&(this.writeScreen.backSpace(),this.writeScreen===this.displayedMemory&&this.outputDataUpdate())}ccAOF(){}ccAON(){}ccDER(){this.logger.log(2,"DER- Delete to End of Row"),this.writeScreen.clearToEndOfRow(),this.outputDataUpdate()}ccRU(e){this.logger.log(2,"RU("+e+") - Roll Up"),this.writeScreen=this.displayedMemory,this.setMode("MODE_ROLL-UP"),this.writeScreen.setRollUpRows(e)}ccFON(){this.logger.log(2,"FON - Flash On"),this.writeScreen.setPen({flash:!0})}ccRDC(){this.logger.log(2,"RDC - Resume Direct Captioning"),this.setMode("MODE_PAINT-ON")}ccTR(){this.logger.log(2,"TR"),this.setMode("MODE_TEXT")}ccRTD(){this.logger.log(2,"RTD"),this.setMode("MODE_TEXT")}ccEDM(){this.logger.log(2,"EDM - Erase Displayed Memory"),this.displayedMemory.reset(),this.outputDataUpdate(!0)}ccCR(){this.logger.log(2,"CR - Carriage Return"),this.writeScreen.rollUp(),this.outputDataUpdate(!0)}ccENM(){this.logger.log(2,"ENM - Erase Non-displayed Memory"),this.nonDisplayedMemory.reset()}ccEOC(){if(this.logger.log(2,"EOC - End Of Caption"),this.mode==="MODE_POP-ON"){const e=this.displayedMemory;this.displayedMemory=this.nonDisplayedMemory,this.nonDisplayedMemory=e,this.writeScreen=this.nonDisplayedMemory,this.logger.log(1,()=>"DISP: "+this.displayedMemory.getDisplayText())}this.outputDataUpdate(!0)}ccTO(e){this.logger.log(2,"TO("+e+") - Tab Offset"),this.writeScreen.moveCursor(e)}ccMIDROW(e){const t={flash:!1};if(t.underline=e%2===1,t.italics=e>=46,t.italics)t.foreground="white";else{const r=Math.floor(e/2)-16,i=["white","green","blue","cyan","red","yellow","magenta"];t.foreground=i[r]}this.logger.log(2,"MIDROW: "+JSON.stringify(t)),this.writeScreen.setPen(t)}outputDataUpdate(e=!1){const t=this.logger.time;t!==null&&this.outputFilter&&(this.cueStartTime===null&&!this.displayedMemory.isEmpty()?this.cueStartTime=t:this.displayedMemory.equals(this.lastOutputScreen)||(this.outputFilter.newCue(this.cueStartTime,t,this.lastOutputScreen),e&&this.outputFilter.dispatchCue&&this.outputFilter.dispatchCue(),this.cueStartTime=this.displayedMemory.isEmpty()?null:t),this.lastOutputScreen.copy(this.displayedMemory))}cueSplitAtTime(e){this.outputFilter&&(this.displayedMemory.isEmpty()||(this.outputFilter.newCue&&this.outputFilter.newCue(this.cueStartTime,e,this.displayedMemory),this.cueStartTime=e))}}class lu{constructor(e,t,r){this.channels=void 0,this.currentChannel=0,this.cmdHistory=du(),this.logger=void 0;const i=this.logger=new A1;this.channels=[null,new au(e,t,i),new au(e+1,r,i)]}getHandler(e){return this.channels[e].getHandler()}setHandler(e,t){this.channels[e].setHandler(t)}addData(e,t){let r,i,s,o=!1;this.logger.time=e;for(let a=0;a<t.length;a+=2)if(i=t[a]&127,s=t[a+1]&127,!(i===0&&s===0)){if(this.logger.log(3,"["+Fn([t[a],t[a+1]])+"] -> ("+Fn([i,s])+")"),r=this.parseCmd(i,s),r||(r=this.parseMidrow(i,s)),r||(r=this.parsePAC(i,s)),r||(r=this.parseBackgroundAttributes(i,s)),!r&&(o=this.parseChars(i,s),o)){const l=this.currentChannel;l&&l>0?this.channels[l].insertChars(o):this.logger.log(2,"No channel found yet. TEXT-MODE?")}!r&&!o&&this.logger.log(2,"Couldn't parse cleaned data "+Fn([i,s])+" orig: "+Fn([t[a],t[a+1]]))}}parseCmd(e,t){const{cmdHistory:r}=this,i=(e===20||e===28||e===21||e===29)&&t>=32&&t<=47,s=(e===23||e===31)&&t>=33&&t<=35;if(!(i||s))return!1;if(cu(e,t,r))return sr(null,null,r),this.logger.log(3,"Repeated command ("+Fn([e,t])+") is dropped"),!0;const o=e===20||e===21||e===23?1:2,a=this.channels[o];return e===20||e===21||e===28||e===29?t===32?a.ccRCL():t===33?a.ccBS():t===34?a.ccAOF():t===35?a.ccAON():t===36?a.ccDER():t===37?a.ccRU(2):t===38?a.ccRU(3):t===39?a.ccRU(4):t===40?a.ccFON():t===41?a.ccRDC():t===42?a.ccTR():t===43?a.ccRTD():t===44?a.ccEDM():t===45?a.ccCR():t===46?a.ccENM():t===47&&a.ccEOC():a.ccTO(t-32),sr(e,t,r),this.currentChannel=o,!0}parseMidrow(e,t){let r=0;if((e===17||e===25)&&t>=32&&t<=47){if(e===17?r=1:r=2,r!==this.currentChannel)return this.logger.log(0,"Mismatch channel in midrow parsing"),!1;const i=this.channels[r];return i?(i.ccMIDROW(t),this.logger.log(3,"MIDROW ("+Fn([e,t])+")"),!0):!1}return!1}parsePAC(e,t){let r;const i=this.cmdHistory,s=(e>=17&&e<=23||e>=25&&e<=31)&&t>=64&&t<=127,o=(e===16||e===24)&&t>=64&&t<=95;if(!(s||o))return!1;if(cu(e,t,i))return sr(null,null,i),!0;const a=e<=23?1:2;t>=64&&t<=95?r=a===1?f1[e]:m1[e]:r=a===1?p1[e]:g1[e];const l=this.channels[a];return l?(l.setPAC(this.interpretPAC(r,t)),sr(e,t,i),this.currentChannel=a,!0):!1}interpretPAC(e,t){let r;const i={color:null,italics:!1,indent:null,underline:!1,row:e};return t>95?r=t-96:r=t-64,i.underline=(r&1)===1,r<=13?i.color=["white","green","blue","cyan","red","yellow","magenta","white"][Math.floor(r/2)]:r<=15?(i.italics=!0,i.color="white"):i.indent=Math.floor((r-16)/2)*4,i}parseChars(e,t){let r,i=null,s=null;if(e>=25?(r=2,s=e-8):(r=1,s=e),s>=17&&s<=19){let o;s===17?o=t+80:s===18?o=t+112:o=t+144,this.logger.log(2,"Special char '"+Qf(o)+"' in channel "+r),i=[o]}else e>=32&&e<=127&&(i=t===0?[e]:[e,t]);if(i){const o=Fn(i);this.logger.log(3,"Char codes =  "+o.join(",")),sr(e,t,this.cmdHistory)}return i}parseBackgroundAttributes(e,t){const r=(e===16||e===24)&&t>=32&&t<=47,i=(e===23||e===31)&&t>=45&&t<=47;if(!(r||i))return!1;let s;const o={};e===16||e===24?(s=Math.floor((t-32)/2),o.background=y1[s],t%2===1&&(o.background=o.background+"_semi")):t===45?o.background="transparent":(o.foreground="black",t===47&&(o.underline=!0));const a=e<=23?1:2;return this.channels[a].setBkgData(o),sr(e,t,this.cmdHistory),!0}reset(){for(let e=0;e<Object.keys(this.channels).length;e++){const t=this.channels[e];t&&t.reset()}this.cmdHistory=du()}cueSplitAtTime(e){for(let t=0;t<this.channels.length;t++){const r=this.channels[t];r&&r.cueSplitAtTime(e)}}}function sr(n,e,t){t.a=n,t.b=e}function cu(n,e,t){return t.a===n&&t.b===e}function du(){return{a:null,b:null}}class Ji{constructor(e,t){this.timelineController=void 0,this.cueRanges=[],this.trackName=void 0,this.startTime=null,this.endTime=null,this.screen=null,this.timelineController=e,this.trackName=t}dispatchCue(){this.startTime!==null&&(this.timelineController.addCues(this.trackName,this.startTime,this.endTime,this.screen,this.cueRanges),this.startTime=null)}newCue(e,t,r){(this.startTime===null||this.startTime>e)&&(this.startTime=e),this.endTime=t,this.screen=r,this.timelineController.createCaptionsTrack(this.trackName)}reset(){this.cueRanges=[],this.startTime=null}}var Cl=function(){if(xr!=null&&xr.VTTCue)return self.VTTCue;const n=["","lr","rl"],e=["start","middle","end","left","right"];function t(a,l){if(typeof l!="string"||!Array.isArray(a))return!1;const c=l.toLowerCase();return~a.indexOf(c)?c:!1}function r(a){return t(n,a)}function i(a){return t(e,a)}function s(a,...l){let c=1;for(;c<arguments.length;c++){const d=arguments[c];for(const u in d)a[u]=d[u]}return a}function o(a,l,c){const d=this,u={enumerable:!0};d.hasBeenReset=!1;let h="",g=!1,y=a,b=l,E=c,C=null,w="",R=!0,_="auto",P="start",H=50,U="middle",j=50,Q="middle";Object.defineProperty(d,"id",s({},u,{get:function(){return h},set:function(F){h=""+F}})),Object.defineProperty(d,"pauseOnExit",s({},u,{get:function(){return g},set:function(F){g=!!F}})),Object.defineProperty(d,"startTime",s({},u,{get:function(){return y},set:function(F){if(typeof F!="number")throw new TypeError("Start time must be set to a number.");y=F,this.hasBeenReset=!0}})),Object.defineProperty(d,"endTime",s({},u,{get:function(){return b},set:function(F){if(typeof F!="number")throw new TypeError("End time must be set to a number.");b=F,this.hasBeenReset=!0}})),Object.defineProperty(d,"text",s({},u,{get:function(){return E},set:function(F){E=""+F,this.hasBeenReset=!0}})),Object.defineProperty(d,"region",s({},u,{get:function(){return C},set:function(F){C=F,this.hasBeenReset=!0}})),Object.defineProperty(d,"vertical",s({},u,{get:function(){return w},set:function(F){const Y=r(F);if(Y===!1)throw new SyntaxError("An invalid or illegal string was specified.");w=Y,this.hasBeenReset=!0}})),Object.defineProperty(d,"snapToLines",s({},u,{get:function(){return R},set:function(F){R=!!F,this.hasBeenReset=!0}})),Object.defineProperty(d,"line",s({},u,{get:function(){return _},set:function(F){if(typeof F!="number"&&F!=="auto")throw new SyntaxError("An invalid number or illegal string was specified.");_=F,this.hasBeenReset=!0}})),Object.defineProperty(d,"lineAlign",s({},u,{get:function(){return P},set:function(F){const Y=i(F);if(!Y)throw new SyntaxError("An invalid or illegal string was specified.");P=Y,this.hasBeenReset=!0}})),Object.defineProperty(d,"position",s({},u,{get:function(){return H},set:function(F){if(F<0||F>100)throw new Error("Position must be between 0 and 100.");H=F,this.hasBeenReset=!0}})),Object.defineProperty(d,"positionAlign",s({},u,{get:function(){return U},set:function(F){const Y=i(F);if(!Y)throw new SyntaxError("An invalid or illegal string was specified.");U=Y,this.hasBeenReset=!0}})),Object.defineProperty(d,"size",s({},u,{get:function(){return j},set:function(F){if(F<0||F>100)throw new Error("Size must be between 0 and 100.");j=F,this.hasBeenReset=!0}})),Object.defineProperty(d,"align",s({},u,{get:function(){return Q},set:function(F){const Y=i(F);if(!Y)throw new SyntaxError("An invalid or illegal string was specified.");Q=Y,this.hasBeenReset=!0}})),d.displayState=void 0}return o.prototype.getCueAsHTML=function(){return self.WebVTT.convertCueToDOMTree(self,this.text)},o}();class E1{decode(e,t){if(!e)return"";if(typeof e!="string")throw new Error("Error - expected string data.");return decodeURIComponent(encodeURIComponent(e))}}function Jf(n){function e(r,i,s,o){return(r|0)*3600+(i|0)*60+(s|0)+parseFloat(o||0)}const t=n.match(/^(?:(\d+):)?(\d{2}):(\d{2})(\.\d+)?/);return t?parseFloat(t[2])>59?e(t[2],t[3],0,t[4]):e(t[1],t[2],t[3],t[4]):null}class x1{constructor(){this.values=Object.create(null)}set(e,t){!this.get(e)&&t!==""&&(this.values[e]=t)}get(e,t,r){return r?this.has(e)?this.values[e]:t[r]:this.has(e)?this.values[e]:t}has(e){return e in this.values}alt(e,t,r){for(let i=0;i<r.length;++i)if(t===r[i]){this.set(e,t);break}}integer(e,t){/^-?\d+$/.test(t)&&this.set(e,parseInt(t,10))}percent(e,t){if(/^([\d]{1,3})(\.[\d]*)?%$/.test(t)){const r=parseFloat(t);if(r>=0&&r<=100)return this.set(e,r),!0}return!1}}function Zf(n,e,t,r){const i=r?n.split(r):[n];for(const s in i){if(typeof i[s]!="string")continue;const o=i[s].split(t);if(o.length!==2)continue;const a=o[0],l=o[1];e(a,l)}}const La=new Cl(0,0,""),Zi=La.align==="middle"?"middle":"center";function S1(n,e,t){const r=n;function i(){const a=Jf(n);if(a===null)throw new Error("Malformed timestamp: "+r);return n=n.replace(/^[^\sa-zA-Z-]+/,""),a}function s(a,l){const c=new x1;Zf(a,function(h,g){let y;switch(h){case"region":for(let b=t.length-1;b>=0;b--)if(t[b].id===g){c.set(h,t[b].region);break}break;case"vertical":c.alt(h,g,["rl","lr"]);break;case"line":y=g.split(","),c.integer(h,y[0]),c.percent(h,y[0])&&c.set("snapToLines",!1),c.alt(h,y[0],["auto"]),y.length===2&&c.alt("lineAlign",y[1],["start",Zi,"end"]);break;case"position":y=g.split(","),c.percent(h,y[0]),y.length===2&&c.alt("positionAlign",y[1],["start",Zi,"end","line-left","line-right","auto"]);break;case"size":c.percent(h,g);break;case"align":c.alt(h,g,["start",Zi,"end","left","right"]);break}},/:/,/\s/),l.region=c.get("region",null),l.vertical=c.get("vertical","");let d=c.get("line","auto");d==="auto"&&La.line===-1&&(d=-1),l.line=d,l.lineAlign=c.get("lineAlign","start"),l.snapToLines=c.get("snapToLines",!0),l.size=c.get("size",100),l.align=c.get("align",Zi);let u=c.get("position","auto");u==="auto"&&La.position===50&&(u=l.align==="start"||l.align==="left"?0:l.align==="end"||l.align==="right"?100:50),l.position=u}function o(){n=n.replace(/^\s+/,"")}if(o(),e.startTime=i(),o(),n.slice(0,3)!=="-->")throw new Error("Malformed time stamp (time stamps must be separated by '-->'): "+r);n=n.slice(3),o(),e.endTime=i(),o(),s(n,e)}function ep(n){return n.replace(/<br(?: \/)?>/gi,`
`)}class T1{constructor(){this.state="INITIAL",this.buffer="",this.decoder=new E1,this.regionList=[],this.cue=null,this.oncue=void 0,this.onparsingerror=void 0,this.onflush=void 0}parse(e){const t=this;e&&(t.buffer+=t.decoder.decode(e,{stream:!0}));function r(){let s=t.buffer,o=0;for(s=ep(s);o<s.length&&s[o]!=="\r"&&s[o]!==`
`;)++o;const a=s.slice(0,o);return s[o]==="\r"&&++o,s[o]===`
`&&++o,t.buffer=s.slice(o),a}function i(s){Zf(s,function(o,a){},/:/)}try{let s="";if(t.state==="INITIAL"){if(!/\r\n|\n/.test(t.buffer))return this;s=r();const a=s.match(/^(ï»¿)?WEBVTT([ \t].*)?$/);if(!(a!=null&&a[0]))throw new Error("Malformed WebVTT signature.");t.state="HEADER"}let o=!1;for(;t.buffer;){if(!/\r\n|\n/.test(t.buffer))return this;switch(o?o=!1:s=r(),t.state){case"HEADER":/:/.test(s)?i(s):s||(t.state="ID");continue;case"NOTE":s||(t.state="ID");continue;case"ID":if(/^NOTE($|[ \t])/.test(s)){t.state="NOTE";break}if(!s)continue;if(t.cue=new Cl(0,0,""),t.state="CUE",s.indexOf("-->")===-1){t.cue.id=s;continue}case"CUE":if(!t.cue){t.state="BADCUE";continue}try{S1(s,t.cue,t.regionList)}catch{t.cue=null,t.state="BADCUE";continue}t.state="CUETEXT";continue;case"CUETEXT":{const a=s.indexOf("-->")!==-1;if(!s||a&&(o=!0)){t.oncue&&t.cue&&t.oncue(t.cue),t.cue=null,t.state="ID";continue}if(t.cue===null)continue;t.cue.text&&(t.cue.text+=`
`),t.cue.text+=s}continue;case"BADCUE":s||(t.state="ID")}}}catch{t.state==="CUETEXT"&&t.cue&&t.oncue&&t.oncue(t.cue),t.cue=null,t.state=t.state==="INITIAL"?"BADWEBVTT":"BADCUE"}return this}flush(){const e=this;try{if((e.cue||e.state==="HEADER")&&(e.buffer+=`

`,e.parse()),e.state==="INITIAL"||e.state==="BADWEBVTT")throw new Error("Malformed WebVTT signature.")}catch(t){e.onparsingerror&&e.onparsingerror(t)}return e.onflush&&e.onflush(),this}}const C1=/\r\n|\n\r|\n|\r/g,Go=function(e,t,r=0){return e.slice(r,r+t.length)===t},w1=function(e){let t=parseInt(e.slice(-3));const r=parseInt(e.slice(-6,-4)),i=parseInt(e.slice(-9,-7)),s=e.length>9?parseInt(e.substring(0,e.indexOf(":"))):0;if(!pe(t)||!pe(r)||!pe(i)||!pe(s))throw Error(`Malformed X-TIMESTAMP-MAP: Local:${e}`);return t+=1e3*r,t+=60*1e3*i,t+=60*60*1e3*s,t},Ko=function(e){let t=5381,r=e.length;for(;r;)t=t*33^e.charCodeAt(--r);return(t>>>0).toString()};function wl(n,e,t){return Ko(n.toString())+Ko(e.toString())+Ko(t)}const k1=function(e,t,r){let i=e[t],s=e[i.prevCC];if(!s||!s.new&&i.new){e.ccOffset=e.presentationOffset=i.start,i.new=!1;return}for(;(o=s)!=null&&o.new;){var o;e.ccOffset+=i.start-s.start,i.new=!1,i=s,s=e[i.prevCC]}e.presentationOffset=r};function L1(n,e,t,r,i,s,o){const a=new T1,l=tn(new Uint8Array(n)).trim().replace(C1,`
`).split(`
`),c=[],d=e?Wx(e.baseTime,e.timescale):0;let u="00:00.000",h=0,g=0,y,b=!0;a.oncue=function(E){const C=t[r];let w=t.ccOffset;const R=(h-d)/9e4;if(C!=null&&C.new&&(g!==void 0?w=t.ccOffset=C.start:k1(t,r,R)),R){if(!e){y=new Error("Missing initPTS for VTT MPEGTS");return}w=R-t.presentationOffset}const _=E.endTime-E.startTime,P=It((E.startTime+w-g)*9e4,i*9e4)/9e4;E.startTime=Math.max(P,0),E.endTime=Math.max(P+_,0);const H=E.text.trim();E.text=decodeURIComponent(encodeURIComponent(H)),E.id||(E.id=wl(E.startTime,E.endTime,H)),E.endTime>0&&c.push(E)},a.onparsingerror=function(E){y=E},a.onflush=function(){if(y){o(y);return}s(c)},l.forEach(E=>{if(b)if(Go(E,"X-TIMESTAMP-MAP=")){b=!1,E.slice(16).split(",").forEach(C=>{Go(C,"LOCAL:")?u=C.slice(6):Go(C,"MPEGTS:")&&(h=parseInt(C.slice(7)))});try{g=w1(u)/1e3}catch(C){y=C}return}else E===""&&(b=!1);a.parse(E+`
`)}),a.flush()}const jo="stpp.ttml.im1t",tp=/^(\d{2,}):(\d{2}):(\d{2}):(\d{2})\.?(\d+)?$/,np=/^(\d*(?:\.\d*)?)(h|m|s|ms|f|t)$/,R1={left:"start",center:"center",right:"end",start:"start",end:"end"};function uu(n,e,t,r){const i=Be(new Uint8Array(n),["mdat"]);if(i.length===0){r(new Error("Could not parse IMSC1 mdat"));return}const s=i.map(a=>tn(a)),o=Vx(e.baseTime,1,e.timescale);try{s.forEach(a=>t(I1(a,o)))}catch(a){r(a)}}function I1(n,e){const i=new DOMParser().parseFromString(n,"text/xml").getElementsByTagName("tt")[0];if(!i)throw new Error("Invalid ttml");const s={frameRate:30,subFrameRate:1,frameRateMultiplier:0,tickRate:0},o=Object.keys(s).reduce((u,h)=>(u[h]=i.getAttribute(`ttp:${h}`)||s[h],u),{}),a=i.getAttribute("xml:space")!=="preserve",l=hu(qo(i,"styling","style")),c=hu(qo(i,"layout","region")),d=qo(i,"body","[begin]");return[].map.call(d,u=>{const h=rp(u,a);if(!h||!u.hasAttribute("begin"))return null;const g=Vo(u.getAttribute("begin"),o),y=Vo(u.getAttribute("dur"),o);let b=Vo(u.getAttribute("end"),o);if(g===null)throw fu(u);if(b===null){if(y===null)throw fu(u);b=g+y}const E=new Cl(g-e,b-e,h);E.id=wl(E.startTime,E.endTime,E.text);const C=c[u.getAttribute("region")],w=l[u.getAttribute("style")],R=_1(C,w,l),{textAlign:_}=R;if(_){const P=R1[_];P&&(E.lineAlign=P),E.align=_}return ot(E,R),E}).filter(u=>u!==null)}function qo(n,e,t){const r=n.getElementsByTagName(e)[0];return r?[].slice.call(r.querySelectorAll(t)):[]}function hu(n){return n.reduce((e,t)=>{const r=t.getAttribute("xml:id");return r&&(e[r]=t),e},{})}function rp(n,e){return[].slice.call(n.childNodes).reduce((t,r,i)=>{var s;return r.nodeName==="br"&&i?t+`
`:(s=r.childNodes)!=null&&s.length?rp(r,e):e?t+r.textContent.trim().replace(/\s+/g," "):t+r.textContent},"")}function _1(n,e,t){const r="http://www.w3.org/ns/ttml#styling";let i=null;const s=["displayAlign","textAlign","color","backgroundColor","fontSize","fontFamily"],o=n!=null&&n.hasAttribute("style")?n.getAttribute("style"):null;return o&&t.hasOwnProperty(o)&&(i=t[o]),s.reduce((a,l)=>{const c=zo(e,r,l)||zo(n,r,l)||zo(i,r,l);return c&&(a[l]=c),a},{})}function zo(n,e,t){return n&&n.hasAttributeNS(e,t)?n.getAttributeNS(e,t):null}function fu(n){return new Error(`Could not parse ttml timestamp ${n}`)}function Vo(n,e){if(!n)return null;let t=Jf(n);return t===null&&(tp.test(n)?t=D1(n,e):np.test(n)&&(t=P1(n,e))),t}function D1(n,e){const t=tp.exec(n),r=(t[4]|0)+(t[5]|0)/e.subFrameRate;return(t[1]|0)*3600+(t[2]|0)*60+(t[3]|0)+r/e.frameRate}function P1(n,e){const t=np.exec(n),r=Number(t[1]);switch(t[2]){case"h":return r*3600;case"m":return r*60;case"ms":return r*1e3;case"f":return r/e.frameRate;case"t":return r/e.tickRate}return r}class B1{constructor(e){this.hls=void 0,this.media=null,this.config=void 0,this.enabled=!0,this.Cues=void 0,this.textTracks=[],this.tracks=[],this.initPTS=[],this.unparsedVttFrags=[],this.captionsTracks={},this.nonNativeCaptionsTracks={},this.cea608Parser1=void 0,this.cea608Parser2=void 0,this.lastCc=-1,this.lastSn=-1,this.lastPartIndex=-1,this.prevCC=-1,this.vttCCs=mu(),this.captionsProperties=void 0,this.hls=e,this.config=e.config,this.Cues=e.config.cueHandler,this.captionsProperties={textTrack1:{label:this.config.captionsTextTrack1Label,languageCode:this.config.captionsTextTrack1LanguageCode},textTrack2:{label:this.config.captionsTextTrack2Label,languageCode:this.config.captionsTextTrack2LanguageCode},textTrack3:{label:this.config.captionsTextTrack3Label,languageCode:this.config.captionsTextTrack3LanguageCode},textTrack4:{label:this.config.captionsTextTrack4Label,languageCode:this.config.captionsTextTrack4LanguageCode}},e.on(T.MEDIA_ATTACHING,this.onMediaAttaching,this),e.on(T.MEDIA_DETACHING,this.onMediaDetaching,this),e.on(T.MANIFEST_LOADING,this.onManifestLoading,this),e.on(T.MANIFEST_LOADED,this.onManifestLoaded,this),e.on(T.SUBTITLE_TRACKS_UPDATED,this.onSubtitleTracksUpdated,this),e.on(T.FRAG_LOADING,this.onFragLoading,this),e.on(T.FRAG_LOADED,this.onFragLoaded,this),e.on(T.FRAG_PARSING_USERDATA,this.onFragParsingUserdata,this),e.on(T.FRAG_DECRYPTED,this.onFragDecrypted,this),e.on(T.INIT_PTS_FOUND,this.onInitPtsFound,this),e.on(T.SUBTITLE_TRACKS_CLEARED,this.onSubtitleTracksCleared,this),e.on(T.BUFFER_FLUSHING,this.onBufferFlushing,this)}destroy(){const{hls:e}=this;e.off(T.MEDIA_ATTACHING,this.onMediaAttaching,this),e.off(T.MEDIA_DETACHING,this.onMediaDetaching,this),e.off(T.MANIFEST_LOADING,this.onManifestLoading,this),e.off(T.MANIFEST_LOADED,this.onManifestLoaded,this),e.off(T.SUBTITLE_TRACKS_UPDATED,this.onSubtitleTracksUpdated,this),e.off(T.FRAG_LOADING,this.onFragLoading,this),e.off(T.FRAG_LOADED,this.onFragLoaded,this),e.off(T.FRAG_PARSING_USERDATA,this.onFragParsingUserdata,this),e.off(T.FRAG_DECRYPTED,this.onFragDecrypted,this),e.off(T.INIT_PTS_FOUND,this.onInitPtsFound,this),e.off(T.SUBTITLE_TRACKS_CLEARED,this.onSubtitleTracksCleared,this),e.off(T.BUFFER_FLUSHING,this.onBufferFlushing,this),this.hls=this.config=null,this.cea608Parser1=this.cea608Parser2=void 0}initCea608Parsers(){if(this.config.enableCEA708Captions&&(!this.cea608Parser1||!this.cea608Parser2)){const e=new Ji(this,"textTrack1"),t=new Ji(this,"textTrack2"),r=new Ji(this,"textTrack3"),i=new Ji(this,"textTrack4");this.cea608Parser1=new lu(1,e,t),this.cea608Parser2=new lu(3,r,i)}}addCues(e,t,r,i,s){let o=!1;for(let a=s.length;a--;){const l=s[a],c=O1(l[0],l[1],t,r);if(c>=0&&(l[0]=Math.min(l[0],t),l[1]=Math.max(l[1],r),o=!0,c/(r-t)>.5))return}if(o||s.push([t,r]),this.config.renderTextTracksNatively){const a=this.captionsTracks[e];this.Cues.newCue(a,t,r,i)}else{const a=this.Cues.newCue(null,t,r,i);this.hls.trigger(T.CUES_PARSED,{type:"captions",cues:a,track:e})}}onInitPtsFound(e,{frag:t,id:r,initPTS:i,timescale:s}){const{unparsedVttFrags:o}=this;r==="main"&&(this.initPTS[t.cc]={baseTime:i,timescale:s}),o.length&&(this.unparsedVttFrags=[],o.forEach(a=>{this.onFragLoaded(T.FRAG_LOADED,a)}))}getExistingTrack(e,t){const{media:r}=this;if(r)for(let i=0;i<r.textTracks.length;i++){const s=r.textTracks[i];if(pu(s,{name:e,lang:t,attrs:{}}))return s}return null}createCaptionsTrack(e){this.config.renderTextTracksNatively?this.createNativeTrack(e):this.createNonNativeTrack(e)}createNativeTrack(e){if(this.captionsTracks[e])return;const{captionsProperties:t,captionsTracks:r,media:i}=this,{label:s,languageCode:o}=t[e],a=this.getExistingTrack(s,o);if(a)r[e]=a,lr(r[e]),Sf(r[e],i);else{const l=this.createTextTrack("captions",s,o);l&&(l[e]=!0,r[e]=l)}}createNonNativeTrack(e){if(this.nonNativeCaptionsTracks[e])return;const t=this.captionsProperties[e];if(!t)return;const r=t.label,i={_id:e,label:r,kind:"captions",default:t.media?!!t.media.default:!1,closedCaptions:t.media};this.nonNativeCaptionsTracks[e]=i,this.hls.trigger(T.NON_NATIVE_TEXT_TRACKS_FOUND,{tracks:[i]})}createTextTrack(e,t,r){const i=this.media;if(i)return i.addTextTrack(e,t,r)}onMediaAttaching(e,t){this.media=t.media,this._cleanTracks()}onMediaDetaching(){const{captionsTracks:e}=this;Object.keys(e).forEach(t=>{lr(e[t]),delete e[t]}),this.nonNativeCaptionsTracks={}}onManifestLoading(){this.lastCc=-1,this.lastSn=-1,this.lastPartIndex=-1,this.prevCC=-1,this.vttCCs=mu(),this._cleanTracks(),this.tracks=[],this.captionsTracks={},this.nonNativeCaptionsTracks={},this.textTracks=[],this.unparsedVttFrags=[],this.initPTS=[],this.cea608Parser1&&this.cea608Parser2&&(this.cea608Parser1.reset(),this.cea608Parser2.reset())}_cleanTracks(){const{media:e}=this;if(!e)return;const t=e.textTracks;if(t)for(let r=0;r<t.length;r++)lr(t[r])}onSubtitleTracksUpdated(e,t){const r=t.subtitleTracks||[],i=r.some(s=>s.textCodec===jo);if(this.config.enableWebVTT||i&&this.config.enableIMSC1){if(Yf(this.tracks,r)){this.tracks=r;return}if(this.textTracks=[],this.tracks=r,this.config.renderTextTracksNatively){const o=this.media,a=o?us(o.textTracks):null;if(this.tracks.forEach((l,c)=>{let d;if(a){let u=null;for(let h=0;h<a.length;h++)if(a[h]&&pu(a[h],l)){u=a[h],a[h]=null;break}u&&(d=u)}if(d)lr(d);else{const u=ip(l);d=this.createTextTrack(u,l.name,l.lang),d&&(d.mode="disabled")}d&&this.textTracks.push(d)}),a!=null&&a.length){const l=a.filter(c=>c!==null).map(c=>c.label);l.length&&B.warn(`Media element contains unused subtitle tracks: ${l.join(", ")}. Replace media element for each source to clear TextTracks and captions menu.`)}}else if(this.tracks.length){const o=this.tracks.map(a=>({label:a.name,kind:a.type.toLowerCase(),default:a.default,subtitleTrack:a}));this.hls.trigger(T.NON_NATIVE_TEXT_TRACKS_FOUND,{tracks:o})}}}onManifestLoaded(e,t){this.config.enableCEA708Captions&&t.captions&&t.captions.forEach(r=>{const i=/(?:CC|SERVICE)([1-4])/.exec(r.instreamId);if(!i)return;const s=`textTrack${i[1]}`,o=this.captionsProperties[s];o&&(o.label=r.name,r.lang&&(o.languageCode=r.lang),o.media=r)})}closedCaptionsForLevel(e){const t=this.hls.levels[e.level];return t==null?void 0:t.attrs["CLOSED-CAPTIONS"]}onFragLoading(e,t){this.initCea608Parsers();const{cea608Parser1:r,cea608Parser2:i,lastCc:s,lastSn:o,lastPartIndex:a}=this;if(!(!this.enabled||!r||!i)&&t.frag.type===ke.MAIN){var l,c;const{cc:d,sn:u}=t.frag,h=(l=t==null||(c=t.part)==null?void 0:c.index)!=null?l:-1;u===o+1||u===o&&h===a+1||d===s||(r.reset(),i.reset()),this.lastCc=d,this.lastSn=u,this.lastPartIndex=h}}onFragLoaded(e,t){const{frag:r,payload:i}=t;if(r.type===ke.SUBTITLE)if(i.byteLength){const s=r.decryptdata,o="stats"in t;if(s==null||!s.encrypted||o){const a=this.tracks[r.level],l=this.vttCCs;l[r.cc]||(l[r.cc]={start:r.start,prevCC:this.prevCC,new:!0},this.prevCC=r.cc),a&&a.textCodec===jo?this._parseIMSC1(r,i):this._parseVTTs(t)}}else this.hls.trigger(T.SUBTITLE_FRAG_PROCESSED,{success:!1,frag:r,error:new Error("Empty subtitle payload")})}_parseIMSC1(e,t){const r=this.hls;uu(t,this.initPTS[e.cc],i=>{this._appendCues(i,e.level),r.trigger(T.SUBTITLE_FRAG_PROCESSED,{success:!0,frag:e})},i=>{B.log(`Failed to parse IMSC1: ${i}`),r.trigger(T.SUBTITLE_FRAG_PROCESSED,{success:!1,frag:e,error:i})})}_parseVTTs(e){var t;const{frag:r,payload:i}=e,{initPTS:s,unparsedVttFrags:o}=this,a=s.length-1;if(!s[r.cc]&&a===-1){o.push(e);return}const l=this.hls,c=(t=r.initSegment)!=null&&t.data?Bt(r.initSegment.data,new Uint8Array(i)):i;L1(c,this.initPTS[r.cc],this.vttCCs,r.cc,r.start,d=>{this._appendCues(d,r.level),l.trigger(T.SUBTITLE_FRAG_PROCESSED,{success:!0,frag:r})},d=>{const u=d.message==="Missing initPTS for VTT MPEGTS";u?o.push(e):this._fallbackToIMSC1(r,i),B.log(`Failed to parse VTT cue: ${d}`),!(u&&a>r.cc)&&l.trigger(T.SUBTITLE_FRAG_PROCESSED,{success:!1,frag:r,error:d})})}_fallbackToIMSC1(e,t){const r=this.tracks[e.level];r.textCodec||uu(t,this.initPTS[e.cc],()=>{r.textCodec=jo,this._parseIMSC1(e,t)},()=>{r.textCodec="wvtt"})}_appendCues(e,t){const r=this.hls;if(this.config.renderTextTracksNatively){const i=this.textTracks[t];if(!i||i.mode==="disabled")return;e.forEach(s=>Tf(i,s))}else{const i=this.tracks[t];if(!i)return;const s=i.default?"default":"subtitles"+t;r.trigger(T.CUES_PARSED,{type:"subtitles",cues:e,track:s})}}onFragDecrypted(e,t){const{frag:r}=t;r.type===ke.SUBTITLE&&this.onFragLoaded(T.FRAG_LOADED,t)}onSubtitleTracksCleared(){this.tracks=[],this.captionsTracks={}}onFragParsingUserdata(e,t){this.initCea608Parsers();const{cea608Parser1:r,cea608Parser2:i}=this;if(!this.enabled||!r||!i)return;const{frag:s,samples:o}=t;if(!(s.type===ke.MAIN&&this.closedCaptionsForLevel(s)==="NONE"))for(let a=0;a<o.length;a++){const l=o[a].bytes;if(l){const c=this.extractCea608Data(l);r.addData(o[a].pts,c[0]),i.addData(o[a].pts,c[1])}}}onBufferFlushing(e,{startOffset:t,endOffset:r,endOffsetSubtitles:i,type:s}){const{media:o}=this;if(!(!o||o.currentTime<r)){if(!s||s==="video"){const{captionsTracks:a}=this;Object.keys(a).forEach(l=>Ea(a[l],t,r))}if(this.config.renderTextTracksNatively&&t===0&&i!==void 0){const{textTracks:a}=this;Object.keys(a).forEach(l=>Ea(a[l],t,i))}}}extractCea608Data(e){const t=[[],[]],r=e[0]&31;let i=2;for(let s=0;s<r;s++){const o=e[i++],a=127&e[i++],l=127&e[i++];if(a===0&&l===0)continue;if((4&o)!==0){const d=3&o;(d===0||d===1)&&(t[d].push(a),t[d].push(l))}}return t}}function ip(n){return n.characteristics&&/transcribes-spoken-dialog/gi.test(n.characteristics)&&/describes-music-and-sound/gi.test(n.characteristics)?"captions":"subtitles"}function pu(n,e){return!!n&&n.kind===ip(e)&&ka(e,n)}function O1(n,e,t,r){return Math.min(e,r)-Math.max(n,t)}function mu(){return{ccOffset:0,presentationOffset:0,0:{start:0,prevCC:-1,new:!0}}}class kl{constructor(e){this.hls=void 0,this.autoLevelCapping=void 0,this.firstLevel=void 0,this.media=void 0,this.restrictedLevels=void 0,this.timer=void 0,this.clientRect=void 0,this.streamController=void 0,this.hls=e,this.autoLevelCapping=Number.POSITIVE_INFINITY,this.firstLevel=-1,this.media=null,this.restrictedLevels=[],this.timer=void 0,this.clientRect=null,this.registerListeners()}setStreamController(e){this.streamController=e}destroy(){this.hls&&this.unregisterListener(),this.timer&&this.stopCapping(),this.media=null,this.clientRect=null,this.hls=this.streamController=null}registerListeners(){const{hls:e}=this;e.on(T.FPS_DROP_LEVEL_CAPPING,this.onFpsDropLevelCapping,this),e.on(T.MEDIA_ATTACHING,this.onMediaAttaching,this),e.on(T.MANIFEST_PARSED,this.onManifestParsed,this),e.on(T.LEVELS_UPDATED,this.onLevelsUpdated,this),e.on(T.BUFFER_CODECS,this.onBufferCodecs,this),e.on(T.MEDIA_DETACHING,this.onMediaDetaching,this)}unregisterListener(){const{hls:e}=this;e.off(T.FPS_DROP_LEVEL_CAPPING,this.onFpsDropLevelCapping,this),e.off(T.MEDIA_ATTACHING,this.onMediaAttaching,this),e.off(T.MANIFEST_PARSED,this.onManifestParsed,this),e.off(T.LEVELS_UPDATED,this.onLevelsUpdated,this),e.off(T.BUFFER_CODECS,this.onBufferCodecs,this),e.off(T.MEDIA_DETACHING,this.onMediaDetaching,this)}onFpsDropLevelCapping(e,t){const r=this.hls.levels[t.droppedLevel];this.isLevelAllowed(r)&&this.restrictedLevels.push({bitrate:r.bitrate,height:r.height,width:r.width})}onMediaAttaching(e,t){this.media=t.media instanceof HTMLVideoElement?t.media:null,this.clientRect=null,this.timer&&this.hls.levels.length&&this.detectPlayerSize()}onManifestParsed(e,t){const r=this.hls;this.restrictedLevels=[],this.firstLevel=t.firstLevel,r.config.capLevelToPlayerSize&&t.video&&this.startCapping()}onLevelsUpdated(e,t){this.timer&&pe(this.autoLevelCapping)&&this.detectPlayerSize()}onBufferCodecs(e,t){this.hls.config.capLevelToPlayerSize&&t.video&&this.startCapping()}onMediaDetaching(){this.stopCapping()}detectPlayerSize(){if(this.media){if(this.mediaHeight<=0||this.mediaWidth<=0){this.clientRect=null;return}const e=this.hls.levels;if(e.length){const t=this.hls,r=this.getMaxLevel(e.length-1);r!==this.autoLevelCapping&&B.log(`Setting autoLevelCapping to ${r}: ${e[r].height}p@${e[r].bitrate} for media ${this.mediaWidth}x${this.mediaHeight}`),t.autoLevelCapping=r,t.autoLevelCapping>this.autoLevelCapping&&this.streamController&&this.streamController.nextLevelSwitch(),this.autoLevelCapping=t.autoLevelCapping}}}getMaxLevel(e){const t=this.hls.levels;if(!t.length)return-1;const r=t.filter((i,s)=>this.isLevelAllowed(i)&&s<=e);return this.clientRect=null,kl.getMaxLevelByMediaSize(r,this.mediaWidth,this.mediaHeight)}startCapping(){this.timer||(this.autoLevelCapping=Number.POSITIVE_INFINITY,self.clearInterval(this.timer),this.timer=self.setInterval(this.detectPlayerSize.bind(this),1e3),this.detectPlayerSize())}stopCapping(){this.restrictedLevels=[],this.firstLevel=-1,this.autoLevelCapping=Number.POSITIVE_INFINITY,this.timer&&(self.clearInterval(this.timer),this.timer=void 0)}getDimensions(){if(this.clientRect)return this.clientRect;const e=this.media,t={width:0,height:0};if(e){const r=e.getBoundingClientRect();t.width=r.width,t.height=r.height,!t.width&&!t.height&&(t.width=r.right-r.left||e.width||0,t.height=r.bottom-r.top||e.height||0)}return this.clientRect=t,t}get mediaWidth(){return this.getDimensions().width*this.contentScaleFactor}get mediaHeight(){return this.getDimensions().height*this.contentScaleFactor}get contentScaleFactor(){let e=1;if(!this.hls.config.ignoreDevicePixelRatio)try{e=self.devicePixelRatio}catch{}return e}isLevelAllowed(e){return!this.restrictedLevels.some(r=>e.bitrate===r.bitrate&&e.width===r.width&&e.height===r.height)}static getMaxLevelByMediaSize(e,t,r){if(!(e!=null&&e.length))return-1;const i=(a,l)=>l?a.width!==l.width||a.height!==l.height:!0;let s=e.length-1;const o=Math.max(t,r);for(let a=0;a<e.length;a+=1){const l=e[a];if((l.width>=o||l.height>=o)&&i(l,e[a+1])){s=a;break}}return s}}class F1{constructor(e){this.hls=void 0,this.isVideoPlaybackQualityAvailable=!1,this.timer=void 0,this.media=null,this.lastTime=void 0,this.lastDroppedFrames=0,this.lastDecodedFrames=0,this.streamController=void 0,this.hls=e,this.registerListeners()}setStreamController(e){this.streamController=e}registerListeners(){this.hls.on(T.MEDIA_ATTACHING,this.onMediaAttaching,this)}unregisterListeners(){this.hls.off(T.MEDIA_ATTACHING,this.onMediaAttaching,this)}destroy(){this.timer&&clearInterval(this.timer),this.unregisterListeners(),this.isVideoPlaybackQualityAvailable=!1,this.media=null}onMediaAttaching(e,t){const r=this.hls.config;if(r.capLevelOnFPSDrop){const i=t.media instanceof self.HTMLVideoElement?t.media:null;this.media=i,i&&typeof i.getVideoPlaybackQuality=="function"&&(this.isVideoPlaybackQualityAvailable=!0),self.clearInterval(this.timer),this.timer=self.setInterval(this.checkFPSInterval.bind(this),r.fpsDroppedMonitoringPeriod)}}checkFPS(e,t,r){const i=performance.now();if(t){if(this.lastTime){const s=i-this.lastTime,o=r-this.lastDroppedFrames,a=t-this.lastDecodedFrames,l=1e3*o/s,c=this.hls;if(c.trigger(T.FPS_DROP,{currentDropped:o,currentDecoded:a,totalDroppedFrames:r}),l>0&&o>c.config.fpsDroppedMonitoringThreshold*a){let d=c.currentLevel;B.warn("drop FPS ratio greater than max allowed value for currentLevel: "+d),d>0&&(c.autoLevelCapping===-1||c.autoLevelCapping>=d)&&(d=d-1,c.trigger(T.FPS_DROP_LEVEL_CAPPING,{level:d,droppedLevel:c.currentLevel}),c.autoLevelCapping=d,this.streamController.nextLevelSwitch())}}this.lastTime=i,this.lastDroppedFrames=r,this.lastDecodedFrames=t}}checkFPSInterval(){const e=this.media;if(e)if(this.isVideoPlaybackQualityAvailable){const t=e.getVideoPlaybackQuality();this.checkFPS(e,t.totalVideoFrames,t.droppedVideoFrames)}else this.checkFPS(e,e.webkitDecodedFrameCount,e.webkitDroppedFrameCount)}}const es="[eme]";class pr{constructor(e){this.hls=void 0,this.config=void 0,this.media=null,this.keyFormatPromise=null,this.keySystemAccessPromises={},this._requestLicenseFailureCount=0,this.mediaKeySessions=[],this.keyIdToKeySessionPromise={},this.setMediaKeysQueue=pr.CDMCleanupPromise?[pr.CDMCleanupPromise]:[],this.onMediaEncrypted=this._onMediaEncrypted.bind(this),this.onWaitingForKey=this._onWaitingForKey.bind(this),this.debug=B.debug.bind(B,es),this.log=B.log.bind(B,es),this.warn=B.warn.bind(B,es),this.error=B.error.bind(B,es),this.hls=e,this.config=e.config,this.registerListeners()}destroy(){this.unregisterListeners(),this.onMediaDetached();const e=this.config;e.requestMediaKeySystemAccessFunc=null,e.licenseXhrSetup=e.licenseResponseCallback=void 0,e.drmSystems=e.drmSystemOptions={},this.hls=this.onMediaEncrypted=this.onWaitingForKey=this.keyIdToKeySessionPromise=null,this.config=null}registerListeners(){this.hls.on(T.MEDIA_ATTACHED,this.onMediaAttached,this),this.hls.on(T.MEDIA_DETACHED,this.onMediaDetached,this),this.hls.on(T.MANIFEST_LOADING,this.onManifestLoading,this),this.hls.on(T.MANIFEST_LOADED,this.onManifestLoaded,this)}unregisterListeners(){this.hls.off(T.MEDIA_ATTACHED,this.onMediaAttached,this),this.hls.off(T.MEDIA_DETACHED,this.onMediaDetached,this),this.hls.off(T.MANIFEST_LOADING,this.onManifestLoading,this),this.hls.off(T.MANIFEST_LOADED,this.onManifestLoaded,this)}getLicenseServerUrl(e){const{drmSystems:t,widevineLicenseUrl:r}=this.config,i=t[e];if(i)return i.licenseUrl;if(e===Ze.WIDEVINE&&r)return r;throw new Error(`no license server URL configured for key-system "${e}"`)}getServerCertificateUrl(e){const{drmSystems:t}=this.config,r=t[e];if(r)return r.serverCertificateUrl;this.log(`No Server Certificate in config.drmSystems["${e}"]`)}attemptKeySystemAccess(e){const t=this.hls.levels,r=(o,a,l)=>!!o&&l.indexOf(o)===a,i=t.map(o=>o.audioCodec).filter(r),s=t.map(o=>o.videoCodec).filter(r);return i.length+s.length===0&&s.push("avc1.42e01e"),new Promise((o,a)=>{const l=c=>{const d=c.shift();this.getMediaKeysPromise(d,i,s).then(u=>o({keySystem:d,mediaKeys:u})).catch(u=>{c.length?l(c):u instanceof Rt?a(u):a(new Rt({type:Le.KEY_SYSTEM_ERROR,details:$.KEY_SYSTEM_NO_ACCESS,error:u,fatal:!0},u.message))})};l(e)})}requestMediaKeySystemAccess(e,t){const{requestMediaKeySystemAccessFunc:r}=this.config;if(typeof r!="function"){let i=`Configured requestMediaKeySystemAccess is not a function ${r}`;return df===null&&self.location.protocol==="http:"&&(i=`navigator.requestMediaKeySystemAccess is not available over insecure protocol ${location.protocol}`),Promise.reject(new Error(i))}return r(e,t)}getMediaKeysPromise(e,t,r){const i=Vv(e,t,r,this.config.drmSystemOptions),s=this.keySystemAccessPromises[e];let o=s==null?void 0:s.keySystemAccess;if(!o){this.log(`Requesting encrypted media "${e}" key-system access with config: ${JSON.stringify(i)}`),o=this.requestMediaKeySystemAccess(e,i);const a=this.keySystemAccessPromises[e]={keySystemAccess:o};return o.catch(l=>{this.log(`Failed to obtain access to key-system "${e}": ${l}`)}),o.then(l=>{this.log(`Access for key-system "${l.keySystem}" obtained`);const c=this.fetchServerCertificate(e);return this.log(`Create media-keys for "${e}"`),a.mediaKeys=l.createMediaKeys().then(d=>(this.log(`Media-keys created for "${e}"`),c.then(u=>u?this.setMediaKeysServerCertificate(d,e,u):d))),a.mediaKeys.catch(d=>{this.error(`Failed to create media-keys for "${e}"}: ${d}`)}),a.mediaKeys})}return o.then(()=>s.mediaKeys)}createMediaKeySessionContext({decryptdata:e,keySystem:t,mediaKeys:r}){this.log(`Creating key-system session "${t}" keyId: ${Wt.hexDump(e.keyId||[])}`);const i=r.createSession(),s={decryptdata:e,keySystem:t,mediaKeys:r,mediaKeysSession:i,keyStatus:"status-pending"};return this.mediaKeySessions.push(s),s}renewKeySession(e){const t=e.decryptdata;if(t.pssh){const r=this.createMediaKeySessionContext(e),i=this.getKeyIdString(t),s="cenc";this.keyIdToKeySessionPromise[i]=this.generateRequestWithPreferredKeySession(r,s,t.pssh,"expired")}else this.warn("Could not renew expired session. Missing pssh initData.");this.removeSession(e)}getKeyIdString(e){if(!e)throw new Error("Could not read keyId of undefined decryptdata");if(e.keyId===null)throw new Error("keyId is null");return Wt.hexDump(e.keyId)}updateKeySession(e,t){var r;const i=e.mediaKeysSession;return this.log(`Updating key-session "${i.sessionId}" for keyID ${Wt.hexDump(((r=e.decryptdata)==null?void 0:r.keyId)||[])}
      } (data length: ${t&&t.byteLength})`),i.update(t)}selectKeySystemFormat(e){const t=Object.keys(e.levelkeys||{});return this.keyFormatPromise||(this.log(`Selecting key-system from fragment (sn: ${e.sn} ${e.type}: ${e.level}) key formats ${t.join(", ")}`),this.keyFormatPromise=this.getKeyFormatPromise(t)),this.keyFormatPromise}getKeyFormatPromise(e){return new Promise((t,r)=>{const i=Ro(this.config),s=e.map(vd).filter(o=>!!o&&i.indexOf(o)!==-1);return this.getKeySystemSelectionPromise(s).then(({keySystem:o})=>{const a=Ed(o);a?t(a):r(new Error(`Unable to find format for key-system "${o}"`))}).catch(r)})}loadKey(e){const t=e.keyInfo.decryptdata,r=this.getKeyIdString(t),i=`(keyId: ${r} format: "${t.keyFormat}" method: ${t.method} uri: ${t.uri})`;this.log(`Starting session for key ${i}`);let s=this.keyIdToKeySessionPromise[r];return s||(s=this.keyIdToKeySessionPromise[r]=this.getKeySystemForKeyPromise(t).then(({keySystem:o,mediaKeys:a})=>(this.throwIfDestroyed(),this.log(`Handle encrypted media sn: ${e.frag.sn} ${e.frag.type}: ${e.frag.level} using key ${i}`),this.attemptSetMediaKeys(o,a).then(()=>{this.throwIfDestroyed();const l=this.createMediaKeySessionContext({keySystem:o,mediaKeys:a,decryptdata:t}),c="cenc";return this.generateRequestWithPreferredKeySession(l,c,t.pssh,"playlist-key")}))),s.catch(o=>this.handleError(o))),s}throwIfDestroyed(e="Invalid state"){if(!this.hls)throw new Error("invalid state")}handleError(e){this.hls&&(this.error(e.message),e instanceof Rt?this.hls.trigger(T.ERROR,e.data):this.hls.trigger(T.ERROR,{type:Le.KEY_SYSTEM_ERROR,details:$.KEY_SYSTEM_NO_KEYS,error:e,fatal:!0}))}getKeySystemForKeyPromise(e){const t=this.getKeyIdString(e),r=this.keyIdToKeySessionPromise[t];if(!r){const i=vd(e.keyFormat),s=i?[i]:Ro(this.config);return this.attemptKeySystemAccess(s)}return r}getKeySystemSelectionPromise(e){if(e.length||(e=Ro(this.config)),e.length===0)throw new Rt({type:Le.KEY_SYSTEM_ERROR,details:$.KEY_SYSTEM_NO_CONFIGURED_LICENSE,fatal:!0},`Missing key-system license configuration options ${JSON.stringify({drmSystems:this.config.drmSystems})}`);return this.attemptKeySystemAccess(e)}_onMediaEncrypted(e){const{initDataType:t,initData:r}=e;if(this.debug(`"${e.type}" event: init data type: "${t}"`),r===null)return;let i,s;if(t==="sinf"&&this.config.drmSystems[Ze.FAIRPLAY]){const d=ct(new Uint8Array(r));try{const u=hl(JSON.parse(d).sinf),h=Af(new Uint8Array(u));if(!h)return;i=h.subarray(8,24),s=Ze.FAIRPLAY}catch{this.warn('Failed to parse sinf "encrypted" event message initData');return}}else{const d=AE(r);if(d===null)return;d.version===0&&d.systemId===cf.WIDEVINE&&d.data&&(i=d.data.subarray(8,24)),s=zv(d.systemId)}if(!s||!i)return;const o=Wt.hexDump(i),{keyIdToKeySessionPromise:a,mediaKeySessions:l}=this;let c=a[o];for(let d=0;d<l.length;d++){const u=l[d],h=u.decryptdata;if(h.pssh||!h.keyId)continue;const g=Wt.hexDump(h.keyId);if(o===g||h.uri.replace(/-/g,"").indexOf(o)!==-1){c=a[g],delete a[g],h.pssh=new Uint8Array(r),h.keyId=i,c=a[o]=c.then(()=>this.generateRequestWithPreferredKeySession(u,t,r,"encrypted-event-key-match"));break}}c||(c=a[o]=this.getKeySystemSelectionPromise([s]).then(({keySystem:d,mediaKeys:u})=>{var h;this.throwIfDestroyed();const g=new wi("ISO-23001-7",o,(h=Ed(d))!=null?h:"");return g.pssh=new Uint8Array(r),g.keyId=i,this.attemptSetMediaKeys(d,u).then(()=>{this.throwIfDestroyed();const y=this.createMediaKeySessionContext({decryptdata:g,keySystem:d,mediaKeys:u});return this.generateRequestWithPreferredKeySession(y,t,r,"encrypted-event-no-match")})})),c.catch(d=>this.handleError(d))}_onWaitingForKey(e){this.log(`"${e.type}" event`)}attemptSetMediaKeys(e,t){const r=this.setMediaKeysQueue.slice();this.log(`Setting media-keys for "${e}"`);const i=Promise.all(r).then(()=>{if(!this.media)throw new Error("Attempted to set mediaKeys without media element attached");return this.media.setMediaKeys(t)});return this.setMediaKeysQueue.push(i),i.then(()=>{this.log(`Media-keys set for "${e}"`),r.push(i),this.setMediaKeysQueue=this.setMediaKeysQueue.filter(s=>r.indexOf(s)===-1)})}generateRequestWithPreferredKeySession(e,t,r,i){var s,o;const a=(s=this.config.drmSystems)==null||(o=s[e.keySystem])==null?void 0:o.generateRequest;if(a)try{const y=a.call(this.hls,t,r,e);if(!y)throw new Error("Invalid response from configured generateRequest filter");t=y.initDataType,r=e.decryptdata.pssh=y.initData?new Uint8Array(y.initData):null}catch(y){var l;if(this.warn(y.message),(l=this.hls)!=null&&l.config.debug)throw y}if(r===null)return this.log(`Skipping key-session request for "${i}" (no initData)`),Promise.resolve(e);const c=this.getKeyIdString(e.decryptdata);this.log(`Generating key-session request for "${i}": ${c} (init data type: ${t} length: ${r?r.byteLength:null})`);const d=new Tl,u=e._onmessage=y=>{const b=e.mediaKeysSession;if(!b){d.emit("error",new Error("invalid state"));return}const{messageType:E,message:C}=y;this.log(`"${E}" message event for session "${b.sessionId}" message size: ${C.byteLength}`),E==="license-request"||E==="license-renewal"?this.renewLicense(e,C).catch(w=>{this.handleError(w),d.emit("error",w)}):E==="license-release"?e.keySystem===Ze.FAIRPLAY&&(this.updateKeySession(e,ba("acknowledged")),this.removeSession(e)):this.warn(`unhandled media key message type "${E}"`)},h=e._onkeystatuseschange=y=>{if(!e.mediaKeysSession){d.emit("error",new Error("invalid state"));return}this.onKeyStatusChange(e);const E=e.keyStatus;d.emit("keyStatus",E),E==="expired"&&(this.warn(`${e.keySystem} expired for key ${c}`),this.renewKeySession(e))};e.mediaKeysSession.addEventListener("message",u),e.mediaKeysSession.addEventListener("keystatuseschange",h);const g=new Promise((y,b)=>{d.on("error",b),d.on("keyStatus",E=>{E.startsWith("usable")?y():E==="output-restricted"?b(new Rt({type:Le.KEY_SYSTEM_ERROR,details:$.KEY_SYSTEM_STATUS_OUTPUT_RESTRICTED,fatal:!1},"HDCP level output restricted")):E==="internal-error"?b(new Rt({type:Le.KEY_SYSTEM_ERROR,details:$.KEY_SYSTEM_STATUS_INTERNAL_ERROR,fatal:!0},`key status changed to "${E}"`)):E==="expired"?b(new Error("key expired while generating request")):this.warn(`unhandled key status change "${E}"`)})});return e.mediaKeysSession.generateRequest(t,r).then(()=>{var y;this.log(`Request generated for key-session "${(y=e.mediaKeysSession)==null?void 0:y.sessionId}" keyId: ${c}`)}).catch(y=>{throw new Rt({type:Le.KEY_SYSTEM_ERROR,details:$.KEY_SYSTEM_NO_SESSION,error:y,fatal:!1},`Error generating key-session request: ${y}`)}).then(()=>g).catch(y=>{throw d.removeAllListeners(),this.removeSession(e),y}).then(()=>(d.removeAllListeners(),e))}onKeyStatusChange(e){e.mediaKeysSession.keyStatuses.forEach((t,r)=>{this.log(`key status change "${t}" for keyStatuses keyId: ${Wt.hexDump("buffer"in r?new Uint8Array(r.buffer,r.byteOffset,r.byteLength):new Uint8Array(r))} session keyId: ${Wt.hexDump(new Uint8Array(e.decryptdata.keyId||[]))} uri: ${e.decryptdata.uri}`),e.keyStatus=t})}fetchServerCertificate(e){const t=this.config,r=t.loader,i=new r(t),s=this.getServerCertificateUrl(e);return s?(this.log(`Fetching server certificate for "${e}"`),new Promise((o,a)=>{const l={responseType:"arraybuffer",url:s},c=t.certLoadPolicy.default,d={loadPolicy:c,timeout:c.maxLoadTimeMs,maxRetry:0,retryDelay:0,maxRetryDelay:0},u={onSuccess:(h,g,y,b)=>{o(h.data)},onError:(h,g,y,b)=>{a(new Rt({type:Le.KEY_SYSTEM_ERROR,details:$.KEY_SYSTEM_SERVER_CERTIFICATE_REQUEST_FAILED,fatal:!0,networkDetails:y,response:pt({url:l.url,data:void 0},h)},`"${e}" certificate request failed (${s}). Status: ${h.code} (${h.text})`))},onTimeout:(h,g,y)=>{a(new Rt({type:Le.KEY_SYSTEM_ERROR,details:$.KEY_SYSTEM_SERVER_CERTIFICATE_REQUEST_FAILED,fatal:!0,networkDetails:y,response:{url:l.url,data:void 0}},`"${e}" certificate request timed out (${s})`))},onAbort:(h,g,y)=>{a(new Error("aborted"))}};i.load(l,d,u)})):Promise.resolve()}setMediaKeysServerCertificate(e,t,r){return new Promise((i,s)=>{e.setServerCertificate(r).then(o=>{this.log(`setServerCertificate ${o?"success":"not supported by CDM"} (${r==null?void 0:r.byteLength}) on "${t}"`),i(e)}).catch(o=>{s(new Rt({type:Le.KEY_SYSTEM_ERROR,details:$.KEY_SYSTEM_SERVER_CERTIFICATE_UPDATE_FAILED,error:o,fatal:!0},o.message))})})}renewLicense(e,t){return this.requestLicense(e,new Uint8Array(t)).then(r=>this.updateKeySession(e,new Uint8Array(r)).catch(i=>{throw new Rt({type:Le.KEY_SYSTEM_ERROR,details:$.KEY_SYSTEM_SESSION_UPDATE_FAILED,error:i,fatal:!0},i.message)}))}unpackPlayReadyKeyMessage(e,t){const r=String.fromCharCode.apply(null,new Uint16Array(t.buffer));if(!r.includes("PlayReadyKeyMessage"))return e.setRequestHeader("Content-Type","text/xml; charset=utf-8"),t;const i=new DOMParser().parseFromString(r,"application/xml"),s=i.querySelectorAll("HttpHeader");if(s.length>0){let d;for(let u=0,h=s.length;u<h;u++){var o,a;d=s[u];const g=(o=d.querySelector("name"))==null?void 0:o.textContent,y=(a=d.querySelector("value"))==null?void 0:a.textContent;g&&y&&e.setRequestHeader(g,y)}}const l=i.querySelector("Challenge"),c=l==null?void 0:l.textContent;if(!c)throw new Error("Cannot find <Challenge> in key message");return ba(atob(c))}setupLicenseXHR(e,t,r,i){const s=this.config.licenseXhrSetup;return s?Promise.resolve().then(()=>{if(!r.decryptdata)throw new Error("Key removed");return s.call(this.hls,e,t,r,i)}).catch(o=>{if(!r.decryptdata)throw o;return e.open("POST",t,!0),s.call(this.hls,e,t,r,i)}).then(o=>(e.readyState||e.open("POST",t,!0),{xhr:e,licenseChallenge:o||i})):(e.open("POST",t,!0),Promise.resolve({xhr:e,licenseChallenge:i}))}requestLicense(e,t){const r=this.config.keyLoadPolicy.default;return new Promise((i,s)=>{const o=this.getLicenseServerUrl(e.keySystem);this.log(`Sending license request to URL: ${o}`);const a=new XMLHttpRequest;a.responseType="arraybuffer",a.onreadystatechange=()=>{if(!this.hls||!e.mediaKeysSession)return s(new Error("invalid state"));if(a.readyState===4)if(a.status===200){this._requestLicenseFailureCount=0;let l=a.response;this.log(`License received ${l instanceof ArrayBuffer?l.byteLength:l}`);const c=this.config.licenseResponseCallback;if(c)try{l=c.call(this.hls,a,o,e)}catch(d){this.error(d)}i(l)}else{const l=r.errorRetry,c=l?l.maxNumRetry:0;if(this._requestLicenseFailureCount++,this._requestLicenseFailureCount>c||a.status>=400&&a.status<500)s(new Rt({type:Le.KEY_SYSTEM_ERROR,details:$.KEY_SYSTEM_LICENSE_REQUEST_FAILED,fatal:!0,networkDetails:a,response:{url:o,data:void 0,code:a.status,text:a.statusText}},`License Request XHR failed (${o}). Status: ${a.status} (${a.statusText})`));else{const d=c-this._requestLicenseFailureCount+1;this.warn(`Retrying license request, ${d} attempts left`),this.requestLicense(e,t).then(i,s)}}},e.licenseXhr&&e.licenseXhr.readyState!==XMLHttpRequest.DONE&&e.licenseXhr.abort(),e.licenseXhr=a,this.setupLicenseXHR(a,o,e,t).then(({xhr:l,licenseChallenge:c})=>{e.keySystem==Ze.PLAYREADY&&(c=this.unpackPlayReadyKeyMessage(l,c)),l.send(c)})})}onMediaAttached(e,t){if(!this.config.emeEnabled)return;const r=t.media;this.media=r,r.addEventListener("encrypted",this.onMediaEncrypted),r.addEventListener("waitingforkey",this.onWaitingForKey)}onMediaDetached(){const e=this.media,t=this.mediaKeySessions;e&&(e.removeEventListener("encrypted",this.onMediaEncrypted),e.removeEventListener("waitingforkey",this.onWaitingForKey),this.media=null),this._requestLicenseFailureCount=0,this.setMediaKeysQueue=[],this.mediaKeySessions=[],this.keyIdToKeySessionPromise={},wi.clearKeyUriToKeyIdMap();const r=t.length;pr.CDMCleanupPromise=Promise.all(t.map(i=>this.removeSession(i)).concat(e==null?void 0:e.setMediaKeys(null).catch(i=>{this.log(`Could not clear media keys: ${i}`)}))).then(()=>{r&&(this.log("finished closing key sessions and clearing media keys"),t.length=0)}).catch(i=>{this.log(`Could not close sessions and clear media keys: ${i}`)})}onManifestLoading(){this.keyFormatPromise=null}onManifestLoaded(e,{sessionKeys:t}){if(!(!t||!this.config.emeEnabled)&&!this.keyFormatPromise){const r=t.reduce((i,s)=>(i.indexOf(s.keyFormat)===-1&&i.push(s.keyFormat),i),[]);this.log(`Selecting key-system from session-keys ${r.join(", ")}`),this.keyFormatPromise=this.getKeyFormatPromise(r)}}removeSession(e){const{mediaKeysSession:t,licenseXhr:r}=e;if(t){this.log(`Remove licenses and keys and close session ${t.sessionId}`),e._onmessage&&(t.removeEventListener("message",e._onmessage),e._onmessage=void 0),e._onkeystatuseschange&&(t.removeEventListener("keystatuseschange",e._onkeystatuseschange),e._onkeystatuseschange=void 0),r&&r.readyState!==XMLHttpRequest.DONE&&r.abort(),e.mediaKeysSession=e.decryptdata=e.licenseXhr=void 0;const i=this.mediaKeySessions.indexOf(e);return i>-1&&this.mediaKeySessions.splice(i,1),t.remove().catch(s=>{this.log(`Could not remove session: ${s}`)}).then(()=>t.close()).catch(s=>{this.log(`Could not close session: ${s}`)})}}}pr.CDMCleanupPromise=void 0;class Rt extends Error{constructor(e,t){super(t),this.data=void 0,e.error||(e.error=new Error(t)),this.data=e,e.err=e.error}}var At;(function(n){n.MANIFEST="m",n.AUDIO="a",n.VIDEO="v",n.MUXED="av",n.INIT="i",n.CAPTION="c",n.TIMED_TEXT="tt",n.KEY="k",n.OTHER="o"})(At||(At={}));var Ra;(function(n){n.DASH="d",n.HLS="h",n.SMOOTH="s",n.OTHER="o"})(Ra||(Ra={}));var Hn;(function(n){n.OBJECT="CMCD-Object",n.REQUEST="CMCD-Request",n.SESSION="CMCD-Session",n.STATUS="CMCD-Status"})(Hn||(Hn={}));const M1={[Hn.OBJECT]:["br","d","ot","tb"],[Hn.REQUEST]:["bl","dl","mtp","nor","nrr","su"],[Hn.SESSION]:["cid","pr","sf","sid","st","v"],[Hn.STATUS]:["bs","rtp"]};class Cr{constructor(e,t){this.value=void 0,this.params=void 0,Array.isArray(e)&&(e=e.map(r=>r instanceof Cr?r:new Cr(r))),this.value=e,this.params=t}}class sp{constructor(e){this.description=void 0,this.description=e}}const N1="Dict";function U1(n){return Array.isArray(n)?JSON.stringify(n):n instanceof Map?"Map{}":n instanceof Set?"Set{}":typeof n=="object"?JSON.stringify(n):String(n)}function $1(n,e,t,r){return new Error(`failed to ${n} "${U1(e)}" as ${t}`,{cause:r})}const gu="Bare Item",H1="Boolean",G1="Byte Sequence",K1="Decimal",j1="Integer";function q1(n){return n<-999999999999999||999999999999999<n}const z1=/[\x00-\x1f\x7f]+/,V1="Token",W1="Key";function nn(n,e,t){return $1("serialize",n,e,t)}function Y1(n){if(typeof n!="boolean")throw nn(n,H1);return n?"?1":"?0"}function Q1(n){return btoa(String.fromCharCode(...n))}function X1(n){if(ArrayBuffer.isView(n)===!1)throw nn(n,G1);return`:${Q1(n)}:`}function op(n){if(q1(n))throw nn(n,j1);return n.toString()}function J1(n){return`@${op(n.getTime()/1e3)}`}function ap(n,e){if(n<0)return-ap(-n,e);const t=Math.pow(10,e);if(Math.abs(n*t%1-.5)<Number.EPSILON){const i=Math.floor(n*t);return(i%2===0?i:i+1)/t}else return Math.round(n*t)/t}function Z1(n){const e=ap(n,3);if(Math.floor(Math.abs(e)).toString().length>12)throw nn(n,K1);const t=e.toString();return t.includes(".")?t:`${t}.0`}const eS="String";function tS(n){if(z1.test(n))throw nn(n,eS);return`"${n.replace(/\\/g,"\\\\").replace(/"/g,'\\"')}"`}function nS(n){return n.description||n.toString().slice(7,-1)}function yu(n){const e=nS(n);if(/^([a-zA-Z*])([!#$%&'*+\-.^_`|~\w:/]*)$/.test(e)===!1)throw nn(e,V1);return e}function Ia(n){switch(typeof n){case"number":if(!pe(n))throw nn(n,gu);return Number.isInteger(n)?op(n):Z1(n);case"string":return tS(n);case"symbol":return yu(n);case"boolean":return Y1(n);case"object":if(n instanceof Date)return J1(n);if(n instanceof Uint8Array)return X1(n);if(n instanceof sp)return yu(n);default:throw nn(n,gu)}}function _a(n){if(/^[a-z*][a-z0-9\-_.*]*$/.test(n)===!1)throw nn(n,W1);return n}function Ll(n){return n==null?"":Object.entries(n).map(([e,t])=>t===!0?`;${_a(e)}`:`;${_a(e)}=${Ia(t)}`).join("")}function lp(n){return n instanceof Cr?`${Ia(n.value)}${Ll(n.params)}`:Ia(n)}function rS(n){return`(${n.value.map(lp).join(" ")})${Ll(n.params)}`}function iS(n,e={whitespace:!0}){if(typeof n!="object")throw nn(n,N1);const t=n instanceof Map?n.entries():Object.entries(n),r=e!=null&&e.whitespace?" ":"";return Array.from(t).map(([i,s])=>{s instanceof Cr||(s=new Cr(s));let o=_a(i);return s.value===!0?o+=Ll(s.params):(o+="=",Array.isArray(s.value)?o+=rS(s):o+=lp(s)),o}).join(`,${r}`)}function sS(n,e){return iS(n,e)}const oS=n=>n==="ot"||n==="sf"||n==="st",aS=n=>typeof n=="number"?pe(n):n!=null&&n!==""&&n!==!1;function lS(n,e){const t=new URL(n),r=new URL(e);if(t.origin!==r.origin)return n;const i=t.pathname.split("/").slice(1),s=r.pathname.split("/").slice(1,-1);for(;i[0]===s[0];)i.shift(),s.shift();for(;s.length;)s.shift(),i.unshift("..");return i.join("/")}function cS(){try{return crypto.randomUUID()}catch{try{const e=URL.createObjectURL(new Blob),t=e.toString();return URL.revokeObjectURL(e),t.slice(t.lastIndexOf("/")+1)}catch{let t=new Date().getTime();return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,i=>{const s=(t+Math.random()*16)%16|0;return t=Math.floor(t/16),(i=="x"?s:s&3|8).toString(16)})}}}const gs=n=>Math.round(n),dS=(n,e)=>(e!=null&&e.baseUrl&&(n=lS(n,e.baseUrl)),encodeURIComponent(n)),ts=n=>gs(n/100)*100,uS={br:gs,d:gs,bl:ts,dl:ts,mtp:ts,nor:dS,rtp:ts,tb:gs};function hS(n,e){const t={};if(n==null||typeof n!="object")return t;const r=Object.keys(n).sort(),i=ot({},uS,e==null?void 0:e.formatters),s=e==null?void 0:e.filter;return r.forEach(o=>{if(s!=null&&s(o))return;let a=n[o];const l=i[o];l&&(a=l(a,e)),!(o==="v"&&a===1)&&(o=="pr"&&a===1||aS(a)&&(oS(o)&&typeof a=="string"&&(a=new sp(a)),t[o]=a))}),t}function cp(n,e={}){return n?sS(hS(n,e),ot({whitespace:!1},e)):""}function fS(n,e={}){if(!n)return{};const t=Object.entries(n),r=Object.entries(M1).concat(Object.entries((e==null?void 0:e.customHeaderMap)||{})),i=t.reduce((s,o)=>{var a,l;const[c,d]=o,u=((a=r.find(h=>h[1].includes(c)))==null?void 0:a[0])||Hn.REQUEST;return(l=s[u])!=null||(s[u]={}),s[u][c]=d,s},{});return Object.entries(i).reduce((s,[o,a])=>(s[o]=cp(a,e),s),{})}function pS(n,e,t){return ot(n,fS(e,t))}const mS="CMCD";function gS(n,e={}){if(!n)return"";const t=cp(n,e);return`${mS}=${encodeURIComponent(t)}`}const Au=/CMCD=[^&#]+/;function yS(n,e,t){const r=gS(e,t);if(!r)return n;if(Au.test(n))return n.replace(Au,r);const i=n.includes("?")?"&":"?";return`${n}${i}${r}`}class AS{constructor(e){this.hls=void 0,this.config=void 0,this.media=void 0,this.sid=void 0,this.cid=void 0,this.useHeaders=!1,this.includeKeys=void 0,this.initialized=!1,this.starved=!1,this.buffering=!0,this.audioBuffer=void 0,this.videoBuffer=void 0,this.onWaiting=()=>{this.initialized&&(this.starved=!0),this.buffering=!0},this.onPlaying=()=>{this.initialized||(this.initialized=!0),this.buffering=!1},this.applyPlaylistData=i=>{try{this.apply(i,{ot:At.MANIFEST,su:!this.initialized})}catch(s){B.warn("Could not generate manifest CMCD data.",s)}},this.applyFragmentData=i=>{try{const s=i.frag,o=this.hls.levels[s.level],a=this.getObjectType(s),l={d:s.duration*1e3,ot:a};(a===At.VIDEO||a===At.AUDIO||a==At.MUXED)&&(l.br=o.bitrate/1e3,l.tb=this.getTopBandwidth(a)/1e3,l.bl=this.getBufferLength(a)),this.apply(i,l)}catch(s){B.warn("Could not generate segment CMCD data.",s)}},this.hls=e;const t=this.config=e.config,{cmcd:r}=t;r!=null&&(t.pLoader=this.createPlaylistLoader(),t.fLoader=this.createFragmentLoader(),this.sid=r.sessionId||cS(),this.cid=r.contentId,this.useHeaders=r.useHeaders===!0,this.includeKeys=r.includeKeys,this.registerListeners())}registerListeners(){const e=this.hls;e.on(T.MEDIA_ATTACHED,this.onMediaAttached,this),e.on(T.MEDIA_DETACHED,this.onMediaDetached,this),e.on(T.BUFFER_CREATED,this.onBufferCreated,this)}unregisterListeners(){const e=this.hls;e.off(T.MEDIA_ATTACHED,this.onMediaAttached,this),e.off(T.MEDIA_DETACHED,this.onMediaDetached,this),e.off(T.BUFFER_CREATED,this.onBufferCreated,this)}destroy(){this.unregisterListeners(),this.onMediaDetached(),this.hls=this.config=this.audioBuffer=this.videoBuffer=null,this.onWaiting=this.onPlaying=null}onMediaAttached(e,t){this.media=t.media,this.media.addEventListener("waiting",this.onWaiting),this.media.addEventListener("playing",this.onPlaying)}onMediaDetached(){this.media&&(this.media.removeEventListener("waiting",this.onWaiting),this.media.removeEventListener("playing",this.onPlaying),this.media=null)}onBufferCreated(e,t){var r,i;this.audioBuffer=(r=t.tracks.audio)==null?void 0:r.buffer,this.videoBuffer=(i=t.tracks.video)==null?void 0:i.buffer}createData(){var e;return{v:1,sf:Ra.HLS,sid:this.sid,cid:this.cid,pr:(e=this.media)==null?void 0:e.playbackRate,mtp:this.hls.bandwidthEstimate/1e3}}apply(e,t={}){ot(t,this.createData());const r=t.ot===At.INIT||t.ot===At.VIDEO||t.ot===At.MUXED;this.starved&&r&&(t.bs=!0,t.su=!0,this.starved=!1),t.su==null&&(t.su=this.buffering);const{includeKeys:i}=this;i&&(t=Object.keys(t).reduce((s,o)=>(i.includes(o)&&(s[o]=t[o]),s),{})),this.useHeaders?(e.headers||(e.headers={}),pS(e.headers,t)):e.url=yS(e.url,t)}getObjectType(e){const{type:t}=e;if(t==="subtitle")return At.TIMED_TEXT;if(e.sn==="initSegment")return At.INIT;if(t==="audio")return At.AUDIO;if(t==="main")return this.hls.audioTracks.length?At.VIDEO:At.MUXED}getTopBandwidth(e){let t=0,r;const i=this.hls;if(e===At.AUDIO)r=i.audioTracks;else{const s=i.maxAutoLevel,o=s>-1?s+1:i.levels.length;r=i.levels.slice(0,o)}for(const s of r)s.bitrate>t&&(t=s.bitrate);return t>0?t:NaN}getBufferLength(e){const t=this.hls.media,r=e===At.AUDIO?this.audioBuffer:this.videoBuffer;return!r||!t?NaN:Xe.bufferInfo(r,t.currentTime,this.config.maxBufferHole).len*1e3}createPlaylistLoader(){const{pLoader:e}=this.config,t=this.applyPlaylistData,r=e||this.config.loader;return class{constructor(s){this.loader=void 0,this.loader=new r(s)}get stats(){return this.loader.stats}get context(){return this.loader.context}destroy(){this.loader.destroy()}abort(){this.loader.abort()}load(s,o,a){t(s),this.loader.load(s,o,a)}}}createFragmentLoader(){const{fLoader:e}=this.config,t=this.applyFragmentData,r=e||this.config.loader;return class{constructor(s){this.loader=void 0,this.loader=new r(s)}get stats(){return this.loader.stats}get context(){return this.loader.context}destroy(){this.loader.destroy()}abort(){this.loader.abort()}load(s,o,a){t(s),this.loader.load(s,o,a)}}}}const bS=3e5;class vS{constructor(e){this.hls=void 0,this.log=void 0,this.loader=null,this.uri=null,this.pathwayId=".",this.pathwayPriority=null,this.timeToLoad=300,this.reloadTimer=-1,this.updated=0,this.started=!1,this.enabled=!0,this.levels=null,this.audioTracks=null,this.subtitleTracks=null,this.penalizedPathways={},this.hls=e,this.log=B.log.bind(B,"[content-steering]:"),this.registerListeners()}registerListeners(){const e=this.hls;e.on(T.MANIFEST_LOADING,this.onManifestLoading,this),e.on(T.MANIFEST_LOADED,this.onManifestLoaded,this),e.on(T.MANIFEST_PARSED,this.onManifestParsed,this),e.on(T.ERROR,this.onError,this)}unregisterListeners(){const e=this.hls;e&&(e.off(T.MANIFEST_LOADING,this.onManifestLoading,this),e.off(T.MANIFEST_LOADED,this.onManifestLoaded,this),e.off(T.MANIFEST_PARSED,this.onManifestParsed,this),e.off(T.ERROR,this.onError,this))}startLoad(){if(this.started=!0,this.clearTimeout(),this.enabled&&this.uri){if(this.updated){const e=this.timeToLoad*1e3-(performance.now()-this.updated);if(e>0){this.scheduleRefresh(this.uri,e);return}}this.loadSteeringManifest(this.uri)}}stopLoad(){this.started=!1,this.loader&&(this.loader.destroy(),this.loader=null),this.clearTimeout()}clearTimeout(){this.reloadTimer!==-1&&(self.clearTimeout(this.reloadTimer),this.reloadTimer=-1)}destroy(){this.unregisterListeners(),this.stopLoad(),this.hls=null,this.levels=this.audioTracks=this.subtitleTracks=null}removeLevel(e){const t=this.levels;t&&(this.levels=t.filter(r=>r!==e))}onManifestLoading(){this.stopLoad(),this.enabled=!0,this.timeToLoad=300,this.updated=0,this.uri=null,this.pathwayId=".",this.levels=this.audioTracks=this.subtitleTracks=null}onManifestLoaded(e,t){const{contentSteering:r}=t;r!==null&&(this.pathwayId=r.pathwayId,this.uri=r.uri,this.started&&this.startLoad())}onManifestParsed(e,t){this.audioTracks=t.audioTracks,this.subtitleTracks=t.subtitleTracks}onError(e,t){const{errorAction:r}=t;if((r==null?void 0:r.action)===mt.SendAlternateToPenaltyBox&&r.flags===Ft.MoveAllAlternatesMatchingHost){const i=this.levels;let s=this.pathwayPriority,o=this.pathwayId;if(t.context){const{groupId:a,pathwayId:l,type:c}=t.context;a&&i?o=this.getPathwayForGroupId(a,c,o):l&&(o=l)}o in this.penalizedPathways||(this.penalizedPathways[o]=performance.now()),!s&&i&&(s=i.reduce((a,l)=>(a.indexOf(l.pathwayId)===-1&&a.push(l.pathwayId),a),[])),s&&s.length>1&&(this.updatePathwayPriority(s),r.resolved=this.pathwayId!==o),r.resolved||B.warn(`Could not resolve ${t.details} ("${t.error.message}") with content-steering for Pathway: ${o} levels: ${i&&i.length} priorities: ${JSON.stringify(s)} penalized: ${JSON.stringify(this.penalizedPathways)}`)}}filterParsedLevels(e){this.levels=e;let t=this.getLevelsForPathway(this.pathwayId);if(t.length===0){const r=e[0].pathwayId;this.log(`No levels found in Pathway ${this.pathwayId}. Setting initial Pathway to "${r}"`),t=this.getLevelsForPathway(r),this.pathwayId=r}return t.length!==e.length?(this.log(`Found ${t.length}/${e.length} levels in Pathway "${this.pathwayId}"`),t):e}getLevelsForPathway(e){return this.levels===null?[]:this.levels.filter(t=>e===t.pathwayId)}updatePathwayPriority(e){this.pathwayPriority=e;let t;const r=this.penalizedPathways,i=performance.now();Object.keys(r).forEach(s=>{i-r[s]>bS&&delete r[s]});for(let s=0;s<e.length;s++){const o=e[s];if(o in r)continue;if(o===this.pathwayId)return;const a=this.hls.nextLoadLevel,l=this.hls.levels[a];if(t=this.getLevelsForPathway(o),t.length>0){this.log(`Setting Pathway to "${o}"`),this.pathwayId=o,Lf(t),this.hls.trigger(T.LEVELS_UPDATED,{levels:t});const c=this.hls.levels[a];l&&c&&this.levels&&(c.attrs["STABLE-VARIANT-ID"]!==l.attrs["STABLE-VARIANT-ID"]&&c.bitrate!==l.bitrate&&this.log(`Unstable Pathways change from bitrate ${l.bitrate} to ${c.bitrate}`),this.hls.nextLoadLevel=a);break}}}getPathwayForGroupId(e,t,r){const i=this.getLevelsForPathway(r).concat(this.levels||[]);for(let s=0;s<i.length;s++)if(t===Ue.AUDIO_TRACK&&i[s].hasAudioGroup(e)||t===Ue.SUBTITLE_TRACK&&i[s].hasSubtitleGroup(e))return i[s].pathwayId;return r}clonePathways(e){const t=this.levels;if(!t)return;const r={},i={};e.forEach(s=>{const{ID:o,"BASE-ID":a,"URI-REPLACEMENT":l}=s;if(t.some(d=>d.pathwayId===o))return;const c=this.getLevelsForPathway(a).map(d=>{const u=new nt(d.attrs);u["PATHWAY-ID"]=o;const h=u.AUDIO&&`${u.AUDIO}_clone_${o}`,g=u.SUBTITLES&&`${u.SUBTITLES}_clone_${o}`;h&&(r[u.AUDIO]=h,u.AUDIO=h),g&&(i[u.SUBTITLES]=g,u.SUBTITLES=g);const y=dp(d.uri,u["STABLE-VARIANT-ID"],"PER-VARIANT-URIS",l),b=new Sr({attrs:u,audioCodec:d.audioCodec,bitrate:d.bitrate,height:d.height,name:d.name,url:y,videoCodec:d.videoCodec,width:d.width});if(d.audioGroups)for(let E=1;E<d.audioGroups.length;E++)b.addGroupId("audio",`${d.audioGroups[E]}_clone_${o}`);if(d.subtitleGroups)for(let E=1;E<d.subtitleGroups.length;E++)b.addGroupId("text",`${d.subtitleGroups[E]}_clone_${o}`);return b});t.push(...c),bu(this.audioTracks,r,l,o),bu(this.subtitleTracks,i,l,o)})}loadSteeringManifest(e){const t=this.hls.config,r=t.loader;this.loader&&this.loader.destroy(),this.loader=new r(t);let i;try{i=new self.URL(e)}catch{this.enabled=!1,this.log(`Failed to parse Steering Manifest URI: ${e}`);return}if(i.protocol!=="data:"){const d=(this.hls.bandwidthEstimate||t.abrEwmaDefaultEstimate)|0;i.searchParams.set("_HLS_pathway",this.pathwayId),i.searchParams.set("_HLS_throughput",""+d)}const s={responseType:"json",url:i.href},o=t.steeringManifestLoadPolicy.default,a=o.errorRetry||o.timeoutRetry||{},l={loadPolicy:o,timeout:o.maxLoadTimeMs,maxRetry:a.maxNumRetry||0,retryDelay:a.retryDelayMs||0,maxRetryDelay:a.maxRetryDelayMs||0},c={onSuccess:(d,u,h,g)=>{this.log(`Loaded steering manifest: "${i}"`);const y=d.data;if(y.VERSION!==1){this.log(`Steering VERSION ${y.VERSION} not supported!`);return}this.updated=performance.now(),this.timeToLoad=y.TTL;const{"RELOAD-URI":b,"PATHWAY-CLONES":E,"PATHWAY-PRIORITY":C}=y;if(b)try{this.uri=new self.URL(b,i).href}catch{this.enabled=!1,this.log(`Failed to parse Steering Manifest RELOAD-URI: ${b}`);return}this.scheduleRefresh(this.uri||h.url),E&&this.clonePathways(E);const w={steeringManifest:y,url:i.toString()};this.hls.trigger(T.STEERING_MANIFEST_LOADED,w),C&&this.updatePathwayPriority(C)},onError:(d,u,h,g)=>{if(this.log(`Error loading steering manifest: ${d.code} ${d.text} (${u.url})`),this.stopLoad(),d.code===410){this.enabled=!1,this.log(`Steering manifest ${u.url} no longer available`);return}let y=this.timeToLoad*1e3;if(d.code===429){const b=this.loader;if(typeof(b==null?void 0:b.getResponseHeader)=="function"){const E=b.getResponseHeader("Retry-After");E&&(y=parseFloat(E)*1e3)}this.log(`Steering manifest ${u.url} rate limited`);return}this.scheduleRefresh(this.uri||u.url,y)},onTimeout:(d,u,h)=>{this.log(`Timeout loading steering manifest (${u.url})`),this.scheduleRefresh(this.uri||u.url)}};this.log(`Requesting steering manifest: ${i}`),this.loader.load(s,l,c)}scheduleRefresh(e,t=this.timeToLoad*1e3){this.clearTimeout(),this.reloadTimer=self.setTimeout(()=>{var r;const i=(r=this.hls)==null?void 0:r.media;if(i&&!i.ended){this.loadSteeringManifest(e);return}this.scheduleRefresh(e,this.timeToLoad*1e3)},t)}}function bu(n,e,t,r){n&&Object.keys(e).forEach(i=>{const s=n.filter(o=>o.groupId===i).map(o=>{const a=ot({},o);return a.details=void 0,a.attrs=new nt(a.attrs),a.url=a.attrs.URI=dp(o.url,o.attrs["STABLE-RENDITION-ID"],"PER-RENDITION-URIS",t),a.groupId=a.attrs["GROUP-ID"]=e[i],a.attrs["PATHWAY-ID"]=r,a});n.push(...s)})}function dp(n,e,t,r){const{HOST:i,PARAMS:s,[t]:o}=r;let a;e&&(a=o==null?void 0:o[e],a&&(n=a));const l=new self.URL(n);return i&&!a&&(l.host=i),s&&Object.keys(s).sort().forEach(c=>{c&&l.searchParams.set(c,s[c])}),l.href}const ES=/^age:\s*[\d.]+\s*$/im;class up{constructor(e){this.xhrSetup=void 0,this.requestTimeout=void 0,this.retryTimeout=void 0,this.retryDelay=void 0,this.config=null,this.callbacks=null,this.context=null,this.loader=null,this.stats=void 0,this.xhrSetup=e&&e.xhrSetup||null,this.stats=new eo,this.retryDelay=0}destroy(){this.callbacks=null,this.abortInternal(),this.loader=null,this.config=null,this.context=null,this.xhrSetup=null,this.stats=null}abortInternal(){const e=this.loader;self.clearTimeout(this.requestTimeout),self.clearTimeout(this.retryTimeout),e&&(e.onreadystatechange=null,e.onprogress=null,e.readyState!==4&&(this.stats.aborted=!0,e.abort()))}abort(){var e;this.abortInternal(),(e=this.callbacks)!=null&&e.onAbort&&this.callbacks.onAbort(this.stats,this.context,this.loader)}load(e,t,r){if(this.stats.loading.start)throw new Error("Loader can only be used once.");this.stats.loading.start=self.performance.now(),this.context=e,this.config=t,this.callbacks=r,this.loadInternal()}loadInternal(){const{config:e,context:t}=this;if(!e||!t)return;const r=this.loader=new self.XMLHttpRequest,i=this.stats;i.loading.first=0,i.loaded=0,i.aborted=!1;const s=this.xhrSetup;s?Promise.resolve().then(()=>{if(!this.stats.aborted)return s(r,t.url)}).catch(o=>(r.open("GET",t.url,!0),s(r,t.url))).then(()=>{this.stats.aborted||this.openAndSendXhr(r,t,e)}).catch(o=>{this.callbacks.onError({code:r.status,text:o.message},t,r,i)}):this.openAndSendXhr(r,t,e)}openAndSendXhr(e,t,r){e.readyState||e.open("GET",t.url,!0);const i=t.headers,{maxTimeToFirstByteMs:s,maxLoadTimeMs:o}=r.loadPolicy;if(i)for(const a in i)e.setRequestHeader(a,i[a]);t.rangeEnd&&e.setRequestHeader("Range","bytes="+t.rangeStart+"-"+(t.rangeEnd-1)),e.onreadystatechange=this.readystatechange.bind(this),e.onprogress=this.loadprogress.bind(this),e.responseType=t.responseType,self.clearTimeout(this.requestTimeout),r.timeout=s&&pe(s)?s:o,this.requestTimeout=self.setTimeout(this.loadtimeout.bind(this),r.timeout),e.send()}readystatechange(){const{context:e,loader:t,stats:r}=this;if(!e||!t)return;const i=t.readyState,s=this.config;if(!r.aborted&&i>=2&&(r.loading.first===0&&(r.loading.first=Math.max(self.performance.now(),r.loading.start),s.timeout!==s.loadPolicy.maxLoadTimeMs&&(self.clearTimeout(this.requestTimeout),s.timeout=s.loadPolicy.maxLoadTimeMs,this.requestTimeout=self.setTimeout(this.loadtimeout.bind(this),s.loadPolicy.maxLoadTimeMs-(r.loading.first-r.loading.start)))),i===4)){self.clearTimeout(this.requestTimeout),t.onreadystatechange=null,t.onprogress=null;const o=t.status,a=t.responseType!=="text";if(o>=200&&o<300&&(a&&t.response||t.responseText!==null)){r.loading.end=Math.max(self.performance.now(),r.loading.first);const l=a?t.response:t.responseText,c=t.responseType==="arraybuffer"?l.byteLength:l.length;if(r.loaded=r.total=c,r.bwEstimate=r.total*8e3/(r.loading.end-r.loading.first),!this.callbacks)return;const d=this.callbacks.onProgress;if(d&&d(r,e,l,t),!this.callbacks)return;const u={url:t.responseURL,data:l,code:o};this.callbacks.onSuccess(u,r,e,t)}else{const l=s.loadPolicy.errorRetry,c=r.retry,d={url:e.url,data:void 0,code:o};_s(l,c,!1,d)?this.retry(l):(B.error(`${o} while loading ${e.url}`),this.callbacks.onError({code:o,text:t.statusText},e,t,r))}}}loadtimeout(){var e;const t=(e=this.config)==null?void 0:e.loadPolicy.timeoutRetry,r=this.stats.retry;if(_s(t,r,!0))this.retry(t);else{var i;B.warn(`timeout while loading ${(i=this.context)==null?void 0:i.url}`);const s=this.callbacks;s&&(this.abortInternal(),s.onTimeout(this.stats,this.context,this.loader))}}retry(e){const{context:t,stats:r}=this;this.retryDelay=ml(e,r.retry),r.retry++,B.warn(`${status?"HTTP Status "+status:"Timeout"} while loading ${t==null?void 0:t.url}, retrying ${r.retry}/${e.maxNumRetry} in ${this.retryDelay}ms`),this.abortInternal(),this.loader=null,self.clearTimeout(this.retryTimeout),this.retryTimeout=self.setTimeout(this.loadInternal.bind(this),this.retryDelay)}loadprogress(e){const t=this.stats;t.loaded=e.loaded,e.lengthComputable&&(t.total=e.total)}getCacheAge(){let e=null;if(this.loader&&ES.test(this.loader.getAllResponseHeaders())){const t=this.loader.getResponseHeader("age");e=t?parseFloat(t):null}return e}getResponseHeader(e){return this.loader&&new RegExp(`^${e}:\\s*[\\d.]+\\s*$`,"im").test(this.loader.getAllResponseHeaders())?this.loader.getResponseHeader(e):null}}function xS(){if(self.fetch&&self.AbortController&&self.ReadableStream&&self.Request)try{return new self.ReadableStream({}),!0}catch{}return!1}const SS=/(\d+)-(\d+)\/(\d+)/;class vu{constructor(e){this.fetchSetup=void 0,this.requestTimeout=void 0,this.request=null,this.response=null,this.controller=void 0,this.context=null,this.config=null,this.callbacks=null,this.stats=void 0,this.loader=null,this.fetchSetup=e.fetchSetup||kS,this.controller=new self.AbortController,this.stats=new eo}destroy(){this.loader=this.callbacks=this.context=this.config=this.request=null,this.abortInternal(),this.response=null,this.fetchSetup=this.controller=this.stats=null}abortInternal(){this.controller&&!this.stats.loading.end&&(this.stats.aborted=!0,this.controller.abort())}abort(){var e;this.abortInternal(),(e=this.callbacks)!=null&&e.onAbort&&this.callbacks.onAbort(this.stats,this.context,this.response)}load(e,t,r){const i=this.stats;if(i.loading.start)throw new Error("Loader can only be used once.");i.loading.start=self.performance.now();const s=TS(e,this.controller.signal),o=r.onProgress,a=e.responseType==="arraybuffer",l=a?"byteLength":"length",{maxTimeToFirstByteMs:c,maxLoadTimeMs:d}=t.loadPolicy;this.context=e,this.config=t,this.callbacks=r,this.request=this.fetchSetup(e,s),self.clearTimeout(this.requestTimeout),t.timeout=c&&pe(c)?c:d,this.requestTimeout=self.setTimeout(()=>{this.abortInternal(),r.onTimeout(i,e,this.response)},t.timeout),self.fetch(this.request).then(u=>{this.response=this.loader=u;const h=Math.max(self.performance.now(),i.loading.start);if(self.clearTimeout(this.requestTimeout),t.timeout=d,this.requestTimeout=self.setTimeout(()=>{this.abortInternal(),r.onTimeout(i,e,this.response)},d-(h-i.loading.start)),!u.ok){const{status:g,statusText:y}=u;throw new LS(y||"fetch, bad network response",g,u)}return i.loading.first=h,i.total=wS(u.headers)||i.total,o&&pe(t.highWaterMark)?this.loadProgressively(u,i,e,t.highWaterMark,o):a?u.arrayBuffer():e.responseType==="json"?u.json():u.text()}).then(u=>{const h=this.response;if(!h)throw new Error("loader destroyed");self.clearTimeout(this.requestTimeout),i.loading.end=Math.max(self.performance.now(),i.loading.first);const g=u[l];g&&(i.loaded=i.total=g);const y={url:h.url,data:u,code:h.status};o&&!pe(t.highWaterMark)&&o(i,e,u,h),r.onSuccess(y,i,e,h)}).catch(u=>{if(self.clearTimeout(this.requestTimeout),i.aborted)return;const h=u&&u.code||0,g=u?u.message:null;r.onError({code:h,text:g},e,u?u.details:null,i)})}getCacheAge(){let e=null;if(this.response){const t=this.response.headers.get("age");e=t?parseFloat(t):null}return e}getResponseHeader(e){return this.response?this.response.headers.get(e):null}loadProgressively(e,t,r,i=0,s){const o=new Df,a=e.body.getReader(),l=()=>a.read().then(c=>{if(c.done)return o.dataLength&&s(t,r,o.flush(),e),Promise.resolve(new ArrayBuffer(0));const d=c.value,u=d.length;return t.loaded+=u,u<i||o.dataLength?(o.push(d),o.dataLength>=i&&s(t,r,o.flush(),e)):s(t,r,d,e),l()}).catch(()=>Promise.reject());return l()}}function TS(n,e){const t={method:"GET",mode:"cors",credentials:"same-origin",signal:e,headers:new self.Headers(ot({},n.headers))};return n.rangeEnd&&t.headers.set("Range","bytes="+n.rangeStart+"-"+String(n.rangeEnd-1)),t}function CS(n){const e=SS.exec(n);if(e)return parseInt(e[2])-parseInt(e[1])+1}function wS(n){const e=n.get("Content-Range");if(e){const r=CS(e);if(pe(r))return r}const t=n.get("Content-Length");if(t)return parseInt(t)}function kS(n,e){return new self.Request(n.url,e)}class LS extends Error{constructor(e,t,r){super(e),this.code=void 0,this.details=void 0,this.code=t,this.details=r}}const RS=/\s/,IS={newCue(n,e,t,r){const i=[];let s,o,a,l,c;const d=self.VTTCue||self.TextTrackCue;for(let h=0;h<r.rows.length;h++)if(s=r.rows[h],a=!0,l=0,c="",!s.isEmpty()){var u;for(let b=0;b<s.chars.length;b++)RS.test(s.chars[b].uchar)&&a?l++:(c+=s.chars[b].uchar,a=!1);s.cueStartTime=e,e===t&&(t+=1e-4),l>=16?l--:l++;const g=ep(c.trim()),y=wl(e,t,g);n!=null&&(u=n.cues)!=null&&u.getCueById(y)||(o=new d(e,t,g),o.id=y,o.line=h+1,o.align="left",o.position=10+Math.min(80,Math.floor(l*8/32)*10),i.push(o))}return n&&i.length&&(i.sort((h,g)=>h.line==="auto"||g.line==="auto"?0:h.line>8&&g.line>8?g.line-h.line:h.line-g.line),i.forEach(h=>Tf(n,h))),i}},_S={maxTimeToFirstByteMs:8e3,maxLoadTimeMs:2e4,timeoutRetry:null,errorRetry:null},hp=pt(pt({autoStartLoad:!0,startPosition:-1,defaultAudioCodec:void 0,debug:!1,capLevelOnFPSDrop:!1,capLevelToPlayerSize:!1,ignoreDevicePixelRatio:!1,preferManagedMediaSource:!0,initialLiveManifestSize:1,maxBufferLength:30,backBufferLength:1/0,frontBufferFlushThreshold:1/0,maxBufferSize:60*1e3*1e3,maxBufferHole:.1,highBufferWatchdogPeriod:2,nudgeOffset:.1,nudgeMaxRetry:3,maxFragLookUpTolerance:.25,liveSyncDurationCount:3,liveMaxLatencyDurationCount:1/0,liveSyncDuration:void 0,liveMaxLatencyDuration:void 0,maxLiveSyncPlaybackRate:1,liveDurationInfinity:!1,liveBackBufferLength:null,maxMaxBufferLength:600,enableWorker:!0,workerPath:null,enableSoftwareAES:!0,startLevel:void 0,startFragPrefetch:!1,fpsDroppedMonitoringPeriod:5e3,fpsDroppedMonitoringThreshold:.2,appendErrorMaxRetry:3,loader:up,fLoader:void 0,pLoader:void 0,xhrSetup:void 0,licenseXhrSetup:void 0,licenseResponseCallback:void 0,abrController:ax,bufferController:u1,capLevelController:kl,errorController:YE,fpsController:F1,stretchShortVideoTrack:!1,maxAudioFramesDrift:1,forceKeyFrameOnDiscontinuity:!0,abrEwmaFastLive:3,abrEwmaSlowLive:9,abrEwmaFastVoD:3,abrEwmaSlowVoD:9,abrEwmaDefaultEstimate:5e5,abrEwmaDefaultEstimateMax:5e6,abrBandWidthFactor:.95,abrBandWidthUpFactor:.7,abrMaxWithRealBitrate:!1,maxStarvationDelay:4,maxLoadingDelay:4,minAutoBitrate:0,emeEnabled:!1,widevineLicenseUrl:void 0,drmSystems:{},drmSystemOptions:{},requestMediaKeySystemAccessFunc:df,testBandwidth:!0,progressive:!1,lowLatencyMode:!0,cmcd:void 0,enableDateRangeMetadataCues:!0,enableEmsgMetadataCues:!0,enableID3MetadataCues:!0,useMediaCapabilities:!0,certLoadPolicy:{default:_S},keyLoadPolicy:{default:{maxTimeToFirstByteMs:8e3,maxLoadTimeMs:2e4,timeoutRetry:{maxNumRetry:1,retryDelayMs:1e3,maxRetryDelayMs:2e4,backoff:"linear"},errorRetry:{maxNumRetry:8,retryDelayMs:1e3,maxRetryDelayMs:2e4,backoff:"linear"}}},manifestLoadPolicy:{default:{maxTimeToFirstByteMs:1/0,maxLoadTimeMs:2e4,timeoutRetry:{maxNumRetry:2,retryDelayMs:0,maxRetryDelayMs:0},errorRetry:{maxNumRetry:1,retryDelayMs:1e3,maxRetryDelayMs:8e3}}},playlistLoadPolicy:{default:{maxTimeToFirstByteMs:1e4,maxLoadTimeMs:2e4,timeoutRetry:{maxNumRetry:2,retryDelayMs:0,maxRetryDelayMs:0},errorRetry:{maxNumRetry:2,retryDelayMs:1e3,maxRetryDelayMs:8e3}}},fragLoadPolicy:{default:{maxTimeToFirstByteMs:1e4,maxLoadTimeMs:12e4,timeoutRetry:{maxNumRetry:4,retryDelayMs:0,maxRetryDelayMs:0},errorRetry:{maxNumRetry:6,retryDelayMs:1e3,maxRetryDelayMs:8e3}}},steeringManifestLoadPolicy:{default:{maxTimeToFirstByteMs:1e4,maxLoadTimeMs:2e4,timeoutRetry:{maxNumRetry:2,retryDelayMs:0,maxRetryDelayMs:0},errorRetry:{maxNumRetry:1,retryDelayMs:1e3,maxRetryDelayMs:8e3}}},manifestLoadingTimeOut:1e4,manifestLoadingMaxRetry:1,manifestLoadingRetryDelay:1e3,manifestLoadingMaxRetryTimeout:64e3,levelLoadingTimeOut:1e4,levelLoadingMaxRetry:4,levelLoadingRetryDelay:1e3,levelLoadingMaxRetryTimeout:64e3,fragLoadingTimeOut:2e4,fragLoadingMaxRetry:6,fragLoadingRetryDelay:1e3,fragLoadingMaxRetryTimeout:64e3},DS()),{},{subtitleStreamController:a1,subtitleTrackController:c1,timelineController:B1,audioStreamController:s1,audioTrackController:o1,emeController:pr,cmcdController:AS,contentSteeringController:vS});function DS(){return{cueHandler:IS,enableWebVTT:!0,enableIMSC1:!0,enableCEA708Captions:!0,captionsTextTrack1Label:"English",captionsTextTrack1LanguageCode:"en",captionsTextTrack2Label:"Spanish",captionsTextTrack2LanguageCode:"es",captionsTextTrack3Label:"Unknown CC",captionsTextTrack3LanguageCode:"",captionsTextTrack4Label:"Unknown CC",captionsTextTrack4LanguageCode:"",renderTextTracksNatively:!0}}function PS(n,e){if((e.liveSyncDurationCount||e.liveMaxLatencyDurationCount)&&(e.liveSyncDuration||e.liveMaxLatencyDuration))throw new Error("Illegal hls.js config: don't mix up liveSyncDurationCount/liveMaxLatencyDurationCount and liveSyncDuration/liveMaxLatencyDuration");if(e.liveMaxLatencyDurationCount!==void 0&&(e.liveSyncDurationCount===void 0||e.liveMaxLatencyDurationCount<=e.liveSyncDurationCount))throw new Error('Illegal hls.js config: "liveMaxLatencyDurationCount" must be greater than "liveSyncDurationCount"');if(e.liveMaxLatencyDuration!==void 0&&(e.liveSyncDuration===void 0||e.liveMaxLatencyDuration<=e.liveSyncDuration))throw new Error('Illegal hls.js config: "liveMaxLatencyDuration" must be greater than "liveSyncDuration"');const t=Da(n),r=["manifest","level","frag"],i=["TimeOut","MaxRetry","RetryDelay","MaxRetryTimeout"];return r.forEach(s=>{const o=`${s==="level"?"playlist":s}LoadPolicy`,a=e[o]===void 0,l=[];i.forEach(c=>{const d=`${s}Loading${c}`,u=e[d];if(u!==void 0&&a){l.push(d);const h=t[o].default;switch(e[o]={default:h},c){case"TimeOut":h.maxLoadTimeMs=u,h.maxTimeToFirstByteMs=u;break;case"MaxRetry":h.errorRetry.maxNumRetry=u,h.timeoutRetry.maxNumRetry=u;break;case"RetryDelay":h.errorRetry.retryDelayMs=u,h.timeoutRetry.retryDelayMs=u;break;case"MaxRetryTimeout":h.errorRetry.maxRetryDelayMs=u,h.timeoutRetry.maxRetryDelayMs=u;break}}}),l.length&&B.warn(`hls.js config: "${l.join('", "')}" setting(s) are deprecated, use "${o}": ${JSON.stringify(e[o])}`)}),pt(pt({},t),e)}function Da(n){return n&&typeof n=="object"?Array.isArray(n)?n.map(Da):Object.keys(n).reduce((e,t)=>(e[t]=Da(n[t]),e),{}):n}function BS(n){const e=n.loader;e!==vu&&e!==up?(B.log("[config]: Custom loader detected, cannot enable progressive streaming"),n.progressive=!1):xS()&&(n.loader=vu,n.progressive=!0,n.enableSoftwareAES=!0,B.log("[config]: Progressive streaming enabled, using FetchLoader"))}let Wo;class OS extends gl{constructor(e,t){super(e,"[level-controller]"),this._levels=[],this._firstLevel=-1,this._maxAutoLevel=-1,this._startLevel=void 0,this.currentLevel=null,this.currentLevelIndex=-1,this.manualLevelIndex=-1,this.steering=void 0,this.onParsedComplete=void 0,this.steering=t,this._registerListeners()}_registerListeners(){const{hls:e}=this;e.on(T.MANIFEST_LOADING,this.onManifestLoading,this),e.on(T.MANIFEST_LOADED,this.onManifestLoaded,this),e.on(T.LEVEL_LOADED,this.onLevelLoaded,this),e.on(T.LEVELS_UPDATED,this.onLevelsUpdated,this),e.on(T.FRAG_BUFFERED,this.onFragBuffered,this),e.on(T.ERROR,this.onError,this)}_unregisterListeners(){const{hls:e}=this;e.off(T.MANIFEST_LOADING,this.onManifestLoading,this),e.off(T.MANIFEST_LOADED,this.onManifestLoaded,this),e.off(T.LEVEL_LOADED,this.onLevelLoaded,this),e.off(T.LEVELS_UPDATED,this.onLevelsUpdated,this),e.off(T.FRAG_BUFFERED,this.onFragBuffered,this),e.off(T.ERROR,this.onError,this)}destroy(){this._unregisterListeners(),this.steering=null,this.resetLevels(),super.destroy()}stopLoad(){this._levels.forEach(t=>{t.loadError=0,t.fragmentError=0}),super.stopLoad()}resetLevels(){this._startLevel=void 0,this.manualLevelIndex=-1,this.currentLevelIndex=-1,this.currentLevel=null,this._levels=[],this._maxAutoLevel=-1}onManifestLoading(e,t){this.resetLevels()}onManifestLoaded(e,t){const r=this.hls.config.preferManagedMediaSource,i=[],s={},o={};let a=!1,l=!1,c=!1;t.levels.forEach(d=>{var u,h;const g=d.attrs;let{audioCodec:y,videoCodec:b}=d;((u=y)==null?void 0:u.indexOf("mp4a.40.34"))!==-1&&(Wo||(Wo=/chrome|firefox/i.test(navigator.userAgent)),Wo&&(d.audioCodec=y=void 0)),y&&(d.audioCodec=y=Ls(y,r)),((h=b)==null?void 0:h.indexOf("avc1"))===0&&(b=d.videoCodec=TE(b));const{width:E,height:C,unknownCodecs:w}=d;if(a||(a=!!(E&&C)),l||(l=!!b),c||(c=!!y),w!=null&&w.length||y&&!Po(y,"audio",r)||b&&!Po(b,"video",r))return;const{CODECS:R,"FRAME-RATE":_,"HDCP-LEVEL":P,"PATHWAY-ID":H,RESOLUTION:U,"VIDEO-RANGE":j}=g,F=`${`${H||"."}-`}${d.bitrate}-${U}-${_}-${R}-${j}-${P}`;if(s[F])if(s[F].uri!==d.url&&!d.attrs["PATHWAY-ID"]){const Y=o[F]+=1;d.attrs["PATHWAY-ID"]=new Array(Y+1).join(".");const Ae=new Sr(d);s[F]=Ae,i.push(Ae)}else s[F].addGroupId("audio",g.AUDIO),s[F].addGroupId("text",g.SUBTITLES);else{const Y=new Sr(d);s[F]=Y,o[F]=1,i.push(Y)}}),this.filterAndSortMediaOptions(i,t,a,l,c)}filterAndSortMediaOptions(e,t,r,i,s){let o=[],a=[],l=e;if((r||i)&&s&&(l=l.filter(({videoCodec:y,videoRange:b,width:E,height:C})=>(!!y||!!(E&&C))&&ME(b))),l.length===0){Promise.resolve().then(()=>{if(this.hls){t.levels.length&&this.warn(`One or more CODECS in variant not supported: ${JSON.stringify(t.levels[0].attrs)}`);const y=new Error("no level with compatible codecs found in manifest");this.hls.trigger(T.ERROR,{type:Le.MEDIA_ERROR,details:$.MANIFEST_INCOMPATIBLE_CODECS_ERROR,fatal:!0,url:t.url,error:y,reason:y.message})}});return}if(t.audioTracks){const{preferManagedMediaSource:y}=this.hls.config;o=t.audioTracks.filter(b=>!b.audioCodec||Po(b.audioCodec,"audio",y)),Eu(o)}t.subtitles&&(a=t.subtitles,Eu(a));const c=l.slice(0);l.sort((y,b)=>{if(y.attrs["HDCP-LEVEL"]!==b.attrs["HDCP-LEVEL"])return(y.attrs["HDCP-LEVEL"]||"")>(b.attrs["HDCP-LEVEL"]||"")?1:-1;if(r&&y.height!==b.height)return y.height-b.height;if(y.frameRate!==b.frameRate)return y.frameRate-b.frameRate;if(y.videoRange!==b.videoRange)return Rs.indexOf(y.videoRange)-Rs.indexOf(b.videoRange);if(y.videoCodec!==b.videoCodec){const E=wd(y.videoCodec),C=wd(b.videoCodec);if(E!==C)return C-E}if(y.uri===b.uri&&y.codecSet!==b.codecSet){const E=ks(y.codecSet),C=ks(b.codecSet);if(E!==C)return C-E}return y.averageBitrate!==b.averageBitrate?y.averageBitrate-b.averageBitrate:0});let d=c[0];if(this.steering&&(l=this.steering.filterParsedLevels(l),l.length!==c.length)){for(let y=0;y<c.length;y++)if(c[y].pathwayId===l[0].pathwayId){d=c[y];break}}this._levels=l;for(let y=0;y<l.length;y++)if(l[y]===d){var u;this._firstLevel=y;const b=d.bitrate,E=this.hls.bandwidthEstimate;if(this.log(`manifest loaded, ${l.length} level(s) found, first bitrate: ${b}`),((u=this.hls.userConfig)==null?void 0:u.abrEwmaDefaultEstimate)===void 0){const C=Math.min(b,this.hls.config.abrEwmaDefaultEstimateMax);C>E&&E===hp.abrEwmaDefaultEstimate&&(this.hls.bandwidthEstimate=C)}break}const h=s&&!i,g={levels:l,audioTracks:o,subtitleTracks:a,sessionData:t.sessionData,sessionKeys:t.sessionKeys,firstLevel:this._firstLevel,stats:t.stats,audio:s,video:i,altAudio:!h&&o.some(y=>!!y.url)};this.hls.trigger(T.MANIFEST_PARSED,g),(this.hls.config.autoStartLoad||this.hls.forceStartLoad)&&this.hls.startLoad(this.hls.config.startPosition)}get levels(){return this._levels.length===0?null:this._levels}get level(){return this.currentLevelIndex}set level(e){const t=this._levels;if(t.length===0)return;if(e<0||e>=t.length){const d=new Error("invalid level idx"),u=e<0;if(this.hls.trigger(T.ERROR,{type:Le.OTHER_ERROR,details:$.LEVEL_SWITCH_ERROR,level:e,fatal:u,error:d,reason:d.message}),u)return;e=Math.min(e,t.length-1)}const r=this.currentLevelIndex,i=this.currentLevel,s=i?i.attrs["PATHWAY-ID"]:void 0,o=t[e],a=o.attrs["PATHWAY-ID"];if(this.currentLevelIndex=e,this.currentLevel=o,r===e&&o.details&&i&&s===a)return;this.log(`Switching to level ${e} (${o.height?o.height+"p ":""}${o.videoRange?o.videoRange+" ":""}${o.codecSet?o.codecSet+" ":""}@${o.bitrate})${a?" with Pathway "+a:""} from level ${r}${s?" with Pathway "+s:""}`);const l={level:e,attrs:o.attrs,details:o.details,bitrate:o.bitrate,averageBitrate:o.averageBitrate,maxBitrate:o.maxBitrate,realBitrate:o.realBitrate,width:o.width,height:o.height,codecSet:o.codecSet,audioCodec:o.audioCodec,videoCodec:o.videoCodec,audioGroups:o.audioGroups,subtitleGroups:o.subtitleGroups,loaded:o.loaded,loadError:o.loadError,fragmentError:o.fragmentError,name:o.name,id:o.id,uri:o.uri,url:o.url,urlId:0,audioGroupIds:o.audioGroupIds,textGroupIds:o.textGroupIds};this.hls.trigger(T.LEVEL_SWITCHING,l);const c=o.details;if(!c||c.live){const d=this.switchParams(o.uri,i==null?void 0:i.details);this.loadPlaylist(d)}}get manualLevel(){return this.manualLevelIndex}set manualLevel(e){this.manualLevelIndex=e,this._startLevel===void 0&&(this._startLevel=e),e!==-1&&(this.level=e)}get firstLevel(){return this._firstLevel}set firstLevel(e){this._firstLevel=e}get startLevel(){if(this._startLevel===void 0){const e=this.hls.config.startLevel;return e!==void 0?e:this.hls.firstAutoLevel}return this._startLevel}set startLevel(e){this._startLevel=e}onError(e,t){t.fatal||!t.context||t.context.type===Ue.LEVEL&&t.context.level===this.level&&this.checkRetry(t)}onFragBuffered(e,{frag:t}){if(t!==void 0&&t.type===ke.MAIN){const r=t.elementaryStreams;if(!Object.keys(r).some(s=>!!r[s]))return;const i=this._levels[t.level];i!=null&&i.loadError&&(this.log(`Resetting level error count of ${i.loadError} on frag buffered`),i.loadError=0)}}onLevelLoaded(e,t){var r;const{level:i,details:s}=t,o=this._levels[i];if(!o){var a;this.warn(`Invalid level index ${i}`),(a=t.deliveryDirectives)!=null&&a.skip&&(s.deltaUpdateFailed=!0);return}i===this.currentLevelIndex?(o.fragmentError===0&&(o.loadError=0),this.playlistLoaded(i,t,o.details)):(r=t.deliveryDirectives)!=null&&r.skip&&(s.deltaUpdateFailed=!0)}loadPlaylist(e){super.loadPlaylist();const t=this.currentLevelIndex,r=this.currentLevel;if(r&&this.shouldLoadPlaylist(r)){let i=r.uri;if(e)try{i=e.addDirectives(i)}catch(o){this.warn(`Could not construct new URL with HLS Delivery Directives: ${o}`)}const s=r.attrs["PATHWAY-ID"];this.log(`Loading level index ${t}${(e==null?void 0:e.msn)!==void 0?" at sn "+e.msn+" part "+e.part:""} with${s?" Pathway "+s:""} ${i}`),this.clearTimer(),this.hls.trigger(T.LEVEL_LOADING,{url:i,level:t,pathwayId:r.attrs["PATHWAY-ID"],id:0,deliveryDirectives:e||null})}}get nextLoadLevel(){return this.manualLevelIndex!==-1?this.manualLevelIndex:this.hls.nextAutoLevel}set nextLoadLevel(e){this.level=e,this.manualLevelIndex===-1&&(this.hls.nextAutoLevel=e)}removeLevel(e){var t;const r=this._levels.filter((i,s)=>s!==e?!0:(this.steering&&this.steering.removeLevel(i),i===this.currentLevel&&(this.currentLevel=null,this.currentLevelIndex=-1,i.details&&i.details.fragments.forEach(o=>o.level=-1)),!1));Lf(r),this._levels=r,this.currentLevelIndex>-1&&(t=this.currentLevel)!=null&&t.details&&(this.currentLevelIndex=this.currentLevel.details.fragments[0].level),this.hls.trigger(T.LEVELS_UPDATED,{levels:r})}onLevelsUpdated(e,{levels:t}){this._levels=t}checkMaxAutoUpdated(){const{autoLevelCapping:e,maxAutoLevel:t,maxHdcpLevel:r}=this.hls;this._maxAutoLevel!==t&&(this._maxAutoLevel=t,this.hls.trigger(T.MAX_AUTO_LEVEL_UPDATED,{autoLevelCapping:e,levels:this.levels,maxAutoLevel:t,minAutoLevel:this.hls.minAutoLevel,maxHdcpLevel:r}))}}function Eu(n){const e={};n.forEach(t=>{const r=t.groupId||"";t.id=e[r]=e[r]||0,e[r]++})}class FS{constructor(e){this.config=void 0,this.keyUriToKeyInfo={},this.emeController=null,this.config=e}abort(e){for(const r in this.keyUriToKeyInfo){const i=this.keyUriToKeyInfo[r].loader;if(i){var t;if(e&&e!==((t=i.context)==null?void 0:t.frag.type))return;i.abort()}}}detach(){for(const e in this.keyUriToKeyInfo){const t=this.keyUriToKeyInfo[e];(t.mediaKeySessionContext||t.decryptdata.isCommonEncryption)&&delete this.keyUriToKeyInfo[e]}}destroy(){this.detach();for(const e in this.keyUriToKeyInfo){const t=this.keyUriToKeyInfo[e].loader;t&&t.destroy()}this.keyUriToKeyInfo={}}createKeyLoadError(e,t=$.KEY_LOAD_ERROR,r,i,s){return new un({type:Le.NETWORK_ERROR,details:t,fatal:!1,frag:e,response:s,error:r,networkDetails:i})}loadClear(e,t){if(this.emeController&&this.config.emeEnabled){const{sn:r,cc:i}=e;for(let s=0;s<t.length;s++){const o=t[s];if(i<=o.cc&&(r==="initSegment"||o.sn==="initSegment"||r<o.sn)){this.emeController.selectKeySystemFormat(o).then(a=>{o.setKeyFormat(a)});break}}}}load(e){return!e.decryptdata&&e.encrypted&&this.emeController?this.emeController.selectKeySystemFormat(e).then(t=>this.loadInternal(e,t)):this.loadInternal(e)}loadInternal(e,t){var r,i;t&&e.setKeyFormat(t);const s=e.decryptdata;if(!s){const c=new Error(t?`Expected frag.decryptdata to be defined after setting format ${t}`:"Missing decryption data on fragment in onKeyLoading");return Promise.reject(this.createKeyLoadError(e,$.KEY_LOAD_ERROR,c))}const o=s.uri;if(!o)return Promise.reject(this.createKeyLoadError(e,$.KEY_LOAD_ERROR,new Error(`Invalid key URI: "${o}"`)));let a=this.keyUriToKeyInfo[o];if((r=a)!=null&&r.decryptdata.key)return s.key=a.decryptdata.key,Promise.resolve({frag:e,keyInfo:a});if((i=a)!=null&&i.keyLoadPromise){var l;switch((l=a.mediaKeySessionContext)==null?void 0:l.keyStatus){case void 0:case"status-pending":case"usable":case"usable-in-future":return a.keyLoadPromise.then(c=>(s.key=c.keyInfo.decryptdata.key,{frag:e,keyInfo:a}))}}switch(a=this.keyUriToKeyInfo[o]={decryptdata:s,keyLoadPromise:null,loader:null,mediaKeySessionContext:null},s.method){case"ISO-23001-7":case"SAMPLE-AES":case"SAMPLE-AES-CENC":case"SAMPLE-AES-CTR":return s.keyFormat==="identity"?this.loadKeyHTTP(a,e):this.loadKeyEME(a,e);case"AES-128":return this.loadKeyHTTP(a,e);default:return Promise.reject(this.createKeyLoadError(e,$.KEY_LOAD_ERROR,new Error(`Key supplied with unsupported METHOD: "${s.method}"`)))}}loadKeyEME(e,t){const r={frag:t,keyInfo:e};if(this.emeController&&this.config.emeEnabled){const i=this.emeController.loadKey(r);if(i)return(e.keyLoadPromise=i.then(s=>(e.mediaKeySessionContext=s,r))).catch(s=>{throw e.keyLoadPromise=null,s})}return Promise.resolve(r)}loadKeyHTTP(e,t){const r=this.config,i=r.loader,s=new i(r);return t.keyLoader=e.loader=s,e.keyLoadPromise=new Promise((o,a)=>{const l={keyInfo:e,frag:t,responseType:"arraybuffer",url:e.decryptdata.uri},c=r.keyLoadPolicy.default,d={loadPolicy:c,timeout:c.maxLoadTimeMs,maxRetry:0,retryDelay:0,maxRetryDelay:0},u={onSuccess:(h,g,y,b)=>{const{frag:E,keyInfo:C,url:w}=y;if(!E.decryptdata||C!==this.keyUriToKeyInfo[w])return a(this.createKeyLoadError(E,$.KEY_LOAD_ERROR,new Error("after key load, decryptdata unset or changed"),b));C.decryptdata.key=E.decryptdata.key=new Uint8Array(h.data),E.keyLoader=null,C.loader=null,o({frag:E,keyInfo:C})},onError:(h,g,y,b)=>{this.resetLoader(g),a(this.createKeyLoadError(t,$.KEY_LOAD_ERROR,new Error(`HTTP Error ${h.code} loading key ${h.text}`),y,pt({url:l.url,data:void 0},h)))},onTimeout:(h,g,y)=>{this.resetLoader(g),a(this.createKeyLoadError(t,$.KEY_LOAD_TIMEOUT,new Error("key loading timed out"),y))},onAbort:(h,g,y)=>{this.resetLoader(g),a(this.createKeyLoadError(t,$.INTERNAL_ABORTED,new Error("key loading aborted"),y))}};s.load(l,d,u)})}resetLoader(e){const{frag:t,keyInfo:r,url:i}=e,s=r.loader;t.keyLoader===s&&(t.keyLoader=null,r.loader=null),delete this.keyUriToKeyInfo[i],s&&s.destroy()}}function fp(){return self.SourceBuffer||self.WebKitSourceBuffer}function pp(){if(!Ir())return!1;const e=fp();return!e||e.prototype&&typeof e.prototype.appendBuffer=="function"&&typeof e.prototype.remove=="function"}function MS(){if(!pp())return!1;const n=Ir();return typeof(n==null?void 0:n.isTypeSupported)=="function"&&(["avc1.42E01E,mp4a.40.2","av01.0.01M.08","vp09.00.50.08"].some(e=>n.isTypeSupported(ki(e,"video")))||["mp4a.40.2","fLaC"].some(e=>n.isTypeSupported(ki(e,"audio"))))}function NS(){var n;const e=fp();return typeof(e==null||(n=e.prototype)==null?void 0:n.changeType)=="function"}const US=250,ys=2,$S=.1,HS=.05;class GS{constructor(e,t,r,i){this.config=void 0,this.media=null,this.fragmentTracker=void 0,this.hls=void 0,this.nudgeRetry=0,this.stallReported=!1,this.stalled=null,this.moved=!1,this.seeking=!1,this.config=e,this.media=t,this.fragmentTracker=r,this.hls=i}destroy(){this.media=null,this.hls=this.fragmentTracker=null}poll(e,t){const{config:r,media:i,stalled:s}=this;if(i===null)return;const{currentTime:o,seeking:a}=i,l=this.seeking&&!a,c=!this.seeking&&a;if(this.seeking=a,o!==e){if(this.moved=!0,a||(this.nudgeRetry=0),s!==null){if(this.stallReported){const E=self.performance.now()-s;B.warn(`playback not stuck anymore @${o}, after ${Math.round(E)}ms`),this.stallReported=!1}this.stalled=null}return}if(c||l){this.stalled=null;return}if(i.paused&&!a||i.ended||i.playbackRate===0||!Xe.getBuffered(i).length){this.nudgeRetry=0;return}const d=Xe.bufferInfo(i,o,0),u=d.nextStart||0;if(a){const E=d.len>ys,C=!u||t&&t.start<=o||u-o>ys&&!this.fragmentTracker.getPartialFragment(o);if(E||C)return;this.moved=!1}if(!this.moved&&this.stalled!==null){var h;if(!(d.len>0)&&!u)return;const C=Math.max(u,d.start||0)-o,w=this.hls.levels?this.hls.levels[this.hls.currentLevel]:null,_=(w==null||(h=w.details)==null?void 0:h.live)?w.details.targetduration*2:ys,P=this.fragmentTracker.getPartialFragment(o);if(C>0&&(C<=_||P)){i.paused||this._trySkipBufferHole(P);return}}const g=self.performance.now();if(s===null){this.stalled=g;return}const y=g-s;if(!a&&y>=US&&(this._reportStall(d),!this.media))return;const b=Xe.bufferInfo(i,o,r.maxBufferHole);this._tryFixBufferStall(b,y)}_tryFixBufferStall(e,t){const{config:r,fragmentTracker:i,media:s}=this;if(s===null)return;const o=s.currentTime,a=i.getPartialFragment(o);a&&(this._trySkipBufferHole(a)||!this.media)||(e.len>r.maxBufferHole||e.nextStart&&e.nextStart-o<r.maxBufferHole)&&t>r.highBufferWatchdogPeriod*1e3&&(B.warn("Trying to nudge playhead over buffer-hole"),this.stalled=null,this._tryNudgeBuffer())}_reportStall(e){const{hls:t,media:r,stallReported:i}=this;if(!i&&r){this.stallReported=!0;const s=new Error(`Playback stalling at @${r.currentTime} due to low buffer (${JSON.stringify(e)})`);B.warn(s.message),t.trigger(T.ERROR,{type:Le.MEDIA_ERROR,details:$.BUFFER_STALLED_ERROR,fatal:!1,error:s,buffer:e.len})}}_trySkipBufferHole(e){const{config:t,hls:r,media:i}=this;if(i===null)return 0;const s=i.currentTime,o=Xe.bufferInfo(i,s,0),a=s<o.start?o.start:o.nextStart;if(a){const l=o.len<=t.maxBufferHole,c=o.len>0&&o.len<1&&i.readyState<3,d=a-s;if(d>0&&(l||c)){if(d>t.maxBufferHole){const{fragmentTracker:h}=this;let g=!1;if(s===0){const y=h.getAppendedFrag(0,ke.MAIN);y&&a<y.end&&(g=!0)}if(!g){const y=e||h.getAppendedFrag(s,ke.MAIN);if(y){let b=!1,E=y.end;for(;E<a;){const C=h.getPartialFragment(E);if(C)E+=C.duration;else{b=!0;break}}if(b)return 0}}}const u=Math.max(a+HS,s+$S);if(B.warn(`skipping hole, adjusting currentTime from ${s} to ${u}`),this.moved=!0,this.stalled=null,i.currentTime=u,e&&!e.gap){const h=new Error(`fragment loaded with buffer holes, seeking from ${s} to ${u}`);r.trigger(T.ERROR,{type:Le.MEDIA_ERROR,details:$.BUFFER_SEEK_OVER_HOLE,fatal:!1,error:h,reason:h.message,frag:e})}return u}}return 0}_tryNudgeBuffer(){const{config:e,hls:t,media:r,nudgeRetry:i}=this;if(r===null)return;const s=r.currentTime;if(this.nudgeRetry++,i<e.nudgeMaxRetry){const o=s+(i+1)*e.nudgeOffset,a=new Error(`Nudging 'currentTime' from ${s} to ${o}`);B.warn(a.message),r.currentTime=o,t.trigger(T.ERROR,{type:Le.MEDIA_ERROR,details:$.BUFFER_NUDGE_ON_STALL,error:a,fatal:!1})}else{const o=new Error(`Playhead still not moving while enough data buffered @${s} after ${e.nudgeMaxRetry} nudges`);B.error(o.message),t.trigger(T.ERROR,{type:Le.MEDIA_ERROR,details:$.BUFFER_STALLED_ERROR,error:o,fatal:!0})}}}const KS=100;class jS extends bl{constructor(e,t,r){super(e,t,r,"[stream-controller]",ke.MAIN),this.audioCodecSwap=!1,this.gapController=null,this.level=-1,this._forceStartLoad=!1,this.altAudio=!1,this.audioOnly=!1,this.fragPlaying=null,this.onvplaying=null,this.onvseeked=null,this.fragLastKbps=0,this.couldBacktrack=!1,this.backtrackFragment=null,this.audioCodecSwitch=!1,this.videoBuffer=null,this._registerListeners()}_registerListeners(){const{hls:e}=this;e.on(T.MEDIA_ATTACHED,this.onMediaAttached,this),e.on(T.MEDIA_DETACHING,this.onMediaDetaching,this),e.on(T.MANIFEST_LOADING,this.onManifestLoading,this),e.on(T.MANIFEST_PARSED,this.onManifestParsed,this),e.on(T.LEVEL_LOADING,this.onLevelLoading,this),e.on(T.LEVEL_LOADED,this.onLevelLoaded,this),e.on(T.FRAG_LOAD_EMERGENCY_ABORTED,this.onFragLoadEmergencyAborted,this),e.on(T.ERROR,this.onError,this),e.on(T.AUDIO_TRACK_SWITCHING,this.onAudioTrackSwitching,this),e.on(T.AUDIO_TRACK_SWITCHED,this.onAudioTrackSwitched,this),e.on(T.BUFFER_CREATED,this.onBufferCreated,this),e.on(T.BUFFER_FLUSHED,this.onBufferFlushed,this),e.on(T.LEVELS_UPDATED,this.onLevelsUpdated,this),e.on(T.FRAG_BUFFERED,this.onFragBuffered,this)}_unregisterListeners(){const{hls:e}=this;e.off(T.MEDIA_ATTACHED,this.onMediaAttached,this),e.off(T.MEDIA_DETACHING,this.onMediaDetaching,this),e.off(T.MANIFEST_LOADING,this.onManifestLoading,this),e.off(T.MANIFEST_PARSED,this.onManifestParsed,this),e.off(T.LEVEL_LOADED,this.onLevelLoaded,this),e.off(T.FRAG_LOAD_EMERGENCY_ABORTED,this.onFragLoadEmergencyAborted,this),e.off(T.ERROR,this.onError,this),e.off(T.AUDIO_TRACK_SWITCHING,this.onAudioTrackSwitching,this),e.off(T.AUDIO_TRACK_SWITCHED,this.onAudioTrackSwitched,this),e.off(T.BUFFER_CREATED,this.onBufferCreated,this),e.off(T.BUFFER_FLUSHED,this.onBufferFlushed,this),e.off(T.LEVELS_UPDATED,this.onLevelsUpdated,this),e.off(T.FRAG_BUFFERED,this.onFragBuffered,this)}onHandlerDestroying(){this._unregisterListeners(),super.onHandlerDestroying()}startLoad(e){if(this.levels){const{lastCurrentTime:t,hls:r}=this;if(this.stopLoad(),this.setInterval(KS),this.level=-1,!this.startFragRequested){let i=r.startLevel;i===-1&&(r.config.testBandwidth&&this.levels.length>1?(i=0,this.bitrateTest=!0):i=r.firstAutoLevel),r.nextLoadLevel=i,this.level=r.loadLevel,this.loadedmetadata=!1}t>0&&e===-1&&(this.log(`Override startPosition with lastCurrentTime @${t.toFixed(3)}`),e=t),this.state=J.IDLE,this.nextLoadPosition=this.startPosition=this.lastCurrentTime=e,this.tick()}else this._forceStartLoad=!0,this.state=J.STOPPED}stopLoad(){this._forceStartLoad=!1,super.stopLoad()}doTick(){switch(this.state){case J.WAITING_LEVEL:{const{levels:t,level:r}=this,i=t==null?void 0:t[r],s=i==null?void 0:i.details;if(s&&(!s.live||this.levelLastLoaded===i)){if(this.waitForCdnTuneIn(s))break;this.state=J.IDLE;break}else if(this.hls.nextLoadLevel!==this.level){this.state=J.IDLE;break}break}case J.FRAG_LOADING_WAITING_RETRY:{var e;const t=self.performance.now(),r=this.retryDate;if(!r||t>=r||(e=this.media)!=null&&e.seeking){const{levels:i,level:s}=this,o=i==null?void 0:i[s];this.resetStartWhenNotLoaded(o||null),this.state=J.IDLE}}break}this.state===J.IDLE&&this.doTickIdle(),this.onTickEnd()}onTickEnd(){super.onTickEnd(),this.checkBuffer(),this.checkFragmentChanged()}doTickIdle(){const{hls:e,levelLastLoaded:t,levels:r,media:i}=this;if(t===null||!i&&(this.startFragRequested||!e.config.startFragPrefetch)||this.altAudio&&this.audioOnly)return;const s=e.nextLoadLevel;if(!(r!=null&&r[s]))return;const o=r[s],a=this.getMainFwdBufferInfo();if(a===null)return;const l=this.getLevelDetails();if(l&&this._streamEnded(a,l)){const b={};this.altAudio&&(b.type="video"),this.hls.trigger(T.BUFFER_EOS,b),this.state=J.ENDED;return}e.loadLevel!==s&&e.manualLevel===-1&&this.log(`Adapting to level ${s} from level ${this.level}`),this.level=e.nextLoadLevel=s;const c=o.details;if(!c||this.state===J.WAITING_LEVEL||c.live&&this.levelLastLoaded!==o){this.level=s,this.state=J.WAITING_LEVEL;return}const d=a.len,u=this.getMaxBufferLength(o.maxBitrate);if(d>=u)return;this.backtrackFragment&&this.backtrackFragment.start>a.end&&(this.backtrackFragment=null);const h=this.backtrackFragment?this.backtrackFragment.start:a.end;let g=this.getNextFragment(h,c);if(this.couldBacktrack&&!this.fragPrevious&&g&&g.sn!=="initSegment"&&this.fragmentTracker.getState(g)!==ht.OK){var y;const E=((y=this.backtrackFragment)!=null?y:g).sn-c.startSN,C=c.fragments[E-1];C&&g.cc===C.cc&&(g=C,this.fragmentTracker.removeFragment(C))}else this.backtrackFragment&&a.len&&(this.backtrackFragment=null);if(g&&this.isLoopLoading(g,h)){if(!g.gap){const E=this.audioOnly&&!this.altAudio?Ve.AUDIO:Ve.VIDEO,C=(E===Ve.VIDEO?this.videoBuffer:this.mediaBuffer)||this.media;C&&this.afterBufferFlushed(C,E,ke.MAIN)}g=this.getNextFragmentLoopLoading(g,c,a,ke.MAIN,u)}g&&(g.initSegment&&!g.initSegment.data&&!this.bitrateTest&&(g=g.initSegment),this.loadFragment(g,o,h))}loadFragment(e,t,r){const i=this.fragmentTracker.getState(e);this.fragCurrent=e,i===ht.NOT_LOADED||i===ht.PARTIAL?e.sn==="initSegment"?this._loadInitSegment(e,t):this.bitrateTest?(this.log(`Fragment ${e.sn} of level ${e.level} is being downloaded to test bitrate and will not be buffered`),this._loadBitrateTestFrag(e,t)):(this.startFragRequested=!0,super.loadFragment(e,t,r)):this.clearTrackerIfNeeded(e)}getBufferedFrag(e){return this.fragmentTracker.getBufferedFrag(e,ke.MAIN)}followingBufferedFrag(e){return e?this.getBufferedFrag(e.end+.5):null}immediateLevelSwitch(){this.abortCurrentFrag(),this.flushMainBuffer(0,Number.POSITIVE_INFINITY)}nextLevelSwitch(){const{levels:e,media:t}=this;if(t!=null&&t.readyState){let r;const i=this.getAppendedFrag(t.currentTime);i&&i.start>1&&this.flushMainBuffer(0,i.start-1);const s=this.getLevelDetails();if(s!=null&&s.live){const a=this.getMainFwdBufferInfo();if(!a||a.len<s.targetduration*2)return}if(!t.paused&&e){const a=this.hls.nextLoadLevel,l=e[a],c=this.fragLastKbps;c&&this.fragCurrent?r=this.fragCurrent.duration*l.maxBitrate/(1e3*c)+1:r=0}else r=0;const o=this.getBufferedFrag(t.currentTime+r);if(o){const a=this.followingBufferedFrag(o);if(a){this.abortCurrentFrag();const l=a.maxStartPTS?a.maxStartPTS:a.start,c=a.duration,d=Math.max(o.end,l+Math.min(Math.max(c-this.config.maxFragLookUpTolerance,c*(this.couldBacktrack?.5:.125)),c*(this.couldBacktrack?.75:.25)));this.flushMainBuffer(d,Number.POSITIVE_INFINITY)}}}}abortCurrentFrag(){const e=this.fragCurrent;switch(this.fragCurrent=null,this.backtrackFragment=null,e&&(e.abortRequests(),this.fragmentTracker.removeFragment(e)),this.state){case J.KEY_LOADING:case J.FRAG_LOADING:case J.FRAG_LOADING_WAITING_RETRY:case J.PARSING:case J.PARSED:this.state=J.IDLE;break}this.nextLoadPosition=this.getLoadPosition()}flushMainBuffer(e,t){super.flushMainBuffer(e,t,this.altAudio?"video":null)}onMediaAttached(e,t){super.onMediaAttached(e,t);const r=t.media;this.onvplaying=this.onMediaPlaying.bind(this),this.onvseeked=this.onMediaSeeked.bind(this),r.addEventListener("playing",this.onvplaying),r.addEventListener("seeked",this.onvseeked),this.gapController=new GS(this.config,r,this.fragmentTracker,this.hls)}onMediaDetaching(){const{media:e}=this;e&&this.onvplaying&&this.onvseeked&&(e.removeEventListener("playing",this.onvplaying),e.removeEventListener("seeked",this.onvseeked),this.onvplaying=this.onvseeked=null,this.videoBuffer=null),this.fragPlaying=null,this.gapController&&(this.gapController.destroy(),this.gapController=null),super.onMediaDetaching()}onMediaPlaying(){this.tick()}onMediaSeeked(){const e=this.media,t=e?e.currentTime:null;pe(t)&&this.log(`Media seeked to ${t.toFixed(3)}`);const r=this.getMainFwdBufferInfo();if(r===null||r.len===0){this.warn(`Main forward buffer length on "seeked" event ${r?r.len:"empty"})`);return}this.tick()}onManifestLoading(){this.log("Trigger BUFFER_RESET"),this.hls.trigger(T.BUFFER_RESET,void 0),this.fragmentTracker.removeAllFragments(),this.couldBacktrack=!1,this.startPosition=this.lastCurrentTime=this.fragLastKbps=0,this.levels=this.fragPlaying=this.backtrackFragment=this.levelLastLoaded=null,this.altAudio=this.audioOnly=this.startFragRequested=!1}onManifestParsed(e,t){let r=!1,i=!1;t.levels.forEach(s=>{const o=s.audioCodec;o&&(r=r||o.indexOf("mp4a.40.2")!==-1,i=i||o.indexOf("mp4a.40.5")!==-1)}),this.audioCodecSwitch=r&&i&&!NS(),this.audioCodecSwitch&&this.log("Both AAC/HE-AAC audio found in levels; declaring level codec as HE-AAC"),this.levels=t.levels,this.startFragRequested=!1}onLevelLoading(e,t){const{levels:r}=this;if(!r||this.state!==J.IDLE)return;const i=r[t.level];(!i.details||i.details.live&&this.levelLastLoaded!==i||this.waitForCdnTuneIn(i.details))&&(this.state=J.WAITING_LEVEL)}onLevelLoaded(e,t){var r;const{levels:i}=this,s=t.level,o=t.details,a=o.totalduration;if(!i){this.warn(`Levels were reset while loading level ${s}`);return}this.log(`Level ${s} loaded [${o.startSN},${o.endSN}]${o.lastPartSn?`[part-${o.lastPartSn}-${o.lastPartIndex}]`:""}, cc [${o.startCC}, ${o.endCC}] duration:${a}`);const l=i[s],c=this.fragCurrent;c&&(this.state===J.FRAG_LOADING||this.state===J.FRAG_LOADING_WAITING_RETRY)&&c.level!==t.level&&c.loader&&this.abortCurrentFrag();let d=0;if(o.live||(r=l.details)!=null&&r.live){var u;if(this.checkLiveUpdate(o),o.deltaUpdateFailed)return;d=this.alignPlaylists(o,l.details,(u=this.levelLastLoaded)==null?void 0:u.details)}if(l.details=o,this.levelLastLoaded=l,this.hls.trigger(T.LEVEL_UPDATED,{details:o,level:s}),this.state===J.WAITING_LEVEL){if(this.waitForCdnTuneIn(o))return;this.state=J.IDLE}this.startFragRequested?o.live&&this.synchronizeToLiveEdge(o):this.setStartPosition(o,d),this.tick()}_handleFragmentLoadProgress(e){var t;const{frag:r,part:i,payload:s}=e,{levels:o}=this;if(!o){this.warn(`Levels were reset while fragment load was in progress. Fragment ${r.sn} of level ${r.level} will not be buffered`);return}const a=o[r.level],l=a.details;if(!l){this.warn(`Dropping fragment ${r.sn} of level ${r.level} after level details were reset`),this.fragmentTracker.removeFragment(r);return}const c=a.videoCodec,d=l.PTSKnown||!l.live,u=(t=r.initSegment)==null?void 0:t.data,h=this._getAudioCodec(a),g=this.transmuxer=this.transmuxer||new Wf(this.hls,ke.MAIN,this._handleTransmuxComplete.bind(this),this._handleTransmuxerFlush.bind(this)),y=i?i.index:-1,b=y!==-1,E=new yl(r.level,r.sn,r.stats.chunkCount,s.byteLength,y,b),C=this.initPTS[r.cc];g.push(s,u,h,c,r,i,l.totalduration,d,E,C)}onAudioTrackSwitching(e,t){const r=this.altAudio;if(!!!t.url){if(this.mediaBuffer!==this.media){this.log("Switching on main audio, use media.buffered to schedule main fragment loading"),this.mediaBuffer=this.media;const o=this.fragCurrent;o&&(this.log("Switching to main audio track, cancel main fragment load"),o.abortRequests(),this.fragmentTracker.removeFragment(o)),this.resetTransmuxer(),this.resetLoadingState()}else this.audioOnly&&this.resetTransmuxer();const s=this.hls;r&&(s.trigger(T.BUFFER_FLUSHING,{startOffset:0,endOffset:Number.POSITIVE_INFINITY,type:null}),this.fragmentTracker.removeAllFragments()),s.trigger(T.AUDIO_TRACK_SWITCHED,t)}}onAudioTrackSwitched(e,t){const r=t.id,i=!!this.hls.audioTracks[r].url;if(i){const s=this.videoBuffer;s&&this.mediaBuffer!==s&&(this.log("Switching on alternate audio, use video.buffered to schedule main fragment loading"),this.mediaBuffer=s)}this.altAudio=i,this.tick()}onBufferCreated(e,t){const r=t.tracks;let i,s,o=!1;for(const a in r){const l=r[a];if(l.id==="main"){if(s=a,i=l,a==="video"){const c=r[a];c&&(this.videoBuffer=c.buffer)}}else o=!0}o&&i?(this.log(`Alternate track found, use ${s}.buffered to schedule main fragment loading`),this.mediaBuffer=i.buffer):this.mediaBuffer=this.media}onFragBuffered(e,t){const{frag:r,part:i}=t;if(r&&r.type!==ke.MAIN)return;if(this.fragContextChanged(r)){this.warn(`Fragment ${r.sn}${i?" p: "+i.index:""} of level ${r.level} finished buffering, but was aborted. state: ${this.state}`),this.state===J.PARSED&&(this.state=J.IDLE);return}const s=i?i.stats:r.stats;this.fragLastKbps=Math.round(8*s.total/(s.buffering.end-s.loading.first)),r.sn!=="initSegment"&&(this.fragPrevious=r),this.fragBufferedComplete(r,i)}onError(e,t){var r;if(t.fatal){this.state=J.ERROR;return}switch(t.details){case $.FRAG_GAP:case $.FRAG_PARSING_ERROR:case $.FRAG_DECRYPT_ERROR:case $.FRAG_LOAD_ERROR:case $.FRAG_LOAD_TIMEOUT:case $.KEY_LOAD_ERROR:case $.KEY_LOAD_TIMEOUT:this.onFragmentOrKeyLoadError(ke.MAIN,t);break;case $.LEVEL_LOAD_ERROR:case $.LEVEL_LOAD_TIMEOUT:case $.LEVEL_PARSING_ERROR:!t.levelRetry&&this.state===J.WAITING_LEVEL&&((r=t.context)==null?void 0:r.type)===Ue.LEVEL&&(this.state=J.IDLE);break;case $.BUFFER_APPEND_ERROR:case $.BUFFER_FULL_ERROR:if(!t.parent||t.parent!=="main")return;if(t.details===$.BUFFER_APPEND_ERROR){this.resetLoadingState();return}this.reduceLengthAndFlushBuffer(t)&&this.flushMainBuffer(0,Number.POSITIVE_INFINITY);break;case $.INTERNAL_EXCEPTION:this.recoverWorkerError(t);break}}checkBuffer(){const{media:e,gapController:t}=this;if(!(!e||!t||!e.readyState)){if(this.loadedmetadata||!Xe.getBuffered(e).length){const r=this.state!==J.IDLE?this.fragCurrent:null;t.poll(this.lastCurrentTime,r)}this.lastCurrentTime=e.currentTime}}onFragLoadEmergencyAborted(){this.state=J.IDLE,this.loadedmetadata||(this.startFragRequested=!1,this.nextLoadPosition=this.startPosition),this.tickImmediate()}onBufferFlushed(e,{type:t}){if(t!==Ve.AUDIO||this.audioOnly&&!this.altAudio){const r=(t===Ve.VIDEO?this.videoBuffer:this.mediaBuffer)||this.media;this.afterBufferFlushed(r,t,ke.MAIN),this.tick()}}onLevelsUpdated(e,t){this.level>-1&&this.fragCurrent&&(this.level=this.fragCurrent.level),this.levels=t.levels}swapAudioCodec(){this.audioCodecSwap=!this.audioCodecSwap}seekToStartPos(){const{media:e}=this;if(!e)return;const t=e.currentTime;let r=this.startPosition;if(r>=0&&t<r){if(e.seeking){this.log(`could not seek to ${r}, already seeking at ${t}`);return}const i=Xe.getBuffered(e),o=(i.length?i.start(0):0)-r;o>0&&(o<this.config.maxBufferHole||o<this.config.maxFragLookUpTolerance)&&(this.log(`adjusting start position by ${o} to match buffer start`),r+=o,this.startPosition=r),this.log(`seek to target start position ${r} from current time ${t}`),e.currentTime=r}}_getAudioCodec(e){let t=this.config.defaultAudioCodec||e.audioCodec;return this.audioCodecSwap&&t&&(this.log("Swapping audio codec"),t.indexOf("mp4a.40.5")!==-1?t="mp4a.40.2":t="mp4a.40.5"),t}_loadBitrateTestFrag(e,t){e.bitrateTest=!0,this._doFragLoad(e,t).then(r=>{const{hls:i}=this;if(!r||this.fragContextChanged(e))return;t.fragmentError=0,this.state=J.IDLE,this.startFragRequested=!1,this.bitrateTest=!1;const s=e.stats;s.parsing.start=s.parsing.end=s.buffering.start=s.buffering.end=self.performance.now(),i.trigger(T.FRAG_LOADED,r),e.bitrateTest=!1})}_handleTransmuxComplete(e){var t;const r="main",{hls:i}=this,{remuxResult:s,chunkMeta:o}=e,a=this.getCurrentContext(o);if(!a){this.resetWhenMissingContext(o);return}const{frag:l,part:c,level:d}=a,{video:u,text:h,id3:g,initSegment:y}=s,{details:b}=d,E=this.altAudio?void 0:s.audio;if(this.fragContextChanged(l)){this.fragmentTracker.removeFragment(l);return}if(this.state=J.PARSING,y){if(y!=null&&y.tracks){const R=l.initSegment||l;this._bufferInitSegment(d,y.tracks,R,o),i.trigger(T.FRAG_PARSING_INIT_SEGMENT,{frag:R,id:r,tracks:y.tracks})}const C=y.initPTS,w=y.timescale;pe(C)&&(this.initPTS[l.cc]={baseTime:C,timescale:w},i.trigger(T.INIT_PTS_FOUND,{frag:l,id:r,initPTS:C,timescale:w}))}if(u&&b&&l.sn!=="initSegment"){const C=b.fragments[l.sn-1-b.startSN],w=l.sn===b.startSN,R=!C||l.cc>C.cc;if(s.independent!==!1){const{startPTS:_,endPTS:P,startDTS:H,endDTS:U}=u;if(c)c.elementaryStreams[u.type]={startPTS:_,endPTS:P,startDTS:H,endDTS:U};else if(u.firstKeyFrame&&u.independent&&o.id===1&&!R&&(this.couldBacktrack=!0),u.dropped&&u.independent){const j=this.getMainFwdBufferInfo(),Q=(j?j.end:this.getLoadPosition())+this.config.maxBufferHole,F=u.firstKeyFramePTS?u.firstKeyFramePTS:_;if(!w&&Q<F-this.config.maxBufferHole&&!R){this.backtrack(l);return}else R&&(l.gap=!0);l.setElementaryStreamInfo(u.type,l.start,P,l.start,U,!0)}else w&&_>ys&&(l.gap=!0);l.setElementaryStreamInfo(u.type,_,P,H,U),this.backtrackFragment&&(this.backtrackFragment=l),this.bufferFragmentData(u,l,c,o,w||R)}else if(w||R)l.gap=!0;else{this.backtrack(l);return}}if(E){const{startPTS:C,endPTS:w,startDTS:R,endDTS:_}=E;c&&(c.elementaryStreams[Ve.AUDIO]={startPTS:C,endPTS:w,startDTS:R,endDTS:_}),l.setElementaryStreamInfo(Ve.AUDIO,C,w,R,_),this.bufferFragmentData(E,l,c,o)}if(b&&g!=null&&(t=g.samples)!=null&&t.length){const C={id:r,frag:l,details:b,samples:g.samples};i.trigger(T.FRAG_PARSING_METADATA,C)}if(b&&h){const C={id:r,frag:l,details:b,samples:h.samples};i.trigger(T.FRAG_PARSING_USERDATA,C)}}_bufferInitSegment(e,t,r,i){if(this.state!==J.PARSING)return;this.audioOnly=!!t.audio&&!t.video,this.altAudio&&!this.audioOnly&&delete t.audio;const{audio:s,video:o,audiovideo:a}=t;if(s){let l=e.audioCodec;const c=navigator.userAgent.toLowerCase();this.audioCodecSwitch&&(l&&(l.indexOf("mp4a.40.5")!==-1?l="mp4a.40.2":l="mp4a.40.5"),s.metadata.channelCount!==1&&c.indexOf("firefox")===-1&&(l="mp4a.40.5")),l&&l.indexOf("mp4a.40.5")!==-1&&c.indexOf("android")!==-1&&s.container!=="audio/mpeg"&&(l="mp4a.40.2",this.log(`Android: force audio codec to ${l}`)),e.audioCodec&&e.audioCodec!==l&&this.log(`Swapping manifest audio codec "${e.audioCodec}" for "${l}"`),s.levelCodec=l,s.id="main",this.log(`Init audio buffer, container:${s.container}, codecs[selected/level/parsed]=[${l||""}/${e.audioCodec||""}/${s.codec}]`)}o&&(o.levelCodec=e.videoCodec,o.id="main",this.log(`Init video buffer, container:${o.container}, codecs[level/parsed]=[${e.videoCodec||""}/${o.codec}]`)),a&&this.log(`Init audiovideo buffer, container:${a.container}, codecs[level/parsed]=[${e.codecs}/${a.codec}]`),this.hls.trigger(T.BUFFER_CODECS,t),Object.keys(t).forEach(l=>{const d=t[l].initSegment;d!=null&&d.byteLength&&this.hls.trigger(T.BUFFER_APPENDING,{type:l,data:d,frag:r,part:null,chunkMeta:i,parent:r.type})}),this.tickImmediate()}getMainFwdBufferInfo(){return this.getFwdBufferInfo(this.mediaBuffer?this.mediaBuffer:this.media,ke.MAIN)}backtrack(e){this.couldBacktrack=!0,this.backtrackFragment=e,this.resetTransmuxer(),this.flushBufferGap(e),this.fragmentTracker.removeFragment(e),this.fragPrevious=null,this.nextLoadPosition=e.start,this.state=J.IDLE}checkFragmentChanged(){const e=this.media;let t=null;if(e&&e.readyState>1&&e.seeking===!1){const r=e.currentTime;if(Xe.isBuffered(e,r)?t=this.getAppendedFrag(r):Xe.isBuffered(e,r+.1)&&(t=this.getAppendedFrag(r+.1)),t){this.backtrackFragment=null;const i=this.fragPlaying,s=t.level;(!i||t.sn!==i.sn||i.level!==s)&&(this.fragPlaying=t,this.hls.trigger(T.FRAG_CHANGED,{frag:t}),(!i||i.level!==s)&&this.hls.trigger(T.LEVEL_SWITCHED,{level:s}))}}}get nextLevel(){const e=this.nextBufferedFrag;return e?e.level:-1}get currentFrag(){const e=this.media;return e?this.fragPlaying||this.getAppendedFrag(e.currentTime):null}get currentProgramDateTime(){const e=this.media;if(e){const t=e.currentTime,r=this.currentFrag;if(r&&pe(t)&&pe(r.programDateTime)){const i=r.programDateTime+(t-r.start)*1e3;return new Date(i)}}return null}get currentLevel(){const e=this.currentFrag;return e?e.level:-1}get nextBufferedFrag(){const e=this.currentFrag;return e?this.followingBufferedFrag(e):null}get forceStartLoad(){return this._forceStartLoad}}class cr{static get version(){return"1.5.7"}static isMSESupported(){return pp()}static isSupported(){return MS()}static getMediaSource(){return Ir()}static get Events(){return T}static get ErrorTypes(){return Le}static get ErrorDetails(){return $}static get DefaultConfig(){return cr.defaultConfig?cr.defaultConfig:hp}static set DefaultConfig(e){cr.defaultConfig=e}constructor(e={}){this.config=void 0,this.userConfig=void 0,this.coreComponents=void 0,this.networkControllers=void 0,this.started=!1,this._emitter=new Tl,this._autoLevelCapping=-1,this._maxHdcpLevel=null,this.abrController=void 0,this.bufferController=void 0,this.capLevelController=void 0,this.latencyController=void 0,this.levelController=void 0,this.streamController=void 0,this.audioTrackController=void 0,this.subtitleTrackController=void 0,this.emeController=void 0,this.cmcdController=void 0,this._media=null,this.url=null,this.triggeringException=void 0,Fv(e.debug||!1,"Hls instance");const t=this.config=PS(cr.DefaultConfig,e);this.userConfig=e,t.progressive&&BS(t);const{abrController:r,bufferController:i,capLevelController:s,errorController:o,fpsController:a}=t,l=new o(this),c=this.abrController=new r(this),d=this.bufferController=new i(this),u=this.capLevelController=new s(this),h=new a(this),g=new RE(this),y=new BE(this),b=t.contentSteeringController,E=b?new b(this):null,C=this.levelController=new OS(this,E),w=new cx(this),R=new FS(this.config),_=this.streamController=new jS(this,w,R);u.setStreamController(_),h.setStreamController(_);const P=[g,C,_];E&&P.splice(1,0,E),this.networkControllers=P;const H=[c,d,u,h,y,w];this.audioTrackController=this.createController(t.audioTrackController,P);const U=t.audioStreamController;U&&P.push(new U(this,w,R)),this.subtitleTrackController=this.createController(t.subtitleTrackController,P);const j=t.subtitleStreamController;j&&P.push(new j(this,w,R)),this.createController(t.timelineController,H),R.emeController=this.emeController=this.createController(t.emeController,H),this.cmcdController=this.createController(t.cmcdController,H),this.latencyController=this.createController(OE,H),this.coreComponents=H,P.push(l);const Q=l.onErrorOut;typeof Q=="function"&&this.on(T.ERROR,Q,l)}createController(e,t){if(e){const r=new e(this);return t&&t.push(r),r}return null}on(e,t,r=this){this._emitter.on(e,t,r)}once(e,t,r=this){this._emitter.once(e,t,r)}removeAllListeners(e){this._emitter.removeAllListeners(e)}off(e,t,r=this,i){this._emitter.off(e,t,r,i)}listeners(e){return this._emitter.listeners(e)}emit(e,t,r){return this._emitter.emit(e,t,r)}trigger(e,t){if(this.config.debug)return this.emit(e,e,t);try{return this.emit(e,e,t)}catch(r){if(B.error("An internal error happened while handling event "+e+'. Error message: "'+r.message+'". Here is a stacktrace:',r),!this.triggeringException){this.triggeringException=!0;const i=e===T.ERROR;this.trigger(T.ERROR,{type:Le.OTHER_ERROR,details:$.INTERNAL_EXCEPTION,fatal:i,event:e,error:r}),this.triggeringException=!1}}return!1}listenerCount(e){return this._emitter.listenerCount(e)}destroy(){B.log("destroy"),this.trigger(T.DESTROYING,void 0),this.detachMedia(),this.removeAllListeners(),this._autoLevelCapping=-1,this.url=null,this.networkControllers.forEach(t=>t.destroy()),this.networkControllers.length=0,this.coreComponents.forEach(t=>t.destroy()),this.coreComponents.length=0;const e=this.config;e.xhrSetup=e.fetchSetup=void 0,this.userConfig=null}attachMedia(e){B.log("attachMedia"),this._media=e,this.trigger(T.MEDIA_ATTACHING,{media:e})}detachMedia(){B.log("detachMedia"),this.trigger(T.MEDIA_DETACHING,void 0),this._media=null}loadSource(e){this.stopLoad();const t=this.media,r=this.url,i=this.url=ul.buildAbsoluteURL(self.location.href,e,{alwaysNormalize:!0});this._autoLevelCapping=-1,this._maxHdcpLevel=null,B.log(`loadSource:${i}`),t&&r&&(r!==i||this.bufferController.hasSourceTypes())&&(this.detachMedia(),this.attachMedia(t)),this.trigger(T.MANIFEST_LOADING,{url:e})}startLoad(e=-1){B.log(`startLoad(${e})`),this.started=!0,this.networkControllers.forEach(t=>{t.startLoad(e)})}stopLoad(){B.log("stopLoad"),this.started=!1,this.networkControllers.forEach(e=>{e.stopLoad()})}resumeBuffering(){this.started&&this.networkControllers.forEach(e=>{"fragmentLoader"in e&&e.startLoad(-1)})}pauseBuffering(){this.networkControllers.forEach(e=>{"fragmentLoader"in e&&e.stopLoad()})}swapAudioCodec(){B.log("swapAudioCodec"),this.streamController.swapAudioCodec()}recoverMediaError(){B.log("recoverMediaError");const e=this._media;this.detachMedia(),e&&this.attachMedia(e)}removeLevel(e){this.levelController.removeLevel(e)}get levels(){const e=this.levelController.levels;return e||[]}get currentLevel(){return this.streamController.currentLevel}set currentLevel(e){B.log(`set currentLevel:${e}`),this.levelController.manualLevel=e,this.streamController.immediateLevelSwitch()}get nextLevel(){return this.streamController.nextLevel}set nextLevel(e){B.log(`set nextLevel:${e}`),this.levelController.manualLevel=e,this.streamController.nextLevelSwitch()}get loadLevel(){return this.levelController.level}set loadLevel(e){B.log(`set loadLevel:${e}`),this.levelController.manualLevel=e}get nextLoadLevel(){return this.levelController.nextLoadLevel}set nextLoadLevel(e){this.levelController.nextLoadLevel=e}get firstLevel(){return Math.max(this.levelController.firstLevel,this.minAutoLevel)}set firstLevel(e){B.log(`set firstLevel:${e}`),this.levelController.firstLevel=e}get startLevel(){const e=this.levelController.startLevel;return e===-1&&this.abrController.forcedAutoLevel>-1?this.abrController.forcedAutoLevel:e}set startLevel(e){B.log(`set startLevel:${e}`),e!==-1&&(e=Math.max(e,this.minAutoLevel)),this.levelController.startLevel=e}get capLevelToPlayerSize(){return this.config.capLevelToPlayerSize}set capLevelToPlayerSize(e){const t=!!e;t!==this.config.capLevelToPlayerSize&&(t?this.capLevelController.startCapping():(this.capLevelController.stopCapping(),this.autoLevelCapping=-1,this.streamController.nextLevelSwitch()),this.config.capLevelToPlayerSize=t)}get autoLevelCapping(){return this._autoLevelCapping}get bandwidthEstimate(){const{bwEstimator:e}=this.abrController;return e?e.getEstimate():NaN}set bandwidthEstimate(e){this.abrController.resetEstimator(e)}get ttfbEstimate(){const{bwEstimator:e}=this.abrController;return e?e.getEstimateTTFB():NaN}set autoLevelCapping(e){this._autoLevelCapping!==e&&(B.log(`set autoLevelCapping:${e}`),this._autoLevelCapping=e,this.levelController.checkMaxAutoUpdated())}get maxHdcpLevel(){return this._maxHdcpLevel}set maxHdcpLevel(e){FE(e)&&this._maxHdcpLevel!==e&&(this._maxHdcpLevel=e,this.levelController.checkMaxAutoUpdated())}get autoLevelEnabled(){return this.levelController.manualLevel===-1}get manualLevel(){return this.levelController.manualLevel}get minAutoLevel(){const{levels:e,config:{minAutoBitrate:t}}=this;if(!e)return 0;const r=e.length;for(let i=0;i<r;i++)if(e[i].maxBitrate>=t)return i;return 0}get maxAutoLevel(){const{levels:e,autoLevelCapping:t,maxHdcpLevel:r}=this;let i;if(t===-1&&e!=null&&e.length?i=e.length-1:i=t,r)for(let s=i;s--;){const o=e[s].attrs["HDCP-LEVEL"];if(o&&o<=r)return s}return i}get firstAutoLevel(){return this.abrController.firstAutoLevel}get nextAutoLevel(){return this.abrController.nextAutoLevel}set nextAutoLevel(e){this.abrController.nextAutoLevel=e}get playingDate(){return this.streamController.currentProgramDateTime}get mainForwardBufferInfo(){return this.streamController.getMainFwdBufferInfo()}setAudioOption(e){var t;return(t=this.audioTrackController)==null?void 0:t.setAudioOption(e)}setSubtitleOption(e){var t;return(t=this.subtitleTrackController)==null||t.setSubtitleOption(e),null}get allAudioTracks(){const e=this.audioTrackController;return e?e.allAudioTracks:[]}get audioTracks(){const e=this.audioTrackController;return e?e.audioTracks:[]}get audioTrack(){const e=this.audioTrackController;return e?e.audioTrack:-1}set audioTrack(e){const t=this.audioTrackController;t&&(t.audioTrack=e)}get allSubtitleTracks(){const e=this.subtitleTrackController;return e?e.allSubtitleTracks:[]}get subtitleTracks(){const e=this.subtitleTrackController;return e?e.subtitleTracks:[]}get subtitleTrack(){const e=this.subtitleTrackController;return e?e.subtitleTrack:-1}get media(){return this._media}set subtitleTrack(e){const t=this.subtitleTrackController;t&&(t.subtitleTrack=e)}get subtitleDisplay(){const e=this.subtitleTrackController;return e?e.subtitleDisplay:!1}set subtitleDisplay(e){const t=this.subtitleTrackController;t&&(t.subtitleDisplay=e)}get lowLatencyMode(){return this.config.lowLatencyMode}set lowLatencyMode(e){this.config.lowLatencyMode=e}get liveSyncPosition(){return this.latencyController.liveSyncPosition}get latency(){return this.latencyController.latency}get maxLatency(){return this.latencyController.maxLatency}get targetLatency(){return this.latencyController.targetLatency}get drift(){return this.latencyController.drift}get forceStartLoad(){return this.streamController.forceStartLoad}}cr.defaultConfig=void 0;const qS=tb({history:AA(),routes:[{path:"/",redirect:"/cover"},{path:"/new/about",name:"about",component:()=>On(()=>import("./AboutView-60e45407.js"),["./AboutView-60e45407.js","./AboutView-4d995ba2.css"],import.meta.url)},{path:"/cover",name:"cover",component:()=>On(()=>import("./CoverPage-b00e68ed.js"),[],import.meta.url)},{path:"/login",name:"login",component:()=>On(()=>import("./LoginPage-1cdeea45.js"),[],import.meta.url)},{path:"/anime/search",component:()=>On(()=>import("./AnimeSearch-0a466628.js"),["./AnimeSearch-0a466628.js","./InfoHead-e2677bf5.js"],import.meta.url)},{path:"/anime/play",component:()=>On(()=>import("./AnimePlayPage-ebbca0b0.js"),["./AnimePlayPage-ebbca0b0.js","./InfoHead-e2677bf5.js"],import.meta.url)},{path:"/anime/calendar",component:()=>On(()=>import("./AnimeCalendarPage-94fb5f04.js"),["./AnimeCalendarPage-94fb5f04.js","./InfoHead-e2677bf5.js"],import.meta.url)},{path:"/anime/history",component:()=>On(()=>import("./AnimeHistoryPage-c6aaff8f.js"),["./AnimeHistoryPage-c6aaff8f.js","./InfoHead-e2677bf5.js"],import.meta.url)}]}),mp=Hy();mp.use(Zy);const Rl=Ny(sb);Rl.use(mp);Rl.use(qS);Rl.mount("#app");export{tT as A,sT as D,fn as F,cr as H,rb as _,yh as a,YS as b,JS as c,ZS as d,Xa as e,iT as f,_t as g,eT as h,Kn as i,qS as j,rT as k,Ig as l,Tt as m,Ua as n,fh as o,WS as p,Va as q,XS as r,Ya as s,VS as t,nT as u,oy as v,li as w,Na as x,ii as y,QS as z};
