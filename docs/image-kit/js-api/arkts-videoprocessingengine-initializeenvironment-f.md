# initializeEnvironment

## initializeEnvironment

```TypeScript
function initializeEnvironment(): Promise<void>
```

Initialize global environment for image processing.

**Since:** 18

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.Multimedia.VideoProcessingEngine

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | A Promise instance used to return the operation result.  If the operation fails, an error message is returned. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 801 | Capability not supported. Function initializeEnvironment can not work correctly  due to limited device capabilities. |
| 29200002 | The global environment initialization for image processing failed,  such as failure to initialize the GPU environment. |
| 29200006 | The operation is not permitted. This may be caused by incorrect status. |
| 29200007 | Out of memory. |

**Example**

```TypeScript
import { videoProcessingEngine } from '@kit.ImageKit';

async function initializeEnvironment() {
  videoProcessingEngine.initializeEnvironment();
}

```

