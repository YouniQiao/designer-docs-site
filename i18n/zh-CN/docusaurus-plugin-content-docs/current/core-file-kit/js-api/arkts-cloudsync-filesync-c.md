# FileSync

云盘同步对象，用于支撑文件管理器应用完成云盘文件的端云同步流程。在使用前，需要先创建FileSync实例。

**起始版本：** 12

**系统能力：** SystemCapability.FileManagement.DistributedFileService.CloudSync.Core

## 导入模块

```TypeScript
import { cloudSync } from '@kit.CoreFileKit';
```

## constructor

```TypeScript
constructor()
```

端云同步流程的构造函数，用于获取FileSync类的实例。

**起始版本：** 12

**系统能力：** SystemCapability.FileManagement.DistributedFileService.CloudSync.Core

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | The input parameter is invalid.Possible causes:Incorrect parameter types. |

**示例：**

```TypeScript
let fileSync = new cloudSync.FileSync()

```

## constructor

```TypeScript
constructor(bundleName: string)
```

端云同步流程的构造函数，用于获取FileSync类的实例。

**起始版本：** 12

**系统能力：** SystemCapability.FileManagement.DistributedFileService.CloudSync.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| bundleName | string | 是 | 应用包名。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Permission verification failed, application which is not a system application  uses system API. |
| 401 | The input parameter is invalid.Possible causes:1.Mandatory parameters are left  unspecified;  2.Incorrect parameter types. |

**示例：**

```TypeScript
let fileSync = new cloudSync.FileSync("com.ohos.demo")

```

## getLastSyncTime

```TypeScript
getLastSyncTime(): Promise<long>
```

异步方法获取上次同步时间。使用Promise异步回调。

**起始版本：** 12

**系统能力：** SystemCapability.FileManagement.DistributedFileService.CloudSync.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;long> | Promise对象，返回上次同步时间。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | The input parameter is invalid.Possible causes:Incorrect parameter types. |
| 13600001 | IPC error. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let fileSync = new cloudSync.FileSync();

fileSync.getLastSyncTime().then((timeStamp: number) => {
  let date = new Date(timeStamp);
  console.info("get last sync time successfully: "+ date);
}).catch((err: BusinessError) => {
  console.error("get last sync time failed with error message: " + err.message + ", error code: " + err.code);
});


```

## getLastSyncTime

```TypeScript
getLastSyncTime(callback: AsyncCallback<long>): void
```

获取上次同步时间。使用callback异步回调。

**起始版本：** 12

**系统能力：** SystemCapability.FileManagement.DistributedFileService.CloudSync.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;long> | 是 | 回调函数。异步获取上次同步时间。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | The input parameter is invalid.Possible causes:1.Mandatory parameters are left  unspecified;  2.Incorrect parameter types. |
| 13600001 | IPC error. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let fileSync = new cloudSync.FileSync();

fileSync.getLastSyncTime((err: BusinessError, timeStamp: number) => {
  if (err) {
    console.error("get last sync time with error message: " + err.message + ", error code: " + err.code);
  } else {
    let date = new Date(timeStamp);
    console.info("get last sync time successfully: "+ date);
  }
});

```

## getUploadList

```TypeScript
getUploadList(uris: Array<string>): Promise<Array<UploadProgress>>
```

获取文件上传列表和进度信息。使用Promise异步回调。

**起始版本：** 26.0.0

**需要权限：** 

 ohos.permission.CLOUDFILE_SYNC

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.FileManagement.DistributedFileService.CloudSync.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| uris | Array&lt;string> | 是 | 待查询上传进度的文件URI数组，数组长度取值范围[1,100]。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Array&lt;UploadProgress>> | - Promise对象，返回上传进度信息数组。 |

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

let fileSync = new cloudSync.FileSync("com.ohos.demo");
let uris: string[] = ["file:///data/storage/el2/cloud/1.txt", "file:///data/storage/el2/cloud/2.jpg"];

fileSync.getUploadList(uris).then((progressList: cloudSync.UploadProgress[]) => {
  console.info("get upload list successfully, count: " + progressList.length);
  for (let i = 0; i < progressList.length; i++) {
    console.info("file uri: " + progressList[i].uri + ", state: " + progressList[i].state);
  }
}).catch((error: BusinessError) => {
  console.error("get upload list failed with error message: " + error.message + ", error code: " + error.code);
});

```

## off

```TypeScript
off(event: 'progress', callback?: Callback<SyncProgress>): void
```

云盘同步对象移除'progress'类型的指定callback回调。

**起始版本：** 12

**系统能力：** SystemCapability.FileManagement.DistributedFileService.CloudSync.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| event | 'progress' | 是 | 取消订阅的事件类型，取值为'progress'（同步过程事件）。 |
| callback | Callback&lt;SyncProgress> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | The input parameter is invalid.Possible causes:1.Mandatory parameters are left  unspecified;2.Incorrect parameter types. |
| 13600001 | IPC error |

**示例：**

```TypeScript
let fileSync = new cloudSync.FileSync();

