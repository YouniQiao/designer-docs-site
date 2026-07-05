# StartupConfigEntry

本模块提供[应用启动框架](docroot://application-models/app-startup.md)配置的能力。

**Since:** 12

**System capability:** SystemCapability.Ability.AppStartup

## Modules to Import

```TypeScript
import { StartupConfigEntry } from '@kit.AbilityKit';
```

## onConfig

```TypeScript
onConfig?(): StartupConfig
```

在回调[AbilityStage.onCreate](arkts-abilitystage-c.md#onCreate)前，若该AbilityStage对应的HAP中启动框架配置 文件中[定义了启动框架配置](docroot://application-models/app-startup.md#定义启动参数配置)，则会触发该回调。 开发者可以在该回调中设置启动框架配置信息，详细使用方法可参考[设置启动参数](docroot://application-models/app-startup.md#设置启动参数)章节。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AppStartup

**Return value:**

| Type | Description |
| --- | --- |
| StartupConfig | 启动框架配置信息。 |

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
        hilog.info(0x0000, 'testTag', 'onCompletedCallback: %{public}d, message: %{public}s', error.code,
          error.message);
      } else {
        hilog.info(0x0000, 'testTag', `onCompletedCallback: success.`);
      }
    }
    let startupListener: StartupListener = {
      'onCompleted': onCompletedCallback
    }
    let config: StartupConfig = {
      'timeoutMs': 10000,
      'startupListener': startupListener
    }
    return config;
  }
}

```

## onConfig

```TypeScript
onConfig(): StartupConfig
```

在回调[AbilityStage.onCreate](arkts-abilitystage-c.md#onCreate)前，若该AbilityStage对应的HAP中启动框架配置 文件中[定义了启动框架配置](docroot://application-models/app-startup.md#定义启动参数配置)，则会触发该回调。

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AppStartup

**Return value:**

| Type | Description |
| --- | --- |
| StartupConfig | 启动框架配置信息。 |

## onRequestCustomMatchRule

```TypeScript
onRequestCustomMatchRule(want: Want): string
```

在回调[AbilityStage.onCreate](arkts-abilitystage-c.md#onCreate)前，若该AbilityStage对应的HAP中启动框架配置 文件中[定义了启动框架配置](docroot://application-models/app-startup.md#定义启动参数配置)，则会在 [StartupConfigEntry.onConfig](arkts-startupconfigentry-c.md#onConfig)后触发该回调。 开发者可以在该回调中，可以根据调用方传入启动UIAbility的Want中的不同参数来返回不同的自定义匹配规则。启动框架会将其与启动任务配置的matchRules中customization字段进行匹配。若匹配成功，任务将在自动模 式执行。详细匹配规则请参考[添加任务匹配规则](docroot://application-models/app-startup.md#添加任务匹配规则)章节。 该接口通常用于无法直接通过uri、action或意图名称规则来匹配启动任务的场景，可以使用本接口对匹配规则进一步细化。

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AppStartup

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| want | Want | Yes | 启动UIAbility的Want信息。 |

**Return value:**

| Type | Description |
| --- | --- |
| string | 返回自定义匹配规则值，用于匹配启动任务是否自动执行。 |

**Example**

```TypeScript
import { StartupConfigEntry, Want } from '@kit.AbilityKit';

export default class MyStartupConfigEntry extends StartupConfigEntry {
  // ...

  onRequestCustomMatchRule(want: Want): string {
    if (want?.parameters?.customParam == 'param1') {
      return 'customRule1';
    }
    return '';
  }
}

```

