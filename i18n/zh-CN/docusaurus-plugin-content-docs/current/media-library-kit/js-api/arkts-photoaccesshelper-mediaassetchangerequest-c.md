# MediaAssetChangeRequest

Defines the class of media asset change request.

**继承实现关系：** MediaAssetChangeRequest实现：MediaChangeRequest。

**起始版本：** 11

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

## 导入模块

```TypeScript
import { photoAccessHelper } from '@kit.MediaLibraryKit';
```

## addResource

```TypeScript
addResource(type: ResourceType, fileUri: string): void
```

Adds a resource using fileUri.

**起始版本：** 11

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | ResourceType | 是 | Type of the resource to add. |
| fileUri | string | 是 | Data source of the resource to be added, which is specified by a URI in the application sandbox directory. |

**错误码：**

| 错误码ID | 错误信息 |
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

**起始版本：** 11

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | ResourceType | 是 | Type of the resource to add. |
| data | ArrayBuffer | 是 | Data of the resource to add. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14000011 | System inner fail |
| 14000016 | Operation Not Support |

## addResource

```TypeScript
addResource(type: ResourceType, proxy: PhotoProxy): void
```

Adds resources using PhotoProxy data.

**起始版本：** 11

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | ResourceType | 是 | Type of the resource to add. |
| proxy | PhotoProxy | 是 | PhotoProxy data of the resource to add. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Called by non-system application |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14000011 | System inner fail |
| 14000016 | Operation Not Support |

**示例：**

