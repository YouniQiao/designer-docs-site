# getAllDisposedRules (System API)

## Modules to Import

```TypeScript
import { appControl } from '@kit.AbilityKit';
```

## getAllDisposedRules

```TypeScript
function getAllDisposedRules(): Array<DisposedRuleConfiguration>
```

Obtains all the disposed rules set for the current user.

**Since:** 23

**Required permissions:** ohos.permission.MANAGE_DISPOSED_APP_STATUS or ohos.permission.GET_DISPOSED_APP_STATUS

<!--Device-appControl-function getAllDisposedRules(): Array<DisposedRuleConfiguration>--><!--Device-appControl-function getAllDisposedRules(): Array<DisposedRuleConfiguration>-End-->

**System capability:** SystemCapability.BundleManager.BundleFramework.AppControl

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| [Array](../../apis-na/arkts-apis/arkts-na-lib-es5-array-i.md)<DisposedRuleConfiguration> | Array of disposed rules. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission denied. A non-system application is not allowed to call a system API. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |

**Example**

```TypeScript
import { appControl } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let data = appControl.getAllDisposedRules();
  console.info('getAllDisposedRules successfully. Data: ' + JSON.stringify(data));
} catch (error) {
  let message = (error as BusinessError).message;
  console.error('getAllDisposedRules failed ' + message);
}

```

