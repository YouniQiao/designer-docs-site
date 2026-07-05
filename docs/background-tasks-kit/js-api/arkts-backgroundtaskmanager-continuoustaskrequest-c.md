# ContinuousTaskRequest

通常作为 [startBackgroundRunning()]backgroundTaskManager.startBackgroundRunning(context: Context, request: ContinuousTaskRequest) 和 [updateBackgroundRunning()]backgroundTaskManager.updateBackgroundRunning(context: Context, request: ContinuousTaskRequest) 接口的入参，用于指定申请或更新的长时任务信息。其中： 1. 通过[startBackgroundRunning()]backgroundTaskManager.startBackgroundRunning(context: Context, request: ContinuousTaskRequest)接口申请长时任务时，如果待申请长时任务与当前应用下已存在长时任务，两者的主类型和子类型均相同，且combinedTaskNotification均取值为true，则会合并通知。否则不会合并通知。 2. 如果长时任务本身没有通知，则不会合并，长时任务类型是否会通知请参考[BackgroundTaskMode]backgroundTaskManager.BackgroundTaskMode。 3. 如果长时任务类型中包含数据传输类型，则不会合并通知。 4. 通知合并后不能取消合并，已合并的不能更新成不合并。 5. 通知合并后，点击通知栏消息，会跳转到第一个申请的长时任务对应的UIAbility，如果调用了更新接口，则跳转到最后一次更新的长时任务对应的UIAbility。 6. 通过[updateBackgroundRunning()]backgroundTaskManager.updateBackgroundRunning(context: Context, request: ContinuousTaskRequest)接口更新长时任务时，传入的continuousTaskId必须存在，否则更新失败。 7. 从API version 22开始支持特殊场景类型[MODE_SPECIAL_SCENARIO_PROCESSING]backgroundTaskManager.BackgroundTaskMode的长时任务。必须单独使用且不支持通知合并，即申请或更新长时任务时，长时任务类型只能有特殊场景类型，否则返回错误。

**Since:** 21

**System capability:** SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask

## Modules to Import

```TypeScript
import { backgroundTaskManager } from '@kit.BackgroundTasksKit';
```

## checkSpecialScenarioAuth

```TypeScript
checkSpecialScenarioAuth(context: Context): Promise<UserAuthResult>
```

查询用户是否授权能在后台长时间运行。使用Promise异步回调。

**Since:** 22

**Required permissions:** 

 ohos.permission.KEEP_BACKGROUND_RUNNING

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | Context | Yes | 应用运行的上下文   FA模型的应用Context定义见[Context]{@link./app/context}。 Stage模型的应用Context定  义见[Context]./application/Context:Context。 说明： Stage模型中，仅支持UIAbility申请；FA模型中，仅支持  ServiceAbility申请。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;UserAuthResult> | Promise对象，返回用户授权结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 9800004 | System service operation failed. |
| 9800005 | Continuous task verification failed. |

**Example**

```TypeScript
import { backgroundTaskManager } from '@kit.BackgroundTasksKit';
import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export default class EntryAbility extends UIAbility {
  onCreate(want: Want, launchParam: AbilityConstant.LaunchParam) {
    try {
      let continuousTaskRequest = new backgroundTaskManager.ContinuousTaskRequest();
      continuousTaskRequest.checkSpecialScenarioAuth(this.context).then((res: backgroundTaskManager.UserAuthResult) => {
        console.info('Operation checkSpecialScenarioAuth succeeded. data: ' + JSON.stringify(res));
      }).catch((error: BusinessError) => {
        console.error(`Operation checkSpecialScenarioAuth failed. code is ${error.code} message is ${error.message}`);
      });
    } catch (error) {
      console.error(`Operation checkSpecialScenarioAuth failed. code is ${(error as BusinessError).code} message is ${(error as BusinessError).message}`);
    }
  }
};

```

## checkSpecialScenarioAuthResult

```TypeScript
checkSpecialScenarioAuthResult(context: Context): Promise<UserAuthResult>
```

特殊场景长时任务申请用户授权，未授权时不会抛出异常。

**Since:** 26.0.0

**Required permissions:** 

 ohos.permission.KEEP_BACKGROUND_RUNNING

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | Context | Yes | 应用上下文 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;UserAuthResult> | 用户授权结果 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | 无权限 |
| 9800004 | 系统服务无响应 |
| 9800005 | 长时任务校验错误 |

