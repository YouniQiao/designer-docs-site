# deactivatePermission

## Modules to Import

```TypeScript
import { fileShare } from '@ohos.fileshare';
```

## deactivatePermission

```TypeScript
function deactivatePermission(policies: Array<PolicyInfo>): Promise<void>
```

Stop the authorized URI that has been enabled

**Since:** 11

**Required permissions:** ohos.permission.FILE_ACCESS_PERSIST

**System capability:** SystemCapability.FileManagement.AppFileService.FolderAuthorization

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| policies | Array&lt;PolicyInfo&gt; | Yes | Policy information to grant permission on URIs. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | the promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed, usually the result returned by VerifyAccessToken. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error.Possible causes:1.Mandatory parameters are left unspecified;<br>2.Incorrect parameter types. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| 13900001 | Operation not permitted. |
| 13900042 | Out of memory |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

async function deactivatePermissionExample() {
  try {
    let uri = "file://docs/storage/Users/username/tmp.txt";
    let policyInfo: fileShare.PolicyInfo = {
      uri: uri,
      // Multiple permissions can be deactivated in combination. For example, the read and write permissions can be deactivated using fileShare.OperationMode.READ_MODE | fileShare.OperationMode.WRITE_MODE.
      operationMode: fileShare.OperationMode.READ_MODE,
    };
    let policies: Array<fileShare.PolicyInfo> = [policyInfo];
    fileShare.deactivatePermission(policies).then(() => {
      console.info("deactivatePermission successfully");
    }).catch((err: BusinessError<Array<fileShare.PolicyErrorResult>>) => {
      console.error("deactivatePermission failed with error message: " + err.message + ", error code: " + err.code);
        if (err.code == 13900001 && err.data) {
          for (let i = 0; i < err.data.length; i++) {
            console.error("error code : " + JSON.stringify(err.data[i].code));
            console.error("error uri : " + JSON.stringify(err.data[i].uri));
            console.error("error reason : " + JSON.stringify(err.data[i].message));
          }
        }
    });
  } catch (error) {
    let err: BusinessError = error as BusinessError;
    console.error('deactivatePermission failed with err: ' + JSON.stringify(err));
  }
}

```

