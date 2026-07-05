# StoreConfig

Defines the RDB store configuration.

**起始版本：** 9

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

## 导入模块

```TypeScript
import { relationalStore } from '@kit.ArkData';
```

## allowRebuild

```TypeScript
allowRebuild?: boolean
```

Whether to automatically delete the RDB store and create an empty table in the case of an exception. **true**: delete the RDB store and create an empty table in the case of an exception. **false** (default): not delete the RDB store in the case of an exception. This parameter is supported since API version 12. SystemCapability.DistributedDataManager.RelationalStore.Core

**类型：** boolean

**起始版本：** 12

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

## dataGroupId

```TypeScript
dataGroupId?: string
```

Application group ID. <!--RP1-->Currently, this parameter is not supported.<!--RP1End--> **Model restriction**: This parameter can be used only in the stage model. This parameter is supported since API version 10. If **dataGroupId** is specified, the **RdbStore** instance will be created in the sandbox directory of the specified **dataGroupId**. However, the encrypted RDB store in this sandbox directory does not support multi-process access. If this parameter is left blank, the **RdbStore** instance will be created in the sandbox directory of the application by default. SystemCapability.DistributedDataManager.RelationalStore.Core

**类型：** string

**起始版本：** 10

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

## rootDir

```TypeScript
rootDir?: string
```

Root path of the database. This parameter is supported since API version 18. The database in the **rootDir** + "/" + **customDir** directory will be opened or deleted. The database opened is read-only. Writing data to a read-only database will trigger error 801. If this parameter is set when you want to open or delete an RDB store, ensure that the database file exists in the corresponding path and the caller has the read permission. Otherwise, error 14800010 will be returned. SystemCapability.DistributedDataManager.RelationalStore.Core

**类型：** string

**起始版本：** 18

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

## pluginLibs

```TypeScript
pluginLibs?: Array<string>
```

