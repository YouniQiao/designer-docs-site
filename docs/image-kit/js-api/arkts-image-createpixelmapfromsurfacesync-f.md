# createPixelMapFromSurfaceSync

## createPixelMapFromSurfaceSync

```TypeScript
function createPixelMapFromSurfaceSync(surfaceId: string, region: Region): PixelMap
```

Creates a PixelMap object from surface id.

**Since:** 12

**System capability:** SystemCapability.Multimedia.Image.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| surfaceId | string | Yes | surface id. |
| region | Region | Yes | The region to surface. |

**Return value:**

| Type | Description |
| --- | --- |
| PixelMap | Returns the instance if the operation is successful;Otherwise, an exception will be thrown. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. 3.Parameter verification failed. |
| 62980105 | Failed to get the data. |
| 62980178 | Failed to create the PixelMap. |

**Example**

```TypeScript
async function Demo(surfaceId: string) {
  let region: image.Region = { x: 0, y: 0, size: { height: 100, width: 100 } };
  let pixelMap: image.PixelMap = image.createPixelMapFromSurfaceSync(surfaceId, region);
  return pixelMap;
}

```

## createPixelMapFromSurfaceSync

```TypeScript
function createPixelMapFromSurfaceSync(surfaceId: string): PixelMap
```

Creates a PixelMap object from surface id.

**Since:** 15

**System capability:** SystemCapability.Multimedia.Image.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| surfaceId | string | Yes | surface id. |

**Return value:**

| Type | Description |
| --- | --- |
| PixelMap | Returns the instance if the operation is successful;Otherwise, an exception will be thrown. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. 3.Parameter verification failed. |
| 62980105 | Failed to get the data. |
| 62980178 | Failed to create the PixelMap. |

**Example**

```TypeScript
async function CreatePixelMapFromSurfaceSync(surfaceId: string) {
  let pixelMap : image.PixelMap = image.createPixelMapFromSurfaceSync(surfaceId);
  return pixelMap;
}

```

