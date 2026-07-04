# removeStartupTaskResult

## Modules to Import

```TypeScript
import { startupManager } from '@ohos.app.appstartup.startupManager';
```

## removeStartupTaskResult

```TypeScript
function removeStartupTaskResult(startupTask: string): void
```

Removes the initialization result of a startup task or .so file preloading task. - If a startup task name is passed, the initialization result of that startup task is removed. - If a .so file is passed, the .so file is set to the unloaded state, but the loaded .so file in the cache is not removed.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Ability.AppStartup

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| startupTask | string | Yes | Name of the [StartupTask](arkts-ability-startuptask-c.md#startuptask) orname of the .so file to be preloaded. |

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
    try{
      startupManager.run(['StartupTask_001', 'libentry_001']).then(() => {
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
    startupManager.removeStartupTaskResult('StartupTask_001');
    startupManager.removeStartupTaskResult('libentry_001');

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

