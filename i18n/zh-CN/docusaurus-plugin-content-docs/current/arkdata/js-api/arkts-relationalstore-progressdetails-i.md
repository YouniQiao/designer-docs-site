# ProgressDetails

Describes detail of the cloud sync {@code Progress}.

**起始版本：** 10

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

## 导入模块

```TypeScript
import { relationalStore } from '@kit.ArkData';
```

## schedule

```TypeScript
schedule: Progress
```

Describes the status of data sync progress.

**类型：** Progress

**起始版本：** 10

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

## code

```TypeScript
code: ProgressCode
```

Describes the code of data sync progress.

**类型：** ProgressCode

**起始版本：** 10

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

## details

```TypeScript
details: Record<string, TableDetails>
```

Statistics of each table. The key indicates the table name, and the value indicates the device-cloud sync statistics of the table.

**类型：** Record<string, TableDetails>

**起始版本：** 10

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

## message

```TypeScript
message?: string
```

Indicates the code message.

**类型：** string

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

