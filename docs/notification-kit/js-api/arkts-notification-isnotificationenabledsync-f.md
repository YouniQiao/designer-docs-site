# isNotificationEnabledSync

## Modules to Import

```TypeScript
import { notificationManager } from '@kit.NotificationKit';
```

## isNotificationEnabledSync

```TypeScript
function isNotificationEnabledSync(): boolean
```

Checks whether notification is enabled for the specified application. This API returns the result synchronously.

**Since:** 12

**System capability:** SystemCapability.Notification.Notification

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Result of the notification enabling status. The value **true** means that the notification isenabled, and **false** means the opposite. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [1600001](../errorcode-notification.md#1600001-internal-error) | Internal error. |
| [1600002](../errorcode-notification.md#1600002-marshalling-or-unmarshalling-error) | Marshalling or unmarshalling error. |
| [1600003](../errorcode-notification.md#1600003-failed-to-connect-to-the-notification-service) | Failed to connect to the service. |

**Example**

```TypeScript
let enabled: boolean = notificationManager.isNotificationEnabledSync();
console.info(`isNotificationEnabledSync success, data is : ${JSON.stringify(enabled)}`);

```

