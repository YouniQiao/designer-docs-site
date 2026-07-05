# setWaterMarkImage

## setWaterMarkImage

```TypeScript
function setWaterMarkImage(pixelMap: image.PixelMap, enable: boolean): Promise<void>
```

设置屏幕水印图片显示状态。使用Promise异步回调。

**Since:** 10

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| pixelMap | image.PixelMap | Yes | 水印图片。可通过  [createPixelMap](../../apis-image-kit/arkts-apis/arkts-image-createpixelmap-f.md#createPixelMap-2)  接口获取。 |
| enable | boolean | Yes | 设置是否显示水印图片。true显示水印图片；false表示不显示水印图片。设置显示水印后需主动设置为false才能关闭水印图片显示。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | 无返回结果的Promise对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 401 | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |
| 1300003 | This window manager service works abnormally. |

**Example**

```TypeScript
import { image } from '@kit.ImageKit';
import { BusinessError } from '@kit.BasicServicesKit';

let enable: boolean = true;
let color: ArrayBuffer = new ArrayBuffer(40000);
let initializationOptions: image.InitializationOptions = {
  size: {
    height: 100,
    width: 100
  }
};
image.createPixelMap(color, initializationOptions).then((pixelMap: image.PixelMap) => {
  console.info('Succeeded in creating pixelmap.');
  try {
    let promise = window.setWaterMarkImage(pixelMap, enable);
    promise.then(() => {
      console.info('Succeeded in showing watermark image.');
    }).catch((err: BusinessError) => {
      console.error(`Failed to show watermark image. Cause code: ${err.code}, message: ${err.message}`);
    });
  } catch (exception) {
    console.error(`Failed to show watermark image. Cause code: ${exception.code}, message: ${exception.message}`);
  }
}).catch((err: BusinessError) => {
  console.error(`Failed to create PixelMap. Cause code: ${err.code}, message: ${err.message}`);
});

```

## setWaterMarkImage

```TypeScript
function setWaterMarkImage(pixelMap: image.PixelMap, enable: boolean, priority: int): Promise<void>
```

设置屏幕水印图片的显示状态，并设定水印的优先级。使用Promise异步回调。当priority等于0时，当前接口与 [setWaterMarkImage]window.setWaterMarkImage(pixelMap: image.PixelMap, enable: boolean, callback: AsyncCallback<void>) 等价。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| pixelMap | image.PixelMap | Yes | 水印图片。可通过  [createPixelMap](../../apis-image-kit/arkts-apis/arkts-image-createpixelmap-f.md#createPixelMap-2)  接口获取。 |
| enable | boolean | Yes | 设置是否显示水印图片。true表示显示水印图片；false表示不显示水印图片。设置显示水印后需主动设置为false才能关闭水印图片显示。 |
| priority | int | Yes | 水印设置优先级。数值越小表示优先级越高，需大于等于0，小于0时返回1300016错误码。设置水印时，如果传入的优先级比上一次设置的低，则本次设置不会生效。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | - Promise对象，无返回结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 1300003 | This window manager service works abnormally. |
| 1300016 | Parameter error. Possible cause: 1. Invalid parameter range. |

**Example**

```TypeScript
import { image } from '@kit.ImageKit';
import { BusinessError } from '@kit.BasicServicesKit';

let enable: boolean = true;
let color: ArrayBuffer = new ArrayBuffer(40000);
let initializationOptions: image.InitializationOptions = {
  size: {
    height: 100,
    width: 100
  }
};
image.createPixelMap(color, initializationOptions).then((pixelMap: image.PixelMap) => {
  console.info('Succeeded in creating pixelmap.');
  try {
    window.setWaterMarkImage(pixelMap, enable, 0).then(() => {
      console.info('Succeeded in showing watermark image.');
    }).catch((err: BusinessError) => {
      console.error(`Failed to show watermark image. Cause code: ${err.code}, message: ${err.message}`);
    });
  } catch (exception) {
    console.error(`Failed to show watermark image. Cause code: ${exception.code}, message: ${exception.message}`);
  }
}).catch((err: BusinessError) => {
  console.error(`Failed to create PixelMap. Cause code: ${err.code}, message: ${err.message}`);
});

```

## setWaterMarkImage

```TypeScript
function setWaterMarkImage(pixelMap: image.PixelMap, enable: boolean, callback: AsyncCallback<void>): void
```

设置屏幕水印图片显示状态。使用callback异步回调。

**Since:** 10

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| pixelMap | image.PixelMap | Yes | 水印图片。可通过  [createPixelMap](../../apis-image-kit/arkts-apis/arkts-image-createpixelmap-f.md#createPixelMap-2)  接口获取。 |
| enable | boolean | Yes | 设置是否显示水印图片。true显示水印图片；false表示不显示水印图片。设置显示水印后需主动设置为false才能关闭水印图片显示。 |
| callback | AsyncCallback&lt;void> | Yes | 回调信息。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 401 | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |
| 1300003 | This window manager service works abnormally. |

**Example**

```TypeScript
import { image } from '@kit.ImageKit';
import { BusinessError } from '@kit.BasicServicesKit';

let enable: boolean = true;
let color: ArrayBuffer = new ArrayBuffer(40000);
let initializationOptions: image.InitializationOptions = {
  size: {
    height: 100,
    width: 100
  }
};
image.createPixelMap(color, initializationOptions).then((pixelMap: image.PixelMap) => {
  console.info('Succeeded in creating pixelmap.');
  try {
    window.setWaterMarkImage(pixelMap, enable, (err: BusinessError) => {
      const errCode: number = err.code;
      if (errCode) {
        console.error(`Failed to show watermark image. Cause code: ${err.code}, message: ${err.message}`);
        return;
      }
      console.info('Succeeded in showing watermark image.');
    });
  } catch (exception) {
    console.error(`Failed to show watermark image. Cause code: ${exception.code}, message: ${exception.message}`);
  }
}).catch((err: BusinessError) => {
  console.error(`Failed to create PixelMap. Cause code: ${err.code}, message: ${err.message}`);
});

```

