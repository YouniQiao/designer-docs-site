# WebHttpBodyStream

The http body stream of the request.

**Since:** 12

**System capability:** SystemCapability.Web.Webview.Core

## Modules to Import

```TypeScript
import { webview } from '@kit.ArkWeb';
```

## getPosition

```TypeScript
getPosition(): number
```

读取WebHttpBodyStream中当前的读取位置。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| number | WebHttpBodyStream中当前的读取位置。单位：字节。 |

## getSize

```TypeScript
getSize(): number
```

获取WebHttpBodyStream中的数据大小，分块传输时总是返回零。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| number | 获取WebHttpBodyStream中的数据大小。单位：字节。 |

## initialize

```TypeScript
initialize(): Promise<void>
```

初始化WebHttpBodyStream。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise实例，用于获取WebHttpBodyStream是否初始化成功。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 17100022 | Failed to initialize the HTTP body stream. |

## isChunked

```TypeScript
isChunked(): boolean
```

WebHttpBodyStream是否采用分块传输。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| boolean | WebHttpBodyStream是否采用分块传输，如果采用分块传输则返回true，否则返回false。 |

## isEof

```TypeScript
isEof(): boolean
```

判断WebHttpBodyStream中的所有数据是否都已被读取。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| boolean | WebHttpBodyStream中的所有数据是否都已被读取。  如果所有数据都已被读取，则返回true。对于分块传输类型的WebHttpBodyStream，在第一次读取尝试之前返回false。 |

## isInMemory

```TypeScript
isInMemory(): boolean
```

判断WebHttpBodyStream中的上传数据是否在内存中。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| boolean | WebHttpBodyStream中的上传数据是否在内存中。  如果WebHttpBodyStream中的上传数据完全在内存中，并且所有读取请求都将同步成功，则返回true。对于分块传输类型的数据，预期返回false。 |

## read

```TypeScript
read(size: number): Promise<ArrayBuffer>
```

读取WebHttpBodyStream中的数据。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| size | number | Yes | 读取WebHttpBodyStream中的字节数。单位：字节。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;ArrayBuffer> | Promise实例，用于获取WebHttpBodyStream中读取的数据。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. 3.Parameter verification failed. |

