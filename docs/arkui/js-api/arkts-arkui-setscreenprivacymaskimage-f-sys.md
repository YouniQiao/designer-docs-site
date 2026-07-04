# setScreenPrivacyMaskImage (System API)

## Modules to Import

```TypeScript
import { screen } from '@ohos.screen';
```

## setScreenPrivacyMaskImage

```TypeScript
function setScreenPrivacyMaskImage(screenId: number, image?: image.PixelMap): Promise<void>
```

Sets a privacy mask image for the screen. This API uses a promise to return the result.

**Since:** 19

**System capability:** SystemCapability.Window.SessionManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| screenId | number | Yes | Screen ID. The value must be a positive integer. |
| image | image.PixelMap | No | Privacy mask image. If no value is passed, the default privacy mask image isused. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed. A non-system application calls a system API. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.2. Incorrect parameter types. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported.Failed to call the API due to limited device capabilities. |
| [1400001](../errorcode-display.md#1400001-invalid-display-or-screen) | Invalid display or screen. |
| [1400003](../errorcode-display.md#1400003-abnormal-display-manager-service) | This display manager service works abnormally. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { image } from '@kit.ImageKit';

const color: ArrayBuffer = new ArrayBuffer(96); // 96 is the size of the pixel buffer to create. The value is calculated as follows: height * width *4.
let options: image.InitializationOptions = { editable: true, pixelFormat: image.PixelMapFormat.RGBA_8888, size: { height: 4, width: 6 } }
image.createPixelMap(color, options).then((pixelMap: image.PixelMap) => {
  console.info('Succeeded in creating pixelmap.');
  // Obtain the screen ID using getAllScreens().
  let screenId: number = 1; // Screen ID.
  // Set a privacy mask image for the screen.
  screen.setScreenPrivacyMaskImage(screenId, pixelMap).then(() => {
    console.info('Succeeded in setting the privacy mask image for the screen.');
  }).catch((err: BusinessError) => {
    console.error(`Failed to set the privacy mask image for the screen. Code: ${err.code}, message: ${err.message}`);
  });
}).catch((error: BusinessError) => {
  console.error(`Failed to create pixelmap. Code: ${error.code}, message: ${error.message}`);
});

```

