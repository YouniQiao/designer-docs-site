# getAllDesktopShortcutInfo

## getAllDesktopShortcutInfo

```TypeScript
function getAllDesktopShortcutInfo(userId: int): Promise<Array<ShortcutInfo>>
```

查询指定用户的所有快捷方式信息。

**Since:** 12

**Required permissions:** 

 ohos.permission.MANAGE_SHORTCUTS

**System capability:** SystemCapability.BundleManager.BundleFramework.Launcher

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| userId | int | Yes | 被查询的用户id。可以通过  [getOsAccountLocalId接口]@ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback)  获取。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;ShortcutInfo>> | Promise对象，返回应用配置文件中定义的快捷方式信息。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Verify permission denied. |
| 202 | Permission denied, non-system app called system api. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.  Incorrect parameter types. |
| 17700004 | The specified user ID is not found. |

