# setExtBundleStats

## setExtBundleStats

```TypeScript
function setExtBundleStats(userId: int, stats: ExtBundleStats): Promise<void>
```

系统应用或系统服务上报自身的空间占用信息。使用Promise异步回调。 > **说明**： > > 入参stats中的flag为false时，businessName必须为某个应用的包名。

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
| stats | ExtBundleStats | Yes | 系统应用或系统服务的空间占用详情。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed. |
| 202 | The caller is not a system application. |
| 13600001 | IPC error. |
| 13600010 | The input parameter is invalid. |
| 13600011 | Failed to report the specified business space usage. |

**Example**

```TypeScript
import { storageStatistics } from '@kit.CoreFileKit';
import { BusinessError } from '@kit.BasicServicesKit';

let userId: number = 100;
let extBundleStats: storageStatistics.ExtBundleStats = {
  businessName: 'com.example.storagedemo',
  size: 10000,
  flag: true
}
storageStatistics.setExtBundleStats(userId, extBundleStats).then(() => {
  console.info("setExtBundleStats successfully");
}).catch((err: BusinessError) => {
  console.error(`setExtBundleStats failed with err, code is: ${err.code}, message is: ${err.message}`);
});

```

