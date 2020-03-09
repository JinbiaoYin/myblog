---
title: 首页
---

## 介绍
### 主要用处
- http服务器
- 虚拟主机
- 反向代理
- 负载均衡

## 虚拟主机
Nginx 可以用来做虚拟主机，即静态资源服务器。
参考配置文件,每一个server就是一个虚拟主机，如果访问 80 端口下配置的一个 location 中寻找对应的页面，例如这里是 `/usr/share/nginx/wwwroot/html80` 文件夹
如果访问 8080 端口，则会到 8080 端口配置的另一个location中寻找。

```
worker_processes  1;

events {
    worker_connections  1024;
}

http {
    include       mime.types;
    default_type  application/octet-stream;

    sendfile        on;
    
    keepalive_timeout  65;
    # 配置虚拟主机 192.168.75.145
    server {
	# 监听的ip和端口，配置 192.168.75.145:80
        listen       80;
	# 虚拟主机名称这里配置ip地址
        server_name  192.168.75.145;
	# 所有的请求都以 / 开始，所有的请求都可以匹配此 location
        location / {
	    # 使用 root 指令指定虚拟主机目录即网页存放目录
	    # 比如访问 http://ip/index.html 将找到 /usr/local/docker/nginx/wwwroot/html80/index.html
	    # 比如访问 http://ip/item/index.html 将找到 /usr/local/docker/nginx/wwwroot/html80/item/index.html

            root   /usr/share/nginx/wwwroot/html80;
	    # 指定欢迎页面，按从左到右顺序查找
            index  index.html index.htm;
        }

    }
    # 配置虚拟主机 192.168.75.245
    server {
        listen       8080;
        server_name  192.168.75.145;

        location / {
            root   /usr/share/nginx/wwwroot/html8080;
            index  index.html index.htm;
        }
    }
}
```

### Nginx的惊群问题
1.11.3版本之前的nginx发挥cpu多核架构性能所产生的负面问题，使用多个worker子进程监听相同的端口，导致多个子进程在accept连接时会有争抢，浪费系统资源，导致系统性能的下降。
nginx后来的解决方法是同一时刻只有一个worker子进程监听一个端口。

## 反向代理
代理服务器，客户机在发送请求时，不会直接发送给目的主机，而是先发送给代理服务器，代理服务接受客户机请求之后，再向主机发出，并接收目的主机返回的数据，存放在代理服务器的硬盘中，再发送给客户机。

### 什么是正向代理
正向代理，架设在客户机与目标主机之间，只用于代理内部网络对 Internet 的连接请求，客户机必须指定代理服务器,并将本来要直接发送到 Web 服务器上的 Http 请求发送到代理服务器中。
代理客户端装在客户机本身，我们请求的直接是目标站点。

### 什么是反向代理
反向代理服务器架设在服务器端，通过缓冲经常被请求的页面来缓解服务器的工作量，将客户机请求转发给内部网络上的目标服务器；并将从服务器上得到的结果返回给 Internet 上请求连接的客户端，此时代理服务器与目标主机一起对外表现为一个服务器。
反向代理装在服务器端，我们请求的是反向代理服务器，不需要关心最终的目标站点。

### 如何使用反向代理
nginx可以将多个服务聚合在一起，我们只需要访问nignx的ip地址，即可获取各个服务的资源。
参考配置
```
user  nginx;
worker_processes  1;

events {
    worker_connections  1024;
}

http {
    include       mime.types;
    default_type  application/octet-stream;

    sendfile        on;

    keepalive_timeout  65;
	
	# 配置一个代理即 tomcat1 服务器
	upstream tomcatServer1 {
		server 192.168.75.145:9090;
	}

	# 配置一个代理即 tomcat2 服务器
	upstream tomcatServer2 {
		server 192.168.75.145:9091;
	}

	# 配置一个虚拟主机
	server {
		listen 80;
		server_name admin.service.itoken.funtl.com;
		location / {
				# 域名 admin.service.itoken.funtl.com 的请求全部转发到 tomcat_server1 即 tomcat1 服务上
				proxy_pass http://tomcatServer1;
				# 欢迎页面，按照从左到右的顺序查找页面
				index index.jsp index.html index.htm;
		}
	}

	server {
		listen 80;
		server_name admin.web.itoken.funtl.com;

		location / {
			# 域名 admin.web.itoken.funtl.com 的请求全部转发到 tomcat_server2 即 tomcat2 服务上
			proxy_pass http://tomcatServer2;
			index index.jsp index.html index.htm;
		}
	}
}
```
::: tip
与虚拟主机配置不同的地方在于proxy_pass和root，root是在本机，proxy_pass是转发。
:::

## 负载均衡
使用nginx实现负载均衡，类似于eureka那种效果，参考配置：
```
user  nginx;
worker_processes  1;

events {
    worker_connections  1024;
}

http {
    include       mime.types;
    default_type  application/octet-stream;

    sendfile        on;

    keepalive_timeout  65;
	
	upstream myapp1 {
		server 192.168.75.145:9090 weight=10;
		server 192.168.75.145:9091 weight=10;
	}

	server {
		listen 80;
		server_name nginx.funtl.com;
		location / {
			proxy_pass http://myapp1;
			index index.jsp index.html index.htm;
		}
	}
}
```

### 相关配置说明
与反向代理不同的一点是，需要将负载均衡的设备配置到一个upstream中，并分配权重。
```
# 定义负载均衡设备的 Ip及设备状态 
upstream myServer {
    server 127.0.0.1:9090 down;
    server 127.0.0.1:8080 weight=2;
    server 127.0.0.1:6060;
    server 127.0.0.1:7070 backup;
}
```

在需要使用负载的 Server 节点下添加

```
proxy_pass http://myServer;
```

#### upstream 权重配置详解：
- upstream：每个设备的状态:
- down：表示当前的 server 暂时不参与负载
- weight：默认为 1 weight 越大，负载的权重就越大。
- max_fails：允许请求失败的次数默认为 1 当超过最大次数时，返回 proxy_next_upstream 模块定义的错误
- fail_timeout:max_fails 次失败后，暂停的时间。
- backup：其它所有的非 backup 机器 down 或者忙的时候，请求 backup 机器。所以这台机器压力会最轻

```
 try_files      $uri $uri/ =404;
```
try_files 的第一个 `$uri` 代表 Nginx 会去硬盘的对应路径寻找文件，如果找不到，则尝试在访问的 uri 后面追加 `/`，并继续在硬盘中寻找对应目录，处理同上，否则将这次请求内部重定向到最后一个参数，也就是返回404。


## 使用nginx搭建一个伪CDN服务器
[CDN](https://baike.baidu.com/item/CDN/420951?fr=aladdin)
其实就是把nginx当成一个http服务器，将所需要的静态资源放在里面。


## 参考资料
