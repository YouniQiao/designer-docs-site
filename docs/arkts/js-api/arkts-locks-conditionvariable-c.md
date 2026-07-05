# ConditionVariable

用于线程同步的对象。

**Since:** 18

**Decorator:** @Sendable

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

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

## notifyAll

```TypeScript
notifyAll(): void
```

通知所有等待的Promise。

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

## notifyOne

```TypeScript
notifyOne(): void
```

通知一个等待的Promise。

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

## request

```TypeScript
static request(name: string): ConditionVariable
```

使用指定的名称查找或创建ConditionVariable实例。

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | 要查找或创建的ConditionVariable的名称。 |

**Return value:**

| Type | Description |
| --- | --- |
| ConditionVariable | 返回ConditionVariable实例。 |

## wait

```TypeScript
wait(): Promise<void>
```

等待ConditionVariable被通知。

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | 一旦ConditionVariable被通知，Promise将被解决。 |

## waitFor

```TypeScript
waitFor(timeout: number): Promise<void>
```

等待ConditionVariable被通知，或直到达到指定的时间限制。

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| timeout | number | Yes | 最长等待时间。  该值应为整数。  单位：ms。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | 一旦ConditionVariable被通知或达到指定时间限制，Promise将被解决。 |

