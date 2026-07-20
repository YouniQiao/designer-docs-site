# addSlots (System API)

## addSlots

```TypeScript
function addSlots(slots: Array<NotificationSlot>, callback: AsyncCallback<void>): void
```

Adds an array of notification slots. This API uses an asynchronous callback to return the result.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** addSlots

**Required permissions:** ohos.permission.NOTIFICATION_CONTROLLER

<!--Device-notification-function addSlots(slots: Array<NotificationSlot>, callback: AsyncCallback<void>): void--><!--Device-notification-function addSlots(slots: Array<NotificationSlot>, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| slots | [Array](../../apis-na/arkts-apis/arkts-na-lib-es5-array-i.md)<NotificationSlot> | Yes | Notification slots to add. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<void> | Yes | Callback used to return the result. |


## addSlots

```TypeScript
function addSlots(slots: Array<NotificationSlot>): Promise<void>
```

Adds an array of notification slots. This API uses a promise to return the result.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** addSlots

**Required permissions:** ohos.permission.NOTIFICATION_CONTROLLER

<!--Device-notification-function addSlots(slots: Array<NotificationSlot>): Promise<void>--><!--Device-notification-function addSlots(slots: Array<NotificationSlot>): Promise<void>-End-->

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| slots | [Array](../../apis-na/arkts-apis/arkts-na-lib-es5-array-i.md)<NotificationSlot> | Yes | Notification slots to add. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<void> | Promise that returns no value. |

