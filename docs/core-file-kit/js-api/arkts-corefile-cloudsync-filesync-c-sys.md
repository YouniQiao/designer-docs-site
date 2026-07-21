# FileSync

Provides APIs for the file manager application to perform device-cloud sync of the files stored in the Drive Kit.Before using the APIs of this class, you need to create a **FileSync** instance.

**Since:** 12

<!--Device-cloudSync-class FileSync--><!--Device-cloudSync-class FileSync-End-->

**System capability:** SystemCapability.FileManagement.DistributedFileService.CloudSync.Core

## Modules to Import

```TypeScript
import { cloudSync } from '@kit.CoreFileKit';
```

<a id="constructor"></a>
## constructor

```TypeScript
constructor(bundleName: string)
```

A constructor used to create a **FileSync** instance.

**Since:** 12

<!--Device-FileSync-constructor(bundleName: string)--><!--Device-FileSync-constructor(bundleName: string)-End-->

**System capability:** SystemCapability.FileManagement.DistributedFileService.CloudSync.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | Bundle name. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed, application which is not a system application uses system API. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | The input parameter is invalid.Possible causes:1.Mandatory parameters are left unspecified;<br>2.Incorrect parameter types. |

**Example**

```TypeScript
let fileSync = new cloudSync.FileSync("com.ohos.demo")

```

<a id="getuploadlist"></a>
## getUploadList

```TypeScript
getUploadList(uris: Array<string>): Promise<Array<UploadProgress>>
```

Query the upload state of the cloud file list.

**Since:** 26.0.0

**Required permissions:** ohos.permission.CLOUDFILE_SYNC

**Model restriction:** This API can be used only in the stage model.

<!--Device-FileSync-getUploadList(uris: Array<string>): Promise<Array<UploadProgress>>--><!--Device-FileSync-getUploadList(uris: Array<string>): Promise<Array<UploadProgress>>-End-->

**System capability:** SystemCapability.FileManagement.DistributedFileService.CloudSync.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uris | Array&lt;string&gt; | Yes | uris of queryed files. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;UploadProgress&gt;&gt; | - Return Promise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | The caller is not a system application. |
| 13900010 | Try again. |
| 13900020 | Invalid argument. Possible causes:<br>1.Mandatory parameters are left unspecified. 2.The length of the input parameter exceeds the upper limit.<br>3.The input parameter contains an invalid uri. |

<a id="pauseupload"></a>
## pauseUpload

```TypeScript
pauseUpload(uri: string): void
```

Pause the upload of the cloud file.

**Since:** 26.0.0

**Required permissions:** ohos.permission.CLOUDFILE_SYNC

**Model restriction:** This API can be used only in the stage model.

<!--Device-FileSync-pauseUpload(uri: string): void--><!--Device-FileSync-pauseUpload(uri: string): void-End-->

**System capability:** SystemCapability.FileManagement.DistributedFileService.CloudSync.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uri | string | Yes | uri of file. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | The caller is not a system application. |
| 13900002 | No such file or directory. |
| 13900010 | Try again. |
| 14000002 | Invalid uri. |

<a id="registeruploadprogress"></a>
## registerUploadProgress

```TypeScript
registerUploadProgress(callback: Callback<UploadProgress>): void
```

Registers to cloud file upload progress change. This method uses a callback to get upload progress changes.

**Since:** 26.0.0

**Required permissions:** ohos.permission.CLOUDFILE_SYNC

**Model restriction:** This API can be used only in the stage model.

<!--Device-FileSync-registerUploadProgress(callback: Callback<UploadProgress>): void--><!--Device-FileSync-registerUploadProgress(callback: Callback<UploadProgress>): void-End-->

**System capability:** SystemCapability.FileManagement.DistributedFileService.CloudSync.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;UploadProgress&gt; | Yes | Callback function. The callback will be triggered when the upload progress changes, including state updates, processed size changes, and error occurrences. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | The caller is not a system application. |
| 13900010 | Try again. |
| 13900020 | Invalid argument. Possible causes:<br>1.Mandatory parameter are left unspecified.<br>2.The number of instances registered at the same time exceeds the upper limit. |

<a id="resumeupload"></a>
## resumeUpload

```TypeScript
resumeUpload(uri: string): void
```

Resume the upload of the cloud file.

**Since:** 26.0.0

**Required permissions:** ohos.permission.CLOUDFILE_SYNC

**Model restriction:** This API can be used only in the stage model.

<!--Device-FileSync-resumeUpload(uri: string): void--><!--Device-FileSync-resumeUpload(uri: string): void-End-->

**System capability:** SystemCapability.FileManagement.DistributedFileService.CloudSync.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uri | string | Yes | uri of file. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | The caller is not a system application. |
| 13900002 | No such file or directory. |
| 13900010 | Try again. |
| 14000002 | Invalid uri. |

<a id="unregisteruploadprogress"></a>
## unregisterUploadProgress

```TypeScript
unregisterUploadProgress(): void
```

Unregisters from cloud file upload progress change.

**Since:** 26.0.0

**Required permissions:** ohos.permission.CLOUDFILE_SYNC

**Model restriction:** This API can be used only in the stage model.

<!--Device-FileSync-unregisterUploadProgress(): void--><!--Device-FileSync-unregisterUploadProgress(): void-End-->

**System capability:** SystemCapability.FileManagement.DistributedFileService.CloudSync.Core

**System API:** This is a system API.

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | The caller is not a system application. |
| 13900010 | Try again. |

