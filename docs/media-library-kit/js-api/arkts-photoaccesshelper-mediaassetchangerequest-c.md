# MediaAssetChangeRequest

Defines the class of media asset change request.

**Inheritance:** MediaAssetChangeRequestimplements: MediaChangeRequest.

**Since:** 11

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## Modules to Import

```TypeScript
import { photoAccessHelper } from '@kit.MediaLibraryKit';
```

## addResource

```TypeScript
addResource(type: ResourceType, fileUri: string): void
```

Adds a resource using fileUri.

**Since:** 11

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | ResourceType | Yes | Type of the resource to add. |
| fileUri | string | Yes | Data source of the resource to be added, which is specified by a URI in the application sandbox directory. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 13900002 | The file corresponding to the URI is not in the app sandbox. |
| 14000011 | System inner fail |
| 14000016 | Operation Not Support |

## addResource

```TypeScript
addResource(type: ResourceType, data: ArrayBuffer): void
```

Adds a resource using ArrayBuffer data.

**Since:** 11

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | ResourceType | Yes | Type of the resource to add. |
| data | ArrayBuffer | Yes | Data of the resource to add. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14000011 | System inner fail |
| 14000016 | Operation Not Support |

## addResource

```TypeScript
addResource(type: ResourceType, proxy: PhotoProxy): void
```

Adds resources using PhotoProxy data.

**Since:** 11

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | ResourceType | Yes | Type of the resource to add. |
| proxy | PhotoProxy | Yes | PhotoProxy data of the resource to add. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Called by non-system application |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14000011 | System inner fail |
| 14000016 | Operation Not Support |

**Example**

```TypeScript
class PhotoProxyImpl implements photoAccessHelper.PhotoProxy {
  // Implement PhotoProxy.
}

async function example(phAccessHelper: photoAccessHelper.PhotoAccessHelper, asset: photoAccessHelper.PhotoAsset, context: Context) {
  console.info('addResourceByPhotoProxyDemo');
  try {
    let photoType: photoAccessHelper.PhotoType = photoAccessHelper.PhotoType.IMAGE;
    let extension: string = 'jpg';
    let assetChangeRequest: photoAccessHelper.MediaAssetChangeRequest = photoAccessHelper.MediaAssetChangeRequest.createAssetRequest(context, photoType, extension);
    let photoProxy: PhotoProxyImpl = new PhotoProxyImpl();
    assetChangeRequest.addResource(photoAccessHelper.ResourceType.IMAGE_RESOURCE, photoProxy);
    await phAccessHelper.applyChanges(assetChangeRequest);
    console.info('addResourceByPhotoProxy successfully');
  } catch (err) {
    console.error(`addResourceByPhotoProxyDemo failed with error: ${err.code}, ${err.message}`);
  }
}

```

## addResourceForPicker

```TypeScript
addResourceForPicker(type: ResourceType, fileUri: string): void
```

Adds a resource using fileUri from file management directory

**Since:** 22

**Required permissions:** 

 ohos.permission.ACCESS_MEDIALIB_THUMB_DB

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | ResourceType | Yes | Type of the resource to add. |
| fileUri | string | Yes | Data source of the resource to be added,  which is specified by a URI in the application sandbox directory. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied |
| 202 | Called by non-system application. |
| 23800151 | The scenario parameter verification fails. Possible causes:  1. The file corresponding to the URI is not in the app sandbox. 2. ResourceType must be image or video |
| 23800301 | Internal system error. You are advised to retry and check the logs.  Possible causes: 1. The database is corrupted. 2. The file system is abnormal. 3. The IPC request timed out. |

## constructor

```TypeScript
constructor(asset: PhotoAsset)
```

Constructor used to initialize an asset change request.

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| asset | PhotoAsset | Yes | Assets to change. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14000011 | System inner fail |

## createAssetRequest

```TypeScript
static createAssetRequest(context: Context, displayName: string, options?: PhotoCreateOptions): MediaAssetChangeRequest
```

Creates an asset change request with the specified file name.

**Since:** 11

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | Context | Yes | Context of the ability instance. |
| displayName | string | Yes | File name of the image or video to create. |
| options | PhotoCreateOptions | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| MediaAssetChangeRequest | - Returns a MediaAssetChangeRequest instance |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Called by non-system application |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14000001 | Invalid display name |
| 14000011 | System inner fail  @static |

**Example**

```TypeScript
async function example(phAccessHelper: photoAccessHelper.PhotoAccessHelper, context: Context) {
  console.info('createAssetRequestDemo');
  try {
    let testFileName: string = 'testFile' + Date.now() + '.jpg';
    let assetChangeRequest: photoAccessHelper.MediaAssetChangeRequest = photoAccessHelper.MediaAssetChangeRequest.createAssetRequest(context, testFileName);
    // Ensure that the asset specified by fileUri exists.
    let fileUri = 'file://com.example.temptest/data/storage/el2/base/haps/entry/files/test.jpg';
    assetChangeRequest.addResource(photoAccessHelper.ResourceType.IMAGE_RESOURCE, fileUri);
    await phAccessHelper.applyChanges(assetChangeRequest);
    console.info('apply createAssetRequest successfully');
  } catch (err) {
    console.error(`createAssetRequestDemo failed with error: ${err.code}, ${err.message}`);
  }
}

```

