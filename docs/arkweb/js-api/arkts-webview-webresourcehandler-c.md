# WebResourceHandler

Used to intercept url requests. Response headers and body can be sent through WebResourceHandler.

**Since:** 12

**System capability:** SystemCapability.Web.Webview.Core

## Modules to Import

```TypeScript
import { webview } from '@kit.ArkWeb';
```

## didFail

```TypeScript
didFail(code: WebNetErrorList): void
```

通知ArkWeb内核被拦截请求应该返回失败。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| code | WebNetErrorList | Yes | 网络错误码。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Incorrect parameter types. |
| 17100021 | The resource handler is invalid. |

## didFail

```TypeScript
didFail(code: WebNetErrorList, completeIfNoResponse: boolean): void
```

Notify that this request should be failed.

**Since:** 20

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| code | WebNetErrorList | Yes | Set response error code to intercept. |
| completeIfNoResponse | boolean | Yes | If completeIfNoResponse is true, when DidFailWithError is called, if  DidReceiveResponse has not been called, a response is automatically  constructed and the current request is terminated. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 17100101 | The errorCode is either ARKWEB_NET_OK or outside the range of error codes  in WebNetErrorList. |
| 17100021 | The resource handler is invalid. |

## didFail

```TypeScript
didFail(code: WebNetErrorList, completeIfNoResponse: boolean, customErrorCode: number): void
```

Notify that this request should be failed.

**Since:** 26.0.0

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| code | WebNetErrorList | Yes | Set response error code to intercept. |
| completeIfNoResponse | boolean | Yes | If completeIfNoResponse is true, when DidFailWithError is called,  if DidReceiveResponse has not been called, a response is automatically constructed and the current  request is terminated. |
| customErrorCode | number | Yes | The custom error code for this response, Web engine will pass the custom  error code directly to the application through onErrorReceive. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 17100021 | The resource handler is invalid. |

## didFinish

```TypeScript
didFinish(): void
```

通知Web组件被拦截的请求已经完成，并且没有更多的数据可用。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 17100021 | The resource handler is invalid. |

## didReceiveResponse

```TypeScript
didReceiveResponse(response: WebSchemeHandlerResponse): void
```

将构造的响应头传递给被拦截的请求。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| response | WebSchemeHandlerResponse | Yes | 该拦截请求的响应。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. |
| 17100021 | The resource handler is invalid. |

## didReceiveResponseBody

```TypeScript
didReceiveResponseBody(data: ArrayBuffer): void
```

将构造的响应体传递给被拦截的请求。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| data | ArrayBuffer | Yes | 响应体数据。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. |
| 17100021 | The resource handler is invalid. |

