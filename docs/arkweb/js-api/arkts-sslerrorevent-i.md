# SslErrorEvent

Defines the ssl error event.

**Since:** 12

**System capability:** SystemCapability.Web.Webview.Core

## isFatalError

```TypeScript
isFatalError: boolean
```

是否是致命错误。

**Type:** boolean

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

## referrer

```TypeScript
referrer: string
```

referrer url地址。

**Type:** string

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

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

## originalUrl

```TypeScript
originalUrl: string
```

请求的原始url地址。

**Type:** string

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

## certChainData

```TypeScript
certChainData?: Array<Uint8Array>
```

证书链数据。

**Type:** Array<Uint8Array>

**Since:** 20

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

## url

```TypeScript
url: string
```

url地址。

**Type:** string

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

## isMainFrame

```TypeScript
isMainFrame: boolean
```

是否是主资源。

**Type:** boolean

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

