# UploadTask

上传任务，使用下列方法前，需要先获取UploadTask对象，promise形式通过 [request.uploadFile]request.uploadFile(context: BaseContext, config: UploadConfig)获取，callback形式通过 [request.uploadFile]request.uploadFile(context: BaseContext, config: UploadConfig, callback: AsyncCallback<UploadTask>) 获取。

**Since:** 6

**System capability:** SystemCapability.MiscServices.Download

## Modules to Import

```TypeScript
import { request } from '@kit.BasicServicesKit';
```

## delete

```TypeScript
delete(callback: AsyncCallback<boolean>): void
```

移除上传的任务，使用callback异步回调。 > **说明：** > > 由于不存在401报错场景，在api12中 `401 the parameters check fails` 这个错误码被移除。

**Since:** 9

**Required permissions:** 

 ohos.permission.INTERNET

**System capability:** SystemCapability.MiscServices.Upload

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;boolean> | Yes | 回调函数。返回true表示移除上传任务成功；返回false表示移除上传任务失败。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | The permissions check fails. |

**Example**

```TypeScript
uploadTask.delete((err: BusinessError, result: boolean) => {
  if (err) {
    console.error(`Failed to delete the upload task. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info('Succeeded in deleting the upload task.');
});

```

## delete

```TypeScript
delete(): Promise<boolean>
```

移除上传的任务，使用Promise异步回调。 > **说明：** > > 由于不存在401报错场景，在api12中 `401 the parameters check fails` 这个错误码被移除。

**Since:** 9

**Required permissions:** 

 ohos.permission.INTERNET

**System capability:** SystemCapability.MiscServices.Upload

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean> | Promise对象。返回true表示移除上传任务成功；返回false表示移除上传任务失败。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | The permissions check fails. |

**Example**

```TypeScript
uploadTask.delete().then((result: boolean) => {
  console.info('Succeeded in deleting the upload task.');
}).catch((err: BusinessError) => {
  console.error(`Failed to delete the upload task. Code: ${err.code}, message: ${err.message}`);
});

```

## off('progress')

```TypeScript
off(type: 'progress', callback?: (uploadedSize: long, totalSize: long) => void): void
```

取消订阅上传任务进度事件。

**Since:** 6

**System capability:** SystemCapability.MiscServices.Upload

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'progress' | Yes | 取消订阅的事件类型。 - 取值为'progress'，表示上传的进度信息。 |
| callback | (uploadedSize: long, totalSize: long) => void | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | The parameters check fails. Possible causes:  1. Missing mandatory parameters.  2. Incorrect parameter type.  3. Parameter verification failed. [since 12] |

**Example**

```TypeScript
let upProgressCallback1 = (uploadedSize: number, totalSize: number) => {
  console.info('Upload delete progress notification.' + 'totalSize:' + totalSize + 'uploadedSize:' + uploadedSize);
};
let upProgressCallback2 = (uploadedSize: number, totalSize: number) => {
  console.info('Upload delete progress notification.' + 'totalSize:' + totalSize + 'uploadedSize:' + uploadedSize);
};
uploadTask.on('progress', upProgressCallback1);
uploadTask.on('progress', upProgressCallback2);
// Unsubscribe from upProgressCallback1.
uploadTask.off('progress', upProgressCallback1);
// Unsubscribe from all callbacks of upload progress events.
uploadTask.off('progress');

```

## off('headerReceive')

```TypeScript
off(type: 'headerReceive', callback?: (header: object) => void): void
```

取消订阅上传任务HTTP响应事件。

**Since:** 7

**System capability:** SystemCapability.MiscServices.Upload

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'headerReceive' | Yes | 取消订阅的事件类型。 - 取值为'headerReceive'，表示HTTP请求接收到响应。 |
| callback | (header: object) => void | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | The parameters check fails. Possible causes:  1. Missing mandatory parameters.  2. Incorrect parameter type.  3. Parameter verification failed. [since 12] |

**Example**

```TypeScript
let headerCallback1 = (header: object) => {
  console.info(`Upload delete headerReceive notification. header: ${JSON.stringify(header)}`);
};
let headerCallback2 = (header: object) => {
  console.info(`Upload delete headerReceive notification. header: ${JSON.stringify(header)}`);
};
uploadTask.on('headerReceive', headerCallback1);
uploadTask.on('headerReceive', headerCallback2);
// Unsubscribe from headerCallback1.
uploadTask.off('headerReceive', headerCallback1);
// Unsubscribe from all callbacks of the HTTP header events for the upload task.
uploadTask.off('headerReceive');

