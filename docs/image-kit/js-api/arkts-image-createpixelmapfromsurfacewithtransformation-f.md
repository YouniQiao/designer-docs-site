# createPixelMapFromSurfaceWithTransformation

## createPixelMapFromSurfaceWithTransformation

```TypeScript
function createPixelMapFromSurfaceWithTransformation(surfaceId: string, transformEnabled: boolean): Promise<PixelMap>
```

Creates a PixelMap object based on the ID of a Surface with transformation.

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| surfaceId | string | Yes | ID of the Surface. |
| transformEnabled | boolean | Yes | Whether to inverse transform the PixelMap to cancel out the transformation  from the Surface.  If true, the PixelMap will be transformed by the same amount from the Surface but in a reversed direction;  if false, the PixelMap will not be transformed. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;PixelMap> | A Promise of PixelMap instance if the operation is successful.  Otherwise, an exception will be thrown. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 7600104 | Failed to get the data from Surface. |
| 7600201 | Unsupported operation, e.g. on cross-platform. |
| 7600206 | Invalid parameter. |
| 7600305 | Failed to create the PixelMap. |

**Example**

```TypeScript
function DemoCreatePixelMapFromSurfaceWithTransformation(surfaceId: string, transformEnabled: boolean) {
  image.createPixelMapFromSurfaceWithTransformation(surfaceId, transformEnabled).then((pixelMap: image.PixelMap) => {
    console.info('PixelMap created successfully.');
  }).catch((e: Error) => {
    console.error(`Failed to create PixelMap. Code: ${e}`);
  });
}

```

