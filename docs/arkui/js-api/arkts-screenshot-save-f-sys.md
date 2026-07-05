# save

## save

```TypeScript
function save(options: ScreenshotOptions, callback: AsyncCallback<image.PixelMap>): void
```

获取屏幕截图，使用callback异步回调。

**Since:** 7

**Required permissions:** 

- API version7  to  21: ohos.permission.CAPTURE_SCREEN

- API version22 and later: ohos.permission.CAPTURE_SCREEN or ohos.permission.CUSTOM_SCREEN_RECORDING

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | ScreenshotOptions | Yes | 要截取的图像信息。当指定截取屏幕为虚拟屏时，截取图像为白屏。 |
| callback | AsyncCallback&lt;image.PixelMap> | Yes | 回调函数。返回一个PixelMap对象，其大小为指定的imageSize大小，若未指定默认为displayId所在逻辑屏的大小。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed.  The application does not have the permission required to call the API. |
| 202 | Permission verification failed. A non-system application calls a system  API. [since 11] |
| 1400001 | Invalid display or screen. [since 11] |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { image } from '@kit.ImageKit';

let screenshotOptions: screenshot.ScreenshotOptions = {
  screenRect: {
    left: 200,
    top: 100,
    width: 200,
    height: 200 },
  imageSize: {
    width: 300,
    height: 300 },
  rotation: 0,
  displayId: 0,
  isNotificationNeeded: true,
  isCaptureFullOfScreen: true
};
// Call the save method to obtain the screenshot.
screenshot.save(screenshotOptions, (err: BusinessError, pixelMap: image.PixelMap) => {
  if (err) {
    console.error(`Failed to save screenshot. Code: ${err.code}, message : ${err.message}`);
    return;
  }
  console.info(`Succeeded in saving screenshot. Pixel bytes number: ${pixelMap.getPixelBytesNumber()}`);
  pixelMap.release(); // Release the memory in time after the PixelMap is used.
});

```

## save

```TypeScript
function save(callback: AsyncCallback<image.PixelMap>): void
```

获取屏幕截图，使用callback异步回调。

**Since:** 7

**Required permissions:** 

- API version7  to  21: ohos.permission.CAPTURE_SCREEN

- API version22 and later: ohos.permission.CAPTURE_SCREEN or ohos.permission.CUSTOM_SCREEN_RECORDING

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;image.PixelMap> | Yes | 回调函数。返回一个PixelMap对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed. The application does not have the permission  required to call the API. |
| 202 | Permission verification failed. A non-system application calls a system API. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { image } from '@kit.ImageKit';

// Call the save method to obtain the screenshot.
screenshot.save((err: BusinessError, pixelMap: image.PixelMap) => {
  if (err) {
    console.error(`Failed to save screenshot. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info(`Succeeded in saving screenshot. Pixel bytes number: ${pixelMap.getPixelBytesNumber()}`);
  pixelMap.release(); // Release the memory in time after the PixelMap is used.
});

```

## save

```TypeScript
function save(options?: ScreenshotOptions): Promise<image.PixelMap>
```

获取屏幕截图，使用Promise异步回调。

**Since:** 7

**Required permissions:** 

- API version7  to  21: ohos.permission.CAPTURE_SCREEN

- API version22 and later: ohos.permission.CAPTURE_SCREEN or ohos.permission.CUSTOM_SCREEN_RECORDING

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | ScreenshotOptions | No | 要截取的图像信息。当指定截取屏幕为虚拟屏时，截取图像为白屏。 [since 7 - 21] |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;image.PixelMap> | Promise used to return a PixelMap object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed.  The application does not have the permission required to call the API. |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 1400001 | Invalid display or screen. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { image } from '@kit.ImageKit';

let screenshotOptions: screenshot.ScreenshotOptions = {
  screenRect: {
    left: 200,
    top: 100,
    width: 200,
    height: 200 },
  imageSize: {
    width: 300,
    height: 300 },
  rotation: 0,
  displayId: 0,
  isNotificationNeeded: true,
  isCaptureFullOfScreen: true
};
try {
  let promise = screenshot.save(screenshotOptions);
  promise.then((pixelMap: image.PixelMap) => {
    let pixelNumber = pixelMap.getPixelBytesNumber();
    console.info(`Succeeded in saving screenshot. Pixel bytes number: ${pixelNumber}`);
    pixelMap.release(); // Release the memory in time after the PixelMap is used.
  }).catch((err: BusinessError) => {
    console.error(`Failed to save screenshot. Code: ${err.code}, message: ${err.message}`);
  });
} catch (exception) {
  console.error(`Failed to save screenshot. Code: ${exception.code}, message: ${exception.message}`);
}

```

