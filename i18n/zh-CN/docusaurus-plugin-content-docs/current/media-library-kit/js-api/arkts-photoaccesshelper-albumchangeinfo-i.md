# AlbumChangeInfo

Defines the detailed attributes of an album.

**起始版本：** 20

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

## 导入模块

```TypeScript
import { photoAccessHelper } from '@kit.MediaLibraryKit';
```

## imageCount

```TypeScript
imageCount: int
```

Total number of photos in the album.

**类型：** int

**起始版本：** 20

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

## albumName

```TypeScript
albumName: string
```

Album name.

**类型：** string

**起始版本：** 20

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

## hiddenCount

```TypeScript
hiddenCount: int
```

Total number of hidden photos and videos in the album.

**类型：** int

**起始版本：** 20

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**系统接口：** 此接口为系统接口。

## hidden

```TypeScript
hidden?: boolean
```

hidden state of the album.

**类型：** boolean

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**系统接口：** 此接口为系统接口。

## count

```TypeScript
count: int
```

Total number of photos and videos in the album.

**类型：** int

**起始版本：** 20

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

## hiddenCoverUri

```TypeScript
hiddenCoverUri: string
```

Cover of hidden assets in the album.

**类型：** string

**起始版本：** 20

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**系统接口：** 此接口为系统接口。

## orderSection

```TypeScript
orderSection?: int
```

The order section of album asset.

**类型：** int

**起始版本：** 23

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**系统接口：** 此接口为系统接口。

## albumUri

```TypeScript
albumUri: string
```

Album URI.

**类型：** string

**起始版本：** 20

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

## videoCount

```TypeScript
videoCount: int
```

Total number of videos in the album.

**类型：** int

**起始版本：** 20

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

## albumOrder

```TypeScript
albumOrder?: int
```

The album order of album asset.

**类型：** int

**起始版本：** 23

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**系统接口：** 此接口为系统接口。

## isHiddenCoverChanged

```TypeScript
isHiddenCoverChanged: boolean
```

Whether the cover of hidden assets in the album is changed. It is used to distinguish between attribute changes and content changes of a cover asset.

**类型：** boolean

**起始版本：** 20

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**系统接口：** 此接口为系统接口。

## lpath

```TypeScript
lpath?: string
```

The virtual path of album.

**类型：** string

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**系统接口：** 此接口为系统接口。

## albumType

```TypeScript
albumType: AlbumType
```

Album type.

**类型：** AlbumType

**起始版本：** 20

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

## isCoverChanged

```TypeScript
isCoverChanged: boolean
```

Whether the album cover content is changed. It is used to distinguish between attribute changes and content changes of a photo.

**类型：** boolean

**起始版本：** 20

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**系统接口：** 此接口为系统接口。

## coverUri

```TypeScript
coverUri: string
```

Cover URI.

**类型：** string

**起始版本：** 20

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

## albumSubtype

```TypeScript
albumSubtype: AlbumSubtype
```

Subtype of the album.

**类型：** AlbumSubtype

**起始版本：** 20

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

## coverInfo

```TypeScript
coverInfo?: PhotoAssetChangeInfo
```

Detailed asset change information of the cover.

**类型：** PhotoAssetChangeInfo

**起始版本：** 20

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**系统接口：** 此接口为系统接口。

## hiddenCoverInfo

```TypeScript
hiddenCoverInfo?: PhotoAssetChangeInfo
```

Cover changes of hidden assets in the album.

**类型：** PhotoAssetChangeInfo

**起始版本：** 20

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**系统接口：** 此接口为系统接口。

