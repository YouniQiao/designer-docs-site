# WebResourceHandler

Used to intercept url requests. Response headers and body can be sent through WebResourceHandler.

**Since:** 12

<!--Device-webview-class WebResourceHandler--><!--Device-webview-class WebResourceHandler-End-->

**System capability:** SystemCapability.Web.Webview.Core

## Modules to Import

```TypeScript
import { webview } from '@kit.ArkWeb';
```

## didFail

```TypeScript
didFail(code: WebNetErrorList): void
```

Notify that this request should be failed.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-WebResourceHandler-didFail(code: WebNetErrorList): void--><!--Device-WebResourceHandler-didFail(code: WebNetErrorList): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| code | [WebNetErrorList](arkts-arkweb-web-neterrorlist-webneterrorlist-e.md) | Yes | Set response error code to intercept. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Incorrect parameter types. |
| [17100021](../errorcode-webview.md#17100021-webresourcehandler-is-invalid) | The resource handler is invalid. |

## didFail

```TypeScript
didFail(code: WebNetErrorList, completeIfNoResponse: boolean): void
```

Notify that this request should be failed.

**Since:** 20

<!--Device-WebResourceHandler-didFail(code: WebNetErrorList, completeIfNoResponse: boolean): void--><!--Device-WebResourceHandler-didFail(code: WebNetErrorList, completeIfNoResponse: boolean): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| code | [WebNetErrorList](arkts-arkweb-web-neterrorlist-webneterrorlist-e.md) | Yes | Set response error code to intercept. |
| completeIfNoResponse | boolean | Yes | If completeIfNoResponse is true, when DidFailWithError is called, if DidReceiveResponse has not been called, a response is automatically constructed and the current request is terminated. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [17100101](../errorcode-webview.md#17100101-incorrect-network-error-code) | The errorCode is either ARKWEB_NET_OK or outside the range of error codes in WebNetErrorList. |
| [17100021](../errorcode-webview.md#17100021-webresourcehandler-is-invalid) | The resource handler is invalid. |

## didFinish

```TypeScript
didFinish(): void
```

Notify that this request should be finished and there is no more data available.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-WebResourceHandler-didFinish(): void--><!--Device-WebResourceHandler-didFinish(): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [17100021](../errorcode-webview.md#17100021-webresourcehandler-is-invalid) | The resource handler is invalid. |

## didReceiveResponse

```TypeScript
didReceiveResponse(response: WebSchemeHandlerResponse): void
```

Pass response headers to intercepted requests.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-WebResourceHandler-didReceiveResponse(response: WebSchemeHandlerResponse): void--><!--Device-WebResourceHandler-didReceiveResponse(response: WebSchemeHandlerResponse): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| response | [WebSchemeHandlerResponse](arkts-arkweb-webview-webschemehandlerresponse-c.md) | Yes | Set response header to intercept. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. |
| [17100021](../errorcode-webview.md#17100021-webresourcehandler-is-invalid) | The resource handler is invalid. |

## didReceiveResponseBody

```TypeScript
didReceiveResponseBody(data: ArrayBuffer): void
```

Pass response body data to intercepted requests.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-WebResourceHandler-didReceiveResponseBody(data: ArrayBuffer): void--><!--Device-WebResourceHandler-didReceiveResponseBody(data: ArrayBuffer): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| data | [ArrayBuffer](../../apis-arkts/arkts-apis/arkts-arkts-collections-arraybuffer-c.md) | Yes | Set response body to intercept. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. |
| [17100021](../errorcode-webview.md#17100021-webresourcehandler-is-invalid) | The resource handler is invalid. |

