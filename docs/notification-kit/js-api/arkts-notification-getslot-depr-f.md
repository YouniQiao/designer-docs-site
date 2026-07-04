# getSlot

## getSlot

```TypeScript
function getSlot(slotType: SlotType, callback: AsyncCallback<NotificationSlot>): void
```

Obtains a notification slot of a specified type. This API uses an asynchronous callback to return the result.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** getSlot

**System capability:** SystemCapability.Notification.Notification

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| slotType | SlotType | Yes | Type of the notification slot, which can be used for social communication, serviceinformation, content consultation, and other purposes. |
| callback | AsyncCallback&lt;NotificationSlot&gt; | Yes | Callback used to return the result. |


## getSlot

```TypeScript
function getSlot(slotType: SlotType): Promise<NotificationSlot>
```

Obtains a notification slot of a specified type. This API uses a promise to return the result.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** getSlot

**System capability:** SystemCapability.Notification.Notification

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| slotType | SlotType | Yes | Type of the notification slot, which can be used for social communication, serviceinformation, content consultation, and other purposes. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;NotificationSlot&gt; | Promise used to return the result. |

