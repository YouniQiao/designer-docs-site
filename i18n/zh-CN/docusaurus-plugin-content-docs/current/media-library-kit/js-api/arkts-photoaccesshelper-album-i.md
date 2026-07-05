# Album

Defines the album.

**继承实现关系：** Album继承自：AbsAlbum。

**起始版本：** 12

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

## 导入模块

```TypeScript
import { photoAccessHelper } from '@kit.MediaLibraryKit';
```

## addAssets

```TypeScript
addAssets(assets: Array<PhotoAsset>, callback: AsyncCallback<void>): void
```

Adds image and video assets to an album. Before the operation, ensure that the image and video assets to add and the album exist. This API uses an asynchronous callback to return the result.

**起始版本：** 10

**废弃版本：** 11

**替代接口：** photoAccessHelper.MediaAlbumChangeRequest#addAssets

**需要权限：** 

 ohos.permission.WRITE_IMAGEVIDEO

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| assets | Array&lt;PhotoAsset> | 是 | Array of the image and video assets to add. |
| callback | AsyncCallback&lt;void> | 是 | Callback that returns no value. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 201 | Permission denied |
| 13900020 | Invalid argument |
| 14000011 | System inner fail |

## addAssets

```TypeScript
addAssets(assets: Array<PhotoAsset>): Promise<void>
```

Adds image and video assets to an album. Before the operation, ensure that the image and video assets to add and the album exist. This API uses a promise to return the result.

**起始版本：** 10

**废弃版本：** 11

**替代接口：** photoAccessHelper.MediaAlbumChangeRequest#addAssets

**需要权限：** 

 ohos.permission.WRITE_IMAGEVIDEO

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| assets | Array&lt;PhotoAsset> | 是 | Array of the image and video assets to add. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Returns void |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 201 | Permission denied |
| 13900020 | Invalid argument |
| 14000011 | System inner fail |

## commitModify

```TypeScript
commitModify(callback: AsyncCallback<void>): void
```

Modify metadata for the album

**起始版本：** 10

**需要权限：** 

 ohos.permission.WRITE_IMAGEVIDEO

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | 是 | Returns void |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |
| 201 | Permission denied |
| 13900020 | Invalid argument |
| 14000011 | System inner fail |

## commitModify

```TypeScript
commitModify(): Promise<void>
```

Modify metadata for the album

**起始版本：** 10

**需要权限：** 

 ohos.permission.WRITE_IMAGEVIDEO

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Returns void |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |
| 201 | Permission denied |
| 13900020 | Invalid argument |
| 14000011 | System inner fail |

## deleteAssets

```TypeScript
deleteAssets(assets: Array<PhotoAsset>, callback: AsyncCallback<void>): void
```

Deletes image or video assets from the trash. Before the operation, ensure that the image or video assets exist in the trash. This API uses an asynchronous callback to return the result.

**起始版本：** 10

**废弃版本：** 11

**替代接口：** photoAccessHelper.MediaAlbumChangeRequest#deleteAssets

**需要权限：** 

 ohos.permission.WRITE_IMAGEVIDEO

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| assets | Array&lt;PhotoAsset> | 是 | Array of the image or video assets to delete. |
| callback | AsyncCallback&lt;void> | 是 | Callback that returns no value. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Called by non-system application. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 13900012 | Permission denied |
| 13900020 | Invalid argument |
| 14000011 | System inner fail |

**示例：**

```TypeScript
import { dataSharePredicates } from '@kit.ArkData';

async function example(phAccessHelper: photoAccessHelper.PhotoAccessHelper) {
  try {
    console.info('deleteAssetsDemoCallback');
    let predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();
    let fetchOption: photoAccessHelper.FetchOptions = {
      fetchColumns: [],
      predicates: predicates
    };
    let albumFetchResult: photoAccessHelper.FetchResult<photoAccessHelper.Album> = await phAccessHelper.getAlbums(photoAccessHelper.AlbumType.SYSTEM, photoAccessHelper.AlbumSubtype.TRASH);
    let album: photoAccessHelper.Album = await albumFetchResult.getFirstObject();
    let fetchResult: photoAccessHelper.FetchResult<photoAccessHelper.PhotoAsset> = await album.getAssets(fetchOption);
    let asset: photoAccessHelper.PhotoAsset = await fetchResult.getFirstObject();
    album.deleteAssets([asset], (err) => {
      if (err === undefined) {
        console.info('album deleteAssets successfully');
      } else {
        console.error(`album deleteAssets failed with error: ${err.code}, ${err.message}`);
      }
    });
  } catch (err) {
    console.error(`deleteAssetsDemoCallback failed with error: ${err.code}, ${err.message}`);
  }
}

```

