# InsightIntentContext

The module provides the context for intent execution. It is used as a property in both the [intent execution base class](arkts-ability-insightintentexecutor-c.md#insightintentexecutor) and [base class decorated with @InsightIntentEntry](arkts-ability-insightintententryexecutor-c.md#insightintententryexecutor) , offering essential capabilities for intent implementation, for example, starting [UIAbility components](arkts-app-ability-uiability.md) within the same application.

**Since:** 11

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## Modules to Import

```TypeScript
import { InsightIntentContext } from '@ohos.app.ability.InsightIntentContext';
```

## setReturnModeForUIAbilityForeground

```TypeScript
setReturnModeForUIAbilityForeground(returnMode: insightIntent.ReturnMode): void
```

Sets the return mode of the intent execution result. This API is applicable to intents with the execution mode set to [UI_ABILITY_FOREGROUND](arkts-ability-executemode-e.md#executemode).

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 23.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| returnMode | insightIntent.ReturnMode | Yes | Return mode of the intent execution result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [16000011](../errorcode-ability.md#16000011-context-does-not-exist) | The context does not exist. Possible causes: 1.The context isnot insightIntentContext; 2.The context is not for UIAbility foreground insight intent execute mode. |

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

Sets the return mode of the intent execution result. This API is applicable to intents with the execution mode set to [UI_EXTENSION_ABILITY](arkts-ability-executemode-e.md#executemode).

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 23.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| returnMode | insightIntent.ReturnMode | Yes | Return mode of the intent execution result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [16000011](../errorcode-ability.md#16000011-context-does-not-exist) | The context does not exist. Possible causes: 1.The context is notinsightIntentContext; 2.The context is not for UIExtensionAbility insight intent execute mode. |

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

Starts a UIAbility. This API can only be used to start UIAbility components within the same application. This API uses an asynchronous callback to return the result.

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| want | Want | Yes | Want information for starting the UIAbility. |
| callback | AsyncCallback&lt;void&gt; | Yes | Callback used to return the result. If the operation is successful,**err** is **undefined**. Otherwise, **err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;2. Incorrect parameter types. |
| [16000001](../errorcode-ability.md#16000001-ability-name-does-not-exist) | The specified ability does not exist. |
| [16000004](../errorcode-ability.md#16000004-visibility-verification-failure) | Cannot start an invisible component. |
| [16000005](../errorcode-ability.md#16000005-process-permission-verification-failure) | The specified process does not have the permission. |
| [16000006](../errorcode-ability.md#16000006-crossuser-operation-is-not-allowed) | Cross-user operations are not allowed. |
| [16000008](../errorcode-ability.md#16000008-crowdtesting-application-expires) | The crowdtesting application expires. |
| [16000009](../errorcode-ability.md#16000009-ability-start-or-stop-failure-in-wukong-mode) | An ability cannot be started or stopped in Wukong mode. |
| [16000011](../errorcode-ability.md#16000011-context-does-not-exist) | The context does not exist. |
| [16000012](../errorcode-ability.md#16000012-application-under-control) | The application is controlled. |
| [16000013](../errorcode-ability.md#16000013-application-controlled-by-edm) | The application is controlled by EDM. |
| [16000050](../errorcode-ability.md#16000050-internal-error) | Internal error. |
| [16000053](../errorcode-ability.md#16000053-ability-is-not-on-top-of-ui) | The ability is not on the top of the UI. |
| [16000055](../errorcode-ability.md#16000055-installationfree-timeout) | Installation-free timed out. |
| [16000061](../errorcode-ability.md#16000061-unsupported-operation) | Operation not supported. |
| [16200001](../errorcode-ability.md#16200001-caller-released) | The caller has been released. |

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

Starts a UIAbility. This API can only be used to start UIAbility components within the same application. This API uses a promise to return the result.

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| want | Want | Yes | Want information for starting the UIAbility. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;2. Incorrect parameter types. |
| [16000001](../errorcode-ability.md#16000001-ability-name-does-not-exist) | The specified ability does not exist. |
| [16000004](../errorcode-ability.md#16000004-visibility-verification-failure) | Cannot start an invisible component. |
| [16000005](../errorcode-ability.md#16000005-process-permission-verification-failure) | The specified process does not have the permission. |
| [16000006](../errorcode-ability.md#16000006-crossuser-operation-is-not-allowed) | Cross-user operations are not allowed. |
| [16000008](../errorcode-ability.md#16000008-crowdtesting-application-expires) | The crowdtesting application expires. |
| [16000009](../errorcode-ability.md#16000009-ability-start-or-stop-failure-in-wukong-mode) | An ability cannot be started or stopped in Wukong mode. |
| [16000011](../errorcode-ability.md#16000011-context-does-not-exist) | The context does not exist. |
| [16000012](../errorcode-ability.md#16000012-application-under-control) | The application is controlled. |
| [16000013](../errorcode-ability.md#16000013-application-controlled-by-edm) | The application is controlled by EDM. |
| [16000050](../errorcode-ability.md#16000050-internal-error) | Internal error. |
| [16000053](../errorcode-ability.md#16000053-ability-is-not-on-top-of-ui) | The ability is not on the top of the UI. |
| [16000055](../errorcode-ability.md#16000055-installationfree-timeout) | Installation-free timed out. |
| [16000061](../errorcode-ability.md#16000061-unsupported-operation) | Operation not supported. |
| [16200001](../errorcode-ability.md#16200001-caller-released) | The caller has been released. |

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
instanceId: number
```

Unique ID of an intent instance. Its execution result can be returned through [insightIntentProvider.sendExecuteResult] {@link @ohos.app.ability.insightIntentProvider:insightIntentProvider.sendExecuteResult} and [insightIntentProvider.sendIntentResult] {@link @ohos.app.ability.insightIntentProvider:insightIntentProvider.sendIntentResult}.

**Type:** number

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 23.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

