# setTouchpadSwipeSwitch

## setTouchpadSwipeSwitch

```TypeScript
function setTouchpadSwipeSwitch(state: boolean, callback: AsyncCallback<void>): void
```

设置触控板多指滑动功能开关，使用callback异步回调。

**Since:** 10

**System capability:** SystemCapability.MultimodalInput.Input.Pointer

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| state | boolean | Yes | 触控板多指滑动开关开启状态。 true代表多指滑动开启，false代表多指滑动关闭，默认开启。 |
| callback | AsyncCallback&lt;void> | Yes | 回调函数。当设置触控板多指滑动功能开关成功，err为undefined，否则为错误对象。 |

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
            // Set the touchpad multi-finger swipe switch.
            pointer.setTouchpadSwipeSwitch(true, (error: BusinessError) => {
              if (error) {
                console.error(`Failed to set touchpad swipe switch, Code: ${(error as BusinessError).code}, message: ${(error as BusinessError).message}.`);
                return;
              }
              console.info(`Succeeded in setting touchpad swipe switch.`);
            });
          } catch (error) {
            console.error(`Failed to set touchpad swipe switch, Code: ${(error as BusinessError).code}, message: ${(error as BusinessError).message}.`);
          }
        })
    }
  }
}

```

## setTouchpadSwipeSwitch

```TypeScript
function setTouchpadSwipeSwitch(state: boolean): Promise<void>
```

设置触控板多指滑动功能开关，使用Promise异步回调。

**Since:** 10

**System capability:** SystemCapability.MultimodalInput.Input.Pointer

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| state | boolean | Yes | 触控板多指滑动功能开关开启状态。 true代表多指滑动开启，false代表多指滑动关闭，默认开启。 |

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
            // Set the touchpad multi-finger swipe switch.
            pointer.setTouchpadSwipeSwitch(false).then(() => {
              console.info(`Succeeded in setting touchpad swipe switch.`);
            }).catch((error: BusinessError) => {
              console.error(`Failed to set touchpad swipe switch, Code: ${(error as BusinessError).code}, message: ${(error as BusinessError).message}.`);
            })
          } catch (error) {
            console.error(`Failed to set touchpad swipe switch, Code: ${(error as BusinessError).code}, message: ${(error as BusinessError).message}.`);
          }
        })
    }
  }
}

```

