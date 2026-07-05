# StatisticInfo

端云同步的统计信息。

**Since:** 12

**System capability:** SystemCapability.DistributedDataManager.CloudSync.Config

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { cloudData } from '@kit.ArkData';
```

## normal

```TypeScript
normal: int
```

端云一致的数据条数。如返回值为2，表示本地与云端一致的数据为2条。

**Type:** int

**Since:** 12

**System capability:** SystemCapability.DistributedDataManager.CloudSync.Config

**System API:** This is a system API.

## inserted

```TypeScript
inserted: int
```

本地新增且未同步到云端的数据条数，如返回值为2，表示本地新增2条数据且还未同步到云端。

**Type:** int

**Since:** 12

**System capability:** SystemCapability.DistributedDataManager.CloudSync.Config

**System API:** This is a system API.

## updated

```TypeScript
updated: int
```

云端同步之后，本地或云端修改还未同步的数据条数，如返回值为2，表示本地或云端修改还有2条数据未同步。

**Type:** int

**Since:** 12

**System capability:** SystemCapability.DistributedDataManager.CloudSync.Config

**System API:** This is a system API.

## table

```TypeScript
table: string
```

查询的表名。如返回值为"cloud_notes"，表示查询结果是表名为"cloud_notes"的同步信息。

**Type:** string

**Since:** 12

**System capability:** SystemCapability.DistributedDataManager.CloudSync.Config

**System API:** This is a system API.

