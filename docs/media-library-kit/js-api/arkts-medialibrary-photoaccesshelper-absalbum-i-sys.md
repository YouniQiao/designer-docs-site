# AbsAlbum

Defines the abstract interface of albums.

**Since:** 10

<!--Device-photoAccessHelper-interface AbsAlbum--><!--Device-photoAccessHelper-interface AbsAlbum-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## Modules to Import

```TypeScript
import { photoAccessHelper } from '@kit.MediaLibraryKit';
```

## getSharedPhotoAssets

```TypeScript
getSharedPhotoAssets(options: FetchOptions): Array<SharedPhotoAsset>
```

Fetch shared photo assets in an album.

**Since:** 13

**Required permissions:** ohos.permission.ACCESS_MEDIALIB_THUMB_DB

<!--Device-AbsAlbum-getSharedPhotoAssets(options: FetchOptions): Array<SharedPhotoAsset>--><!--Device-AbsAlbum-getSharedPhotoAssets(options: FetchOptions): Array<SharedPhotoAsset>-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | [FetchOptions](arkts-medialibrary-photoaccesshelper-fetchoptions-i.md) | Yes | Fetch options. |

**Return value:**

| Type | Description |
| --- | --- |
| [Array](../../apis-na/arkts-apis/arkts-na-lib-es5-array-i.md)<SharedPhotoAsset> | Returns the shared photo assets |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Called by non-system application |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:<br>1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types;<br>3. Parameter verification failed. |
| 14000011 | Internal system error |

## coverUriSource

```TypeScript
readonly coverUriSource?: CoverUriSource
```

Source URI of the album cover.

**Type:** CoverUriSource

**Since:** 20

<!--Device-AbsAlbum-readonly coverUriSource?: CoverUriSource--><!--Device-AbsAlbum-readonly coverUriSource?: CoverUriSource-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

## hidden

```TypeScript
readonly hidden?: boolean
```

Whether the album is hidden. **true** if hidden, **false** otherwise.

**Type:** boolean

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

<!--Device-AbsAlbum-readonly hidden?: boolean--><!--Device-AbsAlbum-readonly hidden?: boolean-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

## lpath

```TypeScript
readonly lpath?: string
```

Virtual path of the album.

Albums and their virtual path values:

- Camera application album: '/DCIM/Camera'  
- Screenshot application album: '/Pictures/Screenshots'  
- Screen recording application album: '/Pictures/Screenrecords'  
- User-created album: '/Pictures/Users/{Custom album name}'

**Type:** string

**Since:** 23

<!--Device-AbsAlbum-readonly lpath?: string--><!--Device-AbsAlbum-readonly lpath?: string-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

## uploadStatus

```TypeScript
readonly uploadStatus: boolean
```

Whether the album can be synced to cloud storage or family storage. **true** if it can be synced, **false** otherwise.

**Type:** boolean

**Since:** 22

<!--Device-AbsAlbum-readonly uploadStatus: boolean--><!--Device-AbsAlbum-readonly uploadStatus: boolean-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

