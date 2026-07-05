# PrivateAlbum

Defines the private album

**继承实现关系：** PrivateAlbum继承自：AbsAlbum。

**起始版本：** 9

**废弃版本：** 26.0.0

**替代接口：** @ohos.file.photoAccessHelper:photoAccessHelper.Album

**系统能力：** SystemCapability.FileManagement.UserFileManager.Core

**系统接口：** 此接口为系统接口。

## 导入模块

```TypeScript
import { userFileManager } from '@kit.CoreFileKit';
```

## delete

```TypeScript
delete(uri: string, callback: AsyncCallback<void>): void
```

Delete asset permanently from Trash bin, only support the Trash album

**起始版本：** 9

**废弃版本：** 26.0.0

**替代接口：** @ohos.file.photoAccessHelper:photoAccessHelper.MediaAssetChangeRequest.deleteAlbumsWithUri

**需要权限：** 

 ohos.permission.READ_IMAGEVIDEO and ohos.permission.WRITE_IMAGEVIDEO or ohos.permission.READ_AUDIO and ohos.permission.WRITE_AUDIO

**系统能力：** SystemCapability.FileManagement.UserFileManager.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| uri | string | 是 | uri of asset |
| callback | AsyncCallback&lt;void> | 是 | No value returned |

**示例：**

```TypeScript
import { dataSharePredicates } from '@kit.ArkData';

async function example(mgr: userFileManager.UserFileManager) {
  console.info('privateAlbumDeleteCallback');
  let albumList: userFileManager.FetchResult<userFileManager.PrivateAlbum> = await mgr.getPrivateAlbum(userFileManager.PrivateAlbumType.TYPE_TRASH);
  let predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();
  let fetchOption: userFileManager.FetchOptions = {
    fetchColumns: [],
    predicates: predicates
  };
  let trashAlbum: userFileManager.PrivateAlbum = await albumList.getFirstObject();
  let fetchResult: userFileManager.FetchResult<userFileManager.FileAsset> = await trashAlbum.getPhotoAssets(fetchOption);
  let fileAsset: userFileManager.FileAsset = await fetchResult.getFirstObject();
  let deleteFileUri = fileAsset.uri;
  trashAlbum.delete(deleteFileUri, (err) => {
    if (err != undefined) {
      console.error('trashAlbum.delete failed, message = ', err);
    } else {
      console.info('trashAlbum.delete successfully');
    }
  });
}

```

## delete

```TypeScript
delete(uri: string): Promise<void>
```

Delete asset permanently from Trash bin, only support the Trash album

**起始版本：** 9

**废弃版本：** 26.0.0

**替代接口：** @ohos.file.photoAccessHelper:photoAccessHelper.MediaAssetChangeRequest.deleteAlbumsWithUri

**需要权限：** 

 ohos.permission.READ_IMAGEVIDEO and ohos.permission.WRITE_IMAGEVIDEO or ohos.permission.READ_AUDIO and ohos.permission.WRITE_AUDIO

**系统能力：** SystemCapability.FileManagement.UserFileManager.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| uri | string | 是 | Uri of asset |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | A Promise instance, no value returned |

**示例：**

```TypeScript
import { dataSharePredicates } from '@kit.ArkData';
import { BusinessError } from '@kit.BasicServicesKit';

async function example(mgr: userFileManager.UserFileManager) {
  console.info('privateAlbumDeleteDemoPromise');
  let albumList: userFileManager.FetchResult<userFileManager.PrivateAlbum> = await mgr.getPrivateAlbum(userFileManager.PrivateAlbumType.TYPE_TRASH);
  let predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();
  let fetchOption: userFileManager.FetchOptions = {
    fetchColumns: [],
    predicates: predicates
  };
  let trashAlbum: userFileManager.PrivateAlbum = await albumList.getFirstObject();
  let fetchResult: userFileManager.FetchResult<userFileManager.FileAsset> = await trashAlbum.getPhotoAssets(fetchOption);
  let fileAsset: userFileManager.FileAsset = await fetchResult.getFirstObject();
  let deleteFileUri = fileAsset.uri;
  trashAlbum.delete(deleteFileUri).then(() => {
    console.info('trashAlbum.delete successfully');
  }).catch((err: BusinessError) => {
    console.error('trashAlbum.delete failed, message = ', err);
  });
}

```

