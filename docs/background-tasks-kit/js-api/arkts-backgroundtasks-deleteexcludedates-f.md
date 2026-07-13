# deleteExcludeDates

## Modules to Import

```TypeScript
import { reminderAgentManager } from '@kit.BackgroundTasksKit';
```

## deleteExcludeDates

```TypeScript
function deleteExcludeDates(reminderId: number): Promise<void>
```

Deletes all non-reminder dates for a recurring calendar reminder with a specific ID. This API uses a promise to
return the result.

**Since:** 12

**System capability:** SystemCapability.Notification.ReminderAgent

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| reminderId | number | Yes | ID of the agent-powered reminder to be removed.The reminder ID is returned when the[publishReminder](arkts-backgroundtasks-publishreminder-f.md#publishreminder-1)API is called. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied |
| [1700003](../../apis-backgroundtasks-kit/errorcode-reminderAgentManager.md#1700003-nonexistent-reminder) | The reminder does not exist. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { reminderAgentManager } from '@kit.BackgroundTasksKit';

let reminderId: number = 1;
reminderAgentManager.deleteExcludeDates(reminderId).then(() => {
  console.info("deleteExcludeDates promise");
}).catch((err: BusinessError) => {
  console.error("promise err code:" + err.code + " message:" + err.message);
});

```

