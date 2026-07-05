# KVStoreType

```TypeScript
enum KVStoreType
```

Enumerates the KV store types.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.data.distributedKVStore.KVStoreType

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

## DEVICE_COLLABORATION

```TypeScript
DEVICE_COLLABORATION = 0
```

Device KV store. The device KV store manages data by device, which eliminates conflicts. Data can be queried by device.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.data.distributedKVStore.KVStoreType#DEVICE_COLLABORATION

**系统能力：** SystemCapability.DistributedDataManager.KVStore.DistributedKVStore

## SINGLE_VERSION

```TypeScript
SINGLE_VERSION = 1
```

Single KV store. The single KV store does not differentiate data by device. If the same key is modified by different devices, the data will be overwritten.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.data.distributedKVStore.KVStoreType#SINGLE_VERSION

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

## MULTI_VERSION

```TypeScript
MULTI_VERSION = 2
```

Multi-version KV store. This type is not supported currently.

**起始版本：** 7

**废弃版本：** 9

**系统能力：** SystemCapability.DistributedDataManager.KVStore.DistributedKVStore

