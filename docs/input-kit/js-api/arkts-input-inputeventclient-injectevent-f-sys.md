# injectEvent (System API)

## Modules to Import

```TypeScript
import { inputEventClient } from '@kit.InputKit';
```

<a id="injectevent"></a>
## injectEvent

```TypeScript
function injectEvent({ KeyEvent: KeyEvent }): void
```

Injects keys (including single keys and combination keys).

**Since:** 8

**Required permissions:** 
- API version 12+: ohos.permission.INJECT_INPUT_EVENT

<!--Device-inputEventClient-function injectEvent({ KeyEvent: KeyEvent }): void--><!--Device-inputEventClient-function injectEvent({ KeyEvent: KeyEvent }): void-End-->

**System capability:** SystemCapability.MultimodalInput.Input.InputSimulator

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| { KeyEvent: KeyEvent } | 0.0 | Yes |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types; 3. Parameter verification failed. |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied.<br>**Applicable version:** 12 and later |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission denied, non-system app called system api.<br>**Applicable version:** 12 and later |

**Example**

```TypeScript
import { inputEventClient } from '@kit.InputKit';

@Entry
@Component
struct Index {
  build() {
    RelativeContainer() {
      Text()
        .onClick(() => {
          try {
            let backKeyDown: inputEventClient.KeyEvent = {
              isPressed: true,
              keyCode: 2,
              keyDownDuration: 0,
              isIntercepted: false
            }
            // Inject Event
            inputEventClient.injectEvent({ KeyEvent: backKeyDown });

            let backKeyUp: inputEventClient.KeyEvent = {
              isPressed: false,
              keyCode: 2,
              keyDownDuration: 0,
              isIntercepted: false
            };
            // Inject Event
            inputEventClient.injectEvent({ KeyEvent: backKeyUp });
          } catch (error) {
            console.error(`Failed to inject KeyEvent, Code: ${(error as BusinessError).code}, message: ${(error as BusinessError).message}.`);
          }
        })
    }
  }
}

```

