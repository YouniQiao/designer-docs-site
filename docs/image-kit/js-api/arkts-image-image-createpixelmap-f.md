# createPixelMap

## Modules to Import

```TypeScript
import { image } from '@kit.ImageKit';
```

## createPixelMap

```TypeScript
function createPixelMap(colors: ArrayBuffer, options: InitializationOptions, callback: AsyncCallback<PixelMap>): void
```

Create pixelmap by data buffer.

Starting from API 26.0.0, it is recommended to use {@link createPixelMapFromPixels} instead for better exception handling capabilities.

**Since:** 10

<!--Device-image-function createPixelMap(colors: ArrayBuffer, options: InitializationOptions, callback: AsyncCallback<PixelMap>): void--><!--Device-image-function createPixelMap(colors: ArrayBuffer, options: InitializationOptions, callback: AsyncCallback<PixelMap>): void-End-->

**System capability:** SystemCapability.Multimedia.Image.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| colors | [ArrayBuffer](../../apis-arkts/arkts-apis/arkts-arkts-collections-arraybuffer-c.md) | Yes | The image color buffer. |
| options | [InitializationOptions](arkts-image-image-initializationoptions-i.md) | Yes | Initialization options for pixelmap. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<PixelMap> | Yes | Callback used to return the PixelMap object. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

async function CreatePixelMap() {
  const color: ArrayBuffer = new ArrayBuffer(96); // 96 is the size of the pixel buffer to create. The value is calculated as follows: height * width *4.
  let opts: image.InitializationOptions = {
    size: { height: 4, width: 6 },
    srcPixelFormat: image.PixelMapFormat.RGBA_8888, // Pixel format of the source pixel data in the buffer.
    pixelFormat: image.PixelMapFormat.RGBA_8888, // Pixel format of the new PixelMap.
    editable: true
  };
  image.createPixelMap(color, opts, (error: BusinessError, pixelMap: image.PixelMap) => {
    if(error) {
      console.error(`Failed to create pixelmap. code is ${error.code}, message is ${error.message}`);
      return;
    } else {
      console.info('Succeeded in creating pixelmap.');
    }
  })
}

```


## createPixelMap

```TypeScript
function createPixelMap(colors: ArrayBuffer, options: InitializationOptions): Promise<PixelMap>
```

Create pixelmap by data buffer.

Starting from API 26.0.0, it is recommended to use {@link createPixelMapFromPixels} instead for better exception handling capabilities.

**Since:** 10

<!--Device-image-function createPixelMap(colors: ArrayBuffer, options: InitializationOptions): Promise<PixelMap>--><!--Device-image-function createPixelMap(colors: ArrayBuffer, options: InitializationOptions): Promise<PixelMap>-End-->

**System capability:** SystemCapability.Multimedia.Image.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| colors | [ArrayBuffer](../../apis-arkts/arkts-apis/arkts-arkts-collections-arraybuffer-c.md) | Yes | The image color buffer. |
| options | [InitializationOptions](arkts-image-image-initializationoptions-i.md) | Yes | Initialization options for pixelmap. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<PixelMap> | A Promise instance used to return the PixelMap object. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

async function CreatePixelMap() {
  const color: ArrayBuffer = new ArrayBuffer(96); // 96 is the size of the pixel buffer to create. The value is calculated as follows: height * width *4.
  let opts: image.InitializationOptions = {
    size: { height: 4, width: 6 },
    srcPixelFormat: image.PixelMapFormat.RGBA_8888, // Pixel format of the source pixel data in the buffer.
    pixelFormat: image.PixelMapFormat.RGBA_8888, // Pixel format of the new PixelMap.
    editable: true
  };
  image.createPixelMap(color, opts).then((pixelMap: image.PixelMap) => {
    console.info('Succeeded in creating pixelmap.');
  }).catch((error: BusinessError) => {
    console.error(`Failed to create pixelmap. code is ${error.code}, message is ${error.message}`);
  })
}

```

