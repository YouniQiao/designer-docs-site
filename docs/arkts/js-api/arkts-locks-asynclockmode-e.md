# AsyncLockMode

```TypeScript
enum AsyncLockMode
```

锁操作对应的模式枚举。

**Since:** 12

**System capability:** SystemCapability.Utils.Lang

## SHARED

```TypeScript
SHARED = 1
```

共享锁操作。如果指定了此模式，允许操作重入。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

## EXCLUSIVE

```TypeScript
EXCLUSIVE = 2
```

独占锁操作。如果指定了此模式，只有在独占获取锁时才执行操作。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

