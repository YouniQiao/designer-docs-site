# getBundlesLocalFilePresentStatus

## getBundlesLocalFilePresentStatus

```TypeScript
function getBundlesLocalFilePresentStatus(bundleNames: Array<string>): Promise<Array<LocalFilePresentStatus>>
```

对接入云盘的应用，检测其在云盘存储空间内是否存在未上云文件，支持同时查询多个应用。使用Promise异步回调。

**Since:** 23

**Required permissions:** 

 ohos.permission.CLOUDFILE_SYNC_MANAGER

**System capability:** SystemCapability.FileManagement.DistributedFileService.CloudSyncManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleNames | Array&lt;string> | Yes | 需要检测的应用包名数组。每个元素为应用的包名字符串。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;LocalFilePresentStatus>> | Promise对象，返回对象数组，数组内每个对象包含指定检测的应用包名及其本地文件存在状态。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed. |
| 202 | The caller is not a system application. |
| 13600001 | IPC error. Possible causes:  1.IPC failed or timed out. 2.Failed to load the service. |
| 13900010 | Try again. |
| 13900020 | Invalid argument. Possible causes:  1.Mandatory parameter are left unspecified. 2.The length of the input parameter exceeds the upper limit.  3.The input parameter contains an invalid bundleName. |
| 22400005 | Inner error. Possible causes:  1.Failed to access the database or execute the SQL statement.  2.System error, such as a null pointer, insufficient memory or a JS engine exception. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let bundles: Array<string> = ['com.example.app1', 'com.example.app2'];
cloudSyncManager.getBundlesLocalFilePresentStatus(bundles).then((results: Array<cloudSyncManager.LocalFilePresentStatus>) => {
  results.forEach((item) => {
    console.info(`bundle: ${item.bundleName}, hasLocalUncloudedFiles: ${item.isLocalFilePresent}`);
  });
}).catch((err: BusinessError) => {
  console.error(`getBundlesLocalFilePresentStatus failed, code: ${err.code}, message: ${err.message}`);
});

```