**Example**

```TypeScript
import { backgroundTaskManager } from '@kit.BackgroundTasksKit';
import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export default class EntryAbility extends UIAbility {
  onCreate(want: Want, launchParam: AbilityConstant.LaunchParam) {
    try {
      let continuousTaskRequest = new backgroundTaskManager.ContinuousTaskRequest();
      continuousTaskRequest.checkSpecialScenarioAuthResult(this.context).then((res: backgroundTaskManager.UserAuthResult) => {
        console.info('Operation checkSpecialScenarioAuthResult succeeded. data: ' + JSON.stringify(res));
      }).catch((error: BusinessError) => {
        console.error(`Operation checkSpecialScenarioAuthResult failed. code is ${error.code} message is ${error.message}`);
      });
    } catch (error) {
      console.error(`Operation checkSpecialScenarioAuthResult failed. code is ${(error as BusinessError).code} message is ${(error as BusinessError).message}`);
    }
  }
};

```

## isModeSupported

```TypeScript
isModeSupported(): boolean
```

查询当前[ContinuousTaskRequest]backgroundTaskManager.ContinuousTaskRequest设置的长时任务主类型，是否支持申请长时任务。是否支持申请长时任务请参考 [BackgroundTaskMode]backgroundTaskManager.BackgroundTaskMode的说明。

**Since:** 21

**Required permissions:** 

 ohos.permission.KEEP_BACKGROUND_RUNNING

**Atomic service API:** From API version 26.0.0 this API can be used in atomic services.

**System capability:** SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask

**Return value:**

| Type | Description |
| --- | --- |
| boolean | 返回长时任务主类型是否支持。true表示支持，false表示不支持。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 9800005 | Continuous task verification failed. |

**Example**

```TypeScript
import { backgroundTaskManager } from '@kit.BackgroundTasksKit';
import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export default class EntryAbility extends UIAbility {
  onCreate(want: Want, launchParam: AbilityConstant.LaunchParam) {
    let isModeSupported: boolean = false; 
    let continuousTaskRequest = new backgroundTaskManager.ContinuousTaskRequest();
    let modeList: Array<number> = [backgroundTaskManager.BackgroundTaskMode.MODE_TASK_KEEPING];
    continuousTaskRequest.backgroundTaskModes = modeList;
    try {
      isModeSupported = continuousTaskRequest.isModeSupported();
      console.info(`Operation isModeSupported succeeded. isModeSupported is ${isModeSupported}`);
    } catch (error) {
      console.error(`Operation startBackgroundRunning failed. code is ${(error as BusinessError).code} message is ${(error as BusinessError).message}`);
    }
  }
};

```

## requestAuthFromUser

```TypeScript
requestAuthFromUser(context: Context, callback: Callback<UserAuthResult>): void
```

请求用户授权是否能在后台长时间运行，使用callback异步回调。接口调用成功会弹出用户授权弹框，建议应用在前台时调用该接口，提示用户进行授权。仅适用于特殊场景类型 [MODE_SPECIAL_SCENARIO_PROCESSING]backgroundTaskManager.BackgroundTaskMode的长时任务。

**Since:** 22

**Required permissions:** 

 ohos.permission.KEEP_BACKGROUND_RUNNING

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | Context | Yes | 应用运行的上下文。   FA模型的应用Context定义见[Context]{@link./app/context}。 Stage模型的应用Context定义  见[Context]./application/Context:Context。 说明： Stage模型中，仅支持UIAbility申请；FA模型中，仅支持ServiceAbility  申请。 |
| callback | Callback&lt;UserAuthResult> | Yes | 用户操作后，返回授权结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 9800004 | System service operation failed. |
| 9800005 | Continuous task verification failed. |

**Example**

