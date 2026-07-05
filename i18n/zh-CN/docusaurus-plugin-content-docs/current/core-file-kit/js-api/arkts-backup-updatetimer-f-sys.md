# updateTimer

## updateTimer

```TypeScript
function updateTimer(bundleName: string, timeout: int): boolean
```

Update backup or restore timeout.

**起始版本：** 12

**需要权限：** 

 ohos.permission.BACKUP

**系统能力：** SystemCapability.FileManagement.StorageService.Backup

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| bundleName | string | 是 | set update to bundleName app. |
| timeout | int | 是 | Update backup or restore timeout(unit:ms). |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Return update result, true is success, false is fail. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission verification failed, usually the result returned by VerifyAccessToken. |
| 202 | Permission verification failed, application which is not a system application uses system API. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. 3.Parameter verification failed. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { backup } from '@kit.CoreFileKit';

function updateTimer() {
  try {
    let timeout = 30000;
    let bundleName = "com.example.hiworld";
    let result = backup.updateTimer(bundleName, timeout);
    if (result) {
      console.info('updateTimer success');
    } else {
      console.info('updateTimer fail');
    }
  } catch (error) {
    let err: BusinessError = error as BusinessError;
    console.error(`updateTimer failed. Code: ${err.code}, message: ${err.message}`);
  }
}

```

