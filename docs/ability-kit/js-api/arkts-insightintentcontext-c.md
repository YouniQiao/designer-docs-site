# InsightIntentContext

本模块提供意图执行上下文，是[意图执行基类](arkts-insightintentexecutor-c.md#InsightIntentExecutor)和 [@InsightIntentEntry的意图执行基类](arkts-insightintententryexecutor-c.md#InsightIntentEntryExecutor)的属性，为意图执行提 供基础能力，例如启动本应用内的[UIAbility组件]@ohos.app.ability.UIAbility。

**Since:** 11

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## Modules to Import

```TypeScript
import { InsightIntentContext } from '@kit.AbilityKit';
```

## setReturnModeForUIAbilityForeground

```TypeScript
setReturnModeForUIAbilityForeground(returnMode: insightIntent.ReturnMode): void
```

设置意图执行结果的返回形式，适用于执行模式为[UI_ABILITY_FOREGROUND](arkts-insightintent-executemode-e.md#ExecuteMode)的意图。

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| returnMode | insightIntent.ReturnMode | Yes | 意图执行结果的返回形式。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 16000011 | The context does not exist. Possible causes: 1.The context is  not insightIntentContext; 2.The context is not for UIAbility foreground insight intent execute mode. |

**Example**

```TypeScript
import { InsightIntentExecutor, insightIntent } from '@kit.AbilityKit';
import { window } from '@kit.ArkUI';
import { hilog } from '@kit.PerformanceAnalysisKit';

export default class InsightIntentExecutorUI extends InsightIntentExecutor {
  onExecuteInUIAbilityForegroundMode(name: string, param: Record<string, Object>,
    pageLoader: window.WindowStage): insightIntent.ExecuteResult {
    hilog.info(0x0000, 'testTag', 'onExecuteInUIAbilityForegroundMode %{public}s', name);
    let result: insightIntent.ExecuteResult;
    result = {
      code: 0,
      result: {
        message: 'Unsupported insight intent.',
      },
    };

    try {
      this.context.setReturnModeForUIAbilityForeground(insightIntent.ReturnMode.FUNCTION);
    } catch (error) {
      let code = (error as BusinessError).code;
      let msg = (error as BusinessError).message;
      console.error(`testTag setReturnModeForUIAbilityForeground fail, error code: ${code}, err msg: ${msg}.`);
    }

    let localStorageData: Record<string, number> = {
      'insightId': this.context.instanceId,
    };
    let storage: LocalStorage = new LocalStorage(localStorageData);
    pageLoader.loadContent('pages/UIAbilityIndex', storage, (err, data) => {
      if (err.code) {
        hilog.error(0x0000, 'testTag', 'Failed to load the content. Cause: %{public}s', JSON.stringify(err));
      } else {
        hilog.info(0x0000, 'testTag', '%{public}s', 'Succeeded in loading the content');
      }
    });
    return result;
  }
}

```

## setReturnModeForUIExtensionAbility

```TypeScript
setReturnModeForUIExtensionAbility(returnMode: insightIntent.ReturnMode): void
```

设置意图执行结果的返回形式，适用于执行模式为[UI_EXTENSION_ABILITY](arkts-insightintent-executemode-e.md#ExecuteMode)的意图。

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| returnMode | insightIntent.ReturnMode | Yes | 意图执行结果的返回形式。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 16000011 | The context does not exist. Possible causes: 1.The context is not  insightIntentContext; 2.The context is not for UIExtensionAbility insight intent execute mode. |

**Example**

```TypeScript
import { InsightIntentExecutor, insightIntent, UIExtensionContentSession } from '@kit.AbilityKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

export default class InsightIntentExecutorUI extends InsightIntentExecutor {
  onExecuteInUIExtensionAbility(name: string, param: Record<string, Object>,
    pageLoader: UIExtensionContentSession): insightIntent.ExecuteResult {
    hilog.info(0x0000, 'testTag', 'onExecuteInUIExtensionAbility %{public}s', name);
    let result: insightIntent.ExecuteResult;
    result = {
      code: 0,
      result: {
        message: 'Unsupported insight intent.',
      },
    };
    try {
      this.context.setReturnModeForUIExtensionAbility(insightIntent.ReturnMode.FUNCTION)
    } catch (error) {
      let code = (error as BusinessError).code;
      let msg = (error as BusinessError).message;
      console.error(`testTag setReturnModeForUIExtensionAbility fail, error code: ${code}, error msg: ${msg}.`);
    }

    try {
      let localStorageData: Record<string, number> = {
        'insightId': this.context.instanceId,
      };
      let storage: LocalStorage = new LocalStorage(localStorageData);
      storage.setOrCreate('session', pageLoader);
      pageLoader.loadContent('pages/UIExtensionPage', storage);
    } catch (err) {
      let code = (err as BusinessError).code;
      let msg = (err as BusinessError).message;
      console.info(`testTag loadContent error code: ${code}, error msg: ${msg}.`);
    }
    return result;
  }
}

```

## startAbility

```TypeScript
startAbility(want: Want, callback: AsyncCallback<void>): void
```

启动UIAbility组件，仅支持启动本应用内的UIAbility组件。使用callback异步回调。

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| want | Want | Yes | 启动UIAbility组件的want信息。 |
| callback | AsyncCallback&lt;void> | Yes | 回调函数。当接口调用成功，err为undefined，否则为错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |
| 16000001 | The specified ability does not exist. |
| 16000004 | Cannot start an invisible component. |
| 16000005 | The specified process does not have the permission. |
| 16000006 | Cross-user operations are not allowed. |
| 16000008 | The crowdtesting application expires. |
| 16000009 | An ability cannot be started or stopped in Wukong mode. |
| 16000011 | The context does not exist. |
| 16000012 | The application is controlled. |
| 16000013 | The application is controlled by EDM. |
| 16000050 | Internal error. |
| 16000053 | The ability is not on the top of the UI. |
| 16000055 | Installation-free timed out. |
| 16000061 | Operation not supported. |
| 16200001 | The caller has been released. |

**Example**

```TypeScript
import { InsightIntentExecutor, insightIntent, Want } from '@kit.AbilityKit';
import { window } from '@kit.ArkUI';
import { hilog } from '@kit.PerformanceAnalysisKit';

export default class IntentExecutorImpl extends InsightIntentExecutor {
  onExecuteInUIAbilityForegroundMode(name: string, param: Record<string, Object>,
    pageLoader: window.WindowStage): insightIntent.ExecuteResult {
    let want: Want = {
      bundleName: 'com.ohos.intentExecuteDemo',
      moduleName: 'entry',
      abilityName: 'AnotherAbility',
    };

    try {
      this.context.startAbility(want, (error) => {
        if (error) {
          hilog.error(0x0000, 'testTag', 'Start ability failed with %{public}s', JSON.stringify(error));
        } else {
          hilog.info(0x0000, 'testTag', '%{public}s', 'Start ability succeed');
        }
      })
    } catch (error) {
      hilog.error(0x0000, 'testTag', 'Start ability error caught %{public}s', JSON.stringify(error));
    }

    let result: insightIntent.ExecuteResult = {
      code: 0,
      result: {
        message: 'Execute insight intent succeed.',
      }
    };
    return result;
  }
}

```

## startAbility

```TypeScript
startAbility(want: Want): Promise<void>
```

启动UIAbility组件，仅支持启动本应用内的UIAbility组件。使用Promise异步回调。

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| want | Want | Yes | 启动UIAbility组件的want信息。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |
| 16000001 | The specified ability does not exist. |
| 16000004 | Cannot start an invisible component. |
| 16000005 | The specified process does not have the permission. |
| 16000006 | Cross-user operations are not allowed. |
| 16000008 | The crowdtesting application expires. |
| 16000009 | An ability cannot be started or stopped in Wukong mode. |
| 16000011 | The context does not exist. |
| 16000012 | The application is controlled. |
| 16000013 | The application is controlled by EDM. |
| 16000050 | Internal error. |
| 16000053 | The ability is not on the top of the UI. |
| 16000055 | Installation-free timed out. |
| 16000061 | Operation not supported. |
| 16200001 | The caller has been released. |

**Example**

```TypeScript
import { InsightIntentExecutor, insightIntent, Want } from '@kit.AbilityKit';
import { window } from '@kit.ArkUI';
import { hilog } from '@kit.PerformanceAnalysisKit';

export default class IntentExecutorImpl extends InsightIntentExecutor {
  async onExecuteInUIAbilityForegroundMode(name: string, param: Record<string, Object>,
    pageLoader: window.WindowStage): Promise<insightIntent.ExecuteResult> {
    let want: Want = {
      bundleName: 'com.ohos.intentExecuteDemo',
      moduleName: 'entry',
      abilityName: 'AnotherAbility',
    };

    try {
      await this.context.startAbility(want);
      hilog.info(0x0000, 'testTag', '%{public}s', 'Start ability finished');
    } catch (error) {
      hilog.error(0x0000, 'testTag', 'Start ability error caught %{public}s', JSON.stringify(error));
    }

    let result: insightIntent.ExecuteResult = {
      code: 0,
      result: {
        message: 'Execute insight intent succeed.',
      }
    };
    return result;
  }
}

```

## instanceId

```TypeScript
instanceId: int
```

意图实例唯一ID。用于通过 [insightIntentProvider.sendExecuteResult接口] {@link @ohos.app.ability.insightIntentProvider:insightIntentProvider.sendExecuteResult} 和 [insightIntentProvider.sendIntentResult接口] {@link @ohos.app.ability.insightIntentProvider:insightIntentProvider.sendIntentResult}返回指定意图的执行结果。

**Type:** int

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

