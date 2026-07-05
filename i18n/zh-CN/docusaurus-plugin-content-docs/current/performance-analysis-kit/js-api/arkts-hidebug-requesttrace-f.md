# requestTrace

## requestTrace

```TypeScript
function requestTrace(config: RequestTraceConfig): Promise<string>
```

Requests trace collection with the specified configuration.

**起始版本：** 24

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.HiviewDFX.HiProfiler.HiDebug

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| config | RequestTraceConfig | 是 | Trace request configuration. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;string> | Returns the path of the trace file. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 11400104 | Remote service exception. |
| 11400120 | Trace storage limit reached. |
| 11400302 | Resource unavailable. |

**示例：**

```TypeScript
import { hidebug, hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  hidebug.requestTrace({
    identifier: "trace_name",
    bufferSizeKb: 1024,
    durationMs: 1000,
    reserved: 0,
  }).then((tracePath: string) => {
    hilog.info(0x0000, 'hidebug', `tracePath: ${tracePath}`)
  }).catch((err: BusinessError) => {
    hilog.error(0x0000, 'hidebug', `error code: ${err.code}, message: ${err.message}`)
  })
} catch (error) {
  hilog.error(0x0000, 'hidebug', `error code: ${(error as BusinessError).code}, message: ${(error as BusinessError).message}`)
}

```

