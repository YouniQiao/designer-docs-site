# getExtBundleStats

## getExtBundleStats

```TypeScript
function getExtBundleStats(userId: int, businessName: string): Promise<ExtBundleStats>
```

获取指定用户、指定系统应用包名或系统服务名称的空间占用详情。使用Promise异步回调。

**Since:** 23

**Required permissions:** 

 ohos.permission.STORAGE_MANAGER

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.FileManagement.StorageService.SpatialStatistics

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| userId | int | Yes | 用户id。 |
| businessName | string | Yes | 系统应用包名或系统服务名称。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;ExtBundleStats> | Promise对象，返回指定用户、指定系统应用包名或系统服务名称的空间占用详情。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed. |
| 202 | The caller is not a system application. |
| 13600001 | IPC error. |
| 13600010 | The input parameter is invalid. |
| 13600012 | Failed to query the specified business space usage. |

**Example**

```TypeScript
import { storageStatistics } from '@kit.CoreFileKit';
import { BusinessError } from '@kit.BasicServicesKit';

let userId: number = 100;
let businessName: string = 'com.example.storagedemo';
storageStatistics.getExtBundleStats(userId, businessName).then((bundleStats: storageStatistics.ExtBundleStats) => {
  console.info("getExtBundleStats successfully.");
}).catch((err: BusinessError) => {
  console.error(`getExtBundleStats failed with err, code is: ${err.code}, message is: ${err.message}`);
});

```

