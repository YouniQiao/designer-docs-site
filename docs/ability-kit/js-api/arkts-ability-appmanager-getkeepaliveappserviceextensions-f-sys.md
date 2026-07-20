# getKeepAliveAppServiceExtensions (System API)

## Modules to Import

```TypeScript
import { appManager } from '@kit.AbilityKit';
```

## getKeepAliveAppServiceExtensions

```TypeScript
function getKeepAliveAppServiceExtensions(): Promise<Array<KeepAliveBundleInfo>>
```

Obtains information about all AppServiceExtensionAbility components that are kept alive. The information is defined by [KeepAliveBundleInfo](arkts-ability-appmanager-keepalivebundleinfo-i-sys.md). This API uses a promise to return the result.This API can be properly called on PCs/2-in-1 devices. If it is called on other devices, error code 801 is returned.

**Since:** 20

**Required permissions:** ohos.permission.MANAGE_APP_KEEP_ALIVE

<!--Device-appManager-function getKeepAliveAppServiceExtensions(): Promise<Array<KeepAliveBundleInfo>>--><!--Device-appManager-function getKeepAliveAppServiceExtensions(): Promise<Array<KeepAliveBundleInfo>>-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<Array<KeepAliveBundleInfo>> | Promise used to return the array of keep-alive application information. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not system application. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| [16000050](../errorcode-ability.md#16000050-internal-error) | Internal error. |

**Example**

```TypeScript
import { appManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  appManager.getKeepAliveAppServiceExtensions().then((data) => {
    console.info(`getKeepAliveAppServiceExtensions success, data: ${JSON.stringify(data)}`);
  }).catch((err: BusinessError) => {
    console.error(`getKeepAliveAppServiceExtensions fail, err: ${JSON.stringify(err)}`);
  });
} catch (paramError) {
  let code = (paramError as BusinessError).code;
  let message = (paramError as BusinessError).message;
  console.error(`[appManager] getKeepAliveAppServiceExtensions error: ${code}, ${message}`);
}

```

