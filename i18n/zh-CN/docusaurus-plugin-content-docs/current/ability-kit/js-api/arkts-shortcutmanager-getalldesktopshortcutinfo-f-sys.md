# getAllDesktopShortcutInfo

## getAllDesktopShortcutInfo

```TypeScript
function getAllDesktopShortcutInfo(userId: int): Promise<Array<ShortcutInfo>>
```

查询指定用户的所有快捷方式信息。

**起始版本：** 12

**需要权限：** 

 ohos.permission.MANAGE_SHORTCUTS

**系统能力：** SystemCapability.BundleManager.BundleFramework.Launcher

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| userId | int | 是 | 被查询的用户id。可以通过  [getOsAccountLocalId接口]@ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback)  获取。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Array&lt;ShortcutInfo>> | Promise对象，返回应用配置文件中定义的快捷方式信息。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Verify permission denied. |
| 202 | Permission denied, non-system app called system api. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.  Incorrect parameter types. |
| 17700004 | The specified user ID is not found. |

