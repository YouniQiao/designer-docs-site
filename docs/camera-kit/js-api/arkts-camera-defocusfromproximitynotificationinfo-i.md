---
last_update:
  date: 2026-07-04
---

# DefocusFromProximityNotificationInfo

Describes defocus notification information caused by close proximity.

**Since:** 26.0.0

**System capability:** SystemCapability.Multimedia.Camera.Core

## Modules to Import

```TypeScript
import { camera } from '@ohos.multimedia.camera';
```

## name

```TypeScript
readonly name: NotificationName
```

Notification name. This value is {@link NotificationName.DEFOCUS_FROM_PROXIMITY}.

**Type:** NotificationName

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.Multimedia.Camera.Core

## value

```TypeScript
readonly value: ProximityStateForFocus
```

Notification value. Indicates the proximity state for focus.

**Type:** ProximityStateForFocus

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.Multimedia.Camera.Core

