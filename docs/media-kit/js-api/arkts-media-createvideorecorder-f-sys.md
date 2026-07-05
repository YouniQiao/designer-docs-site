# createVideoRecorder

## createVideoRecorder

```TypeScript
function createVideoRecorder(callback: AsyncCallback<VideoRecorder>): void
```

The maintenance of this interface has been stopped since version api 9. Please use AVRecorder Creates an VideoRecorder instance.

**Since:** 9

**System capability:** SystemCapability.Multimedia.Media.VideoRecorder

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;VideoRecorder> | Yes | used to return AudioPlayer instance if the operation is  successful; returns null otherwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 5400101 | No memory. Return by callback. |
| 202 | Not System App. [since 12] |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let videoRecorder: media.VideoRecorder;
media.createVideoRecorder((error: BusinessError, video: media.VideoRecorder) => {
  if (video != null) {
    videoRecorder = video;
    console.info('video createVideoRecorder success');
  } else {
    console.error(`video createVideoRecorder fail, error message:${error.message}`);
  }
});

```

## createVideoRecorder

```TypeScript
function createVideoRecorder(): Promise<VideoRecorder>
```

The maintenance of this interface has been stopped since version api 9. Please use AVRecorder Creates an VideoRecorder instance.

**Since:** 9

**System capability:** SystemCapability.Multimedia.Media.VideoRecorder

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;VideoRecorder> | A Promise instance used to return VideoRecorder instance if the operation is  successful; returns null otherwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 5400101 | No memory. Return by promise. |
| 202 | Not System App. [since 12] |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let videoRecorder: media.VideoRecorder;
media.createVideoRecorder().then((video: media.VideoRecorder) => {
  if (video != null) {
    videoRecorder = video;
    console.info('video createVideoRecorder success');
  } else {
    console.error('video createVideoRecorder fail');
  }
}).catch((error: BusinessError) => {
  console.error(`video catchCallback, error message:${error.message}`);
});

```

