# cancelAllReminders

## cancelAllReminders

```TypeScript
function cancelAllReminders(callback: AsyncCallback<void>): void
```

取消当前应用所有的提醒，使用回调的方式实现异步调用。

**Since:** 7

**Deprecated since:** 9

**Substitute:** @ohos.reminderAgentManager:reminderAgentManager.cancelAllReminders(callback:

**System capability:** SystemCapability.Notification.ReminderAgent

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | Yes | 异步回调。 |

**Example**

```TypeScript
import { BusinessError } from '@ohos.base';
import reminderAgent from '@ohos.reminderAgent';

reminderAgent.cancelAllReminders((err: BusinessError, data: void) =>{
  console.info("cancelAllReminders callback")
})

```

## cancelAllReminders

```TypeScript
function cancelAllReminders(): Promise<void>
```

取消当前应用所有的提醒，使用Promise方式实现异步调用。

**Since:** 7

**Deprecated since:** 9

**Substitute:** @ohos.reminderAgentManager:reminderAgentManager.cancelAllReminders()

**System capability:** SystemCapability.Notification.ReminderAgent

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise类型异步回调。 |

**Example**

```TypeScript
import reminderAgent from '@ohos.reminderAgent';

reminderAgent.cancelAllReminders().then(() => {
    console.info("cancelAllReminders promise")
})

```