```TypeScript
class PhotoProxyImpl implements photoAccessHelper.PhotoProxy {
  // 应用实现PhotoProxy。
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

**起始版本：** 22

**需要权限：** 

 ohos.permission.ACCESS_MEDIALIB_THUMB_DB

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | ResourceType | 是 | Type of the resource to add. |
| fileUri | string | 是 | Data source of the resource to be added,  which is specified by a URI in the application sandbox directory. |

**错误码：**

| 错误码ID | 错误信息 |
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

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| asset | PhotoAsset | 是 | Assets to change. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14000011 | System inner fail |

## createAssetRequest

```TypeScript
static createAssetRequest(context: Context, displayName: string, options?: PhotoCreateOptions): MediaAssetChangeRequest
```

Creates an asset change request with the specified file name.

**起始版本：** 11

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | Context | 是 | Context of the ability instance. |
| displayName | string | 是 | File name of the image or video to create. |
| options | PhotoCreateOptions | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| MediaAssetChangeRequest | - Returns a MediaAssetChangeRequest instance |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Called by non-system application |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14000001 | Invalid display name |
| 14000011 | System inner fail  @static |

**示例：**

```TypeScript
async function example(phAccessHelper: photoAccessHelper.PhotoAccessHelper, context: Context) {
  console.info('createAssetRequestDemo');
  try {
    let testFileName: string = 'testFile' + Date.now() + '.jpg';
    let assetChangeRequest: photoAccessHelper.MediaAssetChangeRequest = photoAccessHelper.MediaAssetChangeRequest.createAssetRequest(context, testFileName);
    // 需要确保fileUri对应的资源存在。
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

**起始版本：** 23

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | Context | 是 | Context of the ability instance. |
| displayName | string | 是 | File name of the image or video to create. |
| options | PhotoCreateOptions | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| MediaAssetChangeRequest | - Returns a MediaAssetChangeRequest instance.  if the operation fails, returns null |

**错误码：**

| 错误码ID | 错误信息 |
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

**起始版本：** 11

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | Context | 是 | Context of the ability instance. |
| photoType | PhotoType | 是 | Type of the file to create, which can be IMAGE or VIDEO. |
| extension | string | 是 | File name extension, for example, 'jpg'. |
| options | CreateOptions | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| MediaAssetChangeRequest | - Returns a MediaAssetChangeRequest instance |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14000011 | System inner fail  @static |

## createAssetRequest

```TypeScript
static createAssetRequest(context: Context, photoType: PhotoType, extension: string, options?: CreateOptions): MediaAssetChangeRequest | null
```

Create an asset change request based on the file type and filename extension.

**起始版本：** 23

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | Context | 是 | Context of the ability instance. |
| photoType | PhotoType | 是 | Type of the file to create, which can be IMAGE or VIDEO. |
| extension | string | 是 | File name extension, for example, 'jpg'. |
| options | CreateOptions | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| MediaAssetChangeRequest | - Returns a MediaAssetChangeRequest instance,  if the operation fails, returns null |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 23800301 | Internal system error. It is recommended to retry and check the logs.  Possible causes: 1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out.  @static |

## createImageAssetRequest

```TypeScript
static createImageAssetRequest(context: Context, fileUri: string): MediaAssetChangeRequest
```

Creates an image asset change request.

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | Context | 是 | Context of the ability instance. |
| fileUri | string | 是 | Data source of the image asset, which is specified by a URI in the application sandbox directory. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| MediaAssetChangeRequest | - Returns a MediaAssetChangeRequest instance |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 13900002 | The file corresponding to the URI is not in the app sandbox. |
| 14000011 | System inner fail  @static |

## createImageAssetRequest

```TypeScript
static createImageAssetRequest(context: Context, fileUri: string): MediaAssetChangeRequest | null
```

Creates an image asset change request.

**起始版本：** 23

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | Context | 是 | Context of the ability instance. |
| fileUri | string | 是 | Data source of the image asset,  which is specified by a URI in the application sandbox directory. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| MediaAssetChangeRequest | - Returns a MediaAssetChangeRequest instance,  if the operation fails, returns null |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 23800101 | The file corresponding to the URI is not in the app sandbox. |
| 23800301 | Internal system error. It is recommended to retry and check the logs.  Possible causes: 1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out.  @static |

## createVideoAssetRequest

```TypeScript
static createVideoAssetRequest(context: Context, fileUri: string): MediaAssetChangeRequest
```

Creates a video asset change request.

**起始版本：** 11

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | Context | 是 | Context of the ability instance. |
| fileUri | string | 是 | Data source of the video asset, which is specified by a URI in the application sandbox directory. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| MediaAssetChangeRequest | - Returns a MediaAssetChangeRequest instance |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 13900002 | The file corresponding to the URI is not in the app sandbox. |
| 14000011 | System inner fail  @static |

## createVideoAssetRequest

```TypeScript
static createVideoAssetRequest(context: Context, fileUri: string): MediaAssetChangeRequest | null
```

Creates a video asset change request.

**起始版本：** 23

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | Context | 是 | Context of the ability instance. |
| fileUri | string | 是 | Data source of the video asset,  which is specified by a URI in the application sandbox directory. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| MediaAssetChangeRequest | - Returns a MediaAssetChangeRequest instance.  if the operation fails, returns null. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 23800101 | The file corresponding to the URI is not in the app sandbox. |
| 23800301 | Internal system error. It is recommended to retry and check the logs.  Possible causes: 1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out.  @static |

## deleteAssets

```TypeScript
static deleteAssets(context: Context, assets: Array<PhotoAsset>): Promise<void>
```

Deletes media assets. This API uses a promise to return the result. The deleted assets are moved to the trash.

**起始版本：** 11

**需要权限：** 

 ohos.permission.WRITE_IMAGEVIDEO

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | Context | 是 | Context of the ability instance. |
| assets | Array&lt;PhotoAsset> | 是 | Array of assets to delete. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | - Returns void |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14000011 | System inner fail  @static |

## deleteAssets

```TypeScript
static deleteAssets(context: Context, uriList: Array<string>): Promise<void>
```

Deletes media assets. This API uses a promise to return the result. The deleted assets are moved to the trash.

**起始版本：** 11

**需要权限：** 

 ohos.permission.WRITE_IMAGEVIDEO

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | Context | 是 | Context of the ability instance. |
| uriList | Array&lt;string> | 是 | URIs of the media files to delete. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | - Returns void |

**错误码：**

| 错误码ID | 错误信息 |
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

**起始版本：** 24

**需要权限：** 

 ohos.permission.WRITE_IMAGEVIDEO

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | Context | 是 | Hap context information  Hap context information |
| assetUris | string[] | 是 | Uris of the assets to be deleted |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | - Returns void |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied |
| 202 | Called by nonsystem application |
| 23800151 | The scenario parameter verification fails. Possible causes:  1. The context is empty;  2. Asset uri array size is empty or bigger than 500 . |
| 23800301 | Internal system error. It is recommended to retry and check the logs.  Possible causes:1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out;  @static |

**示例：**

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

**起始版本：** 23

**需要权限：** 

 ohos.permission.WRITE_IMAGEVIDEO

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | Context | 是 | Context of the ability instance. |
| uriList | Array&lt;string> | 是 | URIs of the media files to delete. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | - Returns void |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied |
| 23800151 | The scenario parameter verification fails. Possible causes:  1. context is null or invalid; 2. The uri format is incorrect or does not exist. |
| 23800301 | Internal system error. It is recommended to retry and check the logs.  Possible causes: 1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out.  @static |

## deleteCloudAssetsWithUri

```TypeScript
static deleteCloudAssetsWithUri(context: Context, assetUris: string[]): Promise<void>
```

Delete cloud assets to trash from the album.

**起始版本：** 22

**需要权限：** 

 ohos.permission.WRITE_IMAGEVIDEO

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | Context | 是 | Hap context information |
| assetUris | string[] | 是 | Uris of the assets to be deleted |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | - Returns void |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied |
| 202 | Called by non-system application |
| 23800151 | The scenario parameter verification fails. Possible causes:  1. The context is empty;  2. Asset uri array size is empty or bigger than 500 . |
| 23800301 | Internal system error. It is recommended to retry and check the logs.  Possible causes:1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out;  @static |

**示例：**

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

**起始版本：** 18

**需要权限：** 

 ohos.permission.WRITE_IMAGEVIDEO

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | Context | 是 | Context of the ability instance. |
| assets | Array&lt;PhotoAsset> | 是 | Array of images or videos to be permanently deleted. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | - Returns void |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied |
| 202 | Called by non-system application |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14000011 | Internal system error. It is recommended to retry and check the logs.  Possible causes: 1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out.  @static |

**示例：**

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

**起始版本：** 19

**需要权限：** 

 ohos.permission.WRITE_IMAGEVIDEO

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | Context | 是 | Hap context information |
| assetUris | Array&lt;string> | 是 | Uris of the assets to be deleted permanently |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | - Returns void |

**错误码：**

| 错误码ID | 错误信息 |
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

**起始版本：** 22

**需要权限：** 

 ohos.permission.WRITE_IMAGEVIDEO

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | Context | 是 | Hap context information |
| assetUris | string[] | 是 | Uris of the assets to be deleted |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | - Returns void |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied |
| 202 | Called by non-system application |
| 23800151 | The scenario parameter verification fails. Possible causes:  1. The context is empty;  2. Asset uri array size is empty or bigger than 500 . |
| 23800301 | Internal system error. It is recommended to retry and check the logs.  Possible causes: 1.Database corrupted; 2.The file system is abnormal; 3.The IPC request timed out;  @static |

**示例：**

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

**起始版本：** 12

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 14000011 | Internal system error |
| 14000016 | Operation Not Support |

## getAsset

```TypeScript
getAsset(): PhotoAsset
```

Obtains the asset in this asset change request.

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| PhotoAsset | - Returns the asset |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |
| 14000011 | System inner fail |

## getAsset

```TypeScript
getAsset(): PhotoAsset | null
```

Obtains the asset in this asset change request.

**起始版本：** 23

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| PhotoAsset | - Returns the asset. if the operation fails, returns null. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 23800301 | Internal system error. It is recommended to retry and check the logs.  Possible causes: 1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out. |

## getWriteCacheHandler

```TypeScript
getWriteCacheHandler(): Promise<int>
```

Obtains the handler used for writing a file to cache.

**起始版本：** 11

**需要权限：** 

 ohos.permission.WRITE_IMAGEVIDEO

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;int> | Returns the write cache handler |

**错误码：**

| 错误码ID | 错误信息 |
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

**起始版本：** 12

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 14000011 | System inner fail |
| 14000016 | Operation Not Support |

## saveCameraPhoto

```TypeScript
saveCameraPhoto(imageFileType: ImageFileType): void
```

Saves the photo taken by the camera.

**起始版本：** 13

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| imageFileType | ImageFileType | 是 | File type of the photo to save. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 14000011 | System inner fail |
| 14000016 | Operation Not Support |

## setAppLinkInfo

```TypeScript
setAppLinkInfo(appLink: string): void
```

Set the AppLink info of this asset.

**起始版本：** 21

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| appLink | string | 是 | AppLink info of the asset to set. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Called by non-system application |
| 23800301 | Internal system error.It is recommended to retry and check the logs. |
| 23800151 | The scenario parameter verification fails.Possible causes:  The input parameter's length is not within the valid range. |

**示例：**

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

**起始版本：** 24

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| appLinkState | AppLinkState | 是 | Boomerang status of assets |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Invoked by non-system applications |
| 23800301 | Internal system error. It is recommended to retry and check the logs. |
| 23800151 | The scenario parameter verification fails. Possible causes:  The input parameter is not within the valid range. |

**示例：**

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

**起始版本：** 12

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| cameraShotKey | string | 是 | Key for the Ultra Snapshot feature.  This parameter is available only for the system camera, and the key value is defined by the system camera. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Called by non-system application |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14000011 | System inner fail |

**示例：**

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

**起始版本：** 23

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| compositeDisplayMode | CompositeDisplayMode | 是 | CompositeDisplayMode type to set. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Returns void |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Called by non-system application |
| 23800151 | Scene parameters validate failed, possible causes:  1. The compositeDisplayMode is not within the supported range.  2. The original file does not exist locally in PhotoAsset.  3. The PhotoAsset is not composite Asset  4. The original file format is not within the supported range.  5. The original file has been edited. |
| 23800301 | Internal system error. It is recommended to retry and check the logs.  Possible causes: 1. Database corrupted.2. The file system is abnormal.3. The IPC request timed out. |

**示例：**

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

**起始版本：** 11

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| editData | MediaAssetEditData | 是 | Edited data to save. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Called by non-system application |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14000011 | System inner fail |

**示例：**

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

**起始版本：** 12

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| mode | MovingPhotoEffectMode | 是 | Effect to set. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Called by non-system application |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14000011 | System inner fail |
| 14000016 | Operation Not Support |

**示例：**

```TypeScript
async function example(phAccessHelper: photoAccessHelper.PhotoAccessHelper, asset: photoAccessHelper.PhotoAsset) {
  console.info('setEffectModeDemo');
  try {
    let assetChangeRequest: photoAccessHelper.MediaAssetChangeRequest = new photoAccessHelper.MediaAssetChangeRequest(asset);
    assetChangeRequest.setEffectMode(photoAccessHelper.MovingPhotoEffectMode.LONG_EXPOSURE);
    // 需要确保fileUri对应的资源存在。
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

**起始版本：** 11

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| favoriteState | boolean | 是 | true: Put the asset into favorite album; false: Remove the asset from favorite album. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Called by non-system application |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14000011 | System inner fail |

**示例：**

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

**起始版本：** 21

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| hasAppLink | int | 是 | AppLink state of the asset to set. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Called by non-system application |
| 23800301 | Internal system error.It is recommended to retry and check the logs. |
| 23800151 | The scenario parameter verification fails.Possible causes:  The input parameter is not within the valid range. |

**示例：**

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

**起始版本：** 11

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| hiddenState | boolean | 是 | true: Put the asset into hidden album; false: Recover the asset from hidden album. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Called by non-system application |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14000011 | System inner fail |

**示例：**

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

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| hiddenState | boolean | 是 | Hidden status of the asset. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Called by non-system application. |
| 23800151 | The scenario parameter verification fails. Possible causes:  1. The asset is not exist; |
| 23800301 | Internal system error. It is recommended to retry and check the logs.  Possible causes: 1. Database corrupted.2. The filesystem is abnormal.3. The IPC request timed out. |

**示例：**

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

**起始版本：** 11

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| longitude | double | 是 | Longitude. |
| latitude | double | 是 | Latitude. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Called by non-system application |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14000011 | System inner fail |

**示例：**

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

**起始版本：** 26.0.0

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| version | int | 是 | Motion picture version number |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Called by non-system application |
| 23800151 | Parameter error, only supports 9. |
| 23800301 | Internal system error. It is recommended to retry and check the logs.  Possible causes: 1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out. |

**示例：**

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

**起始版本：** 15

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| orientation | int | 是 | Rotation angle of the image to set. The value can only be 0, 90, 180, or 270. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14000011 | Internal system error |

## setSupportedWatermarkType

```TypeScript
setSupportedWatermarkType(watermarkType: WatermarkType): void
```

Sets the watermark type supported by photos.

**起始版本：** 14

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| watermarkType | WatermarkType | 是 | Watermark type to set. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Called by non-system application |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14000011 | Internal system error |

**示例：**

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

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| title | string | 是 | Title to set. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14000011 | System inner fail |

## setTitleByFile

```TypeScript
setTitleByFile(name: string): void
```

Set title by filemanger.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| name | string | 是 | asset name to set.  Should not contain extensions.  The file name contains 1 to 255 characters.  Invalid English characters, including:  . \ /: ? "'` \| {} []  Name-only is not allowed. Or.. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Called by non-system application. |
| 23800151 | The scenario parameter verification fails. Possible causes:  1. The asset is not exist; |
| 23800301 | Internal system error. It is recommended to retry and check the logs.  Possible causes:1. Database corrupted.2. The file system is abnormal.3. The IPC request timed out. |

**示例：**

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

**起始版本：** 11

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| userComment | string | 是 | user comment info |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Called by non-system application |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14000011 | System inner fail |

**示例：**

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

**起始版本：** 13

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| videoEnhancementType | VideoEnhancementType | 是 | The type of video enhancement |
| photoId | string | 是 | The photo id of video |

**错误码：**

| 错误码ID | 错误信息 |
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

**类型：** string

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

