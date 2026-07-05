# PhotoAccessHelper

Helper functions to access photos and albums.

**Since:** 10

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## Modules to Import

```TypeScript
import { photoAccessHelper } from '@kit.MediaLibraryKit';
```

## acquireDebugDatabase

```TypeScript
acquireDebugDatabase(betaIssueId: string, betaScenario: string): Promise<Map<string, string>>
```

Start medialibrary database backup and wait for returning with backup information which only works on beta device.

**Since:** 23

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| betaIssueId | string | Yes | The beta issue id. |
| betaScenario | string | Yes | The beta scenario. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Map&lt;string, string>> | The returning with backup information,  which includes FILE_FD, FILE_NAME and FILE_SIZE. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Called by non-system application. |
| 23800151 | The scenario parameter verification fails. Possible causes:  1. The betaIssueId parameter is invalid, such as null, undefined or empty string.  2. The betaScenario parameter is invalid, such as null, undefined or empty string.  3. The same betaIssueId task is processing. |
| 23800201 | Unsupported operation type, this api only works on beta device. |
| 23800301 | Internal system error. You are advised to retry and check the logs.  Possible causes: 1. Database corrupted. 2. The file system is abnormal. 3. The IPC request timed out. |

## applyChanges

```TypeScript
applyChanges(mediaChangeRequest: MediaChangeRequest): Promise<void>
```

Applies media changes. This API uses a promise to return the result.

**Since:** 11

**Required permissions:** 

 ohos.permission.WRITE_IMAGEVIDEO

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mediaChangeRequest | MediaChangeRequest | Yes | Request for asset changes or album changes. |

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

## batchGetPhotoAssetParams

```TypeScript
batchGetPhotoAssetParams(assets: PhotoAsset[], members: string[]): PhotoAssetParams
```

Batchly obtain the values of PhotoAsset members.

**Since:** 21

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| assets | PhotoAsset[] | Yes | The array of PhotoAsset objects. |
| members | string[] | Yes | The array of member property names to get. |

**Return value:**

| Type | Description |
| --- | --- |
| PhotoAssetParams | Returns the objects in segments |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Called by non-system application |
| 23800151 | The scenario parameter verification fails.  Possible causes: The attribute to be queried does not exist in assets. |
| 23800104 | The provided member must be a property name of PhotoKey. |

**Example**

```TypeScript
import { dataSharePredicates } from '@kit.ArkData';
import { photoAccessHelper} from '@kit.MediaLibraryKit';

async function example(context: Context) {
  console.info('batchGetPhotoAssetParams');
  type PhotoAsset = photoAccessHelper.PhotoAsset;
  let phAccessHelper: photoAccessHelper.PhotoAccessHelper = photoAccessHelper.getPhotoAccessHelper(context);
  const FETCH_COLUMNS: string[] = [
    photoAccessHelper.PhotoKeys.SIZE,
    photoAccessHelper.PhotoKeys.DATE_ADDED,
    photoAccessHelper.PhotoKeys.DATE_MODIFIED,
    photoAccessHelper.PhotoKeys.PHOTO_TYPE,
    photoAccessHelper.PhotoKeys.TITLE,
    photoAccessHelper.PhotoKeys.DATE_MODIFIED_MS,
    photoAccessHelper.PhotoKeys.DURATION,
    photoAccessHelper.PhotoKeys.WIDTH,
    photoAccessHelper.PhotoKeys.HEIGHT,
    photoAccessHelper.PhotoKeys.DATE_TRASHED_MS,
    photoAccessHelper.PhotoKeys.POSITION,
    photoAccessHelper.PhotoKeys.DATE_TAKEN,
    'owner_album_id',
    'thumbnail_ready',
    'data',
  ];
  const keyToGet: string[] = [
    photoAccessHelper.PhotoKeys.URI,
    photoAccessHelper.PhotoKeys.DISPLAY_NAME,
    photoAccessHelper.PhotoKeys.DATE_ADDED,
    photoAccessHelper.PhotoKeys.SIZE,
    photoAccessHelper.PhotoKeys.DURATION,
    photoAccessHelper.PhotoKeys.WIDTH,
    photoAccessHelper.PhotoKeys.HEIGHT,
    'data',
    photoAccessHelper.PhotoKeys.THUMBNAIL_READY,];
  let predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();
  let fetchOptions: photoAccessHelper.FetchOptions = {
    fetchColumns: FETCH_COLUMNS,
    predicates: predicates
  };
  let albumPredicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();
  let albumFetchOptions: photoAccessHelper.FetchOptions = {
    fetchColumns: [],
    predicates: albumPredicates
  }
  let fetchResult: photoAccessHelper.FetchResult<photoAccessHelper.Album> = await phAccessHelper.
  getAlbums(photoAccessHelper.AlbumType.USER, photoAccessHelper.AlbumSubtype.USER_GENERIC, albumFetchOptions);
  let album: photoAccessHelper.Album = await fetchResult.getFirstObject();
  let photoAssetsFetchResult: photoAccessHelper.FetchResult<PhotoAsset> = await album.getAssets(fetchOptions);
  let photoAssets: PhotoAsset[] = await photoAssetsFetchResult.getAllObjects();
  const batchParamOfPhotoAssets: photoAccessHelper.PhotoAssetParams =
   phAccessHelper.batchGetPhotoAssetParams(photoAssets, keyToGet);
  console.info(`batchGetPhotoAssetParams success, the length is ${batchParamOfPhotoAssets.length}`);
}

```

## cancelPhotoUriPermission

```TypeScript
cancelPhotoUriPermission(tokenId: long, uri: string, photoPermissionType: PhotoPermissionType): Promise<int>
```

Cancels the permission for accessing an URI from an application. This API uses a promise to return the result.

**Since:** 19

**Required permissions:** 

 ohos.permission.READ_IMAGEVIDEO

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| tokenId | long | Yes | ID of the target application. |
| uri | string | Yes | URI of the media asset. |
| photoPermissionType | PhotoPermissionType | Yes | Permission type. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;int> | Returns result of cancel permission |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied |
| 202 | Called by non-system application |
| 13900020 | Invalid argument. Possible causes: 1. Incorrect uri format;  2. The value of photoPermissionType or hideSensitiveType is out of range. |
| 14000011 | Internal system error |

**Example**

```TypeScript
async function example(phAccessHelper: photoAccessHelper.PhotoAccessHelper) {
  console.info('cancelPhotoUriPermissionDemo');

  try {
    let tokenId = 502334412;
    let result = await phAccessHelper.cancelPhotoUriPermission(tokenId,
        'file://media/Photo/11/IMG_datetime_0001/displayName.jpg',
        photoAccessHelper.PhotoPermissionType.TEMPORARY_READ_IMAGEVIDEO);

    console.info('cancelPhotoUriPermission success, result=' + result);
  } catch (err) {
    console.error('cancelPhotoUriPermission failed, error=' + err);
  }
}

```

## canPerformDeepOptimizeSpace

```TypeScript
canPerformDeepOptimizeSpace(): Promise<boolean>
```

Whether deep storage space optimization can be performed.

**Since:** 26.0.0

**Required permissions:** 

 ohos.permission.READ_IMAGEVIDEO

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean> | Promise used to return the result. The value true indicates  [startDeepOptimizeSpace()]photoAccessHelper.startDeepOptimizeSpace can be invoked,  false indicates that [startDeepOptimizeSpace()]photoAccessHelper.startDeepOptimizeSpace  cannot be invoked. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Called by non-system application. |
| 23800301 | Internal system error. It is recommended to retry and check the logs.  Possible causes:  1. Database corrupted;  2. The file system is abnormal;  3. The IPC request timed out. |

**Example**

```TypeScript
async function example(phAccessHelper: photoAccessHelper.PhotoAccessHelper) {
  try {
    let canPerform: boolean = await phAccessHelper.canPerformDeepOptimizeSpace();
    console.info(`canPerformDeepOptimizeSpace result: ${canPerform}`);
  } catch (err) {
    console.error(`canPerformDeepOptimizeSpace failed with error: ${err.code}, ${err.message}`);
  }
}

```

## checkPhotoUrisReadPermission

```TypeScript
checkPhotoUrisReadPermission(uris: string[]): Promise<Map<string, MediaAssetPermissionState>>
```

Query whether the assets exist and whether the invoker has read permission on the assets without permission.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uris | string[] | Yes | Asset URI list. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Map&lt;string, MediaAssetPermissionState>> | - Returns  whether the assets exist and whether the invoker has read permission on the assets without permission. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 23800151 | Scenario-specific parameters are incorrect. Possible causes are as follows:  1. The length of the input parameter queue is greater than 500.  2. The input parameter is null or undefined. |
| 23800301 | Internal system error. It is recommended to retry and check the logs.  Possible causes: 1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out. |

## cloneAssetsByPath

```TypeScript
cloneAssetsByPath(assets: string[], target: Album, option?: BatchOperationOptions): Promise<string[]>
```

clone assets of filemanager to Album.

**Since:** 26.0.0

**Required permissions:** 

 ohos.permission.WRITE_IMAGEVIDEO

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| assets | string[] | Yes | Assets path to be cloned. |
| target | Album | Yes | Target Album. |
| option | BatchOperationOptions | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;string[]> | Returns successed assets URI. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied |
| 202 | Called by non-system application. |
| 23800151 | The scenario parameter verification fails. Possible causes:  1. Asset to be cloned has been deleted or hidden;  2. Asset to be cloned is cloud pictures, which can not be cloned;  3. The Target Album does not exist.  4. Insufficient system space.  5. Automatic renaming is not supported. |
| 23800301 | Internal system error. It is recommended to retry and check the logs.  Possible causes: 1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out. |

**Example**

```TypeScript
async function example(phAccessHelper: photoAccessHelper.PhotoAccessHelper) {
  try {
    let assets: Array<string> = ['/Docs/Download/test.jpg'];
    let albumFetchResult: photoAccessHelper.FetchResult<photoAccessHelper.Album> = await phAccessHelper.getAlbums(photoAccessHelper.AlbumType.USER, photoAccessHelper.AlbumSubtype.USER_GENERIC);
    let target: photoAccessHelper.Album = await albumFetchResult.getFirstObject();
    let clonedUris: Array<string> = await phAccessHelper.cloneAssetsByPath(assets, target);
    console.info(`cloneAssetsByPath success, count: ${clonedUris.length}`);
  } catch (err) {
    console.error(`cloneAssetsByPath failed with error: ${err.code}, ${err.message}`);
  }
}

```

## cloneToAlbum

```TypeScript
cloneToAlbum(assets: PhotoAsset[], target: Album,option?: BatchOperationOptions): Promise<PhotoAsset[]>
```

clone assets to Album.

**Since:** 26.0.0

**Required permissions:** 

 ohos.permission.WRITE_IMAGEVIDEO

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| assets | PhotoAsset[] | Yes | Assets to be cloned. |
| target | Album | Yes | Target Album. |
| option | BatchOperationOptions | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;PhotoAsset[]> | Returns list of successful assets. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied |
| 202 | Called by non-system application. |
| 23800151 | The scenario parameter verification fails. Possible causes:  1. Asset to be cloned has been deleted or hidden;  2. Asset to be cloned is cloud pictures, which can not be cloned;  3. The Target Album does not exist.  4. Insufficient system space.  5. Automatic renaming is not supported. |
| 23800301 | Internal system error. It is recommended to retry and check the logs.  Possible causes: 1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out. |

**Example**

```TypeScript
import { dataSharePredicates } from '@kit.ArkData';

async function example(phAccessHelper: photoAccessHelper.PhotoAccessHelper) {
  try {
    let predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();
    let fetchOption: photoAccessHelper.FetchOptions = {
      fetchColumns: [],
      predicates: predicates
    };
    let assetFetchResult: photoAccessHelper.FetchResult<photoAccessHelper.PhotoAsset> = await phAccessHelper.getAssets(fetchOption);
    let assets: Array<photoAccessHelper.PhotoAsset> = await assetFetchResult.getAllObjects();
    let albumFetchResult: photoAccessHelper.FetchResult<photoAccessHelper.Album> = await phAccessHelper.getAlbums(photoAccessHelper.AlbumType.USER, photoAccessHelper.AlbumSubtype.USER_GENERIC);
    let target: photoAccessHelper.Album = await albumFetchResult.getFirstObject();
    let options: photoAccessHelper.BatchOperationOptions = {
      mode: 0
    };
    let clonedAssets: Array<photoAccessHelper.PhotoAsset> = await phAccessHelper.cloneToAlbum(assets, target, options);
    console.info(`cloneToAlbum success, count: ${clonedAssets.length}`);
  } catch (err) {
    console.error(`cloneToAlbum failed with error: ${err.code}, ${err.message}`);
  }
}

```

## cloneToDir

```TypeScript
cloneToDir(assets: string[], target: string, option?: BatchOperationOptions): Promise<string[]>
```

clone assets of medialibrary sandbox to directory of filemanager.

**Since:** 26.0.0

**Required permissions:** 

 ohos.permission.WRITE_IMAGEVIDEO

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| assets | string[] | Yes | Assets uri to be cloned. |
| target | string | Yes | Target directory of filemanager. |
| option | BatchOperationOptions | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;string[]> | Returns successed assets path. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied |
| 202 | Called by non-system application. |
| 23800151 | The scenario parameter verification fails. Possible causes:  1. Asset to be cloned has been deleted or hidden;  2. Asset to be cloned is cloud pictures, which can not be cloned;  3. The Target Album does not exist.  4. Insufficient system space.  5. Automatic renaming is not supported. |
| 23800301 | Internal system error. It is recommended to retry and check the logs.  Possible causes: 1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out. |

**Example**

```TypeScript
import { dataSharePredicates } from '@kit.ArkData';

async function example(phAccessHelper: photoAccessHelper.PhotoAccessHelper) {
  try {
    let predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();
    let fetchOption: photoAccessHelper.FetchOptions = {
      fetchColumns: [],
      predicates: predicates
    };
    let assetFetchResult: photoAccessHelper.FetchResult<photoAccessHelper.PhotoAsset> = await phAccessHelper.getAssets(fetchOption);
    let assets: Array<photoAccessHelper.PhotoAsset> = await assetFetchResult.getAllObjects();
    let assetUris: Array<string> = assets.map((item) => item.uri);
    let target: string = '/Docs/Download';
    let clonedPaths: Array<string> = await phAccessHelper.cloneToDir(assetUris, target);
    console.info(`cloneToDir success, count: ${clonedPaths.length}`);
  } catch (err) {
    console.error(`cloneToDir failed with error: ${err.code}, ${err.message}`);
  }
}

```

## convertToAsset

```TypeScript
convertToAsset(path: string): Promise<PhotoAsset>
```

Convert to PhotoAsset from path of filemanagerr.

**Since:** 26.0.0

**Required permissions:** 

 ohos.permission.WRITE_IMAGEVIDEO

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| path | string | Yes |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;PhotoAsset> | Returns successed asset. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied |
| 202 | Called by non-system application. |
| 23800151 | The scenario parameter verification fails. Possible causes:  1. Converted an image after filtering into an asset object;  2.File to be converted is not exist;  3. Only images in the public directory of filemanager can be converted. |
| 23800301 | Internalsystem error. It is recommended to retry and check the logs.  Possible causes: 1. Database corrupted; 2.The file system is abnormal; 3. The IPC request timed out. |

**Example**

```TypeScript
async function example(phAccessHelper: photoAccessHelper.PhotoAccessHelper) {
  try {
    let path: string = '/Docs/Download/test.jpg';
    let photoAsset: photoAccessHelper.PhotoAsset = await phAccessHelper.convertToAsset(path);
    console.info(`convertToAsset success, asset uri: ${photoAsset.uri}`);
  } catch (err) {
    console.error(`convertToAsset failed with error: ${err.code}, ${err.message}`);
  }
}

```

## createAlbum

```TypeScript
createAlbum(name: string, callback: AsyncCallback<Album>): void
```

Creates an album. This API uses an asynchronous callback to return the result.

**Since:** 10

**Deprecated since:** 11

**Substitute:** photoAccessHelper.MediaAlbumChangeRequest#createAlbumRequest

**Required permissions:** 

 ohos.permission.WRITE_IMAGEVIDEO

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | Name of the album to create. |
| callback | AsyncCallback&lt;Album> | Yes | Callback used to return the created album instance. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Called by non-system application. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 13900012 | Permission denied |
| 13900015 | The file name already exists. |
| 13900020 | Invalid argument |
| 14000011 | System inner fail |

**Example**

```TypeScript
async function example(phAccessHelper: photoAccessHelper.PhotoAccessHelper) {
  console.info('createAlbumDemo');
  let albumName: string = 'newAlbumName' + new Date().getTime();
  phAccessHelper.createAlbum(albumName, (err, album) => {
    if (err) {
      console.error(`createAlbumCallback failed with err: ${err.code}, ${err.message}`);
      return;
    }
    console.info('createAlbumCallback successfully, album: ' + album.albumName + ' album uri: ' + album.albumUri);
  });
}

```

## createAlbum

```TypeScript
createAlbum(name: string): Promise<Album>
```

Creates an album. This API uses a promise to return the result.

**Since:** 10

**Deprecated since:** 11

**Substitute:** photoAccessHelper.MediaAlbumChangeRequest#createAlbumRequest

**Required permissions:** 

 ohos.permission.WRITE_IMAGEVIDEO

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | Name of the album to create. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Album> | Returns the instance of newly created Album |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Called by non-system application. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 13900012 | Permission denied |
| 13900015 | The file name already exists. |
| 13900020 | Invalid argument |
| 14000011 | System inner fail |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

async function example(phAccessHelper: photoAccessHelper.PhotoAccessHelper) {
  console.info('createAlbumDemo');
  let albumName: string = 'newAlbumName' + new Date().getTime();
  phAccessHelper.createAlbum(albumName).then((album) => {
    console.info('createAlbumPromise successfully, album: ' + album.albumName + ' album uri: ' + album.albumUri);
  }).catch((err: BusinessError) => {
    console.error(`createAlbumPromise failed with err: ${err.code}, ${err.message}`);
  });
}

```

## createAsset

```TypeScript
createAsset(displayName: string, callback: AsyncCallback<PhotoAsset>): void
```

Creates an image or video asset with the specified file name. This API uses an asynchronous callback to return the result.

**Since:** 10

**Required permissions:** 

 ohos.permission.WRITE_IMAGEVIDEO

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| displayName | string | Yes | File name of the image or video to create. |
| callback | AsyncCallback&lt;PhotoAsset> | Yes | File name of the image or video to create. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Called by non-system application. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 13900012 | Permission denied |
| 13900020 | Invalid argument |
| 14000001 | Invalid display name |
| 14000011 | System inner fail |

**Example**

```TypeScript
async function example(phAccessHelper: photoAccessHelper.PhotoAccessHelper) {
  console.info('createAssetDemo');
  let testFileName: string = 'testFile' + Date.now() + '.jpg';
  phAccessHelper.createAsset(testFileName, (err, photoAsset) => {
    if (photoAsset !== undefined) {
      console.info('createAsset file displayName' + photoAsset.displayName);
      console.info('createAsset successfully');
    } else {
      console.error(`createAsset failed, error: ${err.code}, ${err.message}`);
    }
  });
}

```

## createAsset

```TypeScript
createAsset(displayName: string): Promise<PhotoAsset>
```

Creates an image or video asset with the specified file name. This API uses a promise to return the result.

**Since:** 10

**Required permissions:** 

 ohos.permission.WRITE_IMAGEVIDEO

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| displayName | string | Yes | File name of the image or video to create. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;PhotoAsset> | Returns the newly created asset |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Called by non-system application. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 13900012 | Permission denied |
| 13900020 | Invalid argument |
| 14000001 | Invalid display name |
| 14000011 | System inner fail |

**Example**

```TypeScript
async function example(phAccessHelper: photoAccessHelper.PhotoAccessHelper) {
  console.info('createAssetDemo');
  try {
    let testFileName: string = 'testFile' + Date.now() + '.jpg';
    let photoAsset: photoAccessHelper.PhotoAsset = await phAccessHelper.createAsset(testFileName);
    console.info('createAsset file displayName' + photoAsset.displayName);
    console.info('createAsset successfully');
  } catch (err) {
    console.error(`createAsset failed, error: ${err.code}, ${err.message}`);
  }
}

