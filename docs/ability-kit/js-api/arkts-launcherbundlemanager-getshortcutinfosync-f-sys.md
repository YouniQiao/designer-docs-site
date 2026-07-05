# getShortcutInfoSync

## getShortcutInfoSync

```TypeScript
function getShortcutInfoSync(bundleName: string): Array<ShortcutInfo>
```

查询当前用户下指定应用的快捷方式信息[ShortcutInfo]./bundleManager/ShortcutInfo，只支持查询主应用的ShortcutInfo，查询分身应用请使用 [getShortcutInfoByAppIndex]launcherBundleManager.getShortcutInfoByAppIndex。 获取调用方自身的信息时不需要权限。

**Since:** 10

**Required permissions:** 

 ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or ohos.permission.GET_BUNDLE_INFO

**System capability:** SystemCapability.BundleManager.BundleFramework.Launcher

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | 应用Bundle名称。 |

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;ShortcutInfo> | Array形式返回当前用户下指定应用的[ShortcutInfo]./bundleManager/ShortcutInfo。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Verify permission denied. |
| 202 | Permission denied, non-system app called system api. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.  Incorrect parameter types. |
| 801 | Capability not support. |
| 17700001 | The specified bundle name is not found. |
| 17700026 | The specified bundle is disabled. |

**Example**

```TypeScript
import { launcherBundleManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let data = launcherBundleManager.getShortcutInfoSync("com.example.demo");
  console.info('data is ' + JSON.stringify(data));
} catch (errData) {
  let code = (errData as BusinessError).code;
  let message = (errData as BusinessError).message;
  console.error(`errData is errCode:${code}  message:${message}`);
}

```

## getShortcutInfoSync

```TypeScript
function getShortcutInfoSync(bundleName: string, userId: int): Array<ShortcutInfo>
```

查询指定用户下指定应用的快捷方式信息[ShortcutInfo]./bundleManager/ShortcutInfo，只支持查询主应用的ShortcutInfo，查询分身应用请使用 [getShortcutInfoByAppIndex]launcherBundleManager.getShortcutInfoByAppIndex。 获取调用方自身的信息时不需要权限。

**Since:** 13

**Required permissions:** 

 ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or ohos.permission.GET_BUNDLE_INFO

**System capability:** SystemCapability.BundleManager.BundleFramework.Launcher

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | 应用Bundle名称。 |
| userId | int | Yes | 表示用户ID，可以通过  [getOsAccountLocalId接口]@ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback)  获取。 |

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;ShortcutInfo> | Array形式返回指定用户下指定应用的[ShortcutInfo]./bundleManager/ShortcutInfo。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Verify permission denied. |
| 202 | Permission denied, non-system app called system api. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.  Incorrect parameter types. |
| 801 | Capability not support. |
| 17700001 | The specified bundle name is not found. |
| 17700004 | The specified user ID is not found. |
| 17700026 | The specified bundle is disabled. |

**Example**

```TypeScript
import { launcherBundleManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let data = launcherBundleManager.getShortcutInfoSync("com.example.demo", 100);
  console.info('data is ' + JSON.stringify(data));
} catch (errData) {
  let code = (errData as BusinessError).code;
  let message = (errData as BusinessError).message;
  console.error(`errData is errCode:${code}  message:${message}`);
}

```

