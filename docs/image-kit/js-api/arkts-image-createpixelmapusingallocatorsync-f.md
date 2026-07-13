# createPixelMapUsingAllocatorSync

## Modules to Import

```TypeScript
import { image } from '@kit.ImageKit';
```

## createPixelMapUsingAllocatorSync

```TypeScript
function createPixelMapUsingAllocatorSync(colors: ArrayBuffer, param: InitializationOptions,
    allocatorType?: AllocatorType): PixelMap
```

Create pixelmap by data buffer based on opts, the memory type used by the PixelMap can be specified
by allocatorType. By default, the system selects the memory type based on the image type, image size,
platform capability, etc. When processing the PixelMap returned by this interface, please always
consider the impact of stride.

**Since:** 20

**System capability:** SystemCapability.Multimedia.Image.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| colors | ArrayBuffer | Yes | The image color buffer. |
| param | InitializationOptions | Yes | Initialization options for pixelmap. |
| allocatorType | AllocatorType | No | Indicate which memory type will be used by the returned PixelMap. |

**Return value:**

| Type | Description |
| --- | --- |
| PixelMap | Returns the instance if the operation is successful;Otherwise, return undefined. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [7600201](../errorcode-image.md#7600201-unsupported-operation) | Unsupported operation. |
| [7600301](../errorcode-image.md#7600301-memory-allocation-failure) | Memory alloc failed. |
| [7600302](../errorcode-image.md#7600302-memory-copy-failure) | Memory copy failed. |

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
  let pixelMap : image.PixelMap = image.createPixelMapUsingAllocatorSync(color, opts, image.AllocatorType.AUTO);
  return pixelMap;
}

```


## createPixelMapUsingAllocatorSync

```TypeScript
function createPixelMapUsingAllocatorSync(param: InitializationOptions, allocatorType?: AllocatorType): PixelMap
```

Create an empty pixelmap by data buffer based on opts, the memory type used by the PixelMap can be specified
by allocatorType. By default, the system selects the memory type based on the image type, image size,
platform capability, etc. When processing the PixelMap returned by this interface, please always
consider the impact of stride.

**Since:** 20

**System capability:** SystemCapability.Multimedia.Image.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| param | InitializationOptions | Yes | Initialization options for pixelmap. |
| allocatorType | AllocatorType | No | Indicate which memory type will be used by the returned PixelMap. |

**Return value:**

| Type | Description |
| --- | --- |
| PixelMap | Returns the instance if the operation is successful;Otherwise, return undefined. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [7600201](../errorcode-image.md#7600201-unsupported-operation) | Unsupported operation. |
| [7600301](../errorcode-image.md#7600301-memory-allocation-failure) | Memory alloc failed. |

**Example**

```TypeScript
function CreatePixelMapSync() {
  let opts: image.InitializationOptions = { editable: true, pixelFormat: image.PixelMapFormat.RGBA_8888, size: { height: 4, width: 6 } }
  let pixelMap : image.PixelMap = image.createPixelMapUsingAllocatorSync(opts, image.AllocatorType.AUTO);
  return pixelMap;
}

```

