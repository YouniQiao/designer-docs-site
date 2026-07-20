# getActiveNotifications

## getActiveNotifications

```TypeScript
function getActiveNotifications(callback: AsyncCallback<Array<NotificationRequest>>): void
```

Obtains active notifications of this application. This API uses an asynchronous callback to return the result.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** getActiveNotifications

<!--Device-notification-function getActiveNotifications(callback: AsyncCallback<Array<NotificationRequest>>): void--><!--Device-notification-function getActiveNotifications(callback: AsyncCallback<Array<NotificationRequest>>): void-End-->

**System capability:** SystemCapability.Notification.Notification

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<Array<NotificationRequest>> | Yes | Callback used to return the result. |


## getActiveNotifications

```TypeScript
function getActiveNotifications(): Promise<Array<NotificationRequest>>
```

Obtains active notifications of this application. This API uses a promise to return the result.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** getActiveNotifications

<!--Device-notification-function getActiveNotifications(): Promise<Array<NotificationRequest>>--><!--Device-notification-function getActiveNotifications(): Promise<Array<NotificationRequest>>-End-->

**System capability:** SystemCapability.Notification.Notification

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<Array<NotificationRequest>> | Promise used to return the result. |

