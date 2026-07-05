# Options

Provides KV store configuration.

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.data.distributedKVStore.Options

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

## schema

```TypeScript
schema?: Schema
```

Schema that defines the values stored in the KV store. The default value is **undefined**, which means no schema is used.

**Type:** Schema

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.data.distributedKVStore.Options#schema

**System capability:** SystemCapability.DistributedDataManager.KVStore.DistributedKVStore

## securityLevel

```TypeScript
securityLevel?: SecurityLevel
```

Security level (S1 to S4) of the KV store.

**Type:** SecurityLevel

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.data.distributedKVStore.Options#securityLevel

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

## createIfMissing

```TypeScript
createIfMissing?: boolean
```

Whether to create a KV store if the database file does not exist. The default value is **true**, which means to create a KV store.

**Type:** boolean

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.data.distributedKVStore.Options#createIfMissing

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

## backup

```TypeScript
backup?: boolean
```

Whether to back up the KV store. The default value is **true**, which means to back up the KV store.

**Type:** boolean

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.data.distributedKVStore.Options#backup

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

## encrypt

```TypeScript
encrypt?: boolean
```

Whether to encrypt the KV store. The default value is **false**, which means the KV store is not encrypted.

**Type:** boolean

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.data.distributedKVStore.Options#encrypt

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

## autoSync

```TypeScript
autoSync?: boolean
```

Whether to automatically synchronize database files. The default value is **false**, which means the database files are manually synchronized. ohos.permission.DISTRIBUTED_DATASYNC

**Type:** boolean

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.data.distributedKVStore.Options#autoSync

**Required permissions:** 

 ohos.permission.DISTRIBUTED_DATASYNC

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

## kvStoreType

```TypeScript
kvStoreType?: KVStoreType
```

Type of the KV store to create. The default value is **DEVICE_COLLABORATION**, which indicates a device KV store.

**Type:** KVStoreType

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.data.distributedKVStore.Options#kvStoreType

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

