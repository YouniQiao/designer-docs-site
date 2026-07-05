# FileAsset

Provides methods to encapsulate file attributes.

**Since:** 9

**Deprecated since:** 26.0.0

**Substitute:** @ohos.file.photoAccessHelper:photoAccessHelper.PhotoAsset

**System capability:** SystemCapability.FileManagement.UserFileManager.Core

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { userFileManager } from '@kit.CoreFileKit';
```

## close

```TypeScript
close(fd: number, callback: AsyncCallback<void>): void
```

Close the file is located.

**Since:** 9

**Deprecated since:** 26.0.0

**Substitute:** @ohos.file.fs:fileIo.close

**System capability:** SystemCapability.FileManagement.UserFileManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| fd | number | Yes | Fd of the file which had been opened |
| callback | AsyncCallback&lt;void> | Yes | No value will be returned. |

**Example**

```TypeScript
import { dataSharePredicates } from '@kit.ArkData';

async function example(mgr: userFileManager.UserFileManager) {
  console.info('closeDemo');
  try {
    let predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();
    let fetchOption: userFileManager.FetchOptions = {
      fetchColumns: [],
      predicates: predicates
    };
    let fetchResult: userFileManager.FetchResult<userFileManager.FileAsset> = await mgr.getPhotoAssets(fetchOption);
    const fileAsset: userFileManager.FileAsset = await fetchResult.getFirstObject();
    let fd: number = await fileAsset.open('rw');
    console.info('file fd', fd);
    fileAsset.close(fd, (err) => {
      if (err == undefined) {
        console.info('asset close succeed.');
      } else {
        console.error('close failed, message = ' + err);
      }
    });
  } catch (err) {
    console.error('close failed, message = ' + err);
  }
}

```

## close

```TypeScript
close(fd: number): Promise<void>
```

Close the file is located.

**Since:** 9

**Deprecated since:** 26.0.0

**Substitute:** @ohos.file.fs:fileIo.close

**System capability:** SystemCapability.FileManagement.UserFileManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| fd | number | Yes | Fd of the file which had been opened |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Return promise |

**Example**

```TypeScript
import { dataSharePredicates } from '@kit.ArkData';

async function example(mgr: userFileManager.UserFileManager) {
  console.info('closeDemo');
  try {
    let predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();
    let fetchOption: userFileManager.FetchOptions = {
      fetchColumns: [],
      predicates: predicates
    };
    let fetchResult: userFileManager.FetchResult<userFileManager.FileAsset> = await mgr.getPhotoAssets(fetchOption);
    const asset: userFileManager.FileAsset = await fetchResult.getFirstObject();
    let fd: number = await asset.open('rw');
    console.info('file fd', fd);
    await asset.close(fd);
    console.info('asset close succeed.');
  } catch (err) {
    console.error('close failed, message = ' + err);
  }
}

```

## commitModify

```TypeScript
commitModify(callback: AsyncCallback<void>): void
```

Modify meta data where the file is located.

**Since:** 9

**Deprecated since:** 26.0.0

**Substitute:** @ohos.file.photoAccessHelper:photoAccessHelper.PhotoAsset.commitModify

**Required permissions:** 

 ohos.permission.WRITE_IMAGEVIDEO or ohos.permission.WRITE_AUDIO

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
  console.info('commitModifyDemo');
  let predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();
  let fetchOption: userFileManager.FetchOptions = {
    fetchColumns: [],
    predicates: predicates
  };
  let fetchResult: userFileManager.FetchResult<userFileManager.FileAsset> = await mgr.getPhotoAssets(fetchOption);
  let fileAsset: userFileManager.FileAsset = await fetchResult.getFirstObject();
  let displayName: string = userFileManager.ImageVideoKey.DISPLAY_NAME.toString();
  let fileAssetDisplayName: userFileManager.MemberType = fileAsset.get(displayName);
  console.info('fileAsset get fileAssetDisplayName = ', fileAssetDisplayName);
  let newFileAssetDisplayName = 'new' + fileAssetDisplayName;
  console.info('fileAsset newFileAssetDisplayName = ', newFileAssetDisplayName);
  fileAsset.set(displayName, newFileAssetDisplayName);
  fileAsset.commitModify((err) => {
    if (err == undefined) {
      let commitModifyDisplayName = fileAsset.get(displayName);
      console.info('fileAsset commitModify successfully, commitModifyDisplayName = ', commitModifyDisplayName);
    } else {
      console.error('commitModify failed, message =', err);
    }
  });
}

```

