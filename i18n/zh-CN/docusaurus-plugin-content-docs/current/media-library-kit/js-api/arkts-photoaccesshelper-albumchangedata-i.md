# AlbumChangeData

Defines the album change data.

**起始版本：** 20

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

## 导入模块

```TypeScript
import { photoAccessHelper } from '@kit.MediaLibraryKit';
```

## albumBeforeChange

```TypeScript
albumBeforeChange: AlbumChangeInfo | null
```

Album before change.

**类型：** AlbumChangeInfo | null

**起始版本：** 20

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

## version

```TypeScript
version: long
```

Version of the album information. It is used to determine the sequence of notifications.

**类型：** long

**起始版本：** 20

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**系统接口：** 此接口为系统接口。

## albumAfterChange

```TypeScript
albumAfterChange: AlbumChangeInfo | null
```

Album after change.

**类型：** AlbumChangeInfo | null

**起始版本：** 20

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

