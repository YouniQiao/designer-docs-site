# SslErrorHandler

Defines the ssl error request result, related to {@link onSslErrorEventReceive} method.

**Since:** 9

**System capability:** SystemCapability.Web.Webview.Core

## constructor

```TypeScript
constructor()
```

Constructor.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

## handleCancel

```TypeScript
handleCancel(): void
```

Cancel this request.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

## handleCancel

```TypeScript
handleCancel(abortLoading: boolean): void
```

ArkWeb has encountered an SSL certificate error, and this interface indicates whether to terminate or
continue displaying the error to users.

**Since:** 20

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| abortLoading | boolean | Yes | If abortLoading is true, the current request will be canceled and the |

## handleConfirm

```TypeScript
handleConfirm(): void
```

Confirm to use the SSL certificate.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