## commitModify

```TypeScript
commitModify(): Promise<void>
```

Modify meta data where the file is located.

**Since:** 9

**Deprecated since:** 26.0.0

**Substitute:** @ohos.file.photoAccessHelper:photoAccessHelper.PhotoAsset.commitModify

**Required permissions:** 

 ohos.permission.WRITE_IMAGEVIDEO or ohos.permission.WRITE_AUDIO

**System capability:** SystemCapability.FileManagement.UserFileManager.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Return promise |

**Example**

```TypeScript
import { dataSharePredicates } from '@kit.ArkData';

async function example(mgr: userFileManager.UserFileManager) {
  console.info('commitModifyDemo');
  let predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();
  let fetchOption: userFileManager.FetchOptions = {
    fetchColumns: [],
    predicates: predicates
  };
  let fetchResult: userFileManager.FetchResult<userFileManager.FileAsset> = await mgr.getPhotoAssets(fetchOption);
  let fileAsset: userFileManager.FileAsset = await fetchResult.getFirstObject();
  let displayName = userFileManager.ImageVideoKey.DISPLAY_NAME.toString();
  let fileAssetDisplayName: userFileManager.MemberType = fileAsset.get(displayName);
  console.info('fileAsset get fileAssetDisplayName = ', fileAssetDisplayName);
  let newFileAssetDisplayName = 'new' + fileAssetDisplayName;
  console.info('fileAsset newFileAssetDisplayName = ', newFileAssetDisplayName);
  fileAsset.set(displayName, newFileAssetDisplayName);
  try {
    await fileAsset.commitModify();
    let commitModifyDisplayName = fileAsset.get(displayName);
    console.info('fileAsset commitModify successfully, commitModifyDisplayName = ', commitModifyDisplayName);
  } catch (err) {
    console.error('commitModify failed. message = ', err);
  }
}

```

## favorite

```TypeScript
favorite(isFavorite: boolean, callback: AsyncCallback<void>): void
```

Set favorite for the file when the file is located.

**Since:** 9

**Deprecated since:** 26.0.0

**Substitute:** @ohos.file.photoAccessHelper:photoAccessHelper.MediaAssetChangeRequest#setFavorite

**Required permissions:** 

 ohos.permission.WRITE_IMAGEVIDEO or ohos.permission.WRITE_AUDIO

**System capability:** SystemCapability.FileManagement.UserFileManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| isFavorite | boolean | Yes | True is favorite file, false is not favorite file |
| callback | AsyncCallback&lt;void> | Yes | Callback used to return, No value is returned. |

**Example**

```TypeScript
import { dataSharePredicates } from '@kit.ArkData';

async function example(mgr: userFileManager.UserFileManager) {
  console.info('favoriteDemo');
  let predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();
  let fetchOption: userFileManager.FetchOptions = {
    fetchColumns: [],
    predicates: predicates
  };
  let fetchResult: userFileManager.FetchResult<userFileManager.FileAsset> = await mgr.getPhotoAssets(fetchOption);
  const asset: userFileManager.FileAsset = await fetchResult.getFirstObject();
  asset.favorite(true, (err) => {
    if (err == undefined) {
      console.info('favorite successfully');
    } else {
      console.error('favorite failed with error:' + err);
    }
  });
}

```

## favorite

```TypeScript
favorite(isFavorite: boolean): Promise<void>
```

Set favorite for the file when the file is located.

**Since:** 9

**Deprecated since:** 26.0.0

**Substitute:** @ohos.file.photoAccessHelper:photoAccessHelper.MediaAssetChangeRequest#setFavorite

**Required permissions:** 

 ohos.permission.WRITE_IMAGEVIDEO or ohos.permission.WRITE_AUDIO

**System capability:** SystemCapability.FileManagement.UserFileManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| isFavorite | boolean | Yes | isFavorite True is favorite file, false is not favorite file |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Return promise |

**Example**

