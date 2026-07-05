# getDynamicIcon

## getDynamicIcon

```TypeScript
function getDynamicIcon(bundleName: string): Promise<string>
```

根据给定的bundleName获得动态图标对应的moduleName。使用Promise异步回调。

**Since:** 12

**Required permissions:** 

 ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or ohos.permission.GET_BUNDLE_INFO

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | 要查询扩展资源的应用名称。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;string> | Promise对象。返回接口运行结果及动态图标对应的moduleName。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Permission denied, non-system app called system api. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.  Incorrect parameter types. |
| 17700001 | The specified bundleName is not found. |
| 17700306 | Failed to obtain the dynamic icon. |

**Example**

```TypeScript
import { bundleManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

let bundleName: string = 'com.ohos.demo';

try {
  bundleManager.getDynamicIcon(bundleName).then((data) => {
    hilog.info(0x0000, 'testTag', 'getDynamicIcon successfully %{public}s', JSON.stringify(data));
  }).catch((err: BusinessError) => {
    hilog.error(0x0000, 'testTag', 'getDynamicIcon failed. Cause: %{public}s', err.message);
  });
} catch (err) {
  let message = (err as BusinessError).message;
  hilog.error(0x0000, 'testTag', 'getDynamicIcon failed. Cause: %{public}s', message);
}

```

