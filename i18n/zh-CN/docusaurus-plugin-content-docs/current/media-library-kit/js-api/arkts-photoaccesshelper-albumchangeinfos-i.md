# AlbumChangeInfos

Defines the album change infos.

**起始版本：** 20

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

## 导入模块

```TypeScript
import { photoAccessHelper } from '@kit.MediaLibraryKit';
```

## albumChangeDatas

```TypeScript
albumChangeDatas: AlbumChangeData[] | null
```

Data about album changes.

**类型：** AlbumChangeData[] | null

**起始版本：** 20

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

## isForRecheck

```TypeScript
isForRecheck: boolean
```

Whether the application needs to requery. This flag helps address abnormal scenarios like abnormal service restarts by enabling the application to refresh the page correctly through proactive querying.

**类型：** boolean

**起始版本：** 20

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

## type

```TypeScript
type: NotifyChangeType
```

Notification type of album changes.

**类型：** NotifyChangeType

**起始版本：** 20

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

