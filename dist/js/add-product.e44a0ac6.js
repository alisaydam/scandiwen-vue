"use strict";(self["webpackChunkscandiweb_vue"]=self["webpackChunkscandiweb_vue"]||[]).push([[709],{8889:function(e,t,r){r.r(t),r.d(t,{default:function(){return Ae}});var a=r(6252);function n(e,t,r,n,i,s){const o=(0,a.up)("ProductForm");return(0,a.wg)(),(0,a.j4)(o)}var i=r(9963),s=r(3577);const o=e=>((0,a.dD)("data-v-5e2d6278"),e=e(),(0,a.Cn)(),e),l={class:"container"},u={id:"product_form",action:""},c=o((()=>(0,a._)("label",{for:"SKU"}," SKU",-1))),d={key:0},$=o((()=>(0,a._)("label",{for:"name"}," Name",-1))),v={key:0},p=o((()=>(0,a._)("label",{for:"price"}," Price ($)",-1))),h={key:0},g=o((()=>(0,a._)("label",{for:"productType"},"Choose a Product:",-1))),f=o((()=>(0,a._)("option",{id:"DVD",value:"DVD"},"DVD",-1))),m=o((()=>(0,a._)("option",{id:"Book",value:"Book"},"Book",-1))),y=o((()=>(0,a._)("option",{id:"Furniture",value:"Furniture"},"Furniture",-1))),w=[f,m,y],b={key:0},_={key:0},S=o((()=>(0,a._)("label",{for:"size"}," Size (MB)",-1))),x={key:0},U={key:1},k=o((()=>(0,a._)("label",{for:"weight"}," Weight (kg)",-1))),j={key:0},z={key:2,class:"fur-con"},E=o((()=>(0,a._)("label",{for:"number"}," Height (CM)",-1))),P={key:0},F=o((()=>(0,a._)("label",{for:"width"}," Width (CM)",-1))),q={key:0},O=o((()=>(0,a._)("label",{for:"length"}," Length (CM)",-1))),C={key:0};function D(e,t,r,n,o,f){const m=(0,a.up)("Navbar");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(m,{title:"Product Add",rightItem:"Cancel",leftItem:"Save",onRightEvent:f.rightEvent,onLeftEvent:f.createProduct},null,8,["onRightEvent","onLeftEvent"]),(0,a._)("div",l,[(0,a._)("form",u,[(0,a._)("div",null,[c,(0,a.wy)((0,a._)("input",{type:"text",id:"sku",name:"sku",required:"","onUpdate:modelValue":t[0]||(t[0]=e=>n.state.SKU=e)},null,512),[[i.nr,n.state.SKU]]),n.v$.SKU.$error?((0,a.wg)(),(0,a.iD)("span",d,(0,s.zw)(n.v$.SKU.$errors[0].$message),1)):(0,a.kq)("",!0)]),(0,a._)("div",null,[$,(0,a.wy)((0,a._)("input",{type:"text",id:"name",name:"name",required:"","onUpdate:modelValue":t[1]||(t[1]=e=>n.state.name=e)},null,512),[[i.nr,n.state.name]]),n.v$.name.$error?((0,a.wg)(),(0,a.iD)("span",v,(0,s.zw)(n.v$.name.$errors[0].$message),1)):(0,a.kq)("",!0)]),(0,a._)("div",null,[p,(0,a.wy)((0,a._)("input",{type:"number",id:"price",name:"price",required:"","onUpdate:modelValue":t[2]||(t[2]=e=>n.state.price=e)},null,512),[[i.nr,n.state.price]]),n.v$.price.$error?((0,a.wg)(),(0,a.iD)("span",h,(0,s.zw)(n.v$.price.$errors[0].$message),1)):(0,a.kq)("",!0)]),(0,a._)("div",null,[g,(0,a.wy)((0,a._)("select",{id:"productType",name:"productType","onUpdate:modelValue":t[3]||(t[3]=e=>n.state.productType=e)},w,512),[[i.bM,n.state.productType]]),n.v$.productType.$error?((0,a.wg)(),(0,a.iD)("span",b,(0,s.zw)(n.v$.productType.$errors[0].$message),1)):(0,a.kq)("",!0)]),"DVD"===n.state.productType?((0,a.wg)(),(0,a.iD)("div",_,[S,(0,a.wy)((0,a._)("input",{type:"number",id:"size",name:"size","onUpdate:modelValue":t[4]||(t[4]=e=>n.state.size=e)},null,512),[[i.nr,n.state.size]]),n.v$.size.$error?((0,a.wg)(),(0,a.iD)("span",x,(0,s.zw)(n.v$.size.$errors[0].$message),1)):(0,a.kq)("",!0),(0,a._)("span",null,(0,s.zw)(n.state.size?"":"Please, provide size"),1)])):(0,a.kq)("",!0),"Book"===n.state.productType?((0,a.wg)(),(0,a.iD)("div",U,[k,(0,a.wy)((0,a._)("input",{type:"number",id:"weight",name:"weight","onUpdate:modelValue":t[5]||(t[5]=e=>n.state.weight=e)},null,512),[[i.nr,n.state.weight]]),n.v$.weight.$error?((0,a.wg)(),(0,a.iD)("span",j,(0,s.zw)(n.v$.weight.$errors[0].$message),1)):(0,a.kq)("",!0),(0,a._)("span",null,(0,s.zw)(n.state.weight?"":"Please, provide weight"),1)])):(0,a.kq)("",!0),"Furniture"===n.state.productType?((0,a.wg)(),(0,a.iD)("div",z,[(0,a._)("div",null,[E,(0,a.wy)((0,a._)("input",{type:"number",id:"height",name:"height","onUpdate:modelValue":t[6]||(t[6]=e=>n.state.height=e)},null,512),[[i.nr,n.state.height]]),n.v$.height.$error?((0,a.wg)(),(0,a.iD)("span",P,(0,s.zw)(n.v$.height.$errors[0].$message),1)):(0,a.kq)("",!0),(0,a._)("span",null,(0,s.zw)(n.state.height?"":"Please, provide height"),1)]),(0,a._)("div",null,[F,(0,a.wy)((0,a._)("input",{type:"number",id:"width",name:"width","onUpdate:modelValue":t[7]||(t[7]=e=>n.state.width=e)},null,512),[[i.nr,n.state.width]]),n.v$.width.$error?((0,a.wg)(),(0,a.iD)("span",q,(0,s.zw)(n.v$.width.$errors[0].$message),1)):(0,a.kq)("",!0),(0,a._)("span",null,(0,s.zw)(n.state.width?"":"Please, provide width"),1)]),(0,a._)("div",null,[O,(0,a.wy)((0,a._)("input",{type:"number",id:"length",name:"length","onUpdate:modelValue":t[8]||(t[8]=e=>n.state.length=e)},null,512),[[i.nr,n.state.length]]),n.v$.length.$error?((0,a.wg)(),(0,a.iD)("span",C,(0,s.zw)(n.v$.length.$errors[0].$message),1)):(0,a.kq)("",!0),(0,a._)("span",null,(0,s.zw)(n.state.length?"":"Please, provide length"),1)])])):(0,a.kq)("",!0)])])],64)}var R=r(2358),T=r(2262),V=!0;function A(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return Object.keys(e).reduce(((r,a)=>(t.includes(a)||(r[a]=(0,T.SU)(e[a])),r)),{})}function L(e){return"function"===typeof e}function N(e){return(0,T.PG)(e)||(0,T.$y)(e)}function I(e,t,r,a){return e.call(a,(0,T.SU)(t),(0,T.SU)(r),a)}function H(e){return void 0!==e.$valid?!e.$valid:!e}function K(e,t,r,n,i,s,o){let{$lazy:l,$rewardEarly:u}=i,c=arguments.length>7&&void 0!==arguments[7]?arguments[7]:[],d=arguments.length>8?arguments[8]:void 0,$=arguments.length>9?arguments[9]:void 0,v=arguments.length>10?arguments[10]:void 0;const p=(0,T.iH)(!!n.value),h=(0,T.iH)(0);r.value=!1;const g=(0,a.YP)([t,n].concat(c,v),(()=>{if(l&&!n.value||u&&!$.value&&!r.value)return;let a;try{a=I(e,t,d,o)}catch(i){a=Promise.reject(i)}h.value++,r.value=!!h.value,p.value=!1,Promise.resolve(a).then((e=>{h.value--,r.value=!!h.value,s.value=e,p.value=H(e)})).catch((e=>{h.value--,r.value=!!h.value,s.value=e,p.value=!0}))}),{immediate:!0,deep:"object"===typeof t});return{$invalid:p,$unwatch:g}}function M(e,t,r,n,i,s,o,l){let{$lazy:u,$rewardEarly:c}=n;const d=()=>({}),$=(0,a.Fl)((()=>{if(u&&!r.value||c&&!l.value)return!1;let a=!0;try{const r=I(e,t,o,s);i.value=r,a=H(r)}catch(n){i.value=n}return a}));return{$unwatch:d,$invalid:$}}function Y(e,t,r,n,i,s,o,l,u,c,d){const $=(0,T.iH)(!1),v=e.$params||{},p=(0,T.iH)(null);let h,g;e.$async?({$invalid:h,$unwatch:g}=K(e.$validator,t,$,r,n,p,i,e.$watchTargets,u,c,d)):({$invalid:h,$unwatch:g}=M(e.$validator,t,r,n,p,i,u,c));const f=e.$message,m=L(f)?(0,a.Fl)((()=>f(A({$pending:$,$invalid:h,$params:A(v),$model:t,$response:p,$validator:s,$propertyPath:l,$property:o})))):f||"";return{$message:m,$params:v,$pending:$,$invalid:h,$response:p,$unwatch:g}}function B(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const t=(0,T.SU)(e),r=Object.keys(t),a={},n={},i={};return r.forEach((e=>{const r=t[e];switch(!0){case L(r.$validator):a[e]=r;break;case L(r):a[e]={$validator:r};break;case e.startsWith("$"):i[e]=r;break;default:n[e]=r}})),{rules:a,nestedValidators:n,config:i}}function J(){}const Z="__root";function W(e,t,r){if(r)return t?t(e()):e();try{var a=Promise.resolve(e());return t?a.then(t):a}catch(n){return Promise.reject(n)}}function G(e,t){return W(e,J,t)}function Q(e,t){var r=e();return r&&r.then?r.then(t):t(r)}function X(e){return function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];try{return Promise.resolve(e.apply(this,t))}catch(a){return Promise.reject(a)}}}function ee(e,t,r,n,i,s,o,l,u){const c=Object.keys(e),d=n.get(i,e),$=(0,T.iH)(!1),v=(0,T.iH)(!1),p=(0,T.iH)(0);if(d){if(!d.$partial)return d;d.$unwatch(),$.value=d.$dirty.value}const h={$dirty:$,$path:i,$touch:()=>{$.value||($.value=!0)},$reset:()=>{$.value&&($.value=!1)},$commit:()=>{}};return c.length?(c.forEach((a=>{h[a]=Y(e[a],t,h.$dirty,s,o,a,r,i,u,v,p)})),h.$externalResults=(0,a.Fl)((()=>l.value?[].concat(l.value).map(((e,t)=>({$propertyPath:i,$property:r,$validator:"$externalResults",$uid:`${i}-externalResult-${t}`,$message:e,$params:{},$response:null,$pending:!1}))):[])),h.$invalid=(0,a.Fl)((()=>{const e=c.some((e=>(0,T.SU)(h[e].$invalid)));return v.value=e,!!h.$externalResults.value.length||e})),h.$pending=(0,a.Fl)((()=>c.some((e=>(0,T.SU)(h[e].$pending))))),h.$error=(0,a.Fl)((()=>!!h.$dirty.value&&(h.$pending.value||h.$invalid.value))),h.$silentErrors=(0,a.Fl)((()=>c.filter((e=>(0,T.SU)(h[e].$invalid))).map((e=>{const t=h[e];return(0,T.qj)({$propertyPath:i,$property:r,$validator:e,$uid:`${i}-${e}`,$message:t.$message,$params:t.$params,$response:t.$response,$pending:t.$pending})})).concat(h.$externalResults.value))),h.$errors=(0,a.Fl)((()=>h.$dirty.value?h.$silentErrors.value:[])),h.$unwatch=()=>c.forEach((e=>{h[e].$unwatch()})),h.$commit=()=>{v.value=!0,p.value=Date.now()},n.set(i,e,h),h):(d&&n.set(i,e,h),h)}function te(e,t,r,a,n,i,s){const o=Object.keys(e);return o.length?o.reduce(((o,l)=>(o[l]=ae({validations:e[l],state:t,key:l,parentKey:r,resultsCache:a,globalConfig:n,instance:i,externalResults:s}),o)),{}):{}}function re(e,t,r){const n=(0,a.Fl)((()=>[t,r].filter((e=>e)).reduce(((e,t)=>e.concat(Object.values((0,T.SU)(t)))),[]))),i=(0,a.Fl)({get(){return e.$dirty.value||!!n.value.length&&n.value.every((e=>e.$dirty))},set(t){e.$dirty.value=t}}),s=(0,a.Fl)((()=>{const t=(0,T.SU)(e.$silentErrors)||[],r=n.value.filter((e=>((0,T.SU)(e).$silentErrors||[]).length)).reduce(((e,t)=>e.concat(...t.$silentErrors)),[]);return t.concat(r)})),o=(0,a.Fl)((()=>{const t=(0,T.SU)(e.$errors)||[],r=n.value.filter((e=>((0,T.SU)(e).$errors||[]).length)).reduce(((e,t)=>e.concat(...t.$errors)),[]);return t.concat(r)})),l=(0,a.Fl)((()=>n.value.some((e=>e.$invalid))||(0,T.SU)(e.$invalid)||!1)),u=(0,a.Fl)((()=>n.value.some((e=>(0,T.SU)(e.$pending)))||(0,T.SU)(e.$pending)||!1)),c=(0,a.Fl)((()=>n.value.some((e=>e.$dirty))||n.value.some((e=>e.$anyDirty))||i.value)),d=(0,a.Fl)((()=>!!i.value&&(u.value||l.value))),$=()=>{e.$touch(),n.value.forEach((e=>{e.$touch()}))},v=()=>{e.$commit(),n.value.forEach((e=>{e.$commit()}))},p=()=>{e.$reset(),n.value.forEach((e=>{e.$reset()}))};return n.value.length&&n.value.every((e=>e.$dirty))&&$(),{$dirty:i,$errors:o,$invalid:l,$anyDirty:c,$error:d,$pending:u,$touch:$,$reset:p,$silentErrors:s,$commit:v}}function ae(e){const t=X((function(){return z(),Q((function(){if(g.$rewardEarly)return F(),G(a.Y3)}),(function(){return W(a.Y3,(function(){return new Promise((e=>{if(!j.value)return e(!x.value);const t=(0,a.YP)(j,(()=>{e(!x.value),t()}))}))}))}))}));let{validations:r,state:n,key:i,parentKey:s,childResults:o,resultsCache:l,globalConfig:u={},instance:c,externalResults:d}=e;const $=s?`${s}.${i}`:i,{rules:v,nestedValidators:p,config:h}=B(r),g=Object.assign({},u,h),f=i?(0,a.Fl)((()=>{const e=(0,T.SU)(n);return e?(0,T.SU)(e[i]):void 0})):n,m=Object.assign({},(0,T.SU)(d)||{}),y=(0,a.Fl)((()=>{const e=(0,T.SU)(d);return i?e?(0,T.SU)(e[i]):void 0:e})),w=ee(v,f,i,l,$,g,c,y,n),b=te(p,f,$,l,g,c,y),{$dirty:_,$errors:S,$invalid:x,$anyDirty:U,$error:k,$pending:j,$touch:z,$reset:E,$silentErrors:P,$commit:F}=re(w,b,o),q=i?(0,a.Fl)({get:()=>(0,T.SU)(f),set:e=>{_.value=!0;const t=(0,T.SU)(n),r=(0,T.SU)(d);r&&(r[i]=m[i]),(0,T.dq)(t[i])?t[i].value=e:t[i]=e}}):null;function O(e){return(o.value||{})[e]}function C(){(0,T.dq)(d)?d.value=m:0===Object.keys(m).length?Object.keys(d).forEach((e=>{delete d[e]})):Object.assign(d,m)}return i&&g.$autoDirty&&(0,a.YP)(f,(()=>{_.value||z();const e=(0,T.SU)(d);e&&(e[i]=m[i])}),{flush:"sync"}),(0,T.qj)(Object.assign({},w,{$model:q,$dirty:_,$error:k,$errors:S,$invalid:x,$anyDirty:U,$pending:j,$touch:z,$reset:E,$path:$||Z,$silentErrors:P,$validate:t,$commit:F},o&&{$getResultsForChild:O,$clearExternalResults:C},b))}class ne{constructor(){this.storage=new Map}set(e,t,r){this.storage.set(e,{rules:t,result:r})}checkRulesValidity(e,t,r){const a=Object.keys(r),n=Object.keys(t);if(n.length!==a.length)return!1;const i=n.every((e=>a.includes(e)));return!!i&&n.every((e=>!t[e].$params||Object.keys(t[e].$params).every((a=>(0,T.SU)(r[e].$params[a])===(0,T.SU)(t[e].$params[a])))))}get(e,t){const r=this.storage.get(e);if(!r)return;const{rules:a,result:n}=r,i=this.checkRulesValidity(e,t,a),s=n.$unwatch?n.$unwatch:()=>({});return i?n:{$dirty:n.$dirty,$partial:!0,$unwatch:s}}}const ie={COLLECT_ALL:!0,COLLECT_NONE:!1},se=Symbol("vuelidate#injectChildResults"),oe=Symbol("vuelidate#removeChildResults");function le(e){let{$scope:t,instance:r}=e;const n={},i=(0,T.iH)([]),s=(0,a.Fl)((()=>i.value.reduce(((e,t)=>(e[t]=(0,T.SU)(n[t]),e)),{})));function o(e,r){let{$registerAs:a,$scope:s,$stopPropagation:o}=r;o||t===ie.COLLECT_NONE||s===ie.COLLECT_NONE||t!==ie.COLLECT_ALL&&t!==s||(n[a]=e,i.value.push(a))}function l(e){i.value=i.value.filter((t=>t!==e)),delete n[e]}r.__vuelidateInjectInstances=[].concat(r.__vuelidateInjectInstances||[],o),r.__vuelidateRemoveInstances=[].concat(r.__vuelidateRemoveInstances||[],l);const u=(0,a.f3)(se,[]);(0,a.JJ)(se,r.__vuelidateInjectInstances);const c=(0,a.f3)(oe,[]);return(0,a.JJ)(oe,r.__vuelidateRemoveInstances),{childResults:s,sendValidationResultsToParent:u,removeValidationResultsFromParent:c}}function ue(e){return new Proxy(e,{get(e,t){return"object"===typeof e[t]?ue(e[t]):(0,a.Fl)((()=>e[t]))}})}function ce(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};1===arguments.length&&(r=e,e=void 0,t=void 0);let{$registerAs:n,$scope:i=ie.COLLECT_ALL,$stopPropagation:s,$externalResults:o,currentVueInstance:l}=r;const u=l||(0,a.FN)(),c=u?V?u.type:u.proxy.$options:{};if(!n&&u){const e=u.uid||u._uid;n=`_vuelidate_${e}`}const d=(0,T.iH)({}),$=new ne,{childResults:v,sendValidationResultsToParent:p,removeValidationResultsFromParent:h}=u?le({$scope:i,instance:u}):{childResults:(0,T.iH)({})};if(!e&&c.validations){const e=c.validations;t=(0,T.iH)({}),(0,a.wF)((()=>{t.value=u.proxy,(0,a.YP)((()=>L(e)?e.call(t.value,new ue(t.value)):e),(e=>{d.value=ae({validations:e,state:t,childResults:v,resultsCache:$,globalConfig:r,instance:u.proxy,externalResults:o||u.proxy.vuelidateExternalResults})}),{immediate:!0})})),r=c.validationsConfig||r}else{const n=(0,T.dq)(e)||N(e)?e:(0,T.qj)(e||{});(0,a.YP)(n,(e=>{d.value=ae({validations:e,state:t,childResults:v,resultsCache:$,globalConfig:r,instance:u?u.proxy:{},externalResults:o})}),{immediate:!0})}return u&&(p.forEach((e=>e(d,{$registerAs:n,$scope:i,$stopPropagation:s}))),(0,a.Jd)((()=>h.forEach((e=>e(n)))))),(0,a.Fl)((()=>Object.assign({},(0,T.SU)(d.value),v.value)))}function de(e){return"function"===typeof e}function $e(e){return null!==e&&"object"===typeof e&&!Array.isArray(e)}function ve(e){return de(e.$validator)?Object.assign({},e):{$validator:e}}function pe(e){return"object"===typeof e?e.$valid:e}function he(e){return e.$validator||e}function ge(e,t){if(!$e(e))throw new Error('[@vuelidate/validators]: First parameter to "withParams" should be an object, provided '+typeof e);if(!$e(t)&&!de(t))throw new Error("[@vuelidate/validators]: Validator must be a function or object with $validator parameter");const r=ve(t);return r.$params=Object.assign({},r.$params||{},e),r}function fe(e,t){if(!de(e)&&"string"!==typeof(0,T.SU)(e))throw new Error('[@vuelidate/validators]: First parameter to "withMessage" should be string or a function returning a string, provided '+typeof e);if(!$e(t)&&!de(t))throw new Error("[@vuelidate/validators]: Validator must be a function or object with $validator parameter");const r=ve(t);return r.$message=e,r}function me(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];const r=ve(e);return Object.assign({},r,{$async:!0,$watchTargets:t})}function ye(e){return{$validator(t){for(var r=arguments.length,a=new Array(r>1?r-1:0),n=1;n<r;n++)a[n-1]=arguments[n];return(0,T.SU)(t).reduce(((t,r)=>{const n=Object.entries(r).reduce(((t,n)=>{let[i,s]=n;const o=e[i]||{},l=Object.entries(o).reduce(((e,t)=>{let[n,o]=t;const l=he(o),u=l.call(this,s,r,...a),c=pe(u);if(e.$data[n]=u,e.$data.$invalid=!c||!!e.$data.$invalid,e.$data.$error=e.$data.$invalid,!c){let t=o.$message||"";const r=o.$params||{};"function"===typeof t&&(t=t({$pending:!1,$invalid:!c,$params:r,$model:s,$response:u})),e.$errors.push({$property:i,$message:t,$params:r,$response:u,$model:s,$pending:!1,$validator:n})}return{$valid:e.$valid&&c,$data:e.$data,$errors:e.$errors}}),{$valid:!0,$data:{},$errors:[]});return t.$data[i]=l.$data,t.$errors[i]=l.$errors,{$valid:t.$valid&&l.$valid,$data:t.$data,$errors:t.$errors}}),{$valid:!0,$data:{},$errors:{}});return{$valid:t.$valid&&n.$valid,$data:t.$data.concat(n.$data),$errors:t.$errors.concat(n.$errors)}}),{$valid:!0,$data:[],$errors:[]})},$message:e=>{let{$response:t}=e;return t?t.$errors.map((e=>Object.values(e).map((e=>e.map((e=>e.$message)))).reduce(((e,t)=>e.concat(t)),[]))):[]}}}const we=e=>{if(e=(0,T.SU)(e),Array.isArray(e))return!!e.length;if(void 0===e||null===e)return!1;if(!1===e)return!0;if(e instanceof Date)return!isNaN(e.getTime());if("object"===typeof e){for(let t in e)return!0;return!1}return!!String(e).length},be=e=>(e=(0,T.SU)(e),Array.isArray(e)?e.length:"object"===typeof e?Object.keys(e).length:String(e).length);function _e(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return e=>(e=(0,T.SU)(e),!we(e)||t.every((t=>t.test(e))))}var Se=Object.freeze({__proto__:null,withParams:ge,withMessage:fe,withAsync:me,forEach:ye,req:we,len:be,regex:_e,unwrap:T.SU,unwrapNormalizedValidator:he,unwrapValidatorResponse:pe,normalizeValidatorObject:ve}),xe=(_e(/^[a-zA-Z]*$/),_e(/^[a-zA-Z0-9]*$/),_e(/^\d*(\.\d+)?$/)),Ue={$validator:xe,$message:"Value must be numeric",$params:{type:"numeric"}};const ke=/^(?:[A-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9]{2,}(?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i;_e(ke);function je(e){return"string"===typeof e&&(e=e.trim()),we(e)}var ze={$validator:je,$message:"Value is required",$params:{type:"required"}};const Ee=(e,t)=>!e||we("string"===typeof t?t.trim():t);function Pe(e){return function(t,r){if("function"!==typeof e)return Ee((0,T.SU)(e),t);const a=e.call(this,t,r);return Ee(a,t)}}function Fe(e){return{$validator:Pe(e),$message:"The value is required",$params:{type:"requiredIf",prop:e}}}const qe=/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i;_e(qe);_e(/(^[0-9]*$)|(^-[0-9]+$)/),_e(/^[-]?\d*(\.\d+)?$/);var Oe={name:"ProductForm",setup(){const e=(0,T.qj)({SKU:"",name:"",price:"",productType:"DVD",size:"",weight:"",height:"",width:"",length:""}),t=(0,a.Fl)((()=>({SKU:{required:Se.withMessage("SKU is reqired",ze)},name:{required:Se.withMessage("Name is reqired",ze)},price:{required:Se.withMessage("Price is reqired",ze)},productType:{required:ze},size:{required:Fe((function(){return"DVD"===e.productType})),numeric:Ue},weight:{required:Fe((function(){return"Book"===e.productType})),numeric:Ue},height:{required:Fe((function(){return"Furniture"===e.productType})),numeric:Ue},width:{required:Fe((function(){return"Furniture"===e.productType})),numeric:Ue},length:{required:Fe((function(){return"Furniture"===e.productType})),numeric:Ue}}))),r=ce(t,e);return{state:e,v$:r}},methods:{rightEvent(){this.$router.push("/")},async createProduct(){this.v$.$validate();const e={SKU:this.state.SKU,name:this.state.name,price:this.state.price,productType:this.state.productType,attribute:this.state.size||this.state.weight||`${this.state.height}x${this.state.width}x${this.state.length}`};if(this.v$.$error)alert("error");else{const t=await fetch("https://product-api-sw.herokuapp.com/api/product/create.php",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(e)}),r=await t.json();r.success&&this.$router.push("/")}}},components:{Navbar:R.Z}},Ce=r(3744);const De=(0,Ce.Z)(Oe,[["render",D],["__scopeId","data-v-5e2d6278"]]);var Re=De,Te={components:{ProductForm:Re}};const Ve=(0,Ce.Z)(Te,[["render",n]]);var Ae=Ve}}]);
//# sourceMappingURL=add-product.e44a0ac6.js.map