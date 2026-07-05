# createTouchController

## createTouchController

```TypeScript
function createTouchController(): Promise<TouchController>
```

创建触控控制器，用于模拟触控操作。使用Promise异步回调。

**Since:** 26.0.0

**Required permissions:** 

 ohos.permission.CONTROL_DEVICE

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.MultimodalInput.Input.InputSimulator

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;TouchController> | Promise对象，返回触控控制器实例。 |

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
          inputEventClient.createTouchController()
            .then(touchController => {
              console.info('Succeeded in creating touch controller');
            })
            .catch((error: BusinessError) => {
              console.error(`Failed to create touch controller. Code: ${error.code}, message: ${error.message}.`);
            });
        })
    }
  }
}

```

