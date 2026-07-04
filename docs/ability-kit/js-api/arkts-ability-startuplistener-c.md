# StartupListener

The module defines the task listener used in [App Startup](../../../../application-models/app-startup.md).

**Since:** 12

**System capability:** SystemCapability.Ability.AppStartup

## Modules to Import

```TypeScript
import { StartupListener } from '@ohos.app.appstartup.StartupListener';
```

## onCompleted

```TypeScript
onCompleted?(error: BusinessError<void>): void
```

Called when all startup tasks complete.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Ability.AppStartup

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| error | BusinessError&lt;void&gt; | Yes | Indicates the error during execution. |

**Example**

```TypeScript
import { StartupConfig, StartupConfigEntry, StartupListener } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

export default class MyStartupConfigEntry extends StartupConfigEntry {
  onConfig() {
    hilog.info(0x0000, 'testTag', `onConfig`);
    let onCompletedCallback = (error: BusinessError<void>) => {
      hilog.info(0x0000, 'testTag', `onCompletedCallback`);
      if (error) {
        hilog.error(0x0000, 'testTag', 'onCompletedCallback: %{public}d, message: %{public}s', error.code,
          error.message);
      } else {
        hilog.info(0x0000, 'testTag', `onCompletedCallback: success.`);
      }
    };
    let startupListener: StartupListener = {
      'onCompleted': onCompletedCallback
    };
    let config: StartupConfig = {
      'timeoutMs': 10000,
      'startupListener': startupListener
    };
    return config;
  }
}

```

