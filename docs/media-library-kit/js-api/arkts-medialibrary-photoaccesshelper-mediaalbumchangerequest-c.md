# MediaAlbumChangeRequest

Provides APIs for managing the media album change request.

**Inheritance/Implementation:** MediaAlbumChangeRequest implements [MediaChangeRequest](arkts-medialibrary-photoaccesshelper-mediachangerequest-i.md)

**Since:** 11

<!--Device-photoAccessHelper-class MediaAlbumChangeRequest implements MediaChangeRequest--><!--Device-photoAccessHelper-class MediaAlbumChangeRequest implements MediaChangeRequest-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## Modules to Import

```TypeScript
import { photoAccessHelper } from '@kit.MediaLibraryKit';
```

<a id="addassets"></a>
## addAssets

```TypeScript
addAssets(assets: Array<PhotoAsset>): void
```

Add assets to the album.

**Since:** 11

<!--Device-MediaAlbumChangeRequest-addAssets(assets: Array<PhotoAsset>): void--><!--Device-MediaAlbumChangeRequest-addAssets(assets: Array<PhotoAsset>): void-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| assets | Array&lt;PhotoAsset&gt; | Yes | Array of assets to add. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:<br>1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types;<br>3. Parameter verification failed. |
| 14000011 | System inner fail |
| 14000016 | Operation Not Support |

<a id="constructor"></a>
## constructor

```TypeScript
constructor(album: Album)
```

Constructor used to initialize a new object.

**Since:** 11

<!--Device-MediaAlbumChangeRequest-constructor(album: Album)--><!--Device-MediaAlbumChangeRequest-constructor(album: Album)-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| album | [Album](arkts-medialibrary-sendablephotoaccesshelper-album-i.md) | Yes | Album to change. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:<br>1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types;<br>3. Parameter verification failed. |
| 14000011 | System inner fail |

<a id="getalbum"></a>
## getAlbum

```TypeScript
getAlbum(): Album
```

Obtains the album in the current album change request.

> **NOTE**  
>  
> For the change request for creating an album, this API returns **null** before  
> [applyChanges](arkts-medialibrary-photoaccesshelper-photoaccesshelper-i.md#applychanges-1) is called  
> to apply the changes.

**Since:** 11

<!--Device-MediaAlbumChangeRequest-getAlbum(): Album--><!--Device-MediaAlbumChangeRequest-getAlbum(): Album-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Return value:**

| Type | Description |
| --- | --- |
| [Album](arkts-medialibrary-sendablephotoaccesshelper-album-i.md) | Album obtained. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:<br>1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types. |
| 14000011 | System inner fail |

<a id="removeassets"></a>
## removeAssets

```TypeScript
removeAssets(assets: Array<PhotoAsset>): void
```

Removes assets from the album.

**Since:** 11

<!--Device-MediaAlbumChangeRequest-removeAssets(assets: Array<PhotoAsset>): void--><!--Device-MediaAlbumChangeRequest-removeAssets(assets: Array<PhotoAsset>): void-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| assets | Array&lt;PhotoAsset&gt; | Yes | Array of assets to remove. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:<br>1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types;<br>3. Parameter verification failed. |
| 14000011 | System inner fail |
| 14000016 | Operation Not Support |

<a id="setalbumname"></a>
## setAlbumName

```TypeScript
setAlbumName(name: string): void
```

Sets the album name.

The album name must meet the following requirements:

- The total length of the album name must be between 1 and 255 characters.  
- It must not contain any invalid characters, which are:

. \ / : * ? " ' ` < > | { } [ ]

- It is case-insensitive.  
- Duplicate album names are not allowed.

**Since:** 11

<!--Device-MediaAlbumChangeRequest-setAlbumName(name: string): void--><!--Device-MediaAlbumChangeRequest-setAlbumName(name: string): void-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | Album name to set. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:<br>1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types;<br>3. Parameter verification failed. |
| 14000011 | System inner fail |

## comment

```TypeScript
readonly comment: string
```

A readonly member for type checking.

**Type:** string

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

<!--Device-MediaAlbumChangeRequest-readonly comment: string--><!--Device-MediaAlbumChangeRequest-readonly comment: string-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

