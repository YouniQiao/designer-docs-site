# @ohos.data.rdb

The relational database (RDB) manages data based on relational models. With the underlying SQLite database, the RDB provides a complete mechanism for managing local databases. To satisfy different needs in complicated scenarios, the RDB offers a series of methods for performing operations such as adding, deleting, modifying, and querying data, and supports direct execution of SQL statements. The worker threads are not supported. This module provides the following RDB-related functions: - [RdbPredicates](arkts-arkdata-rdbpredicates-c.md#rdbpredicates): provides APIs for creating predicates. The predicates represent the properties, characteristics, or relationships between data entities in an RDB store and are used to define data operation conditions. - [RdbStore](arkts-arkdata-rdbstore-i.md#rdbstore): provides APIs for managing data in an RDB store.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** [relationalStore:relationalStore](arkts-data-relationalstore.md#relationalstore)

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

## Summary

### Functions

| Name | Description |
| --- | --- |
| [deleteRdbStore](arkts-arkdata-deleterdbstore-f.md#deleterdbstore-1) | Deletes an RDB store. This API uses an asynchronous callback to return the result. |
| [deleteRdbStore](arkts-arkdata-deleterdbstore-f.md#deleterdbstore-2) | Deletes an RDB store. This API uses a promise to return the result. |
| [getRdbStore](arkts-arkdata-getrdbstore-f.md#getrdbstore-1) | Obtains an RDB store. This API uses an asynchronous callback to return the result. You can set parameters for the RDB store based on service requirements and call APIs to perform data operations. |
| [getRdbStore](arkts-arkdata-getrdbstore-f.md#getrdbstore-2) | Obtains an RDB store. This API uses a promise to return the result. You can set parameters for the RDB store based on service requirements and call APIs to perform data operations. |

### Classes

| Name | Description |
| --- | --- |
| [RdbPredicates](arkts-arkdata-rdbpredicates-c.md) | Defines predicates for an RDB store. This class determines whether the conditional expression for the RDB store is true or false. |

### Interfaces

| Name | Description |
| --- | --- |
| [RdbStore](arkts-arkdata-rdbstore-i.md) | Provides APIs for managing data in an RDB store. Before using the APIs of this class, use [executeSql](arkts-arkdata-rdbstore-i.md#executesql-1) to initialize the database table structure and related data. |
| [StoreConfig](arkts-arkdata-storeconfig-i.md) | Defines the RDB store configuration. |

### Enums

| Name | Description |
| --- | --- |
| [SubscribeType](arkts-arkdata-subscribetype-e.md) | Defines the subscription type. |
| [SyncMode](arkts-arkdata-syncmode-e.md) | Defines the database sync mode. |

### Types

| Name | Description |
| --- | --- |
| [ResultSet](arkts-arkdata-resultset-t.md) | Configure RdbPredicates to match the specified field whose data type is ValueType array and values are out of a given range. |
| [ValueType](arkts-arkdata-valuetype-t.md) | Defines the data types allowed. |
| [ValuesBucket](arkts-arkdata-valuesbucket-t.md) | Defines the types of the key and value in a KV pair. |

