# CloudFileCache

云盘文件缓存对象，用来支撑文件管理应用原文件下载流程。

**Since:** 11

**System capability:** SystemCapability.FileManagement.DistributedFileService.CloudSync.Core

## Modules to Import

```TypeScript
import { cloudSync } from '@kit.CoreFileKit';
```

## cleanCache

```TypeScript
cleanCache(uri: string): void
```

同步方法删除文件缓存。

**Since:** 11

**Required permissions:** 

 ohos.permission.CLOUDFILE_SYNC

**System capability:** SystemCapability.FileManagement.DistributedFileService.CloudSync.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uri | string | Yes | 待删除缓存文件的uri。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed, usually the result returned by VerifyAccessToken. |
| 202 | Permission verification failed, application which is not a system application  uses system API. |
| 401 | The input parameter is invalid.Possible causes:1.Mandatory parameters are left  unspecified;  2.Incorrect parameter types. |
| 13600001 | IPC error. |
| 13900002 | No such file or directory. |
| 14000002 | Invalid uri. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { fileUri } from '@kit.CoreFileKit';

let fileCache = new cloudSync.CloudFileCache();
let path = "/data/storage/el2/cloud/1.txt";
let uri = fileUri.getUriFromPath(path);

try {
  fileCache.cleanCache(uri);
} catch (err) {
  let error:BusinessError = err as BusinessError;
  console.error("clean cache failed with error message: " + err.message + ", error code: " + err.code);
} 


```

## cleanFileCache

```TypeScript
cleanFileCache(uri: string): void
```

同步方法删除文件缓存。

**Since:** 20

**System capability:** SystemCapability.FileManagement.DistributedFileService.CloudSync.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uri | string | Yes | 待删除缓存文件的URI。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 13600001 | IPC error. Possible causes:  1.IPC failed or timed out. 2.Failed to load the service. |
| 13900002 | No such file or directory. |
| 13900010 | Try again. |
| 13900012 | Permission denied by the file system |
| 13900020 | Invalid argument. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types. |
| 14000002 | Invalid URI. |
| 22400005 | Inner error. Possible causes:  1.Failed to access the database or execute the SQL statement.  2.System error, such as a null pointer, insufficient memory or a JS engine exception. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { fileUri } from '@kit.CoreFileKit';

let fileCache = new cloudSync.CloudFileCache();
let path = "/data/storage/el2/cloud/1.txt";
let uri = fileUri.getUriFromPath(path);

try {
  fileCache.cleanFileCache(uri);
} catch (err) {
  let error:BusinessError = err as BusinessError;
  console.error("clean file cache failed with error message: " + err.message + ", error code: " + err.code);
}


```

## cleanFileCache

```TypeScript
cleanFileCache(): Promise<void>
```

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.FileManagement.DistributedFileService.CloudSync.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | - Return Promise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 13900010 | Try again. |

## constructor

```TypeScript
constructor()
```

A constructor used to create a **CloudFileCache** instance. Data is not shared between multiple instances.

**Since:** 11

**System capability:** SystemCapability.FileManagement.DistributedFileService.CloudSync.Core

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | The input parameter is invalid.Possible causes:Incorrect parameter types. |

**Example**

```TypeScript
let fileCache = new cloudSync.CloudFileCache();

```

## constructor

```TypeScript
constructor(bundleName: string)
```

A constructor used to create a CloudFileCache object.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.FileManagement.DistributedFileService.CloudSync.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | Name of the bundle that need to start download task and subscribes download  progress. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | The caller is not a system application. |

## getCachedTotalSize

```TypeScript
getCachedTotalSize(): Promise<long>
```

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.FileManagement.DistributedFileService.CloudSync.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;long> | - Return the total size of cached files. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 13900010 | Try again. |

## getDownloadList

```TypeScript
getDownloadList(uris: Array<string>): Promise<Array<DownloadProgress>>
```

获取文件下载进度列表。使用Promise异步回调。

**Since:** 26.0.0

**Required permissions:** 

 ohos.permission.CLOUDFILE_SYNC

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.FileManagement.DistributedFileService.CloudSync.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uris | Array&lt;string> | Yes | 待查询下载进度的文件URI数组，数组长度取值范围[1,100]。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;DownloadProgress>> | - Promise对象，返回文件下载进度列表的结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed. |
| 202 | The caller is not a system application. |
| 13900010 | Try again. |
| 13900020 | Invalid argument. Possible causes:  1.Mandatory parameters are left unspecified. 2.The length of the input parameter exceeds the upper limit.  3.The input parameter contains an invalid uri. |

## off

```TypeScript
off(event: 'progress', callback?: Callback<DownloadProgress>): void
```

云盘文件缓存对象移除'progress'类型的指定callback回调。

**Since:** 11

