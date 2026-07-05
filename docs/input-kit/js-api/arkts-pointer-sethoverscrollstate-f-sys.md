# setHoverScrollState

## setHoverScrollState

```TypeScript
function setHoverScrollState(state: boolean, callback: AsyncCallback<void>): void
```

设置鼠标悬停滚动开关状态，使用callback异步回调。

**Since:** 10

**System capability:** SystemCapability.MultimodalInput.Input.Pointer

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| state | boolean | Yes | 鼠标悬停滚动开关状态。true代表开关开启，false代表开关关闭，默认开启。 |
| callback | AsyncCallback&lt;void> | Yes | 回调函数。当设置鼠标悬停滚动开关状态成功，err为undefined，否则为错误对象。 |

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
            // Set the mouse hover scrolling switch state.
            pointer.setHoverScrollState(true, (error: BusinessError) => {
              if (error) {
                console.error(`Failed to set mouse hover scroll, Code: ${(error as BusinessError).code}, message: ${(error as BusinessError).message}.`);
                return;
              }
              console.info(`Succeeded in setting mouse hover scroll.`);
            });
          } catch (error) {
            console.error(`Failed to set mouse hover scroll, Code: ${(error as BusinessError).code}, message: ${(error as BusinessError).message}.`);
          }
        })
    }
  }
}

```

## setHoverScrollState

```TypeScript
function setHoverScrollState(state: boolean): Promise<void>
```

设置鼠标悬停滚动开关状态，使用Promise异步回调。

**Since:** 10

**System capability:** SystemCapability.MultimodalInput.Input.Pointer

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| state | boolean | Yes | 鼠标悬停滚动开关状态。true代表开关开启，false代表开关关闭，默认开启。 |

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
            // Set the mouse hover scrolling switch state.
            pointer.setHoverScrollState(true).then(() => {
              console.info(`Succeeded in setting mouse hover scroll.`);
            }).catch((error: BusinessError) => {
              console.error(`Failed to set mouse hover scroll, Code: ${(error as BusinessError).code}, message: ${(error as BusinessError).message}.`);
            })
          } catch (error) {
            console.error(`Failed to set mouse hover scroll, Code: ${(error as BusinessError).code}, message: ${(error as BusinessError).message}.`);
          }
        })
    }
  }
}

```