```TypeScript
import { dataSharePredicates } from '@kit.ArkData';
import { BusinessError } from '@kit.BasicServicesKit';

async function example(mgr: userFileManager.UserFileManager) {
  console.info('favoriteDemo');
  let predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();
  let fetchOption: userFileManager.FetchOptions = {
    fetchColumns: [],
    predicates: predicates
  };
  let fetchResult: userFileManager.FetchResult<userFileManager.FileAsset> = await mgr.getPhotoAssets(fetchOption);
  const asset: userFileManager.FileAsset = await fetchResult.getFirstObject();
  asset.favorite(true).then(() => {
    console.info('favorite successfully');
  }).catch((err: BusinessError) => {
    console.error('favorite failed with error:' + err);
  });
}

```

## get

```TypeScript
get(member: string): MemberType
```

Return the fileAsset member parameter.

**Since:** 9

**Deprecated since:** 26.0.0

**Substitute:** @ohos.file.photoAccessHelper:photoAccessHelper.PhotoAsset.get

**System capability:** SystemCapability.FileManagement.UserFileManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| member | string | Yes | The name of the parameter. for example : get(ImageVideoKey.URI) |

**Return value:**

| Type | Description |
| --- | --- |
| MemberType |  |

**Example**

```TypeScript
import { dataSharePredicates } from '@kit.ArkData';

async function example(mgr: userFileManager.UserFileManager) {
  console.info('fileAssetGetDemo');
  try {
    let predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();
    let fetchOption: userFileManager.FetchOptions = {
      fetchColumns: ['title'],
      predicates: predicates
    };
    let fetchResult: userFileManager.FetchResult<userFileManager.FileAsset> = await mgr.getPhotoAssets(fetchOption);
    let fileAsset: userFileManager.FileAsset = await fetchResult.getFirstObject();
    let title: userFileManager.ImageVideoKey = userFileManager.ImageVideoKey.TITLE;
    let fileAssetTitle: userFileManager.MemberType = fileAsset.get(title.toString());
    console.info('fileAsset Get fileAssetTitle = ', fileAssetTitle);
  } catch (err) {
    console.error('release failed. message = ', err);
  }
}

```

## getExif

```TypeScript
getExif(callback: AsyncCallback<string>): void
```

Get exif info of the asset.

**Since:** 10

**Deprecated since:** 26.0.0

**Substitute:** @ohos.file.photoAccessHelper:photoAccessHelper.PhotoAsset.getExif

**Required permissions:** 

 ohos.permission.READ_IMAGEVIDEO

**System capability:** SystemCapability.FileManagement.UserFileManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;string> | Yes | Returns exif info into a json string |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Called by non-system application. |

**Example**

```TypeScript
import { dataSharePredicates } from '@kit.ArkData';

async function example(mgr: userFileManager.UserFileManager) {
  try {
    console.info('getExifDemo');
    let predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();
    predicates.isNotNull('all_exif')
    let fetchOptions: userFileManager.FetchOptions = {
      fetchColumns: ['all_exif', userFileManager.ImageVideoKey.USER_COMMENT.toString()],
      predicates: predicates
    };
    let fetchResult: userFileManager.FetchResult<userFileManager.FileAsset> = await mgr.getPhotoAssets(fetchOptions);
    let fileAsset: userFileManager.FileAsset = await fetchResult.getFirstObject();
    if (fileAsset === undefined) {
      console.error('getExif fileAsset is undefined');
      fetchResult.close();
      return;
    }
    console.info('getExifDemo fileAsset displayName: ' + JSON.stringify(fileAsset.displayName));
    let userCommentKey: string = 'UserComment';
    fileAsset.getExif((err, exifMessage) => {
      if (exifMessage != undefined) {
        let userComment: string = JSON.stringify(JSON.parse(exifMessage), [userCommentKey]);
        console.info('getExifDemo userComment: ' + JSON.stringify(userComment));
      } else {
        console.error('getExif failed, message = ', err);
      }
    });
    fetchResult.close();
  } catch (err) {
    console.error('getExifDemoCallback failed with error: ' + err);
  }
}

```

## getExif

```TypeScript
getExif(): Promise<string>
```

Get exif info of the asset.

**Since:** 10

**Deprecated since:** 26.0.0

