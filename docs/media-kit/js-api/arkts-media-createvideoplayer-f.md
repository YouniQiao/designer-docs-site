# createVideoPlayer

## createVideoPlayer

```TypeScript
function createVideoPlayer(callback: AsyncCallback<VideoPlayer>): void
```

异步方式创建视频播放实例，使用callback异步回调。 > **说明：** > > 从API version 8开始支持，从API version 9开始废弃，建议使用 > [createAVPlayer]media.createAVPlayer(callback: AsyncCallback<AVPlayer>)替代。

**Since:** 8

**Deprecated since:** 9

**Substitute:** media.createAVPlayer(callback:

**System capability:** SystemCapability.Multimedia.Media.VideoPlayer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;VideoPlayer> | Yes | 回调函数。创建VideoPlayer实例成功时，err为undefined，data为获取到的VideoPlayer实例，否则为错误  对象。 |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let videoPlayer: media.VideoPlayer;
media.createVideoPlayer((error: BusinessError, video: media.VideoPlayer) => {
  if (video) {
    videoPlayer = video;
    console.info('Succeeded in creating VideoPlayer');
  } else {
    console.error(`Failed to create VideoPlayer, error:${error}`);
  }
});

```

## createVideoPlayer

```TypeScript
function createVideoPlayer(): Promise<VideoPlayer>
```

异步方式创建视频播放实例，通过Promise获取返回值。 > **说明：** > > 从API version 8开始支持，从API version 9开始废弃，建议使用[createAVPlayer]media.createAVPlayer()替代。

**Since:** 8

**Deprecated since:** 9

**Substitute:** media.createAVPlayer()

**System capability:** SystemCapability.Multimedia.Media.VideoPlayer

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;VideoPlayer> | Promise对象。异步返回VideoPlayer实例，失败时返回null。可用于管理和播放视频媒体。 |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let videoPlayer: media.VideoPlayer;
media.createVideoPlayer().then((video: media.VideoPlayer) => {
  if (video) {
    videoPlayer = video;
    console.info('Succeeded in creating VideoPlayer');
  } else {
    console.error('Failed to create VideoPlayer');
  }
}).catch((error: BusinessError) => {
  console.error(`Failed to create VideoPlayer, error:${error}`);
});

```

