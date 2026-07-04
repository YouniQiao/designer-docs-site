# uploadFile

## Modules to Import

```TypeScript
import { request } from '@ohos.request';
```

## uploadFile

```TypeScript
function uploadFile(context: BaseContext, config: UploadConfig, callback: AsyncCallback<UploadTask>): void
```

Uploads a file. This API uses an asynchronous callback to return the result. HTTP is supported. You can use [on('complete'|'fail')](arkts-basicservices-uploadtask-i.md#on-3) to obtain the upload success or error information. > **NOTE** > > For details about how to obtain the context in the example, see > [Obtaining the Context of UIAbility](../../../../application-models/uiability-usage.md#obtaining-the-context-of-uiability) > .

**Since:** 9

**Required permissions:** ohos.permission.INTERNET

**System capability:** SystemCapability.MiscServices.Upload

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | BaseContext | Yes | Application-based context. |
| config | UploadConfig | Yes | Upload configurations. |
| callback | AsyncCallback&lt;UploadTask&gt; | Yes | Callback used to return the **UploadTask** object. If the operationis successful, **err** is **undefined**, and **data** is the **UploadTask** object obtained. Otherwise, **err**is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | The permissions check fails. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | The parameters check fails. Possible causes:<br> 1. Missing mandatory parameters.<br> 2. Incorrect parameter type.<br> 3. Parameter verification failed. |
| [13400002](../../apis-basic-services-kit/errorcode-request.md#13400002-file-path-error) | File path not supported or invalid. |

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

Uploads a file. This API uses a promise to return the result. HTTP is supported. You can use [on('complete'|'fail')](arkts-basicservices-uploadtask-i.md#on-3) to obtain the upload success or error information. > **NOTE** > > For details about how to obtain the context in the example, see > [Obtaining the Context of UIAbility](../../../../application-models/uiability-usage.md#obtaining-the-context-of-uiability) > .

**Since:** 9

**Required permissions:** ohos.permission.INTERNET

**System capability:** SystemCapability.MiscServices.Upload

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | BaseContext | Yes | Application-based context. |
| config | UploadConfig | Yes | Upload configurations. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;UploadTask&gt; | Promise used to return the **UploadTask** object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | The permissions check fails. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | The parameters check fails. Possible causes:<br> 1. Missing mandatory parameters.<br> 2. Incorrect parameter type.<br> 3. Parameter verification failed. |
| [13400002](../../apis-basic-services-kit/errorcode-request.md#13400002-file-path-error) | File path not supported or invalid. |

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

