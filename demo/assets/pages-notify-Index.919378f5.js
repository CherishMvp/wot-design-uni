import{u as e,e as l,b as t,m as i,_ as s}from"./page-wraper.eeca02a0.js";import{d as a,r as n,o,c as r,w as u,a as c,b as d,g as f,h as k}from"./index-5dc556e1.js";import{_ as m}from"./wd-cell-group.3a7e748e.js";import{_ as p}from"./demo-block.069a2303.js";import"./useChildren.f9480853.js";const _=a({__name:"Index",setup(a){let _;const g=n(!1),{showNotify:b}=e(),w=e=>{b({message:"通知内容",type:e})},C=()=>b("测试"),v=()=>{b({color:"#ad0000",message:"自定义颜色",background:"#ffe1e1"})},h=()=>{b({message:"自定义位置",position:"bottom"})},y=()=>{b({message:"自定义时长",duration:1e3})},j=()=>{g.value=!0,_&&clearTimeout(_),_=setTimeout((()=>{g.value=!1}),2e3)};return(e,a)=>{const n=f(k("wd-cell"),l),_=f(k("wd-cell-group"),m),b=f(k("demo-block"),p),x=f(k("wd-icon"),t),N=f(k("wd-notify"),i),T=f(k("page-wraper"),s);return o(),r(T,null,{default:u((()=>[c(b,{title:"基本用法",transparent:""},{default:u((()=>[c(_,null,{default:u((()=>[c(n,{title:"基础用法","is-link":"",onClick:C})])),_:1})])),_:1}),c(b,{title:"通知类型",transparent:""},{default:u((()=>[c(_,null,{default:u((()=>[c(n,{title:"主要通知","is-link":"",onClick:a[0]||(a[0]=e=>w("primary"))}),c(n,{title:"成功通知","is-link":"",onClick:a[1]||(a[1]=e=>w("success"))}),c(n,{title:"危险通知","is-link":"",onClick:a[2]||(a[2]=e=>w("danger"))}),c(n,{title:"警告通知","is-link":"",onClick:a[3]||(a[3]=e=>w("warning"))})])),_:1})])),_:1}),c(b,{title:"自定义配置",transparent:""},{default:u((()=>[c(_,null,{default:u((()=>[c(n,{title:"自定义颜色","is-link":"",onClick:v}),c(n,{title:"自定义位置","is-link":"",onClick:h}),c(n,{title:"自定义时长","is-link":"",onClick:y})])),_:1})])),_:1}),c(b,{title:"使用 Notify 组件",transparent:""},{default:u((()=>[c(_,null,{default:u((()=>[c(n,{title:"使用 Notify 组件","is-link":"",onClick:j})])),_:1})])),_:1}),c(N,{selector:"visible",type:"success",visible:g.value,"onUpdate:visible":a[4]||(a[4]=e=>g.value=e)},{default:u((()=>[c(x,{name:"check-outline",size:"inherit",color:"inherit"}),d(" 成功通知 ")])),_:1},8,["visible"])])),_:1})}}});export{_ as default};
