# run

## Modules to Import

```TypeScript
import { startupManager } from '@ohos.app.appstartup.startupManager';
```

## run

```TypeScript
function run(startupTasks: Array<string>, config?: StartupConfig): Promise<void>
```

Runs startup tasks or loads .so files. > **NOTE** > > This API cannot be used to run startup tasks defined in a feature-type HAP. To run those tasks, use > [startupManager.run](arkts-ability-run-f.md#run-2) > .

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Ability.AppStartup

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| startupTasks | Array&lt;string&gt; | Yes | Array of [StartupTask](arkts-ability-startuptask-c.md#startuptask)names or names of .so files to be preloaded. |
| config | StartupConfig | No | Configuration for the timeout duration and listener of startup tasks inAppStartup. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;2. Incorrect parameter types. |
| [16000050](../errorcode-ability.md#16000050-internal-error) | Internal error. |
| [28800001](../errorcode-ability.md#28800001-startup-task-or-dependency-not-found) | Startup task or its dependency not found. |
| [28800002](../errorcode-ability.md#28800002-circular-dependencies-between-startup-tasks) | The startup tasks have circular dependencies. |
| [28800003](../errorcode-ability.md#28800003-error-occurs-during-task-startup) | An error occurred while running the startup tasks. |
| [28800004](../errorcode-ability.md#28800004-executing-the-startup-task-times-out) | Running startup tasks timeout. |

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

Runs startup tasks or loads .so files. You can specify [AbilityStageContext](arkts-ability-abilitystagecontext-c.md#abilitystagecontext) for loading startup tasks. This API uses a promise to return the result.

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Ability.AppStartup

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| startupTasks | Array&lt;string&gt; | Yes | Array of [StartupTask](arkts-ability-startuptask-c.md#startuptask)names or names of .so files to be preloaded. |
| context | common.AbilityStageContext | Yes | AbilityStage context that executes the[StartupTask](arkts-ability-startuptask-c.md#startuptask). It is passed as an input parameter to[init](arkts-ability-startuptask-c.md#init-1) of the task. |
| config | StartupConfig | Yes | Configuration for the timeout duration and listener of startup tasks inAppStartup. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [16000050](../errorcode-ability.md#16000050-internal-error) | Internal error. |
| [28800001](../errorcode-ability.md#28800001-startup-task-or-dependency-not-found) | Startup task or its dependency not found. |
| [28800002](../errorcode-ability.md#28800002-circular-dependencies-between-startup-tasks) | The startup tasks have circular dependencies. |
| [28800003](../errorcode-ability.md#28800003-error-occurs-during-task-startup) | An error occurred while running the startup tasks. |
| [28800004](../errorcode-ability.md#28800004-executing-the-startup-task-times-out) | Running startup tasks timeout. |

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

