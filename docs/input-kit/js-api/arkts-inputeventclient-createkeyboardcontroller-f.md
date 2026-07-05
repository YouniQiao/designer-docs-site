# createKeyboardController

## createKeyboardController

```TypeScript
function createKeyboardController(): Promise<KeyboardController>
```

创建键盘控制器，用于模拟按键操作。使用Promise异步回调。

**Since:** 26.0.0

**Required permissions:** 

 ohos.permission.CONTROL_DEVICE

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.MultimodalInput.Input.InputSimulator

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;KeyboardController> | Promise对象，返回键盘控制器实例。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed.  The application does not have the permission required to call the API. |
| 801 | Capability not supported. |
| 3800001 | Input service exception. |

**Example**

```TypeScript
import { inputEventClient } from '@kit.InputKit';
import { BusinessError } from '@kit.BasicServicesKit';

@Entry
@Component
struct Index {
  build() {
    RelativeContainer() {
      Text()
        .onClick(() => {
          inputEventClient.createKeyboardController()
            .then(keyboardController => {
              console.info('Succeeded in creating keyboard controller');
            })
            .catch((error: BusinessError) => {
              console.error(`Failed to create keyboard controller. Code: ${error.code}, message: ${error.message}.`);
            });
        })
    }
  }
}

```

