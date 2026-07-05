# getDeleteSqlInfo

## getDeleteSqlInfo

```TypeScript
function getDeleteSqlInfo(predicates: RdbPredicates):SqlInfo
```

Obtains the SQL statement used to delete data. This API returns the result synchronously.

**起始版本：** 20

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| predicates | RdbPredicates | 是 | RdbPredicates object that matches the specified field. |

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
const predicates = new relationalStore.RdbPredicates("users");
predicates.equalTo("tableName", "a");
predicates.notEqualTo("age", 18);
const sqlInfo: relationalStore.SqlInfo = relationalStore.getDeleteSqlInfo(predicates);

```

