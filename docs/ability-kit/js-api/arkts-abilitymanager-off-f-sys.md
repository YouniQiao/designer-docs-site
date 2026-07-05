# off

## off('abilityForegroundState')

```TypeScript
function off(type: 'abilityForegroundState', observer?: AbilityForegroundStateObserver): void
```

取消注册Ability启动和退出的观测器。

**Since:** 11

**Required permissions:** 

 ohos.permission.RUNNING_STATE_OBSERVER

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'abilityForegroundState' | Yes | 调用接口类型，固定填'abilityForegroundState'字符串。 |
| observer | AbilityForegroundStateObserver | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 16000050 | Internal error. |

**Example**

```TypeScript
import { abilityManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

let observer_: abilityManager.AbilityForegroundStateObserver | undefined;
// 1. Register an observer to listen for ability start or exit events.
let observer: abilityManager.AbilityForegroundStateObserver = {
  onAbilityStateChanged(abilityStateData: abilityManager.AbilityStateData) {
    console.info(`onAbilityStateChanged: ${JSON.stringify(abilityStateData)}`);
  },
};
try {
  abilityManager.on('abilityForegroundState', observer);
  observer_ = observer;
} catch (paramError) {
  let code = (paramError as BusinessError).code;
  let message = (paramError as BusinessError).message;
  console.error(`error: ${code}, ${message} `);
}

// 2. Deregister the observer.
try {
  abilityManager.off('abilityForegroundState',  observer_);
} catch (paramError) {
  let code = (paramError as BusinessError).code;
  let message = (paramError as BusinessError).message;
  console.error(`error: ${code}, ${message} `);
}

```

