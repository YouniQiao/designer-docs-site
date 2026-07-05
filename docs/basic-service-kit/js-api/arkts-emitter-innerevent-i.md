# InnerEvent

订阅或发送的事件，订阅事件时`EventPriority`不生效。

**Since:** 7

**System capability:** SystemCapability.Notification.Emitter

## Modules to Import

```TypeScript
import { emitter } from '@kit.BasicServicesKit';
```

## eventId

```TypeScript
eventId: long
```

事件ID，由开发者定义，用于辨别事件。

**Type:** long

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Notification.Emitter

## priority

```TypeScript
priority?: EventPriority
```

事件的优先级，默认值为EventPriority.LOW。

**Type:** EventPriority

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Notification.Emitter

