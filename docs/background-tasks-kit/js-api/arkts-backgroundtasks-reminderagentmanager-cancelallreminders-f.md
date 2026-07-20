# cancelAllReminders

## Modules to Import

```TypeScript
import { reminderAgentManager } from '@kit.BackgroundTasksKit';
```

## cancelAllReminders

```TypeScript
function cancelAllReminders(callback: AsyncCallback<void>): void
```

Cancels all reminders set by the current application. This API uses an asynchronous callback to return the result.

**Since:** 9

<!--Device-reminderAgentManager-function cancelAllReminders(callback: AsyncCallback<void>): void--><!--Device-reminderAgentManager-function cancelAllReminders(callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Notification.ReminderAgent

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<void> | Yes | Callback used to return the result.If all the reminders are canceled,**err** is **undefined**. Otherwise, **err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | If the input parameter is not valid parameter. |
| [1700004](../../apis-backgroundtasks-kit/errorcode-reminderAgentManager.md#1700004-nonexistent-bundle-name) | The bundle name does not exist. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { reminderAgentManager } from '@kit.BackgroundTasksKit';

reminderAgentManager.cancelAllReminders((err: BusinessError) =>{
  if (err.code) {
    console.error("callback err code:" + err.code + " message:" + err.message);
  } else {
    console.info("cancelAllReminders callback")
  }
});

```


## cancelAllReminders

```TypeScript
function cancelAllReminders(): Promise<void>
```

Cancels all reminders set by the current application. This API uses a promise to return the result.

**Since:** 9

<!--Device-reminderAgentManager-function cancelAllReminders(): Promise<void>--><!--Device-reminderAgentManager-function cancelAllReminders(): Promise<void>-End-->

**System capability:** SystemCapability.Notification.ReminderAgent

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<void> | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | If the input parameter is not valid parameter. |
| [1700004](../../apis-backgroundtasks-kit/errorcode-reminderAgentManager.md#1700004-nonexistent-bundle-name) | The bundle name does not exist. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { reminderAgentManager } from '@kit.BackgroundTasksKit';

reminderAgentManager.cancelAllReminders().then(() => {
  console.info("cancelAllReminders promise")
}).catch((err: BusinessError) => {
  console.error("promise err code:" + err.code + " message:" + err.message);
});

```

