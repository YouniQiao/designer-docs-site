# getLauncherAbilityInfoSync

## Modules to Import

```TypeScript
import { launcherBundleManager } from '@kit.AbilityKit';
```

<a id="getlauncherabilityinfosync"></a>
## getLauncherAbilityInfoSync

```TypeScript
function getLauncherAbilityInfoSync(bundleName: string, userId: number): Array<LauncherAbilityInfo>
```

Obtains the [launcher ability information](arkts-ability-launcherabilityinfo-i.md) based on the given bundle name and user ID.

**Since:** 18

**Required permissions:** ohos.permission.GET_BUNDLE_INFO_PRIVILEGED

<!--Device-launcherBundleManager-function getLauncherAbilityInfoSync(bundleName: string, userId: int): Array<LauncherAbilityInfo>--><!--Device-launcherBundleManager-function getLauncherAbilityInfoSync(bundleName: string, userId: int): Array<LauncherAbilityInfo>-End-->

**System capability:** SystemCapability.BundleManager.BundleFramework.Launcher

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | Bundle name. |
| userId | number | Yes | User ID, which can be obtained by calling [getOsAccountLocalId](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-osaccount-accountmanager-i.md#getosaccountlocalid-1). |

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;LauncherAbilityInfo&gt; | Array of the [LauncherAbilityInfo](arkts-ability-launcherabilityinfo-i.md) objects obtained. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Verify permission denied. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not support. |
| [17700001](../errorcode-bundle.md#17700001-bundle-name-does-not-exist) | The specified bundle name is not found. |
| [17700004](../errorcode-bundle.md#17700004-user-id-does-not-exist) | The specified user ID is not found. |

