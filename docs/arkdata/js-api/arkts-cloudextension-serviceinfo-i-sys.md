# ServiceInfo

云服务信息

**Since:** 11

**System capability:** SystemCapability.DistributedDataManager.CloudSync.Server

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { cloudExtension } from '@kit.ArkData';
```

## enableCloud

```TypeScript
enableCloud: boolean
```

表示是否启用了云服务。true表示启用云服务，false表示未启用

**Type:** boolean

**Since:** 11

**System capability:** SystemCapability.DistributedDataManager.CloudSync.Server

**System API:** This is a system API.

## remainingSpace

```TypeScript
remainingSpace: long
```

服务器上账号的可用空间（KB）。

**Type:** long

**Since:** 11

**System capability:** SystemCapability.DistributedDataManager.CloudSync.Server

**System API:** This is a system API.

## totalSpace

```TypeScript
totalSpace: long
```

服务器上账号的总空间（KB）。

**Type:** long

**Since:** 11

**System capability:** SystemCapability.DistributedDataManager.CloudSync.Server

**System API:** This is a system API.

## id

```TypeScript
id: string
```

使用哈希函数SHA256生成的云账号ID。

**Type:** string

**Since:** 11

**System capability:** SystemCapability.DistributedDataManager.CloudSync.Server

**System API:** This is a system API.

## user

```TypeScript
user: int
```

设备的当前用户ID。

**Type:** int

**Since:** 11

**System capability:** SystemCapability.DistributedDataManager.CloudSync.Server

**System API:** This is a system API.

