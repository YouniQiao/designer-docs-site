# saveAppState

## saveAppState

```TypeScript
function saveAppState(): boolean
```

保存当前App状态，可以配合[errorManager](arkts-app-ability-errormanager.md#errorManager)相关接口使用。

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Return value:**

| Type | Description |
| --- | --- |
| boolean | 保存成功与否。true：保存成功，false：保存失败。 |

**Example**

```TypeScript
import { appRecovery, errorManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

let observer: errorManager.ErrorObserver = {
  onUnhandledException(errorMsg) {
    console.error('onUnhandledException, errorMsg: ', errorMsg);
    appRecovery.saveAppState();
  }
};

try {
  errorManager.on('error', observer);
} catch (paramError) {
  console.error(`error: ${(paramError as BusinessError).code}, ${(paramError as BusinessError).message}`);
}

```

## saveAppState

```TypeScript
function saveAppState(context?: UIAbilityContext): boolean
```

主动保存Ability的状态，这个状态将在下次恢复启动时使用。可以配合[errorManager](arkts-app-ability-errormanager.md#errorManager)相关接口使用。

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | UIAbilityContext | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | 保存成功与否。true：保存成功，false：保存失败。 |

**Example**

```TypeScript
import { appRecovery, errorManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

let observer: errorManager.ErrorObserver = {
  onUnhandledException(errorMsg) {
    console.error('onUnhandledException, errorMsg: ', errorMsg);
    appRecovery.saveAppState(this.context);
  }
};

try {
  errorManager.on('error', observer);
} catch (paramError) {
  console.error(`error: ${(paramError as BusinessError).code}, ${(paramError as BusinessError).message}`);
}

```

