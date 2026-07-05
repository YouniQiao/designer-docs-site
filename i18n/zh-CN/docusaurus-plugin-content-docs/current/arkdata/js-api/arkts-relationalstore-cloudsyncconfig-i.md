# CloudSyncConfig

Cloud sync configuration.

**起始版本：** 26.0.0

**系统能力：** SystemCapability.DistributedDataManager.CloudSync.Client

## 导入模块

```TypeScript
import { relationalStore } from '@kit.ArkData';
```

## mode

```TypeScript
mode: SyncMode
```

Indicates the database synchronization mode.

**类型：** SyncMode

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.CloudSync.Client

## predicate

```TypeScript
predicate?: RdbPredicates
```

Indicates the table-level synchronization predicate.

**类型：** RdbPredicates

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.CloudSync.Client

## enablePredicate

```TypeScript
enablePredicate?: boolean
```

Indicates the table-level synchronization switch.

**类型：** boolean

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.CloudSync.Client

## downloadOnly

```TypeScript
downloadOnly?: boolean
```

Indicates whether the sync operation should be download‑only.

**类型：** boolean

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.CloudSync.Client

**系统接口：** 此接口为系统接口。

