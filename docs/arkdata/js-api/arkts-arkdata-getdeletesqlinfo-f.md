# getDeleteSqlInfo

## Modules to Import

```TypeScript
import { relationalStore } from '@ohos.data.relationalStore';
```

## getDeleteSqlInfo

```TypeScript
function getDeleteSqlInfo(predicates: RdbPredicates):SqlInfo
```

Obtains the SQL statement used to delete data. This API returns the result synchronously.

**Since:** 20

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| predicates | RdbPredicates | Yes | **RdbPredicates** object that matches the specified field. |

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
predicates.equalTo("tableName", "a");
predicates.notEqualTo("age", 18);
const sqlInfo: relationalStore.SqlInfo = relationalStore.getDeleteSqlInfo(predicates);

```

