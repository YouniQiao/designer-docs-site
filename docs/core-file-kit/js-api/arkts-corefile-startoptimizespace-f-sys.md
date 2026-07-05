# startOptimizeSpace (System API)

## Modules to Import

```TypeScript
import { cloudSync } from '@ohos.file.cloudSync';
```

## startOptimizeSpace

```TypeScript
function startOptimizeSpace(optimizePara: OptimizeSpaceParam, callback?: Callback<OptimizeSpaceProgress>): Promise<void>
```

Optimizes local resources that have been synced to the cloud and optimizes local images and videos that have not been accessed before the aging period expires. This API uses a promise to return the result. The callback returns the optimization progress. startOptimizeSpace is used together with **stopOptimizeSpace**. If **startOptimizeSpace** is called repeatedly, the error code 22400006 will be returned, indicating that other tasks are being executed.

**Since:** 17

**Required permissions:** ohos.permission.CLOUDFILE_SYNC

**System capability:** SystemCapability.FileManagement.DistributedFileService.CloudSync.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| optimizePara | OptimizeSpaceParam | Yes | Optimizes parameters. |
| callback | Callback&lt;OptimizeSpaceProgress&gt; | No | Callback used to return the optimization progress. By default, error code 401 is returned and no clearing task is executed. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed, usually the result returned by VerifyAccessToken. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed, application which is not a system application usessystem API. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types. |
| 13600001 | IPC error. |
| 22400005 | Inner error. |
| 22400006 | The same task is already in progress. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let para:cloudSync.OptimizeSpaceParam = {totalSize: 1073741824, agingDays: 30};
let callback = (data:cloudSync.OptimizeSpaceProgress) => {
  if (data.state == cloudSync.OptimizeState.FAILED) {
    console.info("optimize space failed");
  } else if (data.state == cloudSync.OptimizeState.COMPLETED && data.progress == 100) {
    console.info("optimize space successfully");
  } else if (data.state == cloudSync.OptimizeState.RUNNING) {
    console.info("optimize space progress: " + data.progress);
  }
}
cloudSync.startOptimizeSpace(para, callback).then(() => {
  console.info("start optimize space");
}).catch((err: BusinessError) => {
  console.error("start optimize space failed with error message: " + err.message + ", error code: " + err.code);
});

```

