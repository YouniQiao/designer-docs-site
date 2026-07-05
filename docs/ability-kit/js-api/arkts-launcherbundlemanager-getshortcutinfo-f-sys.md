# getShortcutInfo

## getShortcutInfo

```TypeScript
function getShortcutInfo(bundleName :string, callback: AsyncCallback<Array<ShortcutInfo>>) : void
```

查询当前用户下指定应用的快捷方式信息[ShortcutInfo]./bundleManager/ShortcutInfo，只支持查询主应用的ShortcutInfo，查询分身应用请使用 [getShortcutInfoByAppIndex]launcherBundleManager.getShortcutInfoByAppIndex。使用callback异步回调。 获取调用方自身的信息时不需要权限。

**Since:** 9

**Required permissions:** 

 ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or ohos.permission.GET_BUNDLE_INFO

**System capability:** SystemCapability.BundleManager.BundleFramework.Launcher

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | 应用Bundle名称。 |
| callback | AsyncCallback&lt;Array&lt;ShortcutInfo>> | Yes | [回调函数](../../apis-basic-service-kit/arkts-apis/arkts-asynccallback-i.md#AsyncCallback)。当函数调用成功，err为  undefined，data为当前用户下指定应用的[ShortcutInfo]./bundleManager/ShortcutInfo信息。否则为错误对象。 |

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
  launcherBundleManager.getShortcutInfo("com.example.demo",
    (errData: BusinessError, data: launcherBundleManager.ShortcutInfo[]) => {
      if (errData !== null) {
        console.error(`errData is errCode:${errData.code}  message:${errData.message}`);
      } else {
        console.info('data is ' + JSON.stringify(data));
      }
    });
} catch (errData) {
  let code = (errData as BusinessError).code;
  let message = (errData as BusinessError).message;
  console.error(`errData is errCode:${code}  message:${message}`);
}

```

## getShortcutInfo

```TypeScript
function getShortcutInfo(bundleName : string) : Promise<Array<ShortcutInfo>>
```

查询当前用户下指定应用的快捷方式信息[ShortcutInfo]./bundleManager/ShortcutInfo，只支持查询主应用的ShortcutInfo，查询分身应用请使用 [getShortcutInfoByAppIndex]launcherBundleManager.getShortcutInfoByAppIndex。使用Promise异步回调。 获取调用方自身的信息时不需要权限。

**Since:** 9

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
| Promise&lt;Array&lt;ShortcutInfo>> | Promise对象。返回当前用户下指定应用的[ShortcutInfo]./bundleManager/ShortcutInfo。 |

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
  launcherBundleManager.getShortcutInfo("com.example.demo")
    .then((data: launcherBundleManager.ShortcutInfo[]) => {
      console.info('data is ' + JSON.stringify(data));
    }).catch((errData: BusinessError) => {
    console.error(`errData is errCode:${errData.code}  message:${errData.message}`);
  });
} catch (errData) {
  let code = (errData as BusinessError).code;
  let message = (errData as BusinessError).message;
  console.error(`errData is errCode:${code}  message:${message}`);
}

```

