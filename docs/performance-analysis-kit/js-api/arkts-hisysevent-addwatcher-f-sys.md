# addWatcher

## addWatcher

```TypeScript
function addWatcher(watcher: Watcher): void
```

订阅系统事件，接收[Watcher](arkts-hisysevent-watcher-i-sys.md#Watcher)类型的对象作为事件参数。

**Since:** 9

**Required permissions:** 

 ohos.permission.READ_DFX_SYSEVENT

**System capability:** SystemCapability.HiviewDFX.HiSysEvent

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| watcher | Watcher | Yes | 系统事件订阅者对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. An attempt was made to read system event forbidden by permission:  ohos.permission.READ_DFX_SYSEVENT. |
| 202 | System API is not allowed called by Non-system application. |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameter types.  3. Parameter verification failed. |
| 11200101 | The number of watchers exceeds the limit. |
| 11200102 | The number of watch rules exceeds the limit. |

**Example**

```TypeScript
import { hiSysEvent } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

let watchRules: hiSysEvent.WatchRule[] = [{
    domain: "RELIABILITY",
    name: "STACK",
    tag: "STABILITY",
    ruleType: hiSysEvent.RuleType.WHOLE_WORD,
  } as hiSysEvent.WatchRule];
let watcher: hiSysEvent.Watcher = {
  rules: watchRules,
  onEvent: (info: hiSysEvent.SysEventInfo) => {
    // do something here.
  },
  onServiceDied: () => {
    // do something here.
  }
};
try {
  hiSysEvent.addWatcher(watcher);
} catch (err) {
  console.error(`error code: ${(err as BusinessError).code}, error msg: ${(err as BusinessError).message}`);
}

```

