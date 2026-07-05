# Priority

```TypeScript
export enum Priority
```

表示发送消息时的优先级枚举，各优先级对应关系请参考EventHandler等级定义。

**Since:** 26.0.0

**System capability:** SystemCapability.Utils.Lang

## IMMEDIATE

```TypeScript
IMMEDIATE = 1
```

立即执行优先级，对应EventHandler IMMEDIATE优先级。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

## HIGH

```TypeScript
HIGH = 2
```

高优先级，对应EventHandler HIGH优先级。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

## LOW

```TypeScript
LOW = 3
```

低优先级，对应EventHandler LOW优先级。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

## IDLE

```TypeScript
IDLE = 4
```

后台优先级，对应EventHandler IDLE优先级。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

