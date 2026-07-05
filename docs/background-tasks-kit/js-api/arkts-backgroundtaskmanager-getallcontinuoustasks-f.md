# getAllContinuousTasks

## getAllContinuousTasks

```TypeScript
function getAllContinuousTasks(context: Context): Promise<ContinuousTaskInfo[]>
```

获取所有长时任务信息，如长时任务ID、长时任务类型等，使用Promise异步回调。

**Since:** 20

**Required permissions:** 

 ohos.permission.KEEP_BACKGROUND_RUNNING

**System capability:** SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | Context | Yes | 应用运行的上下文。  FA模型的应用Context定义见[Context]./app/context。 Stage模型的应用Context定义见  [Context]./application/Context:Context。 说明： Stage模型中，仅支持UIAbility申请；FA模型中，仅支持ServiceAbility申请。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;ContinuousTaskInfo[]> | Promise对象，返回所有长时任务信息。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 9800002 | Failed to write data into parcel. Possible reasons: 1. Invalid parameters;  2. Failed to apply for memory. |
| 9800004 | System service operation failed. |
| 9800005 | Continuous task verification failed. |

**Example**

```TypeScript
import { backgroundTaskManager } from '@kit.BackgroundTasksKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';

export default class EntryAbility extends UIAbility {
  onCreate(want: Want, launchParam: AbilityConstant.LaunchParam) {
    try {
      // If no continuous task is requested, an empty array is obtained.
      backgroundTaskManager.getAllContinuousTasks(this.context).then((res: backgroundTaskManager.ContinuousTaskInfo[]) => {
        console.info(`Operation getAllContinuousTasks succeeded. data: ` + JSON.stringify(res));
      }).catch((error: BusinessError) => {
        console.error(`Operation getAllContinuousTasks failed. code is ${error.code} message is ${error.message}`);
      });
    } catch (error) {
      console.error(`Operation getAllContinuousTasks failed. code is ${(error as BusinessError).code} message is ${(error as BusinessError).message}`);
    }
  }
};

```

## getAllContinuousTasks

```TypeScript
function getAllContinuousTasks(context: Context, includeSuspended: boolean): Promise<ContinuousTaskInfo[]>
```

获取所有长时任务信息，如长时任务ID、长时任务类型等。可选择是否获取暂停的长时任务信息，使用Promise异步回调。

**Since:** 20

**Required permissions:** 

 ohos.permission.KEEP_BACKGROUND_RUNNING

**System capability:** SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | Context | Yes | 应用运行的上下文。  FA模型的应用Context定义见[Context]./app/context。 Stage模型的应用Context定义见  [Context]./application/Context:Context。 说明： Stage模型中，仅支持UIAbility申请；FA模型中，仅支持ServiceAbility申请。 |
| includeSuspended | boolean | Yes | 是否获取暂停的长时任务信息， true表示获取， false表示不获取。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;ContinuousTaskInfo[]> | Promise对象，返回所有长时任务信息。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 9800002 | Failed to write data into parcel. Possible reasons: 1. Invalid parameters;  2. Failed to apply for memory. |
| 9800004 | System service operation failed. |
| 9800005 | Continuous task verification failed. |

**Example**

```TypeScript
import { backgroundTaskManager } from '@kit.BackgroundTasksKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';

export default class EntryAbility extends UIAbility {
  onCreate(want: Want, launchParam: AbilityConstant.LaunchParam) {
    try {
      // If no continuous task is requested, an empty array is obtained.
      backgroundTaskManager.getAllContinuousTasks(this.context, false).then((res: backgroundTaskManager.ContinuousTaskInfo[]) => {
        console.info(`Operation getAllContinuousTasks succeeded. data: ` + JSON.stringify(res));
      }).catch((error: BusinessError) => {
        console.error(`Operation getAllContinuousTasks failed. code is ${error.code} message is ${error.message}`);
      });
    } catch (error) {
      console.error(`Operation getAllContinuousTasks failed. code is ${(error as BusinessError).code} message is ${(error as BusinessError).message}`);
    }
  }
};

```