## createAssetRequest

```TypeScript
static createAssetRequest(context: Context, displayName: string, options?: PhotoCreateOptions): MediaAssetChangeRequest | null
```

Creates an asset change request with the specified file name.

**Since:** 23

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | Context | Yes | Context of the ability instance. |
| displayName | string | Yes | File name of the image or video to create. |
| options | PhotoCreateOptions | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| MediaAssetChangeRequest | - Returns a MediaAssetChangeRequest instance.  if the operation fails, returns null |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Called by non-system application |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 23800102 | The format or length of the display name does not meet the specifications. |
| 23800301 | Internal system error. It is recommended to retry and check the logs.  Possible causes: 1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out.  @static |

## createAssetRequest

```TypeScript
static createAssetRequest(context: Context, photoType: PhotoType, extension: string, options?: CreateOptions): MediaAssetChangeRequest
```

Create an asset change request based on the file type and filename extension.

**Since:** 11

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | Context | Yes | Context of the ability instance. |
| photoType | PhotoType | Yes | Type of the file to create, which can be IMAGE or VIDEO. |
| extension | string | Yes | File name extension, for example, 'jpg'. |
| options | CreateOptions | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| MediaAssetChangeRequest | - Returns a MediaAssetChangeRequest instance |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14000011 | System inner fail  @static |

## createAssetRequest

```TypeScript
static createAssetRequest(context: Context, photoType: PhotoType, extension: string, options?: CreateOptions): MediaAssetChangeRequest | null
```

Create an asset change request based on the file type and filename extension.

**Since:** 23

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | Context | Yes | Context of the ability instance. |
| photoType | PhotoType | Yes | Type of the file to create, which can be IMAGE or VIDEO. |
| extension | string | Yes | File name extension, for example, 'jpg'. |
| options | CreateOptions | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| MediaAssetChangeRequest | - Returns a MediaAssetChangeRequest instance,  if the operation fails, returns null |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 23800301 | Internal system error. It is recommended to retry and check the logs.  Possible causes: 1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out.  @static |

## createImageAssetRequest

```TypeScript
static createImageAssetRequest(context: Context, fileUri: string): MediaAssetChangeRequest
```

Creates an image asset change request.

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | Context | Yes | Context of the ability instance. |
| fileUri | string | Yes | Data source of the image asset, which is specified by a URI in the application sandbox directory. |

**Return value:**

| Type | Description |
| --- | --- |
| MediaAssetChangeRequest | - Returns a MediaAssetChangeRequest instance |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 13900002 | The file corresponding to the URI is not in the app sandbox. |
| 14000011 | System inner fail  @static |

## createImageAssetRequest

```TypeScript
static createImageAssetRequest(context: Context, fileUri: string): MediaAssetChangeRequest | null
```

Creates an image asset change request.

**Since:** 23

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | Context | Yes | Context of the ability instance. |
| fileUri | string | Yes | Data source of the image asset,  which is specified by a URI in the application sandbox directory. |

**Return value:**

| Type | Description |
| --- | --- |
| MediaAssetChangeRequest | - Returns a MediaAssetChangeRequest instance,  if the operation fails, returns null |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 23800101 | The file corresponding to the URI is not in the app sandbox. |
| 23800301 | Internal system error. It is recommended to retry and check the logs.  Possible causes: 1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out.  @static |

## createVideoAssetRequest

```TypeScript
static createVideoAssetRequest(context: Context, fileUri: string): MediaAssetChangeRequest
```

Creates a video asset change request.

**Since:** 11

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | Context | Yes | Context of the ability instance. |
| fileUri | string | Yes | Data source of the video asset, which is specified by a URI in the application sandbox directory. |

**Return value:**

| Type | Description |
| --- | --- |
| MediaAssetChangeRequest | - Returns a MediaAssetChangeRequest instance |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 13900002 | The file corresponding to the URI is not in the app sandbox. |
| 14000011 | System inner fail  @static |

## createVideoAssetRequest

```TypeScript
static createVideoAssetRequest(context: Context, fileUri: string): MediaAssetChangeRequest | null
```

Creates a video asset change request.

**Since:** 23

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | Context | Yes | Context of the ability instance. |
| fileUri | string | Yes | Data source of the video asset,  which is specified by a URI in the application sandbox directory. |

**Return value:**

| Type | Description |
| --- | --- |
| MediaAssetChangeRequest | - Returns a MediaAssetChangeRequest instance.  if the operation fails, returns null. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 23800101 | The file corresponding to the URI is not in the app sandbox. |
| 23800301 | Internal system error. It is recommended to retry and check the logs.  Possible causes: 1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out.  @static |

## deleteAssets

```TypeScript
static deleteAssets(context: Context, assets: Array<PhotoAsset>): Promise<void>
```

Deletes media assets. This API uses a promise to return the result. The deleted assets are moved to the trash.

**Since:** 11

**Required permissions:** 

 ohos.permission.WRITE_IMAGEVIDEO

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | Context | Yes | Context of the ability instance. |
| assets | Array&lt;PhotoAsset> | Yes | Array of assets to delete. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | - Returns void |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14000011 | System inner fail  @static |

## deleteAssets

```TypeScript
static deleteAssets(context: Context, uriList: Array<string>): Promise<void>
```

