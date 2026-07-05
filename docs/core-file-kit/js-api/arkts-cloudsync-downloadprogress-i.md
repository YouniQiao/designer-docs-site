# DownloadProgress

云文件下载过程。

**Since:** 11

**System capability:** SystemCapability.FileManagement.DistributedFileService.CloudSync.Core

## Modules to Import

```TypeScript
import { cloudSync } from '@kit.CoreFileKit';
```

## processed

```TypeScript
processed: long
```

已下载数据大小，取值范围[0，9223372036854775807]（单位：Byte）。

**Type:** long

**Since:** 11

**System capability:** SystemCapability.FileManagement.DistributedFileService.CloudSync.Core

## size

```TypeScript
size: long
```

当前云文件大小，取值范围[0，9223372036854775807]（单位：Byte）。

**Type:** long

**Since:** 11

**System capability:** SystemCapability.FileManagement.DistributedFileService.CloudSync.Core

## state

```TypeScript
state: State
```

枚举值，云文件下载状态。

**Type:** State

**Since:** 11

**System capability:** SystemCapability.FileManagement.DistributedFileService.CloudSync.Core

## error

```TypeScript
error: DownloadErrorType
```

下载的错误类型。

**Type:** DownloadErrorType

**Since:** 11

**System capability:** SystemCapability.FileManagement.DistributedFileService.CloudSync.Core

## uri

```TypeScript
uri: string
```

当前云文件URI。

**Type:** string

**Since:** 11

**System capability:** SystemCapability.FileManagement.DistributedFileService.CloudSync.Core