**System capability:** SystemCapability.FileManagement.DistributedFileService.CloudSync.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | 'progress' | Yes | 取消订阅的事件类型，取值为'progress'（同步过程事件）。 |
| callback | Callback&lt;DownloadProgress> | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | The input parameter is invalid.Possible causes:1.Mandatory parameters are left  unspecified;  2.Incorrect parameter types. |
| 13600001 | IPC error |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let fileCache = new cloudSync.CloudFileCache();

let callback = (pg: cloudSync.DownloadProgress) => {
  console.info("download state: " + pg.state);
}

try {
  fileCache.on('progress', callback);
  fileCache.off('progress', callback);
} catch (e) {
  const error = e as BusinessError;
  console.error(`Error code: ${error.code}, message: ${error.message}`);
}

```

## off

```TypeScript
off(event: 'batchDownload', callback?: Callback<MultiDownloadProgress>): void
```

云盘文件缓存对象移除由 [on]cloudSync.CloudFileCache#on(event: 'batchDownload', callback: Callback<MultiDownloadProgress>)接口添加的云文 件批量缓存过程事件的监听。

**Since:** 20

**System capability:** SystemCapability.FileManagement.DistributedFileService.CloudSync.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | 'batchDownload' | Yes | 取消订阅的事件类型，取值为'batchDownload'，表示批量缓存过程事件。 |
| callback | Callback&lt;MultiDownloadProgress> | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 13900020 | Invalid argument. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types. |
| 22400005 | Inner error. Possible causes:  1.Failed to access the database or execute the SQL statement.  2.System error, such as a null pointer, insufficient memory or a JS engine exception. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let fileCache = new cloudSync.CloudFileCache();
let callback = (pg: cloudSync.MultiDownloadProgress) => {
  console.info("download state: " + pg.state);
}

try {
  fileCache.on('batchDownload', callback);
  fileCache.off('batchDownload', callback);
} catch (e) {
  let error = e as BusinessError;
  console.error(`Failed to unregister download callback, error code: ${error.code}, message: ${error.message}`);
}

```

## offBatchDownload

```TypeScript
offBatchDownload(callback?: Callback<MultiDownloadProgress>): void
```

Unsubscribes from cloud file cache download progress event.

**Since:** 23

**System capability:** SystemCapability.FileManagement.DistributedFileService.CloudSync.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;MultiDownloadProgress> | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 13900020 | Invalid argument. Possible causes:Incorrect parameter types. |
| 22400005 | Inner error. Possible causes:  1.Failed to access the database or execute the SQL statement.  2.System error, such as a null pointer, insufficient memory or a JS engine exception. |

## offProgress

```TypeScript
offProgress(callback?: Callback<DownloadProgress>): void
```

Unsubscribes from cloud file cache download progress event.

**Since:** 23

**System capability:** SystemCapability.FileManagement.DistributedFileService.CloudSync.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;DownloadProgress> | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | The input parameter is invalid.Possible causes:Incorrect parameter types. |
| 13600001 | IPC error |

## on

```TypeScript
on(event: 'progress', callback: Callback<DownloadProgress>): void
```

添加云盘文件缓存过程事件监听。

**Since:** 11

**System capability:** SystemCapability.FileManagement.DistributedFileService.CloudSync.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | 'progress' | Yes | 订阅的事件类型，取值为'progress'（下载过程事件）。 |
| callback | Callback&lt;DownloadProgress> | Yes | 回调函数。云文件下载过程事件。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | The input parameter is invalid.Possible causes:1.Mandatory parameters are left  unspecified;  2.Incorrect parameter types. |
| 13600001 | IPC error |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let fileCache = new cloudSync.CloudFileCache();
let callback = (pg: cloudSync.DownloadProgress) => {
  console.info("download state: " + pg.state);
};

try {
  fileCache.on('progress', callback);
} catch (e) {
  const error = e as BusinessError;
  console.error(`Error code: ${error.code}, message: ${error.message}`);
}

```

## on

```TypeScript
on(event: 'batchDownload', callback: Callback<MultiDownloadProgress>): void
```

添加云文件批量缓存事件的监听。

**Since:** 20

**System capability:** SystemCapability.FileManagement.DistributedFileService.CloudSync.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | 'batchDownload' | Yes | 订阅的事件类型，取值为'batchDownload'，表示批量缓存过程事件。 |
| callback | Callback&lt;MultiDownloadProgress> | Yes | 回调函数。云文件批量缓存过程事件。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 13900020 | Invalid argument. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types. |
| 22400005 | Inner error. Possible causes:  1.Failed to access the database or execute the SQL statement.  2.System error, such as a null pointer, insufficient memory or a JS engine exception. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let fileCache = new cloudSync.CloudFileCache();
let callback = (data: cloudSync.MultiDownloadProgress) => {
  console.info(`Batch download progress: downloadedSize: ${data.downloadedSize}, totalSize: ${data.totalSize}`);
  if (data.state == cloudSync.State.COMPLETED) {
    console.info('Batch download finished.');
  } else if (data.state == cloudSync.State.FAILED) {
    console.info(`Batch download stopped, error type: ${data.errType}.`);
  }
};

try {
  fileCache.on('batchDownload', callback);
} catch (e) {
  let error = e as BusinessError;
  console.error(`Failed to register download callback, error code: ${error.code}, message: ${error.message}`);
}

```

