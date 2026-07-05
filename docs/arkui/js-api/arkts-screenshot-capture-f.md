# capture

## capture

```TypeScript
function capture(options?: CaptureOption): Promise<image.PixelMap>
```

获取屏幕全屏截图，使用Promise异步回调。 此接口可以通过设置不同的displayId截取不同屏幕的截图，且只能截取全屏；[pick]screenshot.pick接口可实现区域截屏。

**Since:** 14

**Required permissions:** 

- API version14  to  21: ohos.permission.CUSTOM_SCREEN_CAPTURE

- API version22 and later: ohos.permission.CUSTOM_SCREEN_CAPTURE or ohos.permission.CUSTOM_SCREEN_RECORDING

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | CaptureOption | No | 截取图像的相关信息。此参数不填时，默认截取displayId为0的屏幕截图。 [since 14 - 21] |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;image.PixelMap> | Promise used to return a PixelMap object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed.  The application does not have the permission required to call the API. |
| 401 | Parameter error. Possible causes:  1.Incorrect parameter types.  2.Parameter verification failed. |
| 801 | Capability not supported on this device. |
| 1400003 | This display manager service works abnormally. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { image } from '@kit.ImageKit';

// Set screenshot parameters and specify the screen whose displayId is 0.
let captureOption: screenshot.CaptureOption = {
  "displayId": 0
};
try {
  // Call the capture API to obtain a full-screen screenshot.
  let promise = screenshot.capture(captureOption);
  promise.then((pixelMap: image.PixelMap) => {
    console.info('Succeeded in saving screenshot. Pixel bytes number: ' + pixelMap.getPixelBytesNumber());
    pixelMap.release(); // Release the memory in time after the PixelMap is used.
  }).catch((err: BusinessError) => {
    console.error(`Failed to save screenshot. Code: ${err.code}, message: ${err.message}`);
  });
} catch (exception) {
  console.error(`Failed to save screenshot. Code: ${exception.code}, message: ${exception.message}`);
}

```