## recover

```TypeScript
recover(uri: string, callback: AsyncCallback<void>): void
```

Recover asset from Trash bin, only support the Trash album

**起始版本：** 9

**废弃版本：** 26.0.0

**替代接口：** @ohos.file.photoAccessHelper:photoAccessHelper.MediaAssetChangeRequest.recoverAssetsWithUri

**需要权限：** 

 ohos.permission.READ_IMAGEVIDEO and ohos.permission.WRITE_IMAGEVIDEO or ohos.permission.READ_AUDIO and ohos.permission.WRITE_AUDIO

**系统能力：** SystemCapability.FileManagement.UserFileManager.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| uri | string | 是 | Uri of asset |
| callback | AsyncCallback&lt;void> | 是 | No value returned |

**示例：**

```TypeScript
import { dataSharePredicates } from '@kit.ArkData';

async function example(mgr: userFileManager.UserFileManager) {
  console.info('privateAlbumRecoverDemoCallback');
  let albumList: userFileManager.FetchResult<userFileManager.PrivateAlbum> = await mgr.getPrivateAlbum(userFileManager.PrivateAlbumType.TYPE_TRASH);
  let predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();
  let fetchOption: userFileManager.FetchOptions = {
    fetchColumns: [],
    predicates: predicates
  };
  let trashAlbum: userFileManager.PrivateAlbum = await albumList.getFirstObject();
  if (trashAlbum === undefined) {
    console.error('privateAlbumRecoverDemoCallback trashAlbum is undefined');
    return;
  }
  let fetchResult: userFileManager.FetchResult<userFileManager.FileAsset> = await trashAlbum.getPhotoAssets(fetchOption);
  let fileAsset: userFileManager.FileAsset = await fetchResult.getFirstObject();
  if (fileAsset === undefined) {
    console.error('privateAlbumRecoverDemoCallback fileAsset is undefined');
    return;
  }
  let recoverFileUri: string = fileAsset.uri;
  trashAlbum.recover(recoverFileUri, (err) => {
    if (err != undefined) {
      console.error('trashAlbum.recover failed, message = ', err);
    } else {
      console.info('trashAlbum.recover successfully');
    }
  });
}

```

## recover

```TypeScript
recover(uri: string): Promise<void>
```

Recover asset from Trash bin, only support the Trash album

**起始版本：** 9

**废弃版本：** 26.0.0

**替代接口：** @ohos.file.photoAccessHelper:photoAccessHelper.MediaAssetChangeRequest.recoverAssetsWithUri

**需要权限：** 

 ohos.permission.READ_IMAGEVIDEO and ohos.permission.WRITE_IMAGEVIDEO or ohos.permission.READ_AUDIO and ohos.permission.WRITE_AUDIO

**系统能力：** SystemCapability.FileManagement.UserFileManager.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| uri | string | 是 | Uri of asset |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | A Promise instance, no value returned |

**示例：**

```TypeScript
import { dataSharePredicates } from '@kit.ArkData';
import { BusinessError } from '@kit.BasicServicesKit';

async function example(mgr: userFileManager.UserFileManager) {
  console.info('privateAlbumRecoverDemoPromise');
  let albumList: userFileManager.FetchResult<userFileManager.PrivateAlbum> = await mgr.getPrivateAlbum(userFileManager.PrivateAlbumType.TYPE_TRASH);
  let predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();
  let fetchOption: userFileManager.FetchOptions = {
    fetchColumns: [],
    predicates: predicates
  };
  let trashAlbum: userFileManager.PrivateAlbum = await albumList.getFirstObject();
  let fetchResult: userFileManager.FetchResult<userFileManager.FileAsset> = await trashAlbum.getPhotoAssets(fetchOption);
  let fileAsset: userFileManager.FileAsset = await fetchResult.getFirstObject();
  let recoverFileUri: string = fileAsset.uri;
  trashAlbum.recover(recoverFileUri).then(() => {
    console.info('trashAlbum.recover successfully');
  }).catch((err: BusinessError) => {
    console.error('trashAlbum.recover failed, message = ', err);
  });
}

```