```

## off('complete' | 'fail')

```TypeScript
off(type: 'complete' | 'fail', callback?: Callback<Array<TaskState>>): void
```

取消订阅上传任务的完成或失败事件。

**Since:** 9

**System capability:** SystemCapability.MiscServices.Upload

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'complete' \| 'fail' | Yes | 取消订阅的事件类型。 - 取值为'complete'，表示上传任务完成。 - 取值为'fail'，表示上传任务失败。 |
| callback | Callback&lt;Array&lt;TaskState>> | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | the parameters check fails. Possible causes:  1. Missing mandatory parameters.  2. Incorrect parameter type.  3. Parameter verification failed. [since 12] |

**Example**

```TypeScript
let upCompleteCallback1 = (taskStates: Array<request.TaskState>) => {
  console.info('Upload delete complete notification.');
  for (let i = 0; i < taskStates.length; i++) {
    console.info('taskState:' + JSON.stringify(taskStates[i]));
  }
};
let upCompleteCallback2 = (taskStates: Array<request.TaskState>) => {
  console.info('Upload delete complete notification.');
  for (let i = 0; i < taskStates.length; i++) {
    console.info('taskState:' + JSON.stringify(taskStates[i]));
  }
};
uploadTask.on('complete', upCompleteCallback1);
uploadTask.on('complete', upCompleteCallback2);
// Unsubscribe from headerCallback1.
uploadTask.off('complete', upCompleteCallback1);
// Unsubscribe from all callbacks of the upload completion events.
uploadTask.off('complete');

let upFailCallback1 = (taskStates: Array<request.TaskState>) => {
  console.info('Upload delete fail notification.');
  for (let i = 0; i < taskStates.length; i++) {
    console.info('taskState:' + JSON.stringify(taskStates[i]));
  }
};
let upFailCallback2 = (taskStates: Array<request.TaskState>) => {
  console.info('Upload delete fail notification.');
  for (let i = 0; i < taskStates.length; i++) {
    console.info('taskState:' + JSON.stringify(taskStates[i]));
  }
};
uploadTask.on('fail', upFailCallback1);
uploadTask.on('fail', upFailCallback2);
// Unsubscribe from headerCallback1.
uploadTask.off('fail', upFailCallback1);
// Unsubscribe from all callbacks of the upload failure events.
uploadTask.off('fail');

```

## off('complete' | 'fail')

```TypeScript
off(type: 'complete' | 'fail', callback?: Callback<Array<TaskState>>): void
```

取消订阅上传任务的完成或失败事件。

**Since:** 9

**System capability:** SystemCapability.MiscServices.Upload

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'complete' \| 'fail' | Yes | 取消订阅的事件类型。 - 取值为'complete'，表示上传任务完成。 - 取值为'fail'，表示上传任务失败。 |
| callback | Callback&lt;Array&lt;TaskState>> | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | the parameters check fails. Possible causes:  1. Missing mandatory parameters.  2. Incorrect parameter type.  3. Parameter verification failed. [since 12] |

**Example**

```TypeScript
let upCompleteCallback1 = (taskStates: Array<request.TaskState>) => {
  console.info('Upload delete complete notification.');
  for (let i = 0; i < taskStates.length; i++) {
    console.info('taskState:' + JSON.stringify(taskStates[i]));
  }
};
let upCompleteCallback2 = (taskStates: Array<request.TaskState>) => {
  console.info('Upload delete complete notification.');
  for (let i = 0; i < taskStates.length; i++) {
    console.info('taskState:' + JSON.stringify(taskStates[i]));
  }
};
uploadTask.on('complete', upCompleteCallback1);
uploadTask.on('complete', upCompleteCallback2);
// Unsubscribe from headerCallback1.
uploadTask.off('complete', upCompleteCallback1);
// Unsubscribe from all callbacks of the upload completion events.
uploadTask.off('complete');

let upFailCallback1 = (taskStates: Array<request.TaskState>) => {
  console.info('Upload delete fail notification.');
  for (let i = 0; i < taskStates.length; i++) {
    console.info('taskState:' + JSON.stringify(taskStates[i]));
  }
};
let upFailCallback2 = (taskStates: Array<request.TaskState>) => {
  console.info('Upload delete fail notification.');
  for (let i = 0; i < taskStates.length; i++) {
    console.info('taskState:' + JSON.stringify(taskStates[i]));
  }
};
uploadTask.on('fail', upFailCallback1);
uploadTask.on('fail', upFailCallback2);
// Unsubscribe from headerCallback1.
uploadTask.off('fail', upFailCallback1);
// Unsubscribe from all callbacks of the upload failure events.
uploadTask.off('fail');

