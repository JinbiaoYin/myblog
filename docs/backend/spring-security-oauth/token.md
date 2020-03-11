---
title: 令牌的访问与刷新
---

## Access Token
`Access Token` 是客户端访问资源服务器的令牌。拥有这个令牌代表着得到用户的授权。然而，这个授权应该是**临时**的，有一定有效期。这是因为，`Access Token` 在使用的过程中**可能会泄露**。给 `Access Token` 限定一个 较短的有效期 可以降低因 `Access Token` 泄露而带来的风险。

然而引入了有效期之后，客户端使用起来就不那么方便了。每当 Access Token 过期，客户端就必须重新向用户索要授权。这样用户可能每隔几天，甚至每天都需要进行授权操作。这是一件非常影响用户体验的事情。希望有一种方法，可以避免这种情况。

于是 oAuth2.0 引入了 Refresh Token 机制


## Refresh Token

Refresh Token 的作用是用来刷新 `Access Token`。认证服务器提供一个刷新接口，例如：

```
http://blog.yinjinbiao.top/refresh?refresh_token=&client_id=
```

传入 `refresh_token` 和 `client_id`，认证服务器验证通过后，返回一个新的 `Access Token`。为了安全，oAuth2.0 引入了两个措施：

- OAuth2.0 要求，Refresh Token 一定是保存在客户端的服务器上 ，而绝不能存放在狭义的客户端（例如 App、PC 端软件）上。调用 refresh 接口的时候，一定是从服务器到服务器的访问。
- OAuth2.0 引入了 `client_secret` 机制。即每一个 `client_id` 都对应一个 `client_secret`。这个 `client_secret` 会在客户端申请 `client_id` 时，随 `client_id` 一起分配给客户端。客户端必须把 `client_secret` 妥善保管在服务器上，决不能泄露。刷新 `Access Token` 时，需要验证这个 `client_secret`。

实际上的刷新接口类似于：

```
http://blog.yinjinbiao.top/refresh?refresh_token=&client_id=&client_secret=
```

以上就是 `Refresh Token` 机制。`Refresh Token` 的有效期非常长，会在用户授权时，随 `Access Token` 一起重定向到回调 URL，传递给客户端。