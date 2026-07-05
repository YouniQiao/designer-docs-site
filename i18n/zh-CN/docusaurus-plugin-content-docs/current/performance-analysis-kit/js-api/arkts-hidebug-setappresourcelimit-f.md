# setAppResourceLimit

## setAppResourceLimit

```TypeScript
function setAppResourceLimit(type: string, value: int, enableDebugLog: boolean): void
```

Sets the number of FDs, number of threads, JS memory, or native memory limit of the application. > **NOTE** > > Enable **System resource leak log** in **Developer options** and restart the device for the API to take effect.

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.HiviewDFX.HiProfiler.HiDebug

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | string | 是 | Types of leak resources: - pss_memory (native memory) - js_heap (JavaScript heap  memory) - fd (file descriptor) - thread (thread) |
| value | int | 是 | Value range of the maximum values of the leak resource types: - pss_memory:  [1024, 4 × 1024 × 1024] (Unit: KB) - js_heap: [85, 95] (85% to 95% of the upper size limit of the JS  heap memory) - fd: [10, 10000] - thread: [1, 1000]. If the value is out of range, the feature  becomes invalid. |
| enableDebugLog | boolean | 是 | Whether to enable external debugging logs. Enable external debugging logs only  in the grayscale version (test version released to a small number of users before the official version is  released). Collecting debugging logs occupies a large number of CPU and memory resources, which may cause  application smoothness problems. The value true means to enable external debugging logs, and false means  the opposite. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Invalid argument, Possible causes:  1.The limit parameter is too small  2.The parameter is not in the specified type  3.The parameter type error or parameter order error |
| 11400104 | Set limit failed due to remote exception |

**示例：**

```TypeScript
import { hidebug } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

let type: string = 'js_heap';
let value: number = 85;
let enableDebugLog: boolean = false;
try {
  hidebug.setAppResourceLimit(type, value, enableDebugLog);
} catch (error) {
  console.error(`error code: ${(error as BusinessError).code}, error msg: ${(error as BusinessError).message}`);
}

```

