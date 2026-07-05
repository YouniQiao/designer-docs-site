# ResultSet

A result set is a set of results returned after the relational database (RDB) query APIs are called. You can use the **resultset** APIs to obtain required data.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** @ohos.data.relationalStore:relationalStore

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

## close

```TypeScript
close(): void
```

Closes this result set.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.data.relationalStore.ResultSet.close

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

## getBlob

```TypeScript
getBlob(columnIndex: number): Uint8Array
```

Obtains the value from the specified column in the current row as a byte array.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.data.relationalStore.ResultSet.getBlob

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| columnIndex | number | 是 | Index of the specified column, starting from 0. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Uint8Array | Value in the specified column as a byte array. |

## getColumnIndex

```TypeScript
getColumnIndex(columnName: string): number
```

Obtains the column index based on the column name.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.data.relationalStore.ResultSet.getColumnIndex

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| columnName | string | 是 | Column name specified. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| number | Index of the column obtained. |

## getColumnName

```TypeScript
getColumnName(columnIndex: number): string
```

Obtains the column name based on the column index.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.data.relationalStore.ResultSet.getColumnName

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| columnIndex | number | 是 | Column index specified. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| string | Column name obtained. |

## getDouble

```TypeScript
getDouble(columnIndex: number): number
```

Obtains the value from the specified column in the current row as a Double.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.data.relationalStore.ResultSet.getDouble

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| columnIndex | number | 是 | Index of the specified column, starting from 0. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| number | Value in the specified column as a Double. |

## getLong

```TypeScript
getLong(columnIndex: number): number
```

Obtains the value from the specified column in the current row as a Long.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.data.relationalStore.ResultSet.getLong

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| columnIndex | number | 是 | Index of the specified column, starting from 0. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| number | Value in the specified column as a Long.  The value range supported by this API is Number.MIN_SAFE_INTEGER to Number.MAX_SAFE_INTEGER. If the  value is out of this range, use [getDouble](arkts-resultset-i.md#getDouble). |

## getString

```TypeScript
getString(columnIndex: number): string
```

Obtains the value from the specified column in the current row as a string.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.data.relationalStore.ResultSet.getString

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| columnIndex | number | 是 | Index of the specified column, starting from 0. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| string | Value in the specified column as a string. |

## goTo

```TypeScript
goTo(offset: number): boolean
```

Moves the result set forward or backward to the specified row with an offset relative to the current position.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.data.relationalStore.ResultSet.goTo

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| offset | number | 是 | Offset relative to the current position. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Returns true if the operation is successful; returns false otherwise. |

## goToFirstRow

```TypeScript
goToFirstRow(): boolean
```

Moves the cursor to the first row of the result set.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.data.relationalStore.ResultSet.goToFirstRow

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Returns true if the operation is successful; returns false otherwise. |

## goToLastRow

```TypeScript
goToLastRow(): boolean
```

Moves the cursor to the last row of the result set.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.data.relationalStore.ResultSet.goToLastRow

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Returns true if the operation is successful; returns false otherwise. |

## goToNextRow

```TypeScript
goToNextRow(): boolean
```

Moves the cursor to the next row in the result set.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.data.relationalStore.ResultSet.goToNextRow

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Returns true if the operation is successful; returns false otherwise. |

## goToPreviousRow

```TypeScript
goToPreviousRow(): boolean
```

Moves the cursor to the previous row in the result set.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.data.relationalStore.ResultSet.goToPreviousRow

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Returns true if the operation is successful; returns false otherwise. |

## goToRow

```TypeScript
goToRow(position: number): boolean
```

Moves the cursor to the specified row in the result set.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.data.relationalStore.ResultSet.goToRow

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| position | number | 是 | Position to which the cursor is to be moved. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Returns true if the operation is successful; returns false otherwise. |

## isColumnNull

```TypeScript
isColumnNull(columnIndex: number): boolean
```

Checks whether the value in the specified column of the current row is null.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.data.relationalStore.ResultSet.isColumnNull

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| columnIndex | number | 是 | Index of the specified column, starting from 0. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Returns true if the value is null; returns false otherwise. |

## isAtFirstRow

```TypeScript
isAtFirstRow: boolean
```

Whether the cursor is in the first row of the result set.

**类型：** boolean

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.data.relationalStore.ResultSet.isAtFirstRow

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

## isClosed

```TypeScript
isClosed: boolean
```

Whether the result set is closed.

**类型：** boolean

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.data.relationalStore.ResultSet.isClosed

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

## columnNames

```TypeScript
columnNames: Array<string>
```

Names of all columns in the result set.

**类型：** Array<string>

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.data.relationalStore.ResultSet.columnNames

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

## isAtLastRow

```TypeScript
isAtLastRow: boolean
```

Whether the cursor is in the last row of the result set.

**类型：** boolean

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.data.relationalStore.ResultSet.isAtLastRow

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

## rowIndex

```TypeScript
rowIndex: number
```

Index of the current row in the result set.

**类型：** number

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.data.relationalStore.ResultSet.rowIndex

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

## isStarted

```TypeScript
isStarted: boolean
```

Whether the cursor has been moved.

**类型：** boolean

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.data.relationalStore.ResultSet.isStarted

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

## isEnded

```TypeScript
isEnded: boolean
```

Whether the cursor is after the last row of the result set.

**类型：** boolean

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.data.relationalStore.ResultSet.isEnded

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

## rowCount

```TypeScript
rowCount: number
```

Number of rows in the result set.

**类型：** number

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.data.relationalStore.ResultSet.rowCount

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

## columnCount

```TypeScript
columnCount: number
```

Number of columns in the result set.

**类型：** number

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.data.relationalStore.ResultSet.columnCount

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

