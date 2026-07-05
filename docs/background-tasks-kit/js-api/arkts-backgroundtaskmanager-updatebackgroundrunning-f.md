# updateBackgroundRunning

## updateBackgroundRunning

```TypeScript
function updateBackgroundRunning(context: Context, bgModes: string[]): Promise<ContinuousTaskNotification>
```

更新长时任务类型，使用Promise异步回调。长时任务更新成功后，会有通知栏消息，没有提示音。</br>更新长时任务前，可以通过 [getAllContinuousTasks]backgroundTaskManager.getAllContinuousTasks(context: Context)接口获取当前所有长时任务信息，如果当前没有已经 存在的长时任务，会更新失败。</br>该接口仅支持更新如下三个接口申请的长时任务：</br> [startBackgroundRunning(context: Context, bgMode: BackgroundMode, wantAgent: WantAgent, callback:AsyncCallback&lt;void&gt;): void]backgroundTaskManager.startBackgroundRunning(context: Context, bgMode:BackgroundMode, wantAgent: WantAgent, callback: AsyncCallback<void>) </br> [startBackgroundRunning(context: Context, bgMode: BackgroundMode, wantAgent: WantAgent): Promise&lt;void&gt;]{@linkbackgroundTaskManager.startBackgroundRunning(context: Context, bgMode: BackgroundMode, wantAgent: WantAgent)} </br> [startBackgroundRunning(context: Context, bgModes: string[], wantAgent: WantAgent):Promise&lt;ContinuousTaskNotification&gt;]{@link backgroundTaskManager.startBackgroundRunning(context: Context,bgModes: string[], wantAgent: WantAgent)}

**Since:** 12

