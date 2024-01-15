import{d as t,r as e,q as a,p as l,o as i,c as s,w as r,v as o,e as p,F as h,f as n,n as d,u,m as c,i as w,a as x,g,h as m}from"./index-5dc556e1.js";import{D as y,q as f,a as _,_ as k}from"./page-wraper.eeca02a0.js";import{_ as v}from"./demo-block.069a2303.js";const b=_(t({name:"wd-skeleton",options:{virtualHost:!0,addGlobalClass:!0,styleIsolation:"shared"},props:{theme:{type:String,default:"text"},rowCol:{type:Array,default:()=>[]},loading:{type:Boolean,default:!0},animation:{type:String,default:""},customClass:{type:[String,Array,Object],default:""},customStyle:{type:Object,default:()=>({})}},setup(t){const x=t,g={avatar:[{type:"circle",height:"64px",width:"64px"}],image:[{type:"rect",height:"64px",width:"64px"}],text:[1,[{width:"24%",height:"16px",marginRight:"16px"},{width:"76%",height:"16px"}]],paragraph:[1,1,1,{width:"55%"}]},m=e([]),_=a((()=>m.value.map((t=>{if(y(t))return[{class:k({type:"text"}),style:{}}];if(Array.isArray(t))return t.map((t=>({...t,class:k(t),style:v(t)})));const e=t;return[{...e,class:k(e),style:v(e)}]}))));function k(t){return["wd-skeleton__col",`wd-skeleton--type-${t.type||"text"}`,{[`wd-skeleton--animation-${x.animation}`]:x.animation}]}function v(t){const e={},a=["size","width","height","margin","background","marginLeft","marginRight","borderRadius","backgroundColor"];for(const l of a)if(Object.prototype.hasOwnProperty.call(t,l)){const a=f(t[l]);"size"===l?(e.width=a,e.height=a):e[l]=a}return e}return l((()=>x.rowCol),(t=>{m.value=[...Array.isArray(t)&&t.length?x.rowCol:g[x.theme]]}),{immediate:!0}),(t,e)=>{const a=w;return i(),s(a,{class:d(["wd-skeleton",[x.customClass]]),style:u(x.customStyle)},{default:r((()=>[o(_).length?(i(),s(a,{key:0,class:"wd-skeleton__content"},{default:r((()=>[(i(!0),p(h,null,n(o(_),((t,e)=>(i(),s(a,{class:"wd-skeleton__row",key:`row-${e}`},{default:r((()=>[(i(!0),p(h,null,n(t,((t,e)=>(i(),s(a,{key:`col-${e}`,class:d(t.class),style:u(t.style)},null,8,["class","style"])))),128))])),_:2},1024)))),128))])),_:1})):c("v-if",!0)])),_:1},8,["class","style"])}}}),[["__scopeId","data-v-805bcffa"]]),C=t({__name:"Index",setup(t){const e=[{title:"头像骨架屏",value:"avatar"},{title:"图片骨架屏",value:"image"},{title:"文本骨架屏",value:"text"},{title:"段落骨架屏",value:"paragraph"}],a=[[{width:"48px",height:"48px"},{width:"48px",height:"48px"},{width:"48px",height:"48px"},{width:"48px",height:"48px"},{width:"48px",height:"48px"}],[{width:"48px",height:"16px"},{width:"48px",height:"16px"},{width:"48px",height:"16px"},{width:"48px",height:"16px"},{width:"48px",height:"16px"}]],l=[{height:"171px"},1,{width:"107px"},[{width:"93px"},{width:"32px",marginLeft:"41px"}]];return(t,o)=>{const d=g(m("wd-skeleton"),b),u=g(m("demo-block"),v),c=w,y=g(m("page-wraper"),k);return i(),s(y,null,{default:r((()=>[(i(),p(h,null,n(e,(t=>x(u,{key:t.value,title:t.title},{default:r((()=>[x(d,{theme:t.value},null,8,["theme"])])),_:2},1032,["title"]))),64)),x(u,{title:"宫格骨架屏"},{default:r((()=>[x(d,{"row-col":a})])),_:1}),x(u,{title:"单元格骨架屏"},{default:r((()=>[x(c,{style:{display:"flex"}},{default:r((()=>[x(d,{"row-col":[{size:"48px",type:"circle"}]}),x(d,{"custom-style":{width:"100%",marginLeft:"12px"},"row-col":[{width:"50%"},{width:"100%"}]})])),_:1}),x(c,{style:{display:"flex","margin-top":"20px"}},{default:r((()=>[x(d,{"row-col":[{size:"48px",type:"rect"}]}),x(d,{"custom-style":{width:"100%",marginLeft:"12px"},"row-col":[{width:"50%"},{width:"100%"}]})])),_:1})])),_:1}),x(u,{title:"图片组合骨架屏"},{default:r((()=>[x(d,{"row-col":l}),x(d,{"custom-style":{marginTop:"20px"},"row-col":l})])),_:1}),x(u,{title:"渐变加载动画"},{default:r((()=>[x(d,{animation:"gradient",theme:"paragraph"})])),_:1}),x(u,{title:"闪烁加载动画"},{default:r((()=>[x(c,{style:{display:"flex"}},{default:r((()=>[x(d,{"row-col":[{size:"48px",type:"circle"}]}),x(d,{"custom-style":{width:"100%",marginLeft:"12px"},animation:"flashed",theme:"paragraph"})])),_:1})])),_:1})])),_:1})}}});export{C as default};