```TypeScript
import { backgroundTaskManager } from '@kit.BackgroundTasksKit';
import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

function callbackAuth(authResult: backgroundTaskManager.UserAuthResult) {
  console.info('Operation requestAuthFromUser success. auth result: ' + JSON.stringify(authResult));
}

export default class EntryAbility extends UIAbility {
  onCreate(want: Want, launchParam: AbilityConstant.LaunchParam) {
    let continuousTaskRequest = new backgroundTaskManager.ContinuousTaskRequest();
    let modeList: Array<number> = [backgroundTaskManager.BackgroundTaskMode.MODE_SPECIAL_SCENARIO_PROCESSING];
    continuousTaskRequest.backgroundTaskModes = modeList;
    let subModeList: Array<number> = [backgroundTaskManager.BackgroundTaskSubmode.SUBMODE_MEDIA_PROCESS_NORMAL_NOTIFICATION];
    continuousTaskRequest.backgroundTaskSubmodes = subModeList;
    try {
      continuousTaskRequest.requestAuthFromUser(this.context, callbackAuth);
      console.info('Operation requestAuthFromUser succeeded.');
    } catch (error) {
      console.error(`Operation requestAuthFromUser failed. code is ${(error as BusinessError).code} message is ${(error as BusinessError).message}`);
    }
  }
};

```

## requestAuthFromUserByDialog

```TypeScript
requestAuthFromUserByDialog(context: Context, callback: Callback<UserAuthResult>): void
```

向用户请求MODE_SPECIAL_SCENARIO_PROCESSING授权时，会弹出对话框。

**Since:** 26.0.0

**Required permissions:** 

 ohos.permission.KEEP_BACKGROUND_RUNNING

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | Context | Yes | App running context. |
| callback | Callback&lt;UserAuthResult> | Yes | The callback of the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 9800004 | System service operation failed. |
| 9800005 | Continuous task verification failed. |

**Example**

```TypeScript
import { backgroundTaskManager } from '@kit.BackgroundTasksKit';
import { UIAbility } from '@kit.AbilityKit';
import { window } from '@kit.ArkUI';
import { BusinessError } from '@kit.BasicServicesKit';

function callbackAuth(authResult: backgroundTaskManager.UserAuthResult) {
  console.info('Operation requestAuthFromUserByDialog success. auth result: ' + JSON.stringify(authResult));
}

export default class EntryAbility extends UIAbility {
  onWindowStageCreate(windowStage: window.WindowStage): void {
    windowStage.loadContent('pages/Index', (err) => {
      if (err.code) {
        return;
      }
      try {
        let continuousTaskRequest = new backgroundTaskManager.ContinuousTaskRequest();
        let modeList: Array<number> = [backgroundTaskManager.BackgroundTaskMode.MODE_SPECIAL_SCENARIO_PROCESSING];
        continuousTaskRequest.backgroundTaskModes = modeList;
        let subModeList: Array<number> = [backgroundTaskManager.BackgroundTaskSubmode.SUBMODE_MEDIA_PROCESS_NORMAL_NOTIFICATION];
        continuousTaskRequest.backgroundTaskSubmodes = subModeList;
        continuousTaskRequest.requestAuthFromUserByDialog(this.context, callbackAuth);
        console.info('Operation requestAuthFromUserByDialog succeeded.');
      } catch (error) {
        console.error(`Operation requestAuthFromUserByDialog failed. code is ${(error as BusinessError).code} message is ${(error as BusinessError).message}`);
      }
    });
  }
};

```

## continuousTaskId

```TypeScript
continuousTaskId?: number
```

长时任务ID，默认值为-1。 **说明：** 如果combinedTaskNotification取值为true，则该值为必填项，且必须是存在的ID。 作为 [updateBackgroundRunning]backgroundTaskManager.updateBackgroundRunning(context: Context, request: ContinuousTaskRequest) 接口入参时，该属性必填，且必须是存在的ID。 可以通过 [getAllContinuousTasks]backgroundTaskManager.getAllContinuousTasks(context: Context, includeSuspended: boolean) 接口查看当前所有长时任务信息。

**Type:** number

**Since:** 21

**Atomic service API:** From API version 26.0.0 this API can be used in atomic services.

**System capability:** SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask

```TypeScript
get continuousTaskId(): int | undefined
```

长时任务ID，默认值为-1。 **说明：** 如果combinedTaskNotification取值为true，则该值为必填项，且必须是存在的ID。 作为 [updateBackgroundRunning]backgroundTaskManager.updateBackgroundRunning(context: Context, request: ContinuousTaskRequest) 接口入参时，该属性必填，且必须是存在的ID。 可以通过 [getAllContinuousTasks]backgroundTaskManager.getAllContinuousTasks(context: Context, includeSuspended: boolean) 接口查看当前所有长时任务信息。