```

## offComplete

```TypeScript
offComplete(callback?: Callback<Array<TaskState>>): void
```

Called when the current upload session complete.

**Since:** 23

**System capability:** SystemCapability.MiscServices.Upload

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;Array&lt;TaskState>> | No |  |

## offFail

```TypeScript
offFail(callback?: Callback<Array<TaskState>>): void
```

Called when the current upload session fail.

**Since:** 23

**System capability:** SystemCapability.MiscServices.Upload

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;Array&lt;TaskState>> | No |  |

## offHeaderReceive

```TypeScript
offHeaderReceive(callback?: UploadHeaderReceiveCallback): void
```

Called when the header of the current upload session has been received.

**Since:** 23

**System capability:** SystemCapability.MiscServices.Upload

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | UploadHeaderReceiveCallback | No |  |

## offProgress

```TypeScript
offProgress(callback?: UploadProgressCallback): void
```

Called when the current upload session is in process.

**Since:** 23

**System capability:** SystemCapability.MiscServices.Upload

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | UploadProgressCallback | No |  |

## on('progress')

```TypeScript
on(type: 'progress', callback: (uploadedSize: long, totalSize: long) => void): void
```

订阅上传任务进度事件，使用callback异步回调。 > **说明：** > > 应用处于后台时，为满足功耗性能要求，不支持调用此接口进行回调。

**Since:** 6

**System capability:** SystemCapability.MiscServices.Upload

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'progress' | Yes | 订阅的事件类型。取值为'progress'，表示上传的进度信息，任务进度有进展时触发该事件。 |
| callback | (uploadedSize: long, totalSize: long) => void | Yes | 上传任务进度的回调函数，返回已上传文件大小和上传文件总大小，单位为字节（B）。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | The parameters check fails. Possible causes:  1. Missing mandatory parameters.  2. Incorrect parameter type.  3. Parameter verification failed. [since 12] |

**Example**

```TypeScript
let upProgressCallback = (uploadedSize: number, totalSize: number) => {
  console.info("upload totalSize:" + totalSize + "  uploadedSize:" + uploadedSize);
};
uploadTask.on('progress', upProgressCallback);

```

## on('headerReceive')

```TypeScript
on(type: 'headerReceive', callback: (header: object) => void): void
```

订阅上传任务HTTP响应事件，使用callback异步回调。

**Since:** 7

**System capability:** SystemCapability.MiscServices.Upload

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'headerReceive' | Yes | 订阅的事件类型。 - 取值为'headerReceive'，HTTP请求接收到响应时触发该事件。 |
| callback | (header: object) => void | Yes | HTTP Response事件的回调函数，返回响应请求内容。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | The parameters check fails. Possible causes:  1. Missing mandatory parameters.  2. Incorrect parameter type.  3. Parameter verification failed. [since 12] |

**Example**

```TypeScript
let headerCallback = (headers: object) => {
  console.info("upOnHeader headers:" + JSON.stringify(headers));
};
uploadTask.on('headerReceive', headerCallback);

```

## on('complete' | 'fail')

```TypeScript
on(type: 'complete' | 'fail', callback: Callback<Array<TaskState>>): void
```

订阅上传任务完成或失败事件，使用callback异步回调。

**Since:** 9

**System capability:** SystemCapability.MiscServices.Upload

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'complete' \| 'fail' | Yes | 订阅的事件类型，支持的事件包括：`'complete'`\|`'fail'`。 - `'complete'`：表示上传任务完成，任务完成时触发该  事件。 - `'fail'`：表示上传任务失败，任务失败时触发该事件。 |
| callback | Callback&lt;Array&lt;TaskState>> | Yes | 上传任务完成或失败的回调函数。返回上传任务的任务状态信息。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | The parameters check fails. Possible causes:  1. Missing mandatory parameters.  2. Incorrect parameter type.  3. Parameter verification failed. [since 12] |

**Example**

```TypeScript
let upCompleteCallback = (taskStates: Array<request.TaskState>) => {
  for (let i = 0; i < taskStates.length; i++) {
    console.info("upOnComplete taskState:" + JSON.stringify(taskStates[i]));
  }
};
uploadTask.on('complete', upCompleteCallback);

let upFailCallback = (taskStates: Array<request.TaskState>) => {
  for (let i = 0; i < taskStates.length; i++) {
    console.info("upOnFail taskState:" + JSON.stringify(taskStates[i]));
  }
};
uploadTask.on('fail', upFailCallback);

