# getSupportedProcessCachePids

## getSupportedProcessCachePids

```TypeScript
function getSupportedProcessCachePids(bundleName : string): Promise<Array<int>>
```

查询当前应用中支持缓存后快速启动的进程PID。使用Promise异步回调。 > **说明：** > > 本接口仅支持获取调用者所在系统账号下的进程PID。

**Since:** 14

**Required permissions:** 

 ohos.permission.GET_RUNNING_INFO

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | 表示要查询的应用包名。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;int>> | Promise对象。返回一个数组，包含当前应用中支持缓存后快速启动的所有进程PID。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 801 | Capability not supported. |
| 16000050 | Internal error. |

**Example**

```TypeScript
import { appManager } from '@kit.AbilityKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let bundleName = "ohos.samples.processcache";
  appManager.getSupportedProcessCachePids(bundleName).then((pids: Array<number>) => {
      hilog.info(0x0000, 'testTag', `pids: ${JSON.stringify(pids)}`);
    }).catch((err: BusinessError) => {
      hilog.error(0x0000, 'testTag', `get pids error, code: ${err.code}, msg:${err.message}`);
    })
} catch (err) {
  hilog.error(0x0000, 'testTag', `get pids error, code: ${err.code}, msg:${err.message}`);
}

```

