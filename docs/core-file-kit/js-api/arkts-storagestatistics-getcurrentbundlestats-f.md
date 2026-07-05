# getCurrentBundleStats

## getCurrentBundleStats

```TypeScript
function getCurrentBundleStats(callback: AsyncCallback<BundleStats>): void
```

应用异步获取当前应用存储空间大小（单位为Byte），使用callback异步回调。

**Since:** 9

**System capability:** SystemCapability.FileManagement.StorageService.SpatialStatistics

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;BundleStats> | Yes | 获取指定卷上的应用存储空间大小之后的回调。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | The input parameter is invalid.Possible causes:Mandatory  parameters are left unspecified; |
| 13600001 | IPC error. |
| 13900042 | Unknown error. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
storageStatistics.getCurrentBundleStats((error: BusinessError, bundleStats: storageStatistics.BundleStats) => {
  if (error) {
    console.error("getCurrentBundleStats failed with error:" + JSON.stringify(error));
  } else {
    // Do something.
    console.info("getCurrentBundleStats successfully:" + JSON.stringify(bundleStats));
  }
});

```

## getCurrentBundleStats

```TypeScript
function getCurrentBundleStats(): Promise<BundleStats>
```

应用异步获取当前应用存储空间大小（单位为Byte），以Promise方式返回。

**Since:** 9

**System capability:** SystemCapability.FileManagement.StorageService.SpatialStatistics

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;BundleStats> | Promise对象，返回指定卷上的应用存储空间大小（单位为Byte）。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | The input parameter is invalid.Possible causes:Mandatory  parameters are left unspecified; |
| 13600001 | IPC error. |
| 13900042 | Unknown error. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
storageStatistics.getCurrentBundleStats().then((BundleStats: storageStatistics.BundleStats) => {
  console.info("getCurrentBundleStats successfully:" + JSON.stringify(BundleStats));
}).catch((err: BusinessError) => {
  console.error("getCurrentBundleStats failed with error:"+ JSON.stringify(err));
});

```

