# CloudSyncConfig

Cloud sync configuration.

**Since:** 26.0.0

**System capability:** SystemCapability.DistributedDataManager.CloudSync.Client

## Modules to Import

```TypeScript
import { relationalStore } from '@ohos.data.relationalStore';
```

## enablePredicate

```TypeScript
enablePredicate?: boolean
```

Indicates the table-level synchronization switch.

**Type:** boolean

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.DistributedDataManager.CloudSync.Client

## mode

```TypeScript
mode: SyncMode
```

Indicates the database synchronization mode.

**Type:** SyncMode

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.DistributedDataManager.CloudSync.Client

## predicate

```TypeScript
predicate?: RdbPredicates
```

Indicates the table-level synchronization predicate.

**Type:** RdbPredicates

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.DistributedDataManager.CloudSync.Client

