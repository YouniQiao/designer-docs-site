# SyncInfo

端云同步信息，包含最近一次端云同步的时间、结果和状态。

**Since:** 12

**System capability:** SystemCapability.DistributedDataManager.CloudSync.Config

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { cloudData } from '@kit.ArkData';
```

## finishTime

```TypeScript
finishTime: Date
```

最近一次端云同步的结束时间。

**Type:** Date

**Since:** 12

**System capability:** SystemCapability.DistributedDataManager.CloudSync.Config

**System API:** This is a system API.

## code

```TypeScript
code: relationalStore.ProgressCode
```

最近一次端云同步的结果。

**Type:** relationalStore.ProgressCode

**Since:** 12

**System capability:** SystemCapability.DistributedDataManager.CloudSync.Config

**System API:** This is a system API.

## startTime

```TypeScript
startTime: Date
```

最近一次端云同步的开始时间。

**Type:** Date

**Since:** 12

**System capability:** SystemCapability.DistributedDataManager.CloudSync.Config

**System API:** This is a system API.

## syncStatus

```TypeScript
syncStatus?: SyncStatus
```

最近一次端云同步的状态，默认值为cloudData.SyncStatus.RUNNING。

**Type:** SyncStatus

**Since:** 18

**System capability:** SystemCapability.DistributedDataManager.CloudSync.Config

**System API:** This is a system API.

