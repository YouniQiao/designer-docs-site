# injectKeyEvent

## injectKeyEvent

```TypeScript
function injectKeyEvent(keyEvent: KeyEventData): void
```

按键(包括单个按键和组合键)事件注入。

**Since:** 11

**Required permissions:** 

- API version12 and later: ohos.permission.INJECT_INPUT_EVENT

**System capability:** SystemCapability.MultimodalInput.Input.InputSimulator

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| keyEvent | KeyEventData | Yes | 按键事件注入描述信息。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | SystemAPI permission error. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 201 | Permission denied. [since 12] |

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