Loads custom dynamic libraries. Multiple dynamic library names can be passed in the array. For details, see [Constraints and Examples of pluginLibs] (docroot://reference/apis-arkdata/arkts-apis-data-relationalStore-i.md#constraints-and-examples-of-pluginlibs). SystemCapability.DistributedDataManager.RelationalStore.Core

**类型：** Array<string>

**起始版本：** 12

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

## autoCleanDirtyData

```TypeScript
autoCleanDirtyData?: boolean
```

Whether to automatically clear the dirty data (data that has been deleted from the cloud) from the local device. The value **true** means to clear the dirty data automatically; **false** means to clear the data manually. Default value: **true**. For a database with device-cloud synergy, this parameter can be used to set whether to automatically clear the data deleted from the cloud on the device. You can manually clear the data by calling [cleanDirtyData<sup>11+</sup>]@ohos.data.relationalStore:relationalStore.RdbStore. cleanDirtyData(table: string,cursor: long, callback: AsyncCallback<void>) . This parameter is supported since API version 11. SystemCapability.DistributedDataManager.CloudSync.Client

**类型：** boolean

**起始版本：** 11

**系统能力：** SystemCapability.DistributedDataManager.CloudSync.Client

## autoCleanDeviceDirtyData

```TypeScript
autoCleanDeviceDirtyData?: boolean
```

Specifies whether to clean up dirty data that is synchronized to the local but deleted on the remote device. <br>Default value:true.

**类型：** boolean

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**系统接口：** 此接口为系统接口。

## tokenizer

```TypeScript
tokenizer?: Tokenizer
```

Type of the tokenizer to be used for FTS. If this parameter is left blank, English tokenization is supported if FTS does not support Chinese or multi- language tokenization. If you want to use a custom tokenizer, you can configure it through the **pluginLibs** parameter. For details, see [Restrictions and Examples of pluginLibs] (docroot://reference/apis-arkdata/arkts-apis-data-relationalStore-i.md#constraints-and-examples-of-pluginlibs). SystemCapability.DistributedDataManager.RelationalStore.Core

**类型：** Tokenizer

**起始版本：** 17

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

## haMode

```TypeScript
haMode?: HAMode
```

Enumerates the high availability modes of the RDB store.

**类型：** HAMode

**起始版本：** 12

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**系统接口：** 此接口为系统接口。

## securityLevel

```TypeScript
securityLevel: SecurityLevel
```

Security level of the RDB store. SystemCapability.DistributedDataManager.RelationalStore.Core

**类型：** SecurityLevel

**起始版本：** 9

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

## enableSemanticIndex

```TypeScript
enableSemanticIndex?: boolean
```

Whether to enable the semantic index processing feature for the database. The value **true** means to enable the semantic index processing feature; **false** means the opposite. The default value is **false**. SystemCapability.DistributedDataManager.RelationalStore.Core

**类型：** boolean

**起始版本：** 20

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

## customDir

```TypeScript
customDir?: string
```

Custom database path. **Constraints**: The maximum length of the database path is 128 bytes. If the database path exceeds 128 bytes, the RDB store fails to be opened and an error is returned. This parameter is supported since API version 11. The database is created in the following directory structure: **context.databaseDir** + **"/rdb/"** + **customDir**, where **context.databaseDir** indicates the path of the application sandbox, **"/rdb/"** indicates the relational database created, and **customDir** indicates a user- defined path. If this parameter is left blank, the **RdbStore** instance will be created in the sandbox directory of the application by default. Since API version 18, if the **rootDir** parameter is also configured, the database in the following path will be opened or deleted: **rootDir** + "/" + **customDir** + "/" + **name**. SystemCapability.DistributedDataManager.RelationalStore.Core

**类型：** string

**起始版本：** 11

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

## isReadOnly

```TypeScript
isReadOnly?: boolean
```

Whether the RDB store is read-only. **true**: The RDB store is read-only. Writing data to the RDB store will result in error code 801. **false** (default): The RDB store is readable and writeable. This parameter is supported since API version 12. SystemCapability.DistributedDataManager.RelationalStore.Core

**类型：** boolean

**起始版本：** 12

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

## encrypt

```TypeScript
encrypt?: boolean
```

Whether to encrypt the RDB store. After the database is created, this parameter cannot be modified directly. To change the database encryption status, call the [rekeyEx](arkts-relationalstore-rdbstore-i.md#rekeyEx) API. **true**: encrypt the RDB store. **false** (default): not encrypt the RDB store. SystemCapability.DistributedDataManager.RelationalStore.Core

**类型：** boolean

**起始版本：** 9

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

## name

```TypeScript
name: string
```

Database file name, which is the unique identifier of the RDB store. Creating two databases with the same name in the same process is prohibited; otherwise, functions such as device-device sync, device-cloud sync, silent access , and key backup may malfunction. SystemCapability.DistributedDataManager.RelationalStore.Core

**类型：** string

**起始版本：** 9

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

## vector

```TypeScript
vector?: boolean
```

Whether the RDB store is a vector store. The value **true** means the RDB store is a vector store, and the value **false** means the opposite. Default value: **false**. The vector store is ideal for storing and managing high-dimensional vector data, while the RDB store is optimal for storing and processing structured data. Before calling **deleteRdbStore**, ensure that the **RdbStore** and **ResultSet** of the vector store have been closed. SystemCapability.DistributedDataManager.RelationalStore.Core

**类型：** boolean

**起始版本：** 18

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

## persist

```TypeScript
persist?: boolean
```

Whether to persist an RDB store. The value **true** means to persist the RDB store; **false** means the opposite (using an in-memory database). The default value is **true**. An in-memory database does not support encryption, backup, restore, cross-process access, and distributed capabilities, with the **securityLevel** property ignored. SystemCapability.DistributedDataManager.RelationalStore.Core

**类型：** boolean

**起始版本：** 18

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

## isSearchable

```TypeScript
isSearchable?: boolean
```

Specifies whether data can be searched.

**类型：** boolean

**起始版本：** 11

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**系统接口：** 此接口为系统接口。

## cryptoParam

```TypeScript
cryptoParam?: CryptoParam
```

Custom encryption parameters. If this parameter is left empty, the default encryption parameters are used. For details, see default values of [CryptoParam]relationalStore.CryptoParam. This parameter is valid only when **encrypt** is set to **true** or the key is not empty. This parameter is supported since API version 14. SystemCapability.DistributedDataManager.RelationalStore.Core

**类型：** CryptoParam

**起始版本：** 14

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

