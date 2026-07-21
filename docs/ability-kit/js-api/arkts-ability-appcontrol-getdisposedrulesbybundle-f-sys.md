# getDisposedRulesByBundle (System API)

## Modules to Import

```TypeScript
import { appControl } from '@kit.AbilityKit';
```

<a id="getdisposedrulesbybundle"></a>
## getDisposedRulesByBundle

```TypeScript
function getDisposedRulesByBundle(bundleName: string): Array<DisposedRuleConfiguration>
```

Query all disposed rules under the current user for the specified bundle name.

**Since:** 23

**Required permissions:** ohos.permission.MANAGE_DISPOSED_APP_STATUS or ohos.permission.GET_DISPOSED_APP_STATUS

**Model restriction:** This API can be used only in the stage model.

<!--Device-appControl-function getDisposedRulesByBundle(bundleName: string): Array<DisposedRuleConfiguration>--><!--Device-appControl-function getDisposedRulesByBundle(bundleName: string): Array<DisposedRuleConfiguration>-End-->

**System capability:** SystemCapability.BundleManager.BundleFramework.AppControl

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | Indicates the bundle name of the setter that sets the disposed rules. |

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;DisposedRuleConfiguration&gt; | Returns disposed rules. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission denied. A non-system application is not allowed to call a system API. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |

