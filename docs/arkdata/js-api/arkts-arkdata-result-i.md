# Result

Records the number of affected data rows and the result set.

**Since:** 23

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

## Modules to Import

```TypeScript
import { relationalStore } from '@ohos.data.relationalStore';
```

## changed

```TypeScript
readonly changed: number
```

Number of affected rows.

**Type:** number

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

## resultSet

```TypeScript
readonly resultSet: LiteResultSet
```

Result set of the affected data. Defaults to 1,024 rows of data, with a maximum supported limit of 32,766 rows supported; excess rows will be discarded.

**Type:** LiteResultSet

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

