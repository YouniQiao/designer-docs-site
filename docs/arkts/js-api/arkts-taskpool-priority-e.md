# Priority

```TypeScript
enum Priority
```

表示所创建任务（Task）执行时的优先级。工作线程优先级跟随任务优先级更新，对应关系请参考 [QoS等级定义](docroot://napi/qos-guidelines.md#qos-level)。

**Since:** 9

**System capability:** SystemCapability.Utils.Lang

## HIGH

```TypeScript
HIGH = 0
```

任务为高优先级。 从API version 11开始，该接口支持在原子化服务中使用。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

## MEDIUM

```TypeScript
MEDIUM = 1
```

任务为中优先级。 从API version 11开始，该接口支持在原子化服务中使用。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

## LOW

```TypeScript
LOW = 2
```

任务为低优先级。 从API version 11开始，该接口支持在原子化服务中使用。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

## IDLE

```TypeScript
IDLE = 3
```

任务为后台任务。 从API version 12开始，该接口支持在原子化服务中使用。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

