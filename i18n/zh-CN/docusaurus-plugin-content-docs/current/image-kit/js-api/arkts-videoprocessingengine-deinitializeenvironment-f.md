# deinitializeEnvironment

## deinitializeEnvironment

```TypeScript
function deinitializeEnvironment(): Promise<void>
```

Deinitialize global environment for image processing.

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
| 29200006 | The operation is not permitted. This may be caused by incorrect status. |

**示例：**

```TypeScript
import { videoProcessingEngine } from '@kit.ImageKit';

async function deinitializeEnvironment() {
  videoProcessingEngine.initializeEnvironment();
  videoProcessingEngine.deinitializeEnvironment();
}

```

