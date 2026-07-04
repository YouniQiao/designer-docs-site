# getDLPPermissionInfo

## Modules to Import

```TypeScript
import { dlpPermission } from '@ohos.dlpPermission';
```

## getDLPPermissionInfo

```TypeScript
function getDLPPermissionInfo(): Promise<DLPPermissionInfo>
```

Queries the permission information of the current DLP sandbox, including permissions on the file and operations that can be performed (such as viewing, editing, and copying). This API can be called only in DLP sandbox applications. This API uses a promise to return the result. When processing files in the DLP sandbox, the system determines the operations that can be performed for the current user to prevent calling unauthorized capabilities.

**Since:** 10

**System capability:** SystemCapability.Security.DataLossPrevention

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;DLPPermissionInfo&gt; | Promise used to return the permission information about the DLP file. Theoperation is successful if no error is reported. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [19100001](../errorcode-dlp.md#19100001-invalid-parameter) | Invalid parameter value. |
| [19100006](../errorcode-dlp.md#19100006-access-denied-for-a-nondlp-sandbox-application) | No permission to call this API,which is available only for DLP sandbox applications. |
| [19100011](../errorcode-dlp.md#19100011-system-service-abnormal) | The system ability works abnormally. |

**Example**

```TypeScript
import { dlpPermission } from '@kit.DataProtectionKit';

dlpPermission.isInSandbox().then(async (inSandbox) => { // Check whether the application is running in a sandbox.
  if (inSandbox) {
    dlpPermission.getDLPPermissionInfo().then((permissionInfo: dlpPermission.DLPPermissionInfo) => {
      console.info('permissionInfo', JSON.stringify(permissionInfo));
    }).catch((error: BusinessError)=> {
      console.error(JSON.stringify(error));
    })
  }
});

```


## getDLPPermissionInfo

```TypeScript
function getDLPPermissionInfo(callback: AsyncCallback<DLPPermissionInfo>): void
```

Obtains the permission information of this DLP file. The returned permission information includes permissions on the file and operations that can be performed (such as viewing, editing, and copying). This API uses an asynchronous callback to return the result. When processing files in the DLP sandbox, the system determines the operations that can be performed for the current user to prevent calling unauthorized capabilities.

**Since:** 10

**System capability:** SystemCapability.Security.DataLossPrevention

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;DLPPermissionInfo&gt; | Yes | Callback used to return the result. If the operation issuccessful, **err** is **undefined**. Otherwise, **err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Incorrect parameter types. |
| [19100001](../errorcode-dlp.md#19100001-invalid-parameter) | Invalid parameter value. |
| [19100006](../errorcode-dlp.md#19100006-access-denied-for-a-nondlp-sandbox-application) | No permission to call this API,which is available only for DLP sandbox applications. |
| [19100011](../errorcode-dlp.md#19100011-system-service-abnormal) | The system ability works abnormally. |

**Example**

```TypeScript
import { dlpPermission } from '@kit.DataProtectionKit';

dlpPermission.isInSandbox().then((inSandbox) => { // Check whether the application is running in a sandbox.
  if (inSandbox) {
    dlpPermission.getDLPPermissionInfo((err, permissionInfo) => { 
      if (err != undefined) {
        console.error('getDLPPermissionInfo error', err.code, err.message);
      } else {
        console.info('permissionInfo', JSON.stringify(permissionInfo));
      }
    }); // Obtain the permission information.
  }
});

```

