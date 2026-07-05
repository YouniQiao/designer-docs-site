# uploadFile

## uploadFile

```TypeScript
function uploadFile(context: BaseContext, config: UploadConfig, callback: AsyncCallback<UploadTask>): void
```

创建并启动一个上传任务，使用callback异步回调，支持HTTP协议。通过 [on('complete'|'fail')]request.UploadTask.on(type: 'complete' | 'fail', callback: Callback<Array<TaskState>>) 可获取任务上传时的成功信息或错误信息。 > **说明：** > > 示例中context的获取方式请参见[获取UIAbility的上下文信息](docroot://application-models/uiability-usage.md#获取uiability的上下文信息)。

**Since:** 9

**Required permissions:** 

 ohos.permission.INTERNET

**System capability:** SystemCapability.MiscServices.Upload

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | BaseContext | Yes | 基于应用程序的上下文。 |
| config | UploadConfig | Yes | 上传的配置信息。 |
| callback | AsyncCallback&lt;UploadTask> | Yes | 回调函数，异步返回UploadTask对象。当上传成功，err为undefined，data为获取到的UploadTask对象；否则为  错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | The permissions check fails. |
| 401 | The parameters check fails. Possible causes:  1. Missing mandatory parameters.  2. Incorrect parameter type.  3. Parameter verification failed. |
| 13400002 | File path not supported or invalid. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';

// Obtain the context from the component and ensure that the return value of this.getUIContext().getHostContext() is UIAbilityContext.
let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
let uploadTask: request.UploadTask;
let uploadConfig: request.UploadConfig = {
  url: 'http://www.example.com', // Replace the URL with the HTTP address of the real server.
  header: { 'Accept': '*/*' },
  method: "POST",
  files: [{ filename: "test", name: "test", uri: "internal://cache/test.jpg", type: "image/jpeg" }], // Set type to the MIME type specified by the HTTP.
  data: [{ name: "name123", value: "123" }],
};
try {
  request.uploadFile(context, uploadConfig, (err: BusinessError, data: request.UploadTask) => {
    if (err) {
      console.error(`Failed to request the upload. Code: ${err.code}, message: ${err.message}`);
      return;
    }
    uploadTask = data;
  });
} catch (err) {
  console.error(`Failed to request the upload. Code: ${err.code}, message: ${err.message}`);
}

```

## uploadFile

```TypeScript
function uploadFile(context: BaseContext, config: UploadConfig): Promise<UploadTask>
```

创建并启动一个上传任务，使用Promise异步回调，支持HTTP协议。通过 [on('complete'|'fail')]request.UploadTask.on(type: 'complete' | 'fail', callback: Callback<Array<TaskState>>) 可获取任务上传时的成功信息或错误信息。 > **说明：** > > 示例中context的获取方式请参见[获取UIAbility的上下文信息](docroot://application-models/uiability-usage.md#获取uiability的上下文信息)。

**Since:** 9

**Required permissions:** 

 ohos.permission.INTERNET

**System capability:** SystemCapability.MiscServices.Upload

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | BaseContext | Yes | 基于应用程序的上下文。 |
| config | UploadConfig | Yes | 上传的配置信息。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;UploadTask> | 使用Promise方式，异步返回上传任务UploadTask的Promise对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | The permissions check fails. |
| 401 | The parameters check fails. Possible causes:  1. Missing mandatory parameters.  2. Incorrect parameter type.  3. Parameter verification failed. |
| 13400002 | File path not supported or invalid. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';

// Obtain the context from the component and ensure that the return value of this.getUIContext().getHostContext() is UIAbilityContext.
let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
let uploadTask: request.UploadTask;
let uploadConfig: request.UploadConfig = {
  url: 'http://www.example.com', // Replace the URL with the HTTP address of the real server.
  header: { 'Accept': '*/*' },
  method: "POST",
  files: [{ filename: "test", name: "test", uri: "internal://cache/test.jpg", type: "image/jpeg" }], // Set type to the MIME type specified by the HTTP.
  data: [{ name: "name123", value: "123" }],
};
try {
  request.uploadFile(context, uploadConfig).then((data: request.UploadTask) => {
    uploadTask = data;
  }).catch((err: BusinessError) => {
    console.error(`Failed to request the upload. Code: ${err.code}, message: ${err.message}`);
  });
} catch (err) {
  console.error(`Failed to request the upload. Code: ${err.code}, message: ${err.message}`);
}

```

