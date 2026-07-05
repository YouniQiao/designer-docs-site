# getFreeSizeSync

## getFreeSizeSync

```TypeScript
function getFreeSizeSync(): long
```

同步获取内置存储的可用空间大小（单位为Byte）。

**Since:** 10

**Required permissions:** 

- API version10  to  14: ohos.permission.STORAGE_MANAGER

**System capability:** SystemCapability.FileManagement.StorageService.SpatialStatistics

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| long | 返回内置存储的可用空间大小（单位为Byte）。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed. [since 10 - 14] |
| 202 | The caller is not a system application. [since 10 - 14] |
| 13600001 | IPC error. |
| 13900042 | Unknown error. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
try {
  let number = storageStatistics.getFreeSizeSync();
  console.info("getFreeSizeSync successfully:" + JSON.stringify(number));
} catch (err) {
  let error: BusinessError = err as BusinessError;
  console.error("getFreeSizeSync failed with error:" + JSON.stringify(error));
}

```

