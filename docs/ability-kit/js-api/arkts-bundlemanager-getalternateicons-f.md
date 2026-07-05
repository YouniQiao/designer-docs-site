# getAlternateIcons

## getAlternateIcons

```TypeScript
function getAlternateIcons(): Promise<Array<AlternateIconInfo>>
```

查询当前应用在app.json5中[alternateIcons标签](docroot://quick-start/app-configuration-file.md#alternateicons标签)配置的备用图标信息。使用 Promise异步回调。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;AlternateIconInfo>> | Promise对象，返回当前应用的备用图标信息。 |

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

