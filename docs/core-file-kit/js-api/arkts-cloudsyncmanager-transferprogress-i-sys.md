# TransferProgress

搬迁任务的进度信息。

**Since:** 26.0.0

**System capability:** SystemCapability.FileManagement.DistributedFileService.CloudSyncManager

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { cloudSyncManager } from '@kit.CoreFileKit';
```

## stopReason

```TypeScript
stopReason: TransferStopReason
```

搬迁停止的原因。

**Type:** TransferStopReason

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.FileManagement.DistributedFileService.CloudSyncManager

**System API:** This is a system API.

## transferredSize

```TypeScript
transferredSize: long
```

已搬迁的数据大小，取值范围[0, INT64_MAX)，单位：Byte。进度异常时返回INT64_MAX。

**Type:** long

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.FileManagement.DistributedFileService.CloudSyncManager

**System API:** This is a system API.

## totalSize

```TypeScript
totalSize: long
```

需要搬迁的文件总大小，取值范围[0, INT64_MAX)，单位：Byte。进度异常时返回INT64_MAX。

**Type:** long

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.FileManagement.DistributedFileService.CloudSyncManager

**System API:** This is a system API.

## failedCount

```TypeScript
failedCount: int
```

搬迁失败的文件个数，取值范围[0, INT32_MAX]，单位：个。进度异常时返回-1。

**Type:** int

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.FileManagement.DistributedFileService.CloudSyncManager

**System API:** This is a system API.

## successfulCount

```TypeScript
successfulCount: int
```

已搬迁的文件个数，取值范围[0, INT32_MAX]，单位：个。进度异常时返回-1。

**Type:** int

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.FileManagement.DistributedFileService.CloudSyncManager

**System API:** This is a system API.

## state

```TypeScript
state: TransferState
```

搬迁任务的状态。

**Type:** TransferState

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.FileManagement.DistributedFileService.CloudSyncManager

**System API:** This is a system API.

## totalCount

```TypeScript
totalCount: int
```

待搬迁文件总个数，取值范围[0, INT32_MAX]，单位：个。进度异常时返回-1。

**Type:** int

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.FileManagement.DistributedFileService.CloudSyncManager

**System API:** This is a system API.

