# getUpdateSqlInfo

## Modules to Import

```TypeScript
import { relationalStore } from '@ohos.data.relationalStore';
```

## getUpdateSqlInfo

```TypeScript
function getUpdateSqlInfo(predicates: RdbPredicates, values: ValuesBucket, conflict?: ConflictResolution):SqlInfo
```

Obtains the SQL statement used to update data. This API returns the result synchronously.

**Since:** 20

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| predicates | RdbPredicates | Yes | **RdbPredicates** object that matches the specified field. |
| values | ValuesBucket | Yes | Field information and corresponding values of the data to be written to thedatabase. |
| conflict | ConflictResolution | No | Resolution used to resolve the conflict. <br>Default value:**relationalStore.ConflictResolution.ON_CONFLICT_NONE**. |

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
const bucket: relationalStore.ValuesBucket = {
  name: "Logitech",
  age: 18,
  sex: "man",
  desc: "asserter"
};
const predicates = new relationalStore.RdbPredicates("users");
const sqlInfo: relationalStore.SqlInfo = relationalStore.getUpdateSqlInfo(
  predicates,
  bucket,
  relationalStore.ConflictResolution.ON_CONFLICT_NONE
);

```

