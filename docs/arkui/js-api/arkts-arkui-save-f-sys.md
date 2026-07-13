# save (System API)

## Modules to Import

```TypeScript
import { screenshot } from '@kit.ArkUI';
```

## save

```TypeScript
function save(options: ScreenshotOptions, callback: AsyncCallback<image.PixelMap>): void
```

Obtains a screenshot. This API uses an asynchronous callback to return the result.

**Since:** 7

**Required permissions:** 
- API version 22+: ohos.permission.CAPTURE_SCREEN or ohos.permission.CUSTOM_SCREEN_RECORDING
- API version 7 - 21: ohos.permission.CAPTURE_SCREEN

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | ScreenshotOptions | Yes | Information about the snapshot. If the screen to capture is a virtual screen, the snapshot is a white screen. |
| callback | AsyncCallback&lt;image.PixelMap&gt; | Yes | Callback used to return a PixelMap object. The size of thePixelMap object is **imageSize**. If **imageSize** is not specified, the size of the logical screen associatedwith the specified display ID is used. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed.The application does not have the permission required to call the API. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed. A non-system application calls a systemAPI.<br>**Applicable version:** 11 and later |
| [1400001](../errorcode-display.md#1400001-invalid-display-or-screen) | Invalid display or screen.<br>**Applicable version:** 11 and later |

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

Obtains a screenshot. This API uses an asynchronous callback to return the result.

**Since:** 7

**Required permissions:** 
- API version 22+: ohos.permission.CAPTURE_SCREEN or ohos.permission.CUSTOM_SCREEN_RECORDING
- API version 7 - 21: ohos.permission.CAPTURE_SCREEN

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;image.PixelMap&gt; | Yes | Callback used to return a PixelMap object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed. The application does not have the permissionrequired to call the API. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed. A non-system application calls a system API. |

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

Obtains a screenshot. This API uses a promise to return the result.

**Since:** 7

**Required permissions:** 
- API version 22+: ohos.permission.CAPTURE_SCREEN or ohos.permission.CUSTOM_SCREEN_RECORDING
- API version 7 - 21: ohos.permission.CAPTURE_SCREEN

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | ScreenshotOptions | No | Information about the snapshot. If the screen to capture is a virtualscreen, the snapshot is a white screen.<br>**Since:** 22 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;image.PixelMap&gt; | Promise used to return a PixelMap object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed.The application does not have the permission required to call the API. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed. A non-system application calls a system API. |
| [1400001](../errorcode-display.md#1400001-invalid-display-or-screen) | Invalid display or screen. |

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