**Required permissions:** 

 ohos.permission.KEEP_BACKGROUND_RUNNING

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | Context | Yes | 应用运行的上下文。   FA模型的应用Context定义见[Context]{@link./app/context}。 Stage模型的应用Context定义见  [Context]./application/Context:Context。 说明： Stage模型中，仅支持UIAbility申请；FA模型中，仅支持ServiceAbility申请。 |
| bgModes | string[] | Yes | 更新后的长时任务类型  取值范围请参考长时任务类型中的[配置项](docroot://task-management/continuous-task.md#使用场景)。  说明： 支持传入一个或多个类型。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;ContinuousTaskNotification> | Promise对象，返回  [ContinuousTaskNotification]backgroundTaskManager.ContinuousTaskNotification类型对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameters types; 3. Parameter verification failed. |
| 9800001 | Memory operation failed. |
| 9800002 | Failed to write data into parcel. Possible reasons: 1. Invalid parameters;  2. Failed to apply for memory. |
| 9800003 | Internal transaction failed. |
| 9800004 | System service operation failed. |
| 9800005 | Continuous task verification failed. |
| 9800006 | Notification verification failed for a continuous task. |
| 9800007 | Continuous task storage failed. |

**Example**

```TypeScript
import { backgroundTaskManager } from '@kit.BackgroundTasksKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';

export default class EntryAbility extends UIAbility {
  onCreate(want: Want, launchParam: AbilityConstant.LaunchParam) {
    try {
      // You must call startBackgroundRunning before updateBackgroundRunning. Here it is assumed that you have called startBackgroundRunning.
      let list: Array<string> = ["audioPlayback"];
      backgroundTaskManager.updateBackgroundRunning(this.context, list).then(() => {
        console.info("Operation updateBackgroundRunning succeeded");
      }).catch((error: BusinessError) => {
        console.error(`Operation updateBackgroundRunning failed. code is ${error.code} message is ${error.message}`);
      });
    } catch (error) {
      console.error(`Operation updateBackgroundRunning failed. code is ${(error as BusinessError).code} message is ${(error as BusinessError).message}`);
    }
  }
};

```

## updateBackgroundRunning

```TypeScript
function updateBackgroundRunning(context: Context, request: ContinuousTaskRequest): Promise<ContinuousTaskNotification>
```

更新长时任务，使用Promise异步回调。长时任务更新成功后，会有通知栏消息，没有提示音。 更新长时任务还存在如下约束限制： 1. 本接口仅支持更新如下接口申请的长时任务：[startBackgroundRunning(context: Context, request: ContinuousTaskRequest):Promise&lt;ContinuousTaskNotification&gt;]backgroundTaskManager.startBackgroundRunning(context: Context,request: ContinuousTaskRequest)。 2. 已经合并的长时任务，且后台任务主类型和子类型均相同，仅支持更新ContinuousTaskRequest.wantAgent中的wants信息（abilityName等），如果类型不同，更新失败。 3. 如果待更新的长时任务或指定的更新类型中包含数据传输类型，直接返回失败。

**Since:** 21

**Required permissions:** 

 ohos.permission.KEEP_BACKGROUND_RUNNING

**Atomic service API:** From API version 26.0.0 this API can be used in atomic services.

**System capability:** SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | Context | Yes | 应用运行的上下文   FA模型的应用Context定义见[Context]./app/context。 Stage模型的应用Context定义见  [Context]./application/Context:Context。 说明： Stage模型中，仅支持UIAbility申请；FA模型中，仅支持ServiceAbility申请。 |
| request | ContinuousTaskRequest | Yes | 长时任务请求信息，包括待更新的长时任务ID等。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;ContinuousTaskNotification> | Promise对象，返回更新后的长时任务通知信息，包括长时任务ID等。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 9800001 | Memory operation failed. |
| 9800004 | System service operation failed. |
| 9800005 | Continuous task verification failed. |
| 9800006 | Notification verification failed for a continuous task. |
| 9800007 | Continuous task storage failed. |

**Example**

```TypeScript
import { backgroundTaskManager } from '@kit.BackgroundTasksKit';
import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { wantAgent, WantAgent } from '@kit.AbilityKit';
// In atomic services, please remove the WantAgent import.

export default class EntryAbility extends UIAbility {
  notificationId: number = 0; // Save the notification ID.
  continuousTaskId: number | undefined = -1; // Continuous task ID.
  onCreate(want: Want, launchParam: AbilityConstant.LaunchParam) {
    let wantAgentInfo: wantAgent.WantAgentInfo = {
      // Add the bundleName and abilityName of the application to be started. Replace them with the actual ones.
      wants: [
        {
          bundleName: "com.example.myapplication",
          abilityName: "EntryAbility"
        }
      ],
      // Set the operation type after the notification is tapped.
      actionType: wantAgent.OperationType.START_ABILITY,
      // Custom request code, which is used to identify the operation to execute.
      requestCode: 0,
      // Set the operation properties after the notification is tapped.
      wantAgentFlags: [wantAgent.WantAgentFlags.UPDATE_PRESENT_FLAG]
    };

    try {
      // Obtain the WantAgent object by using the getWantAgent API of the wantAgent module.
      // In atomic services, please replace the following line of code with wantAgent.getWantAgent(wantAgentInfo).then((wantAgentObj: object) => {.
      wantAgent.getWantAgent(wantAgentInfo).then((wantAgentObj: WantAgent) => {
        try {
          // You must call startBackgroundRunning before updateBackgroundRunning. Apply for a continuous task in advance.
          let modeList: Array<number> = [backgroundTaskManager.BackgroundTaskMode.MODE_LOCATION];
          let subModeList: Array<number> = [backgroundTaskManager.BackgroundTaskSubmode.SUBMODE_NORMAL_NOTIFICATION];
          let continuousTaskRequest = new backgroundTaskManager.ContinuousTaskRequest();
          continuousTaskRequest.backgroundTaskModes = modeList;
          continuousTaskRequest.backgroundTaskSubmodes = subModeList;
          continuousTaskRequest.wantAgent = wantAgentObj;
          continuousTaskRequest.combinedTaskNotification = false;
          continuousTaskRequest.continuousTaskId = this.continuousTaskId; // For the update API, the continuous task ID must be passed and the ID must exist. Otherwise, the update fails.
          backgroundTaskManager.updateBackgroundRunning(this.context, continuousTaskRequest).then((res: backgroundTaskManager.ContinuousTaskNotification) => {
            console.info("Operation updateBackgroundRunning succeeded");
            this.notificationId = res.notificationId;
          }).catch((error: BusinessError) => {
            console.error(`Operation updateBackgroundRunning failed. code is ${error.code} message is ${error.message}`);
          });
        } catch (error) {
          console.error(`Operation updateBackgroundRunning failed. code is ${(error as BusinessError).code} message is ${(error as BusinessError).message}`);
        }
      });
    } catch (error) {
      console.error(`Operation getWantAgent failed. code is ${(error as BusinessError).code} message is ${(error as BusinessError).message}`);
    }
  }
};

```