let callback = (pg: cloudSync.SyncProgress) => {
  console.info(`file sync state: ${pg.state}, error type: ${pg.error}`);
}

fileSync.on('progress', callback);

fileSync.off('progress', callback);

```

## offProgress

```TypeScript
offProgress(callback?: Callback<SyncProgress>): void
```

Unsubscribes from sync progress event.

**起始版本：** 23

**系统能力：** SystemCapability.FileManagement.DistributedFileService.CloudSync.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;SyncProgress> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | The input parameter is invalid.Possible causes:Incorrect parameter types. |
| 13600001 | IPC error |

## on

```TypeScript
on(event: 'progress', callback: Callback<SyncProgress>): void
```

云盘同步对象添加同步过程事件监听。

**起始版本：** 12

**系统能力：** SystemCapability.FileManagement.DistributedFileService.CloudSync.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| event | 'progress' | 是 | 订阅的事件类型，取值为'progress'（同步过程事件）。 |
| callback | Callback&lt;SyncProgress> | 是 | 回调函数。同步过程事件。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | The input parameter is invalid.Possible causes:1.Mandatory parameters are left  unspecified;  2.Incorrect parameter types. |
| 13600001 | IPC error |

**示例：**

```TypeScript
let fileSync = new cloudSync.FileSync();
let callback = (pg: cloudSync.SyncProgress) => {
  console.info(`file sync state: ${pg.state}, error type: ${pg.error}`);
}

fileSync.on('progress', callback);

```

## onProgress

```TypeScript
onProgress(callback: Callback<SyncProgress>): void
```

Subscribes to sync progress change event. This method uses a callback to get sync progress changes.

**起始版本：** 23

**系统能力：** SystemCapability.FileManagement.DistributedFileService.CloudSync.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;SyncProgress> | 是 | callback function with a `SyncProgress` argument. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | The input parameter is invalid.Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types. |
| 13600001 | IPC error |

## pauseUpload

```TypeScript
pauseUpload(uri: string): void
```

暂停云文件上传。

**起始版本：** 26.0.0

**需要权限：** 

 ohos.permission.CLOUDFILE_SYNC

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.FileManagement.DistributedFileService.CloudSync.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| uri | string | 是 | 待暂停的文件URI。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission verification failed. |
| 202 | The caller is not a system application. |
| 13900002 | No such file or directory. |
| 13900010 | Try again. |
| 14000002 | Invalid uri. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { fileUri } from '@kit.CoreFileKit';

let fileSync = new cloudSync.FileSync("com.ohos.demo");
let path = "/data/storage/el2/cloud/1.txt";
let uri = fileUri.getUriFromPath(path);

try {
  fileSync.pauseUpload(uri);
  console.info("pause upload successfully.");
} catch (err) {
  let error: BusinessError = err as BusinessError;
  console.error("pause upload failed with error message: " + error.message + ", error code: " + error.code);
}

```

## registerUploadProgress

```TypeScript
registerUploadProgress(callback: Callback<UploadProgress>): void
```

注册上传进度回调函数，用于监听文件上传进度变化。使用callback异步回调。

**起始版本：** 26.0.0

**需要权限：** 

 ohos.permission.CLOUDFILE_SYNC

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.FileManagement.DistributedFileService.CloudSync.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;UploadProgress> | 是 | 回调函数，监听文件上传进度变化。当文件上传进度发生变化时触发回调，返回上传进度信息。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission verification failed. |
| 202 | The caller is not a system application. |
| 13900010 | Try again. |
| 13900020 | Invalid argument. Possible causes:  1.Mandatory parameter are left unspecified.  2.The number of instances registered at the same time exceeds the upper limit. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let fileSync = new cloudSync.FileSync("com.ohos.demo");

try {
  fileSync.registerUploadProgress((progress: cloudSync.UploadProgress) => {
    console.info(`upload progress - uri: ${progress.uri}, state: ${progress.state}`);
    console.info(`processed: ${progress.processed}, size: ${progress.size}`);
    console.info(`error: ${progress.error}`);
  });
  console.info("register upload progress successfully");
} catch (err) {
  let error: BusinessError = err as BusinessError;
  console.error(`register upload progress failed with error message: ${error.message}, error code: ${error.code}`);
}

