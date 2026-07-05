# Album

Defines the album.

**继承实现关系：** Album继承自：AbsAlbum。

**起始版本：** 9

**废弃版本：** 26.0.0

**替代接口：** @ohos.file.photoAccessHelper:photoAccessHelper.Album

**系统能力：** SystemCapability.FileManagement.UserFileManager.Core

**系统接口：** 此接口为系统接口。

## 导入模块

```TypeScript
import { userFileManager } from '@kit.CoreFileKit';
```

## addPhotoAssets

```TypeScript
addPhotoAssets(assets: Array<FileAsset>, callback: AsyncCallback<void>): void
```

Add PhotoAssets to the album.

**起始版本：** 10

**废弃版本：** 26.0.0

**替代接口：** @ohos.file.photoAccessHelper:photoAccessHelper.MediaAlbumChangeRequest.addAssets

**需要权限：** 

 ohos.permission.WRITE_IMAGEVIDEO

**系统能力：** SystemCapability.FileManagement.UserFileManager.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| assets | Array&lt;FileAsset> | 是 | Assets to add |
| callback | AsyncCallback&lt;void> | 是 | Returns void |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 13900020 | if PhotoAssets is invalid |

**示例：**

```TypeScript
import { dataSharePredicates } from '@kit.ArkData';

async function example(mgr: userFileManager.UserFileManager) {
  try {
    console.info('addPhotoAssetsDemoCallback');
    let predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();
    let fetchOption: userFileManager.FetchOptions = {
      fetchColumns: [],
      predicates: predicates
    };
    let albumFetchResult: userFileManager.FetchResult<userFileManager.Album> = await mgr.getAlbums(userFileManager.AlbumType.USER, userFileManager.AlbumSubType.USER_GENERIC);
    let album: userFileManager.Album = await albumFetchResult.getFirstObject();
    let fetchResult: userFileManager.FetchResult<userFileManager.FileAsset> = await mgr.getPhotoAssets(fetchOption);
    let asset: userFileManager.FileAsset = await fetchResult.getFirstObject();
    album.addPhotoAssets([asset], (err) => {
      if (err === undefined) {
        console.info('album addPhotoAssets successfully');
      } else {
        console.error('album addPhotoAssets failed with error: ' + err);
      }
    });
  } catch (err) {
    console.error('addPhotoAssetsDemoCallback failed with error: ' + err);
  }
}

```

## addPhotoAssets

```TypeScript
addPhotoAssets(assets: Array<FileAsset>): Promise<void>
```

Add PhotoAssets to the album.

**起始版本：** 10

**废弃版本：** 26.0.0

**替代接口：** @ohos.file.photoAccessHelper:photoAccessHelper.MediaAlbumChangeRequest.addAssets

**需要权限：** 

 ohos.permission.WRITE_IMAGEVIDEO

**系统能力：** SystemCapability.FileManagement.UserFileManager.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| assets | Array&lt;FileAsset> | 是 | Assets to add |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Returns the promise |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 13900020 | if PhotoAssets is invalid |

**示例：**

```TypeScript
import { dataSharePredicates } from '@kit.ArkData';
import { BusinessError } from '@kit.BasicServicesKit';

async function example(mgr: userFileManager.UserFileManager) {
  try {
    console.info('addPhotoAssetsDemoPromise');
    let predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();
    let fetchOption: userFileManager.FetchOptions = {
      fetchColumns: [],
      predicates: predicates
    };
    let albumFetchResult: userFileManager.FetchResult<userFileManager.Album> = await mgr.getAlbums(userFileManager.AlbumType.USER, userFileManager.AlbumSubType.USER_GENERIC);
    let album: userFileManager.Album = await albumFetchResult.getFirstObject();
    let fetchResult: userFileManager.FetchResult<userFileManager.FileAsset> = await mgr.getPhotoAssets(fetchOption);
    let asset: userFileManager.FileAsset = await fetchResult.getFirstObject();
    album.addPhotoAssets([asset]).then(() => {
      console.info('album addPhotoAssets successfully');
    }).catch((err: BusinessError) => {
      console.error('album addPhotoAssets failed with error: ' + err);
    });
  } catch (err) {
    console.error('addPhotoAssetsDemoPromise failed with error: ' + err);
  }
}

```

## commitModify

```TypeScript
commitModify(callback: AsyncCallback<void>): void
```

Modify the meta data for the album

**起始版本：** 9

**废弃版本：** 26.0.0

**替代接口：** @ohos.file.photoAccessHelper:photoAccessHelper.Album.commitModify

