# createPixelMapFromSurfaceSync

## Modules to Import

```TypeScript
import { image } from '@kit.ImageKit';
```

<a id="createpixelmapfromsurfacesync"></a>
## createPixelMapFromSurfaceSync

```TypeScript
function createPixelMapFromSurfaceSync(surfaceId: string, region: Region): PixelMap
```

Creates a PixelMap object from surface id.

**Since:** 12

<!--Device-image-function createPixelMapFromSurfaceSync(surfaceId: string, region: Region): PixelMap--><!--Device-image-function createPixelMapFromSurfaceSync(surfaceId: string, region: Region): PixelMap-End-->

**System capability:** SystemCapability.Multimedia.Image.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| surfaceId | string | Yes | surface id. |
| region | [Region](arkts-image-image-region-i.md) | Yes | The region to surface. |

**Return value:**

| Type | Description |
| --- | --- |
| [PixelMap](arkts-image-image-pixelmap-i.md) | Returns the instance if the operation is successful;Otherwise, an exception will be thrown. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.2.Incorrect parameter types. 3.Parameter verification failed. |
| [62980105](../errorcode-image.md#62980105-failure-in-obtaining-image-data) | Failed to get the data. |
| [62980178](../errorcode-image.md#62980178-failure-in-creating-a-pixelmap) | Failed to create the PixelMap. |

**Example**

```TypeScript
async function Demo(surfaceId: string) {
  let region: image.Region = { x: 0, y: 0, size: { height: 100, width: 100 } };
  let pixelMap: image.PixelMap = image.createPixelMapFromSurfaceSync(surfaceId, region);
  return pixelMap;
}

```


<a id="createpixelmapfromsurfacesync-1"></a>
## createPixelMapFromSurfaceSync

```TypeScript
function createPixelMapFromSurfaceSync(surfaceId: string): PixelMap
```

Creates a PixelMap object from surface id.

**Since:** 15

<!--Device-image-function createPixelMapFromSurfaceSync(surfaceId: string): PixelMap--><!--Device-image-function createPixelMapFromSurfaceSync(surfaceId: string): PixelMap-End-->

**System capability:** SystemCapability.Multimedia.Image.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| surfaceId | string | Yes | surface id. |

**Return value:**

| Type | Description |
| --- | --- |
| [PixelMap](arkts-image-image-pixelmap-i.md) | Returns the instance if the operation is successful;Otherwise, an exception will be thrown. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.2.Incorrect parameter types. 3.Parameter verification failed. |
| [62980105](../errorcode-image.md#62980105-failure-in-obtaining-image-data) | Failed to get the data. |
| [62980178](../errorcode-image.md#62980178-failure-in-creating-a-pixelmap) | Failed to create the PixelMap. |

**Example**

```TypeScript
async function CreatePixelMapFromSurfaceSync(surfaceId: string) {
  let pixelMap : image.PixelMap = image.createPixelMapFromSurfaceSync(surfaceId);
  return pixelMap;
}

```

