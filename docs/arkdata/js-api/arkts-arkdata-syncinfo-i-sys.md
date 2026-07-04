# SyncInfo (System API)

Represents information about the last device-cloud sync.

**Since:** 12

**System capability:** SystemCapability.DistributedDataManager.CloudSync.Config

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { cloudData } from '@ohos.data.cloudData';
```

## code

```TypeScript
code: relationalStore.ProgressCode
```

Result of the last device-cloud sync.

**Type:** relationalStore.ProgressCode

**Since:** 12

**System capability:** SystemCapability.DistributedDataManager.CloudSync.Config

**System API:** This is a system API.

## finishTime

```TypeScript
finishTime: Date
```

End time of the last device-cloud sync.

**Type:** Date

**Since:** 12

**System capability:** SystemCapability.DistributedDataManager.CloudSync.Config

**System API:** This is a system API.

## startTime

```TypeScript
startTime: Date
```

Start time of the last device-cloud sync.

**Type:** Date

**Since:** 12

**System capability:** SystemCapability.DistributedDataManager.CloudSync.Config

**System API:** This is a system API.

## syncStatus

```TypeScript
syncStatus?: SyncStatus
```

Status of the last device-cloud sync. The default value is **cloudData.SyncStatus.RUNNING**.

**Type:** SyncStatus

**Since:** 18

**System capability:** SystemCapability.DistributedDataManager.CloudSync.Config

**System API:** This is a system API.

