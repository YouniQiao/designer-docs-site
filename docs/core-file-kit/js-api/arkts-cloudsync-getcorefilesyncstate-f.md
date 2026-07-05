# getCoreFileSyncState

## getCoreFileSyncState

```TypeScript
function getCoreFileSyncState(uri: string): FileState
```

同步方法获取云盘文件同步上行状态。

**Since:** 20

**System capability:** SystemCapability.FileManagement.DistributedFileService.CloudSync.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uri | string | Yes | 待获取云盘文件同步上行状态的文件URI。 |

**Return value:**

| Type | Description |
| --- | --- |
| FileState | 返回给定云盘文件的同步上行状态。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 13600001 | IPC error. Possible causes:  1.IPC failed or timed out. 2.Failed to load the service. |
| 13900002 | No such file or directory. |
| 13900004 | Interrupted system call |
| 13900010 | Try again |
| 13900012 | Permission denied by the file system |
| 13900020 | Invalid argument. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types. |
| 13900031 | Function not implemented |
| 14000002 | Invalid URI. |
| 22400005 | Inner error. Possible causes:  1.Failed to access the database or execute the SQL statement.  2.System error, such as a null pointer, insufficient memory or a JS engine exception. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { fileUri } from '@kit.CoreFileKit';

let path = "/data/storage/el2/cloud/1.txt";
let uri = fileUri.getUriFromPath(path);
try {
  let state = cloudSync.getCoreFileSyncState(uri);
} catch (err) {
  let error:BusinessError = err as BusinessError;
  console.error(`getCoreFileSyncState failed with error ${error.code}, message is ${error.message}`);
}

```

