# RebuildType

```TypeScript
enum RebuildType
```

Enumerates the RDB store rebuild types. Use the enum name rather than the enum value.

**起始版本：** 12

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

## NONE

```TypeScript
NONE = 0
```

The RDB store is not rebuilt.

**起始版本：** 12

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

## REBUILT

```TypeScript
REBUILT = 1
```

The RDB store is rebuilt and creates an empty database. You need to create tables and restore data.

**起始版本：** 12

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

## REPAIRED

```TypeScript
REPAIRED = 2
```

The database is repaired and the undamaged data is restored. Currently, only the [vector store](arkts-relationalstore-storeconfig-i.md#StoreConfig) supports this capability.

**起始版本：** 12

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

