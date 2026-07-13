# getDLPFileAccessRecords

## Modules to Import

```TypeScript
import { dlpPermission } from '@kit.DataProtectionKit';
```

## getDLPFileAccessRecords

```TypeScript
function getDLPFileAccessRecords(): Promise<Array<AccessedDLPFileInfo>>
```

Obtains the list of DLP files that are accessed recently. After the API is successfully called, the file access
records are returned, which can be used to track and manage the usage of DLP files. This API can be called only
in non-DLP sandbox applications. This API uses a promise to return the result.

This API is used to obtain the list of DLP files that are accessed recently, which can be used to track and
manage file usage.

**Since:** 10

**System capability:** SystemCapability.Security.DataLossPrevention

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;AccessedDLPFileInfo&gt;&gt; | Promise used to return the list of recently accessed DLP filesobtained. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [19100001](../errorcode-dlp.md#19100001-invalid-parameter) | Invalid parameter value. |
| [19100007](../errorcode-dlp.md#19100007-access-denied-for-a-dlp-sandbox-application) | No permission to call this API,which is available only for non-DLP sandbox applications. |
| [19100011](../errorcode-dlp.md#19100011-system-service-abnormal) | The system ability works abnormally. |

**Example**

```TypeScript
import { dlpPermission } from '@kit.DataProtectionKit';

dlpPermission.getDLPFileAccessRecords().then((accessRecords) => { // Obtain the list of recently accessed DLP files.
  console.info('accessRecords', JSON.stringify(accessRecords));
}).catch((error: BusinessError)=> {
  console.error(JSON.stringify(error));
});

```


## getDLPFileAccessRecords

```TypeScript
function getDLPFileAccessRecords(callback: AsyncCallback<Array<AccessedDLPFileInfo>>): void
```

Obtains the list of DLP files that are accessed recently. After the API is successfully called, the file access
records are returned, which can be used to track and manage the usage of DLP files. This API uses an asynchronous
callback to return the result.

This API is used to obtain the list of DLP files that are accessed recently, which can be used to track and
manage file usage.

**Since:** 10

**System capability:** SystemCapability.Security.DataLossPrevention

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;Array&lt;AccessedDLPFileInfo&gt;&gt; | Yes | Callback used to return the result. If theoperation is successful, **err** is **undefined**. Otherwise, **err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Incorrect parameter types. |
| [19100001](../errorcode-dlp.md#19100001-invalid-parameter) | Invalid parameter value. |
| [19100007](../errorcode-dlp.md#19100007-access-denied-for-a-dlp-sandbox-application) | No permission to call this API,which is available only for non-DLP sandbox applications. |
| [19100011](../errorcode-dlp.md#19100011-system-service-abnormal) | The system ability works abnormally. |

**Example**

```TypeScript
import { dlpPermission } from '@kit.DataProtectionKit';

dlpPermission.getDLPFileAccessRecords((err, accessRecords) => {
  if (err != undefined) {
    console.error('getDLPFileAccessRecords error,', err.code, err.message);
  } else {
    console.info('accessRecords', JSON.stringify(accessRecords));
  }
}); // Obtain the list of recently accessed DLP files.

```

