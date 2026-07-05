# stopAppTraceCapture

## stopAppTraceCapture

```TypeScript
function stopAppTraceCapture(): void
```

Stops application trace collection. Use [startAppTraceCapture()]hidebug.startAppTraceCapture to start collection before calling this API. If this API is called before trace collection or it is repeatedly called, an exception will occur. If **startAppTraceCapture ()** is called without a properly specified **limitSize**, the size of the generated trace may exceed the **limitSize** value, causing the system to automatically call **stopAppTraceCapture()**. In this case, if **stopAppTraceCapture()** is called again, an error code 11400105 will be displayed.

**起始版本：** 12

**系统能力：** SystemCapability.HiviewDFX.HiProfiler.HiDebug

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 11400104 | The status of the trace is abnormal |
| 11400105 | No capture trace running |

**示例：**

```TypeScript
import { hidebug } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

let tags: number[] = [hidebug.tags.ABILITY_MANAGER, hidebug.tags.ARKUI];
let flag: hidebug.TraceFlag = hidebug.TraceFlag.MAIN_THREAD;
let limitSize: number = 1024 * 1024;
try {
  let fileName: string = hidebug.startAppTraceCapture(tags, flag, limitSize);
  console.info(`fileName = ${fileName}`);
  // code block
  // ...
  // code block
  hidebug.stopAppTraceCapture();
} catch (error) {
  console.error(`error code: ${(error as BusinessError).code}, error msg: ${(error as BusinessError).message}`);
}

```