**Substitute:** @ohos.file.photoAccessHelper:photoAccessHelper.PhotoAsset.getExif

**Required permissions:** 

 ohos.permission.READ_IMAGEVIDEO

**System capability:** SystemCapability.FileManagement.UserFileManager.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;string> | Returns exif info into a json string |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Called by non-system application. |

**Example**

```TypeScript
import { dataSharePredicates } from '@kit.ArkData';

async function example(mgr: userFileManager.UserFileManager) {
  try {
    console.info('getExifDemo');
    let predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();
    predicates.isNotNull('all_exif')
    let fetchOptions: userFileManager.FetchOptions = {
      fetchColumns: ['all_exif', userFileManager.ImageVideoKey.USER_COMMENT.toString()],
      predicates: predicates
    };
    let fetchResult: userFileManager.FetchResult<userFileManager.FileAsset> = await mgr.getPhotoAssets(fetchOptions);
    let fileAsset: userFileManager.FileAsset = await fetchResult.getFirstObject();
    console.info('getExifDemo fileAsset displayName: ' + JSON.stringify(fileAsset.displayName));
    let exifMessage: string = await fileAsset.getExif();
    let userCommentKey: string = 'UserComment';
    let userComment: string = JSON.stringify(JSON.parse(exifMessage), [userCommentKey]);
    console.info('getExifDemo userComment: ' + JSON.stringify(userComment));
    fetchResult.close();
  } catch (err) {
    console.error('getExifDemoCallback failed with error: ' + err);
  }
}

```

## getThumbnail

```TypeScript
getThumbnail(callback: AsyncCallback<image.PixelMap>): void
```

Get thumbnail of the file when the file is located.

**Since:** 9

**Deprecated since:** 26.0.0

**Substitute:** @ohos.file.photoAccessHelper:photoAccessHelper.PhotoAsset.getThumbnail

**Required permissions:** 

 ohos.permission.READ_IMAGEVIDEO or ohos.permission.READ_AUDIO

**System capability:** SystemCapability.FileManagement.UserFileManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;image.PixelMap> | Yes | Callback used to return the thumbnail's pixelMap. |

**Example**

```TypeScript
import { dataSharePredicates } from '@kit.ArkData';

async function example(mgr: userFileManager.UserFileManager) {
  console.info('getThumbnailDemo');
  let predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();
  let fetchOption: userFileManager.FetchOptions = {
    fetchColumns: [],
    predicates: predicates
  };
  let fetchResult: userFileManager.FetchResult<userFileManager.FileAsset> = await mgr.getPhotoAssets(fetchOption);
  let asset: userFileManager.FileAsset = await fetchResult.getFirstObject();
  console.info('asset displayName = ', asset.displayName);
  asset.getThumbnail((err, pixelMap) => {
    if (err == undefined) {
      console.info('getThumbnail successful ' + pixelMap);
    } else {
      console.error('getThumbnail fail', err);
    }
  });
}

```

## getThumbnail

```TypeScript
getThumbnail(size: image.Size, callback: AsyncCallback<image.PixelMap>): void
```

Get thumbnail of the file when the file is located.

**Since:** 9

**Deprecated since:** 26.0.0

**Substitute:** @ohos.file.photoAccessHelper:photoAccessHelper.PhotoAsset.getThumbnail

**Required permissions:** 

 ohos.permission.READ_IMAGEVIDEO or ohos.permission.READ_AUDIO

**System capability:** SystemCapability.FileManagement.UserFileManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| size | image.Size | Yes | Thumbnail's size |
| callback | AsyncCallback&lt;image.PixelMap> | Yes | Callback used to return the thumbnail's pixelMap. |

**Example**

```TypeScript
import { dataSharePredicates } from '@kit.ArkData';
import { image } from '@kit.ImageKit';

async function example(mgr: userFileManager.UserFileManager) {
  console.info('getThumbnailDemo');
  let predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();
  let fetchOption: userFileManager.FetchOptions = {
    fetchColumns: [],
    predicates: predicates
  };
  let size: image.Size = { width: 720, height: 720 };
  let fetchResult: userFileManager.FetchResult<userFileManager.FileAsset> = await mgr.getPhotoAssets(fetchOption);
  const asset: userFileManager.FileAsset = await fetchResult.getFirstObject();
  console.info('asset displayName = ', asset.displayName);
  asset.getThumbnail(size, (err, pixelMap) => {
    if (err == undefined) {
      console.info('getThumbnail successful ' + pixelMap);
    } else {
      console.error('getThumbnail fail', err);
    }
  });
}

```

