# SyncResult

关键资产同步的结果。

**Since:** 20

**System capability:** SystemCapability.Security.Asset

## Modules to Import

```TypeScript
import { asset } from '@kit.AssetStoreKit';
```

## failedCount

```TypeScript
readonly failedCount?: number
```

关键资产同步失败的数量。

**Type:** number

**Since:** 20

**System capability:** SystemCapability.Security.Asset

## resultCode

```TypeScript
readonly resultCode: number
```

关键资产同步的结果码。同步成功时结果码为0，同步失败时结果码参考[ErrorCode]asset.ErrorCode。

**Type:** number

**Since:** 20

**System capability:** SystemCapability.Security.Asset

## totalCount

```TypeScript
readonly totalCount?: number
```

触发同步的关键资产总数。

**Type:** number

**Since:** 20

**System capability:** SystemCapability.Security.Asset

