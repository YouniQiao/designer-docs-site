# DataShareResultSet

Provides APIs for accessing the result sets returned. The column or key names are returned as a string array, in which the strings are in the same order as the columns or keys in the result set.

**起始版本：** 9

**系统能力：** SystemCapability.DistributedDataManager.DataShare.Core

**系统接口：** 此接口为系统接口。

## 导入模块

```TypeScript
import { DataType } from '@kit.ArkData';
```

## close

```TypeScript
close(): void
```

Closes this result set. Calling this API will invalidate the result set and release all its resources.

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.DataShare.Core

**系统接口：** 此接口为系统接口。

**示例：**

```TypeScript
if (resultSet != undefined) {
  (resultSet as DataShareResultSet).close();
}

```

## getBlob

```TypeScript
getBlob(columnIndex: int): Uint8Array
```

Obtains the value in the form of a byte array based on the specified column and the current row. If the specified column or key is empty or the value is not of the Blob type, you need to determine whether to throw an exception.

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.DataShare.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| columnIndex | int | 是 | Index of the target column, starting from 0. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Uint8Array | Value obtained. |

**示例：**

```TypeScript
let columnIndex = 1;
if (resultSet != undefined) {
  let goToFirstRow = (resultSet as DataShareResultSet).goToFirstRow();
  if (!goToFirstRow) {
    console.error("failed to go to first row");
  } else {
    let getBlob = (resultSet as DataShareResultSet).getBlob(columnIndex);
    console.info('resultSet.getBlob: ' + getBlob);
  }
}

```

## getColumnIndex

```TypeScript
getColumnIndex(columnName: string): int
```

Obtains the column index based on a column name. The column name is passed in as an input parameter.

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.DataShare.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| columnName | string | 是 | Column name. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| int | Column index obtained. |

**示例：**

```TypeScript
let ColumnName = "name";
if (resultSet != undefined) {
  let getColumnIndex = (resultSet as DataShareResultSet).getColumnIndex(ColumnName);
  console.info('resultSet.getColumnIndex: ' + getColumnIndex);
}

```

## getColumnName

```TypeScript
getColumnName(columnIndex: int): string
```

Obtains the column name based on a column index. The column index is passed in as an input parameter.

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.DataShare.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| columnIndex | int | 是 | Column index. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| string | Column name obtained. |

**示例：**

```TypeScript
let columnIndex = 1;
if (resultSet != undefined) {
  let getColumnName = (resultSet as DataShareResultSet).getColumnName(columnIndex);
  console.info('resultSet.getColumnName: ' + getColumnName);
}

```

## getDataType

```TypeScript
getDataType(columnIndex: int): DataType
```

Obtains the data type based on the specified column index. If the specified column or key is empty or the value is not of the DataType type, you need to determine whether to throw an exception.

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.DataShare.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| columnIndex | int | 是 | Column index. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| DataType | Data type obtained. |

**示例：**

```TypeScript
let columnIndex = 1;
if (resultSet != undefined) {
  let goToFirstRow = (resultSet as DataShareResultSet).goToFirstRow();
  if (!goToFirstRow) {
    console.error("failed to go to first row");
  } else {
    let getDataType = (resultSet as DataShareResultSet).getDataType(columnIndex);
    console.info('resultSet.getDataType: ' + getDataType);
  }
}

```

## getDouble

```TypeScript
getDouble(columnIndex: int): double
```

Obtains the value in the form of a double-precision floating-point number based on the specified column and the current row. If the specified column or key is empty or the value is not of the double type, you need to determine whether to throw an exception.

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.DataShare.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| columnIndex | int | 是 | Index of the target column, starting from 0. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| double | Value obtained. |

**示例：**

```TypeScript
let columnIndex = 1;
if (resultSet != undefined) {
  let goToFirstRow = (resultSet as DataShareResultSet).goToFirstRow();
  if (!goToFirstRow) {
    console.error("failed to go to first row");
  } else {
    let getDouble = (resultSet as DataShareResultSet).getDouble(columnIndex);
    console.info('resultSet.getDouble: ' + getDouble);
  }
}

```

## getLong

```TypeScript
getLong(columnIndex: int): long
```

Obtains the value in the form of a long integer based on the specified column and the current row. If the specified column or key is empty or the value is not of the long type, you need to determine whether to throw an exception.

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.DataShare.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| columnIndex | int | 是 | Index of the target column, starting from 0. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| long | Value obtained. |

**示例：**

