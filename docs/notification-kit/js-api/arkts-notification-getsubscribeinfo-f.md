# getSubscribeInfo

## Modules to Import

```TypeScript
import { notificationExtensionSubscription } from '@ohos.notificationExtensionSubscription';
```

## getSubscribeInfo

```TypeScript
function getSubscribeInfo(): Promise<NotificationExtensionSubscriptionInfo[]>
```

Obtains the subscription information about the notification extension of this application. This API uses a promise to return the result.

**Since:** 22

**Required permissions:** ohos.permission.SUBSCRIBE_NOTIFICATION

**System capability:** SystemCapability.Notification.Notification

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;NotificationExtensionSubscriptionInfo[]&gt; | Promise used to return the[NotificationExtensionSubscriptionInfo[]]{@link ./notification/NotificationExtensionSubscriptionInfo:NotificationExtensionSubscriptionInfo}array. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied or current device not supported. |
| [1600001](../errorcode-notification.md#1600001-internal-error) | Internal error. |
| [1600003](../errorcode-notification.md#1600003-failed-to-connect-to-the-notification-service) | Failed to connect to the service. |

**Example**

```TypeScript

notificationExtensionSubscription.getSubscribeInfo().then((data: notificationExtensionSubscription.NotificationExtensionSubscriptionInfo[]) => {
  console.info(`getSubscribeInfo successfully. Data: ${JSON.stringify(data)}`);
}).catch((err: BusinessError) => {
  console.error(`getSubscribeInfo fail: ${JSON.stringify(err)}`);
});

```

