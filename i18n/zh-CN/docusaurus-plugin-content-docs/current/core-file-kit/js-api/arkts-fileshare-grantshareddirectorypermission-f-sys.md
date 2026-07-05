# grantSharedDirectoryPermission

## grantSharedDirectoryPermission

```TypeScript
function grantSharedDirectoryPermission(): Promise<void>
```

Provides a permission grant for application-shared directories

**起始版本：** 26.0.0

**需要权限：** 

 ohos.permission.ACCESS_SHARED_FILE

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.FileManagement.AppFileService.FolderAuthorization

**系统接口：** 此接口为系统接口。

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

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { fileShare } from '@kit.CoreFileKit';

async function grantSharedDirectoryPermission() {
  try {
    fileShare.grantSharedDirectoryPermission().then(() => {
      console.info("grantSharedDirectoryPermission success")
    }).catch((err: BusinessError) => {
      console.error("grantSharedDirectoryPermission err : " + JSON.stringify(err))
    });
  }
  catch (error) {
    console.error('grantSharedDirectoryPermission error, Code: ' + error.code + ', message: ' + error.message);
  }
}

```

