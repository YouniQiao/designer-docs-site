# UserFileManager

Defines the UserFileManager class and provides functions to access the data in user file storage.

**起始版本：** 9

**废弃版本：** 26.0.0

**替代接口：** @ohos.file.photoAccessHelper:photoAccessHelper

**系统能力：** SystemCapability.FileManagement.UserFileManager.Core

**系统接口：** 此接口为系统接口。

## 导入模块

```TypeScript
import { userFileManager } from '@kit.CoreFileKit';
```

## createAlbum

```TypeScript
createAlbum(name: string, callback: AsyncCallback<Album>): void
```

Create a generic user album.

**起始版本：** 10

**废弃版本：** 26.0.0

**替代接口：** @ohos.file.photoAccessHelper:photoAccessHelper.MediaAlbumChangeRequest.createAlbumRequest

**需要权限：** 

 ohos.permission.WRITE_IMAGEVIDEO

**系统能力：** SystemCapability.FileManagement.UserFileManager.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| name | string | 是 | Album name to be created. |
| callback | AsyncCallback&lt;Album> | 是 | Returns the instance of newly created Album |

**示例：**

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

**起始版本：** 10

**废弃版本：** 26.0.0

**替代接口：** @ohos.file.photoAccessHelper:photoAccessHelper.MediaAlbumChangeRequest.createAlbumRequest

**需要权限：** 

 ohos.permission.WRITE_IMAGEVIDEO

**系统能力：** SystemCapability.FileManagement.UserFileManager.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| name | string | 是 | Album name to be created. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Album> | Returns the instance of newly created Album |

**示例：**

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

**起始版本：** 10

**废弃版本：** 26.0.0

**需要权限：** 

 ohos.permission.WRITE_AUDIO

**系统能力：** SystemCapability.FileManagement.UserFileManager.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| displayName | string | 是 | File name |
| callback | AsyncCallback&lt;FileAsset> | 是 | Callback used to return the FileAsset |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 13900020 | if type displayName is not string |
| 14000001 | if type displayName invalid |

**示例：**

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

**起始版本：** 10

**废弃版本：** 26.0.0

**替代接口：** @ohos.file.picker:picker.AudioViewPicker

**需要权限：** 

 ohos.permission.WRITE_AUDIO

**系统能力：** SystemCapability.FileManagement.UserFileManager.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| displayName | string | 是 | File name |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;FileAsset> | A Promise instance used to return the FileAsset |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 13900020 | if type displayName is not string |

**示例：**

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

**起始版本：** 9

**废弃版本：** 26.0.0

**替代接口：** @ohos.file.photoAccessHelper:photoAccessHelper.PhotoAccessHelper.createAsset

**需要权限：** 

 ohos.permission.WRITE_IMAGEVIDEO

**系统能力：** SystemCapability.FileManagement.UserFileManager.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| displayName | string | 是 | File name |
| albumUri | string | 是 | Asset will put into the album. |
| callback | AsyncCallback&lt;FileAsset> | 是 | Callback used to return the FileAsset |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 13900020 | if type displayName or albumUri is not string |
| 14000001 | if type displayName invalid |

**示例：**

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

**起始版本：** 9

**废弃版本：** 26.0.0

**替代接口：** @ohos.file.photoAccessHelper:photoAccessHelper.PhotoAccessHelper.createAsset

**需要权限：** 

 ohos.permission.WRITE_IMAGEVIDEO

**系统能力：** SystemCapability.FileManagement.UserFileManager.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| displayName | string | 是 | File name |
| callback | AsyncCallback&lt;FileAsset> | 是 | Callback used to return the FileAsset |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 13900020 | if type displayName is not string |
| 14000001 | if type displayName invalid |

**示例：**

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

**起始版本：** 9

**废弃版本：** 26.0.0

**替代接口：** @ohos.file.photoAccessHelper:photoAccessHelper.PhotoAccessHelper.createAsset

**需要权限：** 

 ohos.permission.WRITE_IMAGEVIDEO

**系统能力：** SystemCapability.FileManagement.UserFileManager.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| displayName | string | 是 | File name |
| albumUri | string | 否 | Album uri is optional, PhotoAssets will put into the default album without albumUri |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;FileAsset> | A Promise instance used to return the FileAsset |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 13900020 | if type displayName or albumUri is not string |

**示例：**

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

**起始版本：** 9

**废弃版本：** 26.0.0

**替代接口：** @ohos.file.photoAccessHelper:photoAccessHelper.PhotoAccessHelper.createAsset

**需要权限：** 

 ohos.permission.WRITE_IMAGEVIDEO

