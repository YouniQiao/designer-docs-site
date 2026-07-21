# AVPlayerState

```TypeScript
type AVPlayerState = 'idle' | 'initialized' | 'prepared' | 'playing' | 'paused' | 'completed' | 'stopped' | 'released' | 'error'
```

Describes the state of the [AVPlayer](arkts-multimedia-media.md). Your application can proactively obtain the AVPlayer state through the **state** property or obtain the reported AVPlayer state by subscribing to the [stateChange](@ohos.multimedia.media:media.AVPlayer.on(type: 'stateChange', callback: OnAVPlayerStateChangeHandle))event. For details about the rules for state transition, see [Audio Playback](docroot://media/media/using-avplayer-for-playback.md).

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-media-type AVPlayerState = 'idle' | 'initialized' | 'prepared' | 'playing' | 'paused' | 'completed' | 'stopped' | 'released' | 'error'--><!--Device-media-type AVPlayerState = 'idle' | 'initialized' | 'prepared' | 'playing' | 'paused' | 'completed' | 'stopped' | 'released' | 'error'-End-->

**System capability:** SystemCapability.Multimedia.Media.AVPlayer

| Type | Description |
| --- | --- |
| 'idle' | The AVPlayer enters this state after [createAVPlayer()]{ |
| 'initialized' | The AVPlayer enters this state after **url<sup>9+</sup>** or **fdSrc<sup>9+</sup>** property is set in the idle state. In this case, you can configure static properties such as the window and audio. |
| 'prepared' | The AVPlayer enters this state when [prepare()]{ |
| 'playing' | The AVPlayer enters this state when [play()]{ |
| 'paused' | The AVPlayer enters this state when **pause()** is called in the playing state. |
| 'completed' | The AVPlayer enters this state when a media asset finishes playing and loop playback is not set (no **loop = true**). In this case, if [play()]{ |
| 'stopped' | The AVPlayer enters this state when [stop()]{ |
| 'released' | The AVPlayer enters this state when [release()]{ |
| 'error' | The AVPlayer enters this state when an irreversible error occurs in the playback engine. You can call [reset()]{ |

