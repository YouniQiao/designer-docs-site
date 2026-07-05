# optimizeStorage

## optimizeStorage

```TypeScript
function optimizeStorage():Promise<void>
```

优化图库已同步云空间的本地资源，按照本地剩余空间执行自动老化策略。使用Promise异步回调。

**Since:** 17

**Required permissions:** 

 ohos.permission.CLOUDFILE_SYNC

**System capability:** SystemCapability.FileManagement.DistributedFileService.CloudSync.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed, usually the result returned by VerifyAccessToken. |
| 202 | Permission verification failed, application which is not a system application uses  system API.  2.Incorrect parameter types. |
| 13600001 | IPC error. |
| 13900042 | Unknown error. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

cloudSync.optimizeStorage().then(() => {
  console.info("optimize storage successfully");   // The foreground UX waits for blocking operations to complete.
}).catch((err: BusinessError) => {
  console.error("optimize storage failed with error message: " + err.message + ", error code: " + err.code);
});

```

