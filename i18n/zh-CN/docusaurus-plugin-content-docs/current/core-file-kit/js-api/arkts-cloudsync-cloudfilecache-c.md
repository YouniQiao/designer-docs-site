# CloudFileCache

云盘文件缓存对象，用来支撑文件管理应用原文件下载流程。

**起始版本：** 11

**系统能力：** SystemCapability.FileManagement.DistributedFileService.CloudSync.Core

## 导入模块

```TypeScript
import { cloudSync } from '@kit.CoreFileKit';
```

## cleanCache

```TypeScript
cleanCache(uri: string): void
```

同步方法删除文件缓存。

**起始版本：** 11

**需要权限：** 

 ohos.permission.CLOUDFILE_SYNC

**系统能力：** SystemCapability.FileManagement.DistributedFileService.CloudSync.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| uri | string | 是 | 待删除缓存文件的uri。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission verification failed, usually the result returned by VerifyAccessToken. |
| 202 | Permission verification failed, application which is not a system application  uses system API. |
| 401 | The input parameter is invalid.Possible causes:1.Mandatory parameters are left  unspecified;  2.Incorrect parameter types. |
| 13600001 | IPC error. |
| 13900002 | No such file or directory. |
| 14000002 | Invalid uri. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { fileUri } from '@kit.CoreFileKit';

let fileCache = new cloudSync.CloudFileCache("com.ohos.demo");
let path = "/data/storage/el2/cloud/1.txt";
let uri = fileUri.getUriFromPath(path);

try {
  fileCache.cleanCache(uri);
} catch (err) {
  let error: BusinessError = err as BusinessError;
  console.error(`clean cache failed with error message: ${error.message}, error code: ${error.code}`);
} 


```

## cleanFileCache

```TypeScript
cleanFileCache(uri: string): void
```

同步方法删除文件缓存。

**起始版本：** 20

**系统能力：** SystemCapability.FileManagement.DistributedFileService.CloudSync.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| uri | string | 是 | 待删除缓存文件的URI。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 13600001 | IPC error. Possible causes:  1.IPC failed or timed out. 2.Failed to load the service. |
| 13900002 | No such file or directory. |
| 13900010 | Try again. |
| 13900012 | Permission denied by the file system |
| 13900020 | Invalid argument. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types. |
| 14000002 | Invalid URI. |
| 22400005 | Inner error. Possible causes:  1.Failed to access the database or execute the SQL statement.  2.System error, such as a null pointer, insufficient memory or a JS engine exception. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { fileUri } from '@kit.CoreFileKit';

let fileCache = new cloudSync.CloudFileCache();
let path = "/data/storage/el2/cloud/1.txt";
let uri = fileUri.getUriFromPath(path);

try {
  fileCache.cleanFileCache(uri);
} catch (err) {
  let error: BusinessError = err as BusinessError;
  console.error(`clean file cache failed with error message: ${error.message}, error code: ${error.code}`);
}


```

## cleanFileCache

```TypeScript
cleanFileCache(): Promise<void>
```

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.FileManagement.DistributedFileService.CloudSync.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | - Return Promise. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 13900010 | Try again. |

## constructor

```TypeScript
constructor()
```

A constructor used to create a **CloudFileCache** instance. Data is not shared between multiple instances.

**起始版本：** 11

**系统能力：** SystemCapability.FileManagement.DistributedFileService.CloudSync.Core

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | The input parameter is invalid.Possible causes:Incorrect parameter types. |

**示例：**

```TypeScript
let fileCache = new cloudSync.CloudFileCache();

```

## constructor

```TypeScript
constructor(bundleName: string)
```

A constructor used to create a CloudFileCache object.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.FileManagement.DistributedFileService.CloudSync.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| bundleName | string | 是 | Name of the bundle that need to start download task and subscribes download  progress. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | The caller is not a system application. |

**示例：**

```TypeScript
let fileCache = new cloudSync.CloudFileCache("com.ohos.demo");

```

## getCachedTotalSize

```TypeScript
getCachedTotalSize(): Promise<long>
```

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.FileManagement.DistributedFileService.CloudSync.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;long> | - Return the total size of cached files. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 13900010 | Try again. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { fileUri } from '@kit.CoreFileKit';

let fileCache = new cloudSync.CloudFileCache();

fileCache.getCachedTotalSize().then((totalDownloadSize: number) => {
  console.info("totalDownloadSize: " + totalDownloadSize);
}).catch((err: BusinessError) => {
  console.error("get totalDownloadSize failed with error message: " + err.message + ", error code: " + err.code);
});


