# setMouseScrollDirection

## setMouseScrollDirection

```TypeScript
function setMouseScrollDirection(inverted: boolean): Promise<void>
```

设置鼠标滚轮滚动的方向，使用Promise异步回调。

**Since:** 24

**Required permissions:** 

 ohos.permission.INPUT_DEVICE_CONTROLLER

**System capability:** SystemCapability.MultimodalInput.Input.Pointer

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| inverted | boolean | Yes | inverted为鼠标滚轮滚动的方向。 true与鼠标滚轮滚动的手指方向一致，false与鼠标滚轮滚动的手指方向相反。 默认为true。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | permission denied. |
| 202 | SystemAPI permission error. |
| 3800001 | Input service exception. |

**Example**

```TypeScript
import { pointer } from '@kit.InputKit';
import { BusinessError } from '@kit.BasicServicesKit';

@Entry
@Component
struct Index {
  build() {
    RelativeContainer() {
      Button("setMouseScrollDirection")
        .onClick(() => {
          try {
            // Set the mouse scroll direction.
            pointer.setMouseScrollDirection(false).then(() => {
              console.info(`Succeeded in setting mouse scroll direction.`);
            }).catch((error: BusinessError) => {
              console.error(`Failed to set mouse scroll direction, Code: ${(error as BusinessError).code}, message: ${(error as BusinessError).message}.`);
            })
          } catch (error) {
            console.error(`Failed to set mouse scroll direction, Code: ${(error as BusinessError).code}, message: ${(error as BusinessError).message}.`);
          }
        })
    }
  }
}

```

