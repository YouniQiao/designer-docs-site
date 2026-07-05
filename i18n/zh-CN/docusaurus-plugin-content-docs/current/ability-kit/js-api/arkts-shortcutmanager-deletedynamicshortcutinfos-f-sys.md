# deleteDynamicShortcutInfos

## deleteDynamicShortcutInfos

```TypeScript
function deleteDynamicShortcutInfos(bundleName: string, appIndex: int, userId: int, ids?: Array<string>): Promise<void>
```

删除指定的动态快捷方式。

**起始版本：** 23

**需要权限：** 

 ohos.permission.MANAGE_SHORTCUTS or * (ohos.permission.MANAGE_SHORTCUTS and ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS)

**系统能力：** SystemCapability.BundleManager.BundleFramework.Launcher

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| bundleName | string | 是 | 要删除的动态快捷方式所属的包名。 |
| appIndex | int | 是 | 要删除的动态快捷方式所属的分身索引。支持取值为：1、2、3、4、5。 |
| userId | int | 是 | 要删除的动态快捷方式所属的用户id。可以通过  [getOsAccountLocalId接口]@ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback)  获取。默认值：调用方所在用户，取值范围：大于等于0。 |
| ids | Array&lt;string> | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Permission denied. A non-system application is not allowed to call a system API. |
| 801 | Capability not supported. |
| 17700001 | The specified bundle is not found. |
| 17700004 | The specified user id is not found. |
| 17700026 | The specified bundle is disabled. |
| 17700061 | The specified app index is invalid. |
| 17700070 | The specified shortcut id is illegal. |

**示例：**

```TypeScript
import { shortcutManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

// 请开发者替换为实际的快捷方式id、bundleName、userId。
const bundleName = "com.example.dynamic";

try {
  shortcutManager.deleteDynamicShortcutInfos(bundleName, 0, 100, ["1", "2"])
    .then(() => {
      console.info('deleteDynamicShortcutInfos success');
    }).catch((err: Error) => {
    console.error(`deleteDynamicShortcutInfos errData is errCode:${(err as BusinessError).code}  message:${(err as BusinessError).message}`);
  });
} catch (err) {
  console.error(`deleteDynamicShortcutInfos errData is errCode:${(err as BusinessError).code}  message:${(err as BusinessError).message}`);
}

```