## getThumbnail

```TypeScript
getThumbnail(size?: image.Size): Promise<image.PixelMap>
```

Get thumbnail of the file when the file is located.

**Since:** 9

**Deprecated since:** 26.0.0

**Substitute:** @ohos.file.photoAccessHelper:photoAccessHelper.PhotoAsset.getThumbnail

**Required permissions:** 

 ohos.permission.READ_IMAGEVIDEO or ohos.permission.READ_AUDIO

**System capability:** SystemCapability.FileManagement.UserFileManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| size | image.Size | No | Thumbnail's size |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;image.PixelMap> | Return promise |

**Example**

```TypeScript
import { dataSharePredicates } from '@kit.ArkData';
import { image } from '@kit.ImageKit';
import { BusinessError } from '@kit.BasicServicesKit';

async function example(mgr: userFileManager.UserFileManager) {
  console.info('getThumbnailDemo');
  let predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();
  let fetchOption: userFileManager.FetchOptions = {
    fetchColumns: [],
    predicates: predicates
  };
  let size: image.Size = { width: 720, height: 720 };
  let fetchResult: userFileManager.FetchResult<userFileManager.FileAsset> = await mgr.getPhotoAssets(fetchOption);
  const asset: userFileManager.FileAsset = await fetchResult.getFirstObject();
  console.info('asset displayName = ', asset.displayName);
  asset.getThumbnail(size).then((pixelMap) => {
    console.info('getThumbnail successful ' + pixelMap);
  }).catch((err: BusinessError) => {
    console.error('getThumbnail fail' + err);
  });
}

```

## open

```TypeScript
open(mode: string, callback: AsyncCallback<number>): void
```

Open local file.

**Since:** 9

**Deprecated since:** 26.0.0

**Substitute:** @ohos.file.fs:fileIo.open

**Required permissions:** 

 ohos.permission.READ_IMAGEVIDEO or ohos.permission.READ_AUDIO or ohos.permission.WRITE_IMAGEVIDEO or ohos.permission.WRITE_AUDIO

**System capability:** SystemCapability.FileManagement.UserFileManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mode | string | Yes | Mode for open, for example: rw, r, w. |
| callback | AsyncCallback&lt;number> | Yes | Callback return the fd of the file. |

**Example**

```TypeScript
async function example(mgr: userFileManager.UserFileManager) {
  console.info('openDemo');
   let testFileName: string = 'testFile' + Date.now() + '.jpg';
  const fileAsset: userFileManager.FileAsset = await mgr.createPhotoAsset(testFileName);
  fileAsset.open('rw', (err, fd) => {
    if (fd != undefined) {
      console.info('File fd' + fd);
      fileAsset.close(fd);
    } else {
      console.error('File err' + err);
    }
  });
}

```

## open

```TypeScript
open(mode: string): Promise<number>
```

Open local file.

**Since:** 9

**Deprecated since:** 26.0.0

**Substitute:** @ohos.file.fs:fileIo.open

**Required permissions:** 

 ohos.permission.READ_IMAGEVIDEO or ohos.permission.READ_AUDIO or ohos.permission.WRITE_IMAGEVIDEO or ohos.permission.WRITE_AUDIO

**System capability:** SystemCapability.FileManagement.UserFileManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mode | string | Yes | Mode for open, for example: rw, r, w. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;number> | Return promise |

**Example**

```TypeScript
async function example(mgr: userFileManager.UserFileManager) {
  console.info('openDemo');
  try {
    let testFileName: string = 'testFile' + Date.now() + '.jpg';
    const fileAsset: userFileManager.FileAsset = await mgr.createPhotoAsset(testFileName);
    let fd: number = await fileAsset.open('rw');
    if (fd != undefined) {
      console.info('File fd' + fd);
      fileAsset.close(fd);
    } else {
      console.error(' open File fail');
    }
  } catch (err) {
    console.error('open Demo err' + err);
  }
}

```

