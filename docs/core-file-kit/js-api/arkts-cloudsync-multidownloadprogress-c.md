# MultiDownloadProgress

云文件批量缓存的进度信息。

**Since:** 20

**System capability:** SystemCapability.FileManagement.DistributedFileService.CloudSync.Core

## Modules to Import

```TypeScript
import { cloudSync } from '@kit.CoreFileKit';
```

## getFailedFiles

```TypeScript
getFailedFiles(): Array<FailedFileInfo>
```

获取批量缓存失败的文件列表。

**Since:** 20

**System capability:** SystemCapability.FileManagement.DistributedFileService.CloudSync.Core

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;FailedFileInfo> | 返回缓存失败的文件URI列表及其对应的错误类型。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 22400005 | Inner error. Possible causes:  1.Failed to access the database or execute the SQL statement.  2.System error, such as a null pointer, insufficient memory or a JS engine exception. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let taskId = -1;
let failedList: Array<cloudSync.FailedFileInfo> = [];
let fileCache = new cloudSync.CloudFileCache();
let callback = (data: cloudSync.MultiDownloadProgress) => {
  console.info(`Batch download progress: downloadedSize: ${data.downloadedSize}, totalSize: ${data.totalSize}`);
  if (data.state == cloudSync.State.FAILED) {
    console.info(`Batch download stopped, error type: ${data.errType}.`);
    failedList = data.getFailedFiles();
  }
};

try {
  fileCache.on('batchDownload', callback);
} catch (e) {
  let error = e as BusinessError;
  console.error(`Failed to register download callback, error code: ${error.code}, message: ${error.message}`);
}

let uriList: Array<string> = [];
fileCache.startBatch(uriList, cloudSync.DownloadFileType.CONTENT).then((downloadId: number) => {
  taskId = downloadId;
  console.info("start batch download successfully");
}).catch((err: BusinessError) => {
  console.error(`start batch download failed with error message: ${err.message}, error code: ${err.code}`);
});

```

## getSuccessfulFiles

```TypeScript
getSuccessfulFiles(): Array<string>
```

获取批量缓存成功的文件列表。

**Since:** 20

**System capability:** SystemCapability.FileManagement.DistributedFileService.CloudSync.Core

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;string> | 数组类型，返回缓存成功的文件URI列表。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 22400005 | Inner error. Possible causes:  1.Failed to access the database or execute the SQL statement.  2.System error, such as a null pointer, insufficient memory or a JS engine exception. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let finishedList: Array<string> = [];
let fileCache = new cloudSync.CloudFileCache();
let callback = (data: cloudSync.MultiDownloadProgress) => {
  console.info(`Batch download progress: downloadedSize: ${data.downloadedSize}, totalSize: ${data.totalSize}`);
  if (data.state == cloudSync.State.COMPLETED) {
    console.info(`Batch download stopped, error type: ${data.errType}.`);
    finishedList = data.getSuccessfulFiles();
  }
};

try {
  fileCache.on('batchDownload', callback);
} catch (e) {
  const error = e as BusinessError;
  console.error(`Failed to register download callback, error code: ${error.code}, message: ${error.message}`);
}

let uriList: Array<string> = [];
fileCache.startBatch(uriList, cloudSync.DownloadFileType.CONTENT).then((downloadId: number) => {
  console.info(`start batch download successfully, taskId: ${downloadId}`);
}).catch((err: BusinessError) => {
  console.error(`start batch download failed with error message: ${err.message}, error code: ${err.code}`);
});

```

## errType

```TypeScript
errType: DownloadErrorType
```

返回批量缓存任务执行失败时的错误类型。

**Type:** DownloadErrorType

**Since:** 20

**System capability:** SystemCapability.FileManagement.DistributedFileService.CloudSync.Core

## totalSize

```TypeScript
totalSize: long
```

待缓存的文件总大小，取值范围为 [0, INT64_MAX)，单位为 Byte。如果进度异常，返回值为 INT64_MAX。

**Type:** long

**Since:** 20

**System capability:** SystemCapability.FileManagement.DistributedFileService.CloudSync.Core

## failedCount

```TypeScript
failedCount: int
```

缓存失败的文件数，取值范围为0至400，单位：个。如果进度异常，返回值为-1。

**Type:** int

**Since:** 20

**System capability:** SystemCapability.FileManagement.DistributedFileService.CloudSync.Core

## successfulCount

```TypeScript
successfulCount: int
```

缓存成功的文件数量，取值范围为0至400，单位：个。如果进度异常，返回值为-1。

**Type:** int

**Since:** 20

**System capability:** SystemCapability.FileManagement.DistributedFileService.CloudSync.Core

## state

```TypeScript
state: State
```

批量缓存任务的执行状态。

**Type:** State

**Since:** 20

**System capability:** SystemCapability.FileManagement.DistributedFileService.CloudSync.Core

## totalCount

```TypeScript
totalCount: int
```

文件总数，取值范围为0至400，单位：个。如果进度异常，返回值为-1。

**Type:** int

**Since:** 20

**System capability:** SystemCapability.FileManagement.DistributedFileService.CloudSync.Core

## downloadedSize

```TypeScript
downloadedSize: long
```

已缓存的文件大小，取值范围为 [0, INT64_MAX)，单位：Byte。如果进度异常，返回值为 INT64_MAX。

**Type:** long

**Since:** 20

**System capability:** SystemCapability.FileManagement.DistributedFileService.CloudSync.Core

## taskId

```TypeScript
taskId: long
```

批量缓存任务的ID，取值范围为0到INT64_MAX。如果进度异常，返回值为-1。

**Type:** long

**Since:** 20

**System capability:** SystemCapability.FileManagement.DistributedFileService.CloudSync.Core

