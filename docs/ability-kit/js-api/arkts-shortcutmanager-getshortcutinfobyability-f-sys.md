# getShortcutInfoByAbility

## getShortcutInfoByAbility

```TypeScript
function getShortcutInfoByAbility(bundleName: string, moduleName: string, abilityName: string, userId?: int, appIndex?: int): Array<ShortcutInfo>
```

查询指定用户下指定UIAbility的快捷方式信息。

**Since:** 24

**Required permissions:** 

 ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or * (ohos.permission.GET_BUNDLE_INFO_PRIVILEGED and ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS)

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.BundleManager.BundleFramework.Launcher

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | 表示应用程序的包名。 |
| moduleName | string | Yes | 表示模块的名称。 |
| abilityName | string | Yes | 表示UIAbility组件的名称。 |
| userId | int | No |  |
| appIndex | int | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;ShortcutInfo> | Array形式返回指定用户下指定UIAbility的  [ShortcutInfo]./bundleManager/ShortcutInfo:ShortcutInfo。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Permission denied, non-system app called system api. |
| 801 | Capability not supported. |
| 17700001 | The specified bundle is not found. |
| 17700002 | The specified module is not found. |
| 17700003 | The specified ability is not found. |
| 17700004 | The specified user id is not found. |
| 17700026 | The specified bundle is disabled. |
| 17700061 | The specified app index is invalid. |