## deleteAssets

```TypeScript
deleteAssets(assets: Array<PhotoAsset>): Promise<void>
```

Deletes image or video assets from the trash. Before the operation, ensure that the image or video assets exist in the trash. This API uses a promise to return the result.

**起始版本：** 10

**废弃版本：** 11

**替代接口：** photoAccessHelper.MediaAlbumChangeRequest#deleteAssets

**需要权限：** 

 ohos.permission.WRITE_IMAGEVIDEO

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| assets | Array&lt;PhotoAsset> | 是 | Array of the image or video assets to delete. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Returns void |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Called by non-system application. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 13900012 | Permission denied |
| 13900020 | Invalid argument |
| 14000011 | System inner fail |

**示例：**

```TypeScript
import { dataSharePredicates } from '@kit.ArkData';
import { BusinessError } from '@kit.BasicServicesKit';

async function example(phAccessHelper: photoAccessHelper.PhotoAccessHelper) {
  try {
    console.info('deleteAssetsDemoPromise');
    let predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();
    let fetchOption: photoAccessHelper.FetchOptions = {
      fetchColumns: [],
      predicates: predicates
    };
    let albumFetchResult: photoAccessHelper.FetchResult<photoAccessHelper.Album> = await phAccessHelper.getAlbums(photoAccessHelper.AlbumType.SYSTEM, photoAccessHelper.AlbumSubtype.TRASH);
    let album: photoAccessHelper.Album = await albumFetchResult.getFirstObject();
    let fetchResult: photoAccessHelper.FetchResult<photoAccessHelper.PhotoAsset> = await album.getAssets(fetchOption);
    let asset: photoAccessHelper.PhotoAsset = await fetchResult.getFirstObject();
    album.deleteAssets([asset]).then(() => {
      console.info('album deleteAssets successfully');
    }).catch((err: BusinessError) => {
      console.error(`album deleteAssets failed with error: ${err.code}, ${err.message}`);
    });
  } catch (err) {
    console.error(`deleteAssetsDemoPromise failed with error: ${err.code}, ${err.message}`);
  }
}

```

## getAttribute

```TypeScript
getAttribute(attrs: AlbumAttribute[]): Promise<Record<AlbumAttribute, AlbumAttributeInfo>>
```

Gets album attribute info.

**起始版本：** 26.0.0

**需要权限：** 

 ohos.permission.READ_IMAGEVIDEO

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| attrs | AlbumAttribute[] | 是 | attributes to get for the album. The maximum length is 20 and cannot be empty. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Record&lt;AlbumAttribute, AlbumAttributeInfo>> | Returns a record of attributes and their values. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied |
| 202 | Called by non-system application. |
| 23800151 | The scenario parameter verification fails. Possible causes:  1. Unsupported attribute;  2. The attrs size exceed 20;  3. Empty or duplicate attribute; |
| 23800301 | Internal system error.It is recommended to retry and check the logs  Possible causes:  1. Database corrupted.  2. The file system is abnormal.  3. The IPC request timed out. |

**示例：**

```TypeScript
import { dataSharePredicates } from '@kit.ArkData';
import { photoAccessHelper } from '@kit.MediaLibraryKit';

async function example(phAccessHelper: photoAccessHelper.PhotoAccessHelper) {
  try {
    console.info('getAttributeDemo');
    // 创建查询条件。
    let predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();
    // 设置查询选项。
    let fetchOptions: photoAccessHelper.FetchOptions = {
      fetchColumns: [],
      predicates: predicates
    };
    // 获取智能相册（人像相册）。
    let albumFetchResult = await phAccessHelper.getAlbums(photoAccessHelper.AlbumType.SMART, 
      photoAccessHelper.AlbumSubtype.PORTRAIT, fetchOptions);
    // 获取第一个相册对象。
    let album = await albumFetchResult.getFirstObject();
    if (album === undefined) {
      console.error('album is undefined');
      return;
    }
    // 定义要获取的属性列表。
    let attrs: [photoAccessHelper.AlbumAttribute] = [
      photoAccessHelper.AlbumAttribute.EXTRA_INFO_ATTR
    ];
    // 获取相册属性信息。
    let attrInfo = await album.getAttribute(attrs);
    console.info(`getAttribute successfully, attrInfo: ${JSON.stringify(attrInfo)}`);
  } catch (err) {
    console.error(`getAttribute failed with err: ${err.code}, ${err.message}`);
  }
}

```

## getFaceId

