# HighlightAlbum (System API)

Provides APIs for managing the Highlights album, which is an automatically generated collection of memorable photos or videos.

**Since:** 12

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { photoAccessHelper } from '@kit.MediaLibraryKit';
```

## constructor

```TypeScript
constructor(album: Album)
```

The constructor to create a highlight instance.

**Since:** 12

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| album | Album | Yes | Analysis album |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Called by non-system application |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types; 3. Parameter verification failed. |
| 14000011 | Internal system error |

**Example**

```TypeScript
import { dataSharePredicates } from '@kit.ArkData';

async function example(phAccessHelper: photoAccessHelper.PhotoAccessHelper) {
  console.info('HighlightAlbum constructorDemo');
  let predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();
  let fetchOption: photoAccessHelper.FetchOptions = {
    fetchColumns: [],
    predicates: predicates
  };
  let albumFetchResult: photoAccessHelper.FetchResult<photoAccessHelper.Album> = await phAccessHelper.getAlbums(
    photoAccessHelper.AlbumType.SMART, photoAccessHelper.AlbumSubtype.HIGHLIGHT, fetchOption);
  let album: photoAccessHelper.Album = await albumFetchResult.getFirstObject();
  let highlightAlbum: photoAccessHelper.HighlightAlbum = new photoAccessHelper.HighlightAlbum(album);
  albumFetchResult.close();
}

```

## deleteHighlightAlbums

```TypeScript
static deleteHighlightAlbums(context: Context, albums: Array<Album>): Promise<number>
```

Deletes highlight albums.

**Since:** 18

**Required permissions:** ohos.permission.WRITE_IMAGEVIDEO

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | Context | Yes | Context of the ability instance. |
| albums | Array&lt;Album&gt; | Yes | Array of highlight albums to delete. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;number&gt; | Returns result of delete highlight album |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Called by non-system application |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types; 3. Parameter verification failed. |
| 14000011 | Internal system error. It is recommended to retry and check the logs.<br>Possible causes: 1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out.@static |

**Example**

```TypeScript
import { dataSharePredicates } from '@kit.ArkData';

async function example(context: Context) {
  try {
    console.info('deleteHighlightAlbums');
    let helper: photoAccessHelper.PhotoAccessHelper = photoAccessHelper.getPhotoAccessHelper(context);
    let albumFetchOption: photoAccessHelper.FetchOptions = {
      fetchColumns: [],
      predicates: new dataSharePredicates.DataSharePredicates()
    };
    let albumFetchResult: photoAccessHelper.FetchResult<photoAccessHelper.Album> =
      await helper.getAlbums(photoAccessHelper.AlbumType.SMART, photoAccessHelper.AlbumSubtype.HIGHLIGHT, albumFetchOption);
    if (albumFetchResult.getCount() === 0) {
      console.error('No album');
      return;
    }
    let highlightAlbum: photoAccessHelper.Album = await albumFetchResult.getFirstObject();
    albumFetchResult.close();
    let result = await photoAccessHelper.HighlightAlbum.deleteHighlightAlbums(context, [highlightAlbum]);
    console.info('deleteHighlightAlbums success');
  } catch (err) {
    console.error(`deleteHighlightAlbums with error: ${err}`);
  }
}

```

## getHighlightAlbumInfo

```TypeScript
getHighlightAlbumInfo(type: HighlightAlbumInfoType): Promise<string>
```

Obtains specific information about the Highlights album.

**Since:** 12

**Required permissions:** ohos.permission.READ_IMAGEVIDEO

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | HighlightAlbumInfoType | Yes | Type of the album information to obtain. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;string&gt; | Returns highlight album info into a json string |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Called by non-system application |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types; 3. Parameter verification failed. |
| 14000011 | Internal system error |

**Example**

```TypeScript
import { dataSharePredicates } from '@kit.ArkData';

async function example(phAccessHelper: photoAccessHelper.PhotoAccessHelper) {
  try {
    console.info('getHighlightAlbumInfoDemo')
    let fetchOptions: photoAccessHelper.FetchOptions = {
      fetchColumns: [],
      predicates: new dataSharePredicates.DataSharePredicates()
    }
    let albumFetchResult: photoAccessHelper.FetchResult<photoAccessHelper.Album> = await phAccessHelper.getAlbums(
      photoAccessHelper.AlbumType.SMART, photoAccessHelper.AlbumSubtype.HIGHLIGHT, fetchOptions);
    let album: photoAccessHelper.Album = await albumFetchResult.getFirstObject();
    if (album != undefined) {
      let highlightAlbum: photoAccessHelper.HighlightAlbum = new photoAccessHelper.HighlightAlbum(album);
      let coverInfo: string = await highlightAlbum.getHighlightAlbumInfo(
        photoAccessHelper.HighlightAlbumInfoType.COVER_INFO);
      console.info('get cover info result: ' + JSON.stringify(coverInfo));
    }

    albumFetchResult.close();
  } catch (err) {
    console.error(`getHighlightAlbumInfoDemofailed with error: ${err.code}, ${err.message}`);
  }
}

