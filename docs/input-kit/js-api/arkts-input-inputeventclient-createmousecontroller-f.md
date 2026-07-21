# createMouseController

## Modules to Import

```TypeScript
import { inputEventClient } from '@kit.InputKit';
```

<a id="createmousecontroller"></a>
## createMouseController

```TypeScript
function createMouseController(): Promise<MouseController>
```

Creates a mouse controller for simulating mouse operations. This API uses a promise to return the result.

**Since:** 26.0.0

**Required permissions:** ohos.permission.CONTROL_DEVICE

**Model restriction:** This API can be used only in the stage model.

<!--Device-inputEventClient-function createMouseController(): Promise<MouseController>--><!--Device-inputEventClient-function createMouseController(): Promise<MouseController>-End-->

**System capability:** SystemCapability.MultimodalInput.Input.InputSimulator

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;MouseController&gt; | Promise used to return the mouse controller instance. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed.The application does not have the permission required to call the API. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| [3800001](../errorcode-infraredemitter.md#3800001-multimodal-input-service-internal-error) | Input service exception. |

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
          inputEventClient.createMouseController()
            .then(mouseController => {
              console.info('Succeeded in creating mouse controller');
            })
            .catch((error: BusinessError) => {
              console.error(`Failed to create mouse controller. Code: ${error.code}, message: ${error.message}.`);
            });
        })
    }
  }
}

```

