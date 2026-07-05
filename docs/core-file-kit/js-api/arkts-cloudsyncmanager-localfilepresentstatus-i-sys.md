# LocalFilePresentStatus

检测结果对象，包含应用包名及其在云盘存储空间内是否存在未上云文件的状态信息。

**Since:** 23

**System capability:** SystemCapability.FileManagement.DistributedFileService.CloudSyncManager

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { cloudSyncManager } from '@kit.CoreFileKit';
```

## isLocalFilePresent

```TypeScript
isLocalFilePresent: boolean
```

该应用在云盘存储空间内是否存在尚未同步至云端的本地文件。true 表示存在， false 表示不存在。

**Type:** boolean

**Since:** 23

**System capability:** SystemCapability.FileManagement.DistributedFileService.CloudSyncManager

**System API:** This is a system API.

## bundleName

```TypeScript
bundleName: string
```

应用包名。

**Type:** string

**Since:** 23

**System capability:** SystemCapability.FileManagement.DistributedFileService.CloudSyncManager

**System API:** This is a system API.

