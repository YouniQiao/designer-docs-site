# cancelGroup

## cancelGroup

```TypeScript
function cancelGroup(groupName: string, callback: AsyncCallback<void>): void
```

Cancels notifications under a notification group of this application. This API uses an asynchronous callback to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** cancelGroup

<!--Device-notification-function cancelGroup(groupName: string, callback: AsyncCallback<void>): void--><!--Device-notification-function cancelGroup(groupName: string, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Notification.Notification

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| groupName | string | Yes | Name of the notification group, which is specified through [NotificationRequest](arkts-notification-notification-requestenablenotification-depr-f.md#requestenablenotification-1) when the notification is published. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<void> | Yes | Callback used to return the result. |


## cancelGroup

```TypeScript
function cancelGroup(groupName: string): Promise<void>
```

Cancels notifications under a notification group of this application. This API uses a promise to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** cancelGroup

<!--Device-notification-function cancelGroup(groupName: string): Promise<void>--><!--Device-notification-function cancelGroup(groupName: string): Promise<void>-End-->

**System capability:** SystemCapability.Notification.Notification

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| groupName | string | Yes | Name of the notification group. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<void> | Promise that returns no value. |

