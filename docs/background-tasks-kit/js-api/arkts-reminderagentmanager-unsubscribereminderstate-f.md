# unsubscribeReminderState

## unsubscribeReminderState

```TypeScript
function unsubscribeReminderState(callback?: Callback<Array<ReminderState>>): Promise<void>
```

取消订阅代理提醒状态。使用Promise异步回调。

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Notification.ReminderAgent

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;Array&lt;ReminderState>> | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 1700007 | If the input parameter is not valid parameter. |

**Example**

```TypeScript
import { reminderAgentManager } from '@kit.BackgroundTasksKit';
import { BusinessError } from '@kit.BasicServicesKit';

function reminderStateCallback(states: Array<reminderAgentManager.ReminderState>) {
  console.info('length is : ' + states.length);
}

reminderAgentManager.unsubscribeReminderState(reminderStateCallback).then(() => {
  console.info('unsubscribe succeed');
}).catch((err: BusinessError) => {
  console.error('promise err code:' + err.code + ' message:' + err.message);
});

```

