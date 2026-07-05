# snoozeNotification (System API)

## Modules to Import

```TypeScript
import { notificationManager } from '@ohos.notificationManager';
```

## snoozeNotification

```TypeScript
function snoozeNotification(hashCode: string, delayTime: number): Promise<void>
```

Sets a notification snooze reminder. The notification reminds the user again after the specified time. Each setting triggers only one reminder, using the same reminder mode as the original notification. After the snooze reminder is set, the original notification is deleted.

**Since:** 26.0.0

**Required permissions:** ohos.permission.NOTIFICATION_CONTROLLER

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| hashCode | string | Yes | The hashCode of the notification to snooze. |
| delayTime | number | Yes | The time interval in seconds to delay the reminder<br>Unit: s. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Returns the promise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not system application to call the interface. |
| [1600001](../errorcode-notification.md#1600001-internal-error) | Internal error. |
| [1600003](../errorcode-notification.md#1600003-failed-to-connect-to-the-notification-service) | Failed to connect to the service. |
| [1600007](../errorcode-notification.md#1600007-notification-not-found) | The notification does not exist. |
| [1600028](../errorcode-notification.md#1600028-current-notification-does-not-support-this-api) | This notification is not supported. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

// Replace it with the unique ID of the notification to be snoozed.
let hashCode: string = "hashCode";
let delayTime: number = 60;
notificationManager.snoozeNotification(hashCode, delayTime).then(() => {
  console.info("snoozeNotification success.")
}).catch((err: BusinessError):void => {
  console.error(`snoozeNotification failed, code is ${err.code}, message is ${err.message}`);
});

```

