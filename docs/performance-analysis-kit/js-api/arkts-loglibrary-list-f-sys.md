# list

## list

```TypeScript
function list(logType: string): LogEntry[]
```

以同步方法查询指定类型的日志文件列表，接收string类型的对象作为参数，返回指定类型日志的文件列表信息。

**Since:** 10

**Required permissions:** 

 ohos.permission.READ_HIVIEW_SYSTEM

**System capability:** SystemCapability.HiviewDFX.Hiview.LogLibrary

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| logType | string | Yes | 日志类型字符串，例如“HILOG”, "FAULTLOG", "BETACLUB", "REMOTELOG"等。 |

**Return value:**

| Type | Description |
| --- | --- |
| LogEntry[] | 日志文件对象的数组。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied |
| 202 | Permission denied, non-system app called system api |
| 401 | Invalid argument. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameter types.  3. Parameter verification failed. |

**Example**

```TypeScript
import { logLibrary } from '@kit.PerformanceAnalysisKit';

try {
  let logObj = logLibrary.list('HILOG');
  // do something here.
} catch (error) {
  console.error(`error code: ${error?.code}, error msg: ${error?.message}`);
}

```

