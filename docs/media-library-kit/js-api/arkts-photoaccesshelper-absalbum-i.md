# AbsAlbum

Defines the abstract interface of albums.

**Since:** 12

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## Modules to Import

```TypeScript
import { photoAccessHelper } from '@kit.MediaLibraryKit';
```

## getAssets

```TypeScript
getAssets(options: FetchOptions, callback: AsyncCallback<FetchResult<PhotoAsset>>): void
```

Obtains image and video assets. This API uses an asynchronous callback to return the result.

**Since:** 12

**Required permissions:** 

 ohos.permission.READ_IMAGEVIDEO

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | FetchOptions | Yes | Options for fetching the image and video assets. |
| callback | AsyncCallback&lt;FetchResult&lt;PhotoAsset>> | Yes | Callback used to return the image and video assets obtained. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 201 | Permission denied |
| 13900020 | Invalid argument |
| 14000011 | System inner fail |

## getAssets

```TypeScript
getAssets(options: FetchOptions): Promise<FetchResult<PhotoAsset>>
```

Fetch assets in an album.

**Since:** 20

**Required permissions:** 

 ohos.permission.READ_IMAGEVIDEO

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | FetchOptions | Yes | Fetch options. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;FetchResult&lt;PhotoAsset>> | Returns the fetch result |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 201 | Permission denied |
| 13900020 | Invalid argument |
| 14000011 | System inner fail |

## getSharedPhotoAssets

```TypeScript
getSharedPhotoAssets(options: FetchOptions): Array<SharedPhotoAsset>
```

Fetch shared photo assets in an album.

**Since:** 13

**Required permissions:** 

 ohos.permission.ACCESS_MEDIALIB_THUMB_DB

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | FetchOptions | Yes | Fetch options. |

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;SharedPhotoAsset> | Returns the shared photo assets |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied |
| 202 | Called by non-system application |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14000011 | Internal system error |

## changeTime

```TypeScript
readonly changeTime?: long
```

The change time of album Unit: second, The value must be greater than or equal to 0.

**Type:** long

**Since:** 23

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## albumName

```TypeScript
albumName: string
```

Album name.

**Type:** string

**Since:** 12

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## hidden

```TypeScript
readonly hidden?: boolean
```

The hidden state of album

**Type:** boolean

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

## lpath

```TypeScript
readonly lpath?: string
```

Lpath for the album, one album has a virtual path

**Type:** string

**Since:** 23

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## albumType

```TypeScript
readonly albumType: AlbumType
```

Album type

**Type:** AlbumType

**Since:** 12

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## coverUriSource

```TypeScript
readonly coverUriSource?: CoverUriSource
```

Album cover uri source

**Type:** CoverUriSource

**Since:** 20

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

## count

```TypeScript
readonly count: int
```

Number of assets in the album

**Type:** int

**Since:** 12

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## uploadStatus

```TypeScript
readonly uploadStatus: boolean
```

Album upload status, true means the albim and its assets will upload to cloud or hdc ,false means the albim and its assets will not upload to cloud or hdc

**Type:** boolean

**Since:** 22

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

## albumUri

```TypeScript
readonly albumUri: string
```

Album uri.

**Type:** string

**Since:** 12

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## coverUri

```TypeScript
readonly coverUri: string
```

Cover uri for the album

**Type:** string

**Since:** 10

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## albumSubtype

```TypeScript
readonly albumSubtype: AlbumSubtype
```

Album subtype

**Type:** AlbumSubtype

**Since:** 12

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

