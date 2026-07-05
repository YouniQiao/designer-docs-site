# deinitializeEnvironment

## deinitializeEnvironment

```TypeScript
function deinitializeEnvironment(): Promise<void>
```

Deinitialize global environment for image processing.

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
| 29200006 | The operation is not permitted. This may be caused by incorrect status. |

**Example**

```TypeScript
import { videoProcessingEngine } from '@kit.ImageKit';

async function deinitializeEnvironment() {
  videoProcessingEngine.initializeEnvironment();
  videoProcessingEngine.deinitializeEnvironment();
}

```

