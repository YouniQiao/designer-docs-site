# offPreloadedUIExtensionAbilityLoaded

## offPreloadedUIExtensionAbilityLoaded

```TypeScript
function offPreloadedUIExtensionAbilityLoaded(callback?: PreloadedUIExtensionAbilityLoadedFn): void
```

注销当前进程中预加载的[UIExtensionAbility](arkts-uiextensionability-c.md#UIExtensionAbility)实例的加载监听。

**Since:** 23

**Required permissions:** 

 ohos.permission.PRELOAD_UI_EXTENSION_ABILITY

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | PreloadedUIExtensionAbilityLoadedFn | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | The application does not have permission to call the interface. |
| 202 | The application is not system-app, can not use system-api. |
| 16000050 | Internal error. Possible causes: Memory operation error. |

**Example**

```TypeScript
import { abilityManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

function offPreloadLoaded(preloadId: number) {
  console.info(`Preloaded UIExtensionAbility loaded, preloadId: ${preloadId}`);
}

try {
  abilityManager.offPreloadedUIExtensionAbilityLoaded(offPreloadLoaded);
  console.info('offPreloadedUIExtensionAbilityLoaded success.');
} catch (err) {
  let code = (err as BusinessError).code;
  let message = (err as BusinessError).message;
  console.error(`offPreloadedUIExtensionAbilityLoaded failed, code is ${code}, message is ${message}`);
}

```

