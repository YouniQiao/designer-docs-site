# addNotificationSlot

## addNotificationSlot

```TypeScript
function addNotificationSlot(slot: NotificationSlot, callback: AsyncCallback<void>): void
```

添加一个NotificationSlot，使用回调的方式实现异步调用。

**Since:** 7

**Deprecated since:** 9

**Substitute:** @ohos.reminderAgentManager:reminderAgentManager.addNotificationSlot(slot:

**System capability:** SystemCapability.Notification.ReminderAgent

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| slot | NotificationSlot | Yes | notification.slot实例，仅支持设置其type属性。 |
| callback | AsyncCallback&lt;void> | Yes | 异步回调。 |

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

添加一个NotificationSlot，使用Promise方式实现异步调用。

**Since:** 7

**Deprecated since:** 9

**Substitute:** @ohos.reminderAgentManager:reminderAgentManager.addNotificationSlot(slot:

**System capability:** SystemCapability.Notification.ReminderAgent

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| slot | NotificationSlot | Yes | notification.slot实例，仅支持设置其type属性。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise类型异步回调。 |

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

