# BatchResult

Result object containing batch operation,including {@link batchAdd},{@link batchUpdate},{@link batchRemove}.

**Since:** 26.0.0

**System capability:** SystemCapability.Security.Asset

## Modules to Import

```TypeScript
import { asset } from '@ohos.security.asset';
```

## failedCount

```TypeScript
failedCount: number
```

Failed count of the batch operation, 0 means all success.

**Type:** number

**Since:** 26.0.0

**System capability:** SystemCapability.Security.Asset

## failedErrorInfos

```TypeScript
failedErrorInfos: Array<BatchErrInfo>
```

An array of error details for assets that failed in the batch operation, including {@link BatchResult#failedCount} items, which is an empty array if all succeed.

**Type:** Array<BatchErrInfo>

**Since:** 26.0.0

**System capability:** SystemCapability.Security.Asset

