# unsubscribe

## unsubscribe

```TypeScript
function unsubscribe(): void
```

取消订阅系统事件。

**起始版本：** 10

**需要权限：** 

 ohos.permission.READ_DFX_SYSEVENT

**系统能力：** SystemCapability.HiviewDFX.HiSysEvent

**系统接口：** 此接口为系统接口。

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. An attempt was made to read system event forbidden by permission:  ohos.permission.READ_DFX_SYSEVENT. |
| 202 | System API is not allowed called by Non-system application. |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameter types.  3. Parameter verification failed. |
| 11200305 |  |

**示例：**

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
  // 捕获并打印错误信息
  console.error(`error code: ${(err as BusinessError).code}, error msg: ${(err as BusinessError).message}`);
}

```

