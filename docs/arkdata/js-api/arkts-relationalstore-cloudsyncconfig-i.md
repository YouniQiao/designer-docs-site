# CloudSyncConfig

Cloud sync configuration.

**Since:** 26.0.0

**System capability:** SystemCapability.DistributedDataManager.CloudSync.Client

## Modules to Import

```TypeScript
import { relationalStore } from '@kit.ArkData';
```

## mode

```TypeScript
mode: SyncMode
```

Indicates the database synchronization mode.

**Type:** SyncMode

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.DistributedDataManager.CloudSync.Client

## predicate

```TypeScript
predicate?: RdbPredicates
```

Indicates the table-level synchronization predicate.

**Type:** RdbPredicates

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.DistributedDataManager.CloudSync.Client

## enablePredicate

```TypeScript
enablePredicate?: boolean
```

Indicates the table-level synchronization switch.

**Type:** boolean

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.DistributedDataManager.CloudSync.Client

## downloadOnly

```TypeScript
downloadOnly?: boolean
```

Indicates whether the sync operation should be download‑only.

**Type:** boolean

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.DistributedDataManager.CloudSync.Client

**System API:** This is a system API.

