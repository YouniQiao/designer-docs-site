# getAllLauncherAbilityInfos (System API)

## Modules to Import

```TypeScript
import { BundleStatusCallback } from '@ohos.bundle.innerBundleManager';
```

## getAllLauncherAbilityInfos

```TypeScript
function getAllLauncherAbilityInfos(userId: number, callback: AsyncCallback<Array<LauncherAbilityInfo>>): void
```

Obtains the information about all launcher abilities. This API uses an asynchronous callback to return the result. > **NOTE** > > This API has been supported since API version 8 and deprecated since API version 9. You are advised to use > [getAllLauncherAbilityInfo](@ohos.bundle.launcherBundleManager:launcherBundleManager.getAllLauncherAbilityInfo(userId: int, callback: AsyncCallback<Array<LauncherAbilityInfo>>)) > instead.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** getAllLauncherAbilityInfo(userId:

**Required permissions:** ohos.permission.GET_BUNDLE_INFO_PRIVILEGED

**System capability:** SystemCapability.BundleManager.BundleFramework

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| userId | number | Yes | User ID. The value must be greater than or equal to 0. |
| callback | AsyncCallback&lt;Array&lt;LauncherAbilityInfo&gt;&gt; | Yes | Callback used to return an array of the launcherability information. |


## getAllLauncherAbilityInfos

```TypeScript
function getAllLauncherAbilityInfos(userId: number): Promise<Array<LauncherAbilityInfo>>
```

Obtains the information about all launcher abilities. This API uses a promise to return the result. > **NOTE** > > This API has been supported since API version 8 and deprecated since API version 9. You are advised to use > [getAllLauncherAbilityInfo](@ohos.bundle.launcherBundleManager:launcherBundleManager.getAllLauncherAbilityInfo(userId: int, callback: AsyncCallback<Array<LauncherAbilityInfo>>)) > instead.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** getAllLauncherAbilityInfo(userId:

**Required permissions:** ohos.permission.GET_BUNDLE_INFO_PRIVILEGED

**System capability:** SystemCapability.BundleManager.BundleFramework

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| userId | number | Yes | User ID. The value must be greater than or equal to 0. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;LauncherAbilityInfo&gt;&gt; | Promise used to return an array of the launcher abilityinformation. |

