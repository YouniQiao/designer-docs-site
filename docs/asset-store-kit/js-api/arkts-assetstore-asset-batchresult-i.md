# BatchResult

Result object containing batch operation,including {@link batchAdd},{@link batchUpdate},{@link batchRemove}.

**Since:** 26.0.0

<!--Device-asset-interface BatchResult--><!--Device-asset-interface BatchResult-End-->

**System capability:** SystemCapability.Security.Asset

## Modules to Import

```TypeScript
import { asset } from '@kit.AssetStoreKit';
```

## failedCount

```TypeScript
failedCount: number
```

Failed count of the batch operation, 0 means all success.

**Type:** number

**Since:** 26.0.0

<!--Device-BatchResult-failedCount: number--><!--Device-BatchResult-failedCount: number-End-->

**System capability:** SystemCapability.Security.Asset

## failedErrorInfos

```TypeScript
failedErrorInfos: Array<BatchErrInfo>
```

An array of error details for assets that failed in the batch operation,including {@link BatchResult#failedCount} items, which is an empty array if all succeed.

**Type:** Array<BatchErrInfo>

**Since:** 26.0.0

<!--Device-BatchResult-failedErrorInfos: Array<BatchErrInfo>--><!--Device-BatchResult-failedErrorInfos: Array<BatchErrInfo>-End-->

**System capability:** SystemCapability.Security.Asset

