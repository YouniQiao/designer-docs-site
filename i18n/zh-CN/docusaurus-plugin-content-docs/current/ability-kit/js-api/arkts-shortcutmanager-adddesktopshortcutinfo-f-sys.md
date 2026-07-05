# addDesktopShortcutInfo

## addDesktopShortcutInfo

```TypeScript
function addDesktopShortcutInfo(shortcutInfo: ShortcutInfo, userId: int): Promise<void>
```

增加指定用户的快捷方式信息。使用Promise异步回调。

**起始版本：** 12

**需要权限：** 

 ohos.permission.MANAGE_SHORTCUTS

**系统能力：** SystemCapability.BundleManager.BundleFramework.Launcher

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| shortcutInfo | ShortcutInfo | 是 | 快捷方式信息。 |
| userId | int | 是 | 用户id。可以通过  [getOsAccountLocalId接口]@ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback)  获取。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Verify permission denied. |
| 202 | Permission denied, non-system app called system api. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.  Incorrect parameter types. |
| 17700001 | The specified bundle name is not found. |
| 17700004 | The specified user ID is not found. |
| 17700026 | The specified bundle is disabled. |
| 17700061 | The specified app index is invalid. |
| 17700070 | The specified shortcut id is illegal. |

