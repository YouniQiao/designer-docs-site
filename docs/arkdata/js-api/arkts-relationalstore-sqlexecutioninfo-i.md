# SqlExecutionInfo

Represents statistics about SQL statements executed by the database.

**Since:** 12

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

## Modules to Import

```TypeScript
import { relationalStore } from '@kit.ArkData';
```

## prepareTime

```TypeScript
prepareTime: long
```

Time used to get the SQL statements ready and bind parameters, in μs.

**Type:** long

**Since:** 12

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

## totalTime

```TypeScript
totalTime: long
```

Total time used to execute the SQL statements, in μs.

**Type:** long

**Since:** 12

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

## waitTime

```TypeScript
waitTime: long
```

Time used to obtain the handle, in μs.

**Type:** long

**Since:** 12

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

## executeTime

```TypeScript
executeTime: long
```

Time used to execute the SQL statements, in μs.

**Type:** long

**Since:** 12

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

## sql

```TypeScript
sql: Array<string>
```

SQL statements executed. If the value of [batchInsert] {@link @ohos.data.relationalStore:relationalStore.RdbStore.batchInsert(table: string)} is too large, multiple SQL statements may be executed.

**Type:** Array<string>

**Since:** 12

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

