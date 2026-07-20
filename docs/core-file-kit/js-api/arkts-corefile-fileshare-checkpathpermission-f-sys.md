# checkPathPermission (System API)

## Modules to Import

```TypeScript
import { fileShare } from '@kit.CoreFileKit';
```

## checkPathPermission

```TypeScript
function checkPathPermission(tokenID: number, policies: Array<PathPolicyInfo>, policyType: PolicyType): Promise<Array<boolean>>
```

Check permissions for the path.

**Since:** 15

**Required permissions:** ohos.permission.CHECK_SANDBOX_POLICY

<!--Device-fileShare-function checkPathPermission(tokenID: int, policies: Array<PathPolicyInfo>, policyType: PolicyType): Promise<Array<boolean>>--><!--Device-fileShare-function checkPathPermission(tokenID: int, policies: Array<PathPolicyInfo>, policyType: PolicyType): Promise<Array<boolean>>-End-->

**System capability:** SystemCapability.FileManagement.AppFileService.FolderAuthorization

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| tokenID | number | Yes | Token ID of the application. |
| policies | [Array](../../apis-na/arkts-apis/arkts-na-lib-es5-array-i.md)<PathPolicyInfo> | Yes | Policy information to check on paths. |
| policyType | [PolicyType](arkts-corefile-fileshare-policytype-e.md) | Yes | Persistent or temporary type. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<Array<boolean>> | Returns the permission state of paths. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed, usually the result returned by VerifyAccessToken. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | The caller is not a system application |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error.Possible causes:1.Mandatory parameters are left unspecified;<br>2.Incorrect parameter types. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
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

