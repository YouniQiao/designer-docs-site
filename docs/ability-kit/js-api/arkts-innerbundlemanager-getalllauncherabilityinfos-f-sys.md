# getAllLauncherAbilityInfos

## getAllLauncherAbilityInfos

```TypeScript
function getAllLauncherAbilityInfos(userId: number, callback: AsyncCallback<Array<LauncherAbilityInfo>>): void
```

获取所有的LauncherAbilityInfos，使用callback异步回调。 > **说明：** > > 从API version 8开始支持，从API version 9开始废弃，建议使用 > [getAllLauncherAbilityInfo]@ohos.bundle.launcherBundleManager:launcherBundleManager.getAllLauncherAbilityInfo(userId: int, callback: AsyncCallback<Array<LauncherAbilityInfo>>) > 替代。

**Since:** 8

**Deprecated since:** 9

**Substitute:** @ohos.bundle.launcherBundleManager:launcherBundleManager.getAllLauncherAbilityInfo(userId:

**Required permissions:** 

 ohos.permission.GET_BUNDLE_INFO_PRIVILEGED

**System capability:** SystemCapability.BundleManager.BundleFramework

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| userId | number | Yes | 用户ID。取值范围：大于等于0。 |
| callback | AsyncCallback&lt;Array&lt;LauncherAbilityInfo>> | Yes | 程序启动作为入参的回调函数，返回程序信息。 |

## getAllLauncherAbilityInfos

```TypeScript
function getAllLauncherAbilityInfos(userId: number): Promise<Array<LauncherAbilityInfo>>
```

获取LauncherAbilityInfos，使用Promise异步回调。 > **说明：** > > 从API version 8开始支持，从API version 9开始废弃，建议使用 > [getAllLauncherAbilityInfo]@ohos.bundle.launcherBundleManager:launcherBundleManager.getAllLauncherAbilityInfo(userId: int, callback: AsyncCallback<Array<LauncherAbilityInfo>>) > 替代。

**Since:** 8

**Deprecated since:** 9

**Substitute:** @ohos.bundle.launcherBundleManager:launcherBundleManager.getAllLauncherAbilityInfo(userId:

**Required permissions:** 

 ohos.permission.GET_BUNDLE_INFO_PRIVILEGED

**System capability:** SystemCapability.BundleManager.BundleFramework

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| userId | number | Yes | 用户ID。取值范围：大于等于0。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;LauncherAbilityInfo>> | Promise形式返回程序信息。 |

