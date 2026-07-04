---
last_update:
  date: 2026-07-04
---

# startBackgroundRunning

## Modules to Import

```TypeScript
import { particleAbility } from '@ohos.ability.particleAbility';
```

## startBackgroundRunning

```TypeScript
function startBackgroundRunning(id: number, request: NotificationRequest, callback: AsyncCallback<void>): void
```

Keep this Service ability in the background and display a notification bar.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** startBackgroundRunning

**Required permissions:** ohos.permission.KEEP_BACKGROUND_RUNNING

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| id | number | Yes | Identifies the notification bar information. |
| request | NotificationRequest | Yes | Indicates the notificationRequest instance containing informationfor displaying a notification bar. |
| callback | AsyncCallback&lt;void&gt; | Yes | returns the result of starting a long-term task in the form of callback. |

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

Keep this Service ability in the background and display a notification bar.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** startBackgroundRunning

**Required permissions:** ohos.permission.KEEP_BACKGROUND_RUNNING

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| id | number | Yes | Identifies the notification bar information. |
| request | NotificationRequest | Yes | Indicates the notificationRequest instance containing informationfor displaying a notification bar. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | the promise returned by the function. |

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

