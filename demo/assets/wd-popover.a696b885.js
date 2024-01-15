import{d as e,P as o,p as s,l as t,N as l,Y as a,g as n,h as u,o as c,c as p,w as d,m as r,a as i,n as m,b as f,t as _,e as y,F as v,f as w,v as k,u as C,y as h,T as b,x as V,i as S,z as g}from"./index-5dc556e1.js";import{b as j,k as A,a as T}from"./page-wraper.eeca02a0.js";import{u as $}from"./usePopover.ce532d58.js";import{c as x,r as B,q as P,p as O}from"./clickoutside.4759e7ab.js";const Q=T(e({name:"wd-popover",options:{virtualHost:!0,addGlobalClass:!0,styleIsolation:"shared"},props:{customArrow:{default:""},customPop:{default:""},customClass:{default:""},visibleArrow:{type:Boolean,default:!0},content:{default:""},placement:{default:"bottom"},offset:{default:0},useContentSlot:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},showClose:{type:Boolean,default:!1},modelValue:{type:Boolean,default:!1},mode:{default:"normal"}},emits:["update:modelValue","menuclick","change","open","close"],setup(e,{expose:T,emit:Q}){const F=e,I=o(P,null),{proxy:q}=V();s((()=>F.content),(e=>{const{mode:o}=F;"normal"===o&&"string"!=typeof e?console.error("The value type must be a string type in normal mode"):"menu"===o&&"Array"!==z.checkType(e)&&console.error("The value type must be a Array type in menu mode")})),s((()=>F.modelValue),(e=>{e&&(z.control(F.placement,F.offset),I&&I.closeOther?I.closeOther(q):x(q)),z.showStyle.value=e?"display: inline-block;":"display: none;",Q("change",{show:e}),Q(""+(e?"open":"close"))})),t((()=>{z.init(F.placement,F.visibleArrow,"popover")})),l((()=>{I&&I.pushToQueue?I.pushToQueue(q):O(q),z.showStyle.value=F.modelValue?"opacity: 1;":"opacity: 0;"})),a((()=>{I&&I.removeFromQueue?I.removeFromQueue(q):B(q)}));const z=$();function D(e){Q("update:modelValue",!1),Q("menuclick",{item:F.content[e],index:e})}function G(){F.disabled||Q("update:modelValue",!F.modelValue)}return T({open:function(){Q("update:modelValue",!0)},close:function(){Q("update:modelValue",!1)}}),(o,s)=>{const t=S,l=n(u("wd-icon"),j),a=g,V=n(u("wd-transition"),A);return c(),p(t,{class:m(`wd-popover ${e.customClass}`),id:"popover",onClick:b(k(z).noop,["stop"])},{default:d((()=>[r(" TODO 插槽情况监听会有问题 待调整， 用于为渲染获取宽高的元素 "),i(t,{class:"wd-popover__pos wd-popover__hidden",id:"pos"},{default:d((()=>[i(t,{class:m(`wd-popover__container ${e.customPop}`)},{default:d((()=>[e.useContentSlot||"normal"!==e.mode?r("v-if",!0):(c(),p(t,{key:0,class:"wd-popover__inner"},{default:d((()=>[f(_(e.content),1)])),_:1})),e.useContentSlot||"menu"!==e.mode||"object"!=typeof e.content?r("v-if",!0):(c(),p(t,{key:1,class:"wd-popover__menu"},{default:d((()=>[(c(!0),y(v,null,w(e.content,((e,o)=>(c(),p(t,{key:o,class:"wd-popover__menu-inner",onClick:e=>D(o)},{default:d((()=>[e.iconClass?(c(),p(l,{key:0,name:e.iconClass,"custom-class":"wd-popover__icon"},null,8,["name"])):r("v-if",!0),i(a,null,{default:d((()=>[f(_(e.content),1)])),_:2},1024)])),_:2},1032,["onClick"])))),128))])),_:1}))])),_:1},8,["class"])])),_:1}),i(V,{"custom-class":"wd-popover__pos","custom-style":k(z).popStyle.value,show:e.modelValue,name:"fade",duration:200},{default:d((()=>[i(t,{class:m(`wd-popover__container ${e.customPop}`)},{default:d((()=>[F.visibleArrow?(c(),p(t,{key:0,class:m(`wd-popover__arrow ${k(z).arrowClass.value} ${e.customArrow}`),style:C(k(z).arrowStyle.value)},null,8,["class","style"])):r("v-if",!0),r(" 普通模式 "),e.useContentSlot||"normal"!==e.mode?r("v-if",!0):(c(),p(t,{key:1,class:"wd-popover__inner"},{default:d((()=>[f(_(e.content),1)])),_:1})),r(" 列表模式 "),e.useContentSlot||"menu"!==e.mode?(c(),y(v,{key:3},[r(" 用户自定义样式 "),h(o.$slots,"content",{},void 0,!0)],2112)):(c(),p(t,{key:2,class:"wd-popover__menu"},{default:d((()=>[(c(!0),y(v,null,w(e.content,((e,o)=>(c(),p(t,{key:o,class:"wd-popover__menu-inner",onClick:e=>D(o),style:C(0===o?"border-top: none":"")},{default:d((()=>["object"==typeof e&&e.iconClass?(c(),p(l,{key:0,name:e.iconClass,"custom-class":"wd-popover__icon"},null,8,["name"])):r("v-if",!0),i(t,{style:{display:"inline-block"}},{default:d((()=>[f(_("object"==typeof e&&e.content?e.content:""),1)])),_:2},1024)])),_:2},1032,["onClick","style"])))),128))])),_:1}))])),_:3},8,["class"]),e.showClose?(c(),p(l,{key:0,name:"close","custom-class":"wd-popover__close-icon",onClick:G})):r("v-if",!0)])),_:3},8,["custom-style","show"]),i(t,{onClick:G,class:"wd-popover__target",id:"target"},{default:d((()=>[h(o.$slots,"default",{},void 0,!0)])),_:3})])),_:3},8,["class","onClick"])}}}),[["__scopeId","data-v-82201d24"]]);export{Q as _};
