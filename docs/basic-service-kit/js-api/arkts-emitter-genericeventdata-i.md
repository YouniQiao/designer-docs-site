# GenericEventData

发送事件时传递的泛型数据。

**Since:** 12

**System capability:** SystemCapability.Notification.Emitter

## Modules to Import

```TypeScript
import { emitter } from '@kit.BasicServicesKit';
```

## data

```TypeScript
data?: T
```

发送事件时传递的数据。T：泛型类型。

**Type:** T

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Notification.Emitter

```TypeScript
data?: T | ESValue
```

发送事件时传递的数据。T：泛型类型。

**Type:** T | ESValue

**Since:** 23

**System capability:** SystemCapability.Notification.Emitter

