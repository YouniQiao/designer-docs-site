# OnSslErrorEventReceiveEvent

定义网页收到SSL错误时触发。

**Since:** 12

**System capability:** SystemCapability.Web.Webview.Core

## handler

```TypeScript
handler: SslErrorHandler
```

通知Web组件用户操作行为。

**Type:** SslErrorHandler

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

## certChainData

```TypeScript
certChainData?: Array<Uint8Array>
```

证书链数据。

**Type:** Array<Uint8Array>

**Since:** 15

**System capability:** SystemCapability.Web.Webview.Core

## error

```TypeScript
error: SslError
```

错误码。

**Type:** SslError

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

