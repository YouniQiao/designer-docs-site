# MediaAlbumChangeRequest

Defines the class of media album change request.

**Inheritance/Implementation:** MediaAlbumChangeRequest implements [MediaChangeRequest](arkts-medialibrary-mediachangerequest-i.md)

**Since:** 11

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## Modules to Import

```TypeScript
import { photoAccessHelper } from '@kit.MediaLibraryKit';
```

## addAssets

```TypeScript
addAssets(assets: Array<PhotoAsset>): void
```

Add assets to the album.

**Since:** 11

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| assets | Array&lt;PhotoAsset&gt; | Yes | Array of assets to add. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types; 3. Parameter verification failed. |
| 14000011 | System inner fail |
| 14000016 | Operation Not Support |

## constructor

```TypeScript
constructor(album: Album)
```

The constructor to create a MediaAlbumChangeRequest instance.

**Since:** 11

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| album | Album | Yes | Specify which album to change |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types; 3. Parameter verification failed. |
| 14000011 | System inner fail |

## getAlbum

```TypeScript
getAlbum(): Album
```

Obtains the album in the current album change request.

**Since:** 11

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Return value:**

| Type | Description |
| --- | --- |
| Album | - Returns the album |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types. |
| 14000011 | System inner fail |

## removeAssets

```TypeScript
removeAssets(assets: Array<PhotoAsset>): void
```

Removes assets from the album.

**Since:** 11

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| assets | Array&lt;PhotoAsset&gt; | Yes | Array of assets to remove. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types; 3. Parameter verification failed. |
| 14000011 | System inner fail |
| 14000016 | Operation Not Support |

## setAlbumName

```TypeScript
setAlbumName(name: string): void
```

Sets the album name.

**Since:** 11

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | Album name to set. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types; 3. Parameter verification failed. |
| 14000011 | System inner fail |

## comment

```TypeScript
readonly comment: string
```

A readonly member for type checking.

**Type:** string

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

