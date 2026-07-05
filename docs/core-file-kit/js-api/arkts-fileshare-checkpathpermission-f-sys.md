# checkPathPermission

## checkPathPermission

```TypeScript
function checkPathPermission(tokenID: int, policies: Array<PathPolicyInfo>, policyType: PolicyType): Promise<Array<boolean>>
```

Check permissions for the path.

**Since:** 15

**Required permissions:** 

 ohos.permission.CHECK_SANDBOX_POLICY

**System capability:** SystemCapability.FileManagement.AppFileService.FolderAuthorization

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| tokenID | int | Yes | Token ID of the application. |
| policies | Array&lt;PathPolicyInfo> | Yes | Policy information to check on paths. |
| policyType | PolicyType | Yes | Persistent or temporary type. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;boolean>> | Returns the permission state of paths. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed, usually the result returned by VerifyAccessToken. |
| 202 | The caller is not a system application |
| 401 | Parameter error.Possible causes:1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 801 | Capability not supported. |
| 13900042 | Out of memory. |

**Example**

```TypeScript
import { fileShare } from '@kit.CoreFileKit';

async function checkPersistentPermissionExample() {
  try {
    let pathPolicyInfo1: fileShare.PathPolicyInfo = {
      path: "/storage/Users/currentUser/Documents/1.txt",
      operationMode: fileShare.OperationMode.READ_MODE,
    }
    let pathPolicyInfo2: fileShare.PathPolicyInfo = {
      path: "/storage/Users/currentUser/Desktop/2.txt",
      operationMode: fileShare.OperationMode.READ_MODE,
    }

    let policies: Array<fileShare.PathPolicyInfo> = [pathPolicyInfo1, pathPolicyInfo2];
    let policyType: fileShare.PolicyType = fileShare.PolicyType.PERSISTENT_TYPE;
    let tokenid = 537688848; // Use bundleManager.getApplicationInfo() to obtain the token ID for a system application, and use bundleManager.getBundleInfoForSelf() to obtain the token ID for a non-system application.

    fileShare.checkPathPermission(tokenid, policies, policyType).then((result:Array<boolean>) => {
      for (let x of result) {
        console.info('check permission result is', x);
      }
    })
    console.info("checkPathPermission finish");
  }
  catch (error) {
    console.info(error.code + 'checkPathPermission error' + error.message);
  }
}

```