**需要权限：** 

 ohos.permission.WRITE_IMAGEVIDEO

**系统能力：** SystemCapability.FileManagement.UserFileManager.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | 是 | No value will be returned. |

**示例：**

```TypeScript
import { dataSharePredicates } from '@kit.ArkData';

async function example(mgr: userFileManager.UserFileManager) {
  console.info('albumCommitModifyDemo');
  let predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();
  let albumFetchOptions: userFileManager.AlbumFetchOptions = {
    predicates: predicates
  };
  const albumList: userFileManager.FetchResult<userFileManager.Album> = await mgr.getPhotoAlbums(albumFetchOptions);
  const album: userFileManager.Album = await albumList.getFirstObject();
  album.albumName = 'hello';
  album.commitModify((err) => {
    if (err != undefined) {
      console.error('commitModify failed with error: ' + err);
    } else {
      console.info('commitModify successfully');
    }
  });
}

```

## commitModify

```TypeScript
commitModify(): Promise<void>
```

Modify the meta data for the album

**起始版本：** 9

**废弃版本：** 26.0.0

**替代接口：** @ohos.file.photoAccessHelper:photoAccessHelper.Album.commitModify

**需要权限：** 

 ohos.permission.WRITE_IMAGEVIDEO

**系统能力：** SystemCapability.FileManagement.UserFileManager.Core

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Return promise |

**示例：**

```TypeScript
import { dataSharePredicates } from '@kit.ArkData';
import { BusinessError } from '@kit.BasicServicesKit';

async function example(mgr: userFileManager.UserFileManager) {
  console.info('albumCommitModifyDemo');
  let predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();
  let albumFetchOptions: userFileManager.AlbumFetchOptions = {
    predicates: predicates
  };
  try {
    let albumList: userFileManager.FetchResult<userFileManager.Album> = await mgr.getPhotoAlbums(albumFetchOptions);
    let album: userFileManager.Album = await albumList.getFirstObject();
    album.albumName = 'hello';
    album.commitModify().then(() => {
      console.info('commitModify successfully');
    }).catch((err: BusinessError) => {
      console.error('commitModify failed with error: ' + err);
    });
  } catch (err) {
    console.error('getPhotoAlbums failed. message = ', err);
  }
}

```

## deletePhotoAssets

```TypeScript
deletePhotoAssets(assets: Array<FileAsset>, callback: AsyncCallback<void>): void
```

Delete PhotoAssets permanently from the trash album.

**起始版本：** 10

**废弃版本：** 26.0.0

**替代接口：** @ohos.file.photoAccessHelper:photoAccessHelper.MediaAlbumChangeRequest.deleteAssets

**需要权限：** 

 ohos.permission.WRITE_IMAGEVIDEO

**系统能力：** SystemCapability.FileManagement.UserFileManager.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| assets | Array&lt;FileAsset> | 是 | Assets to delete |
| callback | AsyncCallback&lt;void> | 是 | Returns void |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 13900020 | if PhotoAssets is invalid |

**示例：**

```TypeScript
import { dataSharePredicates } from '@kit.ArkData';

async function example(mgr: userFileManager.UserFileManager) {
  try {
    console.info('deletePhotoAssetsDemoCallback');
    let predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();
    let fetchOption: userFileManager.FetchOptions = {
      fetchColumns: [],
      predicates: predicates
    };
    let albumFetchResult: userFileManager.FetchResult<userFileManager.Album> = await mgr.getAlbums(userFileManager.AlbumType.SYSTEM, userFileManager.AlbumSubType.TRASH);
    let album: userFileManager.Album = await albumFetchResult.getFirstObject();
    let fetchResult: userFileManager.FetchResult<userFileManager.FileAsset> = await album.getPhotoAssets(fetchOption);
    let asset: userFileManager.FileAsset = await fetchResult.getFirstObject();
    album.deletePhotoAssets([asset], (err) => {
      if (err === undefined) {
        console.info('album deletePhotoAssets successfully');
      } else {
        console.error('album deletePhotoAssets failed with error: ' + err);
      }
    });
  } catch (err) {
    console.error('deletePhotoAssetsDemoCallback failed with error: ' + err);
  }
}

```

## deletePhotoAssets

```TypeScript
deletePhotoAssets(assets: Array<FileAsset>): Promise<void>
```

Delete PhotoAssets permanently from the trash album.

**起始版本：** 10

**废弃版本：** 26.0.0

**替代接口：** @ohos.file.photoAccessHelper:photoAccessHelper.MediaAlbumChangeRequest.deleteAssets

**需要权限：** 

 ohos.permission.WRITE_IMAGEVIDEO

