import{d as t,o as e,e as a,c as s,w as i,a as o,m as n,F as l,f as r,n as u,b as c,t as d,u as p,i as m,r as g,N as f,q as v,g as h,h as y,v as w,y as _,j as C,ah as k,ai as x}from"./index-5dc556e1.js";import{a as b,N as I,q as M,_ as $}from"./page-wraper.eeca02a0.js";import{_ as j}from"./demo-block.069a2303.js";const N=b(t({__name:"wd-swiper-nav",props:{current:{default:0},direction:{default:"horizontal"},minShowNum:{default:2},indicatorPosition:{default:"bottom"},showControls:{type:Boolean,default:!1},total:{default:0},type:{default:"dots"},customClass:{default:""},customStyle:{default:""}},emits:["change"],setup(t,{emit:g}){function f(t){g("change",{dir:t,source:"nav"})}return(g,v)=>{const h=m;return e(),a(l,null,[t.showControls?(e(),s(h,{key:0,class:"wd-swiper-nav__btn"},{default:i((()=>[o(h,{class:"wd-swiper-nav__btn--prev",onClick:v[0]||(v[0]=t=>f("prev"))}),o(h,{class:"wd-swiper-nav__btn--next",onClick:v[1]||(v[1]=t=>f("next"))})])),_:1})):n("v-if",!0),t.total>=t.minShowNum?(e(),s(h,{key:1,style:p(t.customStyle),class:u(`wd-swiper-nav wd-swiper-nav--${t.direction} wd-swiper-nav--${t.type} wd-swiper-nav--${t.indicatorPosition} ${t.customClass}`)},{default:i((()=>["dots"===t.type||"dots-bar"===t.type?(e(!0),a(l,{key:0},r(t.total,((a,i)=>(e(),s(h,{key:i,class:u(`wd-swiper-nav__item--${t.type} ${t.current===i?"is-active":""} is-${t.direction}`)},null,8,["class"])))),128)):n("v-if",!0),"fraction"===t.type?(e(),a(l,{key:1},[c(d(t.current+1)+"/"+d(t.total),1)],64)):n("v-if",!0)])),_:1},8,["style","class"])):n("v-if",!0)],64)}}}),[["__scopeId","data-v-83dcbb48"]]),S=b(t({__name:"wd-swiper",props:{autoplay:{type:Boolean,default:!0},current:{default:0},direction:{default:"horizontal"},displayMultipleItems:{default:1},duration:{default:300},easingFunction:{default:"default"},height:{default:"192"},interval:{default:5e3},list:{default:()=>[]},loop:{type:Boolean,default:!0},nextMargin:{default:"0"},indicatorPosition:{default:"bottom"},previousMargin:{default:"0"},snapToEdge:{type:Boolean,default:!1},indicator:{type:[Object,Boolean],default:!0},imageMode:{default:"aspectFill"},customStyle:{default:""},customClass:{default:""},customIndicatorClass:{default:""},customImageClass:{default:""},customPrevImageClass:{default:""},customNextImageClass:{default:""}},emits:["click","change","animationfinish"],setup(t,{emit:c}){const d=t,b=g(0);f((()=>{b.value=d.current}));const $=v((()=>{const{list:t,direction:e,indicatorPosition:a,indicator:s}=d,i={current:b.value||0,total:t.length||0,direction:e||"horizontal",indicatorPosition:a||"bottom"};return I(s)&&(i.type=s.type||"dots",i.minShowNum=s.minShowNum||2,i.showControls=s.showControls||!1),i}));function j(t,e,a){let s="";return function(t,e,a){return(t-1+a.length)%a.length===e}(t,e,a)&&(s=d.customPrevImageClass),function(t,e,a){return(t+1+a.length)%a.length===e}(t,e,a)&&(s=d.customNextImageClass),s}function S(t){const{current:e,source:a}=t.detail;b.value=e,c("change",{current:e,source:a})}function P(t){const{current:e,source:a}=t.detail;c("animationfinish",{current:e,source:a})}function B(t){const{dir:e,source:a}=t;!function(t,e){const{list:a,loop:s}=d,i=a.length;let o="next"===t?b.value+1:b.value-1;o=s?"next"===t?(b.value+1)%i:(b.value-1+i)%i:o<0||o>=i?b.value:o;if(o===b.value)return;b.value=o,c("change",{current:o,source:e})}(e,a)}return(d,g)=>{const f=C,v=k,z=x,F=h(y("wd-swiper-nav"),N),q=m;return e(),s(q,{class:u(`wd-swiper ${t.customClass}`),style:p(t.customStyle)},{default:i((()=>[o(z,{class:"wd-swiper__track",autoplay:t.autoplay,current:b.value,interval:t.interval,duration:t.duration,circular:t.loop,vertical:"vertical"==t.direction,"easing-function":t.easingFunction,"previous-margin":t.previousMargin,"next-margin":t.nextMargin,"snap-to-edge":t.snapToEdge,"display-multiple-items":t.displayMultipleItems,style:p({height:w(M)(t.height)}),onChange:S,onAnimationfinish:P},{default:i((()=>[(e(!0),a(l,null,r(t.list,((a,n)=>(e(),s(v,{key:n,class:"wd-swiper__item",onClick:t=>function(t){c("click",{index:t})}(n)},{default:i((()=>[o(f,{src:w(I)(a)?a.value:a,class:u(`wd-swiper__image ${t.customImageClass} ${j(b.value,n,t.list)}`),style:p({height:w(M)(t.height)}),mode:t.imageMode},null,8,["src","class","style","mode"])])),_:2},1032,["onClick"])))),128))])),_:1},8,["autoplay","current","interval","duration","circular","vertical","easing-function","previous-margin","next-margin","snap-to-edge","display-multiple-items","style"]),t.indicator?(e(),a(l,{key:0},[_(d.$slots,"indicator",{current:b.value,total:t.list.length},void 0,!0),d.$slots.indicator?n("v-if",!0):(e(),s(F,{key:0,"custom-class":t.customIndicatorClass,type:w($).type,current:w($).current,total:w($).total,direction:w($).direction,"indicator-position":w($).indicatorPosition,"min-show-num":w($).minShowNum,"show-controls":w($).showControls,onChange:B},null,8,["custom-class","type","current","total","direction","indicator-position","min-show-num","show-controls"]))],64)):n("v-if",!0)])),_:3},8,["class","style"])}}}),[["__scopeId","data-v-ddd9810e"]]),P=b(t({__name:"Index",setup(t){const a=g(["https://unpkg.com/wot-design-uni-assets/redpanda.jpg","https://unpkg.com/wot-design-uni-assets/capybara.jpg","https://unpkg.com/wot-design-uni-assets/panda.jpg","https://img.yzcdn.cn/vant/cat.jpeg","https://unpkg.com/wot-design-uni-assets/meng.jpg"]);function n(t){console.log(t)}function l(t){console.log(t)}return(t,r)=>{const u=h(y("wd-swiper"),S),p=h(y("demo-block"),j),g=m,f=h(y("page-wraper"),$);return e(),s(f,null,{default:i((()=>[o(p,{title:"点状指示器"},{default:i((()=>[o(u,{list:a.value,autoplay:"",current:0,indicator:{type:"dots"},onClick:n,onChange:l},null,8,["list"])])),_:1}),o(p,{title:"点条状指示器"},{default:i((()=>[o(u,{list:a.value,autoplay:"",current:1,indicator:{type:"dots-bar"},onClick:n,onChange:l},null,8,["list"])])),_:1}),o(p,{title:"数字指示器"},{default:i((()=>[o(u,{list:a.value,autoplay:"",current:2,indicator:{type:"fraction"},"indicator-position":"bottom-right",onClick:n,onChange:l},null,8,["list"])])),_:1}),o(p,{title:"手动切换"},{default:i((()=>[o(u,{list:a.value,autoplay:!1,current:3,indicator:{showControls:!0},loop:!1,onClick:n,onChange:l},null,8,["list"])])),_:1}),o(p,{title:"卡片样式"},{default:i((()=>[o(g,{class:"card-swiper"},{default:i((()=>[o(u,{autoplay:"",current:4,"custom-indicator-class":"custom-indicator-class","custom-image-class":"custom-image","custom-next-image-class":"custom-image-prev","custom-prev-image-class":"custom-image-prev",indicator:{type:"dots"},list:a.value,previousMargin:"24px",nextMargin:"24px"},null,8,["list"])])),_:1})])),_:1}),o(p,{title:"同时展示2个滑块"},{default:i((()=>[o(g,{class:"card-swiper"},{default:i((()=>[o(u,{autoplay:"",current:4,"display-multiple-items":2,"custom-indicator-class":"custom-indicator-class","custom-image-class":"custom-image","custom-next-image-class":"custom-image-prev","custom-prev-image-class":"custom-image-prev",indicator:{type:"dots"},list:a.value,previousMargin:"24px",nextMargin:"24px"},null,8,["list"])])),_:1})])),_:1}),o(p,{title:"垂直方向"},{default:i((()=>[o(u,{list:a.value,direction:"vertical","indicator-position":"right",autoplay:"",current:1,indicator:{type:"dots-bar"},onClick:n,onChange:l},null,8,["list"])])),_:1}),o(p,{title:"自定义指示器"},{default:i((()=>[o(u,{list:a.value,direction:"vertical","indicator-position":"right",autoplay:"",current:1,onClick:n,onChange:l},{indicator:i((({current:t,total:e})=>[o(g,{class:"custom-indicator",style:{position:"absolute",bottom:"24rpx",right:"24rpx"}},{default:i((()=>[c(d(t+1)+"/"+d(e),1)])),_:2},1024)])),_:1},8,["list"])])),_:1})])),_:1})}}}),[["__scopeId","data-v-8b5d4af6"]]);export{P as default};
