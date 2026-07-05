# getRunningProcessInformationByBundleType

## getRunningProcessInformationByBundleType

```TypeScript
function getRunningProcessInformationByBundleType(
    bundleType: bundleManager.BundleType): Promise<Array<ProcessInformation>>
```

根据包类型获取当前运行进程的有关信息。使用Promise异步回调。

**Since:** 12

**Required permissions:** 

 ohos.permission.GET_RUNNING_INFO

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleType | bundleManager.BundleType | Yes | 表示要查询的包类型。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;ProcessInformation>> | Promise对象，返回特定包类型的运行进程的信息。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 16000050 | Internal error. |

**Example**

```TypeScript
import { appManager, bundleManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  appManager.getRunningProcessInformationByBundleType(bundleManager.BundleType.ATOMIC_SERVICE)
    .then((data) => {
      console.info(`The running process information is: ${JSON.stringify(data)}`);
    }).catch((error: BusinessError) => {
    console.error(`error: ${JSON.stringify(error)}`);
  });
} catch (paramError) {
  let code = (paramError as BusinessError).code;
  let message = (paramError as BusinessError).message;
  console.error(`[appManager] error: ${code}, ${message}`);
}

```

