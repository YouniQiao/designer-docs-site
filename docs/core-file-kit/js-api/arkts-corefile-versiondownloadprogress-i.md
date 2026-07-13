# VersionDownloadProgress

Represents the download state and progress information of historical version files when the
[downloadHistoryVersion](arkts-corefile-fileversion-c.md#downloadhistoryversion-1) method of the
[FileVersion](arkts-corefile-fileversion-c.md) class is called.

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

Type of the error returned when the batch download fails.

**Type:** DownloadErrorType

**Since:** 20

**System capability:** SystemCapability.FileManagement.DistributedFileService.CloudSync.Core

## progress

```TypeScript
progress: number
```

Download progress, in percentage.

**Type:** number

**Since:** 20

**System capability:** SystemCapability.FileManagement.DistributedFileService.CloudSync.Core

## state

```TypeScript
state: State
```

Download state of the cloud file of the selected version.

**Type:** State

**Since:** 20

**System capability:** SystemCapability.FileManagement.DistributedFileService.CloudSync.Core

