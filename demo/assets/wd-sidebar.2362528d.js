import{j as e,b as a,a as s}from"./page-wraper.eeca02a0.js";import{d as l,q as d,g as t,h as o,o as i,c as u,w as n,y as r,m,a as c,aa as p,b,t as f,n as v,v as w,u as y,i as _}from"./index-5dc556e1.js";import{_ as g}from"./wd-badge.8ed0d24f.js";import{u as h}from"./useChildren.f9480853.js";const x=Symbol("wd-sidebar"),C=s(l({name:"wd-sidebar-item",options:{addGlobalClass:!0,virtualHost:!0,styleIsolation:"shared"},props:{label:null,value:null,badge:null,badgeProps:null,icon:null,isDot:{type:Boolean},max:{default:99},disabled:{type:Boolean,default:!1},customStyle:{default:""},customClass:{default:""}},setup(s){const l=s,{parent:h}=e(x),C=d((()=>{let e=!1;return h&&h.props.modelValue===l.value&&(e=!0),e})),$=d((()=>{let e=!1;if(h){let a=h.children.findIndex((e=>e.value===h.props.modelValue));h.children.findIndex((e=>e.value===l.value))===a-1&&(e=!0)}return e})),I=d((()=>{let e=!1;if(h){let a=h.children.findIndex((e=>e.value===h.props.modelValue));h.children.findIndex((e=>e.value===l.value))===a+1&&(e=!0)}return e}));function V(){l.disabled||h&&h.setChange(l.value,l.label)}return(e,l)=>{const d=t(o("wd-icon"),a),h=t(o("wd-badge"),g),x=_;return i(),u(x,{onClick:V,class:v(`wd-sidebar-item ${w(C)?"wd-sidebar-item--active":""} ${w($)?"wd-sidebar-item--prefix":""}  ${w(I)?"wd-sidebar-item--suffix":""} ${s.disabled?"wd-sidebar-item--disabled":""} ${s.customClass}`),style:y(s.customStyle)},{default:n((()=>[r(e.$slots,"icon",{},void 0,!0),!e.$slots.icon&&s.icon?(i(),u(d,{key:0,"custom-class":"wd-sidebar-item__icon",name:s.icon,size:"20px"},null,8,["name"])):m("v-if",!0),c(h,p({"model-value":s.badge,"is-dot":s.isDot,max:s.max},s.badgeProps,{"custom-class":"wd-sidebar-item__badge"}),{default:n((()=>[b(f(s.label),1)])),_:1},16,["model-value","is-dot","max"])])),_:3},8,["class","style"])}}}),[["__scopeId","data-v-b52c253e"]]),$=s(l({name:"wd-sidebar",options:{addGlobalClass:!0,virtualHost:!0,styleIsolation:"shared"},props:{modelValue:{default:0},customStyle:{default:""},customClass:{default:""}},emits:["change","update:modelValue"],setup(e,{emit:a}){const s=e,{linkChildren:l}=h(x);return l({props:s,setChange:function(e,s){a("update:modelValue",e),a("change",{value:e,label:s})}}),(a,s)=>{const l=_;return i(),u(l,{class:v(`wd-sidebar ${e.customClass}`),style:y(e.customStyle)},{default:n((()=>[r(a.$slots,"default",{},void 0,!0),c(l,{class:"wd-sidebar__padding"})])),_:3},8,["class","style"])}}}),[["__scopeId","data-v-5e87c038"]]);export{C as _,$ as a};
