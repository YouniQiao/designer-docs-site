# UploadTask

Implements file uploads. Before using any APIs of this class, you must obtain an **UploadTask** object, from a promise through [request.uploadFile](arkts-basicservices-request-uploadfile-f.md#uploadfile-1) or from a callback through [request.uploadFile](arkts-basicservices-request-uploadfile-f.md#uploadfile-1).

**Since:** 6

<!--Device-request-interface UploadTask--><!--Device-request-interface UploadTask-End-->

**System capability:** SystemCapability.MiscServices.Download

## Modules to Import

```TypeScript
import { request } from '@kit.BasicServicesKit';
```

<a id="delete"></a>
## delete

```TypeScript
delete(callback: AsyncCallback<boolean>): void
```

Deletes the upload task. This API uses an asynchronous callback to return the result.

> **NOTE**  
>  
> The scenarios for triggering error code **401 the parameters check fails** do not exist. Therefore, this error  
> code is removed from API version 12.

**Since:** 9

**Required permissions:** ohos.permission.INTERNET

<!--Device-UploadTask-delete(callback: AsyncCallback<boolean>): void--><!--Device-UploadTask-delete(callback: AsyncCallback<boolean>): void-End-->

**System capability:** SystemCapability.MiscServices.Upload

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](arkts-basicservices-base-asynccallback-i.md)&lt;boolean&gt; | Yes | Callback used to return the result. The value **true** indicates that the operation is successful; **false** indicates the opposite. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | The permissions check fails. |

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

<a id="delete-1"></a>
## delete

```TypeScript
delete(): Promise<boolean>
```

Deletes the upload task. This API uses a promise to return the result.

> **NOTE**  
>  
> The scenarios for triggering error code **401 the parameters check fails** do not exist. Therefore, this error  
> code is removed from API version 12.

**Since:** 9

**Required permissions:** ohos.permission.INTERNET

<!--Device-UploadTask-delete(): Promise<boolean>--><!--Device-UploadTask-delete(): Promise<boolean>-End-->

**System capability:** SystemCapability.MiscServices.Upload

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean&gt; | Promise used to return the result. The value **true** indicates that the operation is successful; **false** indicates the opposite. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | The permissions check fails. |

**Example**

```TypeScript
uploadTask.delete().then((result: boolean) => {
  console.info('Succeeded in deleting the upload task.');
}).catch((err: BusinessError) => {
  console.error(`Failed to delete the upload task. Code: ${err.code}, message: ${err.message}`);
});

```

<a id="off"></a>
## off('progress')

```TypeScript
off(type: 'progress', callback?: (uploadedSize: number, totalSize: number) => void): void
```

Unsubscribes from upload progress events.

**Since:** 6

<!--Device-UploadTask-off(type: 'progress', callback?: (uploadedSize: long, totalSize: long) => void): void--><!--Device-UploadTask-off(type: 'progress', callback?: (uploadedSize: long, totalSize: long) => void): void-End-->

**System capability:** SystemCapability.MiscServices.Upload

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'progress' | Yes | Event type.<br>- **'progress'**: upload progress. |
| callback | (uploadedSize: number, totalSize: number) =&gt; void | No | Callback to unregister. If this parameter is not specified, all callbacks of the current type will be unregistered. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | The parameters check fails. Possible causes:<br> 1. Missing mandatory parameters.<br> 2. Incorrect parameter type.<br> 3. Parameter verification failed.<br>**Applicable version:** 12 and later |

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

<a id="off-1"></a>
## off('headerReceive')

```TypeScript
off(type: 'headerReceive', callback?: (header: object) => void): void
```

Unsubscribes from HTTP response events for the upload task.

**Since:** 7

<!--Device-UploadTask-off(type: 'headerReceive', callback?: (header: object) => void): void--><!--Device-UploadTask-off(type: 'headerReceive', callback?: (header: object) => void): void-End-->

**System capability:** SystemCapability.MiscServices.Upload

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'headerReceive' | Yes | Event type.<br>- **'headerReceive'**: The HTTP request receives a response. |
| callback | (header: object) =&gt; void | No | Callback to unregister. If this parameter is not specified, all callbacks of the current type will be unregistered. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | The parameters check fails. Possible causes:<br> 1. Missing mandatory parameters.<br> 2. Incorrect parameter type.<br> 3. Parameter verification failed.<br>**Applicable version:** 12 and later |

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

