# getLauncherAbilityInfoSync

## getLauncherAbilityInfoSync

```TypeScript
function getLauncherAbilityInfoSync(bundleName: string, userId: int): Array<LauncherAbilityInfo>
```

查询指定bundleName及用户的[LauncherAbilityInfo]./bundleManager/LauncherAbilityInfo:LauncherAbilityInfo。

**起始版本：** 18

**需要权限：** 

 ohos.permission.GET_BUNDLE_INFO_PRIVILEGED

**系统能力：** SystemCapability.BundleManager.BundleFramework.Launcher

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| bundleName | string | 是 | 应用Bundle名称。 |
| userId | int | 是 | 被查询的用户ID，可以通过  [getOsAccountLocalId接口]@ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback)  获取。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Array&lt;LauncherAbilityInfo> | Array形式返回bundle包含的  [LauncherAbilityInfo]./bundleManager/LauncherAbilityInfo:LauncherAbilityInfo信息。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Verify permission denied. |
| 801 | Capability not support. |
| 17700001 | The specified bundle name is not found. |
| 17700004 | The specified user ID is not found. |

