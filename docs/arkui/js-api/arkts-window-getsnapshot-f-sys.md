# getSnapshot

## getSnapshot

```TypeScript
function getSnapshot(windowId: int): Promise<image.PixelMap>
```

获取指定窗口相同尺寸截图，使用Promise异步回调。若当前窗口设置为隐私模式（可通过 [setWindowPrivacyMode](arkts-window-window-i.md#setWindowPrivacyMode) 接口设置），截图结果为白屏。

**Since:** 12

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| windowId | int | Yes | 窗口Id。可通过[getWindowProperties](@link @ohos.window:window.Window.getWindowProperties)  接口获取到相关窗口属性，其中属性id即对应为窗口ID。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;image.PixelMap> | - Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. 3.Parameter verification failed. |
| 1300002 | This window state is abnormal.  Possible cause: Internal task error. |
| 1300003 | This window manager service works abnormally. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { image } from '@kit.ImageKit';

try {
  // This is only an example. Use getWindowProperties to obtain the window ID.
  let windowId: number = 40;
  let promise = window.getSnapshot(windowId);
  promise.then((pixelMap: image.PixelMap) => {
    console.info('Succeeded in getting snapshot window. Pixel bytes number:' + pixelMap.getPixelBytesNumber());
    pixelMap.release();
  }).catch((err: BusinessError) =>{
    console.error(`Failed to get snapshot. Cause code: ${err.code}, message: ${err.message}`);
  });
} catch (exception) {
  console.error(`Failed to get snapshot. Cause code: ${exception.code}, message: ${exception.message}`);
}

```