**系统能力：** SystemCapability.FileManagement.UserFileManager.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| assets | Array&lt;FileAsset> | 是 | Assets to delete |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Returns the promise |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 13900020 | if PhotoAssets is invalid |

**示例：**

```TypeScript
import { dataSharePredicates } from '@kit.ArkData';
import { BusinessError } from '@kit.BasicServicesKit';

async function example(mgr: userFileManager.UserFileManager) {
  try {
    console.info('deletePhotoAssetsDemoPromise');
    let predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();
    let fetchOption: userFileManager.FetchOptions = {
      fetchColumns: [],
      predicates: predicates
    };
    let albumFetchResult: userFileManager.FetchResult<userFileManager.Album> = await mgr.getAlbums(userFileManager.AlbumType.SYSTEM, userFileManager.AlbumSubType.TRASH);
    let album: userFileManager.Album = await albumFetchResult.getFirstObject();
    let fetchResult: userFileManager.FetchResult<userFileManager.FileAsset> = await album.getPhotoAssets(fetchOption);
    let asset: userFileManager.FileAsset = await fetchResult.getFirstObject();
    album.deletePhotoAssets([asset]).then(() => {
      console.info('album deletePhotoAssets successfully');
    }).catch((err: BusinessError) => {
      console.error('album deletePhotoAssets failed with error: ' + err);
    });
  } catch (err) {
    console.error('deletePhotoAssetsDemoPromise failed with error: ' + err);
  }
}

```

## recoverPhotoAssets

```TypeScript
recoverPhotoAssets(assets: Array<FileAsset>, callback: AsyncCallback<void>): void
```

Recover PhotoAssets from the trash album.

**起始版本：** 10

**废弃版本：** 26.0.0

**替代接口：** @ohos.file.photoAccessHelper:photoAccessHelper.MediaAlbumChangeRequest.recoverAssets

**需要权限：** 

 ohos.permission.WRITE_IMAGEVIDEO

**系统能力：** SystemCapability.FileManagement.UserFileManager.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| assets | Array&lt;FileAsset> | 是 | Assets to recover |
| callback | AsyncCallback&lt;void> | 是 | Returns void |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 13900020 | if PhotoAssets is invalid |

**示例：**

```TypeScript
import { dataSharePredicates } from '@kit.ArkData';

async function example(mgr: userFileManager.UserFileManager) {
  try {
    console.info('recoverPhotoAssetsDemoCallback');
    let predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();
    let fetchOption: userFileManager.FetchOptions = {
      fetchColumns: [],
      predicates: predicates
    };
    let albumFetchResult: userFileManager.FetchResult<userFileManager.Album> = await mgr.getAlbums(userFileManager.AlbumType.SYSTEM, userFileManager.AlbumSubType.TRASH);
    let album: userFileManager.Album = await albumFetchResult.getFirstObject();
    let fetchResult: userFileManager.FetchResult<userFileManager.FileAsset> = await album.getPhotoAssets(fetchOption);
    let asset: userFileManager.FileAsset = await fetchResult.getFirstObject();
    album.recoverPhotoAssets([asset], (err) => {
      if (err === undefined) {
        console.info('album recoverPhotoAssets successfully');
      } else {
        console.error('album recoverPhotoAssets failed with error: ' + err);
      }
    });
  } catch (err) {
    console.error('recoverPhotoAssetsDemoCallback failed with error: ' + err);
  }
}

```

## recoverPhotoAssets

```TypeScript
recoverPhotoAssets(assets: Array<FileAsset>): Promise<void>
```

Recover PhotoAssets from the trash album.

**起始版本：** 10

**废弃版本：** 26.0.0

**替代接口：** @ohos.file.photoAccessHelper:photoAccessHelper.MediaAlbumChangeRequest.recoverAssets

**需要权限：** 

 ohos.permission.WRITE_IMAGEVIDEO

**系统能力：** SystemCapability.FileManagement.UserFileManager.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| assets | Array&lt;FileAsset> | 是 | Assets to recover |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Returns the promise |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 13900020 | if PhotoAssets is invalid |

**示例：**

