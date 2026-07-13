# UserFileManager (System API)

Defines the UserFileManager class and provides functions to access the data in user file storage.

**Since:** 9

**Deprecated since:** 26.0.0

**Substitutes:** [photoAccessHelper:photoAccessHelper](../../apis-media-library-kit/arkts-apis/arkts-file-photoaccesshelper.md)

**System capability:** SystemCapability.FileManagement.UserFileManager.Core

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { userFileManager } from '@kit.CoreFileKit';
```

## createAlbum

```TypeScript
createAlbum(name: string, callback: AsyncCallback<Album>): void
```

Create a generic user album.

**Since:** 10

**Deprecated since:** 26.0.0

**Substitutes:** [createAlbumRequest](../../apis-media-library-kit/arkts-apis/arkts-medialibrary-mediaalbumchangerequest-c-sys.md#createalbumrequest-1)

**Required permissions:** ohos.permission.WRITE_IMAGEVIDEO

**System capability:** SystemCapability.FileManagement.UserFileManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | Album name to be created. |
| callback | AsyncCallback&lt;Album&gt; | Yes | Returns the instance of newly created Album |

**Example**

For details about how to create a userFileManager instance, see the example in [userFileManager.getUserFileMgr](#userfilemanagergetuserfilemgr).

```TypeScript
async function example(mgr: userFileManager.UserFileManager) {
  console.info('createAlbumDemo');
  let albumName: string = 'newAlbumName' + new Date().getTime();
  mgr.createAlbum(albumName, (err, album) => {
    if (err) {
      console.error('createAlbumCallback failed with err: ' + err);
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

Create a generic user album.

**Since:** 10

**Deprecated since:** 26.0.0

**Substitutes:** [createAlbumRequest](../../apis-media-library-kit/arkts-apis/arkts-medialibrary-mediaalbumchangerequest-c-sys.md#createalbumrequest-1)

**Required permissions:** ohos.permission.WRITE_IMAGEVIDEO

**System capability:** SystemCapability.FileManagement.UserFileManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | Album name to be created. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Album&gt; | Returns the instance of newly created Album |

**Example**

For details about how to create a userFileManager instance, see the example in [userFileManager.getUserFileMgr](#userfilemanagergetuserfilemgr).

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

async function example(mgr: userFileManager.UserFileManager) {
  console.info('createAlbumDemo');
  let albumName: string  = 'newAlbumName' + new Date().getTime();
  mgr.createAlbum(albumName).then((album) => {
    console.info('createAlbumPromise successfully, album: ' + album.albumName + ' album uri: ' + album.albumUri);
  }).catch((err: BusinessError) => {
    console.error('createAlbumPromise failed with err: ' + err);
  });
}

```

## createAudioAsset

```TypeScript
createAudioAsset(displayName: string, callback: AsyncCallback<FileAsset>): void
```

Create Audio Asset

**Since:** 10

**Deprecated since:** 26.0.0

**Required permissions:** ohos.permission.WRITE_AUDIO

**System capability:** SystemCapability.FileManagement.UserFileManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| displayName | string | Yes | File name |
| callback | AsyncCallback&lt;FileAsset&gt; | Yes | Callback used to return the FileAsset |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 13900020 | if type displayName is not string |
| 14000001 | if type displayName invalid |

**Example**

For details about how to create a userFileManager instance, see the example in [userFileManager.getUserFileMgr](#userfilemanagergetuserfilemgr).

```TypeScript
async function example(mgr: userFileManager.UserFileManager) {
  console.info('createAudioAssetDemo');
  let testFileName: string = 'testFile' + Date.now() + '.mp3';
  mgr.createAudioAsset(testFileName, (err, fileAsset) => {
    if (fileAsset != undefined) {
      console.info('createAudioAsset file displayName' + fileAsset.displayName);
      console.info('createAudioAsset successfully');
    } else {
      console.error('createAudioAsset failed, message = ', err);
    }
  });
}

```

## createAudioAsset

```TypeScript
createAudioAsset(displayName: string): Promise<FileAsset>
```

Create Audio Asset

**Since:** 10

**Deprecated since:** 26.0.0

**Substitutes:** [AudioViewPicker](arkts-corefile-audioviewpicker-c.md)

**Required permissions:** ohos.permission.WRITE_AUDIO

**System capability:** SystemCapability.FileManagement.UserFileManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| displayName | string | Yes | File name |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;FileAsset&gt; | A Promise instance used to return the FileAsset |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 13900020 | if type displayName is not string |

**Example**

For details about how to create a userFileManager instance, see the example in [userFileManager.getUserFileMgr](#userfilemanagergetuserfilemgr).

```TypeScript
async function example(mgr: userFileManager.UserFileManager) {
  console.info('createAudioAssetDemo');
  try {
    let testFileName: string = 'testFile' + Date.now() + '.mp3';
    let fileAsset: userFileManager.FileAsset = await mgr.createAudioAsset(testFileName);
    console.info('createAudioAsset file displayName' + fileAsset.displayName);
    console.info('createAudioAsset successfully');
  } catch (err) {
    console.error('createAudioAsset failed, message = ', err);
  }
}

```

## createPhotoAsset

```TypeScript
createPhotoAsset(displayName: string, albumUri: string, callback: AsyncCallback<FileAsset>): void
```

Create Photo Asset

**Since:** 9

**Deprecated since:** 26.0.0

**Substitutes:** [createAsset](../../apis-media-library-kit/arkts-apis/arkts-medialibrary-photoaccesshelper-i-sys.md#createasset-1)

**Required permissions:** ohos.permission.WRITE_IMAGEVIDEO

**System capability:** SystemCapability.FileManagement.UserFileManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| displayName | string | Yes | File name |
| albumUri | string | Yes | Asset will put into the album. |
| callback | AsyncCallback&lt;FileAsset&gt; | Yes | Callback used to return the FileAsset |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 13900020 | if type displayName or albumUri is not string |
| 14000001 | if type displayName invalid |

**Example**

For details about how to create a userFileManager instance, see the example in [userFileManager.getUserFileMgr](#userfilemanagergetuserfilemgr).

```TypeScript
import { dataSharePredicates } from '@kit.ArkData';

async function example(mgr: userFileManager.UserFileManager) {
  console.info('createPhotoAssetDemo');
  let predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();
  let fetchOptions: userFileManager.AlbumFetchOptions = {
    predicates: predicates
  };
  let albums: userFileManager.FetchResult<userFileManager.Album> = await mgr.getPhotoAlbums(fetchOptions);
  let album: userFileManager.Album = await albums.getFirstObject();
  let testFileName: string = 'testFile' + Date.now() + '.jpg';
  mgr.createPhotoAsset(testFileName, album.albumUri, (err, fileAsset) => {
    if (fileAsset != undefined) {
      console.info('createPhotoAsset file displayName' + fileAsset.displayName);
      console.info('createPhotoAsset successfully');
    } else {
      console.error('createPhotoAsset failed, message = ', err);
    }
  });
}

```

## createPhotoAsset

```TypeScript
createPhotoAsset(displayName: string, callback: AsyncCallback<FileAsset>): void
```

Create Photo Asset

**Since:** 9

**Deprecated since:** 26.0.0

**Substitutes:** [createAsset](../../apis-media-library-kit/arkts-apis/arkts-medialibrary-photoaccesshelper-i-sys.md#createasset-1)

**Required permissions:** ohos.permission.WRITE_IMAGEVIDEO

**System capability:** SystemCapability.FileManagement.UserFileManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| displayName | string | Yes | File name |
| callback | AsyncCallback&lt;FileAsset&gt; | Yes | Callback used to return the FileAsset |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 13900020 | if type displayName is not string |
| 14000001 | if type displayName invalid |

**Example**

For details about how to create a userFileManager instance, see the example in [userFileManager.getUserFileMgr](#userfilemanagergetuserfilemgr).

```TypeScript
async function example(mgr: userFileManager.UserFileManager) {
  console.info('createPhotoAssetDemo');
  let testFileName: string = 'testFile' + Date.now() + '.jpg';
  mgr.createPhotoAsset(testFileName, (err, fileAsset) => {
    if (fileAsset != undefined) {
      console.info('createPhotoAsset file displayName' + fileAsset.displayName);
      console.info('createPhotoAsset successfully');
    } else {
      console.error('createPhotoAsset failed, message = ', err);
    }
  });
}

```

## createPhotoAsset

```TypeScript
createPhotoAsset(displayName: string, albumUri?: string): Promise<FileAsset>
```

Create Photo Asset

**Since:** 9

**Deprecated since:** 26.0.0

**Substitutes:** [createAsset](../../apis-media-library-kit/arkts-apis/arkts-medialibrary-photoaccesshelper-i-sys.md#createasset-1)

**Required permissions:** ohos.permission.WRITE_IMAGEVIDEO

**System capability:** SystemCapability.FileManagement.UserFileManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| displayName | string | Yes | File name |
| albumUri | string | No | Album uri is optional, PhotoAssets will put into the default album without albumUri |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;FileAsset&gt; | A Promise instance used to return the FileAsset |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 13900020 | if type displayName or albumUri is not string |

**Example**

For details about how to create a userFileManager instance, see the example in [userFileManager.getUserFileMgr](#userfilemanagergetuserfilemgr).

```TypeScript
async function example(mgr: userFileManager.UserFileManager) {
  console.info('createPhotoAssetDemo');
  try {
    let testFileName: string = 'testFile' + Date.now() + '.jpg';
    let fileAsset: userFileManager.FileAsset = await mgr.createPhotoAsset(testFileName);
    console.info('createPhotoAsset file displayName' + fileAsset.displayName);
    console.info('createPhotoAsset successfully');
  } catch (err) {
    console.error('createPhotoAsset failed, message = ', err);
  }
}

```

## createPhotoAsset

```TypeScript
createPhotoAsset(displayName: string, createOption: PhotoCreateOptions): Promise<FileAsset>
```

Create Photo Asset

**Since:** 9

**Deprecated since:** 26.0.0

**Substitutes:** [createAsset](../../apis-media-library-kit/arkts-apis/arkts-medialibrary-photoaccesshelper-i-sys.md#createasset-1)

**Required permissions:** ohos.permission.WRITE_IMAGEVIDEO

**System capability:** SystemCapability.FileManagement.UserFileManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| displayName | string | Yes | File name |
| createOption | PhotoCreateOptions | Yes | Create operation |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;FileAsset&gt; | A Promise instance used to return the FileAsset |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 13900020 | if type displayName is not string |

**Example**

For details about how to create a userFileManager instance, see the example in [userFileManager.getUserFileMgr](#userfilemanagergetuserfilemgr).

```TypeScript
async function example(mgr: userFileManager.UserFileManager) {
  console.info('createPhotoAssetDemo');
  try {
    let testFileName: string = 'testFile' + Date.now() + '.jpg';
    let createOption: userFileManager.PhotoCreateOptions = {
      subType: userFileManager.PhotoSubType.DEFAULT
    }
    let fileAsset: userFileManager.FileAsset = await mgr.createPhotoAsset(testFileName, createOption);
    console.info('createPhotoAsset file displayName' + fileAsset.displayName);
    console.info('createPhotoAsset successfully');
  } catch (err) {
    console.error('createPhotoAsset failed, message = ', err);
  }
}

```

## createPhotoAsset

```TypeScript
createPhotoAsset(displayName: string, createOption: PhotoCreateOptions, callback: AsyncCallback<FileAsset>): void
```

Create Photo Asset

**Since:** 9

**Deprecated since:** 26.0.0

**Substitutes:** [createAsset](../../apis-media-library-kit/arkts-apis/arkts-medialibrary-photoaccesshelper-i-sys.md#createasset-1)

**Required permissions:** ohos.permission.WRITE_IMAGEVIDEO

**System capability:** SystemCapability.FileManagement.UserFileManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| displayName | string | Yes | File name |
| createOption | PhotoCreateOptions | Yes | Photo create operation |
| callback | AsyncCallback&lt;FileAsset&gt; | Yes | Callback used to return the FileAsset |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 13900020 | if type displayName is not string |
| 14000001 | if type displayName invalid |

**Example**

For details about how to create a userFileManager instance, see the example in [userFileManager.getUserFileMgr](#userfilemanagergetuserfilemgr).

```TypeScript
async function example(mgr: userFileManager.UserFileManager) {
  console.info('createPhotoAssetDemo');
  let testFileName: string = 'testFile' + Date.now() + '.jpg';
  let createOption: userFileManager.PhotoCreateOptions = {
    subType: userFileManager.PhotoSubType.DEFAULT
  }
  mgr.createPhotoAsset(testFileName, createOption, (err, fileAsset) => {
    if (fileAsset != undefined) {
      console.info('createPhotoAsset file displayName' + fileAsset.displayName);
      console.info('createPhotoAsset successfully');
    } else {
      console.error('createPhotoAsset failed, message = ', err);
    }
  });
}

```

## delete

```TypeScript
delete(uri: string, callback: AsyncCallback<void>): void
```

Delete Asset

**Since:** 9

**Deprecated since:** 26.0.0

**Substitutes:** [deleteAssets](../../apis-media-library-kit/arkts-apis/arkts-medialibrary-mediaassetchangerequest-c.md#deleteassets-1)

**Required permissions:** ohos.permission.READ_IMAGEVIDEO and ohos.permission.WRITE_IMAGEVIDEO or ohos.permission.READ_AUDIO and ohos.permission.WRITE_AUDIO

**System capability:** SystemCapability.FileManagement.UserFileManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uri | string | Yes | Uri of FileAsset |
| callback | AsyncCallback&lt;void&gt; | Yes | No value returned |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 13900020 | if type uri is not string |

**Example**

For details about how to create a userFileManager instance, see the example in [userFileManager.getUserFileMgr](#userfilemanagergetuserfilemgr).

```TypeScript
import { dataSharePredicates } from '@kit.ArkData';

async function example(mgr: userFileManager.UserFileManager) {
  console.info('deleteAssetDemo');
  let predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();
  let fetchOptions: userFileManager.FetchOptions = {
    fetchColumns: [],
    predicates: predicates
  };
  try {
    const fetchResult: userFileManager.FetchResult<userFileManager.FileAsset> = await mgr.getPhotoAssets(fetchOptions);
    let asset: userFileManager.FileAsset = await fetchResult.getFirstObject();


    if (asset == undefined) {
      console.error('asset not exist');
      return;
    }
    mgr.delete(asset.uri, (err) => {
      if (err == undefined) {
        console.info('delete successfully');
      } else {
        console.error('delete failed with error: ' + err);
      }
    });
  } catch (err) {
    console.error('fetch failed, message =', err);
  }
}

```

## delete

```TypeScript
delete(uri: string): Promise<void>
```

Delete Asset

**Since:** 9

**Deprecated since:** 26.0.0

**Substitutes:** [deleteAssets](../../apis-media-library-kit/arkts-apis/arkts-medialibrary-mediaassetchangerequest-c.md#deleteassets-1)

**Required permissions:** ohos.permission.READ_IMAGEVIDEO and ohos.permission.WRITE_IMAGEVIDEO or ohos.permission.READ_AUDIO and ohos.permission.WRITE_AUDIO

**System capability:** SystemCapability.FileManagement.UserFileManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uri | string | Yes | Uri of FileAsset |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | A Promise instance, no value returned |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 13900020 | if type uri is not string |

**Example**

For details about how to create a userFileManager instance, see the example in [userFileManager.getUserFileMgr](#userfilemanagergetuserfilemgr).

```TypeScript
import { dataSharePredicates } from '@kit.ArkData';

async function example(mgr: userFileManager.UserFileManager) {
  console.info('deleteDemo');
  let predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();
  let fetchOptions: userFileManager.FetchOptions = {
    fetchColumns: [],
    predicates: predicates
  };
  try {
    const fetchResult: userFileManager.FetchResult<userFileManager.FileAsset> = await mgr.getPhotoAssets(fetchOptions);
    let asset: userFileManager.FileAsset = await fetchResult.getFirstObject();
    if (asset == undefined) {
      console.error('asset not exist');
      return;
    }
    await mgr.delete(asset.uri);
    console.info('delete successfully');
  } catch (err) {
    console.error('delete failed with error: ' + err);
  }
}

```

## deleteAlbums

```TypeScript
deleteAlbums(albums: Array<Album>, callback: AsyncCallback<void>): void
```

Delete generic user-created albums.

**Since:** 10

**Deprecated since:** 26.0.0

**Substitutes:** [deleteAlbums](../../apis-media-library-kit/arkts-apis/arkts-medialibrary-mediaalbumchangerequest-c-sys.md#deletealbums-1)

**Required permissions:** ohos.permission.WRITE_IMAGEVIDEO

**System capability:** SystemCapability.FileManagement.UserFileManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| albums | Array&lt;Album&gt; | Yes | Specify which album to delete |
| callback | AsyncCallback&lt;void&gt; | Yes | Returns void |

**Example**

For details about how to create a userFileManager instance, see the example in [userFileManager.getUserFileMgr](#userfilemanagergetuserfilemgr).

```TypeScript
import { dataSharePredicates } from '@kit.ArkData';

async function example(mgr: userFileManager.UserFileManager) {
  // Delete the album named newAlbumName.
  console.info('deleteAlbumsDemo');
  let predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();
  predicates.equalTo('album_name', 'newAlbumName');
  let fetchOptions: userFileManager.FetchOptions = {
    fetchColumns: [],
    predicates: predicates
  };
  let fetchResult: userFileManager.FetchResult<userFileManager.Album> = await mgr.getAlbums(userFileManager.AlbumType.USER, userFileManager.AlbumSubType.USER_GENERIC, fetchOptions);
  let album: userFileManager.Album = await fetchResult.getFirstObject();
  mgr.deleteAlbums([album], (err) => {
    if (err) {
      console.error('deletePhotoAlbumsCallback failed with err: ' + err);
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

Delete generic user-created albums.

**Since:** 10

**Deprecated since:** 26.0.0

**Substitutes:** [deleteAlbums](../../apis-media-library-kit/arkts-apis/arkts-medialibrary-mediaalbumchangerequest-c-sys.md#deletealbums-1)

**Required permissions:** ohos.permission.WRITE_IMAGEVIDEO

**System capability:** SystemCapability.FileManagement.UserFileManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| albums | Array&lt;Album&gt; | Yes | Specify which album to delete |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Returns the promise |

**Example**

For details about how to create a userFileManager instance, see the example in [userFileManager.getUserFileMgr](#userfilemanagergetuserfilemgr).

```TypeScript
import { dataSharePredicates } from '@kit.ArkData';
import { BusinessError } from '@kit.BasicServicesKit';

async function example(mgr: userFileManager.UserFileManager) {
  // Delete the album named newAlbumName.
  console.info('deleteAlbumsDemo');
  let predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();
  predicates.equalTo('album_name', 'newAlbumName');
  let fetchOptions: userFileManager.FetchOptions = {
    fetchColumns: [],
    predicates: predicates
  };
  let fetchResult: userFileManager.FetchResult<userFileManager.Album> = await mgr.getAlbums(userFileManager.AlbumType.USER, userFileManager.AlbumSubType.USER_GENERIC, fetchOptions);
  let album: userFileManager.Album = await fetchResult.getFirstObject();
  mgr.deleteAlbums([album]).then(() => {
    console.info('deletePhotoAlbumsPromise successfully');
      fetchResult.close();
    }).catch((err: BusinessError) => {
      console.error('deletePhotoAlbumsPromise failed with err: ' + err);
      fetchResult.close();
  });
}

```

## getActivePeers

```TypeScript
getActivePeers(callback: AsyncCallback<Array<PeerInfo>>): void
```

Get Active Peer device information

**Since:** 9

**Deprecated since:** 26.0.0

**System capability:** SystemCapability.FileManagement.UserFileManager.DistributedCore

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;Array&lt;PeerInfo&gt;&gt; | Yes | Callback return the list of the active peer devices' information |

**Example**

For details about how to create a userFileManager instance, see the example in [userFileManager.getUserFileMgr](#userfilemanagergetuserfilemgr).

```TypeScript
async function example(mgr: userFileManager.UserFileManager) {
  console.info('getActivePeersDemo');
  mgr.getActivePeers((err, devicesInfo) => {
    if (devicesInfo != undefined) {
      console.info('getActivePeers succeed.');
      for (let i = 0; i < devicesInfo.length; i++) {
        console.info('get distributed info ' + devicesInfo[i].deviceName + devicesInfo[i].networkId);
      }
    } else {
      console.error('getActivePeers failed. message = ', err);
    }
  });
}

```

## getActivePeers

```TypeScript
getActivePeers(): Promise<Array<PeerInfo>>
```

Get Active Peer device information

**Since:** 9

**Deprecated since:** 26.0.0

**System capability:** SystemCapability.FileManagement.UserFileManager.DistributedCore

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;PeerInfo&gt;&gt; | Promise used to return the list of the active peer devices' information |

**Example**

For details about how to create a userFileManager instance, see the example in [userFileManager.getUserFileMgr](#userfilemanagergetuserfilemgr).

```TypeScript
async function example(mgr: userFileManager.UserFileManager) {
  console.info('getActivePeersDemo');
  try {
    let devicesInfo: Array<userFileManager.PeerInfo> = await mgr.getActivePeers();
    if (devicesInfo != undefined) {
      console.info('getActivePeers succeed.');
      for (let i = 0; i < devicesInfo.length; i++) {
        console.info('get distributed info ' + devicesInfo[i].deviceName + devicesInfo[i].networkId);
      }
    } else {
      console.error('get distributed fail');
    }
  } catch (err) {
    console.error('getActivePeers failed. message = ', err);
  }
}

```

## getAlbums

```TypeScript
getAlbums(
      type: AlbumType,
      subType: AlbumSubType,
      options: FetchOptions,
      callback: AsyncCallback<FetchResult<Album>>
    ): void
```

Obtains albums based on the retrieval options and album types.

**Since:** 10

**Deprecated since:** 26.0.0

**Substitutes:** getAlbums

**Required permissions:** ohos.permission.READ_IMAGEVIDEO

**System capability:** SystemCapability.FileManagement.UserFileManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | AlbumType | Yes | Album type. |
| subType | AlbumSubType | Yes | Album subtype. |
| options | FetchOptions | Yes | options to fetch albums |
| callback | AsyncCallback&lt;FetchResult&lt;Album&gt;&gt; | Yes | Returns the fetch result of the albums |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 13900020 | if type options is not FetchOption |

**Example**

For details about how to create a userFileManager instance, see the example in [userFileManager.getUserFileMgr](#userfilemanagergetuserfilemgr).

```TypeScript
import { dataSharePredicates } from '@kit.ArkData';

async function example(mgr: userFileManager.UserFileManager) {
  // Obtain the album named newAlbumName.
  console.info('getAlbumsDemo');
  let predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();
  predicates.equalTo('album_name', 'newAlbumName');
  let fetchOptions: userFileManager.FetchOptions = {
    fetchColumns: [],
    predicates: predicates
  };
  mgr.getAlbums(userFileManager.AlbumType.USER, userFileManager.AlbumSubType.USER_GENERIC, fetchOptions, async (err, fetchResult) => {
    if (err) {
      console.error('getAlbumsCallback failed with err: ' + err);
      return;
    }
    if (fetchResult == undefined) {
      console.error('getAlbumsCallback fetchResult is undefined');
      return;
    }
    let album: userFileManager.Album = await fetchResult.getFirstObject();
    console.info('getAlbumsCallback successfully, albumName: ' + album.albumName);
    fetchResult.close();
  });
}

```

## getAlbums

```TypeScript
getAlbums(type: AlbumType, subType: AlbumSubType, callback: AsyncCallback<FetchResult<Album>>): void
```

Obtains albums based on the album types.

**Since:** 10

**Deprecated since:** 26.0.0

**Substitutes:** getAlbums

**Required permissions:** ohos.permission.READ_IMAGEVIDEO

**System capability:** SystemCapability.FileManagement.UserFileManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | AlbumType | Yes | Album type. |
| subType | AlbumSubType | Yes | Album subtype. |
| callback | AsyncCallback&lt;FetchResult&lt;Album&gt;&gt; | Yes | Returns the fetch result of the albums |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 13900020 | if type options is not FetchOption |

**Example**

For details about how to create a userFileManager instance, see the example in [userFileManager.getUserFileMgr](#userfilemanagergetuserfilemgr).

```TypeScript
async function example(mgr: userFileManager.UserFileManager) {
  // Obtain the system album VIDEO, which is preset by default.
  console.info('getAlbumsDemo');
  mgr.getAlbums(userFileManager.AlbumType.SYSTEM, userFileManager.AlbumSubType.VIDEO, async (err, fetchResult) => {
    if (err) {
      console.error('getAlbumsCallback failed with err: ' + err);
      return;
    }
    if (fetchResult == undefined) {
      console.error('getAlbumsCallback fetchResult is undefined');
      return;
    }
    let album: userFileManager.Album = await fetchResult.getFirstObject();
    console.info('getAlbumsCallback successfully, albumUri: ' + album.albumUri);
    fetchResult.close();
  });
}

```

## getAlbums

```TypeScript
getAlbums(type: AlbumType, subType: AlbumSubType, options?: FetchOptions): Promise<FetchResult<Album>>
```

Obtains albums based on the retrieval options and album types.

**Since:** 10

**Deprecated since:** 26.0.0

**Substitutes:** getAlbums

**Required permissions:** ohos.permission.READ_IMAGEVIDEO

**System capability:** SystemCapability.FileManagement.UserFileManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | AlbumType | Yes | Album type. |
| subType | AlbumSubType | Yes | Album subtype. |
| options | FetchOptions | No | -options to fetch albums |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;FetchResult&lt;Album&gt;&gt; | - Returns the fetch result of the albums |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 13900020 | if type options is not FetchOption |

**Example**

For details about how to create a userFileManager instance, see the example in [userFileManager.getUserFileMgr](#userfilemanagergetuserfilemgr).

```TypeScript
import { dataSharePredicates } from '@kit.ArkData';
import { BusinessError } from '@kit.BasicServicesKit';

async function example(mgr: userFileManager.UserFileManager) {
  // Obtain the album named newAlbumName.
  console.info('getAlbumsDemo');
  let predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();
  predicates.equalTo('album_name', 'newAlbumName');
  let fetchOptions: userFileManager.FetchOptions = {
    fetchColumns: [],
    predicates: predicates
  };
  mgr.getAlbums(userFileManager.AlbumType.USER, userFileManager.AlbumSubType.USER_GENERIC, fetchOptions).then( async (fetchResult) => {
    if (fetchResult == undefined) {
      console.error('getAlbumsPromise fetchResult is undefined');
      return;
    }
    let album: userFileManager.Album = await fetchResult.getFirstObject();
    console.info('getAlbumsPromise successfully, albumName: ' + album.albumName);
    fetchResult.close();
  }).catch((err: BusinessError) => {
    console.error('getAlbumsPromise failed with err: ' + err);
  });
}

```

## getAllPeers

```TypeScript
getAllPeers(callback: AsyncCallback<Array<PeerInfo>>): void
```

Get all the peer devices' information

**Since:** 9

**Deprecated since:** 26.0.0

**System capability:** SystemCapability.FileManagement.UserFileManager.DistributedCore

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;Array&lt;PeerInfo&gt;&gt; | Yes | Callback return the list of the all the peer devices' information |

**Example**

For details about how to create a userFileManager instance, see the example in [userFileManager.getUserFileMgr](#userfilemanagergetuserfilemgr).

```TypeScript
async function example(mgr: userFileManager.UserFileManager) {
  console.info('getAllPeersDemo');
  mgr.getAllPeers((err, devicesInfo) => {
    if (devicesInfo != undefined) {
      console.info('getAllPeers succeed.');
      for (let i = 0; i < devicesInfo.length; i++) {
        console.info('get distributed info ' + devicesInfo[i].deviceName + devicesInfo[i].networkId);
      }
    } else {
      console.error('getAllPeers failed. message = ', err);
    }
  });
}

```

## getAllPeers

```TypeScript
getAllPeers(): Promise<Array<PeerInfo>>
```

Get all the peer devices' information

**Since:** 9

**Deprecated since:** 26.0.0

**System capability:** SystemCapability.FileManagement.UserFileManager.DistributedCore

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;PeerInfo&gt;&gt; | Promise used to return the list of the all the peer devices' information |

**Example**

For details about how to create a userFileManager instance, see the example in [userFileManager.getUserFileMgr](#userfilemanagergetuserfilemgr).

```TypeScript
async function example(mgr: userFileManager.UserFileManager) {
  console.info('getAllPeersDemo');
  try {
    let devicesInfo: Array<userFileManager.PeerInfo> = await mgr.getAllPeers();

    if (devicesInfo != undefined) {
      console.info('getAllPeers succeed.');
      for (let i = 0; i < devicesInfo.length; i++) {
        console.info('get distributed info ' + devicesInfo[i].deviceName + devicesInfo[i].networkId);
      }
    } else {
      console.error('get distributed fail');
    }
  } catch (err) {
    console.error('getAllPeers failed. message = ', err);
  }
}

```

## getAudioAssets

```TypeScript
getAudioAssets(options: FetchOptions, callback: AsyncCallback<FetchResult<FileAsset>>): void
```

Query audio assets

**Since:** 9

**Deprecated since:** 26.0.0

**Substitutes:** [AudioViewPicker](arkts-corefile-audioviewpicker-c.md)

**Required permissions:** ohos.permission.READ_AUDIO

**System capability:** SystemCapability.FileManagement.UserFileManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | FetchOptions | Yes | Retrieval options. |
| callback | AsyncCallback&lt;FetchResult&lt;FileAsset&gt;&gt; | Yes | Callback return the FetchResult. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 13900020 | if type options is not FetchOptions |

**Example**

For details about how to create a userFileManager instance, see the example in [userFileManager.getUserFileMgr](#userfilemanagergetuserfilemgr).

```TypeScript
import { dataSharePredicates } from '@kit.ArkData';

async function example(mgr: userFileManager.UserFileManager) {
  console.info('getAudioAssets');
  let predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();
  let fetchOptions: userFileManager.FetchOptions = {
    fetchColumns: [],
    predicates: predicates
  };

  mgr.getAudioAssets(fetchOptions, async (err, fetchResult) => {
    if (fetchResult != undefined) {
      console.info('fetchFileResult success');
      let fileAsset: userFileManager.FileAsset = await fetchResult.getFirstObject();
      if (fileAsset != undefined) {
        console.info('fileAsset.displayName :' + fileAsset.displayName);
      }
    } else {
      console.error('fetchFileResult fail' + err);
    }
  });
}

```

## getAudioAssets

```TypeScript
getAudioAssets(options: FetchOptions): Promise<FetchResult<FileAsset>>
```

Query audio assets

**Since:** 9

**Deprecated since:** 26.0.0

**Substitutes:** [AudioViewPicker](arkts-corefile-audioviewpicker-c.md)

**Required permissions:** ohos.permission.READ_AUDIO

**System capability:** SystemCapability.FileManagement.UserFileManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | FetchOptions | Yes | Retrieval options. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;FetchResult&lt;FileAsset&gt;&gt; | A promise instance used to return the files in the format of a FetchResult instance |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 13900020 | if type options is not FetchOptions |

**Example**

For details about how to create a userFileManager instance, see the example in [userFileManager.getUserFileMgr](#userfilemanagergetuserfilemgr).

```TypeScript
import { dataSharePredicates } from '@kit.ArkData';

async function example(mgr: userFileManager.UserFileManager) {
  console.info('getAudioAssets');
  let predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();
  let fetchOptions: userFileManager.FetchOptions = {
    fetchColumns: [],
    predicates: predicates
  };
  try {
    let fetchResult: userFileManager.FetchResult<userFileManager.FileAsset> = await mgr.getAudioAssets(fetchOptions);
    if (fetchResult != undefined) {
      console.info('fetchFileResult success');
      let fileAsset: userFileManager.FileAsset = await fetchResult.getFirstObject();
      if (fileAsset != undefined) {
        console.info('fileAsset.displayName :' + fileAsset.displayName);
      }
    }
  } catch (err) {
    console.error('getAudioAssets failed, message = ', err);
  }
}

```

## getPhotoAlbums

```TypeScript
getPhotoAlbums(options: AlbumFetchOptions, callback: AsyncCallback<FetchResult<Album>>): void
```

Obtains albums based on the retrieval options. This method uses an asynchronous callback to return.

**Since:** 9

**Deprecated since:** 26.0.0

**Substitutes:** [getAlbums](../../apis-media-library-kit/arkts-apis/arkts-medialibrary-photoaccesshelper-i.md#getalbums-1)

**Required permissions:** ohos.permission.READ_IMAGEVIDEO

**System capability:** SystemCapability.FileManagement.UserFileManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | AlbumFetchOptions | Yes | Retrieval options. |
| callback | AsyncCallback&lt;FetchResult&lt;Album&gt;&gt; | Yes | Callback used to return an album array. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 13900020 | if type options is not AlbumFetchOptions |

**Example**

For details about how to create a userFileManager instance, see the example in [userFileManager.getUserFileMgr](#userfilemanagergetuserfilemgr).

```TypeScript
import { dataSharePredicates } from '@kit.ArkData';

async function example(mgr: userFileManager.UserFileManager) {
  console.info('getPhotoAlbumsDemo');
  let predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();
  let albumFetchOptions: userFileManager.AlbumFetchOptions = {
    predicates: predicates
  };

  mgr.getPhotoAlbums(albumFetchOptions, (err, fetchResult) => {
    if (fetchResult != undefined) {
      console.info('albums.count = ' + fetchResult.getCount());
      fetchResult.getFirstObject((err, album) => {
        if (album != undefined) {
          console.info('first album.albumName = ' + album.albumName);
        } else {
          console.error('album is undefined, err = ', err);
        }
      });
    } else {
      console.error('getPhotoAlbums fail, message = ', err);
    }
  });
}

```

## getPhotoAlbums

```TypeScript
getPhotoAlbums(options: AlbumFetchOptions): Promise<FetchResult<Album>>
```

Obtains albums based on the retrieval options. This method uses a promise to return the albums.

**Since:** 9

**Deprecated since:** 26.0.0

**Substitutes:** [getAlbums](../../apis-media-library-kit/arkts-apis/arkts-medialibrary-photoaccesshelper-i.md#getalbums-1)

**Required permissions:** ohos.permission.READ_IMAGEVIDEO

**System capability:** SystemCapability.FileManagement.UserFileManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | AlbumFetchOptions | Yes | Retrieval options. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;FetchResult&lt;Album&gt;&gt; | A Promise instance used to return an album array. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 13900020 | if type options is not AlbumFetchOptions |

**Example**

For details about how to create a userFileManager instance, see the example in [userFileManager.getUserFileMgr](#userfilemanagergetuserfilemgr).

```TypeScript
import { dataSharePredicates } from '@kit.ArkData';

async function example(mgr: userFileManager.UserFileManager) {
  console.info('getPhotoAlbumsDemo');
  let predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();
  let albumFetchOptions: userFileManager.AlbumFetchOptions = {
    predicates: predicates
  };
  try {
    let fetchResult: userFileManager.FetchResult<userFileManager.Album> = await mgr.getPhotoAlbums(albumFetchOptions);
    console.info('album.count = ' + fetchResult.getCount());
    const album: userFileManager.Album = await fetchResult.getFirstObject();
    console.info('first album.albumName = ' + album.albumName);
  } catch (err) {
    console.error('getPhotoAlbums fail, message = ' + err);
  }
}

```

## getPhotoAssets

```TypeScript
getPhotoAssets(options: FetchOptions, callback: AsyncCallback<FetchResult<FileAsset>>): void
```

Query photo, video assets

**Since:** 9

**Deprecated since:** 26.0.0

**Substitutes:** [getAssets](../../apis-media-library-kit/arkts-apis/arkts-medialibrary-photoaccesshelper-i.md#getassets-1)

**Required permissions:** ohos.permission.READ_IMAGEVIDEO

**System capability:** SystemCapability.FileManagement.UserFileManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | FetchOptions | Yes | retrieval options. |
| callback | AsyncCallback&lt;FetchResult&lt;FileAsset&gt;&gt; | Yes | Callback return the FetchResult. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 13900020 | if type options is not FetchOptions |

**Example**

For details about how to create a userFileManager instance, see the example in [userFileManager.getUserFileMgr](#userfilemanagergetuserfilemgr).

```TypeScript
import { dataSharePredicates } from '@kit.ArkData';

async function example(mgr: userFileManager.UserFileManager) {
  console.info('getPhotoAssets');
  let predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();
  let fetchOptions: userFileManager.FetchOptions = {
    fetchColumns: [],
    predicates: predicates
  };

  mgr.getPhotoAssets(fetchOptions, async (err, fetchResult) => {
    if (fetchResult != undefined) {
      console.info('fetchResult success');
      let fileAsset: userFileManager.FileAsset = await fetchResult.getFirstObject();
      if (fileAsset != undefined) {
        console.info('fileAsset.displayName : ' + fileAsset.displayName);
      }
    } else {
      console.error('fetchResult fail' + err);
    }
  });
}

```

## getPhotoAssets

```TypeScript
getPhotoAssets(options: FetchOptions): Promise<FetchResult<FileAsset>>
```

Query photo, video assets

**Since:** 9

**Deprecated since:** 26.0.0

**Substitutes:** [getAssets](../../apis-media-library-kit/arkts-apis/arkts-medialibrary-photoaccesshelper-i.md#getassets-1)

**Required permissions:** ohos.permission.READ_IMAGEVIDEO

**System capability:** SystemCapability.FileManagement.UserFileManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | FetchOptions | Yes | Retrieval options. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;FetchResult&lt;FileAsset&gt;&gt; | A promise instance used to return the files in the format of a FetchResult instance |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 13900020 | if type options is not FetchOptions |

**Example**

For details about how to create a userFileManager instance, see the example in [userFileManager.getUserFileMgr](#userfilemanagergetuserfilemgr).

```TypeScript
import { dataSharePredicates } from '@kit.ArkData';

async function example(mgr: userFileManager.UserFileManager) {
  console.info('getPhotoAssets');
  let predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();
  let fetchOptions: userFileManager.FetchOptions = {
    fetchColumns: [],
    predicates: predicates
  };
  try {
    let fetchResult: userFileManager.FetchResult<userFileManager.FileAsset> = await mgr.getPhotoAssets(fetchOptions);
    if (fetchResult != undefined) {
      console.info('fetchResult success');
      let fileAsset: userFileManager.FileAsset = await fetchResult.getFirstObject();
      if (fileAsset != undefined) {
        console.info('fileAsset.displayName :' + fileAsset.displayName);
      }
    }
  } catch (err) {
    console.error('getPhotoAssets failed, message = ', err);
  }
}

```

## getPhotoIndex

```TypeScript
getPhotoIndex(photoUri: string, albumUri: string, options: FetchOptions, callback: AsyncCallback<number>): void
```

Get the index of the asset in the album

**Since:** 10

**Deprecated since:** 26.0.0

**Substitutes:** getPhotoIndex

**Required permissions:** ohos.permission.READ_IMAGEVIDEO

**System capability:** SystemCapability.FileManagement.UserFileManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| photoUri | string | Yes | The photo asset uri. |
| albumUri | string | Yes | The album uri. |
| options | FetchOptions | Yes | fetch options |
| callback | AsyncCallback&lt;number&gt; | Yes | Returns the index of the asset in the album |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types; 3. Parameter verification failed. |

**Example**

For details about how to create a userFileManager instance, see the example in [userFileManager.getUserFileMgr](#userfilemanagergetuserfilemgr).

```TypeScript
import { dataSharePredicates } from '@kit.ArkData';

async function example(mgr: userFileManager.UserFileManager) {
  try {
    console.info('getPhotoIndexDemo');
    let predicatesForGetAsset: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();
    let fetchOp: userFileManager.FetchOptions = {
      fetchColumns: [],
      predicates: predicatesForGetAsset
    };
    // Obtain the album URI.
    let albumFetchResult: userFileManager.FetchResult<userFileManager.Album> = await mgr.getAlbums(userFileManager.AlbumType.SYSTEM, userFileManager.AlbumSubType.FAVORITE, fetchOp);
    let album: userFileManager.Album = await albumFetchResult.getFirstObject();
    let predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();
    predicates.orderByAsc(userFileManager.ImageVideoKey.DATE_MODIFIED.toString());
    let fetchOptions: userFileManager.FetchOptions = {
      fetchColumns: [userFileManager.ImageVideoKey.DATE_MODIFIED.toString()],
      predicates: predicates
    };
    let photoFetchResult: userFileManager.FetchResult<userFileManager.FileAsset> = await album.getPhotoAssets(fetchOptions);
    let expectIndex = 1;
    // Obtain the URI of the second file.
    let photoAsset: userFileManager.FileAsset = await photoFetchResult.getPositionObject(expectIndex);
    mgr.getPhotoIndex(photoAsset.uri, album.albumUri, fetchOptions, (err, index) => {
      if (err == undefined) {
        console.info(`getPhotoIndex successfully and index is : ${index}`);
      } else {
        console.error(`getPhotoIndex failed;`);
      }
    });
  } catch (error) {
    console.error(`getPhotoIndex failed; error: ${error}`);
  }
}

```

## getPhotoIndex

```TypeScript
getPhotoIndex(photoUri: string, albumUri: string, options: FetchOptions): Promise<number>
```

Get the index of the asset in the album

**Since:** 10

**Deprecated since:** 26.0.0

**Substitutes:** [getPhotoIndex](../../apis-media-library-kit/arkts-apis/arkts-medialibrary-photoaccesshelper-i-sys.md#getphotoindex-1)

**Required permissions:** ohos.permission.READ_IMAGEVIDEO

**System capability:** SystemCapability.FileManagement.UserFileManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| photoUri | string | Yes | The photo asset uri. |
| albumUri | string | Yes | The album uri. |
| options | FetchOptions | Yes | fetch options |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;number&gt; | - Returns the index of the asset in the album |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types; 3. Parameter verification failed. |

**Example**

For details about how to create a userFileManager instance, see the example in [userFileManager.getUserFileMgr](#userfilemanagergetuserfilemgr).

```TypeScript
import { dataSharePredicates } from '@kit.ArkData';
import { BusinessError } from '@kit.BasicServicesKit';

async function example(mgr: userFileManager.UserFileManager) {
  try {
    console.info('getPhotoIndexDemo');
    let predicatesForGetAsset: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();
    let fetchOp: userFileManager.FetchOptions = {
      fetchColumns: [],
      predicates: predicatesForGetAsset
    };
    // Obtain the album URI.
    let albumFetchResult: userFileManager.FetchResult<userFileManager.Album> = await mgr.getAlbums(userFileManager.AlbumType.SYSTEM, userFileManager.AlbumSubType.FAVORITE, fetchOp);
    let album: userFileManager.Album = await albumFetchResult.getFirstObject();
    if (album === undefined) {
      console.error('getPhotoIndexPromise albums is undefined');
      return;
    }
    let predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();
    predicates.orderByAsc(userFileManager.ImageVideoKey.DATE_MODIFIED.toString());
    let fetchOptions: userFileManager.FetchOptions = {
      fetchColumns: [userFileManager.ImageVideoKey.DATE_MODIFIED.toString()],
      predicates: predicates
    };
    let photoFetchResult: userFileManager.FetchResult<userFileManager.FileAsset> = await album.getPhotoAssets(fetchOptions);
    let expectIndex = 1;
    // Obtain the URI of the second file.
    let photoAsset: userFileManager.FileAsset = await photoFetchResult.getPositionObject(expectIndex);
    mgr.getPhotoIndex(photoAsset.uri, album.albumUri, fetchOptions).then((index) => {
      console.info(`getPhotoIndex successfully and index is : ${index}`);
    }).catch((err: BusinessError) => {
      console.error(`getPhotoIndex failed; error: ${err}`);
    });
  } catch (error) {
    console.error(`getPhotoIndex failed; error: ${error}`);
  }
}

```

## getPrivateAlbum

```TypeScript
getPrivateAlbum(type: PrivateAlbumType, callback: AsyncCallback<FetchResult<PrivateAlbum>>): void
```

Obtains system private albums based on the private album type. This method uses an asynchronous callback to return.

**Since:** 9

**Deprecated since:** 26.0.0

**Substitutes:** getAlbums

**Required permissions:** ohos.permission.READ_IMAGEVIDEO

**System capability:** SystemCapability.FileManagement.UserFileManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | PrivateAlbumType | Yes | Private album type |
| callback | AsyncCallback&lt;FetchResult&lt;PrivateAlbum&gt;&gt; | Yes | Used to return a private album FetchResult. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 13900020 | if type type is not PrivateAlbumType |

**Example**

For details about how to create a userFileManager instance, see the example in [userFileManager.getUserFileMgr](#userfilemanagergetuserfilemgr).

```TypeScript
async function example(mgr: userFileManager.UserFileManager) {
  console.info('getPrivateAlbumDemo');
  mgr.getPrivateAlbum(userFileManager.PrivateAlbumType.TYPE_TRASH, async (err, fetchResult) => {
    if (fetchResult != undefined) {
      let trashAlbum: userFileManager.PrivateAlbum = await fetchResult.getFirstObject();
      console.info('first album.albumName = ' + trashAlbum.albumName);
    } else {
      console.error('getPrivateAlbum failed. message = ', err);
    }
  });
}

```

## getPrivateAlbum

```TypeScript
getPrivateAlbum(type: PrivateAlbumType): Promise<FetchResult<PrivateAlbum>>
```

Obtains system private albums based on the private album type. This method uses a promise to return.

**Since:** 9

**Deprecated since:** 26.0.0

**Substitutes:** getAlbums

**Required permissions:** ohos.permission.READ_IMAGEVIDEO

**System capability:** SystemCapability.FileManagement.UserFileManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | PrivateAlbumType | Yes | Private album type |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;FetchResult&lt;PrivateAlbum&gt;&gt; | A Promise instance used to return a private album FetchResult. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 13900020 | if type type is not PrivateAlbumType |

**Example**

For details about how to create a userFileManager instance, see the example in [userFileManager.getUserFileMgr](#userfilemanagergetuserfilemgr).

```TypeScript
async function example(mgr: userFileManager.UserFileManager) {
  console.info('getPrivateAlbumDemo');
  try {
    let fetchResult: userFileManager.FetchResult<userFileManager.PrivateAlbum> = await mgr.getPrivateAlbum(userFileManager.PrivateAlbumType.TYPE_TRASH);
    let trashAlbum: userFileManager.PrivateAlbum = await fetchResult.getFirstObject();
    console.info('first album.albumName = ' + trashAlbum.albumName);
  } catch (err) {
    console.error('getPrivateAlbum failed. message = ', err);
  }
}

```

## off

```TypeScript
off(type: ChangeEvent, callback?: Callback<void>): void
```

Turn off monitor the data changes

**Since:** 9

**Deprecated since:** 26.0.0

**Substitutes:** off

**System capability:** SystemCapability.FileManagement.UserFileManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | ChangeEvent | Yes | One of 'deviceChange','albumChange','imageChange','audioChange','videoChange','remoteFileChange' |
| callback | Callback&lt;void&gt; | No | No value returned |

**Example**

For details about how to create a userFileManager instance, see the example in [userFileManager.getUserFileMgr](#userfilemanagergetuserfilemgr).

```TypeScript
async function example(mgr: userFileManager.UserFileManager) {
  console.info('offDemo');
  let count = 0;
  mgr.on('imageChange', () => {
    count++;
    // The image file has been changed. Go to the next step.
  });

  mgr.off('imageChange', () => {
    // The listening is stopped successfully.
  });

  try {
    let testFileName: string = 'testFile' + Date.now() + '.jpg';
    let fileAsset: userFileManager.FileAsset = await mgr.createPhotoAsset(testFileName);
    console.info('createPhotoAsset file displayName' + fileAsset.displayName);
    console.info('createPhotoAsset successfully');
  } catch (err) {
    console.error('createPhotoAsset failed, message = ' + err);
  }
  // Sleep for 1s.
  if (count == 0) {
    console.info('offDemo success');
  } else {
    console.error('offDemo fail');
  }
}

```

## off

```TypeScript
off(uri: string, callback?: Callback<ChangeData>): void
```

Turn off monitor for the specified uri.

**Since:** 10

**Deprecated since:** 26.0.0

**Substitutes:** [unRegisterChange](../../apis-media-library-kit/arkts-apis/arkts-medialibrary-photoaccesshelper-i.md#unregisterchange-1)

**System capability:** SystemCapability.FileManagement.UserFileManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uri | string | Yes | FileAsset's uri, Album's uri or DefaultChangeUri value |
| callback | Callback&lt;ChangeData&gt; | No | Remove specified callback from monitoring to a specified uri |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 13900020 | if parameter is invalid |

**Example**

For details about how to create a userFileManager instance, see the example in [userFileManager.getUserFileMgr](#userfilemanagergetuserfilemgr).

```TypeScript
import { dataSharePredicates } from '@kit.ArkData';

async function example(mgr: userFileManager.UserFileManager) {
  console.info('offDemo');
  let predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();
  let fetchOptions: userFileManager.FetchOptions = {
    fetchColumns: [],
    predicates: predicates
  };
  let fetchResult: userFileManager.FetchResult<userFileManager.FileAsset> = await mgr.getPhotoAssets(fetchOptions);
  let fileAsset: userFileManager.FileAsset = await fetchResult.getFirstObject();
  if (fileAsset != undefined) {
    console.info('fileAsset.displayName : ' + fileAsset.displayName);
  }
  let onCallback1 = (changeData: userFileManager.ChangeData) => {
    console.info('onCallback1 on');
  }
  let onCallback2 = (changeData: userFileManager.ChangeData) => {
    console.info('onCallback2 on');
  }
  if (fileAsset.uri !== undefined) {
    // Register onCallback1.
    mgr.on(fileAsset.uri, false, onCallback1);
    // Register onCallback2.
    mgr.on(fileAsset.uri, false, onCallback2);
    // Unregister the listening of onCallback1.
    mgr.off(fileAsset.uri, onCallback1);  
  }
  fileAsset.favorite(true, (err) => {
    if (err == undefined) {
      console.info('favorite successfully');
    } else {
      console.error('favorite failed with error:' + err);
    }
  });
}

```

## on

```TypeScript
on(type: ChangeEvent, callback: Callback<void>): void
```

Turn on monitor the data changes

**Since:** 9

**Deprecated since:** 26.0.0

**Substitutes:** on

**System capability:** SystemCapability.FileManagement.UserFileManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | ChangeEvent | Yes | One of 'deviceChange','albumChange','imageChange','audioChange','videoChange','remoteFileChange' |
| callback | Callback&lt;void&gt; | Yes | No value returned |

**Example**

For details about how to create a userFileManager instance, see the example in [userFileManager.getUserFileMgr](#userfilemanagergetuserfilemgr).

```TypeScript
async function example(mgr: userFileManager.UserFileManager) {
  console.info('onDemo');
  let count = 0;
  mgr.on('imageChange', () => {
    count++;
    // The image file has been changed. Go to the next step.
  });
  try {
    let testFileName: string = 'testFile' + Date.now() + '.jpg';
    let fileAsset: userFileManager.FileAsset = await mgr.createPhotoAsset(testFileName);
    console.info('createPhotoAsset file displayName' + fileAsset.displayName);
    console.info('createPhotoAsset successfully');
  } catch (err) {
    console.error('createPhotoAsset failed, message = ' + err);
  }
  // Sleep for 1s.
  if (count > 0) {
    console.info('onDemo success');
  } else {
    console.error('onDemo fail');
  }
  mgr.off('imageChange', () => {
    // The listening is stopped successfully.
  });
}

```

## on

```TypeScript
on(uri: string, forSubUri: boolean, callback: Callback<ChangeData>): void
```

Turn on monitor for the specified uri.

**Since:** 10

**Deprecated since:** 26.0.0

**Substitutes:** [registerChange](../../apis-media-library-kit/arkts-apis/arkts-medialibrary-photoaccesshelper-i.md#registerchange-1)

**System capability:** SystemCapability.FileManagement.UserFileManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uri | string | Yes | FileAsset's uri, album's uri or DefaultChangeUri |
| forSubUri | boolean | Yes | Monitor the sub uri. |
| callback | Callback&lt;ChangeData&gt; | Yes | callback function, return the ChangeData to be monitored |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 13900020 | if parameter is invalid |

**Example**

For details about how to create a userFileManager instance, see the example in [userFileManager.getUserFileMgr](#userfilemanagergetuserfilemgr).

```TypeScript
import { dataSharePredicates } from '@kit.ArkData';

async function example(mgr: userFileManager.UserFileManager) {
  console.info('onDemo');
  let predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();
  let fetchOptions: userFileManager.FetchOptions = {
    fetchColumns: [],
    predicates: predicates
  };
  let fetchResult: userFileManager.FetchResult<userFileManager.FileAsset> = await mgr.getPhotoAssets(fetchOptions);
  let fileAsset: userFileManager.FileAsset = await fetchResult.getFirstObject();
  if (fileAsset != undefined) {
    console.info('fileAsset.displayName : ' + fileAsset.displayName);
  }
  let onCallback1 = (changeData: userFileManager.ChangeData) => {
      console.info('onCallback1 success, changData: ' + JSON.stringify(changeData));
    // The image file has been changed. Go to the next step.
  }
  let onCallback2 = (changeData: userFileManager.ChangeData) => {
      console.info('onCallback2 success, changData: ' + JSON.stringify(changeData));
    // The image file has been changed. Go to the next step.
  }
  // Register onCallback1.
  mgr.on(fileAsset.uri, false, onCallback1);
  // Register onCallback2.
  mgr.on(fileAsset.uri, false, onCallback2);

  fileAsset.favorite(true, (err) => {
    if (err == undefined) {
      console.info('favorite successfully');
    } else {
      console.error('favorite failed with error:' + err);
    }
  });
}

```

## release

```TypeScript
release(callback: AsyncCallback<void>): void
```

Release UserFileManager instance

**Since:** 9

**Deprecated since:** 26.0.0

**Substitutes:** [release](../../apis-media-library-kit/arkts-apis/arkts-medialibrary-photoaccesshelper-i.md#release-1)

**System capability:** SystemCapability.FileManagement.UserFileManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void&gt; | Yes | No value returned |

**Example**

For details about how to create a userFileManager instance, see the example in [userFileManager.getUserFileMgr](#userfilemanagergetuserfilemgr).

```TypeScript
async function example(mgr: userFileManager.UserFileManager) {
  console.info('releaseDemo');
  mgr.release((err) => {
    if (err != undefined) {
      console.error('release failed. message = ', err);
    } else {
      console.info('release ok.');
    }
  });
}

```

## release

```TypeScript
release(): Promise<void>
```

Release UserFileManager instance

**Since:** 9

**Deprecated since:** 26.0.0

**Substitutes:** [release](../../apis-media-library-kit/arkts-apis/arkts-medialibrary-photoaccesshelper-i.md#release-1)

**System capability:** SystemCapability.FileManagement.UserFileManager.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Return promise |

**Example**

For details about how to create a userFileManager instance, see the example in [userFileManager.getUserFileMgr](#userfilemanagergetuserfilemgr).

```TypeScript
async function example(mgr: userFileManager.UserFileManager) {
  console.info('releaseDemo');
  try {
    await mgr.release();
    console.info('release ok.');
  } catch (err) {
    console.error('release failed. message = ', err);
  }
}

```

