# SqlExecutionInfo

Represents statistics about SQL statements executed by the database.

**起始版本：** 12

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

## 导入模块

```TypeScript
import { relationalStore } from '@kit.ArkData';
```

## prepareTime

```TypeScript
prepareTime: long
```

Time used to get the SQL statements ready and bind parameters, in μs.

**类型：** long

**起始版本：** 12

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

## totalTime

```TypeScript
totalTime: long
```

Total time used to execute the SQL statements, in μs.

**类型：** long

**起始版本：** 12

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

## waitTime

```TypeScript
waitTime: long
```

Time used to obtain the handle, in μs.

**类型：** long

**起始版本：** 12

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

## executeTime

```TypeScript
executeTime: long
```

Time used to execute the SQL statements, in μs.

**类型：** long

**起始版本：** 12

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

## sql

```TypeScript
sql: Array<string>
```

SQL statements executed. If the value of [batchInsert] {@link @ohos.data.relationalStore:relationalStore.RdbStore.batchInsert(table: string)} is too large, multiple SQL statements may be executed.

**类型：** Array<string>

**起始版本：** 12

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

