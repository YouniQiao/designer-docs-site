# convertToPixelMap

## convertToPixelMap

```TypeScript
function convertToPixelMap(pixelmap: PixelMap): image.PixelMap
```

Creates a image PixelMap from sendable image PixelMap.

**Since:** 12

**System capability:** SystemCapability.Multimedia.Image.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| pixelmap | PixelMap | Yes | the src pixelmap. |

**Return value:**

| Type | Description |
| --- | --- |
| image.PixelMap | Returns the instance if the operation is successful.  Otherwise, an exception will be thrown. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | If the image parameter invalid. Possible causes:  1.Mandatory parameters are left unspecified. 2.Incorrect parameter types. 3.Parameter verification failed. |
| 62980104 | Failed to initialize the internal object. |

