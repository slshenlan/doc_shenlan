import{_ as n,o as a,c as p,ak as l}from"./chunks/framework.HyOigXlE.js";const m=JSON.parse('{"title":"Docker 安装 redis","description":"","frontmatter":{},"headers":[],"relativePath":"docs/server/database/redis/docker.md","filePath":"docs/server/database/redis/docker.md","lastUpdated":1788320201000}'),e={name:"docs/server/database/redis/docker.md"};function i(r,s,c,b,t,h){return a(),p("div",null,[...s[0]||(s[0]=[l(`<h1 id="docker-安装-redis" tabindex="-1">Docker 安装 redis <a class="header-anchor" href="#docker-安装-redis" aria-label="Permalink to “Docker 安装 redis”">​</a></h1><h2 id="文件夹结构" tabindex="-1">文件夹结构 <a class="header-anchor" href="#文件夹结构" aria-label="Permalink to “文件夹结构”">​</a></h2><div class="language-txt line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>redis/</span></span>
<span class="line"><span>├─ docker-compose.yml        # Compose 主文件</span></span>
<span class="line"><span>├─ conf/</span></span>
<span class="line"><span>│   └─ redis.conf            # Redis 配置文件</span></span>
<span class="line"><span>├─ data/                     # Redis 数据持久化目录（RDB/AOF）</span></span>
<span class="line"><span>├─ var/</span></span>
<span class="line"><span>│   └─ log/</span></span>
<span class="line"><span>│       └─ redis/            # Redis 日志目录</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="启动容器" tabindex="-1">启动容器 <a class="header-anchor" href="#启动容器" aria-label="Permalink to “启动容器”">​</a></h2><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-10" id="tab-11" checked><label data-title="docker-compose.yml" for="tab-11">docker-compose.yml</label><input type="radio" name="group-10" id="tab-12"><label data-title="redis.conf" for="tab-12">redis.conf</label><input type="radio" name="group-10" id="tab-13"><label data-title="修改文件/文件夹权限" for="tab-13">修改文件/文件夹权限</label><input type="radio" name="group-10" id="tab-14"><label data-title="快照" for="tab-14">快照</label></div><div class="blocks"><div class="language-yaml active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">services</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  redis</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    image</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">redis:7.2.0</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    container_name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">redis</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 容器名</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    user</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;1001:1001&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    restart</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">always</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    ports</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;6379:6379&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    volumes</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">./conf/redis.conf:/usr/local/etc/redis/redis.conf:ro</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 配置</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">./data:/data</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 数据</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">./var/log/redis:/var/log/redis</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 日志</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 指定容器启动时执行的命令，使用挂载的配置文件启动 Redis</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    command</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;redis-server&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/usr/local/etc/redis/redis.conf&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    environment</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">TZ=Asia/Shanghai</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    networks</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">net_redis</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">networks</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  net_redis</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    driver</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">bridge</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><div class="language-txt line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># Redis 配置文件示例</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 允许所有 IP 访问 Redis</span></span>
<span class="line"><span>bind 0.0.0.0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#Redis 访问密码</span></span>
<span class="line"><span>requirepass xxx</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 进程 ID 文件存放路径(docker内不用配置)</span></span>
<span class="line"><span># pidfile /var/run/redis_6379.pid</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Redis 工作目录，RDB 和 AOF 文件存放路径</span></span>
<span class="line"><span>dir /data</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 指定日志文件路径。</span></span>
<span class="line"><span>logfile /var/log/redis/redis.log</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Redis 监听的端口号，默认 6379</span></span>
<span class="line"><span>port 6379</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 启用保护模式。如果没有明确的 bind 规则且无密码，会拒绝远程访问。</span></span>
<span class="line"><span>protected-mode yes</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 指定 TCP 连接的 backlog（等待队列），如果客户端连接过多，可以适当调大</span></span>
<span class="line"><span>tcp-backlog 511</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 客户端空闲超时断开时间（秒），0 表示永不超时</span></span>
<span class="line"><span>timeout 0</span></span>
<span class="line"><span></span></span>
<span class="line"><span># TCP 保持连接的时间（秒），用于检测断开的连接，默认 300 秒</span></span>
<span class="line"><span>tcp-keepalive 300</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 是否以守护进程方式运行，no 代表前台运行（适用于 Docker）</span></span>
<span class="line"><span>daemonize no</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 进程监督方式，no 代表不使用 systemd 或 upstart 进行管理</span></span>
<span class="line"><span>supervised no</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 日志级别（debug、verbose、notice、warning)</span></span>
<span class="line"><span>loglevel notice</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 设置数据库数量，默认 16</span></span>
<span class="line"><span>databases 16</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 关闭 Redis 启动 Logo</span></span>
<span class="line"><span>always-show-logo no</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 允许修改 Redis 进程名称，便于 ps 查找</span></span>
<span class="line"><span>set-proc-title yes</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#进程标题格式</span></span>
<span class="line"><span>proc-title-template &quot;{title} {listen-addr} {server-mode}&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#影响 Redis SORT 指令的本地化排序规则</span></span>
<span class="line"><span># locale-collate &quot;&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># RDB 规则</span></span>
<span class="line"><span># 900 1：900 秒内至少 1 次修改就触发快照。</span></span>
<span class="line"><span># 300 10：300 秒内 10 次修改触发快照。</span></span>
<span class="line"><span># 60 10000：60 秒内 10000 次修改触发快照。</span></span>
<span class="line"><span>save 900 1 300 10 60 10000</span></span>
<span class="line"><span></span></span>
<span class="line"><span># RDB 失败时停止写入，避免数据丢失</span></span>
<span class="line"><span>stop-writes-on-bgsave-error yes</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 是否对 RDB 进行压缩存储</span></span>
<span class="line"><span>rdbcompression yes</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 计算 RDB 文件的校验和，防止损坏</span></span>
<span class="line"><span>rdbchecksum yes</span></span>
<span class="line"><span></span></span>
<span class="line"><span># RDB 数据文件名称。</span></span>
<span class="line"><span>dbfilename dump.rdb</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#是否同步删除 dump.rdb 文件</span></span>
<span class="line"><span>rdb-del-sync-files no</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 允许副本节点提供过期数据</span></span>
<span class="line"><span>replica-serve-stale-data yes</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 副本只读，防止误修改</span></span>
<span class="line"><span>replica-read-only yes</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 是否启用无磁盘同步</span></span>
<span class="line"><span>repl-diskless-sync no</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 无磁盘同步的等待时间</span></span>
<span class="line"><span>repl-diskless-sync-delay 5</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 最大无磁盘同步副本数，0 表示不限制</span></span>
<span class="line"><span># repl-diskless-sync-max-replicas 0</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 副本加载方式</span></span>
<span class="line"><span>repl-diskless-load disabled</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 复制过程中是否启用 TCP_NODELAY，no 代表减少延迟</span></span>
<span class="line"><span>repl-disable-tcp-nodelay no</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 副本优先级，0 代表永不提升为主节点</span></span>
<span class="line"><span>replica-priority 100</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 记录 ACL 日志的最大条数</span></span>
<span class="line"><span>acllog-max-len 128</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 控制 lazyfree 相关功能，默认 no（同步释放内存）</span></span>
<span class="line"><span>lazyfree-lazy-eviction no</span></span>
<span class="line"><span>lazyfree-lazy-expire no</span></span>
<span class="line"><span>lazyfree-lazy-server-del no</span></span>
<span class="line"><span>replica-lazy-flush no</span></span>
<span class="line"><span>lazyfree-lazy-user-del no</span></span>
<span class="line"><span>lazyfree-lazy-user-flush no</span></span>
<span class="line"><span></span></span>
<span class="line"><span># OOM 调整分值</span></span>
<span class="line"><span>oom-score-adj no</span></span>
<span class="line"><span>oom-score-adj-values 0 200 800</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 禁用透明大页（推荐开启以提高性能)</span></span>
<span class="line"><span>disable-thp yes</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 关闭 AOF 持久化</span></span>
<span class="line"><span>appendonly no</span></span>
<span class="line"><span></span></span>
<span class="line"><span># AOF 文件名称。</span></span>
<span class="line"><span>appendfilename &quot;appendonly.aof&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># AOF 目录名称</span></span>
<span class="line"><span># appenddirname &quot;appendonlydir&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># AOF 写入磁盘策略</span></span>
<span class="line"><span># always：每次写入都同步到磁盘（性能损耗大）。</span></span>
<span class="line"><span># everysec：每秒同步（推荐）。</span></span>
<span class="line"><span># no：由操作系统决定。</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span>appendfsync everysec</span></span>
<span class="line"><span></span></span>
<span class="line"><span># AOF 重写时是否禁用 fsync</span></span>
<span class="line"><span>no-appendfsync-on-rewrite no</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span># AOF 重写条件</span></span>
<span class="line"><span># 100：AOF 文件大小增长 100% 触发重写</span></span>
<span class="line"><span># 64mb：AOF 文件至少达到 64MB 才会触发重写</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span>auto-aof-rewrite-percentage 100</span></span>
<span class="line"><span>auto-aof-rewrite-min-size 64mb</span></span>
<span class="line"><span></span></span>
<span class="line"><span># AOF 读取损坏数据时是否继续加载</span></span>
<span class="line"><span>aof-load-truncated yes</span></span>
<span class="line"><span></span></span>
<span class="line"><span># AOF 文件是否使用 RDB 预加载格式</span></span>
<span class="line"><span>aof-use-rdb-preamble yes</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 是否在 AOF 记录 Unix 时间戳</span></span>
<span class="line"><span># aof-timestamp-enabled no</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Lua 脚本执行最大时间（毫秒）</span></span>
<span class="line"><span>lua-time-limit 5000</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 超过 10ms 记录慢查询日志</span></span>
<span class="line"><span>slowlog-log-slower-than 10000</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 记录最大慢查询条数</span></span>
<span class="line"><span>slowlog-max-len 128</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 延迟监控阈值（0 代表关闭）</span></span>
<span class="line"><span>latency-monitor-threshold 0</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 监听键空间事件（默认为空）</span></span>
<span class="line"><span>notify-keyspace-events &quot;&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 数据结构优化</span></span>
<span class="line"><span>hash-max-ziplist-entries 512</span></span>
<span class="line"><span>hash-max-ziplist-value 64</span></span>
<span class="line"><span>set-max-intset-entries 512</span></span>
<span class="line"><span></span></span>
<span class="line"><span>zset-max-ziplist-entries 128</span></span>
<span class="line"><span>zset-max-ziplist-value 64</span></span>
<span class="line"><span>hll-sparse-max-bytes 3000</span></span>
<span class="line"><span>stream-node-max-bytes 4096</span></span>
<span class="line"><span>stream-node-max-entries 100</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span># 开启 rehashing 以优化内存回收</span></span>
<span class="line"><span>activerehashing yes</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Both the hard or the soft limit can be disabled by setting them to zero.</span></span>
<span class="line"><span>client-output-buffer-limit normal 0 0 0</span></span>
<span class="line"><span>client-output-buffer-limit replica 256mb 64mb 60</span></span>
<span class="line"><span>client-output-buffer-limit pubsub 32mb 8mb 60</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 控制后台任务执行频率</span></span>
<span class="line"><span>hz 10</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 动态调整频率</span></span>
<span class="line"><span>dynamic-hz yes</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 允许增量 fsync 提高性能</span></span>
<span class="line"><span>aof-rewrite-incremental-fsync yes</span></span>
<span class="line"><span>rdb-save-incremental-fsync yes</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 开启 jemalloc 后台线程优化内存管理</span></span>
<span class="line"><span>jemalloc-bg-thread yes</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br><span class="line-number">156</span><br><span class="line-number">157</span><br><span class="line-number">158</span><br><span class="line-number">159</span><br><span class="line-number">160</span><br><span class="line-number">161</span><br><span class="line-number">162</span><br><span class="line-number">163</span><br><span class="line-number">164</span><br><span class="line-number">165</span><br><span class="line-number">166</span><br><span class="line-number">167</span><br><span class="line-number">168</span><br><span class="line-number">169</span><br><span class="line-number">170</span><br><span class="line-number">171</span><br><span class="line-number">172</span><br><span class="line-number">173</span><br><span class="line-number">174</span><br><span class="line-number">175</span><br><span class="line-number">176</span><br><span class="line-number">177</span><br><span class="line-number">178</span><br><span class="line-number">179</span><br><span class="line-number">180</span><br><span class="line-number">181</span><br><span class="line-number">182</span><br><span class="line-number">183</span><br><span class="line-number">184</span><br><span class="line-number">185</span><br><span class="line-number">186</span><br><span class="line-number">187</span><br><span class="line-number">188</span><br><span class="line-number">189</span><br><span class="line-number">190</span><br><span class="line-number">191</span><br><span class="line-number">192</span><br><span class="line-number">193</span><br><span class="line-number">194</span><br><span class="line-number">195</span><br><span class="line-number">196</span><br><span class="line-number">197</span><br><span class="line-number">198</span><br><span class="line-number">199</span><br><span class="line-number">200</span><br><span class="line-number">201</span><br><span class="line-number">202</span><br><span class="line-number">203</span><br></div></div><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 查看 UID 1001 是否已经被占用</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getent</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> passwd</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1001</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 查看 GID</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getent</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> group</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1001</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 修改属主为 UID/GID 1001</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">chown</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -R</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 1001:1001</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ./data</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ./var/log/redis</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 设置权限</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">chmod</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 750</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ./data</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ./var/log/redis</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 连接</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> exec</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -it</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> redis</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> redis-cli</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -a</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 密码</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 生成</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">SAVE</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></div></div>`,5)])])}const d=n(e,[["render",i]]);export{m as __pageData,d as default};
