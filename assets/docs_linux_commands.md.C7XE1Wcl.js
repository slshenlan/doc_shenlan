import{_ as e,C as r,c as t,o as k,ae as h,j as i,a as n,G as l,w as p}from"./chunks/framework.Bu3pZnTe.js";const C=JSON.parse('{"title":"命令查询","description":"","frontmatter":{},"headers":[],"relativePath":"docs/linux/commands.md","filePath":"docs/linux/commands.md","lastUpdated":1739171098000}'),d={name:"docs/linux/commands.md"};function F(o,s,u,b,m,g){const a=r("font");return k(),t("div",null,[s[35]||(s[35]=h(`<h1 id="命令查询" tabindex="-1">命令<a href="https://www.linuxcool.com/" target="_blank" rel="noreferrer">查询</a> <a class="header-anchor" href="#命令查询" aria-label="Permalink to &quot;命令[查询](https://www.linuxcool.com/)&quot;">​</a></h1><h2 id="常用命令" tabindex="-1">常用命令 <a class="header-anchor" href="#常用命令" aria-label="Permalink to &quot;常用命令&quot;">​</a></h2><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#显示用户当前所处的工作目录</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pwd</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 创建空白的目录</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mkdir</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> xxx</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mkdir</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> xxx</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> xxx</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> xxx</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mkdir</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /xxx/xxx/xxx</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 用于创建空白文件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> touch</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 删除文件或目录</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rm</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -rf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> XXX</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 用于复制文件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> cp</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> xxx</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> xxx</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 用于复制目录</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> cp</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -r</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Dir1</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Dir2</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 移动文件或将文件重命名</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mv</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> File1.cfg</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> File2.cfg</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mv</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> File2.cfg</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /etc</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 查找文件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> find</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -name</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;nginx.conf&#39;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><h2 id="vi-的基本操作" tabindex="-1">vi 的基本操作 <a class="header-anchor" href="#vi-的基本操作" aria-label="Permalink to &quot;vi 的基本操作&quot;">​</a></h2><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 查看文件详情</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> cat</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  myfile</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 动态查看文件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> tail</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -f</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  fileName</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 打开文件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vi</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> myfile</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#进入「插入模式（Insert mode）</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> i</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#存盘并退出 vi</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ESC</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> :wq</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#不存盘强制退出 vi</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> :q!</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h2 id="环境变量配置" tabindex="-1">环境变量配置 <a class="header-anchor" href="#环境变量配置" aria-label="Permalink to &quot;环境变量配置&quot;">​</a></h2>`,6)),i("ol",null,[i("li",null,[s[1]||(s[1]=n("打开环境变量文件 ")),l(a,{color:"#20940c"},{default:p(()=>s[0]||(s[0]=[n("vi /etc/profile")])),_:1})]),i("li",null,[s[3]||(s[3]=n("配置环境变量 ")),l(a,{color:"#20940c"},{default:p(()=>s[2]||(s[2]=[n(" export JAVA_HOME=/root/j d k-XXX_lin ux-x64")])),_:1})]),i("li",null,[l(a,{color:"#20940c"},{default:p(()=>s[4]||(s[4]=[n("export PATH=$JAVA HOME/bin:$PATH")])),_:1})]),i("li",null,[s[6]||(s[6]=n("刷新配置 ")),l(a,{color:"#20940c"},{default:p(()=>s[5]||(s[5]=[n("source /etc/profile")])),_:1})])]),s[36]||(s[36]=i("h2",{id:"系统常用命令",tabindex:"-1"},[n("系统常用命令 "),i("a",{class:"header-anchor",href:"#系统常用命令","aria-label":'Permalink to "系统常用命令"'},"​")],-1)),i("ul",null,[i("li",null,[l(a,{color:"#20940c"},{default:p(()=>s[7]||(s[7]=[n("echo")])),_:1}),s[8]||(s[8]=n(" 用于在终端输出字符串或变量提取后的值"))]),i("li",null,[l(a,{color:"#20940c"},{default:p(()=>s[9]||(s[9]=[n("date")])),_:1}),s[10]||(s[10]=n(" 用于显示及设置系统的时间或日期"))])]),s[37]||(s[37]=i("h2",{id:"系统状态检测命令",tabindex:"-1"},[n("系统状态检测命令 "),i("a",{class:"header-anchor",href:"#系统状态检测命令","aria-label":'Permalink to "系统状态检测命令"'},"​")],-1)),i("ul",null,[i("li",null,[l(a,{color:"#20940c"},{default:p(()=>s[11]||(s[11]=[n("ifconfig")])),_:1}),s[12]||(s[12]=n(" 用于获取网卡配置与网络状态等信息"))]),i("li",null,[l(a,{color:"#20940c"},{default:p(()=>s[13]||(s[13]=[n("uname")])),_:1}),s[14]||(s[14]=n(" 用于查看系统内核与系统版本等信息"))]),i("li",null,[l(a,{color:"#20940c"},{default:p(()=>s[15]||(s[15]=[n("uptime")])),_:1}),s[16]||(s[16]=n(" 用于查看系统的负载信息"))]),i("li",null,[l(a,{color:"#20940c"},{default:p(()=>s[17]||(s[17]=[n("free")])),_:1}),s[18]||(s[18]=n(" 用于显示当前系统中内存的使用量信息"))]),i("li",null,[l(a,{color:"#20940c"},{default:p(()=>s[19]||(s[19]=[n("who")])),_:1}),s[20]||(s[20]=n(" 用于查看当前登入主机的用户终端信息"))]),i("li",null,[l(a,{color:"#20940c"},{default:p(()=>s[21]||(s[21]=[n("w")])),_:1}),s[22]||(s[22]=n(" 命令 显示已登录用户"))]),i("li",null,[l(a,{color:"#20940c"},{default:p(()=>s[23]||(s[23]=[n("last")])),_:1}),s[24]||(s[24]=n(" 用于查看所有系统的登录记录"))]),i("li",null,[l(a,{color:"#20940c"},{default:p(()=>s[25]||(s[25]=[n("history")])),_:1}),s[26]||(s[26]=n(" 用于显示历史执行过的命令"))]),i("li",null,[l(a,{color:"#20940c"},{default:p(()=>s[27]||(s[27]=[n("sosreport")])),_:1}),s[28]||(s[28]=n(" 命令 用于收集系统配置及架构信息并输出诊断文档"))]),i("li",null,[l(a,{color:"#20940c"},{default:p(()=>s[29]||(s[29]=[n("df")])),_:1}),s[30]||(s[30]=n(" 显示磁盘空间使用情况"))]),i("li",null,[l(a,{color:"#20940c"},{default:p(()=>s[31]||(s[31]=[n("dh")])),_:1}),s[32]||(s[32]=n(" 统计文件大小，目录则取总用量"))]),i("li",null,[l(a,{color:"#20940c"},{default:p(()=>s[33]||(s[33]=[n("lsblk")])),_:1}),s[34]||(s[34]=n(" 命令 – 查看系统的磁盘"))])])])}const B=e(d,[["render",F]]);export{C as __pageData,B as default};
