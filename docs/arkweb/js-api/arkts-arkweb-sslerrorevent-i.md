# SslErrorEvent

Defines the ssl error event.

**Since:** 12

**System capability:** SystemCapability.Web.Webview.Core

## certChainData

```TypeScript
certChainData?: Array<Uint8Array>
```

Certificate chain data in DER format.

**Type:** Array<Uint8Array>

**Since:** 20

**System capability:** SystemCapability.Web.Webview.Core

## error

```TypeScript
error: SslError
```

Error codes.

**Type:** SslError

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Web.Webview.Core

## handler

```TypeScript
handler: SslErrorHandler
```

Notifies the user of the operation behavior of the web component.

**Type:** SslErrorHandler

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Web.Webview.Core

## isFatalError

```TypeScript
isFatalError: boolean
```

Whether the error is fatal.

**Type:** boolean

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Web.Webview.Core

## isMainFrame

```TypeScript
isMainFrame: boolean
```

Whether the request is main frame.

**Type:** boolean

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Web.Webview.Core

## originalUrl

```TypeScript
originalUrl: string
```

Original url.

**Type:** string

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Web.Webview.Core

## referrer

```TypeScript
referrer: string
```

Referrer.

**Type:** string

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Web.Webview.Core

## url

```TypeScript
url: string
```

Request url.

**Type:** string

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Web.Webview.Core