```

## getDownloadList

```TypeScript
getDownloadList(uris: Array<string>): Promise<Array<DownloadProgress>>
```

获取文件下载进度列表。使用Promise异步回调。

**起始版本：** 26.0.0

**需要权限：** 

 ohos.permission.CLOUDFILE_SYNC

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.FileManagement.DistributedFileService.CloudSync.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| uris | Array&lt;string> | 是 | 待查询下载进度的文件URI数组，数组长度取值范围[1,100]。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Array&lt;DownloadProgress>> | - Promise对象，返回文件下载进度列表的结果。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission verification failed. |
| 202 | The caller is not a system application. |
| 13900010 | Try again. |
| 13900020 | Invalid argument. Possible causes:  1.Mandatory parameters are left unspecified. 2.The length of the input parameter exceeds the upper limit.  3.The input parameter contains an invalid uri. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { fileUri } from '@kit.CoreFileKit';

let fileCache = new cloudSync.CloudFileCache();
let path1 = "/data/storage/el2/cloud/1.txt";
let path2 = "/data/storage/el2/cloud/2.txt";
let uri1 = fileUri.getUriFromPath(path1);
let uri2 = fileUri.getUriFromPath(path2);
let uriArray = [uri1, uri2];

try {
  fileCache.getDownloadList(uriArray).then((downloadList: Array<cloudSync.DownloadProgress>) => {
    console.info("get download list successfully");
    for (let i = 0; i < downloadList.length; i++) {
      console.info("download progress - uri: ".concat(downloadList[i].uri, ", state: ").concat(downloadList[i].state.toString()));
      console.info("processed: ".concat(downloadList[i].processed.toString(), ", size: ").concat(downloadList[i].size.toString()));
      console.info("error: ".concat(downloadList[i].error.toString()));
    }
  }).catch((error: BusinessError) => {
    console.error("get download list failed with error message: " + error.message + ", error code: " + error.code);
  });
} catch (err) {
  let error: BusinessError = err as BusinessError;
  console.error("get download list failed with error message: " + error.message + ", error code: " + error.code);
}

```

## off

```TypeScript
off(event: 'progress', callback?: Callback<DownloadProgress>): void
```

云盘文件缓存对象移除'progress'类型的指定callback回调。

**起始版本：** 11

**系统能力：** SystemCapability.FileManagement.DistributedFileService.CloudSync.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| event | 'progress' | 是 | 取消订阅的事件类型，取值为'progress'（同步过程事件）。 |
| callback | Callback&lt;DownloadProgress> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | The input parameter is invalid.Possible causes:1.Mandatory parameters are left  unspecified;  2.Incorrect parameter types. |
| 13600001 | IPC error |

**示例：**

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

**起始版本：** 20

**系统能力：** SystemCapability.FileManagement.DistributedFileService.CloudSync.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| event | 'batchDownload' | 是 | 取消订阅的事件类型，取值为'batchDownload'，表示批量缓存过程事件。 |
| callback | Callback&lt;MultiDownloadProgress> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 13900020 | Invalid argument. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types. |
| 22400005 | Inner error. Possible causes:  1.Failed to access the database or execute the SQL statement.  2.System error, such as a null pointer, insufficient memory or a JS engine exception. |

**示例：**

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

**起始版本：** 23

**系统能力：** SystemCapability.FileManagement.DistributedFileService.CloudSync.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;MultiDownloadProgress> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 13900020 | Invalid argument. Possible causes:Incorrect parameter types. |
| 22400005 | Inner error. Possible causes:  1.Failed to access the database or execute the SQL statement.  2.System error, such as a null pointer, insufficient memory or a JS engine exception. |

## offProgress

```TypeScript
offProgress(callback?: Callback<DownloadProgress>): void
```

Unsubscribes from cloud file cache download progress event.

**起始版本：** 23

**系统能力：** SystemCapability.FileManagement.DistributedFileService.CloudSync.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;DownloadProgress> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | The input parameter is invalid.Possible causes:Incorrect parameter types. |
| 13600001 | IPC error |

## on

```TypeScript
on(event: 'progress', callback: Callback<DownloadProgress>): void
```

添加云盘文件缓存过程事件监听。

**起始版本：** 11

**系统能力：** SystemCapability.FileManagement.DistributedFileService.CloudSync.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| event | 'progress' | 是 | 订阅的事件类型，取值为'progress'（下载过程事件）。 |
| callback | Callback&lt;DownloadProgress> | 是 | 回调函数。云文件下载过程事件。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | The input parameter is invalid.Possible causes:1.Mandatory parameters are left  unspecified;  2.Incorrect parameter types. |
| 13600001 | IPC error |

**示例：**

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

**起始版本：** 20

