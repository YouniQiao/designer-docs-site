# getInsertSqlInfo

## Modules to Import

```TypeScript
import { relationalStore } from '@ohos.data.relationalStore';
```

## getInsertSqlInfo

```TypeScript
function getInsertSqlInfo(table: string, values: ValuesBucket, conflict?: ConflictResolution):SqlInfo
```

Obtains the SQL statement used to insert data. This API returns the result synchronously.

**Since:** 20

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| table | string | Yes | Name of the database table to which data is to be written. |
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
const sqlInfo: relationalStore.SqlInfo = relationalStore.getInsertSqlInfo(
  "USER",
  bucket,
  relationalStore.ConflictResolution.ON_CONFLICT_NONE
);

```

