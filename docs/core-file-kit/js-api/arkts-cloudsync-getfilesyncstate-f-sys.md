# getFileSyncState

## getFileSyncState

```TypeScript
function getFileSyncState(uri: Array<string>): Promise<Array<FileSyncState>>
```

异步方法获取文件同步状态。使用Promise异步回调。

**Since:** 11

**Required permissions:** 

 ohos.permission.CLOUDFILE_SYNC

**System capability:** SystemCapability.FileManagement.DistributedFileService.CloudSync.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uri | Array&lt;string> | Yes | 待获取同步状态的uri。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;FileSyncState>> | Promise对象，返回文件同步状态的结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed, usually the result returned by VerifyAccessToken. |
| 202 | Permission verification failed, application which is not a system application uses  system API. |
| 401 | The input parameter is invalid.Possible causes:1.Mandatory parameters are left  unspecified;  2.Incorrect parameter types. |
| 13600001 | IPC error. |
| 13900002 | No such file or directory. |
| 14000002 | Invalid uri. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let uris: Array<string> = ["file://uri"];
cloudSync.getFileSyncState(uris).then((syncStates: Array<cloudSync.FileSyncState>) => {
  for(let i = 0, len = syncStates.length; i < len; i++){
    console.info("get file sync state successfully" + syncStates[i]);
  }
}).catch((err: BusinessError) => {
  console.error("get file sync state failed with error message: " + err.message + ", error code: " + err.code);
});


```

## getFileSyncState

```TypeScript
function getFileSyncState(uri: Array<string>, callback: AsyncCallback<Array<FileSyncState>>): void
```

异步方法获取文件同步状态。使用callback异步回调。

**Since:** 11

**Required permissions:** 

 ohos.permission.CLOUDFILE_SYNC

**System capability:** SystemCapability.FileManagement.DistributedFileService.CloudSync.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uri | Array&lt;string> | Yes | 待获取同步状态的uri。 |
| callback | AsyncCallback&lt;Array&lt;FileSyncState>> | Yes | 回调函数。异步获取文件状态。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed, usually the result returned by VerifyAccessToken. |
| 202 | Permission verification failed, application which is not a system application uses  system API. |
| 401 | The input parameter is invalid.Possible causes:1.Mandatory parameters are left  unspecified;  2.Incorrect parameter types. |
| 13600001 | IPC error. |
| 13900002 | No such file or directory. |
| 14000002 | Invalid uri. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let uris: Array<string> = ["file://uri"];
cloudSync.getFileSyncState(uris, (err: BusinessError, syncStates: Array<cloudSync.FileSyncState>) => {
  if (err) {
    console.error("get file sync state with error message: " + err.message + ", error code: " + err.code);
  } else {
    for(let i = 0, len = syncStates.length; i < len; i++){
      console.info("get file sync state successfully" + syncStates[i]);
  }
  }
});

```

## getFileSyncState

```TypeScript
function getFileSyncState(uri: string): FileSyncState
```

获取文件同步状态。

**Since:** 12

**System capability:** SystemCapability.FileManagement.DistributedFileService.CloudSync.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uri | string | Yes | 待下载文件uri。 |

**Return value:**

| Type | Description |
| --- | --- |
| FileSyncState | 返回给定文件的同步状态。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Permission verification failed, application which is not a system application uses  system API. |
| 401 | The input parameter is invalid.Possible causes:1.Mandatory parameters are left  unspecified;  2.Incorrect parameter types. |
| 13900002 | No such file or directory. |
| 13900004 | Interrupted system call |
| 13900010 | Try again |
| 13900012 | Permission denied by the file system |
| 13900031 | Function not implemented |
| 13900042 | Unknown error |
| 14000002 | Invalid uri. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { fileUri } from '@kit.CoreFileKit';

let path = "/data/storage/el2/cloud/1.txt";
let uri = fileUri.getUriFromPath(path);
try {
  let state = cloudSync.getFileSyncState(uri);
} catch (err) {
  let error:BusinessError = err as BusinessError;
  console.error("getFileSyncStatefailed with error: " + JSON.stringify(error));
}

```