```

## createAsset

```TypeScript
createAsset(displayName: string, options: PhotoCreateOptions): Promise<PhotoAsset>
```

Creates an image or video asset with the specified file name and options. This API uses a promise to return the result.

**Since:** 10

**Required permissions:** 

 ohos.permission.WRITE_IMAGEVIDEO

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| displayName | string | Yes | File name of the image or video to create. |
| options | PhotoCreateOptions | Yes | Options for creating an image or video asset. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;PhotoAsset> | Returns the newly created asset |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Called by non-system application. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 13900012 | Permission denied |
| 13900020 | Invalid argument |
| 14000001 | Invalid display name |
| 14000011 | System inner fail |

**Example**

```TypeScript
async function example(phAccessHelper: photoAccessHelper.PhotoAccessHelper) {
  console.info('createAssetDemo');
  try {
    let testFileName:string = 'testFile' + Date.now() + '.jpg';
    let createOption: photoAccessHelper.PhotoCreateOptions = {
      subtype: photoAccessHelper.PhotoSubtype.DEFAULT
    }
    let photoAsset: photoAccessHelper.PhotoAsset = await phAccessHelper.createAsset(testFileName, createOption);
    console.info('createAsset file displayName' + photoAsset.displayName);
    console.info('createAsset successfully');
  } catch (err) {
    console.error(`createAsset failed, error: ${err.code}, ${err.message}`);
  }
}

```

## createAsset

```TypeScript
createAsset(displayName: string, options: PhotoCreateOptions, callback: AsyncCallback<PhotoAsset>): void
```

Creates an image or video asset with the specified file name and options. This API uses an asynchronous callback to return the result.

**Since:** 10

**Required permissions:** 

 ohos.permission.WRITE_IMAGEVIDEO

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| displayName | string | Yes | File name of the image or video to create. |
| options | PhotoCreateOptions | Yes | Options for creating an image or video asset. |
| callback | AsyncCallback&lt;PhotoAsset> | Yes | Callback used to return the image or video created. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Called by non-system application. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 13900012 | Permission denied |
| 13900020 | Invalid argument |
| 14000001 | Invalid display name |
| 14000011 | System inner fail |

**Example**

```TypeScript
async function example(phAccessHelper: photoAccessHelper.PhotoAccessHelper) {
  console.info('createAssetDemo');
  let testFileName: string = 'testFile' + Date.now() + '.jpg';
  let createOption: photoAccessHelper.PhotoCreateOptions = {
    subtype: photoAccessHelper.PhotoSubtype.DEFAULT
  }
  phAccessHelper.createAsset(testFileName, createOption, (err, photoAsset) => {
    if (photoAsset !== undefined) {
      console.info('createAsset file displayName' + photoAsset.displayName);
      console.info('createAsset successfully');
    } else {
      console.error(`createAsset failed, error: ${err.code}, ${err.message}`);
    }
  });
}

```

## createAsset

```TypeScript
createAsset(photoType: PhotoType, extension: string, options: CreateOptions, callback: AsyncCallback<string>): void
```

Creates an image or video asset with the specified file type, file name extension, and options. This API uses an asynchronous callback to return the result.

**Since:** 22

**Required permissions:** 

 ohos.permission.WRITE_IMAGEVIDEO

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| photoType | PhotoType | Yes | Type of the file to create, which can be IMAGE or VIDEO. |
| extension | string | Yes | File name extension, for example, 'jpg'. |
| options | CreateOptions | Yes | Options for creating the image or video asset, for example, {title: 'testPhoto'}. |
| callback | AsyncCallback&lt;string> | Yes | Callback used to return the URI of the created image or video asset. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 201 | Permission denied |
| 13900020 | Invalid argument |
| 14000011 | System inner fail |

## createAsset

```TypeScript
createAsset(photoType: PhotoType, extension: string, callback: AsyncCallback<string>): void
```

Creates an image or video asset with the specified file type and file name extension. This API uses an asynchronous callback to return the result.

**Since:** 22

**Required permissions:** 

 ohos.permission.WRITE_IMAGEVIDEO

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| photoType | PhotoType | Yes | Type of the file to create, which can be IMAGE or VIDEO. |
| extension | string | Yes | File name extension, for example, 'jpg'. |
| callback | AsyncCallback&lt;string> | Yes | Callback used to return the URI of the created image or video asset. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 201 | Permission denied |
| 13900020 | Invalid argument |
| 14000011 | System inner fail |

## createAsset

```TypeScript
createAsset(photoType: PhotoType, extension: string, options?: CreateOptions): Promise<string>
```

Creates an image or video asset with the specified file type, file name extension, and options. This API uses a promise to return the result.

**Since:** 22

**Required permissions:** 

 ohos.permission.WRITE_IMAGEVIDEO

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| photoType | PhotoType | Yes | Type of the file to create, which can be IMAGE or VIDEO. |
| extension | string | Yes | File name extension, for example, 'jpg'. |
| options | CreateOptions | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;string> | Returns the uri of the newly created asset |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 201 | Permission denied |
| 13900020 | Invalid argument |
| 14000011 | System inner fail |

## createAssetsForApp

```TypeScript
createAssetsForApp(bundleName: string, appName: string, tokenId: long, photoCreationConfigs: Array<PhotoCreationConfig>): Promise<Array<string>>
```

Create assets and grant save permission to the app which called the save dialog.

**Since:** 19

**Required permissions:** 

 ohos.permission.WRITE_IMAGEVIDEO

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | BundleName of the application which called the save dialog |
| appName | string | Yes | AppName of the application which called the save dialog |
| tokenId | long | Yes | TokenId of the application which called the save dialog |
| photoCreationConfigs | Array&lt;PhotoCreationConfig> | Yes | List of the photo asset creation configs |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;string>> | - Returns the media library file uri list to application which has been authorized |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied |
| 202 | Called by non-system application |
| 13900020 | Invalid argument. Possible causes: 1. The photoCreationConfigs is empty;  2. Incorrect photoCreationConfigs format. |
| 14000011 | Internal system error |

**Example**

```TypeScript
async function example(phAccessHelper: photoAccessHelper.PhotoAccessHelper) {
  console.info('createAssetsForAppDemo.');

  try {
    let bundleName: string = 'testBundleName';
    let appName: string = 'testAppName';
    let tokenId: number = 537197950;
    let photoCreationConfigs: Array<photoAccessHelper.PhotoCreationConfig> = [
      {
        title: 'test',
        fileNameExtension: 'jpg',
        photoType: photoAccessHelper.PhotoType.IMAGE,
        subtype: photoAccessHelper.PhotoSubtype.DEFAULT,
      }
    ];
    let desFileUris: Array<string> = await phAccessHelper.createAssetsForApp(bundleName, appName, tokenId, photoCreationConfigs);
    console.info('createAssetsForApp success, data is ' + desFileUris);
  } catch (err) {
    console.error(`createAssetsForApp failed with error: ${err.code}, ${err.message}`);
  }
}

```

## createAssetsForAppWithAlbum

```TypeScript
createAssetsForAppWithAlbum(source: PhotoCreationSource, albumUri: string, isAuthorized: boolean,
      photoCreationConfigs: Array<PhotoCreationConfig>): Promise<Array<string>>
```

Creates assets for the current application or other applications in the specified source or user album. This API uses a promise to return the result.

**Since:** 18

**Required permissions:** 

 ohos.permission.WRITE_IMAGEVIDEO

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| source | PhotoCreationSource | Yes | Application information provided to create assets on behalf of the application. |
| albumUri | string | Yes | URI of the album. |
| isAuthorized | boolean | Yes | Whether to authorize other applications.  The value true means that the permission is authorized, and false means the opposite. |
| photoCreationConfigs | Array&lt;PhotoCreationConfig> | Yes | Configuration for creating (saving) the media assets in the media library. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;string>> | - Returns the media library file uri list to application which has been authorized |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied |
| 202 | Called by non-system application |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14000011 | Internal system error |

**Example**

```TypeScript
async function example(phAccessHelper: photoAccessHelper.PhotoAccessHelper) {
  console.info('createAssetsForAppWithAlbumDemo.');

  try {
    let source: photoAccessHelper.PhotoCreationSource = {
      bundleName: 'testBundleName',
      appName: 'testAppName',
      appId: 'testAppId',
      tokenId: 537197950,
    }
    let albumUri: string = 'file://media/PhotoAlbum/10';
    let isAuthorized: boolean = true;
    let photoCreationConfigs: Array<photoAccessHelper.PhotoCreationConfig> = [
      {
        title: 'test',
        fileNameExtension: 'jpg',
        photoType: photoAccessHelper.PhotoType.IMAGE,
        subtype: photoAccessHelper.PhotoSubtype.DEFAULT,
      }
    ];
    let desFileUris: Array<string> = await phAccessHelper.createAssetsForAppWithAlbum(source, albumUri, isAuthorized, photoCreationConfigs);
    console.info('createAssetsForAppWithAlbum success, data is ' + desFileUris);
  } catch (err) {
    console.error(`createAssetsForAppWithAlbum failed with error: ${err.code}, ${err.message}`);
  }
}

```

## createAssetsForAppWithMode

```TypeScript
createAssetsForAppWithMode(
      bundleName: string,
      appName: string,
      appId: string,
      tokenId: long,
      authorizationMode: AuthorizationMode,
      photoCreationConfigs: Array<PhotoCreationConfig>
    ): Promise<Array<string>>
```

Creates assets with a temporary permission. This API uses a promise to return the result.

**Since:** 12

**Required permissions:** 

 ohos.permission.WRITE_IMAGEVIDEO

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | Bundle name of the target application. |
| appName | string | Yes | Name of the target application. |
| appId | string | Yes | ID of the target application. |
| tokenId | long | Yes | Unique identifier for the temporary authorization. |
| authorizationMode | AuthorizationMode | Yes | Mode of authorization |
| photoCreationConfigs | Array&lt;PhotoCreationConfig> | Yes | Configuration for creating (saving) the media assets in the media library. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;string>> | - Returns the media library file uri list to application which has been authorized |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied |
| 202 | Called by non-system application |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14000011 | Internal system error |

**Example**

```TypeScript
async function example(phAccessHelper: photoAccessHelper.PhotoAccessHelper) {
  console.info('createAssetsForAppWithModeDemo.');

  try {
    let photoCreationConfigs: Array<photoAccessHelper.PhotoCreationConfig> = [
      {
        title: '123456',
        fileNameExtension: 'jpg',
        photoType: photoAccessHelper.PhotoType.IMAGE,
        subtype: photoAccessHelper.PhotoSubtype.DEFAULT,
      }
    ];
    let bundleName: string = 'testBundleName';
    let appName: string = 'testAppName';
    let appId: string = 'testAppId';
    let tokenId: number = 537197950;
    let authorizationMode: photoAccessHelper.AuthorizationMode = photoAccessHelper.AuthorizationMode.SHORT_TIME_AUTHORIZATION;
    let result: Array<string> = await phAccessHelper.createAssetsForAppWithMode(bundleName, appName, appId, tokenId, authorizationMode, photoCreationConfigs);
    console.info(`result: ${JSON.stringify(result)}`);
    console.info('Photo createAssetsForAppWithMode success.');
  } catch (err) {
    console.error(`createAssetsForAppWithMode failed with error: ${err.code}, ${err.message}`);
  }
}

```

## createAssetsWithAlbum

```TypeScript
createAssetsWithAlbum(
      creationSettings: CreationSetting[],
      isRealTimeThumb: boolean,
      albumUri?: string): Promise<string[]>
```

Batch create assets, which also support to choose whether specifying an album and whether generating thumbnails in real time.

**Since:** 26.0.0

**Required permissions:** 

 ohos.permission.WRITE_IMAGEVIDEO

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| creationSettings | CreationSetting[] | Yes | List of the photo asset creation settings. |
| isRealTimeThumb | boolean | Yes | Option indicating whether to generate thumbnails in real time. |
| albumUri | string | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;string[]> | - Returns the asset uris, which is null when creation failed. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied |
| 202 | Called by non-system application. |
| 23800151 | Scenario-specific parameters are incorrect. Possible causes are as follows:  1. The input parameter creationSettings is null or undefined.  2. The array length of creationSettings is bigger than 500. |
| 23800301 | Internal system error. It is recommended to retry and check the logs.  Possible causes:  1. Database corrupted;  2. The file system is abnormal;  3. The IPC request timed out. |

**Example**

```TypeScript
async function example(phAccessHelper: photoAccessHelper.PhotoAccessHelper) {
  try {
    // Construct creation parameters.
    let creationSettings: Array<photoAccessHelper.CreationSetting> = [
      {
        title: 'test',
        fileNameExtension: 'jpg',
        photoType: photoAccessHelper.PhotoType.IMAGE
      }
    ];
    // Do not generate a thumbnail in real time when an asset is created.
    let isRealTimeThumb: boolean = false;
    // Specify the album URI.
    let albumUri: string = 'file://media/PhotoAlbum/10';
    // Call the API to create an asset.
    let result: Array<string> = await phAccessHelper.createAssetsWithAlbum(
      creationSettings,
      isRealTimeThumb,
      albumUri
    );
    console.info('Succeeded in creating assets with album, uri is ' + result);
  } catch (err) {
    console.error(`createAssetsWithAlbum failed with error: ${err.code}, ${err.message}`);
  }
}

```

## createAssetWithShortTermPermission

```TypeScript
createAssetWithShortTermPermission(photoCreationConfig: PhotoCreationConfig): Promise<string>
```

Create asset and grant short term permission to the application.

**Since:** 12

**Required permissions:** 

 ohos.permission.SHORT_TERM_WRITE_IMAGEVIDEO

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| photoCreationConfig | PhotoCreationConfig | Yes | photo asset creation configs |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;string> | - Returns the media library file uri to application which has been authorized |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14000011 | Internal system error |

## createAssetWithShortTermPermissionEx

```TypeScript
createAssetWithShortTermPermissionEx(creationSetting: CreationSetting): Promise<string>
```

Create asset and grant short term permission to the application.

**Since:** 23

**Required permissions:** 

 ohos.permission.SHORT_TERM_WRITE_IMAGEVIDEO

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| creationSetting | CreationSetting | Yes | photo asset creation settings |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;string> | - Returns the media library file uri to application which has been authorized |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied |
| 14000011 | Internal system error |

## createDeleteRequest

```TypeScript
createDeleteRequest(uriList: Array<string>, callback: AsyncCallback<void>): void
```

Creates a dialog box for deleting media files. This API uses an asynchronous callback to return the result. The deleted media files are moved to the trash.

**Since:** 10

**Deprecated since:** 11

**Substitute:** photoAccessHelper.MediaAssetChangeRequest#deleteAssets

**Required permissions:** 

 ohos.permission.WRITE_IMAGEVIDEO

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uriList | Array&lt;string> | Yes | URIs of the media files to delete. A maximum of 300 media files can be deleted. |
| callback | AsyncCallback&lt;void> | Yes | Callback that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 13900012 | Permission denied |
| 13900020 | Invalid argument |
| 14000011 | System inner fail |

## createDeleteRequest

```TypeScript
createDeleteRequest(uriList: Array<string>): Promise<void>
```

Creates a dialog box for deleting media files. This API uses a promise to return the result. The deleted media files are moved to the trash.

**Since:** 10

**Deprecated since:** 11

**Substitute:** photoAccessHelper.MediaAssetChangeRequest#deleteAssets

**Required permissions:** 

 ohos.permission.WRITE_IMAGEVIDEO

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uriList | Array&lt;string> | Yes | URIs of the media files to delete. A maximum of 300 media files can be deleted. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | - Returns void |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 13900012 | Permission denied |
| 13900020 | Invalid argument |
| 14000011 | System inner fail |

## createPhotoAsset

```TypeScript
createPhotoAsset(photoType: PhotoType, extension: string, title?: string): Promise<string>
```

Creates an image or video asset with the specified file type, file name extension, and title.

**Since:** 23

**Required permissions:** 

 ohos.permission.WRITE_IMAGEVIDEO

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| photoType | PhotoType | Yes | Type of the file to create, which can be IMAGE or VIDEO. |
| extension | string | Yes | File name extension, for example, 'jpg'. |
| title | string | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;string> | Returns the uri of the newly created asset |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied |
| 23800151 | The scenario parameter verification fails. Possible causes:  1. The extension format is unsupported  2. Title contains unsupported character, such as . .. \ / :  ? " ' ` \| { } [ ]  3. The title is an empty string  4. The total length of title and extension is more than 255 |
| 23800301 | Internal system error. It is recommended to retry and check the logs.  Possible causes: 1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out. |

## deleteAlbums

```TypeScript
deleteAlbums(albums: Array<Album>, callback: AsyncCallback<void>): void
```

Deletes albums. This API uses an asynchronous callback to return the result. Ensure that the albums to be deleted exist. Only user albums can be deleted.

**Since:** 10

**Deprecated since:** 11

**Substitute:** photoAccessHelper.MediaAlbumChangeRequest#deleteAlbums

**Required permissions:** 

 ohos.permission.WRITE_IMAGEVIDEO

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| albums | Array&lt;Album> | Yes | Albums to delete. |
| callback | AsyncCallback&lt;void> | Yes | Callback that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Called by non-system application. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 13900012 | Permission denied |
| 13900020 | Invalid argument |
| 14000011 | System inner fail |

**Example**

```TypeScript
import { dataSharePredicates } from '@kit.ArkData';

async function example(phAccessHelper: photoAccessHelper.PhotoAccessHelper) {
  // Delete the album named newAlbumName.
  console.info('deleteAlbumsDemo');
  let predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();
  predicates.equalTo('album_name', 'newAlbumName');
  let fetchOptions: photoAccessHelper.FetchOptions = {
    fetchColumns: [],
    predicates: predicates
  };
  let fetchResult: photoAccessHelper.FetchResult<photoAccessHelper.Album> = await phAccessHelper.getAlbums(photoAccessHelper.AlbumType.USER, photoAccessHelper.AlbumSubtype.USER_GENERIC, fetchOptions);
  let album: photoAccessHelper.Album = await fetchResult.getFirstObject();
  phAccessHelper.deleteAlbums([album], (err) => {
    if (err) {
      console.error(`deletePhotoAlbumsCallback failed with err: ${err.code}, ${err.message}`);
      return;
    }
    console.info('deletePhotoAlbumsCallback successfully');
  });
  fetchResult.close();
}

```

## deleteAlbums

```TypeScript
deleteAlbums(albums: Array<Album>): Promise<void>
```

Deletes albums. This API uses a promise to return the result. Ensure that the albums to be deleted exist. Only user albums can be deleted.

**Since:** 10

**Deprecated since:** 11

**Substitute:** photoAccessHelper.MediaAlbumChangeRequest#deleteAlbums

**Required permissions:** 

 ohos.permission.WRITE_IMAGEVIDEO

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| albums | Array&lt;Album> | Yes | Albums to delete. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Returns void |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Called by non-system application. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 13900012 | Permission denied |
| 13900020 | Invalid argument |
| 14000011 | System inner fail |

**Example**

```TypeScript
import { dataSharePredicates } from '@kit.ArkData';
import { BusinessError } from '@kit.BasicServicesKit';

async function example(phAccessHelper: photoAccessHelper.PhotoAccessHelper) {
  // Delete the album named newAlbumName.
  console.info('deleteAlbumsDemo');
  let predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();
  predicates.equalTo('album_name', 'newAlbumName');
  let fetchOptions: photoAccessHelper.FetchOptions = {
    fetchColumns: [],
    predicates: predicates
  };
  let fetchResult: photoAccessHelper.FetchResult<photoAccessHelper.Album> = await phAccessHelper.getAlbums(photoAccessHelper.AlbumType.USER, photoAccessHelper.AlbumSubtype.USER_GENERIC, fetchOptions);
  let album: photoAccessHelper.Album = await fetchResult.getFirstObject();
  phAccessHelper.deleteAlbums([album]).then(() => {
    console.info('deletePhotoAlbumsPromise successfully');
    }).catch((err: BusinessError) => {
      console.error(`deletePhotoAlbumsPromise failed with err: ${err.code}, ${err.message}`);
  });
  fetchResult.close();
}

```

## deleteAssets

```TypeScript
deleteAssets(uriList: Array<string>, callback: AsyncCallback<void>): void
```

Deletes media assets. This API uses an asynchronous callback to return the result. The deleted assets are moved to the trash.

**Since:** 10

**Deprecated since:** 11

**Substitute:** photoAccessHelper.MediaAssetChangeRequest#deleteAssets

**Required permissions:** 

 ohos.permission.WRITE_IMAGEVIDEO

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uriList | Array&lt;string> | Yes | URIs of the media files to delete. |
| callback | AsyncCallback&lt;void> | Yes | Callback that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Called by non-system application. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 13900012 | Permission denied |
| 13900020 | Invalid argument |
| 14000002 | The uri format is incorrect or does not exist. |
| 14000011 | System inner fail |

**Example**

