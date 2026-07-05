# unsubscribe

## unsubscribe

```TypeScript
function unsubscribe(): void
```

取消订阅系统事件。

**Since:** 10

**Required permissions:** 

 ohos.permission.READ_DFX_SYSEVENT

**System capability:** SystemCapability.HiviewDFX.HiSysEvent

**System API:** This is a system API.

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. An attempt was made to read system event forbidden by permission:  ohos.permission.READ_DFX_SYSEVENT. |
| 202 | System API is not allowed called by Non-system application. |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameter types.  3. Parameter verification failed. |
| 11200305 |  |

**Example**

```TypeScript
import { hiSysEvent } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let rules: hiSysEvent.QueryRule[] = [{
    domain: "RELIABILITY",
    names: ["STACK"],
  } as hiSysEvent.QueryRule,
  {
    domain: "BUNDLE_MANAGER",
    names: ["BUNDLE_UNINSTALL"],
  } as hiSysEvent.QueryRule];
  hiSysEvent.subscribe(rules);
  hiSysEvent.unsubscribe();
} catch (err) {
  console.error(`error code: ${(err as BusinessError).code}, error msg: ${(err as BusinessError).message}`);
}

```

