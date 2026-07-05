# @ohos.data.rdb

The relational database (RDB) manages data based on relational models. With the underlying SQLite database, the RDB provides a complete mechanism for managing local databases. To satisfy different needs in complicated scenarios, the RDB offers a series of methods for performing operations such as adding, deleting, modifying, and querying data, and supports direct execution of SQL statements. The worker threads are not supported. This module provides the following RDB-related functions: - [RdbPredicates]{@link rdb.RdbPredicates}: provides APIs for creating predicates. The predicates represent the properties, characteristics, or relationships between data entities in an RDB store and are used to define data operation conditions. - [RdbStore]{@link rdb.RdbStore}: provides APIs for managing data in an RDB store.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** @ohos.data.relationalStore:relationalStore

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

## 汇总

### 函数

| 名称 | 描述 |
| --- | --- |
| [deleteRdbStore](arkts-rdb-deleterdbstore-f.md#deleteRdbStore-1) | Deletes an RDB store. This API uses an asynchronous callback to return the result. |
| [deleteRdbStore](arkts-rdb-deleterdbstore-f.md#deleteRdbStore-2) | Deletes an RDB store. This API uses a promise to return the result. |
| [getRdbStore](arkts-rdb-getrdbstore-f.md#getRdbStore-1) | Obtains an RDB store. This API uses an asynchronous callback to return the result. You can set parameters for the RDB store based on service requirements and call APIs to perform data operations. |
| [getRdbStore](arkts-rdb-getrdbstore-f.md#getRdbStore-2) | Obtains an RDB store. This API uses a promise to return the result. You can set parameters for the RDB store based on service requirements and call APIs to perform data operations. |

### 类

| 名称 | 描述 |
| --- | --- |
| [RdbPredicates](arkts-rdb-rdbpredicates-c.md) | Defines predicates for an RDB store. This class determines whether the conditional expression for the RDB store is true or false. |

### 接口

| 名称 | 描述 |
| --- | --- |
| [RdbStore](arkts-rdb-rdbstore-i.md) | Provides APIs for managing data in an RDB store. Before using the APIs of this class, use [executeSql]{@link rdb.RdbStore.executeSql(sql: string, bindArgs: Array<ValueType>, callback: AsyncCallback<void>)} to initialize the database table structure and related data. |
| [StoreConfig](arkts-rdb-storeconfig-i.md) | Defines the RDB store configuration. |

### 类型

| 名称 | 描述 |
| --- | --- |
| [ResultSet](arkts-rdb-resultset-t.md) | Configure RdbPredicates to match the specified field whose data type is ValueType array and values are out of a given range. |
| [ValuesBucket](arkts-rdb-valuesbucket-t.md) | Defines the types of the key and value in a KV pair. |
| [ValueType](arkts-rdb-valuetype-t.md) | Defines the data types allowed. |

### 枚举

| 名称 | 描述 |
| --- | --- |
| [SubscribeType](arkts-rdb-subscribetype-e.md) | Defines the subscription type. |
| [SyncMode](arkts-rdb-syncmode-e.md) | Defines the database sync mode. |

