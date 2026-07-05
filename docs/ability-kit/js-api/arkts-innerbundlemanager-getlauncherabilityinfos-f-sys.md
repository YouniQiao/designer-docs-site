# getLauncherAbilityInfos

## getLauncherAbilityInfos

```TypeScript
function getLauncherAbilityInfos(bundleName: string,
    userId: number, callback: AsyncCallback<Array<LauncherAbilityInfo>>): void
```

根据给定的Bundle名称获取LauncherAbilityInfos，使用callback异步回调。 > **说明：** > > 从API version 8开始支持，从API version 9开始废弃，建议使用 > [getLauncherAbilityInfo]@ohos.bundle.launcherBundleManager:launcherBundleManager.getLauncherAbilityInfo(bundleName: string, userId: int, callback: AsyncCallback<Array<LauncherAbilityInfo>>) > 替代。

**Since:** 8

**Deprecated since:** 9

**Substitute:** @ohos.bundle.launcherBundleManager:launcherBundleManager.getLauncherAbilityInfo(bundleName:

**Required permissions:** 

 ohos.permission.GET_BUNDLE_INFO_PRIVILEGED

**System capability:** SystemCapability.BundleManager.BundleFramework

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | 要查询的应用Bundle名称。 |
| userId | number | Yes | 用户ID。取值范围：大于等于0。 |
| callback | AsyncCallback&lt;Array&lt;LauncherAbilityInfo>> | Yes | 程序启动作为入参的回调函数，返回程序信息。 |

## getLauncherAbilityInfos

```TypeScript
function getLauncherAbilityInfos(bundleName: string, userId: number): Promise<Array<LauncherAbilityInfo>>
```

根据给定的Bundle名称获取LauncherAbilityInfos，使用Promise异步回调。 > **说明：** > > 从API version 8开始支持，从API version 9开始废弃，建议使用 > [getLauncherAbilityInfo]@ohos.bundle.launcherBundleManager:launcherBundleManager.getLauncherAbilityInfo(bundleName: string, userId: int, callback: AsyncCallback<Array<LauncherAbilityInfo>>) > 替代。

**Since:** 8

**Deprecated since:** 9

**Substitute:** @ohos.bundle.launcherBundleManager:launcherBundleManager.getLauncherAbilityInfo(bundleName:

**Required permissions:** 

 ohos.permission.GET_BUNDLE_INFO_PRIVILEGED

**System capability:** SystemCapability.BundleManager.BundleFramework

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | 要查询的应用Bundle名称。 |
| userId | number | Yes | 用户ID。取值范围：大于等于0。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;LauncherAbilityInfo>> | Promise形式返回程序信息。 |

