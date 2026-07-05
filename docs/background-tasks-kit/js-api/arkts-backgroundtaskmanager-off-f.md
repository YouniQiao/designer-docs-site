# off

## off('continuousTaskCancel')

```TypeScript
function off(type: 'continuousTaskCancel', callback?: Callback<ContinuousTaskCancelInfo>): void
```

解除长时任务取消的监听，使用callback异步回调。

**Since:** 15

**Required permissions:** 

 ohos.permission.KEEP_BACKGROUND_RUNNING

**System capability:** SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'continuousTaskCancel' | Yes | 取消长时任务，固定取值为'continuousTaskCancel'。 |
| callback | Callback&lt;ContinuousTaskCancelInfo> | No | 需要取消监听的回调函数，未传入则取消所有注册回调。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible cause: 1. Callback parameter error;  2. Unregister type has not register; 3. Parameter verification failed. |

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
      backgroundTaskManager.off("continuousTaskCancel", callback);
    } catch (error) {
      console.error(`Operation onContinuousTaskCancel failed. code is ${(error as BusinessError).code} message is ${(error as BusinessError).message}`);
    }
  }
};

```

## off('continuousTaskSuspend')

```TypeScript
function off(type: 'continuousTaskSuspend', callback?: Callback<ContinuousTaskSuspendInfo>): void
```

取消长时任务暂停的监听，使用callback异步回调。

**Since:** 20

**Required permissions:** 

 ohos.permission.KEEP_BACKGROUND_RUNNING

**System capability:** SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'continuousTaskSuspend' | Yes | 事件回调类型，固定取值为'continuousTaskSuspend'，表示长时任务暂停。 |
| callback | Callback&lt;ContinuousTaskSuspendInfo> | No |  |

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
      backgroundTaskManager.off("continuousTaskSuspend", callback);
    } catch (error) {
      console.error(`Operation offContinuousTaskSuspend failed. code is ${(error as BusinessError).code} message is ${(error as BusinessError).message}`);
    }
  }
};

```

## off('continuousTaskActive')

```TypeScript
function off(type: 'continuousTaskActive', callback?: Callback<ContinuousTaskActiveInfo>): void
```

取消长时任务激活的监听，使用callback异步回调。

**Since:** 20

**Required permissions:** 

 ohos.permission.KEEP_BACKGROUND_RUNNING

**System capability:** SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'continuousTaskActive' | Yes | 事件回调类型，固定取值为'continuousTaskActive'，表示长时任务激活。 |
| callback | Callback&lt;ContinuousTaskActiveInfo> | No |  |

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
      backgroundTaskManager.off("continuousTaskActive", callback);
    } catch (error) {
      console.error(`Operation offContinuousTaskActive failed. code is ${(error as BusinessError).code} message is ${(error as BusinessError).message}`);
    }
  }
};

```

