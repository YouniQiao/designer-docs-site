# AsyncLockState

AsyncLock实例上所有锁操作的信息。

**Since:** 12

**System capability:** SystemCapability.Utils.Lang

## Modules to Import

```TypeScript
import { ArkTSUtils } from '@kit.ArkTS';
```

## held

```TypeScript
held: AsyncLockInfo[]
```

持有的锁信息。

**Type:** AsyncLockInfo[]

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

## pending

```TypeScript
pending: AsyncLockInfo[]
```

等待中的锁信息。

**Type:** AsyncLockInfo[]

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

