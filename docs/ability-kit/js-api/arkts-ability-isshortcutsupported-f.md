---
last_update:
  date: 2026-07-04
---

# isShortcutSupported

## Modules to Import

```TypeScript
import { shortcutManager } from '@ohos.bundle.shortcutManager';
```

## isShortcutSupported

```TypeScript
function isShortcutSupported(): boolean
```

Checks whether the shortcut capability is supported.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.BundleManager.BundleFramework.Launcher

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns true if the shortcut capability is supported; returns false otherwise. |

**Example**

```TypeScript
import { shortcutManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let data = shortcutManager.isShortcutSupported();
  console.info('isShortcutSupported data is' + JSON.stringify(data));
} catch (err) {
  let message = (err as BusinessError).message;
  console.error(`isShortcutSupported errData is errCode:${err.code}  message:${err.message}`);
}

```