**Type:** int

**Since:** 24

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask

```TypeScript
set continuousTaskId(value: int | undefined)
```

长时任务ID，默认值为-1。 **说明：** 如果combinedTaskNotification取值为true，则该值为必填项，且必须是存在的ID。 作为 [updateBackgroundRunning]backgroundTaskManager.updateBackgroundRunning(context: Context, request: ContinuousTaskRequest) 接口入参时，该属性必填，且必须是存在的ID。 可以通过 [getAllContinuousTasks]backgroundTaskManager.getAllContinuousTasks(context: Context, includeSuspended: boolean) 接口查看当前所有长时任务信息。

**Type:** int

**Since:** 24

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask

## combinedTaskNotification

```TypeScript
combinedTaskNotification?: boolean
```

是否合并通知，true表示合并，false表示不合并，默认为false。 **说明：** 该属性在 [updateBackgroundRunning]backgroundTaskManager.updateBackgroundRunning(context: Context, request: ContinuousTaskRequest) 接口中不生效，如需在已有任务上合并通知，请重新申请该任务，并在申请时设置为支持合并。

**Type:** boolean

**Since:** 21

**Atomic service API:** From API version 26.0.0 this API can be used in atomic services.

**System capability:** SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask

```TypeScript
get combinedTaskNotification(): boolean | undefined
```

是否合并通知，true表示合并，false表示不合并，默认为false。 **说明：** 该属性在 [updateBackgroundRunning]backgroundTaskManager.updateBackgroundRunning(context: Context, request: ContinuousTaskRequest) 接口中不生效，如需在已有任务上合并通知，请重新申请该任务，并在申请时设置为支持合并。

**Type:** boolean

**Since:** 24

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask

```TypeScript
set combinedTaskNotification(value: boolean | undefined)
```

是否合并通知，true表示合并，false表示不合并，默认为false。 **说明：** 该属性在 [updateBackgroundRunning]backgroundTaskManager.updateBackgroundRunning(context: Context, request: ContinuousTaskRequest) 接口中不生效，如需在已有任务上合并通知，请重新申请该任务，并在申请时设置为支持合并。

**Type:** boolean

**Since:** 24

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask

## wantAgent

```TypeScript
get wantAgent(): WantAgent
```

通知参数，用于指定点击长时任务通知后跳转的界面。

**Type:** WantAgent

**Since:** 21

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 26.0.0 this API can be used in atomic services.

**System capability:** SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask

```TypeScript
set wantAgent(value: WantAgent)
```

通知参数，用于指定点击长时任务通知后跳转的界面。

**Type:** WantAgent

**Since:** 21

**Atomic service API:** From API version 26.0.0 this API can be used in atomic services.

**System capability:** SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask

## backgroundTaskModes

```TypeScript
get backgroundTaskModes(): BackgroundTaskMode[]
```

长时任务主类型 **说明：** 主类型与子类型必须匹配。

**Type:** BackgroundTaskMode[]

**Since:** 21

**Atomic service API:** From API version 26.0.0 this API can be used in atomic services.

**System capability:** SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask

```TypeScript
set backgroundTaskModes(value: BackgroundTaskMode[])
```

长时任务主类型 **说明：** 主类型与子类型必须匹配。

**Type:** BackgroundTaskMode[]

**Since:** 21

**Atomic service API:** From API version 26.0.0 this API can be used in atomic services.

**System capability:** SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask

## backgroundTaskSubmodes

```TypeScript
get backgroundTaskSubmodes(): BackgroundTaskSubmode[]
```

长时任务子类型。 **说明：** 主类型与子类型必须匹配。

**Type:** BackgroundTaskSubmode[]

**Since:** 21

**Atomic service API:** From API version 26.0.0 this API can be used in atomic services.

**System capability:** SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask

```TypeScript
set backgroundTaskSubmodes(value: BackgroundTaskSubmode[])
```

长时任务子类型。 **说明：** 主类型与子类型必须匹配。

**Type:** BackgroundTaskSubmode[]

**Since:** 21

**Atomic service API:** From API version 26.0.0 this API can be used in atomic services.

**System capability:** SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask

