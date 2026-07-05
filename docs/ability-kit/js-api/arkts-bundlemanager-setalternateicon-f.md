# setAlternateIcon

## setAlternateIcon

```TypeScript
function setAlternateIcon(alternateIconName: string): Promise<void>
```

根据给定的备用图标名称设置调用方自身的备用图标。使用Promise异步回调。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| alternateIconName | string | Yes | 要设置的备用图标名称。备用图标名称须在app.json5中  [alternateIcons标签](docroot://quick-start/app-configuration-file.md#alternateicons标签)的name字段内。  alternateIconName为空时表示取消备用图标。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象。无返回结果的Promise对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 17700308 | The alternateIconName must match the name field under alternateIcons  in the app.json5 file. |
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