```TypeScript
getFaceId(): Promise<string>
```

Obtains the face identifier on the cover of a portrait album or group photo album.

**起始版本：** 13

**需要权限：** 

 ohos.permission.READ_IMAGEVIDEO

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;string> | Returns tag_id if portrait album, Returns group_tag if group photo album,  Returns empty if not found. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied |
| 202 | Called by non-system application |
| 14000011 | Internal system error |

**示例：**

```TypeScript
import { dataSharePredicates } from '@kit.ArkData';

async function example(phAccessHelper: photoAccessHelper.PhotoAccessHelper) {
  try {
    console.info('getFaceIdDemo');
    let predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();
    predicates.equalTo("user_display_level", 1);
    let fetchOptions: photoAccessHelper.FetchOptions = {
      fetchColumns: [],
      predicates: predicates
    };
    let fetchResult =
      await phAccessHelper.getAlbums(photoAccessHelper.AlbumType.SMART, photoAccessHelper.AlbumSubtype.PORTRAIT,
        fetchOptions);
    if (fetchResult === undefined) {
      console.error('getFaceId fetchResult is undefined');
      return;
    }
    let album = await fetchResult?.getFirstObject();
    if (album === undefined) {
      console.error('album is undefined');
      return;
    }
    let faceId = await album?.getFaceId();
    if (faceId === undefined) {
      console.error('faceId is undefined');
      return;
    }
    console.info(`getFaceId successfully, faceId: ${faceId}`);
    fetchResult.close();
  } catch (err) {
    console.error(`getFaceId failed with err: ${err.code}, ${err.message}`);
  }
}

```

## getFusionAssetsInfo

```TypeScript
getFusionAssetsInfo(): Promise<FusionAssetsInfo[]>
```

Obtains fusion assets information.

**起始版本：** 22

**需要权限：** 

 ohos.permission.READ_IMAGEVIDEO

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;FusionAssetsInfo[]> | Returns fusion assets information. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied |
| 202 | Called by non-system application |
| 23800301 | Internal system error. You are advised to retry and check the logs.  Possible causes: 1. The database is corrupted. 2. The file system is abnormal. 3. The IPC request timed out. |

## getSelectedAssets

```TypeScript
getSelectedAssets(optionCheck: FetchOptions, filter?: string): Promise<FetchResult<PhotoAsset>>
```

Fetch selected assets in an album.

**起始版本：** 22

**需要权限：** 

 ohos.permission.READ_IMAGEVIDEO

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| optionCheck | FetchOptions | 是 | Fetch options. |
| filter | string | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;FetchResult&lt;PhotoAsset>> | Returns the fetch result |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied |
| 202 | Called by non-system application |
| 23800151 | The scenario parameter verification fails.  Possible causes: 1. The input parameter is not within the valid range. |
| 23800301 | Internal system error. It is recommended to retry and check the logs.  Possible causes: 1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out. |

**示例：**

```TypeScript
import { dataSharePredicates } from '@kit.ArkData';
import { photoAccessHelper } from '@kit.MediaLibraryKit';

async function example1(phAccessHelper: photoAccessHelper.PhotoAccessHelper) : Promise<void> {
  try {
    console.info('getSelectedAssetsDemo');
    let predicatesHomePage: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();
    predicatesHomePage.equalTo('user_display_level', 1);
    let optionHome: photoAccessHelper.FetchOptions = {
      predicates: predicatesHomePage,
      fetchColumns: [],
    };
    let albumFetchResult = await phAccessHelper.getAlbums(photoAccessHelper.AlbumType.SMART,
      photoAccessHelper.AlbumSubtype.PORTRAIT, optionHome);

    if (albumFetchResult === undefined) {
      console.error('getSelected fetchResult is undefined');
      return;
    }
    let album = await albumFetchResult?.getFirstObject();
    if (album === undefined) {
      console.error('album is undefined');
      return;
    }

    let predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();
    let fetchOption: photoAccessHelper.FetchOptions = {
      fetchColumns: [],
      predicates: predicates
    };
    let fetchResult = await album.getSelectedAssets(fetchOption);
    let photoAsset = await fetchResult.getFirstObject();
    if (!fetchResult||fetchResult.getCount() <= 0) {
      console.error('get selected assets in album with empty dataList');
      return;
    }

    let uriParts = photoAsset.uri.split('/');
    let fileId = uriParts[uriParts.length - 3];
    let filter = `{"currentFileId":"${fileId}"}`;
    let fetchResult1 = await album.getSelectedAssets(fetchOption, filter);
    if (!fetchResult1||fetchResult1.getCount() <= 0) {
      console.error('get selected assets in album with empty dataList');
      return;
    }
    let photoAssetList = fetchResult.getAllObjects();
    console.info('get selected assets in album success');
  } catch (err) {
    console.error(`get selected assets in album fail, error: ${err?.code}, ${err?.message}`);
  }
}

```

