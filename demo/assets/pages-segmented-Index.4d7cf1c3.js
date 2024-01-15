import{N as a,g as e,q as t,o as s,a as l,d as o,_ as n}from"./page-wraper.eeca02a0.js";import{d as u,U as d,r as i,q as p,p as v,aj as r,l as c,o as m,c as f,w as _,e as g,F as h,f as b,n as w,v as y,a as k,y as x,b as j,t as U,m as $,u as z,x as C,i as I,g as S,h as q}from"./index-5dc556e1.js";import{_ as B}from"./demo-block.069a2303.js";import{_ as D}from"./wd-img.9a3ff35e.js";const F=l(u({name:"wd-segmented",options:{addGlobalClass:!0,virtualHost:!0,styleIsolation:"shared"},props:{value:null,disabled:{type:Boolean,default:!1},size:{default:"middle"},options:{default:()=>[]},vibrateShort:{type:Boolean,default:!1},customStyle:{default:""},customClass:{default:""}},emits:["update:value","change"],setup(l,{emit:o}){const n=l,u=".wd-segmented__item",S=d({width:0,height:0}),q=i(0),B=i(""),D=p((()=>n.disabled||!(!n.options[0]||!a(n.options[0]))&&n.options[0].disabled));v((()=>n.value),(()=>{H(),G(),n.vibrateShort&&r({})}),{immediate:!1});const{proxy:F}=C();function G(){e(u,!0,F).then((a=>{const e=a[q.value];let l=a.slice(0,q.value).reduce(((a,e)=>a+e.width),0);l+=(e.width-S.width)/2;const o={position:"absolute",width:t(S.width),transition:"all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1)",transform:`translateX(${l}px)`,"z-index":0};B.value!==s(o)&&(B.value=s(o))}))}function H(){const e=n.options.findIndex((e=>(a(e)?e.value:e)==n.value));if(e>=0)q.value=e;else{const e=a(n.options[0])?n.options[0].value:n.options[0];o("update:value",e),o("change",{value:e})}}return c((()=>{e(".wd-segmented__item",!1,F).then((a=>{a&&(S.height=a.height,S.width=a.width,H(),G())}))})),(e,t)=>{const s=I;return m(),f(s,{class:w(`wd-segmented ${l.customClass}`),style:z(l.customStyle)},{default:_((()=>[(m(!0),g(h,null,b(l.options,((t,u)=>(m(),f(s,{class:w(`wd-segmented__item is-${l.size} ${q.value===u?"is-active":""} ${l.disabled||y(a)(t)&&t.disabled?"is-disabled":""}`),onClick:e=>function(e,t){if(n.disabled||a(e)&&e.disabled)return;const s=a(e)?e.value:e;q.value=t,G(),o("update:value",s),o("change",{value:s})}(t,u),key:u},{default:_((()=>[k(s,{class:"wd-segmented__item-label"},{default:_((()=>[x(e.$slots,"label",{option:y(a)(t)?t:{value:t}},void 0,!0),e.$slots.label?$("v-if",!0):(m(),g(h,{key:0},[j(U(y(a)(t)?t.value:t),1)],64))])),_:2},1024)])),_:2},1032,["class","onClick"])))),128)),k(s,{class:w("wd-segmented__item--active "+(y(D)?"is-disabled":"")),style:z(B.value)},null,8,["class","style"])])),_:3},8,["class","style"])}}}),[["__scopeId","data-v-1e737b38"]]),G=l(u({__name:"Index",setup(a){const e=i(["评论","点赞","贡献","打赏"]),t=i([{value:"李雷",disabled:!1,payload:{avatar:"https://unpkg.com/wot-design-uni-assets/redpanda.jpg"}},{value:"韩梅梅",disabled:!1,payload:{avatar:"https://unpkg.com/wot-design-uni-assets/capybara.jpg"}},{value:"林涛",disabled:!0,payload:{avatar:"https://unpkg.com/wot-design-uni-assets/panda.jpg"}},{value:"Tom",disabled:!1,payload:{avatar:"https://unpkg.com/wot-design-uni-assets/meng.jpg"}}]),s=i("简介"),l=i("详情"),u=i("评论"),d=i("打赏"),p=i("韩梅梅"),v=i("评论");return(a,i)=>{const r=S(q("wd-toast"),o),c=S(q("wd-segmented"),F),g=I,h=S(q("demo-block"),B),b=S(q("wd-img"),D),w=S(q("page-wraper"),n);return m(),f(g,null,{default:_((()=>[k(r),k(w,null,{default:_((()=>[k(h,{title:"大型分段器",transparent:""},{default:_((()=>[k(g,{class:"section"},{default:_((()=>[k(c,{options:e.value,value:s.value,"onUpdate:value":i[0]||(i[0]=a=>s.value=a),size:"large"},null,8,["options","value"])])),_:1})])),_:1}),k(h,{title:"默认分段器",transparent:""},{default:_((()=>[k(g,{class:"section"},{default:_((()=>[k(c,{options:e.value,value:l.value,"onUpdate:value":i[1]||(i[1]=a=>l.value=a)},null,8,["options","value"])])),_:1})])),_:1}),k(h,{title:"小型分段器",transparent:""},{default:_((()=>[k(g,{class:"section"},{default:_((()=>[k(c,{options:e.value,value:u.value,"onUpdate:value":i[2]||(i[2]=a=>u.value=a),size:"small"},null,8,["options","value"])])),_:1})])),_:1}),k(h,{title:"带振动效果的分段器",transparent:""},{default:_((()=>[k(g,{class:"section"},{default:_((()=>[k(c,{options:e.value,value:d.value,"onUpdate:value":i[3]||(i[3]=a=>d.value=a),"vibrate-short":!0},null,8,["options","value"])])),_:1})])),_:1}),k(h,{title:"禁用分段器",transparent:""},{default:_((()=>[k(g,{class:"section"},{default:_((()=>[k(c,{options:e.value,value:v.value,"onUpdate:value":i[4]||(i[4]=a=>v.value=a),disabled:""},null,8,["options","value"])])),_:1})])),_:1}),k(h,{title:"自定义渲染分段器标签",transparent:""},{default:_((()=>[k(g,{class:"section"},{default:_((()=>[k(c,{options:t.value,value:p.value,"onUpdate:value":i[5]||(i[5]=a=>p.value=a),"vibrate-short":!0},{label:_((({option:a})=>[k(g,{class:"section-slot"},{default:_((()=>[k(b,{round:"",width:"32px",height:"32px",src:a.payload.avatar},null,8,["src"]),k(g,{class:"name"},{default:_((()=>[j(U(a.value),1)])),_:2},1024)])),_:2},1024)])),_:1},8,["options","value"])])),_:1})])),_:1})])),_:1})])),_:1})}}}),[["__scopeId","data-v-e1e22d36"]]);export{G as default};
