# VideoPlayState

```TypeScript
type VideoPlayState = 'idle' | 'prepared' | 'playing' | 'paused' | 'stopped' | 'error'
```

视频播放的状态机，可通过state属性获取当前状态。 > **说明：** > > 从API version 8开始支持，从API version 9开始废弃，建议使用[AVPlayerState](arkts-media-avplayerstate-t.md#AVPlayerState)替代。

**Since:** 8

**Deprecated since:** 9

**Substitute:** media.AVPlayerState

**System capability:** SystemCapability.Multimedia.Media.VideoPlayer

| Type | Description |
| --- | --- |
| 'idle' | 视频播放空闲。 |
| 'prepared' | 视频播放准备。 |
| 'playing' | 视频正在播放。 |
| 'paused' | 视频暂停播放。 |
| 'stopped' | 视频播放停止。 |
| 'error' | 错误状态。 |

