# LiteResultSet

Defines APIs to access the result set obtained by querying the RDB store. This result set is the collection of results returned with the **query()** method called. The **LiteResultSet** instance is not refreshed in real time. After using the result set, if the data in the database is changed (by being added, deleted, or modified), you need to query the result set again to obtain the latest data. In the following API examples, you need to obtain an **LiteResultSet** instance by using a query method, such as [queryWithoutRowCount](arkts-relationalstore-rdbstore-i.md#queryWithoutRowCount) or [querySqlWithoutRowCount](arkts-relationalstore-rdbstore-i.md#querySqlWithoutRowCount), and then call the corresponding method through this instance. > **NOTE** > > - The initial APIs of this class are supported since API version 23.

**Since:** 23

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

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

## getAsset

```TypeScript
getAsset(columnIndex: int): Asset
```

Obtains the value in the specified column in the current row as an [Asset](arkts-relationalstore-asset-i.md#Asset). If the data type of the current column is Asset, the value is returned as an Asset. If the value in the current column is **null**, **null** is returned. If the data type of the current column is not Asset, 14800041 is returned.

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

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
| 14800012 | ResultSet is empty or pointer index is out of bounds. |
| 14800013 | Column index is out of bounds. |
| 14800014 | The target instance is already closed. |
| 14800041 | Type conversion failed. |

## getAssets

```TypeScript
getAssets(columnIndex: int): Assets
```

Obtains the value in the specified column in the current row as [Assets](arkts-relationalstore-assets-t.md#Assets). If the data type of the current column is Assets, the value is returned as Assets. If the value in the current column is **null**, **null** is returned. If the data type of the current column is not Assets, 14800041 is returned.

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

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
| 14800012 | ResultSet is empty or pointer index is out of bounds. |
| 14800013 | Column index is out of bounds. |
| 14800014 | The target instance is already closed. |
| 14800041 | Type conversion failed. |

## getBlob

```TypeScript
getBlob(columnIndex: int): Uint8Array
```

Obtains the value in the specified column in the current row as a byte array. If the data type of the current column is INTEGER, DOUBLE, TEXT, or BLOB, the data is converted to a byte array and returned. If the content of the column is null/empty, an empty byte array is returned. If the data type of the current column is ASSET, ASSETS, FLOATVECTOR, or BIGINT, 14800041 is returned.

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

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
| 14800012 | ResultSet is empty or pointer index is out of bounds. |
| 14800013 | Column index is out of bounds. |
| 14800014 | The target instance is already closed. |
| 14800041 | Type conversion failed. |

## getColumnIndex

```TypeScript
getColumnIndex(columnName: string): int
```

Obtains the column index based on the column name.

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| columnName | string | Yes | Column name. If the result set contains duplicate column names, the return value  is not as expected. |

**Return value:**

| Type | Description |
| --- | --- |
| int | Column index obtained. |

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

## getColumnName

```TypeScript
getColumnName(columnIndex: int): string
```

Obtains the column name based on the column index.

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| columnIndex | int | Yes | Index of the column in the result set, starting from 0. |

**Return value:**

| Type | Description |
| --- | --- |
| string | Column name obtained. If the result set contains duplicate column names, the return value is  not as expected. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 14800001 | Invalid arguments. Possible causes: 1. Parameter is out of valid range. |
| 14800011 | The current operation failed because the database is corrupted. |
| 14800013 | Column index is out of bounds. |
| 14800014 | The target instance is already closed. |
| 14800019 | The SQL must be a query statement. |
| 14800021 | SQLite: Generic error. |
| 14800026 | SQLite: The database is out of memory. |
| 14800028 | SQLite: Some kind of disk I/O error occurred. |
| 14800030 | SQLite: Unable to open the database file. |

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

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| columnIdentifier | int \| string | Yes | Index or name of the column in the result set. The index starts from 0  . |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;ColumnType> | Promise used to return the column type obtained. If the result set contains  duplicate column names, the return value is not as expected. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 14800001 | Invalid arguments. Possible causes: 1. Parameter is out of valid range. |
| 14800011 | The current operation failed because the database is corrupted. |
| 14800012 | ResultSet is empty or pointer index is out of bounds. |
| 14800013 | Column index is out of bounds. |
| 14800014 | The target instance is already closed. |
| 14800019 | The SQL must be a query statement. |
| 14800021 | SQLite: Generic error. |
| 14800026 | SQLite: The database is out of memory. |
| 14800028 | SQLite: Some kind of disk I/O error occurred. |
| 14800030 | SQLite: Unable to open the database file. |

## getColumnTypeSync

```TypeScript
getColumnTypeSync(columnIdentifier: int | string): ColumnType
```

Obtains the column type based on the specified column index or column name.

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| columnIdentifier | int \| string | Yes | Index or name of the column in the result set. The index starts from 0  . |

**Return value:**

| Type | Description |
| --- | --- |
| ColumnType | Column type obtained. If the result set contains duplicate column names, the return value  is not as expected. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 14800001 | Invalid arguments. Possible causes: 1. Parameter is out of valid range. |
| 14800011 | The current operation failed because the database is corrupted. |
| 14800012 | ResultSet is empty or pointer index is out of bounds. |
| 14800013 | Column index is out of bounds. |
| 14800014 | The target instance is already closed. |
| 14800019 | The SQL must be a query statement. |
| 14800021 | SQLite: Generic error. |
| 14800026 | SQLite: The database is out of memory. |
| 14800028 | SQLite: Some kind of disk I/O error occurred. |
| 14800030 | SQLite: Unable to open the database file. |

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

Obtains the value in the specified column in the current row as a Double. If the data type of the current column is INTEGER, DOUBLE, or TEXT, the value is converted to the Double type and returned. Non-numeric TEXT and BLOB types return **0.0**. If the content of the column is null/empty, **0.0** is returned. If the data type of the current column is ASSET, ASSETS, FLOATVECTOR, or BIGINT, 14800041 is returned.

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

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
| 14800012 | ResultSet is empty or pointer index is out of bounds. |
| 14800013 | Column index is out of bounds. |
| 14800014 | The target instance is already closed. |
| 14800041 | Type conversion failed. |

## getFloat32Array

```TypeScript
getFloat32Array(columnIndex: int): Float32Array
```

Obtains the value of the specified column in the current row as a float array. The implementation class determines whether to throw an exception if the value of the specified column in the current row is null or the specified column is not of the float array type.

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

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
| 14800012 | ResultSet is empty or pointer index is out of bounds. |
| 14800013 | Column index is out of bounds. |
| 14800014 | The target instance is already closed. |
| 14800041 | Type conversion failed. |

## getLong

```TypeScript
getLong(columnIndex: int): long
```

Obtains the value from the specified column in the current row, and returns a value of Long type. If the data type of the current column is INTEGER, DOUBLE, TEXT, or BLOB, a value of Long type is returned. If the column is null, **0** is returned. If the data type is INTEGER and the value is greater than **Number.MAX_SAFE_INTEGER** or less than **Number.MIN_SAFE_INTEGER**, you are advised to use the [getString]relationalStore.LiteResultSet.getString API to obtain the value without losing precision. If the data type in the specified column is DOUBLE, you are advised to use the [getDouble]relationalStore.LiteResultSet.getDouble API to obtain the value without precision loss. If the data type of the current column is ASSET, ASSETS, FLOATVECTOR, or BIGINT, 14800041 is returned.

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| columnIndex | int | Yes | Index of the target column, starting from 0. |

**Return value:**

| Type | Description |
| --- | --- |
| long | Value obtained.  The value range supported by this API is Number.MIN_SAFE_INTEGER to Number.MAX_SAFE_INTEGER. If  the value is out of this range, use [getDouble]relationalStore.LiteResultSet.getDouble for DOUBLE  values and [getString]relationalStore.LiteResultSet.getString for INTEGER values. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 14800012 | ResultSet is empty or pointer index is out of bounds. |
| 14800013 | Column index is out of bounds. |
| 14800014 | The target instance is already closed. |
| 14800041 | Type conversion failed. |

## getRow

```TypeScript
getRow(): ValuesBucket
```

Obtains data for the current row.

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Return value:**

| Type | Description |
| --- | --- |
| ValuesBucket | Value of the specified row. If the result set contains duplicate column names, the  return value is not as expected. You are advised to use the  [getCurrentRowData]relationalStore.LiteResultSet.getCurrentRowData API. |

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

## getRows

```TypeScript
getRows(maxCount: int, position?: int): Promise<Array<ValuesBucket>>
```

Obtains a specified amount of data from the result set. This API uses a promise to return the result. Do not call this API concurrently with other APIs of [LiteResultSet](arkts-data-relationalstore.md#relationalStore). Otherwise, unexpected data may be obtained.

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| maxCount | int | Yes | Number of rows to obtain. The value is a positive integer. |
| position | int | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;ValuesBucket>> | Promise used to return maxCount rows of data obtained. If the  number of remaining records is less than maxCount, the remaining records are returned. Returning an empty  array indicates that the end of the result set is reached. If the result set contains duplicate column names,  the return values are not as expected. You are advised to use the  [getRowsData]relationalStore.LiteResultSet.getRowsData API. |

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

## getString

```TypeScript
getString(columnIndex: int): string
```

Obtains the value in the specified column in the current row as a string. If the data type of the current column is INTEGER, DOUBLE, TEXT, or BLOB type, the value is returned as a string. If the content of the column is null/empty, an empty string **""** is returned. If the data type of the current column is DOUBLE, precision loss may occur. You are advised to use [getDouble]relationalStore.LiteResultSet.getDouble API to obtain the value. If the data type of the current column is ASSET, ASSETS, FLOATVECTOR, or BIGINT, 14800041 is returned.

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

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
| 14800012 | ResultSet is empty or pointer index is out of bounds. |
| 14800013 | Column index is out of bounds. |
| 14800014 | The target instance is already closed. |
| 14800041 | Type conversion failed. |

## getValue

```TypeScript
getValue(columnIndex: int): ValueType
```

Obtains the value of the specified column in the current row. If the value type is INTEGER and the value is greater than **Number.MAX_SAFE_INTEGER** or less than **Number.MIN_SAFE_INTEGER**, you are advised to use the [getString]relationalStore.LiteResultSet.getString API to obtain the value without precision loss.

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| columnIndex | int | Yes | Index of the target column, starting from 0. |

**Return value:**

| Type | Description |
| --- | --- |
| ValueType | Type of the data field returned. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 14800012 | ResultSet is empty or pointer index is out of bounds. |
| 14800013 | Column index is out of bounds. |
| 14800014 | The target instance is already closed. |

## goToNextRow

```TypeScript
goToNextRow(): boolean
```

Moves the result set to the next row.

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns true if the result set is successfully moved to the next row; returns false  otherwise. |

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

## isColumnNull

```TypeScript
isColumnNull(columnIndex: int): boolean
```

Checks whether the value in the specified column is null.

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

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
| 14800001 | Invalid arguments. Possible causes: 1. Parameter is out of valid range. |
| 14800011 | The current operation failed because the database is corrupted. |
| 14800012 | ResultSet is empty or pointer index is out of bounds. |
| 14800013 | Column index is out of bounds. |
| 14800014 | The target instance is already closed. |
| 14800019 | The SQL must be a query statement. |
| 14800021 | SQLite: Generic error. |
| 14800026 | SQLite: The database is out of memory. |
| 14800028 | SQLite: Some kind of disk I/O error occurred. |
| 14800030 | SQLite: Unable to open the database file |

