# Album

Defines the album.

**Inheritance:** Albumextends: AbsAlbum.

**Since:** 9

**Deprecated since:** 26.0.0

**Substitute:** @ohos.file.photoAccessHelper:photoAccessHelper.Album

**System capability:** SystemCapability.FileManagement.UserFileManager.Core

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { userFileManager } from '@kit.CoreFileKit';
```

## addPhotoAssets

```TypeScript
addPhotoAssets(assets: Array<FileAsset>, callback: AsyncCallback<void>): void
```

Add PhotoAssets to the album.

**Since:** 10

**Deprecated since:** 26.0.0

**Substitute:** @ohos.file.photoAccessHelper:photoAccessHelper.MediaAlbumChangeRequest.addAssets

**Required permissions:** 

 ohos.permission.WRITE_IMAGEVIDEO

**System capability:** SystemCapability.FileManagement.UserFileManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| assets | Array&lt;FileAsset> | Yes | Assets to add |
| callback | AsyncCallback&lt;void> | Yes | Returns void |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 13900020 | if PhotoAssets is invalid |

**Example**

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

**Since:** 10

**Deprecated since:** 26.0.0

**Substitute:** @ohos.file.photoAccessHelper:photoAccessHelper.MediaAlbumChangeRequest.addAssets

**Required permissions:** 

 ohos.permission.WRITE_IMAGEVIDEO

**System capability:** SystemCapability.FileManagement.UserFileManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| assets | Array&lt;FileAsset> | Yes | Assets to add |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Returns the promise |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 13900020 | if PhotoAssets is invalid |

**Example**

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

**Since:** 9

**Deprecated since:** 26.0.0

**Substitute:** @ohos.file.photoAccessHelper:photoAccessHelper.Album.commitModify

**Required permissions:** 

 ohos.permission.WRITE_IMAGEVIDEO

**System capability:** SystemCapability.FileManagement.UserFileManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | Yes | No value will be returned. |

**Example**

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

**Since:** 9

**Deprecated since:** 26.0.0

**Substitute:** @ohos.file.photoAccessHelper:photoAccessHelper.Album.commitModify

**Required permissions:** 

 ohos.permission.WRITE_IMAGEVIDEO

**System capability:** SystemCapability.FileManagement.UserFileManager.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Return promise |

**Example**

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

**Since:** 10

**Deprecated since:** 26.0.0

**Substitute:** @ohos.file.photoAccessHelper:photoAccessHelper.MediaAlbumChangeRequest.deleteAssets

**Required permissions:** 

 ohos.permission.WRITE_IMAGEVIDEO

**System capability:** SystemCapability.FileManagement.UserFileManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| assets | Array&lt;FileAsset> | Yes | Assets to delete |
| callback | AsyncCallback&lt;void> | Yes | Returns void |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 13900020 | if PhotoAssets is invalid |

**Example**

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

**Since:** 10

**Deprecated since:** 26.0.0

**Substitute:** @ohos.file.photoAccessHelper:photoAccessHelper.MediaAlbumChangeRequest.deleteAssets

**Required permissions:** 

 ohos.permission.WRITE_IMAGEVIDEO

**System capability:** SystemCapability.FileManagement.UserFileManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| assets | Array&lt;FileAsset> | Yes | Assets to delete |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Returns the promise |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 13900020 | if PhotoAssets is invalid |

**Example**

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

**Since:** 10

**Deprecated since:** 26.0.0

**Substitute:** @ohos.file.photoAccessHelper:photoAccessHelper.MediaAlbumChangeRequest.recoverAssets

**Required permissions:** 

 ohos.permission.WRITE_IMAGEVIDEO

**System capability:** SystemCapability.FileManagement.UserFileManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| assets | Array&lt;FileAsset> | Yes | Assets to recover |
| callback | AsyncCallback&lt;void> | Yes | Returns void |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 13900020 | if PhotoAssets is invalid |

**Example**

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

**Since:** 10

**Deprecated since:** 26.0.0

**Substitute:** @ohos.file.photoAccessHelper:photoAccessHelper.MediaAlbumChangeRequest.recoverAssets

**Required permissions:** 

 ohos.permission.WRITE_IMAGEVIDEO

**System capability:** SystemCapability.FileManagement.UserFileManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| assets | Array&lt;FileAsset> | Yes | Assets to recover |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Returns the promise |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 13900020 | if PhotoAssets is invalid |

**Example**

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

**Since:** 10

**Deprecated since:** 26.0.0

**Substitute:** @ohos.file.photoAccessHelper:photoAccessHelper.MediaAlbumChangeRequest.removeAssets

**Required permissions:** 

 ohos.permission.WRITE_IMAGEVIDEO

**System capability:** SystemCapability.FileManagement.UserFileManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| assets | Array&lt;FileAsset> | Yes | Assets to remove |
| callback | AsyncCallback&lt;void> | Yes | Returns void |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 13900020 | if PhotoAssets is invalid |

**Example**

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

**Since:** 10

**Deprecated since:** 26.0.0

**Substitute:** @ohos.file.photoAccessHelper:photoAccessHelper.MediaAlbumChangeRequest.removeAssets

**Required permissions:** 

 ohos.permission.WRITE_IMAGEVIDEO

**System capability:** SystemCapability.FileManagement.UserFileManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| assets | Array&lt;FileAsset> | Yes | Assets to remove |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Returns the promise |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 13900020 | if PhotoAssets is invalid |

**Example**

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

