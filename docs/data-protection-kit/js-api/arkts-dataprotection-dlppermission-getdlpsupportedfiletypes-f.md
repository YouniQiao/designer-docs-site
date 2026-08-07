# getDLPSupportedFileTypes

## getDLPSupportedFileTypes

```TypeScript
function getDLPSupportedFileTypes(): Promise<Array<string>>
```

Obtains the file name extension types that support DLP. After the API is successfully called, the list of supported file types is returned, indicating the types of files that can be used to generate DLP files. This API uses a promise to return the result.

This API is used to obtain the types of files that can be used to generate DLP files. If the current file type is in the list, it can be encrypted.

**Since:** 10

**ArkTS mode:** ArkTS-Dyn only, since version 10.

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
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let res = dlpPermission.getDLPSupportedFileTypes(); // Obtain the file types that support DLP.
  console.info('res', JSON.stringify(res));
} catch (err) {
  console.error('error', (err as BusinessError).code, (err as BusinessError).message); // Throw an error if the operation fails.
}
```


## getDLPSupportedFileTypes

```TypeScript
function getDLPSupportedFileTypes(callback: AsyncCallback<Array<string>>): void
```

Obtains the file name extension types that support DLP. After the API is successfully called, the list of supported file types is returned, indicating the types of files that can be used to generate DLP files. This API uses an asynchronous callback to return the result.

This API is used to obtain the types of files that can be used to generate DLP files. If the current file type is in the list, it can be encrypted.

**Since:** 10

**ArkTS mode:** ArkTS-Dyn only, since version 10.

<!--Device-dlpPermission-function getDLPSupportedFileTypes(callback: AsyncCallback<Array<string>>): void--><!--Device-dlpPermission-function getDLPSupportedFileTypes(callback: AsyncCallback<Array<string>>): void-End-->

**System capability:** SystemCapability.Security.DataLossPrevention

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;Array&lt;string&gt;&gt; | Yes | Callback used to return the result. If the operation is successful, **err** is **undefined**. Otherwise, **err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Incorrect parameter types. |
| [19100001](../errorcode-dlp.md#19100001-invalid-parameter) | Invalid parameter value. |
| [19100011](../errorcode-dlp.md#19100011-system-service-abnormal) | The system ability works abnormally. |

**Example**

```TypeScript
import { dlpPermission } from '@kit.DataProtectionKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  dlpPermission.getDLPSupportedFileTypes((err, res) => {
    if (err != undefined) {
      console.error('getDLPSupportedFileTypes error', err.code, err.message);
    } else {
      console.info('res', JSON.stringify(res));
    }
  }); // Obtain the file types that support DLP.
} catch (err) {
  console.error('getDLPSupportedFileTypes error', (err as BusinessError).code, (err as BusinessError).message);
}
```

