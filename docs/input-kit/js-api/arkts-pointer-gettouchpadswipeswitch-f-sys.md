# getTouchpadSwipeSwitch

## getTouchpadSwipeSwitch

```TypeScript
function getTouchpadSwipeSwitch(callback: AsyncCallback<boolean>): void
```

获取触控板多指滑动功能开启状态，使用callback异步回调。

**Since:** 10

**System capability:** SystemCapability.MultimodalInput.Input.Pointer

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;boolean> | Yes | 回调函数。当获取触控板多指滑动功能开启状态成功，err为undefined，state是true代表多指滑动开启，false代表多指滑动关  闭，默认开启；否则为错误对象。 |

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
            // Obtain the touchpad multi-finger swipe switch state.
            pointer.getTouchpadSwipeSwitch((error: BusinessError, state: boolean) => {
              console.info(`Succeeded in getting touchpad swipe switch, state: ${JSON.stringify(state)}.`);
            });
          } catch (error) {
            console.error(`Failed to get touchpad swipe switch, Code: ${(error as BusinessError).code}, message: ${(error as BusinessError).message}.`);
          }
        })
    }
  }
}

```

## getTouchpadSwipeSwitch

```TypeScript
function getTouchpadSwipeSwitch(): Promise<boolean>
```

获取触控板多指滑动功能开启状态，使用Promise异步回调。

**Since:** 10

**System capability:** SystemCapability.MultimodalInput.Input.Pointer

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean> | Promise对象。返回true表示触控板多指滑动功能开启；返回false表示触控板多指滑动功能关闭。默认开启。 |

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
            // Obtain the touchpad multi-finger swipe switch state.
            pointer.getTouchpadSwipeSwitch().then((state: boolean) => {
              console.info(`Succeeded in getting touchpad swipe switch, state: ${JSON.stringify(state)}.`);
            }).catch((error: BusinessError) => {
              console.error(`Failed to get touchpad swipe switch, Code: ${(error as BusinessError).code}, message: ${(error as BusinessError).message}.`);
            })
          } catch (error) {
            console.error(`Failed to get touchpad swipe switch, Code: ${(error as BusinessError).code}, message: ${(error as BusinessError).message}.`);
          }
        })
    }
  }
}

```

