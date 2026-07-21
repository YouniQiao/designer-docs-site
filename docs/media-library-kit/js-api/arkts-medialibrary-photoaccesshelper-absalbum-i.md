# AbsAlbum

Defines the abstract interface of albums.

**Since:** 10

<!--Device-photoAccessHelper-interface AbsAlbum--><!--Device-photoAccessHelper-interface AbsAlbum-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## Modules to Import

```TypeScript
import { photoAccessHelper } from '@kit.MediaLibraryKit';
```

<a id="getassets"></a>
## getAssets

```TypeScript
getAssets(options: FetchOptions, callback: AsyncCallback<FetchResult<PhotoAsset>>): void
```

Obtains image and video assets. This API uses an asynchronous callback to return the result.

**Since:** 10

**Required permissions:** ohos.permission.READ_IMAGEVIDEO

<!--Device-AbsAlbum-getAssets(options: FetchOptions, callback: AsyncCallback<FetchResult<PhotoAsset>>): void--><!--Device-AbsAlbum-getAssets(options: FetchOptions, callback: AsyncCallback<FetchResult<PhotoAsset>>): void-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | [FetchOptions](arkts-medialibrary-photoaccesshelper-fetchoptions-i.md) | Yes | Retrieval options. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;FetchResult&lt;PhotoAsset&gt;&gt; | Yes | Callback function. If files from the album are obtained successfully, **err** is **undefined**, and **data** is the result set of the obtained image and video data ([FetchResult](arkts-file-photoaccesshelper.md)). Otherwise, **err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied<br>**Applicable version:** 12 and later |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:<br>1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types;<br>3. Parameter verification failed. |
| 13900012 | Permission denied<br>**Applicable version:** 10 - 11 |
| 13900020 | Invalid argument |
| 14000011 | System inner fail |

<a id="getassets-1"></a>
## getAssets

```TypeScript
getAssets(options: FetchOptions): Promise<FetchResult<PhotoAsset>>
```

Obtains image and video assets. This API uses a promise to return the result.

**Since:** 10

**Required permissions:** ohos.permission.READ_IMAGEVIDEO

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-AbsAlbum-getAssets(options: FetchOptions): Promise<FetchResult<PhotoAsset>>--><!--Device-AbsAlbum-getAssets(options: FetchOptions): Promise<FetchResult<PhotoAsset>>-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | [FetchOptions](arkts-medialibrary-photoaccesshelper-fetchoptions-i.md) | Yes | Retrieval options. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;FetchResult&lt;PhotoAsset&gt;&gt; | Promise used to return the image and video assets obtained. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied<br>**Applicable version:** 20 and later |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:<br>1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types;<br>3. Parameter verification failed. |
| 13900012 | Permission denied<br>**Applicable version:** 10 - 19 |
| 13900020 | Invalid argument |
| 14000011 | System inner fail |

## albumName

```TypeScript
albumName: string
```

Name of the album. System albums are not writable, whereas user albums can be written to.

**Type:** string

**Since:** 10

<!--Device-AbsAlbum-albumName: string--><!--Device-AbsAlbum-albumName: string-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## albumSubtype

```TypeScript
readonly albumSubtype: AlbumSubtype
```

Subtype of the album.

**Type:** AlbumSubtype

**Since:** 10

<!--Device-AbsAlbum-readonly albumSubtype: AlbumSubtype--><!--Device-AbsAlbum-readonly albumSubtype: AlbumSubtype-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## albumType

```TypeScript
readonly albumType: AlbumType
```

Type of the album.

**Type:** AlbumType

**Since:** 10

<!--Device-AbsAlbum-readonly albumType: AlbumType--><!--Device-AbsAlbum-readonly albumType: AlbumType-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## albumUri

```TypeScript
readonly albumUri: string
```

URI of the album.

**Type:** string

**Since:** 10

<!--Device-AbsAlbum-readonly albumUri: string--><!--Device-AbsAlbum-readonly albumUri: string-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## changeTime

```TypeScript
readonly changeTime?: number
```

Time when the album is changed.Unit: second, The value must be greater than or equal to 0.

**Type:** number

**Since:** 23

<!--Device-AbsAlbum-readonly changeTime?: long--><!--Device-AbsAlbum-readonly changeTime?: long-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## count

```TypeScript
readonly count: number
```

Number of files in the album.

**Type:** number

**Since:** 10

<!--Device-AbsAlbum-readonly count: int--><!--Device-AbsAlbum-readonly count: int-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## coverUri

```TypeScript
readonly coverUri: string
```

URI of the cover file of the album.

**Type:** string

**Since:** 10

<!--Device-AbsAlbum-readonly coverUri: string--><!--Device-AbsAlbum-readonly coverUri: string-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

