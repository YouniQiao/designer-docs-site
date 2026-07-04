# getQuerySqlInfo

## Modules to Import

```TypeScript
import { relationalStore } from '@ohos.data.relationalStore';
```

## getQuerySqlInfo

```TypeScript
function getQuerySqlInfo(predicates: RdbPredicates, columns?: Array<string>):SqlInfo
```

Obtains the SQL statement used to query data. This API returns the result synchronously.

**Since:** 20

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| predicates | RdbPredicates | Yes | **RdbPredicates** object that matches the specified field. |
| columns | Array&lt;string&gt; | No | Columns to be queried. If this parameter is not specified, all columns arequeried. |

**Return value:**

| Type | Description |
| --- | --- |
| SqlInfo | **SqlInfo** object. **sql** indicates the returned SQL statement, and **args** indicates theparameters in the executed SQL statement. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [14800001](../errorcode-data-rdb.md#14800001-invalid-arguments) | Invalid arguments. Possible causes: 1. Parameter is out of valid range. |

**Example**

```TypeScript
const predicates = new relationalStore.RdbPredicates("users");
predicates.notEqualTo("age", 18);
predicates.equalTo("name", "zhangsan");
const sqlInfo: relationalStore.SqlInfo = relationalStore.getQuerySqlInfo(predicates);

```

