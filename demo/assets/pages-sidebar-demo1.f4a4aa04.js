import{_ as l,a as e}from"./wd-sidebar.2362528d.js";import{d as a,r as t,l as s,o as i,c as o,w as r,a as u,e as d,f as n,F as c,g as m,h as p,i as b,a3 as f}from"./index-5dc556e1.js";import{g as v,i as w,b as _,e as g,_ as h,a as y}from"./page-wraper.eeca02a0.js";import{_ as j}from"./wd-cell-group.3a7e748e.js";import"./wd-badge.8ed0d24f.js";import"./useChildren.f9480853.js";const k=y(a({__name:"demo1",setup(a){const y=t(1),k=t(0),x=t([]),V=new Array(24).fill({title:"标题文字",label:"这是描述这是描述"},0,24),C=t([{label:"分类一",title:"标题一",items:V},{label:"分类二",title:"标题二",items:V},{label:"分类三",title:"标题三",items:V.slice(0,18)},{label:"分类四",title:"标题四",items:V.slice(0,21)},{label:"分类五",title:"标题五",items:V},{label:"分类六",title:"标题六",items:V.slice(0,18)},{label:"分类七",title:"标题七",items:V}]);function I({value:l}){y.value=l,k.value=x.value[l]}function z(l){const{scrollTop:e}=l.detail;if(e<50)return void(y.value=0);const a=x.value.findIndex((l=>l>e&&l-e<=50));a>-1&&(y.value=a)}return s((()=>{v(".category",!0).then((l=>{w(l)&&(x.value=l.map((l=>l.top||0)),k.value=l[y.value].top||0)}))})),(a,t)=>{const s=m(p("wd-sidebar-item"),l),v=m(p("wd-sidebar"),e),w=m(p("wd-icon"),_),x=m(p("wd-cell"),g),V=m(p("wd-cell-group"),j),A=b,F=f,S=m(p("page-wraper"),h);return i(),o(S,null,{default:r((()=>[u(A,{class:"wraper"},{default:r((()=>[u(v,{modelValue:y.value,"onUpdate:modelValue":t[0]||(t[0]=l=>y.value=l),onChange:I},{default:r((()=>[(i(!0),d(c,null,n(C.value,((l,e)=>(i(),o(s,{key:e,value:e,label:l.label},null,8,["value","label"])))),128))])),_:1},8,["modelValue"]),u(F,{class:"content","scroll-y":"","scroll-with-animation":"","scroll-top":k.value,throttle:!1,onScroll:z},{default:r((()=>[(i(!0),d(c,null,n(C.value,((l,e)=>(i(),o(A,{key:e,class:"category"},{default:r((()=>[u(V,{title:l.title,border:""},{default:r((()=>[(i(!0),d(c,null,n(l.items,((l,e)=>(i(),o(x,{key:e,title:l.title,label:l.label},{default:r((()=>[u(w,{name:"github-filled",size:"24px"})])),_:2},1032,["title","label"])))),128))])),_:2},1032,["title"])])),_:2},1024)))),128))])),_:1},8,["scroll-top"])])),_:1})])),_:1})}}}),[["__scopeId","data-v-5b8c79d8"]]);export{k as default};
