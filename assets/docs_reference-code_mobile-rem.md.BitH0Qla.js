import{_ as a,c as i,o as e,ae as n}from"./chunks/framework.Bu3pZnTe.js";const c=JSON.parse('{"title":"移动端相关","description":"","frontmatter":{},"headers":[],"relativePath":"docs/reference-code/mobile-rem.md","filePath":"docs/reference-code/mobile-rem.md","lastUpdated":1739171098000}'),t={name:"docs/reference-code/mobile-rem.md"};function l(h,s,r,p,k,d){return e(),i("div",null,s[0]||(s[0]=[n(`<h1 id="移动端相关" tabindex="-1">移动端相关 <a class="header-anchor" href="#移动端相关" aria-label="Permalink to &quot;移动端相关&quot;">​</a></h1><h2 id="rem-说明" tabindex="-1">rem 说明 <a class="header-anchor" href="#rem-说明" aria-label="Permalink to &quot;rem 说明&quot;">​</a></h2><ul><li>屏幕尺寸小于 320 不再缩小</li><li>750 -&gt; rootvalue 100</li><li>1920 -&gt; rootvalue 256</li></ul><table tabindex="0"><thead><tr><th style="text-align:left;">屏幕尺寸</th><th style="text-align:left;">recalc 参数</th></tr></thead><tbody><tr><td style="text-align:left;">320</td><td style="text-align:left;">8.55</td></tr><tr><td style="text-align:left;">1920</td><td style="text-align:left;">51.2</td></tr></tbody></table><h2 id="动态算固定尺寸" tabindex="-1">动态算固定尺寸 <a class="header-anchor" href="#动态算固定尺寸" aria-label="Permalink to &quot;动态算固定尺寸&quot;">​</a></h2><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 返回  字体大小</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> slPubHandleSize</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">value</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 根字体</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> rootvalue</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 256</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    (value </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> rootvalue) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(window.document.documentElement.style.fontSize.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">split</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;px&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">])</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  );</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div>`,6)]))}const E=a(t,[["render",l]]);export{c as __pageData,E as default};
