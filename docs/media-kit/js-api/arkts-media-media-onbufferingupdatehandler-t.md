# OnBufferingUpdateHandler

```TypeScript
type OnBufferingUpdateHandler = (infoType: BufferingInfoType, value: number) => void
```

Describes the callback invoked for the buffering update event.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-media-type OnBufferingUpdateHandler = (infoType: BufferingInfoType, value: int) => void--><!--Device-media-type OnBufferingUpdateHandler = (infoType: BufferingInfoType, value: int) => void-End-->

**System capability:** SystemCapability.Multimedia.Media.AVPlayer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| infoType | BufferingInfoType | Yes | Buffering information type. |
| value | int | Yes | Value of the buffering information type. |

