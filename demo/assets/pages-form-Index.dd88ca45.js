import{d as e,U as l,r as a,o,c as r,w as u,a as t,b as d,S as s,g as m,h as n,i as p}from"./index-5dc556e1.js";import{_ as i}from"./wd-input.cca48b60.js";import{_ as c}from"./wd-cell-group.3a7e748e.js";import{_ as f}from"./wd-button.4cb1c8d4.js";import{_ as v}from"./wd-form.4168a4e8.js";import{_ as b}from"./demo-block.069a2303.js";import{c as _,_ as g,a as h}from"./page-wraper.eeca02a0.js";import"./useChildren.f9480853.js";const w=h(e({__name:"Index",setup(e){const h=l({value1:"",value2:""}),w=l({value1:"",value2:"",value3:"",value4:""}),{success:V,loading:k,close:x}=_(),j=a(),U=a(),q=e=>/1\d{10}/.test(e),y=e=>String(e).length>=4?Promise.resolve():Promise.reject("长度不得小于4"),C=e=>new Promise((l=>{k("验证中..."),setTimeout((()=>{x(),l("1234"===e)}),1e3)}));function z(){j.value.validate().then((({valid:e,errors:l})=>{e&&V({msg:"提交成功"})})).catch((e=>{console.log(e,"error")}))}function P(){U.value.validate().then((({valid:e,errors:l})=>{e&&V({msg:"提交成功"})})).catch((e=>{console.log(e,"error")}))}function I(){s({url:"/pages/form/demo1"})}function S(){s({url:"/pages/form/demo2"})}function T(){s({url:"/pages/form/demo3"})}return(e,l)=>{const a=m(n("wd-input"),i),s=m(n("wd-cell-group"),c),_=m(n("wd-button"),f),V=p,k=m(n("wd-form"),v),x=m(n("demo-block"),b),A=m(n("page-wraper"),g);return o(),r(A,null,{default:u((()=>[t(x,{title:"基础表单",transparent:""},{default:u((()=>[t(k,{ref_key:"form1",ref:j,model:h},{default:u((()=>[t(s,{border:""},{default:u((()=>[t(a,{label:"用户名","label-width":"100px",prop:"value1",clearable:"",modelValue:h.value1,"onUpdate:modelValue":l[0]||(l[0]=e=>h.value1=e),placeholder:"请输入用户名",rules:[{required:!0,message:"请填写用户名"}]},null,8,["modelValue"]),t(a,{label:"密码","label-width":"100px",prop:"value2","show-password":"",clearable:"",modelValue:h.value2,"onUpdate:modelValue":l[1]||(l[1]=e=>h.value2=e),placeholder:"请输入密码",rules:[{required:!0,message:"请填写密码"}]},null,8,["modelValue"])])),_:1}),t(V,{class:"footer"},{default:u((()=>[t(_,{type:"primary",size:"large",onClick:z,block:""},{default:u((()=>[d("提交")])),_:1})])),_:1})])),_:1},8,["model"])])),_:1}),t(x,{title:"校验规则",transparent:""},{default:u((()=>[t(k,{ref_key:"form2",ref:U,model:w},{default:u((()=>[t(s,{border:""},{default:u((()=>[t(a,{label:"校验","label-width":"100px",prop:"value1",clearable:"",modelValue:w.value1,"onUpdate:modelValue":l[2]||(l[2]=e=>w.value1=e),placeholder:"正则校验",rules:[{required:!1,pattern:/\d{6}/,message:"请输入6位字符"}]},null,8,["modelValue"]),t(a,{label:"校验","label-width":"100px",prop:"value2",clearable:"",modelValue:w.value2,"onUpdate:modelValue":l[3]||(l[3]=e=>w.value2=e),placeholder:"函数校验",rules:[{required:!1,validator:q,message:"请输入正确的手机号"}]},null,8,["modelValue","rules"]),t(a,{label:"校验","label-width":"100px",prop:"value3",clearable:"",modelValue:w.value3,"onUpdate:modelValue":l[4]||(l[4]=e=>w.value3=e),placeholder:"校验函数返回错误提示",rules:[{required:!1,message:"请输入内容",validator:y}]},null,8,["modelValue","rules"]),t(a,{label:"校验","label-width":"100px",prop:"value4",clearable:"",modelValue:w.value4,"onUpdate:modelValue":l[5]||(l[5]=e=>w.value4=e),placeholder:"异步函数校验",rules:[{required:!1,validator:C,message:"请输入1234"}]},null,8,["modelValue","rules"])])),_:1}),t(V,{class:"footer"},{default:u((()=>[t(_,{type:"primary",size:"large",onClick:P,block:""},{default:u((()=>[d("提交")])),_:1})])),_:1})])),_:1},8,["model"])])),_:1}),t(x,{title:"动态表单",transparent:""},{default:u((()=>[t(V,{class:"demo-button"},{default:u((()=>[t(_,{onClick:I,round:!1,block:"",size:"large"},{default:u((()=>[d("动态表单")])),_:1})])),_:1})])),_:1}),t(x,{title:"失焦校验",transparent:""},{default:u((()=>[t(V,{class:"demo-button"},{default:u((()=>[t(_,{onClick:S,round:!1,block:"",size:"large"},{default:u((()=>[d("失焦校验")])),_:1})])),_:1})])),_:1}),t(x,{title:"复杂表单",transparent:""},{default:u((()=>[t(V,{class:"demo-button"},{default:u((()=>[t(_,{onClick:T,round:!1,block:"",size:"large"},{default:u((()=>[d("复杂表单")])),_:1})])),_:1})])),_:1})])),_:1})}}}),[["__scopeId","data-v-426c96c9"]]);export{w as default};
