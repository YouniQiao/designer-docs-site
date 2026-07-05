# deactivatePermission

## deactivatePermission

```TypeScript
function deactivatePermission(policies: Array<PolicyInfo>): Promise<void>
```

Stop the authorized URI that has been enabled

**起始版本：** 11

**需要权限：** 

 ohos.permission.FILE_ACCESS_PERSIST

**系统能力：** SystemCapability.FileManagement.AppFileService.FolderAuthorization

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| policies | Array&lt;PolicyInfo> | 是 | Policy information to grant permission on URIs. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | the promise returned by the function. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission verification failed, usually the result returned by VerifyAccessToken. |
| 401 | Parameter error.Possible causes:1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 801 | Capability not supported. |
| 13900001 | Operation not permitted. |
| 13900042 | Out of memory |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

async function deactivatePermissionExample() {
  try {
    let uri = "file://docs/storage/Users/username/tmp.txt";
    let policyInfo: fileShare.PolicyInfo = {
      uri: uri,
      // 可以组合取消使能多个权限，例如读写权限可使用 fileShare.OperationMode.READ_MODE | fileShare.OperationMode.WRITE_MODE
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

