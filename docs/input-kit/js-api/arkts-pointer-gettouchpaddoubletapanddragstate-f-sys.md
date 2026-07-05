# getTouchpadDoubleTapAndDragState

## getTouchpadDoubleTapAndDragState

```TypeScript
function getTouchpadDoubleTapAndDragState(callback: AsyncCallback<boolean>): void
```

获取触控板双击拖拽开关的开启状态，使用callback异步回调。

**Since:** 14

**System capability:** SystemCapability.MultimodalInput.Input.Pointer

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;boolean> | Yes | 回调函数。当获取触控板双击拖拽开关的开启状态成功，err为undefined，返回true代表开启，返回false代表关闭；否则为错误对象。 |

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
            // Obtain the touchpad double-tap and drag switch state.
            pointer.getTouchpadDoubleTapAndDragState((error: BusinessError, state: boolean) => {
              if (error) {
                console.error(`Failed to get touchpad double tap and drag state, Code: ${(error as BusinessError).code}, message: ${(error as BusinessError).message}.`);
              } else {
                console.info(`Succeeded in getting touchpad double tap and drag state, state: ${JSON.stringify(state)}.`);
              }
            });
          } catch (error) {
            console.error(`Failed to get touchpad double tap and drag state, Code: ${(error as BusinessError).code}, message: ${(error as BusinessError).message}.`);
          }
        })
    }
  }
}

```

## getTouchpadDoubleTapAndDragState

```TypeScript
function getTouchpadDoubleTapAndDragState(): Promise<boolean>
```

获取触控板双击拖拽开关的开启状态，使用Promise异步回调。

**Since:** 14

**System capability:** SystemCapability.MultimodalInput.Input.Pointer

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean> | Promise对象。返回true表示触控板双击拖拽功能开启；返回false表示触控板双击拖拽功能关闭。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | SystemAPI permission error. |

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
            // Obtain the touchpad double-tap and drag switch state.
            pointer.getTouchpadDoubleTapAndDragState().then((state) => {
              console.info(`Succeeded in getting touchpad double tap and drag state, state: ${JSON.stringify(state)}.`);
            }).catch((error: BusinessError) => {
              console.error(`Failed to get touchpad double tap and drag state, Code: ${(error as BusinessError).code}, message: ${(error as BusinessError).message}.`);
            })
          } catch (error) {
            console.error(`Failed to get touchpad double tap and drag state, Code: ${(error as BusinessError).code}, message: ${(error as BusinessError).message}.`);
          }
        })
    }
  }
}

```

