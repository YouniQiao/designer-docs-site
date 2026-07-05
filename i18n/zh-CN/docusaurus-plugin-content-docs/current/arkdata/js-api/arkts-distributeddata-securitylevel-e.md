# SecurityLevel

```TypeScript
enum SecurityLevel
```

Enumerates the KV store security levels.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.data.distributedKVStore.SecurityLevel

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

## NO_LEVEL

```TypeScript
NO_LEVEL = 0
```

No security level is set for the KV store (deprecated).

**起始版本：** 7

**废弃版本：** 9

**系统能力：** SystemCapability.DistributedDataManager.KVStore.DistributedKVStore

## S0

```TypeScript
S0 = 1
```

The KV store security level is public (deprecated).

**起始版本：** 7

**废弃版本：** 9

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

## S1

```TypeScript
S1 = 2
```

Low security level. If data leakage occurs, minor impact will be caused. For example, a KV store that contains system data such as wallpapers.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.data.distributedKVStore.SecurityLevel#S1

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

## S2

```TypeScript
S2 = 3
```

Medium security level. If data leakage occurs, moderate impact will be caused. For example, a KV store that contains information created by users or call records, such as audio or video clips.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.data.distributedKVStore.SecurityLevel#S2

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

## S3

```TypeScript
S3 = 5
```

High security level. If data leakage occurs, major impact will be caused. For example, a KV store that contains information such as user fitness, health, and location data.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.data.distributedKVStore.SecurityLevel#S3

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

## S4

```TypeScript
S4 = 6
```

Critical security level. If data leakage occurs, severe impact will be caused. For example, a KV store that contains information such as authentication credentials and financial data.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.data.distributedKVStore.SecurityLevel#S4

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

