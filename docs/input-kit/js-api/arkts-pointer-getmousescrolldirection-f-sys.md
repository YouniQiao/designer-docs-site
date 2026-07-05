# getMouseScrollDirection

## getMouseScrollDirection

```TypeScript
function getMouseScrollDirection(): Promise<boolean>
```

获取鼠标滚轮滚动方向，使用Promise异步回调。

**Since:** 24

**Required permissions:** 

 ohos.permission.INPUT_DEVICE_CONTROLLER

**System capability:** SystemCapability.MultimodalInput.Input.Pointer

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean> | Promise对象。返回true表示鼠标滚轮滚动方向与手指方向一致；返回false表示鼠标滚轮滚动方向与手指方向相反。默认为true。 |

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
      Button("getMouseScrollDirection")
        .onClick(() => {
          try {
            // Obtain the mouse scroll direction.
            pointer.getMouseScrollDirection().then((state: boolean) => {
              console.info(`Succeeded in getting mouse scroll direction, state: ${JSON.stringify(state)}.`);
            }).catch((error: BusinessError) => {
              console.error(`Failed to get mouse scroll direction, Code: ${(error as BusinessError).code}, message: ${(error as BusinessError).message}.`);
            })
          } catch (error) {
            console.error(`Failed to get mouse scroll direction, Code: ${(error as BusinessError).code}, message: ${(error as BusinessError).message}.`);
          }
        })
    }
  }
}

```

