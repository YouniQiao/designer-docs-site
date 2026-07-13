# PrivateAlbum (System API)

Defines the private album

**Inheritance/Implementation:** PrivateAlbum extends [AbsAlbum](arkts-corefile-absalbum-i-sys.md)

**Since:** 9

**Deprecated since:** 26.0.0

**Substitutes:** [Album](../../apis-media-library-kit/arkts-apis/arkts-medialibrary-album-i.md)

**System capability:** SystemCapability.FileManagement.UserFileManager.Core

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { userFileManager } from '@kit.CoreFileKit';
```

## delete

```TypeScript
delete(uri: string, callback: AsyncCallback<void>): void
```

Delete asset permanently from Trash bin, only support the Trash album

**Since:** 9

**Deprecated since:** 26.0.0

**Substitutes:** deleteAlbumsWithUri

**Required permissions:** ohos.permission.READ_IMAGEVIDEO and ohos.permission.WRITE_IMAGEVIDEO or ohos.permission.READ_AUDIO and ohos.permission.WRITE_AUDIO

**System capability:** SystemCapability.FileManagement.UserFileManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uri | string | Yes | uri of asset |
| callback | AsyncCallback&lt;void&gt; | Yes | No value returned |

**Example**

For details about how to create a userFileManager instance, see the example in [userFileManager.getUserFileMgr](#userfilemanagergetuserfilemgr).

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

**Since:** 9

**Deprecated since:** 26.0.0

**Substitutes:** deleteAlbumsWithUri

**Required permissions:** ohos.permission.READ_IMAGEVIDEO and ohos.permission.WRITE_IMAGEVIDEO or ohos.permission.READ_AUDIO and ohos.permission.WRITE_AUDIO

**System capability:** SystemCapability.FileManagement.UserFileManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uri | string | Yes | Uri of asset |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | A Promise instance, no value returned |

**Example**

For details about how to create a userFileManager instance, see the example in [userFileManager.getUserFileMgr](#userfilemanagergetuserfilemgr).

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

**Since:** 9

**Deprecated since:** 26.0.0

**Substitutes:** recoverAssetsWithUri

**Required permissions:** ohos.permission.READ_IMAGEVIDEO and ohos.permission.WRITE_IMAGEVIDEO or ohos.permission.READ_AUDIO and ohos.permission.WRITE_AUDIO

**System capability:** SystemCapability.FileManagement.UserFileManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uri | string | Yes | Uri of asset |
| callback | AsyncCallback&lt;void&gt; | Yes | No value returned |

**Example**

For details about how to create a userFileManager instance, see the example in [userFileManager.getUserFileMgr](#userfilemanagergetuserfilemgr).

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

**Since:** 9

**Deprecated since:** 26.0.0

**Substitutes:** recoverAssetsWithUri

**Required permissions:** ohos.permission.READ_IMAGEVIDEO and ohos.permission.WRITE_IMAGEVIDEO or ohos.permission.READ_AUDIO and ohos.permission.WRITE_AUDIO

**System capability:** SystemCapability.FileManagement.UserFileManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uri | string | Yes | Uri of asset |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | A Promise instance, no value returned |

**Example**

For details about how to create a userFileManager instance, see the example in [userFileManager.getUserFileMgr](#userfilemanagergetuserfilemgr).

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

