# subscribeReminderState

## Modules to Import

```TypeScript
import { reminderAgentManager } from '@kit.BackgroundTasksKit';
```

## subscribeReminderState

```TypeScript
function subscribeReminderState(callback: Callback<Array<ReminderState>>): Promise<void>
```

Subscribes to agent-powered reminder state changes. This API uses a promise to return the result.

**Since:** 23

**Required permissions:** ohos.permission.PUBLISH_AGENT_REMINDER

**Model restriction:** This API can be used only in the stage model.

<!--Device-reminderAgentManager-function subscribeReminderState(callback: Callback<Array<ReminderState>>): Promise<void>--><!--Device-reminderAgentManager-function subscribeReminderState(callback: Callback<Array<ReminderState>>): Promise<void>-End-->

**System capability:** SystemCapability.Notification.ReminderAgent

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-common-callback-i.md)<Array<ReminderState>> | Yes | Callback used to return the agent-powered reminder state. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<void> | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [1700007](../../apis-backgroundtasks-kit/errorcode-reminderAgentManager.md#1700007-invalid-parameter) | If the input parameter is not valid parameter. |

**Example**

```TypeScript
import { reminderAgentManager } from '@kit.BackgroundTasksKit';
import { BusinessError } from '@kit.BasicServicesKit';

function reminderStateCallback(states: Array<reminderAgentManager.ReminderState>) {
  console.info('length is : ' + states.length);
}

reminderAgentManager.subscribeReminderState(reminderStateCallback).then(() => {
  console.info('subscribe succeed');
}).catch((err: BusinessError) => {
  console.error('promise err code:' + err.code + ' message:' + err.message);
});

```

