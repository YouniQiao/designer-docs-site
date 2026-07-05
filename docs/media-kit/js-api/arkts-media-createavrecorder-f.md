# createAVRecorder

## createAVRecorder

```TypeScript
function createAVRecorder(callback: AsyncCallback<AVRecorder>): void
```

创建音视频录制实例。使用callback异步回调。 > **说明：** > > 应用可创建多个音视频录制实例，但由于设备共用音频通路，一个设备仅能有一个实例进行音频录制。创建第二个实例录制音频时，将会因为音频通路冲突导致创建失败。

**Since:** 9

**System capability:** SystemCapability.Multimedia.Media.AVRecorder

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;AVRecorder> | Yes | 回调函数，返回AVRecorder实例，可用于录制音视频媒体。失败时返回null。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 5400101 | No memory. Return by callback. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
let avRecorder: media.AVRecorder;

media.createAVRecorder((error: BusinessError, recorder: media.AVRecorder) => {
  if (recorder) {
    avRecorder = recorder;
    console.info('Succeeded in creating AVRecorder');
  } else {
    console.error(`Failed to create AVRecorder, error message:${error.message}`);
  }
});

```

## createAVRecorder

```TypeScript
function createAVRecorder(): Promise<AVRecorder>
```

创建音视频录制实例。使用Promise异步回调。 > **说明：** > > 应用可创建多个音视频录制实例，但由于设备共用音频通路，一个设备仅能有一个实例进行音频录制。创建第二个实例录制音频时，将会因为音频通路冲突导致创建失败。

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Media.AVRecorder

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;AVRecorder> | Promise对象，返回AVRecorder实例，可用于录制音视频媒体。失败时返回null。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 5400101 | No memory. Return by promise. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
let avRecorder: media.AVRecorder;
media.createAVRecorder().then((recorder: media.AVRecorder) => {
  if (recorder) {
    avRecorder = recorder;
    console.info('Succeeded in creating AVRecorder');
  } else {
    console.error('Failed to create AVRecorder');
  }
}).catch((error: BusinessError) => {
  console.error(`Failed to create AVRecorder, error message:${error.message}`);
});

```