## set

```TypeScript
set(member: string, value: string): void
```

Set the fileAsset member parameter.

**Since:** 9

**Deprecated since:** 26.0.0

**Substitute:** @ohos.file.photoAccessHelper:photoAccessHelper.PhotoAsset.set

**System capability:** SystemCapability.FileManagement.UserFileManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| member | string | Yes | The name of the parameter |
| value | string | Yes | The value of the parameter. |

**Example**

```TypeScript
import { dataSharePredicates } from '@kit.ArkData';

async function example(mgr: userFileManager.UserFileManager) {
  console.info('fileAssetSetDemo');
  try {
    let predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();
    let fetchOption: userFileManager.FetchOptions = {
      fetchColumns: [],
      predicates: predicates
    };
    let fetchResult: userFileManager.FetchResult<userFileManager.FileAsset> = await mgr.getPhotoAssets(fetchOption);
    let fileAsset: userFileManager.FileAsset = await fetchResult.getFirstObject();
    let displayName: string = userFileManager.ImageVideoKey.DISPLAY_NAME.toString();
    fileAsset.set(displayName, 'newDisplayName1');
  } catch (err) {
    console.error('release failed. message = ', err);
  }
}

```

## setHidden

```TypeScript
setHidden(hiddenState: boolean, callback: AsyncCallback<void>): void
```

Set file hidden state.

**Since:** 10

**Deprecated since:** 26.0.0

**Substitute:** @ohos.file.photoAccessHelper:photoAccessHelper.MediaAssetChangeRequest#setHidden

**Required permissions:** 

 ohos.permission.WRITE_IMAGEVIDEO

**System capability:** SystemCapability.FileManagement.UserFileManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| hiddenState | boolean | Yes | true: Put the asset into hidden album; false: Recover the asset from hidden album. |
| callback | AsyncCallback&lt;void> | Yes | Return void. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Called by non-system application. |
| 13900020 | if parameter is invalid |

**Example**

```TypeScript
import { dataSharePredicates } from '@kit.ArkData';

async function example(mgr: userFileManager.UserFileManager) {
  console.info('setHiddenDemo');
  let predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();
  let fetchOption: userFileManager.FetchOptions = {
    fetchColumns: [],
    predicates: predicates
  };
  let fetchResult: userFileManager.FetchResult<userFileManager.FileAsset> = await mgr.getPhotoAssets(fetchOption);
  const asset: userFileManager.FileAsset = await fetchResult.getFirstObject();
  asset.setHidden(true, (err) => {
    if (err == undefined) {
      console.info('setHidden successfully');
    } else {
      console.error('setHidden failed with error:' + err);
    }
  });
}

```

## setHidden

```TypeScript
setHidden(hiddenState: boolean): Promise<void>
```

Set file hidden state.

**Since:** 10

**Deprecated since:** 26.0.0

**Substitute:** @ohos.file.photoAccessHelper:photoAccessHelper.MediaAssetChangeRequest#setHidden

**Required permissions:** 

 ohos.permission.WRITE_IMAGEVIDEO

**System capability:** SystemCapability.FileManagement.UserFileManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| hiddenState | boolean | Yes | true: Put the asset into hidden album; false: Recover the asset from hidden album. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Returns the promise |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Called by non-system application. |
| 13900020 | if parameter is invalid |

**Example**

```TypeScript
import { dataSharePredicates } from '@kit.ArkData';
import { BusinessError } from '@kit.BasicServicesKit';

async function example(mgr: userFileManager.UserFileManager) {
  // Restore a file from a hidden album. Before the operation, ensure that the file exists in the hidden album.
  console.info('setHiddenDemo');
  let predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();
  let fetchOption: userFileManager.FetchOptions = {
    fetchColumns: [],
    predicates: predicates
  };
  let albumList: userFileManager.FetchResult<userFileManager.Album> = await mgr.getAlbums(userFileManager.AlbumType.SYSTEM, userFileManager.AlbumSubType.HIDDEN);
  const album: userFileManager.Album = await albumList.getFirstObject();
  let fetchResult: userFileManager.FetchResult<userFileManager.FileAsset> = await album.getPhotoAssets(fetchOption);
  const asset: userFileManager.FileAsset = await fetchResult.getFirstObject();
  asset.setHidden(false).then(() => {
    console.info('setHidden successfully');
  }).catch((err: BusinessError) => {
    console.error('setHidden failed with error:' + err);
  });
}

```

