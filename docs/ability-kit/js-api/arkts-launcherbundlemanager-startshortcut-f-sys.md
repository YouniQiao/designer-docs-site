# startShortcut

## startShortcut

```TypeScript
function startShortcut(shortcutInfo: ShortcutInfo, options?: StartOptions): Promise<void>
```

拉起指定[ShortcutInfo]./bundleManager/ShortcutInfo中的ability。使用Promise异步回调。

**Since:** 12

**Required permissions:** 

 ohos.permission.START_SHORTCUT

**System capability:** SystemCapability.BundleManager.BundleFramework.Launcher

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| shortcutInfo | ShortcutInfo | Yes | 应用的快捷方式信息。 |
| options | StartOptions | No |  |

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
| 801 | Capability not support. |
| 17700065 | The specified shortcut want in shortcut info is not supported to be started. |

**Example**

```TypeScript
import { launcherBundleManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let data: Array<launcherBundleManager.ShortcutInfo> = launcherBundleManager.getShortcutInfoSync("com.example.demo");
  console.info('data is ' + JSON.stringify(data));
  if (data) {
    try {
      launcherBundleManager.startShortcut(data[0])
        .then(() => {
          console.info('startShortcut success');
        }).catch((err: BusinessError) => {
        console.error(`errData is errCode:${err.code}  message:${err.message}`);
      });
    } catch (error) {
      let code = (error as BusinessError).code;
      let message = (error as BusinessError).message;
      console.error(`error is errCode:${code}  message:${message}`);
    }
  }
} catch (errData) {
  let code = (errData as BusinessError).code;
  let message = (errData as BusinessError).message;
  console.error(`errData is errCode:${code}  message:${message}`);
}

```

