# PhotoAssetChangeInfo

Defines the photo asset info.

**起始版本：** 20

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

## 导入模块

```TypeScript
import { photoAccessHelper } from '@kit.MediaLibraryKit';
```

## displayName

```TypeScript
displayName?: string
```

Display name of photo asset.

**类型：** string

**起始版本：** 23

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**系统接口：** 此接口为系统接口。

## dateDay

```TypeScript
dateDay: string
```

Date of the photo or video.

**类型：** string

**起始版本：** 20

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**系统接口：** 此接口为系统接口。

## mediaType

```TypeScript
mediaType: PhotoType
```

Media type of the photo or video.

**类型：** PhotoType

**起始版本：** 20

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

## hiddenTime

```TypeScript
hiddenTime?: long
```

The hidden time of asset. <br>Unit:milliseconds.

**类型：** long

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**系统接口：** 此接口为系统接口。

## albumUri

```TypeScript
albumUri: string
```

URI of the album that the image or video belongs to.

**类型：** string

**起始版本：** 20

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

## uri

```TypeScript
uri: string
```

URI of the photo or video.

**类型：** string

**起始版本：** 20

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

## assetSourceType

```TypeScript
assetSourceType?: AssetSourceType
```

The asset source type. Default value: 0.

**类型：** AssetSourceType

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**系统接口：** 此接口为系统接口。

## isHidden

```TypeScript
isHidden: boolean
```

Whether the photo or video is hidden.

**类型：** boolean

**起始版本：** 20

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**系统接口：** 此接口为系统接口。

## albumChangeInfos

```TypeScript
albumChangeInfos?: AlbumChangeInfo[] | null
```

The analysis album change info.

**类型：** AlbumChangeInfo[] | null

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**系统接口：** 此接口为系统接口。

## thumbnailVisible

```TypeScript
thumbnailVisible: ThumbnailVisibility
```

Whether the thumbnail is visible.

**类型：** ThumbnailVisibility

**起始版本：** 20

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**系统接口：** 此接口为系统接口。

## dateModifiedMs

```TypeScript
dateModifiedMs?: long
```

The modified time of asset. <br>Unit:milliseconds.

**类型：** long

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**系统接口：** 此接口为系统接口。

## size

```TypeScript
size?: long
```

Size of photo asset.

**类型：** long

**起始版本：** 23

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**系统接口：** 此接口为系统接口。

## dateAddedMs

```TypeScript
dateAddedMs: long
```

Time when the photo or video is added, in milliseconds.

**类型：** long

**起始版本：** 20

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**系统接口：** 此接口为系统接口。

## strongAssociation

```TypeScript
strongAssociation: StrongAssociationType
```

Cloud-based enhancement flag for photos and videos.

**类型：** StrongAssociationType

**起始版本：** 20

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**系统接口：** 此接口为系统接口。

## dateTakenMs

```TypeScript
dateTakenMs: long
```

Time when the photo or video is captured, in milliseconds.

**类型：** long

**起始版本：** 20

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**系统接口：** 此接口为系统接口。

## dateTrashedMs

```TypeScript
dateTrashedMs: long
```

Time when the photo or video is deleted, in milliseconds.

**类型：** long

**起始版本：** 20

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**系统接口：** 此接口为系统接口。

## position

```TypeScript
position?: PositionType
```

asset position.

**类型：** PositionType

**起始版本：** 23

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**系统接口：** 此接口为系统接口。

## isFavorite

```TypeScript
isFavorite: boolean
```

Whether the image or video is added to favorites.

**类型：** boolean

**起始版本：** 20

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**系统接口：** 此接口为系统接口。

## fileId

```TypeScript
fileId: int
```

Unique ID of the photo or video.

**类型：** int

**起始版本：** 20

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**系统接口：** 此接口为系统接口。

