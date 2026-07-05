# injectMouseEvent

## injectMouseEvent

```TypeScript
function injectMouseEvent(mouseEvent: MouseEventData): void
```

鼠标/触控板事件注入。

**Since:** 11

**Required permissions:** 

- API version12 and later: ohos.permission.INJECT_INPUT_EVENT

**System capability:** SystemCapability.MultimodalInput.Input.InputSimulator

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mouseEvent | MouseEventData | Yes | 鼠标/触控板事件注入描述信息。此参数中[Action](arkts-action-e.md#Action)属性  不支持设置为CANCEL。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | SystemAPI permission error. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 201 | Permission denied. [since 12] |

**Example**

```TypeScript
import { inputEventClient } from '@kit.InputKit';
import { MouseEvent } from '@kit.InputKit';

@Entry
@Component
struct Index {
  build() {
    RelativeContainer() {
      Text()
        .onClick(() => {
          try {
            let mouseButtonUpData: MouseEvent = {
              id: 0,
              deviceId: 1,
              actionTime: 2,
              screenId: 1,
              windowId: 0,
              action: 3,
              screenX: 100,
              screenY: 200,
              windowX: 100,
              windowY: 200,
              rawDeltaX: 200,
              rawDeltaY: 200,
              button: 2,
              pressedButtons: [2],
              axes: [],
              pressedKeys: [0],
              ctrlKey: false,
              altKey: false,
              shiftKey: false,
              logoKey: false,
              fnKey: false,
              capsLock: false,
              numLock: false,
              scrollLock: false,
              toolType: 1,
            }
            let mouseButtonUp: inputEventClient.MouseEventData = {
              mouseEvent: mouseButtonUpData
            }
            // Inject Mouse Event
            inputEventClient.injectMouseEvent(mouseButtonUp);

            let mouseButtonDownData: MouseEvent = {
              id: 0,
              deviceId: 1,
              actionTime: 2,
              screenId: 1,
              windowId: 0,
              action: 2,
              screenX: 100,
              screenY: 200,
              windowX: 100,
              windowY: 200,
              rawDeltaX: 200,
              rawDeltaY: 200,
              button: 2,
              pressedButtons: [2],
              axes: [],
              pressedKeys: [0],
              ctrlKey: false,
              altKey: false,
              shiftKey: false,
              logoKey: false,
              fnKey: false,
              capsLock: false,
              numLock: false,
              scrollLock: false,
              toolType: 1,
            }
            let mouseButtonDown: inputEventClient.MouseEventData = {
              mouseEvent: mouseButtonDownData
            };
            // Inject Mouse Event
            inputEventClient.injectMouseEvent(mouseButtonDown);
          }

          catch (error) {
            console.error(`Failed to inject MouseEvent, Code: ${(error as BusinessError).code}, message: ${(error as BusinessError).message}.`);
          }
        })
    }
  }
}

```

