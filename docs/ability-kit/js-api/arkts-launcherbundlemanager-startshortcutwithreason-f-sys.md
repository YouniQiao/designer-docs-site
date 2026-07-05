# startShortcutWithReason

## startShortcutWithReason

```TypeScript
function startShortcutWithReason(shortcutInfo: ShortcutInfo, startReason: string, options?: StartOptions): Promise<void>
```

根据指定的快捷方式信息，拉起对应的Ability，并携带快捷方式的启动原因。使用Promise异步回调。 被拉起方可以通过[LaunchParam](arkts-abilityconstant-launchparam-i.md#LaunchParam)的launchReasonMessage字段获取到 启动原因，并根据启动原因进行业务逻辑处理。

**Since:** 20

**Required permissions:** 

 ohos.permission.START_SHORTCUT and ohos.permission.SET_LAUNCH_REASON_MESSAGE

**System capability:** SystemCapability.BundleManager.BundleFramework.Launcher

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| shortcutInfo | ShortcutInfo | Yes | 应用的快捷方式信息。 |
| startReason | string | Yes | 快捷方式的启动原因，取值包括：  [AbilityConstant.REASON_MESSAGE_DESKTOP_SHORTCUT](docroot://reference/apis-ability-kit/js-apis-app-ability-abilityConstant.md#常量)  ，表示桌面快捷方式启动。 |
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
| 801 | Capability not support. |
| 17700065 | The specified shortcut want in shortcut info is not supported to be started. |

**Example**

```TypeScript
import { launcherBundleManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { AbilityConstant } from '@kit.AbilityKit';

try {
  let data: Array<launcherBundleManager.ShortcutInfo> =
    launcherBundleManager.getShortcutInfoSync("com.example.myapplication");
  console.info('startShortcutWithReason data is ' + JSON.stringify(data));
  let startReason = AbilityConstant.REASON_MESSAGE_DESKTOP_SHORTCUT;
  if (data) {
    try {
      launcherBundleManager.startShortcutWithReason(data[0], startReason)
        .then(() => {
          console.info('startShortcutWithReason success');
        }).catch((err: BusinessError) => {
        console.error(`startShortcutWithReason errData is errCode:${err.code}  message:${err.message}`);
      });
    } catch (error) {
      let code = (error as BusinessError).code;
      let message = (error as BusinessError).message;
      console.error(`startShortcutWithReason error is errCode:${code}  message:${message}`);
    }
  }
} catch (errData) {
  let code = (errData as BusinessError).code;
  let message = (errData as BusinessError).message;
  console.error(`startShortcutWithReason errData is errCode:${code}  message:${message}`);
}

```

