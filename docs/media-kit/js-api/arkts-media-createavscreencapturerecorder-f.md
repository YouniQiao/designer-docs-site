# createAVScreenCaptureRecorder

## createAVScreenCaptureRecorder

```TypeScript
function createAVScreenCaptureRecorder(): Promise<AVScreenCaptureRecorder>
```

创建屏幕录制实例，使用Promise异步回调。

**Since:** 12

**System capability:** SystemCapability.Multimedia.Media.AVScreenCapture

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;AVScreenCaptureRecorder> | Promise对象，返回AVScreenCaptureRecorder实例，失败时返回null。可用于进行屏幕录制。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 5400101 | No memory. Return by promise. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let avScreenCaptureRecorder: media.AVScreenCaptureRecorder;
media.createAVScreenCaptureRecorder().then((captureRecorder: media.AVScreenCaptureRecorder) => {
  if (captureRecorder) {
    avScreenCaptureRecorder = captureRecorder;
    console.info('Succeeded in createAVScreenCaptureRecorder');
  } else {
    console.error('Failed to createAVScreenCaptureRecorder');
  }
}).catch((error: BusinessError) => {
  console.error(`createAVScreenCaptureRecorder catchCallback, error message:${error.message}`);
});

```

