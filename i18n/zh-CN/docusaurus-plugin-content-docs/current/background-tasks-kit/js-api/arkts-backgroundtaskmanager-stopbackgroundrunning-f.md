# stopBackgroundRunning

## stopBackgroundRunning

```TypeScript
function stopBackgroundRunning(context: Context, callback: AsyncCallback<void>): void
```

取消当前UIAbility（FA模型则为ServiceAbility）下所有长时任务，使用callback异步回调。也可以通过 [stopBackgroundRunning]backgroundTaskManager.stopBackgroundRunning(context: Context, continuousTaskId: int) 接口取消指定Id的长时任务。

**起始版本：** 9

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | Context | 是 | 应用运行的上下文。   FA模型的应用Context定义见[Context]./app/context。 Stage模型的应用Context定义见  [Context]./application/Context:Context。 说明： Stage模型中，仅支持UIAbility申请；FA模型中，仅支持ServiceAbility申请。 |
| callback | AsyncCallback&lt;void> | 是 | 回调函数，取消长时任务成功时，err为undefined，否则为错误对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. [since 9 - 18] |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. |
| 9800001 | Memory operation failed. |
| 9800002 | Failed to write data into parcel. Possible reasons: 1. Invalid parameters;  2. Failed to apply for memory. |
| 9800003 | Internal transaction failed. |
| 9800004 | System service operation failed. |
| 9800005 | Continuous task verification failed. |
| 9800006 | Notification verification failed for a continuous task. |
| 9800007 | Continuous task storage failed. |

**示例：**

```TypeScript
import { backgroundTaskManager } from '@kit.BackgroundTasksKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { UIAbility } from '@kit.AbilityKit';

const callback = (error: BusinessError, data: void) => {
  if (error) {
    console.error(`Operation stopBackgroundRunning failed. code is ${error.code} message is ${error.message}`);
  } else {
    console.info('Operation stopBackgroundRunning succeeded');
  }
}

export default class EntryAbility extends UIAbility {
  onCreate() {
    try {
      backgroundTaskManager.stopBackgroundRunning(this.context, callback);
    } catch (error) {
      console.error(`Operation stopBackgroundRunning failed. code is ${(error as BusinessError).code} message is ${(error as BusinessError).message}`);
    }
  }
};

```

## stopBackgroundRunning

```TypeScript
function stopBackgroundRunning(context: Context): Promise<void>
```

取消当前UIAbility（FA模型则为ServiceAbility）下所有长时任务，使用Promise异步回调。也可以通过 [stopBackgroundRunning]backgroundTaskManager.stopBackgroundRunning(context: Context, continuousTaskId: int) 接口取消指定Id的长时任务。

**起始版本：** 9

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | Context | 是 | 应用运行的上下文。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | 无返回结果的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. [since 9 - 18] |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. |
| 9800001 | Memory operation failed. |
| 9800002 | Failed to write data into parcel. Possible reasons: 1. Invalid parameters;  2. Failed to apply for memory. |
| 9800003 | Internal transaction failed. |
| 9800004 | System service operation failed. |
| 9800005 | Continuous task verification failed. |
| 9800006 | Notification verification failed for a continuous task. |
| 9800007 | Continuous task storage failed. |

**示例：**

```TypeScript
import { backgroundTaskManager } from '@kit.BackgroundTasksKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { UIAbility } from '@kit.AbilityKit';

export default class EntryAbility extends UIAbility {
  onCreate() {
    try {
      backgroundTaskManager.stopBackgroundRunning(this.context).then(() => {
        console.info('Operation stopBackgroundRunning succeeded');
      }).catch((error: BusinessError) => {
        console.error(`Operation stopBackgroundRunning failed. code is ${error.code} message is ${error.message}`);
      });
    } catch (error) {
      console.error(`Operation stopBackgroundRunning failed. code is ${(error as BusinessError).code} message is ${(error as BusinessError).message}`);
    }
  }
};

```

## stopBackgroundRunning

```TypeScript
function stopBackgroundRunning(context: Context, continuousTaskId: int): Promise<void>
```

取消指定Id的长时任务，使用Promise异步回调。也可以通过 [stopBackgroundRunning]backgroundTaskManager.stopBackgroundRunning(context: Context, callback:AsyncCallback<void>) 取消当前UIAbility下所有长时任务。

**起始版本：** 21

**原子化服务API：** 从API version 26.0.0开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | Context | 是 | 应用运行的上下文。   FA模型的应用Context定义见[Context]./app/context。 Stage模型的应用Context定义见  [Context]./application/Context:Context。 说明： Stage模型中，仅支持UIAbility申请；FA模型中，仅支持ServiceAbility申请。 |
| continuousTaskId | int | 是 | 长时任务ID。  取值限定为整数。  - 长时任务ID。 说明： 可以通过  [startBackgroundRunning]backgroundTaskManager.startBackgroundRunning(context: Context, request:ContinuousTaskRequest)  接口的返回值获取当前申请的长时任务ID，或者通过  [getAllContinuousTasks]backgroundTaskManager.getAllContinuousTasks(context: Context, includeSuspended:boolean)  接口获取所有长时任务信息。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | 无返回结果的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 9800001 | Memory operation failed. |
| 9800004 | System service operation failed. |
| 9800005 | Continuous task verification failed. |
| 9800006 | Notification verification failed for a continuous task. |
| 9800007 | Continuous task storage failed. |

**示例：**

```TypeScript
import { backgroundTaskManager } from '@kit.BackgroundTasksKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { UIAbility } from '@kit.AbilityKit';

export default class EntryAbility extends UIAbility {
  continuousTaskId: number = 0;
  onCreate() {
    try {
      backgroundTaskManager.stopBackgroundRunning(this.context, this.continuousTaskId).then(() => {
        console.info('Operation stopBackgroundRunning succeeded');
      }).catch((error: BusinessError) => {
        console.error(`Operation stopBackgroundRunning failed. code is ${error.code} message is ${error.message}`);
      });
    } catch (error) {
      console.error(`Operation stopBackgroundRunning failed. code is ${(error as BusinessError).code} message is ${(error as BusinessError).message}`);
    }
  }
};

```

