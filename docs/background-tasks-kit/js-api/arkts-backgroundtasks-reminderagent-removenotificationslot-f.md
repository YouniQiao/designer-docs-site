# removeNotificationSlot

## Modules to Import

```TypeScript
import { reminderAgent } from '@kit.BackgroundTasksKit';
```

<a id="removenotificationslot"></a>
## removeNotificationSlot

```TypeScript
function removeNotificationSlot(slotType: notification.SlotType, callback: AsyncCallback<void>): void
```

Removes a notification slot of a specified type. This API uses an asynchronous callback to return the result.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** [removeNotificationSlot](arkts-backgroundtasks-reminderagentmanager-removenotificationslot-f.md#removenotificationslot-1)

<!--Device-reminderAgent-function removeNotificationSlot(slotType: notification.SlotType, callback: AsyncCallback<void>): void--><!--Device-reminderAgent-function removeNotificationSlot(slotType: notification.SlotType, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Notification.ReminderAgent

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| slotType | notification.SlotType | Yes | Type of the reminder notification slot to remove. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;void&gt; | Yes | Callback used to return the result. |

**Example**

```TypeScript
import { BusinessError } from '@ohos.base';
import notification from '@ohos.notification';
import reminderAgent from '@ohos.reminderAgent';

reminderAgent.removeNotificationSlot(notification.SlotType.CONTENT_INFORMATION, (err: BusinessError, data: void) => {
  console.info("removeNotificationSlot callback");
});

```


<a id="removenotificationslot-1"></a>
## removeNotificationSlot

```TypeScript
function removeNotificationSlot(slotType: notification.SlotType): Promise<void>
```

Removes a notification slot of a specified type. This API uses a promise to return the result.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** [removeNotificationSlot](arkts-backgroundtasks-reminderagentmanager-removenotificationslot-f.md#removenotificationslot-1)

<!--Device-reminderAgent-function removeNotificationSlot(slotType: notification.SlotType): Promise<void>--><!--Device-reminderAgent-function removeNotificationSlot(slotType: notification.SlotType): Promise<void>-End-->

**System capability:** SystemCapability.Notification.ReminderAgent

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| slotType | notification.SlotType | Yes | Type of the reminder notification slot to remove. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise used to return the result. |

**Example**

```TypeScript
import notification from '@ohos.notification';
import reminderAgent from '@ohos.reminderAgent';

reminderAgent.removeNotificationSlot(notification.SlotType.CONTENT_INFORMATION).then(() => {
  console.info("removeNotificationSlot promise");
});

```

