# AbsAlbum (System API)

Defines the AbsAlbum.

**Since:** 9

**Deprecated since:** 26.0.0

**Substitutes:** [AbsAlbum](../../apis-media-library-kit/arkts-apis/arkts-medialibrary-absalbum-i.md#absalbum)

**System capability:** SystemCapability.FileManagement.UserFileManager.Core

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { userFileManager } from '@ohos.filemanagement.userFileManager';
```

## getPhotoAssets

```TypeScript
getPhotoAssets(options: FetchOptions, callback: AsyncCallback<FetchResult<FileAsset>>): void
```

Obtains files in an album. This method uses an asynchronous callback to return the files.

**Since:** 9

**Deprecated since:** 26.0.0

**Substitutes:** [getAssets](../../apis-media-library-kit/arkts-apis/arkts-medialibrary-absalbum-i.md#getassets-1)

**Required permissions:** ohos.permission.READ_IMAGEVIDEO

**System capability:** SystemCapability.FileManagement.UserFileManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | FetchOptions | Yes | Retrieval options. |
| callback | AsyncCallback&lt;FetchResult&lt;FileAsset&gt;&gt; | Yes | Callback used to return the files in the format of a FetchResult instance. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 13900020 | if type options is not FetchOptions |

## getPhotoAssets

```TypeScript
getPhotoAssets(options: FetchOptions): Promise<FetchResult<FileAsset>>
```

Obtains files in an album. This method uses a promise to return the files.

**Since:** 9

**Deprecated since:** 26.0.0

**Substitutes:** [getAssets](../../apis-media-library-kit/arkts-apis/arkts-medialibrary-absalbum-i.md#getassets-1)

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
| Promise&lt;FetchResult&lt;FileAsset&gt;&gt; | A Promise instance used to return the files in the format of a FetchResult instance. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 13900020 | if type options is not FetchOptions |

## albumName

```TypeScript
albumName: string
```

Album name.

**Type:** string

**Since:** 9

**Deprecated since:** 26.0.0

**Substitutes:** [albumName](../../apis-media-library-kit/arkts-apis/arkts-medialibrary-absalbum-i.md#albumname)

**System capability:** SystemCapability.FileManagement.UserFileManager.Core

**System API:** This is a system API.

## albumSubType

```TypeScript
readonly albumSubType: AlbumSubType
```

Album subtype

**Type:** AlbumSubType

**Since:** 10

**Deprecated since:** 26.0.0

**Substitutes:** albumSubType

**System capability:** SystemCapability.FileManagement.UserFileManager.Core

**System API:** This is a system API.

## albumType

```TypeScript
readonly albumType: AlbumType
```

Album type

**Type:** AlbumType

**Since:** 10

**Deprecated since:** 26.0.0

**Substitutes:** [albumType](../../apis-media-library-kit/arkts-apis/arkts-medialibrary-absalbum-i.md#albumtype)

**System capability:** SystemCapability.FileManagement.UserFileManager.Core

**System API:** This is a system API.

## albumUri

```TypeScript
readonly albumUri: string
```

Album uri.

**Type:** string

**Since:** 9

**Deprecated since:** 26.0.0

**Substitutes:** [albumUri](../../apis-media-library-kit/arkts-apis/arkts-medialibrary-absalbum-i.md#albumuri)

**System capability:** SystemCapability.FileManagement.UserFileManager.Core

**System API:** This is a system API.

## count

```TypeScript
readonly count: number
```

File count for the album

**Type:** number

**Since:** 9

**Deprecated since:** 26.0.0

**Substitutes:** [count](../../apis-media-library-kit/arkts-apis/arkts-medialibrary-absalbum-i.md#count)

**System capability:** SystemCapability.FileManagement.UserFileManager.Core

**System API:** This is a system API.

## coverUri

```TypeScript
coverUri: string
```

CoverUri for the album

**Type:** string

**Since:** 9

**Deprecated since:** 26.0.0

**Substitutes:** [coverUri](../../apis-media-library-kit/arkts-apis/arkts-medialibrary-absalbum-i.md#coveruri)

**System capability:** SystemCapability.FileManagement.UserFileManager.Core

**System API:** This is a system API.

## dateModified

```TypeScript
readonly dateModified: number
```

Time when the album was modified. Unit: ms, The value must be an integer greater than or equal to 0.

**Type:** number

**Since:** 9

**Deprecated since:** 26.0.0

**Substitutes:** [dateModified](../../apis-media-library-kit/arkts-apis/arkts-medialibrary-album-i-sys.md#datemodified)

**System capability:** SystemCapability.FileManagement.UserFileManager.Core

**System API:** This is a system API.

