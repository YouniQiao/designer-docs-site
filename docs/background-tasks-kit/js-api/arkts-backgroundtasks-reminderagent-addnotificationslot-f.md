# addNotificationSlot

## Modules to Import

```TypeScript
import { reminderAgent } from '@kit.BackgroundTasksKit';
```

## addNotificationSlot

```TypeScript
function addNotificationSlot(slot: NotificationSlot, callback: AsyncCallback<void>): void
```

Adds a notification slot. This API uses an asynchronous callback to return the result.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** [addNotificationSlot](arkts-backgroundtasks-reminderagentmanager-addnotificationslot-f.md#addnotificationslot-1)

<!--Device-reminderAgent-function addNotificationSlot(slot: NotificationSlot, callback: AsyncCallback<void>): void--><!--Device-reminderAgent-function addNotificationSlot(slot: NotificationSlot, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Notification.ReminderAgent

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| slot | [NotificationSlot](../../apis-notification-kit/arkts-apis/arkts-notification-notificationslot-notificationslot-i.md) | Yes | Notification slot, whose type can be set. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<void> | Yes | Callback used to return the result. |

**Example**

```TypeScript
import { BusinessError } from '@ohos.base';
import notification from '@ohos.notification';
import reminderAgent from '@ohos.reminderAgent';
import { NotificationSlot } from './notification/notificationSlot';

let mySlot:NotificationSlot = {
  type: notification.SlotType.SOCIAL_COMMUNICATION
}
reminderAgent.addNotificationSlot(mySlot, (err: BusinessError, data: void) => {
  console.info("addNotificationSlot callback");
});

```


## addNotificationSlot

```TypeScript
function addNotificationSlot(slot: NotificationSlot): Promise<void>
```

Adds a notification slot. This API uses a promise to return the result.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** [addNotificationSlot](arkts-backgroundtasks-reminderagentmanager-addnotificationslot-f.md#addnotificationslot-1)

<!--Device-reminderAgent-function addNotificationSlot(slot: NotificationSlot): Promise<void>--><!--Device-reminderAgent-function addNotificationSlot(slot: NotificationSlot): Promise<void>-End-->

**System capability:** SystemCapability.Notification.ReminderAgent

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| slot | [NotificationSlot](../../apis-notification-kit/arkts-apis/arkts-notification-notificationslot-notificationslot-i.md) | Yes | Notification slot, whose type can be set. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<void> | Promise used to return the result. |

**Example**

```TypeScript
import notification from '@ohos.notification';
import reminderAgent from '@ohos.reminderAgent';
import { NotificationSlot } from './notification/notificationSlot';

let mySlot:NotificationSlot = {
  type: notification.SlotType.SOCIAL_COMMUNICATION
}
reminderAgent.addNotificationSlot(mySlot).then(() => {
  console.info("addNotificationSlot promise");
});

```