**系统能力：** SystemCapability.FileManagement.DistributedFileService.CloudSync.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| event | 'batchDownload' | 是 | 订阅的事件类型，取值为'batchDownload'，表示批量缓存过程事件。 |
| callback | Callback&lt;MultiDownloadProgress> | 是 | 回调函数。云文件批量缓存过程事件。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 13900020 | Invalid argument. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types. |
| 22400005 | Inner error. Possible causes:  1.Failed to access the database or execute the SQL statement.  2.System error, such as a null pointer, insufficient memory or a JS engine exception. |

**示例：**

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

**起始版本：** 23

**系统能力：** SystemCapability.FileManagement.DistributedFileService.CloudSync.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;MultiDownloadProgress> | 是 | callback function with a `MultiDownloadProgress` argument. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 13900020 | Invalid argument. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types. |
| 22400005 | Inner error. Possible causes:  1.Failed to access the database or execute the SQL statement.  2.System error, such as a null pointer, insufficient memory or a JS engine exception. |

## onProgress

```TypeScript
onProgress(callback: Callback<DownloadProgress>): void
```

Subscribes to cloud file cache download progress change event. This method uses a callback to get download progress changes.

**起始版本：** 23

**系统能力：** SystemCapability.FileManagement.DistributedFileService.CloudSync.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;DownloadProgress> | 是 | callback function with a `DownloadProgress` argument. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | The input parameter is invalid.Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types. |
| 13600001 | IPC error |

## start

```TypeScript
start(uri: string): Promise<void>
```

异步方法启动云盘文件缓存。使用Promise异步回调。

**起始版本：** 11

**系统能力：** SystemCapability.FileManagement.DistributedFileService.CloudSync.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| uri | string | 是 | 待下载文件uri。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | The input parameter is invalid.Possible causes:1.Mandatory parameters are left  unspecified;  2.Incorrect parameter types. |
| 13600001 | IPC error. |
| 13900002 | No such file or directory. |
| 13900025 | No space left on device. |
| 14000002 | Invalid uri. |

**示例：**

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

**起始版本：** 11

**系统能力：** SystemCapability.FileManagement.DistributedFileService.CloudSync.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| uri | string | 是 | 待下载文件uri。 |
| callback | AsyncCallback&lt;void> | 是 | 回调函数。异步启动云文件下载。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | The input parameter is invalid.Possible causes:1.Mandatory parameters are left  unspecified;  2.Incorrect parameter types. |
| 13600001 | IPC error. |
| 13900002 | No such file or directory. |
| 13900025 | No space left on device. |
| 14000002 | Invalid uri. |

**示例：**

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

**起始版本：** 20

**系统能力：** SystemCapability.FileManagement.DistributedFileService.CloudSync.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| uris | Array&lt;string> | 是 | URI列表，一次调用最多支持传入400个URI，超过报错22400004。 |
| fileType | DownloadFileType | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;long> | Promise对象，返回启动的云文件批量缓存任务的ID。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 13600001 | IPC error. Possible causes:  1.IPC failed or timed out. 2.Failed to load the service. |
| 13900020 | Invalid argument. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types. |
| 14000002 | Invalid uri. |
| 22400004 | Exceed the maximum limit. |
| 22400005 | Inner error. Possible causes:  1.Failed to access the database or execute the SQL statement.  2.System error, such as a null pointer, insufficient memory or a JS engine exception. |

**示例：**

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

**起始版本：** 12

**系统能力：** SystemCapability.FileManagement.DistributedFileService.CloudSync.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| uri | string | 是 | 待下载文件uri。 |
| needClean | boolean | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | The input parameter is invalid.Possible causes:1.Mandatory parameters are left  unspecified;  2.Incorrect parameter types. |
| 13600001 | IPC error. |
| 13900002 | No such file or directory. |
| 14000002 | Invalid uri. |

**示例：**

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

**起始版本：** 11

**系统能力：** SystemCapability.FileManagement.DistributedFileService.CloudSync.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| uri | string | 是 | 待下载文件uri。 |
| callback | AsyncCallback&lt;void> | 是 | 回调函数。异步停止云文件下载。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | The input parameter is invalid.Possible causes:1.Mandatory parameters are left  unspecified;  2.Incorrect parameter types. |
| 13600001 | IPC error. |
| 13900002 | No such file or directory. |
| 14000002 | Invalid uri. |

**示例：**

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

**起始版本：** 20

**系统能力：** SystemCapability.FileManagement.DistributedFileService.CloudSync.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| downloadId | long | 是 | 需要停止缓存的任务ID。 |
| needClean | boolean | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 13600001 | IPC error. Possible causes:  1.IPC failed or timed out. 2.Failed to load the service. |
| 13900020 | Invalid argument. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types. |
| 22400005 | Inner error. Possible causes:  1.Failed to access the database or execute the SQL statement.  2.System error, such as a null pointer, insufficient memory or a JS engine exception. |

**示例：**

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

