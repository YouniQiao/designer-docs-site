# ResultSet

Provides APIs to access the result set obtained by querying the RDB store. This result set is the collection of results returned with the **query()** method called. The **ResultSet** instance is not refreshed in real time. After using the result set, if the data in the database is changed (by being added, deleted, or modified), you need to query the result set again to obtain the latest data. For the following APIs, you should use either [query] {@link @ohos.data.relationalStore:relationalStore.RdbStore.query(predicates: RdbPredicates)}, [querySql](arkts-relationalstore-rdbstore-i.md#querySqlWithoutRowCount), [remoteQuery] {@link @ohos.data.relationalStore:relationalStore.RdbStore.remoteQuery(device: string, table: string)} , or [queryLockedRow](arkts-relationalstore-rdbstore-i.md#queryLockedRow) to obtain the **ResultSet** instance first, and then use this instance to call the corresponding method.

**Since:** 9

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

## Modules to Import

```TypeScript
import { relationalStore } from '@kit.ArkData';
```

## close

```TypeScript
close(): void
```

Closes this **resultSet** to release memory. If the **resultSet** is not closed, FD or memory leaks may occur.

**Since:** 9

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 14800012 | ResultSet is empty or pointer index is out of bounds. |
| 14800000 | Inner error. [since 12] |

## getAsset

```TypeScript
getAsset(columnIndex: int): Asset
```

Obtains the value from the specified column in the current row, and returns the value in the [Asset](arkts-relationalstore-asset-i.md#Asset) format. If the type of the value in the column is **Asset**, the value of the Asset type is returned. If the value in the column is null, **null** is returned. If the value in the column is of other types, 14800000 is returned.

**Since:** 10

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| columnIndex | int | Yes | Index of the target column, starting from 0. |

**Return value:**

| Type | Description |
| --- | --- |
| Asset | Value obtained. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 14800013 | Column index is out of bounds. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14800000 | Inner error. [since 12] |
| 14800011 | The current operation failed because the database is corrupted. [since 12] |
| 14800012 | ResultSet is empty or pointer index is out of bounds. [since 12] |
| 14800014 | The target instance is already closed. [since 12] |
| 14800021 | SQLite: Generic error. [since 12] |
| 14800022 | SQLite: Callback routine requested an abort. [since 12] |
| 14800023 | SQLite: Access permission denied. [since 12] |
| 14800024 | SQLite: The database file is locked. [since 12] |
| 14800025 | SQLite: A table in the database is locked. [since 12] |
| 14800026 | SQLite: The database is out of memory. [since 12] |
| 14800027 | SQLite: Attempt to write a readonly database. [since 12] |
| 14800028 | SQLite: Some kind of disk I/O error occurred. [since 12] |
| 14800029 | SQLite: The database is full. [since 12] |
| 14800030 | SQLite: Unable to open the database file. [since 12] |
| 14800031 | SQLite: TEXT or BLOB exceeds size limit. [since 12] |
| 14800032 | SQLite: Abort due to constraint violation. [since 12] |
| 14800033 | SQLite: Data type mismatch. [since 12] |
| 14800034 | SQLite: Library used incorrectly. [since 12] |

## getAssets

```TypeScript
getAssets(columnIndex: int): Assets
```

Obtains the value from the specified column in the current row, and returns the value in the [Assets](arkts-relationalstore-assets-t.md#Assets) format. If the type of the value in the column is **Assets**, the value of the Assets type is returned. If the value in the column is null, **null** is returned. If the value in the column is of other types, 14800000 is returned.

**Since:** 10

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| columnIndex | int | Yes | Index of the target column, starting from 0. |

**Return value:**

| Type | Description |
| --- | --- |
| Assets | Value obtained. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 14800013 | Column index is out of bounds. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14800000 | Inner error. [since 12] |
| 14800011 | The current operation failed because the database is corrupted. [since 12] |
| 14800012 | ResultSet is empty or pointer index is out of bounds. [since 12] |
| 14800014 | The target instance is already closed. [since 12] |
| 14800021 | SQLite: Generic error. [since 12] |
| 14800022 | SQLite: Callback routine requested an abort. [since 12] |
| 14800023 | SQLite: Access permission denied. [since 12] |
| 14800024 | SQLite: The database file is locked. [since 12] |
| 14800025 | SQLite: A table in the database is locked. [since 12] |
| 14800026 | SQLite: The database is out of memory. [since 12] |
| 14800027 | SQLite: Attempt to write a readonly database. [since 12] |
| 14800028 | SQLite: Some kind of disk I/O error occurred. [since 12] |
| 14800029 | SQLite: The database is full. [since 12] |
| 14800030 | SQLite: Unable to open the database file. [since 12] |
| 14800031 | SQLite: TEXT or BLOB exceeds size limit. [since 12] |
| 14800032 | SQLite: Abort due to constraint violation. [since 12] |
| 14800033 | SQLite: Data type mismatch. [since 12] |
| 14800034 | SQLite: Library used incorrectly. [since 12] |

## getBlob

```TypeScript
getBlob(columnIndex: int): Uint8Array
```

Obtains the value from the specified column in the current row, and returns it in a byte array. If the type of the value in the specified column is INTEGER, DOUBLE, TEXT, or BLOB, the value will be converted into a byte array and returned. If the column is null/empty, an empty byte array will be returned. If the value is of any other type, 14800000 will be returned.

**Since:** 9

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| columnIndex | int | Yes | Index of the target column, starting from 0. |

**Return value:**

| Type | Description |
| --- | --- |
| Uint8Array | Value obtained. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 14800013 | Column index is out of bounds. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14800000 | Inner error. [since 12] |
| 14800011 | The current operation failed because the database is corrupted. [since 12] |
| 14800012 | ResultSet is empty or pointer index is out of bounds. [since 12] |
| 14800014 | The target instance is already closed. [since 12] |
| 14800021 | SQLite: Generic error. [since 12] |
| 14800022 | SQLite: Callback routine requested an abort. [since 12] |
| 14800023 | SQLite: Access permission denied. [since 12] |
| 14800024 | SQLite: The database file is locked. [since 12] |
| 14800025 | SQLite: A table in the database is locked. [since 12] |
| 14800026 | SQLite: The database is out of memory. [since 12] |
| 14800027 | SQLite: Attempt to write a readonly database. [since 12] |
| 14800028 | SQLite: Some kind of disk I/O error occurred. [since 12] |
| 14800029 | SQLite: The database is full. [since 12] |
| 14800030 | SQLite: Unable to open the database file. [since 12] |
| 14800031 | SQLite: TEXT or BLOB exceeds size limit. [since 12] |
| 14800032 | SQLite: Abort due to constraint violation. [since 12] |
| 14800033 | SQLite: Data type mismatch. [since 12] |
| 14800034 | SQLite: Library used incorrectly. [since 12] |

## getColumnIndex

```TypeScript
getColumnIndex(columnName: string): int
```

Obtains the column index based on the column name.

**Since:** 9

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| columnName | string | Yes | Column name. |

**Return value:**

| Type | Description |
| --- | --- |
| int | Column index obtained. If the result set contains duplicate column names, the return value is  not as expected. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 14800013 | Column index is out of bounds. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14800000 | Inner error. [since 12] |
| 14800011 | The current operation failed because the database is corrupted. [since 12] |
| 14800014 | The target instance is already closed. [since 12] |
| 14800019 | The SQL must be a query statement. [since 12] |
| 14800021 | SQLite: Generic error. [since 12] |
| 14800022 | SQLite: Callback routine requested an abort. [since 12] |
| 14800023 | SQLite: Access permission denied. [since 12] |
| 14800024 | SQLite: The database file is locked. [since 12] |
| 14800025 | SQLite: A table in the database is locked. [since 12] |
| 14800026 | SQLite: The database is out of memory. [since 12] |
| 14800027 | SQLite: Attempt to write a readonly database. [since 12] |
| 14800028 | SQLite: Some kind of disk I/O error occurred. [since 12] |
| 14800029 | SQLite: The database is full. [since 12] |
| 14800030 | SQLite: Unable to open the database file. [since 12] |
| 14800031 | SQLite: TEXT or BLOB exceeds size limit. [since 12] |
| 14800032 | SQLite: Abort due to constraint violation. [since 12] |
| 14800033 | SQLite: Data type mismatch. [since 12] |
| 14800034 | SQLite: Library used incorrectly. [since 12] |

## getColumnName

```TypeScript
getColumnName(columnIndex: int): string
```

Obtains the column name based on the column index.

**Since:** 9

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| columnIndex | int | Yes | Column index. |

**Return value:**

| Type | Description |
| --- | --- |
| string | Column name obtained. If the result set contains duplicate column names, the return value is  not as expected. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 14800013 | Column index is out of bounds. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14800000 | Inner error. [since 12] |
| 14800011 | The current operation failed because the database is corrupted. [since 12] |
| 14800014 | The target instance is already closed. [since 12] |
| 14800019 | The SQL must be a query statement. [since 12] |
| 14800021 | SQLite: Generic error. [since 12] |
| 14800022 | SQLite: Callback routine requested an abort. [since 12] |
| 14800023 | SQLite: Access permission denied. [since 12] |
| 14800024 | SQLite: The database file is locked. [since 12] |
| 14800025 | SQLite: A table in the database is locked. [since 12] |
| 14800026 | SQLite: The database is out of memory. [since 12] |
| 14800027 | SQLite: Attempt to write a readonly database. [since 12] |
| 14800028 | SQLite: Some kind of disk I/O error occurred. [since 12] |
| 14800029 | SQLite: The database is full. [since 12] |
| 14800030 | SQLite: Unable to open the database file. [since 12] |
| 14800031 | SQLite: TEXT or BLOB exceeds size limit. [since 12] |
| 14800032 | SQLite: Abort due to constraint violation. [since 12] |
| 14800033 | SQLite: Data type mismatch. [since 12] |
| 14800034 | SQLite: Library used incorrectly. [since 12] |

## getColumnNames

```TypeScript
getColumnNames(): Array<string>
```

Obtains the names of all columns in the result set. The column names are returned in a string array. The sequence of strings in the array is the same as that of columns in the result set.

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;string> | Names of all columns in the result set obtained. Duplicate column names can be  obtained. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 14800001 | Invalid arguments. Possible causes: 1. Parameter is out of valid range. |
| 14800011 | The current operation failed because the database is corrupted. |
| 14800014 | The target instance is already closed. |
| 14800019 | The SQL must be a query statement. |
| 14800021 | SQLite: Generic error. |
| 14800026 | SQLite: The database is out of memory. |
| 14800028 | SQLite: Some kind of disk I/O error occurred. |
| 14800030 | SQLite: Unable to open the database file. |

## getColumnType

```TypeScript
getColumnType(columnIdentifier: int | string): Promise<ColumnType>
```

Obtains the column type based on the specified column index or column name. This API uses a promise to return the result.

**Since:** 18

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| columnIdentifier | int \| string | Yes | Index or name of column in a result set. The index must be a non-  negative integer and cannot exceed the length of columnNames. The column name must be a name in  columnNames. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;ColumnType> | Promise used to return the column type obtained. If the result set contains  duplicate column names, the return value is not as expected. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14800000 | Inner error. |
| 14800011 | The current operation failed because the database is corrupted. |
| 14800012 | ResultSet is empty or pointer index is out of bounds. |
| 14800013 | Column index is out of bounds. |
| 14800014 | The target instance is already closed. |
| 14800019 | The SQL must be a query statement. |
| 14800021 | SQLite: Generic error. |
| 14800022 | SQLite: Callback routine requested an abort. |
| 14800023 | SQLite: Access permission denied. |
| 14800024 | SQLite: The database file is locked. |
| 14800025 | SQLite: A table in the database is locked. |
| 14800026 | SQLite: The database is out of memory. |
| 14800027 | SQLite: Attempt to write a readonly database. |
| 14800028 | SQLite: Some kind of disk I/O error occurred. |
| 14800029 | SQLite: The database is full. |
| 14800030 | SQLite: Unable to open the database file. |
| 14800031 | SQLite: TEXT or BLOB exceeds size limit. |
| 14800032 | SQLite: Abort due to constraint violation. |
| 14800033 | SQLite: Data type mismatch. |
| 14800034 | SQLite: Library used incorrectly. |

## getColumnTypeSync

```TypeScript
getColumnTypeSync(columnIdentifier: int | string): ColumnType
```

Obtains the column type based on the specified column index or column name. This API returns the result synchronously.

**Since:** 18

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| columnIdentifier | int \| string | Yes | Index or name of column in a result set. The index must be a non-  negative integer and cannot exceed the length of columnNames. The column name must be a name in  columnNames. |

**Return value:**

| Type | Description |
| --- | --- |
| ColumnType | Column type obtained. If the result set contains duplicate column names, the return value  is not as expected. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14800000 | Inner error. |
| 14800011 | The current operation failed because the database is corrupted. |
| 14800012 | ResultSet is empty or pointer index is out of bounds. |
| 14800013 | Column index is out of bounds. |
| 14800014 | The target instance is already closed. |
| 14800019 | The SQL must be a query statement. |
| 14800021 | SQLite: Generic error. |
| 14800022 | SQLite: Callback routine requested an abort. |
| 14800023 | SQLite: Access permission denied. |
| 14800024 | SQLite: The database file is locked. |
| 14800025 | SQLite: A table in the database is locked. |
| 14800026 | SQLite: The database is out of memory. |
| 14800027 | SQLite: Attempt to write a readonly database. |
| 14800028 | SQLite: Some kind of disk I/O error occurred. |
| 14800029 | SQLite: The database is full. |
| 14800030 | SQLite: Unable to open the database file. |
| 14800031 | SQLite: TEXT or BLOB exceeds size limit. |
| 14800032 | SQLite: Abort due to constraint violation. |
| 14800033 | SQLite: Data type mismatch. |
| 14800034 | SQLite: Library used incorrectly. |

## getCurrentRowData

```TypeScript
getCurrentRowData(): RowData
```

Obtains the values of all columns in this row.

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Return value:**

| Type | Description |
| --- | --- |
| RowData | Values of all columns in this row obtained. The values of columns with the same name can be  obtained. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 14800001 | Invalid arguments. Possible causes: 1. Parameter is out of valid range. |
| 14800011 | The current operation failed because the database is corrupted. |
| 14800012 | ResultSet is empty or pointer index is out of bounds. |
| 14800014 | The target instance is already closed. |
| 14800019 | The SQL must be a query statement. |
| 14800021 | SQLite: Generic error. |
| 14800026 | SQLite: The database is out of memory. |
| 14800028 | SQLite: Some kind of disk I/O error occurred. |
| 14800030 | SQLite: Unable to open the database file. |

## getDouble

```TypeScript
getDouble(columnIndex: int): double
```

Obtains the value from the specified column in the current row, and returns a value of Double type. If the type of the value in the specified column is INTEGER, DOUBLE, TEXT, or BLOB, a value of Double type will be returned. If the column is null/empty, **0.0** will be returned. If the value is of any other type, 14800000 will be returned.

**Since:** 9

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| columnIndex | int | Yes | Index of the target column, starting from 0. |

**Return value:**

| Type | Description |
| --- | --- |
| double | Value obtained. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 14800013 | Column index is out of bounds. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14800000 | Inner error. [since 12] |
| 14800011 | The current operation failed because the database is corrupted. [since 12] |
| 14800012 | ResultSet is empty or pointer index is out of bounds. [since 12] |
| 14800014 | The target instance is already closed. [since 12] |
| 14800021 | SQLite: Generic error. [since 12] |
| 14800022 | SQLite: Callback routine requested an abort. [since 12] |
| 14800023 | SQLite: Access permission denied. [since 12] |
| 14800024 | SQLite: The database file is locked. [since 12] |
| 14800025 | SQLite: A table in the database is locked. [since 12] |
| 14800026 | SQLite: The database is out of memory. [since 12] |
| 14800027 | SQLite: Attempt to write a readonly database. [since 12] |
| 14800028 | SQLite: Some kind of disk I/O error occurred. [since 12] |
| 14800029 | SQLite: The database is full. [since 12] |
| 14800030 | SQLite: Unable to open the database file. [since 12] |
| 14800031 | SQLite: TEXT or BLOB exceeds size limit. [since 12] |
| 14800032 | SQLite: Abort due to constraint violation. [since 12] |
| 14800033 | SQLite: Data type mismatch. [since 12] |
| 14800034 | SQLite: Library used incorrectly. [since 12] |

## getFloat32Array

```TypeScript
getFloat32Array(columnIndex: int): Float32Array
```

Obtains the value of the specified column in the current row as a float array. The implementation class determines whether to throw an exception if the value of the specified column in the current row is null or the specified column is not of the float array type.

**Since:** 12

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| columnIndex | int | Yes | Indicates the specified column index, which starts from 0. |

**Return value:**

| Type | Description |
| --- | --- |
| Float32Array | The value of the specified column as a float array. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 801 | The capability is not supported because the database is not a vector DB. |
| 14800011 | The current operation failed because the database is corrupted. |
| 14800013 | Column index is out of bounds. |
| 14800014 | The target instance is already closed. |
| 14800021 | SQLite: Generic error. |
| 14800022 | SQLite: Callback routine requested an abort. |
| 14800023 | SQLite: Access permission denied. |
| 14800024 | SQLite: The database file is locked. |
| 14800025 | SQLite: A table in the database is locked. |
| 14800026 | SQLite: The database is out of memory. |
| 14800027 | SQLite: Attempt to write a readonly database. |
| 14800028 | SQLite: Some kind of disk I/O error occurred. |
| 14800029 | SQLite: The database is full. |
| 14800030 | SQLite: Unable to open the database file. |
| 14800031 | SQLite: TEXT or BLOB exceeds size limit. |
| 14800032 | SQLite: Abort due to constraint violation. |
| 14800033 | SQLite: Data type mismatch. |
| 14800034 | SQLite: Library used incorrectly. |

## getLong

```TypeScript
getLong(columnIndex: int): long
```

Obtains the value from the specified column in the current row, and returns a value of Long type. If the type of the value in the specified column is INTEGER, DOUBLE, TEXT, or BLOB, a value of Long type will be returned. If the column is null/empty, **0** will be returned. If the value is of any other type, 14800000 will be returned. If the data type in the specified column is INTEGER and the value is greater than **Number.MAX_SAFE_INTEGER** or less than **Number.MIN_SAFE_INTEGER**, you are advised to use the [getString]relationalStore.ResultSet.getString API to obtain the value without losing precision. If the data type in the specified column is DOUBLE, you are advised to use the [getDouble]relationalStore.ResultSet.getDouble API to obtain the value without losing precision.

**Since:** 9

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| columnIndex | int | Yes | Index of the target column, starting from 0. |

**Return value:**

| Type | Description |
| --- | --- |
| long | Value obtained.  The value range supported by this API is Number.MIN_SAFE_INTEGER to Number.MAX_SAFE_INTEGER. If  the value is out of this range, use [getDouble]relationalStore.ResultSet.getDouble for DOUBLE values  and [getString]relationalStore.ResultSet.getString for INTEGER values. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 14800013 | Column index is out of bounds. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14800000 | Inner error. [since 12] |
| 14800011 | The current operation failed because the database is corrupted. [since 12] |
| 14800012 | ResultSet is empty or pointer index is out of bounds. [since 12] |
| 14800014 | The target instance is already closed. [since 12] |
| 14800021 | SQLite: Generic error. [since 12] |
| 14800022 | SQLite: Callback routine requested an abort. [since 12] |
| 14800023 | SQLite: Access permission denied. [since 12] |
| 14800024 | SQLite: The database file is locked. [since 12] |
| 14800025 | SQLite: A table in the database is locked. [since 12] |
| 14800026 | SQLite: The database is out of memory. [since 12] |
| 14800027 | SQLite: Attempt to write a readonly database. [since 12] |
| 14800028 | SQLite: Some kind of disk I/O error occurred. [since 12] |
| 14800029 | SQLite: The database is full. [since 12] |
| 14800030 | SQLite: Unable to open the database file. [since 12] |
| 14800031 | SQLite: TEXT or BLOB exceeds size limit. [since 12] |
| 14800032 | SQLite: Abort due to constraint violation. [since 12] |
| 14800033 | SQLite: Data type mismatch. [since 12] |
| 14800034 | SQLite: Library used incorrectly. [since 12] |

## getRow

```TypeScript
getRow(): ValuesBucket
```

Obtains this row.

**Since:** 11

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Return value:**

| Type | Description |
| --- | --- |
| ValuesBucket | Value of the specified row. If the result set contains duplicate column names, the  return value is not as expected. You are advised to use the  [getCurrentRowData]relationalStore.ResultSet.getCurrentRowData API. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 14800000 | Inner error. |
| 14800011 | The current operation failed because the database is corrupted. [since 12] |
| 14800012 | ResultSet is empty or pointer index is out of bounds. [since 12] |
| 14800013 | Column index is out of bounds. [since 12] |
| 14800014 | The target instance is already closed. [since 12] |
| 14800021 | SQLite: Generic error. [since 12] |
| 14800022 | SQLite: Callback routine requested an abort. [since 12] |
| 14800023 | SQLite: Access permission denied. [since 12] |
| 14800024 | SQLite: The database file is locked. [since 12] |
| 14800025 | SQLite: A table in the database is locked. [since 12] |
| 14800026 | SQLite: The database is out of memory. [since 12] |
| 14800027 | SQLite: Attempt to write a readonly database. [since 12] |
| 14800028 | SQLite: Some kind of disk I/O error occurred. [since 12] |
| 14800029 | SQLite: The database is full. [since 12] |
| 14800030 | SQLite: Unable to open the database file. [since 12] |
| 14800031 | SQLite: TEXT or BLOB exceeds size limit. [since 12] |
| 14800032 | SQLite: Abort due to constraint violation. [since 12] |
| 14800033 | SQLite: Data type mismatch. [since 12] |
| 14800034 | SQLite: Library used incorrectly. [since 12] |

## getRows

```TypeScript
getRows(maxCount: int, position?: int): Promise<Array<ValuesBucket>>
```

Obtains a specified amount of data from the result set. This API uses a promise to return the result. Do not call this API concurrently with other APIs of [ResultSet](arkts-data-relationalstore.md#relationalStore). Otherwise , unexpected data may be obtained.

**Since:** 18

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| maxCount | int | Yes | Number of rows to obtain. The value is a positive integer. If the value is not a  positive integer, error 401 will be thrown. |
| position | int | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;ValuesBucket>> | Promise used to return maxCount rows of data obtained. If the  number of remaining records is less than maxCount, the remaining records are returned. Returning an empty  array indicates that the end of the result set is reached. If the result set contains duplicate column names,  the return values are not as expected. You are advised to use the  [getRowsData]relationalStore.ResultSet.getRowsData API. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14800000 | Inner error. |
| 14800011 | The current operation failed because the database is corrupted. |
| 14800012 | ResultSet is empty or pointer index is out of bounds. |
| 14800013 | Column index is out of bounds. |
| 14800014 | The target instance is already closed. |
| 14800021 | SQLite: Generic error. |
| 14800022 | SQLite: Callback routine requested an abort. |
| 14800023 | SQLite: Access permission denied. |
| 14800024 | SQLite: The database file is locked. |
| 14800025 | SQLite: A table in the database is locked. |
| 14800026 | SQLite: The database is out of memory. |
| 14800028 | SQLite: Some kind of disk I/O error occurred. |
| 14800029 | SQLite: The database is full. |
| 14800031 | SQLite: TEXT or BLOB exceeds size limit. |
| 14800032 | SQLite: Abort due to constraint violation. |
| 14800033 | SQLite: Data type mismatch. |

## getRowsData

```TypeScript
getRowsData(maxCount: int, position?: int): Promise<RowsData>
```

Obtains data of a specified number of rows from the specified position. This API uses a promise to return the result. Do not call this API concurrently with other APIs of [ResultSet](arkts-data-relationalstore.md#relationalStore). Otherwise, unexpected data may be obtained.

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| maxCount | int | Yes | Number of rows to obtain. The value is a positive integer. If the value is not a  positive integer, error 14800001 will be thrown. |
| position | int | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;RowsData> | Promise used to return maxCount rows of data obtained. If the number of  remaining records is less than maxCount, the remaining records are returned. Returning an empty array  indicates that the end of the result set is reached. The values of columns with the same name can be  obtained. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 14800001 | Invalid arguments. Possible causes: 1. Parameter is out of valid range. |
| 14800011 | The current operation failed because the database is corrupted. |
| 14800012 | ResultSet is empty or pointer index is out of bounds. |
| 14800014 | The target instance is already closed. |
| 14800019 | The SQL must be a query statement. |
| 14800021 | SQLite: Generic error. |
| 14800026 | SQLite: The database is out of memory. |
| 14800028 | SQLite: Some kind of disk I/O error occurred. |
| 14800030 | SQLite: Unable to open the database file. |
| 14800031 | SQLite: TEXT or BLOB exceeds size limit. |

## getSendableRow

```TypeScript
getSendableRow(): sendableRelationalStore.ValuesBucket
```

Obtains the sendable data from the current row. The sendable data can be passed across threads.

**Since:** 12

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Return value:**

| Type | Description |
| --- | --- |
| sendableRelationalStore.ValuesBucket | Sendable data obtained for cross-thread transfer. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 14800000 | Inner error. |
| 14800011 | The current operation failed because the database is corrupted. |
| 14800012 | ResultSet is empty or pointer index is out of bounds. |
| 14800013 | Column index is out of bounds. |
| 14800014 | The target instance is already closed. |
| 14800021 | SQLite: Generic error. |
| 14800022 | SQLite: Callback routine requested an abort. |
| 14800023 | SQLite: Access permission denied. |
| 14800024 | SQLite: The database file is locked. |
| 14800025 | SQLite: A table in the database is locked. |
| 14800026 | SQLite: The database is out of memory. |
| 14800027 | SQLite: Attempt to write a readonly database. |
| 14800028 | SQLite: Some kind of disk I/O error occurred. |
| 14800029 | SQLite: The database is full. |
| 14800030 | SQLite: Unable to open the database file. |
| 14800031 | SQLite: TEXT or BLOB exceeds size limit. |
| 14800032 | SQLite: Abort due to constraint violation. |
| 14800033 | SQLite: Data type mismatch. |
| 14800034 | SQLite: Library used incorrectly. |

## getString

```TypeScript
getString(columnIndex: int): string
```

Obtains the value from the specified column in the current row, and returns it in the form of a string. If the type of the value in the specified column is INTEGER, DOUBLE, TEXT, or BLOB, a string will be returned. If the value type is INTEGER and the column is null/empty, an empty string **""** will be returned. If the value is of any other type, 14800000 will be returned. If the value in the current column is of the DOUBLE type, the precision may be lost. You are advised to use [getDouble]relationalStore.ResultSet.getDouble to obtain the value.

**Since:** 9

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| columnIndex | int | Yes | Index of the target column, starting from 0. |

**Return value:**

| Type | Description |
| --- | --- |
| string | Value obtained. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 14800013 | Column index is out of bounds. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14800000 | Inner error. [since 12] |
| 14800011 | The current operation failed because the database is corrupted. [since 12] |
| 14800012 | ResultSet is empty or pointer index is out of bounds. [since 12] |
| 14800014 | The target instance is already closed. [since 12] |
| 14800021 | SQLite: Generic error. [since 12] |
| 14800022 | SQLite: Callback routine requested an abort. [since 12] |
| 14800023 | SQLite: Access permission denied. [since 12] |
| 14800024 | SQLite: The database file is locked. [since 12] |
| 14800025 | SQLite: A table in the database is locked. [since 12] |
| 14800026 | SQLite: The database is out of memory. [since 12] |
| 14800027 | SQLite: Attempt to write a readonly database. [since 12] |
| 14800028 | SQLite: Some kind of disk I/O error occurred. [since 12] |
| 14800029 | SQLite: The database is full. [since 12] |
| 14800030 | SQLite: Unable to open the database file. [since 12] |
| 14800031 | SQLite: TEXT or BLOB exceeds size limit. [since 12] |
| 14800032 | SQLite: Abort due to constraint violation. [since 12] |
| 14800033 | SQLite: Data type mismatch. [since 12] |
| 14800034 | SQLite: Library used incorrectly. [since 12] |

## getValue

```TypeScript
getValue(columnIndex: int): ValueType
```

Obtains the value from the specified column in the current row. If the value type is any of **ValueType**, the value of the corresponding type will be returned. Otherwise, 14800000 will be returned. If the value type is INTEGER and the value is greater than **Number.MAX_SAFE_INTEGER** or less than **Number.MIN_SAFE_INTEGER**, you are advised to use the [getString]relationalStore.ResultSet.getString API to obtain the value without losing precision.

**Since:** 12

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| columnIndex | int | Yes | Index of the target column, starting from 0. |

**Return value:**

| Type | Description |
| --- | --- |
| ValueType | Allowed data field types. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14800000 | Inner error. |
| 14800011 | The current operation failed because the database is corrupted. |
| 14800012 | ResultSet is empty or pointer index is out of bounds. |
| 14800013 | Column index is out of bounds. |
| 14800014 | The target instance is already closed. |
| 14800021 | SQLite: Generic error. |
| 14800022 | SQLite: Callback routine requested an abort. |
| 14800023 | SQLite: Access permission denied. |
| 14800024 | SQLite: The database file is locked. |
| 14800025 | SQLite: A table in the database is locked. |
| 14800026 | SQLite: The database is out of memory. |
| 14800027 | SQLite: Attempt to write a readonly database. |
| 14800028 | SQLite: Some kind of disk I/O error occurred. |
| 14800029 | SQLite: The database is full. |
| 14800030 | SQLite: Unable to open the database file. |
| 14800031 | SQLite: TEXT or BLOB exceeds size limit. |
| 14800032 | SQLite: Abort due to constraint violation. |
| 14800033 | SQLite: Data type mismatch. |
| 14800034 | SQLite: Library used incorrectly. |

## goTo

```TypeScript
goTo(offset: int): boolean
```

Moves the result set pointer based on the offset specified.

**Since:** 9

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| offset | int | Yes | Offset relative to the position of the current result set pointer. A positive value means  to move the pointer backward, and a negative value means to move the pointer forward. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns true if the operation is successful; returns false otherwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 14800012 | ResultSet is empty or pointer index is out of bounds. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14800000 | Inner error. [since 12] |
| 14800011 | The current operation failed because the database is corrupted. [since 12] |
| 14800014 | The target instance is already closed. [since 12] |
| 14800019 | The SQL must be a query statement. [since 12] |
| 14800021 | SQLite: Generic error. [since 12] |
| 14800022 | SQLite: Callback routine requested an abort. [since 12] |
| 14800023 | SQLite: Access permission denied. [since 12] |
| 14800024 | SQLite: The database file is locked. [since 12] |
| 14800025 | SQLite: A table in the database is locked. [since 12] |
| 14800026 | SQLite: The database is out of memory. [since 12] |
| 14800027 | SQLite: Attempt to write a readonly database. [since 12] |
| 14800028 | SQLite: Some kind of disk I/O error occurred. [since 12] |
| 14800029 | SQLite: The database is full. [since 12] |
| 14800030 | SQLite: Unable to open the database file. [since 12] |
| 14800031 | SQLite: TEXT or BLOB exceeds size limit. [since 12] |
| 14800032 | SQLite: Abort due to constraint violation. [since 12] |
| 14800033 | SQLite: Data type mismatch. [since 12] |
| 14800034 | SQLite: Library used incorrectly. [since 12] |

## goToFirstRow

```TypeScript
goToFirstRow(): boolean
```

Moves to the first row of the result set.

**Since:** 9

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns true if the operation is successful; returns false otherwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 14800012 | ResultSet is empty or pointer index is out of bounds. |
| 14800000 | Inner error. [since 12] |
| 14800011 | The current operation failed because the database is corrupted. [since 12] |
| 14800014 | The target instance is already closed. [since 12] |
| 14800019 | The SQL must be a query statement. [since 12] |
| 14800021 | SQLite: Generic error. [since 12] |
| 14800022 | SQLite: Callback routine requested an abort. [since 12] |
| 14800023 | SQLite: Access permission denied. [since 12] |
| 14800024 | SQLite: The database file is locked. [since 12] |
| 14800025 | SQLite: A table in the database is locked. [since 12] |
| 14800026 | SQLite: The database is out of memory. [since 12] |
| 14800027 | SQLite: Attempt to write a readonly database. [since 12] |
| 14800028 | SQLite: Some kind of disk I/O error occurred. [since 12] |
| 14800029 | SQLite: The database is full. [since 12] |
| 14800030 | SQLite: Unable to open the database file. [since 12] |
| 14800031 | SQLite: TEXT or BLOB exceeds size limit. [since 12] |
| 14800032 | SQLite: Abort due to constraint violation. [since 12] |
| 14800033 | SQLite: Data type mismatch. [since 12] |
| 14800034 | SQLite: Library used incorrectly. [since 12] |

## goToLastRow

```TypeScript
goToLastRow(): boolean
```

Moves to the last row of the result set.

**Since:** 9

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns true if the operation is successful; returns false otherwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 14800012 | ResultSet is empty or pointer index is out of bounds. |
| 14800000 | Inner error. [since 12] |
| 14800011 | The current operation failed because the database is corrupted. [since 12] |
| 14800014 | The target instance is already closed. [since 12] |
| 14800019 | The SQL must be a query statement. [since 12] |
| 14800021 | SQLite: Generic error. [since 12] |
| 14800022 | SQLite: Callback routine requested an abort. [since 12] |
| 14800023 | SQLite: Access permission denied. [since 12] |
| 14800024 | SQLite: The database file is locked. [since 12] |
| 14800025 | SQLite: A table in the database is locked. [since 12] |
| 14800026 | SQLite: The database is out of memory. [since 12] |
| 14800027 | SQLite: Attempt to write a readonly database. [since 12] |
| 14800028 | SQLite: Some kind of disk I/O error occurred. [since 12] |
| 14800029 | SQLite: The database is full. [since 12] |
| 14800030 | SQLite: Unable to open the database file. [since 12] |
| 14800031 | SQLite: TEXT or BLOB exceeds size limit. [since 12] |
| 14800032 | SQLite: Abort due to constraint violation. [since 12] |
| 14800033 | SQLite: Data type mismatch. [since 12] |
| 14800034 | SQLite: Library used incorrectly. [since 12] |

## goToNextRow

```TypeScript
goToNextRow(): boolean
```

Moves to the next row in the result set.

**Since:** 9

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns true if the operation is successful; returns false otherwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 14800012 | ResultSet is empty or pointer index is out of bounds. |
| 14800000 | Inner error. [since 12] |
| 14800011 | The current operation failed because the database is corrupted. [since 12] |
| 14800014 | The target instance is already closed. [since 12] |
| 14800019 | The SQL must be a query statement. [since 12] |
| 14800021 | SQLite: Generic error. [since 12] |
| 14800022 | SQLite: Callback routine requested an abort. [since 12] |
| 14800023 | SQLite: Access permission denied. [since 12] |
| 14800024 | SQLite: The database file is locked. [since 12] |
| 14800025 | SQLite: A table in the database is locked. [since 12] |
| 14800026 | SQLite: The database is out of memory. [since 12] |
| 14800027 | SQLite: Attempt to write a readonly database. [since 12] |
| 14800028 | SQLite: Some kind of disk I/O error occurred. [since 12] |
| 14800029 | SQLite: The database is full. [since 12] |
| 14800030 | SQLite: Unable to open the database file. [since 12] |
| 14800031 | SQLite: TEXT or BLOB exceeds size limit. [since 12] |
| 14800032 | SQLite: Abort due to constraint violation. [since 12] |
| 14800033 | SQLite: Data type mismatch. [since 12] |
| 14800034 | SQLite: Library used incorrectly. [since 12] |

## goToPreviousRow

```TypeScript
goToPreviousRow(): boolean
```

Moves to the previous row in the result set.

**Since:** 9

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns true if the operation is successful; returns false otherwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 14800012 | ResultSet is empty or pointer index is out of bounds. |
| 14800000 | Inner error. [since 12] |
| 14800011 | The current operation failed because the database is corrupted. [since 12] |
| 14800014 | The target instance is already closed. [since 12] |
| 14800019 | The SQL must be a query statement. [since 12] |
| 14800021 | SQLite: Generic error. [since 12] |
| 14800022 | SQLite: Callback routine requested an abort. [since 12] |
| 14800023 | SQLite: Access permission denied. [since 12] |
| 14800024 | SQLite: The database file is locked. [since 12] |
| 14800025 | SQLite: A table in the database is locked. [since 12] |
| 14800026 | SQLite: The database is out of memory. [since 12] |
| 14800027 | SQLite: Attempt to write a readonly database. [since 12] |
| 14800028 | SQLite: Some kind of disk I/O error occurred. [since 12] |
| 14800029 | SQLite: The database is full. [since 12] |
| 14800030 | SQLite: Unable to open the database file. [since 12] |
| 14800031 | SQLite: TEXT or BLOB exceeds size limit. [since 12] |
| 14800032 | SQLite: Abort due to constraint violation. [since 12] |
| 14800033 | SQLite: Data type mismatch. [since 12] |
| 14800034 | SQLite: Library used incorrectly. [since 12] |

## goToRow

```TypeScript
goToRow(position: int): boolean
```

Moves to the specified row in the result set.

**Since:** 9

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| position | int | Yes | Destination position to move to. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns true if the operation is successful; returns false otherwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 14800012 | ResultSet is empty or pointer index is out of bounds. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14800000 | Inner error. [since 12] |
| 14800011 | The current operation failed because the database is corrupted. [since 12] |
| 14800014 | The target instance is already closed. [since 12] |
| 14800019 | The SQL must be a query statement. [since 12] |
| 14800021 | SQLite: Generic error. [since 12] |
| 14800022 | SQLite: Callback routine requested an abort. [since 12] |
| 14800023 | SQLite: Access permission denied. [since 12] |
| 14800024 | SQLite: The database file is locked. [since 12] |
| 14800025 | SQLite: A table in the database is locked. [since 12] |
| 14800026 | SQLite: The database is out of memory. [since 12] |
| 14800027 | SQLite: Attempt to write a readonly database. [since 12] |
| 14800028 | SQLite: Some kind of disk I/O error occurred. [since 12] |
| 14800029 | SQLite: The database is full. [since 12] |
| 14800030 | SQLite: Unable to open the database file. [since 12] |
| 14800031 | SQLite: TEXT or BLOB exceeds size limit. [since 12] |
| 14800032 | SQLite: Abort due to constraint violation. [since 12] |
| 14800033 | SQLite: Data type mismatch. [since 12] |
| 14800034 | SQLite: Library used incorrectly. [since 12] |

## isColumnNull

```TypeScript
isColumnNull(columnIndex: int): boolean
```

Checks whether the value in the specified column is null.

**Since:** 9

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| columnIndex | int | Yes | Index of the target column, starting from 0. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns true if the value is null; returns false otherwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 14800013 | Column index is out of bounds. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14800000 | Inner error. [since 12] |
| 14800011 | The current operation failed because the database is corrupted. [since 12] |
| 14800012 | ResultSet is empty or pointer index is out of bounds. [since 12] |
| 14800014 | The target instance is already closed. [since 12] |
| 14800021 | SQLite: Generic error. [since 12] |
| 14800022 | SQLite: Callback routine requested an abort. [since 12] |
| 14800023 | SQLite: Access permission denied. [since 12] |
| 14800024 | SQLite: The database file is locked. [since 12] |
| 14800025 | SQLite: A table in the database is locked. [since 12] |
| 14800026 | SQLite: The database is out of memory. [since 12] |
| 14800027 | SQLite: Attempt to write a readonly database. [since 12] |
| 14800028 | SQLite: Some kind of disk I/O error occurred. [since 12] |
| 14800029 | SQLite: The database is full. [since 12] |
| 14800030 | SQLite: Unable to open the database file. [since 12] |
| 14800031 | SQLite: TEXT or BLOB exceeds size limit. [since 12] |
| 14800032 | SQLite: Abort due to constraint violation. [since 12] |
| 14800033 | SQLite: Data type mismatch. [since 12] |
| 14800034 | SQLite: Library used incorrectly. [since 12] |

## isAtFirstRow

```TypeScript
isAtFirstRow: boolean
```

Whether the result set pointer is in the first row (the row index is **0**). The value **true** means the result set pointer is in the first row.

**Type:** boolean

**Since:** 9

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

## isClosed

```TypeScript
isClosed: boolean
```

Whether the result set is closed. The value **true** means the result set is closed.

**Type:** boolean

**Since:** 9

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

## columnNames

```TypeScript
columnNames: Array<string>
```

Names of all columns in the result set. If the result set contains duplicate column names, the return values are not as expected. You are advised to use the [getColumnNames]relationalStore.ResultSet.getColumnNames API to obtain the column names.

**Type:** Array<string>

**Since:** 9

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

## isAtLastRow

```TypeScript
isAtLastRow: boolean
```

Whether the result set pointer is in the last row. The value **true** means the pointer is in the last row.

**Type:** boolean

**Since:** 9

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

## rowIndex

```TypeScript
rowIndex: int
```

Index of the current row in the result set. Default value: **-1**. The index position starts from **0**.

**Type:** int

**Since:** 9

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

## isStarted

```TypeScript
isStarted: boolean
```

Whether the result set pointer is moved. The value **true** means the pointer is moved.

**Type:** boolean

**Since:** 9

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

## isEnded

```TypeScript
isEnded: boolean
```

Whether the result set pointer is after the last row. The value **true** means the pointer is after the last row.

**Type:** boolean

**Since:** 9

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

## rowCount

```TypeScript
rowCount: int
```

Number of rows in the result set.

**Type:** int

**Since:** 9

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

## columnCount

```TypeScript
columnCount: int
```

Number of columns in the result set.

**Type:** int

**Since:** 9

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