```TypeScript
import { dataSharePredicates } from '@kit.ArkData';

async function example(phAccessHelper: photoAccessHelper.PhotoAccessHelper) {
  console.info('deleteAssetDemo');
  let predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();
  let fetchOptions: photoAccessHelper.FetchOptions = {
    fetchColumns: [],
    predicates: predicates
  };
  try {
    let fetchResult: photoAccessHelper.FetchResult<photoAccessHelper.PhotoAsset> = await phAccessHelper.getAssets(fetchOptions);
    let asset: photoAccessHelper.PhotoAsset = await fetchResult.getFirstObject();
    if (asset === undefined) {
      console.error('asset not exist');
      return;
    }
    phAccessHelper.deleteAssets([asset.uri], (err) => {
      if (err === undefined) {
        console.info('deleteAssets successfully');
      } else {
        console.error(`deleteAssets failed with error: ${err.code}, ${err.message}`);
      }
    });
  } catch (err) {
    console.error(`fetch failed, error: ${err.code}, ${err.message}`);
  }
}

```

## deleteAssets

```TypeScript
deleteAssets(uriList: Array<string>): Promise<void>
```

Deletes media assets. This API uses a promise to return the result. The deleted assets are moved to the trash.

**Since:** 10

**Deprecated since:** 11

**Substitute:** photoAccessHelper.MediaAssetChangeRequest#deleteAssets

**Required permissions:** 

 ohos.permission.WRITE_IMAGEVIDEO

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uriList | Array&lt;string> | Yes | URIs of the media files to delete. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | - Returns void |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Called by non-system application. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 13900012 | Permission denied |
| 13900020 | Invalid argument |
| 14000002 | The uri format is incorrect or does not exist. |
| 14000011 | System inner fail |

**Example**

```TypeScript
import { dataSharePredicates } from '@kit.ArkData';

async function example(phAccessHelper: photoAccessHelper.PhotoAccessHelper) {
  console.info('deleteDemo');
  let predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();
  let fetchOptions: photoAccessHelper.FetchOptions = {
    fetchColumns: [],
    predicates: predicates
  };
  try {
    let fetchResult: photoAccessHelper.FetchResult<photoAccessHelper.PhotoAsset> = await phAccessHelper.getAssets(fetchOptions);
    let asset: photoAccessHelper.PhotoAsset = await fetchResult.getFirstObject();
    if (asset === undefined) {
      console.error('asset not exist');
      return;
    }
    await phAccessHelper.deleteAssets([asset.uri]);
    console.info('deleteAssets successfully');
  } catch (err) {
    console.error(`deleteAssets failed with error: ${err.code}, ${err.message}`);
  }
}

```

## getAlbumIdByBundleName

```TypeScript
getAlbumIdByBundleName(bundleName: string): Promise<int>
```

Get the corresponding albumId of a bundleName.

**Since:** 22

**Required permissions:** 

 ohos.permission.READ_IMAGEVIDEO

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | The app bundleName. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;int> | - Return the corresponding albumId of the a bundleName. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied |
| 202 | Called by non-system application |
| 23800151 | The bundleName is invalid, such as null, undefined and empty. |
| 23800301 | Internal system error. You are advised to retry and check the logs.  Possible causes: 1. The database is corrupted. 2. The file system is abnormal. 3. The IPC request timed out. |

**Example**

```TypeScript
async function example(phAccessHelper: photoAccessHelper.PhotoAccessHelper) {
  console.info('getAlbumIdByBundleName');

  try {
      let albumId: number = await phAccessHelper.getAlbumIdByBundleName('test.bundleName');
      console.info('requestFile:: albumId: ', albumId);

      console.info('getAlbumIdByBundleName completed.');
      console.info(`albumId : ${albumId}`);
    } catch (err) {
      console.error(`getAlbumIdByBundleName failed: ${err.code}, ${err.message}`);
    }
}

```

## getAlbumIdByLpath

```TypeScript
getAlbumIdByLpath(lpath: string): Promise<int>
```

Get the corresponding albumId of an album's lpath, which only supports camera album, screenshot album and screen recording album.

**Since:** 22

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| lpath | string | Yes | The album's lpath. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;int> | - Return the corresponding albumId of an album's lpath. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 23800151 | The lpath is invalid, such as null, undefined and empty. |
| 23800301 | Internal system error. You are advised to retry and check the logs.  Possible causes: 1. The database is corrupted. 2. The file system is abnormal. 3. The IPC request timed out. |

## getAlbums

```TypeScript
getAlbums(
      type: AlbumType,
      subtype: AlbumSubtype,
      options: FetchOptions,
      callback: AsyncCallback<FetchResult<Album>>
    ): void
```

Obtains albums based on the specified options and album type. This API uses an asynchronous callback to return the result. Before the operation, ensure that the albums to obtain exist.

**Since:** 12

**Required permissions:** 

 ohos.permission.READ_IMAGEVIDEO

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | AlbumType | Yes | Type of the album. |
| subtype | AlbumSubtype | Yes | Subtype of the album. |
| options | FetchOptions | Yes | Options for fetching the albums. |
| callback | AsyncCallback&lt;FetchResult&lt;Album>> | Yes | Callback used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 201 | Permission denied |
| 13900020 | Invalid argument |
| 14000011 | System inner fail |

## getAlbums

```TypeScript
getAlbums(type: AlbumType, subtype: AlbumSubtype, callback: AsyncCallback<FetchResult<Album>>): void
```

Obtains albums by type. This API uses an asynchronous callback to return the result. Before the operation, ensure that the albums to obtain exist.

**Since:** 12

**Required permissions:** 

 ohos.permission.READ_IMAGEVIDEO

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | AlbumType | Yes | Type of the album. |
| subtype | AlbumSubtype | Yes | Subtype of the album. |
| callback | AsyncCallback&lt;FetchResult&lt;Album>> | Yes | Callback used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 201 | Permission denied |
| 13900020 | Invalid argument |
| 14000011 | System inner fail |

## getAlbums

```TypeScript
getAlbums(type: AlbumType, subtype: AlbumSubtype, options?: FetchOptions): Promise<FetchResult<Album>>
```

Obtains albums based on the specified options and album type. This API uses a promise to return the result. Before the operation, ensure that the albums to obtain exist.

**Since:** 12

**Required permissions:** 

 ohos.permission.READ_IMAGEVIDEO

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | AlbumType | Yes | Type of the album. |
| subtype | AlbumSubtype | Yes | Album subtype. |
| options | FetchOptions | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;FetchResult&lt;Album>> | - Returns the fetch result |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 201 | Permission denied |
| 13900020 | Invalid argument |
| 14000011 | System inner fail |

## getAlbumsByIds

```TypeScript
getAlbumsByIds(albumIds: Array<int>): Promise<Map<int, Album>>
```

Obtains album information by album IDs. This API uses a promise to return the result.

**Since:** 18

**Required permissions:** 

 ohos.permission.READ_IMAGEVIDEO

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| albumIds | Array&lt;int> | Yes | Array of album IDs. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Map&lt;int, Album>> | - Return the map of albums |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied |
| 202 | Called by non-system application |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14000011 | System inner fail |

**Example**

```TypeScript
async function example(phAccessHelper: photoAccessHelper.PhotoAccessHelper) {
  console.info('startGetAlbumsByIdsDemo');

  try {
    // Obtain the sandbox URIs of the images or videos to be saved to the media library.
    let albumIds: Array<number> = [
      12 //Use the actual album ID.
    ];
    let map: Map<number, photoAccessHelper.Album> = await phAccessHelper.getAlbumsByIds(albumIds);
    console.info('getAlbumsByIds success, size is ' + map.size);
  } catch (err) {
    console.error('getAlbumsByIds failed, errCode is ' + err.code + ', errMsg is ' + err.message);
  }
}

```

## getAssetCompatibleCapability

```TypeScript
getAssetCompatibleCapability(bundleName: string): Promise<AssetCompatibleCapability>
```

Obtains the asset compatibility capability based on bundleName. When you serve a file to an application, You can obtain compatibility capabilities and determine whether to perform compatibility conversion based on the compatibility capabilities.

**Since:** 24

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | Bundle name of target application. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;AssetCompatibleCapability> | Returns the specified asset compatibility capability. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Called by non-system application. |
| 23800151 | The bundleName is invalid, such as null, undefined and empty. |
| 23800301 | Internal system error. It is recommended to retry and check the logs.  Possible causes: 1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out. |

**Example**

```TypeScript
async function example(phAccessHelper: photoAccessHelper.PhotoAccessHelper) {
  try {
    let bundleName = "com.test.example";
    let capability : photoAccessHelper.AssetCompatibleCapability = await phAccessHelper.getAssetCompatibleCapability(bundleName);
  } catch (error) {
    console.error('failed to getAssetCompatibleCapability err', error);
  }
}

```

## getAssetCompatibleUris

```TypeScript
getAssetCompatibleUris(bundleName: string, assets: Array<PhotoAsset>, compatibleFlag?: int): Promise<Array<string>>
```

Obtain the URI list to be transcoded based on bundleName, photoAsset list, and compatibleFlag. compatibleFlags description. Bit 0 indicates a large image, and bit 1 indicates a Heif image.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | The app bundleName. |
| assets | Array&lt;PhotoAsset> | Yes | Array of the assets. |
| compatibleFlag | int | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;string>> | Promise used to return the media library file uri list that needs to be transcoded. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Called by non-system application. |
| 23800151 | The scenario parameter verification fails.  Possible causes:  1. The bundleName is invalid;  2. The compatibleFlag is invalid; |
| 23800301 | Internal system error. It is recommended to retry and check the logs.  Possible causes:  1. Database corrupted;  2. The file system is abnormal;  3. The IPC request timed out. |

**Example**

```TypeScript
import { dataSharePredicates } from '@kit.ArkData';

async function example(phAccessHelper: photoAccessHelper.PhotoAccessHelper) {
  try {
    let bundleName: string = 'com.example.helloWorld';
    let predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();
    let fetchOptions: photoAccessHelper.FetchOptions = {
      fetchColumns: [photoAccessHelper.PhotoKeys.URI, photoAccessHelper.PhotoKeys.WIDTH, photoAccessHelper.PhotoKeys.HEIGHT],
      predicates: predicates
    };
    let fetchResult: photoAccessHelper.FetchResult<photoAccessHelper.PhotoAsset> = await phAccessHelper.getAssets(fetchOptions);
    let assets: Array<photoAccessHelper.PhotoAsset> = await fetchResult.getAllObjects();
    // compatibleFlag: Bit 0 indicates the full image, and bit 1 indicates the HEIF image.
    let compatibleFlag: number = 0;
    let uris: Array<string> = await phAccessHelper.getAssetCompatibleUris(bundleName, assets, compatibleFlag);
    console.info(`getAssetCompatibleUris success, uri count: ${uris.length}`);
  } catch (err) {
    console.error(`getAssetCompatibleUris failed with error: ${err.code}, ${err.message}`);
  }
}

```

## getAssets

```TypeScript
getAssets(options: FetchOptions, callback: AsyncCallback<FetchResult<PhotoAsset>>): void
```

Obtains image and video assets. This API uses an asynchronous callback to return the result.

**Since:** 10