## recoverAssets

```TypeScript
recoverAssets(assets: Array<PhotoAsset>, callback: AsyncCallback<void>): void
```

Recovers image or video assets from the trash. Before the operation, ensure that the image or video assets exist in the trash. This API uses an asynchronous callback to return the result.

**起始版本：** 10

**废弃版本：** 11

**替代接口：** photoAccessHelper.MediaAlbumChangeRequest#recoverAssets

**需要权限：** 

 ohos.permission.WRITE_IMAGEVIDEO

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| assets | Array&lt;PhotoAsset> | 是 | Array of the image or video assets to recover. |
| callback | AsyncCallback&lt;void> | 是 | Callback that returns no value. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Called by non-system application. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 13900012 | Permission denied |
| 13900020 | Invalid argument |
| 14000011 | System inner fail |

**示例：**

```TypeScript
import { dataSharePredicates } from '@kit.ArkData';

async function example(phAccessHelper: photoAccessHelper.PhotoAccessHelper) {
  try {
    console.info('recoverAssetsDemoCallback');
    let predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();
    let fetchOption: photoAccessHelper.FetchOptions = {
      fetchColumns: [],
      predicates: predicates
    };
    let albumFetchResult: photoAccessHelper.FetchResult<photoAccessHelper.Album> = await phAccessHelper.getAlbums(photoAccessHelper.AlbumType.SYSTEM, photoAccessHelper.AlbumSubtype.TRASH);
    let album: photoAccessHelper.Album = await albumFetchResult.getFirstObject();
    let fetchResult: photoAccessHelper.FetchResult<photoAccessHelper.PhotoAsset> = await album.getAssets(fetchOption);
    let asset: photoAccessHelper.PhotoAsset = await fetchResult.getFirstObject();
    album.recoverAssets([asset], (err) => {
      if (err === undefined) {
        console.info('album recoverAssets successfully');
      } else {
        console.error(`album recoverAssets failed with error: ${err.code}, ${err.message}`);
      }
    });
  } catch (err) {
    console.error(`recoverAssetsDemoCallback failed with error: ${err.code}, ${err.message}`);
  }
}

```

## recoverAssets

```TypeScript
recoverAssets(assets: Array<PhotoAsset>): Promise<void>
```

Recovers image or video assets from the trash. Before the operation, ensure that the image or video assets exist in the trash. This API uses a promise to return the result.

**起始版本：** 10

**废弃版本：** 11

**替代接口：** photoAccessHelper.MediaAlbumChangeRequest#recoverAssets

**需要权限：** 

 ohos.permission.WRITE_IMAGEVIDEO

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| assets | Array&lt;PhotoAsset> | 是 | Array of the image or video assets to recover. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Returns void |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Called by non-system application. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 13900012 | Permission denied |
| 13900020 | Invalid argument |
| 14000011 | System inner fail |

**示例：**

```TypeScript
import { dataSharePredicates } from '@kit.ArkData';
import { BusinessError } from '@kit.BasicServicesKit';

async function example(phAccessHelper: photoAccessHelper.PhotoAccessHelper) {
  try {
    console.info('recoverAssetsDemoPromise');
    let predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();
    let fetchOption: photoAccessHelper.FetchOptions = {
      fetchColumns: [],
      predicates: predicates
    };
    let albumFetchResult: photoAccessHelper.FetchResult<photoAccessHelper.Album> = await phAccessHelper.getAlbums(photoAccessHelper.AlbumType.SYSTEM, photoAccessHelper.AlbumSubtype.TRASH);
    let album: photoAccessHelper.Album = await albumFetchResult.getFirstObject();
    let fetchResult: photoAccessHelper.FetchResult<photoAccessHelper.PhotoAsset> = await album.getAssets(fetchOption);
    let asset: photoAccessHelper.PhotoAsset = await fetchResult.getFirstObject();
    album.recoverAssets([asset]).then(() => {
      console.info('album recoverAssets successfully');
    }).catch((err: BusinessError) => {
      console.error(`album recoverAssets failed with error: ${err.code}, ${err.message}`);
    });
  } catch (err) {
    console.error(`recoverAssetsDemoPromise failed with error: ${err.code}, ${err.message}`);
  }
}

```

## removeAssets

