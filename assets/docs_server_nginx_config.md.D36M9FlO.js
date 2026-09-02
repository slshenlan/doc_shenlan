import{_ as n,o as a,c as p,ak as l}from"./chunks/framework.HyOigXlE.js";const u=JSON.parse('{"title":"配置示例","description":"","frontmatter":{},"headers":[],"relativePath":"docs/server/nginx/config.md","filePath":"docs/server/nginx/config.md","lastUpdated":1788320201000}'),e={name:"docs/server/nginx/config.md"};function i(r,s,c,b,t,m){return a(),p("div",null,[...s[0]||(s[0]=[l(`<h1 id="配置示例" tabindex="-1">配置示例 <a class="header-anchor" href="#配置示例" aria-label="Permalink to “配置示例”">​</a></h1><h2 id="文件夹结构" tabindex="-1">文件夹结构 <a class="header-anchor" href="#文件夹结构" aria-label="Permalink to “文件夹结构”">​</a></h2><div class="language-txt line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>nginx/</span></span>
<span class="line"><span>├─ docker-compose.yml</span></span>
<span class="line"><span>├─ etc/</span></span>
<span class="line"><span>│   └─ nginx/</span></span>
<span class="line"><span>│       ├─ nginx.conf        # 主配置</span></span>
<span class="line"><span>│       ├─ conf.d/</span></span>
<span class="line"><span>│       │   └─ default.conf  # server 配置</span></span>
<span class="line"><span>│       └─ ssl/</span></span>
<span class="line"><span>│           ├─ example.com/</span></span>
<span class="line"><span>│           │   ├─ cert.pem</span></span>
<span class="line"><span>│           │   └─ key.pem</span></span>
<span class="line"><span>│           ├─ api.example.com/</span></span>
<span class="line"><span>│           │   ├─ cert.pem</span></span>
<span class="line"><span>│           │   └─ key.pem</span></span>
<span class="line"><span>│           └─ test.com/</span></span>
<span class="line"><span>│               ├─ cert.pem</span></span>
<span class="line"><span>│               └─ key.pem</span></span>
<span class="line"><span>├─ user/</span></span>
<span class="line"><span>│   └─ share/nginx/</span></span>
<span class="line"><span>│       ├─ html/             # 静态文件</span></span>
<span class="line"><span>│       └─ cache/            # 代理缓存</span></span>
<span class="line"><span>└─ var/</span></span>
<span class="line"><span>    └─ log/nginx/            # 日志挂载</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><h2 id="docker-componse-yml" tabindex="-1">docker-componse.yml <a class="header-anchor" href="#docker-componse-yml" aria-label="Permalink to “docker-componse.yml”">​</a></h2><div class="language-yml line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yml</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">version</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;3.9&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">services</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  nginx</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    image</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">nginx:stable-alpine</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    container_name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">nginx_server</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    restart</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">unless-stopped</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    ports</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;80:80&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;443:443&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    volumes</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      # 主配置文件和 server 配置</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">./etc/nginx/nginx.conf:/etc/nginx/nginx.conf:ro</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">./etc/nginx/conf.d:/etc/nginx/conf.d:ro</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      # SSL 证书</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">./etc/nginx/ssl:/etc/nginx/ssl:ro</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      # 静态资源挂载（只挂载 html，不覆盖模块）</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">./user/share/nginx/html:/usr/share/nginx/html:ro</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      # 代理缓存挂载</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">./user/share/nginx/cache:/usr/share/nginx/cache</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      # 日志挂载</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">./var/log/nginx:/var/log/nginx</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    environment</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">TZ=Asia/Shanghai</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    networks</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">net_nginx</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">networks</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  net_nginx</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    driver</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">bridge</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br></div></div><h2 id="配置示例-1" tabindex="-1">配置示例 <a class="header-anchor" href="#配置示例-1" aria-label="Permalink to “配置示例”">​</a></h2><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-14" id="tab-15" checked><label data-title="nginx.conf" for="tab-15">nginx.conf</label><input type="radio" name="group-14" id="tab-16"><label data-title="conf.d/demo.conf" for="tab-16">conf.d/demo.conf</label><input type="radio" name="group-14" id="tab-17"><label data-title="conf.d/demo.https.conf " for="tab-17">conf.d/demo.https.conf </label></div><div class="blocks"><div class="language-txt active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># 主配置</span></span>
<span class="line"><span></span></span>
<span class="line"><span># ================================</span></span>
<span class="line"><span># 基础设置</span></span>
<span class="line"><span># ================================</span></span>
<span class="line"><span></span></span>
<span class="line"><span>user nginx;                    # Nginx 进程运行用户</span></span>
<span class="line"><span>worker_processes auto;         # 根据 CPU 核心数自动调整 worker 数量</span></span>
<span class="line"><span>error_log /var/log/nginx/error.log warn;  # 错误日志等级为 warn</span></span>
<span class="line"><span>pid /run/nginx.pid;            # Nginx PID 文件路径</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 动态模块加载（可根据需要加载模块）</span></span>
<span class="line"><span># include /usr/share/nginx/modules/*.conf;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 提升文件描述符限制，支持高并发</span></span>
<span class="line"><span>worker_rlimit_nofile 65535;    # 最大打开文件数（需要系统 ulimit 支持）</span></span>
<span class="line"><span></span></span>
<span class="line"><span># ================================</span></span>
<span class="line"><span># 事件模块</span></span>
<span class="line"><span># ================================</span></span>
<span class="line"><span>events {</span></span>
<span class="line"><span>    use epoll;                 # 高效 I/O 模型</span></span>
<span class="line"><span>    worker_connections 32768;  # 单 worker 最大连接数</span></span>
<span class="line"><span>    multi_accept on;           # 一次接受多个连接</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span># ================================</span></span>
<span class="line"><span># HTTP 模块</span></span>
<span class="line"><span># ================================</span></span>
<span class="line"><span>http {</span></span>
<span class="line"><span>    # ------------------------------</span></span>
<span class="line"><span>    # 日志设置</span></span>
<span class="line"><span>    # ------------------------------</span></span>
<span class="line"><span>    log_format main &#39;$remote_addr - $remote_user [$time_local] &quot;$request&quot; &#39;</span></span>
<span class="line"><span>                    &#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;</span></span>
<span class="line"><span>                    &#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    access_log /var/log/nginx/access.log main buffer=16k flush=5m;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # ------------------------------</span></span>
<span class="line"><span>    # 基本性能优化</span></span>
<span class="line"><span>    # ------------------------------</span></span>
<span class="line"><span>    sendfile on;               # 高效发送静态文件</span></span>
<span class="line"><span>    tcp_nopush on;             # 减少包数量，提高吞吐</span></span>
<span class="line"><span>    tcp_nodelay on;            # 低延迟发送小包</span></span>
<span class="line"><span>    keepalive_timeout 15 15;   # 客户端与浏览器保持连接时间</span></span>
<span class="line"><span>    keepalive_requests 100;    # 每个 keep-alive 最大请求数</span></span>
<span class="line"><span>    types_hash_max_size 2048;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # ------------------------------</span></span>
<span class="line"><span>    # 文件缓存优化</span></span>
<span class="line"><span>    # ------------------------------</span></span>
<span class="line"><span>    open_file_cache max=100000 inactive=20s;</span></span>
<span class="line"><span>    open_file_cache_valid 30s;</span></span>
<span class="line"><span>    open_file_cache_min_uses 2;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # ------------------------------</span></span>
<span class="line"><span>    # MIME 与默认类型</span></span>
<span class="line"><span>    # ------------------------------</span></span>
<span class="line"><span>    include /etc/nginx/mime.types;</span></span>
<span class="line"><span>    default_type application/octet-stream;</span></span>
<span class="line"><span>    charset &#39;utf-8&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # ------------------------------</span></span>
<span class="line"><span>    # 代理缓存</span></span>
<span class="line"><span>    # ------------------------------</span></span>
<span class="line"><span>    proxy_cache_path /usr/share/nginx/cache levels=1:2 keys_zone=one:100m max_size=1g inactive=60m use_temp_path=off;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # ------------------------------</span></span>
<span class="line"><span>    # Gzip 压缩</span></span>
<span class="line"><span>    # ------------------------------</span></span>
<span class="line"><span>    gzip on;</span></span>
<span class="line"><span>    gzip_vary off;             # 支持代理缓存</span></span>
<span class="line"><span>    gzip_proxied any;          # 允许代理请求压缩</span></span>
<span class="line"><span>    gzip_min_length 2k;        # 压缩超过 2k 的文件</span></span>
<span class="line"><span>    gzip_buffers 4 16k;</span></span>
<span class="line"><span>    gzip_comp_level 4;</span></span>
<span class="line"><span>    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript application/x-httpd-php;</span></span>
<span class="line"><span>    gzip_disable &quot;MSIE [1-6]\\.&quot;;  # 禁用 IE6 及以下</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # ------------------------------</span></span>
<span class="line"><span>    # 安全设置</span></span>
<span class="line"><span>    # ------------------------------</span></span>
<span class="line"><span>    server_tokens off;         # 隐藏 Nginx 版本</span></span>
<span class="line"><span>    # client_max_body_size 20M;  # 限制客户端上传体积</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # 请求速率限制</span></span>
<span class="line"><span>    # limit_req_zone $binary_remote_addr zone=req_limit:10m rate=10r/s;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # ------------------------------</span></span>
<span class="line"><span>    # 包含虚拟主机配置</span></span>
<span class="line"><span>    # ------------------------------</span></span>
<span class="line"><span>    include /etc/nginx/conf.d/*.conf;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br></div></div><div class="language-txt line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span></span></span>
<span class="line"><span>server {</span></span>
<span class="line"><span>    listen 80;</span></span>
<span class="line"><span>    server_name default;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    root /usr/share/nginx/html;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # 日志</span></span>
<span class="line"><span>    access_log /var/log/nginx/web.access.log main buffer=16k flush=5m;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # 禁止访问隐藏文件</span></span>
<span class="line"><span>    location ~ /\\. {</span></span>
<span class="line"><span>        deny all;</span></span>
<span class="line"><span>        access_log off;</span></span>
<span class="line"><span>        log_not_found off;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # 健康检查</span></span>
<span class="line"><span>    location = /health {</span></span>
<span class="line"><span>        access_log /var/log/nginx/health.access.log main buffer=16k flush=5m;</span></span>
<span class="line"><span>        return 200 &quot;OK&quot;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # API 接口示例</span></span>
<span class="line"><span>    location /api/ {</span></span>
<span class="line"><span>        access_log /var/log/nginx/api.access.log main buffer=16k flush=5m;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        # 只允许常用 API 方法</span></span>
<span class="line"><span>        # limit_except GET POST HEAD PUT DELETE { deny all; }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        # 请求速率限制</span></span>
<span class="line"><span>        limit_req zone=req_limit burst=50 nodelay;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        # 代理到后端应用（示例）</span></span>
<span class="line"><span>        proxy_pass http://backend_app:8080/api/; # 和nginx 在同一网络</span></span>
<span class="line"><span>        # proxy_pass http://localhost:8080/api/; # 和nginx 在同一网络</span></span>
<span class="line"><span>        client_max_body_size 1024M;</span></span>
<span class="line"><span>        proxy_set_header Authorization $http_authorization;</span></span>
<span class="line"><span>        proxy_set_header Host $host;</span></span>
<span class="line"><span>        proxy_set_header X-Real-IP $remote_addr;</span></span>
<span class="line"><span>        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;</span></span>
<span class="line"><span>        proxy_set_header X-Forwarded-Proto $scheme;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        # 错误处理</span></span>
<span class="line"><span>        proxy_intercept_errors on;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # 官网配置示例</span></span>
<span class="line"><span>    location / {</span></span>
<span class="line"><span>        index index.html;</span></span>
<span class="line"><span>        try_files $uri $uri/ /index.html;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        set $is_mobile no;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        if ($http_user_agent ~* &quot;(android|bb\\d+|meego).+mobile|avantgo|bada\\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\\.(browser|link)|vodafone|wap|windows ce|xda|xiino&quot;) {</span></span>
<span class="line"><span>            set $is_mobile yes;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        if ($http_user_agent ~* &quot;^(1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\\-(n|u)|c55\\/|capi|ccwa|cdm\\-|cell|chtm|cldc|cmd\\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\\-s|devi|dica|dmob|do(c|p)o|ds(12|\\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\\-|_)|g1 u|g560|gene|gf\\-5|g\\-mo|go(\\.w|od)|gr(ad|un)|haie|hcit|hd\\-(m|p|t)|hei\\-|hi(pt|ta)|hp( i|ip)|hs\\-c|ht(c(\\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\\-(20|go|ma)|i230|iac( |\\-|\\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\\/)|klon|kpt |kwc\\-|kyo(c|k)|le(no|xi)|lg( g|\\/(k|l|u)|50|54|\\-[a-w])|libw|lynx|m1\\-w|m3ga|m50\\/|ma(te|ui|xo)|mc(01|21|ca)|m\\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\\-2|po(ck|rt|se)|prox|psio|pt\\-g|qa\\-a|qc(07|12|21|32|60|\\-[2-7]|i\\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\\-|oo|p\\-)|sdk\\/|se(c(\\-|0|1)|47|mc|nd|ri)|sgh\\-|shar|sie(\\-|m)|sk\\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\\-|v\\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\\-|tdg\\-|tel(i|m)|tim\\-|t\\-mo|to(pl|sh)|ts(70|m\\-|m3|m5)|tx\\-9|up(\\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\\-|your|zeto|zte\\-)&quot;) {</span></span>
<span class="line"><span>            set $is_mobile yes;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        # 分流</span></span>
<span class="line"><span>        if ($is_mobile = yes) {</span></span>
<span class="line"><span>            rewrite ^/(.*)$ /phone/$1 break;</span></span>
<span class="line"><span>            root /usr/share/nginx/html/phone/;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        if ($is_mobile = no) {</span></span>
<span class="line"><span>            root /usr/share/nginx/html/web/;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        # 静态资源缓存</span></span>
<span class="line"><span>        proxy_cache one;</span></span>
<span class="line"><span>        proxy_cache_valid any 1m;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # 错误页</span></span>
<span class="line"><span>    error_page 404 /404.html;</span></span>
<span class="line"><span>    error_page 500 502 503 504 /50x.html;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    location = /50x.html {</span></span>
<span class="line"><span>        root /usr/share/nginx/html;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br></div></div><div class="language-txt line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># HTTP 端口，自动跳转到 HTTPS</span></span>
<span class="line"><span>server {</span></span>
<span class="line"><span>    listen 80;</span></span>
<span class="line"><span>    server_name default;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # 所有请求跳转到 HTTPS</span></span>
<span class="line"><span>    return 301 https://$host$request_uri;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span># HTTPS 端口</span></span>
<span class="line"><span>server {</span></span>
<span class="line"><span>    listen 443 ssl http2;</span></span>
<span class="line"><span>    server_name default;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # SSL 配置</span></span>
<span class="line"><span>    ssl_certificate /etc/nginx/ssl/example.com/cert.pem;          # 替换为你的证书路径</span></span>
<span class="line"><span>    ssl_certificate_key /etc/nginx/ssl/example.com/key.pem;      # 替换为你的私钥路径</span></span>
<span class="line"><span>    ssl_protocols TLSv1.2 TLSv1.3;</span></span>
<span class="line"><span>    ssl_ciphers &#39;EECDH+AESGCM:EDH+AESGCM&#39;;</span></span>
<span class="line"><span>    ssl_prefer_server_ciphers on;</span></span>
<span class="line"><span>    ssl_session_cache shared:SSL:10m;</span></span>
<span class="line"><span>    ssl_session_timeout 10m;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    root /usr/share/nginx/html;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # 日志</span></span>
<span class="line"><span>    access_log /var/log/nginx/web.access.log main buffer=16k flush=5m;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # 安全限制</span></span>
<span class="line"><span>    location ~ /\\. {</span></span>
<span class="line"><span>        deny all;</span></span>
<span class="line"><span>        access_log off;</span></span>
<span class="line"><span>        log_not_found off;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # 健康检查</span></span>
<span class="line"><span>    location = /health {</span></span>
<span class="line"><span>        access_log /var/log/nginx/health.access.log main buffer=16k flush=5m;</span></span>
<span class="line"><span>        return 200 &quot;OK&quot;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # API 代理</span></span>
<span class="line"><span>    location /api/ {</span></span>
<span class="line"><span>        access_log /var/log/nginx/api.access.log main buffer=16k flush=5m;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        limit_except GET POST HEAD PUT DELETE {</span></span>
<span class="line"><span>            deny all;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        limit_req zone=req_limit burst=50 nodelay;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        proxy_pass http://backend_app:8080/api/;</span></span>
<span class="line"><span>        client_max_body_size 1024M;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        proxy_set_header Host $host;</span></span>
<span class="line"><span>        proxy_set_header X-Real-IP $remote_addr;</span></span>
<span class="line"><span>        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;</span></span>
<span class="line"><span>        proxy_set_header X-Forwarded-Proto $scheme;</span></span>
<span class="line"><span>        proxy_set_header Authorization $http_authorization;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        proxy_intercept_errors on;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # 移动/PC 页面分流</span></span>
<span class="line"><span>    location / {</span></span>
<span class="line"><span>        set $is_mobile no;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        if ($http_user_agent ~* &quot;(android|bb\\d+|meego).+mobile|avantgo|bada\\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\\.(browser|link)|vodafone|wap|windows ce|xda|xiino&quot;) {</span></span>
<span class="line"><span>            set $is_mobile yes;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        if ($http_user_agent ~* &quot;^(1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\\-(n|u)|c55\\/|capi|ccwa|cdm\\-|cell|chtm|cldc|cmd\\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\\-s|devi|dica|dmob|do(c|p)o|ds(12|\\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\\-|_)|g1 u|g560|gene|gf\\-5|g\\-mo|go(\\.w|od)|gr(ad|un)|haie|hcit|hd\\-(m|p|t)|hei\\-|hi(pt|ta)|hp( i|ip)|hs\\-c|ht(c(\\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\\-(20|go|ma)|i230|iac( |\\-|\\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\\/)|klon|kpt |kwc\\-|kyo(c|k)|le(no|xi)|lg( g|\\/(k|l|u)|50|54|\\-[a-w])|libw|lynx|m1\\-w|m3ga|m50\\/|ma(te|ui|xo)|mc(01|21|ca)|m\\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\\-2|po(ck|rt|se)|prox|psio|pt\\-g|qa\\-a|qc(07|12|21|32|60|\\-[2-7]|i\\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\\-|oo|p\\-)|sdk\\/|se(c(\\-|0|1)|47|mc|nd|ri)|sgh\\-|shar|sie(\\-|m)|sk\\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\\-|v\\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\\-|tdg\\-|tel(i|m)|tim\\-|t\\-mo|to(pl|sh)|ts(70|m\\-|m3|m5)|tx\\-9|up(\\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\\-|your|zeto|zte\\-)&quot;) {</span></span>
<span class="line"><span>            set $is_mobile yes;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        if ($is_mobile = yes) {</span></span>
<span class="line"><span>            rewrite ^/(.*)$ /phone/$1 break;</span></span>
<span class="line"><span>            root /usr/share/nginx/html/phone/;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        if ($is_mobile = no) {</span></span>
<span class="line"><span>            root /usr/share/nginx/html/web/;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        proxy_cache one;</span></span>
<span class="line"><span>        proxy_cache_valid any 1m;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # 错误页</span></span>
<span class="line"><span>    error_page 404 /404.html;</span></span>
<span class="line"><span>    error_page 500 502 503 504 /50x.html;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    location = /50x.html {</span></span>
<span class="line"><span>        root /usr/share/nginx/html;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br></div></div></div></div>`,7)])])}const h=n(e,[["render",i]]);export{u as __pageData,h as default};