```

## on('complete' | 'fail')

```TypeScript
on(type: 'complete' | 'fail', callback: Callback<Array<TaskState>>): void
```

订阅上传任务完成或失败事件，使用callback异步回调。

**Since:** 9

**System capability:** SystemCapability.MiscServices.Upload

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'complete' \| 'fail' | Yes | 订阅的事件类型，支持的事件包括：`'complete'`\|`'fail'`。 - `'complete'`：表示上传任务完成，任务完成时触发该  事件。 - `'fail'`：表示上传任务失败，任务失败时触发该事件。 |
| callback | Callback&lt;Array&lt;TaskState>> | Yes | 上传任务完成或失败的回调函数。返回上传任务的任务状态信息。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | The parameters check fails. Possible causes:  1. Missing mandatory parameters.  2. Incorrect parameter type.  3. Parameter verification failed. [since 12] |

**Example**

```TypeScript
let upCompleteCallback = (taskStates: Array<request.TaskState>) => {
  for (let i = 0; i < taskStates.length; i++) {
    console.info("upOnComplete taskState:" + JSON.stringify(taskStates[i]));
  }
};
uploadTask.on('complete', upCompleteCallback);

let upFailCallback = (taskStates: Array<request.TaskState>) => {
  for (let i = 0; i < taskStates.length; i++) {
    console.info("upOnFail taskState:" + JSON.stringify(taskStates[i]));
  }
};
uploadTask.on('fail', upFailCallback);

```

## onComplete

```TypeScript
onComplete(callback: Callback<Array<TaskState>>): void
```

Called when the current upload session complete.

**Since:** 23

**System capability:** SystemCapability.MiscServices.Upload

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;Array&lt;TaskState>> | Yes | The callback function for the upload complete event. |

## onFail

```TypeScript
onFail(callback: Callback<Array<TaskState>>): void
```

Called when the current upload session fail.

**Since:** 23

**System capability:** SystemCapability.MiscServices.Upload

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;Array&lt;TaskState>> | Yes | The callback function for the upload fail event. |

## onHeaderReceive

```TypeScript
onHeaderReceive(callback: UploadHeaderReceiveCallback): void
```

Called when the header of the current upload session has been received.

**Since:** 23

**System capability:** SystemCapability.MiscServices.Upload

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | UploadHeaderReceiveCallback | Yes | The callback function for the HTTP Response Header event. |

## onProgress

```TypeScript
onProgress(callback: UploadProgressCallback): void
```

Called when the current upload session is in process.

**Since:** 23

**System capability:** SystemCapability.MiscServices.Upload

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | UploadProgressCallback | Yes | The callback function for the upload progress event. |

## remove

```TypeScript
remove(callback: AsyncCallback<boolean>): void
```

移除上传的任务，使用callback异步回调。 > **说明：** > > 从API version 6开始支持，从API version 9开始废弃，建议使用 > [delete]request.UploadTask.delete(callback: AsyncCallback<boolean>)替代。

**Since:** 6

**Deprecated since:** 9

**Substitute:** request.UploadTask.delete(callback:

**Required permissions:** 

 ohos.permission.INTERNET

**System capability:** SystemCapability.MiscServices.Upload

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;boolean> | Yes | 回调函数。返回true表示移除上传任务成功；返回false表示移除上传任务失败。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | The permissions check fails. |

**Example**

```TypeScript
uploadTask.remove((err: BusinessError, result: boolean) => {
  if (err) {
    console.error(`Failed to remove the upload task. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  if (result) {
    console.info('Succeeded in removing the upload task.');
  }
});

```

## remove

```TypeScript
remove(): Promise<boolean>
```

移除上传的任务，使用Promise异步回调。 > **说明：** > > 从API version 6开始支持，从API version 9开始废弃，建议使用[delete]request.UploadTask.delete()替代。

**Since:** 6

**Deprecated since:** 9

**Substitute:** request.UploadTask.delete()

**Required permissions:** 

 ohos.permission.INTERNET

**System capability:** SystemCapability.MiscServices.Upload

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean> | 使用Promise方式异步回调，返回true表示移除上传任务成功；返回false表示移除上传任务失败。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | The permissions check fails. |

**Example**

```TypeScript
uploadTask.remove().then((result: boolean) => {
  console.info('Succeeded in removing the upload task.');
}).catch((err: BusinessError) => {
  console.error(`Failed to remove the upload task. Code: ${err.code}, message: ${err.message}`);
});

```

