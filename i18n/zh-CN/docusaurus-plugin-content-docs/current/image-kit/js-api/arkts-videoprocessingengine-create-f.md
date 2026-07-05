# create

## create

```TypeScript
function create(): ImageProcessor
```

Create an image processing instance.

**起始版本：** 18

**卡片能力：** 该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.Multimedia.VideoProcessingEngine

**返回值：**

| 类型 | 说明 |
| --- | --- |
| ImageProcessor | Returns the ImageProcessor instance if  the operation is successful; returns null otherwise. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported. Function create can not work correctly due to limited  device capabilities. |
| 29200003 | Failed to create image processing instance. For example,  the number of instances exceeds the upper limit. |
| 29200007 | Out of memory. |

**示例：**

```TypeScript
import { videoProcessingEngine } from '@kit.ImageKit';

async function create() {
  videoProcessingEngine.initializeEnvironment();
  let imageProcessor = videoProcessingEngine.create() as videoProcessingEngine.ImageProcessor;
}

```