## onBatchDownload

```TypeScript
onBatchDownload(callback: Callback<MultiDownloadProgress>): void
```

Subscribes to a batch of cloud file cache download progress change event. This method uses a callback to get download progress changes.

**Since:** 23

**System capability:** SystemCapability.FileManagement.DistributedFileService.CloudSync.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;MultiDownloadProgress> | Yes | callback function with a `MultiDownloadProgress` argument. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 13900020 | Invalid argument. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types. |
| 22400005 | Inner error. Possible causes:  1.Failed to access the database or execute the SQL statement.  2.System error, such as a null pointer, insufficient memory or a JS engine exception. |

## onProgress

```TypeScript
onProgress(callback: Callback<DownloadProgress>): void
```

Subscribes to cloud file cache download progress change event. This method uses a callback to get download progress changes.

**Since:** 23

**System capability:** SystemCapability.FileManagement.DistributedFileService.CloudSync.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;DownloadProgress> | Yes | callback function with a `DownloadProgress` argument. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | The input parameter is invalid.Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types. |
| 13600001 | IPC error |

## start

```TypeScript
start(uri: string): Promise<void>
```

异步方法启动云盘文件缓存。使用Promise异步回调。

**Since:** 11

**System capability:** SystemCapability.FileManagement.DistributedFileService.CloudSync.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uri | string | Yes | 待下载文件uri。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | The input parameter is invalid.Possible causes:1.Mandatory parameters are left  unspecified;  2.Incorrect parameter types. |
| 13600001 | IPC error. |
| 13900002 | No such file or directory. |
| 13900025 | No space left on device. |
| 14000002 | Invalid uri. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { fileUri } from '@kit.CoreFileKit';

let fileCache = new cloudSync.CloudFileCache();
let path = "/data/storage/el2/cloud/1.txt";
let uri = fileUri.getUriFromPath(path);

try {
  fileCache.on('progress', (pg: cloudSync.DownloadProgress) => {
    console.info("download state: " + pg.state);
  });
} catch (e) {
  const error = e as BusinessError;
  console.error(`Error code: ${error.code}, message: ${error.message}`);
}

fileCache.start(uri).then(() => {
  console.info("start download successfully");
}).catch((err: BusinessError) => {
  console.error("start download failed with error message: " + err.message + ", error code: " + err.code);
});

```

## start

```TypeScript
start(uri: string, callback: AsyncCallback<void>): void
```

异步方法启动云盘文件缓存。使用callback异步回调。

**Since:** 11

**System capability:** SystemCapability.FileManagement.DistributedFileService.CloudSync.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uri | string | Yes | 待下载文件uri。 |
| callback | AsyncCallback&lt;void> | Yes | 回调函数。异步启动云文件下载。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | The input parameter is invalid.Possible causes:1.Mandatory parameters are left  unspecified;  2.Incorrect parameter types. |
| 13600001 | IPC error. |
| 13900002 | No such file or directory. |
| 13900025 | No space left on device. |
| 14000002 | Invalid uri. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { fileUri } from '@kit.CoreFileKit';

let fileCache = new cloudSync.CloudFileCache();
let path = "/data/storage/el2/cloud/1.txt";
let uri = fileUri.getUriFromPath(path);

fileCache.start(uri, (err: BusinessError) => {
  if (err) {
    console.error("start download failed with error message: " + err.message + ", error code: " + err.code);
  } else {
    console.info("start download successfully");
  }
});

```

## startBatch

```TypeScript
startBatch(uris: Array<string>, fileType?: DownloadFileType): Promise<long>
```

启动云文件批量缓存。使用Promise异步回调。 不同的批量缓存任务可以通过接口返回的任务ID区分。

**Since:** 20

**System capability:** SystemCapability.FileManagement.DistributedFileService.CloudSync.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uris | Array&lt;string> | Yes | URI列表，一次调用最多支持传入400个URI，超过报错22400004。 |
| fileType | DownloadFileType | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;long> | Promise对象，返回启动的云文件批量缓存任务的ID。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 13600001 | IPC error. Possible causes:  1.IPC failed or timed out. 2.Failed to load the service. |
| 13900020 | Invalid argument. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types. |
| 14000002 | Invalid uri. |
| 22400004 | Exceed the maximum limit. |
| 22400005 | Inner error. Possible causes:  1.Failed to access the database or execute the SQL statement.  2.System error, such as a null pointer, insufficient memory or a JS engine exception. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let fileCache = new cloudSync.CloudFileCache();
try {
  fileCache.on('batchDownload', (pg: cloudSync.MultiDownloadProgress) => {
    console.info(`batch download state: ${pg.state}`);
  });
} catch (e) {
  let error = e as BusinessError;
  console.error(`Failed to unregister download callback, error code: ${error.code}, message: ${error.message}`);
}

