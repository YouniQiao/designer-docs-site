# query

## query

```TypeScript
function query(queryArg: QueryArg, rules: QueryRule[], querier: Querier): void
```

查询系统事件。

**Since:** 9

**Required permissions:** 

 ohos.permission.READ_DFX_SYSEVENT

**System capability:** SystemCapability.HiviewDFX.HiSysEvent

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| queryArg | QueryArg | Yes | 查询需要配置的查询参数。 |
| rules | QueryRule[] | Yes | 查询规则数组，每次查询可配置多个查询规则。 |
| querier | Querier | Yes | 查询者对象，包含查询结果及结束的相关回调。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. An attempt was made to read system event forbidden by permission:  ohos.permission.READ_DFX_SYSEVENT. |
| 202 | System API is not allowed called by Non-system application. |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameter types.  3. Parameter verification failed. |
| 11200301 | The number of query rules exceeds the limit. |
| 11200302 | Invalid query rule. |
| 11200303 | The number of concurrent queriers exceeds the limit. |
| 11200304 | The query frequency exceeds the limit. |

**Example**

```TypeScript
import { hiSysEvent } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let customizedParams: Record<string, string | number> = {
    'PID': 487,
    'UID': 103,
    'PACKAGE_NAME': "com.ohos.hisysevent.test",
    'PROCESS_NAME': "syseventservice",
    'MSG': "no msg."
  };
  let eventInfo: hiSysEvent.SysEventInfo = {
    domain: "RELIABILITY",
    name: "STACK",
    eventType: hiSysEvent.EventType.FAULT,
    params: customizedParams
  };
  hiSysEvent.write(eventInfo, (err: BusinessError) => {
    // do something here.
  });

  let queryArg: hiSysEvent.QueryArg = {
    beginTime: -1,
    endTime: -1,
    maxEvents: 5,
  };
  let queryRules: hiSysEvent.QueryRule[] = [{
    domain: "RELIABILITY",
    names: ["STACK"],
    condition: '{"version":"V1","condition":{"and":[{"param":"PID","op":"=","value":487},{"param":"PROCESS_NAME","op":"=","value":"syseventservice"}]}}'
  } as hiSysEvent.QueryRule];
  let querier: hiSysEvent.Querier = {
    onQuery: (infos: hiSysEvent.SysEventInfo[]) => {
      // do something here.
    },
    onComplete: (reason: number, total: number) => {
      // do something here.
    }
  };
  hiSysEvent.query(queryArg, queryRules, querier);
} catch (err) {
  console.error(`error code: ${(err as BusinessError).code}, error msg: ${(err as BusinessError).message}`);
}

```

