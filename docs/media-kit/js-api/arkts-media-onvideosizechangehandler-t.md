# OnVideoSizeChangeHandler

```TypeScript
type OnVideoSizeChangeHandler = (width: int, height: int) => void
```

视频播放宽高变化事件回调方法。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Media.AVPlayer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| width | int | Yes | 视频宽度，单位为像素（px）。 |
| height | int | Yes | 视频高度，单位为像素（px）。 |

