# updateSendRate

## updateSendRate

```TypeScript
function updateSendRate(bundleName: string, sendRate: int): boolean
```

Update send file fd rate.

**起始版本：** 12

**需要权限：** 

 ohos.permission.BACKUP

**系统能力：** SystemCapability.FileManagement.StorageService.Backup

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| bundleName | string | 是 | set update to bundleName app. |
| sendRate | int | 是 | set send file fd rate. |

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

function updateSendRate() {
  try {
    let bundleName = "com.example.myApp";
    let sendRate = 300;
    let result = backup.updateSendRate(bundleName, sendRate);
    if (result) {
      console.info('updateSendRate success');
    } else {
      console.info('updateSendRate fail');
    }
  } catch (error) {
    let err: BusinessError = error as BusinessError;
    console.error(`updateSendRate failed. Code: ${err.code}, message: ${err.message}`);
  }
}

```

