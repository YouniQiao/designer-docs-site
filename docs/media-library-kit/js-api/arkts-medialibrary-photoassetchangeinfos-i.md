# PhotoAssetChangeInfos

Defines the photo asset change infos.

**Since:** 20

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## Modules to Import

```TypeScript
import { photoAccessHelper } from '@kit.MediaLibraryKit';
```

## assetChangeDatas

```TypeScript
assetChangeDatas: PhotoAssetChangeData[] | null
```

The changed asset datas.

**Type:** PhotoAssetChangeData[] | null

**Since:** 20

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## isForRecheck

```TypeScript
isForRecheck: boolean
```

Whether the application needs to requery. This flag helps address abnormal scenarios like abnormal
service restarts by enabling the application to refresh the page correctly through proactive querying.

**Type:** boolean

**Since:** 20

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## type

```TypeScript
type: NotifyChangeType
```

Notification type of photo asset.

**Type:** NotifyChangeType

**Since:** 20

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

