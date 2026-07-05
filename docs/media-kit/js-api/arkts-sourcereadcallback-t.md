# SourceReadCallback

```TypeScript
type SourceReadCallback = (uuid: long, requestedOffset: long, requestedLength: long) => void
```

由应用实现此回调函数，应用需记录读取请求，并在数据充足时通过对应的MediaSourceLoadingRequest对象的 [respondData](arkts-media-mediasourceloadingrequest-i.md#respondData) 方法推送数据。 > **注意：** > > 客户端在处理完请求后应立刻返回。

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Media.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uuid | long | Yes | 资源句柄的标识。 |
| requestedOffset | long | Yes | 当前媒体数据相对于资源起始位置的偏移量。 |
| requestedLength | long | Yes | 当前请求的长度。值为-1时，表示到达资源末尾，此时推送完成后需通过  [finishLoading](arkts-media-mediasourceloadingrequest-i.md#finishLoading)方法通知播放器推送结束。 |

