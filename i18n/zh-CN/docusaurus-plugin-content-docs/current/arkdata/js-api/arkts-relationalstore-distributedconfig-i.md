# DistributedConfig

Defines a struct for distributed configuration of a table.

**起始版本：** 10

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

## 导入模块

```TypeScript
import { relationalStore } from '@kit.ArkData';
```

## assetConflictPolicy

```TypeScript
assetConflictPolicy?: AssetConflictPolicy
```

Specifies the asset conflict policy.

**类型：** AssetConflictPolicy

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

## tableType

```TypeScript
tableType?: DistributedTableType
```

Distributed table type. **DEVICE_COLLABORATION** indicates the device collaboration table, and **SINGLE_VERSION** indicates the single version table. For cross-device data sync, the default value is **DEVICE_COLLABORATION**. For device-cloud data sync, the default value is **SINGLE_VERSION**, and **DEVICE_COLLABORATION** is not supported.

**类型：** DistributedTableType

**起始版本：** 23

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

## assetDownloadOnDemand

```TypeScript
assetDownloadOnDemand?: boolean
```

Specifies whether to download assets on demand.

**类型：** boolean

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

## references

```TypeScript
references?: Array<Reference>
```

Specifies the reference relationships between tables.

**类型：** Array<Reference>

**起始版本：** 11

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**系统接口：** 此接口为系统接口。

## enableCloud

```TypeScript
enableCloud?: boolean
```

Whether to enable device-cloud sync for this RDB store. The value **true** means to enable device-cloud sync; **false** means the opposite. The default value is **true**.

**类型：** boolean

**起始版本：** 18

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

## autoSyncSwitch

```TypeScript
autoSyncSwitch?: boolean
```

Specifies the auto synchronization switch.

**类型：** boolean

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

## assetTempPath

```TypeScript
assetTempPath?: string
```

Specifies the asset temp path.

**类型：** string

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

## autoSync

```TypeScript
autoSync: boolean
```

Whether the table supports automatic device-cloud synchronization. If the value is **true**, the system can automatically trigger device-cloud sync. If the value is **false**, the system cannot automatically trigger device-cloud sync, and the [cloudSync] {@link @ohos.data.relationalStore:relationalStore.RdbStore.cloudSync(mode: SyncMode, tables: string[])} API needs to be called to trigger device-cloud sync.

**类型：** boolean

**起始版本：** 10

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

## asyncDownloadAsset

```TypeScript
asyncDownloadAsset?: boolean
```

Whether to download assets synchronously or asynchronously when device-cloud sync is being performed for the current RDB store. The value **true** means to use an asynchronous task to download assets after all data is downloaded; **false** means to download assets synchronously. Default value: **false**.

**类型：** boolean

**起始版本：** 18

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

