# SyncResultCode

```TypeScript
enum SyncResultCode
```

Describes the status of device sync.

**起始版本：** 26.0.0

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

## SUCCESS

```TypeScript
SUCCESS = 0
```

Indicates sync success.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

## FAIL

```TypeScript
FAIL = 1
```

Indicates sync fail, for detailed reasons, please refer to the message.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

## OFFLINE

```TypeScript
OFFLINE = 2
```

Indicates that the device is offline.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

## INVALID_ARGS

```TypeScript
INVALID_ARGS = 3
```

Indicates parameter is invalid.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

## DISTRIBUTED_TABLE_NOT_SET

```TypeScript
DISTRIBUTED_TABLE_NOT_SET = 4
```

Indicates that a distributed table is not set.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

## TABLE_FIELD_MISMATCH

```TypeScript
TABLE_FIELD_MISMATCH = 5
```

Indicates that the synchronization field of the peer device is inconsistent with that of the local device.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

## DISTRIBUTED_SCHEMA_MISMATCH

```TypeScript
DISTRIBUTED_SCHEMA_MISMATCH = 6
```

Indicates that the schema field of the peer device is inconsistent with that of the local device.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

## BUSY

```TypeScript
BUSY = 7
```

Indicates that the database is busy.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

## CORRUPTED

```TypeScript
CORRUPTED = 8
```

Indicates that the database is corrupted.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

## TIMEOUT

```TypeScript
TIMEOUT = 9
```

Indicates synchronization timeout.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

## SCHEMA_CHANGED

```TypeScript
SCHEMA_CHANGED = 10
```

Indicates that the table structure changed during the synchronization process.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

## CONSTRAINT_VIOLATION

```TypeScript
CONSTRAINT_VIOLATION = 11
```

Indicates a violation of constraints when synchronizing data.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

