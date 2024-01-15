import{d as e,P as l,r as o,p as a,N as t,Y as u,q as n,g as s,h as d,o as i,c as p,w as r,a as c,e as m,F as f,f as v,n as _,b as w,t as b,m as y,y as g,u as h,v as V,x as C,z as k,i as x,G as $,T as K}from"./index-5dc556e1.js";import{j as I,h as U,b as z,l as j,a as B,g as S,e as O,_ as P}from"./page-wraper.eeca02a0.js";import{p as T,r as E,q as F,c as M,u as N}from"./clickoutside.4759e7ab.js";import{u as Q}from"./useChildren.f9480853.js";import{_ as G}from"./demo-block.069a2303.js";import{_ as H}from"./wd-button.4cb1c8d4.js";import{_ as q}from"./wd-sort-button.a089c8ab.js";const A=Symbol("wd-drop-menu"),D=B(e({name:"wd-drop-menu-item",options:{virtualHost:!0,addGlobalClass:!0,styleIsolation:"shared"},props:{customClass:{default:""},customTitle:{default:""},customIcon:{default:""},modelValue:null,options:{default:()=>[]},useDropItemSlot:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},iconName:{default:"check"},title:null,valueKey:{default:"value"},labelKey:{default:"label"},tipKey:{default:"tip"}},emits:["change","update:modelValue","open","opened","closed","close"],setup(e,{expose:$,emit:K}){const B=e,S=l(F,null),O=o(!1),P=o(!1),M=o(),N=o(12),Q=o(!0),G=o(!0),H=o(0),{parent:q}=I(A),{proxy:D}=C();function L(){P.value=!1,q&&q.fold()}a((()=>B.modelValue),(e=>{U(e)&&"number"!=typeof e&&"string"!=typeof e&&console.error("[wot-design] warning(wd-drop-menu-item): the type of value should be a number or a string.")}),{deep:!0,immediate:!0}),t((()=>{S&&S.pushToQueue?S.pushToQueue(D):T(D)})),u((()=>{S&&S.removeFromQueue?S.removeFromQueue(D):E(D)}));const Y=n((()=>{let e="";return e=P.value&&q?"down"===q.props.direction?`top: calc(var(--window-top) + ${q.offset.value}px); bottom: 0;`:`top: 0; bottom: calc(var(--window-bottom) + ${q.offset.value}px)`:"",e}));function J(){O.value=!1,K("closed")}function R(){K("open")}function W(){K("opened")}function X(){K("close")}return $({setShowPop:function(e){P.value=e},open:function(){O.value=!0,P.value=!0,q&&(Q.value=Boolean(q.props.modal),H.value=Number(q.props.duration),G.value=Boolean(q.props.closeOnClickModal),M.value="down"===q.props.direction?"top":"bottom"),K("open")},close:L}),(l,o)=>{const a=k,t=x,u=s(d("wd-icon"),z),n=s(d("wd-popup"),j);return O.value?(i(),p(t,{key:0,class:_(`wd-drop-item  ${e.customClass}`),style:h(`z-index: ${N.value}; ${V(Y)}`)},{default:r((()=>[c(n,{modelValue:P.value,"onUpdate:modelValue":o[0]||(o[0]=e=>P.value=e),"z-index":N.value,duration:H.value,position:M.value,"custom-style":"position: absolute; max-height: 80%;","modal-style":"position: absolute;",modal:Q.value,"close-on-click-modal":G.value,onClickModal:L,onBeforeEnter:R,onAfterEnter:W,onBeforeLeave:X,onAfterLeave:J},{default:r((()=>[e.options.length?(i(),p(t,{key:0},{default:r((()=>[(i(!0),m(f,null,v(e.options,((l,o)=>(i(),p(t,{key:o,onClick:e=>function(e){if(B.disabled)return;const{valueKey:l}=B,o=B.options[e];K("update:modelValue",""!==o[l]&&void 0!==o[l]?o[l]:o),L(),K("change",{value:""!==o[l]&&void 0!==o[l]?o[l]:o,selectedItem:o})}(o),class:_("wd-drop-item__option "+((""!==l[e.valueKey]?l[e.valueKey]:l)===e.modelValue?"is-active":""))},{default:r((()=>[c(t,{class:_(`wd-drop-item__title ${e.customTitle}`)},{default:r((()=>[c(a,null,{default:r((()=>[w(b(l[e.labelKey]?l[e.labelKey]:l),1)])),_:2},1024),l[e.tipKey]?(i(),p(a,{key:0,class:"wd-drop-item__tip"},{default:r((()=>[w(b(l[e.tipKey]),1)])),_:2},1024)):y("v-if",!0)])),_:2},1032,["class"]),(""!==l[e.valueKey]?l[e.valueKey]:l)===e.modelValue?(i(),p(u,{key:0,name:e.iconName,size:"20px",class:_(`wd-drop-item__icon ${e.customIcon}`)},null,8,["name","class"])):y("v-if",!0)])),_:2},1032,["onClick","class"])))),128))])),_:1})):g(l.$slots,"default",{key:1},void 0,!0)])),_:3},8,["modelValue","z-index","duration","position","modal","close-on-click-modal"])])),_:3},8,["class","style"])):y("v-if",!0)}}}),[["__scopeId","data-v-7c1d38c5"]]),L=B(e({name:"wd-drop-menu",options:{virtualHost:!0,addGlobalClass:!0,styleIsolation:"shared"},props:{customClass:{default:""},customStyle:{default:""},zIndex:{default:12},direction:{default:"down"},modal:{type:Boolean,default:!0},closeOnClickModal:{type:Boolean,default:!0},duration:{default:200}},setup(e){const u=e,n=l(F,null),y=o(null),k=o(0),I=o(0),{proxy:U}=C(),{linkChildren:j,children:B}=Q(A);function O(e){e.preventDefault(),e.stopPropagation()}function P(e){const{title:l,modelValue:o,options:a,valueKey:t,labelKey:u}=e;if(l)return l;for(let n=0,s=a.length;n<s;n++)if(o===a[n][t])return a[n][u];console.error("[wot-design] warning(wd-drop-menu-item): no value is matched in the options option.")}function T(e){y.value=e?e.$.uid:null,e?S(".wd-drop-menu",!1,U).then((l=>{if(!l)return;const{top:o,bottom:a}=l;"down"===u.direction?k.value=a:k.value=I.value-o,B.forEach((l=>{e.$.uid===l.$.uid?l.$.exposed.open():l.$.exposed.setShowPop(!1)}))})):B.forEach((e=>{e.$.exposed.setShowPop(!1)}))}return j({props:u,fold:T,offset:k}),a((()=>u.direction),(e=>{"up"!==e&&"down"!==e&&console.error("[wot design] warning(wd-drop-menu): direction must be 'up' or 'down'")}),{deep:!0,immediate:!0}),t((()=>{I.value=$().windowHeight})),(l,o)=>{const a=x,t=s(d("wd-icon"),z);return i(),p(a,{style:h(e.customStyle),class:_(`wd-drop-menu ${e.customClass}`),onClick:K(O,["stop"])},{default:r((()=>[c(a,{class:"wd-drop-menu__list"},{default:r((()=>[(i(!0),m(f,null,v(V(B),((e,l)=>(i(),p(a,{key:l,onClick:l=>function(e){e&&!e.disabled&&(n&&n.closeOther?n.closeOther(e):M(e),T(e))}(e),class:_(`wd-drop-menu__item ${e.disabled?"is-disabled":""} ${y.value===e.$.uid?"is-active":""}`)},{default:r((()=>[c(a,{class:"wd-drop-menu__item-title"},{default:r((()=>[c(a,{class:"wd-drop-menu__item-title-text"},{default:r((()=>[w(b(P(e)),1)])),_:2},1024),c(t,{name:"arrow-down",size:"14px","custom-class":"wd-drop-menu__arrow"})])),_:2},1024)])),_:2},1032,["onClick","class"])))),128))])),_:1}),g(l.$slots,"default",{},void 0,!0)])),_:3},8,["style","class","onClick"])}}}),[["__scopeId","data-v-d86a5974"]]),Y=B(e({__name:"Index",setup(e){const{closeOutside:l}=N(),a=o();o(!1);const t=o(1),u=o(0),n=o(0),m=o(0),f=o(0),v=o(0),_=o(0),b=o(0),y=o(0),g=o([{label:"全部商品",value:0},{label:"新款商品",value:1,tip:"这是补充信息"},{label:"这是比较长的筛选条件这是比较长的筛选条件",value:2}]),h=o([{label:"综合",value:0},{label:"销量",value:1},{label:"上架时间",value:2}]);function C({value:e}){console.log(e)}function k({value:e}){console.log(e)}function $({value:e}){console.log(e)}function K({value:e}){console.log(e)}function I({value:e}){console.log(e)}function U({value:e}){console.log(e)}function z({value:e}){console.log(e)}function j({value:e}){console.log(e)}function B({value:e}){console.log(e)}function S(){a.value.close()}return(e,o)=>{const T=s(d("wd-drop-menu-item"),D),E=s(d("wd-drop-menu"),L),F=s(d("demo-block"),G),M=s(d("wd-cell"),O),N=s(d("wd-button"),H),Q=x,A=s(d("wd-sort-button"),q),Y=s(d("page-wraper"),P);return i(),p(Y,null,{default:r((()=>[c(Q,{class:"demo-body",onClick:V(l)},{default:r((()=>[c(F,{title:"基本用法",transparent:""},{default:r((()=>[c(E,null,{default:r((()=>[c(T,{modelValue:t.value,"onUpdate:modelValue":o[0]||(o[0]=e=>t.value=e),options:g.value,onChange:C},null,8,["modelValue","options"]),c(T,{modelValue:u.value,"onUpdate:modelValue":o[1]||(o[1]=e=>u.value=e),options:h.value,onChange:k},null,8,["modelValue","options"])])),_:1})])),_:1}),c(F,{title:"自定义菜单内容",transparent:""},{default:r((()=>[c(E,null,{default:r((()=>[c(T,{modelValue:n.value,"onUpdate:modelValue":o[2]||(o[2]=e=>n.value=e),options:g.value,onChange:$},null,8,["modelValue","options"]),c(T,{ref_key:"dropMenu",ref:a,title:"筛选"},{default:r((()=>[c(Q,null,{default:r((()=>[c(M,{title:"标题文字",value:"内容"}),c(M,{title:"标题文字",label:"描述信息",value:"内容"}),c(Q,{style:{padding:"0 10px 20px","box-sizing":"border-box"}},{default:r((()=>[c(N,{block:"",size:"large",onClick:S},{default:r((()=>[w("主要按钮")])),_:1})])),_:1})])),_:1})])),_:1},512)])),_:1})])),_:1}),c(F,{title:"自定义菜单选项",transparent:""},{default:r((()=>[c(Q,{class:"custom-menu"},{default:r((()=>[c(E,{"custom-style":"flex: 1; min-width: 0"},{default:r((()=>[c(T,{modelValue:m.value,"onUpdate:modelValue":o[3]||(o[3]=e=>m.value=e),options:g.value,onChange:K},null,8,["modelValue","options"])])),_:1}),c(Q,{style:{flex:"1"}},{default:r((()=>[c(A,{modelValue:f.value,"onUpdate:modelValue":o[4]||(o[4]=e=>f.value=e),title:"上架时间",onChange:I},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),c(F,{title:"向上弹出",transparent:""},{default:r((()=>[c(E,{direction:"up"},{default:r((()=>[c(T,{modelValue:v.value,"onUpdate:modelValue":o[5]||(o[5]=e=>v.value=e),options:g.value,onChange:U},null,8,["modelValue","options"]),c(T,{modelValue:_.value,"onUpdate:modelValue":o[6]||(o[6]=e=>_.value=e),options:h.value,onChange:z},null,8,["modelValue","options"])])),_:1})])),_:1}),c(F,{title:"禁用",transparent:""},{default:r((()=>[c(E,{direction:"up"},{default:r((()=>[c(T,{modelValue:b.value,"onUpdate:modelValue":o[7]||(o[7]=e=>b.value=e),disabled:"",options:g.value,onChange:j},null,8,["modelValue","options"]),c(T,{modelValue:y.value,"onUpdate:modelValue":o[8]||(o[8]=e=>y.value=e),options:h.value,onChange:B},null,8,["modelValue","options"])])),_:1})])),_:1})])),_:1},8,["onClick"])])),_:1})}}}),[["__scopeId","data-v-9b9197c5"]]);export{Y as default};