**Required permissions:** 

 ohos.permission.READ_IMAGEVIDEO

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | FetchOptions | Yes | Retrieval options. |
| callback | AsyncCallback&lt;FetchResult&lt;PhotoAsset>> | Yes | Callback function. If files from the album are  obtained successfully, err is undefined, and data is the result set of the obtained image and  video data ([FetchResult](arkts-file-photoaccesshelper.md#photoAccessHelper)). Otherwise, err is an  error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied [since 12] |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified;  2. Incorrect parameter types;  3. Parameter verification failed. |
| 13900012 | Permission denied [since 10 - 11] |
| 13900020 | Invalid argument |
| 14000011 | System inner fail |

## getAssets

```TypeScript
getAssets(options: FetchOptions): Promise<FetchResult<PhotoAsset>>
```

Fetch photo assets

**Since:** 20

**Required permissions:** 

 ohos.permission.READ_IMAGEVIDEO

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | FetchOptions | Yes | Retrieval options. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;FetchResult&lt;PhotoAsset>> | Returns the fetch result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied |
| 13900020 | Invalid argument |
| 14000011 | System inner fail |

## getBurstAssets

```TypeScript
getBurstAssets(burstKey: string, options: FetchOptions): Promise<FetchResult<PhotoAsset>>
```

Fetch a group of burst assets

**Since:** 20

**Required permissions:** 

 ohos.permission.READ_IMAGEVIDEO

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| burstKey | string | Yes | Burst asset uuid |
| options | FetchOptions | Yes | Retrieval options. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;FetchResult&lt;PhotoAsset>> | Returns the fetch result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied |
| 14000011 | Internal system error |

## getClonedAlbumUris

```TypeScript
getClonedAlbumUris(oldUris: Array<string>): Promise<Map<string, string>>
```

This interface is used to obtain the current uris by post-cloning album URI list.

**Since:** 22

**Required permissions:** 

 ohos.permission.READ_IMAGEVIDEO

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| oldUris | Array&lt;string> | Yes | The old album uris before cloning. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Map&lt;string, string>> | A list of Maps consisting of the corresponding post-clone album URIs. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Called by non-system application. |
| 23800151 | The scenario parameter verification fails.  Possible causes: The size of input parameter exceeds 100 or is 0. |
| 23800301 | Internal system error.  It is recommended to retry and check the logs. Possible causes:  1. Database corrupted;  2. The file system is abnormal;  3. The IPC request timed out. |

**Example**

```TypeScript
async function example(phAccessHelper: photoAccessHelper.PhotoAccessHelper) {
    console.info('getClonedAlbumUrisDemo');
    // The following is an array of URIs of media files.
    let uris: Array<string> = [
        'file://media/PhotoAlbum/1',
        'file://media/PhotoAlbum/2',
        'file://media/AnalysisAlbum/3'
    ];
    try {
        let albums: Map<string, string> = await phAccessHelper.getClonedAlbumUris(uris);
        console.info(`Albums: ${albums}`);
    } catch (error) {
        console.error(`Error thrown: ${error}`);
    }
}

```

## getClonedAssetUris

```TypeScript
getClonedAssetUris(oldUris: Array<string>): Promise<Map<string, string>>
```

This interface is used to obtain the current uris by post-cloning asset URI list.

**Since:** 22

**Required permissions:** 

 ohos.permission.READ_IMAGEVIDEO

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| oldUris | Array&lt;string> | Yes | The old asset uris before cloning. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Map&lt;string, string>> | A list of Maps consisting of the corresponding post-clone asset URIs. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Called by non-system application. |
| 23800151 | The scenario parameter verification fails.  Possible causes: The size of input parameter exceeds 100 or is 0. |
| 23800301 | Internal system error.  It is recommended to retry and check the logs. Possible causes:  1. Database corrupted;  2. The file system is abnormal;  3. The IPC request timed out. |

**Example**

```TypeScript
async function example(phAccessHelper: photoAccessHelper.PhotoAccessHelper) {
    console.info('getClonedAssetUrisDemo');
    // The following is an array of URIs of media files.
    let uris: Array<string> = [
        'file://media/Photo/1/IMG_datetime_0001/displayName1.jpg',
        'file://media/Photo/2/IMG_datetime_0002/displayName2.jpg',
        'file://media/Photo/3/IMG_datetime_0003/displayName3.jpg'
    ];
    try {
        let assets: Map<string, string> = await phAccessHelper.getClonedAssetUris(uris);
        console.info(`Assets: ${assets}`);
    } catch (error) {
        console.error(`Error thrown: ${error}`);
    }
}

```

## getDataAnalysisProgress

```TypeScript
getDataAnalysisProgress(analysisType?: AnalysisType): Promise<string>
```

Get analysis progress of the asset.

**Since:** 23

**Required permissions:** 

 ohos.permission.READ_IMAGEVIDEO

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| analysisType | AnalysisType | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;string> | Returns analysis progress info into a json string |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied |
| 202 | Called by non-system application |
| 401 | Parameter error. Possible causes: 1. Incorrect parameter types;  2. Parameter verification failed. |
| 14000011 | Internal system error |

**Example**

```TypeScript
async function example(phAccessHelper: photoAccessHelper.PhotoAccessHelper) {
  try {
    console.info('getDataAnalysisProgress test start');

    let result: string = await phAccessHelper.getDataAnalysisProgress();
    console.info('getDataAnalysisProgress:' + result);

  } catch (err) {
    console.error(`getDataAnalysisProgress failed, error: ${err.code}, ${err.message}`);
  }
}

```

## getDeepOptimizeSpace

```TypeScript
getDeepOptimizeSpace(): Promise<long>
```

Obtains the size of the deep storage space. <br>Unit:Byte{s}. This API is time-consuming. Before using this API, you are advised to call [canPerformDeepOptimizeSpace()] {@link photoAccessHelper.canPerformDeepOptimizeSpace} and call this API only when true is returned.

**Since:** 26.0.0

**Required permissions:** 

 ohos.permission.READ_IMAGEVIDEO

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;long> | - Promise used to return size. The size indicates the size of the deep storage space. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Called by non-system application. |
| 23800301 | Internal system error. It is recommended to retry and check the logs.  Possible causes:  1. Database corrupted;  2. The file system is abnormal;  3. The IPC request timed out. |

**Example**

```TypeScript
async function example(phAccessHelper: photoAccessHelper.PhotoAccessHelper) {
  try {
    let canPerform: boolean = await phAccessHelper.canPerformDeepOptimizeSpace();
    if (canPerform) {
      let size: number = await phAccessHelper.getDeepOptimizeSpace();
      console.info(`getDeepOptimizeSpace result: ${size}`);
    }
  } catch (err) {
    console.error(`getDeepOptimizeSpace failed with error: ${err.code}, ${err.message}`);
  }
}

```

## getHiddenAlbums

```TypeScript
getHiddenAlbums(mode: HiddenPhotosDisplayMode, options: FetchOptions, callback: AsyncCallback<FetchResult<Album>>): void
```

Obtains hidden albums based on the specified display mode and retrieval options. This API uses an asynchronous callback to return the result.

**Since:** 11

**Required permissions:** 

 ohos.permission.READ_IMAGEVIDEO and ohos.permission.MANAGE_PRIVATE_PHOTOS

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mode | HiddenPhotosDisplayMode | Yes | Display mode of albums containing hidden assets. |
| options | FetchOptions | Yes | Options to fetch albums. |
| callback | AsyncCallback&lt;FetchResult&lt;Album>> | Yes | Returns fetchResult of albums containing hidden assets. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed, usually the result returned by VerifyAccessToken. |
| 202 | Permission verification failed, application which is not a system application uses system API. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14000011 | System inner fail. |

**Example**

```TypeScript
import { dataSharePredicates } from '@kit.ArkData';

// Obtain the album newAlbumName that contains hidden files.
async function getHiddenAlbumsView(phAccessHelper: photoAccessHelper.PhotoAccessHelper) {
  console.info('getHiddenAlbumsViewDemo');
  let predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();
  predicates.equalTo('album_name', 'newAlbumName');
  let fetchOptions: photoAccessHelper.FetchOptions = {
    fetchColumns: [],
    predicates: predicates
  };
  phAccessHelper.getHiddenAlbums(photoAccessHelper.HiddenPhotosDisplayMode.ALBUMS_MODE, fetchOptions,
    async (err, fetchResult) => {
      if (err !== undefined) {
        console.error(`getHiddenAlbumsViewCallback failed with error: ${err.code}, ${err.message}`);
        return;
      }
      if (fetchResult === undefined) {
        console.error('getHiddenAlbumsViewCallback fetchResult is undefined');
        return;
      }
      let album = await fetchResult.getFirstObject();
      if (album === undefined) {
        console.error('getHiddenAlbumsViewCallback album is undefined');
        fetchResult.close();
        return;
      }
      console.info('getHiddenAlbumsViewCallback successfully, album name: ' + album.albumName);
      fetchResult.close();
  });
}

```

## getHiddenAlbums

```TypeScript
getHiddenAlbums(mode: HiddenPhotosDisplayMode, callback: AsyncCallback<FetchResult<Album>>): void
```

Obtains hidden albums based on the specified display mode. This API uses an asynchronous callback to return the result.

**Since:** 11

**Required permissions:** 

 ohos.permission.READ_IMAGEVIDEO and ohos.permission.MANAGE_PRIVATE_PHOTOS

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mode | HiddenPhotosDisplayMode | Yes | Display mode of hidden albums. |
| callback | AsyncCallback&lt;FetchResult&lt;Album>> | Yes | Callback used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed, usually the result returned by VerifyAccessToken. |
| 202 | Permission verification failed, application which is not a system application uses system API. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14000011 | System inner fail. |

**Example**

```TypeScript
import { dataSharePredicates } from '@kit.ArkData';

// Obtain the preset hidden album.
async function getSysHiddenAlbum(phAccessHelper: photoAccessHelper.PhotoAccessHelper) {
  console.info('getSysHiddenAlbumDemo');
  phAccessHelper.getHiddenAlbums(photoAccessHelper.HiddenPhotosDisplayMode.ASSETS_MODE, async (err, fetchResult) => {
    if (fetchResult === undefined) {
      console.error('getSysHiddenAlbumCallback fetchResult is undefined');
      return;
    }
    let hiddenAlbum: photoAccessHelper.Album = await fetchResult.getFirstObject();
    if (hiddenAlbum === undefined) {
      console.error('getSysHiddenAlbumCallback hiddenAlbum is undefined');
      fetchResult.close();
      return;
    }
    console.info('getSysHiddenAlbumCallback successfully, albumUri: ' + hiddenAlbum.albumUri);
    fetchResult.close();
  });
}

// Obtain the hidden albums displayed by album, that is, the albums with hidden files. Such albums do not include the preset hidden album and the albums in the trash.
async function getHiddenAlbumsView(phAccessHelper: photoAccessHelper.PhotoAccessHelper) {
  console.info('getHiddenAlbumsViewDemo');
  phAccessHelper.getHiddenAlbums(photoAccessHelper.HiddenPhotosDisplayMode.ALBUMS_MODE, async (err, fetchResult) => {
    if (fetchResult === undefined) {
      console.error('getHiddenAlbumsViewCallback fetchResult is undefined');
      return;
    }
    let albums: Array<photoAccessHelper.Album> = await fetchResult.getAllObjects();
    if (albums === undefined) {
      console.error('getHiddenAlbumsViewCallback albums is undefined');
      fetchResult.close();
      return;
    }
    console.info('getHiddenAlbumsViewCallback successfully, albums size: ' + albums.length);

    let predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();
    let fetchOption: photoAccessHelper.FetchOptions = {
      fetchColumns: [],
      predicates: predicates
    };
    for (let i = 0; i < albums.length; i++) {
      // Obtain hidden files in the album.
      albums[i].getAssets(fetchOption, (err, assetFetchResult) => {
        if (assetFetchResult === undefined) {
          console.error('getHiddenAlbumsViewCallback assetFetchResult is undefined');
          return;
        }
        console.info('album get hidden assets successfully, getCount: ' + assetFetchResult.getCount());
      });
    }
    fetchResult.close();
  });
}

```

## getHiddenAlbums

```TypeScript
getHiddenAlbums(mode: HiddenPhotosDisplayMode, options?: FetchOptions): Promise<FetchResult<Album>>
```

Obtains hidden albums based on the specified display mode and retrieval options. This API uses a promise to return the result.

**Since:** 11

**Required permissions:** 

 ohos.permission.READ_IMAGEVIDEO and ohos.permission.MANAGE_PRIVATE_PHOTOS

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mode | HiddenPhotosDisplayMode | Yes | Display mode of hidden albums. |
| options | FetchOptions | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;FetchResult&lt;Album>> | Returns fetchResult of albums containing hidden assets. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed, usually the result returned by VerifyAccessToken. |
| 202 | Permission verification failed, application which is not a system application uses system API. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14000011 | System inner fail. |

**Example**

```TypeScript
import { dataSharePredicates } from '@kit.ArkData';
import { BusinessError } from '@kit.BasicServicesKit';

// Obtain the preset hidden album.
async function getSysHiddenAlbum(phAccessHelper: photoAccessHelper.PhotoAccessHelper) {
  console.info('getSysHiddenAlbumDemo');
  phAccessHelper.getHiddenAlbums(photoAccessHelper.HiddenPhotosDisplayMode.ASSETS_MODE)
    .then( async (fetchResult) => {
      if (fetchResult === undefined) {
        console.error('getSysHiddenAlbumPromise fetchResult is undefined');
        return;
      }
      let hiddenAlbum: photoAccessHelper.Album = await fetchResult.getFirstObject();
      console.info('getAlbumsPromise successfully, albumUri: ' + hiddenAlbum.albumUri);
      fetchResult.close();
    }).catch((err: BusinessError) => {
      console.error(`getSysHiddenAlbumPromise failed with err: ${err.code}, ${err.message}`);
    });
}

// Obtain the hidden albums displayed by album, that is, the albums with hidden files. Such albums do not include the preset hidden album and the albums in the trash.
async function getHiddenAlbumsView(phAccessHelper: photoAccessHelper.PhotoAccessHelper) {
  console.info('getHiddenAlbumsViewDemo');
  phAccessHelper.getHiddenAlbums(photoAccessHelper.HiddenPhotosDisplayMode.ALBUMS_MODE).then( async (fetchResult) => {
    if (fetchResult === undefined) {
      console.error('getHiddenAlbumsViewPromise fetchResult is undefined');
      return;
    }
    let albums: Array<photoAccessHelper.Album> = await fetchResult.getAllObjects();
    console.info('getHiddenAlbumsViewPromise successfully, albums size: ' + albums.length);

    let predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();
    let fetchOption: photoAccessHelper.FetchOptions = {
      fetchColumns: [],
      predicates: predicates
    };
    for (let i = 0; i < albums.length; i++) {
      // Obtain hidden files in the album.
      albums[i].getAssets(fetchOption).then((assetFetchResult) => {
        console.info('album get hidden assets successfully, getCount: ' + assetFetchResult.getCount());
      }).catch((err: BusinessError) => {
        console.error(`album get hidden assets failed with error: ${err.code}, ${err.message}`);
      });
    }
    fetchResult.close();
  }).catch((err: BusinessError) => {
    console.error(`getHiddenAlbumsViewPromise failed with err: ${err.code}, ${err.message}`);
  });
}

```

## getIndexConstructProgress

```TypeScript
getIndexConstructProgress(): Promise<string>
```

Get index construction progress.

**Since:** 12

**Required permissions:** 

 ohos.permission.READ_IMAGEVIDEO

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;string> | Returns progress of the photo and video |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied |
| 202 | Called by non-system application |
| 14000011 | Internal system error |

**Example**

```TypeScript
async function example(phAccessHelper: photoAccessHelper.PhotoAccessHelper) {

  class indexProgress {
    finishedImageCount: number = 0;
    totalImageCount: number = 0;
    finishedVideoCount: number = 0;
    totalVideoCount: number = 0;
  }

  try {
    console.info('getIndexConstructProgress test start');
    let result: string = await phAccessHelper.getIndexConstructProgress();
    console.info('getIndexProgress:' + result);

    let jsonObj: indexProgress = JSON.parse(result);
    //...Use the obtained index construction progress data.
  } catch (err) {
    console.error(`getIndexConstructProgress failed, error: ${err.code}, ${err.message}`);
  }
}

```

## getPhotoAlbumOrder

```TypeScript
getPhotoAlbumOrder(orderStyle: int, options?: FetchOptions): Promise<FetchResult<AlbumOrder>>
```

Obtains the order of the photo album.

**Since:** 20

**Required permissions:** 

 ohos.permission.READ_IMAGEVIDEO

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| orderStyle | int | Yes | Style of photo album sorting. |
| options | FetchOptions | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;FetchResult&lt;AlbumOrder>> | Promise used to return the order of the photo album. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Called by non-system application. |
| 23800151 | The scenario parameter verification fails.  Possible causes: The input parameter is not within the valid range. |
| 23800301 | Internal system error.  It is recommended to retry and check the logs. Possible causes:  1. Database corrupted;  2. The file system is abnormal;  3. The IPC request timed out. |

**Example**

```TypeScript
import { dataSharePredicates } from '@kit.ArkData';
import { BusinessError } from '@kit.BasicServicesKit';

async function example(phAccessHelper: photoAccessHelper.PhotoAccessHelper) {
  console.info('getPhotoAlbumOrderDemo');
  let predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();
  let fetchOptions: photoAccessHelper.FetchOptions = {
    fetchColumns: [],
    predicates: predicates
  };
  let orderStyle: number = 0;
  phAccessHelper.getPhotoAlbumOrder(orderStyle, fetchOptions).then( async (fetchResult) => {
    if (fetchResult === undefined) {
      console.error('getPhotoAlbumOrderPromise fetchResult is undefined');
      return;
    }
    let albumOrders: photoAccessHelper.AlbumOrder[] = await fetchResult.getAllObjects();
    console.info(`getPhotoAlbumOrderPromise successfully, albumOrders length: ${albumOrders.length}`);
    fetchResult.close();
  }).catch((err: BusinessError) => {
    console.error(`getPhotoAlbumOrderPromise failed with err: ${err.code}, ${err.message}`);
  });
}

```

## getPhotoAlbums

```TypeScript
getPhotoAlbums(options?: FetchOptions): Promise<FetchResult<Album>>
```

Obtains photo albums based on the specified options. This API uses a promise to return the result. Before the operation, ensure that the albums to obtain exist.

**Since:** 20

**Required permissions:** 

 ohos.permission.READ_IMAGEVIDEO

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | FetchOptions | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;FetchResult&lt;Album>> | - Returns the fetch result |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied |
| 202 | Called by non-system application |
| 23800301 | Internal system error. It is recommended to retry and check the logs.  Possible causes: 1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out. |

**Example**

```TypeScript
import { dataSharePredicates } from '@kit.ArkData';
import { BusinessError } from '@kit.BasicServicesKit';

async function example(phAccessHelper: photoAccessHelper.PhotoAccessHelper) {
  console.info('getPhotoAlbumsDemo');
  let predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();
  let fetchOptions: photoAccessHelper.FetchOptions = {
    fetchColumns: [],
    predicates: predicates
  };
  phAccessHelper.getPhotoAlbums(fetchOptions).then( async (fetchResult) => {
    if (fetchResult === undefined) {
      console.error('getPhotoAlbumsPromise fetchResult is undefined');
      return;
    }
    let albums: photoAccessHelper.Album[] = await fetchResult.getAllObjects();
    console.info(`getPhotoAlbumsPromise successfully, albums length: ${albums.length}`);
    fetchResult.close();
  }).catch((err: BusinessError) => {
    console.error(`getPhotoAlbumsPromise failed with err: ${err.code}, ${err.message}`);
  });
}

```

## getPhotoAssets

```TypeScript
getPhotoAssets(assetsData: ValuesBucket[]): Promise<PhotoAsset[]>
```

Get PhotoAsset objects from ValuesBucket record info.

**Since:** 24

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| assetsData | ValuesBucket[] | Yes | Array of asset records. Each element in the array contains the asset's  column names and their values. The array size cannot exceed 500. Each element in the array must contain  the following asset column information: file_id, data, display_name, media_type, and subtype. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;PhotoAsset[]> | Returns an array of PhotoAsset objects (may be empty). |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Called by non-system application. |
| 23800151 | The scenario parameter verification fails. Possible causes:  1. Invalid value type in ValuesBucket;  2. Missing required column in ValuesBucket;  3. Array size exceeds 500. |
| 23800301 | Internal system error. It is recommended to retry and check the logs.  Possible causes: 1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out. |

**Example**

```TypeScript
async function example(phAccessHelper: photoAccessHelper.PhotoAccessHelper) {
  console.info('getPhotoAssets demo');
  let valuesArr: photoAccessHelper.ValuesBucket[] = [];
  let resultSet: photoAccessHelper.ResultSet | undefined = undefined;
  let photoAssetArr: photoAccessHelper.PhotoAsset[] = [];
  let QUERY_SQL = 'SELECT file_id,data,display_name,media_type,subtype from Photos limit 100';
  try {
    resultSet = await phAccessHelper.query(QUERY_SQL);
    let index: number = 0;
    while(resultSet && index < resultSet.rowCount){
      resultSet.goToRow(index);
      valuesArr.push(resultSet.getRow());
      index++;
    }
    photoAssetArr = await phAccessHelper.getPhotoAssets(valuesArr);
    console.info('getPhotoAssets successfully');
  } catch (err) {
    console.error(`valuesArr failed: ${err.code}, ${err.message}`);
  }
}

```

## getPhotoIndex

```TypeScript
getPhotoIndex(photoUri: string, albumUri: string, options: FetchOptions, callback: AsyncCallback<int>): void
```

Obtains the index of an image or video in an album. This API uses an asynchronous callback to return the result.

**Since:** 10

**Required permissions:** 

 ohos.permission.READ_IMAGEVIDEO

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| photoUri | string | Yes | URI of the media asset whose index is to be obtained. |
| albumUri | string | Yes | Album URI, which can be an empty string.  If it is an empty string, all the media assets in the Gallery are obtained by default. |
| options | FetchOptions | Yes | Fetch options. Only one search condition or sorting mode must be set in predicates.  If no value is set or multiple search criteria or sorting modes are set, the API cannot be called successfully. |
| callback | AsyncCallback&lt;int> | Yes | Callback used to return the index obtained. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Called by non-system application. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 13900012 | Permission denied |
| 13900020 | Invalid argument |
| 14000011 | System inner fail |

**Example**

```TypeScript
import { dataSharePredicates } from '@kit.ArkData';

async function example(phAccessHelper: photoAccessHelper.PhotoAccessHelper) {
  try {
    console.info('getPhotoIndexDemo');
    let predicatesForGetAsset: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();
    let fetchOp: photoAccessHelper.FetchOptions = {
      fetchColumns: [],
      predicates: predicatesForGetAsset
    };
    // Obtain the uri of the album.
    let albumFetchResult: photoAccessHelper.FetchResult<photoAccessHelper.Album> = await phAccessHelper.getAlbums(photoAccessHelper.AlbumType.SYSTEM, photoAccessHelper.AlbumSubtype.FAVORITE, fetchOp);
    let album: photoAccessHelper.Album = await albumFetchResult.getFirstObject();
    let predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();
    predicates.orderByAsc(photoAccessHelper.PhotoKeys.DATE_MODIFIED);
    let fetchOptions: photoAccessHelper.FetchOptions = {
      fetchColumns: [photoAccessHelper.PhotoKeys.DATE_MODIFIED],
      predicates: predicates
    };
    let photoFetchResult: photoAccessHelper.FetchResult<photoAccessHelper.PhotoAsset> = await album.getAssets(fetchOptions);
    let expectIndex = 1;
    // Obtain the uri of the second file.
    let photoAsset: photoAccessHelper.PhotoAsset = await photoFetchResult.getObjectByPosition(expectIndex);

    phAccessHelper.getPhotoIndex(photoAsset.uri, album.albumUri, fetchOptions, (err, index) => {
      if (err === undefined) {
        console.info(`getPhotoIndex successfully and index is : ${index}`);
      } else {
        console.error(`getPhotoIndex failed; error: ${err.code}, ${err.message}`);
      }
    });
  } catch (error) {
    console.error(`getPhotoIndex failed; error: ${error.code}, ${error.message}`);
  }
}

```

## getPhotoIndex

```TypeScript
getPhotoIndex(photoUri: string, albumUri: string, options: FetchOptions): Promise<int>
```

Obtains the index of an image or video in an album. This API uses a promise to return the result.

**Since:** 10

**Required permissions:** 

 ohos.permission.READ_IMAGEVIDEO

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| photoUri | string | Yes | URI of the media asset whose index is to be obtained. |
| albumUri | string | Yes | Album URI, which can be an empty string.  If it is an empty string, all the media assets in the Gallery are obtained by default. |
| options | FetchOptions | Yes | Fetch options. Only one search condition or sorting mode must be set in predicates.  If no value is set or multiple search criteria or sorting modes are set, the API cannot be called successfully. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;int> | - Returns the index of the asset in the album |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Called by non-system application. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 13900012 | Permission denied |
| 13900020 | Invalid argument |
| 14000011 | System inner fail |

**Example**

```TypeScript
import { dataSharePredicates } from '@kit.ArkData';
import { BusinessError } from '@kit.BasicServicesKit';

async function example(phAccessHelper: photoAccessHelper.PhotoAccessHelper) {
  try {
    console.info('getPhotoIndexDemo');
    let predicatesForGetAsset: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();
    let fetchOp: photoAccessHelper.FetchOptions = {
      fetchColumns: [],
      predicates: predicatesForGetAsset
    };
    // Obtain the uri of the album.
    let albumFetchResult: photoAccessHelper.FetchResult<photoAccessHelper.Album> = await phAccessHelper.getAlbums(photoAccessHelper.AlbumType.SYSTEM, photoAccessHelper.AlbumSubtype.FAVORITE, fetchOp);
    let album: photoAccessHelper.Album = await albumFetchResult.getFirstObject();
    let predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();
    predicates.orderByAsc(photoAccessHelper.PhotoKeys.DATE_MODIFIED);
    let fetchOptions: photoAccessHelper.FetchOptions = {
      fetchColumns: [photoAccessHelper.PhotoKeys.DATE_MODIFIED],
      predicates: predicates
    };
    let photoFetchResult: photoAccessHelper.FetchResult<photoAccessHelper.PhotoAsset> = await album.getAssets(fetchOptions);
    let expectIndex = 1;
    // Obtain the uri of the second file.
    let photoAsset: photoAccessHelper.PhotoAsset = await photoFetchResult.getObjectByPosition(expectIndex);
    phAccessHelper.getPhotoIndex(photoAsset.uri, album.albumUri, fetchOptions).then((index) => {
      console.info(`getPhotoIndex successfully and index is : ${index}`);
    }).catch((err: BusinessError) => {
      console.error(`getPhotoIndex failed; error: ${err.code}, ${err.message}`);
    });
  } catch (error) {
    console.error(`getPhotoIndex failed; error: ${error.code}, ${error.message}`);
  }
}

```

## getPhotoPickerComponentDefaultAlbumName

```TypeScript
getPhotoPickerComponentDefaultAlbumName(): Promise<string>
```

Get the PhotoPickerComponent default album name.

**Since:** 20

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;string> | - Returns the default album name. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 23800301 | Internal system error. It is recommended to retry and check the logs.  Possible causes: 1. The IPC request timed out. 2. system running error |

## getPreferredCompatibleMode

```TypeScript
getPreferredCompatibleMode(bundleName: string): Promise<PreferredCompatibleMode>
```

Obtains the preferred compatible mode configured by the application based on bundleName. There are three application types. For details, see PreferredCompatibleMode.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | The app bundleName. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;PreferredCompatibleMode> | Preferred compatible mode of the application. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Called by non-system application. |
| 23800151 | The bundleName is invalid, such as null, undefined and empty. |
| 23800301 | Internal system error. It is recommended to retry and check the logs.  Possible causes: 1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

async function getPreferredCompatibleMode(
  phAccessHelper: photoAccessHelper.PhotoAccessHelper,
  bundleName: string
): Promise<photoAccessHelper.PreferredCompatibleMode> {
  console.info('getPreferredCompatibleModeDemo');
  let mode: photoAccessHelper.PreferredCompatibleMode = photoAccessHelper.PreferredCompatibleMode.DEFAULT;
  await phAccessHelper.getPreferredCompatibleMode(bundleName)
    .then((result: photoAccessHelper.PreferredCompatibleMode) => {
      mode = result;
      console.info('getPreferredCompatibleMode successfully');
    })
    .catch((err: BusinessError) => {
      console.error(`The getPreferredCompatibleMode call failed. error: ${err.code}, ${err.message}`);
    });
  return mode;
}

```

## getRecentPhotoInfo

```TypeScript
getRecentPhotoInfo(options?: RecentPhotoOptions): Promise<RecentPhotoInfo>
```

Get recent photo or video info by options

**Since:** 20

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | RecentPhotoOptions | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;RecentPhotoInfo> | - Returns the recent photo info |

## getSharedPhotoAssets

```TypeScript
getSharedPhotoAssets(options: FetchOptions): Array<SharedPhotoAsset>
```

Fetch shared photo assets.

**Since:** 13

**Required permissions:** 

 ohos.permission.ACCESS_MEDIALIB_THUMB_DB

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | FetchOptions | Yes | Fetch options. |

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;SharedPhotoAsset> | Returns the shared photo assets |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied |
| 202 | Called by non-system application |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14000011 | Internal system error |

**Example**

```TypeScript
import { dataSharePredicates } from '@kit.ArkData'

async function example(phAccessHelper: photoAccessHelper.PhotoAccessHelper) {
  let predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();
  let fetchOptions: photoAccessHelper.FetchOptions = {
    fetchColumns: [],
    predicates: predicates
  };

  try {
    console.info('getSharedPhotoAssets test start');
    phAccessHelper.getSharedPhotoAssets(fetchOptions);
    console.info('getSharedPhotoAssets test end');
  } catch (err) {
    console.error(`getSharedPhotoAssets failed, error: ${err.code}, ${err.message}`);
  }
}

```

## getSupportedPhotoFormats

```TypeScript
getSupportedPhotoFormats(photoType: PhotoType): Promise<Array<string>>
```

Obtains the list of image or video file name extensions supported by the media library.

**Since:** 18

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| photoType | PhotoType | Yes | Type of the file. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;string>> | - Return the list of image or video suffixes supported by the media library |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14000011 | Internal system error. It is recommended to retry and check the logs. |

## grantPhotoUriPermission

```TypeScript
grantPhotoUriPermission(
      tokenId: long,
      uri: string,
      photoPermissionType: PhotoPermissionType,
      hideSensitiveType: HideSensitiveType
    ): Promise<int>
```

Grants an application the permission to access a URI. This API uses a promise to return the result.

**Since:** 19

**Required permissions:** 

 ohos.permission.READ_IMAGEVIDEO

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| tokenId | long | Yes | ID of the target application. |
| uri | string | Yes | URI of the media asset. |
| photoPermissionType | PhotoPermissionType | Yes | Type of the permission to be granted. For details, see the enum. |
| hideSensitiveType | HideSensitiveType | Yes | Type of the information to hide.  This parameter is reserved. Currently, any enumerated value of HideSensitiveType can be passed in. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;int> | Returns result of grant permission |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied |
| 202 | Called by non-system application |
| 13900020 | Invalid argument. Possible causes: 1. Incorrect uri format;  2. The value of photoPermissionType or hideSensitiveType is out of range. |
| 14000011 | Internal system error |

**Example**

```TypeScript
async function example(phAccessHelper: photoAccessHelper.PhotoAccessHelper) {
  console.info('grantPhotoUriPermissionDemo');

  try {
    let tokenId = 502334412;
    let result = await phAccessHelper.grantPhotoUriPermission(tokenId,
        'file://media/Photo/1/IMG_datetime_0001/displayName.jpg',
        photoAccessHelper.PhotoPermissionType.TEMPORARY_READ_IMAGEVIDEO,
        photoAccessHelper.HideSensitiveType.HIDE_LOCATION_AND_SHOOTING_PARAM);

    console.info('grantPhotoUriPermission success, result=' + result);
  } catch (err) {
    console.error('grantPhotoUriPermission failed, error=' + err);
  }
}

```

## grantPhotoUrisPermission

```TypeScript
grantPhotoUrisPermission(
      tokenId: long,
      uriList: Array<string>,
      photoPermissionType: PhotoPermissionType,
      hideSensitiveType: HideSensitiveType
    ): Promise<int>
```

Grants an application the permission to access multiple URIs. This API uses a promise to return the result.

**Since:** 19

**Required permissions:** 

 ohos.permission.READ_IMAGEVIDEO

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| tokenId | long | Yes | ID of the target application. |
| uriList | Array&lt;string> | Yes | A list of URIs, which cannot exceed 1000. |
| photoPermissionType | PhotoPermissionType | Yes | Type of the permission to be granted. For details, see the enum. |
| hideSensitiveType | HideSensitiveType | Yes | Type of the information to hide.  This parameter is reserved. Currently, any enumerated value of HideSensitiveType can be passed in. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;int> | Returns result of grant permission |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied |
| 202 | Called by non-system application |
| 13900020 | Invalid argument. Possible causes: 1. Incorrect uri format;  2. The value of photoPermissionType or hideSensitiveType is out of range. |
| 14000011 | Internal system error |

**Example**

```TypeScript
async function example(phAccessHelper: photoAccessHelper.PhotoAccessHelper) {
  console.info('grantPhotoUrisPermissionDemo');

  try {
    // URIs of the media assets.
    let uris: Array<string> = [
      'file://media/Photo/11/IMG_datetime_0001/displayName1.jpg',
      'file://media/Photo/22/IMG_datetime_0002/displayName2.jpg'];
    let tokenId = 502334412;
    let result = await phAccessHelper.grantPhotoUrisPermission(tokenId, uris,
        photoAccessHelper.PhotoPermissionType.TEMPORARY_READ_IMAGEVIDEO,
        photoAccessHelper.HideSensitiveType.HIDE_LOCATION_AND_SHOOTING_PARAM);

    console.info('grantPhotoUrisPermission success, result=' + result);
  } catch (err) {
    console.error('grantPhotoUrisPermission failed, error=' + err);
  }
}

```

## isCompatibleDuplicateSupported

```TypeScript
isCompatibleDuplicateSupported(bundleName: string): Promise<boolean>
```

checks whether the application supports compatiblle copies by bundleName

**Since:** 21

**Required permissions:** 

 ohos.permission.READ_IMAGEVIDEO

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | BundleName of target applicaation |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean> | - Returns the whether appplication supports compatible copies |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied |
| 202 | Called by non-system aapplication |
| 23800301 | Internal system error. It is recommended to retry and check the logs  Possible causes: 1. The IPC request timed out. 2.system running error |

**Example**

```TypeScript
import { photoAccessHelper } from '@kit.MediaLibraryKit';

async function example(phAccessHelper: photoAccessHelper.PhotoAccessHelper) {
  try {
    console.info('isCompatibleDuplicateSupportedPromiseDemo')
    let isSupport: boolean = await phAccessHelper.isCompatibleDuplicateSupported('com.example.helloworld');
    console.info(`isCompatibleDuplicateSupported: ${isSupport}`);
  } catch (err) {
    console.error(`isCompatibleDuplicateSupportedPromiseDemo failed with error: ${err.code}, ${err.message}`);
  }
}

```

## isMediaDataReady

```TypeScript
isMediaDataReady(mediaDataKey: string): Promise<boolean>
```

Whether a kind of media data is ready.

**Since:** 24

**Required permissions:** 

 ohos.permission.READ_IMAGEVIDEO

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mediaDataKey | string | Yes | Media data key. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean> | Returns whether the specified media data is ready. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied |
| 202 | Called by non-system application. |
| 23800151 | The scenario parameter verification fails, unsupported media data type. |
| 23800301 | Internal system error. It is recommended to retry and check the logs.  Possible causes: 1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out. |

**Example**

```TypeScript
async function example(phAccessHelper: photoAccessHelper.PhotoAccessHelper) {
  console.info('isMediaDataReady demo');

  try {
    let ready: boolean = await phAccessHelper.isMediaDataReady('date_added_year');
    if (ready) {
      console.info('date_added_year media data is ready.');
    } else {
      console.info('date_added_year media data is not ready.');
    }
  } catch (err) {
    console.error(`isMediaDataReady failed: ${err.code}, ${err.message}`);
  }
}

```

## modifyAlbumDefaultCoverOrder

```TypeScript
modifyAlbumDefaultCoverOrder(coverOrderInfos: DefaultCoverOrderInfo[],
    disableModification: boolean,
    isAsyncRefreshAlbum: boolean): Promise<void>
```

modify the default cover order of album.

**Since:** 26.0.0

**Required permissions:** 

 ohos.permission.WRITE_IMAGEVIDEO

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| coverOrderInfos | DefaultCoverOrderInfo[] | Yes | Default cover order information for batch albums. |
| disableModification | boolean | Yes | Disabling the modification option. |
| isAsyncRefreshAlbum | boolean | Yes | Asynchronously refreshing the default album cover image.. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Returns void. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied |
| 202 | Called by non-system application. |
| 23800151 | The scenario parameter verification fails. Possible causes:  1. Only the system album can be set without lpath. Otherwise, the setting is not supported;  2. The orderKey and orderSubKey are not in the specified range;  3. The order type must be either descending or ascending. |
| 23800301 | Internal system error. It is recommended to retry and check the logs.  Possible causes: 1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out. |

**Example**

```TypeScript
async function modifyAlbumDefaultCoverOrder(phAccessHelper: photoAccessHelper.PhotoAccessHelper) {
  try {
    let coverOrderInfos: Array<photoAccessHelper.DefaultCoverOrderInfo> = [];
    let coverOrderInfo: photoAccessHelper.DefaultCoverOrderInfo = {
      albumType: photoAccessHelper.AlbumType.USER,
      albumSubtype: photoAccessHelper.AlbumSubtype.USER_GENERIC,
      lpath: "/Pictures/Users/1",
      orderKey: photoAccessHelper.PhotoKeys.DATE_ADDED,
      orderSubKey: photoAccessHelper.PhotoKeys.DISPLAY_NAME,
      orderType: 1,
    }
    coverOrderInfos.push(coverOrderInfo);
    let disableModification: boolean = false;
    let isAsyncRefreshAlbum: boolean = false;
    await phAccessHelper.modifyAlbumDefaultCoverOrder(coverOrderInfos, disableModification, isAsyncRefreshAlbum);
    console.info(`Succeeded in modifying default cover order of user album 1`);
  } catch (err) {
    console.error(`modifyAlbumDefaultCoverOrder failed with error: ${err.code}, ${err.message}`);
  }
}

```

## modifyHiddenAlbumDefaultCoverOrder

```TypeScript
modifyHiddenAlbumDefaultCoverOrder(coverOrderInfos: DefaultCoverOrderInfo[],
    disableModification: boolean,
    isAsyncRefreshAlbum: boolean): Promise<void>
```

modify the default cover order of hidden album.

**Since:** 26.0.0

**Required permissions:** 

 ohos.permission.WRITE_IMAGEVIDEO and ohos.permission.MANAGE_PRIVATE_PHOTOS

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| coverOrderInfos | DefaultCoverOrderInfo[] | Yes | Default cover order information for batch albums. |
| disableModification | boolean | Yes | Disabling the modification option. |
| isAsyncRefreshAlbum | boolean | Yes | Asynchronously refreshing the default album cover image.. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Returns void. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied |
| 202 | Called by non-system application. |
| 23800151 | The scenario parameter verification fails. Possible causes:  1. Only the system album can be set without lpath. Otherwise, the setting is not supported;  2. The orderKey and orderSubKey are not in the specified range;  3. The order type must be either descending or ascending. |
| 23800301 | Internal system error. It is recommended to retry and check the logs.  Possible causes: 1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out. |

**Example**

```TypeScript
async function modifyHiddenAlbumDefaultCoverOrder(phAccessHelper: photoAccessHelper.PhotoAccessHelper) {
  try {
    let coverOrderInfos: Array<photoAccessHelper.DefaultCoverOrderInfo> = [];
    let coverOrderInfo: photoAccessHelper.DefaultCoverOrderInfo = {
      albumType: photoAccessHelper.AlbumType.SYSTEM,
      albumSubtype: photoAccessHelper.AlbumSubtype.HIDDEN,
      orderKey: photoAccessHelper.PhotoKeys.DATE_ADDED,
      orderSubKey: photoAccessHelper.PhotoKeys.DISPLAY_NAME,
      orderType: 1,
    }
    coverOrderInfos.push(coverOrderInfo);
    let disableModification: boolean = false;
    let isAsyncRefreshAlbum: boolean = false;
    await phAccessHelper.modifyHiddenAlbumDefaultCoverOrder(coverOrderInfos, disableModification, isAsyncRefreshAlbum);
    console.info(`Succeeded in modifying default cover order of hidden album`);
  } catch (err) {
    console.error(`modifyHiddenAlbumDefaultCoverOrder failed with error: ${err.code}, ${err.message}`);
  }
}

```

## moveAssetsByPath

```TypeScript
moveAssetsByPath(assets: string[], target: Album, option?: BatchOperationOptions): Promise<string[]>
```

move assets of filemanager to Album.

**Since:** 26.0.0

**Required permissions:** 

 ohos.permission.WRITE_IMAGEVIDEO

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| assets | string[] | Yes | Assets path from filemanager(e.g., "/Download/test.jpg"). |
| target | Album | Yes | Target Album. |
| option | BatchOperationOptions | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;string[]> | Return successed assets URIS. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | permission denied |
| 202 | Called by non-system application. |
| 23800151 | The Scenario parameter verification fails. Possible causes:  1. Moving to the target Album is not supported;  2. Assets to be moved does not exist.  3. Automatic renaming is not supported. |
| 23800301 | Internal system error. It is recommended to retry and check the logs.  Possible causes: 1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out. |

**Example**

```TypeScript
async function example(phAccessHelper: photoAccessHelper.PhotoAccessHelper) {
  try {
    let assets: Array<string> = ["/Docs/Download/test.jpg"];
    let albumFetchResult: photoAccessHelper.FetchResult<photoAccessHelper.Album> = await phAccessHelper.getAlbums(photoAccessHelper.AlbumType.USER, photoAccessHelper.AlbumSubtype.USER_GENERIC);
    let target: photoAccessHelper.Album = await albumFetchResult.getFirstObject();
    let moveUris: Array<string> = await phAccessHelper.moveAssetsByPath(assets, target);
    console.info(`moveAssetsByPath success, count: ${moveUris.length}`);
  } catch (err) {
    console.error(`moveAssetsByPath failed with error: ${err.code}, ${err.message}`);
  }
}

```

## moveAssetsToDir

```TypeScript
moveAssetsToDir(assets: string[], target: string, option?: BatchOperationOptions): Promise<string[]>
```

move assets of medialibrary sandbox to directory of filemanager.

**Since:** 26.0.0

**Required permissions:** 

 ohos.permission.WRITE_IMAGEVIDEO

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| assets | string[] | Yes | Assets URI from medialibrary sandbox. |
| target | string | Yes | Target directory of filemanager. |
| option | BatchOperationOptions | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;string[]> | Return the paths to the asset |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | permission denied |
| 202 | Called by non-system application. |
| 23800151 | The Scenario parameter verification fails. Possible causes:  1. Moving to the target directory is not supported;  2. Assets to be moved does not exist.  3. Automatic renaming is not supported. |
| 23800301 | Internal system error. It is recommended to retry and check the logs.  Possible causes: 1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out. |

**Example**

```TypeScript
import { dataSharePredicates } from '@kit.ArkData';

async function example(phAccessHelper: photoAccessHelper.PhotoAccessHelper) {
  try {
    let predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();
    let fetchOption: photoAccessHelper.FetchOptions = {
      fetchColumns: [],
      predicates: predicates
    };
    let assetFetchResult: photoAccessHelper.FetchResult<photoAccessHelper.PhotoAsset> = await phAccessHelper.getAssets(fetchOption);
    let assets: Array<photoAccessHelper.PhotoAsset> = await assetFetchResult.getAllObjects();
    let assetUris: Array<string> = assets.map((item) => item.uri);
    let target: string = "/Docs/Download/";
    let movePaths: Array<string> = await phAccessHelper.moveAssetsToDir(assetUris, target);
    console.info(`moveAssetsToDir success, count: ${movePaths.length}`);
  } catch (err) {
    console.error(`moveAssetsToDir failed with error: ${err.code}, ${err.message}`);
  }
}

```

## off('photoChange')

```TypeScript
off(type: 'photoChange', callback?: Callback<PhotoAssetChangeInfos>): void
```

Unregister the callback of photo changes.

**Since:** 20

**Required permissions:** 

 ohos.permission.READ_IMAGEVIDEO

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'photoChange' | Yes | The value is fixed at 'photoChange', indicating the photo change event. |
| callback | Callback&lt;PhotoAssetChangeInfos> | No | Callback to be removed. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied |
| 23800151 | The scenario parameter verification fails.  Possible causes: 1. The type is not fixed at 'photoChange'; 2. The same callback is unregistered repeatedly. |
| 23800301 | Internal system error. You are advised to retry and check the logs.  Possible causes: 1. The database is corrupted. 2. The file system is abnormal. 3. The IPC request timed out. |

## off('hiddenPhotoChange')

```TypeScript
off(type: 'hiddenPhotoChange', callback?: Callback<PhotoAssetChangeInfos>): void
```

Unregister the callback of hidden photo changes.

**Since:** 20

**Required permissions:** 

 ohos.permission.READ_IMAGEVIDEO and ohos.permission.MANAGE_PRIVATE_PHOTOS

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'hiddenPhotoChange' | Yes | The value is fixed at 'hiddenPhotoChange', indicating the hidden photo change event. |
| callback | Callback&lt;PhotoAssetChangeInfos> | No | Callback to be removed. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied |
| 202 | Called by non-system application |
| 23800151 | The scenario parameter verification fails.  Possible causes: 1. The type is not fixed at 'hiddenPhotoChange'; 2. The same callback is unregistered repeatedly. |
| 23800301 | Internal system error. You are advised to retry and check the logs.  Possible causes: 1. The database is corrupted. 2. The file system is abnormal. 3. The IPC request timed out. |

**Example**

```TypeScript
import { dataSharePredicates } from '@kit.ArkData'

let onCallback1 = (changeData: photoAccessHelper.PhotoAssetChangeInfos) => {
    console.info('onCallback1 success, changeData: ' + JSON.stringify(changeData));
  // file had changed, do something.
}
let onCallback2 = (changeData: photoAccessHelper.PhotoAssetChangeInfos) => {
    console.info('onCallback2 success, changeData: ' + JSON.stringify(changeData));
  // file had changed, do something.
}

async function example(phAccessHelper: photoAccessHelper.PhotoAccessHelper){
  console.info('offHiddenPhotoChangeDemo.');

  try {
    // Register onCallback1.
    phAccessHelper.on('hiddenPhotoChange', onCallback1);
    // Register onCallback2.
    phAccessHelper.on('hiddenPhotoChange', onCallback2);

    // Unregister the listening of onCallback1.
    phAccessHelper.off('hiddenPhotoChange', onCallback1);
  } catch (error) {
    console.error('offHiddenPhotoChange failed, errCode is', error);
  }
}

```

## off('trashedPhotoChange')

```TypeScript
off(type: 'trashedPhotoChange', callback?: Callback<PhotoAssetChangeInfos>): void
```

Unregister the callback of trashed photo changes.

**Since:** 20

**Required permissions:** 

 ohos.permission.READ_IMAGEVIDEO

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'trashedPhotoChange' | Yes | The value is fixed at 'trashedPhotoChange', indicating the trashed photo change event. |
| callback | Callback&lt;PhotoAssetChangeInfos> | No | Callback to be removed. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied |
| 202 | Called by non-system application |
| 23800151 | The scenario parameter verification fails.  Possible causes: 1. The type is not fixed at 'trashedPhotoChange'; 2. The same callback is unregistered repeatedly. |
| 23800301 | Internal system error. You are advised to retry and check the logs.  Possible causes: 1. The database is corrupted. 2. The file system is abnormal. 3. The IPC request timed out. |

**Example**

```TypeScript
import { dataSharePredicates } from '@kit.ArkData'

let onCallback1 = (changeData: photoAccessHelper.PhotoAssetChangeInfos) => {
    console.info('onCallback1 success, changData: ' + JSON.stringify(changeData));
  // file had changed, do something.
}
let onCallback2 = (changeData: photoAccessHelper.PhotoAssetChangeInfos) => {
    console.info('onCallback2 success, changData: ' + JSON.stringify(changeData));
  // file had changed, do something.
}

async function example(phAccessHelper: photoAccessHelper.PhotoAccessHelper, context: Context){
  console.info('offTrashedPhotoChangeDemo.');

  try {
    // Register onCallback1.
    phAccessHelper.on('trashedPhotoChange', onCallback1);
    // Register onCallback2.
    phAccessHelper.on('trashedPhotoChange', onCallback2);

    // Unregister the listening of onCallback1.
    phAccessHelper.off('trashedPhotoChange', onCallback1);
  } catch (error) {
    console.error('offTrashedPhotoChangeDemo failed, errCode is', error);
  }
}

```

## off('photoAlbumChange')

```TypeScript
off(type: 'photoAlbumChange', callback?: Callback<AlbumChangeInfos>): void
```

Unregister the callback of album changes.

**Since:** 20

**Required permissions:** 

 ohos.permission.READ_IMAGEVIDEO

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'photoAlbumChange' | Yes | The value is fixed at 'photoAlbumChange', indicating the album change event. |
| callback | Callback&lt;AlbumChangeInfos> | No | Callback to be removed. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied |
| 23800151 | The scenario parameter verification fails.  Possible causes: 1. The type is not fixed at 'photoAlbumChange'; 2. The same callback is unregistered repeatedly. |
| 23800301 | Internal system error. You are advised to retry and check the logs.  Possible causes: 1. The database is corrupted. 2. The file system is abnormal. 3. The IPC request timed out. |

## off('hiddenAlbumChange')

```TypeScript
off(type: 'hiddenAlbumChange', callback?: Callback<AlbumChangeInfos>): void
```

Unregister the callback of hidden album changes.

**Since:** 20

**Required permissions:** 

 ohos.permission.READ_IMAGEVIDEO and ohos.permission.MANAGE_PRIVATE_PHOTOS

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'hiddenAlbumChange' | Yes | The value is fixed at 'hiddenAlbumChange', indicating the hidden album change event. |
| callback | Callback&lt;AlbumChangeInfos> | No | Callback to be removed. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied |
| 202 | Called by non-system application |
| 23800151 | The scenario parameter verification fails.  Possible causes: 1. The type is not fixed at 'hiddenAlbumChange'; 2. The same callback is unregistered repeatedly. |
| 23800301 | Internal system error. You are advised to retry and check the logs.  Possible causes: 1. The database is corrupted. 2. The file system is abnormal. 3. The IPC request timed out. |

**Example**

```TypeScript
import { dataSharePredicates } from '@kit.ArkData'

let onCallback1 = (changeData: photoAccessHelper.AlbumChangeInfos) => {
    console.info('onCallback1 success, changeData: ' + JSON.stringify(changeData));
  // file had changed, do something.
}
let onCallback2 = (changeData: photoAccessHelper.AlbumChangeInfos) => {
    console.info('onCallback2 success, changeData: ' + JSON.stringify(changeData));
  // file had changed, do something.
}

async function example(phAccessHelper: photoAccessHelper.PhotoAccessHelper){
  console.info('onHiddenAlbumChangeDemo.');

  try {
    // Register onCallback1.
    phAccessHelper.on('hiddenAlbumChange', onCallback1);
    // Register onCallback2.
    phAccessHelper.on('hiddenAlbumChange', onCallback2);

    // Unregister the listening of onCallback1.
    phAccessHelper.off('hiddenAlbumChange', onCallback1);
  } catch (error) {
    console.error('onHiddenAlbumChangeDemo failed, errCode is', error);
  }
}

```

## off('trashedAlbumChange')

```TypeScript
off(type: 'trashedAlbumChange', callback?: Callback<AlbumChangeInfos>): void
```

Unregister the callback of trashed album changes.

**Since:** 20

**Required permissions:** 

 ohos.permission.READ_IMAGEVIDEO

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'trashedAlbumChange' | Yes | The value is fixed at 'trashedAlbumChange', indicating the trashed album change event. |
| callback | Callback&lt;AlbumChangeInfos> | No | Callback to be removed. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied |
| 202 | Called by non-system application |
| 23800151 | The scenario parameter verification fails.  Possible causes: 1. The type is not fixed at 'trashedAlbumChange'; 2. The same callback is unregistered repeatedly. |
| 23800301 | Internal system error. You are advised to retry and check the logs.  Possible causes: 1. The database is corrupted. 2. The file system is abnormal. 3. The IPC request timed out. |

**Example**

```TypeScript
import { dataSharePredicates } from '@kit.ArkData'

let onCallback1 = (changeData: photoAccessHelper.AlbumChangeInfos) => {
    console.info('onCallback1 success, changeData: ' + JSON.stringify(changeData));
  // file had changed, do something.
}
let onCallback2 = (changeData: photoAccessHelper.AlbumChangeInfos) => {
    console.info('onCallback2 success, changeData: ' + JSON.stringify(changeData));
  // file had changed, do something.
}

async function example(phAccessHelper: photoAccessHelper.PhotoAccessHelper, context: Context){
  console.info('onTrashedAlbumChangeDemo.');

  try {
    // Register onCallback1.
    phAccessHelper.on('trashedAlbumChange', onCallback1);
    // Register onCallback2.
    phAccessHelper.on('trashedAlbumChange', onCallback2);

    // Unregister the listening of onCallback1.
    phAccessHelper.off('trashedAlbumChange', onCallback1);
  } catch (error) {
    console.error('onTrashedAlbumChangeDemo failed, errCode is', error);
  }
}

```

## offAnalysisAlbumChange

```TypeScript
offAnalysisAlbumChange(callback?: Callback<AlbumChangeInfos>): void
```

Unsubscribes from changes in the analysis album.

**Since:** 23

**Required permissions:** 

 ohos.permission.READ_IMAGEVIDEO

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;AlbumChangeInfos> | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied |
| 202 | Called by non-system application. |
| 23800151 |  |
| 23800301 | Internal system error. You are advised to retry and check the logs.  Possible causes: 1. The database is corrupted. 2. The file system is abnormal. 3. The IPC request timed out. |

**Example**

```TypeScript
import { dataSharePredicates } from '@kit.ArkData'

let onCallback1 = (changeData: photoAccessHelper.AlbumChangeInfos) => {
    console.info('onCallback1 success, changeData: ' + JSON.stringify(changeData));
  // file had changed, do something.
}
let onCallback2 = (changeData: photoAccessHelper.AlbumChangeInfos) => {
    console.info('onCallback2 success, changeData: ' + JSON.stringify(changeData));
  // file had changed, do something.
}

async function example(phAccessHelper: photoAccessHelper.PhotoAccessHelper){
  console.info('offAnalysisAlbumChangeDemo.');

  try {
    // Register onCallback1.
    phAccessHelper.onAnalysisAlbumChange(onCallback1);
    // Register onCallback2.
    phAccessHelper.onAnalysisAlbumChange(onCallback2);

    // Unregister the listening of onCallback1.
    phAccessHelper.offAnalysisAlbumChange(onCallback1);
  } catch (error) {
    console.error('offAnalysisAlbumChangeDemo failed, errCode is', error);
  }
}

```

## offAnalysisPhotoChange

```TypeScript
offAnalysisPhotoChange(callback?: Callback<PhotoAssetChangeInfos>): void
```

Unsubscribes from changes of analysis photos and videos.

**Since:** 23

**Required permissions:** 

 ohos.permission.READ_IMAGEVIDEO and ohos.permission.MANAGE_PRIVATE_PHOTOS

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;PhotoAssetChangeInfos> | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied |
| 202 | Called by non-system application. |
| 23800151 |  |
| 23800301 | Internal system error. You are advised to retry and check the logs.  Possible causes: 1. The database is corrupted. 2. The file system is abnormal. 3. The IPC request timed out. |

**Example**

```TypeScript
import { dataSharePredicates } from '@kit.ArkData'

let onCallback1 = (changeData: photoAccessHelper.PhotoAssetChangeInfos) => {
    console.info('onCallback1 success, changData: ' + JSON.stringify(changeData));
  // file had changed, do something.
}
let onCallback2 = (changeData: photoAccessHelper.PhotoAssetChangeInfos) => {
    console.info('onCallback2 success, changData: ' + JSON.stringify(changeData));
  // file had changed, do something.
}

async function example(phAccessHelper: photoAccessHelper.PhotoAccessHelper, context: Context){
  console.info('offAnalysisPhotoChangeDemo.');

  try {
    // Register onCallback1.
    phAccessHelper.offAnalysisPhotoChange(onCallback1);
    // Register onCallback2.
    phAccessHelper.offAnalysisPhotoChange(onCallback2);

    // Unregister the listening of onCallback1.
    phAccessHelper.offAnalysisPhotoChange(onCallback1);
  } catch (error) {
    console.error('offAnalysisPhotoChangeDemo failed, errCode is', error);
  }
}

```

## offhiddenAlbumChange

```TypeScript
offhiddenAlbumChange(callback?: Callback<AlbumChangeInfos>): void
```

Unsubscribes from changes of hidden albums.

**Since:** 23

**Required permissions:** 

 ohos.permission.READ_IMAGEVIDEO and ohos.permission.MANAGE_PRIVATE_PHOTOS

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;AlbumChangeInfos> | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied |
| 202 | Called by non-system application. |
| 23800151 |  |
| 23800301 | Internal system error. You are advised to retry and check the logs.  Possible causes: 1. The database is corrupted. 2. The file system is abnormal. 3. The IPC request timed out. |

## offHiddenPhotoChange

```TypeScript
offHiddenPhotoChange(callback?: Callback<PhotoAssetChangeInfos>): void
```

Unsubscribes from changes of hidden photos and videos.

**Since:** 23

**Required permissions:** 

 ohos.permission.READ_IMAGEVIDEO and ohos.permission.MANAGE_PRIVATE_PHOTOS

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;PhotoAssetChangeInfos> | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied |
| 202 | Called by non-system application. |
| 23800151 |  |
| 23800301 | Internal system error. You are advised to retry and check the logs.  Possible causes: 1. The database is corrupted. 2. The file system is abnormal. 3. The IPC request timed out. |

## offMediaLibraryAvailability

```TypeScript
offMediaLibraryAvailability(callback?: Callback<MediaLibraryAvailability>): void
```

Unsubscribes to changes of medialibrary availability.

**Since:** 26.0.0

**Required permissions:** 

 ohos.permission.READ_IMAGEVIDEO

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;MediaLibraryAvailability> | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied |
| 23800301 | Internal system error. It is recommended to retry and check the logs.  Possible causes: 1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out. |

## offPhotoAlbumChange

```TypeScript
offPhotoAlbumChange(callback?: Callback<AlbumChangeInfos>): void
```

Unsubscribes from album changes.

**Since:** 23

**Required permissions:** 

 ohos.permission.READ_IMAGEVIDEO

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;AlbumChangeInfos> | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied |
| 23800151 |  |
| 23800301 | Internal system error. You are advised to retry and check the logs.  Possible causes: 1. The database is corrupted. 2. The file system is abnormal. 3. The IPC request timed out. |

## offPhotoChange

```TypeScript
offPhotoChange(callback?: Callback<PhotoAssetChangeInfos>): void
```

Unsubscribes from changes of photos and videos.

**Since:** 23

**Required permissions:** 

 ohos.permission.READ_IMAGEVIDEO

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;PhotoAssetChangeInfos> | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied |
| 23800151 |  |
| 23800301 | Internal system error. You are advised to retry and check the logs.  Possible causes: 1. The database is corrupted. 2. The file system is abnormal. 3. The IPC request timed out. |

## offSinglePhotoAlbumChange

```TypeScript
offSinglePhotoAlbumChange(album?: Album, callback?: Callback<AlbumChangeInfos>): void
```

Unsubscribes from single album changes.

**Since:** 23

**Required permissions:** 

 ohos.permission.READ_IMAGEVIDEO

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| album | Album | No |  |
| callback | Callback&lt;AlbumChangeInfos> | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied |
| 23800151 |  |
| 23800301 | Internal system error. You are advised to retry and check the logs.  Possible causes: 1. The database is corrupted. 2. The file system is abnormal. 3. The IPC request timed out. |

## offSinglePhotoChange

```TypeScript
offSinglePhotoChange(asset?: PhotoAsset, callback?: Callback<PhotoAssetChangeInfos>): void
```

Unsubscribes from changes of single photos and videos.

**Since:** 23

**Required permissions:** 

 ohos.permission.READ_IMAGEVIDEO

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| asset | PhotoAsset | No |  |
| callback | Callback&lt;PhotoAssetChangeInfos> | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied |
| 23800151 |  |
| 23800301 | Internal system error. You are advised to retry and check the logs.  Possible causes: 1. The database is corrupted. 2. The file system is abnormal. 3. The IPC request timed out. |

## offTrashedAlbumChange

```TypeScript
offTrashedAlbumChange(callback?: Callback<AlbumChangeInfos>): void
```

Unsubscribes from changes in the trashed album.

**Since:** 23

**Required permissions:** 

 ohos.permission.READ_IMAGEVIDEO

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;AlbumChangeInfos> | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied |
| 202 | Called by non-system application. |
| 23800151 |  |
| 23800301 | Internal system error. You are advised to retry and check the logs.  Possible causes: 1. The database is corrupted. 2. The file system is abnormal. 3. The IPC request timed out. |

## offTrashedPhotoChange

```TypeScript
offTrashedPhotoChange(callback?: Callback<PhotoAssetChangeInfos>): void
```

Unsubscribes from changes of trashed photos and videos.

**Since:** 23

**Required permissions:** 

 ohos.permission.READ_IMAGEVIDEO

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;PhotoAssetChangeInfos> | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied |
| 202 | Called by non-system application. |
| 23800151 |  |
| 23800301 | Internal system error. You are advised to retry and check the logs.  Possible causes: 1. The database is corrupted. 2. The file system is abnormal. 3. The IPC request timed out. |

## on('photoChange')

```TypeScript
on(type: 'photoChange', callback: Callback<PhotoAssetChangeInfos>): void
```

Register the callback of photo changes.

**Since:** 20

**Required permissions:** 

 ohos.permission.READ_IMAGEVIDEO

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'photoChange' | Yes | The value is fixed at 'photoChange', indicating the photo change event. |
| callback | Callback&lt;PhotoAssetChangeInfos> | Yes | Callback invoked when the photo is changed. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied |
| 23800151 | The scenario parameter verification fails.  Possible causes: 1. The type is not fixed at 'photoChange'; 2. The same callback is registered repeatedly. |
| 23800301 | Internal system error. You are advised to retry and check the logs.  Possible causes: 1. The database is corrupted. 2. The file system is abnormal. 3. The IPC request timed out. |

## on('hiddenPhotoChange')

```TypeScript
on(type: 'hiddenPhotoChange', callback: Callback<PhotoAssetChangeInfos>): void
```

Register the callback of hidden photo changes.

**Since:** 20

**Required permissions:** 

 ohos.permission.READ_IMAGEVIDEO and ohos.permission.MANAGE_PRIVATE_PHOTOS

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'hiddenPhotoChange' | Yes | The value is fixed at 'hiddenPhotoChange', indicating the hidden photo change event. |
| callback | Callback&lt;PhotoAssetChangeInfos> | Yes | Callback invoked when the hidden photo is changed. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied |
| 202 | Called by non-system application |
| 23800151 | The scenario parameter verification fails.  Possible causes: 1. The type is not fixed at 'hiddenPhotoChange'; 2. The same callback is registered repeatedly. |
| 23800301 | Internal system error. You are advised to retry and check the logs.  Possible causes: 1. The database is corrupted. 2. The file system is abnormal. 3. The IPC request timed out. |

**Example**

```TypeScript
import { dataSharePredicates } from '@kit.ArkData'

let onCallback1 = (changeData: photoAccessHelper.PhotoAssetChangeInfos) => {
    console.info('onCallback1 success, changeData: ' + JSON.stringify(changeData));
  // file had changed, do something.
}
let onCallback2 = (changeData: photoAccessHelper.PhotoAssetChangeInfos) => {
    console.info('onCallback2 success, changeData: ' + JSON.stringify(changeData));
  // file had changed, do something.
}

async function example(phAccessHelper: photoAccessHelper.PhotoAccessHelper){
  console.info('onHiddenPhotoChangeDemo.');

  try {
    // Register onCallback1.
    phAccessHelper.on('hiddenPhotoChange', onCallback1);
    // Register onCallback2.
    phAccessHelper.on('hiddenPhotoChange', onCallback2);
  } catch (error) {
    console.error('onHiddenPhotoChange failed, errCode is', error);
  }
}

```

## on('trashedPhotoChange')

```TypeScript
on(type: 'trashedPhotoChange', callback: Callback<PhotoAssetChangeInfos>): void
```

Register the callback of trashed photo changes.

**Since:** 20

**Required permissions:** 

 ohos.permission.READ_IMAGEVIDEO

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'trashedPhotoChange' | Yes | The value is fixed at 'trashedPhotoChange', indicating the trashed photo change event. |
| callback | Callback&lt;PhotoAssetChangeInfos> | Yes | Callback invoked when the trashed photo is changed. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied |
| 202 | Called by non-system application |
| 23800151 | The scenario parameter verification fails.  Possible causes: 1. The type is not fixed at 'trashedPhotoChange'; 2. The same callback is registered repeatedly. |
| 23800301 | Internal system error. You are advised to retry and check the logs.  Possible causes: 1. The database is corrupted. 2. The file system is abnormal. 3. The IPC request timed out. |

**Example**

```TypeScript
import { dataSharePredicates } from '@kit.ArkData'

let onCallback1 = (changeData: photoAccessHelper.PhotoAssetChangeInfos) => {
    console.info('onCallback1 success, changData: ' + JSON.stringify(changeData));
  // file had changed, do something.
}
let onCallback2 = (changeData: photoAccessHelper.PhotoAssetChangeInfos) => {
    console.info('onCallback2 success, changData: ' + JSON.stringify(changeData));
  // file had changed, do something.
}

async function example(phAccessHelper: photoAccessHelper.PhotoAccessHelper, context: Context){
  console.info('onTrashedPhotoChangeDemo.');

  try {
    // Register onCallback1.
    phAccessHelper.on('trashedPhotoChange', onCallback1);
    // Register onCallback2.
    phAccessHelper.on('trashedPhotoChange', onCallback2);
  } catch (error) {
    console.error('onTrashedPhotoChangeDemo failed, errCode is', error);
  }
}

```

## on('photoAlbumChange')

```TypeScript
on(type: 'photoAlbumChange', callback: Callback<AlbumChangeInfos>): void
```

Register the callback of album changes.

**Since:** 20

**Required permissions:** 

 ohos.permission.READ_IMAGEVIDEO

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'photoAlbumChange' | Yes | The value is fixed at 'photoAlbumChange', indicating the album change event. |
| callback | Callback&lt;AlbumChangeInfos> | Yes | Callback invoked when the album is changed. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied |
| 23800151 | The scenario parameter verification fails.  Possible causes: 1. The type is not fixed at 'photoAlbumChange'; 2. The same callback is registered repeatedly. |
| 23800301 | Internal system error. You are advised to retry and check the logs.  Possible causes: 1. The database is corrupted. 2. The file system is abnormal. 3. The IPC request timed out. |

## on('hiddenAlbumChange')

```TypeScript
on(type: 'hiddenAlbumChange', callback: Callback<AlbumChangeInfos>): void
```

Register the callback of hidden album changes.

**Since:** 20

**Required permissions:** 

 ohos.permission.READ_IMAGEVIDEO and ohos.permission.MANAGE_PRIVATE_PHOTOS

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'hiddenAlbumChange' | Yes | The value is fixed at 'hiddenAlbumChange', indicating the hidden album change event. |
| callback | Callback&lt;AlbumChangeInfos> | Yes | Callback invoked when the hidden album is changed. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied |
| 202 | Called by non-system application |
| 23800151 | The scenario parameter verification fails.  Possible causes: 1. The type is not fixed at 'hiddenAlbumChange'; 2. The same callback is registered repeatedly. |
| 23800301 | Internal system error. You are advised to retry and check the logs.  Possible causes: 1. The database is corrupted. 2. The file system is abnormal. 3. The IPC request timed out. |

**Example**

```TypeScript
import { dataSharePredicates } from '@kit.ArkData'

let onCallback1 = (changeData: photoAccessHelper.AlbumChangeInfos) => {
    console.info('onCallback1 success, changeData: ' + JSON.stringify(changeData));
  // file had changed, do something.
}
let onCallback2 = (changeData: photoAccessHelper.AlbumChangeInfos) => {
    console.info('onCallback2 success, changeData: ' + JSON.stringify(changeData));
  // file had changed, do something.
}

async function example(phAccessHelper: photoAccessHelper.PhotoAccessHelper){
  console.info('onHiddenAlbumChangeDemo.');

  try {
    // Register onCallback1.
    phAccessHelper.on('hiddenAlbumChange', onCallback1);
    // Register onCallback2.
    phAccessHelper.on('hiddenAlbumChange', onCallback2);
  } catch (error) {
    console.error('onHiddenAlbumChangeDemo failed, errCode is', error);
  }
}

```

## on('trashedAlbumChange')

```TypeScript
on(type: 'trashedAlbumChange', callback: Callback<AlbumChangeInfos>): void
```

Register the callback of trashed album changes.

**Since:** 20

**Required permissions:** 

 ohos.permission.READ_IMAGEVIDEO

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'trashedAlbumChange' | Yes | The value is fixed at 'trashedAlbumChange', indicating the trashed album change event. |
| callback | Callback&lt;AlbumChangeInfos> | Yes | Callback invoked when the trashed album is changed. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied |
| 202 | Called by non-system application |
| 23800151 | The scenario parameter verification fails.  Possible causes: 1. The type is not fixed at 'trashedAlbumChange'; 2. The same callback is registered repeatedly. |
| 23800301 | Internal system error. You are advised to retry and check the logs.  Possible causes: 1. The database is corrupted. 2. The file system is abnormal. 3. The IPC request timed out. |

**Example**

```TypeScript
import { dataSharePredicates } from '@kit.ArkData'

let onCallback1 = (changeData: photoAccessHelper.AlbumChangeInfos) => {
    console.info('onCallback1 success, changeData: ' + JSON.stringify(changeData));
  // file had changed, do something.
}
let onCallback2 = (changeData: photoAccessHelper.AlbumChangeInfos) => {
    console.info('onCallback2 success, changeData: ' + JSON.stringify(changeData));
  // file had changed, do something.
}

async function example(phAccessHelper: photoAccessHelper.PhotoAccessHelper, context: Context){
  console.info('onTrashedAlbumChangeDemo.');

  try {
    // Register onCallback1.
    phAccessHelper.on('trashedAlbumChange', onCallback1);
    // Register onCallback2.
    phAccessHelper.on('trashedAlbumChange', onCallback2);
  } catch (error) {
    console.error('onTrashedAlbumChangeDemo failed, errCode is', error);
  }
}

```

## onAnalysisAlbumChange

```TypeScript
onAnalysisAlbumChange(callback: Callback<AlbumChangeInfos>): void
```

Subscribes to changes of the analysis album.

**Since:** 23

**Required permissions:** 

 ohos.permission.READ_IMAGEVIDEO

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;AlbumChangeInfos> | Yes | Callback used to notify the application of the changes. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied |
| 202 | Called by non-system application. |
| 23800151 |  |
| 23800301 | Internal system error. You are advised to retry and check the logs.  Possible causes: 1. The database is corrupted. 2. The file system is abnormal. 3. The IPC request timed out. |

**Example**

```TypeScript
import { dataSharePredicates } from '@kit.ArkData'

let onCallback1 = (changeData: photoAccessHelper.AlbumChangeInfos) => {
    console.info('onCallback1 success, changeData: ' + JSON.stringify(changeData));
  // file had changed, do something.
}
let onCallback2 = (changeData: photoAccessHelper.AlbumChangeInfos) => {
    console.info('onCallback2 success, changeData: ' + JSON.stringify(changeData));
  // file had changed, do something.
}

async function example(phAccessHelper: photoAccessHelper.PhotoAccessHelper){
  console.info('onAnalysisAlbumChangeDemo.');

  try {
    // Register onCallback1.
    phAccessHelper.onAnalysisAlbumChange(onCallback1);
    // Register onCallback2.
    phAccessHelper.onAnalysisAlbumChange(onCallback2);
  } catch (error) {
    console.error('onAnalysisAlbumChangeDemo failed, errCode is', error);
  }
}

```

## onAnalysisPhotoChange

```TypeScript
onAnalysisPhotoChange(callback: Callback<PhotoAssetChangeInfos>): void
```

Subscribes to changes of analysis photos and videos.

**Since:** 23

**Required permissions:** 

 ohos.permission.READ_IMAGEVIDEO and ohos.permission.MANAGE_PRIVATE_PHOTOS

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;PhotoAssetChangeInfos> | Yes | Callback used to notify the application of the changes. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied |
| 202 | Called by non-system application. |
| 23800151 |  |
| 23800301 | Internal system error. You are advised to retry and check the logs.  Possible causes: 1. The database is corrupted. 2. The file system is abnormal. 3. The IPC request timed out. |

**Example**

```TypeScript
import { dataSharePredicates } from '@kit.ArkData'

let onCallback1 = (changeData: photoAccessHelper.PhotoAssetChangeInfos) => {
    console.info('onCallback1 success, changData: ' + JSON.stringify(changeData));
  // file had changed, do something.
}
let onCallback2 = (changeData: photoAccessHelper.PhotoAssetChangeInfos) => {
    console.info('onCallback2 success, changData: ' + JSON.stringify(changeData));
  // file had changed, do something.
}

async function example(phAccessHelper: photoAccessHelper.PhotoAccessHelper, context: Context){
  console.info('onAnalysisPhotoChangeDemo.');

  try {
    // Register onCallback1.
    phAccessHelper.onAnalysisPhotoChange(onCallback1);
    // Register onCallback2.
    phAccessHelper.onAnalysisPhotoChange(onCallback2);
  } catch (error) {
    console.error('onAnalysisPhotoChangeDemo failed, errCode is', error);
  }
}

```

## onHiddenAlbumChange

```TypeScript
onHiddenAlbumChange(callback: Callback<AlbumChangeInfos>): void
```

Subscribes to changes of hidden albums.

**Since:** 23

**Required permissions:** 

 ohos.permission.READ_IMAGEVIDEO and ohos.permission.MANAGE_PRIVATE_PHOTOS

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;AlbumChangeInfos> | Yes | Callback used to notify the application of the changes. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied |
| 202 | Called by non-system application. |
| 23800151 |  |
| 23800301 | Internal system error. You are advised to retry and check the logs.  Possible causes: 1. The database is corrupted. 2. The file system is abnormal. 3. The IPC request timed out. |

## onHiddenPhotoChange

```TypeScript
onHiddenPhotoChange(callback: Callback<PhotoAssetChangeInfos>): void
```

Subscribes to changes of hidden photos and videos.

**Since:** 23

**Required permissions:** 

 ohos.permission.READ_IMAGEVIDEO and ohos.permission.MANAGE_PRIVATE_PHOTOS

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;PhotoAssetChangeInfos> | Yes | Callback used to notify the application of the changes. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied |
| 202 | Called by non-system application. |
| 23800151 |  |
| 23800301 | Internal system error. You are advised to retry and check the logs.  Possible causes: 1. The database is corrupted. 2. The file system is abnormal. 3. The IPC request timed out. |

## onMediaLibraryAvailability

```TypeScript
onMediaLibraryAvailability(callback: Callback<MediaLibraryAvailability>): void
```

Subscribes to changes of medialibrary availability.

**Since:** 26.0.0

**Required permissions:** 

 ohos.permission.READ_IMAGEVIDEO

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;MediaLibraryAvailability> | Yes | Callback used to return the MediaLibraryAvailability. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied |
| 23800151 | Scenario-specific parameters are incorrect. Possible causes are as follows:  1. The input parameter is null or undefined. |
| 23800301 | Internal system error. It is recommended to retry and check the logs.  Possible causes: 1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out. |

## onPhotoAlbumChange

```TypeScript
onPhotoAlbumChange(callback: Callback<AlbumChangeInfos>): void
```

Subscribes to album changes.

**Since:** 23

**Required permissions:** 

 ohos.permission.READ_IMAGEVIDEO

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;AlbumChangeInfos> | Yes | Callback used to notify the application of the changes. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied |
| 23800151 |  |
| 23800301 | Internal system error. You are advised to retry and check the logs.  Possible causes: 1. The database is corrupted. 2. The file system is abnormal. 3. The IPC request timed out. |

## onPhotoChange

```TypeScript
onPhotoChange(callback: Callback<PhotoAssetChangeInfos>): void
```

Subscribes to changes of photos and videos.

**Since:** 23

**Required permissions:** 

 ohos.permission.READ_IMAGEVIDEO

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;PhotoAssetChangeInfos> | Yes | Callback used to notify the application of the changes. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied |
| 23800151 |  |
| 23800301 | Internal system error. You are advised to retry and check the logs.  Possible causes: 1. The database is corrupted. 2. The file system is abnormal. 3. The IPC request timed out. |

## onSinglePhotoAlbumChange

```TypeScript
onSinglePhotoAlbumChange(album: Album, callback: Callback<AlbumChangeInfos>): void
```

Subscribes to single album changes.

**Since:** 23

**Required permissions:** 

 ohos.permission.READ_IMAGEVIDEO

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| album | Album | Yes | Album to be listened. |
| callback | Callback&lt;AlbumChangeInfos> | Yes | Callback used to notify the application of the changes. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied |
| 23800151 |  |
| 23800301 | Internal system error. You are advised to retry and check the logs.  Possible causes: 1. The database is corrupted. 2. The file system is abnormal. 3. The IPC request timed out. |

## onSinglePhotoChange

```TypeScript
onSinglePhotoChange(asset: PhotoAsset, callback: Callback<PhotoAssetChangeInfos>): void
```

Subscribes to changes of single photos and videos.

**Since:** 23

**Required permissions:** 

 ohos.permission.READ_IMAGEVIDEO

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| asset | PhotoAsset | Yes | Asset to be listened. |
| callback | Callback&lt;PhotoAssetChangeInfos> | Yes | Callback used to notify the application of the changes. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied |
| 23800151 |  |
| 23800301 | Internal system error. You are advised to retry and check the logs.  Possible causes: 1. The database is corrupted. 2. The file system is abnormal. 3. The IPC request timed out. |

## onTrashedAlbumChange

```TypeScript
onTrashedAlbumChange(callback: Callback<AlbumChangeInfos>): void
```

Subscribes to changes of the trashed album.

**Since:** 23

**Required permissions:** 

 ohos.permission.READ_IMAGEVIDEO

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;AlbumChangeInfos> | Yes | Callback used to notify the application of the changes. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied |
| 202 | Called by non-system application. |
| 23800151 |  |
| 23800301 | Internal system error. You are advised to retry and check the logs.  Possible causes: 1. The database is corrupted. 2. The file system is abnormal. 3. The IPC request timed out. |

## onTrashedPhotoChange

```TypeScript
onTrashedPhotoChange(callback: Callback<PhotoAssetChangeInfos>): void
```

Subscribes to changes of trashed photos and videos.

**Since:** 23

**Required permissions:** 

 ohos.permission.READ_IMAGEVIDEO

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;PhotoAssetChangeInfos> | Yes | Callback used to notify the application of the changes. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied |
| 202 | Called by non-system application. |
| 23800151 |  |
| 23800301 | Internal system error. You are advised to retry and check the logs.  Possible causes: 1. The database is corrupted. 2. The file system is abnormal. 3. The IPC request timed out. |

## query

```TypeScript
query(sql: string): Promise<ResultSet>
```

Queries data in the database based on specified conditions.

**Since:** 22

**Required permissions:** 

 ohos.permission.ACCESS_MEDIALIB_THUMB_DB

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| sql | string | Yes | The query conditions. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;ResultSet> | The {@link ResultSet} object if the operation is successful. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied |
| 202 | Called by non-system application |
| 23800151 | The scenario parameter verification fails.  Possible causes: The SQL statement is abnormal. |
| 23800301 | Internal system error. You are advised to retry and check the logs.  Possible causes: 1. The database is corrupted. 2. The file system is abnormal. 3. The IPC request timed out. |

**Example**

```TypeScript
async function example(phAccessHelper: photoAccessHelper.PhotoAccessHelper) {
  console.info('query');
  try {
    let ret: photoAccessHelper.ResultSet = await phAccessHelper.query('SELECT * from Photos');
    while (ret.goToNextRow()) {
      let row = ret.getRow();
      Object.entries(row).forEach((entry) => {
        const key = entry[0];
        const value = entry[1];
      });
    }
    ret.close();
  } catch (err) {
    console.error(`query failed with error: ${err.code}, ${err.message}`);
  }
}

```

## registerChange

```TypeScript
registerChange(uri: string, forChildUris: boolean, callback: Callback<ChangeData>): void
```

Registers listening for the specified URI. This API uses a callback to return the result.

**Since:** 10

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uri | string | Yes | URI of the photo asset, URI of the album, or DefaultChangeUri. |
| forChildUris | boolean | Yes | Whether to perform fuzzy listening.  If uri is the URI of an album, the value true means to listen for the changes of the files in the album;  the value false means to listen for the changes of the album only.  If uri is the URI of a photoAsset, there is no difference between true and false for forChildUris.  If uri is DefaultChangeUri, forChildUris must be set to true. If forChildUris is false,  the URI cannot be found and no message can be received. |
| callback | Callback&lt;ChangeData> | Yes | Callback used to return the ChangeData.  Multiple callback listeners can be registered for a URI.  You can use unRegisterChange to unregister all listeners for the URI or a specified callback listener. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 13900012 | Permission denied |
| 13900020 | Invalid argument |

## release

```TypeScript
release(callback: AsyncCallback<void>): void
```

Releases this PhotoAccessHelper instance. This API uses an asynchronous callback to return the result. Call this API when the APIs of the PhotoAccessHelper instance are no longer used.

**Since:** 10

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | Yes | Callback used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |
| 13900020 | Invalid argument |
| 14000011 | System inner fail |

## release

```TypeScript
release(): Promise<void>
```

Releases this PhotoAccessHelper instance. This API uses a promise to return the result. Call this API when the APIs of the PhotoAccessHelper instance are no longer used.

**Since:** 10

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Returns void |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |
| 13900020 | Invalid argument |
| 14000011 | System inner fail |

## releaseDebugDatabase

```TypeScript
releaseDebugDatabase(betaIssueId: string, dbFd: int): Promise<void>
```

Release medialibrary database backup resources includes closing backup database fd and deleting temporary backup database file which only works on beta device.

**Since:** 23

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| betaIssueId | string | Yes | The beta issue id. |
| dbFd | int | Yes | The backup database fd. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Return void. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Called by non-system application. |
| 23800151 | The scenario parameter verification fails. Possible causes:  1. The betaIssueId parameter is invalid, such as null, undefined or empty string.  2. The dbFd parameter is invalid, such as out of range 0~1023. |
| 23800201 | Unsupported operation type, this api only works on beta device. |
| 23800301 | Internal system error. You are advised to retry and check the logs.  Possible causes: 1. Database corrupted. 2. The file system is abnormal. 3. The IPC request timed out. |

## removeFormInfo

```TypeScript
removeFormInfo(info: FormInfo, callback: AsyncCallback<void>): void
```

Removes form information

**Since:** 11

**Required permissions:** 

 ohos.permission.WRITE_IMAGEVIDEO

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| info | FormInfo | Yes | Information store with the form. |
| callback | AsyncCallback&lt;void> | Yes | No value returned. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed, usually the result returned by VerifyAccessToken. |
| 202 | Permission verification failed, application which is not a system application uses system API. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14000011 | System inner fail. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

async function example(phAccessHelper: photoAccessHelper.PhotoAccessHelper) {
  console.info('removeFormInfoDemo');
  let info: photoAccessHelper.FormInfo = {
    // formId is a string consisting of only digits. When removing a widget, leave uri empty.
    formId: "20230116123",
    uri: "",
  }

  phAccessHelper.removeFormInfo(info, async (err: BusinessError) => {
    if (err == undefined) {
      console.info('removeFormInfo success');
    } else {
      console.error(`removeFormInfo fail with error: ${err.code}, ${err.message}`);
    }
  });
}

```

## removeFormInfo

```TypeScript
removeFormInfo(info: FormInfo): Promise<void>
```

Removes form information

**Since:** 11

**Required permissions:** 

 ohos.permission.WRITE_IMAGEVIDEO

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| info | FormInfo | Yes | Information store with the form. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Return void. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed, usually the result returned by VerifyAccessToken. |
| 202 | Permission verification failed, application which is not a system application uses system API. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14000011 | System inner fail. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

async function example(phAccessHelper: photoAccessHelper.PhotoAccessHelper) {
  console.info('removeFormInfoDemo');
  let info: photoAccessHelper.FormInfo = {
    // formId is a string consisting of only digits. When removing a widget, leave uri empty.
    formId: "20230116123",
    uri: "",
  }

  phAccessHelper.removeFormInfo(info).then(() => {
    console.info('removeFormInfo successfully');
  }).catch((err: BusinessError) => {
    console.error(`removeFormInfo failed with error: ${err.code}, ${err.message}`);
  });
}

```

## removeGalleryFormInfo

```TypeScript
removeGalleryFormInfo(info: GalleryFormInfo): Promise<void>
```

Removes gallery form information

**Since:** 18

**Required permissions:** 

 ohos.permission.WRITE_IMAGEVIDEO

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| info | GalleryFormInfo | Yes | Information store with the gallery form. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Return void. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed, usually the result returned by VerifyAccessToken. |
| 202 | Permission verification failed, application which is not a system application uses system API. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14000011 | System inner fail. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

async function example(phAccessHelper: photoAccessHelper.PhotoAccessHelper) {
  console.info('removeGalleryFormInfoDemo');
  let info: photoAccessHelper.GalleryFormInfo = {
    // formId is a string consisting of only digits. When removing a widget, leave assertUris empty.
    formId: "20230116123"
  }

  phAccessHelper.removeGalleryFormInfo(info).then(() => {
    console.info('removeGalleryFormInfo successfully');
  }).catch((err: BusinessError) => {
    console.error(`removeGalleryFormInfo failed with error: ${err.code}, ${err.message}`);
  });
}

```

## requestPhotoUrisReadPermission

```TypeScript
requestPhotoUrisReadPermission(srcFileUris: Array<string>): Promise<Array<string>>
```

Grants the save permission for URIs. This API uses a promise to return the result.

**Since:** 14

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| srcFileUris | Array&lt;string> | Yes | URIs of the images or videos to be granted with the permission. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;string>> | - Returns the authorized uri list |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14000011 | Internal system error |

## requestPhotoUrisReadPermissionEx

```TypeScript
requestPhotoUrisReadPermissionEx(srcFileUris: Array<string>): Promise<RequestReadPermissionResult>
```

Grants the save permission for URIs. This API uses a promise to return the result.

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| srcFileUris | Array&lt;string> | Yes | URIs of the images or videos to be granted with the permission. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;RequestReadPermissionResult> | - Returns the result list,  which includes authorized URI list and invalid URI list. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 23800301 | Internal system error.  It is recommended to retry and check the logs. Possible causes:  1. Database corrupted;  2. The file system is abnormal;  3. The IPC request timed out. |

## saveFormInfo

```TypeScript
saveFormInfo(info: FormInfo, callback: AsyncCallback<void>): void
```

Saves form information

**Since:** 11

**Required permissions:** 

 ohos.permission.WRITE_IMAGEVIDEO

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| info | FormInfo | Yes | Information store with the form. |
| callback | AsyncCallback&lt;void> | Yes | No value returned. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed, usually the result returned by VerifyAccessToken. |
| 202 | Permission verification failed, application which is not a system application uses system API. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14000011 | System inner fail. |

**Example**

```TypeScript
import { dataSharePredicates } from '@kit.ArkData';
import { BusinessError } from '@kit.BasicServicesKit';

async function example(phAccessHelper: photoAccessHelper.PhotoAccessHelper) {
  console.info('saveFormInfoDemo');
  let predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();
  let fetchOptions: photoAccessHelper.FetchOptions = {
    fetchColumns: [],
    predicates: predicates
  };
  let fetchResult: photoAccessHelper.FetchResult<photoAccessHelper.PhotoAsset> = await phAccessHelper.getAssets(fetchOptions);
  let photoAsset: photoAccessHelper.PhotoAsset = await fetchResult.getFirstObject();

  let info: photoAccessHelper.FormInfo = {
    // formId is a string consisting of only digits. uri indicates the URI of the image in Gallery. If there is no image in Gallery, uri must be an empty string.
    formId : "20230116123",
    uri: photoAsset.uri,
  }

  phAccessHelper.saveFormInfo(info, async (err: BusinessError) => {
    if (err == undefined) {
      console.info('saveFormInfo success');
    } else {
      console.error(`saveFormInfo fail with error: ${err.code}, ${err.message}`);
    }
  });
}

```

## saveFormInfo

```TypeScript
saveFormInfo(info: FormInfo): Promise<void>
```

Saves form information

**Since:** 11

**Required permissions:** 

 ohos.permission.WRITE_IMAGEVIDEO

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| info | FormInfo | Yes | Information store with the form. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Return void. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed, usually the result returned by VerifyAccessToken. |
| 202 | Permission verification failed, application which is not a system application uses system API. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14000011 | System inner fail. |

**Example**

```TypeScript
import { dataSharePredicates } from '@kit.ArkData';
import { BusinessError } from '@kit.BasicServicesKit';

async function example(phAccessHelper: photoAccessHelper.PhotoAccessHelper) {
  console.info('saveFormInfoDemo');
  let predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();
  let fetchOptions: photoAccessHelper.FetchOptions = {
    fetchColumns: [],
    predicates: predicates
  };
  let fetchResult: photoAccessHelper.FetchResult<photoAccessHelper.PhotoAsset> = await phAccessHelper.getAssets(fetchOptions);
  let photoAsset: photoAccessHelper.PhotoAsset = await fetchResult.getFirstObject();

  let info: photoAccessHelper.FormInfo = {
    // formId is a string consisting of only digits. uri indicates the URI of the image in Gallery. If there is no image in Gallery, uri must be an empty string.
    formId: "20230116123",
    uri: photoAsset.uri,
  }

  phAccessHelper.saveFormInfo(info).then(() => {
    console.info('saveFormInfo successfully');
  }).catch((err: BusinessError) => {
    console.error(`saveFormInfo failed with error: ${err.code}, ${err.message}`);
  });
}

```

## saveGalleryFormInfo

```TypeScript
saveGalleryFormInfo(info: GalleryFormInfo): Promise<void>
```

Saves gallery form information

**Since:** 18

**Required permissions:** 

 ohos.permission.WRITE_IMAGEVIDEO

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| info | GalleryFormInfo | Yes | Information store with the gallery form. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Return void. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed, usually the result returned by VerifyAccessToken. |
| 202 | Permission verification failed, application which is not a system application uses system API. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14000011 | System inner fail. |

**Example**

```TypeScript
import { dataSharePredicates } from '@kit.ArkData';
import { BusinessError } from '@kit.BasicServicesKit';

async function example(phAccessHelper: photoAccessHelper.PhotoAccessHelper) {
  console.info('saveGalleryFormInfoDemo');
  let predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();
  let fetchOptions: photoAccessHelper.FetchOptions = {
    fetchColumns: [],
    predicates: predicates
  };
  let fetchResult: photoAccessHelper.FetchResult<photoAccessHelper.PhotoAsset> = await phAccessHelper.getAssets(fetchOptions);
  if (fetchResult === undefined) {
    console.error('fetchResult is undefined');
    return;
  }  
  let photoAsset: photoAccessHelper.PhotoAsset = await fetchResult.getFirstObject();
  if (photoAsset === undefined) {
    console.error('photoAsset is undefined');
    return;
  }
  let uriList: Array<string> = [
    photoAsset.uri,
  ];
  let info: photoAccessHelper.GalleryFormInfo = {
    // formId is a string consisting of only digits. assetUris indicates the URIs of the images or albums in Gallery.
    formId: "20230116123",
    assetUris: uriList,
  }

  phAccessHelper.saveGalleryFormInfo(info).then(() => {
    console.info('saveGalleryFormInfo successfully');
  }).catch((err: BusinessError) => {
    console.error(`saveGalleryFormInfo failed with error: ${err.code}, ${err.message}`);
  });
}

```

## setAssetCompatibleCapability

```TypeScript
setAssetCompatibleCapability(capability: AssetCompatibleCapability): Promise<void>
```

Configure the asset compatibility capability. The system is compatible with special assets, and if you want to obtain original assets, you need to register compatibility capabilities into system.

**Since:** 24

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| capability | AssetCompatibleCapability | Yes | Asset compatible Capability  Asset compatible Capability |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Returns void. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 23800151 | The capability is invalid. |
| 23800301 | Internal system error. It is recommended to retry and check the logs.  Possible causes: 1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out. |

## setAssetCompatibleCapability

```TypeScript
setAssetCompatibleCapability(bundleName: string, capability: AssetCompatibleCapability): Promise<void>
```

Configure the asset compatibility capability based on bundleName. You can obtain compatibility capabilities and determine whether to perform compatibility conversion based on the compatibility capabilities.

**Since:** 24

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | Bundle name of target application. |
| capability | AssetCompatibleCapability | Yes | Asset compatible Capability  Asset compatible Capability |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Returns void. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Called by non-system application. |
| 23800151 | The bundleName or capability is invalid. |
| 23800301 | Internal system error. It is recommended to retry and check the logs.  Possible causes: 1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out. |

**Example**

```TypeScript
async function example(phAccessHelper: photoAccessHelper.PhotoAccessHelper) {
  try {
    let bundleName = "com.test.example";
    let capability : photoAccessHelper.AssetCompatibleCapability = {
        supportedHighResolution : true,
    };
    await phAccessHelper.setAssetCompatibleCapability(bundleName, capability);
  } catch (error) {
    console.error('failed to setAssetCompatibleCapability err', error);
  }
}

```

## setPhotoAlbumOrder

```TypeScript
setPhotoAlbumOrder(orderStyle: int, albumOrders: Array<AlbumOrder>): Promise<void>
```

Set Order of Photo Albums.

**Since:** 20

**Required permissions:** 

 ohos.permission.WRITE_IMAGEVIDEO

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| orderStyle | int | Yes | order style for albums |
| albumOrders | Array&lt;AlbumOrder> | Yes | array AlbumOrder of the content. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | - Returns void |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Called by non-system application. |
| 23800151 | The scenario parameter verification fails.  Possible causes: 1.The input parameter is not within the valid range. |
| 23800301 | Internal system error. It is recommended to retry and check the logs.  Possible causes: 1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out. |

**Example**

```TypeScript
import { dataSharePredicates } from '@kit.ArkData';
import { BusinessError } from '@kit.BasicServicesKit';

async function example(phAccessHelper: photoAccessHelper.PhotoAccessHelper) {
  console.info('setPhotoAlbumOrderDemo');
  let predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();
  let fetchOptions: photoAccessHelper.FetchOptions = {
    fetchColumns: [],
    predicates: predicates
  };
  let orderStyle: number = 0;
  phAccessHelper.getPhotoAlbumOrder(orderStyle, fetchOptions).then( async (fetchResult) => {
    if (fetchResult === undefined) {
      console.error('getPhotoAlbumOrderPromise fetchResult is undefined');
      return;
    }
    let albumOrder: photoAccessHelper.AlbumOrder = await fetchResult.getFirstObject();
    albumOrder.albumOrder = 10;
    albumOrder.orderSection = 0;
    albumOrder.orderType = 1;
    albumOrder.orderStatus = 1;
    await phAccessHelper.setPhotoAlbumOrder(orderStyle, [albumOrder]);
    console.info('setPhotoAlbumOrderPromise successfully.');
    fetchResult.close();
  }).catch((err: BusinessError) => {
    console.error(`setPhotoAlbumOrderPromise failed with err: ${err.code}, ${err.message}`);
  });
}

```

## setPreferredCompatibleMode

```TypeScript
setPreferredCompatibleMode(bundleName: string, compatibleMode: PreferredCompatibleMode): Promise<void>
```

Configure the preferred compatible mode configured by the application based on bundleName. There are three application types. For details, see PreferredCompatibleMode.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | The app bundleName. |
| compatibleMode | PreferredCompatibleMode | Yes | Preferred compatible mode of the application. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Returns void. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Called by non-system application. |
| 23800151 | The bundleName is invalid, such as null, undefined and empty. |
| 23800301 | Internal system error. It is recommended to retry and check the logs.  Possible causes: 1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

async function setPreferredCompatibleMode(
  phAccessHelper: photoAccessHelper.PhotoAccessHelper,
  bundleName: string,
  preferredCompatibleMode: photoAccessHelper.PreferredCompatibleMode
): Promise<void> {
  console.info('setPreferredCompatibleModeDemo');
  phAccessHelper.setPreferredCompatibleMode(bundleName, preferredCompatibleMode)
    .then(() => {
      console.info('setPreferredCompatibleMode successfully');
    })
    .catch((err: BusinessError) => {
      console.error(`The setPreferredCompatibleMode call failed. error: ${err.code}, ${err.message}`);
    });
}

```

## showAssetsCreationDialog

```TypeScript
showAssetsCreationDialog(srcFileUris: Array<string>, photoCreationConfigs: Array<PhotoCreationConfig>): Promise<Array<string>>
```

Create a save dialog to save photos

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| srcFileUris | Array&lt;string> | Yes | List of the file uris to be saved |
| photoCreationConfigs | Array&lt;PhotoCreationConfig> | Yes | List of the photo asset creation configs |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;string>> | - Returns the media library file uri list to application which has been authorized |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14000011 | Internal system error |

## showAssetsCreationDialogEx

```TypeScript
showAssetsCreationDialogEx(srcFileUris: Array<string>, creationSettings: Array<CreationSetting>): Promise<Array<string>>
```

Create a save dialog to save photos

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| srcFileUris | Array&lt;string> | Yes | List of the file uris to be saved |
| creationSettings | Array&lt;CreationSetting> | Yes | List of the photo asset creation settings |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;string>> | - Returns the media library file uri list to application which has been authorized |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 23800301 | Internal system error.  It is recommended to retry and check the logs. Possible causes:  1. Database corrupted;  2. The file system is abnormal;  3. The IPC request timed out. |

## showSingleAssetCreationDialogEx

```TypeScript
showSingleAssetCreationDialogEx(srcFileUri: string, creationSetting: CreationSetting, isImageFullyDisplayed: boolean): Promise<string>
```

Create a save dialog to save single photo

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| srcFileUri | string | Yes | The file uri to be saved |
| creationSetting | CreationSetting | Yes | The photo asset creation setting |
| isImageFullyDisplayed | boolean | Yes | Supports displaying the image without cropping in the window |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;string> | - Returns the media library file uri to application which has been authorized |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 23800301 | Internal system error.  It is recommended to retry and check the logs. Possible causes:  1. Database corrupted;  2. The file system is abnormal;  3. The IPC request timed out. |

## startAssetAnalysis

```TypeScript
startAssetAnalysis(type: AnalysisType, assetUris?: Array<string>): Promise<int>
```

Starts asset analysis.

**Since:** 18

**Required permissions:** 

 ohos.permission.WRITE_IMAGEVIDEO

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | AnalysisType | Yes | Smart analysis type. |
| assetUris | Array&lt;string> | No | Array of asset URIs. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;int> | Returns the task id of the service. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied |
| 202 | Called by non-system application |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

**Example**

```TypeScript
async function example(context: Context) {
  console.info('startAssetAnalysisDemo');
  try {
    let phAccessHelper = photoAccessHelper.getPhotoAccessHelper(context);
    let uris = ["file://media/Photo/14/IMG_1729066473_013/IMG_20241016_122253.jpg",
                "file://media/Photo/68/IMG_1729033213_018/IMG_20241016_100082.jpg"];
    let taskId = await phAccessHelper.startAssetAnalysis(photoAccessHelper.AnalysisType.ANALYSIS_SEARCH_INDEX,
        uris);
    console.info('startAssetAnalysis success, taskId=' + taskId);
  } catch (err) {
    console.error('startAssetAnalysis failed, error=' + err);
  }
}

```

## startAssetAnalysisAsync

```TypeScript
startAssetAnalysisAsync(config: AnalysisConfig, callback: Callback<AnalysisResult>): Promise<int>
```

Starts async asset analysis.

**Since:** 24

**Required permissions:** 

 ohos.permission.WRITE_IMAGEVIDEO

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| config | AnalysisConfig | Yes | Analysis config. The uris in config is from PhotoAsset. |
| callback | Callback&lt;AnalysisResult> | Yes | Callback used to notify the analysis result. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;int> | Returns the task id of the service. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Called by non-system application. |
| 23800151 | The scenario parameter verification fails. Possible causes:  1. Unsupported or invalid types of config;  2. The types or uris array size of config exceed max value. |
| 23800301 | Internal system error. It is recommended to retry and check the logs.  Possible causes: 1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out. |

**Example**

```TypeScript
let callback = (result: photoAccessHelper.AnalysisResult) => {
  console.info('startAssetAnalysisAsync callback result: ' + JSON.stringify(result));
};

async function example(phAccessHelper: photoAccessHelper.PhotoAccessHelper) {
  console.info('startAssetAnalysisAsyncDemo');
  let config: photoAccessHelper.AnalysisConfig = {
    types: [photoAccessHelper.AnalysisType.ANALYSIS_SEARCH_INDEX],
    uris: ['file://media/Photo/14/IMG_1729066473_013/IMG_20241016_122253.jpg'],
    extraInfos: '{"trigger":"manual"}'
  };

  try {
    let taskId = await phAccessHelper.startAssetAnalysisAsync(config, callback);
    console.info('startAssetAnalysisAsync success, taskId=' + taskId);
  } catch (err) {
    console.error(`startAssetAnalysisAsync failed with error: ${err.code}, ${err.message}`);
  }
}

```

## startDeepOptimizeSpace

```TypeScript
startDeepOptimizeSpace(callback?: Callback<DeepOptimizeSpaceProgress>): Promise<void>
```

Start deep optimize storage space. Before using this API, you are advised to call [canPerformDeepOptimizeSpace()] {@link photoAccessHelper.canPerformDeepOptimizeSpace} and call this API only when true is returned.

**Since:** 26.0.0

**Required permissions:** 

 ohos.permission.WRITE_IMAGEVIDEO

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;DeepOptimizeSpaceProgress> | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Called by non-system application. |
| 23800201 | Unsupported operation type, Possible causes:  1. Restarted repeatedly;  2. system is busy. Please try again later; |
| 23800301 | Internal system error. It is recommended to retry and check the logs.  Possible causes:  1. Database corrupted;  2. The file system is abnormal;  3. The IPC request timed out. |

**Example**

```TypeScript
async function example(phAccessHelper: photoAccessHelper.PhotoAccessHelper) {
  try {
    await phAccessHelper.startDeepOptimizeSpace((progress: photoAccessHelper.DeepOptimizeSpaceProgress) => {
      console.info(`startDeepOptimizeSpace progress: state=${progress.state}, progress=${progress.progress}`);
    });
    console.info('startDeepOptimizeSpace successfully');
  } catch (err) {
    console.error(`startDeepOptimizeSpace failed with error: ${err.code}, ${err.message}`);
  }
}

```

## startThumbnailCreationTask

```TypeScript
startThumbnailCreationTask(predicate: dataSharePredicates.DataSharePredicates, callback: AsyncCallback<void>): int
```

Provides the capability of thumbnail generation according to specified rules.

**Since:** 13

**Required permissions:** 

 ohos.permission.READ_IMAGEVIDEO

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| predicate | dataSharePredicates.DataSharePredicates | Yes | Rule options for generating thumbnails. |
| callback | AsyncCallback&lt;void> | Yes | Returns void when the task is completed. |

**Return value:**

| Type | Description |
| --- | --- |
| int | Create task id for generating thumbnails |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied |
| 202 | Called by non-system application |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14000011 | Internal system error |

**Example**

```TypeScript
import { dataSharePredicates } from '@kit.ArkData'

function testCallBack() {

}

async function example(phAccessHelper: photoAccessHelper.PhotoAccessHelper) {
  let predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();

  try {
    console.info('startThumbnailCreationTask test start');
    phAccessHelper.startThumbnailCreationTask(predicates, testCallBack);
  } catch (err) {
    console.error(`startThumbnailCreationTask failed, error: ${err.code}, ${err.message}`);
  }
}

```

## startThumbnailCreationTask

```TypeScript
startThumbnailCreationTask(predicate: dataSharePredicates.DataSharePredicates, callback: AsyncCallback<void>, response: AsyncCallback<int>): int
```

Provides the capability of thumbnail generation according to specified rules. Support for returning information indicating that all thumbnails have been generated.

**Since:** 23

**Required permissions:** 

 ohos.permission.READ_IMAGEVIDEO

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| predicate | dataSharePredicates.DataSharePredicates | Yes | Rule options for generating thumbnails. |
| callback | AsyncCallback&lt;void> | Yes | Returns void when the task is completed. |
| response | AsyncCallback&lt;int> | Yes | Return information indicating that all thumbnails have been generated. |

**Return value:**

| Type | Description |
| --- | --- |
| int | Create task id for generating thumbnails |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied |
| 202 | Called by non-system application |
| 23800151 | The scenario parameter verification fails.  Possible causes: The predicates invalid. |
| 23800301 | Internal system error.  It is recommended to retry and check the logs. Possible causes:  1. Database corrupted;  2. The file system is abnormal;  3. The IPC request timed out. |

**Example**

```TypeScript
import { dataSharePredicates } from '@kit.ArkData'

function testCallBack() {
  console.info(`startThumbnailCreationTask: First callback`);
}

async function example(phAccessHelper: photoAccessHelper.PhotoAccessHelper) {
  let predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();

  try {
    console.info('startThumbnailCreationTask test start');
    phAccessHelper.startThumbnailCreationTask(predicates, testCallBack, (err, state) =>{
        if(err) {
          console.error("error message: " + err?.message)
          console.error("error code: " + err?.code)
          return
        }
        console.info(`startThumbnailCreationTask: response state ${state}`);
      });
  } catch (err) {
    console.error(`startThumbnailCreationTask failed, error: ${err.code}, ${err.message}`);
  }
}

```

## stopAssetAnalysis

```TypeScript
stopAssetAnalysis(config: AnalysisConfig): void
```

Stops asset analysis.

**Since:** 24

**Required permissions:** 

 ohos.permission.WRITE_IMAGEVIDEO

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| config | AnalysisConfig | Yes | Analysis config. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Called by non-system application. |
| 23800151 | The scenario parameter verification fails. Possible causes:  1. Unsupported or invalid AnalysisType of config;  2. The types or uris array size of config exceed max value. |
| 23800301 | Internal system error. It is recommended to retry and check the logs.  Possible causes: 1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out. |

**Example**

```TypeScript
async function example(phAccessHelper: photoAccessHelper.PhotoAccessHelper) {
  console.info('stopAssetAnalysisDemo');
  let config: photoAccessHelper.AnalysisConfig = {
    types: [photoAccessHelper.AnalysisType.ANALYSIS_SEARCH_INDEX],
    uris: ['file://media/Photo/14/IMG_1729066473_013/IMG_20241016_122253.jpg']
  };

  try {
    phAccessHelper.stopAssetAnalysis(config);
    console.info('stopAssetAnalysis success');
  } catch (err) {
    console.error(`stopAssetAnalysis failed with error: ${err.code}, ${err.message}`);
  }
}

```

## stopDeepOptimizeSpace

```TypeScript
stopDeepOptimizeSpace(): Promise<void>
```

Stop deep optimize storage space.

**Since:** 26.0.0

**Required permissions:** 

 ohos.permission.WRITE_IMAGEVIDEO

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Called by non-system application. |
| 23800301 | Internal system error. It is recommended to retry and check the logs.  Possible causes:  1. Database corrupted;  2. The file system is abnormal;  3. The IPC request timed out. |

**Example**

```TypeScript
async function example(phAccessHelper: photoAccessHelper.PhotoAccessHelper) {
  try {
    await phAccessHelper.stopDeepOptimizeSpace();
    console.info('stopDeepOptimizeSpace successfully');
  } catch (err) {
    console.error(`stopDeepOptimizeSpace failed with error: ${err.code}, ${err.message}`);
  }
}

```

## stopThumbnailCreationTask

```TypeScript
stopThumbnailCreationTask(taskId: int): void
```

Provides the capability of stop generating thumbnails.

**Since:** 13

**Required permissions:** 

 ohos.permission.READ_IMAGEVIDEO

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| taskId | int | Yes | Stop generating thumbnail task id. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied |
| 202 | Called by non-system application |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14000011 | Internal system error |

**Example**

```TypeScript
async function example(phAccessHelper: photoAccessHelper.PhotoAccessHelper) {
  try {
    console.info('stopThumbnailCreationTask test start');
    let taskId: number = 75983;
    phAccessHelper.stopThumbnailCreationTask(taskId);
  } catch (err) {
    console.error(`stopThumbnailCreationTask failed, error: ${err.code}, ${err.message}`);
  }
}

```

## unRegisterChange

```TypeScript
unRegisterChange(uri: string, callback?: Callback<ChangeData>): void
```

Unregisters listening for the specified URI. Multiple callbacks can be registered for a URI for listening. You can use this API to unregister the listening of the specified callbacks or all callbacks.

**Since:** 10

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uri | string | Yes | URI of the photo asset, URI of the album, or DefaultChangeUri. |
| callback | Callback&lt;ChangeData> | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 13900012 | Permission denied |
| 13900020 | Invalid argument |

## updateGalleryFormInfo

```TypeScript
updateGalleryFormInfo(info: GalleryFormInfo): Promise<void>
```

Updates gallery form information

**Since:** 18

**Required permissions:** 

 ohos.permission.WRITE_IMAGEVIDEO

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| info | GalleryFormInfo | Yes | Information store with the gallery form. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Return void. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed, usually the result returned by VerifyAccessToken. |
| 202 | Permission verification failed, application which is not a system application uses system API. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14000011 | System inner fail. |

**Example**

```TypeScript
import { dataSharePredicates } from '@kit.ArkData';
import { BusinessError } from '@kit.BasicServicesKit';

async function example(phAccessHelper: photoAccessHelper.PhotoAccessHelper) {
  console.info('updateGalleryFormInfoDemo');
  let predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();
  let fetchOptions: photoAccessHelper.FetchOptions = {
    fetchColumns: [],
    predicates: predicates
  };
  let fetchResult: photoAccessHelper.FetchResult<photoAccessHelper.PhotoAsset> = await phAccessHelper.getAssets(fetchOptions);
  let photoAsset: photoAccessHelper.PhotoAsset = await fetchResult.getFirstObject();
  let photoAssetLast: photoAccessHelper.PhotoAsset = await fetchResult.getLastObject();
  let uriList: Array<string> = [
    photoAsset.uri,
    photoAssetLast.uri
  ];
  let info: photoAccessHelper.GalleryFormInfo = {
    // formId is a string consisting of only digits. assetUris indicates the URIs of the images or albums in Gallery.
    formId: "20230116123",
    assetUris: uriList,
  }

  phAccessHelper.updateGalleryFormInfo(info).then(() => {
    console.info('updateGalleryFormInfo successfully');
  }).catch((err: BusinessError) => {
    console.error(`updateGalleryFormInfo failed with error: ${err.code}, ${err.message}`);
  });
}

```

