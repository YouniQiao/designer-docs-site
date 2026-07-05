# EventPriority

```TypeScript
export enum EventPriority
```

表示事件的优先级。

**Since:** 7

**System capability:** SystemCapability.Notification.Emitter

## IMMEDIATE

```TypeScript
IMMEDIATE = 0
```

表示事件先于HIGH优先级投递。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Notification.Emitter

## HIGH

```TypeScript
HIGH
```

表示事件先于LOW优先级投递。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Notification.Emitter

## LOW

```TypeScript
LOW
```

表示事件优于IDLE优先级投递，事件的默认优先级是LOW。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Notification.Emitter

## IDLE

```TypeScript
IDLE
```

表示在没有其他事件的情况下，才投递该事件。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Notification.Emitter