**系统能力：** SystemCapability.FileManagement.UserFileManager.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| displayName | string | 是 | File name |
| createOption | PhotoCreateOptions | 是 | Create operation |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;FileAsset> | A Promise instance used to return the FileAsset |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 13900020 | if type displayName is not string |

**示例：**

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

**起始版本：** 9

**废弃版本：** 26.0.0

**替代接口：** @ohos.file.photoAccessHelper:photoAccessHelper.PhotoAccessHelper.createAsset

**需要权限：** 

 ohos.permission.WRITE_IMAGEVIDEO

**系统能力：** SystemCapability.FileManagement.UserFileManager.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| displayName | string | 是 | File name |
| createOption | PhotoCreateOptions | 是 | Photo create operation |
| callback | AsyncCallback&lt;FileAsset> | 是 | Callback used to return the FileAsset |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 13900020 | if type displayName is not string |
| 14000001 | if type displayName invalid |

**示例：**

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

**起始版本：** 9

**废弃版本：** 26.0.0

**替代接口：** @ohos.file.photoAccessHelper:photoAccessHelper.MediaAssetChangeRequest.deleteAssets

**需要权限：** 

 ohos.permission.READ_IMAGEVIDEO and ohos.permission.WRITE_IMAGEVIDEO or ohos.permission.READ_AUDIO and ohos.permission.WRITE_AUDIO

**系统能力：** SystemCapability.FileManagement.UserFileManager.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| uri | string | 是 | Uri of FileAsset |
| callback | AsyncCallback&lt;void> | 是 | No value returned |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 13900020 | if type uri is not string |

**示例：**

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

**起始版本：** 9

**废弃版本：** 26.0.0

**替代接口：** @ohos.file.photoAccessHelper:photoAccessHelper.MediaAssetChangeRequest.deleteAssets

**需要权限：** 

 ohos.permission.READ_IMAGEVIDEO and ohos.permission.WRITE_IMAGEVIDEO or ohos.permission.READ_AUDIO and ohos.permission.WRITE_AUDIO

**系统能力：** SystemCapability.FileManagement.UserFileManager.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| uri | string | 是 | Uri of FileAsset |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | A Promise instance, no value returned |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 13900020 | if type uri is not string |

**示例：**

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

**起始版本：** 10

**废弃版本：** 26.0.0

**替代接口：** @ohos.file.photoAccessHelper:photoAccessHelper.MediaAlbumChangeRequest.deleteAlbums

**需要权限：** 

 ohos.permission.WRITE_IMAGEVIDEO

**系统能力：** SystemCapability.FileManagement.UserFileManager.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| albums | Array&lt;Album> | 是 | Specify which album to delete |
| callback | AsyncCallback&lt;void> | 是 | Returns void |

**示例：**

```TypeScript
import { dataSharePredicates } from '@kit.ArkData';

async function example(mgr: userFileManager.UserFileManager) {
  // 示例代码为删除相册名为newAlbumName的相册。
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

**起始版本：** 10

**废弃版本：** 26.0.0

**替代接口：** @ohos.file.photoAccessHelper:photoAccessHelper.MediaAlbumChangeRequest.deleteAlbums

**需要权限：** 

 ohos.permission.WRITE_IMAGEVIDEO

**系统能力：** SystemCapability.FileManagement.UserFileManager.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| albums | Array&lt;Album> | 是 | Specify which album to delete |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Returns the promise |

**示例：**

```TypeScript
import { dataSharePredicates } from '@kit.ArkData';
import { BusinessError } from '@kit.BasicServicesKit';

