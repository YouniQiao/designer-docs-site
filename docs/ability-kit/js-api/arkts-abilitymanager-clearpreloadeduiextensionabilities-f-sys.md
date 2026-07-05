# clearPreloadedUIExtensionAbilities

## clearPreloadedUIExtensionAbilities

```TypeScript
function clearPreloadedUIExtensionAbilities(): Promise<void>
```

清除当前进程中所有已经预加载的[UIExtensionAbility](arkts-uiextensionability-c.md#UIExtensionAbility)实例。使用Promise异步回调。

**Since:** 23

**Required permissions:** 

 ohos.permission.PRELOAD_UI_EXTENSION_ABILITY

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | The application does not have permission to call the interface. |
| 202 | The application is not system-app, can not use system-api. |
| 16000050 | Internal error. Possible causes: 1. Connect to system service failed;  2.Send restart message to system service failed; 3.System service failed to communicate with dependency module. |

**Example**

```TypeScript
import { abilityManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  abilityManager.clearPreloadedUIExtensionAbilities()
    .then(() => {
      console.info('clearPreloadedUIExtensionAbilities success.');
    })
    .catch((err: BusinessError) => {
      console.error(`clearPreloadedUIExtensionAbilities fail, err: ${JSON.stringify(err)}`);
    });
} catch (err) {
  let code = (err as BusinessError).code;
  let message = (err as BusinessError).message;
  console.error(`clearPreloadedUIExtensionAbilities failed, code is ${code}, message is ${message}`);
}

```

