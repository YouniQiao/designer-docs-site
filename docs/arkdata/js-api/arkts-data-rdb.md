# @ohos.data.rdb

The relational database (RDB) manages data based on relational models. With the underlying SQLite database, the RDB provides a complete mechanism for managing local databases. To satisfy different needs in complicated scenarios, the RDB offers a series of methods for performing operations such as adding, deleting, modifying, and querying data, and supports direct execution of SQL statements. The worker threads are not supported. This module provides the following RDB-related functions: - [RdbPredicates]{@link rdb.RdbPredicates}: provides APIs for creating predicates. The predicates represent the properties, characteristics, or relationships between data entities in an RDB store and are used to define data operation conditions. - [RdbStore]{@link rdb.RdbStore}: provides APIs for managing data in an RDB store.

**Since:** 7

**Deprecated since:** 9

**Substitute:** @ohos.data.relationalStore:relationalStore

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

## Summary

### Functions

| Name | Description |
| --- | --- |
| [deleteRdbStore](arkts-rdb-deleterdbstore-f.md#deleteRdbStore-1) | Deletes an RDB store. This API uses an asynchronous callback to return the result. |
| [deleteRdbStore](arkts-rdb-deleterdbstore-f.md#deleteRdbStore-2) | Deletes an RDB store. This API uses a promise to return the result. |
| [getRdbStore](arkts-rdb-getrdbstore-f.md#getRdbStore-1) | Obtains an RDB store. This API uses an asynchronous callback to return the result. You can set parameters for the RDB store based on service requirements and call APIs to perform data operations. |
| [getRdbStore](arkts-rdb-getrdbstore-f.md#getRdbStore-2) | Obtains an RDB store. This API uses a promise to return the result. You can set parameters for the RDB store based on service requirements and call APIs to perform data operations. |

### Classes

| Name | Description |
| --- | --- |
| [RdbPredicates](arkts-rdb-rdbpredicates-c.md) | Defines predicates for an RDB store. This class determines whether the conditional expression for the RDB store is true or false. |

### Interfaces

| Name | Description |
| --- | --- |
| [RdbStore](arkts-rdb-rdbstore-i.md) | Provides APIs for managing data in an RDB store. Before using the APIs of this class, use [executeSql]{@link rdb.RdbStore.executeSql(sql: string, bindArgs: Array<ValueType>, callback: AsyncCallback<void>)} to initialize the database table structure and related data. |
| [StoreConfig](arkts-rdb-storeconfig-i.md) | Defines the RDB store configuration. |

### Types

| Name | Description |
| --- | --- |
| [ResultSet](arkts-rdb-resultset-t.md) | Configure RdbPredicates to match the specified field whose data type is ValueType array and values are out of a given range. |
| [ValuesBucket](arkts-rdb-valuesbucket-t.md) | Defines the types of the key and value in a KV pair. |
| [ValueType](arkts-rdb-valuetype-t.md) | Defines the data types allowed. |

### Enums

| Name | Description |
| --- | --- |
| [SubscribeType](arkts-rdb-subscribetype-e.md) | Defines the subscription type. |
| [SyncMode](arkts-rdb-syncmode-e.md) | Defines the database sync mode. |

