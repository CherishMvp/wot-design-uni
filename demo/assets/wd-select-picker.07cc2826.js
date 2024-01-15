import{d as e,r as l,p as a,q as o,N as t,a5 as s,g as d,h as u,o as i,c as r,w as c,a as n,y as p,n as f,v as m,u as v,e as y,F as b,b as h,t as k,m as _,f as w,i as g,z as x,a3 as C,x as V}from"./index-5dc556e1.js";import{v as $,w as B,j as K,b as z,n as F,F as j,h as I,i as S,g as q,s as A,a as M}from"./page-wraper.eeca02a0.js";import{_ as O}from"./wd-search.0881fcf1.js";import{_ as L,a as T}from"./wd-checkbox-group.7a3f14ee.js";import{_ as D,a as P}from"./wd-radio-group.2a18ecca.js";import{_ as U}from"./wd-button.4cb1c8d4.js";import{_ as W}from"./wd-action-sheet.2da7caf6.js";const R=M(e({name:"wd-select-picker",options:{addGlobalClass:!0,virtualHost:!0,styleIsolation:"shared"},props:{customClass:{default:""},customContentClass:{default:""},customLabelClass:{default:""},customValueClass:{default:""},label:null,labelWidth:{default:"33%"},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},placeholder:{default:"请选择"},title:null,alignRight:{type:Boolean,default:!1},error:{type:Boolean,default:!1},required:{type:Boolean,default:!1},useLabelSlot:{type:Boolean,default:!1},useDefaultSlot:{type:Boolean,default:!1},size:null,checkedColor:{default:"#4D80F0"},min:{default:0},max:{default:0},selectSize:null,loading:{type:Boolean,default:!1},loadingColor:{default:"#4D80F0"},closeOnClickModal:{type:Boolean,default:!0},modelValue:{type:[Array,Number,Boolean,String]},columns:{default:()=>[]},type:{default:"checkbox"},valueKey:{default:"value"},labelKey:{default:"label"},confirmButtonText:{default:"确认"},displayFormat:null,beforeConfirm:null,zIndex:{default:15},safeAreaInsetBottom:{type:Boolean,default:!0},filterable:{type:Boolean,default:!1},filterPlaceholder:{default:"搜索"},ellipsis:{type:Boolean,default:!1},scrollIntoView:{type:Boolean,default:!0},prop:null,rules:{default:()=>[]}},emits:["change","cancel","confirm","update:modelValue"],setup(e,{expose:M,emit:R}){const E=e,G=l(!1),N=l([]),H=l(""),J=l(!1),Q=l([]),X=l(""),Y=l([]),Z=l(0),ee=$();a((()=>E.modelValue),(e=>{e!==N.value&&(N.value=ue(e),Q.value=ue(e),fe(ue(e)))}),{deep:!0,immediate:!0}),a((()=>E.columns),(e=>{E.filterable&&X.value?ye(e,X.value):Y.value=e}),{deep:!0,immediate:!0}),a((()=>E.displayFormat),(e=>{e&&"function"!==B(e)&&console.error("The type of displayFormat must be Function")}),{deep:!0,immediate:!0}),a((()=>E.beforeConfirm),(e=>{e&&"function"!==B(e)&&console.error("The type of beforeConfirm must be Function")}),{deep:!0,immediate:!0});const{parent:le}=K(j),ae=o((()=>le&&E.prop&&le.errorMessages&&le.errorMessages[E.prop]?le.errorMessages[E.prop]:"")),oe=o((()=>{let e=!1;if(le&&le.props.rules){const l=le.props.rules;for(const a in l)Object.prototype.hasOwnProperty.call(l,a)&&a===E.prop&&Array.isArray(l[a])&&(e=l[a].some((e=>e.required)))}return E.required||E.rules.some((e=>e.required))||e}));t((()=>{N.value=ue(E.modelValue),Y.value=E.columns}));const{proxy:te}=V();function se(){}function de(e){const{valueKey:l,labelKey:a,columns:o}=E,t=o.filter((a=>a[l]===e));return t.length>0?t[0]:{[l]:e,[a]:""}}function ue(e){return"checkbox"===E.type?Array.prototype.slice.call(e):e}function ie({value:e}){N.value=e,R("change",{value:e})}function re(){G.value=!1,J.value||(N.value=ue(Q.value)),R("cancel")}function ce(){E.disabled||E.readonly||(N.value=ue(E.modelValue),G.value=!0,J.value=!1)}function ne(){if(E.loading)return G.value=!1,void R("confirm");E.beforeConfirm?E.beforeConfirm(N.value,(e=>{e&&pe()})):pe()}function pe(){J.value=!0,G.value=!1,Q.value=ue(N.value);let e={};e="checkbox"===E.type?Q.value.map((e=>de(e))):de(Q.value),R("update:modelValue",Q.value),R("confirm",{value:Q.value,selectedItems:e}),fe(Q.value)}function fe(e){let l="";if(E.displayFormat)l=E.displayFormat(e,E.columns);else{const{type:a,labelKey:o}=E;if("checkbox"===a){l=e.map((e=>de(e))).map((e=>e[o])).join(", ")}else if("radio"===a){l=de(e)[o]}else l=e}H.value=l}function me(e,l){const a=new RegExp(`(${l})`,"g");return e.split(a).map((e=>({type:e===l?"active":"normal",label:e})))}function ve({value:e}){""===e?(Y.value=[],X.value=e,s((()=>{Y.value=E.columns}))):(X.value=e,ye(E.columns,e))}function ye(e,l){const a=e.filter((e=>e[E.labelKey].indexOf(l)>-1)).map((e=>({...e,[E.labelKey]:me(e[E.labelKey],l)})));Y.value=[],s((()=>{Y.value=a}))}return M({close:re,open:ce}),(l,a)=>{const o=g,t=d(u("wd-icon"),z),V=d(u("wd-search"),O),$=x,B=d(u("wd-checkbox"),L),K=d(u("wd-checkbox-group"),T),j=d(u("wd-radio"),D),M=d(u("wd-radio-group"),P),R=d(u("wd-loading"),F),E=C,J=d(u("wd-button"),U),Q=d(u("wd-action-sheet"),W);return i(),r(o,{class:f(`wd-select-picker ${m(ee).border.value?"is-border":""} ${e.customClass}`)},{default:c((()=>[n(o,{class:"wd-select-picker__field",onClick:ce},{default:c((()=>[e.useDefaultSlot?p(l.$slots,"default",{key:0},void 0,!0):(i(),r(o,{key:1,class:f(`wd-select-picker__cell ${e.disabled&&"is-disabled"} ${e.readonly&&"is-readonly"} ${e.alignRight&&"is-align-right"} ${e.error&&"is-error"} ${e.size&&"is-"+e.size}`)},{default:c((()=>[e.label||e.useLabelSlot?(i(),r(o,{key:0,class:f(`wd-select-picker__label ${m(oe)&&"is-required"} ${e.customLabelClass}`),style:v(e.labelWidth?"min-width:"+e.labelWidth+";max-width:"+e.labelWidth+";":"")},{default:c((()=>[e.label?(i(),y(b,{key:0},[h(k(e.label),1)],64)):p(l.$slots,"label",{key:1},void 0,!0)])),_:3},8,["class","style"])):_("v-if",!0),n(o,{class:"wd-select-picker__body"},{default:c((()=>[n(o,{class:"wd-select-picker__value-wraper"},{default:c((()=>[n(o,{class:f(`wd-select-picker__value ${e.ellipsis&&"is-ellipsis"} ${e.customValueClass} ${H.value?"":"wd-select-picker__value--placeholder"}`)},{default:c((()=>[h(k(H.value||e.placeholder||"请选择"),1)])),_:1},8,["class"]),e.disabled||e.readonly?_("v-if",!0):(i(),r(t,{key:0,"custom-class":"wd-select-picker__arrow",name:"arrow-right"}))])),_:1}),m(ae)?(i(),r(o,{key:0,class:"wd-select-picker__error-message"},{default:c((()=>[h(k(m(ae)),1)])),_:1})):_("v-if",!0)])),_:1})])),_:3},8,["class"]))])),_:3}),n(Q,{modelValue:G.value,"onUpdate:modelValue":a[3]||(a[3]=e=>G.value=e),duration:250,title:e.title||"请选择","close-on-click-modal":e.closeOnClickModal,"z-index":e.zIndex,"safe-area-inset-bottom":e.safeAreaInsetBottom,onClose:re,onOpened:a[4]||(a[4]=l=>e.scrollIntoView?function(){let e="",l=[];I(N.value)&&!S(N.value)?(e="#wd-radio-group",l=[q(`#radio${N.value}`,!1,te)]):S(N.value)&&N.value.length>0&&(N.value.forEach((e=>{l.push(q(`#check${e}`,!1,te))})),e="#wd-checkbox-group"),e&&A().then((()=>{A().then((()=>{Promise.all([q(".wd-select-picker__wrapper",!1,te),q(e,!1,te),...l]).then((e=>{if(I(e)&&S(e)){const l=e[0],a=e[1],o=e.slice(2)||[];I(a)&&I(l)&&o.findIndex((e=>e.top>=l.top&&e.bottom<=l.bottom))<0&&(Z.value=-1,s((()=>{Z.value=Math.max(0,o[0].top-a.top-l.height/2)})))}})).catch((e=>{console.log(e)}))}))}))}():""),"custom-header-class":"wd-select-picker__header"},{default:c((()=>[e.filterable?(i(),r(V,{key:0,modelValue:X.value,"onUpdate:modelValue":a[0]||(a[0]=e=>X.value=e),placeholder:e.filterPlaceholder,"hide-cancel":"","placeholder-left":"",onChange:ve},null,8,["modelValue","placeholder"])):_("v-if",!0),n(E,{class:f(`wd-select-picker__wrapper ${e.filterable?"is-filterable":""} ${e.loading?"is-loading":""} ${e.customContentClass}`),"scroll-y":!e.loading,"scroll-top":Z.value,"scroll-with-animation":!0},{default:c((()=>[_(" 多选 "),"checkbox"===e.type?(i(),r(o,{key:0,id:"wd-checkbox-group"},{default:c((()=>[n(K,{modelValue:N.value,"onUpdate:modelValue":a[1]||(a[1]=e=>N.value=e),cell:"",size:e.selectSize,"checked-color":e.checkedColor,min:e.min,max:e.max,onChange:ie},{default:c((()=>[(i(!0),y(b,null,w(Y.value,(l=>(i(),r(o,{key:l[e.valueKey],id:"check"+l[e.valueKey]},{default:c((()=>[n(B,{modelValue:l[e.valueKey],disabled:l.disabled},{default:c((()=>[e.filterable&&X.value?(i(!0),y(b,{key:0},w(l[e.labelKey],(e=>(i(),y(b,{key:e.label},["active"===e.type?(i(),r($,{key:0,class:"wd-select-picker__text-active"},{default:c((()=>[h(k(e.label),1)])),_:2},1024)):(i(),y(b,{key:1},[h(k(e.label),1)],64))],64)))),128)):(i(),y(b,{key:1},[h(k(l[e.labelKey]),1)],64))])),_:2},1032,["modelValue","disabled"])])),_:2},1032,["id"])))),128))])),_:1},8,["modelValue","size","checked-color","min","max"])])),_:1})):_("v-if",!0),_(" 单选 "),"radio"===e.type?(i(),r(o,{key:1,id:"wd-radio-group"},{default:c((()=>[n(M,{modelValue:N.value,"onUpdate:modelValue":a[2]||(a[2]=e=>N.value=e),cell:"",size:e.selectSize,"checked-color":e.checkedColor,onChange:ie},{default:c((()=>[(i(!0),y(b,null,w(Y.value,((l,a)=>(i(),r(o,{key:a,id:"radio"+l[e.valueKey]},{default:c((()=>[n(j,{value:l[e.valueKey],disabled:l.disabled},{default:c((()=>[e.filterable&&X.value?(i(!0),y(b,{key:0},w(l[e.labelKey],(e=>(i(),r($,{key:e.label,clsss:""+("active"===e.type?"wd-select-picker__text-active":"")},{default:c((()=>[h(k(e.label),1)])),_:2},1032,["clsss"])))),128)):(i(),y(b,{key:1},[h(k(l[e.labelKey]),1)],64))])),_:2},1032,["value","disabled"])])),_:2},1032,["id"])))),128))])),_:1},8,["modelValue","size","checked-color"])])),_:1})):_("v-if",!0),e.loading?(i(),r(o,{key:2,class:"wd-select-picker__loading",onTouchmove:se},{default:c((()=>[n(R,{color:e.loadingColor},null,8,["color"])])),_:1})):_("v-if",!0)])),_:1},8,["class","scroll-y","scroll-top"]),_(" 确认按钮 "),n(o,{class:"wd-select-picker__footer"},{default:c((()=>[n(J,{block:"",size:"large",onClick:ne,disabled:e.loading},{default:c((()=>[h(k(e.confirmButtonText),1)])),_:1},8,["disabled"])])),_:1})])),_:1},8,["modelValue","title","close-on-click-modal","z-index","safe-area-inset-bottom"])])),_:3},8,["class"])}}}),[["__scopeId","data-v-2e82a7eb"]]);export{R as _};
