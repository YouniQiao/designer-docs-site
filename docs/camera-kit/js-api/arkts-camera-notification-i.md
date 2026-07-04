---
last_update:
  date: 2026-07-04
---

# Notification

Provides APIs for managing notifications.

**Since:** 26.0.0

**System capability:** SystemCapability.Multimedia.Camera.Core

## Modules to Import

```TypeScript
import { camera } from '@ohos.multimedia.camera';
```

## offNotificationReceive

```TypeScript
offNotificationReceive(callback?: Callback<NotificationInfo>): void
```

Unregisters the callback for receiving notifications.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;NotificationInfo&gt; | No | Callback to unregister.If this parameter is not specified, all callbacks are unregistered. |

## onNotificationReceive

```TypeScript
onNotificationReceive(callback: Callback<NotificationInfo>): void
```

Registers a callback to receive notifications.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;NotificationInfo&gt; | Yes | Callback for receiving notifications. |