<a id="off-2"></a>
## off('complete' | 'fail')

```TypeScript
off(type: 'complete' | 'fail', callback?: Callback<Array<TaskState>>): void
```

Unsubscribes from upload completion or failure events.

**Since:** 9

<!--Device-UploadTask-off(type: 'complete' | 'fail', callback?: Callback<Array<TaskState>>): void--><!--Device-UploadTask-off(type: 'complete' | 'fail', callback?: Callback<Array<TaskState>>): void-End-->

**System capability:** SystemCapability.MiscServices.Upload

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'complete' \| 'fail' | Yes | Event type.<br>- **'complete'**: upload task completion.<br>- **'fail'**:upload task failure. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;Array&lt;TaskState&gt;&gt; | No | Callback to unregister. If this parameter is not specified,all callbacks of the current type will be unregistered. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | the parameters check fails. Possible causes:<br> 1. Missing mandatory parameters.<br> 2. Incorrect parameter type.<br> 3. Parameter verification failed.<br>**Applicable version:** 12 and later |

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

<a id="off-3"></a>
## off('complete' | 'fail')

```TypeScript
off(type: 'complete' | 'fail', callback?: Callback<Array<TaskState>>): void
```

Unsubscribes from upload completion or failure events.

**Since:** 9

<!--Device-UploadTask-off(type: 'complete' | 'fail', callback?: Callback<Array<TaskState>>): void--><!--Device-UploadTask-off(type: 'complete' | 'fail', callback?: Callback<Array<TaskState>>): void-End-->

**System capability:** SystemCapability.MiscServices.Upload

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'complete' \| 'fail' | Yes | Event type.<br>- **'complete'**: upload task completion.<br>- **'fail'**:upload task failure. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;Array&lt;TaskState&gt;&gt; | No | Callback to unregister. If this parameter is not specified,all callbacks of the current type will be unregistered. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | the parameters check fails. Possible causes:<br> 1. Missing mandatory parameters.<br> 2. Incorrect parameter type.<br> 3. Parameter verification failed.<br>**Applicable version:** 12 and later |

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

<a id="on"></a>
## on('progress')

```TypeScript
on(type: 'progress', callback: (uploadedSize: number, totalSize: number) => void): void
```

Subscribes to upload progress events. This API uses an asynchronous callback to return the result.

> **NOTE**  
>  
> To maintain a balance between power consumption and performance, this API cannot be called when the application  
> is running in the background.

**Since:** 6

<!--Device-UploadTask-on(type: 'progress', callback: (uploadedSize: long, totalSize: long) => void): void--><!--Device-UploadTask-on(type: 'progress', callback: (uploadedSize: long, totalSize: long) => void): void-End-->

**System capability:** SystemCapability.MiscServices.Upload

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'progress' | Yes | Event type. The value is fixed at **'progress'**, indicating upload progress. |
| callback | (uploadedSize: number, totalSize: number) =&gt; void | Yes | Callback used to return the size of the uploaded file and the total size of the file to upload, in bytes. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | The parameters check fails. Possible causes:<br> 1. Missing mandatory parameters.<br> 2. Incorrect parameter type.<br> 3. Parameter verification failed.<br>**Applicable version:** 12 and later |

**Example**

```TypeScript
let upProgressCallback = (uploadedSize: number, totalSize: number) => {
  console.info("upload totalSize:" + totalSize + "  uploadedSize:" + uploadedSize);
};
uploadTask.on('progress', upProgressCallback);

```

<a id="on-1"></a>
## on('headerReceive')

```TypeScript
on(type: 'headerReceive', callback: (header: object) => void): void
```

Subscribes to HTTP response events for the upload task.This API uses an asynchronous callback to return the result.

**Since:** 7

<!--Device-UploadTask-on(type: 'headerReceive', callback: (header: object) => void): void--><!--Device-UploadTask-on(type: 'headerReceive', callback: (header: object) => void): void-End-->

