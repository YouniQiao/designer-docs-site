# getSlot

## getSlot

```TypeScript
function getSlot(slotType: SlotType, callback: AsyncCallback<NotificationSlot>): void
```

Obtains a notification slot of a specified type. This API uses an asynchronous callback to return the result.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** getSlot

<!--Device-notification-function getSlot(slotType: SlotType, callback: AsyncCallback<NotificationSlot>): void--><!--Device-notification-function getSlot(slotType: SlotType, callback: AsyncCallback<NotificationSlot>): void-End-->

**System capability:** SystemCapability.Notification.Notification

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| slotType | [SlotType](arkts-notification-notificationmanager-slottype-e.md) | Yes | Type of the notification slot, which can be used for social communication, service information, content consultation, and other purposes. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<NotificationSlot> | Yes | Callback used to return the result. |


## getSlot

```TypeScript
function getSlot(slotType: SlotType): Promise<NotificationSlot>
```

Obtains a notification slot of a specified type. This API uses a promise to return the result.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** getSlot

<!--Device-notification-function getSlot(slotType: SlotType): Promise<NotificationSlot>--><!--Device-notification-function getSlot(slotType: SlotType): Promise<NotificationSlot>-End-->

**System capability:** SystemCapability.Notification.Notification

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| slotType | [SlotType](arkts-notification-notificationmanager-slottype-e.md) | Yes | Type of the notification slot, which can be used for social communication, service information, content consultation, and other purposes. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<NotificationSlot> | Promise used to return the result. |

