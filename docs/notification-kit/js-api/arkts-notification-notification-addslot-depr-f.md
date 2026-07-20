# addSlot

## addSlot

```TypeScript
function addSlot(type: SlotType, callback: AsyncCallback<void>): void
```

Adds a notification slot of a specified type. This API uses an asynchronous callback to return the result.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** addSlot

<!--Device-notification-function addSlot(type: SlotType, callback: AsyncCallback<void>): void--><!--Device-notification-function addSlot(type: SlotType, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Notification.Notification

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | [SlotType](arkts-notification-notificationmanager-slottype-e.md) | Yes | Type of the notification slot to add. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<void> | Yes | Callback used to return the result. |


## addSlot

```TypeScript
function addSlot(type: SlotType): Promise<void>
```

Adds a notification slot of a specified type. This API uses a promise to return the result.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** addSlot

<!--Device-notification-function addSlot(type: SlotType): Promise<void>--><!--Device-notification-function addSlot(type: SlotType): Promise<void>-End-->

**System capability:** SystemCapability.Notification.Notification

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | [SlotType](arkts-notification-notificationmanager-slottype-e.md) | Yes | Type of the notification slot to add. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<void> | Promise that returns no value. |

