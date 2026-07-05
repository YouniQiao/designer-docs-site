# DownloadProgress

全量下载任务的进度信息。

**Since:** 20

**System capability:** SystemCapability.FileManagement.DistributedFileService.CloudSyncManager

## Modules to Import

```TypeScript
import { cloudSyncManager } from '@kit.CoreFileKit';
```

## stopReason

```TypeScript
stopReason: DownloadStopReason
```

下载停止的原因。

**Type:** DownloadStopReason

**Since:** 20

**System capability:** SystemCapability.FileManagement.DistributedFileService.CloudSyncManager

## totalSize

```TypeScript
totalSize: long
```

需要下载文件的总大小，取值范围[0, INT64_MAX)，单位：Byte。进度异常时返回INT64_MAX。

**Type:** long

**Since:** 20

**System capability:** SystemCapability.FileManagement.DistributedFileService.CloudSyncManager

## failedCount

```TypeScript
failedCount: int
```

下载失败的文件个数，取值范围[0, INT32_MAX]，单位：个。进度异常时返回-1。

**Type:** int

**Since:** 20

**System capability:** SystemCapability.FileManagement.DistributedFileService.CloudSyncManager

## successfulCount

```TypeScript
successfulCount: int
```

已下载的文件个数，取值范围[0, INT32_MAX]，单位：个。进度异常时返回-1。

**Type:** int

**Since:** 20

**System capability:** SystemCapability.FileManagement.DistributedFileService.CloudSyncManager

## state

```TypeScript
state: DownloadState
```

下载任务的状态。

**Type:** DownloadState

**Since:** 20

**System capability:** SystemCapability.FileManagement.DistributedFileService.CloudSyncManager

## totalCount

```TypeScript
totalCount: int
```

待下载文件总个数，取值范围[0, INT32_MAX]，单位：个。进度异常时返回-1。

**Type:** int

**Since:** 20

**System capability:** SystemCapability.FileManagement.DistributedFileService.CloudSyncManager

## downloadedSize

```TypeScript
downloadedSize: long
```

已下载数据大小，取值范围[0, INT64_MAX)，单位：Byte。进度异常时返回INT64_MAX。

**Type:** long

**Since:** 20

**System capability:** SystemCapability.FileManagement.DistributedFileService.CloudSyncManager

