# getBackupInfo

## getBackupInfo

```TypeScript
function getBackupInfo(bundleToBackup: string): string
```

Get Backup information from bundle.

**起始版本：** 12

**需要权限：** 

 ohos.permission.BACKUP

**系统能力：** SystemCapability.FileManagement.StorageService.Backup

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| bundleToBackup | string | 是 | Bundle to backup. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| string | Return the backup application's info. |

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

function getBackupInfo() {
  try {
    let backupApp = "com.example.hiworld";
    let result = backup.getBackupInfo(backupApp);
    console.info('getBackupInfo success， result: ' + result);
  } catch (error) {
    let err: BusinessError = error as BusinessError;
    console.error(`getBackupInfo failed. Code: ${err.code}, message: ${err.message}`);
  }
}

```

