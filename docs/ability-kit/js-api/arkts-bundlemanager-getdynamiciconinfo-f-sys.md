# getDynamicIconInfo

## getDynamicIconInfo

```TypeScript
function getDynamicIconInfo(bundleName: string): Promise<Array<DynamicIconInfo>>
```

根据指定的bundleName获取所有用户和所有分身下的动态图标信息。使用Promise异步回调。

**Since:** 20

**Required permissions:** 

 ohos.permission.GET_BUNDLE_INFO_PRIVILEGED and ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | 要查询动态图标的应用包名。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;DynamicIconInfo>> | Promise对象，返回查询到的动态图标信息。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Permission denied, non-system app called system api. |
| 17700001 | The specified bundleName is not found. |
| 17700306 | Failed to obtain the dynamic icon. |

**Example**

```TypeScript
import { bundleManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

let bundleName: string = 'com.ohos.demo';

try {
  bundleManager.getDynamicIconInfo(bundleName).then((data) => {
    hilog.info(0x0000, 'testTag', 'getDynamicIconInfo successfully %{public}s', JSON.stringify(data));
  }).catch((err: BusinessError) => {
    hilog.error(0x0000, 'testTag', 'getDynamicIconInfo failed. Cause: %{public}s', err.message);
  });
} catch (err) {
  let message = (err as BusinessError).message;
  hilog.error(0x0000, 'testTag', 'getDynamicIconInfo failed. Cause: %{public}s', message);
}

```