Deletes media assets. This API uses a promise to return the result. The deleted assets are moved to the trash.

**Since:** 11

**Required permissions:** 

 ohos.permission.WRITE_IMAGEVIDEO

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | Context | Yes | Context of the ability instance. |
| uriList | Array&lt;string> | Yes | URIs of the media files to delete. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | - Returns void |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14000002 | The uri format is incorrect or does not exist. |
| 14000011 | System inner fail  @static |

## deleteAssetsPermanentlyWithUri

```TypeScript
static deleteAssetsPermanentlyWithUri(context: Context, assetUris: string[]): Promise<void>
```

Delete assets without trash album.

**Since:** 24

**Required permissions:** 

 ohos.permission.WRITE_IMAGEVIDEO

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | Context | Yes | Hap context information  Hap context information |
| assetUris | string[] | Yes | Uris of the assets to be deleted |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | - Returns void |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied |
| 202 | Called by nonsystem application |
| 23800151 | The scenario parameter verification fails. Possible causes:  1. The context is empty;  2. Asset uri array size is empty or bigger than 500 . |
| 23800301 | Internal system error. It is recommended to retry and check the logs.  Possible causes:1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out;  @static |

**Example**

```TypeScript
async function example(context: Context, assetUri: string) {
    console.info('deleteAssetsPermanentlyWithUri');
    try {
      await photoAccessHelper.MediaAssetChangeRequest.deleteAssetsPermanentlyWithUri(context, [assetUri]);
      console.info('deleteAssetsPermanentlyWithUri success.');
    } catch (err) {
      console.error(`deleteAssetsPermanentlyWithUri failed with error: ${err.code}, ${err.message}`);
    }
}

```

## deleteAssetsToTrashWithUris

```TypeScript
static deleteAssetsToTrashWithUris(context: Context, uriList: Array<string>): Promise<void>
```

Deletes media assets. This API uses a promise to return the result. The deleted assets are moved to the trash.

**Since:** 23

**Required permissions:** 

 ohos.permission.WRITE_IMAGEVIDEO

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | Context | Yes | Context of the ability instance. |
| uriList | Array&lt;string> | Yes | URIs of the media files to delete. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | - Returns void |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied |
| 23800151 | The scenario parameter verification fails. Possible causes:  1. context is null or invalid; 2. The uri format is incorrect or does not exist. |
| 23800301 | Internal system error. It is recommended to retry and check the logs.  Possible causes: 1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out.  @static |

## deleteCloudAssetsWithUri

```TypeScript
static deleteCloudAssetsWithUri(context: Context, assetUris: string[]): Promise<void>
```

Delete cloud assets to trash from the album.

**Since:** 22

**Required permissions:** 

 ohos.permission.WRITE_IMAGEVIDEO

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | Context | Yes | Hap context information |
| assetUris | string[] | Yes | Uris of the assets to be deleted |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | - Returns void |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied |
| 202 | Called by non-system application |
| 23800151 | The scenario parameter verification fails. Possible causes:  1. The context is empty;  2. Asset uri array size is empty or bigger than 500 . |
| 23800301 | Internal system error. It is recommended to retry and check the logs.  Possible causes:1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out;  @static |

**Example**

```TypeScript
async function example(context: Context, assetUri: string) {
    console.info('deleteCloudAssetsWithUriDemo');
    try {
      await photoAccessHelper.MediaAssetChangeRequest.deleteCloudAssetsWithUri(context, [assetUri]);
    } catch (err) {
      console.error(`deleteCloudAssetsWithUri failed with error: ${err.code}, ${err.message}`);
    }
}

```

## deleteLocalAssetsPermanently

```TypeScript
static deleteLocalAssetsPermanently(context: Context, assets: Array<PhotoAsset>): Promise<void>
```

Permanently deletes photos or videos in batches. This API uses a promise to return the result.

**Since:** 18

**Required permissions:** 

 ohos.permission.WRITE_IMAGEVIDEO

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | Context | Yes | Context of the ability instance. |
| assets | Array&lt;PhotoAsset> | Yes | Array of images or videos to be permanently deleted. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | - Returns void |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied |
| 202 | Called by non-system application |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14000011 | Internal system error. It is recommended to retry and check the logs.  Possible causes: 1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out.  @static |

**Example**

```TypeScript
import { dataSharePredicates } from '@kit.ArkData';
import { BusinessError } from '@kit.BasicServicesKit';

async function example(phAccessHelper: photoAccessHelper.PhotoAccessHelper, context: Context) {
  console.info('deleteAssetsPermanentlyDemo');
  let predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();
  let fetchOptions: photoAccessHelper.FetchOptions = {
    fetchColumns: [],
    predicates: predicates
  };
  try {
    let fetchResult: photoAccessHelper.FetchResult<photoAccessHelper.PhotoAsset> = await phAccessHelper.getAssets(fetchOptions);
    let photoAssetList: Array<photoAccessHelper.PhotoAsset> = await fetchResult.getAllObjects();
    await photoAccessHelper.MediaAssetChangeRequest.deleteLocalAssetsPermanently(context, photoAssetList);
  } catch (err) {
    console.error(`deleteAssetsPermanentlyDemo failed with error: ${err.code}, ${err.message}`);
  }
}

```

