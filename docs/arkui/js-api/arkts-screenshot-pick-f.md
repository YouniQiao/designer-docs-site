# pick

## pick

```TypeScript
function pick(): Promise<PickInfo>
```

获取屏幕截图，当前仅支持获取displayId为0的屏幕截图（如果需要对扩展屏截图，可以通过[capture]screenshot.capture接口实现），使用Promise异步回调。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;PickInfo> | Promise对象。返回一个PickInfo对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 801 | Capability not supported on this device. |
| 1400003 | This display manager service works abnormally. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
  // Call the pick API to obtain the screenshot.
  let promise = screenshot.pick();
  promise.then((pickInfo: screenshot.PickInfo) => {
    console.info(`pick Pixel bytes number: ${pickInfo.pixelMap.getPixelBytesNumber()}`);
    console.info(`pick Rect: ${pickInfo.pickRect}`);
    pickInfo.pixelMap.release(); // Release the memory in time after the PixelMap is no longer needed.
  }).catch((err: BusinessError) => {
    console.error(`Failed to pick. Code: ${err.code}, message: ${err.message}`);
  });
} catch (exception) {
  console.error(`Failed to pick. Code: ${exception.code}, message: ${exception.message}`);
}

```

