# getShieldStatus (System API)

## Modules to Import

```TypeScript
import { inputConsumer } from '@kit.InputKit';
```

<a id="getshieldstatus"></a>
## getShieldStatus

```TypeScript
function getShieldStatus(shieldMode: ShieldMode): boolean
```

Obtains the system hotkey shield status.

**Since:** 11

**Required permissions:** ohos.permission.INPUT_CONTROL_DISPATCHING

<!--Device-inputConsumer-function getShieldStatus(shieldMode: ShieldMode): boolean--><!--Device-inputConsumer-function getShieldStatus(shieldMode: ShieldMode): boolean-End-->

**System capability:** SystemCapability.MultimodalInput.Input.InputConsumer

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| shieldMode | [ShieldMode](arkts-input-inputconsumer-shieldmode-e-sys.md) | Yes | System hotkey shield mode. Currently, only **FACTORY_MODE** is supported, which means to shield all system hotkeys. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Whether to enable shortcut key shielding. The value **true** means to enable shortcut key shielding, and the value **false** indicates the opposite. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | SystemAPI permission error. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types; 3. Parameter verification failed. |

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

