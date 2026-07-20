# unsubscribe (System API)

## unsubscribe

```TypeScript
function unsubscribe(subscriber: NotificationSubscriber, callback: AsyncCallback<void>): void
```

Unsubscribes from a notification. This API uses an asynchronous callback to return the result.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** unsubscribe

**Required permissions:** ohos.permission.NOTIFICATION_CONTROLLER

<!--Device-notification-function unsubscribe(subscriber: NotificationSubscriber, callback: AsyncCallback<void>): void--><!--Device-notification-function unsubscribe(subscriber: NotificationSubscriber, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| subscriber | [NotificationSubscriber](arkts-notification-notificationsubscriber-notificationsubscriber-i-sys.md) | Yes | Notification subscriber. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<void> | Yes | Callback used to return the result. |


## unsubscribe

```TypeScript
function unsubscribe(subscriber: NotificationSubscriber): Promise<void>
```

Unsubscribes from a notification. This API uses a promise to return the result.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** unsubscribe

**Required permissions:** ohos.permission.NOTIFICATION_CONTROLLER

<!--Device-notification-function unsubscribe(subscriber: NotificationSubscriber): Promise<void>--><!--Device-notification-function unsubscribe(subscriber: NotificationSubscriber): Promise<void>-End-->

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| subscriber | [NotificationSubscriber](arkts-notification-notificationsubscriber-notificationsubscriber-i-sys.md) | Yes | Notification subscriber. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<void> | Promise that returns no value. |

