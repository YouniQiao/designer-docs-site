# saveHdrPicture

## saveHdrPicture

```TypeScript
function saveHdrPicture(options?: HdrScreenshotOptions): Promise<Array<image.PixelMap>>
```

获取屏幕截图，使用Promise异步回调。SDR为标准动态范围图，HDR为高动态范围图。 - 当物理屏存在HDR资源（包括HDR资源被遮挡）时，无论HDR是否开启，该接口返回一个包含SDR和HDR的PixelMap数组。 - 当物理屏不存在HDR资源时，与[save]screenshot.save(options: ScreenshotOptions, callback: AsyncCallback<image.PixelMap>) 接口返回一个SDR的PixelMap不同，该接口返回包含一个SDR的PixelMap数组。同时该接口不具备 [save]screenshot.save(options: ScreenshotOptions, callback: AsyncCallback<image.PixelMap>)接口的裁剪、拉伸、旋转功能。

**Since:** 20

**Required permissions:** 

- API version20  to  21: ohos.permission.CAPTURE_SCREEN

- API version22 and later: ohos.permission.CAPTURE_SCREEN or ohos.permission.CUSTOM_SCREEN_RECORDING

**System capability:** SystemCapability.Window.SessionManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | HdrScreenshotOptions | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;image.PixelMap>> | Promise used to return an array of PixelMap objects. If the screen  contains HDR resources (even if they are partially obscured), the array contains two PixelMaps: the first is an  SDR PixelMap, and the second is an HDR PixelMap. If there are no HDR resources, the array contains a single SDR  PixelMap. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed. The application does not have the permission  required to call the API. |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 801 | Capability not supported. Failed to call the API due to limited device  capabilities. |
| 1400001 | Invalid display or screen. |
| 1400003 | This display manager service works abnormally. |
| 1400004 | Parameter error. Possible cause: 1.Invalid parameter range. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { image } from '@kit.ImageKit';

let hdrScreenshotOptions: screenshot.HdrScreenshotOptions = {
  displayId: 0,
  isNotificationNeeded: true,
  isCaptureFullOfScreen: true,
  displayIntent: screenshot.DisplayIntentType.CANONICAL
};
try {
  let promise = screenshot.saveHdrPicture(hdrScreenshotOptions);
  promise.then((pixelMapArray: Array<image.PixelMap>) => {
    for (let i = 0; i < pixelMapArray.length; i++) {
      const pixelMap = pixelMapArray[i];
      console.info(`succeeded in saving screenshot ${i}. Pixel bytes number: ${pixelMap.getPixelBytesNumber()}`);
      pixelMap.release();
    }
  }).catch((err: BusinessError) => {
    console.error(`Failed to save SDR and HDR screenshot. Code: ${err.code}, message: ${err.message}`);
  });
} catch (exception) {
  console.error(`Failed to save SDR and HDR screenshot. Code: ${exception.code}, message: ${exception.message}`);
}

```

