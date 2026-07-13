# SourceReadCallback

```TypeScript
type SourceReadCallback = (uuid: number, requestedOffset: number, requestedLength: number) => void
```

This callback function is implemented by applications to handle resource read requests. When data is available,
applications should push it to the player using the
[respondData](arkts-media-mediasourceloadingrequest-i.md#responddata-1)
API of the corresponding MediaSourceLoadingRequest object.

> **NOTE**
>
> The client must return the handle immediately after processing the request.

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.Multimedia.Media.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uuid | long | Yes | ID for the resource handle. |
| requestedOffset | long | Yes | Offset of the current media data relative to the start of the resource. |
| requestedLength | long | Yes | Length of the current request. The value **-1** indicates reaching the end of theresource. After pushing the data, call[finishLoading](arkts-media-mediasourceloadingrequest-i.md#finishloading-1) to notify theplayer that the push is complete. |

