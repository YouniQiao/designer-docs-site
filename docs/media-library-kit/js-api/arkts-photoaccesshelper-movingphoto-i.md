# MovingPhoto

Provides APIs for managing a moving photo instance.

**Since:** 12

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## Modules to Import

```TypeScript
import { photoAccessHelper } from '@kit.MediaLibraryKit';
```

## getUri

```TypeScript
getUri(): string
```

Obtains the URI of this moving photo.

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Return value:**

| Type | Description |
| --- | --- |
| string | Returns uri of the moving photo |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |
| 14000011 | System inner fail |

## getUri

```TypeScript
getUri(): string | null
```

Obtains the URI of this moving photo.

**Since:** 23

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Return value:**

| Type | Description |
| --- | --- |
| string | Returns uri of the moving photo, if the operation fails, returns null |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 23800301 | Internal system error. It is recommended to retry and check the logs.  Possible causes: 1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out. |

## isVideoReady

```TypeScript
isVideoReady(): Promise<boolean>
```

Check whether the video of the moving photo is ready.

**Since:** 20

**Required permissions:** 

 ohos.permission.READ_IMAGEVIDEO

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean> | Promise used to return the check result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Called by non-system application. |
| 23800301 | Internal system error. It is recommended to retry and check the logs.  Possible causes: 1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out. |

**Example**

```TypeScript
import { dataSharePredicates } from '@kit.ArkData';

class MovingPhotoHandler implements photoAccessHelper.MediaAssetDataHandler<photoAccessHelper.MovingPhoto> {
  async onDataPrepared(movingPhoto: photoAccessHelper.MovingPhoto) {
    if (movingPhoto === undefined) {
      console.error('Error occurred when preparing data');
      return;
    }
    try {
    let isVideoReady = await movingPhoto.isVideoReady()
      console.info("moving photo video ready:" + `${isVideoReady}`);
    } catch (err) {
      console.error(`failed to get isVideoReady, error code is ${err.code}, message is ${err.message}`)
    }
  }
}

async function example(phAccessHelper: photoAccessHelper.PhotoAccessHelper, context: Context) {
  let predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();
  predicates.equalTo(photoAccessHelper.PhotoKeys.PHOTO_SUBTYPE, photoAccessHelper.PhotoSubtype.MOVING_PHOTO);
  let fetchOptions: photoAccessHelper.FetchOptions = {
    fetchColumns: [],
    predicates: predicates
  };
  // Ensure that there are moving photos in Gallery.
  let assetResult: photoAccessHelper.FetchResult<photoAccessHelper.PhotoAsset> = await phAccessHelper.getAssets(fetchOptions);
  let asset: photoAccessHelper.PhotoAsset = await assetResult.getFirstObject();
  let requestOptions: photoAccessHelper.RequestOptions = {
    deliveryMode: photoAccessHelper.DeliveryMode.FAST_MODE,
  }
  const handler = new MovingPhotoHandler();
  try {
    let requestId: string = await photoAccessHelper.MediaAssetManager.requestMovingPhoto(context, asset, requestOptions, handler);
    console.info("moving photo requested successfully, requestId: " + requestId);
  } catch (err) {
    console.error(`failed to request moving photo, error code is ${err.code}, message is ${err.message}`);
  }
}

```

## requestContent

```TypeScript
requestContent(imageFileUri: string, videoFileUri: string): Promise<void>
```

Requests the image data and video data of this moving photo and writes them to the specified URIs, respectively.

**Since:** 12

**Required permissions:** 

 ohos.permission.READ_IMAGEVIDEO

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| imageFileUri | string | Yes | URI to which the image data of the moving photo is to be written. |
| videoFileUri | string | Yes | URI to which the video data of the moving photo is to be written. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Returns void |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14000011 | System inner fail |

## requestContent

```TypeScript
requestContent(resourceType: ResourceType, fileUri: string): Promise<void>
```

Requests the moving photo content of the specified resource type and writes it to the specified URI.

**Since:** 12

**Required permissions:** 

 ohos.permission.READ_IMAGEVIDEO

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| resourceType | ResourceType | Yes | Resource type of the moving photo content to request. |
| fileUri | string | Yes | URI to which the moving photo content is to be written. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Returns void |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14000011 | System inner fail |

## requestContent

```TypeScript
requestContent(resourceType: ResourceType): Promise<ArrayBuffer>
```

Requests the moving photo content of the specified resource type and returns it in ArrayBuffer format.

**Since:** 12

**Required permissions:** 

 ohos.permission.READ_IMAGEVIDEO

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| resourceType | ResourceType | Yes | Resource type of the moving photo content to request. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;ArrayBuffer> | Returns array buffer of the content |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14000011 | System inner fail |

