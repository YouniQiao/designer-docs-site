# Result

Records the number of affected data rows and the result set.

**Since:** 23

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

## Modules to Import

```TypeScript
import { relationalStore } from '@kit.ArkData';
```

## resultSet

```TypeScript
readonly resultSet: LiteResultSet
```

Result set of the affected data. Defaults to 1,024 rows of data, with a maximum supported limit of 32,766 rows supported; excess rows will be discarded.

**Type:** LiteResultSet

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

## changed

```TypeScript
readonly changed: long
```

Number of affected rows.

**Type:** long

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

