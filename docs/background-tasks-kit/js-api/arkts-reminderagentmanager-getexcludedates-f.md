# getExcludeDates

## getExcludeDates

```TypeScript
function getExcludeDates(reminderId: int): Promise<Array<Date>>
```

为指定id的周期性的日历提醒，查询设置的所有不提醒日期。使用Promise异步回调。

**Since:** 12

**System capability:** SystemCapability.Notification.ReminderAgent

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| reminderId | int | Yes | 需要查询不提醒日期的代理提醒id。  代理提醒id会在  [发布代理提醒]reminderAgentManager.publishReminder(reminderReq: ReminderRequest, callback: AsyncCallback)  时作为返回值返回。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;Date>> | Promise对象。返回特定日历设置的所有不提醒日期。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied |
| 1700003 | The reminder does not exist. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { reminderAgentManager } from '@kit.BackgroundTasksKit';

let reminderId: number = 1;
reminderAgentManager.getExcludeDates(reminderId).then((dates) => {
  console.info("getExcludeDates promise length: " + dates.length);
  for (let i = 0; i < dates.length; i++) {
    console.info("getExcludeDates promise date is: " + dates[i].toString());
  }
}).catch((err: BusinessError) => {
  console.error("promise err code:" + err.code + " message:" + err.message);
});

```

