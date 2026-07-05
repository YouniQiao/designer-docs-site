# getAllBundleCacheSize

## getAllBundleCacheSize

```TypeScript
function getAllBundleCacheSize(): Promise<long>
```

获取全局缓存大小，单位：字节。使用Promise异步回调。 有程序运行时的应用的缓存、或者在[应用配置指南](docroot://../device-dev/subsystems/subsys-app-privilege-config-guide.md)中已配置“ AllowAppDataNotCleared”特权的应用的缓存，无法被获取。

**Since:** 15

**Required permissions:** 

 ohos.permission.GET_BUNDLE_INFO_PRIVILEGED

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;long> | Promise对象。返回全局缓存大小，以字节为单位。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Permission denied, non-system app called system api. |

**Example**

```TypeScript
import { bundleManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
  bundleManager.getAllBundleCacheSize().then((data) => {
    hilog.info(0x0000, 'testTag', 'getAllBundleCacheSize successful. Data: ' + JSON.stringify(data));
  }).catch((err: BusinessError) => {
    hilog.error(0x0000, 'testTag', 'getAllBundleCacheSize failed: %{public}s', err.message);
  });
} catch (err) {
  let message = (err as BusinessError).message;
  hilog.error(0x0000, 'testTag', 'getAllBundleCacheSize failed: %{public}s', message);
}

```

