# SyncMode

```TypeScript
enum SyncMode
```

Enumerates the sync modes.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.data.distributedKVStore.SyncMode

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

## PULL_ONLY

```TypeScript
PULL_ONLY = 0
```

Pull data from the peer end to the local end only.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.data.distributedKVStore.SyncMode#PULL_ONLY

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

## PUSH_ONLY

```TypeScript
PUSH_ONLY = 1
```

Push data from the local end to the peer end only.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.data.distributedKVStore.SyncMode#PUSH_ONLY

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

## PUSH_PULL

```TypeScript
PUSH_PULL = 2
```

Push data from the local end to the peer end and then pull data from the peer end to the local end.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.data.distributedKVStore.SyncMode#PUSH_PULL

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

