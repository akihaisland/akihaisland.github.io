(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();function Ga(n,e){const t=Object.create(null),r=n.split(",");for(let i=0;i<r.length;i++)t[r[i]]=!0;return e?i=>!!t[i.toLowerCase()]:i=>!!t[i]}const tt={},gr=[],jt=()=>{},Tm=()=>!1,Cm=/^on[^a-z]/,zs=n=>Cm.test(n),Ka=n=>n.startsWith("onUpdate:"),gt=Object.assign,za=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},wm=Object.prototype.hasOwnProperty,He=(n,e)=>wm.call(n,e),De=Array.isArray,yr=n=>js(n)==="[object Map]",_u=n=>js(n)==="[object Set]",Oe=n=>typeof n=="function",ft=n=>typeof n=="string",ja=n=>typeof n=="symbol",rt=n=>n!==null&&typeof n=="object",Du=n=>rt(n)&&Oe(n.then)&&Oe(n.catch),Pu=Object.prototype.toString,js=n=>Pu.call(n),km=n=>js(n).slice(8,-1),Bu=n=>js(n)==="[object Object]",qa=n=>ft(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,us=Ga(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),qs=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},Lm=/-(\w)/g,Er=qs(n=>n.replace(Lm,(e,t)=>t?t.toUpperCase():"")),Rm=/\B([A-Z])/g,Dr=qs(n=>n.replace(Rm,"-$1").toLowerCase()),Ou=qs(n=>n.charAt(0).toUpperCase()+n.slice(1)),Co=qs(n=>n?`on${Ou(n)}`:""),Ti=(n,e)=>!Object.is(n,e),hs=(n,e)=>{for(let t=0;t<n.length;t++)n[t](e)},ws=(n,e,t)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,value:t})},sa=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let yc;const oa=()=>yc||(yc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Va(n){if(De(n)){const e={};for(let t=0;t<n.length;t++){const r=n[t],i=ft(r)?Pm(r):Va(r);if(i)for(const s in i)e[s]=i[s]}return e}else{if(ft(n))return n;if(rt(n))return n}}const Im=/;(?![^(]*\))/g,_m=/:([^]+)/,Dm=/\/\*[^]*?\*\//g;function Pm(n){const e={};return n.replace(Dm,"").split(Im).forEach(t=>{if(t){const r=t.split(_m);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Wa(n){let e="";if(ft(n))e=n;else if(De(n))for(let t=0;t<n.length;t++){const r=Wa(n[t]);r&&(e+=r+" ")}else if(rt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const Bm="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Om=Ga(Bm);function Fu(n){return!!n||n===""}const QT=n=>ft(n)?n:n==null?"":De(n)||rt(n)&&(n.toString===Pu||!Oe(n.toString))?JSON.stringify(n,Mu,2):String(n),Mu=(n,e)=>e&&e.__v_isRef?Mu(n,e.value):yr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[r,i])=>(t[`${r} =>`]=i,t),{})}:_u(e)?{[`Set(${e.size})`]:[...e.values()]}:rt(e)&&!De(e)&&!Bu(e)?String(e):e;let _t;class Nu{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=_t,!e&&_t&&(this.index=(_t.scopes||(_t.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const t=_t;try{return _t=this,e()}finally{_t=t}}}on(){_t=this}off(){_t=this.parent}stop(e){if(this._active){let t,r;for(t=0,r=this.effects.length;t<r;t++)this.effects[t].stop();for(t=0,r=this.cleanups.length;t<r;t++)this.cleanups[t]();if(this.scopes)for(t=0,r=this.scopes.length;t<r;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function Uu(n){return new Nu(n)}function Fm(n,e=_t){e&&e.active&&e.effects.push(n)}function $u(){return _t}function Mm(n){_t&&_t.cleanups.push(n)}const Ya=n=>{const e=new Set(n);return e.w=0,e.n=0,e},Hu=n=>(n.w&On)>0,Gu=n=>(n.n&On)>0,Nm=({deps:n})=>{if(n.length)for(let e=0;e<n.length;e++)n[e].w|=On},Um=n=>{const{deps:e}=n;if(e.length){let t=0;for(let r=0;r<e.length;r++){const i=e[r];Hu(i)&&!Gu(i)?i.delete(n):e[t++]=i,i.w&=~On,i.n&=~On}e.length=t}},ks=new WeakMap;let fi=0,On=1;const aa=30;let Kt;const Wn=Symbol(""),la=Symbol("");class Qa{constructor(e,t=null,r){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,Fm(this,r)}run(){if(!this.active)return this.fn();let e=Kt,t=Dn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Kt,Kt=this,Dn=!0,On=1<<++fi,fi<=aa?Nm(this):Ac(this),this.fn()}finally{fi<=aa&&Um(this),On=1<<--fi,Kt=this.parent,Dn=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Kt===this?this.deferStop=!0:this.active&&(Ac(this),this.onStop&&this.onStop(),this.active=!1)}}function Ac(n){const{deps:e}=n;if(e.length){for(let t=0;t<e.length;t++)e[t].delete(n);e.length=0}}let Dn=!0;const Ku=[];function Pr(){Ku.push(Dn),Dn=!1}function Br(){const n=Ku.pop();Dn=n===void 0?!0:n}function Rt(n,e,t){if(Dn&&Kt){let r=ks.get(n);r||ks.set(n,r=new Map);let i=r.get(t);i||r.set(t,i=Ya()),zu(i)}}function zu(n,e){let t=!1;fi<=aa?Gu(n)||(n.n|=On,t=!Hu(n)):t=!n.has(Kt),t&&(n.add(Kt),Kt.deps.push(n))}function bn(n,e,t,r,i,s){const o=ks.get(n);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(t==="length"&&De(n)){const l=Number(r);o.forEach((c,d)=>{(d==="length"||d>=l)&&a.push(c)})}else switch(t!==void 0&&a.push(o.get(t)),e){case"add":De(n)?qa(t)&&a.push(o.get("length")):(a.push(o.get(Wn)),yr(n)&&a.push(o.get(la)));break;case"delete":De(n)||(a.push(o.get(Wn)),yr(n)&&a.push(o.get(la)));break;case"set":yr(n)&&a.push(o.get(Wn));break}if(a.length===1)a[0]&&ca(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);ca(Ya(l))}}function ca(n,e){const t=De(n)?n:[...n];for(const r of t)r.computed&&bc(r);for(const r of t)r.computed||bc(r)}function bc(n,e){(n!==Kt||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}function $m(n,e){var t;return(t=ks.get(n))==null?void 0:t.get(e)}const Hm=Ga("__proto__,__v_isRef,__isVue"),ju=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(ja)),Gm=Xa(),Km=Xa(!1,!0),zm=Xa(!0),vc=jm();function jm(){const n={};return["includes","indexOf","lastIndexOf"].forEach(e=>{n[e]=function(...t){const r=Ge(this);for(let s=0,o=this.length;s<o;s++)Rt(r,"get",s+"");const i=r[e](...t);return i===-1||i===!1?r[e](...t.map(Ge)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{n[e]=function(...t){Pr();const r=Ge(this)[e].apply(this,t);return Br(),r}}),n}function qm(n){const e=Ge(this);return Rt(e,"has",n),e.hasOwnProperty(n)}function Xa(n=!1,e=!1){return function(r,i,s){if(i==="__v_isReactive")return!n;if(i==="__v_isReadonly")return n;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&s===(n?e?lg:Qu:e?Yu:Wu).get(r))return r;const o=De(r);if(!n){if(o&&He(vc,i))return Reflect.get(vc,i,s);if(i==="hasOwnProperty")return qm}const a=Reflect.get(r,i,s);return(ja(i)?ju.has(i):Hm(i))||(n||Rt(r,"get",i),e)?a:at(a)?o&&qa(i)?a:a.value:rt(a)?n?Ju(a):Fi(a):a}}const Vm=qu(),Wm=qu(!0);function qu(n=!1){return function(t,r,i,s){let o=t[r];if(xr(o)&&at(o)&&!at(i))return!1;if(!n&&(!Ls(i)&&!xr(i)&&(o=Ge(o),i=Ge(i)),!De(t)&&at(o)&&!at(i)))return o.value=i,!0;const a=De(t)&&qa(r)?Number(r)<t.length:He(t,r),l=Reflect.set(t,r,i,s);return t===Ge(s)&&(a?Ti(i,o)&&bn(t,"set",r,i):bn(t,"add",r,i)),l}}function Ym(n,e){const t=He(n,e);n[e];const r=Reflect.deleteProperty(n,e);return r&&t&&bn(n,"delete",e,void 0),r}function Qm(n,e){const t=Reflect.has(n,e);return(!ja(e)||!ju.has(e))&&Rt(n,"has",e),t}function Xm(n){return Rt(n,"iterate",De(n)?"length":Wn),Reflect.ownKeys(n)}const Vu={get:Gm,set:Vm,deleteProperty:Ym,has:Qm,ownKeys:Xm},Jm={get:zm,set(n,e){return!0},deleteProperty(n,e){return!0}},Zm=gt({},Vu,{get:Km,set:Wm}),Ja=n=>n,Vs=n=>Reflect.getPrototypeOf(n);function Yi(n,e,t=!1,r=!1){n=n.__v_raw;const i=Ge(n),s=Ge(e);t||(e!==s&&Rt(i,"get",e),Rt(i,"get",s));const{has:o}=Vs(i),a=r?Ja:t?tl:Ci;if(o.call(i,e))return a(n.get(e));if(o.call(i,s))return a(n.get(s));n!==i&&n.get(e)}function Qi(n,e=!1){const t=this.__v_raw,r=Ge(t),i=Ge(n);return e||(n!==i&&Rt(r,"has",n),Rt(r,"has",i)),n===i?t.has(n):t.has(n)||t.has(i)}function Xi(n,e=!1){return n=n.__v_raw,!e&&Rt(Ge(n),"iterate",Wn),Reflect.get(n,"size",n)}function Ec(n){n=Ge(n);const e=Ge(this);return Vs(e).has.call(e,n)||(e.add(n),bn(e,"add",n,n)),this}function xc(n,e){e=Ge(e);const t=Ge(this),{has:r,get:i}=Vs(t);let s=r.call(t,n);s||(n=Ge(n),s=r.call(t,n));const o=i.call(t,n);return t.set(n,e),s?Ti(e,o)&&bn(t,"set",n,e):bn(t,"add",n,e),this}function Sc(n){const e=Ge(this),{has:t,get:r}=Vs(e);let i=t.call(e,n);i||(n=Ge(n),i=t.call(e,n)),r&&r.call(e,n);const s=e.delete(n);return i&&bn(e,"delete",n,void 0),s}function Tc(){const n=Ge(this),e=n.size!==0,t=n.clear();return e&&bn(n,"clear",void 0,void 0),t}function Ji(n,e){return function(r,i){const s=this,o=s.__v_raw,a=Ge(o),l=e?Ja:n?tl:Ci;return!n&&Rt(a,"iterate",Wn),o.forEach((c,d)=>r.call(i,l(c),l(d),s))}}function Zi(n,e,t){return function(...r){const i=this.__v_raw,s=Ge(i),o=yr(s),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=i[n](...r),d=t?Ja:e?tl:Ci;return!e&&Rt(s,"iterate",l?la:Wn),{next(){const{value:u,done:h}=c.next();return h?{value:u,done:h}:{value:a?[d(u[0]),d(u[1])]:d(u),done:h}},[Symbol.iterator](){return this}}}}function Tn(n){return function(...e){return n==="delete"?!1:this}}function eg(){const n={get(s){return Yi(this,s)},get size(){return Xi(this)},has:Qi,add:Ec,set:xc,delete:Sc,clear:Tc,forEach:Ji(!1,!1)},e={get(s){return Yi(this,s,!1,!0)},get size(){return Xi(this)},has:Qi,add:Ec,set:xc,delete:Sc,clear:Tc,forEach:Ji(!1,!0)},t={get(s){return Yi(this,s,!0)},get size(){return Xi(this,!0)},has(s){return Qi.call(this,s,!0)},add:Tn("add"),set:Tn("set"),delete:Tn("delete"),clear:Tn("clear"),forEach:Ji(!0,!1)},r={get(s){return Yi(this,s,!0,!0)},get size(){return Xi(this,!0)},has(s){return Qi.call(this,s,!0)},add:Tn("add"),set:Tn("set"),delete:Tn("delete"),clear:Tn("clear"),forEach:Ji(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=Zi(s,!1,!1),t[s]=Zi(s,!0,!1),e[s]=Zi(s,!1,!0),r[s]=Zi(s,!0,!0)}),[n,t,e,r]}const[tg,ng,rg,ig]=eg();function Za(n,e){const t=e?n?ig:rg:n?ng:tg;return(r,i,s)=>i==="__v_isReactive"?!n:i==="__v_isReadonly"?n:i==="__v_raw"?r:Reflect.get(He(t,i)&&i in r?t:r,i,s)}const sg={get:Za(!1,!1)},og={get:Za(!1,!0)},ag={get:Za(!0,!1)},Wu=new WeakMap,Yu=new WeakMap,Qu=new WeakMap,lg=new WeakMap;function cg(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function dg(n){return n.__v_skip||!Object.isExtensible(n)?0:cg(km(n))}function Fi(n){return xr(n)?n:el(n,!1,Vu,sg,Wu)}function Xu(n){return el(n,!1,Zm,og,Yu)}function Ju(n){return el(n,!0,Jm,ag,Qu)}function el(n,e,t,r,i){if(!rt(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=i.get(n);if(s)return s;const o=dg(n);if(o===0)return n;const a=new Proxy(n,o===2?r:t);return i.set(n,a),a}function Pn(n){return xr(n)?Pn(n.__v_raw):!!(n&&n.__v_isReactive)}function xr(n){return!!(n&&n.__v_isReadonly)}function Ls(n){return!!(n&&n.__v_isShallow)}function Zu(n){return Pn(n)||xr(n)}function Ge(n){const e=n&&n.__v_raw;return e?Ge(e):n}function Ws(n){return ws(n,"__v_skip",!0),n}const Ci=n=>rt(n)?Fi(n):n,tl=n=>rt(n)?Ju(n):n;function eh(n){Dn&&Kt&&(n=Ge(n),zu(n.dep||(n.dep=Ya())))}function th(n,e){n=Ge(n);const t=n.dep;t&&ca(t)}function at(n){return!!(n&&n.__v_isRef===!0)}function nl(n){return nh(n,!1)}function ug(n){return nh(n,!0)}function nh(n,e){return at(n)?n:new hg(n,e)}class hg{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:Ge(e),this._value=t?e:Ci(e)}get value(){return eh(this),this._value}set value(e){const t=this.__v_isShallow||Ls(e)||xr(e);e=t?e:Ge(e),Ti(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:Ci(e),th(this))}}function Yn(n){return at(n)?n.value:n}const fg={get:(n,e,t)=>Yn(Reflect.get(n,e,t)),set:(n,e,t,r)=>{const i=n[e];return at(i)&&!at(t)?(i.value=t,!0):Reflect.set(n,e,t,r)}};function rh(n){return Pn(n)?n:new Proxy(n,fg)}function pg(n){const e=De(n)?new Array(n.length):{};for(const t in n)e[t]=gg(n,t);return e}class mg{constructor(e,t,r){this._object=e,this._key=t,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return $m(Ge(this._object),this._key)}}function gg(n,e,t){const r=n[e];return at(r)?r:new mg(n,e,t)}class yg{constructor(e,t,r,i){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Qa(e,()=>{this._dirty||(this._dirty=!0,th(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=r}get value(){const e=Ge(this);return eh(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Ag(n,e,t=!1){let r,i;const s=Oe(n);return s?(r=n,i=jt):(r=n.get,i=n.set),new yg(r,i,s||!i,t)}function Bn(n,e,t,r){let i;try{i=r?n(...r):n()}catch(s){Ys(s,e,t)}return i}function qt(n,e,t,r){if(Oe(n)){const s=Bn(n,e,t,r);return s&&Du(s)&&s.catch(o=>{Ys(o,e,t)}),s}const i=[];for(let s=0;s<n.length;s++)i.push(qt(n[s],e,t,r));return i}function Ys(n,e,t,r=!0){const i=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=t;for(;s;){const c=s.ec;if(c){for(let d=0;d<c.length;d++)if(c[d](n,o,a)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){Bn(l,null,10,[n,o,a]);return}}bg(n,t,i,r)}function bg(n,e,t,r=!0){console.error(n)}let wi=!1,da=!1;const St=[];let nn=0;const Ar=[];let mn=null,zn=0;const ih=Promise.resolve();let rl=null;function il(n){const e=rl||ih;return n?e.then(this?n.bind(this):n):e}function vg(n){let e=nn+1,t=St.length;for(;e<t;){const r=e+t>>>1;ki(St[r])<n?e=r+1:t=r}return e}function sl(n){(!St.length||!St.includes(n,wi&&n.allowRecurse?nn+1:nn))&&(n.id==null?St.push(n):St.splice(vg(n.id),0,n),sh())}function sh(){!wi&&!da&&(da=!0,rl=ih.then(ah))}function Eg(n){const e=St.indexOf(n);e>nn&&St.splice(e,1)}function xg(n){De(n)?Ar.push(...n):(!mn||!mn.includes(n,n.allowRecurse?zn+1:zn))&&Ar.push(n),sh()}function Cc(n,e=wi?nn+1:0){for(;e<St.length;e++){const t=St[e];t&&t.pre&&(St.splice(e,1),e--,t())}}function oh(n){if(Ar.length){const e=[...new Set(Ar)];if(Ar.length=0,mn){mn.push(...e);return}for(mn=e,mn.sort((t,r)=>ki(t)-ki(r)),zn=0;zn<mn.length;zn++)mn[zn]();mn=null,zn=0}}const ki=n=>n.id==null?1/0:n.id,Sg=(n,e)=>{const t=ki(n)-ki(e);if(t===0){if(n.pre&&!e.pre)return-1;if(e.pre&&!n.pre)return 1}return t};function ah(n){da=!1,wi=!0,St.sort(Sg);const e=jt;try{for(nn=0;nn<St.length;nn++){const t=St[nn];t&&t.active!==!1&&Bn(t,null,14)}}finally{nn=0,St.length=0,oh(),wi=!1,rl=null,(St.length||Ar.length)&&ah()}}function Tg(n,e,...t){if(n.isUnmounted)return;const r=n.vnode.props||tt;let i=t;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in r){const d=`${o==="modelValue"?"model":o}Modifiers`,{number:u,trim:h}=r[d]||tt;h&&(i=t.map(g=>ft(g)?g.trim():g)),u&&(i=t.map(sa))}let a,l=r[a=Co(e)]||r[a=Co(Er(e))];!l&&s&&(l=r[a=Co(Dr(e))]),l&&qt(l,n,6,i);const c=r[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,qt(c,n,6,i)}}function lh(n,e,t=!1){const r=e.emitsCache,i=r.get(n);if(i!==void 0)return i;const s=n.emits;let o={},a=!1;if(!Oe(n)){const l=c=>{const d=lh(c,e,!0);d&&(a=!0,gt(o,d))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!a?(rt(n)&&r.set(n,null),null):(De(s)?s.forEach(l=>o[l]=null):gt(o,s),rt(n)&&r.set(n,o),o)}function Qs(n,e){return!n||!zs(e)?!1:(e=e.slice(2).replace(/Once$/,""),He(n,e[0].toLowerCase()+e.slice(1))||He(n,Dr(e))||He(n,e))}let Tt=null,Xs=null;function Rs(n){const e=Tt;return Tt=n,Xs=n&&n.type.__scopeId||null,e}function XT(n){Xs=n}function JT(){Xs=null}function Et(n,e=Tt,t){if(!e||n._n)return n;const r=(...i)=>{r._d&&Oc(-1);const s=Rs(e);let o;try{o=n(...i)}finally{Rs(s),r._d&&Oc(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function wo(n){const{type:e,vnode:t,proxy:r,withProxy:i,props:s,propsOptions:[o],slots:a,attrs:l,emit:c,render:d,renderCache:u,data:h,setupState:g,ctx:y,inheritAttrs:b}=n;let E,C;const w=Rs(n);try{if(t.shapeFlag&4){const _=i||r;E=en(d.call(_,_,u,s,g,h,y)),C=l}else{const _=e;E=en(_.length>1?_(s,{attrs:l,slots:a,emit:c}):_(s,null)),C=e.props?l:Cg(l)}}catch(_){Ai.length=0,Ys(_,n,1),E=Ze(Fn)}let R=E;if(C&&b!==!1){const _=Object.keys(C),{shapeFlag:P}=R;_.length&&P&7&&(o&&_.some(Ka)&&(C=wg(C,o)),R=Sr(R,C))}return t.dirs&&(R=Sr(R),R.dirs=R.dirs?R.dirs.concat(t.dirs):t.dirs),t.transition&&(R.transition=t.transition),E=R,Rs(w),E}const Cg=n=>{let e;for(const t in n)(t==="class"||t==="style"||zs(t))&&((e||(e={}))[t]=n[t]);return e},wg=(n,e)=>{const t={};for(const r in n)(!Ka(r)||!(r.slice(9)in e))&&(t[r]=n[r]);return t};function kg(n,e,t){const{props:r,children:i,component:s}=n,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return r?wc(r,o,c):!!o;if(l&8){const d=e.dynamicProps;for(let u=0;u<d.length;u++){const h=d[u];if(o[h]!==r[h]&&!Qs(c,h))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?wc(r,o,c):!0:!!o;return!1}function wc(n,e,t){const r=Object.keys(e);if(r.length!==Object.keys(n).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(e[s]!==n[s]&&!Qs(t,s))return!0}return!1}function Lg({vnode:n,parent:e},t){for(;e&&e.subTree===n;)(n=e.vnode).el=t,e=e.parent}const Rg=n=>n.__isSuspense;function Ig(n,e){e&&e.pendingBranch?De(n)?e.effects.push(...n):e.effects.push(n):xg(n)}const es={};function mi(n,e,t){return ch(n,e,t)}function ch(n,e,{immediate:t,deep:r,flush:i,onTrack:s,onTrigger:o}=tt){var a;const l=$u()===((a=bt)==null?void 0:a.scope)?bt:null;let c,d=!1,u=!1;if(at(n)?(c=()=>n.value,d=Ls(n)):Pn(n)?(c=()=>n,r=!0):De(n)?(u=!0,d=n.some(_=>Pn(_)||Ls(_)),c=()=>n.map(_=>{if(at(_))return _.value;if(Pn(_))return qn(_);if(Oe(_))return Bn(_,l,2)})):Oe(n)?e?c=()=>Bn(n,l,2):c=()=>{if(!(l&&l.isUnmounted))return h&&h(),qt(n,l,3,[g])}:c=jt,e&&r){const _=c;c=()=>qn(_())}let h,g=_=>{h=w.onStop=()=>{Bn(_,l,4)}},y;if(Ii)if(g=jt,e?t&&qt(e,l,3,[c(),u?[]:void 0,g]):c(),i==="sync"){const _=xy();y=_.__watcherHandles||(_.__watcherHandles=[])}else return jt;let b=u?new Array(n.length).fill(es):es;const E=()=>{if(w.active)if(e){const _=w.run();(r||d||(u?_.some((P,H)=>Ti(P,b[H])):Ti(_,b)))&&(h&&h(),qt(e,l,3,[_,b===es?void 0:u&&b[0]===es?[]:b,g]),b=_)}else w.run()};E.allowRecurse=!!e;let C;i==="sync"?C=E:i==="post"?C=()=>kt(E,l&&l.suspense):(E.pre=!0,l&&(E.id=l.uid),C=()=>sl(E));const w=new Qa(c,C);e?t?E():b=w.run():i==="post"?kt(w.run.bind(w),l&&l.suspense):w.run();const R=()=>{w.stop(),l&&l.scope&&za(l.scope.effects,w)};return y&&y.push(R),R}function _g(n,e,t){const r=this.proxy,i=ft(n)?n.includes(".")?dh(r,n):()=>r[n]:n.bind(r,r);let s;Oe(e)?s=e:(s=e.handler,t=e);const o=bt;Tr(this);const a=ch(i,s.bind(r),t);return o?Tr(o):Qn(),a}function dh(n,e){const t=e.split(".");return()=>{let r=n;for(let i=0;i<t.length&&r;i++)r=r[t[i]];return r}}function qn(n,e){if(!rt(n)||n.__v_skip||(e=e||new Set,e.has(n)))return n;if(e.add(n),at(n))qn(n.value,e);else if(De(n))for(let t=0;t<n.length;t++)qn(n[t],e);else if(_u(n)||yr(n))n.forEach(t=>{qn(t,e)});else if(Bu(n))for(const t in n)qn(n[t],e);return n}function ZT(n,e){const t=Tt;if(t===null)return n;const r=to(t)||t.proxy,i=n.dirs||(n.dirs=[]);for(let s=0;s<e.length;s++){let[o,a,l,c=tt]=e[s];o&&(Oe(o)&&(o={mounted:o,updated:o}),o.deep&&qn(a),i.push({dir:o,instance:r,value:a,oldValue:void 0,arg:l,modifiers:c}))}return n}function Un(n,e,t,r){const i=n.dirs,s=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];s&&(a.oldValue=s[o].value);let l=a.dir[r];l&&(Pr(),qt(l,t,8,[n.el,a,n,e]),Br())}}function Mi(n,e){return Oe(n)?(()=>gt({name:n.name},e,{setup:n}))():n}const gi=n=>!!n.type.__asyncLoader,uh=n=>n.type.__isKeepAlive;function Dg(n,e){hh(n,"a",e)}function Pg(n,e){hh(n,"da",e)}function hh(n,e,t=bt){const r=n.__wdc||(n.__wdc=()=>{let i=t;for(;i;){if(i.isDeactivated)return;i=i.parent}return n()});if(Js(e,r,t),t){let i=t.parent;for(;i&&i.parent;)uh(i.parent.vnode)&&Bg(r,e,t,i),i=i.parent}}function Bg(n,e,t,r){const i=Js(e,n,r,!0);fh(()=>{za(r[e],i)},t)}function Js(n,e,t=bt,r=!1){if(t){const i=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...o)=>{if(t.isUnmounted)return;Pr(),Tr(t);const a=qt(e,t,n,o);return Qn(),Br(),a});return r?i.unshift(s):i.push(s),s}}const vn=n=>(e,t=bt)=>(!Ii||n==="sp")&&Js(n,(...r)=>e(...r),t),Og=vn("bm"),Fg=vn("m"),Mg=vn("bu"),Ng=vn("u"),Ug=vn("bum"),fh=vn("um"),$g=vn("sp"),Hg=vn("rtg"),Gg=vn("rtc");function Kg(n,e=bt){Js("ec",n,e)}const zg=Symbol.for("v-ndc");function eC(n,e,t,r){let i;const s=t&&t[r];if(De(n)||ft(n)){i=new Array(n.length);for(let o=0,a=n.length;o<a;o++)i[o]=e(n[o],o,void 0,s&&s[o])}else if(typeof n=="number"){i=new Array(n);for(let o=0;o<n;o++)i[o]=e(o+1,o,void 0,s&&s[o])}else if(rt(n))if(n[Symbol.iterator])i=Array.from(n,(o,a)=>e(o,a,void 0,s&&s[a]));else{const o=Object.keys(n);i=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];i[a]=e(n[c],c,a,s&&s[a])}}else i=[];return t&&(t[r]=i),i}function ko(n,e,t={},r,i){if(Tt.isCE||Tt.parent&&gi(Tt.parent)&&Tt.parent.isCE)return e!=="default"&&(t.name=e),Ze("slot",t,r&&r());let s=n[e];s&&s._c&&(s._d=!1),Yt();const o=s&&ph(s(t)),a=ll(Ot,{key:t.key||o&&o.key||`_${e}`},o||(r?r():[]),o&&n._===1?64:-2);return!i&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),s&&s._c&&(s._d=!0),a}function ph(n){return n.some(e=>_s(e)?!(e.type===Fn||e.type===Ot&&!ph(e.children)):!0)?n:null}const ua=n=>n?Ch(n)?to(n)||n.proxy:ua(n.parent):null,yi=gt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>ua(n.parent),$root:n=>ua(n.root),$emit:n=>n.emit,$options:n=>ol(n),$forceUpdate:n=>n.f||(n.f=()=>sl(n.update)),$nextTick:n=>n.n||(n.n=il.bind(n.proxy)),$watch:n=>_g.bind(n)}),Lo=(n,e)=>n!==tt&&!n.__isScriptSetup&&He(n,e),jg={get({_:n},e){const{ctx:t,setupState:r,data:i,props:s,accessCache:o,type:a,appContext:l}=n;let c;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return r[e];case 2:return i[e];case 4:return t[e];case 3:return s[e]}else{if(Lo(r,e))return o[e]=1,r[e];if(i!==tt&&He(i,e))return o[e]=2,i[e];if((c=n.propsOptions[0])&&He(c,e))return o[e]=3,s[e];if(t!==tt&&He(t,e))return o[e]=4,t[e];ha&&(o[e]=0)}}const d=yi[e];let u,h;if(d)return e==="$attrs"&&Rt(n,"get",e),d(n);if((u=a.__cssModules)&&(u=u[e]))return u;if(t!==tt&&He(t,e))return o[e]=4,t[e];if(h=l.config.globalProperties,He(h,e))return h[e]},set({_:n},e,t){const{data:r,setupState:i,ctx:s}=n;return Lo(i,e)?(i[e]=t,!0):r!==tt&&He(r,e)?(r[e]=t,!0):He(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:r,appContext:i,propsOptions:s}},o){let a;return!!t[o]||n!==tt&&He(n,o)||Lo(e,o)||(a=s[0])&&He(a,o)||He(r,o)||He(yi,o)||He(i.config.globalProperties,o)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:He(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function kc(n){return De(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let ha=!0;function qg(n){const e=ol(n),t=n.proxy,r=n.ctx;ha=!1,e.beforeCreate&&Lc(e.beforeCreate,n,"bc");const{data:i,computed:s,methods:o,watch:a,provide:l,inject:c,created:d,beforeMount:u,mounted:h,beforeUpdate:g,updated:y,activated:b,deactivated:E,beforeDestroy:C,beforeUnmount:w,destroyed:R,unmounted:_,render:P,renderTracked:H,renderTriggered:U,errorCaptured:z,serverPrefetch:Q,expose:F,inheritAttrs:Y,components:Ae,directives:te,filters:Se}=e;if(c&&Vg(c,r,null),o)for(const ye in o){const me=o[ye];Oe(me)&&(r[ye]=me.bind(t))}if(i){const ye=i.call(t,t);rt(ye)&&(n.data=Fi(ye))}if(ha=!0,s)for(const ye in s){const me=s[ye],q=Oe(me)?me.bind(t,t):Oe(me.get)?me.get.bind(t,t):jt,ae=!Oe(me)&&Oe(me.set)?me.set.bind(t):jt,Re=Ft({get:q,set:ae});Object.defineProperty(r,ye,{enumerable:!0,configurable:!0,get:()=>Re.value,set:xe=>Re.value=xe})}if(a)for(const ye in a)mh(a[ye],r,t,ye);if(l){const ye=Oe(l)?l.call(t):l;Reflect.ownKeys(ye).forEach(me=>{fs(me,ye[me])})}d&&Lc(d,n,"c");function ne(ye,me){De(me)?me.forEach(q=>ye(q.bind(t))):me&&ye(me.bind(t))}if(ne(Og,u),ne(Fg,h),ne(Mg,g),ne(Ng,y),ne(Dg,b),ne(Pg,E),ne(Kg,z),ne(Gg,H),ne(Hg,U),ne(Ug,w),ne(fh,_),ne($g,Q),De(F))if(F.length){const ye=n.exposed||(n.exposed={});F.forEach(me=>{Object.defineProperty(ye,me,{get:()=>t[me],set:q=>t[me]=q})})}else n.exposed||(n.exposed={});P&&n.render===jt&&(n.render=P),Y!=null&&(n.inheritAttrs=Y),Ae&&(n.components=Ae),te&&(n.directives=te)}function Vg(n,e,t=jt){De(n)&&(n=fa(n));for(const r in n){const i=n[r];let s;rt(i)?"default"in i?s=Vt(i.from||r,i.default,!0):s=Vt(i.from||r):s=Vt(i),at(s)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[r]=s}}function Lc(n,e,t){qt(De(n)?n.map(r=>r.bind(e.proxy)):n.bind(e.proxy),e,t)}function mh(n,e,t,r){const i=r.includes(".")?dh(t,r):()=>t[r];if(ft(n)){const s=e[n];Oe(s)&&mi(i,s)}else if(Oe(n))mi(i,n.bind(t));else if(rt(n))if(De(n))n.forEach(s=>mh(s,e,t,r));else{const s=Oe(n.handler)?n.handler.bind(t):e[n.handler];Oe(s)&&mi(i,s,n)}}function ol(n){const e=n.type,{mixins:t,extends:r}=e,{mixins:i,optionsCache:s,config:{optionMergeStrategies:o}}=n.appContext,a=s.get(e);let l;return a?l=a:!i.length&&!t&&!r?l=e:(l={},i.length&&i.forEach(c=>Is(l,c,o,!0)),Is(l,e,o)),rt(e)&&s.set(e,l),l}function Is(n,e,t,r=!1){const{mixins:i,extends:s}=e;s&&Is(n,s,t,!0),i&&i.forEach(o=>Is(n,o,t,!0));for(const o in e)if(!(r&&o==="expose")){const a=Wg[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const Wg={data:Rc,props:Ic,emits:Ic,methods:pi,computed:pi,beforeCreate:Ct,created:Ct,beforeMount:Ct,mounted:Ct,beforeUpdate:Ct,updated:Ct,beforeDestroy:Ct,beforeUnmount:Ct,destroyed:Ct,unmounted:Ct,activated:Ct,deactivated:Ct,errorCaptured:Ct,serverPrefetch:Ct,components:pi,directives:pi,watch:Qg,provide:Rc,inject:Yg};function Rc(n,e){return e?n?function(){return gt(Oe(n)?n.call(this,this):n,Oe(e)?e.call(this,this):e)}:e:n}function Yg(n,e){return pi(fa(n),fa(e))}function fa(n){if(De(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Ct(n,e){return n?[...new Set([].concat(n,e))]:e}function pi(n,e){return n?gt(Object.create(null),n,e):e}function Ic(n,e){return n?De(n)&&De(e)?[...new Set([...n,...e])]:gt(Object.create(null),kc(n),kc(e??{})):e}function Qg(n,e){if(!n)return e;if(!e)return n;const t=gt(Object.create(null),n);for(const r in e)t[r]=Ct(n[r],e[r]);return t}function gh(){return{app:null,config:{isNativeTag:Tm,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Xg=0;function Jg(n,e){return function(r,i=null){Oe(r)||(r=gt({},r)),i!=null&&!rt(i)&&(i=null);const s=gh(),o=new Set;let a=!1;const l=s.app={_uid:Xg++,_component:r,_props:i,_container:null,_context:s,_instance:null,version:Sy,get config(){return s.config},set config(c){},use(c,...d){return o.has(c)||(c&&Oe(c.install)?(o.add(c),c.install(l,...d)):Oe(c)&&(o.add(c),c(l,...d))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,d){return d?(s.components[c]=d,l):s.components[c]},directive(c,d){return d?(s.directives[c]=d,l):s.directives[c]},mount(c,d,u){if(!a){const h=Ze(r,i);return h.appContext=s,d&&e?e(h,c):n(h,c,u),a=!0,l._container=c,c.__vue_app__=l,to(h.component)||h.component.proxy}},unmount(){a&&(n(null,l._container),delete l._container.__vue_app__)},provide(c,d){return s.provides[c]=d,l},runWithContext(c){Li=l;try{return c()}finally{Li=null}}};return l}}let Li=null;function fs(n,e){if(bt){let t=bt.provides;const r=bt.parent&&bt.parent.provides;r===t&&(t=bt.provides=Object.create(r)),t[n]=e}}function Vt(n,e,t=!1){const r=bt||Tt;if(r||Li){const i=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Li._context.provides;if(i&&n in i)return i[n];if(arguments.length>1)return t&&Oe(e)?e.call(r&&r.proxy):e}}function Zg(){return!!(bt||Tt||Li)}function ey(n,e,t,r=!1){const i={},s={};ws(s,eo,1),n.propsDefaults=Object.create(null),yh(n,e,i,s);for(const o in n.propsOptions[0])o in i||(i[o]=void 0);t?n.props=r?i:Xu(i):n.type.props?n.props=i:n.props=s,n.attrs=s}function ty(n,e,t,r){const{props:i,attrs:s,vnode:{patchFlag:o}}=n,a=Ge(i),[l]=n.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=n.vnode.dynamicProps;for(let u=0;u<d.length;u++){let h=d[u];if(Qs(n.emitsOptions,h))continue;const g=e[h];if(l)if(He(s,h))g!==s[h]&&(s[h]=g,c=!0);else{const y=Er(h);i[y]=pa(l,a,y,g,n,!1)}else g!==s[h]&&(s[h]=g,c=!0)}}}else{yh(n,e,i,s)&&(c=!0);let d;for(const u in a)(!e||!He(e,u)&&((d=Dr(u))===u||!He(e,d)))&&(l?t&&(t[u]!==void 0||t[d]!==void 0)&&(i[u]=pa(l,a,u,void 0,n,!0)):delete i[u]);if(s!==a)for(const u in s)(!e||!He(e,u))&&(delete s[u],c=!0)}c&&bn(n,"set","$attrs")}function yh(n,e,t,r){const[i,s]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(us(l))continue;const c=e[l];let d;i&&He(i,d=Er(l))?!s||!s.includes(d)?t[d]=c:(a||(a={}))[d]=c:Qs(n.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(s){const l=Ge(t),c=a||tt;for(let d=0;d<s.length;d++){const u=s[d];t[u]=pa(i,l,u,c[u],n,!He(c,u))}}return o}function pa(n,e,t,r,i,s){const o=n[t];if(o!=null){const a=He(o,"default");if(a&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Oe(l)){const{propsDefaults:c}=i;t in c?r=c[t]:(Tr(i),r=c[t]=l.call(null,e),Qn())}else r=l}o[0]&&(s&&!a?r=!1:o[1]&&(r===""||r===Dr(t))&&(r=!0))}return r}function Ah(n,e,t=!1){const r=e.propsCache,i=r.get(n);if(i)return i;const s=n.props,o={},a=[];let l=!1;if(!Oe(n)){const d=u=>{l=!0;const[h,g]=Ah(u,e,!0);gt(o,h),g&&a.push(...g)};!t&&e.mixins.length&&e.mixins.forEach(d),n.extends&&d(n.extends),n.mixins&&n.mixins.forEach(d)}if(!s&&!l)return rt(n)&&r.set(n,gr),gr;if(De(s))for(let d=0;d<s.length;d++){const u=Er(s[d]);_c(u)&&(o[u]=tt)}else if(s)for(const d in s){const u=Er(d);if(_c(u)){const h=s[d],g=o[u]=De(h)||Oe(h)?{type:h}:gt({},h);if(g){const y=Bc(Boolean,g.type),b=Bc(String,g.type);g[0]=y>-1,g[1]=b<0||y<b,(y>-1||He(g,"default"))&&a.push(u)}}}const c=[o,a];return rt(n)&&r.set(n,c),c}function _c(n){return n[0]!=="$"}function Dc(n){const e=n&&n.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:n===null?"null":""}function Pc(n,e){return Dc(n)===Dc(e)}function Bc(n,e){return De(e)?e.findIndex(t=>Pc(t,n)):Oe(e)&&Pc(e,n)?0:-1}const bh=n=>n[0]==="_"||n==="$stable",al=n=>De(n)?n.map(en):[en(n)],ny=(n,e,t)=>{if(e._n)return e;const r=Et((...i)=>al(e(...i)),t);return r._c=!1,r},vh=(n,e,t)=>{const r=n._ctx;for(const i in n){if(bh(i))continue;const s=n[i];if(Oe(s))e[i]=ny(i,s,r);else if(s!=null){const o=al(s);e[i]=()=>o}}},Eh=(n,e)=>{const t=al(e);n.slots.default=()=>t},ry=(n,e)=>{if(n.vnode.shapeFlag&32){const t=e._;t?(n.slots=Ge(e),ws(e,"_",t)):vh(e,n.slots={})}else n.slots={},e&&Eh(n,e);ws(n.slots,eo,1)},iy=(n,e,t)=>{const{vnode:r,slots:i}=n;let s=!0,o=tt;if(r.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:(gt(i,e),!t&&a===1&&delete i._):(s=!e.$stable,vh(e,i)),o=e}else e&&(Eh(n,e),o={default:1});if(s)for(const a in i)!bh(a)&&!(a in o)&&delete i[a]};function ma(n,e,t,r,i=!1){if(De(n)){n.forEach((h,g)=>ma(h,e&&(De(e)?e[g]:e),t,r,i));return}if(gi(r)&&!i)return;const s=r.shapeFlag&4?to(r.component)||r.component.proxy:r.el,o=i?null:s,{i:a,r:l}=n,c=e&&e.r,d=a.refs===tt?a.refs={}:a.refs,u=a.setupState;if(c!=null&&c!==l&&(ft(c)?(d[c]=null,He(u,c)&&(u[c]=null)):at(c)&&(c.value=null)),Oe(l))Bn(l,a,12,[o,d]);else{const h=ft(l),g=at(l);if(h||g){const y=()=>{if(n.f){const b=h?He(u,l)?u[l]:d[l]:l.value;i?De(b)&&za(b,s):De(b)?b.includes(s)||b.push(s):h?(d[l]=[s],He(u,l)&&(u[l]=d[l])):(l.value=[s],n.k&&(d[n.k]=l.value))}else h?(d[l]=o,He(u,l)&&(u[l]=o)):g&&(l.value=o,n.k&&(d[n.k]=o))};o?(y.id=-1,kt(y,t)):y()}}}const kt=Ig;function sy(n){return oy(n)}function oy(n,e){const t=oa();t.__VUE__=!0;const{insert:r,remove:i,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:d,parentNode:u,nextSibling:h,setScopeId:g=jt,insertStaticContent:y}=n,b=(I,D,O,j=null,X=null,ee=null,he=!1,ie=null,le=!!D.dynamicChildren)=>{if(I===D)return;I&&!ai(I,D)&&(j=K(I),xe(I,X,ee,!0),I=null),D.patchFlag===-2&&(le=!1,D.dynamicChildren=null);const{type:Z,ref:Te,shapeFlag:ge}=D;switch(Z){case Zs:E(I,D,O,j);break;case Fn:C(I,D,O,j);break;case ps:I==null&&w(D,O,j,he);break;case Ot:Ae(I,D,O,j,X,ee,he,ie,le);break;default:ge&1?P(I,D,O,j,X,ee,he,ie,le):ge&6?te(I,D,O,j,X,ee,he,ie,le):(ge&64||ge&128)&&Z.process(I,D,O,j,X,ee,he,ie,le,re)}Te!=null&&X&&ma(Te,I&&I.ref,ee,D||I,!D)},E=(I,D,O,j)=>{if(I==null)r(D.el=a(D.children),O,j);else{const X=D.el=I.el;D.children!==I.children&&c(X,D.children)}},C=(I,D,O,j)=>{I==null?r(D.el=l(D.children||""),O,j):D.el=I.el},w=(I,D,O,j)=>{[I.el,I.anchor]=y(I.children,D,O,j,I.el,I.anchor)},R=({el:I,anchor:D},O,j)=>{let X;for(;I&&I!==D;)X=h(I),r(I,O,j),I=X;r(D,O,j)},_=({el:I,anchor:D})=>{let O;for(;I&&I!==D;)O=h(I),i(I),I=O;i(D)},P=(I,D,O,j,X,ee,he,ie,le)=>{he=he||D.type==="svg",I==null?H(D,O,j,X,ee,he,ie,le):Q(I,D,X,ee,he,ie,le)},H=(I,D,O,j,X,ee,he,ie)=>{let le,Z;const{type:Te,props:ge,shapeFlag:Ce,transition:Ie,dirs:Me}=I;if(le=I.el=o(I.type,ee,ge&&ge.is,ge),Ce&8?d(le,I.children):Ce&16&&z(I.children,le,null,j,X,ee&&Te!=="foreignObject",he,ie),Me&&Un(I,null,j,"created"),U(le,I,I.scopeId,he,j),ge){for(const je in ge)je!=="value"&&!us(je)&&s(le,je,null,ge[je],ee,I.children,j,X,Pe);"value"in ge&&s(le,"value",null,ge.value),(Z=ge.onVnodeBeforeMount)&&Xt(Z,j,I)}Me&&Un(I,null,j,"beforeMount");const Ye=(!X||X&&!X.pendingBranch)&&Ie&&!Ie.persisted;Ye&&Ie.beforeEnter(le),r(le,D,O),((Z=ge&&ge.onVnodeMounted)||Ye||Me)&&kt(()=>{Z&&Xt(Z,j,I),Ye&&Ie.enter(le),Me&&Un(I,null,j,"mounted")},X)},U=(I,D,O,j,X)=>{if(O&&g(I,O),j)for(let ee=0;ee<j.length;ee++)g(I,j[ee]);if(X){let ee=X.subTree;if(D===ee){const he=X.vnode;U(I,he,he.scopeId,he.slotScopeIds,X.parent)}}},z=(I,D,O,j,X,ee,he,ie,le=0)=>{for(let Z=le;Z<I.length;Z++){const Te=I[Z]=ie?Rn(I[Z]):en(I[Z]);b(null,Te,D,O,j,X,ee,he,ie)}},Q=(I,D,O,j,X,ee,he)=>{const ie=D.el=I.el;let{patchFlag:le,dynamicChildren:Z,dirs:Te}=D;le|=I.patchFlag&16;const ge=I.props||tt,Ce=D.props||tt;let Ie;O&&$n(O,!1),(Ie=Ce.onVnodeBeforeUpdate)&&Xt(Ie,O,D,I),Te&&Un(D,I,O,"beforeUpdate"),O&&$n(O,!0);const Me=X&&D.type!=="foreignObject";if(Z?F(I.dynamicChildren,Z,ie,O,j,Me,ee):he||me(I,D,ie,null,O,j,Me,ee,!1),le>0){if(le&16)Y(ie,D,ge,Ce,O,j,X);else if(le&2&&ge.class!==Ce.class&&s(ie,"class",null,Ce.class,X),le&4&&s(ie,"style",ge.style,Ce.style,X),le&8){const Ye=D.dynamicProps;for(let je=0;je<Ye.length;je++){const it=Ye[je],It=ge[it],dn=Ce[it];(dn!==It||it==="value")&&s(ie,it,It,dn,X,I.children,O,j,Pe)}}le&1&&I.children!==D.children&&d(ie,D.children)}else!he&&Z==null&&Y(ie,D,ge,Ce,O,j,X);((Ie=Ce.onVnodeUpdated)||Te)&&kt(()=>{Ie&&Xt(Ie,O,D,I),Te&&Un(D,I,O,"updated")},j)},F=(I,D,O,j,X,ee,he)=>{for(let ie=0;ie<D.length;ie++){const le=I[ie],Z=D[ie],Te=le.el&&(le.type===Ot||!ai(le,Z)||le.shapeFlag&70)?u(le.el):O;b(le,Z,Te,null,j,X,ee,he,!0)}},Y=(I,D,O,j,X,ee,he)=>{if(O!==j){if(O!==tt)for(const ie in O)!us(ie)&&!(ie in j)&&s(I,ie,O[ie],null,he,D.children,X,ee,Pe);for(const ie in j){if(us(ie))continue;const le=j[ie],Z=O[ie];le!==Z&&ie!=="value"&&s(I,ie,Z,le,he,D.children,X,ee,Pe)}"value"in j&&s(I,"value",O.value,j.value)}},Ae=(I,D,O,j,X,ee,he,ie,le)=>{const Z=D.el=I?I.el:a(""),Te=D.anchor=I?I.anchor:a("");let{patchFlag:ge,dynamicChildren:Ce,slotScopeIds:Ie}=D;Ie&&(ie=ie?ie.concat(Ie):Ie),I==null?(r(Z,O,j),r(Te,O,j),z(D.children,O,Te,X,ee,he,ie,le)):ge>0&&ge&64&&Ce&&I.dynamicChildren?(F(I.dynamicChildren,Ce,O,X,ee,he,ie),(D.key!=null||X&&D===X.subTree)&&xh(I,D,!0)):me(I,D,O,Te,X,ee,he,ie,le)},te=(I,D,O,j,X,ee,he,ie,le)=>{D.slotScopeIds=ie,I==null?D.shapeFlag&512?X.ctx.activate(D,O,j,he,le):Se(D,O,j,X,ee,he,le):ve(I,D,le)},Se=(I,D,O,j,X,ee,he)=>{const ie=I.component=my(I,j,X);if(uh(I)&&(ie.ctx.renderer=re),gy(ie),ie.asyncDep){if(X&&X.registerDep(ie,ne),!I.el){const le=ie.subTree=Ze(Fn);C(null,le,D,O)}return}ne(ie,I,D,O,X,ee,he)},ve=(I,D,O)=>{const j=D.component=I.component;if(kg(I,D,O))if(j.asyncDep&&!j.asyncResolved){ye(j,D,O);return}else j.next=D,Eg(j.update),j.update();else D.el=I.el,j.vnode=D},ne=(I,D,O,j,X,ee,he)=>{const ie=()=>{if(I.isMounted){let{next:Te,bu:ge,u:Ce,parent:Ie,vnode:Me}=I,Ye=Te,je;$n(I,!1),Te?(Te.el=Me.el,ye(I,Te,he)):Te=Me,ge&&hs(ge),(je=Te.props&&Te.props.onVnodeBeforeUpdate)&&Xt(je,Ie,Te,Me),$n(I,!0);const it=wo(I),It=I.subTree;I.subTree=it,b(It,it,u(It.el),K(It),I,X,ee),Te.el=it.el,Ye===null&&Lg(I,it.el),Ce&&kt(Ce,X),(je=Te.props&&Te.props.onVnodeUpdated)&&kt(()=>Xt(je,Ie,Te,Me),X)}else{let Te;const{el:ge,props:Ce}=D,{bm:Ie,m:Me,parent:Ye}=I,je=gi(D);if($n(I,!1),Ie&&hs(Ie),!je&&(Te=Ce&&Ce.onVnodeBeforeMount)&&Xt(Te,Ye,D),$n(I,!0),ge&&Ke){const it=()=>{I.subTree=wo(I),Ke(ge,I.subTree,I,X,null)};je?D.type.__asyncLoader().then(()=>!I.isUnmounted&&it()):it()}else{const it=I.subTree=wo(I);b(null,it,O,j,I,X,ee),D.el=it.el}if(Me&&kt(Me,X),!je&&(Te=Ce&&Ce.onVnodeMounted)){const it=D;kt(()=>Xt(Te,Ye,it),X)}(D.shapeFlag&256||Ye&&gi(Ye.vnode)&&Ye.vnode.shapeFlag&256)&&I.a&&kt(I.a,X),I.isMounted=!0,D=O=j=null}},le=I.effect=new Qa(ie,()=>sl(Z),I.scope),Z=I.update=()=>le.run();Z.id=I.uid,$n(I,!0),Z()},ye=(I,D,O)=>{D.component=I;const j=I.vnode.props;I.vnode=D,I.next=null,ty(I,D.props,j,O),iy(I,D.children,O),Pr(),Cc(),Br()},me=(I,D,O,j,X,ee,he,ie,le=!1)=>{const Z=I&&I.children,Te=I?I.shapeFlag:0,ge=D.children,{patchFlag:Ce,shapeFlag:Ie}=D;if(Ce>0){if(Ce&128){ae(Z,ge,O,j,X,ee,he,ie,le);return}else if(Ce&256){q(Z,ge,O,j,X,ee,he,ie,le);return}}Ie&8?(Te&16&&Pe(Z,X,ee),ge!==Z&&d(O,ge)):Te&16?Ie&16?ae(Z,ge,O,j,X,ee,he,ie,le):Pe(Z,X,ee,!0):(Te&8&&d(O,""),Ie&16&&z(ge,O,j,X,ee,he,ie,le))},q=(I,D,O,j,X,ee,he,ie,le)=>{I=I||gr,D=D||gr;const Z=I.length,Te=D.length,ge=Math.min(Z,Te);let Ce;for(Ce=0;Ce<ge;Ce++){const Ie=D[Ce]=le?Rn(D[Ce]):en(D[Ce]);b(I[Ce],Ie,O,null,X,ee,he,ie,le)}Z>Te?Pe(I,X,ee,!0,!1,ge):z(D,O,j,X,ee,he,ie,le,ge)},ae=(I,D,O,j,X,ee,he,ie,le)=>{let Z=0;const Te=D.length;let ge=I.length-1,Ce=Te-1;for(;Z<=ge&&Z<=Ce;){const Ie=I[Z],Me=D[Z]=le?Rn(D[Z]):en(D[Z]);if(ai(Ie,Me))b(Ie,Me,O,null,X,ee,he,ie,le);else break;Z++}for(;Z<=ge&&Z<=Ce;){const Ie=I[ge],Me=D[Ce]=le?Rn(D[Ce]):en(D[Ce]);if(ai(Ie,Me))b(Ie,Me,O,null,X,ee,he,ie,le);else break;ge--,Ce--}if(Z>ge){if(Z<=Ce){const Ie=Ce+1,Me=Ie<Te?D[Ie].el:j;for(;Z<=Ce;)b(null,D[Z]=le?Rn(D[Z]):en(D[Z]),O,Me,X,ee,he,ie,le),Z++}}else if(Z>Ce)for(;Z<=ge;)xe(I[Z],X,ee,!0),Z++;else{const Ie=Z,Me=Z,Ye=new Map;for(Z=Me;Z<=Ce;Z++){const vt=D[Z]=le?Rn(D[Z]):en(D[Z]);vt.key!=null&&Ye.set(vt.key,Z)}let je,it=0;const It=Ce-Me+1;let dn=!1,V=0;const Dt=new Array(It);for(Z=0;Z<It;Z++)Dt[Z]=0;for(Z=Ie;Z<=ge;Z++){const vt=I[Z];if(it>=It){xe(vt,X,ee,!0);continue}let Ne;if(vt.key!=null)Ne=Ye.get(vt.key);else for(je=Me;je<=Ce;je++)if(Dt[je-Me]===0&&ai(vt,D[je])){Ne=je;break}Ne===void 0?xe(vt,X,ee,!0):(Dt[Ne-Me]=Z+1,Ne>=V?V=Ne:dn=!0,b(vt,D[Ne],O,null,X,ee,he,ie,le),it++)}const Mr=dn?ay(Dt):gr;for(je=Mr.length-1,Z=It-1;Z>=0;Z--){const vt=Me+Z,Ne=D[vt],$i=vt+1<Te?D[vt+1].el:j;Dt[Z]===0?b(null,Ne,O,$i,X,ee,he,ie,le):dn&&(je<0||Z!==Mr[je]?Re(Ne,O,$i,2):je--)}}},Re=(I,D,O,j,X=null)=>{const{el:ee,type:he,transition:ie,children:le,shapeFlag:Z}=I;if(Z&6){Re(I.component.subTree,D,O,j);return}if(Z&128){I.suspense.move(D,O,j);return}if(Z&64){he.move(I,D,O,re);return}if(he===Ot){r(ee,D,O);for(let ge=0;ge<le.length;ge++)Re(le[ge],D,O,j);r(I.anchor,D,O);return}if(he===ps){R(I,D,O);return}if(j!==2&&Z&1&&ie)if(j===0)ie.beforeEnter(ee),r(ee,D,O),kt(()=>ie.enter(ee),X);else{const{leave:ge,delayLeave:Ce,afterLeave:Ie}=ie,Me=()=>r(ee,D,O),Ye=()=>{ge(ee,()=>{Me(),Ie&&Ie()})};Ce?Ce(ee,Me,Ye):Ye()}else r(ee,D,O)},xe=(I,D,O,j=!1,X=!1)=>{const{type:ee,props:he,ref:ie,children:le,dynamicChildren:Z,shapeFlag:Te,patchFlag:ge,dirs:Ce}=I;if(ie!=null&&ma(ie,null,O,I,!0),Te&256){D.ctx.deactivate(I);return}const Ie=Te&1&&Ce,Me=!gi(I);let Ye;if(Me&&(Ye=he&&he.onVnodeBeforeUnmount)&&Xt(Ye,D,I),Te&6)Je(I.component,O,j);else{if(Te&128){I.suspense.unmount(O,j);return}Ie&&Un(I,null,D,"beforeUnmount"),Te&64?I.type.remove(I,D,O,X,re,j):Z&&(ee!==Ot||ge>0&&ge&64)?Pe(Z,D,O,!1,!0):(ee===Ot&&ge&384||!X&&Te&16)&&Pe(le,D,O),j&&Fe(I)}(Me&&(Ye=he&&he.onVnodeUnmounted)||Ie)&&kt(()=>{Ye&&Xt(Ye,D,I),Ie&&Un(I,null,D,"unmounted")},O)},Fe=I=>{const{type:D,el:O,anchor:j,transition:X}=I;if(D===Ot){ze(O,j);return}if(D===ps){_(I);return}const ee=()=>{i(O),X&&!X.persisted&&X.afterLeave&&X.afterLeave()};if(I.shapeFlag&1&&X&&!X.persisted){const{leave:he,delayLeave:ie}=X,le=()=>he(O,ee);ie?ie(I.el,ee,le):le()}else ee()},ze=(I,D)=>{let O;for(;I!==D;)O=h(I),i(I),I=O;i(D)},Je=(I,D,O)=>{const{bum:j,scope:X,update:ee,subTree:he,um:ie}=I;j&&hs(j),X.stop(),ee&&(ee.active=!1,xe(he,I,D,O)),ie&&kt(ie,D),kt(()=>{I.isUnmounted=!0},D),D&&D.pendingBranch&&!D.isUnmounted&&I.asyncDep&&!I.asyncResolved&&I.suspenseId===D.pendingId&&(D.deps--,D.deps===0&&D.resolve())},Pe=(I,D,O,j=!1,X=!1,ee=0)=>{for(let he=ee;he<I.length;he++)xe(I[he],D,O,j,X)},K=I=>I.shapeFlag&6?K(I.component.subTree):I.shapeFlag&128?I.suspense.next():h(I.anchor||I.el),ce=(I,D,O)=>{I==null?D._vnode&&xe(D._vnode,null,null,!0):b(D._vnode||null,I,D,null,null,null,O),Cc(),oh(),D._vnode=I},re={p:b,um:xe,m:Re,r:Fe,mt:Se,mc:z,pc:me,pbc:F,n:K,o:n};let Ee,Ke;return e&&([Ee,Ke]=e(re)),{render:ce,hydrate:Ee,createApp:Jg(ce,Ee)}}function $n({effect:n,update:e},t){n.allowRecurse=e.allowRecurse=t}function xh(n,e,t=!1){const r=n.children,i=e.children;if(De(r)&&De(i))for(let s=0;s<r.length;s++){const o=r[s];let a=i[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[s]=Rn(i[s]),a.el=o.el),t||xh(o,a)),a.type===Zs&&(a.el=o.el)}}function ay(n){const e=n.slice(),t=[0];let r,i,s,o,a;const l=n.length;for(r=0;r<l;r++){const c=n[r];if(c!==0){if(i=t[t.length-1],n[i]<c){e[r]=i,t.push(r);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,n[t[a]]<c?s=a+1:o=a;c<n[t[s]]&&(s>0&&(e[r]=t[s-1]),t[s]=r)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}const ly=n=>n.__isTeleport,Ot=Symbol.for("v-fgt"),Zs=Symbol.for("v-txt"),Fn=Symbol.for("v-cmt"),ps=Symbol.for("v-stc"),Ai=[];let zt=null;function Yt(n=!1){Ai.push(zt=n?null:[])}function cy(){Ai.pop(),zt=Ai[Ai.length-1]||null}let Ri=1;function Oc(n){Ri+=n}function Sh(n){return n.dynamicChildren=Ri>0?zt||gr:null,cy(),Ri>0&&zt&&zt.push(n),n}function Mn(n,e,t,r,i,s){return Sh(Xe(n,e,t,r,i,s,!0))}function ll(n,e,t,r,i){return Sh(Ze(n,e,t,r,i,!0))}function _s(n){return n?n.__v_isVNode===!0:!1}function ai(n,e){return n.type===e.type&&n.key===e.key}const eo="__vInternal",Th=({key:n})=>n??null,ms=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?ft(n)||at(n)||Oe(n)?{i:Tt,r:n,k:e,f:!!t}:n:null);function Xe(n,e=null,t=null,r=0,i=null,s=n===Ot?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Th(e),ref:e&&ms(e),scopeId:Xs,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Tt};return a?(cl(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=ft(t)?8:16),Ri>0&&!o&&zt&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&zt.push(l),l}const Ze=dy;function dy(n,e=null,t=null,r=0,i=null,s=!1){if((!n||n===zg)&&(n=Fn),_s(n)){const a=Sr(n,e,!0);return t&&cl(a,t),Ri>0&&!s&&zt&&(a.shapeFlag&6?zt[zt.indexOf(n)]=a:zt.push(a)),a.patchFlag|=-2,a}if(vy(n)&&(n=n.__vccOpts),e){e=uy(e);let{class:a,style:l}=e;a&&!ft(a)&&(e.class=Wa(a)),rt(l)&&(Zu(l)&&!De(l)&&(l=gt({},l)),e.style=Va(l))}const o=ft(n)?1:Rg(n)?128:ly(n)?64:rt(n)?4:Oe(n)?2:0;return Xe(n,e,t,r,i,o,s,!0)}function uy(n){return n?Zu(n)||eo in n?gt({},n):n:null}function Sr(n,e,t=!1){const{props:r,ref:i,patchFlag:s,children:o}=n,a=e?hy(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:n.type,props:a,key:a&&Th(a),ref:e&&e.ref?t&&i?De(i)?i.concat(ms(e)):[i,ms(e)]:ms(e):i,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:o,target:n.target,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Ot?s===-1?16:s|16:s,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:n.transition,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Sr(n.ssContent),ssFallback:n.ssFallback&&Sr(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce}}function qe(n=" ",e=0){return Ze(Zs,null,n,e)}function tC(n,e){const t=Ze(ps,null,n);return t.staticCount=e,t}function nC(n="",e=!1){return e?(Yt(),ll(Fn,null,n)):Ze(Fn,null,n)}function en(n){return n==null||typeof n=="boolean"?Ze(Fn):De(n)?Ze(Ot,null,n.slice()):typeof n=="object"?Rn(n):Ze(Zs,null,String(n))}function Rn(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Sr(n)}function cl(n,e){let t=0;const{shapeFlag:r}=n;if(e==null)e=null;else if(De(e))t=16;else if(typeof e=="object")if(r&65){const i=e.default;i&&(i._c&&(i._d=!1),cl(n,i()),i._c&&(i._d=!0));return}else{t=32;const i=e._;!i&&!(eo in e)?e._ctx=Tt:i===3&&Tt&&(Tt.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else Oe(e)?(e={default:e,_ctx:Tt},t=32):(e=String(e),r&64?(t=16,e=[qe(e)]):t=8);n.children=e,n.shapeFlag|=t}function hy(...n){const e={};for(let t=0;t<n.length;t++){const r=n[t];for(const i in r)if(i==="class")e.class!==r.class&&(e.class=Wa([e.class,r.class]));else if(i==="style")e.style=Va([e.style,r.style]);else if(zs(i)){const s=e[i],o=r[i];o&&s!==o&&!(De(s)&&s.includes(o))&&(e[i]=s?[].concat(s,o):o)}else i!==""&&(e[i]=r[i])}return e}function Xt(n,e,t,r=null){qt(n,e,7,[t,r])}const fy=gh();let py=0;function my(n,e,t){const r=n.type,i=(e?e.appContext:n.appContext)||fy,s={uid:py++,vnode:n,type:r,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new Nu(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ah(r,i),emitsOptions:lh(r,i),emit:null,emitted:null,propsDefaults:tt,inheritAttrs:r.inheritAttrs,ctx:tt,data:tt,props:tt,attrs:tt,slots:tt,refs:tt,setupState:tt,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=Tg.bind(null,s),n.ce&&n.ce(s),s}let bt=null,dl,ir,Fc="__VUE_INSTANCE_SETTERS__";(ir=oa()[Fc])||(ir=oa()[Fc]=[]),ir.push(n=>bt=n),dl=n=>{ir.length>1?ir.forEach(e=>e(n)):ir[0](n)};const Tr=n=>{dl(n),n.scope.on()},Qn=()=>{bt&&bt.scope.off(),dl(null)};function Ch(n){return n.vnode.shapeFlag&4}let Ii=!1;function gy(n,e=!1){Ii=e;const{props:t,children:r}=n.vnode,i=Ch(n);ey(n,t,i,e),ry(n,r);const s=i?yy(n,e):void 0;return Ii=!1,s}function yy(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=Ws(new Proxy(n.ctx,jg));const{setup:r}=t;if(r){const i=n.setupContext=r.length>1?by(n):null;Tr(n),Pr();const s=Bn(r,n,0,[n.props,i]);if(Br(),Qn(),Du(s)){if(s.then(Qn,Qn),e)return s.then(o=>{Mc(n,o,e)}).catch(o=>{Ys(o,n,0)});n.asyncDep=s}else Mc(n,s,e)}else wh(n,e)}function Mc(n,e,t){Oe(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:rt(e)&&(n.setupState=rh(e)),wh(n,t)}let Nc;function wh(n,e,t){const r=n.type;if(!n.render){if(!e&&Nc&&!r.render){const i=r.template||ol(n).template;if(i){const{isCustomElement:s,compilerOptions:o}=n.appContext.config,{delimiters:a,compilerOptions:l}=r,c=gt(gt({isCustomElement:s,delimiters:a},o),l);r.render=Nc(i,c)}}n.render=r.render||jt}Tr(n),Pr(),qg(n),Br(),Qn()}function Ay(n){return n.attrsProxy||(n.attrsProxy=new Proxy(n.attrs,{get(e,t){return Rt(n,"get","$attrs"),e[t]}}))}function by(n){const e=t=>{n.exposed=t||{}};return{get attrs(){return Ay(n)},slots:n.slots,emit:n.emit,expose:e}}function to(n){if(n.exposed)return n.exposeProxy||(n.exposeProxy=new Proxy(rh(Ws(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in yi)return yi[t](n)},has(e,t){return t in e||t in yi}}))}function vy(n){return Oe(n)&&"__vccOpts"in n}const Ft=(n,e)=>Ag(n,e,Ii);function kh(n,e,t){const r=arguments.length;return r===2?rt(e)&&!De(e)?_s(e)?Ze(n,null,[e]):Ze(n,e):Ze(n,null,e):(r>3?t=Array.prototype.slice.call(arguments,2):r===3&&_s(t)&&(t=[t]),Ze(n,e,t))}const Ey=Symbol.for("v-scx"),xy=()=>Vt(Ey),Sy="3.3.4",Ty="http://www.w3.org/2000/svg",jn=typeof document<"u"?document:null,Uc=jn&&jn.createElement("template"),Cy={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,r)=>{const i=e?jn.createElementNS(Ty,n):jn.createElement(n,t?{is:t}:void 0);return n==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:n=>jn.createTextNode(n),createComment:n=>jn.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>jn.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,r,i,s){const o=t?t.previousSibling:e.lastChild;if(i&&(i===s||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),t),!(i===s||!(i=i.nextSibling)););else{Uc.innerHTML=r?`<svg>${n}</svg>`:n;const a=Uc.content;if(r){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}};function wy(n,e,t){const r=n._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}function ky(n,e,t){const r=n.style,i=ft(t);if(t&&!i){if(e&&!ft(e))for(const s in e)t[s]==null&&ga(r,s,"");for(const s in t)ga(r,s,t[s])}else{const s=r.display;i?e!==t&&(r.cssText=t):e&&n.removeAttribute("style"),"_vod"in n&&(r.display=s)}}const $c=/\s*!important$/;function ga(n,e,t){if(De(t))t.forEach(r=>ga(n,e,r));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const r=Ly(n,e);$c.test(t)?n.setProperty(Dr(r),t.replace($c,""),"important"):n[r]=t}}const Hc=["Webkit","Moz","ms"],Ro={};function Ly(n,e){const t=Ro[e];if(t)return t;let r=Er(e);if(r!=="filter"&&r in n)return Ro[e]=r;r=Ou(r);for(let i=0;i<Hc.length;i++){const s=Hc[i]+r;if(s in n)return Ro[e]=s}return e}const Gc="http://www.w3.org/1999/xlink";function Ry(n,e,t,r,i){if(r&&e.startsWith("xlink:"))t==null?n.removeAttributeNS(Gc,e.slice(6,e.length)):n.setAttributeNS(Gc,e,t);else{const s=Om(e);t==null||s&&!Fu(t)?n.removeAttribute(e):n.setAttribute(e,s?"":t)}}function Iy(n,e,t,r,i,s,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,i,s),n[e]=t??"";return}const a=n.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){n._value=t;const c=a==="OPTION"?n.getAttribute("value"):n.value,d=t??"";c!==d&&(n.value=d),t==null&&n.removeAttribute(e);return}let l=!1;if(t===""||t==null){const c=typeof n[e];c==="boolean"?t=Fu(t):t==null&&c==="string"?(t="",l=!0):c==="number"&&(t=0,l=!0)}try{n[e]=t}catch{}l&&n.removeAttribute(e)}function hr(n,e,t,r){n.addEventListener(e,t,r)}function _y(n,e,t,r){n.removeEventListener(e,t,r)}function Dy(n,e,t,r,i=null){const s=n._vei||(n._vei={}),o=s[e];if(r&&o)o.value=r;else{const[a,l]=Py(e);if(r){const c=s[e]=Fy(r,i);hr(n,a,c,l)}else o&&(_y(n,a,o,l),s[e]=void 0)}}const Kc=/(?:Once|Passive|Capture)$/;function Py(n){let e;if(Kc.test(n)){e={};let r;for(;r=n.match(Kc);)n=n.slice(0,n.length-r[0].length),e[r[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Dr(n.slice(2)),e]}let Io=0;const By=Promise.resolve(),Oy=()=>Io||(By.then(()=>Io=0),Io=Date.now());function Fy(n,e){const t=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=t.attached)return;qt(My(r,t.value),e,5,[r])};return t.value=n,t.attached=Oy(),t}function My(n,e){if(De(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(r=>i=>!i._stopped&&r&&r(i))}else return e}const zc=/^on[a-z]/,Ny=(n,e,t,r,i=!1,s,o,a,l)=>{e==="class"?wy(n,r,i):e==="style"?ky(n,t,r):zs(e)?Ka(e)||Dy(n,e,t,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Uy(n,e,r,i))?Iy(n,e,r,s,o,a,l):(e==="true-value"?n._trueValue=r:e==="false-value"&&(n._falseValue=r),Ry(n,e,r,i))};function Uy(n,e,t,r){return r?!!(e==="innerHTML"||e==="textContent"||e in n&&zc.test(e)&&Oe(t)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA"||zc.test(e)&&ft(t)?!1:e in n}const jc=n=>{const e=n.props["onUpdate:modelValue"]||!1;return De(e)?t=>hs(e,t):e};function $y(n){n.target.composing=!0}function qc(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const rC={created(n,{modifiers:{lazy:e,trim:t,number:r}},i){n._assign=jc(i);const s=r||i.props&&i.props.type==="number";hr(n,e?"change":"input",o=>{if(o.target.composing)return;let a=n.value;t&&(a=a.trim()),s&&(a=sa(a)),n._assign(a)}),t&&hr(n,"change",()=>{n.value=n.value.trim()}),e||(hr(n,"compositionstart",$y),hr(n,"compositionend",qc),hr(n,"change",qc))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,modifiers:{lazy:t,trim:r,number:i}},s){if(n._assign=jc(s),n.composing||document.activeElement===n&&n.type!=="range"&&(t||r&&n.value.trim()===e||(i||n.type==="number")&&sa(n.value)===e))return;const o=e??"";n.value!==o&&(n.value=o)}},Hy=gt({patchProp:Ny},Cy);let Vc;function Gy(){return Vc||(Vc=sy(Hy))}const Ky=(...n)=>{const e=Gy().createApp(...n),{mount:t}=e;return e.mount=r=>{const i=zy(r);if(!i)return;const s=e._component;!Oe(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.innerHTML="";const o=t(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function zy(n){return ft(n)?document.querySelector(n):n}var jy=!1;/*!
 * pinia v2.1.6
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let Lh;const no=n=>Lh=n,Rh=Symbol();function ya(n){return n&&typeof n=="object"&&Object.prototype.toString.call(n)==="[object Object]"&&typeof n.toJSON!="function"}var bi;(function(n){n.direct="direct",n.patchObject="patch object",n.patchFunction="patch function"})(bi||(bi={}));function qy(){const n=Uu(!0),e=n.run(()=>nl({}));let t=[],r=[];const i=Ws({install(s){no(i),i._a=s,s.provide(Rh,i),s.config.globalProperties.$pinia=i,r.forEach(o=>t.push(o)),r=[]},use(s){return!this._a&&!jy?r.push(s):t.push(s),this},_p:t,_a:null,_e:n,_s:new Map,state:e});return i}const Ih=()=>{};function Wc(n,e,t,r=Ih){n.push(e);const i=()=>{const s=n.indexOf(e);s>-1&&(n.splice(s,1),r())};return!t&&$u()&&Mm(i),i}function sr(n,...e){n.slice().forEach(t=>{t(...e)})}const Vy=n=>n();function Aa(n,e){n instanceof Map&&e instanceof Map&&e.forEach((t,r)=>n.set(r,t)),n instanceof Set&&e instanceof Set&&e.forEach(n.add,n);for(const t in e){if(!e.hasOwnProperty(t))continue;const r=e[t],i=n[t];ya(i)&&ya(r)&&n.hasOwnProperty(t)&&!at(r)&&!Pn(r)?n[t]=Aa(i,r):n[t]=r}return n}const Wy=Symbol();function Yy(n){return!ya(n)||!n.hasOwnProperty(Wy)}const{assign:Ln}=Object;function Qy(n){return!!(at(n)&&n.effect)}function Xy(n,e,t,r){const{state:i,actions:s,getters:o}=e,a=t.state.value[n];let l;function c(){a||(t.state.value[n]=i?i():{});const d=pg(t.state.value[n]);return Ln(d,s,Object.keys(o||{}).reduce((u,h)=>(u[h]=Ws(Ft(()=>{no(t);const g=t._s.get(n);return o[h].call(g,g)})),u),{}))}return l=_h(n,c,e,t,r,!0),l}function _h(n,e,t={},r,i,s){let o;const a=Ln({actions:{}},t),l={deep:!0};let c,d,u=[],h=[],g;const y=r.state.value[n];!s&&!y&&(r.state.value[n]={}),nl({});let b;function E(z){let Q;c=d=!1,typeof z=="function"?(z(r.state.value[n]),Q={type:bi.patchFunction,storeId:n,events:g}):(Aa(r.state.value[n],z),Q={type:bi.patchObject,payload:z,storeId:n,events:g});const F=b=Symbol();il().then(()=>{b===F&&(c=!0)}),d=!0,sr(u,Q,r.state.value[n])}const C=s?function(){const{state:Q}=t,F=Q?Q():{};this.$patch(Y=>{Ln(Y,F)})}:Ih;function w(){o.stop(),u=[],h=[],r._s.delete(n)}function R(z,Q){return function(){no(r);const F=Array.from(arguments),Y=[],Ae=[];function te(ne){Y.push(ne)}function Se(ne){Ae.push(ne)}sr(h,{args:F,name:z,store:P,after:te,onError:Se});let ve;try{ve=Q.apply(this&&this.$id===n?this:P,F)}catch(ne){throw sr(Ae,ne),ne}return ve instanceof Promise?ve.then(ne=>(sr(Y,ne),ne)).catch(ne=>(sr(Ae,ne),Promise.reject(ne))):(sr(Y,ve),ve)}}const _={_p:r,$id:n,$onAction:Wc.bind(null,h),$patch:E,$reset:C,$subscribe(z,Q={}){const F=Wc(u,z,Q.detached,()=>Y()),Y=o.run(()=>mi(()=>r.state.value[n],Ae=>{(Q.flush==="sync"?d:c)&&z({storeId:n,type:bi.direct,events:g},Ae)},Ln({},l,Q)));return F},$dispose:w},P=Fi(_);r._s.set(n,P);const H=r._a&&r._a.runWithContext||Vy,U=r._e.run(()=>(o=Uu(),H(()=>o.run(e))));for(const z in U){const Q=U[z];if(at(Q)&&!Qy(Q)||Pn(Q))s||(y&&Yy(Q)&&(at(Q)?Q.value=y[z]:Aa(Q,y[z])),r.state.value[n][z]=Q);else if(typeof Q=="function"){const F=R(z,Q);U[z]=F,a.actions[z]=Q}}return Ln(P,U),Ln(Ge(P),U),Object.defineProperty(P,"$state",{get:()=>r.state.value[n],set:z=>{E(Q=>{Ln(Q,z)})}}),r._p.forEach(z=>{Ln(P,o.run(()=>z({store:P,app:r._a,pinia:r,options:a})))}),y&&s&&t.hydrate&&t.hydrate(P.$state,y),c=!0,d=!0,P}function Dh(n,e,t){let r,i;const s=typeof e=="function";typeof n=="string"?(r=n,i=s?t:e):(i=n,r=n.id);function o(a,l){const c=Zg();return a=a||(c?Vt(Rh,null):null),a&&no(a),a=Lh,a._s.has(r)||(s?_h(r,e,i,a):Xy(r,i,a)),a._s.get(r)}return o.$id=r,o}function Jy(n){return typeof n=="object"&&n!==null}function Yc(n,e){return n=Jy(n)?n:Object.create(null),new Proxy(n,{get(t,r,i){return r==="key"?Reflect.get(t,r,i):Reflect.get(t,r,i)||Reflect.get(e,r,i)}})}function Zy(n,e){return e.reduce((t,r)=>t==null?void 0:t[r],n)}function eA(n,e,t){return e.slice(0,-1).reduce((r,i)=>/^(__proto__)$/.test(i)?{}:r[i]=r[i]||{},n)[e[e.length-1]]=t,n}function tA(n,e){return e.reduce((t,r)=>{const i=r.split(".");return eA(t,i,Zy(n,i))},{})}function nA(n,e){return t=>{var r;try{const{storage:i=localStorage,beforeRestore:s=void 0,afterRestore:o=void 0,serializer:a={serialize:JSON.stringify,deserialize:JSON.parse},key:l=e.$id,paths:c=null,debug:d=!1}=t;return{storage:i,beforeRestore:s,afterRestore:o,serializer:a,key:((r=n.key)!=null?r:u=>u)(typeof l=="string"?l:l(e.$id)),paths:c,debug:d}}catch(i){return t.debug&&console.error("[pinia-plugin-persistedstate]",i),null}}}function Qc(n,{storage:e,serializer:t,key:r,debug:i}){try{const s=e==null?void 0:e.getItem(r);s&&n.$patch(t==null?void 0:t.deserialize(s))}catch(s){i&&console.error("[pinia-plugin-persistedstate]",s)}}function Xc(n,{storage:e,serializer:t,key:r,paths:i,debug:s}){try{const o=Array.isArray(i)?tA(n,i):n;e.setItem(r,t.serialize(o))}catch(o){s&&console.error("[pinia-plugin-persistedstate]",o)}}function rA(n={}){return e=>{const{auto:t=!1}=n,{options:{persist:r=t},store:i,pinia:s}=e;if(!r)return;if(!(i.$id in s.state.value)){const a=s._s.get(i.$id.replace("__hot:",""));a&&Promise.resolve().then(()=>a.$persist());return}const o=(Array.isArray(r)?r.map(a=>Yc(a,n)):[Yc(r,n)]).map(nA(n,i)).filter(Boolean);i.$persist=()=>{o.forEach(a=>{Xc(i.$state,a)})},i.$hydrate=({runHooks:a=!0}={})=>{o.forEach(l=>{const{beforeRestore:c,afterRestore:d}=l;a&&(c==null||c(e)),Qc(i,l),a&&(d==null||d(e))})},o.forEach(a=>{const{beforeRestore:l,afterRestore:c}=a;l==null||l(e),Qc(i,a),c==null||c(e),i.$subscribe((d,u)=>{Xc(u,a)},{detached:!0})})}}var iA=rA();/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const fr=typeof window<"u";function sA(n){return n.__esModule||n[Symbol.toStringTag]==="Module"}const Ve=Object.assign;function _o(n,e){const t={};for(const r in e){const i=e[r];t[r]=Wt(i)?i.map(n):n(i)}return t}const vi=()=>{},Wt=Array.isArray,oA=/\/$/,aA=n=>n.replace(oA,"");function Do(n,e,t="/"){let r,i={},s="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(r=e.slice(0,l),s=e.slice(l+1,a>-1?a:e.length),i=n(s)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=uA(r??e,t),{fullPath:r+(s&&"?")+s+o,path:r,query:i,hash:o}}function lA(n,e){const t=e.query?n(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function Jc(n,e){return!e||!n.toLowerCase().startsWith(e.toLowerCase())?n:n.slice(e.length)||"/"}function cA(n,e,t){const r=e.matched.length-1,i=t.matched.length-1;return r>-1&&r===i&&Cr(e.matched[r],t.matched[i])&&Ph(e.params,t.params)&&n(e.query)===n(t.query)&&e.hash===t.hash}function Cr(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function Ph(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(const t in n)if(!dA(n[t],e[t]))return!1;return!0}function dA(n,e){return Wt(n)?Zc(n,e):Wt(e)?Zc(e,n):n===e}function Zc(n,e){return Wt(e)?n.length===e.length&&n.every((t,r)=>t===e[r]):n.length===1&&n[0]===e}function uA(n,e){if(n.startsWith("/"))return n;if(!n)return e;const t=e.split("/"),r=n.split("/"),i=r[r.length-1];(i===".."||i===".")&&r.push("");let s=t.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")s>1&&s--;else break;return t.slice(0,s).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var _i;(function(n){n.pop="pop",n.push="push"})(_i||(_i={}));var Ei;(function(n){n.back="back",n.forward="forward",n.unknown=""})(Ei||(Ei={}));function hA(n){if(!n)if(fr){const e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),aA(n)}const fA=/^[^#]+#/;function pA(n,e){return n.replace(fA,"#")+e}function mA(n,e){const t=document.documentElement.getBoundingClientRect(),r=n.getBoundingClientRect();return{behavior:e.behavior,left:r.left-t.left-(e.left||0),top:r.top-t.top-(e.top||0)}}const ro=()=>({left:window.pageXOffset,top:window.pageYOffset});function gA(n){let e;if("el"in n){const t=n.el,r=typeof t=="string"&&t.startsWith("#"),i=typeof t=="string"?r?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!i)return;e=mA(i,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function ed(n,e){return(history.state?history.state.position-e:-1)+n}const ba=new Map;function yA(n,e){ba.set(n,e)}function AA(n){const e=ba.get(n);return ba.delete(n),e}let bA=()=>location.protocol+"//"+location.host;function Bh(n,e){const{pathname:t,search:r,hash:i}=e,s=n.indexOf("#");if(s>-1){let a=i.includes(n.slice(s))?n.slice(s).length:1,l=i.slice(a);return l[0]!=="/"&&(l="/"+l),Jc(l,"")}return Jc(t,n)+r+i}function vA(n,e,t,r){let i=[],s=[],o=null;const a=({state:h})=>{const g=Bh(n,location),y=t.value,b=e.value;let E=0;if(h){if(t.value=g,e.value=h,o&&o===y){o=null;return}E=b?h.position-b.position:0}else r(g);i.forEach(C=>{C(t.value,y,{delta:E,type:_i.pop,direction:E?E>0?Ei.forward:Ei.back:Ei.unknown})})};function l(){o=t.value}function c(h){i.push(h);const g=()=>{const y=i.indexOf(h);y>-1&&i.splice(y,1)};return s.push(g),g}function d(){const{history:h}=window;h.state&&h.replaceState(Ve({},h.state,{scroll:ro()}),"")}function u(){for(const h of s)h();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",d,{passive:!0}),{pauseListeners:l,listen:c,destroy:u}}function td(n,e,t,r=!1,i=!1){return{back:n,current:e,forward:t,replaced:r,position:window.history.length,scroll:i?ro():null}}function EA(n){const{history:e,location:t}=window,r={value:Bh(n,t)},i={value:e.state};i.value||s(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,c,d){const u=n.indexOf("#"),h=u>-1?(t.host&&document.querySelector("base")?n:n.slice(u))+l:bA()+n+l;try{e[d?"replaceState":"pushState"](c,"",h),i.value=c}catch(g){console.error(g),t[d?"replace":"assign"](h)}}function o(l,c){const d=Ve({},e.state,td(i.value.back,l,i.value.forward,!0),c,{position:i.value.position});s(l,d,!0),r.value=l}function a(l,c){const d=Ve({},i.value,e.state,{forward:l,scroll:ro()});s(d.current,d,!0);const u=Ve({},td(r.value,l,null),{position:d.position+1},c);s(l,u,!1),r.value=l}return{location:r,state:i,push:a,replace:o}}function xA(n){n=hA(n);const e=EA(n),t=vA(n,e.state,e.location,e.replace);function r(s,o=!0){o||t.pauseListeners(),history.go(s)}const i=Ve({location:"",base:n,go:r,createHref:pA.bind(null,n)},e,t);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function SA(n){return typeof n=="string"||n&&typeof n=="object"}function Oh(n){return typeof n=="string"||typeof n=="symbol"}const Cn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Fh=Symbol("");var nd;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(nd||(nd={}));function wr(n,e){return Ve(new Error,{type:n,[Fh]:!0},e)}function hn(n,e){return n instanceof Error&&Fh in n&&(e==null||!!(n.type&e))}const rd="[^/]+?",TA={sensitive:!1,strict:!1,start:!0,end:!0},CA=/[.+*?^${}()[\]/\\]/g;function wA(n,e){const t=Ve({},TA,e),r=[];let i=t.start?"^":"";const s=[];for(const c of n){const d=c.length?[]:[90];t.strict&&!c.length&&(i+="/");for(let u=0;u<c.length;u++){const h=c[u];let g=40+(t.sensitive?.25:0);if(h.type===0)u||(i+="/"),i+=h.value.replace(CA,"\\$&"),g+=40;else if(h.type===1){const{value:y,repeatable:b,optional:E,regexp:C}=h;s.push({name:y,repeatable:b,optional:E});const w=C||rd;if(w!==rd){g+=10;try{new RegExp(`(${w})`)}catch(_){throw new Error(`Invalid custom RegExp for param "${y}" (${w}): `+_.message)}}let R=b?`((?:${w})(?:/(?:${w}))*)`:`(${w})`;u||(R=E&&c.length<2?`(?:/${R})`:"/"+R),E&&(R+="?"),i+=R,g+=20,E&&(g+=-8),b&&(g+=-20),w===".*"&&(g+=-50)}d.push(g)}r.push(d)}if(t.strict&&t.end){const c=r.length-1;r[c][r[c].length-1]+=.7000000000000001}t.strict||(i+="/?"),t.end?i+="$":t.strict&&(i+="(?:/|$)");const o=new RegExp(i,t.sensitive?"":"i");function a(c){const d=c.match(o),u={};if(!d)return null;for(let h=1;h<d.length;h++){const g=d[h]||"",y=s[h-1];u[y.name]=g&&y.repeatable?g.split("/"):g}return u}function l(c){let d="",u=!1;for(const h of n){(!u||!d.endsWith("/"))&&(d+="/"),u=!1;for(const g of h)if(g.type===0)d+=g.value;else if(g.type===1){const{value:y,repeatable:b,optional:E}=g,C=y in c?c[y]:"";if(Wt(C)&&!b)throw new Error(`Provided param "${y}" is an array but it is not repeatable (* or + modifiers)`);const w=Wt(C)?C.join("/"):C;if(!w)if(E)h.length<2&&(d.endsWith("/")?d=d.slice(0,-1):u=!0);else throw new Error(`Missing required param "${y}"`);d+=w}}return d||"/"}return{re:o,score:r,keys:s,parse:a,stringify:l}}function kA(n,e){let t=0;for(;t<n.length&&t<e.length;){const r=e[t]-n[t];if(r)return r;t++}return n.length<e.length?n.length===1&&n[0]===40+40?-1:1:n.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function LA(n,e){let t=0;const r=n.score,i=e.score;for(;t<r.length&&t<i.length;){const s=kA(r[t],i[t]);if(s)return s;t++}if(Math.abs(i.length-r.length)===1){if(id(r))return 1;if(id(i))return-1}return i.length-r.length}function id(n){const e=n[n.length-1];return n.length>0&&e[e.length-1]<0}const RA={type:0,value:""},IA=/[a-zA-Z0-9_]/;function _A(n){if(!n)return[[]];if(n==="/")return[[RA]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(g){throw new Error(`ERR (${t})/"${c}": ${g}`)}let t=0,r=t;const i=[];let s;function o(){s&&i.push(s),s=[]}let a=0,l,c="",d="";function u(){c&&(t===0?s.push({type:0,value:c}):t===1||t===2||t===3?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:d,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function h(){c+=l}for(;a<n.length;){if(l=n[a++],l==="\\"&&t!==2){r=t,t=4;continue}switch(t){case 0:l==="/"?(c&&u(),o()):l===":"?(u(),t=1):h();break;case 4:h(),t=r;break;case 1:l==="("?t=2:IA.test(l)?h():(u(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+l:t=3:d+=l;break;case 3:u(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,d="";break;default:e("Unknown state");break}}return t===2&&e(`Unfinished custom RegExp for param "${c}"`),u(),o(),i}function DA(n,e,t){const r=wA(_A(n.path),t),i=Ve(r,{record:n,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function PA(n,e){const t=[],r=new Map;e=ad({strict:!1,end:!0,sensitive:!1},e);function i(d){return r.get(d)}function s(d,u,h){const g=!h,y=BA(d);y.aliasOf=h&&h.record;const b=ad(e,d),E=[y];if("alias"in d){const R=typeof d.alias=="string"?[d.alias]:d.alias;for(const _ of R)E.push(Ve({},y,{components:h?h.record.components:y.components,path:_,aliasOf:h?h.record:y}))}let C,w;for(const R of E){const{path:_}=R;if(u&&_[0]!=="/"){const P=u.record.path,H=P[P.length-1]==="/"?"":"/";R.path=u.record.path+(_&&H+_)}if(C=DA(R,u,b),h?h.alias.push(C):(w=w||C,w!==C&&w.alias.push(C),g&&d.name&&!od(C)&&o(d.name)),y.children){const P=y.children;for(let H=0;H<P.length;H++)s(P[H],C,h&&h.children[H])}h=h||C,(C.record.components&&Object.keys(C.record.components).length||C.record.name||C.record.redirect)&&l(C)}return w?()=>{o(w)}:vi}function o(d){if(Oh(d)){const u=r.get(d);u&&(r.delete(d),t.splice(t.indexOf(u),1),u.children.forEach(o),u.alias.forEach(o))}else{const u=t.indexOf(d);u>-1&&(t.splice(u,1),d.record.name&&r.delete(d.record.name),d.children.forEach(o),d.alias.forEach(o))}}function a(){return t}function l(d){let u=0;for(;u<t.length&&LA(d,t[u])>=0&&(d.record.path!==t[u].record.path||!Mh(d,t[u]));)u++;t.splice(u,0,d),d.record.name&&!od(d)&&r.set(d.record.name,d)}function c(d,u){let h,g={},y,b;if("name"in d&&d.name){if(h=r.get(d.name),!h)throw wr(1,{location:d});b=h.record.name,g=Ve(sd(u.params,h.keys.filter(w=>!w.optional).map(w=>w.name)),d.params&&sd(d.params,h.keys.map(w=>w.name))),y=h.stringify(g)}else if("path"in d)y=d.path,h=t.find(w=>w.re.test(y)),h&&(g=h.parse(y),b=h.record.name);else{if(h=u.name?r.get(u.name):t.find(w=>w.re.test(u.path)),!h)throw wr(1,{location:d,currentLocation:u});b=h.record.name,g=Ve({},u.params,d.params),y=h.stringify(g)}const E=[];let C=h;for(;C;)E.unshift(C.record),C=C.parent;return{name:b,path:y,params:g,matched:E,meta:FA(E)}}return n.forEach(d=>s(d)),{addRoute:s,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function sd(n,e){const t={};for(const r of e)r in n&&(t[r]=n[r]);return t}function BA(n){return{path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:void 0,beforeEnter:n.beforeEnter,props:OA(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}}}function OA(n){const e={},t=n.props||!1;if("component"in n)e.default=t;else for(const r in n.components)e[r]=typeof t=="object"?t[r]:t;return e}function od(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function FA(n){return n.reduce((e,t)=>Ve(e,t.meta),{})}function ad(n,e){const t={};for(const r in n)t[r]=r in e?e[r]:n[r];return t}function Mh(n,e){return e.children.some(t=>t===n||Mh(n,t))}const Nh=/#/g,MA=/&/g,NA=/\//g,UA=/=/g,$A=/\?/g,Uh=/\+/g,HA=/%5B/g,GA=/%5D/g,$h=/%5E/g,KA=/%60/g,Hh=/%7B/g,zA=/%7C/g,Gh=/%7D/g,jA=/%20/g;function ul(n){return encodeURI(""+n).replace(zA,"|").replace(HA,"[").replace(GA,"]")}function qA(n){return ul(n).replace(Hh,"{").replace(Gh,"}").replace($h,"^")}function va(n){return ul(n).replace(Uh,"%2B").replace(jA,"+").replace(Nh,"%23").replace(MA,"%26").replace(KA,"`").replace(Hh,"{").replace(Gh,"}").replace($h,"^")}function VA(n){return va(n).replace(UA,"%3D")}function WA(n){return ul(n).replace(Nh,"%23").replace($A,"%3F")}function YA(n){return n==null?"":WA(n).replace(NA,"%2F")}function Ds(n){try{return decodeURIComponent(""+n)}catch{}return""+n}function QA(n){const e={};if(n===""||n==="?")return e;const r=(n[0]==="?"?n.slice(1):n).split("&");for(let i=0;i<r.length;++i){const s=r[i].replace(Uh," "),o=s.indexOf("="),a=Ds(o<0?s:s.slice(0,o)),l=o<0?null:Ds(s.slice(o+1));if(a in e){let c=e[a];Wt(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function ld(n){let e="";for(let t in n){const r=n[t];if(t=VA(t),r==null){r!==void 0&&(e+=(e.length?"&":"")+t);continue}(Wt(r)?r.map(s=>s&&va(s)):[r&&va(r)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+t,s!=null&&(e+="="+s))})}return e}function XA(n){const e={};for(const t in n){const r=n[t];r!==void 0&&(e[t]=Wt(r)?r.map(i=>i==null?null:""+i):r==null?r:""+r)}return e}const JA=Symbol(""),cd=Symbol(""),hl=Symbol(""),fl=Symbol(""),Ea=Symbol("");function li(){let n=[];function e(r){return n.push(r),()=>{const i=n.indexOf(r);i>-1&&n.splice(i,1)}}function t(){n=[]}return{add:e,list:()=>n.slice(),reset:t}}function In(n,e,t,r,i){const s=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((o,a)=>{const l=u=>{u===!1?a(wr(4,{from:t,to:e})):u instanceof Error?a(u):SA(u)?a(wr(2,{from:e,to:u})):(s&&r.enterCallbacks[i]===s&&typeof u=="function"&&s.push(u),o())},c=n.call(r&&r.instances[i],e,t,l);let d=Promise.resolve(c);n.length<3&&(d=d.then(l)),d.catch(u=>a(u))})}function Po(n,e,t,r){const i=[];for(const s of n)for(const o in s.components){let a=s.components[o];if(!(e!=="beforeRouteEnter"&&!s.instances[o]))if(ZA(a)){const c=(a.__vccOpts||a)[e];c&&i.push(In(c,t,r,s,o))}else{let l=a();i.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${s.path}"`));const d=sA(c)?c.default:c;s.components[o]=d;const h=(d.__vccOpts||d)[e];return h&&In(h,t,r,s,o)()}))}}return i}function ZA(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function dd(n){const e=Vt(hl),t=Vt(fl),r=Ft(()=>e.resolve(Yn(n.to))),i=Ft(()=>{const{matched:l}=r.value,{length:c}=l,d=l[c-1],u=t.matched;if(!d||!u.length)return-1;const h=u.findIndex(Cr.bind(null,d));if(h>-1)return h;const g=ud(l[c-2]);return c>1&&ud(d)===g&&u[u.length-1].path!==g?u.findIndex(Cr.bind(null,l[c-2])):h}),s=Ft(()=>i.value>-1&&rb(t.params,r.value.params)),o=Ft(()=>i.value>-1&&i.value===t.matched.length-1&&Ph(t.params,r.value.params));function a(l={}){return nb(l)?e[Yn(n.replace)?"replace":"push"](Yn(n.to)).catch(vi):Promise.resolve()}return{route:r,href:Ft(()=>r.value.href),isActive:s,isExactActive:o,navigate:a}}const eb=Mi({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:dd,setup(n,{slots:e}){const t=Fi(dd(n)),{options:r}=Vt(hl),i=Ft(()=>({[hd(n.activeClass,r.linkActiveClass,"router-link-active")]:t.isActive,[hd(n.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const s=e.default&&e.default(t);return n.custom?s:kh("a",{"aria-current":t.isExactActive?n.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:i.value},s)}}}),tb=eb;function nb(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function rb(n,e){for(const t in e){const r=e[t],i=n[t];if(typeof r=="string"){if(r!==i)return!1}else if(!Wt(i)||i.length!==r.length||r.some((s,o)=>s!==i[o]))return!1}return!0}function ud(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const hd=(n,e,t)=>n??e??t,ib=Mi({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:e,slots:t}){const r=Vt(Ea),i=Ft(()=>n.route||r.value),s=Vt(cd,0),o=Ft(()=>{let c=Yn(s);const{matched:d}=i.value;let u;for(;(u=d[c])&&!u.components;)c++;return c}),a=Ft(()=>i.value.matched[o.value]);fs(cd,Ft(()=>o.value+1)),fs(JA,a),fs(Ea,i);const l=nl();return mi(()=>[l.value,a.value,n.name],([c,d,u],[h,g,y])=>{d&&(d.instances[u]=c,g&&g!==d&&c&&c===h&&(d.leaveGuards.size||(d.leaveGuards=g.leaveGuards),d.updateGuards.size||(d.updateGuards=g.updateGuards))),c&&d&&(!g||!Cr(d,g)||!h)&&(d.enterCallbacks[u]||[]).forEach(b=>b(c))},{flush:"post"}),()=>{const c=i.value,d=n.name,u=a.value,h=u&&u.components[d];if(!h)return fd(t.default,{Component:h,route:c});const g=u.props[d],y=g?g===!0?c.params:typeof g=="function"?g(c):g:null,E=kh(h,Ve({},y,e,{onVnodeUnmounted:C=>{C.component.isUnmounted&&(u.instances[d]=null)},ref:l}));return fd(t.default,{Component:E,route:c})||E}}});function fd(n,e){if(!n)return null;const t=n(e);return t.length===1?t[0]:t}const Kh=ib;function sb(n){const e=PA(n.routes,n),t=n.parseQuery||QA,r=n.stringifyQuery||ld,i=n.history,s=li(),o=li(),a=li(),l=ug(Cn);let c=Cn;fr&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=_o.bind(null,K=>""+K),u=_o.bind(null,YA),h=_o.bind(null,Ds);function g(K,ce){let re,Ee;return Oh(K)?(re=e.getRecordMatcher(K),Ee=ce):Ee=K,e.addRoute(Ee,re)}function y(K){const ce=e.getRecordMatcher(K);ce&&e.removeRoute(ce)}function b(){return e.getRoutes().map(K=>K.record)}function E(K){return!!e.getRecordMatcher(K)}function C(K,ce){if(ce=Ve({},ce||l.value),typeof K=="string"){const O=Do(t,K,ce.path),j=e.resolve({path:O.path},ce),X=i.createHref(O.fullPath);return Ve(O,j,{params:h(j.params),hash:Ds(O.hash),redirectedFrom:void 0,href:X})}let re;if("path"in K)re=Ve({},K,{path:Do(t,K.path,ce.path).path});else{const O=Ve({},K.params);for(const j in O)O[j]==null&&delete O[j];re=Ve({},K,{params:u(O)}),ce.params=u(ce.params)}const Ee=e.resolve(re,ce),Ke=K.hash||"";Ee.params=d(h(Ee.params));const I=lA(r,Ve({},K,{hash:qA(Ke),path:Ee.path})),D=i.createHref(I);return Ve({fullPath:I,hash:Ke,query:r===ld?XA(K.query):K.query||{}},Ee,{redirectedFrom:void 0,href:D})}function w(K){return typeof K=="string"?Do(t,K,l.value.path):Ve({},K)}function R(K,ce){if(c!==K)return wr(8,{from:ce,to:K})}function _(K){return U(K)}function P(K){return _(Ve(w(K),{replace:!0}))}function H(K){const ce=K.matched[K.matched.length-1];if(ce&&ce.redirect){const{redirect:re}=ce;let Ee=typeof re=="function"?re(K):re;return typeof Ee=="string"&&(Ee=Ee.includes("?")||Ee.includes("#")?Ee=w(Ee):{path:Ee},Ee.params={}),Ve({query:K.query,hash:K.hash,params:"path"in Ee?{}:K.params},Ee)}}function U(K,ce){const re=c=C(K),Ee=l.value,Ke=K.state,I=K.force,D=K.replace===!0,O=H(re);if(O)return U(Ve(w(O),{state:typeof O=="object"?Ve({},Ke,O.state):Ke,force:I,replace:D}),ce||re);const j=re;j.redirectedFrom=ce;let X;return!I&&cA(r,Ee,re)&&(X=wr(16,{to:j,from:Ee}),Re(Ee,Ee,!0,!1)),(X?Promise.resolve(X):F(j,Ee)).catch(ee=>hn(ee)?hn(ee,2)?ee:ae(ee):me(ee,j,Ee)).then(ee=>{if(ee){if(hn(ee,2))return U(Ve({replace:D},w(ee.to),{state:typeof ee.to=="object"?Ve({},Ke,ee.to.state):Ke,force:I}),ce||j)}else ee=Ae(j,Ee,!0,D,Ke);return Y(j,Ee,ee),ee})}function z(K,ce){const re=R(K,ce);return re?Promise.reject(re):Promise.resolve()}function Q(K){const ce=ze.values().next().value;return ce&&typeof ce.runWithContext=="function"?ce.runWithContext(K):K()}function F(K,ce){let re;const[Ee,Ke,I]=ob(K,ce);re=Po(Ee.reverse(),"beforeRouteLeave",K,ce);for(const O of Ee)O.leaveGuards.forEach(j=>{re.push(In(j,K,ce))});const D=z.bind(null,K,ce);return re.push(D),Pe(re).then(()=>{re=[];for(const O of s.list())re.push(In(O,K,ce));return re.push(D),Pe(re)}).then(()=>{re=Po(Ke,"beforeRouteUpdate",K,ce);for(const O of Ke)O.updateGuards.forEach(j=>{re.push(In(j,K,ce))});return re.push(D),Pe(re)}).then(()=>{re=[];for(const O of I)if(O.beforeEnter)if(Wt(O.beforeEnter))for(const j of O.beforeEnter)re.push(In(j,K,ce));else re.push(In(O.beforeEnter,K,ce));return re.push(D),Pe(re)}).then(()=>(K.matched.forEach(O=>O.enterCallbacks={}),re=Po(I,"beforeRouteEnter",K,ce),re.push(D),Pe(re))).then(()=>{re=[];for(const O of o.list())re.push(In(O,K,ce));return re.push(D),Pe(re)}).catch(O=>hn(O,8)?O:Promise.reject(O))}function Y(K,ce,re){a.list().forEach(Ee=>Q(()=>Ee(K,ce,re)))}function Ae(K,ce,re,Ee,Ke){const I=R(K,ce);if(I)return I;const D=ce===Cn,O=fr?history.state:{};re&&(Ee||D?i.replace(K.fullPath,Ve({scroll:D&&O&&O.scroll},Ke)):i.push(K.fullPath,Ke)),l.value=K,Re(K,ce,re,D),ae()}let te;function Se(){te||(te=i.listen((K,ce,re)=>{if(!Je.listening)return;const Ee=C(K),Ke=H(Ee);if(Ke){U(Ve(Ke,{replace:!0}),Ee).catch(vi);return}c=Ee;const I=l.value;fr&&yA(ed(I.fullPath,re.delta),ro()),F(Ee,I).catch(D=>hn(D,12)?D:hn(D,2)?(U(D.to,Ee).then(O=>{hn(O,20)&&!re.delta&&re.type===_i.pop&&i.go(-1,!1)}).catch(vi),Promise.reject()):(re.delta&&i.go(-re.delta,!1),me(D,Ee,I))).then(D=>{D=D||Ae(Ee,I,!1),D&&(re.delta&&!hn(D,8)?i.go(-re.delta,!1):re.type===_i.pop&&hn(D,20)&&i.go(-1,!1)),Y(Ee,I,D)}).catch(vi)}))}let ve=li(),ne=li(),ye;function me(K,ce,re){ae(K);const Ee=ne.list();return Ee.length?Ee.forEach(Ke=>Ke(K,ce,re)):console.error(K),Promise.reject(K)}function q(){return ye&&l.value!==Cn?Promise.resolve():new Promise((K,ce)=>{ve.add([K,ce])})}function ae(K){return ye||(ye=!K,Se(),ve.list().forEach(([ce,re])=>K?re(K):ce()),ve.reset()),K}function Re(K,ce,re,Ee){const{scrollBehavior:Ke}=n;if(!fr||!Ke)return Promise.resolve();const I=!re&&AA(ed(K.fullPath,0))||(Ee||!re)&&history.state&&history.state.scroll||null;return il().then(()=>Ke(K,ce,I)).then(D=>D&&gA(D)).catch(D=>me(D,K,ce))}const xe=K=>i.go(K);let Fe;const ze=new Set,Je={currentRoute:l,listening:!0,addRoute:g,removeRoute:y,hasRoute:E,getRoutes:b,resolve:C,options:n,push:_,replace:P,go:xe,back:()=>xe(-1),forward:()=>xe(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:ne.add,isReady:q,install(K){const ce=this;K.component("RouterLink",tb),K.component("RouterView",Kh),K.config.globalProperties.$router=ce,Object.defineProperty(K.config.globalProperties,"$route",{enumerable:!0,get:()=>Yn(l)}),fr&&!Fe&&l.value===Cn&&(Fe=!0,_(i.location).catch(Ke=>{}));const re={};for(const Ke in Cn)Object.defineProperty(re,Ke,{get:()=>l.value[Ke],enumerable:!0});K.provide(hl,ce),K.provide(fl,Xu(re)),K.provide(Ea,l);const Ee=K.unmount;ze.add(K),K.unmount=function(){ze.delete(K),ze.size<1&&(c=Cn,te&&te(),te=null,l.value=Cn,Fe=!1,ye=!1),Ee()}}};function Pe(K){return K.reduce((ce,re)=>ce.then(()=>Q(re)),Promise.resolve())}return Je}function ob(n,e){const t=[],r=[],i=[],s=Math.max(e.matched.length,n.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(n.matched.find(c=>Cr(c,a))?r.push(a):t.push(a));const l=n.matched[o];l&&(e.matched.find(c=>Cr(c,l))||i.push(l))}return[t,r,i]}function iC(){return Vt(fl)}const Jn=(n,e)=>{const t=n.__vccOpts||n;for(const[r,i]of e)t[r]=i;return t},ab=Mi({__name:"App",setup(n){return(e,t)=>(Yt(),ll(Yn(Kh),{id:"allContent"}))}});const lb=Jn(ab,[["__scopeId","data-v-62d918d6"]]),cb="modulepreload",db=function(n,e){return new URL(n,e).href},pd={},Hn=function(e,t,r){if(!t||t.length===0)return e();const i=document.getElementsByTagName("link");return Promise.all(t.map(s=>{if(s=db(s,r),s in pd)return;pd[s]=!0;const o=s.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!r)for(let d=i.length-1;d>=0;d--){const u=i[d];if(u.href===s&&(!o||u.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${a}`))return;const c=document.createElement("link");if(c.rel=o?"stylesheet":cb,o||(c.as="script",c.crossOrigin=""),c.href=s,document.head.appendChild(c),o)return new Promise((d,u)=>{c.addEventListener("load",d),c.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e()).catch(s=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=s,window.dispatchEvent(o),!o.defaultPrevented)throw s})};const ub={},hb={class:"item"},fb={class:"details"};function pb(n,e){return Yt(),Mn("div",hb,[Xe("i",null,[ko(n.$slots,"icon",{},void 0,!0)]),Xe("div",fb,[Xe("h3",null,[ko(n.$slots,"heading",{},void 0,!0)]),ko(n.$slots,"default",{},void 0,!0)])])}const ci=Jn(ub,[["render",pb],["__scopeId","data-v-fd0742eb"]]),mb={},gb={xmlns:"http://www.w3.org/2000/svg",width:"20",height:"17",fill:"currentColor"},yb=Xe("path",{d:"M11 2.253a1 1 0 1 0-2 0h2zm-2 13a1 1 0 1 0 2 0H9zm.447-12.167a1 1 0 1 0 1.107-1.666L9.447 3.086zM1 2.253L.447 1.42A1 1 0 0 0 0 2.253h1zm0 13H0a1 1 0 0 0 1.553.833L1 15.253zm8.447.833a1 1 0 1 0 1.107-1.666l-1.107 1.666zm0-14.666a1 1 0 1 0 1.107 1.666L9.447 1.42zM19 2.253h1a1 1 0 0 0-.447-.833L19 2.253zm0 13l-.553.833A1 1 0 0 0 20 15.253h-1zm-9.553-.833a1 1 0 1 0 1.107 1.666L9.447 14.42zM9 2.253v13h2v-13H9zm1.553-.833C9.203.523 7.42 0 5.5 0v2c1.572 0 2.961.431 3.947 1.086l1.107-1.666zM5.5 0C3.58 0 1.797.523.447 1.42l1.107 1.666C2.539 2.431 3.928 2 5.5 2V0zM0 2.253v13h2v-13H0zm1.553 13.833C2.539 15.431 3.928 15 5.5 15v-2c-1.92 0-3.703.523-5.053 1.42l1.107 1.666zM5.5 15c1.572 0 2.961.431 3.947 1.086l1.107-1.666C9.203 13.523 7.42 13 5.5 13v2zm5.053-11.914C11.539 2.431 12.928 2 14.5 2V0c-1.92 0-3.703.523-5.053 1.42l1.107 1.666zM14.5 2c1.573 0 2.961.431 3.947 1.086l1.107-1.666C18.203.523 16.421 0 14.5 0v2zm3.5.253v13h2v-13h-2zm1.553 12.167C18.203 13.523 16.421 13 14.5 13v2c1.573 0 2.961.431 3.947 1.086l1.107-1.666zM14.5 13c-1.92 0-3.703.523-5.053 1.42l1.107 1.666C11.539 15.431 12.928 15 14.5 15v-2z"},null,-1),Ab=[yb];function bb(n,e){return Yt(),Mn("svg",gb,Ab)}const vb=Jn(mb,[["render",bb]]),Eb={},xb={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":"true",role:"img",class:"iconify iconify--mdi",width:"24",height:"24",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},Sb=Xe("path",{d:"M20 18v-4h-3v1h-2v-1H9v1H7v-1H4v4h16M6.33 8l-1.74 4H7v-1h2v1h6v-1h2v1h2.41l-1.74-4H6.33M9 5v1h6V5H9m12.84 7.61c.1.22.16.48.16.8V18c0 .53-.21 1-.6 1.41c-.4.4-.85.59-1.4.59H4c-.55 0-1-.19-1.4-.59C2.21 19 2 18.53 2 18v-4.59c0-.32.06-.58.16-.8L4.5 7.22C4.84 6.41 5.45 6 6.33 6H7V5c0-.55.18-1 .57-1.41C7.96 3.2 8.44 3 9 3h6c.56 0 1.04.2 1.43.59c.39.41.57.86.57 1.41v1h.67c.88 0 1.49.41 1.83 1.22l2.34 5.39z",fill:"currentColor"},null,-1),Tb=[Sb];function Cb(n,e){return Yt(),Mn("svg",xb,Tb)}const wb=Jn(Eb,[["render",Cb]]),kb={},Lb={xmlns:"http://www.w3.org/2000/svg",width:"18",height:"20",fill:"currentColor"},Rb=Xe("path",{d:"M11.447 8.894a1 1 0 1 0-.894-1.789l.894 1.789zm-2.894-.789a1 1 0 1 0 .894 1.789l-.894-1.789zm0 1.789a1 1 0 1 0 .894-1.789l-.894 1.789zM7.447 7.106a1 1 0 1 0-.894 1.789l.894-1.789zM10 9a1 1 0 1 0-2 0h2zm-2 2.5a1 1 0 1 0 2 0H8zm9.447-5.606a1 1 0 1 0-.894-1.789l.894 1.789zm-2.894-.789a1 1 0 1 0 .894 1.789l-.894-1.789zm2 .789a1 1 0 1 0 .894-1.789l-.894 1.789zm-1.106-2.789a1 1 0 1 0-.894 1.789l.894-1.789zM18 5a1 1 0 1 0-2 0h2zm-2 2.5a1 1 0 1 0 2 0h-2zm-5.447-4.606a1 1 0 1 0 .894-1.789l-.894 1.789zM9 1l.447-.894a1 1 0 0 0-.894 0L9 1zm-2.447.106a1 1 0 1 0 .894 1.789l-.894-1.789zm-6 3a1 1 0 1 0 .894 1.789L.553 4.106zm2.894.789a1 1 0 1 0-.894-1.789l.894 1.789zm-2-.789a1 1 0 1 0-.894 1.789l.894-1.789zm1.106 2.789a1 1 0 1 0 .894-1.789l-.894 1.789zM2 5a1 1 0 1 0-2 0h2zM0 7.5a1 1 0 1 0 2 0H0zm8.553 12.394a1 1 0 1 0 .894-1.789l-.894 1.789zm-1.106-2.789a1 1 0 1 0-.894 1.789l.894-1.789zm1.106 1a1 1 0 1 0 .894 1.789l-.894-1.789zm2.894.789a1 1 0 1 0-.894-1.789l.894 1.789zM8 19a1 1 0 1 0 2 0H8zm2-2.5a1 1 0 1 0-2 0h2zm-7.447.394a1 1 0 1 0 .894-1.789l-.894 1.789zM1 15H0a1 1 0 0 0 .553.894L1 15zm1-2.5a1 1 0 1 0-2 0h2zm12.553 2.606a1 1 0 1 0 .894 1.789l-.894-1.789zM17 15l.447.894A1 1 0 0 0 18 15h-1zm1-2.5a1 1 0 1 0-2 0h2zm-7.447-5.394l-2 1 .894 1.789 2-1-.894-1.789zm-1.106 1l-2-1-.894 1.789 2 1 .894-1.789zM8 9v2.5h2V9H8zm8.553-4.894l-2 1 .894 1.789 2-1-.894-1.789zm.894 0l-2-1-.894 1.789 2 1 .894-1.789zM16 5v2.5h2V5h-2zm-4.553-3.894l-2-1-.894 1.789 2 1 .894-1.789zm-2.894-1l-2 1 .894 1.789 2-1L8.553.106zM1.447 5.894l2-1-.894-1.789-2 1 .894 1.789zm-.894 0l2 1 .894-1.789-2-1-.894 1.789zM0 5v2.5h2V5H0zm9.447 13.106l-2-1-.894 1.789 2 1 .894-1.789zm0 1.789l2-1-.894-1.789-2 1 .894 1.789zM10 19v-2.5H8V19h2zm-6.553-3.894l-2-1-.894 1.789 2 1 .894-1.789zM2 15v-2.5H0V15h2zm13.447 1.894l2-1-.894-1.789-2 1 .894 1.789zM18 15v-2.5h-2V15h2z"},null,-1),Ib=[Rb];function _b(n,e){return Yt(),Mn("svg",Lb,Ib)}const Db=Jn(kb,[["render",_b]]),Pb={},Bb={xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor"},Ob=Xe("path",{d:"M15 4a1 1 0 1 0 0 2V4zm0 11v-1a1 1 0 0 0-1 1h1zm0 4l-.707.707A1 1 0 0 0 16 19h-1zm-4-4l.707-.707A1 1 0 0 0 11 14v1zm-4.707-1.293a1 1 0 0 0-1.414 1.414l1.414-1.414zm-.707.707l-.707-.707.707.707zM9 11v-1a1 1 0 0 0-.707.293L9 11zm-4 0h1a1 1 0 0 0-1-1v1zm0 4H4a1 1 0 0 0 1.707.707L5 15zm10-9h2V4h-2v2zm2 0a1 1 0 0 1 1 1h2a3 3 0 0 0-3-3v2zm1 1v6h2V7h-2zm0 6a1 1 0 0 1-1 1v2a3 3 0 0 0 3-3h-2zm-1 1h-2v2h2v-2zm-3 1v4h2v-4h-2zm1.707 3.293l-4-4-1.414 1.414 4 4 1.414-1.414zM11 14H7v2h4v-2zm-4 0c-.276 0-.525-.111-.707-.293l-1.414 1.414C5.42 15.663 6.172 16 7 16v-2zm-.707 1.121l3.414-3.414-1.414-1.414-3.414 3.414 1.414 1.414zM9 12h4v-2H9v2zm4 0a3 3 0 0 0 3-3h-2a1 1 0 0 1-1 1v2zm3-3V3h-2v6h2zm0-6a3 3 0 0 0-3-3v2a1 1 0 0 1 1 1h2zm-3-3H3v2h10V0zM3 0a3 3 0 0 0-3 3h2a1 1 0 0 1 1-1V0zM0 3v6h2V3H0zm0 6a3 3 0 0 0 3 3v-2a1 1 0 0 1-1-1H0zm3 3h2v-2H3v2zm1-1v4h2v-4H4zm1.707 4.707l.586-.586-1.414-1.414-.586.586 1.414 1.414z"},null,-1),Fb=[Ob];function Mb(n,e){return Yt(),Mn("svg",Bb,Fb)}const Nb=Jn(Pb,[["render",Mb]]),Ub={},$b={xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor"},Hb=Xe("path",{d:"M10 3.22l-.61-.6a5.5 5.5 0 0 0-7.666.105 5.5 5.5 0 0 0-.114 7.665L10 18.78l8.39-8.4a5.5 5.5 0 0 0-.114-7.665 5.5 5.5 0 0 0-7.666-.105l-.61.61z"},null,-1),Gb=[Hb];function Kb(n,e){return Yt(),Mn("svg",$b,Gb)}const zb=Jn(Ub,[["render",Kb]]),jb=Xe("a",{href:"https://vuejs.org/",target:"_blank",rel:"noopener"},"official documentation",-1),qb=Xe("a",{href:"https://vitejs.dev/guide/features.html",target:"_blank",rel:"noopener"},"Vite",-1),Vb=Xe("a",{href:"https://code.visualstudio.com/",target:"_blank",rel:"noopener"},"VSCode",-1),Wb=Xe("a",{href:"https://github.com/johnsoncodehk/volar",target:"_blank",rel:"noopener"},"Volar",-1),Yb=Xe("a",{href:"https://www.cypress.io/",target:"_blank",rel:"noopener"},"Cypress",-1),Qb=Xe("a",{href:"https://on.cypress.io/component",target:"_blank",rel:"noopener"},"Cypress Component Testing",-1),Xb=Xe("br",null,null,-1),Jb=Xe("code",null,"README.md",-1),Zb=Xe("a",{href:"https://pinia.vuejs.org/",target:"_blank",rel:"noopener"},"Pinia",-1),ev=Xe("a",{href:"https://router.vuejs.org/",target:"_blank",rel:"noopener"},"Vue Router",-1),tv=Xe("a",{href:"https://test-utils.vuejs.org/",target:"_blank",rel:"noopener"},"Vue Test Utils",-1),nv=Xe("a",{href:"https://github.com/vuejs/devtools",target:"_blank",rel:"noopener"},"Vue Dev Tools",-1),rv=Xe("a",{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"},"Awesome Vue",-1),iv=Xe("a",{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"},"Vue Land",-1),sv=Xe("a",{href:"https://stackoverflow.com/questions/tagged/vue.js",target:"_blank",rel:"noopener"},"StackOverflow",-1),ov=Xe("a",{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"},"our mailing list",-1),av=Xe("a",{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"},"@vuejs",-1),lv=Xe("a",{href:"https://vuejs.org/sponsor/",target:"_blank",rel:"noopener"},"becoming a sponsor",-1),cv=Mi({__name:"TheWelcome",setup(n){return(e,t)=>(Yt(),Mn(Ot,null,[Ze(ci,null,{icon:Et(()=>[Ze(vb)]),heading:Et(()=>[qe("Documentation")]),default:Et(()=>[qe(" Vue’s "),jb,qe(" provides you with all information you need to get started. ")]),_:1}),Ze(ci,null,{icon:Et(()=>[Ze(wb)]),heading:Et(()=>[qe("Tooling")]),default:Et(()=>[qe(" This project is served and bundled with "),qb,qe(". The recommended IDE setup is "),Vb,qe(" + "),Wb,qe(". If you need to test your components and web pages, check out "),Yb,qe(" and "),Qb,qe(". "),Xb,qe(" More instructions are available in "),Jb,qe(". ")]),_:1}),Ze(ci,null,{icon:Et(()=>[Ze(Db)]),heading:Et(()=>[qe("Ecosystem")]),default:Et(()=>[qe(" Get official tools and libraries for your project: "),Zb,qe(", "),ev,qe(", "),tv,qe(", and "),nv,qe(". If you need more resources, we suggest paying "),rv,qe(" a visit. ")]),_:1}),Ze(ci,null,{icon:Et(()=>[Ze(Nb)]),heading:Et(()=>[qe("Community")]),default:Et(()=>[qe(" Got stuck? Ask your question on "),iv,qe(", our official Discord server, or "),sv,qe(". You should also subscribe to "),ov,qe(" and follow the official "),av,qe(" twitter account for latest news in the Vue world. ")]),_:1}),Ze(ci,null,{icon:Et(()=>[Ze(zb)]),heading:Et(()=>[qe("Support Vue")]),default:Et(()=>[qe(" As an independent project, Vue relies on community backing for its sustainability. You can help us by "),lv,qe(". ")]),_:1})],64))}}),dv=Mi({__name:"HomeView",setup(n){return(e,t)=>(Yt(),Mn("main",null,[Ze(cv)]))}});function zh(n,e){return function(){return n.apply(e,arguments)}}const{toString:uv}=Object.prototype,{getPrototypeOf:pl}=Object,io=(n=>e=>{const t=uv.call(e);return n[t]||(n[t]=t.slice(8,-1).toLowerCase())})(Object.create(null)),cn=n=>(n=n.toLowerCase(),e=>io(e)===n),so=n=>e=>typeof e===n,{isArray:Or}=Array,Di=so("undefined");function hv(n){return n!==null&&!Di(n)&&n.constructor!==null&&!Di(n.constructor)&&Mt(n.constructor.isBuffer)&&n.constructor.isBuffer(n)}const jh=cn("ArrayBuffer");function fv(n){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(n):e=n&&n.buffer&&jh(n.buffer),e}const pv=so("string"),Mt=so("function"),qh=so("number"),oo=n=>n!==null&&typeof n=="object",mv=n=>n===!0||n===!1,gs=n=>{if(io(n)!=="object")return!1;const e=pl(n);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in n)&&!(Symbol.iterator in n)},gv=cn("Date"),yv=cn("File"),Av=cn("Blob"),bv=cn("FileList"),vv=n=>oo(n)&&Mt(n.pipe),Ev=n=>{let e;return n&&(typeof FormData=="function"&&n instanceof FormData||Mt(n.append)&&((e=io(n))==="formdata"||e==="object"&&Mt(n.toString)&&n.toString()==="[object FormData]"))},xv=cn("URLSearchParams"),Sv=n=>n.trim?n.trim():n.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Ni(n,e,{allOwnKeys:t=!1}={}){if(n===null||typeof n>"u")return;let r,i;if(typeof n!="object"&&(n=[n]),Or(n))for(r=0,i=n.length;r<i;r++)e.call(null,n[r],r,n);else{const s=t?Object.getOwnPropertyNames(n):Object.keys(n),o=s.length;let a;for(r=0;r<o;r++)a=s[r],e.call(null,n[a],a,n)}}function Vh(n,e){e=e.toLowerCase();const t=Object.keys(n);let r=t.length,i;for(;r-- >0;)if(i=t[r],e===i.toLowerCase())return i;return null}const Wh=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),Yh=n=>!Di(n)&&n!==Wh;function xa(){const{caseless:n}=Yh(this)&&this||{},e={},t=(r,i)=>{const s=n&&Vh(e,i)||i;gs(e[s])&&gs(r)?e[s]=xa(e[s],r):gs(r)?e[s]=xa({},r):Or(r)?e[s]=r.slice():e[s]=r};for(let r=0,i=arguments.length;r<i;r++)arguments[r]&&Ni(arguments[r],t);return e}const Tv=(n,e,t,{allOwnKeys:r}={})=>(Ni(e,(i,s)=>{t&&Mt(i)?n[s]=zh(i,t):n[s]=i},{allOwnKeys:r}),n),Cv=n=>(n.charCodeAt(0)===65279&&(n=n.slice(1)),n),wv=(n,e,t,r)=>{n.prototype=Object.create(e.prototype,r),n.prototype.constructor=n,Object.defineProperty(n,"super",{value:e.prototype}),t&&Object.assign(n.prototype,t)},kv=(n,e,t,r)=>{let i,s,o;const a={};if(e=e||{},n==null)return e;do{for(i=Object.getOwnPropertyNames(n),s=i.length;s-- >0;)o=i[s],(!r||r(o,n,e))&&!a[o]&&(e[o]=n[o],a[o]=!0);n=t!==!1&&pl(n)}while(n&&(!t||t(n,e))&&n!==Object.prototype);return e},Lv=(n,e,t)=>{n=String(n),(t===void 0||t>n.length)&&(t=n.length),t-=e.length;const r=n.indexOf(e,t);return r!==-1&&r===t},Rv=n=>{if(!n)return null;if(Or(n))return n;let e=n.length;if(!qh(e))return null;const t=new Array(e);for(;e-- >0;)t[e]=n[e];return t},Iv=(n=>e=>n&&e instanceof n)(typeof Uint8Array<"u"&&pl(Uint8Array)),_v=(n,e)=>{const r=(n&&n[Symbol.iterator]).call(n);let i;for(;(i=r.next())&&!i.done;){const s=i.value;e.call(n,s[0],s[1])}},Dv=(n,e)=>{let t;const r=[];for(;(t=n.exec(e))!==null;)r.push(t);return r},Pv=cn("HTMLFormElement"),Bv=n=>n.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(t,r,i){return r.toUpperCase()+i}),md=(({hasOwnProperty:n})=>(e,t)=>n.call(e,t))(Object.prototype),Ov=cn("RegExp"),Qh=(n,e)=>{const t=Object.getOwnPropertyDescriptors(n),r={};Ni(t,(i,s)=>{let o;(o=e(i,s,n))!==!1&&(r[s]=o||i)}),Object.defineProperties(n,r)},Fv=n=>{Qh(n,(e,t)=>{if(Mt(n)&&["arguments","caller","callee"].indexOf(t)!==-1)return!1;const r=n[t];if(Mt(r)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+t+"'")})}})},Mv=(n,e)=>{const t={},r=i=>{i.forEach(s=>{t[s]=!0})};return Or(n)?r(n):r(String(n).split(e)),t},Nv=()=>{},Uv=(n,e)=>(n=+n,Number.isFinite(n)?n:e),Bo="abcdefghijklmnopqrstuvwxyz",gd="0123456789",Xh={DIGIT:gd,ALPHA:Bo,ALPHA_DIGIT:Bo+Bo.toUpperCase()+gd},$v=(n=16,e=Xh.ALPHA_DIGIT)=>{let t="";const{length:r}=e;for(;n--;)t+=e[Math.random()*r|0];return t};function Hv(n){return!!(n&&Mt(n.append)&&n[Symbol.toStringTag]==="FormData"&&n[Symbol.iterator])}const Gv=n=>{const e=new Array(10),t=(r,i)=>{if(oo(r)){if(e.indexOf(r)>=0)return;if(!("toJSON"in r)){e[i]=r;const s=Or(r)?[]:{};return Ni(r,(o,a)=>{const l=t(o,i+1);!Di(l)&&(s[a]=l)}),e[i]=void 0,s}}return r};return t(n,0)},Kv=cn("AsyncFunction"),zv=n=>n&&(oo(n)||Mt(n))&&Mt(n.then)&&Mt(n.catch),W={isArray:Or,isArrayBuffer:jh,isBuffer:hv,isFormData:Ev,isArrayBufferView:fv,isString:pv,isNumber:qh,isBoolean:mv,isObject:oo,isPlainObject:gs,isUndefined:Di,isDate:gv,isFile:yv,isBlob:Av,isRegExp:Ov,isFunction:Mt,isStream:vv,isURLSearchParams:xv,isTypedArray:Iv,isFileList:bv,forEach:Ni,merge:xa,extend:Tv,trim:Sv,stripBOM:Cv,inherits:wv,toFlatObject:kv,kindOf:io,kindOfTest:cn,endsWith:Lv,toArray:Rv,forEachEntry:_v,matchAll:Dv,isHTMLForm:Pv,hasOwnProperty:md,hasOwnProp:md,reduceDescriptors:Qh,freezeMethods:Fv,toObjectSet:Mv,toCamelCase:Bv,noop:Nv,toFiniteNumber:Uv,findKey:Vh,global:Wh,isContextDefined:Yh,ALPHABET:Xh,generateString:$v,isSpecCompliantForm:Hv,toJSONObject:Gv,isAsyncFn:Kv,isThenable:zv};function $e(n,e,t,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=n,this.name="AxiosError",e&&(this.code=e),t&&(this.config=t),r&&(this.request=r),i&&(this.response=i)}W.inherits($e,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:W.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Jh=$e.prototype,Zh={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(n=>{Zh[n]={value:n}});Object.defineProperties($e,Zh);Object.defineProperty(Jh,"isAxiosError",{value:!0});$e.from=(n,e,t,r,i,s)=>{const o=Object.create(Jh);return W.toFlatObject(n,o,function(l){return l!==Error.prototype},a=>a!=="isAxiosError"),$e.call(o,n.message,e,t,r,i),o.cause=n,o.name=n.name,s&&Object.assign(o,s),o};const jv=null;function Sa(n){return W.isPlainObject(n)||W.isArray(n)}function ef(n){return W.endsWith(n,"[]")?n.slice(0,-2):n}function yd(n,e,t){return n?n.concat(e).map(function(i,s){return i=ef(i),!t&&s?"["+i+"]":i}).join(t?".":""):e}function qv(n){return W.isArray(n)&&!n.some(Sa)}const Vv=W.toFlatObject(W,{},null,function(e){return/^is[A-Z]/.test(e)});function ao(n,e,t){if(!W.isObject(n))throw new TypeError("target must be an object");e=e||new FormData,t=W.toFlatObject(t,{metaTokens:!0,dots:!1,indexes:!1},!1,function(b,E){return!W.isUndefined(E[b])});const r=t.metaTokens,i=t.visitor||d,s=t.dots,o=t.indexes,l=(t.Blob||typeof Blob<"u"&&Blob)&&W.isSpecCompliantForm(e);if(!W.isFunction(i))throw new TypeError("visitor must be a function");function c(y){if(y===null)return"";if(W.isDate(y))return y.toISOString();if(!l&&W.isBlob(y))throw new $e("Blob is not supported. Use a Buffer instead.");return W.isArrayBuffer(y)||W.isTypedArray(y)?l&&typeof Blob=="function"?new Blob([y]):Buffer.from(y):y}function d(y,b,E){let C=y;if(y&&!E&&typeof y=="object"){if(W.endsWith(b,"{}"))b=r?b:b.slice(0,-2),y=JSON.stringify(y);else if(W.isArray(y)&&qv(y)||(W.isFileList(y)||W.endsWith(b,"[]"))&&(C=W.toArray(y)))return b=ef(b),C.forEach(function(R,_){!(W.isUndefined(R)||R===null)&&e.append(o===!0?yd([b],_,s):o===null?b:b+"[]",c(R))}),!1}return Sa(y)?!0:(e.append(yd(E,b,s),c(y)),!1)}const u=[],h=Object.assign(Vv,{defaultVisitor:d,convertValue:c,isVisitable:Sa});function g(y,b){if(!W.isUndefined(y)){if(u.indexOf(y)!==-1)throw Error("Circular reference detected in "+b.join("."));u.push(y),W.forEach(y,function(C,w){(!(W.isUndefined(C)||C===null)&&i.call(e,C,W.isString(w)?w.trim():w,b,h))===!0&&g(C,b?b.concat(w):[w])}),u.pop()}}if(!W.isObject(n))throw new TypeError("data must be an object");return g(n),e}function Ad(n){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(n).replace(/[!'()~]|%20|%00/g,function(r){return e[r]})}function ml(n,e){this._pairs=[],n&&ao(n,this,e)}const tf=ml.prototype;tf.append=function(e,t){this._pairs.push([e,t])};tf.toString=function(e){const t=e?function(r){return e.call(this,r,Ad)}:Ad;return this._pairs.map(function(i){return t(i[0])+"="+t(i[1])},"").join("&")};function Wv(n){return encodeURIComponent(n).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function nf(n,e,t){if(!e)return n;const r=t&&t.encode||Wv,i=t&&t.serialize;let s;if(i?s=i(e,t):s=W.isURLSearchParams(e)?e.toString():new ml(e,t).toString(r),s){const o=n.indexOf("#");o!==-1&&(n=n.slice(0,o)),n+=(n.indexOf("?")===-1?"?":"&")+s}return n}class Yv{constructor(){this.handlers=[]}use(e,t,r){return this.handlers.push({fulfilled:e,rejected:t,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){W.forEach(this.handlers,function(r){r!==null&&e(r)})}}const bd=Yv,rf={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Qv=typeof URLSearchParams<"u"?URLSearchParams:ml,Xv=typeof FormData<"u"?FormData:null,Jv=typeof Blob<"u"?Blob:null,Zv={isBrowser:!0,classes:{URLSearchParams:Qv,FormData:Xv,Blob:Jv},protocols:["http","https","file","blob","url","data"]},sf=typeof window<"u"&&typeof document<"u",eE=(n=>sf&&["ReactNative","NativeScript","NS"].indexOf(n)<0)(typeof navigator<"u"&&navigator.product),tE=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),nE=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:sf,hasStandardBrowserEnv:eE,hasStandardBrowserWebWorkerEnv:tE},Symbol.toStringTag,{value:"Module"})),rn={...nE,...Zv};function rE(n,e){return ao(n,new rn.classes.URLSearchParams,Object.assign({visitor:function(t,r,i,s){return rn.isNode&&W.isBuffer(t)?(this.append(r,t.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)}},e))}function iE(n){return W.matchAll(/\w+|\[(\w*)]/g,n).map(e=>e[0]==="[]"?"":e[1]||e[0])}function sE(n){const e={},t=Object.keys(n);let r;const i=t.length;let s;for(r=0;r<i;r++)s=t[r],e[s]=n[s];return e}function of(n){function e(t,r,i,s){let o=t[s++];if(o==="__proto__")return!0;const a=Number.isFinite(+o),l=s>=t.length;return o=!o&&W.isArray(i)?i.length:o,l?(W.hasOwnProp(i,o)?i[o]=[i[o],r]:i[o]=r,!a):((!i[o]||!W.isObject(i[o]))&&(i[o]=[]),e(t,r,i[o],s)&&W.isArray(i[o])&&(i[o]=sE(i[o])),!a)}if(W.isFormData(n)&&W.isFunction(n.entries)){const t={};return W.forEachEntry(n,(r,i)=>{e(iE(r),i,t,0)}),t}return null}function oE(n,e,t){if(W.isString(n))try{return(e||JSON.parse)(n),W.trim(n)}catch(r){if(r.name!=="SyntaxError")throw r}return(t||JSON.stringify)(n)}const gl={transitional:rf,adapter:["xhr","http"],transformRequest:[function(e,t){const r=t.getContentType()||"",i=r.indexOf("application/json")>-1,s=W.isObject(e);if(s&&W.isHTMLForm(e)&&(e=new FormData(e)),W.isFormData(e))return i?JSON.stringify(of(e)):e;if(W.isArrayBuffer(e)||W.isBuffer(e)||W.isStream(e)||W.isFile(e)||W.isBlob(e))return e;if(W.isArrayBufferView(e))return e.buffer;if(W.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(s){if(r.indexOf("application/x-www-form-urlencoded")>-1)return rE(e,this.formSerializer).toString();if((a=W.isFileList(e))||r.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return ao(a?{"files[]":e}:e,l&&new l,this.formSerializer)}}return s||i?(t.setContentType("application/json",!1),oE(e)):e}],transformResponse:[function(e){const t=this.transitional||gl.transitional,r=t&&t.forcedJSONParsing,i=this.responseType==="json";if(e&&W.isString(e)&&(r&&!this.responseType||i)){const o=!(t&&t.silentJSONParsing)&&i;try{return JSON.parse(e)}catch(a){if(o)throw a.name==="SyntaxError"?$e.from(a,$e.ERR_BAD_RESPONSE,this,null,this.response):a}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:rn.classes.FormData,Blob:rn.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};W.forEach(["delete","get","head","post","put","patch"],n=>{gl.headers[n]={}});const yl=gl,aE=W.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),lE=n=>{const e={};let t,r,i;return n&&n.split(`
`).forEach(function(o){i=o.indexOf(":"),t=o.substring(0,i).trim().toLowerCase(),r=o.substring(i+1).trim(),!(!t||e[t]&&aE[t])&&(t==="set-cookie"?e[t]?e[t].push(r):e[t]=[r]:e[t]=e[t]?e[t]+", "+r:r)}),e},vd=Symbol("internals");function di(n){return n&&String(n).trim().toLowerCase()}function ys(n){return n===!1||n==null?n:W.isArray(n)?n.map(ys):String(n)}function cE(n){const e=Object.create(null),t=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=t.exec(n);)e[r[1]]=r[2];return e}const dE=n=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(n.trim());function Oo(n,e,t,r,i){if(W.isFunction(r))return r.call(this,e,t);if(i&&(e=t),!!W.isString(e)){if(W.isString(r))return e.indexOf(r)!==-1;if(W.isRegExp(r))return r.test(e)}}function uE(n){return n.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,t,r)=>t.toUpperCase()+r)}function hE(n,e){const t=W.toCamelCase(" "+e);["get","set","has"].forEach(r=>{Object.defineProperty(n,r+t,{value:function(i,s,o){return this[r].call(this,e,i,s,o)},configurable:!0})})}class lo{constructor(e){e&&this.set(e)}set(e,t,r){const i=this;function s(a,l,c){const d=di(l);if(!d)throw new Error("header name must be a non-empty string");const u=W.findKey(i,d);(!u||i[u]===void 0||c===!0||c===void 0&&i[u]!==!1)&&(i[u||l]=ys(a))}const o=(a,l)=>W.forEach(a,(c,d)=>s(c,d,l));return W.isPlainObject(e)||e instanceof this.constructor?o(e,t):W.isString(e)&&(e=e.trim())&&!dE(e)?o(lE(e),t):e!=null&&s(t,e,r),this}get(e,t){if(e=di(e),e){const r=W.findKey(this,e);if(r){const i=this[r];if(!t)return i;if(t===!0)return cE(i);if(W.isFunction(t))return t.call(this,i,r);if(W.isRegExp(t))return t.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=di(e),e){const r=W.findKey(this,e);return!!(r&&this[r]!==void 0&&(!t||Oo(this,this[r],r,t)))}return!1}delete(e,t){const r=this;let i=!1;function s(o){if(o=di(o),o){const a=W.findKey(r,o);a&&(!t||Oo(r,r[a],a,t))&&(delete r[a],i=!0)}}return W.isArray(e)?e.forEach(s):s(e),i}clear(e){const t=Object.keys(this);let r=t.length,i=!1;for(;r--;){const s=t[r];(!e||Oo(this,this[s],s,e,!0))&&(delete this[s],i=!0)}return i}normalize(e){const t=this,r={};return W.forEach(this,(i,s)=>{const o=W.findKey(r,s);if(o){t[o]=ys(i),delete t[s];return}const a=e?uE(s):String(s).trim();a!==s&&delete t[s],t[a]=ys(i),r[a]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return W.forEach(this,(r,i)=>{r!=null&&r!==!1&&(t[i]=e&&W.isArray(r)?r.join(", "):r)}),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,t])=>e+": "+t).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const r=new this(e);return t.forEach(i=>r.set(i)),r}static accessor(e){const r=(this[vd]=this[vd]={accessors:{}}).accessors,i=this.prototype;function s(o){const a=di(o);r[a]||(hE(i,o),r[a]=!0)}return W.isArray(e)?e.forEach(s):s(e),this}}lo.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);W.reduceDescriptors(lo.prototype,({value:n},e)=>{let t=e[0].toUpperCase()+e.slice(1);return{get:()=>n,set(r){this[t]=r}}});W.freezeMethods(lo);const An=lo;function Fo(n,e){const t=this||yl,r=e||t,i=An.from(r.headers);let s=r.data;return W.forEach(n,function(a){s=a.call(t,s,i.normalize(),e?e.status:void 0)}),i.normalize(),s}function af(n){return!!(n&&n.__CANCEL__)}function Ui(n,e,t){$e.call(this,n??"canceled",$e.ERR_CANCELED,e,t),this.name="CanceledError"}W.inherits(Ui,$e,{__CANCEL__:!0});function fE(n,e,t){const r=t.config.validateStatus;!t.status||!r||r(t.status)?n(t):e(new $e("Request failed with status code "+t.status,[$e.ERR_BAD_REQUEST,$e.ERR_BAD_RESPONSE][Math.floor(t.status/100)-4],t.config,t.request,t))}const pE=rn.hasStandardBrowserEnv?{write(n,e,t,r,i,s){const o=[n+"="+encodeURIComponent(e)];W.isNumber(t)&&o.push("expires="+new Date(t).toGMTString()),W.isString(r)&&o.push("path="+r),W.isString(i)&&o.push("domain="+i),s===!0&&o.push("secure"),document.cookie=o.join("; ")},read(n){const e=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove(n){this.write(n,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function mE(n){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(n)}function gE(n,e){return e?n.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):n}function lf(n,e){return n&&!mE(e)?gE(n,e):e}const yE=rn.hasStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a");let r;function i(s){let o=s;return e&&(t.setAttribute("href",o),o=t.href),t.setAttribute("href",o),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:t.pathname.charAt(0)==="/"?t.pathname:"/"+t.pathname}}return r=i(window.location.href),function(o){const a=W.isString(o)?i(o):o;return a.protocol===r.protocol&&a.host===r.host}}():function(){return function(){return!0}}();function AE(n){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(n);return e&&e[1]||""}function bE(n,e){n=n||10;const t=new Array(n),r=new Array(n);let i=0,s=0,o;return e=e!==void 0?e:1e3,function(l){const c=Date.now(),d=r[s];o||(o=c),t[i]=l,r[i]=c;let u=s,h=0;for(;u!==i;)h+=t[u++],u=u%n;if(i=(i+1)%n,i===s&&(s=(s+1)%n),c-o<e)return;const g=d&&c-d;return g?Math.round(h*1e3/g):void 0}}function Ed(n,e){let t=0;const r=bE(50,250);return i=>{const s=i.loaded,o=i.lengthComputable?i.total:void 0,a=s-t,l=r(a),c=s<=o;t=s;const d={loaded:s,total:o,progress:o?s/o:void 0,bytes:a,rate:l||void 0,estimated:l&&o&&c?(o-s)/l:void 0,event:i};d[e?"download":"upload"]=!0,n(d)}}const vE=typeof XMLHttpRequest<"u",EE=vE&&function(n){return new Promise(function(t,r){let i=n.data;const s=An.from(n.headers).normalize();let{responseType:o,withXSRFToken:a}=n,l;function c(){n.cancelToken&&n.cancelToken.unsubscribe(l),n.signal&&n.signal.removeEventListener("abort",l)}let d;if(W.isFormData(i)){if(rn.hasStandardBrowserEnv||rn.hasStandardBrowserWebWorkerEnv)s.setContentType(!1);else if((d=s.getContentType())!==!1){const[b,...E]=d?d.split(";").map(C=>C.trim()).filter(Boolean):[];s.setContentType([b||"multipart/form-data",...E].join("; "))}}let u=new XMLHttpRequest;if(n.auth){const b=n.auth.username||"",E=n.auth.password?unescape(encodeURIComponent(n.auth.password)):"";s.set("Authorization","Basic "+btoa(b+":"+E))}const h=lf(n.baseURL,n.url);u.open(n.method.toUpperCase(),nf(h,n.params,n.paramsSerializer),!0),u.timeout=n.timeout;function g(){if(!u)return;const b=An.from("getAllResponseHeaders"in u&&u.getAllResponseHeaders()),C={data:!o||o==="text"||o==="json"?u.responseText:u.response,status:u.status,statusText:u.statusText,headers:b,config:n,request:u};fE(function(R){t(R),c()},function(R){r(R),c()},C),u=null}if("onloadend"in u?u.onloadend=g:u.onreadystatechange=function(){!u||u.readyState!==4||u.status===0&&!(u.responseURL&&u.responseURL.indexOf("file:")===0)||setTimeout(g)},u.onabort=function(){u&&(r(new $e("Request aborted",$e.ECONNABORTED,n,u)),u=null)},u.onerror=function(){r(new $e("Network Error",$e.ERR_NETWORK,n,u)),u=null},u.ontimeout=function(){let E=n.timeout?"timeout of "+n.timeout+"ms exceeded":"timeout exceeded";const C=n.transitional||rf;n.timeoutErrorMessage&&(E=n.timeoutErrorMessage),r(new $e(E,C.clarifyTimeoutError?$e.ETIMEDOUT:$e.ECONNABORTED,n,u)),u=null},rn.hasStandardBrowserEnv&&(a&&W.isFunction(a)&&(a=a(n)),a||a!==!1&&yE(h))){const b=n.xsrfHeaderName&&n.xsrfCookieName&&pE.read(n.xsrfCookieName);b&&s.set(n.xsrfHeaderName,b)}i===void 0&&s.setContentType(null),"setRequestHeader"in u&&W.forEach(s.toJSON(),function(E,C){u.setRequestHeader(C,E)}),W.isUndefined(n.withCredentials)||(u.withCredentials=!!n.withCredentials),o&&o!=="json"&&(u.responseType=n.responseType),typeof n.onDownloadProgress=="function"&&u.addEventListener("progress",Ed(n.onDownloadProgress,!0)),typeof n.onUploadProgress=="function"&&u.upload&&u.upload.addEventListener("progress",Ed(n.onUploadProgress)),(n.cancelToken||n.signal)&&(l=b=>{u&&(r(!b||b.type?new Ui(null,n,u):b),u.abort(),u=null)},n.cancelToken&&n.cancelToken.subscribe(l),n.signal&&(n.signal.aborted?l():n.signal.addEventListener("abort",l)));const y=AE(h);if(y&&rn.protocols.indexOf(y)===-1){r(new $e("Unsupported protocol "+y+":",$e.ERR_BAD_REQUEST,n));return}u.send(i||null)})},Ta={http:jv,xhr:EE};W.forEach(Ta,(n,e)=>{if(n){try{Object.defineProperty(n,"name",{value:e})}catch{}Object.defineProperty(n,"adapterName",{value:e})}});const xd=n=>`- ${n}`,xE=n=>W.isFunction(n)||n===null||n===!1,cf={getAdapter:n=>{n=W.isArray(n)?n:[n];const{length:e}=n;let t,r;const i={};for(let s=0;s<e;s++){t=n[s];let o;if(r=t,!xE(t)&&(r=Ta[(o=String(t)).toLowerCase()],r===void 0))throw new $e(`Unknown adapter '${o}'`);if(r)break;i[o||"#"+s]=r}if(!r){const s=Object.entries(i).map(([a,l])=>`adapter ${a} `+(l===!1?"is not supported by the environment":"is not available in the build"));let o=e?s.length>1?`since :
`+s.map(xd).join(`
`):" "+xd(s[0]):"as no adapter specified";throw new $e("There is no suitable adapter to dispatch the request "+o,"ERR_NOT_SUPPORT")}return r},adapters:Ta};function Mo(n){if(n.cancelToken&&n.cancelToken.throwIfRequested(),n.signal&&n.signal.aborted)throw new Ui(null,n)}function Sd(n){return Mo(n),n.headers=An.from(n.headers),n.data=Fo.call(n,n.transformRequest),["post","put","patch"].indexOf(n.method)!==-1&&n.headers.setContentType("application/x-www-form-urlencoded",!1),cf.getAdapter(n.adapter||yl.adapter)(n).then(function(r){return Mo(n),r.data=Fo.call(n,n.transformResponse,r),r.headers=An.from(r.headers),r},function(r){return af(r)||(Mo(n),r&&r.response&&(r.response.data=Fo.call(n,n.transformResponse,r.response),r.response.headers=An.from(r.response.headers))),Promise.reject(r)})}const Td=n=>n instanceof An?n.toJSON():n;function kr(n,e){e=e||{};const t={};function r(c,d,u){return W.isPlainObject(c)&&W.isPlainObject(d)?W.merge.call({caseless:u},c,d):W.isPlainObject(d)?W.merge({},d):W.isArray(d)?d.slice():d}function i(c,d,u){if(W.isUndefined(d)){if(!W.isUndefined(c))return r(void 0,c,u)}else return r(c,d,u)}function s(c,d){if(!W.isUndefined(d))return r(void 0,d)}function o(c,d){if(W.isUndefined(d)){if(!W.isUndefined(c))return r(void 0,c)}else return r(void 0,d)}function a(c,d,u){if(u in e)return r(c,d);if(u in n)return r(void 0,c)}const l={url:s,method:s,data:s,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(c,d)=>i(Td(c),Td(d),!0)};return W.forEach(Object.keys(Object.assign({},n,e)),function(d){const u=l[d]||i,h=u(n[d],e[d],d);W.isUndefined(h)&&u!==a||(t[d]=h)}),t}const df="1.6.7",Al={};["object","boolean","number","function","string","symbol"].forEach((n,e)=>{Al[n]=function(r){return typeof r===n||"a"+(e<1?"n ":" ")+n}});const Cd={};Al.transitional=function(e,t,r){function i(s,o){return"[Axios v"+df+"] Transitional option '"+s+"'"+o+(r?". "+r:"")}return(s,o,a)=>{if(e===!1)throw new $e(i(o," has been removed"+(t?" in "+t:"")),$e.ERR_DEPRECATED);return t&&!Cd[o]&&(Cd[o]=!0,console.warn(i(o," has been deprecated since v"+t+" and will be removed in the near future"))),e?e(s,o,a):!0}};function SE(n,e,t){if(typeof n!="object")throw new $e("options must be an object",$e.ERR_BAD_OPTION_VALUE);const r=Object.keys(n);let i=r.length;for(;i-- >0;){const s=r[i],o=e[s];if(o){const a=n[s],l=a===void 0||o(a,s,n);if(l!==!0)throw new $e("option "+s+" must be "+l,$e.ERR_BAD_OPTION_VALUE);continue}if(t!==!0)throw new $e("Unknown option "+s,$e.ERR_BAD_OPTION)}}const Ca={assertOptions:SE,validators:Al},wn=Ca.validators;class Ps{constructor(e){this.defaults=e,this.interceptors={request:new bd,response:new bd}}async request(e,t){try{return await this._request(e,t)}catch(r){if(r instanceof Error){let i;Error.captureStackTrace?Error.captureStackTrace(i={}):i=new Error;const s=i.stack?i.stack.replace(/^.+\n/,""):"";r.stack?s&&!String(r.stack).endsWith(s.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+s):r.stack=s}throw r}}_request(e,t){typeof e=="string"?(t=t||{},t.url=e):t=e||{},t=kr(this.defaults,t);const{transitional:r,paramsSerializer:i,headers:s}=t;r!==void 0&&Ca.assertOptions(r,{silentJSONParsing:wn.transitional(wn.boolean),forcedJSONParsing:wn.transitional(wn.boolean),clarifyTimeoutError:wn.transitional(wn.boolean)},!1),i!=null&&(W.isFunction(i)?t.paramsSerializer={serialize:i}:Ca.assertOptions(i,{encode:wn.function,serialize:wn.function},!0)),t.method=(t.method||this.defaults.method||"get").toLowerCase();let o=s&&W.merge(s.common,s[t.method]);s&&W.forEach(["delete","get","head","post","put","patch","common"],y=>{delete s[y]}),t.headers=An.concat(o,s);const a=[];let l=!0;this.interceptors.request.forEach(function(b){typeof b.runWhen=="function"&&b.runWhen(t)===!1||(l=l&&b.synchronous,a.unshift(b.fulfilled,b.rejected))});const c=[];this.interceptors.response.forEach(function(b){c.push(b.fulfilled,b.rejected)});let d,u=0,h;if(!l){const y=[Sd.bind(this),void 0];for(y.unshift.apply(y,a),y.push.apply(y,c),h=y.length,d=Promise.resolve(t);u<h;)d=d.then(y[u++],y[u++]);return d}h=a.length;let g=t;for(u=0;u<h;){const y=a[u++],b=a[u++];try{g=y(g)}catch(E){b.call(this,E);break}}try{d=Sd.call(this,g)}catch(y){return Promise.reject(y)}for(u=0,h=c.length;u<h;)d=d.then(c[u++],c[u++]);return d}getUri(e){e=kr(this.defaults,e);const t=lf(e.baseURL,e.url);return nf(t,e.params,e.paramsSerializer)}}W.forEach(["delete","get","head","options"],function(e){Ps.prototype[e]=function(t,r){return this.request(kr(r||{},{method:e,url:t,data:(r||{}).data}))}});W.forEach(["post","put","patch"],function(e){function t(r){return function(s,o,a){return this.request(kr(a||{},{method:e,headers:r?{"Content-Type":"multipart/form-data"}:{},url:s,data:o}))}}Ps.prototype[e]=t(),Ps.prototype[e+"Form"]=t(!0)});const As=Ps;class bl{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let t;this.promise=new Promise(function(s){t=s});const r=this;this.promise.then(i=>{if(!r._listeners)return;let s=r._listeners.length;for(;s-- >0;)r._listeners[s](i);r._listeners=null}),this.promise.then=i=>{let s;const o=new Promise(a=>{r.subscribe(a),s=a}).then(i);return o.cancel=function(){r.unsubscribe(s)},o},e(function(s,o,a){r.reason||(r.reason=new Ui(s,o,a),t(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);t!==-1&&this._listeners.splice(t,1)}static source(){let e;return{token:new bl(function(i){e=i}),cancel:e}}}const TE=bl;function CE(n){return function(t){return n.apply(null,t)}}function wE(n){return W.isObject(n)&&n.isAxiosError===!0}const wa={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(wa).forEach(([n,e])=>{wa[e]=n});const kE=wa;function uf(n){const e=new As(n),t=zh(As.prototype.request,e);return W.extend(t,As.prototype,e,{allOwnKeys:!0}),W.extend(t,e,null,{allOwnKeys:!0}),t.create=function(i){return uf(kr(n,i))},t}const lt=uf(yl);lt.Axios=As;lt.CanceledError=Ui;lt.CancelToken=TE;lt.isCancel=af;lt.VERSION=df;lt.toFormData=ao;lt.AxiosError=$e;lt.Cancel=lt.CanceledError;lt.all=function(e){return Promise.all(e)};lt.spread=CE;lt.isAxiosError=wE;lt.mergeConfig=kr;lt.AxiosHeaders=An;lt.formToJSON=n=>of(W.isHTMLForm(n)?new FormData(n):n);lt.getAdapter=cf.getAdapter;lt.HttpStatusCode=kE;lt.default=lt;const ui=lt,sC=Dh("animesHistory",{state:()=>({history_list:[],max_history_len:100,history_page_item_num:2,search_history:[],max_search_hists:50,max_show_search_hists:10}),getters:{show_last_search_hist(n){const e=[];for(let t=n.search_history.length-1;t>=0&&(e.push(n.search_history[t]),!(e.length>=n.max_show_search_hists));t-=1);return e},history_len(n){return n.history_list.length},history_page_num(n){return Math.ceil(n.history_list.length/n.history_page_item_num)}},actions:{reverse_hist(n){const e=[];let t=0,r=this.history_list.length-1;for(let i=1;i<n;i++)r-=this.history_page_item_num;for(let i=r;i>=0&&(e.push(this.history_list[i]),t+=1,!(t>=this.history_page_item_num));i-=1);return e},play_anime(n,e,t,r,i){for(let a=0;a<this.history_list.length;a++)if(this.history_list[a].name_cn==n){this.history_list.splice(a,1);break}this.history_list.length>=this.max_history_len&&this.history_list.splice(0,this.history_list.length-this.max_history_len-1);const s=Date.now(),o={name_cn:n,play_time:s,play_progress:{ep_title:r,ep_idx:t},play_src_idx:e,img_link:i};this.history_list.push(o)},search_anime(n){if(n!=null&&n!=null&&n!=""){const e=this.search_history.indexOf(n);e!==-1&&this.search_history.splice(e,1),this.search_history.push(n),this.search_history.length>this.max_search_hists&&this.search_history.splice(0,this.search_history.length-this.max_search_hists)}},clear_search_list(){this.search_history.length>0&&(this.search_history=[])}},persist:!0});const wd="http://121.89.219.65:5656/",oC=Dh("animesSrc",{state:()=>({animes_search_res:[],anime_class_list:[],anime_srcs_list:["天空","非凡","飞速"],search_res_page_num:0}),getters:{},actions:{get_anime_types(n){const e=[];for(let t=0;t<n.length;t++){e.push([]);for(let r=0;r<n[t].length;r++)e[t].push({type_id:n[t][r].type_id,type_name:n[t][r].type_name})}return e},set_anime_types(n){this.anime_class_list=this.get_anime_types(n)},set_anime_srcs(n){this.animes_search_res=[];for(let e=0;e<n.length;e++){this.animes_search_res.push([]);for(let t=0;t<n[e].srcs_val.length;t++)this.animes_search_res[e].push({srcs:{vod_id:n[e].srcs_val[t].vod_id,type_id:n[e].srcs_val[t].type_id,vod_name:n[e].srcs_val[t].vod_name,vod_sub:n[e].srcs_val[t].vod_sub,vod_class:n[e].srcs_val[t].vod_class,vod_pic:n[e].srcs_val[t].vod_pic,vod_actor:n[e].srcs_val[t].vod_actor,vod_director:n[e].srcs_val[t].vod_director,vod_writer:n[e].srcs_val[t].vod_writer,vod_blurb:n[e].srcs_val[t].vod_blurb,vod_remarks:n[e].srcs_val[t].vod_remarks,vod_pubdate:n[e].srcs_val[t].vod_pubdate,vod_serial:n[e].srcs_val[t].vod_serial,vod_area:n[e].srcs_val[t].vod_area,vod_lang:n[e].srcs_val[t].vod_lang,vod_year:n[e].srcs_val[t].vod_year,type_name:n[e].srcs_val[t].type_name,vod_douban_id:n[e].srcs_val[t].vod_douban_id,vod_douban_score:n[e].srcs_val[t].vod_douban_score,vod_play_url:n[e].srcs_val[t].vod_play_url,vod_time:n[e].srcs_val[t].vod_time},srcs_idx:n[e].srcs_idx[t]})}},get_anime_srcs(n){const e=[];for(let t=0;t<n.srcs_val.length;t++)e.push({srcs:{vod_id:n.srcs_val[t].vod_id,type_id:n.srcs_val[t].type_id,vod_name:n.srcs_val[t].vod_name,vod_sub:n.srcs_val[t].vod_sub,vod_class:n.srcs_val[t].vod_class,vod_pic:n.srcs_val[t].vod_pic,vod_actor:n.srcs_val[t].vod_actor,vod_director:n.srcs_val[t].vod_director,vod_writer:n.srcs_val[t].vod_writer,vod_blurb:n.srcs_val[t].vod_blurb,vod_remarks:n.srcs_val[t].vod_remarks,vod_pubdate:n.srcs_val[t].vod_pubdate,vod_serial:n.srcs_val[t].vod_serial,vod_area:n.srcs_val[t].vod_area,vod_lang:n.srcs_val[t].vod_lang,vod_year:n.srcs_val[t].vod_year,type_name:n.srcs_val[t].type_name,vod_douban_id:n.srcs_val[t].vod_douban_id,vod_douban_score:n.srcs_val[t].vod_douban_score,vod_play_url:n.srcs_val[t].vod_play_url,vod_time:n.srcs_val[t].vod_time},srcs_idx:n.srcs_idx[t]});return e},async search_animes(n,e){const r=(await ui.get(wd+"api/animes/list?msg="+n+"&pg="+e)).data;this.set_anime_types(r.srcs_classes),this.set_anime_srcs(r.animes),this.search_res_page_num=r.res_page_num},async obtain_anime_detail(n){return(await ui.get(wd+"api/animes/play?animeName="+n)).data},async obtain_anime_bgm_detail(n){const t=(await ui.get("https://api.bgm.tv/search/subject/"+n+"?start=0&responseGroup=large&max_results=1&type=2")).data,i=(await ui.get("https://api.bgm.tv/v0/subjects/"+t.list[0].id)).data;return{date:i.date,images:i.images,summary:i.summary,name:i.name,name_cn:i.name_cn,tags:i.tags,infobox:i.infobox,rating:i.rating,total_episodes:i.total_episodes}},async pre_obtain_commend_keys(n){const t=(await ui.get("https://api.bgm.tv/search/subject/"+n+"?start=0&responseGroup=large&max_results=10&type=2")).data,r=[];for(let i=0;i<t.list.length;i++)r.push(t.list[i].name_cn);return r}}});var LE=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function RE(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var hf={exports:{}};(function(n,e){(function(t,r){n.exports=r()})(self,()=>(()=>{var t={916:(o,a,l)=>{var c=l(471);o.exports=function(d){var u,h="",g=(d=d||{}).video,y=d.options,b=c.$escape,E=d.tran,C=d.icons,w=d.index,R=c.$each;return d.$value,d.$index,h+=`<div class="dplayer-mask"></div>
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
`)}},937:o=>{function a(l){return a=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(c){return typeof c}:function(c){return c&&typeof Symbol=="function"&&c.constructor===Symbol&&c!==Symbol.prototype?"symbol":typeof c},a(l)}o.exports=(typeof self>"u"?"undefined":a(self))=="object"?self.FormData:window.FormData},831:o=>{o.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAADGCAYAAAAT+OqFAAAAdklEQVQoz42QQQ7AIAgEF/T/D+kbq/RWAlnQyyazA4aoAB4FsBSA/bFjuF1EOL7VbrIrBuusmrt4ZZORfb6ehbWdnRHEIiITaEUKa5EJqUakRSaEYBJSCY2dEstQY7AuxahwXFrvZmWl2rh4JZ07z9dLtesfNj5q0FU3A5ObbwAAAABJRU5ErkJggg=="}},r={};function i(o){var a=r[o];if(a!==void 0)return a.exports;var l=r[o]={id:o,exports:{}};return t[o](l,l.exports,i),l.exports}i.m=t,i.n=o=>{var a=o&&o.__esModule?()=>o.default:()=>o;return i.d(a,{a}),a},i.d=(o,a)=>{for(var l in a)i.o(a,l)&&!i.o(o,l)&&Object.defineProperty(o,l,{enumerable:!0,get:a[l]})},i.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}}(),i.o=(o,a)=>Object.prototype.hasOwnProperty.call(o,a),i.b=document.baseURI||self.location.href,i.nc=void 0;var s={};return(()=>{i.d(s,{default:()=>Sm});var o=i(856),a=i.n(o),l=i(470),c=i.n(l),d=i(370),u=i.n(d),h=i(458),g=i.n(h),y=i(278),b=i.n(y),E=i(488),C=i.n(E),w=i(685),R={};R.styleTagTransform=C(),R.setAttributes=g(),R.insert=u().bind(null,"head"),R.domAPI=c(),R.insertStyleElement=b(),a()(w.Z,R),w.Z&&w.Z.locals&&w.Z.locals;function _(p){return _=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(m){return typeof m}:function(m){return m&&typeof Symbol=="function"&&m.constructor===Symbol&&m!==Symbol.prototype?"symbol":typeof m},_(p)}function P(p,m){this.name="AggregateError",this.errors=p,this.message=m||""}P.prototype=Error.prototype;function H(p){return H=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(m){return typeof m}:function(m){return m&&typeof Symbol=="function"&&m.constructor===Symbol&&m!==Symbol.prototype?"symbol":typeof m},H(p)}var U=setTimeout;function z(p){return!!(p&&p.length!==void 0)}function Q(){}function F(p){if(!(this instanceof F))throw new TypeError("Promises must be constructed via new");if(typeof p!="function")throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],ne(p,this)}function Y(p,m){for(;p._state===3;)p=p._value;p._state!==0?(p._handled=!0,F._immediateFn(function(){var x=p._state===1?m.onFulfilled:m.onRejected;if(x!==null){var f;try{f=x(p._value)}catch(A){return void te(m.promise,A)}Ae(m.promise,f)}else(p._state===1?Ae:te)(m.promise,p._value)})):p._deferreds.push(m)}function Ae(p,m){try{if(m===p)throw new TypeError("A promise cannot be resolved with itself.");if(m&&(H(m)==="object"||typeof m=="function")){var x=m.then;if(m instanceof F)return p._state=3,p._value=m,void Se(p);if(typeof x=="function")return void ne((f=x,A=m,function(){f.apply(A,arguments)}),p)}p._state=1,p._value=m,Se(p)}catch(v){te(p,v)}var f,A}function te(p,m){p._state=2,p._value=m,Se(p)}function Se(p){p._state===2&&p._deferreds.length===0&&F._immediateFn(function(){p._handled||F._unhandledRejectionFn(p._value)});for(var m=0,x=p._deferreds.length;m<x;m++)Y(p,p._deferreds[m]);p._deferreds=null}function ve(p,m,x){this.onFulfilled=typeof p=="function"?p:null,this.onRejected=typeof m=="function"?m:null,this.promise=x}function ne(p,m){var x=!1;try{p(function(f){x||(x=!0,Ae(m,f))},function(f){x||(x=!0,te(m,f))})}catch(f){if(x)return;x=!0,te(m,f)}}F.prototype.catch=function(p){return this.then(null,p)},F.prototype.then=function(p,m){var x=new this.constructor(Q);return Y(this,new ve(p,m,x)),x},F.prototype.finally=function(p){var m=this.constructor;return this.then(function(x){return m.resolve(p()).then(function(){return x})},function(x){return m.resolve(p()).then(function(){return m.reject(x)})})},F.all=function(p){return new F(function(m,x){if(!z(p))return x(new TypeError("Promise.all accepts an array"));var f=Array.prototype.slice.call(p);if(f.length===0)return m([]);var A=f.length;function v(k,L){try{if(L&&(H(L)==="object"||typeof L=="function")){var N=L.then;if(typeof N=="function")return void N.call(L,function(G){v(k,G)},x)}f[k]=L,--A==0&&m(f)}catch(G){x(G)}}for(var S=0;S<f.length;S++)v(S,f[S])})},F.any=function(p){var m=this;return new m(function(x,f){if(!p||p.length===void 0)return f(new TypeError("Promise.any accepts an array"));var A=Array.prototype.slice.call(p);if(A.length===0)return f();for(var v=[],S=0;S<A.length;S++)try{m.resolve(A[S]).then(x).catch(function(k){v.push(k),v.length===A.length&&f(new P(v,"All promises were rejected"))})}catch(k){f(k)}})},F.allSettled=function(p){return new this(function(m,x){if(!p||p.length===void 0)return x(new TypeError(_(p)+" "+p+" is not iterable(cannot read property Symbol(Symbol.iterator))"));var f=Array.prototype.slice.call(p);if(f.length===0)return m([]);var A=f.length;function v(k,L){if(L&&(_(L)==="object"||typeof L=="function")){var N=L.then;if(typeof N=="function")return void N.call(L,function(G){v(k,G)},function(G){f[k]={status:"rejected",reason:G},--A==0&&m(f)})}f[k]={status:"fulfilled",value:L},--A==0&&m(f)}for(var S=0;S<f.length;S++)v(S,f[S])})},F.resolve=function(p){return p&&H(p)==="object"&&p.constructor===F?p:new F(function(m){m(p)})},F.reject=function(p){return new F(function(m,x){x(p)})},F.race=function(p){return new F(function(m,x){if(!z(p))return x(new TypeError("Promise.race accepts an array"));for(var f=0,A=p.length;f<A;f++)F.resolve(p[f]).then(m,x)})},F._immediateFn=typeof setImmediate=="function"&&function(p){setImmediate(p)}||function(p){U(p,0)},F._unhandledRejectionFn=function(p){typeof console<"u"&&console&&console.warn("Possible Unhandled Promise Rejection:",p)};const ye=F;var me=/mobile/i.test(window.navigator.userAgent);const q={secondToTime:function(p){if((p=p||0)===0||p===1/0||p.toString()==="NaN")return"00:00";var m=Math.floor(p/3600),x=Math.floor((p-3600*m)/60),f=Math.floor(p-3600*m-60*x);return(m>0?[m,x,f]:[x,f]).map(function(A){return A<10?"0"+A:""+A}).join(":")},getElementViewLeft:function(p){var m=p.offsetLeft,x=p.offsetParent,f=document.body.scrollLeft+document.documentElement.scrollLeft;if(document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement)for(;x!==null&&x!==p;)m+=x.offsetLeft,x=x.offsetParent;else for(;x!==null;)m+=x.offsetLeft,x=x.offsetParent;return m-f},getBoundingClientRectViewLeft:function(p){var m=window.scrollY||window.pageYOffset||document.body.scrollTop+(document.documentElement&&document.documentElement.scrollTop||0);if(p.getBoundingClientRect){if(typeof this.getBoundingClientRectViewLeft.offset!="number"){var x=document.createElement("div");x.style.cssText="position:absolute;top:0;left:0;",document.body.appendChild(x),this.getBoundingClientRectViewLeft.offset=-x.getBoundingClientRect().top-m,document.body.removeChild(x),x=null}var f=p.getBoundingClientRect(),A=this.getBoundingClientRectViewLeft.offset;return f.left+A}return this.getElementViewLeft(p)},getScrollPosition:function(){return{left:window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0,top:window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0}},setScrollPosition:function(p){var m=p.left,x=m===void 0?0:m,f=p.top,A=f===void 0?0:f;this.isFirefox?(document.documentElement.scrollLeft=x,document.documentElement.scrollTop=A):window.scrollTo(x,A)},isMobile:me,isFirefox:/firefox/i.test(window.navigator.userAgent),isChrome:/chrome/i.test(window.navigator.userAgent),isSafari:/safari/i.test(window.navigator.userAgent),storage:{set:function(p,m){localStorage.setItem(p,m)},get:function(p){return localStorage.getItem(p)}},nameMap:{dragStart:me?"touchstart":"mousedown",dragMove:me?"touchmove":"mousemove",dragEnd:me?"touchend":"mouseup"},color2Number:function(p){return p[0]==="#"&&(p=p.substr(1)),p.length===3&&(p="".concat(p[0]).concat(p[0]).concat(p[1]).concat(p[1]).concat(p[2]).concat(p[2])),parseInt(p,16)+0&16777215},number2Color:function(p){return"#"+("00000"+p.toString(16)).slice(-6)},number2Type:function(p){switch(p){case 0:default:return"right";case 1:return"top";case 2:return"bottom"}}};function ae(p,m){return function(){return p.apply(m,arguments)}}function Re(p){return Re=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(m){return typeof m}:function(m){return m&&typeof Symbol=="function"&&m.constructor===Symbol&&m!==Symbol.prototype?"symbol":typeof m},Re(p)}var xe,Fe=Object.prototype.toString,ze=Object.getPrototypeOf,Je=(xe=Object.create(null),function(p){var m=Fe.call(p);return xe[m]||(xe[m]=m.slice(8,-1).toLowerCase())}),Pe=function(p){return p=p.toLowerCase(),function(m){return Je(m)===p}},K=function(p){return function(m){return Re(m)===p}},ce=Array.isArray,re=K("undefined"),Ee=Pe("ArrayBuffer"),Ke=K("string"),I=K("function"),D=K("number"),O=function(p){return p!==null&&Re(p)==="object"},j=function(p){if(Je(p)!=="object")return!1;var m=ze(p);return!(m!==null&&m!==Object.prototype&&Object.getPrototypeOf(m)!==null||Symbol.toStringTag in p||Symbol.iterator in p)},X=Pe("Date"),ee=Pe("File"),he=Pe("Blob"),ie=Pe("FileList"),le=Pe("URLSearchParams");function Z(p,m){var x,f,A=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},v=A.allOwnKeys,S=v!==void 0&&v;if(p!=null)if(Re(p)!=="object"&&(p=[p]),ce(p))for(x=0,f=p.length;x<f;x++)m.call(null,p[x],x,p);else{var k,L=S?Object.getOwnPropertyNames(p):Object.keys(p),N=L.length;for(x=0;x<N;x++)k=L[x],m.call(null,p[k],k,p)}}function Te(p,m){m=m.toLowerCase();for(var x,f=Object.keys(p),A=f.length;A-- >0;)if(m===(x=f[A]).toLowerCase())return x;return null}var ge,Ce,Ie=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:LE,Me=function(p){return!re(p)&&p!==Ie},Ye=(ge=typeof Uint8Array<"u"&&ze(Uint8Array),function(p){return ge&&p instanceof ge}),je=Pe("HTMLFormElement"),it=(Ce=Object.prototype.hasOwnProperty,function(p,m){return Ce.call(p,m)}),It=Pe("RegExp"),dn=function(p,m){var x=Object.getOwnPropertyDescriptors(p),f={};Z(x,function(A,v){m(A,v,p)!==!1&&(f[v]=A)}),Object.defineProperties(p,f)};const V={isArray:ce,isArrayBuffer:Ee,isBuffer:function(p){return p!==null&&!re(p)&&p.constructor!==null&&!re(p.constructor)&&I(p.constructor.isBuffer)&&p.constructor.isBuffer(p)},isFormData:function(p){var m="[object FormData]";return p&&(typeof FormData=="function"&&p instanceof FormData||Fe.call(p)===m||I(p.toString)&&p.toString()===m)},isArrayBufferView:function(p){return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?ArrayBuffer.isView(p):p&&p.buffer&&Ee(p.buffer)},isString:Ke,isNumber:D,isBoolean:function(p){return p===!0||p===!1},isObject:O,isPlainObject:j,isUndefined:re,isDate:X,isFile:ee,isBlob:he,isRegExp:It,isFunction:I,isStream:function(p){return O(p)&&I(p.pipe)},isURLSearchParams:le,isTypedArray:Ye,isFileList:ie,forEach:Z,merge:function p(){for(var m=Me(this)&&this||{},x=m.caseless,f={},A=function(k,L){var N=x&&Te(f,L)||L;j(f[N])&&j(k)?f[N]=p(f[N],k):j(k)?f[N]=p({},k):ce(k)?f[N]=k.slice():f[N]=k},v=0,S=arguments.length;v<S;v++)arguments[v]&&Z(arguments[v],A);return f},extend:function(p,m,x){var f=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},A=f.allOwnKeys;return Z(m,function(v,S){x&&I(v)?p[S]=ae(v,x):p[S]=v},{allOwnKeys:A}),p},trim:function(p){return p.trim?p.trim():p.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")},stripBOM:function(p){return p.charCodeAt(0)===65279&&(p=p.slice(1)),p},inherits:function(p,m,x,f){p.prototype=Object.create(m.prototype,f),p.prototype.constructor=p,Object.defineProperty(p,"super",{value:m.prototype}),x&&Object.assign(p.prototype,x)},toFlatObject:function(p,m,x,f){var A,v,S,k={};if(m=m||{},p==null)return m;do{for(v=(A=Object.getOwnPropertyNames(p)).length;v-- >0;)S=A[v],f&&!f(S,p,m)||k[S]||(m[S]=p[S],k[S]=!0);p=x!==!1&&ze(p)}while(p&&(!x||x(p,m))&&p!==Object.prototype);return m},kindOf:Je,kindOfTest:Pe,endsWith:function(p,m,x){p=String(p),(x===void 0||x>p.length)&&(x=p.length),x-=m.length;var f=p.indexOf(m,x);return f!==-1&&f===x},toArray:function(p){if(!p)return null;if(ce(p))return p;var m=p.length;if(!D(m))return null;for(var x=new Array(m);m-- >0;)x[m]=p[m];return x},forEachEntry:function(p,m){for(var x,f=(p&&p[Symbol.iterator]).call(p);(x=f.next())&&!x.done;){var A=x.value;m.call(p,A[0],A[1])}},matchAll:function(p,m){for(var x,f=[];(x=p.exec(m))!==null;)f.push(x);return f},isHTMLForm:je,hasOwnProperty:it,hasOwnProp:it,reduceDescriptors:dn,freezeMethods:function(p){dn(p,function(m,x){if(I(p)&&["arguments","caller","callee"].indexOf(x)!==-1)return!1;var f=p[x];I(f)&&(m.enumerable=!1,"writable"in m?m.writable=!1:m.set||(m.set=function(){throw Error("Can not rewrite read-only method '"+x+"'")}))})},toObjectSet:function(p,m){var x={},f=function(A){A.forEach(function(v){x[v]=!0})};return ce(p)?f(p):f(String(p).split(m)),x},toCamelCase:function(p){return p.toLowerCase().replace(/[_-\s]([a-z\d])(\w*)/g,function(m,x,f){return x.toUpperCase()+f})},noop:function(){},toFiniteNumber:function(p,m){return p=+p,Number.isFinite(p)?p:m},findKey:Te,global:Ie,isContextDefined:Me,toJSONObject:function(p){var m=new Array(10);return function x(f,A){if(O(f)){if(m.indexOf(f)>=0)return;if(!("toJSON"in f)){m[A]=f;var v=ce(f)?[]:{};return Z(f,function(S,k){var L=x(S,A+1);!re(L)&&(v[k]=L)}),m[A]=void 0,v}}return f}(p,0)}};function Dt(p,m,x,f,A){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=p,this.name="AxiosError",m&&(this.code=m),x&&(this.config=x),f&&(this.request=f),A&&(this.response=A)}V.inherits(Dt,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:V.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var Mr=Dt.prototype,vt={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(function(p){vt[p]={value:p}}),Object.defineProperties(Dt,vt),Object.defineProperty(Mr,"isAxiosError",{value:!0}),Dt.from=function(p,m,x,f,A,v){var S=Object.create(Mr);return V.toFlatObject(p,S,function(k){return k!==Error.prototype},function(k){return k!=="isAxiosError"}),Dt.call(S,p.message,m,x,f,A),S.cause=p,S.name=p.name,v&&Object.assign(S,v),S};const Ne=Dt,$i=i(937);function ho(p){return ho=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(m){return typeof m}:function(m){return m&&typeof Symbol=="function"&&m.constructor===Symbol&&m!==Symbol.prototype?"symbol":typeof m},ho(p)}function fo(p){return V.isPlainObject(p)||V.isArray(p)}function Ul(p){return V.endsWith(p,"[]")?p.slice(0,-2):p}function $l(p,m,x){return p?p.concat(m).map(function(f,A){return f=Ul(f),!x&&A?"["+f+"]":f}).join(x?".":""):m}var Sp=V.toFlatObject(V,{},null,function(p){return/^is[A-Z]/.test(p)});const Hi=function(p,m,x){if(!V.isObject(p))throw new TypeError("target must be an object");m=m||new($i||FormData);var f,A=(x=V.toFlatObject(x,{metaTokens:!0,dots:!1,indexes:!1},!1,function(fe,ue){return!V.isUndefined(ue[fe])})).metaTokens,v=x.visitor||G,S=x.dots,k=x.indexes,L=(x.Blob||typeof Blob<"u"&&Blob)&&(f=m)&&V.isFunction(f.append)&&f[Symbol.toStringTag]==="FormData"&&f[Symbol.iterator];if(!V.isFunction(v))throw new TypeError("visitor must be a function");function N(fe){if(fe===null)return"";if(V.isDate(fe))return fe.toISOString();if(!L&&V.isBlob(fe))throw new Ne("Blob is not supported. Use a Buffer instead.");return V.isArrayBuffer(fe)||V.isTypedArray(fe)?L&&typeof Blob=="function"?new Blob([fe]):Buffer.from(fe):fe}function G(fe,ue,oe){var be=fe;if(fe&&!oe&&ho(fe)==="object"){if(V.endsWith(ue,"{}"))ue=A?ue:ue.slice(0,-2),fe=JSON.stringify(fe);else if(V.isArray(fe)&&function(_e){return V.isArray(_e)&&!_e.some(fo)}(fe)||V.isFileList(fe)||V.endsWith(ue,"[]")&&(be=V.toArray(fe)))return ue=Ul(ue),be.forEach(function(_e,ut){!V.isUndefined(_e)&&_e!==null&&m.append(k===!0?$l([ue],ut,S):k===null?ue:ue+"[]",N(_e))}),!1}return!!fo(fe)||(m.append($l(oe,ue,S),N(fe)),!1)}var se=[],de=Object.assign(Sp,{defaultVisitor:G,convertValue:N,isVisitable:fo});if(!V.isObject(p))throw new TypeError("data must be an object");return function fe(ue,oe){if(!V.isUndefined(ue)){if(se.indexOf(ue)!==-1)throw Error("Circular reference detected in "+oe.join("."));se.push(ue),V.forEach(ue,function(be,_e){(!(V.isUndefined(be)||be===null)&&v.call(m,be,V.isString(_e)?_e.trim():_e,oe,de))===!0&&fe(be,oe?oe.concat(_e):[_e])}),se.pop()}}(p),m};function Hl(p){var m={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(p).replace(/[!'()~]|%20|%00/g,function(x){return m[x]})}function Gl(p,m){this._pairs=[],p&&Hi(p,this,m)}var Kl=Gl.prototype;Kl.append=function(p,m){this._pairs.push([p,m])},Kl.toString=function(p){var m=p?function(x){return p.call(this,x,Hl)}:Hl;return this._pairs.map(function(x){return m(x[0])+"="+m(x[1])},"").join("&")};const zl=Gl;function Tp(p){return encodeURIComponent(p).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function jl(p,m,x){if(!m)return p;var f,A=x&&x.encode||Tp,v=x&&x.serialize;if(f=v?v(m,x):V.isURLSearchParams(m)?m.toString():new zl(m,x).toString(A)){var S=p.indexOf("#");S!==-1&&(p=p.slice(0,S)),p+=(p.indexOf("?")===-1?"?":"&")+f}return p}function Nr(p){return Nr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(m){return typeof m}:function(m){return m&&typeof Symbol=="function"&&m.constructor===Symbol&&m!==Symbol.prototype?"symbol":typeof m},Nr(p)}function Cp(p,m){for(var x=0;x<m.length;x++){var f=m[x];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(p,(A=function(v,S){if(Nr(v)!=="object"||v===null)return v;var k=v[Symbol.toPrimitive];if(k!==void 0){var L=k.call(v,"string");if(Nr(L)!=="object")return L;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(v)}(f.key),Nr(A)==="symbol"?A:String(A)),f)}var A}var wp=function(){function p(){(function(f,A){if(!(f instanceof A))throw new TypeError("Cannot call a class as a function")})(this,p),this.handlers=[]}var m,x;return m=p,x=[{key:"use",value:function(f,A,v){return this.handlers.push({fulfilled:f,rejected:A,synchronous:!!v&&v.synchronous,runWhen:v?v.runWhen:null}),this.handlers.length-1}},{key:"eject",value:function(f){this.handlers[f]&&(this.handlers[f]=null)}},{key:"clear",value:function(){this.handlers&&(this.handlers=[])}},{key:"forEach",value:function(f){V.forEach(this.handlers,function(A){A!==null&&f(A)})}}],x&&Cp(m.prototype,x),Object.defineProperty(m,"prototype",{writable:!1}),p}();const ql=wp,Vl={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},kp=typeof URLSearchParams<"u"?URLSearchParams:zl,Lp=FormData;var po,Rp=(typeof navigator>"u"||(po=navigator.product)!=="ReactNative"&&po!=="NativeScript"&&po!=="NS")&&typeof window<"u"&&typeof document<"u",Ip=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function";const Qt={isBrowser:!0,classes:{URLSearchParams:kp,FormData:Lp,Blob},isStandardBrowserEnv:Rp,isStandardBrowserWebWorkerEnv:Ip,protocols:["http","https","file","blob","url","data"]},Wl=function(p){function m(f,A,v,S){var k=f[S++],L=Number.isFinite(+k),N=S>=f.length;return k=!k&&V.isArray(v)?v.length:k,N?(V.hasOwnProp(v,k)?v[k]=[v[k],A]:v[k]=A,!L):(v[k]&&V.isObject(v[k])||(v[k]=[]),m(f,A,v[k],S)&&V.isArray(v[k])&&(v[k]=function(G){var se,de,fe={},ue=Object.keys(G),oe=ue.length;for(se=0;se<oe;se++)fe[de=ue[se]]=G[de];return fe}(v[k])),!L)}if(V.isFormData(p)&&V.isFunction(p.entries)){var x={};return V.forEachEntry(p,function(f,A){m(function(v){return V.matchAll(/\w+|\[(\w*)]/g,v).map(function(S){return S[0]==="[]"?"":S[1]||S[0]})}(f),A,x,0)}),x}return null};var _p={"Content-Type":void 0},Gi={transitional:Vl,adapter:["xhr","http"],transformRequest:[function(p,m){var x,f=m.getContentType()||"",A=f.indexOf("application/json")>-1,v=V.isObject(p);if(v&&V.isHTMLForm(p)&&(p=new FormData(p)),V.isFormData(p))return A&&A?JSON.stringify(Wl(p)):p;if(V.isArrayBuffer(p)||V.isBuffer(p)||V.isStream(p)||V.isFile(p)||V.isBlob(p))return p;if(V.isArrayBufferView(p))return p.buffer;if(V.isURLSearchParams(p))return m.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),p.toString();if(v){if(f.indexOf("application/x-www-form-urlencoded")>-1)return function(k,L){return Hi(k,new Qt.classes.URLSearchParams,Object.assign({visitor:function(N,G,se,de){return Qt.isNode&&V.isBuffer(N)?(this.append(G,N.toString("base64")),!1):de.defaultVisitor.apply(this,arguments)}},L))}(p,this.formSerializer).toString();if((x=V.isFileList(p))||f.indexOf("multipart/form-data")>-1){var S=this.env&&this.env.FormData;return Hi(x?{"files[]":p}:p,S&&new S,this.formSerializer)}}return v||A?(m.setContentType("application/json",!1),function(k,L,N){if(V.isString(k))try{return(0,JSON.parse)(k),V.trim(k)}catch(G){if(G.name!=="SyntaxError")throw G}return(0,JSON.stringify)(k)}(p)):p}],transformResponse:[function(p){var m=this.transitional||Gi.transitional,x=m&&m.forcedJSONParsing,f=this.responseType==="json";if(p&&V.isString(p)&&(x&&!this.responseType||f)){var A=!(m&&m.silentJSONParsing)&&f;try{return JSON.parse(p)}catch(v){if(A)throw v.name==="SyntaxError"?Ne.from(v,Ne.ERR_BAD_RESPONSE,this,null,this.response):v}}return p}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Qt.classes.FormData,Blob:Qt.classes.Blob},validateStatus:function(p){return p>=200&&p<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};V.forEach(["delete","get","head"],function(p){Gi.headers[p]={}}),V.forEach(["post","put","patch"],function(p){Gi.headers[p]=V.merge(_p)});const mo=Gi;var Dp=V.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]);function Ur(p){return Ur=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(m){return typeof m}:function(m){return m&&typeof Symbol=="function"&&m.constructor===Symbol&&m!==Symbol.prototype?"symbol":typeof m},Ur(p)}function Yl(p,m){(m==null||m>p.length)&&(m=p.length);for(var x=0,f=new Array(m);x<m;x++)f[x]=p[x];return f}function Ql(p,m){for(var x=0;x<m.length;x++){var f=m[x];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(p,(A=function(v,S){if(Ur(v)!=="object"||v===null)return v;var k=v[Symbol.toPrimitive];if(k!==void 0){var L=k.call(v,"string");if(Ur(L)!=="object")return L;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(v)}(f.key),Ur(A)==="symbol"?A:String(A)),f)}var A}var Xl=Symbol("internals");function $r(p){return p&&String(p).trim().toLowerCase()}function Ki(p){return p===!1||p==null?p:V.isArray(p)?p.map(Ki):String(p)}function Jl(p,m,x,f){return V.isFunction(f)?f.call(this,m,x):V.isString(m)?V.isString(f)?m.indexOf(f)!==-1:V.isRegExp(f)?f.test(m):void 0:void 0}var zi=function(p,m){function x(S){(function(k,L){if(!(k instanceof L))throw new TypeError("Cannot call a class as a function")})(this,x),S&&this.set(S)}var f,A,v;return f=x,A=[{key:"set",value:function(S,k,L){var N=this;function G(_e,ut,ot){var Qe=$r(ut);if(!Qe)throw new Error("header name must be a non-empty string");var Sn=V.findKey(N,Qe);(!Sn||N[Sn]===void 0||ot===!0||ot===void 0&&N[Sn]!==!1)&&(N[Sn||ut]=Ki(_e))}var se,de,fe,ue,oe,be=function(_e,ut){return V.forEach(_e,function(ot,Qe){return G(ot,Qe,ut)})};return V.isPlainObject(S)||S instanceof this.constructor?be(S,k):V.isString(S)&&(S=S.trim())&&!/^[-_a-zA-Z]+$/.test(S.trim())?be((oe={},(se=S)&&se.split(`
`).forEach(function(_e){ue=_e.indexOf(":"),de=_e.substring(0,ue).trim().toLowerCase(),fe=_e.substring(ue+1).trim(),!de||oe[de]&&Dp[de]||(de==="set-cookie"?oe[de]?oe[de].push(fe):oe[de]=[fe]:oe[de]=oe[de]?oe[de]+", "+fe:fe)}),oe),k):S!=null&&G(k,S,L),this}},{key:"get",value:function(S,k){if(S=$r(S)){var L=V.findKey(this,S);if(L){var N=this[L];if(!k)return N;if(k===!0)return function(G){for(var se,de=Object.create(null),fe=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;se=fe.exec(G);)de[se[1]]=se[2];return de}(N);if(V.isFunction(k))return k.call(this,N,L);if(V.isRegExp(k))return k.exec(N);throw new TypeError("parser must be boolean|regexp|function")}}}},{key:"has",value:function(S,k){if(S=$r(S)){var L=V.findKey(this,S);return!(!L||k&&!Jl(0,this[L],L,k))}return!1}},{key:"delete",value:function(S,k){var L=this,N=!1;function G(se){if(se=$r(se)){var de=V.findKey(L,se);!de||k&&!Jl(0,L[de],de,k)||(delete L[de],N=!0)}}return V.isArray(S)?S.forEach(G):G(S),N}},{key:"clear",value:function(){return Object.keys(this).forEach(this.delete.bind(this))}},{key:"normalize",value:function(S){var k=this,L={};return V.forEach(this,function(N,G){var se=V.findKey(L,G);if(se)return k[se]=Ki(N),void delete k[G];var de=S?function(fe){return fe.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,function(ue,oe,be){return oe.toUpperCase()+be})}(G):String(G).trim();de!==G&&delete k[G],k[de]=Ki(N),L[de]=!0}),this}},{key:"concat",value:function(){for(var S,k=arguments.length,L=new Array(k),N=0;N<k;N++)L[N]=arguments[N];return(S=this.constructor).concat.apply(S,[this].concat(L))}},{key:"toJSON",value:function(S){var k=Object.create(null);return V.forEach(this,function(L,N){L!=null&&L!==!1&&(k[N]=S&&V.isArray(L)?L.join(", "):L)}),k}},{key:Symbol.iterator,value:function(){return Object.entries(this.toJSON())[Symbol.iterator]()}},{key:"toString",value:function(){return Object.entries(this.toJSON()).map(function(S){var k,L,N=(L=2,function(G){if(Array.isArray(G))return G}(k=S)||function(G,se){var de=G==null?null:typeof Symbol<"u"&&G[Symbol.iterator]||G["@@iterator"];if(de!=null){var fe,ue,oe,be,_e=[],ut=!0,ot=!1;try{if(oe=(de=de.call(G)).next,se===0){if(Object(de)!==de)return;ut=!1}else for(;!(ut=(fe=oe.call(de)).done)&&(_e.push(fe.value),_e.length!==se);ut=!0);}catch(Qe){ot=!0,ue=Qe}finally{try{if(!ut&&de.return!=null&&(be=de.return(),Object(be)!==be))return}finally{if(ot)throw ue}}return _e}}(k,L)||function(G,se){if(G){if(typeof G=="string")return Yl(G,se);var de=Object.prototype.toString.call(G).slice(8,-1);return de==="Object"&&G.constructor&&(de=G.constructor.name),de==="Map"||de==="Set"?Array.from(G):de==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(de)?Yl(G,se):void 0}}(k,L)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}());return N[0]+": "+N[1]}).join(`
`)}},{key:Symbol.toStringTag,get:function(){return"AxiosHeaders"}}],v=[{key:"from",value:function(S){return S instanceof this?S:new this(S)}},{key:"concat",value:function(S){for(var k=new this(S),L=arguments.length,N=new Array(L>1?L-1:0),G=1;G<L;G++)N[G-1]=arguments[G];return N.forEach(function(se){return k.set(se)}),k}},{key:"accessor",value:function(S){var k=(this[Xl]=this[Xl]={accessors:{}}).accessors,L=this.prototype;function N(G){var se=$r(G);k[se]||(function(de,fe){var ue=V.toCamelCase(" "+fe);["get","set","has"].forEach(function(oe){Object.defineProperty(de,oe+ue,{value:function(be,_e,ut){return this[oe].call(this,fe,be,_e,ut)},configurable:!0})})}(L,G),k[se]=!0)}return V.isArray(S)?S.forEach(N):N(S),this}}],A&&Ql(f.prototype,A),v&&Ql(f,v),Object.defineProperty(f,"prototype",{writable:!1}),x}();zi.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent"]),V.freezeMethods(zi.prototype),V.freezeMethods(zi);const un=zi;function go(p,m){var x=this||mo,f=m||x,A=un.from(f.headers),v=f.data;return V.forEach(p,function(S){v=S.call(x,v,A.normalize(),m?m.status:void 0)}),A.normalize(),v}function Zl(p){return!(!p||!p.__CANCEL__)}function ec(p,m,x){Ne.call(this,p??"canceled",Ne.ERR_CANCELED,m,x),this.name="CanceledError"}V.inherits(ec,Ne,{__CANCEL__:!0});const ji=ec,Pp=Qt.isStandardBrowserEnv?{write:function(p,m,x,f,A,v){var S=[];S.push(p+"="+encodeURIComponent(m)),V.isNumber(x)&&S.push("expires="+new Date(x).toGMTString()),V.isString(f)&&S.push("path="+f),V.isString(A)&&S.push("domain="+A),v===!0&&S.push("secure"),document.cookie=S.join("; ")},read:function(p){var m=document.cookie.match(new RegExp("(^|;\\s*)("+p+")=([^;]*)"));return m?decodeURIComponent(m[3]):null},remove:function(p){this.write(p,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}};function tc(p,m){return p&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(m)?function(x,f){return f?x.replace(/\/+$/,"")+"/"+f.replace(/^\/+/,""):x}(p,m):m}const Bp=Qt.isStandardBrowserEnv?function(){var p,m=/(msie|trident)/i.test(navigator.userAgent),x=document.createElement("a");function f(A){var v=A;return m&&(x.setAttribute("href",v),v=x.href),x.setAttribute("href",v),{href:x.href,protocol:x.protocol?x.protocol.replace(/:$/,""):"",host:x.host,search:x.search?x.search.replace(/^\?/,""):"",hash:x.hash?x.hash.replace(/^#/,""):"",hostname:x.hostname,port:x.port,pathname:x.pathname.charAt(0)==="/"?x.pathname:"/"+x.pathname}}return p=f(window.location.href),function(A){var v=V.isString(A)?f(A):A;return v.protocol===p.protocol&&v.host===p.host}}():function(){return!0};function nc(p,m){var x=0,f=function(A,v){A=A||10;var S,k=new Array(A),L=new Array(A),N=0,G=0;return v=v!==void 0?v:1e3,function(se){var de=Date.now(),fe=L[G];S||(S=de),k[N]=se,L[N]=de;for(var ue=G,oe=0;ue!==N;)oe+=k[ue++],ue%=A;if((N=(N+1)%A)===G&&(G=(G+1)%A),!(de-S<v)){var be=fe&&de-fe;return be?Math.round(1e3*oe/be):void 0}}}(50,250);return function(A){var v=A.loaded,S=A.lengthComputable?A.total:void 0,k=v-x,L=f(k);x=v;var N={loaded:v,total:S,progress:S?v/S:void 0,bytes:k,rate:L||void 0,estimated:L&&S&&v<=S?(S-v)/L:void 0,event:A};N[m?"download":"upload"]=!0,p(N)}}var yo={http:null,xhr:typeof XMLHttpRequest<"u"&&function(p){return new Promise(function(m,x){var f,A=p.data,v=un.from(p.headers).normalize(),S=p.responseType;function k(){p.cancelToken&&p.cancelToken.unsubscribe(f),p.signal&&p.signal.removeEventListener("abort",f)}V.isFormData(A)&&(Qt.isStandardBrowserEnv||Qt.isStandardBrowserWebWorkerEnv)&&v.setContentType(!1);var L=new XMLHttpRequest;if(p.auth){var N=p.auth.username||"",G=p.auth.password?unescape(encodeURIComponent(p.auth.password)):"";v.set("Authorization","Basic "+btoa(N+":"+G))}var se=tc(p.baseURL,p.url);function de(){if(L){var be=un.from("getAllResponseHeaders"in L&&L.getAllResponseHeaders());(function(_e,ut,ot){var Qe=ot.config.validateStatus;ot.status&&Qe&&!Qe(ot.status)?ut(new Ne("Request failed with status code "+ot.status,[Ne.ERR_BAD_REQUEST,Ne.ERR_BAD_RESPONSE][Math.floor(ot.status/100)-4],ot.config,ot.request,ot)):_e(ot)})(function(_e){m(_e),k()},function(_e){x(_e),k()},{data:S&&S!=="text"&&S!=="json"?L.response:L.responseText,status:L.status,statusText:L.statusText,headers:be,config:p,request:L}),L=null}}if(L.open(p.method.toUpperCase(),jl(se,p.params,p.paramsSerializer),!0),L.timeout=p.timeout,"onloadend"in L?L.onloadend=de:L.onreadystatechange=function(){L&&L.readyState===4&&(L.status!==0||L.responseURL&&L.responseURL.indexOf("file:")===0)&&setTimeout(de)},L.onabort=function(){L&&(x(new Ne("Request aborted",Ne.ECONNABORTED,p,L)),L=null)},L.onerror=function(){x(new Ne("Network Error",Ne.ERR_NETWORK,p,L)),L=null},L.ontimeout=function(){var be=p.timeout?"timeout of "+p.timeout+"ms exceeded":"timeout exceeded",_e=p.transitional||Vl;p.timeoutErrorMessage&&(be=p.timeoutErrorMessage),x(new Ne(be,_e.clarifyTimeoutError?Ne.ETIMEDOUT:Ne.ECONNABORTED,p,L)),L=null},Qt.isStandardBrowserEnv){var fe=(p.withCredentials||Bp(se))&&p.xsrfCookieName&&Pp.read(p.xsrfCookieName);fe&&v.set(p.xsrfHeaderName,fe)}A===void 0&&v.setContentType(null),"setRequestHeader"in L&&V.forEach(v.toJSON(),function(be,_e){L.setRequestHeader(_e,be)}),V.isUndefined(p.withCredentials)||(L.withCredentials=!!p.withCredentials),S&&S!=="json"&&(L.responseType=p.responseType),typeof p.onDownloadProgress=="function"&&L.addEventListener("progress",nc(p.onDownloadProgress,!0)),typeof p.onUploadProgress=="function"&&L.upload&&L.upload.addEventListener("progress",nc(p.onUploadProgress)),(p.cancelToken||p.signal)&&(f=function(be){L&&(x(!be||be.type?new ji(null,p,L):be),L.abort(),L=null)},p.cancelToken&&p.cancelToken.subscribe(f),p.signal&&(p.signal.aborted?f():p.signal.addEventListener("abort",f)));var ue,oe=(ue=/^([-+\w]{1,25})(:?\/\/|:)/.exec(se))&&ue[1]||"";oe&&Qt.protocols.indexOf(oe)===-1?x(new Ne("Unsupported protocol "+oe+":",Ne.ERR_BAD_REQUEST,p)):L.send(A||null)})}};V.forEach(yo,function(p,m){if(p){try{Object.defineProperty(p,"name",{value:m})}catch{}Object.defineProperty(p,"adapterName",{value:m})}});function Ao(p){if(p.cancelToken&&p.cancelToken.throwIfRequested(),p.signal&&p.signal.aborted)throw new ji(null,p)}function rc(p){return Ao(p),p.headers=un.from(p.headers),p.data=go.call(p,p.transformRequest),["post","put","patch"].indexOf(p.method)!==-1&&p.headers.setContentType("application/x-www-form-urlencoded",!1),function(m){for(var x,f,A=(m=V.isArray(m)?m:[m]).length,v=0;v<A&&(x=m[v],!(f=V.isString(x)?yo[x.toLowerCase()]:x));v++);if(!f)throw f===!1?new Ne("Adapter ".concat(x," is not supported by the environment"),"ERR_NOT_SUPPORT"):new Error(V.hasOwnProp(yo,x)?"Adapter '".concat(x,"' is not available in the build"):"Unknown adapter '".concat(x,"'"));if(!V.isFunction(f))throw new TypeError("adapter is not a function");return f}(p.adapter||mo.adapter)(p).then(function(m){return Ao(p),m.data=go.call(p,p.transformResponse,m),m.headers=un.from(m.headers),m},function(m){return Zl(m)||(Ao(p),m&&m.response&&(m.response.data=go.call(p,p.transformResponse,m.response),m.response.headers=un.from(m.response.headers))),Promise.reject(m)})}var ic=function(p){return p instanceof un?p.toJSON():p};function Zn(p,m){m=m||{};var x={};function f(N,G,se){return V.isPlainObject(N)&&V.isPlainObject(G)?V.merge.call({caseless:se},N,G):V.isPlainObject(G)?V.merge({},G):V.isArray(G)?G.slice():G}function A(N,G,se){return V.isUndefined(G)?V.isUndefined(N)?void 0:f(void 0,N,se):f(N,G,se)}function v(N,G){if(!V.isUndefined(G))return f(void 0,G)}function S(N,G){return V.isUndefined(G)?V.isUndefined(N)?void 0:f(void 0,N):f(void 0,G)}function k(N,G,se){return se in m?f(N,G):se in p?f(void 0,N):void 0}var L={url:v,method:v,data:v,baseURL:S,transformRequest:S,transformResponse:S,paramsSerializer:S,timeout:S,timeoutMessage:S,withCredentials:S,adapter:S,responseType:S,xsrfCookieName:S,xsrfHeaderName:S,onUploadProgress:S,onDownloadProgress:S,decompress:S,maxContentLength:S,maxBodyLength:S,beforeRedirect:S,transport:S,httpAgent:S,httpsAgent:S,cancelToken:S,socketPath:S,responseEncoding:S,validateStatus:k,headers:function(N,G){return A(ic(N),ic(G),!0)}};return V.forEach(Object.keys(p).concat(Object.keys(m)),function(N){var G=L[N]||A,se=G(p[N],m[N],N);V.isUndefined(se)&&G!==k||(x[N]=se)}),x}function qi(p){return qi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(m){return typeof m}:function(m){return m&&typeof Symbol=="function"&&m.constructor===Symbol&&m!==Symbol.prototype?"symbol":typeof m},qi(p)}var bo={};["object","boolean","number","function","string","symbol"].forEach(function(p,m){bo[p]=function(x){return qi(x)===p||"a"+(m<1?"n ":" ")+p}});var sc={};bo.transitional=function(p,m,x){function f(A,v){return"[Axios v1.2.3] Transitional option '"+A+"'"+v+(x?". "+x:"")}return function(A,v,S){if(p===!1)throw new Ne(f(v," has been removed"+(m?" in "+m:"")),Ne.ERR_DEPRECATED);return m&&!sc[v]&&(sc[v]=!0,console.warn(f(v," has been deprecated since v"+m+" and will be removed in the near future"))),!p||p(A,v,S)}};const vo={assertOptions:function(p,m,x){if(qi(p)!=="object")throw new Ne("options must be an object",Ne.ERR_BAD_OPTION_VALUE);for(var f=Object.keys(p),A=f.length;A-- >0;){var v=f[A],S=m[v];if(S){var k=p[v],L=k===void 0||S(k,v,p);if(L!==!0)throw new Ne("option "+v+" must be "+L,Ne.ERR_BAD_OPTION_VALUE)}else if(x!==!0)throw new Ne("Unknown option "+v,Ne.ERR_BAD_OPTION)}},validators:bo};function Hr(p){return Hr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(m){return typeof m}:function(m){return m&&typeof Symbol=="function"&&m.constructor===Symbol&&m!==Symbol.prototype?"symbol":typeof m},Hr(p)}function Op(p,m){for(var x=0;x<m.length;x++){var f=m[x];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(p,(A=function(v,S){if(Hr(v)!=="object"||v===null)return v;var k=v[Symbol.toPrimitive];if(k!==void 0){var L=k.call(v,"string");if(Hr(L)!=="object")return L;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(v)}(f.key),Hr(A)==="symbol"?A:String(A)),f)}var A}var En=vo.validators,Vi=function(){function p(f){(function(A,v){if(!(A instanceof v))throw new TypeError("Cannot call a class as a function")})(this,p),this.defaults=f,this.interceptors={request:new ql,response:new ql}}var m,x;return m=p,(x=[{key:"request",value:function(f,A){typeof f=="string"?(A=A||{}).url=f:A=f||{};var v,S=A=Zn(this.defaults,A),k=S.transitional,L=S.paramsSerializer,N=S.headers;k!==void 0&&vo.assertOptions(k,{silentJSONParsing:En.transitional(En.boolean),forcedJSONParsing:En.transitional(En.boolean),clarifyTimeoutError:En.transitional(En.boolean)},!1),L!==void 0&&vo.assertOptions(L,{encode:En.function,serialize:En.function},!0),A.method=(A.method||this.defaults.method||"get").toLowerCase(),(v=N&&V.merge(N.common,N[A.method]))&&V.forEach(["delete","get","head","post","put","patch","common"],function(Qe){delete N[Qe]}),A.headers=un.concat(v,N);var G=[],se=!0;this.interceptors.request.forEach(function(Qe){typeof Qe.runWhen=="function"&&Qe.runWhen(A)===!1||(se=se&&Qe.synchronous,G.unshift(Qe.fulfilled,Qe.rejected))});var de,fe=[];this.interceptors.response.forEach(function(Qe){fe.push(Qe.fulfilled,Qe.rejected)});var ue,oe=0;if(!se){var be=[rc.bind(this),void 0];for(be.unshift.apply(be,G),be.push.apply(be,fe),ue=be.length,de=Promise.resolve(A);oe<ue;)de=de.then(be[oe++],be[oe++]);return de}ue=G.length;var _e=A;for(oe=0;oe<ue;){var ut=G[oe++],ot=G[oe++];try{_e=ut(_e)}catch(Qe){ot.call(this,Qe);break}}try{de=rc.call(this,_e)}catch(Qe){return Promise.reject(Qe)}for(oe=0,ue=fe.length;oe<ue;)de=de.then(fe[oe++],fe[oe++]);return de}},{key:"getUri",value:function(f){return jl(tc((f=Zn(this.defaults,f)).baseURL,f.url),f.params,f.paramsSerializer)}}])&&Op(m.prototype,x),Object.defineProperty(m,"prototype",{writable:!1}),p}();V.forEach(["delete","get","head","options"],function(p){Vi.prototype[p]=function(m,x){return this.request(Zn(x||{},{method:p,url:m,data:(x||{}).data}))}}),V.forEach(["post","put","patch"],function(p){function m(x){return function(f,A,v){return this.request(Zn(v||{},{method:p,headers:x?{"Content-Type":"multipart/form-data"}:{},url:f,data:A}))}}Vi.prototype[p]=m(),Vi.prototype[p+"Form"]=m(!0)});const Wi=Vi;function Gr(p){return Gr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(m){return typeof m}:function(m){return m&&typeof Symbol=="function"&&m.constructor===Symbol&&m!==Symbol.prototype?"symbol":typeof m},Gr(p)}function oc(p,m){for(var x=0;x<m.length;x++){var f=m[x];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(p,(A=function(v,S){if(Gr(v)!=="object"||v===null)return v;var k=v[Symbol.toPrimitive];if(k!==void 0){var L=k.call(v,"string");if(Gr(L)!=="object")return L;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(v)}(f.key),Gr(A)==="symbol"?A:String(A)),f)}var A}var Fp=function(){function p(A){if(function(k,L){if(!(k instanceof L))throw new TypeError("Cannot call a class as a function")}(this,p),typeof A!="function")throw new TypeError("executor must be a function.");var v;this.promise=new Promise(function(k){v=k});var S=this;this.promise.then(function(k){if(S._listeners){for(var L=S._listeners.length;L-- >0;)S._listeners[L](k);S._listeners=null}}),this.promise.then=function(k){var L,N=new Promise(function(G){S.subscribe(G),L=G}).then(k);return N.cancel=function(){S.unsubscribe(L)},N},A(function(k,L,N){S.reason||(S.reason=new ji(k,L,N),v(S.reason))})}var m,x,f;return m=p,x=[{key:"throwIfRequested",value:function(){if(this.reason)throw this.reason}},{key:"subscribe",value:function(A){this.reason?A(this.reason):this._listeners?this._listeners.push(A):this._listeners=[A]}},{key:"unsubscribe",value:function(A){if(this._listeners){var v=this._listeners.indexOf(A);v!==-1&&this._listeners.splice(v,1)}}}],f=[{key:"source",value:function(){var A;return{token:new p(function(v){A=v}),cancel:A}}}],x&&oc(m.prototype,x),f&&oc(m,f),Object.defineProperty(m,"prototype",{writable:!1}),p}();const Mp=Fp;function ac(p,m){(m==null||m>p.length)&&(m=p.length);for(var x=0,f=new Array(m);x<m;x++)f[x]=p[x];return f}var Eo={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Eo).forEach(function(p){var m,x,f=(x=2,function(S){if(Array.isArray(S))return S}(m=p)||function(S,k){var L=S==null?null:typeof Symbol<"u"&&S[Symbol.iterator]||S["@@iterator"];if(L!=null){var N,G,se,de,fe=[],ue=!0,oe=!1;try{if(se=(L=L.call(S)).next,k===0){if(Object(L)!==L)return;ue=!1}else for(;!(ue=(N=se.call(L)).done)&&(fe.push(N.value),fe.length!==k);ue=!0);}catch(be){oe=!0,G=be}finally{try{if(!ue&&L.return!=null&&(de=L.return(),Object(de)!==de))return}finally{if(oe)throw G}}return fe}}(m,x)||function(S,k){if(S){if(typeof S=="string")return ac(S,k);var L=Object.prototype.toString.call(S).slice(8,-1);return L==="Object"&&S.constructor&&(L=S.constructor.name),L==="Map"||L==="Set"?Array.from(S):L==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(L)?ac(S,k):void 0}}(m,x)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()),A=f[0],v=f[1];Eo[v]=A});const Np=Eo;var dt=function p(m){var x=new Wi(m),f=ae(Wi.prototype.request,x);return V.extend(f,Wi.prototype,x,{allOwnKeys:!0}),V.extend(f,x,null,{allOwnKeys:!0}),f.create=function(A){return p(Zn(m,A))},f}(mo);dt.Axios=Wi,dt.CanceledError=ji,dt.CancelToken=Mp,dt.isCancel=Zl,dt.VERSION="1.2.3",dt.toFormData=Hi,dt.AxiosError=Ne,dt.Cancel=dt.CanceledError,dt.all=function(p){return Promise.all(p)},dt.spread=function(p){return function(m){return p.apply(null,m)}},dt.isAxiosError=function(p){return V.isObject(p)&&p.isAxiosError===!0},dt.mergeConfig=Zn,dt.AxiosHeaders=un,dt.formToJSON=function(p){return Wl(V.isHTMLForm(p)?new FormData(p):p)},dt.HttpStatusCode=Np,dt.default=dt;const lc=dt,Up={send:function(p){lc.post(p.url,p.data).then(function(m){var x=m.data;x&&x.code===0?p.success&&p.success(x):p.error&&p.error(x&&x.msg)}).catch(function(m){console.error(m),p.error&&p.error()})},read:function(p){lc.get(p.url).then(function(m){var x=m.data;x&&x.code===0?p.success&&p.success(x.data.map(function(f){return{time:f[0],type:f[1],color:f[2],author:f[3],text:f[4]}})):p.error&&p.error(x&&x.msg)}).catch(function(m){console.error(m),p.error&&p.error()})}};function xo(p){return xo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(m){return typeof m}:function(m){return m&&typeof Symbol=="function"&&m.constructor===Symbol&&m!==Symbol.prototype?"symbol":typeof m},xo(p)}function $p(p){var m=this;this.lang=p,this.fallbackLang=this.lang.includes("-")?this.lang.split("-")[0]:this.lang,this.tran=function(x){return x=x.toLowerCase(),er[m.lang]&&er[m.lang][x]?er[m.lang][x]:er[m.fallbackLang]&&er[m.fallbackLang][x]?er[m.fallbackLang][x]:So[x]?So[x]:x}}var So={"danmaku-loading":"Danmaku is loading",top:"Top",bottom:"Bottom",rolling:"Rolling","input-danmaku-enter":"Input danmaku, hit Enter","about-author":"About author","dplayer-feedback":"DPlayer feedback","about-dplayer":"About DPlayer",loop:"Loop",speed:"Speed","opacity-danmaku":"Opacity for danmaku",normal:"Normal","please-input-danmaku":"Please input danmaku content!","set-danmaku-color":"Set danmaku color","set-danmaku-type":"Set danmaku type","show-danmaku":"Show danmaku","video-failed":"Video load failed","danmaku-failed":"Danmaku load failed","danmaku-send-failed":"Danmaku send failed","switching-quality":"Switching to %q quality","switched-quality":"Switched to %q quality",ff:"FF %s s",rew:"REW %s s","unlimited-danmaku":"Unlimited danmaku","send-danmaku":"Send danmaku",setting:"Setting",fullscreen:"Full screen","web-fullscreen":"Web full screen",send:"Send",screenshot:"Screenshot",airplay:"AirPlay",chromecast:"ChromeCast",subtitle:"Subtitle",off:"Off","show-subs":"Show subtitle","hide-subs":"Hide subtitle",volume:"Volume",live:"Live","video-info":"Video info"},er={en:So,"zh-cn":{"danmaku-loading":"弹幕加载中",top:"顶部",bottom:"底部",rolling:"滚动","input-danmaku-enter":"输入弹幕，回车发送","about-author":"关于作者","dplayer-feedback":"播放器意见反馈","about-dplayer":"关于 DPlayer 播放器",loop:"洗脑循环",speed:"速度","opacity-danmaku":"弹幕透明度",normal:"正常","please-input-danmaku":"要输入弹幕内容啊喂！","set-danmaku-color":"设置弹幕颜色","set-danmaku-type":"设置弹幕类型","show-danmaku":"显示弹幕","video-failed":"视频加载失败","danmaku-failed":"弹幕加载失败","danmaku-send-failed":"弹幕发送失败","switching-quality":"正在切换至 %q 画质","switched-quality":"已经切换至 %q 画质",ff:"快进 %s 秒",rew:"快退 %s 秒","unlimited-danmaku":"海量弹幕","send-danmaku":"发送弹幕",setting:"设置",fullscreen:"全屏","web-fullscreen":"页面全屏",send:"发送",screenshot:"截图",airplay:"无线投屏",chromecast:"ChromeCast",subtitle:"字幕",off:"关闭","show-subs":"显示字幕","hide-subs":"隐藏字幕",volume:"音量",live:"直播","video-info":"视频统计信息"},"zh-tw":{"danmaku-loading":"彈幕載入中",top:"頂部",bottom:"底部",rolling:"滾動","input-danmaku-enter":"輸入彈幕，Enter 發送","about-author":"關於作者","dplayer-feedback":"播放器意見回饋","about-dplayer":"關於 DPlayer 播放器",loop:"循環播放",speed:"速度","opacity-danmaku":"彈幕透明度",normal:"正常","please-input-danmaku":"請輸入彈幕內容啊！","set-danmaku-color":"設定彈幕顏色","set-danmaku-type":"設定彈幕類型","show-danmaku":"顯示彈幕","video-failed":"影片載入失敗","danmaku-failed":"彈幕載入失敗","danmaku-send-failed":"彈幕發送失敗","switching-quality":"正在切換至 %q 畫質","switched-quality":"已經切換至 %q 畫質",ff:"快進 %s 秒",rew:"快退 %s 秒","unlimited-danmaku":"巨量彈幕","send-danmaku":"發送彈幕",setting:"設定",fullscreen:"全螢幕","web-fullscreen":"頁面全螢幕",send:"發送",screenshot:"截圖",airplay:"無線投屏",chromecast:"ChromeCast",subtitle:"字幕",off:"關閉","show-subs":"顯示字幕","hide-subs":"隱藏字幕",volume:"音量",live:"直播","video-info":"影片統計訊息"},"ko-kr":{"danmaku-loading":"Danmaku를 불러오는 중입니다.",top:"Top",bottom:"Bottom",rolling:"Rolling","input-danmaku-enter":"Danmaku를 입력하고 Enter를 누르세요.","about-author":"만든이","dplayer-feedback":"피드백 보내기","about-dplayer":"DPlayer 정보",loop:"반복",speed:"배속","opacity-danmaku":"Danmaku 불투명도",normal:"표준","please-input-danmaku":"Danmaku를 입력하세요!","set-danmaku-color":"Danmaku 색상","set-danmaku-type":"Danmaku 설정","show-danmaku":"Danmaku 표시","video-failed":"비디오를 불러오지 못했습니다.","danmaku-failed":"Danmaku를 불러오지 못했습니다.","danmaku-send-failed":"Danmaku 전송에 실패했습니다.","Switching to":"","Switched to":"","switching-quality":"전환 %q 화질","switched-quality":"전환 됨 %q 화질",ff:"앞으로 %s 초",rew:"뒤로 %s 초","unlimited-danmaku":"끝없는 Danmaku","send-danmaku":"Danmaku 보내기",setting:"설정",fullscreen:"전체 화면","web-fullscreen":"웹 내 전체화면",send:"보내기",screenshot:"화면 캡쳐",airplay:"에어플레이",chromecast:"ChromeCast",subtitle:"부제",off:"끄다","show-subs":"자막 보이기","hide-subs":"자막 숨기기",Volume:"볼륨",live:"생방송","video-info":"비디오 정보"},de:{"danmaku-loading":"Danmaku lädt...",top:"Oben",bottom:"Unten",rolling:"Rollend","input-danmaku-enter":"Drücke Enter nach dem Einfügen vom Danmaku","about-author":"Über den Autor","dplayer-feedback":"DPlayer Feedback","about-dplayer":"Über DPlayer",loop:"Wiederholen",speed:"Geschwindigkeit","opacity-danmaku":"Transparenz für Danmaku",normal:"Normal","please-input-danmaku":"Bitte Danmaku Inhalt eingeben!","set-danmaku-color":"Danmaku Farbe festlegen","set-danmaku-type":"Danmaku Typ festlegen","show-danmaku":"Zeige Danmaku","video-failed":"Das Video konnte nicht geladen werden","danmaku-failed":"Danmaku konnte nicht geladen werden","danmaku-send-failed":"Das senden von Danmaku ist fehgeschlagen","switching-quality":"Wechsle zur %q Qualität","switched-quality":"Zur %q Qualität gewechselt",ff:"%s s Vorwärts",rew:"%s s Zurück","unlimited-danmaku":"Unlimitiertes Danmaku","send-danmaku":"Sende Danmaku",setting:"Einstellungen",fullscreen:"Vollbild","web-fullscreen":"Browser Vollbild",send:"Senden",screenshot:"Screenshot",airplay:"AirPlay","show-subs":"Zeige Untertitel",chromecast:"ChromeCast",subtitle:"Untertitel",off:"Schließung","hide-subs":"Verstecke Untertitel",volume:"Lautstärke",live:"Live","video-info":"Video Info"}},Hp=i(730),Gp=i.n(Hp),Kp=i(74),zp=i.n(Kp),jp=i(437),qp=i.n(jp),Vp=i(644),Wp=i.n(Vp),Yp=i(324),Qp=i.n(Yp),Xp=i(574),Jp=i.n(Xp),Zp=i(300),e0=i.n(Zp),t0=i(934),n0=i.n(t0),r0=i(428),i0=i.n(r0),s0=i(807),o0=i.n(s0),a0=i(338),l0=i.n(a0),c0=i(254),d0=i.n(c0),u0=i(965),h0=i.n(u0),f0=i(113),p0=i.n(f0),m0=i(251),g0=i.n(m0),y0=i(410),A0=i.n(y0),b0=i(182),v0=i.n(b0),E0=i(193),x0=i.n(E0);const Ut={play:Gp(),pause:zp(),volumeUp:qp(),volumeDown:Wp(),volumeOff:Qp(),full:Jp(),fullWeb:e0(),setting:n0(),right:i0(),comment:o0(),commentOff:l0(),send:d0(),pallette:h0(),camera:p0(),subtitle:A0(),loading:v0(),airplay:g0(),chromecast:x0()};var S0=i(916),T0=i.n(S0);function Kr(p){return Kr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(m){return typeof m}:function(m){return m&&typeof Symbol=="function"&&m.constructor===Symbol&&m!==Symbol.prototype?"symbol":typeof m},Kr(p)}function cc(p,m){for(var x=0;x<m.length;x++){var f=m[x];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(p,(A=function(v,S){if(Kr(v)!=="object"||v===null)return v;var k=v[Symbol.toPrimitive];if(k!==void 0){var L=k.call(v,"string");if(Kr(L)!=="object")return L;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(v)}(f.key),Kr(A)==="symbol"?A:String(A)),f)}var A}var C0=function(){function p(A){(function(v,S){if(!(v instanceof S))throw new TypeError("Cannot call a class as a function")})(this,p),this.container=A.container,this.options=A.options,this.index=A.index,this.tran=A.tran,this.init()}var m,x,f;return m=p,f=[{key:"NewNotice",value:function(A,v,S){var k=document.createElement("div");return k.classList.add("dplayer-notice"),k.style.opacity=v,k.innerText=A,S&&(k.id="dplayer-notice-".concat(S)),k}}],(x=[{key:"init",value:function(){this.container.innerHTML=T0()({options:this.options,index:this.index,tran:this.tran,icons:Ut,mobile:q.isMobile,video:{current:!0,pic:this.options.video.pic,screenshot:this.options.screenshot,airplay:!(!q.isSafari||q.isChrome)&&this.options.airplay,chromecast:this.options.chromecast,preload:this.options.preload,url:this.options.video.url,subtitle:this.options.subtitle}}),this.volumeBar=this.container.querySelector(".dplayer-volume-bar-inner"),this.volumeBarWrap=this.container.querySelector(".dplayer-volume-bar"),this.volumeBarWrapWrap=this.container.querySelector(".dplayer-volume-bar-wrap"),this.volumeButton=this.container.querySelector(".dplayer-volume"),this.volumeButtonIcon=this.container.querySelector(".dplayer-volume-icon"),this.volumeIcon=this.container.querySelector(".dplayer-volume-icon .dplayer-icon-content"),this.playedBar=this.container.querySelector(".dplayer-played"),this.loadedBar=this.container.querySelector(".dplayer-loaded"),this.playedBarWrap=this.container.querySelector(".dplayer-bar-wrap"),this.playedBarTime=this.container.querySelector(".dplayer-bar-time"),this.danmaku=this.container.querySelector(".dplayer-danmaku"),this.danmakuLoading=this.container.querySelector(".dplayer-danloading"),this.video=this.container.querySelector(".dplayer-video-current"),this.bezel=this.container.querySelector(".dplayer-bezel-icon"),this.playButton=this.container.querySelector(".dplayer-play-icon"),this.mobilePlayButton=this.container.querySelector(".dplayer-mobile-play"),this.videoWrap=this.container.querySelector(".dplayer-video-wrap"),this.controllerMask=this.container.querySelector(".dplayer-controller-mask"),this.ptime=this.container.querySelector(".dplayer-ptime"),this.settingButton=this.container.querySelector(".dplayer-setting-icon"),this.settingBox=this.container.querySelector(".dplayer-setting-box"),this.mask=this.container.querySelector(".dplayer-mask"),this.loop=this.container.querySelector(".dplayer-setting-loop"),this.loopToggle=this.container.querySelector(".dplayer-setting-loop .dplayer-toggle-setting-input"),this.showDanmaku=this.container.querySelector(".dplayer-setting-showdan"),this.showDanmakuToggle=this.container.querySelector(".dplayer-showdan-setting-input"),this.unlimitDanmaku=this.container.querySelector(".dplayer-setting-danunlimit"),this.unlimitDanmakuToggle=this.container.querySelector(".dplayer-danunlimit-setting-input"),this.speed=this.container.querySelector(".dplayer-setting-speed"),this.speedItem=this.container.querySelectorAll(".dplayer-setting-speed-item"),this.danmakuOpacityBar=this.container.querySelector(".dplayer-danmaku-bar-inner"),this.danmakuOpacityBarWrap=this.container.querySelector(".dplayer-danmaku-bar"),this.danmakuOpacityBarWrapWrap=this.container.querySelector(".dplayer-danmaku-bar-wrap"),this.danmakuOpacityBox=this.container.querySelector(".dplayer-setting-danmaku"),this.dtime=this.container.querySelector(".dplayer-dtime"),this.controller=this.container.querySelector(".dplayer-controller"),this.commentInput=this.container.querySelector(".dplayer-comment-input"),this.commentButton=this.container.querySelector(".dplayer-comment-icon"),this.commentSettingBox=this.container.querySelector(".dplayer-comment-setting-box"),this.commentSettingButton=this.container.querySelector(".dplayer-comment-setting-icon"),this.commentSettingFill=this.container.querySelector(".dplayer-comment-setting-icon path"),this.commentSendButton=this.container.querySelector(".dplayer-send-icon"),this.commentSendFill=this.container.querySelector(".dplayer-send-icon path"),this.commentColorSettingBox=this.container.querySelector(".dplayer-comment-setting-color"),this.browserFullButton=this.container.querySelector(".dplayer-full-icon"),this.webFullButton=this.container.querySelector(".dplayer-full-in-icon"),this.menu=this.container.querySelector(".dplayer-menu"),this.menuItem=this.container.querySelectorAll(".dplayer-menu-item"),this.qualityList=this.container.querySelector(".dplayer-quality-list"),this.camareButton=this.container.querySelector(".dplayer-camera-icon"),this.airplayButton=this.container.querySelector(".dplayer-airplay-icon"),this.chromecastButton=this.container.querySelector(".dplayer-chromecast-icon"),this.subtitleButton=this.container.querySelector(".dplayer-subtitle-icon"),this.subtitleButtonInner=this.container.querySelector(".dplayer-subtitle-icon .dplayer-icon-content"),this.subtitlesButton=this.container.querySelector(".dplayer-subtitles-icon"),this.subtitlesBox=this.container.querySelector(".dplayer-subtitles-box"),this.subtitlesItem=this.container.querySelectorAll(".dplayer-subtitles-item"),this.subtitle=this.container.querySelector(".dplayer-subtitle"),this.subtrack=this.container.querySelector(".dplayer-subtrack"),this.qualityButton=this.container.querySelector(".dplayer-quality-icon"),this.barPreview=this.container.querySelector(".dplayer-bar-preview"),this.barWrap=this.container.querySelector(".dplayer-bar-wrap"),this.noticeList=this.container.querySelector(".dplayer-notice-list"),this.infoPanel=this.container.querySelector(".dplayer-info-panel"),this.infoPanelClose=this.container.querySelector(".dplayer-info-panel-close"),this.infoVersion=this.container.querySelector(".dplayer-info-panel-item-version .dplayer-info-panel-item-data"),this.infoFPS=this.container.querySelector(".dplayer-info-panel-item-fps .dplayer-info-panel-item-data"),this.infoType=this.container.querySelector(".dplayer-info-panel-item-type .dplayer-info-panel-item-data"),this.infoUrl=this.container.querySelector(".dplayer-info-panel-item-url .dplayer-info-panel-item-data"),this.infoResolution=this.container.querySelector(".dplayer-info-panel-item-resolution .dplayer-info-panel-item-data"),this.infoDuration=this.container.querySelector(".dplayer-info-panel-item-duration .dplayer-info-panel-item-data"),this.infoDanmakuId=this.container.querySelector(".dplayer-info-panel-item-danmaku-id .dplayer-info-panel-item-data"),this.infoDanmakuApi=this.container.querySelector(".dplayer-info-panel-item-danmaku-api .dplayer-info-panel-item-data"),this.infoDanmakuAmount=this.container.querySelector(".dplayer-info-panel-item-danmaku-amount .dplayer-info-panel-item-data")}}])&&cc(m.prototype,x),f&&cc(m,f),Object.defineProperty(m,"prototype",{writable:!1}),p}();const dc=C0;function tr(p){return tr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(m){return typeof m}:function(m){return m&&typeof Symbol=="function"&&m.constructor===Symbol&&m!==Symbol.prototype?"symbol":typeof m},tr(p)}function w0(p,m){for(var x=0;x<m.length;x++){var f=m[x];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(p,(A=function(v,S){if(tr(v)!=="object"||v===null)return v;var k=v[Symbol.toPrimitive];if(k!==void 0){var L=k.call(v,"string");if(tr(L)!=="object")return L;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(v)}(f.key),tr(A)==="symbol"?A:String(A)),f)}var A}var k0=function(){function p(f){(function(A,v){if(!(A instanceof v))throw new TypeError("Cannot call a class as a function")})(this,p),this.options=f,this.player=this.options.player,this.container=this.options.container,this.danTunnel={right:{},top:{},bottom:{}},this.danIndex=0,this.dan=[],this.showing=!0,this._opacity=this.options.opacity,this.events=this.options.events,this.unlimited=this.options.unlimited,this._measure(""),this.load()}var m,x;return m=p,x=[{key:"load",value:function(){var f,A=this;f=this.options.api.maximum?"".concat(this.options.api.address,"v3/?id=").concat(this.options.api.id,"&max=").concat(this.options.api.maximum):"".concat(this.options.api.address,"v3/?id=").concat(this.options.api.id);var v=(this.options.api.addition||[]).slice(0);v.push(f),this.events&&this.events.trigger("danmaku_load_start",v),this._readAllEndpoints(v,function(S){A.dan=[].concat.apply([],S).sort(function(k,L){return k.time-L.time}),window.requestAnimationFrame(function(){A.frame()}),A.options.callback(),A.events&&A.events.trigger("danmaku_load_end")})}},{key:"reload",value:function(f){this.options.api=f,this.dan=[],this.clear(),this.load()}},{key:"_readAllEndpoints",value:function(f,A){for(var v=this,S=[],k=0,L=function(G){v.options.apiBackend.read({url:f[G],success:function(se){S[G]=se,++k===f.length&&A(S)},error:function(se){v.options.error(se||v.options.tran("danmaku-failed")),S[G]=[],++k===f.length&&A(S)}})},N=0;N<f.length;++N)L(N)}},{key:"send",value:function(f,A){var v=this,S={token:this.options.api.token,id:this.options.api.id,author:this.options.api.user,time:this.options.time(),text:f.text,color:f.color,type:f.type};this.options.apiBackend.send({url:this.options.api.address+"v3/",data:S,success:A,error:function(L){v.options.error(L||v.options.tran("danmaku-failed"))}}),this.dan.splice(this.danIndex,0,S),this.danIndex++;var k={text:this.htmlEncode(S.text),color:S.color,type:S.type,border:"2px solid ".concat(this.options.borderColor)};this.draw(k),this.events&&this.events.trigger("danmaku_send",S)}},{key:"frame",value:function(){var f=this;if(this.dan.length&&!this.paused&&this.showing){for(var A=this.dan[this.danIndex],v=[];A&&this.options.time()>parseFloat(A.time);)v.push(A),A=this.dan[++this.danIndex];this.draw(v)}window.requestAnimationFrame(function(){f.frame()})}},{key:"opacity",value:function(f){if(f!==void 0){for(var A=this.container.getElementsByClassName("dplayer-danmaku-item"),v=0;v<A.length;v++)A[v].style.opacity=f;this._opacity=f,this.events&&this.events.trigger("danmaku_opacity",this._opacity)}return this._opacity}},{key:"draw",value:function(f){var A=this;if(this.showing){var v=this.options.height,S=this.container.offsetWidth,k=this.container.offsetHeight,L=parseInt(k/v),N=function(oe){var be=oe.offsetWidth||parseInt(oe.style.width),_e=oe.getBoundingClientRect().right||A.container.getBoundingClientRect().right+be;return A.container.getBoundingClientRect().right-_e},G=function(oe){return(S+oe)/5},se=function(oe,be,_e){for(var ut=S/G(_e),ot=function(Nn){var rr=A.danTunnel[be][Nn+""];if(!rr||!rr.length)return A.danTunnel[be][Nn+""]=[oe],oe.addEventListener("animationend",function(){A.danTunnel[be][Nn+""].splice(0,1)}),{v:Nn%L};if(be!=="right")return"continue";for(var oi=0;oi<rr.length;oi++){var gc=N(rr[oi])-10;if(gc<=S-ut*G(parseInt(rr[oi].style.width))||gc<=0)break;if(oi===rr.length-1)return A.danTunnel[be][Nn+""].push(oe),oe.addEventListener("animationend",function(){A.danTunnel[be][Nn+""].splice(0,1)}),{v:Nn%L}}},Qe=0;A.unlimited||Qe<L;Qe++){var Sn=ot(Qe);if(Sn!=="continue"&&tr(Sn)==="object")return Sn.v}return-1};Object.prototype.toString.call(f)!=="[object Array]"&&(f=[f]);for(var de=document.createDocumentFragment(),fe=function(){f[ue].type=q.number2Type(f[ue].type),f[ue].color||(f[ue].color=16777215);var oe=document.createElement("div");oe.classList.add("dplayer-danmaku-item"),oe.classList.add("dplayer-danmaku-".concat(f[ue].type)),f[ue].border?oe.innerHTML='<span style="border:'.concat(f[ue].border,'">').concat(f[ue].text,"</span>"):oe.innerHTML=f[ue].text,oe.style.opacity=A._opacity,oe.style.color=q.number2Color(f[ue].color),oe.addEventListener("animationend",function(){A.container.removeChild(oe)});var be,_e=A._measure(f[ue].text);switch(f[ue].type){case"right":(be=se(oe,f[ue].type,_e))>=0&&(oe.style.width=_e+1+"px",oe.style.top=v*be+"px",oe.style.transform="translateX(-".concat(S,"px)"));break;case"top":(be=se(oe,f[ue].type))>=0&&(oe.style.top=v*be+"px");break;case"bottom":(be=se(oe,f[ue].type))>=0&&(oe.style.bottom=v*be+"px");break;default:console.error("Can't handled danmaku type: ".concat(f[ue].type))}be>=0&&(oe.classList.add("dplayer-danmaku-move"),oe.style.animationDuration=A._danAnimation(f[ue].type),de.appendChild(oe))},ue=0;ue<f.length;ue++)fe();return this.container.appendChild(de),de}}},{key:"play",value:function(){this.paused=!1}},{key:"pause",value:function(){this.paused=!0}},{key:"_measure",value:function(f){if(!this.context){var A=getComputedStyle(this.container.getElementsByClassName("dplayer-danmaku-item")[0],null);this.context=document.createElement("canvas").getContext("2d"),this.context.font=A.getPropertyValue("font")}return this.context.measureText(f).width}},{key:"seek",value:function(){this.clear();for(var f=0;f<this.dan.length;f++){if(this.dan[f].time>=this.options.time()){this.danIndex=f;break}this.danIndex=this.dan.length}}},{key:"clear",value:function(){this.danTunnel={right:{},top:{},bottom:{}},this.danIndex=0,this.options.container.innerHTML="",this.events&&this.events.trigger("danmaku_clear")}},{key:"htmlEncode",value:function(f){return f.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2f;")}},{key:"resize",value:function(){for(var f=this.container.offsetWidth,A=this.container.getElementsByClassName("dplayer-danmaku-item"),v=0;v<A.length;v++)A[v].style.transform="translateX(-".concat(f,"px)")}},{key:"hide",value:function(){this.showing=!1,this.pause(),this.clear(),this.events&&this.events.trigger("danmaku_hide")}},{key:"show",value:function(){this.seek(),this.showing=!0,this.play(),this.events&&this.events.trigger("danmaku_show")}},{key:"unlimit",value:function(f){this.unlimited=f}},{key:"speed",value:function(f){this.options.api.speedRate=f}},{key:"_danAnimation",value:function(f){var A=this.options.api.speedRate||1,v=!!this.player.fullScreen.isFullScreen();return{top:"".concat((v?6:4)/A,"s"),right:"".concat((v?8:5)/A,"s"),bottom:"".concat((v?6:4)/A,"s")}[f]}}],x&&w0(m.prototype,x),Object.defineProperty(m,"prototype",{writable:!1}),p}();const L0=k0;function zr(p){return zr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(m){return typeof m}:function(m){return m&&typeof Symbol=="function"&&m.constructor===Symbol&&m!==Symbol.prototype?"symbol":typeof m},zr(p)}function R0(p,m){for(var x=0;x<m.length;x++){var f=m[x];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(p,(A=function(v,S){if(zr(v)!=="object"||v===null)return v;var k=v[Symbol.toPrimitive];if(k!==void 0){var L=k.call(v,"string");if(zr(L)!=="object")return L;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(v)}(f.key),zr(A)==="symbol"?A:String(A)),f)}var A}const I0=function(){function p(){(function(f,A){if(!(f instanceof A))throw new TypeError("Cannot call a class as a function")})(this,p),this.events={},this.videoEvents=["abort","canplay","canplaythrough","durationchange","emptied","ended","error","loadeddata","loadedmetadata","loadstart","mozaudioavailable","pause","play","playing","progress","ratechange","seeked","seeking","stalled","suspend","timeupdate","volumechange","waiting"],this.playerEvents=["screenshot","thumbnails_show","thumbnails_hide","danmaku_show","danmaku_hide","danmaku_clear","danmaku_loaded","danmaku_send","danmaku_opacity","contextmenu_show","contextmenu_hide","notice_show","notice_hide","quality_start","quality_end","destroy","resize","fullscreen","fullscreen_cancel","webfullscreen","webfullscreen_cancel","subtitle_show","subtitle_hide","subtitle_change"]}var m,x;return m=p,(x=[{key:"on",value:function(f,A){this.type(f)&&typeof A=="function"&&(this.events[f]||(this.events[f]=[]),this.events[f].push(A))}},{key:"trigger",value:function(f,A){if(this.events[f]&&this.events[f].length)for(var v=0;v<this.events[f].length;v++)this.events[f][v](A)}},{key:"type",value:function(f){return this.playerEvents.indexOf(f)!==-1?"player":this.videoEvents.indexOf(f)!==-1?"video":(console.error("Unknown event name: ".concat(f)),null)}}])&&R0(m.prototype,x),Object.defineProperty(m,"prototype",{writable:!1}),p}();function jr(p){return jr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(m){return typeof m}:function(m){return m&&typeof Symbol=="function"&&m.constructor===Symbol&&m!==Symbol.prototype?"symbol":typeof m},jr(p)}function _0(p,m){for(var x=0;x<m.length;x++){var f=m[x];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(p,(A=function(v,S){if(jr(v)!=="object"||v===null)return v;var k=v[Symbol.toPrimitive];if(k!==void 0){var L=k.call(v,"string");if(jr(L)!=="object")return L;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(v)}(f.key),jr(A)==="symbol"?A:String(A)),f)}var A}var D0=function(){function p(f){var A=this;(function(v,S){if(!(v instanceof S))throw new TypeError("Cannot call a class as a function")})(this,p),this.player=f,this.lastScrollPosition={left:0,top:0},this.player.events.on("webfullscreen",function(){A.player.resize()}),this.player.events.on("webfullscreen_cancel",function(){A.player.resize(),q.setScrollPosition(A.lastScrollPosition)}),this.fullscreenchange=function(){A.player.resize(),A.isFullScreen("browser")?A.player.events.trigger("fullscreen"):(q.setScrollPosition(A.lastScrollPosition),A.player.events.trigger("fullscreen_cancel"))},this.docfullscreenchange=function(){var v=document.fullscreenElement||document.mozFullScreenElement||document.msFullscreenElement;v&&v!==A.player.container||(A.player.resize(),v?A.player.events.trigger("fullscreen"):(q.setScrollPosition(A.lastScrollPosition),A.player.events.trigger("fullscreen_cancel")))},/Firefox/.test(navigator.userAgent)?(document.addEventListener("mozfullscreenchange",this.docfullscreenchange),document.addEventListener("fullscreenchange",this.docfullscreenchange)):(this.player.container.addEventListener("fullscreenchange",this.fullscreenchange),this.player.container.addEventListener("webkitfullscreenchange",this.fullscreenchange),document.addEventListener("msfullscreenchange",this.docfullscreenchange),document.addEventListener("MSFullscreenChange",this.docfullscreenchange))}var m,x;return m=p,x=[{key:"isFullScreen",value:function(){var f=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"browser";switch(f){case"browser":return document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement||document.msFullscreenElement;case"web":return this.player.container.classList.contains("dplayer-fulled")}}},{key:"request",value:function(){var f=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"browser",A=f==="browser"?"web":"browser",v=this.isFullScreen(A);switch(v||(this.lastScrollPosition=q.getScrollPosition()),f){case"browser":this.player.container.requestFullscreen?this.player.container.requestFullscreen():this.player.container.mozRequestFullScreen?this.player.container.mozRequestFullScreen():this.player.container.webkitRequestFullscreen?this.player.container.webkitRequestFullscreen():this.player.video.webkitEnterFullscreen?this.player.video.webkitEnterFullscreen():this.player.video.webkitEnterFullScreen?this.player.video.webkitEnterFullScreen():this.player.container.msRequestFullscreen&&this.player.container.msRequestFullscreen();break;case"web":this.player.container.classList.add("dplayer-fulled"),document.body.classList.add("dplayer-web-fullscreen-fix"),this.player.events.trigger("webfullscreen")}v&&this.cancel(A)}},{key:"cancel",value:function(){var f=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"browser";switch(f){case"browser":document.cancelFullScreen?document.cancelFullScreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitCancelFullScreen?document.webkitCancelFullScreen():document.webkitCancelFullscreen?document.webkitCancelFullscreen():document.msCancelFullScreen?document.msCancelFullScreen():document.msExitFullscreen&&document.msExitFullscreen();break;case"web":this.player.container.classList.remove("dplayer-fulled"),document.body.classList.remove("dplayer-web-fullscreen-fix"),this.player.events.trigger("webfullscreen_cancel")}}},{key:"toggle",value:function(){var f=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"browser";this.isFullScreen(f)?this.cancel(f):this.request(f)}},{key:"destroy",value:function(){/Firefox/.test(navigator.userAgent)?(document.removeEventListener("mozfullscreenchange",this.docfullscreenchange),document.removeEventListener("fullscreenchange",this.docfullscreenchange)):(this.player.container.removeEventListener("fullscreenchange",this.fullscreenchange),this.player.container.removeEventListener("webkitfullscreenchange",this.fullscreenchange),document.removeEventListener("msfullscreenchange",this.docfullscreenchange),document.removeEventListener("MSFullscreenChange",this.docfullscreenchange))}}],x&&_0(m.prototype,x),Object.defineProperty(m,"prototype",{writable:!1}),p}();const P0=D0;function qr(p){return qr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(m){return typeof m}:function(m){return m&&typeof Symbol=="function"&&m.constructor===Symbol&&m!==Symbol.prototype?"symbol":typeof m},qr(p)}function B0(p,m){for(var x=0;x<m.length;x++){var f=m[x];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(p,(A=function(v,S){if(qr(v)!=="object"||v===null)return v;var k=v[Symbol.toPrimitive];if(k!==void 0){var L=k.call(v,"string");if(qr(L)!=="object")return L;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(v)}(f.key),qr(A)==="symbol"?A:String(A)),f)}var A}var O0=function(){function p(f){(function(A,v){if(!(A instanceof v))throw new TypeError("Cannot call a class as a function")})(this,p),this.storageName={opacity:"dplayer-danmaku-opacity",volume:"dplayer-volume",unlimited:"dplayer-danmaku-unlimited",danmaku:"dplayer-danmaku-show",subtitle:"dplayer-subtitle-show"},this.default={opacity:.7,volume:f.options.hasOwnProperty("volume")?f.options.volume:.7,unlimited:(f.options.danmaku&&f.options.danmaku.unlimited?1:0)||0,danmaku:1,subtitle:1},this.data={},this.init()}var m,x;return m=p,(x=[{key:"init",value:function(){for(var f in this.storageName){var A=this.storageName[f];this.data[f]=parseFloat(q.storage.get(A)||this.default[f])}}},{key:"get",value:function(f){return this.data[f]}},{key:"set",value:function(f,A){this.data[f]=A,q.storage.set(this.storageName[f],A)}}])&&B0(m.prototype,x),Object.defineProperty(m,"prototype",{writable:!1}),p}();const F0=O0;function Vr(p){return Vr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(m){return typeof m}:function(m){return m&&typeof Symbol=="function"&&m.constructor===Symbol&&m!==Symbol.prototype?"symbol":typeof m},Vr(p)}function M0(p,m){for(var x=0;x<m.length;x++){var f=m[x];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(p,(A=function(v,S){if(Vr(v)!=="object"||v===null)return v;var k=v[Symbol.toPrimitive];if(k!==void 0){var L=k.call(v,"string");if(Vr(L)!=="object")return L;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(v)}(f.key),Vr(A)==="symbol"?A:String(A)),f)}var A}var N0=function(){function p(f,A,v,S){(function(k,L){if(!(k instanceof L))throw new TypeError("Cannot call a class as a function")})(this,p),this.container=f,this.video=A,this.options=v,this.events=S,this.init()}var m,x;return m=p,x=[{key:"init",value:function(){var f=this;if(this.container.style.fontSize=this.options.fontSize,this.container.style.bottom=this.options.bottom,this.container.style.color=this.options.color,this.video.textTracks&&this.video.textTracks[0]){var A=this.video.textTracks[0];A.oncuechange=function(){var v=A.activeCues[A.activeCues.length-1];if(f.container.innerHTML="",v){var S=document.createElement("div");S.appendChild(v.getCueAsHTML());var k=S.innerHTML.split(/\r?\n/).map(function(L){return"<p>".concat(L,"</p>")}).join("");f.container.innerHTML=k}f.events.trigger("subtitle_change")}}}},{key:"show",value:function(){this.container.classList.remove("dplayer-subtitle-hide"),this.events.trigger("subtitle_show")}},{key:"hide",value:function(){this.container.classList.add("dplayer-subtitle-hide"),this.events.trigger("subtitle_hide")}},{key:"toggle",value:function(){this.container.classList.contains("dplayer-subtitle-hide")?this.show():this.hide()}}],x&&M0(m.prototype,x),Object.defineProperty(m,"prototype",{writable:!1}),p}();const U0=N0;function Wr(p){return Wr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(m){return typeof m}:function(m){return m&&typeof Symbol=="function"&&m.constructor===Symbol&&m!==Symbol.prototype?"symbol":typeof m},Wr(p)}function $0(p,m){for(var x=0;x<m.length;x++){var f=m[x];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(p,(A=function(v,S){if(Wr(v)!=="object"||v===null)return v;var k=v[Symbol.toPrimitive];if(k!==void 0){var L=k.call(v,"string");if(Wr(L)!=="object")return L;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(v)}(f.key),Wr(A)==="symbol"?A:String(A)),f)}var A}var H0=function(){function p(f){var A=this;(function(L,N){if(!(L instanceof N))throw new TypeError("Cannot call a class as a function")})(this,p),this.player=f,this.player.template.mask.addEventListener("click",function(){A.hide()}),this.player.template.subtitlesButton.addEventListener("click",function(){A.adaptiveHeight(),A.show()});for(var v=this.player.template.subtitlesItem.length-1,S=function(L){A.player.template.subtitlesItem[L].addEventListener("click",function(){A.hide(),A.player.options.subtitle.index!==L&&(A.player.template.subtitle.innerHTML="<p></p>",A.player.template.subtrack.src=A.player.template.subtitlesItem[L].dataset.subtitle,A.player.options.subtitle.index=L,A.player.template.subtitle.classList.contains("dplayer-subtitle-hide")&&A.subContainerShow())})},k=0;k<v;k++)S(k);this.player.template.subtitlesItem[v].addEventListener("click",function(){A.hide(),A.player.options.subtitle.index!==v&&(A.player.template.subtitle.innerHTML="<p></p>",A.player.template.subtrack.src="",A.player.options.subtitle.index=v,A.subContainerHide())})}var m,x;return m=p,(x=[{key:"subContainerShow",value:function(){this.player.template.subtitle.classList.remove("dplayer-subtitle-hide"),this.player.events.trigger("subtitle_show")}},{key:"subContainerHide",value:function(){this.player.template.subtitle.classList.add("dplayer-subtitle-hide"),this.player.events.trigger("subtitle_hide")}},{key:"hide",value:function(){this.player.template.subtitlesBox.classList.remove("dplayer-subtitles-box-open"),this.player.template.mask.classList.remove("dplayer-mask-show"),this.player.controller.disableAutoHide=!1}},{key:"show",value:function(){this.player.template.subtitlesBox.classList.add("dplayer-subtitles-box-open"),this.player.template.mask.classList.add("dplayer-mask-show"),this.player.controller.disableAutoHide=!0}},{key:"adaptiveHeight",value:function(){var f=30*this.player.template.subtitlesItem.length+14,A=.8*this.player.template.videoWrap.offsetHeight;f>=A-50?(this.player.template.subtitlesBox.style.bottom="8px",this.player.template.subtitlesBox.style["max-height"]=A-8+"px"):(this.player.template.subtitlesBox.style.bottom="50px",this.player.template.subtitlesBox.style["max-height"]=A-50+"px")}}])&&$0(m.prototype,x),Object.defineProperty(m,"prototype",{writable:!1}),p}();const G0=H0;function Yr(p){return Yr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(m){return typeof m}:function(m){return m&&typeof Symbol=="function"&&m.constructor===Symbol&&m!==Symbol.prototype?"symbol":typeof m},Yr(p)}function K0(p,m){for(var x=0;x<m.length;x++){var f=m[x];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(p,(A=function(v,S){if(Yr(v)!=="object"||v===null)return v;var k=v[Symbol.toPrimitive];if(k!==void 0){var L=k.call(v,"string");if(Yr(L)!=="object")return L;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(v)}(f.key),Yr(A)==="symbol"?A:String(A)),f)}var A}var z0=function(){function p(f){(function(A,v){if(!(A instanceof v))throw new TypeError("Cannot call a class as a function")})(this,p),this.elements={},this.elements.volume=f.volumeBar,this.elements.played=f.playedBar,this.elements.loaded=f.loadedBar,this.elements.danmaku=f.danmakuOpacityBar}var m,x;return m=p,(x=[{key:"set",value:function(f,A,v){A=Math.max(A,0),A=Math.min(A,1),this.elements[f].style[v]=100*A+"%"}},{key:"get",value:function(f){return parseFloat(this.elements[f].style.width)/100}}])&&K0(m.prototype,x),Object.defineProperty(m,"prototype",{writable:!1}),p}();const j0=z0;function Qr(p){return Qr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(m){return typeof m}:function(m){return m&&typeof Symbol=="function"&&m.constructor===Symbol&&m!==Symbol.prototype?"symbol":typeof m},Qr(p)}function q0(p,m){for(var x=0;x<m.length;x++){var f=m[x];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(p,(A=function(v,S){if(Qr(v)!=="object"||v===null)return v;var k=v[Symbol.toPrimitive];if(k!==void 0){var L=k.call(v,"string");if(Qr(L)!=="object")return L;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(v)}(f.key),Qr(A)==="symbol"?A:String(A)),f)}var A}var V0=function(){function p(f){(function(A,v){if(!(A instanceof v))throw new TypeError("Cannot call a class as a function")})(this,p),this.player=f,window.requestAnimationFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(A){window.setTimeout(A,1e3/60)},this.types=["loading","info","fps"],this.init()}var m,x;return m=p,(x=[{key:"init",value:function(){var f=this;this.types.map(function(A){return A!=="fps"&&f["init".concat(A,"Checker")](),A})}},{key:"initloadingChecker",value:function(){var f=this,A=0,v=0,S=!1;this.loadingChecker=setInterval(function(){f.enableloadingChecker&&(v=f.player.video.currentTime,S||v!==A||f.player.video.paused||(f.player.container.classList.add("dplayer-loading"),S=!0),S&&v>A&&!f.player.video.paused&&(f.player.container.classList.remove("dplayer-loading"),S=!1),A=v)},100)}},{key:"initfpsChecker",value:function(){var f=this;window.requestAnimationFrame(function(){if(f.enablefpsChecker)if(f.initfpsChecker(),f.fpsStart){f.fpsIndex++;var A=new Date;A-f.fpsStart>1e3&&(f.player.infoPanel.fps(f.fpsIndex/(A-f.fpsStart)*1e3),f.fpsStart=new Date,f.fpsIndex=0)}else f.fpsStart=new Date,f.fpsIndex=0;else f.fpsStart=0,f.fpsIndex=0})}},{key:"initinfoChecker",value:function(){var f=this;this.infoChecker=setInterval(function(){f.enableinfoChecker&&f.player.infoPanel.update()},1e3)}},{key:"enable",value:function(f){this["enable".concat(f,"Checker")]=!0,f==="fps"&&this.initfpsChecker()}},{key:"disable",value:function(f){this["enable".concat(f,"Checker")]=!1}},{key:"destroy",value:function(){var f=this;this.types.map(function(A){return f["enable".concat(A,"Checker")]=!1,f["".concat(A,"Checker")]&&clearInterval(f["".concat(A,"Checker")]),A})}}])&&q0(m.prototype,x),Object.defineProperty(m,"prototype",{writable:!1}),p}();const W0=V0;function Xr(p){return Xr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(m){return typeof m}:function(m){return m&&typeof Symbol=="function"&&m.constructor===Symbol&&m!==Symbol.prototype?"symbol":typeof m},Xr(p)}function Y0(p,m){for(var x=0;x<m.length;x++){var f=m[x];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(p,(A=function(v,S){if(Xr(v)!=="object"||v===null)return v;var k=v[Symbol.toPrimitive];if(k!==void 0){var L=k.call(v,"string");if(Xr(L)!=="object")return L;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(v)}(f.key),Xr(A)==="symbol"?A:String(A)),f)}var A}const Q0=function(){function p(f){var A=this;(function(v,S){if(!(v instanceof S))throw new TypeError("Cannot call a class as a function")})(this,p),this.container=f,this.container.addEventListener("animationend",function(){A.container.classList.remove("dplayer-bezel-transition")})}var m,x;return m=p,(x=[{key:"switch",value:function(f){this.container.innerHTML=f,this.container.classList.add("dplayer-bezel-transition")}}])&&Y0(m.prototype,x),Object.defineProperty(m,"prototype",{writable:!1}),p}();function Jr(p){return Jr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(m){return typeof m}:function(m){return m&&typeof Symbol=="function"&&m.constructor===Symbol&&m!==Symbol.prototype?"symbol":typeof m},Jr(p)}function X0(p,m){for(var x=0;x<m.length;x++){var f=m[x];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(p,(A=function(v,S){if(Jr(v)!=="object"||v===null)return v;var k=v[Symbol.toPrimitive];if(k!==void 0){var L=k.call(v,"string");if(Jr(L)!=="object")return L;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(v)}(f.key),Jr(A)==="symbol"?A:String(A)),f)}var A}var J0=function(){function p(f){(function(A,v){if(!(A instanceof v))throw new TypeError("Cannot call a class as a function")})(this,p),this.container=f.container,this.barWidth=f.barWidth,this.container.style.backgroundImage="url('".concat(f.url,"')"),this.events=f.events}var m,x;return m=p,(x=[{key:"resize",value:function(f,A,v){this.container.style.width="".concat(f,"px"),this.container.style.height="".concat(A,"px"),this.container.style.top="".concat(2-A,"px"),this.barWidth=v}},{key:"show",value:function(){this.container.style.display="block",this.events&&this.events.trigger("thumbnails_show")}},{key:"move",value:function(f){this.container.style.backgroundPosition="-".concat(160*(Math.ceil(f/this.barWidth*100)-1),"px 0"),this.container.style.left="".concat(Math.min(Math.max(f-this.container.offsetWidth/2,-10),this.barWidth-150),"px")}},{key:"hide",value:function(){this.container.style.display="none",this.events&&this.events.trigger("thumbnails_hide")}}])&&X0(m.prototype,x),Object.defineProperty(m,"prototype",{writable:!1}),p}();const Z0=J0;function Zr(p){return Zr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(m){return typeof m}:function(m){return m&&typeof Symbol=="function"&&m.constructor===Symbol&&m!==Symbol.prototype?"symbol":typeof m},Zr(p)}function em(p,m){for(var x=0;x<m.length;x++){var f=m[x];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(p,(A=function(v,S){if(Zr(v)!=="object"||v===null)return v;var k=v[Symbol.toPrimitive];if(k!==void 0){var L=k.call(v,"string");if(Zr(L)!=="object")return L;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(v)}(f.key),Zr(A)==="symbol"?A:String(A)),f)}var A}var xn,uc=!0,To=!1,tm=function(){function p(f){(function(A,v){if(!(A instanceof v))throw new TypeError("Cannot call a class as a function")})(this,p),this.player=f,this.autoHideTimer=0,q.isMobile||(this.setAutoHideHandler=this.setAutoHide.bind(this),this.player.container.addEventListener("mousemove",this.setAutoHideHandler),this.player.container.addEventListener("click",this.setAutoHideHandler),this.player.on("play",this.setAutoHideHandler),this.player.on("pause",this.setAutoHideHandler)),this.initPlayButton(),this.initThumbnails(),this.initPlayedBar(),this.initFullButton(),this.initQualityButton(),this.initScreenshotButton(),this.player.options.subtitle&&typeof this.player.options.subtitle.url=="string"&&this.initSubtitleButton(),this.initHighlights(),this.initAirplayButton(),this.initChromecastButton(),q.isMobile||this.initVolumeButton()}var m,x;return m=p,(x=[{key:"initPlayButton",value:function(){var f=this;this.player.template.playButton.addEventListener("click",function(){f.player.toggle()}),this.player.template.mobilePlayButton.addEventListener("click",function(){f.player.toggle()}),q.isMobile?(this.player.template.videoWrap.addEventListener("click",function(){f.toggle()}),this.player.template.controllerMask.addEventListener("click",function(){f.toggle()})):this.player.options.preventClickToggle||(this.player.template.videoWrap.addEventListener("click",function(){f.player.toggle()}),this.player.template.controllerMask.addEventListener("click",function(){f.player.toggle()}))}},{key:"initHighlights",value:function(){var f=this;this.player.on("durationchange",function(){if(f.player.video.duration!==1&&f.player.video.duration!==1/0&&f.player.options.highlight){var A=f.player.template.playedBarWrap.querySelectorAll(".dplayer-highlight");[].slice.call(A,0).forEach(function(k){f.player.template.playedBarWrap.removeChild(k)});for(var v=0;v<f.player.options.highlight.length;v++)if(f.player.options.highlight[v].text&&f.player.options.highlight[v].time){var S=document.createElement("div");S.classList.add("dplayer-highlight"),S.style.left=f.player.options.highlight[v].time/f.player.video.duration*100+"%",S.innerHTML='<span class="dplayer-highlight-text">'+f.player.options.highlight[v].text+"</span>",f.player.template.playedBarWrap.insertBefore(S,f.player.template.playedBarTime)}}})}},{key:"initThumbnails",value:function(){var f=this;this.player.options.video.thumbnails&&(this.thumbnails=new Z0({container:this.player.template.barPreview,barWidth:this.player.template.barWrap.offsetWidth,url:this.player.options.video.thumbnails,events:this.player.events}),this.player.on("loadedmetadata",function(){f.thumbnails.resize(160,f.player.video.videoHeight/f.player.video.videoWidth*160,f.player.template.barWrap.offsetWidth)}))}},{key:"initPlayedBar",value:function(){var f=this,A=function(S){var k=((S.clientX||S.changedTouches[0].clientX)-q.getBoundingClientRectViewLeft(f.player.template.playedBarWrap))/f.player.template.playedBarWrap.clientWidth;k=Math.max(k,0),k=Math.min(k,1),f.player.bar.set("played",k,"width"),f.player.template.ptime.innerHTML=q.secondToTime(k*f.player.video.duration)},v=function S(k){document.removeEventListener(q.nameMap.dragEnd,S),document.removeEventListener(q.nameMap.dragMove,A);var L=((k.clientX||k.changedTouches[0].clientX)-q.getBoundingClientRectViewLeft(f.player.template.playedBarWrap))/f.player.template.playedBarWrap.clientWidth;L=Math.max(L,0),L=Math.min(L,1),f.player.bar.set("played",L,"width"),f.player.seek(f.player.bar.get("played")*f.player.video.duration),f.player.timer.enable("progress")};this.player.template.playedBarWrap.addEventListener(q.nameMap.dragStart,function(){f.player.timer.disable("progress"),document.addEventListener(q.nameMap.dragMove,A),document.addEventListener(q.nameMap.dragEnd,v)}),this.player.template.playedBarWrap.addEventListener(q.nameMap.dragMove,function(S){if(f.player.video.duration){var k=f.player.template.playedBarWrap.getBoundingClientRect().left,L=(S.clientX||S.changedTouches[0].clientX)-k;if(L<0||L>f.player.template.playedBarWrap.offsetWidth)return;var N=f.player.video.duration*(L/f.player.template.playedBarWrap.offsetWidth);q.isMobile&&f.thumbnails&&f.thumbnails.show(),f.thumbnails&&f.thumbnails.move(L),f.player.template.playedBarTime.style.left="".concat(L-(N>=3600?25:20),"px"),f.player.template.playedBarTime.innerText=q.secondToTime(N),f.player.template.playedBarTime.classList.remove("hidden")}}),this.player.template.playedBarWrap.addEventListener(q.nameMap.dragEnd,function(){q.isMobile&&f.thumbnails&&f.thumbnails.hide()}),q.isMobile||(this.player.template.playedBarWrap.addEventListener("mouseenter",function(){f.player.video.duration&&(f.thumbnails&&f.thumbnails.show(),f.player.template.playedBarTime.classList.remove("hidden"))}),this.player.template.playedBarWrap.addEventListener("mouseleave",function(){f.player.video.duration&&(f.thumbnails&&f.thumbnails.hide(),f.player.template.playedBarTime.classList.add("hidden"))}))}},{key:"initFullButton",value:function(){var f=this;this.player.template.browserFullButton.addEventListener("click",function(){f.player.fullScreen.toggle("browser")}),this.player.template.webFullButton.addEventListener("click",function(){f.player.fullScreen.toggle("web")})}},{key:"initVolumeButton",value:function(){var f=this,A=function(S){var k=S||window.event,L=((k.clientX||k.changedTouches[0].clientX)-q.getBoundingClientRectViewLeft(f.player.template.volumeBarWrap)-5.5)/35;f.player.volume(L)},v=function S(){document.removeEventListener(q.nameMap.dragEnd,S),document.removeEventListener(q.nameMap.dragMove,A),f.player.template.volumeButton.classList.remove("dplayer-volume-active")};this.player.template.volumeBarWrapWrap.addEventListener("click",function(S){var k=S||window.event,L=((k.clientX||k.changedTouches[0].clientX)-q.getBoundingClientRectViewLeft(f.player.template.volumeBarWrap)-5.5)/35;f.player.volume(L)}),this.player.template.volumeBarWrapWrap.addEventListener(q.nameMap.dragStart,function(){document.addEventListener(q.nameMap.dragMove,A),document.addEventListener(q.nameMap.dragEnd,v),f.player.template.volumeButton.classList.add("dplayer-volume-active")}),this.player.template.volumeButtonIcon.addEventListener("click",function(){f.player.video.muted?(f.player.video.muted=!1,f.player.switchVolumeIcon(),f.player.bar.set("volume",f.player.volume(),"width")):(f.player.video.muted=!0,f.player.template.volumeIcon.innerHTML=Ut.volumeOff,f.player.bar.set("volume",0,"width"))})}},{key:"initQualityButton",value:function(){var f=this;this.player.options.video.quality&&this.player.template.qualityList.addEventListener("click",function(A){A.target.classList.contains("dplayer-quality-item")&&f.player.switchQuality(A.target.dataset.index)})}},{key:"initScreenshotButton",value:function(){var f=this;this.player.options.screenshot&&this.player.template.camareButton.addEventListener("click",function(){var A,v=document.createElement("canvas");v.width=f.player.video.videoWidth,v.height=f.player.video.videoHeight,v.getContext("2d").drawImage(f.player.video,0,0,v.width,v.height),v.toBlob(function(S){A=URL.createObjectURL(S);var k=document.createElement("a");k.href=A,k.download="DPlayer.png",k.style.display="none",document.body.appendChild(k),k.click(),document.body.removeChild(k),URL.revokeObjectURL(A),f.player.events.trigger("screenshot",A)})})}},{key:"initAirplayButton",value:function(){this.player.options.airplay&&(window.WebKitPlaybackTargetAvailabilityEvent?this.player.video.addEventListener("webkitplaybacktargetavailabilitychanged",(function(f){f.availability==="available"?this.template.airplayButton.disable=!1:this.template.airplayButton.disable=!0,this.template.airplayButton.addEventListener("click",(function(){this.video.webkitShowPlaybackTargetPicker()}).bind(this))}).bind(this.player)):this.player.template.airplayButton.style.display="none")}},{key:"initChromecast",value:function(){var f=window.document.createElement("script");f.setAttribute("type","text/javascript"),f.setAttribute("src","https://www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1"),window.document.body.appendChild(f),window.__onGCastApiAvailable=function(A){if(A){var v=new(xn=window.chrome.cast).SessionRequest(xn.media.DEFAULT_MEDIA_RECEIVER_APP_ID),S=new xn.ApiConfig(v,function(){},function(k){k===xn.ReceiverAvailability.AVAILABLE&&console.log("chromecast: ",k)});xn.initialize(S,function(){})}}}},{key:"initChromecastButton",value:function(){var f=this;if(this.player.options.chromecast){uc&&(uc=!1,this.initChromecast());var A=function(S,k){f.currentMedia=k},v=function(S){console.error("Error launching media",S)};this.player.template.chromecastButton.addEventListener("click",function(){To?(To=!1,f.currentMedia.stop(),f.session.stop(),f.initChromecast()):(To=!0,xn.requestSession(function(S){var k,L,N;f.session=S,k=f.player.options.video.url,L=new xn.media.MediaInfo(k),N=new xn.media.LoadRequest(L),f.session?f.session.loadMedia(N,A.bind(f,"loadMedia"),v).play():window.open(k)},function(S){S.code==="cancel"?f.session=void 0:console.error("Error selecting a cast device",S)}))})}}},{key:"initSubtitleButton",value:function(){var f=this;this.player.events.on("subtitle_show",function(){f.player.template.subtitleButton.dataset.balloon=f.player.tran("hide-subs"),f.player.template.subtitleButtonInner.style.opacity="",f.player.user.set("subtitle",1)}),this.player.events.on("subtitle_hide",function(){f.player.template.subtitleButton.dataset.balloon=f.player.tran("show-subs"),f.player.template.subtitleButtonInner.style.opacity="0.4",f.player.user.set("subtitle",0)}),this.player.template.subtitleButton.addEventListener("click",function(){f.player.subtitle.toggle()})}},{key:"setAutoHide",value:function(){var f=this;this.show(),clearTimeout(this.autoHideTimer),this.autoHideTimer=setTimeout(function(){!f.player.video.played.length||f.player.paused||f.disableAutoHide||f.hide()},3e3)}},{key:"show",value:function(){this.player.container.classList.remove("dplayer-hide-controller")}},{key:"hide",value:function(){this.player.container.classList.add("dplayer-hide-controller"),this.player.setting.hide(),this.player.comment&&this.player.comment.hide()}},{key:"isShow",value:function(){return!this.player.container.classList.contains("dplayer-hide-controller")}},{key:"toggle",value:function(){this.isShow()?this.hide():this.show()}},{key:"destroy",value:function(){q.isMobile||(this.player.container.removeEventListener("mousemove",this.setAutoHideHandler),this.player.container.removeEventListener("click",this.setAutoHideHandler)),clearTimeout(this.autoHideTimer)}}])&&em(m.prototype,x),Object.defineProperty(m,"prototype",{writable:!1}),p}();const nm=tm;function ei(p){return ei=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(m){return typeof m}:function(m){return m&&typeof Symbol=="function"&&m.constructor===Symbol&&m!==Symbol.prototype?"symbol":typeof m},ei(p)}function rm(p,m){for(var x=0;x<m.length;x++){var f=m[x];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(p,(A=function(v,S){if(ei(v)!=="object"||v===null)return v;var k=v[Symbol.toPrimitive];if(k!==void 0){var L=k.call(v,"string");if(ei(L)!=="object")return L;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(v)}(f.key),ei(A)==="symbol"?A:String(A)),f)}var A}var im=function(){function p(f){var A=this;(function(N,G){if(!(N instanceof G))throw new TypeError("Cannot call a class as a function")})(this,p),this.player=f,this.player.template.mask.addEventListener("click",function(){A.hide()}),this.player.template.settingButton.addEventListener("click",function(){A.show()}),this.loop=this.player.options.loop,this.player.template.loopToggle.checked=this.loop,this.player.template.loop.addEventListener("click",function(){A.player.template.loopToggle.checked=!A.player.template.loopToggle.checked,A.player.template.loopToggle.checked?A.loop=!0:A.loop=!1,A.hide()}),this.showDanmaku=this.player.user.get("danmaku"),this.showDanmaku||this.player.danmaku&&this.player.danmaku.hide(),this.player.template.showDanmakuToggle.checked=this.showDanmaku,this.player.template.showDanmaku.addEventListener("click",function(){A.player.template.showDanmakuToggle.checked=!A.player.template.showDanmakuToggle.checked,A.player.template.showDanmakuToggle.checked?(A.showDanmaku=!0,A.player.danmaku.show()):(A.showDanmaku=!1,A.player.danmaku.hide()),A.player.user.set("danmaku",A.showDanmaku?1:0),A.hide()}),this.unlimitDanmaku=this.player.user.get("unlimited"),this.player.template.unlimitDanmakuToggle.checked=this.unlimitDanmaku,this.player.template.unlimitDanmaku.addEventListener("click",function(){A.player.template.unlimitDanmakuToggle.checked=!A.player.template.unlimitDanmakuToggle.checked,A.player.template.unlimitDanmakuToggle.checked?(A.unlimitDanmaku=!0,A.player.danmaku.unlimit(!0)):(A.unlimitDanmaku=!1,A.player.danmaku.unlimit(!1)),A.player.user.set("unlimited",A.unlimitDanmaku?1:0),A.hide()}),this.player.template.speed.addEventListener("click",function(){A.player.template.settingBox.classList.add("dplayer-setting-box-narrow"),A.player.template.settingBox.classList.add("dplayer-setting-box-speed")});for(var v=function(N){A.player.template.speedItem[N].addEventListener("click",function(){A.player.speed(A.player.template.speedItem[N].dataset.speed),A.hide()})},S=0;S<this.player.template.speedItem.length;S++)v(S);if(this.player.danmaku){this.player.on("danmaku_opacity",function(N){A.player.bar.set("danmaku",N,"width"),A.player.user.set("opacity",N)}),this.player.danmaku.opacity(this.player.user.get("opacity"));var k=function(N){var G=N||window.event,se=((G.clientX||G.changedTouches[0].clientX)-q.getBoundingClientRectViewLeft(A.player.template.danmakuOpacityBarWrap))/130;se=Math.max(se,0),se=Math.min(se,1),A.player.danmaku.opacity(se)},L=function N(){document.removeEventListener(q.nameMap.dragEnd,N),document.removeEventListener(q.nameMap.dragMove,k),A.player.template.danmakuOpacityBox.classList.remove("dplayer-setting-danmaku-active")};this.player.template.danmakuOpacityBarWrapWrap.addEventListener("click",function(N){var G=N||window.event,se=((G.clientX||G.changedTouches[0].clientX)-q.getBoundingClientRectViewLeft(A.player.template.danmakuOpacityBarWrap))/130;se=Math.max(se,0),se=Math.min(se,1),A.player.danmaku.opacity(se)}),this.player.template.danmakuOpacityBarWrapWrap.addEventListener(q.nameMap.dragStart,function(){document.addEventListener(q.nameMap.dragMove,k),document.addEventListener(q.nameMap.dragEnd,L),A.player.template.danmakuOpacityBox.classList.add("dplayer-setting-danmaku-active")})}}var m,x;return m=p,(x=[{key:"hide",value:function(){var f=this;this.player.template.settingBox.classList.remove("dplayer-setting-box-open"),this.player.template.mask.classList.remove("dplayer-mask-show"),setTimeout(function(){f.player.template.settingBox.classList.remove("dplayer-setting-box-narrow"),f.player.template.settingBox.classList.remove("dplayer-setting-box-speed")},300),this.player.controller.disableAutoHide=!1}},{key:"show",value:function(){this.player.template.settingBox.classList.add("dplayer-setting-box-open"),this.player.template.mask.classList.add("dplayer-mask-show"),this.player.controller.disableAutoHide=!0}}])&&rm(m.prototype,x),Object.defineProperty(m,"prototype",{writable:!1}),p}();const sm=im;function ti(p){return ti=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(m){return typeof m}:function(m){return m&&typeof Symbol=="function"&&m.constructor===Symbol&&m!==Symbol.prototype?"symbol":typeof m},ti(p)}function om(p,m){for(var x=0;x<m.length;x++){var f=m[x];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(p,(A=function(v,S){if(ti(v)!=="object"||v===null)return v;var k=v[Symbol.toPrimitive];if(k!==void 0){var L=k.call(v,"string");if(ti(L)!=="object")return L;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(v)}(f.key),ti(A)==="symbol"?A:String(A)),f)}var A}var am=function(){function p(f){var A=this;(function(v,S){if(!(v instanceof S))throw new TypeError("Cannot call a class as a function")})(this,p),this.player=f,this.player.template.mask.addEventListener("click",function(){A.hide()}),this.player.template.commentButton.addEventListener("click",function(){A.show()}),this.player.template.commentSettingButton.addEventListener("click",function(){A.toggleSetting()}),this.player.template.commentColorSettingBox.addEventListener("click",function(){if(A.player.template.commentColorSettingBox.querySelector("input:checked+span")){var v=A.player.template.commentColorSettingBox.querySelector("input:checked").value;A.player.template.commentSettingFill.style.fill=v,A.player.template.commentInput.style.color=v,A.player.template.commentSendFill.style.fill=v}}),this.player.template.commentInput.addEventListener("click",function(){A.hideSetting()}),this.player.template.commentInput.addEventListener("keydown",function(v){(v||window.event).keyCode===13&&A.send()}),this.player.template.commentSendButton.addEventListener("click",function(){A.send()})}var m,x;return m=p,(x=[{key:"show",value:function(){this.player.controller.disableAutoHide=!0,this.player.template.controller.classList.add("dplayer-controller-comment"),this.player.template.mask.classList.add("dplayer-mask-show"),this.player.container.classList.add("dplayer-show-controller"),this.player.template.commentInput.focus()}},{key:"hide",value:function(){this.player.template.controller.classList.remove("dplayer-controller-comment"),this.player.template.mask.classList.remove("dplayer-mask-show"),this.player.container.classList.remove("dplayer-show-controller"),this.player.controller.disableAutoHide=!1,this.hideSetting()}},{key:"showSetting",value:function(){this.player.template.commentSettingBox.classList.add("dplayer-comment-setting-open")}},{key:"hideSetting",value:function(){this.player.template.commentSettingBox.classList.remove("dplayer-comment-setting-open")}},{key:"toggleSetting",value:function(){this.player.template.commentSettingBox.classList.contains("dplayer-comment-setting-open")?this.hideSetting():this.showSetting()}},{key:"send",value:function(){var f=this;this.player.template.commentInput.blur(),this.player.template.commentInput.value.replace(/^\s+|\s+$/g,"")?this.player.danmaku.send({text:this.player.template.commentInput.value,color:q.color2Number(this.player.container.querySelector(".dplayer-comment-setting-color input:checked").value),type:parseInt(this.player.container.querySelector(".dplayer-comment-setting-type input:checked").value)},function(){f.player.template.commentInput.value="",f.hide()}):this.player.notice(this.player.tran("please-input-danmaku"))}}])&&om(m.prototype,x),Object.defineProperty(m,"prototype",{writable:!1}),p}();const lm=am;function ni(p){return ni=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(m){return typeof m}:function(m){return m&&typeof Symbol=="function"&&m.constructor===Symbol&&m!==Symbol.prototype?"symbol":typeof m},ni(p)}function cm(p,m){for(var x=0;x<m.length;x++){var f=m[x];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(p,(A=function(v,S){if(ni(v)!=="object"||v===null)return v;var k=v[Symbol.toPrimitive];if(k!==void 0){var L=k.call(v,"string");if(ni(L)!=="object")return L;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(v)}(f.key),ni(A)==="symbol"?A:String(A)),f)}var A}var dm=function(){function p(f){(function(A,v){if(!(A instanceof v))throw new TypeError("Cannot call a class as a function")})(this,p),this.player=f,this.doHotKeyHandler=this.doHotKey.bind(this),this.cancelFullScreenHandler=this.cancelFullScreen.bind(this),this.player.options.hotkey&&document.addEventListener("keydown",this.doHotKeyHandler),document.addEventListener("keydown",this.cancelFullScreenHandler)}var m,x;return m=p,(x=[{key:"doHotKey",value:function(f){if(this.player.focus){var A=document.activeElement.tagName.toUpperCase(),v=document.activeElement.getAttribute("contenteditable");if(A!=="INPUT"&&A!=="TEXTAREA"&&v!==""&&v!=="true"){var S,k=f||window.event;switch(k.keyCode){case 32:k.preventDefault(),this.player.toggle();break;case 37:if(k.preventDefault(),this.player.options.live)break;this.player.seek(this.player.video.currentTime-5),this.player.controller.setAutoHide();break;case 39:if(k.preventDefault(),this.player.options.live)break;this.player.seek(this.player.video.currentTime+5),this.player.controller.setAutoHide();break;case 38:k.preventDefault(),S=this.player.volume()+.1,this.player.volume(S);break;case 40:k.preventDefault(),S=this.player.volume()-.1,this.player.volume(S)}}}}},{key:"cancelFullScreen",value:function(f){(f||window.event).keyCode===27&&this.player.fullScreen.isFullScreen("web")&&this.player.fullScreen.cancel("web")}},{key:"destroy",value:function(){this.player.options.hotkey&&document.removeEventListener("keydown",this.doHotKeyHandler),document.removeEventListener("keydown",this.cancelFullScreenHandler)}}])&&cm(m.prototype,x),Object.defineProperty(m,"prototype",{writable:!1}),p}();const um=dm;function ri(p){return ri=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(m){return typeof m}:function(m){return m&&typeof Symbol=="function"&&m.constructor===Symbol&&m!==Symbol.prototype?"symbol":typeof m},ri(p)}function hm(p,m){for(var x=0;x<m.length;x++){var f=m[x];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(p,(A=function(v,S){if(ri(v)!=="object"||v===null)return v;var k=v[Symbol.toPrimitive];if(k!==void 0){var L=k.call(v,"string");if(ri(L)!=="object")return L;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(v)}(f.key),ri(A)==="symbol"?A:String(A)),f)}var A}var fm=function(){function p(f){var A=this;(function(v,S){if(!(v instanceof S))throw new TypeError("Cannot call a class as a function")})(this,p),this.player=f,this.shown=!1,Array.prototype.slice.call(this.player.template.menuItem).forEach(function(v,S){A.player.options.contextmenu[S].click&&v.addEventListener("click",function(){A.player.options.contextmenu[S].click(A.player),A.hide()})}),this.contextmenuHandler=function(v){if(A.shown)A.hide();else{var S=v||window.event;S.preventDefault();var k=A.player.container.getBoundingClientRect();A.show(S.clientX-k.left,S.clientY-k.top),A.player.template.mask.addEventListener("click",function(){A.hide()})}},this.player.container.addEventListener("contextmenu",this.contextmenuHandler)}var m,x;return m=p,(x=[{key:"show",value:function(f,A){this.player.template.menu.classList.add("dplayer-menu-show");var v=this.player.container.getBoundingClientRect();f+this.player.template.menu.offsetWidth>=v.width?(this.player.template.menu.style.right=v.width-f+"px",this.player.template.menu.style.left="initial"):(this.player.template.menu.style.left=f+"px",this.player.template.menu.style.right="initial"),A+this.player.template.menu.offsetHeight>=v.height?(this.player.template.menu.style.bottom=v.height-A+"px",this.player.template.menu.style.top="initial"):(this.player.template.menu.style.top=A+"px",this.player.template.menu.style.bottom="initial"),this.player.template.mask.classList.add("dplayer-mask-show"),this.shown=!0,this.player.events.trigger("contextmenu_show")}},{key:"hide",value:function(){this.player.template.mask.classList.remove("dplayer-mask-show"),this.player.template.menu.classList.remove("dplayer-menu-show"),this.shown=!1,this.player.events.trigger("contextmenu_hide")}},{key:"destroy",value:function(){this.player.container.removeEventListener("contextmenu",this.contextmenuHandler)}}])&&hm(m.prototype,x),Object.defineProperty(m,"prototype",{writable:!1}),p}();const pm=fm;function ii(p){return ii=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(m){return typeof m}:function(m){return m&&typeof Symbol=="function"&&m.constructor===Symbol&&m!==Symbol.prototype?"symbol":typeof m},ii(p)}function mm(p,m){for(var x=0;x<m.length;x++){var f=m[x];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(p,(A=function(v,S){if(ii(v)!=="object"||v===null)return v;var k=v[Symbol.toPrimitive];if(k!==void 0){var L=k.call(v,"string");if(ii(L)!=="object")return L;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(v)}(f.key),ii(A)==="symbol"?A:String(A)),f)}var A}var gm=function(){function p(f){var A=this;(function(v,S){if(!(v instanceof S))throw new TypeError("Cannot call a class as a function")})(this,p),this.container=f.template.infoPanel,this.template=f.template,this.video=f.video,this.player=f,this.template.infoPanelClose.addEventListener("click",function(){A.hide()})}var m,x;return m=p,(x=[{key:"show",value:function(){this.beginTime=Date.now(),this.update(),this.player.timer.enable("info"),this.player.timer.enable("fps"),this.container.classList.remove("dplayer-info-panel-hide")}},{key:"hide",value:function(){this.player.timer.disable("info"),this.player.timer.disable("fps"),this.container.classList.add("dplayer-info-panel-hide")}},{key:"triggle",value:function(){this.container.classList.contains("dplayer-info-panel-hide")?this.show():this.hide()}},{key:"update",value:function(){this.template.infoVersion.innerHTML="v".concat("1.27.1"," ").concat("v1.27.0-12-g4f61091"),this.template.infoType.innerHTML=this.player.type,this.template.infoUrl.innerHTML=this.player.options.video.url,this.template.infoResolution.innerHTML="".concat(this.player.video.videoWidth," x ").concat(this.player.video.videoHeight),this.template.infoDuration.innerHTML=this.player.video.duration,this.player.options.danmaku&&(this.template.infoDanmakuId.innerHTML=this.player.options.danmaku.id,this.template.infoDanmakuApi.innerHTML=this.player.options.danmaku.api,this.template.infoDanmakuAmount.innerHTML=this.player.danmaku.dan.length)}},{key:"fps",value:function(f){this.template.infoFPS.innerHTML="".concat(f.toFixed(1))}}])&&mm(m.prototype,x),Object.defineProperty(m,"prototype",{writable:!1}),p}();const ym=gm;var Am=i(568),bm=i.n(Am);function si(p){return si=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(m){return typeof m}:function(m){return m&&typeof Symbol=="function"&&m.constructor===Symbol&&m!==Symbol.prototype?"symbol":typeof m},si(p)}function hc(p,m){var x=Object.keys(p);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(p);m&&(f=f.filter(function(A){return Object.getOwnPropertyDescriptor(p,A).enumerable})),x.push.apply(x,f)}return x}function vm(p,m,x){return(m=pc(m))in p?Object.defineProperty(p,m,{value:x,enumerable:!0,configurable:!0,writable:!0}):p[m]=x,p}function fc(p,m){for(var x=0;x<m.length;x++){var f=m[x];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(p,pc(f.key),f)}}function pc(p){var m=function(x,f){if(si(x)!=="object"||x===null)return x;var A=x[Symbol.toPrimitive];if(A!==void 0){var v=A.call(x,"string");if(si(v)!=="object")return v;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(x)}(p);return si(m)==="symbol"?m:String(m)}var mc=0,nr=[],Em=function(){function p(A){var v=this;(function(S,k){if(!(S instanceof k))throw new TypeError("Cannot call a class as a function")})(this,p),this.options=function(S){var k={container:S.element||document.getElementsByClassName("dplayer")[0],live:!1,autoplay:!1,theme:"#b7daff",loop:!1,lang:(navigator.language||navigator.browserLanguage).toLowerCase(),screenshot:!1,airplay:!0,chromecast:!1,hotkey:!0,preload:"metadata",volume:.7,playbackSpeed:[.5,.75,1,1.25,1.5,2],apiBackend:Up,video:{},contextmenu:[],mutex:!0,pluginOptions:{hls:{},flv:{},dash:{},webtorrent:{}},preventClickToggle:!1};for(var L in k)k.hasOwnProperty(L)&&!S.hasOwnProperty(L)&&(S[L]=k[L]);return S.video&&!S.video.type&&(S.video.type="auto"),xo(S.danmaku)==="object"&&S.danmaku&&!S.danmaku.user&&(S.danmaku.user="DIYgod"),S.subtitle&&(!S.subtitle.type&&(S.subtitle.type="webvtt"),!S.subtitle.fontSize&&(S.subtitle.fontSize="20px"),!S.subtitle.bottom&&(S.subtitle.bottom="40px"),!S.subtitle.color&&(S.subtitle.color="#fff")),S.video.quality&&(S.video.url=S.video.quality[S.video.defaultQuality].url),S.lang&&(S.lang=S.lang.toLowerCase()),S.contextmenu=S.contextmenu.concat([{key:"video-info",click:function(N){N.infoPanel.triggle()}},{key:"about-author",link:"https://diygod.me"},{text:"DPlayer v".concat("1.27.1"),link:"https://github.com/MoePlayer/DPlayer"}]),S}(function(S){for(var k=1;k<arguments.length;k++){var L=arguments[k]!=null?arguments[k]:{};k%2?hc(Object(L),!0).forEach(function(N){vm(S,N,L[N])}):Object.getOwnPropertyDescriptors?Object.defineProperties(S,Object.getOwnPropertyDescriptors(L)):hc(Object(L)).forEach(function(N){Object.defineProperty(S,N,Object.getOwnPropertyDescriptor(L,N))})}return S}({preload:A.video.type==="webtorrent"?"none":"metadata"},A)),this.options.video.quality&&(this.qualityIndex=this.options.video.defaultQuality,this.quality=this.options.video.quality[this.options.video.defaultQuality]),this.tran=new $p(this.options.lang).tran,this.events=new I0,this.user=new F0(this),this.container=this.options.container,this.noticeList={},this.container.classList.add("dplayer"),this.options.danmaku||this.container.classList.add("dplayer-no-danmaku"),this.options.live?this.container.classList.add("dplayer-live"):this.container.classList.remove("dplayer-live"),q.isMobile&&this.container.classList.add("dplayer-mobile"),this.arrow=this.container.offsetWidth<=500,this.arrow&&this.container.classList.add("dplayer-arrow"),this.options.subtitle&&Array.isArray(this.options.subtitle.url)&&(this.options.subtitle.url.push({subtitle:"",lang:"off"}),this.options.subtitle.defaultSubtitle&&(typeof this.options.subtitle.defaultSubtitle=="string"?this.options.subtitle.index=this.options.subtitle.url.findIndex(function(S){return S.lang===v.options.subtitle.defaultSubtitle||S.name===v.options.subtitle.defaultSubtitle}):typeof this.options.subtitle.defaultSubtitle=="number"&&(this.options.subtitle.index=this.options.subtitle.defaultSubtitle)),(this.options.subtitle.index===-1||!this.options.subtitle.index||this.options.subtitle.index>this.options.subtitle.url.length-1)&&(this.options.subtitle.index=this.options.subtitle.url.findIndex(function(S){return S.lang===v.options.lang})),this.options.subtitle.index===-1&&(this.options.subtitle.index=this.options.subtitle.url.length-1)),this.template=new dc({container:this.container,options:this.options,index:mc,tran:this.tran}),this.video=this.template.video,this.bar=new j0(this.template),this.bezel=new Q0(this.template.bezel),this.fullScreen=new P0(this),this.controller=new nm(this),this.options.danmaku&&(this.danmaku=new L0({player:this,container:this.template.danmaku,opacity:this.user.get("opacity"),callback:function(){setTimeout(function(){v.template.danmakuLoading.style.display="none",v.options.autoplay&&v.play()},0)},error:function(S){v.notice(S)},apiBackend:this.options.apiBackend,borderColor:this.options.theme,height:this.arrow?24:30,time:function(){return v.video.currentTime},unlimited:this.user.get("unlimited"),api:{id:this.options.danmaku.id,address:this.options.danmaku.api,token:this.options.danmaku.token,maximum:this.options.danmaku.maximum,addition:this.options.danmaku.addition,user:this.options.danmaku.user,speedRate:this.options.danmaku.speedRate},events:this.events,tran:function(S){return v.tran(S)}}),this.comment=new lm(this)),this.setting=new sm(this),this.plugins={},this.docClickFun=function(){v.focus=!1},this.containerClickFun=function(){v.focus=!0},document.addEventListener("click",this.docClickFun,!0),this.container.addEventListener("click",this.containerClickFun,!0),this.paused=!0,this.timer=new W0(this),this.hotkey=new um(this),this.contextmenu=new pm(this),this.initVideo(this.video,this.quality&&this.quality.type||this.options.video.type),this.infoPanel=new ym(this),!this.danmaku&&this.options.autoplay&&this.play(),mc++,nr.push(this)}var m,x,f;return m=p,x=[{key:"seek",value:function(A){A=Math.max(A,0),this.video.duration&&(A=Math.min(A,this.video.duration)),this.video.currentTime<A?this.notice("".concat(this.tran("ff").replace("%s",(A-this.video.currentTime).toFixed(0)))):this.video.currentTime>A&&this.notice("".concat(this.tran("rew").replace("%s",(this.video.currentTime-A).toFixed(0)))),this.video.currentTime=A,this.danmaku&&this.danmaku.seek(),this.bar.set("played",A/this.video.duration,"width"),this.template.ptime.innerHTML=q.secondToTime(A)}},{key:"play",value:function(A){var v=this;if(this.paused=!1,this.video.paused&&!q.isMobile&&this.bezel.switch(Ut.play),this.template.playButton.innerHTML=Ut.pause,this.template.mobilePlayButton.innerHTML=Ut.pause,A||ye.resolve(this.video.play()).catch(function(){v.pause()}).then(function(){}),this.timer.enable("loading"),this.container.classList.remove("dplayer-paused"),this.container.classList.add("dplayer-playing"),this.danmaku&&this.danmaku.play(),this.options.mutex)for(var S=0;S<nr.length;S++)this!==nr[S]&&nr[S].pause()}},{key:"pause",value:function(A){this.paused=!0,this.container.classList.remove("dplayer-loading"),this.video.paused||q.isMobile||this.bezel.switch(Ut.pause),this.template.playButton.innerHTML=Ut.play,this.template.mobilePlayButton.innerHTML=Ut.play,A||this.video.pause(),this.timer.disable("loading"),this.container.classList.remove("dplayer-playing"),this.container.classList.add("dplayer-paused"),this.danmaku&&this.danmaku.pause()}},{key:"switchVolumeIcon",value:function(){this.volume()>=.95?this.template.volumeIcon.innerHTML=Ut.volumeUp:this.volume()>0?this.template.volumeIcon.innerHTML=Ut.volumeDown:this.template.volumeIcon.innerHTML=Ut.volumeOff}},{key:"volume",value:function(A,v,S){if(A=parseFloat(A),!isNaN(A)){A=Math.max(A,0),A=Math.min(A,1),this.bar.set("volume",A,"width");var k="".concat((100*A).toFixed(0),"%");this.template.volumeBarWrapWrap.dataset.balloon=k,v||this.user.set("volume",A),S||this.notice("".concat(this.tran("volume")," ").concat((100*A).toFixed(0),"%"),void 0,void 0,"volume"),this.video.volume=A,this.video.muted&&(this.video.muted=!1),this.switchVolumeIcon()}return this.video.volume}},{key:"toggle",value:function(){this.video.paused?this.play():this.pause()}},{key:"on",value:function(A,v){this.events.on(A,v)}},{key:"switchVideo",value:function(A,v){this.pause(),this.video.poster=A.pic?A.pic:"",this.video.src=A.url,this.initMSE(this.video,A.type||"auto"),v&&(this.template.danmakuLoading.style.display="block",this.bar.set("played",0,"width"),this.bar.set("loaded",0,"width"),this.template.ptime.innerHTML="00:00",this.template.danmaku.innerHTML="",this.danmaku&&this.danmaku.reload({id:v.id,address:v.api,token:v.token,maximum:v.maximum,addition:v.addition,user:v.user}))}},{key:"initMSE",value:function(A,v){var S=this;if(this.type=v,this.options.video.customType&&this.options.video.customType[v])Object.prototype.toString.call(this.options.video.customType[v])==="[object Function]"?this.options.video.customType[v](this.video,this):console.error("Illegal customType: ".concat(v));else switch(this.type==="auto"&&(/m3u8(#|\?|$)/i.exec(A.src)?this.type="hls":/.flv(#|\?|$)/i.exec(A.src)?this.type="flv":/.mpd(#|\?|$)/i.exec(A.src)?this.type="dash":this.type="normal"),this.type==="hls"&&(A.canPlayType("application/x-mpegURL")||A.canPlayType("application/vnd.apple.mpegURL"))&&(this.type="normal"),this.type){case"hls":if(window.Hls)if(window.Hls.isSupported()){var k=this.options.pluginOptions.hls,L=new window.Hls(k);this.plugins.hls=L,L.loadSource(A.src),L.attachMedia(A),this.events.on("destroy",function(){L.destroy(),delete S.plugins.hls})}else this.notice("Error: Hls is not supported.");else this.notice("Error: Can't find Hls.");break;case"flv":if(window.flvjs)if(window.flvjs.isSupported()){var N=window.flvjs.createPlayer(Object.assign(this.options.pluginOptions.flv.mediaDataSource||{},{type:"flv",url:A.src}),this.options.pluginOptions.flv.config);this.plugins.flvjs=N,N.attachMediaElement(A),N.load(),this.events.on("destroy",function(){N.unload(),N.detachMediaElement(),N.destroy(),delete S.plugins.flvjs})}else this.notice("Error: flvjs is not supported.");else this.notice("Error: Can't find flvjs.");break;case"dash":if(window.dashjs){var G=window.dashjs.MediaPlayer().create().initialize(A,A.src,!1),se=this.options.pluginOptions.dash;G.updateSettings(se),this.plugins.dash=G,this.events.on("destroy",function(){window.dashjs.MediaPlayer().reset(),delete S.plugins.dash})}else this.notice("Error: Can't find dashjs.");break;case"webtorrent":if(window.WebTorrent)if(window.WebTorrent.WEBRTC_SUPPORT){this.container.classList.add("dplayer-loading");var de=this.options.pluginOptions.webtorrent,fe=new window.WebTorrent(de);this.plugins.webtorrent=fe;var ue=A.src;A.src="",A.preload="metadata",A.addEventListener("durationchange",function(){return S.container.classList.remove("dplayer-loading")},{once:!0}),fe.add(ue,function(oe){oe.files.find(function(be){return be.name.endsWith(".mp4")}).renderTo(S.video,{autoplay:S.options.autoplay,controls:!1})}),this.events.on("destroy",function(){fe.remove(ue),fe.destroy(),delete S.plugins.webtorrent})}else this.notice("Error: Webtorrent is not supported.");else this.notice("Error: Can't find Webtorrent.")}}},{key:"initVideo",value:function(A,v){var S=this;this.initMSE(A,v),this.on("durationchange",function(){A.duration!==1&&A.duration!==1/0&&(S.template.dtime.innerHTML=q.secondToTime(A.duration))}),this.on("progress",function(){var N=A.buffered.length?A.buffered.end(A.buffered.length-1)/A.duration:0;S.bar.set("loaded",N,"width")}),this.on("error",function(){S.video.error&&S.tran&&S.notice&&S.type!=="webtorrent"&&S.notice(S.tran("video-failed"))}),this.on("ended",function(){S.bar.set("played",1,"width"),S.setting.loop?(S.seek(0),S.play()):S.pause(),S.danmaku&&(S.danmaku.danIndex=0)}),this.on("play",function(){S.paused&&S.play(!0)}),this.on("pause",function(){S.paused||S.pause(!0)}),this.on("timeupdate",function(){S.bar.set("played",S.video.currentTime/S.video.duration,"width");var N=q.secondToTime(S.video.currentTime);S.template.ptime.innerHTML!==N&&(S.template.ptime.innerHTML=N)});for(var k=function(N){A.addEventListener(S.events.videoEvents[N],function(G){S.events.trigger(S.events.videoEvents[N],G)})},L=0;L<this.events.videoEvents.length;L++)k(L);this.volume(this.user.get("volume"),!0,!0),this.options.subtitle&&(this.subtitle=new U0(this.template.subtitle,this.video,this.options.subtitle,this.events),Array.isArray(this.options.subtitle.url)&&(this.subtitles=new G0(this)),this.user.get("subtitle")||this.subtitle.hide())}},{key:"switchQuality",value:function(A){var v=this;if(A=typeof A=="string"?parseInt(A):A,this.qualityIndex!==A&&!this.switchingQuality){this.prevIndex=this.qualityIndex,this.qualityIndex=A,this.switchingQuality=!0,this.quality=this.options.video.quality[A],this.template.qualityButton.innerHTML=this.quality.name;var S=this.video.paused;this.video.pause();var k=bm()({current:!1,pic:null,screenshot:this.options.screenshot,preload:"auto",url:this.quality.url,subtitle:this.options.subtitle}),L=new DOMParser().parseFromString(k,"text/html").body.firstChild;this.template.videoWrap.insertBefore(L,this.template.videoWrap.getElementsByTagName("div")[0]),this.prevVideo=this.video,this.video=L,this.initVideo(this.video,this.quality.type||this.options.video.type),this.seek(this.prevVideo.currentTime),this.notice("".concat(this.tran("switching-quality").replace("%q",this.quality.name)),-1,void 0,"switch-quality"),this.events.trigger("quality_start",this.quality),this.on("canplay",function(){if(v.prevVideo){if(v.video.currentTime!==v.prevVideo.currentTime)return void v.seek(v.prevVideo.currentTime);v.template.videoWrap.removeChild(v.prevVideo),v.video.classList.add("dplayer-video-current"),S||v.video.play(),v.prevVideo=null,v.notice("".concat(v.tran("switched-quality").replace("%q",v.quality.name)),void 0,void 0,"switch-quality"),v.switchingQuality=!1,v.events.trigger("quality_end")}}),this.on("error",function(){v.video.error&&v.prevVideo&&(v.template.videoWrap.removeChild(v.video),v.video=v.prevVideo,S||v.video.play(),v.qualityIndex=v.prevIndex,v.quality=v.options.video.quality[v.qualityIndex],v.noticeTime=setTimeout(function(){v.template.notice.style.opacity=0,v.events.trigger("notice_hide")},3e3),v.prevVideo=null,v.switchingQuality=!1)})}}},{key:"notice",value:function(A){var v,S,k,L=arguments.length>1&&arguments[1]!==void 0?arguments[1]:2e3,N=arguments.length>2&&arguments[2]!==void 0?arguments[2]:.8,G=arguments.length>3?arguments[3]:void 0;if(G&&((v=document.getElementById("dplayer-notice-".concat(G)))&&(v.innerHTML=A),this.noticeList[G]&&(clearTimeout(this.noticeList[G]),this.noticeList[G]=null)),!v){var se=dc.NewNotice(A,N,G);this.template.noticeList.appendChild(se),v=se}this.events.trigger("notice_show",v),L>0&&(this.noticeList[G]=setTimeout((S=v,k=this,function(){S.addEventListener("animationend",function(){k.template.noticeList.removeChild(S)}),S.classList.add("remove-notice"),k.events.trigger("notice_hide"),k.noticeList[G]=null}),L))}},{key:"resize",value:function(){this.danmaku&&this.danmaku.resize(),this.controller.thumbnails&&this.controller.thumbnails.resize(160,this.video.videoHeight/this.video.videoWidth*160,this.template.barWrap.offsetWidth),this.events.trigger("resize")}},{key:"speed",value:function(A){this.video.playbackRate=A}},{key:"destroy",value:function(){nr.splice(nr.indexOf(this),1),this.pause(),document.removeEventListener("click",this.docClickFun,!0),this.container.removeEventListener("click",this.containerClickFun,!0),this.fullScreen.destroy(),this.hotkey.destroy(),this.contextmenu.destroy(),this.controller.destroy(),this.timer.destroy(),this.video.src="",this.container.innerHTML="",this.events.trigger("destroy")}}],f=[{key:"version",get:function(){return"1.27.1"}}],x&&fc(m.prototype,x),f&&fc(m,f),Object.defineProperty(m,"prototype",{writable:!1}),p}();const xm=Em;console.log(`
`.concat(" %c DPlayer v","1.27.1"," ").concat("v1.27.0-12-g4f61091"," %c https://dplayer.diygod.dev ",`
`,`
`),"color: #fadfa3; background: #030307; padding:5px 0;","background: #fadfa3; padding:5px 0;");const Sm=xm})(),s.default})())})(hf);var IE=hf.exports;const aC=RE(IE);function _E(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var ff={exports:{}};(function(n,e){(function(t){var r=/^(?=((?:[a-zA-Z0-9+\-.]+:)?))\1(?=((?:\/\/[^\/?#]*)?))\2(?=((?:(?:[^?#\/]*\/)*[^;?#\/]*)?))\3((?:;[^?#]*)?)(\?[^#]*)?(#[^]*)?$/,i=/^(?=([^\/?#]*))\1([^]*)$/,s=/(?:\/|^)\.(?=\/)/g,o=/(?:\/|^)\.\.\/(?!\.\.\/)[^\/]*(?=\/)/g,a={buildAbsoluteURL:function(l,c,d){if(d=d||{},l=l.trim(),c=c.trim(),!c){if(!d.alwaysNormalize)return l;var u=a.parseURL(l);if(!u)throw new Error("Error trying to parse base URL.");return u.path=a.normalizePath(u.path),a.buildURLFromParts(u)}var h=a.parseURL(c);if(!h)throw new Error("Error trying to parse relative URL.");if(h.scheme)return d.alwaysNormalize?(h.path=a.normalizePath(h.path),a.buildURLFromParts(h)):c;var g=a.parseURL(l);if(!g)throw new Error("Error trying to parse base URL.");if(!g.netLoc&&g.path&&g.path[0]!=="/"){var y=i.exec(g.path);g.netLoc=y[1],g.path=y[2]}g.netLoc&&!g.path&&(g.path="/");var b={scheme:g.scheme,netLoc:h.netLoc,path:null,params:h.params,query:h.query,fragment:h.fragment};if(!h.netLoc&&(b.netLoc=g.netLoc,h.path[0]!=="/"))if(!h.path)b.path=g.path,h.params||(b.params=g.params,h.query||(b.query=g.query));else{var E=g.path,C=E.substring(0,E.lastIndexOf("/")+1)+h.path;b.path=a.normalizePath(C)}return b.path===null&&(b.path=d.alwaysNormalize?a.normalizePath(h.path):h.path),a.buildURLFromParts(b)},parseURL:function(l){var c=r.exec(l);return c?{scheme:c[1]||"",netLoc:c[2]||"",path:c[3]||"",params:c[4]||"",query:c[5]||"",fragment:c[6]||""}:null},normalizePath:function(l){for(l=l.split("").reverse().join("").replace(s,"");l.length!==(l=l.replace(o,"")).length;);return l.split("").reverse().join("")},buildURLFromParts:function(l){return l.scheme+l.netLoc+l.path+l.params+l.query+l.fragment}};n.exports=a})()})(ff);var vl=ff.exports;function kd(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(n,i).enumerable})),t.push.apply(t,r)}return t}function yt(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?kd(Object(t),!0).forEach(function(r){BE(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):kd(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function DE(n,e){if(typeof n!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function PE(n){var e=DE(n,"string");return typeof e=="symbol"?e:String(e)}function BE(n,e,t){return e=PE(e),e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function ct(){return ct=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},ct.apply(this,arguments)}const pe=Number.isFinite||function(n){return typeof n=="number"&&isFinite(n)},OE=Number.isSafeInteger||function(n){return typeof n=="number"&&Math.abs(n)<=FE},FE=Number.MAX_SAFE_INTEGER||9007199254740991;let T=function(n){return n.MEDIA_ATTACHING="hlsMediaAttaching",n.MEDIA_ATTACHED="hlsMediaAttached",n.MEDIA_DETACHING="hlsMediaDetaching",n.MEDIA_DETACHED="hlsMediaDetached",n.BUFFER_RESET="hlsBufferReset",n.BUFFER_CODECS="hlsBufferCodecs",n.BUFFER_CREATED="hlsBufferCreated",n.BUFFER_APPENDING="hlsBufferAppending",n.BUFFER_APPENDED="hlsBufferAppended",n.BUFFER_EOS="hlsBufferEos",n.BUFFER_FLUSHING="hlsBufferFlushing",n.BUFFER_FLUSHED="hlsBufferFlushed",n.MANIFEST_LOADING="hlsManifestLoading",n.MANIFEST_LOADED="hlsManifestLoaded",n.MANIFEST_PARSED="hlsManifestParsed",n.LEVEL_SWITCHING="hlsLevelSwitching",n.LEVEL_SWITCHED="hlsLevelSwitched",n.LEVEL_LOADING="hlsLevelLoading",n.LEVEL_LOADED="hlsLevelLoaded",n.LEVEL_UPDATED="hlsLevelUpdated",n.LEVEL_PTS_UPDATED="hlsLevelPtsUpdated",n.LEVELS_UPDATED="hlsLevelsUpdated",n.AUDIO_TRACKS_UPDATED="hlsAudioTracksUpdated",n.AUDIO_TRACK_SWITCHING="hlsAudioTrackSwitching",n.AUDIO_TRACK_SWITCHED="hlsAudioTrackSwitched",n.AUDIO_TRACK_LOADING="hlsAudioTrackLoading",n.AUDIO_TRACK_LOADED="hlsAudioTrackLoaded",n.SUBTITLE_TRACKS_UPDATED="hlsSubtitleTracksUpdated",n.SUBTITLE_TRACKS_CLEARED="hlsSubtitleTracksCleared",n.SUBTITLE_TRACK_SWITCH="hlsSubtitleTrackSwitch",n.SUBTITLE_TRACK_LOADING="hlsSubtitleTrackLoading",n.SUBTITLE_TRACK_LOADED="hlsSubtitleTrackLoaded",n.SUBTITLE_FRAG_PROCESSED="hlsSubtitleFragProcessed",n.CUES_PARSED="hlsCuesParsed",n.NON_NATIVE_TEXT_TRACKS_FOUND="hlsNonNativeTextTracksFound",n.INIT_PTS_FOUND="hlsInitPtsFound",n.FRAG_LOADING="hlsFragLoading",n.FRAG_LOAD_EMERGENCY_ABORTED="hlsFragLoadEmergencyAborted",n.FRAG_LOADED="hlsFragLoaded",n.FRAG_DECRYPTED="hlsFragDecrypted",n.FRAG_PARSING_INIT_SEGMENT="hlsFragParsingInitSegment",n.FRAG_PARSING_USERDATA="hlsFragParsingUserdata",n.FRAG_PARSING_METADATA="hlsFragParsingMetadata",n.FRAG_PARSED="hlsFragParsed",n.FRAG_BUFFERED="hlsFragBuffered",n.FRAG_CHANGED="hlsFragChanged",n.FPS_DROP="hlsFpsDrop",n.FPS_DROP_LEVEL_CAPPING="hlsFpsDropLevelCapping",n.MAX_AUTO_LEVEL_UPDATED="hlsMaxAutoLevelUpdated",n.ERROR="hlsError",n.DESTROYING="hlsDestroying",n.KEY_LOADING="hlsKeyLoading",n.KEY_LOADED="hlsKeyLoaded",n.LIVE_BACK_BUFFER_REACHED="hlsLiveBackBufferReached",n.BACK_BUFFER_REACHED="hlsBackBufferReached",n.STEERING_MANIFEST_LOADED="hlsSteeringManifestLoaded",n}({}),Le=function(n){return n.NETWORK_ERROR="networkError",n.MEDIA_ERROR="mediaError",n.KEY_SYSTEM_ERROR="keySystemError",n.MUX_ERROR="muxError",n.OTHER_ERROR="otherError",n}({}),$=function(n){return n.KEY_SYSTEM_NO_KEYS="keySystemNoKeys",n.KEY_SYSTEM_NO_ACCESS="keySystemNoAccess",n.KEY_SYSTEM_NO_SESSION="keySystemNoSession",n.KEY_SYSTEM_NO_CONFIGURED_LICENSE="keySystemNoConfiguredLicense",n.KEY_SYSTEM_LICENSE_REQUEST_FAILED="keySystemLicenseRequestFailed",n.KEY_SYSTEM_SERVER_CERTIFICATE_REQUEST_FAILED="keySystemServerCertificateRequestFailed",n.KEY_SYSTEM_SERVER_CERTIFICATE_UPDATE_FAILED="keySystemServerCertificateUpdateFailed",n.KEY_SYSTEM_SESSION_UPDATE_FAILED="keySystemSessionUpdateFailed",n.KEY_SYSTEM_STATUS_OUTPUT_RESTRICTED="keySystemStatusOutputRestricted",n.KEY_SYSTEM_STATUS_INTERNAL_ERROR="keySystemStatusInternalError",n.MANIFEST_LOAD_ERROR="manifestLoadError",n.MANIFEST_LOAD_TIMEOUT="manifestLoadTimeOut",n.MANIFEST_PARSING_ERROR="manifestParsingError",n.MANIFEST_INCOMPATIBLE_CODECS_ERROR="manifestIncompatibleCodecsError",n.LEVEL_EMPTY_ERROR="levelEmptyError",n.LEVEL_LOAD_ERROR="levelLoadError",n.LEVEL_LOAD_TIMEOUT="levelLoadTimeOut",n.LEVEL_PARSING_ERROR="levelParsingError",n.LEVEL_SWITCH_ERROR="levelSwitchError",n.AUDIO_TRACK_LOAD_ERROR="audioTrackLoadError",n.AUDIO_TRACK_LOAD_TIMEOUT="audioTrackLoadTimeOut",n.SUBTITLE_LOAD_ERROR="subtitleTrackLoadError",n.SUBTITLE_TRACK_LOAD_TIMEOUT="subtitleTrackLoadTimeOut",n.FRAG_LOAD_ERROR="fragLoadError",n.FRAG_LOAD_TIMEOUT="fragLoadTimeOut",n.FRAG_DECRYPT_ERROR="fragDecryptError",n.FRAG_PARSING_ERROR="fragParsingError",n.FRAG_GAP="fragGap",n.REMUX_ALLOC_ERROR="remuxAllocError",n.KEY_LOAD_ERROR="keyLoadError",n.KEY_LOAD_TIMEOUT="keyLoadTimeOut",n.BUFFER_ADD_CODEC_ERROR="bufferAddCodecError",n.BUFFER_INCOMPATIBLE_CODECS_ERROR="bufferIncompatibleCodecsError",n.BUFFER_APPEND_ERROR="bufferAppendError",n.BUFFER_APPENDING_ERROR="bufferAppendingError",n.BUFFER_STALLED_ERROR="bufferStalledError",n.BUFFER_FULL_ERROR="bufferFullError",n.BUFFER_SEEK_OVER_HOLE="bufferSeekOverHole",n.BUFFER_NUDGE_ON_STALL="bufferNudgeOnStall",n.INTERNAL_EXCEPTION="internalException",n.INTERNAL_ABORTED="aborted",n.UNKNOWN="unknown",n}({});const Kn=function(){},ka={trace:Kn,debug:Kn,log:Kn,warn:Kn,info:Kn,error:Kn};let xi=ka;function ME(n){const e=self.console[n];return e?e.bind(self.console,`[${n}] >`):Kn}function NE(n,...e){e.forEach(function(t){xi[t]=n[t]?n[t].bind(n):ME(t)})}function UE(n,e){if(typeof console=="object"&&n===!0||typeof n=="object"){NE(n,"debug","log","info","warn","error");try{xi.log(`Debug logs enabled for "${e}" in hls.js version 1.5.7`)}catch{xi=ka}}else xi=ka}const B=xi,$E=/^(\d+)x(\d+)$/,Ld=/(.+?)=(".*?"|.*?)(?:,|$)/g;class st{constructor(e){typeof e=="string"&&(e=st.parseAttrList(e)),ct(this,e)}get clientAttrs(){return Object.keys(this).filter(e=>e.substring(0,2)==="X-")}decimalInteger(e){const t=parseInt(this[e],10);return t>Number.MAX_SAFE_INTEGER?1/0:t}hexadecimalInteger(e){if(this[e]){let t=(this[e]||"0x").slice(2);t=(t.length&1?"0":"")+t;const r=new Uint8Array(t.length/2);for(let i=0;i<t.length/2;i++)r[i]=parseInt(t.slice(i*2,i*2+2),16);return r}else return null}hexadecimalIntegerAsNumber(e){const t=parseInt(this[e],16);return t>Number.MAX_SAFE_INTEGER?1/0:t}decimalFloatingPoint(e){return parseFloat(this[e])}optionalFloat(e,t){const r=this[e];return r?parseFloat(r):t}enumeratedString(e){return this[e]}bool(e){return this[e]==="YES"}decimalResolution(e){const t=$E.exec(this[e]);if(t!==null)return{width:parseInt(t[1],10),height:parseInt(t[2],10)}}static parseAttrList(e){let t;const r={},i='"';for(Ld.lastIndex=0;(t=Ld.exec(e))!==null;){let s=t[2];s.indexOf(i)===0&&s.lastIndexOf(i)===s.length-1&&(s=s.slice(1,-1));const o=t[1].trim();r[o]=s}return r}}function HE(n){return n!=="ID"&&n!=="CLASS"&&n!=="START-DATE"&&n!=="DURATION"&&n!=="END-DATE"&&n!=="END-ON-NEXT"}function GE(n){return n==="SCTE35-OUT"||n==="SCTE35-IN"}class pf{constructor(e,t){if(this.attr=void 0,this._startDate=void 0,this._endDate=void 0,this._badValueForSameId=void 0,t){const r=t.attr;for(const i in r)if(Object.prototype.hasOwnProperty.call(e,i)&&e[i]!==r[i]){B.warn(`DATERANGE tag attribute: "${i}" does not match for tags with ID: "${e.ID}"`),this._badValueForSameId=i;break}e=ct(new st({}),r,e)}if(this.attr=e,this._startDate=new Date(e["START-DATE"]),"END-DATE"in this.attr){const r=new Date(this.attr["END-DATE"]);pe(r.getTime())&&(this._endDate=r)}}get id(){return this.attr.ID}get class(){return this.attr.CLASS}get startDate(){return this._startDate}get endDate(){if(this._endDate)return this._endDate;const e=this.duration;return e!==null?new Date(this._startDate.getTime()+e*1e3):null}get duration(){if("DURATION"in this.attr){const e=this.attr.decimalFloatingPoint("DURATION");if(pe(e))return e}else if(this._endDate)return(this._endDate.getTime()-this._startDate.getTime())/1e3;return null}get plannedDuration(){return"PLANNED-DURATION"in this.attr?this.attr.decimalFloatingPoint("PLANNED-DURATION"):null}get endOnNext(){return this.attr.bool("END-ON-NEXT")}get isValid(){return!!this.id&&!this._badValueForSameId&&pe(this.startDate.getTime())&&(this.duration===null||this.duration>=0)&&(!this.endOnNext||!!this.class)}}class co{constructor(){this.aborted=!1,this.loaded=0,this.retry=0,this.total=0,this.chunkCount=0,this.bwEstimate=0,this.loading={start:0,first:0,end:0},this.parsing={start:0,end:0},this.buffering={start:0,first:0,end:0}}}var We={AUDIO:"audio",VIDEO:"video",AUDIOVIDEO:"audiovideo"};class mf{constructor(e){this._byteRange=null,this._url=null,this.baseurl=void 0,this.relurl=void 0,this.elementaryStreams={[We.AUDIO]:null,[We.VIDEO]:null,[We.AUDIOVIDEO]:null},this.baseurl=e}setByteRange(e,t){const r=e.split("@",2);let i;r.length===1?i=(t==null?void 0:t.byteRangeEndOffset)||0:i=parseInt(r[1]),this._byteRange=[i,parseInt(r[0])+i]}get byteRange(){return this._byteRange?this._byteRange:[]}get byteRangeStartOffset(){return this.byteRange[0]}get byteRangeEndOffset(){return this.byteRange[1]}get url(){return!this._url&&this.baseurl&&this.relurl&&(this._url=vl.buildAbsoluteURL(this.baseurl,this.relurl,{alwaysNormalize:!0})),this._url||""}set url(e){this._url=e}}class No extends mf{constructor(e,t){super(t),this._decryptdata=null,this.rawProgramDateTime=null,this.programDateTime=null,this.tagList=[],this.duration=0,this.sn=0,this.levelkeys=void 0,this.type=void 0,this.loader=null,this.keyLoader=null,this.level=-1,this.cc=0,this.startPTS=void 0,this.endPTS=void 0,this.startDTS=void 0,this.endDTS=void 0,this.start=0,this.deltaPTS=void 0,this.maxStartPTS=void 0,this.minEndPTS=void 0,this.stats=new co,this.data=void 0,this.bitrateTest=!1,this.title=null,this.initSegment=null,this.endList=void 0,this.gap=void 0,this.urlId=0,this.type=e}get decryptdata(){const{levelkeys:e}=this;if(!e&&!this._decryptdata)return null;if(!this._decryptdata&&this.levelkeys&&!this.levelkeys.NONE){const t=this.levelkeys.identity;if(t)this._decryptdata=t.getDecryptData(this.sn);else{const r=Object.keys(this.levelkeys);if(r.length===1)return this._decryptdata=this.levelkeys[r[0]].getDecryptData(this.sn)}}return this._decryptdata}get end(){return this.start+this.duration}get endProgramDateTime(){if(this.programDateTime===null||!pe(this.programDateTime))return null;const e=pe(this.duration)?this.duration:0;return this.programDateTime+e*1e3}get encrypted(){var e;if((e=this._decryptdata)!=null&&e.encrypted)return!0;if(this.levelkeys){const t=Object.keys(this.levelkeys),r=t.length;if(r>1||r===1&&this.levelkeys[t[0]].encrypted)return!0}return!1}setKeyFormat(e){if(this.levelkeys){const t=this.levelkeys[e];t&&!this._decryptdata&&(this._decryptdata=t.getDecryptData(this.sn))}}abortRequests(){var e,t;(e=this.loader)==null||e.abort(),(t=this.keyLoader)==null||t.abort()}setElementaryStreamInfo(e,t,r,i,s,o=!1){const{elementaryStreams:a}=this,l=a[e];if(!l){a[e]={startPTS:t,endPTS:r,startDTS:i,endDTS:s,partial:o};return}l.startPTS=Math.min(l.startPTS,t),l.endPTS=Math.max(l.endPTS,r),l.startDTS=Math.min(l.startDTS,i),l.endDTS=Math.max(l.endDTS,s)}clearElementaryStreamInfo(){const{elementaryStreams:e}=this;e[We.AUDIO]=null,e[We.VIDEO]=null,e[We.AUDIOVIDEO]=null}}class KE extends mf{constructor(e,t,r,i,s){super(r),this.fragOffset=0,this.duration=0,this.gap=!1,this.independent=!1,this.relurl=void 0,this.fragment=void 0,this.index=void 0,this.stats=new co,this.duration=e.decimalFloatingPoint("DURATION"),this.gap=e.bool("GAP"),this.independent=e.bool("INDEPENDENT"),this.relurl=e.enumeratedString("URI"),this.fragment=t,this.index=i;const o=e.enumeratedString("BYTERANGE");o&&this.setByteRange(o,s),s&&(this.fragOffset=s.fragOffset+s.duration)}get start(){return this.fragment.start+this.fragOffset}get end(){return this.start+this.duration}get loaded(){const{elementaryStreams:e}=this;return!!(e.audio||e.video||e.audiovideo)}}const zE=10;class jE{constructor(e){this.PTSKnown=!1,this.alignedSliding=!1,this.averagetargetduration=void 0,this.endCC=0,this.endSN=0,this.fragments=void 0,this.fragmentHint=void 0,this.partList=null,this.dateRanges=void 0,this.live=!0,this.ageHeader=0,this.advancedDateTime=void 0,this.updated=!0,this.advanced=!0,this.availabilityDelay=void 0,this.misses=0,this.startCC=0,this.startSN=0,this.startTimeOffset=null,this.targetduration=0,this.totalduration=0,this.type=null,this.url=void 0,this.m3u8="",this.version=null,this.canBlockReload=!1,this.canSkipUntil=0,this.canSkipDateRanges=!1,this.skippedSegments=0,this.recentlyRemovedDateranges=void 0,this.partHoldBack=0,this.holdBack=0,this.partTarget=0,this.preloadHint=void 0,this.renditionReports=void 0,this.tuneInGoal=0,this.deltaUpdateFailed=void 0,this.driftStartTime=0,this.driftEndTime=0,this.driftStart=0,this.driftEnd=0,this.encryptedFragments=void 0,this.playlistParsingError=null,this.variableList=null,this.hasVariableRefs=!1,this.fragments=[],this.encryptedFragments=[],this.dateRanges={},this.url=e}reloaded(e){if(!e){this.advanced=!0,this.updated=!0;return}const t=this.lastPartSn-e.lastPartSn,r=this.lastPartIndex-e.lastPartIndex;this.updated=this.endSN!==e.endSN||!!r||!!t||!this.live,this.advanced=this.endSN>e.endSN||t>0||t===0&&r>0,this.updated||this.advanced?this.misses=Math.floor(e.misses*.6):this.misses=e.misses+1,this.availabilityDelay=e.availabilityDelay}get hasProgramDateTime(){return this.fragments.length?pe(this.fragments[this.fragments.length-1].programDateTime):!1}get levelTargetDuration(){return this.averagetargetduration||this.targetduration||zE}get drift(){const e=this.driftEndTime-this.driftStartTime;return e>0?(this.driftEnd-this.driftStart)*1e3/e:1}get edge(){return this.partEnd||this.fragmentEnd}get partEnd(){var e;return(e=this.partList)!=null&&e.length?this.partList[this.partList.length-1].end:this.fragmentEnd}get fragmentEnd(){var e;return(e=this.fragments)!=null&&e.length?this.fragments[this.fragments.length-1].end:0}get age(){return this.advancedDateTime?Math.max(Date.now()-this.advancedDateTime,0)/1e3:0}get lastPartIndex(){var e;return(e=this.partList)!=null&&e.length?this.partList[this.partList.length-1].index:-1}get lastPartSn(){var e;return(e=this.partList)!=null&&e.length?this.partList[this.partList.length-1].fragment.sn:this.endSN}}function El(n){return Uint8Array.from(atob(n),e=>e.charCodeAt(0))}function qE(n){const e=La(n).subarray(0,16),t=new Uint8Array(16);return t.set(e,16-e.length),t}function VE(n){const e=function(r,i,s){const o=r[i];r[i]=r[s],r[s]=o};e(n,0,3),e(n,1,2),e(n,4,5),e(n,6,7)}function WE(n){const e=n.split(":");let t=null;if(e[0]==="data"&&e.length===2){const r=e[1].split(";"),i=r[r.length-1].split(",");if(i.length===2){const s=i[0]==="base64",o=i[1];s?(r.splice(-1,1),t=El(o)):t=qE(o)}}return t}function La(n){return Uint8Array.from(unescape(encodeURIComponent(n)),e=>e.charCodeAt(0))}const Lr=typeof self<"u"?self:void 0;var nt={CLEARKEY:"org.w3.clearkey",FAIRPLAY:"com.apple.fps",PLAYREADY:"com.microsoft.playready",WIDEVINE:"com.widevine.alpha"},Lt={CLEARKEY:"org.w3.clearkey",FAIRPLAY:"com.apple.streamingkeydelivery",PLAYREADY:"com.microsoft.playready",WIDEVINE:"urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed"};function Rd(n){switch(n){case Lt.FAIRPLAY:return nt.FAIRPLAY;case Lt.PLAYREADY:return nt.PLAYREADY;case Lt.WIDEVINE:return nt.WIDEVINE;case Lt.CLEARKEY:return nt.CLEARKEY}}var gf={WIDEVINE:"edef8ba979d64acea3c827dcd51d21ed"};function YE(n){if(n===gf.WIDEVINE)return nt.WIDEVINE}function Id(n){switch(n){case nt.FAIRPLAY:return Lt.FAIRPLAY;case nt.PLAYREADY:return Lt.PLAYREADY;case nt.WIDEVINE:return Lt.WIDEVINE;case nt.CLEARKEY:return Lt.CLEARKEY}}function Uo(n){const{drmSystems:e,widevineLicenseUrl:t}=n,r=e?[nt.FAIRPLAY,nt.WIDEVINE,nt.PLAYREADY,nt.CLEARKEY].filter(i=>!!e[i]):[];return!r[nt.WIDEVINE]&&t&&r.push(nt.WIDEVINE),r}const yf=function(n){return Lr!=null&&(n=Lr.navigator)!=null&&n.requestMediaKeySystemAccess?self.navigator.requestMediaKeySystemAccess.bind(self.navigator):null}();function QE(n,e,t,r){let i;switch(n){case nt.FAIRPLAY:i=["cenc","sinf"];break;case nt.WIDEVINE:case nt.PLAYREADY:i=["cenc"];break;case nt.CLEARKEY:i=["cenc","keyids"];break;default:throw new Error(`Unknown key-system: ${n}`)}return XE(i,e,t,r)}function XE(n,e,t,r){return[{initDataTypes:n,persistentState:r.persistentState||"optional",distinctiveIdentifier:r.distinctiveIdentifier||"optional",sessionTypes:r.sessionTypes||[r.sessionType||"temporary"],audioCapabilities:e.map(s=>({contentType:`audio/mp4; codecs="${s}"`,robustness:r.audioRobustness||"",encryptionScheme:r.audioEncryptionScheme||null})),videoCapabilities:t.map(s=>({contentType:`video/mp4; codecs="${s}"`,robustness:r.videoRobustness||"",encryptionScheme:r.videoEncryptionScheme||null}))}]}function Xn(n,e,t){return Uint8Array.prototype.slice?n.slice(e,t):new Uint8Array(Array.prototype.slice.call(n,e,t))}const xl=(n,e)=>e+10<=n.length&&n[e]===73&&n[e+1]===68&&n[e+2]===51&&n[e+3]<255&&n[e+4]<255&&n[e+6]<128&&n[e+7]<128&&n[e+8]<128&&n[e+9]<128,Af=(n,e)=>e+10<=n.length&&n[e]===51&&n[e+1]===68&&n[e+2]===73&&n[e+3]<255&&n[e+4]<255&&n[e+6]<128&&n[e+7]<128&&n[e+8]<128&&n[e+9]<128,Pi=(n,e)=>{const t=e;let r=0;for(;xl(n,e);){r+=10;const i=uo(n,e+6);r+=i,Af(n,e+10)&&(r+=10),e+=r}if(r>0)return n.subarray(t,t+r)},uo=(n,e)=>{let t=0;return t=(n[e]&127)<<21,t|=(n[e+1]&127)<<14,t|=(n[e+2]&127)<<7,t|=n[e+3]&127,t},JE=(n,e)=>xl(n,e)&&uo(n,e+6)+10<=n.length-e,Sl=n=>{const e=vf(n);for(let t=0;t<e.length;t++){const r=e[t];if(bf(r))return ix(r)}},bf=n=>n&&n.key==="PRIV"&&n.info==="com.apple.streaming.transportStreamTimestamp",ZE=n=>{const e=String.fromCharCode(n[0],n[1],n[2],n[3]),t=uo(n,4),r=10;return{type:e,size:t,data:n.subarray(r,r+t)}},vf=n=>{let e=0;const t=[];for(;xl(n,e);){const r=uo(n,e+6);e+=10;const i=e+r;for(;e+8<i;){const s=ZE(n.subarray(e)),o=ex(s);o&&t.push(o),e+=s.size+10}Af(n,e)&&(e+=10)}return t},ex=n=>n.type==="PRIV"?tx(n):n.type[0]==="W"?rx(n):nx(n),tx=n=>{if(n.size<2)return;const e=an(n.data,!0),t=new Uint8Array(n.data.subarray(e.length+1));return{key:n.type,info:e,data:t.buffer}},nx=n=>{if(n.size<2)return;if(n.type==="TXXX"){let t=1;const r=an(n.data.subarray(t),!0);t+=r.length+1;const i=an(n.data.subarray(t));return{key:n.type,info:r,data:i}}const e=an(n.data.subarray(1));return{key:n.type,data:e}},rx=n=>{if(n.type==="WXXX"){if(n.size<2)return;let t=1;const r=an(n.data.subarray(t),!0);t+=r.length+1;const i=an(n.data.subarray(t));return{key:n.type,info:r,data:i}}const e=an(n.data);return{key:n.type,data:e}},ix=n=>{if(n.data.byteLength===8){const e=new Uint8Array(n.data),t=e[3]&1;let r=(e[4]<<23)+(e[5]<<15)+(e[6]<<7)+e[7];return r/=45,t&&(r+=4772185884e-2),Math.round(r)}},an=(n,e=!1)=>{const t=sx();if(t){const c=t.decode(n);if(e){const d=c.indexOf("\0");return d!==-1?c.substring(0,d):c}return c.replace(/\0/g,"")}const r=n.length;let i,s,o,a="",l=0;for(;l<r;){if(i=n[l++],i===0&&e)return a;if(i===0||i===3)continue;switch(i>>4){case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:a+=String.fromCharCode(i);break;case 12:case 13:s=n[l++],a+=String.fromCharCode((i&31)<<6|s&63);break;case 14:s=n[l++],o=n[l++],a+=String.fromCharCode((i&15)<<12|(s&63)<<6|(o&63)<<0);break}}return a};let $o;function sx(){if(!navigator.userAgent.includes("PlayStation 4"))return!$o&&typeof self.TextDecoder<"u"&&($o=new self.TextDecoder("utf-8")),$o}const Zt={hexDump:function(n){let e="";for(let t=0;t<n.length;t++){let r=n[t].toString(16);r.length<2&&(r="0"+r),e+=r}return e}},Bs=Math.pow(2,32)-1,ox=[].push,Ef={video:1,audio:2,id3:3,text:4};function ht(n){return String.fromCharCode.apply(null,n)}function xf(n,e){const t=n[e]<<8|n[e+1];return t<0?65536+t:t}function we(n,e){const t=Sf(n,e);return t<0?4294967296+t:t}function _d(n,e){let t=we(n,e);return t*=Math.pow(2,32),t+=we(n,e+4),t}function Sf(n,e){return n[e]<<24|n[e+1]<<16|n[e+2]<<8|n[e+3]}function Ho(n,e,t){n[e]=t>>24,n[e+1]=t>>16&255,n[e+2]=t>>8&255,n[e+3]=t&255}function ax(n){const e=n.byteLength;for(let t=0;t<e;){const r=we(n,t);if(r>8&&n[t+4]===109&&n[t+5]===111&&n[t+6]===111&&n[t+7]===102)return!0;t=r>1?t+r:e}return!1}function Be(n,e){const t=[];if(!e.length)return t;const r=n.byteLength;for(let i=0;i<r;){const s=we(n,i),o=ht(n.subarray(i+4,i+8)),a=s>1?i+s:r;if(o===e[0])if(e.length===1)t.push(n.subarray(i+8,a));else{const l=Be(n.subarray(i+8,a),e.slice(1));l.length&&ox.apply(t,l)}i=a}return t}function lx(n){const e=[],t=n[0];let r=8;const i=we(n,r);r+=4;let s=0,o=0;t===0?(s=we(n,r),o=we(n,r+4),r+=8):(s=_d(n,r),o=_d(n,r+8),r+=16),r+=2;let a=n.length+o;const l=xf(n,r);r+=2;for(let c=0;c<l;c++){let d=r;const u=we(n,d);d+=4;const h=u&2147483647;if((u&2147483648)>>>31===1)return B.warn("SIDX has hierarchical references (not supported)"),null;const y=we(n,d);d+=4,e.push({referenceSize:h,subsegmentDuration:y,info:{duration:y/i,start:a,end:a+h-1}}),a+=h,d+=4,r=d}return{earliestPresentationTime:s,timescale:i,version:t,referencesCount:l,references:e}}function Tf(n){const e=[],t=Be(n,["moov","trak"]);for(let i=0;i<t.length;i++){const s=t[i],o=Be(s,["tkhd"])[0];if(o){let a=o[0];const l=we(o,a===0?12:20),c=Be(s,["mdia","mdhd"])[0];if(c){a=c[0];const d=we(c,a===0?12:20),u=Be(s,["mdia","hdlr"])[0];if(u){const h=ht(u.subarray(8,12)),g={soun:We.AUDIO,vide:We.VIDEO}[h];if(g){const y=Be(s,["mdia","minf","stbl","stsd"])[0],b=cx(y);e[l]={timescale:d,type:g},e[g]=yt({timescale:d,id:l},b)}}}}}return Be(n,["moov","mvex","trex"]).forEach(i=>{const s=we(i,4),o=e[s];o&&(o.default={duration:we(i,12),flags:we(i,20)})}),e}function cx(n){const e=n.subarray(8),t=e.subarray(8+78),r=ht(e.subarray(4,8));let i=r;const s=r==="enca"||r==="encv";if(s){const a=Be(e,[r])[0].subarray(r==="enca"?28:78);Be(a,["sinf"]).forEach(c=>{const d=Be(c,["schm"])[0];if(d){const u=ht(d.subarray(4,8));if(u==="cbcs"||u==="cenc"){const h=Be(c,["frma"])[0];h&&(i=ht(h))}}})}switch(i){case"avc1":case"avc2":case"avc3":case"avc4":{const o=Be(t,["avcC"])[0];i+="."+ts(o[1])+ts(o[2])+ts(o[3]);break}case"mp4a":{const o=Be(e,[r])[0],a=Be(o.subarray(28),["esds"])[0];if(a&&a.length>12){let l=4;if(a[l++]!==3)break;l=Go(a,l),l+=2;const c=a[l++];if(c&128&&(l+=2),c&64&&(l+=a[l++]),a[l++]!==4)break;l=Go(a,l);const d=a[l++];if(d===64)i+="."+ts(d);else break;if(l+=12,a[l++]!==5)break;l=Go(a,l);const u=a[l++];let h=(u&248)>>3;h===31&&(h+=1+((u&7)<<3)+((a[l]&224)>>5)),i+="."+h}break}case"hvc1":case"hev1":{const o=Be(t,["hvcC"])[0],a=o[1],l=["","A","B","C"][a>>6],c=a&31,d=we(o,2),u=(a&32)>>5?"H":"L",h=o[12],g=o.subarray(6,12);i+="."+l+c,i+="."+d.toString(16).toUpperCase(),i+="."+u+h;let y="";for(let b=g.length;b--;){const E=g[b];(E||y)&&(y="."+E.toString(16).toUpperCase()+y)}i+=y;break}case"dvh1":case"dvhe":{const o=Be(t,["dvcC"])[0],a=o[2]>>1&127,l=o[2]<<5&32|o[3]>>3&31;i+="."+Jt(a)+"."+Jt(l);break}case"vp09":{const o=Be(t,["vpcC"])[0],a=o[4],l=o[5],c=o[6]>>4&15;i+="."+Jt(a)+"."+Jt(l)+"."+Jt(c);break}case"av01":{const o=Be(t,["av1C"])[0],a=o[1]>>>5,l=o[1]&31,c=o[2]>>>7?"H":"M",d=(o[2]&64)>>6,u=(o[2]&32)>>5,h=a===2&&d?u?12:10:d?10:8,g=(o[2]&16)>>4,y=(o[2]&8)>>3,b=(o[2]&4)>>2,E=o[2]&3,C=1,w=1,R=1,_=0;i+="."+a+"."+Jt(l)+c+"."+Jt(h)+"."+g+"."+y+b+E+"."+Jt(C)+"."+Jt(w)+"."+Jt(R)+"."+_;break}}return{codec:i,encrypted:s}}function Go(n,e){const t=e+5;for(;n[e++]&128&&e<t;);return e}function ts(n){return("0"+n.toString(16).toUpperCase()).slice(-2)}function Jt(n){return(n<10?"0":"")+n}function dx(n,e){if(!n||!e)return n;const t=e.keyId;return t&&e.isCommonEncryption&&Be(n,["moov","trak"]).forEach(i=>{const o=Be(i,["mdia","minf","stbl","stsd"])[0].subarray(8);let a=Be(o,["enca"]);const l=a.length>0;l||(a=Be(o,["encv"])),a.forEach(c=>{const d=l?c.subarray(28):c.subarray(78);Be(d,["sinf"]).forEach(h=>{const g=Cf(h);if(g){const y=g.subarray(8,24);y.some(b=>b!==0)||(B.log(`[eme] Patching keyId in 'enc${l?"a":"v"}>sinf>>tenc' box: ${Zt.hexDump(y)} -> ${Zt.hexDump(t)}`),g.set(t,8))}})})}),n}function Cf(n){const e=Be(n,["schm"])[0];if(e){const t=ht(e.subarray(4,8));if(t==="cbcs"||t==="cenc")return Be(n,["schi","tenc"])[0]}return B.error("[eme] missing 'schm' box"),null}function ux(n,e){return Be(e,["moof","traf"]).reduce((t,r)=>{const i=Be(r,["tfdt"])[0],s=i[0],o=Be(r,["tfhd"]).reduce((a,l)=>{const c=we(l,4),d=n[c];if(d){let u=we(i,4);if(s===1){if(u===Bs)return B.warn("[mp4-demuxer]: Ignoring assumed invalid signed 64-bit track fragment decode time"),a;u*=Bs+1,u+=we(i,8)}const h=d.timescale||9e4,g=u/h;if(pe(g)&&(a===null||g<a))return g}return a},null);return o!==null&&pe(o)&&(t===null||o<t)?o:t},null)}function hx(n,e){let t=0,r=0,i=0;const s=Be(n,["moof","traf"]);for(let o=0;o<s.length;o++){const a=s[o],l=Be(a,["tfhd"])[0],c=we(l,4),d=e[c];if(!d)continue;const u=d.default,h=we(l,0)|(u==null?void 0:u.flags);let g=u==null?void 0:u.duration;h&8&&(h&2?g=we(l,12):g=we(l,8));const y=d.timescale||9e4,b=Be(a,["trun"]);for(let E=0;E<b.length;E++){if(t=fx(b[E]),!t&&g){const C=we(b[E],4);t=g*C}d.type===We.VIDEO?r+=t/y:d.type===We.AUDIO&&(i+=t/y)}}if(r===0&&i===0){let o=1/0,a=0,l=0;const c=Be(n,["sidx"]);for(let d=0;d<c.length;d++){const u=lx(c[d]);if(u!=null&&u.references){o=Math.min(o,u.earliestPresentationTime/u.timescale);const h=u.references.reduce((g,y)=>g+y.info.duration||0,0);a=Math.max(a,h+u.earliestPresentationTime/u.timescale),l=a-o}}if(l&&pe(l))return l}return r||i}function fx(n){const e=we(n,0);let t=8;e&1&&(t+=4),e&4&&(t+=4);let r=0;const i=we(n,4);for(let s=0;s<i;s++){if(e&256){const o=we(n,t);r+=o,t+=4}e&512&&(t+=4),e&1024&&(t+=4),e&2048&&(t+=4)}return r}function px(n,e,t){Be(e,["moof","traf"]).forEach(r=>{Be(r,["tfhd"]).forEach(i=>{const s=we(i,4),o=n[s];if(!o)return;const a=o.timescale||9e4;Be(r,["tfdt"]).forEach(l=>{const c=l[0],d=t*a;if(d){let u=we(l,4);if(c===0)u-=d,u=Math.max(u,0),Ho(l,4,u);else{u*=Math.pow(2,32),u+=we(l,8),u-=d,u=Math.max(u,0);const h=Math.floor(u/(Bs+1)),g=Math.floor(u%(Bs+1));Ho(l,4,h),Ho(l,8,g)}}})})})}function mx(n){const e={valid:null,remainder:null},t=Be(n,["moof"]);if(t.length<2)return e.remainder=n,e;const r=t[t.length-1];return e.valid=Xn(n,0,r.byteOffset-8),e.remainder=Xn(n,r.byteOffset-8),e}function Nt(n,e){const t=new Uint8Array(n.length+e.length);return t.set(n),t.set(e,n.length),t}function Dd(n,e){const t=[],r=e.samples,i=e.timescale,s=e.id;let o=!1;return Be(r,["moof"]).map(l=>{const c=l.byteOffset-8;Be(l,["traf"]).map(u=>{const h=Be(u,["tfdt"]).map(g=>{const y=g[0];let b=we(g,4);return y===1&&(b*=Math.pow(2,32),b+=we(g,8)),b/i})[0];return h!==void 0&&(n=h),Be(u,["tfhd"]).map(g=>{const y=we(g,4),b=we(g,0)&16777215,E=(b&1)!==0,C=(b&2)!==0,w=(b&8)!==0;let R=0;const _=(b&16)!==0;let P=0;const H=(b&32)!==0;let U=8;y===s&&(E&&(U+=8),C&&(U+=4),w&&(R=we(g,U),U+=4),_&&(P=we(g,U),U+=4),H&&(U+=4),e.type==="video"&&(o=gx(e.codec)),Be(u,["trun"]).map(z=>{const Q=z[0],F=we(z,0)&16777215,Y=(F&1)!==0;let Ae=0;const te=(F&4)!==0,Se=(F&256)!==0;let ve=0;const ne=(F&512)!==0;let ye=0;const me=(F&1024)!==0,q=(F&2048)!==0;let ae=0;const Re=we(z,4);let xe=8;Y&&(Ae=we(z,xe),xe+=4),te&&(xe+=4);let Fe=Ae+c;for(let ze=0;ze<Re;ze++){if(Se?(ve=we(z,xe),xe+=4):ve=R,ne?(ye=we(z,xe),xe+=4):ye=P,me&&(xe+=4),q&&(Q===0?ae=we(z,xe):ae=Sf(z,xe),xe+=4),e.type===We.VIDEO){let Je=0;for(;Je<ye;){const Pe=we(r,Fe);if(Fe+=4,yx(o,r[Fe])){const K=r.subarray(Fe,Fe+Pe);wf(K,o?2:1,n+ae/i,t)}Fe+=Pe,Je+=Pe+4}}n+=ve/i}}))})})}),t}function gx(n){if(!n)return!1;const e=n.indexOf("."),t=e<0?n:n.substring(0,e);return t==="hvc1"||t==="hev1"||t==="dvh1"||t==="dvhe"}function yx(n,e){if(n){const t=e>>1&63;return t===39||t===40}else return(e&31)===6}function wf(n,e,t,r){const i=kf(n);let s=0;s+=e;let o=0,a=0,l=0;for(;s<i.length;){o=0;do{if(s>=i.length)break;l=i[s++],o+=l}while(l===255);a=0;do{if(s>=i.length)break;l=i[s++],a+=l}while(l===255);const c=i.length-s;let d=s;if(a<c)s+=a;else if(a>c){B.error(`Malformed SEI payload. ${a} is too small, only ${c} bytes left to parse.`);break}if(o===4){if(i[d++]===181){const h=xf(i,d);if(d+=2,h===49){const g=we(i,d);if(d+=4,g===1195456820){const y=i[d++];if(y===3){const b=i[d++],E=31&b,C=64&b,w=C?2+E*3:0,R=new Uint8Array(w);if(C){R[0]=b;for(let _=1;_<w;_++)R[_]=i[d++]}r.push({type:y,payloadType:o,pts:t,bytes:R})}}}}}else if(o===5&&a>16){const u=[];for(let y=0;y<16;y++){const b=i[d++].toString(16);u.push(b.length==1?"0"+b:b),(y===3||y===5||y===7||y===9)&&u.push("-")}const h=a-16,g=new Uint8Array(h);for(let y=0;y<h;y++)g[y]=i[d++];r.push({payloadType:o,pts:t,uuid:u.join(""),userData:an(g),userDataBytes:g})}}}function kf(n){const e=n.byteLength,t=[];let r=1;for(;r<e-2;)n[r]===0&&n[r+1]===0&&n[r+2]===3?(t.push(r+2),r+=2):r++;if(t.length===0)return n;const i=e-t.length,s=new Uint8Array(i);let o=0;for(r=0;r<i;o++,r++)o===t[0]&&(o++,t.shift()),s[r]=n[o];return s}function Ax(n){const e=n[0];let t="",r="",i=0,s=0,o=0,a=0,l=0,c=0;if(e===0){for(;ht(n.subarray(c,c+1))!=="\0";)t+=ht(n.subarray(c,c+1)),c+=1;for(t+=ht(n.subarray(c,c+1)),c+=1;ht(n.subarray(c,c+1))!=="\0";)r+=ht(n.subarray(c,c+1)),c+=1;r+=ht(n.subarray(c,c+1)),c+=1,i=we(n,12),s=we(n,16),a=we(n,20),l=we(n,24),c=28}else if(e===1){c+=4,i=we(n,c),c+=4;const u=we(n,c);c+=4;const h=we(n,c);for(c+=4,o=2**32*u+h,OE(o)||(o=Number.MAX_SAFE_INTEGER,B.warn("Presentation time exceeds safe integer limit and wrapped to max safe integer in parsing emsg box")),a=we(n,c),c+=4,l=we(n,c),c+=4;ht(n.subarray(c,c+1))!=="\0";)t+=ht(n.subarray(c,c+1)),c+=1;for(t+=ht(n.subarray(c,c+1)),c+=1;ht(n.subarray(c,c+1))!=="\0";)r+=ht(n.subarray(c,c+1)),c+=1;r+=ht(n.subarray(c,c+1)),c+=1}const d=n.subarray(c,n.byteLength);return{schemeIdUri:t,value:r,timeScale:i,presentationTime:o,presentationTimeDelta:s,eventDuration:a,id:l,payload:d}}function bx(n,...e){const t=e.length;let r=8,i=t;for(;i--;)r+=e[i].byteLength;const s=new Uint8Array(r);for(s[0]=r>>24&255,s[1]=r>>16&255,s[2]=r>>8&255,s[3]=r&255,s.set(n,4),i=0,r=8;i<t;i++)s.set(e[i],r),r+=e[i].byteLength;return s}function vx(n,e,t){if(n.byteLength!==16)throw new RangeError("Invalid system id");let r,i;if(e){r=1,i=new Uint8Array(e.length*16);for(let a=0;a<e.length;a++){const l=e[a];if(l.byteLength!==16)throw new RangeError("Invalid key");i.set(l,a*16)}}else r=0,i=new Uint8Array;let s;r>0?(s=new Uint8Array(4),e.length>0&&new DataView(s.buffer).setUint32(0,e.length,!1)):s=new Uint8Array;const o=new Uint8Array(4);return t&&t.byteLength>0&&new DataView(o.buffer).setUint32(0,t.byteLength,!1),bx([112,115,115,104],new Uint8Array([r,0,0,0]),n,s,i,o,t||new Uint8Array)}function Ex(n){if(!(n instanceof ArrayBuffer)||n.byteLength<32)return null;const e={version:0,systemId:"",kids:null,data:null},t=new DataView(n),r=t.getUint32(0);if(n.byteLength!==r&&r>44||t.getUint32(4)!==1886614376||(e.version=t.getUint32(8)>>>24,e.version>1))return null;e.systemId=Zt.hexDump(new Uint8Array(n,12,16));const s=t.getUint32(28);if(e.version===0){if(r-32<s)return null;e.data=new Uint8Array(n,32,s)}else if(e.version===1){e.kids=[];for(let o=0;o<s;o++)e.kids.push(new Uint8Array(n,32+o*16,16))}return e}let ns={};class Bi{static clearKeyUriToKeyIdMap(){ns={}}constructor(e,t,r,i=[1],s=null){this.uri=void 0,this.method=void 0,this.keyFormat=void 0,this.keyFormatVersions=void 0,this.encrypted=void 0,this.isCommonEncryption=void 0,this.iv=null,this.key=null,this.keyId=null,this.pssh=null,this.method=e,this.uri=t,this.keyFormat=r,this.keyFormatVersions=i,this.iv=s,this.encrypted=e?e!=="NONE":!1,this.isCommonEncryption=this.encrypted&&e!=="AES-128"}isSupported(){if(this.method){if(this.method==="AES-128"||this.method==="NONE")return!0;if(this.keyFormat==="identity")return this.method==="SAMPLE-AES";switch(this.keyFormat){case Lt.FAIRPLAY:case Lt.WIDEVINE:case Lt.PLAYREADY:case Lt.CLEARKEY:return["ISO-23001-7","SAMPLE-AES","SAMPLE-AES-CENC","SAMPLE-AES-CTR"].indexOf(this.method)!==-1}}return!1}getDecryptData(e){if(!this.encrypted||!this.uri)return null;if(this.method==="AES-128"&&this.uri&&!this.iv){typeof e!="number"&&(this.method==="AES-128"&&!this.iv&&B.warn(`missing IV for initialization segment with method="${this.method}" - compliance issue`),e=0);const r=xx(e);return new Bi(this.method,this.uri,"identity",this.keyFormatVersions,r)}const t=WE(this.uri);if(t)switch(this.keyFormat){case Lt.WIDEVINE:this.pssh=t,t.length>=22&&(this.keyId=t.subarray(t.length-22,t.length-6));break;case Lt.PLAYREADY:{const r=new Uint8Array([154,4,240,121,152,64,66,134,171,146,230,91,224,136,95,149]);this.pssh=vx(r,null,t);const i=new Uint16Array(t.buffer,t.byteOffset,t.byteLength/2),s=String.fromCharCode.apply(null,Array.from(i)),o=s.substring(s.indexOf("<"),s.length),c=new DOMParser().parseFromString(o,"text/xml").getElementsByTagName("KID")[0];if(c){const d=c.childNodes[0]?c.childNodes[0].nodeValue:c.getAttribute("VALUE");if(d){const u=El(d).subarray(0,16);VE(u),this.keyId=u}}break}default:{let r=t.subarray(0,16);if(r.length!==16){const i=new Uint8Array(16);i.set(r,16-r.length),r=i}this.keyId=r;break}}if(!this.keyId||this.keyId.byteLength!==16){let r=ns[this.uri];if(!r){const i=Object.keys(ns).length%Number.MAX_SAFE_INTEGER;r=new Uint8Array(16),new DataView(r.buffer,12,4).setUint32(0,i),ns[this.uri]=r}this.keyId=r}return this}}function xx(n){const e=new Uint8Array(16);for(let t=12;t<16;t++)e[t]=n>>8*(15-t)&255;return e}const Lf=/\{\$([a-zA-Z0-9-_]+)\}/g;function Pd(n){return Lf.test(n)}function wt(n,e,t){if(n.variableList!==null||n.hasVariableRefs)for(let r=t.length;r--;){const i=t[r],s=e[i];s&&(e[i]=Ra(n,s))}}function Ra(n,e){if(n.variableList!==null||n.hasVariableRefs){const t=n.variableList;return e.replace(Lf,r=>{const i=r.substring(2,r.length-1),s=t==null?void 0:t[i];return s===void 0?(n.playlistParsingError||(n.playlistParsingError=new Error(`Missing preceding EXT-X-DEFINE tag for Variable Reference: "${i}"`)),r):s})}return e}function Bd(n,e,t){let r=n.variableList;r||(n.variableList=r={});let i,s;if("QUERYPARAM"in e){i=e.QUERYPARAM;try{const o=new self.URL(t).searchParams;if(o.has(i))s=o.get(i);else throw new Error(`"${i}" does not match any query parameter in URI: "${t}"`)}catch(o){n.playlistParsingError||(n.playlistParsingError=new Error(`EXT-X-DEFINE QUERYPARAM: ${o.message}`))}}else i=e.NAME,s=e.VALUE;i in r?n.playlistParsingError||(n.playlistParsingError=new Error(`EXT-X-DEFINE duplicate Variable Name declarations: "${i}"`)):r[i]=s||""}function Sx(n,e,t){const r=e.IMPORT;if(t&&r in t){let i=n.variableList;i||(n.variableList=i={}),i[r]=t[r]}else n.playlistParsingError||(n.playlistParsingError=new Error(`EXT-X-DEFINE IMPORT attribute not found in Multivariant Playlist: "${r}"`))}function Fr(n=!0){return typeof self>"u"?void 0:(n||!self.MediaSource)&&self.ManagedMediaSource||self.MediaSource||self.WebKitMediaSource}const Os={audio:{a3ds:1,"ac-3":.95,"ac-4":1,alac:.9,alaw:1,dra1:1,"dts+":1,"dts-":1,dtsc:1,dtse:1,dtsh:1,"ec-3":.9,enca:1,fLaC:.9,flac:.9,FLAC:.9,g719:1,g726:1,m4ae:1,mha1:1,mha2:1,mhm1:1,mhm2:1,mlpa:1,mp4a:1,"raw ":1,Opus:1,opus:1,samr:1,sawb:1,sawp:1,sevc:1,sqcp:1,ssmv:1,twos:1,ulaw:1},video:{avc1:1,avc2:1,avc3:1,avc4:1,avcp:1,av01:.8,drac:1,dva1:1,dvav:1,dvh1:.7,dvhe:.7,encv:1,hev1:.75,hvc1:.75,mjp2:1,mp4v:1,mvc1:1,mvc2:1,mvc3:1,mvc4:1,resv:1,rv60:1,s263:1,svc1:1,svc2:1,"vc-1":1,vp08:1,vp09:.9},text:{stpp:1,wvtt:1}};function Tx(n,e){const t=Os[e];return!!t&&!!t[n.slice(0,4)]}function Ko(n,e,t=!0){return!n.split(",").some(r=>!Rf(r,e,t))}function Rf(n,e,t=!0){var r;const i=Fr(t);return(r=i==null?void 0:i.isTypeSupported(Oi(n,e)))!=null?r:!1}function Oi(n,e){return`${e}/mp4;codecs="${n}"`}function Od(n){if(n){const e=n.substring(0,4);return Os.video[e]}return 2}function Fs(n){return n.split(",").reduce((e,t)=>{const r=Os.video[t];return r?(r*2+e)/(e?3:2):(Os.audio[t]+e)/(e?2:1)},0)}const zo={};function Cx(n,e=!0){if(zo[n])return zo[n];const t={flac:["flac","fLaC","FLAC"],opus:["opus","Opus"]}[n];for(let r=0;r<t.length;r++)if(Rf(t[r],"audio",e))return zo[n]=t[r],t[r];return n}const wx=/flac|opus/i;function Ms(n,e=!0){return n.replace(wx,t=>Cx(t.toLowerCase(),e))}function Fd(n,e){return n&&n!=="mp4a"?n:e}function kx(n){const e=n.split(".");if(e.length>2){let t=e.shift()+".";return t+=parseInt(e.shift()).toString(16),t+=("000"+parseInt(e.shift()).toString(16)).slice(-4),t}return n}const Md=/#EXT-X-STREAM-INF:([^\r\n]*)(?:[\r\n](?:#[^\r\n]*)?)*([^\r\n]+)|#EXT-X-(SESSION-DATA|SESSION-KEY|DEFINE|CONTENT-STEERING|START):([^\r\n]*)[\r\n]+/g,Nd=/#EXT-X-MEDIA:(.*)/g,Lx=/^#EXT(?:INF|-X-TARGETDURATION):/m,Ud=new RegExp([/#EXTINF:\s*(\d*(?:\.\d+)?)(?:,(.*)\s+)?/.source,/(?!#) *(\S[\S ]*)/.source,/#EXT-X-BYTERANGE:*(.+)/.source,/#EXT-X-PROGRAM-DATE-TIME:(.+)/.source,/#.*/.source].join("|"),"g"),Rx=new RegExp([/#(EXTM3U)/.source,/#EXT-X-(DATERANGE|DEFINE|KEY|MAP|PART|PART-INF|PLAYLIST-TYPE|PRELOAD-HINT|RENDITION-REPORT|SERVER-CONTROL|SKIP|START):(.+)/.source,/#EXT-X-(BITRATE|DISCONTINUITY-SEQUENCE|MEDIA-SEQUENCE|TARGETDURATION|VERSION): *(\d+)/.source,/#EXT-X-(DISCONTINUITY|ENDLIST|GAP|INDEPENDENT-SEGMENTS)/.source,/(#)([^:]*):(.*)/.source,/(#)(.*)(?:.*)\r?\n?/.source].join("|"));class sn{static findGroup(e,t){for(let r=0;r<e.length;r++){const i=e[r];if(i.id===t)return i}}static resolve(e,t){return vl.buildAbsoluteURL(t,e,{alwaysNormalize:!0})}static isMediaPlaylist(e){return Lx.test(e)}static parseMasterPlaylist(e,t){const r=Pd(e),i={contentSteering:null,levels:[],playlistParsingError:null,sessionData:null,sessionKeys:null,startTimeOffset:null,variableList:null,hasVariableRefs:r},s=[];Md.lastIndex=0;let o;for(;(o=Md.exec(e))!=null;)if(o[1]){var a;const c=new st(o[1]);wt(i,c,["CODECS","SUPPLEMENTAL-CODECS","ALLOWED-CPC","PATHWAY-ID","STABLE-VARIANT-ID","AUDIO","VIDEO","SUBTITLES","CLOSED-CAPTIONS","NAME"]);const d=Ra(i,o[2]),u={attrs:c,bitrate:c.decimalInteger("BANDWIDTH")||c.decimalInteger("AVERAGE-BANDWIDTH"),name:c.NAME,url:sn.resolve(d,t)},h=c.decimalResolution("RESOLUTION");h&&(u.width=h.width,u.height=h.height),Ix(c.CODECS,u),(a=u.unknownCodecs)!=null&&a.length||s.push(u),i.levels.push(u)}else if(o[3]){const c=o[3],d=o[4];switch(c){case"SESSION-DATA":{const u=new st(d);wt(i,u,["DATA-ID","LANGUAGE","VALUE","URI"]);const h=u["DATA-ID"];h&&(i.sessionData===null&&(i.sessionData={}),i.sessionData[h]=u);break}case"SESSION-KEY":{const u=$d(d,t,i);u.encrypted&&u.isSupported()?(i.sessionKeys===null&&(i.sessionKeys=[]),i.sessionKeys.push(u)):B.warn(`[Keys] Ignoring invalid EXT-X-SESSION-KEY tag: "${d}"`);break}case"DEFINE":{{const u=new st(d);wt(i,u,["NAME","VALUE","QUERYPARAM"]),Bd(i,u,t)}break}case"CONTENT-STEERING":{const u=new st(d);wt(i,u,["SERVER-URI","PATHWAY-ID"]),i.contentSteering={uri:sn.resolve(u["SERVER-URI"],t),pathwayId:u["PATHWAY-ID"]||"."};break}case"START":{i.startTimeOffset=Hd(d);break}}}const l=s.length>0&&s.length<i.levels.length;return i.levels=l?s:i.levels,i.levels.length===0&&(i.playlistParsingError=new Error("no levels found in manifest")),i}static parseMasterPlaylistMedia(e,t,r){let i;const s={},o=r.levels,a={AUDIO:o.map(c=>({id:c.attrs.AUDIO,audioCodec:c.audioCodec})),SUBTITLES:o.map(c=>({id:c.attrs.SUBTITLES,textCodec:c.textCodec})),"CLOSED-CAPTIONS":[]};let l=0;for(Nd.lastIndex=0;(i=Nd.exec(e))!==null;){const c=new st(i[1]),d=c.TYPE;if(d){const u=a[d],h=s[d]||[];s[d]=h,wt(r,c,["URI","GROUP-ID","LANGUAGE","ASSOC-LANGUAGE","STABLE-RENDITION-ID","NAME","INSTREAM-ID","CHARACTERISTICS","CHANNELS"]);const g=c.LANGUAGE,y=c["ASSOC-LANGUAGE"],b=c.CHANNELS,E=c.CHARACTERISTICS,C=c["INSTREAM-ID"],w={attrs:c,bitrate:0,id:l++,groupId:c["GROUP-ID"]||"",name:c.NAME||g||"",type:d,default:c.bool("DEFAULT"),autoselect:c.bool("AUTOSELECT"),forced:c.bool("FORCED"),lang:g,url:c.URI?sn.resolve(c.URI,t):""};if(y&&(w.assocLang=y),b&&(w.channels=b),E&&(w.characteristics=E),C&&(w.instreamId=C),u!=null&&u.length){const R=sn.findGroup(u,w.groupId)||u[0];Gd(w,R,"audioCodec"),Gd(w,R,"textCodec")}h.push(w)}}return s}static parseLevelPlaylist(e,t,r,i,s,o){const a=new jE(t),l=a.fragments;let c=null,d=0,u=0,h=0,g=0,y=null,b=new No(i,t),E,C,w,R=-1,_=!1,P=null;for(Ud.lastIndex=0,a.m3u8=e,a.hasVariableRefs=Pd(e);(E=Ud.exec(e))!==null;){_&&(_=!1,b=new No(i,t),b.start=h,b.sn=d,b.cc=g,b.level=r,c&&(b.initSegment=c,b.rawProgramDateTime=c.rawProgramDateTime,c.rawProgramDateTime=null,P&&(b.setByteRange(P),P=null)));const Q=E[1];if(Q){b.duration=parseFloat(Q);const F=(" "+E[2]).slice(1);b.title=F||null,b.tagList.push(F?["INF",Q,F]:["INF",Q])}else if(E[3]){if(pe(b.duration)){b.start=h,w&&jd(b,w,a),b.sn=d,b.level=r,b.cc=g,l.push(b);const F=(" "+E[3]).slice(1);b.relurl=Ra(a,F),Kd(b,y),y=b,h+=b.duration,d++,u=0,_=!0}}else if(E[4]){const F=(" "+E[4]).slice(1);y?b.setByteRange(F,y):b.setByteRange(F)}else if(E[5])b.rawProgramDateTime=(" "+E[5]).slice(1),b.tagList.push(["PROGRAM-DATE-TIME",b.rawProgramDateTime]),R===-1&&(R=l.length);else{if(E=E[0].match(Rx),!E){B.warn("No matches on slow regex match for level playlist!");continue}for(C=1;C<E.length&&!(typeof E[C]<"u");C++);const F=(" "+E[C]).slice(1),Y=(" "+E[C+1]).slice(1),Ae=E[C+2]?(" "+E[C+2]).slice(1):"";switch(F){case"PLAYLIST-TYPE":a.type=Y.toUpperCase();break;case"MEDIA-SEQUENCE":d=a.startSN=parseInt(Y);break;case"SKIP":{const te=new st(Y);wt(a,te,["RECENTLY-REMOVED-DATERANGES"]);const Se=te.decimalInteger("SKIPPED-SEGMENTS");if(pe(Se)){a.skippedSegments=Se;for(let ne=Se;ne--;)l.unshift(null);d+=Se}const ve=te.enumeratedString("RECENTLY-REMOVED-DATERANGES");ve&&(a.recentlyRemovedDateranges=ve.split("	"));break}case"TARGETDURATION":a.targetduration=Math.max(parseInt(Y),1);break;case"VERSION":a.version=parseInt(Y);break;case"INDEPENDENT-SEGMENTS":case"EXTM3U":break;case"ENDLIST":a.live=!1;break;case"#":(Y||Ae)&&b.tagList.push(Ae?[Y,Ae]:[Y]);break;case"DISCONTINUITY":g++,b.tagList.push(["DIS"]);break;case"GAP":b.gap=!0,b.tagList.push([F]);break;case"BITRATE":b.tagList.push([F,Y]);break;case"DATERANGE":{const te=new st(Y);wt(a,te,["ID","CLASS","START-DATE","END-DATE","SCTE35-CMD","SCTE35-OUT","SCTE35-IN"]),wt(a,te,te.clientAttrs);const Se=new pf(te,a.dateRanges[te.ID]);Se.isValid||a.skippedSegments?a.dateRanges[Se.id]=Se:B.warn(`Ignoring invalid DATERANGE tag: "${Y}"`),b.tagList.push(["EXT-X-DATERANGE",Y]);break}case"DEFINE":{{const te=new st(Y);wt(a,te,["NAME","VALUE","IMPORT","QUERYPARAM"]),"IMPORT"in te?Sx(a,te,o):Bd(a,te,t)}break}case"DISCONTINUITY-SEQUENCE":g=parseInt(Y);break;case"KEY":{const te=$d(Y,t,a);if(te.isSupported()){if(te.method==="NONE"){w=void 0;break}w||(w={}),w[te.keyFormat]&&(w=ct({},w)),w[te.keyFormat]=te}else B.warn(`[Keys] Ignoring invalid EXT-X-KEY tag: "${Y}"`);break}case"START":a.startTimeOffset=Hd(Y);break;case"MAP":{const te=new st(Y);if(wt(a,te,["BYTERANGE","URI"]),b.duration){const Se=new No(i,t);zd(Se,te,r,w),c=Se,b.initSegment=c,c.rawProgramDateTime&&!b.rawProgramDateTime&&(b.rawProgramDateTime=c.rawProgramDateTime)}else{const Se=b.byteRangeEndOffset;if(Se){const ve=b.byteRangeStartOffset;P=`${Se-ve}@${ve}`}else P=null;zd(b,te,r,w),c=b,_=!0}break}case"SERVER-CONTROL":{const te=new st(Y);a.canBlockReload=te.bool("CAN-BLOCK-RELOAD"),a.canSkipUntil=te.optionalFloat("CAN-SKIP-UNTIL",0),a.canSkipDateRanges=a.canSkipUntil>0&&te.bool("CAN-SKIP-DATERANGES"),a.partHoldBack=te.optionalFloat("PART-HOLD-BACK",0),a.holdBack=te.optionalFloat("HOLD-BACK",0);break}case"PART-INF":{const te=new st(Y);a.partTarget=te.decimalFloatingPoint("PART-TARGET");break}case"PART":{let te=a.partList;te||(te=a.partList=[]);const Se=u>0?te[te.length-1]:void 0,ve=u++,ne=new st(Y);wt(a,ne,["BYTERANGE","URI"]);const ye=new KE(ne,b,t,ve,Se);te.push(ye),b.duration+=ye.duration;break}case"PRELOAD-HINT":{const te=new st(Y);wt(a,te,["URI"]),a.preloadHint=te;break}case"RENDITION-REPORT":{const te=new st(Y);wt(a,te,["URI"]),a.renditionReports=a.renditionReports||[],a.renditionReports.push(te);break}default:B.warn(`line parsed but not handled: ${E}`);break}}}y&&!y.relurl?(l.pop(),h-=y.duration,a.partList&&(a.fragmentHint=y)):a.partList&&(Kd(b,y),b.cc=g,a.fragmentHint=b,w&&jd(b,w,a));const H=l.length,U=l[0],z=l[H-1];if(h+=a.skippedSegments*a.targetduration,h>0&&H&&z){a.averagetargetduration=h/H;const Q=z.sn;a.endSN=Q!=="initSegment"?Q:0,a.live||(z.endList=!0),U&&(a.startCC=U.cc)}else a.endSN=0,a.startCC=0;return a.fragmentHint&&(h+=a.fragmentHint.duration),a.totalduration=h,a.endCC=g,R>0&&_x(l,R),a}}function $d(n,e,t){var r,i;const s=new st(n);wt(t,s,["KEYFORMAT","KEYFORMATVERSIONS","URI","IV","URI"]);const o=(r=s.METHOD)!=null?r:"",a=s.URI,l=s.hexadecimalInteger("IV"),c=s.KEYFORMATVERSIONS,d=(i=s.KEYFORMAT)!=null?i:"identity";a&&s.IV&&!l&&B.error(`Invalid IV: ${s.IV}`);const u=a?sn.resolve(a,e):"",h=(c||"1").split("/").map(Number).filter(Number.isFinite);return new Bi(o,u,d,h,l)}function Hd(n){const t=new st(n).decimalFloatingPoint("TIME-OFFSET");return pe(t)?t:null}function Ix(n,e){let t=(n||"").split(/[ ,]+/).filter(r=>r);["video","audio","text"].forEach(r=>{const i=t.filter(s=>Tx(s,r));i.length&&(e[`${r}Codec`]=i.join(","),t=t.filter(s=>i.indexOf(s)===-1))}),e.unknownCodecs=t}function Gd(n,e,t){const r=e[t];r&&(n[t]=r)}function _x(n,e){let t=n[e];for(let r=e;r--;){const i=n[r];if(!i)return;i.programDateTime=t.programDateTime-i.duration*1e3,t=i}}function Kd(n,e){n.rawProgramDateTime?n.programDateTime=Date.parse(n.rawProgramDateTime):e!=null&&e.programDateTime&&(n.programDateTime=e.endProgramDateTime),pe(n.programDateTime)||(n.programDateTime=null,n.rawProgramDateTime=null)}function zd(n,e,t,r){n.relurl=e.URI,e.BYTERANGE&&n.setByteRange(e.BYTERANGE),n.level=t,n.sn="initSegment",r&&(n.levelkeys=r),n.initSegment=null}function jd(n,e,t){n.levelkeys=e;const{encryptedFragments:r}=t;(!r.length||r[r.length-1].levelkeys!==e)&&Object.keys(e).some(i=>e[i].isCommonEncryption)&&r.push(n)}var Ue={MANIFEST:"manifest",LEVEL:"level",AUDIO_TRACK:"audioTrack",SUBTITLE_TRACK:"subtitleTrack"},ke={MAIN:"main",AUDIO:"audio",SUBTITLE:"subtitle"};function qd(n){const{type:e}=n;switch(e){case Ue.AUDIO_TRACK:return ke.AUDIO;case Ue.SUBTITLE_TRACK:return ke.SUBTITLE;default:return ke.MAIN}}function jo(n,e){let t=n.url;return(t===void 0||t.indexOf("data:")===0)&&(t=e.url),t}class Dx{constructor(e){this.hls=void 0,this.loaders=Object.create(null),this.variableList=null,this.hls=e,this.registerListeners()}startLoad(e){}stopLoad(){this.destroyInternalLoaders()}registerListeners(){const{hls:e}=this;e.on(T.MANIFEST_LOADING,this.onManifestLoading,this),e.on(T.LEVEL_LOADING,this.onLevelLoading,this),e.on(T.AUDIO_TRACK_LOADING,this.onAudioTrackLoading,this),e.on(T.SUBTITLE_TRACK_LOADING,this.onSubtitleTrackLoading,this)}unregisterListeners(){const{hls:e}=this;e.off(T.MANIFEST_LOADING,this.onManifestLoading,this),e.off(T.LEVEL_LOADING,this.onLevelLoading,this),e.off(T.AUDIO_TRACK_LOADING,this.onAudioTrackLoading,this),e.off(T.SUBTITLE_TRACK_LOADING,this.onSubtitleTrackLoading,this)}createInternalLoader(e){const t=this.hls.config,r=t.pLoader,i=t.loader,s=r||i,o=new s(t);return this.loaders[e.type]=o,o}getInternalLoader(e){return this.loaders[e.type]}resetInternalLoader(e){this.loaders[e]&&delete this.loaders[e]}destroyInternalLoaders(){for(const e in this.loaders){const t=this.loaders[e];t&&t.destroy(),this.resetInternalLoader(e)}}destroy(){this.variableList=null,this.unregisterListeners(),this.destroyInternalLoaders()}onManifestLoading(e,t){const{url:r}=t;this.variableList=null,this.load({id:null,level:0,responseType:"text",type:Ue.MANIFEST,url:r,deliveryDirectives:null})}onLevelLoading(e,t){const{id:r,level:i,pathwayId:s,url:o,deliveryDirectives:a}=t;this.load({id:r,level:i,pathwayId:s,responseType:"text",type:Ue.LEVEL,url:o,deliveryDirectives:a})}onAudioTrackLoading(e,t){const{id:r,groupId:i,url:s,deliveryDirectives:o}=t;this.load({id:r,groupId:i,level:null,responseType:"text",type:Ue.AUDIO_TRACK,url:s,deliveryDirectives:o})}onSubtitleTrackLoading(e,t){const{id:r,groupId:i,url:s,deliveryDirectives:o}=t;this.load({id:r,groupId:i,level:null,responseType:"text",type:Ue.SUBTITLE_TRACK,url:s,deliveryDirectives:o})}load(e){var t;const r=this.hls.config;let i=this.getInternalLoader(e);if(i){const c=i.context;if(c&&c.url===e.url&&c.level===e.level){B.trace("[playlist-loader]: playlist request ongoing");return}B.log(`[playlist-loader]: aborting previous loader for type: ${e.type}`),i.abort()}let s;if(e.type===Ue.MANIFEST?s=r.manifestLoadPolicy.default:s=ct({},r.playlistLoadPolicy.default,{timeoutRetry:null,errorRetry:null}),i=this.createInternalLoader(e),pe((t=e.deliveryDirectives)==null?void 0:t.part)){let c;if(e.type===Ue.LEVEL&&e.level!==null?c=this.hls.levels[e.level].details:e.type===Ue.AUDIO_TRACK&&e.id!==null?c=this.hls.audioTracks[e.id].details:e.type===Ue.SUBTITLE_TRACK&&e.id!==null&&(c=this.hls.subtitleTracks[e.id].details),c){const d=c.partTarget,u=c.targetduration;if(d&&u){const h=Math.max(d*3,u*.8)*1e3;s=ct({},s,{maxTimeToFirstByteMs:Math.min(h,s.maxTimeToFirstByteMs),maxLoadTimeMs:Math.min(h,s.maxTimeToFirstByteMs)})}}}const o=s.errorRetry||s.timeoutRetry||{},a={loadPolicy:s,timeout:s.maxLoadTimeMs,maxRetry:o.maxNumRetry||0,retryDelay:o.retryDelayMs||0,maxRetryDelay:o.maxRetryDelayMs||0},l={onSuccess:(c,d,u,h)=>{const g=this.getInternalLoader(u);this.resetInternalLoader(u.type);const y=c.data;if(y.indexOf("#EXTM3U")!==0){this.handleManifestParsingError(c,u,new Error("no EXTM3U delimiter"),h||null,d);return}d.parsing.start=performance.now(),sn.isMediaPlaylist(y)?this.handleTrackOrLevelPlaylist(c,d,u,h||null,g):this.handleMasterPlaylist(c,d,u,h)},onError:(c,d,u,h)=>{this.handleNetworkError(d,u,!1,c,h)},onTimeout:(c,d,u)=>{this.handleNetworkError(d,u,!0,void 0,c)}};i.load(e,a,l)}handleMasterPlaylist(e,t,r,i){const s=this.hls,o=e.data,a=jo(e,r),l=sn.parseMasterPlaylist(o,a);if(l.playlistParsingError){this.handleManifestParsingError(e,r,l.playlistParsingError,i,t);return}const{contentSteering:c,levels:d,sessionData:u,sessionKeys:h,startTimeOffset:g,variableList:y}=l;this.variableList=y;const{AUDIO:b=[],SUBTITLES:E,"CLOSED-CAPTIONS":C}=sn.parseMasterPlaylistMedia(o,a,l);b.length&&!b.some(R=>!R.url)&&d[0].audioCodec&&!d[0].attrs.AUDIO&&(B.log("[playlist-loader]: audio codec signaled in quality level, but no embedded audio track signaled, create one"),b.unshift({type:"main",name:"main",groupId:"main",default:!1,autoselect:!1,forced:!1,id:-1,attrs:new st({}),bitrate:0,url:""})),s.trigger(T.MANIFEST_LOADED,{levels:d,audioTracks:b,subtitles:E,captions:C,contentSteering:c,url:a,stats:t,networkDetails:i,sessionData:u,sessionKeys:h,startTimeOffset:g,variableList:y})}handleTrackOrLevelPlaylist(e,t,r,i,s){const o=this.hls,{id:a,level:l,type:c}=r,d=jo(e,r),u=0,h=pe(l)?l:pe(a)?a:0,g=qd(r),y=sn.parseLevelPlaylist(e.data,d,h,g,u,this.variableList);if(c===Ue.MANIFEST){const b={attrs:new st({}),bitrate:0,details:y,name:"",url:d};o.trigger(T.MANIFEST_LOADED,{levels:[b],audioTracks:[],url:d,stats:t,networkDetails:i,sessionData:null,sessionKeys:null,contentSteering:null,startTimeOffset:null,variableList:null})}t.parsing.end=performance.now(),r.levelDetails=y,this.handlePlaylistLoaded(y,e,t,r,i,s)}handleManifestParsingError(e,t,r,i,s){this.hls.trigger(T.ERROR,{type:Le.NETWORK_ERROR,details:$.MANIFEST_PARSING_ERROR,fatal:t.type===Ue.MANIFEST,url:e.url,err:r,error:r,reason:r.message,response:e,context:t,networkDetails:i,stats:s})}handleNetworkError(e,t,r=!1,i,s){let o=`A network ${r?"timeout":"error"+(i?" (status "+i.code+")":"")} occurred while loading ${e.type}`;e.type===Ue.LEVEL?o+=`: ${e.level} id: ${e.id}`:(e.type===Ue.AUDIO_TRACK||e.type===Ue.SUBTITLE_TRACK)&&(o+=` id: ${e.id} group-id: "${e.groupId}"`);const a=new Error(o);B.warn(`[playlist-loader]: ${o}`);let l=$.UNKNOWN,c=!1;const d=this.getInternalLoader(e);switch(e.type){case Ue.MANIFEST:l=r?$.MANIFEST_LOAD_TIMEOUT:$.MANIFEST_LOAD_ERROR,c=!0;break;case Ue.LEVEL:l=r?$.LEVEL_LOAD_TIMEOUT:$.LEVEL_LOAD_ERROR,c=!1;break;case Ue.AUDIO_TRACK:l=r?$.AUDIO_TRACK_LOAD_TIMEOUT:$.AUDIO_TRACK_LOAD_ERROR,c=!1;break;case Ue.SUBTITLE_TRACK:l=r?$.SUBTITLE_TRACK_LOAD_TIMEOUT:$.SUBTITLE_LOAD_ERROR,c=!1;break}d&&this.resetInternalLoader(e.type);const u={type:Le.NETWORK_ERROR,details:l,fatal:c,url:e.url,loader:d,context:e,error:a,networkDetails:t,stats:s};if(i){const h=(t==null?void 0:t.url)||e.url;u.response=yt({url:h,data:void 0},i)}this.hls.trigger(T.ERROR,u)}handlePlaylistLoaded(e,t,r,i,s,o){const a=this.hls,{type:l,level:c,id:d,groupId:u,deliveryDirectives:h}=i,g=jo(t,i),y=qd(i),b=typeof i.level=="number"&&y===ke.MAIN?c:void 0;if(!e.fragments.length){const C=new Error("No Segments found in Playlist");a.trigger(T.ERROR,{type:Le.NETWORK_ERROR,details:$.LEVEL_EMPTY_ERROR,fatal:!1,url:g,error:C,reason:C.message,response:t,context:i,level:b,parent:y,networkDetails:s,stats:r});return}e.targetduration||(e.playlistParsingError=new Error("Missing Target Duration"));const E=e.playlistParsingError;if(E){a.trigger(T.ERROR,{type:Le.NETWORK_ERROR,details:$.LEVEL_PARSING_ERROR,fatal:!1,url:g,error:E,reason:E.message,response:t,context:i,level:b,parent:y,networkDetails:s,stats:r});return}switch(e.live&&o&&(o.getCacheAge&&(e.ageHeader=o.getCacheAge()||0),(!o.getCacheAge||isNaN(e.ageHeader))&&(e.ageHeader=0)),l){case Ue.MANIFEST:case Ue.LEVEL:a.trigger(T.LEVEL_LOADED,{details:e,level:b||0,id:d||0,stats:r,networkDetails:s,deliveryDirectives:h});break;case Ue.AUDIO_TRACK:a.trigger(T.AUDIO_TRACK_LOADED,{details:e,id:d||0,groupId:u||"",stats:r,networkDetails:s,deliveryDirectives:h});break;case Ue.SUBTITLE_TRACK:a.trigger(T.SUBTITLE_TRACK_LOADED,{details:e,id:d||0,groupId:u||"",stats:r,networkDetails:s,deliveryDirectives:h});break}}}function If(n,e){let t;try{t=new Event("addtrack")}catch{t=document.createEvent("Event"),t.initEvent("addtrack",!1,!1)}t.track=n,e.dispatchEvent(t)}function _f(n,e){const t=n.mode;if(t==="disabled"&&(n.mode="hidden"),n.cues&&!n.cues.getCueById(e.id))try{if(n.addCue(e),!n.cues.getCueById(e.id))throw new Error(`addCue is failed for: ${e}`)}catch(r){B.debug(`[texttrack-utils]: ${r}`);try{const i=new self.TextTrackCue(e.startTime,e.endTime,e.text);i.id=e.id,n.addCue(i)}catch(i){B.debug(`[texttrack-utils]: Legacy TextTrackCue fallback failed: ${i}`)}}t==="disabled"&&(n.mode=t)}function pr(n){const e=n.mode;if(e==="disabled"&&(n.mode="hidden"),n.cues)for(let t=n.cues.length;t--;)n.removeCue(n.cues[t]);e==="disabled"&&(n.mode=e)}function Ia(n,e,t,r){const i=n.mode;if(i==="disabled"&&(n.mode="hidden"),n.cues&&n.cues.length>0){const s=Bx(n.cues,e,t);for(let o=0;o<s.length;o++)(!r||r(s[o]))&&n.removeCue(s[o])}i==="disabled"&&(n.mode=i)}function Px(n,e){if(e<n[0].startTime)return 0;const t=n.length-1;if(e>n[t].endTime)return-1;let r=0,i=t;for(;r<=i;){const s=Math.floor((i+r)/2);if(e<n[s].startTime)i=s-1;else if(e>n[s].startTime&&r<t)r=s+1;else return s}return n[r].startTime-e<e-n[i].startTime?r:i}function Bx(n,e,t){const r=[],i=Px(n,e);if(i>-1)for(let s=i,o=n.length;s<o;s++){const a=n[s];if(a.startTime>=e&&a.endTime<=t)r.push(a);else if(a.startTime>t)return r}return r}function bs(n){const e=[];for(let t=0;t<n.length;t++){const r=n[t];(r.kind==="subtitles"||r.kind==="captions")&&r.label&&e.push(n[t])}return e}var Gt={audioId3:"org.id3",dateRange:"com.apple.quicktime.HLS",emsg:"https://aomedia.org/emsg/ID3"};const Ox=.25;function _a(){if(!(typeof self>"u"))return self.VTTCue||self.TextTrackCue}function Vd(n,e,t,r,i){let s=new n(e,t,"");try{s.value=r,i&&(s.type=i)}catch{s=new n(e,t,JSON.stringify(i?yt({type:i},r):r))}return s}const rs=(()=>{const n=_a();try{n&&new n(0,Number.POSITIVE_INFINITY,"")}catch{return Number.MAX_VALUE}return Number.POSITIVE_INFINITY})();function qo(n,e){return n.getTime()/1e3-e}function Fx(n){return Uint8Array.from(n.replace(/^0x/,"").replace(/([\da-fA-F]{2}) ?/g,"0x$1 ").replace(/ +$/,"").split(" ")).buffer}class Mx{constructor(e){this.hls=void 0,this.id3Track=null,this.media=null,this.dateRangeCuesAppended={},this.hls=e,this._registerListeners()}destroy(){this._unregisterListeners(),this.id3Track=null,this.media=null,this.dateRangeCuesAppended={},this.hls=null}_registerListeners(){const{hls:e}=this;e.on(T.MEDIA_ATTACHED,this.onMediaAttached,this),e.on(T.MEDIA_DETACHING,this.onMediaDetaching,this),e.on(T.MANIFEST_LOADING,this.onManifestLoading,this),e.on(T.FRAG_PARSING_METADATA,this.onFragParsingMetadata,this),e.on(T.BUFFER_FLUSHING,this.onBufferFlushing,this),e.on(T.LEVEL_UPDATED,this.onLevelUpdated,this)}_unregisterListeners(){const{hls:e}=this;e.off(T.MEDIA_ATTACHED,this.onMediaAttached,this),e.off(T.MEDIA_DETACHING,this.onMediaDetaching,this),e.off(T.MANIFEST_LOADING,this.onManifestLoading,this),e.off(T.FRAG_PARSING_METADATA,this.onFragParsingMetadata,this),e.off(T.BUFFER_FLUSHING,this.onBufferFlushing,this),e.off(T.LEVEL_UPDATED,this.onLevelUpdated,this)}onMediaAttached(e,t){this.media=t.media}onMediaDetaching(){this.id3Track&&(pr(this.id3Track),this.id3Track=null,this.media=null,this.dateRangeCuesAppended={})}onManifestLoading(){this.dateRangeCuesAppended={}}createTrack(e){const t=this.getID3Track(e.textTracks);return t.mode="hidden",t}getID3Track(e){if(this.media){for(let t=0;t<e.length;t++){const r=e[t];if(r.kind==="metadata"&&r.label==="id3")return If(r,this.media),r}return this.media.addTextTrack("metadata","id3")}}onFragParsingMetadata(e,t){if(!this.media)return;const{hls:{config:{enableEmsgMetadataCues:r,enableID3MetadataCues:i}}}=this;if(!r&&!i)return;const{samples:s}=t;this.id3Track||(this.id3Track=this.createTrack(this.media));const o=_a();if(o)for(let a=0;a<s.length;a++){const l=s[a].type;if(l===Gt.emsg&&!r||!i)continue;const c=vf(s[a].data);if(c){const d=s[a].pts;let u=d+s[a].duration;u>rs&&(u=rs),u-d<=0&&(u=d+Ox);for(let g=0;g<c.length;g++){const y=c[g];if(!bf(y)){this.updateId3CueEnds(d,l);const b=Vd(o,d,u,y,l);b&&this.id3Track.addCue(b)}}}}}updateId3CueEnds(e,t){var r;const i=(r=this.id3Track)==null?void 0:r.cues;if(i)for(let s=i.length;s--;){const o=i[s];o.type===t&&o.startTime<e&&o.endTime===rs&&(o.endTime=e)}}onBufferFlushing(e,{startOffset:t,endOffset:r,type:i}){const{id3Track:s,hls:o}=this;if(!o)return;const{config:{enableEmsgMetadataCues:a,enableID3MetadataCues:l}}=o;if(s&&(a||l)){let c;i==="audio"?c=d=>d.type===Gt.audioId3&&l:i==="video"?c=d=>d.type===Gt.emsg&&a:c=d=>d.type===Gt.audioId3&&l||d.type===Gt.emsg&&a,Ia(s,t,r,c)}}onLevelUpdated(e,{details:t}){if(!this.media||!t.hasProgramDateTime||!this.hls.config.enableDateRangeMetadataCues)return;const{dateRangeCuesAppended:r,id3Track:i}=this,{dateRanges:s}=t,o=Object.keys(s);if(i){const d=Object.keys(r).filter(u=>!o.includes(u));for(let u=d.length;u--;){const h=d[u];Object.keys(r[h].cues).forEach(g=>{i.removeCue(r[h].cues[g])}),delete r[h]}}const a=t.fragments[t.fragments.length-1];if(o.length===0||!pe(a==null?void 0:a.programDateTime))return;this.id3Track||(this.id3Track=this.createTrack(this.media));const l=a.programDateTime/1e3-a.start,c=_a();for(let d=0;d<o.length;d++){const u=o[d],h=s[u],g=qo(h.startDate,l),y=r[u],b=(y==null?void 0:y.cues)||{};let E=(y==null?void 0:y.durationKnown)||!1,C=rs;const w=h.endDate;if(w)C=qo(w,l),E=!0;else if(h.endOnNext&&!E){const _=o.reduce((P,H)=>{if(H!==h.id){const U=s[H];if(U.class===h.class&&U.startDate>h.startDate&&(!P||h.startDate<P.startDate))return U}return P},null);_&&(C=qo(_.startDate,l),E=!0)}const R=Object.keys(h.attr);for(let _=0;_<R.length;_++){const P=R[_];if(!HE(P))continue;const H=b[P];if(H)E&&!y.durationKnown&&(H.endTime=C);else if(c){let U=h.attr[P];GE(P)&&(U=Fx(U));const z=Vd(c,g,C,{key:P,data:U},Gt.dateRange);z&&(z.id=u,this.id3Track.addCue(z),b[P]=z)}}r[u]={cues:b,dateRange:h,durationKnown:E}}}}class Nx{constructor(e){this.hls=void 0,this.config=void 0,this.media=null,this.levelDetails=null,this.currentTime=0,this.stallCount=0,this._latency=null,this.timeupdateHandler=()=>this.timeupdate(),this.hls=e,this.config=e.config,this.registerListeners()}get latency(){return this._latency||0}get maxLatency(){const{config:e,levelDetails:t}=this;return e.liveMaxLatencyDuration!==void 0?e.liveMaxLatencyDuration:t?e.liveMaxLatencyDurationCount*t.targetduration:0}get targetLatency(){const{levelDetails:e}=this;if(e===null)return null;const{holdBack:t,partHoldBack:r,targetduration:i}=e,{liveSyncDuration:s,liveSyncDurationCount:o,lowLatencyMode:a}=this.config,l=this.hls.userConfig;let c=a&&r||t;(l.liveSyncDuration||l.liveSyncDurationCount||c===0)&&(c=s!==void 0?s:o*i);const d=i,u=1;return c+Math.min(this.stallCount*u,d)}get liveSyncPosition(){const e=this.estimateLiveEdge(),t=this.targetLatency,r=this.levelDetails;if(e===null||t===null||r===null)return null;const i=r.edge,s=e-t-this.edgeStalled,o=i-r.totalduration,a=i-(this.config.lowLatencyMode&&r.partTarget||r.targetduration);return Math.min(Math.max(o,s),a)}get drift(){const{levelDetails:e}=this;return e===null?1:e.drift}get edgeStalled(){const{levelDetails:e}=this;if(e===null)return 0;const t=(this.config.lowLatencyMode&&e.partTarget||e.targetduration)*3;return Math.max(e.age-t,0)}get forwardBufferLength(){const{media:e,levelDetails:t}=this;if(!e||!t)return 0;const r=e.buffered.length;return(r?e.buffered.end(r-1):t.edge)-this.currentTime}destroy(){this.unregisterListeners(),this.onMediaDetaching(),this.levelDetails=null,this.hls=this.timeupdateHandler=null}registerListeners(){this.hls.on(T.MEDIA_ATTACHED,this.onMediaAttached,this),this.hls.on(T.MEDIA_DETACHING,this.onMediaDetaching,this),this.hls.on(T.MANIFEST_LOADING,this.onManifestLoading,this),this.hls.on(T.LEVEL_UPDATED,this.onLevelUpdated,this),this.hls.on(T.ERROR,this.onError,this)}unregisterListeners(){this.hls.off(T.MEDIA_ATTACHED,this.onMediaAttached,this),this.hls.off(T.MEDIA_DETACHING,this.onMediaDetaching,this),this.hls.off(T.MANIFEST_LOADING,this.onManifestLoading,this),this.hls.off(T.LEVEL_UPDATED,this.onLevelUpdated,this),this.hls.off(T.ERROR,this.onError,this)}onMediaAttached(e,t){this.media=t.media,this.media.addEventListener("timeupdate",this.timeupdateHandler)}onMediaDetaching(){this.media&&(this.media.removeEventListener("timeupdate",this.timeupdateHandler),this.media=null)}onManifestLoading(){this.levelDetails=null,this._latency=null,this.stallCount=0}onLevelUpdated(e,{details:t}){this.levelDetails=t,t.advanced&&this.timeupdate(),!t.live&&this.media&&this.media.removeEventListener("timeupdate",this.timeupdateHandler)}onError(e,t){var r;t.details===$.BUFFER_STALLED_ERROR&&(this.stallCount++,(r=this.levelDetails)!=null&&r.live&&B.warn("[playback-rate-controller]: Stall detected, adjusting target latency"))}timeupdate(){const{media:e,levelDetails:t}=this;if(!e||!t)return;this.currentTime=e.currentTime;const r=this.computeLatency();if(r===null)return;this._latency=r;const{lowLatencyMode:i,maxLiveSyncPlaybackRate:s}=this.config;if(!i||s===1||!t.live)return;const o=this.targetLatency;if(o===null)return;const a=r-o,l=Math.min(this.maxLatency,o+t.targetduration);if(a<l&&a>.05&&this.forwardBufferLength>1){const d=Math.min(2,Math.max(1,s)),u=Math.round(2/(1+Math.exp(-.75*a-this.edgeStalled))*20)/20;e.playbackRate=Math.min(d,Math.max(1,u))}else e.playbackRate!==1&&e.playbackRate!==0&&(e.playbackRate=1)}estimateLiveEdge(){const{levelDetails:e}=this;return e===null?null:e.edge+e.age}computeLatency(){const e=this.estimateLiveEdge();return e===null?null:e-this.currentTime}}const Da=["NONE","TYPE-0","TYPE-1",null];function Ux(n){return Da.indexOf(n)>-1}const Ns=["SDR","PQ","HLG"];function $x(n){return!!n&&Ns.indexOf(n)>-1}var Si={No:"",Yes:"YES",v2:"v2"};function Hx(n,e){const{canSkipUntil:t,canSkipDateRanges:r,endSN:i}=n,s=e!==void 0?e-i:0;return t&&s<t?r?Si.v2:Si.Yes:Si.No}class Wd{constructor(e,t,r){this.msn=void 0,this.part=void 0,this.skip=void 0,this.msn=e,this.part=t,this.skip=r}addDirectives(e){const t=new self.URL(e);return this.msn!==void 0&&t.searchParams.set("_HLS_msn",this.msn.toString()),this.part!==void 0&&t.searchParams.set("_HLS_part",this.part.toString()),this.skip&&t.searchParams.set("_HLS_skip",this.skip),t.href}}class Rr{constructor(e){this._attrs=void 0,this.audioCodec=void 0,this.bitrate=void 0,this.codecSet=void 0,this.url=void 0,this.frameRate=void 0,this.height=void 0,this.id=void 0,this.name=void 0,this.videoCodec=void 0,this.width=void 0,this.details=void 0,this.fragmentError=0,this.loadError=0,this.loaded=void 0,this.realBitrate=0,this.supportedPromise=void 0,this.supportedResult=void 0,this._avgBitrate=0,this._audioGroups=void 0,this._subtitleGroups=void 0,this._urlId=0,this.url=[e.url],this._attrs=[e.attrs],this.bitrate=e.bitrate,e.details&&(this.details=e.details),this.id=e.id||0,this.name=e.name,this.width=e.width||0,this.height=e.height||0,this.frameRate=e.attrs.optionalFloat("FRAME-RATE",0),this._avgBitrate=e.attrs.decimalInteger("AVERAGE-BANDWIDTH"),this.audioCodec=e.audioCodec,this.videoCodec=e.videoCodec,this.codecSet=[e.videoCodec,e.audioCodec].filter(t=>!!t).map(t=>t.substring(0,4)).join(","),this.addGroupId("audio",e.attrs.AUDIO),this.addGroupId("text",e.attrs.SUBTITLES)}get maxBitrate(){return Math.max(this.realBitrate,this.bitrate)}get averageBitrate(){return this._avgBitrate||this.realBitrate||this.bitrate}get attrs(){return this._attrs[0]}get codecs(){return this.attrs.CODECS||""}get pathwayId(){return this.attrs["PATHWAY-ID"]||"."}get videoRange(){return this.attrs["VIDEO-RANGE"]||"SDR"}get score(){return this.attrs.optionalFloat("SCORE",0)}get uri(){return this.url[0]||""}hasAudioGroup(e){return Yd(this._audioGroups,e)}hasSubtitleGroup(e){return Yd(this._subtitleGroups,e)}get audioGroups(){return this._audioGroups}get subtitleGroups(){return this._subtitleGroups}addGroupId(e,t){if(t){if(e==="audio"){let r=this._audioGroups;r||(r=this._audioGroups=[]),r.indexOf(t)===-1&&r.push(t)}else if(e==="text"){let r=this._subtitleGroups;r||(r=this._subtitleGroups=[]),r.indexOf(t)===-1&&r.push(t)}}}get urlId(){return 0}set urlId(e){}get audioGroupIds(){return this.audioGroups?[this.audioGroupId]:void 0}get textGroupIds(){return this.subtitleGroups?[this.textGroupId]:void 0}get audioGroupId(){var e;return(e=this.audioGroups)==null?void 0:e[0]}get textGroupId(){var e;return(e=this.subtitleGroups)==null?void 0:e[0]}addFallback(){}}function Yd(n,e){return!e||!n?!1:n.indexOf(e)!==-1}function Vo(n,e){const t=e.startPTS;if(pe(t)){let r=0,i;e.sn>n.sn?(r=t-n.start,i=n):(r=n.start-t,i=e),i.duration!==r&&(i.duration=r)}else e.sn>n.sn?n.cc===e.cc&&n.minEndPTS?e.start=n.start+(n.minEndPTS-n.start):e.start=n.start+n.duration:e.start=Math.max(n.start-e.duration,0)}function Df(n,e,t,r,i,s){r-t<=0&&(B.warn("Fragment should have a positive duration",e),r=t+e.duration,s=i+e.duration);let a=t,l=r;const c=e.startPTS,d=e.endPTS;if(pe(c)){const E=Math.abs(c-t);pe(e.deltaPTS)?e.deltaPTS=Math.max(E,e.deltaPTS):e.deltaPTS=E,a=Math.max(t,c),t=Math.min(t,c),i=Math.min(i,e.startDTS),l=Math.min(r,d),r=Math.max(r,d),s=Math.max(s,e.endDTS)}const u=t-e.start;e.start!==0&&(e.start=t),e.duration=r-e.start,e.startPTS=t,e.maxStartPTS=a,e.startDTS=i,e.endPTS=r,e.minEndPTS=l,e.endDTS=s;const h=e.sn;if(!n||h<n.startSN||h>n.endSN)return 0;let g;const y=h-n.startSN,b=n.fragments;for(b[y]=e,g=y;g>0;g--)Vo(b[g],b[g-1]);for(g=y;g<b.length-1;g++)Vo(b[g],b[g+1]);return n.fragmentHint&&Vo(b[b.length-1],n.fragmentHint),n.PTSKnown=n.alignedSliding=!0,u}function Gx(n,e){let t=null;const r=n.fragments;for(let l=r.length-1;l>=0;l--){const c=r[l].initSegment;if(c){t=c;break}}n.fragmentHint&&delete n.fragmentHint.endPTS;let i=0,s;if(jx(n,e,(l,c)=>{l.relurl&&(i=l.cc-c.cc),pe(l.startPTS)&&pe(l.endPTS)&&(c.start=c.startPTS=l.startPTS,c.startDTS=l.startDTS,c.maxStartPTS=l.maxStartPTS,c.endPTS=l.endPTS,c.endDTS=l.endDTS,c.minEndPTS=l.minEndPTS,c.duration=l.endPTS-l.startPTS,c.duration&&(s=c),e.PTSKnown=e.alignedSliding=!0),c.elementaryStreams=l.elementaryStreams,c.loader=l.loader,c.stats=l.stats,l.initSegment&&(c.initSegment=l.initSegment,t=l.initSegment)}),t&&(e.fragmentHint?e.fragments.concat(e.fragmentHint):e.fragments).forEach(c=>{var d;c&&(!c.initSegment||c.initSegment.relurl===((d=t)==null?void 0:d.relurl))&&(c.initSegment=t)}),e.skippedSegments)if(e.deltaUpdateFailed=e.fragments.some(l=>!l),e.deltaUpdateFailed){B.warn("[level-helper] Previous playlist missing segments skipped in delta playlist");for(let l=e.skippedSegments;l--;)e.fragments.shift();e.startSN=e.fragments[0].sn,e.startCC=e.fragments[0].cc}else e.canSkipDateRanges&&(e.dateRanges=Kx(n.dateRanges,e.dateRanges,e.recentlyRemovedDateranges));const o=e.fragments;if(i){B.warn("discontinuity sliding from playlist, take drift into account");for(let l=0;l<o.length;l++)o[l].cc+=i}e.skippedSegments&&(e.startCC=e.fragments[0].cc),zx(n.partList,e.partList,(l,c)=>{c.elementaryStreams=l.elementaryStreams,c.stats=l.stats}),s?Df(e,s,s.startPTS,s.endPTS,s.startDTS,s.endDTS):Pf(n,e),o.length&&(e.totalduration=e.edge-o[0].start),e.driftStartTime=n.driftStartTime,e.driftStart=n.driftStart;const a=e.advancedDateTime;if(e.advanced&&a){const l=e.edge;e.driftStart||(e.driftStartTime=a,e.driftStart=l),e.driftEndTime=a,e.driftEnd=l}else e.driftEndTime=n.driftEndTime,e.driftEnd=n.driftEnd,e.advancedDateTime=n.advancedDateTime}function Kx(n,e,t){const r=ct({},n);return t&&t.forEach(i=>{delete r[i]}),Object.keys(e).forEach(i=>{const s=new pf(e[i].attr,r[i]);s.isValid?r[i]=s:B.warn(`Ignoring invalid Playlist Delta Update DATERANGE tag: "${JSON.stringify(e[i].attr)}"`)}),r}function zx(n,e,t){if(n&&e){let r=0;for(let i=0,s=n.length;i<=s;i++){const o=n[i],a=e[i+r];o&&a&&o.index===a.index&&o.fragment.sn===a.fragment.sn?t(o,a):r--}}}function jx(n,e,t){const r=e.skippedSegments,i=Math.max(n.startSN,e.startSN)-e.startSN,s=(n.fragmentHint?1:0)+(r?e.endSN:Math.min(n.endSN,e.endSN))-e.startSN,o=e.startSN-n.startSN,a=e.fragmentHint?e.fragments.concat(e.fragmentHint):e.fragments,l=n.fragmentHint?n.fragments.concat(n.fragmentHint):n.fragments;for(let c=i;c<=s;c++){const d=l[o+c];let u=a[c];r&&!u&&c<r&&(u=e.fragments[c]=d),d&&u&&t(d,u)}}function Pf(n,e){const t=e.startSN+e.skippedSegments-n.startSN,r=n.fragments;t<0||t>=r.length||Pa(e,r[t].start)}function Pa(n,e){if(e){const t=n.fragments;for(let r=n.skippedSegments;r<t.length;r++)t[r].start+=e;n.fragmentHint&&(n.fragmentHint.start+=e)}}function qx(n,e=1/0){let t=1e3*n.targetduration;if(n.updated){const r=n.fragments,i=4;if(r.length&&t*i>e){const s=r[r.length-1].duration*1e3;s<t&&(t=s)}}else t/=2;return Math.round(t)}function Vx(n,e,t){if(!(n!=null&&n.details))return null;const r=n.details;let i=r.fragments[e-r.startSN];return i||(i=r.fragmentHint,i&&i.sn===e)?i:e<r.startSN&&t&&t.sn===e?t:null}function Qd(n,e,t){var r;return n!=null&&n.details?Bf((r=n.details)==null?void 0:r.partList,e,t):null}function Bf(n,e,t){if(n)for(let r=n.length;r--;){const i=n[r];if(i.index===t&&i.fragment.sn===e)return i}return null}function Of(n){n.forEach((e,t)=>{const{details:r}=e;r!=null&&r.fragments&&r.fragments.forEach(i=>{i.level=t})})}function Us(n){switch(n.details){case $.FRAG_LOAD_TIMEOUT:case $.KEY_LOAD_TIMEOUT:case $.LEVEL_LOAD_TIMEOUT:case $.MANIFEST_LOAD_TIMEOUT:return!0}return!1}function Xd(n,e){const t=Us(e);return n.default[`${t?"timeout":"error"}Retry`]}function Tl(n,e){const t=n.backoff==="linear"?1:Math.pow(2,e);return Math.min(t*n.retryDelayMs,n.maxRetryDelayMs)}function Jd(n){return yt(yt({},n),{errorRetry:null,timeoutRetry:null})}function $s(n,e,t,r){if(!n)return!1;const i=r==null?void 0:r.code,s=e<n.maxNumRetry&&(Wx(i)||!!t);return n.shouldRetry?n.shouldRetry(n,e,t,r,s):s}function Wx(n){return n===0&&navigator.onLine===!1||!!n&&(n<400||n>499)}const Ff={search:function(n,e){let t=0,r=n.length-1,i=null,s=null;for(;t<=r;){i=(t+r)/2|0,s=n[i];const o=e(s);if(o>0)t=i+1;else if(o<0)r=i-1;else return s}return null}};function Yx(n,e,t){if(e===null||!Array.isArray(n)||!n.length||!pe(e))return null;const r=n[0].programDateTime;if(e<(r||0))return null;const i=n[n.length-1].endProgramDateTime;if(e>=(i||0))return null;t=t||0;for(let s=0;s<n.length;++s){const o=n[s];if(Qx(e,t,o))return o}return null}function Hs(n,e,t=0,r=0){let i=null;if(n){i=e[n.sn-e[0].sn+1]||null;const o=n.endDTS-t;o>0&&o<15e-7&&(t+=15e-7)}else t===0&&e[0].start===0&&(i=e[0]);if(i&&(!n||n.level===i.level)&&Ba(t,r,i)===0)return i;const s=Ff.search(e,Ba.bind(null,t,r));return s&&(s!==n||!i)?s:i}function Ba(n=0,e=0,t){if(t.start<=n&&t.start+t.duration>n)return 0;const r=Math.min(e,t.duration+(t.deltaPTS?t.deltaPTS:0));return t.start+t.duration-r<=n?1:t.start-r>n&&t.start?-1:0}function Qx(n,e,t){const r=Math.min(e,t.duration+(t.deltaPTS?t.deltaPTS:0))*1e3;return(t.endProgramDateTime||0)-r>n}function Xx(n,e){return Ff.search(n,t=>t.cc<e?1:t.cc>e?-1:0)}var At={DoNothing:0,SendEndCallback:1,SendAlternateToPenaltyBox:2,RemoveAlternatePermanently:3,InsertDiscontinuity:4,RetryRequest:5},$t={None:0,MoveAllAlternatesMatchingHost:1,MoveAllAlternatesMatchingHDCP:2,SwitchToSDR:4};class Jx{constructor(e){this.hls=void 0,this.playlistError=0,this.penalizedRenditions={},this.log=void 0,this.warn=void 0,this.error=void 0,this.hls=e,this.log=B.log.bind(B,"[info]:"),this.warn=B.warn.bind(B,"[warning]:"),this.error=B.error.bind(B,"[error]:"),this.registerListeners()}registerListeners(){const e=this.hls;e.on(T.ERROR,this.onError,this),e.on(T.MANIFEST_LOADING,this.onManifestLoading,this),e.on(T.LEVEL_UPDATED,this.onLevelUpdated,this)}unregisterListeners(){const e=this.hls;e&&(e.off(T.ERROR,this.onError,this),e.off(T.ERROR,this.onErrorOut,this),e.off(T.MANIFEST_LOADING,this.onManifestLoading,this),e.off(T.LEVEL_UPDATED,this.onLevelUpdated,this))}destroy(){this.unregisterListeners(),this.hls=null,this.penalizedRenditions={}}startLoad(e){}stopLoad(){this.playlistError=0}getVariantLevelIndex(e){return(e==null?void 0:e.type)===ke.MAIN?e.level:this.hls.loadLevel}onManifestLoading(){this.playlistError=0,this.penalizedRenditions={}}onLevelUpdated(){this.playlistError=0}onError(e,t){var r,i;if(t.fatal)return;const s=this.hls,o=t.context;switch(t.details){case $.FRAG_LOAD_ERROR:case $.FRAG_LOAD_TIMEOUT:case $.KEY_LOAD_ERROR:case $.KEY_LOAD_TIMEOUT:t.errorAction=this.getFragRetryOrSwitchAction(t);return;case $.FRAG_PARSING_ERROR:if((r=t.frag)!=null&&r.gap){t.errorAction={action:At.DoNothing,flags:$t.None};return}case $.FRAG_GAP:case $.FRAG_DECRYPT_ERROR:{t.errorAction=this.getFragRetryOrSwitchAction(t),t.errorAction.action=At.SendAlternateToPenaltyBox;return}case $.LEVEL_EMPTY_ERROR:case $.LEVEL_PARSING_ERROR:{var a,l;const c=t.parent===ke.MAIN?t.level:s.loadLevel;t.details===$.LEVEL_EMPTY_ERROR&&((a=t.context)!=null&&(l=a.levelDetails)!=null&&l.live)?t.errorAction=this.getPlaylistRetryOrSwitchAction(t,c):(t.levelRetry=!1,t.errorAction=this.getLevelSwitchAction(t,c))}return;case $.LEVEL_LOAD_ERROR:case $.LEVEL_LOAD_TIMEOUT:typeof(o==null?void 0:o.level)=="number"&&(t.errorAction=this.getPlaylistRetryOrSwitchAction(t,o.level));return;case $.AUDIO_TRACK_LOAD_ERROR:case $.AUDIO_TRACK_LOAD_TIMEOUT:case $.SUBTITLE_LOAD_ERROR:case $.SUBTITLE_TRACK_LOAD_TIMEOUT:if(o){const c=s.levels[s.loadLevel];if(c&&(o.type===Ue.AUDIO_TRACK&&c.hasAudioGroup(o.groupId)||o.type===Ue.SUBTITLE_TRACK&&c.hasSubtitleGroup(o.groupId))){t.errorAction=this.getPlaylistRetryOrSwitchAction(t,s.loadLevel),t.errorAction.action=At.SendAlternateToPenaltyBox,t.errorAction.flags=$t.MoveAllAlternatesMatchingHost;return}}return;case $.KEY_SYSTEM_STATUS_OUTPUT_RESTRICTED:{const c=s.levels[s.loadLevel],d=c==null?void 0:c.attrs["HDCP-LEVEL"];d?t.errorAction={action:At.SendAlternateToPenaltyBox,flags:$t.MoveAllAlternatesMatchingHDCP,hdcpLevel:d}:this.keySystemError(t)}return;case $.BUFFER_ADD_CODEC_ERROR:case $.REMUX_ALLOC_ERROR:case $.BUFFER_APPEND_ERROR:t.errorAction=this.getLevelSwitchAction(t,(i=t.level)!=null?i:s.loadLevel);return;case $.INTERNAL_EXCEPTION:case $.BUFFER_APPENDING_ERROR:case $.BUFFER_FULL_ERROR:case $.LEVEL_SWITCH_ERROR:case $.BUFFER_STALLED_ERROR:case $.BUFFER_SEEK_OVER_HOLE:case $.BUFFER_NUDGE_ON_STALL:t.errorAction={action:At.DoNothing,flags:$t.None};return}t.type===Le.KEY_SYSTEM_ERROR&&this.keySystemError(t)}keySystemError(e){const t=this.getVariantLevelIndex(e.frag);e.levelRetry=!1,e.errorAction=this.getLevelSwitchAction(e,t)}getPlaylistRetryOrSwitchAction(e,t){const r=this.hls,i=Xd(r.config.playlistLoadPolicy,e),s=this.playlistError++;if($s(i,s,Us(e),e.response))return{action:At.RetryRequest,flags:$t.None,retryConfig:i,retryCount:s};const a=this.getLevelSwitchAction(e,t);return i&&(a.retryConfig=i,a.retryCount=s),a}getFragRetryOrSwitchAction(e){const t=this.hls,r=this.getVariantLevelIndex(e.frag),i=t.levels[r],{fragLoadPolicy:s,keyLoadPolicy:o}=t.config,a=Xd(e.details.startsWith("key")?o:s,e),l=t.levels.reduce((d,u)=>d+u.fragmentError,0);if(i&&(e.details!==$.FRAG_GAP&&i.fragmentError++,$s(a,l,Us(e),e.response)))return{action:At.RetryRequest,flags:$t.None,retryConfig:a,retryCount:l};const c=this.getLevelSwitchAction(e,r);return a&&(c.retryConfig=a,c.retryCount=l),c}getLevelSwitchAction(e,t){const r=this.hls;t==null&&(t=r.loadLevel);const i=this.hls.levels[t];if(i){var s,o;const c=e.details;i.loadError++,c===$.BUFFER_APPEND_ERROR&&i.fragmentError++;let d=-1;const{levels:u,loadLevel:h,minAutoLevel:g,maxAutoLevel:y}=r;r.autoLevelEnabled||(r.loadLevel=-1);const b=(s=e.frag)==null?void 0:s.type,C=(b===ke.AUDIO&&c===$.FRAG_PARSING_ERROR||e.sourceBufferName==="audio"&&(c===$.BUFFER_ADD_CODEC_ERROR||c===$.BUFFER_APPEND_ERROR))&&u.some(({audioCodec:H})=>i.audioCodec!==H),R=e.sourceBufferName==="video"&&(c===$.BUFFER_ADD_CODEC_ERROR||c===$.BUFFER_APPEND_ERROR)&&u.some(({codecSet:H,audioCodec:U})=>i.codecSet!==H&&i.audioCodec===U),{type:_,groupId:P}=(o=e.context)!=null?o:{};for(let H=u.length;H--;){const U=(H+h)%u.length;if(U!==h&&U>=g&&U<=y&&u[U].loadError===0){var a,l;const z=u[U];if(c===$.FRAG_GAP&&e.frag){const Q=u[U].details;if(Q){const F=Hs(e.frag,Q.fragments,e.frag.start);if(F!=null&&F.gap)continue}}else{if(_===Ue.AUDIO_TRACK&&z.hasAudioGroup(P)||_===Ue.SUBTITLE_TRACK&&z.hasSubtitleGroup(P))continue;if(b===ke.AUDIO&&(a=i.audioGroups)!=null&&a.some(Q=>z.hasAudioGroup(Q))||b===ke.SUBTITLE&&(l=i.subtitleGroups)!=null&&l.some(Q=>z.hasSubtitleGroup(Q))||C&&i.audioCodec===z.audioCodec||!C&&i.audioCodec!==z.audioCodec||R&&i.codecSet===z.codecSet)continue}d=U;break}}if(d>-1&&r.loadLevel!==d)return e.levelRetry=!0,this.playlistError=0,{action:At.SendAlternateToPenaltyBox,flags:$t.None,nextAutoLevel:d}}return{action:At.SendAlternateToPenaltyBox,flags:$t.MoveAllAlternatesMatchingHost}}onErrorOut(e,t){var r;switch((r=t.errorAction)==null?void 0:r.action){case At.DoNothing:break;case At.SendAlternateToPenaltyBox:this.sendAlternateToPenaltyBox(t),!t.errorAction.resolved&&t.details!==$.FRAG_GAP?t.fatal=!0:/MediaSource readyState: ended/.test(t.error.message)&&(this.warn(`MediaSource ended after "${t.sourceBufferName}" sourceBuffer append error. Attempting to recover from media error.`),this.hls.recoverMediaError());break}if(t.fatal){this.hls.stopLoad();return}}sendAlternateToPenaltyBox(e){const t=this.hls,r=e.errorAction;if(!r)return;const{flags:i,hdcpLevel:s,nextAutoLevel:o}=r;switch(i){case $t.None:this.switchLevel(e,o);break;case $t.MoveAllAlternatesMatchingHDCP:s&&(t.maxHdcpLevel=Da[Da.indexOf(s)-1],r.resolved=!0),this.warn(`Restricting playback to HDCP-LEVEL of "${t.maxHdcpLevel}" or lower`);break}r.resolved||this.switchLevel(e,o)}switchLevel(e,t){t!==void 0&&e.errorAction&&(this.warn(`switching to level ${t} after ${e.details}`),this.hls.nextAutoLevel=t,e.errorAction.resolved=!0,this.hls.nextLoadLevel=this.hls.nextAutoLevel)}}class Cl{constructor(e,t){this.hls=void 0,this.timer=-1,this.requestScheduled=-1,this.canLoad=!1,this.log=void 0,this.warn=void 0,this.log=B.log.bind(B,`${t}:`),this.warn=B.warn.bind(B,`${t}:`),this.hls=e}destroy(){this.clearTimer(),this.hls=this.log=this.warn=null}clearTimer(){this.timer!==-1&&(self.clearTimeout(this.timer),this.timer=-1)}startLoad(){this.canLoad=!0,this.requestScheduled=-1,this.loadPlaylist()}stopLoad(){this.canLoad=!1,this.clearTimer()}switchParams(e,t){const r=t==null?void 0:t.renditionReports;if(r){let i=-1;for(let s=0;s<r.length;s++){const o=r[s];let a;try{a=new self.URL(o.URI,t.url).href}catch(l){B.warn(`Could not construct new URL for Rendition Report: ${l}`),a=o.URI||""}if(a===e){i=s;break}else a===e.substring(0,a.length)&&(i=s)}if(i!==-1){const s=r[i],o=parseInt(s["LAST-MSN"])||(t==null?void 0:t.lastPartSn);let a=parseInt(s["LAST-PART"])||(t==null?void 0:t.lastPartIndex);if(this.hls.config.lowLatencyMode){const l=Math.min(t.age-t.partTarget,t.targetduration);a>=0&&l>t.partTarget&&(a+=1)}return new Wd(o,a>=0?a:void 0,Si.No)}}}loadPlaylist(e){this.requestScheduled===-1&&(this.requestScheduled=self.performance.now())}shouldLoadPlaylist(e){return this.canLoad&&!!e&&!!e.url&&(!e.details||e.details.live)}shouldReloadPlaylist(e){return this.timer===-1&&this.requestScheduled===-1&&this.shouldLoadPlaylist(e)}playlistLoaded(e,t,r){const{details:i,stats:s}=t,o=self.performance.now(),a=s.loading.first?Math.max(0,o-s.loading.first):0;if(i.advancedDateTime=Date.now()-a,i.live||r!=null&&r.live){if(i.reloaded(r),r&&this.log(`live playlist ${e} ${i.advanced?"REFRESHED "+i.lastPartSn+"-"+i.lastPartIndex:i.updated?"UPDATED":"MISSED"}`),r&&i.fragments.length>0&&Gx(r,i),!this.canLoad||!i.live)return;let l,c,d;if(i.canBlockReload&&i.endSN&&i.advanced){const E=this.hls.config.lowLatencyMode,C=i.lastPartSn,w=i.endSN,R=i.lastPartIndex,_=R!==-1,P=C===w,H=E?0:R;_?(c=P?w+1:C,d=P?H:R+1):c=w+1;const U=i.age,z=U+i.ageHeader;let Q=Math.min(z-i.partTarget,i.targetduration*1.5);if(Q>0){if(r&&Q>r.tuneInGoal)this.warn(`CDN Tune-in goal increased from: ${r.tuneInGoal} to: ${Q} with playlist age: ${i.age}`),Q=0;else{const F=Math.floor(Q/i.targetduration);if(c+=F,d!==void 0){const Y=Math.round(Q%i.targetduration/i.partTarget);d+=Y}this.log(`CDN Tune-in age: ${i.ageHeader}s last advanced ${U.toFixed(2)}s goal: ${Q} skip sn ${F} to part ${d}`)}i.tuneInGoal=Q}if(l=this.getDeliveryDirectives(i,t.deliveryDirectives,c,d),E||!P){this.loadPlaylist(l);return}}else(i.canBlockReload||i.canSkipUntil)&&(l=this.getDeliveryDirectives(i,t.deliveryDirectives,c,d));const u=this.hls.mainForwardBufferInfo,h=u?u.end-u.len:0,g=(i.edge-h)*1e3,y=qx(i,g);i.updated&&o>this.requestScheduled+y&&(this.requestScheduled=s.loading.start),c!==void 0&&i.canBlockReload?this.requestScheduled=s.loading.first+y-(i.partTarget*1e3||1e3):this.requestScheduled===-1||this.requestScheduled+y<o?this.requestScheduled=o:this.requestScheduled-o<=0&&(this.requestScheduled+=y);let b=this.requestScheduled-o;b=Math.max(0,b),this.log(`reload live playlist ${e} in ${Math.round(b)} ms`),this.timer=self.setTimeout(()=>this.loadPlaylist(l),b)}else this.clearTimer()}getDeliveryDirectives(e,t,r,i){let s=Hx(e,r);return t!=null&&t.skip&&e.deltaUpdateFailed&&(r=t.msn,i=t.part,s=Si.No),new Wd(r,i,s)}checkRetry(e){const t=e.details,r=Us(e),i=e.errorAction,{action:s,retryCount:o=0,retryConfig:a}=i||{},l=!!i&&!!a&&(s===At.RetryRequest||!i.resolved&&s===At.SendAlternateToPenaltyBox);if(l){var c;if(this.requestScheduled=-1,o>=a.maxNumRetry)return!1;if(r&&(c=e.context)!=null&&c.deliveryDirectives)this.warn(`Retrying playlist loading ${o+1}/${a.maxNumRetry} after "${t}" without delivery-directives`),this.loadPlaylist();else{const d=Tl(a,o);this.timer=self.setTimeout(()=>this.loadPlaylist(),d),this.warn(`Retrying playlist loading ${o+1}/${a.maxNumRetry} after "${t}" in ${d}ms`)}e.levelRetry=!0,i.resolved=!0}return l}}class or{constructor(e,t=0,r=0){this.halfLife=void 0,this.alpha_=void 0,this.estimate_=void 0,this.totalWeight_=void 0,this.halfLife=e,this.alpha_=e?Math.exp(Math.log(.5)/e):0,this.estimate_=t,this.totalWeight_=r}sample(e,t){const r=Math.pow(this.alpha_,e);this.estimate_=t*(1-r)+r*this.estimate_,this.totalWeight_+=e}getTotalWeight(){return this.totalWeight_}getEstimate(){if(this.alpha_){const e=1-Math.pow(this.alpha_,this.totalWeight_);if(e)return this.estimate_/e}return this.estimate_}}class Zx{constructor(e,t,r,i=100){this.defaultEstimate_=void 0,this.minWeight_=void 0,this.minDelayMs_=void 0,this.slow_=void 0,this.fast_=void 0,this.defaultTTFB_=void 0,this.ttfb_=void 0,this.defaultEstimate_=r,this.minWeight_=.001,this.minDelayMs_=50,this.slow_=new or(e),this.fast_=new or(t),this.defaultTTFB_=i,this.ttfb_=new or(e)}update(e,t){const{slow_:r,fast_:i,ttfb_:s}=this;r.halfLife!==e&&(this.slow_=new or(e,r.getEstimate(),r.getTotalWeight())),i.halfLife!==t&&(this.fast_=new or(t,i.getEstimate(),i.getTotalWeight())),s.halfLife!==e&&(this.ttfb_=new or(e,s.getEstimate(),s.getTotalWeight()))}sample(e,t){e=Math.max(e,this.minDelayMs_);const r=8*t,i=e/1e3,s=r/i;this.fast_.sample(i,s),this.slow_.sample(i,s)}sampleTTFB(e){const t=e/1e3,r=Math.sqrt(2)*Math.exp(-Math.pow(t,2)/2);this.ttfb_.sample(r,Math.max(e,5))}canEstimate(){return this.fast_.getTotalWeight()>=this.minWeight_}getEstimate(){return this.canEstimate()?Math.min(this.fast_.getEstimate(),this.slow_.getEstimate()):this.defaultEstimate_}getEstimateTTFB(){return this.ttfb_.getTotalWeight()>=this.minWeight_?this.ttfb_.getEstimate():this.defaultTTFB_}destroy(){}}const Mf={supported:!0,configurations:[],decodingInfoResults:[{supported:!0,powerEfficient:!0,smooth:!0}]},Zd={};function e1(n,e,t,r,i,s){const o=n.audioCodec?n.audioGroups:null,a=s==null?void 0:s.audioCodec,l=s==null?void 0:s.channels,c=l?parseInt(l):a?1/0:2;let d=null;if(o!=null&&o.length)try{o.length===1&&o[0]?d=e.groups[o[0]].channels:d=o.reduce((u,h)=>{if(h){const g=e.groups[h];if(!g)throw new Error(`Audio track group ${h} not found`);Object.keys(g.channels).forEach(y=>{u[y]=(u[y]||0)+g.channels[y]})}return u},{2:0})}catch{return!0}return n.videoCodec!==void 0&&(n.width>1920&&n.height>1088||n.height>1920&&n.width>1088||n.frameRate>Math.max(r,30)||n.videoRange!=="SDR"&&n.videoRange!==t||n.bitrate>Math.max(i,8e6))||!!d&&pe(c)&&Object.keys(d).some(u=>parseInt(u)>c)}function t1(n,e,t){const r=n.videoCodec,i=n.audioCodec;if(!r||!i||!t)return Promise.resolve(Mf);const s={width:n.width,height:n.height,bitrate:Math.ceil(Math.max(n.bitrate*.9,n.averageBitrate)),framerate:n.frameRate||30},o=n.videoRange;o!=="SDR"&&(s.transferFunction=o.toLowerCase());const a=r.split(",").map(l=>({type:"media-source",video:yt(yt({},s),{},{contentType:Oi(l,"video")})}));return i&&n.audioGroups&&n.audioGroups.forEach(l=>{var c;l&&((c=e.groups[l])==null||c.tracks.forEach(d=>{if(d.groupId===l){const u=d.channels||"",h=parseFloat(u);pe(h)&&h>2&&a.push.apply(a,i.split(",").map(g=>({type:"media-source",audio:{contentType:Oi(g,"audio"),channels:""+h}})))}}))}),Promise.all(a.map(l=>{const c=n1(l);return Zd[c]||(Zd[c]=t.decodingInfo(l))})).then(l=>({supported:!l.some(c=>!c.supported),configurations:a,decodingInfoResults:l})).catch(l=>({supported:!1,configurations:a,decodingInfoResults:[],error:l}))}function n1(n){const{audio:e,video:t}=n,r=t||e;if(r){const i=r.contentType.split('"')[1];if(t)return`r${t.height}x${t.width}f${Math.ceil(t.framerate)}${t.transferFunction||"sd"}_${i}_${Math.ceil(t.bitrate/1e5)}`;if(e)return`c${e.channels}${e.spatialRendering?"s":"n"}_${i}`}return""}function r1(){if(typeof matchMedia=="function"){const n=matchMedia("(dynamic-range: high)"),e=matchMedia("bad query");if(n.media!==e.media)return n.matches===!0}return!1}function i1(n,e){let t=!1,r=[];return n&&(t=n!=="SDR",r=[n]),e&&(r=e.allowedVideoRanges||Ns.slice(0),t=e.preferHDR!==void 0?e.preferHDR:r1(),t?r=r.filter(i=>i!=="SDR"):r=["SDR"]),{preferHDR:t,allowedVideoRanges:r}}function s1(n,e,t,r,i){const s=Object.keys(n),o=r==null?void 0:r.channels,a=r==null?void 0:r.audioCodec,l=o&&parseInt(o)===2;let c=!0,d=!1,u=1/0,h=1/0,g=1/0,y=0,b=[];const{preferHDR:E,allowedVideoRanges:C}=i1(e,i);for(let P=s.length;P--;){const H=n[s[P]];c=H.channels[2]>0,u=Math.min(u,H.minHeight),h=Math.min(h,H.minFramerate),g=Math.min(g,H.minBitrate);const U=C.filter(z=>H.videoRanges[z]>0);U.length>0&&(d=!0,b=U)}u=pe(u)?u:0,h=pe(h)?h:0;const w=Math.max(1080,u),R=Math.max(30,h);return g=pe(g)?g:t,t=Math.max(g,t),d||(e=void 0,b=[]),{codecSet:s.reduce((P,H)=>{const U=n[H];if(H===P)return P;if(U.minBitrate>t)return fn(H,`min bitrate of ${U.minBitrate} > current estimate of ${t}`),P;if(!U.hasDefaultAudio)return fn(H,"no renditions with default or auto-select sound found"),P;if(a&&H.indexOf(a.substring(0,4))%5!==0)return fn(H,`audio codec preference "${a}" not found`),P;if(o&&!l){if(!U.channels[o])return fn(H,`no renditions with ${o} channel sound found (channels options: ${Object.keys(U.channels)})`),P}else if((!a||l)&&c&&U.channels[2]===0)return fn(H,"no renditions with stereo sound found"),P;return U.minHeight>w?(fn(H,`min resolution of ${U.minHeight} > maximum of ${w}`),P):U.minFramerate>R?(fn(H,`min framerate of ${U.minFramerate} > maximum of ${R}`),P):b.some(z=>U.videoRanges[z]>0)?U.maxScore<y?(fn(H,`max score of ${U.maxScore} < selected max of ${y}`),P):P&&(Fs(H)>=Fs(P)||U.fragmentError>n[P].fragmentError)?P:(y=U.maxScore,H):(fn(H,`no variants with VIDEO-RANGE of ${JSON.stringify(b)} found`),P)},void 0),videoRanges:b,preferHDR:E,minFramerate:h,minBitrate:g}}function fn(n,e){B.log(`[abr] start candidates with "${n}" ignored because ${e}`)}function o1(n){return n.reduce((e,t)=>{let r=e.groups[t.groupId];r||(r=e.groups[t.groupId]={tracks:[],channels:{2:0},hasDefault:!1,hasAutoSelect:!1}),r.tracks.push(t);const i=t.channels||"2";return r.channels[i]=(r.channels[i]||0)+1,r.hasDefault=r.hasDefault||t.default,r.hasAutoSelect=r.hasAutoSelect||t.autoselect,r.hasDefault&&(e.hasDefaultAudio=!0),r.hasAutoSelect&&(e.hasAutoSelectAudio=!0),e},{hasDefaultAudio:!1,hasAutoSelectAudio:!1,groups:{}})}function a1(n,e,t,r){return n.slice(t,r+1).reduce((i,s)=>{if(!s.codecSet)return i;const o=s.audioGroups;let a=i[s.codecSet];a||(i[s.codecSet]=a={minBitrate:1/0,minHeight:1/0,minFramerate:1/0,maxScore:0,videoRanges:{SDR:0},channels:{2:0},hasDefaultAudio:!o,fragmentError:0}),a.minBitrate=Math.min(a.minBitrate,s.bitrate);const l=Math.min(s.height,s.width);return a.minHeight=Math.min(a.minHeight,l),a.minFramerate=Math.min(a.minFramerate,s.frameRate),a.maxScore=Math.max(a.maxScore,s.score),a.fragmentError+=s.fragmentError,a.videoRanges[s.videoRange]=(a.videoRanges[s.videoRange]||0)+1,o&&o.forEach(c=>{if(!c)return;const d=e.groups[c];a.hasDefaultAudio=a.hasDefaultAudio||e.hasDefaultAudio?d.hasDefault:d.hasAutoSelect||!e.hasDefaultAudio&&!e.hasAutoSelectAudio,Object.keys(d.channels).forEach(u=>{a.channels[u]=(a.channels[u]||0)+d.channels[u]})}),i},{})}function on(n,e,t){if("attrs"in n){const r=e.indexOf(n);if(r!==-1)return r}for(let r=0;r<e.length;r++){const i=e[r];if(br(n,i,t))return r}return-1}function br(n,e,t){const{groupId:r,name:i,lang:s,assocLang:o,characteristics:a,default:l}=n,c=n.forced;return(r===void 0||e.groupId===r)&&(i===void 0||e.name===i)&&(s===void 0||e.lang===s)&&(s===void 0||e.assocLang===o)&&(l===void 0||e.default===l)&&(c===void 0||e.forced===c)&&(a===void 0||l1(a,e.characteristics))&&(t===void 0||t(n,e))}function l1(n,e=""){const t=n.split(","),r=e.split(",");return t.length===r.length&&!t.some(i=>r.indexOf(i)===-1)}function ar(n,e){const{audioCodec:t,channels:r}=n;return(t===void 0||(e.audioCodec||"").substring(0,4)===t.substring(0,4))&&(r===void 0||r===(e.channels||"2"))}function c1(n,e,t,r,i){const s=e[r],a=e.reduce((h,g,y)=>{const b=g.uri;return(h[b]||(h[b]=[])).push(y),h},{})[s.uri];a.length>1&&(r=Math.max.apply(Math,a));const l=s.videoRange,c=s.frameRate,d=s.codecSet.substring(0,4),u=eu(e,r,h=>{if(h.videoRange!==l||h.frameRate!==c||h.codecSet.substring(0,4)!==d)return!1;const g=h.audioGroups,y=t.filter(b=>!g||g.indexOf(b.groupId)!==-1);return on(n,y,i)>-1});return u>-1?u:eu(e,r,h=>{const g=h.audioGroups,y=t.filter(b=>!g||g.indexOf(b.groupId)!==-1);return on(n,y,i)>-1})}function eu(n,e,t){for(let r=e;r;r--)if(t(n[r]))return r;for(let r=e+1;r<n.length;r++)if(t(n[r]))return r;return-1}class d1{constructor(e){this.hls=void 0,this.lastLevelLoadSec=0,this.lastLoadedFragLevel=-1,this.firstSelection=-1,this._nextAutoLevel=-1,this.nextAutoLevelKey="",this.audioTracksByGroup=null,this.codecTiers=null,this.timer=-1,this.fragCurrent=null,this.partCurrent=null,this.bitrateTestDelay=0,this.bwEstimator=void 0,this._abandonRulesCheck=()=>{const{fragCurrent:t,partCurrent:r,hls:i}=this,{autoLevelEnabled:s,media:o}=i;if(!t||!o)return;const a=performance.now(),l=r?r.stats:t.stats,c=r?r.duration:t.duration,d=a-l.loading.start,u=i.minAutoLevel;if(l.aborted||l.loaded&&l.loaded===l.total||t.level<=u){this.clearTimer(),this._nextAutoLevel=-1;return}if(!s||o.paused||!o.playbackRate||!o.readyState)return;const h=i.mainForwardBufferInfo;if(h===null)return;const g=this.bwEstimator.getEstimateTTFB(),y=Math.abs(o.playbackRate);if(d<=Math.max(g,1e3*(c/(y*2))))return;const b=h.len/y,E=l.loading.first?l.loading.first-l.loading.start:-1,C=l.loaded&&E>-1,w=this.getBwEstimate(),R=i.levels,_=R[t.level],P=l.total||Math.max(l.loaded,Math.round(c*_.averageBitrate/8));let H=C?d-E:d;H<1&&C&&(H=Math.min(d,l.loaded*8/w));const U=C?l.loaded*1e3/H:0,z=U?(P-l.loaded)/U:P*8/w+g/1e3;if(z<=b)return;const Q=U?U*8:w;let F=Number.POSITIVE_INFINITY,Y;for(Y=t.level-1;Y>u;Y--){const te=R[Y].maxBitrate;if(F=this.getTimeToLoadFrag(g/1e3,Q,c*te,!R[Y].details),F<b)break}if(F>=z||F>c*10)return;i.nextLoadLevel=i.nextAutoLevel=Y,C?this.bwEstimator.sample(d-Math.min(g,E),l.loaded):this.bwEstimator.sampleTTFB(d);const Ae=R[Y].maxBitrate;this.getBwEstimate()*this.hls.config.abrBandWidthUpFactor>Ae&&this.resetEstimator(Ae),this.clearTimer(),B.warn(`[abr] Fragment ${t.sn}${r?" part "+r.index:""} of level ${t.level} is loading too slowly;
      Time to underbuffer: ${b.toFixed(3)} s
      Estimated load time for current fragment: ${z.toFixed(3)} s
      Estimated load time for down switch fragment: ${F.toFixed(3)} s
      TTFB estimate: ${E|0} ms
      Current BW estimate: ${pe(w)?w|0:"Unknown"} bps
      New BW estimate: ${this.getBwEstimate()|0} bps
      Switching to level ${Y} @ ${Ae|0} bps`),i.trigger(T.FRAG_LOAD_EMERGENCY_ABORTED,{frag:t,part:r,stats:l})},this.hls=e,this.bwEstimator=this.initEstimator(),this.registerListeners()}resetEstimator(e){e&&(B.log(`setting initial bwe to ${e}`),this.hls.config.abrEwmaDefaultEstimate=e),this.firstSelection=-1,this.bwEstimator=this.initEstimator()}initEstimator(){const e=this.hls.config;return new Zx(e.abrEwmaSlowVoD,e.abrEwmaFastVoD,e.abrEwmaDefaultEstimate)}registerListeners(){const{hls:e}=this;e.on(T.MANIFEST_LOADING,this.onManifestLoading,this),e.on(T.FRAG_LOADING,this.onFragLoading,this),e.on(T.FRAG_LOADED,this.onFragLoaded,this),e.on(T.FRAG_BUFFERED,this.onFragBuffered,this),e.on(T.LEVEL_SWITCHING,this.onLevelSwitching,this),e.on(T.LEVEL_LOADED,this.onLevelLoaded,this),e.on(T.LEVELS_UPDATED,this.onLevelsUpdated,this),e.on(T.MAX_AUTO_LEVEL_UPDATED,this.onMaxAutoLevelUpdated,this),e.on(T.ERROR,this.onError,this)}unregisterListeners(){const{hls:e}=this;e&&(e.off(T.MANIFEST_LOADING,this.onManifestLoading,this),e.off(T.FRAG_LOADING,this.onFragLoading,this),e.off(T.FRAG_LOADED,this.onFragLoaded,this),e.off(T.FRAG_BUFFERED,this.onFragBuffered,this),e.off(T.LEVEL_SWITCHING,this.onLevelSwitching,this),e.off(T.LEVEL_LOADED,this.onLevelLoaded,this),e.off(T.LEVELS_UPDATED,this.onLevelsUpdated,this),e.off(T.MAX_AUTO_LEVEL_UPDATED,this.onMaxAutoLevelUpdated,this),e.off(T.ERROR,this.onError,this))}destroy(){this.unregisterListeners(),this.clearTimer(),this.hls=this._abandonRulesCheck=null,this.fragCurrent=this.partCurrent=null}onManifestLoading(e,t){this.lastLoadedFragLevel=-1,this.firstSelection=-1,this.lastLevelLoadSec=0,this.fragCurrent=this.partCurrent=null,this.onLevelsUpdated(),this.clearTimer()}onLevelsUpdated(){this.lastLoadedFragLevel>-1&&this.fragCurrent&&(this.lastLoadedFragLevel=this.fragCurrent.level),this._nextAutoLevel=-1,this.onMaxAutoLevelUpdated(),this.codecTiers=null,this.audioTracksByGroup=null}onMaxAutoLevelUpdated(){this.firstSelection=-1,this.nextAutoLevelKey=""}onFragLoading(e,t){const r=t.frag;if(!this.ignoreFragment(r)){if(!r.bitrateTest){var i;this.fragCurrent=r,this.partCurrent=(i=t.part)!=null?i:null}this.clearTimer(),this.timer=self.setInterval(this._abandonRulesCheck,100)}}onLevelSwitching(e,t){this.clearTimer()}onError(e,t){if(!t.fatal)switch(t.details){case $.BUFFER_ADD_CODEC_ERROR:case $.BUFFER_APPEND_ERROR:this.lastLoadedFragLevel=-1,this.firstSelection=-1;break;case $.FRAG_LOAD_TIMEOUT:{const r=t.frag,{fragCurrent:i,partCurrent:s}=this;if(r&&i&&r.sn===i.sn&&r.level===i.level){const o=performance.now(),a=s?s.stats:r.stats,l=o-a.loading.start,c=a.loading.first?a.loading.first-a.loading.start:-1;if(a.loaded&&c>-1){const u=this.bwEstimator.getEstimateTTFB();this.bwEstimator.sample(l-Math.min(u,c),a.loaded)}else this.bwEstimator.sampleTTFB(l)}break}}}getTimeToLoadFrag(e,t,r,i){const s=e+r/t,o=i?this.lastLevelLoadSec:0;return s+o}onLevelLoaded(e,t){const r=this.hls.config,{loading:i}=t.stats,s=i.end-i.start;pe(s)&&(this.lastLevelLoadSec=s/1e3),t.details.live?this.bwEstimator.update(r.abrEwmaSlowLive,r.abrEwmaFastLive):this.bwEstimator.update(r.abrEwmaSlowVoD,r.abrEwmaFastVoD)}onFragLoaded(e,{frag:t,part:r}){const i=r?r.stats:t.stats;if(t.type===ke.MAIN&&this.bwEstimator.sampleTTFB(i.loading.first-i.loading.start),!this.ignoreFragment(t)){if(this.clearTimer(),t.level===this._nextAutoLevel&&(this._nextAutoLevel=-1),this.firstSelection=-1,this.hls.config.abrMaxWithRealBitrate){const s=r?r.duration:t.duration,o=this.hls.levels[t.level],a=(o.loaded?o.loaded.bytes:0)+i.loaded,l=(o.loaded?o.loaded.duration:0)+s;o.loaded={bytes:a,duration:l},o.realBitrate=Math.round(8*a/l)}if(t.bitrateTest){const s={stats:i,frag:t,part:r,id:t.type};this.onFragBuffered(T.FRAG_BUFFERED,s),t.bitrateTest=!1}else this.lastLoadedFragLevel=t.level}}onFragBuffered(e,t){const{frag:r,part:i}=t,s=i!=null&&i.stats.loaded?i.stats:r.stats;if(s.aborted||this.ignoreFragment(r))return;const o=s.parsing.end-s.loading.start-Math.min(s.loading.first-s.loading.start,this.bwEstimator.getEstimateTTFB());this.bwEstimator.sample(o,s.loaded),s.bwEstimate=this.getBwEstimate(),r.bitrateTest?this.bitrateTestDelay=o/1e3:this.bitrateTestDelay=0}ignoreFragment(e){return e.type!==ke.MAIN||e.sn==="initSegment"}clearTimer(){this.timer>-1&&(self.clearInterval(this.timer),this.timer=-1)}get firstAutoLevel(){const{maxAutoLevel:e,minAutoLevel:t}=this.hls,r=this.getBwEstimate(),i=this.hls.config.maxStarvationDelay,s=this.findBestLevel(r,t,e,0,i,1,1);if(s>-1)return s;const o=this.hls.firstLevel,a=Math.min(Math.max(o,t),e);return B.warn(`[abr] Could not find best starting auto level. Defaulting to first in playlist ${o} clamped to ${a}`),a}get forcedAutoLevel(){return this.nextAutoLevelKey?-1:this._nextAutoLevel}get nextAutoLevel(){const e=this.forcedAutoLevel,r=this.bwEstimator.canEstimate(),i=this.lastLoadedFragLevel>-1;if(e!==-1&&(!r||!i||this.nextAutoLevelKey===this.getAutoLevelKey()))return e;const s=r&&i?this.getNextABRAutoLevel():this.firstAutoLevel;if(e!==-1){const o=this.hls.levels;if(o.length>Math.max(e,s)&&o[e].loadError<=o[s].loadError)return e}return this._nextAutoLevel=s,this.nextAutoLevelKey=this.getAutoLevelKey(),s}getAutoLevelKey(){return`${this.getBwEstimate()}_${this.getStarvationDelay().toFixed(2)}`}getNextABRAutoLevel(){const{fragCurrent:e,partCurrent:t,hls:r}=this,{maxAutoLevel:i,config:s,minAutoLevel:o}=r,a=t?t.duration:e?e.duration:0,l=this.getBwEstimate(),c=this.getStarvationDelay();let d=s.abrBandWidthFactor,u=s.abrBandWidthUpFactor;if(c){const E=this.findBestLevel(l,o,i,c,0,d,u);if(E>=0)return E}let h=a?Math.min(a,s.maxStarvationDelay):s.maxStarvationDelay;if(!c){const E=this.bitrateTestDelay;E&&(h=(a?Math.min(a,s.maxLoadingDelay):s.maxLoadingDelay)-E,B.info(`[abr] bitrate test took ${Math.round(1e3*E)}ms, set first fragment max fetchDuration to ${Math.round(1e3*h)} ms`),d=u=1)}const g=this.findBestLevel(l,o,i,c,h,d,u);if(B.info(`[abr] ${c?"rebuffering expected":"buffer is empty"}, optimal quality level ${g}`),g>-1)return g;const y=r.levels[o],b=r.levels[r.loadLevel];return(y==null?void 0:y.bitrate)<(b==null?void 0:b.bitrate)?o:r.loadLevel}getStarvationDelay(){const e=this.hls,t=e.media;if(!t)return 1/0;const r=t&&t.playbackRate!==0?Math.abs(t.playbackRate):1,i=e.mainForwardBufferInfo;return(i?i.len:0)/r}getBwEstimate(){return this.bwEstimator.canEstimate()?this.bwEstimator.getEstimate():this.hls.config.abrEwmaDefaultEstimate}findBestLevel(e,t,r,i,s,o,a){var l;const c=i+s,d=this.lastLoadedFragLevel,u=d===-1?this.hls.firstLevel:d,{fragCurrent:h,partCurrent:g}=this,{levels:y,allAudioTracks:b,loadLevel:E,config:C}=this.hls;if(y.length===1)return 0;const w=y[u],R=!!(w!=null&&(l=w.details)!=null&&l.live),_=E===-1||d===-1;let P,H="SDR",U=(w==null?void 0:w.frameRate)||0;const{audioPreference:z,videoPreference:Q}=C,F=this.audioTracksByGroup||(this.audioTracksByGroup=o1(b));if(_){if(this.firstSelection!==-1)return this.firstSelection;const ve=this.codecTiers||(this.codecTiers=a1(y,F,t,r)),ne=s1(ve,H,e,z,Q),{codecSet:ye,videoRanges:me,minFramerate:q,minBitrate:ae,preferHDR:Re}=ne;P=ye,H=Re?me[me.length-1]:me[0],U=q,e=Math.max(e,ae),B.log(`[abr] picked start tier ${JSON.stringify(ne)}`)}else P=w==null?void 0:w.codecSet,H=w==null?void 0:w.videoRange;const Y=g?g.duration:h?h.duration:0,Ae=this.bwEstimator.getEstimateTTFB()/1e3,te=[];for(let ve=r;ve>=t;ve--){var Se;const ne=y[ve],ye=ve>u;if(!ne)continue;if(C.useMediaCapabilities&&!ne.supportedResult&&!ne.supportedPromise){const ze=navigator.mediaCapabilities;typeof(ze==null?void 0:ze.decodingInfo)=="function"&&e1(ne,F,H,U,e,z)?(ne.supportedPromise=t1(ne,F,ze),ne.supportedPromise.then(Je=>{if(!this.hls)return;ne.supportedResult=Je;const Pe=this.hls.levels,K=Pe.indexOf(ne);Je.error?B.warn(`[abr] MediaCapabilities decodingInfo error: "${Je.error}" for level ${K} ${JSON.stringify(Je)}`):Je.supported||(B.warn(`[abr] Unsupported MediaCapabilities decodingInfo result for level ${K} ${JSON.stringify(Je)}`),K>-1&&Pe.length>1&&(B.log(`[abr] Removing unsupported level ${K}`),this.hls.removeLevel(K)))})):ne.supportedResult=Mf}if(P&&ne.codecSet!==P||H&&ne.videoRange!==H||ye&&U>ne.frameRate||!ye&&U>0&&U<ne.frameRate||ne.supportedResult&&!((Se=ne.supportedResult.decodingInfoResults)!=null&&Se[0].smooth)){te.push(ve);continue}const me=ne.details,q=(g?me==null?void 0:me.partTarget:me==null?void 0:me.averagetargetduration)||Y;let ae;ye?ae=a*e:ae=o*e;const Re=Y&&i>=Y*2&&s===0?y[ve].averageBitrate:y[ve].maxBitrate,xe=this.getTimeToLoadFrag(Ae,ae,Re*q,me===void 0);if(ae>=Re&&(ve===d||ne.loadError===0&&ne.fragmentError===0)&&(xe<=Ae||!pe(xe)||R&&!this.bitrateTestDelay||xe<c)){const ze=this.forcedAutoLevel;return ve!==E&&(ze===-1||ze!==E)&&(te.length&&B.trace(`[abr] Skipped level(s) ${te.join(",")} of ${r} max with CODECS and VIDEO-RANGE:"${y[te[0]].codecs}" ${y[te[0]].videoRange}; not compatible with "${w.codecs}" ${H}`),B.info(`[abr] switch candidate:${u}->${ve} adjustedbw(${Math.round(ae)})-bitrate=${Math.round(ae-Re)} ttfb:${Ae.toFixed(1)} avgDuration:${q.toFixed(1)} maxFetchDuration:${c.toFixed(1)} fetchDuration:${xe.toFixed(1)} firstSelection:${_} codecSet:${P} videoRange:${H} hls.loadLevel:${E}`)),_&&(this.firstSelection=ve),ve}}return-1}set nextAutoLevel(e){const{maxAutoLevel:t,minAutoLevel:r}=this.hls,i=Math.min(Math.max(e,r),t);this._nextAutoLevel!==i&&(this.nextAutoLevelKey="",this._nextAutoLevel=i)}}class u1{constructor(){this._boundTick=void 0,this._tickTimer=null,this._tickInterval=null,this._tickCallCount=0,this._boundTick=this.tick.bind(this)}destroy(){this.onHandlerDestroying(),this.onHandlerDestroyed()}onHandlerDestroying(){this.clearNextTick(),this.clearInterval()}onHandlerDestroyed(){}hasInterval(){return!!this._tickInterval}hasNextTick(){return!!this._tickTimer}setInterval(e){return this._tickInterval?!1:(this._tickCallCount=0,this._tickInterval=self.setInterval(this._boundTick,e),!0)}clearInterval(){return this._tickInterval?(self.clearInterval(this._tickInterval),this._tickInterval=null,!0):!1}clearNextTick(){return this._tickTimer?(self.clearTimeout(this._tickTimer),this._tickTimer=null,!0):!1}tick(){this._tickCallCount++,this._tickCallCount===1&&(this.doTick(),this._tickCallCount>1&&this.tickImmediate(),this._tickCallCount=0)}tickImmediate(){this.clearNextTick(),this._tickTimer=self.setTimeout(this._boundTick,0)}doTick(){}}var mt={NOT_LOADED:"NOT_LOADED",APPENDING:"APPENDING",PARTIAL:"PARTIAL",OK:"OK"};class h1{constructor(e){this.activePartLists=Object.create(null),this.endListFragments=Object.create(null),this.fragments=Object.create(null),this.timeRanges=Object.create(null),this.bufferPadding=.2,this.hls=void 0,this.hasGaps=!1,this.hls=e,this._registerListeners()}_registerListeners(){const{hls:e}=this;e.on(T.BUFFER_APPENDED,this.onBufferAppended,this),e.on(T.FRAG_BUFFERED,this.onFragBuffered,this),e.on(T.FRAG_LOADED,this.onFragLoaded,this)}_unregisterListeners(){const{hls:e}=this;e.off(T.BUFFER_APPENDED,this.onBufferAppended,this),e.off(T.FRAG_BUFFERED,this.onFragBuffered,this),e.off(T.FRAG_LOADED,this.onFragLoaded,this)}destroy(){this._unregisterListeners(),this.fragments=this.activePartLists=this.endListFragments=this.timeRanges=null}getAppendedFrag(e,t){const r=this.activePartLists[t];if(r)for(let i=r.length;i--;){const s=r[i];if(!s)break;const o=s.end;if(s.start<=e&&o!==null&&e<=o)return s}return this.getBufferedFrag(e,t)}getBufferedFrag(e,t){const{fragments:r}=this,i=Object.keys(r);for(let s=i.length;s--;){const o=r[i[s]];if((o==null?void 0:o.body.type)===t&&o.buffered){const a=o.body;if(a.start<=e&&e<=a.end)return a}}return null}detectEvictedFragments(e,t,r,i){this.timeRanges&&(this.timeRanges[e]=t);const s=(i==null?void 0:i.fragment.sn)||-1;Object.keys(this.fragments).forEach(o=>{const a=this.fragments[o];if(!a||s>=a.body.sn)return;if(!a.buffered&&!a.loaded){a.body.type===r&&this.removeFragment(a.body);return}const l=a.range[e];l&&l.time.some(c=>{const d=!this.isTimeBuffered(c.startPTS,c.endPTS,t);return d&&this.removeFragment(a.body),d})})}detectPartialFragments(e){const t=this.timeRanges,{frag:r,part:i}=e;if(!t||r.sn==="initSegment")return;const s=lr(r),o=this.fragments[s];if(!o||o.buffered&&r.gap)return;const a=!r.relurl;Object.keys(t).forEach(l=>{const c=r.elementaryStreams[l];if(!c)return;const d=t[l],u=a||c.partial===!0;o.range[l]=this.getBufferedTimes(r,i,u,d)}),o.loaded=null,Object.keys(o.range).length?(o.buffered=!0,(o.body.endList=r.endList||o.body.endList)&&(this.endListFragments[o.body.type]=o),is(o)||this.removeParts(r.sn-1,r.type)):this.removeFragment(o.body)}removeParts(e,t){const r=this.activePartLists[t];r&&(this.activePartLists[t]=r.filter(i=>i.fragment.sn>=e))}fragBuffered(e,t){const r=lr(e);let i=this.fragments[r];!i&&t&&(i=this.fragments[r]={body:e,appendedPTS:null,loaded:null,buffered:!1,range:Object.create(null)},e.gap&&(this.hasGaps=!0)),i&&(i.loaded=null,i.buffered=!0)}getBufferedTimes(e,t,r,i){const s={time:[],partial:r},o=e.start,a=e.end,l=e.minEndPTS||a,c=e.maxStartPTS||o;for(let d=0;d<i.length;d++){const u=i.start(d)-this.bufferPadding,h=i.end(d)+this.bufferPadding;if(c>=u&&l<=h){s.time.push({startPTS:Math.max(o,i.start(d)),endPTS:Math.min(a,i.end(d))});break}else if(o<h&&a>u){const g=Math.max(o,i.start(d)),y=Math.min(a,i.end(d));y>g&&(s.partial=!0,s.time.push({startPTS:g,endPTS:y}))}else if(a<=u)break}return s}getPartialFragment(e){let t=null,r,i,s,o=0;const{bufferPadding:a,fragments:l}=this;return Object.keys(l).forEach(c=>{const d=l[c];d&&is(d)&&(i=d.body.start-a,s=d.body.end+a,e>=i&&e<=s&&(r=Math.min(e-i,s-e),o<=r&&(t=d.body,o=r)))}),t}isEndListAppended(e){const t=this.endListFragments[e];return t!==void 0&&(t.buffered||is(t))}getState(e){const t=lr(e),r=this.fragments[t];return r?r.buffered?is(r)?mt.PARTIAL:mt.OK:mt.APPENDING:mt.NOT_LOADED}isTimeBuffered(e,t,r){let i,s;for(let o=0;o<r.length;o++){if(i=r.start(o)-this.bufferPadding,s=r.end(o)+this.bufferPadding,e>=i&&t<=s)return!0;if(t<=i)return!1}return!1}onFragLoaded(e,t){const{frag:r,part:i}=t;if(r.sn==="initSegment"||r.bitrateTest)return;const s=i?null:t,o=lr(r);this.fragments[o]={body:r,appendedPTS:null,loaded:s,buffered:!1,range:Object.create(null)}}onBufferAppended(e,t){const{frag:r,part:i,timeRanges:s}=t;if(r.sn==="initSegment")return;const o=r.type;if(i){let a=this.activePartLists[o];a||(this.activePartLists[o]=a=[]),a.push(i)}this.timeRanges=s,Object.keys(s).forEach(a=>{const l=s[a];this.detectEvictedFragments(a,l,o,i)})}onFragBuffered(e,t){this.detectPartialFragments(t)}hasFragment(e){const t=lr(e);return!!this.fragments[t]}hasParts(e){var t;return!!((t=this.activePartLists[e])!=null&&t.length)}removeFragmentsInRange(e,t,r,i,s){i&&!this.hasGaps||Object.keys(this.fragments).forEach(o=>{const a=this.fragments[o];if(!a)return;const l=a.body;l.type!==r||i&&!l.gap||l.start<t&&l.end>e&&(a.buffered||s)&&this.removeFragment(l)})}removeFragment(e){const t=lr(e);e.stats.loaded=0,e.clearElementaryStreamInfo();const r=this.activePartLists[e.type];if(r){const i=e.sn;this.activePartLists[e.type]=r.filter(s=>s.fragment.sn!==i)}delete this.fragments[t],e.endList&&delete this.endListFragments[e.type]}removeAllFragments(){this.fragments=Object.create(null),this.endListFragments=Object.create(null),this.activePartLists=Object.create(null),this.hasGaps=!1}}function is(n){var e,t,r;return n.buffered&&(n.body.gap||((e=n.range.video)==null?void 0:e.partial)||((t=n.range.audio)==null?void 0:t.partial)||((r=n.range.audiovideo)==null?void 0:r.partial))}function lr(n){return`${n.type}_${n.level}_${n.sn}`}const f1={length:0,start:()=>0,end:()=>0};class et{static isBuffered(e,t){try{if(e){const r=et.getBuffered(e);for(let i=0;i<r.length;i++)if(t>=r.start(i)&&t<=r.end(i))return!0}}catch{}return!1}static bufferInfo(e,t,r){try{if(e){const i=et.getBuffered(e),s=[];let o;for(o=0;o<i.length;o++)s.push({start:i.start(o),end:i.end(o)});return this.bufferedInfo(s,t,r)}}catch{}return{len:0,start:t,end:t,nextStart:void 0}}static bufferedInfo(e,t,r){t=Math.max(0,t),e.sort(function(c,d){const u=c.start-d.start;return u||d.end-c.end});let i=[];if(r)for(let c=0;c<e.length;c++){const d=i.length;if(d){const u=i[d-1].end;e[c].start-u<r?e[c].end>u&&(i[d-1].end=e[c].end):i.push(e[c])}else i.push(e[c])}else i=e;let s=0,o,a=t,l=t;for(let c=0;c<i.length;c++){const d=i[c].start,u=i[c].end;if(t+r>=d&&t<u)a=d,l=u,s=l-t;else if(t+r<d){o=d;break}}return{len:s,start:a||0,end:l||0,nextStart:o}}static getBuffered(e){try{return e.buffered}catch(t){return B.log("failed to get media.buffered",t),f1}}}class wl{constructor(e,t,r,i=0,s=-1,o=!1){this.level=void 0,this.sn=void 0,this.part=void 0,this.id=void 0,this.size=void 0,this.partial=void 0,this.transmuxing=ss(),this.buffering={audio:ss(),video:ss(),audiovideo:ss()},this.level=e,this.sn=t,this.id=r,this.size=i,this.part=s,this.partial=o}}function ss(){return{start:0,executeStart:0,executeEnd:0,end:0}}function vs(n,e){for(let r=0,i=n.length;r<i;r++){var t;if(((t=n[r])==null?void 0:t.cc)===e)return n[r]}return null}function p1(n,e,t){return!!(e&&(t.endCC>t.startCC||n&&n.cc<t.startCC))}function m1(n,e){const t=n.fragments,r=e.fragments;if(!r.length||!t.length){B.log("No fragments to align");return}const i=vs(t,r[0].cc);if(!i||i&&!i.startPTS){B.log("No frag in previous level to align on");return}return i}function tu(n,e){if(n){const t=n.start+e;n.start=n.startPTS=t,n.endPTS=t+n.duration}}function Nf(n,e){const t=e.fragments;for(let r=0,i=t.length;r<i;r++)tu(t[r],n);e.fragmentHint&&tu(e.fragmentHint,n),e.alignedSliding=!0}function g1(n,e,t){e&&(y1(n,t,e),!t.alignedSliding&&e&&Gs(t,e),!t.alignedSliding&&e&&!t.skippedSegments&&Pf(e,t))}function y1(n,e,t){if(p1(n,t,e)){const r=m1(t,e);r&&pe(r.start)&&(B.log(`Adjusting PTS using last level due to CC increase within current level ${e.url}`),Nf(r.start,e))}}function Gs(n,e){if(!n.hasProgramDateTime||!e.hasProgramDateTime)return;const t=n.fragments,r=e.fragments;if(!t.length||!r.length)return;let i,s;const o=Math.min(e.endCC,n.endCC);e.startCC<o&&n.startCC<o&&(i=vs(r,o),s=vs(t,o)),(!i||!s)&&(i=r[Math.floor(r.length/2)],s=vs(t,i.cc)||t[Math.floor(t.length/2)]);const a=i.programDateTime,l=s.programDateTime;if(!a||!l)return;const c=(l-a)/1e3-(s.start-i.start);Nf(c,n)}const nu=Math.pow(2,17);class A1{constructor(e){this.config=void 0,this.loader=null,this.partLoadTimeout=-1,this.config=e}destroy(){this.loader&&(this.loader.destroy(),this.loader=null)}abort(){this.loader&&this.loader.abort()}load(e,t){const r=e.url;if(!r)return Promise.reject(new gn({type:Le.NETWORK_ERROR,details:$.FRAG_LOAD_ERROR,fatal:!1,frag:e,error:new Error(`Fragment does not have a ${r?"part list":"url"}`),networkDetails:null}));this.abort();const i=this.config,s=i.fLoader,o=i.loader;return new Promise((a,l)=>{if(this.loader&&this.loader.destroy(),e.gap)if(e.tagList.some(g=>g[0]==="GAP")){l(iu(e));return}else e.gap=!1;const c=this.loader=e.loader=s?new s(i):new o(i),d=ru(e),u=Jd(i.fragLoadPolicy.default),h={loadPolicy:u,timeout:u.maxLoadTimeMs,maxRetry:0,retryDelay:0,maxRetryDelay:0,highWaterMark:e.sn==="initSegment"?1/0:nu};e.stats=c.stats,c.load(d,h,{onSuccess:(g,y,b,E)=>{this.resetLoader(e,c);let C=g.data;b.resetIV&&e.decryptdata&&(e.decryptdata.iv=new Uint8Array(C.slice(0,16)),C=C.slice(16)),a({frag:e,part:null,payload:C,networkDetails:E})},onError:(g,y,b,E)=>{this.resetLoader(e,c),l(new gn({type:Le.NETWORK_ERROR,details:$.FRAG_LOAD_ERROR,fatal:!1,frag:e,response:yt({url:r,data:void 0},g),error:new Error(`HTTP Error ${g.code} ${g.text}`),networkDetails:b,stats:E}))},onAbort:(g,y,b)=>{this.resetLoader(e,c),l(new gn({type:Le.NETWORK_ERROR,details:$.INTERNAL_ABORTED,fatal:!1,frag:e,error:new Error("Aborted"),networkDetails:b,stats:g}))},onTimeout:(g,y,b)=>{this.resetLoader(e,c),l(new gn({type:Le.NETWORK_ERROR,details:$.FRAG_LOAD_TIMEOUT,fatal:!1,frag:e,error:new Error(`Timeout after ${h.timeout}ms`),networkDetails:b,stats:g}))},onProgress:(g,y,b,E)=>{t&&t({frag:e,part:null,payload:b,networkDetails:E})}})})}loadPart(e,t,r){this.abort();const i=this.config,s=i.fLoader,o=i.loader;return new Promise((a,l)=>{if(this.loader&&this.loader.destroy(),e.gap||t.gap){l(iu(e,t));return}const c=this.loader=e.loader=s?new s(i):new o(i),d=ru(e,t),u=Jd(i.fragLoadPolicy.default),h={loadPolicy:u,timeout:u.maxLoadTimeMs,maxRetry:0,retryDelay:0,maxRetryDelay:0,highWaterMark:nu};t.stats=c.stats,c.load(d,h,{onSuccess:(g,y,b,E)=>{this.resetLoader(e,c),this.updateStatsFromPart(e,t);const C={frag:e,part:t,payload:g.data,networkDetails:E};r(C),a(C)},onError:(g,y,b,E)=>{this.resetLoader(e,c),l(new gn({type:Le.NETWORK_ERROR,details:$.FRAG_LOAD_ERROR,fatal:!1,frag:e,part:t,response:yt({url:d.url,data:void 0},g),error:new Error(`HTTP Error ${g.code} ${g.text}`),networkDetails:b,stats:E}))},onAbort:(g,y,b)=>{e.stats.aborted=t.stats.aborted,this.resetLoader(e,c),l(new gn({type:Le.NETWORK_ERROR,details:$.INTERNAL_ABORTED,fatal:!1,frag:e,part:t,error:new Error("Aborted"),networkDetails:b,stats:g}))},onTimeout:(g,y,b)=>{this.resetLoader(e,c),l(new gn({type:Le.NETWORK_ERROR,details:$.FRAG_LOAD_TIMEOUT,fatal:!1,frag:e,part:t,error:new Error(`Timeout after ${h.timeout}ms`),networkDetails:b,stats:g}))}})})}updateStatsFromPart(e,t){const r=e.stats,i=t.stats,s=i.total;if(r.loaded+=i.loaded,s){const l=Math.round(e.duration/t.duration),c=Math.min(Math.round(r.loaded/s),l),u=(l-c)*Math.round(r.loaded/c);r.total=r.loaded+u}else r.total=Math.max(r.loaded,r.total);const o=r.loading,a=i.loading;o.start?o.first+=a.first-a.start:(o.start=a.start,o.first=a.first),o.end=a.end}resetLoader(e,t){e.loader=null,this.loader===t&&(self.clearTimeout(this.partLoadTimeout),this.loader=null),t.destroy()}}function ru(n,e=null){const t=e||n,r={frag:n,part:e,responseType:"arraybuffer",url:t.url,headers:{},rangeStart:0,rangeEnd:0},i=t.byteRangeStartOffset,s=t.byteRangeEndOffset;if(pe(i)&&pe(s)){var o;let a=i,l=s;if(n.sn==="initSegment"&&((o=n.decryptdata)==null?void 0:o.method)==="AES-128"){const c=s-i;c%16&&(l=s+(16-c%16)),i!==0&&(r.resetIV=!0,a=i-16)}r.rangeStart=a,r.rangeEnd=l}return r}function iu(n,e){const t=new Error(`GAP ${n.gap?"tag":"attribute"} found`),r={type:Le.MEDIA_ERROR,details:$.FRAG_GAP,fatal:!1,frag:n,error:t,networkDetails:null};return e&&(r.part=e),(e||n).stats.aborted=!0,new gn(r)}class gn extends Error{constructor(e){super(e.error.message),this.data=void 0,this.data=e}}class b1{constructor(e,t){this.subtle=void 0,this.aesIV=void 0,this.subtle=e,this.aesIV=t}decrypt(e,t){return this.subtle.decrypt({name:"AES-CBC",iv:this.aesIV},t,e)}}class v1{constructor(e,t){this.subtle=void 0,this.key=void 0,this.subtle=e,this.key=t}expandKey(){return this.subtle.importKey("raw",this.key,{name:"AES-CBC"},!1,["encrypt","decrypt"])}}function E1(n){const e=n.byteLength,t=e&&new DataView(n.buffer).getUint8(e-1);return t?Xn(n,0,e-t):n}class x1{constructor(){this.rcon=[0,1,2,4,8,16,32,64,128,27,54],this.subMix=[new Uint32Array(256),new Uint32Array(256),new Uint32Array(256),new Uint32Array(256)],this.invSubMix=[new Uint32Array(256),new Uint32Array(256),new Uint32Array(256),new Uint32Array(256)],this.sBox=new Uint32Array(256),this.invSBox=new Uint32Array(256),this.key=new Uint32Array(0),this.ksRows=0,this.keySize=0,this.keySchedule=void 0,this.invKeySchedule=void 0,this.initTable()}uint8ArrayToUint32Array_(e){const t=new DataView(e),r=new Uint32Array(4);for(let i=0;i<4;i++)r[i]=t.getUint32(i*4);return r}initTable(){const e=this.sBox,t=this.invSBox,r=this.subMix,i=r[0],s=r[1],o=r[2],a=r[3],l=this.invSubMix,c=l[0],d=l[1],u=l[2],h=l[3],g=new Uint32Array(256);let y=0,b=0,E=0;for(E=0;E<256;E++)E<128?g[E]=E<<1:g[E]=E<<1^283;for(E=0;E<256;E++){let C=b^b<<1^b<<2^b<<3^b<<4;C=C>>>8^C&255^99,e[y]=C,t[C]=y;const w=g[y],R=g[w],_=g[R];let P=g[C]*257^C*16843008;i[y]=P<<24|P>>>8,s[y]=P<<16|P>>>16,o[y]=P<<8|P>>>24,a[y]=P,P=_*16843009^R*65537^w*257^y*16843008,c[C]=P<<24|P>>>8,d[C]=P<<16|P>>>16,u[C]=P<<8|P>>>24,h[C]=P,y?(y=w^g[g[g[_^w]]],b^=g[g[b]]):y=b=1}}expandKey(e){const t=this.uint8ArrayToUint32Array_(e);let r=!0,i=0;for(;i<t.length&&r;)r=t[i]===this.key[i],i++;if(r)return;this.key=t;const s=this.keySize=t.length;if(s!==4&&s!==6&&s!==8)throw new Error("Invalid aes key size="+s);const o=this.ksRows=(s+6+1)*4;let a,l;const c=this.keySchedule=new Uint32Array(o),d=this.invKeySchedule=new Uint32Array(o),u=this.sBox,h=this.rcon,g=this.invSubMix,y=g[0],b=g[1],E=g[2],C=g[3];let w,R;for(a=0;a<o;a++){if(a<s){w=c[a]=t[a];continue}R=w,a%s===0?(R=R<<8|R>>>24,R=u[R>>>24]<<24|u[R>>>16&255]<<16|u[R>>>8&255]<<8|u[R&255],R^=h[a/s|0]<<24):s>6&&a%s===4&&(R=u[R>>>24]<<24|u[R>>>16&255]<<16|u[R>>>8&255]<<8|u[R&255]),c[a]=w=(c[a-s]^R)>>>0}for(l=0;l<o;l++)a=o-l,l&3?R=c[a]:R=c[a-4],l<4||a<=4?d[l]=R:d[l]=y[u[R>>>24]]^b[u[R>>>16&255]]^E[u[R>>>8&255]]^C[u[R&255]],d[l]=d[l]>>>0}networkToHostOrderSwap(e){return e<<24|(e&65280)<<8|(e&16711680)>>8|e>>>24}decrypt(e,t,r){const i=this.keySize+6,s=this.invKeySchedule,o=this.invSBox,a=this.invSubMix,l=a[0],c=a[1],d=a[2],u=a[3],h=this.uint8ArrayToUint32Array_(r);let g=h[0],y=h[1],b=h[2],E=h[3];const C=new Int32Array(e),w=new Int32Array(C.length);let R,_,P,H,U,z,Q,F,Y,Ae,te,Se,ve,ne;const ye=this.networkToHostOrderSwap;for(;t<C.length;){for(Y=ye(C[t]),Ae=ye(C[t+1]),te=ye(C[t+2]),Se=ye(C[t+3]),U=Y^s[0],z=Se^s[1],Q=te^s[2],F=Ae^s[3],ve=4,ne=1;ne<i;ne++)R=l[U>>>24]^c[z>>16&255]^d[Q>>8&255]^u[F&255]^s[ve],_=l[z>>>24]^c[Q>>16&255]^d[F>>8&255]^u[U&255]^s[ve+1],P=l[Q>>>24]^c[F>>16&255]^d[U>>8&255]^u[z&255]^s[ve+2],H=l[F>>>24]^c[U>>16&255]^d[z>>8&255]^u[Q&255]^s[ve+3],U=R,z=_,Q=P,F=H,ve=ve+4;R=o[U>>>24]<<24^o[z>>16&255]<<16^o[Q>>8&255]<<8^o[F&255]^s[ve],_=o[z>>>24]<<24^o[Q>>16&255]<<16^o[F>>8&255]<<8^o[U&255]^s[ve+1],P=o[Q>>>24]<<24^o[F>>16&255]<<16^o[U>>8&255]<<8^o[z&255]^s[ve+2],H=o[F>>>24]<<24^o[U>>16&255]<<16^o[z>>8&255]<<8^o[Q&255]^s[ve+3],w[t]=ye(R^g),w[t+1]=ye(H^y),w[t+2]=ye(P^b),w[t+3]=ye(_^E),g=Y,y=Ae,b=te,E=Se,t=t+4}return w.buffer}}const S1=16;class kl{constructor(e,{removePKCS7Padding:t=!0}={}){if(this.logEnabled=!0,this.removePKCS7Padding=void 0,this.subtle=null,this.softwareDecrypter=null,this.key=null,this.fastAesKey=null,this.remainderData=null,this.currentIV=null,this.currentResult=null,this.useSoftware=void 0,this.useSoftware=e.enableSoftwareAES,this.removePKCS7Padding=t,t)try{const r=self.crypto;r&&(this.subtle=r.subtle||r.webkitSubtle)}catch{}this.subtle===null&&(this.useSoftware=!0)}destroy(){this.subtle=null,this.softwareDecrypter=null,this.key=null,this.fastAesKey=null,this.remainderData=null,this.currentIV=null,this.currentResult=null}isSync(){return this.useSoftware}flush(){const{currentResult:e,remainderData:t}=this;if(!e||t)return this.reset(),null;const r=new Uint8Array(e);return this.reset(),this.removePKCS7Padding?E1(r):r}reset(){this.currentResult=null,this.currentIV=null,this.remainderData=null,this.softwareDecrypter&&(this.softwareDecrypter=null)}decrypt(e,t,r){return this.useSoftware?new Promise((i,s)=>{this.softwareDecrypt(new Uint8Array(e),t,r);const o=this.flush();o?i(o.buffer):s(new Error("[softwareDecrypt] Failed to decrypt data"))}):this.webCryptoDecrypt(new Uint8Array(e),t,r)}softwareDecrypt(e,t,r){const{currentIV:i,currentResult:s,remainderData:o}=this;this.logOnce("JS AES decrypt"),o&&(e=Nt(o,e),this.remainderData=null);const a=this.getValidChunk(e);if(!a.length)return null;i&&(r=i);let l=this.softwareDecrypter;l||(l=this.softwareDecrypter=new x1),l.expandKey(t);const c=s;return this.currentResult=l.decrypt(a.buffer,0,r),this.currentIV=Xn(a,-16).buffer,c||null}webCryptoDecrypt(e,t,r){const i=this.subtle;return(this.key!==t||!this.fastAesKey)&&(this.key=t,this.fastAesKey=new v1(i,t)),this.fastAesKey.expandKey().then(s=>i?(this.logOnce("WebCrypto AES decrypt"),new b1(i,new Uint8Array(r)).decrypt(e.buffer,s)):Promise.reject(new Error("web crypto not initialized"))).catch(s=>(B.warn(`[decrypter]: WebCrypto Error, disable WebCrypto API, ${s.name}: ${s.message}`),this.onWebCryptoError(e,t,r)))}onWebCryptoError(e,t,r){this.useSoftware=!0,this.logEnabled=!0,this.softwareDecrypt(e,t,r);const i=this.flush();if(i)return i.buffer;throw new Error("WebCrypto and softwareDecrypt: failed to decrypt data")}getValidChunk(e){let t=e;const r=e.length-e.length%S1;return r!==e.length&&(t=Xn(e,0,r),this.remainderData=Xn(e,r)),t}logOnce(e){this.logEnabled&&(B.log(`[decrypter]: ${e}`),this.logEnabled=!1)}}const T1={toString:function(n){let e="";const t=n.length;for(let r=0;r<t;r++)e+=`[${n.start(r).toFixed(3)}-${n.end(r).toFixed(3)}]`;return e}},J={STOPPED:"STOPPED",IDLE:"IDLE",KEY_LOADING:"KEY_LOADING",FRAG_LOADING:"FRAG_LOADING",FRAG_LOADING_WAITING_RETRY:"FRAG_LOADING_WAITING_RETRY",WAITING_TRACK:"WAITING_TRACK",PARSING:"PARSING",PARSED:"PARSED",ENDED:"ENDED",ERROR:"ERROR",WAITING_INIT_PTS:"WAITING_INIT_PTS",WAITING_LEVEL:"WAITING_LEVEL"};class Ll extends u1{constructor(e,t,r,i,s){super(),this.hls=void 0,this.fragPrevious=null,this.fragCurrent=null,this.fragmentTracker=void 0,this.transmuxer=null,this._state=J.STOPPED,this.playlistType=void 0,this.media=null,this.mediaBuffer=null,this.config=void 0,this.bitrateTest=!1,this.lastCurrentTime=0,this.nextLoadPosition=0,this.startPosition=0,this.startTimeOffset=null,this.loadedmetadata=!1,this.retryDate=0,this.levels=null,this.fragmentLoader=void 0,this.keyLoader=void 0,this.levelLastLoaded=null,this.startFragRequested=!1,this.decrypter=void 0,this.initPTS=[],this.onvseeking=null,this.onvended=null,this.logPrefix="",this.log=void 0,this.warn=void 0,this.playlistType=s,this.logPrefix=i,this.log=B.log.bind(B,`${i}:`),this.warn=B.warn.bind(B,`${i}:`),this.hls=e,this.fragmentLoader=new A1(e.config),this.keyLoader=r,this.fragmentTracker=t,this.config=e.config,this.decrypter=new kl(e.config),e.on(T.MANIFEST_LOADED,this.onManifestLoaded,this)}doTick(){this.onTickEnd()}onTickEnd(){}startLoad(e){}stopLoad(){this.fragmentLoader.abort(),this.keyLoader.abort(this.playlistType);const e=this.fragCurrent;e!=null&&e.loader&&(e.abortRequests(),this.fragmentTracker.removeFragment(e)),this.resetTransmuxer(),this.fragCurrent=null,this.fragPrevious=null,this.clearInterval(),this.clearNextTick(),this.state=J.STOPPED}_streamEnded(e,t){if(t.live||e.nextStart||!e.end||!this.media)return!1;const r=t.partList;if(r!=null&&r.length){const s=r[r.length-1];return et.isBuffered(this.media,s.start+s.duration/2)}const i=t.fragments[t.fragments.length-1].type;return this.fragmentTracker.isEndListAppended(i)}getLevelDetails(){if(this.levels&&this.levelLastLoaded!==null){var e;return(e=this.levelLastLoaded)==null?void 0:e.details}}onMediaAttached(e,t){const r=this.media=this.mediaBuffer=t.media;this.onvseeking=this.onMediaSeeking.bind(this),this.onvended=this.onMediaEnded.bind(this),r.addEventListener("seeking",this.onvseeking),r.addEventListener("ended",this.onvended);const i=this.config;this.levels&&i.autoStartLoad&&this.state===J.STOPPED&&this.startLoad(i.startPosition)}onMediaDetaching(){const e=this.media;e!=null&&e.ended&&(this.log("MSE detaching and video ended, reset startPosition"),this.startPosition=this.lastCurrentTime=0),e&&this.onvseeking&&this.onvended&&(e.removeEventListener("seeking",this.onvseeking),e.removeEventListener("ended",this.onvended),this.onvseeking=this.onvended=null),this.keyLoader&&this.keyLoader.detach(),this.media=this.mediaBuffer=null,this.loadedmetadata=!1,this.fragmentTracker.removeAllFragments(),this.stopLoad()}onMediaSeeking(){const{config:e,fragCurrent:t,media:r,mediaBuffer:i,state:s}=this,o=r?r.currentTime:0,a=et.bufferInfo(i||r,o,e.maxBufferHole);if(this.log(`media seeking to ${pe(o)?o.toFixed(3):o}, state: ${s}`),this.state===J.ENDED)this.resetLoadingState();else if(t){const l=e.maxFragLookUpTolerance,c=t.start-l,d=t.start+t.duration+l;if(!a.len||d<a.start||c>a.end){const u=o>d;(o<c||u)&&(u&&t.loader&&(this.log("seeking outside of buffer while fragment load in progress, cancel fragment load"),t.abortRequests(),this.resetLoadingState()),this.fragPrevious=null)}}r&&(this.fragmentTracker.removeFragmentsInRange(o,1/0,this.playlistType,!0),this.lastCurrentTime=o),!this.loadedmetadata&&!a.len&&(this.nextLoadPosition=this.startPosition=o),this.tickImmediate()}onMediaEnded(){this.startPosition=this.lastCurrentTime=0}onManifestLoaded(e,t){this.startTimeOffset=t.startTimeOffset,this.initPTS=[]}onHandlerDestroying(){this.hls.off(T.MANIFEST_LOADED,this.onManifestLoaded,this),this.stopLoad(),super.onHandlerDestroying(),this.hls=null}onHandlerDestroyed(){this.state=J.STOPPED,this.fragmentLoader&&this.fragmentLoader.destroy(),this.keyLoader&&this.keyLoader.destroy(),this.decrypter&&this.decrypter.destroy(),this.hls=this.log=this.warn=this.decrypter=this.keyLoader=this.fragmentLoader=this.fragmentTracker=null,super.onHandlerDestroyed()}loadFragment(e,t,r){this._loadFragForPlayback(e,t,r)}_loadFragForPlayback(e,t,r){const i=s=>{if(this.fragContextChanged(e)){this.warn(`Fragment ${e.sn}${s.part?" p: "+s.part.index:""} of level ${e.level} was dropped during download.`),this.fragmentTracker.removeFragment(e);return}e.stats.chunkCount++,this._handleFragmentLoadProgress(s)};this._doFragLoad(e,t,r,i).then(s=>{if(!s)return;const o=this.state;if(this.fragContextChanged(e)){(o===J.FRAG_LOADING||!this.fragCurrent&&o===J.PARSING)&&(this.fragmentTracker.removeFragment(e),this.state=J.IDLE);return}"payload"in s&&(this.log(`Loaded fragment ${e.sn} of level ${e.level}`),this.hls.trigger(T.FRAG_LOADED,s)),this._handleFragmentLoadComplete(s)}).catch(s=>{this.state===J.STOPPED||this.state===J.ERROR||(this.warn(s),this.resetFragmentLoading(e))})}clearTrackerIfNeeded(e){var t;const{fragmentTracker:r}=this;if(r.getState(e)===mt.APPENDING){const s=e.type,o=this.getFwdBufferInfo(this.mediaBuffer,s),a=Math.max(e.duration,o?o.len:this.config.maxBufferLength);this.reduceMaxBufferLength(a)&&r.removeFragment(e)}else((t=this.mediaBuffer)==null?void 0:t.buffered.length)===0?r.removeAllFragments():r.hasParts(e.type)&&(r.detectPartialFragments({frag:e,part:null,stats:e.stats,id:e.type}),r.getState(e)===mt.PARTIAL&&r.removeFragment(e))}checkLiveUpdate(e){if(e.updated&&!e.live){const t=e.fragments[e.fragments.length-1];this.fragmentTracker.detectPartialFragments({frag:t,part:null,stats:t.stats,id:t.type})}e.fragments[0]||(e.deltaUpdateFailed=!0)}flushMainBuffer(e,t,r=null){if(!(e-t))return;const i={startOffset:e,endOffset:t,type:r};this.hls.trigger(T.BUFFER_FLUSHING,i)}_loadInitSegment(e,t){this._doFragLoad(e,t).then(r=>{if(!r||this.fragContextChanged(e)||!this.levels)throw new Error("init load aborted");return r}).then(r=>{const{hls:i}=this,{payload:s}=r,o=e.decryptdata;if(s&&s.byteLength>0&&o!=null&&o.key&&o.iv&&o.method==="AES-128"){const a=self.performance.now();return this.decrypter.decrypt(new Uint8Array(s),o.key.buffer,o.iv.buffer).catch(l=>{throw i.trigger(T.ERROR,{type:Le.MEDIA_ERROR,details:$.FRAG_DECRYPT_ERROR,fatal:!1,error:l,reason:l.message,frag:e}),l}).then(l=>{const c=self.performance.now();return i.trigger(T.FRAG_DECRYPTED,{frag:e,payload:l,stats:{tstart:a,tdecrypt:c}}),r.payload=l,this.completeInitSegmentLoad(r)})}return this.completeInitSegmentLoad(r)}).catch(r=>{this.state===J.STOPPED||this.state===J.ERROR||(this.warn(r),this.resetFragmentLoading(e))})}completeInitSegmentLoad(e){const{levels:t}=this;if(!t)throw new Error("init load aborted, missing levels");const r=e.frag.stats;this.state=J.IDLE,e.frag.data=new Uint8Array(e.payload),r.parsing.start=r.buffering.start=self.performance.now(),r.parsing.end=r.buffering.end=self.performance.now(),this.tick()}fragContextChanged(e){const{fragCurrent:t}=this;return!e||!t||e.sn!==t.sn||e.level!==t.level}fragBufferedComplete(e,t){var r,i,s,o;const a=this.mediaBuffer?this.mediaBuffer:this.media;if(this.log(`Buffered ${e.type} sn: ${e.sn}${t?" part: "+t.index:""} of ${this.playlistType===ke.MAIN?"level":"track"} ${e.level} (frag:[${((r=e.startPTS)!=null?r:NaN).toFixed(3)}-${((i=e.endPTS)!=null?i:NaN).toFixed(3)}] > buffer:${a?T1.toString(et.getBuffered(a)):"(detached)"})`),e.sn!=="initSegment"){var l;if(e.type!==ke.SUBTITLE){const d=e.elementaryStreams;if(!Object.keys(d).some(u=>!!d[u])){this.state=J.IDLE;return}}const c=(l=this.levels)==null?void 0:l[e.level];c!=null&&c.fragmentError&&(this.log(`Resetting level fragment error count of ${c.fragmentError} on frag buffered`),c.fragmentError=0)}this.state=J.IDLE,a&&(!this.loadedmetadata&&e.type==ke.MAIN&&a.buffered.length&&((s=this.fragCurrent)==null?void 0:s.sn)===((o=this.fragPrevious)==null?void 0:o.sn)&&(this.loadedmetadata=!0,this.seekToStartPos()),this.tick())}seekToStartPos(){}_handleFragmentLoadComplete(e){const{transmuxer:t}=this;if(!t)return;const{frag:r,part:i,partsLoaded:s}=e,o=!s||s.length===0||s.some(l=>!l),a=new wl(r.level,r.sn,r.stats.chunkCount+1,0,i?i.index:-1,!o);t.flush(a)}_handleFragmentLoadProgress(e){}_doFragLoad(e,t,r=null,i){var s;const o=t==null?void 0:t.details;if(!this.levels||!o)throw new Error(`frag load aborted, missing level${o?"":" detail"}s`);let a=null;if(e.encrypted&&!((s=e.decryptdata)!=null&&s.key)?(this.log(`Loading key for ${e.sn} of [${o.startSN}-${o.endSN}], ${this.logPrefix==="[stream-controller]"?"level":"track"} ${e.level}`),this.state=J.KEY_LOADING,this.fragCurrent=e,a=this.keyLoader.load(e).then(d=>{if(!this.fragContextChanged(d.frag))return this.hls.trigger(T.KEY_LOADED,d),this.state===J.KEY_LOADING&&(this.state=J.IDLE),d}),this.hls.trigger(T.KEY_LOADING,{frag:e}),this.fragCurrent===null&&(a=Promise.reject(new Error("frag load aborted, context changed in KEY_LOADING")))):!e.encrypted&&o.encryptedFragments.length&&this.keyLoader.loadClear(e,o.encryptedFragments),r=Math.max(e.start,r||0),this.config.lowLatencyMode&&e.sn!=="initSegment"){const d=o.partList;if(d&&i){r>e.end&&o.fragmentHint&&(e=o.fragmentHint);const u=this.getNextPart(d,e,r);if(u>-1){const h=d[u];this.log(`Loading part sn: ${e.sn} p: ${h.index} cc: ${e.cc} of playlist [${o.startSN}-${o.endSN}] parts [0-${u}-${d.length-1}] ${this.logPrefix==="[stream-controller]"?"level":"track"}: ${e.level}, target: ${parseFloat(r.toFixed(3))}`),this.nextLoadPosition=h.start+h.duration,this.state=J.FRAG_LOADING;let g;return a?g=a.then(y=>!y||this.fragContextChanged(y.frag)?null:this.doFragPartsLoad(e,h,t,i)).catch(y=>this.handleFragLoadError(y)):g=this.doFragPartsLoad(e,h,t,i).catch(y=>this.handleFragLoadError(y)),this.hls.trigger(T.FRAG_LOADING,{frag:e,part:h,targetBufferTime:r}),this.fragCurrent===null?Promise.reject(new Error("frag load aborted, context changed in FRAG_LOADING parts")):g}else if(!e.url||this.loadedEndOfParts(d,r))return Promise.resolve(null)}}this.log(`Loading fragment ${e.sn} cc: ${e.cc} ${o?"of ["+o.startSN+"-"+o.endSN+"] ":""}${this.logPrefix==="[stream-controller]"?"level":"track"}: ${e.level}, target: ${parseFloat(r.toFixed(3))}`),pe(e.sn)&&!this.bitrateTest&&(this.nextLoadPosition=e.start+e.duration),this.state=J.FRAG_LOADING;const l=this.config.progressive;let c;return l&&a?c=a.then(d=>!d||this.fragContextChanged(d==null?void 0:d.frag)?null:this.fragmentLoader.load(e,i)).catch(d=>this.handleFragLoadError(d)):c=Promise.all([this.fragmentLoader.load(e,l?i:void 0),a]).then(([d])=>(!l&&d&&i&&i(d),d)).catch(d=>this.handleFragLoadError(d)),this.hls.trigger(T.FRAG_LOADING,{frag:e,targetBufferTime:r}),this.fragCurrent===null?Promise.reject(new Error("frag load aborted, context changed in FRAG_LOADING")):c}doFragPartsLoad(e,t,r,i){return new Promise((s,o)=>{var a;const l=[],c=(a=r.details)==null?void 0:a.partList,d=u=>{this.fragmentLoader.loadPart(e,u,i).then(h=>{l[u.index]=h;const g=h.part;this.hls.trigger(T.FRAG_LOADED,h);const y=Qd(r,e.sn,u.index+1)||Bf(c,e.sn,u.index+1);if(y)d(y);else return s({frag:e,part:g,partsLoaded:l})}).catch(o)};d(t)})}handleFragLoadError(e){if("data"in e){const t=e.data;e.data&&t.details===$.INTERNAL_ABORTED?this.handleFragLoadAborted(t.frag,t.part):this.hls.trigger(T.ERROR,t)}else this.hls.trigger(T.ERROR,{type:Le.OTHER_ERROR,details:$.INTERNAL_EXCEPTION,err:e,error:e,fatal:!0});return null}_handleTransmuxerFlush(e){const t=this.getCurrentContext(e);if(!t||this.state!==J.PARSING){!this.fragCurrent&&this.state!==J.STOPPED&&this.state!==J.ERROR&&(this.state=J.IDLE);return}const{frag:r,part:i,level:s}=t,o=self.performance.now();r.stats.parsing.end=o,i&&(i.stats.parsing.end=o),this.updateLevelTiming(r,i,s,e.partial)}getCurrentContext(e){const{levels:t,fragCurrent:r}=this,{level:i,sn:s,part:o}=e;if(!(t!=null&&t[i]))return this.warn(`Levels object was unset while buffering fragment ${s} of level ${i}. The current chunk will not be buffered.`),null;const a=t[i],l=o>-1?Qd(a,s,o):null,c=l?l.fragment:Vx(a,s,r);return c?(r&&r!==c&&(c.stats=r.stats),{frag:c,part:l,level:a}):null}bufferFragmentData(e,t,r,i,s){var o;if(!e||this.state!==J.PARSING)return;const{data1:a,data2:l}=e;let c=a;if(a&&l&&(c=Nt(a,l)),!((o=c)!=null&&o.length))return;const d={type:e.type,frag:t,part:r,chunkMeta:i,parent:t.type,data:c};if(this.hls.trigger(T.BUFFER_APPENDING,d),e.dropped&&e.independent&&!r){if(s)return;this.flushBufferGap(t)}}flushBufferGap(e){const t=this.media;if(!t)return;if(!et.isBuffered(t,t.currentTime)){this.flushMainBuffer(0,e.start);return}const r=t.currentTime,i=et.bufferInfo(t,r,0),s=e.duration,o=Math.min(this.config.maxFragLookUpTolerance*2,s*.25),a=Math.max(Math.min(e.start-o,i.end-o),r+o);e.start-a>o&&this.flushMainBuffer(a,e.start)}getFwdBufferInfo(e,t){const r=this.getLoadPosition();return pe(r)?this.getFwdBufferInfoAtPos(e,r,t):null}getFwdBufferInfoAtPos(e,t,r){const{config:{maxBufferHole:i}}=this,s=et.bufferInfo(e,t,i);if(s.len===0&&s.nextStart!==void 0){const o=this.fragmentTracker.getBufferedFrag(t,r);if(o&&s.nextStart<o.end)return et.bufferInfo(e,t,Math.max(s.nextStart,i))}return s}getMaxBufferLength(e){const{config:t}=this;let r;return e?r=Math.max(8*t.maxBufferSize/e,t.maxBufferLength):r=t.maxBufferLength,Math.min(r,t.maxMaxBufferLength)}reduceMaxBufferLength(e){const t=this.config,r=e||t.maxBufferLength;return t.maxMaxBufferLength>=r?(t.maxMaxBufferLength/=2,this.warn(`Reduce max buffer length to ${t.maxMaxBufferLength}s`),!0):!1}getAppendedFrag(e,t=ke.MAIN){const r=this.fragmentTracker.getAppendedFrag(e,ke.MAIN);return r&&"fragment"in r?r.fragment:r}getNextFragment(e,t){const r=t.fragments,i=r.length;if(!i)return null;const{config:s}=this,o=r[0].start;let a;if(t.live){const l=s.initialLiveManifestSize;if(i<l)return this.warn(`Not enough fragments to start playback (have: ${i}, need: ${l})`),null;(!t.PTSKnown&&!this.startFragRequested&&this.startPosition===-1||e<o)&&(a=this.getInitialLiveFragment(t,r),this.startPosition=this.nextLoadPosition=a?this.hls.liveSyncPosition||a.start:e)}else e<=o&&(a=r[0]);if(!a){const l=s.lowLatencyMode?t.partEnd:t.fragmentEnd;a=this.getFragmentAtPosition(e,l,t)}return this.mapToInitFragWhenRequired(a)}isLoopLoading(e,t){const r=this.fragmentTracker.getState(e);return(r===mt.OK||r===mt.PARTIAL&&!!e.gap)&&this.nextLoadPosition>t}getNextFragmentLoopLoading(e,t,r,i,s){const o=e.gap,a=this.getNextFragment(this.nextLoadPosition,t);if(a===null)return a;if(e=a,o&&e&&!e.gap&&r.nextStart){const l=this.getFwdBufferInfoAtPos(this.mediaBuffer?this.mediaBuffer:this.media,r.nextStart,i);if(l!==null&&r.len+l.len>=s)return this.log(`buffer full after gaps in "${i}" playlist starting at sn: ${e.sn}`),null}return e}mapToInitFragWhenRequired(e){return e!=null&&e.initSegment&&!(e!=null&&e.initSegment.data)&&!this.bitrateTest?e.initSegment:e}getNextPart(e,t,r){let i=-1,s=!1,o=!0;for(let a=0,l=e.length;a<l;a++){const c=e[a];if(o=o&&!c.independent,i>-1&&r<c.start)break;const d=c.loaded;d?i=-1:(s||c.independent||o)&&c.fragment===t&&(i=a),s=d}return i}loadedEndOfParts(e,t){const r=e[e.length-1];return r&&t>r.start&&r.loaded}getInitialLiveFragment(e,t){const r=this.fragPrevious;let i=null;if(r){if(e.hasProgramDateTime&&(this.log(`Live playlist, switching playlist, load frag with same PDT: ${r.programDateTime}`),i=Yx(t,r.endProgramDateTime,this.config.maxFragLookUpTolerance)),!i){const s=r.sn+1;if(s>=e.startSN&&s<=e.endSN){const o=t[s-e.startSN];r.cc===o.cc&&(i=o,this.log(`Live playlist, switching playlist, load frag with next SN: ${i.sn}`))}i||(i=Xx(t,r.cc),i&&this.log(`Live playlist, switching playlist, load frag with same CC: ${i.sn}`))}}else{const s=this.hls.liveSyncPosition;s!==null&&(i=this.getFragmentAtPosition(s,this.bitrateTest?e.fragmentEnd:e.edge,e))}return i}getFragmentAtPosition(e,t,r){const{config:i}=this;let{fragPrevious:s}=this,{fragments:o,endSN:a}=r;const{fragmentHint:l}=r,c=i.maxFragLookUpTolerance,d=r.partList,u=!!(i.lowLatencyMode&&d!=null&&d.length&&l);u&&l&&!this.bitrateTest&&(o=o.concat(l),a=l.sn);let h;if(e<t){const g=e>t-c?0:c;h=Hs(s,o,e,g)}else h=o[o.length-1];if(h){const g=h.sn-r.startSN,y=this.fragmentTracker.getState(h);if((y===mt.OK||y===mt.PARTIAL&&h.gap)&&(s=h),s&&h.sn===s.sn&&(!u||d[0].fragment.sn>h.sn)&&s&&h.level===s.level){const E=o[g+1];h.sn<a&&this.fragmentTracker.getState(E)!==mt.OK?h=E:h=null}}return h}synchronizeToLiveEdge(e){const{config:t,media:r}=this;if(!r)return;const i=this.hls.liveSyncPosition,s=r.currentTime,o=e.fragments[0].start,a=e.edge,l=s>=o-t.maxFragLookUpTolerance&&s<=a;if(i!==null&&r.duration>i&&(s<i||!l)){const c=t.liveMaxLatencyDuration!==void 0?t.liveMaxLatencyDuration:t.liveMaxLatencyDurationCount*e.targetduration;(!l&&r.readyState<4||s<a-c)&&(this.loadedmetadata||(this.nextLoadPosition=i),r.readyState&&(this.warn(`Playback: ${s.toFixed(3)} is located too far from the end of live sliding playlist: ${a}, reset currentTime to : ${i.toFixed(3)}`),r.currentTime=i))}}alignPlaylists(e,t,r){const i=e.fragments.length;if(!i)return this.warn("No fragments in live playlist"),0;const s=e.fragments[0].start,o=!t,a=e.alignedSliding&&pe(s);if(o||!a&&!s){const{fragPrevious:l}=this;g1(l,r,e);const c=e.fragments[0].start;return this.log(`Live playlist sliding: ${c.toFixed(2)} start-sn: ${t?t.startSN:"na"}->${e.startSN} prev-sn: ${l?l.sn:"na"} fragments: ${i}`),c}return s}waitForCdnTuneIn(e){return e.live&&e.canBlockReload&&e.partTarget&&e.tuneInGoal>Math.max(e.partHoldBack,e.partTarget*3)}setStartPosition(e,t){let r=this.startPosition;if(r<t&&(r=-1),r===-1||this.lastCurrentTime===-1){const i=this.startTimeOffset!==null,s=i?this.startTimeOffset:e.startTimeOffset;s!==null&&pe(s)?(r=t+s,s<0&&(r+=e.totalduration),r=Math.min(Math.max(t,r),t+e.totalduration),this.log(`Start time offset ${s} found in ${i?"multivariant":"media"} playlist, adjust startPosition to ${r}`),this.startPosition=r):e.live?r=this.hls.liveSyncPosition||t:this.startPosition=r=0,this.lastCurrentTime=r}this.nextLoadPosition=r}getLoadPosition(){const{media:e}=this;let t=0;return this.loadedmetadata&&e?t=e.currentTime:this.nextLoadPosition&&(t=this.nextLoadPosition),t}handleFragLoadAborted(e,t){this.transmuxer&&e.sn!=="initSegment"&&e.stats.aborted&&(this.warn(`Fragment ${e.sn}${t?" part "+t.index:""} of level ${e.level} was aborted`),this.resetFragmentLoading(e))}resetFragmentLoading(e){(!this.fragCurrent||!this.fragContextChanged(e)&&this.state!==J.FRAG_LOADING_WAITING_RETRY)&&(this.state=J.IDLE)}onFragmentOrKeyLoadError(e,t){if(t.chunkMeta&&!t.frag){const d=this.getCurrentContext(t.chunkMeta);d&&(t.frag=d.frag)}const r=t.frag;if(!r||r.type!==e||!this.levels)return;if(this.fragContextChanged(r)){var i;this.warn(`Frag load error must match current frag to retry ${r.url} > ${(i=this.fragCurrent)==null?void 0:i.url}`);return}const s=t.details===$.FRAG_GAP;s&&this.fragmentTracker.fragBuffered(r,!0);const o=t.errorAction,{action:a,retryCount:l=0,retryConfig:c}=o||{};if(o&&a===At.RetryRequest&&c){this.resetStartWhenNotLoaded(this.levelLastLoaded);const d=Tl(c,l);this.warn(`Fragment ${r.sn} of ${e} ${r.level} errored with ${t.details}, retrying loading ${l+1}/${c.maxNumRetry} in ${d}ms`),o.resolved=!0,this.retryDate=self.performance.now()+d,this.state=J.FRAG_LOADING_WAITING_RETRY}else if(c&&o)if(this.resetFragmentErrors(e),l<c.maxNumRetry)!s&&a!==At.RemoveAlternatePermanently&&(o.resolved=!0);else{B.warn(`${t.details} reached or exceeded max retry (${l})`);return}else(o==null?void 0:o.action)===At.SendAlternateToPenaltyBox?this.state=J.WAITING_LEVEL:this.state=J.ERROR;this.tickImmediate()}reduceLengthAndFlushBuffer(e){if(this.state===J.PARSING||this.state===J.PARSED){const t=e.parent,r=this.getFwdBufferInfo(this.mediaBuffer,t),i=r&&r.len>.5;i&&this.reduceMaxBufferLength(r.len);const s=!i;return s&&this.warn(`Buffer full error while media.currentTime is not buffered, flush ${t} buffer`),e.frag&&(this.fragmentTracker.removeFragment(e.frag),this.nextLoadPosition=e.frag.start),this.resetLoadingState(),s}return!1}resetFragmentErrors(e){e===ke.AUDIO&&(this.fragCurrent=null),this.loadedmetadata||(this.startFragRequested=!1),this.state!==J.STOPPED&&(this.state=J.IDLE)}afterBufferFlushed(e,t,r){if(!e)return;const i=et.getBuffered(e);this.fragmentTracker.detectEvictedFragments(t,i,r),this.state===J.ENDED&&this.resetLoadingState()}resetLoadingState(){this.log("Reset loading state"),this.fragCurrent=null,this.fragPrevious=null,this.state=J.IDLE}resetStartWhenNotLoaded(e){if(!this.loadedmetadata){this.startFragRequested=!1;const t=e?e.details:null;t!=null&&t.live?(this.startPosition=-1,this.setStartPosition(t,0),this.resetLoadingState()):this.nextLoadPosition=this.startPosition}}resetWhenMissingContext(e){this.warn(`The loading context changed while buffering fragment ${e.sn} of level ${e.level}. This chunk will not be buffered.`),this.removeUnbufferedFrags(),this.resetStartWhenNotLoaded(this.levelLastLoaded),this.resetLoadingState()}removeUnbufferedFrags(e=0){this.fragmentTracker.removeFragmentsInRange(e,1/0,this.playlistType,!1,!0)}updateLevelTiming(e,t,r,i){var s;const o=r.details;if(!o){this.warn("level.details undefined");return}if(!Object.keys(e.elementaryStreams).reduce((l,c)=>{const d=e.elementaryStreams[c];if(d){const u=d.endPTS-d.startPTS;if(u<=0)return this.warn(`Could not parse fragment ${e.sn} ${c} duration reliably (${u})`),l||!1;const h=i?0:Df(o,e,d.startPTS,d.endPTS,d.startDTS,d.endDTS);return this.hls.trigger(T.LEVEL_PTS_UPDATED,{details:o,level:r,drift:h,type:c,frag:e,start:d.startPTS,end:d.endPTS}),!0}return l},!1)&&((s=this.transmuxer)==null?void 0:s.error)===null){const l=new Error(`Found no media in fragment ${e.sn} of level ${e.level} resetting transmuxer to fallback to playlist timing`);if(r.fragmentError===0&&(r.fragmentError++,e.gap=!0,this.fragmentTracker.removeFragment(e),this.fragmentTracker.fragBuffered(e,!0)),this.warn(l.message),this.hls.trigger(T.ERROR,{type:Le.MEDIA_ERROR,details:$.FRAG_PARSING_ERROR,fatal:!1,error:l,frag:e,reason:`Found no media in msn ${e.sn} of level "${r.url}"`}),!this.hls)return;this.resetTransmuxer()}this.state=J.PARSED,this.hls.trigger(T.FRAG_PARSED,{frag:e,part:t})}resetTransmuxer(){this.transmuxer&&(this.transmuxer.destroy(),this.transmuxer=null)}recoverWorkerError(e){e.event==="demuxerWorker"&&(this.fragmentTracker.removeAllFragments(),this.resetTransmuxer(),this.resetStartWhenNotLoaded(this.levelLastLoaded),this.resetLoadingState())}set state(e){const t=this._state;t!==e&&(this._state=e,this.log(`${t}->${e}`))}get state(){return this._state}}class Uf{constructor(){this.chunks=[],this.dataLength=0}push(e){this.chunks.push(e),this.dataLength+=e.length}flush(){const{chunks:e,dataLength:t}=this;let r;if(e.length)e.length===1?r=e[0]:r=C1(e,t);else return new Uint8Array(0);return this.reset(),r}reset(){this.chunks.length=0,this.dataLength=0}}function C1(n,e){const t=new Uint8Array(e);let r=0;for(let i=0;i<n.length;i++){const s=n[i];t.set(s,r),r+=s.length}return t}function w1(){return typeof __HLS_WORKER_BUNDLE__=="function"}function k1(){const n=new self.Blob([`var exports={};var module={exports:exports};function define(f){f()};define.amd=true;(${__HLS_WORKER_BUNDLE__.toString()})(true);`],{type:"text/javascript"}),e=self.URL.createObjectURL(n);return{worker:new self.Worker(e),objectURL:e}}function L1(n){const e=new self.URL(n,self.location.href).href;return{worker:new self.Worker(e),scriptURL:e}}function tn(n="",e=9e4){return{type:n,id:-1,pid:-1,inputTimeScale:e,sequenceNumber:-1,samples:[],dropped:0}}class Rl{constructor(){this._audioTrack=void 0,this._id3Track=void 0,this.frameIndex=0,this.cachedData=null,this.basePTS=null,this.initPTS=null,this.lastPTS=null}resetInitSegment(e,t,r,i){this._id3Track={type:"id3",id:3,pid:-1,inputTimeScale:9e4,sequenceNumber:0,samples:[],dropped:0}}resetTimeStamp(e){this.initPTS=e,this.resetContiguity()}resetContiguity(){this.basePTS=null,this.lastPTS=null,this.frameIndex=0}canParse(e,t){return!1}appendFrame(e,t,r){}demux(e,t){this.cachedData&&(e=Nt(this.cachedData,e),this.cachedData=null);let r=Pi(e,0),i=r?r.length:0,s;const o=this._audioTrack,a=this._id3Track,l=r?Sl(r):void 0,c=e.length;for((this.basePTS===null||this.frameIndex===0&&pe(l))&&(this.basePTS=R1(l,t,this.initPTS),this.lastPTS=this.basePTS),this.lastPTS===null&&(this.lastPTS=this.basePTS),r&&r.length>0&&a.samples.push({pts:this.lastPTS,dts:this.lastPTS,data:r,type:Gt.audioId3,duration:Number.POSITIVE_INFINITY});i<c;){if(this.canParse(e,i)){const d=this.appendFrame(o,e,i);d?(this.frameIndex++,this.lastPTS=d.sample.pts,i+=d.length,s=i):i=c}else JE(e,i)?(r=Pi(e,i),a.samples.push({pts:this.lastPTS,dts:this.lastPTS,data:r,type:Gt.audioId3,duration:Number.POSITIVE_INFINITY}),i+=r.length,s=i):i++;if(i===c&&s!==c){const d=Xn(e,s);this.cachedData?this.cachedData=Nt(this.cachedData,d):this.cachedData=d}}return{audioTrack:o,videoTrack:tn(),id3Track:a,textTrack:tn()}}demuxSampleAes(e,t,r){return Promise.reject(new Error(`[${this}] This demuxer does not support Sample-AES decryption`))}flush(e){const t=this.cachedData;return t&&(this.cachedData=null,this.demux(t,0)),{audioTrack:this._audioTrack,videoTrack:tn(),id3Track:this._id3Track,textTrack:tn()}}destroy(){}}const R1=(n,e,t)=>{if(pe(n))return n*90;const r=t?t.baseTime*9e4/t.timescale:0;return e*9e4+r};function I1(n,e,t,r){let i,s,o,a;const l=navigator.userAgent.toLowerCase(),c=r,d=[96e3,88200,64e3,48e3,44100,32e3,24e3,22050,16e3,12e3,11025,8e3,7350];i=((e[t+2]&192)>>>6)+1;const u=(e[t+2]&60)>>>2;if(u>d.length-1){const h=new Error(`invalid ADTS sampling index:${u}`);n.emit(T.ERROR,T.ERROR,{type:Le.MEDIA_ERROR,details:$.FRAG_PARSING_ERROR,fatal:!0,error:h,reason:h.message});return}return o=(e[t+2]&1)<<2,o|=(e[t+3]&192)>>>6,B.log(`manifest codec:${r}, ADTS type:${i}, samplingIndex:${u}`),/firefox/i.test(l)?u>=6?(i=5,a=new Array(4),s=u-3):(i=2,a=new Array(2),s=u):l.indexOf("android")!==-1?(i=2,a=new Array(2),s=u):(i=5,a=new Array(4),r&&(r.indexOf("mp4a.40.29")!==-1||r.indexOf("mp4a.40.5")!==-1)||!r&&u>=6?s=u-3:((r&&r.indexOf("mp4a.40.2")!==-1&&(u>=6&&o===1||/vivaldi/i.test(l))||!r&&o===1)&&(i=2,a=new Array(2)),s=u)),a[0]=i<<3,a[0]|=(u&14)>>1,a[1]|=(u&1)<<7,a[1]|=o<<3,i===5&&(a[1]|=(s&14)>>1,a[2]=(s&1)<<7,a[2]|=8,a[3]=0),{config:a,samplerate:d[u],channelCount:o,codec:"mp4a.40."+i,manifestCodec:c}}function $f(n,e){return n[e]===255&&(n[e+1]&246)===240}function Hf(n,e){return n[e+1]&1?7:9}function Il(n,e){return(n[e+3]&3)<<11|n[e+4]<<3|(n[e+5]&224)>>>5}function _1(n,e){return e+5<n.length}function Ks(n,e){return e+1<n.length&&$f(n,e)}function D1(n,e){return _1(n,e)&&$f(n,e)&&Il(n,e)<=n.length-e}function P1(n,e){if(Ks(n,e)){const t=Hf(n,e);if(e+t>=n.length)return!1;const r=Il(n,e);if(r<=t)return!1;const i=e+r;return i===n.length||Ks(n,i)}return!1}function Gf(n,e,t,r,i){if(!n.samplerate){const s=I1(e,t,r,i);if(!s)return;n.config=s.config,n.samplerate=s.samplerate,n.channelCount=s.channelCount,n.codec=s.codec,n.manifestCodec=s.manifestCodec,B.log(`parsed codec:${n.codec}, rate:${s.samplerate}, channels:${s.channelCount}`)}}function Kf(n){return 1024*9e4/n}function B1(n,e){const t=Hf(n,e);if(e+t<=n.length){const r=Il(n,e)-t;if(r>0)return{headerLength:t,frameLength:r}}}function zf(n,e,t,r,i){const s=Kf(n.samplerate),o=r+i*s,a=B1(e,t);let l;if(a){const{frameLength:u,headerLength:h}=a,g=h+u,y=Math.max(0,t+g-e.length);y?(l=new Uint8Array(g-h),l.set(e.subarray(t+h,e.length),0)):l=e.subarray(t+h,t+g);const b={unit:l,pts:o};return y||n.samples.push(b),{sample:b,length:g,missing:y}}const c=e.length-t;return l=new Uint8Array(c),l.set(e.subarray(t,e.length),0),{sample:{unit:l,pts:o},length:c,missing:-1}}let os=null;const O1=[32,64,96,128,160,192,224,256,288,320,352,384,416,448,32,48,56,64,80,96,112,128,160,192,224,256,320,384,32,40,48,56,64,80,96,112,128,160,192,224,256,320,32,48,56,64,80,96,112,128,144,160,176,192,224,256,8,16,24,32,40,48,56,64,80,96,112,128,144,160],F1=[44100,48e3,32e3,22050,24e3,16e3,11025,12e3,8e3],M1=[[0,72,144,12],[0,0,0,0],[0,72,144,12],[0,144,144,12]],N1=[0,1,1,4];function jf(n,e,t,r,i){if(t+24>e.length)return;const s=qf(e,t);if(s&&t+s.frameLength<=e.length){const o=s.samplesPerFrame*9e4/s.sampleRate,a=r+i*o,l={unit:e.subarray(t,t+s.frameLength),pts:a,dts:a};return n.config=[],n.channelCount=s.channelCount,n.samplerate=s.sampleRate,n.samples.push(l),{sample:l,length:s.frameLength,missing:0}}}function qf(n,e){const t=n[e+1]>>3&3,r=n[e+1]>>1&3,i=n[e+2]>>4&15,s=n[e+2]>>2&3;if(t!==1&&i!==0&&i!==15&&s!==3){const o=n[e+2]>>1&1,a=n[e+3]>>6,l=t===3?3-r:r===3?3:4,c=O1[l*14+i-1]*1e3,u=F1[(t===3?0:t===2?1:2)*3+s],h=a===3?1:2,g=M1[t][r],y=N1[r],b=g*8*y,E=Math.floor(g*c/u+o)*y;if(os===null){const R=(navigator.userAgent||"").match(/Chrome\/(\d+)/i);os=R?parseInt(R[1]):0}return!!os&&os<=87&&r===2&&c>=224e3&&a===0&&(n[e+3]=n[e+3]|128),{sampleRate:u,channelCount:h,frameLength:E,samplesPerFrame:b}}}function _l(n,e){return n[e]===255&&(n[e+1]&224)===224&&(n[e+1]&6)!==0}function Vf(n,e){return e+1<n.length&&_l(n,e)}function U1(n,e){return _l(n,e)&&4<=n.length-e}function Wf(n,e){if(e+1<n.length&&_l(n,e)){const r=qf(n,e);let i=4;r!=null&&r.frameLength&&(i=r.frameLength);const s=e+i;return s===n.length||Vf(n,s)}return!1}class $1 extends Rl{constructor(e,t){super(),this.observer=void 0,this.config=void 0,this.observer=e,this.config=t}resetInitSegment(e,t,r,i){super.resetInitSegment(e,t,r,i),this._audioTrack={container:"audio/adts",type:"audio",id:2,pid:-1,sequenceNumber:0,segmentCodec:"aac",samples:[],manifestCodec:t,duration:i,inputTimeScale:9e4,dropped:0}}static probe(e){if(!e)return!1;const t=Pi(e,0);let r=(t==null?void 0:t.length)||0;if(Wf(e,r))return!1;for(let i=e.length;r<i;r++)if(P1(e,r))return B.log("ADTS sync word found !"),!0;return!1}canParse(e,t){return D1(e,t)}appendFrame(e,t,r){Gf(e,this.observer,t,r,e.manifestCodec);const i=zf(e,t,r,this.basePTS,this.frameIndex);if(i&&i.missing===0)return i}}const H1=/\/emsg[-/]ID3/i;class G1{constructor(e,t){this.remainderData=null,this.timeOffset=0,this.config=void 0,this.videoTrack=void 0,this.audioTrack=void 0,this.id3Track=void 0,this.txtTrack=void 0,this.config=t}resetTimeStamp(){}resetInitSegment(e,t,r,i){const s=this.videoTrack=tn("video",1),o=this.audioTrack=tn("audio",1),a=this.txtTrack=tn("text",1);if(this.id3Track=tn("id3",1),this.timeOffset=0,!(e!=null&&e.byteLength))return;const l=Tf(e);if(l.video){const{id:c,timescale:d,codec:u}=l.video;s.id=c,s.timescale=a.timescale=d,s.codec=u}if(l.audio){const{id:c,timescale:d,codec:u}=l.audio;o.id=c,o.timescale=d,o.codec=u}a.id=Ef.text,s.sampleDuration=0,s.duration=o.duration=i}resetContiguity(){this.remainderData=null}static probe(e){return ax(e)}demux(e,t){this.timeOffset=t;let r=e;const i=this.videoTrack,s=this.txtTrack;if(this.config.progressive){this.remainderData&&(r=Nt(this.remainderData,e));const a=mx(r);this.remainderData=a.remainder,i.samples=a.valid||new Uint8Array}else i.samples=r;const o=this.extractID3Track(i,t);return s.samples=Dd(t,i),{videoTrack:i,audioTrack:this.audioTrack,id3Track:o,textTrack:this.txtTrack}}flush(){const e=this.timeOffset,t=this.videoTrack,r=this.txtTrack;t.samples=this.remainderData||new Uint8Array,this.remainderData=null;const i=this.extractID3Track(t,this.timeOffset);return r.samples=Dd(e,t),{videoTrack:t,audioTrack:tn(),id3Track:i,textTrack:tn()}}extractID3Track(e,t){const r=this.id3Track;if(e.samples.length){const i=Be(e.samples,["emsg"]);i&&i.forEach(s=>{const o=Ax(s);if(H1.test(o.schemeIdUri)){const a=pe(o.presentationTime)?o.presentationTime/o.timeScale:t+o.presentationTimeDelta/o.timeScale;let l=o.eventDuration===4294967295?Number.POSITIVE_INFINITY:o.eventDuration/o.timeScale;l<=.001&&(l=Number.POSITIVE_INFINITY);const c=o.payload;r.samples.push({data:c,len:c.byteLength,dts:a,pts:a,type:Gt.emsg,duration:l})}})}return r}demuxSampleAes(e,t,r){return Promise.reject(new Error("The MP4 demuxer does not support SAMPLE-AES decryption"))}destroy(){}}const Yf=(n,e)=>{let t=0,r=5;e+=r;const i=new Uint32Array(1),s=new Uint32Array(1),o=new Uint8Array(1);for(;r>0;){o[0]=n[e];const a=Math.min(r,8),l=8-a;s[0]=4278190080>>>24+l<<l,i[0]=(o[0]&s[0])>>l,t=t?t<<a|i[0]:i[0],e+=1,r-=a}return t};class K1 extends Rl{constructor(e){super(),this.observer=void 0,this.observer=e}resetInitSegment(e,t,r,i){super.resetInitSegment(e,t,r,i),this._audioTrack={container:"audio/ac-3",type:"audio",id:2,pid:-1,sequenceNumber:0,segmentCodec:"ac3",samples:[],manifestCodec:t,duration:i,inputTimeScale:9e4,dropped:0}}canParse(e,t){return t+64<e.length}appendFrame(e,t,r){const i=Qf(e,t,r,this.basePTS,this.frameIndex);if(i!==-1)return{sample:e.samples[e.samples.length-1],length:i,missing:0}}static probe(e){if(!e)return!1;const t=Pi(e,0);if(!t)return!1;const r=t.length;return e[r]===11&&e[r+1]===119&&Sl(t)!==void 0&&Yf(e,r)<16}}function Qf(n,e,t,r,i){if(t+8>e.length||e[t]!==11||e[t+1]!==119)return-1;const s=e[t+4]>>6;if(s>=3)return-1;const a=[48e3,44100,32e3][s],l=e[t+4]&63,d=[64,69,96,64,70,96,80,87,120,80,88,120,96,104,144,96,105,144,112,121,168,112,122,168,128,139,192,128,140,192,160,174,240,160,175,240,192,208,288,192,209,288,224,243,336,224,244,336,256,278,384,256,279,384,320,348,480,320,349,480,384,417,576,384,418,576,448,487,672,448,488,672,512,557,768,512,558,768,640,696,960,640,697,960,768,835,1152,768,836,1152,896,975,1344,896,976,1344,1024,1114,1536,1024,1115,1536,1152,1253,1728,1152,1254,1728,1280,1393,1920,1280,1394,1920][l*3+s]*2;if(t+d>e.length)return-1;const u=e[t+6]>>5;let h=0;u===2?h+=2:(u&1&&u!==1&&(h+=2),u&4&&(h+=2));const g=(e[t+6]<<8|e[t+7])>>12-h&1,b=[2,1,2,3,3,4,4,5][u]+g,E=e[t+5]>>3,C=e[t+5]&7,w=new Uint8Array([s<<6|E<<1|C>>2,(C&3)<<6|u<<3|g<<2|l>>4,l<<4&224]),R=1536/a*9e4,_=r+i*R,P=e.subarray(t,t+d);return n.config=w,n.channelCount=b,n.samplerate=a,n.samples.push({unit:P,pts:_}),d}class z1{constructor(){this.VideoSample=null}createVideoSample(e,t,r,i){return{key:e,frame:!1,pts:t,dts:r,units:[],debug:i,length:0}}getLastNalUnit(e){var t;let r=this.VideoSample,i;if((!r||r.units.length===0)&&(r=e[e.length-1]),(t=r)!=null&&t.units){const s=r.units;i=s[s.length-1]}return i}pushAccessUnit(e,t){if(e.units.length&&e.frame){if(e.pts===void 0){const r=t.samples,i=r.length;if(i){const s=r[i-1];e.pts=s.pts,e.dts=s.dts}else{t.dropped++;return}}t.samples.push(e)}e.debug.length&&B.log(e.pts+"/"+e.dts+":"+e.debug)}}class su{constructor(e){this.data=void 0,this.bytesAvailable=void 0,this.word=void 0,this.bitsAvailable=void 0,this.data=e,this.bytesAvailable=e.byteLength,this.word=0,this.bitsAvailable=0}loadWord(){const e=this.data,t=this.bytesAvailable,r=e.byteLength-t,i=new Uint8Array(4),s=Math.min(4,t);if(s===0)throw new Error("no bytes available");i.set(e.subarray(r,r+s)),this.word=new DataView(i.buffer).getUint32(0),this.bitsAvailable=s*8,this.bytesAvailable-=s}skipBits(e){let t;e=Math.min(e,this.bytesAvailable*8+this.bitsAvailable),this.bitsAvailable>e?(this.word<<=e,this.bitsAvailable-=e):(e-=this.bitsAvailable,t=e>>3,e-=t<<3,this.bytesAvailable-=t,this.loadWord(),this.word<<=e,this.bitsAvailable-=e)}readBits(e){let t=Math.min(this.bitsAvailable,e);const r=this.word>>>32-t;if(e>32&&B.error("Cannot read more than 32 bits at a time"),this.bitsAvailable-=t,this.bitsAvailable>0)this.word<<=t;else if(this.bytesAvailable>0)this.loadWord();else throw new Error("no bits available");return t=e-t,t>0&&this.bitsAvailable?r<<t|this.readBits(t):r}skipLZ(){let e;for(e=0;e<this.bitsAvailable;++e)if(this.word&2147483648>>>e)return this.word<<=e,this.bitsAvailable-=e,e;return this.loadWord(),e+this.skipLZ()}skipUEG(){this.skipBits(1+this.skipLZ())}skipEG(){this.skipBits(1+this.skipLZ())}readUEG(){const e=this.skipLZ();return this.readBits(e+1)-1}readEG(){const e=this.readUEG();return 1&e?1+e>>>1:-1*(e>>>1)}readBoolean(){return this.readBits(1)===1}readUByte(){return this.readBits(8)}readUShort(){return this.readBits(16)}readUInt(){return this.readBits(32)}skipScalingList(e){let t=8,r=8,i;for(let s=0;s<e;s++)r!==0&&(i=this.readEG(),r=(t+i+256)%256),t=r===0?t:r}readSPS(){let e=0,t=0,r=0,i=0,s,o,a;const l=this.readUByte.bind(this),c=this.readBits.bind(this),d=this.readUEG.bind(this),u=this.readBoolean.bind(this),h=this.skipBits.bind(this),g=this.skipEG.bind(this),y=this.skipUEG.bind(this),b=this.skipScalingList.bind(this);l();const E=l();if(c(5),h(3),l(),y(),E===100||E===110||E===122||E===244||E===44||E===83||E===86||E===118||E===128){const H=d();if(H===3&&h(1),y(),y(),h(1),u())for(o=H!==3?8:12,a=0;a<o;a++)u()&&(a<6?b(16):b(64))}y();const C=d();if(C===0)d();else if(C===1)for(h(1),g(),g(),s=d(),a=0;a<s;a++)g();y(),h(1);const w=d(),R=d(),_=c(1);_===0&&h(1),h(1),u()&&(e=d(),t=d(),r=d(),i=d());let P=[1,1];if(u()&&u())switch(l()){case 1:P=[1,1];break;case 2:P=[12,11];break;case 3:P=[10,11];break;case 4:P=[16,11];break;case 5:P=[40,33];break;case 6:P=[24,11];break;case 7:P=[20,11];break;case 8:P=[32,11];break;case 9:P=[80,33];break;case 10:P=[18,11];break;case 11:P=[15,11];break;case 12:P=[64,33];break;case 13:P=[160,99];break;case 14:P=[4,3];break;case 15:P=[3,2];break;case 16:P=[2,1];break;case 255:{P=[l()<<8|l(),l()<<8|l()];break}}return{width:Math.ceil((w+1)*16-e*2-t*2),height:(2-_)*(R+1)*16-(_?2:4)*(r+i),pixelRatio:P}}readSliceType(){return this.readUByte(),this.readUEG(),this.readUEG()}}class j1 extends z1{parseAVCPES(e,t,r,i,s){const o=this.parseAVCNALu(e,r.data);let a=this.VideoSample,l,c=!1;r.data=null,a&&o.length&&!e.audFound&&(this.pushAccessUnit(a,e),a=this.VideoSample=this.createVideoSample(!1,r.pts,r.dts,"")),o.forEach(d=>{var u;switch(d.type){case 1:{let b=!1;l=!0;const E=d.data;if(c&&E.length>4){const C=new su(E).readSliceType();(C===2||C===4||C===7||C===9)&&(b=!0)}if(b){var h;(h=a)!=null&&h.frame&&!a.key&&(this.pushAccessUnit(a,e),a=this.VideoSample=null)}a||(a=this.VideoSample=this.createVideoSample(!0,r.pts,r.dts,"")),a.frame=!0,a.key=b;break}case 5:l=!0,(u=a)!=null&&u.frame&&!a.key&&(this.pushAccessUnit(a,e),a=this.VideoSample=null),a||(a=this.VideoSample=this.createVideoSample(!0,r.pts,r.dts,"")),a.key=!0,a.frame=!0;break;case 6:{l=!0,wf(d.data,1,r.pts,t.samples);break}case 7:{var g,y;l=!0,c=!0;const b=d.data,C=new su(b).readSPS();if(!e.sps||e.width!==C.width||e.height!==C.height||((g=e.pixelRatio)==null?void 0:g[0])!==C.pixelRatio[0]||((y=e.pixelRatio)==null?void 0:y[1])!==C.pixelRatio[1]){e.width=C.width,e.height=C.height,e.pixelRatio=C.pixelRatio,e.sps=[b],e.duration=s;const w=b.subarray(1,4);let R="avc1.";for(let _=0;_<3;_++){let P=w[_].toString(16);P.length<2&&(P="0"+P),R+=P}e.codec=R}break}case 8:l=!0,e.pps=[d.data];break;case 9:l=!0,e.audFound=!0,a&&this.pushAccessUnit(a,e),a=this.VideoSample=this.createVideoSample(!1,r.pts,r.dts,"");break;case 12:l=!0;break;default:l=!1,a&&(a.debug+="unknown NAL "+d.type+" ");break}a&&l&&a.units.push(d)}),i&&a&&(this.pushAccessUnit(a,e),this.VideoSample=null)}parseAVCNALu(e,t){const r=t.byteLength;let i=e.naluState||0;const s=i,o=[];let a=0,l,c,d,u=-1,h=0;for(i===-1&&(u=0,h=t[0]&31,i=0,a=1);a<r;){if(l=t[a++],!i){i=l?0:1;continue}if(i===1){i=l?0:2;continue}if(!l)i=3;else if(l===1){if(c=a-i-1,u>=0){const g={data:t.subarray(u,c),type:h};o.push(g)}else{const g=this.getLastNalUnit(e.samples);g&&(s&&a<=4-s&&g.state&&(g.data=g.data.subarray(0,g.data.byteLength-s)),c>0&&(g.data=Nt(g.data,t.subarray(0,c)),g.state=0))}a<r?(d=t[a]&31,u=a,h=d,i=0):i=-1}else i=0}if(u>=0&&i>=0){const g={data:t.subarray(u,r),type:h,state:i};o.push(g)}if(o.length===0){const g=this.getLastNalUnit(e.samples);g&&(g.data=Nt(g.data,t))}return e.naluState=i,o}}class q1{constructor(e,t,r){this.keyData=void 0,this.decrypter=void 0,this.keyData=r,this.decrypter=new kl(t,{removePKCS7Padding:!1})}decryptBuffer(e){return this.decrypter.decrypt(e,this.keyData.key.buffer,this.keyData.iv.buffer)}decryptAacSample(e,t,r){const i=e[t].unit;if(i.length<=16)return;const s=i.subarray(16,i.length-i.length%16),o=s.buffer.slice(s.byteOffset,s.byteOffset+s.length);this.decryptBuffer(o).then(a=>{const l=new Uint8Array(a);i.set(l,16),this.decrypter.isSync()||this.decryptAacSamples(e,t+1,r)})}decryptAacSamples(e,t,r){for(;;t++){if(t>=e.length){r();return}if(!(e[t].unit.length<32)&&(this.decryptAacSample(e,t,r),!this.decrypter.isSync()))return}}getAvcEncryptedData(e){const t=Math.floor((e.length-48)/160)*16+16,r=new Int8Array(t);let i=0;for(let s=32;s<e.length-16;s+=160,i+=16)r.set(e.subarray(s,s+16),i);return r}getAvcDecryptedUnit(e,t){const r=new Uint8Array(t);let i=0;for(let s=32;s<e.length-16;s+=160,i+=16)e.set(r.subarray(i,i+16),s);return e}decryptAvcSample(e,t,r,i,s){const o=kf(s.data),a=this.getAvcEncryptedData(o);this.decryptBuffer(a.buffer).then(l=>{s.data=this.getAvcDecryptedUnit(o,l),this.decrypter.isSync()||this.decryptAvcSamples(e,t,r+1,i)})}decryptAvcSamples(e,t,r,i){if(e instanceof Uint8Array)throw new Error("Cannot decrypt samples of type Uint8Array");for(;;t++,r=0){if(t>=e.length){i();return}const s=e[t].units;for(;!(r>=s.length);r++){const o=s[r];if(!(o.data.length<=48||o.type!==1&&o.type!==5)&&(this.decryptAvcSample(e,t,r,i,o),!this.decrypter.isSync()))return}}}}const pt=188;class _n{constructor(e,t,r){this.observer=void 0,this.config=void 0,this.typeSupported=void 0,this.sampleAes=null,this.pmtParsed=!1,this.audioCodec=void 0,this.videoCodec=void 0,this._duration=0,this._pmtId=-1,this._videoTrack=void 0,this._audioTrack=void 0,this._id3Track=void 0,this._txtTrack=void 0,this.aacOverFlow=null,this.remainderData=null,this.videoParser=void 0,this.observer=e,this.config=t,this.typeSupported=r,this.videoParser=new j1}static probe(e){const t=_n.syncOffset(e);return t>0&&B.warn(`MPEG2-TS detected but first sync word found @ offset ${t}`),t!==-1}static syncOffset(e){const t=e.length;let r=Math.min(pt*5,t-pt)+1,i=0;for(;i<r;){let s=!1,o=-1,a=0;for(let l=i;l<t;l+=pt)if(e[l]===71&&(t-l===pt||e[l+pt]===71)){if(a++,o===-1&&(o=l,o!==0&&(r=Math.min(o+pt*99,e.length-pt)+1)),s||(s=Oa(e,l)===0),s&&a>1&&(o===0&&a>2||l+pt>r))return o}else{if(a)return-1;break}i++}return-1}static createTrack(e,t){return{container:e==="video"||e==="audio"?"video/mp2t":void 0,type:e,id:Ef[e],pid:-1,inputTimeScale:9e4,sequenceNumber:0,samples:[],dropped:0,duration:e==="audio"?t:void 0}}resetInitSegment(e,t,r,i){this.pmtParsed=!1,this._pmtId=-1,this._videoTrack=_n.createTrack("video"),this._audioTrack=_n.createTrack("audio",i),this._id3Track=_n.createTrack("id3"),this._txtTrack=_n.createTrack("text"),this._audioTrack.segmentCodec="aac",this.aacOverFlow=null,this.remainderData=null,this.audioCodec=t,this.videoCodec=r,this._duration=i}resetTimeStamp(){}resetContiguity(){const{_audioTrack:e,_videoTrack:t,_id3Track:r}=this;e&&(e.pesData=null),t&&(t.pesData=null),r&&(r.pesData=null),this.aacOverFlow=null,this.remainderData=null}demux(e,t,r=!1,i=!1){r||(this.sampleAes=null);let s;const o=this._videoTrack,a=this._audioTrack,l=this._id3Track,c=this._txtTrack;let d=o.pid,u=o.pesData,h=a.pid,g=l.pid,y=a.pesData,b=l.pesData,E=null,C=this.pmtParsed,w=this._pmtId,R=e.length;if(this.remainderData&&(e=Nt(this.remainderData,e),R=e.length,this.remainderData=null),R<pt&&!i)return this.remainderData=e,{audioTrack:a,videoTrack:o,id3Track:l,textTrack:c};const _=Math.max(0,_n.syncOffset(e));R-=(R-_)%pt,R<e.byteLength&&!i&&(this.remainderData=new Uint8Array(e.buffer,R,e.buffer.byteLength-R));let P=0;for(let U=_;U<R;U+=pt)if(e[U]===71){const z=!!(e[U+1]&64),Q=Oa(e,U),F=(e[U+3]&48)>>4;let Y;if(F>1){if(Y=U+5+e[U+4],Y===U+pt)continue}else Y=U+4;switch(Q){case d:z&&(u&&(s=cr(u))&&this.videoParser.parseAVCPES(o,c,s,!1,this._duration),u={data:[],size:0}),u&&(u.data.push(e.subarray(Y,U+pt)),u.size+=U+pt-Y);break;case h:if(z){if(y&&(s=cr(y)))switch(a.segmentCodec){case"aac":this.parseAACPES(a,s);break;case"mp3":this.parseMPEGPES(a,s);break;case"ac3":this.parseAC3PES(a,s);break}y={data:[],size:0}}y&&(y.data.push(e.subarray(Y,U+pt)),y.size+=U+pt-Y);break;case g:z&&(b&&(s=cr(b))&&this.parseID3PES(l,s),b={data:[],size:0}),b&&(b.data.push(e.subarray(Y,U+pt)),b.size+=U+pt-Y);break;case 0:z&&(Y+=e[Y]+1),w=this._pmtId=V1(e,Y);break;case w:{z&&(Y+=e[Y]+1);const Ae=W1(e,Y,this.typeSupported,r);d=Ae.videoPid,d>0&&(o.pid=d,o.segmentCodec=Ae.segmentVideoCodec),h=Ae.audioPid,h>0&&(a.pid=h,a.segmentCodec=Ae.segmentAudioCodec),g=Ae.id3Pid,g>0&&(l.pid=g),E!==null&&!C&&(B.warn(`MPEG-TS PMT found at ${U} after unknown PID '${E}'. Backtracking to sync byte @${_} to parse all TS packets.`),E=null,U=_-188),C=this.pmtParsed=!0;break}case 17:case 8191:break;default:E=Q;break}}else P++;if(P>0){const U=new Error(`Found ${P} TS packet/s that do not start with 0x47`);this.observer.emit(T.ERROR,T.ERROR,{type:Le.MEDIA_ERROR,details:$.FRAG_PARSING_ERROR,fatal:!1,error:U,reason:U.message})}o.pesData=u,a.pesData=y,l.pesData=b;const H={audioTrack:a,videoTrack:o,id3Track:l,textTrack:c};return i&&this.extractRemainingSamples(H),H}flush(){const{remainderData:e}=this;this.remainderData=null;let t;return e?t=this.demux(e,-1,!1,!0):t={videoTrack:this._videoTrack,audioTrack:this._audioTrack,id3Track:this._id3Track,textTrack:this._txtTrack},this.extractRemainingSamples(t),this.sampleAes?this.decrypt(t,this.sampleAes):t}extractRemainingSamples(e){const{audioTrack:t,videoTrack:r,id3Track:i,textTrack:s}=e,o=r.pesData,a=t.pesData,l=i.pesData;let c;if(o&&(c=cr(o))?(this.videoParser.parseAVCPES(r,s,c,!0,this._duration),r.pesData=null):r.pesData=o,a&&(c=cr(a))){switch(t.segmentCodec){case"aac":this.parseAACPES(t,c);break;case"mp3":this.parseMPEGPES(t,c);break;case"ac3":this.parseAC3PES(t,c);break}t.pesData=null}else a!=null&&a.size&&B.log("last AAC PES packet truncated,might overlap between fragments"),t.pesData=a;l&&(c=cr(l))?(this.parseID3PES(i,c),i.pesData=null):i.pesData=l}demuxSampleAes(e,t,r){const i=this.demux(e,r,!0,!this.config.progressive),s=this.sampleAes=new q1(this.observer,this.config,t);return this.decrypt(i,s)}decrypt(e,t){return new Promise(r=>{const{audioTrack:i,videoTrack:s}=e;i.samples&&i.segmentCodec==="aac"?t.decryptAacSamples(i.samples,0,()=>{s.samples?t.decryptAvcSamples(s.samples,0,0,()=>{r(e)}):r(e)}):s.samples&&t.decryptAvcSamples(s.samples,0,0,()=>{r(e)})})}destroy(){this._duration=0}parseAACPES(e,t){let r=0;const i=this.aacOverFlow;let s=t.data;if(i){this.aacOverFlow=null;const u=i.missing,h=i.sample.unit.byteLength;if(u===-1)s=Nt(i.sample.unit,s);else{const g=h-u;i.sample.unit.set(s.subarray(0,u),g),e.samples.push(i.sample),r=i.missing}}let o,a;for(o=r,a=s.length;o<a-1&&!Ks(s,o);o++);if(o!==r){let u;const h=o<a-1;h?u=`AAC PES did not start with ADTS header,offset:${o}`:u="No ADTS header found in AAC PES";const g=new Error(u);if(B.warn(`parsing error: ${u}`),this.observer.emit(T.ERROR,T.ERROR,{type:Le.MEDIA_ERROR,details:$.FRAG_PARSING_ERROR,fatal:!1,levelRetry:h,error:g,reason:u}),!h)return}Gf(e,this.observer,s,o,this.audioCodec);let l;if(t.pts!==void 0)l=t.pts;else if(i){const u=Kf(e.samplerate);l=i.sample.pts+u}else{B.warn("[tsdemuxer]: AAC PES unknown PTS");return}let c=0,d;for(;o<a;)if(d=zf(e,s,o,l,c),o+=d.length,d.missing){this.aacOverFlow=d;break}else for(c++;o<a-1&&!Ks(s,o);o++);}parseMPEGPES(e,t){const r=t.data,i=r.length;let s=0,o=0;const a=t.pts;if(a===void 0){B.warn("[tsdemuxer]: MPEG PES unknown PTS");return}for(;o<i;)if(Vf(r,o)){const l=jf(e,r,o,a,s);if(l)o+=l.length,s++;else break}else o++}parseAC3PES(e,t){{const r=t.data,i=t.pts;if(i===void 0){B.warn("[tsdemuxer]: AC3 PES unknown PTS");return}const s=r.length;let o=0,a=0,l;for(;a<s&&(l=Qf(e,r,a,i,o++))>0;)a+=l}}parseID3PES(e,t){if(t.pts===void 0){B.warn("[tsdemuxer]: ID3 PES unknown PTS");return}const r=ct({},t,{type:this._videoTrack?Gt.emsg:Gt.audioId3,duration:Number.POSITIVE_INFINITY});e.samples.push(r)}}function Oa(n,e){return((n[e+1]&31)<<8)+n[e+2]}function V1(n,e){return(n[e+10]&31)<<8|n[e+11]}function W1(n,e,t,r){const i={audioPid:-1,videoPid:-1,id3Pid:-1,segmentVideoCodec:"avc",segmentAudioCodec:"aac"},s=(n[e+1]&15)<<8|n[e+2],o=e+3+s-4,a=(n[e+10]&15)<<8|n[e+11];for(e+=12+a;e<o;){const l=Oa(n,e),c=(n[e+3]&15)<<8|n[e+4];switch(n[e]){case 207:if(!r){Wo("ADTS AAC");break}case 15:i.audioPid===-1&&(i.audioPid=l);break;case 21:i.id3Pid===-1&&(i.id3Pid=l);break;case 219:if(!r){Wo("H.264");break}case 27:i.videoPid===-1&&(i.videoPid=l,i.segmentVideoCodec="avc");break;case 3:case 4:!t.mpeg&&!t.mp3?B.log("MPEG audio found, not supported in this browser"):i.audioPid===-1&&(i.audioPid=l,i.segmentAudioCodec="mp3");break;case 193:if(!r){Wo("AC-3");break}case 129:t.ac3?i.audioPid===-1&&(i.audioPid=l,i.segmentAudioCodec="ac3"):B.log("AC-3 audio found, not supported in this browser");break;case 6:if(i.audioPid===-1&&c>0){let d=e+5,u=c;for(;u>2;){switch(n[d]){case 106:t.ac3!==!0?B.log("AC-3 audio found, not supported in this browser for now"):(i.audioPid=l,i.segmentAudioCodec="ac3");break}const g=n[d+1]+2;d+=g,u-=g}}break;case 194:case 135:B.warn("Unsupported EC-3 in M2TS found");break;case 36:B.warn("Unsupported HEVC in M2TS found");break}e+=c+5}return i}function Wo(n){B.log(`${n} with AES-128-CBC encryption found in unencrypted stream`)}function cr(n){let e=0,t,r,i,s,o;const a=n.data;if(!n||n.size===0)return null;for(;a[0].length<19&&a.length>1;)a[0]=Nt(a[0],a[1]),a.splice(1,1);if(t=a[0],(t[0]<<16)+(t[1]<<8)+t[2]===1){if(r=(t[4]<<8)+t[5],r&&r>n.size-6)return null;const c=t[7];c&192&&(s=(t[9]&14)*536870912+(t[10]&255)*4194304+(t[11]&254)*16384+(t[12]&255)*128+(t[13]&254)/2,c&64?(o=(t[14]&14)*536870912+(t[15]&255)*4194304+(t[16]&254)*16384+(t[17]&255)*128+(t[18]&254)/2,s-o>60*9e4&&(B.warn(`${Math.round((s-o)/9e4)}s delta between PTS and DTS, align them`),s=o)):o=s),i=t[8];let d=i+9;if(n.size<=d)return null;n.size-=d;const u=new Uint8Array(n.size);for(let h=0,g=a.length;h<g;h++){t=a[h];let y=t.byteLength;if(d)if(d>y){d-=y;continue}else t=t.subarray(d),y-=d,d=0;u.set(t,e),e+=y}return r&&(r-=i+3),{data:u,pts:s,dts:o,len:r}}return null}class Y1 extends Rl{resetInitSegment(e,t,r,i){super.resetInitSegment(e,t,r,i),this._audioTrack={container:"audio/mpeg",type:"audio",id:2,pid:-1,sequenceNumber:0,segmentCodec:"mp3",samples:[],manifestCodec:t,duration:i,inputTimeScale:9e4,dropped:0}}static probe(e){if(!e)return!1;const t=Pi(e,0);let r=(t==null?void 0:t.length)||0;if(t&&e[r]===11&&e[r+1]===119&&Sl(t)!==void 0&&Yf(e,r)<=16)return!1;for(let i=e.length;r<i;r++)if(Wf(e,r))return B.log("MPEG Audio sync word found !"),!0;return!1}canParse(e,t){return U1(e,t)}appendFrame(e,t,r){if(this.basePTS!==null)return jf(e,t,r,this.basePTS,this.frameIndex)}}class ou{static getSilentFrame(e,t){switch(e){case"mp4a.40.2":if(t===1)return new Uint8Array([0,200,0,128,35,128]);if(t===2)return new Uint8Array([33,0,73,144,2,25,0,35,128]);if(t===3)return new Uint8Array([0,200,0,128,32,132,1,38,64,8,100,0,142]);if(t===4)return new Uint8Array([0,200,0,128,32,132,1,38,64,8,100,0,128,44,128,8,2,56]);if(t===5)return new Uint8Array([0,200,0,128,32,132,1,38,64,8,100,0,130,48,4,153,0,33,144,2,56]);if(t===6)return new Uint8Array([0,200,0,128,32,132,1,38,64,8,100,0,130,48,4,153,0,33,144,2,0,178,0,32,8,224]);break;default:if(t===1)return new Uint8Array([1,64,34,128,163,78,230,128,186,8,0,0,0,28,6,241,193,10,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,94]);if(t===2)return new Uint8Array([1,64,34,128,163,94,230,128,186,8,0,0,0,0,149,0,6,241,161,10,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,94]);if(t===3)return new Uint8Array([1,64,34,128,163,94,230,128,186,8,0,0,0,0,149,0,6,241,161,10,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,94]);break}}}const kn=Math.pow(2,32)-1;class M{static init(){M.types={avc1:[],avcC:[],btrt:[],dinf:[],dref:[],esds:[],ftyp:[],hdlr:[],mdat:[],mdhd:[],mdia:[],mfhd:[],minf:[],moof:[],moov:[],mp4a:[],".mp3":[],dac3:[],"ac-3":[],mvex:[],mvhd:[],pasp:[],sdtp:[],stbl:[],stco:[],stsc:[],stsd:[],stsz:[],stts:[],tfdt:[],tfhd:[],traf:[],trak:[],trun:[],trex:[],tkhd:[],vmhd:[],smhd:[]};let e;for(e in M.types)M.types.hasOwnProperty(e)&&(M.types[e]=[e.charCodeAt(0),e.charCodeAt(1),e.charCodeAt(2),e.charCodeAt(3)]);const t=new Uint8Array([0,0,0,0,0,0,0,0,118,105,100,101,0,0,0,0,0,0,0,0,0,0,0,0,86,105,100,101,111,72,97,110,100,108,101,114,0]),r=new Uint8Array([0,0,0,0,0,0,0,0,115,111,117,110,0,0,0,0,0,0,0,0,0,0,0,0,83,111,117,110,100,72,97,110,100,108,101,114,0]);M.HDLR_TYPES={video:t,audio:r};const i=new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,12,117,114,108,32,0,0,0,1]),s=new Uint8Array([0,0,0,0,0,0,0,0]);M.STTS=M.STSC=M.STCO=s,M.STSZ=new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0]),M.VMHD=new Uint8Array([0,0,0,1,0,0,0,0,0,0,0,0]),M.SMHD=new Uint8Array([0,0,0,0,0,0,0,0]),M.STSD=new Uint8Array([0,0,0,0,0,0,0,1]);const o=new Uint8Array([105,115,111,109]),a=new Uint8Array([97,118,99,49]),l=new Uint8Array([0,0,0,1]);M.FTYP=M.box(M.types.ftyp,o,l,o,a),M.DINF=M.box(M.types.dinf,M.box(M.types.dref,i))}static box(e,...t){let r=8,i=t.length;const s=i;for(;i--;)r+=t[i].byteLength;const o=new Uint8Array(r);for(o[0]=r>>24&255,o[1]=r>>16&255,o[2]=r>>8&255,o[3]=r&255,o.set(e,4),i=0,r=8;i<s;i++)o.set(t[i],r),r+=t[i].byteLength;return o}static hdlr(e){return M.box(M.types.hdlr,M.HDLR_TYPES[e])}static mdat(e){return M.box(M.types.mdat,e)}static mdhd(e,t){t*=e;const r=Math.floor(t/(kn+1)),i=Math.floor(t%(kn+1));return M.box(M.types.mdhd,new Uint8Array([1,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,3,e>>24&255,e>>16&255,e>>8&255,e&255,r>>24,r>>16&255,r>>8&255,r&255,i>>24,i>>16&255,i>>8&255,i&255,85,196,0,0]))}static mdia(e){return M.box(M.types.mdia,M.mdhd(e.timescale,e.duration),M.hdlr(e.type),M.minf(e))}static mfhd(e){return M.box(M.types.mfhd,new Uint8Array([0,0,0,0,e>>24,e>>16&255,e>>8&255,e&255]))}static minf(e){return e.type==="audio"?M.box(M.types.minf,M.box(M.types.smhd,M.SMHD),M.DINF,M.stbl(e)):M.box(M.types.minf,M.box(M.types.vmhd,M.VMHD),M.DINF,M.stbl(e))}static moof(e,t,r){return M.box(M.types.moof,M.mfhd(e),M.traf(r,t))}static moov(e){let t=e.length;const r=[];for(;t--;)r[t]=M.trak(e[t]);return M.box.apply(null,[M.types.moov,M.mvhd(e[0].timescale,e[0].duration)].concat(r).concat(M.mvex(e)))}static mvex(e){let t=e.length;const r=[];for(;t--;)r[t]=M.trex(e[t]);return M.box.apply(null,[M.types.mvex,...r])}static mvhd(e,t){t*=e;const r=Math.floor(t/(kn+1)),i=Math.floor(t%(kn+1)),s=new Uint8Array([1,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,3,e>>24&255,e>>16&255,e>>8&255,e&255,r>>24,r>>16&255,r>>8&255,r&255,i>>24,i>>16&255,i>>8&255,i&255,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,64,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,255,255,255,255]);return M.box(M.types.mvhd,s)}static sdtp(e){const t=e.samples||[],r=new Uint8Array(4+t.length);let i,s;for(i=0;i<t.length;i++)s=t[i].flags,r[i+4]=s.dependsOn<<4|s.isDependedOn<<2|s.hasRedundancy;return M.box(M.types.sdtp,r)}static stbl(e){return M.box(M.types.stbl,M.stsd(e),M.box(M.types.stts,M.STTS),M.box(M.types.stsc,M.STSC),M.box(M.types.stsz,M.STSZ),M.box(M.types.stco,M.STCO))}static avc1(e){let t=[],r=[],i,s,o;for(i=0;i<e.sps.length;i++)s=e.sps[i],o=s.byteLength,t.push(o>>>8&255),t.push(o&255),t=t.concat(Array.prototype.slice.call(s));for(i=0;i<e.pps.length;i++)s=e.pps[i],o=s.byteLength,r.push(o>>>8&255),r.push(o&255),r=r.concat(Array.prototype.slice.call(s));const a=M.box(M.types.avcC,new Uint8Array([1,t[3],t[4],t[5],255,224|e.sps.length].concat(t).concat([e.pps.length]).concat(r))),l=e.width,c=e.height,d=e.pixelRatio[0],u=e.pixelRatio[1];return M.box(M.types.avc1,new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,l>>8&255,l&255,c>>8&255,c&255,0,72,0,0,0,72,0,0,0,0,0,0,0,1,18,100,97,105,108,121,109,111,116,105,111,110,47,104,108,115,46,106,115,0,0,0,0,0,0,0,0,0,0,0,0,0,0,24,17,17]),a,M.box(M.types.btrt,new Uint8Array([0,28,156,128,0,45,198,192,0,45,198,192])),M.box(M.types.pasp,new Uint8Array([d>>24,d>>16&255,d>>8&255,d&255,u>>24,u>>16&255,u>>8&255,u&255])))}static esds(e){const t=e.config.length;return new Uint8Array([0,0,0,0,3,23+t,0,1,0,4,15+t,64,21,0,0,0,0,0,0,0,0,0,0,0,5].concat([t]).concat(e.config).concat([6,1,2]))}static audioStsd(e){const t=e.samplerate;return new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,e.channelCount,0,16,0,0,0,0,t>>8&255,t&255,0,0])}static mp4a(e){return M.box(M.types.mp4a,M.audioStsd(e),M.box(M.types.esds,M.esds(e)))}static mp3(e){return M.box(M.types[".mp3"],M.audioStsd(e))}static ac3(e){return M.box(M.types["ac-3"],M.audioStsd(e),M.box(M.types.dac3,e.config))}static stsd(e){return e.type==="audio"?e.segmentCodec==="mp3"&&e.codec==="mp3"?M.box(M.types.stsd,M.STSD,M.mp3(e)):e.segmentCodec==="ac3"?M.box(M.types.stsd,M.STSD,M.ac3(e)):M.box(M.types.stsd,M.STSD,M.mp4a(e)):M.box(M.types.stsd,M.STSD,M.avc1(e))}static tkhd(e){const t=e.id,r=e.duration*e.timescale,i=e.width,s=e.height,o=Math.floor(r/(kn+1)),a=Math.floor(r%(kn+1));return M.box(M.types.tkhd,new Uint8Array([1,0,0,7,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,3,t>>24&255,t>>16&255,t>>8&255,t&255,0,0,0,0,o>>24,o>>16&255,o>>8&255,o&255,a>>24,a>>16&255,a>>8&255,a&255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,64,0,0,0,i>>8&255,i&255,0,0,s>>8&255,s&255,0,0]))}static traf(e,t){const r=M.sdtp(e),i=e.id,s=Math.floor(t/(kn+1)),o=Math.floor(t%(kn+1));return M.box(M.types.traf,M.box(M.types.tfhd,new Uint8Array([0,0,0,0,i>>24,i>>16&255,i>>8&255,i&255])),M.box(M.types.tfdt,new Uint8Array([1,0,0,0,s>>24,s>>16&255,s>>8&255,s&255,o>>24,o>>16&255,o>>8&255,o&255])),M.trun(e,r.length+16+20+8+16+8+8),r)}static trak(e){return e.duration=e.duration||4294967295,M.box(M.types.trak,M.tkhd(e),M.mdia(e))}static trex(e){const t=e.id;return M.box(M.types.trex,new Uint8Array([0,0,0,0,t>>24,t>>16&255,t>>8&255,t&255,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1]))}static trun(e,t){const r=e.samples||[],i=r.length,s=12+16*i,o=new Uint8Array(s);let a,l,c,d,u,h;for(t+=8+s,o.set([e.type==="video"?1:0,0,15,1,i>>>24&255,i>>>16&255,i>>>8&255,i&255,t>>>24&255,t>>>16&255,t>>>8&255,t&255],0),a=0;a<i;a++)l=r[a],c=l.duration,d=l.size,u=l.flags,h=l.cts,o.set([c>>>24&255,c>>>16&255,c>>>8&255,c&255,d>>>24&255,d>>>16&255,d>>>8&255,d&255,u.isLeading<<2|u.dependsOn,u.isDependedOn<<6|u.hasRedundancy<<4|u.paddingValue<<1|u.isNonSync,u.degradPrio&61440,u.degradPrio&15,h>>>24&255,h>>>16&255,h>>>8&255,h&255],12+16*a);return M.box(M.types.trun,o)}static initSegment(e){M.types||M.init();const t=M.moov(e);return Nt(M.FTYP,t)}}M.types=void 0;M.HDLR_TYPES=void 0;M.STTS=void 0;M.STSC=void 0;M.STCO=void 0;M.STSZ=void 0;M.VMHD=void 0;M.SMHD=void 0;M.STSD=void 0;M.FTYP=void 0;M.DINF=void 0;const Xf=9e4;function Dl(n,e,t=1,r=!1){const i=n*e*t;return r?Math.round(i):i}function Q1(n,e,t=1,r=!1){return Dl(n,e,1/t,r)}function hi(n,e=!1){return Dl(n,1e3,1/Xf,e)}function X1(n,e=1){return Dl(n,Xf,1/e)}const J1=10*1e3,au=1024,Z1=1152,eS=1536;let dr=null,Yo=null;class Es{constructor(e,t,r,i=""){if(this.observer=void 0,this.config=void 0,this.typeSupported=void 0,this.ISGenerated=!1,this._initPTS=null,this._initDTS=null,this.nextAvcDts=null,this.nextAudioPts=null,this.videoSampleDuration=null,this.isAudioContiguous=!1,this.isVideoContiguous=!1,this.videoTrackConfig=void 0,this.observer=e,this.config=t,this.typeSupported=r,this.ISGenerated=!1,dr===null){const o=(navigator.userAgent||"").match(/Chrome\/(\d+)/i);dr=o?parseInt(o[1]):0}if(Yo===null){const s=navigator.userAgent.match(/Safari\/(\d+)/i);Yo=s?parseInt(s[1]):0}}destroy(){this.config=this.videoTrackConfig=this._initPTS=this._initDTS=null}resetTimeStamp(e){B.log("[mp4-remuxer]: initPTS & initDTS reset"),this._initPTS=this._initDTS=e}resetNextTimestamp(){B.log("[mp4-remuxer]: reset next timestamp"),this.isVideoContiguous=!1,this.isAudioContiguous=!1}resetInitSegment(){B.log("[mp4-remuxer]: ISGenerated flag reset"),this.ISGenerated=!1,this.videoTrackConfig=void 0}getVideoStartPts(e){let t=!1;const r=e.reduce((i,s)=>{const o=s.pts-i;return o<-4294967296?(t=!0,Bt(i,s.pts)):o>0?i:s.pts},e[0].pts);return t&&B.debug("PTS rollover detected"),r}remux(e,t,r,i,s,o,a,l){let c,d,u,h,g,y,b=s,E=s;const C=e.pid>-1,w=t.pid>-1,R=t.samples.length,_=e.samples.length>0,P=a&&R>0||R>1;if((!C||_)&&(!w||P)||this.ISGenerated||a){if(this.ISGenerated){var U,z,Q,F;const Se=this.videoTrackConfig;Se&&(t.width!==Se.width||t.height!==Se.height||((U=t.pixelRatio)==null?void 0:U[0])!==((z=Se.pixelRatio)==null?void 0:z[0])||((Q=t.pixelRatio)==null?void 0:Q[1])!==((F=Se.pixelRatio)==null?void 0:F[1]))&&this.resetInitSegment()}else u=this.generateIS(e,t,s,o);const Y=this.isVideoContiguous;let Ae=-1,te;if(P&&(Ae=tS(t.samples),!Y&&this.config.forceKeyFrameOnDiscontinuity))if(y=!0,Ae>0){B.warn(`[mp4-remuxer]: Dropped ${Ae} out of ${R} video samples due to a missing keyframe`);const Se=this.getVideoStartPts(t.samples);t.samples=t.samples.slice(Ae),t.dropped+=Ae,E+=(t.samples[0].pts-Se)/t.inputTimeScale,te=E}else Ae===-1&&(B.warn(`[mp4-remuxer]: No keyframe found out of ${R} video samples`),y=!1);if(this.ISGenerated){if(_&&P){const Se=this.getVideoStartPts(t.samples),ne=(Bt(e.samples[0].pts,Se)-Se)/t.inputTimeScale;b+=Math.max(0,ne),E+=Math.max(0,-ne)}if(_){if(e.samplerate||(B.warn("[mp4-remuxer]: regenerate InitSegment as audio detected"),u=this.generateIS(e,t,s,o)),d=this.remuxAudio(e,b,this.isAudioContiguous,o,w||P||l===ke.AUDIO?E:void 0),P){const Se=d?d.endPTS-d.startPTS:0;t.inputTimeScale||(B.warn("[mp4-remuxer]: regenerate InitSegment as video detected"),u=this.generateIS(e,t,s,o)),c=this.remuxVideo(t,E,Y,Se)}}else P&&(c=this.remuxVideo(t,E,Y,0));c&&(c.firstKeyFrame=Ae,c.independent=Ae!==-1,c.firstKeyFramePTS=te)}}return this.ISGenerated&&this._initPTS&&this._initDTS&&(r.samples.length&&(g=Jf(r,s,this._initPTS,this._initDTS)),i.samples.length&&(h=Zf(i,s,this._initPTS))),{audio:d,video:c,initSegment:u,independent:y,text:h,id3:g}}generateIS(e,t,r,i){const s=e.samples,o=t.samples,a=this.typeSupported,l={},c=this._initPTS;let d=!c||i,u="audio/mp4",h,g,y;if(d&&(h=g=1/0),e.config&&s.length){switch(e.timescale=e.samplerate,e.segmentCodec){case"mp3":a.mpeg?(u="audio/mpeg",e.codec=""):a.mp3&&(e.codec="mp3");break;case"ac3":e.codec="ac-3";break}l.audio={id:"audio",container:u,codec:e.codec,initSegment:e.segmentCodec==="mp3"&&a.mpeg?new Uint8Array(0):M.initSegment([e]),metadata:{channelCount:e.channelCount}},d&&(y=e.inputTimeScale,!c||y!==c.timescale?h=g=s[0].pts-Math.round(y*r):d=!1)}if(t.sps&&t.pps&&o.length){if(t.timescale=t.inputTimeScale,l.video={id:"main",container:"video/mp4",codec:t.codec,initSegment:M.initSegment([t]),metadata:{width:t.width,height:t.height}},d)if(y=t.inputTimeScale,!c||y!==c.timescale){const b=this.getVideoStartPts(o),E=Math.round(y*r);g=Math.min(g,Bt(o[0].dts,b)-E),h=Math.min(h,b-E)}else d=!1;this.videoTrackConfig={width:t.width,height:t.height,pixelRatio:t.pixelRatio}}if(Object.keys(l).length)return this.ISGenerated=!0,d?(this._initPTS={baseTime:h,timescale:y},this._initDTS={baseTime:g,timescale:y}):h=y=void 0,{tracks:l,initPTS:h,timescale:y}}remuxVideo(e,t,r,i){const s=e.inputTimeScale,o=e.samples,a=[],l=o.length,c=this._initPTS;let d=this.nextAvcDts,u=8,h=this.videoSampleDuration,g,y,b=Number.POSITIVE_INFINITY,E=Number.NEGATIVE_INFINITY,C=!1;if(!r||d===null){const q=t*s,ae=o[0].pts-Bt(o[0].dts,o[0].pts);dr&&d!==null&&Math.abs(q-ae-d)<15e3?r=!0:d=q-ae}const w=c.baseTime*s/c.timescale;for(let q=0;q<l;q++){const ae=o[q];ae.pts=Bt(ae.pts-w,d),ae.dts=Bt(ae.dts-w,d),ae.dts<o[q>0?q-1:q].dts&&(C=!0)}C&&o.sort(function(q,ae){const Re=q.dts-ae.dts,xe=q.pts-ae.pts;return Re||xe}),g=o[0].dts,y=o[o.length-1].dts;const R=y-g,_=R?Math.round(R/(l-1)):h||e.inputTimeScale/30;if(r){const q=g-d,ae=q>_,Re=q<-1;if((ae||Re)&&(ae?B.warn(`AVC: ${hi(q,!0)} ms (${q}dts) hole between fragments detected at ${t.toFixed(3)}`):B.warn(`AVC: ${hi(-q,!0)} ms (${q}dts) overlapping between fragments detected at ${t.toFixed(3)}`),!Re||d>=o[0].pts||dr)){g=d;const xe=o[0].pts-q;if(ae)o[0].dts=g,o[0].pts=xe;else for(let Fe=0;Fe<o.length&&!(o[Fe].dts>xe);Fe++)o[Fe].dts-=q,o[Fe].pts-=q;B.log(`Video: Initial PTS/DTS adjusted: ${hi(xe,!0)}/${hi(g,!0)}, delta: ${hi(q,!0)} ms`)}}g=Math.max(0,g);let P=0,H=0,U=g;for(let q=0;q<l;q++){const ae=o[q],Re=ae.units,xe=Re.length;let Fe=0;for(let ze=0;ze<xe;ze++)Fe+=Re[ze].data.length;H+=Fe,P+=xe,ae.length=Fe,ae.dts<U?(ae.dts=U,U+=_/4|0||1):U=ae.dts,b=Math.min(ae.pts,b),E=Math.max(ae.pts,E)}y=o[l-1].dts;const z=H+4*P+8;let Q;try{Q=new Uint8Array(z)}catch(q){this.observer.emit(T.ERROR,T.ERROR,{type:Le.MUX_ERROR,details:$.REMUX_ALLOC_ERROR,fatal:!1,error:q,bytes:z,reason:`fail allocating video mdat ${z}`});return}const F=new DataView(Q.buffer);F.setUint32(0,z),Q.set(M.types.mdat,4);let Y=!1,Ae=Number.POSITIVE_INFINITY,te=Number.POSITIVE_INFINITY,Se=Number.NEGATIVE_INFINITY,ve=Number.NEGATIVE_INFINITY;for(let q=0;q<l;q++){const ae=o[q],Re=ae.units;let xe=0;for(let Je=0,Pe=Re.length;Je<Pe;Je++){const K=Re[Je],ce=K.data,re=K.data.byteLength;F.setUint32(u,re),u+=4,Q.set(ce,u),u+=re,xe+=4+re}let Fe;if(q<l-1)h=o[q+1].dts-ae.dts,Fe=o[q+1].pts-ae.pts;else{const Je=this.config,Pe=q>0?ae.dts-o[q-1].dts:_;if(Fe=q>0?ae.pts-o[q-1].pts:_,Je.stretchShortVideoTrack&&this.nextAudioPts!==null){const K=Math.floor(Je.maxBufferHole*s),ce=(i?b+i*s:this.nextAudioPts)-ae.pts;ce>K?(h=ce-Pe,h<0?h=Pe:Y=!0,B.log(`[mp4-remuxer]: It is approximately ${ce/90} ms to the next segment; using duration ${h/90} ms for the last video frame.`)):h=Pe}else h=Pe}const ze=Math.round(ae.pts-ae.dts);Ae=Math.min(Ae,h),Se=Math.max(Se,h),te=Math.min(te,Fe),ve=Math.max(ve,Fe),a.push(new lu(ae.key,h,xe,ze))}if(a.length){if(dr){if(dr<70){const q=a[0].flags;q.dependsOn=2,q.isNonSync=0}}else if(Yo&&ve-te<Se-Ae&&_/Se<.025&&a[0].cts===0){B.warn("Found irregular gaps in sample duration. Using PTS instead of DTS to determine MP4 sample duration.");let q=g;for(let ae=0,Re=a.length;ae<Re;ae++){const xe=q+a[ae].duration,Fe=q+a[ae].cts;if(ae<Re-1){const ze=xe+a[ae+1].cts;a[ae].duration=ze-Fe}else a[ae].duration=ae?a[ae-1].duration:_;a[ae].cts=0,q=xe}}}h=Y||!h?_:h,this.nextAvcDts=d=y+h,this.videoSampleDuration=h,this.isVideoContiguous=!0;const ne=M.moof(e.sequenceNumber++,g,ct({},e,{samples:a})),ye="video",me={data1:ne,data2:Q,startPTS:b/s,endPTS:(E+h)/s,startDTS:g/s,endDTS:d/s,type:ye,hasAudio:!1,hasVideo:!0,nb:a.length,dropped:e.dropped};return e.samples=[],e.dropped=0,me}getSamplesPerFrame(e){switch(e.segmentCodec){case"mp3":return Z1;case"ac3":return eS;default:return au}}remuxAudio(e,t,r,i,s){const o=e.inputTimeScale,a=e.samplerate?e.samplerate:o,l=o/a,c=this.getSamplesPerFrame(e),d=c*l,u=this._initPTS,h=e.segmentCodec==="mp3"&&this.typeSupported.mpeg,g=[],y=s!==void 0;let b=e.samples,E=h?0:8,C=this.nextAudioPts||-1;const w=t*o,R=u.baseTime*o/u.timescale;if(this.isAudioContiguous=r=r||b.length&&C>0&&(i&&Math.abs(w-C)<9e3||Math.abs(Bt(b[0].pts-R,w)-C)<20*d),b.forEach(function(ne){ne.pts=Bt(ne.pts-R,w)}),!r||C<0){if(b=b.filter(ne=>ne.pts>=0),!b.length)return;s===0?C=0:i&&!y?C=Math.max(0,w):C=b[0].pts}if(e.segmentCodec==="aac"){const ne=this.config.maxAudioFramesDrift;for(let ye=0,me=C;ye<b.length;ye++){const q=b[ye],ae=q.pts,Re=ae-me,xe=Math.abs(1e3*Re/o);if(Re<=-ne*d&&y)ye===0&&(B.warn(`Audio frame @ ${(ae/o).toFixed(3)}s overlaps nextAudioPts by ${Math.round(1e3*Re/o)} ms.`),this.nextAudioPts=C=me=ae);else if(Re>=ne*d&&xe<J1&&y){let Fe=Math.round(Re/d);me=ae-Fe*d,me<0&&(Fe--,me+=d),ye===0&&(this.nextAudioPts=C=me),B.warn(`[mp4-remuxer]: Injecting ${Fe} audio frame @ ${(me/o).toFixed(3)}s due to ${Math.round(1e3*Re/o)} ms gap.`);for(let ze=0;ze<Fe;ze++){const Je=Math.max(me,0);let Pe=ou.getSilentFrame(e.manifestCodec||e.codec,e.channelCount);Pe||(B.log("[mp4-remuxer]: Unable to get silent frame for given audio codec; duplicating last frame instead."),Pe=q.unit.subarray()),b.splice(ye,0,{unit:Pe,pts:Je}),me+=d,ye++}}q.pts=me,me+=d}}let _=null,P=null,H,U=0,z=b.length;for(;z--;)U+=b[z].unit.byteLength;for(let ne=0,ye=b.length;ne<ye;ne++){const me=b[ne],q=me.unit;let ae=me.pts;if(P!==null){const xe=g[ne-1];xe.duration=Math.round((ae-P)/l)}else if(r&&e.segmentCodec==="aac"&&(ae=C),_=ae,U>0){U+=E;try{H=new Uint8Array(U)}catch(xe){this.observer.emit(T.ERROR,T.ERROR,{type:Le.MUX_ERROR,details:$.REMUX_ALLOC_ERROR,fatal:!1,error:xe,bytes:U,reason:`fail allocating audio mdat ${U}`});return}h||(new DataView(H.buffer).setUint32(0,U),H.set(M.types.mdat,4))}else return;H.set(q,E);const Re=q.byteLength;E+=Re,g.push(new lu(!0,c,Re,0)),P=ae}const Q=g.length;if(!Q)return;const F=g[g.length-1];this.nextAudioPts=C=P+l*F.duration;const Y=h?new Uint8Array(0):M.moof(e.sequenceNumber++,_/l,ct({},e,{samples:g}));e.samples=[];const Ae=_/o,te=C/o,ve={data1:Y,data2:H,startPTS:Ae,endPTS:te,startDTS:Ae,endDTS:te,type:"audio",hasAudio:!0,hasVideo:!1,nb:Q};return this.isAudioContiguous=!0,ve}remuxEmptyAudio(e,t,r,i){const s=e.inputTimeScale,o=e.samplerate?e.samplerate:s,a=s/o,l=this.nextAudioPts,c=this._initDTS,d=c.baseTime*9e4/c.timescale,u=(l!==null?l:i.startDTS*s)+d,h=i.endDTS*s+d,g=a*au,y=Math.ceil((h-u)/g),b=ou.getSilentFrame(e.manifestCodec||e.codec,e.channelCount);if(B.warn("[mp4-remuxer]: remux empty Audio"),!b){B.trace("[mp4-remuxer]: Unable to remuxEmptyAudio since we were unable to get a silent frame for given audio codec");return}const E=[];for(let C=0;C<y;C++){const w=u+C*g;E.push({unit:b,pts:w,dts:w})}return e.samples=E,this.remuxAudio(e,t,r,!1)}}function Bt(n,e){let t;if(e===null)return n;for(e<n?t=-8589934592:t=8589934592;Math.abs(n-e)>4294967296;)n+=t;return n}function tS(n){for(let e=0;e<n.length;e++)if(n[e].key)return e;return-1}function Jf(n,e,t,r){const i=n.samples.length;if(!i)return;const s=n.inputTimeScale;for(let a=0;a<i;a++){const l=n.samples[a];l.pts=Bt(l.pts-t.baseTime*s/t.timescale,e*s)/s,l.dts=Bt(l.dts-r.baseTime*s/r.timescale,e*s)/s}const o=n.samples;return n.samples=[],{samples:o}}function Zf(n,e,t){const r=n.samples.length;if(!r)return;const i=n.inputTimeScale;for(let o=0;o<r;o++){const a=n.samples[o];a.pts=Bt(a.pts-t.baseTime*i/t.timescale,e*i)/i}n.samples.sort((o,a)=>o.pts-a.pts);const s=n.samples;return n.samples=[],{samples:s}}class lu{constructor(e,t,r,i){this.size=void 0,this.duration=void 0,this.cts=void 0,this.flags=void 0,this.duration=t,this.size=r,this.cts=i,this.flags={isLeading:0,isDependedOn:0,hasRedundancy:0,degradPrio:0,dependsOn:e?2:1,isNonSync:e?0:1}}}class nS{constructor(){this.emitInitSegment=!1,this.audioCodec=void 0,this.videoCodec=void 0,this.initData=void 0,this.initPTS=null,this.initTracks=void 0,this.lastEndTime=null}destroy(){}resetTimeStamp(e){this.initPTS=e,this.lastEndTime=null}resetNextTimestamp(){this.lastEndTime=null}resetInitSegment(e,t,r,i){this.audioCodec=t,this.videoCodec=r,this.generateInitSegment(dx(e,i)),this.emitInitSegment=!0}generateInitSegment(e){let{audioCodec:t,videoCodec:r}=this;if(!(e!=null&&e.byteLength)){this.initTracks=void 0,this.initData=void 0;return}const i=this.initData=Tf(e);i.audio&&(t=cu(i.audio,We.AUDIO)),i.video&&(r=cu(i.video,We.VIDEO));const s={};i.audio&&i.video?s.audiovideo={container:"video/mp4",codec:t+","+r,initSegment:e,id:"main"}:i.audio?s.audio={container:"audio/mp4",codec:t,initSegment:e,id:"audio"}:i.video?s.video={container:"video/mp4",codec:r,initSegment:e,id:"main"}:B.warn("[passthrough-remuxer.ts]: initSegment does not contain moov or trak boxes."),this.initTracks=s}remux(e,t,r,i,s,o){var a,l;let{initPTS:c,lastEndTime:d}=this;const u={audio:void 0,video:void 0,text:i,id3:r,initSegment:void 0};pe(d)||(d=this.lastEndTime=s||0);const h=t.samples;if(!(h!=null&&h.length))return u;const g={initPTS:void 0,timescale:1};let y=this.initData;if((a=y)!=null&&a.length||(this.generateInitSegment(h),y=this.initData),!((l=y)!=null&&l.length))return B.warn("[passthrough-remuxer.ts]: Failed to generate initSegment."),u;this.emitInitSegment&&(g.tracks=this.initTracks,this.emitInitSegment=!1);const b=hx(h,y),E=ux(y,h),C=E===null?s:E;(rS(c,C,s,b)||g.timescale!==c.timescale&&o)&&(g.initPTS=C-s,c&&c.timescale===1&&B.warn(`Adjusting initPTS by ${g.initPTS-c.baseTime}`),this.initPTS=c={baseTime:g.initPTS,timescale:1});const w=e?C-c.baseTime/c.timescale:d,R=w+b;px(y,h,c.baseTime/c.timescale),b>0?this.lastEndTime=R:(B.warn("Duration parsed from mp4 should be greater than zero"),this.resetNextTimestamp());const _=!!y.audio,P=!!y.video;let H="";_&&(H+="audio"),P&&(H+="video");const U={data1:h,startPTS:w,startDTS:w,endPTS:R,endDTS:R,type:H,hasAudio:_,hasVideo:P,nb:1,dropped:0};return u.audio=U.type==="audio"?U:void 0,u.video=U.type!=="audio"?U:void 0,u.initSegment=g,u.id3=Jf(r,s,c,c),i.samples.length&&(u.text=Zf(i,s,c)),u}}function rS(n,e,t,r){if(n===null)return!0;const i=Math.max(r,1),s=e-n.baseTime/n.timescale;return Math.abs(s-t)>i}function cu(n,e){const t=n==null?void 0:n.codec;if(t&&t.length>4)return t;if(e===We.AUDIO){if(t==="ec-3"||t==="ac-3"||t==="alac")return t;if(t==="fLaC"||t==="Opus")return Ms(t,!1);const r="mp4a.40.5";return B.info(`Parsed audio codec "${t}" or audio object type not handled. Using "${r}"`),r}return B.warn(`Unhandled video codec "${t}"`),t==="hvc1"||t==="hev1"?"hvc1.1.6.L120.90":t==="av01"?"av01.0.04M.08":"avc1.42e01e"}let yn;try{yn=self.performance.now.bind(self.performance)}catch{B.debug("Unable to use Performance API on this environment"),yn=Lr==null?void 0:Lr.Date.now}const xs=[{demux:G1,remux:nS},{demux:_n,remux:Es},{demux:$1,remux:Es},{demux:Y1,remux:Es}];xs.splice(2,0,{demux:K1,remux:Es});class du{constructor(e,t,r,i,s){this.async=!1,this.observer=void 0,this.typeSupported=void 0,this.config=void 0,this.vendor=void 0,this.id=void 0,this.demuxer=void 0,this.remuxer=void 0,this.decrypter=void 0,this.probe=void 0,this.decryptionPromise=null,this.transmuxConfig=void 0,this.currentTransmuxState=void 0,this.observer=e,this.typeSupported=t,this.config=r,this.vendor=i,this.id=s}configure(e){this.transmuxConfig=e,this.decrypter&&this.decrypter.reset()}push(e,t,r,i){const s=r.transmuxing;s.executeStart=yn();let o=new Uint8Array(e);const{currentTransmuxState:a,transmuxConfig:l}=this;i&&(this.currentTransmuxState=i);const{contiguous:c,discontinuity:d,trackSwitch:u,accurateTimeOffset:h,timeOffset:g,initSegmentChange:y}=i||a,{audioCodec:b,videoCodec:E,defaultInitPts:C,duration:w,initSegmentData:R}=l,_=iS(o,t);if(_&&_.method==="AES-128"){const z=this.getDecrypter();if(z.isSync()){let Q=z.softwareDecrypt(o,_.key.buffer,_.iv.buffer);if(r.part>-1&&(Q=z.flush()),!Q)return s.executeEnd=yn(),Qo(r);o=new Uint8Array(Q)}else return this.decryptionPromise=z.webCryptoDecrypt(o,_.key.buffer,_.iv.buffer).then(Q=>{const F=this.push(Q,null,r);return this.decryptionPromise=null,F}),this.decryptionPromise}const P=this.needsProbing(d,u);if(P){const z=this.configureTransmuxer(o);if(z)return B.warn(`[transmuxer] ${z.message}`),this.observer.emit(T.ERROR,T.ERROR,{type:Le.MEDIA_ERROR,details:$.FRAG_PARSING_ERROR,fatal:!1,error:z,reason:z.message}),s.executeEnd=yn(),Qo(r)}(d||u||y||P)&&this.resetInitSegment(R,b,E,w,t),(d||y||P)&&this.resetInitialTimestamp(C),c||this.resetContiguity();const H=this.transmux(o,_,g,h,r),U=this.currentTransmuxState;return U.contiguous=!0,U.discontinuity=!1,U.trackSwitch=!1,s.executeEnd=yn(),H}flush(e){const t=e.transmuxing;t.executeStart=yn();const{decrypter:r,currentTransmuxState:i,decryptionPromise:s}=this;if(s)return s.then(()=>this.flush(e));const o=[],{timeOffset:a}=i;if(r){const u=r.flush();u&&o.push(this.push(u,null,e))}const{demuxer:l,remuxer:c}=this;if(!l||!c)return t.executeEnd=yn(),[Qo(e)];const d=l.flush(a);return Ss(d)?d.then(u=>(this.flushRemux(o,u,e),o)):(this.flushRemux(o,d,e),o)}flushRemux(e,t,r){const{audioTrack:i,videoTrack:s,id3Track:o,textTrack:a}=t,{accurateTimeOffset:l,timeOffset:c}=this.currentTransmuxState;B.log(`[transmuxer.ts]: Flushed fragment ${r.sn}${r.part>-1?" p: "+r.part:""} of level ${r.level}`);const d=this.remuxer.remux(i,s,o,a,c,l,!0,this.id);e.push({remuxResult:d,chunkMeta:r}),r.transmuxing.executeEnd=yn()}resetInitialTimestamp(e){const{demuxer:t,remuxer:r}=this;!t||!r||(t.resetTimeStamp(e),r.resetTimeStamp(e))}resetContiguity(){const{demuxer:e,remuxer:t}=this;!e||!t||(e.resetContiguity(),t.resetNextTimestamp())}resetInitSegment(e,t,r,i,s){const{demuxer:o,remuxer:a}=this;!o||!a||(o.resetInitSegment(e,t,r,i),a.resetInitSegment(e,t,r,s))}destroy(){this.demuxer&&(this.demuxer.destroy(),this.demuxer=void 0),this.remuxer&&(this.remuxer.destroy(),this.remuxer=void 0)}transmux(e,t,r,i,s){let o;return t&&t.method==="SAMPLE-AES"?o=this.transmuxSampleAes(e,t,r,i,s):o=this.transmuxUnencrypted(e,r,i,s),o}transmuxUnencrypted(e,t,r,i){const{audioTrack:s,videoTrack:o,id3Track:a,textTrack:l}=this.demuxer.demux(e,t,!1,!this.config.progressive);return{remuxResult:this.remuxer.remux(s,o,a,l,t,r,!1,this.id),chunkMeta:i}}transmuxSampleAes(e,t,r,i,s){return this.demuxer.demuxSampleAes(e,t,r).then(o=>({remuxResult:this.remuxer.remux(o.audioTrack,o.videoTrack,o.id3Track,o.textTrack,r,i,!1,this.id),chunkMeta:s}))}configureTransmuxer(e){const{config:t,observer:r,typeSupported:i,vendor:s}=this;let o;for(let h=0,g=xs.length;h<g;h++){var a;if((a=xs[h].demux)!=null&&a.probe(e)){o=xs[h];break}}if(!o)return new Error("Failed to find demuxer by probing fragment data");const l=this.demuxer,c=this.remuxer,d=o.remux,u=o.demux;(!c||!(c instanceof d))&&(this.remuxer=new d(r,t,i,s)),(!l||!(l instanceof u))&&(this.demuxer=new u(r,t,i),this.probe=u.probe)}needsProbing(e,t){return!this.demuxer||!this.remuxer||e||t}getDecrypter(){let e=this.decrypter;return e||(e=this.decrypter=new kl(this.config)),e}}function iS(n,e){let t=null;return n.byteLength>0&&(e==null?void 0:e.key)!=null&&e.iv!==null&&e.method!=null&&(t=e),t}const Qo=n=>({remuxResult:{},chunkMeta:n});function Ss(n){return"then"in n&&n.then instanceof Function}class sS{constructor(e,t,r,i,s){this.audioCodec=void 0,this.videoCodec=void 0,this.initSegmentData=void 0,this.duration=void 0,this.defaultInitPts=void 0,this.audioCodec=e,this.videoCodec=t,this.initSegmentData=r,this.duration=i,this.defaultInitPts=s||null}}class oS{constructor(e,t,r,i,s,o){this.discontinuity=void 0,this.contiguous=void 0,this.accurateTimeOffset=void 0,this.trackSwitch=void 0,this.timeOffset=void 0,this.initSegmentChange=void 0,this.discontinuity=e,this.contiguous=t,this.accurateTimeOffset=r,this.trackSwitch=i,this.timeOffset=s,this.initSegmentChange=o}}var ep={exports:{}};(function(n){var e=Object.prototype.hasOwnProperty,t="~";function r(){}Object.create&&(r.prototype=Object.create(null),new r().__proto__||(t=!1));function i(l,c,d){this.fn=l,this.context=c,this.once=d||!1}function s(l,c,d,u,h){if(typeof d!="function")throw new TypeError("The listener must be a function");var g=new i(d,u||l,h),y=t?t+c:c;return l._events[y]?l._events[y].fn?l._events[y]=[l._events[y],g]:l._events[y].push(g):(l._events[y]=g,l._eventsCount++),l}function o(l,c){--l._eventsCount===0?l._events=new r:delete l._events[c]}function a(){this._events=new r,this._eventsCount=0}a.prototype.eventNames=function(){var c=[],d,u;if(this._eventsCount===0)return c;for(u in d=this._events)e.call(d,u)&&c.push(t?u.slice(1):u);return Object.getOwnPropertySymbols?c.concat(Object.getOwnPropertySymbols(d)):c},a.prototype.listeners=function(c){var d=t?t+c:c,u=this._events[d];if(!u)return[];if(u.fn)return[u.fn];for(var h=0,g=u.length,y=new Array(g);h<g;h++)y[h]=u[h].fn;return y},a.prototype.listenerCount=function(c){var d=t?t+c:c,u=this._events[d];return u?u.fn?1:u.length:0},a.prototype.emit=function(c,d,u,h,g,y){var b=t?t+c:c;if(!this._events[b])return!1;var E=this._events[b],C=arguments.length,w,R;if(E.fn){switch(E.once&&this.removeListener(c,E.fn,void 0,!0),C){case 1:return E.fn.call(E.context),!0;case 2:return E.fn.call(E.context,d),!0;case 3:return E.fn.call(E.context,d,u),!0;case 4:return E.fn.call(E.context,d,u,h),!0;case 5:return E.fn.call(E.context,d,u,h,g),!0;case 6:return E.fn.call(E.context,d,u,h,g,y),!0}for(R=1,w=new Array(C-1);R<C;R++)w[R-1]=arguments[R];E.fn.apply(E.context,w)}else{var _=E.length,P;for(R=0;R<_;R++)switch(E[R].once&&this.removeListener(c,E[R].fn,void 0,!0),C){case 1:E[R].fn.call(E[R].context);break;case 2:E[R].fn.call(E[R].context,d);break;case 3:E[R].fn.call(E[R].context,d,u);break;case 4:E[R].fn.call(E[R].context,d,u,h);break;default:if(!w)for(P=1,w=new Array(C-1);P<C;P++)w[P-1]=arguments[P];E[R].fn.apply(E[R].context,w)}}return!0},a.prototype.on=function(c,d,u){return s(this,c,d,u,!1)},a.prototype.once=function(c,d,u){return s(this,c,d,u,!0)},a.prototype.removeListener=function(c,d,u,h){var g=t?t+c:c;if(!this._events[g])return this;if(!d)return o(this,g),this;var y=this._events[g];if(y.fn)y.fn===d&&(!h||y.once)&&(!u||y.context===u)&&o(this,g);else{for(var b=0,E=[],C=y.length;b<C;b++)(y[b].fn!==d||h&&!y[b].once||u&&y[b].context!==u)&&E.push(y[b]);E.length?this._events[g]=E.length===1?E[0]:E:o(this,g)}return this},a.prototype.removeAllListeners=function(c){var d;return c?(d=t?t+c:c,this._events[d]&&o(this,d)):(this._events=new r,this._eventsCount=0),this},a.prototype.off=a.prototype.removeListener,a.prototype.addListener=a.prototype.on,a.prefixed=t,a.EventEmitter=a,n.exports=a})(ep);var aS=ep.exports,Pl=_E(aS);class tp{constructor(e,t,r,i){this.error=null,this.hls=void 0,this.id=void 0,this.observer=void 0,this.frag=null,this.part=null,this.useWorker=void 0,this.workerContext=null,this.onwmsg=void 0,this.transmuxer=null,this.onTransmuxComplete=void 0,this.onFlush=void 0;const s=e.config;this.hls=e,this.id=t,this.useWorker=!!s.enableWorker,this.onTransmuxComplete=r,this.onFlush=i;const o=(d,u)=>{u=u||{},u.frag=this.frag,u.id=this.id,d===T.ERROR&&(this.error=u.error),this.hls.trigger(d,u)};this.observer=new Pl,this.observer.on(T.FRAG_DECRYPTED,o),this.observer.on(T.ERROR,o);const a=Fr(s.preferManagedMediaSource)||{isTypeSupported:()=>!1},l={mpeg:a.isTypeSupported("audio/mpeg"),mp3:a.isTypeSupported('audio/mp4; codecs="mp3"'),ac3:a.isTypeSupported('audio/mp4; codecs="ac-3"')},c=navigator.vendor;if(this.useWorker&&typeof Worker<"u"&&(s.workerPath||w1())){try{s.workerPath?(B.log(`loading Web Worker ${s.workerPath} for "${t}"`),this.workerContext=L1(s.workerPath)):(B.log(`injecting Web Worker for "${t}"`),this.workerContext=k1()),this.onwmsg=h=>this.onWorkerMessage(h);const{worker:u}=this.workerContext;u.addEventListener("message",this.onwmsg),u.onerror=h=>{const g=new Error(`${h.message}  (${h.filename}:${h.lineno})`);s.enableWorker=!1,B.warn(`Error in "${t}" Web Worker, fallback to inline`),this.hls.trigger(T.ERROR,{type:Le.OTHER_ERROR,details:$.INTERNAL_EXCEPTION,fatal:!1,event:"demuxerWorker",error:g})},u.postMessage({cmd:"init",typeSupported:l,vendor:c,id:t,config:JSON.stringify(s)})}catch(u){B.warn(`Error setting up "${t}" Web Worker, fallback to inline`,u),this.resetWorker(),this.error=null,this.transmuxer=new du(this.observer,l,s,c,t)}return}this.transmuxer=new du(this.observer,l,s,c,t)}resetWorker(){if(this.workerContext){const{worker:e,objectURL:t}=this.workerContext;t&&self.URL.revokeObjectURL(t),e.removeEventListener("message",this.onwmsg),e.onerror=null,e.terminate(),this.workerContext=null}}destroy(){if(this.workerContext)this.resetWorker(),this.onwmsg=void 0;else{const t=this.transmuxer;t&&(t.destroy(),this.transmuxer=null)}const e=this.observer;e&&e.removeAllListeners(),this.frag=null,this.observer=null,this.hls=null}push(e,t,r,i,s,o,a,l,c,d){var u,h;c.transmuxing.start=self.performance.now();const{transmuxer:g}=this,y=o?o.start:s.start,b=s.decryptdata,E=this.frag,C=!(E&&s.cc===E.cc),w=!(E&&c.level===E.level),R=E?c.sn-E.sn:-1,_=this.part?c.part-this.part.index:-1,P=R===0&&c.id>1&&c.id===(E==null?void 0:E.stats.chunkCount),H=!w&&(R===1||R===0&&(_===1||P&&_<=0)),U=self.performance.now();(w||R||s.stats.parsing.start===0)&&(s.stats.parsing.start=U),o&&(_||!H)&&(o.stats.parsing.start=U);const z=!(E&&((u=s.initSegment)==null?void 0:u.url)===((h=E.initSegment)==null?void 0:h.url)),Q=new oS(C,H,l,w,y,z);if(!H||C||z){B.log(`[transmuxer-interface, ${s.type}]: Starting new transmux session for sn: ${c.sn} p: ${c.part} level: ${c.level} id: ${c.id}
        discontinuity: ${C}
        trackSwitch: ${w}
        contiguous: ${H}
        accurateTimeOffset: ${l}
        timeOffset: ${y}
        initSegmentChange: ${z}`);const F=new sS(r,i,t,a,d);this.configureTransmuxer(F)}if(this.frag=s,this.part=o,this.workerContext)this.workerContext.worker.postMessage({cmd:"demux",data:e,decryptdata:b,chunkMeta:c,state:Q},e instanceof ArrayBuffer?[e]:[]);else if(g){const F=g.push(e,b,c,Q);Ss(F)?(g.async=!0,F.then(Y=>{this.handleTransmuxComplete(Y)}).catch(Y=>{this.transmuxerError(Y,c,"transmuxer-interface push error")})):(g.async=!1,this.handleTransmuxComplete(F))}}flush(e){e.transmuxing.start=self.performance.now();const{transmuxer:t}=this;if(this.workerContext)this.workerContext.worker.postMessage({cmd:"flush",chunkMeta:e});else if(t){let r=t.flush(e);Ss(r)||t.async?(Ss(r)||(r=Promise.resolve(r)),r.then(s=>{this.handleFlushResult(s,e)}).catch(s=>{this.transmuxerError(s,e,"transmuxer-interface flush error")})):this.handleFlushResult(r,e)}}transmuxerError(e,t,r){this.hls&&(this.error=e,this.hls.trigger(T.ERROR,{type:Le.MEDIA_ERROR,details:$.FRAG_PARSING_ERROR,chunkMeta:t,fatal:!1,error:e,err:e,reason:r}))}handleFlushResult(e,t){e.forEach(r=>{this.handleTransmuxComplete(r)}),this.onFlush(t)}onWorkerMessage(e){const t=e.data,r=this.hls;switch(t.event){case"init":{var i;const s=(i=this.workerContext)==null?void 0:i.objectURL;s&&self.URL.revokeObjectURL(s);break}case"transmuxComplete":{this.handleTransmuxComplete(t.data);break}case"flush":{this.onFlush(t.data);break}case"workerLog":B[t.data.logType]&&B[t.data.logType](t.data.message);break;default:{t.data=t.data||{},t.data.frag=this.frag,t.data.id=this.id,r.trigger(t.event,t.data);break}}}configureTransmuxer(e){const{transmuxer:t}=this;this.workerContext?this.workerContext.worker.postMessage({cmd:"configure",config:e}):t&&t.configure(e)}handleTransmuxComplete(e){e.chunkMeta.transmuxing.end=self.performance.now(),this.onTransmuxComplete(e)}}function np(n,e){if(n.length!==e.length)return!1;for(let t=0;t<n.length;t++)if(!Ir(n[t].attrs,e[t].attrs))return!1;return!0}function Ir(n,e,t){const r=n["STABLE-RENDITION-ID"];return r&&!t?r===e["STABLE-RENDITION-ID"]:!(t||["LANGUAGE","NAME","CHARACTERISTICS","AUTOSELECT","DEFAULT","FORCED","ASSOC-LANGUAGE"]).some(i=>n[i]!==e[i])}function Fa(n,e){return e.label.toLowerCase()===n.name.toLowerCase()&&(!e.language||e.language.toLowerCase()===(n.lang||"").toLowerCase())}const uu=100;class lS extends Ll{constructor(e,t,r){super(e,t,r,"[audio-stream-controller]",ke.AUDIO),this.videoBuffer=null,this.videoTrackCC=-1,this.waitingVideoCC=-1,this.bufferedTrack=null,this.switchingTrack=null,this.trackId=-1,this.waitingData=null,this.mainDetails=null,this.flushing=!1,this.bufferFlushed=!1,this.cachedTrackLoadedData=null,this._registerListeners()}onHandlerDestroying(){this._unregisterListeners(),super.onHandlerDestroying(),this.mainDetails=null,this.bufferedTrack=null,this.switchingTrack=null}_registerListeners(){const{hls:e}=this;e.on(T.MEDIA_ATTACHED,this.onMediaAttached,this),e.on(T.MEDIA_DETACHING,this.onMediaDetaching,this),e.on(T.MANIFEST_LOADING,this.onManifestLoading,this),e.on(T.LEVEL_LOADED,this.onLevelLoaded,this),e.on(T.AUDIO_TRACKS_UPDATED,this.onAudioTracksUpdated,this),e.on(T.AUDIO_TRACK_SWITCHING,this.onAudioTrackSwitching,this),e.on(T.AUDIO_TRACK_LOADED,this.onAudioTrackLoaded,this),e.on(T.ERROR,this.onError,this),e.on(T.BUFFER_RESET,this.onBufferReset,this),e.on(T.BUFFER_CREATED,this.onBufferCreated,this),e.on(T.BUFFER_FLUSHING,this.onBufferFlushing,this),e.on(T.BUFFER_FLUSHED,this.onBufferFlushed,this),e.on(T.INIT_PTS_FOUND,this.onInitPtsFound,this),e.on(T.FRAG_BUFFERED,this.onFragBuffered,this)}_unregisterListeners(){const{hls:e}=this;e.off(T.MEDIA_ATTACHED,this.onMediaAttached,this),e.off(T.MEDIA_DETACHING,this.onMediaDetaching,this),e.off(T.MANIFEST_LOADING,this.onManifestLoading,this),e.off(T.LEVEL_LOADED,this.onLevelLoaded,this),e.off(T.AUDIO_TRACKS_UPDATED,this.onAudioTracksUpdated,this),e.off(T.AUDIO_TRACK_SWITCHING,this.onAudioTrackSwitching,this),e.off(T.AUDIO_TRACK_LOADED,this.onAudioTrackLoaded,this),e.off(T.ERROR,this.onError,this),e.off(T.BUFFER_RESET,this.onBufferReset,this),e.off(T.BUFFER_CREATED,this.onBufferCreated,this),e.off(T.BUFFER_FLUSHING,this.onBufferFlushing,this),e.off(T.BUFFER_FLUSHED,this.onBufferFlushed,this),e.off(T.INIT_PTS_FOUND,this.onInitPtsFound,this),e.off(T.FRAG_BUFFERED,this.onFragBuffered,this)}onInitPtsFound(e,{frag:t,id:r,initPTS:i,timescale:s}){if(r==="main"){const o=t.cc;this.initPTS[t.cc]={baseTime:i,timescale:s},this.log(`InitPTS for cc: ${o} found from main: ${i}`),this.videoTrackCC=o,this.state===J.WAITING_INIT_PTS&&this.tick()}}startLoad(e){if(!this.levels){this.startPosition=e,this.state=J.STOPPED;return}const t=this.lastCurrentTime;this.stopLoad(),this.setInterval(uu),t>0&&e===-1?(this.log(`Override startPosition with lastCurrentTime @${t.toFixed(3)}`),e=t,this.state=J.IDLE):(this.loadedmetadata=!1,this.state=J.WAITING_TRACK),this.nextLoadPosition=this.startPosition=this.lastCurrentTime=e,this.tick()}doTick(){switch(this.state){case J.IDLE:this.doTickIdle();break;case J.WAITING_TRACK:{var e;const{levels:r,trackId:i}=this,s=r==null||(e=r[i])==null?void 0:e.details;if(s){if(this.waitForCdnTuneIn(s))break;this.state=J.WAITING_INIT_PTS}break}case J.FRAG_LOADING_WAITING_RETRY:{var t;const r=performance.now(),i=this.retryDate;if(!i||r>=i||(t=this.media)!=null&&t.seeking){const{levels:s,trackId:o}=this;this.log("RetryDate reached, switch back to IDLE state"),this.resetStartWhenNotLoaded((s==null?void 0:s[o])||null),this.state=J.IDLE}break}case J.WAITING_INIT_PTS:{const r=this.waitingData;if(r){const{frag:i,part:s,cache:o,complete:a}=r;if(this.initPTS[i.cc]!==void 0){this.waitingData=null,this.waitingVideoCC=-1,this.state=J.FRAG_LOADING;const l=o.flush(),c={frag:i,part:s,payload:l,networkDetails:null};this._handleFragmentLoadProgress(c),a&&super._handleFragmentLoadComplete(c)}else if(this.videoTrackCC!==this.waitingVideoCC)this.log(`Waiting fragment cc (${i.cc}) cancelled because video is at cc ${this.videoTrackCC}`),this.clearWaitingFragment();else{const l=this.getLoadPosition(),c=et.bufferInfo(this.mediaBuffer,l,this.config.maxBufferHole);Ba(c.end,this.config.maxFragLookUpTolerance,i)<0&&(this.log(`Waiting fragment cc (${i.cc}) @ ${i.start} cancelled because another fragment at ${c.end} is needed`),this.clearWaitingFragment())}}else this.state=J.IDLE}}this.onTickEnd()}clearWaitingFragment(){const e=this.waitingData;e&&(this.fragmentTracker.removeFragment(e.frag),this.waitingData=null,this.waitingVideoCC=-1,this.state=J.IDLE)}resetLoadingState(){this.clearWaitingFragment(),super.resetLoadingState()}onTickEnd(){const{media:e}=this;e!=null&&e.readyState&&(this.lastCurrentTime=e.currentTime)}doTickIdle(){const{hls:e,levels:t,media:r,trackId:i}=this,s=e.config;if(!r&&(this.startFragRequested||!s.startFragPrefetch)||!(t!=null&&t[i]))return;const o=t[i],a=o.details;if(!a||a.live&&this.levelLastLoaded!==o||this.waitForCdnTuneIn(a)){this.state=J.WAITING_TRACK;return}const l=this.mediaBuffer?this.mediaBuffer:this.media;this.bufferFlushed&&l&&(this.bufferFlushed=!1,this.afterBufferFlushed(l,We.AUDIO,ke.AUDIO));const c=this.getFwdBufferInfo(l,ke.AUDIO);if(c===null)return;const{bufferedTrack:d,switchingTrack:u}=this;if(!u&&this._streamEnded(c,a)){e.trigger(T.BUFFER_EOS,{type:"audio"}),this.state=J.ENDED;return}const h=this.getFwdBufferInfo(this.videoBuffer?this.videoBuffer:this.media,ke.MAIN),g=c.len,y=this.getMaxBufferLength(h==null?void 0:h.len),b=a.fragments,E=b[0].start;let C=this.flushing?this.getLoadPosition():c.end;if(u&&r){const P=this.getLoadPosition();d&&!Ir(u.attrs,d.attrs)&&(C=P),a.PTSKnown&&P<E&&(c.end>E||c.nextStart)&&(this.log("Alt audio track ahead of main track, seek to start of alt audio track"),r.currentTime=E+.05)}if(g>=y&&!u&&C<b[b.length-1].start)return;let w=this.getNextFragment(C,a),R=!1;if(w&&this.isLoopLoading(w,C)&&(R=!!w.gap,w=this.getNextFragmentLoopLoading(w,a,c,ke.MAIN,y)),!w){this.bufferFlushed=!0;return}const _=h&&w.start>h.end+a.targetduration;if(_||!(h!=null&&h.len)&&c.len){const P=this.getAppendedFrag(w.start,ke.MAIN);if(P===null||(R||(R=!!P.gap||!!_&&h.len===0),_&&!R||R&&c.nextStart&&c.nextStart<P.end))return}this.loadFragment(w,o,C)}getMaxBufferLength(e){const t=super.getMaxBufferLength();return e?Math.min(Math.max(t,e),this.config.maxMaxBufferLength):t}onMediaDetaching(){this.videoBuffer=null,this.bufferFlushed=this.flushing=!1,super.onMediaDetaching()}onAudioTracksUpdated(e,{audioTracks:t}){this.resetTransmuxer(),this.levels=t.map(r=>new Rr(r))}onAudioTrackSwitching(e,t){const r=!!t.url;this.trackId=t.id;const{fragCurrent:i}=this;i&&(i.abortRequests(),this.removeUnbufferedFrags(i.start)),this.resetLoadingState(),r?this.setInterval(uu):this.resetTransmuxer(),r?(this.switchingTrack=t,this.state=J.IDLE,this.flushAudioIfNeeded(t)):(this.switchingTrack=null,this.bufferedTrack=t,this.state=J.STOPPED),this.tick()}onManifestLoading(){this.fragmentTracker.removeAllFragments(),this.startPosition=this.lastCurrentTime=0,this.bufferFlushed=this.flushing=!1,this.levels=this.mainDetails=this.waitingData=this.bufferedTrack=this.cachedTrackLoadedData=this.switchingTrack=null,this.startFragRequested=!1,this.trackId=this.videoTrackCC=this.waitingVideoCC=-1}onLevelLoaded(e,t){this.mainDetails=t.details,this.cachedTrackLoadedData!==null&&(this.hls.trigger(T.AUDIO_TRACK_LOADED,this.cachedTrackLoadedData),this.cachedTrackLoadedData=null)}onAudioTrackLoaded(e,t){var r;if(this.mainDetails==null){this.cachedTrackLoadedData=t;return}const{levels:i}=this,{details:s,id:o}=t;if(!i){this.warn(`Audio tracks were reset while loading level ${o}`);return}this.log(`Audio track ${o} loaded [${s.startSN},${s.endSN}]${s.lastPartSn?`[part-${s.lastPartSn}-${s.lastPartIndex}]`:""},duration:${s.totalduration}`);const a=i[o];let l=0;if(s.live||(r=a.details)!=null&&r.live){this.checkLiveUpdate(s);const d=this.mainDetails;if(s.deltaUpdateFailed||!d)return;if(!a.details&&s.hasProgramDateTime&&d.hasProgramDateTime)Gs(s,d),l=s.fragments[0].start;else{var c;l=this.alignPlaylists(s,a.details,(c=this.levelLastLoaded)==null?void 0:c.details)}}a.details=s,this.levelLastLoaded=a,!this.startFragRequested&&(this.mainDetails||!s.live)&&this.setStartPosition(this.mainDetails||s,l),this.state===J.WAITING_TRACK&&!this.waitForCdnTuneIn(s)&&(this.state=J.IDLE),this.tick()}_handleFragmentLoadProgress(e){var t;const{frag:r,part:i,payload:s}=e,{config:o,trackId:a,levels:l}=this;if(!l){this.warn(`Audio tracks were reset while fragment load was in progress. Fragment ${r.sn} of level ${r.level} will not be buffered`);return}const c=l[a];if(!c){this.warn("Audio track is undefined on fragment load progress");return}const d=c.details;if(!d){this.warn("Audio track details undefined on fragment load progress"),this.removeUnbufferedFrags(r.start);return}const u=o.defaultAudioCodec||c.audioCodec||"mp4a.40.2";let h=this.transmuxer;h||(h=this.transmuxer=new tp(this.hls,ke.AUDIO,this._handleTransmuxComplete.bind(this),this._handleTransmuxerFlush.bind(this)));const g=this.initPTS[r.cc],y=(t=r.initSegment)==null?void 0:t.data;if(g!==void 0){const E=i?i.index:-1,C=E!==-1,w=new wl(r.level,r.sn,r.stats.chunkCount,s.byteLength,E,C);h.push(s,y,u,"",r,i,d.totalduration,!1,w,g)}else{this.log(`Unknown video PTS for cc ${r.cc}, waiting for video PTS before demuxing audio frag ${r.sn} of [${d.startSN} ,${d.endSN}],track ${a}`);const{cache:b}=this.waitingData=this.waitingData||{frag:r,part:i,cache:new Uf,complete:!1};b.push(new Uint8Array(s)),this.waitingVideoCC=this.videoTrackCC,this.state=J.WAITING_INIT_PTS}}_handleFragmentLoadComplete(e){if(this.waitingData){this.waitingData.complete=!0;return}super._handleFragmentLoadComplete(e)}onBufferReset(){this.mediaBuffer=this.videoBuffer=null,this.loadedmetadata=!1}onBufferCreated(e,t){const r=t.tracks.audio;r&&(this.mediaBuffer=r.buffer||null),t.tracks.video&&(this.videoBuffer=t.tracks.video.buffer||null)}onFragBuffered(e,t){const{frag:r,part:i}=t;if(r.type!==ke.AUDIO){if(!this.loadedmetadata&&r.type===ke.MAIN){const s=this.videoBuffer||this.media;s&&et.getBuffered(s).length&&(this.loadedmetadata=!0)}return}if(this.fragContextChanged(r)){this.warn(`Fragment ${r.sn}${i?" p: "+i.index:""} of level ${r.level} finished buffering, but was aborted. state: ${this.state}, audioSwitch: ${this.switchingTrack?this.switchingTrack.name:"false"}`);return}if(r.sn!=="initSegment"){this.fragPrevious=r;const s=this.switchingTrack;s&&(this.bufferedTrack=s,this.switchingTrack=null,this.hls.trigger(T.AUDIO_TRACK_SWITCHED,yt({},s)))}this.fragBufferedComplete(r,i)}onError(e,t){var r;if(t.fatal){this.state=J.ERROR;return}switch(t.details){case $.FRAG_GAP:case $.FRAG_PARSING_ERROR:case $.FRAG_DECRYPT_ERROR:case $.FRAG_LOAD_ERROR:case $.FRAG_LOAD_TIMEOUT:case $.KEY_LOAD_ERROR:case $.KEY_LOAD_TIMEOUT:this.onFragmentOrKeyLoadError(ke.AUDIO,t);break;case $.AUDIO_TRACK_LOAD_ERROR:case $.AUDIO_TRACK_LOAD_TIMEOUT:case $.LEVEL_PARSING_ERROR:!t.levelRetry&&this.state===J.WAITING_TRACK&&((r=t.context)==null?void 0:r.type)===Ue.AUDIO_TRACK&&(this.state=J.IDLE);break;case $.BUFFER_APPEND_ERROR:case $.BUFFER_FULL_ERROR:if(!t.parent||t.parent!=="audio")return;if(t.details===$.BUFFER_APPEND_ERROR){this.resetLoadingState();return}this.reduceLengthAndFlushBuffer(t)&&(this.bufferedTrack=null,super.flushMainBuffer(0,Number.POSITIVE_INFINITY,"audio"));break;case $.INTERNAL_EXCEPTION:this.recoverWorkerError(t);break}}onBufferFlushing(e,{type:t}){t!==We.VIDEO&&(this.flushing=!0)}onBufferFlushed(e,{type:t}){if(t!==We.VIDEO){this.flushing=!1,this.bufferFlushed=!0,this.state===J.ENDED&&(this.state=J.IDLE);const r=this.mediaBuffer||this.media;r&&(this.afterBufferFlushed(r,t,ke.AUDIO),this.tick())}}_handleTransmuxComplete(e){var t;const r="audio",{hls:i}=this,{remuxResult:s,chunkMeta:o}=e,a=this.getCurrentContext(o);if(!a){this.resetWhenMissingContext(o);return}const{frag:l,part:c,level:d}=a,{details:u}=d,{audio:h,text:g,id3:y,initSegment:b}=s;if(this.fragContextChanged(l)||!u){this.fragmentTracker.removeFragment(l);return}if(this.state=J.PARSING,this.switchingTrack&&h&&this.completeAudioSwitch(this.switchingTrack),b!=null&&b.tracks){const E=l.initSegment||l;this._bufferInitSegment(d,b.tracks,E,o),i.trigger(T.FRAG_PARSING_INIT_SEGMENT,{frag:E,id:r,tracks:b.tracks})}if(h){const{startPTS:E,endPTS:C,startDTS:w,endDTS:R}=h;c&&(c.elementaryStreams[We.AUDIO]={startPTS:E,endPTS:C,startDTS:w,endDTS:R}),l.setElementaryStreamInfo(We.AUDIO,E,C,w,R),this.bufferFragmentData(h,l,c,o)}if(y!=null&&(t=y.samples)!=null&&t.length){const E=ct({id:r,frag:l,details:u},y);i.trigger(T.FRAG_PARSING_METADATA,E)}if(g){const E=ct({id:r,frag:l,details:u},g);i.trigger(T.FRAG_PARSING_USERDATA,E)}}_bufferInitSegment(e,t,r,i){if(this.state!==J.PARSING)return;t.video&&delete t.video;const s=t.audio;if(!s)return;s.id="audio";const o=e.audioCodec;this.log(`Init audio buffer, container:${s.container}, codecs[level/parsed]=[${o}/${s.codec}]`),o&&o.split(",").length===1&&(s.levelCodec=o),this.hls.trigger(T.BUFFER_CODECS,t);const a=s.initSegment;if(a!=null&&a.byteLength){const l={type:"audio",frag:r,part:null,chunkMeta:i,parent:r.type,data:a};this.hls.trigger(T.BUFFER_APPENDING,l)}this.tickImmediate()}loadFragment(e,t,r){const i=this.fragmentTracker.getState(e);if(this.fragCurrent=e,this.switchingTrack||i===mt.NOT_LOADED||i===mt.PARTIAL){var s;if(e.sn==="initSegment")this._loadInitSegment(e,t);else if((s=t.details)!=null&&s.live&&!this.initPTS[e.cc]){this.log(`Waiting for video PTS in continuity counter ${e.cc} of live stream before loading audio fragment ${e.sn} of level ${this.trackId}`),this.state=J.WAITING_INIT_PTS;const o=this.mainDetails;o&&o.fragments[0].start!==t.details.fragments[0].start&&Gs(t.details,o)}else this.startFragRequested=!0,super.loadFragment(e,t,r)}else this.clearTrackerIfNeeded(e)}flushAudioIfNeeded(e){const{media:t,bufferedTrack:r}=this,i=r==null?void 0:r.attrs,s=e.attrs;t&&i&&(i.CHANNELS!==s.CHANNELS||r.name!==e.name||r.lang!==e.lang)&&(this.log("Switching audio track : flushing all audio"),super.flushMainBuffer(0,Number.POSITIVE_INFINITY,"audio"),this.bufferedTrack=null)}completeAudioSwitch(e){const{hls:t}=this;this.flushAudioIfNeeded(e),this.bufferedTrack=e,this.switchingTrack=null,t.trigger(T.AUDIO_TRACK_SWITCHED,yt({},e))}}class cS extends Cl{constructor(e){super(e,"[audio-track-controller]"),this.tracks=[],this.groupIds=null,this.tracksInGroup=[],this.trackId=-1,this.currentTrack=null,this.selectDefaultTrack=!0,this.registerListeners()}registerListeners(){const{hls:e}=this;e.on(T.MANIFEST_LOADING,this.onManifestLoading,this),e.on(T.MANIFEST_PARSED,this.onManifestParsed,this),e.on(T.LEVEL_LOADING,this.onLevelLoading,this),e.on(T.LEVEL_SWITCHING,this.onLevelSwitching,this),e.on(T.AUDIO_TRACK_LOADED,this.onAudioTrackLoaded,this),e.on(T.ERROR,this.onError,this)}unregisterListeners(){const{hls:e}=this;e.off(T.MANIFEST_LOADING,this.onManifestLoading,this),e.off(T.MANIFEST_PARSED,this.onManifestParsed,this),e.off(T.LEVEL_LOADING,this.onLevelLoading,this),e.off(T.LEVEL_SWITCHING,this.onLevelSwitching,this),e.off(T.AUDIO_TRACK_LOADED,this.onAudioTrackLoaded,this),e.off(T.ERROR,this.onError,this)}destroy(){this.unregisterListeners(),this.tracks.length=0,this.tracksInGroup.length=0,this.currentTrack=null,super.destroy()}onManifestLoading(){this.tracks=[],this.tracksInGroup=[],this.groupIds=null,this.currentTrack=null,this.trackId=-1,this.selectDefaultTrack=!0}onManifestParsed(e,t){this.tracks=t.audioTracks||[]}onAudioTrackLoaded(e,t){const{id:r,groupId:i,details:s}=t,o=this.tracksInGroup[r];if(!o||o.groupId!==i){this.warn(`Audio track with id:${r} and group:${i} not found in active group ${o==null?void 0:o.groupId}`);return}const a=o.details;o.details=t.details,this.log(`Audio track ${r} "${o.name}" lang:${o.lang} group:${i} loaded [${s.startSN}-${s.endSN}]`),r===this.trackId&&this.playlistLoaded(r,t,a)}onLevelLoading(e,t){this.switchLevel(t.level)}onLevelSwitching(e,t){this.switchLevel(t.level)}switchLevel(e){const t=this.hls.levels[e];if(!t)return;const r=t.audioGroups||null,i=this.groupIds;let s=this.currentTrack;if(!r||(i==null?void 0:i.length)!==(r==null?void 0:r.length)||r!=null&&r.some(a=>(i==null?void 0:i.indexOf(a))===-1)){this.groupIds=r,this.trackId=-1,this.currentTrack=null;const a=this.tracks.filter(h=>!r||r.indexOf(h.groupId)!==-1);if(a.length)this.selectDefaultTrack&&!a.some(h=>h.default)&&(this.selectDefaultTrack=!1),a.forEach((h,g)=>{h.id=g});else if(!s&&!this.tracksInGroup.length)return;this.tracksInGroup=a;const l=this.hls.config.audioPreference;if(!s&&l){const h=on(l,a,ar);if(h>-1)s=a[h];else{const g=on(l,this.tracks);s=this.tracks[g]}}let c=this.findTrackId(s);c===-1&&s&&(c=this.findTrackId(null));const d={audioTracks:a};this.log(`Updating audio tracks, ${a.length} track(s) found in group(s): ${r==null?void 0:r.join(",")}`),this.hls.trigger(T.AUDIO_TRACKS_UPDATED,d);const u=this.trackId;if(c!==-1&&u===-1)this.setAudioTrack(c);else if(a.length&&u===-1){var o;const h=new Error(`No audio track selected for current audio group-ID(s): ${(o=this.groupIds)==null?void 0:o.join(",")} track count: ${a.length}`);this.warn(h.message),this.hls.trigger(T.ERROR,{type:Le.MEDIA_ERROR,details:$.AUDIO_TRACK_LOAD_ERROR,fatal:!0,error:h})}}else this.shouldReloadPlaylist(s)&&this.setAudioTrack(this.trackId)}onError(e,t){t.fatal||!t.context||t.context.type===Ue.AUDIO_TRACK&&t.context.id===this.trackId&&(!this.groupIds||this.groupIds.indexOf(t.context.groupId)!==-1)&&(this.requestScheduled=-1,this.checkRetry(t))}get allAudioTracks(){return this.tracks}get audioTracks(){return this.tracksInGroup}get audioTrack(){return this.trackId}set audioTrack(e){this.selectDefaultTrack=!1,this.setAudioTrack(e)}setAudioOption(e){const t=this.hls;if(t.config.audioPreference=e,e){const r=this.allAudioTracks;if(this.selectDefaultTrack=!1,r.length){const i=this.currentTrack;if(i&&br(e,i,ar))return i;const s=on(e,this.tracksInGroup,ar);if(s>-1){const o=this.tracksInGroup[s];return this.setAudioTrack(s),o}else if(i){let o=t.loadLevel;o===-1&&(o=t.firstAutoLevel);const a=c1(e,t.levels,r,o,ar);if(a===-1)return null;t.nextLoadLevel=a}if(e.channels||e.audioCodec){const o=on(e,r);if(o>-1)return r[o]}}}return null}setAudioTrack(e){const t=this.tracksInGroup;if(e<0||e>=t.length){this.warn(`Invalid audio track id: ${e}`);return}this.clearTimer(),this.selectDefaultTrack=!1;const r=this.currentTrack,i=t[e],s=i.details&&!i.details.live;if(e===this.trackId&&i===r&&s||(this.log(`Switching to audio-track ${e} "${i.name}" lang:${i.lang} group:${i.groupId} channels:${i.channels}`),this.trackId=e,this.currentTrack=i,this.hls.trigger(T.AUDIO_TRACK_SWITCHING,yt({},i)),s))return;const o=this.switchParams(i.url,r==null?void 0:r.details);this.loadPlaylist(o)}findTrackId(e){const t=this.tracksInGroup;for(let r=0;r<t.length;r++){const i=t[r];if(!(this.selectDefaultTrack&&!i.default)&&(!e||br(e,i,ar)))return r}if(e){const{name:r,lang:i,assocLang:s,characteristics:o,audioCodec:a,channels:l}=e;for(let c=0;c<t.length;c++){const d=t[c];if(br({name:r,lang:i,assocLang:s,characteristics:o,audioCodec:a,channels:l},d,ar))return c}for(let c=0;c<t.length;c++){const d=t[c];if(Ir(e.attrs,d.attrs,["LANGUAGE","ASSOC-LANGUAGE","CHARACTERISTICS"]))return c}for(let c=0;c<t.length;c++){const d=t[c];if(Ir(e.attrs,d.attrs,["LANGUAGE"]))return c}}return-1}loadPlaylist(e){const t=this.currentTrack;if(this.shouldLoadPlaylist(t)&&t){super.loadPlaylist();const r=t.id,i=t.groupId;let s=t.url;if(e)try{s=e.addDirectives(s)}catch(o){this.warn(`Could not construct new URL with HLS Delivery Directives: ${o}`)}this.log(`loading audio-track playlist ${r} "${t.name}" lang:${t.lang} group:${i}`),this.clearTimer(),this.hls.trigger(T.AUDIO_TRACK_LOADING,{url:s,id:r,groupId:i,deliveryDirectives:e||null})}}}const hu=500;class dS extends Ll{constructor(e,t,r){super(e,t,r,"[subtitle-stream-controller]",ke.SUBTITLE),this.currentTrackId=-1,this.tracksBuffered=[],this.mainDetails=null,this._registerListeners()}onHandlerDestroying(){this._unregisterListeners(),super.onHandlerDestroying(),this.mainDetails=null}_registerListeners(){const{hls:e}=this;e.on(T.MEDIA_ATTACHED,this.onMediaAttached,this),e.on(T.MEDIA_DETACHING,this.onMediaDetaching,this),e.on(T.MANIFEST_LOADING,this.onManifestLoading,this),e.on(T.LEVEL_LOADED,this.onLevelLoaded,this),e.on(T.ERROR,this.onError,this),e.on(T.SUBTITLE_TRACKS_UPDATED,this.onSubtitleTracksUpdated,this),e.on(T.SUBTITLE_TRACK_SWITCH,this.onSubtitleTrackSwitch,this),e.on(T.SUBTITLE_TRACK_LOADED,this.onSubtitleTrackLoaded,this),e.on(T.SUBTITLE_FRAG_PROCESSED,this.onSubtitleFragProcessed,this),e.on(T.BUFFER_FLUSHING,this.onBufferFlushing,this),e.on(T.FRAG_BUFFERED,this.onFragBuffered,this)}_unregisterListeners(){const{hls:e}=this;e.off(T.MEDIA_ATTACHED,this.onMediaAttached,this),e.off(T.MEDIA_DETACHING,this.onMediaDetaching,this),e.off(T.MANIFEST_LOADING,this.onManifestLoading,this),e.off(T.LEVEL_LOADED,this.onLevelLoaded,this),e.off(T.ERROR,this.onError,this),e.off(T.SUBTITLE_TRACKS_UPDATED,this.onSubtitleTracksUpdated,this),e.off(T.SUBTITLE_TRACK_SWITCH,this.onSubtitleTrackSwitch,this),e.off(T.SUBTITLE_TRACK_LOADED,this.onSubtitleTrackLoaded,this),e.off(T.SUBTITLE_FRAG_PROCESSED,this.onSubtitleFragProcessed,this),e.off(T.BUFFER_FLUSHING,this.onBufferFlushing,this),e.off(T.FRAG_BUFFERED,this.onFragBuffered,this)}startLoad(e){this.stopLoad(),this.state=J.IDLE,this.setInterval(hu),this.nextLoadPosition=this.startPosition=this.lastCurrentTime=e,this.tick()}onManifestLoading(){this.mainDetails=null,this.fragmentTracker.removeAllFragments()}onMediaDetaching(){this.tracksBuffered=[],super.onMediaDetaching()}onLevelLoaded(e,t){this.mainDetails=t.details}onSubtitleFragProcessed(e,t){const{frag:r,success:i}=t;if(this.fragPrevious=r,this.state=J.IDLE,!i)return;const s=this.tracksBuffered[this.currentTrackId];if(!s)return;let o;const a=r.start;for(let c=0;c<s.length;c++)if(a>=s[c].start&&a<=s[c].end){o=s[c];break}const l=r.start+r.duration;o?o.end=l:(o={start:a,end:l},s.push(o)),this.fragmentTracker.fragBuffered(r),this.fragBufferedComplete(r,null)}onBufferFlushing(e,t){const{startOffset:r,endOffset:i}=t;if(r===0&&i!==Number.POSITIVE_INFINITY){const s=i-1;if(s<=0)return;t.endOffsetSubtitles=Math.max(0,s),this.tracksBuffered.forEach(o=>{for(let a=0;a<o.length;){if(o[a].end<=s){o.shift();continue}else if(o[a].start<s)o[a].start=s;else break;a++}}),this.fragmentTracker.removeFragmentsInRange(r,s,ke.SUBTITLE)}}onFragBuffered(e,t){if(!this.loadedmetadata&&t.frag.type===ke.MAIN){var r;(r=this.media)!=null&&r.buffered.length&&(this.loadedmetadata=!0)}}onError(e,t){const r=t.frag;(r==null?void 0:r.type)===ke.SUBTITLE&&(this.fragCurrent&&this.fragCurrent.abortRequests(),this.state!==J.STOPPED&&(this.state=J.IDLE))}onSubtitleTracksUpdated(e,{subtitleTracks:t}){if(this.levels&&np(this.levels,t)){this.levels=t.map(r=>new Rr(r));return}this.tracksBuffered=[],this.levels=t.map(r=>{const i=new Rr(r);return this.tracksBuffered[i.id]=[],i}),this.fragmentTracker.removeFragmentsInRange(0,Number.POSITIVE_INFINITY,ke.SUBTITLE),this.fragPrevious=null,this.mediaBuffer=null}onSubtitleTrackSwitch(e,t){var r;if(this.currentTrackId=t.id,!((r=this.levels)!=null&&r.length)||this.currentTrackId===-1){this.clearInterval();return}const i=this.levels[this.currentTrackId];i!=null&&i.details?this.mediaBuffer=this.mediaBufferTimeRanges:this.mediaBuffer=null,i&&this.setInterval(hu)}onSubtitleTrackLoaded(e,t){var r;const{currentTrackId:i,levels:s}=this,{details:o,id:a}=t;if(!s){this.warn(`Subtitle tracks were reset while loading level ${a}`);return}const l=s[i];if(a>=s.length||a!==i||!l)return;this.log(`Subtitle track ${a} loaded [${o.startSN},${o.endSN}]${o.lastPartSn?`[part-${o.lastPartSn}-${o.lastPartIndex}]`:""},duration:${o.totalduration}`),this.mediaBuffer=this.mediaBufferTimeRanges;let c=0;if(o.live||(r=l.details)!=null&&r.live){const u=this.mainDetails;if(o.deltaUpdateFailed||!u)return;const h=u.fragments[0];if(!l.details)o.hasProgramDateTime&&u.hasProgramDateTime?(Gs(o,u),c=o.fragments[0].start):h&&(c=h.start,Pa(o,c));else{var d;c=this.alignPlaylists(o,l.details,(d=this.levelLastLoaded)==null?void 0:d.details),c===0&&h&&(c=h.start,Pa(o,c))}}l.details=o,this.levelLastLoaded=l,!this.startFragRequested&&(this.mainDetails||!o.live)&&this.setStartPosition(this.mainDetails||o,c),this.tick(),o.live&&!this.fragCurrent&&this.media&&this.state===J.IDLE&&(Hs(null,o.fragments,this.media.currentTime,0)||(this.warn("Subtitle playlist not aligned with playback"),l.details=void 0))}_handleFragmentLoadComplete(e){const{frag:t,payload:r}=e,i=t.decryptdata,s=this.hls;if(!this.fragContextChanged(t)&&r&&r.byteLength>0&&i!=null&&i.key&&i.iv&&i.method==="AES-128"){const o=performance.now();this.decrypter.decrypt(new Uint8Array(r),i.key.buffer,i.iv.buffer).catch(a=>{throw s.trigger(T.ERROR,{type:Le.MEDIA_ERROR,details:$.FRAG_DECRYPT_ERROR,fatal:!1,error:a,reason:a.message,frag:t}),a}).then(a=>{const l=performance.now();s.trigger(T.FRAG_DECRYPTED,{frag:t,payload:a,stats:{tstart:o,tdecrypt:l}})}).catch(a=>{this.warn(`${a.name}: ${a.message}`),this.state=J.IDLE})}}doTick(){if(!this.media){this.state=J.IDLE;return}if(this.state===J.IDLE){const{currentTrackId:e,levels:t}=this,r=t==null?void 0:t[e];if(!r||!t.length||!r.details)return;const{config:i}=this,s=this.getLoadPosition(),o=et.bufferedInfo(this.tracksBuffered[this.currentTrackId]||[],s,i.maxBufferHole),{end:a,len:l}=o,c=this.getFwdBufferInfo(this.media,ke.MAIN),d=r.details,u=this.getMaxBufferLength(c==null?void 0:c.len)+d.levelTargetDuration;if(l>u)return;const h=d.fragments,g=h.length,y=d.edge;let b=null;const E=this.fragPrevious;if(a<y){const C=i.maxFragLookUpTolerance,w=a>y-C?0:C;b=Hs(E,h,Math.max(h[0].start,a),w),!b&&E&&E.start<h[0].start&&(b=h[0])}else b=h[g-1];if(!b)return;if(b=this.mapToInitFragWhenRequired(b),b.sn!=="initSegment"){const C=b.sn-d.startSN,w=h[C-1];w&&w.cc===b.cc&&this.fragmentTracker.getState(w)===mt.NOT_LOADED&&(b=w)}this.fragmentTracker.getState(b)===mt.NOT_LOADED&&this.loadFragment(b,r,a)}}getMaxBufferLength(e){const t=super.getMaxBufferLength();return e?Math.max(t,e):t}loadFragment(e,t,r){this.fragCurrent=e,e.sn==="initSegment"?this._loadInitSegment(e,t):(this.startFragRequested=!0,super.loadFragment(e,t,r))}get mediaBufferTimeRanges(){return new uS(this.tracksBuffered[this.currentTrackId]||[])}}class uS{constructor(e){this.buffered=void 0;const t=(r,i,s)=>{if(i=i>>>0,i>s-1)throw new DOMException(`Failed to execute '${r}' on 'TimeRanges': The index provided (${i}) is greater than the maximum bound (${s})`);return e[i][r]};this.buffered={get length(){return e.length},end(r){return t("end",r,e.length)},start(r){return t("start",r,e.length)}}}}class hS extends Cl{constructor(e){super(e,"[subtitle-track-controller]"),this.media=null,this.tracks=[],this.groupIds=null,this.tracksInGroup=[],this.trackId=-1,this.currentTrack=null,this.selectDefaultTrack=!0,this.queuedDefaultTrack=-1,this.asyncPollTrackChange=()=>this.pollTrackChange(0),this.useTextTrackPolling=!1,this.subtitlePollingInterval=-1,this._subtitleDisplay=!0,this.onTextTracksChanged=()=>{if(this.useTextTrackPolling||self.clearInterval(this.subtitlePollingInterval),!this.media||!this.hls.config.renderTextTracksNatively)return;let t=null;const r=bs(this.media.textTracks);for(let s=0;s<r.length;s++)if(r[s].mode==="hidden")t=r[s];else if(r[s].mode==="showing"){t=r[s];break}const i=this.findTrackForTextTrack(t);this.subtitleTrack!==i&&this.setSubtitleTrack(i)},this.registerListeners()}destroy(){this.unregisterListeners(),this.tracks.length=0,this.tracksInGroup.length=0,this.currentTrack=null,this.onTextTracksChanged=this.asyncPollTrackChange=null,super.destroy()}get subtitleDisplay(){return this._subtitleDisplay}set subtitleDisplay(e){this._subtitleDisplay=e,this.trackId>-1&&this.toggleTrackModes()}registerListeners(){const{hls:e}=this;e.on(T.MEDIA_ATTACHED,this.onMediaAttached,this),e.on(T.MEDIA_DETACHING,this.onMediaDetaching,this),e.on(T.MANIFEST_LOADING,this.onManifestLoading,this),e.on(T.MANIFEST_PARSED,this.onManifestParsed,this),e.on(T.LEVEL_LOADING,this.onLevelLoading,this),e.on(T.LEVEL_SWITCHING,this.onLevelSwitching,this),e.on(T.SUBTITLE_TRACK_LOADED,this.onSubtitleTrackLoaded,this),e.on(T.ERROR,this.onError,this)}unregisterListeners(){const{hls:e}=this;e.off(T.MEDIA_ATTACHED,this.onMediaAttached,this),e.off(T.MEDIA_DETACHING,this.onMediaDetaching,this),e.off(T.MANIFEST_LOADING,this.onManifestLoading,this),e.off(T.MANIFEST_PARSED,this.onManifestParsed,this),e.off(T.LEVEL_LOADING,this.onLevelLoading,this),e.off(T.LEVEL_SWITCHING,this.onLevelSwitching,this),e.off(T.SUBTITLE_TRACK_LOADED,this.onSubtitleTrackLoaded,this),e.off(T.ERROR,this.onError,this)}onMediaAttached(e,t){this.media=t.media,this.media&&(this.queuedDefaultTrack>-1&&(this.subtitleTrack=this.queuedDefaultTrack,this.queuedDefaultTrack=-1),this.useTextTrackPolling=!(this.media.textTracks&&"onchange"in this.media.textTracks),this.useTextTrackPolling?this.pollTrackChange(500):this.media.textTracks.addEventListener("change",this.asyncPollTrackChange))}pollTrackChange(e){self.clearInterval(this.subtitlePollingInterval),this.subtitlePollingInterval=self.setInterval(this.onTextTracksChanged,e)}onMediaDetaching(){if(!this.media)return;self.clearInterval(this.subtitlePollingInterval),this.useTextTrackPolling||this.media.textTracks.removeEventListener("change",this.asyncPollTrackChange),this.trackId>-1&&(this.queuedDefaultTrack=this.trackId),bs(this.media.textTracks).forEach(t=>{pr(t)}),this.subtitleTrack=-1,this.media=null}onManifestLoading(){this.tracks=[],this.groupIds=null,this.tracksInGroup=[],this.trackId=-1,this.currentTrack=null,this.selectDefaultTrack=!0}onManifestParsed(e,t){this.tracks=t.subtitleTracks}onSubtitleTrackLoaded(e,t){const{id:r,groupId:i,details:s}=t,o=this.tracksInGroup[r];if(!o||o.groupId!==i){this.warn(`Subtitle track with id:${r} and group:${i} not found in active group ${o==null?void 0:o.groupId}`);return}const a=o.details;o.details=t.details,this.log(`Subtitle track ${r} "${o.name}" lang:${o.lang} group:${i} loaded [${s.startSN}-${s.endSN}]`),r===this.trackId&&this.playlistLoaded(r,t,a)}onLevelLoading(e,t){this.switchLevel(t.level)}onLevelSwitching(e,t){this.switchLevel(t.level)}switchLevel(e){const t=this.hls.levels[e];if(!t)return;const r=t.subtitleGroups||null,i=this.groupIds;let s=this.currentTrack;if(!r||(i==null?void 0:i.length)!==(r==null?void 0:r.length)||r!=null&&r.some(o=>(i==null?void 0:i.indexOf(o))===-1)){this.groupIds=r,this.trackId=-1,this.currentTrack=null;const o=this.tracks.filter(d=>!r||r.indexOf(d.groupId)!==-1);if(o.length)this.selectDefaultTrack&&!o.some(d=>d.default)&&(this.selectDefaultTrack=!1),o.forEach((d,u)=>{d.id=u});else if(!s&&!this.tracksInGroup.length)return;this.tracksInGroup=o;const a=this.hls.config.subtitlePreference;if(!s&&a){this.selectDefaultTrack=!1;const d=on(a,o);if(d>-1)s=o[d];else{const u=on(a,this.tracks);s=this.tracks[u]}}let l=this.findTrackId(s);l===-1&&s&&(l=this.findTrackId(null));const c={subtitleTracks:o};this.log(`Updating subtitle tracks, ${o.length} track(s) found in "${r==null?void 0:r.join(",")}" group-id`),this.hls.trigger(T.SUBTITLE_TRACKS_UPDATED,c),l!==-1&&this.trackId===-1&&this.setSubtitleTrack(l)}else this.shouldReloadPlaylist(s)&&this.setSubtitleTrack(this.trackId)}findTrackId(e){const t=this.tracksInGroup,r=this.selectDefaultTrack;for(let i=0;i<t.length;i++){const s=t[i];if(!(r&&!s.default||!r&&!e)&&(!e||br(s,e)))return i}if(e){for(let i=0;i<t.length;i++){const s=t[i];if(Ir(e.attrs,s.attrs,["LANGUAGE","ASSOC-LANGUAGE","CHARACTERISTICS"]))return i}for(let i=0;i<t.length;i++){const s=t[i];if(Ir(e.attrs,s.attrs,["LANGUAGE"]))return i}}return-1}findTrackForTextTrack(e){if(e){const t=this.tracksInGroup;for(let r=0;r<t.length;r++){const i=t[r];if(Fa(i,e))return r}}return-1}onError(e,t){t.fatal||!t.context||t.context.type===Ue.SUBTITLE_TRACK&&t.context.id===this.trackId&&(!this.groupIds||this.groupIds.indexOf(t.context.groupId)!==-1)&&this.checkRetry(t)}get allSubtitleTracks(){return this.tracks}get subtitleTracks(){return this.tracksInGroup}get subtitleTrack(){return this.trackId}set subtitleTrack(e){this.selectDefaultTrack=!1,this.setSubtitleTrack(e)}setSubtitleOption(e){if(this.hls.config.subtitlePreference=e,e){const t=this.allSubtitleTracks;if(this.selectDefaultTrack=!1,t.length){const r=this.currentTrack;if(r&&br(e,r))return r;const i=on(e,this.tracksInGroup);if(i>-1){const s=this.tracksInGroup[i];return this.setSubtitleTrack(i),s}else{if(r)return null;{const s=on(e,t);if(s>-1)return t[s]}}}}return null}loadPlaylist(e){super.loadPlaylist();const t=this.currentTrack;if(this.shouldLoadPlaylist(t)&&t){const r=t.id,i=t.groupId;let s=t.url;if(e)try{s=e.addDirectives(s)}catch(o){this.warn(`Could not construct new URL with HLS Delivery Directives: ${o}`)}this.log(`Loading subtitle playlist for id ${r}`),this.hls.trigger(T.SUBTITLE_TRACK_LOADING,{url:s,id:r,groupId:i,deliveryDirectives:e||null})}}toggleTrackModes(){const{media:e}=this;if(!e)return;const t=bs(e.textTracks),r=this.currentTrack;let i;if(r&&(i=t.filter(s=>Fa(r,s))[0],i||this.warn(`Unable to find subtitle TextTrack with name "${r.name}" and language "${r.lang}"`)),[].slice.call(t).forEach(s=>{s.mode!=="disabled"&&s!==i&&(s.mode="disabled")}),i){const s=this.subtitleDisplay?"showing":"hidden";i.mode!==s&&(i.mode=s)}}setSubtitleTrack(e){const t=this.tracksInGroup;if(!this.media){this.queuedDefaultTrack=e;return}if(e<-1||e>=t.length||!pe(e)){this.warn(`Invalid subtitle track id: ${e}`);return}this.clearTimer(),this.selectDefaultTrack=!1;const r=this.currentTrack,i=t[e]||null;if(this.trackId=e,this.currentTrack=i,this.toggleTrackModes(),!i){this.hls.trigger(T.SUBTITLE_TRACK_SWITCH,{id:e});return}const s=!!i.details&&!i.details.live;if(e===this.trackId&&i===r&&s)return;this.log(`Switching to subtitle-track ${e}`+(i?` "${i.name}" lang:${i.lang} group:${i.groupId}`:""));const{id:o,groupId:a="",name:l,type:c,url:d}=i;this.hls.trigger(T.SUBTITLE_TRACK_SWITCH,{id:o,groupId:a,name:l,type:c,url:d});const u=this.switchParams(i.url,r==null?void 0:r.details);this.loadPlaylist(u)}}class fS{constructor(e){this.buffers=void 0,this.queues={video:[],audio:[],audiovideo:[]},this.buffers=e}append(e,t,r){const i=this.queues[t];i.push(e),i.length===1&&!r&&this.executeNext(t)}insertAbort(e,t){this.queues[t].unshift(e),this.executeNext(t)}appendBlocker(e){let t;const r=new Promise(s=>{t=s}),i={execute:t,onStart:()=>{},onComplete:()=>{},onError:()=>{}};return this.append(i,e),r}executeNext(e){const t=this.queues[e];if(t.length){const r=t[0];try{r.execute()}catch(i){B.warn(`[buffer-operation-queue]: Exception executing "${e}" SourceBuffer operation: ${i}`),r.onError(i);const s=this.buffers[e];s!=null&&s.updating||this.shiftAndExecuteNext(e)}}}shiftAndExecuteNext(e){this.queues[e].shift(),this.executeNext(e)}current(e){return this.queues[e][0]}}const fu=/(avc[1234]|hvc1|hev1|dvh[1e]|vp09|av01)(?:\.[^.,]+)+/;class pS{constructor(e){this.details=null,this._objectUrl=null,this.operationQueue=void 0,this.listeners=void 0,this.hls=void 0,this.bufferCodecEventsExpected=0,this._bufferCodecEventsTotal=0,this.media=null,this.mediaSource=null,this.lastMpegAudioChunk=null,this.appendSource=void 0,this.appendErrors={audio:0,video:0,audiovideo:0},this.tracks={},this.pendingTracks={},this.sourceBuffer=void 0,this.log=void 0,this.warn=void 0,this.error=void 0,this._onEndStreaming=r=>{this.hls&&this.hls.pauseBuffering()},this._onStartStreaming=r=>{this.hls&&this.hls.resumeBuffering()},this._onMediaSourceOpen=()=>{const{media:r,mediaSource:i}=this;this.log("Media source opened"),r&&(r.removeEventListener("emptied",this._onMediaEmptied),this.updateMediaElementDuration(),this.hls.trigger(T.MEDIA_ATTACHED,{media:r,mediaSource:i})),i&&i.removeEventListener("sourceopen",this._onMediaSourceOpen),this.checkPendingTracks()},this._onMediaSourceClose=()=>{this.log("Media source closed")},this._onMediaSourceEnded=()=>{this.log("Media source ended")},this._onMediaEmptied=()=>{const{mediaSrc:r,_objectUrl:i}=this;r!==i&&B.error(`Media element src was set while attaching MediaSource (${i} > ${r})`)},this.hls=e;const t="[buffer-controller]";this.appendSource=e.config.preferManagedMediaSource&&typeof self<"u"&&self.ManagedMediaSource,this.log=B.log.bind(B,t),this.warn=B.warn.bind(B,t),this.error=B.error.bind(B,t),this._initSourceBuffer(),this.registerListeners()}hasSourceTypes(){return this.getSourceBufferTypes().length>0||Object.keys(this.pendingTracks).length>0}destroy(){this.unregisterListeners(),this.details=null,this.lastMpegAudioChunk=null,this.hls=null}registerListeners(){const{hls:e}=this;e.on(T.MEDIA_ATTACHING,this.onMediaAttaching,this),e.on(T.MEDIA_DETACHING,this.onMediaDetaching,this),e.on(T.MANIFEST_LOADING,this.onManifestLoading,this),e.on(T.MANIFEST_PARSED,this.onManifestParsed,this),e.on(T.BUFFER_RESET,this.onBufferReset,this),e.on(T.BUFFER_APPENDING,this.onBufferAppending,this),e.on(T.BUFFER_CODECS,this.onBufferCodecs,this),e.on(T.BUFFER_EOS,this.onBufferEos,this),e.on(T.BUFFER_FLUSHING,this.onBufferFlushing,this),e.on(T.LEVEL_UPDATED,this.onLevelUpdated,this),e.on(T.FRAG_PARSED,this.onFragParsed,this),e.on(T.FRAG_CHANGED,this.onFragChanged,this)}unregisterListeners(){const{hls:e}=this;e.off(T.MEDIA_ATTACHING,this.onMediaAttaching,this),e.off(T.MEDIA_DETACHING,this.onMediaDetaching,this),e.off(T.MANIFEST_LOADING,this.onManifestLoading,this),e.off(T.MANIFEST_PARSED,this.onManifestParsed,this),e.off(T.BUFFER_RESET,this.onBufferReset,this),e.off(T.BUFFER_APPENDING,this.onBufferAppending,this),e.off(T.BUFFER_CODECS,this.onBufferCodecs,this),e.off(T.BUFFER_EOS,this.onBufferEos,this),e.off(T.BUFFER_FLUSHING,this.onBufferFlushing,this),e.off(T.LEVEL_UPDATED,this.onLevelUpdated,this),e.off(T.FRAG_PARSED,this.onFragParsed,this),e.off(T.FRAG_CHANGED,this.onFragChanged,this)}_initSourceBuffer(){this.sourceBuffer={},this.operationQueue=new fS(this.sourceBuffer),this.listeners={audio:[],video:[],audiovideo:[]},this.appendErrors={audio:0,video:0,audiovideo:0},this.lastMpegAudioChunk=null}onManifestLoading(){this.bufferCodecEventsExpected=this._bufferCodecEventsTotal=0,this.details=null}onManifestParsed(e,t){let r=2;(t.audio&&!t.video||!t.altAudio)&&(r=1),this.bufferCodecEventsExpected=this._bufferCodecEventsTotal=r,this.log(`${this.bufferCodecEventsExpected} bufferCodec event(s) expected`)}onMediaAttaching(e,t){const r=this.media=t.media,i=Fr(this.appendSource);if(r&&i){var s;const o=this.mediaSource=new i;this.log(`created media source: ${(s=o.constructor)==null?void 0:s.name}`),o.addEventListener("sourceopen",this._onMediaSourceOpen),o.addEventListener("sourceended",this._onMediaSourceEnded),o.addEventListener("sourceclose",this._onMediaSourceClose),this.appendSource&&(o.addEventListener("startstreaming",this._onStartStreaming),o.addEventListener("endstreaming",this._onEndStreaming));const a=this._objectUrl=self.URL.createObjectURL(o);if(this.appendSource)try{r.removeAttribute("src");const l=self.ManagedMediaSource;r.disableRemotePlayback=r.disableRemotePlayback||l&&o instanceof l,pu(r),mS(r,a),r.load()}catch{r.src=a}else r.src=a;r.addEventListener("emptied",this._onMediaEmptied)}}onMediaDetaching(){const{media:e,mediaSource:t,_objectUrl:r}=this;if(t){if(this.log("media source detaching"),t.readyState==="open")try{t.endOfStream()}catch(i){this.warn(`onMediaDetaching: ${i.message} while calling endOfStream`)}this.onBufferReset(),t.removeEventListener("sourceopen",this._onMediaSourceOpen),t.removeEventListener("sourceended",this._onMediaSourceEnded),t.removeEventListener("sourceclose",this._onMediaSourceClose),this.appendSource&&(t.removeEventListener("startstreaming",this._onStartStreaming),t.removeEventListener("endstreaming",this._onEndStreaming)),e&&(e.removeEventListener("emptied",this._onMediaEmptied),r&&self.URL.revokeObjectURL(r),this.mediaSrc===r?(e.removeAttribute("src"),this.appendSource&&pu(e),e.load()):this.warn("media|source.src was changed by a third party - skip cleanup")),this.mediaSource=null,this.media=null,this._objectUrl=null,this.bufferCodecEventsExpected=this._bufferCodecEventsTotal,this.pendingTracks={},this.tracks={}}this.hls.trigger(T.MEDIA_DETACHED,void 0)}onBufferReset(){this.getSourceBufferTypes().forEach(e=>{this.resetBuffer(e)}),this._initSourceBuffer()}resetBuffer(e){const t=this.sourceBuffer[e];try{if(t){var r;this.removeBufferListeners(e),this.sourceBuffer[e]=void 0,(r=this.mediaSource)!=null&&r.sourceBuffers.length&&this.mediaSource.removeSourceBuffer(t)}}catch(i){this.warn(`onBufferReset ${e}`,i)}}onBufferCodecs(e,t){const r=this.getSourceBufferTypes().length,i=Object.keys(t);if(i.forEach(o=>{if(r){const l=this.tracks[o];if(l&&typeof l.buffer.changeType=="function"){var a;const{id:c,codec:d,levelCodec:u,container:h,metadata:g}=t[o],y=Fd(l.codec,l.levelCodec),b=y==null?void 0:y.replace(fu,"$1");let E=Fd(d,u);const C=(a=E)==null?void 0:a.replace(fu,"$1");if(E&&b!==C){o.slice(0,5)==="audio"&&(E=Ms(E,this.appendSource));const w=`${h};codecs=${E}`;this.appendChangeType(o,w),this.log(`switching codec ${y} to ${E}`),this.tracks[o]={buffer:l.buffer,codec:d,container:h,levelCodec:u,metadata:g,id:c}}}}else this.pendingTracks[o]=t[o]}),r)return;const s=Math.max(this.bufferCodecEventsExpected-1,0);this.bufferCodecEventsExpected!==s&&(this.log(`${s} bufferCodec event(s) expected ${i.join(",")}`),this.bufferCodecEventsExpected=s),this.mediaSource&&this.mediaSource.readyState==="open"&&this.checkPendingTracks()}appendChangeType(e,t){const{operationQueue:r}=this,i={execute:()=>{const s=this.sourceBuffer[e];s&&(this.log(`changing ${e} sourceBuffer type to ${t}`),s.changeType(t)),r.shiftAndExecuteNext(e)},onStart:()=>{},onComplete:()=>{},onError:s=>{this.warn(`Failed to change ${e} SourceBuffer type`,s)}};r.append(i,e,!!this.pendingTracks[e])}onBufferAppending(e,t){const{hls:r,operationQueue:i,tracks:s}=this,{data:o,type:a,frag:l,part:c,chunkMeta:d}=t,u=d.buffering[a],h=self.performance.now();u.start=h;const g=l.stats.buffering,y=c?c.stats.buffering:null;g.start===0&&(g.start=h),y&&y.start===0&&(y.start=h);const b=s.audio;let E=!1;a==="audio"&&(b==null?void 0:b.container)==="audio/mpeg"&&(E=!this.lastMpegAudioChunk||d.id===1||this.lastMpegAudioChunk.sn!==d.sn,this.lastMpegAudioChunk=d);const C=l.start,w={execute:()=>{if(u.executeStart=self.performance.now(),E){const R=this.sourceBuffer[a];if(R){const _=C-R.timestampOffset;Math.abs(_)>=.1&&(this.log(`Updating audio SourceBuffer timestampOffset to ${C} (delta: ${_}) sn: ${l.sn})`),R.timestampOffset=C)}}this.appendExecutor(o,a)},onStart:()=>{},onComplete:()=>{const R=self.performance.now();u.executeEnd=u.end=R,g.first===0&&(g.first=R),y&&y.first===0&&(y.first=R);const{sourceBuffer:_}=this,P={};for(const H in _)P[H]=et.getBuffered(_[H]);this.appendErrors[a]=0,a==="audio"||a==="video"?this.appendErrors.audiovideo=0:(this.appendErrors.audio=0,this.appendErrors.video=0),this.hls.trigger(T.BUFFER_APPENDED,{type:a,frag:l,part:c,chunkMeta:d,parent:l.type,timeRanges:P})},onError:R=>{const _={type:Le.MEDIA_ERROR,parent:l.type,details:$.BUFFER_APPEND_ERROR,sourceBufferName:a,frag:l,part:c,chunkMeta:d,error:R,err:R,fatal:!1};if(R.code===DOMException.QUOTA_EXCEEDED_ERR)_.details=$.BUFFER_FULL_ERROR;else{const P=++this.appendErrors[a];_.details=$.BUFFER_APPEND_ERROR,this.warn(`Failed ${P}/${r.config.appendErrorMaxRetry} times to append segment in "${a}" sourceBuffer`),P>=r.config.appendErrorMaxRetry&&(_.fatal=!0)}r.trigger(T.ERROR,_)}};i.append(w,a,!!this.pendingTracks[a])}onBufferFlushing(e,t){const{operationQueue:r}=this,i=s=>({execute:this.removeExecutor.bind(this,s,t.startOffset,t.endOffset),onStart:()=>{},onComplete:()=>{this.hls.trigger(T.BUFFER_FLUSHED,{type:s})},onError:o=>{this.warn(`Failed to remove from ${s} SourceBuffer`,o)}});t.type?r.append(i(t.type),t.type):this.getSourceBufferTypes().forEach(s=>{r.append(i(s),s)})}onFragParsed(e,t){const{frag:r,part:i}=t,s=[],o=i?i.elementaryStreams:r.elementaryStreams;o[We.AUDIOVIDEO]?s.push("audiovideo"):(o[We.AUDIO]&&s.push("audio"),o[We.VIDEO]&&s.push("video"));const a=()=>{const l=self.performance.now();r.stats.buffering.end=l,i&&(i.stats.buffering.end=l);const c=i?i.stats:r.stats;this.hls.trigger(T.FRAG_BUFFERED,{frag:r,part:i,stats:c,id:r.type})};s.length===0&&this.warn(`Fragments must have at least one ElementaryStreamType set. type: ${r.type} level: ${r.level} sn: ${r.sn}`),this.blockBuffers(a,s)}onFragChanged(e,t){this.trimBuffers()}onBufferEos(e,t){this.getSourceBufferTypes().reduce((i,s)=>{const o=this.sourceBuffer[s];return o&&(!t.type||t.type===s)&&(o.ending=!0,o.ended||(o.ended=!0,this.log(`${s} sourceBuffer now EOS`))),i&&!!(!o||o.ended)},!0)&&(this.log("Queueing mediaSource.endOfStream()"),this.blockBuffers(()=>{this.getSourceBufferTypes().forEach(s=>{const o=this.sourceBuffer[s];o&&(o.ending=!1)});const{mediaSource:i}=this;if(!i||i.readyState!=="open"){i&&this.log(`Could not call mediaSource.endOfStream(). mediaSource.readyState: ${i.readyState}`);return}this.log("Calling mediaSource.endOfStream()"),i.endOfStream()}))}onLevelUpdated(e,{details:t}){t.fragments.length&&(this.details=t,this.getSourceBufferTypes().length?this.blockBuffers(this.updateMediaElementDuration.bind(this)):this.updateMediaElementDuration())}trimBuffers(){const{hls:e,details:t,media:r}=this;if(!r||t===null||!this.getSourceBufferTypes().length)return;const s=e.config,o=r.currentTime,a=t.levelTargetDuration,l=t.live&&s.liveBackBufferLength!==null?s.liveBackBufferLength:s.backBufferLength;if(pe(l)&&l>0){const c=Math.max(l,a),d=Math.floor(o/a)*a-c;this.flushBackBuffer(o,a,d)}if(pe(s.frontBufferFlushThreshold)&&s.frontBufferFlushThreshold>0){const c=Math.max(s.maxBufferLength,s.frontBufferFlushThreshold),d=Math.max(c,a),u=Math.floor(o/a)*a+d;this.flushFrontBuffer(o,a,u)}}flushBackBuffer(e,t,r){const{details:i,sourceBuffer:s}=this;this.getSourceBufferTypes().forEach(a=>{const l=s[a];if(l){const c=et.getBuffered(l);if(c.length>0&&r>c.start(0)){if(this.hls.trigger(T.BACK_BUFFER_REACHED,{bufferEnd:r}),i!=null&&i.live)this.hls.trigger(T.LIVE_BACK_BUFFER_REACHED,{bufferEnd:r});else if(l.ended&&c.end(c.length-1)-e<t*2){this.log(`Cannot flush ${a} back buffer while SourceBuffer is in ended state`);return}this.hls.trigger(T.BUFFER_FLUSHING,{startOffset:0,endOffset:r,type:a})}}})}flushFrontBuffer(e,t,r){const{sourceBuffer:i}=this;this.getSourceBufferTypes().forEach(o=>{const a=i[o];if(a){const l=et.getBuffered(a),c=l.length;if(c<2)return;const d=l.start(c-1),u=l.end(c-1);if(r>d||e>=d&&e<=u)return;if(a.ended&&e-u<2*t){this.log(`Cannot flush ${o} front buffer while SourceBuffer is in ended state`);return}this.hls.trigger(T.BUFFER_FLUSHING,{startOffset:d,endOffset:1/0,type:o})}})}updateMediaElementDuration(){if(!this.details||!this.media||!this.mediaSource||this.mediaSource.readyState!=="open")return;const{details:e,hls:t,media:r,mediaSource:i}=this,s=e.fragments[0].start+e.totalduration,o=r.duration,a=pe(i.duration)?i.duration:0;e.live&&t.config.liveDurationInfinity?(i.duration=1/0,this.updateSeekableRange(e)):(s>a&&s>o||!pe(o))&&(this.log(`Updating Media Source duration to ${s.toFixed(3)}`),i.duration=s)}updateSeekableRange(e){const t=this.mediaSource,r=e.fragments;if(r.length&&e.live&&t!=null&&t.setLiveSeekableRange){const s=Math.max(0,r[0].start),o=Math.max(s,s+e.totalduration);this.log(`Media Source duration is set to ${t.duration}. Setting seekable range to ${s}-${o}.`),t.setLiveSeekableRange(s,o)}}checkPendingTracks(){const{bufferCodecEventsExpected:e,operationQueue:t,pendingTracks:r}=this,i=Object.keys(r).length;if(i&&(!e||i===2||"audiovideo"in r)){this.createSourceBuffers(r),this.pendingTracks={};const s=this.getSourceBufferTypes();if(s.length)this.hls.trigger(T.BUFFER_CREATED,{tracks:this.tracks}),s.forEach(o=>{t.executeNext(o)});else{const o=new Error("could not create source buffer for media codec(s)");this.hls.trigger(T.ERROR,{type:Le.MEDIA_ERROR,details:$.BUFFER_INCOMPATIBLE_CODECS_ERROR,fatal:!0,error:o,reason:o.message})}}}createSourceBuffers(e){const{sourceBuffer:t,mediaSource:r}=this;if(!r)throw Error("createSourceBuffers called when mediaSource was null");for(const i in e)if(!t[i]){const s=e[i];if(!s)throw Error(`source buffer exists for track ${i}, however track does not`);let o=s.levelCodec||s.codec;o&&i.slice(0,5)==="audio"&&(o=Ms(o,this.appendSource));const a=`${s.container};codecs=${o}`;this.log(`creating sourceBuffer(${a})`);try{const l=t[i]=r.addSourceBuffer(a),c=i;this.addBufferListener(c,"updatestart",this._onSBUpdateStart),this.addBufferListener(c,"updateend",this._onSBUpdateEnd),this.addBufferListener(c,"error",this._onSBUpdateError),this.appendSource&&this.addBufferListener(c,"bufferedchange",(d,u)=>{const h=u.removedRanges;h!=null&&h.length&&this.hls.trigger(T.BUFFER_FLUSHED,{type:i})}),this.tracks[i]={buffer:l,codec:o,container:s.container,levelCodec:s.levelCodec,metadata:s.metadata,id:s.id}}catch(l){this.error(`error while trying to add sourceBuffer: ${l.message}`),this.hls.trigger(T.ERROR,{type:Le.MEDIA_ERROR,details:$.BUFFER_ADD_CODEC_ERROR,fatal:!1,error:l,sourceBufferName:i,mimeType:a})}}}get mediaSrc(){var e;const t=((e=this.media)==null?void 0:e.firstChild)||this.media;return t==null?void 0:t.src}_onSBUpdateStart(e){const{operationQueue:t}=this;t.current(e).onStart()}_onSBUpdateEnd(e){var t;if(((t=this.mediaSource)==null?void 0:t.readyState)==="closed"){this.resetBuffer(e);return}const{operationQueue:r}=this;r.current(e).onComplete(),r.shiftAndExecuteNext(e)}_onSBUpdateError(e,t){var r;const i=new Error(`${e} SourceBuffer error. MediaSource readyState: ${(r=this.mediaSource)==null?void 0:r.readyState}`);this.error(`${i}`,t),this.hls.trigger(T.ERROR,{type:Le.MEDIA_ERROR,details:$.BUFFER_APPENDING_ERROR,sourceBufferName:e,error:i,fatal:!1});const s=this.operationQueue.current(e);s&&s.onError(i)}removeExecutor(e,t,r){const{media:i,mediaSource:s,operationQueue:o,sourceBuffer:a}=this,l=a[e];if(!i||!s||!l){this.warn(`Attempting to remove from the ${e} SourceBuffer, but it does not exist`),o.shiftAndExecuteNext(e);return}const c=pe(i.duration)?i.duration:1/0,d=pe(s.duration)?s.duration:1/0,u=Math.max(0,t),h=Math.min(r,c,d);h>u&&(!l.ending||l.ended)?(l.ended=!1,this.log(`Removing [${u},${h}] from the ${e} SourceBuffer`),l.remove(u,h)):o.shiftAndExecuteNext(e)}appendExecutor(e,t){const r=this.sourceBuffer[t];if(!r){if(!this.pendingTracks[t])throw new Error(`Attempting to append to the ${t} SourceBuffer, but it does not exist`);return}r.ended=!1,r.appendBuffer(e)}blockBuffers(e,t=this.getSourceBufferTypes()){if(!t.length){this.log("Blocking operation requested, but no SourceBuffers exist"),Promise.resolve().then(e);return}const{operationQueue:r}=this,i=t.map(s=>r.appendBlocker(s));Promise.all(i).then(()=>{e(),t.forEach(s=>{const o=this.sourceBuffer[s];o!=null&&o.updating||r.shiftAndExecuteNext(s)})})}getSourceBufferTypes(){return Object.keys(this.sourceBuffer)}addBufferListener(e,t,r){const i=this.sourceBuffer[e];if(!i)return;const s=r.bind(this,e);this.listeners[e].push({event:t,listener:s}),i.addEventListener(t,s)}removeBufferListeners(e){const t=this.sourceBuffer[e];t&&this.listeners[e].forEach(r=>{t.removeEventListener(r.event,r.listener)})}}function pu(n){const e=n.querySelectorAll("source");[].slice.call(e).forEach(t=>{n.removeChild(t)})}function mS(n,e){const t=self.document.createElement("source");t.type="video/mp4",t.src=e,n.appendChild(t)}const mu={42:225,92:233,94:237,95:243,96:250,123:231,124:247,125:209,126:241,127:9608,128:174,129:176,130:189,131:191,132:8482,133:162,134:163,135:9834,136:224,137:32,138:232,139:226,140:234,141:238,142:244,143:251,144:193,145:201,146:211,147:218,148:220,149:252,150:8216,151:161,152:42,153:8217,154:9473,155:169,156:8480,157:8226,158:8220,159:8221,160:192,161:194,162:199,163:200,164:202,165:203,166:235,167:206,168:207,169:239,170:212,171:217,172:249,173:219,174:171,175:187,176:195,177:227,178:205,179:204,180:236,181:210,182:242,183:213,184:245,185:123,186:125,187:92,188:94,189:95,190:124,191:8764,192:196,193:228,194:214,195:246,196:223,197:165,198:164,199:9475,200:197,201:229,202:216,203:248,204:9487,205:9491,206:9495,207:9499},rp=function(e){let t=e;return mu.hasOwnProperty(e)&&(t=mu[e]),String.fromCharCode(t)},Ht=15,pn=100,gS={17:1,18:3,21:5,22:7,23:9,16:11,19:12,20:14},yS={17:2,18:4,21:6,22:8,23:10,19:13,20:15},AS={25:1,26:3,29:5,30:7,31:9,24:11,27:12,28:14},bS={25:2,26:4,29:6,30:8,31:10,27:13,28:15},vS=["white","green","blue","cyan","red","yellow","magenta","black","transparent"];class ES{constructor(){this.time=null,this.verboseLevel=0}log(e,t){if(this.verboseLevel>=e){const r=typeof t=="function"?t():t;B.log(`${this.time} [${e}] ${r}`)}}}const Gn=function(e){const t=[];for(let r=0;r<e.length;r++)t.push(e[r].toString(16));return t};class ip{constructor(){this.foreground="white",this.underline=!1,this.italics=!1,this.background="black",this.flash=!1}reset(){this.foreground="white",this.underline=!1,this.italics=!1,this.background="black",this.flash=!1}setStyles(e){const t=["foreground","underline","italics","background","flash"];for(let r=0;r<t.length;r++){const i=t[r];e.hasOwnProperty(i)&&(this[i]=e[i])}}isDefault(){return this.foreground==="white"&&!this.underline&&!this.italics&&this.background==="black"&&!this.flash}equals(e){return this.foreground===e.foreground&&this.underline===e.underline&&this.italics===e.italics&&this.background===e.background&&this.flash===e.flash}copy(e){this.foreground=e.foreground,this.underline=e.underline,this.italics=e.italics,this.background=e.background,this.flash=e.flash}toString(){return"color="+this.foreground+", underline="+this.underline+", italics="+this.italics+", background="+this.background+", flash="+this.flash}}class xS{constructor(){this.uchar=" ",this.penState=new ip}reset(){this.uchar=" ",this.penState.reset()}setChar(e,t){this.uchar=e,this.penState.copy(t)}setPenState(e){this.penState.copy(e)}equals(e){return this.uchar===e.uchar&&this.penState.equals(e.penState)}copy(e){this.uchar=e.uchar,this.penState.copy(e.penState)}isEmpty(){return this.uchar===" "&&this.penState.isDefault()}}class SS{constructor(e){this.chars=[],this.pos=0,this.currPenState=new ip,this.cueStartTime=null,this.logger=void 0;for(let t=0;t<pn;t++)this.chars.push(new xS);this.logger=e}equals(e){for(let t=0;t<pn;t++)if(!this.chars[t].equals(e.chars[t]))return!1;return!0}copy(e){for(let t=0;t<pn;t++)this.chars[t].copy(e.chars[t])}isEmpty(){let e=!0;for(let t=0;t<pn;t++)if(!this.chars[t].isEmpty()){e=!1;break}return e}setCursor(e){this.pos!==e&&(this.pos=e),this.pos<0?(this.logger.log(3,"Negative cursor position "+this.pos),this.pos=0):this.pos>pn&&(this.logger.log(3,"Too large cursor position "+this.pos),this.pos=pn)}moveCursor(e){const t=this.pos+e;if(e>1)for(let r=this.pos+1;r<t+1;r++)this.chars[r].setPenState(this.currPenState);this.setCursor(t)}backSpace(){this.moveCursor(-1),this.chars[this.pos].setChar(" ",this.currPenState)}insertChar(e){e>=144&&this.backSpace();const t=rp(e);if(this.pos>=pn){this.logger.log(0,()=>"Cannot insert "+e.toString(16)+" ("+t+") at position "+this.pos+". Skipping it!");return}this.chars[this.pos].setChar(t,this.currPenState),this.moveCursor(1)}clearFromPos(e){let t;for(t=e;t<pn;t++)this.chars[t].reset()}clear(){this.clearFromPos(0),this.pos=0,this.currPenState.reset()}clearToEndOfRow(){this.clearFromPos(this.pos)}getTextString(){const e=[];let t=!0;for(let r=0;r<pn;r++){const i=this.chars[r].uchar;i!==" "&&(t=!1),e.push(i)}return t?"":e.join("")}setPenStyles(e){this.currPenState.setStyles(e),this.chars[this.pos].setPenState(this.currPenState)}}class Xo{constructor(e){this.rows=[],this.currRow=Ht-1,this.nrRollUpRows=null,this.lastOutputScreen=null,this.logger=void 0;for(let t=0;t<Ht;t++)this.rows.push(new SS(e));this.logger=e}reset(){for(let e=0;e<Ht;e++)this.rows[e].clear();this.currRow=Ht-1}equals(e){let t=!0;for(let r=0;r<Ht;r++)if(!this.rows[r].equals(e.rows[r])){t=!1;break}return t}copy(e){for(let t=0;t<Ht;t++)this.rows[t].copy(e.rows[t])}isEmpty(){let e=!0;for(let t=0;t<Ht;t++)if(!this.rows[t].isEmpty()){e=!1;break}return e}backSpace(){this.rows[this.currRow].backSpace()}clearToEndOfRow(){this.rows[this.currRow].clearToEndOfRow()}insertChar(e){this.rows[this.currRow].insertChar(e)}setPen(e){this.rows[this.currRow].setPenStyles(e)}moveCursor(e){this.rows[this.currRow].moveCursor(e)}setCursor(e){this.logger.log(2,"setCursor: "+e),this.rows[this.currRow].setCursor(e)}setPAC(e){this.logger.log(2,()=>"pacData = "+JSON.stringify(e));let t=e.row-1;if(this.nrRollUpRows&&t<this.nrRollUpRows-1&&(t=this.nrRollUpRows-1),this.nrRollUpRows&&this.currRow!==t){for(let a=0;a<Ht;a++)this.rows[a].clear();const s=this.currRow+1-this.nrRollUpRows,o=this.lastOutputScreen;if(o){const a=o.rows[s].cueStartTime,l=this.logger.time;if(a!==null&&l!==null&&a<l)for(let c=0;c<this.nrRollUpRows;c++)this.rows[t-this.nrRollUpRows+c+1].copy(o.rows[s+c])}}this.currRow=t;const r=this.rows[this.currRow];if(e.indent!==null){const s=e.indent,o=Math.max(s-1,0);r.setCursor(e.indent),e.color=r.chars[o].penState.foreground}const i={foreground:e.color,underline:e.underline,italics:e.italics,background:"black",flash:!1};this.setPen(i)}setBkgData(e){this.logger.log(2,()=>"bkgData = "+JSON.stringify(e)),this.backSpace(),this.setPen(e),this.insertChar(32)}setRollUpRows(e){this.nrRollUpRows=e}rollUp(){if(this.nrRollUpRows===null){this.logger.log(3,"roll_up but nrRollUpRows not set yet");return}this.logger.log(1,()=>this.getDisplayText());const e=this.currRow+1-this.nrRollUpRows,t=this.rows.splice(e,1)[0];t.clear(),this.rows.splice(this.currRow,0,t),this.logger.log(2,"Rolling up")}getDisplayText(e){e=e||!1;const t=[];let r="",i=-1;for(let s=0;s<Ht;s++){const o=this.rows[s].getTextString();o&&(i=s+1,e?t.push("Row "+i+": '"+o+"'"):t.push(o.trim()))}return t.length>0&&(e?r="["+t.join(" | ")+"]":r=t.join(`
`)),r}getTextAndFormat(){return this.rows}}class gu{constructor(e,t,r){this.chNr=void 0,this.outputFilter=void 0,this.mode=void 0,this.verbose=void 0,this.displayedMemory=void 0,this.nonDisplayedMemory=void 0,this.lastOutputScreen=void 0,this.currRollUpRow=void 0,this.writeScreen=void 0,this.cueStartTime=void 0,this.logger=void 0,this.chNr=e,this.outputFilter=t,this.mode=null,this.verbose=0,this.displayedMemory=new Xo(r),this.nonDisplayedMemory=new Xo(r),this.lastOutputScreen=new Xo(r),this.currRollUpRow=this.displayedMemory.rows[Ht-1],this.writeScreen=this.displayedMemory,this.mode=null,this.cueStartTime=null,this.logger=r}reset(){this.mode=null,this.displayedMemory.reset(),this.nonDisplayedMemory.reset(),this.lastOutputScreen.reset(),this.outputFilter.reset(),this.currRollUpRow=this.displayedMemory.rows[Ht-1],this.writeScreen=this.displayedMemory,this.mode=null,this.cueStartTime=null}getHandler(){return this.outputFilter}setHandler(e){this.outputFilter=e}setPAC(e){this.writeScreen.setPAC(e)}setBkgData(e){this.writeScreen.setBkgData(e)}setMode(e){e!==this.mode&&(this.mode=e,this.logger.log(2,()=>"MODE="+e),this.mode==="MODE_POP-ON"?this.writeScreen=this.nonDisplayedMemory:(this.writeScreen=this.displayedMemory,this.writeScreen.reset()),this.mode!=="MODE_ROLL-UP"&&(this.displayedMemory.nrRollUpRows=null,this.nonDisplayedMemory.nrRollUpRows=null),this.mode=e)}insertChars(e){for(let r=0;r<e.length;r++)this.writeScreen.insertChar(e[r]);const t=this.writeScreen===this.displayedMemory?"DISP":"NON_DISP";this.logger.log(2,()=>t+": "+this.writeScreen.getDisplayText(!0)),(this.mode==="MODE_PAINT-ON"||this.mode==="MODE_ROLL-UP")&&(this.logger.log(1,()=>"DISPLAYED: "+this.displayedMemory.getDisplayText(!0)),this.outputDataUpdate())}ccRCL(){this.logger.log(2,"RCL - Resume Caption Loading"),this.setMode("MODE_POP-ON")}ccBS(){this.logger.log(2,"BS - BackSpace"),this.mode!=="MODE_TEXT"&&(this.writeScreen.backSpace(),this.writeScreen===this.displayedMemory&&this.outputDataUpdate())}ccAOF(){}ccAON(){}ccDER(){this.logger.log(2,"DER- Delete to End of Row"),this.writeScreen.clearToEndOfRow(),this.outputDataUpdate()}ccRU(e){this.logger.log(2,"RU("+e+") - Roll Up"),this.writeScreen=this.displayedMemory,this.setMode("MODE_ROLL-UP"),this.writeScreen.setRollUpRows(e)}ccFON(){this.logger.log(2,"FON - Flash On"),this.writeScreen.setPen({flash:!0})}ccRDC(){this.logger.log(2,"RDC - Resume Direct Captioning"),this.setMode("MODE_PAINT-ON")}ccTR(){this.logger.log(2,"TR"),this.setMode("MODE_TEXT")}ccRTD(){this.logger.log(2,"RTD"),this.setMode("MODE_TEXT")}ccEDM(){this.logger.log(2,"EDM - Erase Displayed Memory"),this.displayedMemory.reset(),this.outputDataUpdate(!0)}ccCR(){this.logger.log(2,"CR - Carriage Return"),this.writeScreen.rollUp(),this.outputDataUpdate(!0)}ccENM(){this.logger.log(2,"ENM - Erase Non-displayed Memory"),this.nonDisplayedMemory.reset()}ccEOC(){if(this.logger.log(2,"EOC - End Of Caption"),this.mode==="MODE_POP-ON"){const e=this.displayedMemory;this.displayedMemory=this.nonDisplayedMemory,this.nonDisplayedMemory=e,this.writeScreen=this.nonDisplayedMemory,this.logger.log(1,()=>"DISP: "+this.displayedMemory.getDisplayText())}this.outputDataUpdate(!0)}ccTO(e){this.logger.log(2,"TO("+e+") - Tab Offset"),this.writeScreen.moveCursor(e)}ccMIDROW(e){const t={flash:!1};if(t.underline=e%2===1,t.italics=e>=46,t.italics)t.foreground="white";else{const r=Math.floor(e/2)-16,i=["white","green","blue","cyan","red","yellow","magenta"];t.foreground=i[r]}this.logger.log(2,"MIDROW: "+JSON.stringify(t)),this.writeScreen.setPen(t)}outputDataUpdate(e=!1){const t=this.logger.time;t!==null&&this.outputFilter&&(this.cueStartTime===null&&!this.displayedMemory.isEmpty()?this.cueStartTime=t:this.displayedMemory.equals(this.lastOutputScreen)||(this.outputFilter.newCue(this.cueStartTime,t,this.lastOutputScreen),e&&this.outputFilter.dispatchCue&&this.outputFilter.dispatchCue(),this.cueStartTime=this.displayedMemory.isEmpty()?null:t),this.lastOutputScreen.copy(this.displayedMemory))}cueSplitAtTime(e){this.outputFilter&&(this.displayedMemory.isEmpty()||(this.outputFilter.newCue&&this.outputFilter.newCue(this.cueStartTime,e,this.displayedMemory),this.cueStartTime=e))}}class yu{constructor(e,t,r){this.channels=void 0,this.currentChannel=0,this.cmdHistory=bu(),this.logger=void 0;const i=this.logger=new ES;this.channels=[null,new gu(e,t,i),new gu(e+1,r,i)]}getHandler(e){return this.channels[e].getHandler()}setHandler(e,t){this.channels[e].setHandler(t)}addData(e,t){let r,i,s,o=!1;this.logger.time=e;for(let a=0;a<t.length;a+=2)if(i=t[a]&127,s=t[a+1]&127,!(i===0&&s===0)){if(this.logger.log(3,"["+Gn([t[a],t[a+1]])+"] -> ("+Gn([i,s])+")"),r=this.parseCmd(i,s),r||(r=this.parseMidrow(i,s)),r||(r=this.parsePAC(i,s)),r||(r=this.parseBackgroundAttributes(i,s)),!r&&(o=this.parseChars(i,s),o)){const l=this.currentChannel;l&&l>0?this.channels[l].insertChars(o):this.logger.log(2,"No channel found yet. TEXT-MODE?")}!r&&!o&&this.logger.log(2,"Couldn't parse cleaned data "+Gn([i,s])+" orig: "+Gn([t[a],t[a+1]]))}}parseCmd(e,t){const{cmdHistory:r}=this,i=(e===20||e===28||e===21||e===29)&&t>=32&&t<=47,s=(e===23||e===31)&&t>=33&&t<=35;if(!(i||s))return!1;if(Au(e,t,r))return ur(null,null,r),this.logger.log(3,"Repeated command ("+Gn([e,t])+") is dropped"),!0;const o=e===20||e===21||e===23?1:2,a=this.channels[o];return e===20||e===21||e===28||e===29?t===32?a.ccRCL():t===33?a.ccBS():t===34?a.ccAOF():t===35?a.ccAON():t===36?a.ccDER():t===37?a.ccRU(2):t===38?a.ccRU(3):t===39?a.ccRU(4):t===40?a.ccFON():t===41?a.ccRDC():t===42?a.ccTR():t===43?a.ccRTD():t===44?a.ccEDM():t===45?a.ccCR():t===46?a.ccENM():t===47&&a.ccEOC():a.ccTO(t-32),ur(e,t,r),this.currentChannel=o,!0}parseMidrow(e,t){let r=0;if((e===17||e===25)&&t>=32&&t<=47){if(e===17?r=1:r=2,r!==this.currentChannel)return this.logger.log(0,"Mismatch channel in midrow parsing"),!1;const i=this.channels[r];return i?(i.ccMIDROW(t),this.logger.log(3,"MIDROW ("+Gn([e,t])+")"),!0):!1}return!1}parsePAC(e,t){let r;const i=this.cmdHistory,s=(e>=17&&e<=23||e>=25&&e<=31)&&t>=64&&t<=127,o=(e===16||e===24)&&t>=64&&t<=95;if(!(s||o))return!1;if(Au(e,t,i))return ur(null,null,i),!0;const a=e<=23?1:2;t>=64&&t<=95?r=a===1?gS[e]:AS[e]:r=a===1?yS[e]:bS[e];const l=this.channels[a];return l?(l.setPAC(this.interpretPAC(r,t)),ur(e,t,i),this.currentChannel=a,!0):!1}interpretPAC(e,t){let r;const i={color:null,italics:!1,indent:null,underline:!1,row:e};return t>95?r=t-96:r=t-64,i.underline=(r&1)===1,r<=13?i.color=["white","green","blue","cyan","red","yellow","magenta","white"][Math.floor(r/2)]:r<=15?(i.italics=!0,i.color="white"):i.indent=Math.floor((r-16)/2)*4,i}parseChars(e,t){let r,i=null,s=null;if(e>=25?(r=2,s=e-8):(r=1,s=e),s>=17&&s<=19){let o;s===17?o=t+80:s===18?o=t+112:o=t+144,this.logger.log(2,"Special char '"+rp(o)+"' in channel "+r),i=[o]}else e>=32&&e<=127&&(i=t===0?[e]:[e,t]);if(i){const o=Gn(i);this.logger.log(3,"Char codes =  "+o.join(",")),ur(e,t,this.cmdHistory)}return i}parseBackgroundAttributes(e,t){const r=(e===16||e===24)&&t>=32&&t<=47,i=(e===23||e===31)&&t>=45&&t<=47;if(!(r||i))return!1;let s;const o={};e===16||e===24?(s=Math.floor((t-32)/2),o.background=vS[s],t%2===1&&(o.background=o.background+"_semi")):t===45?o.background="transparent":(o.foreground="black",t===47&&(o.underline=!0));const a=e<=23?1:2;return this.channels[a].setBkgData(o),ur(e,t,this.cmdHistory),!0}reset(){for(let e=0;e<Object.keys(this.channels).length;e++){const t=this.channels[e];t&&t.reset()}this.cmdHistory=bu()}cueSplitAtTime(e){for(let t=0;t<this.channels.length;t++){const r=this.channels[t];r&&r.cueSplitAtTime(e)}}}function ur(n,e,t){t.a=n,t.b=e}function Au(n,e,t){return t.a===n&&t.b===e}function bu(){return{a:null,b:null}}class as{constructor(e,t){this.timelineController=void 0,this.cueRanges=[],this.trackName=void 0,this.startTime=null,this.endTime=null,this.screen=null,this.timelineController=e,this.trackName=t}dispatchCue(){this.startTime!==null&&(this.timelineController.addCues(this.trackName,this.startTime,this.endTime,this.screen,this.cueRanges),this.startTime=null)}newCue(e,t,r){(this.startTime===null||this.startTime>e)&&(this.startTime=e),this.endTime=t,this.screen=r,this.timelineController.createCaptionsTrack(this.trackName)}reset(){this.cueRanges=[],this.startTime=null}}var Bl=function(){if(Lr!=null&&Lr.VTTCue)return self.VTTCue;const n=["","lr","rl"],e=["start","middle","end","left","right"];function t(a,l){if(typeof l!="string"||!Array.isArray(a))return!1;const c=l.toLowerCase();return~a.indexOf(c)?c:!1}function r(a){return t(n,a)}function i(a){return t(e,a)}function s(a,...l){let c=1;for(;c<arguments.length;c++){const d=arguments[c];for(const u in d)a[u]=d[u]}return a}function o(a,l,c){const d=this,u={enumerable:!0};d.hasBeenReset=!1;let h="",g=!1,y=a,b=l,E=c,C=null,w="",R=!0,_="auto",P="start",H=50,U="middle",z=50,Q="middle";Object.defineProperty(d,"id",s({},u,{get:function(){return h},set:function(F){h=""+F}})),Object.defineProperty(d,"pauseOnExit",s({},u,{get:function(){return g},set:function(F){g=!!F}})),Object.defineProperty(d,"startTime",s({},u,{get:function(){return y},set:function(F){if(typeof F!="number")throw new TypeError("Start time must be set to a number.");y=F,this.hasBeenReset=!0}})),Object.defineProperty(d,"endTime",s({},u,{get:function(){return b},set:function(F){if(typeof F!="number")throw new TypeError("End time must be set to a number.");b=F,this.hasBeenReset=!0}})),Object.defineProperty(d,"text",s({},u,{get:function(){return E},set:function(F){E=""+F,this.hasBeenReset=!0}})),Object.defineProperty(d,"region",s({},u,{get:function(){return C},set:function(F){C=F,this.hasBeenReset=!0}})),Object.defineProperty(d,"vertical",s({},u,{get:function(){return w},set:function(F){const Y=r(F);if(Y===!1)throw new SyntaxError("An invalid or illegal string was specified.");w=Y,this.hasBeenReset=!0}})),Object.defineProperty(d,"snapToLines",s({},u,{get:function(){return R},set:function(F){R=!!F,this.hasBeenReset=!0}})),Object.defineProperty(d,"line",s({},u,{get:function(){return _},set:function(F){if(typeof F!="number"&&F!=="auto")throw new SyntaxError("An invalid number or illegal string was specified.");_=F,this.hasBeenReset=!0}})),Object.defineProperty(d,"lineAlign",s({},u,{get:function(){return P},set:function(F){const Y=i(F);if(!Y)throw new SyntaxError("An invalid or illegal string was specified.");P=Y,this.hasBeenReset=!0}})),Object.defineProperty(d,"position",s({},u,{get:function(){return H},set:function(F){if(F<0||F>100)throw new Error("Position must be between 0 and 100.");H=F,this.hasBeenReset=!0}})),Object.defineProperty(d,"positionAlign",s({},u,{get:function(){return U},set:function(F){const Y=i(F);if(!Y)throw new SyntaxError("An invalid or illegal string was specified.");U=Y,this.hasBeenReset=!0}})),Object.defineProperty(d,"size",s({},u,{get:function(){return z},set:function(F){if(F<0||F>100)throw new Error("Size must be between 0 and 100.");z=F,this.hasBeenReset=!0}})),Object.defineProperty(d,"align",s({},u,{get:function(){return Q},set:function(F){const Y=i(F);if(!Y)throw new SyntaxError("An invalid or illegal string was specified.");Q=Y,this.hasBeenReset=!0}})),d.displayState=void 0}return o.prototype.getCueAsHTML=function(){return self.WebVTT.convertCueToDOMTree(self,this.text)},o}();class TS{decode(e,t){if(!e)return"";if(typeof e!="string")throw new Error("Error - expected string data.");return decodeURIComponent(encodeURIComponent(e))}}function sp(n){function e(r,i,s,o){return(r|0)*3600+(i|0)*60+(s|0)+parseFloat(o||0)}const t=n.match(/^(?:(\d+):)?(\d{2}):(\d{2})(\.\d+)?/);return t?parseFloat(t[2])>59?e(t[2],t[3],0,t[4]):e(t[1],t[2],t[3],t[4]):null}class CS{constructor(){this.values=Object.create(null)}set(e,t){!this.get(e)&&t!==""&&(this.values[e]=t)}get(e,t,r){return r?this.has(e)?this.values[e]:t[r]:this.has(e)?this.values[e]:t}has(e){return e in this.values}alt(e,t,r){for(let i=0;i<r.length;++i)if(t===r[i]){this.set(e,t);break}}integer(e,t){/^-?\d+$/.test(t)&&this.set(e,parseInt(t,10))}percent(e,t){if(/^([\d]{1,3})(\.[\d]*)?%$/.test(t)){const r=parseFloat(t);if(r>=0&&r<=100)return this.set(e,r),!0}return!1}}function op(n,e,t,r){const i=r?n.split(r):[n];for(const s in i){if(typeof i[s]!="string")continue;const o=i[s].split(t);if(o.length!==2)continue;const a=o[0],l=o[1];e(a,l)}}const Ma=new Bl(0,0,""),ls=Ma.align==="middle"?"middle":"center";function wS(n,e,t){const r=n;function i(){const a=sp(n);if(a===null)throw new Error("Malformed timestamp: "+r);return n=n.replace(/^[^\sa-zA-Z-]+/,""),a}function s(a,l){const c=new CS;op(a,function(h,g){let y;switch(h){case"region":for(let b=t.length-1;b>=0;b--)if(t[b].id===g){c.set(h,t[b].region);break}break;case"vertical":c.alt(h,g,["rl","lr"]);break;case"line":y=g.split(","),c.integer(h,y[0]),c.percent(h,y[0])&&c.set("snapToLines",!1),c.alt(h,y[0],["auto"]),y.length===2&&c.alt("lineAlign",y[1],["start",ls,"end"]);break;case"position":y=g.split(","),c.percent(h,y[0]),y.length===2&&c.alt("positionAlign",y[1],["start",ls,"end","line-left","line-right","auto"]);break;case"size":c.percent(h,g);break;case"align":c.alt(h,g,["start",ls,"end","left","right"]);break}},/:/,/\s/),l.region=c.get("region",null),l.vertical=c.get("vertical","");let d=c.get("line","auto");d==="auto"&&Ma.line===-1&&(d=-1),l.line=d,l.lineAlign=c.get("lineAlign","start"),l.snapToLines=c.get("snapToLines",!0),l.size=c.get("size",100),l.align=c.get("align",ls);let u=c.get("position","auto");u==="auto"&&Ma.position===50&&(u=l.align==="start"||l.align==="left"?0:l.align==="end"||l.align==="right"?100:50),l.position=u}function o(){n=n.replace(/^\s+/,"")}if(o(),e.startTime=i(),o(),n.slice(0,3)!=="-->")throw new Error("Malformed time stamp (time stamps must be separated by '-->'): "+r);n=n.slice(3),o(),e.endTime=i(),o(),s(n,e)}function ap(n){return n.replace(/<br(?: \/)?>/gi,`
`)}class kS{constructor(){this.state="INITIAL",this.buffer="",this.decoder=new TS,this.regionList=[],this.cue=null,this.oncue=void 0,this.onparsingerror=void 0,this.onflush=void 0}parse(e){const t=this;e&&(t.buffer+=t.decoder.decode(e,{stream:!0}));function r(){let s=t.buffer,o=0;for(s=ap(s);o<s.length&&s[o]!=="\r"&&s[o]!==`
`;)++o;const a=s.slice(0,o);return s[o]==="\r"&&++o,s[o]===`
`&&++o,t.buffer=s.slice(o),a}function i(s){op(s,function(o,a){},/:/)}try{let s="";if(t.state==="INITIAL"){if(!/\r\n|\n/.test(t.buffer))return this;s=r();const a=s.match(/^(ï»¿)?WEBVTT([ \t].*)?$/);if(!(a!=null&&a[0]))throw new Error("Malformed WebVTT signature.");t.state="HEADER"}let o=!1;for(;t.buffer;){if(!/\r\n|\n/.test(t.buffer))return this;switch(o?o=!1:s=r(),t.state){case"HEADER":/:/.test(s)?i(s):s||(t.state="ID");continue;case"NOTE":s||(t.state="ID");continue;case"ID":if(/^NOTE($|[ \t])/.test(s)){t.state="NOTE";break}if(!s)continue;if(t.cue=new Bl(0,0,""),t.state="CUE",s.indexOf("-->")===-1){t.cue.id=s;continue}case"CUE":if(!t.cue){t.state="BADCUE";continue}try{wS(s,t.cue,t.regionList)}catch{t.cue=null,t.state="BADCUE";continue}t.state="CUETEXT";continue;case"CUETEXT":{const a=s.indexOf("-->")!==-1;if(!s||a&&(o=!0)){t.oncue&&t.cue&&t.oncue(t.cue),t.cue=null,t.state="ID";continue}if(t.cue===null)continue;t.cue.text&&(t.cue.text+=`
`),t.cue.text+=s}continue;case"BADCUE":s||(t.state="ID")}}}catch{t.state==="CUETEXT"&&t.cue&&t.oncue&&t.oncue(t.cue),t.cue=null,t.state=t.state==="INITIAL"?"BADWEBVTT":"BADCUE"}return this}flush(){const e=this;try{if((e.cue||e.state==="HEADER")&&(e.buffer+=`

`,e.parse()),e.state==="INITIAL"||e.state==="BADWEBVTT")throw new Error("Malformed WebVTT signature.")}catch(t){e.onparsingerror&&e.onparsingerror(t)}return e.onflush&&e.onflush(),this}}const LS=/\r\n|\n\r|\n|\r/g,Jo=function(e,t,r=0){return e.slice(r,r+t.length)===t},RS=function(e){let t=parseInt(e.slice(-3));const r=parseInt(e.slice(-6,-4)),i=parseInt(e.slice(-9,-7)),s=e.length>9?parseInt(e.substring(0,e.indexOf(":"))):0;if(!pe(t)||!pe(r)||!pe(i)||!pe(s))throw Error(`Malformed X-TIMESTAMP-MAP: Local:${e}`);return t+=1e3*r,t+=60*1e3*i,t+=60*60*1e3*s,t},Zo=function(e){let t=5381,r=e.length;for(;r;)t=t*33^e.charCodeAt(--r);return(t>>>0).toString()};function Ol(n,e,t){return Zo(n.toString())+Zo(e.toString())+Zo(t)}const IS=function(e,t,r){let i=e[t],s=e[i.prevCC];if(!s||!s.new&&i.new){e.ccOffset=e.presentationOffset=i.start,i.new=!1;return}for(;(o=s)!=null&&o.new;){var o;e.ccOffset+=i.start-s.start,i.new=!1,i=s,s=e[i.prevCC]}e.presentationOffset=r};function _S(n,e,t,r,i,s,o){const a=new kS,l=an(new Uint8Array(n)).trim().replace(LS,`
`).split(`
`),c=[],d=e?X1(e.baseTime,e.timescale):0;let u="00:00.000",h=0,g=0,y,b=!0;a.oncue=function(E){const C=t[r];let w=t.ccOffset;const R=(h-d)/9e4;if(C!=null&&C.new&&(g!==void 0?w=t.ccOffset=C.start:IS(t,r,R)),R){if(!e){y=new Error("Missing initPTS for VTT MPEGTS");return}w=R-t.presentationOffset}const _=E.endTime-E.startTime,P=Bt((E.startTime+w-g)*9e4,i*9e4)/9e4;E.startTime=Math.max(P,0),E.endTime=Math.max(P+_,0);const H=E.text.trim();E.text=decodeURIComponent(encodeURIComponent(H)),E.id||(E.id=Ol(E.startTime,E.endTime,H)),E.endTime>0&&c.push(E)},a.onparsingerror=function(E){y=E},a.onflush=function(){if(y){o(y);return}s(c)},l.forEach(E=>{if(b)if(Jo(E,"X-TIMESTAMP-MAP=")){b=!1,E.slice(16).split(",").forEach(C=>{Jo(C,"LOCAL:")?u=C.slice(6):Jo(C,"MPEGTS:")&&(h=parseInt(C.slice(7)))});try{g=RS(u)/1e3}catch(C){y=C}return}else E===""&&(b=!1);a.parse(E+`
`)}),a.flush()}const ea="stpp.ttml.im1t",lp=/^(\d{2,}):(\d{2}):(\d{2}):(\d{2})\.?(\d+)?$/,cp=/^(\d*(?:\.\d*)?)(h|m|s|ms|f|t)$/,DS={left:"start",center:"center",right:"end",start:"start",end:"end"};function vu(n,e,t,r){const i=Be(new Uint8Array(n),["mdat"]);if(i.length===0){r(new Error("Could not parse IMSC1 mdat"));return}const s=i.map(a=>an(a)),o=Q1(e.baseTime,1,e.timescale);try{s.forEach(a=>t(PS(a,o)))}catch(a){r(a)}}function PS(n,e){const i=new DOMParser().parseFromString(n,"text/xml").getElementsByTagName("tt")[0];if(!i)throw new Error("Invalid ttml");const s={frameRate:30,subFrameRate:1,frameRateMultiplier:0,tickRate:0},o=Object.keys(s).reduce((u,h)=>(u[h]=i.getAttribute(`ttp:${h}`)||s[h],u),{}),a=i.getAttribute("xml:space")!=="preserve",l=Eu(ta(i,"styling","style")),c=Eu(ta(i,"layout","region")),d=ta(i,"body","[begin]");return[].map.call(d,u=>{const h=dp(u,a);if(!h||!u.hasAttribute("begin"))return null;const g=ra(u.getAttribute("begin"),o),y=ra(u.getAttribute("dur"),o);let b=ra(u.getAttribute("end"),o);if(g===null)throw xu(u);if(b===null){if(y===null)throw xu(u);b=g+y}const E=new Bl(g-e,b-e,h);E.id=Ol(E.startTime,E.endTime,E.text);const C=c[u.getAttribute("region")],w=l[u.getAttribute("style")],R=BS(C,w,l),{textAlign:_}=R;if(_){const P=DS[_];P&&(E.lineAlign=P),E.align=_}return ct(E,R),E}).filter(u=>u!==null)}function ta(n,e,t){const r=n.getElementsByTagName(e)[0];return r?[].slice.call(r.querySelectorAll(t)):[]}function Eu(n){return n.reduce((e,t)=>{const r=t.getAttribute("xml:id");return r&&(e[r]=t),e},{})}function dp(n,e){return[].slice.call(n.childNodes).reduce((t,r,i)=>{var s;return r.nodeName==="br"&&i?t+`
`:(s=r.childNodes)!=null&&s.length?dp(r,e):e?t+r.textContent.trim().replace(/\s+/g," "):t+r.textContent},"")}function BS(n,e,t){const r="http://www.w3.org/ns/ttml#styling";let i=null;const s=["displayAlign","textAlign","color","backgroundColor","fontSize","fontFamily"],o=n!=null&&n.hasAttribute("style")?n.getAttribute("style"):null;return o&&t.hasOwnProperty(o)&&(i=t[o]),s.reduce((a,l)=>{const c=na(e,r,l)||na(n,r,l)||na(i,r,l);return c&&(a[l]=c),a},{})}function na(n,e,t){return n&&n.hasAttributeNS(e,t)?n.getAttributeNS(e,t):null}function xu(n){return new Error(`Could not parse ttml timestamp ${n}`)}function ra(n,e){if(!n)return null;let t=sp(n);return t===null&&(lp.test(n)?t=OS(n,e):cp.test(n)&&(t=FS(n,e))),t}function OS(n,e){const t=lp.exec(n),r=(t[4]|0)+(t[5]|0)/e.subFrameRate;return(t[1]|0)*3600+(t[2]|0)*60+(t[3]|0)+r/e.frameRate}function FS(n,e){const t=cp.exec(n),r=Number(t[1]);switch(t[2]){case"h":return r*3600;case"m":return r*60;case"ms":return r*1e3;case"f":return r/e.frameRate;case"t":return r/e.tickRate}return r}class MS{constructor(e){this.hls=void 0,this.media=null,this.config=void 0,this.enabled=!0,this.Cues=void 0,this.textTracks=[],this.tracks=[],this.initPTS=[],this.unparsedVttFrags=[],this.captionsTracks={},this.nonNativeCaptionsTracks={},this.cea608Parser1=void 0,this.cea608Parser2=void 0,this.lastCc=-1,this.lastSn=-1,this.lastPartIndex=-1,this.prevCC=-1,this.vttCCs=Tu(),this.captionsProperties=void 0,this.hls=e,this.config=e.config,this.Cues=e.config.cueHandler,this.captionsProperties={textTrack1:{label:this.config.captionsTextTrack1Label,languageCode:this.config.captionsTextTrack1LanguageCode},textTrack2:{label:this.config.captionsTextTrack2Label,languageCode:this.config.captionsTextTrack2LanguageCode},textTrack3:{label:this.config.captionsTextTrack3Label,languageCode:this.config.captionsTextTrack3LanguageCode},textTrack4:{label:this.config.captionsTextTrack4Label,languageCode:this.config.captionsTextTrack4LanguageCode}},e.on(T.MEDIA_ATTACHING,this.onMediaAttaching,this),e.on(T.MEDIA_DETACHING,this.onMediaDetaching,this),e.on(T.MANIFEST_LOADING,this.onManifestLoading,this),e.on(T.MANIFEST_LOADED,this.onManifestLoaded,this),e.on(T.SUBTITLE_TRACKS_UPDATED,this.onSubtitleTracksUpdated,this),e.on(T.FRAG_LOADING,this.onFragLoading,this),e.on(T.FRAG_LOADED,this.onFragLoaded,this),e.on(T.FRAG_PARSING_USERDATA,this.onFragParsingUserdata,this),e.on(T.FRAG_DECRYPTED,this.onFragDecrypted,this),e.on(T.INIT_PTS_FOUND,this.onInitPtsFound,this),e.on(T.SUBTITLE_TRACKS_CLEARED,this.onSubtitleTracksCleared,this),e.on(T.BUFFER_FLUSHING,this.onBufferFlushing,this)}destroy(){const{hls:e}=this;e.off(T.MEDIA_ATTACHING,this.onMediaAttaching,this),e.off(T.MEDIA_DETACHING,this.onMediaDetaching,this),e.off(T.MANIFEST_LOADING,this.onManifestLoading,this),e.off(T.MANIFEST_LOADED,this.onManifestLoaded,this),e.off(T.SUBTITLE_TRACKS_UPDATED,this.onSubtitleTracksUpdated,this),e.off(T.FRAG_LOADING,this.onFragLoading,this),e.off(T.FRAG_LOADED,this.onFragLoaded,this),e.off(T.FRAG_PARSING_USERDATA,this.onFragParsingUserdata,this),e.off(T.FRAG_DECRYPTED,this.onFragDecrypted,this),e.off(T.INIT_PTS_FOUND,this.onInitPtsFound,this),e.off(T.SUBTITLE_TRACKS_CLEARED,this.onSubtitleTracksCleared,this),e.off(T.BUFFER_FLUSHING,this.onBufferFlushing,this),this.hls=this.config=null,this.cea608Parser1=this.cea608Parser2=void 0}initCea608Parsers(){if(this.config.enableCEA708Captions&&(!this.cea608Parser1||!this.cea608Parser2)){const e=new as(this,"textTrack1"),t=new as(this,"textTrack2"),r=new as(this,"textTrack3"),i=new as(this,"textTrack4");this.cea608Parser1=new yu(1,e,t),this.cea608Parser2=new yu(3,r,i)}}addCues(e,t,r,i,s){let o=!1;for(let a=s.length;a--;){const l=s[a],c=NS(l[0],l[1],t,r);if(c>=0&&(l[0]=Math.min(l[0],t),l[1]=Math.max(l[1],r),o=!0,c/(r-t)>.5))return}if(o||s.push([t,r]),this.config.renderTextTracksNatively){const a=this.captionsTracks[e];this.Cues.newCue(a,t,r,i)}else{const a=this.Cues.newCue(null,t,r,i);this.hls.trigger(T.CUES_PARSED,{type:"captions",cues:a,track:e})}}onInitPtsFound(e,{frag:t,id:r,initPTS:i,timescale:s}){const{unparsedVttFrags:o}=this;r==="main"&&(this.initPTS[t.cc]={baseTime:i,timescale:s}),o.length&&(this.unparsedVttFrags=[],o.forEach(a=>{this.onFragLoaded(T.FRAG_LOADED,a)}))}getExistingTrack(e,t){const{media:r}=this;if(r)for(let i=0;i<r.textTracks.length;i++){const s=r.textTracks[i];if(Su(s,{name:e,lang:t,attrs:{}}))return s}return null}createCaptionsTrack(e){this.config.renderTextTracksNatively?this.createNativeTrack(e):this.createNonNativeTrack(e)}createNativeTrack(e){if(this.captionsTracks[e])return;const{captionsProperties:t,captionsTracks:r,media:i}=this,{label:s,languageCode:o}=t[e],a=this.getExistingTrack(s,o);if(a)r[e]=a,pr(r[e]),If(r[e],i);else{const l=this.createTextTrack("captions",s,o);l&&(l[e]=!0,r[e]=l)}}createNonNativeTrack(e){if(this.nonNativeCaptionsTracks[e])return;const t=this.captionsProperties[e];if(!t)return;const r=t.label,i={_id:e,label:r,kind:"captions",default:t.media?!!t.media.default:!1,closedCaptions:t.media};this.nonNativeCaptionsTracks[e]=i,this.hls.trigger(T.NON_NATIVE_TEXT_TRACKS_FOUND,{tracks:[i]})}createTextTrack(e,t,r){const i=this.media;if(i)return i.addTextTrack(e,t,r)}onMediaAttaching(e,t){this.media=t.media,this._cleanTracks()}onMediaDetaching(){const{captionsTracks:e}=this;Object.keys(e).forEach(t=>{pr(e[t]),delete e[t]}),this.nonNativeCaptionsTracks={}}onManifestLoading(){this.lastCc=-1,this.lastSn=-1,this.lastPartIndex=-1,this.prevCC=-1,this.vttCCs=Tu(),this._cleanTracks(),this.tracks=[],this.captionsTracks={},this.nonNativeCaptionsTracks={},this.textTracks=[],this.unparsedVttFrags=[],this.initPTS=[],this.cea608Parser1&&this.cea608Parser2&&(this.cea608Parser1.reset(),this.cea608Parser2.reset())}_cleanTracks(){const{media:e}=this;if(!e)return;const t=e.textTracks;if(t)for(let r=0;r<t.length;r++)pr(t[r])}onSubtitleTracksUpdated(e,t){const r=t.subtitleTracks||[],i=r.some(s=>s.textCodec===ea);if(this.config.enableWebVTT||i&&this.config.enableIMSC1){if(np(this.tracks,r)){this.tracks=r;return}if(this.textTracks=[],this.tracks=r,this.config.renderTextTracksNatively){const o=this.media,a=o?bs(o.textTracks):null;if(this.tracks.forEach((l,c)=>{let d;if(a){let u=null;for(let h=0;h<a.length;h++)if(a[h]&&Su(a[h],l)){u=a[h],a[h]=null;break}u&&(d=u)}if(d)pr(d);else{const u=up(l);d=this.createTextTrack(u,l.name,l.lang),d&&(d.mode="disabled")}d&&this.textTracks.push(d)}),a!=null&&a.length){const l=a.filter(c=>c!==null).map(c=>c.label);l.length&&B.warn(`Media element contains unused subtitle tracks: ${l.join(", ")}. Replace media element for each source to clear TextTracks and captions menu.`)}}else if(this.tracks.length){const o=this.tracks.map(a=>({label:a.name,kind:a.type.toLowerCase(),default:a.default,subtitleTrack:a}));this.hls.trigger(T.NON_NATIVE_TEXT_TRACKS_FOUND,{tracks:o})}}}onManifestLoaded(e,t){this.config.enableCEA708Captions&&t.captions&&t.captions.forEach(r=>{const i=/(?:CC|SERVICE)([1-4])/.exec(r.instreamId);if(!i)return;const s=`textTrack${i[1]}`,o=this.captionsProperties[s];o&&(o.label=r.name,r.lang&&(o.languageCode=r.lang),o.media=r)})}closedCaptionsForLevel(e){const t=this.hls.levels[e.level];return t==null?void 0:t.attrs["CLOSED-CAPTIONS"]}onFragLoading(e,t){this.initCea608Parsers();const{cea608Parser1:r,cea608Parser2:i,lastCc:s,lastSn:o,lastPartIndex:a}=this;if(!(!this.enabled||!r||!i)&&t.frag.type===ke.MAIN){var l,c;const{cc:d,sn:u}=t.frag,h=(l=t==null||(c=t.part)==null?void 0:c.index)!=null?l:-1;u===o+1||u===o&&h===a+1||d===s||(r.reset(),i.reset()),this.lastCc=d,this.lastSn=u,this.lastPartIndex=h}}onFragLoaded(e,t){const{frag:r,payload:i}=t;if(r.type===ke.SUBTITLE)if(i.byteLength){const s=r.decryptdata,o="stats"in t;if(s==null||!s.encrypted||o){const a=this.tracks[r.level],l=this.vttCCs;l[r.cc]||(l[r.cc]={start:r.start,prevCC:this.prevCC,new:!0},this.prevCC=r.cc),a&&a.textCodec===ea?this._parseIMSC1(r,i):this._parseVTTs(t)}}else this.hls.trigger(T.SUBTITLE_FRAG_PROCESSED,{success:!1,frag:r,error:new Error("Empty subtitle payload")})}_parseIMSC1(e,t){const r=this.hls;vu(t,this.initPTS[e.cc],i=>{this._appendCues(i,e.level),r.trigger(T.SUBTITLE_FRAG_PROCESSED,{success:!0,frag:e})},i=>{B.log(`Failed to parse IMSC1: ${i}`),r.trigger(T.SUBTITLE_FRAG_PROCESSED,{success:!1,frag:e,error:i})})}_parseVTTs(e){var t;const{frag:r,payload:i}=e,{initPTS:s,unparsedVttFrags:o}=this,a=s.length-1;if(!s[r.cc]&&a===-1){o.push(e);return}const l=this.hls,c=(t=r.initSegment)!=null&&t.data?Nt(r.initSegment.data,new Uint8Array(i)):i;_S(c,this.initPTS[r.cc],this.vttCCs,r.cc,r.start,d=>{this._appendCues(d,r.level),l.trigger(T.SUBTITLE_FRAG_PROCESSED,{success:!0,frag:r})},d=>{const u=d.message==="Missing initPTS for VTT MPEGTS";u?o.push(e):this._fallbackToIMSC1(r,i),B.log(`Failed to parse VTT cue: ${d}`),!(u&&a>r.cc)&&l.trigger(T.SUBTITLE_FRAG_PROCESSED,{success:!1,frag:r,error:d})})}_fallbackToIMSC1(e,t){const r=this.tracks[e.level];r.textCodec||vu(t,this.initPTS[e.cc],()=>{r.textCodec=ea,this._parseIMSC1(e,t)},()=>{r.textCodec="wvtt"})}_appendCues(e,t){const r=this.hls;if(this.config.renderTextTracksNatively){const i=this.textTracks[t];if(!i||i.mode==="disabled")return;e.forEach(s=>_f(i,s))}else{const i=this.tracks[t];if(!i)return;const s=i.default?"default":"subtitles"+t;r.trigger(T.CUES_PARSED,{type:"subtitles",cues:e,track:s})}}onFragDecrypted(e,t){const{frag:r}=t;r.type===ke.SUBTITLE&&this.onFragLoaded(T.FRAG_LOADED,t)}onSubtitleTracksCleared(){this.tracks=[],this.captionsTracks={}}onFragParsingUserdata(e,t){this.initCea608Parsers();const{cea608Parser1:r,cea608Parser2:i}=this;if(!this.enabled||!r||!i)return;const{frag:s,samples:o}=t;if(!(s.type===ke.MAIN&&this.closedCaptionsForLevel(s)==="NONE"))for(let a=0;a<o.length;a++){const l=o[a].bytes;if(l){const c=this.extractCea608Data(l);r.addData(o[a].pts,c[0]),i.addData(o[a].pts,c[1])}}}onBufferFlushing(e,{startOffset:t,endOffset:r,endOffsetSubtitles:i,type:s}){const{media:o}=this;if(!(!o||o.currentTime<r)){if(!s||s==="video"){const{captionsTracks:a}=this;Object.keys(a).forEach(l=>Ia(a[l],t,r))}if(this.config.renderTextTracksNatively&&t===0&&i!==void 0){const{textTracks:a}=this;Object.keys(a).forEach(l=>Ia(a[l],t,i))}}}extractCea608Data(e){const t=[[],[]],r=e[0]&31;let i=2;for(let s=0;s<r;s++){const o=e[i++],a=127&e[i++],l=127&e[i++];if(a===0&&l===0)continue;if((4&o)!==0){const d=3&o;(d===0||d===1)&&(t[d].push(a),t[d].push(l))}}return t}}function up(n){return n.characteristics&&/transcribes-spoken-dialog/gi.test(n.characteristics)&&/describes-music-and-sound/gi.test(n.characteristics)?"captions":"subtitles"}function Su(n,e){return!!n&&n.kind===up(e)&&Fa(e,n)}function NS(n,e,t,r){return Math.min(e,r)-Math.max(n,t)}function Tu(){return{ccOffset:0,presentationOffset:0,0:{start:0,prevCC:-1,new:!0}}}class Fl{constructor(e){this.hls=void 0,this.autoLevelCapping=void 0,this.firstLevel=void 0,this.media=void 0,this.restrictedLevels=void 0,this.timer=void 0,this.clientRect=void 0,this.streamController=void 0,this.hls=e,this.autoLevelCapping=Number.POSITIVE_INFINITY,this.firstLevel=-1,this.media=null,this.restrictedLevels=[],this.timer=void 0,this.clientRect=null,this.registerListeners()}setStreamController(e){this.streamController=e}destroy(){this.hls&&this.unregisterListener(),this.timer&&this.stopCapping(),this.media=null,this.clientRect=null,this.hls=this.streamController=null}registerListeners(){const{hls:e}=this;e.on(T.FPS_DROP_LEVEL_CAPPING,this.onFpsDropLevelCapping,this),e.on(T.MEDIA_ATTACHING,this.onMediaAttaching,this),e.on(T.MANIFEST_PARSED,this.onManifestParsed,this),e.on(T.LEVELS_UPDATED,this.onLevelsUpdated,this),e.on(T.BUFFER_CODECS,this.onBufferCodecs,this),e.on(T.MEDIA_DETACHING,this.onMediaDetaching,this)}unregisterListener(){const{hls:e}=this;e.off(T.FPS_DROP_LEVEL_CAPPING,this.onFpsDropLevelCapping,this),e.off(T.MEDIA_ATTACHING,this.onMediaAttaching,this),e.off(T.MANIFEST_PARSED,this.onManifestParsed,this),e.off(T.LEVELS_UPDATED,this.onLevelsUpdated,this),e.off(T.BUFFER_CODECS,this.onBufferCodecs,this),e.off(T.MEDIA_DETACHING,this.onMediaDetaching,this)}onFpsDropLevelCapping(e,t){const r=this.hls.levels[t.droppedLevel];this.isLevelAllowed(r)&&this.restrictedLevels.push({bitrate:r.bitrate,height:r.height,width:r.width})}onMediaAttaching(e,t){this.media=t.media instanceof HTMLVideoElement?t.media:null,this.clientRect=null,this.timer&&this.hls.levels.length&&this.detectPlayerSize()}onManifestParsed(e,t){const r=this.hls;this.restrictedLevels=[],this.firstLevel=t.firstLevel,r.config.capLevelToPlayerSize&&t.video&&this.startCapping()}onLevelsUpdated(e,t){this.timer&&pe(this.autoLevelCapping)&&this.detectPlayerSize()}onBufferCodecs(e,t){this.hls.config.capLevelToPlayerSize&&t.video&&this.startCapping()}onMediaDetaching(){this.stopCapping()}detectPlayerSize(){if(this.media){if(this.mediaHeight<=0||this.mediaWidth<=0){this.clientRect=null;return}const e=this.hls.levels;if(e.length){const t=this.hls,r=this.getMaxLevel(e.length-1);r!==this.autoLevelCapping&&B.log(`Setting autoLevelCapping to ${r}: ${e[r].height}p@${e[r].bitrate} for media ${this.mediaWidth}x${this.mediaHeight}`),t.autoLevelCapping=r,t.autoLevelCapping>this.autoLevelCapping&&this.streamController&&this.streamController.nextLevelSwitch(),this.autoLevelCapping=t.autoLevelCapping}}}getMaxLevel(e){const t=this.hls.levels;if(!t.length)return-1;const r=t.filter((i,s)=>this.isLevelAllowed(i)&&s<=e);return this.clientRect=null,Fl.getMaxLevelByMediaSize(r,this.mediaWidth,this.mediaHeight)}startCapping(){this.timer||(this.autoLevelCapping=Number.POSITIVE_INFINITY,self.clearInterval(this.timer),this.timer=self.setInterval(this.detectPlayerSize.bind(this),1e3),this.detectPlayerSize())}stopCapping(){this.restrictedLevels=[],this.firstLevel=-1,this.autoLevelCapping=Number.POSITIVE_INFINITY,this.timer&&(self.clearInterval(this.timer),this.timer=void 0)}getDimensions(){if(this.clientRect)return this.clientRect;const e=this.media,t={width:0,height:0};if(e){const r=e.getBoundingClientRect();t.width=r.width,t.height=r.height,!t.width&&!t.height&&(t.width=r.right-r.left||e.width||0,t.height=r.bottom-r.top||e.height||0)}return this.clientRect=t,t}get mediaWidth(){return this.getDimensions().width*this.contentScaleFactor}get mediaHeight(){return this.getDimensions().height*this.contentScaleFactor}get contentScaleFactor(){let e=1;if(!this.hls.config.ignoreDevicePixelRatio)try{e=self.devicePixelRatio}catch{}return e}isLevelAllowed(e){return!this.restrictedLevels.some(r=>e.bitrate===r.bitrate&&e.width===r.width&&e.height===r.height)}static getMaxLevelByMediaSize(e,t,r){if(!(e!=null&&e.length))return-1;const i=(a,l)=>l?a.width!==l.width||a.height!==l.height:!0;let s=e.length-1;const o=Math.max(t,r);for(let a=0;a<e.length;a+=1){const l=e[a];if((l.width>=o||l.height>=o)&&i(l,e[a+1])){s=a;break}}return s}}class US{constructor(e){this.hls=void 0,this.isVideoPlaybackQualityAvailable=!1,this.timer=void 0,this.media=null,this.lastTime=void 0,this.lastDroppedFrames=0,this.lastDecodedFrames=0,this.streamController=void 0,this.hls=e,this.registerListeners()}setStreamController(e){this.streamController=e}registerListeners(){this.hls.on(T.MEDIA_ATTACHING,this.onMediaAttaching,this)}unregisterListeners(){this.hls.off(T.MEDIA_ATTACHING,this.onMediaAttaching,this)}destroy(){this.timer&&clearInterval(this.timer),this.unregisterListeners(),this.isVideoPlaybackQualityAvailable=!1,this.media=null}onMediaAttaching(e,t){const r=this.hls.config;if(r.capLevelOnFPSDrop){const i=t.media instanceof self.HTMLVideoElement?t.media:null;this.media=i,i&&typeof i.getVideoPlaybackQuality=="function"&&(this.isVideoPlaybackQualityAvailable=!0),self.clearInterval(this.timer),this.timer=self.setInterval(this.checkFPSInterval.bind(this),r.fpsDroppedMonitoringPeriod)}}checkFPS(e,t,r){const i=performance.now();if(t){if(this.lastTime){const s=i-this.lastTime,o=r-this.lastDroppedFrames,a=t-this.lastDecodedFrames,l=1e3*o/s,c=this.hls;if(c.trigger(T.FPS_DROP,{currentDropped:o,currentDecoded:a,totalDroppedFrames:r}),l>0&&o>c.config.fpsDroppedMonitoringThreshold*a){let d=c.currentLevel;B.warn("drop FPS ratio greater than max allowed value for currentLevel: "+d),d>0&&(c.autoLevelCapping===-1||c.autoLevelCapping>=d)&&(d=d-1,c.trigger(T.FPS_DROP_LEVEL_CAPPING,{level:d,droppedLevel:c.currentLevel}),c.autoLevelCapping=d,this.streamController.nextLevelSwitch())}}this.lastTime=i,this.lastDroppedFrames=r,this.lastDecodedFrames=t}}checkFPSInterval(){const e=this.media;if(e)if(this.isVideoPlaybackQualityAvailable){const t=e.getVideoPlaybackQuality();this.checkFPS(e,t.totalVideoFrames,t.droppedVideoFrames)}else this.checkFPS(e,e.webkitDecodedFrameCount,e.webkitDroppedFrameCount)}}const cs="[eme]";class vr{constructor(e){this.hls=void 0,this.config=void 0,this.media=null,this.keyFormatPromise=null,this.keySystemAccessPromises={},this._requestLicenseFailureCount=0,this.mediaKeySessions=[],this.keyIdToKeySessionPromise={},this.setMediaKeysQueue=vr.CDMCleanupPromise?[vr.CDMCleanupPromise]:[],this.onMediaEncrypted=this._onMediaEncrypted.bind(this),this.onWaitingForKey=this._onWaitingForKey.bind(this),this.debug=B.debug.bind(B,cs),this.log=B.log.bind(B,cs),this.warn=B.warn.bind(B,cs),this.error=B.error.bind(B,cs),this.hls=e,this.config=e.config,this.registerListeners()}destroy(){this.unregisterListeners(),this.onMediaDetached();const e=this.config;e.requestMediaKeySystemAccessFunc=null,e.licenseXhrSetup=e.licenseResponseCallback=void 0,e.drmSystems=e.drmSystemOptions={},this.hls=this.onMediaEncrypted=this.onWaitingForKey=this.keyIdToKeySessionPromise=null,this.config=null}registerListeners(){this.hls.on(T.MEDIA_ATTACHED,this.onMediaAttached,this),this.hls.on(T.MEDIA_DETACHED,this.onMediaDetached,this),this.hls.on(T.MANIFEST_LOADING,this.onManifestLoading,this),this.hls.on(T.MANIFEST_LOADED,this.onManifestLoaded,this)}unregisterListeners(){this.hls.off(T.MEDIA_ATTACHED,this.onMediaAttached,this),this.hls.off(T.MEDIA_DETACHED,this.onMediaDetached,this),this.hls.off(T.MANIFEST_LOADING,this.onManifestLoading,this),this.hls.off(T.MANIFEST_LOADED,this.onManifestLoaded,this)}getLicenseServerUrl(e){const{drmSystems:t,widevineLicenseUrl:r}=this.config,i=t[e];if(i)return i.licenseUrl;if(e===nt.WIDEVINE&&r)return r;throw new Error(`no license server URL configured for key-system "${e}"`)}getServerCertificateUrl(e){const{drmSystems:t}=this.config,r=t[e];if(r)return r.serverCertificateUrl;this.log(`No Server Certificate in config.drmSystems["${e}"]`)}attemptKeySystemAccess(e){const t=this.hls.levels,r=(o,a,l)=>!!o&&l.indexOf(o)===a,i=t.map(o=>o.audioCodec).filter(r),s=t.map(o=>o.videoCodec).filter(r);return i.length+s.length===0&&s.push("avc1.42e01e"),new Promise((o,a)=>{const l=c=>{const d=c.shift();this.getMediaKeysPromise(d,i,s).then(u=>o({keySystem:d,mediaKeys:u})).catch(u=>{c.length?l(c):u instanceof Pt?a(u):a(new Pt({type:Le.KEY_SYSTEM_ERROR,details:$.KEY_SYSTEM_NO_ACCESS,error:u,fatal:!0},u.message))})};l(e)})}requestMediaKeySystemAccess(e,t){const{requestMediaKeySystemAccessFunc:r}=this.config;if(typeof r!="function"){let i=`Configured requestMediaKeySystemAccess is not a function ${r}`;return yf===null&&self.location.protocol==="http:"&&(i=`navigator.requestMediaKeySystemAccess is not available over insecure protocol ${location.protocol}`),Promise.reject(new Error(i))}return r(e,t)}getMediaKeysPromise(e,t,r){const i=QE(e,t,r,this.config.drmSystemOptions),s=this.keySystemAccessPromises[e];let o=s==null?void 0:s.keySystemAccess;if(!o){this.log(`Requesting encrypted media "${e}" key-system access with config: ${JSON.stringify(i)}`),o=this.requestMediaKeySystemAccess(e,i);const a=this.keySystemAccessPromises[e]={keySystemAccess:o};return o.catch(l=>{this.log(`Failed to obtain access to key-system "${e}": ${l}`)}),o.then(l=>{this.log(`Access for key-system "${l.keySystem}" obtained`);const c=this.fetchServerCertificate(e);return this.log(`Create media-keys for "${e}"`),a.mediaKeys=l.createMediaKeys().then(d=>(this.log(`Media-keys created for "${e}"`),c.then(u=>u?this.setMediaKeysServerCertificate(d,e,u):d))),a.mediaKeys.catch(d=>{this.error(`Failed to create media-keys for "${e}"}: ${d}`)}),a.mediaKeys})}return o.then(()=>s.mediaKeys)}createMediaKeySessionContext({decryptdata:e,keySystem:t,mediaKeys:r}){this.log(`Creating key-system session "${t}" keyId: ${Zt.hexDump(e.keyId||[])}`);const i=r.createSession(),s={decryptdata:e,keySystem:t,mediaKeys:r,mediaKeysSession:i,keyStatus:"status-pending"};return this.mediaKeySessions.push(s),s}renewKeySession(e){const t=e.decryptdata;if(t.pssh){const r=this.createMediaKeySessionContext(e),i=this.getKeyIdString(t),s="cenc";this.keyIdToKeySessionPromise[i]=this.generateRequestWithPreferredKeySession(r,s,t.pssh,"expired")}else this.warn("Could not renew expired session. Missing pssh initData.");this.removeSession(e)}getKeyIdString(e){if(!e)throw new Error("Could not read keyId of undefined decryptdata");if(e.keyId===null)throw new Error("keyId is null");return Zt.hexDump(e.keyId)}updateKeySession(e,t){var r;const i=e.mediaKeysSession;return this.log(`Updating key-session "${i.sessionId}" for keyID ${Zt.hexDump(((r=e.decryptdata)==null?void 0:r.keyId)||[])}
      } (data length: ${t&&t.byteLength})`),i.update(t)}selectKeySystemFormat(e){const t=Object.keys(e.levelkeys||{});return this.keyFormatPromise||(this.log(`Selecting key-system from fragment (sn: ${e.sn} ${e.type}: ${e.level}) key formats ${t.join(", ")}`),this.keyFormatPromise=this.getKeyFormatPromise(t)),this.keyFormatPromise}getKeyFormatPromise(e){return new Promise((t,r)=>{const i=Uo(this.config),s=e.map(Rd).filter(o=>!!o&&i.indexOf(o)!==-1);return this.getKeySystemSelectionPromise(s).then(({keySystem:o})=>{const a=Id(o);a?t(a):r(new Error(`Unable to find format for key-system "${o}"`))}).catch(r)})}loadKey(e){const t=e.keyInfo.decryptdata,r=this.getKeyIdString(t),i=`(keyId: ${r} format: "${t.keyFormat}" method: ${t.method} uri: ${t.uri})`;this.log(`Starting session for key ${i}`);let s=this.keyIdToKeySessionPromise[r];return s||(s=this.keyIdToKeySessionPromise[r]=this.getKeySystemForKeyPromise(t).then(({keySystem:o,mediaKeys:a})=>(this.throwIfDestroyed(),this.log(`Handle encrypted media sn: ${e.frag.sn} ${e.frag.type}: ${e.frag.level} using key ${i}`),this.attemptSetMediaKeys(o,a).then(()=>{this.throwIfDestroyed();const l=this.createMediaKeySessionContext({keySystem:o,mediaKeys:a,decryptdata:t}),c="cenc";return this.generateRequestWithPreferredKeySession(l,c,t.pssh,"playlist-key")}))),s.catch(o=>this.handleError(o))),s}throwIfDestroyed(e="Invalid state"){if(!this.hls)throw new Error("invalid state")}handleError(e){this.hls&&(this.error(e.message),e instanceof Pt?this.hls.trigger(T.ERROR,e.data):this.hls.trigger(T.ERROR,{type:Le.KEY_SYSTEM_ERROR,details:$.KEY_SYSTEM_NO_KEYS,error:e,fatal:!0}))}getKeySystemForKeyPromise(e){const t=this.getKeyIdString(e),r=this.keyIdToKeySessionPromise[t];if(!r){const i=Rd(e.keyFormat),s=i?[i]:Uo(this.config);return this.attemptKeySystemAccess(s)}return r}getKeySystemSelectionPromise(e){if(e.length||(e=Uo(this.config)),e.length===0)throw new Pt({type:Le.KEY_SYSTEM_ERROR,details:$.KEY_SYSTEM_NO_CONFIGURED_LICENSE,fatal:!0},`Missing key-system license configuration options ${JSON.stringify({drmSystems:this.config.drmSystems})}`);return this.attemptKeySystemAccess(e)}_onMediaEncrypted(e){const{initDataType:t,initData:r}=e;if(this.debug(`"${e.type}" event: init data type: "${t}"`),r===null)return;let i,s;if(t==="sinf"&&this.config.drmSystems[nt.FAIRPLAY]){const d=ht(new Uint8Array(r));try{const u=El(JSON.parse(d).sinf),h=Cf(new Uint8Array(u));if(!h)return;i=h.subarray(8,24),s=nt.FAIRPLAY}catch{this.warn('Failed to parse sinf "encrypted" event message initData');return}}else{const d=Ex(r);if(d===null)return;d.version===0&&d.systemId===gf.WIDEVINE&&d.data&&(i=d.data.subarray(8,24)),s=YE(d.systemId)}if(!s||!i)return;const o=Zt.hexDump(i),{keyIdToKeySessionPromise:a,mediaKeySessions:l}=this;let c=a[o];for(let d=0;d<l.length;d++){const u=l[d],h=u.decryptdata;if(h.pssh||!h.keyId)continue;const g=Zt.hexDump(h.keyId);if(o===g||h.uri.replace(/-/g,"").indexOf(o)!==-1){c=a[g],delete a[g],h.pssh=new Uint8Array(r),h.keyId=i,c=a[o]=c.then(()=>this.generateRequestWithPreferredKeySession(u,t,r,"encrypted-event-key-match"));break}}c||(c=a[o]=this.getKeySystemSelectionPromise([s]).then(({keySystem:d,mediaKeys:u})=>{var h;this.throwIfDestroyed();const g=new Bi("ISO-23001-7",o,(h=Id(d))!=null?h:"");return g.pssh=new Uint8Array(r),g.keyId=i,this.attemptSetMediaKeys(d,u).then(()=>{this.throwIfDestroyed();const y=this.createMediaKeySessionContext({decryptdata:g,keySystem:d,mediaKeys:u});return this.generateRequestWithPreferredKeySession(y,t,r,"encrypted-event-no-match")})})),c.catch(d=>this.handleError(d))}_onWaitingForKey(e){this.log(`"${e.type}" event`)}attemptSetMediaKeys(e,t){const r=this.setMediaKeysQueue.slice();this.log(`Setting media-keys for "${e}"`);const i=Promise.all(r).then(()=>{if(!this.media)throw new Error("Attempted to set mediaKeys without media element attached");return this.media.setMediaKeys(t)});return this.setMediaKeysQueue.push(i),i.then(()=>{this.log(`Media-keys set for "${e}"`),r.push(i),this.setMediaKeysQueue=this.setMediaKeysQueue.filter(s=>r.indexOf(s)===-1)})}generateRequestWithPreferredKeySession(e,t,r,i){var s,o;const a=(s=this.config.drmSystems)==null||(o=s[e.keySystem])==null?void 0:o.generateRequest;if(a)try{const y=a.call(this.hls,t,r,e);if(!y)throw new Error("Invalid response from configured generateRequest filter");t=y.initDataType,r=e.decryptdata.pssh=y.initData?new Uint8Array(y.initData):null}catch(y){var l;if(this.warn(y.message),(l=this.hls)!=null&&l.config.debug)throw y}if(r===null)return this.log(`Skipping key-session request for "${i}" (no initData)`),Promise.resolve(e);const c=this.getKeyIdString(e.decryptdata);this.log(`Generating key-session request for "${i}": ${c} (init data type: ${t} length: ${r?r.byteLength:null})`);const d=new Pl,u=e._onmessage=y=>{const b=e.mediaKeysSession;if(!b){d.emit("error",new Error("invalid state"));return}const{messageType:E,message:C}=y;this.log(`"${E}" message event for session "${b.sessionId}" message size: ${C.byteLength}`),E==="license-request"||E==="license-renewal"?this.renewLicense(e,C).catch(w=>{this.handleError(w),d.emit("error",w)}):E==="license-release"?e.keySystem===nt.FAIRPLAY&&(this.updateKeySession(e,La("acknowledged")),this.removeSession(e)):this.warn(`unhandled media key message type "${E}"`)},h=e._onkeystatuseschange=y=>{if(!e.mediaKeysSession){d.emit("error",new Error("invalid state"));return}this.onKeyStatusChange(e);const E=e.keyStatus;d.emit("keyStatus",E),E==="expired"&&(this.warn(`${e.keySystem} expired for key ${c}`),this.renewKeySession(e))};e.mediaKeysSession.addEventListener("message",u),e.mediaKeysSession.addEventListener("keystatuseschange",h);const g=new Promise((y,b)=>{d.on("error",b),d.on("keyStatus",E=>{E.startsWith("usable")?y():E==="output-restricted"?b(new Pt({type:Le.KEY_SYSTEM_ERROR,details:$.KEY_SYSTEM_STATUS_OUTPUT_RESTRICTED,fatal:!1},"HDCP level output restricted")):E==="internal-error"?b(new Pt({type:Le.KEY_SYSTEM_ERROR,details:$.KEY_SYSTEM_STATUS_INTERNAL_ERROR,fatal:!0},`key status changed to "${E}"`)):E==="expired"?b(new Error("key expired while generating request")):this.warn(`unhandled key status change "${E}"`)})});return e.mediaKeysSession.generateRequest(t,r).then(()=>{var y;this.log(`Request generated for key-session "${(y=e.mediaKeysSession)==null?void 0:y.sessionId}" keyId: ${c}`)}).catch(y=>{throw new Pt({type:Le.KEY_SYSTEM_ERROR,details:$.KEY_SYSTEM_NO_SESSION,error:y,fatal:!1},`Error generating key-session request: ${y}`)}).then(()=>g).catch(y=>{throw d.removeAllListeners(),this.removeSession(e),y}).then(()=>(d.removeAllListeners(),e))}onKeyStatusChange(e){e.mediaKeysSession.keyStatuses.forEach((t,r)=>{this.log(`key status change "${t}" for keyStatuses keyId: ${Zt.hexDump("buffer"in r?new Uint8Array(r.buffer,r.byteOffset,r.byteLength):new Uint8Array(r))} session keyId: ${Zt.hexDump(new Uint8Array(e.decryptdata.keyId||[]))} uri: ${e.decryptdata.uri}`),e.keyStatus=t})}fetchServerCertificate(e){const t=this.config,r=t.loader,i=new r(t),s=this.getServerCertificateUrl(e);return s?(this.log(`Fetching server certificate for "${e}"`),new Promise((o,a)=>{const l={responseType:"arraybuffer",url:s},c=t.certLoadPolicy.default,d={loadPolicy:c,timeout:c.maxLoadTimeMs,maxRetry:0,retryDelay:0,maxRetryDelay:0},u={onSuccess:(h,g,y,b)=>{o(h.data)},onError:(h,g,y,b)=>{a(new Pt({type:Le.KEY_SYSTEM_ERROR,details:$.KEY_SYSTEM_SERVER_CERTIFICATE_REQUEST_FAILED,fatal:!0,networkDetails:y,response:yt({url:l.url,data:void 0},h)},`"${e}" certificate request failed (${s}). Status: ${h.code} (${h.text})`))},onTimeout:(h,g,y)=>{a(new Pt({type:Le.KEY_SYSTEM_ERROR,details:$.KEY_SYSTEM_SERVER_CERTIFICATE_REQUEST_FAILED,fatal:!0,networkDetails:y,response:{url:l.url,data:void 0}},`"${e}" certificate request timed out (${s})`))},onAbort:(h,g,y)=>{a(new Error("aborted"))}};i.load(l,d,u)})):Promise.resolve()}setMediaKeysServerCertificate(e,t,r){return new Promise((i,s)=>{e.setServerCertificate(r).then(o=>{this.log(`setServerCertificate ${o?"success":"not supported by CDM"} (${r==null?void 0:r.byteLength}) on "${t}"`),i(e)}).catch(o=>{s(new Pt({type:Le.KEY_SYSTEM_ERROR,details:$.KEY_SYSTEM_SERVER_CERTIFICATE_UPDATE_FAILED,error:o,fatal:!0},o.message))})})}renewLicense(e,t){return this.requestLicense(e,new Uint8Array(t)).then(r=>this.updateKeySession(e,new Uint8Array(r)).catch(i=>{throw new Pt({type:Le.KEY_SYSTEM_ERROR,details:$.KEY_SYSTEM_SESSION_UPDATE_FAILED,error:i,fatal:!0},i.message)}))}unpackPlayReadyKeyMessage(e,t){const r=String.fromCharCode.apply(null,new Uint16Array(t.buffer));if(!r.includes("PlayReadyKeyMessage"))return e.setRequestHeader("Content-Type","text/xml; charset=utf-8"),t;const i=new DOMParser().parseFromString(r,"application/xml"),s=i.querySelectorAll("HttpHeader");if(s.length>0){let d;for(let u=0,h=s.length;u<h;u++){var o,a;d=s[u];const g=(o=d.querySelector("name"))==null?void 0:o.textContent,y=(a=d.querySelector("value"))==null?void 0:a.textContent;g&&y&&e.setRequestHeader(g,y)}}const l=i.querySelector("Challenge"),c=l==null?void 0:l.textContent;if(!c)throw new Error("Cannot find <Challenge> in key message");return La(atob(c))}setupLicenseXHR(e,t,r,i){const s=this.config.licenseXhrSetup;return s?Promise.resolve().then(()=>{if(!r.decryptdata)throw new Error("Key removed");return s.call(this.hls,e,t,r,i)}).catch(o=>{if(!r.decryptdata)throw o;return e.open("POST",t,!0),s.call(this.hls,e,t,r,i)}).then(o=>(e.readyState||e.open("POST",t,!0),{xhr:e,licenseChallenge:o||i})):(e.open("POST",t,!0),Promise.resolve({xhr:e,licenseChallenge:i}))}requestLicense(e,t){const r=this.config.keyLoadPolicy.default;return new Promise((i,s)=>{const o=this.getLicenseServerUrl(e.keySystem);this.log(`Sending license request to URL: ${o}`);const a=new XMLHttpRequest;a.responseType="arraybuffer",a.onreadystatechange=()=>{if(!this.hls||!e.mediaKeysSession)return s(new Error("invalid state"));if(a.readyState===4)if(a.status===200){this._requestLicenseFailureCount=0;let l=a.response;this.log(`License received ${l instanceof ArrayBuffer?l.byteLength:l}`);const c=this.config.licenseResponseCallback;if(c)try{l=c.call(this.hls,a,o,e)}catch(d){this.error(d)}i(l)}else{const l=r.errorRetry,c=l?l.maxNumRetry:0;if(this._requestLicenseFailureCount++,this._requestLicenseFailureCount>c||a.status>=400&&a.status<500)s(new Pt({type:Le.KEY_SYSTEM_ERROR,details:$.KEY_SYSTEM_LICENSE_REQUEST_FAILED,fatal:!0,networkDetails:a,response:{url:o,data:void 0,code:a.status,text:a.statusText}},`License Request XHR failed (${o}). Status: ${a.status} (${a.statusText})`));else{const d=c-this._requestLicenseFailureCount+1;this.warn(`Retrying license request, ${d} attempts left`),this.requestLicense(e,t).then(i,s)}}},e.licenseXhr&&e.licenseXhr.readyState!==XMLHttpRequest.DONE&&e.licenseXhr.abort(),e.licenseXhr=a,this.setupLicenseXHR(a,o,e,t).then(({xhr:l,licenseChallenge:c})=>{e.keySystem==nt.PLAYREADY&&(c=this.unpackPlayReadyKeyMessage(l,c)),l.send(c)})})}onMediaAttached(e,t){if(!this.config.emeEnabled)return;const r=t.media;this.media=r,r.addEventListener("encrypted",this.onMediaEncrypted),r.addEventListener("waitingforkey",this.onWaitingForKey)}onMediaDetached(){const e=this.media,t=this.mediaKeySessions;e&&(e.removeEventListener("encrypted",this.onMediaEncrypted),e.removeEventListener("waitingforkey",this.onWaitingForKey),this.media=null),this._requestLicenseFailureCount=0,this.setMediaKeysQueue=[],this.mediaKeySessions=[],this.keyIdToKeySessionPromise={},Bi.clearKeyUriToKeyIdMap();const r=t.length;vr.CDMCleanupPromise=Promise.all(t.map(i=>this.removeSession(i)).concat(e==null?void 0:e.setMediaKeys(null).catch(i=>{this.log(`Could not clear media keys: ${i}`)}))).then(()=>{r&&(this.log("finished closing key sessions and clearing media keys"),t.length=0)}).catch(i=>{this.log(`Could not close sessions and clear media keys: ${i}`)})}onManifestLoading(){this.keyFormatPromise=null}onManifestLoaded(e,{sessionKeys:t}){if(!(!t||!this.config.emeEnabled)&&!this.keyFormatPromise){const r=t.reduce((i,s)=>(i.indexOf(s.keyFormat)===-1&&i.push(s.keyFormat),i),[]);this.log(`Selecting key-system from session-keys ${r.join(", ")}`),this.keyFormatPromise=this.getKeyFormatPromise(r)}}removeSession(e){const{mediaKeysSession:t,licenseXhr:r}=e;if(t){this.log(`Remove licenses and keys and close session ${t.sessionId}`),e._onmessage&&(t.removeEventListener("message",e._onmessage),e._onmessage=void 0),e._onkeystatuseschange&&(t.removeEventListener("keystatuseschange",e._onkeystatuseschange),e._onkeystatuseschange=void 0),r&&r.readyState!==XMLHttpRequest.DONE&&r.abort(),e.mediaKeysSession=e.decryptdata=e.licenseXhr=void 0;const i=this.mediaKeySessions.indexOf(e);return i>-1&&this.mediaKeySessions.splice(i,1),t.remove().catch(s=>{this.log(`Could not remove session: ${s}`)}).then(()=>t.close()).catch(s=>{this.log(`Could not close session: ${s}`)})}}}vr.CDMCleanupPromise=void 0;class Pt extends Error{constructor(e,t){super(t),this.data=void 0,e.error||(e.error=new Error(t)),this.data=e,e.err=e.error}}var xt;(function(n){n.MANIFEST="m",n.AUDIO="a",n.VIDEO="v",n.MUXED="av",n.INIT="i",n.CAPTION="c",n.TIMED_TEXT="tt",n.KEY="k",n.OTHER="o"})(xt||(xt={}));var Na;(function(n){n.DASH="d",n.HLS="h",n.SMOOTH="s",n.OTHER="o"})(Na||(Na={}));var Vn;(function(n){n.OBJECT="CMCD-Object",n.REQUEST="CMCD-Request",n.SESSION="CMCD-Session",n.STATUS="CMCD-Status"})(Vn||(Vn={}));const $S={[Vn.OBJECT]:["br","d","ot","tb"],[Vn.REQUEST]:["bl","dl","mtp","nor","nrr","su"],[Vn.SESSION]:["cid","pr","sf","sid","st","v"],[Vn.STATUS]:["bs","rtp"]};class _r{constructor(e,t){this.value=void 0,this.params=void 0,Array.isArray(e)&&(e=e.map(r=>r instanceof _r?r:new _r(r))),this.value=e,this.params=t}}class hp{constructor(e){this.description=void 0,this.description=e}}const HS="Dict";function GS(n){return Array.isArray(n)?JSON.stringify(n):n instanceof Map?"Map{}":n instanceof Set?"Set{}":typeof n=="object"?JSON.stringify(n):String(n)}function KS(n,e,t,r){return new Error(`failed to ${n} "${GS(e)}" as ${t}`,{cause:r})}const Cu="Bare Item",zS="Boolean",jS="Byte Sequence",qS="Decimal",VS="Integer";function WS(n){return n<-999999999999999||999999999999999<n}const YS=/[\x00-\x1f\x7f]+/,QS="Token",XS="Key";function ln(n,e,t){return KS("serialize",n,e,t)}function JS(n){if(typeof n!="boolean")throw ln(n,zS);return n?"?1":"?0"}function ZS(n){return btoa(String.fromCharCode(...n))}function eT(n){if(ArrayBuffer.isView(n)===!1)throw ln(n,jS);return`:${ZS(n)}:`}function fp(n){if(WS(n))throw ln(n,VS);return n.toString()}function tT(n){return`@${fp(n.getTime()/1e3)}`}function pp(n,e){if(n<0)return-pp(-n,e);const t=Math.pow(10,e);if(Math.abs(n*t%1-.5)<Number.EPSILON){const i=Math.floor(n*t);return(i%2===0?i:i+1)/t}else return Math.round(n*t)/t}function nT(n){const e=pp(n,3);if(Math.floor(Math.abs(e)).toString().length>12)throw ln(n,qS);const t=e.toString();return t.includes(".")?t:`${t}.0`}const rT="String";function iT(n){if(YS.test(n))throw ln(n,rT);return`"${n.replace(/\\/g,"\\\\").replace(/"/g,'\\"')}"`}function sT(n){return n.description||n.toString().slice(7,-1)}function wu(n){const e=sT(n);if(/^([a-zA-Z*])([!#$%&'*+\-.^_`|~\w:/]*)$/.test(e)===!1)throw ln(e,QS);return e}function Ua(n){switch(typeof n){case"number":if(!pe(n))throw ln(n,Cu);return Number.isInteger(n)?fp(n):nT(n);case"string":return iT(n);case"symbol":return wu(n);case"boolean":return JS(n);case"object":if(n instanceof Date)return tT(n);if(n instanceof Uint8Array)return eT(n);if(n instanceof hp)return wu(n);default:throw ln(n,Cu)}}function $a(n){if(/^[a-z*][a-z0-9\-_.*]*$/.test(n)===!1)throw ln(n,XS);return n}function Ml(n){return n==null?"":Object.entries(n).map(([e,t])=>t===!0?`;${$a(e)}`:`;${$a(e)}=${Ua(t)}`).join("")}function mp(n){return n instanceof _r?`${Ua(n.value)}${Ml(n.params)}`:Ua(n)}function oT(n){return`(${n.value.map(mp).join(" ")})${Ml(n.params)}`}function aT(n,e={whitespace:!0}){if(typeof n!="object")throw ln(n,HS);const t=n instanceof Map?n.entries():Object.entries(n),r=e!=null&&e.whitespace?" ":"";return Array.from(t).map(([i,s])=>{s instanceof _r||(s=new _r(s));let o=$a(i);return s.value===!0?o+=Ml(s.params):(o+="=",Array.isArray(s.value)?o+=oT(s):o+=mp(s)),o}).join(`,${r}`)}function lT(n,e){return aT(n,e)}const cT=n=>n==="ot"||n==="sf"||n==="st",dT=n=>typeof n=="number"?pe(n):n!=null&&n!==""&&n!==!1;function uT(n,e){const t=new URL(n),r=new URL(e);if(t.origin!==r.origin)return n;const i=t.pathname.split("/").slice(1),s=r.pathname.split("/").slice(1,-1);for(;i[0]===s[0];)i.shift(),s.shift();for(;s.length;)s.shift(),i.unshift("..");return i.join("/")}function hT(){try{return crypto.randomUUID()}catch{try{const e=URL.createObjectURL(new Blob),t=e.toString();return URL.revokeObjectURL(e),t.slice(t.lastIndexOf("/")+1)}catch{let t=new Date().getTime();return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,i=>{const s=(t+Math.random()*16)%16|0;return t=Math.floor(t/16),(i=="x"?s:s&3|8).toString(16)})}}}const Ts=n=>Math.round(n),fT=(n,e)=>(e!=null&&e.baseUrl&&(n=uT(n,e.baseUrl)),encodeURIComponent(n)),ds=n=>Ts(n/100)*100,pT={br:Ts,d:Ts,bl:ds,dl:ds,mtp:ds,nor:fT,rtp:ds,tb:Ts};function mT(n,e){const t={};if(n==null||typeof n!="object")return t;const r=Object.keys(n).sort(),i=ct({},pT,e==null?void 0:e.formatters),s=e==null?void 0:e.filter;return r.forEach(o=>{if(s!=null&&s(o))return;let a=n[o];const l=i[o];l&&(a=l(a,e)),!(o==="v"&&a===1)&&(o=="pr"&&a===1||dT(a)&&(cT(o)&&typeof a=="string"&&(a=new hp(a)),t[o]=a))}),t}function gp(n,e={}){return n?lT(mT(n,e),ct({whitespace:!1},e)):""}function gT(n,e={}){if(!n)return{};const t=Object.entries(n),r=Object.entries($S).concat(Object.entries((e==null?void 0:e.customHeaderMap)||{})),i=t.reduce((s,o)=>{var a,l;const[c,d]=o,u=((a=r.find(h=>h[1].includes(c)))==null?void 0:a[0])||Vn.REQUEST;return(l=s[u])!=null||(s[u]={}),s[u][c]=d,s},{});return Object.entries(i).reduce((s,[o,a])=>(s[o]=gp(a,e),s),{})}function yT(n,e,t){return ct(n,gT(e,t))}const AT="CMCD";function bT(n,e={}){if(!n)return"";const t=gp(n,e);return`${AT}=${encodeURIComponent(t)}`}const ku=/CMCD=[^&#]+/;function vT(n,e,t){const r=bT(e,t);if(!r)return n;if(ku.test(n))return n.replace(ku,r);const i=n.includes("?")?"&":"?";return`${n}${i}${r}`}class ET{constructor(e){this.hls=void 0,this.config=void 0,this.media=void 0,this.sid=void 0,this.cid=void 0,this.useHeaders=!1,this.includeKeys=void 0,this.initialized=!1,this.starved=!1,this.buffering=!0,this.audioBuffer=void 0,this.videoBuffer=void 0,this.onWaiting=()=>{this.initialized&&(this.starved=!0),this.buffering=!0},this.onPlaying=()=>{this.initialized||(this.initialized=!0),this.buffering=!1},this.applyPlaylistData=i=>{try{this.apply(i,{ot:xt.MANIFEST,su:!this.initialized})}catch(s){B.warn("Could not generate manifest CMCD data.",s)}},this.applyFragmentData=i=>{try{const s=i.frag,o=this.hls.levels[s.level],a=this.getObjectType(s),l={d:s.duration*1e3,ot:a};(a===xt.VIDEO||a===xt.AUDIO||a==xt.MUXED)&&(l.br=o.bitrate/1e3,l.tb=this.getTopBandwidth(a)/1e3,l.bl=this.getBufferLength(a)),this.apply(i,l)}catch(s){B.warn("Could not generate segment CMCD data.",s)}},this.hls=e;const t=this.config=e.config,{cmcd:r}=t;r!=null&&(t.pLoader=this.createPlaylistLoader(),t.fLoader=this.createFragmentLoader(),this.sid=r.sessionId||hT(),this.cid=r.contentId,this.useHeaders=r.useHeaders===!0,this.includeKeys=r.includeKeys,this.registerListeners())}registerListeners(){const e=this.hls;e.on(T.MEDIA_ATTACHED,this.onMediaAttached,this),e.on(T.MEDIA_DETACHED,this.onMediaDetached,this),e.on(T.BUFFER_CREATED,this.onBufferCreated,this)}unregisterListeners(){const e=this.hls;e.off(T.MEDIA_ATTACHED,this.onMediaAttached,this),e.off(T.MEDIA_DETACHED,this.onMediaDetached,this),e.off(T.BUFFER_CREATED,this.onBufferCreated,this)}destroy(){this.unregisterListeners(),this.onMediaDetached(),this.hls=this.config=this.audioBuffer=this.videoBuffer=null,this.onWaiting=this.onPlaying=null}onMediaAttached(e,t){this.media=t.media,this.media.addEventListener("waiting",this.onWaiting),this.media.addEventListener("playing",this.onPlaying)}onMediaDetached(){this.media&&(this.media.removeEventListener("waiting",this.onWaiting),this.media.removeEventListener("playing",this.onPlaying),this.media=null)}onBufferCreated(e,t){var r,i;this.audioBuffer=(r=t.tracks.audio)==null?void 0:r.buffer,this.videoBuffer=(i=t.tracks.video)==null?void 0:i.buffer}createData(){var e;return{v:1,sf:Na.HLS,sid:this.sid,cid:this.cid,pr:(e=this.media)==null?void 0:e.playbackRate,mtp:this.hls.bandwidthEstimate/1e3}}apply(e,t={}){ct(t,this.createData());const r=t.ot===xt.INIT||t.ot===xt.VIDEO||t.ot===xt.MUXED;this.starved&&r&&(t.bs=!0,t.su=!0,this.starved=!1),t.su==null&&(t.su=this.buffering);const{includeKeys:i}=this;i&&(t=Object.keys(t).reduce((s,o)=>(i.includes(o)&&(s[o]=t[o]),s),{})),this.useHeaders?(e.headers||(e.headers={}),yT(e.headers,t)):e.url=vT(e.url,t)}getObjectType(e){const{type:t}=e;if(t==="subtitle")return xt.TIMED_TEXT;if(e.sn==="initSegment")return xt.INIT;if(t==="audio")return xt.AUDIO;if(t==="main")return this.hls.audioTracks.length?xt.VIDEO:xt.MUXED}getTopBandwidth(e){let t=0,r;const i=this.hls;if(e===xt.AUDIO)r=i.audioTracks;else{const s=i.maxAutoLevel,o=s>-1?s+1:i.levels.length;r=i.levels.slice(0,o)}for(const s of r)s.bitrate>t&&(t=s.bitrate);return t>0?t:NaN}getBufferLength(e){const t=this.hls.media,r=e===xt.AUDIO?this.audioBuffer:this.videoBuffer;return!r||!t?NaN:et.bufferInfo(r,t.currentTime,this.config.maxBufferHole).len*1e3}createPlaylistLoader(){const{pLoader:e}=this.config,t=this.applyPlaylistData,r=e||this.config.loader;return class{constructor(s){this.loader=void 0,this.loader=new r(s)}get stats(){return this.loader.stats}get context(){return this.loader.context}destroy(){this.loader.destroy()}abort(){this.loader.abort()}load(s,o,a){t(s),this.loader.load(s,o,a)}}}createFragmentLoader(){const{fLoader:e}=this.config,t=this.applyFragmentData,r=e||this.config.loader;return class{constructor(s){this.loader=void 0,this.loader=new r(s)}get stats(){return this.loader.stats}get context(){return this.loader.context}destroy(){this.loader.destroy()}abort(){this.loader.abort()}load(s,o,a){t(s),this.loader.load(s,o,a)}}}}const xT=3e5;class ST{constructor(e){this.hls=void 0,this.log=void 0,this.loader=null,this.uri=null,this.pathwayId=".",this.pathwayPriority=null,this.timeToLoad=300,this.reloadTimer=-1,this.updated=0,this.started=!1,this.enabled=!0,this.levels=null,this.audioTracks=null,this.subtitleTracks=null,this.penalizedPathways={},this.hls=e,this.log=B.log.bind(B,"[content-steering]:"),this.registerListeners()}registerListeners(){const e=this.hls;e.on(T.MANIFEST_LOADING,this.onManifestLoading,this),e.on(T.MANIFEST_LOADED,this.onManifestLoaded,this),e.on(T.MANIFEST_PARSED,this.onManifestParsed,this),e.on(T.ERROR,this.onError,this)}unregisterListeners(){const e=this.hls;e&&(e.off(T.MANIFEST_LOADING,this.onManifestLoading,this),e.off(T.MANIFEST_LOADED,this.onManifestLoaded,this),e.off(T.MANIFEST_PARSED,this.onManifestParsed,this),e.off(T.ERROR,this.onError,this))}startLoad(){if(this.started=!0,this.clearTimeout(),this.enabled&&this.uri){if(this.updated){const e=this.timeToLoad*1e3-(performance.now()-this.updated);if(e>0){this.scheduleRefresh(this.uri,e);return}}this.loadSteeringManifest(this.uri)}}stopLoad(){this.started=!1,this.loader&&(this.loader.destroy(),this.loader=null),this.clearTimeout()}clearTimeout(){this.reloadTimer!==-1&&(self.clearTimeout(this.reloadTimer),this.reloadTimer=-1)}destroy(){this.unregisterListeners(),this.stopLoad(),this.hls=null,this.levels=this.audioTracks=this.subtitleTracks=null}removeLevel(e){const t=this.levels;t&&(this.levels=t.filter(r=>r!==e))}onManifestLoading(){this.stopLoad(),this.enabled=!0,this.timeToLoad=300,this.updated=0,this.uri=null,this.pathwayId=".",this.levels=this.audioTracks=this.subtitleTracks=null}onManifestLoaded(e,t){const{contentSteering:r}=t;r!==null&&(this.pathwayId=r.pathwayId,this.uri=r.uri,this.started&&this.startLoad())}onManifestParsed(e,t){this.audioTracks=t.audioTracks,this.subtitleTracks=t.subtitleTracks}onError(e,t){const{errorAction:r}=t;if((r==null?void 0:r.action)===At.SendAlternateToPenaltyBox&&r.flags===$t.MoveAllAlternatesMatchingHost){const i=this.levels;let s=this.pathwayPriority,o=this.pathwayId;if(t.context){const{groupId:a,pathwayId:l,type:c}=t.context;a&&i?o=this.getPathwayForGroupId(a,c,o):l&&(o=l)}o in this.penalizedPathways||(this.penalizedPathways[o]=performance.now()),!s&&i&&(s=i.reduce((a,l)=>(a.indexOf(l.pathwayId)===-1&&a.push(l.pathwayId),a),[])),s&&s.length>1&&(this.updatePathwayPriority(s),r.resolved=this.pathwayId!==o),r.resolved||B.warn(`Could not resolve ${t.details} ("${t.error.message}") with content-steering for Pathway: ${o} levels: ${i&&i.length} priorities: ${JSON.stringify(s)} penalized: ${JSON.stringify(this.penalizedPathways)}`)}}filterParsedLevels(e){this.levels=e;let t=this.getLevelsForPathway(this.pathwayId);if(t.length===0){const r=e[0].pathwayId;this.log(`No levels found in Pathway ${this.pathwayId}. Setting initial Pathway to "${r}"`),t=this.getLevelsForPathway(r),this.pathwayId=r}return t.length!==e.length?(this.log(`Found ${t.length}/${e.length} levels in Pathway "${this.pathwayId}"`),t):e}getLevelsForPathway(e){return this.levels===null?[]:this.levels.filter(t=>e===t.pathwayId)}updatePathwayPriority(e){this.pathwayPriority=e;let t;const r=this.penalizedPathways,i=performance.now();Object.keys(r).forEach(s=>{i-r[s]>xT&&delete r[s]});for(let s=0;s<e.length;s++){const o=e[s];if(o in r)continue;if(o===this.pathwayId)return;const a=this.hls.nextLoadLevel,l=this.hls.levels[a];if(t=this.getLevelsForPathway(o),t.length>0){this.log(`Setting Pathway to "${o}"`),this.pathwayId=o,Of(t),this.hls.trigger(T.LEVELS_UPDATED,{levels:t});const c=this.hls.levels[a];l&&c&&this.levels&&(c.attrs["STABLE-VARIANT-ID"]!==l.attrs["STABLE-VARIANT-ID"]&&c.bitrate!==l.bitrate&&this.log(`Unstable Pathways change from bitrate ${l.bitrate} to ${c.bitrate}`),this.hls.nextLoadLevel=a);break}}}getPathwayForGroupId(e,t,r){const i=this.getLevelsForPathway(r).concat(this.levels||[]);for(let s=0;s<i.length;s++)if(t===Ue.AUDIO_TRACK&&i[s].hasAudioGroup(e)||t===Ue.SUBTITLE_TRACK&&i[s].hasSubtitleGroup(e))return i[s].pathwayId;return r}clonePathways(e){const t=this.levels;if(!t)return;const r={},i={};e.forEach(s=>{const{ID:o,"BASE-ID":a,"URI-REPLACEMENT":l}=s;if(t.some(d=>d.pathwayId===o))return;const c=this.getLevelsForPathway(a).map(d=>{const u=new st(d.attrs);u["PATHWAY-ID"]=o;const h=u.AUDIO&&`${u.AUDIO}_clone_${o}`,g=u.SUBTITLES&&`${u.SUBTITLES}_clone_${o}`;h&&(r[u.AUDIO]=h,u.AUDIO=h),g&&(i[u.SUBTITLES]=g,u.SUBTITLES=g);const y=yp(d.uri,u["STABLE-VARIANT-ID"],"PER-VARIANT-URIS",l),b=new Rr({attrs:u,audioCodec:d.audioCodec,bitrate:d.bitrate,height:d.height,name:d.name,url:y,videoCodec:d.videoCodec,width:d.width});if(d.audioGroups)for(let E=1;E<d.audioGroups.length;E++)b.addGroupId("audio",`${d.audioGroups[E]}_clone_${o}`);if(d.subtitleGroups)for(let E=1;E<d.subtitleGroups.length;E++)b.addGroupId("text",`${d.subtitleGroups[E]}_clone_${o}`);return b});t.push(...c),Lu(this.audioTracks,r,l,o),Lu(this.subtitleTracks,i,l,o)})}loadSteeringManifest(e){const t=this.hls.config,r=t.loader;this.loader&&this.loader.destroy(),this.loader=new r(t);let i;try{i=new self.URL(e)}catch{this.enabled=!1,this.log(`Failed to parse Steering Manifest URI: ${e}`);return}if(i.protocol!=="data:"){const d=(this.hls.bandwidthEstimate||t.abrEwmaDefaultEstimate)|0;i.searchParams.set("_HLS_pathway",this.pathwayId),i.searchParams.set("_HLS_throughput",""+d)}const s={responseType:"json",url:i.href},o=t.steeringManifestLoadPolicy.default,a=o.errorRetry||o.timeoutRetry||{},l={loadPolicy:o,timeout:o.maxLoadTimeMs,maxRetry:a.maxNumRetry||0,retryDelay:a.retryDelayMs||0,maxRetryDelay:a.maxRetryDelayMs||0},c={onSuccess:(d,u,h,g)=>{this.log(`Loaded steering manifest: "${i}"`);const y=d.data;if(y.VERSION!==1){this.log(`Steering VERSION ${y.VERSION} not supported!`);return}this.updated=performance.now(),this.timeToLoad=y.TTL;const{"RELOAD-URI":b,"PATHWAY-CLONES":E,"PATHWAY-PRIORITY":C}=y;if(b)try{this.uri=new self.URL(b,i).href}catch{this.enabled=!1,this.log(`Failed to parse Steering Manifest RELOAD-URI: ${b}`);return}this.scheduleRefresh(this.uri||h.url),E&&this.clonePathways(E);const w={steeringManifest:y,url:i.toString()};this.hls.trigger(T.STEERING_MANIFEST_LOADED,w),C&&this.updatePathwayPriority(C)},onError:(d,u,h,g)=>{if(this.log(`Error loading steering manifest: ${d.code} ${d.text} (${u.url})`),this.stopLoad(),d.code===410){this.enabled=!1,this.log(`Steering manifest ${u.url} no longer available`);return}let y=this.timeToLoad*1e3;if(d.code===429){const b=this.loader;if(typeof(b==null?void 0:b.getResponseHeader)=="function"){const E=b.getResponseHeader("Retry-After");E&&(y=parseFloat(E)*1e3)}this.log(`Steering manifest ${u.url} rate limited`);return}this.scheduleRefresh(this.uri||u.url,y)},onTimeout:(d,u,h)=>{this.log(`Timeout loading steering manifest (${u.url})`),this.scheduleRefresh(this.uri||u.url)}};this.log(`Requesting steering manifest: ${i}`),this.loader.load(s,l,c)}scheduleRefresh(e,t=this.timeToLoad*1e3){this.clearTimeout(),this.reloadTimer=self.setTimeout(()=>{var r;const i=(r=this.hls)==null?void 0:r.media;if(i&&!i.ended){this.loadSteeringManifest(e);return}this.scheduleRefresh(e,this.timeToLoad*1e3)},t)}}function Lu(n,e,t,r){n&&Object.keys(e).forEach(i=>{const s=n.filter(o=>o.groupId===i).map(o=>{const a=ct({},o);return a.details=void 0,a.attrs=new st(a.attrs),a.url=a.attrs.URI=yp(o.url,o.attrs["STABLE-RENDITION-ID"],"PER-RENDITION-URIS",t),a.groupId=a.attrs["GROUP-ID"]=e[i],a.attrs["PATHWAY-ID"]=r,a});n.push(...s)})}function yp(n,e,t,r){const{HOST:i,PARAMS:s,[t]:o}=r;let a;e&&(a=o==null?void 0:o[e],a&&(n=a));const l=new self.URL(n);return i&&!a&&(l.host=i),s&&Object.keys(s).sort().forEach(c=>{c&&l.searchParams.set(c,s[c])}),l.href}const TT=/^age:\s*[\d.]+\s*$/im;class Ap{constructor(e){this.xhrSetup=void 0,this.requestTimeout=void 0,this.retryTimeout=void 0,this.retryDelay=void 0,this.config=null,this.callbacks=null,this.context=null,this.loader=null,this.stats=void 0,this.xhrSetup=e&&e.xhrSetup||null,this.stats=new co,this.retryDelay=0}destroy(){this.callbacks=null,this.abortInternal(),this.loader=null,this.config=null,this.context=null,this.xhrSetup=null,this.stats=null}abortInternal(){const e=this.loader;self.clearTimeout(this.requestTimeout),self.clearTimeout(this.retryTimeout),e&&(e.onreadystatechange=null,e.onprogress=null,e.readyState!==4&&(this.stats.aborted=!0,e.abort()))}abort(){var e;this.abortInternal(),(e=this.callbacks)!=null&&e.onAbort&&this.callbacks.onAbort(this.stats,this.context,this.loader)}load(e,t,r){if(this.stats.loading.start)throw new Error("Loader can only be used once.");this.stats.loading.start=self.performance.now(),this.context=e,this.config=t,this.callbacks=r,this.loadInternal()}loadInternal(){const{config:e,context:t}=this;if(!e||!t)return;const r=this.loader=new self.XMLHttpRequest,i=this.stats;i.loading.first=0,i.loaded=0,i.aborted=!1;const s=this.xhrSetup;s?Promise.resolve().then(()=>{if(!this.stats.aborted)return s(r,t.url)}).catch(o=>(r.open("GET",t.url,!0),s(r,t.url))).then(()=>{this.stats.aborted||this.openAndSendXhr(r,t,e)}).catch(o=>{this.callbacks.onError({code:r.status,text:o.message},t,r,i)}):this.openAndSendXhr(r,t,e)}openAndSendXhr(e,t,r){e.readyState||e.open("GET",t.url,!0);const i=t.headers,{maxTimeToFirstByteMs:s,maxLoadTimeMs:o}=r.loadPolicy;if(i)for(const a in i)e.setRequestHeader(a,i[a]);t.rangeEnd&&e.setRequestHeader("Range","bytes="+t.rangeStart+"-"+(t.rangeEnd-1)),e.onreadystatechange=this.readystatechange.bind(this),e.onprogress=this.loadprogress.bind(this),e.responseType=t.responseType,self.clearTimeout(this.requestTimeout),r.timeout=s&&pe(s)?s:o,this.requestTimeout=self.setTimeout(this.loadtimeout.bind(this),r.timeout),e.send()}readystatechange(){const{context:e,loader:t,stats:r}=this;if(!e||!t)return;const i=t.readyState,s=this.config;if(!r.aborted&&i>=2&&(r.loading.first===0&&(r.loading.first=Math.max(self.performance.now(),r.loading.start),s.timeout!==s.loadPolicy.maxLoadTimeMs&&(self.clearTimeout(this.requestTimeout),s.timeout=s.loadPolicy.maxLoadTimeMs,this.requestTimeout=self.setTimeout(this.loadtimeout.bind(this),s.loadPolicy.maxLoadTimeMs-(r.loading.first-r.loading.start)))),i===4)){self.clearTimeout(this.requestTimeout),t.onreadystatechange=null,t.onprogress=null;const o=t.status,a=t.responseType!=="text";if(o>=200&&o<300&&(a&&t.response||t.responseText!==null)){r.loading.end=Math.max(self.performance.now(),r.loading.first);const l=a?t.response:t.responseText,c=t.responseType==="arraybuffer"?l.byteLength:l.length;if(r.loaded=r.total=c,r.bwEstimate=r.total*8e3/(r.loading.end-r.loading.first),!this.callbacks)return;const d=this.callbacks.onProgress;if(d&&d(r,e,l,t),!this.callbacks)return;const u={url:t.responseURL,data:l,code:o};this.callbacks.onSuccess(u,r,e,t)}else{const l=s.loadPolicy.errorRetry,c=r.retry,d={url:e.url,data:void 0,code:o};$s(l,c,!1,d)?this.retry(l):(B.error(`${o} while loading ${e.url}`),this.callbacks.onError({code:o,text:t.statusText},e,t,r))}}}loadtimeout(){var e;const t=(e=this.config)==null?void 0:e.loadPolicy.timeoutRetry,r=this.stats.retry;if($s(t,r,!0))this.retry(t);else{var i;B.warn(`timeout while loading ${(i=this.context)==null?void 0:i.url}`);const s=this.callbacks;s&&(this.abortInternal(),s.onTimeout(this.stats,this.context,this.loader))}}retry(e){const{context:t,stats:r}=this;this.retryDelay=Tl(e,r.retry),r.retry++,B.warn(`${status?"HTTP Status "+status:"Timeout"} while loading ${t==null?void 0:t.url}, retrying ${r.retry}/${e.maxNumRetry} in ${this.retryDelay}ms`),this.abortInternal(),this.loader=null,self.clearTimeout(this.retryTimeout),this.retryTimeout=self.setTimeout(this.loadInternal.bind(this),this.retryDelay)}loadprogress(e){const t=this.stats;t.loaded=e.loaded,e.lengthComputable&&(t.total=e.total)}getCacheAge(){let e=null;if(this.loader&&TT.test(this.loader.getAllResponseHeaders())){const t=this.loader.getResponseHeader("age");e=t?parseFloat(t):null}return e}getResponseHeader(e){return this.loader&&new RegExp(`^${e}:\\s*[\\d.]+\\s*$`,"im").test(this.loader.getAllResponseHeaders())?this.loader.getResponseHeader(e):null}}function CT(){if(self.fetch&&self.AbortController&&self.ReadableStream&&self.Request)try{return new self.ReadableStream({}),!0}catch{}return!1}const wT=/(\d+)-(\d+)\/(\d+)/;class Ru{constructor(e){this.fetchSetup=void 0,this.requestTimeout=void 0,this.request=null,this.response=null,this.controller=void 0,this.context=null,this.config=null,this.callbacks=null,this.stats=void 0,this.loader=null,this.fetchSetup=e.fetchSetup||IT,this.controller=new self.AbortController,this.stats=new co}destroy(){this.loader=this.callbacks=this.context=this.config=this.request=null,this.abortInternal(),this.response=null,this.fetchSetup=this.controller=this.stats=null}abortInternal(){this.controller&&!this.stats.loading.end&&(this.stats.aborted=!0,this.controller.abort())}abort(){var e;this.abortInternal(),(e=this.callbacks)!=null&&e.onAbort&&this.callbacks.onAbort(this.stats,this.context,this.response)}load(e,t,r){const i=this.stats;if(i.loading.start)throw new Error("Loader can only be used once.");i.loading.start=self.performance.now();const s=kT(e,this.controller.signal),o=r.onProgress,a=e.responseType==="arraybuffer",l=a?"byteLength":"length",{maxTimeToFirstByteMs:c,maxLoadTimeMs:d}=t.loadPolicy;this.context=e,this.config=t,this.callbacks=r,this.request=this.fetchSetup(e,s),self.clearTimeout(this.requestTimeout),t.timeout=c&&pe(c)?c:d,this.requestTimeout=self.setTimeout(()=>{this.abortInternal(),r.onTimeout(i,e,this.response)},t.timeout),self.fetch(this.request).then(u=>{this.response=this.loader=u;const h=Math.max(self.performance.now(),i.loading.start);if(self.clearTimeout(this.requestTimeout),t.timeout=d,this.requestTimeout=self.setTimeout(()=>{this.abortInternal(),r.onTimeout(i,e,this.response)},d-(h-i.loading.start)),!u.ok){const{status:g,statusText:y}=u;throw new _T(y||"fetch, bad network response",g,u)}return i.loading.first=h,i.total=RT(u.headers)||i.total,o&&pe(t.highWaterMark)?this.loadProgressively(u,i,e,t.highWaterMark,o):a?u.arrayBuffer():e.responseType==="json"?u.json():u.text()}).then(u=>{const h=this.response;if(!h)throw new Error("loader destroyed");self.clearTimeout(this.requestTimeout),i.loading.end=Math.max(self.performance.now(),i.loading.first);const g=u[l];g&&(i.loaded=i.total=g);const y={url:h.url,data:u,code:h.status};o&&!pe(t.highWaterMark)&&o(i,e,u,h),r.onSuccess(y,i,e,h)}).catch(u=>{if(self.clearTimeout(this.requestTimeout),i.aborted)return;const h=u&&u.code||0,g=u?u.message:null;r.onError({code:h,text:g},e,u?u.details:null,i)})}getCacheAge(){let e=null;if(this.response){const t=this.response.headers.get("age");e=t?parseFloat(t):null}return e}getResponseHeader(e){return this.response?this.response.headers.get(e):null}loadProgressively(e,t,r,i=0,s){const o=new Uf,a=e.body.getReader(),l=()=>a.read().then(c=>{if(c.done)return o.dataLength&&s(t,r,o.flush(),e),Promise.resolve(new ArrayBuffer(0));const d=c.value,u=d.length;return t.loaded+=u,u<i||o.dataLength?(o.push(d),o.dataLength>=i&&s(t,r,o.flush(),e)):s(t,r,d,e),l()}).catch(()=>Promise.reject());return l()}}function kT(n,e){const t={method:"GET",mode:"cors",credentials:"same-origin",signal:e,headers:new self.Headers(ct({},n.headers))};return n.rangeEnd&&t.headers.set("Range","bytes="+n.rangeStart+"-"+String(n.rangeEnd-1)),t}function LT(n){const e=wT.exec(n);if(e)return parseInt(e[2])-parseInt(e[1])+1}function RT(n){const e=n.get("Content-Range");if(e){const r=LT(e);if(pe(r))return r}const t=n.get("Content-Length");if(t)return parseInt(t)}function IT(n,e){return new self.Request(n.url,e)}class _T extends Error{constructor(e,t,r){super(e),this.code=void 0,this.details=void 0,this.code=t,this.details=r}}const DT=/\s/,PT={newCue(n,e,t,r){const i=[];let s,o,a,l,c;const d=self.VTTCue||self.TextTrackCue;for(let h=0;h<r.rows.length;h++)if(s=r.rows[h],a=!0,l=0,c="",!s.isEmpty()){var u;for(let b=0;b<s.chars.length;b++)DT.test(s.chars[b].uchar)&&a?l++:(c+=s.chars[b].uchar,a=!1);s.cueStartTime=e,e===t&&(t+=1e-4),l>=16?l--:l++;const g=ap(c.trim()),y=Ol(e,t,g);n!=null&&(u=n.cues)!=null&&u.getCueById(y)||(o=new d(e,t,g),o.id=y,o.line=h+1,o.align="left",o.position=10+Math.min(80,Math.floor(l*8/32)*10),i.push(o))}return n&&i.length&&(i.sort((h,g)=>h.line==="auto"||g.line==="auto"?0:h.line>8&&g.line>8?g.line-h.line:h.line-g.line),i.forEach(h=>_f(n,h))),i}},BT={maxTimeToFirstByteMs:8e3,maxLoadTimeMs:2e4,timeoutRetry:null,errorRetry:null},bp=yt(yt({autoStartLoad:!0,startPosition:-1,defaultAudioCodec:void 0,debug:!1,capLevelOnFPSDrop:!1,capLevelToPlayerSize:!1,ignoreDevicePixelRatio:!1,preferManagedMediaSource:!0,initialLiveManifestSize:1,maxBufferLength:30,backBufferLength:1/0,frontBufferFlushThreshold:1/0,maxBufferSize:60*1e3*1e3,maxBufferHole:.1,highBufferWatchdogPeriod:2,nudgeOffset:.1,nudgeMaxRetry:3,maxFragLookUpTolerance:.25,liveSyncDurationCount:3,liveMaxLatencyDurationCount:1/0,liveSyncDuration:void 0,liveMaxLatencyDuration:void 0,maxLiveSyncPlaybackRate:1,liveDurationInfinity:!1,liveBackBufferLength:null,maxMaxBufferLength:600,enableWorker:!0,workerPath:null,enableSoftwareAES:!0,startLevel:void 0,startFragPrefetch:!1,fpsDroppedMonitoringPeriod:5e3,fpsDroppedMonitoringThreshold:.2,appendErrorMaxRetry:3,loader:Ap,fLoader:void 0,pLoader:void 0,xhrSetup:void 0,licenseXhrSetup:void 0,licenseResponseCallback:void 0,abrController:d1,bufferController:pS,capLevelController:Fl,errorController:Jx,fpsController:US,stretchShortVideoTrack:!1,maxAudioFramesDrift:1,forceKeyFrameOnDiscontinuity:!0,abrEwmaFastLive:3,abrEwmaSlowLive:9,abrEwmaFastVoD:3,abrEwmaSlowVoD:9,abrEwmaDefaultEstimate:5e5,abrEwmaDefaultEstimateMax:5e6,abrBandWidthFactor:.95,abrBandWidthUpFactor:.7,abrMaxWithRealBitrate:!1,maxStarvationDelay:4,maxLoadingDelay:4,minAutoBitrate:0,emeEnabled:!1,widevineLicenseUrl:void 0,drmSystems:{},drmSystemOptions:{},requestMediaKeySystemAccessFunc:yf,testBandwidth:!0,progressive:!1,lowLatencyMode:!0,cmcd:void 0,enableDateRangeMetadataCues:!0,enableEmsgMetadataCues:!0,enableID3MetadataCues:!0,useMediaCapabilities:!0,certLoadPolicy:{default:BT},keyLoadPolicy:{default:{maxTimeToFirstByteMs:8e3,maxLoadTimeMs:2e4,timeoutRetry:{maxNumRetry:1,retryDelayMs:1e3,maxRetryDelayMs:2e4,backoff:"linear"},errorRetry:{maxNumRetry:8,retryDelayMs:1e3,maxRetryDelayMs:2e4,backoff:"linear"}}},manifestLoadPolicy:{default:{maxTimeToFirstByteMs:1/0,maxLoadTimeMs:2e4,timeoutRetry:{maxNumRetry:2,retryDelayMs:0,maxRetryDelayMs:0},errorRetry:{maxNumRetry:1,retryDelayMs:1e3,maxRetryDelayMs:8e3}}},playlistLoadPolicy:{default:{maxTimeToFirstByteMs:1e4,maxLoadTimeMs:2e4,timeoutRetry:{maxNumRetry:2,retryDelayMs:0,maxRetryDelayMs:0},errorRetry:{maxNumRetry:2,retryDelayMs:1e3,maxRetryDelayMs:8e3}}},fragLoadPolicy:{default:{maxTimeToFirstByteMs:1e4,maxLoadTimeMs:12e4,timeoutRetry:{maxNumRetry:4,retryDelayMs:0,maxRetryDelayMs:0},errorRetry:{maxNumRetry:6,retryDelayMs:1e3,maxRetryDelayMs:8e3}}},steeringManifestLoadPolicy:{default:{maxTimeToFirstByteMs:1e4,maxLoadTimeMs:2e4,timeoutRetry:{maxNumRetry:2,retryDelayMs:0,maxRetryDelayMs:0},errorRetry:{maxNumRetry:1,retryDelayMs:1e3,maxRetryDelayMs:8e3}}},manifestLoadingTimeOut:1e4,manifestLoadingMaxRetry:1,manifestLoadingRetryDelay:1e3,manifestLoadingMaxRetryTimeout:64e3,levelLoadingTimeOut:1e4,levelLoadingMaxRetry:4,levelLoadingRetryDelay:1e3,levelLoadingMaxRetryTimeout:64e3,fragLoadingTimeOut:2e4,fragLoadingMaxRetry:6,fragLoadingRetryDelay:1e3,fragLoadingMaxRetryTimeout:64e3},OT()),{},{subtitleStreamController:dS,subtitleTrackController:hS,timelineController:MS,audioStreamController:lS,audioTrackController:cS,emeController:vr,cmcdController:ET,contentSteeringController:ST});function OT(){return{cueHandler:PT,enableWebVTT:!0,enableIMSC1:!0,enableCEA708Captions:!0,captionsTextTrack1Label:"English",captionsTextTrack1LanguageCode:"en",captionsTextTrack2Label:"Spanish",captionsTextTrack2LanguageCode:"es",captionsTextTrack3Label:"Unknown CC",captionsTextTrack3LanguageCode:"",captionsTextTrack4Label:"Unknown CC",captionsTextTrack4LanguageCode:"",renderTextTracksNatively:!0}}function FT(n,e){if((e.liveSyncDurationCount||e.liveMaxLatencyDurationCount)&&(e.liveSyncDuration||e.liveMaxLatencyDuration))throw new Error("Illegal hls.js config: don't mix up liveSyncDurationCount/liveMaxLatencyDurationCount and liveSyncDuration/liveMaxLatencyDuration");if(e.liveMaxLatencyDurationCount!==void 0&&(e.liveSyncDurationCount===void 0||e.liveMaxLatencyDurationCount<=e.liveSyncDurationCount))throw new Error('Illegal hls.js config: "liveMaxLatencyDurationCount" must be greater than "liveSyncDurationCount"');if(e.liveMaxLatencyDuration!==void 0&&(e.liveSyncDuration===void 0||e.liveMaxLatencyDuration<=e.liveSyncDuration))throw new Error('Illegal hls.js config: "liveMaxLatencyDuration" must be greater than "liveSyncDuration"');const t=Ha(n),r=["manifest","level","frag"],i=["TimeOut","MaxRetry","RetryDelay","MaxRetryTimeout"];return r.forEach(s=>{const o=`${s==="level"?"playlist":s}LoadPolicy`,a=e[o]===void 0,l=[];i.forEach(c=>{const d=`${s}Loading${c}`,u=e[d];if(u!==void 0&&a){l.push(d);const h=t[o].default;switch(e[o]={default:h},c){case"TimeOut":h.maxLoadTimeMs=u,h.maxTimeToFirstByteMs=u;break;case"MaxRetry":h.errorRetry.maxNumRetry=u,h.timeoutRetry.maxNumRetry=u;break;case"RetryDelay":h.errorRetry.retryDelayMs=u,h.timeoutRetry.retryDelayMs=u;break;case"MaxRetryTimeout":h.errorRetry.maxRetryDelayMs=u,h.timeoutRetry.maxRetryDelayMs=u;break}}}),l.length&&B.warn(`hls.js config: "${l.join('", "')}" setting(s) are deprecated, use "${o}": ${JSON.stringify(e[o])}`)}),yt(yt({},t),e)}function Ha(n){return n&&typeof n=="object"?Array.isArray(n)?n.map(Ha):Object.keys(n).reduce((e,t)=>(e[t]=Ha(n[t]),e),{}):n}function MT(n){const e=n.loader;e!==Ru&&e!==Ap?(B.log("[config]: Custom loader detected, cannot enable progressive streaming"),n.progressive=!1):CT()&&(n.loader=Ru,n.progressive=!0,n.enableSoftwareAES=!0,B.log("[config]: Progressive streaming enabled, using FetchLoader"))}let ia;class NT extends Cl{constructor(e,t){super(e,"[level-controller]"),this._levels=[],this._firstLevel=-1,this._maxAutoLevel=-1,this._startLevel=void 0,this.currentLevel=null,this.currentLevelIndex=-1,this.manualLevelIndex=-1,this.steering=void 0,this.onParsedComplete=void 0,this.steering=t,this._registerListeners()}_registerListeners(){const{hls:e}=this;e.on(T.MANIFEST_LOADING,this.onManifestLoading,this),e.on(T.MANIFEST_LOADED,this.onManifestLoaded,this),e.on(T.LEVEL_LOADED,this.onLevelLoaded,this),e.on(T.LEVELS_UPDATED,this.onLevelsUpdated,this),e.on(T.FRAG_BUFFERED,this.onFragBuffered,this),e.on(T.ERROR,this.onError,this)}_unregisterListeners(){const{hls:e}=this;e.off(T.MANIFEST_LOADING,this.onManifestLoading,this),e.off(T.MANIFEST_LOADED,this.onManifestLoaded,this),e.off(T.LEVEL_LOADED,this.onLevelLoaded,this),e.off(T.LEVELS_UPDATED,this.onLevelsUpdated,this),e.off(T.FRAG_BUFFERED,this.onFragBuffered,this),e.off(T.ERROR,this.onError,this)}destroy(){this._unregisterListeners(),this.steering=null,this.resetLevels(),super.destroy()}stopLoad(){this._levels.forEach(t=>{t.loadError=0,t.fragmentError=0}),super.stopLoad()}resetLevels(){this._startLevel=void 0,this.manualLevelIndex=-1,this.currentLevelIndex=-1,this.currentLevel=null,this._levels=[],this._maxAutoLevel=-1}onManifestLoading(e,t){this.resetLevels()}onManifestLoaded(e,t){const r=this.hls.config.preferManagedMediaSource,i=[],s={},o={};let a=!1,l=!1,c=!1;t.levels.forEach(d=>{var u,h;const g=d.attrs;let{audioCodec:y,videoCodec:b}=d;((u=y)==null?void 0:u.indexOf("mp4a.40.34"))!==-1&&(ia||(ia=/chrome|firefox/i.test(navigator.userAgent)),ia&&(d.audioCodec=y=void 0)),y&&(d.audioCodec=y=Ms(y,r)),((h=b)==null?void 0:h.indexOf("avc1"))===0&&(b=d.videoCodec=kx(b));const{width:E,height:C,unknownCodecs:w}=d;if(a||(a=!!(E&&C)),l||(l=!!b),c||(c=!!y),w!=null&&w.length||y&&!Ko(y,"audio",r)||b&&!Ko(b,"video",r))return;const{CODECS:R,"FRAME-RATE":_,"HDCP-LEVEL":P,"PATHWAY-ID":H,RESOLUTION:U,"VIDEO-RANGE":z}=g,F=`${`${H||"."}-`}${d.bitrate}-${U}-${_}-${R}-${z}-${P}`;if(s[F])if(s[F].uri!==d.url&&!d.attrs["PATHWAY-ID"]){const Y=o[F]+=1;d.attrs["PATHWAY-ID"]=new Array(Y+1).join(".");const Ae=new Rr(d);s[F]=Ae,i.push(Ae)}else s[F].addGroupId("audio",g.AUDIO),s[F].addGroupId("text",g.SUBTITLES);else{const Y=new Rr(d);s[F]=Y,o[F]=1,i.push(Y)}}),this.filterAndSortMediaOptions(i,t,a,l,c)}filterAndSortMediaOptions(e,t,r,i,s){let o=[],a=[],l=e;if((r||i)&&s&&(l=l.filter(({videoCodec:y,videoRange:b,width:E,height:C})=>(!!y||!!(E&&C))&&$x(b))),l.length===0){Promise.resolve().then(()=>{if(this.hls){t.levels.length&&this.warn(`One or more CODECS in variant not supported: ${JSON.stringify(t.levels[0].attrs)}`);const y=new Error("no level with compatible codecs found in manifest");this.hls.trigger(T.ERROR,{type:Le.MEDIA_ERROR,details:$.MANIFEST_INCOMPATIBLE_CODECS_ERROR,fatal:!0,url:t.url,error:y,reason:y.message})}});return}if(t.audioTracks){const{preferManagedMediaSource:y}=this.hls.config;o=t.audioTracks.filter(b=>!b.audioCodec||Ko(b.audioCodec,"audio",y)),Iu(o)}t.subtitles&&(a=t.subtitles,Iu(a));const c=l.slice(0);l.sort((y,b)=>{if(y.attrs["HDCP-LEVEL"]!==b.attrs["HDCP-LEVEL"])return(y.attrs["HDCP-LEVEL"]||"")>(b.attrs["HDCP-LEVEL"]||"")?1:-1;if(r&&y.height!==b.height)return y.height-b.height;if(y.frameRate!==b.frameRate)return y.frameRate-b.frameRate;if(y.videoRange!==b.videoRange)return Ns.indexOf(y.videoRange)-Ns.indexOf(b.videoRange);if(y.videoCodec!==b.videoCodec){const E=Od(y.videoCodec),C=Od(b.videoCodec);if(E!==C)return C-E}if(y.uri===b.uri&&y.codecSet!==b.codecSet){const E=Fs(y.codecSet),C=Fs(b.codecSet);if(E!==C)return C-E}return y.averageBitrate!==b.averageBitrate?y.averageBitrate-b.averageBitrate:0});let d=c[0];if(this.steering&&(l=this.steering.filterParsedLevels(l),l.length!==c.length)){for(let y=0;y<c.length;y++)if(c[y].pathwayId===l[0].pathwayId){d=c[y];break}}this._levels=l;for(let y=0;y<l.length;y++)if(l[y]===d){var u;this._firstLevel=y;const b=d.bitrate,E=this.hls.bandwidthEstimate;if(this.log(`manifest loaded, ${l.length} level(s) found, first bitrate: ${b}`),((u=this.hls.userConfig)==null?void 0:u.abrEwmaDefaultEstimate)===void 0){const C=Math.min(b,this.hls.config.abrEwmaDefaultEstimateMax);C>E&&E===bp.abrEwmaDefaultEstimate&&(this.hls.bandwidthEstimate=C)}break}const h=s&&!i,g={levels:l,audioTracks:o,subtitleTracks:a,sessionData:t.sessionData,sessionKeys:t.sessionKeys,firstLevel:this._firstLevel,stats:t.stats,audio:s,video:i,altAudio:!h&&o.some(y=>!!y.url)};this.hls.trigger(T.MANIFEST_PARSED,g),(this.hls.config.autoStartLoad||this.hls.forceStartLoad)&&this.hls.startLoad(this.hls.config.startPosition)}get levels(){return this._levels.length===0?null:this._levels}get level(){return this.currentLevelIndex}set level(e){const t=this._levels;if(t.length===0)return;if(e<0||e>=t.length){const d=new Error("invalid level idx"),u=e<0;if(this.hls.trigger(T.ERROR,{type:Le.OTHER_ERROR,details:$.LEVEL_SWITCH_ERROR,level:e,fatal:u,error:d,reason:d.message}),u)return;e=Math.min(e,t.length-1)}const r=this.currentLevelIndex,i=this.currentLevel,s=i?i.attrs["PATHWAY-ID"]:void 0,o=t[e],a=o.attrs["PATHWAY-ID"];if(this.currentLevelIndex=e,this.currentLevel=o,r===e&&o.details&&i&&s===a)return;this.log(`Switching to level ${e} (${o.height?o.height+"p ":""}${o.videoRange?o.videoRange+" ":""}${o.codecSet?o.codecSet+" ":""}@${o.bitrate})${a?" with Pathway "+a:""} from level ${r}${s?" with Pathway "+s:""}`);const l={level:e,attrs:o.attrs,details:o.details,bitrate:o.bitrate,averageBitrate:o.averageBitrate,maxBitrate:o.maxBitrate,realBitrate:o.realBitrate,width:o.width,height:o.height,codecSet:o.codecSet,audioCodec:o.audioCodec,videoCodec:o.videoCodec,audioGroups:o.audioGroups,subtitleGroups:o.subtitleGroups,loaded:o.loaded,loadError:o.loadError,fragmentError:o.fragmentError,name:o.name,id:o.id,uri:o.uri,url:o.url,urlId:0,audioGroupIds:o.audioGroupIds,textGroupIds:o.textGroupIds};this.hls.trigger(T.LEVEL_SWITCHING,l);const c=o.details;if(!c||c.live){const d=this.switchParams(o.uri,i==null?void 0:i.details);this.loadPlaylist(d)}}get manualLevel(){return this.manualLevelIndex}set manualLevel(e){this.manualLevelIndex=e,this._startLevel===void 0&&(this._startLevel=e),e!==-1&&(this.level=e)}get firstLevel(){return this._firstLevel}set firstLevel(e){this._firstLevel=e}get startLevel(){if(this._startLevel===void 0){const e=this.hls.config.startLevel;return e!==void 0?e:this.hls.firstAutoLevel}return this._startLevel}set startLevel(e){this._startLevel=e}onError(e,t){t.fatal||!t.context||t.context.type===Ue.LEVEL&&t.context.level===this.level&&this.checkRetry(t)}onFragBuffered(e,{frag:t}){if(t!==void 0&&t.type===ke.MAIN){const r=t.elementaryStreams;if(!Object.keys(r).some(s=>!!r[s]))return;const i=this._levels[t.level];i!=null&&i.loadError&&(this.log(`Resetting level error count of ${i.loadError} on frag buffered`),i.loadError=0)}}onLevelLoaded(e,t){var r;const{level:i,details:s}=t,o=this._levels[i];if(!o){var a;this.warn(`Invalid level index ${i}`),(a=t.deliveryDirectives)!=null&&a.skip&&(s.deltaUpdateFailed=!0);return}i===this.currentLevelIndex?(o.fragmentError===0&&(o.loadError=0),this.playlistLoaded(i,t,o.details)):(r=t.deliveryDirectives)!=null&&r.skip&&(s.deltaUpdateFailed=!0)}loadPlaylist(e){super.loadPlaylist();const t=this.currentLevelIndex,r=this.currentLevel;if(r&&this.shouldLoadPlaylist(r)){let i=r.uri;if(e)try{i=e.addDirectives(i)}catch(o){this.warn(`Could not construct new URL with HLS Delivery Directives: ${o}`)}const s=r.attrs["PATHWAY-ID"];this.log(`Loading level index ${t}${(e==null?void 0:e.msn)!==void 0?" at sn "+e.msn+" part "+e.part:""} with${s?" Pathway "+s:""} ${i}`),this.clearTimer(),this.hls.trigger(T.LEVEL_LOADING,{url:i,level:t,pathwayId:r.attrs["PATHWAY-ID"],id:0,deliveryDirectives:e||null})}}get nextLoadLevel(){return this.manualLevelIndex!==-1?this.manualLevelIndex:this.hls.nextAutoLevel}set nextLoadLevel(e){this.level=e,this.manualLevelIndex===-1&&(this.hls.nextAutoLevel=e)}removeLevel(e){var t;const r=this._levels.filter((i,s)=>s!==e?!0:(this.steering&&this.steering.removeLevel(i),i===this.currentLevel&&(this.currentLevel=null,this.currentLevelIndex=-1,i.details&&i.details.fragments.forEach(o=>o.level=-1)),!1));Of(r),this._levels=r,this.currentLevelIndex>-1&&(t=this.currentLevel)!=null&&t.details&&(this.currentLevelIndex=this.currentLevel.details.fragments[0].level),this.hls.trigger(T.LEVELS_UPDATED,{levels:r})}onLevelsUpdated(e,{levels:t}){this._levels=t}checkMaxAutoUpdated(){const{autoLevelCapping:e,maxAutoLevel:t,maxHdcpLevel:r}=this.hls;this._maxAutoLevel!==t&&(this._maxAutoLevel=t,this.hls.trigger(T.MAX_AUTO_LEVEL_UPDATED,{autoLevelCapping:e,levels:this.levels,maxAutoLevel:t,minAutoLevel:this.hls.minAutoLevel,maxHdcpLevel:r}))}}function Iu(n){const e={};n.forEach(t=>{const r=t.groupId||"";t.id=e[r]=e[r]||0,e[r]++})}class UT{constructor(e){this.config=void 0,this.keyUriToKeyInfo={},this.emeController=null,this.config=e}abort(e){for(const r in this.keyUriToKeyInfo){const i=this.keyUriToKeyInfo[r].loader;if(i){var t;if(e&&e!==((t=i.context)==null?void 0:t.frag.type))return;i.abort()}}}detach(){for(const e in this.keyUriToKeyInfo){const t=this.keyUriToKeyInfo[e];(t.mediaKeySessionContext||t.decryptdata.isCommonEncryption)&&delete this.keyUriToKeyInfo[e]}}destroy(){this.detach();for(const e in this.keyUriToKeyInfo){const t=this.keyUriToKeyInfo[e].loader;t&&t.destroy()}this.keyUriToKeyInfo={}}createKeyLoadError(e,t=$.KEY_LOAD_ERROR,r,i,s){return new gn({type:Le.NETWORK_ERROR,details:t,fatal:!1,frag:e,response:s,error:r,networkDetails:i})}loadClear(e,t){if(this.emeController&&this.config.emeEnabled){const{sn:r,cc:i}=e;for(let s=0;s<t.length;s++){const o=t[s];if(i<=o.cc&&(r==="initSegment"||o.sn==="initSegment"||r<o.sn)){this.emeController.selectKeySystemFormat(o).then(a=>{o.setKeyFormat(a)});break}}}}load(e){return!e.decryptdata&&e.encrypted&&this.emeController?this.emeController.selectKeySystemFormat(e).then(t=>this.loadInternal(e,t)):this.loadInternal(e)}loadInternal(e,t){var r,i;t&&e.setKeyFormat(t);const s=e.decryptdata;if(!s){const c=new Error(t?`Expected frag.decryptdata to be defined after setting format ${t}`:"Missing decryption data on fragment in onKeyLoading");return Promise.reject(this.createKeyLoadError(e,$.KEY_LOAD_ERROR,c))}const o=s.uri;if(!o)return Promise.reject(this.createKeyLoadError(e,$.KEY_LOAD_ERROR,new Error(`Invalid key URI: "${o}"`)));let a=this.keyUriToKeyInfo[o];if((r=a)!=null&&r.decryptdata.key)return s.key=a.decryptdata.key,Promise.resolve({frag:e,keyInfo:a});if((i=a)!=null&&i.keyLoadPromise){var l;switch((l=a.mediaKeySessionContext)==null?void 0:l.keyStatus){case void 0:case"status-pending":case"usable":case"usable-in-future":return a.keyLoadPromise.then(c=>(s.key=c.keyInfo.decryptdata.key,{frag:e,keyInfo:a}))}}switch(a=this.keyUriToKeyInfo[o]={decryptdata:s,keyLoadPromise:null,loader:null,mediaKeySessionContext:null},s.method){case"ISO-23001-7":case"SAMPLE-AES":case"SAMPLE-AES-CENC":case"SAMPLE-AES-CTR":return s.keyFormat==="identity"?this.loadKeyHTTP(a,e):this.loadKeyEME(a,e);case"AES-128":return this.loadKeyHTTP(a,e);default:return Promise.reject(this.createKeyLoadError(e,$.KEY_LOAD_ERROR,new Error(`Key supplied with unsupported METHOD: "${s.method}"`)))}}loadKeyEME(e,t){const r={frag:t,keyInfo:e};if(this.emeController&&this.config.emeEnabled){const i=this.emeController.loadKey(r);if(i)return(e.keyLoadPromise=i.then(s=>(e.mediaKeySessionContext=s,r))).catch(s=>{throw e.keyLoadPromise=null,s})}return Promise.resolve(r)}loadKeyHTTP(e,t){const r=this.config,i=r.loader,s=new i(r);return t.keyLoader=e.loader=s,e.keyLoadPromise=new Promise((o,a)=>{const l={keyInfo:e,frag:t,responseType:"arraybuffer",url:e.decryptdata.uri},c=r.keyLoadPolicy.default,d={loadPolicy:c,timeout:c.maxLoadTimeMs,maxRetry:0,retryDelay:0,maxRetryDelay:0},u={onSuccess:(h,g,y,b)=>{const{frag:E,keyInfo:C,url:w}=y;if(!E.decryptdata||C!==this.keyUriToKeyInfo[w])return a(this.createKeyLoadError(E,$.KEY_LOAD_ERROR,new Error("after key load, decryptdata unset or changed"),b));C.decryptdata.key=E.decryptdata.key=new Uint8Array(h.data),E.keyLoader=null,C.loader=null,o({frag:E,keyInfo:C})},onError:(h,g,y,b)=>{this.resetLoader(g),a(this.createKeyLoadError(t,$.KEY_LOAD_ERROR,new Error(`HTTP Error ${h.code} loading key ${h.text}`),y,yt({url:l.url,data:void 0},h)))},onTimeout:(h,g,y)=>{this.resetLoader(g),a(this.createKeyLoadError(t,$.KEY_LOAD_TIMEOUT,new Error("key loading timed out"),y))},onAbort:(h,g,y)=>{this.resetLoader(g),a(this.createKeyLoadError(t,$.INTERNAL_ABORTED,new Error("key loading aborted"),y))}};s.load(l,d,u)})}resetLoader(e){const{frag:t,keyInfo:r,url:i}=e,s=r.loader;t.keyLoader===s&&(t.keyLoader=null,r.loader=null),delete this.keyUriToKeyInfo[i],s&&s.destroy()}}function vp(){return self.SourceBuffer||self.WebKitSourceBuffer}function Ep(){if(!Fr())return!1;const e=vp();return!e||e.prototype&&typeof e.prototype.appendBuffer=="function"&&typeof e.prototype.remove=="function"}function $T(){if(!Ep())return!1;const n=Fr();return typeof(n==null?void 0:n.isTypeSupported)=="function"&&(["avc1.42E01E,mp4a.40.2","av01.0.01M.08","vp09.00.50.08"].some(e=>n.isTypeSupported(Oi(e,"video")))||["mp4a.40.2","fLaC"].some(e=>n.isTypeSupported(Oi(e,"audio"))))}function HT(){var n;const e=vp();return typeof(e==null||(n=e.prototype)==null?void 0:n.changeType)=="function"}const GT=250,Cs=2,KT=.1,zT=.05;class jT{constructor(e,t,r,i){this.config=void 0,this.media=null,this.fragmentTracker=void 0,this.hls=void 0,this.nudgeRetry=0,this.stallReported=!1,this.stalled=null,this.moved=!1,this.seeking=!1,this.config=e,this.media=t,this.fragmentTracker=r,this.hls=i}destroy(){this.media=null,this.hls=this.fragmentTracker=null}poll(e,t){const{config:r,media:i,stalled:s}=this;if(i===null)return;const{currentTime:o,seeking:a}=i,l=this.seeking&&!a,c=!this.seeking&&a;if(this.seeking=a,o!==e){if(this.moved=!0,a||(this.nudgeRetry=0),s!==null){if(this.stallReported){const E=self.performance.now()-s;B.warn(`playback not stuck anymore @${o}, after ${Math.round(E)}ms`),this.stallReported=!1}this.stalled=null}return}if(c||l){this.stalled=null;return}if(i.paused&&!a||i.ended||i.playbackRate===0||!et.getBuffered(i).length){this.nudgeRetry=0;return}const d=et.bufferInfo(i,o,0),u=d.nextStart||0;if(a){const E=d.len>Cs,C=!u||t&&t.start<=o||u-o>Cs&&!this.fragmentTracker.getPartialFragment(o);if(E||C)return;this.moved=!1}if(!this.moved&&this.stalled!==null){var h;if(!(d.len>0)&&!u)return;const C=Math.max(u,d.start||0)-o,w=this.hls.levels?this.hls.levels[this.hls.currentLevel]:null,_=(w==null||(h=w.details)==null?void 0:h.live)?w.details.targetduration*2:Cs,P=this.fragmentTracker.getPartialFragment(o);if(C>0&&(C<=_||P)){i.paused||this._trySkipBufferHole(P);return}}const g=self.performance.now();if(s===null){this.stalled=g;return}const y=g-s;if(!a&&y>=GT&&(this._reportStall(d),!this.media))return;const b=et.bufferInfo(i,o,r.maxBufferHole);this._tryFixBufferStall(b,y)}_tryFixBufferStall(e,t){const{config:r,fragmentTracker:i,media:s}=this;if(s===null)return;const o=s.currentTime,a=i.getPartialFragment(o);a&&(this._trySkipBufferHole(a)||!this.media)||(e.len>r.maxBufferHole||e.nextStart&&e.nextStart-o<r.maxBufferHole)&&t>r.highBufferWatchdogPeriod*1e3&&(B.warn("Trying to nudge playhead over buffer-hole"),this.stalled=null,this._tryNudgeBuffer())}_reportStall(e){const{hls:t,media:r,stallReported:i}=this;if(!i&&r){this.stallReported=!0;const s=new Error(`Playback stalling at @${r.currentTime} due to low buffer (${JSON.stringify(e)})`);B.warn(s.message),t.trigger(T.ERROR,{type:Le.MEDIA_ERROR,details:$.BUFFER_STALLED_ERROR,fatal:!1,error:s,buffer:e.len})}}_trySkipBufferHole(e){const{config:t,hls:r,media:i}=this;if(i===null)return 0;const s=i.currentTime,o=et.bufferInfo(i,s,0),a=s<o.start?o.start:o.nextStart;if(a){const l=o.len<=t.maxBufferHole,c=o.len>0&&o.len<1&&i.readyState<3,d=a-s;if(d>0&&(l||c)){if(d>t.maxBufferHole){const{fragmentTracker:h}=this;let g=!1;if(s===0){const y=h.getAppendedFrag(0,ke.MAIN);y&&a<y.end&&(g=!0)}if(!g){const y=e||h.getAppendedFrag(s,ke.MAIN);if(y){let b=!1,E=y.end;for(;E<a;){const C=h.getPartialFragment(E);if(C)E+=C.duration;else{b=!0;break}}if(b)return 0}}}const u=Math.max(a+zT,s+KT);if(B.warn(`skipping hole, adjusting currentTime from ${s} to ${u}`),this.moved=!0,this.stalled=null,i.currentTime=u,e&&!e.gap){const h=new Error(`fragment loaded with buffer holes, seeking from ${s} to ${u}`);r.trigger(T.ERROR,{type:Le.MEDIA_ERROR,details:$.BUFFER_SEEK_OVER_HOLE,fatal:!1,error:h,reason:h.message,frag:e})}return u}}return 0}_tryNudgeBuffer(){const{config:e,hls:t,media:r,nudgeRetry:i}=this;if(r===null)return;const s=r.currentTime;if(this.nudgeRetry++,i<e.nudgeMaxRetry){const o=s+(i+1)*e.nudgeOffset,a=new Error(`Nudging 'currentTime' from ${s} to ${o}`);B.warn(a.message),r.currentTime=o,t.trigger(T.ERROR,{type:Le.MEDIA_ERROR,details:$.BUFFER_NUDGE_ON_STALL,error:a,fatal:!1})}else{const o=new Error(`Playhead still not moving while enough data buffered @${s} after ${e.nudgeMaxRetry} nudges`);B.error(o.message),t.trigger(T.ERROR,{type:Le.MEDIA_ERROR,details:$.BUFFER_STALLED_ERROR,error:o,fatal:!0})}}}const qT=100;class VT extends Ll{constructor(e,t,r){super(e,t,r,"[stream-controller]",ke.MAIN),this.audioCodecSwap=!1,this.gapController=null,this.level=-1,this._forceStartLoad=!1,this.altAudio=!1,this.audioOnly=!1,this.fragPlaying=null,this.onvplaying=null,this.onvseeked=null,this.fragLastKbps=0,this.couldBacktrack=!1,this.backtrackFragment=null,this.audioCodecSwitch=!1,this.videoBuffer=null,this._registerListeners()}_registerListeners(){const{hls:e}=this;e.on(T.MEDIA_ATTACHED,this.onMediaAttached,this),e.on(T.MEDIA_DETACHING,this.onMediaDetaching,this),e.on(T.MANIFEST_LOADING,this.onManifestLoading,this),e.on(T.MANIFEST_PARSED,this.onManifestParsed,this),e.on(T.LEVEL_LOADING,this.onLevelLoading,this),e.on(T.LEVEL_LOADED,this.onLevelLoaded,this),e.on(T.FRAG_LOAD_EMERGENCY_ABORTED,this.onFragLoadEmergencyAborted,this),e.on(T.ERROR,this.onError,this),e.on(T.AUDIO_TRACK_SWITCHING,this.onAudioTrackSwitching,this),e.on(T.AUDIO_TRACK_SWITCHED,this.onAudioTrackSwitched,this),e.on(T.BUFFER_CREATED,this.onBufferCreated,this),e.on(T.BUFFER_FLUSHED,this.onBufferFlushed,this),e.on(T.LEVELS_UPDATED,this.onLevelsUpdated,this),e.on(T.FRAG_BUFFERED,this.onFragBuffered,this)}_unregisterListeners(){const{hls:e}=this;e.off(T.MEDIA_ATTACHED,this.onMediaAttached,this),e.off(T.MEDIA_DETACHING,this.onMediaDetaching,this),e.off(T.MANIFEST_LOADING,this.onManifestLoading,this),e.off(T.MANIFEST_PARSED,this.onManifestParsed,this),e.off(T.LEVEL_LOADED,this.onLevelLoaded,this),e.off(T.FRAG_LOAD_EMERGENCY_ABORTED,this.onFragLoadEmergencyAborted,this),e.off(T.ERROR,this.onError,this),e.off(T.AUDIO_TRACK_SWITCHING,this.onAudioTrackSwitching,this),e.off(T.AUDIO_TRACK_SWITCHED,this.onAudioTrackSwitched,this),e.off(T.BUFFER_CREATED,this.onBufferCreated,this),e.off(T.BUFFER_FLUSHED,this.onBufferFlushed,this),e.off(T.LEVELS_UPDATED,this.onLevelsUpdated,this),e.off(T.FRAG_BUFFERED,this.onFragBuffered,this)}onHandlerDestroying(){this._unregisterListeners(),super.onHandlerDestroying()}startLoad(e){if(this.levels){const{lastCurrentTime:t,hls:r}=this;if(this.stopLoad(),this.setInterval(qT),this.level=-1,!this.startFragRequested){let i=r.startLevel;i===-1&&(r.config.testBandwidth&&this.levels.length>1?(i=0,this.bitrateTest=!0):i=r.firstAutoLevel),r.nextLoadLevel=i,this.level=r.loadLevel,this.loadedmetadata=!1}t>0&&e===-1&&(this.log(`Override startPosition with lastCurrentTime @${t.toFixed(3)}`),e=t),this.state=J.IDLE,this.nextLoadPosition=this.startPosition=this.lastCurrentTime=e,this.tick()}else this._forceStartLoad=!0,this.state=J.STOPPED}stopLoad(){this._forceStartLoad=!1,super.stopLoad()}doTick(){switch(this.state){case J.WAITING_LEVEL:{const{levels:t,level:r}=this,i=t==null?void 0:t[r],s=i==null?void 0:i.details;if(s&&(!s.live||this.levelLastLoaded===i)){if(this.waitForCdnTuneIn(s))break;this.state=J.IDLE;break}else if(this.hls.nextLoadLevel!==this.level){this.state=J.IDLE;break}break}case J.FRAG_LOADING_WAITING_RETRY:{var e;const t=self.performance.now(),r=this.retryDate;if(!r||t>=r||(e=this.media)!=null&&e.seeking){const{levels:i,level:s}=this,o=i==null?void 0:i[s];this.resetStartWhenNotLoaded(o||null),this.state=J.IDLE}}break}this.state===J.IDLE&&this.doTickIdle(),this.onTickEnd()}onTickEnd(){super.onTickEnd(),this.checkBuffer(),this.checkFragmentChanged()}doTickIdle(){const{hls:e,levelLastLoaded:t,levels:r,media:i}=this;if(t===null||!i&&(this.startFragRequested||!e.config.startFragPrefetch)||this.altAudio&&this.audioOnly)return;const s=e.nextLoadLevel;if(!(r!=null&&r[s]))return;const o=r[s],a=this.getMainFwdBufferInfo();if(a===null)return;const l=this.getLevelDetails();if(l&&this._streamEnded(a,l)){const b={};this.altAudio&&(b.type="video"),this.hls.trigger(T.BUFFER_EOS,b),this.state=J.ENDED;return}e.loadLevel!==s&&e.manualLevel===-1&&this.log(`Adapting to level ${s} from level ${this.level}`),this.level=e.nextLoadLevel=s;const c=o.details;if(!c||this.state===J.WAITING_LEVEL||c.live&&this.levelLastLoaded!==o){this.level=s,this.state=J.WAITING_LEVEL;return}const d=a.len,u=this.getMaxBufferLength(o.maxBitrate);if(d>=u)return;this.backtrackFragment&&this.backtrackFragment.start>a.end&&(this.backtrackFragment=null);const h=this.backtrackFragment?this.backtrackFragment.start:a.end;let g=this.getNextFragment(h,c);if(this.couldBacktrack&&!this.fragPrevious&&g&&g.sn!=="initSegment"&&this.fragmentTracker.getState(g)!==mt.OK){var y;const E=((y=this.backtrackFragment)!=null?y:g).sn-c.startSN,C=c.fragments[E-1];C&&g.cc===C.cc&&(g=C,this.fragmentTracker.removeFragment(C))}else this.backtrackFragment&&a.len&&(this.backtrackFragment=null);if(g&&this.isLoopLoading(g,h)){if(!g.gap){const E=this.audioOnly&&!this.altAudio?We.AUDIO:We.VIDEO,C=(E===We.VIDEO?this.videoBuffer:this.mediaBuffer)||this.media;C&&this.afterBufferFlushed(C,E,ke.MAIN)}g=this.getNextFragmentLoopLoading(g,c,a,ke.MAIN,u)}g&&(g.initSegment&&!g.initSegment.data&&!this.bitrateTest&&(g=g.initSegment),this.loadFragment(g,o,h))}loadFragment(e,t,r){const i=this.fragmentTracker.getState(e);this.fragCurrent=e,i===mt.NOT_LOADED||i===mt.PARTIAL?e.sn==="initSegment"?this._loadInitSegment(e,t):this.bitrateTest?(this.log(`Fragment ${e.sn} of level ${e.level} is being downloaded to test bitrate and will not be buffered`),this._loadBitrateTestFrag(e,t)):(this.startFragRequested=!0,super.loadFragment(e,t,r)):this.clearTrackerIfNeeded(e)}getBufferedFrag(e){return this.fragmentTracker.getBufferedFrag(e,ke.MAIN)}followingBufferedFrag(e){return e?this.getBufferedFrag(e.end+.5):null}immediateLevelSwitch(){this.abortCurrentFrag(),this.flushMainBuffer(0,Number.POSITIVE_INFINITY)}nextLevelSwitch(){const{levels:e,media:t}=this;if(t!=null&&t.readyState){let r;const i=this.getAppendedFrag(t.currentTime);i&&i.start>1&&this.flushMainBuffer(0,i.start-1);const s=this.getLevelDetails();if(s!=null&&s.live){const a=this.getMainFwdBufferInfo();if(!a||a.len<s.targetduration*2)return}if(!t.paused&&e){const a=this.hls.nextLoadLevel,l=e[a],c=this.fragLastKbps;c&&this.fragCurrent?r=this.fragCurrent.duration*l.maxBitrate/(1e3*c)+1:r=0}else r=0;const o=this.getBufferedFrag(t.currentTime+r);if(o){const a=this.followingBufferedFrag(o);if(a){this.abortCurrentFrag();const l=a.maxStartPTS?a.maxStartPTS:a.start,c=a.duration,d=Math.max(o.end,l+Math.min(Math.max(c-this.config.maxFragLookUpTolerance,c*(this.couldBacktrack?.5:.125)),c*(this.couldBacktrack?.75:.25)));this.flushMainBuffer(d,Number.POSITIVE_INFINITY)}}}}abortCurrentFrag(){const e=this.fragCurrent;switch(this.fragCurrent=null,this.backtrackFragment=null,e&&(e.abortRequests(),this.fragmentTracker.removeFragment(e)),this.state){case J.KEY_LOADING:case J.FRAG_LOADING:case J.FRAG_LOADING_WAITING_RETRY:case J.PARSING:case J.PARSED:this.state=J.IDLE;break}this.nextLoadPosition=this.getLoadPosition()}flushMainBuffer(e,t){super.flushMainBuffer(e,t,this.altAudio?"video":null)}onMediaAttached(e,t){super.onMediaAttached(e,t);const r=t.media;this.onvplaying=this.onMediaPlaying.bind(this),this.onvseeked=this.onMediaSeeked.bind(this),r.addEventListener("playing",this.onvplaying),r.addEventListener("seeked",this.onvseeked),this.gapController=new jT(this.config,r,this.fragmentTracker,this.hls)}onMediaDetaching(){const{media:e}=this;e&&this.onvplaying&&this.onvseeked&&(e.removeEventListener("playing",this.onvplaying),e.removeEventListener("seeked",this.onvseeked),this.onvplaying=this.onvseeked=null,this.videoBuffer=null),this.fragPlaying=null,this.gapController&&(this.gapController.destroy(),this.gapController=null),super.onMediaDetaching()}onMediaPlaying(){this.tick()}onMediaSeeked(){const e=this.media,t=e?e.currentTime:null;pe(t)&&this.log(`Media seeked to ${t.toFixed(3)}`);const r=this.getMainFwdBufferInfo();if(r===null||r.len===0){this.warn(`Main forward buffer length on "seeked" event ${r?r.len:"empty"})`);return}this.tick()}onManifestLoading(){this.log("Trigger BUFFER_RESET"),this.hls.trigger(T.BUFFER_RESET,void 0),this.fragmentTracker.removeAllFragments(),this.couldBacktrack=!1,this.startPosition=this.lastCurrentTime=this.fragLastKbps=0,this.levels=this.fragPlaying=this.backtrackFragment=this.levelLastLoaded=null,this.altAudio=this.audioOnly=this.startFragRequested=!1}onManifestParsed(e,t){let r=!1,i=!1;t.levels.forEach(s=>{const o=s.audioCodec;o&&(r=r||o.indexOf("mp4a.40.2")!==-1,i=i||o.indexOf("mp4a.40.5")!==-1)}),this.audioCodecSwitch=r&&i&&!HT(),this.audioCodecSwitch&&this.log("Both AAC/HE-AAC audio found in levels; declaring level codec as HE-AAC"),this.levels=t.levels,this.startFragRequested=!1}onLevelLoading(e,t){const{levels:r}=this;if(!r||this.state!==J.IDLE)return;const i=r[t.level];(!i.details||i.details.live&&this.levelLastLoaded!==i||this.waitForCdnTuneIn(i.details))&&(this.state=J.WAITING_LEVEL)}onLevelLoaded(e,t){var r;const{levels:i}=this,s=t.level,o=t.details,a=o.totalduration;if(!i){this.warn(`Levels were reset while loading level ${s}`);return}this.log(`Level ${s} loaded [${o.startSN},${o.endSN}]${o.lastPartSn?`[part-${o.lastPartSn}-${o.lastPartIndex}]`:""}, cc [${o.startCC}, ${o.endCC}] duration:${a}`);const l=i[s],c=this.fragCurrent;c&&(this.state===J.FRAG_LOADING||this.state===J.FRAG_LOADING_WAITING_RETRY)&&c.level!==t.level&&c.loader&&this.abortCurrentFrag();let d=0;if(o.live||(r=l.details)!=null&&r.live){var u;if(this.checkLiveUpdate(o),o.deltaUpdateFailed)return;d=this.alignPlaylists(o,l.details,(u=this.levelLastLoaded)==null?void 0:u.details)}if(l.details=o,this.levelLastLoaded=l,this.hls.trigger(T.LEVEL_UPDATED,{details:o,level:s}),this.state===J.WAITING_LEVEL){if(this.waitForCdnTuneIn(o))return;this.state=J.IDLE}this.startFragRequested?o.live&&this.synchronizeToLiveEdge(o):this.setStartPosition(o,d),this.tick()}_handleFragmentLoadProgress(e){var t;const{frag:r,part:i,payload:s}=e,{levels:o}=this;if(!o){this.warn(`Levels were reset while fragment load was in progress. Fragment ${r.sn} of level ${r.level} will not be buffered`);return}const a=o[r.level],l=a.details;if(!l){this.warn(`Dropping fragment ${r.sn} of level ${r.level} after level details were reset`),this.fragmentTracker.removeFragment(r);return}const c=a.videoCodec,d=l.PTSKnown||!l.live,u=(t=r.initSegment)==null?void 0:t.data,h=this._getAudioCodec(a),g=this.transmuxer=this.transmuxer||new tp(this.hls,ke.MAIN,this._handleTransmuxComplete.bind(this),this._handleTransmuxerFlush.bind(this)),y=i?i.index:-1,b=y!==-1,E=new wl(r.level,r.sn,r.stats.chunkCount,s.byteLength,y,b),C=this.initPTS[r.cc];g.push(s,u,h,c,r,i,l.totalduration,d,E,C)}onAudioTrackSwitching(e,t){const r=this.altAudio;if(!!!t.url){if(this.mediaBuffer!==this.media){this.log("Switching on main audio, use media.buffered to schedule main fragment loading"),this.mediaBuffer=this.media;const o=this.fragCurrent;o&&(this.log("Switching to main audio track, cancel main fragment load"),o.abortRequests(),this.fragmentTracker.removeFragment(o)),this.resetTransmuxer(),this.resetLoadingState()}else this.audioOnly&&this.resetTransmuxer();const s=this.hls;r&&(s.trigger(T.BUFFER_FLUSHING,{startOffset:0,endOffset:Number.POSITIVE_INFINITY,type:null}),this.fragmentTracker.removeAllFragments()),s.trigger(T.AUDIO_TRACK_SWITCHED,t)}}onAudioTrackSwitched(e,t){const r=t.id,i=!!this.hls.audioTracks[r].url;if(i){const s=this.videoBuffer;s&&this.mediaBuffer!==s&&(this.log("Switching on alternate audio, use video.buffered to schedule main fragment loading"),this.mediaBuffer=s)}this.altAudio=i,this.tick()}onBufferCreated(e,t){const r=t.tracks;let i,s,o=!1;for(const a in r){const l=r[a];if(l.id==="main"){if(s=a,i=l,a==="video"){const c=r[a];c&&(this.videoBuffer=c.buffer)}}else o=!0}o&&i?(this.log(`Alternate track found, use ${s}.buffered to schedule main fragment loading`),this.mediaBuffer=i.buffer):this.mediaBuffer=this.media}onFragBuffered(e,t){const{frag:r,part:i}=t;if(r&&r.type!==ke.MAIN)return;if(this.fragContextChanged(r)){this.warn(`Fragment ${r.sn}${i?" p: "+i.index:""} of level ${r.level} finished buffering, but was aborted. state: ${this.state}`),this.state===J.PARSED&&(this.state=J.IDLE);return}const s=i?i.stats:r.stats;this.fragLastKbps=Math.round(8*s.total/(s.buffering.end-s.loading.first)),r.sn!=="initSegment"&&(this.fragPrevious=r),this.fragBufferedComplete(r,i)}onError(e,t){var r;if(t.fatal){this.state=J.ERROR;return}switch(t.details){case $.FRAG_GAP:case $.FRAG_PARSING_ERROR:case $.FRAG_DECRYPT_ERROR:case $.FRAG_LOAD_ERROR:case $.FRAG_LOAD_TIMEOUT:case $.KEY_LOAD_ERROR:case $.KEY_LOAD_TIMEOUT:this.onFragmentOrKeyLoadError(ke.MAIN,t);break;case $.LEVEL_LOAD_ERROR:case $.LEVEL_LOAD_TIMEOUT:case $.LEVEL_PARSING_ERROR:!t.levelRetry&&this.state===J.WAITING_LEVEL&&((r=t.context)==null?void 0:r.type)===Ue.LEVEL&&(this.state=J.IDLE);break;case $.BUFFER_APPEND_ERROR:case $.BUFFER_FULL_ERROR:if(!t.parent||t.parent!=="main")return;if(t.details===$.BUFFER_APPEND_ERROR){this.resetLoadingState();return}this.reduceLengthAndFlushBuffer(t)&&this.flushMainBuffer(0,Number.POSITIVE_INFINITY);break;case $.INTERNAL_EXCEPTION:this.recoverWorkerError(t);break}}checkBuffer(){const{media:e,gapController:t}=this;if(!(!e||!t||!e.readyState)){if(this.loadedmetadata||!et.getBuffered(e).length){const r=this.state!==J.IDLE?this.fragCurrent:null;t.poll(this.lastCurrentTime,r)}this.lastCurrentTime=e.currentTime}}onFragLoadEmergencyAborted(){this.state=J.IDLE,this.loadedmetadata||(this.startFragRequested=!1,this.nextLoadPosition=this.startPosition),this.tickImmediate()}onBufferFlushed(e,{type:t}){if(t!==We.AUDIO||this.audioOnly&&!this.altAudio){const r=(t===We.VIDEO?this.videoBuffer:this.mediaBuffer)||this.media;this.afterBufferFlushed(r,t,ke.MAIN),this.tick()}}onLevelsUpdated(e,t){this.level>-1&&this.fragCurrent&&(this.level=this.fragCurrent.level),this.levels=t.levels}swapAudioCodec(){this.audioCodecSwap=!this.audioCodecSwap}seekToStartPos(){const{media:e}=this;if(!e)return;const t=e.currentTime;let r=this.startPosition;if(r>=0&&t<r){if(e.seeking){this.log(`could not seek to ${r}, already seeking at ${t}`);return}const i=et.getBuffered(e),o=(i.length?i.start(0):0)-r;o>0&&(o<this.config.maxBufferHole||o<this.config.maxFragLookUpTolerance)&&(this.log(`adjusting start position by ${o} to match buffer start`),r+=o,this.startPosition=r),this.log(`seek to target start position ${r} from current time ${t}`),e.currentTime=r}}_getAudioCodec(e){let t=this.config.defaultAudioCodec||e.audioCodec;return this.audioCodecSwap&&t&&(this.log("Swapping audio codec"),t.indexOf("mp4a.40.5")!==-1?t="mp4a.40.2":t="mp4a.40.5"),t}_loadBitrateTestFrag(e,t){e.bitrateTest=!0,this._doFragLoad(e,t).then(r=>{const{hls:i}=this;if(!r||this.fragContextChanged(e))return;t.fragmentError=0,this.state=J.IDLE,this.startFragRequested=!1,this.bitrateTest=!1;const s=e.stats;s.parsing.start=s.parsing.end=s.buffering.start=s.buffering.end=self.performance.now(),i.trigger(T.FRAG_LOADED,r),e.bitrateTest=!1})}_handleTransmuxComplete(e){var t;const r="main",{hls:i}=this,{remuxResult:s,chunkMeta:o}=e,a=this.getCurrentContext(o);if(!a){this.resetWhenMissingContext(o);return}const{frag:l,part:c,level:d}=a,{video:u,text:h,id3:g,initSegment:y}=s,{details:b}=d,E=this.altAudio?void 0:s.audio;if(this.fragContextChanged(l)){this.fragmentTracker.removeFragment(l);return}if(this.state=J.PARSING,y){if(y!=null&&y.tracks){const R=l.initSegment||l;this._bufferInitSegment(d,y.tracks,R,o),i.trigger(T.FRAG_PARSING_INIT_SEGMENT,{frag:R,id:r,tracks:y.tracks})}const C=y.initPTS,w=y.timescale;pe(C)&&(this.initPTS[l.cc]={baseTime:C,timescale:w},i.trigger(T.INIT_PTS_FOUND,{frag:l,id:r,initPTS:C,timescale:w}))}if(u&&b&&l.sn!=="initSegment"){const C=b.fragments[l.sn-1-b.startSN],w=l.sn===b.startSN,R=!C||l.cc>C.cc;if(s.independent!==!1){const{startPTS:_,endPTS:P,startDTS:H,endDTS:U}=u;if(c)c.elementaryStreams[u.type]={startPTS:_,endPTS:P,startDTS:H,endDTS:U};else if(u.firstKeyFrame&&u.independent&&o.id===1&&!R&&(this.couldBacktrack=!0),u.dropped&&u.independent){const z=this.getMainFwdBufferInfo(),Q=(z?z.end:this.getLoadPosition())+this.config.maxBufferHole,F=u.firstKeyFramePTS?u.firstKeyFramePTS:_;if(!w&&Q<F-this.config.maxBufferHole&&!R){this.backtrack(l);return}else R&&(l.gap=!0);l.setElementaryStreamInfo(u.type,l.start,P,l.start,U,!0)}else w&&_>Cs&&(l.gap=!0);l.setElementaryStreamInfo(u.type,_,P,H,U),this.backtrackFragment&&(this.backtrackFragment=l),this.bufferFragmentData(u,l,c,o,w||R)}else if(w||R)l.gap=!0;else{this.backtrack(l);return}}if(E){const{startPTS:C,endPTS:w,startDTS:R,endDTS:_}=E;c&&(c.elementaryStreams[We.AUDIO]={startPTS:C,endPTS:w,startDTS:R,endDTS:_}),l.setElementaryStreamInfo(We.AUDIO,C,w,R,_),this.bufferFragmentData(E,l,c,o)}if(b&&g!=null&&(t=g.samples)!=null&&t.length){const C={id:r,frag:l,details:b,samples:g.samples};i.trigger(T.FRAG_PARSING_METADATA,C)}if(b&&h){const C={id:r,frag:l,details:b,samples:h.samples};i.trigger(T.FRAG_PARSING_USERDATA,C)}}_bufferInitSegment(e,t,r,i){if(this.state!==J.PARSING)return;this.audioOnly=!!t.audio&&!t.video,this.altAudio&&!this.audioOnly&&delete t.audio;const{audio:s,video:o,audiovideo:a}=t;if(s){let l=e.audioCodec;const c=navigator.userAgent.toLowerCase();this.audioCodecSwitch&&(l&&(l.indexOf("mp4a.40.5")!==-1?l="mp4a.40.2":l="mp4a.40.5"),s.metadata.channelCount!==1&&c.indexOf("firefox")===-1&&(l="mp4a.40.5")),l&&l.indexOf("mp4a.40.5")!==-1&&c.indexOf("android")!==-1&&s.container!=="audio/mpeg"&&(l="mp4a.40.2",this.log(`Android: force audio codec to ${l}`)),e.audioCodec&&e.audioCodec!==l&&this.log(`Swapping manifest audio codec "${e.audioCodec}" for "${l}"`),s.levelCodec=l,s.id="main",this.log(`Init audio buffer, container:${s.container}, codecs[selected/level/parsed]=[${l||""}/${e.audioCodec||""}/${s.codec}]`)}o&&(o.levelCodec=e.videoCodec,o.id="main",this.log(`Init video buffer, container:${o.container}, codecs[level/parsed]=[${e.videoCodec||""}/${o.codec}]`)),a&&this.log(`Init audiovideo buffer, container:${a.container}, codecs[level/parsed]=[${e.codecs}/${a.codec}]`),this.hls.trigger(T.BUFFER_CODECS,t),Object.keys(t).forEach(l=>{const d=t[l].initSegment;d!=null&&d.byteLength&&this.hls.trigger(T.BUFFER_APPENDING,{type:l,data:d,frag:r,part:null,chunkMeta:i,parent:r.type})}),this.tickImmediate()}getMainFwdBufferInfo(){return this.getFwdBufferInfo(this.mediaBuffer?this.mediaBuffer:this.media,ke.MAIN)}backtrack(e){this.couldBacktrack=!0,this.backtrackFragment=e,this.resetTransmuxer(),this.flushBufferGap(e),this.fragmentTracker.removeFragment(e),this.fragPrevious=null,this.nextLoadPosition=e.start,this.state=J.IDLE}checkFragmentChanged(){const e=this.media;let t=null;if(e&&e.readyState>1&&e.seeking===!1){const r=e.currentTime;if(et.isBuffered(e,r)?t=this.getAppendedFrag(r):et.isBuffered(e,r+.1)&&(t=this.getAppendedFrag(r+.1)),t){this.backtrackFragment=null;const i=this.fragPlaying,s=t.level;(!i||t.sn!==i.sn||i.level!==s)&&(this.fragPlaying=t,this.hls.trigger(T.FRAG_CHANGED,{frag:t}),(!i||i.level!==s)&&this.hls.trigger(T.LEVEL_SWITCHED,{level:s}))}}}get nextLevel(){const e=this.nextBufferedFrag;return e?e.level:-1}get currentFrag(){const e=this.media;return e?this.fragPlaying||this.getAppendedFrag(e.currentTime):null}get currentProgramDateTime(){const e=this.media;if(e){const t=e.currentTime,r=this.currentFrag;if(r&&pe(t)&&pe(r.programDateTime)){const i=r.programDateTime+(t-r.start)*1e3;return new Date(i)}}return null}get currentLevel(){const e=this.currentFrag;return e?e.level:-1}get nextBufferedFrag(){const e=this.currentFrag;return e?this.followingBufferedFrag(e):null}get forceStartLoad(){return this._forceStartLoad}}class mr{static get version(){return"1.5.7"}static isMSESupported(){return Ep()}static isSupported(){return $T()}static getMediaSource(){return Fr()}static get Events(){return T}static get ErrorTypes(){return Le}static get ErrorDetails(){return $}static get DefaultConfig(){return mr.defaultConfig?mr.defaultConfig:bp}static set DefaultConfig(e){mr.defaultConfig=e}constructor(e={}){this.config=void 0,this.userConfig=void 0,this.coreComponents=void 0,this.networkControllers=void 0,this.started=!1,this._emitter=new Pl,this._autoLevelCapping=-1,this._maxHdcpLevel=null,this.abrController=void 0,this.bufferController=void 0,this.capLevelController=void 0,this.latencyController=void 0,this.levelController=void 0,this.streamController=void 0,this.audioTrackController=void 0,this.subtitleTrackController=void 0,this.emeController=void 0,this.cmcdController=void 0,this._media=null,this.url=null,this.triggeringException=void 0,UE(e.debug||!1,"Hls instance");const t=this.config=FT(mr.DefaultConfig,e);this.userConfig=e,t.progressive&&MT(t);const{abrController:r,bufferController:i,capLevelController:s,errorController:o,fpsController:a}=t,l=new o(this),c=this.abrController=new r(this),d=this.bufferController=new i(this),u=this.capLevelController=new s(this),h=new a(this),g=new Dx(this),y=new Mx(this),b=t.contentSteeringController,E=b?new b(this):null,C=this.levelController=new NT(this,E),w=new h1(this),R=new UT(this.config),_=this.streamController=new VT(this,w,R);u.setStreamController(_),h.setStreamController(_);const P=[g,C,_];E&&P.splice(1,0,E),this.networkControllers=P;const H=[c,d,u,h,y,w];this.audioTrackController=this.createController(t.audioTrackController,P);const U=t.audioStreamController;U&&P.push(new U(this,w,R)),this.subtitleTrackController=this.createController(t.subtitleTrackController,P);const z=t.subtitleStreamController;z&&P.push(new z(this,w,R)),this.createController(t.timelineController,H),R.emeController=this.emeController=this.createController(t.emeController,H),this.cmcdController=this.createController(t.cmcdController,H),this.latencyController=this.createController(Nx,H),this.coreComponents=H,P.push(l);const Q=l.onErrorOut;typeof Q=="function"&&this.on(T.ERROR,Q,l)}createController(e,t){if(e){const r=new e(this);return t&&t.push(r),r}return null}on(e,t,r=this){this._emitter.on(e,t,r)}once(e,t,r=this){this._emitter.once(e,t,r)}removeAllListeners(e){this._emitter.removeAllListeners(e)}off(e,t,r=this,i){this._emitter.off(e,t,r,i)}listeners(e){return this._emitter.listeners(e)}emit(e,t,r){return this._emitter.emit(e,t,r)}trigger(e,t){if(this.config.debug)return this.emit(e,e,t);try{return this.emit(e,e,t)}catch(r){if(B.error("An internal error happened while handling event "+e+'. Error message: "'+r.message+'". Here is a stacktrace:',r),!this.triggeringException){this.triggeringException=!0;const i=e===T.ERROR;this.trigger(T.ERROR,{type:Le.OTHER_ERROR,details:$.INTERNAL_EXCEPTION,fatal:i,event:e,error:r}),this.triggeringException=!1}}return!1}listenerCount(e){return this._emitter.listenerCount(e)}destroy(){B.log("destroy"),this.trigger(T.DESTROYING,void 0),this.detachMedia(),this.removeAllListeners(),this._autoLevelCapping=-1,this.url=null,this.networkControllers.forEach(t=>t.destroy()),this.networkControllers.length=0,this.coreComponents.forEach(t=>t.destroy()),this.coreComponents.length=0;const e=this.config;e.xhrSetup=e.fetchSetup=void 0,this.userConfig=null}attachMedia(e){B.log("attachMedia"),this._media=e,this.trigger(T.MEDIA_ATTACHING,{media:e})}detachMedia(){B.log("detachMedia"),this.trigger(T.MEDIA_DETACHING,void 0),this._media=null}loadSource(e){this.stopLoad();const t=this.media,r=this.url,i=this.url=vl.buildAbsoluteURL(self.location.href,e,{alwaysNormalize:!0});this._autoLevelCapping=-1,this._maxHdcpLevel=null,B.log(`loadSource:${i}`),t&&r&&(r!==i||this.bufferController.hasSourceTypes())&&(this.detachMedia(),this.attachMedia(t)),this.trigger(T.MANIFEST_LOADING,{url:e})}startLoad(e=-1){B.log(`startLoad(${e})`),this.started=!0,this.networkControllers.forEach(t=>{t.startLoad(e)})}stopLoad(){B.log("stopLoad"),this.started=!1,this.networkControllers.forEach(e=>{e.stopLoad()})}resumeBuffering(){this.started&&this.networkControllers.forEach(e=>{"fragmentLoader"in e&&e.startLoad(-1)})}pauseBuffering(){this.networkControllers.forEach(e=>{"fragmentLoader"in e&&e.stopLoad()})}swapAudioCodec(){B.log("swapAudioCodec"),this.streamController.swapAudioCodec()}recoverMediaError(){B.log("recoverMediaError");const e=this._media;this.detachMedia(),e&&this.attachMedia(e)}removeLevel(e){this.levelController.removeLevel(e)}get levels(){const e=this.levelController.levels;return e||[]}get currentLevel(){return this.streamController.currentLevel}set currentLevel(e){B.log(`set currentLevel:${e}`),this.levelController.manualLevel=e,this.streamController.immediateLevelSwitch()}get nextLevel(){return this.streamController.nextLevel}set nextLevel(e){B.log(`set nextLevel:${e}`),this.levelController.manualLevel=e,this.streamController.nextLevelSwitch()}get loadLevel(){return this.levelController.level}set loadLevel(e){B.log(`set loadLevel:${e}`),this.levelController.manualLevel=e}get nextLoadLevel(){return this.levelController.nextLoadLevel}set nextLoadLevel(e){this.levelController.nextLoadLevel=e}get firstLevel(){return Math.max(this.levelController.firstLevel,this.minAutoLevel)}set firstLevel(e){B.log(`set firstLevel:${e}`),this.levelController.firstLevel=e}get startLevel(){const e=this.levelController.startLevel;return e===-1&&this.abrController.forcedAutoLevel>-1?this.abrController.forcedAutoLevel:e}set startLevel(e){B.log(`set startLevel:${e}`),e!==-1&&(e=Math.max(e,this.minAutoLevel)),this.levelController.startLevel=e}get capLevelToPlayerSize(){return this.config.capLevelToPlayerSize}set capLevelToPlayerSize(e){const t=!!e;t!==this.config.capLevelToPlayerSize&&(t?this.capLevelController.startCapping():(this.capLevelController.stopCapping(),this.autoLevelCapping=-1,this.streamController.nextLevelSwitch()),this.config.capLevelToPlayerSize=t)}get autoLevelCapping(){return this._autoLevelCapping}get bandwidthEstimate(){const{bwEstimator:e}=this.abrController;return e?e.getEstimate():NaN}set bandwidthEstimate(e){this.abrController.resetEstimator(e)}get ttfbEstimate(){const{bwEstimator:e}=this.abrController;return e?e.getEstimateTTFB():NaN}set autoLevelCapping(e){this._autoLevelCapping!==e&&(B.log(`set autoLevelCapping:${e}`),this._autoLevelCapping=e,this.levelController.checkMaxAutoUpdated())}get maxHdcpLevel(){return this._maxHdcpLevel}set maxHdcpLevel(e){Ux(e)&&this._maxHdcpLevel!==e&&(this._maxHdcpLevel=e,this.levelController.checkMaxAutoUpdated())}get autoLevelEnabled(){return this.levelController.manualLevel===-1}get manualLevel(){return this.levelController.manualLevel}get minAutoLevel(){const{levels:e,config:{minAutoBitrate:t}}=this;if(!e)return 0;const r=e.length;for(let i=0;i<r;i++)if(e[i].maxBitrate>=t)return i;return 0}get maxAutoLevel(){const{levels:e,autoLevelCapping:t,maxHdcpLevel:r}=this;let i;if(t===-1&&e!=null&&e.length?i=e.length-1:i=t,r)for(let s=i;s--;){const o=e[s].attrs["HDCP-LEVEL"];if(o&&o<=r)return s}return i}get firstAutoLevel(){return this.abrController.firstAutoLevel}get nextAutoLevel(){return this.abrController.nextAutoLevel}set nextAutoLevel(e){this.abrController.nextAutoLevel=e}get playingDate(){return this.streamController.currentProgramDateTime}get mainForwardBufferInfo(){return this.streamController.getMainFwdBufferInfo()}setAudioOption(e){var t;return(t=this.audioTrackController)==null?void 0:t.setAudioOption(e)}setSubtitleOption(e){var t;return(t=this.subtitleTrackController)==null||t.setSubtitleOption(e),null}get allAudioTracks(){const e=this.audioTrackController;return e?e.allAudioTracks:[]}get audioTracks(){const e=this.audioTrackController;return e?e.audioTracks:[]}get audioTrack(){const e=this.audioTrackController;return e?e.audioTrack:-1}set audioTrack(e){const t=this.audioTrackController;t&&(t.audioTrack=e)}get allSubtitleTracks(){const e=this.subtitleTrackController;return e?e.allSubtitleTracks:[]}get subtitleTracks(){const e=this.subtitleTrackController;return e?e.subtitleTracks:[]}get subtitleTrack(){const e=this.subtitleTrackController;return e?e.subtitleTrack:-1}get media(){return this._media}set subtitleTrack(e){const t=this.subtitleTrackController;t&&(t.subtitleTrack=e)}get subtitleDisplay(){const e=this.subtitleTrackController;return e?e.subtitleDisplay:!1}set subtitleDisplay(e){const t=this.subtitleTrackController;t&&(t.subtitleDisplay=e)}get lowLatencyMode(){return this.config.lowLatencyMode}set lowLatencyMode(e){this.config.lowLatencyMode=e}get liveSyncPosition(){return this.latencyController.liveSyncPosition}get latency(){return this.latencyController.latency}get maxLatency(){return this.latencyController.maxLatency}get targetLatency(){return this.latencyController.targetLatency}get drift(){return this.latencyController.drift}get forceStartLoad(){return this.streamController.forceStartLoad}}mr.defaultConfig=void 0;const WT=sb({history:xA("./"),routes:[{path:"/",name:"home",component:dv},{path:"/new/about",name:"about",component:()=>Hn(()=>import("./AboutView-84de2756.js"),["./AboutView-84de2756.js","./AboutView-4d995ba2.css"],import.meta.url)},{path:"/cover",name:"cover",component:()=>Hn(()=>import("./CoverPage-a6f8f063.js"),[],import.meta.url)},{path:"/login",name:"login",component:()=>Hn(()=>import("./LoginPage-cdfba09d.js"),[],import.meta.url)},{path:"/anime/search",component:()=>Hn(()=>import("./AnimeSearch-a36f4153.js"),["./AnimeSearch-a36f4153.js","./InfoHead-7d4dcd38.js"],import.meta.url)},{path:"/anime/play",component:()=>Hn(()=>import("./AnimePlayPage-b9f82b89.js"),["./AnimePlayPage-b9f82b89.js","./InfoHead-7d4dcd38.js"],import.meta.url)},{path:"/anime/calendar",component:()=>Hn(()=>import("./AnimeCalendarPage-1da831bd.js"),["./AnimeCalendarPage-1da831bd.js","./InfoHead-7d4dcd38.js"],import.meta.url)},{path:"/anime/history",component:()=>Hn(()=>import("./AnimeHistoryPage-b9bd9c93.js"),["./AnimeHistoryPage-b9bd9c93.js","./InfoHead-7d4dcd38.js"],import.meta.url)}]}),xp=qy();xp.use(iA);const Nl=Ky(lb);Nl.use(xp);Nl.use(WT);Nl.mount("#app");export{rC as A,aC as D,Ot as F,mr as H,Jn as _,Xe as a,JT as b,Mn as c,tC as d,Mi as e,oC as f,Ft as g,nC as h,Yn as i,WT as j,sC as k,Fg as l,Ze as m,Wa as n,Yt as o,XT as p,nl as q,eC as r,il as s,QT as t,iC as u,qe as v,mi as w,Va as x,ui as y,ZT as z};
