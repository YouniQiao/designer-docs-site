# getStartupTaskResult

## Modules to Import

```TypeScript
import { startupManager } from '@kit.AbilityKit';
```

## getStartupTaskResult

```TypeScript
function getStartupTaskResult(startupTask: string): Object
```

Obtains the execution result of a startup task or .so file preloading task.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

<!--Device-startupManager-function getStartupTaskResult(startupTask: string): Object--><!--Device-startupManager-function getStartupTaskResult(startupTask: string): Object-End-->

**System capability:** SystemCapability.Ability.AppStartup

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| startupTask | string | Yes | Name of the [StartupTask](arkts-ability-app-appstartup-startuptask-startuptask-c.md) or name of the .so file to be preloaded. |

**Return value:**

| Type | Description |
| --- | --- |
| [Object](../../apis-na/arkts-apis/arkts-na-lib-es5-object-i.md) | Execution result of [init](@ohos.app.appstartup.StartupTask:StartupTask#init(context: AbilityStageContext)) of the startup task if a startup task name is passed.<br>undefined if a .so file name is passed. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;2. Incorrect parameter types. |

**Example**

```TypeScript
import { AbilityConstant, UIAbility, Want, startupManager } from '@kit.AbilityKit';
import { window } from '@kit.ArkUI';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

export default class EntryAbility extends UIAbility {
  onCreate(want: Want, launchParam: AbilityConstant.LaunchParam) {
    hilog.info(0x0000, 'testTag', '%{public}s', 'Ability onCreate');
    try {
      startupManager.run(['StartupTask_001']).then(() => {
        hilog.info(0x0000, 'testTag', 'StartupTask_001 init successful');
      }).catch((error: BusinessError) => {
        hilog.error(0x0000, 'testTag', `StartupTask_001 promise catch failed, error: %{public}s`,
          JSON.stringify(error) ?? '');
      });
    } catch (error) {
      hilog.error(0x0000, 'testTag', `StartupTask_001.run failed, error: %{public}s`, JSON.stringify(error) ?? '');
    }
  }

  onWindowStageCreate(windowStage: window.WindowStage) {
    hilog.info(0x0000, 'testTag', '%{public}s', 'Ability onWindowStageCreate');
    let result = startupManager.getStartupTaskResult('StartupTask_001'); // Manually obtain the startup task result.
    hilog.info(0x0000, 'testTag', 'getStartupTaskResult result = %{public}s', result);
    windowStage.loadContent('pages/Index', (err, data) => {
      if (err.code) {
        hilog.error(0x0000, 'testTag', 'Failed to load the content. Cause: %{public}s', JSON.stringify(err) ?? '');
        return;
      }
      hilog.info(0x0000, 'testTag', 'Succeeded in loading the content. Data: %{public}s', JSON.stringify(data) ?? '');
    });
  }
}

```

