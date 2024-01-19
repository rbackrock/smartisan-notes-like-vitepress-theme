---
---

# http 穿透

前段时间和小伙伴讨论微信开发的时候聊到部署测试的问题，这其中必不可少的就是使用工具进行内网穿透。内网穿透的工具大家可能用的最多的要么是花生壳，要么是 NATAPP 可是这些工具都是收费的，那么有没有免费的工具可以用呢？有的，但是如果你是用于开发微信，有两个前提条件，你必须要有自己的域名和自己的 VPS 服务器，满足这两个条件，那么我们就可以自己搭建只属于自己的内网穿透工具了

自己搭建内网穿透的工具好处非常多，其中就是免费，并且因为是自己的服务器和域名，速度可以非常快，而且依赖的开源项目功能非常丰富，可以满足绝大多数下的需求，我使用的内网穿透工具是 github 上的一个项目，名字叫 [frp](https://github.com/fatedier/frp) 它是一个用 Go 语言编写的用于内网穿透的高性能的反向代理应用

项目下载的时候需要根据电脑操作系统来进行选择，支持主流的 MacOS Windows 和各种 Linux 发行版本等，其中 MacOS 系统名称不叫 MacOS 而叫 darwin Mac 用户需要注意一下。这个项目划分服务器端和客户端，用作微信开发使用为目的的话，被微信认证过的服务器也就是自己的 VPS 看作是服务器端，自己本地看作是客户端，分别在两端下载完项目以后，我们来进行配置，其中配置我们划分两端来进行介绍，这里为了安全考虑，会加上访问的 token 和 SSL 的能力，这两个东西的详情请参考文档

在根目录找到 `frps.ini` 编写如下代码

```bash
[common]
bind_port = 7000
# frp 需要监听 80 端口，所以该 80 端口不能被占用，也可以设置其他闲置端口frp 需要监听 80 端口，所以该 80 端口不能被占用，也可以设置其他闲置端口
vhost_http_port = 80

# token
authenticate_heartbeats = true
authenticate_new_work_conns = true
authentication_method = token
token = dVo3rtiakUFsvictWi43xx4q
```

| Tables        |      Are      |  Cool |
| ------------- | :-----------: | ----: |
| col 3 is      | right-aligned | $1600 |
| col 2 is      |   centered    |   $12 |
| zebra stripes |   are neat    |    $1 |