# createMediaSourceWithUrl

## createMediaSourceWithUrl

```TypeScript
function createMediaSourceWithUrl(url: string, headers?: Record<string, string>): MediaSource
```

创建流媒体预下载媒体来源实例方法。

**起始版本：** 12

**原子化服务API：** 从API version 13开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Media.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| url | string | 是 | - 流媒体预下载媒体来源url，支持的流媒体格式：HLS、HTTP-FLV、Dash、Https。 - 本地m3u8的fd路径。 |
| headers | Record&lt;string, string> | 否 | 支持流媒体预下载HttpHeader自定义。不传时为网络请求默认的HttpHeader。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| MediaSource | MediaSource返回值。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. 3.Parameter verification failed. |
| 5400101 | No memory. |

