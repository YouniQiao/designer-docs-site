# getSlot

<a id="getslot"></a>
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
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;NotificationSlot&gt; | Yes | Callback used to return the result. |


<a id="getslot-1"></a>
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
| Promise&lt;NotificationSlot&gt; | Promise used to return the result. |

