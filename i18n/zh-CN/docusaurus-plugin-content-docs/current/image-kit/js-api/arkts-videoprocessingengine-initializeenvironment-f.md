# initializeEnvironment

## initializeEnvironment

```TypeScript
function initializeEnvironment(): Promise<void>
```

Initialize global environment for image processing.

**起始版本：** 18

**卡片能力：** 该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.Multimedia.VideoProcessingEngine

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | A Promise instance used to return the operation result.  If the operation fails, an error message is returned. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported. Function initializeEnvironment can not work correctly  due to limited device capabilities. |
| 29200002 | The global environment initialization for image processing failed,  such as failure to initialize the GPU environment. |
| 29200006 | The operation is not permitted. This may be caused by incorrect status. |
| 29200007 | Out of memory. |

**示例：**

```TypeScript
import { videoProcessingEngine } from '@kit.ImageKit';

async function initializeEnvironment() {
  videoProcessingEngine.initializeEnvironment();
}

```

