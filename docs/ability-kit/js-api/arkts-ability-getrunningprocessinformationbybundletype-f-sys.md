# getRunningProcessInformationByBundleType (System API)

## Modules to Import

```TypeScript
import { appManager } from '@ohos.app.ability.appManager';
```

## getRunningProcessInformationByBundleType

```TypeScript
function getRunningProcessInformationByBundleType(
    bundleType: bundleManager.BundleType): Promise<Array<ProcessInformation>>
```

Obtains the information about the running process based on the bundle type. This API uses a promise to return the result.

**Since:** 12

**Required permissions:** ohos.permission.GET_RUNNING_INFO

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleType | bundleManager.BundleType | Yes | Bundle type. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;ProcessInformation&gt;&gt; | Promise used to return the process information. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not system application. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;2. Incorrect parameter types; 3. Parameter verification failed. |
| [16000050](../errorcode-ability.md#16000050-internal-error) | Internal error. |

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

