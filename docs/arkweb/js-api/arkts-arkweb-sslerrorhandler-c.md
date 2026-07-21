# SslErrorHandler

Defines the ssl error request result, related to {@link onSslErrorEventReceive} method.

**Since:** 9

<!--Device-unnamed-declare class SslErrorHandler--><!--Device-unnamed-declare class SslErrorHandler-End-->

**System capability:** SystemCapability.Web.Webview.Core

<a id="constructor"></a>
## constructor

```TypeScript
constructor()
```

Constructor.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-SslErrorHandler-constructor()--><!--Device-SslErrorHandler-constructor()-End-->

**System capability:** SystemCapability.Web.Webview.Core

<a id="handlecancel"></a>
## handleCancel

```TypeScript
handleCancel(): void
```

Cancel this request.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-SslErrorHandler-handleCancel(): void--><!--Device-SslErrorHandler-handleCancel(): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

<a id="handlecancel-1"></a>
## handleCancel

```TypeScript
handleCancel(abortLoading: boolean): void
```

ArkWeb has encountered an SSL certificate error, and this interface indicates whether to terminate or continue displaying the error to users.

**Since:** 20

<!--Device-SslErrorHandler-handleCancel(abortLoading: boolean): void--><!--Device-SslErrorHandler-handleCancel(abortLoading: boolean): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| abortLoading | boolean | Yes | If abortLoading is true, the current request will be canceled and the |

<a id="handleconfirm"></a>
## handleConfirm

```TypeScript
handleConfirm(): void
```

Confirm to use the SSL certificate.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-SslErrorHandler-handleConfirm(): void--><!--Device-SslErrorHandler-handleConfirm(): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

