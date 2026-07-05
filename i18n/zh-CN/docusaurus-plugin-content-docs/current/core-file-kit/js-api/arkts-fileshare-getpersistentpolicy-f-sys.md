# getPersistentPolicy

## getPersistentPolicy

```TypeScript
function getPersistentPolicy(tokenID: int): Promise<Array<PolicyInfo>>
```

Get all persistence permissions for the application.

**起始版本：** 26.0.0

**需要权限：** 

 ohos.permission.GET_FILE_ACCESS_PERSIST

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
| Promise&lt;Array&lt;PolicyInfo>> | Returns all persistence policy information. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission verification failed, usually the result returned by VerifyAccessToken. |
| 202 | The caller is not a system application. |
| 801 | Capability not supported. |
| 13900001 | Operation not permitted. |
| 13900011 | Out of memory |
| 13900020 | Invalid tokenID |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { fileShare } from '@kit.CoreFileKit';

async function getPersistentPolicyExample() {
  try {
    let tokenid = 537688848; // 系统应用可以通过bundleManager.getApplicationInfo获取。
    fileShare.getPersistentPolicy(tokenid).then((result: Array<fileShare.PolicyInfo>) => {
      for (let policy of result) {
        console.info('get persist policy URI: ' + policy.uri + ', operationMode: ' + policy.operationMode);
      }
    }).catch((err: BusinessError) => {
      console.error("get persist policy failed with error, Code: " + err.code + ", message: " + err.message);
    });
  }
  catch (error) {
    console.error('get persist policy failed with error, Code: ' + error.code + ', message: ' + error.message);
  }
}

```

