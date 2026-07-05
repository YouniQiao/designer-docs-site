# setTouchpadDoubleTapAndDragState

## setTouchpadDoubleTapAndDragState

```TypeScript
function setTouchpadDoubleTapAndDragState(isOpen: boolean, callback: AsyncCallback<void>): void
```

设置触控板双击拖拽开关状态，使用callback异步回调。

**Since:** 14

**System capability:** SystemCapability.MultimodalInput.Input.Pointer

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| isOpen | boolean | Yes | 双击拖拽开关的状态，true代表开启，false代表关闭。 |
| callback | AsyncCallback&lt;void> | Yes | 回调函数。当设置触控板双击拖拽开关状态成功，err为undefined，否则为错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | SystemAPI permission error. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

**Example**

```TypeScript
import { pointer } from '@kit.InputKit';
import { BusinessError } from '@kit.BasicServicesKit';

@Entry
@Component
struct Index {
  build() {
    RelativeContainer() {
      Text()
        .onClick(() => {
          try {
            // Set the touchpad double-tap and drag switch state.
            pointer.setTouchpadDoubleTapAndDragState(true, (error: BusinessError) => {
              if (error) {
                console.error(`Failed to set touchpad double tap and drag state, Code: ${(error as BusinessError).code}, message: ${(error as BusinessError).message}.`);
                return;
              }
              console.info(`Succeeded in setting touchpad double tap and drag state.`);
            });
          } catch (error) {
            console.error(`Failed to set touchpad double tap and drag state, Code: ${(error as BusinessError).code}, message: ${(error as BusinessError).message}.`);
          }
        })
    }
  }
}

```

## setTouchpadDoubleTapAndDragState

```TypeScript
function setTouchpadDoubleTapAndDragState(isOpen: boolean): Promise<void>
```

设置触控板双击拖拽开关状态，使用Promise异步回调。

**Since:** 14

**System capability:** SystemCapability.MultimodalInput.Input.Pointer

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| isOpen | boolean | Yes | 双击拖拽开关的状态，true代表开启，false代表关闭。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | SystemAPI permission error. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

**Example**

```TypeScript
import { pointer } from '@kit.InputKit';
import { BusinessError } from '@kit.BasicServicesKit';

@Entry
@Component
struct Index {
  build() {
    RelativeContainer() {
      Text()
        .onClick(() => {
          try {
            // Set the touchpad double-tap and drag switch state.
            pointer.setTouchpadDoubleTapAndDragState(false).then(() => {
              console.info(`Succeeded in setting touchpad double tap and drag state.`);
            }).catch((error: BusinessError) => {
              console.error(`Failed to set touchpad double tap and drag state, Code: ${(error as BusinessError).code}, message: ${(error as BusinessError).message}.`);
            })
          } catch (error) {
            console.error(`Failed to set touchpad double tap and drag state, Code: ${(error as BusinessError).code}, message: ${(error as BusinessError).message}.`);
          }
        })
    }
  }
}

```

