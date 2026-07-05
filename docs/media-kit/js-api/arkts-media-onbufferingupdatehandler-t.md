# OnBufferingUpdateHandler

```TypeScript
type OnBufferingUpdateHandler = (infoType: BufferingInfoType, value: int) => void
```

播放缓存事件回调方法。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Media.AVPlayer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| infoType | BufferingInfoType | Yes | 缓存时间类型。 |
| value | int | Yes | 缓存时间类型的值。 |

