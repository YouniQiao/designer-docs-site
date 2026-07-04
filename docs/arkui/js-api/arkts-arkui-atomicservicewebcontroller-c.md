# AtomicServiceWebController

Provides methods for controlling the AtomicServiceWeb controller.

**Since:** 12

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { AtomicServiceWeb, OnMessageEvent, OnPageEndEvent, OnHttpErrorReceiveEvent, OnLoadInterceptEvent, WebHeader, OnProgressChangeEvent, OnErrorReceiveEvent, OnPageBeginEvent, OnLoadInterceptCallback, AtomicServiceWebController } from '@ohos.atomicservice.AtomicServiceWeb';
```

## accessBackward

```TypeScript
accessBackward(): boolean
```

Checks whether the web page can go back.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| boolean | True if the web page can go back else false. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [17100001](../../apis-arkweb/errorcode-webview.md#17100001-webviewcontroller-not-associated-with-a-web-component) | Init error. The AtomicServiceWebController must be associated with aAtomicServiceWeb component. |

## accessForward

```TypeScript
accessForward(): boolean
```

Checks whether the web page can go forward.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| boolean | True if the web page can go forward else false. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [17100001](../../apis-arkweb/errorcode-webview.md#17100001-webviewcontroller-not-associated-with-a-web-component) | Init error. The AtomicServiceWebController must be associated with aAtomicServiceWeb component. |

## accessStep

```TypeScript
accessStep(step: number): boolean
```

Checks whether the web page can go back or forward the given number of steps.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| step | number | Yes | The number of steps. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | True if the web page can go back else false. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.<br>2. Incorrect parameter types. 3.Parameter verification failed. |
| [17100001](../../apis-arkweb/errorcode-webview.md#17100001-webviewcontroller-not-associated-with-a-web-component) | Init error. The AtomicServiceWebController must be associated with aAtomicServiceWeb component. |

## backward

```TypeScript
backward(): void
```

Goes back in the history of the web page.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [17100001](../../apis-arkweb/errorcode-webview.md#17100001-webviewcontroller-not-associated-with-a-web-component) | Init error. The AtomicServiceWebController must be associated with aAtomicServiceWeb component. |

## forward

```TypeScript
forward(): void
```

Goes forward in the history of the web page.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [17100001](../../apis-arkweb/errorcode-webview.md#17100001-webviewcontroller-not-associated-with-a-web-component) | Init error. The AtomicServiceWebController must be associated with aAtomicServiceWeb component. |

## getCustomUserAgent

```TypeScript
getCustomUserAgent(): string
```

Get custom user agent.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| string | Get custom User agent information. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [17100001](../../apis-arkweb/errorcode-webview.md#17100001-webviewcontroller-not-associated-with-a-web-component) | Init error. The AtomicServiceWebController must be associated with aAtomicServiceWeb component. |

## getUserAgent

```TypeScript
getUserAgent(): string
```

Gets the default user agent.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| string | Return user agent information. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [17100001](../../apis-arkweb/errorcode-webview.md#17100001-webviewcontroller-not-associated-with-a-web-component) | Init error. The AtomicServiceWebController must be associated with aAtomicServiceWeb component. |

## loadUrl

```TypeScript
loadUrl(url: string | Resource, headers?: Array<WebHeader>): void
```

Loads the URL.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| url | string \| Resource | Yes | The URL to load. |
| headers | Array&lt;WebHeader&gt; | No | Additional HTTP request header for URL. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.<br>2. Incorrect parameter types. 3.Parameter verification failed. |
| [17100001](../../apis-arkweb/errorcode-webview.md#17100001-webviewcontroller-not-associated-with-a-web-component) | Init error. The AtomicServiceWebController must be associated with aAtomicServiceWeb component. |
| [17100002](../../apis-arkweb/errorcode-webview.md#17100002-incorrect-url-format) | Invalid url. |
| [17100003](../../apis-arkweb/errorcode-webview.md#17100003-incorrect-resource-path) | Invalid resource path or file type. |

## refresh

```TypeScript
refresh(): void
```

Refreshes the current URL.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [17100001](../../apis-arkweb/errorcode-webview.md#17100001-webviewcontroller-not-associated-with-a-web-component) | Init error. The AtomicServiceWebController must be associated with aAtomicServiceWeb component. |

## setCustomUserAgent

```TypeScript
setCustomUserAgent(userAgent: string): void
```

Set custom user agent.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| userAgent | string | Yes | User custom agent information. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.<br>2. Incorrect parameter types. |
| [17100001](../../apis-arkweb/errorcode-webview.md#17100001-webviewcontroller-not-associated-with-a-web-component) | Init error. The AtomicServiceWebController must be associated with aAtomicServiceWeb component. |

