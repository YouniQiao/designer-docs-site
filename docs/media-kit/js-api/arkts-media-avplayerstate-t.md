# AVPlayerState

```TypeScript
type AVPlayerState = 'idle' | 'initialized' | 'prepared' | 'playing' | 'paused' | 'completed' | 'stopped' | 'released' | 'error'
```

[AVPlayer](arkts-multimedia-media.md#media)的状态机，可通过state属性主动获取当前状态，也可通过监听 [stateChange](arkts-media-avplayer-i.md#on) 事件上报当前状态，状态机之间的切换规则，可参考[音频播放开发指导](docroot://media/media/using-avplayer-for-playback.md)。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Media.AVPlayer

| Type | Description |
| --- | --- |
| 'idle' | The AVPlayer enters this state after  [createAVPlayer()]{ |
| 'initialized' | 资源初始化，在idle 状态设置 url9+ 或 fdSrc9+属性，AVPlayer会进入initialized状态，此时  可以配置窗口、音频等静态属性。 |
| 'prepared' | The AVPlayer enters this state when  [prepare()]{ |
| 'playing' | The AVPlayer enters this state when  [play()]{ |
| 'paused' | 暂停状态，在playing状态调用pause方法，AVPlayer会进入paused状态。 |
| 'completed' | The AVPlayer enters this state when a media asset finishes playing and loop playback  is not set (no loop = true). In this case, if  [play()]{ |
| 'stopped' | The AVPlayer enters this state when  [stop()]{ |
| 'released' | The AVPlayer enters this state when  [release()]{ |
| 'error' | The AVPlayer enters this state when an irreversible error occurs in the playback engine.  You can call [reset()]{ |