## deleteLocalAssetsPermanentlyWithUri

```TypeScript
static deleteLocalAssetsPermanentlyWithUri(context: Context, assetUris: Array<string>): Promise<void>
```

Delete local assets permanently from the album.

**Since:** 19

**Required permissions:** 

 ohos.permission.WRITE_IMAGEVIDEO

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | Context | Yes | Hap context information |
| assetUris | Array&lt;string> | Yes | Uris of the assets to be deleted permanently |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | - Returns void |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied |
| 202 | Called by non-system application |
| 13900020 | Invalid argument |
| 14000011 | Internal system error. It is recommended to retry and check the logs.  Possible causes: 1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out.  @static |

## deleteLocalAssetsWithUri

```TypeScript
static deleteLocalAssetsWithUri(context: Context, assetUris: string[]): Promise<void>
```

Delete local assets to trash from the album.

**Since:** 22

**Required permissions:** 

 ohos.permission.WRITE_IMAGEVIDEO

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | Context | Yes | Hap context information |
| assetUris | string[] | Yes | Uris of the assets to be deleted |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | - Returns void |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied |
| 202 | Called by non-system application |
| 23800151 | The scenario parameter verification fails. Possible causes:  1. The context is empty;  2. Asset uri array size is empty or bigger than 500 . |
| 23800301 | Internal system error. It is recommended to retry and check the logs.  Possible causes: 1.Database corrupted; 2.The file system is abnormal; 3.The IPC request timed out;  @static |

**Example**

```TypeScript
async function example(context: Context, assetUri: string) {
    console.info('deleteLocalAssetsWithUriDemo');
    try {
      await photoAccessHelper.MediaAssetChangeRequest.deleteLocalAssetsWithUri(context, [assetUri]);
    } catch (err) {
      console.error(`deleteLocalAssetsWithUri failed with error: ${err.code}, ${err.message}`);
    }
}

```

## discardCameraPhoto

```TypeScript
discardCameraPhoto(): void
```

Discards the photo taken by the camera.

**Since:** 12

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 14000011 | Internal system error |
| 14000016 | Operation Not Support |

## getAsset

```TypeScript
getAsset(): PhotoAsset
```

Obtains the asset in this asset change request.

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Return value:**

| Type | Description |
| --- | --- |
| PhotoAsset | - Returns the asset |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |
| 14000011 | System inner fail |

## getAsset

```TypeScript
getAsset(): PhotoAsset | null
```

Obtains the asset in this asset change request.

**Since:** 23

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Return value:**

| Type | Description |
| --- | --- |
| PhotoAsset | - Returns the asset. if the operation fails, returns null. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 23800301 | Internal system error. It is recommended to retry and check the logs.  Possible causes: 1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out. |

## getWriteCacheHandler

```TypeScript
getWriteCacheHandler(): Promise<int>
```

Obtains the handler used for writing a file to cache.

**Since:** 11

**Required permissions:** 

 ohos.permission.WRITE_IMAGEVIDEO

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;int> | Returns the write cache handler |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |
| 14000011 | System inner fail |
| 14000016 | Operation Not Support |

## saveCameraPhoto

```TypeScript
saveCameraPhoto(): void
```

Saves the photo taken by the camera.

**Since:** 12

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 14000011 | System inner fail |
| 14000016 | Operation Not Support |

## saveCameraPhoto

```TypeScript
saveCameraPhoto(imageFileType: ImageFileType): void
```

Saves the photo taken by the camera.

**Since:** 13

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| imageFileType | ImageFileType | Yes | File type of the photo to save. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 14000011 | System inner fail |
| 14000016 | Operation Not Support |

## setAppLinkInfo

```TypeScript
setAppLinkInfo(appLink: string): void
```

Set the AppLink info of this asset.

**Since:** 21

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| appLink | string | Yes | AppLink info of the asset to set. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Called by non-system application |
| 23800301 | Internal system error.It is recommended to retry and check the logs. |
| 23800151 | The scenario parameter verification fails.Possible causes:  The input parameter's length is not within the valid range. |

**Example**

```TypeScript
import { photoAccessHelper } from '@kit.MediaLibraryKit';


async function example(asset: photoAccessHelper.PhotoAsset, appLinkInfo: string, context: Context) {
    try {
      let phAccessHelper: photoAccessHelper.PhotoAccessHelper =
        photoAccessHelper.getPhotoAccessHelper(context);
      let assetChangeRequest: photoAccessHelper.MediaAssetChangeRequest =
        new photoAccessHelper.MediaAssetChangeRequest(asset);
      assetChangeRequest.setAppLinkInfo(appLinkInfo);
      await phAccessHelper.applyChanges(assetChangeRequest);
    } catch (error) {
      console.error('set appLinkInfo error: ' + error);
      return;
    }
}

```

## setAppLinkState

```TypeScript
setAppLinkState(appLinkState: AppLinkState): void
```

Set the AppLink state of this asset.

**Since:** 24

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| appLinkState | AppLinkState | Yes | Boomerang status of assets |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Invoked by non-system applications |
| 23800301 | Internal system error. It is recommended to retry and check the logs. |
| 23800151 | The scenario parameter verification fails. Possible causes:  The input parameter is not within the valid range. |

**Example**