```TypeScript
removeAssets(assets: Array<PhotoAsset>, callback: AsyncCallback<void>): void
```

Removes image and video assets from an album. The album and file resources must exist. This API uses an asynchronous callback to return the result.

**起始版本：** 10

**废弃版本：** 11

**替代接口：** photoAccessHelper.MediaAlbumChangeRequest#removeAssets

**需要权限：** 

 ohos.permission.WRITE_IMAGEVIDEO

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| assets | Array&lt;PhotoAsset> | 是 | Array of the image and video assets to remove. |
| callback | AsyncCallback&lt;void> | 是 | Callback that returns no value. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 201 | Permission denied |
| 13900020 | Invalid argument |
| 14000011 | System inner fail |

## removeAssets

```TypeScript
removeAssets(assets: Array<PhotoAsset>): Promise<void>
```

Removes image and video assets from an album. The album and file resources must exist. This API uses a promise to return the result.

**起始版本：** 10

**废弃版本：** 11

**替代接口：** photoAccessHelper.MediaAlbumChangeRequest#removeAssets

**需要权限：** 

 ohos.permission.WRITE_IMAGEVIDEO

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| assets | Array&lt;PhotoAsset> | 是 | Array of the image and video assets to remove. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Returns void |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 201 | Permission denied |
| 13900020 | Invalid argument |
| 14000011 | System inner fail |

## setCoverUri

```TypeScript
setCoverUri(uri: string, callback: AsyncCallback<void>): void
```

Sets the album cover. This API uses an asynchronous callback to return the result.

**起始版本：** 10

**废弃版本：** 11

**替代接口：** photoAccessHelper.MediaAlbumChangeRequest#setCoverUri

**需要权限：** 

 ohos.permission.WRITE_IMAGEVIDEO

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| uri | string | 是 | URI of the file to be set as the album cover. |
| callback | AsyncCallback&lt;void> | 是 | Callback that returns no value. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Called by non-system application. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 13900012 | Permission denied |
| 13900020 | Invalid argument |
| 14000011 | System inner fail |

**示例：**

```TypeScript
import { dataSharePredicates } from '@kit.ArkData';

async function example(phAccessHelper: photoAccessHelper.PhotoAccessHelper) {
  try {
    console.info('setCoverUriDemoCallback');
    let predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();
    let fetchOption: photoAccessHelper.FetchOptions = {
      fetchColumns: [],
      predicates: predicates
    };
    let albumFetchResult: photoAccessHelper.FetchResult<photoAccessHelper.Album> = await phAccessHelper.getAlbums(photoAccessHelper.AlbumType.USER, photoAccessHelper.AlbumSubtype.USER_GENERIC);
    let album: photoAccessHelper.Album = await albumFetchResult.getFirstObject();
    let fetchResult: photoAccessHelper.FetchResult<photoAccessHelper.PhotoAsset> = await album.getAssets(fetchOption);
    let asset: photoAccessHelper.PhotoAsset = await fetchResult.getFirstObject();
    album.setCoverUri(asset.uri, (err) => {
      if (err === undefined) {
        console.info('album setCoverUri successfully');
      } else {
        console.error(`album setCoverUri failed with error: ${err.code}, ${err.message}`);
      }
    });
  } catch (err) {
    console.error(`setCoverUriDemoCallback failed with error: ${err.code}, ${err.message}`);
  }
}

```

## setCoverUri

```TypeScript
setCoverUri(uri: string): Promise<void>
```

Sets the album cover. This API uses a promise to return the result.

**起始版本：** 10

**废弃版本：** 11

**替代接口：** photoAccessHelper.MediaAlbumChangeRequest#setCoverUri

**需要权限：** 

 ohos.permission.WRITE_IMAGEVIDEO

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| uri | string | 是 | URI of the file to be set as the album cover. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Returns void |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Called by non-system application. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 13900012 | Permission denied |
| 13900020 | Invalid argument |
| 14000011 | System inner fail |

## videoCount

```TypeScript
readonly videoCount?: int
```

Number of video assets in the album

**类型：** int

**起始版本：** 12

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

## imageCount

```TypeScript
readonly imageCount?: int
```

Number of image assets in the album

**类型：** int

**起始版本：** 12

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

## dateModified

```TypeScript
readonly dateModified?: long
```

Album dateModified

**类型：** long

**起始版本：** 18

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**系统接口：** 此接口为系统接口。

## dateAdded

```TypeScript
readonly dateAdded?: long
```

Album dateAdded

**类型：** long

**起始版本：** 18

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**系统接口：** 此接口为系统接口。

