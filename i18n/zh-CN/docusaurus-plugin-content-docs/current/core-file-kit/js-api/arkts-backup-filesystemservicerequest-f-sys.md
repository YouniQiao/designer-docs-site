# fileSystemServiceRequest

## fileSystemServiceRequest

```TypeScript
function fileSystemServiceRequest(config: FileSystemRequestConfig): Promise<int>
```

Requests filesystem garbage collection with specified configuration.

**起始版本：** 23

**需要权限：** 

 ohos.permission.BACKUP

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.FileManagement.StorageService.Backup

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| config | FileSystemRequestConfig | 是 | Configuration parameters for garbage collection.  triggerType: 0. writeSize: 0 - 2097152(MB). waitTime: 0-300(s). |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;int> | The errcode of garbage collection. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission verification failed, usually the result returned by VerifyAccessToken. |
| 202 | Permission verification failed,  application which is not a system application uses system API. |
| 13900020 | Invalid argument |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { backup } from '@kit.CoreFileKit';

async function testFunction(size: number) {
  try {
    const result = await backup.fileSystemServiceRequest({
      triggerType: 0,
      writeSize: size,
      waitTime: 180
    });
    console.info(`fileSystemServiceRequest result: ${result}`);
  } catch (error) {
    let err: BusinessError = error as BusinessError;
    console.error(`fileSystemServiceRequest err:` + err);
  }
}

```

