import{_ as s,o as n,c as a,S as l}from"./chunks/framework.f4e5ef25.js";const m=JSON.parse('{"title":"nvm","description":"","frontmatter":{},"headers":[],"relativePath":"docs/frontend/handbook/npm/nvm.md","filePath":"docs/frontend/handbook/npm/nvm.md","lastUpdated":1736824888000}'),e={name:"docs/frontend/handbook/npm/nvm.md"},p=l(`<h1 id="nvm" tabindex="-1">nvm <a class="header-anchor" href="#nvm" aria-label="Permalink to &quot;nvm&quot;">​</a></h1><h2 id="常用命令" tabindex="-1">常用命令 <a class="header-anchor" href="#常用命令" aria-label="Permalink to &quot;常用命令&quot;">​</a></h2><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-gT9RI" id="tab-bS13XYp" checked="checked"><label for="tab-bS13XYp">命令</label><input type="radio" name="group-gT9RI" id="tab-31MP4nu"><label for="tab-31MP4nu">.nvmrc</label></div><div class="blocks"><div class="language-shell active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># https://nvm.uihtm.com/nvm.html</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 更改源</span></span>
<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">NVM_NODEJS_ORG_MIRROR=http://nodejs.org/dist</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 列出本地所有版本</span></span>
<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">nvm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ls</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 列出远程所有版本</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 安装node</span></span>
<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">nvm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">versio</span><span style="color:#A6ACCD;">n</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 卸载制定的版本</span></span>
<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">nvm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">uninstall</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">versio</span><span style="color:#A6ACCD;">n</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 切换使用指定的版本node</span></span>
<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">nvm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">use</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">versio</span><span style="color:#A6ACCD;">n</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 显示当前版本</span></span>
<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">nvm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">current</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 设置默认版本</span></span>
<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">nvm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">alias</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">versio</span><span style="color:#A6ACCD;">n</span><span style="color:#89DDFF;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 版本配置文件</span></span>
<span class="line"><span style="color:#FFCB6B;">v18.17.0</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></div></div><h2 id="windows-安装配置" tabindex="-1">windows 安装配置 <a class="header-anchor" href="#windows-安装配置" aria-label="Permalink to &quot;windows 安装配置&quot;">​</a></h2><ol><li><a href="https://github.com/coreybutler/nvm-windows#installation--upgrades" target="_blank" rel="noreferrer">下载安装包</a></li><li>安装</li><li>搜索框输入 PowerShell 右键菜单以管理员身份运行</li><li>输入“ set-ExecutionPolicy RemoteSigned”回车</li><li>根据提示，输入 A，回车</li><li>再 npm -v 执行成功</li></ol>`,5),o=[p];function t(r,c,i,y,b,C){return n(),a("div",null,o)}const u=s(e,[["render",t]]);export{m as __pageData,u as default};