# getShieldStatus

## getShieldStatus

```TypeScript
function getShieldStatus(shieldMode: ShieldMode): boolean
```

获取系统快捷键屏蔽类型。

**Since:** 11

**Required permissions:** 

 ohos.permission.INPUT_CONTROL_DISPATCHING

**System capability:** SystemCapability.MultimodalInput.Input.InputConsumer

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| shieldMode | ShieldMode | Yes | 系统快捷键屏蔽类型，目前仅支持取值为'FACTORY_MODE'，表示屏蔽所有系统快捷键。 |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | 屏蔽类型生效状态，true代表屏蔽类型生效，false代表不生效。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | SystemAPI permission error. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

**Example**

```TypeScript
import { inputConsumer } from '@kit.InputKit';

@Entry
@Component
struct Index {
  build() {
    RelativeContainer() {
      Text()
        .onClick(() => {
          try {
            let FACTORY_MODE = 0;
            let shieldstatusResult:Boolean =  inputConsumer.getShieldStatus(FACTORY_MODE);
            console.info(` get shield status result:${JSON.stringify(shieldstatusResult)}`);
          } catch (error) {
            console.error(`Failed to get shield status, error: ${JSON.stringify(error, [`code`, `message`])}`);
          }
        })
    }
  }
}

```

