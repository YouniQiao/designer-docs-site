# createPixelMapFromSurfaceWithTransformationSync

## Modules to Import

```TypeScript
import { image } from '@ohos.multimedia.image';
```

## createPixelMapFromSurfaceWithTransformationSync

```TypeScript
function createPixelMapFromSurfaceWithTransformationSync(surfaceId: string, transformEnabled: boolean): PixelMap
```

Creates a PixelMap object based on the ID of a Surface with transformation.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| surfaceId | string | Yes | ID of the Surface. |
| transformEnabled | boolean | Yes | Whether to inverse transform the PixelMap to cancel out the transformationfrom the Surface.If true, the PixelMap will be transformed by the same amount from the Surface but in a reversed direction;if false, the PixelMap will not be transformed. |

**Return value:**

| Type | Description |
| --- | --- |
| PixelMap | A PixelMap instance if the operation is successful.Otherwise, an exception will be thrown. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [7600104](../errorcode-image.md#7600104-failed-to-obtain-image-data) | Failed to get the data from Surface. |
| [7600201](../errorcode-image.md#7600201-unsupported-operation) | Unsupported operation, e.g. on cross-platform. |
| [7600206](../errorcode-image.md#7600206-invalid-parameter) | Invalid parameter. |
| [7600305](../errorcode-image.md#7600305-failed-to-create-the-pixelmap) | Failed to create the PixelMap. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

function DemoCreatePixelMapFromSurfaceWithTransformationSync(surfaceId: string, transformEnabled: boolean) {
  try {
    const pixelMap: image.PixelMap = image.createPixelMapFromSurfaceWithTransformationSync(surfaceId, transformEnabled);
    console.info('PixelMap created successfully.');
  } catch (e) {
    const error = e as BusinessError;
    console.error(`Failed to create PixelMap. Code: ${error.code}, message: ${error.message}`);
  }
}

```

