import{_ as s,G as a,o as n,c as o,L as e,U as l}from"./chunks/framework.68c4918c.js";const u=JSON.parse('{"title":"Img 图片","description":"","frontmatter":{},"headers":[],"relativePath":"component/img.md","filePath":"component/img.md","lastUpdated":1705308361000}'),p={name:"component/img.md"},r=l(`<h1 id="img-图片" tabindex="-1">Img 图片 <a class="header-anchor" href="#img-图片" aria-label="Permalink to &quot;Img 图片&quot;">​</a></h1><p>增强版的 img 标签，提供多种图片填充模式，支持图片懒加载、加载完成、加载失败</p><h2 id="基本用法" tabindex="-1">基本用法 <a class="header-anchor" href="#基本用法" aria-label="Permalink to &quot;基本用法&quot;">​</a></h2><p>基础用法与原生 image 标签一致，可以设置 <code>src</code> 、 <code>width</code> 、<code>height</code> 等原生属性。</p><p>原生属性，参考<a href="https://uniapp.dcloud.net.cn/component/image.html#image" target="_blank" rel="noreferrer">uni-app image官方文档</a>。</p><p>此处需要注意的是src属性：</p><p>使用 <code>相对路径</code>，需要注意 <code>src</code> 需要以组件存放位置相对图片位置为相对路径。</p><p>使用 <code>文件导入</code> ，需要注意的是微信小程序image标签路径接受二进制数据以及base64编码。单独使用import图片路径无法访问。</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">wd-img</span></span>
<span class="line"><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:width</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">100</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:height</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">100</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#C792EA;">:src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">joy</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">/&gt;</span></span></code></pre></div><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// import { joy } from &#39;../images/joy&#39;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> joy </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">data:image/jpeg;base64,...</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">// 图片文件base64</span></span></code></pre></div><h2 id="填充模式" tabindex="-1">填充模式 <a class="header-anchor" href="#填充模式" aria-label="Permalink to &quot;填充模式&quot;">​</a></h2><p>通过 <code>mode</code> 属性可以设置图片填充模式，可选值见下方表格。</p><p>mode为小程序原生属性，参考<a href="https://developers.weixin.qq.com/miniprogram/dev/component/image.html" target="_blank" rel="noreferrer">微信小程序image官方文档</a>。</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">wd-img</span></span>
<span class="line"><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:width</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">100</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:height</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">100</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#C792EA;">mode</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">center</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#C792EA;">:src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">joy</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">/&gt;</span></span></code></pre></div><h2 id="圆形设置" tabindex="-1">圆形设置 <a class="header-anchor" href="#圆形设置" aria-label="Permalink to &quot;圆形设置&quot;">​</a></h2><p>通过 <code>round</code> 属性可以设置以圆形展示。</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">wd-img</span></span>
<span class="line"><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:width</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">100</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:height</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">100</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#C792EA;">round</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#C792EA;">:src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">joy</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">/&gt;</span></span></code></pre></div><h2 id="attributes" tabindex="-1">Attributes <a class="header-anchor" href="#attributes" aria-label="Permalink to &quot;Attributes&quot;">​</a></h2><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th><th>最低版本</th></tr></thead><tbody><tr><td>src</td><td>图片链接</td><td>string</td><td>-</td><td>-</td><td>-</td></tr><tr><td>width</td><td>宽度，默认单位为px</td><td>number / string</td><td>-</td><td>-</td><td>-</td></tr><tr><td>height</td><td>高度，默认单位为px</td><td>number / string</td><td>-</td><td>-</td><td>-</td></tr><tr><td>mode</td><td>填充模式</td><td>string</td><td>&#39;top left&#39; / &#39;top right&#39; / &#39;bottom left&#39; / &#39;bottom right&#39; / &#39;right&#39; / &#39;left&#39; / &#39;center&#39; / &#39;bottom&#39; / &#39;top&#39; / &#39;heightFix&#39; / &#39;widthFix&#39; / &#39;aspectFill&#39; / &#39;aspectFit&#39; / &#39;scaleToFill&#39;</td><td>&#39;scaleToFill&#39;</td><td>-</td></tr><tr><td>round</td><td>是否显示为圆形</td><td>boolean</td><td>-</td><td>false</td><td>-</td></tr><tr><td>radius</td><td>圆角大小，默认单位为px</td><td>number / string</td><td>-</td><td>-</td><td>-</td></tr></tbody></table><h2 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-label="Permalink to &quot;Events&quot;">​</a></h2><table><thead><tr><th>事件名称</th><th>说明</th><th>参数</th><th>最低版本</th></tr></thead><tbody><tr><td>click</td><td>点击事件</td><td>-</td><td>-</td></tr><tr><td>load</td><td>当图片载入完毕时触发</td><td><code> {height, width}</code></td><td>-</td></tr><tr><td>error</td><td>当错误发生时触发</td><td><code>{errMsg}</code></td><td>-</td></tr></tbody></table><h2 id="外部样式类" tabindex="-1">外部样式类 <a class="header-anchor" href="#外部样式类" aria-label="Permalink to &quot;外部样式类&quot;">​</a></h2><table><thead><tr><th>类名</th><th>说明</th><th>最低版本</th></tr></thead><tbody><tr><td>custom-class</td><td>根节点样式</td><td>-</td></tr><tr><td>custom-image</td><td>image 外部自定义样式</td><td>-</td></tr></tbody></table>`,23);function d(c,i,h,D,F,y){const t=a("frame");return n(),o("div",null,[e(t),r])}const g=s(p,[["render",d]]);export{u as __pageData,g as default};
