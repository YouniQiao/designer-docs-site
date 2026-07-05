# Options

Provides KV store configuration.

**起始版本：** 9

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

## 导入模块

```TypeScript
import { distributedKVStore } from '@kit.ArkData';
```

## schema

```TypeScript
schema?: Schema
```

Schema that defines the values stored in the KV store. The default value is **undefined**, which means no schema is used. SystemCapability.DistributedDataManager.KVStore.DistributedKVStore

**类型：** Schema

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.KVStore.DistributedKVStore

## securityLevel

```TypeScript
securityLevel: SecurityLevel
```

Security level of the KV store. SystemCapability.DistributedDataManager.KVStore.Core

**类型：** SecurityLevel

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

## createIfMissing

```TypeScript
createIfMissing?: boolean
```

Whether to create a database when database files do not exist. The value **true** means to create a database, and the value **false** means the opposite. The default value is **true**. SystemCapability.DistributedDataManager.KVStore.Core

**类型：** boolean

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

## backup

```TypeScript
backup?: boolean
```

Whether to back up the database files. The value **true** means to back up the database files, and the value **false** means the opposite. The default value is **true**. SystemCapability.DistributedDataManager.KVStore.Core

**类型：** boolean

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

## encrypt

```TypeScript
encrypt?: boolean
```

Whether to encrypt the database files. The value **true** means to encrypt the database files, and the value **false** means the opposite. The default value is **false**. SystemCapability.DistributedDataManager.KVStore.Core

**类型：** boolean

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

## rootDir

```TypeScript
rootDir?: string
```

Specifies the root directory relative to the database

**类型：** string

**起始版本：** 24

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.KVStore.DistributedKVStore

## autoSync

```TypeScript
autoSync?: boolean
```

Whether to enable auto sync across devices. The default value is **false**, indicating that only manual sync is supported. If this parameter is set to **true**, <!--RP1-->it takes effect only in [device collaboration using cross-device calls](docroot://application-models/hop-multi-device-collaboration.md#using-cross-device-call) .<!--RP1End--> SystemCapability.DistributedDataManager.KVStore.Core ohos.permission.DISTRIBUTED_DATASYNC

**类型：** boolean

**起始版本：** 9

**需要权限：** 

 ohos.permission.DISTRIBUTED_DATASYNC

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

## kvStoreType

```TypeScript
kvStoreType?: KVStoreType
```

Type of the KV store to create. The default value is **DEVICE_COLLABORATION**, which indicates a device KV store. SystemCapability.DistributedDataManager.KVStore.Core

**类型：** KVStoreType

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

