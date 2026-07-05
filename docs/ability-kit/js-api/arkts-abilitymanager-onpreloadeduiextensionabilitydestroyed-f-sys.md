# onPreloadedUIExtensionAbilityDestroyed

## onPreloadedUIExtensionAbilityDestroyed

```TypeScript
function onPreloadedUIExtensionAbilityDestroyed(callback: PreloadedUIExtensionAbilityDestroyedFn): void
```

监听当前进程中预加载的[UIExtensionAbility](arkts-uiextensionability-c.md#UIExtensionAbility)实例的销毁事件。

**Since:** 23

**Required permissions:** 

 ohos.permission.PRELOAD_UI_EXTENSION_ABILITY

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | PreloadedUIExtensionAbilityDestroyedFn | Yes | 用于接收被销毁的预加载  [UIExtensionAbility](arkts-uiextensionability-c.md#UIExtensionAbility)实例ID的回调函数。 |

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

function onPreloadDestroyed(preloadId: number) {
  console.info(`Preloaded UIExtensionAbility destroyed, preloadId: ${preloadId}`);
}

try {
  abilityManager.onPreloadedUIExtensionAbilityDestroyed(onPreloadDestroyed);
  console.info('onPreloadedUIExtensionAbilityDestroyed success.');
} catch (err) {
  let code = (err as BusinessError).code;
  let message = (err as BusinessError).message;
  console.error(`onPreloadedUIExtensionAbilityDestroyed failed, code is ${code}, message is ${message}`);
}

```

