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

<a id="close"></a>
## close

```TypeScript
close(): void
```

Closes this **resultSet** to release memory. If the **resultSet** is not closed, FD or memory leaks may occur.

**Since:** 9

<!--Device-ResultSet-close(): void--><!--Device-ResultSet-close(): void-End-->

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [14800012](../errorcode-data-rdb.md#14800012-empty-result-set-or-invalid-position) | ResultSet is empty or pointer index is out of bounds. |
| [14800000](../../apis-basic-services-kit/errorcode-settings.md#14800000-parameter-check-failed) | Inner error.<br>**Applicable version:** 12 and later |

<a id="getasset"></a>
## getAsset

```TypeScript
getAsset(columnIndex: number): Asset
```

Obtains the value from the specified column in the current row, and returns the value in the [Asset](arkts-arkdata-relationalstore-asset-i.md) format. If the type of the value in the column is **Asset**, the value of the Asset type is returned. If the value in the column is null, **null** is returned. If the value in the column is of other types, 14800000 is returned.

**Since:** 10

<!--Device-ResultSet-getAsset(columnIndex: int): Asset--><!--Device-ResultSet-getAsset(columnIndex: int): Asset-End-->

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| columnIndex | number | Yes | Index of the target column, starting from 0. |

**Return value:**

| Type | Description |
| --- | --- |
| [Asset](arkts-arkdata-sendablerelationalstore-asset-i.md) | Value obtained. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [14800013](../errorcode-data-rdb.md#14800013-null-column-value-or-column-data-type-incompatible-with-the-api-called) | Column index is out of bounds. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types; 3. Parameter verification failed. |
| [14800000](../../apis-basic-services-kit/errorcode-settings.md#14800000-parameter-check-failed) | Inner error.<br>**Applicable version:** 12 and later |
| [14800011](../errorcode-data-rdb.md#14800011-database-file-corrupted) | The current operation failed because the database is corrupted.<br>**Applicable version:** 12 and later |
| [14800012](../errorcode-data-rdb.md#14800012-empty-result-set-or-invalid-position) | ResultSet is empty or pointer index is out of bounds.<br>**Applicable version:** 12 and later |
| [14800014](../errorcode-data-rdb.md#14800014-target-instance-closed) | The target instance is already closed.<br>**Applicable version:** 12 and later |
| [14800021](../errorcode-data-rdb.md#14800021-sqlite-generic-error) | SQLite: Generic error.<br>**Applicable version:** 12 and later |
| [14800022](../errorcode-data-rdb.md#14800022-sqlite-asynchronous-callback-request-aborted) | SQLite: Callback routine requested an abort.<br>**Applicable version:** 12 and later |
| [14800023](../errorcode-data-rdb.md#14800023-sqlite-access-denied) | SQLite: Access permission denied.<br>**Applicable version:** 12 and later |
| [14800024](../errorcode-data-rdb.md#14800024-sqlite-database-file-locked) | SQLite: The database file is locked.<br>**Applicable version:** 12 and later |
| [14800025](../errorcode-data-rdb.md#14800025-sqlite-database-table-locked) | SQLite: A table in the database is locked.<br>**Applicable version:** 12 and later |
| [14800026](../errorcode-data-rdb.md#14800026-sqlite-insufficient-database-memory) | SQLite: The database is out of memory.<br>**Applicable version:** 12 and later |
| [14800027](../errorcode-data-rdb.md#14800027-sqlite-attempt-to-write-a-readonly-database) | SQLite: Attempt to write a readonly database.<br>**Applicable version:** 12 and later |
| [14800028](../errorcode-data-rdb.md#14800028-sqlite-io-error) | SQLite: Some kind of disk I/O error occurred.<br>**Applicable version:** 12 and later |
| [14800029](../errorcode-data-rdb.md#14800029-sqlite-database-is-full) | SQLite: The database is full.<br>**Applicable version:** 12 and later |
| [14800030](../errorcode-data-rdb.md#14800030-sqlite-unable-to-open-the-database-file) | SQLite: Unable to open the database file.<br>**Applicable version:** 12 and later |
| [14800031](../errorcode-data-rdb.md#14800031-sqlite-text-or-blob-exceeds-the-limit) | SQLite: TEXT or BLOB exceeds size limit.<br>**Applicable version:** 12 and later |
| [14800032](../errorcode-data-rdb.md#14800032-sqlite-abort-due-to-constraint-violation) | SQLite: Abort due to constraint violation.<br>**Applicable version:** 12 and later |
| [14800033](../errorcode-data-rdb.md#14800033-sqlite-data-types-mismatch) | SQLite: Data type mismatch.<br>**Applicable version:** 12 and later |
| [14800034](../errorcode-data-rdb.md#14800034-incorrect-use-of-sqlite-library) | SQLite: Library used incorrectly.<br>**Applicable version:** 12 and later |

<a id="getassets"></a>
## getAssets

```TypeScript
getAssets(columnIndex: number): Assets
```

Obtains the value from the specified column in the current row, and returns the value in the [Assets](arkts-arkdata-relationalstore-assets-t.md) format. If the type of the value in the column is **Assets**, the value of the Assets type is returned. If the value in the column is null, **null** is returned. If the value in the column is of other types, 14800000 is returned.

**Since:** 10

<!--Device-ResultSet-getAssets(columnIndex: int): Assets--><!--Device-ResultSet-getAssets(columnIndex: int): Assets-End-->

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| columnIndex | number | Yes | Index of the target column, starting from 0. |

**Return value:**

| Type | Description |
| --- | --- |
| [Assets](arkts-arkdata-sendablerelationalstore-assets-t.md) | Value obtained. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [14800013](../errorcode-data-rdb.md#14800013-null-column-value-or-column-data-type-incompatible-with-the-api-called) | Column index is out of bounds. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types; 3. Parameter verification failed. |
| [14800000](../../apis-basic-services-kit/errorcode-settings.md#14800000-parameter-check-failed) | Inner error.<br>**Applicable version:** 12 and later |
| [14800011](../errorcode-data-rdb.md#14800011-database-file-corrupted) | The current operation failed because the database is corrupted.<br>**Applicable version:** 12 and later |
| [14800012](../errorcode-data-rdb.md#14800012-empty-result-set-or-invalid-position) | ResultSet is empty or pointer index is out of bounds.<br>**Applicable version:** 12 and later |
| [14800014](../errorcode-data-rdb.md#14800014-target-instance-closed) | The target instance is already closed.<br>**Applicable version:** 12 and later |
| [14800021](../errorcode-data-rdb.md#14800021-sqlite-generic-error) | SQLite: Generic error.<br>**Applicable version:** 12 and later |
| [14800022](../errorcode-data-rdb.md#14800022-sqlite-asynchronous-callback-request-aborted) | SQLite: Callback routine requested an abort.<br>**Applicable version:** 12 and later |
| [14800023](../errorcode-data-rdb.md#14800023-sqlite-access-denied) | SQLite: Access permission denied.<br>**Applicable version:** 12 and later |
| [14800024](../errorcode-data-rdb.md#14800024-sqlite-database-file-locked) | SQLite: The database file is locked.<br>**Applicable version:** 12 and later |
| [14800025](../errorcode-data-rdb.md#14800025-sqlite-database-table-locked) | SQLite: A table in the database is locked.<br>**Applicable version:** 12 and later |
| [14800026](../errorcode-data-rdb.md#14800026-sqlite-insufficient-database-memory) | SQLite: The database is out of memory.<br>**Applicable version:** 12 and later |
| [14800027](../errorcode-data-rdb.md#14800027-sqlite-attempt-to-write-a-readonly-database) | SQLite: Attempt to write a readonly database.<br>**Applicable version:** 12 and later |
| [14800028](../errorcode-data-rdb.md#14800028-sqlite-io-error) | SQLite: Some kind of disk I/O error occurred.<br>**Applicable version:** 12 and later |
| [14800029](../errorcode-data-rdb.md#14800029-sqlite-database-is-full) | SQLite: The database is full.<br>**Applicable version:** 12 and later |
| [14800030](../errorcode-data-rdb.md#14800030-sqlite-unable-to-open-the-database-file) | SQLite: Unable to open the database file.<br>**Applicable version:** 12 and later |
| [14800031](../errorcode-data-rdb.md#14800031-sqlite-text-or-blob-exceeds-the-limit) | SQLite: TEXT or BLOB exceeds size limit.<br>**Applicable version:** 12 and later |
| [14800032](../errorcode-data-rdb.md#14800032-sqlite-abort-due-to-constraint-violation) | SQLite: Abort due to constraint violation.<br>**Applicable version:** 12 and later |
| [14800033](../errorcode-data-rdb.md#14800033-sqlite-data-types-mismatch) | SQLite: Data type mismatch.<br>**Applicable version:** 12 and later |
| [14800034](../errorcode-data-rdb.md#14800034-incorrect-use-of-sqlite-library) | SQLite: Library used incorrectly.<br>**Applicable version:** 12 and later |

<a id="getblob"></a>
## getBlob

```TypeScript
getBlob(columnIndex: number): Uint8Array
```

Obtains the value from the specified column in the current row, and returns it in a byte array.

If the type of the value in the specified column is INTEGER, DOUBLE, TEXT, or BLOB, the value will be converted into a byte array and returned. If the column is null/empty, an empty byte array will be returned. If the value is of any other type, 14800000 will be returned.

**Since:** 9

<!--Device-ResultSet-getBlob(columnIndex: int): Uint8Array--><!--Device-ResultSet-getBlob(columnIndex: int): Uint8Array-End-->

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| columnIndex | number | Yes | Index of the target column, starting from 0. |

**Return value:**

| Type | Description |
| --- | --- |
| Uint8Array | Value obtained. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [14800013](../errorcode-data-rdb.md#14800013-null-column-value-or-column-data-type-incompatible-with-the-api-called) | Column index is out of bounds. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types; 3. Parameter verification failed. |
| [14800000](../../apis-basic-services-kit/errorcode-settings.md#14800000-parameter-check-failed) | Inner error.<br>**Applicable version:** 12 and later |
| [14800011](../errorcode-data-rdb.md#14800011-database-file-corrupted) | The current operation failed because the database is corrupted.<br>**Applicable version:** 12 and later |
| [14800012](../errorcode-data-rdb.md#14800012-empty-result-set-or-invalid-position) | ResultSet is empty or pointer index is out of bounds.<br>**Applicable version:** 12 and later |
| [14800014](../errorcode-data-rdb.md#14800014-target-instance-closed) | The target instance is already closed.<br>**Applicable version:** 12 and later |
| [14800021](../errorcode-data-rdb.md#14800021-sqlite-generic-error) | SQLite: Generic error.<br>**Applicable version:** 12 and later |
| [14800022](../errorcode-data-rdb.md#14800022-sqlite-asynchronous-callback-request-aborted) | SQLite: Callback routine requested an abort.<br>**Applicable version:** 12 and later |
| [14800023](../errorcode-data-rdb.md#14800023-sqlite-access-denied) | SQLite: Access permission denied.<br>**Applicable version:** 12 and later |
| [14800024](../errorcode-data-rdb.md#14800024-sqlite-database-file-locked) | SQLite: The database file is locked.<br>**Applicable version:** 12 and later |
| [14800025](../errorcode-data-rdb.md#14800025-sqlite-database-table-locked) | SQLite: A table in the database is locked.<br>**Applicable version:** 12 and later |
| [14800026](../errorcode-data-rdb.md#14800026-sqlite-insufficient-database-memory) | SQLite: The database is out of memory.<br>**Applicable version:** 12 and later |
| [14800027](../errorcode-data-rdb.md#14800027-sqlite-attempt-to-write-a-readonly-database) | SQLite: Attempt to write a readonly database.<br>**Applicable version:** 12 and later |
| [14800028](../errorcode-data-rdb.md#14800028-sqlite-io-error) | SQLite: Some kind of disk I/O error occurred.<br>**Applicable version:** 12 and later |
| [14800029](../errorcode-data-rdb.md#14800029-sqlite-database-is-full) | SQLite: The database is full.<br>**Applicable version:** 12 and later |
| [14800030](../errorcode-data-rdb.md#14800030-sqlite-unable-to-open-the-database-file) | SQLite: Unable to open the database file.<br>**Applicable version:** 12 and later |
| [14800031](../errorcode-data-rdb.md#14800031-sqlite-text-or-blob-exceeds-the-limit) | SQLite: TEXT or BLOB exceeds size limit.<br>**Applicable version:** 12 and later |
| [14800032](../errorcode-data-rdb.md#14800032-sqlite-abort-due-to-constraint-violation) | SQLite: Abort due to constraint violation.<br>**Applicable version:** 12 and later |
| [14800033](../errorcode-data-rdb.md#14800033-sqlite-data-types-mismatch) | SQLite: Data type mismatch.<br>**Applicable version:** 12 and later |
| [14800034](../errorcode-data-rdb.md#14800034-incorrect-use-of-sqlite-library) | SQLite: Library used incorrectly.<br>**Applicable version:** 12 and later |

<a id="getcolumnindex"></a>
## getColumnIndex

```TypeScript
getColumnIndex(columnName: string): number
```

Obtains the column index based on the column name.

**Since:** 9

<!--Device-ResultSet-getColumnIndex(columnName: string): int--><!--Device-ResultSet-getColumnIndex(columnName: string): int-End-->

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| columnName | string | Yes | Column name. |

**Return value:**

| Type | Description |
| --- | --- |
| number | Column index obtained. If the result set contains duplicate column names, the return value is not as expected. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [14800013](../errorcode-data-rdb.md#14800013-null-column-value-or-column-data-type-incompatible-with-the-api-called) | Column index is out of bounds. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types; 3. Parameter verification failed. |
| [14800000](../../apis-basic-services-kit/errorcode-settings.md#14800000-parameter-check-failed) | Inner error.<br>**Applicable version:** 12 and later |
| [14800011](../errorcode-data-rdb.md#14800011-database-file-corrupted) | The current operation failed because the database is corrupted.<br>**Applicable version:** 12 and later |
| [14800014](../errorcode-data-rdb.md#14800014-target-instance-closed) | The target instance is already closed.<br>**Applicable version:** 12 and later |
| [14800019](../errorcode-data-rdb.md#14800019-sql-query-statement-required) | The SQL must be a query statement.<br>**Applicable version:** 12 and later |
| [14800021](../errorcode-data-rdb.md#14800021-sqlite-generic-error) | SQLite: Generic error.<br>**Applicable version:** 12 and later |
| [14800022](../errorcode-data-rdb.md#14800022-sqlite-asynchronous-callback-request-aborted) | SQLite: Callback routine requested an abort.<br>**Applicable version:** 12 and later |
| [14800023](../errorcode-data-rdb.md#14800023-sqlite-access-denied) | SQLite: Access permission denied.<br>**Applicable version:** 12 and later |
| [14800024](../errorcode-data-rdb.md#14800024-sqlite-database-file-locked) | SQLite: The database file is locked.<br>**Applicable version:** 12 and later |
| [14800025](../errorcode-data-rdb.md#14800025-sqlite-database-table-locked) | SQLite: A table in the database is locked.<br>**Applicable version:** 12 and later |
| [14800026](../errorcode-data-rdb.md#14800026-sqlite-insufficient-database-memory) | SQLite: The database is out of memory.<br>**Applicable version:** 12 and later |
| [14800027](../errorcode-data-rdb.md#14800027-sqlite-attempt-to-write-a-readonly-database) | SQLite: Attempt to write a readonly database.<br>**Applicable version:** 12 and later |
| [14800028](../errorcode-data-rdb.md#14800028-sqlite-io-error) | SQLite: Some kind of disk I/O error occurred.<br>**Applicable version:** 12 and later |
| [14800029](../errorcode-data-rdb.md#14800029-sqlite-database-is-full) | SQLite: The database is full.<br>**Applicable version:** 12 and later |
| [14800030](../errorcode-data-rdb.md#14800030-sqlite-unable-to-open-the-database-file) | SQLite: Unable to open the database file.<br>**Applicable version:** 12 and later |
| [14800031](../errorcode-data-rdb.md#14800031-sqlite-text-or-blob-exceeds-the-limit) | SQLite: TEXT or BLOB exceeds size limit.<br>**Applicable version:** 12 and later |
| [14800032](../errorcode-data-rdb.md#14800032-sqlite-abort-due-to-constraint-violation) | SQLite: Abort due to constraint violation.<br>**Applicable version:** 12 and later |
| [14800033](../errorcode-data-rdb.md#14800033-sqlite-data-types-mismatch) | SQLite: Data type mismatch.<br>**Applicable version:** 12 and later |
| [14800034](../errorcode-data-rdb.md#14800034-incorrect-use-of-sqlite-library) | SQLite: Library used incorrectly.<br>**Applicable version:** 12 and later |

<a id="getcolumnname"></a>
## getColumnName

```TypeScript
getColumnName(columnIndex: number): string
```

Obtains the column name based on the column index.

**Since:** 9

<!--Device-ResultSet-getColumnName(columnIndex: int): string--><!--Device-ResultSet-getColumnName(columnIndex: int): string-End-->

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| columnIndex | number | Yes | Column index. |

**Return value:**

| Type | Description |
| --- | --- |
| string | Column name obtained. If the result set contains duplicate column names, the return value is not as expected. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [14800013](../errorcode-data-rdb.md#14800013-null-column-value-or-column-data-type-incompatible-with-the-api-called) | Column index is out of bounds. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types; 3. Parameter verification failed. |
| [14800000](../../apis-basic-services-kit/errorcode-settings.md#14800000-parameter-check-failed) | Inner error.<br>**Applicable version:** 12 and later |
| [14800011](../errorcode-data-rdb.md#14800011-database-file-corrupted) | The current operation failed because the database is corrupted.<br>**Applicable version:** 12 and later |
| [14800014](../errorcode-data-rdb.md#14800014-target-instance-closed) | The target instance is already closed.<br>**Applicable version:** 12 and later |
| [14800019](../errorcode-data-rdb.md#14800019-sql-query-statement-required) | The SQL must be a query statement.<br>**Applicable version:** 12 and later |
| [14800021](../errorcode-data-rdb.md#14800021-sqlite-generic-error) | SQLite: Generic error.<br>**Applicable version:** 12 and later |
| [14800022](../errorcode-data-rdb.md#14800022-sqlite-asynchronous-callback-request-aborted) | SQLite: Callback routine requested an abort.<br>**Applicable version:** 12 and later |
| [14800023](../errorcode-data-rdb.md#14800023-sqlite-access-denied) | SQLite: Access permission denied.<br>**Applicable version:** 12 and later |
| [14800024](../errorcode-data-rdb.md#14800024-sqlite-database-file-locked) | SQLite: The database file is locked.<br>**Applicable version:** 12 and later |
| [14800025](../errorcode-data-rdb.md#14800025-sqlite-database-table-locked) | SQLite: A table in the database is locked.<br>**Applicable version:** 12 and later |
| [14800026](../errorcode-data-rdb.md#14800026-sqlite-insufficient-database-memory) | SQLite: The database is out of memory.<br>**Applicable version:** 12 and later |
| [14800027](../errorcode-data-rdb.md#14800027-sqlite-attempt-to-write-a-readonly-database) | SQLite: Attempt to write a readonly database.<br>**Applicable version:** 12 and later |
| [14800028](../errorcode-data-rdb.md#14800028-sqlite-io-error) | SQLite: Some kind of disk I/O error occurred.<br>**Applicable version:** 12 and later |
| [14800029](../errorcode-data-rdb.md#14800029-sqlite-database-is-full) | SQLite: The database is full.<br>**Applicable version:** 12 and later |
| [14800030](../errorcode-data-rdb.md#14800030-sqlite-unable-to-open-the-database-file) | SQLite: Unable to open the database file.<br>**Applicable version:** 12 and later |
| [14800031](../errorcode-data-rdb.md#14800031-sqlite-text-or-blob-exceeds-the-limit) | SQLite: TEXT or BLOB exceeds size limit.<br>**Applicable version:** 12 and later |
| [14800032](../errorcode-data-rdb.md#14800032-sqlite-abort-due-to-constraint-violation) | SQLite: Abort due to constraint violation.<br>**Applicable version:** 12 and later |
| [14800033](../errorcode-data-rdb.md#14800033-sqlite-data-types-mismatch) | SQLite: Data type mismatch.<br>**Applicable version:** 12 and later |
| [14800034](../errorcode-data-rdb.md#14800034-incorrect-use-of-sqlite-library) | SQLite: Library used incorrectly.<br>**Applicable version:** 12 and later |

<a id="getcolumnnames"></a>
## getColumnNames

```TypeScript
getColumnNames(): Array<string>
```

Obtains the names of all columns in the result set.

The column names are returned in a string array. The sequence of strings in the array is the same as that of columns in the result set.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

<!--Device-ResultSet-getColumnNames(): Array<string>--><!--Device-ResultSet-getColumnNames(): Array<string>-End-->

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;string&gt; | Names of all columns in the result set obtained. Duplicate column names can be obtained. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [14800001](../errorcode-data-rdb.md#14800001-invalid-arguments) | Invalid arguments. Possible causes: 1. Parameter is out of valid range. |
| [14800011](../errorcode-data-rdb.md#14800011-database-file-corrupted) | The current operation failed because the database is corrupted. |
| [14800014](../errorcode-data-rdb.md#14800014-target-instance-closed) | The target instance is already closed. |
| [14800019](../errorcode-data-rdb.md#14800019-sql-query-statement-required) | The SQL must be a query statement. |
| [14800021](../errorcode-data-rdb.md#14800021-sqlite-generic-error) | SQLite: Generic error. |
| [14800026](../errorcode-data-rdb.md#14800026-sqlite-insufficient-database-memory) | SQLite: The database is out of memory. |
| [14800028](../errorcode-data-rdb.md#14800028-sqlite-io-error) | SQLite: Some kind of disk I/O error occurred. |
| [14800030](../errorcode-data-rdb.md#14800030-sqlite-unable-to-open-the-database-file) | SQLite: Unable to open the database file. |

<a id="getcolumntype"></a>
## getColumnType

```TypeScript
getColumnType(columnIdentifier: number | string): Promise<ColumnType>
```

Obtains the column type based on the specified column index or column name. This API uses a promise to return the result.

**Since:** 18

<!--Device-ResultSet-getColumnType(columnIdentifier: int | string): Promise<ColumnType>--><!--Device-ResultSet-getColumnType(columnIdentifier: int | string): Promise<ColumnType>-End-->

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| columnIdentifier | number \| string | Yes | Index or name of column in a result set. The index must be a non-negative integer and cannot exceed the length of **columnNames**. The column name must be a name in **columnNames**. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;ColumnType&gt; | Promise used to return the column type obtained. If the result set contains duplicate column names, the return value is not as expected. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types; 3. Parameter verification failed. |
| [14800000](../../apis-basic-services-kit/errorcode-settings.md#14800000-parameter-check-failed) | Inner error. |
| [14800011](../errorcode-data-rdb.md#14800011-database-file-corrupted) | The current operation failed because the database is corrupted. |
| [14800012](../errorcode-data-rdb.md#14800012-empty-result-set-or-invalid-position) | ResultSet is empty or pointer index is out of bounds. |
| [14800013](../errorcode-data-rdb.md#14800013-null-column-value-or-column-data-type-incompatible-with-the-api-called) | Column index is out of bounds. |
| [14800014](../errorcode-data-rdb.md#14800014-target-instance-closed) | The target instance is already closed. |
| [14800019](../errorcode-data-rdb.md#14800019-sql-query-statement-required) | The SQL must be a query statement. |
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

<a id="getcolumntypesync"></a>
## getColumnTypeSync

```TypeScript
getColumnTypeSync(columnIdentifier: number | string): ColumnType
```

Obtains the column type based on the specified column index or column name. This API returns the result synchronously.

**Since:** 18

<!--Device-ResultSet-getColumnTypeSync(columnIdentifier: int | string): ColumnType--><!--Device-ResultSet-getColumnTypeSync(columnIdentifier: int | string): ColumnType-End-->

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| columnIdentifier | number \| string | Yes | Index or name of column in a result set. The index must be a non-negative integer and cannot exceed the length of **columnNames**. The column name must be a name in **columnNames**. |

**Return value:**

| Type | Description |
| --- | --- |
| [ColumnType](arkts-arkdata-relationalstore-columntype-e.md) | Column type obtained. If the result set contains duplicate column names, the return value is not as expected. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types; 3. Parameter verification failed. |
| [14800000](../../apis-basic-services-kit/errorcode-settings.md#14800000-parameter-check-failed) | Inner error. |
| [14800011](../errorcode-data-rdb.md#14800011-database-file-corrupted) | The current operation failed because the database is corrupted. |
| [14800012](../errorcode-data-rdb.md#14800012-empty-result-set-or-invalid-position) | ResultSet is empty or pointer index is out of bounds. |
| [14800013](../errorcode-data-rdb.md#14800013-null-column-value-or-column-data-type-incompatible-with-the-api-called) | Column index is out of bounds. |
| [14800014](../errorcode-data-rdb.md#14800014-target-instance-closed) | The target instance is already closed. |
| [14800019](../errorcode-data-rdb.md#14800019-sql-query-statement-required) | The SQL must be a query statement. |
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

<a id="getcurrentrowdata"></a>
## getCurrentRowData

```TypeScript
getCurrentRowData(): RowData
```

Obtains the values of all columns in this row.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

<!--Device-ResultSet-getCurrentRowData(): RowData--><!--Device-ResultSet-getCurrentRowData(): RowData-End-->

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Return value:**

| Type | Description |
| --- | --- |
| [RowData](arkts-arkdata-relationalstore-rowdata-t.md) | Values of all columns in this row obtained. The values of columns with the same name can be obtained. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [14800001](../errorcode-data-rdb.md#14800001-invalid-arguments) | Invalid arguments. Possible causes: 1. Parameter is out of valid range. |
| [14800011](../errorcode-data-rdb.md#14800011-database-file-corrupted) | The current operation failed because the database is corrupted. |
| [14800012](../errorcode-data-rdb.md#14800012-empty-result-set-or-invalid-position) | ResultSet is empty or pointer index is out of bounds. |
| [14800014](../errorcode-data-rdb.md#14800014-target-instance-closed) | The target instance is already closed. |
| [14800019](../errorcode-data-rdb.md#14800019-sql-query-statement-required) | The SQL must be a query statement. |
| [14800021](../errorcode-data-rdb.md#14800021-sqlite-generic-error) | SQLite: Generic error. |
| [14800026](../errorcode-data-rdb.md#14800026-sqlite-insufficient-database-memory) | SQLite: The database is out of memory. |
| [14800028](../errorcode-data-rdb.md#14800028-sqlite-io-error) | SQLite: Some kind of disk I/O error occurred. |
| [14800030](../errorcode-data-rdb.md#14800030-sqlite-unable-to-open-the-database-file) | SQLite: Unable to open the database file. |

<a id="getdouble"></a>
## getDouble

```TypeScript
getDouble(columnIndex: number): number
```

Obtains the value from the specified column in the current row, and returns a value of Double type.

If the type of the value in the specified column is INTEGER, DOUBLE, TEXT, or BLOB, a value of Double type will be returned. If the column is null/empty, **0.0** will be returned. If the value is of any other type, 14800000will be returned.

**Since:** 9

<!--Device-ResultSet-getDouble(columnIndex: int): double--><!--Device-ResultSet-getDouble(columnIndex: int): double-End-->

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| columnIndex | number | Yes | Index of the target column, starting from 0. |

**Return value:**

| Type | Description |
| --- | --- |
| number | Value obtained. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [14800013](../errorcode-data-rdb.md#14800013-null-column-value-or-column-data-type-incompatible-with-the-api-called) | Column index is out of bounds. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types; 3. Parameter verification failed. |
| [14800000](../../apis-basic-services-kit/errorcode-settings.md#14800000-parameter-check-failed) | Inner error.<br>**Applicable version:** 12 and later |
| [14800011](../errorcode-data-rdb.md#14800011-database-file-corrupted) | The current operation failed because the database is corrupted.<br>**Applicable version:** 12 and later |
| [14800012](../errorcode-data-rdb.md#14800012-empty-result-set-or-invalid-position) | ResultSet is empty or pointer index is out of bounds.<br>**Applicable version:** 12 and later |
| [14800014](../errorcode-data-rdb.md#14800014-target-instance-closed) | The target instance is already closed.<br>**Applicable version:** 12 and later |
| [14800021](../errorcode-data-rdb.md#14800021-sqlite-generic-error) | SQLite: Generic error.<br>**Applicable version:** 12 and later |
| [14800022](../errorcode-data-rdb.md#14800022-sqlite-asynchronous-callback-request-aborted) | SQLite: Callback routine requested an abort.<br>**Applicable version:** 12 and later |
| [14800023](../errorcode-data-rdb.md#14800023-sqlite-access-denied) | SQLite: Access permission denied.<br>**Applicable version:** 12 and later |
| [14800024](../errorcode-data-rdb.md#14800024-sqlite-database-file-locked) | SQLite: The database file is locked.<br>**Applicable version:** 12 and later |
| [14800025](../errorcode-data-rdb.md#14800025-sqlite-database-table-locked) | SQLite: A table in the database is locked.<br>**Applicable version:** 12 and later |
| [14800026](../errorcode-data-rdb.md#14800026-sqlite-insufficient-database-memory) | SQLite: The database is out of memory.<br>**Applicable version:** 12 and later |
| [14800027](../errorcode-data-rdb.md#14800027-sqlite-attempt-to-write-a-readonly-database) | SQLite: Attempt to write a readonly database.<br>**Applicable version:** 12 and later |
| [14800028](../errorcode-data-rdb.md#14800028-sqlite-io-error) | SQLite: Some kind of disk I/O error occurred.<br>**Applicable version:** 12 and later |
| [14800029](../errorcode-data-rdb.md#14800029-sqlite-database-is-full) | SQLite: The database is full.<br>**Applicable version:** 12 and later |
| [14800030](../errorcode-data-rdb.md#14800030-sqlite-unable-to-open-the-database-file) | SQLite: Unable to open the database file.<br>**Applicable version:** 12 and later |
| [14800031](../errorcode-data-rdb.md#14800031-sqlite-text-or-blob-exceeds-the-limit) | SQLite: TEXT or BLOB exceeds size limit.<br>**Applicable version:** 12 and later |
| [14800032](../errorcode-data-rdb.md#14800032-sqlite-abort-due-to-constraint-violation) | SQLite: Abort due to constraint violation.<br>**Applicable version:** 12 and later |
| [14800033](../errorcode-data-rdb.md#14800033-sqlite-data-types-mismatch) | SQLite: Data type mismatch.<br>**Applicable version:** 12 and later |
| [14800034](../errorcode-data-rdb.md#14800034-incorrect-use-of-sqlite-library) | SQLite: Library used incorrectly.<br>**Applicable version:** 12 and later |

<a id="getlong"></a>
## getLong

```TypeScript
getLong(columnIndex: number): number
```

Obtains the value from the specified column in the current row, and returns a value of Long type.

If the type of the value in the specified column is INTEGER, DOUBLE, TEXT, or BLOB, a value of Long type will be returned. If the column is null/empty, **0** will be returned. If the value is of any other type, 14800000 will be returned. If the data type in the specified column is INTEGER and the value is greater than **Number.MAX_SAFE_INTEGER** or less than **Number.MIN_SAFE_INTEGER**, you are advised to use the [getString](arkts-arkdata-relationalstore-resultset-i.md#getstring-1) API to obtain the value without losing precision. If the data type in the specified column is DOUBLE, you are advised to use the [getDouble](arkts-arkdata-relationalstore-resultset-i.md#getdouble-1) API to obtain the value without losing precision.

**Since:** 9

<!--Device-ResultSet-getLong(columnIndex: int): long--><!--Device-ResultSet-getLong(columnIndex: int): long-End-->

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| columnIndex | number | Yes | Index of the target column, starting from 0. |

**Return value:**

| Type | Description |
| --- | --- |
| number | Value obtained.<br>The value range supported by this API is **Number.MIN_SAFE_INTEGER** to **Number.MAX_SAFE_INTEGER**. If the value is out of this range, use [getDouble](arkts-arkdata-relationalstore-resultset-i.md#getdouble-1) for DOUBLE values and [getString](arkts-arkdata-relationalstore-resultset-i.md#getstring-1) for INTEGER values. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [14800013](../errorcode-data-rdb.md#14800013-null-column-value-or-column-data-type-incompatible-with-the-api-called) | Column index is out of bounds. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types; 3. Parameter verification failed. |
| [14800000](../../apis-basic-services-kit/errorcode-settings.md#14800000-parameter-check-failed) | Inner error.<br>**Applicable version:** 12 and later |
| [14800011](../errorcode-data-rdb.md#14800011-database-file-corrupted) | The current operation failed because the database is corrupted.<br>**Applicable version:** 12 and later |
| [14800012](../errorcode-data-rdb.md#14800012-empty-result-set-or-invalid-position) | ResultSet is empty or pointer index is out of bounds.<br>**Applicable version:** 12 and later |
| [14800014](../errorcode-data-rdb.md#14800014-target-instance-closed) | The target instance is already closed.<br>**Applicable version:** 12 and later |
| [14800021](../errorcode-data-rdb.md#14800021-sqlite-generic-error) | SQLite: Generic error.<br>**Applicable version:** 12 and later |
| [14800022](../errorcode-data-rdb.md#14800022-sqlite-asynchronous-callback-request-aborted) | SQLite: Callback routine requested an abort.<br>**Applicable version:** 12 and later |
| [14800023](../errorcode-data-rdb.md#14800023-sqlite-access-denied) | SQLite: Access permission denied.<br>**Applicable version:** 12 and later |
| [14800024](../errorcode-data-rdb.md#14800024-sqlite-database-file-locked) | SQLite: The database file is locked.<br>**Applicable version:** 12 and later |
| [14800025](../errorcode-data-rdb.md#14800025-sqlite-database-table-locked) | SQLite: A table in the database is locked.<br>**Applicable version:** 12 and later |
| [14800026](../errorcode-data-rdb.md#14800026-sqlite-insufficient-database-memory) | SQLite: The database is out of memory.<br>**Applicable version:** 12 and later |
| [14800027](../errorcode-data-rdb.md#14800027-sqlite-attempt-to-write-a-readonly-database) | SQLite: Attempt to write a readonly database.<br>**Applicable version:** 12 and later |
| [14800028](../errorcode-data-rdb.md#14800028-sqlite-io-error) | SQLite: Some kind of disk I/O error occurred.<br>**Applicable version:** 12 and later |
| [14800029](../errorcode-data-rdb.md#14800029-sqlite-database-is-full) | SQLite: The database is full.<br>**Applicable version:** 12 and later |
| [14800030](../errorcode-data-rdb.md#14800030-sqlite-unable-to-open-the-database-file) | SQLite: Unable to open the database file.<br>**Applicable version:** 12 and later |
| [14800031](../errorcode-data-rdb.md#14800031-sqlite-text-or-blob-exceeds-the-limit) | SQLite: TEXT or BLOB exceeds size limit.<br>**Applicable version:** 12 and later |
| [14800032](../errorcode-data-rdb.md#14800032-sqlite-abort-due-to-constraint-violation) | SQLite: Abort due to constraint violation.<br>**Applicable version:** 12 and later |
| [14800033](../errorcode-data-rdb.md#14800033-sqlite-data-types-mismatch) | SQLite: Data type mismatch.<br>**Applicable version:** 12 and later |
| [14800034](../errorcode-data-rdb.md#14800034-incorrect-use-of-sqlite-library) | SQLite: Library used incorrectly.<br>**Applicable version:** 12 and later |

<a id="getrow"></a>
## getRow

```TypeScript
getRow(): ValuesBucket
```

Obtains this row.

**Since:** 11

<!--Device-ResultSet-getRow(): ValuesBucket--><!--Device-ResultSet-getRow(): ValuesBucket-End-->

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Return value:**

| Type | Description |
| --- | --- |
| [ValuesBucket](arkts-arkdata-rdb-valuesbucket-t.md) | Value of the specified row. If the result set contains duplicate column names, the return value is not as expected. You are advised to use the [getCurrentRowData](arkts-arkdata-relationalstore-resultset-i.md#getcurrentrowdata-1) API. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [14800000](../../apis-basic-services-kit/errorcode-settings.md#14800000-parameter-check-failed) | Inner error. |
| [14800011](../errorcode-data-rdb.md#14800011-database-file-corrupted) | The current operation failed because the database is corrupted.<br>**Applicable version:** 12 and later |
| [14800012](../errorcode-data-rdb.md#14800012-empty-result-set-or-invalid-position) | ResultSet is empty or pointer index is out of bounds.<br>**Applicable version:** 12 and later |
| [14800013](../errorcode-data-rdb.md#14800013-null-column-value-or-column-data-type-incompatible-with-the-api-called) | Column index is out of bounds.<br>**Applicable version:** 12 and later |
| [14800014](../errorcode-data-rdb.md#14800014-target-instance-closed) | The target instance is already closed.<br>**Applicable version:** 12 and later |
| [14800021](../errorcode-data-rdb.md#14800021-sqlite-generic-error) | SQLite: Generic error.<br>**Applicable version:** 12 and later |
| [14800022](../errorcode-data-rdb.md#14800022-sqlite-asynchronous-callback-request-aborted) | SQLite: Callback routine requested an abort.<br>**Applicable version:** 12 and later |
| [14800023](../errorcode-data-rdb.md#14800023-sqlite-access-denied) | SQLite: Access permission denied.<br>**Applicable version:** 12 and later |
| [14800024](../errorcode-data-rdb.md#14800024-sqlite-database-file-locked) | SQLite: The database file is locked.<br>**Applicable version:** 12 and later |
| [14800025](../errorcode-data-rdb.md#14800025-sqlite-database-table-locked) | SQLite: A table in the database is locked.<br>**Applicable version:** 12 and later |
| [14800026](../errorcode-data-rdb.md#14800026-sqlite-insufficient-database-memory) | SQLite: The database is out of memory.<br>**Applicable version:** 12 and later |
| [14800027](../errorcode-data-rdb.md#14800027-sqlite-attempt-to-write-a-readonly-database) | SQLite: Attempt to write a readonly database.<br>**Applicable version:** 12 and later |
| [14800028](../errorcode-data-rdb.md#14800028-sqlite-io-error) | SQLite: Some kind of disk I/O error occurred.<br>**Applicable version:** 12 and later |
| [14800029](../errorcode-data-rdb.md#14800029-sqlite-database-is-full) | SQLite: The database is full.<br>**Applicable version:** 12 and later |
| [14800030](../errorcode-data-rdb.md#14800030-sqlite-unable-to-open-the-database-file) | SQLite: Unable to open the database file.<br>**Applicable version:** 12 and later |
| [14800031](../errorcode-data-rdb.md#14800031-sqlite-text-or-blob-exceeds-the-limit) | SQLite: TEXT or BLOB exceeds size limit.<br>**Applicable version:** 12 and later |
| [14800032](../errorcode-data-rdb.md#14800032-sqlite-abort-due-to-constraint-violation) | SQLite: Abort due to constraint violation.<br>**Applicable version:** 12 and later |
| [14800033](../errorcode-data-rdb.md#14800033-sqlite-data-types-mismatch) | SQLite: Data type mismatch.<br>**Applicable version:** 12 and later |
| [14800034](../errorcode-data-rdb.md#14800034-incorrect-use-of-sqlite-library) | SQLite: Library used incorrectly.<br>**Applicable version:** 12 and later |

<a id="getrows"></a>
## getRows

```TypeScript
getRows(maxCount: number, position?: number): Promise<Array<ValuesBucket>>
```

Obtains a specified amount of data from the result set. This API uses a promise to return the result. Do not call this API concurrently with other APIs of [ResultSet](arkts-data-relationalstore.md). Otherwise, unexpected data may be obtained.

**Since:** 18

<!--Device-ResultSet-getRows(maxCount: int, position?: int): Promise<Array<ValuesBucket>>--><!--Device-ResultSet-getRows(maxCount: int, position?: int): Promise<Array<ValuesBucket>>-End-->

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| maxCount | number | Yes | Number of rows to obtain. The value is a positive integer. If the value is not a positive integer, error 401 will be thrown. |
| position | number | No | Start position for obtaining data from the result set. The value is a non-negative integer. If this parameter is not specified, data is obtained from the current row of the result set (by default, it is the first row of the result set when data is obtained for the first time). If the value is not a non-negative integer, error code 401 will be thrown. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;ValuesBucket&gt;&gt; | Promise used to return **maxCount** rows of data obtained. If the number of remaining records is less than **maxCount**, the remaining records are returned. Returning an empty array indicates that the end of the result set is reached. If the result set contains duplicate column names,the return values are not as expected. You are advised to use the [getRowsData](arkts-arkdata-relationalstore-resultset-i.md#getrowsdata-1) API. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types; 3. Parameter verification failed. |
| [14800000](../../apis-basic-services-kit/errorcode-settings.md#14800000-parameter-check-failed) | Inner error. |
| [14800011](../errorcode-data-rdb.md#14800011-database-file-corrupted) | The current operation failed because the database is corrupted. |
| [14800012](../errorcode-data-rdb.md#14800012-empty-result-set-or-invalid-position) | ResultSet is empty or pointer index is out of bounds. |
| [14800013](../errorcode-data-rdb.md#14800013-null-column-value-or-column-data-type-incompatible-with-the-api-called) | Column index is out of bounds. |
| [14800014](../errorcode-data-rdb.md#14800014-target-instance-closed) | The target instance is already closed. |
| [14800021](../errorcode-data-rdb.md#14800021-sqlite-generic-error) | SQLite: Generic error. |
| [14800022](../errorcode-data-rdb.md#14800022-sqlite-asynchronous-callback-request-aborted) | SQLite: Callback routine requested an abort. |
| [14800023](../errorcode-data-rdb.md#14800023-sqlite-access-denied) | SQLite: Access permission denied. |
| [14800024](../errorcode-data-rdb.md#14800024-sqlite-database-file-locked) | SQLite: The database file is locked. |
| [14800025](../errorcode-data-rdb.md#14800025-sqlite-database-table-locked) | SQLite: A table in the database is locked. |
| [14800026](../errorcode-data-rdb.md#14800026-sqlite-insufficient-database-memory) | SQLite: The database is out of memory. |
| [14800028](../errorcode-data-rdb.md#14800028-sqlite-io-error) | SQLite: Some kind of disk I/O error occurred. |
| [14800029](../errorcode-data-rdb.md#14800029-sqlite-database-is-full) | SQLite: The database is full. |
| [14800031](../errorcode-data-rdb.md#14800031-sqlite-text-or-blob-exceeds-the-limit) | SQLite: TEXT or BLOB exceeds size limit. |
| [14800032](../errorcode-data-rdb.md#14800032-sqlite-abort-due-to-constraint-violation) | SQLite: Abort due to constraint violation. |
| [14800033](../errorcode-data-rdb.md#14800033-sqlite-data-types-mismatch) | SQLite: Data type mismatch. |

<a id="getrowsdata"></a>
## getRowsData

```TypeScript
getRowsData(maxCount: number, position?: number): Promise<RowsData>
```

Obtains data of a specified number of rows from the specified position. This API uses a promise to return the result. Do not call this API concurrently with other APIs of [ResultSet](arkts-data-relationalstore.md). Otherwise, unexpected data may be obtained.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

<!--Device-ResultSet-getRowsData(maxCount: int, position?: int): Promise<RowsData>--><!--Device-ResultSet-getRowsData(maxCount: int, position?: int): Promise<RowsData>-End-->

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| maxCount | number | Yes | Number of rows to obtain. The value is a positive integer. If the value is not a positive integer, error 14800001 will be thrown. |
| position | number | No | Start position for obtaining data from the result set. The value is a non-negative integer. If this parameter is not specified, data is obtained from the current row of the result set (by default, it is the first row of the result set when data is obtained for the first time). If the value is not a non-negative integer, error code 14800001 will be thrown. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;RowsData&gt; | Promise used to return **maxCount** rows of data obtained. If the number of remaining records is less than **maxCount**, the remaining records are returned. Returning an empty array indicates that the end of the result set is reached. The values of columns with the same name can be obtained. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [14800001](../errorcode-data-rdb.md#14800001-invalid-arguments) | Invalid arguments. Possible causes: 1. Parameter is out of valid range. |
| [14800011](../errorcode-data-rdb.md#14800011-database-file-corrupted) | The current operation failed because the database is corrupted. |
| [14800012](../errorcode-data-rdb.md#14800012-empty-result-set-or-invalid-position) | ResultSet is empty or pointer index is out of bounds. |
| [14800014](../errorcode-data-rdb.md#14800014-target-instance-closed) | The target instance is already closed. |
| [14800019](../errorcode-data-rdb.md#14800019-sql-query-statement-required) | The SQL must be a query statement. |
| [14800021](../errorcode-data-rdb.md#14800021-sqlite-generic-error) | SQLite: Generic error. |
| [14800026](../errorcode-data-rdb.md#14800026-sqlite-insufficient-database-memory) | SQLite: The database is out of memory. |
| [14800028](../errorcode-data-rdb.md#14800028-sqlite-io-error) | SQLite: Some kind of disk I/O error occurred. |
| [14800030](../errorcode-data-rdb.md#14800030-sqlite-unable-to-open-the-database-file) | SQLite: Unable to open the database file. |
| [14800031](../errorcode-data-rdb.md#14800031-sqlite-text-or-blob-exceeds-the-limit) | SQLite: TEXT or BLOB exceeds size limit. |

<a id="getsendablerow"></a>
## getSendableRow

```TypeScript
getSendableRow(): sendableRelationalStore.ValuesBucket
```

Obtains the sendable data from the current row. The sendable data can be passed across threads.

**Since:** 12

<!--Device-ResultSet-getSendableRow(): sendableRelationalStore.ValuesBucket--><!--Device-ResultSet-getSendableRow(): sendableRelationalStore.ValuesBucket-End-->

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Return value:**

| Type | Description |
| --- | --- |
| sendableRelationalStore.ValuesBucket | Sendable data obtained for cross-thread transfer. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [14800000](../../apis-basic-services-kit/errorcode-settings.md#14800000-parameter-check-failed) | Inner error. |
| [14800011](../errorcode-data-rdb.md#14800011-database-file-corrupted) | The current operation failed because the database is corrupted. |
| [14800012](../errorcode-data-rdb.md#14800012-empty-result-set-or-invalid-position) | ResultSet is empty or pointer index is out of bounds. |
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

<a id="getstring"></a>
## getString

```TypeScript
getString(columnIndex: number): string
```

Obtains the value from the specified column in the current row, and returns it in the form of a string.

If the type of the value in the specified column is INTEGER, DOUBLE, TEXT, or BLOB, a string will be returned. If the value type is INTEGER and the column is null/empty, an empty string **""** will be returned. If the value is of any other type, 14800000 will be returned. If the value in the current column is of the DOUBLE type, the precision may be lost. You are advised to use [getDouble](arkts-arkdata-relationalstore-resultset-i.md#getdouble-1) to obtain the value.

**Since:** 9

<!--Device-ResultSet-getString(columnIndex: int): string--><!--Device-ResultSet-getString(columnIndex: int): string-End-->

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| columnIndex | number | Yes | Index of the target column, starting from 0. |

**Return value:**

| Type | Description |
| --- | --- |
| string | Value obtained. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [14800013](../errorcode-data-rdb.md#14800013-null-column-value-or-column-data-type-incompatible-with-the-api-called) | Column index is out of bounds. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types; 3. Parameter verification failed. |
| [14800000](../../apis-basic-services-kit/errorcode-settings.md#14800000-parameter-check-failed) | Inner error.<br>**Applicable version:** 12 and later |
| [14800011](../errorcode-data-rdb.md#14800011-database-file-corrupted) | The current operation failed because the database is corrupted.<br>**Applicable version:** 12 and later |
| [14800012](../errorcode-data-rdb.md#14800012-empty-result-set-or-invalid-position) | ResultSet is empty or pointer index is out of bounds.<br>**Applicable version:** 12 and later |
| [14800014](../errorcode-data-rdb.md#14800014-target-instance-closed) | The target instance is already closed.<br>**Applicable version:** 12 and later |
| [14800021](../errorcode-data-rdb.md#14800021-sqlite-generic-error) | SQLite: Generic error.<br>**Applicable version:** 12 and later |
| [14800022](../errorcode-data-rdb.md#14800022-sqlite-asynchronous-callback-request-aborted) | SQLite: Callback routine requested an abort.<br>**Applicable version:** 12 and later |
| [14800023](../errorcode-data-rdb.md#14800023-sqlite-access-denied) | SQLite: Access permission denied.<br>**Applicable version:** 12 and later |
| [14800024](../errorcode-data-rdb.md#14800024-sqlite-database-file-locked) | SQLite: The database file is locked.<br>**Applicable version:** 12 and later |
| [14800025](../errorcode-data-rdb.md#14800025-sqlite-database-table-locked) | SQLite: A table in the database is locked.<br>**Applicable version:** 12 and later |
| [14800026](../errorcode-data-rdb.md#14800026-sqlite-insufficient-database-memory) | SQLite: The database is out of memory.<br>**Applicable version:** 12 and later |
| [14800027](../errorcode-data-rdb.md#14800027-sqlite-attempt-to-write-a-readonly-database) | SQLite: Attempt to write a readonly database.<br>**Applicable version:** 12 and later |
| [14800028](../errorcode-data-rdb.md#14800028-sqlite-io-error) | SQLite: Some kind of disk I/O error occurred.<br>**Applicable version:** 12 and later |
| [14800029](../errorcode-data-rdb.md#14800029-sqlite-database-is-full) | SQLite: The database is full.<br>**Applicable version:** 12 and later |
| [14800030](../errorcode-data-rdb.md#14800030-sqlite-unable-to-open-the-database-file) | SQLite: Unable to open the database file.<br>**Applicable version:** 12 and later |
| [14800031](../errorcode-data-rdb.md#14800031-sqlite-text-or-blob-exceeds-the-limit) | SQLite: TEXT or BLOB exceeds size limit.<br>**Applicable version:** 12 and later |
| [14800032](../errorcode-data-rdb.md#14800032-sqlite-abort-due-to-constraint-violation) | SQLite: Abort due to constraint violation.<br>**Applicable version:** 12 and later |
| [14800033](../errorcode-data-rdb.md#14800033-sqlite-data-types-mismatch) | SQLite: Data type mismatch.<br>**Applicable version:** 12 and later |
| [14800034](../errorcode-data-rdb.md#14800034-incorrect-use-of-sqlite-library) | SQLite: Library used incorrectly.<br>**Applicable version:** 12 and later |

<a id="getvalue"></a>
## getValue

```TypeScript
getValue(columnIndex: number): ValueType
```

Obtains the value from the specified column in the current row. If the value type is any of **ValueType**, the value of the corresponding type will be returned. Otherwise, 14800000 will be returned. If the value type is INTEGER and the value is greater than **Number.MAX_SAFE_INTEGER** or less than **Number.MIN_SAFE_INTEGER**, you are advised to use the [getString](arkts-arkdata-relationalstore-resultset-i.md#getstring-1) API to obtain the value without losing precision.

**Since:** 12

<!--Device-ResultSet-getValue(columnIndex: int): ValueType--><!--Device-ResultSet-getValue(columnIndex: int): ValueType-End-->

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| columnIndex | number | Yes | Index of the target column, starting from 0. |

**Return value:**

| Type | Description |
| --- | --- |
| [ValueType](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-pasteboard-valuetype-t.md) | Allowed data field types. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types; 3. Parameter verification failed. |
| [14800000](../../apis-basic-services-kit/errorcode-settings.md#14800000-parameter-check-failed) | Inner error. |
| [14800011](../errorcode-data-rdb.md#14800011-database-file-corrupted) | The current operation failed because the database is corrupted. |
| [14800012](../errorcode-data-rdb.md#14800012-empty-result-set-or-invalid-position) | ResultSet is empty or pointer index is out of bounds. |
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

<a id="goto"></a>
## goTo

```TypeScript
goTo(offset: number): boolean
```

Moves the result set pointer based on the offset specified.

**Since:** 9

<!--Device-ResultSet-goTo(offset: int): boolean--><!--Device-ResultSet-goTo(offset: int): boolean-End-->

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| offset | number | Yes | Offset relative to the position of the current result set pointer. A positive value means to move the pointer backward, and a negative value means to move the pointer forward. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns **true** if the operation is successful; returns **false** otherwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [14800012](../errorcode-data-rdb.md#14800012-empty-result-set-or-invalid-position) | ResultSet is empty or pointer index is out of bounds. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types; 3. Parameter verification failed. |
| [14800000](../../apis-basic-services-kit/errorcode-settings.md#14800000-parameter-check-failed) | Inner error.<br>**Applicable version:** 12 and later |
| [14800011](../errorcode-data-rdb.md#14800011-database-file-corrupted) | The current operation failed because the database is corrupted.<br>**Applicable version:** 12 and later |
| [14800014](../errorcode-data-rdb.md#14800014-target-instance-closed) | The target instance is already closed.<br>**Applicable version:** 12 and later |
| [14800019](../errorcode-data-rdb.md#14800019-sql-query-statement-required) | The SQL must be a query statement.<br>**Applicable version:** 12 and later |
| [14800021](../errorcode-data-rdb.md#14800021-sqlite-generic-error) | SQLite: Generic error.<br>**Applicable version:** 12 and later |
| [14800022](../errorcode-data-rdb.md#14800022-sqlite-asynchronous-callback-request-aborted) | SQLite: Callback routine requested an abort.<br>**Applicable version:** 12 and later |
| [14800023](../errorcode-data-rdb.md#14800023-sqlite-access-denied) | SQLite: Access permission denied.<br>**Applicable version:** 12 and later |
| [14800024](../errorcode-data-rdb.md#14800024-sqlite-database-file-locked) | SQLite: The database file is locked.<br>**Applicable version:** 12 and later |
| [14800025](../errorcode-data-rdb.md#14800025-sqlite-database-table-locked) | SQLite: A table in the database is locked.<br>**Applicable version:** 12 and later |
| [14800026](../errorcode-data-rdb.md#14800026-sqlite-insufficient-database-memory) | SQLite: The database is out of memory.<br>**Applicable version:** 12 and later |
| [14800027](../errorcode-data-rdb.md#14800027-sqlite-attempt-to-write-a-readonly-database) | SQLite: Attempt to write a readonly database.<br>**Applicable version:** 12 and later |
| [14800028](../errorcode-data-rdb.md#14800028-sqlite-io-error) | SQLite: Some kind of disk I/O error occurred.<br>**Applicable version:** 12 and later |
| [14800029](../errorcode-data-rdb.md#14800029-sqlite-database-is-full) | SQLite: The database is full.<br>**Applicable version:** 12 and later |
| [14800030](../errorcode-data-rdb.md#14800030-sqlite-unable-to-open-the-database-file) | SQLite: Unable to open the database file.<br>**Applicable version:** 12 and later |
| [14800031](../errorcode-data-rdb.md#14800031-sqlite-text-or-blob-exceeds-the-limit) | SQLite: TEXT or BLOB exceeds size limit.<br>**Applicable version:** 12 and later |
| [14800032](../errorcode-data-rdb.md#14800032-sqlite-abort-due-to-constraint-violation) | SQLite: Abort due to constraint violation.<br>**Applicable version:** 12 and later |
| [14800033](../errorcode-data-rdb.md#14800033-sqlite-data-types-mismatch) | SQLite: Data type mismatch.<br>**Applicable version:** 12 and later |
| [14800034](../errorcode-data-rdb.md#14800034-incorrect-use-of-sqlite-library) | SQLite: Library used incorrectly.<br>**Applicable version:** 12 and later |

<a id="gotofirstrow"></a>
## goToFirstRow

```TypeScript
goToFirstRow(): boolean
```

Moves to the first row of the result set.

**Since:** 9

<!--Device-ResultSet-goToFirstRow(): boolean--><!--Device-ResultSet-goToFirstRow(): boolean-End-->

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns **true** if the operation is successful; returns **false** otherwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [14800012](../errorcode-data-rdb.md#14800012-empty-result-set-or-invalid-position) | ResultSet is empty or pointer index is out of bounds. |
| [14800000](../../apis-basic-services-kit/errorcode-settings.md#14800000-parameter-check-failed) | Inner error.<br>**Applicable version:** 12 and later |
| [14800011](../errorcode-data-rdb.md#14800011-database-file-corrupted) | The current operation failed because the database is corrupted.<br>**Applicable version:** 12 and later |
| [14800014](../errorcode-data-rdb.md#14800014-target-instance-closed) | The target instance is already closed.<br>**Applicable version:** 12 and later |
| [14800019](../errorcode-data-rdb.md#14800019-sql-query-statement-required) | The SQL must be a query statement.<br>**Applicable version:** 12 and later |
| [14800021](../errorcode-data-rdb.md#14800021-sqlite-generic-error) | SQLite: Generic error.<br>**Applicable version:** 12 and later |
| [14800022](../errorcode-data-rdb.md#14800022-sqlite-asynchronous-callback-request-aborted) | SQLite: Callback routine requested an abort.<br>**Applicable version:** 12 and later |
| [14800023](../errorcode-data-rdb.md#14800023-sqlite-access-denied) | SQLite: Access permission denied.<br>**Applicable version:** 12 and later |
| [14800024](../errorcode-data-rdb.md#14800024-sqlite-database-file-locked) | SQLite: The database file is locked.<br>**Applicable version:** 12 and later |
| [14800025](../errorcode-data-rdb.md#14800025-sqlite-database-table-locked) | SQLite: A table in the database is locked.<br>**Applicable version:** 12 and later |
| [14800026](../errorcode-data-rdb.md#14800026-sqlite-insufficient-database-memory) | SQLite: The database is out of memory.<br>**Applicable version:** 12 and later |
| [14800027](../errorcode-data-rdb.md#14800027-sqlite-attempt-to-write-a-readonly-database) | SQLite: Attempt to write a readonly database.<br>**Applicable version:** 12 and later |
| [14800028](../errorcode-data-rdb.md#14800028-sqlite-io-error) | SQLite: Some kind of disk I/O error occurred.<br>**Applicable version:** 12 and later |
| [14800029](../errorcode-data-rdb.md#14800029-sqlite-database-is-full) | SQLite: The database is full.<br>**Applicable version:** 12 and later |
| [14800030](../errorcode-data-rdb.md#14800030-sqlite-unable-to-open-the-database-file) | SQLite: Unable to open the database file.<br>**Applicable version:** 12 and later |
| [14800031](../errorcode-data-rdb.md#14800031-sqlite-text-or-blob-exceeds-the-limit) | SQLite: TEXT or BLOB exceeds size limit.<br>**Applicable version:** 12 and later |
| [14800032](../errorcode-data-rdb.md#14800032-sqlite-abort-due-to-constraint-violation) | SQLite: Abort due to constraint violation.<br>**Applicable version:** 12 and later |
| [14800033](../errorcode-data-rdb.md#14800033-sqlite-data-types-mismatch) | SQLite: Data type mismatch.<br>**Applicable version:** 12 and later |
| [14800034](../errorcode-data-rdb.md#14800034-incorrect-use-of-sqlite-library) | SQLite: Library used incorrectly.<br>**Applicable version:** 12 and later |

<a id="gotolastrow"></a>
## goToLastRow

```TypeScript
goToLastRow(): boolean
```

Moves to the last row of the result set.

**Since:** 9

<!--Device-ResultSet-goToLastRow(): boolean--><!--Device-ResultSet-goToLastRow(): boolean-End-->

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns **true** if the operation is successful; returns **false** otherwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [14800012](../errorcode-data-rdb.md#14800012-empty-result-set-or-invalid-position) | ResultSet is empty or pointer index is out of bounds. |
| [14800000](../../apis-basic-services-kit/errorcode-settings.md#14800000-parameter-check-failed) | Inner error.<br>**Applicable version:** 12 and later |
| [14800011](../errorcode-data-rdb.md#14800011-database-file-corrupted) | The current operation failed because the database is corrupted.<br>**Applicable version:** 12 and later |
| [14800014](../errorcode-data-rdb.md#14800014-target-instance-closed) | The target instance is already closed.<br>**Applicable version:** 12 and later |
| [14800019](../errorcode-data-rdb.md#14800019-sql-query-statement-required) | The SQL must be a query statement.<br>**Applicable version:** 12 and later |
| [14800021](../errorcode-data-rdb.md#14800021-sqlite-generic-error) | SQLite: Generic error.<br>**Applicable version:** 12 and later |
| [14800022](../errorcode-data-rdb.md#14800022-sqlite-asynchronous-callback-request-aborted) | SQLite: Callback routine requested an abort.<br>**Applicable version:** 12 and later |
| [14800023](../errorcode-data-rdb.md#14800023-sqlite-access-denied) | SQLite: Access permission denied.<br>**Applicable version:** 12 and later |
| [14800024](../errorcode-data-rdb.md#14800024-sqlite-database-file-locked) | SQLite: The database file is locked.<br>**Applicable version:** 12 and later |
| [14800025](../errorcode-data-rdb.md#14800025-sqlite-database-table-locked) | SQLite: A table in the database is locked.<br>**Applicable version:** 12 and later |
| [14800026](../errorcode-data-rdb.md#14800026-sqlite-insufficient-database-memory) | SQLite: The database is out of memory.<br>**Applicable version:** 12 and later |
| [14800027](../errorcode-data-rdb.md#14800027-sqlite-attempt-to-write-a-readonly-database) | SQLite: Attempt to write a readonly database.<br>**Applicable version:** 12 and later |
| [14800028](../errorcode-data-rdb.md#14800028-sqlite-io-error) | SQLite: Some kind of disk I/O error occurred.<br>**Applicable version:** 12 and later |
| [14800029](../errorcode-data-rdb.md#14800029-sqlite-database-is-full) | SQLite: The database is full.<br>**Applicable version:** 12 and later |
| [14800030](../errorcode-data-rdb.md#14800030-sqlite-unable-to-open-the-database-file) | SQLite: Unable to open the database file.<br>**Applicable version:** 12 and later |
| [14800031](../errorcode-data-rdb.md#14800031-sqlite-text-or-blob-exceeds-the-limit) | SQLite: TEXT or BLOB exceeds size limit.<br>**Applicable version:** 12 and later |
| [14800032](../errorcode-data-rdb.md#14800032-sqlite-abort-due-to-constraint-violation) | SQLite: Abort due to constraint violation.<br>**Applicable version:** 12 and later |
| [14800033](../errorcode-data-rdb.md#14800033-sqlite-data-types-mismatch) | SQLite: Data type mismatch.<br>**Applicable version:** 12 and later |
| [14800034](../errorcode-data-rdb.md#14800034-incorrect-use-of-sqlite-library) | SQLite: Library used incorrectly.<br>**Applicable version:** 12 and later |

<a id="gotonextrow"></a>
## goToNextRow

```TypeScript
goToNextRow(): boolean
```

Moves to the next row in the result set.

**Since:** 9

<!--Device-ResultSet-goToNextRow(): boolean--><!--Device-ResultSet-goToNextRow(): boolean-End-->

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns **true** if the operation is successful; returns **false** otherwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [14800012](../errorcode-data-rdb.md#14800012-empty-result-set-or-invalid-position) | ResultSet is empty or pointer index is out of bounds. |
| [14800000](../../apis-basic-services-kit/errorcode-settings.md#14800000-parameter-check-failed) | Inner error.<br>**Applicable version:** 12 and later |
| [14800011](../errorcode-data-rdb.md#14800011-database-file-corrupted) | The current operation failed because the database is corrupted.<br>**Applicable version:** 12 and later |
| [14800014](../errorcode-data-rdb.md#14800014-target-instance-closed) | The target instance is already closed.<br>**Applicable version:** 12 and later |
| [14800019](../errorcode-data-rdb.md#14800019-sql-query-statement-required) | The SQL must be a query statement.<br>**Applicable version:** 12 and later |
| [14800021](../errorcode-data-rdb.md#14800021-sqlite-generic-error) | SQLite: Generic error.<br>**Applicable version:** 12 and later |
| [14800022](../errorcode-data-rdb.md#14800022-sqlite-asynchronous-callback-request-aborted) | SQLite: Callback routine requested an abort.<br>**Applicable version:** 12 and later |
| [14800023](../errorcode-data-rdb.md#14800023-sqlite-access-denied) | SQLite: Access permission denied.<br>**Applicable version:** 12 and later |
| [14800024](../errorcode-data-rdb.md#14800024-sqlite-database-file-locked) | SQLite: The database file is locked.<br>**Applicable version:** 12 and later |
| [14800025](../errorcode-data-rdb.md#14800025-sqlite-database-table-locked) | SQLite: A table in the database is locked.<br>**Applicable version:** 12 and later |
| [14800026](../errorcode-data-rdb.md#14800026-sqlite-insufficient-database-memory) | SQLite: The database is out of memory.<br>**Applicable version:** 12 and later |
| [14800027](../errorcode-data-rdb.md#14800027-sqlite-attempt-to-write-a-readonly-database) | SQLite: Attempt to write a readonly database.<br>**Applicable version:** 12 and later |
| [14800028](../errorcode-data-rdb.md#14800028-sqlite-io-error) | SQLite: Some kind of disk I/O error occurred.<br>**Applicable version:** 12 and later |
| [14800029](../errorcode-data-rdb.md#14800029-sqlite-database-is-full) | SQLite: The database is full.<br>**Applicable version:** 12 and later |
| [14800030](../errorcode-data-rdb.md#14800030-sqlite-unable-to-open-the-database-file) | SQLite: Unable to open the database file.<br>**Applicable version:** 12 and later |
| [14800031](../errorcode-data-rdb.md#14800031-sqlite-text-or-blob-exceeds-the-limit) | SQLite: TEXT or BLOB exceeds size limit.<br>**Applicable version:** 12 and later |
| [14800032](../errorcode-data-rdb.md#14800032-sqlite-abort-due-to-constraint-violation) | SQLite: Abort due to constraint violation.<br>**Applicable version:** 12 and later |
| [14800033](../errorcode-data-rdb.md#14800033-sqlite-data-types-mismatch) | SQLite: Data type mismatch.<br>**Applicable version:** 12 and later |
| [14800034](../errorcode-data-rdb.md#14800034-incorrect-use-of-sqlite-library) | SQLite: Library used incorrectly.<br>**Applicable version:** 12 and later |

<a id="gotopreviousrow"></a>
## goToPreviousRow

```TypeScript
goToPreviousRow(): boolean
```

Moves to the previous row in the result set.

**Since:** 9

<!--Device-ResultSet-goToPreviousRow(): boolean--><!--Device-ResultSet-goToPreviousRow(): boolean-End-->

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns **true** if the operation is successful; returns **false** otherwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [14800012](../errorcode-data-rdb.md#14800012-empty-result-set-or-invalid-position) | ResultSet is empty or pointer index is out of bounds. |
| [14800000](../../apis-basic-services-kit/errorcode-settings.md#14800000-parameter-check-failed) | Inner error.<br>**Applicable version:** 12 and later |
| [14800011](../errorcode-data-rdb.md#14800011-database-file-corrupted) | The current operation failed because the database is corrupted.<br>**Applicable version:** 12 and later |
| [14800014](../errorcode-data-rdb.md#14800014-target-instance-closed) | The target instance is already closed.<br>**Applicable version:** 12 and later |
| [14800019](../errorcode-data-rdb.md#14800019-sql-query-statement-required) | The SQL must be a query statement.<br>**Applicable version:** 12 and later |
| [14800021](../errorcode-data-rdb.md#14800021-sqlite-generic-error) | SQLite: Generic error.<br>**Applicable version:** 12 and later |
| [14800022](../errorcode-data-rdb.md#14800022-sqlite-asynchronous-callback-request-aborted) | SQLite: Callback routine requested an abort.<br>**Applicable version:** 12 and later |
| [14800023](../errorcode-data-rdb.md#14800023-sqlite-access-denied) | SQLite: Access permission denied.<br>**Applicable version:** 12 and later |
| [14800024](../errorcode-data-rdb.md#14800024-sqlite-database-file-locked) | SQLite: The database file is locked.<br>**Applicable version:** 12 and later |
| [14800025](../errorcode-data-rdb.md#14800025-sqlite-database-table-locked) | SQLite: A table in the database is locked.<br>**Applicable version:** 12 and later |
| [14800026](../errorcode-data-rdb.md#14800026-sqlite-insufficient-database-memory) | SQLite: The database is out of memory.<br>**Applicable version:** 12 and later |
| [14800027](../errorcode-data-rdb.md#14800027-sqlite-attempt-to-write-a-readonly-database) | SQLite: Attempt to write a readonly database.<br>**Applicable version:** 12 and later |
| [14800028](../errorcode-data-rdb.md#14800028-sqlite-io-error) | SQLite: Some kind of disk I/O error occurred.<br>**Applicable version:** 12 and later |
| [14800029](../errorcode-data-rdb.md#14800029-sqlite-database-is-full) | SQLite: The database is full.<br>**Applicable version:** 12 and later |
| [14800030](../errorcode-data-rdb.md#14800030-sqlite-unable-to-open-the-database-file) | SQLite: Unable to open the database file.<br>**Applicable version:** 12 and later |
| [14800031](../errorcode-data-rdb.md#14800031-sqlite-text-or-blob-exceeds-the-limit) | SQLite: TEXT or BLOB exceeds size limit.<br>**Applicable version:** 12 and later |
| [14800032](../errorcode-data-rdb.md#14800032-sqlite-abort-due-to-constraint-violation) | SQLite: Abort due to constraint violation.<br>**Applicable version:** 12 and later |
| [14800033](../errorcode-data-rdb.md#14800033-sqlite-data-types-mismatch) | SQLite: Data type mismatch.<br>**Applicable version:** 12 and later |
| [14800034](../errorcode-data-rdb.md#14800034-incorrect-use-of-sqlite-library) | SQLite: Library used incorrectly.<br>**Applicable version:** 12 and later |

<a id="gotorow"></a>
## goToRow

```TypeScript
goToRow(position: number): boolean
```

Moves to the specified row in the result set.

**Since:** 9

<!--Device-ResultSet-goToRow(position: int): boolean--><!--Device-ResultSet-goToRow(position: int): boolean-End-->

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| position | number | Yes | Destination position to move to. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns **true** if the operation is successful; returns **false** otherwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [14800012](../errorcode-data-rdb.md#14800012-empty-result-set-or-invalid-position) | ResultSet is empty or pointer index is out of bounds. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types; 3. Parameter verification failed. |
| [14800000](../../apis-basic-services-kit/errorcode-settings.md#14800000-parameter-check-failed) | Inner error.<br>**Applicable version:** 12 and later |
| [14800011](../errorcode-data-rdb.md#14800011-database-file-corrupted) | The current operation failed because the database is corrupted.<br>**Applicable version:** 12 and later |
| [14800014](../errorcode-data-rdb.md#14800014-target-instance-closed) | The target instance is already closed.<br>**Applicable version:** 12 and later |
| [14800019](../errorcode-data-rdb.md#14800019-sql-query-statement-required) | The SQL must be a query statement.<br>**Applicable version:** 12 and later |
| [14800021](../errorcode-data-rdb.md#14800021-sqlite-generic-error) | SQLite: Generic error.<br>**Applicable version:** 12 and later |
| [14800022](../errorcode-data-rdb.md#14800022-sqlite-asynchronous-callback-request-aborted) | SQLite: Callback routine requested an abort.<br>**Applicable version:** 12 and later |
| [14800023](../errorcode-data-rdb.md#14800023-sqlite-access-denied) | SQLite: Access permission denied.<br>**Applicable version:** 12 and later |
| [14800024](../errorcode-data-rdb.md#14800024-sqlite-database-file-locked) | SQLite: The database file is locked.<br>**Applicable version:** 12 and later |
| [14800025](../errorcode-data-rdb.md#14800025-sqlite-database-table-locked) | SQLite: A table in the database is locked.<br>**Applicable version:** 12 and later |
| [14800026](../errorcode-data-rdb.md#14800026-sqlite-insufficient-database-memory) | SQLite: The database is out of memory.<br>**Applicable version:** 12 and later |
| [14800027](../errorcode-data-rdb.md#14800027-sqlite-attempt-to-write-a-readonly-database) | SQLite: Attempt to write a readonly database.<br>**Applicable version:** 12 and later |
| [14800028](../errorcode-data-rdb.md#14800028-sqlite-io-error) | SQLite: Some kind of disk I/O error occurred.<br>**Applicable version:** 12 and later |
| [14800029](../errorcode-data-rdb.md#14800029-sqlite-database-is-full) | SQLite: The database is full.<br>**Applicable version:** 12 and later |
| [14800030](../errorcode-data-rdb.md#14800030-sqlite-unable-to-open-the-database-file) | SQLite: Unable to open the database file.<br>**Applicable version:** 12 and later |
| [14800031](../errorcode-data-rdb.md#14800031-sqlite-text-or-blob-exceeds-the-limit) | SQLite: TEXT or BLOB exceeds size limit.<br>**Applicable version:** 12 and later |
| [14800032](../errorcode-data-rdb.md#14800032-sqlite-abort-due-to-constraint-violation) | SQLite: Abort due to constraint violation.<br>**Applicable version:** 12 and later |
| [14800033](../errorcode-data-rdb.md#14800033-sqlite-data-types-mismatch) | SQLite: Data type mismatch.<br>**Applicable version:** 12 and later |
| [14800034](../errorcode-data-rdb.md#14800034-incorrect-use-of-sqlite-library) | SQLite: Library used incorrectly.<br>**Applicable version:** 12 and later |

<a id="iscolumnnull"></a>
## isColumnNull

```TypeScript
isColumnNull(columnIndex: number): boolean
```

Checks whether the value in the specified column is null.

**Since:** 9

<!--Device-ResultSet-isColumnNull(columnIndex: int): boolean--><!--Device-ResultSet-isColumnNull(columnIndex: int): boolean-End-->

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| columnIndex | number | Yes | Index of the target column, starting from 0. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns **true** if the value is null; returns **false** otherwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [14800013](../errorcode-data-rdb.md#14800013-null-column-value-or-column-data-type-incompatible-with-the-api-called) | Column index is out of bounds. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types; 3. Parameter verification failed. |
| [14800000](../../apis-basic-services-kit/errorcode-settings.md#14800000-parameter-check-failed) | Inner error.<br>**Applicable version:** 12 and later |
| [14800011](../errorcode-data-rdb.md#14800011-database-file-corrupted) | The current operation failed because the database is corrupted.<br>**Applicable version:** 12 and later |
| [14800012](../errorcode-data-rdb.md#14800012-empty-result-set-or-invalid-position) | ResultSet is empty or pointer index is out of bounds.<br>**Applicable version:** 12 and later |
| [14800014](../errorcode-data-rdb.md#14800014-target-instance-closed) | The target instance is already closed.<br>**Applicable version:** 12 and later |
| [14800021](../errorcode-data-rdb.md#14800021-sqlite-generic-error) | SQLite: Generic error.<br>**Applicable version:** 12 and later |
| [14800022](../errorcode-data-rdb.md#14800022-sqlite-asynchronous-callback-request-aborted) | SQLite: Callback routine requested an abort.<br>**Applicable version:** 12 and later |
| [14800023](../errorcode-data-rdb.md#14800023-sqlite-access-denied) | SQLite: Access permission denied.<br>**Applicable version:** 12 and later |
| [14800024](../errorcode-data-rdb.md#14800024-sqlite-database-file-locked) | SQLite: The database file is locked.<br>**Applicable version:** 12 and later |
| [14800025](../errorcode-data-rdb.md#14800025-sqlite-database-table-locked) | SQLite: A table in the database is locked.<br>**Applicable version:** 12 and later |
| [14800026](../errorcode-data-rdb.md#14800026-sqlite-insufficient-database-memory) | SQLite: The database is out of memory.<br>**Applicable version:** 12 and later |
| [14800027](../errorcode-data-rdb.md#14800027-sqlite-attempt-to-write-a-readonly-database) | SQLite: Attempt to write a readonly database.<br>**Applicable version:** 12 and later |
| [14800028](../errorcode-data-rdb.md#14800028-sqlite-io-error) | SQLite: Some kind of disk I/O error occurred.<br>**Applicable version:** 12 and later |
| [14800029](../errorcode-data-rdb.md#14800029-sqlite-database-is-full) | SQLite: The database is full.<br>**Applicable version:** 12 and later |
| [14800030](../errorcode-data-rdb.md#14800030-sqlite-unable-to-open-the-database-file) | SQLite: Unable to open the database file.<br>**Applicable version:** 12 and later |
| [14800031](../errorcode-data-rdb.md#14800031-sqlite-text-or-blob-exceeds-the-limit) | SQLite: TEXT or BLOB exceeds size limit.<br>**Applicable version:** 12 and later |
| [14800032](../errorcode-data-rdb.md#14800032-sqlite-abort-due-to-constraint-violation) | SQLite: Abort due to constraint violation.<br>**Applicable version:** 12 and later |
| [14800033](../errorcode-data-rdb.md#14800033-sqlite-data-types-mismatch) | SQLite: Data type mismatch.<br>**Applicable version:** 12 and later |
| [14800034](../errorcode-data-rdb.md#14800034-incorrect-use-of-sqlite-library) | SQLite: Library used incorrectly.<br>**Applicable version:** 12 and later |

## columnCount

```TypeScript
columnCount: number
```

Number of columns in the result set.

**Type:** number

**Since:** 9

<!--Device-ResultSet-columnCount: int--><!--Device-ResultSet-columnCount: int-End-->

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

## columnNames

```TypeScript
columnNames: Array<string>
```

Names of all columns in the result set. If the result set contains duplicate column names, the return values are not as expected. You are advised to use the [getColumnNames](arkts-arkdata-relationalstore-resultset-i.md#getcolumnnames-1) API to obtain the column names.

**Type:** Array&lt;string&gt;

**Since:** 9

<!--Device-ResultSet-columnNames: Array<string>--><!--Device-ResultSet-columnNames: Array<string>-End-->

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

## isAtFirstRow

```TypeScript
isAtFirstRow: boolean
```

Whether the result set pointer is in the first row (the row index is **0**). The value **true** means the result set pointer is in the first row.

**Type:** boolean

**Since:** 9

<!--Device-ResultSet-isAtFirstRow: boolean--><!--Device-ResultSet-isAtFirstRow: boolean-End-->

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

## isAtLastRow

```TypeScript
isAtLastRow: boolean
```

Whether the result set pointer is in the last row. The value **true** means the pointer is in the last row.

**Type:** boolean

**Since:** 9

<!--Device-ResultSet-isAtLastRow: boolean--><!--Device-ResultSet-isAtLastRow: boolean-End-->

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

## isClosed

```TypeScript
isClosed: boolean
```

Whether the result set is closed. The value **true** means the result set is closed.

**Type:** boolean

**Since:** 9

<!--Device-ResultSet-isClosed: boolean--><!--Device-ResultSet-isClosed: boolean-End-->

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

## isEnded

```TypeScript
isEnded: boolean
```

Whether the result set pointer is after the last row. The value **true** means the pointer is after the last row.

**Type:** boolean

**Since:** 9

<!--Device-ResultSet-isEnded: boolean--><!--Device-ResultSet-isEnded: boolean-End-->

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

## isStarted

```TypeScript
isStarted: boolean
```

Whether the result set pointer is moved. The value **true** means the pointer is moved.

**Type:** boolean

**Since:** 9

<!--Device-ResultSet-isStarted: boolean--><!--Device-ResultSet-isStarted: boolean-End-->

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

## rowCount

```TypeScript
rowCount: number
```

Number of rows in the result set.

**Type:** number

**Since:** 9

<!--Device-ResultSet-rowCount: int--><!--Device-ResultSet-rowCount: int-End-->

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

## rowIndex

```TypeScript
rowIndex: number
```

Index of the current row in the result set.

Default value: **-1**. The index position starts from **0**.

**Type:** number

**Since:** 9

<!--Device-ResultSet-rowIndex: int--><!--Device-ResultSet-rowIndex: int-End-->

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

