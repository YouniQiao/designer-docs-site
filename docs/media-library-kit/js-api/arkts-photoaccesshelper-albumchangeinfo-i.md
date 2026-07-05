# AlbumChangeInfo

Defines the detailed attributes of an album.

**Since:** 20

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## Modules to Import

```TypeScript
import { photoAccessHelper } from '@kit.MediaLibraryKit';
```

## imageCount

```TypeScript
imageCount: int
```

Total number of photos in the album.

**Type:** int

**Since:** 20

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## albumName

```TypeScript
albumName: string
```

Album name.

**Type:** string

**Since:** 20

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## hiddenCount

```TypeScript
hiddenCount: int
```

Total number of hidden photos and videos in the album.

**Type:** int

**Since:** 20

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

## hidden

```TypeScript
hidden?: boolean
```

hidden state of the album.

**Type:** boolean

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

## count

```TypeScript
count: int
```

Total number of photos and videos in the album.

**Type:** int

**Since:** 20

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## hiddenCoverUri

```TypeScript
hiddenCoverUri: string
```

Cover of hidden assets in the album.

**Type:** string

**Since:** 20

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

## orderSection

```TypeScript
orderSection?: int
```

The order section of album asset.

**Type:** int

**Since:** 23

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

## albumUri

```TypeScript
albumUri: string
```

Album URI.

**Type:** string

**Since:** 20

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## videoCount

```TypeScript
videoCount: int
```

Total number of videos in the album.

**Type:** int

**Since:** 20

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## albumOrder

```TypeScript
albumOrder?: int
```

The album order of album asset.

**Type:** int

**Since:** 23

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

## isHiddenCoverChanged

```TypeScript
isHiddenCoverChanged: boolean
```

Whether the cover of hidden assets in the album is changed. It is used to distinguish between attribute changes and content changes of a cover asset.

**Type:** boolean

**Since:** 20

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

## lpath

```TypeScript
lpath?: string
```

The virtual path of album.

**Type:** string

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

## albumType

```TypeScript
albumType: AlbumType
```

Album type.

**Type:** AlbumType

**Since:** 20

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## isCoverChanged

```TypeScript
isCoverChanged: boolean
```

Whether the album cover content is changed. It is used to distinguish between attribute changes and content changes of a photo.

**Type:** boolean

**Since:** 20

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

## coverUri

```TypeScript
coverUri: string
```

Cover URI.

**Type:** string

**Since:** 20

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## albumSubtype

```TypeScript
albumSubtype: AlbumSubtype
```

Subtype of the album.

**Type:** AlbumSubtype

**Since:** 20

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## coverInfo

```TypeScript
coverInfo?: PhotoAssetChangeInfo
```

Detailed asset change information of the cover.

**Type:** PhotoAssetChangeInfo

**Since:** 20

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

## hiddenCoverInfo

```TypeScript
hiddenCoverInfo?: PhotoAssetChangeInfo
```

Cover changes of hidden assets in the album.

**Type:** PhotoAssetChangeInfo

**Since:** 20

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

