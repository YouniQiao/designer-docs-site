# setShieldStatus

## setShieldStatus

```TypeScript
function setShieldStatus(shieldMode: ShieldMode, isShield: boolean): void
```

设置系统快捷键屏蔽类型。

**Since:** 11

**Required permissions:** 

 ohos.permission.INPUT_CONTROL_DISPATCHING

**System capability:** SystemCapability.MultimodalInput.Input.InputConsumer

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| shieldMode | ShieldMode | Yes | 系统快捷键屏蔽类型，目前仅支持取值为'FACTORY_MODE'，表示屏蔽所有系统快捷键。 |
| isShield | boolean | Yes | 屏蔽类型生效状态，true代表屏蔽类型生效，false代表不生效。 |

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
          let FACTORY_MODE = 0;
          try {
            inputConsumer.setShieldStatus(FACTORY_MODE,true);
            console.info(`set shield status success`);
          } catch (error) {
            console.error(`set shield status failed, error: ${JSON.stringify(error, [`code`, `message`])}`);
          }
        })
    }
  }
}

```

