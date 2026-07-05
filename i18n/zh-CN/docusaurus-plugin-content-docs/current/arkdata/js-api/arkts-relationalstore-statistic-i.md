# Statistic

Defines a struct for the device-cloud sync statistics of a database table.

**起始版本：** 10

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

## 导入模块

```TypeScript
import { relationalStore } from '@kit.ArkData';
```

## total

```TypeScript
total: int
```

Total number of rows to be synced between the device and cloud in the database table.

**类型：** int

**起始版本：** 10

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

## remained

```TypeScript
remained: int
```

Number of rows that are not executed for device-cloud sync in the database table.

**类型：** int

**起始版本：** 10

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

## failed

```TypeScript
failed: int
```

Number of rows that failed to be synced between the device and cloud in the database table.

**类型：** int

**起始版本：** 10

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

## successful

```TypeScript
successful: int
```

Number of rows that are successfully synced between the device and cloud in the database table.

**类型：** int

**起始版本：** 10

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

