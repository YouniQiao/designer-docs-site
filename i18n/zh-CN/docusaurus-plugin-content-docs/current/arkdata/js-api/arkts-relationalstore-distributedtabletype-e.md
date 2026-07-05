# DistributedTableType

```TypeScript
enum DistributedTableType
```

Enumerates the distributed table types. Use the enum name rather than the enum value. This item is a database-level configuration. If a database contains multiple distributed tables, all tables must use the same distributed table type; switching the table type or upgrade tables is not supported.

**起始版本：** 23

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

## DEVICE_COLLABORATION

```TypeScript
DEVICE_COLLABORATION = 0
```

Multi-device collaboration table. Data on each device is stored in an independent distributed table in an isolated manner instead of being written to the local table. The name of the distributed table is formed by prepending the peer device's device ID to the original table name.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

## SINGLE_VERSION

```TypeScript
SINGLE_VERSION = 1
```

Single version table. Data is directly written to the local table of the peer device through the distributed data management framework.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

