# setAlternateIcon

## Modules to Import

```TypeScript
import { bundleManager } from '@kit.AbilityKit';
```

## setAlternateIcon

```TypeScript
function setAlternateIcon(alternateIconName: string): Promise<void>
```

Sets the alternate icon of the caller based on the given alternate icon name.This API uses a promise to return the result.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-bundleManager-function setAlternateIcon(alternateIconName: string): Promise<void>--><!--Device-bundleManager-function setAlternateIcon(alternateIconName: string): Promise<void>-End-->

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| alternateIconName | string | Yes | Name of the alternate icon to be set.The alternate icon name must be in the name field of alternateIcons in app.json5.If alternateIconName is left empty, the alternate icon is canceled. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<void> | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 17700308 | The alternateIconName must match the name field under alternateIcons in the app.json5 file. |
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

