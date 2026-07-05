# PhotoAssetChangeInfo

Defines the photo asset info.

**Since:** 20

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## Modules to Import

```TypeScript
import { photoAccessHelper } from '@kit.MediaLibraryKit';
```

## displayName

```TypeScript
displayName?: string
```

Display name of photo asset.

**Type:** string

**Since:** 23

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

## dateDay

```TypeScript
dateDay: string
```

Date of the photo or video.

**Type:** string

**Since:** 20

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

## mediaType

```TypeScript
mediaType: PhotoType
```

Media type of the photo or video.

**Type:** PhotoType

**Since:** 20

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## hiddenTime

```TypeScript
hiddenTime?: long
```

The hidden time of asset. <br>Unit:milliseconds.

**Type:** long

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

## albumUri

```TypeScript
albumUri: string
```

URI of the album that the image or video belongs to.

**Type:** string

**Since:** 20

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## uri

```TypeScript
uri: string
```

URI of the photo or video.

**Type:** string

**Since:** 20

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## assetSourceType

```TypeScript
assetSourceType?: AssetSourceType
```

The asset source type. Default value: 0.

**Type:** AssetSourceType

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

## isHidden

```TypeScript
isHidden: boolean
```

Whether the photo or video is hidden.

**Type:** boolean

**Since:** 20

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

## albumChangeInfos

```TypeScript
albumChangeInfos?: AlbumChangeInfo[] | null
```

The analysis album change info.

**Type:** AlbumChangeInfo[] | null

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

## thumbnailVisible

```TypeScript
thumbnailVisible: ThumbnailVisibility
```

Whether the thumbnail is visible.

**Type:** ThumbnailVisibility

**Since:** 20

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

## dateModifiedMs

```TypeScript
dateModifiedMs?: long
```

The modified time of asset. <br>Unit:milliseconds.

**Type:** long

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

## size

```TypeScript
size?: long
```

Size of photo asset.

**Type:** long

**Since:** 23

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

## dateAddedMs

```TypeScript
dateAddedMs: long
```

Time when the photo or video is added, in milliseconds.

**Type:** long

**Since:** 20

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

## strongAssociation

```TypeScript
strongAssociation: StrongAssociationType
```

Cloud-based enhancement flag for photos and videos.

**Type:** StrongAssociationType

**Since:** 20

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

## dateTakenMs

```TypeScript
dateTakenMs: long
```

Time when the photo or video is captured, in milliseconds.

**Type:** long

**Since:** 20

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

## dateTrashedMs

```TypeScript
dateTrashedMs: long
```

Time when the photo or video is deleted, in milliseconds.

**Type:** long

**Since:** 20

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

## position

```TypeScript
position?: PositionType
```

asset position.

**Type:** PositionType

**Since:** 23

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

## isFavorite

```TypeScript
isFavorite: boolean
```

Whether the image or video is added to favorites.

**Type:** boolean

**Since:** 20

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

## fileId

```TypeScript
fileId: int
```

Unique ID of the photo or video.

**Type:** int

**Since:** 20

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

