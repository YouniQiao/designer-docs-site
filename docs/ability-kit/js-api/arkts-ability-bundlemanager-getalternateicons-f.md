# getAlternateIcons

## Modules to Import

```TypeScript
import { bundleManager } from '@kit.AbilityKit';
```

<a id="getalternateicons"></a>
## getAlternateIcons

```TypeScript
function getAlternateIcons(): Promise<Array<AlternateIconInfo>>
```

Queries the alternate icon information configured in the alternateIcons in the app.json5of the current application. This API uses a promise to return the result.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-bundleManager-function getAlternateIcons(): Promise<Array<AlternateIconInfo>>--><!--Device-bundleManager-function getAlternateIcons(): Promise<Array<AlternateIconInfo>>-End-->

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;AlternateIconInfo&gt;&gt; | Promise used to return the list of alternate icons of the current application. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 17700311 | Failed to obtain the alternate icon. |

**Example**

```TypeScript
import { bundleManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
  bundleManager.getAlternateIcons().then((data) => {
    hilog.info(0x0000, 'testTag', 'getAlternateIcons successfully. Data: %{public}s', JSON.stringify(data));
  }).catch((err: BusinessError) => {
    hilog.error(0x0000, 'testTag', 'getAlternateIcons failed. Cause: %{public}s', err.message);
  });
} catch (err) {
  let message = (err as BusinessError).message;
  hilog.error(0x0000, 'testTag', 'getAlternateIcons failed. Cause: %{public}s', message);
}

```

