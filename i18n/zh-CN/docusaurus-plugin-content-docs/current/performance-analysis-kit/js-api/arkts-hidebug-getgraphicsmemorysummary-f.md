# getGraphicsMemorySummary

## getGraphicsMemorySummary

```TypeScript
function getGraphicsMemorySummary(interval?: int): Promise<GraphicsMemorySummary>
```

Obtains the size of the GPU memory summary. This API uses a promise to return the result.

**起始版本：** 21

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.HiviewDFX.HiProfiler.HiDebug

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| interval | int | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;GraphicsMemorySummary> | Returns the size of the GPU memory summary, in KB. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 11400104 | Failed to get the application memory due to a remote exception. |

**示例：**

```TypeScript
import { hidebug } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

hidebug.getGraphicsMemorySummary().then((ret: hidebug.GraphicsMemorySummary) => {
  console.info(`get graphicsMemory gl: ${ret.gl} graph: ${ret.graph}.`)
}).catch((error: BusinessError) => {
  console.error(`error code: ${error.code}, error msg: ${error.message}.`);
})

```

