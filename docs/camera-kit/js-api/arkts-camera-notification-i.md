# Notification

Provides APIs for managing notifications.

**Since:** 26.0.0

**System capability:** SystemCapability.Multimedia.Camera.Core

## Modules to Import

```TypeScript
import { camera } from '@kit.CameraKit';
```

## offNotificationReceive

```TypeScript
offNotificationReceive(callback?: Callback<NotificationInfo>): void
```

Unregisters the callback for receiving notifications.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;NotificationInfo> | No |  |

## onNotificationReceive

```TypeScript
onNotificationReceive(callback: Callback<NotificationInfo>): void
```

Registers a callback to receive notifications.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;NotificationInfo> | Yes | Callback for receiving notifications. |

