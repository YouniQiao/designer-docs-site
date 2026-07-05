# createPixelMapFromSurface

## createPixelMapFromSurface

```TypeScript
function createPixelMapFromSurface(surfaceId: string, region: image.Region): Promise<PixelMap>
```

Creates a PixelMap object from surface id.

**Since:** 12

**System capability:** SystemCapability.Multimedia.Image.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| surfaceId | string | Yes | surface id. |
| region | image.Region | Yes | The region to surface. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;PixelMap> | Returns the instance if the operation is successful.  Otherwise, an exception will be thrown. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 62980115 | If the image parameter invalid. |
| 62980105 | Failed to get the data. |
| 62980178 | Failed to create the PixelMap. |

