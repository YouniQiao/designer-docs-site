# cancelRetentionState

## Modules to Import

```TypeScript
import { dlpPermission } from '@kit.DataProtectionKit';
```

<a id="cancelretentionstate"></a>
## cancelRetentionState

```TypeScript
function cancelRetentionState(docUris: Array<string>): Promise<void>
```

Cancels the sandbox retention state, that is, allows the sandbox application to be automatically uninstalled when the DLP file is closed. This API uses a promise to return the result.

This API is used to cancel the retention state for sandbox application and restore the default behavior to release system resources. It is applicable to scenarios where the DLP file is no longer frequently accessed.

**Since:** 10

<!--Device-dlpPermission-function cancelRetentionState(docUris: Array<string>): Promise<void>--><!--Device-dlpPermission-function cancelRetentionState(docUris: Array<string>): Promise<void>-End-->

**System capability:** SystemCapability.Security.DataLossPrevention

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| docUris | Array&lt;string&gt; | Yes | URIs of the files to be canceled with the retention state. The length of the array is not limited. Each string contains a maximum of 4095 bytes. If the string is out of range, error code401 is thrown. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.2. Incorrect parameter types. |
| [19100001](../errorcode-dlp.md#19100001-invalid-parameter) | Invalid parameter value. |
| [19100011](../errorcode-dlp.md#19100011-system-service-abnormal) | The system ability works abnormally. |

**Example**

```TypeScript
import { dlpPermission } from '@kit.DataProtectionKit';

let uri = "file://docs/storage/Users/currentUser/Desktop/test.txt.dlp";
dlpPermission.cancelRetentionState([uri]).then(() => { // Cancel the retention state for a sandbox application.
  console.info('success!');
}).catch((error: BusinessError)=> {
  console.error(JSON.stringify(error));
});

```


<a id="cancelretentionstate-1"></a>
## cancelRetentionState

```TypeScript
function cancelRetentionState(docUris: Array<string>, callback: AsyncCallback<void>): void
```

Cancels the sandbox retention state, that is, allows the sandbox application to be automatically uninstalled when the DLP file is closed. This API uses an asynchronous callback to return the result.

This API is used to cancel the retention state for sandbox application and restore the default behavior to release system resources. It is applicable to scenarios where the DLP file is no longer frequently accessed.

**Since:** 10

<!--Device-dlpPermission-function cancelRetentionState(docUris: Array<string>, callback: AsyncCallback<void>): void--><!--Device-dlpPermission-function cancelRetentionState(docUris: Array<string>, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Security.DataLossPrevention

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| docUris | Array&lt;string&gt; | Yes | URIs of the files to be canceled with the retention state. The length of the array is not limited. Each string contains a maximum of 4095 bytes. If the string is out of range, error code401 is thrown. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;void&gt; | Yes | Callback used to return the result. If the operation is successful,**err** is **undefined**. Otherwise, **err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.2. Incorrect parameter types. |
| [19100001](../errorcode-dlp.md#19100001-invalid-parameter) | Invalid parameter value. |
| [19100011](../errorcode-dlp.md#19100011-system-service-abnormal) | The system ability works abnormally. |

**Example**

```TypeScript
import { dlpPermission } from '@kit.DataProtectionKit';

let uri = "file://docs/storage/Users/currentUser/Desktop/test.txt.dlp";
dlpPermission.cancelRetentionState([uri], (err, res) => {
  if (err != undefined) {
    console.error('cancelRetentionState error,', err.code, err.message);
  } else {
    console.info('cancelRetentionState success');
  }
}); // Cancel the sandbox retention state.

```

