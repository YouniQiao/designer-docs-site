# AsyncLockOptions

锁操作的选项。

**Since:** 12

**System capability:** SystemCapability.Utils.Lang

## Modules to Import

```TypeScript
import { ArkTSUtils } from '@kit.ArkTS';
```

## constructor

```TypeScript
constructor()
```

默认构造函数。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

## isAvailable

```TypeScript
isAvailable: boolean
```

如果值为true且lockAsync无法立即获取锁，则操作将被取消。

**Type:** boolean

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

## signal

```TypeScript
signal: AbortSignal<T> | null
```

用于终止异步操作的对象。如果signal.aborted为true，回调将不会被调用。

**Type:** AbortSignal<T> | null

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

## timeout

```TypeScript
timeout: number
```

锁操作的超时时间，单位为毫秒。如果该值大于零，当超时到达时，lockAsync将拒绝返回的Promise。

**Type:** number

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

