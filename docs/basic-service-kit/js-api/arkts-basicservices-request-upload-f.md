# upload

## Modules to Import

```TypeScript
import { request } from '@kit.BasicServicesKit';
```

## upload

```TypeScript
function upload(config: UploadConfig, callback: AsyncCallback<UploadTask>): void
```

Uploads a file. This API uses an asynchronous callback to return the result.

**Since:** 6

**Deprecated since:** 9

**Substitutes:** uploadFile(context:

**Required permissions:** ohos.permission.INTERNET

**Model restriction:** This API can be used only in the FA model.

<!--Device-request-function upload(config: UploadConfig, callback: AsyncCallback<UploadTask>): void--><!--Device-request-function upload(config: UploadConfig, callback: AsyncCallback<UploadTask>): void-End-->

**System capability:** SystemCapability.MiscServices.Upload

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| config | [UploadConfig](arkts-basicservices-request-uploadconfig-i.md) | Yes | Upload configurations. |
| callback | [AsyncCallback](arkts-basicservices-base-asynccallback-i.md)<UploadTask> | Yes | Callback used to return the **UploadTask** object. If the operation is successful, **err** is **undefined**, and **data** is the **UploadTask** object obtained. Otherwise, **err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | The permissions check fails. |

**Example**

```TypeScript
let uploadTask: request.UploadTask;
let uploadConfig: request.UploadConfig = {
  url: 'http://www.example.com', // Replace the URL with the HTTP address of the real server.
  header: { 'Accept': '*/*' },
  method: "POST",
  files: [{ filename: "test", name: "test", uri: "internal://cache/test.jpg", type: "image/jpeg" }], // Set type to the MIME type specified by the HTTP.
  data: [{ name: "name123", value: "123" }],
};
request.upload(uploadConfig, (err: BusinessError, data: request.UploadTask) => {
  if (err) {
    console.error(`Failed to request the upload. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  uploadTask = data;
});

```


## upload

```TypeScript
function upload(config: UploadConfig): Promise<UploadTask>
```

Uploads a file. This API uses a promise to return the result.

**Since:** 6

**Deprecated since:** 9

**Substitutes:** uploadFile(context:

**Required permissions:** ohos.permission.INTERNET

**Model restriction:** This API can be used only in the FA model.

<!--Device-request-function upload(config: UploadConfig): Promise<UploadTask>--><!--Device-request-function upload(config: UploadConfig): Promise<UploadTask>-End-->

**System capability:** SystemCapability.MiscServices.Upload

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| config | [UploadConfig](arkts-basicservices-request-uploadconfig-i.md) | Yes | Upload configurations. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<UploadTask> | Promise used to return the **UploadTask** object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | The permissions check fails. |

**Example**

```TypeScript
let uploadTask: request.UploadTask;
let uploadConfig: request.UploadConfig = {
  url: 'http://www.example.com', // Replace the URL with the HTTP address of the real server.
  header: { 'Accept': '*/*' },
  method: "POST",
  files: [{ filename: "test", name: "test", uri: "internal://cache/test.jpg", type: "image/jpeg" }], // Set type to the MIME type specified by the HTTP.
  data: [{ name: "name123", value: "123" }],
};
request.upload(uploadConfig).then((data: request.UploadTask) => {
  uploadTask = data;
}).catch((err: BusinessError) => {
  console.error(`Failed to request the upload. Code: ${err.code}, message: ${err.message}`);
})

```

