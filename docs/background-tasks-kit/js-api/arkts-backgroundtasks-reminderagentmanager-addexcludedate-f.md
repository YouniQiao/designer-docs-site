# addExcludeDate

## Modules to Import

```TypeScript
import { reminderAgentManager } from '@kit.BackgroundTasksKit';
```

## addExcludeDate

```TypeScript
function addExcludeDate(reminderId: number, date: Date): Promise<void>
```

Adds a non-reminder date for a recurring calendar reminder with a specific ID. For example, configure a daily reminder to skip notifications on Tuesdays. This API uses a promise to return the result.

**Since:** 12

<!--Device-reminderAgentManager-function addExcludeDate(reminderId: int, date: Date): Promise<void>--><!--Device-reminderAgentManager-function addExcludeDate(reminderId: int, date: Date): Promise<void>-End-->

**System capability:** SystemCapability.Notification.ReminderAgent

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| reminderId | number | Yes | ID of the agent-powered reminder to be added.The reminder ID is returned when the [publishReminder](arkts-backgroundtasks-reminderagentmanager-publishreminder-f.md#publishreminder-1)API is called. |
| date | [Date](../../apis-na/arkts-apis/arkts-na-lib-es5-date-i.md) | Yes | Non-reminder date. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<void> | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | If the input parameter is not valid parameter. |
| [1700003](../../apis-backgroundtasks-kit/errorcode-reminderAgentManager.md#1700003-nonexistent-reminder) | The reminder does not exist. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { reminderAgentManager } from '@kit.BackgroundTasksKit';

let reminderId: number = 1;
let date = new Date();
reminderAgentManager.addExcludeDate(reminderId, date).then(() => {
  console.info("addExcludeDate promise");
}).catch((err: BusinessError) => {
  console.error("promise err code:" + err.code + " message:" + err.message);
});

```