async function example(mgr: userFileManager.UserFileManager) {
  // 示例代码为删除相册名为newAlbumName的相册。
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

**起始版本：** 9

**废弃版本：** 26.0.0

**系统能力：** SystemCapability.FileManagement.UserFileManager.DistributedCore

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;Array&lt;PeerInfo>> | 是 | Callback return the list of the active peer devices' information |

**示例：**

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

**起始版本：** 9

**废弃版本：** 26.0.0

**系统能力：** SystemCapability.FileManagement.UserFileManager.DistributedCore

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Array&lt;PeerInfo>> | Promise used to return the list of the active peer devices' information |

**示例：**

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

**起始版本：** 10

**废弃版本：** 26.0.0

**替代接口：** @ohos.file.photoAccessHelper:photoAccessHelper.photoAccessHelper.getAlbums

**需要权限：** 

 ohos.permission.READ_IMAGEVIDEO

**系统能力：** SystemCapability.FileManagement.UserFileManager.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | AlbumType | 是 | Album type. |
| subType | AlbumSubType | 是 | Album subtype. |
| options | FetchOptions | 是 | options to fetch albums |
| callback | AsyncCallback&lt;FetchResult&lt;Album>> | 是 | Returns the fetch result of the albums |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 13900020 | if type options is not FetchOption |

**示例：**

```TypeScript
import { dataSharePredicates } from '@kit.ArkData';

async function example(mgr: userFileManager.UserFileManager) {
  // 示例代码中为获取相册名为newAlbumName的相册。
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

**起始版本：** 10

**废弃版本：** 26.0.0

**替代接口：** @ohos.file.photoAccessHelper:photoAccessHelper.photoAccessHelper.getAlbums

**需要权限：** 

 ohos.permission.READ_IMAGEVIDEO

**系统能力：** SystemCapability.FileManagement.UserFileManager.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | AlbumType | 是 | Album type. |
| subType | AlbumSubType | 是 | Album subtype. |
| callback | AsyncCallback&lt;FetchResult&lt;Album>> | 是 | Returns the fetch result of the albums |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 13900020 | if type options is not FetchOption |

**示例：**

```TypeScript
async function example(mgr: userFileManager.UserFileManager) {
  // 示例代码中为获取统相册VIDEO，默认已预置。
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

**起始版本：** 10

**废弃版本：** 26.0.0

**替代接口：** @ohos.file.photoAccessHelper:photoAccessHelper.photoAccessHelper.getAlbums

**需要权限：** 

 ohos.permission.READ_IMAGEVIDEO

**系统能力：** SystemCapability.FileManagement.UserFileManager.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | AlbumType | 是 | Album type. |
| subType | AlbumSubType | 是 | Album subtype. |
| options | FetchOptions | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;FetchResult&lt;Album>> | - Returns the fetch result of the albums |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 13900020 | if type options is not FetchOption |

**示例：**

```TypeScript
import { dataSharePredicates } from '@kit.ArkData';
import { BusinessError } from '@kit.BasicServicesKit';

async function example(mgr: userFileManager.UserFileManager) {
  // 示例代码中为获取相册名为newAlbumName的相册。
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

**起始版本：** 9

**废弃版本：** 26.0.0

**系统能力：** SystemCapability.FileManagement.UserFileManager.DistributedCore

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;Array&lt;PeerInfo>> | 是 | Callback return the list of the all the peer devices' information |

**示例：**

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

**起始版本：** 9

**废弃版本：** 26.0.0

**系统能力：** SystemCapability.FileManagement.UserFileManager.DistributedCore

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Array&lt;PeerInfo>> | Promise used to return the list of the all the peer devices' information |

**示例：**

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

**起始版本：** 9

**废弃版本：** 26.0.0

**替代接口：** @ohos.file.picker:picker.AudioViewPicker

**需要权限：** 

 ohos.permission.READ_AUDIO

**系统能力：** SystemCapability.FileManagement.UserFileManager.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| options | FetchOptions | 是 | Retrieval options. |
| callback | AsyncCallback&lt;FetchResult&lt;FileAsset>> | 是 | Callback return the FetchResult. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 13900020 | if type options is not FetchOptions |

**示例：**

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

**起始版本：** 9

**废弃版本：** 26.0.0

**替代接口：** @ohos.file.picker:picker.AudioViewPicker

**需要权限：** 

 ohos.permission.READ_AUDIO

**系统能力：** SystemCapability.FileManagement.UserFileManager.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| options | FetchOptions | 是 | Retrieval options. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;FetchResult&lt;FileAsset>> | A promise instance used to return the files in the format of a FetchResult instance |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 13900020 | if type options is not FetchOptions |

**示例：**

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

**起始版本：** 9

**废弃版本：** 26.0.0

**替代接口：** @ohos.file.photoAccessHelper:photoAccessHelper.PhotoAccessHelper.getAlbums

**需要权限：** 

 ohos.permission.READ_IMAGEVIDEO

**系统能力：** SystemCapability.FileManagement.UserFileManager.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| options | AlbumFetchOptions | 是 | Retrieval options. |
| callback | AsyncCallback&lt;FetchResult&lt;Album>> | 是 | Callback used to return an album array. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 13900020 | if type options is not AlbumFetchOptions |

**示例：**

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

**起始版本：** 9

**废弃版本：** 26.0.0

**替代接口：** @ohos.file.photoAccessHelper:photoAccessHelper.PhotoAccessHelper.getAlbums

**需要权限：** 

 ohos.permission.READ_IMAGEVIDEO

**系统能力：** SystemCapability.FileManagement.UserFileManager.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| options | AlbumFetchOptions | 是 | Retrieval options. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;FetchResult&lt;Album>> | A Promise instance used to return an album array. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 13900020 | if type options is not AlbumFetchOptions |

**示例：**

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

**起始版本：** 9

**废弃版本：** 26.0.0

**替代接口：** @ohos.file.photoAccessHelper:photoAccessHelper.PhotoAccessHelper.getAssets

**需要权限：** 

 ohos.permission.READ_IMAGEVIDEO

**系统能力：** SystemCapability.FileManagement.UserFileManager.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| options | FetchOptions | 是 | retrieval options. |
| callback | AsyncCallback&lt;FetchResult&lt;FileAsset>> | 是 | Callback return the FetchResult. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 13900020 | if type options is not FetchOptions |

**示例：**

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

**起始版本：** 9

**废弃版本：** 26.0.0

**替代接口：** @ohos.file.photoAccessHelper:photoAccessHelper.PhotoAccessHelper.getAssets

**需要权限：** 

 ohos.permission.READ_IMAGEVIDEO

**系统能力：** SystemCapability.FileManagement.UserFileManager.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| options | FetchOptions | 是 | Retrieval options. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;FetchResult&lt;FileAsset>> | A promise instance used to return the files in the format of a FetchResult instance |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 13900020 | if type options is not FetchOptions |

**示例：**

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

**起始版本：** 10

**废弃版本：** 26.0.0

**替代接口：** @ohos.file.photoAccessHelper:photoAccessHelper.MediaAssetChangeRequest.getPhotoIndex

**需要权限：** 

 ohos.permission.READ_IMAGEVIDEO

**系统能力：** SystemCapability.FileManagement.UserFileManager.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| photoUri | string | 是 | The photo asset uri. |
| albumUri | string | 是 | The album uri. |
| options | FetchOptions | 是 | fetch options |
| callback | AsyncCallback&lt;number> | 是 | Returns the index of the asset in the album |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

**示例：**

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
    // 获取相册的uri。
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
    // 获取第二个文件的uri。
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

**起始版本：** 10

**废弃版本：** 26.0.0

**替代接口：** @ohos.file.photoAccessHelper:photoAccessHelper.PhotoAccessHelper.getPhotoIndex

**需要权限：** 

 ohos.permission.READ_IMAGEVIDEO

**系统能力：** SystemCapability.FileManagement.UserFileManager.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| photoUri | string | 是 | The photo asset uri. |
| albumUri | string | 是 | The album uri. |
| options | FetchOptions | 是 | fetch options |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;number> | - Returns the index of the asset in the album |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

**示例：**

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
    // 获取相册的uri。
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
    // 获取第二个文件的uri。
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

**起始版本：** 9

**废弃版本：** 26.0.0

**替代接口：** @ohos.file.photoAccessHelper:photoAccessHelper.photoAccessHelper.getAlbums

**需要权限：** 

 ohos.permission.READ_IMAGEVIDEO

**系统能力：** SystemCapability.FileManagement.UserFileManager.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | PrivateAlbumType | 是 | Private album type |
| callback | AsyncCallback&lt;FetchResult&lt;PrivateAlbum>> | 是 | Used to return a private album FetchResult. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 13900020 | if type type is not PrivateAlbumType |

**示例：**

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

**起始版本：** 9

**废弃版本：** 26.0.0

**替代接口：** @ohos.file.photoAccessHelper:photoAccessHelper.photoAccessHelper.getAlbums

**需要权限：** 

 ohos.permission.READ_IMAGEVIDEO

**系统能力：** SystemCapability.FileManagement.UserFileManager.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | PrivateAlbumType | 是 | Private album type |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;FetchResult&lt;PrivateAlbum>> | A Promise instance used to return a private album FetchResult. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 13900020 | if type type is not PrivateAlbumType |

**示例：**

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

## off(ChangeEvent)

```TypeScript
off(type: ChangeEvent, callback?: Callback<void>): void
```

Turn off monitor the data changes

**起始版本：** 9

**废弃版本：** 26.0.0

**替代接口：** @ohos.file.photoAccessHelper:photoAccessHelper.PhotoAccessHelper.off

**系统能力：** SystemCapability.FileManagement.UserFileManager.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | ChangeEvent | 是 | One of 'deviceChange','albumChange','imageChange','audioChange','videoChange','remoteFileChange' |
| callback | Callback&lt;void> | 否 | No value returned |

**示例：**

```TypeScript
async function example(mgr: userFileManager.UserFileManager) {
  console.info('offDemo');
  let count = 0;
  mgr.on('imageChange', () => {
    count++;
    // 图像文件已更改，请执行操作。
  });

  mgr.off('imageChange', () => {
    // 停止监听成功。
  });

  try {
    let testFileName: string = 'testFile' + Date.now() + '.jpg';
    let fileAsset: userFileManager.FileAsset = await mgr.createPhotoAsset(testFileName);
    console.info('createPhotoAsset file displayName' + fileAsset.displayName);
    console.info('createPhotoAsset successfully');
  } catch (err) {
    console.error('createPhotoAsset failed, message = ' + err);
  }
  // 睡眠一秒。
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

**起始版本：** 10

**废弃版本：** 26.0.0

**替代接口：** @ohos.file.photoAccessHelper:photoAccessHelper.PhotoAccessHelper.unRegisterChange

**系统能力：** SystemCapability.FileManagement.UserFileManager.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| uri | string | 是 | FileAsset's uri, Album's uri or DefaultChangeUri value |
| callback | Callback&lt;ChangeData> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 13900020 | if parameter is invalid |

**示例：**

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
    // 注册onCallback1监听。
    mgr.on(fileAsset.uri, false, onCallback1);
    // 注册onCallback2监听。
    mgr.on(fileAsset.uri, false, onCallback2);
    // 关闭onCallback1监听，onCallback2 继续监听。
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

## on(ChangeEvent)

```TypeScript
on(type: ChangeEvent, callback: Callback<void>): void
```

Turn on monitor the data changes

**起始版本：** 9

**废弃版本：** 26.0.0

**替代接口：** @ohos.file.photoAccessHelper:photoAccessHelper.PhotoAccessHelper.on

**系统能力：** SystemCapability.FileManagement.UserFileManager.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | ChangeEvent | 是 | One of 'deviceChange','albumChange','imageChange','audioChange','videoChange','remoteFileChange' |
| callback | Callback&lt;void> | 是 | No value returned |

**示例：**

```TypeScript
async function example(mgr: userFileManager.UserFileManager) {
  console.info('onDemo');
  let count = 0;
  mgr.on('imageChange', () => {
    count++;
    // 图像文件已更改，请执行操作。
  });
  try {
    let testFileName: string = 'testFile' + Date.now() + '.jpg';
    let fileAsset: userFileManager.FileAsset = await mgr.createPhotoAsset(testFileName);
    console.info('createPhotoAsset file displayName' + fileAsset.displayName);
    console.info('createPhotoAsset successfully');
  } catch (err) {
    console.error('createPhotoAsset failed, message = ' + err);
  }
  // 睡眠一秒。
  if (count > 0) {
    console.info('onDemo success');
  } else {
    console.error('onDemo fail');
  }
  mgr.off('imageChange', () => {
    // 停止监听成功。
  });
}

```

## on

```TypeScript
on(uri: string, forSubUri: boolean, callback: Callback<ChangeData>): void
```

Turn on monitor for the specified uri.

**起始版本：** 10

**废弃版本：** 26.0.0

**替代接口：** @ohos.file.photoAccessHelper:photoAccessHelper.PhotoAccessHelper.registerChange

**系统能力：** SystemCapability.FileManagement.UserFileManager.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| uri | string | 是 | FileAsset's uri, album's uri or DefaultChangeUri |
| forSubUri | boolean | 是 | Monitor the sub uri. |
| callback | Callback&lt;ChangeData> | 是 | callback function, return the ChangeData to be monitored |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 13900020 | if parameter is invalid |

**示例：**

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
    // 图像文件已更改，请执行操作。
  }
  let onCallback2 = (changeData: userFileManager.ChangeData) => {
      console.info('onCallback2 success, changData: ' + JSON.stringify(changeData));
    // 图像文件已更改，请执行操作。
  }
  // 注册onCallback1监听。
  mgr.on(fileAsset.uri, false, onCallback1);
  // 注册onCallback2监听。
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

**起始版本：** 9

**废弃版本：** 26.0.0

**替代接口：** @ohos.file.photoAccessHelper:photoAccessHelper.PhotoAccessHelper.release

**系统能力：** SystemCapability.FileManagement.UserFileManager.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | 是 | No value returned |

**示例：**

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

**起始版本：** 9

**废弃版本：** 26.0.0

**替代接口：** @ohos.file.photoAccessHelper:photoAccessHelper.PhotoAccessHelper.release

**系统能力：** SystemCapability.FileManagement.UserFileManager.Core

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Return promise |

**示例：**

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