```

## getHighlightResource

```TypeScript
getHighlightResource(resourceUri: string): Promise<ArrayBuffer>
```

Obtains the ArrayBuffer for caching the specified asset.

**Since:** 12

**Required permissions:** ohos.permission.READ_IMAGEVIDEO

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| resourceUri | string | Yes | URI of the asset to cache. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;ArrayBuffer&gt; | Returns array buffer of the content |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Called by non-system application |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types; 3. Parameter verification failed. |
| 14000011 | Internal system error |

**Example**

```TypeScript
import { dataSharePredicates } from '@kit.ArkData';

async function example(phAccessHelper: photoAccessHelper.PhotoAccessHelper) {
  try {
    console.info('getHighlightResourceDemo')
    let fetchOptions: photoAccessHelper.FetchOptions = {
      fetchColumns: [],
      predicates: new dataSharePredicates.DataSharePredicates()
    }
    let albumFetchResult: photoAccessHelper.FetchResult<photoAccessHelper.Album> = await phAccessHelper.getAlbums(
      photoAccessHelper.AlbumType.SMART, photoAccessHelper.AlbumSubtype.HIGHLIGHT, fetchOptions);
    let album: photoAccessHelper.Album = await albumFetchResult.getFirstObject();
    if (album != undefined) {
      let highlightAlbum: photoAccessHelper.HighlightAlbum = new photoAccessHelper.HighlightAlbum(album);
      let uri: string = 'file://media/highlight/cover/10/1_1/background.png?oper=highlight'
      let arrayBuffer: ArrayBuffer = await highlightAlbum.getHighlightResource(uri);
    }
    albumFetchResult.close();
  } catch (err) {
    console.error(`getHighlightResourceDemofailed with error: ${err.code}, ${err.message}`);
  }
}

```

## setHighlightUserActionData

```TypeScript
setHighlightUserActionData(type: HighlightUserActionType, actionData: number): Promise<void>
```

Sets the user behavior data for the Highlights album.

**Since:** 12

**Required permissions:** ohos.permission.WRITE_IMAGEVIDEO

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | HighlightUserActionType | Yes | Type of the user behavior data to set. |
| actionData | number | Yes | Behavior data. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Returns void |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Called by non-system application |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types; 3. Parameter verification failed. |
| 14000011 | Internal system error |

**Example**

```TypeScript
import { dataSharePredicates } from '@kit.ArkData';

async function example(phAccessHelper: photoAccessHelper.PhotoAccessHelper) {
  try {
    console.info('setHighlightUserActionDataDemo')
    let fetchOptions: photoAccessHelper.FetchOptions = {
      fetchColumns: [],
      predicates: new dataSharePredicates.DataSharePredicates()
    }
    let albumFetchResult: photoAccessHelper.FetchResult<photoAccessHelper.Album> = await phAccessHelper.getAlbums(
      photoAccessHelper.AlbumType.SMART, photoAccessHelper.AlbumSubtype.HIGHLIGHT, fetchOptions);
    let album: photoAccessHelper.Album = await albumFetchResult.getFirstObject();
    if (album != undefined) {
      let highlightAlbum: photoAccessHelper.HighlightAlbum = new photoAccessHelper.HighlightAlbum(album);
      highlightAlbum.setHighlightUserActionData(photoAccessHelper.HighlightUserActionType.INSERTED_PIC_COUNT, 1);
    }
    albumFetchResult.close();
  } catch (err) {
    console.error(`setHighlightUserActionDataDemofailed with error: ${err.code}, ${err.message}`);
  }
}

```

## setSubTitle

```TypeScript
setSubTitle(subTitle: string): Promise<void>
```

Set highlight sub title

**Since:** 18

**Required permissions:** ohos.permission.WRITE_IMAGEVIDEO

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| subTitle | string | Yes | Highlight sub title |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Returns void |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Called by non-system application |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types; 3. Parameter verification failed. |
| 14000011 | Internal system error. It is recommended to retry and check the logs.<br>Possible causes: 1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out. |

