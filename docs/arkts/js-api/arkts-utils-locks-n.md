# locks

异步锁。

**Since:** 12

**System capability:** SystemCapability.Utils.Lang

## Modules to Import

```TypeScript
import { ArkTSUtils } from '@kit.ArkTS';
```

## Summary

### Classes

| Name | Description |
| --- | --- |
| [AbortSignal](arkts-locks-abortsignal-c.md) | 用于终止异步操作的对象。该类的实例必须在其创建的同一线程中访问。从其他线程访问此类的字段会导致未定义的行为。 |
| [AsyncLock](arkts-locks-asynclock-c.md) | 在锁下执行异步操作的类。 |
| [AsyncLockInfo](arkts-locks-asynclockinfo-c.md) | 关于锁的信息。 |
| [AsyncLockOptions](arkts-locks-asynclockoptions-c.md) | 锁操作的选项。 |
| [AsyncLockState](arkts-locks-asynclockstate-c.md) | AsyncLock实例上所有锁操作的信息。 |
| [ConditionVariable](arkts-locks-conditionvariable-c.md) | 用于线程同步的对象。 |

### Types

| Name | Description |
| --- | --- |
| [AsyncLockCallback](arkts-locks-asynclockcallback-t.md) | asyncLock操作的回调类型。 |

### Enums

| Name | Description |
| --- | --- |
| [AsyncLockMode](arkts-locks-asynclockmode-e.md) | 锁操作对应的模式枚举。 |

