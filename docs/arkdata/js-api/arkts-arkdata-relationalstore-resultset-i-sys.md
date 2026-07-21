# ResultSet

Provides APIs to access the result set obtained by querying the RDB store. This result set is the collection of results returned with the **query()** method called.

The **ResultSet** instance is not refreshed in real time. After using the result set, if the data in the database is changed (by being added, deleted, or modified), you need to query the result set again to obtain the latest data.

For the following APIs, you should use either [query](arkts-arkdata-relationalstore-rdbstore-i.md#query-1),[querySql](arkts-arkdata-relationalstore-rdbstore-i.md#querysqlwithoutrowcount-1),[remoteQuery](arkts-arkdata-relationalstore-rdbstore-i.md#remotequery-1), or [queryLockedRow](arkts-arkdata-relationalstore-rdbstore-i.md#querylockedrow-1) to obtain the **ResultSet** instance first, and then use this instance to call the corresponding method.

**Since:** 9

<!--Device-relationalStore-interface ResultSet--><!--Device-relationalStore-interface ResultSet-End-->

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

## Modules to Import

```TypeScript
import { relationalStore } from '@kit.ArkData';
```

<a id="getfloat32array"></a>
## getFloat32Array

```TypeScript
getFloat32Array(columnIndex: number): Float32Array
```

Obtains the value of the specified column in the current row as a float array.The implementation class determines whether to throw an exception if the value of the specified column in the current row is null or the specified column is not of the float array type.

**Since:** 12

<!--Device-ResultSet-getFloat32Array(columnIndex: int): Float32Array--><!--Device-ResultSet-getFloat32Array(columnIndex: int): Float32Array-End-->

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| columnIndex | number | Yes | Indicates the specified column index, which starts from 0. |

**Return value:**

| Type | Description |
| --- | --- |
| Float32Array | The value of the specified column as a float array. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types; 3. Parameter verification failed. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | The capability is not supported because the database is not a vector DB. |
| [14800011](../errorcode-data-rdb.md#14800011-database-file-corrupted) | The current operation failed because the database is corrupted. |
| [14800013](../errorcode-data-rdb.md#14800013-null-column-value-or-column-data-type-incompatible-with-the-api-called) | Column index is out of bounds. |
| [14800014](../errorcode-data-rdb.md#14800014-target-instance-closed) | The target instance is already closed. |
| [14800021](../errorcode-data-rdb.md#14800021-sqlite-generic-error) | SQLite: Generic error. |
| [14800022](../errorcode-data-rdb.md#14800022-sqlite-asynchronous-callback-request-aborted) | SQLite: Callback routine requested an abort. |
| [14800023](../errorcode-data-rdb.md#14800023-sqlite-access-denied) | SQLite: Access permission denied. |
| [14800024](../errorcode-data-rdb.md#14800024-sqlite-database-file-locked) | SQLite: The database file is locked. |
| [14800025](../errorcode-data-rdb.md#14800025-sqlite-database-table-locked) | SQLite: A table in the database is locked. |
| [14800026](../errorcode-data-rdb.md#14800026-sqlite-insufficient-database-memory) | SQLite: The database is out of memory. |
| [14800027](../errorcode-data-rdb.md#14800027-sqlite-attempt-to-write-a-readonly-database) | SQLite: Attempt to write a readonly database. |
| [14800028](../errorcode-data-rdb.md#14800028-sqlite-io-error) | SQLite: Some kind of disk I/O error occurred. |
| [14800029](../errorcode-data-rdb.md#14800029-sqlite-database-is-full) | SQLite: The database is full. |
| [14800030](../errorcode-data-rdb.md#14800030-sqlite-unable-to-open-the-database-file) | SQLite: Unable to open the database file. |
| [14800031](../errorcode-data-rdb.md#14800031-sqlite-text-or-blob-exceeds-the-limit) | SQLite: TEXT or BLOB exceeds size limit. |
| [14800032](../errorcode-data-rdb.md#14800032-sqlite-abort-due-to-constraint-violation) | SQLite: Abort due to constraint violation. |
| [14800033](../errorcode-data-rdb.md#14800033-sqlite-data-types-mismatch) | SQLite: Data type mismatch. |
| [14800034](../errorcode-data-rdb.md#14800034-incorrect-use-of-sqlite-library) | SQLite: Library used incorrectly. |

