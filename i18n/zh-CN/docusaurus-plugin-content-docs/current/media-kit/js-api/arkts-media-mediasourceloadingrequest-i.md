# MediaSourceLoadingRequest

The MediaSourceLoadingRequest class defines a loading request object. Applications use this object to obtain the location of the requested resource and to interact with the player for data exchange.

**起始版本：** 18

**系统能力：** SystemCapability.Multimedia.Media.Core

## 导入模块

```TypeScript
import { media } from '@kit.MediaKit';
```

## finishLoading

```TypeScript
finishLoading(uuid: long, state: LoadingRequestError): void
```

Notifies the player of the current request status. After pushing all the data for a single resource, the application should send the **LOADING_ERROR_SUCCESS** state to notify the player that the resource push is complete.

**起始版本：** 18

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Media.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| uuid | long | 是 | ID for the resource handle. The source is  [SourceOpenCallback](arkts-media-sourceopencallback-t.md#SourceOpenCallback). |
| state | LoadingRequestError | 是 | Request status. |

## respondData

```TypeScript
respondData(uuid: number, offset: number, buffer: ArrayBuffer): number
```

Sends data to the player.

**起始版本：** 18

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Media.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| uuid | number | 是 | ID for the resource handle. The source is  [SourceOpenCallback](arkts-media-sourceopencallback-t.md#SourceOpenCallback). |
| offset | number | 是 | Offset of the current media data relative to the start of the resource. The value  cannot be less than 0. |
| buffer | ArrayBuffer | 是 | Media data sent to the player. Note: Do not transmit irrelevant data, as  it can affect normal data parsing and playback. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| number | Number of bytes received by the server.  - A return value less than 0 indicates failure.  - A return value of -2 indicates that the player no longer needs the current data, and the client should stop  the current read process.  - A return value of -3 indicates that the player's buffer is full, and the client should wait for the next read. |

## respondData

```TypeScript
respondData(uuid: long, offset: long, buffer: ArrayBuffer): int | undefined
```

The interface for application used to send requested data to AVPlayer.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.Media.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| uuid | long | 是 | ID for the resource handle. |
| offset | long | 是 | Offset of the current media data relative to the start of the resource. |
| buffer | ArrayBuffer | 是 | Media data sent to the player. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| int | - accept bytes for current read. The value less than zero means failed.  -2, means player need current data any more, the client should stop current read process.  -3, means player buffer is full, the client should wait for next read. |

## respondHeader

```TypeScript
respondHeader(uuid: long, header?: Record<string, string>, redirectUrl?: string): void
```

Sends response header information to the player. This API must be called before the first call to [respondData]media.MediaSourceLoadingRequest.respondData(uuid: number, offset: number, buffer: ArrayBuffer).

**起始版本：** 18

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Media.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| uuid | long | 是 | ID for the resource handle. The source is  [SourceOpenCallback](arkts-media-sourceopencallback-t.md#SourceOpenCallback). |
| header | Record&lt;string, string> | 否 |  |
| redirectUrl | string | 否 |  |

## header

```TypeScript
header?: Record<string, string>
```

HTTP request header. If the header exists, the application should set the header information in the HTTP request when downloading data.

**类型：** Record<string, string>

**起始版本：** 18

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Media.Core

## url

```TypeScript
url: string
```

Resource URL, which is the path to the resource that the application needs to open.

**类型：** string

**起始版本：** 18

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Media.Core

