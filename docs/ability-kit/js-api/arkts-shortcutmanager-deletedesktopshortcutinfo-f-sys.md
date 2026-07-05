# deleteDesktopShortcutInfo

## deleteDesktopShortcutInfo

```TypeScript
function deleteDesktopShortcutInfo(shortcutInfo: ShortcutInfo, userId: int): Promise<void>
```

删除指定用户的快捷方式信息。使用Promise异步回调。

**Since:** 12

**Required permissions:** 

 ohos.permission.MANAGE_SHORTCUTS

**System capability:** SystemCapability.BundleManager.BundleFramework.Launcher

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| shortcutInfo | ShortcutInfo | Yes | 快捷方式信息。 |
| userId | int | Yes | 用户id。可以通过  [getOsAccountLocalId接口]@ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback)  获取。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Verify permission denied. |
| 202 | Permission denied, non-system app called system api. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.  Incorrect parameter types. |
| 17700004 | The specified user ID is not found. |

