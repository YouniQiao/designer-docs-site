# createAVPlayer

## createAVPlayer

```TypeScript
function createAVPlayer(callback: AsyncCallback<AVPlayer>): void
```

创建音视频播放实例。使用callback异步回调。 > **说明：** > > - 推荐单个应用创建的音视频播放实例（即音频、视频、音视频三类相加）不超过16个。<!--Del--> > > - 可创建的音视频播放实例数量依赖于设备芯片的支持情况，如芯片支持创建的数量少于上述情况，请以芯片规格为准。如RK3568推荐单个应用创建6个以内的音视频播放实例。<!--DelEnd--> > > - 应用需要按照实际业务需求合理使用AVPlayer对象，按需创建并及时释放，避免持有过多AVPlayer实例导致内存消耗过大，否则在一定情况下可能导致系统终止应用。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Media.AVPlayer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;AVPlayer> | Yes | 回调函数。异步返回AVPlayer实例，失败时返回null。可用于音视频播放。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 5400101 | No memory. Return by callback. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let avPlayer: media.AVPlayer;
media.createAVPlayer((error: BusinessError, video: media.AVPlayer) => {
  if (video) {
    avPlayer = video;
    console.info('Succeeded in creating AVPlayer');
  } else {
    console.error(`Failed to create AVPlayer, error message:${error.message}`);
  }
});

```

## createAVPlayer

```TypeScript
function createAVPlayer(): Promise<AVPlayer>
```

异步方式创建音视频播放实例。使用Promise异步回调。 > **说明：** > > - 推荐单个应用创建的音视频播放实例（即音频、视频、音视频三类相加）不超过16个。<!--Del--> > > - 可创建的音视频播放实例数量依赖于设备芯片的支持情况，如芯片支持创建的数量少于上述情况，请以芯片规格为准。如RK3568推荐单个应用创建6个以内的音视频播放实例。<!--DelEnd--> > > - 应用需要按照实际业务需求合理使用AVPlayer对象，按需创建并及时释放，避免持有过多AVPlayer实例导致内存消耗过大，导致系统终止应用。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Media.AVPlayer

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;AVPlayer> | Promise对象。成功时异步返回AVPlayer实例，可用于音视频播放。失败时返回null。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 5400101 | No memory. Return by promise. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let avPlayer: media.AVPlayer;
media.createAVPlayer().then((video: media.AVPlayer) => {
  if (video) {
    avPlayer = video;
    console.info('Succeeded in creating AVPlayer');
  } else {
    console.error('Failed to create AVPlayer');
  }
}).catch((error: BusinessError) => {
  console.error(`Failed to create AVPlayer, error message:${error.message}`);
});

```

