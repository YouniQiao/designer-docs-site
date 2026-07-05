# Album

Defines the album.

**Inheritance:** Albumextends: AbsAlbum.

**Since:** 12

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## Modules to Import

```TypeScript
import { sendablePhotoAccessHelper } from '@kit.MediaLibraryKit';
```

## commitModify

```TypeScript
commitModify(): Promise<void>
```

Commits the modification on the album attributes to the database. This API uses a promise to return the result.

**Since:** 12

**Required permissions:** 

 ohos.permission.WRITE_IMAGEVIDEO

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Returns void |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 14000011 | Internal system error |

## convertToPhotoAlbum

```TypeScript
convertToPhotoAlbum(): photoAccessHelper.Album
```

Converts this Sendable album to a non-Sendable album.

**Since:** 12

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Return value:**

| Type | Description |
| --- | --- |
| photoAccessHelper.Album | Returns the instance if the operation is successful. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 14000011 | Internal system error |

## getFaceId

```TypeScript
getFaceId(): Promise<string>
```

Obtains the face identifier on the cover of a portrait album or group photo album.

**Since:** 13

**Required permissions:** 

 ohos.permission.READ_IMAGEVIDEO

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;string> | Returns tag_id if portrait album, Returns group_tag if group photo album,  Returns empty if not found. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied |
| 202 | Called by non-system application |
| 14000011 | Internal system error |

## videoCount

```TypeScript
readonly videoCount?: number
```

Number of video assets in the album

**Type:** number

**Since:** 12

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## imageCount

```TypeScript
readonly imageCount?: number
```

Number of image assets in the album

**Type:** number

**Since:** 12

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

