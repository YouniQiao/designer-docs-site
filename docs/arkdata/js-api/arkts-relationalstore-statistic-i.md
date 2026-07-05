# Statistic

Defines a struct for the device-cloud sync statistics of a database table.

**Since:** 10

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

## Modules to Import

```TypeScript
import { relationalStore } from '@kit.ArkData';
```

## total

```TypeScript
total: int
```

Total number of rows to be synced between the device and cloud in the database table.

**Type:** int

**Since:** 10

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

## remained

```TypeScript
remained: int
```

Number of rows that are not executed for device-cloud sync in the database table.

**Type:** int

**Since:** 10

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

## failed

```TypeScript
failed: int
```

Number of rows that failed to be synced between the device and cloud in the database table.

**Type:** int

**Since:** 10

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

## successful

```TypeScript
successful: int
```

Number of rows that are successfully synced between the device and cloud in the database table.

**Type:** int

**Since:** 10

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

