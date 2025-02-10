import{_ as i,c as a,o as n,ae as p}from"./chunks/framework.Bu3pZnTe.js";const E=JSON.parse('{"title":"输出文件压缩","description":"","frontmatter":{},"headers":[],"relativePath":"docs/plugin/vite-plugin/zip.md","filePath":"docs/plugin/vite-plugin/zip.md","lastUpdated":1739171098000}'),l={name:"docs/plugin/vite-plugin/zip.md"};function e(t,s,h,k,r,c){return n(),a("div",null,s[0]||(s[0]=[p(`<h1 id="输出文件压缩" tabindex="-1">输出文件压缩 <a class="header-anchor" href="#输出文件压缩" aria-label="Permalink to &quot;输出文件压缩&quot;">​</a></h1><blockquote><p>安装： npm i vite-plugin-cy-zip --save-dev</p></blockquote><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> cyViteZip </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;vite-plugin-cy-zip&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// zip输出文件夹</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cyViteZipPlugin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cyViteZipFunc</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> cyViteZip</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  enabled: </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Boolean</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(env.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">VITE_ZIP_OUTPUT_DIR</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  zipName: outputDir,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // deleteFolder: false</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 插件使用</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cyViteZipPlugin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 函数方式使用(在 compression插件 success 回调中 使用 )</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cyViteZipFunc</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div>`,3)]))}const o=i(l,[["render",e]]);export{E as __pageData,o as default};
