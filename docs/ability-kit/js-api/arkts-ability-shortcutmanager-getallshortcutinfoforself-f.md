# getAllShortcutInfoForSelf

## Modules to Import

```TypeScript
import { shortcutManager } from '@kit.AbilityKit';
```

## getAllShortcutInfoForSelf

```TypeScript
function getAllShortcutInfoForSelf(): Promise<Array<ShortcutInfo>>
```

Obtains all the shortcut information defined in the [configuration](../../../../quick-start/module-configuration-file.md#shortcuts) file of the current application. This API uses a promise to return the result.

**Since:** 20

<!--Device-shortcutManager-function getAllShortcutInfoForSelf(): Promise<Array<ShortcutInfo>>--><!--Device-shortcutManager-function getAllShortcutInfoForSelf(): Promise<Array<ShortcutInfo>>-End-->

**System capability:** SystemCapability.BundleManager.BundleFramework.Launcher

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<Array<ShortcutInfo>> | Promise that returns all the shortcut information defined in the configuration file. |

**Example**

```TypeScript
import { shortcutManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

shortcutManager.getAllShortcutInfoForSelf()
  .then((data: shortcutManager.ShortcutInfo[]) => {
    console.info('getAllShortcutInfoForSelf shortcut data is' + JSON.stringify(data));
  }).catch((err: BusinessError) => {
  console.error(`getAllShortcutInfoForSelf errData is errCode:${err.code}  message:${err.message}`);
});

```

