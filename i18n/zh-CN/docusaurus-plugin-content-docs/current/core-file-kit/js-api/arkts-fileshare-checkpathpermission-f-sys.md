# checkPathPermission

## checkPathPermission

```TypeScript
function checkPathPermission(tokenID: int, policies: Array<PathPolicyInfo>, policyType: PolicyType): Promise<Array<boolean>>
```

Check permissions for the path.

**起始版本：** 15

**需要权限：** 

 ohos.permission.CHECK_SANDBOX_POLICY

**系统能力：** SystemCapability.FileManagement.AppFileService.FolderAuthorization

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| tokenID | int | 是 | Token ID of the application. |
| policies | Array&lt;PathPolicyInfo> | 是 | Policy information to check on paths. |
| policyType | PolicyType | 是 | Persistent or temporary type. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Array&lt;boolean>> | Returns the permission state of paths. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission verification failed, usually the result returned by VerifyAccessToken. |
| 202 | The caller is not a system application |
| 401 | Parameter error.Possible causes:1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 801 | Capability not supported. |
| 13900042 | Out of memory. |

**示例：**

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
    let tokenid = 537688848; // 系统应用可以通过bundleManager.getApplicationInfo获取,普通应用可以通过bundleManager.getBundleInfoForSelf获取

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