```

## resumeUpload

```TypeScript
resumeUpload(uri: string): void
```

恢复云文件上传。

**起始版本：** 26.0.0

**需要权限：** 

 ohos.permission.CLOUDFILE_SYNC

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.FileManagement.DistributedFileService.CloudSync.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| uri | string | 是 | 待恢复上传的文件URI。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission verification failed. |
| 202 | The caller is not a system application. |
| 13900002 | No such file or directory. |
| 13900010 | Try again. |
| 14000002 | Invalid uri. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { fileUri } from '@kit.CoreFileKit';

let fileSync = new cloudSync.FileSync("com.ohos.demo");
let path = "/data/storage/el2/cloud/1.txt";
let uri = fileUri.getUriFromPath(path);

try {
  fileSync.resumeUpload(uri);
  console.info("resume upload successfully.");
} catch (err) {
  let error: BusinessError = err as BusinessError;
  console.error("resume upload failed with error message: " + error.message + ", error code: " + error.code);
}

```

## start

```TypeScript
start(): Promise<void>
```

异步方法启动云盘端云同步。使用Promise异步回调。

**起始版本：** 12

**系统能力：** SystemCapability.FileManagement.DistributedFileService.CloudSync.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | The input parameter is invalid.Possible causes:Incorrect parameter types. |
| 13600001 | IPC error. |
| 22400001 | Cloud status not ready. |
| 22400002 | Network unavailable. |
| 22400003 | Low battery level. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let fileSync = new cloudSync.FileSync();

let callback = (pg: cloudSync.SyncProgress) => {
  console.info("file sync state: " + pg.state + "error type: " + pg.error);
}

fileSync.on('progress', callback);

fileSync.start().then(() => {
  console.info("start sync successfully");
}).catch((err: BusinessError) => {
  console.error("start sync failed with error message: " + err.message + ", error code: " + err.code);
});

```

## start

```TypeScript
start(callback: AsyncCallback<void>): void
```

异步方法启动云盘端云同步。使用callback异步回调。

**起始版本：** 12

**系统能力：** SystemCapability.FileManagement.DistributedFileService.CloudSync.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | 是 | 回调函数。异步启动端云同步。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | The input parameter is invalid.Possible causes:1.Mandatory parameters are left  unspecified;2.Incorrect parameter types. |
| 13600001 | IPC error. |
| 22400001 | Cloud status not ready. |
| 22400002 | Network unavailable. |
| 22400003 | Low battery level. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let fileSync = new cloudSync.FileSync();

fileSync.start((err: BusinessError) => {
  if (err) {
    console.error("start sync failed with error message: " + err.message + ", error code: " + err.code);
  } else {
    console.info("start sync successfully");
  }
});

```

## stop

```TypeScript
stop(): Promise<void>
```

异步方法停止云盘端云同步。使用Promise异步回调。 调用stop接口，同步流程会停止。再次调用[start]cloudSync.FileSync#start()接口会继续同步。

**起始版本：** 12

**系统能力：** SystemCapability.FileManagement.DistributedFileService.CloudSync.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | The input parameter is invalid.Possible causes:Incorrect parameter types. |
| 13600001 | IPC error. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let fileSync = new cloudSync.FileSync();

fileSync.stop().then(() => {
  console.info("stop sync successfully");
}).catch((err: BusinessError) => {
  console.error("stop sync failed with error message: " + err.message + ", error code: " + err.code);
});

```

## stop

```TypeScript
stop(callback: AsyncCallback<void>): void
```

异步方法停止云盘端云同步。使用callback异步回调。 调用stop接口，同步流程会停止。再次调用[start]cloudSync.FileSync#start()接口会继续同步。

**起始版本：** 12

**系统能力：** SystemCapability.FileManagement.DistributedFileService.CloudSync.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | 是 | 回调函数。异步停止端云同步。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | The input parameter is invalid.Possible causes:1.Mandatory parameters are left  unspecified;  2.Incorrect parameter types. |
| 13600001 | IPC error. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let fileSync = new cloudSync.FileSync();

fileSync.stop((err: BusinessError) => {
  if (err) {
    console.error("stop sync failed with error message: " + err.message + ", error code: " + err.code);
  } else {
    console.info("stop sync successfully");
  }
});

```

## unregisterUploadProgress

```TypeScript
unregisterUploadProgress(): void
```

取消注册上传进度回调函数。

**起始版本：** 26.0.0

**需要权限：** 

 ohos.permission.CLOUDFILE_SYNC

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.FileManagement.DistributedFileService.CloudSync.Core

**系统接口：** 此接口为系统接口。

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission verification failed. |
| 202 | The caller is not a system application. |
| 13900010 | Try again. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let fileSync = new cloudSync.FileSync("com.ohos.demo");

try {
  fileSync.unregisterUploadProgress();
  console.info("unregister upload progress successfully");
} catch (err) {
  let error: BusinessError = err as BusinessError;
  console.error("unregister upload progress failed with error message: " + error.message + ", error code: " + error.code);
}

```

