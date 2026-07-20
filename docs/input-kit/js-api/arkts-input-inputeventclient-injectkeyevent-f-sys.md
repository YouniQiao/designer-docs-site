# injectKeyEvent (System API)

## Modules to Import

```TypeScript
import { inputEventClient } from '@kit.InputKit';
```

## injectKeyEvent

```TypeScript
function injectKeyEvent(keyEvent: KeyEventData): void
```

Injects key events (for both single keys and combination keys).

**Since:** 11

**Required permissions:** 
- API version 12+: ohos.permission.INJECT_INPUT_EVENT

<!--Device-inputEventClient-function injectKeyEvent(keyEvent: KeyEventData): void--><!--Device-inputEventClient-function injectKeyEvent(keyEvent: KeyEventData): void-End-->

**System capability:** SystemCapability.MultimodalInput.Input.InputSimulator

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| keyEvent | [KeyEventData](arkts-input-inputeventclient-keyeventdata-i-sys.md) | Yes | Key event to inject. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | SystemAPI permission error. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types; 3. Parameter verification failed. |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied.<br>**Applicable version:** 12 and later |

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

            class EventDown {
              keyEvent: inputEventClient.KeyEvent | null = null
            }

            let eventDown: EventDown = { keyEvent: backKeyDown }
            // Inject key event
            inputEventClient.injectKeyEvent(eventDown);

            let backKeyUp: inputEventClient.KeyEvent = {
              isPressed: false,
              keyCode: 2,
              keyDownDuration: 0,
              isIntercepted: false
            };

            class EventUp {
              keyEvent: inputEventClient.KeyEvent | null = null
            }

            let eventUp: EventUp = { keyEvent: backKeyUp }
            // Inject key event
            inputEventClient.injectKeyEvent(eventUp);
          } catch (error) {
            console.error(`Failed to inject KeyEvent, Code: ${(error as BusinessError).code}, message: ${(error as BusinessError).message}.`);
          }
        })
    }
  }
}

```

