# PhotoAccessHelper

Helper functions to access photos and albums.

**Inheritance/Implementation:** PhotoAccessHelper extends [lang.ISendable](../../apis-arkts/arkts-apis/arkts-arkts-isendable-i.md#isendable)

**Since:** 12

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## Modules to Import

```TypeScript
import { sendablePhotoAccessHelper } from '@ohos.file.sendablePhotoAccessHelper';
```

## createAsset

```TypeScript
createAsset(photoType: PhotoType, extension: string, options?: photoAccessHelper.CreateOptions): Promise<string>
```

Creates an image or video asset with the specified file type, file name extension, and options. This API uses a promise to return the result. If the caller does not have the ohos.permission.WRITE_IMAGEVIDEO permission, you can create a media asset by using a security component. For details, see Creating a Media Asset Using a Security Component.

**Since:** 12

**Required permissions:** ohos.permission.WRITE_IMAGEVIDEO

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| photoType | PhotoType | Yes | Type of the file to create, which can be IMAGE or VIDEO. |
| extension | string | Yes | File name extension, for example, 'jpg'. The value contains 1 to 255 characters. |
| options | photoAccessHelper.CreateOptions | No | Options for creating the media asset, for example, {title: 'testPhoto'}. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;string&gt; | Returns the uri of the newly created asset |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types; 3. Parameter verification failed. |
| 14000011 | Internal system error |

**Example**

For details about how to create a phAccessHelper instance, see the example provided in [sendablePhotoAccessHelper.getPhotoAccessHelper](#sendablephotoaccesshelpergetphotoaccesshelper).

```TypeScript
import { photoAccessHelper } from '@kit.MediaLibraryKit';

async function example(phAccessHelper: sendablePhotoAccessHelper.PhotoAccessHelper) {
  console.info('createAssetDemo');
  try {
    let photoType: sendablePhotoAccessHelper.PhotoType = sendablePhotoAccessHelper.PhotoType.IMAGE;
    let extension: string = 'jpg';
    let options: photoAccessHelper.CreateOptions = {
      title: 'testPhoto'
    }
    let uri: string = await phAccessHelper.createAsset(photoType, extension, options);
    console.info('createAsset uri' + uri);
    console.info('createAsset successfully');
  } catch (err) {
    console.error(`createAsset failed, error: ${err.code}, ${err.message}`);
  }
}

```

## getAlbums

```TypeScript
getAlbums(options: photoAccessHelper.FetchOptions): Promise<FetchResult<Album>>
```

Obtains albums. This API uses a promise to return the result.

**Since:** 12

**Required permissions:** ohos.permission.READ_IMAGEVIDEO

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | photoAccessHelper.FetchOptions | Yes | Options for fetching the albums. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;FetchResult&lt;Album&gt;&gt; | - Returns the fetch result |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types; 3. Parameter verification failed. |
| 14000011 | Internal system error |

**Example**

For details about how to create a phAccessHelper instance, see the example provided in [sendablePhotoAccessHelper.getPhotoAccessHelper](#sendablephotoaccesshelpergetphotoaccesshelper).

```TypeScript
import { dataSharePredicates } from '@kit.ArkData';
import { BusinessError } from '@kit.BasicServicesKit';
import { photoAccessHelper } from '@kit.MediaLibraryKit';

async function example(phAccessHelper: sendablePhotoAccessHelper.PhotoAccessHelper) {
  // Obtain the album named newAlbumName.
  console.info('getAlbumsDemo');
  let predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();
  predicates.equalTo('album_name', 'newAlbumName');
  let fetchOptions: photoAccessHelper.FetchOptions = {
    fetchColumns: [],
    predicates: predicates
  };
  phAccessHelper.getAlbums(fetchOptions).then( async (fetchResult) => {
    if (fetchResult === undefined) {
      console.error('getAlbumsPromise fetchResult is undefined');
      return;
    }
    let album: sendablePhotoAccessHelper.Album = await fetchResult.getFirstObject();
    console.info('getAlbumsPromise successfully, albumName: ' + album.albumName);
    fetchResult.close();
  }).catch((err: BusinessError) => {
    console.error(`getAlbumsPromise failed with err: ${err.code}, ${err.message}`);
  });
}

```

## getAlbums

```TypeScript
getAlbums(
      type: AlbumType,
      subtype: AlbumSubtype,
      options?: photoAccessHelper.FetchOptions
    ): Promise<FetchResult<Album>>
```

Obtains albums based on the specified options and album type. This API uses a promise to return the result.

**Since:** 12

**Required permissions:** ohos.permission.READ_IMAGEVIDEO

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | AlbumType | Yes | Type of the albums to obtain. |
| subtype | AlbumSubtype | Yes | Subtype of the album. |
| options | photoAccessHelper.FetchOptions | No | Options for fetching the albums.If this parameter is not specified, the albums are obtained based on the album type by default. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;FetchResult&lt;Album&gt;&gt; | - Returns the fetch result |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types; 3. Parameter verification failed. |
| 14000011 | Internal system error |

**Example**

For details about how to create a phAccessHelper instance, see the example provided in [sendablePhotoAccessHelper.getPhotoAccessHelper](#sendablephotoaccesshelpergetphotoaccesshelper).

```TypeScript
import { dataSharePredicates } from '@kit.ArkData';
import { BusinessError } from '@kit.BasicServicesKit';
import { photoAccessHelper } from '@kit.MediaLibraryKit';

async function example(phAccessHelper: sendablePhotoAccessHelper.PhotoAccessHelper) {
  // Obtain the album named newAlbumName.
  console.info('getAlbumsDemo');
  let predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();
  predicates.equalTo('album_name', 'newAlbumName');
  let fetchOptions: photoAccessHelper.FetchOptions = {
    fetchColumns: [],
    predicates: predicates
  };
  phAccessHelper.getAlbums(sendablePhotoAccessHelper.AlbumType.USER, sendablePhotoAccessHelper.AlbumSubtype.USER_GENERIC, fetchOptions).then( async (fetchResult) => {
    if (fetchResult === undefined) {
      console.error('getAlbumsPromise fetchResult is undefined');
      return;
    }
    let album: sendablePhotoAccessHelper.Album = await fetchResult.getFirstObject();
    console.info('getAlbumsPromise successfully, albumName: ' + album.albumName);
    fetchResult.close();
  }).catch((err: BusinessError) => {
    console.error(`getAlbumsPromise failed with err: ${err.code}, ${err.message}`);
  });
}

```

## getAssets

```TypeScript
getAssets(options: photoAccessHelper.FetchOptions): Promise<FetchResult<PhotoAsset>>
```

Obtains media assets. This API uses a promise to return the result.

**Since:** 12

**Required permissions:** ohos.permission.READ_IMAGEVIDEO

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | photoAccessHelper.FetchOptions | Yes | Options for fetching the media assets. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;FetchResult&lt;PhotoAsset&gt;&gt; | Returns the fetch result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types; 3. Parameter verification failed. |
| 14000011 | Internal system error |

**Example**

For details about how to create a phAccessHelper instance, see the example provided in [sendablePhotoAccessHelper.getPhotoAccessHelper](#sendablephotoaccesshelpergetphotoaccesshelper).

```TypeScript
import { dataSharePredicates } from '@kit.ArkData';
import { photoAccessHelper } from '@kit.MediaLibraryKit';

async function example(phAccessHelper: sendablePhotoAccessHelper.PhotoAccessHelper) {
  console.info('getAssets');
  let predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();
  let fetchOptions: photoAccessHelper.FetchOptions = {
    fetchColumns: [],
    predicates: predicates
  };
  try {
    let fetchResult: sendablePhotoAccessHelper.FetchResult<sendablePhotoAccessHelper.PhotoAsset> = await phAccessHelper.getAssets(fetchOptions);
    if (fetchResult !== undefined) {
      console.info('fetchResult success');
      let photoAsset: sendablePhotoAccessHelper.PhotoAsset = await fetchResult.getFirstObject();
      if (photoAsset !== undefined) {
        console.info('photoAsset.displayName :' + photoAsset.displayName);
      }
    }
  } catch (err) {
    console.error(`getAssets failed, error: ${err.code}, ${err.message}`);
  }
}

```

## getBurstAssets

```TypeScript
getBurstAssets(burstKey: string, options: photoAccessHelper.FetchOptions): Promise<FetchResult<PhotoAsset>>
```

Obtains burst assets. This API uses a promise to return the result.

**Since:** 12

**Required permissions:** ohos.permission.READ_IMAGEVIDEO

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| burstKey | string | Yes | Burst asset options. |
| options | photoAccessHelper.FetchOptions | Yes |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;FetchResult&lt;PhotoAsset&gt;&gt; | Returns the fetch result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types; 3. Parameter verification failed. |
| 14000011 | Internal system error |

**Example**

For details about how to create a phAccessHelper instance, see the example provided in [sendablePhotoAccessHelper.getPhotoAccessHelper](#sendablephotoaccesshelpergetphotoaccesshelper).

```TypeScript
import { photoAccessHelper } from '@kit.MediaLibraryKit';
import { dataSharePredicates } from '@kit.ArkData';

async function example(phAccessHelper: sendablePhotoAccessHelper.PhotoAccessHelper) {
  console.info('getBurstAssets');
  let predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();
  let fetchOption: photoAccessHelper.FetchOptions = {
    fetchColumns: [],
    predicates: predicates
  };
  let fetchResult: sendablePhotoAccessHelper.FetchResult<sendablePhotoAccessHelper.PhotoAsset> = await phAccessHelper.getAssets(fetchOption);
  let photoAssetList: Array<sendablePhotoAccessHelper.PhotoAsset> = await fetchResult.getAllObjects();
  let photoAsset: sendablePhotoAccessHelper.PhotoAsset;
  // burstKey is a 36-bit UUID, which can be obtained from photoAccessHelper.PhotoKeys.
  for(photoAsset of photoAssetList){
    let burstKey: string = photoAccessHelper.PhotoKeys.BURST_KEY.toString();
    let photoAccessBurstKey: photoAccessHelper.MemberType = photoAsset.get(burstKey).toString();
    try {
      let fetchResult: sendablePhotoAccessHelper.FetchResult<sendablePhotoAccessHelper.PhotoAsset> = await
      phAccessHelper.getBurstAssets(photoAccessBurstKey, fetchOption);
      if (fetchResult !== undefined) {
        console.info('fetchResult success');
        let photoAsset: sendablePhotoAccessHelper.PhotoAsset = await fetchResult.getFirstObject();
        if (photoAsset !== undefined) {
          console.info('photoAsset.displayName :' + photoAsset.displayName);
        }
      }
    } catch (err) {
      console.error(`getBurstAssets failed, error: ${err.code}, ${err.message}`);
    }
  }
}

```

## release

```TypeScript
release(): Promise<void>
```

Releases this PhotoAccessHelper instance. This API uses a promise to return the result. Call this API when the APIs of the PhotoAccessHelper instance are no longer used.

**Since:** 12

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Returns void |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 14000011 | Internal system error |

**Example**

For details about how to create a phAccessHelper instance, see the example provided in [sendablePhotoAccessHelper.getPhotoAccessHelper](#sendablephotoaccesshelpergetphotoaccesshelper).

```TypeScript
async function example(phAccessHelper: sendablePhotoAccessHelper.PhotoAccessHelper) {
  console.info('releaseDemo');
  try {
    console.info('use function...');
  } catch (err) {
    console.error(`function error ...`);
  }finally{
      try{
          phAccessHelper?.release();
          console.info(`release success`);
      } catch(e){
          console.error(`release error :${e}`);
      }
  }
}

```

