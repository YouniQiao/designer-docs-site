# cancelReminder

## Modules to Import

```TypeScript
import { reminderAgentManager } from '@ohos.reminderAgentManager';
```

## cancelReminder

```TypeScript
function cancelReminder(reminderId: number, callback: AsyncCallback<void>): void
```

Cancels a reminder published. This API uses an asynchronous callback to return the result.

**Since:** 9

**System capability:** SystemCapability.Notification.ReminderAgent

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| reminderId | number | Yes | ID of the agent-powered reminder to be canceled.The reminder ID is returned when the[publishReminder](arkts-backgroundtasks-publishreminder-f.md#publishreminder-1)API is called. |
| callback | AsyncCallback&lt;void&gt; | Yes | Callback used to return the result.If all the reminders are canceled,**err** is **undefined**. Otherwise, **err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | If the input parameter is not valid parameter. |
| [1700003](../../apis-backgroundtasks-kit/errorcode-reminderAgentManager.md#1700003-nonexistent-reminder) | The reminder does not exist. |
| [1700004](../../apis-backgroundtasks-kit/errorcode-reminderAgentManager.md#1700004-nonexistent-bundle-name) | The bundle name does not exist. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { reminderAgentManager } from '@kit.BackgroundTasksKit';

let reminderId: number = 1;
reminderAgentManager.cancelReminder(reminderId, (err: BusinessError) => {
  if (err.code) {
    console.error("callback err code:" + err.code + " message:" + err.message);
  } else {
    console.info("cancelReminder callback");
  }
});

```


## cancelReminder

```TypeScript
function cancelReminder(reminderId: number): Promise<void>
```

Cancels a reminder published. This API uses a promise to return the result.

**Since:** 9

**System capability:** SystemCapability.Notification.ReminderAgent

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| reminderId | number | Yes | ID of the agent-powered reminder to be canceled.The reminder ID is returned when the[publishReminder](arkts-backgroundtasks-publishreminder-f.md#publishreminder-1)API is called. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | If the input parameter is not valid parameter. |
| [1700003](../../apis-backgroundtasks-kit/errorcode-reminderAgentManager.md#1700003-nonexistent-reminder) | The reminder does not exist. |
| [1700004](../../apis-backgroundtasks-kit/errorcode-reminderAgentManager.md#1700004-nonexistent-bundle-name) | The bundle name does not exist. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { reminderAgentManager } from '@kit.BackgroundTasksKit';

let reminderId: number = 1;
reminderAgentManager.cancelReminder(reminderId).then(() => {
  console.info("cancelReminder promise");
}).catch((err: BusinessError) => {
  console.error("promise err code:" + err.code + " message:" + err.message);
});

```

