const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/NotFound-CLz08ZEF.js","assets/Button-BcWWR7dO.js","assets/BlogIndexPage-CVMtlp-J.js","assets/Card-B9suksHc.js","assets/RssIcon-DVY6G8b_.js","assets/BlogPostPage-f7wJnuzx.js","assets/staffNotation-BJUwKrxi.js","assets/vexflow-DIVR_RVK.js","assets/BlogTagPage-CuOmgHrm.js","assets/TheoryIndexPage-OeL7iBsI.js","assets/TheoryPostPage-DH6f2sAn.js","assets/TheoryCategoryPage-m4IsOUiC.js","assets/TheoryLevelPage-Bcf5cGZs.js","assets/TheoryTagPage-D9fg4rhP.js","assets/HarmonyGenerator-Dg_yE7g5.js","assets/Badge-c6GG3lum.js","assets/Cadence-D8fkzgad.js","assets/Key-B6AhehA9.js","assets/Note-0b8GyYGQ.js","assets/Chord-DKNaJLTj.js","assets/PlayButton-B7b-kQZL.js","assets/SoundfontChordPlayer-D7ccXnJF.js","assets/Modal-BVrkg96T.js","assets/AudioEngine-C2QCqd9d.js","assets/index-BbFvs2GJ.js","assets/SongGenerator-7FAKYs5j.js","assets/PromptDialog-43BXo7zx.js","assets/TrashIcon-BI3dnFDf.js","assets/DrumSynth-DhFDWBuF.js","assets/FavoriteIcons-DcXewOxh.js","assets/ListBulletsIcon-BkXTaRY8.js","assets/MagicWandIcon-BoGAizjF.js","assets/CircleOfFifths-B3RhKxHK.js","assets/ChordGenerator-Bh0MXJQI.js","assets/InstrumentTuningWidget-Co6G7cXS.js","assets/tunings-D5SDLeB8.js","assets/OctaveLegend-exo5PrIL.js","assets/KarplusStrongSynth-C3ST5d-C.js","assets/NoteSelector-CGCdC78J.js","assets/Scale-DyyUmNSO.js","assets/ScaleExplorer-B0R0sk2S.js","assets/ScaleSystem-DXD1Vkps.js","assets/CagedExplorer-qJ2ZeGpZ.js","assets/ChordIdentifier-uBDaaJxa.js","assets/FretboardChordIdentifierDiagram-DjCnmDd2.js","assets/ScaleIdentifier-B_ripAFm.js","assets/RhythmTrainer-BdvoBuOM.js","assets/ShareIcon-Sdc1v34B.js","assets/RhythmGenerator-c18CZP8S.js","assets/PlayIcon-DTusHXWw.js","assets/RhythmMetronome--HGtXM7a.js","assets/StrummingPatternsLibraryPage-y-UqqhvS.js","assets/RhythmNotationVisualization-DDi_Rbl0.js","assets/IntervalTrainer-dOi_Xc5z.js","assets/SoundEngine-BwIUt1T5.js","assets/MicrotoneTrainer-Cji-9xXv.js","assets/ChordFunctionsTrainer-BsIaztg_.js","assets/StringSelector-BiBONFoI.js","assets/RandomKeySelector-D0yDbQrg.js"])))=>i.map(i=>d[i]);
function pp(i,r){for(var o=0;o<r.length;o++){const s=r[o];if(typeof s!="string"&&!Array.isArray(s)){for(const l in s)if(l!=="default"&&!(l in i)){const c=Object.getOwnPropertyDescriptor(s,l);c&&Object.defineProperty(i,l,c.get?c:{enumerable:!0,get:()=>s[l]})}}}return Object.freeze(Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}))}(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function o(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=o(l);fetch(l.href,c)}})();function kr(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}function Uk(i){if(Object.prototype.hasOwnProperty.call(i,"__esModule"))return i;var r=i.default;if(typeof r=="function"){var o=function s(){var l=!1;try{l=this instanceof s}catch{}return l?Reflect.construct(r,arguments,this.constructor):r.apply(this,arguments)};o.prototype=r.prototype}else o={};return Object.defineProperty(o,"__esModule",{value:!0}),Object.keys(i).forEach(function(s){var l=Object.getOwnPropertyDescriptor(i,s);Object.defineProperty(o,s,l.get?l:{enumerable:!0,get:function(){return i[s]}})}),o}var $s={exports:{}},ho={},Gs={exports:{}},ae={};var Td;function gp(){if(Td)return ae;Td=1;var i=Symbol.for("react.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),h=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),w=Symbol.iterator;function v(x){return x===null||typeof x!="object"?null:(x=w&&x[w]||x["@@iterator"],typeof x=="function"?x:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_=Object.assign,D={};function P(x,L,ie){this.props=x,this.context=L,this.refs=D,this.updater=ie||E}P.prototype.isReactComponent={},P.prototype.setState=function(x,L){if(typeof x!="object"&&typeof x!="function"&&x!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,x,L,"setState")},P.prototype.forceUpdate=function(x){this.updater.enqueueForceUpdate(this,x,"forceUpdate")};function F(){}F.prototype=P.prototype;function $(x,L,ie){this.props=x,this.context=L,this.refs=D,this.updater=ie||E}var q=$.prototype=new F;q.constructor=$,_(q,P.prototype),q.isPureReactComponent=!0;var z=Array.isArray,J=Object.prototype.hasOwnProperty,H={current:null},ee={key:!0,ref:!0,__self:!0,__source:!0};function he(x,L,ie){var se,ue={},ce=null,we=null;if(L!=null)for(se in L.ref!==void 0&&(we=L.ref),L.key!==void 0&&(ce=""+L.key),L)J.call(L,se)&&!ee.hasOwnProperty(se)&&(ue[se]=L[se]);var pe=arguments.length-2;if(pe===1)ue.children=ie;else if(1<pe){for(var Te=Array(pe),ht=0;ht<pe;ht++)Te[ht]=arguments[ht+2];ue.children=Te}if(x&&x.defaultProps)for(se in pe=x.defaultProps,pe)ue[se]===void 0&&(ue[se]=pe[se]);return{$$typeof:i,type:x,key:ce,ref:we,props:ue,_owner:H.current}}function re(x,L){return{$$typeof:i,type:x.type,key:L,ref:x.ref,props:x.props,_owner:x._owner}}function ve(x){return typeof x=="object"&&x!==null&&x.$$typeof===i}function je(x){var L={"=":"=0",":":"=2"};return"$"+x.replace(/[=:]/g,function(ie){return L[ie]})}var me=/\/+/g;function Be(x,L){return typeof x=="object"&&x!==null&&x.key!=null?je(""+x.key):L.toString(36)}function xe(x,L,ie,se,ue){var ce=typeof x;(ce==="undefined"||ce==="boolean")&&(x=null);var we=!1;if(x===null)we=!0;else switch(ce){case"string":case"number":we=!0;break;case"object":switch(x.$$typeof){case i:case r:we=!0}}if(we)return we=x,ue=ue(we),x=se===""?"."+Be(we,0):se,z(ue)?(ie="",x!=null&&(ie=x.replace(me,"$&/")+"/"),xe(ue,L,ie,"",function(ht){return ht})):ue!=null&&(ve(ue)&&(ue=re(ue,ie+(!ue.key||we&&we.key===ue.key?"":(""+ue.key).replace(me,"$&/")+"/")+x)),L.push(ue)),1;if(we=0,se=se===""?".":se+":",z(x))for(var pe=0;pe<x.length;pe++){ce=x[pe];var Te=se+Be(ce,pe);we+=xe(ce,L,ie,Te,ue)}else if(Te=v(x),typeof Te=="function")for(x=Te.call(x),pe=0;!(ce=x.next()).done;)ce=ce.value,Te=se+Be(ce,pe++),we+=xe(ce,L,ie,Te,ue);else if(ce==="object")throw L=String(x),Error("Objects are not valid as a React child (found: "+(L==="[object Object]"?"object with keys {"+Object.keys(x).join(", ")+"}":L)+"). If you meant to render a collection of children, use an array instead.");return we}function $e(x,L,ie){if(x==null)return x;var se=[],ue=0;return xe(x,se,"","",function(ce){return L.call(ie,ce,ue++)}),se}function Oe(x){if(x._status===-1){var L=x._result;L=L(),L.then(function(ie){(x._status===0||x._status===-1)&&(x._status=1,x._result=ie)},function(ie){(x._status===0||x._status===-1)&&(x._status=2,x._result=ie)}),x._status===-1&&(x._status=0,x._result=L)}if(x._status===1)return x._result.default;throw x._result}var ke={current:null},O={transition:null},Q={ReactCurrentDispatcher:ke,ReactCurrentBatchConfig:O,ReactCurrentOwner:H};function B(){throw Error("act(...) is not supported in production builds of React.")}return ae.Children={map:$e,forEach:function(x,L,ie){$e(x,function(){L.apply(this,arguments)},ie)},count:function(x){var L=0;return $e(x,function(){L++}),L},toArray:function(x){return $e(x,function(L){return L})||[]},only:function(x){if(!ve(x))throw Error("React.Children.only expected to receive a single React element child.");return x}},ae.Component=P,ae.Fragment=o,ae.Profiler=l,ae.PureComponent=$,ae.StrictMode=s,ae.Suspense=f,ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Q,ae.act=B,ae.cloneElement=function(x,L,ie){if(x==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+x+".");var se=_({},x.props),ue=x.key,ce=x.ref,we=x._owner;if(L!=null){if(L.ref!==void 0&&(ce=L.ref,we=H.current),L.key!==void 0&&(ue=""+L.key),x.type&&x.type.defaultProps)var pe=x.type.defaultProps;for(Te in L)J.call(L,Te)&&!ee.hasOwnProperty(Te)&&(se[Te]=L[Te]===void 0&&pe!==void 0?pe[Te]:L[Te])}var Te=arguments.length-2;if(Te===1)se.children=ie;else if(1<Te){pe=Array(Te);for(var ht=0;ht<Te;ht++)pe[ht]=arguments[ht+2];se.children=pe}return{$$typeof:i,type:x.type,key:ue,ref:ce,props:se,_owner:we}},ae.createContext=function(x){return x={$$typeof:h,_currentValue:x,_currentValue2:x,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},x.Provider={$$typeof:c,_context:x},x.Consumer=x},ae.createElement=he,ae.createFactory=function(x){var L=he.bind(null,x);return L.type=x,L},ae.createRef=function(){return{current:null}},ae.forwardRef=function(x){return{$$typeof:m,render:x}},ae.isValidElement=ve,ae.lazy=function(x){return{$$typeof:y,_payload:{_status:-1,_result:x},_init:Oe}},ae.memo=function(x,L){return{$$typeof:p,type:x,compare:L===void 0?null:L}},ae.startTransition=function(x){var L=O.transition;O.transition={};try{x()}finally{O.transition=L}},ae.unstable_act=B,ae.useCallback=function(x,L){return ke.current.useCallback(x,L)},ae.useContext=function(x){return ke.current.useContext(x)},ae.useDebugValue=function(){},ae.useDeferredValue=function(x){return ke.current.useDeferredValue(x)},ae.useEffect=function(x,L){return ke.current.useEffect(x,L)},ae.useId=function(){return ke.current.useId()},ae.useImperativeHandle=function(x,L,ie){return ke.current.useImperativeHandle(x,L,ie)},ae.useInsertionEffect=function(x,L){return ke.current.useInsertionEffect(x,L)},ae.useLayoutEffect=function(x,L){return ke.current.useLayoutEffect(x,L)},ae.useMemo=function(x,L){return ke.current.useMemo(x,L)},ae.useReducer=function(x,L,ie){return ke.current.useReducer(x,L,ie)},ae.useRef=function(x){return ke.current.useRef(x)},ae.useState=function(x){return ke.current.useState(x)},ae.useSyncExternalStore=function(x,L,ie){return ke.current.useSyncExternalStore(x,L,ie)},ae.useTransition=function(){return ke.current.useTransition()},ae.version="18.3.1",ae}var Cd;function Io(){return Cd||(Cd=1,Gs.exports=gp()),Gs.exports}var Ed;function yp(){if(Ed)return ho;Ed=1;var i=Io(),r=Symbol.for("react.element"),o=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,l=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function h(m,f,p){var y,w={},v=null,E=null;p!==void 0&&(v=""+p),f.key!==void 0&&(v=""+f.key),f.ref!==void 0&&(E=f.ref);for(y in f)s.call(f,y)&&!c.hasOwnProperty(y)&&(w[y]=f[y]);if(m&&m.defaultProps)for(y in f=m.defaultProps,f)w[y]===void 0&&(w[y]=f[y]);return{$$typeof:r,type:m,key:v,ref:E,props:w,_owner:l.current}}return ho.Fragment=o,ho.jsx=h,ho.jsxs=h,ho}var Pd;function vp(){return Pd||(Pd=1,$s.exports=yp()),$s.exports}var S=vp(),A=Io();const $n=kr(A),wp=pp({__proto__:null,default:$n},[A]);var Li={},Hs={exports:{}},ut={},Ws={exports:{}},Us={};var Md;function bp(){return Md||(Md=1,(function(i){function r(O,Q){var B=O.length;O.push(Q);e:for(;0<B;){var x=B-1>>>1,L=O[x];if(0<l(L,Q))O[x]=Q,O[B]=L,B=x;else break e}}function o(O){return O.length===0?null:O[0]}function s(O){if(O.length===0)return null;var Q=O[0],B=O.pop();if(B!==Q){O[0]=B;e:for(var x=0,L=O.length,ie=L>>>1;x<ie;){var se=2*(x+1)-1,ue=O[se],ce=se+1,we=O[ce];if(0>l(ue,B))ce<L&&0>l(we,ue)?(O[x]=we,O[ce]=B,x=ce):(O[x]=ue,O[se]=B,x=se);else if(ce<L&&0>l(we,B))O[x]=we,O[ce]=B,x=ce;else break e}}return Q}function l(O,Q){var B=O.sortIndex-Q.sortIndex;return B!==0?B:O.id-Q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var c=performance;i.unstable_now=function(){return c.now()}}else{var h=Date,m=h.now();i.unstable_now=function(){return h.now()-m}}var f=[],p=[],y=1,w=null,v=3,E=!1,_=!1,D=!1,P=typeof setTimeout=="function"?setTimeout:null,F=typeof clearTimeout=="function"?clearTimeout:null,$=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function q(O){for(var Q=o(p);Q!==null;){if(Q.callback===null)s(p);else if(Q.startTime<=O)s(p),Q.sortIndex=Q.expirationTime,r(f,Q);else break;Q=o(p)}}function z(O){if(D=!1,q(O),!_)if(o(f)!==null)_=!0,Oe(J);else{var Q=o(p);Q!==null&&ke(z,Q.startTime-O)}}function J(O,Q){_=!1,D&&(D=!1,F(he),he=-1),E=!0;var B=v;try{for(q(Q),w=o(f);w!==null&&(!(w.expirationTime>Q)||O&&!je());){var x=w.callback;if(typeof x=="function"){w.callback=null,v=w.priorityLevel;var L=x(w.expirationTime<=Q);Q=i.unstable_now(),typeof L=="function"?w.callback=L:w===o(f)&&s(f),q(Q)}else s(f);w=o(f)}if(w!==null)var ie=!0;else{var se=o(p);se!==null&&ke(z,se.startTime-Q),ie=!1}return ie}finally{w=null,v=B,E=!1}}var H=!1,ee=null,he=-1,re=5,ve=-1;function je(){return!(i.unstable_now()-ve<re)}function me(){if(ee!==null){var O=i.unstable_now();ve=O;var Q=!0;try{Q=ee(!0,O)}finally{Q?Be():(H=!1,ee=null)}}else H=!1}var Be;if(typeof $=="function")Be=function(){$(me)};else if(typeof MessageChannel<"u"){var xe=new MessageChannel,$e=xe.port2;xe.port1.onmessage=me,Be=function(){$e.postMessage(null)}}else Be=function(){P(me,0)};function Oe(O){ee=O,H||(H=!0,Be())}function ke(O,Q){he=P(function(){O(i.unstable_now())},Q)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(O){O.callback=null},i.unstable_continueExecution=function(){_||E||(_=!0,Oe(J))},i.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):re=0<O?Math.floor(1e3/O):5},i.unstable_getCurrentPriorityLevel=function(){return v},i.unstable_getFirstCallbackNode=function(){return o(f)},i.unstable_next=function(O){switch(v){case 1:case 2:case 3:var Q=3;break;default:Q=v}var B=v;v=Q;try{return O()}finally{v=B}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(O,Q){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var B=v;v=O;try{return Q()}finally{v=B}},i.unstable_scheduleCallback=function(O,Q,B){var x=i.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?x+B:x):B=x,O){case 1:var L=-1;break;case 2:L=250;break;case 5:L=1073741823;break;case 4:L=1e4;break;default:L=5e3}return L=B+L,O={id:y++,callback:Q,priorityLevel:O,startTime:B,expirationTime:L,sortIndex:-1},B>x?(O.sortIndex=B,r(p,O),o(f)===null&&O===o(p)&&(D?(F(he),he=-1):D=!0,ke(z,B-x))):(O.sortIndex=L,r(f,O),_||E||(_=!0,Oe(J))),O},i.unstable_shouldYield=je,i.unstable_wrapCallback=function(O){var Q=v;return function(){var B=v;v=Q;try{return O.apply(this,arguments)}finally{v=B}}}})(Us)),Us}var Ad;function kp(){return Ad||(Ad=1,Ws.exports=bp()),Ws.exports}var _d;function Sp(){if(_d)return ut;_d=1;var i=Io(),r=kp();function o(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,l={};function c(e,t){h(e,t),h(e+"Capture",t)}function h(e,t){for(l[e]=t,e=0;e<t.length;e++)s.add(t[e])}var m=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,y={},w={};function v(e){return f.call(w,e)?!0:f.call(y,e)?!1:p.test(e)?w[e]=!0:(y[e]=!0,!1)}function E(e,t,n,a){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return a?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function _(e,t,n,a){if(t===null||typeof t>"u"||E(e,t,n,a))return!0;if(a)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function D(e,t,n,a,u,d,g){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=a,this.attributeNamespace=u,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=d,this.removeEmptyString=g}var P={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){P[e]=new D(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];P[t]=new D(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){P[e]=new D(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){P[e]=new D(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){P[e]=new D(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){P[e]=new D(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){P[e]=new D(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){P[e]=new D(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){P[e]=new D(e,5,!1,e.toLowerCase(),null,!1,!1)});var F=/[\-:]([a-z])/g;function $(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(F,$);P[t]=new D(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(F,$);P[t]=new D(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(F,$);P[t]=new D(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){P[e]=new D(e,1,!1,e.toLowerCase(),null,!1,!1)}),P.xlinkHref=new D("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){P[e]=new D(e,1,!1,e.toLowerCase(),null,!0,!0)});function q(e,t,n,a){var u=P.hasOwnProperty(t)?P[t]:null;(u!==null?u.type!==0:a||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(_(t,n,u,a)&&(n=null),a||u===null?v(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):u.mustUseProperty?e[u.propertyName]=n===null?u.type===3?!1:"":n:(t=u.attributeName,a=u.attributeNamespace,n===null?e.removeAttribute(t):(u=u.type,n=u===3||u===4&&n===!0?"":""+n,a?e.setAttributeNS(a,t,n):e.setAttribute(t,n))))}var z=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,J=Symbol.for("react.element"),H=Symbol.for("react.portal"),ee=Symbol.for("react.fragment"),he=Symbol.for("react.strict_mode"),re=Symbol.for("react.profiler"),ve=Symbol.for("react.provider"),je=Symbol.for("react.context"),me=Symbol.for("react.forward_ref"),Be=Symbol.for("react.suspense"),xe=Symbol.for("react.suspense_list"),$e=Symbol.for("react.memo"),Oe=Symbol.for("react.lazy"),ke=Symbol.for("react.offscreen"),O=Symbol.iterator;function Q(e){return e===null||typeof e!="object"?null:(e=O&&e[O]||e["@@iterator"],typeof e=="function"?e:null)}var B=Object.assign,x;function L(e){if(x===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);x=t&&t[1]||""}return`
`+x+e}var ie=!1;function se(e,t){if(!e||ie)return"";ie=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(M){var a=M}Reflect.construct(e,[],t)}else{try{t.call()}catch(M){a=M}e.call(t.prototype)}else{try{throw Error()}catch(M){a=M}e()}}catch(M){if(M&&a&&typeof M.stack=="string"){for(var u=M.stack.split(`
`),d=a.stack.split(`
`),g=u.length-1,b=d.length-1;1<=g&&0<=b&&u[g]!==d[b];)b--;for(;1<=g&&0<=b;g--,b--)if(u[g]!==d[b]){if(g!==1||b!==1)do if(g--,b--,0>b||u[g]!==d[b]){var k=`
`+u[g].replace(" at new "," at ");return e.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",e.displayName)),k}while(1<=g&&0<=b);break}}}finally{ie=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?L(e):""}function ue(e){switch(e.tag){case 5:return L(e.type);case 16:return L("Lazy");case 13:return L("Suspense");case 19:return L("SuspenseList");case 0:case 2:case 15:return e=se(e.type,!1),e;case 11:return e=se(e.type.render,!1),e;case 1:return e=se(e.type,!0),e;default:return""}}function ce(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ee:return"Fragment";case H:return"Portal";case re:return"Profiler";case he:return"StrictMode";case Be:return"Suspense";case xe:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case je:return(e.displayName||"Context")+".Consumer";case ve:return(e._context.displayName||"Context")+".Provider";case me:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case $e:return t=e.displayName||null,t!==null?t:ce(e.type)||"Memo";case Oe:t=e._payload,e=e._init;try{return ce(e(t))}catch{}}return null}function we(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ce(t);case 8:return t===he?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function pe(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Te(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function ht(e){var t=Te(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),a=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var u=n.get,d=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return u.call(this)},set:function(g){a=""+g,d.call(this,g)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return a},setValue:function(g){a=""+g},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function xo(e){e._valueTracker||(e._valueTracker=ht(e))}function _l(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),a="";return e&&(a=Te(e)?e.checked?"true":"false":e.value),e=a,e!==n?(t.setValue(e),!0):!1}function To(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Yi(e,t){var n=t.checked;return B({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Dl(e,t){var n=t.defaultValue==null?"":t.defaultValue,a=t.checked!=null?t.checked:t.defaultChecked;n=pe(t.value!=null?t.value:n),e._wrapperState={initialChecked:a,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function jl(e,t){t=t.checked,t!=null&&q(e,"checked",t,!1)}function Qi(e,t){jl(e,t);var n=pe(t.value),a=t.type;if(n!=null)a==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(a==="submit"||a==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ji(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ji(e,t.type,pe(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ll(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var a=t.type;if(!(a!=="submit"&&a!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ji(e,t,n){(t!=="number"||To(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Cr=Array.isArray;function Wn(e,t,n,a){if(e=e.options,t){t={};for(var u=0;u<n.length;u++)t["$"+n[u]]=!0;for(n=0;n<e.length;n++)u=t.hasOwnProperty("$"+e[n].value),e[n].selected!==u&&(e[n].selected=u),u&&a&&(e[n].defaultSelected=!0)}else{for(n=""+pe(n),t=null,u=0;u<e.length;u++){if(e[u].value===n){e[u].selected=!0,a&&(e[u].defaultSelected=!0);return}t!==null||e[u].disabled||(t=e[u])}t!==null&&(t.selected=!0)}}function Xi(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(o(91));return B({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Vl(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(o(92));if(Cr(n)){if(1<n.length)throw Error(o(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:pe(n)}}function Nl(e,t){var n=pe(t.value),a=pe(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),a!=null&&(e.defaultValue=""+a)}function Rl(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Ol(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Zi(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Ol(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Co,Fl=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,a,u){MSApp.execUnsafeLocalFunction(function(){return e(t,n,a,u)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Co=Co||document.createElement("div"),Co.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Co.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Er(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Pr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},vm=["Webkit","ms","Moz","O"];Object.keys(Pr).forEach(function(e){vm.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Pr[t]=Pr[e]})});function zl(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Pr.hasOwnProperty(e)&&Pr[e]?(""+t).trim():t+"px"}function Bl(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var a=n.indexOf("--")===0,u=zl(n,t[n],a);n==="float"&&(n="cssFloat"),a?e.setProperty(n,u):e[n]=u}}var wm=B({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ea(e,t){if(t){if(wm[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(o(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(o(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(o(61))}if(t.style!=null&&typeof t.style!="object")throw Error(o(62))}}function ta(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var na=null;function ra(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var oa=null,Un=null,qn=null;function $l(e){if(e=Qr(e)){if(typeof oa!="function")throw Error(o(280));var t=e.stateNode;t&&(t=Yo(t),oa(e.stateNode,e.type,t))}}function Gl(e){Un?qn?qn.push(e):qn=[e]:Un=e}function Hl(){if(Un){var e=Un,t=qn;if(qn=Un=null,$l(e),t)for(e=0;e<t.length;e++)$l(t[e])}}function Wl(e,t){return e(t)}function Ul(){}var ia=!1;function ql(e,t,n){if(ia)return e(t,n);ia=!0;try{return Wl(e,t,n)}finally{ia=!1,(Un!==null||qn!==null)&&(Ul(),Hl())}}function Mr(e,t){var n=e.stateNode;if(n===null)return null;var a=Yo(n);if(a===null)return null;n=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(o(231,t,typeof n));return n}var aa=!1;if(m)try{var Ar={};Object.defineProperty(Ar,"passive",{get:function(){aa=!0}}),window.addEventListener("test",Ar,Ar),window.removeEventListener("test",Ar,Ar)}catch{aa=!1}function bm(e,t,n,a,u,d,g,b,k){var M=Array.prototype.slice.call(arguments,3);try{t.apply(n,M)}catch(V){this.onError(V)}}var _r=!1,Eo=null,Po=!1,sa=null,km={onError:function(e){_r=!0,Eo=e}};function Sm(e,t,n,a,u,d,g,b,k){_r=!1,Eo=null,bm.apply(km,arguments)}function Im(e,t,n,a,u,d,g,b,k){if(Sm.apply(this,arguments),_r){if(_r){var M=Eo;_r=!1,Eo=null}else throw Error(o(198));Po||(Po=!0,sa=M)}}function xn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Kl(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Yl(e){if(xn(e)!==e)throw Error(o(188))}function xm(e){var t=e.alternate;if(!t){if(t=xn(e),t===null)throw Error(o(188));return t!==e?null:e}for(var n=e,a=t;;){var u=n.return;if(u===null)break;var d=u.alternate;if(d===null){if(a=u.return,a!==null){n=a;continue}break}if(u.child===d.child){for(d=u.child;d;){if(d===n)return Yl(u),e;if(d===a)return Yl(u),t;d=d.sibling}throw Error(o(188))}if(n.return!==a.return)n=u,a=d;else{for(var g=!1,b=u.child;b;){if(b===n){g=!0,n=u,a=d;break}if(b===a){g=!0,a=u,n=d;break}b=b.sibling}if(!g){for(b=d.child;b;){if(b===n){g=!0,n=d,a=u;break}if(b===a){g=!0,a=d,n=u;break}b=b.sibling}if(!g)throw Error(o(189))}}if(n.alternate!==a)throw Error(o(190))}if(n.tag!==3)throw Error(o(188));return n.stateNode.current===n?e:t}function Ql(e){return e=xm(e),e!==null?Jl(e):null}function Jl(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Jl(e);if(t!==null)return t;e=e.sibling}return null}var Xl=r.unstable_scheduleCallback,Zl=r.unstable_cancelCallback,Tm=r.unstable_shouldYield,Cm=r.unstable_requestPaint,Le=r.unstable_now,Em=r.unstable_getCurrentPriorityLevel,la=r.unstable_ImmediatePriority,eu=r.unstable_UserBlockingPriority,Mo=r.unstable_NormalPriority,Pm=r.unstable_LowPriority,tu=r.unstable_IdlePriority,Ao=null,Vt=null;function Mm(e){if(Vt&&typeof Vt.onCommitFiberRoot=="function")try{Vt.onCommitFiberRoot(Ao,e,void 0,(e.current.flags&128)===128)}catch{}}var Ct=Math.clz32?Math.clz32:Dm,Am=Math.log,_m=Math.LN2;function Dm(e){return e>>>=0,e===0?32:31-(Am(e)/_m|0)|0}var _o=64,Do=4194304;function Dr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function jo(e,t){var n=e.pendingLanes;if(n===0)return 0;var a=0,u=e.suspendedLanes,d=e.pingedLanes,g=n&268435455;if(g!==0){var b=g&~u;b!==0?a=Dr(b):(d&=g,d!==0&&(a=Dr(d)))}else g=n&~u,g!==0?a=Dr(g):d!==0&&(a=Dr(d));if(a===0)return 0;if(t!==0&&t!==a&&(t&u)===0&&(u=a&-a,d=t&-t,u>=d||u===16&&(d&4194240)!==0))return t;if((a&4)!==0&&(a|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=a;0<t;)n=31-Ct(t),u=1<<n,a|=e[n],t&=~u;return a}function jm(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Lm(e,t){for(var n=e.suspendedLanes,a=e.pingedLanes,u=e.expirationTimes,d=e.pendingLanes;0<d;){var g=31-Ct(d),b=1<<g,k=u[g];k===-1?((b&n)===0||(b&a)!==0)&&(u[g]=jm(b,t)):k<=t&&(e.expiredLanes|=b),d&=~b}}function ua(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function nu(){var e=_o;return _o<<=1,(_o&4194240)===0&&(_o=64),e}function ca(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function jr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ct(t),e[t]=n}function Vm(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var a=e.eventTimes;for(e=e.expirationTimes;0<n;){var u=31-Ct(n),d=1<<u;t[u]=0,a[u]=-1,e[u]=-1,n&=~d}}function da(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var a=31-Ct(n),u=1<<a;u&t|e[a]&t&&(e[a]|=t),n&=~u}}var ge=0;function ru(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var ou,ha,iu,au,su,ma=!1,Lo=[],Zt=null,en=null,tn=null,Lr=new Map,Vr=new Map,nn=[],Nm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function lu(e,t){switch(e){case"focusin":case"focusout":Zt=null;break;case"dragenter":case"dragleave":en=null;break;case"mouseover":case"mouseout":tn=null;break;case"pointerover":case"pointerout":Lr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Vr.delete(t.pointerId)}}function Nr(e,t,n,a,u,d){return e===null||e.nativeEvent!==d?(e={blockedOn:t,domEventName:n,eventSystemFlags:a,nativeEvent:d,targetContainers:[u]},t!==null&&(t=Qr(t),t!==null&&ha(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,u!==null&&t.indexOf(u)===-1&&t.push(u),e)}function Rm(e,t,n,a,u){switch(t){case"focusin":return Zt=Nr(Zt,e,t,n,a,u),!0;case"dragenter":return en=Nr(en,e,t,n,a,u),!0;case"mouseover":return tn=Nr(tn,e,t,n,a,u),!0;case"pointerover":var d=u.pointerId;return Lr.set(d,Nr(Lr.get(d)||null,e,t,n,a,u)),!0;case"gotpointercapture":return d=u.pointerId,Vr.set(d,Nr(Vr.get(d)||null,e,t,n,a,u)),!0}return!1}function uu(e){var t=Tn(e.target);if(t!==null){var n=xn(t);if(n!==null){if(t=n.tag,t===13){if(t=Kl(n),t!==null){e.blockedOn=t,su(e.priority,function(){iu(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Vo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=pa(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var a=new n.constructor(n.type,n);na=a,n.target.dispatchEvent(a),na=null}else return t=Qr(n),t!==null&&ha(t),e.blockedOn=n,!1;t.shift()}return!0}function cu(e,t,n){Vo(e)&&n.delete(t)}function Om(){ma=!1,Zt!==null&&Vo(Zt)&&(Zt=null),en!==null&&Vo(en)&&(en=null),tn!==null&&Vo(tn)&&(tn=null),Lr.forEach(cu),Vr.forEach(cu)}function Rr(e,t){e.blockedOn===t&&(e.blockedOn=null,ma||(ma=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Om)))}function Or(e){function t(u){return Rr(u,e)}if(0<Lo.length){Rr(Lo[0],e);for(var n=1;n<Lo.length;n++){var a=Lo[n];a.blockedOn===e&&(a.blockedOn=null)}}for(Zt!==null&&Rr(Zt,e),en!==null&&Rr(en,e),tn!==null&&Rr(tn,e),Lr.forEach(t),Vr.forEach(t),n=0;n<nn.length;n++)a=nn[n],a.blockedOn===e&&(a.blockedOn=null);for(;0<nn.length&&(n=nn[0],n.blockedOn===null);)uu(n),n.blockedOn===null&&nn.shift()}var Kn=z.ReactCurrentBatchConfig,No=!0;function Fm(e,t,n,a){var u=ge,d=Kn.transition;Kn.transition=null;try{ge=1,fa(e,t,n,a)}finally{ge=u,Kn.transition=d}}function zm(e,t,n,a){var u=ge,d=Kn.transition;Kn.transition=null;try{ge=4,fa(e,t,n,a)}finally{ge=u,Kn.transition=d}}function fa(e,t,n,a){if(No){var u=pa(e,t,n,a);if(u===null)Da(e,t,a,Ro,n),lu(e,a);else if(Rm(u,e,t,n,a))a.stopPropagation();else if(lu(e,a),t&4&&-1<Nm.indexOf(e)){for(;u!==null;){var d=Qr(u);if(d!==null&&ou(d),d=pa(e,t,n,a),d===null&&Da(e,t,a,Ro,n),d===u)break;u=d}u!==null&&a.stopPropagation()}else Da(e,t,a,null,n)}}var Ro=null;function pa(e,t,n,a){if(Ro=null,e=ra(a),e=Tn(e),e!==null)if(t=xn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Kl(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ro=e,null}function du(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Em()){case la:return 1;case eu:return 4;case Mo:case Pm:return 16;case tu:return 536870912;default:return 16}default:return 16}}var rn=null,ga=null,Oo=null;function hu(){if(Oo)return Oo;var e,t=ga,n=t.length,a,u="value"in rn?rn.value:rn.textContent,d=u.length;for(e=0;e<n&&t[e]===u[e];e++);var g=n-e;for(a=1;a<=g&&t[n-a]===u[d-a];a++);return Oo=u.slice(e,1<a?1-a:void 0)}function Fo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function zo(){return!0}function mu(){return!1}function mt(e){function t(n,a,u,d,g){this._reactName=n,this._targetInst=u,this.type=a,this.nativeEvent=d,this.target=g,this.currentTarget=null;for(var b in e)e.hasOwnProperty(b)&&(n=e[b],this[b]=n?n(d):d[b]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?zo:mu,this.isPropagationStopped=mu,this}return B(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=zo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=zo)},persist:function(){},isPersistent:zo}),t}var Yn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ya=mt(Yn),Fr=B({},Yn,{view:0,detail:0}),Bm=mt(Fr),va,wa,zr,Bo=B({},Fr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ka,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==zr&&(zr&&e.type==="mousemove"?(va=e.screenX-zr.screenX,wa=e.screenY-zr.screenY):wa=va=0,zr=e),va)},movementY:function(e){return"movementY"in e?e.movementY:wa}}),fu=mt(Bo),$m=B({},Bo,{dataTransfer:0}),Gm=mt($m),Hm=B({},Fr,{relatedTarget:0}),ba=mt(Hm),Wm=B({},Yn,{animationName:0,elapsedTime:0,pseudoElement:0}),Um=mt(Wm),qm=B({},Yn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Km=mt(qm),Ym=B({},Yn,{data:0}),pu=mt(Ym),Qm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Jm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Xm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Zm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Xm[e])?!!t[e]:!1}function ka(){return Zm}var ef=B({},Fr,{key:function(e){if(e.key){var t=Qm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Fo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Jm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ka,charCode:function(e){return e.type==="keypress"?Fo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Fo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),tf=mt(ef),nf=B({},Bo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),gu=mt(nf),rf=B({},Fr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ka}),of=mt(rf),af=B({},Yn,{propertyName:0,elapsedTime:0,pseudoElement:0}),sf=mt(af),lf=B({},Bo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),uf=mt(lf),cf=[9,13,27,32],Sa=m&&"CompositionEvent"in window,Br=null;m&&"documentMode"in document&&(Br=document.documentMode);var df=m&&"TextEvent"in window&&!Br,yu=m&&(!Sa||Br&&8<Br&&11>=Br),vu=" ",wu=!1;function bu(e,t){switch(e){case"keyup":return cf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ku(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Qn=!1;function hf(e,t){switch(e){case"compositionend":return ku(t);case"keypress":return t.which!==32?null:(wu=!0,vu);case"textInput":return e=t.data,e===vu&&wu?null:e;default:return null}}function mf(e,t){if(Qn)return e==="compositionend"||!Sa&&bu(e,t)?(e=hu(),Oo=ga=rn=null,Qn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return yu&&t.locale!=="ko"?null:t.data;default:return null}}var ff={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Su(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!ff[e.type]:t==="textarea"}function Iu(e,t,n,a){Gl(a),t=Uo(t,"onChange"),0<t.length&&(n=new ya("onChange","change",null,n,a),e.push({event:n,listeners:t}))}var $r=null,Gr=null;function pf(e){Bu(e,0)}function $o(e){var t=tr(e);if(_l(t))return e}function gf(e,t){if(e==="change")return t}var xu=!1;if(m){var Ia;if(m){var xa="oninput"in document;if(!xa){var Tu=document.createElement("div");Tu.setAttribute("oninput","return;"),xa=typeof Tu.oninput=="function"}Ia=xa}else Ia=!1;xu=Ia&&(!document.documentMode||9<document.documentMode)}function Cu(){$r&&($r.detachEvent("onpropertychange",Eu),Gr=$r=null)}function Eu(e){if(e.propertyName==="value"&&$o(Gr)){var t=[];Iu(t,Gr,e,ra(e)),ql(pf,t)}}function yf(e,t,n){e==="focusin"?(Cu(),$r=t,Gr=n,$r.attachEvent("onpropertychange",Eu)):e==="focusout"&&Cu()}function vf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return $o(Gr)}function wf(e,t){if(e==="click")return $o(t)}function bf(e,t){if(e==="input"||e==="change")return $o(t)}function kf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Et=typeof Object.is=="function"?Object.is:kf;function Hr(e,t){if(Et(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),a=Object.keys(t);if(n.length!==a.length)return!1;for(a=0;a<n.length;a++){var u=n[a];if(!f.call(t,u)||!Et(e[u],t[u]))return!1}return!0}function Pu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Mu(e,t){var n=Pu(e);e=0;for(var a;n;){if(n.nodeType===3){if(a=e+n.textContent.length,e<=t&&a>=t)return{node:n,offset:t-e};e=a}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Pu(n)}}function Au(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Au(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function _u(){for(var e=window,t=To();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=To(e.document)}return t}function Ta(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Sf(e){var t=_u(),n=e.focusedElem,a=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Au(n.ownerDocument.documentElement,n)){if(a!==null&&Ta(n)){if(t=a.start,e=a.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var u=n.textContent.length,d=Math.min(a.start,u);a=a.end===void 0?d:Math.min(a.end,u),!e.extend&&d>a&&(u=a,a=d,d=u),u=Mu(n,d);var g=Mu(n,a);u&&g&&(e.rangeCount!==1||e.anchorNode!==u.node||e.anchorOffset!==u.offset||e.focusNode!==g.node||e.focusOffset!==g.offset)&&(t=t.createRange(),t.setStart(u.node,u.offset),e.removeAllRanges(),d>a?(e.addRange(t),e.extend(g.node,g.offset)):(t.setEnd(g.node,g.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var If=m&&"documentMode"in document&&11>=document.documentMode,Jn=null,Ca=null,Wr=null,Ea=!1;function Du(e,t,n){var a=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ea||Jn==null||Jn!==To(a)||(a=Jn,"selectionStart"in a&&Ta(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Wr&&Hr(Wr,a)||(Wr=a,a=Uo(Ca,"onSelect"),0<a.length&&(t=new ya("onSelect","select",null,t,n),e.push({event:t,listeners:a}),t.target=Jn)))}function Go(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Xn={animationend:Go("Animation","AnimationEnd"),animationiteration:Go("Animation","AnimationIteration"),animationstart:Go("Animation","AnimationStart"),transitionend:Go("Transition","TransitionEnd")},Pa={},ju={};m&&(ju=document.createElement("div").style,"AnimationEvent"in window||(delete Xn.animationend.animation,delete Xn.animationiteration.animation,delete Xn.animationstart.animation),"TransitionEvent"in window||delete Xn.transitionend.transition);function Ho(e){if(Pa[e])return Pa[e];if(!Xn[e])return e;var t=Xn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in ju)return Pa[e]=t[n];return e}var Lu=Ho("animationend"),Vu=Ho("animationiteration"),Nu=Ho("animationstart"),Ru=Ho("transitionend"),Ou=new Map,Fu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function on(e,t){Ou.set(e,t),c(t,[e])}for(var Ma=0;Ma<Fu.length;Ma++){var Aa=Fu[Ma],xf=Aa.toLowerCase(),Tf=Aa[0].toUpperCase()+Aa.slice(1);on(xf,"on"+Tf)}on(Lu,"onAnimationEnd"),on(Vu,"onAnimationIteration"),on(Nu,"onAnimationStart"),on("dblclick","onDoubleClick"),on("focusin","onFocus"),on("focusout","onBlur"),on(Ru,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),c("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),c("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),c("onBeforeInput",["compositionend","keypress","textInput","paste"]),c("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ur="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Cf=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ur));function zu(e,t,n){var a=e.type||"unknown-event";e.currentTarget=n,Im(a,t,void 0,e),e.currentTarget=null}function Bu(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var a=e[n],u=a.event;a=a.listeners;e:{var d=void 0;if(t)for(var g=a.length-1;0<=g;g--){var b=a[g],k=b.instance,M=b.currentTarget;if(b=b.listener,k!==d&&u.isPropagationStopped())break e;zu(u,b,M),d=k}else for(g=0;g<a.length;g++){if(b=a[g],k=b.instance,M=b.currentTarget,b=b.listener,k!==d&&u.isPropagationStopped())break e;zu(u,b,M),d=k}}}if(Po)throw e=sa,Po=!1,sa=null,e}function Se(e,t){var n=t[Oa];n===void 0&&(n=t[Oa]=new Set);var a=e+"__bubble";n.has(a)||($u(t,e,2,!1),n.add(a))}function _a(e,t,n){var a=0;t&&(a|=4),$u(n,e,a,t)}var Wo="_reactListening"+Math.random().toString(36).slice(2);function qr(e){if(!e[Wo]){e[Wo]=!0,s.forEach(function(n){n!=="selectionchange"&&(Cf.has(n)||_a(n,!1,e),_a(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Wo]||(t[Wo]=!0,_a("selectionchange",!1,t))}}function $u(e,t,n,a){switch(du(t)){case 1:var u=Fm;break;case 4:u=zm;break;default:u=fa}n=u.bind(null,t,n,e),u=void 0,!aa||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(u=!0),a?u!==void 0?e.addEventListener(t,n,{capture:!0,passive:u}):e.addEventListener(t,n,!0):u!==void 0?e.addEventListener(t,n,{passive:u}):e.addEventListener(t,n,!1)}function Da(e,t,n,a,u){var d=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var g=a.tag;if(g===3||g===4){var b=a.stateNode.containerInfo;if(b===u||b.nodeType===8&&b.parentNode===u)break;if(g===4)for(g=a.return;g!==null;){var k=g.tag;if((k===3||k===4)&&(k=g.stateNode.containerInfo,k===u||k.nodeType===8&&k.parentNode===u))return;g=g.return}for(;b!==null;){if(g=Tn(b),g===null)return;if(k=g.tag,k===5||k===6){a=d=g;continue e}b=b.parentNode}}a=a.return}ql(function(){var M=d,V=ra(n),N=[];e:{var j=Ou.get(e);if(j!==void 0){var G=ya,U=e;switch(e){case"keypress":if(Fo(n)===0)break e;case"keydown":case"keyup":G=tf;break;case"focusin":U="focus",G=ba;break;case"focusout":U="blur",G=ba;break;case"beforeblur":case"afterblur":G=ba;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":G=fu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":G=Gm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":G=of;break;case Lu:case Vu:case Nu:G=Um;break;case Ru:G=sf;break;case"scroll":G=Bm;break;case"wheel":G=uf;break;case"copy":case"cut":case"paste":G=Km;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":G=gu}var K=(t&4)!==0,Ve=!K&&e==="scroll",T=K?j!==null?j+"Capture":null:j;K=[];for(var I=M,C;I!==null;){C=I;var R=C.stateNode;if(C.tag===5&&R!==null&&(C=R,T!==null&&(R=Mr(I,T),R!=null&&K.push(Kr(I,R,C)))),Ve)break;I=I.return}0<K.length&&(j=new G(j,U,null,n,V),N.push({event:j,listeners:K}))}}if((t&7)===0){e:{if(j=e==="mouseover"||e==="pointerover",G=e==="mouseout"||e==="pointerout",j&&n!==na&&(U=n.relatedTarget||n.fromElement)&&(Tn(U)||U[Bt]))break e;if((G||j)&&(j=V.window===V?V:(j=V.ownerDocument)?j.defaultView||j.parentWindow:window,G?(U=n.relatedTarget||n.toElement,G=M,U=U?Tn(U):null,U!==null&&(Ve=xn(U),U!==Ve||U.tag!==5&&U.tag!==6)&&(U=null)):(G=null,U=M),G!==U)){if(K=fu,R="onMouseLeave",T="onMouseEnter",I="mouse",(e==="pointerout"||e==="pointerover")&&(K=gu,R="onPointerLeave",T="onPointerEnter",I="pointer"),Ve=G==null?j:tr(G),C=U==null?j:tr(U),j=new K(R,I+"leave",G,n,V),j.target=Ve,j.relatedTarget=C,R=null,Tn(V)===M&&(K=new K(T,I+"enter",U,n,V),K.target=C,K.relatedTarget=Ve,R=K),Ve=R,G&&U)t:{for(K=G,T=U,I=0,C=K;C;C=Zn(C))I++;for(C=0,R=T;R;R=Zn(R))C++;for(;0<I-C;)K=Zn(K),I--;for(;0<C-I;)T=Zn(T),C--;for(;I--;){if(K===T||T!==null&&K===T.alternate)break t;K=Zn(K),T=Zn(T)}K=null}else K=null;G!==null&&Gu(N,j,G,K,!1),U!==null&&Ve!==null&&Gu(N,Ve,U,K,!0)}}e:{if(j=M?tr(M):window,G=j.nodeName&&j.nodeName.toLowerCase(),G==="select"||G==="input"&&j.type==="file")var Y=gf;else if(Su(j))if(xu)Y=bf;else{Y=vf;var X=yf}else(G=j.nodeName)&&G.toLowerCase()==="input"&&(j.type==="checkbox"||j.type==="radio")&&(Y=wf);if(Y&&(Y=Y(e,M))){Iu(N,Y,n,V);break e}X&&X(e,j,M),e==="focusout"&&(X=j._wrapperState)&&X.controlled&&j.type==="number"&&Ji(j,"number",j.value)}switch(X=M?tr(M):window,e){case"focusin":(Su(X)||X.contentEditable==="true")&&(Jn=X,Ca=M,Wr=null);break;case"focusout":Wr=Ca=Jn=null;break;case"mousedown":Ea=!0;break;case"contextmenu":case"mouseup":case"dragend":Ea=!1,Du(N,n,V);break;case"selectionchange":if(If)break;case"keydown":case"keyup":Du(N,n,V)}var Z;if(Sa)e:{switch(e){case"compositionstart":var te="onCompositionStart";break e;case"compositionend":te="onCompositionEnd";break e;case"compositionupdate":te="onCompositionUpdate";break e}te=void 0}else Qn?bu(e,n)&&(te="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(te="onCompositionStart");te&&(yu&&n.locale!=="ko"&&(Qn||te!=="onCompositionStart"?te==="onCompositionEnd"&&Qn&&(Z=hu()):(rn=V,ga="value"in rn?rn.value:rn.textContent,Qn=!0)),X=Uo(M,te),0<X.length&&(te=new pu(te,e,null,n,V),N.push({event:te,listeners:X}),Z?te.data=Z:(Z=ku(n),Z!==null&&(te.data=Z)))),(Z=df?hf(e,n):mf(e,n))&&(M=Uo(M,"onBeforeInput"),0<M.length&&(V=new pu("onBeforeInput","beforeinput",null,n,V),N.push({event:V,listeners:M}),V.data=Z))}Bu(N,t)})}function Kr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Uo(e,t){for(var n=t+"Capture",a=[];e!==null;){var u=e,d=u.stateNode;u.tag===5&&d!==null&&(u=d,d=Mr(e,n),d!=null&&a.unshift(Kr(e,d,u)),d=Mr(e,t),d!=null&&a.push(Kr(e,d,u))),e=e.return}return a}function Zn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Gu(e,t,n,a,u){for(var d=t._reactName,g=[];n!==null&&n!==a;){var b=n,k=b.alternate,M=b.stateNode;if(k!==null&&k===a)break;b.tag===5&&M!==null&&(b=M,u?(k=Mr(n,d),k!=null&&g.unshift(Kr(n,k,b))):u||(k=Mr(n,d),k!=null&&g.push(Kr(n,k,b)))),n=n.return}g.length!==0&&e.push({event:t,listeners:g})}var Ef=/\r\n?/g,Pf=/\u0000|\uFFFD/g;function Hu(e){return(typeof e=="string"?e:""+e).replace(Ef,`
`).replace(Pf,"")}function qo(e,t,n){if(t=Hu(t),Hu(e)!==t&&n)throw Error(o(425))}function Ko(){}var ja=null,La=null;function Va(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Na=typeof setTimeout=="function"?setTimeout:void 0,Mf=typeof clearTimeout=="function"?clearTimeout:void 0,Wu=typeof Promise=="function"?Promise:void 0,Af=typeof queueMicrotask=="function"?queueMicrotask:typeof Wu<"u"?function(e){return Wu.resolve(null).then(e).catch(_f)}:Na;function _f(e){setTimeout(function(){throw e})}function Ra(e,t){var n=t,a=0;do{var u=n.nextSibling;if(e.removeChild(n),u&&u.nodeType===8)if(n=u.data,n==="/$"){if(a===0){e.removeChild(u),Or(t);return}a--}else n!=="$"&&n!=="$?"&&n!=="$!"||a++;n=u}while(n);Or(t)}function an(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Uu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var er=Math.random().toString(36).slice(2),Nt="__reactFiber$"+er,Yr="__reactProps$"+er,Bt="__reactContainer$"+er,Oa="__reactEvents$"+er,Df="__reactListeners$"+er,jf="__reactHandles$"+er;function Tn(e){var t=e[Nt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Bt]||n[Nt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Uu(e);e!==null;){if(n=e[Nt])return n;e=Uu(e)}return t}e=n,n=e.parentNode}return null}function Qr(e){return e=e[Nt]||e[Bt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function tr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(o(33))}function Yo(e){return e[Yr]||null}var Fa=[],nr=-1;function sn(e){return{current:e}}function Ie(e){0>nr||(e.current=Fa[nr],Fa[nr]=null,nr--)}function be(e,t){nr++,Fa[nr]=e.current,e.current=t}var ln={},Je=sn(ln),ot=sn(!1),Cn=ln;function rr(e,t){var n=e.type.contextTypes;if(!n)return ln;var a=e.stateNode;if(a&&a.__reactInternalMemoizedUnmaskedChildContext===t)return a.__reactInternalMemoizedMaskedChildContext;var u={},d;for(d in n)u[d]=t[d];return a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=u),u}function it(e){return e=e.childContextTypes,e!=null}function Qo(){Ie(ot),Ie(Je)}function qu(e,t,n){if(Je.current!==ln)throw Error(o(168));be(Je,t),be(ot,n)}function Ku(e,t,n){var a=e.stateNode;if(t=t.childContextTypes,typeof a.getChildContext!="function")return n;a=a.getChildContext();for(var u in a)if(!(u in t))throw Error(o(108,we(e)||"Unknown",u));return B({},n,a)}function Jo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||ln,Cn=Je.current,be(Je,e),be(ot,ot.current),!0}function Yu(e,t,n){var a=e.stateNode;if(!a)throw Error(o(169));n?(e=Ku(e,t,Cn),a.__reactInternalMemoizedMergedChildContext=e,Ie(ot),Ie(Je),be(Je,e)):Ie(ot),be(ot,n)}var $t=null,Xo=!1,za=!1;function Qu(e){$t===null?$t=[e]:$t.push(e)}function Lf(e){Xo=!0,Qu(e)}function un(){if(!za&&$t!==null){za=!0;var e=0,t=ge;try{var n=$t;for(ge=1;e<n.length;e++){var a=n[e];do a=a(!0);while(a!==null)}$t=null,Xo=!1}catch(u){throw $t!==null&&($t=$t.slice(e+1)),Xl(la,un),u}finally{ge=t,za=!1}}return null}var or=[],ir=0,Zo=null,ei=0,bt=[],kt=0,En=null,Gt=1,Ht="";function Pn(e,t){or[ir++]=ei,or[ir++]=Zo,Zo=e,ei=t}function Ju(e,t,n){bt[kt++]=Gt,bt[kt++]=Ht,bt[kt++]=En,En=e;var a=Gt;e=Ht;var u=32-Ct(a)-1;a&=~(1<<u),n+=1;var d=32-Ct(t)+u;if(30<d){var g=u-u%5;d=(a&(1<<g)-1).toString(32),a>>=g,u-=g,Gt=1<<32-Ct(t)+u|n<<u|a,Ht=d+e}else Gt=1<<d|n<<u|a,Ht=e}function Ba(e){e.return!==null&&(Pn(e,1),Ju(e,1,0))}function $a(e){for(;e===Zo;)Zo=or[--ir],or[ir]=null,ei=or[--ir],or[ir]=null;for(;e===En;)En=bt[--kt],bt[kt]=null,Ht=bt[--kt],bt[kt]=null,Gt=bt[--kt],bt[kt]=null}var ft=null,pt=null,Ce=!1,Pt=null;function Xu(e,t){var n=Tt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Zu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ft=e,pt=an(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ft=e,pt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=En!==null?{id:Gt,overflow:Ht}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Tt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ft=e,pt=null,!0):!1;default:return!1}}function Ga(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ha(e){if(Ce){var t=pt;if(t){var n=t;if(!Zu(e,t)){if(Ga(e))throw Error(o(418));t=an(n.nextSibling);var a=ft;t&&Zu(e,t)?Xu(a,n):(e.flags=e.flags&-4097|2,Ce=!1,ft=e)}}else{if(Ga(e))throw Error(o(418));e.flags=e.flags&-4097|2,Ce=!1,ft=e}}}function ec(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ft=e}function ti(e){if(e!==ft)return!1;if(!Ce)return ec(e),Ce=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Va(e.type,e.memoizedProps)),t&&(t=pt)){if(Ga(e))throw tc(),Error(o(418));for(;t;)Xu(e,t),t=an(t.nextSibling)}if(ec(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){pt=an(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}pt=null}}else pt=ft?an(e.stateNode.nextSibling):null;return!0}function tc(){for(var e=pt;e;)e=an(e.nextSibling)}function ar(){pt=ft=null,Ce=!1}function Wa(e){Pt===null?Pt=[e]:Pt.push(e)}var Vf=z.ReactCurrentBatchConfig;function Jr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(o(309));var a=n.stateNode}if(!a)throw Error(o(147,e));var u=a,d=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===d?t.ref:(t=function(g){var b=u.refs;g===null?delete b[d]:b[d]=g},t._stringRef=d,t)}if(typeof e!="string")throw Error(o(284));if(!n._owner)throw Error(o(290,e))}return e}function ni(e,t){throw e=Object.prototype.toString.call(t),Error(o(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function nc(e){var t=e._init;return t(e._payload)}function rc(e){function t(T,I){if(e){var C=T.deletions;C===null?(T.deletions=[I],T.flags|=16):C.push(I)}}function n(T,I){if(!e)return null;for(;I!==null;)t(T,I),I=I.sibling;return null}function a(T,I){for(T=new Map;I!==null;)I.key!==null?T.set(I.key,I):T.set(I.index,I),I=I.sibling;return T}function u(T,I){return T=yn(T,I),T.index=0,T.sibling=null,T}function d(T,I,C){return T.index=C,e?(C=T.alternate,C!==null?(C=C.index,C<I?(T.flags|=2,I):C):(T.flags|=2,I)):(T.flags|=1048576,I)}function g(T){return e&&T.alternate===null&&(T.flags|=2),T}function b(T,I,C,R){return I===null||I.tag!==6?(I=Ns(C,T.mode,R),I.return=T,I):(I=u(I,C),I.return=T,I)}function k(T,I,C,R){var Y=C.type;return Y===ee?V(T,I,C.props.children,R,C.key):I!==null&&(I.elementType===Y||typeof Y=="object"&&Y!==null&&Y.$$typeof===Oe&&nc(Y)===I.type)?(R=u(I,C.props),R.ref=Jr(T,I,C),R.return=T,R):(R=Ci(C.type,C.key,C.props,null,T.mode,R),R.ref=Jr(T,I,C),R.return=T,R)}function M(T,I,C,R){return I===null||I.tag!==4||I.stateNode.containerInfo!==C.containerInfo||I.stateNode.implementation!==C.implementation?(I=Rs(C,T.mode,R),I.return=T,I):(I=u(I,C.children||[]),I.return=T,I)}function V(T,I,C,R,Y){return I===null||I.tag!==7?(I=Nn(C,T.mode,R,Y),I.return=T,I):(I=u(I,C),I.return=T,I)}function N(T,I,C){if(typeof I=="string"&&I!==""||typeof I=="number")return I=Ns(""+I,T.mode,C),I.return=T,I;if(typeof I=="object"&&I!==null){switch(I.$$typeof){case J:return C=Ci(I.type,I.key,I.props,null,T.mode,C),C.ref=Jr(T,null,I),C.return=T,C;case H:return I=Rs(I,T.mode,C),I.return=T,I;case Oe:var R=I._init;return N(T,R(I._payload),C)}if(Cr(I)||Q(I))return I=Nn(I,T.mode,C,null),I.return=T,I;ni(T,I)}return null}function j(T,I,C,R){var Y=I!==null?I.key:null;if(typeof C=="string"&&C!==""||typeof C=="number")return Y!==null?null:b(T,I,""+C,R);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case J:return C.key===Y?k(T,I,C,R):null;case H:return C.key===Y?M(T,I,C,R):null;case Oe:return Y=C._init,j(T,I,Y(C._payload),R)}if(Cr(C)||Q(C))return Y!==null?null:V(T,I,C,R,null);ni(T,C)}return null}function G(T,I,C,R,Y){if(typeof R=="string"&&R!==""||typeof R=="number")return T=T.get(C)||null,b(I,T,""+R,Y);if(typeof R=="object"&&R!==null){switch(R.$$typeof){case J:return T=T.get(R.key===null?C:R.key)||null,k(I,T,R,Y);case H:return T=T.get(R.key===null?C:R.key)||null,M(I,T,R,Y);case Oe:var X=R._init;return G(T,I,C,X(R._payload),Y)}if(Cr(R)||Q(R))return T=T.get(C)||null,V(I,T,R,Y,null);ni(I,R)}return null}function U(T,I,C,R){for(var Y=null,X=null,Z=I,te=I=0,We=null;Z!==null&&te<C.length;te++){Z.index>te?(We=Z,Z=null):We=Z.sibling;var de=j(T,Z,C[te],R);if(de===null){Z===null&&(Z=We);break}e&&Z&&de.alternate===null&&t(T,Z),I=d(de,I,te),X===null?Y=de:X.sibling=de,X=de,Z=We}if(te===C.length)return n(T,Z),Ce&&Pn(T,te),Y;if(Z===null){for(;te<C.length;te++)Z=N(T,C[te],R),Z!==null&&(I=d(Z,I,te),X===null?Y=Z:X.sibling=Z,X=Z);return Ce&&Pn(T,te),Y}for(Z=a(T,Z);te<C.length;te++)We=G(Z,T,te,C[te],R),We!==null&&(e&&We.alternate!==null&&Z.delete(We.key===null?te:We.key),I=d(We,I,te),X===null?Y=We:X.sibling=We,X=We);return e&&Z.forEach(function(vn){return t(T,vn)}),Ce&&Pn(T,te),Y}function K(T,I,C,R){var Y=Q(C);if(typeof Y!="function")throw Error(o(150));if(C=Y.call(C),C==null)throw Error(o(151));for(var X=Y=null,Z=I,te=I=0,We=null,de=C.next();Z!==null&&!de.done;te++,de=C.next()){Z.index>te?(We=Z,Z=null):We=Z.sibling;var vn=j(T,Z,de.value,R);if(vn===null){Z===null&&(Z=We);break}e&&Z&&vn.alternate===null&&t(T,Z),I=d(vn,I,te),X===null?Y=vn:X.sibling=vn,X=vn,Z=We}if(de.done)return n(T,Z),Ce&&Pn(T,te),Y;if(Z===null){for(;!de.done;te++,de=C.next())de=N(T,de.value,R),de!==null&&(I=d(de,I,te),X===null?Y=de:X.sibling=de,X=de);return Ce&&Pn(T,te),Y}for(Z=a(T,Z);!de.done;te++,de=C.next())de=G(Z,T,te,de.value,R),de!==null&&(e&&de.alternate!==null&&Z.delete(de.key===null?te:de.key),I=d(de,I,te),X===null?Y=de:X.sibling=de,X=de);return e&&Z.forEach(function(fp){return t(T,fp)}),Ce&&Pn(T,te),Y}function Ve(T,I,C,R){if(typeof C=="object"&&C!==null&&C.type===ee&&C.key===null&&(C=C.props.children),typeof C=="object"&&C!==null){switch(C.$$typeof){case J:e:{for(var Y=C.key,X=I;X!==null;){if(X.key===Y){if(Y=C.type,Y===ee){if(X.tag===7){n(T,X.sibling),I=u(X,C.props.children),I.return=T,T=I;break e}}else if(X.elementType===Y||typeof Y=="object"&&Y!==null&&Y.$$typeof===Oe&&nc(Y)===X.type){n(T,X.sibling),I=u(X,C.props),I.ref=Jr(T,X,C),I.return=T,T=I;break e}n(T,X);break}else t(T,X);X=X.sibling}C.type===ee?(I=Nn(C.props.children,T.mode,R,C.key),I.return=T,T=I):(R=Ci(C.type,C.key,C.props,null,T.mode,R),R.ref=Jr(T,I,C),R.return=T,T=R)}return g(T);case H:e:{for(X=C.key;I!==null;){if(I.key===X)if(I.tag===4&&I.stateNode.containerInfo===C.containerInfo&&I.stateNode.implementation===C.implementation){n(T,I.sibling),I=u(I,C.children||[]),I.return=T,T=I;break e}else{n(T,I);break}else t(T,I);I=I.sibling}I=Rs(C,T.mode,R),I.return=T,T=I}return g(T);case Oe:return X=C._init,Ve(T,I,X(C._payload),R)}if(Cr(C))return U(T,I,C,R);if(Q(C))return K(T,I,C,R);ni(T,C)}return typeof C=="string"&&C!==""||typeof C=="number"?(C=""+C,I!==null&&I.tag===6?(n(T,I.sibling),I=u(I,C),I.return=T,T=I):(n(T,I),I=Ns(C,T.mode,R),I.return=T,T=I),g(T)):n(T,I)}return Ve}var sr=rc(!0),oc=rc(!1),ri=sn(null),oi=null,lr=null,Ua=null;function qa(){Ua=lr=oi=null}function Ka(e){var t=ri.current;Ie(ri),e._currentValue=t}function Ya(e,t,n){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===n)break;e=e.return}}function ur(e,t){oi=e,Ua=lr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(at=!0),e.firstContext=null)}function St(e){var t=e._currentValue;if(Ua!==e)if(e={context:e,memoizedValue:t,next:null},lr===null){if(oi===null)throw Error(o(308));lr=e,oi.dependencies={lanes:0,firstContext:e}}else lr=lr.next=e;return t}var Mn=null;function Qa(e){Mn===null?Mn=[e]:Mn.push(e)}function ic(e,t,n,a){var u=t.interleaved;return u===null?(n.next=n,Qa(t)):(n.next=u.next,u.next=n),t.interleaved=n,Wt(e,a)}function Wt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var cn=!1;function Ja(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ac(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ut(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function dn(e,t,n){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(le&2)!==0){var u=a.pending;return u===null?t.next=t:(t.next=u.next,u.next=t),a.pending=t,Wt(e,n)}return u=a.interleaved,u===null?(t.next=t,Qa(a)):(t.next=u.next,u.next=t),a.interleaved=t,Wt(e,n)}function ii(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,da(e,n)}}function sc(e,t){var n=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,n===a)){var u=null,d=null;if(n=n.firstBaseUpdate,n!==null){do{var g={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};d===null?u=d=g:d=d.next=g,n=n.next}while(n!==null);d===null?u=d=t:d=d.next=t}else u=d=t;n={baseState:a.baseState,firstBaseUpdate:u,lastBaseUpdate:d,shared:a.shared,effects:a.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ai(e,t,n,a){var u=e.updateQueue;cn=!1;var d=u.firstBaseUpdate,g=u.lastBaseUpdate,b=u.shared.pending;if(b!==null){u.shared.pending=null;var k=b,M=k.next;k.next=null,g===null?d=M:g.next=M,g=k;var V=e.alternate;V!==null&&(V=V.updateQueue,b=V.lastBaseUpdate,b!==g&&(b===null?V.firstBaseUpdate=M:b.next=M,V.lastBaseUpdate=k))}if(d!==null){var N=u.baseState;g=0,V=M=k=null,b=d;do{var j=b.lane,G=b.eventTime;if((a&j)===j){V!==null&&(V=V.next={eventTime:G,lane:0,tag:b.tag,payload:b.payload,callback:b.callback,next:null});e:{var U=e,K=b;switch(j=t,G=n,K.tag){case 1:if(U=K.payload,typeof U=="function"){N=U.call(G,N,j);break e}N=U;break e;case 3:U.flags=U.flags&-65537|128;case 0:if(U=K.payload,j=typeof U=="function"?U.call(G,N,j):U,j==null)break e;N=B({},N,j);break e;case 2:cn=!0}}b.callback!==null&&b.lane!==0&&(e.flags|=64,j=u.effects,j===null?u.effects=[b]:j.push(b))}else G={eventTime:G,lane:j,tag:b.tag,payload:b.payload,callback:b.callback,next:null},V===null?(M=V=G,k=N):V=V.next=G,g|=j;if(b=b.next,b===null){if(b=u.shared.pending,b===null)break;j=b,b=j.next,j.next=null,u.lastBaseUpdate=j,u.shared.pending=null}}while(!0);if(V===null&&(k=N),u.baseState=k,u.firstBaseUpdate=M,u.lastBaseUpdate=V,t=u.shared.interleaved,t!==null){u=t;do g|=u.lane,u=u.next;while(u!==t)}else d===null&&(u.shared.lanes=0);Dn|=g,e.lanes=g,e.memoizedState=N}}function lc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var a=e[t],u=a.callback;if(u!==null){if(a.callback=null,a=n,typeof u!="function")throw Error(o(191,u));u.call(a)}}}var Xr={},Rt=sn(Xr),Zr=sn(Xr),eo=sn(Xr);function An(e){if(e===Xr)throw Error(o(174));return e}function Xa(e,t){switch(be(eo,t),be(Zr,e),be(Rt,Xr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Zi(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Zi(t,e)}Ie(Rt),be(Rt,t)}function cr(){Ie(Rt),Ie(Zr),Ie(eo)}function uc(e){An(eo.current);var t=An(Rt.current),n=Zi(t,e.type);t!==n&&(be(Zr,e),be(Rt,n))}function Za(e){Zr.current===e&&(Ie(Rt),Ie(Zr))}var Me=sn(0);function si(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var es=[];function ts(){for(var e=0;e<es.length;e++)es[e]._workInProgressVersionPrimary=null;es.length=0}var li=z.ReactCurrentDispatcher,ns=z.ReactCurrentBatchConfig,_n=0,Ae=null,Fe=null,Ge=null,ui=!1,to=!1,no=0,Nf=0;function Xe(){throw Error(o(321))}function rs(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Et(e[n],t[n]))return!1;return!0}function os(e,t,n,a,u,d){if(_n=d,Ae=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,li.current=e===null||e.memoizedState===null?zf:Bf,e=n(a,u),to){d=0;do{if(to=!1,no=0,25<=d)throw Error(o(301));d+=1,Ge=Fe=null,t.updateQueue=null,li.current=$f,e=n(a,u)}while(to)}if(li.current=hi,t=Fe!==null&&Fe.next!==null,_n=0,Ge=Fe=Ae=null,ui=!1,t)throw Error(o(300));return e}function is(){var e=no!==0;return no=0,e}function Ot(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ge===null?Ae.memoizedState=Ge=e:Ge=Ge.next=e,Ge}function It(){if(Fe===null){var e=Ae.alternate;e=e!==null?e.memoizedState:null}else e=Fe.next;var t=Ge===null?Ae.memoizedState:Ge.next;if(t!==null)Ge=t,Fe=e;else{if(e===null)throw Error(o(310));Fe=e,e={memoizedState:Fe.memoizedState,baseState:Fe.baseState,baseQueue:Fe.baseQueue,queue:Fe.queue,next:null},Ge===null?Ae.memoizedState=Ge=e:Ge=Ge.next=e}return Ge}function ro(e,t){return typeof t=="function"?t(e):t}function as(e){var t=It(),n=t.queue;if(n===null)throw Error(o(311));n.lastRenderedReducer=e;var a=Fe,u=a.baseQueue,d=n.pending;if(d!==null){if(u!==null){var g=u.next;u.next=d.next,d.next=g}a.baseQueue=u=d,n.pending=null}if(u!==null){d=u.next,a=a.baseState;var b=g=null,k=null,M=d;do{var V=M.lane;if((_n&V)===V)k!==null&&(k=k.next={lane:0,action:M.action,hasEagerState:M.hasEagerState,eagerState:M.eagerState,next:null}),a=M.hasEagerState?M.eagerState:e(a,M.action);else{var N={lane:V,action:M.action,hasEagerState:M.hasEagerState,eagerState:M.eagerState,next:null};k===null?(b=k=N,g=a):k=k.next=N,Ae.lanes|=V,Dn|=V}M=M.next}while(M!==null&&M!==d);k===null?g=a:k.next=b,Et(a,t.memoizedState)||(at=!0),t.memoizedState=a,t.baseState=g,t.baseQueue=k,n.lastRenderedState=a}if(e=n.interleaved,e!==null){u=e;do d=u.lane,Ae.lanes|=d,Dn|=d,u=u.next;while(u!==e)}else u===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ss(e){var t=It(),n=t.queue;if(n===null)throw Error(o(311));n.lastRenderedReducer=e;var a=n.dispatch,u=n.pending,d=t.memoizedState;if(u!==null){n.pending=null;var g=u=u.next;do d=e(d,g.action),g=g.next;while(g!==u);Et(d,t.memoizedState)||(at=!0),t.memoizedState=d,t.baseQueue===null&&(t.baseState=d),n.lastRenderedState=d}return[d,a]}function cc(){}function dc(e,t){var n=Ae,a=It(),u=t(),d=!Et(a.memoizedState,u);if(d&&(a.memoizedState=u,at=!0),a=a.queue,ls(fc.bind(null,n,a,e),[e]),a.getSnapshot!==t||d||Ge!==null&&Ge.memoizedState.tag&1){if(n.flags|=2048,oo(9,mc.bind(null,n,a,u,t),void 0,null),He===null)throw Error(o(349));(_n&30)!==0||hc(n,t,u)}return u}function hc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Ae.updateQueue,t===null?(t={lastEffect:null,stores:null},Ae.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function mc(e,t,n,a){t.value=n,t.getSnapshot=a,pc(t)&&gc(e)}function fc(e,t,n){return n(function(){pc(t)&&gc(e)})}function pc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Et(e,n)}catch{return!0}}function gc(e){var t=Wt(e,1);t!==null&&Dt(t,e,1,-1)}function yc(e){var t=Ot();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ro,lastRenderedState:e},t.queue=e,e=e.dispatch=Ff.bind(null,Ae,e),[t.memoizedState,e]}function oo(e,t,n,a){return e={tag:e,create:t,destroy:n,deps:a,next:null},t=Ae.updateQueue,t===null?(t={lastEffect:null,stores:null},Ae.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(a=n.next,n.next=e,e.next=a,t.lastEffect=e)),e}function vc(){return It().memoizedState}function ci(e,t,n,a){var u=Ot();Ae.flags|=e,u.memoizedState=oo(1|t,n,void 0,a===void 0?null:a)}function di(e,t,n,a){var u=It();a=a===void 0?null:a;var d=void 0;if(Fe!==null){var g=Fe.memoizedState;if(d=g.destroy,a!==null&&rs(a,g.deps)){u.memoizedState=oo(t,n,d,a);return}}Ae.flags|=e,u.memoizedState=oo(1|t,n,d,a)}function wc(e,t){return ci(8390656,8,e,t)}function ls(e,t){return di(2048,8,e,t)}function bc(e,t){return di(4,2,e,t)}function kc(e,t){return di(4,4,e,t)}function Sc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ic(e,t,n){return n=n!=null?n.concat([e]):null,di(4,4,Sc.bind(null,t,e),n)}function us(){}function xc(e,t){var n=It();t=t===void 0?null:t;var a=n.memoizedState;return a!==null&&t!==null&&rs(t,a[1])?a[0]:(n.memoizedState=[e,t],e)}function Tc(e,t){var n=It();t=t===void 0?null:t;var a=n.memoizedState;return a!==null&&t!==null&&rs(t,a[1])?a[0]:(e=e(),n.memoizedState=[e,t],e)}function Cc(e,t,n){return(_n&21)===0?(e.baseState&&(e.baseState=!1,at=!0),e.memoizedState=n):(Et(n,t)||(n=nu(),Ae.lanes|=n,Dn|=n,e.baseState=!0),t)}function Rf(e,t){var n=ge;ge=n!==0&&4>n?n:4,e(!0);var a=ns.transition;ns.transition={};try{e(!1),t()}finally{ge=n,ns.transition=a}}function Ec(){return It().memoizedState}function Of(e,t,n){var a=pn(e);if(n={lane:a,action:n,hasEagerState:!1,eagerState:null,next:null},Pc(e))Mc(t,n);else if(n=ic(e,t,n,a),n!==null){var u=nt();Dt(n,e,a,u),Ac(n,t,a)}}function Ff(e,t,n){var a=pn(e),u={lane:a,action:n,hasEagerState:!1,eagerState:null,next:null};if(Pc(e))Mc(t,u);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=t.lastRenderedReducer,d!==null))try{var g=t.lastRenderedState,b=d(g,n);if(u.hasEagerState=!0,u.eagerState=b,Et(b,g)){var k=t.interleaved;k===null?(u.next=u,Qa(t)):(u.next=k.next,k.next=u),t.interleaved=u;return}}catch{}n=ic(e,t,u,a),n!==null&&(u=nt(),Dt(n,e,a,u),Ac(n,t,a))}}function Pc(e){var t=e.alternate;return e===Ae||t!==null&&t===Ae}function Mc(e,t){to=ui=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ac(e,t,n){if((n&4194240)!==0){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,da(e,n)}}var hi={readContext:St,useCallback:Xe,useContext:Xe,useEffect:Xe,useImperativeHandle:Xe,useInsertionEffect:Xe,useLayoutEffect:Xe,useMemo:Xe,useReducer:Xe,useRef:Xe,useState:Xe,useDebugValue:Xe,useDeferredValue:Xe,useTransition:Xe,useMutableSource:Xe,useSyncExternalStore:Xe,useId:Xe,unstable_isNewReconciler:!1},zf={readContext:St,useCallback:function(e,t){return Ot().memoizedState=[e,t===void 0?null:t],e},useContext:St,useEffect:wc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ci(4194308,4,Sc.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ci(4194308,4,e,t)},useInsertionEffect:function(e,t){return ci(4,2,e,t)},useMemo:function(e,t){var n=Ot();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var a=Ot();return t=n!==void 0?n(t):t,a.memoizedState=a.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},a.queue=e,e=e.dispatch=Of.bind(null,Ae,e),[a.memoizedState,e]},useRef:function(e){var t=Ot();return e={current:e},t.memoizedState=e},useState:yc,useDebugValue:us,useDeferredValue:function(e){return Ot().memoizedState=e},useTransition:function(){var e=yc(!1),t=e[0];return e=Rf.bind(null,e[1]),Ot().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var a=Ae,u=Ot();if(Ce){if(n===void 0)throw Error(o(407));n=n()}else{if(n=t(),He===null)throw Error(o(349));(_n&30)!==0||hc(a,t,n)}u.memoizedState=n;var d={value:n,getSnapshot:t};return u.queue=d,wc(fc.bind(null,a,d,e),[e]),a.flags|=2048,oo(9,mc.bind(null,a,d,n,t),void 0,null),n},useId:function(){var e=Ot(),t=He.identifierPrefix;if(Ce){var n=Ht,a=Gt;n=(a&~(1<<32-Ct(a)-1)).toString(32)+n,t=":"+t+"R"+n,n=no++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Nf++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Bf={readContext:St,useCallback:xc,useContext:St,useEffect:ls,useImperativeHandle:Ic,useInsertionEffect:bc,useLayoutEffect:kc,useMemo:Tc,useReducer:as,useRef:vc,useState:function(){return as(ro)},useDebugValue:us,useDeferredValue:function(e){var t=It();return Cc(t,Fe.memoizedState,e)},useTransition:function(){var e=as(ro)[0],t=It().memoizedState;return[e,t]},useMutableSource:cc,useSyncExternalStore:dc,useId:Ec,unstable_isNewReconciler:!1},$f={readContext:St,useCallback:xc,useContext:St,useEffect:ls,useImperativeHandle:Ic,useInsertionEffect:bc,useLayoutEffect:kc,useMemo:Tc,useReducer:ss,useRef:vc,useState:function(){return ss(ro)},useDebugValue:us,useDeferredValue:function(e){var t=It();return Fe===null?t.memoizedState=e:Cc(t,Fe.memoizedState,e)},useTransition:function(){var e=ss(ro)[0],t=It().memoizedState;return[e,t]},useMutableSource:cc,useSyncExternalStore:dc,useId:Ec,unstable_isNewReconciler:!1};function Mt(e,t){if(e&&e.defaultProps){t=B({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function cs(e,t,n,a){t=e.memoizedState,n=n(a,t),n=n==null?t:B({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var mi={isMounted:function(e){return(e=e._reactInternals)?xn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var a=nt(),u=pn(e),d=Ut(a,u);d.payload=t,n!=null&&(d.callback=n),t=dn(e,d,u),t!==null&&(Dt(t,e,u,a),ii(t,e,u))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var a=nt(),u=pn(e),d=Ut(a,u);d.tag=1,d.payload=t,n!=null&&(d.callback=n),t=dn(e,d,u),t!==null&&(Dt(t,e,u,a),ii(t,e,u))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=nt(),a=pn(e),u=Ut(n,a);u.tag=2,t!=null&&(u.callback=t),t=dn(e,u,a),t!==null&&(Dt(t,e,a,n),ii(t,e,a))}};function _c(e,t,n,a,u,d,g){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,d,g):t.prototype&&t.prototype.isPureReactComponent?!Hr(n,a)||!Hr(u,d):!0}function Dc(e,t,n){var a=!1,u=ln,d=t.contextType;return typeof d=="object"&&d!==null?d=St(d):(u=it(t)?Cn:Je.current,a=t.contextTypes,d=(a=a!=null)?rr(e,u):ln),t=new t(n,d),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=mi,e.stateNode=t,t._reactInternals=e,a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=u,e.__reactInternalMemoizedMaskedChildContext=d),t}function jc(e,t,n,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,a),t.state!==e&&mi.enqueueReplaceState(t,t.state,null)}function ds(e,t,n,a){var u=e.stateNode;u.props=n,u.state=e.memoizedState,u.refs={},Ja(e);var d=t.contextType;typeof d=="object"&&d!==null?u.context=St(d):(d=it(t)?Cn:Je.current,u.context=rr(e,d)),u.state=e.memoizedState,d=t.getDerivedStateFromProps,typeof d=="function"&&(cs(e,t,d,n),u.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(t=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),t!==u.state&&mi.enqueueReplaceState(u,u.state,null),ai(e,n,u,a),u.state=e.memoizedState),typeof u.componentDidMount=="function"&&(e.flags|=4194308)}function dr(e,t){try{var n="",a=t;do n+=ue(a),a=a.return;while(a);var u=n}catch(d){u=`
Error generating stack: `+d.message+`
`+d.stack}return{value:e,source:t,stack:u,digest:null}}function hs(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ms(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Gf=typeof WeakMap=="function"?WeakMap:Map;function Lc(e,t,n){n=Ut(-1,n),n.tag=3,n.payload={element:null};var a=t.value;return n.callback=function(){bi||(bi=!0,Ps=a),ms(e,t)},n}function Vc(e,t,n){n=Ut(-1,n),n.tag=3;var a=e.type.getDerivedStateFromError;if(typeof a=="function"){var u=t.value;n.payload=function(){return a(u)},n.callback=function(){ms(e,t)}}var d=e.stateNode;return d!==null&&typeof d.componentDidCatch=="function"&&(n.callback=function(){ms(e,t),typeof a!="function"&&(mn===null?mn=new Set([this]):mn.add(this));var g=t.stack;this.componentDidCatch(t.value,{componentStack:g!==null?g:""})}),n}function Nc(e,t,n){var a=e.pingCache;if(a===null){a=e.pingCache=new Gf;var u=new Set;a.set(t,u)}else u=a.get(t),u===void 0&&(u=new Set,a.set(t,u));u.has(n)||(u.add(n),e=rp.bind(null,e,t,n),t.then(e,e))}function Rc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Oc(e,t,n,a,u){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ut(-1,1),t.tag=2,dn(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=u,e)}var Hf=z.ReactCurrentOwner,at=!1;function tt(e,t,n,a){t.child=e===null?oc(t,null,n,a):sr(t,e.child,n,a)}function Fc(e,t,n,a,u){n=n.render;var d=t.ref;return ur(t,u),a=os(e,t,n,a,d,u),n=is(),e!==null&&!at?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~u,qt(e,t,u)):(Ce&&n&&Ba(t),t.flags|=1,tt(e,t,a,u),t.child)}function zc(e,t,n,a,u){if(e===null){var d=n.type;return typeof d=="function"&&!Vs(d)&&d.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=d,Bc(e,t,d,a,u)):(e=Ci(n.type,null,a,t,t.mode,u),e.ref=t.ref,e.return=t,t.child=e)}if(d=e.child,(e.lanes&u)===0){var g=d.memoizedProps;if(n=n.compare,n=n!==null?n:Hr,n(g,a)&&e.ref===t.ref)return qt(e,t,u)}return t.flags|=1,e=yn(d,a),e.ref=t.ref,e.return=t,t.child=e}function Bc(e,t,n,a,u){if(e!==null){var d=e.memoizedProps;if(Hr(d,a)&&e.ref===t.ref)if(at=!1,t.pendingProps=a=d,(e.lanes&u)!==0)(e.flags&131072)!==0&&(at=!0);else return t.lanes=e.lanes,qt(e,t,u)}return fs(e,t,n,a,u)}function $c(e,t,n){var a=t.pendingProps,u=a.children,d=e!==null?e.memoizedState:null;if(a.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},be(mr,gt),gt|=n;else{if((n&1073741824)===0)return e=d!==null?d.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,be(mr,gt),gt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},a=d!==null?d.baseLanes:n,be(mr,gt),gt|=a}else d!==null?(a=d.baseLanes|n,t.memoizedState=null):a=n,be(mr,gt),gt|=a;return tt(e,t,u,n),t.child}function Gc(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function fs(e,t,n,a,u){var d=it(n)?Cn:Je.current;return d=rr(t,d),ur(t,u),n=os(e,t,n,a,d,u),a=is(),e!==null&&!at?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~u,qt(e,t,u)):(Ce&&a&&Ba(t),t.flags|=1,tt(e,t,n,u),t.child)}function Hc(e,t,n,a,u){if(it(n)){var d=!0;Jo(t)}else d=!1;if(ur(t,u),t.stateNode===null)pi(e,t),Dc(t,n,a),ds(t,n,a,u),a=!0;else if(e===null){var g=t.stateNode,b=t.memoizedProps;g.props=b;var k=g.context,M=n.contextType;typeof M=="object"&&M!==null?M=St(M):(M=it(n)?Cn:Je.current,M=rr(t,M));var V=n.getDerivedStateFromProps,N=typeof V=="function"||typeof g.getSnapshotBeforeUpdate=="function";N||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(b!==a||k!==M)&&jc(t,g,a,M),cn=!1;var j=t.memoizedState;g.state=j,ai(t,a,g,u),k=t.memoizedState,b!==a||j!==k||ot.current||cn?(typeof V=="function"&&(cs(t,n,V,a),k=t.memoizedState),(b=cn||_c(t,n,b,a,j,k,M))?(N||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount()),typeof g.componentDidMount=="function"&&(t.flags|=4194308)):(typeof g.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=k),g.props=a,g.state=k,g.context=M,a=b):(typeof g.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{g=t.stateNode,ac(e,t),b=t.memoizedProps,M=t.type===t.elementType?b:Mt(t.type,b),g.props=M,N=t.pendingProps,j=g.context,k=n.contextType,typeof k=="object"&&k!==null?k=St(k):(k=it(n)?Cn:Je.current,k=rr(t,k));var G=n.getDerivedStateFromProps;(V=typeof G=="function"||typeof g.getSnapshotBeforeUpdate=="function")||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(b!==N||j!==k)&&jc(t,g,a,k),cn=!1,j=t.memoizedState,g.state=j,ai(t,a,g,u);var U=t.memoizedState;b!==N||j!==U||ot.current||cn?(typeof G=="function"&&(cs(t,n,G,a),U=t.memoizedState),(M=cn||_c(t,n,M,a,j,U,k)||!1)?(V||typeof g.UNSAFE_componentWillUpdate!="function"&&typeof g.componentWillUpdate!="function"||(typeof g.componentWillUpdate=="function"&&g.componentWillUpdate(a,U,k),typeof g.UNSAFE_componentWillUpdate=="function"&&g.UNSAFE_componentWillUpdate(a,U,k)),typeof g.componentDidUpdate=="function"&&(t.flags|=4),typeof g.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof g.componentDidUpdate!="function"||b===e.memoizedProps&&j===e.memoizedState||(t.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||b===e.memoizedProps&&j===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=U),g.props=a,g.state=U,g.context=k,a=M):(typeof g.componentDidUpdate!="function"||b===e.memoizedProps&&j===e.memoizedState||(t.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||b===e.memoizedProps&&j===e.memoizedState||(t.flags|=1024),a=!1)}return ps(e,t,n,a,d,u)}function ps(e,t,n,a,u,d){Gc(e,t);var g=(t.flags&128)!==0;if(!a&&!g)return u&&Yu(t,n,!1),qt(e,t,d);a=t.stateNode,Hf.current=t;var b=g&&typeof n.getDerivedStateFromError!="function"?null:a.render();return t.flags|=1,e!==null&&g?(t.child=sr(t,e.child,null,d),t.child=sr(t,null,b,d)):tt(e,t,b,d),t.memoizedState=a.state,u&&Yu(t,n,!0),t.child}function Wc(e){var t=e.stateNode;t.pendingContext?qu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&qu(e,t.context,!1),Xa(e,t.containerInfo)}function Uc(e,t,n,a,u){return ar(),Wa(u),t.flags|=256,tt(e,t,n,a),t.child}var gs={dehydrated:null,treeContext:null,retryLane:0};function ys(e){return{baseLanes:e,cachePool:null,transitions:null}}function qc(e,t,n){var a=t.pendingProps,u=Me.current,d=!1,g=(t.flags&128)!==0,b;if((b=g)||(b=e!==null&&e.memoizedState===null?!1:(u&2)!==0),b?(d=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(u|=1),be(Me,u&1),e===null)return Ha(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(g=a.children,e=a.fallback,d?(a=t.mode,d=t.child,g={mode:"hidden",children:g},(a&1)===0&&d!==null?(d.childLanes=0,d.pendingProps=g):d=Ei(g,a,0,null),e=Nn(e,a,n,null),d.return=t,e.return=t,d.sibling=e,t.child=d,t.child.memoizedState=ys(n),t.memoizedState=gs,e):vs(t,g));if(u=e.memoizedState,u!==null&&(b=u.dehydrated,b!==null))return Wf(e,t,g,a,b,u,n);if(d){d=a.fallback,g=t.mode,u=e.child,b=u.sibling;var k={mode:"hidden",children:a.children};return(g&1)===0&&t.child!==u?(a=t.child,a.childLanes=0,a.pendingProps=k,t.deletions=null):(a=yn(u,k),a.subtreeFlags=u.subtreeFlags&14680064),b!==null?d=yn(b,d):(d=Nn(d,g,n,null),d.flags|=2),d.return=t,a.return=t,a.sibling=d,t.child=a,a=d,d=t.child,g=e.child.memoizedState,g=g===null?ys(n):{baseLanes:g.baseLanes|n,cachePool:null,transitions:g.transitions},d.memoizedState=g,d.childLanes=e.childLanes&~n,t.memoizedState=gs,a}return d=e.child,e=d.sibling,a=yn(d,{mode:"visible",children:a.children}),(t.mode&1)===0&&(a.lanes=n),a.return=t,a.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=a,t.memoizedState=null,a}function vs(e,t){return t=Ei({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function fi(e,t,n,a){return a!==null&&Wa(a),sr(t,e.child,null,n),e=vs(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Wf(e,t,n,a,u,d,g){if(n)return t.flags&256?(t.flags&=-257,a=hs(Error(o(422))),fi(e,t,g,a)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(d=a.fallback,u=t.mode,a=Ei({mode:"visible",children:a.children},u,0,null),d=Nn(d,u,g,null),d.flags|=2,a.return=t,d.return=t,a.sibling=d,t.child=a,(t.mode&1)!==0&&sr(t,e.child,null,g),t.child.memoizedState=ys(g),t.memoizedState=gs,d);if((t.mode&1)===0)return fi(e,t,g,null);if(u.data==="$!"){if(a=u.nextSibling&&u.nextSibling.dataset,a)var b=a.dgst;return a=b,d=Error(o(419)),a=hs(d,a,void 0),fi(e,t,g,a)}if(b=(g&e.childLanes)!==0,at||b){if(a=He,a!==null){switch(g&-g){case 4:u=2;break;case 16:u=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:u=32;break;case 536870912:u=268435456;break;default:u=0}u=(u&(a.suspendedLanes|g))!==0?0:u,u!==0&&u!==d.retryLane&&(d.retryLane=u,Wt(e,u),Dt(a,e,u,-1))}return Ls(),a=hs(Error(o(421))),fi(e,t,g,a)}return u.data==="$?"?(t.flags|=128,t.child=e.child,t=op.bind(null,e),u._reactRetry=t,null):(e=d.treeContext,pt=an(u.nextSibling),ft=t,Ce=!0,Pt=null,e!==null&&(bt[kt++]=Gt,bt[kt++]=Ht,bt[kt++]=En,Gt=e.id,Ht=e.overflow,En=t),t=vs(t,a.children),t.flags|=4096,t)}function Kc(e,t,n){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),Ya(e.return,t,n)}function ws(e,t,n,a,u){var d=e.memoizedState;d===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:n,tailMode:u}:(d.isBackwards=t,d.rendering=null,d.renderingStartTime=0,d.last=a,d.tail=n,d.tailMode=u)}function Yc(e,t,n){var a=t.pendingProps,u=a.revealOrder,d=a.tail;if(tt(e,t,a.children,n),a=Me.current,(a&2)!==0)a=a&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Kc(e,n,t);else if(e.tag===19)Kc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}a&=1}if(be(Me,a),(t.mode&1)===0)t.memoizedState=null;else switch(u){case"forwards":for(n=t.child,u=null;n!==null;)e=n.alternate,e!==null&&si(e)===null&&(u=n),n=n.sibling;n=u,n===null?(u=t.child,t.child=null):(u=n.sibling,n.sibling=null),ws(t,!1,u,n,d);break;case"backwards":for(n=null,u=t.child,t.child=null;u!==null;){if(e=u.alternate,e!==null&&si(e)===null){t.child=u;break}e=u.sibling,u.sibling=n,n=u,u=e}ws(t,!0,n,null,d);break;case"together":ws(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function pi(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function qt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Dn|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(o(153));if(t.child!==null){for(e=t.child,n=yn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=yn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Uf(e,t,n){switch(t.tag){case 3:Wc(t),ar();break;case 5:uc(t);break;case 1:it(t.type)&&Jo(t);break;case 4:Xa(t,t.stateNode.containerInfo);break;case 10:var a=t.type._context,u=t.memoizedProps.value;be(ri,a._currentValue),a._currentValue=u;break;case 13:if(a=t.memoizedState,a!==null)return a.dehydrated!==null?(be(Me,Me.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?qc(e,t,n):(be(Me,Me.current&1),e=qt(e,t,n),e!==null?e.sibling:null);be(Me,Me.current&1);break;case 19:if(a=(n&t.childLanes)!==0,(e.flags&128)!==0){if(a)return Yc(e,t,n);t.flags|=128}if(u=t.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),be(Me,Me.current),a)break;return null;case 22:case 23:return t.lanes=0,$c(e,t,n)}return qt(e,t,n)}var Qc,bs,Jc,Xc;Qc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},bs=function(){},Jc=function(e,t,n,a){var u=e.memoizedProps;if(u!==a){e=t.stateNode,An(Rt.current);var d=null;switch(n){case"input":u=Yi(e,u),a=Yi(e,a),d=[];break;case"select":u=B({},u,{value:void 0}),a=B({},a,{value:void 0}),d=[];break;case"textarea":u=Xi(e,u),a=Xi(e,a),d=[];break;default:typeof u.onClick!="function"&&typeof a.onClick=="function"&&(e.onclick=Ko)}ea(n,a);var g;n=null;for(M in u)if(!a.hasOwnProperty(M)&&u.hasOwnProperty(M)&&u[M]!=null)if(M==="style"){var b=u[M];for(g in b)b.hasOwnProperty(g)&&(n||(n={}),n[g]="")}else M!=="dangerouslySetInnerHTML"&&M!=="children"&&M!=="suppressContentEditableWarning"&&M!=="suppressHydrationWarning"&&M!=="autoFocus"&&(l.hasOwnProperty(M)?d||(d=[]):(d=d||[]).push(M,null));for(M in a){var k=a[M];if(b=u?.[M],a.hasOwnProperty(M)&&k!==b&&(k!=null||b!=null))if(M==="style")if(b){for(g in b)!b.hasOwnProperty(g)||k&&k.hasOwnProperty(g)||(n||(n={}),n[g]="");for(g in k)k.hasOwnProperty(g)&&b[g]!==k[g]&&(n||(n={}),n[g]=k[g])}else n||(d||(d=[]),d.push(M,n)),n=k;else M==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,b=b?b.__html:void 0,k!=null&&b!==k&&(d=d||[]).push(M,k)):M==="children"?typeof k!="string"&&typeof k!="number"||(d=d||[]).push(M,""+k):M!=="suppressContentEditableWarning"&&M!=="suppressHydrationWarning"&&(l.hasOwnProperty(M)?(k!=null&&M==="onScroll"&&Se("scroll",e),d||b===k||(d=[])):(d=d||[]).push(M,k))}n&&(d=d||[]).push("style",n);var M=d;(t.updateQueue=M)&&(t.flags|=4)}},Xc=function(e,t,n,a){n!==a&&(t.flags|=4)};function io(e,t){if(!Ce)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function Ze(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,a=0;if(t)for(var u=e.child;u!==null;)n|=u.lanes|u.childLanes,a|=u.subtreeFlags&14680064,a|=u.flags&14680064,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)n|=u.lanes|u.childLanes,a|=u.subtreeFlags,a|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=a,e.childLanes=n,t}function qf(e,t,n){var a=t.pendingProps;switch($a(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ze(t),null;case 1:return it(t.type)&&Qo(),Ze(t),null;case 3:return a=t.stateNode,cr(),Ie(ot),Ie(Je),ts(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(ti(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Pt!==null&&(_s(Pt),Pt=null))),bs(e,t),Ze(t),null;case 5:Za(t);var u=An(eo.current);if(n=t.type,e!==null&&t.stateNode!=null)Jc(e,t,n,a,u),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!a){if(t.stateNode===null)throw Error(o(166));return Ze(t),null}if(e=An(Rt.current),ti(t)){a=t.stateNode,n=t.type;var d=t.memoizedProps;switch(a[Nt]=t,a[Yr]=d,e=(t.mode&1)!==0,n){case"dialog":Se("cancel",a),Se("close",a);break;case"iframe":case"object":case"embed":Se("load",a);break;case"video":case"audio":for(u=0;u<Ur.length;u++)Se(Ur[u],a);break;case"source":Se("error",a);break;case"img":case"image":case"link":Se("error",a),Se("load",a);break;case"details":Se("toggle",a);break;case"input":Dl(a,d),Se("invalid",a);break;case"select":a._wrapperState={wasMultiple:!!d.multiple},Se("invalid",a);break;case"textarea":Vl(a,d),Se("invalid",a)}ea(n,d),u=null;for(var g in d)if(d.hasOwnProperty(g)){var b=d[g];g==="children"?typeof b=="string"?a.textContent!==b&&(d.suppressHydrationWarning!==!0&&qo(a.textContent,b,e),u=["children",b]):typeof b=="number"&&a.textContent!==""+b&&(d.suppressHydrationWarning!==!0&&qo(a.textContent,b,e),u=["children",""+b]):l.hasOwnProperty(g)&&b!=null&&g==="onScroll"&&Se("scroll",a)}switch(n){case"input":xo(a),Ll(a,d,!0);break;case"textarea":xo(a),Rl(a);break;case"select":case"option":break;default:typeof d.onClick=="function"&&(a.onclick=Ko)}a=u,t.updateQueue=a,a!==null&&(t.flags|=4)}else{g=u.nodeType===9?u:u.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Ol(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=g.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof a.is=="string"?e=g.createElement(n,{is:a.is}):(e=g.createElement(n),n==="select"&&(g=e,a.multiple?g.multiple=!0:a.size&&(g.size=a.size))):e=g.createElementNS(e,n),e[Nt]=t,e[Yr]=a,Qc(e,t,!1,!1),t.stateNode=e;e:{switch(g=ta(n,a),n){case"dialog":Se("cancel",e),Se("close",e),u=a;break;case"iframe":case"object":case"embed":Se("load",e),u=a;break;case"video":case"audio":for(u=0;u<Ur.length;u++)Se(Ur[u],e);u=a;break;case"source":Se("error",e),u=a;break;case"img":case"image":case"link":Se("error",e),Se("load",e),u=a;break;case"details":Se("toggle",e),u=a;break;case"input":Dl(e,a),u=Yi(e,a),Se("invalid",e);break;case"option":u=a;break;case"select":e._wrapperState={wasMultiple:!!a.multiple},u=B({},a,{value:void 0}),Se("invalid",e);break;case"textarea":Vl(e,a),u=Xi(e,a),Se("invalid",e);break;default:u=a}ea(n,u),b=u;for(d in b)if(b.hasOwnProperty(d)){var k=b[d];d==="style"?Bl(e,k):d==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,k!=null&&Fl(e,k)):d==="children"?typeof k=="string"?(n!=="textarea"||k!=="")&&Er(e,k):typeof k=="number"&&Er(e,""+k):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(l.hasOwnProperty(d)?k!=null&&d==="onScroll"&&Se("scroll",e):k!=null&&q(e,d,k,g))}switch(n){case"input":xo(e),Ll(e,a,!1);break;case"textarea":xo(e),Rl(e);break;case"option":a.value!=null&&e.setAttribute("value",""+pe(a.value));break;case"select":e.multiple=!!a.multiple,d=a.value,d!=null?Wn(e,!!a.multiple,d,!1):a.defaultValue!=null&&Wn(e,!!a.multiple,a.defaultValue,!0);break;default:typeof u.onClick=="function"&&(e.onclick=Ko)}switch(n){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}}a&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ze(t),null;case 6:if(e&&t.stateNode!=null)Xc(e,t,e.memoizedProps,a);else{if(typeof a!="string"&&t.stateNode===null)throw Error(o(166));if(n=An(eo.current),An(Rt.current),ti(t)){if(a=t.stateNode,n=t.memoizedProps,a[Nt]=t,(d=a.nodeValue!==n)&&(e=ft,e!==null))switch(e.tag){case 3:qo(a.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&qo(a.nodeValue,n,(e.mode&1)!==0)}d&&(t.flags|=4)}else a=(n.nodeType===9?n:n.ownerDocument).createTextNode(a),a[Nt]=t,t.stateNode=a}return Ze(t),null;case 13:if(Ie(Me),a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ce&&pt!==null&&(t.mode&1)!==0&&(t.flags&128)===0)tc(),ar(),t.flags|=98560,d=!1;else if(d=ti(t),a!==null&&a.dehydrated!==null){if(e===null){if(!d)throw Error(o(318));if(d=t.memoizedState,d=d!==null?d.dehydrated:null,!d)throw Error(o(317));d[Nt]=t}else ar(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ze(t),d=!1}else Pt!==null&&(_s(Pt),Pt=null),d=!0;if(!d)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(a=a!==null,a!==(e!==null&&e.memoizedState!==null)&&a&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(Me.current&1)!==0?ze===0&&(ze=3):Ls())),t.updateQueue!==null&&(t.flags|=4),Ze(t),null);case 4:return cr(),bs(e,t),e===null&&qr(t.stateNode.containerInfo),Ze(t),null;case 10:return Ka(t.type._context),Ze(t),null;case 17:return it(t.type)&&Qo(),Ze(t),null;case 19:if(Ie(Me),d=t.memoizedState,d===null)return Ze(t),null;if(a=(t.flags&128)!==0,g=d.rendering,g===null)if(a)io(d,!1);else{if(ze!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(g=si(e),g!==null){for(t.flags|=128,io(d,!1),a=g.updateQueue,a!==null&&(t.updateQueue=a,t.flags|=4),t.subtreeFlags=0,a=n,n=t.child;n!==null;)d=n,e=a,d.flags&=14680066,g=d.alternate,g===null?(d.childLanes=0,d.lanes=e,d.child=null,d.subtreeFlags=0,d.memoizedProps=null,d.memoizedState=null,d.updateQueue=null,d.dependencies=null,d.stateNode=null):(d.childLanes=g.childLanes,d.lanes=g.lanes,d.child=g.child,d.subtreeFlags=0,d.deletions=null,d.memoizedProps=g.memoizedProps,d.memoizedState=g.memoizedState,d.updateQueue=g.updateQueue,d.type=g.type,e=g.dependencies,d.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return be(Me,Me.current&1|2),t.child}e=e.sibling}d.tail!==null&&Le()>fr&&(t.flags|=128,a=!0,io(d,!1),t.lanes=4194304)}else{if(!a)if(e=si(g),e!==null){if(t.flags|=128,a=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),io(d,!0),d.tail===null&&d.tailMode==="hidden"&&!g.alternate&&!Ce)return Ze(t),null}else 2*Le()-d.renderingStartTime>fr&&n!==1073741824&&(t.flags|=128,a=!0,io(d,!1),t.lanes=4194304);d.isBackwards?(g.sibling=t.child,t.child=g):(n=d.last,n!==null?n.sibling=g:t.child=g,d.last=g)}return d.tail!==null?(t=d.tail,d.rendering=t,d.tail=t.sibling,d.renderingStartTime=Le(),t.sibling=null,n=Me.current,be(Me,a?n&1|2:n&1),t):(Ze(t),null);case 22:case 23:return js(),a=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==a&&(t.flags|=8192),a&&(t.mode&1)!==0?(gt&1073741824)!==0&&(Ze(t),t.subtreeFlags&6&&(t.flags|=8192)):Ze(t),null;case 24:return null;case 25:return null}throw Error(o(156,t.tag))}function Kf(e,t){switch($a(t),t.tag){case 1:return it(t.type)&&Qo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return cr(),Ie(ot),Ie(Je),ts(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Za(t),null;case 13:if(Ie(Me),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(o(340));ar()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Ie(Me),null;case 4:return cr(),null;case 10:return Ka(t.type._context),null;case 22:case 23:return js(),null;case 24:return null;default:return null}}var gi=!1,et=!1,Yf=typeof WeakSet=="function"?WeakSet:Set,W=null;function hr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(a){De(e,t,a)}else n.current=null}function ks(e,t,n){try{n()}catch(a){De(e,t,a)}}var Zc=!1;function Qf(e,t){if(ja=No,e=_u(),Ta(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var a=n.getSelection&&n.getSelection();if(a&&a.rangeCount!==0){n=a.anchorNode;var u=a.anchorOffset,d=a.focusNode;a=a.focusOffset;try{n.nodeType,d.nodeType}catch{n=null;break e}var g=0,b=-1,k=-1,M=0,V=0,N=e,j=null;t:for(;;){for(var G;N!==n||u!==0&&N.nodeType!==3||(b=g+u),N!==d||a!==0&&N.nodeType!==3||(k=g+a),N.nodeType===3&&(g+=N.nodeValue.length),(G=N.firstChild)!==null;)j=N,N=G;for(;;){if(N===e)break t;if(j===n&&++M===u&&(b=g),j===d&&++V===a&&(k=g),(G=N.nextSibling)!==null)break;N=j,j=N.parentNode}N=G}n=b===-1||k===-1?null:{start:b,end:k}}else n=null}n=n||{start:0,end:0}}else n=null;for(La={focusedElem:e,selectionRange:n},No=!1,W=t;W!==null;)if(t=W,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,W=e;else for(;W!==null;){t=W;try{var U=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(U!==null){var K=U.memoizedProps,Ve=U.memoizedState,T=t.stateNode,I=T.getSnapshotBeforeUpdate(t.elementType===t.type?K:Mt(t.type,K),Ve);T.__reactInternalSnapshotBeforeUpdate=I}break;case 3:var C=t.stateNode.containerInfo;C.nodeType===1?C.textContent="":C.nodeType===9&&C.documentElement&&C.removeChild(C.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(o(163))}}catch(R){De(t,t.return,R)}if(e=t.sibling,e!==null){e.return=t.return,W=e;break}W=t.return}return U=Zc,Zc=!1,U}function ao(e,t,n){var a=t.updateQueue;if(a=a!==null?a.lastEffect:null,a!==null){var u=a=a.next;do{if((u.tag&e)===e){var d=u.destroy;u.destroy=void 0,d!==void 0&&ks(t,n,d)}u=u.next}while(u!==a)}}function yi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var a=n.create;n.destroy=a()}n=n.next}while(n!==t)}}function Ss(e){var t=e.ref;if(t!==null){var n=e.stateNode;e.tag,e=n,typeof t=="function"?t(e):t.current=e}}function ed(e){var t=e.alternate;t!==null&&(e.alternate=null,ed(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Nt],delete t[Yr],delete t[Oa],delete t[Df],delete t[jf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function td(e){return e.tag===5||e.tag===3||e.tag===4}function nd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||td(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Is(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ko));else if(a!==4&&(e=e.child,e!==null))for(Is(e,t,n),e=e.sibling;e!==null;)Is(e,t,n),e=e.sibling}function xs(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(a!==4&&(e=e.child,e!==null))for(xs(e,t,n),e=e.sibling;e!==null;)xs(e,t,n),e=e.sibling}var qe=null,At=!1;function hn(e,t,n){for(n=n.child;n!==null;)rd(e,t,n),n=n.sibling}function rd(e,t,n){if(Vt&&typeof Vt.onCommitFiberUnmount=="function")try{Vt.onCommitFiberUnmount(Ao,n)}catch{}switch(n.tag){case 5:et||hr(n,t);case 6:var a=qe,u=At;qe=null,hn(e,t,n),qe=a,At=u,qe!==null&&(At?(e=qe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):qe.removeChild(n.stateNode));break;case 18:qe!==null&&(At?(e=qe,n=n.stateNode,e.nodeType===8?Ra(e.parentNode,n):e.nodeType===1&&Ra(e,n),Or(e)):Ra(qe,n.stateNode));break;case 4:a=qe,u=At,qe=n.stateNode.containerInfo,At=!0,hn(e,t,n),qe=a,At=u;break;case 0:case 11:case 14:case 15:if(!et&&(a=n.updateQueue,a!==null&&(a=a.lastEffect,a!==null))){u=a=a.next;do{var d=u,g=d.destroy;d=d.tag,g!==void 0&&((d&2)!==0||(d&4)!==0)&&ks(n,t,g),u=u.next}while(u!==a)}hn(e,t,n);break;case 1:if(!et&&(hr(n,t),a=n.stateNode,typeof a.componentWillUnmount=="function"))try{a.props=n.memoizedProps,a.state=n.memoizedState,a.componentWillUnmount()}catch(b){De(n,t,b)}hn(e,t,n);break;case 21:hn(e,t,n);break;case 22:n.mode&1?(et=(a=et)||n.memoizedState!==null,hn(e,t,n),et=a):hn(e,t,n);break;default:hn(e,t,n)}}function od(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Yf),t.forEach(function(a){var u=ip.bind(null,e,a);n.has(a)||(n.add(a),a.then(u,u))})}}function _t(e,t){var n=t.deletions;if(n!==null)for(var a=0;a<n.length;a++){var u=n[a];try{var d=e,g=t,b=g;e:for(;b!==null;){switch(b.tag){case 5:qe=b.stateNode,At=!1;break e;case 3:qe=b.stateNode.containerInfo,At=!0;break e;case 4:qe=b.stateNode.containerInfo,At=!0;break e}b=b.return}if(qe===null)throw Error(o(160));rd(d,g,u),qe=null,At=!1;var k=u.alternate;k!==null&&(k.return=null),u.return=null}catch(M){De(u,t,M)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)id(t,e),t=t.sibling}function id(e,t){var n=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(_t(t,e),Ft(e),a&4){try{ao(3,e,e.return),yi(3,e)}catch(K){De(e,e.return,K)}try{ao(5,e,e.return)}catch(K){De(e,e.return,K)}}break;case 1:_t(t,e),Ft(e),a&512&&n!==null&&hr(n,n.return);break;case 5:if(_t(t,e),Ft(e),a&512&&n!==null&&hr(n,n.return),e.flags&32){var u=e.stateNode;try{Er(u,"")}catch(K){De(e,e.return,K)}}if(a&4&&(u=e.stateNode,u!=null)){var d=e.memoizedProps,g=n!==null?n.memoizedProps:d,b=e.type,k=e.updateQueue;if(e.updateQueue=null,k!==null)try{b==="input"&&d.type==="radio"&&d.name!=null&&jl(u,d),ta(b,g);var M=ta(b,d);for(g=0;g<k.length;g+=2){var V=k[g],N=k[g+1];V==="style"?Bl(u,N):V==="dangerouslySetInnerHTML"?Fl(u,N):V==="children"?Er(u,N):q(u,V,N,M)}switch(b){case"input":Qi(u,d);break;case"textarea":Nl(u,d);break;case"select":var j=u._wrapperState.wasMultiple;u._wrapperState.wasMultiple=!!d.multiple;var G=d.value;G!=null?Wn(u,!!d.multiple,G,!1):j!==!!d.multiple&&(d.defaultValue!=null?Wn(u,!!d.multiple,d.defaultValue,!0):Wn(u,!!d.multiple,d.multiple?[]:"",!1))}u[Yr]=d}catch(K){De(e,e.return,K)}}break;case 6:if(_t(t,e),Ft(e),a&4){if(e.stateNode===null)throw Error(o(162));u=e.stateNode,d=e.memoizedProps;try{u.nodeValue=d}catch(K){De(e,e.return,K)}}break;case 3:if(_t(t,e),Ft(e),a&4&&n!==null&&n.memoizedState.isDehydrated)try{Or(t.containerInfo)}catch(K){De(e,e.return,K)}break;case 4:_t(t,e),Ft(e);break;case 13:_t(t,e),Ft(e),u=e.child,u.flags&8192&&(d=u.memoizedState!==null,u.stateNode.isHidden=d,!d||u.alternate!==null&&u.alternate.memoizedState!==null||(Es=Le())),a&4&&od(e);break;case 22:if(V=n!==null&&n.memoizedState!==null,e.mode&1?(et=(M=et)||V,_t(t,e),et=M):_t(t,e),Ft(e),a&8192){if(M=e.memoizedState!==null,(e.stateNode.isHidden=M)&&!V&&(e.mode&1)!==0)for(W=e,V=e.child;V!==null;){for(N=W=V;W!==null;){switch(j=W,G=j.child,j.tag){case 0:case 11:case 14:case 15:ao(4,j,j.return);break;case 1:hr(j,j.return);var U=j.stateNode;if(typeof U.componentWillUnmount=="function"){a=j,n=j.return;try{t=a,U.props=t.memoizedProps,U.state=t.memoizedState,U.componentWillUnmount()}catch(K){De(a,n,K)}}break;case 5:hr(j,j.return);break;case 22:if(j.memoizedState!==null){ld(N);continue}}G!==null?(G.return=j,W=G):ld(N)}V=V.sibling}e:for(V=null,N=e;;){if(N.tag===5){if(V===null){V=N;try{u=N.stateNode,M?(d=u.style,typeof d.setProperty=="function"?d.setProperty("display","none","important"):d.display="none"):(b=N.stateNode,k=N.memoizedProps.style,g=k!=null&&k.hasOwnProperty("display")?k.display:null,b.style.display=zl("display",g))}catch(K){De(e,e.return,K)}}}else if(N.tag===6){if(V===null)try{N.stateNode.nodeValue=M?"":N.memoizedProps}catch(K){De(e,e.return,K)}}else if((N.tag!==22&&N.tag!==23||N.memoizedState===null||N===e)&&N.child!==null){N.child.return=N,N=N.child;continue}if(N===e)break e;for(;N.sibling===null;){if(N.return===null||N.return===e)break e;V===N&&(V=null),N=N.return}V===N&&(V=null),N.sibling.return=N.return,N=N.sibling}}break;case 19:_t(t,e),Ft(e),a&4&&od(e);break;case 21:break;default:_t(t,e),Ft(e)}}function Ft(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(td(n)){var a=n;break e}n=n.return}throw Error(o(160))}switch(a.tag){case 5:var u=a.stateNode;a.flags&32&&(Er(u,""),a.flags&=-33);var d=nd(e);xs(e,d,u);break;case 3:case 4:var g=a.stateNode.containerInfo,b=nd(e);Is(e,b,g);break;default:throw Error(o(161))}}catch(k){De(e,e.return,k)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Jf(e,t,n){W=e,ad(e)}function ad(e,t,n){for(var a=(e.mode&1)!==0;W!==null;){var u=W,d=u.child;if(u.tag===22&&a){var g=u.memoizedState!==null||gi;if(!g){var b=u.alternate,k=b!==null&&b.memoizedState!==null||et;b=gi;var M=et;if(gi=g,(et=k)&&!M)for(W=u;W!==null;)g=W,k=g.child,g.tag===22&&g.memoizedState!==null?ud(u):k!==null?(k.return=g,W=k):ud(u);for(;d!==null;)W=d,ad(d),d=d.sibling;W=u,gi=b,et=M}sd(e)}else(u.subtreeFlags&8772)!==0&&d!==null?(d.return=u,W=d):sd(e)}}function sd(e){for(;W!==null;){var t=W;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:et||yi(5,t);break;case 1:var a=t.stateNode;if(t.flags&4&&!et)if(n===null)a.componentDidMount();else{var u=t.elementType===t.type?n.memoizedProps:Mt(t.type,n.memoizedProps);a.componentDidUpdate(u,n.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}var d=t.updateQueue;d!==null&&lc(t,d,a);break;case 3:var g=t.updateQueue;if(g!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}lc(t,g,n)}break;case 5:var b=t.stateNode;if(n===null&&t.flags&4){n=b;var k=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":k.autoFocus&&n.focus();break;case"img":k.src&&(n.src=k.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var M=t.alternate;if(M!==null){var V=M.memoizedState;if(V!==null){var N=V.dehydrated;N!==null&&Or(N)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(o(163))}et||t.flags&512&&Ss(t)}catch(j){De(t,t.return,j)}}if(t===e){W=null;break}if(n=t.sibling,n!==null){n.return=t.return,W=n;break}W=t.return}}function ld(e){for(;W!==null;){var t=W;if(t===e){W=null;break}var n=t.sibling;if(n!==null){n.return=t.return,W=n;break}W=t.return}}function ud(e){for(;W!==null;){var t=W;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{yi(4,t)}catch(k){De(t,n,k)}break;case 1:var a=t.stateNode;if(typeof a.componentDidMount=="function"){var u=t.return;try{a.componentDidMount()}catch(k){De(t,u,k)}}var d=t.return;try{Ss(t)}catch(k){De(t,d,k)}break;case 5:var g=t.return;try{Ss(t)}catch(k){De(t,g,k)}}}catch(k){De(t,t.return,k)}if(t===e){W=null;break}var b=t.sibling;if(b!==null){b.return=t.return,W=b;break}W=t.return}}var Xf=Math.ceil,vi=z.ReactCurrentDispatcher,Ts=z.ReactCurrentOwner,xt=z.ReactCurrentBatchConfig,le=0,He=null,Re=null,Ke=0,gt=0,mr=sn(0),ze=0,so=null,Dn=0,wi=0,Cs=0,lo=null,st=null,Es=0,fr=1/0,Kt=null,bi=!1,Ps=null,mn=null,ki=!1,fn=null,Si=0,uo=0,Ms=null,Ii=-1,xi=0;function nt(){return(le&6)!==0?Le():Ii!==-1?Ii:Ii=Le()}function pn(e){return(e.mode&1)===0?1:(le&2)!==0&&Ke!==0?Ke&-Ke:Vf.transition!==null?(xi===0&&(xi=nu()),xi):(e=ge,e!==0||(e=window.event,e=e===void 0?16:du(e.type)),e)}function Dt(e,t,n,a){if(50<uo)throw uo=0,Ms=null,Error(o(185));jr(e,n,a),((le&2)===0||e!==He)&&(e===He&&((le&2)===0&&(wi|=n),ze===4&&gn(e,Ke)),lt(e,a),n===1&&le===0&&(t.mode&1)===0&&(fr=Le()+500,Xo&&un()))}function lt(e,t){var n=e.callbackNode;Lm(e,t);var a=jo(e,e===He?Ke:0);if(a===0)n!==null&&Zl(n),e.callbackNode=null,e.callbackPriority=0;else if(t=a&-a,e.callbackPriority!==t){if(n!=null&&Zl(n),t===1)e.tag===0?Lf(dd.bind(null,e)):Qu(dd.bind(null,e)),Af(function(){(le&6)===0&&un()}),n=null;else{switch(ru(a)){case 1:n=la;break;case 4:n=eu;break;case 16:n=Mo;break;case 536870912:n=tu;break;default:n=Mo}n=wd(n,cd.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function cd(e,t){if(Ii=-1,xi=0,(le&6)!==0)throw Error(o(327));var n=e.callbackNode;if(pr()&&e.callbackNode!==n)return null;var a=jo(e,e===He?Ke:0);if(a===0)return null;if((a&30)!==0||(a&e.expiredLanes)!==0||t)t=Ti(e,a);else{t=a;var u=le;le|=2;var d=md();(He!==e||Ke!==t)&&(Kt=null,fr=Le()+500,Ln(e,t));do try{tp();break}catch(b){hd(e,b)}while(!0);qa(),vi.current=d,le=u,Re!==null?t=0:(He=null,Ke=0,t=ze)}if(t!==0){if(t===2&&(u=ua(e),u!==0&&(a=u,t=As(e,u))),t===1)throw n=so,Ln(e,0),gn(e,a),lt(e,Le()),n;if(t===6)gn(e,a);else{if(u=e.current.alternate,(a&30)===0&&!Zf(u)&&(t=Ti(e,a),t===2&&(d=ua(e),d!==0&&(a=d,t=As(e,d))),t===1))throw n=so,Ln(e,0),gn(e,a),lt(e,Le()),n;switch(e.finishedWork=u,e.finishedLanes=a,t){case 0:case 1:throw Error(o(345));case 2:Vn(e,st,Kt);break;case 3:if(gn(e,a),(a&130023424)===a&&(t=Es+500-Le(),10<t)){if(jo(e,0)!==0)break;if(u=e.suspendedLanes,(u&a)!==a){nt(),e.pingedLanes|=e.suspendedLanes&u;break}e.timeoutHandle=Na(Vn.bind(null,e,st,Kt),t);break}Vn(e,st,Kt);break;case 4:if(gn(e,a),(a&4194240)===a)break;for(t=e.eventTimes,u=-1;0<a;){var g=31-Ct(a);d=1<<g,g=t[g],g>u&&(u=g),a&=~d}if(a=u,a=Le()-a,a=(120>a?120:480>a?480:1080>a?1080:1920>a?1920:3e3>a?3e3:4320>a?4320:1960*Xf(a/1960))-a,10<a){e.timeoutHandle=Na(Vn.bind(null,e,st,Kt),a);break}Vn(e,st,Kt);break;case 5:Vn(e,st,Kt);break;default:throw Error(o(329))}}}return lt(e,Le()),e.callbackNode===n?cd.bind(null,e):null}function As(e,t){var n=lo;return e.current.memoizedState.isDehydrated&&(Ln(e,t).flags|=256),e=Ti(e,t),e!==2&&(t=st,st=n,t!==null&&_s(t)),e}function _s(e){st===null?st=e:st.push.apply(st,e)}function Zf(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var a=0;a<n.length;a++){var u=n[a],d=u.getSnapshot;u=u.value;try{if(!Et(d(),u))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function gn(e,t){for(t&=~Cs,t&=~wi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ct(t),a=1<<n;e[n]=-1,t&=~a}}function dd(e){if((le&6)!==0)throw Error(o(327));pr();var t=jo(e,0);if((t&1)===0)return lt(e,Le()),null;var n=Ti(e,t);if(e.tag!==0&&n===2){var a=ua(e);a!==0&&(t=a,n=As(e,a))}if(n===1)throw n=so,Ln(e,0),gn(e,t),lt(e,Le()),n;if(n===6)throw Error(o(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Vn(e,st,Kt),lt(e,Le()),null}function Ds(e,t){var n=le;le|=1;try{return e(t)}finally{le=n,le===0&&(fr=Le()+500,Xo&&un())}}function jn(e){fn!==null&&fn.tag===0&&(le&6)===0&&pr();var t=le;le|=1;var n=xt.transition,a=ge;try{if(xt.transition=null,ge=1,e)return e()}finally{ge=a,xt.transition=n,le=t,(le&6)===0&&un()}}function js(){gt=mr.current,Ie(mr)}function Ln(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Mf(n)),Re!==null)for(n=Re.return;n!==null;){var a=n;switch($a(a),a.tag){case 1:a=a.type.childContextTypes,a!=null&&Qo();break;case 3:cr(),Ie(ot),Ie(Je),ts();break;case 5:Za(a);break;case 4:cr();break;case 13:Ie(Me);break;case 19:Ie(Me);break;case 10:Ka(a.type._context);break;case 22:case 23:js()}n=n.return}if(He=e,Re=e=yn(e.current,null),Ke=gt=t,ze=0,so=null,Cs=wi=Dn=0,st=lo=null,Mn!==null){for(t=0;t<Mn.length;t++)if(n=Mn[t],a=n.interleaved,a!==null){n.interleaved=null;var u=a.next,d=n.pending;if(d!==null){var g=d.next;d.next=u,a.next=g}n.pending=a}Mn=null}return e}function hd(e,t){do{var n=Re;try{if(qa(),li.current=hi,ui){for(var a=Ae.memoizedState;a!==null;){var u=a.queue;u!==null&&(u.pending=null),a=a.next}ui=!1}if(_n=0,Ge=Fe=Ae=null,to=!1,no=0,Ts.current=null,n===null||n.return===null){ze=1,so=t,Re=null;break}e:{var d=e,g=n.return,b=n,k=t;if(t=Ke,b.flags|=32768,k!==null&&typeof k=="object"&&typeof k.then=="function"){var M=k,V=b,N=V.tag;if((V.mode&1)===0&&(N===0||N===11||N===15)){var j=V.alternate;j?(V.updateQueue=j.updateQueue,V.memoizedState=j.memoizedState,V.lanes=j.lanes):(V.updateQueue=null,V.memoizedState=null)}var G=Rc(g);if(G!==null){G.flags&=-257,Oc(G,g,b,d,t),G.mode&1&&Nc(d,M,t),t=G,k=M;var U=t.updateQueue;if(U===null){var K=new Set;K.add(k),t.updateQueue=K}else U.add(k);break e}else{if((t&1)===0){Nc(d,M,t),Ls();break e}k=Error(o(426))}}else if(Ce&&b.mode&1){var Ve=Rc(g);if(Ve!==null){(Ve.flags&65536)===0&&(Ve.flags|=256),Oc(Ve,g,b,d,t),Wa(dr(k,b));break e}}d=k=dr(k,b),ze!==4&&(ze=2),lo===null?lo=[d]:lo.push(d),d=g;do{switch(d.tag){case 3:d.flags|=65536,t&=-t,d.lanes|=t;var T=Lc(d,k,t);sc(d,T);break e;case 1:b=k;var I=d.type,C=d.stateNode;if((d.flags&128)===0&&(typeof I.getDerivedStateFromError=="function"||C!==null&&typeof C.componentDidCatch=="function"&&(mn===null||!mn.has(C)))){d.flags|=65536,t&=-t,d.lanes|=t;var R=Vc(d,b,t);sc(d,R);break e}}d=d.return}while(d!==null)}pd(n)}catch(Y){t=Y,Re===n&&n!==null&&(Re=n=n.return);continue}break}while(!0)}function md(){var e=vi.current;return vi.current=hi,e===null?hi:e}function Ls(){(ze===0||ze===3||ze===2)&&(ze=4),He===null||(Dn&268435455)===0&&(wi&268435455)===0||gn(He,Ke)}function Ti(e,t){var n=le;le|=2;var a=md();(He!==e||Ke!==t)&&(Kt=null,Ln(e,t));do try{ep();break}catch(u){hd(e,u)}while(!0);if(qa(),le=n,vi.current=a,Re!==null)throw Error(o(261));return He=null,Ke=0,ze}function ep(){for(;Re!==null;)fd(Re)}function tp(){for(;Re!==null&&!Tm();)fd(Re)}function fd(e){var t=vd(e.alternate,e,gt);e.memoizedProps=e.pendingProps,t===null?pd(e):Re=t,Ts.current=null}function pd(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=qf(n,t,gt),n!==null){Re=n;return}}else{if(n=Kf(n,t),n!==null){n.flags&=32767,Re=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ze=6,Re=null;return}}if(t=t.sibling,t!==null){Re=t;return}Re=t=e}while(t!==null);ze===0&&(ze=5)}function Vn(e,t,n){var a=ge,u=xt.transition;try{xt.transition=null,ge=1,np(e,t,n,a)}finally{xt.transition=u,ge=a}return null}function np(e,t,n,a){do pr();while(fn!==null);if((le&6)!==0)throw Error(o(327));n=e.finishedWork;var u=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(o(177));e.callbackNode=null,e.callbackPriority=0;var d=n.lanes|n.childLanes;if(Vm(e,d),e===He&&(Re=He=null,Ke=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||ki||(ki=!0,wd(Mo,function(){return pr(),null})),d=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||d){d=xt.transition,xt.transition=null;var g=ge;ge=1;var b=le;le|=4,Ts.current=null,Qf(e,n),id(n,e),Sf(La),No=!!ja,La=ja=null,e.current=n,Jf(n),Cm(),le=b,ge=g,xt.transition=d}else e.current=n;if(ki&&(ki=!1,fn=e,Si=u),d=e.pendingLanes,d===0&&(mn=null),Mm(n.stateNode),lt(e,Le()),t!==null)for(a=e.onRecoverableError,n=0;n<t.length;n++)u=t[n],a(u.value,{componentStack:u.stack,digest:u.digest});if(bi)throw bi=!1,e=Ps,Ps=null,e;return(Si&1)!==0&&e.tag!==0&&pr(),d=e.pendingLanes,(d&1)!==0?e===Ms?uo++:(uo=0,Ms=e):uo=0,un(),null}function pr(){if(fn!==null){var e=ru(Si),t=xt.transition,n=ge;try{if(xt.transition=null,ge=16>e?16:e,fn===null)var a=!1;else{if(e=fn,fn=null,Si=0,(le&6)!==0)throw Error(o(331));var u=le;for(le|=4,W=e.current;W!==null;){var d=W,g=d.child;if((W.flags&16)!==0){var b=d.deletions;if(b!==null){for(var k=0;k<b.length;k++){var M=b[k];for(W=M;W!==null;){var V=W;switch(V.tag){case 0:case 11:case 15:ao(8,V,d)}var N=V.child;if(N!==null)N.return=V,W=N;else for(;W!==null;){V=W;var j=V.sibling,G=V.return;if(ed(V),V===M){W=null;break}if(j!==null){j.return=G,W=j;break}W=G}}}var U=d.alternate;if(U!==null){var K=U.child;if(K!==null){U.child=null;do{var Ve=K.sibling;K.sibling=null,K=Ve}while(K!==null)}}W=d}}if((d.subtreeFlags&2064)!==0&&g!==null)g.return=d,W=g;else e:for(;W!==null;){if(d=W,(d.flags&2048)!==0)switch(d.tag){case 0:case 11:case 15:ao(9,d,d.return)}var T=d.sibling;if(T!==null){T.return=d.return,W=T;break e}W=d.return}}var I=e.current;for(W=I;W!==null;){g=W;var C=g.child;if((g.subtreeFlags&2064)!==0&&C!==null)C.return=g,W=C;else e:for(g=I;W!==null;){if(b=W,(b.flags&2048)!==0)try{switch(b.tag){case 0:case 11:case 15:yi(9,b)}}catch(Y){De(b,b.return,Y)}if(b===g){W=null;break e}var R=b.sibling;if(R!==null){R.return=b.return,W=R;break e}W=b.return}}if(le=u,un(),Vt&&typeof Vt.onPostCommitFiberRoot=="function")try{Vt.onPostCommitFiberRoot(Ao,e)}catch{}a=!0}return a}finally{ge=n,xt.transition=t}}return!1}function gd(e,t,n){t=dr(n,t),t=Lc(e,t,1),e=dn(e,t,1),t=nt(),e!==null&&(jr(e,1,t),lt(e,t))}function De(e,t,n){if(e.tag===3)gd(e,e,n);else for(;t!==null;){if(t.tag===3){gd(t,e,n);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(mn===null||!mn.has(a))){e=dr(n,e),e=Vc(t,e,1),t=dn(t,e,1),e=nt(),t!==null&&(jr(t,1,e),lt(t,e));break}}t=t.return}}function rp(e,t,n){var a=e.pingCache;a!==null&&a.delete(t),t=nt(),e.pingedLanes|=e.suspendedLanes&n,He===e&&(Ke&n)===n&&(ze===4||ze===3&&(Ke&130023424)===Ke&&500>Le()-Es?Ln(e,0):Cs|=n),lt(e,t)}function yd(e,t){t===0&&((e.mode&1)===0?t=1:(t=Do,Do<<=1,(Do&130023424)===0&&(Do=4194304)));var n=nt();e=Wt(e,t),e!==null&&(jr(e,t,n),lt(e,n))}function op(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),yd(e,n)}function ip(e,t){var n=0;switch(e.tag){case 13:var a=e.stateNode,u=e.memoizedState;u!==null&&(n=u.retryLane);break;case 19:a=e.stateNode;break;default:throw Error(o(314))}a!==null&&a.delete(t),yd(e,n)}var vd;vd=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ot.current)at=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return at=!1,Uf(e,t,n);at=(e.flags&131072)!==0}else at=!1,Ce&&(t.flags&1048576)!==0&&Ju(t,ei,t.index);switch(t.lanes=0,t.tag){case 2:var a=t.type;pi(e,t),e=t.pendingProps;var u=rr(t,Je.current);ur(t,n),u=os(null,t,a,e,u,n);var d=is();return t.flags|=1,typeof u=="object"&&u!==null&&typeof u.render=="function"&&u.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,it(a)?(d=!0,Jo(t)):d=!1,t.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,Ja(t),u.updater=mi,t.stateNode=u,u._reactInternals=t,ds(t,a,e,n),t=ps(null,t,a,!0,d,n)):(t.tag=0,Ce&&d&&Ba(t),tt(null,t,u,n),t=t.child),t;case 16:a=t.elementType;e:{switch(pi(e,t),e=t.pendingProps,u=a._init,a=u(a._payload),t.type=a,u=t.tag=sp(a),e=Mt(a,e),u){case 0:t=fs(null,t,a,e,n);break e;case 1:t=Hc(null,t,a,e,n);break e;case 11:t=Fc(null,t,a,e,n);break e;case 14:t=zc(null,t,a,Mt(a.type,e),n);break e}throw Error(o(306,a,""))}return t;case 0:return a=t.type,u=t.pendingProps,u=t.elementType===a?u:Mt(a,u),fs(e,t,a,u,n);case 1:return a=t.type,u=t.pendingProps,u=t.elementType===a?u:Mt(a,u),Hc(e,t,a,u,n);case 3:e:{if(Wc(t),e===null)throw Error(o(387));a=t.pendingProps,d=t.memoizedState,u=d.element,ac(e,t),ai(t,a,null,n);var g=t.memoizedState;if(a=g.element,d.isDehydrated)if(d={element:a,isDehydrated:!1,cache:g.cache,pendingSuspenseBoundaries:g.pendingSuspenseBoundaries,transitions:g.transitions},t.updateQueue.baseState=d,t.memoizedState=d,t.flags&256){u=dr(Error(o(423)),t),t=Uc(e,t,a,n,u);break e}else if(a!==u){u=dr(Error(o(424)),t),t=Uc(e,t,a,n,u);break e}else for(pt=an(t.stateNode.containerInfo.firstChild),ft=t,Ce=!0,Pt=null,n=oc(t,null,a,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ar(),a===u){t=qt(e,t,n);break e}tt(e,t,a,n)}t=t.child}return t;case 5:return uc(t),e===null&&Ha(t),a=t.type,u=t.pendingProps,d=e!==null?e.memoizedProps:null,g=u.children,Va(a,u)?g=null:d!==null&&Va(a,d)&&(t.flags|=32),Gc(e,t),tt(e,t,g,n),t.child;case 6:return e===null&&Ha(t),null;case 13:return qc(e,t,n);case 4:return Xa(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=sr(t,null,a,n):tt(e,t,a,n),t.child;case 11:return a=t.type,u=t.pendingProps,u=t.elementType===a?u:Mt(a,u),Fc(e,t,a,u,n);case 7:return tt(e,t,t.pendingProps,n),t.child;case 8:return tt(e,t,t.pendingProps.children,n),t.child;case 12:return tt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(a=t.type._context,u=t.pendingProps,d=t.memoizedProps,g=u.value,be(ri,a._currentValue),a._currentValue=g,d!==null)if(Et(d.value,g)){if(d.children===u.children&&!ot.current){t=qt(e,t,n);break e}}else for(d=t.child,d!==null&&(d.return=t);d!==null;){var b=d.dependencies;if(b!==null){g=d.child;for(var k=b.firstContext;k!==null;){if(k.context===a){if(d.tag===1){k=Ut(-1,n&-n),k.tag=2;var M=d.updateQueue;if(M!==null){M=M.shared;var V=M.pending;V===null?k.next=k:(k.next=V.next,V.next=k),M.pending=k}}d.lanes|=n,k=d.alternate,k!==null&&(k.lanes|=n),Ya(d.return,n,t),b.lanes|=n;break}k=k.next}}else if(d.tag===10)g=d.type===t.type?null:d.child;else if(d.tag===18){if(g=d.return,g===null)throw Error(o(341));g.lanes|=n,b=g.alternate,b!==null&&(b.lanes|=n),Ya(g,n,t),g=d.sibling}else g=d.child;if(g!==null)g.return=d;else for(g=d;g!==null;){if(g===t){g=null;break}if(d=g.sibling,d!==null){d.return=g.return,g=d;break}g=g.return}d=g}tt(e,t,u.children,n),t=t.child}return t;case 9:return u=t.type,a=t.pendingProps.children,ur(t,n),u=St(u),a=a(u),t.flags|=1,tt(e,t,a,n),t.child;case 14:return a=t.type,u=Mt(a,t.pendingProps),u=Mt(a.type,u),zc(e,t,a,u,n);case 15:return Bc(e,t,t.type,t.pendingProps,n);case 17:return a=t.type,u=t.pendingProps,u=t.elementType===a?u:Mt(a,u),pi(e,t),t.tag=1,it(a)?(e=!0,Jo(t)):e=!1,ur(t,n),Dc(t,a,u),ds(t,a,u,n),ps(null,t,a,!0,e,n);case 19:return Yc(e,t,n);case 22:return $c(e,t,n)}throw Error(o(156,t.tag))};function wd(e,t){return Xl(e,t)}function ap(e,t,n,a){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Tt(e,t,n,a){return new ap(e,t,n,a)}function Vs(e){return e=e.prototype,!(!e||!e.isReactComponent)}function sp(e){if(typeof e=="function")return Vs(e)?1:0;if(e!=null){if(e=e.$$typeof,e===me)return 11;if(e===$e)return 14}return 2}function yn(e,t){var n=e.alternate;return n===null?(n=Tt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ci(e,t,n,a,u,d){var g=2;if(a=e,typeof e=="function")Vs(e)&&(g=1);else if(typeof e=="string")g=5;else e:switch(e){case ee:return Nn(n.children,u,d,t);case he:g=8,u|=8;break;case re:return e=Tt(12,n,t,u|2),e.elementType=re,e.lanes=d,e;case Be:return e=Tt(13,n,t,u),e.elementType=Be,e.lanes=d,e;case xe:return e=Tt(19,n,t,u),e.elementType=xe,e.lanes=d,e;case ke:return Ei(n,u,d,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ve:g=10;break e;case je:g=9;break e;case me:g=11;break e;case $e:g=14;break e;case Oe:g=16,a=null;break e}throw Error(o(130,e==null?e:typeof e,""))}return t=Tt(g,n,t,u),t.elementType=e,t.type=a,t.lanes=d,t}function Nn(e,t,n,a){return e=Tt(7,e,a,t),e.lanes=n,e}function Ei(e,t,n,a){return e=Tt(22,e,a,t),e.elementType=ke,e.lanes=n,e.stateNode={isHidden:!1},e}function Ns(e,t,n){return e=Tt(6,e,null,t),e.lanes=n,e}function Rs(e,t,n){return t=Tt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function lp(e,t,n,a,u){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ca(0),this.expirationTimes=ca(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ca(0),this.identifierPrefix=a,this.onRecoverableError=u,this.mutableSourceEagerHydrationData=null}function Os(e,t,n,a,u,d,g,b,k){return e=new lp(e,t,n,b,k),t===1?(t=1,d===!0&&(t|=8)):t=0,d=Tt(3,null,null,t),e.current=d,d.stateNode=e,d.memoizedState={element:a,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ja(d),e}function up(e,t,n){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:H,key:a==null?null:""+a,children:e,containerInfo:t,implementation:n}}function bd(e){if(!e)return ln;e=e._reactInternals;e:{if(xn(e)!==e||e.tag!==1)throw Error(o(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(it(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(o(171))}if(e.tag===1){var n=e.type;if(it(n))return Ku(e,n,t)}return t}function kd(e,t,n,a,u,d,g,b,k){return e=Os(n,a,!0,e,u,d,g,b,k),e.context=bd(null),n=e.current,a=nt(),u=pn(n),d=Ut(a,u),d.callback=t??null,dn(n,d,u),e.current.lanes=u,jr(e,u,a),lt(e,a),e}function Pi(e,t,n,a){var u=t.current,d=nt(),g=pn(u);return n=bd(n),t.context===null?t.context=n:t.pendingContext=n,t=Ut(d,g),t.payload={element:e},a=a===void 0?null:a,a!==null&&(t.callback=a),e=dn(u,t,g),e!==null&&(Dt(e,u,g,d),ii(e,u,g)),g}function Mi(e){return e=e.current,e.child?(e.child.tag===5,e.child.stateNode):null}function Sd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Fs(e,t){Sd(e,t),(e=e.alternate)&&Sd(e,t)}function cp(){return null}var Id=typeof reportError=="function"?reportError:function(e){console.error(e)};function zs(e){this._internalRoot=e}Ai.prototype.render=zs.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(o(409));Pi(e,t,null,null)},Ai.prototype.unmount=zs.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;jn(function(){Pi(null,e,null,null)}),t[Bt]=null}};function Ai(e){this._internalRoot=e}Ai.prototype.unstable_scheduleHydration=function(e){if(e){var t=au();e={blockedOn:null,target:e,priority:t};for(var n=0;n<nn.length&&t!==0&&t<nn[n].priority;n++);nn.splice(n,0,e),n===0&&uu(e)}};function Bs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function _i(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function xd(){}function dp(e,t,n,a,u){if(u){if(typeof a=="function"){var d=a;a=function(){var M=Mi(g);d.call(M)}}var g=kd(t,a,e,0,null,!1,!1,"",xd);return e._reactRootContainer=g,e[Bt]=g.current,qr(e.nodeType===8?e.parentNode:e),jn(),g}for(;u=e.lastChild;)e.removeChild(u);if(typeof a=="function"){var b=a;a=function(){var M=Mi(k);b.call(M)}}var k=Os(e,0,!1,null,null,!1,!1,"",xd);return e._reactRootContainer=k,e[Bt]=k.current,qr(e.nodeType===8?e.parentNode:e),jn(function(){Pi(t,k,n,a)}),k}function Di(e,t,n,a,u){var d=n._reactRootContainer;if(d){var g=d;if(typeof u=="function"){var b=u;u=function(){var k=Mi(g);b.call(k)}}Pi(t,g,e,u)}else g=dp(n,t,e,u,a);return Mi(g)}ou=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Dr(t.pendingLanes);n!==0&&(da(t,n|1),lt(t,Le()),(le&6)===0&&(fr=Le()+500,un()))}break;case 13:jn(function(){var a=Wt(e,1);if(a!==null){var u=nt();Dt(a,e,1,u)}}),Fs(e,1)}},ha=function(e){if(e.tag===13){var t=Wt(e,134217728);if(t!==null){var n=nt();Dt(t,e,134217728,n)}Fs(e,134217728)}},iu=function(e){if(e.tag===13){var t=pn(e),n=Wt(e,t);if(n!==null){var a=nt();Dt(n,e,t,a)}Fs(e,t)}},au=function(){return ge},su=function(e,t){var n=ge;try{return ge=e,t()}finally{ge=n}},oa=function(e,t,n){switch(t){case"input":if(Qi(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var a=n[t];if(a!==e&&a.form===e.form){var u=Yo(a);if(!u)throw Error(o(90));_l(a),Qi(a,u)}}}break;case"textarea":Nl(e,n);break;case"select":t=n.value,t!=null&&Wn(e,!!n.multiple,t,!1)}},Wl=Ds,Ul=jn;var hp={usingClientEntryPoint:!1,Events:[Qr,tr,Yo,Gl,Hl,Ds]},co={findFiberByHostInstance:Tn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},mp={bundleType:co.bundleType,version:co.version,rendererPackageName:co.rendererPackageName,rendererConfig:co.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:z.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ql(e),e===null?null:e.stateNode},findFiberByHostInstance:co.findFiberByHostInstance||cp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ji=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ji.isDisabled&&ji.supportsFiber)try{Ao=ji.inject(mp),Vt=ji}catch{}}return ut.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=hp,ut.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Bs(t))throw Error(o(200));return up(e,t,null,n)},ut.createRoot=function(e,t){if(!Bs(e))throw Error(o(299));var n=!1,a="",u=Id;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onRecoverableError!==void 0&&(u=t.onRecoverableError)),t=Os(e,1,!1,null,null,n,!1,a,u),e[Bt]=t.current,qr(e.nodeType===8?e.parentNode:e),new zs(t)},ut.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(o(188)):(e=Object.keys(e).join(","),Error(o(268,e)));return e=Ql(t),e=e===null?null:e.stateNode,e},ut.flushSync=function(e){return jn(e)},ut.hydrate=function(e,t,n){if(!_i(t))throw Error(o(200));return Di(null,e,t,!0,n)},ut.hydrateRoot=function(e,t,n){if(!Bs(e))throw Error(o(405));var a=n!=null&&n.hydratedSources||null,u=!1,d="",g=Id;if(n!=null&&(n.unstable_strictMode===!0&&(u=!0),n.identifierPrefix!==void 0&&(d=n.identifierPrefix),n.onRecoverableError!==void 0&&(g=n.onRecoverableError)),t=kd(t,null,e,1,n??null,u,!1,d,g),e[Bt]=t.current,qr(e),a)for(e=0;e<a.length;e++)n=a[e],u=n._getVersion,u=u(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,u]:t.mutableSourceEagerHydrationData.push(n,u);return new Ai(t)},ut.render=function(e,t,n){if(!_i(t))throw Error(o(200));return Di(null,e,t,!1,n)},ut.unmountComponentAtNode=function(e){if(!_i(e))throw Error(o(40));return e._reactRootContainer?(jn(function(){Di(null,null,e,!1,function(){e._reactRootContainer=null,e[Bt]=null})}),!0):!1},ut.unstable_batchedUpdates=Ds,ut.unstable_renderSubtreeIntoContainer=function(e,t,n,a){if(!_i(n))throw Error(o(200));if(e==null||e._reactInternals===void 0)throw Error(o(38));return Di(e,t,n,!1,a)},ut.version="18.3.1-next-f1338f8080-20240426",ut}var Dd;function jh(){if(Dd)return Hs.exports;Dd=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(r){console.error(r)}}return i(),Hs.exports=Sp(),Hs.exports}var jd;function Ip(){if(jd)return Li;jd=1;var i=jh();return Li.createRoot=i.createRoot,Li.hydrateRoot=i.hydrateRoot,Li}var xp=Ip();const Tp=kr(xp),Cp="modulepreload",Ep=function(i){return"/"+i},Ld={},fe=function(r,o,s){let l=Promise.resolve();if(o&&o.length>0){let f=function(p){return Promise.all(p.map(y=>Promise.resolve(y).then(w=>({status:"fulfilled",value:w}),w=>({status:"rejected",reason:w}))))};document.getElementsByTagName("link");const h=document.querySelector("meta[property=csp-nonce]"),m=h?.nonce||h?.getAttribute("nonce");l=f(o.map(p=>{if(p=Ep(p),p in Ld)return;Ld[p]=!0;const y=p.endsWith(".css"),w=y?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${p}"]${w}`))return;const v=document.createElement("link");if(v.rel=y?"stylesheet":Cp,y||(v.as="script"),v.crossOrigin="",v.href=p,m&&v.setAttribute("nonce",m),document.head.appendChild(v),y)return new Promise((E,_)=>{v.addEventListener("load",E),v.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${p}`)))})}))}function c(h){const m=new Event("vite:preloadError",{cancelable:!0});if(m.payload=h,window.dispatchEvent(m),!m.defaultPrevented)throw h}return l.then(h=>{for(const m of h||[])m.status==="rejected"&&c(m.reason);return r().catch(c)})};var qk=jh();function wo(){return wo=Object.assign?Object.assign.bind():function(i){for(var r=1;r<arguments.length;r++){var o=arguments[r];for(var s in o)Object.prototype.hasOwnProperty.call(o,s)&&(i[s]=o[s])}return i},wo.apply(this,arguments)}var wn;(function(i){i.Pop="POP",i.Push="PUSH",i.Replace="REPLACE"})(wn||(wn={}));const Vd="popstate";function Pp(i){i===void 0&&(i={});function r(s,l){let{pathname:c,search:h,hash:m}=s.location;return sl("",{pathname:c,search:h,hash:m},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function o(s,l){return typeof l=="string"?l:Ri(l)}return Ap(r,o,null,i)}function Ne(i,r){if(i===!1||i===null||typeof i>"u")throw new Error(r)}function bl(i,r){if(!i){typeof console<"u"&&console.warn(r);try{throw new Error(r)}catch{}}}function Mp(){return Math.random().toString(36).substr(2,8)}function Nd(i,r){return{usr:i.state,key:i.key,idx:r}}function sl(i,r,o,s){return o===void 0&&(o=null),wo({pathname:typeof i=="string"?i:i.pathname,search:"",hash:""},typeof r=="string"?Sr(r):r,{state:o,key:r&&r.key||s||Mp()})}function Ri(i){let{pathname:r="/",search:o="",hash:s=""}=i;return o&&o!=="?"&&(r+=o.charAt(0)==="?"?o:"?"+o),s&&s!=="#"&&(r+=s.charAt(0)==="#"?s:"#"+s),r}function Sr(i){let r={};if(i){let o=i.indexOf("#");o>=0&&(r.hash=i.substr(o),i=i.substr(0,o));let s=i.indexOf("?");s>=0&&(r.search=i.substr(s),i=i.substr(0,s)),i&&(r.pathname=i)}return r}function Ap(i,r,o,s){s===void 0&&(s={});let{window:l=document.defaultView,v5Compat:c=!1}=s,h=l.history,m=wn.Pop,f=null,p=y();p==null&&(p=0,h.replaceState(wo({},h.state,{idx:p}),""));function y(){return(h.state||{idx:null}).idx}function w(){m=wn.Pop;let P=y(),F=P==null?null:P-p;p=P,f&&f({action:m,location:D.location,delta:F})}function v(P,F){m=wn.Push;let $=sl(D.location,P,F);p=y()+1;let q=Nd($,p),z=D.createHref($);try{h.pushState(q,"",z)}catch(J){if(J instanceof DOMException&&J.name==="DataCloneError")throw J;l.location.assign(z)}c&&f&&f({action:m,location:D.location,delta:1})}function E(P,F){m=wn.Replace;let $=sl(D.location,P,F);p=y();let q=Nd($,p),z=D.createHref($);h.replaceState(q,"",z),c&&f&&f({action:m,location:D.location,delta:0})}function _(P){let F=l.location.origin!=="null"?l.location.origin:l.location.href,$=typeof P=="string"?P:Ri(P);return $=$.replace(/ $/,"%20"),Ne(F,"No window.location.(origin|href) available to create URL for href: "+$),new URL($,F)}let D={get action(){return m},get location(){return i(l,h)},listen(P){if(f)throw new Error("A history only accepts one active listener");return l.addEventListener(Vd,w),f=P,()=>{l.removeEventListener(Vd,w),f=null}},createHref(P){return r(l,P)},createURL:_,encodeLocation(P){let F=_(P);return{pathname:F.pathname,search:F.search,hash:F.hash}},push:v,replace:E,go(P){return h.go(P)}};return D}var Rd;(function(i){i.data="data",i.deferred="deferred",i.redirect="redirect",i.error="error"})(Rd||(Rd={}));function _p(i,r,o){return o===void 0&&(o="/"),Dp(i,r,o)}function Dp(i,r,o,s){let l=typeof r=="string"?Sr(r):r,c=kl(l.pathname||"/",o);if(c==null)return null;let h=Lh(i);jp(h);let m=null;for(let f=0;m==null&&f<h.length;++f){let p=Wp(c);m=$p(h[f],p)}return m}function Lh(i,r,o,s){r===void 0&&(r=[]),o===void 0&&(o=[]),s===void 0&&(s="");let l=(c,h,m)=>{let f={relativePath:m===void 0?c.path||"":m,caseSensitive:c.caseSensitive===!0,childrenIndex:h,route:c};f.relativePath.startsWith("/")&&(Ne(f.relativePath.startsWith(s),'Absolute route path "'+f.relativePath+'" nested under path '+('"'+s+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),f.relativePath=f.relativePath.slice(s.length));let p=bn([s,f.relativePath]),y=o.concat(f);c.children&&c.children.length>0&&(Ne(c.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+p+'".')),Lh(c.children,r,y,p)),!(c.path==null&&!c.index)&&r.push({path:p,score:zp(p,c.index),routesMeta:y})};return i.forEach((c,h)=>{var m;if(c.path===""||!((m=c.path)!=null&&m.includes("?")))l(c,h);else for(let f of Vh(c.path))l(c,h,f)}),r}function Vh(i){let r=i.split("/");if(r.length===0)return[];let[o,...s]=r,l=o.endsWith("?"),c=o.replace(/\?$/,"");if(s.length===0)return l?[c,""]:[c];let h=Vh(s.join("/")),m=[];return m.push(...h.map(f=>f===""?c:[c,f].join("/"))),l&&m.push(...h),m.map(f=>i.startsWith("/")&&f===""?"/":f)}function jp(i){i.sort((r,o)=>r.score!==o.score?o.score-r.score:Bp(r.routesMeta.map(s=>s.childrenIndex),o.routesMeta.map(s=>s.childrenIndex)))}const Lp=/^:[\w-]+$/,Vp=3,Np=2,Rp=1,Op=10,Fp=-2,Od=i=>i==="*";function zp(i,r){let o=i.split("/"),s=o.length;return o.some(Od)&&(s+=Fp),r&&(s+=Np),o.filter(l=>!Od(l)).reduce((l,c)=>l+(Lp.test(c)?Vp:c===""?Rp:Op),s)}function Bp(i,r){return i.length===r.length&&i.slice(0,-1).every((s,l)=>s===r[l])?i[i.length-1]-r[r.length-1]:0}function $p(i,r,o){let{routesMeta:s}=i,l={},c="/",h=[];for(let m=0;m<s.length;++m){let f=s[m],p=m===s.length-1,y=c==="/"?r:r.slice(c.length)||"/",w=Gp({path:f.relativePath,caseSensitive:f.caseSensitive,end:p},y),v=f.route;if(!w)return null;Object.assign(l,w.params),h.push({params:l,pathname:bn([c,w.pathname]),pathnameBase:Qp(bn([c,w.pathnameBase])),route:v}),w.pathnameBase!=="/"&&(c=bn([c,w.pathnameBase]))}return h}function Gp(i,r){typeof i=="string"&&(i={path:i,caseSensitive:!1,end:!0});let[o,s]=Hp(i.path,i.caseSensitive,i.end),l=r.match(o);if(!l)return null;let c=l[0],h=c.replace(/(.)\/+$/,"$1"),m=l.slice(1);return{params:s.reduce((p,y,w)=>{let{paramName:v,isOptional:E}=y;if(v==="*"){let D=m[w]||"";h=c.slice(0,c.length-D.length).replace(/(.)\/+$/,"$1")}const _=m[w];return E&&!_?p[v]=void 0:p[v]=(_||"").replace(/%2F/g,"/"),p},{}),pathname:c,pathnameBase:h,pattern:i}}function Hp(i,r,o){r===void 0&&(r=!1),o===void 0&&(o=!0),bl(i==="*"||!i.endsWith("*")||i.endsWith("/*"),'Route path "'+i+'" will be treated as if it were '+('"'+i.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+i.replace(/\*$/,"/*")+'".'));let s=[],l="^"+i.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(h,m,f)=>(s.push({paramName:m,isOptional:f!=null}),f?"/?([^\\/]+)?":"/([^\\/]+)"));return i.endsWith("*")?(s.push({paramName:"*"}),l+=i==="*"||i==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):o?l+="\\/*$":i!==""&&i!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,r?void 0:"i"),s]}function Wp(i){try{return i.split("/").map(r=>decodeURIComponent(r).replace(/\//g,"%2F")).join("/")}catch(r){return bl(!1,'The URL path "'+i+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+r+").")),i}}function kl(i,r){if(r==="/")return i;if(!i.toLowerCase().startsWith(r.toLowerCase()))return null;let o=r.endsWith("/")?r.length-1:r.length,s=i.charAt(o);return s&&s!=="/"?null:i.slice(o)||"/"}const Up=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,qp=i=>Up.test(i);function Kp(i,r){r===void 0&&(r="/");let{pathname:o,search:s="",hash:l=""}=typeof i=="string"?Sr(i):i,c;if(o)if(qp(o))c=o;else{if(o.includes("//")){let h=o;o=o.replace(/\/\/+/g,"/"),bl(!1,"Pathnames cannot have embedded double slashes - normalizing "+(h+" -> "+o))}o.startsWith("/")?c=Fd(o.substring(1),"/"):c=Fd(o,r)}else c=r;return{pathname:c,search:Jp(s),hash:Xp(l)}}function Fd(i,r){let o=r.replace(/\/+$/,"").split("/");return i.split("/").forEach(l=>{l===".."?o.length>1&&o.pop():l!=="."&&o.push(l)}),o.length>1?o.join("/"):"/"}function qs(i,r,o,s){return"Cannot include a '"+i+"' character in a manually specified "+("`to."+r+"` field ["+JSON.stringify(s)+"].  Please separate it out to the ")+("`to."+o+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Yp(i){return i.filter((r,o)=>o===0||r.route.path&&r.route.path.length>0)}function Sl(i,r){let o=Yp(i);return r?o.map((s,l)=>l===o.length-1?s.pathname:s.pathnameBase):o.map(s=>s.pathnameBase)}function Il(i,r,o,s){s===void 0&&(s=!1);let l;typeof i=="string"?l=Sr(i):(l=wo({},i),Ne(!l.pathname||!l.pathname.includes("?"),qs("?","pathname","search",l)),Ne(!l.pathname||!l.pathname.includes("#"),qs("#","pathname","hash",l)),Ne(!l.search||!l.search.includes("#"),qs("#","search","hash",l)));let c=i===""||l.pathname==="",h=c?"/":l.pathname,m;if(h==null)m=o;else{let w=r.length-1;if(!s&&h.startsWith("..")){let v=h.split("/");for(;v[0]==="..";)v.shift(),w-=1;l.pathname=v.join("/")}m=w>=0?r[w]:"/"}let f=Kp(l,m),p=h&&h!=="/"&&h.endsWith("/"),y=(c||h===".")&&o.endsWith("/");return!f.pathname.endsWith("/")&&(p||y)&&(f.pathname+="/"),f}const bn=i=>i.join("/").replace(/\/\/+/g,"/"),Qp=i=>i.replace(/\/+$/,"").replace(/^\/*/,"/"),Jp=i=>!i||i==="?"?"":i.startsWith("?")?i:"?"+i,Xp=i=>!i||i==="#"?"":i.startsWith("#")?i:"#"+i;function Zp(i){return i!=null&&typeof i.status=="number"&&typeof i.statusText=="string"&&typeof i.internal=="boolean"&&"data"in i}const Nh=["post","put","patch","delete"];new Set(Nh);const eg=["get",...Nh];new Set(eg);function bo(){return bo=Object.assign?Object.assign.bind():function(i){for(var r=1;r<arguments.length;r++){var o=arguments[r];for(var s in o)Object.prototype.hasOwnProperty.call(o,s)&&(i[s]=o[s])}return i},bo.apply(this,arguments)}const xl=A.createContext(null),tg=A.createContext(null),In=A.createContext(null),Wi=A.createContext(null),Xt=A.createContext({outlet:null,matches:[],isDataRoute:!1}),Rh=A.createContext(null);function ng(i,r){let{relative:o}=r===void 0?{}:r;Ir()||Ne(!1);let{basename:s,navigator:l}=A.useContext(In),{hash:c,pathname:h,search:m}=Fh(i,{relative:o}),f=h;return s!=="/"&&(f=h==="/"?s:bn([s,h])),l.createHref({pathname:f,search:m,hash:c})}function Ir(){return A.useContext(Wi)!=null}function Lt(){return Ir()||Ne(!1),A.useContext(Wi).location}function Oh(i){A.useContext(In).static||A.useLayoutEffect(i)}function Tl(){let{isDataRoute:i}=A.useContext(Xt);return i?gg():rg()}function rg(){Ir()||Ne(!1);let i=A.useContext(xl),{basename:r,future:o,navigator:s}=A.useContext(In),{matches:l}=A.useContext(Xt),{pathname:c}=Lt(),h=JSON.stringify(Sl(l,o.v7_relativeSplatPath)),m=A.useRef(!1);return Oh(()=>{m.current=!0}),A.useCallback(function(p,y){if(y===void 0&&(y={}),!m.current)return;if(typeof p=="number"){s.go(p);return}let w=Il(p,JSON.parse(h),c,y.relative==="path");i==null&&r!=="/"&&(w.pathname=w.pathname==="/"?r:bn([r,w.pathname])),(y.replace?s.replace:s.push)(w,y.state,y)},[r,s,h,c,i])}function og(){let{matches:i}=A.useContext(Xt),r=i[i.length-1];return r?r.params:{}}function Fh(i,r){let{relative:o}=r===void 0?{}:r,{future:s}=A.useContext(In),{matches:l}=A.useContext(Xt),{pathname:c}=Lt(),h=JSON.stringify(Sl(l,s.v7_relativeSplatPath));return A.useMemo(()=>Il(i,JSON.parse(h),c,o==="path"),[i,h,c,o])}function ig(i,r){return ag(i,r)}function ag(i,r,o,s){Ir()||Ne(!1);let{navigator:l}=A.useContext(In),{matches:c}=A.useContext(Xt),h=c[c.length-1],m=h?h.params:{};h&&h.pathname;let f=h?h.pathnameBase:"/";h&&h.route;let p=Lt(),y;if(r){var w;let P=typeof r=="string"?Sr(r):r;f==="/"||(w=P.pathname)!=null&&w.startsWith(f)||Ne(!1),y=P}else y=p;let v=y.pathname||"/",E=v;if(f!=="/"){let P=f.replace(/^\//,"").split("/");E="/"+v.replace(/^\//,"").split("/").slice(P.length).join("/")}let _=_p(i,{pathname:E}),D=dg(_&&_.map(P=>Object.assign({},P,{params:Object.assign({},m,P.params),pathname:bn([f,l.encodeLocation?l.encodeLocation(P.pathname).pathname:P.pathname]),pathnameBase:P.pathnameBase==="/"?f:bn([f,l.encodeLocation?l.encodeLocation(P.pathnameBase).pathname:P.pathnameBase])})),c,o,s);return r&&D?A.createElement(Wi.Provider,{value:{location:bo({pathname:"/",search:"",hash:"",state:null,key:"default"},y),navigationType:wn.Pop}},D):D}function sg(){let i=pg(),r=Zp(i)?i.status+" "+i.statusText:i instanceof Error?i.message:JSON.stringify(i),o=i instanceof Error?i.stack:null,l={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return A.createElement(A.Fragment,null,A.createElement("h2",null,"Unexpected Application Error!"),A.createElement("h3",{style:{fontStyle:"italic"}},r),o?A.createElement("pre",{style:l},o):null,null)}const lg=A.createElement(sg,null);class ug extends A.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,o){return o.location!==r.location||o.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:o.error,location:o.location,revalidation:r.revalidation||o.revalidation}}componentDidCatch(r,o){console.error("React Router caught the following error during render",r,o)}render(){return this.state.error!==void 0?A.createElement(Xt.Provider,{value:this.props.routeContext},A.createElement(Rh.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function cg(i){let{routeContext:r,match:o,children:s}=i,l=A.useContext(xl);return l&&l.static&&l.staticContext&&(o.route.errorElement||o.route.ErrorBoundary)&&(l.staticContext._deepestRenderedBoundaryId=o.route.id),A.createElement(Xt.Provider,{value:r},s)}function dg(i,r,o,s){var l;if(r===void 0&&(r=[]),o===void 0&&(o=null),s===void 0&&(s=null),i==null){var c;if(!o)return null;if(o.errors)i=o.matches;else if((c=s)!=null&&c.v7_partialHydration&&r.length===0&&!o.initialized&&o.matches.length>0)i=o.matches;else return null}let h=i,m=(l=o)==null?void 0:l.errors;if(m!=null){let y=h.findIndex(w=>w.route.id&&m?.[w.route.id]!==void 0);y>=0||Ne(!1),h=h.slice(0,Math.min(h.length,y+1))}let f=!1,p=-1;if(o&&s&&s.v7_partialHydration)for(let y=0;y<h.length;y++){let w=h[y];if((w.route.HydrateFallback||w.route.hydrateFallbackElement)&&(p=y),w.route.id){let{loaderData:v,errors:E}=o,_=w.route.loader&&v[w.route.id]===void 0&&(!E||E[w.route.id]===void 0);if(w.route.lazy||_){f=!0,p>=0?h=h.slice(0,p+1):h=[h[0]];break}}}return h.reduceRight((y,w,v)=>{let E,_=!1,D=null,P=null;o&&(E=m&&w.route.id?m[w.route.id]:void 0,D=w.route.errorElement||lg,f&&(p<0&&v===0?(yg("route-fallback"),_=!0,P=null):p===v&&(_=!0,P=w.route.hydrateFallbackElement||null)));let F=r.concat(h.slice(0,v+1)),$=()=>{let q;return E?q=D:_?q=P:w.route.Component?q=A.createElement(w.route.Component,null):w.route.element?q=w.route.element:q=y,A.createElement(cg,{match:w,routeContext:{outlet:y,matches:F,isDataRoute:o!=null},children:q})};return o&&(w.route.ErrorBoundary||w.route.errorElement||v===0)?A.createElement(ug,{location:o.location,revalidation:o.revalidation,component:D,error:E,children:$(),routeContext:{outlet:null,matches:F,isDataRoute:!0}}):$()},null)}var zh=(function(i){return i.UseBlocker="useBlocker",i.UseRevalidator="useRevalidator",i.UseNavigateStable="useNavigate",i})(zh||{}),Bh=(function(i){return i.UseBlocker="useBlocker",i.UseLoaderData="useLoaderData",i.UseActionData="useActionData",i.UseRouteError="useRouteError",i.UseNavigation="useNavigation",i.UseRouteLoaderData="useRouteLoaderData",i.UseMatches="useMatches",i.UseRevalidator="useRevalidator",i.UseNavigateStable="useNavigate",i.UseRouteId="useRouteId",i})(Bh||{});function hg(i){let r=A.useContext(xl);return r||Ne(!1),r}function mg(i){let r=A.useContext(tg);return r||Ne(!1),r}function fg(i){let r=A.useContext(Xt);return r||Ne(!1),r}function $h(i){let r=fg(),o=r.matches[r.matches.length-1];return o.route.id||Ne(!1),o.route.id}function pg(){var i;let r=A.useContext(Rh),o=mg(),s=$h();return r!==void 0?r:(i=o.errors)==null?void 0:i[s]}function gg(){let{router:i}=hg(zh.UseNavigateStable),r=$h(Bh.UseNavigateStable),o=A.useRef(!1);return Oh(()=>{o.current=!0}),A.useCallback(function(l,c){c===void 0&&(c={}),o.current&&(typeof l=="number"?i.navigate(l):i.navigate(l,bo({fromRouteId:r},c)))},[i,r])}const zd={};function yg(i,r,o){zd[i]||(zd[i]=!0)}function vg(i,r){i?.v7_startTransition,i?.v7_relativeSplatPath}function wg(i){let{to:r,replace:o,state:s,relative:l}=i;Ir()||Ne(!1);let{future:c,static:h}=A.useContext(In),{matches:m}=A.useContext(Xt),{pathname:f}=Lt(),p=Tl(),y=Il(r,Sl(m,c.v7_relativeSplatPath),f,l==="path"),w=JSON.stringify(y);return A.useEffect(()=>p(JSON.parse(w),{replace:o,state:s,relative:l}),[p,w,l,o,s]),null}function rt(i){Ne(!1)}function bg(i){let{basename:r="/",children:o=null,location:s,navigationType:l=wn.Pop,navigator:c,static:h=!1,future:m}=i;Ir()&&Ne(!1);let f=r.replace(/^\/*/,"/"),p=A.useMemo(()=>({basename:f,navigator:c,static:h,future:bo({v7_relativeSplatPath:!1},m)}),[f,m,c,h]);typeof s=="string"&&(s=Sr(s));let{pathname:y="/",search:w="",hash:v="",state:E=null,key:_="default"}=s,D=A.useMemo(()=>{let P=kl(y,f);return P==null?null:{location:{pathname:P,search:w,hash:v,state:E,key:_},navigationType:l}},[f,y,w,v,E,_,l]);return D==null?null:A.createElement(In.Provider,{value:p},A.createElement(Wi.Provider,{children:o,value:D}))}function kg(i){let{children:r,location:o}=i;return ig(ll(r),o)}new Promise(()=>{});function ll(i,r){r===void 0&&(r=[]);let o=[];return A.Children.forEach(i,(s,l)=>{if(!A.isValidElement(s))return;let c=[...r,l];if(s.type===A.Fragment){o.push.apply(o,ll(s.props.children,c));return}s.type!==rt&&Ne(!1),!s.props.index||!s.props.children||Ne(!1);let h={id:s.props.id||c.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(h.children=ll(s.props.children,c)),o.push(h)}),o}function ul(){return ul=Object.assign?Object.assign.bind():function(i){for(var r=1;r<arguments.length;r++){var o=arguments[r];for(var s in o)Object.prototype.hasOwnProperty.call(o,s)&&(i[s]=o[s])}return i},ul.apply(this,arguments)}function Sg(i,r){if(i==null)return{};var o={},s=Object.keys(i),l,c;for(c=0;c<s.length;c++)l=s[c],!(r.indexOf(l)>=0)&&(o[l]=i[l]);return o}function Ig(i){return!!(i.metaKey||i.altKey||i.ctrlKey||i.shiftKey)}function xg(i,r){return i.button===0&&(!r||r==="_self")&&!Ig(i)}const Tg=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Cg="6";try{window.__reactRouterVersion=Cg}catch{}const Eg="startTransition",Bd=wp[Eg];function Pg(i){let{basename:r,children:o,future:s,window:l}=i,c=A.useRef();c.current==null&&(c.current=Pp({window:l,v5Compat:!0}));let h=c.current,[m,f]=A.useState({action:h.action,location:h.location}),{v7_startTransition:p}=s||{},y=A.useCallback(w=>{p&&Bd?Bd(()=>f(w)):f(w)},[f,p]);return A.useLayoutEffect(()=>h.listen(y),[h,y]),A.useEffect(()=>vg(s),[s]),A.createElement(bg,{basename:r,children:o,location:m.location,navigationType:m.action,navigator:h,future:s})}const Mg=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Ag=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,yo=A.forwardRef(function(r,o){let{onClick:s,relative:l,reloadDocument:c,replace:h,state:m,target:f,to:p,preventScrollReset:y,viewTransition:w}=r,v=Sg(r,Tg),{basename:E}=A.useContext(In),_,D=!1;if(typeof p=="string"&&Ag.test(p)&&(_=p,Mg))try{let q=new URL(window.location.href),z=p.startsWith("//")?new URL(q.protocol+p):new URL(p),J=kl(z.pathname,E);z.origin===q.origin&&J!=null?p=J+z.search+z.hash:D=!0}catch{}let P=ng(p,{relative:l}),F=_g(p,{replace:h,state:m,target:f,preventScrollReset:y,relative:l,viewTransition:w});function $(q){s&&s(q),q.defaultPrevented||F(q)}return A.createElement("a",ul({},v,{href:_||P,onClick:D||c?s:$,ref:o,target:f}))});var $d;(function(i){i.UseScrollRestoration="useScrollRestoration",i.UseSubmit="useSubmit",i.UseSubmitFetcher="useSubmitFetcher",i.UseFetcher="useFetcher",i.useViewTransitionState="useViewTransitionState"})($d||($d={}));var Gd;(function(i){i.UseFetcher="useFetcher",i.UseFetchers="useFetchers",i.UseScrollRestoration="useScrollRestoration"})(Gd||(Gd={}));function _g(i,r){let{target:o,replace:s,state:l,preventScrollReset:c,relative:h,viewTransition:m}=r===void 0?{}:r,f=Tl(),p=Lt(),y=Fh(i,{relative:h});return A.useCallback(w=>{if(xg(w,o)){w.preventDefault();let v=s!==void 0?s:Ri(p)===Ri(y);f(i,{replace:v,state:l,preventScrollReset:c,relative:h,viewTransition:m})}},[p,f,y,s,l,o,i,c,h,m])}const Gh=A.createContext(void 0),Dg=({children:i})=>{const[r,o]=A.useState(()=>{const l=localStorage.getItem("theme");return l?l==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches}),s=()=>{o(!r)};return A.useEffect(()=>{localStorage.setItem("theme",r?"dark":"light"),r?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")},[r]),S.jsx(Gh.Provider,{value:{isDark:r,toggleTheme:s},children:i})},jg=()=>{const i=A.useContext(Gh);if(!i)throw new Error("useTheme must be used within a ThemeProvider");return i},ne=i=>typeof i=="string",mo=()=>{let i,r;const o=new Promise((s,l)=>{i=s,r=l});return o.resolve=i,o.reject=r,o},Hd=i=>i==null?"":""+i,Lg=(i,r,o)=>{i.forEach(s=>{r[s]&&(o[s]=r[s])})},Vg=/###/g,Wd=i=>i&&i.indexOf("###")>-1?i.replace(Vg,"."):i,Ud=i=>!i||ne(i),vo=(i,r,o)=>{const s=ne(r)?r.split("."):r;let l=0;for(;l<s.length-1;){if(Ud(i))return{};const c=Wd(s[l]);!i[c]&&o&&(i[c]=new o),Object.prototype.hasOwnProperty.call(i,c)?i=i[c]:i={},++l}return Ud(i)?{}:{obj:i,k:Wd(s[l])}},qd=(i,r,o)=>{const{obj:s,k:l}=vo(i,r,Object);if(s!==void 0||r.length===1){s[l]=o;return}let c=r[r.length-1],h=r.slice(0,r.length-1),m=vo(i,h,Object);for(;m.obj===void 0&&h.length;)c=`${h[h.length-1]}.${c}`,h=h.slice(0,h.length-1),m=vo(i,h,Object),m&&m.obj&&typeof m.obj[`${m.k}.${c}`]<"u"&&(m.obj=void 0);m.obj[`${m.k}.${c}`]=o},Ng=(i,r,o,s)=>{const{obj:l,k:c}=vo(i,r,Object);l[c]=l[c]||[],l[c].push(o)},Oi=(i,r)=>{const{obj:o,k:s}=vo(i,r);if(o)return o[s]},Rg=(i,r,o)=>{const s=Oi(i,o);return s!==void 0?s:Oi(r,o)},Hh=(i,r,o)=>{for(const s in r)s!=="__proto__"&&s!=="constructor"&&(s in i?ne(i[s])||i[s]instanceof String||ne(r[s])||r[s]instanceof String?o&&(i[s]=r[s]):Hh(i[s],r[s],o):i[s]=r[s]);return i},gr=i=>i.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&");var Og={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};const Fg=i=>ne(i)?i.replace(/[&<>"'\/]/g,r=>Og[r]):i;class zg{constructor(r){this.capacity=r,this.regExpMap=new Map,this.regExpQueue=[]}getRegExp(r){const o=this.regExpMap.get(r);if(o!==void 0)return o;const s=new RegExp(r);return this.regExpQueue.length===this.capacity&&this.regExpMap.delete(this.regExpQueue.shift()),this.regExpMap.set(r,s),this.regExpQueue.push(r),s}}const Bg=[" ",",","?","!",";"],$g=new zg(20),Gg=(i,r,o)=>{r=r||"",o=o||"";const s=Bg.filter(h=>r.indexOf(h)<0&&o.indexOf(h)<0);if(s.length===0)return!0;const l=$g.getRegExp(`(${s.map(h=>h==="?"?"\\?":h).join("|")})`);let c=!l.test(i);if(!c){const h=i.indexOf(o);h>0&&!l.test(i.substring(0,h))&&(c=!0)}return c},cl=function(i,r){let o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:".";if(!i)return;if(i[r])return i[r];const s=r.split(o);let l=i;for(let c=0;c<s.length;){if(!l||typeof l!="object")return;let h,m="";for(let f=c;f<s.length;++f)if(f!==c&&(m+=o),m+=s[f],h=l[m],h!==void 0){if(["string","number","boolean"].indexOf(typeof h)>-1&&f<s.length-1)continue;c+=f-c+1;break}l=h}return l},Fi=i=>i&&i.replace("_","-"),Hg={type:"logger",log(i){this.output("log",i)},warn(i){this.output("warn",i)},error(i){this.output("error",i)},output(i,r){console&&console[i]&&console[i].apply(console,r)}};class zi{constructor(r){let o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.init(r,o)}init(r){let o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.prefix=o.prefix||"i18next:",this.logger=r||Hg,this.options=o,this.debug=o.debug}log(){for(var r=arguments.length,o=new Array(r),s=0;s<r;s++)o[s]=arguments[s];return this.forward(o,"log","",!0)}warn(){for(var r=arguments.length,o=new Array(r),s=0;s<r;s++)o[s]=arguments[s];return this.forward(o,"warn","",!0)}error(){for(var r=arguments.length,o=new Array(r),s=0;s<r;s++)o[s]=arguments[s];return this.forward(o,"error","")}deprecate(){for(var r=arguments.length,o=new Array(r),s=0;s<r;s++)o[s]=arguments[s];return this.forward(o,"warn","WARNING DEPRECATED: ",!0)}forward(r,o,s,l){return l&&!this.debug?null:(ne(r[0])&&(r[0]=`${s}${this.prefix} ${r[0]}`),this.logger[o](r))}create(r){return new zi(this.logger,{prefix:`${this.prefix}:${r}:`,...this.options})}clone(r){return r=r||this.options,r.prefix=r.prefix||this.prefix,new zi(this.logger,r)}}var zt=new zi;class Ui{constructor(){this.observers={}}on(r,o){return r.split(" ").forEach(s=>{this.observers[s]||(this.observers[s]=new Map);const l=this.observers[s].get(o)||0;this.observers[s].set(o,l+1)}),this}off(r,o){if(this.observers[r]){if(!o){delete this.observers[r];return}this.observers[r].delete(o)}}emit(r){for(var o=arguments.length,s=new Array(o>1?o-1:0),l=1;l<o;l++)s[l-1]=arguments[l];this.observers[r]&&Array.from(this.observers[r].entries()).forEach(h=>{let[m,f]=h;for(let p=0;p<f;p++)m(...s)}),this.observers["*"]&&Array.from(this.observers["*"].entries()).forEach(h=>{let[m,f]=h;for(let p=0;p<f;p++)m.apply(m,[r,...s])})}}class Kd extends Ui{constructor(r){let o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{ns:["translation"],defaultNS:"translation"};super(),this.data=r||{},this.options=o,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.options.ignoreJSONStructure===void 0&&(this.options.ignoreJSONStructure=!0)}addNamespaces(r){this.options.ns.indexOf(r)<0&&this.options.ns.push(r)}removeNamespaces(r){const o=this.options.ns.indexOf(r);o>-1&&this.options.ns.splice(o,1)}getResource(r,o,s){let l=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const c=l.keySeparator!==void 0?l.keySeparator:this.options.keySeparator,h=l.ignoreJSONStructure!==void 0?l.ignoreJSONStructure:this.options.ignoreJSONStructure;let m;r.indexOf(".")>-1?m=r.split("."):(m=[r,o],s&&(Array.isArray(s)?m.push(...s):ne(s)&&c?m.push(...s.split(c)):m.push(s)));const f=Oi(this.data,m);return!f&&!o&&!s&&r.indexOf(".")>-1&&(r=m[0],o=m[1],s=m.slice(2).join(".")),f||!h||!ne(s)?f:cl(this.data&&this.data[r]&&this.data[r][o],s,c)}addResource(r,o,s,l){let c=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{silent:!1};const h=c.keySeparator!==void 0?c.keySeparator:this.options.keySeparator;let m=[r,o];s&&(m=m.concat(h?s.split(h):s)),r.indexOf(".")>-1&&(m=r.split("."),l=o,o=m[1]),this.addNamespaces(o),qd(this.data,m,l),c.silent||this.emit("added",r,o,s,l)}addResources(r,o,s){let l=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{silent:!1};for(const c in s)(ne(s[c])||Array.isArray(s[c]))&&this.addResource(r,o,c,s[c],{silent:!0});l.silent||this.emit("added",r,o,s)}addResourceBundle(r,o,s,l,c){let h=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{silent:!1,skipCopy:!1},m=[r,o];r.indexOf(".")>-1&&(m=r.split("."),l=s,s=o,o=m[1]),this.addNamespaces(o);let f=Oi(this.data,m)||{};h.skipCopy||(s=JSON.parse(JSON.stringify(s))),l?Hh(f,s,c):f={...f,...s},qd(this.data,m,f),h.silent||this.emit("added",r,o,s)}removeResourceBundle(r,o){this.hasResourceBundle(r,o)&&delete this.data[r][o],this.removeNamespaces(o),this.emit("removed",r,o)}hasResourceBundle(r,o){return this.getResource(r,o)!==void 0}getResourceBundle(r,o){return o||(o=this.options.defaultNS),this.options.compatibilityAPI==="v1"?{...this.getResource(r,o)}:this.getResource(r,o)}getDataByLanguage(r){return this.data[r]}hasLanguageSomeTranslations(r){const o=this.getDataByLanguage(r);return!!(o&&Object.keys(o)||[]).find(l=>o[l]&&Object.keys(o[l]).length>0)}toJSON(){return this.data}}var Wh={processors:{},addPostProcessor(i){this.processors[i.name]=i},handle(i,r,o,s,l){return i.forEach(c=>{this.processors[c]&&(r=this.processors[c].process(r,o,s,l))}),r}};const Yd={};class Bi extends Ui{constructor(r){let o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};super(),Lg(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],r,this),this.options=o,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.logger=zt.create("translator")}changeLanguage(r){r&&(this.language=r)}exists(r){let o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};if(r==null)return!1;const s=this.resolve(r,o);return s&&s.res!==void 0}extractFromKey(r,o){let s=o.nsSeparator!==void 0?o.nsSeparator:this.options.nsSeparator;s===void 0&&(s=":");const l=o.keySeparator!==void 0?o.keySeparator:this.options.keySeparator;let c=o.ns||this.options.defaultNS||[];const h=s&&r.indexOf(s)>-1,m=!this.options.userDefinedKeySeparator&&!o.keySeparator&&!this.options.userDefinedNsSeparator&&!o.nsSeparator&&!Gg(r,s,l);if(h&&!m){const f=r.match(this.interpolator.nestingRegexp);if(f&&f.length>0)return{key:r,namespaces:ne(c)?[c]:c};const p=r.split(s);(s!==l||s===l&&this.options.ns.indexOf(p[0])>-1)&&(c=p.shift()),r=p.join(l)}return{key:r,namespaces:ne(c)?[c]:c}}translate(r,o,s){if(typeof o!="object"&&this.options.overloadTranslationOptionHandler&&(o=this.options.overloadTranslationOptionHandler(arguments)),typeof o=="object"&&(o={...o}),o||(o={}),r==null)return"";Array.isArray(r)||(r=[String(r)]);const l=o.returnDetails!==void 0?o.returnDetails:this.options.returnDetails,c=o.keySeparator!==void 0?o.keySeparator:this.options.keySeparator,{key:h,namespaces:m}=this.extractFromKey(r[r.length-1],o),f=m[m.length-1],p=o.lng||this.language,y=o.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if(p&&p.toLowerCase()==="cimode"){if(y){const z=o.nsSeparator||this.options.nsSeparator;return l?{res:`${f}${z}${h}`,usedKey:h,exactUsedKey:h,usedLng:p,usedNS:f,usedParams:this.getUsedParamsDetails(o)}:`${f}${z}${h}`}return l?{res:h,usedKey:h,exactUsedKey:h,usedLng:p,usedNS:f,usedParams:this.getUsedParamsDetails(o)}:h}const w=this.resolve(r,o);let v=w&&w.res;const E=w&&w.usedKey||h,_=w&&w.exactUsedKey||h,D=Object.prototype.toString.apply(v),P=["[object Number]","[object Function]","[object RegExp]"],F=o.joinArrays!==void 0?o.joinArrays:this.options.joinArrays,$=!this.i18nFormat||this.i18nFormat.handleAsObject,q=!ne(v)&&typeof v!="boolean"&&typeof v!="number";if($&&v&&q&&P.indexOf(D)<0&&!(ne(F)&&Array.isArray(v))){if(!o.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");const z=this.options.returnedObjectHandler?this.options.returnedObjectHandler(E,v,{...o,ns:m}):`key '${h} (${this.language})' returned an object instead of string.`;return l?(w.res=z,w.usedParams=this.getUsedParamsDetails(o),w):z}if(c){const z=Array.isArray(v),J=z?[]:{},H=z?_:E;for(const ee in v)if(Object.prototype.hasOwnProperty.call(v,ee)){const he=`${H}${c}${ee}`;J[ee]=this.translate(he,{...o,joinArrays:!1,ns:m}),J[ee]===he&&(J[ee]=v[ee])}v=J}}else if($&&ne(F)&&Array.isArray(v))v=v.join(F),v&&(v=this.extendTranslation(v,r,o,s));else{let z=!1,J=!1;const H=o.count!==void 0&&!ne(o.count),ee=Bi.hasDefaultValue(o),he=H?this.pluralResolver.getSuffix(p,o.count,o):"",re=o.ordinal&&H?this.pluralResolver.getSuffix(p,o.count,{ordinal:!1}):"",ve=H&&!o.ordinal&&o.count===0&&this.pluralResolver.shouldUseIntlApi(),je=ve&&o[`defaultValue${this.options.pluralSeparator}zero`]||o[`defaultValue${he}`]||o[`defaultValue${re}`]||o.defaultValue;!this.isValidLookup(v)&&ee&&(z=!0,v=je),this.isValidLookup(v)||(J=!0,v=h);const Be=(o.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&J?void 0:v,xe=ee&&je!==v&&this.options.updateMissing;if(J||z||xe){if(this.logger.log(xe?"updateKey":"missingKey",p,f,h,xe?je:v),c){const O=this.resolve(h,{...o,keySeparator:!1});O&&O.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}let $e=[];const Oe=this.languageUtils.getFallbackCodes(this.options.fallbackLng,o.lng||this.language);if(this.options.saveMissingTo==="fallback"&&Oe&&Oe[0])for(let O=0;O<Oe.length;O++)$e.push(Oe[O]);else this.options.saveMissingTo==="all"?$e=this.languageUtils.toResolveHierarchy(o.lng||this.language):$e.push(o.lng||this.language);const ke=(O,Q,B)=>{const x=ee&&B!==v?B:Be;this.options.missingKeyHandler?this.options.missingKeyHandler(O,f,Q,x,xe,o):this.backendConnector&&this.backendConnector.saveMissing&&this.backendConnector.saveMissing(O,f,Q,x,xe,o),this.emit("missingKey",O,f,Q,v)};this.options.saveMissing&&(this.options.saveMissingPlurals&&H?$e.forEach(O=>{const Q=this.pluralResolver.getSuffixes(O,o);ve&&o[`defaultValue${this.options.pluralSeparator}zero`]&&Q.indexOf(`${this.options.pluralSeparator}zero`)<0&&Q.push(`${this.options.pluralSeparator}zero`),Q.forEach(B=>{ke([O],h+B,o[`defaultValue${B}`]||je)})}):ke($e,h,je))}v=this.extendTranslation(v,r,o,w,s),J&&v===h&&this.options.appendNamespaceToMissingKey&&(v=`${f}:${h}`),(J||z)&&this.options.parseMissingKeyHandler&&(this.options.compatibilityAPI!=="v1"?v=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${f}:${h}`:h,z?v:void 0):v=this.options.parseMissingKeyHandler(v))}return l?(w.res=v,w.usedParams=this.getUsedParamsDetails(o),w):v}extendTranslation(r,o,s,l,c){var h=this;if(this.i18nFormat&&this.i18nFormat.parse)r=this.i18nFormat.parse(r,{...this.options.interpolation.defaultVariables,...s},s.lng||this.language||l.usedLng,l.usedNS,l.usedKey,{resolved:l});else if(!s.skipInterpolation){s.interpolation&&this.interpolator.init({...s,interpolation:{...this.options.interpolation,...s.interpolation}});const p=ne(r)&&(s&&s.interpolation&&s.interpolation.skipOnVariables!==void 0?s.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);let y;if(p){const v=r.match(this.interpolator.nestingRegexp);y=v&&v.length}let w=s.replace&&!ne(s.replace)?s.replace:s;if(this.options.interpolation.defaultVariables&&(w={...this.options.interpolation.defaultVariables,...w}),r=this.interpolator.interpolate(r,w,s.lng||this.language||l.usedLng,s),p){const v=r.match(this.interpolator.nestingRegexp),E=v&&v.length;y<E&&(s.nest=!1)}!s.lng&&this.options.compatibilityAPI!=="v1"&&l&&l.res&&(s.lng=this.language||l.usedLng),s.nest!==!1&&(r=this.interpolator.nest(r,function(){for(var v=arguments.length,E=new Array(v),_=0;_<v;_++)E[_]=arguments[_];return c&&c[0]===E[0]&&!s.context?(h.logger.warn(`It seems you are nesting recursively key: ${E[0]} in key: ${o[0]}`),null):h.translate(...E,o)},s)),s.interpolation&&this.interpolator.reset()}const m=s.postProcess||this.options.postProcess,f=ne(m)?[m]:m;return r!=null&&f&&f.length&&s.applyPostProcessor!==!1&&(r=Wh.handle(f,r,o,this.options&&this.options.postProcessPassResolved?{i18nResolved:{...l,usedParams:this.getUsedParamsDetails(s)},...s}:s,this)),r}resolve(r){let o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s,l,c,h,m;return ne(r)&&(r=[r]),r.forEach(f=>{if(this.isValidLookup(s))return;const p=this.extractFromKey(f,o),y=p.key;l=y;let w=p.namespaces;this.options.fallbackNS&&(w=w.concat(this.options.fallbackNS));const v=o.count!==void 0&&!ne(o.count),E=v&&!o.ordinal&&o.count===0&&this.pluralResolver.shouldUseIntlApi(),_=o.context!==void 0&&(ne(o.context)||typeof o.context=="number")&&o.context!=="",D=o.lngs?o.lngs:this.languageUtils.toResolveHierarchy(o.lng||this.language,o.fallbackLng);w.forEach(P=>{this.isValidLookup(s)||(m=P,!Yd[`${D[0]}-${P}`]&&this.utils&&this.utils.hasLoadedNamespace&&!this.utils.hasLoadedNamespace(m)&&(Yd[`${D[0]}-${P}`]=!0,this.logger.warn(`key "${l}" for languages "${D.join(", ")}" won't get resolved as namespace "${m}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),D.forEach(F=>{if(this.isValidLookup(s))return;h=F;const $=[y];if(this.i18nFormat&&this.i18nFormat.addLookupKeys)this.i18nFormat.addLookupKeys($,y,F,P,o);else{let z;v&&(z=this.pluralResolver.getSuffix(F,o.count,o));const J=`${this.options.pluralSeparator}zero`,H=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(v&&($.push(y+z),o.ordinal&&z.indexOf(H)===0&&$.push(y+z.replace(H,this.options.pluralSeparator)),E&&$.push(y+J)),_){const ee=`${y}${this.options.contextSeparator}${o.context}`;$.push(ee),v&&($.push(ee+z),o.ordinal&&z.indexOf(H)===0&&$.push(ee+z.replace(H,this.options.pluralSeparator)),E&&$.push(ee+J))}}let q;for(;q=$.pop();)this.isValidLookup(s)||(c=q,s=this.getResource(F,P,q,o))}))})}),{res:s,usedKey:l,exactUsedKey:c,usedLng:h,usedNS:m}}isValidLookup(r){return r!==void 0&&!(!this.options.returnNull&&r===null)&&!(!this.options.returnEmptyString&&r==="")}getResource(r,o,s){let l=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return this.i18nFormat&&this.i18nFormat.getResource?this.i18nFormat.getResource(r,o,s,l):this.resourceStore.getResource(r,o,s,l)}getUsedParamsDetails(){let r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const o=["defaultValue","ordinal","context","replace","lng","lngs","fallbackLng","ns","keySeparator","nsSeparator","returnObjects","returnDetails","joinArrays","postProcess","interpolation"],s=r.replace&&!ne(r.replace);let l=s?r.replace:r;if(s&&typeof r.count<"u"&&(l.count=r.count),this.options.interpolation.defaultVariables&&(l={...this.options.interpolation.defaultVariables,...l}),!s){l={...l};for(const c of o)delete l[c]}return l}static hasDefaultValue(r){const o="defaultValue";for(const s in r)if(Object.prototype.hasOwnProperty.call(r,s)&&o===s.substring(0,o.length)&&r[s]!==void 0)return!0;return!1}}const Ks=i=>i.charAt(0).toUpperCase()+i.slice(1);class Qd{constructor(r){this.options=r,this.supportedLngs=this.options.supportedLngs||!1,this.logger=zt.create("languageUtils")}getScriptPartFromCode(r){if(r=Fi(r),!r||r.indexOf("-")<0)return null;const o=r.split("-");return o.length===2||(o.pop(),o[o.length-1].toLowerCase()==="x")?null:this.formatLanguageCode(o.join("-"))}getLanguagePartFromCode(r){if(r=Fi(r),!r||r.indexOf("-")<0)return r;const o=r.split("-");return this.formatLanguageCode(o[0])}formatLanguageCode(r){if(ne(r)&&r.indexOf("-")>-1){if(typeof Intl<"u"&&typeof Intl.getCanonicalLocales<"u")try{let l=Intl.getCanonicalLocales(r)[0];if(l&&this.options.lowerCaseLng&&(l=l.toLowerCase()),l)return l}catch{}const o=["hans","hant","latn","cyrl","cans","mong","arab"];let s=r.split("-");return this.options.lowerCaseLng?s=s.map(l=>l.toLowerCase()):s.length===2?(s[0]=s[0].toLowerCase(),s[1]=s[1].toUpperCase(),o.indexOf(s[1].toLowerCase())>-1&&(s[1]=Ks(s[1].toLowerCase()))):s.length===3&&(s[0]=s[0].toLowerCase(),s[1].length===2&&(s[1]=s[1].toUpperCase()),s[0]!=="sgn"&&s[2].length===2&&(s[2]=s[2].toUpperCase()),o.indexOf(s[1].toLowerCase())>-1&&(s[1]=Ks(s[1].toLowerCase())),o.indexOf(s[2].toLowerCase())>-1&&(s[2]=Ks(s[2].toLowerCase()))),s.join("-")}return this.options.cleanCode||this.options.lowerCaseLng?r.toLowerCase():r}isSupportedCode(r){return(this.options.load==="languageOnly"||this.options.nonExplicitSupportedLngs)&&(r=this.getLanguagePartFromCode(r)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(r)>-1}getBestMatchFromCodes(r){if(!r)return null;let o;return r.forEach(s=>{if(o)return;const l=this.formatLanguageCode(s);(!this.options.supportedLngs||this.isSupportedCode(l))&&(o=l)}),!o&&this.options.supportedLngs&&r.forEach(s=>{if(o)return;const l=this.getLanguagePartFromCode(s);if(this.isSupportedCode(l))return o=l;o=this.options.supportedLngs.find(c=>{if(c===l)return c;if(!(c.indexOf("-")<0&&l.indexOf("-")<0)&&(c.indexOf("-")>0&&l.indexOf("-")<0&&c.substring(0,c.indexOf("-"))===l||c.indexOf(l)===0&&l.length>1))return c})}),o||(o=this.getFallbackCodes(this.options.fallbackLng)[0]),o}getFallbackCodes(r,o){if(!r)return[];if(typeof r=="function"&&(r=r(o)),ne(r)&&(r=[r]),Array.isArray(r))return r;if(!o)return r.default||[];let s=r[o];return s||(s=r[this.getScriptPartFromCode(o)]),s||(s=r[this.formatLanguageCode(o)]),s||(s=r[this.getLanguagePartFromCode(o)]),s||(s=r.default),s||[]}toResolveHierarchy(r,o){const s=this.getFallbackCodes(o||this.options.fallbackLng||[],r),l=[],c=h=>{h&&(this.isSupportedCode(h)?l.push(h):this.logger.warn(`rejecting language code not found in supportedLngs: ${h}`))};return ne(r)&&(r.indexOf("-")>-1||r.indexOf("_")>-1)?(this.options.load!=="languageOnly"&&c(this.formatLanguageCode(r)),this.options.load!=="languageOnly"&&this.options.load!=="currentOnly"&&c(this.getScriptPartFromCode(r)),this.options.load!=="currentOnly"&&c(this.getLanguagePartFromCode(r))):ne(r)&&c(this.formatLanguageCode(r)),s.forEach(h=>{l.indexOf(h)<0&&c(this.formatLanguageCode(h))}),l}}let Wg=[{lngs:["ach","ak","am","arn","br","fil","gun","ln","mfe","mg","mi","oc","pt","pt-BR","tg","tl","ti","tr","uz","wa"],nr:[1,2],fc:1},{lngs:["af","an","ast","az","bg","bn","ca","da","de","dev","el","en","eo","es","et","eu","fi","fo","fur","fy","gl","gu","ha","hi","hu","hy","ia","it","kk","kn","ku","lb","mai","ml","mn","mr","nah","nap","nb","ne","nl","nn","no","nso","pa","pap","pms","ps","pt-PT","rm","sco","se","si","so","son","sq","sv","sw","ta","te","tk","ur","yo"],nr:[1,2],fc:2},{lngs:["ay","bo","cgg","fa","ht","id","ja","jbo","ka","km","ko","ky","lo","ms","sah","su","th","tt","ug","vi","wo","zh"],nr:[1],fc:3},{lngs:["be","bs","cnr","dz","hr","ru","sr","uk"],nr:[1,2,5],fc:4},{lngs:["ar"],nr:[0,1,2,3,11,100],fc:5},{lngs:["cs","sk"],nr:[1,2,5],fc:6},{lngs:["csb","pl"],nr:[1,2,5],fc:7},{lngs:["cy"],nr:[1,2,3,8],fc:8},{lngs:["fr"],nr:[1,2],fc:9},{lngs:["ga"],nr:[1,2,3,7,11],fc:10},{lngs:["gd"],nr:[1,2,3,20],fc:11},{lngs:["is"],nr:[1,2],fc:12},{lngs:["jv"],nr:[0,1],fc:13},{lngs:["kw"],nr:[1,2,3,4],fc:14},{lngs:["lt"],nr:[1,2,10],fc:15},{lngs:["lv"],nr:[1,2,0],fc:16},{lngs:["mk"],nr:[1,2],fc:17},{lngs:["mnk"],nr:[0,1,2],fc:18},{lngs:["mt"],nr:[1,2,11,20],fc:19},{lngs:["or"],nr:[2,1],fc:2},{lngs:["ro"],nr:[1,2,20],fc:20},{lngs:["sl"],nr:[5,1,2,3],fc:21},{lngs:["he","iw"],nr:[1,2,20,21],fc:22}],Ug={1:i=>+(i>1),2:i=>+(i!=1),3:i=>0,4:i=>i%10==1&&i%100!=11?0:i%10>=2&&i%10<=4&&(i%100<10||i%100>=20)?1:2,5:i=>i==0?0:i==1?1:i==2?2:i%100>=3&&i%100<=10?3:i%100>=11?4:5,6:i=>i==1?0:i>=2&&i<=4?1:2,7:i=>i==1?0:i%10>=2&&i%10<=4&&(i%100<10||i%100>=20)?1:2,8:i=>i==1?0:i==2?1:i!=8&&i!=11?2:3,9:i=>+(i>=2),10:i=>i==1?0:i==2?1:i<7?2:i<11?3:4,11:i=>i==1||i==11?0:i==2||i==12?1:i>2&&i<20?2:3,12:i=>+(i%10!=1||i%100==11),13:i=>+(i!==0),14:i=>i==1?0:i==2?1:i==3?2:3,15:i=>i%10==1&&i%100!=11?0:i%10>=2&&(i%100<10||i%100>=20)?1:2,16:i=>i%10==1&&i%100!=11?0:i!==0?1:2,17:i=>i==1||i%10==1&&i%100!=11?0:1,18:i=>i==0?0:i==1?1:2,19:i=>i==1?0:i==0||i%100>1&&i%100<11?1:i%100>10&&i%100<20?2:3,20:i=>i==1?0:i==0||i%100>0&&i%100<20?1:2,21:i=>i%100==1?1:i%100==2?2:i%100==3||i%100==4?3:0,22:i=>i==1?0:i==2?1:(i<0||i>10)&&i%10==0?2:3};const qg=["v1","v2","v3"],Kg=["v4"],Jd={zero:0,one:1,two:2,few:3,many:4,other:5},Yg=()=>{const i={};return Wg.forEach(r=>{r.lngs.forEach(o=>{i[o]={numbers:r.nr,plurals:Ug[r.fc]}})}),i};class Qg{constructor(r){let o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.languageUtils=r,this.options=o,this.logger=zt.create("pluralResolver"),(!this.options.compatibilityJSON||Kg.includes(this.options.compatibilityJSON))&&(typeof Intl>"u"||!Intl.PluralRules)&&(this.options.compatibilityJSON="v3",this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")),this.rules=Yg(),this.pluralRulesCache={}}addRule(r,o){this.rules[r]=o}clearCache(){this.pluralRulesCache={}}getRule(r){let o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(this.shouldUseIntlApi()){const s=Fi(r==="dev"?"en":r),l=o.ordinal?"ordinal":"cardinal",c=JSON.stringify({cleanedCode:s,type:l});if(c in this.pluralRulesCache)return this.pluralRulesCache[c];let h;try{h=new Intl.PluralRules(s,{type:l})}catch{if(!r.match(/-|_/))return;const f=this.languageUtils.getLanguagePartFromCode(r);h=this.getRule(f,o)}return this.pluralRulesCache[c]=h,h}return this.rules[r]||this.rules[this.languageUtils.getLanguagePartFromCode(r)]}needsPlural(r){let o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const s=this.getRule(r,o);return this.shouldUseIntlApi()?s&&s.resolvedOptions().pluralCategories.length>1:s&&s.numbers.length>1}getPluralFormsOfKey(r,o){let s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this.getSuffixes(r,s).map(l=>`${o}${l}`)}getSuffixes(r){let o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const s=this.getRule(r,o);return s?this.shouldUseIntlApi()?s.resolvedOptions().pluralCategories.sort((l,c)=>Jd[l]-Jd[c]).map(l=>`${this.options.prepend}${o.ordinal?`ordinal${this.options.prepend}`:""}${l}`):s.numbers.map(l=>this.getSuffix(r,l,o)):[]}getSuffix(r,o){let s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const l=this.getRule(r,s);return l?this.shouldUseIntlApi()?`${this.options.prepend}${s.ordinal?`ordinal${this.options.prepend}`:""}${l.select(o)}`:this.getSuffixRetroCompatible(l,o):(this.logger.warn(`no plural rule found for: ${r}`),"")}getSuffixRetroCompatible(r,o){const s=r.noAbs?r.plurals(o):r.plurals(Math.abs(o));let l=r.numbers[s];this.options.simplifyPluralSuffix&&r.numbers.length===2&&r.numbers[0]===1&&(l===2?l="plural":l===1&&(l=""));const c=()=>this.options.prepend&&l.toString()?this.options.prepend+l.toString():l.toString();return this.options.compatibilityJSON==="v1"?l===1?"":typeof l=="number"?`_plural_${l.toString()}`:c():this.options.compatibilityJSON==="v2"||this.options.simplifyPluralSuffix&&r.numbers.length===2&&r.numbers[0]===1?c():this.options.prepend&&s.toString()?this.options.prepend+s.toString():s.toString()}shouldUseIntlApi(){return!qg.includes(this.options.compatibilityJSON)}}const Xd=function(i,r,o){let s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:".",l=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!0,c=Rg(i,r,o);return!c&&l&&ne(o)&&(c=cl(i,o,s),c===void 0&&(c=cl(r,o,s))),c},Ys=i=>i.replace(/\$/g,"$$$$");class Jg{constructor(){let r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=zt.create("interpolator"),this.options=r,this.format=r.interpolation&&r.interpolation.format||(o=>o),this.init(r)}init(){let r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};r.interpolation||(r.interpolation={escapeValue:!0});const{escape:o,escapeValue:s,useRawValueToEscape:l,prefix:c,prefixEscaped:h,suffix:m,suffixEscaped:f,formatSeparator:p,unescapeSuffix:y,unescapePrefix:w,nestingPrefix:v,nestingPrefixEscaped:E,nestingSuffix:_,nestingSuffixEscaped:D,nestingOptionsSeparator:P,maxReplaces:F,alwaysFormat:$}=r.interpolation;this.escape=o!==void 0?o:Fg,this.escapeValue=s!==void 0?s:!0,this.useRawValueToEscape=l!==void 0?l:!1,this.prefix=c?gr(c):h||"{{",this.suffix=m?gr(m):f||"}}",this.formatSeparator=p||",",this.unescapePrefix=y?"":w||"-",this.unescapeSuffix=this.unescapePrefix?"":y||"",this.nestingPrefix=v?gr(v):E||gr("$t("),this.nestingSuffix=_?gr(_):D||gr(")"),this.nestingOptionsSeparator=P||",",this.maxReplaces=F||1e3,this.alwaysFormat=$!==void 0?$:!1,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){const r=(o,s)=>o&&o.source===s?(o.lastIndex=0,o):new RegExp(s,"g");this.regexp=r(this.regexp,`${this.prefix}(.+?)${this.suffix}`),this.regexpUnescape=r(this.regexpUnescape,`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),this.nestingRegexp=r(this.nestingRegexp,`${this.nestingPrefix}(.+?)${this.nestingSuffix}`)}interpolate(r,o,s,l){let c,h,m;const f=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{},p=E=>{if(E.indexOf(this.formatSeparator)<0){const F=Xd(o,f,E,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(F,void 0,s,{...l,...o,interpolationkey:E}):F}const _=E.split(this.formatSeparator),D=_.shift().trim(),P=_.join(this.formatSeparator).trim();return this.format(Xd(o,f,D,this.options.keySeparator,this.options.ignoreJSONStructure),P,s,{...l,...o,interpolationkey:D})};this.resetRegExp();const y=l&&l.missingInterpolationHandler||this.options.missingInterpolationHandler,w=l&&l.interpolation&&l.interpolation.skipOnVariables!==void 0?l.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:E=>Ys(E)},{regex:this.regexp,safeValue:E=>this.escapeValue?Ys(this.escape(E)):Ys(E)}].forEach(E=>{for(m=0;c=E.regex.exec(r);){const _=c[1].trim();if(h=p(_),h===void 0)if(typeof y=="function"){const P=y(r,c,l);h=ne(P)?P:""}else if(l&&Object.prototype.hasOwnProperty.call(l,_))h="";else if(w){h=c[0];continue}else this.logger.warn(`missed to pass in variable ${_} for interpolating ${r}`),h="";else!ne(h)&&!this.useRawValueToEscape&&(h=Hd(h));const D=E.safeValue(h);if(r=r.replace(c[0],D),w?(E.regex.lastIndex+=h.length,E.regex.lastIndex-=c[0].length):E.regex.lastIndex=0,m++,m>=this.maxReplaces)break}}),r}nest(r,o){let s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},l,c,h;const m=(f,p)=>{const y=this.nestingOptionsSeparator;if(f.indexOf(y)<0)return f;const w=f.split(new RegExp(`${y}[ ]*{`));let v=`{${w[1]}`;f=w[0],v=this.interpolate(v,h);const E=v.match(/'/g),_=v.match(/"/g);(E&&E.length%2===0&&!_||_.length%2!==0)&&(v=v.replace(/'/g,'"'));try{h=JSON.parse(v),p&&(h={...p,...h})}catch(D){return this.logger.warn(`failed parsing options string in nesting for key ${f}`,D),`${f}${y}${v}`}return h.defaultValue&&h.defaultValue.indexOf(this.prefix)>-1&&delete h.defaultValue,f};for(;l=this.nestingRegexp.exec(r);){let f=[];h={...s},h=h.replace&&!ne(h.replace)?h.replace:h,h.applyPostProcessor=!1,delete h.defaultValue;let p=!1;if(l[0].indexOf(this.formatSeparator)!==-1&&!/{.*}/.test(l[1])){const y=l[1].split(this.formatSeparator).map(w=>w.trim());l[1]=y.shift(),f=y,p=!0}if(c=o(m.call(this,l[1].trim(),h),h),c&&l[0]===r&&!ne(c))return c;ne(c)||(c=Hd(c)),c||(this.logger.warn(`missed to resolve ${l[1]} for nesting ${r}`),c=""),p&&(c=f.reduce((y,w)=>this.format(y,w,s.lng,{...s,interpolationkey:l[1].trim()}),c.trim())),r=r.replace(l[0],c),this.regexp.lastIndex=0}return r}}const Xg=i=>{let r=i.toLowerCase().trim();const o={};if(i.indexOf("(")>-1){const s=i.split("(");r=s[0].toLowerCase().trim();const l=s[1].substring(0,s[1].length-1);r==="currency"&&l.indexOf(":")<0?o.currency||(o.currency=l.trim()):r==="relativetime"&&l.indexOf(":")<0?o.range||(o.range=l.trim()):l.split(";").forEach(h=>{if(h){const[m,...f]=h.split(":"),p=f.join(":").trim().replace(/^'+|'+$/g,""),y=m.trim();o[y]||(o[y]=p),p==="false"&&(o[y]=!1),p==="true"&&(o[y]=!0),isNaN(p)||(o[y]=parseInt(p,10))}})}return{formatName:r,formatOptions:o}},yr=i=>{const r={};return(o,s,l)=>{let c=l;l&&l.interpolationkey&&l.formatParams&&l.formatParams[l.interpolationkey]&&l[l.interpolationkey]&&(c={...c,[l.interpolationkey]:void 0});const h=s+JSON.stringify(c);let m=r[h];return m||(m=i(Fi(s),l),r[h]=m),m(o)}};class Zg{constructor(){let r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=zt.create("formatter"),this.options=r,this.formats={number:yr((o,s)=>{const l=new Intl.NumberFormat(o,{...s});return c=>l.format(c)}),currency:yr((o,s)=>{const l=new Intl.NumberFormat(o,{...s,style:"currency"});return c=>l.format(c)}),datetime:yr((o,s)=>{const l=new Intl.DateTimeFormat(o,{...s});return c=>l.format(c)}),relativetime:yr((o,s)=>{const l=new Intl.RelativeTimeFormat(o,{...s});return c=>l.format(c,s.range||"day")}),list:yr((o,s)=>{const l=new Intl.ListFormat(o,{...s});return c=>l.format(c)})},this.init(r)}init(r){let o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};this.formatSeparator=o.interpolation.formatSeparator||","}add(r,o){this.formats[r.toLowerCase().trim()]=o}addCached(r,o){this.formats[r.toLowerCase().trim()]=yr(o)}format(r,o,s){let l=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const c=o.split(this.formatSeparator);if(c.length>1&&c[0].indexOf("(")>1&&c[0].indexOf(")")<0&&c.find(m=>m.indexOf(")")>-1)){const m=c.findIndex(f=>f.indexOf(")")>-1);c[0]=[c[0],...c.splice(1,m)].join(this.formatSeparator)}return c.reduce((m,f)=>{const{formatName:p,formatOptions:y}=Xg(f);if(this.formats[p]){let w=m;try{const v=l&&l.formatParams&&l.formatParams[l.interpolationkey]||{},E=v.locale||v.lng||l.locale||l.lng||s;w=this.formats[p](m,E,{...y,...l,...v})}catch(v){this.logger.warn(v)}return w}else this.logger.warn(`there was no format function for ${p}`);return m},r)}}const ey=(i,r)=>{i.pending[r]!==void 0&&(delete i.pending[r],i.pendingCount--)};class ty extends Ui{constructor(r,o,s){let l=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};super(),this.backend=r,this.store=o,this.services=s,this.languageUtils=s.languageUtils,this.options=l,this.logger=zt.create("backendConnector"),this.waitingReads=[],this.maxParallelReads=l.maxParallelReads||10,this.readingCalls=0,this.maxRetries=l.maxRetries>=0?l.maxRetries:5,this.retryTimeout=l.retryTimeout>=1?l.retryTimeout:350,this.state={},this.queue=[],this.backend&&this.backend.init&&this.backend.init(s,l.backend,l)}queueLoad(r,o,s,l){const c={},h={},m={},f={};return r.forEach(p=>{let y=!0;o.forEach(w=>{const v=`${p}|${w}`;!s.reload&&this.store.hasResourceBundle(p,w)?this.state[v]=2:this.state[v]<0||(this.state[v]===1?h[v]===void 0&&(h[v]=!0):(this.state[v]=1,y=!1,h[v]===void 0&&(h[v]=!0),c[v]===void 0&&(c[v]=!0),f[w]===void 0&&(f[w]=!0)))}),y||(m[p]=!0)}),(Object.keys(c).length||Object.keys(h).length)&&this.queue.push({pending:h,pendingCount:Object.keys(h).length,loaded:{},errors:[],callback:l}),{toLoad:Object.keys(c),pending:Object.keys(h),toLoadLanguages:Object.keys(m),toLoadNamespaces:Object.keys(f)}}loaded(r,o,s){const l=r.split("|"),c=l[0],h=l[1];o&&this.emit("failedLoading",c,h,o),!o&&s&&this.store.addResourceBundle(c,h,s,void 0,void 0,{skipCopy:!0}),this.state[r]=o?-1:2,o&&s&&(this.state[r]=0);const m={};this.queue.forEach(f=>{Ng(f.loaded,[c],h),ey(f,r),o&&f.errors.push(o),f.pendingCount===0&&!f.done&&(Object.keys(f.loaded).forEach(p=>{m[p]||(m[p]={});const y=f.loaded[p];y.length&&y.forEach(w=>{m[p][w]===void 0&&(m[p][w]=!0)})}),f.done=!0,f.errors.length?f.callback(f.errors):f.callback())}),this.emit("loaded",m),this.queue=this.queue.filter(f=>!f.done)}read(r,o,s){let l=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0,c=arguments.length>4&&arguments[4]!==void 0?arguments[4]:this.retryTimeout,h=arguments.length>5?arguments[5]:void 0;if(!r.length)return h(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:r,ns:o,fcName:s,tried:l,wait:c,callback:h});return}this.readingCalls++;const m=(p,y)=>{if(this.readingCalls--,this.waitingReads.length>0){const w=this.waitingReads.shift();this.read(w.lng,w.ns,w.fcName,w.tried,w.wait,w.callback)}if(p&&y&&l<this.maxRetries){setTimeout(()=>{this.read.call(this,r,o,s,l+1,c*2,h)},c);return}h(p,y)},f=this.backend[s].bind(this.backend);if(f.length===2){try{const p=f(r,o);p&&typeof p.then=="function"?p.then(y=>m(null,y)).catch(m):m(null,p)}catch(p){m(p)}return}return f(r,o,m)}prepareLoading(r,o){let s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},l=arguments.length>3?arguments[3]:void 0;if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),l&&l();ne(r)&&(r=this.languageUtils.toResolveHierarchy(r)),ne(o)&&(o=[o]);const c=this.queueLoad(r,o,s,l);if(!c.toLoad.length)return c.pending.length||l(),null;c.toLoad.forEach(h=>{this.loadOne(h)})}load(r,o,s){this.prepareLoading(r,o,{},s)}reload(r,o,s){this.prepareLoading(r,o,{reload:!0},s)}loadOne(r){let o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";const s=r.split("|"),l=s[0],c=s[1];this.read(l,c,"read",void 0,void 0,(h,m)=>{h&&this.logger.warn(`${o}loading namespace ${c} for language ${l} failed`,h),!h&&m&&this.logger.log(`${o}loaded namespace ${c} for language ${l}`,m),this.loaded(r,h,m)})}saveMissing(r,o,s,l,c){let h=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{},m=arguments.length>6&&arguments[6]!==void 0?arguments[6]:()=>{};if(this.services.utils&&this.services.utils.hasLoadedNamespace&&!this.services.utils.hasLoadedNamespace(o)){this.logger.warn(`did not save key "${s}" as the namespace "${o}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");return}if(!(s==null||s==="")){if(this.backend&&this.backend.create){const f={...h,isUpdate:c},p=this.backend.create.bind(this.backend);if(p.length<6)try{let y;p.length===5?y=p(r,o,s,l,f):y=p(r,o,s,l),y&&typeof y.then=="function"?y.then(w=>m(null,w)).catch(m):m(null,y)}catch(y){m(y)}else p(r,o,s,l,m,f)}!r||!r[0]||this.store.addResource(r[0],o,s,l)}}}const Zd=()=>({debug:!1,initImmediate:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:i=>{let r={};if(typeof i[1]=="object"&&(r=i[1]),ne(i[1])&&(r.defaultValue=i[1]),ne(i[2])&&(r.tDescription=i[2]),typeof i[2]=="object"||typeof i[3]=="object"){const o=i[3]||i[2];Object.keys(o).forEach(s=>{r[s]=o[s]})}return r},interpolation:{escapeValue:!0,format:i=>i,prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0}}),eh=i=>(ne(i.ns)&&(i.ns=[i.ns]),ne(i.fallbackLng)&&(i.fallbackLng=[i.fallbackLng]),ne(i.fallbackNS)&&(i.fallbackNS=[i.fallbackNS]),i.supportedLngs&&i.supportedLngs.indexOf("cimode")<0&&(i.supportedLngs=i.supportedLngs.concat(["cimode"])),i),Vi=()=>{},ny=i=>{Object.getOwnPropertyNames(Object.getPrototypeOf(i)).forEach(o=>{typeof i[o]=="function"&&(i[o]=i[o].bind(i))})};class ko extends Ui{constructor(){let r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},o=arguments.length>1?arguments[1]:void 0;if(super(),this.options=eh(r),this.services={},this.logger=zt,this.modules={external:[]},ny(this),o&&!this.isInitialized&&!r.isClone){if(!this.options.initImmediate)return this.init(r,o),this;setTimeout(()=>{this.init(r,o)},0)}}init(){var r=this;let o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},s=arguments.length>1?arguments[1]:void 0;this.isInitializing=!0,typeof o=="function"&&(s=o,o={}),!o.defaultNS&&o.defaultNS!==!1&&o.ns&&(ne(o.ns)?o.defaultNS=o.ns:o.ns.indexOf("translation")<0&&(o.defaultNS=o.ns[0]));const l=Zd();this.options={...l,...this.options,...eh(o)},this.options.compatibilityAPI!=="v1"&&(this.options.interpolation={...l.interpolation,...this.options.interpolation}),o.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=o.keySeparator),o.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=o.nsSeparator);const c=y=>y?typeof y=="function"?new y:y:null;if(!this.options.isClone){this.modules.logger?zt.init(c(this.modules.logger),this.options):zt.init(null,this.options);let y;this.modules.formatter?y=this.modules.formatter:typeof Intl<"u"&&(y=Zg);const w=new Qd(this.options);this.store=new Kd(this.options.resources,this.options);const v=this.services;v.logger=zt,v.resourceStore=this.store,v.languageUtils=w,v.pluralResolver=new Qg(w,{prepend:this.options.pluralSeparator,compatibilityJSON:this.options.compatibilityJSON,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),y&&(!this.options.interpolation.format||this.options.interpolation.format===l.interpolation.format)&&(v.formatter=c(y),v.formatter.init(v,this.options),this.options.interpolation.format=v.formatter.format.bind(v.formatter)),v.interpolator=new Jg(this.options),v.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},v.backendConnector=new ty(c(this.modules.backend),v.resourceStore,v,this.options),v.backendConnector.on("*",function(E){for(var _=arguments.length,D=new Array(_>1?_-1:0),P=1;P<_;P++)D[P-1]=arguments[P];r.emit(E,...D)}),this.modules.languageDetector&&(v.languageDetector=c(this.modules.languageDetector),v.languageDetector.init&&v.languageDetector.init(v,this.options.detection,this.options)),this.modules.i18nFormat&&(v.i18nFormat=c(this.modules.i18nFormat),v.i18nFormat.init&&v.i18nFormat.init(this)),this.translator=new Bi(this.services,this.options),this.translator.on("*",function(E){for(var _=arguments.length,D=new Array(_>1?_-1:0),P=1;P<_;P++)D[P-1]=arguments[P];r.emit(E,...D)}),this.modules.external.forEach(E=>{E.init&&E.init(this)})}if(this.format=this.options.interpolation.format,s||(s=Vi),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){const y=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);y.length>0&&y[0]!=="dev"&&(this.options.lng=y[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn("init: no languageDetector is used and no lng is defined"),["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach(y=>{this[y]=function(){return r.store[y](...arguments)}}),["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach(y=>{this[y]=function(){return r.store[y](...arguments),r}});const f=mo(),p=()=>{const y=(w,v)=>{this.isInitializing=!1,this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn("init: i18next is already initialized. You should call init just once!"),this.isInitialized=!0,this.options.isClone||this.logger.log("initialized",this.options),this.emit("initialized",this.options),f.resolve(v),s(w,v)};if(this.languages&&this.options.compatibilityAPI!=="v1"&&!this.isInitialized)return y(null,this.t.bind(this));this.changeLanguage(this.options.lng,y)};return this.options.resources||!this.options.initImmediate?p():setTimeout(p,0),f}loadResources(r){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Vi;const l=ne(r)?r:this.language;if(typeof r=="function"&&(s=r),!this.options.resources||this.options.partialBundledLanguages){if(l&&l.toLowerCase()==="cimode"&&(!this.options.preload||this.options.preload.length===0))return s();const c=[],h=m=>{if(!m||m==="cimode")return;this.services.languageUtils.toResolveHierarchy(m).forEach(p=>{p!=="cimode"&&c.indexOf(p)<0&&c.push(p)})};l?h(l):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(f=>h(f)),this.options.preload&&this.options.preload.forEach(m=>h(m)),this.services.backendConnector.load(c,this.options.ns,m=>{!m&&!this.resolvedLanguage&&this.language&&this.setResolvedLanguage(this.language),s(m)})}else s(null)}reloadResources(r,o,s){const l=mo();return typeof r=="function"&&(s=r,r=void 0),typeof o=="function"&&(s=o,o=void 0),r||(r=this.languages),o||(o=this.options.ns),s||(s=Vi),this.services.backendConnector.reload(r,o,c=>{l.resolve(),s(c)}),l}use(r){if(!r)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!r.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return r.type==="backend"&&(this.modules.backend=r),(r.type==="logger"||r.log&&r.warn&&r.error)&&(this.modules.logger=r),r.type==="languageDetector"&&(this.modules.languageDetector=r),r.type==="i18nFormat"&&(this.modules.i18nFormat=r),r.type==="postProcessor"&&Wh.addPostProcessor(r),r.type==="formatter"&&(this.modules.formatter=r),r.type==="3rdParty"&&this.modules.external.push(r),this}setResolvedLanguage(r){if(!(!r||!this.languages)&&!(["cimode","dev"].indexOf(r)>-1))for(let o=0;o<this.languages.length;o++){const s=this.languages[o];if(!(["cimode","dev"].indexOf(s)>-1)&&this.store.hasLanguageSomeTranslations(s)){this.resolvedLanguage=s;break}}}changeLanguage(r,o){var s=this;this.isLanguageChangingTo=r;const l=mo();this.emit("languageChanging",r);const c=f=>{this.language=f,this.languages=this.services.languageUtils.toResolveHierarchy(f),this.resolvedLanguage=void 0,this.setResolvedLanguage(f)},h=(f,p)=>{p?(c(p),this.translator.changeLanguage(p),this.isLanguageChangingTo=void 0,this.emit("languageChanged",p),this.logger.log("languageChanged",p)):this.isLanguageChangingTo=void 0,l.resolve(function(){return s.t(...arguments)}),o&&o(f,function(){return s.t(...arguments)})},m=f=>{!r&&!f&&this.services.languageDetector&&(f=[]);const p=ne(f)?f:this.services.languageUtils.getBestMatchFromCodes(f);p&&(this.language||c(p),this.translator.language||this.translator.changeLanguage(p),this.services.languageDetector&&this.services.languageDetector.cacheUserLanguage&&this.services.languageDetector.cacheUserLanguage(p)),this.loadResources(p,y=>{h(y,p)})};return!r&&this.services.languageDetector&&!this.services.languageDetector.async?m(this.services.languageDetector.detect()):!r&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(m):this.services.languageDetector.detect(m):m(r),l}getFixedT(r,o,s){var l=this;const c=function(h,m){let f;if(typeof m!="object"){for(var p=arguments.length,y=new Array(p>2?p-2:0),w=2;w<p;w++)y[w-2]=arguments[w];f=l.options.overloadTranslationOptionHandler([h,m].concat(y))}else f={...m};f.lng=f.lng||c.lng,f.lngs=f.lngs||c.lngs,f.ns=f.ns||c.ns,f.keyPrefix!==""&&(f.keyPrefix=f.keyPrefix||s||c.keyPrefix);const v=l.options.keySeparator||".";let E;return f.keyPrefix&&Array.isArray(h)?E=h.map(_=>`${f.keyPrefix}${v}${_}`):E=f.keyPrefix?`${f.keyPrefix}${v}${h}`:h,l.t(E,f)};return ne(r)?c.lng=r:c.lngs=r,c.ns=o,c.keyPrefix=s,c}t(){return this.translator&&this.translator.translate(...arguments)}exists(){return this.translator&&this.translator.exists(...arguments)}setDefaultNamespace(r){this.options.defaultNS=r}hasLoadedNamespace(r){let o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;const s=o.lng||this.resolvedLanguage||this.languages[0],l=this.options?this.options.fallbackLng:!1,c=this.languages[this.languages.length-1];if(s.toLowerCase()==="cimode")return!0;const h=(m,f)=>{const p=this.services.backendConnector.state[`${m}|${f}`];return p===-1||p===0||p===2};if(o.precheck){const m=o.precheck(this,h);if(m!==void 0)return m}return!!(this.hasResourceBundle(s,r)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||h(s,r)&&(!l||h(c,r)))}loadNamespaces(r,o){const s=mo();return this.options.ns?(ne(r)&&(r=[r]),r.forEach(l=>{this.options.ns.indexOf(l)<0&&this.options.ns.push(l)}),this.loadResources(l=>{s.resolve(),o&&o(l)}),s):(o&&o(),Promise.resolve())}loadLanguages(r,o){const s=mo();ne(r)&&(r=[r]);const l=this.options.preload||[],c=r.filter(h=>l.indexOf(h)<0&&this.services.languageUtils.isSupportedCode(h));return c.length?(this.options.preload=l.concat(c),this.loadResources(h=>{s.resolve(),o&&o(h)}),s):(o&&o(),Promise.resolve())}dir(r){if(r||(r=this.resolvedLanguage||(this.languages&&this.languages.length>0?this.languages[0]:this.language)),!r)return"rtl";const o=["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"],s=this.services&&this.services.languageUtils||new Qd(Zd());return o.indexOf(s.getLanguagePartFromCode(r))>-1||r.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}static createInstance(){let r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},o=arguments.length>1?arguments[1]:void 0;return new ko(r,o)}cloneInstance(){let r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Vi;const s=r.forkResourceStore;s&&delete r.forkResourceStore;const l={...this.options,...r,isClone:!0},c=new ko(l);return(r.debug!==void 0||r.prefix!==void 0)&&(c.logger=c.logger.clone(r)),["store","services","language"].forEach(m=>{c[m]=this[m]}),c.services={...this.services},c.services.utils={hasLoadedNamespace:c.hasLoadedNamespace.bind(c)},s&&(c.store=new Kd(this.store.data,l),c.services.resourceStore=c.store),c.translator=new Bi(c.services,l),c.translator.on("*",function(m){for(var f=arguments.length,p=new Array(f>1?f-1:0),y=1;y<f;y++)p[y-1]=arguments[y];c.emit(m,...p)}),c.init(l,o),c.translator.options=l,c.translator.backendConnector.services.utils={hasLoadedNamespace:c.hasLoadedNamespace.bind(c)},c}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}const ye=ko.createInstance();ye.createInstance=ko.createInstance;ye.createInstance;ye.dir;ye.init;ye.loadResources;ye.reloadResources;ye.use;ye.changeLanguage;ye.getFixedT;ye.t;ye.exists;ye.setDefaultNamespace;ye.hasLoadedNamespace;ye.loadNamespaces;ye.loadLanguages;function ry(){if(console&&console.warn){for(var i=arguments.length,r=new Array(i),o=0;o<i;o++)r[o]=arguments[o];typeof r[0]=="string"&&(r[0]=`react-i18next:: ${r[0]}`),console.warn(...r)}}const th={};function dl(){for(var i=arguments.length,r=new Array(i),o=0;o<i;o++)r[o]=arguments[o];typeof r[0]=="string"&&th[r[0]]||(typeof r[0]=="string"&&(th[r[0]]=new Date),ry(...r))}const Uh=(i,r)=>()=>{if(i.isInitialized)r();else{const o=()=>{setTimeout(()=>{i.off("initialized",o)},0),r()};i.on("initialized",o)}};function nh(i,r,o){i.loadNamespaces(r,Uh(i,o))}function rh(i,r,o,s){typeof o=="string"&&(o=[o]),o.forEach(l=>{i.options.ns.indexOf(l)<0&&i.options.ns.push(l)}),i.loadLanguages(r,Uh(i,s))}function oy(i,r){let o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const s=r.languages[0],l=r.options?r.options.fallbackLng:!1,c=r.languages[r.languages.length-1];if(s.toLowerCase()==="cimode")return!0;const h=(m,f)=>{const p=r.services.backendConnector.state[`${m}|${f}`];return p===-1||p===2};return o.bindI18n&&o.bindI18n.indexOf("languageChanging")>-1&&r.services.backendConnector.backend&&r.isLanguageChangingTo&&!h(r.isLanguageChangingTo,i)?!1:!!(r.hasResourceBundle(s,i)||!r.services.backendConnector.backend||r.options.resources&&!r.options.partialBundledLanguages||h(s,i)&&(!l||h(c,i)))}function iy(i,r){let o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return!r.languages||!r.languages.length?(dl("i18n.languages were undefined or empty",r.languages),!0):r.options.ignoreJSONStructure!==void 0?r.hasLoadedNamespace(i,{lng:o.lng,precheck:(l,c)=>{if(o.bindI18n&&o.bindI18n.indexOf("languageChanging")>-1&&l.services.backendConnector.backend&&l.isLanguageChangingTo&&!c(l.isLanguageChangingTo,i))return!1}}):oy(i,r,o)}const ay=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,sy={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"',"&nbsp;":" ","&#160;":" ","&copy;":"©","&#169;":"©","&reg;":"®","&#174;":"®","&hellip;":"…","&#8230;":"…","&#x2F;":"/","&#47;":"/"},ly=i=>sy[i],uy=i=>i.replace(ay,ly);let hl={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0,unescape:uy};function cy(){let i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};hl={...hl,...i}}function dy(){return hl}let qh;function hy(i){qh=i}function my(){return qh}const fy={type:"3rdParty",init(i){cy(i.options.react),hy(i)}},py=A.createContext();class gy{constructor(){this.usedNamespaces={}}addUsedNamespaces(r){r.forEach(o=>{this.usedNamespaces[o]||(this.usedNamespaces[o]=!0)})}getUsedNamespaces(){return Object.keys(this.usedNamespaces)}}const yy=(i,r)=>{const o=A.useRef();return A.useEffect(()=>{o.current=i},[i,r]),o.current};function Cl(i){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{i18n:o}=r,{i18n:s,defaultNS:l}=A.useContext(py)||{},c=o||s||my();if(c&&!c.reportNamespaces&&(c.reportNamespaces=new gy),!c){dl("You will need to pass in an i18next instance by using initReactI18next");const q=(J,H)=>typeof H=="string"?H:H&&typeof H=="object"&&typeof H.defaultValue=="string"?H.defaultValue:Array.isArray(J)?J[J.length-1]:J,z=[q,{},!1];return z.t=q,z.i18n={},z.ready=!1,z}c.options.react&&c.options.react.wait!==void 0&&dl("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");const h={...dy(),...c.options.react,...r},{useSuspense:m,keyPrefix:f}=h;let p=l||c.options&&c.options.defaultNS;p=typeof p=="string"?[p]:p||["translation"],c.reportNamespaces.addUsedNamespaces&&c.reportNamespaces.addUsedNamespaces(p);const y=(c.isInitialized||c.initializedStoreOnce)&&p.every(q=>iy(q,c,h));function w(){return c.getFixedT(r.lng||null,h.nsMode==="fallback"?p:p[0],f)}const[v,E]=A.useState(w);let _=p.join();r.lng&&(_=`${r.lng}${_}`);const D=yy(_),P=A.useRef(!0);A.useEffect(()=>{const{bindI18n:q,bindI18nStore:z}=h;P.current=!0,!y&&!m&&(r.lng?rh(c,r.lng,p,()=>{P.current&&E(w)}):nh(c,p,()=>{P.current&&E(w)})),y&&D&&D!==_&&P.current&&E(w);function J(){P.current&&E(w)}return q&&c&&c.on(q,J),z&&c&&c.store.on(z,J),()=>{P.current=!1,q&&c&&q.split(" ").forEach(H=>c.off(H,J)),z&&c&&z.split(" ").forEach(H=>c.store.off(H,J))}},[c,_]);const F=A.useRef(!0);A.useEffect(()=>{P.current&&!F.current&&E(w),F.current=!1},[c,f]);const $=[v,c,y];if($.t=v,$.i18n=c,$.ready=y,y||!y&&!m)return $;throw new Promise(q=>{r.lng?rh(c,r.lng,p,()=>q()):nh(c,p,()=>q())})}const vy="SixStrings App",wy={rhythm:"Rhythm Trainer",chords:"Chords, Arpeggios, Scales",harmony:"Harmony","circle-of-fifths":"Circle of Fifths","scales-fretboard-explorer":"Fretboard Explorer. Chords and Scales","chord-identifier":"Chord Identifier","scale-identifier":"Scale Finder","string-selector":"String Selector","random-key-selector":"Random Key Selector","rhythm-generator":"Rhythm Generator","rhythm-metronome":"Rhythm Metronome","strumming-patterns-library":"Strumming Patterns Library","caged-explorer":"CAGED System","microtone-trainer":"Microtone Discrimination Trainer","interval-trainer":"Interval Recognition Trainer","chord-functions-trainer":"Chord Functions Trainer","song-builder":"Song Builder",feedback:"Feedback","not-found":"Page Not Found",blog:"Blog",theory:"Theory"},by={rhythm:{title:"Guitar Rhythm Trainer Online",description:"Free online guitar rhythm trainer with playable patterns, tempo control, and practice modes for timing and groove.",keywords:"guitar rhythm trainer, rhythm practice, rhythm exercises, online rhythm trainer, guitar timing"},chords:{title:"Guitar Chord Generator, Fingerings and Arpeggios",description:"Free online guitar chord generator with fingerings, inversions, arpeggios, and compatible scales for guitar, bass, and ukulele.",keywords:"guitar chord generator, guitar chords, chord fingerings, guitar arpeggios, chord finder"},harmony:{title:"Harmony Analyzer: Cadences, Modulations, Chords",description:"Free online harmony analyzer with diatonic chords, cadences, and modulation paths for practical guitar music theory.",keywords:"harmony analyzer, chord progressions, cadences, modulation, guitar music theory"},"song-builder":{title:"Song Builder: Chord Progression Maker",description:"Free online song builder for key-based or custom chord progressions with playback and songwriting practice workflows.",keywords:"song builder, chord progression maker, progression generator, songwriting tool, guitar songwriting"},"circle-of-fifths":{title:"Interactive Circle of Fifths for Guitar",description:"Free online interactive circle of fifths to study key signatures, relative keys, and harmonic relationships on guitar.",keywords:"circle of fifths, interactive circle of fifths, key signatures, music theory, guitar keys"},"scales-fretboard-explorer":{title:"Guitar Fretboard Explorer: Chords and Scales",description:"Free online guitar fretboard explorer for notes, intervals, chords, and scales across the neck.",keywords:"guitar fretboard explorer, guitar scale finder, guitar note map, chord and scale explorer, fretboard notes"},"chord-identifier":{title:"Guitar Chord Identifier by Notes",description:"Free online chord identifier by notes on the guitar fretboard with chord name and variant detection.",keywords:"guitar chord identifier, identify chord by notes, chord name finder, fretboard chord detector"},"scale-identifier":{title:"Scale Finder by Notes on Guitar Fretboard",description:"Free online scale finder by selected guitar notes to explore matching scales for improvisation and composition.",keywords:"scale finder, scale identifier, guitar scale finder by notes, fretboard scale tool"},"string-selector":{title:"String Tension Calculator and String Gauge Selector",description:"Free online string tension calculator and gauge selector by instrument, tuning, and scale length for guitar or bass.",keywords:"string tension calculator, guitar string gauge calculator, bass string tension, string selector"},"random-key-selector":{title:"Random Key Generator for Music Practice",description:"Free online random key generator for daily practice blocks, ear training sessions, and improvisation drills.",keywords:"random key generator, key practice, random scale practice, guitar practice keys, music modes"},"rhythm-generator":{title:"Rhythm Pattern Generator Online",description:"Free online rhythm pattern generator with flexible time signatures, subdivisions, accents, and tempo settings.",keywords:"rhythm pattern generator, rhythm generator online, drum rhythm patterns, time signature practice"},"rhythm-metronome":{title:"Online Metronome and Drum Pattern Builder",description:"Free online metronome and drum pattern builder with editable grid, progressive tempo, and groove presets.",keywords:"online metronome, drum pattern builder, metronome with subdivisions, tempo trainer, polyrhythm metronome"},"strumming-patterns-library":{title:"Guitar Strumming Patterns Library",description:"Browse guitar strumming patterns by meter, hear two-bar loops, and save favorites locally.",keywords:"strumming patterns guitar, guitar rhythm patterns, strumming library, guitar groove practice"},"caged-explorer":{title:"CAGED System Explorer for Guitar",description:"Free online CAGED system explorer for guitar chord shapes and connected fretboard positions.",keywords:"CAGED system, CAGED guitar, guitar chord shapes, fretboard positions, guitar theory"},"microtone-trainer":{title:"Microtone Ear Training Tool",description:"Free online microtone ear trainer for pitch discrimination from wide to tiny cent differences.",keywords:"microtone trainer, pitch discrimination training, ear training cents, microtonal ear practice"},"interval-trainer":{title:"Interval Ear Trainer Online",description:"Free online interval ear trainer with audio drills for major, minor, perfect, augmented, and diminished intervals.",keywords:"interval ear trainer, interval recognition, music interval practice, ear training online"},"chord-functions-trainer":{title:"Chord Function Ear Trainer",description:"Free online chord function trainer to hear tonic, subdominant, dominant, and other harmonic roles.",keywords:"chord functions trainer, harmonic function training, tonic dominant subdominant, ear training harmony"},feedback:{title:"Feedback and Feature Requests",description:"Share feedback, bug reports, and feature requests for SixStrings App to improve tools for musicians.",keywords:"feedback, reviews, suggestions, guitar helper, feedback form"},"not-found":{title:"Page Not Found",description:"The page you're looking for doesn't exist. Find your way back to our music training tools and guitar utilities. Explore rhythm trainers, chord generators, and ear training exercises.",keywords:"404, page not found, guitar tools, music training, rhythm trainer, chord generator, music theory"},blog:{title:"Guitar blog: practical free online guides",description:"Practical SEO guides for chords, rhythm, harmony, and ear training. Every tool works online, free, with no installation.",keywords:"guitar blog, guitar guides, music theory guitar, online guitar tools"},theory:{title:"Music theory articles for guitar practice",description:"Music theory section focused on intervals, modes, harmony, rhythm, and practical guitar application.",keywords:"music theory for guitar, intervals, modes, harmony, rhythm, guitar theory articles"}},ky={theme:"Toggle theme",switchToRussian:"Переключить на русский"},Sy={rhythm_trainer:"Rhythm Trainer",rhythm_generator:"Rhythm Generator",rhythm_metronome:"Rhythm Metronome",strumming_patterns_library:"Strumming Patterns",harmony_generator:"Harmony",chord_generator:"Chords, Arpeggios, Scales",circle_of_fifths:"Circle of Fifths",scale_fretboard_explorer:"Chord & Scale Explorer",caged_explorer:"CAGED System",chord_identifier:"Chord Identifier",scale_identifier:"Scale Finder",microtone_trainer:"Microtone Trainer",chord_functions_trainer:"Chord Functions Trainer",intervals_trainer:"Interval Trainer β",song_builder:"Song Builder",more:"More",string_selector:"String Selector",random_key_selector:"Random Key",blog:"Blog",theory:"Theory",categories:{rhythm:"Rhythm",harmony:"Harmony",fretboard:"Fretboard",ear:"Ear Training",tools:"Tools",articles:"Articles"}},Iy={index:{heading:"Music Theory",subtitle:"Practice-oriented theory articles with guitar focus.",openArticle:"Read",readerLevels:"Reader levels",categories:"Categories",tags:"Tags",readerLevel:"Reader level",draftBadge:"Draft",noPosts:"No published articles yet."},readerLevelsMeta:{listener:{label:"Listener",description:"The starting point: sound, silence, pitch, pulse, and the first musical words."},player:{label:"Player",description:"Basics for first deliberate actions: rhythm, intervals, notes, and simple exercises."},musician:{label:"Musician",description:"Playable material: fretboard, scales, chords, fingerings, and practical connections."},arranger:{label:"Arranger",description:"Connections between topics: key, functions, cadences, progressions, and form."},composer:{label:"Composer",description:"Deeper work: modes, modulations, extended harmony, intonation, and compositional choices."}},post:{theory:"Music Theory",categories:"Categories",tags:"Tags",readerLevel:"Reader level",draftBadge:"Draft",tocTitle:"Contents",backToToc:"back to contents",articleNavigationTitle:"Article navigation",previousArticle:"Previous article",nextArticle:"Next article"},category:{titlePrefix:"Category",subtitlePrefix:"Articles on",openArticle:"Read",readerLevel:"Reader level",allTheory:"All theory articles",notFound:"Category not found"},tag:{titlePrefix:"Tag",subtitlePrefix:"Articles tagged",openArticle:"Read",readerLevel:"Reader level",allTheory:"All theory articles",noPosts:"No articles for this tag yet."},level:{titlePrefix:"Level",subtitlePrefix:"Articles for level",openArticle:"Read",allTheory:"All theory articles",noPosts:"No articles for this level yet."}},xy={index:{heading:"Blog",subtitle:"Practice-focused posts: chords, rhythm, harmony, and ear training.",works:"",openArticle:"Read article",draftBadge:"Draft",rssAriaLabel:"Blog RSS feed"},post:{blog:"Blog",ctaDefault:"Open the tool",works:"Works online, free, with no installation.",draftBadge:"Draft",tocTitle:"Contents",backToToc:"back to contents",articleNavigationTitle:"Article navigation",previousArticle:"Previous article",nextArticle:"Next article"},tag:{titlePrefix:"Tag",subtitlePrefix:"Articles tagged",openArticle:"Read article",allBlog:"All blog articles",noPosts:"No articles for this tag yet."}},Ty={soundSettings:"Sound settings",instrumentsTitle:"Instruments",instrumentsHint:"Select one or more instruments to blend the sound.",selectedInstrumentsLabel:"Selected instruments",editInstruments:"Choose instruments",audioSettingsTitle:"Sound settings",audioEngineTitle:"Audio Engine",audioEngineHint:"Choose MIDI (built-in SoundFont instruments), internal synthesis, or external MIDI output. External modes fall back to internal sound when unavailable.",audioEngineInternal:"Internal",audioEngineSoundfont:"MIDI",audioEngineMidiAuto:"External MIDI",soundfontHint:"Uses built-in General MIDI SoundFont instruments inside the browser. The first play may need extra loading time.",soundfontNotSupported:"This browser does not support the required Web Audio features. Internal engine will be used.",soundfontFallback:"SoundFont playback failed for this sound. Internal engine fallback is active.",midiDeviceLabel:"MIDI output device",midiNoDevices:"No MIDI outputs found",midiNotSupported:"Web MIDI is not supported in this browser. Internal engine will be used.",midiNoDevicesFallback:"No active MIDI outputs. Playback falls back to internal engine.",done:"Done",instruments:{guitar:"Guitar",piano:"Piano",violin:"Violins",woodwind:"Woodwinds",flute:"Flutes",synth:"Synthesizer",organ:"Organ",brightPiano:"Bright Piano",celesta:"Celesta",electricPiano1:"Electric Piano 1",electricPiano2:"Electric Piano 2",harpsichord:"Harpsichord",clavinet:"Clavinet",stringEnsemble1:"String Ensemble 1",stringEnsemble2:"String Ensemble 2",choirAahs:"Choir Aahs",voiceOohs:"Voice Oohs",brassSection:"Brass Section",frenchHorn:"French Horn",electricGuitarClean:"Electric Guitar Clean",electricGuitarJazz:"Electric Guitar Jazz",synthStrings1:"Synth Strings 1",synthStrings2:"Synth Strings 2",padWarm:"Pad Warm",padPolysynth:"Pad Polysynth",padChoir:"Pad Choir",drawbarOrgan:"Drawbar Organ",rockOrgan:"Rock Organ"}},Cy={title:"Song Builder",baseKey:"Base Key",note:"Note",alteration:"Alteration",modeScale:"Mode / Scale",diatonicGroup:"Diatonic",harmonicGroup:"Harmonic",melodicGroup:"Melodic",chordPalette:"Chord Palette",chordsInScale:"Chords in scale",allChords:"All Chords",sharps:"Sharps",flats:"Flats",dragInstruction:"Drag chords to the song block or click to play",dragToAdd:"Drag to add or click to play",base:"base",gridResolution:"Grid Resolution",gridResolutionHint:"Grid resolution determines the minimum step for placing and resizing chords",zoom:"Zoom",songBuilder:"Song Builder",play:"Play",stop:"Stop",clear:"Clear",confirmClear:"Clear the entire song?",remove:"Remove",timeSignature:"Time Signature",bpm:"BPM",drumVolume:"Metronome Volume",songVolume:"Song Volume",playbackStart:"Start",playbackEnd:"End",playbackFragment:"Fragment",loopPlayback:"Loop",loopPlaybackOn:"Loop mode: on",loopPlaybackOff:"Loop mode: off",fullSong:"Full song",addRow:"Add row",deleteRow:"Delete row",cannotDeleteRowWithChords:"Cannot delete row with chords",cannotSaveEmpty:"Cannot save empty song",enterSongName:"Enter song name:",saveToFavorites:"Save to Favorites",savedToFavorites:"Saved to favorites!",favorites:"Favorites",exportMidi:"Export MIDI",cancel:"Cancel",favoritesModal:{title:"Favorite Songs",empty:"No saved songs yet. Create a song and save it to favorites!",chords:"chords",resolution:"resolution",load:"Load",delete:"Delete",confirmDelete:"Delete this song from favorites?"},randomProgression:"Random cadence",songStructureGenerator:"Song structure generator",selectCadence:"Select Cadence",structureModal:{title:"Song structure presets",subtitle:"Select a structure to generate grouped song sections",cancel:"Cancel",emptyResult:"Could not generate song sections for this structure"},structurePresets:{items:{"simple-verse-chorus":{name:"Simple Verse / Chorus",description:"Compact ABAB form."},"classic-pop-rock":{name:"Classic Pop / Rock",description:"Traditional full-song arc."},"modern-pop":{name:"Modern Pop",description:"Pre-chorus build with final chorus."},"short-pop-song":{name:"Short Pop Song",description:"Short pop cycle."},"extended-pop-song":{name:"Extended Pop Song",description:"Long form with post-chorus hooks."},"rock-standard":{name:"Rock Standard",description:"Classic rock with solo."},"alternative-rock":{name:"Alternative Rock",description:"Verse-led alt-rock structure."},"indie-rock-pop":{name:"Indie Rock / Indie Pop",description:"Indie form with instrumental section."},"folk-strophic":{name:"Folk Strophic",description:"Four repeated verses."},"folk-with-refrain":{name:"Folk With Refrain",description:"Verse and refrain alternation."},"singer-songwriter":{name:"Singer-Songwriter",description:"Acoustic verse-heavy arrangement."},ballad:{name:"Ballad",description:"Wide emotional dynamic arc."},"power-ballad":{name:"Power Ballad",description:"Ballad with solo and bridge climax."},"aaba-standard":{name:"AABA Standard",description:"Classic AABA cycle."},"aaba-intro-outro":{name:"AABA With Intro and Outro",description:"AABA with frame sections."},ababcb:{name:"ABABCB",description:"Alternating AB with bridge."},abab:{name:"ABAB",description:"Minimal AB alternation."},ababcbb:{name:"ABABCBB",description:"Extended AB with double chorus ending."},"aaa-strophic":{name:"AAA Strophic",description:"Three-verse strophic form."},"verse-refrain":{name:"Verse / Refrain",description:"Verse narrative with refrain hook."},"hymn-like":{name:"Hymn-Like",description:"Repeated verses with final closing stanza."},"punk-garage-rock":{name:"Punk / Garage Rock",description:"Direct high-energy form."},"metal-heavy-rock":{name:"Metal / Heavy Rock",description:"Heavy arrangement with breakdown and solo."},"progressive-short-form":{name:"Progressive Short Form",description:"Theme-oriented progressive short form."},"instrumental-theme":{name:"Instrumental Theme",description:"Theme and variation cycle."},"instrumental-rock":{name:"Instrumental Rock",description:"Riff-led instrumental structure."},"blues-12-bar":{name:"Blues 12-Bar",description:"Blues chorus cycle with solo chorus."},"blues-with-intro":{name:"Blues With Intro",description:"Blues cycle framed by intro/outro."},"jazz-standard-lead-sheet":{name:"Jazz / Standard Lead Sheet",description:"Head-solo-head standard form."},"loop-electronic-pop":{name:"Loop-Based Electronic / Pop",description:"Build/drop loop arrangement."},"ambient-cinematic":{name:"Ambient / Cinematic",description:"Evolving cinematic arc."},"rap-hip-hop":{name:"Rap / Hip-Hop Song",description:"Verse-hook form with bridge."},"worship-anthem":{name:"Worship / Anthem",description:"Anthem form with repeated bridge lift."},"minimal-practice":{name:"Minimal Practice Structure",description:"Compact section loop for practice."},"songwriting-starter":{name:"Songwriting Starter",description:"Starter form with clear contrast."}},tags:{pop:"pop",short:"short",rock:"rock",radio:"radio",long:"long",solo:"solo",alternative:"alternative",indie:"indie",folk:"folk",strophic:"strophic",refrain:"refrain",acoustic:"acoustic",ballad:"ballad",jazz:"jazz",aaba:"AABA","lead-sheet":"lead sheet",form:"form",extended:"extended",hymn:"hymn",traditional:"traditional",punk:"punk",garage:"garage",metal:"metal",heavy:"heavy",progressive:"progressive",instrumental:"instrumental",riff:"riff",blues:"blues",jam:"jam",classic:"classic",standard:"standard",electronic:"electronic",loop:"loop",rap:"rap","hip-hop":"hip-hop",worship:"worship",anthem:"anthem",practice:"practice",songwriting:"songwriting",starter:"starter",cinematic:"cinematic",theme:"theme"},sectionLabels:{intro:"Intro",verse:"Verse",pre_chorus:"Pre-Chorus",chorus:"Chorus",final_chorus:"Final Chorus",post_chorus:"Post-Chorus",bridge:"Bridge",outro:"Outro",instrumental:"Instrumental",refrain:"Refrain",solo:"Solo",a_section:"A Section",b_section_bridge:"B Section / Bridge",final_verse:"Final Verse",breakdown:"Breakdown",theme_a:"Theme A",theme_b:"Theme B",chorus_1:"Chorus 1",chorus_2:"Chorus 2",solo_chorus:"Solo Chorus",chorus_3:"Chorus 3",head_a:"Head A",bridge_b:"Bridge B",head_out:"Head Out",build_up:"Build-Up",drop_chorus:"Drop / Chorus",final_drop_chorus:"Final Drop / Chorus",theme:"Theme",development:"Development",climax:"Climax",resolution:"Resolution",hook:"Hook",riff_a:"Riff A",riff_b:"Riff B"}},paletteDrag:"Palette drag",chordSelectionTooltip:"Ctrl/Cmd + click chords to select for grouping",moveChordLeft:"Move chord left",moveChordRight:"Move chord right",moveGroupLeft:"Move group left",moveGroupRight:"Move group right",changeDuration:"Change the duration",contextMenu:{inversions:"Inversions",rootPosition:"Root position",inversion:"Inversion",otherBass:"Other bass",defaultBass:"Default bass",noAvailableNotes:"No available notes",groupChords:"Group chords",ungroupChords:"Ungroup chords",copyGroup:"Copy a group",renameGroup:"Rename a group"},cadenceModal:{title:"Select Cadence",exact:"Exact match",inclination:"By inclination",strong:"Strong",medium:"Medium",weak:"Weak",select:"Select",replace:"Replace",add:"Add",cancel:"Cancel",notFound:"No cadences available for this key"}},Ey=JSON.parse('{"baseKey":"Base Key","chords":"Chords","chordsInScale":"Chords in scale","allChords":"All Chords","sharps":"Sharps","flats":"Flats","naturalChords":"Natural Chords","sharpChords":"Sharp Chords (♯)","flatChords":"Flat Chords (♭)","cadences":"Cadences","detailedAnalysis":"Detailed analysis","relatedness":"Relatedness","targetChord":"Target key chord","diatonicChord":"Diatonic chord","cadenceAnalysis":"Cadence analysis","keyInfo":"Key information","wholeStep":"W","halfStep":"H","title":"Harmony","alteration":"Alteration","naturalTooltip":"Natural - no alteration","noteLabel":"Note","modeLabel":"Mode/Scale","playScale":"Scale","sharpTooltip":"Sharp - raised by a semitone","flatTooltip":"Flat - lowered by a semitone","keySelection":"Key Selection","note":"Note","scaleInfo":"Scale Information","tonic":"Tonic","family":"Family","formula":"Formula","intervals":"Intervals","degrees":"Degrees","notes":"Notes","modulations":"Modulations","modeScale":"Mode / Scale","majorFamily":"major","minorFamily":"minor","modalFamily":"modal","diatonicGroup":"Diatonic","harmonicGroup":"Harmonic","melodicGroup":"Melodic","cadencesTitle":"Cadences","progression":"Progression","chordsTitle":"Key Chords","degree":"Degree","romanNumerals":"Roman Numerals","function":"Function","triad":"Triad","seventh":"Seventh","extensions":"Extensions","addedNotes":"Added","modulationsTitle":"Modulations and Related Keys","foundModulations":"Found {{count}} modulations for current mode","chordNotations":"Chord Notations","currentKey":"Current key","targetKey":"Target key","mainModulations":"Main Modulations","modalModulations":"Modal Modulations","chromaticModulations":"Chromatic Modulations","enharmonicModulations":"Enharmonic Modulations","sequentialModulations":"Sequential Modulations","jazzModulations":"Jazz Modulations","modernModulations":"Modern Modulations","specialModulations":"Special Modulations","easy":"Easy","medium":"Medium","hard":"Hard","modulation":"Modulation","return":"Return","returnModulation":"Return Modulation","strong":"strong","weak":"weak","legend":{"pivotFull":"Common chord (Pivot):","title":"Legend:","bold":"Bold with border","pivot":"common chord (pivot)","red":"Red","targetChord":"chord of target key","romanNumerals":"Roman numerals with direction","double":"Double notation"},"allModulations":"All modulations","type":"Type","difficulty":"Difficulty","distance":"Distance","direction":"Direction","tension":"Tension","resolution":"Resolution","button":{"details":"Details","analysis":"Analysis","allModulations":"All modulations","modulation":"Modulation","play":"Play","close":"Close"},"modal":{"title":"Modulation","details":"Modulation details","analysis":"Key analysis"},"section":{"chords":"Chords in scale","cadences":"Cadences","modulations":"Modulations","relatedKeys":"Related keys"},"selectedKey":"Selected key","displayedKey":"Displayed key","equivalentButPractical":"{{key}} is musically equivalent but more practical","keySignature":"Key signature","keySignature.one":"sign","keySignature.few":"signs","keySignature.many":"signs","noKeySignature":"No key signature","fingerings":"Fingerings","modulationDescription":{"Close Relationship":"Close Relationship","Distant Relationship":"Distant Relationship","Modal Relationship":"Modal Relationship","Chromatic Relationship":"Chromatic Relationship","Enharmonic Relationship":"Enharmonic Relationship","Jazz Relationship":"Jazz Relationship","Modern Relationship":"Modern Relationship"},"modulationName":{"Relative Modulation":"Relative Modulation","Parallel Modulation":"Parallel Modulation","Dominant Modulation":"Dominant Modulation","Subdominant Modulation":"Subdominant Modulation","Mediant Modulation":"Mediant Modulation","Submediant Modulation":"Submediant Modulation","Neapolitan Sixth":"Neapolitan Sixth","Augmented Sixth":"Augmented Sixth","Chromatic Mediant":"Chromatic Mediant","Tritone Modulation":"Tritone Modulation","Enharmonic Modulation":"Enharmonic Modulation","Through Diminished Seventh":"Through Diminished Seventh","Enharmonic Through Augmented Sixth":"Enharmonic Through Augmented Sixth","Sequential Up by Tone":"Sequential Up by Tone","Sequential Down by Tone":"Sequential Down by Tone","Sequential Up by Semitone":"Sequential Up by Semitone","Sequential Down by Semitone":"Sequential Down by Semitone","Circle of Fifths":"Circle of Fifths","Modal Interchange":"Modal Interchange","To Dorian Mode":"To Dorian Mode","To Phrygian Mode":"To Phrygian Mode","To Lydian Mode":"To Lydian Mode","To Mixolydian Mode":"To Mixolydian Mode","To Locrian Mode":"To Locrian Mode","Through ii-V":"Through ii-V","Tritone Substitution":"Tritone Substitution","Backdoor":"Backdoor","Side Slipping":"Side Slipping","Chromatic Planing":"Chromatic Planing","Quartal Modulation":"Quartal Modulation","Whole Tone Modulation":"Whole Tone Modulation","Octatonic Modulation":"Octatonic Modulation","Through Pivot Chord":"Through Pivot Chord","Through Common Tone":"Through Common Tone","Stepwise Modulation":"Stepwise Modulation","Elision":"Elision","Deceptive Modulation":"Deceptive Modulation","Abrupt Modulation":"Abrupt Modulation","Phrase Modulation":"Phrase Modulation","Monophonic Modulation":"Monophonic Modulation","Chromatic Voice Leading":"Chromatic Voice Leading"},"cadenceName":{"Perfect Authentic":"Perfect Authentic","Plagal":"Plagal","Deceptive":"Deceptive","Half Cadence":"Half Cadence","Jazz ii7-V7-Imaj7 (Major)":"Jazz ii7-V7-Imaj7 (Major)","Tritone Substitution":"Tritone Substitution","Backdoor":"Backdoor","Minor Authentic":"Minor Authentic","Minor with Predominant":"Minor with Predominant","Minor Plagal":"Minor Plagal","Phrygian Half":"Phrygian Half","Minor Deceptive":"Minor Deceptive","Jazz ii-V-i (Minor)":"Jazz ii-V-i (Minor)","Natural Minor (i-VI-III-VII)":"Natural Minor (i-VI-III-VII)","Minor Modal Vamp (i-v-VI-VII)":"Minor Modal Vamp (i-v-VI-VII)","Minor Epic (i-III-VI-VII)":"Minor Epic (i-III-VI-VII)","Minor Harmonic Cycle (i-iv-V-i)":"Minor Harmonic Cycle (i-iv-V-i)","Minor Descending (i-VII-VI-V)":"Minor Descending (i-VII-VI-V)","Minor Extended Epic (i-iv-VII-III-VI-iv-V)":"Minor Extended Epic (i-iv-VII-III-VI-iv-V)","Minor Subdominant Resolution (i-VII-IV-V)":"Minor Subdominant Resolution (i-VII-IV-V)","Minor Modal Cycle (ii7♭5-v-i)":"Minor Modal Cycle (ii7♭5-v-i)","Minor Neapolitan Progression (i-iv-♭II-III)":"Minor Neapolitan Progression (i-iv-♭II-III)","Minor Blues Seventh Chain (iv7-VII7-v7-i7)":"Minor Blues Seventh Chain (iv7-VII7-v7-i7)","Minor Seventh Mediant (i-iv7-VII-IIImaj7)":"Minor Seventh Mediant (i-iv7-VII-IIImaj7)","Minor Seventh Extended Cycle (i-i7-iv7-v7-VImaj7-v7)":"Minor Seventh Extended Cycle (i-i7-iv7-v7-VImaj7-v7)","Minor Seventh Major Sixth Resolution (VImaj7-iv7-v7-i)":"Minor Seventh Major Sixth Resolution (VImaj7-iv7-v7-i)","Minor Seventh Jazz Cycle (VImaj7-v7-iv7-v7-i7)":"Minor Seventh Jazz Cycle (VImaj7-v7-iv7-v7-i7)","Minor Ninth Subdominant-Tonic (iv-iv7-i7-i9)":"Minor Ninth Subdominant-Tonic (iv-iv7-i7-i9)","Minor Ninth Tonic Vamp (i-vadd11-i-i9)":"Minor Ninth Tonic Vamp (i-vadd11-i-i9)","Minor Ninth Extended Major Mediant (i7-i9-VImaj9-III-VII)":"Minor Ninth Extended Major Mediant (i7-i9-VImaj9-III-VII)","Minor Ninth Subdominant Cycle (iv9-i9-iv7-i9)":"Minor Ninth Subdominant Cycle (iv9-i9-iv7-i9)","Minor Ninth Mediant (i-i9-III-ivsus2-VI-VII)":"Minor Ninth Mediant (i-i9-III-ivsus2-VI-VII)","Minor Ninth Seventh-Subdominant (i9-VII6-III-iv7sus4)":"Minor Ninth Seventh-Subdominant (i9-VII6-III-iv7sus4)","Minor Ninth Modal (i-iv-iv9-VII-v-V)":"Minor Ninth Modal (i-iv-iv9-VII-v-V)","Minor Ninth Subdominant Resolution (iv9-v7-i)":"Minor Ninth Subdominant Resolution (iv9-v7-i)","Minor Ninth Major Sixth (VImaj7-iv9-i7-v7)":"Minor Ninth Major Sixth (VImaj7-iv9-i7-v7)","Minor Ninth Seventh-Dominant (iv9-VIIadd9-v7-i7)":"Minor Ninth Seventh-Dominant (iv9-VIIadd9-v7-i7)","Minor Ninth Eleventh Resolution (iv9-VII-i11)":"Minor Ninth Eleventh Resolution (iv9-VII-i11)","Minor Ninth Suspended Extended (isus4-i-iv9-VII11-VII7)":"Minor Ninth Suspended Extended (isus4-i-iv9-VII11-VII7)","Minor Ninth Complex Dominant (i-iv6add9-iv9-v7sus4-V7)":"Minor Ninth Complex Dominant (i-iv6add9-iv9-v7sus4-V7)","Dorian Vamp":"Dorian Vamp","Dorian Cadence":"Dorian Cadence","Dorian Major Progression (i-VII-III-IV)":"Dorian Major Progression (i-VII-III-IV)","Dorian Modal Resolution (i-v-IV-i)":"Dorian Modal Resolution (i-v-IV-i)","Dorian Mediant Cycle (i-ii-III-ii)":"Dorian Mediant Cycle (i-ii-III-ii)","Dorian Suspended Tonic-Dominant (i-isus4-v-IV)":"Dorian Suspended Tonic-Dominant (i-isus4-v-IV)","Dorian Suspended Subdominant (i-v-IVsus4-IV)":"Dorian Suspended Subdominant (i-v-IVsus4-IV)","Dorian Suspended Mediant (i-III-IVsus4-IV)":"Dorian Suspended Mediant (i-III-IVsus4-IV)","Dorian Suspended Supertonic (i-ii-IV-IVsus4-IV)":"Dorian Suspended Supertonic (i-ii-IV-IVsus4-IV)","Dorian Suspended Dominant-Tonic (i-V-i-IVsus4-IV)":"Dorian Suspended Dominant-Tonic (i-V-i-IVsus4-IV)","Dorian Suspended Seventh (i7-III7-IVsus4-IV)":"Dorian Suspended Seventh (i7-III7-IVsus4-IV)","Dorian Double Suspended (i-III-VIIsus4-IVsus4-IV)":"Dorian Double Suspended (i-III-VIIsus4-IVsus4-IV)","Dorian Suspended Descending (VIIsus4-VII-IVsus4-IV-i)":"Dorian Suspended Descending (VIIsus4-VII-IVsus4-IV-i)","Dorian Suspended Mediant Cycle (III-IV-i-III-vsus4-i)":"Dorian Suspended Mediant Cycle (III-IV-i-III-vsus4-i)","Dorian Seventh Mediant (i7-IIImaj7-ii-IV)":"Dorian Seventh Mediant (i7-IIImaj7-ii-IV)","Dorian Seventh Extended Major (i7-III-IV-i7-III-VIImaj7)":"Dorian Seventh Extended Major (i7-III-IV-i7-III-VIImaj7)","Dorian Ninth Supertonic-Dominant (i7-ii-v9)":"Dorian Ninth Supertonic-Dominant (i7-ii-v9)","Dorian Ninth Seventh Vamp (i9-VIImaj9-i9-VIImaj9)":"Dorian Ninth Seventh Vamp (i9-VIImaj9-i9-VIImaj9)","Phrygian Cadence":"Phrygian Cadence","Phrygian Dominant":"Phrygian Dominant","Phrygian Dark Vamp (i-â™­II-i-viiÂ°)":"Phrygian Dark Vamp (i-♭II-i-vii°)","Phrygian Spanish Resolution (i-â™­II-III)":"Phrygian Spanish Resolution (i-♭II-III)","Phrygian Seventh Major (i-â™­IImaj7-â™­VImaj7-vii7sus2)":"Phrygian Seventh Major (i-♭IImaj7-♭VImaj7-vii7sus2)","Lydian Resolution":"Lydian Resolution","Lydian Cadence":"Lydian Cadence","Lydian Bright Vamp (I-II-I-II)":"Lydian Bright Vamp (I-II-I-II)","Lydian Dominant-Supertonic (I-V-II)":"Lydian Dominant-Supertonic (I-V-II)","Mixolydian Cadence":"Mixolydian Cadence","Mixolydian Vamp":"Mixolydian Vamp","Mixolydian Subdominant Cycle (I-VII-IV-I)":"Mixolydian Subdominant Cycle (I-VII-IV-I)","Mixolydian Minor Dominant (I-v-IV-I)":"Mixolydian Minor Dominant (I-v-IV-I)","Mixolydian Supertonic Resolution (I-VII-ii-I)":"Mixolydian Supertonic Resolution (I-VII-ii-I)","Mixolydian Suspended Extended (I-Isus4-ii-IV-VII)":"Mixolydian Suspended Extended (I-Isus4-ii-IV-VII)","Mixolydian Suspended Tonic-Minor Dominant (Isus4-I-v7-v)":"Mixolydian Suspended Tonic-Minor Dominant (Isus4-I-v7-v)","Mixolydian Suspended Tonic-Subdominant (Isus4-v7add11-IV)":"Mixolydian Suspended Tonic-Subdominant (Isus4-v7add11-IV)","Mixolydian Suspended Subdominant Cycle (IVsus4-IV-I-V-IV)":"Mixolydian Suspended Subdominant Cycle (IVsus4-IV-I-V-IV)","Mixolydian Suspended Seventh-Subdominant (I-VII6-IVsus4)":"Mixolydian Suspended Seventh-Subdominant (I-VII6-IVsus4)","Mixolydian Suspended Double (I-VIIsus2-IVsus4-I)":"Mixolydian Suspended Double (I-VIIsus2-IVsus4-I)","Mixolydian Suspended Triple (I-Isus2-IVsus4-Iadd9)":"Mixolydian Suspended Triple (I-Isus2-IVsus4-Iadd9)","Mixolydian Suspended Seventh Double (IVsus4-VIIadd9-IVsus4)":"Mixolydian Suspended Seventh Double (IVsus4-VIIadd9-IVsus4)","Mixolydian Seventh Major (IVmaj7-VIImaj7-vi7)":"Mixolydian Seventh Major (IVmaj7-VIImaj7-vi7)","Locrian Resolution":"Locrian Resolution","Chromatic Mediant":"Chromatic Mediant","Neapolitan Sixth":"Neapolitan Sixth","Axis Progression (I-V-vi-IV)":"Axis Progression (I-V-vi-IV)","Sensitive Female Chord (I-vi-IV-V)":"Sensitive Female Chord (I-vi-IV-V)","Pop-Punk (I-IV-ii-V)":"Pop-Punk (I-IV-ii-V)","Doo-Wop (I-IV-vi-V)":"Doo-Wop (I-IV-vi-V)","Andalusian Cadence (I-V-IV-V)":"Andalusian Cadence (I-V-IV-V)","Royal Road (vi-V-IV-V)":"Royal Road (vi-V-IV-V)","Canon in D (I-iii-vi-V)":"Canon in D (I-iii-vi-V)","Plagal-Half (IV-iv-I)":"Plagal-Half (IV-iv-I)","Extended Plagal (IV-I6-V)":"Extended Plagal (IV-I6-V)","Double Plagal (IV-I6-ii)":"Double Plagal (IV-I6-ii)","Mixolydian Resolution (I-I6-IV-V)":"Mixolydian Resolution (I-I6-IV-V)","Tertian Mediant (I-V6-IV-V)":"Tertian Mediant (I-V6-IV-V)","Deceptive Extended (I-V6-vi-IV)":"Deceptive Extended (I-V6-vi-IV)","Circle Progression (ii-I6-IV-I6)":"Circle Progression (ii-I6-IV-I6)","Epic Progression (I-V-vi-iii-IV-I-IV-V)":"Epic Progression (I-V-vi-iii-IV-I-IV-V)","Suspended Tonic Vamp (I-Isus4-I-Isus4)":"Suspended Tonic Vamp (I-Isus4-I-Isus4)","Suspended Deceptive (I-Vsus4-vi)":"Suspended Deceptive (I-Vsus4-vi)","Major Seventh Tonic (I-Imaj7-IV-V)":"Major Seventh Tonic (I-Imaj7-IV-V)","Major Seventh Subdominant Deceptive (I-IVmaj7-V-vi)":"Major Seventh Subdominant Deceptive (I-IVmaj7-V-vi)","Major Seventh Tonic Vamp (IVmaj7-Imaj7-IVmaj7-Imaj7)":"Major Seventh Tonic Vamp (IVmaj7-Imaj7-IVmaj7-Imaj7)","Major Seventh Extended Mediant (Imaj7-iii-IV-iii-ii7-Imaj7)":"Major Seventh Extended Mediant (Imaj7-iii-IV-iii-ii7-Imaj7)","Major Seventh Subdominant-Mediant (I-iii64-IV-IVmaj7-iii)":"Major Seventh Subdominant-Mediant (I-iii64-IV-IVmaj7-iii)","Major Seventh Descending (IVmaj7-iii7-ii7-Imaj7)":"Major Seventh Descending (IVmaj7-iii7-ii7-Imaj7)","Major Seventh Circle (ii7-V7-I-IVmaj7-iii7)":"Major Seventh Circle (ii7-V7-I-IVmaj7-iii7)","Major Seventh Jazz Turnaround (Imaj7-vi7-ii7-V7sus4-V7)":"Major Seventh Jazz Turnaround (Imaj7-vi7-ii7-V7sus4-V7)","Major Seventh Chromatic Subdominant (IVmaj7-â™­VIImaj7-Imaj7)":"Major Seventh Chromatic Subdominant (IVmaj7-♭VIImaj7-Imaj7)","Major Seventh Chromatic Extended (Iadd9-â™­VIImaj7-IVadd9-IV)":"Major Seventh Chromatic Extended (Iadd9-♭VIImaj7-IVadd9-IV)","Major Ninth Supertonic Vamp (ii9-I-ii9-I)":"Major Ninth Supertonic Vamp (ii9-I-ii9-I)","Major Ninth Subdominant (I-IVmaj7-ii9-V)":"Major Ninth Subdominant (I-IVmaj7-ii9-V)","Major Ninth Jazz Turnaround (ii7-V7-ii9-iii7-vi7)":"Major Ninth Jazz Turnaround (ii7-V7-ii9-iii7-vi7)","Major Ninth Extended Add9 (ii9-viadd9-IVadd9-Vadd9)":"Major Ninth Extended Add9 (ii9-viadd9-IVadd9-Vadd9)","Major Ninth Eleventh Resolution (ii9-V11-ii9-Vadd9)":"Major Ninth Eleventh Resolution (ii9-V11-ii9-Vadd9)","Major Ninth Complex Voicing (Imaj7 - Vadd9 - ii9 - IVsus2)":"Major Ninth Complex Voicing (Imaj7 - Vadd9 - ii9 - IVsus2)","Minor Suspended Dominant (VI-i-III-vsus4-V)":"Minor Suspended Dominant (VI-i-III-vsus4-V)","Minor Suspended Extended (i-III7-VIadd9-VI-vsus4-V)":"Minor Suspended Extended (i-III7-VIadd9-VI-vsus4-V)","Minor Suspended Seventh Vamp (VI-i-VIIsus4)":"Minor Suspended Seventh Vamp (VI-i-VIIsus4)","Blues Turnaround":"Blues Turnaround","Quick Change":"Quick Change"}}'),Py={C:"C",D:"D",E:"E",F:"F",G:"G",A:"A",B:"B"},My={natural:"Natural",sharp:"Sharp",flat:"Flat"},Ay={major:"Major",aeolian:"Aeolian",dorian:"Dorian",phrygian:"Phrygian",lydian:"Lydian",mixolydian:"Mixolydian",locrian:"Locrian",harmonicMinor:"Harmonic minor",melodicMinor:"Melodic minor",relatedness:"Relatedness",targetChord:"Target key chord",diatonicChord:"Diatonic chord"},_y={names:{major:"Major",ionian:"Ionian (Major)",dorian:"Dorian",phrygian:"Phrygian",lydian:"Lydian",mixolydian:"Mixolydian",aeolian:"Aeolian (Natural Minor)",locrian:"Locrian",naturalMinor:"Natural Minor",harmonicMinor:"Harmonic Minor",melodicMinor:"Melodic Minor",harmonicMajor:"Harmonic Major",phrygianDominant:"Phrygian Dominant",lydianSharp2:"Lydian Sharp 2",mixolydianFlat9Flat13:"Mixolydian ♭9 ♭13",ultraLocrian:"Ultra Locrian",doubleHarmonicMajor:"Double Harmonic Major",hungarianMinor:"Hungarian Minor",dorianFlat2:"Dorian ♭2",lydianAugmented:"Lydian Augmented",lydianDominant:"Lydian Dominant",mixolydianFlat6:"Mixolydian ♭6",locrianNat2:"Locrian nat2",majorPentatonic:"Major Pentatonic",minorPentatonic:"Minor Pentatonic",egyptianPentatonic:"Egyptian Pentatonic",chinesePentatonic:"Chinese Pentatonic",majorBlues:"Major Blues Scale",minorBlues:"Minor Blues Scale",wholeTone:"Whole Tone",diminished:"Diminished (Half-Whole)",dominantDiminished:"Dominant Diminished (Whole-Half)",chromatic:"Chromatic",bebop:"Bebop Major",bebopMinor:"Bebop Minor",bebopDominant:"Bebop Dominant",arabic:"Arabic (Hijaz)",persian:"Persian",japanese:"Japanese (In Sen)",gypsy:"Gypsy (Hungarian)",augmented:"Augmented",prometheus:"Prometheus",tritone:"Tritone",alteredScale:"Altered Scale (Super Locrian)",lydianbFlat7:"Lydian ♭7 (Lydian Dominant)"}},Dy={play:"Play",frets:"frets",ok:"OK",cancel:"Cancel",save:"Save"},jy={title:"Tuning",instrument:"Instrument","instrument.guitar":"Guitar","instrument.bass":"Bass","instrument.ukulele":"Ukulele","instrument.contraguitar":"Contraguitar",standard:"Standard",custom:"Custom",stringCount:"String count",tuning:"Tuning","group.standard":"Standard","group.alternative":"Alternative","group.drop":"Drop","group.open":"Open","group.baritone":"Baritone","group.other":"Other","name.E Standard":"E Standard","name.Eb Standard":"Eb Standard","name.D Standard":"D Standard","name.C Standard":"C Standard","name.B Standard":"B Standard","name.Drop D":"Drop D","name.Drop C#":"Drop C#","name.Drop B":"Drop B","name.Double Drop D":"Double Drop D","name.Drop C":"Drop C","name.Drop A":"Drop A","name.Open D":"Open D","name.Open E":"Open E","name.Open G":"Open G","name.Open C":"Open C","name.Open A":"Open A","name.Nashville (High-Strung)":"Nashville (High-Strung)","name.FACGCE":"FACGCE Math Rock","name.DAEAC#E":"DAEAC#E Math Rock","name.DADGAD":"DADGAD","name.4th Interval Tuning":"4th Interval Tuning","name.B Standard (7)":"B Standard","name.A Standard (7)":"A Standard","name.F# Standard (8)":"F# Standard","name.Drop A (7)":"Drop A","name.Drop G (7)":"Drop G","name.Drop F# (7)":"Drop F#","name.E Standard (8)":"E Standard","name.Drop E (8)":"Drop E","name.Drop D# (8)":"Drop D#","name.Four String":"Four String","name.Five String":"Five String","name.Six String":"Six String","name.Drop D Bass":"Drop D","name.5-string Standard":"Five String Standard","name.6-string Standard":"Six String Standard","name.Standard (GCEA)":"Standard (GCEA)","name.Baritone (DGBE)":"Baritone (DGBE)","name.Contraguitar Standard":"Contraguitar Standard",strings:"Strings",addString:"Add string",deleteString:"Delete string",maxNote:"Maximum note reached",minNote:"Minimum note reached",stringLabel:"String {{idx}}",editNote:"Edit note",save:"Save",saving:"Saving...",saved:"Tuning saved successfully!",cancel:"Cancel",unsaved:"You have unsaved changes"},Ly={title:"Rhythm Generator",description:"Automatic generation of rhythm patterns with customizable parameters",settings:{timeSignature:"Time Signature",tempo:"Tempo (BPM)",barCount:"Number of Bars",drumVolume:"Drum Volume",drumMode:"Sound Mode",synth:"Synth",samples:"Samples",loadSamples:"Load Samples",loading:"Loading...",metronomeVolume:"Metronome Volume",includeTriplets:"Include Triplets",includeQuintuplets:"Include Quintuplets",includeSextuplets:"Include Sextuplets",includePickup:"Include Pickup",samplesLoaded:"Samples are loaded",samplesNotLoaded:"Samples are not loaded",useSynth:"Use Synth",useSamples:"Use Samples",loadSamplesFirst:"Load Samples First",visualizationMode:"Visualization",visualizationCircles:"Circles",visualizationNotation:"Notation"},buttons:{generate:"Generate",play:"Play",stop:"Stop",shiftLeft:"Shift",shiftRight:"Shift",share:"Share",saveToFavorites:"Add to Favorites",favorites:"Favorites"},shareLinkCopied:"Link copied to clipboard!",shareFailed:"Failed to copy link",savedToFavorites:"Pattern saved to favorites!",enterPatternName:"Enter pattern name:",favoritesModal:{title:"Favorite Patterns",empty:"No saved patterns",bars:"bars",load:"Load",delete:"Delete",confirmDelete:"Are you sure you want to delete this pattern?"},presetsModal:{title:"Rhythm Presets",load:"Load",names:{simple:"Simple Patterns",complex:"Complex Patterns","most-complex":"The Most Complex Patterns",triplets:"Triplets","radio-1":"Groups by 3 (ra-di-o) 1 position","radio-2":"Groups by 3 (ra-di-o) 2 position","radio-3":"Groups by 3 (ra-di-o) 3 position","university-1":"Groups by 5 (u-ni-ver-si-ty) 1 position","university-2":"Groups by 5 (u-ni-ver-si-ty) 2 position","listen-to-the-radio-1":"Groups by 7 (li-sten-to-the-ra-di-o) 1 position","listen-to-the-radio-2":"Groups by 7 (li-sten-to-the-ra-di-o) 2 position"}},offset:"Offset",legend:{title:"Legend",accent:"Accent (note start)",continuation:"Note continuation",rest:"Rest",barLine:"Bar line"},notation:{description:"Standard notation with rests, ties, and tuplets.",loading:"Loading notation...",renderFailed:"Unable to render notation. Switch to Circles mode."}},Vy={title:"Rhythm Metronome",description:"Create drum patterns, practice with metronome presets, and explore polyrhythms at a constant or progressive tempo.",controls:{loadedPattern:"Loaded Pattern",steps:"steps",currentBpm:"Current BPM",start:"Start",stop:"Stop",tempoMode:"Tempo Mode",constant:"Constant",progressive:"Progressive",increaseEvery:"Increase every",bars:"bars",tempo:"Tempo",tempoFrom:"From",tempoTo:"To",timer:"Timer",timerStart:"Timer On",timerStop:"Timer Off",timerOff:"off",timeSignature:"Time Signature",globalDivision:"Bar Division",preset:"Preset",volume:"Volume",reverb:"Reverb"},favorites:{save:"Save to Favorites",open:"Favorites",saved:"Saved to favorites!",promptName:"Enter pattern name:"},favoritesModal:{title:"Favorite Patterns",empty:"No saved patterns",load:"Load",delete:"Delete",confirmDelete:"Delete this pattern?",close:"Close"},grid:{title:"Pattern Grid",subtitle:"Build patterns like a drum machine and experiment with polyrhythms",addInstrument:"Add Instrument",instrument:"Instrument",sync:"Global",divisionDown:"Decrease divisions",divisionUp:"Increase divisions",remove:"Remove",empty:"Add an instrument to start building a pattern"},presets:{metronome24:"Metronome 2/4",metronome34:"Metronome 3/4",metronome44:"Metronome 4/4",metronome54:"Metronome 5/4",metronome68:"Metronome 6/8",metronome78:"Metronome 7/8",metronome98:"Metronome 9/8",metronome128:"Metronome 12/8",pop:"Pop",pop2:"Pop 2",pop3:"Pop 3 (6/8)",rock:"Rock",rock2:"Rock 2",rock3:"Rock 3 (12/8)",jazz:"Jazz",jazz2:"Jazz 2 (3/4)",jazz3:"Jazz 3 (6/8)",funk:"Funk",funk78:"Funk 7/8",funk2:"Funk 2",hiphop:"Hip-hop",hiphop2:"Hip-hop 2",trap:"Trap",trap2:"Trap 2",disco:"Disco",disco2:"Disco 2",house:"House",house2:"House 2",dnb:"Drum & Bass",dnb2:"Drum & Bass 2",reggae:"Reggae",reggae2:"Reggae 2",ska:"Ska",ska2:"Ska 2",bossa:"Bossa Nova",bossa2:"Bossa Nova 2 (2/4)",samba:"Samba",samba2:"Samba 2",shuffle:"Shuffle",shuffle2:"Shuffle 2",waltz:"Waltz 3/4",waltz2:"Waltz 2 (3/4)",swing:"Swing",swing2:"Swing 2",latin68:"Latin 6/8",latin682:"Latin 2 (6/8)",balkan78:"Balkan 7/8",balkan782:"Balkan 2 (7/8)",prog54:"Prog Rock 5/4",prog542:"Prog Rock 2 (5/4)",custom:"Custom"},presetsGroup:{metronome:"Metronome",genres:"Genres"},instruments:{kick:"Kick",snare:"Snare",hihat:"Hi-hat",hihatOpen:"Open Hi-hat",crash:"Crash",sticks:"Sticks",metronome:"Metronome",metronomeAccent:"Metronome Accent"},dial:{title:"Playback",subtitle:"The playhead shows the current step around the circle",bar:"Bar"}},Ny={title:"Rhythm Trainer",description:"Practice rhythm patterns, set tempo and sound type, and play your groove.",beats:"Beats",addBeat:"Add beat",removeBeat:"Remove beat",randomize:"Randomize",tempo:"Tempo",soundType:"Sound type",drums:"Drums",sticks:"Sticks",hihat:"Hi-hat for 16th",start:"Start",stop:"Stop",note:"Note",pause:"Pause",accented:"Accented",ti:"Ti",ta:"Ta",settings:{timer:"Timer",timerValue:"Timer value (seconds)",beatCount:"Beat count",tempo:"Tempo (BPM)",soundType:"Sound type",drums:"Drums",sticks:"Sticks",hiHat:"Accent 16th with hi-hat",hiHat8th:"Accent 8th with hi-hat",drumMode:"Sound Mode",synth:"Synth",samples:"Samples",loadSamples:"Load Samples",loading:"Loading...",soundVolume:"Sound Volume",metronomeVolume:"Accents Volume",samplesLoaded:"Samples are loaded",samplesNotLoaded:"Samples are not loaded",useSynth:"Use Synth",useSamples:"Use Samples",loadSamplesFirst:"Load Samples First"},buttons:{timerStart:"Timer On",timerStop:"timer Off",random:"Random",start:"Start",stop:"Stop",alphabetOn:"Alphabet",alphabetOff:"Pattern",share:"Share",saveToFavorites:"Add to Favorites",favorites:"Favorites",presets:"Presets"},shareLinkCopied:"Link copied to clipboard!",shareFailed:"Failed to copy link",savedToFavorites:"Pattern saved to favorites!",enterPatternName:"Enter pattern name:",favoritesModal:{title:"Favorite Patterns",empty:"No saved patterns",load:"Load",delete:"Delete",confirmDelete:"Are you sure you want to delete this pattern?"},presetsModal:{title:"Rhythm Presets",load:"Load"},legend:{title:"Legend:",note:"● Note (hit)",rest:"— Rest",glyph:"[A-X] Glyph letter (choose for each beat)",syllable:"Ti/Ta Syllables for sixteenths"},tooltips:{timer:"Enable/disable timer",timerValue:"Set timer duration (30s–15min)",timerCountdown:"Countdown until playback stops",random:"Random rhythm",start:"Start playback",stop:"Stop playback",beatGlyph:"Select beat glyph",note:"Note",rest:"Rest",syllable:"Syllable",alphabetMode:"Show all rhythm alphabet cards"},errors:{timerRange:"Timer must be between 30 seconds and 15 minutes",generation:"Rhythm generation error"},glyphNames:{A:"A",B:"B",C:"C",D:"D",E:"E",F:"F",G:"G",H:"H",I:"I",J:"J",K:"K",L:"L",M:"M",N:"N",O:"O",P:"P",Q:"Q",R:"R",S:"S",T:"T",U:"U",V:"V",W:"W",X:"X"},glyphLabels:{A:"First 16th",B:"Second 16th",C:"Third 16th",D:"Fourth 16th",E:"First two 16ths",F:"Middle two 16ths",G:"Last two 16ths",H:"First and last 16ths",I:"Eighth on 1 (●-●-)",J:"Eighth on and (-●-●)",K:"First three 16ths",L:"Last three 16ths",M:"Three skip second",N:"Three skip third",O:"All four 16ths",P:"Rest (quarter)",Q:"Triplet: first",R:"Triplet: second",S:"Triplet: third",T:"Triplet: first two",U:"Triplet: last two",V:"Triplet: outer two",W:"Triplet: all three",X:"Rest (triplet)"}},Ry={title:"Chords, Arpeggios, Scales",description:"Select chord parameters to find fingerings",parameters:"Chord Parameters",root:"Root",type:"Chord Type",bass:"Bass",selectType:"Select type",forSlashChords:"For slash chords",display:"Display on diagram",notes:"Notes",intervals:"Intervals",chordNotes:"Chord notes:",chordIntervals:"Intervals",chordDegrees:"Degrees",actions:"Actions",shareLink:"Share Link",linkCopied:"Link copied to clipboard!",shareFailed:"Failed to copy link",fingerings:"Fingerings","fingerings.one":"Fingering","fingerings.other":"Fingerings",arpeggios:"Arpeggios",scales:"Scales",arpeggio:"Arpeggio",chord:"Chord",found:"found",noFingerings:"No fingerings found. Try changing filters.",positions:{open:"Open position","1to4":"Positions 1-4","5to8":"Positions 5-8","9to12":"Positions 9-12"},types:{5:"Power Chord",6:"Major 6",maj:"Major",min:"Minor",dim:"Diminished",aug:"Augmented",maj7:"Major 7",min7:"Minor 7",dom7:"Dominant 7",dim7:"Diminished 7",m7b5:"Half Diminished 7",mMaj7:"Minor Major 7",augMaj7:"Augmented Major 7","7b5":"7♭5","7#5":"7♯5",maj7b5:"Maj7♭5",maj9:"Major 9",min9:"Minor 9",dom9:"Dominant 9",maj11:"Major 11",min11:"Minor 11",dom11:"Dominant 11",maj13:"Major 13",min13:"Minor 13",dom13:"Dominant 13","7b9":"7♭9","7#9":"7♯9","maj7#9":"Maj7♯9","maj7#11":"Maj7♯11","9#11":"9♯11","13b9":"13♭9","13#11":"13♯11","7alt":"7 Altered",m9b5:"m9♭5",sus2:"Suspended 2",sus4:"Suspended 4",m6:"Minor 6","6/9":"6/9"},generationParameters:"Fingering Filters",filters:{bass:"Bass",degreeOmissions:"Degree omissions",openStrings:"Open strings",mutedStrings:"Muted strings",shell:"Shell chords",difficulty:"Difficulty",strict:"Strict",any:"Any",only:"Only",onlyNo:"Only not",onlyWith:"Only with omissions",onlyWithout:"Only without omissions",all:"All",pattern:"Pattern",startsWithTonic:"Starts with tonic",barre:"Barre"},difficulty:{all:"All",easy:"Easy",medium:"Medium",hard:"Hard"},noCompatibleScales:"No compatible scales found for chord:",compatibleScales:"Compatible Scales",scaleNotes:"Scale notes",compatibilityTooltip:{iconAriaLabel:"Show compatibility details",title:"Why this scale fits",summary:"{{matchType}} match ({{percent}}%)",reasons:{coverage:"Chord-tone coverage: {{percent}}%",essential:"Essential tones: {{matched}}/{{total}}",tensions:"Color tensions: {{matched}}/{{total}}",styleStrong:"Strong stylistic fit for this chord.",style:"Scale color is compatible with this chord.",rootMatch:"Scale root matches chord root.",rootRelation:"Scale root has useful functional relation to chord.",avoidTones:"Contains avoid tones: {{tones}}.",noAvoidTones:"No strong avoid tones against this chord.",altered:"Contains altered color tones outside chord tones."}},playScaleUp:"Play scale ascending",playScaleDown:"Play scale descending",scaleUp:"Up",scaleDown:"Down",compatibility:"Compatibility",matchType:{perfect:"Perfect",good:"Good",partial:"Partial"},scaleFamily:{diatonic:"Diatonic",harmonic:"Harmonic",melodic:"Melodic",symmetric:"Symmetric",blues:"Blues",world:"World",bebop:"Bebop"},chordTypes:{triads:"Triads",suspended:"Suspended",sixths:"With 6th",sevenths:"Seventh Chords",ninths:"With 9th",elevenths:"With 11th",thirteenths:"With 13th",altered:"Altered"},arpeggioPattern:{balanced:"Balanced",twoOneTwo:"2-1-2"},fingeringTypes:{open:"Open",barre:"Barre",partialBarre:"Partial Barre",shell:"Shell",triad:"Triad",power:"Power",rootless:"Rootless",standard:"Standard"},barreState:{with:"Barre",without:"No barre",full:"Full barre",partial:"Partial barre",none:"No barre"},collections:{favorites:"Favorites",myCollections:"My collections",open:"Open",saveVoicing:"Save voicing",createCollection:"Create collection",newCollection:"New collection",collectionName:"Collection name",create:"Create",print:"Print",rename:"Rename",delete:"Delete",deleteCollectionQuestion:"Delete collection?",emptyCollection:"This collection is empty.",emptyCollectionHint:"Find a chord voicing and save it here.",collectionNameInvalid:"Enter a valid collection name (up to 50 characters).",collectionNameDuplicate:"A collection with this name already exists.",defaultCollectionLocked:"This collection cannot be changed.",operationFailed:"Failed to complete this action.",renamed:"Collection renamed.",deleted:"Collection deleted.",addVoicingAria:"Add voicing to collection",voicingSavedAria:"Voicing is saved in collections",openCollectionsAria:"Open chord voicing collections",openCollectionAria:"Open collection",renameCollectionAria:"Rename collection",deleteCollectionAria:"Delete collection",removeVoicingAria:"Remove voicing from collection",saveToCollectionAria:"Save to collection {{name}}",downloadAria:"Download voicing diagram",downloadFormatTitle:"Download diagram",downloadAsSvg:"SVG",downloadAsPng:"PNG",downloadCancel:"Cancel"}},Oy={fretboardExplorer:{title:"Fretboard Explorer",description:"Explore the fretboard with interactive note visualization and octave colors",rootNote:"Root Note",rootNoteHelper:"Select the tonic note to highlight on the fretboard",displayMode:"Display Mode",notes:"Notes",intervals:"Intervals",currentTuning:"Current Tuning",fretboard:"Fretboard",fretboardPlaceholder:"Interactive fretboard will appear here",octaveLegend:"Octave Legend",octaveLabel:"Octave",octaveLegendHelper:"Each octave is shown in a different color for easy visualization",rootNoteIndicator:"Root note (tonic) - highlighted with bold ring",highlightedNoteIndicator:"Highlighted note - shown with subtle ring",minFret:"Min fret",maxFret:"Max fret"},chordIdentifier:{title:"Chord Identifier",description:"Mark notes on the fretboard to identify the chord you're playing",tuning:"Configure Tuning",clear:"Clear",fretboard:"Fretboard",results:"Results",playChord:"Play Chord",playArpeggio:"Arpeggio",confidence:"Confidence",alternatives:"Alternative Options",noMatch:"Could not identify the chord. Try adding or changing notes.",notes:"Notes",intervals:"Intervals",sharps:"Sharps",flats:"Flats",shiftLeft:"Shift",shiftRight:"Shift",shiftLeftTooltip:"Shift chord left by one fret",shiftRightTooltip:"Shift chord right by one fret",breakdown:"Note Breakdown",extraNotes:"Additional notes (not part of the main pattern)",columns:{bass:"Bass",root:"Root",third:"sus2/m3/3/sus4",fifth:"♭5/5/♯5",sixth:"6/7/maj7",ninth:"♭9/9/♯9",eleventh:"11/♯11",thirteenth:"♭13/13"},labels:{3:"3",5:"5",6:"6",7:"7",9:"9",11:"11",13:"13",sus2:"sus2",m3:"m3",sus4:"sus4",b5:"♭5",sharp5:"♯5",maj7:"maj7",b9:"♭9",sharp9:"♯9",sharp11:"♯11",b13:"♭13"},hint:{title:"How to Use",description:"Click on notes on the fretboard to mark pressed strings. After selecting two or more notes, possible chord names will appear below the fretboard. Open strings are marked with a circle ○, muted strings with a cross ✕."}},scaleIdentifier:{title:"Scale Finder",description:"Select notes on the fretboard to find matching scales",clear:"Clear",results:"Matching Scales",noMatch:"No matching scales found. Try adding or changing notes.",sharps:"Sharps",flats:"Flats",shiftLeft:"Shift",shiftRight:"Shift",shiftLeftTooltip:"Shift notes left by one fret",shiftRightTooltip:"Shift notes right by one fret",hint:{title:"How to Use",description:"Select two or more notes on the fretboard. Matching scales will appear below, and the best match will show as semi-transparent notes on the fretboard."}},stringSelector:{title:"String Selector",description:"Find the perfect string set for your instrument based on scale length, tuning, and playing style",configuration:"Configuration",instrumentType:"Instrument Type",instruments:{acoustic_guitar:"Acoustic Guitar",electric_guitar:"Electric Guitar",bass_guitar:"Bass Guitar"},stringCount:"Number of Strings",strings:"strings",scaleLength:"Scale Length",tuning:"Tuning",stringSet:"String Set",tensionAnalysis:"Tension Analysis",totalTension:"Total Tension",averageTension:"Average Tension",tensionGuide:"Tension Guide",barWidthInfo:"Bar width shows relative tension (% of maximum in set)",low:"Low",optimal:"Optimal",high:"High",veryHigh:"Very High",wound:"wound",clickToEdit:"Click to edit gauge",editHint:"Click on any gauge value to edit it and see how tension changes",customMode:"Custom String Set (Modified)",resetToStandard:"Reset to Standard",clickGaugeToEdit:"Click on any gauge to customize",share:"Share",shareLink:"Share link",linkCopied:"Link copied to clipboard!",shareFailed:"Failed to copy link",helpTitle:"How to Use",help1:"Select your instrument type, number of strings, and tuning",help2:"Choose a scale length (baritones and multiscale instruments are supported)",help3:"Pick a standard string set or click on any gauge to customize it",help4:"The visualization shows tension for each string with color coding: green is optimal (14-18 lbs)"},functionsTrainer:{title:"Chord Functions Trainer",description:"Identify hidden chord functions inside musical cadences.",common:{unknown:"Unknown"},difficulty:{beginner:"Beginner (I-IV-V)",intermediate:"Intermediate (all triads)",advanced:"Advanced (triads + inversions)",expert:"Expert (triads + sevenths)",master:"Master (triads + sevenths + inversions)",guru:"Guru (+ sus + sixth)"},settings:{title:"Settings",difficulty:"Difficulty",scaleMode:"Scale mode",fixedKey:"Fixed key",tonalityMode:{title:"Tonality change mode",randomEach:"Random each question",randomSession:"One random key per session",fixed:"Fixed key"}},scaleMode:{major:"Major",minor:"Minor",both:"Major + Minor"},actions:{startSession:"Start session",soundSettings:"Sound settings",statistics:"Statistics",replayTask:"Replay task",playReference:"Play I-IV-V-I",stopTraining:"Stop training",finishSession:"Finish session",nextQuestion:"Next question",newTraining:"New training"},game:{scoreFirstAttempt:"Score (first attempt)",progress:"Progress",accuracy:"Accuracy",currentKey:"Current key: {{key}}",questionProgress:"Question {{current}} / {{total}}",unknownChord:"Unknown chord",chordN:"Chord {{n}}",chooseAnswerForSlot:"Choose answer for slot {{slot}}",incorrectMessage:"Incorrect. Keep trying. Only first attempt is counted.",correctMessage:"Correct."},chordNaming:{degree:{1:"Tonic",2:"Supertonic",3:"Mediant",4:"Subdominant",5:"Dominant",6:"Submediant",7:"Leading tone"},form:{triad:"triad",seventh:"seventh chord",sus2:"sus2 chord",sus4:"sus4 chord",sixth:"sixth chord"},inversion:{root:"root position",first:"1st inversion",second:"2nd inversion",third:"3rd inversion"}},finished:{title:"Session complete",score:"Score",bestOnLevel:"Best on level",noRecord:"No record",accuracyProgress:"Accuracy progress",performance:{excellent:"Excellent result",solid:"Solid result",keepPracticing:"Keep practicing"}},history:{scaleModeMixed:"major/minor mixed"},statsModal:{title:"Trainer statistics",bestByDifficulty:"Best by difficulty",noAttempts:"No attempts",lastSessions:"Last 10 sessions",noHistoryYet:"No history yet.",keyLabel:"Key",resetStatistics:"Reset statistics"}},intervalTrainer:{title:"Interval Trainer β",description:"Identify intervals against a drone and build stable interval hearing.",common:{unknown:"Unknown"},difficulty:{beginner:"Beginner",intermediate:"Intermediate",advanced:"Advanced",expert:"Expert",master:"Master",guru:"Guru",super_gourmet:"Super Gourmet"},settings:{title:"Settings",difficulty:"Difficulty",scaleMode:"Scale mode",intervalDisplayMode:"Interval labels",intervalDisplayName:"Full names",intervalDisplayDegree:"Scale degrees",fixedKey:"Fixed key",tonalityMode:{title:"Tonality change mode",randomEach:"Random each question",randomSession:"One random key per session",fixed:"Fixed key"},trainingIntervals:"Intervals in this level",playCadence1451:"Play 1-4-5-1 cadence before drone"},scaleMode:{major:"Major",minor:"Minor",both:"Major + Minor"},actions:{startSession:"Start session",soundSettings:"Sound settings",statistics:"Statistics",replayTask:"Replay task",replayCadence1451:"1-4-5-1",playMelodic:"Melodic mode",playHarmonic:"Harmonic mode",startDrone:"Start drone",stopDrone:"Stop drone",stopTraining:"Stop training",finishSession:"Finish session",nextQuestion:"Next question",newTraining:"New training",playSelected:"Play my answer",playCorrect:"Play correct answer",compare:"Compare intervals"},sound:{title:"Sound settings",instrumentTitle:"Instrument selection",instrumentHint:"Choose one instrument for notes and set its volume.",instrument:"Instrument",instrumentGain:"Instrument level: {{value}}%",preview:"Preview",droneTitle:"Drone settings",dronePreset:"Drone preset",droneGain:"Drone level: {{value}}%",previewDrone:"Preview drone",stopPreviewDrone:"Stop preview",presets:{"tonpura-light":"Tanpura Light","electric-power":"Electric Power","bass-pad":"Bass Pad","velvet-pad":"Velvet Pad","choir-mist":"Choir Mist","glass-halo":"Glass Halo","deep-space":"Deep Space"}},game:{score:"Score",progress:"Progress",accuracy:"Accuracy",currentKey:"Current key: {{key}}",questionProgress:"Question {{current}} / {{total}}",prompt:"Listen to the note against the drone and choose the interval.",correctMessage:"Correct.",incorrectMessage:"Incorrect.",correctAnswer:"Correct answer",yourAnswer:"Your answer"},intervals:{unison:{name:"Perfect unison",short:"P1"},octave:{name:"Perfect octave",short:"P8"},minor_second:{name:"Minor second",short:"m2"},major_second:{name:"Major second",short:"M2"},minor_third:{name:"Minor third",short:"m3"},major_third:{name:"Major third",short:"M3"},perfect_fourth:{name:"Perfect fourth",short:"P4"},tritone:{name:"Tritone",short:"TT"},perfect_fifth:{name:"Perfect fifth",short:"P5"},minor_sixth:{name:"Minor sixth",short:"m6"},major_sixth:{name:"Major sixth",short:"M6"},minor_seventh:{name:"Minor seventh",short:"m7"},major_seventh:{name:"Major seventh",short:"M7"}},finished:{title:"Session complete",score:"Score"},history:{scaleModeMixed:"major/minor mixed"},statsModal:{title:"Trainer statistics",bestByDifficulty:"Best by difficulty",noAttempts:"No attempts",lastSessions:"Last 20 sessions",noHistoryYet:"No history yet.",keyLabel:"Key",hardestIntervals:"Hardest intervals",attempts:"attempts",resetStatistics:"Reset statistics"}}},Fy={noteSelector:{optional:"(optional)",alteration:"Alteration"},fretboard:{playArpeggio:"Play arpeggio (visible notes only)",arpeggio:"Arpeggio",allNotes:"All Notes",arpeggioFrets:"Arpeggio: {{min}}-{{max}} frets"}},zy={description:"We value your opinion! Tell us what you like, what could be improved, or what features you'd like to see."},By={madeWithLove:"Made with love for guitars"},$y={title:"Circle of Fifths",circle:"Circle of Keys",centerText:"Circle of 5ths",instruction:"Click on a major (blue) or minor (purple) key to view details",keySignature:"Key Signature",notesWithAccidentals:"Notes with accidentals",scaleNotes:"Scale Notes",intervals:"Intervals from Tonic",formula:"Mode Formula",chords:"Key Chords",additionalInfo:"Additional Information",tonic:"Tonic",mode:"Mode",family:"Family",selectKeyPrompt:"Select a key",clickToSelect:"Click on the circle to select a major or minor key",harmony:"Harmony",viewInHarmony:"View on harmony page",sharp:{one:"sharp",other:"sharps"},flat:{one:"flat",other:"flats"}},Gy={title:{chordScale:"Chord & Scale Explorer",fretboard:"Fretboard Explorer"},description:{chordScale:"Explore chords and scales on the guitar fretboard",fretboard:"Explore all note positions on the guitar fretboard"},mode:{label:"Exploration Type",chord:"Chord",scale:"Scale",allNotes:"All Notes"},display:{label:"Display Mode",notes:"Notes",intervals:"Intervals"},tonic:{label:"Root Note",helperDefault:"Select the root note",helperAll:"Select a note to highlight on fretboard"},chordCategory:{label:"Chord Category",placeholder:"Select category",triad:"Triads",seventh:"Seventh Chords",extended:"Extended Chords",suspended:"Suspended Chords",added:"Added Tone Chords"},chordType:{label:"Chord Type",placeholder:"Select type",selectCategoryFirst:"Select category first"},scaleCategory:{label:"Scale Category",major:"Major Scales",minor:"Minor Scales",modal:"Modal Scales",pentatonic:"Pentatonic Scales",blues:"Blues Scales",jazz:"Jazz Scales",exotic:"Exotic Scales",symmetric:"Symmetric Scales"},scale:{label:"Scale"},fretboard:{chordTitle:"Chord on Fretboard",scaleTitle:"Scale on Fretboard",notesTitle:"Notes on Fretboard"},info:{chordNotes:"Chord Notes",scaleNotes:"Scale Notes",intervalStructure:"Interval Structure",playChord:"Play Chord",playArpeggio:"Play Arpeggio",playScaleUp:"Play Scale Up",playScaleDown:"Play Scale Down"},intervals:{tone:"T",semitone:"S",legend:"T = tone, S = semitone"},actions:{share:"Share",shareLink:"Share Link",linkCopied:"Link copied to clipboard!"},hand:{title:"Display",left:"For left-handed",right:"For right-handed"}},Hy={title:"Random Key for Practice",description:"Choose a difficulty level, press Next, and get a key for your next practice block.",level:{label:"Difficulty level",beginner:{title:"Beginner",description:"Major and minor"},intermediate:{title:"Intermediate",description:"Adds harmonic/melodic variants"},modal:{title:"Diatonic",description:"Adds Ionian, Dorian, Phrygian, Lydian, Mixolydian, Aeolian, and Locrian"},advanced:{title:"Advanced",description:"Adds the remaining harmonic and melodic modes"}},actions:{next:"Next"},current:{label:"Current practice key",empty:"Press Next to get your first key."},links:{scaleExplorer:"Open corresponding scale",harmonyGenerator:"Open harmony",scaleUnavailable:"Fretboard scale view is not available for this mode yet"},history:{title:"Previous keys",empty:"History is empty."},modeNames:{major:"major",minor:"minor",ionian:"ionian",dorian:"dorian",phrygian:"phrygian",lydian:"lydian",mixolydian:"mixolydian",aeolian:"aeolian",locrian:"locrian",harmonicMinor:"harmonic minor",harmonicMajor:"harmonic major",melodicMinor:"melodic minor",phrygianDominant:"phrygian dominant",lydianSharp2:"lydian sharp 2",mixolydianFlat9Flat13:"mixolydian flat 9 flat 13",ultraLocrian:"ultra locrian",doubleHarmonicMajor:"double harmonic major",hungarianMinor:"hungarian minor",dorianFlat2:"dorian flat 2",lydianAugmented:"lydian augmented",lydianDominant:"lydian dominant",mixolydianFlat6:"mixolydian flat 6",locrianNat2:"locrian natural 2",alteredScale:"altered scale"}},Wy={title:"CAGED System for Guitar",description:"Learn the CAGED system to understand the guitar fretboard. Five basic chord shapes across the entire neck.",tonic:{label:"Root Note",helper:"Select the root note of the chord"},shape:{label:"CAGED Shape"},shapes:{C:"C Shape",A:"A Shape",G:"G Shape",E:"E Shape",D:"D Shape"},chordCategory:{label:"Chord Category",triad:"Triads",seventh:"Seventh Chords"},chordType:{label:"Chord Type",maj:"Major",min:"Minor",maj7:"Major 7",min7:"Minor 7",dom7:"Dominant 7"},position:{label:"Position",open:"Open",fret:" fret"},mode:{single:"Single Position",fullNeck:"Full Neck"},stringGroups:{321:"3-2-1",432:"4-3-2",543:"5-4-3",654:"6-5-4"},fullNeck:{positionHighlightLabel:"Highlight CAGED Positions",stringGroupHighlightLabel:"Highlight 3-String Groups",highlightHint:"No filters selected: all notes are shown neutrally. Selected filters increase note focus."},fretboard:{title:"Shape on Fretboard",fullNeckTitle:"All CAGED Positions on Fretboard"},actions:{showScale:"Show Scale",hideScale:"Hide Scale",toggleScale:"Toggle Scale",showArpeggio:"Show Arpeggio",hideArpeggio:"Hide Arpeggio",toggleArpeggio:"Toggle Arpeggio",share:"Share",shareLink:"Share Link",linkCopied:"Link copied to clipboard!"}},Uy={title:"Microtone Discrimination Training",description:"Progressive difficulty game to measure and improve your pitch discrimination abilities",stats:{level:"Level",streak:"Streak",bestResult:"Best Result",correct:"Correct",mistakes:"Mistakes",questions:"Questions",noCorrectAnswers:"No correct answers yet",percentOfSemitone:"% of semitone"},gameStates:{readyToStart:"Ready to Start?",readyDescription:"Test your pitch discrimination across 10 progressive difficulty levels. You have 5 mistakes before the game ends.",playingAudio:"Playing audio sequence...",question:"Was the second tone higher or lower than the first?",correct:"Correct!",incorrect:"Incorrect",actualDifference:"Actual difference",nextQuestion:"Next question in 2 seconds...",levelComplete:"Complete!",movingToLevel:"Moving to Level",gameOver:"Game Over",congratulations:"Congratulations!",finalResults:"Final Results:",reached:"Reached",accuracy:"Accuracy",cents:"cents"},buttons:{startNewGame:"Start New Game",loadProgress:"Load Progress",saveProgress:"Save Progress",resetGame:"Reset Game",playAgain:"Play Again",testSound:"Test Sound",lower:"Lower",higher:"Higher"},settings:{title:"Settings",sound:"Sound",timbreDescription:"Base frequency is randomly selected from G3 to E5 range for each question. Your sound preference is automatically saved."},timbreOptions:{sine:{label:"Pure Sine Wave",description:"Clean mathematical tone, no harmonics"},strings:{label:"String Ensemble",description:"Rich sawtooth harmonics, moderate attack"},woodwind:{label:"Woodwind",description:"Soft breathy tone, slow attack, natural reverb"},plucked:{label:"Plucked String",description:"Sharp attack, triangle wave, long decay"},synth:{label:"Synthesizer",description:"Sharp sawtooth + square waves, bright and edgy"}},leaderboard:{title:"Your Progress",bestGame:"Best Game",lastGame:"Last Game",levelReached:"Level Reached",accuracy:"Accuracy",bestResult:"Best Result",status:"Status",completed:"Completed",gameOver:"Game Over",noGamesPlayed:"No games played yet",at:"at"},instructions:{title:"How to Play",steps:{0:"Choose your preferred sound timbre (base frequency is random for each question)",1:'Click "Start Game" to begin the progressive difficulty challenge (10 levels)',2:"Listen to two tones: reference → pause → test tone",3:"Decide if the second tone was higher or lower than the first",4:"Complete 5 correct answers per level to advance (or minimum 20 questions)",5:"You have 5 mistakes total before the game ends",6:"Track your best result - the smallest difference you correctly identified"},difficultyLevels:"Difficulty Levels (10 total):",progressiveNote:"Within each level, difficulty progressively increases from max to min cents as you answer more questions."},alerts:{progressSaved:"Progress saved successfully!",progressLoaded:"Progress loaded successfully!",errorLoadingProgress:"Error loading saved progress",noSavedProgress:"No saved progress found"},modal:{success:"Success",error:"Error",info:"Information",close:"Close"}},qy={title:"Strumming Patterns Library",description:"Choose a meter, play two-bar strumming patterns, save favorites, and practice at your own tempo.",loading:"Loading patterns...",controls:{meter:"Meter",tempo:"Tempo (BPM)",difficulty:"Difficulty",difficultyOptions:{all:"All",easy:"Easy",medium:"Medium",hard:"Hard"},showFavoritesOnly:"Show favorites only",hiHatVolume:"Hi-hat volume",drumVolume:"Kick + snare volume",metronomeVolume:"Metronome volume"},difficulties:{easy:"Easy",medium:"Medium",hard:"Hard",unknown:"Unknown"},labels:{difficulty:"Difficulty",tags:"Tags",noTags:"No tags"},tags:{"5-4":"5/4","6-8":"6/8","7-8":"7/8",accent:"accent",advanced:"advanced",balkan:"balkan",basic:"basic",beginner:"beginner",compound:"compound","dead-notes":"dead notes",dotted:"dotted","eighth-notes":"eighth notes",groove:"groove",grouping:"grouping",jig:"jig",legato:"legato",march:"march",muted:"muted",offbeat:"offbeat",pickup:"pickup",pop:"pop",pulse:"pulse",reggae:"reggae",sixteenth:"sixteenth",skank:"skank",straight:"straight",syncopation:"syncopation",tie:"tie",waltz:"waltz"},empty:{favoritesOnly:"No favorite patterns for {{meter}}",noPatterns:"No patterns found for {{meter}}",favoritesHint:"Add favorites with the star button and enable this filter again.",noPatternsHint:"Add patterns in the corresponding JSON file to populate this meter."},actions:{playPattern:"Play pattern {{title}}",stopPattern:"Stop pattern {{title}}",addFavorite:"Add pattern {{title}} to favorites",removeFavorite:"Remove pattern {{title}} from favorites"},patternTitles:{"2+2+3 Grouping":"2+2+3 Grouping","Accented Open-Hat Flow":"Accented Open-Hat Flow","Basic pop groove":"Basic pop groove","Basic waltz sweep":"Basic waltz sweep","Broken Upbeats":"Broken Upbeats","Carryover Upbeat Groove":"Carryover Upbeat Groove","Compound pulse":"Compound pulse","Cross-Accent Waltz":"Cross-Accent Waltz","Dotted 6/8 push":"Dotted 6/8 push","Dotted Legato Motion":"Dotted Legato Motion","Dotted Lilt":"Dotted Lilt","Dotted Push":"Dotted Push","Dotted Sail":"Dotted Sail","Dotted waltz push":"Dotted waltz push","Double Tie Pocket":"Double Tie Pocket","Downstroke Accent Train":"Downstroke Accent Train","Driving 2/4 Sixteenth Flow":"Driving 2/4 Sixteenth Flow","Five Pulse Drive":"Five Pulse Drive","Half-Note Lead In":"Half-Note Lead In","Jig Bounce":"Jig Bounce","Late Tie Drive":"Late Tie Drive","Legato Waltz Lift":"Legato Waltz Lift","March Chop":"March Chop","Mid-Bar Quarter Lift":"Mid-Bar Quarter Lift","Muted Backbeat Groove":"Muted Backbeat Groove","Muted Engine":"Muted Engine","Muted Grid":"Muted Grid","Muted Tie Groove":"Muted Tie Groove","Muted ballroom":"Muted ballroom","Muted pocket":"Muted pocket","Muted triplet feel":"Muted triplet feel","Offbeat 6/8 Skank":"Offbeat 6/8 Skank","Offbeat Skank":"Offbeat Skank","Offbeat Waltz Skank":"Offbeat Waltz Skank","Open-Chord Lift":"Open-Chord Lift","Quarter Pulse Strum":"Quarter Pulse Strum","Seventh Engine":"Seventh Engine","Straight 8th Flow":"Straight 8th Flow","Straight Seven Flow":"Straight Seven Flow","Sync Tie Shuffle":"Sync Tie Shuffle","Syncopated Chain":"Syncopated Chain","Syncopated dotted accent":"Syncopated dotted accent","Sixteens Syncopated":"Sixteens Syncopated","Smells Like Teen Spirit":"Smells Like Teen Spirit",'The "Island Strum"':'The "Island Strum"',"The 3/4 Pattern":"The 3/4 Pattern","The Clave Pattern":"The Clave Pattern",'The Folk/Rock "Six"':'The Folk/Rock "Six"',"The Jim 'n' Jack Pattern":"The Jim 'n' Jack Pattern","The Most Polarizing Pattern":"The Most Polarizing Pattern","The Soca (Calypso) Pattern":"The Soca (Calypso) Pattern","Tied Upbeat Groove I":"Tied Upbeat Groove I"},patternSubtitles:{"All-down strums with pulse accents":"All-down strums with pulse accents","Alternating accents across eighths":"Alternating accents across eighths","Alternating dead accents":"Alternating dead accents","Alternating dead-note sixteenth engine":"Alternating dead-note sixteenth engine","Bar-end tie with open second bar":"Bar-end tie with open second bar","Bar-two upbeat tie and steady flow":"Bar-two upbeat tie and steady flow","Classic Balkan-style pulse accents":"Classic Balkan-style pulse accents","Continuous down-up eighths":"Continuous down-up eighths","Continuous eighths through 7/8":"Continuous eighths through 7/8","Dead notes on the second pulse":"Dead notes on the second pulse","Dead notes plus tied upstrokes":"Dead notes plus tied upstrokes","Dead-note backbeat":"Dead-note backbeat","Dead-note downstrokes on offbeats":"Dead-note downstrokes on offbeats","Dotted eighth pickup":"Dotted eighth pickup","Dotted pickup and compact turnaround":"Dotted pickup and compact turnaround","Dotted pickup before beat 2":"Dotted pickup before beat 2","Dotted quarter lead with tied pickup":"Dotted quarter lead with tied pickup","Dotted sustain into a tied pickup":"Dotted sustain into a tied pickup","Dotted upbeat in bar two":"Dotted upbeat in bar two","Dotted values with bar-spanning ties":"Dotted values with bar-spanning ties","Down-led 3/4 movement":"Down-led 3/4 movement","Eighth-note stream with shifted accents":"Eighth-note stream with shifted accents","Long dotted lead with tied continuation":"Long dotted lead with tied continuation","Long downstroke then tied pickup":"Long downstroke then tied pickup","Mid-bar ties over a 5/4 groove":"Mid-bar ties over a 5/4 groove","Quarter + eighth movement":"Quarter + eighth movement","Quarter anchors with eighth pickups":"Quarter anchors with eighth pickups","Quarter upstroke with tied transition":"Quarter upstroke with tied transition","Reggae-like offbeats inside 3/4":"Reggae-like offbeats inside 3/4","Rests and dead notes around the offbeats":"Rests and dead notes around the offbeats","Second bar emphasizes beat two":"Second bar emphasizes beat two","Sixteenth insertions with tied carry":"Sixteenth insertions with tied carry","Steady quarter-note movement in 5/4":"Steady quarter-note movement in 5/4","Straight 6/8 down-up flow":"Straight 6/8 down-up flow","Strong quarter pulse with muted response":"Strong quarter pulse with muted response","Tie into bar two with even eighths":"Tie into bar two with even eighths","Pop-Rock Strumming":"Pop-Rock Strumming",'The "bread and butter" of campfire guitar and Russian Rock.':'The "bread and butter" of campfire guitar and Russian Rock.',"Core 3/4 down-up waltz pulse":"Core 3/4 down-up waltz pulse","Dead-note accents on beats 2 and 4":"Dead-note accents on beats 2 and 4","Dotted 16th chain with tied upbeats":"Dotted 16th chain with tied upbeats","Soca offbeat upstrokes with dotted hits":"Soca offbeat upstrokes with dotted hits","Clave-style stops with offbeat replies":"Clave-style stops with offbeat replies","Quarter anchors with sixteenth bursts":"Quarter anchors with sixteenth bursts","Grunge stabs with muted sixteenth rake":"Grunge stabs with muted sixteenth rake","Tied upbeats with continuous sixteenths":"Tied upbeats with continuous sixteenths","Ties in both bars with steady eighths":"Ties in both bars with steady eighths","Tight dead-note grid in odd meter":"Tight dead-note grid in odd meter","Two-pulse bounce with a muted reply":"Two-pulse bounce with a muted reply","Upstroke accents between the pulses":"Upstroke accents between the pulses","Upstroke accents on the offbeats":"Upstroke accents on the offbeats","Upstroke tie before beat three":"Upstroke tie before beat three"}},Ky={title:"Page Not Found",description:"The page you're looking for seems to have wandered off like a musical note in the wind. Don't worry, we'll help you find your way back to making music!",backToHome:"Back to Home",goBack:"Go Back",helpMessage:"Need help? All our music tools are just a click away!"},Yy={meta:{title:"SixStrings App - Musical Tools and Trainers",description:"Comprehensive suite of free online music tools for guitarists: chord generators, rhythm trainers, harmony analysis, CAGED, ear training, and more.",keywords:"guitar, bass, ukulele, musical tools, chords, scales, rhythm trainer, harmony, CAGED, ear training, music theory, fretboard, online tools, music education"},hero:{title:"SixStrings App",subtitle:"Comprehensive toolkit for musicians",description:"All core tools are available online and absolutely free: train rhythm, explore chords, and improve your ear."},categories:{rhythm:"Rhythm",fretboard:"Fretboard",harmony:"Harmony",earTraining:"Ear Training",tools:"Tools",articles:"Articles"},tools:{rhythmTrainer:{title:"Rhythm Trainer",description:"Develop your sense of rhythm with an interactive metronome and exercises"},rhythmGenerator:{title:"Rhythm Generator",description:"Create, edit, and play your own rhythmic patterns"},rhythmMetronome:{title:"Rhythm Metronome",description:"Build drum patterns and practice with a constant or progressive tempo"},strummingPatternsLibrary:{title:"Strumming Patterns",description:"Browse and play ready-made strumming patterns with notation by selected meter"},chordGenerator:{title:"Chords, Arpeggios, Scales",description:"Explore all chord fingerings, arpeggios, and scales for guitar, bass, and ukulele"},scaleExplorer:{title:"Fretboard Explorer",description:"Interactive visualization of notes, intervals, and octaves on the fretboard"},cagedExplorer:{title:"CAGED System",description:"Master the five basic chord shapes and their positions across the fretboard"},chordIdentifier:{title:"Chord Identifier",description:"Discover the name of any chord by selecting notes on the fretboard"},scaleIdentifier:{title:"Scale Finder",description:"Find scales that contain the notes you select on the fretboard"},stringSelector:{title:"String Selector",description:"Find the perfect string set based on scale length, tuning, and playing style"},randomKeySelector:{title:"Random Key",description:"Choose a difficulty level and get a random key for your next practice session"},harmonyGenerator:{title:"Harmony",description:"Study key chords, cadences, modulations, and harmonic analysis"},circleOfFifths:{title:"Circle of Fifths",description:"Interactive circle of fifths to understand relationships between keys"},intervalTrainer:{title:"Interval Trainer β",description:"Develop your musical ear by training to recognize intervals by ear"},microtoneTrainer:{title:"Microtone Trainer",description:"Advanced ear training to distinguish the smallest pitch differences"},chordFunctionsTrainer:{title:"Chord Functions Trainer",description:"Learn to identify tonic, dominant, subdominant, and other functions in harmony"},songBuilder:{title:"Song Builder",description:"Build your own songs based on key or any selected chords."},blog:{title:"Blog",description:"Articles about the site and tools"},theory:{title:"Music Theory",description:"Practice-oriented theory articles with guitar focus"}},features:{title:"Platform Features",multiInstrument:{title:"Multi-Instrument Support",description:"Support for guitar, bass, and ukulele with various tunings"},realisticSound:{title:"Customizable Sound",description:"Customize the sound that works best for you across different instruments"},multilingual:{title:"Multilingual",description:"Full support for Russian and English languages"}}},Qy={text:"Found a bug or have suggestions for improvement?",button:"Leave Feedback"},Kh={siteName:vy,page:wy,meta:by,nav:ky,navigation:Sy,theoryPage:Iy,blogPage:xy,soundSettings:Ty,song:Cy,harmony:Ey,note:Py,accidental:My,mode:Ay,scale:_y,common:Dy,tuning:jy,rhythmGenerator:Ly,rhythmMetronome:Vy,rhythmTrainer:Ny,chords:Ry,pages:Oy,components:Fy,feedback:zy,footer:By,circleOfFifths:$y,scaleExplorer:Gy,randomKeySelector:Hy,cagedExplorer:Wy,microtoneTrainer:Uy,strummingPatternsLibrary:qy,notFound:Ky,home:Yy,cta:Qy},Jy="Шесть струн",Xy={rhythm:"Ритм-тренажер",chords:"Аккорды, арпеджио, гаммы",harmony:"Гармония","circle-of-fifths":"Кварто-квинтовый круг","scales-fretboard-explorer":"Ноты на грифе. Аккорды и гаммы","chord-identifier":"Определитель аккордов","scale-identifier":"Определитель гамм","string-selector":"Подбор струн","rhythm-generator":"Генератор ритма","rhythm-metronome":"Ритм-метроном","strumming-patterns-library":"Библиотека паттернов боя","caged-explorer":"Система CAGED","microtone-trainer":"Тренажер различения микротонов","interval-trainer":"Тренажер распознавания интервалов","chord-functions-trainer":"Тренажер функций аккордов","song-builder":"Конструктор песен",feedback:"Обратная связь","not-found":"Страница не найдена","random-key-selector":"Случайная тональность",blog:"Блог",theory:"Теория"},Zy={rhythm:{title:"Ритм-тренажер для гитары онлайн",description:"Бесплатный онлайн ритм-тренажер для гитары: темп, рисунки, режимы практики и развитие чувства времени.",keywords:"ритм тренажер гитара, тренировка ритма онлайн, упражнения на ритм, метроритм"},chords:{title:"Генератор аккордов для гитары: аппликатуры и арпеджио",description:"Бесплатный онлайн генератор аккордов для гитары с аппликатурами, обращениями, арпеджио и совместимыми гаммами.",keywords:"генератор аккордов для гитары, аккорды гитары, аппликатуры аккордов, арпеджио гитара"},harmony:{title:"Гармония: каденции, модуляции, аккорды",description:"Бесплатный онлайн анализ гармонии тональности: диатонические аккорды, каденции и модуляции для практики.",keywords:"гармония в музыке, каденции, модуляции, аккордовые функции, теория музыки гитара"},"song-builder":{title:"Конструктор песен и аккордовых последовательностей",description:"Бесплатный онлайн конструктор песен: создавайте аккордовые последовательности, слушайте прогрессии и сохраняйте идеи.",keywords:"конструктор песен, генератор аккордовых последовательностей, прогрессии аккордов, songwriting"},"circle-of-fifths":{title:"Интерактивный круг квинт для гитары",description:"Бесплатный онлайн кварто-квинтовый круг для изучения тональностей, знаков при ключе и гармонических связей.",keywords:"круг квинт онлайн, кварто квинтовый круг, тональности, знаки при ключе, теория музыки"},"scales-fretboard-explorer":{title:"Исследователь грифа: аккорды и гаммы на гитаре",description:"Бесплатный онлайн исследователь грифа с отображением нот, интервалов, аккордов и гамм по всему диапазону.",keywords:"ноты на грифе гитары, исследователь грифа, гаммы на грифе, аккорды на гитаре, интервалы"},"chord-identifier":{title:"Определитель аккордов по нотам на гитаре",description:"Бесплатный онлайн определитель аккордов по выбранным нотам на грифе с поиском вариантов и названий.",keywords:"определитель аккордов, определить аккорд по нотам, название аккорда онлайн, аккорды гитара"},"scale-identifier":{title:"Определитель гамм по нотам на грифе",description:"Бесплатный онлайн подбор гамм по выбранным нотам на грифе для импровизации, обучения и анализа.",keywords:"определитель гамм, подобрать гамму по нотам, гаммы на гитаре, scale finder"},"string-selector":{title:"Калькулятор натяжения и подбор калибра струн",description:"Бесплатный онлайн калькулятор натяжения струн и подбор калибра для гитары или баса по мензуре и строю.",keywords:"калькулятор натяжения струн, подбор струн для гитары, калибр струн, натяжение струн бас"},"rhythm-generator":{title:"Генератор ритмических рисунков онлайн",description:"Бесплатный онлайн генератор ритмических рисунков с настройкой размера, темпа, долей и акцентов.",keywords:"генератор ритма онлайн, ритмические рисунки, паттерны ритма, упражнение ритм"},"rhythm-metronome":{title:"Онлайн-метроном и редактор барабанных паттернов",description:"Бесплатный онлайн метроном с сеткой ритма и барабанным редактором: постоянный или прогрессивный темп, пресеты и полиритмы.",keywords:"метроном онлайн, тренировка темпа, барабанные паттерны, полиритм, ритм сетка"},"strumming-patterns-library":{title:"Библиотека паттернов боя для гитары",description:"Каталог гитарных паттернов боя с нотацией, воспроизведением в 2 такта и фильтром избранного.",keywords:"паттерны боя гитара, ритмический бой, библиотека ритмов, бой под гитару"},"caged-explorer":{title:"Система CAGED для гитары: интерактивный тренажер",description:"Бесплатный онлайн тренажер системы CAGED: формы аккордов, связи и позиции на грифе в практическом режиме.",keywords:"система CAGED, caged гитара, формы аккордов, позиции на грифе, теория гитары"},"microtone-trainer":{title:"Тренажер микротонов и слуха",description:"Бесплатный онлайн тренажер микротонов для развития слуха на минимальные высотные различия.",keywords:"тренажер микротонов, развитие слуха, различение высоты, тренировка слуха в центах"},"interval-trainer":{title:"Тренажер интервалов онлайн",description:"Бесплатный онлайн тренажер распознавания интервалов на слух: большие, малые, чистые, увеличенные и уменьшенные.",keywords:"тренажер интервалов онлайн, распознавание интервалов, развитие музыкального слуха, ear training"},"chord-functions-trainer":{title:"Тренажер функций аккордов",description:"Бесплатный онлайн тренажер функций аккордов: определяйте тонику, доминанту, субдоминанту и другие функции.",keywords:"тренажер функций аккордов, гармонический анализ, тоника доминанта субдоминанта, слух гармония"},feedback:{title:"Обратная связь и предложения по функциям",description:"Оставьте отзыв, сообщение об ошибке или предложение по развитию сервиса Шесть струн.",keywords:"обратная связь, отзывы, предложения, гитарный помогатор, форма обратной связи"},"not-found":{title:"Страница не найдена",description:"Страница, которую вы ищете, не существует. Найдите путь обратно к нашим музыкальным тренажерам и гитарным утилитам. Изучайте ритм-тренажеры, генераторы аккордов и упражнения для развития слуха.",keywords:"404, страница не найдена, гитарные инструменты, музыкальные тренажеры, ритм-тренажер, генератор аккордов, музыкальная теория"},"random-key-selector":{title:"Случайная тональность для практики",description:"Генератор случайной тональности и лада для ежедневной практики, импровизации и тренировки слуха.",keywords:"случайная тональность, генератор тональностей, практика гамм, тренировка ладов, гитарная практика"},blog:{title:"Блог для гитаристов: практические гайды онлайн и бесплатно",description:"Практические SEO-гайды по аккордам, ритму, гармонии и развитию слуха. Все инструменты работают онлайн, бесплатно и без установки.",keywords:"блог для гитаристов, гитарные гайды, теория музыки, онлайн инструменты для гитары"},theory:{title:"Музыкальная теория: практические статьи для гитаристов",description:"Раздел по музыкальной теории: интервалы, лады, гармония, ритм и практическое применение на гитаре.",keywords:"музыкальная теория для гитаристов, интервалы, лады, гармония, теория музыки"}},ev={theme:"Переключить тему",switchToEnglish:"Switch to English",switchToRussian:"Переключить на русский"},tv={rhythm_trainer:"Тренажёр",rhythm_generator:"Генератор",rhythm_metronome:"Метроном",strumming_patterns_library:"Паттерны боя",harmony_generator:"Гармония",circle_of_fifths:"Квинтовый круг",chord_generator:"Аккорды, Арпеджио, Гаммы",scale_fretboard_explorer:"Исследователь аккордов и гамм",caged_explorer:"Система CAGED",fretboard_explorer:"Исследователь грифа",chord_identifier:"Определитель аккордов",scale_identifier:"Определитель гамм",song_builder:"Конструктор песен",microtone_trainer:"Микротона",chord_functions_trainer:"Функции аккордов",intervals_trainer:"Интервалы β",more:"Ещё",string_selector:"Подбор струн",blog:"Блог",theory:"Теория",categories:{rhythm:"Ритм",harmony:"Гармония",fretboard:"На грифе",ear:"Слух",tools:"Инструменты",articles:"Статьи"},random_key_selector:"Случайная тональность"},nv={index:{heading:"Музыкальная теория",subtitle:"Практические статьи по теории с фокусом на гитару.",openArticle:"Читать",readerLevels:"Уровни читателя",categories:"Категории",tags:"Теги",readerLevel:"Уровень читателя",draftBadge:"Черновик",noPosts:"Пока нет опубликованных материалов."},readerLevelsMeta:{listener:{label:"Слушатель",description:"Самый старт: звук, пауза, высота, пульс и первые музыкальные слова."},player:{label:"Игрок",description:"База для первых осознанных действий: ритм, интервалы, ноты и простые упражнения."},musician:{label:"Музыкант",description:"Материал для игры: гриф, гаммы, аккорды, аппликатуры и практические связи."},arranger:{label:"Аранжировщик",description:"Связи между темами: тональность, функции, каденции, прогрессии и форма."},composer:{label:"Композитор",description:"Углубление: лады, модуляции, расширенная гармония, интонация и композиционные решения."}},post:{theory:"Музыкальная теория",categories:"Категории",tags:"Теги",readerLevel:"Уровень читателя",draftBadge:"Черновик",tocTitle:"Содержание",backToToc:"к содержанию",articleNavigationTitle:"Навигация по статьям",previousArticle:"Предыдущая статья",nextArticle:"Следующая статья"},category:{titlePrefix:"Категория",subtitlePrefix:"Материалы по теме",openArticle:"Читать",readerLevel:"Уровень читателя",allTheory:"Все статьи по теории",notFound:"Категория не найдена"},tag:{titlePrefix:"Тег",subtitlePrefix:"Материалы по тегу",openArticle:"Читать",readerLevel:"Уровень читателя",allTheory:"Все статьи по теории",noPosts:"По этому тегу пока нет материалов."},level:{titlePrefix:"Уровень",subtitlePrefix:"Материалы уровня",openArticle:"Читать",allTheory:"Все статьи по теории",noPosts:"На этом уровне пока нет материалов."}},rv={index:{heading:"Блог",subtitle:"Статьи для практики: аккорды, ритм, гармония, слух.",works:"",openArticle:"Читать статью",draftBadge:"Черновик",rssAriaLabel:"RSS-лента блога"},post:{blog:"Блог",ctaDefault:"Открыть инструмент",works:"Работает онлайн, бесплатно, без установки.",draftBadge:"Черновик",tocTitle:"Содержание",backToToc:"к содержанию",articleNavigationTitle:"Навигация по статьям",previousArticle:"Предыдущая статья",nextArticle:"Следующая статья"},tag:{titlePrefix:"Тег",subtitlePrefix:"Статьи с тегом",openArticle:"Читать статью",allBlog:"Все статьи блога",noPosts:"По этому тегу пока нет статей."}},ov={soundSettings:"Настройки звука",instrumentsTitle:"Инструменты",instrumentsHint:"Выберите один или несколько инструментов для смешанного звучания.",selectedInstrumentsLabel:"Выбранные инструменты",editInstruments:"Выбрать инструменты",audioSettingsTitle:"Настройки звука",audioEngineTitle:"Звуковой движок",audioEngineHint:"Выберите MIDI (встроенные SoundFont-инструменты), внутренний синтез или внешний MIDI-выход. При недоступности внешних режимов автоматически используется внутренний звук.",audioEngineInternal:"Внутренний",audioEngineSoundfont:"MIDI",audioEngineMidiAuto:"Внешний MIDI",soundfontHint:"Используются встроенные General MIDI SoundFont-инструменты прямо в браузере. При первом воспроизведении может понадобиться дополнительная загрузка.",soundfontNotSupported:"Браузер не поддерживает необходимые возможности Web Audio. Будет использован внутренний движок.",soundfontFallback:"SoundFont воспроизведение не удалось для этого звука. Активирован fallback на внутренний движок.",midiDeviceLabel:"MIDI устройство вывода",midiNoDevices:"MIDI-устройства не найдены",midiNotSupported:"Web MIDI не поддерживается этим браузером. Будет использоваться внутренний движок.",midiNoDevicesFallback:"Нет активных MIDI-выходов. Воспроизведение переключится на внутренний движок.",done:"Готово",instruments:{guitar:"Гитара",piano:"Фортепиано",violin:"Скрипки",woodwind:"Деревянные духовые",flute:"Флейты",synth:"Синтезатор",organ:"Орган",brightPiano:"Яркое фортепиано",celesta:"Челеста",electricPiano1:"Электропиано 1",electricPiano2:"Электропиано 2",harpsichord:"Клавесин",clavinet:"Клавинет",stringEnsemble1:"Струнный ансамбль 1",stringEnsemble2:"Струнный ансамбль 2",choirAahs:"Хор Aahs",voiceOohs:"Голоса Oohs",brassSection:"Духовая секция",frenchHorn:"Валторна",electricGuitarClean:"Чистая электрогитара",electricGuitarJazz:"Джазовая электрогитара",synthStrings1:"Синт-струны 1",synthStrings2:"Синт-струны 2",padWarm:"Тёплый пэд",padPolysynth:"Поли-синт пэд",padChoir:"Хоровой пэд",drawbarOrgan:"Дроубар-орган",rockOrgan:"Рок-орган"}},iv={title:"Конструктор песен",baseKey:"Базовая тональность",note:"Нота",alteration:"Альтерация",modeScale:"Лад / Гамма",diatonicGroup:"Diatonic",harmonicGroup:"Harmonic",melodicGroup:"Melodic",chordPalette:"Палитра аккордов",chordsInScale:"Аккорды гаммы",allChords:"Все аккорды",sharps:"Диезы",flats:"Бемоли",dragInstruction:"Перетащите аккорды в блок песни или нажмите для прослушивания",dragToAdd:"Перетащите для добавления или нажмите для прослушивания",base:"база",gridResolution:"Разрешение сетки",gridResolutionHint:"Разрешение сетки определяет минимальный шаг для размещения и изменения размера аккордов",zoom:"Масштаб",songBuilder:"Конструктор песни",play:"Воспроизвести",stop:"Остановить",clear:"Очистить",confirmClear:"Очистить всю песню?",remove:"Удалить",timeSignature:"Размер",bpm:"BPM",drumVolume:"Громкость метронома",songVolume:"Громкость песни",playbackStart:"Старт",playbackEnd:"Конец",playbackFragment:"Фрагмент",loopPlayback:"Зациклить",loopPlaybackOn:"Режим зацикливания: включен",loopPlaybackOff:"Режим зацикливания: выключен",fullSong:"Вся песня",addRow:"Добавить строку",deleteRow:"Удалить строку",cannotDeleteRowWithChords:"Невозможно удалить строку с аккордами",cannotSaveEmpty:"Невозможно сохранить пустую песню",enterSongName:"Введите название песни:",saveToFavorites:"В избранное",savedToFavorites:"Сохранено в избранное!",favorites:"Избранное",exportMidi:"Экспорт MIDI",cancel:"Отмена",favoritesModal:{title:"Избранные песни",empty:"Нет сохраненных песен. Создайте песню и сохраните её в избранное!",chords:"аккордов",resolution:"разрешение",load:"Загрузить",delete:"Удалить",confirmDelete:"Удалить эту песню из избранного?"},randomProgression:"Случайная каденция",songStructureGenerator:"Генератор структуры песни",selectCadence:"Выбрать каденцию",structureModal:{title:"Пресеты структуры песни",subtitle:"Выберите структуру, чтобы сгенерировать сгруппированные секции",cancel:"Отмена",emptyResult:"Не удалось сгенерировать секции для этой структуры"},structurePresets:{items:{"simple-verse-chorus":{name:"Простой куплет / припев",description:"Компактная форма ABAB."},"classic-pop-rock":{name:"Классический поп / рок",description:"Традиционная полная форма песни."},"modern-pop":{name:"Современный поп",description:"Разгон в пре-хорус и финальный припев."},"short-pop-song":{name:"Короткая поп-песня",description:"Укороченный поп-цикл."},"extended-pop-song":{name:"Расширенная поп-песня",description:"Длинная форма с пост-хорусом."},"rock-standard":{name:"Рок-стандарт",description:"Классический рок с соло."},"alternative-rock":{name:"Альтернативный рок",description:"Куплетно-ориентированная форма."},"indie-rock-pop":{name:"Инди-рок / инди-поп",description:"Инди-форма с инструментальной секцией."},"folk-strophic":{name:"Фолк-строфическая",description:"Четыре повторяющихся куплета."},"folk-with-refrain":{name:"Фолк с рефреном",description:"Чередование куплета и рефрена."},"singer-songwriter":{name:"Сингер-сонграйтер",description:"Акустическая форма с акцентом на куплеты."},ballad:{name:"Баллада",description:"Широкая эмоциональная динамика."},"power-ballad":{name:"Пауэр-баллада",description:"Баллада с соло и кульминационным бриджем."},"aaba-standard":{name:"Стандарт AABA",description:"Классический цикл AABA."},"aaba-intro-outro":{name:"AABA с интро и аутро",description:"Форма AABA с рамкой из интро/аутро."},ababcb:{name:"ABABCB",description:"Чередование AB с бриджем."},abab:{name:"ABAB",description:"Минимальная форма AB."},ababcbb:{name:"ABABCBB",description:"Расширенная AB с двойным финальным припевом."},"aaa-strophic":{name:"AAA строфическая",description:"Трёхкуплетная строфическая форма."},"verse-refrain":{name:"Куплет / рефрен",description:"Куплетный рассказ с рефрен-хуком."},"hymn-like":{name:"Гимническая",description:"Повтор куплетов с финальной строфой."},"punk-garage-rock":{name:"Панк / гаражный рок",description:"Прямая энергичная форма."},"metal-heavy-rock":{name:"Метал / хэви-рок",description:"Тяжёлая форма с брейкдауном и соло."},"progressive-short-form":{name:"Короткая прогрессивная форма",description:"Тематическая короткая прог-структура."},"instrumental-theme":{name:"Инструментальная тема",description:"Цикл тема-вариация."},"instrumental-rock":{name:"Инструментальный рок",description:"Риффовая инструментальная структура."},"blues-12-bar":{name:"Блюз 12 тактов",description:"Блюзовый цикл с соло-хорусом."},"blues-with-intro":{name:"Блюз с интро",description:"Блюзовый цикл в рамке интро/аутро."},"jazz-standard-lead-sheet":{name:"Джаз / Lead Sheet стандарт",description:"Форма head-solo-head."},"loop-electronic-pop":{name:"Луповая электроника / поп",description:"Цикл build/drop."},"ambient-cinematic":{name:"Эмбиент / кинематик",description:"Развивающаяся кинематографическая дуга."},"rap-hip-hop":{name:"Рэп / хип-хоп",description:"Форма куплет-хук с бриджем."},"worship-anthem":{name:"Worship / anthem",description:"Гимническая форма с повторным бриджем."},"minimal-practice":{name:"Минимальная учебная структура",description:"Компактный секционный цикл для практики."},"songwriting-starter":{name:"Старт для сонграйтинга",description:"Базовая форма с явным контрастом секций."}},tags:{pop:"поп",short:"короткая",rock:"рок",radio:"радио",long:"длинная",solo:"соло",alternative:"альтернатива",indie:"инди",folk:"фолк",strophic:"строфическая",refrain:"рефрен",acoustic:"акустика",ballad:"баллада",jazz:"джаз",aaba:"AABA","lead-sheet":"лид-шит",form:"форма",extended:"расширенная",hymn:"гимн",traditional:"традиционная",punk:"панк",garage:"гараж",metal:"метал",heavy:"хэви",progressive:"прогрессив",instrumental:"инструментал",riff:"рифф",blues:"блюз",jam:"джем",classic:"классика",standard:"стандарт",electronic:"электроника",loop:"луп",rap:"рэп","hip-hop":"хип-хоп",worship:"worship",anthem:"anthem",practice:"практика",songwriting:"сонграйтинг",starter:"старт",cinematic:"кинематик",theme:"тема"},sectionLabels:{intro:"Интро",verse:"Куплет",pre_chorus:"Пре-хорус",chorus:"Припев",final_chorus:"Финальный припев",post_chorus:"Пост-хорус",bridge:"Бридж",outro:"Аутро",instrumental:"Инструментал",refrain:"Рефрен",solo:"Соло",a_section:"Секция A",b_section_bridge:"Секция B / Бридж",final_verse:"Финальный куплет",breakdown:"Брейкдаун",theme_a:"Тема A",theme_b:"Тема B",chorus_1:"Хорус 1",chorus_2:"Хорус 2",solo_chorus:"Соло-хорус",chorus_3:"Хорус 3",head_a:"Хед A",bridge_b:"Бридж B",head_out:"Хед аут",build_up:"Билдап",drop_chorus:"Дроп / Припев",final_drop_chorus:"Финальный дроп / Припев",theme:"Тема",development:"Развитие",climax:"Кульминация",resolution:"Развязка",hook:"Хук",riff_a:"Рифф A",riff_b:"Рифф B"}},paletteDrag:"Переместить",chordSelectionTooltip:"Нажмите Ctrl/Cmd + щелчок, чтобы выделить аккорды для группировки",moveChordLeft:"Сдвинуть аккорд влево",moveChordRight:"Сдвинуть аккорд вправо",moveGroupLeft:"Сдвинуть группу влево",moveGroupRight:"Сдвинуть группу вправо",changeDuration:"Изменить длительность",contextMenu:{inversions:"Обращения",rootPosition:"Основной вид",inversion:"Обращение",otherBass:"Другой бас",defaultBass:"Бас по умолчанию",noAvailableNotes:"Нет доступных нот",groupChords:"Сгрупировать аккорды",ungroupChords:"Разгруппировать аккорды",copyGroup:"Сделать копию группы",renameGroup:"Переименовать группу"},cadenceModal:{title:"Выберите каденцию",exact:"Точное соответствие",inclination:"По наклонению",strong:"Сильная",medium:"Средняя",weak:"Слабая",select:"Выбрать",replace:"Заменить",add:"Добавить",cancel:"Отмена",notFound:"Для этой тональности нет каденций"}},av=JSON.parse('{"baseKey":"Базовая тональность","chords":"Аккорды","tonalitySelected":"Выбранная тональность","chordsInScale":"Аккорды гаммы","allChords":"Все аккорды","sharps":"Диезы","flats":"Бемоли","naturalChords":"Натуральные аккорды","sharpChords":"Аккорды с диезами (♯)","flatChords":"Аккорды с бемолями (♭)","cadences":"Каденции","detailedAnalysis":"Детальный анализ","relatedness":"Связь тональностей","title":"Гармония","alteration":"Альтерация","naturalTooltip":"Бекар — без альтерации","targetChord":"Аккорд целевой тональности","diatonicChord":"Диатонический аккорд","cadenceAnalysis":"Анализ каденций","keyInfo":"Информация о тональности","wholeStep":"Т","halfStep":"П","keySelection":"Выбор тональности","note":"Нота","scaleInfo":"Информация о гамме","tonic":"Тоника","family":"Семейство","formula":"Формула","intervals":"Интервалы","degrees":"Ступени","notes":"Ноты","playScale":"Проиграть гамму","modulations":"Модуляции","modeScale":"Лад / Гамма","majorFamily":"мажорное","minorFamily":"минорное","modalFamily":"модальное","diatonicGroup":"Diatonic","harmonicGroup":"Harmonic","melodicGroup":"Melodic","cadencesTitle":"Каденции","chordsTitle":"Аккорды тональности","modulationsTitle":"Модуляции и родственные тональности","foundModulations":"Найдено {{count}} модуляций для текущего лада","chordNotations":"Обозначения аккордов","currentKey":"Текущая тональность","targetKey":"Конечная тональность","mainModulations":"Основные модуляции","modalModulations":"Модальные модуляции","chromaticModulations":"Хроматические модуляции","enharmonicModulations":"Энгармонические модуляции","sequentialModulations":"Секвенционные модуляции","jazzModulations":"Джазовые модуляции","modernModulations":"Современные модуляции","specialModulations":"Специальные модуляции","easy":"Лёгкая","medium":"Средняя","hard":"Сложная","modulation":"Модуляция","return":"Возвращение","returnModulation":"Обратная модуляция","strong":"сильная","weak":"слабая","legend":{"title":"Легенда:","bold":"Жирный с рамкой","pivot":"общий аккорд (pivot)","pivotFull":"Общий аккорд (Pivot):","red":"Красный","targetChord":"аккорд целевой тональности","romanNumerals":"Римские цифры с направлением","double":"Двойное обозначение","tonic":"Тоника","subdominant":"Субдоминанта","dominant":"Доминанта","preDominant":"Предоминанта"},"allModulations":"Все модуляции","progression":"Прогрессия","type":"Тип","difficulty":"Сложность","distance":"Дистанция","direction":"Направление","romanNumerals":"Римские цифры","function":"Функция","degree":"Ступень","triad":"Трезвучие","seventh":"Септаккорд","extensions":"Надстройки","addedNotes":"Добавочные","tension":"Напряжение","resolution":"Разрешение","button":{"details":"Детали","analysis":"Анализ","allModulations":"Все модуляции","modulation":"Модуляция","play":"Играть","close":"Закрыть"},"modal":{"title":"Модуляция","details":"Детали модуляции","analysis":"Анализ тональности"},"section":{"chords":"Аккорды гаммы","cadences":"Каденции","modulations":"Модуляции","relatedKeys":"Родственные тональности"},"selectedKey":"Вы выбрали","displayedKey":"Отображается","equivalentButPractical":"{{key}} музыкально эквивалентна, но практичнее","keySignature":"Знаки при ключе","keySignature.one":"знак","keySignature.few":"знака","keySignature.many":"знаков","noKeySignature":"Без знаков при ключе","fingerings":"Аппликатуры","modulationDescription":{"Close Relationship":"Близкое родство","Distant Relationship":"Отдалённое родство","Modal Relationship":"Модальное родство","Chromatic Relationship":"Хроматическое родство","Enharmonic Relationship":"Энгармоническое родство","Jazz Relationship":"Джазовое родство","Modern Relationship":"Современное родство"},"modulationName":{"Relative Modulation":"Относительная модуляция","Parallel Modulation":"Параллельная модуляция","Dominant Modulation":"Доминантовая модуляция","Subdominant Modulation":"Субдоминантовая модуляция","Mediant Modulation":"Медиантовая модуляция","Submediant Modulation":"Субмедиантовая модуляция","Neapolitan Sixth":"Неаполитанская секста","Augmented Sixth":"Увеличенная секста","Chromatic Mediant":"Хроматическая медианта","Tritone Modulation":"Тритоновая модуляция","Enharmonic Modulation":"Энгармоническая модуляция","Through Diminished Seventh":"Через уменьшенный септаккорд","Enharmonic Through Augmented Sixth":"Энгармоническая через ув.6","Sequential Up by Tone":"Секвенция вверх на тон","Sequential Down by Tone":"Секвенция вниз на тон","Sequential Up by Semitone":"Секвенция вверх на полутон","Sequential Down by Semitone":"Секвенция вниз на полутон","Circle of Fifths":"По квинтовому кругу","Modal Interchange":"Модальная замена","To Dorian Mode":"В дорийский лад","To Phrygian Mode":"В фригийский лад","To Lydian Mode":"В лидийский лад","To Mixolydian Mode":"В миксолидийский лад","To Locrian Mode":"В локрийский лад","Through ii-V":"Через ii-V","Tritone Substitution":"Тритоновая замена","Backdoor":"Задняя дверь","Side Slipping":"Боковое скольжение","Chromatic Planing":"Хроматическое планирование","Quartal Modulation":"Квартовая модуляция","Whole Tone Modulation":"Целотонная модуляция","Octatonic Modulation":"Октатоническая модуляция","Through Pivot Chord":"Через общий аккорд","Through Common Tone":"Через общий звук","Stepwise Modulation":"Поступенная модуляция","Elision":"Элизия (слияние)","Deceptive Modulation":"Обманная модуляция","Abrupt Modulation":"Внезапная модуляция","Phrase Modulation":"Фразовая модуляция","Monophonic Modulation":"Монофоническая модуляция","Chromatic Voice Leading":"Хроматическое голосоведение"},"cadenceName":{"Perfect Authentic":"Совершенная автентическая","Plagal":"Плагальная","Deceptive":"Прерванная","Half Cadence":"Половинная каденция","Jazz ii7-V7-Imaj7 (Major)":"Джазовая ii7-V7-Imaj7 (мажор)","Tritone Substitution":"Тритоновая замена","Backdoor":"Заднедверная","Minor Authentic":"Минорная автентическая","Minor with Predominant":"Минорная с предоминантой","Minor Plagal":"Минорная плагальная","Phrygian Half":"Фригийская половинная","Minor Deceptive":"Минорная прерванная","Jazz ii-V-i (Minor)":"Джазовая ii-V-i (минор)","Natural Minor (i-VI-III-VII)":"Натуральный минор (i-VI-III-VII)","Minor Modal Vamp (i-v-VI-VII)":"Минорный модальный вамп (i-v-VI-VII)","Minor Epic (i-III-VI-VII)":"Минорный эпический (i-III-VI-VII)","Minor Harmonic Cycle (i-iv-V-i)":"Минорный гармонический цикл (i-iv-V-i)","Minor Descending (i-VII-VI-V)":"Минорный нисходящий (i-VII-VI-V)","Minor Extended Epic (i-iv-VII-III-VI-iv-V)":"Расширенный минорный эпический (i-iv-VII-III-VI-iv-V)","Minor Subdominant Resolution (i-VII-IV-V)":"Минорное субдоминантовое разрешение (i-VII-IV-V)","Minor Modal Cycle (ii7♭5-v-i)":"Минорный модальный цикл (ii7♭5-v-i)","Minor Neapolitan Progression (i-iv-♭II-III)":"Минорная неаполитанская прогрессия (i-iv-♭II-III)","Minor Blues Seventh Chain (iv7-VII7-v7-i7)":"Минорная блюзовая цепь септаккордов (iv7-VII7-v7-i7)","Minor Seventh Mediant (i-iv7-VII-IIImaj7)":"Минорная септовая медианта (i-iv7-VII-IIImaj7)","Minor Seventh Extended Cycle (i-i7-iv7-v7-VImaj7-v7)":"Минорный расширенный септовый цикл (i-i7-iv7-v7-VImaj7-v7)","Minor Seventh Major Sixth Resolution (VImaj7-iv7-v7-i)":"Минорное септовое разрешение через большую VI (VImaj7-iv7-v7-i)","Minor Seventh Jazz Cycle (VImaj7-v7-iv7-v7-i7)":"Минорный джазовый септовый цикл (VImaj7-v7-iv7-v7-i7)","Minor Ninth Subdominant-Tonic (iv-iv7-i7-i9)":"Минорная нонаккордовая субдоминанта-тоника (iv-iv7-i7-i9)","Minor Ninth Tonic Vamp (i-vadd11-i-i9)":"Минорный нонаккордовый тонический вамп (i-vadd11-i-i9)","Minor Ninth Extended Major Mediant (i7-i9-VImaj9-III-VII)":"Минорная расширенная нонаккордовая медианта (i7-i9-VImaj9-III-VII)","Minor Ninth Subdominant Cycle (iv9-i9-iv7-i9)":"Минорный нонаккордовый субдоминантовый цикл (iv9-i9-iv7-i9)","Minor Ninth Mediant (i-i9-III-ivsus2-VI-VII)":"Минорная нонаккордовая медианта (i-i9-III-ivsus2-VI-VII)","Minor Ninth Seventh-Subdominant (i9-VII6-III-iv7sus4)":"Минорная нонаккордовая септовая субдоминанта (i9-VII6-III-iv7sus4)","Minor Ninth Modal (i-iv-iv9-VII-v-V)":"Минорная модальная нонаккордовая (i-iv-iv9-VII-v-V)","Minor Ninth Subdominant Resolution (iv9-v7-i)":"Минорное нонаккордовое субдоминантовое разрешение (iv9-v7-i)","Minor Ninth Major Sixth (VImaj7-iv9-i7-v7)":"Минорная нонаккордовая большая VI (VImaj7-iv9-i7-v7)","Minor Ninth Seventh-Dominant (iv9-VIIadd9-v7-i7)":"Минорная нонаккордовая септовая доминанта (iv9-VIIadd9-v7-i7)","Minor Ninth Eleventh Resolution (iv9-VII-i11)":"Минорное нонаккордовое ундецимовое разрешение (iv9-VII-i11)","Minor Ninth Suspended Extended (isus4-i-iv9-VII11-VII7)":"Минорная нонаккордовая задержанная расширенная (isus4-i-iv9-VII11-VII7)","Minor Ninth Complex Dominant (i-iv6add9-iv9-v7sus4-V7)":"Минорная нонаккордовая сложная доминанта (i-iv6add9-iv9-v7sus4-V7)","Dorian Vamp":"Дорийский вамп","Dorian Cadence":"Дорийская каденция","Dorian Major Progression (i-VII-III-IV)":"Дорийская мажорная прогрессия (i-VII-III-IV)","Dorian Modal Resolution (i-v-IV-i)":"Дорийское модальное разрешение (i-v-IV-i)","Dorian Mediant Cycle (i-ii-III-ii)":"Дорийский медиантовый цикл (i-ii-III-ii)","Dorian Suspended Tonic-Dominant (i-isus4-v-IV)":"Дорийская задержанная тоника-доминанта (i-isus4-v-IV)","Dorian Suspended Subdominant (i-v-IVsus4-IV)":"Дорийская задержанная субдоминанта (i-v-IVsus4-IV)","Dorian Suspended Mediant (i-III-IVsus4-IV)":"Дорийская задержанная медианта (i-III-IVsus4-IV)","Dorian Suspended Supertonic (i-ii-IV-IVsus4-IV)":"Дорийская задержанная супертоника (i-ii-IV-IVsus4-IV)","Dorian Suspended Dominant-Tonic (i-V-i-IVsus4-IV)":"Дорийская задержанная доминанта-тоника (i-V-i-IVsus4-IV)","Dorian Suspended Seventh (i7-III7-IVsus4-IV)":"Дорийская задержанная септовая (i7-III7-IVsus4-IV)","Dorian Double Suspended (i-III-VIIsus4-IVsus4-IV)":"Дорийская двойная задержанная (i-III-VIIsus4-IVsus4-IV)","Dorian Suspended Descending (VIIsus4-VII-IVsus4-IV-i)":"Дорийская задержанная нисходящая (VIIsus4-VII-IVsus4-IV-i)","Dorian Suspended Mediant Cycle (III-IV-i-III-vsus4-i)":"Дорийский задержанный медиантовый цикл (III-IV-i-III-vsus4-i)","Dorian Seventh Mediant (i7-IIImaj7-ii-IV)":"Дорийская септовая медианта (i7-IIImaj7-ii-IV)","Dorian Seventh Extended Major (i7-III-IV-i7-III-VIImaj7)":"Дорийская расширенная септовая мажорная (i7-III-IV-i7-III-VIImaj7)","Dorian Ninth Supertonic-Dominant (i7-ii-v9)":"Дорийская нонаккордовая супертоника-доминанта (i7-ii-v9)","Dorian Ninth Seventh Vamp (i9-VIImaj9-i9-VIImaj9)":"Дорийский нонаккордовый септовый вамп (i9-VIImaj9-i9-VIImaj9)","Phrygian Cadence":"Фригийская каденция","Phrygian Dominant":"Фригийская доминанта","Phrygian Dark Vamp (i-♭II-i-vii°)":"Фригийский темный вамп (i-♭II-i-vii°)","Phrygian Spanish Resolution (i-♭II-III)":"Фригийское испанское разрешение (i-♭II-III)","Phrygian Seventh Major (i-♭IImaj7-♭VImaj7-vii7sus2)":"Фригийская большая септовая (i-♭IImaj7-♭VImaj7-vii7sus2)","Lydian Resolution":"Лидийское разрешение","Lydian Cadence":"Лидийская каденция","Lydian Bright Vamp (I-II-I-II)":"Лидийский яркий вамп (I-II-I-II)","Lydian Dominant-Supertonic (I-V-II)":"Лидийская доминанта-супертоника (I-V-II)","Mixolydian Cadence":"Миксолидийская каденция","Mixolydian Vamp":"Миксолидийский вамп","Mixolydian Subdominant Cycle (I-VII-IV-I)":"Миксолидийский субдоминантовый цикл (I-VII-IV-I)","Mixolydian Minor Dominant (I-v-IV-I)":"Миксолидийская минорная доминанта (I-v-IV-I)","Mixolydian Supertonic Resolution (I-VII-ii-I)":"Миксолидийское супертониковое разрешение (I-VII-ii-I)","Mixolydian Suspended Extended (I-Isus4-ii-IV-VII)":"Миксолидийская расширенная задержанная (I-Isus4-ii-IV-VII)","Mixolydian Suspended Tonic-Minor Dominant (Isus4-I-v7-v)":"Миксолидийская задержанная тоника-минорная доминанта (Isus4-I-v7-v)","Mixolydian Suspended Tonic-Subdominant (Isus4-v7add11-IV)":"Миксолидийская задержанная тоника-субдоминанта (Isus4-v7add11-IV)","Mixolydian Suspended Subdominant Cycle (IVsus4-IV-I-V-IV)":"Миксолидийский задержанный субдоминантовый цикл (IVsus4-IV-I-V-IV)","Mixolydian Suspended Seventh-Subdominant (I-VII6-IVsus4)":"Миксолидийская задержанная септовая субдоминанта (I-VII6-IVsus4)","Mixolydian Suspended Double (I-VIIsus2-IVsus4-I)":"Миксолидийская двойная задержанная (I-VIIsus2-IVsus4-I)","Mixolydian Suspended Triple (I-Isus2-IVsus4-Iadd9)":"Миксолидийская тройная задержанная (I-Isus2-IVsus4-Iadd9)","Mixolydian Suspended Seventh Double (IVsus4-VIIadd9-IVsus4)":"Миксолидийская двойная задержанная септовая (IVsus4-VIIadd9-IVsus4)","Mixolydian Seventh Major (IVmaj7-VIImaj7-vi7)":"Миксолидийская большая септовая (IVmaj7-VIImaj7-vi7)","Locrian Resolution":"Локрийское разрешение","Chromatic Mediant":"Хроматическая медианта","Neapolitan Sixth":"Неаполитанская секста","Axis Progression (I-V-vi-IV)":"Прогрессия Axis (I-V-vi-IV)","Sensitive Female Chord (I-vi-IV-V)":"Чувствительный женский аккорд (I-vi-IV-V)","Pop-Punk (I-IV-ii-V)":"Поп-панк (I-IV-ii-V)","Doo-Wop (I-IV-vi-V)":"Ду-воп (I-IV-vi-V)","Andalusian Cadence (I-V-IV-V)":"Андалузская каденция (I-V-IV-V)","Royal Road (vi-V-IV-V)":"Королевская дорога (vi-V-IV-V)","Canon in D (I-iii-vi-V)":"Канон Пахельбеля (I-iii-vi-V)","Plagal-Half (IV-iv-I)":"Плагально-половинная (IV-iv-I)","Extended Plagal (IV-I6-V)":"Расширенная плагальная (IV-I6-V)","Double Plagal (IV-I6-ii)":"Двойная плагальная (IV-I6-ii)","Mixolydian Resolution (I-I6-IV-V)":"Миксолидийское разрешение (I-I6-IV-V)","Tertian Mediant (I-V6-IV-V)":"Терцовая медианта (I-V6-IV-V)","Deceptive Extended (I-V6-vi-IV)":"Расширенная прерванная (I-V6-vi-IV)","Circle Progression (ii-I6-IV-I6)":"Круговая прогрессия (ii-I6-IV-I6)","Epic Progression (I-V-vi-iii-IV-I-IV-V)":"Эпическая прогрессия (I-V-vi-iii-IV-I-IV-V)","Suspended Tonic Vamp (I-Isus4-I-Isus4)":"Задержанный тонический вамп (I-Isus4-I-Isus4)","Suspended Deceptive (I-Vsus4-vi)":"Задержанная прерванная (I-Vsus4-vi)","Major Seventh Tonic (I-Imaj7-IV-V)":"Мажорная септовая тоника (I-Imaj7-IV-V)","Major Seventh Subdominant Deceptive (I-IVmaj7-V-vi)":"Мажорная септовая субдоминантовая прерванная (I-IVmaj7-V-vi)","Major Seventh Tonic Vamp (IVmaj7-Imaj7-IVmaj7-Imaj7)":"Мажорный септовый тонический вамп (IVmaj7-Imaj7-IVmaj7-Imaj7)","Major Seventh Extended Mediant (Imaj7-iii-IV-iii-ii7-Imaj7)":"Мажорная расширенная септовая медианта (Imaj7-iii-IV-iii-ii7-Imaj7)","Major Seventh Subdominant-Mediant (I-iii64-IV-IVmaj7-iii)":"Мажорная септовая субдоминанта-медианта (I-iii64-IV-IVmaj7-iii)","Major Seventh Descending (IVmaj7-iii7-ii7-Imaj7)":"Мажорная нисходящая септовая (IVmaj7-iii7-ii7-Imaj7)","Major Seventh Circle (ii7-V7-I-IVmaj7-iii7)":"Мажорный септовый круг (ii7-V7-I-IVmaj7-iii7)","Major Seventh Jazz Turnaround (Imaj7-vi7-ii7-V7sus4-V7)":"Мажорный джазовый септовый оборот (Imaj7-vi7-ii7-V7sus4-V7)","Major Seventh Chromatic Subdominant (IVmaj7-♭VIImaj7-Imaj7)":"Мажорная хроматическая септовая субдоминанта (IVmaj7-♭VIImaj7-Imaj7)","Major Seventh Chromatic Extended (Iadd9-♭VIImaj7-IVadd9-IV)":"Мажорная расширенная хроматическая септовая (Iadd9-♭VIImaj7-IVadd9-IV)","Major Ninth Supertonic Vamp (ii9-I-ii9-I)":"Мажорный нонаккордовый супертониковый вамп (ii9-I-ii9-I)","Major Ninth Subdominant (I-IVmaj7-ii9-V)":"Мажорная нонаккордовая субдоминанта (I-IVmaj7-ii9-V)","Major Ninth Jazz Turnaround (ii7-V7-ii9-iii7-vi7)":"Мажорный джазовый нонаккордовый оборот (ii7-V7-ii9-iii7-vi7)","Major Ninth Extended Add9 (ii9-viadd9-IVadd9-Vadd9)":"Мажорная расширенная нонаккордовая add9 (ii9-viadd9-IVadd9-Vadd9)","Major Ninth Eleventh Resolution (ii9-V11-ii9-Vadd9)":"Мажорное нонаккордовое ундецимовое разрешение (ii9-V11-ii9-Vadd9)","Major Ninth Complex Voicing (Imaj7 - Vadd9 - ii9 - IVsus2)":"Мажорная нонаккордовая сложная гармония (Imaj7 - Vadd9 - ii9 - IVsus2)","Minor Suspended Dominant (VI-i-III-vsus4-V)":"Минорная задержанная доминанта (VI-i-III-vsus4-V)","Minor Suspended Extended (i-III7-VIadd9-VI-vsus4-V)":"Минорная расширенная задержанная (i-III7-VIadd9-VI-vsus4-V)","Minor Suspended Seventh Vamp (VI-i-VIIsus4)":"Минорный задержанный септовый вамп (VI-i-VIIsus4)","Blues Turnaround":"Блюзовый оборот","Quick Change":"Быстрая смена"},"noteLabel":"Нота","modeLabel":"Лад / Гамма","sharpTooltip":"Диез - повышение на полутон","flatTooltip":"Бемоль - понижение на полутон"}'),sv={title:"Генератор ритма",description:"Автоматическая генерация ритмических паттернов с настраиваемыми параметрами",settings:{timeSignature:"Размер",tempo:"Темп (BPM)",barCount:"Количество тактов",drumVolume:"Громкость барабанов",drumMode:"Режим звука",synth:"Синтез",samples:"Сэмплы",loadSamples:"Загрузить сэмплы",loading:"Загрузка...",metronomeVolume:"Громкость метронома",includeTriplets:"Включить триоли",includeQuintuplets:"Включить квинтоли",includeSextuplets:"Включить секстоли",includePickup:"Включить затакт",samplesLoaded:"Сэмплы загружены",samplesNotLoaded:"Сэмплы не загружены",useSynth:"Использовать синтезированный звук",useSamples:"Использовать сэмплы",loadSamplesFirst:"Сперва загрузите сэмплы",visualizationMode:"Вид визуализации",visualizationCircles:"Кружки",visualizationNotation:"Нотация"},buttons:{generate:"Генерировать",play:"Воспроизвести",stop:"Остановить",shiftLeft:"Сдвиг",shiftRight:"Сдвиг",share:"Поделиться",saveToFavorites:"В избранное",favorites:"Избранное"},shareLinkCopied:"Ссылка скопирована в буфер обмена!",shareFailed:"Не удалось скопировать ссылку",savedToFavorites:"Паттерн сохранён в избранное!",enterPatternName:"Введите название паттерна:",favoritesModal:{title:"Избранные паттерны",empty:"Нет сохранённых паттернов",bars:"тактов",load:"Загрузить",delete:"Удалить",confirmDelete:"Вы уверены, что хотите удалить этот паттерн?"},offset:"Смещение",legend:{title:"Легенда",accent:"Акцент (начало ноты)",continuation:"Продолжение ноты",rest:"Пауза",barLine:"Тактовая черта"},notation:{description:"Стандартная нотация: паузы, лиги и туплеты отображаются автоматически.",loading:"Загрузка нотации...",renderFailed:"Не удалось отрисовать нотацию. Переключитесь на режим «Кружки»."},presetsModal:{title:"Ритмические пресеты",load:"Загрузить"}},lv={title:"Метроном",description:"Создавайте ритмические рисунки, тренируйтесь с пресетами метронома и исследуйте полиритмы в постоянном или прогрессирующем темпе.",controls:{loadedPattern:"Загруженный паттерн",steps:"долей",currentBpm:"Текущий BPM",start:"Старт",stop:"Стоп",tempoMode:"Режим темпа",constant:"Постоянный",progressive:"Прогрессия",increaseEvery:"Увеличивать каждые",bars:"тактов",tempo:"Темп",tempoFrom:"От",tempoTo:"До",timer:"Таймер",timerStart:"Таймер",timerStop:"Выкл. таймер",timerOff:"выкл",timeSignature:"Размер",globalDivision:"Деление такта",preset:"Пресет",volume:"Громкость",reverb:"Реверберация"},favorites:{save:"В избранное",open:"Избранное",saved:"Сохранено в избранное!",promptName:"Введите название рисунка:"},favoritesModal:{title:"Избранные рисунки",empty:"Нет сохраненных рисунков",load:"Загрузить",delete:"Удалить",confirmDelete:"Удалить этот рисунок?",close:"Закрыть"},grid:{title:"Сетка паттерна",subtitle:"Создавайте ритмы как в драм-машине и пробуйте полиритмы",addInstrument:"Добавить инструмент",instrument:"Инструмент",sync:"Общее",divisionDown:"Уменьшить деления",divisionUp:"Увеличить деления",remove:"Удалить",empty:"Добавьте инструмент, чтобы начать"},presets:{metronome24:"Метроном 2/4",metronome34:"Метроном 3/4",metronome44:"Метроном 4/4",metronome54:"Метроном 5/4",metronome68:"Метроном 6/8",metronome78:"Метроном 7/8",metronome98:"Метроном 9/8",metronome128:"Метроном 12/8",pop:"Поп",pop2:"Поп 2",pop3:"Поп 3 (6/8)",rock:"Рок",rock2:"Рок 2",rock3:"Рок 3 (12/8)",jazz:"Джаз",jazz2:"Джаз 2 (3/4)",jazz3:"Джаз 3 (6/8)",funk:"Фанк",funk78:"Фанк 7/8",funk2:"Фанк 2",hiphop:"Хип-хоп",hiphop2:"Хип-хоп 2",trap:"Трэп",trap2:"Трэп 2",disco:"Диско",disco2:"Диско 2",house:"Хаус",house2:"Хаус 2",dnb:"Драм-н-бейс",dnb2:"Драм-н-бейс 2",reggae:"Регги",reggae2:"Регги 2",ska:"Ска",ska2:"Ска 2",bossa:"Босса-нова",bossa2:"Босса-нова 2 (2/4)",samba:"Самба",samba2:"Самба 2",shuffle:"Шаффл",shuffle2:"Шаффл 2",waltz:"Вальс 3/4",waltz2:"Вальс 2 (3/4)",swing:"Свинг",swing2:"Свинг 2",latin68:"Латин 6/8",latin682:"Латин 2 (6/8)",balkan78:"Балканы 7/8",balkan782:"Балканы 2 (7/8)",prog54:"Прог-рок 5/4",prog542:"Прог-рок 2 (5/4)",custom:"Пользовательский"},presetsGroup:{metronome:"Метрономы",genres:"Жанры"},instruments:{kick:"Бочка",snare:"Малый",hihat:"Хай-хэт",hihatOpen:"Открытый хай-хэт",crash:"Крэш",sticks:"Палочки",metronome:"Метроном",metronomeAccent:"Акцент метронома"},dial:{title:"Проигрывание",subtitle:"Стрелка показывает текущую долю",bar:"Такт"}},uv={title:"Ритмический тренажёр",description:"Тренируйте ритмические рисунки, настраивайте темп и тип звука, проигрывайте свой грув.",beats:"Доли",addBeat:"Добавить долю",removeBeat:"Убрать долю",randomize:"Случайно",tempo:"Темп",soundType:"Тип звука",drums:"Барабаны",sticks:"Палочки",hihat:"Хай-хэт для 16-х",start:"Старт",stop:"Стоп",note:"Нота",pause:"Пауза",accented:"Акцент",ti:"Ти",ta:"Та",settings:{timer:"Таймер",timerValue:"Время таймера (сек)",beatCount:"Кол-во долей",tempo:"Темп (BPM)",soundType:"Тип звука",drums:"Барабаны",sticks:"Палочки",hiHat:"Подзвучить 16е хетом",hiHat8th:"Подзвучить 8е хетом",drumMode:"Режим звука",synth:"Синтез",samples:"Сэмплы",loadSamples:"Загрузить сэмплы",loading:"Загрузка...",soundVolume:"Громкость звука",metronomeVolume:"Громкость звука акцентов",samplesLoaded:"Сэмплы загружены",samplesNotLoaded:"Сэмплы не загружены",useSynth:"Использовать синтезированный звук",useSamples:"Использовать сэмплы",loadSamplesFirst:"Сперва загрузите сэмплы"},buttons:{timerStart:"Таймер",timerStop:"Выкл. таймер",random:"Случайно",start:"Старт",stop:"Стоп",alphabetOn:"Алфавит",alphabetOff:"Рисунок",share:"Поделиться",saveToFavorites:"В избранное",favorites:"Избранное",presets:"Пресеты"},shareLinkCopied:"Ссылка скопирована в буфер обмена!",shareFailed:"Не удалось скопировать ссылку",savedToFavorites:"Паттерн сохранён в избранное!",enterPatternName:"Введите название паттерна:",favoritesModal:{title:"Избранные паттерны",empty:"Нет сохранённых паттернов",load:"Загрузить",delete:"Удалить",confirmDelete:"Вы уверены, что хотите удалить этот паттерн?"},presetsModal:{title:"Ритмические пресеты",load:"Загрузить",names:{simple:"Простые паттерны",complex:"Сложные паттерны","most-complex":"Самые сложные паттерны",triplets:"Триоли","radio-1":"Группы по 3 (ra-di-o) 1 позиция","radio-2":"Группы по 3 (ra-di-o) 2 позиция","radio-3":"Группы по 3 (ra-di-o) 3 позиция","university-1":"Группы по 5 (u-ni-ver-si-ty) 1 позиция","university-2":"Группы по 5 (u-ni-ver-si-ty) 2 позиция","listen-to-the-radio-1":"Группы по 7 (li-sten-to-the-ra-di-o) 1 позиция","listen-to-the-radio-2":"Группы по 7 (li-sten-to-the-ra-di-o) 2 позиция"}},legend:{title:"Легенда:",note:"● Нота (удар)",rest:"— Пауза",glyph:"[A-X] Буква рисунка (выберите для каждой доли)",syllable:"Ти/Та Слоги для шестнадцатых"},tooltips:{timer:"Включить/выключить таймер",timerValue:"Установить длительность таймера (30с–15мин)",timerCountdown:"Обратный отсчёт до остановки воспроизведения",random:"Случайный ритм",start:"Запустить воспроизведение",stop:"Остановить воспроизведение",beatGlyph:"Выбрать рисунок доли",note:"Нота",rest:"Пауза",syllable:"Слог",alphabetMode:"Показать все карточки ритмического алфавита"},errors:{timerRange:"Таймер должен быть от 30 секунд до 15 минут",generation:"Ошибка генерации ритма"},glyphNames:{A:"A",B:"B",C:"C",D:"D",E:"E",F:"F",G:"G",H:"H",I:"I",J:"J",K:"K",L:"L",M:"M",N:"N",O:"O",P:"P",Q:"Q",R:"R",S:"S",T:"T",U:"U",V:"V",W:"W",X:"X"},glyphLabels:{A:"Первая 16-я",B:"Вторая 16-я",C:"Третья 16-я",D:"Четвёртая 16-я",E:"Первые две 16-е",F:"Средние две 16-е",G:"Последние две 16-е",H:"Первая и последняя 16-е",I:"Восьмая на 1 (●-●-)",J:"Восьмая на и (-●-●)",K:"Первые три 16-е",L:"Последние три 16-е",M:"Три без второй",N:"Три без третьей",O:"Все четыре 16-е",P:"Пауза (четверть)",Q:"Триоль: первая",R:"Триоль: вторая",S:"Триоль: третья",T:"Триоль: первые две",U:"Триоль: последние две",V:"Триоль: крайние",W:"Триоль: все три",X:"Пауза (триоль)"}},cv={C:"До",D:"Ре",E:"Ми",F:"Фа",G:"Соль",A:"Ля",B:"Си"},dv={natural:"Бекар",sharp:"Диез",flat:"Бемоль"},hv={major:"Мажор",aeolian:"Эолийский",dorian:"Дорийский",phrygian:"Фригийский",lydian:"Лидийский",mixolydian:"Миксолидийский",locrian:"Локрийский",harmonicMinor:"Гармонический минор",melodicMinor:"Мелодический минор",relatedness:"Связь тональностей",targetChord:"Аккорд целевой тональности",diatonicChord:"Диатонический аккорд",harmonicMajor:"Гармонический мажор",phrygianDominant:"Фригийский доминантный",lydianSharp2:"Лидийский ♯2",mixolydianFlat9Flat13:"Миксолидийский ♭9 ♭13",ultraLocrian:"Ультра-локрийский",doubleHarmonicMajor:"Дважды гармонический мажор",hungarianMinor:"Венгерский минор",dorianFlat2:"Дорийский ♭2",lydianAugmented:"Лидийский увеличенный",lydianDominant:"Лидийский доминантный",mixolydianFlat6:"Миксолидийский ♭6",locrianNat2:"Локрийский ♮2"},mv={play:"Играть",frets:"лады",ok:"ОК",cancel:"Отмена",save:"Сохранить"},fv={title:"Строй",instrument:"Инструмент","instrument.guitar":"Гитара","instrument.bass":"Бас-гитара","instrument.ukulele":"Укулеле","instrument.contraguitar":"Контрагитара",standard:"Стандартный",custom:"Кастомный",stringCount:"Количество струн",tuning:"Строй","group.standard":"Стандартный","group.alternative":"Альтернативный","group.drop":"Дроп","group.open":"Открытый","group.baritone":"Баритон","group.other":"Другой","name.E Standard":"Ми стандарт","name.Eb Standard":"Ми Бемоль стандарт","name.D Standard":"Ре стандарт","name.C Standard":"До стандарт","name.B Standard":"Си стандарт","name.Drop D":"Дроп Ре","name.Drop C#":"Дроп До Диез","name.Drop B":"Дроп Си","name.Double Drop D":"Двойной Дроп Ре","name.Drop C":"Дроп До","name.Drop A":"Дроп Ля","name.Open D":"Открытый Ре","name.Open E":"Открытый Ми","name.Open G":"Открытый Соль","name.Open C":"Открытый До","name.Open A":"Открытый Ля","name.Nashville (High-Strung)":"Nashville (High-Strung)","name.FACGCE":"FACGCE Math Rock","name.DAEAC#E":"DAEAC#E Math Rock","name.DADGAD":"DADGAD","name.4th Interval Tuning":"Квартовый строй","name.B Standard (7)":"Си стандарт","name.F# Standard (8)":"Фа Диез стандарт","name.A Standard (7)":"Ля стандарт","name.Drop A (7)":"Дроп Ля","name.Drop G (7)":"Дроп Соль","name.Drop F# (7)":"Дроп Фа Диез","name.E Standard (8)":"Ми стандарт","name.Drop E (8)":"Дроп Ми","name.Drop D# (8)":"Дроп Ре Диез","name.Four String":"4 струны","name.Five String":"5 струн","name.Six String":"6 струн","name.Drop D Bass":"Дроп Ре","name.5-string Standard":"5 струн стандарт","name.6-string Standard":"6 струн стандарт","name.Standard (GCEA)":"Стандартный (GCEA)","name.Baritone (DGBE)":"Баритон (DGBE)","name.Contraguitar Standard":"Стандартный строй контрагитары",strings:"Струны",addString:"Добавить струну",deleteString:"Удалить струну",maxNote:"Максимальная нота",minNote:"Минимальная нота",stringLabel:"Струна {{idx}}",editNote:"Изменить ноту",save:"Сохранить",saving:"Сохранение...",saved:"Строй успешно сохранен!",cancel:"Отмена",unsaved:"У вас есть несохранённые изменения"},pv={title:"Аккорды, Арпеджио, Гаммы",description:"Выберите параметры аккорда для поиска аппликатур",parameters:"Параметры аккорда",root:"Тоника",type:"Тип аккорда",bass:"Басс",selectType:"Выберите тип",forSlashChords:"Для слэш-аккордов",display:"Отображение на диаграмме",notes:"Ноты",intervals:"Интервалы",chordNotes:"Ноты аккорда",chordIntervals:"Интервалы",chordDegrees:"Ступени:",actions:"Действия",fingerings:"Аппликатуры","fingerings.one":"Аппликатура","fingerings.many":"Аппликатур","fingerings.few":"Аппликатуры",arpeggios:"Арпеджио",scales:"Гаммы",arpeggio:"Арпеджио",chord:"Аккорд",found:"найдено",noFingerings:"Аппликатур не найдено. Попробуйте изменить фильтры.",generationParameters:"Фильтры аппликатур",filters:{bass:"Бас",degreeOmissions:"Пропуск ступеней",openStrings:"Открытые струны",mutedStrings:"Заглушенные струны",shell:"Shell-аккорды",difficulty:"Сложность",strict:"Строгий",any:"Любой",only:"Только да",onlyNo:"Только нет",onlyWith:"Только с пропуском",onlyWithout:"Только без пропуска",all:"Все",pattern:"Паттерн",startsWithTonic:"Начинается с тоники",barre:"Баррэ"},difficulty:{all:"Все",easy:"Лёгкие",medium:"Средние",hard:"Сложные"},noCompatibleScales:"Совместимых гамм для аккорда не найдено:",compatibleScales:"Совместимые гаммы",scaleNotes:"Ноты гаммы",compatibilityTooltip:{iconAriaLabel:"Показать объяснение совместимости",title:"Почему эта гамма подходит",summary:"{{matchType}} совпадение ({{percent}}%)",reasons:{coverage:"Покрытие нот аккорда: {{percent}}%",essential:"Опорные тоны: {{matched}}/{{total}}",tensions:"Красочные напряжения: {{matched}}/{{total}}",styleStrong:"Сильное стилевое соответствие аккорду.",style:"Характер гаммы хорошо подходит аккорду.",rootMatch:"Тоника гаммы совпадает с тоникой аккорда.",rootRelation:"Тоника гаммы функционально связана с аккордом.",avoidTones:"Есть избегаемые тоны: {{tones}}.",noAvoidTones:"Явных избегаемых тонов нет.",altered:"Есть альтерированные краски вне аккорда."}},playScaleUp:"Проиграть гамму вверх",playScaleDown:"Проиграть гамму вниз",scaleUp:"Вверх",scaleDown:"Вниз",compatibility:"Совместимость",matchType:{perfect:"Идеальное",good:"Хорошее",partial:"Частичное"},scaleFamily:{diatonic:"Диатонические",harmonic:"Гармонические",melodic:"Мелодические",symmetric:"Симметричные",blues:"Блюзовые",world:"Этнические",bebop:"Бибоп"},chordTypes:{triads:"Трезвучия",suspended:"Задержанные",sixths:"С 6 ступенью",sevenths:"Септаккорды",ninths:"С 9 ступенью",elevenths:"С 11 ступенью",thirteenths:"С 13 ступенью",altered:"Альтерированные"},types:{5:"Пауэр-аккорд",6:"Мажорный 6",maj:"Мажор",min:"Минор",dim:"Уменьшенный",aug:"Увеличенный",maj7:"Мажорный 7",min7:"Минорный 7",dom7:"Доминантсепт",dim7:"Уменьшенный 7",m7b5:"Полууменьшенный 7",mMaj7:"Минор мажорная 7",augMaj7:"Увеличенный мажорная 7","7b5":"7♭5","7#5":"7♯5",maj7b5:"Maj7♭5",maj9:"Мажорный 9",min9:"Минорный 9",dom9:"Доминант 9",maj11:"Мажорный 11",min11:"Минорный 11",dom11:"Доминант 11",maj13:"Мажорный 13",min13:"Минорный 13",dom13:"Доминант 13","7b9":"7♭9","7#9":"7♯9","maj7#9":"Maj7♯9","maj7#11":"Maj7♯11","9#11":"9♯11","13b9":"13♭9","13#11":"13♯11","7alt":"7 Альтерированный",m9b5:"m9♭5",sus2:"Подвешенный 2",sus4:"Подвешенный 4",m6:"Минорный 6","6/9":"6/9"},shareLink:"Поделиться ссылкой",linkCopied:"Ссылка скопирована в буфер обмена!",shareFailed:"Не удалось скопировать ссылку",positions:{open:"Открытая позиция","1to4":"Позиции 1-4","5to8":"Позиции 5-8","9to12":"Позиции 9-12"},arpeggioPattern:{balanced:"Сбалансированный",twoOneTwo:"2-1-2"},fingeringTypes:{open:"Открытая",barre:"Баррэ",partialBarre:"Частичное баррэ",shell:"Шелл",triad:"Трезвучие",power:"Пауэр-аккорд",rootless:"Без тоники",standard:"Стандартная"},barreState:{with:"Баррэ",without:"Без баррэ",full:"Полное баррэ",partial:"Частичное баррэ",none:"Без баррэ"},collections:{favorites:"Избранное",myCollections:"Мои коллекции",open:"Открыть",saveVoicing:"Сохранить аппликатуру",createCollection:"Создать коллекцию",newCollection:"Новая коллекция",collectionName:"Название коллекции",create:"Создать",print:"Печать",rename:"Переименовать",delete:"Удалить",deleteCollectionQuestion:"Удалить коллекцию?",emptyCollection:"В этой коллекции пока нет аппликатур.",emptyCollectionHint:"Найдите подходящий аккорд и сохраните его сюда.",collectionNameInvalid:"Введите корректное название коллекции (до 50 символов).",collectionNameDuplicate:"Коллекция с таким названием уже существует.",defaultCollectionLocked:"Эту коллекцию нельзя изменить.",operationFailed:"Не удалось выполнить действие.",renamed:"Коллекция переименована.",deleted:"Коллекция удалена.",addVoicingAria:"Добавить аппликатуру в коллекцию",voicingSavedAria:"Аппликатура сохранена в коллекции",openCollectionsAria:"Открыть коллекции аппликатур",openCollectionAria:"Открыть коллекцию",renameCollectionAria:"Переименовать коллекцию",deleteCollectionAria:"Удалить коллекцию",removeVoicingAria:"Удалить аппликатуру из коллекции",saveToCollectionAria:"Сохранить в коллекцию {{name}}",downloadAria:"Скачать диаграмму аппликатуры",downloadFormatTitle:"Скачать диаграмму",downloadAsSvg:"SVG",downloadAsPng:"PNG",downloadCancel:"Отмена"}},gv={names:{major:"Мажор",ionian:"Ионийский (Мажор)",dorian:"Дорийский",phrygian:"Фригийский",lydian:"Лидийский",mixolydian:"Миксолидийский",aeolian:"Эолийский (Натуральный минор)",locrian:"Локрийский",naturalMinor:"Натуральный минор",harmonicMinor:"Гармонический минор",melodicMinor:"Мелодический минор",majorPentatonic:"Мажорная пентатоника",minorPentatonic:"Минорная пентатоника",egyptianPentatonic:"Египетская пентатоника",chinesePentatonic:"Китайская пентатоника",majorBlues:"Мажорная блюзовая гамма",minorBlues:"Минорная блюзовая гамма",wholeTone:"Целотонная",diminished:"Уменьшенная (полутон-тон)",dominantDiminished:"Доминирующая уменьшенная (тон-полутон)",chromatic:"Хроматическая",bebop:"Бибоп мажор",bebopMinor:"Бибоп минор",bebopDominant:"Бибоп доминантная",arabic:"Арабская (Хиджаз)",persian:"Персидская",japanese:"Японская (Ин Сен)",gypsy:"Цыганская (Венгерская)",augmented:"Увеличенная",prometheus:"Прометеевская",tritone:"Тритоновая",alteredScale:"Альтерированная (Супер-локрийская)",lydianbFlat7:"Лидийская ♭7 (Лидийская доминантная)",harmonicMajor:"Гармонический мажор",phrygianDominant:"Фригийский доминантный",lydianSharp2:"Лидийский ♯2",mixolydianFlat9Flat13:"Миксолидийский ♭9 ♭13",ultraLocrian:"Ультра-локрийский",doubleHarmonicMajor:"Дважды гармонический мажор",hungarianMinor:"Венгерский минор",dorianFlat2:"Дорийский ♭2",lydianAugmented:"Лидийский увеличенный",lydianDominant:"Лидийский доминантный",mixolydianFlat6:"Миксолидийский ♭6",locrianNat2:"Локрийский ♮2"}},yv=JSON.parse('{"fretboardExplorer":{"title":"Исследователь грифа","description":"Исследуйте гриф с интерактивной визуализацией нот и цветами октав","rootNote":"Тоника","rootNoteHelper":"Выберите тоническую ноту для выделения на грифе","displayMode":"Режим отображения","notes":"Ноты","intervals":"Интервалы","currentTuning":"Текущий строй","fretboard":"Гриф","fretboardPlaceholder":"Интерактивный гриф появится здесь","octaveLegend":"Легенда октав","octaveLabel":"Октава","octaveLegendHelper":"Каждая октава показана своим цветом для удобной визуализации","rootNoteIndicator":"Тоника - выделена жирным кольцом","highlightedNoteIndicator":"Выделенная нота - показана с тонким кольцом","minFret":"Мин лад","maxFret":"Макс лад"},"chordIdentifier":{"title":"Определитель аккордов","description":"Отметьте ноты на грифе, чтобы определить, какой аккорд вы играете","tuning":"Настроить строй","clear":"Очистить","fretboard":"Гриф","results":"Результаты","playChord":"Играть аккорд","playArpeggio":"Арпеджио","confidence":"Уверенность","alternatives":"Альтернативные варианты","noMatch":"Не удалось определить аккорд. Попробуйте добавить или изменить ноты.","notes":"Ноты","intervals":"Интервалы","sharps":"Диезы","flats":"Бемоли","shiftLeft":"Сдвиг","shiftRight":"Сдвиг","shiftLeftTooltip":"Сдвинуть аккорд влево на один лад","shiftRightTooltip":"Сдвинуть аккорд вправо на один лад","breakdown":"Раскладка по нотам","extraNotes":"Дополнительные ноты (не входят в основной паттерн)","columns":{"bass":"Bass","root":"Root","third":"sus2/m3/3/sus4","fifth":"♭5/5/♯5","sixth":"6/7/maj7","ninth":"♭9/9/♯9","eleventh":"11/♯11","thirteenth":"♭13/13"},"labels":{"3":"3","5":"5","6":"6","7":"7","9":"9","11":"11","13":"13","sus2":"sus2","m3":"m3","sus4":"sus4","b5":"♭5","sharp5":"♯5","maj7":"maj7","b9":"♭9","sharp9":"♯9","sharp11":"♯11","b13":"♭13"},"hint":{"title":"Как пользоваться","description":"Кликайте на ноты на грифе, чтобы отметить прижатые струны. После выбора двух или более нот, под грифом появятся возможные названия аккорда. Открытые струны отмечаются кружком ○, заглушенные — крестиком ✕."}},"scaleIdentifier":{"title":"Определитель гамм","description":"Выберите ноты на грифе, чтобы найти подходящие гаммы","clear":"Очистить","results":"Подходящие гаммы","noMatch":"Подходящих гамм не найдено. Попробуйте добавить или изменить ноты.","sharps":"Диезы","flats":"Бемоли","shiftLeft":"Сдвиг","shiftRight":"Сдвиг","shiftLeftTooltip":"Сдвинуть ноты влево на один лад","shiftRightTooltip":"Сдвинуть ноты вправо на один лад","hint":{"title":"Как пользоваться","description":"Выберите две или больше нот на грифе. Подходящие гаммы появятся ниже, а лучшая будет показана полупрозрачными нотами на грифе."}},"stringSelector":{"title":"Подбор струн","description":"Найдите идеальный комплект струн для вашего инструмента на основе мензуры, строя и стиля игры","configuration":"Конфигурация","instrumentType":"Тип инструмента","instruments":{"acoustic_guitar":"Акустическая гитара","electric_guitar":"Электрогитара","bass_guitar":"Бас-гитара"},"stringCount":"Количество струн","strings":"струн","scaleLength":"Мензура","tuning":"Строй","stringSet":"Комплект струн","tensionAnalysis":"Анализ натяжения","totalTension":"Общее натяжение","averageTension":"Среднее натяжение","tensionGuide":"Шкала натяжения","barWidthInfo":"Ширина полосы показывает относительное натяжение (% от максимума в комплекте)","low":"Низкое","optimal":"Оптимальное","high":"Высокое","veryHigh":"Очень высокое","wound":"обмотка","clickToEdit":"Нажмите для изменения калибра","editHint":"Нажмите на любой калибр, чтобы изменить его и увидеть как изменится натяжение","customMode":"Пользовательский комплект (изменён)","resetToStandard":"Сбросить на стандартный","clickGaugeToEdit":"Нажмите на калибр для настройки","share":"Поделиться","shareLink":"Поделиться ссылкой","linkCopied":"Ссылка скопирована в буфер обмена!","shareFailed":"Не удалось скопировать ссылку","helpTitle":"Как пользоваться","help1":"Выберите тип инструмента, количество струн и строй","help2":"Выберите мензуру (поддерживаются баритоны и мультимензурные инструменты)","help3":"Выберите стандартный комплект или нажмите на калибр для настройки","help4":"Визуализация показывает натяжение каждой струны с цветовой кодировкой: зелёный — оптимальное (14-18 фунтов)"},"functionsTrainer":{"title":"Тренажёр функций аккордов","description":"Определяйте скрытые функции аккордов внутри музыкальных каденций.","common":{"unknown":"Неизвестно"},"difficulty":{"beginner":"Новичок (I-IV-V)","intermediate":"Средний (все трезвучия)","advanced":"Продвинутый (трезвучия + обращения)","expert":"Эксперт (трезвучия + септаккорды)","master":"Мастер (трезвучия + септаккорды + обращения)","guru":"Гуру (+ sus + секстаккорды)"},"settings":{"title":"Настройки","difficulty":"Сложность","scaleMode":"Лад","fixedKey":"Фиксированная тональность","tonalityMode":{"title":"Режим смены тональности","randomEach":"Случайная для каждого вопроса","randomSession":"Одна случайная на сессию","fixed":"Фиксированная"}},"scaleMode":{"major":"Мажор","minor":"Минор","both":"Мажор + Минор"},"actions":{"startSession":"Начать сессию","soundSettings":"Настройки звука","statistics":"Статистика","replayTask":"Повторить задание","playReference":"Проиграть I-IV-V-I","stopTraining":"Остановить тренировку","finishSession":"Завершить сессию","nextQuestion":"Следующий вопрос","newTraining":"Новая тренировка"},"game":{"scoreFirstAttempt":"Счёт (первая попытка)","progress":"Прогресс","accuracy":"Точность","currentKey":"Текущая тональность: {{key}}","questionProgress":"Вопрос {{current}} / {{total}}","unknownChord":"Неизвестный аккорд","chordN":"Аккорд {{n}}","chooseAnswerForSlot":"Выберите ответ для позиции {{slot}}","incorrectMessage":"Неверно. Попробуйте ещё раз. В зачёт идёт только первая попытка.","correctMessage":"Верно."},"chordNaming":{"degree":{"1":"Тоника","2":"Супертоника","3":"Медианта","4":"Субдоминанта","5":"Доминанта","6":"Субмедианта","7":"Вводный тон"},"form":{"triad":"трезвучие","seventh":"септаккорд","sus2":"sus2 аккорд","sus4":"sus4 аккорд","sixth":"секстаккорд"},"inversion":{"root":"основной вид","first":"1-е обращение","second":"2-е обращение","third":"3-е обращение"}},"finished":{"title":"Сессия завершена","score":"Счёт","bestOnLevel":"Лучший результат на уровне","noRecord":"Нет рекорда","accuracyProgress":"Прогресс точности","performance":{"excellent":"Отличный результат","solid":"Хороший результат","keepPracticing":"Продолжайте тренироваться"}},"history":{"scaleModeMixed":"смешанный мажор/минор"},"statsModal":{"title":"Статистика тренажёра","bestByDifficulty":"Лучшее по уровням сложности","noAttempts":"Нет попыток","lastSessions":"Последние 10 сессий","noHistoryYet":"История пока пуста.","keyLabel":"Тональность","resetStatistics":"Сбросить статистику"}},"intervalTrainer":{"title":"Тренажёр интервалов β","description":"Определяйте интервалы относительно дрона и развивайте устойчивый интервальный слух.","common":{"unknown":"Неизвестно"},"difficulty":{"beginner":"Новичок","intermediate":"Любитель","advanced":"Продвинутый","expert":"Эксперт","master":"Мастер","guru":"Гуру","super_gourmet":"Супер-гурман"},"settings":{"title":"Настройки","difficulty":"Сложность","scaleMode":"Лад","intervalDisplayMode":"Отображение интервалов","intervalDisplayName":"Полные названия","intervalDisplayDegree":"Номера ступеней","fixedKey":"Тональность","tonalityMode":{"title":"Режим смены тональности","randomEach":"Случайная для каждого вопроса","randomSession":"Одна случайная на сессию","fixed":"Фиксированная"},"trainingIntervals":"Интервалы этого уровня","playCadence1451":"Проиграть каденцию 1-4-5-1 перед дроном"},"scaleMode":{"major":"Мажор","minor":"Минор","both":"Мажор + Минор"},"actions":{"startSession":"Начать сессию","soundSettings":"Настройки звука","statistics":"Статистика","replayTask":"Повторить задание","replayCadence1451":"1-4-5-1","playMelodic":"Мелодический режим","playHarmonic":"Гармонический режим","startDrone":"Запустить дрон","stopDrone":"Остановить дрон","stopTraining":"Остановить тренировку","finishSession":"Завершить сессию","nextQuestion":"Следующий вопрос","newTraining":"Новая тренировка","playSelected":"Проиграть мой ответ","playCorrect":"Проиграть правильный","compare":"Сравнить интервалы"},"sound":{"title":"Настройки звука","instrumentTitle":"Выбор инструмента","instrumentHint":"Выберите один инструмент для ноты и настройте его громкость.","instrument":"Инструмент","instrumentGain":"Уровень инструмента: {{value}}%","preview":"Слушать","droneTitle":"Настройки дрона","dronePreset":"Пресет дрона","droneGain":"Уровень дрона: {{value}}%","previewDrone":"Демо дрона","stopPreviewDrone":"Остановить демо","presets":{"tonpura-light":"Танпура Light","electric-power":"Electric Power","bass-pad":"Bass Pad","velvet-pad":"Бархатный Pad","choir-mist":"Хоровой Туман","glass-halo":"Стеклянный Halo","deep-space":"Глубокий Космос"}},"game":{"score":"Счёт","progress":"Прогресс","accuracy":"Точность","currentKey":"Текущая тональность: {{key}}","questionProgress":"Вопрос {{current}} / {{total}}","prompt":"Прослушайте ноту на фоне дрона и выберите интервал.","correctMessage":"Верно.","incorrectMessage":"Неверно.","correctAnswer":"Правильный ответ","yourAnswer":"Ваш ответ"},"intervals":{"unison":{"name":"Чистая прима","short":"ч1"},"octave":{"name":"Чистая октава","short":"ч8"},"minor_second":{"name":"Малая секунда","short":"м2"},"major_second":{"name":"Большая секунда","short":"б2"},"minor_third":{"name":"Малая терция","short":"м3"},"major_third":{"name":"Большая терция","short":"б3"},"perfect_fourth":{"name":"Чистая кварта","short":"ч4"},"tritone":{"name":"Тритон","short":"тр"},"perfect_fifth":{"name":"Чистая квинта","short":"ч5"},"minor_sixth":{"name":"Малая секста","short":"м6"},"major_sixth":{"name":"Большая секста","short":"б6"},"minor_seventh":{"name":"Малая септима","short":"м7"},"major_seventh":{"name":"Большая септима","short":"б7"}},"finished":{"title":"Сессия завершена","score":"Счёт"},"history":{"scaleModeMixed":"смешанный мажор/минор"},"statsModal":{"title":"Статистика тренажёра","bestByDifficulty":"Лучшее по уровням","noAttempts":"Нет попыток","lastSessions":"Последние 20 сессий","noHistoryYet":"История пока пуста.","keyLabel":"Тональность","hardestIntervals":"Сложные интервалы","attempts":"попыток","resetStatistics":"Сбросить статистику"}}}'),vv={noteSelector:{optional:"(необязательно)",alteration:"Альтерация"},fretboard:{playArpeggio:"Проиграть арпеджио (только видимые ноты)",arpeggio:"Арпеджио",allNotes:"Все ноты",arpeggioFrets:"Арпеджио: {{min}}-{{max}} лады"}},wv={description:"Мы ценим ваше мнение! Расскажите, что вам нравится, что можно улучшить, или какие функции вы хотели бы увидеть."},bv={madeWithLove:"Сделано с любовью к гитарам"},kv={title:"Кварто-квинтовый круг",circle:"Круг тональностей",centerText:"Круг квинт",instruction:"Нажмите на мажорную (синюю) или минорную (фиолетовую) тональность для просмотра деталей",keySignature:"Знаки при ключе",notesWithAccidentals:"Ноты со знаками",scaleNotes:"Ноты гаммы",intervals:"Интервалы от тоники",formula:"Формула лада",chords:"Аккорды тональности",additionalInfo:"Дополнительная информация",tonic:"Тоника",mode:"Лад",family:"Семейство",selectKeyPrompt:"Выберите тональность",clickToSelect:"Нажмите на круг, чтобы выбрать мажорную или минорную тональность",harmony:"Гармония",viewInHarmony:"Посмотреть на странице гармонии",sharp:{one:"диез",few:"диеза",many:"диезов",other:"диезов"},flat:{one:"бемоль",few:"бемоля",many:"бемолей",other:"бемолей"}},Sv={title:{chordScale:"Исследователь аккордов и гамм",fretboard:"Исследователь грифа"},description:{chordScale:"Изучайте аккорды и гаммы на грифе гитары",fretboard:"Изучайте расположение всех нот на грифе гитары"},mode:{label:"Тип изучения",chord:"Аккорд",scale:"Гамма",allNotes:"Все ноты"},display:{label:"Режим отображения",notes:"Ноты",intervals:"Интервалы"},tonic:{label:"Тоника",helperDefault:"Выберите основную ноту",helperAll:"Выберите ноту для выделения на грифе"},chordCategory:{label:"Категория аккорда",placeholder:"Выберите категорию",triad:"Трезвучия",seventh:"Септаккорды",extended:"Расширенные",suspended:"Задержанные",added:"С добавленными тонами"},chordType:{label:"Тип аккорда",placeholder:"Выберите тип",selectCategoryFirst:"Сначала выберите категорию"},scaleCategory:{label:"Категория гаммы",major:"Мажорные",minor:"Минорные",modal:"Модальные",pentatonic:"Пентатоники",blues:"Блюзовые",jazz:"Джазовые",exotic:"Экзотические",symmetric:"Симметричные"},scale:{label:"Гамма"},fretboard:{chordTitle:"Аккорд на грифе",scaleTitle:"Гамма на грифе",notesTitle:"Ноты на грифе"},info:{chordNotes:"Ноты аккорда",scaleNotes:"Ноты гаммы",intervalStructure:"Интервальная структура",playChord:"Воспроизвести аккорд",playArpeggio:"Воспроизвести арпеджио",playScaleUp:"Воспроизвести гамму вверх",playScaleDown:"Воспроизвести гамму вниз"},intervals:{tone:"Т",semitone:"П",legend:"Т = тон, П = полутон"},actions:{share:"Поделиться",shareLink:"Поделиться ссылкой",linkCopied:"Ссылка скопирована в буфер обмена!"},hand:{title:"Отображение",left:"Для левши",right:"Для правши"}},Iv={title:"Система CAGED для гитары",description:"Изучайте систему CAGED для понимания грифа гитары. Пять основных форм аккордов по всему грифу.",tonic:{label:"Тоника",helper:"Выберите основную ноту аккорда"},shape:{label:"Форма CAGED"},shapes:{C:"Форма C",A:"Форма A",G:"Форма G",E:"Форма E",D:"Форма D"},chordCategory:{label:"Категория аккорда",triad:"Трезвучия",seventh:"Септаккорды"},chordType:{label:"Тип аккорда",maj:"Мажор",min:"Минор",maj7:"Мажорный 7",min7:"Минорный 7",dom7:"Доминантсепт"},position:{label:"Позиция",open:"Открытая",fret:" лад"},mode:{single:"Отдельная позиция",fullNeck:"Весь гриф"},stringGroups:{321:"3-2-1",432:"4-3-2",543:"5-4-3",654:"6-5-4"},fullNeck:{positionHighlightLabel:"Подсветка позиций CAGED",stringGroupHighlightLabel:"Подсветка групп по 3 струны",highlightHint:"Если фильтры не выбраны, все ноты показаны нейтрально. Выбранные фильтры усиливают акцент."},fretboard:{title:"Форма на грифе",fullNeckTitle:"Все позиции CAGED на грифе"},actions:{showScale:"Показать гамму",hideScale:"Скрыть гамму",toggleScale:"Показать/скрыть гамму",showArpeggio:"Показать арпеджио",hideArpeggio:"Скрыть арпеджио",toggleArpeggio:"Показать/скрыть арпеджио",share:"Поделиться",shareLink:"Поделиться ссылкой",linkCopied:"Ссылка скопирована в буфер обмена!"}},xv={title:"Тренировка различения микротонов",description:"Игра с прогрессивной сложностью для измерения и улучшения способности различать высоту звука",stats:{level:"Уровень",streak:"Серия",bestResult:"Лучший результат",correct:"Правильно",mistakes:"Ошибки",questions:"Вопросы",noCorrectAnswers:"Пока нет правильных ответов",percentOfSemitone:"% от полутона"},gameStates:{readyToStart:"Готовы начать?",readyDescription:"Проверьте свою способность различать высоту звука на 10 прогрессивных уровнях сложности. У вас есть 5 ошибок до окончания игры.",playingAudio:"Воспроизведение аудио последовательности...",question:"Второй тон был выше или ниже первого?",correct:"Правильно!",incorrect:"Неправильно",actualDifference:"Фактическая разность",nextQuestion:"Следующий вопрос через 2 секунды...",levelComplete:"завершён!",movingToLevel:"Переход на Уровень",gameOver:"Игра окончена",congratulations:"Поздравляем!",finalResults:"Итоговые результаты:",reached:"Достигнут",accuracy:"Точность",cents:"центов"},buttons:{startNewGame:"Начать новую игру",loadProgress:"Загрузить прогресс",saveProgress:"Сохранить прогресс",resetGame:"Сбросить игру",playAgain:"Играть снова",testSound:"Тест звука",lower:"Ниже",higher:"Выше"},settings:{title:"Настройки",sound:"Звук",timbreDescription:"Базовая частота случайно выбирается из диапазона G3-E5 для каждого вопроса. Ваши звуковые предпочтения автоматически сохраняются."},timbreOptions:{sine:{label:"Чистый синус",description:"Чистый математический тон, без гармоник"},strings:{label:"Струнный ансамбль",description:"Богатые пилообразные гармоники, умеренная атака"},woodwind:{label:"Духовые",description:"Мягкий дыхательный тон, медленная атака, естественная реверберация"},plucked:{label:"Щипковые струны",description:"Резкая атака, треугольная волна, долгий спад"},synth:{label:"Синтезатор",description:"Резкие пилообразные + квадратные волны, яркий и острый"}},leaderboard:{title:"Ваш прогресс",bestGame:"Лучшая игра",lastGame:"Последняя игра",levelReached:"Достигнутый уровень",accuracy:"Точность",bestResult:"Лучший результат",status:"Статус",completed:"Завершена",gameOver:"Прервана",noGamesPlayed:"Игр пока не было",at:"в"},instructions:{title:"Как играть",steps:{0:"Выберите предпочитаемый тембр звука (базовая частота случайна для каждого вопроса)",1:'Нажмите "Начать игру" для начала испытания прогрессивной сложности (10 уровней)',2:"Слушайте два тона: референсный → пауза → тестовый тон",3:"Решите, был ли второй тон выше или ниже первого",4:"Дайте 5 правильных ответов подряд для перехода на уровень (или минимум 20 вопросов)",5:"У вас есть 5 ошибок всего до окончания игры",6:"Отслеживайте свой лучший результат - наименьшую разность, которую вы правильно определили"},difficultyLevels:"Уровни сложности (всего 10):",progressiveNote:"Внутри каждого уровня сложность прогрессивно увеличивается от максимальных к минимальным центам по мере ответов на вопросы."},alerts:{progressSaved:"Прогресс успешно сохранён!",progressLoaded:"Прогресс успешно загружен!",errorLoadingProgress:"Ошибка загрузки сохранённого прогресса",noSavedProgress:"Сохранённый прогресс не найден"},modal:{success:"Успех",error:"Ошибка",info:"Информация",close:"Закрыть"}},Tv={title:"Библиотека паттернов боя",description:"Выберите размер, слушайте двухтактовые паттерны, добавляйте избранное и тренируйтесь в удобном темпе.",loading:"Загрузка паттернов...",controls:{meter:"Размер",tempo:"Темп (BPM)",difficulty:"Сложность",difficultyOptions:{all:"Все",easy:"Легко",medium:"Средне",hard:"Сложно"},showFavoritesOnly:"Показать только избранное",hiHatVolume:"Громкость хай-хэта",drumVolume:"Громкость бочки и малого",metronomeVolume:"Громкость метронома"},difficulties:{easy:"Легко",medium:"Средне",hard:"Сложно",unknown:"Не указана"},labels:{difficulty:"Сложность",tags:"Теги",noTags:"Без тегов"},tags:{"5-4":"5/4","6-8":"6/8","7-8":"7/8",accent:"акцент",advanced:"продвинутый",balkan:"балканский",basic:"базовый",beginner:"начинающий",compound:"составной","dead-notes":"глушеные ноты",dotted:"пунктир","eighth-notes":"восьмые",groove:"грув",grouping:"группировка",jig:"джиг",legato:"легато",march:"марш",muted:"приглушенный",offbeat:"слабая доля",pickup:"затакт",pop:"поп",pulse:"пульс",reggae:"регги",sixteenth:"шестнадцатые",skank:"сканк",straight:"ровный",syncopation:"синкопа",tie:"лига",waltz:"вальс"},empty:{favoritesOnly:"Для {{meter}} пока нет избранных паттернов",noPatterns:"Для {{meter}} нет доступных паттернов",favoritesHint:"Добавьте паттерны в избранное по кнопке со звездой.",noPatternsHint:"Добавьте паттерны в соответствующий JSON-файл."},actions:{playPattern:"Воспроизвести паттерн {{title}}",stopPattern:"Остановить паттерн {{title}}",addFavorite:"Добавить паттерн {{title}} в избранное",removeFavorite:"Удалить паттерн {{title}} из избранного"},patternTitles:{"2+2+3 Grouping":"Группировка 2+2+3","Accented Open-Hat Flow":"Акцентный поток с открытым хай-хэтом","Basic pop groove":"Базовый поп-грув","Basic waltz sweep":"Базовый вальсовый бой","Broken Upbeats":"Ломаные слабые доли","Carryover Upbeat Groove":"Грув с переносом в слабую долю","Compound pulse":"Сложный пульс","Cross-Accent Waltz":"Вальс со смещенными акцентами","Dotted 6/8 push":"Пунктирный импульс 6/8","Dotted Legato Motion":"Пунктирное легато","Dotted Lilt":"Пунктирное покачивание","Dotted Push":"Пунктирный толчок","Dotted Sail":"Пунктирный разгон","Dotted waltz push":"Пунктирный вальсовый импульс","Double Tie Pocket":"Карман с двойной лигой","Downstroke Accent Train":"Акцентный поток вниз","Driving 2/4 Sixteenth Flow":"Драйвовый поток шестнадцатых в 2/4","Five Pulse Drive":"Драйв на пятидольном пульсе","Half-Note Lead In":"Вход с половинной ноты","Jig Bounce":"Джиговый отскок","Late Tie Drive":"Драйв с поздней лигой","Legato Waltz Lift":"Легатный подъем вальса","March Chop":"Маршевый рубленый бой","Mid-Bar Quarter Lift":"Подъем четвертью в середине такта","Muted Backbeat Groove":"Приглушенный грув с бэкбитом","Muted Engine":"Приглушенный двигатель","Muted Grid":"Приглушенная сетка","Muted Tie Groove":"Приглушенный грув с лигами","Muted ballroom":"Приглушенный бальный вальс","Muted pocket":"Приглушенный карман","Muted triplet feel":"Приглушенный триольный грув","Offbeat 6/8 Skank":"Сканк 6/8 по слабым долям","Offbeat Skank":"Сканк по слабым долям","Offbeat Waltz Skank":"Вальсовый сканк по слабым долям","Open-Chord Lift":"Подъем открытым аккордом","Quarter Pulse Strum":"Бой с пульсом четвертями","Seventh Engine":"Двигатель в 7/8","Straight 8th Flow":"Ровный поток восьмых","Straight Seven Flow":"Ровный поток в 7/8","Sync Tie Shuffle":"Синкопированный грув с лигами","Syncopated Chain":"Синкопированная цепочка","Syncopated dotted accent":"Синкопированный пунктирный акцент","Sixteens Syncopated":"Синкопированные шестнадцатые","Smells Like Teen Spirit":"Smells Like Teen Spirit",'The "Island Strum"':"«Островной» бой","The 3/4 Pattern":"Базовый паттерн 3/4","The Clave Pattern":"Паттерн clave",'The Folk/Rock "Six"':"Фолк/рок «Шестёрка»","The Jim 'n' Jack Pattern":"Паттерн «Jim 'n' Jack»","The Most Polarizing Pattern":"Самый поляризующий паттерн","The Soca (Calypso) Pattern":"Паттерн Soca (Calypso)","Tied Upbeat Groove I":"Грув с лигой в слабую долю I"},patternSubtitles:{"All-down strums with pulse accents":"Только удары вниз с пульсовыми акцентами","Alternating accents across eighths":"Чередующиеся акценты по восьмым","Alternating dead accents":"Чередование глушеных акцентов","Alternating dead-note sixteenth engine":"Чередующийся двигатель из глушеных шестнадцатых","Bar-end tie with open second bar":"Лига в конце такта и открытый второй такт","Bar-two upbeat tie and steady flow":"Лига на слабую долю во втором такте и ровный поток","Classic Balkan-style pulse accents":"Классические пульсовые акценты в балканском стиле","Continuous down-up eighths":"Непрерывные восьмые вниз-вверх","Continuous eighths through 7/8":"Непрерывные восьмые в размере 7/8","Dead notes on the second pulse":"Глушеные ноты на второй пульсации","Dead notes plus tied upstrokes":"Глушеные ноты и лигованные удары вверх","Dead-note backbeat":"Бэкбит с глушеными нотами","Dead-note downstrokes on offbeats":"Глушеные удары вниз на слабых долях","Dotted eighth pickup":"Затакт пунктирной восьмой","Dotted pickup and compact turnaround":"Пунктирный затакт и компактный разворот","Dotted pickup before beat 2":"Пунктирный затакт перед второй долей","Dotted quarter lead with tied pickup":"Ведение пунктирной четвертью с лигованным затактом","Dotted sustain into a tied pickup":"Пунктирное удержание с переходом в лигованный затакт","Dotted upbeat in bar two":"Пунктирная слабая доля во втором такте","Dotted values with bar-spanning ties":"Пунктирные длительности и лиги через такт","Down-led 3/4 movement":"Ведение вниз в размере 3/4","Eighth-note stream with shifted accents":"Поток восьмых со смещенными акцентами","Long dotted lead with tied continuation":"Длинное пунктирное ведение с лигованным продолжением","Long downstroke then tied pickup":"Длинный удар вниз и лигованный затакт","Mid-bar ties over a 5/4 groove":"Лиги в середине такта поверх грува 5/4","Quarter + eighth movement":"Движение четвертями и восьмыми","Quarter anchors with eighth pickups":"Опора на четверти с затактами восьмыми","Quarter upstroke with tied transition":"Четвертной удар вверх с лигованным переходом","Reggae-like offbeats inside 3/4":"Реггейные слабые доли внутри 3/4","Rests and dead notes around the offbeats":"Паузы и глушеные ноты вокруг слабых долей","Second bar emphasizes beat two":"Во втором такте акцент на второй доле","Sixteenth insertions with tied carry":"Вставки шестнадцатых с лигованным переносом","Steady quarter-note movement in 5/4":"Ровное движение четвертями в 5/4","Straight 6/8 down-up flow":"Ровный поток вниз-вверх в 6/8","Strong quarter pulse with muted response":"Сильный четвертной пульс с приглушенным ответом","Tie into bar two with even eighths":"Лига во второй такт с ровными восьмыми","Pop-Rock Strumming":"Поп-роковый бой",'The "bread and butter" of campfire guitar and Russian Rock.':'"Основа основ" для дворовой гитары и русского рока.',"Core 3/4 down-up waltz pulse":"Базовый вальсовый пульс 3/4 вниз-вверх","Dead-note accents on beats 2 and 4":"Акценты глушеными ударами на 2 и 4 долях","Dotted 16th chain with tied upbeats":"Цепочка пунктирных шестнадцатых с лигами в слабые доли","Soca offbeat upstrokes with dotted hits":"Слабые доли Soca ударами вверх с пунктиром","Clave-style stops with offbeat replies":"Остановки в стиле clave с ответами на слабых долях","Quarter anchors with sixteenth bursts":"Опорные четверти со всплесками шестнадцатых","Grunge stabs with muted sixteenth rake":"Гранжевые акценты с приглушенным чесом шестнадцатыми","Tied upbeats with continuous sixteenths":"Лигованные слабые доли с непрерывными шестнадцатыми","Ties in both bars with steady eighths":"Лиги в обоих тактах и ровные восьмые","Tight dead-note grid in odd meter":"Плотная сетка глушеных нот в нечетном размере","Two-pulse bounce with a muted reply":"Двухпульсовый отскок с приглушенным ответом","Upstroke accents between the pulses":"Акценты ударами вверх между пульсациями","Upstroke accents on the offbeats":"Акценты ударами вверх на слабых долях","Upstroke tie before beat three":"Лига удара вверх перед третьей долей"}},Cv={title:"Страница не найдена",description:"Страница, которую вы ищете, улетела как музыкальная нота на ветру. Не волнуйтесь, мы поможем вам вернуться к созданию музыки!",backToHome:"На главную",goBack:"Назад",popularPages:"Популярные инструменты",helpMessage:"Нужна помощь? Все наши музыкальные инструменты в одном клике!"},Ev={meta:{title:"Шесть струн - Музыкальные инструменты и тренажёры",description:"Полный набор бесплатных онлайн инструментов и тренажёров для гитаристов: аккорды, ритм, гармония, CAGED, развитие слуха и многое другое.",keywords:"гитара, бас-гитара, укулеле, музыкальные инструменты, аккорды, гаммы, ритм-тренажёр, гармония, CAGED, развитие слуха, теория музыки, грифовая доска, онлайн инструменты, музыкальное образование"},hero:{title:"Шесть струн",subtitle:"Комплексный набор инструментов для музыкантов",description:"Все основные инструменты доступны онлайн и абсолютно бесплатно: тренируйте ритм, изучайте аккорды и развивайте слух."},categories:{rhythm:"Ритм",fretboard:"Гриф",harmony:"Гармония",earTraining:"Развитие слуха",tools:"Инструменты",articles:"Статьи"},tools:{rhythmTrainer:{title:"Ритмический тренажёр",description:"Развивайте чувство ритма с интерактивным метрономом и упражнениями"},rhythmGenerator:{title:"Генератор ритма",description:"Создавайте, редактируйте и воспроизводите собственные ритмические паттерны"},rhythmMetronome:{title:"Метроном",description:"Создавайте ритмические рисунки и тренируйтесь в постоянном или растущем темпе"},strummingPatternsLibrary:{title:"Паттерны боя",description:"Слушайте и изучайте готовые паттерны боя в нотации по выбранному размеру"},chordGenerator:{title:"Аккорды, арпеджио, гаммы",description:"Исследуйте все аппликатуры аккордов, арпеджио и гамм для гитары, баса и укулеле"},scaleExplorer:{title:"Исследователь грифа",description:"Интерактивная визуализация нот, интервалов и октав на грифе гитары"},cagedExplorer:{title:"Система CAGED",description:"Освойте пять основных форм аккордов и их расположение по всему грифу"},chordIdentifier:{title:"Определитель аккордов",description:"Узнайте название любого аккорда по выбранным нотам на грифе"},scaleIdentifier:{title:"Определитель гамм",description:"Подберите гаммы, в которые входят выбранные ноты на грифе"},stringSelector:{title:"Подбор струн",description:"Найдите идеальный комплект струн на основе мензуры, строя и стиля игры"},harmonyGenerator:{title:"Гармония",description:"Изучайте аккорды тональностей, каденции, модуляции и гармонический анализ"},circleOfFifths:{title:"Кварто-квинтовый круг",description:"Интерактивный круг квинт для понимания связей между тональностями"},intervalTrainer:{title:"Тренажёр интервалов β",description:"Развивайте музыкальный слух, тренируясь распознавать интервалы на слух"},microtoneTrainer:{title:"Тренажёр микротонов",description:"Продвинутая тренировка слуха для различения малейших высотных различий"},chordFunctionsTrainer:{title:"Тренажёр функций аккордов",description:"Учитесь определять тонику, доминанту, субдоминанту и другие функции в гармонии"},songBuilder:{title:"Конструктор песен",description:"Создавайте свои песни на основе тональности или любых выбранных аккордов."},randomKeySelector:{title:"Случайная тональность",description:"Выбирайте уровень сложности и получайте случайную тональность для ежедневной практики"},blog:{title:"Блог",description:"Статьи про сайт и инструменты"},theory:{title:"Музыкальная теория",description:"Практические статьи по теории с фокусом на гитару"}},features:{title:"Возможности платформы",multiInstrument:{title:"Мультиинструментальность",description:"Поддержка гитары, бас-гитары и укулеле с разными строями"},realisticSound:{title:"Настраиваемый звук",description:"Настраивайте удобный для себя звук в разных инстументах"},multilingual:{title:"Мультиязычность",description:"Полная поддержка русского и английского языков"}},cta:{text:"Нашли ошибку или есть предложения по улучшению?",button:"Оставить отзыв"}},Pv={title:"Случайная тональность для практики",description:"Выберите уровень сложности, нажмите «Вперёд» и получите тональность для следующей сессии.",level:{label:"Уровень сложности",beginner:{title:"Новичок",description:"Только мажор и минор"},intermediate:{title:"Средний",description:"Добавляет гармонические/мелодические варианты"},modal:{title:"Диатоника",description:"Добавляет ионийский, дорийский, фригийский, лидийский, миксолидийский, эолийский и локрийский"},advanced:{title:"Продвинутый",description:"Добавляет оставшиеся гармонические и мелодические лады"}},actions:{next:"Вперёд"},current:{label:"Текущая тональность для практики",empty:"Нажмите «Вперёд», чтобы получить первую тональность."},links:{scaleExplorer:"Соответствующая гамма на грифе",harmonyGenerator:"Гармония",scaleUnavailable:"Гамма на грифе пока недоступна для этого режима"},history:{title:"Предыдущие тональности",empty:"История пока пуста."},modeNames:{major:"мажор",minor:"минор",ionian:"ионийский",dorian:"дорийский",phrygian:"фригийский",lydian:"лидийский",mixolydian:"миксолидийский",aeolian:"эолийский",locrian:"локрийский",harmonicMinor:"гармонический минор",harmonicMajor:"гармонический мажор",melodicMinor:"мелодический минор",phrygianDominant:"фригийский доминантный",lydianSharp2:"лидийский ♯2",mixolydianFlat9Flat13:"миксолидийский ♭9 ♭13",ultraLocrian:"ультра-локрийский",doubleHarmonicMajor:"дважды гармонический мажор",hungarianMinor:"венгерский минор",dorianFlat2:"дорийский ♭2",lydianAugmented:"лидийский увеличенный",lydianDominant:"лидийский доминантный",mixolydianFlat6:"миксолидийский ♭6",locrianNat2:"локрийский ♮2",alteredScale:"альтерированная гамма"}},Yh={siteName:Jy,page:Xy,meta:Zy,nav:ev,navigation:tv,theoryPage:nv,blogPage:rv,soundSettings:ov,song:iv,harmony:av,rhythmGenerator:sv,rhythmMetronome:lv,rhythmTrainer:uv,note:cv,accidental:dv,mode:hv,common:mv,tuning:fv,chords:pv,scale:gv,pages:yv,components:vv,feedback:wv,footer:bv,circleOfFifths:kv,scaleExplorer:Sv,cagedExplorer:Iv,microtoneTrainer:xv,strummingPatternsLibrary:Tv,notFound:Cv,home:Ev,randomKeySelector:Pv},Mv={en:{translation:Kh},ru:{translation:Yh}};ye.use(fy).init({resources:Mv,lng:localStorage.getItem("language")||"ru",fallbackLng:"en",interpolation:{escapeValue:!1}});const Qh=A.createContext(void 0),Av=({children:i})=>{const[r,o]=A.useState(ye.language),s=h=>{ye.changeLanguage(h),o(h),localStorage.setItem("language",h)};A.useEffect(()=>{const h=m=>{o(m)};return ye.on("languageChanged",h),()=>{ye.off("languageChanged",h)}},[]);const l=(h,m)=>ye.t(h,m),c=(h,m)=>{const f=Math.abs(h)%100,p=f%10;return r==="ru"?f>10&&f<20?ye.t(`${m}.many`):p>1&&p<5?ye.t(`${m}.few`):p===1?ye.t(`${m}.one`):ye.t(`${m}.many`):h===1?ye.t(`${m}.one`):ye.t(`${m}.other`)};return S.jsx(Qh.Provider,{value:{language:r,changeLanguage:s,t:l,plural:c},children:i})},qi=()=>{const i=A.useContext(Qh);if(!i)throw new Error("useI18n must be used within an I18nProvider");return i};var Qs={exports:{}},Js,oh;function _v(){if(oh)return Js;oh=1;var i="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return Js=i,Js}var Xs,ih;function Dv(){if(ih)return Xs;ih=1;var i=_v();function r(){}function o(){}return o.resetWarningCache=r,Xs=function(){function s(h,m,f,p,y,w){if(w!==i){var v=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw v.name="Invariant Violation",v}}s.isRequired=s;function l(){return s}var c={array:s,bigint:s,bool:s,func:s,number:s,object:s,string:s,symbol:s,any:s,arrayOf:l,element:s,elementType:s,instanceOf:l,node:s,objectOf:l,oneOf:l,oneOfType:l,shape:l,exact:l,checkPropTypes:o,resetWarningCache:r};return c.PropTypes=c,c},Xs}var ah;function jv(){return ah||(ah=1,Qs.exports=Dv()()),Qs.exports}var Lv=jv();const Ee=kr(Lv);var Zs,sh;function Vv(){if(sh)return Zs;sh=1;function i(m){return m&&typeof m=="object"&&"default"in m?m.default:m}var r=Io(),o=i(r);function s(m,f,p){return f in m?Object.defineProperty(m,f,{value:p,enumerable:!0,configurable:!0,writable:!0}):m[f]=p,m}function l(m,f){m.prototype=Object.create(f.prototype),m.prototype.constructor=m,m.__proto__=f}var c=!!(typeof window<"u"&&window.document&&window.document.createElement);function h(m,f,p){if(typeof m!="function")throw new Error("Expected reducePropsToState to be a function.");if(typeof f!="function")throw new Error("Expected handleStateChangeOnClient to be a function.");if(typeof p<"u"&&typeof p!="function")throw new Error("Expected mapStateOnServer to either be undefined or a function.");function y(w){return w.displayName||w.name||"Component"}return function(v){if(typeof v!="function")throw new Error("Expected WrappedComponent to be a React component.");var E=[],_;function D(){_=m(E.map(function(F){return F.props})),P.canUseDOM?f(_):p&&(_=p(_))}var P=(function(F){l($,F);function $(){return F.apply(this,arguments)||this}$.peek=function(){return _},$.rewind=function(){if($.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var J=_;return _=void 0,E=[],J};var q=$.prototype;return q.UNSAFE_componentWillMount=function(){E.push(this),D()},q.componentDidUpdate=function(){D()},q.componentWillUnmount=function(){var J=E.indexOf(this);E.splice(J,1),D()},q.render=function(){return o.createElement(v,this.props)},$})(r.PureComponent);return s(P,"displayName","SideEffect("+y(v)+")"),s(P,"canUseDOM",c),P}}return Zs=h,Zs}var Nv=Vv();const Rv=kr(Nv);var el,lh;function Ov(){if(lh)return el;lh=1;var i=typeof Element<"u",r=typeof Map=="function",o=typeof Set=="function",s=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function l(c,h){if(c===h)return!0;if(c&&h&&typeof c=="object"&&typeof h=="object"){if(c.constructor!==h.constructor)return!1;var m,f,p;if(Array.isArray(c)){if(m=c.length,m!=h.length)return!1;for(f=m;f--!==0;)if(!l(c[f],h[f]))return!1;return!0}var y;if(r&&c instanceof Map&&h instanceof Map){if(c.size!==h.size)return!1;for(y=c.entries();!(f=y.next()).done;)if(!h.has(f.value[0]))return!1;for(y=c.entries();!(f=y.next()).done;)if(!l(f.value[1],h.get(f.value[0])))return!1;return!0}if(o&&c instanceof Set&&h instanceof Set){if(c.size!==h.size)return!1;for(y=c.entries();!(f=y.next()).done;)if(!h.has(f.value[0]))return!1;return!0}if(s&&ArrayBuffer.isView(c)&&ArrayBuffer.isView(h)){if(m=c.length,m!=h.length)return!1;for(f=m;f--!==0;)if(c[f]!==h[f])return!1;return!0}if(c.constructor===RegExp)return c.source===h.source&&c.flags===h.flags;if(c.valueOf!==Object.prototype.valueOf&&typeof c.valueOf=="function"&&typeof h.valueOf=="function")return c.valueOf()===h.valueOf();if(c.toString!==Object.prototype.toString&&typeof c.toString=="function"&&typeof h.toString=="function")return c.toString()===h.toString();if(p=Object.keys(c),m=p.length,m!==Object.keys(h).length)return!1;for(f=m;f--!==0;)if(!Object.prototype.hasOwnProperty.call(h,p[f]))return!1;if(i&&c instanceof Element)return!1;for(f=m;f--!==0;)if(!((p[f]==="_owner"||p[f]==="__v"||p[f]==="__o")&&c.$$typeof)&&!l(c[p[f]],h[p[f]]))return!1;return!0}return c!==c&&h!==h}return el=function(h,m){try{return l(h,m)}catch(f){if((f.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw f}},el}var Fv=Ov();const zv=kr(Fv);var tl,uh;function Bv(){if(uh)return tl;uh=1;var i=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;function s(c){if(c==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(c)}function l(){try{if(!Object.assign)return!1;var c=new String("abc");if(c[5]="de",Object.getOwnPropertyNames(c)[0]==="5")return!1;for(var h={},m=0;m<10;m++)h["_"+String.fromCharCode(m)]=m;var f=Object.getOwnPropertyNames(h).map(function(y){return h[y]});if(f.join("")!=="0123456789")return!1;var p={};return"abcdefghijklmnopqrst".split("").forEach(function(y){p[y]=y}),Object.keys(Object.assign({},p)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}return tl=l()?Object.assign:function(c,h){for(var m,f=s(c),p,y=1;y<arguments.length;y++){m=Object(arguments[y]);for(var w in m)r.call(m,w)&&(f[w]=m[w]);if(i){p=i(m);for(var v=0;v<p.length;v++)o.call(m,p[v])&&(f[p[v]]=m[p[v]])}}return f},tl}var $v=Bv();const Gv=kr($v);var Gn={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"},oe={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"};Object.keys(oe).map(function(i){return oe[i]});var Pe={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src",TARGET:"target"},$i={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},So={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},Hv=Object.keys($i).reduce(function(i,r){return i[$i[r]]=r,i},{}),Wv=[oe.NOSCRIPT,oe.SCRIPT,oe.STYLE],jt="data-react-helmet",Uv=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},qv=function(i,r){if(!(i instanceof r))throw new TypeError("Cannot call a class as a function")},Kv=(function(){function i(r,o){for(var s=0;s<o.length;s++){var l=o[s];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(r,l.key,l)}}return function(r,o,s){return o&&i(r.prototype,o),s&&i(r,s),r}})(),ct=Object.assign||function(i){for(var r=1;r<arguments.length;r++){var o=arguments[r];for(var s in o)Object.prototype.hasOwnProperty.call(o,s)&&(i[s]=o[s])}return i},Yv=function(i,r){if(typeof r!="function"&&r!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof r);i.prototype=Object.create(r&&r.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),r&&(Object.setPrototypeOf?Object.setPrototypeOf(i,r):i.__proto__=r)},ch=function(i,r){var o={};for(var s in i)r.indexOf(s)>=0||Object.prototype.hasOwnProperty.call(i,s)&&(o[s]=i[s]);return o},Qv=function(i,r){if(!i)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r&&(typeof r=="object"||typeof r=="function")?r:i},ml=function(r){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return o===!1?String(r):String(r).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},Jv=function(r){var o=br(r,oe.TITLE),s=br(r,So.TITLE_TEMPLATE);if(s&&o)return s.replace(/%s/g,function(){return Array.isArray(o)?o.join(""):o});var l=br(r,So.DEFAULT_TITLE);return o||l||void 0},Xv=function(r){return br(r,So.ON_CHANGE_CLIENT_STATE)||function(){}},nl=function(r,o){return o.filter(function(s){return typeof s[r]<"u"}).map(function(s){return s[r]}).reduce(function(s,l){return ct({},s,l)},{})},Zv=function(r,o){return o.filter(function(s){return typeof s[oe.BASE]<"u"}).map(function(s){return s[oe.BASE]}).reverse().reduce(function(s,l){if(!s.length)for(var c=Object.keys(l),h=0;h<c.length;h++){var m=c[h],f=m.toLowerCase();if(r.indexOf(f)!==-1&&l[f])return s.concat(l)}return s},[])},fo=function(r,o,s){var l={};return s.filter(function(c){return Array.isArray(c[r])?!0:(typeof c[r]<"u"&&rw("Helmet: "+r+' should be of type "Array". Instead found type "'+Uv(c[r])+'"'),!1)}).map(function(c){return c[r]}).reverse().reduce(function(c,h){var m={};h.filter(function(v){for(var E=void 0,_=Object.keys(v),D=0;D<_.length;D++){var P=_[D],F=P.toLowerCase();o.indexOf(F)!==-1&&!(E===Pe.REL&&v[E].toLowerCase()==="canonical")&&!(F===Pe.REL&&v[F].toLowerCase()==="stylesheet")&&(E=F),o.indexOf(P)!==-1&&(P===Pe.INNER_HTML||P===Pe.CSS_TEXT||P===Pe.ITEM_PROP)&&(E=P)}if(!E||!v[E])return!1;var $=v[E].toLowerCase();return l[E]||(l[E]={}),m[E]||(m[E]={}),l[E][$]?!1:(m[E][$]=!0,!0)}).reverse().forEach(function(v){return c.push(v)});for(var f=Object.keys(m),p=0;p<f.length;p++){var y=f[p],w=Gv({},l[y],m[y]);l[y]=w}return c},[]).reverse()},br=function(r,o){for(var s=r.length-1;s>=0;s--){var l=r[s];if(l.hasOwnProperty(o))return l[o]}return null},ew=function(r){return{baseTag:Zv([Pe.HREF,Pe.TARGET],r),bodyAttributes:nl(Gn.BODY,r),defer:br(r,So.DEFER),encode:br(r,So.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:nl(Gn.HTML,r),linkTags:fo(oe.LINK,[Pe.REL,Pe.HREF],r),metaTags:fo(oe.META,[Pe.NAME,Pe.CHARSET,Pe.HTTPEQUIV,Pe.PROPERTY,Pe.ITEM_PROP],r),noscriptTags:fo(oe.NOSCRIPT,[Pe.INNER_HTML],r),onChangeClientState:Xv(r),scriptTags:fo(oe.SCRIPT,[Pe.SRC,Pe.INNER_HTML],r),styleTags:fo(oe.STYLE,[Pe.CSS_TEXT],r),title:Jv(r),titleAttributes:nl(Gn.TITLE,r)}},fl=(function(){var i=Date.now();return function(r){var o=Date.now();o-i>16?(i=o,r(o)):setTimeout(function(){fl(r)},0)}})(),dh=function(r){return clearTimeout(r)},tw=typeof window<"u"?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||fl:global.requestAnimationFrame||fl,nw=typeof window<"u"?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||dh:global.cancelAnimationFrame||dh,rw=function(r){return console&&typeof console.warn=="function"&&console.warn(r)},po=null,ow=function(r){po&&nw(po),r.defer?po=tw(function(){hh(r,function(){po=null})}):(hh(r),po=null)},hh=function(r,o){var s=r.baseTag,l=r.bodyAttributes,c=r.htmlAttributes,h=r.linkTags,m=r.metaTags,f=r.noscriptTags,p=r.onChangeClientState,y=r.scriptTags,w=r.styleTags,v=r.title,E=r.titleAttributes;pl(oe.BODY,l),pl(oe.HTML,c),iw(v,E);var _={baseTag:vr(oe.BASE,s),linkTags:vr(oe.LINK,h),metaTags:vr(oe.META,m),noscriptTags:vr(oe.NOSCRIPT,f),scriptTags:vr(oe.SCRIPT,y),styleTags:vr(oe.STYLE,w)},D={},P={};Object.keys(_).forEach(function(F){var $=_[F],q=$.newTags,z=$.oldTags;q.length&&(D[F]=q),z.length&&(P[F]=_[F].oldTags)}),o&&o(),p(r,D,P)},Jh=function(r){return Array.isArray(r)?r.join(""):r},iw=function(r,o){typeof r<"u"&&document.title!==r&&(document.title=Jh(r)),pl(oe.TITLE,o)},pl=function(r,o){var s=document.getElementsByTagName(r)[0];if(s){for(var l=s.getAttribute(jt),c=l?l.split(","):[],h=[].concat(c),m=Object.keys(o),f=0;f<m.length;f++){var p=m[f],y=o[p]||"";s.getAttribute(p)!==y&&s.setAttribute(p,y),c.indexOf(p)===-1&&c.push(p);var w=h.indexOf(p);w!==-1&&h.splice(w,1)}for(var v=h.length-1;v>=0;v--)s.removeAttribute(h[v]);c.length===h.length?s.removeAttribute(jt):s.getAttribute(jt)!==m.join(",")&&s.setAttribute(jt,m.join(","))}},vr=function(r,o){var s=document.head||document.querySelector(oe.HEAD),l=s.querySelectorAll(r+"["+jt+"]"),c=Array.prototype.slice.call(l),h=[],m=void 0;return o&&o.length&&o.forEach(function(f){var p=document.createElement(r);for(var y in f)if(f.hasOwnProperty(y))if(y===Pe.INNER_HTML)p.innerHTML=f.innerHTML;else if(y===Pe.CSS_TEXT)p.styleSheet?p.styleSheet.cssText=f.cssText:p.appendChild(document.createTextNode(f.cssText));else{var w=typeof f[y]>"u"?"":f[y];p.setAttribute(y,w)}p.setAttribute(jt,"true"),c.some(function(v,E){return m=E,p.isEqualNode(v)})?c.splice(m,1):h.push(p)}),c.forEach(function(f){return f.parentNode.removeChild(f)}),h.forEach(function(f){return s.appendChild(f)}),{oldTags:c,newTags:h}},Xh=function(r){return Object.keys(r).reduce(function(o,s){var l=typeof r[s]<"u"?s+'="'+r[s]+'"':""+s;return o?o+" "+l:l},"")},aw=function(r,o,s,l){var c=Xh(s),h=Jh(o);return c?"<"+r+" "+jt+'="true" '+c+">"+ml(h,l)+"</"+r+">":"<"+r+" "+jt+'="true">'+ml(h,l)+"</"+r+">"},sw=function(r,o,s){return o.reduce(function(l,c){var h=Object.keys(c).filter(function(p){return!(p===Pe.INNER_HTML||p===Pe.CSS_TEXT)}).reduce(function(p,y){var w=typeof c[y]>"u"?y:y+'="'+ml(c[y],s)+'"';return p?p+" "+w:w},""),m=c.innerHTML||c.cssText||"",f=Wv.indexOf(r)===-1;return l+"<"+r+" "+jt+'="true" '+h+(f?"/>":">"+m+"</"+r+">")},"")},Zh=function(r){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Object.keys(r).reduce(function(s,l){return s[$i[l]||l]=r[l],s},o)},lw=function(r){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Object.keys(r).reduce(function(s,l){return s[Hv[l]||l]=r[l],s},o)},uw=function(r,o,s){var l,c=(l={key:o},l[jt]=!0,l),h=Zh(s,c);return[$n.createElement(oe.TITLE,h,o)]},cw=function(r,o){return o.map(function(s,l){var c,h=(c={key:l},c[jt]=!0,c);return Object.keys(s).forEach(function(m){var f=$i[m]||m;if(f===Pe.INNER_HTML||f===Pe.CSS_TEXT){var p=s.innerHTML||s.cssText;h.dangerouslySetInnerHTML={__html:p}}else h[f]=s[m]}),$n.createElement(r,h)})},Yt=function(r,o,s){switch(r){case oe.TITLE:return{toComponent:function(){return uw(r,o.title,o.titleAttributes)},toString:function(){return aw(r,o.title,o.titleAttributes,s)}};case Gn.BODY:case Gn.HTML:return{toComponent:function(){return Zh(o)},toString:function(){return Xh(o)}};default:return{toComponent:function(){return cw(r,o)},toString:function(){return sw(r,o,s)}}}},em=function(r){var o=r.baseTag,s=r.bodyAttributes,l=r.encode,c=r.htmlAttributes,h=r.linkTags,m=r.metaTags,f=r.noscriptTags,p=r.scriptTags,y=r.styleTags,w=r.title,v=w===void 0?"":w,E=r.titleAttributes;return{base:Yt(oe.BASE,o,l),bodyAttributes:Yt(Gn.BODY,s,l),htmlAttributes:Yt(Gn.HTML,c,l),link:Yt(oe.LINK,h,l),meta:Yt(oe.META,m,l),noscript:Yt(oe.NOSCRIPT,f,l),script:Yt(oe.SCRIPT,p,l),style:Yt(oe.STYLE,y,l),title:Yt(oe.TITLE,{title:v,titleAttributes:E},l)}},dw=function(r){var o,s;return s=o=(function(l){Yv(c,l);function c(){return qv(this,c),Qv(this,l.apply(this,arguments))}return c.prototype.shouldComponentUpdate=function(m){return!zv(this.props,m)},c.prototype.mapNestedChildrenToProps=function(m,f){if(!f)return null;switch(m.type){case oe.SCRIPT:case oe.NOSCRIPT:return{innerHTML:f};case oe.STYLE:return{cssText:f}}throw new Error("<"+m.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},c.prototype.flattenArrayTypeChildren=function(m){var f,p=m.child,y=m.arrayTypeChildren,w=m.newChildProps,v=m.nestedChildren;return ct({},y,(f={},f[p.type]=[].concat(y[p.type]||[],[ct({},w,this.mapNestedChildrenToProps(p,v))]),f))},c.prototype.mapObjectTypeChildren=function(m){var f,p,y=m.child,w=m.newProps,v=m.newChildProps,E=m.nestedChildren;switch(y.type){case oe.TITLE:return ct({},w,(f={},f[y.type]=E,f.titleAttributes=ct({},v),f));case oe.BODY:return ct({},w,{bodyAttributes:ct({},v)});case oe.HTML:return ct({},w,{htmlAttributes:ct({},v)})}return ct({},w,(p={},p[y.type]=ct({},v),p))},c.prototype.mapArrayTypeChildrenToProps=function(m,f){var p=ct({},f);return Object.keys(m).forEach(function(y){var w;p=ct({},p,(w={},w[y]=m[y],w))}),p},c.prototype.warnOnInvalidChildren=function(m,f){return!0},c.prototype.mapChildrenToProps=function(m,f){var p=this,y={};return $n.Children.forEach(m,function(w){if(!(!w||!w.props)){var v=w.props,E=v.children,_=ch(v,["children"]),D=lw(_);switch(p.warnOnInvalidChildren(w,E),w.type){case oe.LINK:case oe.META:case oe.NOSCRIPT:case oe.SCRIPT:case oe.STYLE:y=p.flattenArrayTypeChildren({child:w,arrayTypeChildren:y,newChildProps:D,nestedChildren:E});break;default:f=p.mapObjectTypeChildren({child:w,newProps:f,newChildProps:D,nestedChildren:E});break}}}),f=this.mapArrayTypeChildrenToProps(y,f),f},c.prototype.render=function(){var m=this.props,f=m.children,p=ch(m,["children"]),y=ct({},p);return f&&(y=this.mapChildrenToProps(f,y)),$n.createElement(r,y)},Kv(c,null,[{key:"canUseDOM",set:function(m){r.canUseDOM=m}}]),c})($n.Component),o.propTypes={base:Ee.object,bodyAttributes:Ee.object,children:Ee.oneOfType([Ee.arrayOf(Ee.node),Ee.node]),defaultTitle:Ee.string,defer:Ee.bool,encodeSpecialCharacters:Ee.bool,htmlAttributes:Ee.object,link:Ee.arrayOf(Ee.object),meta:Ee.arrayOf(Ee.object),noscript:Ee.arrayOf(Ee.object),onChangeClientState:Ee.func,script:Ee.arrayOf(Ee.object),style:Ee.arrayOf(Ee.object),title:Ee.string,titleAttributes:Ee.object,titleTemplate:Ee.string},o.defaultProps={defer:!0,encodeSpecialCharacters:!0},o.peek=r.peek,o.rewind=function(){var l=r.rewind();return l||(l=em({baseTag:[],bodyAttributes:{},htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),l},s},hw=function(){return null},mw=Rv(ew,ow,em)(hw),gl=dw(mw);gl.renderStatic=gl.rewind;const Qt={"/":{title:"home.meta.title",description:"home.meta.description",keywords:"home.meta.keywords"},"/home":{title:"home.meta.title",description:"home.meta.description",keywords:"home.meta.keywords"},"/blog":{title:"meta.blog.title",description:"meta.blog.description",keywords:"meta.blog.keywords"},"/theory":{title:"meta.theory.title",description:"meta.theory.description",keywords:"meta.theory.keywords"},"/rhythm-trainer":{title:"meta.rhythm.title",description:"meta.rhythm.description",keywords:"meta.rhythm.keywords"},"/chords":{title:"meta.chords.title",description:"meta.chords.description",keywords:"meta.chords.keywords"},"/circle-of-fifths":{title:"meta.circle-of-fifths.title",description:"meta.circle-of-fifths.description",keywords:"meta.circle-of-fifths.keywords"},"/harmony":{title:"meta.harmony.title",description:"meta.harmony.description",keywords:"meta.harmony.keywords"},"/song":{title:"meta.song-builder.title",description:"meta.song-builder.description",keywords:"meta.song-builder.keywords"},"/chord-identifier":{title:"meta.chord-identifier.title",description:"meta.chord-identifier.description",keywords:"meta.chord-identifier.keywords"},"/scale-identifier":{title:"meta.scale-identifier.title",description:"meta.scale-identifier.description",keywords:"meta.scale-identifier.keywords"},"/scales-fretboard-explorer":{title:"meta.scales-fretboard-explorer.title",description:"meta.scales-fretboard-explorer.description",keywords:"meta.scales-fretboard-explorer.keywords"},"/caged-explorer":{title:"meta.caged-explorer.title",description:"meta.caged-explorer.description",keywords:"meta.caged-explorer.keywords"},"/rhythm-generator":{title:"meta.rhythm-generator.title",description:"meta.rhythm-generator.description",keywords:"meta.rhythm-generator.keywords"},"/rhythm-metronome":{title:"meta.rhythm-metronome.title",description:"meta.rhythm-metronome.description",keywords:"meta.rhythm-metronome.keywords"},"/strumming-patterns-library":{title:"meta.strumming-patterns-library.title",description:"meta.strumming-patterns-library.description",keywords:"meta.strumming-patterns-library.keywords"},"/ear/microtone":{title:"meta.microtone-trainer.title",description:"meta.microtone-trainer.description",keywords:"meta.microtone-trainer.keywords"},"/ear/intervals":{title:"meta.interval-trainer.title",description:"meta.interval-trainer.description",keywords:"meta.interval-trainer.keywords"},"/ear/functions":{title:"meta.chord-functions-trainer.title",description:"meta.chord-functions-trainer.description",keywords:"meta.chord-functions-trainer.keywords"},"/string-selector":{title:"meta.string-selector.title",description:"meta.string-selector.description",keywords:"meta.string-selector.keywords"},"/random-key-selector":{title:"meta.random-key-selector.title",description:"meta.random-key-selector.description",keywords:"meta.random-key-selector.keywords"},"/feedback":{title:"meta.feedback.title",description:"meta.feedback.description",keywords:"meta.feedback.keywords"},"/404":{title:"meta.not-found.title",description:"meta.not-found.description",keywords:"meta.not-found.keywords"}},Ki=["ru","en"],kn="ru",yl=["/","/blog","/theory","/rhythm-trainer","/rhythm-generator","/rhythm-metronome","/strumming-patterns-library","/chords","/scales-fretboard-explorer","/caged-explorer","/chord-identifier","/scale-identifier","/string-selector","/random-key-selector","/harmony","/song","/circle-of-fifths","/ear/intervals","/ear/microtone","/ear/functions","/feedback"];function wt(i){return!!i&&Ki.includes(i)}function xr(i){if(!i||i==="/")return"/";const r=i.startsWith("/")?i:`/${i}`;return r.endsWith("/")?r.slice(0,-1):r}function Ue(i,r){const o=xr(i);return o==="/"?`/${r}`:`/${r}${o}`}function Qe(i){const r=xr(i);return r==="/"?"/":`${r}/`}function Gi(i){const r=xr(i),o=r.split("/").filter(Boolean),s=o[0];return wt(s)?o.length===1?{language:s,path:"/"}:{language:s,path:`/${o.slice(1).join("/")}`}:{language:null,path:r}}Ki.flatMap(i=>yl.map(r=>Ue(r,i)));const fw=["/rhythm-trainer","/rhythm-metronome","/strumming-patterns-library","/harmony","/song","/chords","/chord-identifier","/scales-fretboard-explorer","/ear/functions"],pw=({overridePath:i})=>{const{pathname:r}=Lt(),{t:o}=Cl(),s=typeof window<"u"?window.location.origin:"",l=i??r,{language:c,path:h}=Gi(l),m=xr(h),f=c??kn,p=m==="/blog"||m.startsWith("/blog/"),y=m==="/theory"||m.startsWith("/theory/");let w=Qt[m];!w&&p&&(w=Qt["/blog"]),!w&&y&&(w=Qt["/theory"]),!w&&m!=="/"&&(w=Qt["/404"]),w=w||Qt["/"];const E=m==="/404"||!Qt[m]&&!p&&!y?"noindex,follow":"index,follow",_=Qe(Ue(m,f)),D=`${s}${_}`,P=me=>`${s}${Qe(Ue(m,me))}`,F=o("siteName"),$=`${s}/android-chrome-512x512.png`,q=f==="ru"?"ru_RU":"en_US",z=Ki.filter(me=>me!==f).map(me=>me==="ru"?"ru_RU":"en_US"),J={"@context":"https://schema.org","@type":"WebSite",name:F,url:s},H={"@context":"https://schema.org","@type":"WebApplication",name:`${o(w.title)} | ${F}`,applicationCategory:"EducationalApplication",operatingSystem:"Any",url:D,inLanguage:f,description:o(w.description),isAccessibleForFree:!0},ee={"@context":"https://schema.org","@graph":fw.map(me=>({"@type":"SiteNavigationElement",name:o((Qt[me]??Qt["/"]).title),url:`${s}${Qe(Ue(me,f))}`,inLanguage:f}))},he=[],re=m==="/"?[]:m.split("/").filter(Boolean);let ve="";re.forEach((me,Be)=>{ve+=`/${me}`;const xe=Qt[ve],$e=xe?o(xe.title):me;he.push({"@type":"ListItem",position:Be+1,name:$e,item:`${s}${Qe(Ue(ve,f))}`})});const je=he.length?{"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:he}:null;return S.jsxs(gl,{children:[S.jsx("html",{lang:f}),S.jsxs("title",{children:[o(w.title)," | ",F]}),S.jsx("meta",{name:"robots",content:E}),S.jsx("meta",{name:"description",content:o(w.description)}),S.jsx("meta",{name:"keywords",content:o(w.keywords)}),S.jsx("link",{rel:"canonical",href:D}),S.jsx("link",{rel:"icon",type:"image/x-icon",href:"/favicon.ico"}),S.jsx("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon-16x16.png"}),S.jsx("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon-32x32.png"}),S.jsx("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/apple-touch-icon.png"}),S.jsx("link",{rel:"icon",type:"image/png",sizes:"192x192",href:"/android-chrome-192x192.png"}),S.jsx("link",{rel:"icon",type:"image/png",sizes:"512x512",href:"/android-chrome-512x512.png"}),S.jsx("link",{rel:"icon",type:"image/svg+xml",href:"/icon.svg"}),S.jsx("link",{rel:"manifest",href:"/site.webmanifest"}),S.jsx("meta",{name:"theme-color",content:"#3b82f6"}),S.jsx("meta",{name:"msapplication-TileColor",content:"#3b82f6"}),S.jsx("meta",{property:"og:title",content:`${o(w.title)} | ${F}`}),S.jsx("meta",{property:"og:description",content:o(w.description)}),S.jsx("meta",{property:"og:type",content:"website"}),S.jsx("meta",{property:"og:site_name",content:F}),S.jsx("meta",{property:"og:locale",content:q}),z.map(me=>S.jsx("meta",{property:"og:locale:alternate",content:me},me)),S.jsx("meta",{property:"og:url",content:D}),S.jsx("meta",{property:"og:image",content:$}),S.jsx("meta",{property:"og:image:alt",content:F}),S.jsx("meta",{name:"twitter:card",content:"summary_large_image"}),S.jsx("meta",{name:"twitter:title",content:`${o(w.title)} | ${F}`}),S.jsx("meta",{name:"twitter:description",content:o(w.description)}),S.jsx("meta",{name:"twitter:image",content:$}),S.jsx("script",{type:"application/ld+json",children:JSON.stringify(J)}),S.jsx("script",{type:"application/ld+json",children:JSON.stringify(H)}),S.jsx("script",{type:"application/ld+json",children:JSON.stringify(ee)}),je&&S.jsx("script",{type:"application/ld+json",children:JSON.stringify(je)}),S.jsx("link",{rel:"alternate",hrefLang:"x-default",href:P(kn)}),S.jsx("link",{rel:"alternate",hrefLang:"en",href:P("en")}),S.jsx("link",{rel:"alternate",hrefLang:"ru",href:P("ru")})]})},gw=`---\r
post_id: chords-arpeggios-scales\r
slug: akkordy-arpedzhio-gammy\r
title: "Аккорды, арпеджио, гаммы для гитары, баса и укулеле: инструмент для практики и импровизации"\r
description: "Онлайн-инструмент для поиска аппликатур аккордов, арпеджио и подходящих гамм для гитары, баса и укулеле. Помогает в практике, импровизации и разборе музыки. Шесть струн (Six Strings App)."\r
keywords: "аккорды, арпеджио, гаммы, аккорды для гитары, аккорды и гаммы для гитары, аккорды и арпеджио для гитары, аккорды арпеджио гаммы для гитары, аккорды для гитары онлайн, аппликатуры аккордов для гитары, формы аккордов для гитары, аккорды на грифе гитары, строение аккордов, построение аккордов на гитаре, интервалы в аккорде, ноты аккорда на грифе, арпеджио для гитары, арпеджио аккордов на гитаре, арпеджио по грифу гитары, как играть арпеджио на гитаре, гаммы для гитары, как подобрать гамму к аккорду, какие гаммы подходят к аккорду, гамма под аккорд, гаммы для импровизации на гитаре, как связаны аккорды и гаммы, аккорд и арпеджио, как импровизировать по аккордам, как играть соло по аккордам, аккорды арпеджио гаммы для баса, аппликатуры аккордов для баса, арпеджио для баса, гаммы для баса, аккорды арпеджио гаммы для укулеле, аккорды для укулеле аппликатуры, арпеджио для укулеле, гаммы для укулеле, Six Strings App, Шесть струн"\r
tags: аккорды, арпеджио, гаммы, гитара, импровизация, теория музыки\r
date: 2026-04-06\r
intro: "С этого инструмента начался весь Шесть струн. Я сделал его, когда сам пытался разобраться, как устроены аккорды, как видеть их арпеджио на грифе и какие гаммы действительно подходят к конкретному аккорду. В итоге получился инструмент, который помогает не просто находить аппликатуры, а связывать аккорды, арпеджио и гаммы в одной практической системе для гитары, баса и укулеле."\r
cta_path: /chords\r
cta_label: "Аккорды, арпеджио, гаммы"\r
cover_image: cover.png\r
draft: false\r
---\r
## Введение\r
\r
Знать название аккорда мало. На практике обычно нужны ответы на другие вопросы: где взять удобную аппликатуру, какие звуки входят в аккорд, как сыграть его арпеджио и какую гамму использовать поверх него.\r
\r
Теорию можно разбирать вручную: выписывать ноты, считать интервалы, искать формы на грифе. Но это долго. Пока дойдёшь до инструмента, внимание уже уходит в расчёты.\r
\r
Инструмент **«Аккорды, арпеджио, гаммы»** в Шесть струн решает эту задачу проще. Он помогает не только найти аккорд, но и сразу увидеть его состав, арпеджио и подходящие гаммы. В результате теория быстрее превращается в звук, а не остаётся набором схем.\r
\r
С этого инструмента вообще начался сайт. Изначально я сделал его для себя, потому что хотел лучше разобраться в строении аккордов, увидеть их арпеджио на грифе и понять, какие гаммы действительно подходят к конкретному аккорду. Когда это удалось собрать в одном месте, вокруг этой идеи постепенно вырос весь Шесть струн.\r
\r
В этой статье разберём, кому полезен этот инструмент, какие задачи он закрывает и как использовать его в реальной практике.\r
\r
## Что это за инструмент\r
\r
Это онлайн-инструмент для гитары, баса и укулеле. Он показывает аппликатуры аккордов, арпеджио по грифу и гаммы, которые подходят к выбранному аккорду.\r
\r
Главная ценность инструмента — в связях. Вы видите не только форму аккорда, но и его интервальный состав, опорные звуки и возможный мелодический материал. Это удобно для занятий, разбора музыки, импровизации и сочинения.\r
\r
## Кому он особенно подойдёт\r
\r
### Начинающим музыкантам\r
\r
Новички часто запоминают аккорды как картинки. Из-за этого теория и гриф существуют отдельно. Инструмент помогает связать одно с другим: показать, что аккорд — это не просто зажим, а набор звуков с понятной функцией.\r
\r
### Тем, кто уже играет, но хочет лучше понимать гриф\r
\r
Если вы знаете базовые формы, но постоянно ходите по одним и тем же боксам, инструмент помогает выйти за пределы привычных схем. Вы начинаете видеть аккорд шире: как форму, как арпеджио и как основу для мелодии.\r
\r
### Преподавателям\r
\r
Инструмент удобен для объяснения. Проще показать ученику интервалы, арпеджио и связь аккорда с гаммой, когда всё находится в одном месте и сразу видно на грифе.\r
\r
### Тем, кто пишет музыку\r
\r
При сочинении важно быстро проверять идеи. Здесь можно найти форму аккорда, посмотреть его звуки, выбрать гамму и сразу понять, из чего строить рифф, мелодию или соло.\r
\r
## Какие музыкальные задачи он решает\r
\r
### Быстро найти нужную аппликатуру\r
\r
Один и тот же аккорд можно сыграть по-разному. Для аккомпанемента подойдёт одна форма, для плотного голосоведения — другая, для верхнего регистра — третья. Когда варианты собраны в одном месте, проще выбрать не первую попавшуюся аппликатуру, а ту, которая подходит под конкретную задачу.\r
\r
### Понять состав аккорда\r
\r
Многие умеют брать аккорды, но не всегда понимают, где в них прима, терция, квинта, септима или добавленные ступени. Без этого сложнее анализировать гармонию и строить осмысленные фразы.\r
\r
Когда вы видите не только ноты, но и интервалы, аккорд перестаёт быть картинкой для пальцев. Он становится понятной музыкальной конструкцией.\r
\r
### Перейти от аккорда к арпеджио\r
\r
Арпеджио — это самый прямой мост между аккордом и соло. Оно помогает слышать опорные звуки и попадать в гармонию без игры наугад.\r
\r
Если аккорд и его арпеджио видны рядом, связь становится очевидной. Вы не учите отдельный материал «про запас», а сразу понимаете, как использовать его в фразировке и импровизации.\r
\r
### Подобрать гамму к аккорду\r
\r
Вопрос «что играть поверх аккорда» возникает почти у всех. Обычный перекос здесь один из двух: либо музыкант везде использует одну знакомую гамму, либо тонет в теории и не может быстро выбрать рабочий вариант.\r
\r
Инструмент помогает сократить путь. Он показывает подходящие гаммы и даёт опору для выбора. Дальше уже можно слушать, сравнивать и решать, какая краска нужна именно в вашем контексте.\r
\r
## Как использовать инструмент на практике\r
\r
### Для ежедневных занятий\r
\r
Возьмите один аккорд и разберите его в четыре шага:\r
\r
1. посмотрите несколько аппликатур;\r
2. найдите интервалы внутри формы;\r
3. сыграйте арпеджио;\r
4. попробуйте одну из подходящих гамм.\r
\r
Такой короткий цикл даёт больше пользы, чем механическое заучивание новых схем. Вы одновременно тренируете руки, уши и понимание грифа.\r
\r
### Для разбора песен\r
\r
Когда вы разбираете чужую музыку, важно понять не только название аккорда, но и его функцию. Инструмент позволяет быстро посмотреть состав аккорда, увидеть арпеджио и проверить, какие гаммы естественно ложатся сверху.\r
\r
Это особенно полезно там, где партия кажется простой, но характер появляется за счёт добавленных ступеней, баса или ладовой окраски.\r
\r
### Для импровизации\r
\r
Если вы хотите меньше бегать по боксам и лучше слышать гармонию, стройте фразы от аккордов. Сначала находите опорные звуки в арпеджио, потом расширяете их гаммой.\r
\r
Такой подход делает соло собраннее. Вы не просто двигаетесь по форме, а понимаете, почему каждая нота звучит устойчиво или напряжённо.\r
\r
### Для сочинения риффов и прогрессий\r
\r
Инструмент полезен и в авторской работе. Можно начать с аккорда, посмотреть его звуки и собрать из них рифф. Можно пойти наоборот: выбрать гамму и понять, какие аккорды и мелодические ходы из неё естественно вырастают.\r
\r
Это ускоряет поиск идей и делает его более осмысленным.\r
\r
### Для преподавания\r
\r
Когда теория сразу показана на грифе, ученик быстрее понимает материал. Ему не нужно отдельно смотреть в тетрадь, отдельно на схему и отдельно на инструмент. Всё уже собрано в одном контексте.\r
\r
Поэтому инструмент хорошо подходит для домашних заданий, разборов и объяснения базовых связей между аккордом, арпеджио и гаммой.\r
\r
## Почему это удобно именно в Шесть струн\r
\r
У этого инструмента есть практическое преимущество: он не ограничивается только аккордами или только гаммами. Здесь всё собрано в одной логике.\r
\r
Что это даёт:\r
\r
- поддержка **гитары, баса и укулеле**;\r
- работа с **разными строями**;\r
- отображение **нот или интервалов**;\r
- просмотр **арпеджио по грифу**;\r
- подбор **подходящих гамм к аккорду**;\r
- **леворукий режим**.\r
\r
За счёт этого инструмент можно использовать не как справочник на один случай, а как постоянную рабочую точку в практике.\r
\r
## Как начать использовать инструмент\r
\r
Самый простой способ — не пытаться охватить всё сразу.\r
\r
Выберите один знакомый аккорд. Посмотрите 2–3 аппликатуры. Затем включите интервалы и найдите опорные ступени. После этого сыграйте арпеджио и попробуйте несколько коротких фраз в одной из предложенных гамм.\r
\r
Этого уже достаточно, чтобы почувствовать главное: аккорд, арпеджио и гамма — не три разные темы, а один связанный музыкальный материал.\r
\r
## FAQ\r
\r
### Какой главный смысл этого инструмента?\r
\r
Он помогает не просто найти аккорд, а понять, как этот аккорд устроен и что с ним делать дальше: как сыграть его арпеджио и какую гамму попробовать поверх него.\r
\r
### Подойдёт ли он начинающему гитаристу?\r
\r
Да. Особенно если вы хотите не только зажимать формы, но и понимать, какие звуки внутри них работают.\r
\r
### Это только для гитары?\r
\r
Нет. Инструмент поддерживает гитару, бас и укулеле.\r
\r
### Зачем смотреть интервалы, если можно видеть ноты?\r
\r
Ноты показывают конкретные звуки. Интервалы показывают их функцию. Для импровизации, анализа и понимания гармонии это часто полезнее.\r
\r
### Чем арпеджио отличается от аккорда?\r
\r
Аккорд — это звуки, взятые вместе. Арпеджио — те же звуки, сыгранные по очереди. В соло и мелодических фразах арпеджио помогает точнее попадать в гармонию.\r
\r
### Подбирает ли инструмент идеальную гамму?\r
\r
Нет. Он показывает рабочие варианты. Итоговый выбор зависит от тональности, гармонии, стиля и того, какого звучания вы хотите добиться.\r
\r
### Можно ли использовать это для сочинения музыки?\r
\r
Да. Инструмент подходит и для занятий, и для практической работы над риффами, мелодиями, соло и прогрессиями.\r
\r
## Вывод\r
\r
**«[Аккорды, арпеджио, гаммы](/ru/chords)»** — это инструмент не про набор диаграмм, а про связь между формой аккорда, его звуками и музыкальным применением.\r
\r
Он помогает быстрее ориентироваться на грифе, лучше понимать гармонию и использовать аккордовый материал в практике, импровизации и сочинении.\r
\r
Если хотите увидеть ноты и звуки ещё шире, следующим шагом откройте **[Исследователь грифа](/ru/scales-fretboard-explorer)**. Если хотите понять, как аккорд работает внутри тональности, переходите в **[Гармонию](/ru/harmony)**.\r
\r
## Связанные инструменты\r
- [Определитель аккордов по нотам](/ru/chord-identifier)\r
- [Исследователь грифа](/ru/scales-fretboard-explorer)\r
- [Гармония](/ru/harmony)`,yw=`---
post_id: strumming-pattern-library
slug: biblioteka-patternov-boya-dlya-gitary
title: "Библиотека паттернов боя для гитары: как быстрее подобрать ритм для песни"
description: "Библиотека паттернов боя для гитары с готовыми ритмическими рисунками в разных размерах. Помогает быстро прослушать варианты, выбрать подходящий бой и найти идеи для практики и песен."
keywords: "паттерны боя для гитары, бой на гитаре, библиотека боёв для гитары, strumming patterns, ритм для гитары, как подобрать бой для песни, гитарные ритмические рисунки, паттерны боя в разных размерах, бой для аккордов, ритмические паттерны для гитары, six strings app, шесть струн"
tags: ритм, бой, паттерны боя, гитара, songwriting, аккомпанемент, практика
date: 2026-04-24
intro: "Когда аккордовая последовательность уже есть, следующий вопрос почти всегда один и тот же: как именно это сыграть, чтобы песня задышала. Библиотека паттернов боя помогает быстро сравнить готовые ритмические рисунки, услышать разницу между вариантами и выбрать бой не наугад, а по звуку и ощущению."
cta_path: /strumming-patterns-library/
cta_label: "Паттерны боя"
cover_image: cover.png
draft: false
---

## Введение

Многим гитаристам знакома ситуация, когда аккордовая последовательность уже найдена, но песня всё ещё не звучит как цельный музыкальный фрагмент. Аккорды есть, темп примерно понятен, настроение тоже, а вот с боем начинается перебор одних и тех же вариантов. В итоге даже неплохая идея может застрять на стадии «сыграть как-нибудь потом».

Теоретически эту задачу можно решить и без отдельного инструмента: вспоминать знакомые рисунки, искать разборы в интернете, пробовать варианты на слух или просто играть первое, что приходит в руку. Но на практике это часто означает лишнее время, повторение одних и тех же привычек и нехватку новых ритмических решений.

Именно из такой задачи и появилась библиотека паттернов боя в Шесть струн. Сначала я экспериментировал с прогрессией аккордов для песни и пытался понять, как её лучше сыграть. Базовых рисунков оказалось мало, поэтому я сделал пробную версию на основе генератора ритмических рисунков. Идея была логичной: если можно сгенерировать ритм, значит можно быстро получить и варианты боя. Но результат не понравился. Варианты выходили не всегда музыкальными и не всегда годились для живого гитарного аккомпанемента.

Тогда я пошёл в другую сторону: решил не генерировать абстрактные рисунки, а собрать известные паттерны боя, которые уже используются музыкантами на практике. Так появился новый инструмент. Визуализация и подзвучивание барабанами уже были готовы, поэтому оставалось собрать библиотеку, привести её к удобному формату и сделать быстрый способ прослушивания. В результате получился не просто список боёв, а рабочий инструмент для выбора ритма, практики и поиска идей.

## Что такое библиотека паттернов боя

Библиотека паттернов боя — это онлайн-инструмент с готовыми ритмическими рисунками для гитарного аккомпанемента. Он помогает быстро прослушивать разные варианты боя, сравнивать их между собой и подбирать подходящий ритм под конкретную аккордовую последовательность.

Главная ценность здесь не в том, что паттернов много, а в том, что их можно не просто прочитать глазами, а сразу услышать. Для ритма это критично. Один и тот же рисунок на бумаге может казаться понятным, но в живом звучании выясняется, что он либо слишком плотный, либо слишком прямой, либо вообще не поддерживает характер песни.

## Кому подойдёт этот инструмент

### Начинающим гитаристам

Новички часто знают 2–3 базовых боя и пользуются ими почти в любой песне. Это нормальный этап, но в какой-то момент он начинает ограничивать. Библиотека помогает увидеть, что даже в простом аккомпанементе вариантов больше, чем кажется сначала.

### Продолжающим музыкантам

Если вы уже играете уверенно, проблема обычно другая: не нехватка техники, а инерция. Руки сами тянутся к знакомому рисунку, даже если песне нужен другой характер. Библиотека удобна как быстрый способ выйти из автоматизма и проверить несколько ритмических решений подряд.

### Авторам песен и аранжировщикам

Когда вы пишете песню, бой — это не декоративная деталь, а часть аранжировки. Он влияет на движение, плотность и общее ощущение формы. Возможность быстро сравнить несколько паттернов экономит время и помогает не принимать ритмическое решение вслепую.

### Преподавателям

Для преподавателя библиотека полезна как наглядный материал. Можно не только объяснить ученику, что рисунки бывают разными, но и сразу дать ему послушать контрастные варианты в одном темпе и в похожем контексте.

## Какие проблемы решает библиотека паттернов боя

### 1. Помогает не застревать в одних и тех же рисунках

Одна из самых частых проблем в аккомпанементе — повторение знакомых движений. Музыкант не выбирает бой осознанно, а воспроизводит то, что уже сидит в руках. Библиотека возвращает момент выбора: можно остановиться и послушать, какой рисунок действительно подходит песне.

### 2. Ускоряет поиск ритма для конкретной прогрессии

Когда аккорды уже найдены, хочется быстро перейти к звуку, а не тратить час на хаотичные эксперименты. Готовые паттерны сокращают путь от идеи к проверке. Вы берёте последовательность и начинаете сравнивать не абстрактные варианты, а реальные рабочие рисунки.

### 3. Даёт идеи для практики

Инструмент полезен не только для написания песен. Это ещё и хороший способ расширять ритмический словарь. Даже если вы не работаете над конкретной композицией, можно взять незнакомый паттерн, разучить его, прогнать в нескольких темпах и добавить в свой активный набор.

### 4. Показывает, что размер тоже влияет на выбор боя

Полезно помнить, что бой — это не просто последовательность движений вниз и вверх. Он живёт внутри метра и пульса. Поэтому паттерны в разных размерах ощущаются по-разному и по-разному организуют музыку. Библиотека помогает это услышать, а не только понять умозрительно.

## Как это работает на практике

Логика использования инструмента простая. Вы выбираете паттерн, запускаете прослушивание и сразу слышите, как устроен рисунок во времени. За счёт барабанной подзвучки ритм воспринимается не как сухая схема, а как музыкальный фрагмент с пульсом и опорными долями.

Это особенно важно, потому что бой почти невозможно оценить только по стрелкам или условным обозначениям. Глаз видит структуру, но ухо проверяет, есть ли в ней движение, акцент, кач и удобство для реальной игры.

Если рисунок кажется подходящим, его можно тут же попробовать на своей прогрессии. Если не подходит, переходите к следующему. Такой подход убирает лишнюю абстракцию: вы не спорите с теорией, а быстро проверяете музыкальный результат.

## Почему это именно библиотека паттернов

Иногда новый инструмент рождается не из большой продуктовой идеи, а из очень конкретного вопроса: «Как это сыграть?» Здесь было именно так. Сначала задача выглядела как частный случай — подобрать бой для своей прогрессии. Потом стало понятно, что эта проблема повторяется постоянно.

Пробная версия, построенная на генераторе ритмических рисунков, помогла проверить направление, но не дала нужного качества. Генерация хороша там, где нужны неожиданные ритмические идеи. Но для аккомпанемента часто важнее не случайность, а музыкальная пригодность. Поэтому библиотека пошла по пути отбора известных и уже работающих паттернов.

Это важное отличие. Инструмент не предлагает любой ритм подряд. Он даёт набор решений, которые уже ближе к реальной практике гитариста.

## Почему это удобно именно в Шесть струн

В контексте Шесть струн библиотека удобна тем, что выросла не как изолированный каталог, а как продолжение уже существующих ритмических инструментов. За счёт этого здесь сразу есть понятная визуализация и подзвучивание барабанами, которое помогает лучше почувствовать рисунок.

Ещё одно преимущество — связность экосистемы. Если вам хочется не только выбрать готовый бой, но и поискать более нестандартные ритмические идеи, логично перейти к генератору ритма. Если задача — закрепить выбранный рисунок в стабильном темпе, следующим шагом будет метроном. А если нужно глубже поработать с внутренней пульсацией и субдолями, полезно открыть ритмический тренажёр.

Иными словами, библиотека закрывает один конкретный вопрос — какой бой попробовать, — но не обрывает работу на этом месте. Она естественно ведёт дальше: к практике, развитию ритма и музыкальному применению.

## Как использовать библиотеку с пользой

### Начните не с самого сложного рисунка, а с самого уместного

Частая ошибка — выбирать паттерн по принципу «чем интереснее, тем лучше». На деле хороший бой не обязан быть сложным. Он должен поддерживать песню. Иногда простая пульсация работает лучше, чем рисунок с большим количеством движений и акцентов.

### Сравнивайте несколько вариантов подряд

Лучше не останавливаться на первом же более-менее подходящем рисунке. Возьмите 3–4 паттерна в нужном размере и послушайте их один за другим. Контраст быстро показывает, какой вариант делает прогрессию живее, а какой перегружает её.

### Пробуйте один и тот же бой в разном темпе

Некоторые рисунки раскрываются только в определённом диапазоне темпа. В медленном темпе они могут казаться пустыми, а в быстром — наоборот, слишком суетливыми. Поэтому полезно не только выбрать паттерн, но и проверить, как он ощущается в вашем темпе.

### Учите бой через звук, а не только через схему

Если рисунок понравился, не спешите механически копировать движения. Сначала несколько раз послушайте его как ритмическую фразу. Так рука будет подстраиваться не под абстрактный шаблон, а под музыкальную логику рисунка.

## Короткий маршрут для первого использования

1. Возьмите простую аккордовую последовательность, с которой вы уже работаете.
2. Найдите несколько паттернов в подходящем размере.
3. Прослушайте их подряд и отсекайте всё, что не поддерживает характер песни.
4. Попробуйте 1–2 лучших варианта на своей прогрессии.
5. Закрепите выбранный рисунок в медленном темпе, а потом постепенно ускоряйте.

## FAQ

### Это инструмент только для новичков?

Нет. Новичкам он помогает выйти за пределы базовых рисунков, а более опытным музыкантам — быстрее сравнивать варианты и не играть всё время одним и тем же боем.

### Библиотека заменяет генератор ритма?

Нет. Эти инструменты решают разные задачи. Генератор ритма полезен, когда нужны неожиданные ритмические идеи. Библиотека паттернов боя полезна, когда нужны уже проверенные, более прикладные рисунки для аккомпанемента.

### Подойдёт ли это только для акустической гитары?

В первую очередь инструмент естественно ассоциируется с акустическим аккомпанементом, но сами ритмические идеи можно использовать и шире: для электрогитары, аранжировки, разбора песен и общей ритмической практики.

### Зачем вообще слушать паттерн, если можно просто посмотреть на схему?

Потому что ритм лучше понимается на слух, чем по графическому описанию. Схема показывает структуру, но только звучание даёт почувствовать пульс, акценты и музыкальное движение.

## Вывод

Библиотека паттернов боя полезна не потому, что собирает много рисунков в одном месте, а потому, что помогает быстрее и осознаннее решать конкретную музыкальную задачу: подобрать ритм для песни, практики или аранжировки. Это особенно ценно в тот момент, когда аккорды уже есть, а характер исполнения ещё не найден.

Если вы сейчас ищете, как сыграть свою прогрессию живее и убедительнее, логичный следующий шаг — открыть библиотеку паттернов боя и сравнить несколько рисунков на слух. А если после этого захочется расширить ритмический словарь, можно перейти к генератору ритма или закрепить выбранный вариант через метроном.

## Связанные инструменты

* [Паттерны боя](/ru/strumming-patterns-library/)
* [Генератор ритма](/ru/rhythm-generator/)
* [Метроном](/ru/rhythm-metronome/)
* [Ритмический тренажёр](/ru/rhythm-trainer/)


`,vw=`---
post_id: harmony-key-chords-cadences-modulations
slug: garmoniya-akordy-tonalnosti-kadentsii-modulyatsii
title: "Гармония: как видеть аккорды тональности, слышать каденции и понимать модуляции"
description: "Онлайн-инструмент для работы с гармонией: аккорды тональности, функции, каденции и модуляции с прослушиванием прямо в браузере. Полезно для практики, аранжировки и написания музыки."
keywords: "гармония, аккорды тональности, функции аккордов, каденции, модуляции, гармония в музыке, аккорды в тональности, подобрать аккорд по функции, генератор гармоний, гармония для гитары, songwriting, chord functions, chord progressions, six strings app, шесть струн, онлайн-инструмент для музыкантов"
tags: гармония, аккорды, тональность, каденции, модуляции, теория музыки, songwriting, гитара
date: 2026-04-09
intro: "Онлайн-инструмент для работы с аккордами тональности, функциями, каденциями и модуляциями с прослушиванием прямо в браузере."
cta_path: /harmony/
cta_label: "Гармония"
cover_image: cover.png
draft: false
---
## Введение

Многим музыкантам знакома ситуация, когда тональность уже понятна, а дальше начинается выбор: какой аккорд взять, какую функцию он должен выполнять и как проверить это не только теоретически, но и на слух.

Без удобного инструмента такая задача быстро становится медленной и неудобной: аккорды приходится вспоминать вручную, каденции — искать отдельно, а модуляции остаются слишком абстрактной темой.

Страница «Гармония» помогает решить это практическим способом. Здесь можно увидеть аккорды выбранной тональности, послушать их, сравнить гармонические функции, проверить каденции и разобраться, как работает переход в другие тональности.

Ниже разберём, как устроена эта страница, для каких задач она особенно полезна и как использовать её в реальной музыкальной практике.

## Что такое страница Гармония

**[Гармония](/ru/harmony)** — это онлайн-инструмент для работы с аккордами внутри выбранной тональности. Он показывает гармонический материал не в виде сухой теории, а в виде понятной структуры: какие аккорды доступны, какую функцию они выполняют, какие каденции можно на них построить и как из этой тональности можно выйти в другую.

Главная ценность страницы в том, что она связывает несколько уровней сразу. Здесь можно не только посмотреть на аккорды внутри тональности, но и сопоставить их с функцией, контекстом и звучанием. За счёт этого страница полезна не как справочник ради справочника, а как инструмент выбора и проверки.

## Как появилась эта страница

Страница «Гармония» появилась примерно в то же время, что и ритмический тренажёр. Изначально идея была довольно приземлённой: хотелось собрать в одном месте основные аккорды тональности и сделать так, чтобы их можно было не только увидеть, но и послушать. Не по отдельным обрывкам из разных источников, а прямо в браузере и бесплатно.

Постепенно вокруг этой идеи начал расти дополнительный материал. Я долго собирал разные каденции, потому что хотелось иметь под рукой не просто набор аккордов, а типовые гармонические ходы, которые можно быстро прослушать в любой тональности. Это важно и для обучения, и для написания музыки: каденция сразу даёт ощущение движения, а не только набор функций на бумаге.

Параллельно накапливался материал по модуляциям. Хотелось понять не только то, какие аккорды входят в тональность, но и то, как музыка может из неё выйти. Какие бывают типы переходов, на чём они держатся, почему одни звучат естественно, а другие создают более резкий эффект. Так в инструменте рядом с аккордами и каденциями появился отдельный слой, связанный с модуляциями.

На раннем этапе страница называлась **«генератор гармоний»**. В ней можно было видеть основные аккорды тональности в таблице: трезвучия, sus-аккорды, септаккорды, а также аккорды с 9, 11 и 13 ступенью. Уже тогда инструмент был полезен для тех, кто хотел быстро сориентироваться внутри гармонического поля и не собирать всё вручную.

Позже страница стала шире и практичнее. Совсем недавно я переработал вывод основной таблицы аккордов: добавил **аккорды с 6 ступенью** и **пауэр-аккорды**, а также улучшил звук. Теперь аккорды подзвучиваются не только синтезированной гитарой: можно выбирать сразу несколько инструментов и получать более живые тембровые сочетания. Из-за этого и каденции, и модуляции стали восприниматься музыкальнее.

Работа над страницей продолжается. Я до сих пор собираю новые интересные каденции, чтобы инструмент оставался не статическим каталогом, а живой практической библиотекой гармонических ходов.

## Какие задачи она решает

Страница «Гармония» особенно полезна в тех случаях, когда нужно принять музыкальное решение, а не просто вспомнить термин.

### 1. Помогает быстро увидеть аккорды внутри тональности

Когда вы выбираете тональность для песни, разбираете уже готовую последовательность или ищете вариант для аранжировки, важно понимать, какой набор аккордов у вас вообще есть. Причём не только базовые трезвучия, но и более рабочие варианты: sus-аккорды, септаккорды, расширения, аккорды с 6 ступенью и пауэр-аккорды.

Это экономит время. Вместо того чтобы держать всё в голове или сверяться с разрозненными таблицами, вы сразу видите доступный материал в одном месте.

### 2. Помогает выбирать аккорд по функции

Функция аккорда — это его роль внутри тональности. Для практики это важнее, чем может показаться. Один аккорд даёт устойчивость, другой подталкивает движение вперёд, третий создаёт напряжение и тянет к разрешению.

Когда функция видна сразу, выбор становится осмысленнее. Вы уже не подбираете аккорд вслепую, а сначала решаете, что именно вам нужно в этом месте: покой, подготовка, напряжение или разворот. После этого остаётся только послушать варианты и выбрать тот, который подходит по характеру.

### 3. Даёт готовый контекст через каденции

Сами по себе аккорды полезны, но в музыке они почти всегда работают в движении. Поэтому каденции здесь не дополнительная опция, а одна из ключевых частей страницы. Они позволяют быстро услышать, как функция раскрывается в последовательности.

Это удобно и для обучения, и для написания музыки. В первом случае вы начинаете быстрее слышать типовые ходы и узнавать их в песнях. Во втором — получаете отправную точку для собственной прогрессии, которую можно потом развить под конкретную задачу.

### 4. Помогает разбираться в модуляциях

Модуляция — одна из тем, которые легко превращаются в перегруженную теорию. Но практический вопрос обычно проще: как перейти из одной тональности в другую так, чтобы это звучало убедительно.

Когда виды модуляций собраны в одном месте, их легче воспринимать как музыкальные решения, а не как абстрактные схемы. Это полезно и для анализа, и для собственного материала, когда хочется расширить гармонию и выйти за пределы одного центра.

## Как использовать Гармонию на практике

### Для выбора аккорда по функции

Это один из самых полезных сценариев. Допустим, вам нужен **доминантовый аккорд в [тональности си минор](/ru/harmony/?note=B&mode=aeolian&tab=chords)**. Вы открываете страницу и сразу видите, какие ступени выполняют доминантовую функцию. Дальше можно послушать, какой именно вариант подходит по ощущению: более прямой, более мягкий или более напряжённый.

Такой маршрут удобен тем, что вы идёте от музыкальной роли к конкретному аккорду, а не наоборот. Сначала понимаете, что должно произойти в гармонии, потом выбираете подходящее звучание.

### Для написания песен и прогрессий

Когда привычные последовательности начинают повторяться, страница «Гармония» помогает выйти из шаблона без хаотичного перебора. Можно выбрать тональность, посмотреть основные функции, послушать несколько каденций и взять за основу тот ход, который лучше соответствует настроению куска.

Если нужен следующий шаг, найденный материал удобно перенести в **[Конструктор песен](/ru/song/)**: собрать прогрессию целиком, поработать с темпом, обращениями и прослушиванием в более длинной форме.

### Для разбора чужой музыки

Если вы анализируете песню, страница помогает быстро проверить, какие аккорды относятся к диатонике, где начинается функциональное отклонение, а где, возможно, уже намечается модуляция. Это не заменяет полноценный анализ, но сильно ускоряет ориентирование внутри материала.

### Для обучения и преподавания

Самоучке страница даёт опору: можно не пытаться удержать всё в голове, а разбирать гармонию через конкретную тональность, функции и звук. Преподавателю она полезна тем, что позволяет быстро показать ученику не только название функции, но и её реальное ощущение в последовательности.

## Почему этот подход удобен именно в Шесть струн

Сильная сторона страницы «Гармония» в том, что она не оторвана от остальных инструментов сайта.

Если вы нашли нужный аккорд по функции и звучанию, следующим шагом можно открыть **[Аккорды, арпеджио, гаммы](/ru/chords/)** и подобрать удобную аппликатуру. Если нужно быстрее сориентироваться в мажоре и миноре, рядом есть **[Кварто-квинтовый круг](/ru/circle-of-fifths/)**. Если хочется не только понимать функцию, но и узнавать её на слух, логично перейти к **[Тренажёру функций аккордов](/ru/ear/functions/)**.

За счёт этой связки теория не заканчивается на таблице. Она переходит в слух, гриф и музыкальное действие.

## С чего начать

Проще всего использовать страницу так:

1. Выберите тональность.
2. Посмотрите основные аккорды и их функции.
3. Прослушайте варианты на нужной ступени.
4. Откройте каденции, чтобы услышать аккорд в движении.
5. Если нашли нужный вариант, перейдите в **[Аккорды, арпеджио, гаммы](/ru/chords/)** за аппликатурой.

Такой маршрут уже даёт практическую пользу даже без глубокого погружения в теорию.

## FAQ

### Что показывает страница Гармония?
Она показывает аккорды выбранной тональности, их функции, каденции и варианты модуляций с возможностью прослушивания.

### Для чего нужны функции аккордов?
Функции помогают понять роль аккорда внутри тональности: устойчивость, движение, напряжение и разрешение.

### Можно ли использовать Гармонию для написания песен?
Да. Страница помогает подбирать аккорды по функции и звучанию, слушать каденции и искать идеи для прогрессий.

### Чем полезны модуляции на этой странице?
Они помогают услышать и понять, как можно перейти из одной тональности в другую в реальной музыке.

### Что делать после выбора аккорда?
Перейти на страницу «Аккорды, арпеджио, гаммы», чтобы подобрать удобную аппликатуру и посмотреть связанные гаммы.

## Связанные инструменты

- [Гармония](/ru/harmony) — основная целевая страница статьи
- [Аккорды, арпеджио, гаммы](/ru/chords/) — следующий шаг после выбора аккорда по функции
- [Кварто-квинтовый круг](/ru/circle-of-fifths/) — для быстрой навигации по тональностям
- [Конструктор песен](/ru/song/) — для сборки и прослушивания прогрессии после выбора гармонического материала
- [Тренажёр функций аккордов](/ru/ear/functions/) — для развития слухового понимания гармонических функций
`,ww=`---\r
post_id: circle-of-fifths-keys-major-minor\r
slug: kvarto-kvintovyy-krug-tonalnosti-mazhor-minor\r
title: "Кварто-квинтовый круг: как понимать связи между тональностями, мажором и минором"\r
description: "Как пользоваться кварто-квинтовым кругом на практике: понимать связи между тональностями, быстрее ориентироваться в мажоре и миноре, подбирать аккорды и переходить от шпаргалки к реальной гармонии."\r
keywords: "кварто-квинтовый круг, квинтовый круг, круг квинт, связи между тональностями, мажор и минор, параллельный минор, родственные тональности, аккорды в тональности, гармония, songwriting, circle of fifths, six strings app, шесть струн, теория музыки, музыкальная теория, музыкальная гармония, музыкальная практика, музыкальный инструмент, гитара, бас-гитара, укулеле, аккорды, прогрессии, транспонирование, аранжировка, композиция, музыкальный анализ"\r
tags: кварто-квинтовый круг, гармония, тональность, мажор, минор, теория музыки, songwriting\r
date: 2026-04-11\r
intro: "Кварто-квинтовый круг часто кажется сухой схемой из учебника. Но на практике это очень полезная шпаргалка. Он помогает быстро понять, какие тональности связаны между собой, где находится параллельный минор или мажор и в какую сторону можно двигать гармонию."\r
cta_path: /circle-of-fifths\r
cta_label: "Кварто-квинтовый круг"\r
cover_image: cover.png\r
draft: false\r
---\r
## Введение\r
\r
Многие музыканты путаются не в аккордах, а в связях между ними. Отдельные аккорды понятны, гаммы тоже вроде знакомы, но как только нужно быстро вспомнить родственную тональность, найти параллельный минор или понять, куда можно сдвинуть гармонию, появляется ступор.\r
\r
Теоретически всё это можно держать в голове. На практике так неудобно. Когда вы разбираете песню, пишете последовательность, транспонируете материал или делаете аранжировку, нужен быстрый ориентир.\r
\r
Именно для этого и нужен кварто-квинтовый круг. В Шесть струн это не просто схема с тональностями, а удобная точка входа в гармонию. Страница помогает увидеть связи между тональностями, быстрее разобраться в мажоре и миноре и при необходимости перейти к страницам [«Гармония»](/ru/harmony/) и [«Конструктор песен»](/ru/song/).\r
\r
В этой статье разберём, что показывает кварто-квинтовый круг, кому он полезен и как использовать его в реальной музыкальной практике.\r
\r
## Что такое кварто-квинтовый круг простыми словами\r
\r
Кварто-квинтовый круг — это схема, которая показывает связи между тональностями. Если двигаться по кругу в одну сторону, тональности идут по квинтам. Если в другую — по квартам. Отсюда и название.\r
\r
Но музыканту важна не сама схема, а её смысл. Тональности, которые стоят рядом, обычно ближе друг к другу по звучанию. Поэтому круг помогает видеть гармонию как систему, а не как набор разрозненных правил.\r
\r
На практике он помогает быстро понять:\r
\r
- какая тональность находится рядом;\r
- какой минор является параллельным мажору;\r
- какие тональности логично попробовать рядом;\r
- куда проще сдвинуть гармонию;\r
- как быстрее транспонировать знакомую последовательность.\r
\r
Поэтому круг полезен не только тем, кто учит теорию. Он нужен и тем, кто пишет песни, делает аранжировки, подбирает аккорды на слух или хочет лучше понимать страницу [«Гармония»](/ru/harmony/).\r
\r
## Кому особенно полезна эта страница\r
\r
### Начинающим гитаристам\r
\r
Если вы путаетесь между тональностью, гаммой и набором аккордов, кварто-квинтовый круг даёт первую опору. Он помогает увидеть, что теория — это не хаос из непонятных слов, а понятная система.\r
\r
### Продолжающим музыкантам\r
\r
Если вы уже играете аккорды, строите прогрессии и изучаете импровизацию, круг помогает быстрее принимать решения. Не нужно каждый раз вспоминать всё с нуля. Можно сразу увидеть ближайшие тональности и связи между ними.\r
\r
### Авторам песен и аранжировок\r
\r
Когда нужно быстро подобрать близкую тональность, найти естественный переход или выйти за пределы привычных трёх аккордов, круг даёт полезную подсказку. Это особенно удобно на этапе черновиков, когда важно не потерять идею.\r
\r
### Преподавателям\r
\r
Кварто-квинтовый круг удобно использовать как наглядную схему. Через него проще объяснять параллельные тональности, связи между аккордами и общую логику гармонии.\r
\r
## Какие задачи решает кварто-квинтовый круг\r
\r
### Помогает быстрее ориентироваться в тональностях\r
\r
Частая проблема такая: музыкант знает отдельные аккорды, но плохо понимает, как тональности связаны друг с другом. Круг убирает эту путаницу. Вы сразу видите, какие тональности рядом, а какие уже звучат дальше и контрастнее.\r
\r
### Показывает связь между мажором и минором\r
\r
Многие знают, что у мажора есть параллельный минор, но не очень чувствуют это на практике. Когда эта связь показана на одной схеме, ориентироваться становится проще. Это полезно и для разбора песен, и для написания своих последовательностей.\r
\r
### Даёт опору для транспонирования\r
\r
Если вы играете прогрессию в одной тональности и хотите перенести её в другую, круг помогает сделать это осмысленно. Не просто механически сдвинуть аккорды, а сохранить логику движения.\r
\r
### Упрощает вход в гармонию\r
\r
Кварто-квинтовый круг не заменяет подробную страницу с аккордами тональности, каденциями и модуляциями. Но он даёт хороший старт. Сначала вы видите общую картину, а потом уже переходите к деталям.\r
\r
### Помогает выбрать направление для прогрессии\r
\r
Многие ходы в поп- и рок-музыке легче понять, когда видно, как тональности расположены относительно друг друга. Так проще решить, куда двигать куплет, припев или бридж.\r
\r
## Как это работает на практике в Шесть струн\r
\r
Страница «Кварто-квинтовый круг» в Шесть струн полезна как быстрая точка входа в гармонию. Она нужна не для того, чтобы один раз посмотреть на круг и закрыть вкладку. Её удобно использовать как рабочую шпаргалку.\r
\r
Обычный маршрут такой:\r
\r
1. Вы выбираете тональность или просто смотрите на круг как на карту связей.\r
2. Сразу видите соседние тональности и общее гармоническое окружение.\r
3. Быстро соотносите мажор и минор.\r
4. Получаете опору для подбора аккордов, транспонирования и анализа.\r
5. Если нужно больше деталей, переходите в [«Гармонию»](/ru/harmony/).\r
6. Если хотите сразу собрать идею в последовательность, открываете [«Конструктор песен»](/ru/song/).\r
\r
Такой порядок удобен тем, что не перегружает. Сначала вы понимаете связи, потом проверяете их в гармонии, а потом применяете на практике.\r
\r
## Как использовать кварто-квинтовый круг в музыкальной практике\r
\r
### 1. Чтобы быстро вспомнить родственные тональности\r
\r
Это самый простой сценарий. Допустим, вы играете в соль мажоре и хотите понять, какие тональности рядом и куда можно сместиться без резкого разрыва по звучанию. Круг даёт этот ответ почти сразу.\r
\r
Это особенно полезно при разборе песен и подготовке к импровизации. Вместо долгого перебора вы сразу видите ближайшее гармоническое окружение.\r
\r
### 2. Чтобы понять связь мажора и параллельного минора\r
\r
Если вы работаете с песней, где настроение может смещаться от светлого к более тёмному, связь мажора и параллельного минора становится очень важной. Круг помогает быстро увидеть эту пару и держать её в голове как единое пространство.\r
\r
Это полезно и для написания песен. Иногда не нужно искать что-то экзотическое. Достаточно посмотреть на родственный минор или мажор и попробовать сместить акцент туда.\r
\r
### 3. Чтобы нащупать направление для прогрессии\r
\r
Кварто-квинтовый круг не заменяет работу с аккордами, но очень помогает в начале. Когда вы выбираете, из какого тонального центра стартовать и какие соседние области попробовать, круг работает как быстрая музыкальная карта.\r
\r
Дальше можно перейти в [«Конструктор песен»](/ru/song/) и уже собрать последовательность, проверить её на слух, попробовать обращения, басовые ноты и варианты развития.\r
\r
### 4. Чтобы транспонировать знакомые последовательности\r
\r
Если вы уже знаете, как звучит прогрессия в одной тональности, круг помогает быстрее перенести её в другую и не потерять логику связей. Это полезно для вокалистов, преподавателей и всех, кто регулярно подстраивает материал под удобный диапазон.\r
\r
### 5. Чтобы лучше понимать страницу «Гармония»\r
\r
Иногда сложно сразу открыть большой список аккордов тональности, каденций и модуляций. Кварто-квинтовый круг в этом случае работает как входная карта. Сначала вы понимаете, где находитесь, а потом уже идёте глубже.\r
\r
Поэтому связка страниц здесь особенно полезна: круг даёт обзор, а [«Гармония»](/ru/harmony/) даёт подробности.\r
\r
## Почему эта страница удобна именно внутри Шесть струн\r
\r
Главная ценность страницы не в том, что она просто показывает круг. Таких схем в интернете много. Важнее другое: здесь круг встроен в общую музыкальную среду сайта и связан с другими инструментами.\r
\r
### Это не изолированная теория\r
\r
Вы не просто смотрите на подписи тональностей по окружности. Вы можете понять связи между ними и сразу перейти к следующему действию внутри сайта.\r
\r
### Это хороший вход в гармонию\r
\r
Если пользователь пока не готов разбирать функции, каденции и модуляции подробно, круг даёт более простой старт. Сначала появляется карта, потом детали.\r
\r
### Есть понятный следующий шаг\r
\r
Когда общее понимание уже появилось, можно перейти на страницу [«Гармония»](/ru/harmony/) за полным набором аккордов тональности или в [«Конструктор песен»](/ru/song/), если хочется сразу применить идею.\r
\r
### Это полезно не только для учёбы, но и для сочинения\r
\r
Кварто-квинтовый круг нужен не только тем, кто учит теорию. Он полезен и музыканту, который пишет песню, ищет направление для куплета или припева и хочет выйти за пределы привычных решений.\r
\r
## Простой маршрут, с которого удобно начать\r
\r
Если вы только знакомитесь с этой страницей, не пытайтесь сразу выучить весь круг. Намного полезнее такой маршрут:\r
\r
1. Выберите одну знакомую тональность, например До мажор (C major) или Ля минор (A minor).\r
2. Посмотрите, какие тональности стоят рядом.\r
3. Найдите параллельный минор или мажор.\r
4. Вспомните, какие песни и аккорды у вас уже связаны с этим центром.\r
5. После этого перейдите в [«Гармонию»](/ru/harmony/) и посмотрите, какие аккорды входят в выбранную тональность.\r
6. Если хотите сразу превратить идею в последовательность, откройте [«Конструктор песен»](/ru/song/).\r
\r
Так вы не перегружаете себя схемой и сразу переводите понимание в действие.\r
\r
## Частые ошибки при изучении кварто-квинтового круга\r
\r
### Ошибка 1. Пытаться выучить круг как картинку\r
\r
Если просто механически запоминать порядок тональностей, пользы будет мало. Намного важнее понимать, что именно показывает круг: близость тональностей, связь мажора и минора и направление гармонического движения.\r
\r
### Ошибка 2. Воспринимать круг как готовый список «правильных» аккордов\r
\r
Круг помогает ориентироваться, но не заменяет анализ конкретной песни. Музыка часто выходит за пределы простой диатоники и использует заимствования, вторичные доминанты и модуляции. Поэтому круг — это опора, а не жёсткое правило.\r
\r
### Ошибка 3. Изучать только глазами\r
\r
Если не связывать круг с реальной музыкой, теория запоминается хуже. Намного полезнее смотреть на связи между тональностями, потом проверять аккорды на странице [«Гармония»](/ru/harmony/) и применять их в [«Конструкторе песен»](/ru/song/).\r
\r
### Ошибка 4. Сразу пытаться охватить все тональности\r
\r
Лучше идти от знакомого материала. Возьмите 2–3 тональности, в которых вы уже играете песни, и проследите их связи. Такой подход быстрее даёт реальное понимание.\r
\r
## FAQ\r
\r
### Что показывает кварто-квинтовый круг?\r
\r
Кварто-квинтовый круг показывает, как тональности связаны между собой. Он помогает видеть соседние тональности, параллельные мажор и минор и общее направление гармонического движения.\r
\r
### Чем кварто-квинтовый круг полезен гитаристу?\r
\r
Он помогает быстрее ориентироваться в тональностях, подбирать аккорды, транспонировать последовательности и понимать, почему одни переходы звучат естественно, а другие создают более сильный контраст.\r
\r
### Можно ли использовать круг для написания песен?\r
\r
Да. Это удобная стартовая карта. Она помогает выбрать тональный центр, посмотреть ближайшие гармонические области и наметить направление прогрессии. Для более детальной работы удобно перейти в [«Конструктор песен»](/ru/song/).\r
\r
### Заменяет ли эта страница полноценное изучение гармонии?\r
\r
Нет. Кварто-квинтовый круг даёт обзор и быстрое понимание связей между тональностями. Для подробной работы с аккордами, функциями, каденциями и модуляциями лучше переходить на страницу [«Гармония»](/ru/harmony/).\r
\r
### Подходит ли этот инструмент только новичкам?\r
\r
Нет. Новичкам он помогает снять путаницу, а продолжающим музыкантам — быстрее принимать решения при анализе, сочинении и аранжировке.\r
\r
## Вывод\r
\r
Кварто-квинтовый круг полезен не потому, что это красивая схема из учебника. Он полезен потому, что помогает быстрее видеть связи между тональностями и принимать практические решения. Это особенно важно там, где музыкант обычно начинает путаться: в мажоре и миноре, родственных центрах, транспонировании и выборе гармонического направления.\r
\r
Если вам важно не просто читать теорию, а сразу применять её в разборе песен, сочинении и аранжировке, начните со страницы [«Кварто-квинтовый круг»](/ru/circle-of-fifths/). Выберите знакомую тональность, посмотрите на связи вокруг неё, а потом переходите в [«Гармонию»](/ru/harmony/) или [«Конструктор песен»](/ru/song/).\r
`,bw=`---\r
post_id: metronome-online\r
slug: metronom-dlya-gitaristy-onlajn\r
title: "Онлайн-метроном для гитариста: мини драм-машина для занятий и практики"\r
description: "Онлайн-метроном Шесть струн (Six Strings App) помогает заниматься ровно и музыкально: настраиваемый звук, прогрессирующий темп, таймер, паттерны в разных жанрах и размерах, гибкие субдоли и сохранение собственных ритмов."\r
keywords: "онлайн метроном для гитары, метроном для занятий, метроном с барабанами, метроном с прогрессирующим темпом, драм машина для гитариста, метроном с таймером, практика ритма на гитаре, метроном с паттернами, метроном с субдолями, сохранение ритмов, шесть струн, six strings app"\r
tags: метроном, практика, музыкальный метроном, онлайн-метроном, драм-машина, прогрессирующий темп, таймер для занятий, паттерны для гитары, субдоли, сохранение ритмов\r
date: 2026-04-13\r
intro: "Обычный метроном даёт пульс, но не всегда помогает заниматься удобно и музыкально. Иногда нужен мягкий звук, иногда — акцент на субдолях, иногда — постепенное ускорение темпа или готовый ритмический рисунок в нужном размере. Этот метроном я делал прежде всего для себя: как рабочий инструмент для реальной практики, а не как страницу с одной кнопкой Start."\r
cta_path: /rhythm-metronome/\r
cta_label: "Метроном"\r
cover_image: cover.png\r
draft: false\r
---\r
\r
## Введение\r
\r
Обычный метроном решает базовую задачу: даёт ровный пульс. Этого уже достаточно, чтобы тренировать тайминг, разбирать партии и держать темп. Но в реальной практике этого часто мало. Хочется менять звук, слышать субдоли, постепенно поднимать BPM, играть под готовый рисунок и не открывать отдельный таймер или драм-машину ради каждой мелочи.\r
\r
Именно из такой потребности и появился метроном в Шесть струн. Я делал его в первую очередь для себя: как инструмент, с которым удобно заниматься каждый день. В результате получился не просто онлайн-метроном, а компактная ритмическая среда для практики.\r
\r
В этой статье разберём, кому такой метроном полезен, какие задачи он закрывает и почему иногда для занятий нужен не только клик, но и более музыкальная опора.\r
\r
## Что это за инструмент\r
\r
Метроном Шесть струн — это онлайн-инструмент для ритмической практики. Его можно использовать как обычный метроном, как инструмент для работы с субдолями и как мини драм-машину для повседневных занятий.\r
\r
Он полезен, когда нужно:\r
\r
- держать ровный темп;\r
- постепенно повышать скорость упражнения;\r
- тренировать точность внутри доли;\r
- играть под готовые паттерны в разных жанрах и размерах;\r
- создавать и сохранять собственные ритмические рисунки.\r
\r
## Кому он подойдёт\r
\r
Прежде всего — гитаристам. Но на деле он полезен любому музыканту, которому важно заниматься в темпе и слышать ритм не как сухой щелчок, а как структуру с акцентами и движением.\r
\r
Особенно хорошо инструмент подойдёт тем, кто:\r
\r
- учит упражнения, риффы, пассажи и хочет повышать скорость без спешки;\r
- работает над боем, штрихом и ритмической точностью;\r
- разучивает партии в разных размерах;\r
- хочет лучше чувствовать восьмые, триоли и шестнадцатые;\r
- предпочитает заниматься под более музыкальный ритм, чем обычный клик;\r
- строит короткие и собранные тренировочные сессии.\r
\r
## Какие проблемы он решает\r
\r
### Сухой клик быстро утомляет\r
\r
Обычный щелчок выполняет свою функцию, но не всегда помогает долго держать внимание. Когда звук можно настроить под себя, заниматься проще и приятнее. А значит, выше шанс, что практика станет регулярной.\r
\r
### Сложно повышать темп системно\r
\r
Частая ошибка — сразу ставить высокий BPM и пытаться «втащить» упражнение усилием. Обычно это заканчивается зажимом, грязью и потерей контроля. Режим прогрессирующего темпа помогает идти поэтапно: от комфортной скорости к более высокой, но без хаоса.\r
\r
### В занятиях не хватает структуры\r
\r
Без ограничений по времени практика легко расползается. Можно долго крутить одно упражнение и при этом не пройти его осмысленно. Таймер задаёт рамку и помогает держать фокус: например, 10 минут на штрих, 10 минут на ритм и 5 минут на закрепление.\r
\r
### Обычного клика мало для работы над грувом\r
\r
Когда нужно почувствовать не только доли, но и характер рисунка, сухого метронома бывает недостаточно. В таких случаях выручает паттерн: он даёт контекст, акценты и ощущение движения внутри такта.\r
\r
### Проблемы начинаются внутри доли\r
\r
Играть по четвертям — это только верхний слой тайминга. Многие ошибки прячутся глубже: на восьмых, триолях, шестнадцатых, синкопах. Поэтому гибкая настройка субдолей — не второстепенная функция, а важный инструмент точной ритмической практики.\r
\r
### Не хочется собирать занятие из пяти сервисов\r
\r
Отдельный метроном, отдельный таймер, отдельная драм-машина, отдельные заготовки под рисунки — всё это создаёт лишнее трение. Здесь базовые вещи собраны в одном месте, поэтому путь от идеи до практики становится короче.\r
\r
## Почему это не просто метроном\r
\r
Классический метроном говорит: вот доля, держись за неё. Это полезно, но иногда слишком узко. В реальной музыке важны не только точки удара, но и ощущение рисунка, плотности, акцентов и движения внутри такта.\r
\r
Поэтому этот инструмент лучше воспринимать как промежуточный формат между обычным метрономом и простой драм-машиной. Он не пытается заменить DAW или полноценный барабанный секвенсор. Его задача скромнее и практичнее: дать музыканту быстрый, понятный и гибкий ритмический инструмент прямо в браузере.\r
\r
## Главные возможности метронома\r
\r
### Настраиваемый звук\r
\r
Звук напрямую влияет на качество практики. В одной ситуации нужен сухой и чёткий клик, в другой — более мягкое и музыкальное звучание, которое не утомляет через десять минут. Возможность настроить звук важна не для красоты, а для комфорта и концентрации.\r
\r
Это особенно заметно в длинных сессиях, медленном разборе материала и технических упражнениях, где один и тот же сигнал повторяется десятки или сотни раз.\r
\r
### Режим прогрессирующего темпа\r
\r
Одна из самых практичных функций для техники. Вместо того чтобы вручную повышать BPM после каждого подхода, можно заранее задать логику ускорения и спокойно пройти весь цикл. Такой режим особенно полезен для гамм, арпеджио, переменного штриха, легато, свипов, риффов и коротких технических фраз.\r
\r
Главная ценность здесь не в самом росте скорости, а в системе. Скорость перестаёт быть случайной. Вы работаете по понятному маршруту и меньше рискуете сорваться в суету.\r
\r
### Таймер для занятий\r
\r
Таймер — простая функция, которая даёт вполне практический эффект. Он помогает собирать короткие, но плотные сессии и не проваливаться в бесконечное «ещё разок». Это особенно полезно, если вы занимаетесь до работы, между делами или привыкли строить практику блоками.\r
\r
Например:\r
\r
- 5 минут на разогрев;\r
- 10 минут на ритм;\r
- 10 минут на технику;\r
- 5 минут на закрепление.\r
\r
Такая рамка не мешает. Наоборот, она собирает внимание и помогает держать регулярность.\r
\r
### Паттерны в разных жанрах и размерах\r
\r
Иногда нужно не просто попасть в долю, а почувствовать характер движения. В таких случаях готовые паттерны полезнее обычного клика. Они помогают услышать, как дышит размер, где ложится акцент и как устроен грув.\r
\r
Это удобно для ритм-гитары, боёв, жанровой практики и занятий в нестандартных размерах. Когда вы играете не в пустоту, а на фоне понятного рисунка, музыкальность появляется быстрее.\r
\r
### Гибкая настройка субдолей\r
\r
Умение чувствовать внутреннее деление доли — база уверенного тайминга. Если музыкант ориентируется только на сильные доли, партия может звучать ровно снаружи, но неустойчиво внутри. Настройка субдолей делает эту внутреннюю сетку слышимой.\r
\r
Это полезно для:\r
\r
- ровных восьмых и шестнадцатых;\r
- триольного ощущения;\r
- синкоп;\r
- плотных риффов;\r
- контроля правой руки в быстрых партиях.\r
\r
### Собственные рисунки и сохранение\r
\r
Один из самых полезных сценариев — собрать ритм под свою задачу. Например, под конкретное упражнение, бой, рифф, джазовую пульсацию или необычный размер. Возможность сохранить рисунок превращает метроном из универсального сервиса в персональную библиотеку рабочих заготовок.\r
\r
Это удобно, когда вы регулярно возвращаетесь к одним и тем же типам практики. Не нужно заново выставлять все параметры: достаточно открыть нужный рисунок и начать играть.\r
\r
### По сути мини драм-машина\r
\r
Именно так этот инструмент проще всего описать. В нём достаточно гибкости, чтобы заниматься музыкальнее, чем под голый клик, но без перегруза, который часто возникает в полноценных барабанных программах. Открыл браузер, собрал нужный режим и сразу начал практику.\r
\r
Для ежедневных занятий это часто важнее, чем длинный список сложных функций.\r
\r
## Как использовать метроном на практике\r
\r
### Для техники и постепенного разгона\r
\r
Возьмите короткое упражнение и поставьте темп, в котором вы играете чисто и расслабленно. Затем включите прогрессирующий темп и проходите цикл без рывков. Цель не в том, чтобы героически добраться до максимума, а в том, чтобы сохранить контроль на каждом этапе.\r
\r
### Для ритмики правой руки\r
\r
Если вы работаете над боем, штрихом или акцентами, подключайте не только основной пульс, но и субдоли. Так быстрее слышно, где именно рисунок разваливается: на входе в долю, между ударами или на слабой части такта.\r
\r
### Для занятий в жанровом контексте\r
\r
Вместо сухого клика возьмите паттерн с подходящим характером. Это полезно, когда вы разучиваете ритм-партию, хотите удержать грув или ищете более музыкальное ощущение темпа.\r
\r
### Для коротких сфокусированных сессий\r
\r
Поставьте таймер на 15–20 минут и работайте только над одной задачей. Такой подход особенно хорош, если времени мало или трудно держать внимание на одном материале.\r
\r
### Для собственных упражнений и риффов\r
\r
Если у вас есть повторяющийся рисунок, который хочется стабилизировать, имеет смысл сделать под него отдельный паттерн. Тогда метроном перестаёт быть фоном и становится частью самого упражнения.\r
\r
## Почему я сделал такой метроном\r
\r
Большая часть инструментов на сайте появилась не из желания добавить ещё одну страницу, а из реальных практических задач. С метрономом история та же. Мне нужен был инструмент, который запускается быстро, не раздражает, помогает держать структуру занятия и при этом даёт больше свободы, чем обычный клик.\r
\r
Обычный метроном часто оказывался слишком простым, а полноценные драм-машины — слишком тяжёлыми для быстрых ежедневных сессий. Хотелось промежуточный вариант: задать темп, выбрать звук, включить субдоли, поставить таймер, взять готовый паттерн или сохранить свой. Так и появился этот инструмент.\r
\r
Поэтому здесь акцент не на декоративных возможностях, а на том, что реально нужно в работе: меньше трения, больше практики.\r
\r
## Как начать использовать\r
\r
Самый простой маршрут такой:\r
\r
1. Выберите базовый темп под свою задачу.\r
2. Настройте звук, который не утомляет.\r
3. Решите, нужен ли вам обычный пульс, субдоли или готовый паттерн.\r
4. Если работаете над техникой, включите прогрессирующий темп.\r
5. Если хотите сделать занятие собранным, поставьте таймер.\r
6. Сохраните удачный рисунок, если планируете к нему возвращаться.\r
\r
Этого уже достаточно, чтобы случайная практика стала более системной.\r
\r
## Что особенно удобно в Шесть струн\r
\r
Преимущество такого подхода в том, что метроном здесь не существует сам по себе. Если вы занимаетесь ритмом, можно сразу связать работу с ритмическим тренажёром и генератором ритма. Если учите риффы, бои или упражнения, метроном становится частью общей рабочей системы, а не отдельной утилитой без контекста.\r
\r
Это снижает трение между идеей и практикой. Не нужно переключаться между разными сервисами, чтобы просто позаниматься 15–20 минут осмысленно.\r
\r
## FAQ\r
\r
### Чем этот метроном отличается от обычного онлайн-метронома?\r
\r
Обычный онлайн-метроном чаще всего ограничивается кликом и темпом. Здесь возможностей больше: настраиваемый звук, субдоли, прогрессирующий темп, таймер, готовые паттерны и сохранение собственных ритмов.\r
\r
### Подойдёт ли он только гитаристам?\r
\r
Нет. Он создавался из гитарной практики, но полезен любому музыканту, которому нужен гибкий ритмический инструмент.\r
\r
### Зачем нужен прогрессирующий темп?\r
\r
Он помогает повышать скорость постепенно и без резких скачков. Это особенно полезно для техники и повторяющихся упражнений.\r
\r
### Когда лучше использовать паттерны, а не обычный клик?\r
\r
Когда важен не только пульс, но и ощущение грува, акцентов и характера рисунка. Это часто полезно для ритм-гитары, боя и жанровой практики.\r
\r
### Есть ли смысл в таймере, если можно просто смотреть на часы?\r
\r
Да. Таймер снимает лишнее бытовое усилие и делает занятие более собранным. Вы заранее задаёте рамку и не отвлекаетесь на время.\r
\r
## Что открыть дальше\r
\r
Если хотите глубже поработать над внутренней пульсацией, следующим шагом стоит попробовать ритмический тренажёр. А если нужны новые идеи для риффов, акцентов и ритмических фраз, логично перейти к генератору ритма.\r
\r
## Вывод\r
\r
Этот метроном полезен не потому, что в нём много настроек. Его польза в другом: он помогает заниматься ровно, собранно и музыкально. Для одного музыканта это будет способ стабилизировать темп, для другого — инструмент для постепенного разгона техники, для третьего — компактная драм-машина для ежедневной практики.\r
\r
Если вам нужен не просто сухой клик, а более гибкая ритмическая среда для занятий, откройте метроном Шесть струн и соберите под себя тот режим, в котором действительно удобно работать.\r
\r
## Связанные инструменты\r
\r
- [Метроном](/ru/rhythm-metronome/)\r
- [Ритмический тренажёр](/ru/rhythm-trainer/)\r
- [Генератор ритма](/ru/rhythm-generator/)\r
- [Паттерны боя](/ru/strumming-patterns-library/)`,kw=`---
post_id: rhythm-trainer-for-guitarists
slug: ritmicheskiy-trenazher-dlya-gitaristov
title: "Ритмический тренажёр для гитаристов: как развивать внутренний пульс через ритмический алфавит"
description: "Что такое ритмический тренажёр, как он связан с ритмическим алфавитом Бенни Греба и почему помогает гитаристу развивать внутренний пульс, тайминг и чувство ритма."
keywords: "ритмический тренажёр, чувство ритма, чувство ритма для гитариста, как развить ритм на гитаре, внутренний пульс, rhythmic alphabet, Benny Greb, упражнения на ритм, деление пульса, subdivision, тайминг гитариста, ритмический алфавит, ритмические упражнения для гитаристов, шесть струн, ритм на гитаре, ритмические паттерны для гитаристов, six strings app, rhythm trainer"
tags: ритм, чувство ритма, ритмический тренажёр, гитара, тайминг, Benny Greb, ритмический алфавит, упражнения на ритм
date: 2026-04-08
intro: "Ритмический тренажёр помогает гитаристу развивать не просто внешний тайминг под клик, а внутреннее ощущение пульса внутри доли. В статье разберём, как это связано с ритмическим алфавитом Бенни Греба, почему тема откликается гитаристам и как начать базовую практику без перегруза."
cta_path: /rhythm-trainer
cta_label: "Ритмический тренажёр"
cover_image: cover.png
draft: false
---
## Введение

Многим гитаристам знакома ситуация, когда партия выучена, аккорды понятны, рука двигается уверенно, а ритм всё равно не ощущается устойчивым. Формально всё может быть правильно, но внутри игры не хватает пульса. Паузы расползаются, синкопы плавают, а рисунок держится скорее на удаче, чем на ясном внутреннем счёте.

Теоретически эту задачу можно решать и без специальных инструментов. На практике всё быстро превращается в расплывчатые советы вроде «играй ровнее» или «больше занимайся под метроном». Проблема в том, что одного такого совета мало. Гитаристу нужна понятная единица практики: что именно тренировать внутри доли, как это услышать и как перенести в правую руку.

Именно для этого и нужен ритмический тренажёр. Он помогает работать не только с темпом, но и с внутренним наполнением доли: делением пульса, паузами, акцентами и ритмическими ячейками. В этой статье разберём, что это за инструмент, как он связан с ритмическим алфавитом Бенни Греба, почему эта тема давно прижилась у гитаристов и как начать самую базовую практику без гитары и с гитарой.

## Что такое ритмический тренажёр

Ритмический тренажёр — это онлайн-инструмент для тренировки ритмических ячеек внутри доли. Его задача не просто отсчитывать темп, как обычный метроном, а помогать музыканту осознанно проживать ритм изнутри.

На практике это означает простую вещь: вы работаете не с абстрактным пожеланием «играй ровнее», а с конкретным рисунком. Его можно проговорить, прохлопать, простучать, сыграть на приглушённых струнах, а потом перенести в реальную музыкальную фактуру. За счёт этого ритм перестаёт быть туманной проблемой и становится предметом системной практики.

Для гитариста это особенно важно, потому что большая часть ритмических ошибок происходит не на границах такта, а между ними. Клик может честно отмечать четверти, но он не объясняет, почему одна и та же рука уверенно играет восьмые и тут же начинает спешить на шестнадцатых, дробить паузы или терять акценты.

## Почему одного метронома часто недостаточно

Метроном полезен, но у него есть естественное ограничение. Он задаёт внешний каркас времени, а не учит внутренней организации доли. Если музыкант ещё не слышит деление пульса, клик остаётся внешней опорой, но не становится частью его собственного ощущения времени.

Отсюда и появляется типичная проблема. Человек попадает в сильные доли и всё равно звучит неубедительно. Формально он не мимо, но музыка не собирается в устойчивое движение. Особенно это заметно в ритм-гитаре, где грув зависит не только от нот, но и от длины звука, пауз, акцентов и того, как проживается каждая доля.

Ритмический тренажёр полезен именно в этой точке. Он возвращает внимание к содержимому доли и заставляет понимать, что происходит между кликами, а не просто ждать следующий удар метронома.

## Школа ритма Бенни Греба и ритмический алфавит

Когда музыканты говорят о ритмическом алфавите, чаще всего имеют в виду подход, связанный с Бенни Гребом и его системой *The Language of Drumming*. Ценность этой идеи в том, что ритм перестаёт выглядеть как бесконечный набор разрозненных упражнений. Вместо этого он превращается в ограниченный, но очень полезный словарь.

Смысл ритмического алфавита в том, что разные варианты заполнения доли можно представить как отдельные «буквы». Когда такие единицы есть перед глазами и в ушах, с ними становится легче работать. Их можно проговаривать, хлопать, комбинировать, переносить на разные инструменты и соединять в более длинные фразы. Ритм начинает восприниматься как язык, а не как случайный набор паттернов.

Именно поэтому идея так хорошо прижилась. Она даёт музыканту не только упражнения, но и способ думать. А это всегда полезнее, чем случайный список рисунков, которые приходится просто заучивать.

## Почему эта идея откликнулась именно гитаристам

Хотя система Бенни Греба пришла из барабанной практики, гитаристам она подошла очень естественно. Причина проста: ритм-гитара строится не только на выборе нот и аккордов, но и на том, как именно проживается доля. Одни и те же аккорды могут звучать совершенно по-разному только за счёт ритма, длины звука и расположения акцентов.

Поэтому многие гитаристы увидели в ритмическом алфавите не барабанную экзотику, а рабочий способ собрать правую руку и внутренний счёт. На YouTube эту тему регулярно поднимают гитарные блогеры: они советуют проговаривать рисунки, прохлопывать их и не спешить сразу переносить всё в сложную фактуру. Те же рекомендации постоянно всплывают и в гитарных чатах, когда разговор заходит о тайминге и чувстве пульса.

На словах это выглядит слишком просто. Но именно эта простота и работает. Сначала услышать. Потом проговорить. Потом прохлопать. Потом сыграть. Для многих музыкантов такой порядок даёт больше пользы, чем попытка сразу лечить ритм одной только игрой под клик.

## Генератор ритма у Попова и близость подходов

Для русскоязычного гитариста тема ритмического алфавита часто откликается ещё и потому, что она созвучна идее генератора ритма, знакомой по книге Сергея Попова «Музыкальное и аппликатурное мышление гитариста».

Здесь важно не путать прямое совпадение систем с методической близостью. Ритмический алфавит Бенни Греба и генератор ритма у Попова — это не одно и то же в буквальном смысле. Но логика у них действительно похожа. В обоих случаях ритм выводится из зоны расплывчатого ощущения в зону осознанной конструкции. Музыкант получает не абстрактный совет «будь ритмичнее», а ограниченный набор элементов, из которых можно собирать рабочий материал.

Для гитариста это особенно важно, потому что такой подход хорошо сочетается с привычным аппликатурным мышлением. Ты видишь структуру, а не хаос. Работаешь с комбинациями, а не с туманными ощущениями. В этом смысле ритмический тренажёр продолжает понятную музыкальную логику и делает её удобной для регулярной практики.

## Кому подойдёт такой инструмент

Прежде всего — начинающим гитаристам, которым пока трудно чувствовать внутреннюю пульсацию внутри доли. Но не только им.

Продолжающим музыкантам ритмический тренажёр тоже полезен. Часто руки уже умеют многое, а тайминг всё равно остаётся неровным в деталях. В такой ситуации инструмент помогает не учиться с нуля, а очищать и собирать игру.

Преподавателям он даёт понятную опору для объяснения. Вместо общей фразы «у тебя плавает ритм» можно дать конкретную ячейку, конкретный порядок действий и понятный маршрут домашней работы.

## Какие проблемы он решает

Главная проблема, которую решает ритмический тренажёр, — отсутствие ясного внутреннего пульса. Но на практике это проявляется в нескольких типичных трудностях.

Гитаристу может быть сложно держать паузы. Может не хватать устойчивости на шестнадцатых. Может разваливаться бой, хотя смена аккордов давно выучена. Может появляться ощущение, что под метроном всё вроде бы ровно, а без него ритм сразу плывёт.

Во всех этих случаях проблема часто находится не в скорости и не в технике как таковой, а в том, что доля не проживается изнутри. Ритмический тренажёр помогает работать именно с этим слоем.

## Как это работает на практике

Смысл тренажёра не в количестве комбинаций, а в последовательности действий. Сначала ритм должен стать понятным для слуха и тела. Потом — для рук. И только после этого он становится музыкальным материалом.

Базовый порядок очень простой:

1. увидеть ритмическую ячейку;
2. проговорить её вслух;
3. прохлопать или простучать без инструмента;
4. перенести на простое движение рукой;
5. сыграть на гитаре в самой простой фактуре.

Если перепрыгнуть первые шаги, возникает знакомая иллюзия. Кажется, что рисунок уже понятен, пока не выясняется, что рука держится только на зрительной подсказке и разваливается при первом же усложнении. Тренажёр убирает эту проблему и помогает закрепить основу.

## Почему это удобно именно в Шесть струн

В контексте Шесть струн ценность ритмического тренажёра не только в самой идее ритмических ячеек, но и в том, что он встроен в более широкую систему практики.

Если хочется просто укрепить внутренний пульс, можно начать с базовых ячеек и не перегружать себя лишними задачами. Если позже понадобится больше вариативности, логично перейти к Генератору ритма. А если цель — закрепить устойчивость в конкретном темпе или в прогрессирующем режиме, рядом уже есть Метроном.

Такой маршрут снижает трение между теорией и реальной практикой. Не нужно искать отдельные разрозненные инструменты. Всё собирается в понятную связку вокруг одной музыкальной задачи — развивать ритм не в отрыве от игры, а как часть ежедневной работы музыканта.

## Как начать использовать

Начинать лучше с самого простого. Не нужно пытаться сразу пройти много рисунков или довести темп до максимума.

Достаточно выбрать одну ячейку, взять умеренный темп и несколько минут посвятить только ей. Сначала без гитары. Потом с простым движением правой руки. И только после этого — с приглушёнными струнами или на одной струне.

Такой старт кажется скромным, но именно он даёт настоящую опору. Когда одна ритмическая ячейка начинает ощущаться устойчиво, дальше становится проще добавлять скорость, акценты и музыкальный контекст.

## Базовое использование без гитары

Начинать без инструмента — не упрощение, а важная часть практики. Пока в руках нет медиатора, аккордов и лишних задач, внимание полностью направлено на пульсацию.

Самый простой старт выглядит так: включить умеренный темп, выбрать одну ритмическую ячейку и несколько минут только проговаривать и прохлопывать её. Не ускоряться. Не украшать. Не перескакивать к следующему рисунку слишком быстро. Задача не в том, чтобы пройти больше букв, а в том, чтобы внутри одной буквы появилась устойчивость.

Особенно важно следить не только за ударами, но и за паузами. Хороший ритм ощущается не там, где вы что-то сыграли, а там, где вы не потеряли время в тишине. Если пауза прожита так же ясно, как звучащая нота, упражнение работает.

## Базовое использование с гитарой

Следующий шаг — перенести тот же рисунок на максимально простую гитарную механику. Лучший стартовый вариант — приглушённые струны или одна открытая струна. Так внимание остаётся на ритме, а не уходит в смену аккордов или работу левой руки.

Сначала достаточно одного типа движения. Например, ровного штриха по приглушённым струнам с сохранением выбранной ритмической ячейки. Когда рисунок начинает звучать уверенно, можно добавлять акценты, динамику и переносить его на простой аккордовый материал.

Важно не смешивать сразу несколько учебных задач. Если одновременно бороться с новым боем, новой аппликатурой, сменой аккордов и непривычным ритмом, мозг почти неизбежно начнёт маскировать слабое место. Поэтому ритмический тренажёр лучше использовать как отдельный слой практики.

## Вывод

Ритм — это не только способность попадать в доли под клик. Для гитариста это ещё и умение ясно чувствовать, что происходит внутри доли: где начинается звук, где заканчивается, как проживается пауза и за счёт чего рисунок держит движение. Именно на этом уровне и возникает большая часть проблем, которые потом слышатся как «неровная игра», «плавающий бой» или «неуверенный грув».

Ритмический тренажёр полезен тем, что возвращает работу с ритмом в практическую плоскость. Вместо расплывчатых советов он даёт конкретный материал: ритмические ячейки, которые можно проговорить, прохлопать и перенести на гитару. Такой подход хорошо сочетается и с логикой ритмического алфавита Бенни Греба, и с более привычным для гитаристов способом мышления через паттерны и комбинации.

Главная ценность инструмента не в том, что он показывает много вариантов, а в том, что помогает заниматься ритмом регулярно, просто и осмысленно. Если вы хотите укрепить внутренний пульс, начать лучше с самого базового уровня: выбрать одну ячейку, прожить её без гитары, а потом перенести в правую руку. А когда эта опора появится, будет намного проще двигаться дальше — к более сложным рисункам, [Генератору ритма](/ru/rhythm-generator) и практике с [Метрономом](/ru/rhythm-metronome).

## FAQ

### Что такое ритмический тренажёр простыми словами?

Ритмический тренажёр — это инструмент для тренировки внутренней пульсации и ритмических ячеек внутри доли. Он помогает не просто играть под клик, а лучше чувствовать, что происходит между ударами метронома.

### Чем ритмический тренажёр отличается от обычного метронома?

Метроном в первую очередь задаёт внешний каркас времени. Ритмический тренажёр помогает работать с внутренним наполнением доли: паузами, субдолями, акцентами и ритмическими рисунками.

### Подходит ли ритмический тренажёр новичкам?

Да. Он особенно полезен новичкам, потому что даёт понятную и повторяемую практику без перегруза сложной теорией.

### Нужно ли заниматься сначала без гитары?

Да. Когда вы сначала проговариваете и прохлопываете рисунок, потом намного проще перенести его на инструмент без лишнего напряжения.

### Как ритмический алфавит связан с гитарой?

Хотя ритмический алфавит пришёл из барабанной практики, гитаристам он тоже подходит, потому что помогает системно развивать правую руку, внутренний счёт и чувство пульса.

### Можно ли использовать тренажёр вместе с другими инструментами сайта?

Да. После базовой работы с ритмическими ячейками логично подключать [Генератор ритма](/ru/rhythm-generator) для новых рисунков и [Метроном](/ru/rhythm-metronome) для закрепления устойчивости в темпе.

## Связанные инструменты

- [Ритмический тренажёр](/ru/rhythm-trainer)
- [Генератор ритма](/ru/rhythm-generator)
- [Метроном](/ru/rhythm-metronome)
`,Sw=`---\r
post_id: caged-system-guide\r
slug: sistema-caged-na-gitare\r
title: "Что такое CAGED и как эта система помогает видеть аккорды по всему грифу"\r
description: "Что такое CAGED на гитаре, зачем нужна эта система и как инструмент «Шесть струн» помогает видеть аккордовые формы по всему грифу. История появления и базовые сценарии использования."\r
keywords: "caged на гитаре, система caged, что такое caged, caged для гитариста, аккорды по всему грифу, аккордовые формы гитара, как ориентироваться на грифе, шесть струн, six strings app, гитарные инструменты, теория музыки для гитаристов, обучение игре на гитаре"\r
intro: "CAGED помогает увидеть, как знакомые аккордовые формы связаны между собой по всему грифу. В этой статье — простое объяснение системы, история появления инструмента в «Шесть струн» и базовые сценарии, с которых удобно начать."\r
tags: CAGED, гитара, аккорды, гитарный гриф, теория музыки, обучение гитаре, аккордовые формы\r
date: 2026-04-12\r
cta_path: /caged-explorer/\r
cta_label: "CAGED"\r
cover_image: cover.png\r
draft: false\r
---\r
## Введение\r
\r
Многим гитаристам знакомо ощущение, когда открытые аккорды уже понятны, баррэ тоже более-менее освоены, а весь остальной гриф всё равно выглядит как набор несвязанных кусков. В одной позиции всё ясно, а стоит сместиться выше — и опора пропадает.\r
\r
Именно здесь система CAGED оказывается полезной. Она помогает увидеть, как знакомые аккордовые формы связаны между собой, где на грифе повторяется один и тот же аккорд и как из отдельных позиций складывается цельная картина.\r
\r
Инструмент CAGED в «Шесть струн» появился как способ показать эту логику наглядно и без лишней путаницы. В этой статье разберём, что такое CAGED простыми словами, как появился этот инструмент и в каких базовых сценариях он действительно полезен. Более подробный разбор практики, трёхструнных групп и связи с арпеджио будет отдельно.\r
\r
## Что такое CAGED простыми словами\r
\r
CAGED — это система, которая связывает гитарный гриф с пятью базовыми аккордовыми формами: C, A, G, E и D. Смысл не в том, чтобы выучить пять букв, а в том, чтобы увидеть повторяющуюся структуру.\r
\r
Один и тот же аккорд можно сыграть в разных частях грифа через формы, которые логически связаны друг с другом. Когда начинаешь замечать эти связи, гриф перестаёт выглядеть как набор случайных аппликатур.\r
\r
Для гитариста это важно по нескольким причинам:\r
\r
- легче ориентироваться за пределами первых ладов;\r
- проще находить один и тот же аккорд в разных регистрах;\r
- удобнее связывать аккорды, арпеджио и мелодические фразы;\r
- меньше путаницы при движении по грифу.\r
\r
## Как появился инструмент CAGED в «Шесть струн»\r
\r
У этого инструмента вполне живая история.\r
\r
Изначально страница CAGED делалась по просьбе одного уважаемого преподавателя и блогера. Нужен был понятный инструмент, который показывает классическую логику системы без перегруза: отдельные позиции, знакомые формы и привычный способ объяснения материала.\r
\r
Так появился первый вариант. Его задача была простой: дать чистое и понятное отображение отдельных CAGED-позиций, чтобы инструмент можно было использовать и в самостоятельных занятиях, и в преподавании.\r
\r
Но со временем я понял, что для моей собственной практики этого уже мало. Когда начинаешь использовать CAGED не только как учебную схему, но и как рабочую карту грифа, хочется видеть не одну форму, а всю систему целиком. Хочется быстрее понимать, как позиции переходят одна в другую, где они перекрываются и какие фрагменты формы реально удобно использовать в игре.\r
\r
Поэтому я решил доработать инструмент под свои задачи, но без поломки исходного сценария. То есть сохранить старое поведение для тех, кому нужен классический режим, и добавить более практичные варианты работы для себя и для пользователей, которым нужен более широкий взгляд на гриф.\r
\r
В результате появились расширения, которые делают инструмент полезнее в реальных занятиях:\r
\r
- отображение не только гаммы, но и арпеджио;\r
- отображение всех пяти позиций по всему грифу;\r
- подсветка отдельных форм внутри общей картины;\r
- просмотр через группы по три струны для более прикладной работы.\r
\r
Для меня это важный принцип развития «Шесть струн»: не ломать то, что уже помогает людям, а аккуратно расширять инструмент так, чтобы он оставался полезным и в обучении, и в личной практике.\r
\r
## Кому подойдёт этот инструмент\r
\r
Прежде всего CAGED полезен гитаристам, которые уже знают базовые аккорды и хотят лучше понимать гриф за пределами первых позиций.\r
\r
Но на этом круг пользователей не заканчивается.\r
\r
### Начинающим гитаристам\r
\r
Если вы уже вышли за пределы самых первых аккордов и хотите понять, как один и тот же аккорд существует в разных местах грифа, CAGED даёт для этого понятную опору.\r
\r
### Продолжающим музыкантам\r
\r
Если вы чувствуете, что постоянно играете одни и те же формы и не видите связи между позициями, CAGED помогает собрать гриф в более цельную систему.\r
\r
### Преподавателям\r
\r
Систему удобно показывать по шагам: сначала отдельные формы, потом общую картину. Поэтому сохранение классического режима здесь особенно важно.\r
\r
### Тем, кто пишет риффы, партии и аранжировки\r
\r
Когда нужно быстро найти удобный регистр аккорда или компактный фрагмент формы, такой инструмент экономит время и уменьшает хаос.\r
\r
## Какие задачи он решает\r
\r
Главная проблема, которую закрывает CAGED, — фрагментарное восприятие грифа.\r
\r
На практике это обычно выглядит так:\r
\r
- аккорды запоминаются как отдельные аппликатуры, а не как часть системы;\r
- при смещении вверх по грифу быстро теряется ориентация;\r
- сложно увидеть, где заканчивается одна форма и начинается следующая;\r
- трудно связать аккордовую игру с арпеджио и мелодией;\r
- неудобно искать компактные и музыкально полезные куски аккорда.\r
\r
Инструмент не делает работу за вас, но снимает лишнюю путаницу. Он помогает увидеть не просто форму, а её место внутри общей карты грифа.\r
\r
## Как это работает на практике\r
\r
В самом простом сценарии инструмент можно использовать как наглядный справочник по пяти формам. Вы выбираете аккорд и смотрите, как он выглядит в разных CAGED-позициях.\r
\r
Этого уже достаточно, чтобы начать замечать повторяемость и лучше понимать устройство грифа.\r
\r
Но по-настоящему полезным инструмент становится тогда, когда вы видите всю цепочку форм сразу. В этот момент CAGED перестаёт быть набором картинок и начинает работать как карта: видно, как формы соединяются, где они перекрываются и как можно двигаться по грифу без потери опоры.\r
\r
Подсветка отдельных позиций внутри полного грифа помогает удерживать сразу две перспективы: локальную и общую. Вы можете сосредоточиться на одной форме, но не терять её связь с остальными.\r
\r
Отдельно полезен режим с трёхструнными группами. В реальной игре мы часто используем не полный аккорд, а его компактный фрагмент — для ритм-партии, верхних голосов, арпеджио или небольших мелодических ходов. Такой режим делает систему ближе к живой практике.\r
\r
## Базовые сценарии использования\r
\r
### 1. Чтобы увидеть гриф как единую систему\r
\r
Это главный сценарий. Вы берёте один аккорд и смотрите, как он существует во всех пяти формах. Постепенно становится ясно, что гриф — это не набор отдельных коробок, а связная структура.\r
\r
### 2. Чтобы учить формы без механической зубрёжки\r
\r
Когда позиции показаны в контексте соседних форм, их легче запомнить. Вы запоминаете не изолированную аппликатуру, а её место в системе.\r
\r
### 3. Чтобы находить удобные фрагменты аккорда\r
\r
В живой игре часто нужны не полные баррэ, а компактные куски формы на соседних струнах. Это особенно полезно для ритм-гитары, попа, рока, инди и фанка.\r
\r
### 4. Чтобы перейти к арпеджио и импровизации\r
\r
Хотя сам инструмент посвящён прежде всего аккордовым формам, он естественно подводит к следующему шагу: видеть опорные звуки аккорда и строить на их основе арпеджио, линии и мелодические фразы.\r
\r
### 5. Чтобы объяснять систему ученикам\r
\r
Можно начать с одной понятной формы, а затем постепенно расширить картину до всего грифа. Такой путь обычно работает лучше, чем попытка показать всё сразу.\r
\r
## Почему это удобно именно в «Шесть струн»\r
\r
Ценность инструмента не только в том, что он показывает CAGED-схемы. Важно, что он развивается как рабочий инструмент для практики, а не как статичная иллюстрация.\r
\r
Внутри «Шесть струн» это особенно удобно по нескольким причинам:\r
\r
- сохранён классический сценарий отображения отдельных позиций;\r
- есть более широкий режим для просмотра всего грифа;\r
- новые режимы помогают использовать CAGED не только для изучения, но и для реальной игры;\r
- инструмент логично связан с другими разделами сайта.\r
\r
Например, если после CAGED хочется глубже посмотреть аккордовый материал, логично перейти в раздел «Аккорды, арпеджио, гаммы». Если нужно увидеть ноты или интервалы по всему грифу, удобнее продолжить через «Исследователь грифа».\r
\r
Так теория не остаётся отдельным слоем. Её можно сразу связать с визуализацией, практикой и следующими шагами.\r
\r
## Как начать использовать CAGED\r
\r
Самый простой маршрут такой:\r
\r
1. Выберите знакомый мажорный или минорный аккорд.\r
2. Посмотрите его в отдельных CAGED-позициях.\r
3. Переключитесь на полный вид грифа и посмотрите, как позиции связаны.\r
4. Подсветите отдельные формы внутри общей схемы.\r
5. Попробуйте трёхструнные группы и найдите удобные фрагменты для ритма или коротких мелодических идей.\r
\r
Даже 5–10 минут такой практики обычно дают больше понимания, чем хаотичное заучивание схем без общей логики.\r
\r
## Что важно помнить о CAGED\r
\r
CAGED — не единственный способ понимать гриф и не универсальный ответ на все музыкальные вопросы. Но это очень удобная опорная система для гитариста, который хочет перейти от отдельных аппликатур к более цельному восприятию инструмента.\r
\r
Сильная сторона CAGED — наглядность. Система помогает увидеть повторяемость, связи и структуру. А уже на этой основе проще двигаться дальше — к арпеджио, гаммам, гармонии и импровизации.\r
\r
## Вывод\r
\r
Инструмент CAGED в «Шесть струн» появился не как функция ради галочки, а из живой музыкальной задачи.\r
\r
Сначала он был сделан по просьбе уважаемого преподавателя и блогера — как понятный способ показать классическую систему через отдельные позиции. Потом я расширил его под собственную практику: добавил более широкий взгляд на весь гриф, подсветку отдельных позиций и режим с трёхструнными группами. При этом старый, привычный сценарий работы остался на месте.\r
\r
Именно поэтому этот инструмент полезен и как учебный материал, и как практическая карта грифа. Если вы хотите лучше видеть связь между аккордовыми формами и начать воспринимать гитару как единую систему, CAGED — один из самых понятных способов сделать этот шаг.\r
\r
## Связанные инструменты\r
\r
* [Система CAGED](/ru/caged-explorer/)\r
* [Аккорды, арпеджио, гаммы](/ru/chords/)\r
* [Исследователь грифа](/ru/scales-fretboard-explorer/)\r
* [Определитель аккордов](/ru/chord-identifier/)\r
`,Iw=`---\r
post_id: why-i-created-this-site\r
slug: zachem-ja-sdelal-etot-sait\r
title: "Зачем я создал Шесть струн: от личной практики к открытому проекту для музыкантов"\r
description: "История создания Six Strings App (Шесть струн): как личный проект для изучения ритма, грифа, аккордов и гармонии вырос в открытую платформу для музыкантов."\r
keywords: "six strings app, Шесть струн, сайт для гитаристов, сайт для музыкантов, музыкальные инструменты онлайн, инструменты для гитары, теория музыки для гитары, ритм для гитаристов, аккорды для гитары, гаммы для гитары, гармония для музыкантов, развитие слуха, тренировка ритма, гитарный гриф, приложение для музыкантов, обучение музыке онлайн"\r
tags: Six Strings App\r
date: 2026-03-31\r
intro: "Шесть струн появился из личной потребности глубже понять музыку через практику. Сначала я создавал эти инструменты для себя, чтобы лучше разбираться в ритме, грифе, аккордах, гаммах, гармонии и слухе, а потом решил открыть их для всех музыкантов."\r
cta_path: /\r
cta_label: Шесть струн\r
cover_image: cover.png\r
draft: false\r
---\r
## Зачем я создал Шесть струн\r
\r
Музыкальные сайты и приложения часто делятся на два типа. Одни дают сухую теорию, которую сложно сразу применить на практике. Другие предлагают полезные инструменты, но не всегда помогают понять, как встроить их в реальные занятия, импровизацию, слуховую работу или сочинение музыки.\r
\r
Шесть струн появился у меня из очень личной потребности. Изначально я делал этот проект не как бизнес-идею и не как попытку собрать "всё для музыкантов" в одном месте. Я создавал его прежде всего для себя — чтобы лучше разобраться в том, что изучаю, укрепить собственные знания и сделать практику более осмысленной.\r
\r
Когда ты сам учишься музыке, довольно быстро сталкиваешься с одной и той же проблемой: знания существуют как будто отдельно друг от друга. Где-то ты читаешь про интервалы. Где-то смотришь аппликатуры аккордов. Где-то пытаешься понять, какие гаммы подходят к конкретному аккорду. Отдельно работаешь над ритмом. Отдельно — над слухом. Отдельно — над гармонией. Но в реальной музыке всё это не живёт по частям. Оно работает вместе.\r
\r
Именно из этого ощущения и вырос Шесть струн — как попытка собрать в одном месте инструменты, которые помогают не просто читать о музыке, а видеть её, слышать, проверять и применять на практике.\r
\r
## С чего всё началось\r
\r
Мне всегда было важно не просто запоминать информацию, а действительно понимать её. Не знать формулу "на бумаге", а ощущать, как она работает на слух, на грифе, в ритме, в аккордовой последовательности, в реальной песне или упражнении.\r
\r
Но в процессе занятий я постоянно упирался в знакомые трудности.\r
\r
Иногда хотелось быстро увидеть все варианты нужного аккорда на грифе, а не искать их по разным схемам. Иногда было непонятно, какую гамму логично сыграть поверх конкретного аккорда и почему именно её. Иногда теория о тональностях и функциях аккордов казалась понятной в абстракции, но распадалась в тот момент, когда нужно было применить её в своей прогрессии. Иногда обычного метронома было недостаточно, потому что проблема была не в "умении попасть в клик", а в более глубоком чувстве внутренней пульсации.\r
\r
Во многом Шесть струн стал способом разобраться с этими задачами через создание собственных инструментов. Когда ты что-то проектируешь и собираешь сам, приходится думать гораздо глубже. Нельзя ограничиться поверхностным пониманием. Нужно действительно понять, что именно ты хочешь показать музыканту, какую проблему он решает, где обычно путается и что поможет сделать следующий шаг.\r
\r
По сути, сайт стал для меня формой обучения через разработку.\r
\r
## Почему я решил открыть проект для всех\r
\r
Сначала это был очень личный рабочий набор. Что-то, что помогает мне самому учиться, проверять идеи, быстрее ориентироваться в теории и не терять связь между знанием и практикой.\r
\r
Но со временем стало очевидно, что эти же сложности возникают у очень многих музыкантов.\r
\r
Новички часто теряются в терминах и не понимают, с чего начать. Продолжающие музыканты застревают в знакомых паттернах и хотят глубже увидеть гриф, ритм или гармонию. Преподавателям нужны наглядные инструменты, чтобы объяснять материал ученикам. Тем, кто пишет риффы, песни и аранжировки, важно быстрее переходить от идеи к рабочему результату, а не тонуть в разрозненных схемах и таблицах.\r
\r
В какой-то момент мне стало ясно, что нет смысла держать всё это только для себя. Если инструмент помог мне самому лучше понять ритм, аккорды, гаммы, функции, слуховые связи или навигацию по грифу, значит, он может быть полезен и другим.\r
\r
Так Шесть струн постепенно перестал быть просто личной системой и начал превращаться в открытую музыкальную платформу.\r
\r
## Что для меня важно в этом проекте\r
\r
Для меня Шесть струн — это не просто набор страниц с функциями. Мне важна сама идея проекта.\r
\r
Я не хотел делать очередной справочник, в котором можно что-то посмотреть и закрыть вкладку. Мне хотелось собрать пространство, где теория связана с действием.\r
\r
- Если речь идёт о ритме, значит, его нужно не только описать, но и прожить в упражнении.\r
- Если речь идёт о гамме, значит, её нужно не только назвать, но и увидеть на грифе, соотнести с аккордом и попробовать в импровизации.\r
- Если речь идёт о гармонии, значит, важно не только перечислить аккорды тональности, но и услышать их функцию, почувствовать тяготения и попробовать их в собственной последовательности.\r
- Если речь идёт о слухе, значит, он должен тренироваться не в вакууме, а в музыкальном контексте.\r
\r
Именно поэтому в проекте появились самые разные инструменты: для ритма, грифа, аккордов, гамм, гармонии, слуха и композиционного мышления. Не потому, что хотелось "охватить всё", а потому, что в реальной музыкальной практике все эти вещи связаны между собой.\r
\r
## Каким я вижу Шесть струн\r
\r
Мне хочется, чтобы Шесть струн был полезен музыканту в нескольких ролях сразу.\r
\r
- Как рабочее пространство для ежедневных занятий.\r
- Как наглядная среда для понимания музыкальной теории.\r
- Как место, где можно быстрее проверить идею и не застревать в рутине.\r
- Как инструмент для преподавания.\r
- Как опора для тех, кто пишет музыку, риффы, мелодии и прогрессии.\r
\r
Мне также важно, что сайт не ограничивается только одной привычной моделью "шестиструнной гитары в стандартном строе". В музыке у всех разные задачи: кто-то играет на басу, кто-то на укулеле, кто-то использует альтернативные строи, кто-то мыслит нотами, а кто-то — интервалами. Поэтому проект с самого начала хотелось делать более гибким и практичным, а не привязанным к одному-единственному сценарию.\r
\r
## Почему здесь так много внимания практике\r
\r
Я сам не люблю изучение "ради изучения". Теория становится ценной только тогда, когда помогает играть, слышать, сочинять, разбирать и лучше понимать музыку.\r
\r
Поэтому почти всё в Шесть струн строится вокруг одного вопроса: что музыкант сможет сделать с этим знанием прямо сейчас?\r
\r
- Не просто посмотреть аппликатуру, а найти подходящее положение для своей задачи.\r
- Не просто увидеть гамму, а понять, как она связана с аккордом.\r
- Не просто включить клик, а глубже почувствовать пульсацию.\r
- Не просто узнать название аккорда, а встроить его в гармонический контекст.\r
- Не просто прочитать про функцию, а услышать её в каденции.\r
\r
Мне кажется, именно этого часто не хватает многим музыкальным ресурсам: перехода от информации к действию.\r
\r
## Для кого создаётся этот сайт\r
\r
Хотя проект вырос из моих собственных задач, я вижу его полезным для очень разных музыкантов.\r
\r
- Для начинающих — как способ меньше путаться и быстрее находить опору.\r
- Для продолжающих — как способ углубить понимание ритма, грифа, аккордов, гамм и гармонии.\r
- Для преподавателей — как набор наглядных инструментов для объяснения и домашних заданий.\r
- Для авторов песен, риффов и аранжировок — как среду, где можно быстрее переходить от идеи к реализации.\r
- Для мультиинструменталистов — как платформу, которая не сводит всё только к одной модели инструмента.\r
\r
## Во что проект будет расти дальше\r
\r
Я не воспринимаю Шесть струн как "готовый законченный продукт". Для меня это живой проект, который развивается вместе с моими собственными вопросами к музыке и вместе с задачами пользователей.\r
\r
Мне хочется, чтобы со временем он рос не только в ширину — не только за счёт новых инструментов, — но и в глубину. Чтобы здесь было больше объяснений, больше связей между темами, больше практических маршрутов, больше учебных материалов, которые помогают не просто открыть страницу, а действительно продвинуться в понимании музыки.\r
\r
Именно поэтому рядом с самими инструментами постепенно появляется и блог, и будущая база знаний по музыкальной теории. Мне важно, чтобы человек мог не только воспользоваться функцией, но и понять, зачем она ему нужна, как встроить её в занятия и что изучать дальше.\r
\r
## Почему я продолжаю этим заниматься\r
\r
Наверное, самая честная причина проста: мне по-настоящему интересна сама музыка и процесс обучения ей. А ещё мне близка идея, что полезные вещи иногда рождаются именно из личной практической потребности.\r
\r
Сначала ты делаешь что-то, чтобы самому стало понятнее. Потом замечаешь, что это может помочь и другим. А дальше из личного проекта постепенно вырастает пространство, которым уже хочется делиться.\r
\r
Именно так для меня и развивается Шесть струн.\r
\r
## Вывод\r
\r
Шесть струн создавался как способ укрепить собственные знания и навыки: глубже понять ритм, гриф, аккорды, гаммы, гармонию и слух не в теории, а в живой музыкальной практике. Но со временем стало ясно, что эта потребность не уникальна. Очень многим музыкантам нужен не просто набор схем и определений, а понятная среда, где можно увидеть, услышать и сразу применить музыкальную идею.\r
\r
Поэтому сегодня этот проект для меня — не только личный инструмент обучения, но и попытка сделать музыку чуть понятнее, ближе и практичнее для других.\r
\r
Если вам близок такой подход, начните с того раздела, который сейчас соответствует вашей реальной задаче: ритм, гриф, аккорды, гаммы, гармония или слух. А дальше уже сама практика подскажет следующий шаг.\r
`,xw=`---\r
post_id: caged-system-guide\r
slug: caged-guitar-system\r
title: "What CAGED Is and How It Helps You See Chords Across the Fretboard"\r
description: "Learn what the CAGED system is, why it matters for guitarists, and how the Six Strings App tool helps you see chord shapes across the fretboard. Includes the origin story and practical first use cases."\r
keywords: "caged guitar system, what is caged, caged for guitarists, guitar chord shapes, chords across the fretboard, learn the fretboard guitar, caged chord forms, guitar theory, six strings app, guitar tools, guitar learning"\r
intro: "CAGED is one of the clearest ways to understand how chord shapes connect across the fretboard. This article explains the system in plain language, tells the story behind the Six Strings App tool, and shows a few practical ways to start using it."\r
tags: CAGED, guitar, chords, fretboard, music theory, guitar learning, chord shapes\r
date: 2026-04-12\r
cta_label: "CAGED"\r
cta_path: /caged-explorer/\r
cover_image: cover.png\r
draft: false\r
---\r
## Introduction\r
\r
Many guitarists know this feeling: open chords make sense, barre chords are manageable, yet the rest of the fretboard still looks like a collection of disconnected areas. One position feels clear, but as soon as you move higher up the neck, that sense of orientation disappears.\r
\r
This is exactly where the CAGED system becomes useful. It helps you see how familiar chord shapes relate to each other, where the same chord appears across the neck, and how separate positions form a larger, connected picture.\r
\r
The CAGED tool in Six Strings App was built to make that logic visible without adding unnecessary complexity. In this article, I will explain what CAGED is in plain language, how this tool came to life, and which basic use cases make it genuinely practical. A more detailed article about three-string groups, hands-on practice, and the link to arpeggios will come later.\r
\r
## What CAGED means in plain language\r
\r
CAGED is a way of looking at the guitar fretboard through five basic chord shapes: C, A, G, E, and D. The point is not to memorize five letters. The point is to recognize a repeating structure.\r
\r
The same chord can be played in different areas of the fretboard through shapes that are logically connected. Once you begin to notice those relationships, the fretboard stops feeling like a set of random fingerings.\r
\r
For a guitarist, this matters for a few reasons:\r
\r
* it becomes easier to navigate beyond the first few frets;\r
* the same chord is easier to find in different registers;\r
* chords, arpeggios, and melodic phrases connect more naturally;\r
* moving across the fretboard feels less confusing.\r
\r
## How the CAGED tool appeared in Six Strings App\r
\r
This tool has a very practical origin story.\r
\r
The first version of the CAGED page was built at the request of a respected teacher and blogger. The idea was to create a clear tool that showed the classic logic of the system without overloading the user: separate positions, familiar shapes, and a traditional way of explaining the material.\r
\r
That is how the initial version was born. Its purpose was simple: provide a clean and understandable view of individual CAGED positions so the tool could be useful both for self-study and for teaching.\r
\r
Over time, though, I realized that this was no longer enough for my own practice. Once you start using CAGED not just as a teaching concept but as a working map of the fretboard, you want to see more than one isolated shape. You want to understand how positions connect, where they overlap, and which fragments of each shape are actually practical in real playing.\r
\r
So I decided to expand the tool for my own needs without breaking the original workflow. In other words, I wanted to preserve the classic behavior for people who prefer the traditional view and add more practical modes for users who need a broader picture of the fretboard.\r
\r
That led to several additions that made the tool more useful in real practice:\r
\r
* displaying all five positions across the fretboard;\r
* highlighting individual shapes inside the full view;\r
* viewing the material through three-string groups for a more practical perspective.\r
\r
For me, this reflects an important principle behind Six Strings App: do not break what already helps people. Expand it carefully so the tool remains useful both for teaching and for personal practice.\r
\r
## Who this tool is for\r
\r
First of all, CAGED is useful for guitarists who already know basic chords and want to understand the fretboard beyond the first positions.\r
\r
But that is not the whole audience.\r
\r
### Beginner guitarists\r
\r
If you have moved beyond your very first chords and want to understand how the same chord exists in different places on the neck, CAGED gives you a clear framework.\r
\r
### Intermediate and advancing players\r
\r
If you feel stuck in the same shapes and cannot clearly see the connection between positions, CAGED helps turn the fretboard into a more coherent system.\r
\r
### Teachers\r
\r
The system is easy to explain step by step: first through individual shapes, then through the larger map. That is why preserving the classic view is especially important here.\r
\r
### Songwriters, riff writers, and arrangers\r
\r
When you need to quickly find a useful register for a chord or a compact fragment of a shape, this kind of tool saves time and reduces friction.\r
\r
## What problems it solves\r
\r
The main problem CAGED addresses is a fragmented view of the fretboard.\r
\r
In practice, that often looks like this:\r
\r
* chords are remembered as separate fingerings rather than as part of a system;\r
* orientation gets lost when moving higher up the neck;\r
* it is hard to see where one shape ends and the next begins;\r
* it is difficult to connect chord playing with arpeggios and melody;\r
* compact, musically useful chord fragments are hard to find.\r
\r
The tool does not replace practice, but it removes unnecessary confusion. It helps you see not just a shape, but its place inside a larger fretboard map.\r
\r
## How it works in practice\r
\r
In the simplest use case, the tool works as a visual guide to the five core shapes. You choose a chord and see how it appears in different CAGED positions.\r
\r
That alone is enough to start noticing repetition and understanding the fretboard more clearly.\r
\r
But the tool becomes far more valuable when you can see the whole chain of shapes at once. At that point, CAGED stops being a set of diagrams and starts functioning like a map: you can see how the shapes connect, where they overlap, and how to move across the fretboard without losing your sense of direction.\r
\r
Highlighting individual positions inside the full-neck view lets you keep both perspectives at the same time: local and global. You can focus on one shape without losing its relationship to the others.\r
\r
The three-string group mode is especially practical. In real playing, we often do not use the full chord shape. We use compact fragments for rhythm parts, upper-voice movement, arpeggios, or short melodic ideas. That makes the system feel much closer to real musical use.\r
\r
## Basic use cases\r
\r
### 1. To see the fretboard as one connected system\r
\r
This is the main use case. You take one chord and see how it exists in all five forms. Over time, it becomes clear that the fretboard is not a set of isolated boxes, but a connected structure.\r
\r
### 2. To learn shapes without mechanical memorization\r
\r
When positions are shown in relation to neighboring shapes, they become easier to remember. You are not memorizing an isolated fingering. You are remembering its place inside a system.\r
\r
### 3. To find practical chord fragments\r
\r
In real playing, you often need compact pieces of a shape rather than a full barre chord. This is especially useful for rhythm guitar, pop, rock, indie, and funk.\r
\r
### 4. To move toward arpeggios and improvisation\r
\r
Even though the tool is centered on chord shapes, it naturally leads to the next step: seeing the important chord tones and building arpeggios, lines, and melodic ideas from them.\r
\r
### 5. To teach the system more clearly\r
\r
You can begin with one understandable shape and then gradually expand to the whole fretboard. That path usually works better than trying to show everything at once.\r
\r
## Why it works especially well inside Six Strings App\r
\r
The value of this tool is not only that it displays CAGED diagrams. More importantly, it is evolving as a practical working tool rather than a static illustration.\r
\r
Inside Six Strings App, that becomes especially useful because:\r
\r
* the classic single-position workflow is still there;\r
* there is also a broader full-fretboard view;\r
* the newer modes make the system more practical for real playing;\r
* the tool connects naturally with other parts of the site.\r
\r
For example, if you want to go deeper into chord material after using CAGED, the next logical step is the “Chords, Arpeggios, Scales” section. If you want to see notes or intervals across the fretboard in a wider format, the “Fretboard Explorer” is a natural continuation.\r
\r
That makes theory easier to connect with visualization, practice, and the next musical step.\r
\r
## How to start using CAGED\r
\r
A simple route looks like this:\r
\r
1. Choose a familiar major or minor chord.\r
2. Look at it in separate CAGED positions.\r
3. Switch to the full-fretboard view and see how the positions connect.\r
4. Highlight individual shapes inside the larger layout.\r
5. Try the three-string groups and look for practical fragments for rhythm playing or short melodic ideas.\r
\r
Even five to ten minutes of practice like this usually gives more clarity than memorizing diagrams without a larger context.\r
\r
## What matters most about CAGED\r
\r
CAGED is not the only way to understand the fretboard, and it is not a universal answer to every musical problem. But it is a very strong reference system for guitarists who want to move from isolated fingerings toward a more complete view of the instrument.\r
\r
Its real strength is clarity. It helps you see repetition, connection, and structure. From there, it becomes much easier to move toward arpeggios, scales, harmony, and improvisation.\r
\r
## Conclusion\r
\r
The CAGED tool in Six Strings App did not appear as a feature for the sake of having another feature. It came out of a real musical need.\r
\r
At first, it was built at the request of a respected teacher and blogger as a clean way to present the classic system through separate positions. Later, I expanded it for my own practice: adding a broader full-fretboard view, highlighted positions, and a three-string group mode. At the same time, the original familiar workflow stayed intact.\r
\r
That is why this tool works both as teaching material and as a practical fretboard map. If you want to see the relationship between chord shapes more clearly and start understanding the guitar as one connected system, CAGED is one of the most approachable ways to begin.\r
\r
## Related tools\r
\r
* [CAGED System](/en/caged-explorer/)\r
* [Chords, Arpeggios, Scales](/en/chords/)\r
* [Fretboard Explorer](/en/scales-fretboard-explorer/)\r
* [Chord Identifier](/en/chord-identifier/)\r
`,Tw=`---\r
post_id: chords-arpeggios-scales\r
slug: chords-arpeggios-scales\r
title: "Chords, Arpeggios, and Scales for Guitar, Bass, and Ukulele: A Tool for Practice and Improvisation"\r
description: "An online tool for finding chord fingerings, arpeggios, and suitable scales for guitar, bass, and ukulele. Useful for practice, improvisation, and song analysis. Six Strings App"\r
keywords: "chords, arpeggios, scales, guitar chords, guitar chords and scales, guitar chords and arpeggios, guitar chords arpeggios scales, online guitar chords, guitar chord fingerings, guitar chord shapes, chords on the guitar fretboard, chord construction, building guitar chords, chord intervals, notes of a chord on the fretboard, guitar arpeggios, chord arpeggios on guitar, arpeggios across the guitar fretboard, how to play arpeggios on guitar, guitar scales, how to choose a scale for a chord, what scales fit a chord, scale over a chord, guitar scales for improvisation, how chords and scales are connected, chord and arpeggio, how to improvise over chords, how to solo over chords, bass chords arpeggios scales, bass chord fingerings, bass arpeggios, bass scales, ukulele chords arpeggios scales, ukulele chord fingerings, ukulele arpeggios, ukulele scalesб Six Strings App"\r
tags: chords, arpeggios, scales, guitar, improvisation, music theory\r
date: 2026-04-06\r
intro: "This tool is where Six Strings App began. I built it when I was trying to understand how chords are constructed, how to see their arpeggios across the fretboard, and which scales actually fit a given chord. In the end, it became a tool that does more than just show fingerings — it connects chords, arpeggios, and scales in one practical system for guitar, bass, and ukulele."\r
cta_path: /en/chords\r
cta_label: "Chords, Arpeggios, and Scales"\r
cover_image: cover.png\r
draft: false\r
---\r
## Introduction\r
\r
Knowing a chord name is not enough. In practice, you usually need answers to other questions: where to find a comfortable fingering, which notes are inside the chord, how to play its arpeggio, and which scale to use over it.\r
\r
You can work all of that out by hand: write out the notes, count the intervals, search for shapes on the fretboard. But that takes time. By the time you get to the instrument, your attention is already stuck in calculations.\r
\r
The **Chords, Arpeggios, and Scales** tool in Six Strings App makes this easier. It helps you do more than just find a chord. You can also see its note structure, its arpeggio, and the scales that fit it. As a result, theory turns into sound faster instead of staying a collection of diagrams.\r
\r
This tool is actually where the whole site began. I originally built it for myself because I wanted to better understand chord construction, see chord arpeggios across the fretboard, and figure out which scales truly fit a specific chord. Once I managed to bring all of that together in one place, the rest of Six Strings App gradually grew from that idea.\r
\r
In this article, we’ll look at who this tool is for, what musical problems it solves, and how to use it in real practice.\r
\r
## What this tool does\r
\r
This is an online tool for guitar, bass, and ukulele. It shows chord fingerings, arpeggios across the fretboard, and scales that match the selected chord.\r
\r
Its main strength is the way it connects things. You see more than a chord shape. You also see its interval structure, its target notes, and the melodic material you can build from it. That makes it useful for practice, song analysis, improvisation, and songwriting.\r
\r
## Who it is especially useful for\r
\r
### Beginners\r
\r
Beginners often memorize chords as pictures. Because of that, theory and the fretboard stay separate. This tool helps connect them by showing that a chord is not just a grip — it is a set of notes with a clear musical function.\r
\r
### Players who want to understand the fretboard better\r
\r
If you already know the basic shapes but keep moving through the same box patterns, this tool helps you get past those привычные схемы. You start seeing the chord more broadly: as a shape, as an arpeggio, and as the basis for melody.\r
\r
### Teachers\r
\r
This tool is convenient for teaching. It is much easier to show a student intervals, arpeggios, and the relationship between a chord and a scale when everything is in one place and visible on the fretboard.\r
\r
### Songwriters and composers\r
\r
When you write music, it helps to test ideas quickly. Here you can find a chord shape, look at its notes, choose a scale, and immediately understand what you can build from it: a riff, a melody, or a solo.\r
\r
## What musical problems it solves\r
\r
### Finding the right fingering quickly\r
\r
The same chord can be played in different ways. One shape may work for accompaniment, another for tighter voice leading, and another in a higher register. When the options are collected in one place, it is easier to choose not just the first fingering you see, but the one that fits the actual musical job.\r
\r
### Understanding chord structure\r
\r
Many players can play chords but do not always know where the root, third, fifth, seventh, or added tones are inside them. Without that, it is harder to analyze harmony and build phrases with intention.\r
\r
When you see not only the notes but also the intervals, the chord stops being just a picture for your fingers. It becomes a clear musical structure.\r
\r
### Moving from a chord to its arpeggio\r
\r
An arpeggio is the most direct bridge between a chord and a solo. It helps you hear the target notes and land on the harmony instead of guessing.\r
\r
When the chord and its arpeggio are visible side by side, the connection becomes obvious. You are not learning separate material “just in case.” You immediately understand how to use it in phrasing and improvisation.\r
\r
### Choosing a scale for a chord\r
\r
Almost everyone runs into the question: “What do I play over this chord?” The usual problem goes in one of two directions: either the player uses the same familiar scale everywhere, or they get lost in theory and cannot quickly choose a practical option.\r
\r
This tool shortens that path. It shows scales that fit the chord and gives you a starting point. From there, you can listen, compare, and decide which color works in your musical context.\r
\r
## How to use this tool in practice\r
\r
### For daily practice\r
\r
Take one chord and break it down in four steps:\r
\r
1. look at several fingerings;\r
2. find the intervals inside the shape;\r
3. play the arpeggio;\r
4. try one of the suggested scales.\r
\r
This short cycle gives you more than mechanically memorizing new diagrams. You train your hands, your ears, and your understanding of the fretboard at the same time.\r
\r
### For analyzing songs\r
\r
When you break down someone else’s music, it helps to understand not only the chord name but also its function. This tool lets you quickly inspect the chord structure, see the arpeggio, and check which scales naturally sit on top of it.\r
\r
That is especially useful in parts that seem simple on the surface but get their character from added tones, bass movement, or modal color.\r
\r
### For improvisation\r
\r
If you want to spend less time running box patterns and hear the harmony more clearly, build your lines from chords. First find the target notes in the arpeggio, then expand them with a scale.\r
\r
This approach makes your solos feel more focused. You are not just moving through a shape — you understand why each note sounds stable or tense.\r
\r
### For writing riffs and chord progressions\r
\r
This tool is useful for creative work too. You can start with a chord, look at its notes, and build a riff from them. Or you can go the other way: choose a scale and see which chords and melodic ideas naturally grow out of it.\r
\r
That speeds up the search for ideas and makes it more intentional.\r
\r
### For teaching\r
\r
When theory is shown directly on the fretboard, students understand it faster. They do not need to look at a notebook, then a diagram, then the instrument. Everything is already in one context.\r
\r
That is why this tool works well for homework, breakdowns, and explaining the core relationships between chords, arpeggios, and scales.\r
\r
## Why this is especially useful inside Six Strings App\r
\r
This tool has a practical advantage: it is not limited to just chords or just scales. Everything is gathered into one system.\r
\r
What that gives you:\r
\r
- support for **guitar, bass, and ukulele**;\r
- support for **different tunings**;\r
- display of **notes or intervals**;\r
- **arpeggios across the fretboard**;\r
- **matching scales for a chord**;\r
- a **left-handed mode**.\r
\r
Because of that, the tool works not as a one-off reference page, but as a reliable working point in regular practice.\r
\r
## How to get started\r
\r
The easiest way is not to try to cover everything at once.\r
\r
Pick one familiar chord. Look at 2–3 fingerings. Then switch on interval view and find the target tones. After that, play the arpeggio and try a few short phrases using one of the suggested scales.\r
\r
That alone is enough to feel the main idea: a chord, its arpeggio, and its scale are not three separate topics, but one connected musical system.\r
\r
## FAQ\r
\r
### What is the main point of this tool?\r
\r
It helps you do more than just find a chord. It helps you understand how the chord is built and what to do with it next: how to play its arpeggio and which scale to try over it.\r
\r
### Is it suitable for beginners?\r
\r
Yes. Especially if you want to do more than memorize shapes and actually understand which notes inside them are doing the work.\r
\r
### Is it only for guitar?\r
\r
No. The tool supports guitar, bass, and ukulele.\r
\r
### Why look at intervals if I can already see the notes?\r
\r
Notes show you the actual pitches. Intervals show you their function. For improvisation, analysis, and harmonic understanding, that is often more useful.\r
\r
### How is an arpeggio different from a chord?\r
\r
A chord is a group of notes played together. An arpeggio is the same notes played one after another. In solos and melodic phrases, arpeggios help you lock into the harmony more precisely.\r
\r
### Does the tool choose the perfect scale?\r
\r
No. It shows practical options. The final choice depends on the key, the harmony, the style, and the sound you want.\r
\r
### Can I use it for writing music?\r
\r
Yes. The tool works both for practice and for real writing: riffs, melodies, solos, and chord progressions.\r
\r
## Conclusion\r
\r
**[Chords, Arpeggios, and Scales](/en/chords)** is not a tool about collecting diagrams. It is about the connection between a chord shape, its notes, and its musical use.\r
\r
It helps you navigate the fretboard faster, understand harmony better, and use chord-based material in practice, improvisation, and songwriting.\r
\r
If you want to see notes and sounds across the fretboard even more clearly, the next step is **[Fretboard Explorer](/en/scales-fretboard-explorer)**. If you want to understand how a chord works inside a key, move on to **[Harmony](/en/harmony)**.\r
\r
## Related tools\r
- [Chord Identifier by Notes](/en/chord-identifier)\r
- [Fretboard Explorer](/en/scales-fretboard-explorer)\r
- [Harmony](/en/harmony)`,Cw=`---\r
post_id: circle-of-fifths-keys-major-minor\r
slug: circle-of-fifths-keys-major-minor\r
title: "Circle of Fifths: how to quickly understand relationships between keys"\r
description: "How to use the circle of fifths in practice: see relationships between keys, understand major and minor, choose chords, and make sense of harmony faster."\r
keywords: "circle of fifths, fifths circle, key relationships, major and minor, relative minor, related keys, chords in a key, harmony, songwriting, six strings app, music theory, musical harmony, music practice, musical tool, guitar, bass guitar, ukulele, chords, progressions, transposition, arrangement, composition, music analysis"\r
tags: circle of fifths, harmony, key, major, minor, music theory, songwriting\r
date: 2026-04-11\r
intro: "The circle of fifths often looks like a dry theory diagram from a textbook. In practice, though, it is a very useful cheat sheet. It helps you quickly understand which keys are related, where the relative minor or major sits, and which direction the harmony can move."\r
cta_path: /circle-of-fifths\r
cta_label: "Circle of Fifths"\r
cover_image: cover.png\r
draft: false\r
---\r
\r
## Introduction\r
\r
Many musicians get stuck not on chords themselves, but on the relationships between them. Individual chords make sense, scales may feel familiar, but the moment you need to quickly recall a related key, find the relative minor, or understand where the harmony can move, you hit a wall.\r
\r
In theory, you can keep all of this in your head. In practice, that is inconvenient. When you are analyzing a song, writing a progression, transposing material, or working on an arrangement, you need a fast point of reference.\r
\r
That is exactly what the circle of fifths is for. In Six Strings App, it is not just a diagram of keys, but a practical entry point into harmony. The page helps you see relationships between keys, understand major and minor more quickly, and move to [Harmony](/en/harmony/) or [Song Builder](/en/song/) when you need more.\r
\r
In this article, we will look at what the circle of fifths shows, who it is useful for, and how to use it in real musical practice.\r
\r
## What is the circle of fifths in simple terms\r
\r
The circle of fifths is a diagram that shows relationships between keys. If you move around the circle in one direction, the keys go by fifths. In the other direction, they go by fourths. That is where the name comes from.\r
\r
But for a musician, the important thing is not the diagram itself. It is what the diagram means. Keys that sit next to each other usually sound closer to one another. That is why the circle helps you see harmony as a system rather than a set of disconnected rules.\r
\r
In practice, it helps you quickly understand:\r
\r
- which key sits nearby;\r
- which minor key is the relative minor of a major key;\r
- which nearby keys are worth trying;\r
- where the harmony can move more easily;\r
- how to transpose a familiar progression faster.\r
\r
That is why the circle is useful not only for people studying theory. It also helps people who write songs, make arrangements, figure out chords by ear, or want to better understand the [Harmony](/en/harmony/) page.\r
\r
## Who this page is especially useful for\r
\r
### Beginner guitarists\r
\r
If you get confused by the difference between a key, a scale, and a set of chords, the circle of fifths gives you a first point of reference. It helps you see that theory is not a mess of unfamiliar words, but a clear system.\r
\r
### More experienced musicians\r
\r
If you already play chords, build progressions, and study improvisation, the circle helps you make decisions faster. You do not need to reconstruct everything from scratch each time. You can immediately see nearby keys and the relationships between them.\r
\r
### Songwriters and arrangers\r
\r
When you need to quickly find a close key, a natural transition, or a way out of the same old three chords, the circle gives you a useful hint. This is especially helpful at the sketch stage, when it is important not to lose the idea.\r
\r
### Teachers\r
\r
The circle of fifths works well as a visual teaching tool. It makes it easier to explain relative keys, chord relationships, and the overall logic of harmony.\r
\r
## What problems the circle of fifths helps solve\r
\r
### It helps you navigate keys faster\r
\r
A common problem is this: a musician knows individual chords, but does not really understand how keys relate to one another. The circle clears up that confusion. You immediately see which keys are nearby and which ones already sound more distant and contrasting.\r
\r
### It shows the relationship between major and minor\r
\r
Many people know that every major key has a relative minor, but do not really feel that relationship in practice. When both are shown on one diagram, it becomes much easier to navigate. This is useful both for analyzing songs and for writing your own progressions.\r
\r
### It gives you a reference point for transposition\r
\r
If you play a progression in one key and want to move it to another, the circle helps you do it with intention. Instead of shifting chords mechanically, you can preserve the logic of the movement.\r
\r
### It makes harmony easier to approach\r
\r
The circle of fifths does not replace a detailed page with chords in a key, cadences, and modulations. But it gives you a good starting point. First you see the big picture, then you move into the details.\r
\r
### It helps you choose a direction for a progression\r
\r
Many moves in pop and rock music become easier to understand when you can see how keys sit in relation to each other. It becomes easier to decide where to move a verse, chorus, or bridge.\r
\r
## How it works in practice in Six Strings App\r
\r
The Circle of Fifths page in Six Strings App is useful as a quick entry point into harmony. It is not there for you to look at once and close. It works best as a practical cheat sheet.\r
\r
A typical workflow looks like this:\r
\r
1. You choose a key or simply use the circle as a map of relationships.\r
2. You immediately see nearby keys and the broader harmonic neighborhood.\r
3. You quickly connect major and minor.\r
4. You get a reference point for choosing chords, transposing, and analyzing.\r
5. If you need more detail, you move to [Harmony](/en/harmony/).\r
6. If you want to turn an idea into a progression right away, you open [Song Builder](/en/song/).\r
\r
This order works well because it does not overload you. First you understand the relationships, then you check them in harmony, and only after that do you apply them in practice.\r
\r
## How to use the circle of fifths in musical practice\r
\r
### 1. To quickly recall related keys\r
\r
This is the simplest use case. Suppose you are playing in G major and want to know which keys are nearby and where you can move without a harsh break in the sound. The circle gives you that answer almost immediately.\r
\r
This is especially useful when analyzing songs or preparing to improvise. Instead of a long trial-and-error process, you immediately see the nearest harmonic area.\r
\r
### 2. To understand the relationship between major and relative minor\r
\r
If you are working on a song where the mood may shift from brighter to darker, the relationship between a major key and its relative minor becomes very important. The circle helps you see that pair quickly and keep it in mind as one shared space.\r
\r
This is useful for songwriting too. Sometimes you do not need to look for something exotic. It is enough to look at the related minor or major and try shifting the focus there.\r
\r
### 3. To feel out a direction for a progression\r
\r
The circle of fifths does not replace chord work, but it helps a lot at the beginning. When you are deciding which tonal center to start from and which nearby areas to try, the circle works like a fast musical map.\r
\r
From there, you can move to [Song Builder](/en/song/) and build the progression, check it by ear, try inversions, bass notes, and different development options.\r
\r
### 4. To transpose familiar progressions\r
\r
If you already know how a progression sounds in one key, the circle helps you move it into another key more quickly without losing the logic of the relationships. This is useful for vocalists, teachers, and anyone who regularly adapts material to a comfortable range.\r
\r
### 5. To better understand the Harmony page\r
\r
Sometimes it is hard to jump straight into a large list of chords in a key, cadences, and modulations. In that case, the circle of fifths works as an entry map. First you understand where you are, then you go deeper.\r
\r
That is why the connection between these pages is so useful: the circle gives you the overview, and [Harmony](/en/harmony/) gives you the details.\r
\r
## Why this page is especially useful inside Six Strings App\r
\r
The main value of this page is not that it simply shows the circle. You can find diagrams like that anywhere online. What matters more is that here the circle is built into the wider musical environment of the site and connected to other tools.\r
\r
### It is not isolated theory\r
\r
You are not just looking at key names around a circle. You can understand the relationships between them and immediately move to the next step inside the site.\r
\r
### It is a good way into harmony\r
\r
If a user is not ready yet to study functions, cadences, and modulations in detail, the circle offers a simpler start. First comes the map, then the details.\r
\r
### It gives you a clear next step\r
\r
Once the overall picture is clear, you can move to [Harmony](/en/harmony/) for the full set of chords in the key, or to [Song Builder](/en/song/) if you want to apply the idea right away.\r
\r
### It is useful not only for study, but also for writing music\r
\r
The circle of fifths is not only for people learning theory. It is also useful for a musician writing a song, looking for a direction for a verse or chorus, and trying to move beyond familiar choices.\r
\r
## A simple way to get started\r
\r
If you are just getting familiar with this page, do not try to memorize the entire circle at once. A much better approach is this:\r
\r
1. Choose one key you already know well, such as C major or A minor.\r
2. Look at which keys sit nearby.\r
3. Find the relative minor or major.\r
4. Recall which songs and chords you already associate with that tonal center.\r
5. Then move to [Harmony](/en/harmony/) and see which chords belong to that key.\r
6. If you want to turn the idea into a progression right away, open [Song Builder](/en/song/).\r
\r
This way, you do not overload yourself with the diagram. You immediately turn understanding into action.\r
\r
## Common mistakes when learning the circle of fifths\r
\r
### Mistake 1. Trying to memorize the circle as a picture\r
\r
If you simply memorize the order of the keys, the benefit will be small. What matters much more is understanding what the circle actually shows: closeness between keys, the relationship between major and minor, and the direction of harmonic movement.\r
\r
### Mistake 2. Treating the circle as a ready-made list of “correct” chords\r
\r
The circle helps you navigate, but it does not replace the analysis of a specific song. Music often goes beyond simple diatonic harmony and uses borrowed chords, secondary dominants, and modulations. So the circle is a reference point, not a rigid rule.\r
\r
### Mistake 3. Studying it only with your eyes\r
\r
If you do not connect the circle to real music, theory sticks less effectively. It is much more useful to look at the relationships between keys, then check chords on the [Harmony](/en/harmony/) page and apply them in [Song Builder](/en/song/).\r
\r
### Mistake 4. Trying to cover every key at once\r
\r
It is better to start with familiar material. Take two or three keys in which you already play songs and trace their relationships. That approach gives you real understanding much faster.\r
\r
## FAQ\r
\r
### What does the circle of fifths show?\r
\r
The circle of fifths shows how keys relate to one another. It helps you see neighboring keys, relative major and minor, and the overall direction of harmonic movement.\r
\r
### Why is the circle of fifths useful for guitarists?\r
\r
It helps you navigate keys more quickly, choose chords, transpose progressions, and understand why some transitions sound natural while others create stronger contrast.\r
\r
### Can you use the circle for songwriting?\r
\r
Yes. It is a useful starting map. It helps you choose a tonal center, look at nearby harmonic areas, and sketch a direction for a progression. For more detailed work, it is convenient to move to [Song Builder](/en/song/).\r
\r
### Does this page replace a full study of harmony?\r
\r
No. The circle of fifths gives you an overview and a quick understanding of relationships between keys. For detailed work with chords, functions, cadences, and modulations, it is better to move to [Harmony](/en/harmony/).\r
\r
### Is this tool only for beginners?\r
\r
No. For beginners, it removes confusion. For more experienced musicians, it helps with faster decisions in analysis, songwriting, and arranging.\r
\r
## Conclusion\r
\r
The circle of fifths is useful not because it is a pretty textbook diagram. It is useful because it helps you see relationships between keys faster and make practical decisions. This matters most where musicians usually get stuck: major and minor, related tonal centers, transposition, and choosing a harmonic direction.\r
\r
If you want not just to read theory, but to apply it right away in song analysis, songwriting, and arranging, start with the [Circle of Fifths](/en/circle-of-fifths/). Choose a key you already know, look at the relationships around it, and then move on to [Harmony](/en/harmony/) or [Song Builder](/en/song/).\r
`,Ew=`---
post_id: strumming-pattern-library
slug: guitar-strumming-pattern-library
title: "Guitar strumming pattern library: how to find the right rhythm for a song faster"
description: "A guitar strumming pattern library with ready-made rhythmic patterns in different time signatures. Helps you preview options quickly, choose the right strumming pattern, and find ideas for practice and songwriting."
keywords: "guitar strumming patterns, strumming patterns for guitar, guitar strumming pattern library, strumming rhythm for guitar, how to choose a strumming pattern for a song, guitar rhythm patterns, strumming patterns in different time signatures, rhythm guitar patterns, acoustic guitar strumming patterns, six strings app"
tags: rhythm, strumming, strumming patterns, guitar, songwriting, accompaniment, practice
date: 2026-04-24
intro: "Once you already have a chord progression, the next question is usually the same: how should you actually play it so the song starts to breathe? The strumming pattern library helps you compare ready-made rhythmic patterns quickly, hear the difference between them, and choose a strumming approach by sound and feel rather than by guesswork."
cta_path: /strumming-patterns-library/
cta_label: "Strumming Patterns"
cover_image: cover.png
draft: false
---

## Introduction

Many guitarists know the feeling: the chord progression is already there, but the song still does not sound like a complete musical idea. The chords are in place, the tempo is roughly clear, the mood is there too, but when it comes to strumming, you end up cycling through the same familiar options. As a result, even a good idea can get stuck at the stage of “I’ll figure out how to play it later.”

In theory, you can solve this without a dedicated tool. You can recall familiar patterns, search for song breakdowns online, test options by ear, or just play whatever your right hand falls into first. In practice, though, that usually means wasted time, repeated habits, and not enough fresh rhythmic ideas.

That is exactly how the strumming pattern library in Six Strings App came to life. I was experimenting with a chord progression for a song and trying to decide how to play it. A few basic patterns were not enough, so I first built a rough version based on the rhythm pattern generator. The idea seemed logical: if you can generate rhythm, you should also be able to generate strumming options quickly. But I did not like the result. The patterns were not always musical, and they did not always work well for real guitar accompaniment.

So I took a different approach. Instead of generating abstract patterns, I decided to collect well-known strumming patterns that musicians already use in practice. That is how the new tool appeared. The visualisation and drum backing were already in place, so the remaining job was to build the library, organise it into a usable format, and add a fast way to preview everything. The result is not just a list of strumming patterns, but a practical tool for choosing rhythm, practising, and finding ideas.

## What the strumming pattern library is

The strumming pattern library is an online tool with ready-made rhythmic patterns for guitar accompaniment. It helps you preview different strumming options quickly, compare them, and choose a rhythm that fits a specific chord progression.

The main value is not simply that there are many patterns. It is that you can hear them immediately instead of only reading them with your eyes. That matters a lot in rhythm. The same pattern may look clear on paper, but once you hear it, you realise it is either too dense, too straight, or simply wrong for the character of the song.

## Who this tool is for

### Beginner guitarists

Beginners often know two or three basic strumming patterns and use them in almost every song. That is a normal stage, but at some point it becomes limiting. The library helps show that even simple accompaniment can take more than one or two familiar shapes.

### Intermediate and advancing musicians

If you already play comfortably, the problem is usually different. It is not a lack of technique, but inertia. Your hands naturally fall into familiar patterns even when the song needs a different character. The library gives you a quick way to step out of autopilot and test several rhythmic ideas in a row.

### Songwriters and arrangers

When you write a song, strumming is not just decoration. It is part of the arrangement. It shapes motion, density, and the overall feel of the form. Being able to compare a few patterns quickly saves time and helps you avoid making rhythmic decisions blindly.

### Teachers

For teachers, the library works as a clear demonstration tool. You can do more than explain that strumming patterns can differ. You can let a student hear contrasting options right away, in the same tempo and in a similar musical context.

## What problems the strumming pattern library solves

### 1. It helps you stop repeating the same old patterns

One of the most common accompaniment problems is repeating familiar motions. The player is not choosing consciously, but simply replaying what is already in the hands. The library brings choice back into the process. You can stop, listen, and decide which pattern actually suits the song.

### 2. It speeds up the search for the right rhythm for a progression

Once the chords are there, you usually want to get to the sound quickly instead of spending an hour on random experiments. Ready-made patterns shorten the distance between idea and test. You take your progression and compare not abstract possibilities, but real working strumming patterns.

### 3. It gives you material for practice

The tool is useful not only for writing songs. It is also a good way to expand your rhythmic vocabulary. Even if you are not working on a specific composition, you can pick an unfamiliar pattern, learn it, try it in several tempos, and add it to your active playing vocabulary.

### 4. It shows that time signature affects strumming choices too

It is worth remembering that strumming is not just a sequence of downstrokes and upstrokes. It lives inside meter and pulse. That is why patterns in different time signatures feel different and organise the music in different ways. The library helps you hear that difference instead of only understanding it in theory.

## How it works in practice

The basic workflow is simple. You choose a pattern, start playback, and immediately hear how the rhythm is organised over time. With drum backing, the pattern feels less like a dry diagram and more like a musical fragment with pulse and structural accents.

That matters because it is almost impossible to evaluate a strumming pattern only by looking at arrows or symbols. Your eyes can see the structure, but your ears tell you whether it has motion, accent, groove, and practical playability.

If the pattern sounds promising, you can try it on your own progression right away. If it does not work, move to the next one. This removes unnecessary abstraction. Instead of arguing with theory, you check the musical result quickly.

## Why this became a library of patterns

Sometimes a new tool is not born from a big product idea, but from a very specific question: “How should I play this?” That was exactly the case here. At first, it looked like a small personal problem — finding a strumming pattern for my own progression. Then it became clear that the same problem comes up again and again.

The first prototype built around the rhythm generator helped test the direction, but it did not deliver the right quality. Generation works well when you want unexpected rhythmic ideas. But for accompaniment, randomness is often less important than musical usefulness. That is why this tool moved toward curated, familiar, already proven patterns.

That is an important difference. The tool does not throw any rhythm at you. It gives you a set of options that are already closer to real guitar practice.

## Why it is especially useful inside Six Strings App

Inside Six Strings App, the library is useful because it did not grow as an isolated catalogue. It grew out of the rhythm tools that were already there. Because of that, it comes with clear visualisation and drum backing from the start, which makes it easier to feel how a pattern works.

Another advantage is the connected ecosystem. If you want not only to choose a ready-made strumming pattern but also to look for less predictable rhythmic ideas, the natural next step is the rhythm generator. If your goal is to lock the pattern into a steady tempo, the metronome is the next tool to open. And if you want to work more deeply on inner pulse and subdivisions, the rhythm trainer is the right continuation.

In other words, the library solves one specific question — which strumming pattern to try — but it does not stop the process there. It leads naturally into practice, rhythm development, and musical application.

## How to get real value from the library

### Start with the most suitable pattern, not the most complicated one

A common mistake is choosing a pattern by the rule “the more interesting, the better.” In reality, a good strumming pattern does not have to be complicated. It has to support the song. Sometimes a simple pulse works better than a busier pattern with too many motions and accents.

### Compare several options in a row

It is better not to settle for the first pattern that seems acceptable. Pick three or four patterns in the right time signature and listen to them one after another. The contrast quickly shows which one makes the progression feel more alive and which one overloads it.

### Try the same pattern at different tempos

Some patterns only reveal their character within a certain tempo range. At a slow tempo they may feel empty, while at a fast one they may become too restless. That is why it helps not only to choose a pattern, but also to check how it feels at your song’s tempo.

### Learn the pattern through sound, not only through the visual scheme

If you like a pattern, do not rush to copy the motions mechanically. Listen to it a few times first as a rhythmic phrase. That way your hand adapts not to an abstract template, but to the musical logic of the pattern.

## A short route for first use

1. Take a simple chord progression you are already working on.
2. Find several patterns in the right time signature.
3. Preview them one by one and eliminate the ones that do not support the character of the song.
4. Try one or two of the best options on your progression.
5. Lock the chosen pattern in at a slow tempo, then gradually speed it up.

## FAQ

### Is this tool only for beginners?

No. For beginners, it helps expand beyond a few basic patterns. For more experienced musicians, it provides a faster way to compare options and avoid playing every song with the same strumming approach.

### Does it replace the rhythm generator?

No. These tools solve different problems. The rhythm generator is useful when you want unexpected rhythmic ideas. The strumming pattern library is useful when you want curated, practical patterns for accompaniment.

### Is it only for acoustic guitar?

It naturally fits acoustic accompaniment first, but the rhythmic ideas themselves can be used more broadly: for electric guitar, arranging, song analysis, and general rhythm practice.

### Why listen to a pattern if I can just look at the scheme?

Because rhythm is understood better by ear than by graphic notation alone. A scheme shows structure, but only sound lets you feel the pulse, accents, and musical movement.

## Conclusion

The strumming pattern library is useful not because it gathers many patterns in one place, but because it helps you solve a concrete musical task faster and more consciously: finding the right rhythm for a song, practice session, or arrangement. That becomes especially valuable once the chords are already there but the playing approach is still missing.

If you are currently trying to make your progression sound more alive and convincing, the natural next step is to open the strumming pattern library and compare a few patterns by ear. And if you want to expand your rhythmic vocabulary further, you can continue with the rhythm generator or lock the result in with the metronome.

## Related tools

* [Strumming Patterns](/en/strumming-patterns-library/)
* [Rhythm Generator](/en/rhythm-generator/)
* [Metronome](/en/rhythm-metronome/)
* [Rhythm Trainer](/en/rhythm-trainer/)`,Pw=`---
post_id: harmony-key-chords-cadences-modulations
slug: harmony-key-chords-cadences-modulations
title: "Harmony: how to see key chords, hear cadences, and understand modulations"
description: "An online tool for working with harmony: key chords, chord functions, cadences, and modulations with audio playback right in the browser. Useful for practice, arranging, and songwriting."
keywords: "harmony, key chords, chord functions, cadences, modulations, musical harmony, chords in a key, choose chords by function, harmony generator, harmony for guitar, songwriting, chord progressions, six strings app, online tool for musicians"
tags: harmony, chords, key, cadences, modulations, music theory, songwriting, guitar
date: 2026-04-09
intro: "An online tool for working with key chords, chord functions, cadences, and modulations with audio playback right in the browser."
cta_path: /harmony/
cta_label: "Harmony"
cover_image: cover.png
draft: false
---
## Introduction

Many musicians know the feeling: once the key is clear, the real decisions begin. Which chord should you use? What function should it serve? And how do you check that choice not only in theory, but by ear?

Without a convenient tool, this quickly becomes slow and awkward. You have to recall chords from memory, look up cadences separately, and treat modulation as something that makes sense on paper but feels abstract in practice.

The **[Harmony](/en/harmony)** page solves this in a practical way. It lets you see the chords in a selected key, hear them, compare their harmonic functions, test cadences, and understand how a piece can move into another key.

In this article, we will look at how this page works, what kinds of tasks it is especially useful for, and how to use it in real musical practice.

## What the Harmony page is

**[Harmony](/en/harmony)** is an online tool for working with chords inside a selected key. It presents harmonic material not as dry theory, but as a usable structure: which chords are available, what function each chord serves, which cadences can be built from them, and how you can move from one key into another.

The value of the page is that it connects several layers at once. You do not just see the chords inside a key. You can relate them to function, context, and sound. That makes the page useful not as a reference for its own sake, but as a tool for choosing, testing, and applying harmonic ideas.

## How this page came to be

The **Harmony** page appeared around the same time as the rhythm trainer. The original idea was simple and practical: I wanted one place where I could see the main chords of a key and hear them as well. Not scattered across different sources, but right in the browser and free to use.

Over time, more material started to grow around that idea. I spent a long time collecting different cadences because I wanted more than just a list of chords. I wanted a set of common harmonic movements that could be previewed quickly in any key. That matters both for learning and for writing music: a cadence gives you a sense of motion, not just a list of functions on paper.

At the same time, I was also collecting material on modulations. I wanted to understand not only which chords belong to a key, but also how music can leave that key. What kinds of transitions are possible? What holds them together? Why do some of them sound natural while others create a sharper effect? That is how the page gradually grew beyond chords and cadences and added a separate layer devoted to modulation.

In its early version, the page was called **“harmony generator.”** It showed the main chords of a key in a table: triads, sus chords, seventh chords, and chords with added 9ths, 11ths, and 13ths. Even then, it was already useful for musicians who wanted to orient themselves inside a harmonic field without building everything manually.

Later, the page became broader and more practical. Quite recently, I reworked the main chord table: I added **6th chords** and **power chords**, and I also improved the sound. Now the chords are not previewed only with a synthesized guitar sound. You can layer several instruments at once and get more lively timbral combinations. As a result, both cadences and modulations feel more musical.

Work on the page is still ongoing. I continue to collect interesting cadences so the tool remains not a static catalog, but a living, practical library of harmonic movement.

## What problems it solves

The **Harmony** page is especially useful when you need to make a musical decision, not just recall a term.

### 1. It helps you quickly see the chords inside a key

When you are choosing a key for a song, analyzing an existing progression, or looking for options for an arrangement, it helps to know what chord set is actually available to you. And not only basic triads, but also more practical working options: sus chords, seventh chords, extensions, 6th chords, and power chords.

That saves time. Instead of holding everything in your head or jumping between scattered charts, you see the available material in one place.

### 2. It helps you choose a chord by function

A chord function is the role a chord plays inside a key. In practice, that matters more than it may seem. One chord creates stability, another pushes the music forward, and a third creates tension and wants to resolve.

When the function is visible right away, the choice becomes more intentional. You are no longer picking chords blindly. First you decide what the music needs at that point: rest, preparation, tension, or a turn. Then you listen to the options and choose the one whose character fits best.

### 3. It gives you real context through cadences

Chords are useful on their own, but in music they almost always work in motion. That is why cadences are not an extra option here. They are one of the key parts of the page. They let you hear how a function unfolds inside a progression.

This is useful both for learning and for writing music. In the first case, you start hearing common harmonic patterns more quickly and recognizing them in songs. In the second, you get a starting point for your own progression, which you can then develop for a specific musical idea.

### 4. It helps make sense of modulation

Modulation is one of those topics that can easily turn into overloaded theory. But the practical question is usually simpler: how do you move from one key to another in a way that sounds convincing?

When different kinds of modulations are collected in one place, they are easier to understand as musical solutions rather than abstract schemes. That is useful both for analysis and for your own material when you want to expand the harmony and move beyond a single tonal center.

## How to use Harmony in practice

### To choose a chord by function

This is one of the most useful use cases. Suppose you need a **dominant chord in the [key of B minor](/en/harmony/?note=B&mode=aeolian&tab=chords)**. You open the page and immediately see which scale degrees carry dominant function. Then you can listen and decide which option feels right: more direct, softer, or more tense.

This workflow is useful because you move from musical role to specific chord, not the other way around. First you decide what the harmony needs to do. Then you choose the sound that fits that role.

### For songwriting and chord progressions

When your usual progressions start to repeat themselves, the **Harmony** page helps you break out of the pattern without resorting to random trial and error. You can choose a key, review the main functions, listen to a few cadences, and use the one that best matches the mood of the section.

If you want to take the next step, you can move that material into the **[Song Builder](/en/song/)**: build the full progression, work with tempo and inversions, and hear it in a longer form.

### For analyzing other people’s music

If you are analyzing a song, the page helps you quickly check which chords are diatonic, where a functional shift begins, and where a modulation might already be emerging. It does not replace full analysis, but it makes it much faster to orient yourself inside the material.

### For learning and teaching

For self-taught musicians, the page gives you a framework: instead of trying to hold everything in your head, you can work through harmony via a specific key, function, and sound. For teachers, it is useful because it helps show students not only the name of a function, but how that function actually feels inside a progression.

## Why this approach works especially well inside Six Strings App

The strength of the **Harmony** page is that it is not isolated from the rest of the site.

If you find the chord you need by function and sound, the next step is to open **[Chords, Arpeggios, Scales](/en/chords/)** and choose a playable fingering. If you want to orient yourself more quickly in major and minor, the **[Circle of Fifths](/en/circle-of-fifths/)** is right there. And if you want not only to understand function but also to recognize it by ear, the logical next step is the **[Chord Function Ear Trainer](/en/ear/functions/)**.

Because of that connection, theory does not stop at a table. It moves into ear training, the fretboard, and real musical action.

## Where to start

The easiest way to use the page is this:

1. Choose a key.
2. Look at the main chords and their functions.
3. Listen to the options on the scale degree you need.
4. Open the cadences to hear that chord in motion.
5. If you find the right option, go to **[Chords, Arpeggios, Scales](/en/chords/)** for the fingering.

Even this simple route gives you practical value without requiring deep theoretical study.

## FAQ

### What does the Harmony page show?
It shows the chords of a selected key, their functions, cadences, and possible modulations, with audio playback.

### What are chord functions for?
Functions help you understand the role of a chord inside a key: stability, motion, tension, and resolution.

### Can I use Harmony for songwriting?
Yes. The page helps you choose chords by function and sound, listen to cadences, and find ideas for progressions.

### Why are modulations useful on this page?
They help you hear and understand how a piece can move from one key to another in real music.

### What should I do after choosing a chord?
Go to **Chords, Arpeggios, Scales** to find a comfortable fingering and explore related scales.

## Related tools

- [Harmony](/en/harmony) — the main page this article is about
- [Chords, Arpeggios, Scales](/en/chords/) — the next step after choosing a chord by function
- [Circle of Fifths](/en/circle-of-fifths/) — for quick navigation through keys
- [Song Builder](/en/song/) — for building and previewing a progression after choosing harmonic material
- [Chord Function Ear Trainer](/en/ear/functions/) — for developing an ear for harmonic function`,Mw=`---\r
post_id: metronome-online\r
slug: online-metronome-for-guitar-practice\r
title: "Online metronome for guitar practice: a mini drum machine for daily training"\r
description: "The Six Strings App online metronome helps you practice with more control and musical feel: customizable sound, progressive tempo mode, practice timer, genre-based patterns, flexible subdivisions, and saved custom rhythms."\r
keywords: "online metronome for guitar, guitar practice metronome, metronome with drum patterns, progressive tempo metronome, mini drum machine for guitarists, metronome with timer, rhythm practice tool, six strings app"\r
tags: metronome, practice, musical metronome, online metronome, drum machine, progressive tempo, practice timer, guitar patterns, subdivisions, saved rhythms\r
date: 2026-04-13\r
intro: "A basic metronome gives you pulse, but that does not always mean better practice. Sometimes you need a softer sound, sometimes clear subdivisions, sometimes gradual tempo increases, and sometimes a ready-made groove in the right meter. I built this metronome for myself first: not as a page with a start button, but as a practical tool for real daily practice."\r
cta_path: /en/rhythm-metronome/\r
cta_label: "Metronome"\r
draft: false\r
---\r
\r
## Introduction\r
\r
A standard metronome solves one basic problem: it gives you a steady pulse. That alone is enough for timing work, learning parts, and staying in tempo. But in real practice, that is often not enough. You may want to change the sound, hear subdivisions more clearly, raise the BPM gradually, play against a ready-made pattern, and avoid opening a separate timer or drum machine for every small task.\r
\r
That is exactly why the metronome in Six Strings App exists. I built it for myself first, as a tool I would actually want to use every day. The result is not just an online metronome, but a compact rhythm workspace for practice.\r
\r
In this article, we will look at who this kind of metronome is for, what problems it solves, and why practice sometimes needs more than a plain click.\r
\r
## What this tool is\r
\r
The Six Strings App metronome is an online tool for rhythm practice. You can use it as a regular metronome, as a subdivision practice tool, and as a mini drum machine for everyday training.\r
\r
It is useful when you need to:\r
\r
- keep a steady tempo;\r
- raise exercise speed gradually;\r
- improve precision inside the beat;\r
- play along with ready-made patterns in different genres and meters;\r
- create and save your own rhythmic patterns.\r
\r
## Who it is for\r
\r
It was built with guitarists in mind, but in practice it is useful for any musician who wants to work in time and hear rhythm as more than a dry click.\r
\r
It is especially helpful if you:\r
\r
- practice exercises, riffs, and technical phrases and want to increase speed without rushing;\r
- work on strumming, picking, and rhythmic precision;\r
- learn parts in different meters;\r
- want to feel eighth notes, triplets, and sixteenth notes more clearly;\r
- prefer a more musical rhythmic reference than a plain click;\r
- build short, focused practice sessions.\r
\r
## What problems it solves\r
\r
### A dry click gets tiring\r
\r
A standard click does its job, but it does not always help you stay focused for long. When you can shape the sound to fit your ear and your task, practice becomes easier to sustain. And that usually means more consistent work.\r
\r
### It is hard to increase tempo in a structured way\r
\r
A common mistake is jumping straight to a high BPM and trying to force the exercise through tension. That usually ends in tightness, sloppy playing, and lost control. Progressive tempo mode gives you a cleaner path: start at a workable speed and move upward in stages.\r
\r
### Practice sessions can lose structure\r
\r
Without time limits, practice tends to spread out. You can spend too long on one exercise without really working through it with intent. A timer gives the session a frame: for example, 10 minutes on picking, 10 minutes on rhythm, and 5 minutes on reinforcement.\r
\r
### A plain click is not always enough for groove work\r
\r
When you need to feel not only the beat but also the shape of the pattern, a dry metronome may not give you enough context. A rhythmic pattern gives you accents, motion, and a clearer sense of how the bar breathes.\r
\r
### Many timing issues happen inside the beat\r
\r
Quarter notes are only the outer shell of timing. A lot of real instability appears deeper inside the beat: on eighths, triplets, sixteenths, and syncopations. That is why flexible subdivision control is not a secondary feature. It is central to accurate rhythm practice.\r
\r
### You do not want five separate tools for one session\r
\r
A separate metronome, a separate timer, a separate drum machine, separate pattern notes — that all creates friction. Here, the core functions live in one place, so it is easier to move from intention to actual practice.\r
\r
## Why this is more than a metronome\r
\r
A classic metronome says: here is the beat, hold on to it. That is useful, but sometimes too narrow. In real music, you need more than beat markers. You need the feel of the pattern, the accents, the density, and the movement inside the bar.\r
\r
That is why this tool makes more sense as a middle ground between a plain metronome and a simple drum machine. It is not trying to replace a DAW or a full drum sequencer. Its job is simpler and more practical: to give musicians a fast, clear, flexible rhythm tool in the browser.\r
\r
## Main features\r
\r
### Customizable sound\r
\r
Sound quality affects practice quality. In one situation you need a dry, precise click. In another, you need something softer and more musical that does not become irritating after ten minutes. Sound customization is not cosmetic here. It is a way to make the tool fit the work.\r
\r
This matters most in long sessions, slow practice, and technical repetition, where the same sound repeats dozens or hundreds of times.\r
\r
### Progressive tempo mode\r
\r
This is one of the most practical features for technical work. Instead of raising the BPM manually after every pass, you can define the tempo growth in advance and move through the cycle calmly. This works especially well for scales, arpeggios, alternate picking, legato, sweep ideas, riffs, and short technical phrases.\r
\r
The real value is not just speed growth. It is structure. Tempo stops being random, and your practice becomes easier to control.\r
\r
### Practice timer\r
\r
The timer is simple, but its effect is practical. It helps you build short, dense sessions and avoids the endless “one more time” loop. This is especially useful if you practice before work, between other tasks, or in focused blocks.\r
\r
For example:\r
\r
- 5 minutes for warm-up;\r
- 10 minutes for rhythm;\r
- 10 minutes for technique;\r
- 5 minutes for reinforcement.\r
\r
That kind of frame does not get in the way. It helps attention stay organized.\r
\r
### Patterns in different genres and meters\r
\r
Sometimes the goal is not only to land on the beat, but to feel the character of motion. In those situations, ready-made patterns are more useful than a plain click. They help you hear how the meter moves, where the accents fall, and how the groove works.\r
\r
That is useful for rhythm guitar, strumming, style practice, and work in unusual meters. When you are not playing into empty space, musical feel develops faster.\r
\r
### Flexible subdivision control\r
\r
Feeling the inner division of the beat is a foundation of solid timing. If a musician only tracks the main beats, the part may sound steady on the surface but unstable underneath. Subdivision control makes that internal grid audible.\r
\r
This is useful for:\r
\r
- even eighths and sixteenths;\r
- triplet feel;\r
- syncopation;\r
- dense riff playing;\r
- right-hand control in fast passages.\r
\r
### Custom patterns and saved settings\r
\r
One of the most useful workflows is building a rhythm around your own task. That could be a specific exercise, a strumming pattern, a riff, a jazz pulse, or an unusual meter. Saving your own pattern turns the metronome from a generic tool into a personal library of working setups.\r
\r
That is especially helpful when you return to the same kinds of exercises again and again. You do not need to rebuild the whole setup each time.\r
\r
### A mini drum machine in practice\r
\r
That is probably the clearest way to describe it. It gives you enough flexibility to practice more musically than with a bare click, but without the overhead of a full drum program. Open the browser, build the pattern you need, and start playing.\r
\r
For daily practice, that is often more valuable than a long list of complex features.\r
\r
## How to use it in practice\r
\r
### For technique and gradual speed building\r
\r
Take a short one- or two-bar exercise and set a tempo where you can play cleanly and without tension. Then turn on progressive tempo mode and move through the cycle without rushing. The goal is not to force a maximum BPM. The goal is to keep control at every stage.\r
\r
### For right-hand rhythm work\r
\r
If you are practicing strumming, picking, or accents, use more than the main pulse. Add subdivisions. That makes it easier to hear exactly where the pattern starts to fall apart.\r
\r
### For genre-based practice\r
\r
Instead of a dry click, use a pattern with the right feel. This is useful when you are learning a rhythm guitar part, trying to lock into a groove, or looking for a more musical sense of tempo.\r
\r
### For short focused sessions\r
\r
Set the timer for 10 to 20 minutes and work on one task only. This is especially effective when time is limited or attention drifts easily.\r
\r
### For your own exercises and riffs\r
\r
If you have a repeating rhythmic figure you want to stabilize, build a dedicated pattern for it. At that point the metronome stops being background and becomes part of the exercise itself.\r
\r
## Why I built this metronome\r
\r
Most tools on the site did not start as abstract feature ideas. They came from real practice needs. This metronome is the same. I wanted a tool that launches fast, does not get in the way, helps structure a session, and gives more freedom than a basic click.\r
\r
A normal metronome often felt too limited, while full drum machines were too heavy for quick daily work. I wanted something in between: set a tempo, choose a sound, turn on subdivisions, start a timer, use a ready-made pattern, or save your own. That is how this tool came to life.\r
\r
That is also why the focus here is not on decorative features. It is on the things that actually help: less friction, more practice.\r
\r
## How to get started\r
\r
A simple starting route looks like this:\r
\r
1. Choose a base tempo for your task.\r
2. Set a sound that does not tire your ear.\r
3. Decide whether you need plain pulse, subdivisions, or a ready-made pattern.\r
4. If you are doing technique work, turn on progressive tempo mode.\r
5. If you want more structure, set the timer.\r
6. Save the pattern if you plan to come back to it.\r
\r
That is already enough to turn random practice into more structured work.\r
\r
## Why it fits well inside Six Strings App\r
\r
One practical advantage is that the metronome does not live in isolation. If you are working on rhythm, you can connect it with the rhythm trainer and the rhythm generator. If you are practicing riffs, strumming, or exercises, the metronome becomes part of a wider practice system rather than a standalone utility.\r
\r
That reduces friction between the idea and the actual work. You do not have to jump across multiple tools just to get a focused 15-minute session done.\r
\r
## FAQ\r
\r
### How is this different from a standard online metronome?\r
\r
A standard online metronome usually gives you tempo and a click. Here you get more: customizable sound, subdivisions, progressive tempo mode, a practice timer, ready-made patterns, and saved custom rhythms.\r
\r
### Is it only for guitarists?\r
\r
No. It was built from a guitarist’s perspective, but it is useful for any musician who needs a flexible rhythm tool.\r
\r
### Why use progressive tempo mode?\r
\r
It helps you build speed gradually instead of jumping to an uncomfortable BPM too early. That is especially useful for technique work and repetitive exercises.\r
\r
### When should I use patterns instead of a plain click?\r
\r
Use patterns when you need more than pulse: groove, accents, motion, and stylistic feel. This is often useful for rhythm guitar, strumming, and genre-based practice.\r
\r
### Does the timer really matter if I can just watch the clock?\r
\r
Yes. The timer removes a small but constant distraction. You define the frame in advance and stay inside the work.\r
\r
## What to open next\r
\r
If you want to work more deeply on internal pulse, the logical next step is the rhythm trainer. If you want fresh ideas for riffs, accents, and rhythmic phrases, move on to the rhythm generator.\r
\r
## Conclusion\r
\r
This metronome is useful not because it has many settings, but because it helps solve a real musical problem: practicing with steadiness, structure, and musical feel. For one player it will be a way to stabilize tempo. For another, it will be a tool for gradual technical speed building. For someone else, it will function as a compact drum machine for daily practice.\r
\r
If you need more than a dry click, open the Six Strings App metronome and build the practice setup that actually fits the way you work.\r
\r
## Related tools\r
\r
- [Metronome](/en/rhythm-metronome/)\r
- [Rhythm Trainer](/en/rhythm-trainer/)\r
- [Rhythm Generator](/en/rhythm-generator/)\r
- [Strumming Patterns Library](/en/strumming-patterns-library/)`,Aw=`---
post_id: rhythm-trainer-for-guitarists
slug: rhythm-trainer-for-guitarists
title: "Rhythm Trainer for Guitarists: How to Develop Inner Pulse Through the Rhythmic Alphabet"
description: "What a rhythm trainer is, how it relates to Benny Greb’s rhythmic alphabet, and why it helps guitarists develop inner pulse, timing, and a stronger sense of rhythm."
keywords: "rhythm trainer, sense of rhythm, rhythm training for guitarists, how to improve rhythm on guitar, inner pulse, rhythmic alphabet, Benny Greb, rhythm exercises, subdivision, guitar timing, rhythmic exercises for guitarists, rhythm on guitar, rhythmic patterns for guitarists, six strings app"
tags: rhythm, sense of rhythm, rhythm trainer, guitar, timing, Benny Greb, rhythmic alphabet, rhythm exercises
date: 2026-04-08
intro: "A rhythm trainer helps guitarists develop more than just external timing against a click. It builds an inner sense of pulse within the beat. In this article, we’ll look at how this connects to Benny Greb’s rhythmic alphabet, why the idea resonates so strongly with guitarists, and how to start practicing it in a simple, practical way."
cta_path: /en/rhythm-trainer
cta_label: "Rhythm Trainer"
cover_image: cover.png
draft: false
---
## Introduction

Many guitarists know the feeling: the part is learned, the chords make sense, the picking or strumming hand feels confident, yet the rhythm still does not feel stable. On paper, everything may be correct, but the playing lacks pulse from the inside. Pauses drift, syncopations wobble, and the groove holds together more by luck than by a clear internal count.

In theory, this can be worked on without any dedicated tool. In practice, though, it quickly turns into vague advice like “play more evenly” or “practice more with a metronome.” The problem is that advice like that is not specific enough. A guitarist needs a clear unit of practice: what exactly to train inside the beat, how to hear it, and how to transfer it into the picking hand.

That is exactly where a rhythm trainer becomes useful. It helps you work not only with tempo, but with the internal content of the beat: pulse division, pauses, accents, and rhythmic cells. In this article, we’ll look at what this tool is, how it connects to Benny Greb’s rhythmic alphabet, why the idea has taken hold among guitarists, and how to begin with the most basic form of practice both without the guitar and on the instrument.

## What Is a Rhythm Trainer?

A rhythm trainer is an online tool for practicing rhythmic cells inside the beat. Its job is not simply to count time like a standard metronome, but to help a musician experience rhythm consciously from the inside.

In practical terms, that means something very simple: instead of working with the abstract instruction “play more evenly", you work with a specific pattern. You can say it out loud, clap it, tap it, play it on muted strings, and then transfer it into real musical material. That turns rhythm from a vague problem into something you can practice systematically.

This matters especially for guitarists, because most rhythmic mistakes do not happen at bar lines. They happen between them. A click may honestly mark the quarter notes, but it does not explain why the same hand can play steady eighth notes and then start rushing sixteenths, breaking up pauses, or losing accents.

## Why a Metronome Alone Is Often Not Enough

A metronome is useful, but it has a natural limitation. It provides an external framework for time, not an internal understanding of the beat. If a musician does not yet hear subdivision clearly, the click remains an outside reference rather than becoming part of their own sense of time.

That is where a common problem begins. A player may hit the strong beats and still sound unconvincing. Technically they are "not off", but the music does not lock into a stable motion. This is especially obvious in rhythm guitar, where groove depends not only on the notes themselves, but also on note length, silence, accents, and the way each beat is felt internally.

A rhythm trainer is useful at exactly this point. It brings attention back to the content of the beat and forces you to understand what is happening between clicks instead of simply waiting for the next metronome hit.

## Benny Greb’s Rhythm School and the Rhythmic Alphabet

When musicians talk about the rhythmic alphabet, they usually mean the approach associated with Benny Greb and his system *The Language of Drumming*. The value of this idea is that rhythm stops looking like an endless pile of disconnected exercises. Instead, it becomes a limited but highly useful vocabulary.

The core idea is that different ways of filling a beat can be treated as separate "letters.” Once you have those units in front of your eyes and in your ears, they become much easier to work with. You can speak them, clap them, combine them, transfer them to different instruments, and connect them into longer phrases. Rhythm starts to feel like a language rather than a random set of patterns.

That is exactly why the idea has taken hold so well. It gives the musician not just exercises, but a way of thinking. And that is always more valuable than a random list of patterns you simply have to memorize.

## Why This Idea Resonated So Strongly with Guitarists

Although Benny Greb’s system comes from a drumming context, it feels surprisingly natural for guitarists. The reason is simple: rhythm guitar is shaped not only by note choice and chord voicings, but by how the beat is actually felt. The same chords can sound completely different depending on rhythm, note length, and the placement of accents.

That is why many guitarists saw the rhythmic alphabet not as some "drummer thing," but as a practical way to organize the picking hand and the internal count. On YouTube, guitar educators regularly bring up this topic: they recommend speaking rhythmic patterns, clapping them, and resisting the urge to move too quickly into more complex textures. The same advice comes up again and again in guitar chats whenever the conversation turns to timing and pulse.

On paper, that approach sounds almost too simple. But that simplicity is exactly why it works. First hear it. Then say it. Then clap it. Then play it. For many musicians, that sequence does more for their timing than trying to fix rhythm through playing against a click alone.

## Popov’s Rhythm Generator and the Similarity of Approach

For Russian-speaking guitarists, the idea of the rhythmic alphabet often resonates for another reason as well: it feels close to the logic of a rhythm generator familiar from Sergey Popov’s book *Musical and Fingering Thinking of the Guitarist*.

It is important not to confuse direct equivalence with methodological similarity. Benny Greb’s rhythmic alphabet and Popov’s rhythm generator are not literally the same system. But the underlying logic is indeed similar. In both cases, rhythm is taken out of the realm of vague feeling and moved into the realm of conscious construction. Instead of hearing the abstract advice "be more rhythmic, " the musician gets a limited set of elements that can be combined into useful practice material.

For guitarists, this matters because it fits naturally with the pattern-based way they already tend to think. You see structure instead of chaos. You work with combinations instead of vague impressions. In that sense, the rhythm trainer continues a musical logic that already makes sense to many guitarists and makes it easier to use in regular practice.

## Who This Tool Is For

First of all, it is useful for beginner guitarists who still find it hard to feel the internal pulse inside the beat. But it is not limited to beginners.

More advanced players can benefit from it too. Quite often the hands already know a lot, while the timing is still uneven in the details. In that situation, the tool helps not with "starting from zero, " but with cleaning up and tightening the playing.

It is also useful for teachers. Instead of saying, "your rhythm is drifting", they can give a specific rhythmic cell, a specific order of actions, and a clear practice path for homework.

## What Problems It Solves

The main problem a rhythm trainer solves is the lack of a clear internal pulse. In practice, though, that issue shows up in several familiar ways.

A guitarist may struggle to hold pauses. Sixteenth-note subdivision may feel unstable. A strumming pattern may fall apart even though the chord changes have already been learned. Or everything may seem fine under the metronome, only for the rhythm to drift the moment the click disappears.

In all of these cases, the problem is often not speed or technique as such. More often, it is that the beat is not being felt from the inside. That is the layer a rhythm trainer helps you work on.

## How It Works in Practice

The point of the trainer is not the number of possible combinations, but the order of actions. First the rhythm has to become clear to the ear and the body. Then it has to become clear to the hands. Only after that does it become usable musical material.

The basic sequence is very simple:

1. see the rhythmic cell;
2. say it out loud;
3. clap or tap it without the instrument;
4. transfer it to a simple hand movement;
5. play it on the guitar in the simplest possible texture.

If you skip the first steps, a familiar illusion appears. The pattern seems clear until you discover that the hand is relying only on visual support and falls apart as soon as the task becomes slightly more complex. The trainer helps remove that problem and build a real foundation.

## Why It Is Especially Convenient Inside Six Strings App

Within the context of Six Strings App, the value of the rhythm trainer lies not only in the idea of rhythmic cells itself, but also in the fact that it is part of a broader practice system.

If all you want is to strengthen your inner pulse, you can begin with the basic cells and avoid unnecessary complexity. If later you want more variety, the natural next step is the Rhythm Generator. And if your goal is to lock that stability into a fixed tempo or a progressive tempo workout, the Metronome is already there as well.

That kind of path reduces friction between theory and actual practice. You do not have to look for disconnected tools in different places. Everything is organized into one clear workflow built around a single musical task: developing rhythm not in isolation, but as part of a musician’s daily practice.

## How to Start Using It

The best way to begin is with the simplest possible version of the exercise. There is no need to rush through a large number of patterns or push the tempo to the limit.

Choose one cell, set a moderate tempo, and spend a few minutes with that one pattern only. First without the guitar. Then with a simple hand motion. Only after that move to muted strings or a single open string.

That start may feel modest, but it is exactly what gives you a real foundation. Once one rhythmic cell begins to feel stable, it becomes much easier to add speed, accents, and musical context.

## Basic Practice Without the Guitar

Starting without the instrument is not a simplification. It is an important part of the process. When there is no pick, no chord changes, and no extra tasks in your hands, all of your attention can go to the pulse itself.

The simplest way to begin is this: set a moderate tempo, choose one rhythmic cell, and spend a few minutes doing nothing but saying it and clapping it. Do not speed up. Do not decorate it. Do not jump to the next pattern too quickly. The goal is not to "cover more letters, " but to make one letter feel stable from the inside.

It is especially important to pay attention not only to the attacks, but to the pauses as well. Good rhythm is not felt only where you play something. It is felt where you do not lose time in silence. If the pause feels as clear as the sounding note, the exercise is doing its job.

## Basic Practice on Guitar

The next step is to transfer the same pattern to the simplest possible guitar motion. The best starting point is muted strings or a single open string. That keeps the focus on rhythm rather than shifting it to chord changes or the left hand.

At first, one type of motion is enough. For example, a steady strum across muted strings while preserving the chosen rhythmic cell. Once the pattern begins to sound confident, you can add accents, dynamics, and then move it into simple chord material.

What matters is not mixing too many learning tasks at once. If you are fighting a new strumming pattern, a new fingering, chord changes, and an unfamiliar rhythm all at the same time, your brain will almost certainly start hiding the weakest point. That is why it is better to use the rhythm trainer as a separate layer of practice.

## Conclusion

Rhythm is not only the ability to land on the beat against a click. For a guitarist, it also means clearly feeling what happens inside the beat: where the sound begins, where it ends, how a pause is lived through, and what keeps a pattern moving. That is exactly where most problems come from when playing starts to sound "uneven, " a strumming pattern begins to drift, or the groove feels uncertain.

A rhythm trainer is useful because it brings rhythm work back into the realm of concrete practice. Instead of vague advice, it gives you specific material: rhythmic cells you can say, clap, and transfer to the guitar. That approach fits both Benny Greb’s rhythmic alphabet and the more familiar guitar-based habit of thinking in patterns and combinations.

The main value of the tool is not that it shows many options, but that it helps you practice rhythm regularly, simply, and with purpose. If you want to strengthen your inner pulse, the best place to begin is the most basic one: choose a single cell, live through it without the guitar, and then move it into the picking hand. Once that foundation is there, it becomes much easier to move on to more complex patterns, the [Rhythm Generator](/en/rhythm-generator), and practice with the [Metronome](/en/rhythm-metronome).

## FAQ

### What is a rhythm trainer in simple terms?

A rhythm trainer is a tool for practicing internal pulse and rhythmic cells inside the beat. It helps you do more than just play against a click. It helps you feel what is happening between metronome hits.

### How is a rhythm trainer different from a regular metronome?

A metronome mainly provides the external frame of time. A rhythm trainer helps you work on the internal content of the beat: pauses, subdivisions, accents, and rhythmic patterns.

### Is a rhythm trainer suitable for beginners?

Yes. It is especially useful for beginners because it offers clear, repeatable practice without overloading them with complex theory.

### Should I practice without the guitar first?

Yes. When you say and clap the pattern first, it becomes much easier to transfer it to the instrument without unnecessary tension.

### How does the rhythmic alphabet relate to guitar?

Although the rhythmic alphabet comes from drumming practice, it works very well for guitarists too, because it helps develop the picking hand, internal counting, and a stronger sense of pulse in a systematic way.

### Can I use the trainer together with other tools on the site?

Yes. After basic work with rhythmic cells, the natural next step is to use the [Rhythm Generator](/en/rhythm-generator) for new ideas and the [Metronome](/en/rhythm-metronome) to lock that stability into tempo.

## Related Tools

- [Rhythm Trainer](/en/rhythm-trainer)
- [Rhythm Generator](/en/rhythm-generator)
- [Metronome](/en/rhythm-metronome)
`,_w=`\uFEFF---\r
post_id: why-i-created-this-site\r
slug: why-i-created-this-site\r
title: "Why I Created Six Strings App: From Personal Practice to an Open Project for Musicians"\r
description: "The story behind Six Strings App: how a personal project for rhythm, fretboard, chords, scales, harmony, and ear training grew into an open platform for musicians."\r
keywords: "six strings app, website for guitarists, website for musicians, online music tools, guitar tools, guitar music theory, rhythm training for guitarists, guitar chords, guitar scales, harmony for musicians, ear training, rhythm practice, fretboard training, app for musicians, learn music online"\r
tags: Six Strings App\r
date: 2026-03-31\r
intro: "Six Strings App started as a personal need to understand music more deeply through practice. I built these tools for myself first, to get better at rhythm, fretboard navigation, chords, scales, harmony, and ear training, and later decided to open them to all musicians."\r
cta_path: /\r
cta_label: Six Strings App\r
cover_image: cover.png\r
draft: false\r
---\r
\r
## Why I Created Six Strings App\r
\r
Music websites and apps often fall into two categories. Some provide dry theory that is hard to apply right away. Others offer useful tools, but do not always help you understand how to integrate them into real practice, improvisation, ear training, or songwriting.\r
\r
Six Strings App came from a very personal need. At first, I did not build it as a business idea or as an attempt to put "everything for musicians" in one place. I built it primarily for myself, to better understand what I was studying, strengthen my own knowledge, and make my practice more intentional.\r
\r
When you learn music yourself, you quickly run into the same problem: knowledge exists in separate fragments. In one place, you read about intervals. Somewhere else, you look at chord shapes. In another place, you try to understand which scales fit a specific chord. Rhythm is separate. Ear training is separate. Harmony is separate. But in real music, none of this exists in isolation. Everything works together.\r
\r
That is exactly where Six Strings App came from: an attempt to bring tools together in one place, so you do not just read about music, but also see it, hear it, test it, and apply it in practice.\r
\r
## How It Started\r
\r
It has always been important for me not just to memorize information, but to actually understand it. Not to know a formula "on paper," but to feel how it works by ear, on the fretboard, in rhythm, in chord progressions, in real songs, and in exercises.\r
\r
But during practice, I kept running into familiar difficulties.\r
\r
Sometimes I wanted to quickly see all usable positions of a chord on the fretboard instead of searching through scattered diagrams. Sometimes it was unclear which scale made musical sense over a given chord, and why. Sometimes key and harmonic function theory looked clear in abstraction, but fell apart the moment I tried to apply it in my own progression. Sometimes a regular metronome was not enough, because the issue was not just "hitting the click" but feeling a deeper internal pulse.\r
\r
In many ways, Six Strings App became my way of solving these problems by building my own tools. When you design and build something yourself, you have to think much deeper. Surface-level understanding is not enough. You need to understand what exactly you want to show a musician, what problem they are solving, where they usually get confused, and what helps them take the next step.\r
\r
In essence, this site became my way of learning through development.\r
\r
## Why I Opened the Project to Everyone\r
\r
At first, it was a very personal working toolkit, something that helped me learn, test ideas, navigate theory faster, and keep a connection between knowledge and practice.\r
\r
Over time, it became clear that many musicians face the same challenges.\r
\r
Beginners often get lost in terminology and do not know where to start. Intermediate players get stuck in familiar patterns and want a deeper understanding of fretboard logic, rhythm, or harmony. Teachers need visual tools to explain concepts to students. Songwriters and arrangers need to move from idea to workable result faster, without drowning in disconnected charts and tables.\r
\r
At some point, it became obvious that there was no reason to keep all this only for myself. If a tool helped me better understand rhythm, chords, scales, functions, ear connections, or fretboard navigation, it could help others too.\r
\r
That is how Six Strings App gradually stopped being just a personal system and started becoming an open music platform.\r
\r
## What Matters to Me in This Project\r
\r
For me, Six Strings App is not just a set of pages with features. The core idea of the project matters most.\r
\r
I did not want to build yet another reference where you look something up and close the tab. I wanted to build a space where theory is tied to action.\r
\r
- If we are talking about rhythm, it should not only be described, it should be felt in an exercise.\r
- If we are talking about a scale, it should not only be named, it should be seen on the fretboard, connected to a chord, and tried in improvisation.\r
- If we are talking about harmony, it is not enough to list the chords in a key, you need to hear their function, feel the tension and resolution, and try them in your own progression.\r
- If we are talking about ear training, it should not happen in a vacuum, but in a musical context.\r
\r
That is why the project includes different tools for rhythm, fretboard work, chords, scales, harmony, ear training, and compositional thinking. Not because I wanted to "cover everything," but because in real musical practice these things are connected.\r
\r
## How I See Six Strings App\r
\r
I want Six Strings App to be useful to a musician in several roles at once.\r
\r
- As a workspace for daily practice.\r
- As a visual environment for understanding music theory.\r
- As a place to test ideas faster without getting stuck in routine.\r
- As a teaching tool.\r
- As support for people writing music, riffs, melodies, and chord progressions.\r
\r
It is also important to me that the site is not limited to just one familiar model of a six-string guitar in standard tuning. Musicians have different needs: some play bass, some play ukulele, some use alternate tunings, some think in note names, others in intervals. So from the very beginning, I wanted this project to be flexible and practical, not tied to one single scenario.\r
\r
## Why There Is So Much Focus on Practice\r
\r
I do not like studying for the sake of studying. Theory becomes valuable only when it helps you play, hear, compose, analyze, and understand music better.\r
\r
So almost everything in Six Strings App is built around one question: what can a musician do with this knowledge right now?\r
\r
- Not just view a fingering, but find a position that fits their actual task.\r
- Not just see a scale, but understand how it relates to a chord.\r
- Not just turn on a click, but feel pulse more deeply.\r
- Not just identify a chord name, but place it in harmonic context.\r
- Not just read about a function, but hear it in a cadence.\r
\r
I believe this is what many music resources are missing: the transition from information to action.\r
\r
## Who This Site Is For\r
\r
Although the project grew out of my own needs, I see it as useful for very different musicians.\r
\r
- For beginners, as a way to get less confused and find a clear starting point faster.\r
- For progressing players, as a way to deepen understanding of rhythm, fretboard logic, chords, scales, and harmony.\r
- For teachers, as a set of visual tools for explanations and homework.\r
- For songwriters, riff writers, and arrangers, as an environment where ideas can be turned into results faster.\r
- For multi-instrumentalists, as a platform that does not reduce everything to one instrument model.\r
\r
## Where the Project Is Going Next\r
\r
I do not see Six Strings App as a "finished product." For me, it is a living project that evolves with my own questions about music and with users' practical needs.\r
\r
I want it to grow not only in breadth through new tools, but also in depth. More explanations, stronger links between topics, more practical learning paths, more educational materials that help you actually move forward, not just open a page.\r
\r
That is why, alongside the tools, there is now a blog and a future music theory knowledge base. It matters to me that a person can not only use a feature, but also understand why they need it, how to integrate it into practice, and what to study next.\r
\r
## Why I Keep Working on It\r
\r
Probably the most honest reason is simple: I am genuinely interested in music itself and in the process of learning it. And I strongly relate to the idea that useful things are often born from personal practical needs.\r
\r
First, you build something to make things clearer for yourself. Then you realize it can help others too. And over time, a personal project grows into a space you want to share.\r
\r
That is exactly how Six Strings App is evolving for me.\r
\r
## Conclusion\r
\r
Six Strings App began as a way to strengthen my own knowledge and skills: to better understand rhythm, fretboard navigation, chords, scales, harmony, and ear training not as abstract theory but in real musical practice. Over time, it became clear that this need is not unique. Many musicians do not just need more diagrams and definitions. They need a clear environment where they can see, hear, and immediately apply a musical idea.\r
\r
So today, this project is not only my personal learning tool, but also an attempt to make music a little clearer, closer, and more practical for others.\r
\r
If this approach resonates with you, start with the section that matches your real task right now: rhythm, fretboard, chords, scales, harmony, or ear training. Practice itself will suggest the next step.\r
`;function Dw(i){const r=i.trim();return r.startsWith('"')&&r.endsWith('"')||r.startsWith("'")&&r.endsWith("'")?r.slice(1,-1):r}function tm(i,r){const o=i.replace(/\r\n/g,`
`).replace(/^\uFEFF/,"");if(!o.startsWith(`---
`))throw new Error(`Missing front matter in ${r}`);const s=o.indexOf(`
---
`,4);if(s===-1)throw new Error(`Invalid front matter boundary in ${r}`);const l=o.slice(4,s).trim(),c=o.slice(s+5).trim(),h={};return l.split(`
`).forEach(m=>{const f=m.trim();if(!f||f.startsWith("#"))return;const p=f.match(/^([a-zA-Z0-9_]+):\s*(.*)$/);if(!p)throw new Error(`Invalid front matter line "${m}" in ${r}`);h[p[1]]=Dw(p[2])}),{metadata:h,body:c}}function Ye(i,r,o){const s=i[r];if(!s)throw new Error(`Missing "${r}" in ${o}`);return s}function jw(i){return!i||i==="/"?"/":i.startsWith("/")?i:`/${i}`}function nm(i,r,o,s=!1){const l=i[r];if(l===void 0)return s;const c=l.trim().toLowerCase();if(c==="true")return!0;if(c==="false")return!1;throw new Error(`Invalid "${r}" boolean value in ${o}. Use true or false.`)}function vl(i,r){const o=i[r];return o?o.split(",").map(s=>s.trim()).filter(Boolean):[]}function _e(i){return i.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function Lw(i){const r=i.trim();return r.startsWith("/")||r.startsWith("http://")||r.startsWith("https://")?r:"#"}function Vw(i){const r=i.trim();if(/^[a-zA-Z0-9_-]{11}$/.test(r))return r;let o;try{o=new URL(r)}catch{return null}const s=o.hostname.replace(/^www\./i,"").toLowerCase();if(s==="youtu.be"){const l=o.pathname.replace(/^\/+/,"").split("/")[0];return l&&/^[a-zA-Z0-9_-]{11}$/.test(l)?l:null}if(s.endsWith("youtube.com")){if(o.pathname==="/watch"){const c=o.searchParams.get("v");return c&&/^[a-zA-Z0-9_-]{11}$/.test(c)?c:null}const l=o.pathname.split("/").filter(Boolean);if((l[0]==="embed"||l[0]==="shorts")&&l[1]&&/^[a-zA-Z0-9_-]{11}$/.test(l[1]))return l[1]}return null}function mh(i){const r=Vw(i);return r?`<div class="content-youtube"><iframe src="${`https://www.youtube.com/embed/${r}`}" title="YouTube video player" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>`:null}function El(i,r){const o=i.trim();return o?r.resolveMediaUrl?r.resolveMediaUrl(o):r.resolveImageUrl?r.resolveImageUrl(o):o:null}function rm(i){const[r,...o]=i.split("|"),s=r?.trim()??"",l=o.join("|").trim();return{source:s,title:l||null}}function Nw(i){const r=i.match(/(?:^|\|)\s*(code|dsl)\s*=/i);let o=i,s="";if(r&&r.index!==void 0){const E=r.index+r[0].length;o=i.slice(0,r.index),s=i.slice(E).trim()}const l=o.split("|").map(E=>E.trim()).filter(Boolean);let c="",h=s,m=null,f="treble",p="4/4",y="",w=680,v="easy";return l.forEach(E=>{const _=E.match(/^([a-z][a-z0-9_-]*)\s*=\s*(.+)$/i);if(_){const D=_[1].trim().toLowerCase(),P=_[2].trim();if(D==="notes"||D==="score"||D==="music"){c=P;return}if(D==="code"||D==="dsl"){if(s)return;h=P;return}if(D==="title"||D==="caption"){m=P||null;return}if(D==="clef"){f=P||f;return}if(D==="time"){p=P||p;return}if(D==="key"){y=P;return}if(D==="width"){const F=Number.parseInt(P,10);Number.isFinite(F)&&(w=Math.min(1200,Math.max(320,F)));return}D==="format"&&(v=P||v);return}if(!c){c=E;return}m||(m=E)}),!c&&!h?null:{notes:c,code:h,title:m,clef:f,time:p,key:y,width:w,format:v}}function Rw(i,r){const{source:o,title:s}=rm(i),l=El(o,r);return l?`<figure class="content-audio-example">${s?`<figcaption class="content-example-caption">${_e(s)}</figcaption>`:""}<audio controls preload="none" src="${_e(l)}">Your browser does not support the audio element.</audio></figure>`:null}function fh(i,r,o){const{source:s,title:l}=rm(r),c=El(s,o);if(!c)return null;const m=l||(i==="notation"?"Notation example":"Tab example");return`<figure class="content-score-example content-score-${i}"><img class="content-score-image" src="${_e(c)}" alt="${_e(m)}" loading="lazy" decoding="async" />${l?`<figcaption class="content-example-caption">${_e(l)}</figcaption>`:""}</figure>`}function Ow(i){const r=i.match(/(?:^|\|)\s*(code|vextab)\s*=/i);let o=i,s="";if(r&&r.index!==void 0){const E=r.index+r[0].length;o=i.slice(0,r.index),s=i.slice(E).trim()}const l=o.split("|").map(E=>E.trim()).filter(Boolean);let c="",h=s,m=null,f=760,p="";l.forEach(E=>{const _=E.match(/^([a-z][a-z0-9_-]*)\s*=\s*(.+)$/i);if(_){const D=_[1].trim().toLowerCase(),P=_[2].trim();if(D==="title"||D==="caption"){m=P||null;return}if(D==="code"||D==="vextab"){if(s)return;h=P;return}if(D==="source"||D==="src"){c=P;return}if(D==="format"){p=P.toLowerCase();return}if(D==="width"){const F=Number.parseInt(P,10);Number.isFinite(F)&&(f=Math.min(1200,Math.max(320,F)))}return}if(!c){c=E;return}m||(m=E)});const y=c.trim(),w=(h||y).trim();return!(p==="vextab"||p==="vf-tab"||/^tabstave\b/i.test(w)||/^notes\b/i.test(w)||w.includes("\\n"))||!w?null:{code:w,title:m,width:f,format:p||"vextab"}}function Fw(i){const r=Ow(i);if(!r)return null;const o=r.title||"Tab notation example";return`<figure class="content-tab-example">${r.title?`<figcaption class="content-example-caption">${_e(r.title)}</figcaption>`:""}<div class="content-tab-canvas" data-tab-code="${_e(r.code)}" data-tab-width="${r.width}" data-tab-format="${_e(r.format)}" role="img" aria-label="${_e(o)}"></div></figure>`}function zw(i){const r=Nw(i);if(!r)return null;const o=r.title||"Staff notation example";return`<figure class="content-staff-example">${r.title?`<figcaption class="content-example-caption">${_e(r.title)}</figcaption>`:""}<div class="content-staff-canvas" data-staff-notes="${_e(r.notes)}" data-staff-code="${_e(r.code)}" data-staff-clef="${_e(r.clef)}" data-staff-time="${_e(r.time)}" data-staff-key="${_e(r.key)}" data-staff-width="${r.width}" data-staff-format="${_e(r.format)}" role="img" aria-label="${_e(o)}"></div></figure>`}function Bw(i){const[r,...o]=i.split("|"),s=r?.trim()??"",l=o.join("|").trim();return{message:s,title:l||null}}function $w(i,r){const{message:o,title:s}=Bw(i);return o?`<div class="content-callout content-callout-warning"><p class="content-callout-title">&#9888; ${Hn(s??"Attention",r)}</p><p>${Hn(o,r)}</p></div>`:null}function Hn(i,r){const o=[],s=h=>{const m=`@@CONTENT_TOKEN_${o.length}@@`;return o.push(h),m};let l=i;l=l.replace(/!\[([^\]]*)\]\(([^)]+)\)/g,(h,m,f)=>{const p=El(f.trim(),r);return p?s(`<img class="content-image" src="${_e(p)}" alt="${_e(m.trim())}" loading="lazy" decoding="async" />`):""}),l=l.replace(/\[([^\]]+)\]\(([^)]+)\)/g,(h,m,f)=>s(`<a href="${_e(Lw(f))}">${_e(m)}</a>`));let c=_e(l);return c=c.replace(/`([^`]+)`/g,"<code>$1</code>"),c=c.replace(/\*\*([^*]+)\*\*/g,"<strong>$1</strong>"),c=c.replace(/\*([^*]+)\*/g,"<em>$1</em>"),o.forEach((h,m)=>{c=c.split(`@@CONTENT_TOKEN_${m}@@`).join(h)}),c}function Hi(i){let r=i.trim();return r.startsWith("|")&&(r=r.slice(1)),r.endsWith("|")&&(r=r.slice(0,-1)),r.split("|").map(o=>o.trim())}function Gw(i){const r=Hi(i);return r.length<2?!1:r.every(o=>/^:?-+:?$/.test(o))}function Hw(i){return Hi(i).map(r=>{const o=r.startsWith(":"),s=r.endsWith(":");return o&&s?"center":s?"right":o?"left":null})}function Ww(i,r,o,s){const l=i.length,c=o.map(p=>Array.from({length:l},(y,w)=>p[w]??"")),h=p=>{const y=r[p];return y?` style="text-align:${y}"`:""},m=`<thead><tr>${i.map((p,y)=>`<th${h(y)}>${Hn(p,s)}</th>`).join("")}</tr></thead>`,f=c.length>0?`<tbody>${c.map(p=>`<tr>${p.map((y,w)=>`<td${h(w)}>${Hn(y,s)}</td>`).join("")}</tr>`).join("")}</tbody>`:"";return`<table>${m}${f}</table>`}function om(i,r={}){const o=i.replace(/\r\n/g,`
`).split(`
`),s=[];let l=[],c=[],h=null,m=!1,f=[];const p=()=>{l.length>0&&(s.push(`<p>${Hn(l.join(" "),r)}</p>`),l=[])},y=()=>{if(!h||c.length===0){c=[],h=null;return}s.push(`<${h}>${c.map(v=>`<li>${Hn(v,r)}</li>`).join("")}</${h}>`),c=[],h=null},w=()=>{f.length>0&&(s.push(`<pre><code>${_e(f.join(`
`))}</code></pre>`),f=[])};for(let v=0;v<o.length;v+=1){const E=o[v];if(E.trim().startsWith("```")){p(),y(),m?(w(),m=!1):m=!0;continue}if(m){f.push(E);continue}const _=E.trim();if(!_){p(),y();continue}const D=_.match(/^\{\{\s*youtube\s*:\s*(.+?)\s*\}\}$/i);if(D){const re=mh(D[1]);if(re){p(),y(),s.push(re);continue}}const P=_.match(/^\{\{\s*audio\s*:\s*(.+?)\s*\}\}$/i);if(P){const re=Rw(P[1],r);if(re){p(),y(),s.push(re);continue}}const F=_.match(/^\{\{\s*(notation|tab|tablature)\s*:\s*(.+?)\s*\}\}$/i);if(F){const ve=(F[1].toLowerCase()==="notation"?"notation":"tab")==="tab"?Fw(F[2])??fh("tab",F[2],r):fh("notation",F[2],r);if(ve){p(),y(),s.push(ve);continue}}const $=_.match(/^\{\{\s*staff\s*:\s*(.+?)\s*\}\}$/i);if($){const re=zw($[1]);if(re){p(),y(),s.push(re);continue}}const q=_.match(/^\{\{\s*attention\s*:\s*(.+?)\s*\}\}$/i);if(q){const re=$w(q[1],r);if(re){p(),y(),s.push(re);continue}}if(/^https?:\/\/\S+$/i.test(_)){const re=mh(_);if(re){p(),y(),s.push(re);continue}}const z=o[v+1];if(_.includes("|")&&z&&Gw(z)){const re=Hi(_);if(re.length>=2){const ve=Hw(z),je=[];let me=v+2;for(;me<o.length;){const xe=o[me].trim();if(!xe||!xe.includes("|"))break;je.push(Hi(xe)),me+=1}p(),y(),s.push(Ww(re,ve,je,r)),v=me-1;continue}}const H=_.match(/^(#{1,6})\s+(.+)$/);if(H){p(),y();const re=H[1].length;s.push(`<h${re}>${Hn(H[2].trim(),r)}</h${re}>`);continue}const ee=_.match(/^[-*]\s+(.+)$/);if(ee){p(),h!=="ul"&&(y(),h="ul"),c.push(ee[1].trim());continue}const he=_.match(/^\d+\.\s+(.+)$/);if(he){p(),h!=="ol"&&(y(),h="ol"),c.push(he[1].trim());continue}l.push(_)}return p(),y(),w(),s.join(`
`)}function ph(i){return i.replace(/!\[([^\]]*)\]\(([^)]+)\)/g,"$1").replace(/\[([^\]]+)\]\(([^)]+)\)/g,"$1").replace(/`([^`]+)`/g,"$1").replace(/\*\*([^*]+)\*\*/g,"$1").replace(/\*([^*]+)\*/g,"$1").replace(/#+\s*/g,"").replace(/\{\{\s*youtube\s*:\s*.+?\}\}/gi,"YouTube").replace(/\{\{\s*audio\s*:\s*.+?\}\}/gi,"Audio").replace(/\{\{\s*(notation|tab|tablature)\s*:\s*.+?\}\}/gi,"Notation").replace(/\{\{\s*staff\s*:\s*.+?\}\}/gi,"Staff notation").replace(/\{\{\s*attention\s*:\s*.+?\}\}/gi,"Attention").trim()}function im(i){const r=i.replace(/\r\n/g,`
`).split(`
`),o=[];let s=!1,l=null,c=[];const h=()=>{if(!l||c.length===0){l=null,c=[];return}o.push({question:ph(l),answer:ph(c.join(" "))}),l=null,c=[]};return r.forEach(m=>{const f=m.match(/^##\s+(.+)$/);if(f){s&&h();const y=f[1].trim().toLowerCase();s=y.includes("faq")||y.includes("част")||y.includes("вопрос");return}if(!s)return;const p=m.match(/^###\s+(.+)$/);if(p){h(),l=p[1].trim();return}l&&m.trim()&&c.push(m.trim().replace(/^-\s+/,""))}),s&&h(),o}function Uw(i){const r=i.trim();return r.startsWith("/")||r.startsWith("http://")||r.startsWith("https://")}function qw(i){const r=i.trim().replace(/\\/g,"/").replace(/^\.\/+/,"");return!r||r.includes("..")?null:r}function am(i,r,o,s){if(Uw(i))return i.trim();const l=qw(i);return l?`${r}/${o}/${s}/${l}`:null}function sm(i,r,o){return am(i,"/blog-assets",r,o)}const Kw={ru:Object.assign({"../../../content/blog/ru/akkordy-arpedzhio-gammy.md":gw,"../../../content/blog/ru/biblioteka-patternov-boya-dlya-gitary.md":yw,"../../../content/blog/ru/garmoniya-akordy-tonalnosti-kadentsii-modulyatsii.md":vw,"../../../content/blog/ru/kvarto-kvintovyy-krug-tonalnosti-mazhor-minor.md":ww,"../../../content/blog/ru/metronom-dlya-gitaristy-onlajn.md":bw,"../../../content/blog/ru/ritmicheskiy-trenazher-dlya-gitaristov.md":kw,"../../../content/blog/ru/sistema-caged-na-gitare.md":Sw,"../../../content/blog/ru/zachem-ja-sdelal-etot-sait.md":Iw}),en:Object.assign({"../../../content/blog/en/caged-guitar-system.md":xw,"../../../content/blog/en/chords-arpeggios-scales.md":Tw,"../../../content/blog/en/circle-of-fifths-keys-major-minor.md":Cw,"../../../content/blog/en/guitar-strumming-pattern-library.md":Ew,"../../../content/blog/en/harmony-key-chords-cadences-modulations.md":Pw,"../../../content/blog/en/online-metronome-for-guitar-practice.md":Mw,"../../../content/blog/en/rhythm-trainer-for-guitarists.md":Aw,"../../../content/blog/en/why-i-created-this-site.md":_w})},Yw={ru:"Открыть инструмент бесплатно",en:"Open the tool for free"};function Sn(i){return i.trim().toLowerCase().replace(/\s+/g,"-")}function Qw(i,r,o){const{metadata:s,body:l}=tm(o,r),c=Ye(s,"date",r);if(!/^\d{4}-\d{2}-\d{2}$/.test(c))throw new Error(`Invalid date format in ${r}. Use YYYY-MM-DD`);const h=Ye(s,"slug",r),m=s.cover_image?.trim(),f=m?sm(m,i,h):null;if(m&&!f)throw new Error(`Invalid cover_image value in ${r}`);return{postId:Ye(s,"post_id",r),language:i,slug:h,title:Ye(s,"title",r),description:Ye(s,"description",r),keywords:Ye(s,"keywords",r),date:c,intro:Ye(s,"intro",r),ctaPath:jw(Ye(s,"cta_path",r)),ctaLabel:s.cta_label||Yw[i],isDraft:nm(s,"draft",r,!1),tags:vl(s,"tags"),coverImageUrl:f,bodyMarkdown:l}}function gh(i){const r=Kw[i];return Object.entries(r).map(([o,s])=>Qw(i,o,s))}function Jw(i){const r=new Map;i.forEach(s=>{const l=r.get(s.postId)??{};l[s.language]=s,r.set(s.postId,l)});const o=[];return r.forEach((s,l)=>{if(!s.ru||!s.en)throw new Error(`Blog post "${l}" must have both ru and en versions`);if(s.ru.isDraft!==s.en.isDraft)throw new Error(`Blog post "${l}" must have same draft value in ru and en`);o.push({postId:l,ru:s.ru,en:s.en})}),o.sort((s,l)=>{const c=l.ru.date.localeCompare(s.ru.date);return c!==0?c:s.postId.localeCompare(l.postId)}),o}function yh(i,r){const o=new Map;return i.forEach(s=>{s.tags.forEach(l=>{const c=l.trim();if(!c)return;const h=Sn(c),m=o.get(h);if(m){m.count+=1;return}o.set(h,{slug:h,label:c,count:1,path:ib(r,h)})})}),[...o.values()].sort((s,l)=>l.count!==s.count?l.count-s.count:s.label.localeCompare(l.label))}function Xw(i,r,o,s,l){if(!s||!l)return!1;const c=i[r].get(s);if(c&&c!==l)return!1;const h=i[o].get(l);return h&&h!==s?!1:(i[r].set(s,l),i[o].set(l,s),!0)}function Zw(i){const r={ru:new Map,en:new Map};return i.forEach(o=>{const s=Math.min(o.ru.tags.length,o.en.tags.length);for(let l=0;l<s;l+=1)Xw(r,"ru","en",Sn(o.ru.tags[l]),Sn(o.en.tags[l]))}),r}function eb(i,r){return Sn(i)===Sn(r)}function tb(){const i=[...gh("ru"),...gh("en")],o=Jw(i).filter(m=>!m.ru.isDraft&&!m.en.isDraft),s={ru:[],en:[]},l={ru:new Map,en:new Map},c=new Map,h=Zw(o);return o.forEach(m=>{const f={ru:Qe(`/ru/blog/${m.ru.slug}`),en:Qe(`/en/blog/${m.en.slug}`)};["ru","en"].forEach(p=>{const y=m[p],w={postId:y.postId,language:p,slug:y.slug,title:y.title,description:y.description,keywords:y.keywords,date:y.date,intro:y.intro,ctaPath:y.ctaPath,ctaLabel:y.ctaLabel,isDraft:y.isDraft,tags:y.tags,coverImageUrl:y.coverImageUrl,bodyHtml:om(y.bodyMarkdown,{resolveMediaUrl:v=>sm(v,p,y.slug)}),faq:im(y.bodyMarkdown),previousPost:null,nextPost:null,canonicalPath:f[p],alternates:f,xDefaultPath:f[kn]};s[p].push(w),l[p].set(w.slug,w),c.set(w.slug,w.canonicalPath)})}),s.ru.sort((m,f)=>f.date.localeCompare(m.date)),s.en.sort((m,f)=>f.date.localeCompare(m.date)),["ru","en"].forEach(m=>{const f=s[m];f.forEach((p,y)=>{const w=y>0?f[y-1]:null,v=y<f.length-1?f[y+1]:null;p.previousPost=w?{title:w.title,path:w.canonicalPath}:null,p.nextPost=v?{title:v.title,path:v.canonicalPath}:null})}),{byLanguage:s,bySlug:l,byAnySlug:c,tagsByLanguage:{ru:yh(s.ru,"ru"),en:yh(s.en,"en")},tagAlternates:h}}const Tr=tb();function Kk(i){return Tr.byLanguage[i]}function nb(i,r){return Tr.bySlug[i].get(r)??null}function rb(i,r,o){if(!wt(i)||!wt(o))return null;const s=nb(i,r);return s?s.alternates[o]??null:null}function ob(i,r,o){if(!wt(i)||!wt(o))return null;const s=Sn(r),l=Tr.tagAlternates[i].get(s)??s,c=ab(o,l);return c?c.path:null}function Yk(i){return Qe(Ue("/blog",i))}function ib(i,r){return Qe(Ue(`/blog/tag/${encodeURIComponent(r)}`,i))}function ab(i,r){const o=Sn(r);return Tr.tagsByLanguage[i].find(s=>Sn(s.slug)===o)??null}function Qk(i,r){return Tr.byLanguage[i].filter(o=>o.tags.some(s=>eb(s,r)))}function Jk(i){return Tr.byAnySlug.get(i)??null}const sb=`---
post_id: what-is-a-note
slug: chto-takoe-nota
title: "Что такое нота в музыке"
description: "Простое объяснение ноты: чем нота отличается от звука, зачем нужны названия нот и как увидеть ноты на гитарном грифе."
keywords: "что такое нота, нота в музыке, названия нот, музыкальная теория с нуля"
categories: Основы, Ноты
tags: нота, звук, гриф, основы
date: 2026-04-29
intro: "Нота помогает музыкантам называть и повторять звуки. Сначала мы слышим звук, а потом даём ему имя, место и длительность."
reader_level: listener
cover_image: cover.png
draft: false
---
## Что такое нота в музыке

Нота — это музыкальное имя звука. Она помогает назвать звук, записать его, найти на инструменте и повторить позже.

Сначала всегда есть сам звук. Струна колеблется, воздух движется, ухо это слышит. Потом музыкант может сказать: «Это E», «Это A» или «Это до». Название не заменяет звук, но помогает с ним работать.

Простой пример — открытая первая струна гитары в стандартном строе. Вы дёргаете струну и слышите звук. Если назвать его E, вы уже можете найти этот звук снова, показать его другому музыканту или записать в упражнении.

Звук и нота связаны, но это не одно и то же.

Звук — то, что реально прозвучало. Нота — способ назвать или записать этот звук. Это похоже на предмет и его название: можно увидеть чашку, а можно произнести слово «чашка». Предмет и слово связаны, но они не совпадают.

В музыке эта разница нужна с самого начала. Звук можно услышать. Ноту можно назвать, записать, найти на грифе или сыграть на другом инструменте. Один и тот же звук можно описать по-разному: названием ноты, высотой, длительностью, громкостью или местом в ритме.

Если это пока путается, лучше вернуться на шаг назад и прочитать статью [«Что такое звук в музыке»](/ru/theory/chto-takoe-zvuk-v-muzyke/). Там разбирается основа: музыка начинается со звука, тишины и времени между ними.

Ноты нужны не для того, чтобы усложнить музыку. Они нужны, чтобы музыканты могли договориться.

Без названий пришлось бы объяснять всё приблизительно: «сыграй тот высокий звук после низкого», «возьми струну где-то здесь», «повтори звук, который был в начале». Иногда этого достаточно, но для обучения, разбора песен и игры с другими музыкантами такой способ быстро становится неудобным.

С названиями проще: сыграйте E, потом G, затем A; удержите первую ноту дольше; поднимите мелодию на октаву; найдите такую же ноту на другой струне. Название превращает звук в точку, к которой можно вернуться.

Новички часто думают, что нота — это только чёрный знак на нотном стане. Это лишь один способ записи. Нота может выглядеть как буква C, D или E, как русское название до, ре или ми, как клавиша на пианино, как позиция на грифе, как цифра в табулатуре или как знак в нотной записи.

На первом этапе не нужно сразу читать сложные партитуры. Достаточно понять главное: нота — это имя звука. Нотная запись, табулатура и схемы на грифе — разные способы показать, какой звук нужен.

## Мини-пример: нота в стане и на гитаре

{{staff: notes=E4/q, F4, G4, A4 | title=Ноты E–F–G–A в нотной записи | clef=treble | time=4/4 | key=C}}

{{tab: format=vextab | title=Те же ноты на первой струне | code=tabstave notation=true key=C time=4/4\\nnotes :q 0/1 1/1 3/1 5/1}}

Проще всего увидеть ноты на гитаре через открытые струны. В стандартном строе они называются так, от шестой струны к первой: E, A, D, G, B, E.

Каждая открытая струна даёт реальный звук. У каждого звука есть имя. Поэтому гриф можно представить как карту: на ней одни и те же названия повторяются в разных местах и октавах.

Откройте [исследователь грифа](/ru/scales-fretboard-explorer/), выберите стандартный строй и найдите открытые струны. Не пытайтесь сразу запомнить весь гриф. Для начала достаточно связать шесть открытых струн с их названиями.

На гитаре одна и та же нота часто встречается в разных местах. Например, E можно сыграть открытой первой струной, открытой шестой струной и ещё в нескольких позициях на грифе. Это не ошибка. Гитара устроена так, что звуки повторяются в разных октавах и на разных струнах.

Позже это поможет выбирать удобные аппликатуры, строить аккорды и видеть гаммы. Пока важно запомнить простую мысль: место на грифе и название ноты связаны, но не совпадают полностью.

## Упражнение на 5 минут

1. Сыграйте открытую первую струну.
2. Назовите её: E.
3. Сыграйте открытую вторую струну.
4. Назовите её: B.
5. Пройдите все открытые струны от шестой к первой: E, A, D, G, B, E.
6. Повторите названия без гитары.

Главная цель — связать реальный звук струны с названием ноты.

## Частая путаница

Нота и струна — не одно и то же. Струна — часть инструмента. Нота — имя звука. Одна струна может давать разные ноты на разных ладах.

Не нужно сразу учить все ноты на грифе. Начните с открытых струн, потом добавляйте ноты небольшими участками.

Играть без знания нот можно. Но знание нот ускоряет разбор музыки, подбор мелодий, понимание аккордов и общение с другими музыкантами.

## Что изучать дальше

После этой статьи логично перейти к соседним темам:

- [«Названия нот: до, ре, ми и C, D, E»](/ru/theory/nazvaniya-not-do-re-mi-i-c-d-e/);
- [«Что такое высота звука»](/ru/theory/chto-takoe-vysota-zvuka/);
- [«Что такое звук в музыке»](/ru/theory/chto-takoe-zvuk-v-muzyke/).

Главная мысль: нота — это не сам звук, а способ его назвать и организовать. Когда вы слышите струну, вы слышите звук. Когда называете её E, A или D, вы используете ноту как музыкальное имя.`,lb=`---
post_id: musical-pulse
slug: chto-takoe-puls-v-muzyke
title: "Что такое пульс в музыке"
description: "Простое объяснение музыкального пульса: как почувствовать ровную опору времени, чем пульс отличается от ритма и темпа."
keywords: "что такое пульс в музыке, музыкальный пульс, ритм и пульс, метроном"
categories: Основы, Ритм
tags: пульс, ритм, темп, метроном
date: 2026-05-04
intro: "Пульс - это ровная внутренняя опора музыки. Под него удобно считать, качать ногой, играть ритм и не терять время."
reader_level: player
cover_image: cover.png
draft: false
---

## Что такое пульс в музыке

Пульс в музыке — это равномерное ощущение ударов во времени.

Когда вы слушаете песню и начинаете качать ногой, вы чаще всего чувствуете именно пульс. Он может не звучать явно отдельным инструментом, но тело всё равно находит регулярную опору.

Пульс похож на шаги. Ритм может быть сложным: с паузами, акцентами, короткими и длинными звуками. А пульс продолжает идти ровно, как внутренняя сетка времени.

Перед этой темой полезно прочитать статью [«Что такое ритм в музыке»](/ru/theory/chto-takoe-ritm-v-muzyke/). Там ритм объясняется как порядок звуков и пауз во времени. Пульс помогает этому порядку не развалиться.

Ритм и пульс — не одно и то же.

Ритм — это рисунок звуков и пауз. Пульс — ровная опора, на которую этот рисунок ложится. Например, вы считаете: «раз, два, три, четыре». Это пульс. А если хлопаете на «раз», молчите на «два», хлопаете на «три» и «четыре», это уже ритмический рисунок.

Можно представить так: пульс — это шаг, а ритм — фраза, которую вы произносите во время движения. Шаг остаётся ровным, а фраза может быть простой, сложной, с паузами или акцентами.

Пульс также отличается от темпа. Пульс — это сами ровные удары. Темп — скорость этих ударов.

Если метроном щёлкает 60 раз в минуту, пульс медленный. Если 120 раз в минуту — быстрый. В обоих случаях пульс остаётся ровной опорой, меняется только скорость. Следующая тема про темп объяснит это подробнее. Пока достаточно знать: пульс — это ровные удары, а темп — их скорость.

Проще всего почувствовать пульс с метрономом. Откройте [метроном](/ru/rhythm-metronome/) и поставьте 80 BPM. Сначала ничего не играйте. Просто слушайте и считайте: «раз, два, три, четыре». Потом начните слегка качать ногой на каждый щелчок.

Физическое движение помогает телу удерживать пульс стабильнее, чем один только счёт в голове. Поэтому музыканты часто качают ногой, двигают корпусом или слегка кивают в такт.

## Мини-пример ровного пульса

{{staff: notes=E4/q, E4, E4, E4 | title=Четыре ровные доли пульса | clef=treble | time=4/4 | key=C}}

{{tab: format=vextab | title=Тот же пульс на одной струне | code=tabstave notation=true key=C time=4/4\\nnotes :q 0/6 0/6 0/6 0/6}}

Гитаристу пульс нужен постоянно. Он помогает не ускоряться в лёгких местах, не замедляться в сложных, попадать в акценты, играть вместе с барабанами и басом, держать ровный бой или перебор и понимать, где начинается новый такт.

Если пульс теряется, даже правильные аккорды начинают звучать неуверенно. Музыкант вроде бы играет нужные звуки, но они не попадают в общее движение.

Метроном помогает тренироваться, но цель не в том, чтобы всегда зависеть от щелчка. Хороший навык — слышать пульс внутри. Тогда вы можете держать время в паузах, длинных нотах и местах, где никто не играет ровные удары.

Паузы особенно полезны для тренировки. Когда вы не хлопаете и не играете, пульс всё равно должен продолжаться в голове и теле. Следующий звук покажет, удержали вы время или потеряли его.

## Упражнение на 5 минут

1. Включите метроном на 70 BPM.
2. Считайте вслух: «раз, два, три, четыре».
3. Хлопайте на каждый щелчок одну минуту.
4. Потом хлопайте только на «раз».
5. Между хлопками продолжайте качать ногой.
6. Проверьте, попадаете ли следующий «раз» точно в щелчок.

Главная цель — почувствовать, что пульс продолжается даже там, где вы не хлопаете.

## Частая путаница

Пульс — это не ритм. Пульс ровный. Ритм может быть с паузами, синкопами, акцентами и разными длительностями.

Пульс не всегда явно звучит в барабанах. Иногда его играет барабан или бас, а иногда он только ощущается внутри музыки.

Пульс можно тренировать без инструмента. Счёт, хлопки, шаги, качание ногой и метроном подходят для первых тренировок даже без гитары.

## Что изучать дальше

После пульса логично перейти к соседним темам:

* [«Что такое ритм в музыке»](/ru/theory/chto-takoe-ritm-v-muzyke/);

Главная мысль: пульс — ровная опора музыкального времени. Он помогает ритму не разваливаться, держит музыкантов вместе и даёт телу ощущение движения.
`,ub=`---
post_id: rhythm-basics
slug: chto-takoe-ritm-v-muzyke
title: "Что такое ритм в музыке"
description: "Простое объяснение ритма: как звуки и паузы располагаются во времени, чем ритм отличается от темпа и как потренироваться."
keywords: "что такое ритм, ритм в музыке, основы ритма, ритм для гитары"
categories: Основы, Ритм
tags: ритм, пульс, пауза, метроном
date: 2026-05-03
intro: "Ритм появляется, когда звуки и паузы получают порядок во времени. Это основа хлопков, боёв, риффов, мелодий и аккомпанемента."
reader_level: player
cover_image: cover.png
draft: false
---

## Что такое ритм в музыке

Ритм — это порядок звуков и пауз во времени.

Если хлопать случайно, получится просто набор звуков. Если хлопать по повторяющемуся рисунку, появляется ритм. Мозг начинает слышать не отдельные хлопки, а связь между ними: где звук появился, где была пауза и когда рисунок повторился.

Ритм не отвечает за высоту нот. Одну и ту же ноту можно сыграть ровными четвертями, короткими ударами, с паузами или с акцентами. Нота останется той же, но музыкальное ощущение изменится.

В статье [«Что такое звук в музыке»](/ru/theory/chto-takoe-zvuk-v-muzyke/) уже была важная мысль: музыка состоит не только из звуков, но и из тишины. Ритм использует оба элемента. Звук становится событием. Пауза создаёт место между событиями. Время связывает всё в понятный рисунок.

Простой пример: хлопок, пауза, хлопок, хлопок. Если этот рисунок повторяется в ровном времени, мы уже воспринимаем его как ритм.

Ритм часто путают с темпом, но это разные вещи. Ритм — это рисунок. Темп — скорость, с которой этот рисунок исполняется.

Один и тот же бой можно сыграть медленно или быстро. Например, рисунок «вниз — вниз-вверх — вверх-вниз» можно играть в 70 BPM или в 120 BPM. Рисунок останется похожим, но ощущение будет другим: в медленном темпе он может звучать спокойно, в быстром — энергичнее.

Чтобы ритм не разваливался, музыкант держит пульс. Пульс — это ровные внутренние удары, под которые удобно считать, хлопать ногой или играть. Если ритм — это рисунок, то пульс — сетка времени, на которой этот рисунок размещается.

Подробно пульс разбирается в следующей статье: [«Что такое пульс в музыке»](/ru/theory/chto-takoe-puls-v-muzyke/).

Попробуйте услышать разницу на практике. Включите [метроном](/ru/rhythm-metronome/). Сначала хлопайте на каждый щелчок. Потом хлопайте через один щелчок. Затем хлопайте два раза подряд и один щелчок пропускайте.

Во всех трёх вариантах время идёт ровно. Меняется только рисунок звуков и пауз. Это и есть работа с ритмом.

## Мини-пример ритма в нотах и табах

{{staff: notes=E4/8, E4/8, E4/q, E4/8, E4/8, E4/q | title=Рисунок 1+1+2+1+1+2 | clef=treble | time=4/4 | key=C}}

{{tab: format=vextab | title=Тот же ритм на открытой шестой струне | code=tabstave notation=true key=C time=4/4\\nnotes :8 0/6 0/6 :q 0/6 :8 0/6 0/6 :q 0/6}}

Гитарист встречает ритм везде: в бое правой рукой, риффах, переборах, паузах между аккордами, акцентах на сильных долях и приглушённых ударах по струнам.

Даже один аккорд может звучать по-разному из-за ритма. Сыграйте его редкими ровными ударами — получится спокойное ощущение. Добавьте короткие удары и паузы — появится движение. Сделайте акценты плотнее — партия может стать танцевальной, тяжёлой или напряжённой.

Поэтому ритм — это не отдельная тема только для барабанщиков. Он нужен вокалисту, гитаристу, басисту, пианисту и любому музыканту, который играет во времени.

## Упражнение на 5 минут

1. Включите метроном на 80 BPM.
2. Считайте вслух: «раз, два, три, четыре».
3. Хлопайте только на «раз».
4. Потом хлопайте на «раз» и «три».
5. Потом хлопайте на «раз, два, три, четыре».
6. Сравните ощущения.

Главная цель — услышать, что ритм меняется, даже если темп остаётся тем же.

## Частая путаница

Ритм — это не скорость. Скорость музыки называется темпом. Ритм — это рисунок звуков и пауз.

Ритм бывает не только у ударных. Он есть у голоса, гитары, баса, мелодии, аккордов и даже пауз.

Не обязательно сразу читать длительности. Сначала научитесь слышать рисунок и держать пульс. После этого длительности будут понятнее.

## Что изучать дальше

После ритма логично перейти к соседним темам:

* [«Что такое пульс в музыке»](/ru/theory/chto-takoe-puls-v-muzyke/);

Главная мысль: ритм — это порядок звуков и пауз во времени. Он отвечает на три простых вопроса: где звучать, где молчать и как этот рисунок повторяется.
`,cb=`---
post_id: tone-and-semitone
slug: chto-takoe-ton-i-poluton
title: "Что такое тон и полутон"
description: "Простое объяснение тона и полутона: как расстояния между нотами работают на гитаре и почему один лад равен полутону."
keywords: "тон и полутон, что такое полутон, расстояние между нотами, теория музыки гитара"
categories: Основы, Интервалы
tags: тон, полутон, гриф, интервалы
date: 2026-05-02
intro: "Тон и полутон описывают маленькие расстояния между звуками. На гитаре это особенно наглядно: один лад - один полутон, два лада - один тон."
reader_level: player
cover_image: cover.png
draft: false
---

## Что такое тон и полутон

Полутон — это маленький шаг между соседними звуками в привычной западной музыкальной системе. Тон — это два полутона.

На гитаре это особенно наглядно. Сдвиг на один лад даёт полутон. Сдвиг на два лада даёт тон.

Например, сыграйте открытую первую струну E, а затем первый лад F. Вы поднялись на полутон. Теперь сыграйте открытую первую струну E, а затем второй лад F#. Вы поднялись на тон.

Здесь слово «тон» означает не звук и не тембр, а расстояние между звуками. Это важно не путать. Нота — это имя звука. Полутон и тон — это расстояния от одного звука до другого.

Если тема высоты ещё не закрепилась, сначала прочитайте статью [«Что такое высота звука»](/ru/theory/chto-takoe-vysota-zvuka/). Тон и полутон продолжают эту идею: мы не просто слышим «выше» и «ниже», а начинаем измерять, насколько звук сдвинулся.

## Мини-пример в нотах и табах

{{staff: notes=E4/q, F4, F#4, G#4 | title=Полутон, полутон и тон вверх | clef=treble | time=4/4 | key=C}}

{{tab: format=vextab | title=Один лад и два лада на первой струне | code=tabstave notation=true key=C time=4/4\\nnotes :q 0/1 1/1 2/1 4/1}}

Возьмите первую струну и сыграйте подряд несколько позиций:

| Позиция         | Нота | Расстояние от предыдущей позиции |
| --------------- | ---- | -------------------------------- |
| открытая струна | E    | —                                |
| 1 лад           | F    | полутон                          |
| 2 лад           | F#   | полутон                          |
| 3 лад           | G    | полутон                          |

Каждый шаг вправо на один лад поднимает звук на полутон. Так гитара превращает теорию в движение по грифу: вы не только слышите расстояние, но и видите его под пальцами.

Тон на грифе — это два лада. Если с E перейти сразу на F#, вы прошли тон. Если с F перейти на G, это тоже тон. Если с G перейти на A, снова тон.

Можно думать так: полутон — соседний лад, тон — лад через один.

В ряду C, D, E, F, G, A, B не все соседние основные ноты находятся на одинаковом расстоянии. Самые важные исключения:

* E–F — полутон;
* B–C — полутон.

Между остальными соседними основными нотами обычно тон:

* C–D;
* D–E;
* F–G;
* G–A;
* A–B.

Эта схема пригодится очень скоро. На ней строится мажорная гамма и многие другие музыкальные конструкции.

Откройте [исследователь грифа](/ru/scales-fretboard-explorer/), выберите стандартный строй и посмотрите на первую струну. Проследите движение: E на открытой струне, F на первом ладу, F# на втором, G на третьем. Слушайте и смотрите одновременно. Так полутон перестаёт быть словом и становится конкретным движением на один лад.

Тон и полутон нужны не ради таблиц. Они помогают понять, почему гаммы звучат именно так, почему мажор отличается от минора, как строятся интервалы и почему один аккорд отличается от другого всего одной нотой.

## Упражнение на 5 минут

1. Выберите любую струну.
2. Сыграйте открытую струну и первый лад.
3. Скажите вслух: «Это полутон».
4. Сыграйте открытую струну и второй лад.
5. Скажите вслух: «Это тон».
6. Повторите то же самое на двух других струнах.

Главная цель — связать полутон с одним ладом, а тон — с двумя ладами.

## Частая путаница

Тон — это не то же самое, что нота. Нота — имя звука. Тон в этой статье — расстояние между двумя звуками.

Полутон не всегда звучит «неприятно». Он может создавать напряжение, но музыка постоянно использует полутоны: в мелодиях, гаммах, аккордах и разрешениях.

На обычной гитаре один лад равен одному полутону. Бенды, слайды, неточная настройка и специальные микрохроматические инструменты могут усложнить картину, но базовое правило для грифа остаётся рабочим: один лад — один полутон.


Главная мысль: полутон — один лад на гитаре, тон — два лада. Эта простая связь помогает дальше понимать гаммы, интервалы, аккорды и устройство грифа.
`,db=`---
post_id: pitch-basics
slug: chto-takoe-vysota-zvuka
title: "Что такое высота звука"
description: "Простое объяснение высоты звука: почему одни звуки кажутся выше, другие ниже, и как это увидеть на гитарном грифе."
keywords: "что такое высота звука, высокий и низкий звук, высота ноты, музыкальная теория"
categories: Основы, Звук
tags: высота звука, нота, гриф, основы
date: 2026-05-01
intro: "Высота звука отвечает за ощущение выше и ниже. Благодаря ей мы различаем мелодии, ноты на грифе и движение музыкальной фразы."
reader_level: listener
cover_image: cover.png
draft: false
---
## Что такое высота звука

Высота звука — это ощущение, что один звук выше или ниже другого.

Высота не означает громкость. Это разные свойства звука. Можно сыграть высокий звук тихо, а низкий — громко. Высота отвечает на вопрос «выше или ниже?», а громкость — на вопрос «громче или тише?».

Проще всего услышать высоту на одной гитаре. Сыграйте открытую шестую струну E, потом открытую первую струну E. Затем повторите это несколько раз. Название ноты одинаковое, но первая струна звучит выше, потому что это E в другой октаве.

Если вы пока путаетесь в названиях нот, сначала прочитайте статью [«Что такое нота»](/ru/theory/chto-takoe-nota/). Для понимания высоты важно различать сам звук, название ноты и место этого звука на инструменте.

Мелодия появляется не только из набора звуков, но и из их движения по высоте и времени. Если несколько звуков идут всё выше, мы слышим подъём. Если они идут ниже, мы слышим спуск. Если высота почти не меняется, мелодия кажется более ровной.

Например, E, F, G звучит как движение вверх. G, F, E звучит как движение вниз. Даже без нотной записи можно почувствовать направление: мелодия поднимается, опускается или остаётся рядом с одной областью.

## Мини-пример движения по высоте

{{staff: notes=E4/8, F4, G4, A4, G4, F4, E4, D4 | title=Подъём и спуск по высоте | clef=treble | time=4/4 | key=C}}

{{tab: format=vextab | title=Тот же ноты на гитаре | code=tabstave notation=true key=C time=4/4\\nnotes :8 0/1 1/1 3/1 5/1 3/1 1/1 0/1 3/2}}

На гитаре высоту удобно увидеть на одной струне. Если двигаться вправо по ладам, звук обычно становится выше. Открытая струна звучит ниже, первый лад — выше, второй лад — ещё выше. Каждый следующий лад поднимает звук на один полутон.

Откройте [исследователь грифа](/ru/scales-fretboard-explorer), выберите стандартный строй и посмотрите на любую струну. Названия нот будут меняться от лада к ладу. Так высота становится видимой: на одной струне чем дальше лад от порожка, тем выше звук.

Название ноты и высота связаны, но это не одно и то же.

Название отвечает на вопрос: «как этот звук называется?» Высота отвечает на вопрос: «насколько высоко или низко он звучит?» Поэтому E на шестой струне и E на первой струне имеют одно имя, но находятся в разных октавах и звучат на разной высоте.

Для гитариста это особенно важно. Одни и те же названия нот повторяются в разных местах грифа. Позже это приведёт к теме октав: вы узнаете, почему ноты могут иметь одно имя, но звучать выше или ниже.

На гитаре высота зависит от нескольких вещей: какая струна звучит, какой лад зажат, какой строй выбран, насколько точно настроен инструмент и не подтянута ли струна бендом. Но для начала достаточно одного правила: на одной струне каждый следующий лад звучит выше предыдущего.

## Упражнение на 5 минут

1. Сыграйте открытую первую струну.
2. Сыграйте первый лад той же струны.
3. Сыграйте второй лад.
4. Опишите движение: звук поднимается или опускается?
5. Сыграйте в обратную сторону: второй лад, первый лад, открытая струна.

Главная цель — услышать высоту как движение вверх и вниз, а не как абстрактный термин.

## Частая путаница

Высота — это не громкость. Высота показывает, выше звук или ниже. Громкость показывает, сильнее он звучит или тише.

Высокая нота не всегда лучше слышна. Высокий звук может быть тихим, а низкий — громким. Это разные свойства.

Если две ноты называются E, они не обязательно звучат одинаково. Они могут быть E в разных октавах. Название связано, но реальная высота отличается.

## Что изучать дальше

После высоты звука логично перейти к темам:

* [«Названия нот: до, ре, ми и C, D, E»](/ru/theory/nazvaniya-not-do-re-mi-i-c-d-e/);
* [«Что такое тон и полутон»](/ru/theory/chto-takoe-ton-i-poluton/);
* [«Что такое октава»](/ru/theory/chto-takoe-oktava/).

Главная мысль: высота звука помогает слышать движение музыки вверх и вниз. На гитаре её проще всего понять на одной струне: чем выше лад, тем выше звук.
`,hb=`\uFEFF---
post_id: sound-in-music
slug: chto-takoe-zvuk-v-muzyke
title: "Что такое звук в музыке"
description: "Простое объяснение звука в музыке: из чего начинается музыка, зачем нужны звуки и паузы, и как услышать их роль в ритме."
keywords: "что такое звук в музыке, звук и пауза, основы музыкальной теории, музыкальный звук"
categories: Основы, Звук
tags: звук, пауза, основы, ритм
date: 2026-04-28
intro: "Музыка начинается не с нот и не с сложных правил. Сначала есть звук, тишина и время между ними. Если это понять, дальше проще разобраться с нотами, ритмом, мелодией и аккордами."
reader_level: listener
cover_image: cover.png
draft: false
---

## Звук и пауза — основа музыки

Звук в музыке — это любое слышимое событие, которое можно использовать как часть музыкальной мысли.

Это может быть нота на гитаре, удар по барабану, голос, хлопок, щелчок метронома, шум медиатора по струне или приглушённый щелчок левой руки. На самом старте не так важно, выглядит ли этот звук «музыкальным» в привычном смысле. Важно другое: когда он появился, сколько длился и что случилось после него.

Представьте простой пример. Вы хлопнули в ладоши один раз, подождали две секунды и хлопнули ещё раз. Между хлопками ничего не звучало, но вы всё равно почувствовали расстояние. Это расстояние — не пустота. Это часть музыкального времени.

Музыка держится не только на звуках. Она держится на чередовании звука и тишины.

Если убрать паузы, музыка превратится в сплошной поток. В нём трудно услышать фразу, ритм и дыхание. Пауза помогает понять, где одно событие закончилось и где начинается следующее. Иногда именно пауза делает следующий звук сильнее: мы ждём его, и поэтому он звучит заметнее.

Для начинающего музыканта это важнее, чем кажется. Многие сразу хотят выучить ноты, аккорды и гаммы, но музыка начинается раньше. Когда вы играете одну открытую струну, вы уже работаете со звуком. Когда ждёте перед следующей нотой, вы работаете с паузой. Когда попадаете точно в щелчок метронома или немного опаздываете, вы работаете со временем.

У любого звука есть несколько простых свойств. Он может быть коротким или длинным, громким или тихим, высоким или низким. Он может прозвучать раньше, позже или точно в нужный момент. Из этих вещей потом вырастают ритм, темп, длительности, высота звука, интервалы, мелодия и гармония.

Здесь легко попасть в одну ловушку: думать, что музыкальный звук обязан быть красивой чистой нотой. На практике музыка использует гораздо больше. В гитарной партии важен не только сам аккорд. Имеют значение атака медиатора, глушение струн, скольжение пальца, удар по корпусу, короткий шум перед сильной долей. Эти звуки могут не казаться «красивыми» отдельно, но в ритме они работают как часть музыки.

Звук отличается от ноты. Звук — это то, что реально прозвучало. Нота — это способ назвать, записать или организовать звук.

Например, вы дёрнули открытую первую струну гитары в стандартном строе. Сначала вы слышите звук. Потом можно сказать, что это нота E. Можно описать её высоту, длительность, громкость, тембр или место в ритме. Но первым всё равно был звук — конкретное событие, которое произошло во времени.

Чтобы почувствовать это на слух, откройте [метроном](/ru/rhythm-metronome/) и включите ровный пульс. Сначала не берите гитару. Просто слушайте щелчки.

Попробуйте заметить три вещи: каждый щелчок — это звук; между щелчками есть тишина; эта тишина одинаковая, поэтому появляется ощущение ровного движения.

Теперь хлопайте только на каждый второй щелчок. Потом — только на первый щелчок из четырёх. Вы услышите, что музыка появляется не из постоянного звучания, а из выбора: где сыграть, а где оставить место.

## Упражнение на 5 минут

1. Включите [метроном](/ru/rhythm-metronome/) в спокойном темпе.
2. Слушайте пульс 30 секунд и ничего не играйте.
3. Хлопайте только на первый щелчок из четырёх.
4. Потом хлопайте на первый и третий щелчки.
5. После этого сыграйте одну открытую струну вместо хлопка.

Главная цель — почувствовать, что музыка начинается с простого выбора: здесь есть звук, здесь есть тишина, а между ними течёт время.

## Частая путаница

Не обязательно сначала выучить все ноты. Ноты важны, но звук можно услышать до того, как вы знаете его название.

Пауза — это не «место, где музыки нет». Пауза может быть частью музыкальной фразы. Она создаёт расстояние, ожидание и дыхание.

Почти любой звук может стать музыкальным, если он использован осознанно: в нужный момент, с нужной длительностью и с понятной ролью.

## Что изучать дальше

После этой темы логично перейти к трём следующим вопросам:

* [что такое нота](/ru/theory/chto-takoe-nota/);
* [что такое высота звука](/ru/theory/chto-takoe-vysota-zvuka/);
* [что такое ритм](/ru/theory/chto-takoe-ritm-v-muzyke/).

Главная мысль этой статьи простая: музыка начинается не с правил, а со слышимого события во времени. Если вы слышите, где звук начинается, где заканчивается и сколько тишины остаётся до следующего события, вы уже сделали первый шаг в музыкальную теорию.
`,mb=`---
post_id: note-names
slug: nazvaniya-not-do-re-mi-i-c-d-e
title: "Названия нот: до, ре, ми и C, D, E"
description: "Как связаны русские названия нот и буквенная система C, D, E, почему гитаристы часто используют буквы и с чего начать."
keywords: "названия нот, до ре ми, C D E ноты, ноты на гитаре"
categories: Основы, Ноты
tags: ноты, названия нот, гриф, основы
date: 2026-04-30
intro: "У нот есть разные системы названий. В русской речи часто говорят до, ре, ми, а в аккордах, тюнерах и гитарных схемах чаще встречаются C, D, E."
reader_level: listener
cover_image: cover.png
draft: false
---

## Названия нот: до, ре, ми и C, D, E

У нот есть разные названия. В русской речи часто говорят: до, ре, ми, фа, соль, ля, си. В аккордах, тюнерах, гитарных приложениях и международных материалах чаще встречаются буквы: C, D, E, F, G, A, B.

Это не две разные теории. Это два способа назвать одни и те же семь основных нот.

Главное соответствие такое:

| Русское название | Буква |
| ---------------- | ----- |
| до               | C     |
| ре               | D     |
| ми               | E     |
| фа               | F     |
| соль             | G     |
| ля               | A     |
| си               | B     |

Если вы видите аккорд C, его корень — нота до. Если видите ноту A, по-русски это ля. Если на тюнере горит E, это ми.

## Мини-пример в нотах и табах

{{staff: notes=C4/q, D4, E4, F4 | title=До–ре–ми–фа в нотной записи | clef=treble | time=4/4 | key=C}}

{{tab: format=vextab | title=C–D–E–F на пятой струне | code=tabstave notation=true key=C time=4/4\\nnotes :q 3/5 5/5 7/5 8/5}}

Частый вопрос: почему буквенный ряд начинается с A, а нота до обозначается буквой C?

Для первых шагов в теории не нужно уходить в историю музыкальной записи. Практически важнее другое: в современной международной системе C означает до, D — ре, E — ми, F — фа, G — соль, A — ля, B — си. Эту связку нужно просто выучить и начать узнавать в аккордах.

На гитаре буквенная система встречается постоянно. Стандартный строй записывают так:

\`\`\`text
E A D G B E
\`\`\`

Если перевести это на русские названия, получится:

\`\`\`text
ми, ля, ре, соль, си, ми
\`\`\`

Откройте [исследователь грифа](/ru/scales-fretboard-explorer), выберите стандартный строй и найдите открытые струны. Так станет видно, что буквы — не отдельная «английская теория», а практический язык для поиска звуков на инструменте.

{{attention: В немецкой системе буквенных обозначений нота си записывается как H, а буква B обозначает си-бемоль. Поэтому в некоторых учебниках и аккордовых схемах можно встретить H там, где в англоязычной записи обычно стоит B. | Внимание}}

Пока не усложняйте тему диезами и бемолями. Между основными нотами есть промежуточные звуки: C#, D#, F#, G#, A# и их варианты с бемолями. Но сначала достаточно уверенно связать семь основных названий.

Минимум, который полезно запомнить уже сейчас:

* C# читается как до-диез;
* D# читается как ре-диез;
* Bb читается как си-бемоль;
* знак # поднимает ноту выше;
* знак b опускает ноту ниже.

Подробно это станет понятнее в статье [«Что такое тон и полутон»](/ru/theory/chto-takoe-ton-i-poluton/).

Чтобы не путаться, не пытайтесь сразу читать всё быстро. Начните с двух рядов:

\`\`\`text
C D E F G A B
до ре ми фа соль ля си
\`\`\`

Потом соединяйте пары: C — до, D — ре, E — ми. Этого уже достаточно, чтобы узнавать буквы в аккордах, тюнере и схемах на грифе.

## Упражнение на 5 минут

1. Запишите ряд: C D E F G A B.
2. Под каждой буквой подпишите русское название.
3. Назовите открытые струны гитары буквами: E A D G B E.
4. Переведите их на русские названия.
5. Проверьте себя в [исследователе грифа](/ru/scales-fretboard-explorer).

Главная цель — свободно связывать буквенные и русские названия основных нот.

## Частая путаница

C — это не си. C — это до. Си в международной буквенной системе обозначается буквой B.

Гитаристу полезно знать обе системы. Русские названия удобны в речи и базовой теории, а буквы чаще встречаются в аккордах, тюнерах, схемах и приложениях.

Диезы и бемоли не нужно учить сразу глубоко. Сначала разберитесь с семью основными нотами, а потом добавьте промежуточные звуки.

## Что изучать дальше

Дальше лучше двигаться по порядку:

* [«Что такое нота»](/ru/theory/chto-takoe-nota/);
* [«Что такое высота звука»](/ru/theory/chto-takoe-vysota-zvuka/);
* [«Что такое тон и полутон»](/ru/theory/chto-takoe-ton-i-poluton/).

Главная мысль: до, ре, ми и C, D, E называют одни и те же звуки разными системами. Для гитариста буквенная система особенно важна, потому что через неё записывают строй, аккорды, гаммы и большинство схем.
`,fb=`\uFEFF---
post_id: theory-interval-basics
slug: osnovy-intervalov-na-gitare
title: "Основы интервалов на гитаре"
description: "Короткий практический материал о том, как интервалы помогают в риффах, соло и анализе аккордов."
keywords: "интервалы на гитаре, теория музыки гитара, ear training"
categories: Интервалы, Слух
tags: интервалы, ear-training
date: 2025-03-31
intro: "Этот черновик показывает структуру раздела theory с категориями и тегами."
reader_level: player
cover_image: cover.png
draft: true
---

![Обложка](cover.png)

## Что это такое
Интервал - это расстояние между двумя звуками. На гитаре интервалы помогают быстро видеть функциональные связи на грифе.

## Как использовать
1. Выберите одну тональность.
2. Пройдите интервалы от тоники вверх.
3. Сверяйте слух и визуальную форму.

{{youtube:https://www.youtube.com/watch?v=5Y01jIorpeA}}

## Примеры вставки табов и аудио

Живой пример \`tab\`:

{{tab: format=vextab | title=Демо VexTab в официальном стиле | code=tabstave notation=true key=A time=4/4\\nnotes :q =|: (5/2.5/3.7/4) :8 7-5h6/3 ^3^ 5h6-7/5 ^3^ :q 7V/4 |\\nnotes :8 t12p7/4 s5s3/4 :8 3s:16:5-7/5 :q p5/4\\ntext :w, |#segno, ,|, :hd, , #tr}}

Живой пример \`audio\`:

{{audio:https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3 | Демо аудио по интервалам}}

Живой пример \`staff\` (генерируется на странице):

{{staff: notes=C#5/q, B4, A4, G#4 | title=Нисходящая интервальная фраза | clef=treble | time=4/4 | key=E}}

Расширенный пример \`staff\` (два нотоносца, несколько голосов):

{{staff: format=score | title=Интервальная фактура для grand staff (реприза + акценты) | code=system connector=brace\\nstave clef=treble time=4/4 key=D begin_repeat=true end_repeat=true\\nvoice stem=up accents=1,5 notes=C#5/8, B4, A4, G#4, A4, B4, C#5, D5\\nvoice stem=down notes=E4/h, E4\\nstave clef=bass time=4/4 key=D begin_repeat=true end_repeat=true\\nvoice stem=up notes=D3/q, A2, B2, C#3\\nvoice stem=down notes=D2/h, D2}}

{{staff: notes=E4/8, F#4/8, G#4/8, A4/8, B4/8, A4/8, G#4/8, F#4/16, F#4/16 | title=Локальный пример нотного стана | clef=treble | time=4/4 | key=Am}}

Шаблон для локальных файлов (рекомендуется):

\`\`\`md
{{tab: format=vextab | title=Табулатура интервалов | code=tabstave notation=true key=A time=4/4\\nnotes :q 4-5-6/3 10/4 | notes :8 t12p7/4 s5s3/4}}
{{audio:examples/interval-riff-demo.mp3 | Аудио интервалов}}

{{staff: notes=E4/8, F#4, G#4, A4, B4/q, A4, G#4, F#4 | title=Локальный пример нотного стана | clef=treble | time=4/4 | key=E}}

{{staff: format=score | title=Локальный пример grand staff | code=system connector=brace\\nstave clef=treble time=4/4 begin_repeat=true end_repeat=true\\nvoice stem=up accents=1,4,7 notes=C5/8, D5, E5, F#5, G5/q, F#5, E5, D5\\nvoice stem=down notes=A4/h, A4\\nstave clef=bass time=4/4 begin_repeat=true end_repeat=true\\nvoice stem=down notes=D3/h, D3}}
\`\`\`

## FAQ
### Нужно ли знать все интервалы сразу?
Нет, начните с m3, M3, P4 и P5.

### Это помогает в импровизации?
Да, интервалы ускоряют выбор целевых нот.
`,pb=`\uFEFF---
post_id: theory-interval-basics
slug: interval-basics-for-guitar
title: "Interval Basics for Guitar"
description: "A short practical article on how interval thinking improves riffs, solos, and chord analysis."
keywords: "guitar intervals, guitar music theory, ear training"
categories: Intervals, Ear Training
tags: intervals, ear-training
date: 2025-03-31
intro: "This draft demonstrates the theory section structure with categories and tags."
reader_level: player
cover_image: cover.png
draft: true
---

![Cover](cover.png)

## What it is
An interval is the distance between two notes. On guitar, interval thinking gives faster functional navigation on the fretboard.

## How to use
1. Pick one key.
2. Walk intervals from the tonic upward.
3. Compare ear recognition with visual shape.

{{youtube:https://www.youtube.com/watch?v=5Y01jIorpeA}}

## Tab and audio embed examples

Live \`tab\` example:

{{tab: format=vextab | title=Official-style VexTab demo | code=tabstave notation=true key=A time=4/4\\nnotes :q =|: (5/2.5/3.7/4) :8 7-5h6/3 ^3^ 5h6-7/5 ^3^ :q 7V/4 |\\nnotes :8 t12p7/4 s5s3/4 :8 3s:16:5-7/5 :q p5/4\\ntext :w, |#segno, ,|, :hd, , #tr}}

Live \`audio\` example:

{{audio:https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3 | Interval demo audio}}

Live \`staff\` example (generated on page render):

{{staff: notes=C#5/q, B4, A4, G#4 | title=Descending interval phrase | clef=treble | time=4/4 | key=E}}

Advanced \`staff\` example (two staves, multiple voices):

{{staff: format=score | title=Grand staff interval texture (with repeat + accents) | code=system connector=brace\\nstave clef=treble time=4/4 key=D begin_repeat=true end_repeat=true\\nvoice stem=up accents=1,5 notes=C#5/8, B4, A4, G#4, A4, B4, C#5, D5\\nvoice stem=down notes=E4/h, E4\\nstave clef=bass time=4/4 key=D begin_repeat=true end_repeat=true\\nvoice stem=up notes=D3/q, A2, B2, C#3\\nvoice stem=down notes=D2/h, D2}}

Template for local assets (recommended):

\`\`\`md
{{tab: format=vextab | title=Interval riff tab | code=tabstave notation=true key=A time=4/4\\nnotes :q 4-5-6/3 10/4 | notes :8 t12p7/4 s5s3/4}}
{{audio:examples/interval-riff-demo.mp3 | Interval riff audio}}
{{staff: notes=E4/8, F#4, G#4, A4, B4/q, A4, G#4, F#4 | title=Local staff example | clef=treble | time=4/4 | key=E}}
{{staff: format=score | title=Local grand staff example | code=system connector=brace\\nstave clef=treble time=4/4 begin_repeat=true end_repeat=true\\nvoice stem=up accents=1,4,7 notes=C5/8, D5, E5, F#5, G5/q, F#5, E5, D5\\nvoice stem=down notes=A4/h, A4\\nstave clef=bass time=4/4 begin_repeat=true end_repeat=true\\nvoice stem=down notes=D3/h, D3}}
\`\`\`

## FAQ
### Do I need all intervals at once?
No, start with m3, M3, P4, and P5.

### Does it help improvisation?
Yes, it speeds up target-note selection.

`,gb=`---
post_id: note-names
slug: note-names-do-re-mi-and-c-d-e
title: "Note Names: Do, Re, Mi and C, D, E"
description: "How solfege note names connect to the letter system C, D, E, why guitarists use letters, and what to learn first."
keywords: "note names, do re mi, C D E notes, guitar note names"
categories: Basics, Notes
tags: notes, note names, fretboard, basics
date: 2026-04-30
intro: "Notes can be named in more than one system. You may hear do, re, mi, but chord names, tuners, and guitar diagrams usually use C, D, E."
reader_level: listener
cover_image: cover.png
draft: false
---

## Note Names: Do, Re, Mi and C, D, E

Notes can have different names. In solfege, you may see or hear: do, re, mi, fa, sol, la, si. In chord symbols, tuners, guitar apps, and international learning materials, you will more often see letters: C, D, E, F, G, A, B.

These are not two different kinds of music theory. They are two ways to name the same seven basic notes.

The main relationship is this:

| Solfege name | Letter name |
| ------------ | ----------- |
| do           | C           |
| re           | D           |
| mi           | E           |
| fa           | F           |
| sol          | G           |
| la           | A           |
| si           | B           |

If you see a C chord, its root is the note do. If you see the note A, that is la. If your tuner shows E, that is mi.

## Small example in notation and tab

{{staff: notes=C4/q, D4, E4, F4 | title=Do–re–mi–fa in standard notation | clef=treble | time=4/4 | key=C}}

{{tab: format=vextab | title=C–D–E–F on the fifth string | code=tabstave notation=true key=C time=4/4\\nnotes :q 3/5 5/5 7/5 8/5}}

A common question is: why does the letter sequence start with A, while do is called C?

For the first steps in music theory, you do not need to go deep into the history of notation. The practical point is simpler: in the modern international letter system, C means do, D means re, E means mi, F means fa, G means sol, A means la, and B means si. Learn this relationship and start recognizing it in chord names.

On guitar, the letter system appears all the time. Standard tuning is written like this:

\`\`\`text
E A D G B E
\`\`\`

In solfege, that becomes:

\`\`\`text
mi, la, re, sol, si, mi
\`\`\`

Open the [fretboard explorer](/en/scales-fretboard-explorer/), choose standard tuning, and find the open strings. This makes it clear that letters are not a separate “English theory.” They are a practical language for finding sounds on the instrument.

{{attention: In the German letter-name system, the note B natural is written as H, while B means B-flat. This is why some books and chord charts use H where English-language notation usually uses B. | Attention}}

Do not make sharps and flats the main topic yet. Between the basic notes, there are intermediate sounds: C#, D#, F#, G#, A#, and their flat-name alternatives. For now, it is enough to connect the seven basic names confidently.

A useful minimum for now:

* C# is called C-sharp;
* D# is called D-sharp;
* Bb is called B-flat;
* the # sign raises a note;
* the b sign lowers a note.

This will make more sense in the article [“What Are Tones and Semitones”](/en/theory/tone-and-semitone/).

To avoid confusion, do not try to read everything quickly at once. Start with two rows:

\`\`\`text
C D E F G A B
do re mi fa sol la si
\`\`\`

Then connect the pairs: C — do, D — re, E — mi. That is already enough to recognize letters in chord names, tuners, and fretboard diagrams.

## 5-minute exercise

1. Write the row: C D E F G A B.
2. Under each letter, write its solfege name.
3. Name the open guitar strings with letters: E A D G B E.
4. Translate them into solfege names.
5. Check yourself in the [fretboard explorer](/en/scales-fretboard-explorer/).

The goal is to connect letter names and solfege names for the seven basic notes.

## Common confusion

C is not si. C is do. In the international letter system, si is written as B.

For guitarists, it is useful to know both systems. Solfege names are common in speech and basic music theory, while letters appear more often in chord symbols, tuners, diagrams, and apps.

You do not need to study sharps and flats deeply right away. First, learn the seven basic notes, then add the intermediate sounds.

## What to study next

A good next path is:

* [“What Is a Note”](/en/theory/what-is-a-note/);
* [“What Is Pitch”](/en/theory/what-is-pitch/);
* [“What Are Tones and Semitones”](/en/theory/tone-and-semitone/).

The main idea is simple: do, re, mi and C, D, E name the same sounds using different systems. For guitarists, the letter system is especially important because it is used for tuning, chords, scales, and most diagrams.
`,yb=`---
post_id: tone-and-semitone
slug: tone-and-semitone
title: "Tone and Semitone"
description: "A simple explanation of tones and semitones: how distances between notes work on guitar and why one fret equals one semitone."
keywords: "tone and semitone, what is a semitone, distance between notes, guitar music theory"
categories: Basics, Intervals
tags: tone, semitone, fretboard, intervals
date: 2026-05-02
intro: "Tones and semitones describe small distances between sounds. On guitar, this is easy to see: one fret is one semitone, two frets are one tone."
reader_level: player
cover_image: cover.png
draft: false
---
## What Is a Tone and Semitone

A semitone is a small step between neighboring sounds in the common Western music system. A tone is two semitones.

On guitar, this is very easy to see. Moving by one fret gives you one semitone. Moving by two frets gives you one tone.

For example, play the open first string E, then the first fret F. You moved up by one semitone. Now play the open first string E, then the second fret F#. You moved up by one tone.

Here, the word “tone” means a distance between sounds. It does not mean tone color or the general sound of an instrument. A note is the name of a sound. A semitone or tone is the distance from one sound to another.

If pitch still feels unclear, read [“What Is Pitch”](/en/theory/what-is-pitch/) first. Tones and semitones continue that idea: we do not only hear “higher” and “lower”; we begin to measure how far the sound has moved.

## Small example in notation and tab

{{staff: notes=E4/q, F4, F#4, G#4 | title=Semitone, semitone, and tone upward | clef=treble | time=4/4 | key=C}}

{{tab: format=vextab | title=One fret and two frets on the first string | code=tabstave notation=true key=C time=4/4\\nnotes :q 0/1 1/1 2/1 4/1}}

Take the first string and play a few positions in a row:

| Position    | Note | Distance from previous position |
| ----------- | ---- | ------------------------------- |
| open string | E    | —                               |
| 1st fret    | F    | semitone                        |
| 2nd fret    | F#   | semitone                        |
| 3rd fret    | G    | semitone                        |

Each step to the right by one fret raises the sound by one semitone. This is where the guitar makes theory physical: you can hear the distance and also see it under your fingers.

A tone on the fretboard is two frets. If you move from E to F#, you have moved by one tone. If you move from F to G, that is also one tone. From G to A is one tone again.

A simple way to remember it: a semitone is the next fret, and a tone is two frets away.

In the row C, D, E, F, G, A, B, not all neighboring basic notes are the same distance apart. The most important exceptions are:

* E–F is a semitone;
* B–C is a semitone.

The other neighboring basic-note pairs are usually one tone apart:

* C–D;
* D–E;
* F–G;
* G–A;
* A–B.

This pattern will become useful very soon. It explains the structure of the major scale and many other musical patterns.

Open the [fretboard explorer](/en/scales-fretboard-explorer/), choose standard tuning, and look at the first string. Follow the movement: E on the open string, F on the first fret, F# on the second, G on the third. Listen and look at the same time. This turns “semitone” from a word into a clear movement by one fret.

Tones and semitones are not just for tables. They help explain why scales sound the way they do, why major differs from minor, how intervals are built, and why one chord can change its character by changing just one note.

## 5-minute exercise

1. Choose any string.
2. Play the open string and the first fret.
3. Say out loud: “This is a semitone.”
4. Play the open string and the second fret.
5. Say out loud: “This is a tone.”
6. Repeat the same thing on two other strings.

The goal is to connect a semitone with one fret and a tone with two frets.

## Common confusion

A tone is not the same thing as a note. A note is the name of a sound. In this article, a tone is a distance between two sounds.

A semitone does not always sound “bad.” It can create tension, but music uses semitones all the time: in melodies, scales, chords, and resolutions.

On a regular guitar, one fret equals one semitone. Bends, slides, tuning issues, and special microtonal instruments can make things more complex, but the basic fretboard rule still works: one fret is one semitone.


The main idea is simple: a semitone is one fret on guitar, and a tone is two frets. This simple relationship helps you understand scales, intervals, chords, and the layout of the fretboard.
`,vb=`---
post_id: what-is-a-note
slug: what-is-a-note
title: "What Is a Note in Music"
description: "A simple explanation of a note: how a note differs from sound, why note names matter, and how to see notes on the guitar fretboard."
keywords: "what is a note, note in music, note names, music theory for beginners"
categories: Basics, Notes
tags: note, sound, fretboard, basics
date: 2026-04-29
intro: "A note helps musicians name and repeat sounds. First we hear a sound, then we give it a name, a place, and sometimes a written form."
reader_level: listener
cover_image: cover.png
draft: false
---
## What Is a Note in Music

A note is a musical name for a sound. It helps you name a sound, write it down, find it on an instrument, and repeat it later.

The sound always comes first. A string vibrates, the air moves, and your ear hears it. Then a musician can say, “This is E,” “This is A,” or “This is C.” The name does not replace the sound, but it helps you work with it.

A simple example is the open first string of a guitar in standard tuning. You pluck the string and hear a sound. If you call that sound E, you can find it again, show it to another musician, or write it into an exercise.

Sound and note are connected, but they are not the same thing.

Sound is what actually happened. A note is a way to name or write down that sound. It is similar to an object and its name: you can see a cup, and you can say the word “cup.” The object and the word are related, but they are not identical.

In music, this difference matters from the very beginning. You can hear a sound. You can name a note, write it down, find it on the fretboard, or play it on another instrument. The same sound can be described in several ways: by note name, pitch, duration, volume, or place in the rhythm.

If this still feels confusing, take one step back and read [“What Is Sound in Music”](/en/theory/what-is-sound-in-music/). That article explains the basic idea: music begins with sound, silence, and the time between them.

Notes are not there to make music more complicated. They are there so musicians can agree on what to play.

Without note names, everything would have to be described roughly: “play that high sound after the low one,” “put your finger somewhere here,” “repeat the sound from the beginning.” Sometimes that works, but for learning, analyzing songs, and playing with other musicians, it quickly becomes inconvenient.

With note names, things become clearer: play E, then G, then A; hold the first note longer; move the melody up an octave; find the same note on another string. A name turns a sound into something you can return to.

Beginners often think that a note is only a black symbol on a staff. That is just one way to write a note. A note can appear as a letter such as C, D, or E, as a piano key, as a position on the fretboard, as a number in tablature, or as a symbol in standard notation.

At the beginning, you do not need to read complex sheet music. The main idea is enough: a note is the name of a sound. Standard notation, tablature, and fretboard diagrams are different ways to show which sound is needed.

## Small example: notes on the staff and guitar

{{staff: notes=E4/q, F4, G4, A4 | title=E–F–G–A in standard notation | clef=treble | time=4/4 | key=C}}

{{tab: format=vextab | title=The same notes on the first string | code=tabstave notation=true key=C time=4/4\\nnotes :q 0/1 1/1 3/1 5/1}}

The easiest way to see notes on guitar is to start with the open strings. In standard tuning, from the sixth string to the first, they are: E, A, D, G, B, E.

Each open string produces a real sound. Each of those sounds has a name. That is why the fretboard can be seen as a map: the same note names repeat in different places and octaves.

Open the [fretboard explorer](/en/scales-fretboard-explorer/), choose standard tuning, and find the open strings. Do not try to memorize the entire fretboard at once. Start by connecting the six open strings with their names.

On guitar, the same note can often be found in different places. For example, E can be played on the open first string, on the open sixth string, and in several other fretboard positions. This is not a mistake. The guitar is built so that sounds repeat in different octaves and on different strings.

Later, this will help you choose comfortable fingerings, build chords, and see scales. For now, remember one simple idea: a fretboard position and a note name are connected, but they are not exactly the same thing.

## 5-minute exercise

1. Play the open first string.
2. Name it: E.
3. Play the open second string.
4. Name it: B.
5. Go through all open strings from the sixth to the first: E, A, D, G, B, E.
6. Repeat the names without the guitar.

The goal is to connect the real sound of a string with the name of the note.

## Common confusion

A note and a string are not the same thing. A string is part of the instrument. A note is the name of a sound. One string can produce different notes on different frets.

You do not need to learn every note on the fretboard right away. Start with the open strings, then add small areas of the fretboard step by step.

You can play without knowing note names. But knowing them makes it easier to learn songs, find melodies, understand chords, and communicate with other musicians.

## What to study next

After this article, the next useful topics are:

- [“Note Names: C, D, E and Do, Re, Mi”](/en/theory/note-names-do-re-mi-and-c-d-e/);
- [“What Is Pitch”](/en/theory/what-is-pitch/);
- [“What Is Sound in Music”](/en/theory/what-is-sound-in-music/).

The main idea is simple: a note is not the sound itself. It is a way to name and organize sound. When you hear a string, you hear sound. When you call it E, A, or D, you use a note as a musical name.`,wb=`---
post_id: pitch-basics
slug: what-is-pitch
title: "What Is Pitch"
description: "A simple explanation of pitch: why some sounds feel higher or lower, and how to see that movement on the guitar fretboard."
keywords: "what is pitch, high and low sound, pitch in music, beginner music theory"
categories: Basics, Sound
tags: pitch, note, fretboard, basics
date: 2026-05-01
intro: "Pitch is the sense that a sound is higher or lower. It helps us hear melodies, locate notes on the fretboard, and follow musical movement."
reader_level: listener
cover_image: cover.png
draft: false
---

## What Is Pitch

Pitch is the sense that one sound is higher or lower than another.

Pitch is not volume. These are different qualities of sound. You can play a high sound quietly and a low sound loudly. Pitch answers the question “higher or lower?” Volume answers the question “louder or softer?”

The easiest way to hear pitch is on one guitar. Play the open sixth string E, then the open first string E. Repeat this a few times. The note name is the same, but the first string sounds higher because it is E in a different octave.

If note names still feel confusing, read [“What Is a Note”](/en/theory/what-is-a-note/) first. To understand pitch clearly, it helps to separate the sound itself, the note name, and the place where that sound is found on the instrument.

A melody is not just a group of sounds. It is also movement through pitch and time. When several sounds move higher and higher, we hear an upward motion. When they move lower, we hear a downward motion. When the pitch stays close to one area, the melody feels more level.

For example, E, F, G sounds like motion upward. G, F, E sounds like motion downward. Even without reading notation, you can hear the direction: the melody rises, falls, or stays near the same area.

## Small example of pitch movement

{{staff: notes=E4/8, F4, G4, A4, G4, F4, E4, D4 | title=Rising and falling pitch | clef=treble | time=4/4 | key=C}}

{{tab: format=vextab | title=The same notes on guitar | code=tabstave notation=true key=C time=4/4\\nnotes :8 0/1 1/1 3/1 5/1 3/1 1/1 0/1 3/2}}

On guitar, pitch is easy to see on a single string. If you move to the right across the frets, the sound usually gets higher. The open string is lower, the first fret is higher, and the second fret is higher again. Each next fret raises the sound by one semitone.

Open the [fretboard explorer](/en/scales-fretboard-explorer/), choose standard tuning, and look at any string. The note names change from fret to fret. This makes pitch visible: on one string, the farther the fret is from the nut, the higher the sound.

Note name and pitch are connected, but they are not the same thing.

The note name answers: “What is this sound called?” Pitch answers: “How high or low does it sound?” That is why E on the sixth string and E on the first string have the same name, but they are in different octaves and sound at different pitches.

For guitarists, this matters a lot. The same note names repeat in different places on the fretboard. Later, this leads to the topic of octaves: you will see why notes can share a name while sounding higher or lower.

On guitar, pitch depends on several things: which string is sounding, which fret is pressed, which tuning is used, how accurately the instrument is tuned, and whether the string is being bent. But for now, one rule is enough: on a single string, each next fret sounds higher than the previous one.

## 5-minute exercise

1. Play the open first string.
2. Play the first fret on the same string.
3. Play the second fret.
4. Describe the motion: is the sound going up or down?
5. Play in the opposite direction: second fret, first fret, open string.

The goal is to hear pitch as movement up and down, not as an abstract term.

## Common confusion

Pitch is not volume. Pitch tells you whether a sound is higher or lower. Volume tells you whether it is louder or softer.

A high note is not always easier to hear. A high sound can be quiet, and a low sound can be loud. These are different qualities.

If two notes are both called E, they are not always the exact same pitch. They may be E in different octaves. The name is related, but the actual pitch is different.

## What to study next

After pitch, the next useful topics are:

* [“Note Names: Do, Re, Mi and C, D, E”](/en/theory/note-names-do-re-mi-and-c-d-e/);
* [“What Are Tones and Semitones”](/en/theory/tone-and-semitone/);
* [“What Is an Octave”](/en/theory/what-is-an-octave/).

The main idea is simple: pitch helps you hear music moving up and down. On guitar, the easiest way to understand it is on one string: the higher the fret, the higher the sound.
`,bb=`---
post_id: musical-pulse
slug: what-is-pulse-in-music
title: "What Is Pulse in Music"
description: "A simple explanation of musical pulse: how to feel a steady time support, and how pulse differs from rhythm and tempo."
keywords: "what is pulse in music, musical pulse, rhythm and pulse, metronome"
categories: Basics, Rhythm
tags: pulse, rhythm, tempo, metronome
date: 2026-05-04
intro: "Pulse is the steady inner support of music. It helps you count, tap your foot, play rhythm, and avoid losing time."
reader_level: player
cover_image: cover.png
draft: false
---

## What Is Pulse in Music

Pulse in music is the steady feeling of beats moving through time.

When you listen to a song and start tapping your foot, you are usually feeling the pulse. It may not be played clearly by one instrument, but your body still finds a regular point of reference.

Pulse is like walking steps. Rhythm can be complex, with rests, accents, short sounds, and long sounds. The pulse keeps moving steadily underneath it, like an internal time grid.

Before this topic, it helps to read [“What Is Rhythm in Music”](/en/theory/what-is-rhythm-in-music/). That article explains rhythm as the order of sounds and silences in time. Pulse helps that order stay stable.

Rhythm and pulse are not the same thing.

Rhythm is the pattern of sounds and silences. Pulse is the steady support that the pattern sits on. For example, if you count “one, two, three, four,” that is the pulse. If you clap on “one,” stay silent on “two,” and clap on “three” and “four,” that is a rhythmic pattern.

You can think of it this way: pulse is the step, and rhythm is the phrase you say while moving. The step stays steady, while the phrase can be simple, complex, full of pauses, or accented in different places.

Pulse is also different from tempo. Pulse is the steady beats themselves. Tempo is the speed of those beats.

If a metronome clicks 60 times per minute, the pulse is slow. If it clicks 120 times per minute, the pulse is fast. In both cases, pulse remains a steady reference point; only the speed changes. The next topic about tempo will explain this in more detail. For now, it’s enough to know: pulse is the steady beats, and tempo is their speed.

The easiest way to feel pulse is with a metronome. Open the [metronome](/en/rhythm-metronome/) and set it to 80 BPM. Do not play anything at first. Just listen and count: “one, two, three, four.” Then start tapping your foot lightly on every click.

Physical movement helps the body keep pulse more steadily than counting in your head alone. This is why musicians often tap a foot, move their body, or nod slightly in time.

## Small example of a steady pulse

{{staff: notes=E4/q, E4, E4, E4 | title=Four steady pulse beats | clef=treble | time=4/4 | key=C}}

{{tab: format=vextab | title=The same pulse on one string | code=tabstave notation=true key=C time=4/4\\nnotes :q 0/6 0/6 0/6 0/6}}

Guitarists need pulse all the time. It helps you avoid speeding up in easy parts, slowing down in difficult parts, missing accents, drifting away from the drums and bass, losing a steady strumming or picking pattern, or getting confused about where the next bar begins.

When pulse is unstable, even correct chords start to sound uncertain. The musician may be playing the right sounds, but those sounds do not land inside the shared motion of the music.

A metronome is useful for training, but the goal is not to depend on the click forever. A stronger skill is to feel pulse internally. Then you can keep time through rests, long notes, and sections where nobody is playing steady beats.

Pauses are especially useful for practice. When you are not clapping or playing, the pulse should still continue in your head and body. The next sound will show whether you kept time or lost it.

## 5-minute exercise

1. Set a metronome to 70 BPM.
2. Count out loud: “one, two, three, four.”
3. Clap on every click for one minute.
4. Then clap only on “one.”
5. Keep tapping your foot between the claps.
6. Check whether the next “one” lands exactly with the click.

The goal is to feel that pulse continues even when you are not clapping.

## Common confusion

Pulse is not rhythm. Pulse is steady. Rhythm can include rests, syncopations, accents, and different note lengths.

Pulse is not always clearly played by the drums. Sometimes a drum or bass part makes it obvious, and sometimes pulse is only felt inside the music.

You can practice pulse without an instrument. Counting, clapping, walking, foot tapping, and a metronome are all useful for the first stages of practice.

## What to study next

After pulse, the next useful topics are:

* [“What Is Rhythm in Music”](/en/theory/what-is-rhythm-in-music/);

The main idea is simple: pulse is the steady support of musical time. It keeps rhythm from falling apart, holds musicians together, and gives the body a sense of motion.
`,kb=`---
post_id: rhythm-basics
slug: what-is-rhythm-in-music
title: "What Is Rhythm in Music"
description: "A simple explanation of rhythm: how sounds and rests are placed in time, how rhythm differs from tempo, and how to practice it."
keywords: "what is rhythm, rhythm in music, rhythm basics, guitar rhythm"
categories: Basics, Rhythm
tags: rhythm, pulse, rest, metronome
date: 2026-05-03
intro: "Rhythm appears when sounds and silences are organized in time. It is the basis of claps, strumming, riffs, melodies, and accompaniment."
reader_level: player
cover_image: cover.png
draft: false
---

## What Is Rhythm in Music

Rhythm is the order of sounds and silences in time.

If you clap randomly, you get a group of separate sounds. If you clap in a repeating pattern, rhythm appears. Your ear begins to hear the relationship between the claps: where the sound happens, where the silence is, and when the pattern returns.

Rhythm is not about pitch. You can play the same note as steady quarter notes, short hits, rests, or accented attacks. The note stays the same, but the musical feeling changes.

In [“What Is Sound in Music”](/en/theory/what-is-sound-in-music/), we started with an important idea: music is made not only of sound, but also of silence. Rhythm uses both. Sound becomes an event. Silence creates space between events. Time connects everything into a pattern.

A simple example is: clap, silence, clap, clap. If that pattern repeats in steady time, we already hear it as rhythm.

Rhythm is often confused with tempo, but they are different things. Rhythm is the pattern. Tempo is the speed at which the pattern is played.

The same strumming pattern can be played slowly or quickly. For example, a pattern like “down — down-up — up-down” can be played at 70 BPM or at 120 BPM. The pattern remains similar, but the feeling changes: at a slow tempo it may feel calm, while at a faster tempo it may feel more energetic.

To keep rhythm steady, musicians feel a pulse. Pulse is the regular internal beat that makes it easier to count, tap your foot, or play in time. If rhythm is the pattern, pulse is the time grid where that pattern sits.

The next article explains this in more detail: [“What Is Pulse in Music”](/en/theory/what-is-pulse-in-music/).

Try hearing the difference in practice. Open the [metronome](/en/rhythm-metronome/). First, clap on every click. Then clap every other click. Then clap twice in a row and skip one click.

In all three versions, time keeps moving steadily. Only the pattern of sounds and silences changes. That is rhythm at work.

## Small rhythm example in notation and tab

{{staff: notes=E4/8, E4/8, E4/q, E4/8, E4/8, E4/q | title=Pattern 1+1+2+1+1+2 | clef=treble | time=4/4 | key=C}}

{{tab: format=vextab | title=The same rhythm on the open sixth string | code=tabstave notation=true key=C time=4/4\\nnotes :8 0/6 0/6 :q 0/6 :8 0/6 0/6 :q 0/6}}

Guitarists meet rhythm everywhere: in strumming, riffs, picking patterns, pauses between chords, accents on strong beats, and muted string hits.

Even one chord can sound completely different because of rhythm. Play it with slow, even strokes and it may feel calm. Add short hits and rests, and it starts to move. Make the accents denser, and the part can become dance-like, heavy, or tense.

This is why rhythm is not only a topic for drummers. It matters for singers, guitarists, bass players, pianists, and anyone who plays music in time.

## 5-minute exercise

1. Set a metronome to 80 BPM.
2. Count out loud: “one, two, three, four.”
3. Clap only on “one.”
4. Then clap on “one” and “three.”
5. Then clap on “one, two, three, four.”
6. Compare how each version feels.

The goal is to hear that rhythm changes even when the tempo stays the same.

## Common confusion

Rhythm is not speed. The speed of music is called tempo. Rhythm is the pattern of sounds and silences.

Rhythm does not belong only to drums. Voice, guitar, bass, melody, chords, and even pauses all have rhythm.

You do not need to read note values right away. First, learn to hear the pattern and keep a steady pulse. Note values will be easier to understand after that.

## What to study next

After rhythm, the next useful topics are:

* [“What Is Pulse in Music”](/en/theory/what-is-pulse-in-music/);

The main idea is simple: rhythm is the order of sounds and silences in time. It answers three basic questions: where to play, where to leave silence, and how the pattern repeats.
`,Sb=`---
post_id: sound-in-music
slug: what-is-sound-in-music
title: "What Is Sound in Music"
description: "A simple explanation of sound in music: how music starts with sound, silence, and time before notes, rhythm, melody, and harmony appear."
keywords: "what is sound in music, sound and silence, music theory basics, musical sound"
categories: Basics, Sound
tags: sound, rest, basics, rhythm
date: 2026-04-28
intro: "Music does not start with notes or complicated rules. First there is sound, silence, and the time between them. Once that is clear, notes, rhythm, melody, and chords become easier to understand."
reader_level: listener
cover_image: cover.png
draft: false
---

## Sound and silence — the foundation of music

Sound in music is any audible event that can become part of a musical idea.

It can be a guitar note, a drum hit, a voice, a hand clap, a metronome click, the noise of a pick touching a string, or a muted left-hand tap. At the very beginning, it does not matter whether the sound feels “musical” in the usual sense. What matters is when it happens, how long it lasts, and what comes after it.

Here is a simple example. Clap your hands once, wait two seconds, then clap again. Nothing sounds between the two claps, but you still feel the distance. That distance is not empty. It is part of musical time.

Music is not built from sound alone. It is built from the alternation of sound and silence.

Without silence, music would turn into a constant stream. It would be hard to hear phrases, rhythm, or breathing space. Silence helps us understand where one event ends and the next one begins. Sometimes the pause is what makes the next sound stronger: we wait for it, so we notice it more.

For a beginner, this matters more than it may seem. Many people want to jump straight into notes, chords, and scales, but music begins before that. When you play one open string, you are already working with sound. When you wait before the next note, you are working with silence. When you land exactly on a metronome click or slightly behind it, you are working with time.

Every sound has a few basic qualities. It can be short or long, loud or soft, high or low. It can arrive early, late, or exactly where it should. Rhythm, tempo, note values, pitch, intervals, melody, and harmony all grow from these simple things.

There is one common trap here: thinking that a musical sound must be a clean, beautiful note. In real music, much more is happening. In a guitar part, the chord itself is not the only thing that matters. The pick attack, muted strings, finger slides, body taps, and small noises before a strong beat can all matter too. These sounds may not seem “beautiful” on their own, but inside a rhythm they can become part of the music.

Sound is not the same thing as a note. Sound is what actually happened. A note is a way to name, write down, or organize that sound.

For example, you pluck the open first string of a guitar in standard tuning. First, you hear a sound. Then you can say that it is the note E. You can describe its pitch, duration, volume, tone, or place in the rhythm. But the first thing was still the sound: a real event that happened in time.

To hear this more clearly, open the [metronome](/rhythm-metronome/) and start a steady pulse. Do not pick up the guitar yet. Just listen to the clicks.

Notice three things: each click is a sound; there is silence between the clicks; the silence is even, so you begin to feel steady motion.

Now clap only on every second click. Then clap only on the first click out of four. You will hear that music does not come from constant sound. It comes from choice: where to play and where to leave space.

## 5-minute exercise

1. Open the [metronome](/rhythm-metronome/) at a comfortable tempo.
2. Listen to the pulse for 30 seconds without playing anything.
3. Clap only on the first click out of four.
4. Then clap on the first and third clicks.
5. After that, play one open string instead of clapping.

The goal is to feel that music begins with a simple choice: here there is sound, here there is silence, and time moves between them.

## Common confusion

You do not need to learn every note name first. Note names matter, but you can hear sound before you know what to call it.

A pause is not “the place where music stops.” A pause can be part of a musical phrase. It creates distance, expectation, and breathing space.

Almost any sound can become musical if it is used intentionally: at the right moment, with the right duration, and with a clear role.

## What to study next

After this topic, the next useful questions are:

* [what is a note](/theory/what-is-a-note/);
* [what is pitch](/theory/what-is-pitch/);
* [what is rhythm](/theory/what-is-rhythm-in-music/).

The main idea is simple: music does not begin with rules. It begins with an audible event in time. If you can hear where a sound starts, where it ends, and how much silence remains before the next event, you have already taken the first step into music theory.
`;function lm(i,r,o){return am(i,"/theory-assets",r,o)}const Ib=["listener","player","musician","arranger","composer"],Pl=[{id:"listener",order:0,aliases:["level 0","уровень 0","0"]},{id:"player",order:1,aliases:["level 1","уровень 1","1"]},{id:"musician",order:2,aliases:["level 2","уровень 2","2"]},{id:"arranger",order:3,aliases:["level 3","уровень 3","3"]},{id:"composer",order:4,aliases:["level 4","уровень 4","4"]}],xb=new Map(Pl.map(i=>[i.id,i])),wl=new Map;Pl.forEach(i=>{wl.set(i.id,i),i.aliases.forEach(r=>{wl.set(r,i)})});const Tb={ru:Yh,en:Kh};function um(i,r){const o=Tb[i].theoryPage?.readerLevelsMeta?.[r];if(!o?.label||!o.description)throw new Error(`Missing reader level localization for ${i}:${r}`);return o}function Ml(i,r){const o=i.trim().toLowerCase(),s=wl.get(o);if(!s)throw new Error(`Invalid reader_level "${i}" in ${r}. Use one of: ${Ib.join(", ")}`);return s.id}function Cb(i){const r=xb.get(i);if(!r)throw new Error(`Unknown theory reader level: ${i}`);return r}function cm(i,r){return Qe(Ue(`/theory/level/${r}`,i))}function dm(i,r){return um(i,r).label}function hm(i,r){return um(i,r).description}const Eb={ru:Object.assign({"../../../content/theory/ru/chto-takoe-nota.md":sb,"../../../content/theory/ru/chto-takoe-puls-v-muzyke.md":lb,"../../../content/theory/ru/chto-takoe-ritm-v-muzyke.md":ub,"../../../content/theory/ru/chto-takoe-ton-i-poluton.md":cb,"../../../content/theory/ru/chto-takoe-vysota-zvuka.md":db,"../../../content/theory/ru/chto-takoe-zvuk-v-muzyke.md":hb,"../../../content/theory/ru/nazvaniya-not-do-re-mi-i-c-d-e.md":mb,"../../../content/theory/ru/osnovy-intervalov-na-gitare.md":fb}),en:Object.assign({"../../../content/theory/en/interval-basics-for-guitar.md":pb,"../../../content/theory/en/note-names-do-re-mi-and-c-d-e.md":gb,"../../../content/theory/en/tone-and-semitone.md":yb,"../../../content/theory/en/what-is-a-note.md":vb,"../../../content/theory/en/what-is-pitch.md":wb,"../../../content/theory/en/what-is-pulse-in-music.md":bb,"../../../content/theory/en/what-is-rhythm-in-music.md":kb,"../../../content/theory/en/what-is-sound-in-music.md":Sb})};function vt(i){return i.trim().toLowerCase().replace(/\s+/g,"-")}function Pb(i,r,o){const{metadata:s,body:l}=tm(o,r),c=Ye(s,"date",r);if(!/^\d{4}-\d{2}-\d{2}$/.test(c))throw new Error(`Invalid date format in ${r}. Use YYYY-MM-DD`);const h=Ye(s,"slug",r),m=s.cover_image?.trim(),f=m?lm(m,i,h):null;if(m&&!f)throw new Error(`Invalid cover_image value in ${r}`);const p=vl(s,"categories");if(p.length===0)throw new Error(`Theory post ${r} must have at least one category`);const y=vl(s,"tags");return{postId:Ye(s,"post_id",r),language:i,slug:h,title:Ye(s,"title",r),description:Ye(s,"description",r),keywords:Ye(s,"keywords",r),date:new Date(Ye(s,"date",r)),intro:Ye(s,"intro",r),readerLevelId:Ml(Ye(s,"reader_level",r),r),isDraft:nm(s,"draft",r,!1),categories:p,tags:y,coverImageUrl:f,bodyMarkdown:l}}function vh(i){const r=Eb[i];return Object.entries(r).map(([o,s])=>Pb(i,o,s))}function Mb(i){const r=new Map;i.forEach(s=>{const l=r.get(s.postId)??{};l[s.language]=s,r.set(s.postId,l)});const o=[];return r.forEach((s,l)=>{if(!s.ru||!s.en)throw new Error(`Theory post "${l}" must have both ru and en versions`);if(s.ru.isDraft!==s.en.isDraft)throw new Error(`Theory post "${l}" must have same draft value in ru and en`);o.push({postId:l,ru:s.ru,en:s.en})}),o.sort((s,l)=>{const c=s.ru.date.getTime()-l.ru.date.getTime();return c!==0?c:s.postId.localeCompare(l.postId)}),o}function Ni(i,r,o){const s=new Map;return i.forEach(l=>{(r==="category"?l.categories:l.tags).forEach(h=>{const m=h.trim();if(!m)return;const f=vt(m),p=s.get(f);if(p){p.count+=1;return}const y=r==="category"?"/theory/category":"/theory/tag";s.set(f,{slug:f,label:m,count:1,path:Qe(Ue(`${y}/${encodeURIComponent(f)}`,o))})})}),[...s.values()].sort((l,c)=>c.count!==l.count?c.count-l.count:l.label.localeCompare(c.label))}function wh(i,r){return Pl.map(o=>({slug:o.id,label:dm(r,o.id),count:i.filter(s=>s.readerLevelId===o.id).length,path:cm(r,o.id),order:o.order,description:hm(r,o.id)}))}function mm(i,r){return vt(i)===vt(r)}function bh(i,r,o,s,l){if(!s||!l)return;const c=i[r].get(s);if(!c)i[r].set(s,l),i[o].set(l,s);else if(c!==l)throw new Error(`Conflicting taxonomy alternate mapping for ${r}:${s} -> ${c} / ${l}`);const h=i[o].get(l);if(!h)i[o].set(l,s);else if(h!==s)throw new Error(`Conflicting taxonomy alternate mapping for ${o}:${l} -> ${h} / ${s}`)}function Ab(i){const r={ru:new Map,en:new Map},o={ru:new Map,en:new Map};return i.forEach(s=>{const l=Math.min(s.ru.categories.length,s.en.categories.length);for(let h=0;h<l;h+=1){const m=vt(s.ru.categories[h]),f=vt(s.en.categories[h]);bh(r,"ru","en",m,f)}const c=Math.min(s.ru.tags.length,s.en.tags.length);for(let h=0;h<c;h+=1){const m=vt(s.ru.tags[h]),f=vt(s.en.tags[h]);bh(o,"ru","en",m,f)}}),{categories:r,tags:o}}function _b(){const i=[...vh("ru"),...vh("en")],o=Mb(i).filter(m=>!m.ru.isDraft&&!m.en.isDraft),s={ru:[],en:[]},l={ru:new Map,en:new Map},c=new Map,h=Ab(o);return o.forEach(m=>{const f={ru:Qe(`/ru/theory/${m.ru.slug}`),en:Qe(`/en/theory/${m.en.slug}`)};["ru","en"].forEach(p=>{const y=m[p],w=Cb(y.readerLevelId),v=hm(p,y.readerLevelId),E={postId:y.postId,language:p,slug:y.slug,title:y.title,description:y.description,keywords:y.keywords,date:y.date,intro:y.intro,readerLevelId:y.readerLevelId,readerLevel:dm(p,y.readerLevelId),readerLevelOrder:w.order,readerLevelDescription:v,readerLevelPath:cm(p,y.readerLevelId),isDraft:y.isDraft,categories:y.categories,tags:y.tags,coverImageUrl:y.coverImageUrl,bodyHtml:om(y.bodyMarkdown,{resolveMediaUrl:_=>lm(_,p,y.slug)}),faq:im(y.bodyMarkdown),previousPost:null,nextPost:null,canonicalPath:f[p],alternates:f,xDefaultPath:f[kn]};s[p].push(E),l[p].set(E.slug,E),c.set(E.slug,E.canonicalPath)})}),s.ru.sort((m,f)=>m.date.getTime()-f.date.getTime()),s.en.sort((m,f)=>m.date.getTime()-f.date.getTime()),["ru","en"].forEach(m=>{const f=s[m];f.forEach((p,y)=>{const w=y>0?f[y-1]:null,v=y<f.length-1?f[y+1]:null;p.previousPost=w?{title:w.title,path:w.canonicalPath}:null,p.nextPost=v?{title:v.title,path:v.canonicalPath}:null})}),["ru","en"].forEach(m=>{s[m].reverse()}),{byLanguage:s,bySlug:l,byAnySlug:c,readerLevels:{ru:wh(s.ru,"ru"),en:wh(s.en,"en")},categories:{ru:Ni(s.ru,"category","ru"),en:Ni(s.en,"category","en")},tags:{ru:Ni(s.ru,"tag","ru"),en:Ni(s.en,"tag","en")},taxonomyAlternates:h}}const dt=_b();function Xk(i){return dt.byLanguage[i]}function Db(i,r){return dt.bySlug[i].get(r)??null}function Zk(i,r){return dt.byLanguage[i].filter(o=>o.categories.some(s=>mm(s,r)))}function eS(i,r){return dt.byLanguage[i].filter(o=>o.tags.some(s=>mm(s,r)))}function tS(i,r){const o=Ml(r,"theory reader level route");return dt.byLanguage[i].filter(s=>s.readerLevelId===o)}function nS(i){return dt.readerLevels[i]}function rS(i){return dt.categories[i]}function oS(i){return dt.tags[i]}function jb(i,r){const o=vt(r);return dt.categories[i].find(s=>vt(s.slug)===o)??null}function Lb(i,r){const o=vt(r);return dt.tags[i].find(s=>vt(s.slug)===o)??null}function Vb(i,r){try{const o=Ml(r,"theory reader level route");return dt.readerLevels[i].find(s=>s.slug===o)??null}catch{return null}}function iS(i){return Qe(Ue("/theory",i))}function aS(i,r){return Qe(Ue(`/theory/category/${encodeURIComponent(r)}`,i))}function sS(i,r){return Qe(Ue(`/theory/tag/${encodeURIComponent(r)}`,i))}function Nb(i,r,o){if(!wt(i)||!wt(o))return null;const s=Db(i,r);return s?s.alternates[o]??null:null}function Rb(i,r,o){if(!wt(i)||!wt(o))return null;const s=Vb(o,r);return s?s.path:null}function Ob(i,r,o){if(!wt(i)||!wt(o))return null;const s=vt(r),l=dt.taxonomyAlternates.categories[i].get(s)??s,c=jb(o,l);return c?c.path:null}function Fb(i,r,o){if(!wt(i)||!wt(o))return null;const s=vt(r),l=dt.taxonomyAlternates.tags[i].get(s)??s,c=Lb(o,l);return c?c.path:null}function lS(i){return dt.byAnySlug.get(i)??null}const zb=["ru","en"],Bb=({children:i})=>{const{language:r,changeLanguage:o}=qi(),s=Tl(),l=Lt(),c=()=>{const h=r==="ru"?"en":"ru",m=l.pathname.split("/").filter(Boolean),f=m[0];if(zb.includes(f)){const p=m.slice(1);if(p[0]==="blog"&&p[1]==="tag"&&p[2]){const v=ob(f,p[2],h);if(v){s(v);return}}if(p[0]==="blog"&&p[1]&&p[1]!=="tag"){const v=rb(f,p[1],h);if(v){s(v);return}}if(p[0]==="theory"&&p[1]==="category"&&p[2]){const v=Ob(f,p[2],h);if(v){s(v);return}}if(p[0]==="theory"&&p[1]==="tag"&&p[2]){const v=Fb(f,p[2],h);if(v){s(v);return}}if(p[0]==="theory"&&p[1]==="level"&&p[2]){const v=Rb(f,p[2],h);if(v){s(v);return}}if(p[0]==="theory"&&p[1]){const v=Nb(f,p[1],h);if(v){s(v);return}}const y=p.join("/"),w=`/${h}${y?"/"+y:""}`;s(w);return}o(h)};return S.jsx(S.Fragment,{children:i({onClick:c,currentLanguage:r})})},Rn=[{id:"rhythm",labelKey:"navigation.categories.rhythm",items:[{path:"/rhythm-trainer",labelKey:"navigation.rhythm_trainer"},{path:"/rhythm-generator",labelKey:"navigation.rhythm_generator"},{path:"/rhythm-metronome",labelKey:"navigation.rhythm_metronome"},{path:"/strumming-patterns-library",labelKey:"navigation.strumming_patterns_library"}]},{id:"harmony",labelKey:"navigation.categories.harmony",items:[{path:"/harmony",labelKey:"navigation.harmony_generator"},{path:"/song",labelKey:"navigation.song_builder"},{path:"/circle-of-fifths",labelKey:"navigation.circle_of_fifths"}]},{id:"fretboard",labelKey:"navigation.categories.fretboard",items:[{path:"/chords",labelKey:"navigation.chord_generator"},{path:"/scales-fretboard-explorer",labelKey:"navigation.scale_fretboard_explorer"},{path:"/caged-explorer",labelKey:"navigation.caged_explorer"},{path:"/chord-identifier",labelKey:"navigation.chord_identifier"},{path:"/scale-identifier",labelKey:"navigation.scale_identifier"}]},{id:"ear",labelKey:"navigation.categories.ear",items:[{path:"/ear/microtone",labelKey:"navigation.microtone_trainer"},{path:"/ear/functions",labelKey:"navigation.chord_functions_trainer"},{path:"/ear/intervals",labelKey:"navigation.intervals_trainer"}]},{id:"tools",labelKey:"navigation.categories.tools",items:[{path:"/string-selector",labelKey:"navigation.string_selector"},{path:"/random-key-selector",labelKey:"navigation.random_key_selector"}]},{id:"articles",labelKey:"navigation.categories.articles",items:[{path:"/blog",labelKey:"navigation.blog"},{path:"/theory",labelKey:"navigation.theory"}]}],$b=()=>{const{t:i}=Cl(),r=Lt(),{language:o}=Gi(r.pathname),s=o??kn,l=Gi(r.pathname).path,[c,h]=A.useState(null),[m,f]=A.useState(!1),[p,y]=A.useState(Rn),[w,v]=A.useState([]),E=A.useRef(null),[_,D]=A.useState(null),[P,F]=A.useState(null),$=()=>{const H=window.innerWidth;H<640?(y(Rn.slice(0,2)),v(Rn.slice(2))):H<768?(y(Rn.slice(0,3)),v(Rn.slice(3))):(y(Rn),v([]))};A.useEffect(()=>{$();const H=()=>$();return window.addEventListener("resize",H),()=>window.removeEventListener("resize",H)},[]);const z=(()=>{for(const H of Rn)if(H.items.some(ee=>ee.path===l))return H.id;return null})(),J=()=>{h(null),f(!1),D(null),F(null)};return S.jsxs("nav",{ref:E,className:"flex items-center space-x-1 sm:space-x-2",children:[p.map(H=>{const ee=z===H.id,he=c===H.id;return S.jsxs("div",{className:"relative",children:[S.jsxs("button",{onClick:re=>{if(he)h(null),D(null);else{const ve=re.currentTarget.getBoundingClientRect();D({top:ve.bottom+8,left:ve.left}),h(H.id)}},className:`
                px-2 py-1.5 sm:px-3 sm:py-2 text-xs sm:text-sm font-medium rounded-md transition-colors whitespace-nowrap
                hover:bg-gray-100 dark:hover:bg-gray-700
                ${ee?"text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30":"text-gray-700 dark:text-gray-300"}
                ${he?"bg-gray-100 dark:bg-gray-700":""}
              `,children:[i(H.labelKey),S.jsx("svg",{className:`inline-block w-3 h-3 sm:w-4 sm:h-4 ml-1 transition-transform ${he?"rotate-180":""}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:S.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 9l-7 7-7-7"})})]}),he&&_&&S.jsxs(S.Fragment,{children:[S.jsx("div",{className:"fixed inset-0 z-40 bg-black/20 md:bg-transparent",onClick:J}),S.jsx("div",{className:"fixed bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-xl py-2 w-64 md:w-auto md:min-w-48 z-50",style:{top:`${_.top}px`,left:window.innerWidth<768?"50%":`${_.left}px`,transform:window.innerWidth<768?"translateX(-50%)":"none"},children:H.items.map(re=>{const ve=Qe(Ue(re.path,s)),je=l===re.path;return S.jsx(yo,{to:ve,className:`
                          block px-4 py-2 text-sm transition-colors
                          hover:bg-gray-100 dark:hover:bg-gray-700
                          ${je?"bg-blue-50 dark:bg-blue-900 text-blue-600 dark:text-blue-400":"text-gray-700 dark:text-gray-300"}
                        `,onClick:()=>{h(null),D(null)},children:i(re.labelKey)},re.path)})})]})]},H.id)}),w.length>0&&S.jsxs("div",{className:"relative",children:[S.jsxs("button",{onClick:H=>{if(m)f(!1),F(null);else{const ee=H.currentTarget.getBoundingClientRect();F({top:ee.bottom+8,right:window.innerWidth-ee.right}),f(!0)}},className:`
              px-2 py-1.5 sm:px-3 sm:py-2 text-xs sm:text-sm font-medium rounded-md transition-colors whitespace-nowrap
              hover:bg-gray-100 dark:hover:bg-gray-700
              text-gray-700 dark:text-gray-300
              ${m?"bg-gray-100 dark:bg-gray-700":""}
            `,children:[i("navigation.more"),S.jsx("svg",{className:`inline-block w-3 h-3 sm:w-4 sm:h-4 ml-1 transition-transform ${m?"rotate-180":""}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:S.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 9l-7 7-7-7"})})]}),m&&P&&S.jsxs(S.Fragment,{children:[S.jsx("div",{className:"fixed inset-0 z-40 bg-black/20 md:bg-transparent",onClick:J}),S.jsx("div",{className:"fixed bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-xl py-2 w-80 md:w-auto md:min-w-56 max-h-[70vh] overflow-y-auto z-50",style:{top:`${P.top}px`,right:window.innerWidth<768?"auto":`${P.right}px`,left:window.innerWidth<768?"50%":"auto",transform:window.innerWidth<768?"translateX(-50%)":"none"},children:w.map(H=>S.jsxs("div",{className:"border-b border-gray-200 dark:border-gray-700 last:border-b-0",children:[S.jsx("div",{className:"px-4 py-2 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide",children:i(H.labelKey)}),H.items.map(ee=>{const he=Qe(Ue(ee.path,s)),re=l===ee.path;return S.jsx(yo,{to:he,className:`
                            block px-4 py-2 text-sm transition-colors
                            hover:bg-gray-100 dark:hover:bg-gray-700
                            ${re?"bg-blue-50 dark:bg-blue-900 text-blue-600 dark:text-blue-400":"text-gray-700 dark:text-gray-300"}
                          `,onClick:()=>{f(!1),F(null)},children:i(ee.labelKey)},ee.path)})]},H.id))})]})]})]})},Gb=A.forwardRef(({label:i,error:r,helperText:o,leftIcon:s,rightIcon:l,inputSize:c="md",className:h="",...m},f)=>{const p="block w-full rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary-500 disabled:opacity-50 disabled:cursor-not-allowed",y={sm:"px-3 py-1.5 text-sm",md:"px-3 py-2 text-sm",lg:"px-4 py-3 text-base"},w=r?"border-red-300 dark:border-red-600 bg-red-50 dark:bg-red-900/20":"border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700",v=s?"pl-10":l?"pr-10":"",E=`${p} ${y[c]} ${w} ${v} text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 ${h}`;return S.jsxs("div",{className:"space-y-1",children:[i&&S.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300",children:i}),S.jsxs("div",{className:"relative",children:[s&&S.jsx("div",{className:"absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400",children:s}),S.jsx("input",{ref:f,className:E,...m}),l&&S.jsx("div",{className:"absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-400",children:l})]}),r&&S.jsx("p",{className:"text-sm text-red-600 dark:text-red-400",children:r}),o&&!r&&S.jsx("p",{className:"text-sm text-gray-500 dark:text-gray-400",children:o})]})});Gb.displayName="Input";const Hb=({size:i="md",variant:r="spinner",text:o,className:s=""})=>{const l={sm:"w-4 h-4",md:"w-6 h-6",lg:"w-8 h-8"},c={sm:"text-sm",md:"text-base",lg:"text-lg"},h=()=>S.jsxs("svg",{className:`animate-spin ${l[i]} text-primary-500`,fill:"none",viewBox:"0 0 24 24",children:[S.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),S.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),m=()=>S.jsx("div",{className:"flex space-x-1",children:[0,1,2].map(y=>S.jsx("div",{className:`${l[i]} bg-primary-500 rounded-full animate-pulse`,style:{animationDelay:`${y*.2}s`}},y))}),f=()=>S.jsx("div",{className:`${l[i]} bg-primary-500 rounded-full animate-pulse`}),p=()=>{switch(r){case"dots":return m();case"pulse":return f();default:return h()}};return S.jsxs("div",{className:`flex flex-col items-center justify-center space-y-2 ${s}`,children:[p(),o&&S.jsx("span",{className:`text-gray-600 dark:text-gray-400 ${c[i]}`,children:o})]})},Wb=({size:i=16,strokeWidth:r=2,title:o="Telegram",...s})=>S.jsxs("svg",{width:i,height:i,id:"Livello_1","data-name":"Livello 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 240 240",...s,children:[S.jsx("defs",{children:S.jsxs("linearGradient",{id:"linear-gradient",x1:"120",y1:"240",x2:"120",gradientUnits:"userSpaceOnUse",children:[S.jsx("stop",{offset:"0",stopColor:"#1d93d2"}),S.jsx("stop",{offset:"1",stopColor:"#38b0e3"})]})}),S.jsx("title",{children:o}),S.jsx("circle",{cx:"120",cy:"120",r:"120",fill:"url(#linear-gradient)"}),S.jsx("path",{d:"M81.229,128.772l14.237,39.406s1.78,3.687,3.686,3.687,30.255-29.492,30.255-29.492l31.525-60.89L81.737,118.6Z",fill:"#c8daea"}),S.jsx("path",{d:"M100.106,138.878l-2.733,29.046s-1.144,8.9,7.754,0,17.415-15.763,17.415-15.763",fill:"#a9c6d8"}),S.jsx("path",{d:"M81.486,130.178,52.2,120.636s-3.5-1.42-2.373-4.64c.232-.664.7-1.229,2.1-2.2,6.489-4.523,120.106-45.36,120.106-45.36s3.208-1.081,5.1-.362a2.766,2.766,0,0,1,1.885,2.055,9.357,9.357,0,0,1,.254,2.585c-.009.752-.1,1.449-.169,2.542-.692,11.165-21.4,94.493-21.4,94.493s-1.239,4.876-5.678,5.043A8.13,8.13,0,0,1,146.1,172.5c-8.711-7.493-38.819-27.727-45.472-32.177a1.27,1.27,0,0,1-.546-.9c-.093-.469.417-1.05.417-1.05s52.426-46.6,53.821-51.492c.108-.379-.3-.566-.848-.4-3.482,1.281-63.844,39.4-70.506,43.607A3.21,3.21,0,0,1,81.486,130.178Z",fill:"#fff"})]}),kh=({size:i=24,title:r="Logo",color:o="#003b80",...s})=>S.jsxs("svg",{width:i,height:i,viewBox:"0 0 192 192",fill:"none",xmlns:"http://www.w3.org/2000/svg",...s,children:[S.jsx("title",{children:r}),S.jsx("path",{fill:o,d:"m96.25 27.5c-45.194 0.1925-60.8679 14.9072-61 35-0.2734 36.9725 39.7732 95.771 60.75 95.25 20.0216 0.1271 59.218-55.2993 59.5-94.5 0.3227-19.9424-12.1799-35.3768-59.25-35.75Zm0 18.75c8.2089 0.0777 13.7795 2.2346 18.125 7.875l-6.875 6c-3.5472-3.7366-4.3681-3.6919-9.75-4-8.9344 0.7565-14.5336 8.2729-14.625 21.375 3.5803-3.5197 8.3786-5.3961 14.875-4.875 7.6158 0.2877 20.718 6.4459 20.875 20.75-0.5903 15.4566-9.6692 23.576-23.25 24-12.8552-0.2604-22.7995-7.6387-23.3752-35.38-0.0267-15.9514 6.1196-35.5708 24-35.75Zm-0.0117 35.2949c-9.2614 0.373-13.2772 7.1122-13.25 12.625 0.3436 6.6891 4.3207 13.3001 13.25 13.75 6.397-0.1652 13.4417-3.9249 13.5-13.625-0.0429-7.6096-6.043-12.546-13.5-12.75Z"})]}),Ub=({children:i})=>{const{isDark:r,toggleTheme:o}=jg(),{t:s,language:l}=qi(),c=l==="en"||l==="ru"?`/${l}`:"/";return S.jsxs("div",{className:"flex flex-col min-h-screen bg-white dark:bg-gray-900",children:[S.jsx(pw,{}),S.jsx("header",{className:"hide-on-print bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700",children:S.jsx("div",{className:"max-w-7xl mx-auto px-2 sm:px-4 lg:px-8",children:S.jsxs("div",{className:"flex justify-between items-center h-16",children:[S.jsxs("div",{className:"flex items-center space-x-2 sm:space-x-4 md:space-x-6 overflow-hidden flex-1 min-w-0",children:[S.jsxs(yo,{to:c,className:"max-md:hidden flex-shrink-0 flex items-center gap-2",children:[S.jsx(kh,{size:24,title:s("siteName"),color:r?"#5B98E5":void 0}),S.jsx("h1",{className:"text-lg font-bold text-gray-900 dark:text-white whitespace-nowrap",children:s("siteName")})]}),S.jsx($b,{})]}),S.jsxs("div",{className:"flex items-center space-x-2 sm:space-x-3 md:space-x-4 flex-shrink-0",children:[l==="ru"&&S.jsx(S.Fragment,{children:S.jsx(yo,{to:"https://t.me/read_run_play",target:"_blank",children:S.jsx(Wb,{size:26,strokeWidth:"1"})})}),S.jsx(Bb,{children:({onClick:h,currentLanguage:m})=>S.jsx("button",{onClick:h,className:"flex items-center justify-center px-2 sm:px-3 py-1.5 sm:py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors text-xs sm:text-sm font-medium","aria-label":s("nav.language"),title:s(m==="ru"?"nav.switchToEnglish":"nav.switchToRussian"),children:S.jsx("span",{className:"text-sm sm:text-base mr-0.5 sm:mr-1",children:m==="ru"?"RU":"EN"})})}),S.jsx("button",{onClick:o,className:"p-1.5 sm:p-2 rounded-md text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-primary-500","aria-label":s("nav.theme"),children:r?S.jsx("svg",{className:"w-4 h-4 sm:w-5 sm:h-5",fill:"currentColor",viewBox:"0 0 20 20",children:S.jsx("path",{fillRule:"evenodd",d:"M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z",clipRule:"evenodd"})}):S.jsx("svg",{className:"w-4 h-4 sm:w-5 sm:h-5",fill:"currentColor",viewBox:"0 0 20 20",children:S.jsx("path",{d:"M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"})})})]})]})})}),S.jsx("main",{className:"max-w-7xl w-full mx-auto py-6 px-4 sm:px-6 lg:px-8",children:i}),S.jsx("footer",{className:"hide-on-print w-full py-4 mt-auto bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 text-sm text-gray-600 dark:text-gray-400",children:S.jsxs("div",{className:"max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2",children:[S.jsx("div",{className:"text-center sm:text-left",children:s("footer.madeWithLove")}),S.jsx(kh,{size:28,title:s("siteName")}),S.jsx("div",{className:"text-center sm:text-right columns-2",children:S.jsx("div",{children:S.jsx(yo,{to:l==="en"||l==="ru"?`/${l}/feedback`:"/feedback",className:"text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors",children:s("page.feedback")})})})]})})]})};var On={},Fn={},rl={},Sh;function qb(){return Sh||(Sh=1,Object.defineProperty(rl,"__esModule",{value:!0})),rl}var ol={},Ih;function Kb(){return Ih||(Ih=1,Object.defineProperty(ol,"__esModule",{value:!0})),ol}var xh;function Yb(){return xh||(xh=1,(function(i){var r=Fn&&Fn.__createBinding||(Object.create?(function(s,l,c,h){h===void 0&&(h=c);var m=Object.getOwnPropertyDescriptor(l,c);(!m||("get"in m?!l.__esModule:m.writable||m.configurable))&&(m={enumerable:!0,get:function(){return l[c]}}),Object.defineProperty(s,h,m)}):(function(s,l,c,h){h===void 0&&(h=c),s[h]=l[c]})),o=Fn&&Fn.__exportStar||function(s,l){for(var c in s)c!=="default"&&!Object.prototype.hasOwnProperty.call(l,c)&&r(l,s,c)};Object.defineProperty(i,"__esModule",{value:!0}),o(qb(),i),o(Kb(),i)})(Fn)),Fn}var zn={},go={},Th;function Qb(){if(Th)return go;Th=1,Object.defineProperty(go,"__esModule",{value:!0}),go.GoogleAnalyticsTracker=void 0;let i=class{constructor(o){if(!o.measurementId)throw new Error("You must specify the measurement ID provided by Google Analytics. If you haven't created a property yet, please refer to the Google documentation. The measurement ID is in the format 'G-XXXXXXXXXX'.");this.config=o,this.log("Initializing Google Analytics tracker..."),this.launch()}addCustomInstruction(o,...s){return typeof window<"u"?(this.log(`Adding custom instruction: ${o}, with args: ${s}`),window.gtag(o,...s)):this.log("`window` is undefined. Skipping instruction."),this}trackPageView(o){const{page_location:s,page_title:l}=o,c=s||this.getPageUrl(),h=l||this.getPageTitle();return this.log(`Tracking page view for URL: ${c}, with title: ${h} and additional params: ${o}`),this.addCustomInstruction("config",this.config.measurementId,{send_page_view:!1,page_referrer:document.referrer,page_location:c,debug_mode:!!this.config.debug,update:!0}),this.addCustomInstruction("event","page_view",Object.assign(Object.assign({},o),{page_location:c,page_title:h})),this}trackLogin(o){return this.log(`Tracking login event with method: ${o}`),this.addCustomInstruction("event","login",{method:o})}trackEvent(o,s){return this.log(`Tracking generic event with name: ${o} and params: ${s}`),this.addCustomInstruction("event",o,s)}launch(){if(this.addGoogleTrackerToDOM(),typeof window>"u"){console.warn("Google Analytics will not work in non-browser environments.");return}if(window.dataLayer=window.dataLayer||[],window.gtag=function(){window.dataLayer.push(arguments)},window.dataLayer.length!==0){this.log("The dataLayer array already exists. Skipping initialization.");return}if(this.config.disableTracking){this.log("Tracking is disabled. Skipping initialization.");return}const o=new Date;this.log(`Launching Google Analytics tracker at ${o.toISOString()} with measurement ID: ${this.config.measurementId}`),this.addCustomInstruction("js",o),this.addCustomInstruction("config",this.config.measurementId,{send_page_view:!1,debug_mode:!!this.config.debug})}addGoogleTrackerToDOM(){var o;const s=document,l=s.createElement("script"),c=s.getElementsByTagName("script")[0];l.type="text/javascript",l.async=!0,l.defer=!0,l.src=`https://www.googletagmanager.com/gtag/js?id=${this.config.measurementId}`,this.log("Adding Google Analytics tracker to the DOM..."),this.log(`Script URL: ${l.src}`),this.log(`Found scripts parentNode? ${c?.parentNode?"Yes":"No"}`),(o=c?.parentNode)===null||o===void 0||o.insertBefore(l,c)}getPageUrl(){return this.log("Automatically getting the page URL..."),this.config.urlTransformer?(this.log("Using the URL transformer function."),this.config.urlTransformer(window.location.href)):window.location.href}getPageTitle(){return this.log("Automatically getting the page title..."),window.document.title}log(o){this.config.verbose&&console.log(`[Keiko-Analytics-Tracker] ${o}`)}};return go.GoogleAnalyticsTracker=i,go}var Ch;function fm(){return Ch||(Ch=1,(function(i){var r=zn&&zn.__createBinding||(Object.create?(function(s,l,c,h){h===void 0&&(h=c);var m=Object.getOwnPropertyDescriptor(l,c);(!m||("get"in m?!l.__esModule:m.writable||m.configurable))&&(m={enumerable:!0,get:function(){return l[c]}}),Object.defineProperty(s,h,m)}):(function(s,l,c,h){h===void 0&&(h=c),s[h]=l[c]})),o=zn&&zn.__exportStar||function(s,l){for(var c in s)c!=="default"&&!Object.prototype.hasOwnProperty.call(l,c)&&r(l,s,c)};Object.defineProperty(i,"__esModule",{value:!0}),o(Qb(),i)})(zn)),zn}var Bn={},yt={},Eh;function Jb(){if(Eh)return yt;Eh=1;var i=yt&&yt.__createBinding||(Object.create?(function(f,p,y,w){w===void 0&&(w=y);var v=Object.getOwnPropertyDescriptor(p,y);(!v||("get"in v?!p.__esModule:v.writable||v.configurable))&&(v={enumerable:!0,get:function(){return p[y]}}),Object.defineProperty(f,w,v)}):(function(f,p,y,w){w===void 0&&(w=y),f[w]=p[y]})),r=yt&&yt.__setModuleDefault||(Object.create?(function(f,p){Object.defineProperty(f,"default",{enumerable:!0,value:p})}):function(f,p){f.default=p}),o=yt&&yt.__importStar||(function(){var f=function(p){return f=Object.getOwnPropertyNames||function(y){var w=[];for(var v in y)Object.prototype.hasOwnProperty.call(y,v)&&(w[w.length]=v);return w},f(p)};return function(p){if(p&&p.__esModule)return p;var y={};if(p!=null)for(var w=f(p),v=0;v<w.length;v++)w[v]!=="default"&&i(y,p,w[v]);return r(y,p),y}})();Object.defineProperty(yt,"__esModule",{value:!0}),yt.AnalyticsProvider=yt.useAnalytics=void 0;const s=o(Io()),l=fm(),c=(0,s.createContext)({}),h=()=>(0,s.useContext)(c);yt.useAnalytics=h;const m=({config:f,children:p})=>{const y=(0,s.useMemo)(()=>new l.GoogleAnalyticsTracker(f),[f]);return s.default.createElement(c.Provider,{value:{tracker:y}},p)};return yt.AnalyticsProvider=m,yt}var Ph;function Xb(){return Ph||(Ph=1,(function(i){var r=Bn&&Bn.__createBinding||(Object.create?(function(s,l,c,h){h===void 0&&(h=c);var m=Object.getOwnPropertyDescriptor(l,c);(!m||("get"in m?!l.__esModule:m.writable||m.configurable))&&(m={enumerable:!0,get:function(){return l[c]}}),Object.defineProperty(s,h,m)}):(function(s,l,c,h){h===void 0&&(h=c),s[h]=l[c]})),o=Bn&&Bn.__exportStar||function(s,l){for(var c in s)c!=="default"&&!Object.prototype.hasOwnProperty.call(l,c)&&r(l,s,c)};Object.defineProperty(i,"__esModule",{value:!0}),o(Jb(),i)})(Bn)),Bn}var Mh;function Zb(){return Mh||(Mh=1,(function(i){var r=On&&On.__createBinding||(Object.create?(function(s,l,c,h){h===void 0&&(h=c);var m=Object.getOwnPropertyDescriptor(l,c);(!m||("get"in m?!l.__esModule:m.writable||m.configurable))&&(m={enumerable:!0,get:function(){return l[c]}}),Object.defineProperty(s,h,m)}):(function(s,l,c,h){h===void 0&&(h=c),s[h]=l[c]})),o=On&&On.__exportStar||function(s,l){for(var c in s)c!=="default"&&!Object.prototype.hasOwnProperty.call(l,c)&&r(l,s,c)};Object.defineProperty(i,"__esModule",{value:!0}),o(Yb(),i),o(fm(),i),o(Xb(),i)})(On)),On}var pm=Zb();const wr={addCustomInstruction:()=>wr,trackEvent:()=>wr,trackLogin:()=>wr,trackPageView:()=>wr},Al=A.createContext({tracker:wr}),gm="G-1W6EB07FWS".trim(),ek=gm.length>0;function tk({children:i}){const{tracker:r}=pm.useAnalytics();return S.jsx(Al.Provider,{value:{tracker:r},children:i})}function nk({children:i}){return ek?S.jsx(pm.AnalyticsProvider,{config:{measurementId:gm},children:S.jsx(tk,{children:i})}):S.jsx(Al.Provider,{value:{tracker:wr},children:i})}function ym(){return A.useContext(Al)}function cS(i,r={}){const o=ym();return A.useEffect(()=>{try{o.tracker.trackEvent("page_open",{page:i,...r})}catch{}},[]),o}function rk(i){const r=Number(i);return Number.isInteger(r)&&r>0?r:null}function ok(){const{pathname:i,search:r}=Lt(),{tracker:o}=ym(),{t:s}=Cl();return A.useEffect(()=>{const l=window.location.origin+i+r;o.trackPageView({page_title:document.title,page_location:l,language:navigator.language});const c=rk("104377724");c&&typeof window.ym=="function"&&window.ym(c,"hit",l,{title:document.title})},[i,r,o,s]),null}const il=["ru","en"],ik="ru",ak=()=>{const{changeLanguage:i}=qi(),r=Lt();return A.useEffect(()=>{const s=r.pathname.split("/").filter(Boolean)[0];if(il.includes(s))return;const l=localStorage.getItem("language");let c;if(l&&il.includes(l))c=l;else{const h=navigator.language.split("-")[0];c=il.includes(h)?h:ik}i(c)},[i,r.pathname]),null},sk=["ru","en"],Jt=({children:i})=>{const{lang:r}=og(),{changeLanguage:o}=qi(),s=A.useRef();return A.useEffect(()=>{r&&sk.includes(r)&&s.current!==r&&(o(r),s.current=r)},[r,o]),S.jsx(S.Fragment,{children:i})},Ah="yandex-metrika-tag",lk="https://mc.yandex.ru/metrika/tag.js";let _h=!1;function uk(i){const r=Number(i);return Number.isInteger(r)&&r>0?r:null}function ck(){return A.useEffect(()=>{const i=uk("104377724");if(!(!i||_h)){if(_h=!0,typeof window.ym!="function"){const r=((...o)=>{(r.a=r.a??[]).push(o)});r.l=Date.now(),window.ym=r}if(window.ym(i,"init",{defer:!0,clickmap:!0,trackLinks:!0,accurateTrackBounce:!0,webvisor:!0}),!document.getElementById(Ah)){const r=document.createElement("script");r.id=Ah,r.async=!0,r.src=lk,document.head.appendChild(r)}}},[]),null}const dk=A.lazy(()=>fe(()=>import("./HomePage-BxnK_0NA.js"),[])),hk=A.lazy(()=>fe(()=>import("./Feedback-B3AnWQ_S.js"),[])),al=A.lazy(()=>fe(()=>import("./NotFound-CLz08ZEF.js"),__vite__mapDeps([0,1]))),mk=A.lazy(()=>fe(()=>import("./BlogIndexPage-CVMtlp-J.js"),__vite__mapDeps([2,3,4]))),fk=A.lazy(()=>fe(()=>import("./BlogPostPage-f7wJnuzx.js"),__vite__mapDeps([5,3,6,7]))),pk=A.lazy(()=>fe(()=>import("./BlogTagPage-CuOmgHrm.js"),__vite__mapDeps([8,3]))),gk=A.lazy(()=>fe(()=>import("./LegacyBlogPostRedirectPage-CS5ykUe7.js"),[])),yk=A.lazy(()=>fe(()=>import("./TheoryIndexPage-OeL7iBsI.js"),__vite__mapDeps([9,3,4]))),vk=A.lazy(()=>fe(()=>import("./TheoryPostPage-DH6f2sAn.js"),__vite__mapDeps([10,3,6,7]))),wk=A.lazy(()=>fe(()=>import("./TheoryCategoryPage-m4IsOUiC.js"),__vite__mapDeps([11,3]))),bk=A.lazy(()=>fe(()=>import("./TheoryLevelPage-Bcf5cGZs.js"),__vite__mapDeps([12,3]))),kk=A.lazy(()=>fe(()=>import("./TheoryTagPage-D9fg4rhP.js"),__vite__mapDeps([13,3]))),Sk=A.lazy(()=>fe(()=>import("./LegacyTheoryPostRedirectPage-C4UB3LLO.js"),[])),Ik=A.lazy(()=>fe(()=>import("./HarmonyGenerator-Dg_yE7g5.js"),__vite__mapDeps([14,3,15,16,17,18,19,20,21,1,22,23,24]))),xk=A.lazy(()=>fe(()=>import("./SongGenerator-7FAKYs5j.js"),__vite__mapDeps([25,3,26,22,27,18,19,16,17,21,1,23,24,28,29,30,31]))),Tk=A.lazy(()=>fe(()=>import("./CircleOfFifths-B3RhKxHK.js"),__vite__mapDeps([32,3,20,21,1,22,23,24,18,17,19]))),Ck=A.lazy(()=>fe(()=>import("./ChordGenerator-Bh0MXJQI.js"),__vite__mapDeps([33,1,3,15,34,18,27,35,36,22,20,19,37,23,38,29,26,24,39]))),Ek=A.lazy(()=>fe(()=>import("./ScaleExplorer-B0R0sk2S.js"),__vite__mapDeps([40,36,3,1,34,18,27,35,22,20,38,37,23,24,39,19,41]))),Pk=A.lazy(()=>fe(()=>import("./CagedExplorer-qJ2ZeGpZ.js"),__vite__mapDeps([42,36,3,1,38,18,39,19,37,23]))),Mk=A.lazy(()=>fe(()=>import("./ChordIdentifier-uBDaaJxa.js"),__vite__mapDeps([43,36,3,1,27,34,18,35,22,44,37,23]))),Ak=A.lazy(()=>fe(()=>import("./ScaleIdentifier-B_ripAFm.js"),__vite__mapDeps([45,36,3,1,27,34,18,35,22,44,39,19,41]))),_k=A.lazy(()=>fe(()=>import("./RhythmTrainer-BdvoBuOM.js"),__vite__mapDeps([46,28,23,47,26,22,27,31,29,30]))),Dk=A.lazy(()=>fe(()=>import("./RhythmGenerator-c18CZP8S.js"),__vite__mapDeps([48,28,23,47,26,22,27,49,31,29]))),jk=A.lazy(()=>fe(()=>import("./RhythmMetronome--HGtXM7a.js"),__vite__mapDeps([50,28,23,26,22,27,29]))),Lk=A.lazy(()=>fe(()=>import("./StrummingPatternsLibraryPage-y-UqqhvS.js"),__vite__mapDeps([51,49,29,52,7,28,23]))),Vk=A.lazy(()=>fe(()=>import("./IntervalTrainer-dOi_Xc5z.js"),__vite__mapDeps([53,1,22,3,24,54]))),Nk=A.lazy(()=>fe(()=>import("./MicrotoneTrainer-Cji-9xXv.js"),__vite__mapDeps([55,24,54,1,22,3]))),Rk=A.lazy(()=>fe(()=>import("./ChordFunctionsTrainer-BsIaztg_.js"),__vite__mapDeps([56,1,22,3,21,23,24]))),Ok=A.lazy(()=>fe(()=>import("./StringSelector-BiBONFoI.js"),__vite__mapDeps([57,1,3,18,35]))),Fk=A.lazy(()=>fe(()=>import("./RandomKeySelector-D0yDbQrg.js"),__vite__mapDeps([58,1,3]))),zk={"/":S.jsx(dk,{}),"/rhythm-trainer":S.jsx(_k,{}),"/rhythm-generator":S.jsx(Dk,{}),"/rhythm-metronome":S.jsx(jk,{}),"/strumming-patterns-library":S.jsx(Lk,{}),"/chords":S.jsx(Ck,{}),"/scales-fretboard-explorer":S.jsx(Ek,{}),"/caged-explorer":S.jsx(Pk,{}),"/chord-identifier":S.jsx(Mk,{}),"/scale-identifier":S.jsx(Ak,{}),"/string-selector":S.jsx(Ok,{}),"/random-key-selector":S.jsx(Fk,{}),"/harmony":S.jsx(Ik,{}),"/song":S.jsx(xk,{}),"/circle-of-fifths":S.jsx(Tk,{}),"/ear/intervals":S.jsx(Vk,{}),"/ear/microtone":S.jsx(Nk,{}),"/ear/functions":S.jsx(Rk,{}),"/blog":S.jsx(mk,{}),"/theory":S.jsx(yk,{}),"/feedback":S.jsx(hk,{})};function Dh({to:i}){const{search:r}=Lt();return S.jsx(wg,{to:`${i}${r}`,replace:!0})}function Bk(){return S.jsxs(kg,{children:[yl.map(i=>{const r=i==="/"?"/:lang":`/:lang${i}`;return S.jsx(rt,{path:r,element:S.jsx(Jt,{children:zk[i]})},`canonical-${i}`)}),yl.map(i=>S.jsx(rt,{path:i,element:S.jsx(Dh,{to:Ue(i,kn)})},`legacy-${i}`)),S.jsx(rt,{path:"/blog/:slug",element:S.jsx(gk,{})}),S.jsx(rt,{path:"/theory/:slug",element:S.jsx(Sk,{})}),S.jsx(rt,{path:"/:lang/blog/tag/:tagSlug",element:S.jsx(Jt,{children:S.jsx(pk,{})})}),S.jsx(rt,{path:"/:lang/blog/:slug",element:S.jsx(Jt,{children:S.jsx(fk,{})})}),S.jsx(rt,{path:"/:lang/theory/category/:categorySlug",element:S.jsx(Jt,{children:S.jsx(wk,{})})}),S.jsx(rt,{path:"/:lang/theory/level/:levelSlug",element:S.jsx(Jt,{children:S.jsx(bk,{})})}),S.jsx(rt,{path:"/:lang/theory/tag/:tagSlug",element:S.jsx(Jt,{children:S.jsx(kk,{})})}),S.jsx(rt,{path:"/:lang/theory/:slug",element:S.jsx(Jt,{children:S.jsx(vk,{})})}),S.jsx(rt,{path:"/:lang/404",element:S.jsx(Jt,{children:S.jsx(al,{})})}),S.jsx(rt,{path:"/404",element:S.jsx(Dh,{to:Ue("/404",kn)})}),S.jsx(rt,{path:"/:lang/*",element:S.jsx(Jt,{children:S.jsx(al,{})})}),S.jsx(rt,{path:"*",element:S.jsx(al,{})})]})}function $k(){return S.jsx(nk,{children:S.jsx(Dg,{children:S.jsx(Av,{children:S.jsx(Pg,{children:S.jsxs(Ub,{children:[S.jsx(ak,{}),S.jsx(ck,{}),S.jsx(ok,{}),S.jsx(A.Suspense,{fallback:S.jsx("div",{className:"py-10 flex justify-center",children:S.jsx(Hb,{text:"Loading..."})}),children:S.jsx(Bk,{})})]})})})})})}function Gk(i){return i?i.startsWith("?")?i.slice(1):i:""}function Hk(i,r){const o=kn,s=Ki,{hash:l}=i;if(!l||!l.startsWith("#/"))return null;const c=l.slice(1),[h,m=""]=c.split("?"),f=xr(h||"/"),{language:p,path:y}=Gi(f),w=p&&s.includes(p)?Ue(y,p):Ue(f,o),v=new URLSearchParams(Gk(i.search));new URLSearchParams(m).forEach((D,P)=>{v.set(P,D)});const _=v.toString();return`${w}${_?`?${_}`:""}`}function Wk(){if(typeof window>"u")return;const i=Hk({search:window.location.search,hash:window.location.hash});if(!i)return;const r=`${xr(window.location.pathname)}${window.location.search}`;(i!==r||window.location.hash)&&window.history.replaceState(null,"",i)}Wk();Tp.createRoot(document.getElementById("root")).render(S.jsx($n.StrictMode,{children:S.jsx($k,{})}));export{Vb as A,tS as B,Lb as C,kn as D,eS as E,lS as F,qk as G,gl as H,Qe as I,Gb as J,jg as K,yo as L,ym as M,wg as N,Uk as O,$n as R,fe as _,cS as a,Cl as b,og as c,Kk as d,ib as e,nb as f,Yk as g,ab as h,wt as i,S as j,Qk as k,Lt as l,Jk as m,iS as n,nS as o,rS as p,oS as q,A as r,Xk as s,Db as t,qi as u,aS as v,Ue as w,sS as x,jb as y,Zk as z};
