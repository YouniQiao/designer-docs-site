# createAVTranscoder

## createAVTranscoder

```TypeScript
function createAVTranscoder(): Promise<AVTranscoder>
```

创建视频转码实例。使用Promise异步回调。 > **说明：** > > 可创建的视频转码实例不能超过2个。

**Since:** 12

**Atomic service API:** From API version 22 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Media.AVTranscoder

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;AVTranscoder> | Promise对象。异步返回AVTranscoder实例，失败时返回null。可用于视频转码。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 5400101 | No memory. Return by promise. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let avTranscoder: media.AVTranscoder | undefined = undefined;
media.createAVTranscoder().then((transcoder: media.AVTranscoder) => {
  if (transcoder) {
    avTranscoder = transcoder;
    console.info('Succeeded in creating AVTranscoder');
  } else {
    console.error('Failed to create AVTranscoder');
  }
}).catch((error: BusinessError) => {
  console.error(`Failed to create AVTranscoder, error message:${error.message}`);
});

```

