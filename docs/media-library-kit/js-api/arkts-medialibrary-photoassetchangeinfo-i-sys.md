# PhotoAssetChangeInfo

Defines the photo asset info.

**Since:** 20

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## Modules to Import

```TypeScript
import { photoAccessHelper } from '@ohos.file.photoAccessHelper';
```

## albumChangeInfos

```TypeScript
albumChangeInfos?: AlbumChangeInfo[] | null
```

The analysis album change info.

**Type:** AlbumChangeInfo[] | null

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

## assetSourceType

```TypeScript
assetSourceType?: AssetSourceType
```

The asset source type. Default value: 0.

**Type:** AssetSourceType

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

## dateAddedMs

```TypeScript
dateAddedMs: number
```

Time when the photo or video is added, in milliseconds.

**Type:** number

**Since:** 20

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

## dateModifiedMs

```TypeScript
dateModifiedMs?: number
```

The modified time of asset. <br>Unit:milliseconds.

**Type:** number

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

## dateTakenMs

```TypeScript
dateTakenMs: number
```

Time when the photo or video is captured, in milliseconds.

**Type:** number

**Since:** 20

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

## dateTrashedMs

```TypeScript
dateTrashedMs: number
```

Time when the photo or video is deleted, in milliseconds.

**Type:** number

**Since:** 20

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

## displayName

```TypeScript
displayName?: string
```

Display name of photo asset.

**Type:** string

**Since:** 23

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

## fileId

```TypeScript
fileId: number
```

Unique ID of the photo or video.

**Type:** number

**Since:** 20

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

## hiddenTime

```TypeScript
hiddenTime?: number
```

The hidden time of asset. <br>Unit:milliseconds.

**Type:** number

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

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

## isHidden

```TypeScript
isHidden: boolean
```

Whether the photo or video is hidden.

**Type:** boolean

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

## size

```TypeScript
size?: number
```

Size of photo asset.

**Type:** number

**Since:** 23

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

## thumbnailVisible

```TypeScript
thumbnailVisible: ThumbnailVisibility
```

Whether the thumbnail is visible.

**Type:** ThumbnailVisibility

**Since:** 20

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

