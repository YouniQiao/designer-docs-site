# updateReminder

## updateReminder

```TypeScript
function updateReminder(reminderId: int, reminderReq: ReminderRequest): Promise<void>
```

更新指定id的代理提醒，使用Promise异步回调。仅[有效（未过期）](docroot://task-management/agent-powered-reminder.md#约束与限制)、未显示在通知中心的代理提醒支持更新。

**Since:** 20

**Required permissions:** 

 ohos.permission.PUBLISH_AGENT_REMINDER

**System capability:** SystemCapability.Notification.ReminderAgent

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| reminderId | int | Yes | 需要更新的代理提醒的id。  代理提醒id会在  [发布代理提醒]reminderAgentManager.publishReminder(reminderReq: ReminderRequest, callback: AsyncCallback)  时作为返回值返回。 |
| reminderReq | ReminderRequest | Yes | 代理提醒对象实例，用于设置提醒类型、响铃时长等具体信息。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | 无返回结果的Promise对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 1700003 | The reminder does not exist. |
| 1700007 | If the input parameter is not valid parameter. |

**Example**

```TypeScript
import { reminderAgentManager } from '@kit.BackgroundTasksKit';
import { BusinessError } from '@kit.BasicServicesKit';

let timer: reminderAgentManager.ReminderRequestTimer = {
  reminderType: reminderAgentManager.ReminderType.REMINDER_TYPE_TIMER,
  triggerTimeInSeconds: 10
}

let reminderId: number = 1;
reminderAgentManager.updateReminder(reminderId, timer).then(() => {
  console.info("update reminder succeed");
}).catch((err: BusinessError) => {
  console.error("promise err code:" + err.code + " message:" + err.message);
});

```

