# publishReminder

## publishReminder

```TypeScript
function publishReminder(reminderReq: ReminderRequest, callback: AsyncCallback<int>): void
```

发布后台代理提醒。使用callback异步回调。 > **说明：** > > 该接口需要申请通知弹窗权限 > [notificationManager.requestEnableNotification](../../apis-notification-kit/arkts-apis/arkts-notificationmanager-requestenablenotification-f.md#requestEnableNotification-2) > 后调用。 >

**Since:** 9

**Required permissions:** 

 ohos.permission.PUBLISH_AGENT_REMINDER

**System capability:** SystemCapability.Notification.ReminderAgent

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| reminderReq | ReminderRequest | Yes | 需要发布的代理提醒实例。 |
| callback | AsyncCallback&lt;int> | Yes | 回调函数。  当代理提醒发布成功，err为undefined，data为当前发布提醒的id；否则为错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | If the input parameter is not valid parameter. |
| 1700001 | Notification is not enabled. |
| 1700002 | The number of reminders exceeds the limit. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { reminderAgentManager } from '@kit.BackgroundTasksKit';

let timer: reminderAgentManager.ReminderRequestTimer = {
  reminderType: reminderAgentManager.ReminderType.REMINDER_TYPE_TIMER,
  triggerTimeInSeconds: 10
}

reminderAgentManager.publishReminder(timer, (err: BusinessError, reminderId: number) => {
  if (err.code) {
    console.error("callback err code:" + err.code + " message:" + err.message);
  } else {
    console.info("callback, reminderId = " + reminderId);
  }
});

```

## publishReminder

```TypeScript
function publishReminder(reminderReq: ReminderRequest): Promise<int>
```

发布后台代理提醒。使用Promise异步回调。 > **说明：** > > 该接口需要申请通知弹窗权限 > [notificationManager.requestEnableNotification](../../apis-notification-kit/arkts-apis/arkts-notificationmanager-requestenablenotification-f.md#requestEnableNotification-2) > 后调用。 >

**Since:** 9

**Required permissions:** 

 ohos.permission.PUBLISH_AGENT_REMINDER

**System capability:** SystemCapability.Notification.ReminderAgent

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| reminderReq | ReminderRequest | Yes | 需要发布的代理提醒实例。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;int> | Promise对象，返回当前发布提醒的id。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | If the input parameter is not valid parameter. |
| 1700001 | Notification is not enabled. |
| 1700002 | The number of reminders exceeds the limit. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { reminderAgentManager } from '@kit.BackgroundTasksKit';

let timer: reminderAgentManager.ReminderRequestTimer = {
  reminderType: reminderAgentManager.ReminderType.REMINDER_TYPE_TIMER,
  triggerTimeInSeconds: 10
}

reminderAgentManager.publishReminder(timer).then((reminderId: number) => {
  console.info("promise, reminderId = " + reminderId);
}).catch((err: BusinessError) => {
  console.error("promise err code:" + err.code + " message:" + err.message);
});

```

