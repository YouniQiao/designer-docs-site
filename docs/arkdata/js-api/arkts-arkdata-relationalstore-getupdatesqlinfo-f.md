# getUpdateSqlInfo

## Modules to Import

```TypeScript
import { relationalStore } from '@kit.ArkData';
```

<a id="getupdatesqlinfo"></a>
## getUpdateSqlInfo

```TypeScript
function getUpdateSqlInfo(predicates: RdbPredicates, values: ValuesBucket, conflict?: ConflictResolution):SqlInfo
```

Obtains the SQL statement used to update data. This API returns the result synchronously.

**Since:** 20

<!--Device-relationalStore-function getUpdateSqlInfo(predicates: RdbPredicates, values: ValuesBucket, conflict?: ConflictResolution):SqlInfo--><!--Device-relationalStore-function getUpdateSqlInfo(predicates: RdbPredicates, values: ValuesBucket, conflict?: ConflictResolution):SqlInfo-End-->

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| predicates | [RdbPredicates](arkts-arkdata-rdb-rdbpredicates-c.md) | Yes | **RdbPredicates** object that matches the specified field. |
| values | [ValuesBucket](arkts-arkdata-rdb-valuesbucket-t.md) | Yes | Field information and corresponding values of the data to be written to the database. |
| conflict | [ConflictResolution](../../apis-asset-store-kit/arkts-apis/arkts-assetstore-asset-conflictresolution-e.md) | No | Resolution used to resolve the conflict. <br>Default value:**relationalStore.ConflictResolution.ON_CONFLICT_NONE**. |

**Return value:**

| Type | Description |
| --- | --- |
| [SqlInfo](arkts-arkdata-relationalstore-sqlinfo-i.md) | **SqlInfo** object. **sql** indicates the returned SQL statement, and **args** indicates the parameters in the executed SQL statement. |

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

