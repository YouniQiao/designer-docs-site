# getApplicationLabel

## getApplicationLabel

```TypeScript
function getApplicationLabel(bundleName: string, appIndex: int): Promise<string>
```

获取指定包名和分身索引的应用名称。使用Promise异步回调。

**Since:** 26.0.0

**Required permissions:** 

 ohos.permission.GET_BUNDLE_INFO_PRIVILEGED

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.BundleManager.BundleFramework.Resource

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | 应用的包名。 |
| appIndex | int | Yes | 表示应用索引。取值范围0~5，取值为0表示主应用，取值1~5表示分身应用的索引。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;string> | Promise对象，调用成功返回应用名称；调用失败返回错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 17700001 | The specified bundle is not found. |
| 17700061 | The specified app index is invalid. |

**Example**

```TypeScript
import { bundleManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
  bundleManager.getApplicationLabel('com.hap.myapplication', 1).then((data: string) => {
    hilog.info(0x0000, 'testTag', 'getApplicationLabel succeed: Data: %{public}s', data);
  }).catch((err: BusinessError) => {
    hilog.error(0x0000, 'testTag', 'getApplicationLabel failed: %{public}d  %{public}s', err.code, err.message);
  });
} catch (err) {
  let code = (err as BusinessError).code;
  let message = (err as BusinessError).message;
  hilog.error(0x0000, 'testTag', 'getApplicationLabel failed: error %{public}d  %{public}s', err.code, err.message);
}

```

