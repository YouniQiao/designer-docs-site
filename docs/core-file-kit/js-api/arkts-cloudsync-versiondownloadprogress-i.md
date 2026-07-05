# VersionDownloadProgress

历史版本文件下载状态和进度信息，调用端云文件版本管理类[FileVersion]cloudSync.FileVersion的 [downloadHistoryVersion]cloudSync.FileVersion.downloadHistoryVersion方法时，回调函数的入参类型。

**Since:** 20

**System capability:** SystemCapability.FileManagement.DistributedFileService.CloudSync.Core

## Modules to Import

```TypeScript
import { cloudSync } from '@kit.CoreFileKit';
```

## errType

```TypeScript
errType: DownloadErrorType
```

返回批量缓存任务执行失败时的错误类型。

**Type:** DownloadErrorType

**Since:** 20

**System capability:** SystemCapability.FileManagement.DistributedFileService.CloudSync.Core

## progress

```TypeScript
progress: int
```

下载进度，单位：百分比。

**Type:** int

**Since:** 20

**System capability:** SystemCapability.FileManagement.DistributedFileService.CloudSync.Core

## state

```TypeScript
state: State
```

所选版本云文件的下载状态。

**Type:** State

**Since:** 20

**System capability:** SystemCapability.FileManagement.DistributedFileService.CloudSync.Core

