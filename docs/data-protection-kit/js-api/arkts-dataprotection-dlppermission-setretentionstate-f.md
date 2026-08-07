# setRetentionState

## setRetentionState

```TypeScript
function setRetentionState(docUris: Array<string>): Promise<void>
```

Sets the retention state for sandbox applications. By default, when a DLP file is opened, the system automatically creates a sandbox environment. After the file is closed, the sandbox is automatically destroyed.After the retention state is set, the sandbox environment is retained even if the DLP file is closed, allowing the system to quickly reopen the same DLP file. This is applicable to scenarios where the same DLP file needs to be frequently operated, improving the file opening efficiency. This API uses a promise to return the result.

**Since:** 10

**ArkTS mode:** ArkTS-Dyn only, since version 10.

<!--Device-dlpPermission-function setRetentionState(docUris: Array<string>): Promise<void>--><!--Device-dlpPermission-function setRetentionState(docUris: Array<string>): Promise<void>-End-->

**System capability:** SystemCapability.Security.DataLossPrevention

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| docUris | Array&lt;string&gt; | Yes | URIs of the files to be set with the retention state. The length of the array is not limited. Each string contains a maximum of 4095 bytes. If the string is out of range, error code 401 is thrown. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types. |
| [19100001](../errorcode-dlp.md#19100001-invalid-parameter) | Invalid parameter value. |
| [19100006](../errorcode-dlp.md#19100006-access-denied-for-a-nondlp-sandbox-application) | No permission to call this API, which is available only for DLP sandbox applications. |
| [19100011](../errorcode-dlp.md#19100011-system-service-abnormal) | The system ability works abnormally. |

**Example**

```TypeScript
import { dlpPermission } from '@kit.DataProtectionKit';
import { BusinessError } from '@kit.BasicServicesKit';

async function ExampleFunction() {
  let uri = "file://docs/storage/Users/currentUser/Desktop/test.txt.dlp";
  try {
    let inSandbox = await dlpPermission.isInSandbox(); // Check whether the application is running in a sandbox.
    if (inSandbox) {
      dlpPermission.setRetentionState([uri]); // Set the retention state for a sandbox application.
    }
  } catch (err) {
    console.error('error', (err as BusinessError).code, (err as BusinessError).message); // Throw an error if the operation fails.
  }
}
```


## setRetentionState

```TypeScript
function setRetentionState(docUris: Array<string>, callback: AsyncCallback<void>): void
```

Sets the retention state for sandbox applications. By default, when a DLP file is opened, the system automatically creates a sandbox environment. After the file is closed, the sandbox is automatically destroyed.After the retention state is set, the sandbox environment is retained even if the DLP file is closed, allowing the system to quickly reopen the same DLP file. This is applicable to scenarios where the same DLP file needs to be frequently operated, improving the file opening efficiency.

**Since:** 10

**ArkTS mode:** ArkTS-Dyn only, since version 10.

<!--Device-dlpPermission-function setRetentionState(docUris: Array<string>, callback: AsyncCallback<void>): void--><!--Device-dlpPermission-function setRetentionState(docUris: Array<string>, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Security.DataLossPrevention

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| docUris | Array&lt;string&gt; | Yes | URIs of the files to be set with the retention state. The length of the array is not limited. Each string contains a maximum of 4095 bytes. If the string is out of range, error code 401 is thrown. |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;void&gt; | Yes | Callback used to return the result. If the operation is successful, **err** is **undefined**. Otherwise, **err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types. |
| [19100001](../errorcode-dlp.md#19100001-invalid-parameter) | Invalid parameter value. |
| [19100006](../errorcode-dlp.md#19100006-access-denied-for-a-nondlp-sandbox-application) | No permission to call this API, which is available only for DLP sandbox applications. |
| [19100011](../errorcode-dlp.md#19100011-system-service-abnormal) | The system ability works abnormally. |

**Example**

```TypeScript
import { dlpPermission } from '@kit.DataProtectionKit';
import { BusinessError } from '@kit.BasicServicesKit';

let uri = "file://docs/storage/Users/currentUser/Desktop/test.txt.dlp";
try {
  dlpPermission.setRetentionState([uri], (err, res) => {
    if (err != undefined) {
      console.error('setRetentionState error,', err.code, err.message);
    } else {
      console.info('setRetentionState success');
      console.info('res', JSON.stringify(res));
    }
  }); // Set the sandbox retention state.
} catch (err) {
  console.error('setRetentionState error,', (err as BusinessError).code, (err as BusinessError).message);
}
```

