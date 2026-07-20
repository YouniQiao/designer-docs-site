# PhotoAssetChangeInfo

Describes the information about a media asset.

**Since:** 20

<!--Device-photoAccessHelper-interface PhotoAssetChangeInfo--><!--Device-photoAccessHelper-interface PhotoAssetChangeInfo-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## Modules to Import

```TypeScript
import { photoAccessHelper } from '@kit.MediaLibraryKit';
```

## albumChangeInfos

```TypeScript
albumChangeInfos?: AlbumChangeInfo[] | null
```

Smart album change information.

**Type:** AlbumChangeInfo[] | null

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

<!--Device-PhotoAssetChangeInfo-albumChangeInfos?: AlbumChangeInfo[] | null--><!--Device-PhotoAssetChangeInfo-albumChangeInfos?: AlbumChangeInfo[] | null-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

## assetSourceType

```TypeScript
assetSourceType?: AssetSourceType
```

The asset source type.Default value: 0.

**Type:** AssetSourceType

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-PhotoAssetChangeInfo-assetSourceType?: AssetSourceType--><!--Device-PhotoAssetChangeInfo-assetSourceType?: AssetSourceType-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

## dateAddedMs

```TypeScript
dateAddedMs: number
```

Unix timestamp when the media asset was created, in milliseconds.

**Type:** number

**Since:** 20

<!--Device-PhotoAssetChangeInfo-dateAddedMs: long--><!--Device-PhotoAssetChangeInfo-dateAddedMs: long-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

## dateDay

```TypeScript
dateDay: string
```

Date when the media asset was created.

**Type:** string

**Since:** 20

<!--Device-PhotoAssetChangeInfo-dateDay: string--><!--Device-PhotoAssetChangeInfo-dateDay: string-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

## dateModifiedMs

```TypeScript
dateModifiedMs?: number
```

The modified time of asset.<br>Unit:milliseconds.

**Type:** number

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-PhotoAssetChangeInfo-dateModifiedMs?: long--><!--Device-PhotoAssetChangeInfo-dateModifiedMs?: long-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

## dateTakenMs

```TypeScript
dateTakenMs: number
```

Unix timestamp when the media asset was captured, in milliseconds.

**Type:** number

**Since:** 20

<!--Device-PhotoAssetChangeInfo-dateTakenMs: long--><!--Device-PhotoAssetChangeInfo-dateTakenMs: long-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

## dateTrashedMs

```TypeScript
dateTrashedMs: number
```

Unix timestamp when the media asset was deleted, in milliseconds.

**Type:** number

**Since:** 20

<!--Device-PhotoAssetChangeInfo-dateTrashedMs: long--><!--Device-PhotoAssetChangeInfo-dateTrashedMs: long-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

## displayName

```TypeScript
displayName?: string
```

Display name of the media asset.

**Type:** string

**Since:** 23

<!--Device-PhotoAssetChangeInfo-displayName?: string--><!--Device-PhotoAssetChangeInfo-displayName?: string-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

## fileId

```TypeScript
fileId: number
```

ID of the media asset.

**Type:** number

**Since:** 20

<!--Device-PhotoAssetChangeInfo-fileId: int--><!--Device-PhotoAssetChangeInfo-fileId: int-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

## hiddenTime

```TypeScript
hiddenTime?: number
```

The hidden time of asset.<br>Unit:milliseconds.

**Type:** number

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-PhotoAssetChangeInfo-hiddenTime?: long--><!--Device-PhotoAssetChangeInfo-hiddenTime?: long-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

## isFavorite

```TypeScript
isFavorite: boolean
```

Whether the media asset is marked as a favorite. **true** if marked, **false** otherwise.

**Type:** boolean

**Since:** 26.0.0

<!--Device-PhotoAssetChangeInfo-isFavorite: boolean--><!--Device-PhotoAssetChangeInfo-isFavorite: boolean-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

## isHidden

```TypeScript
isHidden: boolean
```

Whether the media asset is hidden. **true** if hidden, **false** otherwise.

**Type:** boolean

**Since:** 20

<!--Device-PhotoAssetChangeInfo-isHidden: boolean--><!--Device-PhotoAssetChangeInfo-isHidden: boolean-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

## position

```TypeScript
position?: PositionType
```

Position of the media asset.

**Type:** PositionType

**Since:** 23

<!--Device-PhotoAssetChangeInfo-position?: PositionType--><!--Device-PhotoAssetChangeInfo-position?: PositionType-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

## size

```TypeScript
size?: number
```

File size of the media asset, in bytes. The size of a moving photo includes the total size of the image and video.

**Type:** number

**Since:** 23

<!--Device-PhotoAssetChangeInfo-size?: long--><!--Device-PhotoAssetChangeInfo-size?: long-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

## strongAssociation

```TypeScript
strongAssociation: StrongAssociationType
```

Strong association type of the media asset.

**Type:** StrongAssociationType

**Since:** 20

<!--Device-PhotoAssetChangeInfo-strongAssociation: StrongAssociationType--><!--Device-PhotoAssetChangeInfo-strongAssociation: StrongAssociationType-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

## thumbnailVisible

```TypeScript
thumbnailVisible: ThumbnailVisibility
```

Accessibility status of the thumbnail.

**Type:** ThumbnailVisibility

**Since:** 20

<!--Device-PhotoAssetChangeInfo-thumbnailVisible: ThumbnailVisibility--><!--Device-PhotoAssetChangeInfo-thumbnailVisible: ThumbnailVisibility-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

