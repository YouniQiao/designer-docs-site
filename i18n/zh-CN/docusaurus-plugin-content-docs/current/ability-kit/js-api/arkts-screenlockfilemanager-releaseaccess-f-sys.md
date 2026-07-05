# releaseAccess

## releaseAccess

```TypeScript
function releaseAccess(dataType: DataType): ReleaseStatus
```

Release the access of the specified data type and do not allow data access under the lock screen.

**起始版本：** 12

**需要权限：** 

 ohos.permission.ACCESS_SCREEN_LOCK_MEDIA_DATA or ohos.permission.ACCESS_SCREEN_LOCK_ALL_DATA

**系统能力：** SystemCapability.Security.ScreenLockFileManager

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| dataType | DataType | 是 | Indicates the specified data type and do not allow data access under the lock screen. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| ReleaseStatus | Returns release the access result. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission verification failed, usually returned by VerifyAccessToken. |
| 202 | Permission verification failed, application which is not a system application uses system API. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameter is left unspecified. 2. Incorrect parameter types. |
| 801 | The specified SystemCapability name was not found. |
| 29300001 | Invalid DataType. |
| 29300002 | The system ability works abnormally. |
| 29300003 | The application is not enabled the data protection under lock screen. |
| 29300005 | File access was not acquired. |

**示例：**

```TypeScript
// 释放锁屏下媒体类型数据的访问权限
import { screenLockFileManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
    // 释放访问权限
    let releaseStatus = screenLockFileManager.releaseAccess(screenLockFileManager.DataType.MEDIA_DATA);
    if (releaseStatus === screenLockFileManager.ReleaseStatus.RELEASE_GRANTED) {
        hilog.info(0x0000, 'testTag', 'releaseAccess successfully.');
    }
} catch (err) {
    let message = (err as BusinessError).message;
    hilog.error(0x0000, 'testTag', 'releaseAccess failed: %{public}s', message);
}

```

