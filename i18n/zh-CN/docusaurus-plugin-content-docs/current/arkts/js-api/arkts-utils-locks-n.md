# locks

异步锁。

**起始版本：** 12

**系统能力：** SystemCapability.Utils.Lang

## 导入模块

```TypeScript
import { ArkTSUtils } from '@kit.ArkTS';
```

## 汇总

### 类

| 名称 | 描述 |
| --- | --- |
| [AbortSignal](arkts-locks-abortsignal-c.md) | 用于终止异步操作的对象。该类的实例必须在其创建的同一线程中访问。从其他线程访问此类的字段会导致未定义的行为。 |
| [AsyncLock](arkts-locks-asynclock-c.md) | 在锁下执行异步操作的类。 |
| [AsyncLockInfo](arkts-locks-asynclockinfo-c.md) | 关于锁的信息。 |
| [AsyncLockOptions](arkts-locks-asynclockoptions-c.md) | 锁操作的选项。 |
| [AsyncLockState](arkts-locks-asynclockstate-c.md) | AsyncLock实例上所有锁操作的信息。 |
| [ConditionVariable](arkts-locks-conditionvariable-c.md) | 用于线程同步的对象。 |

### 类型

| 名称 | 描述 |
| --- | --- |
| [AsyncLockCallback](arkts-locks-asynclockcallback-t.md) | asyncLock操作的回调类型。 |

### 枚举

| 名称 | 描述 |
| --- | --- |
| [AsyncLockMode](arkts-locks-asynclockmode-e.md) | 锁操作对应的模式枚举。 |

