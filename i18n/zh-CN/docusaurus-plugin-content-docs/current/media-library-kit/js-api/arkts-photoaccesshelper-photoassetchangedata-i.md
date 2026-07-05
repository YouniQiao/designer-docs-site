# PhotoAssetChangeData

Defines the photo or video change data.

**起始版本：** 20

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

## 导入模块

```TypeScript
import { photoAccessHelper } from '@kit.MediaLibraryKit';
```

## isContentChanged

```TypeScript
isContentChanged: boolean
```

Whether the content of a photo or video changes. It is used to distinguish between attribute changes and content changes of a photo or video.

**类型：** boolean

**起始版本：** 20

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

## isDeleted

```TypeScript
isDeleted: boolean
```

Whether the photo or video is permanently completely.

**类型：** boolean

**起始版本：** 20

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

## assetAfterChange

```TypeScript
assetAfterChange: PhotoAssetChangeInfo | null
```

Photo or video information after change.

**类型：** PhotoAssetChangeInfo | null

**起始版本：** 20

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

## version

```TypeScript
version: long
```

Version of the photo or video information. It is used to determine the sequence of notifications.

**类型：** long

**起始版本：** 20

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**系统接口：** 此接口为系统接口。

## thumbnailChangeStatus

```TypeScript
thumbnailChangeStatus: ThumbnailChangeStatus
```

Change status of the thumbnail corresponding to the photo or video.

**类型：** ThumbnailChangeStatus

**起始版本：** 20

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**系统接口：** 此接口为系统接口。

## assetBeforeChange

```TypeScript
assetBeforeChange: PhotoAssetChangeInfo | null
```

Photo or video information before change.

**类型：** PhotoAssetChangeInfo | null

**起始版本：** 20

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

