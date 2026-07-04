# createPixelMapSync

## Modules to Import

```TypeScript
import { sendableImage } from '@ohos.multimedia.sendableImage';
```

## createPixelMapSync

```TypeScript
function createPixelMapSync(colors: ArrayBuffer, options: image.InitializationOptions): PixelMap
```

Create PixelMap by data buffer.

**Since:** 12

**System capability:** SystemCapability.Multimedia.Image.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| colors | ArrayBuffer | Yes | The image color buffer. |
| options | image.InitializationOptions | Yes | Initialization options for PixelMap. |

**Return value:**

| Type | Description |
| --- | --- |
| PixelMap | Returns the instance if the operation is successful;Otherwise, return undefined. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.2.Incorrect parameter types. 3.Parameter verification failed. |

**Example**

```TypeScript
import { sendableImage } from '@kit.ImageKit';
import { image } from '@kit.ImageKit';
import { BusinessError } from '@kit.BasicServicesKit';

async function Demo() {
    const color: ArrayBuffer = new ArrayBuffer(96); // 96 is the size of the pixel buffer to create. The value is calculated as follows: height * width *4.
    let opts: image.InitializationOptions = { editable: true, pixelFormat: 3, size: { height: 4, width: 6 } }
    let pixelMap : sendableImage.PixelMap = sendableImage.createPixelMapSync(color, opts);
    return pixelMap;
}

```

