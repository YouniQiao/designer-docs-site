# SourceReadCallback

```TypeScript
type SourceReadCallback = (uuid: long, requestedOffset: long, requestedLength: long) => void
```

This callback function is implemented by applications to handle resource read requests. When data is available, applications should push it to the player using the [respondData](arkts-media-mediasourceloadingrequest-i.md#respondData) API of the corresponding MediaSourceLoadingRequest object. > **NOTE** > > The client must return the handle immediately after processing the request.

**起始版本：** 18

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Media.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| uuid | long | 是 | ID for the resource handle. |
| requestedOffset | long | 是 | Offset of the current media data relative to the start of the resource. |
| requestedLength | long | 是 | Length of the current request. The value -1 indicates reaching the end of the  resource. After pushing the data, call  [finishLoading](arkts-media-mediasourceloadingrequest-i.md#finishLoading) to notify the  player that the push is complete. |

