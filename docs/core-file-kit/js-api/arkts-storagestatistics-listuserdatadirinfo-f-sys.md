# listUserdataDirInfo

## listUserdataDirInfo

```TypeScript
function listUserdataDirInfo(): Promise<Array<UserdataDirInfo>>
```

查询用户设备中/data目录下的空间占用详情，使用Promise异步回调。

**Since:** 23

**Required permissions:** 

 ohos.permission.STORAGE_MANAGER

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.FileManagement.StorageService.SpatialStatistics

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;UserdataDirInfo>> | Promise对象，返回用户设备中/data目录下的空间占用详情。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed. |
| 202 | The caller is not a system application. |
| 13600001 | IPC error. |
| 13600015 | Failed to traverse the query data partition directory. |

**Example**

```TypeScript
import { storageStatistics } from '@kit.CoreFileKit';
import { BusinessError } from '@kit.BasicServicesKit';

storageStatistics.listUserdataDirInfo().then((dirInfos: storageStatistics.UserdataDirInfo[]) => {
  console.info("listUserdataDirInfo successfully.");
}).catch((err: BusinessError) => {
  console.error(`listUserdataDirInfo failed with err, code is: ${err.code}, message is: ${err.message}`);
});

```

