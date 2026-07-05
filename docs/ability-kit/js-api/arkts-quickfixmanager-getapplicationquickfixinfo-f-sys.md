# getApplicationQuickFixInfo

## getApplicationQuickFixInfo

```TypeScript
function getApplicationQuickFixInfo(bundleName: string, callback: AsyncCallback<ApplicationQuickFixInfo>): void
```

获取应用的快速修复信息。使用callback异步回调。

**Since:** 9

**Required permissions:** 

 ohos.permission.GET_BUNDLE_INFO_PRIVILEGED

**System capability:** SystemCapability.Ability.AbilityRuntime.QuickFix

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | 应用Bundle名称。 |
| callback | AsyncCallback&lt;ApplicationQuickFixInfo> | Yes | 回调函数。返回应用的快速修复信息。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |
| 18500001 | The bundle does not exist or no patch has been applied. |
| 18500008 | Internal error. |

**Example**

```TypeScript
import { quickFixManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let bundleName = 'bundleName';
  quickFixManager.getApplicationQuickFixInfo(bundleName, (error, data) => {
    if (error) {
      console.error(`getApplicationQuickFixInfo error: ${error}`);
    } else {
      console.info(`getApplicationQuickFixInfo success: ${data}`);
    }
  });
} catch (paramError) {
  console.error(`error: ${(paramError as BusinessError).code}, ${(paramError as BusinessError).message}`);
}

```

## getApplicationQuickFixInfo

```TypeScript
function getApplicationQuickFixInfo(bundleName: string): Promise<ApplicationQuickFixInfo>
```

获取应用的快速修复信息。使用Promise异步回调。

**Since:** 9

**Required permissions:** 

 ohos.permission.GET_BUNDLE_INFO_PRIVILEGED

**System capability:** SystemCapability.Ability.AbilityRuntime.QuickFix

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | 应用Bundle名称。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;ApplicationQuickFixInfo> | Promise对象。返回应用的快速修复信息。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |
| 18500001 | The bundle does not exist or no patch has been applied. |
| 18500008 | Internal error. |

**Example**

```TypeScript
import { quickFixManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let bundleName = 'bundleName';
  quickFixManager.getApplicationQuickFixInfo(bundleName).then((data) => {
    console.info(`getApplicationQuickFixInfo success: ${data}`);
  }).catch((error: BusinessError) => {
    console.error(`getApplicationQuickFixInfo err: ${error}`);
  });
} catch (paramError) {
  console.error(`error: ${(paramError as BusinessError).code}, ${(paramError as BusinessError).message}`);
}

```

