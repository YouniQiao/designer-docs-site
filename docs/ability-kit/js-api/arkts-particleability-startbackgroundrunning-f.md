# startBackgroundRunning

## startBackgroundRunning

```TypeScript
function startBackgroundRunning(id: number, request: NotificationRequest, callback: AsyncCallback<void>): void
```

向系统申请长时任务。使用callback异步回调。

**Since:** 7

**Deprecated since:** 9

**Substitute:** @ohos.resourceschedule.backgroundTaskManager:backgroundTaskManager.startBackgroundRunning

**Required permissions:** 

 ohos.permission.KEEP_BACKGROUND_RUNNING

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| id | number | Yes | 长时任务通知id号。 |
| request | NotificationRequest | Yes | 通知参数，用于显示通知栏的信息。 |
| callback | AsyncCallback&lt;void> | Yes | 回调函数。当向系统申请长时任务成功，err为undefined，否则为错误对象。 |

**Example**

```TypeScript
import { particleAbility, wantAgent } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import notification from '@ohos.notification';

function callback(error: BusinessError, data: void) {
  if (error && error.code !== 0) {
    console.error(`Operation failed error: ${JSON.stringify(error)}`);
  } else {
    console.info(`Operation succeeded, data: ${data}`);
  }
}

let wantAgentInfo: wantAgent.WantAgentInfo = {
  wants: [
    {
      bundleName: 'com.example.myapplication',
      abilityName: 'EntryAbility'
    }
  ],
  operationType: wantAgent.OperationType.START_ABILITY,
  requestCode: 0,
  wantAgentFlags: [wantAgent.WantAgentFlags.UPDATE_PRESENT_FLAG]
};

wantAgent.getWantAgent(wantAgentInfo).then((wantAgentObj) => {
  let id = 1;
  particleAbility.startBackgroundRunning(id, {
    content:
    {
      contentType: notification.ContentType.NOTIFICATION_CONTENT_BASIC_TEXT,
      normal:
      {
        title: 'title',
        text: 'text'
      }
    },
    wantAgent: wantAgentObj
  }, callback);
});

```

## startBackgroundRunning

```TypeScript
function startBackgroundRunning(id: number, request: NotificationRequest): Promise<void>
```

向系统申请长时任务。使用Promise异步回调。

**Since:** 7

**Deprecated since:** 9

**Substitute:** @ohos.resourceschedule.backgroundTaskManager:backgroundTaskManager.startBackgroundRunning

**Required permissions:** 

 ohos.permission.KEEP_BACKGROUND_RUNNING

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| id | number | Yes | 长时任务通知id号。 |
| request | NotificationRequest | Yes | 通知参数，用于显示通知栏的信息。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象。无返回结果的Promise对象。 |

**Example**

```TypeScript
import { particleAbility, wantAgent } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import notification from '@ohos.notification';

let wantAgentInfo: wantAgent.WantAgentInfo = {
  wants: [
    {
      bundleName: 'com.example.myapplication',
      abilityName: 'EntryAbility'
    }
  ],
  operationType: wantAgent.OperationType.START_ABILITY,
  requestCode: 0,
  wantAgentFlags: [wantAgent.WantAgentFlags.UPDATE_PRESENT_FLAG]
};

wantAgent.getWantAgent(wantAgentInfo).then((wantAgentObj) => {
  let id = 1;
  particleAbility.startBackgroundRunning(id, {
    content:
    {
      contentType: notification.ContentType.NOTIFICATION_CONTENT_BASIC_TEXT,
      normal:
      {
        title: 'title',
        text: 'text'
      }
    },
    wantAgent: wantAgentObj
  }).then(() => {
    console.info('Operation succeeded');
  }).catch((err: BusinessError) => {
    console.error(`Operation failed cause: ${JSON.stringify(err)}`);
  });
});

```

