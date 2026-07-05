# addDynamicShortcutInfos

## addDynamicShortcutInfos

```TypeScript
function addDynamicShortcutInfos(shortcutInfo: Array<ShortcutInfo>, userId: int): Promise<void>
```

添加指定用户的动态快捷方式。

**Since:** 23

**Required permissions:** 

 ohos.permission.MANAGE_SHORTCUTS or * (ohos.permission.MANAGE_SHORTCUTS and ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS)

**System capability:** SystemCapability.BundleManager.BundleFramework.Launcher

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| shortcutInfo | Array&lt;ShortcutInfo> | Yes | 待添加的动态快捷方式信息。通过本接口提交时，会做如下校验： 1.ShortcutInfo中的sourceType字段会被设置为2  。 2.ShortcutInfo中的moduleName字段在对应的应用中不存在时，会抛出17700002错误码。 3.ShortcutInfo中的hostAbility字段被设置为非空的字符串时，会校  验对应的ability是否存在，不存在时，会抛出17700003错误码。 |
| userId | int | Yes | 动态快捷方式所属的用户id。可以通过  [getOsAccountLocalId接口]@ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback)  获取。默认值：调用方所在用户，取值范围：大于等于0。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Permission denied. A non-system application is not allowed to call a system API. |
| 801 | Capability not supported. |
| 17700001 | The specified bundle is not found. |
| 17700002 | The specified module is not found. |
| 17700003 | The specified ability is not found. |
| 17700004 | The specified user id is not found. |
| 17700026 | The specified bundle is disabled. |
| 17700061 | The specified app index is invalid. |
| 17700070 | The specified shortcut id is illegal. |
| 18100001 | A combination of bundleName and appIndex in the shutcutInfo list is  different from the others. |

**Example**

```TypeScript
import { shortcutManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

// Use the actual shortcut ID, bundle name, module name, and user ID.
const bundleName = "com.example.dynamic";
let moduleName = 'entry';
const arrShortcutInfo: Array<shortcutManager.ShortcutInfo> = [
  {
    id: "1",
    bundleName: bundleName,
    moduleName: moduleName,
    appIndex: 0,
    sourceType: 2
  },
  {
    id: "2",
    bundleName: bundleName,
    moduleName: moduleName,
    appIndex: 0,
    sourceType: 2
  }
]

try {
  shortcutManager.addDynamicShortcutInfos(arrShortcutInfo, 100)
    .then(() => {
      console.info('addDynamicShortcutInfos success');
    }).catch((err: Error) => {
    console.error(`addDynamicShortcutInfos errData is errCode:${(err as BusinessError).code}  message:${(err as BusinessError).message}`);
  });
} catch (err) {
  console.error(`addDynamicShortcutInfos errData is errCode:${(err as BusinessError).code}  message:${(err as BusinessError).message}`);
}

```

