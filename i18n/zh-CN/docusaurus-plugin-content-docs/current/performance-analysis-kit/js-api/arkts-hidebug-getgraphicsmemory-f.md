# getGraphicsMemory

## getGraphicsMemory

```TypeScript
function getGraphicsMemory(): Promise<int>
```

Obtains the total GPU memory size (**gl** + **graph**) of the application. This API uses a promise to return the result.

**起始版本：** 14

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.HiviewDFX.HiProfiler.HiDebug

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;int> | Promise used to return the total GPU memory size of the application, in KB. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 11400104 | Failed to get the application memory due to a remote exception. |

**示例：**

```TypeScript
import { hidebug } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

hidebug.getGraphicsMemory().then((ret: number) => {
  console.info(`graphicsMemory: ${ret}`)
}).catch((error: BusinessError) => {
  console.error(`error code: ${error.code}, error msg: ${error.message}`);
})

```

