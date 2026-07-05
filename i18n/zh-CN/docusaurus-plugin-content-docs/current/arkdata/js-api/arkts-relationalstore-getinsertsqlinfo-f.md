# getInsertSqlInfo

## getInsertSqlInfo

```TypeScript
function getInsertSqlInfo(table: string, values: ValuesBucket, conflict?: ConflictResolution):SqlInfo
```

Obtains the SQL statement used to insert data. This API returns the result synchronously.

**起始版本：** 20

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| table | string | 是 | Name of the database table to which data is to be written. |
| values | ValuesBucket | 是 | Field information and corresponding values of the data to be written to the  database. |
| conflict | ConflictResolution | 否 | Resolution used to resolve the conflict. Default value:  relationalStore.ConflictResolution.ON_CONFLICT_NONE. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| SqlInfo | SqlInfo object. sql indicates the returned SQL statement, and args indicates the  parameters in the executed SQL statement. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 14800001 | Invalid arguments. Possible causes: 1. Parameter is out of valid range. |

**示例：**

```TypeScript
const bucket: relationalStore.ValuesBucket = {
  name: "Logitech",
  age: 18,
  sex: "man",
  desc: "asserter"
};
const sqlInfo: relationalStore.SqlInfo = relationalStore.getInsertSqlInfo(
  "USER",
  bucket,
  relationalStore.ConflictResolution.ON_CONFLICT_NONE
);

```

