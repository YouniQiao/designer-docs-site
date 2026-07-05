# CloudData

云数据。

**Since:** 11

**System capability:** SystemCapability.DistributedDataManager.CloudSync.Server

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { cloudExtension } from '@kit.ArkData';
```

## nextCursor

```TypeScript
nextCursor: string
```

查询游标。

**Type:** string

**Since:** 11

**System capability:** SystemCapability.DistributedDataManager.CloudSync.Server

**System API:** This is a system API.

## values

```TypeScript
values: Array<Record<string, CloudType>>
```

需要查询数据的数组，包括数据记录的实际值和ExtensionValue（扩展值）。

**Type:** Array<Record<string, CloudType>>

**Since:** 11

**System capability:** SystemCapability.DistributedDataManager.CloudSync.Server

**System API:** This is a system API.

## hasMore

```TypeScript
hasMore: boolean
```

服务器是否存在更多数据可供查询。true表示服务器上还有数据等待查询，false表示服务器上不存在可查询的数据。

**Type:** boolean

**Since:** 11

**System capability:** SystemCapability.DistributedDataManager.CloudSync.Server

**System API:** This is a system API.

