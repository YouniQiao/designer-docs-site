# createAudioPlayer

## createAudioPlayer

```TypeScript
function createAudioPlayer(): AudioPlayer
```

同步方式创建音频播放实例。 > **说明：** > > 从API version 6开始支持，从API version 9开始废弃，建议使用 > [createAVPlayer]media.createAVPlayer(callback: AsyncCallback<AVPlayer>)替代。

**Since:** 6

**Deprecated since:** 9

**Substitute:** media.createAVPlayer(callback:

**System capability:** SystemCapability.Multimedia.Media.AudioPlayer

**Return value:**

| Type | Description |
| --- | --- |
| AudioPlayer | 返回AudioPlayer类实例，失败时返回null。可用于音频播放、暂停、停止等操作。 |

**Example**

```TypeScript
let audioPlayer: media.AudioPlayer = media.createAudioPlayer();

```

