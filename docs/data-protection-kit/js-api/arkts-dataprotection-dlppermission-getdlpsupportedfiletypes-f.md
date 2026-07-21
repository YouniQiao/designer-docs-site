# getDLPSupportedFileTypes

## Modules to Import

```TypeScript
import { dlpPermission } from '@kit.DataProtectionKit';
```

<a id="getdlpsupportedfiletypes"></a>
## getDLPSupportedFileTypes

```TypeScript
function getDLPSupportedFileTypes(): Promise<Array<string>>
```

Obtains the file name extension types that support DLP. After the API is successfully called, the list of supported file types is returned, indicating the types of files that can be used to generate DLP files. This API uses a promise to return the result.

This API is used to obtain the types of files that can be used to generate DLP files. If the current file type is in the list, it can be encrypted.

**Since:** 10

<!--Device-dlpPermission-function getDLPSupportedFileTypes(): Promise<Array<string>>--><!--Device-dlpPermission-function getDLPSupportedFileTypes(): Promise<Array<string>>-End-->

**System capability:** SystemCapability.Security.DataLossPrevention

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;string&gt;&gt; | Promise used to return the file name extension types obtained. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [19100001](../errorcode-dlp.md#19100001-invalid-parameter) | Invalid parameter value. |
| [19100011](../errorcode-dlp.md#19100011-system-service-abnormal) | The system ability works abnormally. |

**Example**

```TypeScript
import { dlpPermission } from '@kit.DataProtectionKit';

dlpPermission.getDLPSupportedFileTypes().then((fileTypes) => { // Obtain the file types that support DLP.
  console.info('fileTypes', JSON.stringify(fileTypes));
}).catch((error: BusinessError)=> {
  console.error(JSON.stringify(error));
});

```


<a id="getdlpsupportedfiletypes-1"></a>
## getDLPSupportedFileTypes

```TypeScript
function getDLPSupportedFileTypes(callback: AsyncCallback<Array<string>>): void
```

Obtains the file name extension types that support DLP. After the API is successfully called, the list of supported file types is returned, indicating the types of files that can be used to generate DLP files. This API uses an asynchronous callback to return the result.

This API is used to obtain the types of files that can be used to generate DLP files. If the current file type is in the list, it can be encrypted.

**Since:** 10

<!--Device-dlpPermission-function getDLPSupportedFileTypes(callback: AsyncCallback<Array<string>>): void--><!--Device-dlpPermission-function getDLPSupportedFileTypes(callback: AsyncCallback<Array<string>>): void-End-->

**System capability:** SystemCapability.Security.DataLossPrevention

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;Array&lt;string&gt;&gt; | Yes | Callback used to return the result. If the operation is successful, **err** is **undefined**. Otherwise, **err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Incorrect parameter types. |
| [19100001](../errorcode-dlp.md#19100001-invalid-parameter) | Invalid parameter value. |
| [19100011](../errorcode-dlp.md#19100011-system-service-abnormal) | The system ability works abnormally. |

**Example**

```TypeScript
import { dlpPermission } from '@kit.DataProtectionKit';

dlpPermission.getDLPSupportedFileTypes((err, fileTypes) => {
  if (err != undefined) {
    console.error('getDLPSupportedFileTypes error', err.code, err.message);
  } else {
    console.info('fileTypes', JSON.stringify(fileTypes));
  }
}); // Obtain the file types that support DLP.

```

