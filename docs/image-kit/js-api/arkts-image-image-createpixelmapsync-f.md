# createPixelMapSync

## Modules to Import

```TypeScript
import { image } from '@kit.ImageKit';
```

## createPixelMapSync

```TypeScript
function createPixelMapSync(colors: ArrayBuffer, options: InitializationOptions): PixelMap
```

Create pixelmap by data buffer.

Starting from API 26.0.0, it is recommended to use {@link createPixelMapFromPixelsSync} instead for better exception handling capabilities.

**Since:** 12

<!--Device-image-function createPixelMapSync(colors: ArrayBuffer, options: InitializationOptions): PixelMap--><!--Device-image-function createPixelMapSync(colors: ArrayBuffer, options: InitializationOptions): PixelMap-End-->

**System capability:** SystemCapability.Multimedia.Image.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| colors | [ArrayBuffer](../../apis-arkts/arkts-apis/arkts-arkts-collections-arraybuffer-c.md) | Yes | The image color buffer. |
| options | [InitializationOptions](arkts-image-image-initializationoptions-i.md) | Yes | Initialization options for pixelmap. |

**Return value:**

| Type | Description |
| --- | --- |
| [PixelMap](arkts-image-image-pixelmap-i.md) | Returns the instance if the operation is successful;Otherwise, return undefined. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.2.Incorrect parameter types. 3.Parameter verification failed. |

**Example**

```TypeScript
function CreatePixelMapSync() {
  const color: ArrayBuffer = new ArrayBuffer(96); // 96 is the size of the pixel buffer to create. The value is calculated as follows: height * width *4.
  let opts: image.InitializationOptions = {
    size: { height: 4, width: 6 },
    srcPixelFormat: image.PixelMapFormat.RGBA_8888, // Pixel format of the source pixel data in the buffer.
    pixelFormat: image.PixelMapFormat.RGBA_8888, // Pixel format of the new PixelMap.
    editable: true
  };
  let pixelMap : image.PixelMap = image.createPixelMapSync(color, opts);
  return pixelMap;
}

```


## createPixelMapSync

```TypeScript
function createPixelMapSync(options: InitializationOptions): PixelMap
```

Create an empty pixelmap.

Starting from API 26.0.0, it is recommended to use {@link createEmptyPixelMap} instead for better exception handling capabilities.

**Since:** 12

<!--Device-image-function createPixelMapSync(options: InitializationOptions): PixelMap--><!--Device-image-function createPixelMapSync(options: InitializationOptions): PixelMap-End-->

**System capability:** SystemCapability.Multimedia.Image.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | [InitializationOptions](arkts-image-image-initializationoptions-i.md) | Yes | Initialization options for pixelmap. |

**Return value:**

| Type | Description |
| --- | --- |
| [PixelMap](arkts-image-image-pixelmap-i.md) | Returns the instance if the operation is successful;Otherwise, return undefined. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.2.Incorrect parameter types. 3.Parameter verification failed. |

**Example**

```TypeScript
function CreatePixelMapSync() {
  let opts: image.InitializationOptions = { editable: true, pixelFormat: image.PixelMapFormat.RGBA_8888, size: { height: 4, width: 6 } }
  let pixelMap : image.PixelMap = image.createPixelMapSync(opts);
  return pixelMap;
}

```

