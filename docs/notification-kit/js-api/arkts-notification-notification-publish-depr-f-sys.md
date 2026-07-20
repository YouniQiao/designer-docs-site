# publish (System API)

## publish

```TypeScript
function publish(request: NotificationRequest, userId: number, callback: AsyncCallback<void>): void
```

Publishes a notification to a specified user. This API uses an asynchronous callback to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** publish

**Required permissions:** ohos.permission.NOTIFICATION_CONTROLLER

<!--Device-notification-function publish(request: NotificationRequest, userId: number, callback: AsyncCallback<void>): void--><!--Device-notification-function publish(request: NotificationRequest, userId: number, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| request | [NotificationRequest](arkts-notification-notificationmanager-notificationrequest-t.md) | Yes | Content and related configuration of the notification to publish. |
| userId | number | Yes | User ID. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<void> | Yes | Callback used to return the result. |


## publish

```TypeScript
function publish(request: NotificationRequest, userId: number): Promise<void>
```

Publishes a notification to a specified user. This API uses a promise to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** publish

**Required permissions:** ohos.permission.NOTIFICATION_CONTROLLER

<!--Device-notification-function publish(request: NotificationRequest, userId: number): Promise<void>--><!--Device-notification-function publish(request: NotificationRequest, userId: number): Promise<void>-End-->

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| request | [NotificationRequest](arkts-notification-notificationmanager-notificationrequest-t.md) | Yes | Content and related configuration of the notification to publish. |
| userId | number | Yes | User ID. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<void> | Promise that returns no value. |

