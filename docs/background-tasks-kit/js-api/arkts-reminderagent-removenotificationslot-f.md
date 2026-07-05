# removeNotificationSlot

## removeNotificationSlot

```TypeScript
function removeNotificationSlot(slotType: notification.SlotType, callback: AsyncCallback<void>): void
```

删除目标NotificationSlot，使用callback方式实现异步调用。

**Since:** 7

**Deprecated since:** 9

**Substitute:** @ohos.reminderAgentManager:reminderAgentManager.removeNotificationSlot(slotType:

**System capability:** SystemCapability.Notification.ReminderAgent

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| slotType | notification.SlotType | Yes | 目标notification.slot的类型。 |
| callback | AsyncCallback&lt;void> | Yes | 异步回调。 |

**Example**

```TypeScript
import { BusinessError } from '@ohos.base';
import notification from '@ohos.notification';
import reminderAgent from '@ohos.reminderAgent';

reminderAgent.removeNotificationSlot(notification.SlotType.CONTENT_INFORMATION, (err: BusinessError, data: void) => {
  console.info("removeNotificationSlot callback");
});

```

## removeNotificationSlot

```TypeScript
function removeNotificationSlot(slotType: notification.SlotType): Promise<void>
```

删除目标NotificationSlot，使用Promise方式实现异步调用。

**Since:** 7

**Deprecated since:** 9

**Substitute:** @ohos.reminderAgentManager:reminderAgentManager.removeNotificationSlot(slotType:

**System capability:** SystemCapability.Notification.ReminderAgent

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| slotType | notification.SlotType | Yes | 目标notification.slot的类型。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise类型异步回调。 |

**Example**

```TypeScript
import notification from '@ohos.notification';
import reminderAgent from '@ohos.reminderAgent';

reminderAgent.removeNotificationSlot(notification.SlotType.CONTENT_INFORMATION).then(() => {
  console.info("removeNotificationSlot promise");
});

```

