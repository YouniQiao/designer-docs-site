# create

## create

```TypeScript
function create(): ImageProcessor
```

Create an image processing instance.

**Since:** 18

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.Multimedia.VideoProcessingEngine

**Return value:**

| Type | Description |
| --- | --- |
| ImageProcessor | Returns the ImageProcessor instance if  the operation is successful; returns null otherwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 801 | Capability not supported. Function create can not work correctly due to limited  device capabilities. |
| 29200003 | Failed to create image processing instance. For example,  the number of instances exceeds the upper limit. |
| 29200007 | Out of memory. |

**Example**

```TypeScript
import { videoProcessingEngine } from '@kit.ImageKit';

async function create() {
  videoProcessingEngine.initializeEnvironment();
  let imageProcessor = videoProcessingEngine.create() as videoProcessingEngine.ImageProcessor;
}

```

