# canOpenLink

## canOpenLink

```TypeScript
function canOpenLink(link: string): boolean
```

根据给定的链接判断目标应用是否可访问，链接中的scheme需要在[module.json5文件](docroot://quick-start/module-configuration-file.md)的querySchemes字段 下配置。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| link | string | Yes | 表示需要查询的链接。 |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | 返回true表示给定的链接可以打开，返回false表示给定的链接不能打开。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.  Incorrect parameter types. |
| 17700055 | The specified link is invalid. |
| 17700056 | The scheme of the specified link is not in the querySchemes. |

**Example**

```TypeScript
import { bundleManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
  let link = 'welink://';
  let data = bundleManager.canOpenLink(link);
  hilog.info(0x0000, 'testTag', 'canOpenLink successfully: %{public}s', JSON.stringify(data));
} catch (err) {
  let message = (err as BusinessError).message;
  hilog.error(0x0000, 'testTag', 'canOpenLink failed: %{public}s', message);
}

```

