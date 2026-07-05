# setShortcutsEnabled

## setShortcutsEnabled

```TypeScript
function setShortcutsEnabled(shortcutsInfo: Array<ShortcutInfo>, isEnabled: boolean): Promise<void>
```

设置启用或禁用传入的静态快捷方式。使用Promise异步回调。

**Since:** 23

**Required permissions:** 

 ohos.permission.MANAGE_SHORTCUTS

**System capability:** SystemCapability.BundleManager.BundleFramework.Launcher

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| shortcutsInfo | Array&lt;ShortcutInfo> | Yes | 待启用或禁用的静态快捷方式。 说明： 本接口不区分主应用和分身应用，且仅对静态快捷方式生效，所以  ShortcutInfo中的appIndex和sourceType设置不生效。 |
| isEnabled | boolean | Yes | 快捷方式是否启用。true：快捷方式启用；false：快捷方式禁用。 |

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
| 17700070 | The specified shortcut id is illegal. |

**Example**

```TypeScript
import { shortcutManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

// Use the actual shortcut ID and bundle name.
const bundleName = "com.example.myapplication";
const arrShortcutInfo: Array<shortcutManager.ShortcutInfo> = [
  {
    id: "1",
    bundleName: bundleName,
    appIndex: 0,
    sourceType: 1
  },
  {
    id: "2",
    bundleName: bundleName,
    appIndex: 0,
    sourceType: 1
  }
]

try {
  shortcutManager.setShortcutsEnabled(arrShortcutInfo, false)
    .then(() => {
      console.info('setShortcutsEnabled success');
    }).catch((err: Error) => {
    console.error(`setShortcutsEnabled errData is errCode:${(err as BusinessError).code}  message:${(err as BusinessError).message}`);
  });
} catch (err) {
  console.error(`setShortcutsEnabled errData is errCode:${(err as BusinessError).code}  message:${(err as BusinessError).message}`);
}

```

