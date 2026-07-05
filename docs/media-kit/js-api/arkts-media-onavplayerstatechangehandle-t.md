# OnAVPlayerStateChangeHandle

```TypeScript
type OnAVPlayerStateChangeHandle = (state: AVPlayerState, reason: StateChangeReason) => void
```

播放状态机切换事件回调方法。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Media.AVPlayer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| state | AVPlayerState | Yes | 当前播放状态。 |
| reason | StateChangeReason | Yes | 当前播放状态的切换原因。 |

