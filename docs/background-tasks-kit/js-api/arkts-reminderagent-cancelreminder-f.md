# cancelReminder

## cancelReminder

```TypeScript
function cancelReminder(reminderId: number, callback: AsyncCallback<void>): void
```

取消指定id的提醒，使用回调的方式实现异步调用。

**Since:** 7

**Deprecated since:** 9

**Substitute:** @ohos.reminderAgentManager:reminderAgentManager.cancelReminder(reminderId:

**System capability:** SystemCapability.Notification.ReminderAgent

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| reminderId | number | Yes | 目标reminder的id号。 |
| callback | AsyncCallback&lt;void> | Yes | 异步回调。 |

**Example**

```TypeScript
import { BusinessError } from '@ohos.base';
import reminderAgent from '@ohos.reminderAgent';

reminderAgent.cancelReminder(1, (err: BusinessError, data: void) => {
  console.info("cancelReminder callback");
});

```

## cancelReminder

```TypeScript
function cancelReminder(reminderId: number): Promise<void>
```

取消指定id的提醒，使用Promise方式实现异步调用。

**Since:** 7

**Deprecated since:** 9

**Substitute:** @ohos.reminderAgentManager:reminderAgentManager.cancelReminder(reminderId:

**System capability:** SystemCapability.Notification.ReminderAgent

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| reminderId | number | Yes | 目标reminder的id号。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise类型异步回调。 |

**Example**

```TypeScript
import reminderAgent from '@ohos.reminderAgent';

reminderAgent.cancelReminder(1).then(() => {
    console.info("cancelReminder promise");
});

```

