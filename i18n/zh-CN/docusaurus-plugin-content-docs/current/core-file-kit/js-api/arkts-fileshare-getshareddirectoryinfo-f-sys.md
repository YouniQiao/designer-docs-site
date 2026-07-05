# getSharedDirectoryInfo

## getSharedDirectoryInfo

```TypeScript
function getSharedDirectoryInfo(): Promise<Array<SharedDirectoryInfo>>
```

Gets the shared sandbox directories of applications

**起始版本：** 26.0.0

**需要权限：** 

 ohos.permission.ACCESS_SHARED_FILE

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.FileManagement.AppFileService.FolderAuthorization

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Array&lt;SharedDirectoryInfo>> | Returns the shared sandbox directories on paths. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission verification failed, usually the result returned by VerifyAccessToken. |
| 202 | The caller is not a system application. |
| 801 | Capability not supported. |
| 13900001 | Operation not permitted. |
| 13900011 | Out of memory. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { fileShare } from '@kit.CoreFileKit';

async function getSharedDirectoryInfo() {
  try {
    fileShare.getSharedDirectoryInfo().then((infos: Array<fileShare.SharedDirectoryInfo>) => {
      infos.forEach((info: fileShare.SharedDirectoryInfo) => {
        console.info("bundleName=" + info.bundleName + " path=" + info.path + " mode=" + info.permissionMode);
      });
    }).catch((err: BusinessError) => {
      console.error("getSharedDirectoryInfo err : " + JSON.stringify(err))
    });
  }
  catch (error) {
    console.error('getSharedDirectoryInfo error, Code: ' + error.code + ', message: ' + error.message);
  }
}

```

