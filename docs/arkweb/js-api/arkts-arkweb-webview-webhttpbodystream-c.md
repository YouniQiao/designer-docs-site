# WebHttpBodyStream

The http body stream of the request.

**Since:** 12

<!--Device-webview-class WebHttpBodyStream--><!--Device-webview-class WebHttpBodyStream-End-->

**System capability:** SystemCapability.Web.Webview.Core

## Modules to Import

```TypeScript
import { webview } from '@kit.ArkWeb';
```

## getPosition

```TypeScript
getPosition(): number
```

Get the current position of the data stream. Unit: bytes.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-WebHttpBodyStream-getPosition(): number--><!--Device-WebHttpBodyStream-getPosition(): number-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| number | Return position in post data stream. |

## getSize

```TypeScript
getSize(): number
```

Get the total size of the data stream. When data is chunked, always return zero. Unit: bytes.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-WebHttpBodyStream-getSize(): number--><!--Device-WebHttpBodyStream-getSize(): number-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| number | Return size of data stream size. |

## initialize

```TypeScript
initialize(): Promise<void>
```

Initialize data stream.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-WebHttpBodyStream-initialize(): Promise<void>--><!--Device-WebHttpBodyStream-initialize(): Promise<void>-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<void> | The promise of data stream is initialized. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [17100022](../errorcode-webview.md#17100022-failed-to-initialize-webhttpbodystream) | Failed to initialize the HTTP body stream. |

## isChunked

```TypeScript
isChunked(): boolean
```

Whether data stream is chunked.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-WebHttpBodyStream-isChunked(): boolean--><!--Device-WebHttpBodyStream-isChunked(): boolean-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Whether data stream is chunked. |

## isEof

```TypeScript
isEof(): boolean
```

Whether all data stream has been consumed. For chunked uploads,returns false until the first read attempt.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-WebHttpBodyStream-isEof(): boolean--><!--Device-WebHttpBodyStream-isEof(): boolean-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Whether data stream has been consumed. |

## isInMemory

```TypeScript
isInMemory(): boolean
```

Returns true if the upload data in the stream is entirely in memory, and all read requests will succeed synchronously. Expected to return false for chunked requests.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-WebHttpBodyStream-isInMemory(): boolean--><!--Device-WebHttpBodyStream-isInMemory(): boolean-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Whether the data stream is in memory. |

## read

```TypeScript
read(size: number): Promise<ArrayBuffer>
```

Read the data stream to the buffer. Unit: bytes.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-WebHttpBodyStream-read(size: number): Promise<ArrayBuffer>--><!--Device-WebHttpBodyStream-read(size: number): Promise<ArrayBuffer>-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| size | number | Yes | Read size. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<ArrayBuffer> | Read array buffer of result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.<br>2. Incorrect parameter types. 3.Parameter verification failed. |

