# getShortcutInfoByAppIndex

## getShortcutInfoByAppIndex

```TypeScript
function getShortcutInfoByAppIndex(bundleName: string, appIndex: int): Array<ShortcutInfo>
```

查询当前用户下指定分身应用的快捷方式信息[ShortcutInfo]./bundleManager/ShortcutInfo。 调用方获取自己的信息时不需要权限。

**Since:** 20

**Required permissions:** 

 ohos.permission.GET_BUNDLE_INFO_PRIVILEGED

**System capability:** SystemCapability.BundleManager.BundleFramework.Launcher

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | 应用Bundle名称。 |
| appIndex | int | Yes | 分身应用的索引。 |

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;ShortcutInfo> | Array形式返回当前用户下指定分身应用的[ShortcutInfo]./bundleManager/ShortcutInfo。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Verify permission denied. |
| 202 | Permission denied, non-system app called system api. |
| 801 | Capability not support. |
| 17700001 | The specified bundle name is not found. |
| 17700061 | The specified app index is invalid. |

**Example**

```TypeScript
import { launcherBundleManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let data = launcherBundleManager.getShortcutInfoByAppIndex("com.example.demo", 1);
  console.info('getShortcutInfoByAppIndex successfully, data is ' + JSON.stringify(data));
} catch (errData) {
  let code = (errData as BusinessError).code;
  let message = (errData as BusinessError).message;
  console.error(`Failed to getShortcutInfoByAppIndex. Code: ${code}, message: ${message}`);
}

```

