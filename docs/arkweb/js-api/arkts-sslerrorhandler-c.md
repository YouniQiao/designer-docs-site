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

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

## handleCancel

```TypeScript
handleCancel(): void
```

取消此请求。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

## handleCancel

```TypeScript
handleCancel(abortLoading: boolean): void
```

ArkWeb遇到了SSL证书错误，该接口表示是否终止或者继续展示错误给用户。

**Since:** 20

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| abortLoading | boolean | Yes | 如果abortLoading为true，则取消当前请求并停留在当前页面，如果为false，则拒绝忽略该SSL错误，最终展示空白页，如果开启了默认错误页，则显示默认错误页。默认为false |

## handleConfirm

```TypeScript
handleConfirm(): void
```

继续使用SSL证书。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

