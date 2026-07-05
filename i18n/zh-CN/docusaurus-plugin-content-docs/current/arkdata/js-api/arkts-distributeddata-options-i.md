# Options

Provides KV store configuration.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.data.distributedKVStore.Options

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

## schema

```TypeScript
schema?: Schema
```

Schema that defines the values stored in the KV store. The default value is **undefined**, which means no schema is used.

**类型：** Schema

**起始版本：** 8

**废弃版本：** 9

**替代接口：** ohos.data.distributedKVStore.Options#schema

**系统能力：** SystemCapability.DistributedDataManager.KVStore.DistributedKVStore

## securityLevel

```TypeScript
securityLevel?: SecurityLevel
```

Security level (S1 to S4) of the KV store.

**类型：** SecurityLevel

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.data.distributedKVStore.Options#securityLevel

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

## createIfMissing

```TypeScript
createIfMissing?: boolean
```

Whether to create a KV store if the database file does not exist. The default value is **true**, which means to create a KV store.

**类型：** boolean

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.data.distributedKVStore.Options#createIfMissing

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

## backup

```TypeScript
backup?: boolean
```

Whether to back up the KV store. The default value is **true**, which means to back up the KV store.

**类型：** boolean

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.data.distributedKVStore.Options#backup

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

## encrypt

```TypeScript
encrypt?: boolean
```

Whether to encrypt the KV store. The default value is **false**, which means the KV store is not encrypted.

**类型：** boolean

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.data.distributedKVStore.Options#encrypt

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

## autoSync

```TypeScript
autoSync?: boolean
```

Whether to automatically synchronize database files. The default value is **false**, which means the database files are manually synchronized. ohos.permission.DISTRIBUTED_DATASYNC

**类型：** boolean

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.data.distributedKVStore.Options#autoSync

**需要权限：** 

 ohos.permission.DISTRIBUTED_DATASYNC

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

## kvStoreType

```TypeScript
kvStoreType?: KVStoreType
```

Type of the KV store to create. The default value is **DEVICE_COLLABORATION**, which indicates a device KV store.

**类型：** KVStoreType

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.data.distributedKVStore.Options#kvStoreType

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

