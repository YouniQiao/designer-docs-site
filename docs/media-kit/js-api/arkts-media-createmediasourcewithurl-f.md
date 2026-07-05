# createMediaSourceWithUrl

## createMediaSourceWithUrl

```TypeScript
function createMediaSourceWithUrl(url: string, headers?: Record<string, string>): MediaSource
```

创建流媒体预下载媒体来源实例方法。

**Since:** 12

**Atomic service API:** From API version 13 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Media.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| url | string | Yes | - 流媒体预下载媒体来源url，支持的流媒体格式：HLS、HTTP-FLV、Dash、Https。 - 本地m3u8的fd路径。 |
| headers | Record&lt;string, string> | No | 支持流媒体预下载HttpHeader自定义。不传时为网络请求默认的HttpHeader。 |

**Return value:**

| Type | Description |
| --- | --- |
| MediaSource | MediaSource返回值。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. 3.Parameter verification failed. |
| 5400101 | No memory. |

