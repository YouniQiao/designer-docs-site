# subscribe

## Modules to Import

```TypeScript
import { notificationExtensionSubscription } from '@kit.NotificationKit';
```

<a id="subscribe"></a>
## subscribe

```TypeScript
function subscribe(info: NotificationExtensionSubscriptionInfo[]): Promise<void>
```

Subscribes to the notification extension. You can subscribe to the notification extension only after obtaining the unique address of the Bluetooth device by calling the APIs related to the [Bluetooth modules](docroot://connectivity/connectivity-kit-intro.md#bluetooth). This API uses a promise to return the result.

**Since:** 22

**Required permissions:** ohos.permission.SUBSCRIBE_NOTIFICATION

<!--Device-notificationExtensionSubscription-function subscribe(info: NotificationExtensionSubscriptionInfo[]): Promise<void>--><!--Device-notificationExtensionSubscription-function subscribe(info: NotificationExtensionSubscriptionInfo[]): Promise<void>-End-->

**System capability:** SystemCapability.Notification.Notification

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| info | [NotificationExtensionSubscriptionInfo](arkts-notification-notificationextensionsubscriptioninfo-i.md)[] | Yes | List of subscribed notifications (in array). |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied or current device not supported. |
| [1600001](../errorcode-notification.md#1600001-internal-error) | Internal error. |
| [1600003](../errorcode-notification.md#1600003-failed-to-connect-to-the-notification-service) | Failed to connect to the service. |
| [1600023](../errorcode-notification.md#1600023-notificationsubscriberextensionability-not-implemented) | The application does not implement the NotificationSubscriberExtensionAbility. |

**Example**

```TypeScript

let infos: notificationExtensionSubscription.NotificationExtensionSubscriptionInfo[] = [
  {
    addr: '01:23:45:67:89:AB', // Use the dynamically obtained Bluetooth address.
    type: notificationExtensionSubscription.SubscribeType.BLUETOOTH
  }
];
notificationExtensionSubscription.subscribe(infos).then(() => {
  console.info(`subscribe success`);
}).catch((err: BusinessError) => {
  console.error(`subscribe fail: ${JSON.stringify(err)}`);
});


```