```TypeScript
let columnIndex = 1;
if (resultSet != undefined) {
  let goToFirstRow = (resultSet as DataShareResultSet).goToFirstRow();
  if (!goToFirstRow) {
    console.error("failed to go to first row");
  } else {
    let getLong = (resultSet as DataShareResultSet).getLong(columnIndex);
    console.info('resultSet.getLong: ' + getLong);
  }
}

```

## getString

```TypeScript
getString(columnIndex: int): string
```

Obtains the value in the form of a string based on the specified column and the current row. If the specified column or key is empty or the value is not of the string type, you need to determine whether to throw an exception.

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.DataShare.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| columnIndex | int | 是 | Index of the target column, starting from 0. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| string | Value obtained. |

**示例：**

```TypeScript
let columnIndex = 1;
if (resultSet != undefined) {
  let goToFirstRow = (resultSet as DataShareResultSet).goToFirstRow();
  if (!goToFirstRow) {
    console.error("failed to go to first row");
  } else {
    let getString = (resultSet as DataShareResultSet).getString(columnIndex);
    console.info('resultSet.getString: ' + getString);
  }
}

```

## goTo

```TypeScript
goTo(offset: int): boolean
```

Moves based on the specified offset.

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.DataShare.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| offset | int | 是 | Offset relative to the current position. A negative value means to move forward, and a  positive value means to move backward. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Returns true if the operation is successful; returns false otherwise. |

**示例：**

```TypeScript
let goToNum = 1;
if (resultSet != undefined) {
  let isGoTo = (resultSet as DataShareResultSet).goTo(goToNum);
  console.info('resultSet.goTo: ' + isGoTo);
}

```

## goToFirstRow

```TypeScript
goToFirstRow(): boolean
```

Moves to the first row of the result set.

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.DataShare.Core

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Returns true if the operation is successful; returns false otherwise. |

**示例：**

```TypeScript
// resultSet需依照本页的使用说明进行创建。
if (resultSet != undefined) {
  let isGoToFirstRow = (resultSet as DataShareResultSet).goToFirstRow();
  console.info('resultSet.goToFirstRow: ' + isGoToFirstRow);
}

```

## goToLastRow

```TypeScript
goToLastRow(): boolean
```

Moves to the last row of the result set.

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.DataShare.Core

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Returns true if the operation is successful; returns false otherwise. |

**示例：**

```TypeScript
if (resultSet != undefined) {
  let isGoToLastRow = (resultSet as DataShareResultSet).goToLastRow();
  console.info('resultSet.goToLastRow: ' + isGoToLastRow);
}

```

## goToNextRow

```TypeScript
goToNextRow(): boolean
```

Moves to the next row in the result set.

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.DataShare.Core

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Returns true if the operation is successful; returns false otherwise. |

**示例：**

```TypeScript
if (resultSet != undefined) {
  let isGoToNextRow = (resultSet as DataShareResultSet).goToNextRow();
  console.info('resultSet.goToNextRow: ' + isGoToNextRow);
}

```

## goToPreviousRow

```TypeScript
goToPreviousRow(): boolean
```

Moves to the previous row in the result set.

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.DataShare.Core

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Returns true if the operation is successful; returns false otherwise. |

**示例：**

```TypeScript
if (resultSet != undefined) {
  let isGoToPreviousRow = (resultSet as DataShareResultSet).goToPreviousRow();
  console.info('resultSet.goToPreviousRow: ' + isGoToPreviousRow);
}

```

## goToRow

```TypeScript
goToRow(position: int): boolean
```

Moves to the specified row in the result set.

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.DataShare.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| position | int | 是 | Position to move to, starting from 0. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Returns true if the operation is successful; returns false otherwise. |

**示例：**

```TypeScript
let goToRowNum = 2;
if (resultSet != undefined) {
  let isGoToRow = (resultSet as DataShareResultSet).goToRow(goToRowNum);
  console.info('resultSet.goToRow: ' + isGoToRow);
}

```

## isClosed

```TypeScript
isClosed: boolean
```

Whether the result set is closed. The value **true** means the result set is closed; the value **false** means the opposite.

**类型：** boolean

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.DataShare.Core

**系统接口：** 此接口为系统接口。

## columnNames

```TypeScript
columnNames: Array<string>
```

Names of all columns in the result set.

**类型：** Array<string>

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.DataShare.Core

**系统接口：** 此接口为系统接口。

## rowCount

```TypeScript
rowCount: int
```

Number of rows in the result set.

**类型：** int

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.DataShare.Core

**系统接口：** 此接口为系统接口。

## columnCount

```TypeScript
columnCount: int
```

Number of columns in the result set.

**类型：** int

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.DataShare.Core

**系统接口：** 此接口为系统接口。

