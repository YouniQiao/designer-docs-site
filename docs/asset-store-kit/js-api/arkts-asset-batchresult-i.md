# BatchResult

[batchAdd]asset.batchAdd、[batchUpdate]asset.batchUpdate和[batchRemove]asset.batchRemove批量操作的 结果。

**Since:** 26.0.0

**System capability:** SystemCapability.Security.Asset

## Modules to Import

```TypeScript
import { asset } from '@kit.AssetStoreKit';
```

## failedErrorInfos

```TypeScript
failedErrorInfos: Array<BatchErrInfo>
```

批量操作中失败的关键资产的错误信息数组，全部成功时为空数组。

**Type:** Array<BatchErrInfo>

**Since:** 26.0.0

**System capability:** SystemCapability.Security.Asset

## failedCount

```TypeScript
failedCount: number
```

批量操作的失败数量，0表示全部成功。

**Type:** number

**Since:** 26.0.0

**System capability:** SystemCapability.Security.Asset

