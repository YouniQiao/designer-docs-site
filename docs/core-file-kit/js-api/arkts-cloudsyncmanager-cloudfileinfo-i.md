# CloudFileInfo

应用本地和云端文件个数以及大小信息。

**Since:** 20

**System capability:** SystemCapability.FileManagement.DistributedFileService.CloudSyncManager

## Modules to Import

```TypeScript
import { cloudSyncManager } from '@kit.CoreFileKit';
```

## localFileTotalSize

```TypeScript
localFileTotalSize: long
```

本地未上传云端的文件总大小，取值范围[0, INT64_MAX]，单位：Byte。

**Type:** long

**Since:** 20

**System capability:** SystemCapability.FileManagement.DistributedFileService.CloudSyncManager

## bothFileTotalSize

```TypeScript
bothFileTotalSize: long
```

本地已上传云端的文件总大小，取值范围[0, INT64_MAX]，单位：Byte。

**Type:** long

**Since:** 20

**System capability:** SystemCapability.FileManagement.DistributedFileService.CloudSyncManager

## bothFileCount

```TypeScript
bothFileCount: int
```

本地已上传云端的文件总个数，取值范围[0, INT32_MAX]，单位：个。

**Type:** int

**Since:** 20

**System capability:** SystemCapability.FileManagement.DistributedFileService.CloudSyncManager

## cloudFileCount

```TypeScript
cloudFileCount: int
```

本地未下载的云端文件总个数，取值范围[0, INT32_MAX]，单位：个。

**Type:** int

**Since:** 20

**System capability:** SystemCapability.FileManagement.DistributedFileService.CloudSyncManager

## cloudFileTotalSize

```TypeScript
cloudFileTotalSize: long
```

本地未下载的云端文件总大小，取值范围[0, INT64_MAX]，单位：Byte。

**Type:** long

**Since:** 20

**System capability:** SystemCapability.FileManagement.DistributedFileService.CloudSyncManager

## localFileCount

```TypeScript
localFileCount: int
```

本地未上传云端的文件总个数，取值范围[0, INT32_MAX]，单位：个。

**Type:** int

**Since:** 20

**System capability:** SystemCapability.FileManagement.DistributedFileService.CloudSyncManager

