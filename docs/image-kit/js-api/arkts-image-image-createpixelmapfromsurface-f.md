# createPixelMapFromSurface

## Modules to Import

```TypeScript
import { image } from '@kit.ImageKit';
```

## createPixelMapFromSurface

```TypeScript
function createPixelMapFromSurface(surfaceId: string, region: Region): Promise<PixelMap>
```

Creates a PixelMap object from surface id.

**Since:** 11

<!--Device-image-function createPixelMapFromSurface(surfaceId: string, region: Region): Promise<PixelMap>--><!--Device-image-function createPixelMapFromSurface(surfaceId: string, region: Region): Promise<PixelMap>-End-->

**System capability:** SystemCapability.Multimedia.Image.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| surfaceId | string | Yes | surface id. |
| region | [Region](arkts-image-image-region-i.md) | Yes | The region to surface. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<PixelMap> | Returns the instance if the operation is successful;Otherwise, an exception will be thrown. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [62980115](../errorcode-image.md#62980115-invalid-image-parameter) | If the image parameter invalid. |
| [62980105](../errorcode-image.md#62980105-failure-in-obtaining-image-data) | Failed to get the data. |
| [62980178](../errorcode-image.md#62980178-failure-in-creating-a-pixelmap) | Failed to create the PixelMap. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

async function CreatePixelMapFromSurface(surfaceId: string) {
  let region: image.Region = { x: 0, y: 0, size: { height: 100, width: 100 } };
  image.createPixelMapFromSurface(surfaceId, region).then(() => {
    console.info('Succeeded in creating pixelmap from Surface');
  }).catch((error: BusinessError) => {
    console.error(`Failed to create pixelmap. code is ${error.code}, message is ${error.message}`);
  });
} 

```


## createPixelMapFromSurface

```TypeScript
function createPixelMapFromSurface(surfaceId: string): Promise<PixelMap>
```

Creates a PixelMap object from surface id.

**Since:** 15

<!--Device-image-function createPixelMapFromSurface(surfaceId: string): Promise<PixelMap>--><!--Device-image-function createPixelMapFromSurface(surfaceId: string): Promise<PixelMap>-End-->

**System capability:** SystemCapability.Multimedia.Image.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| surfaceId | string | Yes | surface id. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<PixelMap> | Returns the instance if the operation is successful;Otherwise, an exception will be thrown. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.2.Incorrect parameter types. 3.Parameter verification failed. |
| [62980105](../errorcode-image.md#62980105-failure-in-obtaining-image-data) | Failed to get the data. |
| [62980178](../errorcode-image.md#62980178-failure-in-creating-a-pixelmap) | Failed to create the PixelMap. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

async function CreatePixelMapFromSurface(surfaceId: string) {
  image.createPixelMapFromSurface(surfaceId).then(() => {
    console.info('Succeeded in creating pixelmap from Surface');
  }).catch((error: BusinessError) => {
    console.error(`Failed to create pixelmap. code is ${error.code}, message is ${error.message}`);
  });
} 

```

