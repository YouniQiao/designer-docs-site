# OnClientAuthenticationEvent

定义当需要用户提供SSL客户端证书时触发回调。

**Since:** 12

**System capability:** SystemCapability.Web.Webview.Core

## handler

```TypeScript
handler : ClientAuthenticationHandler
```

通知Web组件用户操作行为。

**Type:** ClientAuthenticationHandler

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

## port

```TypeScript
port : number
```

请求证书服务器的端口号。

**Type:** number

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

## host

```TypeScript
host : string
```

请求证书服务器的主机名。

**Type:** string

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

## issuers

```TypeScript
issuers : Array<string>
```

与私钥匹配的证书可接受颁发者。

**Type:** Array<string>

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

## keyTypes

```TypeScript
keyTypes : Array<string>
```

可接受的非对称密钥类型。

**Type:** Array<string>

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

