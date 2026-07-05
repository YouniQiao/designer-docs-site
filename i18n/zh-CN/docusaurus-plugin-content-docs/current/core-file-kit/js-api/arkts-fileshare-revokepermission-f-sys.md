# revokePermission

## revokePermission

```TypeScript
function revokePermission(tokenID: int): Promise<void>
```

Revoke all persistence permissions for the application.

**起始版本：** 26.0.0

**需要权限：** 

 ohos.permission.REVOKE_FILE_ACCESS_PERSIST

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.FileManagement.AppFileService.FolderAuthorization

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| tokenID | int | 是 | Token ID of the application. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | the promise returned by the function. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission verification failed, usually the result returned by VerifyAccessToken. |
| 202 | The caller is not a system application. |
| 801 | Capability not supported. |
| 13900001 | Operation not permitted. |
| 13900020 | Invalid tokenID |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { fileShare } from '@kit.CoreFileKit';

async function revokeAllPermissionExample() {
  try {
    let tokenid = 537688848; // 系统应用可以通过bundleManager.getApplicationInfo获取。
    fileShare.revokePermission(tokenid).then(() => {
      console.info("revoke persist permission successfully.");
    }).catch((err: BusinessError) => {
      console.error("revoke persist permission failed, Code: " + err.code + ", message: " + err.message);
    });
  }
  catch (error) {
    console.error('revoke persist permission failed error, Code: ' + error.code + ', message: ' + error.message);
  }
}

```

## revokePermission

```TypeScript
function revokePermission(tokenID: int, policies: Array<PolicyInfo>): Promise<void>
```

Revoke persistence permissions for the URI.

**起始版本：** 26.0.0

**需要权限：** 

 ohos.permission.REVOKE_FILE_ACCESS_PERSIST

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.FileManagement.AppFileService.FolderAuthorization

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| tokenID | int | 是 | Token ID of the application. |
| policies | Array&lt;PolicyInfo> | 是 | Policy information to revoke permission on URIs. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | the promise returned by the function. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission verification failed, usually the result returned by VerifyAccessToken. |
| 202 | The caller is not a system application. |
| 401 | Parameter error.Possible causes:1.Mandatory parameters are left unspecified;  2.Incorrect parameter types; 3.Invalid policy size. |
| 801 | Capability not supported. |
| 13900001 | Operation not permitted. |
| 13900011 | Out of memory |
| 13900020 | Invalid tokenID |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { fileShare } from '@kit.CoreFileKit';

async function revokeSpecificPermissionExample() {
  try {
    let tokenid = 537688848; // 系统应用可以通过bundleManager.getApplicationInfo获取。
    let policyInfo: fileShare.PolicyInfo = {
      uri: "file://docs/storage/Users/currentUser/Documents/1.txt",
      operationMode: fileShare.OperationMode.READ_MODE | fileShare.OperationMode.WRITE_MODE,
    };
    let policies: Array<fileShare.PolicyInfo> = [policyInfo];
    fileShare.revokePermission(tokenid, policies).then(() => {
      console.info("revoke persist permission successfully.");
    }).catch((err: BusinessError<Array<fileShare.PolicyErrorResult>>) => {
      console.error("revoke persist permission failed. Code: " + err.code + ", message: " + err.message);
      if (err.code == 13900001 && err.data) {
        for (let i = 0; i < err.data.length; i++) {
          console.error("error code : " + JSON.stringify(err.data[i].code));
          console.error("error uri : " + JSON.stringify(err.data[i].uri));
          console.error("error reason : " + JSON.stringify(err.data[i].message));
        }
      }
    });
  }
  catch (error) {
    console.error('revokePermission error, Code: ' + error.code + ', message: ' + error.message);
  }
}

```

