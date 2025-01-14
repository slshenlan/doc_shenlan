import{_ as s,o as n,c as a,S as l}from"./chunks/framework.f4e5ef25.js";const F=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"docs/frontend/plugin/customize/sl-loading.md","filePath":"docs/frontend/plugin/customize/sl-loading.md","lastUpdated":1736824888000}'),p={name:"docs/frontend/plugin/customize/sl-loading.md"},e=l(`<h2 id="自定义-loading" tabindex="-1">自定义 loading <a class="header-anchor" href="#自定义-loading" aria-label="Permalink to &quot;自定义 loading&quot;">​</a></h2><h2 id="code" tabindex="-1">code <a class="header-anchor" href="#code" aria-label="Permalink to &quot;code&quot;">​</a></h2><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-BQNSi" id="tab-e-5kkz5" checked="checked"><label for="tab-e-5kkz5">示例</label><input type="radio" name="group-BQNSi" id="tab-7aFFiEd"><label for="tab-7aFFiEd">sl-loading</label></div><div class="blocks"><div class="language-js active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> slLoading </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">sl-loading.js</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">slLoading</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">show</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#82AAFF;">setTimeout</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">slLoading</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">hide</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">},</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3000</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> cssStr </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">\`</span></span>
<span class="line"><span style="color:#C3E88D;">#sl-loading-app {</span></span>
<span class="line"><span style="color:#C3E88D;">    position: fixed;</span></span>
<span class="line"><span style="color:#C3E88D;">    z-index: 999999;</span></span>
<span class="line"><span style="color:#C3E88D;">    top: 0;</span></span>
<span class="line"><span style="color:#C3E88D;">    left: 0;</span></span>
<span class="line"><span style="color:#C3E88D;">    width: 100%;</span></span>
<span class="line"><span style="color:#C3E88D;">    height: 100%;</span></span>
<span class="line"><span style="color:#C3E88D;">}</span></span>
<span class="line"><span style="color:#C3E88D;">.sl-loading-app-overlay {</span></span>
<span class="line"><span style="color:#C3E88D;">  position: absolute;</span></span>
<span class="line"><span style="color:#C3E88D;">  top: 0;</span></span>
<span class="line"><span style="color:#C3E88D;">  left: 0;</span></span>
<span class="line"><span style="color:#C3E88D;">  width: 100%;</span></span>
<span class="line"><span style="color:#C3E88D;">  height: 100%;</span></span>
<span class="line"><span style="color:#C3E88D;">  background-color: transparent;</span></span>
<span class="line"><span style="color:#C3E88D;">}</span></span>
<span class="line"><span style="color:#C3E88D;">.sl-loading-app-overlay.overlay-color {</span></span>
<span class="line"><span style="color:#C3E88D;">  background: rgba(0, 0, 0, 0.7);</span></span>
<span class="line"><span style="color:#C3E88D;">}</span></span>
<span class="line"><span style="color:#C3E88D;">.sl-loading-app-type {</span></span>
<span class="line"><span style="color:#C3E88D;">  position: absolute;</span></span>
<span class="line"><span style="color:#C3E88D;">  z-index: 99999;</span></span>
<span class="line"><span style="color:#C3E88D;">  top: 50%;</span></span>
<span class="line"><span style="color:#C3E88D;">  left: 50%;</span></span>
<span class="line"><span style="color:#C3E88D;">  right: 0;</span></span>
<span class="line"><span style="color:#C3E88D;">  transform: translate(-50%, -50%);</span></span>
<span class="line"><span style="color:#C3E88D;">  width: 120px;</span></span>
<span class="line"><span style="color:#C3E88D;">  min-height: 120px;</span></span>
<span class="line"><span style="color:#C3E88D;">  padding: 8px 12px;</span></span>
<span class="line"><span style="color:#C3E88D;">  font-size: 14px;</span></span>
<span class="line"><span style="color:#C3E88D;">  border-radius: 8px;</span></span>
<span class="line"><span style="color:#C3E88D;">  display: flex;</span></span>
<span class="line"><span style="color:#C3E88D;">  flex-direction: column;</span></span>
<span class="line"><span style="color:#C3E88D;">  align-items: center;</span></span>
<span class="line"><span style="color:#C3E88D;">  justify-content: center;</span></span>
<span class="line"><span style="color:#C3E88D;">  color: rgb(25, 137, 250);</span></span>
<span class="line"><span style="color:#C3E88D;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">.sl-loading-app-type span {</span></span>
<span class="line"><span style="color:#C3E88D;">  position: relative;</span></span>
<span class="line"><span style="color:#C3E88D;">  display: inline-block;</span></span>
<span class="line"><span style="color:#C3E88D;">  max-width: 100%;</span></span>
<span class="line"><span style="color:#C3E88D;">  margin: auto;</span></span>
<span class="line"><span style="color:#C3E88D;">  max-height: 100%;</span></span>
<span class="line"><span style="color:#C3E88D;">  vertical-align: middle;</span></span>
<span class="line"><span style="color:#C3E88D;">  animation: sl-loading-anim-rotate 0.8s linear infinite;</span></span>
<span class="line"><span style="color:#C3E88D;">  height: 30px;</span></span>
<span class="line"><span style="color:#C3E88D;">  width: 30px;</span></span>
<span class="line"><span style="color:#C3E88D;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">.sl-loading-app-type span i::before {</span></span>
<span class="line"><span style="color:#C3E88D;">  width: 2px;</span></span>
<span class="line"><span style="color:#C3E88D;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">.sl-loading-app-type p {</span></span>
<span class="line"><span style="color:#C3E88D;">  color: rgb(25, 137, 250);</span></span>
<span class="line"><span style="color:#C3E88D;">  font-size: 14px;</span></span>
<span class="line"><span style="color:#C3E88D;">  position: relative;</span></span>
<span class="line"><span style="color:#C3E88D;">  top: -12px;</span></span>
<span class="line"><span style="color:#C3E88D;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">.sl-loading-app-type .sl-loading-spinner {</span></span>
<span class="line"><span style="color:#C3E88D;">  animation-timing-function: steps(12);</span></span>
<span class="line"><span style="color:#C3E88D;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">.sl-loading-app-type .sl-loading-spinner i {</span></span>
<span class="line"><span style="color:#C3E88D;">  position: absolute;</span></span>
<span class="line"><span style="color:#C3E88D;">  top: 0;</span></span>
<span class="line"><span style="color:#C3E88D;">  left: 0;</span></span>
<span class="line"><span style="color:#C3E88D;">  width: 100%;</span></span>
<span class="line"><span style="color:#C3E88D;">  height: 100%;</span></span>
<span class="line"><span style="color:#C3E88D;">}</span></span>
<span class="line"><span style="color:#C3E88D;">.sl-loading-app-type .sl-loading-spinner i::before {</span></span>
<span class="line"><span style="color:#C3E88D;">  display: block;</span></span>
<span class="line"><span style="color:#C3E88D;">  height: 25%;</span></span>
<span class="line"><span style="color:#C3E88D;">  margin: 0 auto;</span></span>
<span class="line"><span style="color:#C3E88D;">  background-color: currentColor;</span></span>
<span class="line"><span style="color:#C3E88D;">  border-radius: 40%;</span></span>
<span class="line"><span style="color:#C3E88D;">  content: &#39; &#39;;</span></span>
<span class="line"><span style="color:#C3E88D;">}</span></span>
<span class="line"><span style="color:#C3E88D;">.sl-loading-app-type .sl-loading-spinner i:nth-of-type(1) {</span></span>
<span class="line"><span style="color:#C3E88D;">  transform: rotate(30deg);</span></span>
<span class="line"><span style="color:#C3E88D;">  opacity: 1;</span></span>
<span class="line"><span style="color:#C3E88D;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">.sl-loading-app-type .sl-loading-spinner i:nth-of-type(2) {</span></span>
<span class="line"><span style="color:#C3E88D;">  transform: rotate(60deg);</span></span>
<span class="line"><span style="color:#C3E88D;">  opacity: 0.9375;</span></span>
<span class="line"><span style="color:#C3E88D;">}</span></span>
<span class="line"><span style="color:#C3E88D;">.sl-loading-app-type .sl-loading-spinner i:nth-of-type(3) {</span></span>
<span class="line"><span style="color:#C3E88D;">  transform: rotate(90deg);</span></span>
<span class="line"><span style="color:#C3E88D;">  opacity: 0.875;</span></span>
<span class="line"><span style="color:#C3E88D;">}</span></span>
<span class="line"><span style="color:#C3E88D;">.sl-loading-app-type .sl-loading-spinner i:nth-of-type(4) {</span></span>
<span class="line"><span style="color:#C3E88D;">  transform: rotate(120deg);</span></span>
<span class="line"><span style="color:#C3E88D;">  opacity: 0.8125;</span></span>
<span class="line"><span style="color:#C3E88D;">}</span></span>
<span class="line"><span style="color:#C3E88D;">.sl-loading-app-type .sl-loading-spinner i:nth-of-type(5) {</span></span>
<span class="line"><span style="color:#C3E88D;">  transform: rotate(150deg);</span></span>
<span class="line"><span style="color:#C3E88D;">  opacity: 0.75;</span></span>
<span class="line"><span style="color:#C3E88D;">}</span></span>
<span class="line"><span style="color:#C3E88D;">.sl-loading-app-type .sl-loading-spinner i:nth-of-type(6) {</span></span>
<span class="line"><span style="color:#C3E88D;">  transform: rotate(180deg);</span></span>
<span class="line"><span style="color:#C3E88D;">  opacity: 0.6875;</span></span>
<span class="line"><span style="color:#C3E88D;">}</span></span>
<span class="line"><span style="color:#C3E88D;">.sl-loading-app-type .sl-loading-spinner i:nth-of-type(7) {</span></span>
<span class="line"><span style="color:#C3E88D;">  transform: rotate(210deg);</span></span>
<span class="line"><span style="color:#C3E88D;">  opacity: 0.625;</span></span>
<span class="line"><span style="color:#C3E88D;">}</span></span>
<span class="line"><span style="color:#C3E88D;">.sl-loading-app-type .sl-loading-spinner i:nth-of-type(8) {</span></span>
<span class="line"><span style="color:#C3E88D;">  transform: rotate(240deg);</span></span>
<span class="line"><span style="color:#C3E88D;">  opacity: 0.5625;</span></span>
<span class="line"><span style="color:#C3E88D;">}</span></span>
<span class="line"><span style="color:#C3E88D;">.sl-loading-app-type .sl-loading-spinner i:nth-of-type(9) {</span></span>
<span class="line"><span style="color:#C3E88D;">  transform: rotate(270deg);</span></span>
<span class="line"><span style="color:#C3E88D;">  opacity: 0.5;</span></span>
<span class="line"><span style="color:#C3E88D;">}</span></span>
<span class="line"><span style="color:#C3E88D;">.sl-loading-app-type .sl-loading-spinner i:nth-of-type(10) {</span></span>
<span class="line"><span style="color:#C3E88D;">  transform: rotate(300deg);</span></span>
<span class="line"><span style="color:#C3E88D;">  opacity: 0.4375;</span></span>
<span class="line"><span style="color:#C3E88D;">}</span></span>
<span class="line"><span style="color:#C3E88D;">.sl-loading-app-type .sl-loading-spinner i:nth-of-type(11) {</span></span>
<span class="line"><span style="color:#C3E88D;">  transform: rotate(330deg);</span></span>
<span class="line"><span style="color:#C3E88D;">  opacity: 0.375;</span></span>
<span class="line"><span style="color:#C3E88D;">}</span></span>
<span class="line"><span style="color:#C3E88D;">.sl-loading-app-type .sl-loading-spinner i:nth-of-type(12) {</span></span>
<span class="line"><span style="color:#C3E88D;">  transform: rotate(360deg);</span></span>
<span class="line"><span style="color:#C3E88D;">  opacity: 0.3125;</span></span>
<span class="line"><span style="color:#C3E88D;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">.sl-loading-app-type .sl-loading-circular {</span></span>
<span class="line"><span style="color:#C3E88D;">  animation-duration: 2s;</span></span>
<span class="line"><span style="color:#C3E88D;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">.sl-loading-app-type .sl-loading-circular .loading-circular circle {</span></span>
<span class="line"><span style="color:#C3E88D;">  animation: sl-loading-anim-circular 1.5s ease-in-out infinite;</span></span>
<span class="line"><span style="color:#C3E88D;">  stroke: currentColor;</span></span>
<span class="line"><span style="color:#C3E88D;">  stroke-width: 3;</span></span>
<span class="line"><span style="color:#C3E88D;">  stroke-linecap: round;</span></span>
<span class="line"><span style="color:#C3E88D;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">@keyframes sl-loading-anim-rotate {</span></span>
<span class="line"><span style="color:#C3E88D;">  0% {</span></span>
<span class="line"><span style="color:#C3E88D;">    transform: rotate(0);</span></span>
<span class="line"><span style="color:#C3E88D;">  }</span></span>
<span class="line"><span style="color:#C3E88D;">  100% {</span></span>
<span class="line"><span style="color:#C3E88D;">    transform: rotate(360deg);</span></span>
<span class="line"><span style="color:#C3E88D;">  }</span></span>
<span class="line"><span style="color:#C3E88D;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">@keyframes sl-loading-anim-circular {</span></span>
<span class="line"><span style="color:#C3E88D;">  0% {</span></span>
<span class="line"><span style="color:#C3E88D;">    stroke-dasharray: 1, 200;</span></span>
<span class="line"><span style="color:#C3E88D;">    stroke-dashoffset: 0;</span></span>
<span class="line"><span style="color:#C3E88D;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">  50% {</span></span>
<span class="line"><span style="color:#C3E88D;">    stroke-dasharray: 90, 150;</span></span>
<span class="line"><span style="color:#C3E88D;">    stroke-dashoffset: -40;</span></span>
<span class="line"><span style="color:#C3E88D;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">  100% {</span></span>
<span class="line"><span style="color:#C3E88D;">    stroke-dasharray: 90, 150;</span></span>
<span class="line"><span style="color:#C3E88D;">    stroke-dashoffset: -120;</span></span>
<span class="line"><span style="color:#C3E88D;">  }</span></span>
<span class="line"><span style="color:#C3E88D;">}</span></span>
<span class="line"><span style="color:#C3E88D;">  </span></span>
<span class="line"><span style="color:#89DDFF;">\`</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> slloading </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">sl-loading-app</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> slLoading </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">show</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">msg</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">加载中...</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">mainEl</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">querySelector</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">#</span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">slloading</span><span style="color:#89DDFF;">}\`</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#89DDFF;">!</span><span style="color:#A6ACCD;">mainEl</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">mainEl</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">createElement</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">div</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">mainEl</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">id</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">\`\${</span><span style="color:#A6ACCD;">slloading</span><span style="color:#89DDFF;">}\`</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">circular</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">\`</span></span>
<span class="line"><span style="color:#C3E88D;">                &lt;span  class=&quot;sl-loading-circular&quot;&gt;</span></span>
<span class="line"><span style="color:#C3E88D;">                  &lt;svg viewBox=&quot;25 25 50 50&quot; class=&quot;loading-circular&quot;&gt;</span></span>
<span class="line"><span style="color:#C3E88D;">                    &lt;circle cx=&quot;50&quot; cy=&quot;50&quot; r=&quot;20&quot; fill=&quot;none&quot;&gt;&lt;/circle&gt;</span></span>
<span class="line"><span style="color:#C3E88D;">                  &lt;/svg&gt;</span></span>
<span class="line"><span style="color:#C3E88D;">                &lt;/span&gt;</span></span>
<span class="line"><span style="color:#C3E88D;">      </span><span style="color:#89DDFF;">\`</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">spinner</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">\`</span></span>
<span class="line"><span style="color:#C3E88D;">                &lt;span v-else class=&quot;sl-loading-spinner&quot;&gt;</span></span>
<span class="line"><span style="color:#C3E88D;">                  &lt;i&gt;&lt;/i&gt;</span></span>
<span class="line"><span style="color:#C3E88D;">                  &lt;i&gt;&lt;/i&gt;</span></span>
<span class="line"><span style="color:#C3E88D;">                  &lt;i&gt;&lt;/i&gt;</span></span>
<span class="line"><span style="color:#C3E88D;">                  &lt;i&gt;&lt;/i&gt;</span></span>
<span class="line"><span style="color:#C3E88D;">                  &lt;i&gt;&lt;/i&gt;</span></span>
<span class="line"><span style="color:#C3E88D;">                  &lt;i&gt;&lt;/i&gt;</span></span>
<span class="line"><span style="color:#C3E88D;">                  &lt;i&gt;&lt;/i&gt;</span></span>
<span class="line"><span style="color:#C3E88D;">                  &lt;i&gt;&lt;/i&gt;</span></span>
<span class="line"><span style="color:#C3E88D;">                  &lt;i&gt;&lt;/i&gt;</span></span>
<span class="line"><span style="color:#C3E88D;">                  &lt;i&gt;&lt;/i&gt;</span></span>
<span class="line"><span style="color:#C3E88D;">                  &lt;i&gt;&lt;/i&gt;</span></span>
<span class="line"><span style="color:#C3E88D;">                  &lt;i&gt;&lt;/i&gt;</span></span>
<span class="line"><span style="color:#C3E88D;">                &lt;/span&gt; </span></span>
<span class="line"><span style="color:#C3E88D;">      </span><span style="color:#89DDFF;">\`</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">slLoadingContent</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">\`</span></span>
<span class="line"><span style="color:#C3E88D;">                &lt;div class=&quot;sl-loading-app-overlay&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#C3E88D;">                &lt;div class=&quot;sl-loading-app-type&quot;&gt;</span></span>
<span class="line"><span style="color:#C3E88D;">                    </span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">circular</span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">                    &lt;p&gt;</span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">msg</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">&lt;/p&gt;</span></span>
<span class="line"><span style="color:#C3E88D;">                &lt;/div&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">               </span></span>
<span class="line"><span style="color:#C3E88D;">      </span><span style="color:#89DDFF;">\`</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">mainEl</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">innerHTML</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">slLoadingContent</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">document</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">body</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">appendChild</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">mainEl</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">styleId</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">sl-loading-style</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">slLoadingStyle</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getElementById</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">styleId</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#89DDFF;">!</span><span style="color:#A6ACCD;">slLoadingStyle</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">style</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">createElement</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">style</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">style</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">innerHTML</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">cssStr</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">style</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">id</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">styleId</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">document</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">head</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">insertBefore</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">style</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">document</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">head</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">firstChild</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">hide</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">mainEl</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">querySelector</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">#</span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">slloading</span><span style="color:#89DDFF;">}\`</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">mainEl</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;font-style:italic;">// document.body.removeChild(mainEl);</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> slLoading</span><span style="color:#89DDFF;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br><span class="line-number">156</span><br><span class="line-number">157</span><br><span class="line-number">158</span><br><span class="line-number">159</span><br><span class="line-number">160</span><br><span class="line-number">161</span><br><span class="line-number">162</span><br><span class="line-number">163</span><br><span class="line-number">164</span><br><span class="line-number">165</span><br><span class="line-number">166</span><br><span class="line-number">167</span><br><span class="line-number">168</span><br><span class="line-number">169</span><br><span class="line-number">170</span><br><span class="line-number">171</span><br><span class="line-number">172</span><br><span class="line-number">173</span><br><span class="line-number">174</span><br><span class="line-number">175</span><br><span class="line-number">176</span><br><span class="line-number">177</span><br><span class="line-number">178</span><br><span class="line-number">179</span><br><span class="line-number">180</span><br><span class="line-number">181</span><br><span class="line-number">182</span><br><span class="line-number">183</span><br><span class="line-number">184</span><br><span class="line-number">185</span><br><span class="line-number">186</span><br><span class="line-number">187</span><br><span class="line-number">188</span><br><span class="line-number">189</span><br><span class="line-number">190</span><br><span class="line-number">191</span><br><span class="line-number">192</span><br><span class="line-number">193</span><br><span class="line-number">194</span><br><span class="line-number">195</span><br><span class="line-number">196</span><br><span class="line-number">197</span><br><span class="line-number">198</span><br><span class="line-number">199</span><br><span class="line-number">200</span><br><span class="line-number">201</span><br><span class="line-number">202</span><br><span class="line-number">203</span><br><span class="line-number">204</span><br><span class="line-number">205</span><br><span class="line-number">206</span><br><span class="line-number">207</span><br><span class="line-number">208</span><br><span class="line-number">209</span><br><span class="line-number">210</span><br><span class="line-number">211</span><br><span class="line-number">212</span><br><span class="line-number">213</span><br><span class="line-number">214</span><br><span class="line-number">215</span><br><span class="line-number">216</span><br><span class="line-number">217</span><br><span class="line-number">218</span><br><span class="line-number">219</span><br><span class="line-number">220</span><br><span class="line-number">221</span><br><span class="line-number">222</span><br><span class="line-number">223</span><br><span class="line-number">224</span><br><span class="line-number">225</span><br><span class="line-number">226</span><br><span class="line-number">227</span><br><span class="line-number">228</span><br><span class="line-number">229</span><br><span class="line-number">230</span><br><span class="line-number">231</span><br><span class="line-number">232</span><br><span class="line-number">233</span><br><span class="line-number">234</span><br><span class="line-number">235</span><br><span class="line-number">236</span><br><span class="line-number">237</span><br><span class="line-number">238</span><br><span class="line-number">239</span><br><span class="line-number">240</span><br></div></div></div></div>`,3),o=[e];function r(c,t,i,y,b,D){return n(),a("div",null,o)}const u=s(p,[["render",r]]);export{F as __pageData,u as default};