## setUserComment

```TypeScript
setUserComment(userComment: string, callback: AsyncCallback<void>): void
```

Set user comment info to the asset.

**Since:** 10

**Deprecated since:** 26.0.0

**Substitute:** @ohos.file.photoAccessHelper:photoAccessHelper.MediaAssetChangeRequest#setUserComment

**Required permissions:** 

 ohos.permission.WRITE_IMAGEVIDEO

**System capability:** SystemCapability.FileManagement.UserFileManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| userComment | string | Yes | user comment info |
| callback | AsyncCallback&lt;void> | Yes | Returns void. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Called by non-system application. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

**Example**

```TypeScript
import { dataSharePredicates } from '@kit.ArkData';

async function example(mgr: userFileManager.UserFileManager) {
  try {
    console.info('setUserCommentDemo')
    let predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();
    let fetchOptions: userFileManager.FetchOptions = {
      fetchColumns: [],
      predicates: predicates
    };
    let fetchResult: userFileManager.FetchResult<userFileManager.FileAsset> = await mgr.getPhotoAssets(fetchOptions);
    let fileAsset: userFileManager.FileAsset = await fetchResult.getFirstObject();
    let userComment: string = 'test_set_user_comment';
    fileAsset.setUserComment(userComment, (err) => {
      if (err === undefined) {
        console.info('setUserComment successfully');
      } else {
        console.error('setUserComment failed with error: ' + err);
      }
    });
  } catch (err) {
    console.error('setUserCommentDemoCallback failed with error: ' + err);
  }
}

```

## setUserComment

```TypeScript
setUserComment(userComment: string): Promise<void>
```

Set user comment info to the asset.

**Since:** 10

**Deprecated since:** 26.0.0

**Substitute:** @ohos.file.photoAccessHelper:photoAccessHelper.MediaAssetChangeRequest#setUserComment

**Required permissions:** 

 ohos.permission.WRITE_IMAGEVIDEO

**System capability:** SystemCapability.FileManagement.UserFileManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| userComment | string | Yes | user comment info |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Returns void |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Called by non-system application. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

**Example**

```TypeScript
import { dataSharePredicates } from '@kit.ArkData';

async function example(mgr: userFileManager.UserFileManager) {
  try {
    console.info('setUserCommentDemo')
    let predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();
    let fetchOptions: userFileManager.FetchOptions = {
      fetchColumns: [],
      predicates: predicates
    };
    let fetchResult: userFileManager.FetchResult<userFileManager.FileAsset> = await mgr.getPhotoAssets(fetchOptions);
    let fileAsset: userFileManager.FileAsset = await fetchResult.getFirstObject();
    let userComment: string = 'test_set_user_comment';
    await fileAsset.setUserComment(userComment);
  } catch (err) {
    console.error('setUserCommentDemoCallback failed with error: ' + err);
  }
}

```

## displayName

```TypeScript
displayName: string
```

Display name (with a file name extension) of the file.

**Type:** string

**Since:** 9

**Deprecated since:** 26.0.0

**Substitute:** @ohos.file.photoAccessHelper:photoAccessHelper.PhotoAsset.displayName

**System capability:** SystemCapability.FileManagement.UserFileManager.Core

**System API:** This is a system API.

## uri

```TypeScript
readonly uri: string
```

URI of the file.

**Type:** string

**Since:** 9

**Deprecated since:** 26.0.0

**Substitute:** @ohos.file.photoAccessHelper:photoAccessHelper.PhotoAsset.uri

**System capability:** SystemCapability.FileManagement.UserFileManager.Core

**System API:** This is a system API.

## fileType

```TypeScript
readonly fileType: FileType
```

File type, for example, IMAGE, VIDEO, AUDIO

**Type:** FileType

**Since:** 9

**Deprecated since:** 26.0.0

**Substitute:** @ohos.file.photoAccessHelper:photoAccessHelper.PhotoAsset.PhotoType

**System capability:** SystemCapability.FileManagement.UserFileManager.Core

**System API:** This is a system API.

