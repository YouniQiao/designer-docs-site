# on

## on('continuousTaskCancel')

```TypeScript
function on(type: 'continuousTaskCancel', callback: Callback<ContinuousTaskCancelInfo>): void
```

注册长时任务取消的监听，使用callback异步回调。

**Since:** 15

**Required permissions:** 

 ohos.permission.KEEP_BACKGROUND_RUNNING

**System capability:** SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'continuousTaskCancel' | Yes | 事件回调类型，固定取值为'continuousTaskCancel'，表示长时任务取消。 |
| callback | Callback&lt;ContinuousTaskCancelInfo> | Yes | 回调函数，返回长时任务取消原因等信息。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible cause: 1. Callback parameter error;  2. Register a exist callback type; 3. Parameter verification failed. |

**Example**

```TypeScript
import { backgroundTaskManager } from '@kit.BackgroundTasksKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';

function callback(info: backgroundTaskManager.ContinuousTaskCancelInfo) {
  console.info('continuousTaskCancel callback id ' + info.id);
  console.info('continuousTaskCancel callback reason ' + info.reason);
}

export default class EntryAbility extends UIAbility {
  onCreate(want: Want, launchParam: AbilityConstant.LaunchParam) {
    try {
      backgroundTaskManager.on("continuousTaskCancel", callback);
    } catch (error) {
      console.error(`Operation onContinuousTaskCancel failed. code is ${(error as BusinessError).code} message is ${(error as BusinessError).message}`);
    }
  }
};

```

## on('continuousTaskSuspend')

```TypeScript
function on(type: 'continuousTaskSuspend', callback: Callback<ContinuousTaskSuspendInfo>): void
```

注册长时任务暂停的监听，使用callback异步回调。注册该回调后，如果系统首次检测到应用未执行相应的业务，不会直接取消长时任务，而是将长时任务标记为暂停状态，如果连续检测失败，仍会取消长时任务。 长时任务处于暂停状态时，应用退后台会被挂起，回前台自动激活。

**Since:** 20

**Required permissions:** 

 ohos.permission.KEEP_BACKGROUND_RUNNING

**System capability:** SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'continuousTaskSuspend' | Yes | 事件回调类型，固定取值为'continuousTaskSuspend'，表示长时任务暂停。 |
| callback | Callback&lt;ContinuousTaskSuspendInfo> | Yes | 回调函数，返回长时任务暂停原因等信息。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 9800005 | Continuous task verification failed. |

**Example**

```TypeScript
import { backgroundTaskManager } from '@kit.BackgroundTasksKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';

function callback(info: backgroundTaskManager.ContinuousTaskSuspendInfo) {
  console.info('continuousTaskSuspend callback continuousTaskId: ' + info.continuousTaskId);
  console.info('continuousTaskSuspend callback suspendState: ' + info.suspendState);
  console.info('continuousTaskSuspend callback suspendReason: ' + info.suspendReason);
}

export default class EntryAbility extends UIAbility {
  onCreate(want: Want, launchParam: AbilityConstant.LaunchParam) {
    try {
      backgroundTaskManager.on("continuousTaskSuspend", callback);
    } catch (error) {
      console.error(`Operation onContinuousTaskSuspend failed. code is ${(error as BusinessError).code} message is ${(error as BusinessError).message}`);
    }
  }
};

```

## on('continuousTaskActive')

```TypeScript
function on(type: 'continuousTaskActive', callback: Callback<ContinuousTaskActiveInfo>): void
```

注册长时任务激活的监听，使用callback异步回调。应用回前台激活暂停的长时任务。

**Since:** 20

**Required permissions:** 

 ohos.permission.KEEP_BACKGROUND_RUNNING

**System capability:** SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'continuousTaskActive' | Yes | 事件回调类型，固定取值为'continuousTaskActive'，表示长时任务激活。 |
| callback | Callback&lt;ContinuousTaskActiveInfo> | Yes | 回调函数，返回长时任务激活相关信息。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 9800005 | Continuous task verification failed. |

**Example**

```TypeScript
import { backgroundTaskManager } from '@kit.BackgroundTasksKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';

function callback(info: backgroundTaskManager.ContinuousTaskActiveInfo) {
  console.info('continuousTaskActive callback id: ' + info.id);
}

export default class EntryAbility extends UIAbility {
  onCreate(want: Want, launchParam: AbilityConstant.LaunchParam) {
    try {
      backgroundTaskManager.on("continuousTaskActive", callback);
    } catch (error) {
      console.error(`Operation onContinuousTaskActive failed. code is ${(error as BusinessError).code} message is ${(error as BusinessError).message}`);
    }
  }
};

```

