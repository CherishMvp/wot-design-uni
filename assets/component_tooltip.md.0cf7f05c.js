import{_ as o,G as t,o as a,c as l,L as n,U as p}from"./chunks/framework.68c4918c.js";const u=JSON.parse('{"title":"Tooltip 文字提示","description":"","frontmatter":{},"headers":[],"relativePath":"component/tooltip.md","filePath":"component/tooltip.md","lastUpdated":1705308361000}'),e={name:"component/tooltip.md"},c=p(`<h1 id="tooltip-文字提示" tabindex="-1">Tooltip 文字提示 <a class="header-anchor" href="#tooltip-文字提示" aria-label="Permalink to &quot;Tooltip 文字提示&quot;">​</a></h1><p>常用于展示提示信息。</p><h2 id="基本用法" tabindex="-1">基本用法 <a class="header-anchor" href="#基本用法" aria-label="Permalink to &quot;基本用法&quot;">​</a></h2><p>在这里我们提供 12 种不同方向的展示方式，可以通过以下完整示例来理解。</p><p><code>v-model</code> 控制是否展示文字提示。</p><p>使用<code>content</code>属性来决定显示时的提示信息。</p><p>由<code>placement</code>属性决定展示效果：</p><ul><li><code>placement</code>属性值为：<code>方向-对齐位置</code>；</li><li>四个方向：<code>top</code>、<code>left</code>、<code>right</code>、<code>bottom</code>；</li><li>三种对齐位置：<code>start</code>、&#39;&#39;(默认空为居中)、 <code>end</code>；</li></ul><p>如 <code>placement=&quot;left-end&quot;</code>，则提示信息出现在目标元素的左侧，且提示信息的底部与目标元素的底部对齐。</p><p>因为<code>uni-app</code>组件无法监听点击自己以外的地方，为了在点击页面其他地方时，可以自动关闭 <code>tooltip</code> ，建议使用组件库的 <code>useQueue</code> hook（会关闭所有 dropmenu、popover、toast、swipeAction、fab），在页面的根元素上监听点击事件的冒泡。</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>如果存在用户手动点击 <code>tooltip</code> 以外某个地方如按钮滑出 <code>tooltip</code> 的场景，则需要在点击的元素（在这里上按钮）加上 click 阻止事件冒泡到根元素上，避免触发 <code>closeOutside</code>把要手动打开的 <code>tooltip</code> 关闭了。</p></div><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">view</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">@click</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">closeOutside</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">wd-tooltip</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-model</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">show</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">@change</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">handleChange</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">placement</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">top</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">content</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">top 提示文字</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">wd-button</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">top</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">wd-button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">wd-tooltip</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">view</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">useQueue</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@/uni_modules/wot-design-uni</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> closeOutside </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">useQueue</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> show </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ref</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">boolean</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">(</span><span style="color:#FF9CAC;">false</span><span style="color:#A6ACCD;">)</span></span></code></pre></div><h2 id="更多-content" tabindex="-1">更多 Content <a class="header-anchor" href="#更多-content" aria-label="Permalink to &quot;更多 Content&quot;">​</a></h2><p>展示多行文本或者是设置文本内容的格式</p><p>用具名 slot 分发<code>content</code>，替代 <code>tooltip</code> 中的 <code>content</code> 属性。</p><p>使用插槽时，请使用 <code>useContentSlot</code> 属性，确定 <code>content</code> 插槽开启。</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">wd-tooltip</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-model</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">show</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">placement</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">right</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">useContentSlot</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">wd-button</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">多行文本</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">wd-button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">#content</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">view</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">style</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">color: red; padding: 5px; width: 90px</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">view</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">多行文本1</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">view</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">view</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">多行文本2</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">view</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">view</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">多行文本3</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">view</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">view</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">wd-tooltip</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">useQueue</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@/uni_modules/wot-design-uni</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> closeOutside </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">useQueue</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> show </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ref</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">boolean</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">(</span><span style="color:#FF9CAC;">false</span><span style="color:#A6ACCD;">)</span></span></code></pre></div><h2 id="显示关闭按钮" tabindex="-1">显示关闭按钮 <a class="header-anchor" href="#显示关闭按钮" aria-label="Permalink to &quot;显示关闭按钮&quot;">​</a></h2><p>Tooltip 组件通过属性<code>show-close</code> 控制是否显示关闭按钮。</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">wd-tooltip</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-model</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">show</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">content</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">显示关闭按钮</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">show-close</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">wd-button</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">显示关闭按钮</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">wd-button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">wd-tooltip</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h2 id="高级扩展" tabindex="-1">高级扩展 <a class="header-anchor" href="#高级扩展" aria-label="Permalink to &quot;高级扩展&quot;">​</a></h2><p>除了这些基本设置外，还有一些属性可以让使用者更好的定制自己的效果：</p><p>如果需要关闭 <code>tooltip</code> 功能，<code>disabled</code> 属性可以满足这个需求，它接受一个<code>Boolean</code>，设置为<code>true</code>即可。</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">wd-tooltip</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-model</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">show</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">placement</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">right-end</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">content</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">禁用</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">disabled</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">wd-button</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">禁用</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">wd-button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">wd-tooltip</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h2 id="控制位置" tabindex="-1">控制位置 <a class="header-anchor" href="#控制位置" aria-label="Permalink to &quot;控制位置&quot;">​</a></h2><p><strong>注意：由于小程序无法动态插入节点，因此文字气泡位置会根据传入定位的节点最外层位置对齐，如果文字提示位置不在您想要渲染的位置上，可以通过控制组件整体位置达到想要的效果。</strong> 错误用法示例：</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">wd-tooltip</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">placement</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">top</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">content</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">top 提示文字</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">wd-button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">custom-style</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">margin-left: 100px</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">top</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">wd-button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">wd-tooltip</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">wd-tooltip</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">placement</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">top</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">content</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">top 提示文字</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">wd-button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">custom-style</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">position: absolute; left: 100px;</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">top</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">wd-button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">wd-tooltip</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><p>正确用法：</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">wd-tooltip</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">placement</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">top</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">content</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">top 提示文字</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">custom-style</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">margin-left: 100px</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">wd-button</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">top</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">wd-button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">wd-tooltip</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">wd-tooltip</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">placement</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">top</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">content</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">top 提示文字</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">custom-style</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">position: absolute; left: 100px;</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">wd-button</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">top</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">wd-button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">wd-tooltip</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h2 id="tooltip-attributes" tabindex="-1">Tooltip Attributes <a class="header-anchor" href="#tooltip-attributes" aria-label="Permalink to &quot;Tooltip Attributes&quot;">​</a></h2><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th><th>最低版本</th></tr></thead><tbody><tr><td>show</td><td>状态是否可见</td><td>boolean</td><td>-</td><td>false</td><td>-</td></tr><tr><td>content</td><td>显示的内容，也可以通过 <code>slot#content</code> 传入</td><td>string / array</td><td>-</td><td>-</td><td>-</td></tr><tr><td>placement</td><td>Tooltip 的出现位置</td><td>string</td><td>top / top-start / top-end / bottom / bottom-start / bottom-end / left / left-start / left-end / right / right-start / right-end</td><td>bottom</td><td>-</td></tr><tr><td>disabled</td><td>Tooltip 是否可用</td><td>boolean</td><td>-</td><td>false</td><td>-</td></tr><tr><td>visible-arrow</td><td>是否显示 Tooltip 箭头</td><td>boolean</td><td>-</td><td>true</td><td>-</td></tr><tr><td>offset</td><td>出现位置的偏移量</td><td>number</td><td>-</td><td>0</td><td>-</td></tr><tr><td>show-close</td><td>是否显示 Tooltip 内部的关闭按钮</td><td>boolean</td><td>-</td><td>false</td><td>-</td></tr></tbody></table><h2 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-label="Permalink to &quot;Events&quot;">​</a></h2><table><thead><tr><th>事件名称</th><th>说明</th><th>回调参数</th><th>最低版本</th></tr></thead><tbody><tr><td>open</td><td>显示时触发</td><td>-</td><td>-</td></tr><tr><td>close</td><td>隐藏时触发</td><td>-</td><td>-</td></tr><tr><td>change</td><td>显隐值变化时触发</td><td>-</td><td>-</td></tr></tbody></table><h2 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-label="Permalink to &quot;Methods&quot;">​</a></h2><table><thead><tr><th>方法名称</th><th>说明</th><th>参数</th><th>最低版本</th></tr></thead><tbody><tr><td>open</td><td>打开文字提示弹框</td><td>-</td><td>-</td></tr><tr><td>close</td><td>关闭文字提示弹框</td><td>-</td><td>-</td></tr></tbody></table><h2 id="slot" tabindex="-1">Slot <a class="header-anchor" href="#slot" aria-label="Permalink to &quot;Slot&quot;">​</a></h2><table><thead><tr><th>name</th><th>说明</th><th>最低版本</th></tr></thead><tbody><tr><td>content</td><td>多行内容或用户自定义样式</td><td>-</td></tr></tbody></table><h2 id="tooltip-外部样式类" tabindex="-1">Tooltip 外部样式类 <a class="header-anchor" href="#tooltip-外部样式类" aria-label="Permalink to &quot;Tooltip 外部样式类&quot;">​</a></h2><table><thead><tr><th>类名</th><th>说明</th><th>最低版本</th></tr></thead><tbody><tr><td>custom-class</td><td>根节点样式</td><td>-</td></tr><tr><td>custom-arrow</td><td>尖角样式</td><td>-</td></tr><tr><td>custom-pop</td><td>文字提示样式</td><td>-</td></tr></tbody></table>`,41);function r(D,F,y,d,i,C){const s=t("frame");return a(),l("div",null,[n(s),c])}const A=o(e,[["render",r]]);export{u as __pageData,A as default};
