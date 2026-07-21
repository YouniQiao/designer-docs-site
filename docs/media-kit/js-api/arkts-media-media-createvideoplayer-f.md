# createVideoPlayer

## Modules to Import

```TypeScript
import { media } from '@kit.MediaKit';
```

<a id="createvideoplayer"></a>
## createVideoPlayer

```TypeScript
function createVideoPlayer(callback: AsyncCallback<VideoPlayer>): void
```

Creates a **VideoPlayer** instance. This API uses an asynchronous callback to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [createAVPlayer(callback:](arkts-media-media-createavplayer-f.md#createavplayer-1)

<!--Device-media-function createVideoPlayer(callback: AsyncCallback<VideoPlayer>): void--><!--Device-media-function createVideoPlayer(callback: AsyncCallback<VideoPlayer>): void-End-->

**System capability:** SystemCapability.Multimedia.Media.VideoPlayer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;VideoPlayer&gt; | Yes | Callback used to return the result. If the operation is successful, **err** is **undefined** and **data** is the VideoPlayer instance created; otherwise, **err** is an error object. |

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


<a id="createvideoplayer-1"></a>
## createVideoPlayer

```TypeScript
function createVideoPlayer(): Promise<VideoPlayer>
```

Creates a VideoPlayer instance. This API uses a promise to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [createAVPlayer()](arkts-media-media-createavplayer-f.md#createavplayer-1)

<!--Device-media-function createVideoPlayer(): Promise<VideoPlayer>--><!--Device-media-function createVideoPlayer(): Promise<VideoPlayer>-End-->

**System capability:** SystemCapability.Multimedia.Media.VideoPlayer

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;VideoPlayer&gt; | Promise used to return the result. If the operation is successful, a VideoPlayer instance is returned; otherwise, **null** is returned. The instance can be used to manage and play video. |

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

