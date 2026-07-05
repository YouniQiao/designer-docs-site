# run

## run

```TypeScript
function run(startupTasks: Array<string>, config?: StartupConfig): Promise<void>
```

执行启动框架启动任务或加载so文件。 > **说明：** > > 本接口不支持执行feature类型HAP中的启动任务，如需要使用相关能力请调用 > [startupManager.run]startupManager.run(startupTasks: Array<string>, context: common.AbilityStageContext, config: StartupConfig) > 接口。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AppStartup

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| startupTasks | Array&lt;string> | Yes | 表示准备执行的启动任务  [StartupTask](arkts-startuptask-c.md#StartupTask)的名称或预加载so名称的数组。 |
| config | StartupConfig | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象。无返回结果的Promise对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |
| 16000050 | Internal error. |
| 28800001 | Startup task or its dependency not found. |
| 28800002 | The startup tasks have circular dependencies. |
| 28800003 | An error occurred while running the startup tasks. |
| 28800004 | Running startup tasks timeout. |

**Example**

```TypeScript
import { AbilityConstant, UIAbility, Want, startupManager } from '@kit.AbilityKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

export default class EntryAbility extends UIAbility {
  onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
    hilog.info(0x0000, 'testTag', '%{public}s', 'Ability onCreate');
    let startParams = ['StartupTask_001', 'libentry_001'];
    try {
      // Manually call the run method.
      startupManager.run(startParams).then(() => {
        console.info(`StartupTest startupManager run then, startParams = ${startParams}.`);
      }).catch((error: BusinessError) => {
        console.error(`StartupTest promise catch failed, error code: ${error.code}, error msg: ${error.message}.`);
      });
    } catch (error) {
      let errMsg = (error as BusinessError).message;
      let errCode = (error as BusinessError).code;
      console.error(`Startup.run failed, err code: ${errCode}, err msg: ${errMsg}.`);
    }
  }

  // ...
}

```

## run

```TypeScript
function run(startupTasks: Array<string>, context: common.AbilityStageContext, config: StartupConfig): Promise<void>
```

执行启动框架启动任务或加载so文件。支持指定[AbilityStageContext]./application/AbilityStageContext:AbilityStageContext用于启动任务的加载。使 用Promise异步回调。

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AppStartup

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| startupTasks | Array&lt;string> | Yes | 表示准备执行的启动任务  [StartupTask](arkts-startuptask-c.md#StartupTask)的名称或预加载so名称的数组。 |
| context | common.AbilityStageContext | Yes | 表示执行启动任务  [StartupTask](arkts-startuptask-c.md#StartupTask)的AbilityStage上下文，作为入参传给启动任务的  [init](arkts-startuptask-c.md#init)。 |
| config | StartupConfig | Yes | 表示启动任务配置信息，包含启动框架超时时间与启动任务监听器配置。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象。无返回结果的Promise对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 16000050 | Internal error. |
| 28800001 | Startup task or its dependency not found. |
| 28800002 | The startup tasks have circular dependencies. |
| 28800003 | An error occurred while running the startup tasks. |
| 28800004 | Running startup tasks timeout. |

**Example**

```TypeScript
import { AbilityStage, startupManager, StartupListener, StartupConfig } from '@kit.AbilityKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

export default class MyAbilityStage extends AbilityStage {
  onCreate(): void {
    hilog.info(0x0000, 'testTag', 'AbilityStage onCreate');
    let onCompletedCallback = (error: BusinessError<void>) => {
      if (error) {
        hilog.error(0x0000, 'testTag', 'onCompletedCallback error: %{public}s', JSON.stringify(error));
      } else {
        hilog.info(0x0000, 'testTag', 'onCompletedCallback: success.');
      }
    };
    let startupListener: StartupListener = {
      'onCompleted': onCompletedCallback
    };
    let config: StartupConfig = {
      'timeoutMs': 10000,
      'startupListener': startupListener
    };

    try {
      // Manually call the run method.
      startupManager.run(['StartupTask_001', 'libentry_001'], this.context, config).then(() => {
        hilog.info(0x0000, 'testTag', '%{public}s', 'startupManager.run success');
      }).catch((error: BusinessError<void>) => {
        hilog.error(0x0000, 'testTag', 'startupManager.run promise catch error: %{public}s', JSON.stringify(error));
      })
    } catch (error) {
      hilog.error(0x0000, 'testTag', 'startupManager.run catch error: %{public}s', JSON.stringify(error));
    }
  }
  // ...
}

```