```TypeScript
import { photoAccessHelper } from '@kit.MediaLibraryKit';

async function example(asset: photoAccessHelper.PhotoAsset, context: Context) {
    try {
      let phAccessHelper: photoAccessHelper.PhotoAccessHelper =
        photoAccessHelper.getPhotoAccessHelper(context);
      let assetChangeRequest: photoAccessHelper.MediaAssetChangeRequest =
        new photoAccessHelper.MediaAssetChangeRequest(asset);
      assetChangeRequest.setAppLinkState(photoAccessHelper.AppLinkState.HAS_NO_LINK);
      await phAccessHelper.applyChanges(assetChangeRequest);
    } catch (error) {
      console.error('set appLink state error: ' + error);
      return;
    }
}

```

## setCameraShotKey

```TypeScript
setCameraShotKey(cameraShotKey: string): void
```

Sets the Key for the Ultra Snapshot feature, which allows the camera to take photos or record videos with the screen off.

**Since:** 12

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| cameraShotKey | string | Yes | Key for the Ultra Snapshot feature.  This parameter is available only for the system camera, and the key value is defined by the system camera. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Called by non-system application |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14000011 | System inner fail |

**Example**

```TypeScript
async function example(phAccessHelper: photoAccessHelper.PhotoAccessHelper, asset: photoAccessHelper.PhotoAsset) {
  console.info('setCameraShotKeyDemo');
  try {
    let assetChangeRequest: photoAccessHelper.MediaAssetChangeRequest = new photoAccessHelper.MediaAssetChangeRequest(asset);
    let cameraShotKey: string = 'test_MediaAssetChangeRequest_setCameraShotKey';
    assetChangeRequest.setCameraShotKey(cameraShotKey);
    await phAccessHelper.applyChanges(assetChangeRequest);
    console.info('apply setCameraShotKey successfully');
  } catch (err) {
    console.error(`apply setCameraShotKey failed with error: ${err.code}, ${err.message}`);
  }
}

```

## setCompositeDisplayMode

```TypeScript
setCompositeDisplayMode(compositeDisplayMode: CompositeDisplayMode): Promise<void>
```

Sets display mode for the composite photos.

**Since:** 23

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| compositeDisplayMode | CompositeDisplayMode | Yes | CompositeDisplayMode type to set. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Returns void |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Called by non-system application |
| 23800151 | Scene parameters validate failed, possible causes:  1. The compositeDisplayMode is not within the supported range.  2. The original file does not exist locally in PhotoAsset.  3. The PhotoAsset is not composite Asset  4. The original file format is not within the supported range.  5. The original file has been edited. |
| 23800301 | Internal system error. It is recommended to retry and check the logs.  Possible causes: 1. Database corrupted.2. The file system is abnormal.3. The IPC request timed out. |

**Example**

```TypeScript
import { photoAccessHelper } from '@kit.MediaLibraryKit';

async function example(phAccessHelper: photoAccessHelper.PhotoAccessHelper) {
    console.info('setCompositeDisplayModeDemo');
    let predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();
    let fetchOptions: photoAccessHelper.FetchOptions = {
      fetchColumns: [],
      predicates: predicates
    };
    try {
      let fetchResult: photoAccessHelper.FetchResult<photoAccessHelper.PhotoAsset> = await phAccessHelper.getAssets(fetchOptions);
      let asset = await fetchResult.getFirstObject();
      let assetChangeRequest: photoAccessHelper.MediaAssetChangeRequest = new photoAccessHelper.MediaAssetChangeRequest(asset);
      assetChangeRequest.setCompositeDisplayMode(photoAccessHelper.CompositeDisplayMode.DEFAULT);
      await phAccessHelper.applyChanges(assetChangeRequest);
      console.info('apply setCompositeDisplayModeDemo successfully');
    } catch (err) {
      console.error(`apply setCompositeDisplayModeDemo failed with error: ${err.code}, ${err.message}`);
    }
}

```

## setEditData

```TypeScript
setEditData(editData: MediaAssetEditData): void
```

Saves the edited data of an asset.

**Since:** 11

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| editData | MediaAssetEditData | Yes | Edited data to save. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Called by non-system application |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14000011 | System inner fail |

**Example**

```TypeScript
import { dataSharePredicates } from '@kit.ArkData';
import { BusinessError } from '@kit.BasicServicesKit';

async function example(phAccessHelper: photoAccessHelper.PhotoAccessHelper) {
  console.info('setEditDataDemo');
  let predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();
  let fetchOption: photoAccessHelper.FetchOptions = {
    fetchColumns: [],
    predicates: predicates
  };
  let fetchResult: photoAccessHelper.FetchResult<photoAccessHelper.PhotoAsset> = await phAccessHelper.getAssets(fetchOption);
  let asset = await fetchResult.getFirstObject();
  let assetChangeRequest: photoAccessHelper.MediaAssetChangeRequest = new photoAccessHelper.MediaAssetChangeRequest(asset);

  let assetEditData: photoAccessHelper.MediaAssetEditData = new photoAccessHelper.MediaAssetEditData('system', '1.0');
  let fileUri = 'file://com.example.temptest/data/storage/el2/base/haps/entry/files/test.jpg';
  assetChangeRequest.addResource(photoAccessHelper.ResourceType.IMAGE_RESOURCE, fileUri);
  assetEditData.data = '123456';
  assetChangeRequest.setEditData(assetEditData);
  phAccessHelper.applyChanges(assetChangeRequest).then(() => {
    console.info('apply setEditData successfully');
  }).catch((err: BusinessError) => {
    console.error(`apply setEditData failed with error: ${err.code}, ${err.message}`);
  });
}

```

## setEffectMode

```TypeScript
setEffectMode(mode: MovingPhotoEffectMode): void
```

Sets the effect of this moving photo.

**Since:** 12

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mode | MovingPhotoEffectMode | Yes | Effect to set. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Called by non-system application |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14000011 | System inner fail |
| 14000016 | Operation Not Support |

**Example**

```TypeScript
async function example(phAccessHelper: photoAccessHelper.PhotoAccessHelper, asset: photoAccessHelper.PhotoAsset) {
  console.info('setEffectModeDemo');
  try {
    let assetChangeRequest: photoAccessHelper.MediaAssetChangeRequest = new photoAccessHelper.MediaAssetChangeRequest(asset);
    assetChangeRequest.setEffectMode(photoAccessHelper.MovingPhotoEffectMode.LONG_EXPOSURE);
    // Ensure that the asset specified by fileUri exists.
    let imageFileUri = 'file://com.example.temptest/data/storage/el2/base/haps/entry/files/long_exposure.jpg';
    let videoFileUri = 'file://com.example.temptest/data/storage/el2/base/haps/entry/files/long_exposure.mp4';
    assetChangeRequest.addResource(photoAccessHelper.ResourceType.IMAGE_RESOURCE, imageFileUri);
    assetChangeRequest.addResource(photoAccessHelper.ResourceType.VIDEO_RESOURCE, videoFileUri);
    await phAccessHelper.applyChanges(assetChangeRequest);
    console.info('apply setEffectMode successfully');
  } catch (err) {
    console.error(`apply setEffectMode failed with error: ${err.code}, ${err.message}`);
  }
}

```

## setFavorite

```TypeScript
setFavorite(favoriteState: boolean): void
```

Set favorite state of the asset.

**Since:** 11

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| favoriteState | boolean | Yes | true: Put the asset into favorite album; false: Remove the asset from favorite album. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Called by non-system application |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14000011 | System inner fail |

**Example**

```TypeScript
import { dataSharePredicates } from '@kit.ArkData';
import { BusinessError } from '@kit.BasicServicesKit';

async function example(phAccessHelper: photoAccessHelper.PhotoAccessHelper) {
  console.info('setFavoriteDemo');
  let predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();
  let fetchOption: photoAccessHelper.FetchOptions = {
    fetchColumns: [],
    predicates: predicates
  };
  let fetchResult: photoAccessHelper.FetchResult<photoAccessHelper.PhotoAsset> = await phAccessHelper.getAssets(fetchOption);
  let asset = await fetchResult.getFirstObject();
  let assetChangeRequest: photoAccessHelper.MediaAssetChangeRequest = new photoAccessHelper.MediaAssetChangeRequest(asset);
  assetChangeRequest.setFavorite(true);
  phAccessHelper.applyChanges(assetChangeRequest).then(() => {
    console.info('apply setFavorite successfully');
  }).catch((err: BusinessError) => {
    console.error(`apply setFavorite failed with error: ${err.code}, ${err.message}`);
  });
}

```

## setHasAppLink

```TypeScript
setHasAppLink(hasAppLink: int): void
```

Set the AppLink state of this asset.

**Since:** 21

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| hasAppLink | int | Yes | AppLink state of the asset to set. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Called by non-system application |
| 23800301 | Internal system error.It is recommended to retry and check the logs. |
| 23800151 | The scenario parameter verification fails.Possible causes:  The input parameter is not within the valid range. |

**Example**

```TypeScript
import { photoAccessHelper } from '@kit.MediaLibraryKit';

enum linkType {
  NOT_DECODED = 0,
  LINK_NOT_EXIST = 1,
  LINK_EXIST = 2
}

async function example(asset: photoAccessHelper.PhotoAsset, hasAppLink: linkType, context: Context) {
    try {
      let phAccessHelper: photoAccessHelper.PhotoAccessHelper =
        photoAccessHelper.getPhotoAccessHelper(context);
      let assetChangeRequest: photoAccessHelper.MediaAssetChangeRequest =
        new photoAccessHelper.MediaAssetChangeRequest(asset);
      assetChangeRequest.setHasAppLink(hasAppLink);
      await phAccessHelper.applyChanges(assetChangeRequest);
    } catch (error) {
      console.error('set hasAppLink error: ' + error);
      return;
    }
}

```

## setHidden

```TypeScript
setHidden(hiddenState: boolean): void
```

Set hidden state of the asset.

**Since:** 11

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| hiddenState | boolean | Yes | true: Put the asset into hidden album; false: Recover the asset from hidden album. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Called by non-system application |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14000011 | System inner fail |

**Example**

```TypeScript
import { dataSharePredicates } from '@kit.ArkData';
import { BusinessError } from '@kit.BasicServicesKit';

async function example(phAccessHelper: photoAccessHelper.PhotoAccessHelper) {
  console.info('setHiddenDemo');
  let predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();
  let fetchOption: photoAccessHelper.FetchOptions = {
    fetchColumns: [],
    predicates: predicates
  };
  let fetchResult: photoAccessHelper.FetchResult<photoAccessHelper.PhotoAsset> = await phAccessHelper.getAssets(fetchOption);
  let asset = await fetchResult.getFirstObject();
  let assetChangeRequest: photoAccessHelper.MediaAssetChangeRequest = new photoAccessHelper.MediaAssetChangeRequest(asset);
  assetChangeRequest.setHidden(true);
  phAccessHelper.applyChanges(assetChangeRequest).then(() => {
    console.info('apply setHidden successfully');
  }).catch((err: BusinessError) => {
    console.error(`apply setHidden failed with error: ${err.code}, ${err.message}`);
  });
}

```

## setHiddenAttribute

```TypeScript
setHiddenAttribute(hiddenState: boolean): void
```

Set hidden state of asset.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| hiddenState | boolean | Yes | Hidden status of the asset. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Called by non-system application. |
| 23800151 | The scenario parameter verification fails. Possible causes:  1. The asset is not exist; |
| 23800301 | Internal system error. It is recommended to retry and check the logs.  Possible causes: 1. Database corrupted.2. The filesystem is abnormal.3. The IPC request timed out. |

**Example**

```TypeScript
import { dataSharePredicates } from '@kit.ArkData';

async function example(phAccessHelper: photoAccessHelper.PhotoAccessHelper) {
  console.info('setHiddenAttributeDemo');
  let predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();
  let fetchOption: photoAccessHelper.FetchOptions = {
    fetchColumns: [],
    predicates: predicates
  };
  try {
    let fetchResult: photoAccessHelper.FetchResult<photoAccessHelper.PhotoAsset> = await phAccessHelper.getAssets(fetchOption);
    let asset = await fetchResult.getFirstObject();
    let assetChangeRequest: photoAccessHelper.MediaAssetChangeRequest = new photoAccessHelper.MediaAssetChangeRequest(asset);
    assetChangeRequest.setHiddenAttribute(true);
    await phAccessHelper.applyChanges(assetChangeRequest);
    console.info('setHiddenAttribute successfully');
  } catch (err) {
    console.error(`setHiddenAttribute failed with error: ${err.code}, ${err.message}`);
  }
}

```

## setLocation

```TypeScript
setLocation(longitude: double, latitude: double): void
```

Sets location information.

**Since:** 11

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| longitude | double | Yes | Longitude. |
| latitude | double | Yes | Latitude. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Called by non-system application |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14000011 | System inner fail |

**Example**

```TypeScript
import { dataSharePredicates } from '@kit.ArkData';
import { BusinessError } from '@kit.BasicServicesKit';

async function example(phAccessHelper: photoAccessHelper.PhotoAccessHelper) {
  console.info('setLocationDemo');
  let predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();
  let fetchOption: photoAccessHelper.FetchOptions = {
    fetchColumns: [],
    predicates: predicates
  };
  let fetchResult: photoAccessHelper.FetchResult<photoAccessHelper.PhotoAsset> = await phAccessHelper.getAssets(fetchOption);
  let asset = await fetchResult.getFirstObject();
  let assetChangeRequest: photoAccessHelper.MediaAssetChangeRequest = new photoAccessHelper.MediaAssetChangeRequest(asset);
  assetChangeRequest.setLocation(120.52, 30.40);
  phAccessHelper.applyChanges(assetChangeRequest).then(() => {
    console.info('apply setLocation successfully');
  }).catch((err: BusinessError) => {
    console.error(`apply setLocation failed with error: ${err.code}, ${err.message}`);
  });
}

```

## setMovingPhotoVersion

```TypeScript
setMovingPhotoVersion(version: int): void
```

Saves MovingPhoto version which is used to determine what special efficacy is supported.

**Since:** 26.0.0

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| version | int | Yes | Motion picture version number |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Called by non-system application |
| 23800151 | Parameter error, only supports 9. |
| 23800301 | Internal system error. It is recommended to retry and check the logs.  Possible causes: 1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out. |

**Example**

```TypeScript
import { dataSharePredicates } from '@kit.ArkData';
import { BusinessError } from '@kit.BasicServicesKit';

async function example(phAccessHelper: photoAccessHelper.PhotoAccessHelper) {
  console.info('setMovingPhotoVersionDemo');
  let predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();
  let fetchOption: photoAccessHelper.FetchOptions = {
    fetchColumns: [],
    predicates: predicates
  };
  let fetchResult: photoAccessHelper.FetchResult<photoAccessHelper.PhotoAsset> = await phAccessHelper.getAssets(fetchOption);
  let asset = await fetchResult.getFirstObject();
  let assetChangeRequest: photoAccessHelper.MediaAssetChangeRequest = new photoAccessHelper.MediaAssetChangeRequest(asset);

  let movingPhotoVersion: number = 9;
  assetChangeRequest.setMovingPhotoVersion(movingPhotoVersion);
  phAccessHelper.applyChanges(assetChangeRequest).then(() => {
    console.info('apply setMovingPhotoVersion successfully');
  }).catch((err: BusinessError) => {
    console.error(`apply setMovingPhotoVersion failed with error: ${err.code}, ${err.message}`);
  });
}

```

## setOrientation

```TypeScript
setOrientation(orientation: int): void
```

Sets the orientation of this image.

**Since:** 15

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| orientation | int | Yes | Rotation angle of the image to set. The value can only be 0, 90, 180, or 270. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14000011 | Internal system error |

## setSupportedWatermarkType

```TypeScript
setSupportedWatermarkType(watermarkType: WatermarkType): void
```

Sets the watermark type supported by photos.

**Since:** 14

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| watermarkType | WatermarkType | Yes | Watermark type to set. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Called by non-system application |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14000011 | Internal system error |

**Example**

```TypeScript
import { dataSharePredicates } from '@kit.ArkData';

async function example(phAccessHelper: photoAccessHelper.PhotoAccessHelper) {
  console.info('setSupportedWatermarkTypeDemo');
  let predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();
  let fetchOption: photoAccessHelper.FetchOptions = {
    fetchColumns: [],
    predicates: predicates
  };
  try {
    let fetchResult: photoAccessHelper.FetchResult<photoAccessHelper.PhotoAsset> = await phAccessHelper.getAssets(fetchOption);
    let asset = await fetchResult.getFirstObject();
    let assetChangeRequest: photoAccessHelper.MediaAssetChangeRequest = new photoAccessHelper.MediaAssetChangeRequest(asset);
    assetChangeRequest.setSupportedWatermarkType(photoAccessHelper.WatermarkType.BRAND_COMMON);
    await phAccessHelper.applyChanges(assetChangeRequest);
    console.info('apply setSupportedWatermarkType successfully');
  } catch (err) {
    console.error(`apply setSupportedWatermarkType failed with error: ${err.code}, ${err.message}`);
  }
}

```

## setTitle

```TypeScript
setTitle(title: string): void
```

Sets the media asset title.

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| title | string | Yes | Title to set. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14000011 | System inner fail |

## setTitleByFile

```TypeScript
setTitleByFile(name: string): void
```

Set title by filemanger.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | asset name to set.  Should not contain extensions.  The file name contains 1 to 255 characters.  Invalid English characters, including:  . \ /: ? "'` \| {} []  Name-only is not allowed. Or.. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Called by non-system application. |
| 23800151 | The scenario parameter verification fails. Possible causes:  1. The asset is not exist; |
| 23800301 | Internal system error. It is recommended to retry and check the logs.  Possible causes:1. Database corrupted.2. The file system is abnormal.3. The IPC request timed out. |

**Example**

```TypeScript
import { dataSharePredicates } from '@kit.ArkData';

async function example(phAccessHelper: photoAccessHelper.PhotoAccessHelper) {
  let predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();
  let fetchOption: photoAccessHelper.FetchOptions = {
    fetchColumns: [],
    predicates: predicates
  };
  try {
    let fetchResult: photoAccessHelper.FetchResult<photoAccessHelper.PhotoAsset> = await phAccessHelper.getAssets(fetchOption);
    let asset = await fetchResult.getFirstObject();
    let assetChangeRequest: photoAccessHelper.MediaAssetChangeRequest = new photoAccessHelper.MediaAssetChangeRequest(asset);
    assetChangeRequest.setTitleByFile('new_file_name');
    await phAccessHelper.applyChanges(assetChangeRequest);
    console.info('setTitleByFile successfully');
  } catch (err) {
    console.error(`setTitleByFile failed with error: ${err.code}, ${err.message}`);
  }
}

```

## setUserComment

```TypeScript
setUserComment(userComment: string): void
```

Set user comment of the asset.

**Since:** 11

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| userComment | string | Yes | user comment info |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Called by non-system application |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14000011 | System inner fail |

**Example**

```TypeScript
import { dataSharePredicates } from '@kit.ArkData';
import { BusinessError } from '@kit.BasicServicesKit';

async function example(phAccessHelper: photoAccessHelper.PhotoAccessHelper) {
  console.info('setUserCommentDemo');
  let predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();
  let fetchOption: photoAccessHelper.FetchOptions = {
    fetchColumns: [],
    predicates: predicates
  };
  let fetchResult: photoAccessHelper.FetchResult<photoAccessHelper.PhotoAsset> = await phAccessHelper.getAssets(fetchOption);
  let asset = await fetchResult.getFirstObject();
  let assetChangeRequest: photoAccessHelper.MediaAssetChangeRequest = new photoAccessHelper.MediaAssetChangeRequest(asset);
  let userComment: string = 'test_set_user_comment';
  assetChangeRequest.setUserComment(userComment);
  phAccessHelper.applyChanges(assetChangeRequest).then(() => {
    console.info('apply setUserComment successfully');
  }).catch((err: BusinessError) => {
    console.error(`apply setUserComment failed with error: ${err.code}, ${err.message}`);
  });
}

```

## setVideoEnhancementAttr

```TypeScript
setVideoEnhancementAttr(videoEnhancementType: VideoEnhancementType, photoId: string): void
```

Set video enhancement attribute

**Since:** 13

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| videoEnhancementType | VideoEnhancementType | Yes | The type of video enhancement |
| photoId | string | Yes | The photo id of video |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Called by non-system application |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14000011 | Internal system error |
| 14000016 | Operation Not Support |

## comment

```TypeScript
readonly comment: string
```

A readonly member for type checking.

**Type:** string

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