```TypeScript
import { dataSharePredicates } from '@kit.ArkData';
import { BusinessError } from '@kit.BasicServicesKit';

async function example(mgr: userFileManager.UserFileManager) {
  try {
    console.info('recoverPhotoAssetsDemoPromise');
    let predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();
    let fetchOption: userFileManager.FetchOptions = {
      fetchColumns: [],
      predicates: predicates
    };
    let albumFetchResult: userFileManager.FetchResult<userFileManager.Album> = await mgr.getAlbums(userFileManager.AlbumType.SYSTEM, userFileManager.AlbumSubType.TRASH);
    let album: userFileManager.Album = await albumFetchResult.getFirstObject();
    let fetchResult: userFileManager.FetchResult<userFileManager.FileAsset> = await album.getPhotoAssets(fetchOption);
    let asset: userFileManager.FileAsset = await fetchResult.getFirstObject();
    album.recoverPhotoAssets([asset]).then(() => {
      console.info('album recoverPhotoAssets successfully');
    }).catch((err: BusinessError) => {
      console.error('album recoverPhotoAssets failed with error: ' + err);
    });
  } catch (err) {
    console.error('recoverPhotoAssetsDemoPromise failed with error: ' + err);
  }
}

```

## removePhotoAssets

```TypeScript
removePhotoAssets(assets: Array<FileAsset>, callback: AsyncCallback<void>): void
```

Remove PhotoAssets from the album.

**起始版本：** 10

**废弃版本：** 26.0.0

**替代接口：** @ohos.file.photoAccessHelper:photoAccessHelper.MediaAlbumChangeRequest.removeAssets

**需要权限：** 

 ohos.permission.WRITE_IMAGEVIDEO

**系统能力：** SystemCapability.FileManagement.UserFileManager.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| assets | Array&lt;FileAsset> | 是 | Assets to remove |
| callback | AsyncCallback&lt;void> | 是 | Returns void |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 13900020 | if PhotoAssets is invalid |

**示例：**

```TypeScript
import { dataSharePredicates } from '@kit.ArkData';

async function example(mgr: userFileManager.UserFileManager) {
  try {
    console.info('removePhotoAssetsDemoCallback');
    let predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();
    let fetchOption: userFileManager.FetchOptions = {
      fetchColumns: [],
      predicates: predicates
    };
    let albumFetchResult: userFileManager.FetchResult<userFileManager.Album> = await mgr.getAlbums(userFileManager.AlbumType.USER, userFileManager.AlbumSubType.USER_GENERIC);
    let album: userFileManager.Album = await albumFetchResult.getFirstObject();
    let fetchResult: userFileManager.FetchResult<userFileManager.FileAsset> = await album.getPhotoAssets(fetchOption);
    let asset: userFileManager.FileAsset = await fetchResult.getFirstObject();
    album.removePhotoAssets([asset], (err) => {
      if (err === undefined) {
        console.info('album removePhotoAssets successfully');
      } else {
        console.error('album removePhotoAssets failed with error: ' + err);
      }
    });
  } catch (err) {
    console.error('removePhotoAssetsDemoCallback failed with error: ' + err);
  }
}

```

## removePhotoAssets

```TypeScript
removePhotoAssets(assets: Array<FileAsset>): Promise<void>
```

Remove PhotoAssets from the album.

**起始版本：** 10

**废弃版本：** 26.0.0

**替代接口：** @ohos.file.photoAccessHelper:photoAccessHelper.MediaAlbumChangeRequest.removeAssets

**需要权限：** 

 ohos.permission.WRITE_IMAGEVIDEO

**系统能力：** SystemCapability.FileManagement.UserFileManager.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| assets | Array&lt;FileAsset> | 是 | Assets to remove |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Returns the promise |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 13900020 | if PhotoAssets is invalid |

**示例：**

```TypeScript
import { dataSharePredicates } from '@kit.ArkData';
import { BusinessError } from '@kit.BasicServicesKit';

async function example(mgr: userFileManager.UserFileManager) {
  try {
    console.info('removePhotoAssetsDemoPromise');
    let predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();
    let fetchOption: userFileManager.FetchOptions = {
      fetchColumns: [],
      predicates: predicates
    };
    let albumFetchResult: userFileManager.FetchResult<userFileManager.Album> = await mgr.getAlbums(userFileManager.AlbumType.USER, userFileManager.AlbumSubType.USER_GENERIC);
    let album: userFileManager.Album = await albumFetchResult.getFirstObject();
    let fetchResult: userFileManager.FetchResult<userFileManager.FileAsset> = await album.getPhotoAssets(fetchOption);
    let asset: userFileManager.FileAsset = await fetchResult.getFirstObject();
    album.removePhotoAssets([asset]).then(() => {
      console.info('album removePhotoAssets successfully');
    }).catch((err: BusinessError) => {
      console.error('album removePhotoAssets failed with error: ' + err);
    });
  } catch (err) {
    console.error('removePhotoAssetsDemoPromise failed with error: ' + err);
  }
}

```

