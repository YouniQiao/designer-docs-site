# PhotoAssetChangeInfos

Defines the photo asset change infos.

**起始版本：** 20

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

## 导入模块

```TypeScript
import { photoAccessHelper } from '@kit.MediaLibraryKit';
```

## assetChangeDatas

```TypeScript
assetChangeDatas: PhotoAssetChangeData[] | null
```

The changed asset datas.

**类型：** PhotoAssetChangeData[] | null

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

Notification type of photo asset.

**类型：** NotifyChangeType

**起始版本：** 20

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

