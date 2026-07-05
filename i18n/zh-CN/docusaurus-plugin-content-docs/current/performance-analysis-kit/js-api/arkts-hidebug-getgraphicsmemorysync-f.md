# getGraphicsMemorySync

## getGraphicsMemorySync

```TypeScript
function getGraphicsMemorySync(): int
```

Obtains the total GPU memory size (GL + graph) of an application in synchronous mode. > **NOTE** > > This API involves multiple cross-process communications, which may take seconds. To avoid performance problems, > you are advised to use the asynchronous API **getGraphicsMemory** instead of this API in the main thread.

**起始版本：** 14

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.HiviewDFX.HiProfiler.HiDebug

**返回值：**

| 类型 | 说明 |
| --- | --- |
| int | Total size of the application's GPU memory, in KB. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 11400104 | Failed to get the application memory due to a remote exception. |

**示例：**

```TypeScript
import { hidebug } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  console.info(`graphicsMemory: ${hidebug.getGraphicsMemorySync()}`)
} catch (error) {
  console.error(`error code: ${(error as BusinessError).code}, error msg: ${(error as BusinessError).message}`);
}

```

