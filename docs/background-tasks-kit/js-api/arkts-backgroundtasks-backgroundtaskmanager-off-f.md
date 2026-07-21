# off

## Modules to Import

```TypeScript
import { backgroundTaskManager } from '@kit.BackgroundTasksKit';
```

<a id="off"></a>
## off('continuousTaskCancel')

```TypeScript
function off(type: 'continuousTaskCancel', callback?: Callback<ContinuousTaskCancelInfo>): void
```

Unsubscribes from continuous task cancellation events. This API uses an asynchronous callback to return the result.

**Since:** 15

**Required permissions:** ohos.permission.KEEP_BACKGROUND_RUNNING

<!--Device-backgroundTaskManager-function off(type: 'continuousTaskCancel', callback?: Callback<ContinuousTaskCancelInfo>): void--><!--Device-backgroundTaskManager-function off(type: 'continuousTaskCancel', callback?: Callback<ContinuousTaskCancelInfo>): void-End-->

**System capability:** SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'continuousTaskCancel' | Yes | Cancels a continuous task. The value is fixed at **'continuousTaskCancel'**. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;ContinuousTaskCancelInfo&gt; | No | Callback for which listening is cancelled. If this parameter is left unspecified, all registered callbacks are cancelled. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible cause: 1. Callback parameter error;<br> 2. Unregister type has not register; 3. Parameter verification failed. |

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


<a id="off-1"></a>
## off('continuousTaskSuspend')

```TypeScript
function off(type: 'continuousTaskSuspend', callback?: Callback<ContinuousTaskSuspendInfo>): void
```

Unregisters from the listener for continuous task suspension. This API uses an asynchronous callback to return the result.

**Since:** 20

**Required permissions:** ohos.permission.KEEP_BACKGROUND_RUNNING

<!--Device-backgroundTaskManager-function off(type: 'continuousTaskSuspend', callback?: Callback<ContinuousTaskSuspendInfo>): void--><!--Device-backgroundTaskManager-function off(type: 'continuousTaskSuspend', callback?: Callback<ContinuousTaskSuspendInfo>): void-End-->

**System capability:** SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'continuousTaskSuspend' | Yes | Event type. The value is fixed at **'continuousTaskSuspend'**, indicating that the continuous task is suspended. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;ContinuousTaskSuspendInfo&gt; | No | Callback used to unregister from the listener for continuous task suspension. If this parameter is not passed, all listeners are unsubscribed from. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [9800005](../../apis-backgroundtasks-kit/errorcode-backgroundTaskMgr.md#9800005-continuous-task-verification-failure) | Continuous task verification failed. |

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


<a id="off-2"></a>
## off('continuousTaskActive')

```TypeScript
function off(type: 'continuousTaskActive', callback?: Callback<ContinuousTaskActiveInfo>): void
```

Unregisters from the listener for continuous task activation. This API uses an asynchronous callback to return the result.

**Since:** 20

**Required permissions:** ohos.permission.KEEP_BACKGROUND_RUNNING

<!--Device-backgroundTaskManager-function off(type: 'continuousTaskActive', callback?: Callback<ContinuousTaskActiveInfo>): void--><!--Device-backgroundTaskManager-function off(type: 'continuousTaskActive', callback?: Callback<ContinuousTaskActiveInfo>): void-End-->

**System capability:** SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'continuousTaskActive' | Yes | Event type. The value is fixed at **'continuousTaskActive'**, indicating that the continuous task is activated. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;ContinuousTaskActiveInfo&gt; | No | Callback used to unregister from the listener for continuous task activation. If this parameter is not passed, all listeners are unsubscribed from. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [9800005](../../apis-backgroundtasks-kit/errorcode-backgroundTaskMgr.md#9800005-continuous-task-verification-failure) | Continuous task verification failed. |

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

