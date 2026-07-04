---
last_update:
  date: 2026-07-04
---

# setAlternateIcon

## Modules to Import

```TypeScript
import { bundleManager } from '@ohos.bundle.bundleManager';
```

## setAlternateIcon

```TypeScript
function setAlternateIcon(alternateIconName: string): Promise<void>
```

Set the alternate icon for the current application. If you need to restore the app's default icon, please input an empty value for the icon name parameter.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| alternateIconName | string | Yes | Indicates the alternate icon name.This value matches the name field under alternateIcons in the app.json5 file.If an empty string is passed, the app's default icon will be restored. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Returns the result of setAlternateIcon. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 17700308 | The alternateIconName must match the name field under alternateIconsin the app.json5 file. |
| 17700309 | No alternate icon is enabled. |
| 17700310 | Failed to set the alternate icon. |

**Example**

```TypeScript
import { bundleManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

// Replace alternateIconName with the name of the alternate icon to be set.
let alternateIconName: string = 'com.ohos.demo';

try {
  bundleManager.setAlternateIcon(alternateIconName).then((data) => {
    hilog.info(0x0000, 'testTag', 'setAlternateIcon successfully');
  }).catch((err: BusinessError) => {
    hilog.error(0x0000, 'testTag', 'setAlternateIcon failed. Cause: %{public}s', err.message);
  });
} catch (err) {
  let message = (err as BusinessError).message;
  hilog.error(0x0000, 'testTag', 'setAlternateIcon failed. Cause: %{public}s', message);
}

```

