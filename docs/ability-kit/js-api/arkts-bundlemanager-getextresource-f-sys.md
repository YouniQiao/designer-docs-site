# getExtResource

## getExtResource

```TypeScript
function getExtResource(bundleName: string): Promise<Array<string>>
```

根据给定的bundleName获得扩展资源对应的moduleNames。使用Promise异步回调。

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
| Promise&lt;Array&lt;string>> | Promise对象，返回接口运行结果及扩展资源对应的moduleNames。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Permission denied, non-system app called system api. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.  Incorrect parameter types. |
| 17700001 | The specified bundleName is not found. |
| 17700303 | Failed to obtain extended resources. |

**Example**

```TypeScript
import { bundleManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

let bundleName: string = 'com.ohos.demo';

try {
  bundleManager.getExtResource(bundleName).then((modules: Array<string>) => {
    for (let i = 0; i < modules.length; i++) {
      hilog.info(0x0000, 'testTag', 'getExtResource item: %{public}s', modules[i]);
    }
  }).catch((err: BusinessError) => {
    hilog.error(0x0000, 'testTag', 'getExtResource failed. Cause: %{public}s', err.message);
  });
} catch (err) {
  let message = (err as BusinessError).message;
  hilog.error(0x0000, 'testTag', 'getExtResource failed. Cause: %{public}s', message);
}

```

