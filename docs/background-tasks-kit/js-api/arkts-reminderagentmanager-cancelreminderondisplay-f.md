# cancelReminderOnDisplay

## cancelReminderOnDisplay

```TypeScript
function cancelReminderOnDisplay(reminderId: int): Promise<void>
```

取消当前通知中心内显示的通知卡片，不取消代理提醒数据。例如：每天重复的提醒，该提醒正在通知中心内显示，该接口将通知从通知中心内取消，并且会按照设定的周期，在第二天再次提醒。

**Since:** 23

**System capability:** SystemCapability.Notification.ReminderAgent

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| reminderId | int | Yes | 需要取消的代理提醒的id。  代理提醒id会在  [发布代理提醒]reminderAgentManager.publishReminder(reminderReq: ReminderRequest, callback: AsyncCallback)  时作为返回值返回。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 1700003 | The reminder does not exist. |
| 1700007 | If the input parameter is not valid parameter. |

**Example**

```TypeScript
import { reminderAgentManager } from '@kit.BackgroundTasksKit';
import { BusinessError } from '@kit.BasicServicesKit';

let reminderId: number = 1;
reminderAgentManager.cancelReminderOnDisplay(reminderId).then(() => {
  console.info("cancel display reminder  succeed");
}).catch((err: BusinessError) => {
  console.error("promise err code:" + err.code + " message:" + err.message);
});

```

