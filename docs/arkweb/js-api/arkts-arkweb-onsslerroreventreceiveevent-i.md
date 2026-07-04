# OnSslErrorEventReceiveEvent

Defines the triggered callback when the Web page receives an ssl Error.

**Since:** 12

**System capability:** SystemCapability.Web.Webview.Core

## certChainData

```TypeScript
certChainData?: Array<Uint8Array>
```

Certificate chain data in DER format.

**Type:** Array<Uint8Array>

**Since:** 15

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

