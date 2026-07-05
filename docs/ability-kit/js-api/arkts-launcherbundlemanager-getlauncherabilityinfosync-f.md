# getLauncherAbilityInfoSync

## getLauncherAbilityInfoSync

```TypeScript
function getLauncherAbilityInfoSync(bundleName: string, userId: int): Array<LauncherAbilityInfo>
```

查询指定bundleName及用户的[LauncherAbilityInfo]./bundleManager/LauncherAbilityInfo:LauncherAbilityInfo。

**Since:** 18

**Required permissions:** 

 ohos.permission.GET_BUNDLE_INFO_PRIVILEGED

**System capability:** SystemCapability.BundleManager.BundleFramework.Launcher

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | 应用Bundle名称。 |
| userId | int | Yes | 被查询的用户ID，可以通过  [getOsAccountLocalId接口]@ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback)  获取。 |

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;LauncherAbilityInfo> | Array形式返回bundle包含的  [LauncherAbilityInfo]./bundleManager/LauncherAbilityInfo:LauncherAbilityInfo信息。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Verify permission denied. |
| 801 | Capability not support. |
| 17700001 | The specified bundle name is not found. |
| 17700004 | The specified user ID is not found. |