let uriList: Array<string> = [];
fileCache.startBatch(uriList, cloudSync.DownloadFileType.CONTENT).then((downloadId: number) => {
  console.info(`start batch download successfully, taskId: ${downloadId}`);
}).catch((err: BusinessError) => {
  console.error(`start download failed with error message: ${err.message}, error code: ${err.code}`);
});

```

## stop

```TypeScript
stop(uri: string, needClean?: boolean): Promise<void>
```

Stops downloading a file from the Drive Kit to the local device. This API uses a promise to return the result. When **stop()** is called, the current file download process terminates, and downloaded files are retained by default. You can call **start()** to resume the download.

**Since:** 12

**System capability:** SystemCapability.FileManagement.DistributedFileService.CloudSync.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uri | string | Yes | 待下载文件uri。 |
| needClean | boolean | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | The input parameter is invalid.Possible causes:1.Mandatory parameters are left  unspecified;  2.Incorrect parameter types. |
| 13600001 | IPC error. |
| 13900002 | No such file or directory. |
| 14000002 | Invalid uri. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { fileUri } from '@kit.CoreFileKit';

let fileCache = new cloudSync.CloudFileCache();
let path = "/data/storage/el2/cloud/1.txt";
let uri = fileUri.getUriFromPath(path);

fileCache.stop(uri, true).then(() => {
  console.info("stop download successfully");
}).catch((err: BusinessError) => {
  console.error("stop download failed with error message: " + err.message + ", error code: " + err.code);
});

```

## stop

```TypeScript
stop(uri: string, callback: AsyncCallback<void>): void
```

异步方法停止云盘文件缓存。使用callback异步回调。 调用stop接口，当前文件下载流程会终止，不删除缓存文件，再次调用start接口重新启动下载。

**Since:** 11

**System capability:** SystemCapability.FileManagement.DistributedFileService.CloudSync.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uri | string | Yes | 待下载文件uri。 |
| callback | AsyncCallback&lt;void> | Yes | 回调函数。异步停止云文件下载。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | The input parameter is invalid.Possible causes:1.Mandatory parameters are left  unspecified;  2.Incorrect parameter types. |
| 13600001 | IPC error. |
| 13900002 | No such file or directory. |
| 14000002 | Invalid uri. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { fileUri } from '@kit.CoreFileKit';

let fileCache = new cloudSync.CloudFileCache();
let path = "/data/storage/el2/cloud/1.txt";
let uri = fileUri.getUriFromPath(path);

fileCache.stop(uri, (err: BusinessError) => {
  if (err) {
    console.error("stop download failed with error message: " + err.message + ", error code: " + err.code);
  } else {
    console.info("stop download successfully");
  }
});

```

## stopBatch

```TypeScript
stopBatch(downloadId: long, needClean?: boolean): Promise<void>
```

停止由[startBatch]cloudSync.CloudFileCache.startBatch启动的云文件批量缓存任务。使用Promise异步回调。 调用stopBatch接口会终止当前文件批量缓存流程，未下载完成的缓存文件是否删除由needClean参数决定。

**Since:** 20

**System capability:** SystemCapability.FileManagement.DistributedFileService.CloudSync.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| downloadId | long | Yes | 需要停止缓存的任务ID。 |
| needClean | boolean | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 13600001 | IPC error. Possible causes:  1.IPC failed or timed out. 2.Failed to load the service. |
| 13900020 | Invalid argument. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types. |
| 22400005 | Inner error. Possible causes:  1.Failed to access the database or execute the SQL statement.  2.System error, such as a null pointer, insufficient memory or a JS engine exception. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let taskId = -1;
let uriList: Array<string> = [];
let fileCache = new cloudSync.CloudFileCache();
fileCache.startBatch(uriList, cloudSync.DownloadFileType.CONTENT).then((downloadId: number) => {
  taskId = downloadId;
  console.info("start batch download successfully");
}).catch((err: BusinessError) => {
  console.error(`start batch download failed with error message: ${err.message}, error code: ${err.code}`);
});

let needStop = true;
if (needStop && taskId > 0) {
  fileCache.stopBatch(taskId, true).then(() => {
    console.info("stop batch download successfully");
  }).catch((err: BusinessError) => {
    console.error(`stop batch download failed with error message: ${err.message}, error code: ${err.code}`);
  });
}

```