**System capability:** SystemCapability.MiscServices.Upload

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'headerReceive' | Yes | Event type.<br>- **'headerReceive'**: The HTTP request receives a response. |
| callback | (header: object) =&gt; void | Yes | Callback used to return the response content. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | The parameters check fails. Possible causes:<br> 1. Missing mandatory parameters.<br> 2. Incorrect parameter type.<br> 3. Parameter verification failed.<br>**Applicable version:** 12 and later |

**Example**

```TypeScript
let headerCallback = (headers: object) => {
  console.info("upOnHeader headers:" + JSON.stringify(headers));
};
uploadTask.on('headerReceive', headerCallback);

```

<a id="on-2"></a>
## on('complete' | 'fail')

```TypeScript
on(type: 'complete' | 'fail', callback: Callback<Array<TaskState>>): void
```

Subscribes to upload completion or failure events. This API uses an asynchronous callback to return the result.

**Since:** 9

<!--Device-UploadTask-on(type: 'complete' | 'fail', callback: Callback<Array<TaskState>>): void--><!--Device-UploadTask-on(type: 'complete' | 'fail', callback: Callback<Array<TaskState>>): void-End-->

**System capability:** SystemCapability.MiscServices.Upload

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'complete' \| 'fail' | Yes | Type of the event to subscribe to. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;Array&lt;TaskState&gt;&gt; | Yes | Callback used to return the state of the upload task. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | The parameters check fails. Possible causes:<br> 1. Missing mandatory parameters.<br> 2. Incorrect parameter type.<br> 3. Parameter verification failed.<br>**Applicable version:** 12 and later |

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

<a id="on-3"></a>
## on('complete' | 'fail')

```TypeScript
on(type: 'complete' | 'fail', callback: Callback<Array<TaskState>>): void
```

Subscribes to upload completion or failure events. This API uses an asynchronous callback to return the result.

**Since:** 9

<!--Device-UploadTask-on(type: 'complete' | 'fail', callback: Callback<Array<TaskState>>): void--><!--Device-UploadTask-on(type: 'complete' | 'fail', callback: Callback<Array<TaskState>>): void-End-->

**System capability:** SystemCapability.MiscServices.Upload

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'complete' \| 'fail' | Yes | Type of the event to subscribe to. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;Array&lt;TaskState&gt;&gt; | Yes | Callback used to return the state of the upload task. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | The parameters check fails. Possible causes:<br> 1. Missing mandatory parameters.<br> 2. Incorrect parameter type.<br> 3. Parameter verification failed.<br>**Applicable version:** 12 and later |

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

<a id="remove"></a>
## remove

```TypeScript
remove(callback: AsyncCallback<boolean>): void
```

Deletes the upload task. This API uses an asynchronous callback to return the result.

**Since:** 6

**Deprecated since:** 9

**Substitutes:** [delete(callback:](arkts-basicservices-request-uploadtask-i.md#delete-1)

**Required permissions:** ohos.permission.INTERNET

<!--Device-UploadTask-remove(callback: AsyncCallback<boolean>): void--><!--Device-UploadTask-remove(callback: AsyncCallback<boolean>): void-End-->

**System capability:** SystemCapability.MiscServices.Upload

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](arkts-basicservices-base-asynccallback-i.md)&lt;boolean&gt; | Yes | Callback used to return the result. The value **true** indicates that the operation is successful; **false** indicates the opposite. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | The permissions check fails. |

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

<a id="remove-1"></a>
## remove

```TypeScript
remove(): Promise<boolean>
```

Deletes the upload task. This API uses a promise to return the result.

**Since:** 6

**Deprecated since:** 9

**Substitutes:** [delete()](arkts-basicservices-request-uploadtask-i.md#delete-1)

**Required permissions:** ohos.permission.INTERNET

<!--Device-UploadTask-remove(): Promise<boolean>--><!--Device-UploadTask-remove(): Promise<boolean>-End-->

**System capability:** SystemCapability.MiscServices.Upload

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean&gt; | Promise used to return the result. The value **true** indicates that the operation is successful; **false** indicates the opposite. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | The permissions check fails. |

**Example**

```TypeScript
uploadTask.remove().then((result: boolean) => {
  console.info('Succeeded in removing the upload task.');
}).catch((err: BusinessError) => {
  console.error(`Failed to remove the upload task. Code: ${err.code}, message: ${err.message}`);
});

```

