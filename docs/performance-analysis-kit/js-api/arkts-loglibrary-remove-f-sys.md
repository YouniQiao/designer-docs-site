# remove

## remove

```TypeScript
function remove(logType: string, logName: string): void
```

以同步方法删除指定日志类型的指定文件。

**Since:** 10

**Required permissions:** 

 ohos.permission.WRITE_HIVIEW_SYSTEM

**System capability:** SystemCapability.HiviewDFX.Hiview.LogLibrary

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| logType | string | Yes | 日志类型字符串，例如"FAULTLOG", "BETACLUB", "REMOTELOG"等。 |
| logName | string | Yes | 日志文件名称。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied |
| 202 | Permission denied, non-system app called system api |
| 401 | Invalid argument. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameter types.  3. Parameter verification failed. |
| 21300001 | Source file does not exists |

**Example**

```TypeScript
import { logLibrary } from '@kit.PerformanceAnalysisKit';

try {
  let logObj = logLibrary.list('FAULTLOG');
  if (logObj.length > 0) {
    logLibrary.remove('FAULTLOG', logObj[0].name);
  }
} catch (error) {
  console.error(`error code: ${error?.code}, error msg: ${error?.message}`);
}

```

